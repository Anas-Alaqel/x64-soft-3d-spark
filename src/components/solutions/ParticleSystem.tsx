
import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ParticleSystemProps {
  parentGroup: THREE.Group;
}

const ParticleSystem = ({ parentGroup }: ParticleSystemProps) => {
  const particlesRef = useRef<THREE.Points | null>(null);
  
  useEffect(() => {
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
    particlesRef.current = particlesMesh;
    parentGroup.add(particlesMesh);
    
    return () => {
      if (particlesRef.current) {
        parentGroup.remove(particlesRef.current);
      }
    };
  }, [parentGroup]);
  
  return null;
};

export default ParticleSystem;
