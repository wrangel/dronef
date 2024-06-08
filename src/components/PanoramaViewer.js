import React from "react";
import * as THREE from "three";

const PanoramaViewer = ({ src, width, height }) => {
  const ref = React.createRef();

  React.useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: ref.current,
      antialias: true,
    });

    const manager = new THREE.LoadingManager();
    const textureLoader = new THREE.TextureLoader(manager);

    const panoramaTexture = textureLoader.load(src);
    panoramaTexture.minFilter = THREE.LinearFilter;
    panoramaTexture.magFilter = THREE.LinearFilter;
    panoramaTexture.format = THREE.RGBFormat;

    const geometry = new THREE.SphereGeometry(100, 60, 60);
    const material = new THREE.MeshBasicMaterial({ map: panoramaTexture });
    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    camera.position.z = 0.1;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
  }, [ref, src, width, height]);

  return (
    <div
      style={{
        width,
        height,
        overflow: "hidden",
      }}
    >
      <canvas ref={ref} />
    </div>
  );
};

export default PanoramaViewer;
