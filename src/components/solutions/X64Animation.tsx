
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
    
    // Three.js setup
    const container = containerRef.current;
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 8;
    cameraRef.current = camera;
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // Create x64 display group
    const x64Group = new THREE.Group();
    scene.add(x64Group);
    x64GroupRef.current = x64Group;
    
    // Animation variables
    let time = 0;
    
    // Animate all elements
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;
      
      if (!x64GroupRef.current) return;
      
      // Find child elements for animation
      const x64Text = findChildByType(x64GroupRef.current, "text");
      const particlesMesh = findChildByType(x64GroupRef.current, "particles") as THREE.Points | undefined;
      const circuitLines = findChildByType(x64GroupRef.current, "circuits");
      const systemCube = findChildByType(x64GroupRef.current, "cube") as THREE.Mesh | undefined;
      const codeSegments = findChildByType(x64GroupRef.current, "code");
      
      // Animate each component
      if (x64Text) animateX64Text(x64Text, time);
      if (particlesMesh) animateParticles(particlesMesh, time);
      if (circuitLines) animateCircuitLines(circuitLines, time);
      if (systemCube) animateSystemCube(systemCube, time);
      if (codeSegments) animateCodeSegments(codeSegments, time);
      
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
    
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = container.clientWidth / container.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(container.clientWidth, container.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      if (rendererRef.current && containerRef.current && containerRef.current.contains(rendererRef.current.domElement)) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [containerRef, mousePosition]);
  
  // Helper function to find child elements by their type
  const findChildByType = (parent: THREE.Group, type: string): THREE.Group | undefined => {
    // Each component will set its userData.type to identify itself
    return parent.children.find(
      child => child.userData?.type === type
    ) as THREE.Group | undefined;
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
