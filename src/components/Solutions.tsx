
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import * as THREE from "three";

const Solutions = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Three.js setup
    const container = containerRef.current;
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 10;
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    
    // Create a group of cubes
    const group = new THREE.Group();
    scene.add(group);
    
    // Materials
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0x9b87f5, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0x33ffff, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0xff6692, wireframe: true })
    ];
    
    // Create cubes
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    
    for (let i = 0; i < 10; i++) {
      const mesh = new THREE.Mesh(
        geometry,
        materials[i % materials.length]
      );
      
      // Position randomly but in a certain area
      mesh.position.x = (Math.random() - 0.5) * 15;
      mesh.position.y = (Math.random() - 0.5) * 15;
      mesh.position.z = (Math.random() - 0.5) * 15;
      
      // Random rotation
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      
      // Random scale
      const scale = Math.random() * 0.8 + 0.6;
      mesh.scale.set(scale, scale, scale);
      
      group.add(mesh);
    }
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      group.rotation.y += 0.002;
      group.rotation.x += 0.001;
      
      // Animate each cube individually
      group.children.forEach((cube, i) => {
        cube.rotation.x += 0.003 * (i % 2 === 0 ? 1 : -1);
        cube.rotation.y += 0.005 * (i % 3 === 0 ? 1 : -1);
      });
      
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
    
    // Handle mouse movement for interactive effect
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      group.rotation.y = x * 0.2;
      group.rotation.x = y * 0.2;
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    
    // Clean up
    return () => {
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const solutions = [
    "Enterprise Resource Planning",
    "Customer Relationship Management",
    "Business Intelligence Tools",
    "Supply Chain Management",
    "Healthcare Management Systems",
    "E-commerce Solutions",
    "Fintech Applications"
  ];

  return (
    <section id="solutions" className="section-padding relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              x64-soft delivers integrated solutions that address complex business challenges across industries. Our team works closely with clients to understand their unique needs and develop customized technology solutions.
            </p>
            
            <ul className="space-y-4 mb-8">
              {solutions.map((solution, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>{solution}</span>
                </motion.li>
              ))}
            </ul>
            
            <Button className="bg-primary hover:bg-primary/90">
              Explore All Solutions
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="h-[400px] md:h-[500px] relative"
          >
            <div ref={containerRef} className="absolute inset-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
