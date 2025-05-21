
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
import { setupScene, handleResize } from "./utils/sceneUtils";

interface X64AnimationProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const X64Animation = ({ containerRef }: X64AnimationProps) => {
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const x64GroupRef = useRef<THREE.Group | null>(null);
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
    
    // Animate all elements
    const animate = () => {
      requestAnimationFrame(animate);
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
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Set up resize handler
    const resizeHandler = () => handleResize(containerRef.current, cameraRef.current, rendererRef.current);
    window.addEventListener('resize', resizeHandler);
    
    // Clean up
    return () => {
      if (rendererRef.current && containerRef.current && containerRef.current.contains(rendererRef.current.domElement)) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      window.removeEventListener('resize', resizeHandler);
    };
  }, [containerRef, mousePosition]);
  
  // Helper function to animate all components
  const animateComponents = (parent: THREE.Group, time: number) => {
    const x64Text = findChildByType(parent, "text");
    const particlesMesh = findChildByType(parent, "particles");
    const circuitLines = findChildByType(parent, "circuits");
    const systemCube = findChildByType(parent, "cube");
    const codeSegments = findChildByType(parent, "code");
    
    // Animate each component if it exists
    if (x64Text) animateX64Text(x64Text, time);
    if (particlesMesh && particlesMesh.isPoints) animateParticles(particlesMesh as THREE.Points, time);
    if (circuitLines) animateCircuitLines(circuitLines, time);
    if (systemCube && systemCube.isMesh) animateSystemCube(systemCube as THREE.Mesh, time);
    if (codeSegments) animateCodeSegments(codeSegments, time);
  };
  
  // Helper function to find child elements by their type
  const findChildByType = (parent: THREE.Group, type: string): THREE.Object3D | undefined => {
    return parent.children.find(child => child.userData?.type === type);
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
