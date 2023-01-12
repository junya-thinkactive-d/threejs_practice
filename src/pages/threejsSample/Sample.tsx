import React from "react";
import * as THREE from "three";

const Sample = () => {
  const init = (canvas: HTMLCanvasElement) => {
    if (!canvas) return;

    // サイズを指定
    const width = 700;
    const height = 540;

    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
      canvas,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, 1000);

    // 箱を作成
    const geometry = new THREE.BoxGeometry(400, 400, 400);
    const material = new THREE.MeshNormalMaterial();
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    // 毎フレーム時に実行されるループイベントです
    const tick = () => {
      box.rotation.y += 0.01;
      box.rotation.x += 0.01;
      renderer.render(scene, camera); // レンダリング

      requestAnimationFrame(tick);
    };

    tick();
  };

  return (
    <div>
      <h2 className="text-2xl text-white bg-stone-800 px-4 py-2 mb-2">
        Sample
      </h2>
      <canvas ref={init}></canvas>
    </div>
  );
};

export default Sample;
