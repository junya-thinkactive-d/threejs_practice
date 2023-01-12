import React from "react";
import * as THREE from "three";

const SpriteMaterial = () => {
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
    renderer.setClearColor(0xf9f9f9, 1.0);

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xf9f9f9, 200, 300);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height);

    // Material
    const material = new THREE.SpriteMaterial({
      map: new THREE.TextureLoader().load("./images/star.png"),
    });
    // Fog
    material.fog = true;

    // Billboard
    for (let i = 0; i < 1000; i++) {
      const sprite = new THREE.Sprite(material);
      sprite.position.x = 500 * (Math.random() - 0.5);
      sprite.position.y = 100 * Math.random() - 40;
      sprite.position.z = 500 * (Math.random() - 0.5);
      sprite.scale.set(10, 10, 10);

      scene.add(sprite);
    }

    // Floor
    const floor = new THREE.GridHelper(300, 10, 0x888888, 0x888888);
    floor.position.y = -40;
    scene.add(floor);

    const tick = () => {
      camera.position.x = 100 * Math.sin(Date.now() / 2000);
      camera.position.y = 100 * Math.cos(Date.now() / 2000);
      camera.position.z = 50 * Math.sin(Date.now() / 1000) + 60;
      camera.lookAt(new THREE.Vector3(0, 0, 0));

      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };
    tick();
  };

  return (
    <div>
      <h2 className="text-2xl text-white bg-stone-800 px-4 py-2 mb-2">
        Sprite Material
      </h2>
      <canvas ref={init}></canvas>
    </div>
  );
};

export default SpriteMaterial;
