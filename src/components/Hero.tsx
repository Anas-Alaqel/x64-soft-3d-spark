
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import * as THREE from "three";

const Hero = () => {
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
    <section id="hero" className="min-h-screen relative overflow-hidden flex items-center">
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background to-background"></div>
        <div ref={containerRef} className="w-full h-full"></div>
      </div>
      
      <div className="container mx-auto relative z-20 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 md:space-y-6 px-4 sm:px-0"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30"
            >
              <span className="text-sm font-medium text-primary">
                Advancing Technology. Empowering Businesses.
              </span>
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <div className="animated-words-container overflow-hidden">
                <div className="animated-words-wrapper inline">
                  <motion.span
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 1, 0.8, 1] }}
                    transition={{ 
                      duration: 6,
                      times: [0, 0.3, 0.5, 1],
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: 0
                    }}
                    className="inline-block animate-word"
                  >
                    <span className="bg-gradient-to-r from-primary to-[#9b87f5] text-transparent bg-clip-text animate-gradient">Revolutionary</span>
                  </motion.span>{" "}
                  <motion.span
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 1, 0.8, 1] }}
                    transition={{ 
                      duration: 6,
                      times: [0, 0.3, 0.5, 1],
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: 2
                    }}
                    className="inline-block animate-word"
                  >
                    <span className="bg-gradient-to-r from-[#9b87f5] to-[#D946EF] text-transparent bg-clip-text animate-gradient">Software Solutions</span>
                  </motion.span>{" "}
                  <motion.span
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 1, 0.8, 1] }}
                    transition={{ 
                      duration: 6,
                      times: [0, 0.3, 0.5, 1],
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: 4
                    }}
                    className="inline-block animate-word"
                  >
                    <span className="bg-gradient-to-r from-[#D946EF] to-primary text-transparent bg-clip-text animate-gradient">for Modern Businesses</span>
                  </motion.span>
                </div>
              </div>
            </h1>
            
            <p className="text-base sm:text-lg text-foreground/80 max-w-lg">
              x64-soft delivers cutting-edge software solutions that transform businesses through innovation, efficiency, and technological excellence.
            </p>
            
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 glow">
                Discover Solutions
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/20">
                Contact Us
              </Button>
            </div>
            
            <div className="pt-6 sm:pt-8">
              <p className="text-sm text-foreground/60 mb-3">Trusted by industry leaders</p>
              <div className="flex flex-wrap gap-4 sm:gap-8 opacity-70">
                <div className="h-6 sm:h-8 w-16 sm:w-24 bg-foreground/20 rounded-md"></div>
                <div className="h-6 sm:h-8 w-16 sm:w-24 bg-foreground/20 rounded-md"></div>
                <div className="h-6 sm:h-8 w-16 sm:w-24 bg-foreground/20 rounded-md"></div>
                <div className="h-6 sm:h-8 w-16 sm:w-24 bg-foreground/20 rounded-md"></div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/30 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/30 rounded-full filter blur-3xl"></div>
              
              <motion.div 
                className="glass-card card-shimmer p-6 md:p-8 relative z-10 rounded-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-xl bg-accent/20 flex items-center justify-center">
                      <div className="h-5 w-5 rounded-full bg-accent"></div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="h-3 w-3 rounded-full bg-secondary"></div>
                      <div className="h-3 w-3 rounded-full bg-primary"></div>
                      <div className="h-3 w-3 rounded-full bg-accent"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-4 w-3/4 bg-foreground/20 rounded"></div>
                    <div className="h-4 w-full bg-foreground/10 rounded"></div>
                    <div className="h-4 w-5/6 bg-foreground/15 rounded"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-20 bg-foreground/5 rounded-lg"></div>
                    <div className="h-20 bg-foreground/5 rounded-lg"></div>
                  </div>
                  
                  <div className="pt-2 flex justify-end">
                    <div className="h-8 w-24 bg-primary/20 rounded-md"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
