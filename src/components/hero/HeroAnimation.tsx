
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const HeroAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create visibility observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setIsVisible(entry.isIntersecting);
      });
    }, {
      threshold: 0.1
    });
    
    observer.observe(containerRef.current);
    
    // Three.js code
    const container = containerRef.current;
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    
    // Renderer with optimized settings
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      precision: 'mediump', // Use medium precision for better performance
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Limit pixel ratio
    container.appendChild(renderer.domElement);
    
    // Create a simpler geometry for better performance
    const geometry = new THREE.IcosahedronGeometry(1.5, 0); // Reduced detail level
    const edges = new THREE.EdgesGeometry(geometry);
    
    // Materials
    const material = new THREE.LineBasicMaterial({ 
      color: 0x9b87f5,
      transparent: true,
      opacity: 0.7
    });
    
    // Wireframe object
    const wireframe = new THREE.LineSegments(edges, material);
    scene.add(wireframe);
    
    // Create fewer, optimized spheres at vertices
    const sphereGeometry = new THREE.SphereGeometry(0.05, 8, 8); // Lower polygon count
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x33ffff });
    
    // Add spheres at each vertex (limited number)
    const positions = geometry.getAttribute('position');
    const vertexSpheres = new THREE.Group();
    
    // Use only a subset of vertices for better performance
    for (let i = 0; i < Math.min(positions.count, 10); i++) {
      const vertex = new THREE.Vector3();
      vertex.fromBufferAttribute(positions, i);
      
      const mesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
      mesh.position.copy(vertex);
      vertexSpheres.add(mesh);
    }
    
    scene.add(vertexSpheres);
    
    // Animation frame ID for cleanup
    let animationFrameId: number;
    
    // Animation with throttling
    let lastRenderTime = 0;
    const renderInterval = 1000 / 30; // Limit to 30fps
    
    const animate = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(animate);
      
      // Skip frame if not enough time has passed or component is not visible
      if ((currentTime - lastRenderTime < renderInterval) || !isVisible) {
        return;
      }
      
      lastRenderTime = currentTime;
      
      wireframe.rotation.y += 0.003;
      wireframe.rotation.x += 0.001;
      vertexSpheres.rotation.y += 0.003;
      vertexSpheres.rotation.x += 0.001;
      
      renderer.render(scene, camera);
    };
    
    // Start animation
    animate(0);
    
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Handle mouse movement - throttled for performance
    let lastMouseUpdate = 0;
    const mouseUpdateInterval = 50; // ms
    
    const handleMouseMove = (event: MouseEvent) => {
      const now = Date.now();
      if (now - lastMouseUpdate < mouseUpdateInterval) return;
      lastMouseUpdate = now;
      
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      wireframe.rotation.y = x * 0.5;
      wireframe.rotation.x = y * 0.5;
      vertexSpheres.rotation.y = x * 0.5;
      vertexSpheres.rotation.x = y * 0.5;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of Three.js resources
      geometry.dispose();
      edges.dispose();
      material.dispose();
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      renderer.dispose();
      
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <div ref={containerRef} className="w-full h-full"></div>
  );
};

export default HeroAnimation;
