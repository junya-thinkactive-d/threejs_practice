import React from "react";
import * as THREE from "three";

const AmbientLight = () => {
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
    camera.position.set(20, 20, 20);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // Floor
    const meshFloor = new THREE.Mesh(
      new THREE.BoxGeometry(2000, 0.1, 2000),
      new THREE.MeshStandardMaterial({ color: 0x808080, roughness: 0.0 })
    );
    scene.add(meshFloor);

    // Object
    const meshKnot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(3, 1, 100, 16),
      new THREE.MeshStandardMaterial({ color: 0xaa0000, roughness: 0.0 })
    );
    meshKnot.position.set(0, 5, 0);
    scene.add(meshKnot);

    // Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);

    const tick = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };

    tick();
  };

  return (
    <div>
      <h2 className="text-2xl text-white bg-stone-800 px-4 py-2 mb-2">
        Ambient
      </h2>
      <canvas ref={init}></canvas>
    </div>
  );
};

export default AmbientLight;
