
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { CODE_SEGMENT_OPTIONS } from "./utils/animationConstants";

interface CodeSegmentsProps {
  parentGroup: THREE.Group;
}

const CodeSegments = ({ parentGroup }: CodeSegmentsProps) => {
  const segmentsRef = useRef<THREE.Group | null>(null);
  
  useEffect(() => {
    const createCodeSegments = () => {
      const codeGroup = new THREE.Group();
      // Set identifier for animation
      codeGroup.userData = { type: "code" };
      
      const { RADIUS, BASE_SCALE_X, BASE_SCALE_Y } = CODE_SEGMENT_OPTIONS;
      
      const codeSnippets = [
        "int main() {",
        "  x64_init();",
        "  return 0;",
        "}",
        "#include <x64>",
        "void setup() {",
        "  x64.begin();",
        "}"
      ];
      
      codeSnippets.forEach((snippet, index) => {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 64;
        
        const context = canvas.getContext('2d');
        if (!context) return;
        
        context.fillStyle = '#000000';
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        context.font = 'bold 16px Courier New';
        context.fillStyle = '#9b87f5';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(snippet, canvas.width / 2, canvas.height / 2);
        
        const texture = new THREE.CanvasTexture(canvas);
        const material = new THREE.SpriteMaterial({ 
          map: texture,
          transparent: true,
          opacity: 0.8,
        });
        
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(BASE_SCALE_X, BASE_SCALE_Y, 1);
        
        // Position in a circular pattern
        const angle = (index / codeSnippets.length) * Math.PI * 2;
        const radius = RADIUS;
        sprite.position.x = Math.cos(angle) * radius;
        sprite.position.y = Math.sin(angle) * radius;
        sprite.position.z = -4;
        
        // Store the original position for animation
        sprite.userData = {
          originalX: sprite.position.x,
          originalY: sprite.position.y,
          originalZ: sprite.position.z,
          angle: angle,
          radius: radius,
          rotationSpeed: 0.0005 + Math.random() * 0.001
        };
        
        codeGroup.add(sprite);
      });
      
      return codeGroup;
    };
    
    const codeSegments = createCodeSegments();
    segmentsRef.current = codeSegments;
    parentGroup.add(codeSegments);
    
    return () => {
      if (segmentsRef.current) {
        parentGroup.remove(segmentsRef.current);
      }
    };
  }, [parentGroup]);
  
  return null;
};

export default CodeSegments;
