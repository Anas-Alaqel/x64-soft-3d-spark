
import { useEffect, useRef } from "react";
import * as THREE from "three";

interface SystemCubeProps {
  parentGroup: THREE.Group;
}

const SystemCube = ({ parentGroup }: SystemCubeProps) => {
  const cubeRef = useRef<THREE.Mesh | null>(null);
  
  useEffect(() => {
    const createSystemCube = () => {
      const cubeSize = 0.8;
      const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
      
      // Create special materials for the cube faces with circuit patterns
      const createCircuitMaterial = (color: number) => {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        
        const context = canvas.getContext('2d');
        if (!context) return new THREE.MeshBasicMaterial({ color });
        
        // Draw circuit board pattern
        context.fillStyle = `rgb(${color >> 16}, ${(color >> 8) & 0xff}, ${color & 0xff})`;
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw circuit lines
        context.strokeStyle = '#ffffff';
        context.lineWidth = 2;
        
        // Horizontal lines
        for (let i = 0; i < 10; i++) {
          const y = 20 + i * 25;
          context.beginPath();
          context.moveTo(0, y);
          
          // Create a zigzag pattern
          for (let x = 0; x < canvas.width; x += 20) {
            const offsetY = Math.random() * 10 - 5;
            context.lineTo(x, y + offsetY);
          }
          
          context.stroke();
        }
        
        // Vertical lines
        for (let i = 0; i < 10; i++) {
          const x = 20 + i * 25;
          context.beginPath();
          context.moveTo(x, 0);
          
          for (let y = 0; y < canvas.height; y += 20) {
            const offsetX = Math.random() * 10 - 5;
            context.lineTo(x + offsetX, y);
          }
          
          context.stroke();
        }
        
        // Add some dots representing components
        context.fillStyle = '#ffff00';
        for (let i = 0; i < 20; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const size = Math.random() * 6 + 2;
          context.beginPath();
          context.arc(x, y, size, 0, Math.PI * 2);
          context.fill();
        }
        
        const texture = new THREE.CanvasTexture(canvas);
        return new THREE.MeshBasicMaterial({ 
          map: texture, 
          transparent: true, 
          opacity: 0.9 
        });
      };
      
      // Create materials for each face with different base colors
      const materials = [
        createCircuitMaterial(0x1A1F2C), // dark purple
        createCircuitMaterial(0x222222), // dark gray
        createCircuitMaterial(0x1A1F2C), // dark purple
        createCircuitMaterial(0x8B5CF6), // vivid purple
        createCircuitMaterial(0x1EAEDB), // bright blue
        createCircuitMaterial(0x222222), // dark gray
      ];
      
      const cube = new THREE.Mesh(cubeGeometry, materials);
      cube.position.set(-3, 2, -1);
      
      // Set identifier for animation
      cube.userData = { type: "cube" };
      
      return cube;
    };
    
    const systemCube = createSystemCube();
    cubeRef.current = systemCube;
    parentGroup.add(systemCube);
    
    return () => {
      if (cubeRef.current) {
        parentGroup.remove(cubeRef.current);
      }
    };
  }, [parentGroup]);
  
  return null;
};

export default SystemCube;
