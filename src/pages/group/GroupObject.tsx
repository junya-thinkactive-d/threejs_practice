import React from "react";
import * as THREE from "three";

const GroupObject = () => {
  const width = 700;
  const height = 540;

  const init = (canvas: HTMLCanvasElement) => {
    if (!canvas) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(-100, 150, 500);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // Floor
    scene.add(new THREE.GridHelper(600));
    scene.add(new THREE.AxesHelper(300));

    // Object
    const group = new THREE.Group();
    scene.add(group);

    for (let i = 0; i < 10; i++) {
      // Geometry
      const geometry = new THREE.SphereGeometry(30, 30, 30);
      // Material
      const material = new THREE.MeshNormalMaterial();
      // Mesh
      const mesh = new THREE.Mesh(geometry, material);

      // Location
      const radian = (i / 10) * Math.PI * 2;
      mesh.position.set(
        200 * Math.cos(radian), // x-axis
        30, // y-axis
        200 * Math.sin(radian) // z-axis
      );

      group.add(mesh);
    }

    const tick = () => {
      group.rotation.y += 0.01;
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };

    tick();
  };
  return (
    <div>
      <h2 className="text-2xl text-white bg-stone-800 px-4 py-2 mb-2">
        Group object
      </h2>
      <canvas ref={init}></canvas>
    </div>
  );};

export default GroupObject;
