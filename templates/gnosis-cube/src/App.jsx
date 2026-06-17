import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      {
          "imports": {
              "three": "https://unpkg.com/three@0.160.0/build/three.module.js",
              "three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
          }
      }
    


      import * as THREE from 'three';
      import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
      import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

      // Scene Setup
      const container = document.getElementById('webgl-container');
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x491c8c, 0.015);

      const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(12, 8, 15);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      container.appendChild(renderer.domElement);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.minDistance = 5;
      controls.maxDistance = 30;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
      dirLight.position.set(10, 20, 10);
      dirLight.castShadow = true;
      dirLight.shadow.mapSize.width = 2048;
      dirLight.shadow.mapSize.height = 2048;
      dirLight.shadow.camera.near = 0.5;
      dirLight.shadow.camera.far = 50;
      dirLight.shadow.bias = -0.001;
      scene.add(dirLight);

      const fillLight = new THREE.DirectionalLight(0x9b30a1, 1.2);
      fillLight.position.set(-10, 0, -10);
      scene.add(fillLight);

      // Materials
      const baseMaterial = new THREE.MeshStandardMaterial({
          color: 0xf1f5f9,
          roughness: 0.1,
          metalness: 0.3,
      });

      const highlightMaterial = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          roughness: 0.0,
          metalness: 0.1,
          emissive: 0xffffff,
          emissiveIntensity: 0.4
      });

      const accentMaterial = new THREE.MeshStandardMaterial({
          color: 0xf57b54,
          roughness: 0.2,
          metalness: 0.1,
      });

      // Add a subtle floor to place cubes on
      const floorGeometry = new THREE.PlaneGeometry(50, 50);
      const floorMaterial = new THREE.ShadowMaterial({ opacity: 0.2 });
      const floor = new THREE.Mesh(floorGeometry, floorMaterial);
      floor.rotation.x = -Math.PI / 2;
      floor.position.y = -3.5;
      floor.receiveShadow = true;
      scene.add(floor);

      // Abstract Owl / Lego Structure
      const blocksGroup = new THREE.Group();
      const blocks = [];
      const size = 1;
      const radius = 0.15;

      // Geometry
      const geometry = new RoundedBoxGeometry(size, size, size, 4, radius);
      const eyeGeometry = new RoundedBoxGeometry(size * 0.8, size * 0.8, size * 0.2, 4, radius);

      // Layout definitions (x, y, z, type)
      const layout = [
          // Body
          [-1, 0, 0, 0], [0, 0, 0, 0], [1, 0, 0, 0],
          [-1, 1, 0, 0], [0, 1, 0, 0], [1, 1, 0, 0],
          [-1, 2, 0, 0], [0, 2, 0, 0], [1, 2, 0, 0],
          [-1, 3, 0, 0], [0, 3, 0, 0], [1, 3, 0, 0],

          // Wings
          [-2, 1, 0, 0], [-2, 2, 0, 0],
          [2, 1, 0, 0], [2, 2, 0, 0],

          // Head
          [-1, 4, 0, 0], [0, 4, 0, 0], [1, 4, 0, 0],
          [-1, 5, 0, 0], [0, 5, 0, 0], [1, 5, 0, 0],

          // Ears/Tufts
          [-1, 6, 0, 2], [1, 6, 0, 2],

          // Beak
          [0, 4, 0.6, 2],

          // Base platform
          [-1, -1, 0, 0], [0, -1, 0, 0], [1, -1, 0, 0]
      ];

      layout.forEach((pos, index) => {
          const mesh = new THREE.Mesh(
              geometry,
              pos[3] === 2 ? accentMaterial : baseMaterial
          );
          mesh.position.set(pos[0] * 1.05, pos[1] * 1.05, pos[2] * 1.05);
          mesh.castShadow = true;
          mesh.receiveShadow = true;

          // Setup target for animation
          mesh.userData = {
              targetPosition: mesh.position.clone(),
              isFitted: false,
              originalMaterial: mesh.material,
              initialY: -3
          };

          // Place cubes in a grid on the floor ready for stacking
          const cols = 6;
          const row = Math.floor(index / cols);
          const col = index % cols;

          mesh.position.x = (col - cols/2 + 0.5) * 1.5;
          mesh.position.y = mesh.userData.initialY;
          mesh.position.z = (row - 2) * 1.5 + 4;

          mesh.rotation.set(0, 0, 0);

          blocksGroup.add(mesh);
          blocks.push(mesh);
      });

      // Add Eyes (Fitted by default for character)
      const leftEye = new THREE.Mesh(eyeGeometry, highlightMaterial);
      leftEye.position.set(-0.5 * 1.05, 5 * 1.05, 0.6);
      blocksGroup.add(leftEye);

      const rightEye = new THREE.Mesh(eyeGeometry, highlightMaterial);
      rightEye.position.set(0.5 * 1.05, 5 * 1.05, 0.6);
      blocksGroup.add(rightEye);

      // Center structure
      const box3 = new THREE.Box3().setFromObject(blocksGroup);
      const center = box3.getCenter(new THREE.Vector3());
      blocksGroup.position.sub(center);
      blocksGroup.position.y += 2;
      scene.add(blocksGroup);

      // Raycaster for Interaction
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();
      let hoveredBlock = null;

      function onMouseMove(event) {
          mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      }

      function onClick() {
          if (hoveredBlock && !hoveredBlock.userData.isFitted) {
              hoveredBlock.userData.isFitted = true;
              hoveredBlock.material = hoveredBlock.userData.originalMaterial;
          }
      }

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('click', onClick);
      window.addEventListener('touchstart', (e) => {
          mouse.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
          onClick();
      });

      // Animation Loop
      const clock = new THREE.Clock();

      function animate() {
          requestAnimationFrame(animate);
          const delta = clock.getDelta();

          controls.update();

          // Raycasting logic
          raycaster.setFromCamera(mouse, camera);
          const intersects = raycaster.intersectObjects(blocks);

          if (intersects.length > 0) {
              const object = intersects[0].object;
              if (!object.userData.isFitted) {
                  if (hoveredBlock !== object) {
                      if (hoveredBlock && !hoveredBlock.userData.isFitted) {
                          hoveredBlock.material = hoveredBlock.userData.originalMaterial;
                      }
                      hoveredBlock = object;
                      hoveredBlock.material = highlightMaterial;
                      document.body.style.cursor = 'pointer';
                      controls.autoRotate = false;
                  }
              }
          } else {
              if (hoveredBlock && !hoveredBlock.userData.isFitted) {
                  hoveredBlock.material = hoveredBlock.userData.originalMaterial;
              }
              hoveredBlock = null;
              document.body.style.cursor = 'default';
              controls.autoRotate = true;
          }

          // Animate blocks to target positions
          blocks.forEach(block => {
              if (block.userData.isFitted) {
                  block.position.lerp(block.userData.targetPosition, 5 * delta);
                  const targetQuaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, 0));
                  block.quaternion.slerp(targetQuaternion, 5 * delta);
              } else {
                  // Gentle float to make them look interactable while on the floor
                  block.position.y = block.userData.initialY + Math.sin(clock.elapsedTime * 2 + block.position.x) * 0.1;
              }
          });

          renderer.render(scene, camera);
      }

      // Handle Resize
      window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
      });

      animate();
    


      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div id="webgl-container"></div>

