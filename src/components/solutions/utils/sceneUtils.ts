
import * as THREE from "three";

export const setupScene = (container: HTMLDivElement) => {
  // Create scene
  const scene = new THREE.Scene();
  
  // Set up camera
  const camera = new THREE.PerspectiveCamera(
    60,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 8;
  
  // Set up renderer
  const renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);
  
  // Create main group for all objects
  const x64Group = new THREE.Group();
  scene.add(x64Group);
  
  return { scene, camera, renderer, x64Group };
};

export const handleResize = (
  container: HTMLDivElement | null, 
  camera: THREE.PerspectiveCamera | null, 
  renderer: THREE.WebGLRenderer | null
) => {
  if (!container || !camera || !renderer) return;
  
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
};
