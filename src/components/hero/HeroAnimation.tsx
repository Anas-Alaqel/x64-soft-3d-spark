
import { useEffect, useRef } from "react";
import * as THREE from "three";

const HeroAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
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
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    
    // Create a geometry
    const geometry = new THREE.IcosahedronGeometry(1.5, 1);
    const edges = new THREE.EdgesGeometry(geometry);
    
    // Materials
    const material = new THREE.LineBasicMaterial({ 
      color: 0x9b87f5,
      linewidth: 2,
      transparent: true,
      opacity: 0.7
    });
    
    // Wireframe object
    const wireframe = new THREE.LineSegments(edges, material);
    scene.add(wireframe);
    
    // Create small spheres at the vertices
    const sphereGeometry = new THREE.SphereGeometry(0.05, 16, 16);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x33ffff });
    
    // Add spheres at each vertex
    const positions = geometry.getAttribute('position');
    const vertexSpheres = new THREE.Group();
    
    for (let i = 0; i < positions.count; i++) {
      const vertex = new THREE.Vector3();
      vertex.fromBufferAttribute(positions, i);
      
      const mesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
      mesh.position.copy(vertex);
      vertexSpheres.add(mesh);
    }
    
    scene.add(vertexSpheres);
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      wireframe.rotation.y += 0.003;
      wireframe.rotation.x += 0.001;
      vertexSpheres.rotation.y += 0.003;
      vertexSpheres.rotation.x += 0.001;
      
      renderer.render(scene, camera);
    };
    
    // Start animation
    animate();
    
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Handle mouse movement
    const handleMouseMove = (event: MouseEvent) => {
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
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full"></div>
  );
};

export default HeroAnimation;
