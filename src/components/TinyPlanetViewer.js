import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

class TinyPlanet {
  constructor(container, image) {
    this.container = container;
    this.image = image;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      container.offsetWidth / container.offsetHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    this.renderer.setSize(container.offsetWidth, container.offsetHeight);
    this.container.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.screenSpacePanning = false;
    this.controls.minDistance = 1;
    this.controls.maxDistance = 10;

    this.geometry = new THREE.SphereGeometry(1, 60, 60);
    this.material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(image),
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);

    this.camera.position.set(0, 0, 5);
    this.animate();
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  flyIn() {
    this.camera.position.z = 10;
    this.camera.position.y = 0;
    this.controls.enabled = false;
    this.animateFlyIn();
  }

  animateFlyIn() {
    requestAnimationFrame(this.animateFlyIn.bind(this));
    this.camera.position.z -= 0.1;
    if (this.camera.position.z < 2) {
      this.camera.position.z = 2;
      this.controls.enabled = true;
    }
    this.renderer.render(this.scene, this.camera);
  }
}

export default TinyPlanet;
