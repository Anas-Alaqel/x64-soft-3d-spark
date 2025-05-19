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
    camera.position.z = 8;
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    
    // Create x64 display group
    const x64Group = new THREE.Group();
    scene.add(x64Group);
    
    // Create spectacular x64 text
    const createX64Text = () => {
      // Create multiple layers for depth effect
      const layers = 10;
      const layerDepth = 0.05;
      const textGroup = new THREE.Group();
      
      for (let i = 0; i < layers; i++) {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 256;
        
        const context = canvas.getContext('2d');
        if (!context) continue;
        
        // Create gradient background
        const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#33ffff');
        gradient.addColorStop(0.5, '#9b87f5');
        gradient.addColorStop(1, '#33ffff');
        
        context.fillStyle = '#000000';
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw x64 text with shadow and glow
        context.shadowColor = '#33ffff';
        context.shadowBlur = 20;
        context.fillStyle = gradient;
        context.font = 'bold 120px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText('x64', canvas.width / 2, canvas.height / 2);
        
        // Add stroke for more definition
        context.strokeStyle = '#ffffff';
        context.lineWidth = 1;
        context.strokeText('x64', canvas.width / 2, canvas.height / 2);
        
        // Create texture and sprite
        const texture = new THREE.CanvasTexture(canvas);
        const material = new THREE.SpriteMaterial({ 
          map: texture,
          transparent: true,
          opacity: i === 0 ? 1 : 0.7 - (i * 0.05),
        });
        
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(5, 2.5, 1);
        sprite.position.z = -i * layerDepth;
        textGroup.add(sprite);
      }
      
      return textGroup;
    };
    
    const x64Text = createX64Text();
    x64Group.add(x64Text);
    
    // Add particle system around the text
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 500;
    const posArray = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      // Create particles in a volume around the text
      posArray[i] = (Math.random() - 0.5) * 10;
      posArray[i + 1] = (Math.random() - 0.5) * 5;
      posArray[i + 2] = (Math.random() - 0.5) * 5;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x9b87f5,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    x64Group.add(particlesMesh);
    
    // Add digital circuit lines around x64
    const createCircuitLines = () => {
      const linesGroup = new THREE.Group();
      
      // Create horizontal lines
      for (let i = -2; i <= 2; i += 0.5) {
        const lineGeometry = new THREE.BufferGeometry();
        const points = [];
        
        // Create a wavy line with random length
        const segmentCount = Math.floor(Math.random() * 10) + 10;
        const lineLength = Math.random() * 6 + 4;
        const startX = -lineLength / 2;
        
        for (let j = 0; j <= segmentCount; j++) {
          const x = startX + (j / segmentCount) * lineLength;
          const y = i + Math.sin(j * 0.2) * 0.05;
          points.push(new THREE.Vector3(x, y, -2));
        }
        
        lineGeometry.setFromPoints(points);
        
        const material = new THREE.LineBasicMaterial({ 
          color: 0x33ffff,
          transparent: true,
          opacity: 0.6,
        });
        
        const line = new THREE.Line(lineGeometry, material);
        linesGroup.add(line);
      }
      
      // Create vertical lines
      for (let i = -6; i <= 6; i += 1) {
        const lineGeometry = new THREE.BufferGeometry();
        const points = [];
        
        const segmentCount = Math.floor(Math.random() * 5) + 5;
        const lineHeight = Math.random() * 3 + 1;
        const startY = -lineHeight / 2;
        
        for (let j = 0; j <= segmentCount; j++) {
          const x = i + Math.sin(j * 0.2) * 0.05;
          const y = startY + (j / segmentCount) * lineHeight;
          points.push(new THREE.Vector3(x, y, -2));
        }
        
        lineGeometry.setFromPoints(points);
        
        const material = new THREE.LineBasicMaterial({ 
          color: 0xff6692,
          transparent: true,
          opacity: 0.4,
        });
        
        const line = new THREE.Line(lineGeometry, material);
        linesGroup.add(line);
      }
      
      linesGroup.position.z = -1;
      return linesGroup;
    };
    
    const circuitLines = createCircuitLines();
    x64Group.add(circuitLines);
    
    // Animation variables
    let time = 0;
    let mouseX = 0;
    let mouseY = 0;
    
    // Animate all elements
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;
      
      // Animate x64 text group
      x64Text.rotation.y = Math.sin(time * 0.5) * 0.1;
      x64Text.rotation.x = Math.cos(time * 0.3) * 0.05;
      
      // Pulse effect for text layers
      for (let i = 0; i < x64Text.children.length; i++) {
        const sprite = x64Text.children[i] as THREE.Sprite;
        sprite.scale.x = 5 + Math.sin(time * 2 + i * 0.1) * 0.1;
        sprite.scale.y = 2.5 + Math.sin(time * 2 + i * 0.1) * 0.05;
      }
      
      // Animate particles
      particlesMesh.rotation.y = time * 0.05;
      particlesMesh.rotation.x = time * 0.025;
      particlesMaterial.size = 0.05 + Math.sin(time) * 0.01;
      
      // Animate circuit lines
      circuitLines.children.forEach((line, i) => {
        const l = line as THREE.Line;
        l.material.opacity = 0.4 + Math.sin(time + i * 0.1) * 0.2;
      });
      
      // Interactive movement based on mouse position
      x64Group.rotation.y = mouseX * 0.2 + Math.sin(time * 0.3) * 0.1;
      x64Group.rotation.x = mouseY * 0.1 + Math.cos(time * 0.5) * 0.05;
      
      renderer.render(scene, camera);
    };
    
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
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
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
