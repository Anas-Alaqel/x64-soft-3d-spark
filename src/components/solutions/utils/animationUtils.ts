
import * as THREE from "three";

// Animation helper functions
export const animateX64Text = (
  textGroup: THREE.Object3D,
  time: number
) => {
  textGroup.rotation.y = Math.sin(time * 0.5) * 0.1;
  textGroup.rotation.x = Math.cos(time * 0.3) * 0.05;
  
  // Pulse effect for text layers
  textGroup.children.forEach((child, i) => {
    if (child instanceof THREE.Sprite) {
      child.scale.x = 5 + Math.sin(time * 2 + i * 0.1) * 0.1;
      child.scale.y = 2.5 + Math.sin(time * 2 + i * 0.1) * 0.05;
    }
  });
};

export const animateParticles = (
  particlesMesh: THREE.Points,
  time: number
) => {
  particlesMesh.rotation.y = time * 0.05;
  particlesMesh.rotation.x = time * 0.025;
  const particlesMaterial = particlesMesh.material as THREE.PointsMaterial;
  particlesMaterial.size = 0.05 + Math.sin(time) * 0.01;
};

export const animateCircuitLines = (
  circuitLines: THREE.Object3D,
  time: number
) => {
  circuitLines.children.forEach((object, i) => {
    if (object instanceof THREE.Line) {
      // Safely access material property knowing it's LineBasicMaterial
      const lineMaterial = object.material as THREE.LineBasicMaterial;
      lineMaterial.opacity = 0.4 + Math.sin(time + i * 0.1) * 0.2;
    } else if (object instanceof THREE.Sprite) {
      // Handle sprite animations for binary texts
      object.position.y += Math.sin(time + i) * 0.005;
      object.rotation.z = Math.sin(time * 0.5) * 0.1;
    }
  });
};

export const animateSystemCube = (
  cube: THREE.Mesh,
  time: number
) => {
  cube.rotation.x += 0.005;
  cube.rotation.y += 0.007;
  cube.position.y = 2 + Math.sin(time * 0.5) * 0.2;
};

export const animateCodeSegments = (
  codeSegments: THREE.Object3D,
  time: number
) => {
  codeSegments.children.forEach((object, i) => {
    if (object instanceof THREE.Sprite) {
      const userData = object.userData;
      
      // Orbit animation
      if (userData.angle !== undefined && userData.radius !== undefined && userData.rotationSpeed !== undefined) {
        const newAngle = userData.angle + time * userData.rotationSpeed;
        object.position.x = Math.cos(newAngle) * userData.radius;
        object.position.y = Math.sin(newAngle) * userData.radius;
        
        // Pulse scale effect
        object.scale.x = 2 + Math.sin(time * 0.5 + i * 0.2) * 0.1;
        object.scale.y = 0.5 + Math.sin(time * 0.5 + i * 0.2) * 0.05;
      }
    }
  });
};

// Mouse interaction
export const handleGroupMouseInteraction = (
  group: THREE.Group,
  mouseX: number,
  mouseY: number,
  time: number
) => {
  group.rotation.y = mouseX * 0.2 + Math.sin(time * 0.3) * 0.1;
  group.rotation.x = mouseY * 0.1 + Math.cos(time * 0.5) * 0.05;
};
