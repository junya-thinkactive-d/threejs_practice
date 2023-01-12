import React from "react";
import * as THREE from "three";

const MeshStandardMaterial = () => {
  const width = 700;
  const height = 540;

  const init = (canvas: HTMLCanvasElement) => {
    if (!canvas) return;
    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, 1000);

    // Geometry
    const geometry = new THREE.TorusGeometry(300, 100, 64, 100);
    // Material
    const material = new THREE.MeshStandardMaterial({
      color: 0x6699ff,
      roughness: 0.5,
    });
    // Mesh
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Light
    const directionalLight = new THREE.DirectionalLight(0xfffff);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const tick = () => {
      mesh.rotation.y += 0.01;
      mesh.rotation.x += 0.01;
      renderer.render(scene, camera);

      requestAnimationFrame(tick);
    };

    tick();
  };

  return (
    <div>
      <h2 className="text-2xl text-white bg-stone-800 px-4 py-2 mb-2">
        Mesh Standard
      </h2>
      <canvas ref={init}></canvas>
    </div>
  );
};

export default MeshStandardMaterial;
