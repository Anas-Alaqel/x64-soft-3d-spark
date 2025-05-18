import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import * as THREE from "three";
// Import these separately since they're not part of the core THREE export
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

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
    
    // Create a processor-like structure
    const processorGroup = new THREE.Group();
    scene.add(processorGroup);
    
    // Processor base
    const baseGeometry = new THREE.BoxGeometry(8, 0.5, 8);
    const baseMaterial = new THREE.MeshBasicMaterial({ color: 0x33ffff, wireframe: true });
    const processorBase = new THREE.Mesh(baseGeometry, baseMaterial);
    processorGroup.add(processorBase);
    
    // Processor chip
    const chipGeometry = new THREE.BoxGeometry(6, 0.8, 6);
    const chipMaterial = new THREE.MeshBasicMaterial({ color: 0x9b87f5, wireframe: true });
    const processorChip = new THREE.Mesh(chipGeometry, chipMaterial);
    processorChip.position.y = 0.7;
    processorGroup.add(processorChip);
    
    // Add circuit lines
    const createCircuitLine = (x: number, z: number, length: number, isHorizontal: boolean) => {
      const lineGeometry = new THREE.BoxGeometry(
        isHorizontal ? length : 0.1, 
        0.2, 
        isHorizontal ? 0.1 : length
      );
      const lineMaterial = new THREE.MeshBasicMaterial({ color: 0xff6692 });
      const line = new THREE.Mesh(lineGeometry, lineMaterial);
      line.position.set(x, 1.3, z);
      return line;
    };
    
    // Horizontal lines
    for (let i = -2; i <= 2; i += 1) {
      const line = createCircuitLine(-2.5, i, 5, true);
      processorGroup.add(line);
    }
    
    // Vertical lines
    for (let i = -2; i <= 2; i += 1) {
      const line = createCircuitLine(i, -2.5, 5, false);
      processorGroup.add(line);
    }
    
    // Add processor pins
    const createProcessorPin = (x: number, z: number) => {
      const pinGeometry = new THREE.CylinderGeometry(0.15, 0.15, 0.6, 8);
      const pinMaterial = new THREE.MeshBasicMaterial({ color: 0x33ffff });
      const pin = new THREE.Mesh(pinGeometry, pinMaterial);
      pin.position.set(x, -0.3, z);
      return pin;
    };
    
    // Create pins in a grid pattern
    const pinDistance = 0.8;
    const pinRows = 6;
    const pinCols = 6;
    
    for (let i = 0; i < pinRows; i++) {
      for (let j = 0; j < pinCols; j++) {
        // Skip some pins to create a more authentic processor look
        if ((i === 2 || i === 3) && (j === 2 || j === 3)) continue;
        
        const x = (i - pinRows / 2 + 0.5) * pinDistance;
        const z = (j - pinCols / 2 + 0.5) * pinDistance;
        const pin = createProcessorPin(x, z);
        processorGroup.add(pin);
      }
    }
    
    // Add text "x64" on the processor
    const fontLoader = new THREE.FontLoader();
    const createTextGeometry = () => {
      const textGeometry = new TextGeometry('x64', {
        font: new THREE.Font({}),  // We need to load the font
        size: 1.2,
        height: 0.1,
      });
      const textMaterial = new THREE.MeshBasicMaterial({ color: 0x13FDEE });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.set(-1, 1.2, 0);
      processorGroup.add(textMesh);
    };
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      processorGroup.rotation.y += 0.005;
      
      // Pulse animation for the processor chip
      const time = Date.now() * 0.001;
      const pulseScale = 1 + Math.sin(time * 2) * 0.03;
      processorChip.scale.set(1, pulseScale, 1);
      
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
      
      processorGroup.rotation.y = x * 0.5 + time * 0.1;
      processorGroup.rotation.x = y * 0.3;
    };
    
    let time = 0;
    const autoRotate = () => {
      time += 0.01;
      processorGroup.rotation.y = Math.sin(time) * 0.5;
      processorGroup.rotation.x = Math.cos(time) * 0.2;
      requestAnimationFrame(autoRotate);
    };
    autoRotate();
    
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
    <section id="solutions" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-mesh opacity-40 -z-10"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Our <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-base sm:text-lg text-foreground/80 mb-6 md:mb-8">
              x64-soft delivers integrated solutions that address complex business challenges across industries. Our team works closely with clients to understand their unique needs and develop customized technology solutions.
            </p>
            
            <ul className="space-y-3 sm:space-y-4 mb-6 md:mb-8">
              {solutions.map((solution, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center diamond-bullet"
                >
                  <span>{solution}</span>
                </motion.li>
              ))}
            </ul>
            
            <Button className="bg-primary hover:bg-primary/90 glow">
              Explore All Solutions
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="h-[300px] sm:h-[400px] md:h-[450px] relative order-1 lg:order-2"
          >
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full filter blur-3xl"></div>
            </div>
            <div ref={containerRef} className="absolute inset-0 z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
