import React from "react";
import * as THREE from "three";

const SampleMaterialAndLighting = () => {
  const init = (canvas: HTMLCanvasElement) => {
    if (!canvas) return;

    const width = 700;
    const height = 540;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
    });
    renderer.setSize(width, height);

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.set(0, 0, 1000);

    // Geometry
    const geometry = new THREE.SphereGeometry(300, 30, 30);

    // Material
    const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });

    // Mesh
    const mesh = new THREE.Mesh(geometry, material);
    // Add Scene
    scene.add(mesh);

    // Light
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, 1);
    // Add Scene
    scene.add(directionalLight);

    const tick = () => {
      mesh.rotation.y += 0.1;
      renderer.render(scene, camera);

      requestAnimationFrame(tick);
    };

    tick();
  };

  return (
    <div>
      <h2 className="text-2xl text-white bg-stone-800 px-4 py-2 mb-2">
        Sample material and lighting
      </h2>
      <canvas ref={init}></canvas>
    </div>
  );
};

export default SampleMaterialAndLighting;
