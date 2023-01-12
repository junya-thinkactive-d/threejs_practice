import React from "react";
import * as THREE from "three";

const SceneFog = () => {
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
    // Fog
    scene.fog = new THREE.Fog(0x000000, 50, 2000);

    //Camera
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);

    // Group
    const group = new THREE.Group();
    scene.add(group);

    // Geometry
    const geometry = new THREE.BoxGeometry(50, 50, 50);

    // Material
    const material = new THREE.MeshStandardMaterial();

    // Mesh
    for (let i = 0; i < 1000; i++) {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = (Math.random() - 0.5) * 2000;
      mesh.position.y = (Math.random() - 0.5) * 2000;
      mesh.position.z = (Math.random() - 0.5) * 2000;
      mesh.rotation.x = Math.random() * 2 * Math.PI;
      mesh.rotation.y = Math.random() * 2 * Math.PI;
      mesh.rotation.z = Math.random() * 2 * Math.PI;
      group.add(mesh);
    }

    // Light
    scene.add(new THREE.DirectionalLight(0xff0000, 2));
    scene.add(new THREE.AmbientLight(0x00ffff));

    const tick = () => {
      group.rotateY(0.001);
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };

    tick();
  };
  return <canvas ref={init}></canvas>;
};

export default SceneFog;
