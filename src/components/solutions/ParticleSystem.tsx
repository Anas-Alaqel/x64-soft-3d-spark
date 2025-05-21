
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { PARTICLE_SYSTEM_OPTIONS } from "./utils/animationConstants";

interface ParticleSystemProps {
  parentGroup: THREE.Group;
}

const ParticleSystem = ({ parentGroup }: ParticleSystemProps) => {
  const particlesRef = useRef<THREE.Points | null>(null);
  
  useEffect(() => {
    // Add particle system around the text with optimized settings
    const { PARTICLE_COUNT, PARTICLE_SIZE, PARTICLE_COLOR } = PARTICLE_SYSTEM_OPTIONS;
    
    // Use a reduced particle count for better performance
    const optimizedCount = Math.min(PARTICLE_COUNT, 300);
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(optimizedCount * 3);
    
    for (let i = 0; i < optimizedCount * 3; i += 3) {
      // Create particles in a volume around the text
      posArray[i] = (Math.random() - 0.5) * 10;
      posArray[i + 1] = (Math.random() - 0.5) * 5;
      posArray[i + 2] = (Math.random() - 0.5) * 5;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: PARTICLE_SIZE,
      color: PARTICLE_COLOR,
      transparent: true,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    particlesMesh.userData = { type: "particles" };
    
    particlesRef.current = particlesMesh;
    parentGroup.add(particlesMesh);
    
    return () => {
      if (particlesRef.current) {
        // Properly dispose of geometry and material
        if (particlesRef.current.geometry) {
          particlesRef.current.geometry.dispose();
        }
        if (particlesRef.current.material instanceof THREE.Material) {
          particlesRef.current.material.dispose();
        }
        
        parentGroup.remove(particlesRef.current);
        particlesRef.current = null;
      }
    };
  }, [parentGroup]);
  
  return null;
};

export default ParticleSystem;
