/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import * as THREE from "three";

const PositionForWorld = () => {
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
    camera.position.set(100, 150, 500);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // Floor
    scene.add(new THREE.GridHelper(600));
    scene.add(new THREE.AxesHelper(300));

    // Group
    const group = new THREE.Group();
    scene.add(group);

    let targetMesh = new THREE.Mesh();

    for (let i = 0; i < 10; i++) {
      const geometry = new THREE.SphereGeometry(30, 30, 30);
      const material =
        i === 0
          ? new THREE.MeshNormalMaterial()
          : new THREE.MeshBasicMaterial();
      const mesh = new THREE.Mesh(geometry, material);
      const radian = (i / 10) * Math.PI * 2;
      mesh.position.set(
        200 * Math.cos(radian), // x-axis
        0, // y-axis
        200 * Math.sin(radian) // z-axis
      );
      group.add(mesh);

      if (i === 0) {
        targetMesh = mesh;
      }
    }

    // Line
    const geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(50, 50, 0),
    ]);
    const line = new THREE.Line(geometry, new THREE.LineBasicMaterial());
    scene.add(line);

    const tick = () => {
      group.rotation.x += 0.02;
      group.rotation.y += 0.01;
      // World Coordinates
      const world = targetMesh.getWorldPosition(new THREE.Vector3());
      // Line change
      const positions = line.geometry.attributes.position.array;
      // @ts-ignore
      positions[0] = 0; // First x-axis
      // @ts-ignore
      positions[1] = 0; // First y-axis
      // @ts-ignore
      positions[2] = 0; // First z-axis
      // @ts-ignore
      positions[3] = world.x; // Second x-axis
      // @ts-ignore
      positions[4] = world.y; // Second y-axis
      // @ts-ignore
      positions[5] = world.z; // Second z-axis
      line.geometry.attributes.position.needsUpdate = true;
      // Rendering
      renderer.render(scene, camera);

      requestAnimationFrame(tick);
    };

    tick();
  };

  return (
    <div>
      <h2 className="text-2xl text-white bg-stone-800 px-4 py-2 mb-2">
        Position for world
      </h2>
      <canvas ref={init}></canvas>
    </div>
  );
};

export default PositionForWorld;