<div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-4 sm:p-8">

<header className="flex justify-between items-start pointer-events-auto">
<h1 className="text-2xl sm:text-3xl font-normal tracking-tight text-white drop-shadow-sm select-none">
          Gnosis
        </h1>
<div className="flex gap-2 sm:gap-3 flex-col sm:flex-row">
<button className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center text-white/70 hover:text-white shadow-lg active:scale-95">
<i className="w-5 h-5" data-lucide="settings" strokeWidth="1.5"></i>
</button>
<button className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center text-white/70 hover:text-white shadow-lg active:scale-95">
<i className="w-5 h-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>

<div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 pointer-events-auto bg-white/5 backdrop-blur-xl border border-white/10 p-1.5 rounded-2xl shadow-2xl">
<button className="w-10 h-10 rounded-xl bg-white/10 text-white shadow-inner flex items-center justify-center transition-all border border-white/10">
<i className="w-[22px] h-[22px]" data-lucide="mouse-pointer-2" strokeWidth="1.5"></i>
</button>
<button className="w-10 h-10 rounded-xl hover:bg-white/10 hover:text-white transition-all flex items-center justify-center active:scale-95 text-white/50">
<i className="w-[22px] h-[22px]" data-lucide="move" strokeWidth="1.5"></i>
</button>
<button className="w-10 h-10 rounded-xl hover:bg-white/10 hover:text-white transition-all flex items-center justify-center active:scale-95 text-white/50">
<i className="w-[22px] h-[22px]" data-lucide="eye" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex flex-col items-center gap-4 pointer-events-auto pb-2 sm:pb-6">

<div className="flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)]">
<button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 text-white flex items-center justify-center transition-transform hover:bg-white/20 active:scale-95 border border-white/20">
<i className="w-6 h-6" data-lucide="box" strokeWidth="1.5"></i>
</button>
<div className="w-px h-6 bg-white/20 mx-1 sm:mx-2"></div>
<button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full hover:bg-white/10 hover:text-white transition-all flex items-center justify-center active:scale-95 text-white/70">
<i className="w-6 h-6" data-lucide="wand-2" strokeWidth="1.5"></i>
</button>
<button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full hover:bg-white/10 hover:text-white transition-all flex items-center justify-center active:scale-95 text-white/70">
<i className="w-6 h-6" data-lucide="link" strokeWidth="1.5"></i>
</button>
<button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full hover:bg-white/10 hover:text-white transition-all flex items-center justify-center active:scale-95 text-white/70">
<i className="w-6 h-6" data-lucide="palette" strokeWidth="1.5"></i>
</button>
<button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full hover:bg-white/10 hover:text-white transition-all flex items-center justify-center active:scale-95 text-white/70">
<i className="w-6 h-6" data-lucide="refresh-cw" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex gap-2 items-center">
<div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/30 transition-colors"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/30 transition-colors"></div>
</div>
</div>
</div>





    </>
  );
}
