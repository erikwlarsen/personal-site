import React, { Component } from 'react';
import * as THREE from 'three';

class Scene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moving: true,
      lastX: null,
      lastY: null,
      callable: true,
    };

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);
  }

  componentDidMount() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    this.renderer.setSize(width, height);
    this.renderer.autoClear = false;

    // set camera attributes
    const viewAngle = 45;
    const aspect = width / height;
    const near = 0.1;
    const far = 10000;

    this.camera = new THREE.PerspectiveCamera(viewAngle, aspect, near, far);
    this.camera.position.set(0, 0, 500);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000);

    this.scene.add(this.camera);

    // GLOBE
    // set attributes
    const radius = 200;
    const segments = 50;
    const rings = 50;
    
    this.globe = new THREE.Group();
    this.scene.add(this.globe);

    const loader = new THREE.TextureLoader();
    const imageUris = ['earth_bright_blue.jpg', '4K_earth.jpg', 'earthtruecolor_nasa_big.jpg', 'nasa_earth.jpg', 'simple_earth.png'];
    const imageIdx = 1;
    const imgLink = 'assets/images/' + imageUris[imageIdx];
    loader.load(imgLink, (texture) => {
      const sphere = new THREE.SphereGeometry(radius, segments, rings, 10);
      const material = new THREE.MeshBasicMaterial({ map: texture, overdraw: 0.5 });
      const mesh = new THREE.Mesh(sphere, material);
      this.globe.add(mesh);
    });

    this.globe.position.z = -300;
    // set initial offset angle. is there a better way to do this? probably
    this.globe.rotation.x -= 0.2;

    // add renderer DOM element to mount ref -- will appear when componentDidMount is called
    this.mount.appendChild(this.renderer.domElement);

    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start() {
    if (!this.frameId) this.frameId = requestAnimationFrame(this.animate);
  }

  stop() {
    cancelAnimationFrame(this.frameId);
  }

  animate() {
    if (this.state.moving) this.move();
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate);
  }

  move() {
    this.globe.rotation.y += 0.003;
  }

  handleDrag(e) {
    if (this.state.callable) {
      e.preventDefault();
      const xMove = this.state.lastX ? e.clientX - this.state.lastX : 0;
      const yMove = this.state.lastY ? e.clientY - this.state.lastY : 0;
      this.globe.rotation.y += xMove * 0.0035;
      this.globe.rotation.x += yMove * 0.0035;
      this.setState({
        moving: false,
        lastX: e.clientX,
        lastY: e.clientY,
        callable: false,
      });
      setTimeout(() => { this.setState({ callable: true }) }, 20);
    }
  }

  handleDragEnd() {
    this.setState({
      moving: true,
      lastX: null,
      lastY: null,
    });
  }

  render() {
    return (
      <div
        style={{ width: '1000px', height: '1000px' }}
        ref={(mount) => this.mount = mount}
        onDrag={this.handleDrag}
        onDragEnd={this.handleDragEnd}
        draggable={true}
      />
    );
  }
}

export default Scene;
