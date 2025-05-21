
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { PARTICLE_SYSTEM_OPTIONS } from "./utils/animationConstants";

interface ParticleSystemProps {
  parentGroup: THREE.Group;
}

const ParticleSystem = ({ parentGroup }: ParticleSystemProps) => {
  const particlesRef = useRef<THREE.Points | null>(null);
  
  useEffect(() => {
    // Add particle system around the text
    const { PARTICLE_COUNT, PARTICLE_SIZE, PARTICLE_COLOR } = PARTICLE_SYSTEM_OPTIONS;
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(PARTICLE_COUNT * 3);
    
    for (let i = 0; i < PARTICLE_COUNT * 3; i += 3) {
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
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    // Important: Set both type and isPoints for correct type checking
    particlesMesh.userData = { type: "particles" };
    particlesMesh.isPoints = true;
    
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
