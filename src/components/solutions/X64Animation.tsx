
import { useEffect, useRef } from "react";
import * as THREE from "three";
import X64Text from "./X64Text";
import ParticleSystem from "./ParticleSystem";
import CircuitLines from "./CircuitLines";
import SystemCube from "./SystemCube";
import CodeSegments from "./CodeSegments";
import { useMouseInteraction } from "./hooks/useMouseInteraction";
import {
  animateX64Text,
  animateParticles,
  animateCircuitLines,
  animateSystemCube,
  animateCodeSegments,
  handleGroupMouseInteraction
} from "./utils/animationUtils";
import { 
  setupScene, 
  handleResize, 
  disposeResources 
} from "./utils/sceneUtils";

interface X64AnimationProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const X64Animation = ({ containerRef }: X64AnimationProps) => {
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const x64GroupRef = useRef<THREE.Group | null>(null);
  const frameIdRef = useRef<number>(0);
  const mousePosition = useMouseInteraction();
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Set up the scene using helper function
    const { scene, camera, renderer, x64Group } = setupScene(containerRef.current);
    
    // Store references
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    x64GroupRef.current = x64Group;
    
    // Animation variables
    let time = 0;
    
    // Throttle rendering for better performance
    let lastRenderTime = 0;
    const renderInterval = 1000 / 30; // Limit to 30fps
    
    // Animate all elements
    const animate = (currentTime: number) => {
      frameIdRef.current = requestAnimationFrame(animate);
      
      // Skip frame if not enough time has passed (throttling)
      if (currentTime - lastRenderTime < renderInterval) {
        return;
      }
      
      lastRenderTime = currentTime;
      time += 0.01;
      
      if (!x64GroupRef.current) return;
      
      // Find and animate each component
      animateComponents(x64GroupRef.current, time);
      
      // Interactive movement based on mouse position
      if (x64GroupRef.current) {
        handleGroupMouseInteraction(
          x64GroupRef.current, 
          mousePosition.x, 
          mousePosition.y, 
          time
        );
      }
      
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    
    animate(0);
    
    // Set up resize handler
    const resizeHandler = () => handleResize(containerRef.current, cameraRef.current, rendererRef.current);
    window.addEventListener('resize', resizeHandler);
    
    // Clean up
    return () => {
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
      
      if (rendererRef.current && containerRef.current && containerRef.current.contains(rendererRef.current.domElement)) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      disposeResources(sceneRef.current, rendererRef.current);
      window.removeEventListener('resize', resizeHandler);
    };
  }, [containerRef, mousePosition]);
  
  // Helper function to animate all components
  const animateComponents = (parent: THREE.Group, time: number) => {
    parent.children.forEach(child => {
      const type = child.userData?.type;
      
      if (type === "text") {
        animateX64Text(child, time);
      } else if (type === "particles" && child instanceof THREE.Points) {
        animateParticles(child, time);
      } else if (type === "circuits") {
        animateCircuitLines(child, time);
      } else if (type === "cube" && child instanceof THREE.Mesh) {
        animateSystemCube(child, time);
      } else if (type === "code") {
        animateCodeSegments(child, time);
      }
    });
  };
  
  return (
    <>
      {x64GroupRef.current && (
        <>
          <X64Text parentGroup={x64GroupRef.current} />
          <ParticleSystem parentGroup={x64GroupRef.current} />
          <CircuitLines parentGroup={x64GroupRef.current} />
          <SystemCube parentGroup={x64GroupRef.current} />
          <CodeSegments parentGroup={x64GroupRef.current} />
        </>
      )}
    </>
  );
};

export default X64Animation;
