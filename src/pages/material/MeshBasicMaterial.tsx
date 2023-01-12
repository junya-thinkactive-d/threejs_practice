import React from "react";
import * as THREE from "three";

const MeshBasicMaterial = () => {
  const width = 700;
  const height = 540;

  const init = (canvas: HTMLCanvasElement) => {
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
    const material = new THREE.MeshBasicMaterial({ color: 0x6699ff });
    // Mesh
    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    const tick = () => {
      mesh.rotation.y += 0.01;
      mesh.rotation.x += 0.01;
      renderer.render(scene, camera); // レンダリング

      requestAnimationFrame(tick);
    };

    tick();
  };

  return (
    <div>
      <h2 className="text-2xl text-white bg-stone-800 px-4 py-2 mb-2">
        Mesh Basic
      </h2>
      <canvas ref={init}></canvas>
    </div>
  );
};

export default MeshBasicMaterial;
