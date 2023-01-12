import React from "react";
import * as THREE from "three";

const PerspectiveCamera = () => {
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
    renderer.shadowMap.enabled = true;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(30, width / height);

    // Light
    const spotLight = new THREE.SpotLight(
      0xffffff,
      4,
      2000,
      Math.PI / 5,
      0.2,
      1.5
    );
    spotLight.position.set(500, 300, 500);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 2048;
    spotLight.shadow.mapSize.height = 2048;
    scene.add(spotLight);

    // Floor
    // Texture
    const texture = new THREE.TextureLoader().load("./images/floor.png");
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(10, 10);
    texture.magFilter = THREE.NearestFilter;

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(1000, 1000),
      new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.0,
        metalness: 0.6,
      })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Geometry
    const geometry = new THREE.BoxGeometry(45, 45, 45);

    // Material
    const material = new THREE.MeshStandardMaterial({
      color: 0x22dd22,
      roughness: 0.1,
      metalness: 0.2,
    });

    // Mesh
    for (let i = 0; i < 60; i++) {
      const box = new THREE.Mesh(geometry, material);
      box.position.x = Math.round((Math.random() - 0.5) * 19) * 50 + 25;
      box.position.y = 25;
      box.position.z = Math.round((Math.random() - 0.5) * 19) * 50 + 25;
      box.receiveShadow = true;
      box.castShadow = true;
      scene.add(box);
    }

    const tick = () => {
      camera.position.x = 500 * Math.sin(Date.now() / 2000);
      camera.position.y = 250;
      camera.position.z = 500 * Math.cos(Date.now() / 2000);
      camera.lookAt(new THREE.Vector3(0, 0, 0));

      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };
    tick();
  };

  return (
    <div>
      <h2 className="text-2xl text-white bg-stone-800 px-4 py-2 mb-2">
      Perspective
      </h2>
      <canvas ref={init}></canvas>
    </div>
  );
};

export default PerspectiveCamera;
