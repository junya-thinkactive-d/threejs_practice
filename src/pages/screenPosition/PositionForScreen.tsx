import React from 'react';
import * as THREE from 'three';

const PositionForScreen = () => {
  const width = 700;
  const height = 540;
  let rot = 0;

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
    camera.lookAt(0, 0, 0);

    // Floor
    const grid = new THREE.GridHelper(600);
    scene.add(grid);
    const axes = new THREE.AxesHelper(300);
    scene.add(axes);

    //Geometry
    const geometry = new THREE.SphereGeometry(30, 30, 30);

    // Material
    const material = new THREE.MeshNormalMaterial();

    // Mesh
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const tick = () => {
      rot += 0.5;
      const radian = (rot * Math.PI) / 180;
      mesh.position.x = 200 * Math.sin(radian);
      mesh.position.y = 50;
      mesh.position.z = 200 * Math.cos(radian);

      // Rendering
      renderer.render(scene, camera);

      // World Position
      const worldPosition = mesh.getWorldPosition(new THREE.Vector3());

      // Screen Position
      const projection = worldPosition.project(camera);
      const sx = (width / 2) * (+projection.x + 1.0);
      const sy = (height / 2) * (-projection.y + 1.0);

      const tf = document.getElementById('hud');
      if (!tf) return;
      tf.innerHTML = `👆スクリーン座標(${Math.round(sx)}, ${Math.round(sy)})`;
      tf.style.transform = `translate(${sx}px,${sy}px)`;

      const line = document.getElementById('svgLine');
      if (!line) return;
      line.setAttribute('x2', `${sx}`);
      line.setAttribute('y2', `${sy}`);

      requestAnimationFrame(tick);
    };

    tick();
  };

  return (
    <div>
      <h2 className='text-2xl text-white bg-stone-800 px-4 py-2 mb-2'>
        Position for screen
      </h2>
      <div className='relative overflow-hidden w-[700px] h-[540px]'>
        <canvas ref={init} className='absolute top-0 left-0'></canvas>
        <svg width='700' height='540' className='absolute top-0 left-0'>
          <g stroke='white'>
            <line id='svgLine' x1='0' y1='0' x2='0' y='0' strokeWidth='3' />
          </g>
        </svg>
        <div id='hud' className='absolute top-0 left-0 bg-white'></div>
      </div>
    </div>
  );
};

export default PositionForScreen;
