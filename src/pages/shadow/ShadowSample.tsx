import React from "react";
import * as THREE from "three";

const ShadowSample = () => {
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
    renderer.shadowMap.enabled = true; // ←shadow enable

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
    meshFloor.receiveShadow = true; // receive shadow
    scene.add(meshFloor);

    // Object
    const meshKnot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(3, 1, 100, 16),
      new THREE.MeshStandardMaterial({ color: 0xaa0000, roughness: 0.0 })
    );
    meshKnot.position.set(0, 5, 0);
    meshKnot.castShadow = true; // cast shadow
    scene.add(meshKnot);

    // Light
    const light = new THREE.SpotLight(0xffffff, 2, 100, Math.PI / 4, 1);
    light.castShadow = true; // cast shadow
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    scene.add(light);

    const tick = () => {
      renderer.render(scene, camera);

      const t = Date.now() / 500;
      const r = 20.0;
      const lx = r * Math.cos(t);
      const lz = r * Math.sin(t);
      const ly = 20.0 + 5.0 * Math.sin(t / 3.0);
      light.position.set(lx, ly, lz);

      requestAnimationFrame(tick);
    };

    tick();
  };

  return (
    <div>
      <h2 className="text-2xl text-white bg-stone-800 px-4 py-2 mb-2">
        Shadow Sample
      </h2>
      <canvas ref={init}></canvas>
    </div>
  );
};

export default ShadowSample;
