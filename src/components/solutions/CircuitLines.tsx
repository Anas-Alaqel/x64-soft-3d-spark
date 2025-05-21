
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { CIRCUIT_OPTIONS } from "./utils/animationConstants";

interface CircuitLinesProps {
  parentGroup: THREE.Group;
}

const CircuitLines = ({ parentGroup }: CircuitLinesProps) => {
  const linesRef = useRef<THREE.Group | null>(null);
  
  useEffect(() => {
    const createCircuitLines = () => {
      const linesGroup = new THREE.Group();
      // Set identifier for animation
      linesGroup.userData = { type: "circuits" };
      
      const { HORIZONTAL_LINES, VERTICAL_LINES, LINE_COLORS } = CIRCUIT_OPTIONS;
      
      // Create horizontal lines
      for (let i = HORIZONTAL_LINES.MIN; i <= HORIZONTAL_LINES.MAX; i += HORIZONTAL_LINES.STEP) {
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
          color: LINE_COLORS.HORIZONTAL,
          transparent: true,
          opacity: 0.6,
        });
        
        const line = new THREE.Line(lineGeometry, material);
        linesGroup.add(line);
      }
      
      // Create vertical lines
      for (let i = VERTICAL_LINES.MIN; i <= VERTICAL_LINES.MAX; i += VERTICAL_LINES.STEP) {
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
          color: LINE_COLORS.VERTICAL,
          transparent: true,
          opacity: 0.4,
        });
        
        const line = new THREE.Line(lineGeometry, material);
        linesGroup.add(line);
      }
      
      // Add digital code elements (binary numbers)
      const createBinaryTexts = () => {
        for (let i = 0; i < 10; i++) {
          const canvas = document.createElement('canvas');
          canvas.width = 128;
          canvas.height = 64;
          
          const context = canvas.getContext('2d');
          if (!context) continue;
          
          context.fillStyle = '#000000';
          context.fillRect(0, 0, canvas.width, canvas.height);
          
          // Generate random binary string
          const binaryString = Array(8).fill(0)
            .map(() => Math.random() > 0.5 ? '1' : '0')
            .join('');
          
          context.font = 'bold 20px Courier New';
          context.fillStyle = '#33ffff';
          context.textAlign = 'center';
          context.textBaseline = 'middle';
          context.fillText(binaryString, canvas.width / 2, canvas.height / 2);
          
          const texture = new THREE.CanvasTexture(canvas);
          const material = new THREE.SpriteMaterial({ 
            map: texture,
            transparent: true,
            opacity: 0.7,
          });
          
          const sprite = new THREE.Sprite(material);
          sprite.scale.set(1, 0.5, 1);
          
          // Position randomly around the scene
          sprite.position.x = (Math.random() - 0.5) * 10;
          sprite.position.y = (Math.random() - 0.5) * 5;
          sprite.position.z = -3 - Math.random() * 2;
          
          linesGroup.add(sprite);
        }
      };
      
      createBinaryTexts();
      
      linesGroup.position.z = -1;
      return linesGroup;
    };
    
    const circuitLines = createCircuitLines();
    linesRef.current = circuitLines;
    parentGroup.add(circuitLines);
    
    return () => {
      if (linesRef.current) {
        parentGroup.remove(linesRef.current);
      }
    };
  }, [parentGroup]);
  
  return null;
};

export default CircuitLines;
