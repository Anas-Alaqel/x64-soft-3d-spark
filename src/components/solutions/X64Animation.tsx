
import { useEffect, useRef } from "react";
import * as THREE from "three";
import X64Text from "./X64Text";
import ParticleSystem from "./ParticleSystem";
import CircuitLines from "./CircuitLines";
import SystemCube from "./SystemCube";
import CodeSegments from "./CodeSegments";

interface X64AnimationProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const X64Animation = ({ containerRef }: X64AnimationProps) => {
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const x64GroupRef = useRef<THREE.Group | null>(null);
  
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
    let mouseX = 0;
    let mouseY = 0;
    
    // Animate all elements
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;
      
      if (!x64GroupRef.current) return;
      
      // Get x64Text child
      const x64Text = x64GroupRef.current.children.find(
        child => child.type === "Group" && child.children.some(c => c instanceof THREE.Sprite)
      );
      
      // Get particles child
      const particlesMesh = x64GroupRef.current.children.find(
        child => child instanceof THREE.Points
      ) as THREE.Points | undefined;
      
      // Get circuit lines child
      const circuitLines = x64GroupRef.current.children.find(
        child => child.type === "Group" && child !== x64Text && child.children.some(c => c instanceof THREE.Line)
      );
      
      // Get system cube
      const systemCube = x64GroupRef.current.children.find(
        child => child instanceof THREE.Mesh
      ) as THREE.Mesh | undefined;
      
      // Get code segments
      const codeSegments = x64GroupRef.current.children.find(
        child => child.type === "Group" && 
        child !== x64Text && 
        child !== circuitLines &&
        child.children.some(c => c instanceof THREE.Sprite && c.userData?.angle !== undefined)
      );
      
      // Animate x64 text group
      if (x64Text) {
        x64Text.rotation.y = Math.sin(time * 0.5) * 0.1;
        x64Text.rotation.x = Math.cos(time * 0.3) * 0.05;
        
        // Pulse effect for text layers
        for (let i = 0; i < x64Text.children.length; i++) {
          const sprite = x64Text.children[i] as THREE.Sprite;
          sprite.scale.x = 5 + Math.sin(time * 2 + i * 0.1) * 0.1;
          sprite.scale.y = 2.5 + Math.sin(time * 2 + i * 0.1) * 0.05;
        }
      }
      
      // Animate particles
      if (particlesMesh) {
        particlesMesh.rotation.y = time * 0.05;
        particlesMesh.rotation.x = time * 0.025;
        const particlesMaterial = particlesMesh.material as THREE.PointsMaterial;
        particlesMaterial.size = 0.05 + Math.sin(time) * 0.01;
      }
      
      // Animate circuit lines
      if (circuitLines) {
        circuitLines.children.forEach((object, i) => {
          if (object instanceof THREE.Line) {
            // Safely access material property knowing it's LineBasicMaterial
            const lineMaterial = object.material as THREE.LineBasicMaterial;
            lineMaterial.opacity = 0.4 + Math.sin(time + i * 0.1) * 0.2;
          } else if (object instanceof THREE.Sprite) {
            // Handle sprite animations for binary texts
            object.position.y += Math.sin(time + i) * 0.005;
            object.rotation.z = Math.sin(time * 0.5) * 0.1;
          }
        });
      }
      
      // Animate system cube
      if (systemCube) {
        systemCube.rotation.x += 0.005;
        systemCube.rotation.y += 0.007;
        systemCube.position.y = 2 + Math.sin(time * 0.5) * 0.2;
      }
      
      // Animate floating code segments
      if (codeSegments) {
        codeSegments.children.forEach((object, i) => {
          if (object instanceof THREE.Sprite) {
            const userData = object.userData;
            
            // Orbit animation
            const newAngle = userData.angle + time * userData.rotationSpeed;
            object.position.x = Math.cos(newAngle) * userData.radius;
            object.position.y = Math.sin(newAngle) * userData.radius;
            
            // Pulse scale effect
            object.scale.x = 2 + Math.sin(time * 0.5 + i * 0.2) * 0.1;
            object.scale.y = 0.5 + Math.sin(time * 0.5 + i * 0.2) * 0.05;
          }
        });
      }
      
      // Interactive movement based on mouse position
      if (x64GroupRef.current) {
        x64GroupRef.current.rotation.y = mouseX * 0.2 + Math.sin(time * 0.3) * 0.1;
        x64GroupRef.current.rotation.x = mouseY * 0.1 + Math.cos(time * 0.5) * 0.05;
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
    
    // Handle mouse movement for interactive effect
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up
    return () => {
      if (rendererRef.current && containerRef.current && containerRef.current.contains(rendererRef.current.domElement)) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [containerRef]);
  
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
