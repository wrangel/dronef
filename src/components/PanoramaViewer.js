import React from "react";
import * as THREE from "three";

const PanoramaViewer = ({ src }) => {
  const panoramaContainer = React.useRef();

  React.useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    panoramaContainer.current.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    const panoramaTexture = textureLoader.load(src);
    const panoramaMaterial = new THREE.MeshBasicMaterial({
      map: panoramaTexture,
      side: THREE.BackSide,
      envMap: renderer.domElement,
    });

    const sphereGeometry = new THREE.SphereGeometry(500, 60, 40);
    const panoramaMesh = new THREE.Mesh(sphereGeometry, panoramaMaterial);
    scene.add(panoramaMesh);

    camera.position.z = 1000;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      panoramaContainer.current.removeChild(renderer.domElement);
      scene.clear();
      panoramaTexture.dispose();
      panoramaMaterial.dispose();
      sphereGeometry.dispose();
    };
  }, [src]);

  return (
    <div
      ref={panoramaContainer}
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    />
  );
};

export default PanoramaViewer;
