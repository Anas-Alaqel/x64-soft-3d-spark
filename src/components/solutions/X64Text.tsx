
import { useEffect, useRef } from "react";
import * as THREE from "three";

interface X64TextProps {
  parentGroup: THREE.Group;
}

const X64Text = ({ parentGroup }: X64TextProps) => {
  const textRef = useRef<THREE.Group | null>(null);
  
  useEffect(() => {
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
        });
        
        // Set the opacity on the material directly (fixing the TypeScript error)
        if (i > 0) {
          material.opacity = 0.7 - (i * 0.05);
        }
        
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(5, 2.5, 1);
        sprite.position.z = -i * layerDepth;
        textGroup.add(sprite);
      }
      
      return textGroup;
    };
    
    const x64Text = createX64Text();
    textRef.current = x64Text;
    parentGroup.add(x64Text);
    
    return () => {
      if (textRef.current) {
        parentGroup.remove(textRef.current);
      }
    };
  }, [parentGroup]);
  
  return null;
};

export default X64Text;
