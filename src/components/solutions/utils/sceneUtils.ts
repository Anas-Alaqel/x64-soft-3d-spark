
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
  
  // Set up renderer with optimized settings
  const renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
    precision: 'mediump' // Use medium precision for better performance
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  
  // Only use higher pixel ratio for high-end devices
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  
  // Update: Use newer color output encoding API
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  
  // Add renderer to DOM
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
  
  // Update camera aspect ratio
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  
  // Update renderer size
  renderer.setSize(container.clientWidth, container.clientHeight);
};

// Dispose of all Three.js resources to prevent memory leaks
export const disposeResources = (
  scene: THREE.Scene | null,
  renderer: THREE.WebGLRenderer | null
) => {
  if (scene) {
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        if (object.geometry) {
          object.geometry.dispose();
        }
        
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => disposeMaterial(material));
          } else {
            disposeMaterial(object.material);
          }
        }
      } else if (object instanceof THREE.Points) {
        if (object.geometry) {
          object.geometry.dispose();
        }
        
        if (object.material) {
          disposeMaterial(object.material);
        }
      }
    });
  }
  
  if (renderer) {
    renderer.dispose();
  }
};

// Helper function to dispose of materials and their textures with proper type handling
const disposeMaterial = (material: THREE.Material) => {
  // Check common texture properties with type guards
  const checkAndDispose = (prop: string, mat: any) => {
    if (prop in mat && mat[prop] && typeof mat[prop].dispose === 'function') {
      mat[prop].dispose();
    }
  };
  
  // Handle material with map property (most material types)
  if ('map' in material && material.map && material.map.dispose) {
    material.map.dispose();
  }
  
  // Handle common texture properties
  checkAndDispose('lightMap', material);
  checkAndDispose('aoMap', material);
  checkAndDispose('alphaMap', material);
  checkAndDispose('envMap', material);
  
  // Handle specific material types with type guards
  if (material instanceof THREE.MeshStandardMaterial) {
    checkAndDispose('emissiveMap', material);
    checkAndDispose('normalMap', material);
    checkAndDispose('roughnessMap', material);
    checkAndDispose('metalnessMap', material);
    checkAndDispose('bumpMap', material);
    checkAndDispose('displacementMap', material);
  }
  
  if (material instanceof THREE.MeshPhongMaterial) {
    checkAndDispose('emissiveMap', material);
    checkAndDispose('bumpMap', material);
    checkAndDispose('normalMap', material);
    checkAndDispose('displacementMap', material);
  }
  
  material.dispose();
};
