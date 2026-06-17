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



{
"imports": {
"three": "https://unpkg.com/three@0.160.0/build/three.module.js",
"three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/",
"gsap": "https://unpkg.com/gsap@3.12.5/index.js"
}
}



      import * as THREE from 'three';
      import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
      import gsap from 'gsap';

      // --- Configuration ---
      const PARTICLE_COUNT = 800; // Fewer but larger particles
      // Vibrant Solid Colors from Reference (Blue, Red, Green, Orange, Yellow, Purple, White)
      const PALETTE = [
          0x007AFF, // Blue
          0xFF3B30, // Red
          0x28CD41, // Green
          0xFF9500, // Orange
          0xFFCC00, // Yellow
          0xAF52DE, // Purple
          0xFFFFFF, // White
          0x5856D6  // Indigo
      ];

      const STATE = {
          mode: 'portrait',
          paused: false,
          density: 0.85,
          width: window.innerWidth,
          height: window.innerHeight
      };

      // --- Scene Setup ---
      const container = document.getElementById('canvas-container');
      const scene = new THREE.Scene();
      // Deep black fog for the void
      scene.fog = new THREE.Fog('#000000', 15, 50);

      // Camera positioned to view the cylinder
      const camera = new THREE.PerspectiveCamera(45, STATE.width / STATE.height, 0.1, 100);
      camera.position.set(0, 5, 25);

      const renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
      });
      renderer.setSize(STATE.width, STATE.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ReinhardToneMapping;
      container.appendChild(renderer.domElement);

      // --- Controls ---
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enablePan = false;
      controls.minDistance = 10;
      controls.maxDistance = 60;

      // --- Lighting ---
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      scene.add(ambientLight);

      const dirLight = new THREE.DirectionalLight(0xffffff, 2);
      dirLight.position.set(10, 20, 10);
      scene.add(dirLight);

      // --- Components ---

      // 1. Cylinder & Ring Structure
      const structureGroup = new THREE.Group();

      function createCylinderStructure() {
          const material = new THREE.LineBasicMaterial({
              color: 0xffffff,
              transparent: true,
              opacity: 0.4,
              linewidth: 1
          });

          const faintMaterial = new THREE.LineBasicMaterial({
              color: 0xffffff,
              transparent: true,
              opacity: 0.15,
              linewidth: 1
          });

          // A. Vertical Stack of Rings (The Cylinder)
          const cylinderRadius = 6;
          const cylinderHeight = 22;
          const ringCount = 24;

          for (let i = 0; i <= ringCount; i++) {
              const y = (i / ringCount) * cylinderHeight - (cylinderHeight / 2);

              // Create a circle
              const curve = new THREE.EllipseCurve(
                  0, 0,            // ax, aY
                  cylinderRadius, cylinderRadius, // xRadius, yRadius
                  0, 2 * Math.PI,  // aStartAngle, aEndAngle
                  false,           // aClockwise
                  0                // aRotation
              );

              const points = curve.getPoints(64);
              const geometry = new THREE.BufferGeometry().setFromPoints(points);
              geometry.rotateX(-Math.PI / 2); // Lay flat
              geometry.translate(0, y, 0);    // Move to height

              const ring = new THREE.Line(geometry, material);
              structureGroup.add(ring);
          }

          // B. Outer Concentric Rings (The "Saturn" disc effect)
          const outerRingCount = 8;
          const baseRadius = cylinderRadius + 2;

          for (let i = 0; i < outerRingCount; i++) {
              const r = baseRadius + (i * 2.5);
              const curve = new THREE.EllipseCurve(0, 0, r, r, 0, 2 * Math.PI, false, 0);
              const points = curve.getPoints(100);
              const geometry = new THREE.BufferGeometry().setFromPoints(points);
              geometry.rotateX(-Math.PI / 2);

              // Place them slightly below center to look like a floor or interference pattern
              geometry.translate(0, -4, 0);

              const ring = new THREE.Line(geometry, faintMaterial);
              structureGroup.add(ring);
          }

          scene.add(structureGroup);
      }

      // 2. Particles (Spheres inside)
      let instancedMesh;
      const particleData = [];
      const dummy = new THREE.Object3D();
      const _color = new THREE.Color();
      const cylinderRadius = 5.8; // Slightly less than visual radius (6)
      const cylinderHeight = 20;

      function createParticles() {
          // Larger spheres to match reference
          const geometry = new THREE.SphereGeometry(0.28, 16, 16);
          // Flat design look: MeshBasicMaterial removes shading
          const material = new THREE.MeshBasicMaterial({
              color: 0xffffff
          });

          instancedMesh = new THREE.InstancedMesh(geometry, material, PARTICLE_COUNT);

          for (let i = 0; i < PARTICLE_COUNT; i++) {
              // Pick random color
              const colorHex = PALETTE[Math.floor(Math.random() * PALETTE.length)];
              _color.setHex(colorHex);
              instancedMesh.setColorAt(i, _color);

              // Random cylindrical position
              const theta = Math.random() * Math.PI * 2;
              // Sqrt for uniform distribution in circle
              const r = Math.sqrt(Math.random()) * (cylinderRadius - 0.5);
              const x = r * Math.cos(theta);
              const z = r * Math.sin(theta);
              const y = (Math.random() - 0.5) * cylinderHeight;

              particleData.push({
                  idx: i,
                  x: x,
                  y: y,
                  z: z,
                  initialX: x,
                  initialZ: z,
                  initialY: y,
                  speedY: 0.004 + Math.random() * 0.008,
                  speedRot: (Math.random() - 0.5) * 0.02,
                  radius: r,
                  angle: theta,
                  scale: 0.8 + Math.random() * 0.6
              });

              dummy.position.set(x, y, z);
              dummy.scale.setScalar(1);
              dummy.updateMatrix();
              instancedMesh.setMatrixAt(i, dummy.matrix);
          }

          scene.add(instancedMesh);
      }

      function handleResize() {
          STATE.width = window.innerWidth;
          STATE.height = window.innerHeight;
          camera.aspect = STATE.width / STATE.height;
          camera.updateProjectionMatrix();
          renderer.setSize(STATE.width, STATE.height);
      }

      // --- View Controls ---
      const btnPortrait = document.getElementById('btn-portrait');
      const btnWide = document.getElementById('btn-wide');
      const btnPause = document.getElementById('btn-pause');
      const sliderDensity = document.getElementById('density-slider');

      function setMode(mode) {
          STATE.mode = mode;
          const duration = 1.5;
          const ease = "power2.inOut";

          // Disable controls during animation to prevent conflict
          controls.enabled = false;

          if (mode === 'portrait') {
              btnPortrait.setAttribute('data-active', 'true');
              btnWide.setAttribute('data-active', 'false');

              // Standard View
              gsap.to(camera.position, {
                  x: 0, y: 5, z: 28,
                  duration, ease,
                  onComplete: () => controls.enabled = true
              });
              gsap.to(structureGroup.rotation, { x: 0.1, z: 0, duration, ease });
          } else {
              btnPortrait.setAttribute('data-active', 'false');
              btnWide.setAttribute('data-active', 'true');

              // Top-down / Angled view to see the rings better
              gsap.to(camera.position, {
                  x: 0, y: 25, z: 15,
                  duration, ease,
                  onComplete: () => controls.enabled = true
              });
              camera.lookAt(0, 0, 0);
              gsap.to(structureGroup.rotation, { x: 0, z: 0, duration, ease });
          }
      }

      sliderDensity.addEventListener('input', (e) => {
          STATE.density = parseFloat(e.target.value);
      });

      // --- Animation Loop ---
      const clock = new THREE.Clock();

      function animate() {
          requestAnimationFrame(animate);

          controls.update();

          // Rotate the container slowly for effect
          if(!STATE.paused) {
             structureGroup.rotation.y += 0.0004;
          }

          // Update Particles
          const visibleCount = Math.floor(STATE.density * PARTICLE_COUNT);
          const halfHeight = cylinderHeight / 2;

          for (let i = 0; i < PARTICLE_COUNT; i++) {
              const data = particleData[i];

              if (i < visibleCount) {
                  if (!STATE.paused) {
                      // Move Upwards
                      data.y += data.speedY;

                      // Spiral Motion
                      data.angle += 0.002;
                      data.x = Math.cos(data.angle) * data.radius;
                      data.z = Math.sin(data.angle) * data.radius;

                      // Loop around cylinder height
                      if (data.y > halfHeight) {
                          data.y = -halfHeight;
                          // Randomize position on respawn slightly
                          data.radius = Math.sqrt(Math.random()) * (cylinderRadius - 0.5);
                      }
                  }

                  dummy.position.set(data.x, data.y, data.z);

                  dummy.scale.setScalar(data.scale);
                  dummy.updateMatrix();
                  instancedMesh.setMatrixAt(i, dummy.matrix);
              } else {
                  dummy.scale.setScalar(0);
                  dummy.updateMatrix();
                  instancedMesh.setMatrixAt(i, dummy.matrix);
              }
          }

          instancedMesh.instanceMatrix.needsUpdate = true;
          renderer.render(scene, camera);
      }

      function init() {
          createCylinderStructure();
          createParticles();

          // Parent particles to structure so they rotate together naturally
          structureGroup.add(instancedMesh);

          setMode('portrait');

          window.addEventListener('resize', handleResize);

          btnPortrait.addEventListener('click', () => setMode('portrait'));
          btnWide.addEventListener('click', () => setMode('wide'));

          btnPause.addEventListener('click', () => {
              STATE.paused = !STATE.paused;
              const pauseIcon = document.getElementById('icon-pause');
              const playIcon = document.getElementById('icon-play');
              if (STATE.paused) {
                  pauseIcon.classList.add('hidden');
                  playIcon.classList.remove('hidden');
              } else {
                  pauseIcon.classList.remove('hidden');
                  playIcon.classList.add('hidden');
              }
          });

          animate();
      }

      init();
    
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
      
<div className="vignette"></div>
<div className="absolute inset-0 z-10" id="canvas-container"></div>

<div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-between p-6 sm:p-8">

<div className="flex justify-between items-start w-full">
<div className="opacity-60 hover:opacity-100 transition-opacity duration-500 pointer-events-auto cursor-default flex flex-col gap-1">
<span className="uppercase tracking-tight text-sm text-white font-medium leading-none">
            SUPERSET
          </span>
<span className="text-xs text-white/40 font-normal">
            Liquidity Reservoir
          </span>
</div>
</div>

<div className="flex items-end justify-center w-full mb-4">
<div className="control-group pointer-events-auto bg-[#0a0a0a]/90 border border-white/10 rounded-full py-2 px-3 flex items-center gap-4 shadow-2xl transition-transform hover:scale-105 duration-300">

<div className="flex items-center gap-1">
<button className="group p-2 rounded-full transition-all duration-300 hover:bg-white/10 data-[active=true]:bg-white/15" data-active="true" id="btn-portrait">

<svg className="text-white/60 group-hover:text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 3a2 2 0 0 0-2 2"></path>
<path d="M19 3a2 2 0 0 1 2 2"></path>
<path d="M21 19a2 2 0 0 1-2 2"></path>
<path d="M5 21a2 2 0 0 1-2-2"></path>
<path d="M9 3h1"></path>
<path d="M9 21h1"></path>
<path d="M14 3h1"></path>
<path d="M14 21h1"></path>
<path d="M3 9v1"></path>
<path d="M21 9v1"></path>
<path d="M3 14v1"></path>
<path d="M21 14v1"></path>
</svg>
</button>
<button className="group p-2 rounded-full transition-all duration-300 hover:bg-white/10 data-[active=true]:bg-white/15" data-active="false" id="btn-wide">

<svg className="text-white/60 group-hover:text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.39 0 4.68.94 6.4 2.6l-1.5 1.5C15.66 5.55 13.92 4.9 12 4.9c-3.92 0-7.1 3.18-7.1 7.1s3.18 7.1 7.1 7.1 7.1-3.18 7.1-7.1c0-.46-.04-.92-.1-1.36"></path>
<path d="M7 12a5 5 0 0 1 5-5"></path>
<path d="M12 17a5 5 0 0 1-5-5"></path>
<path d="M12 7a5 5 0 0 1 5 5"></path>
<path d="M17 12a5 5 0 0 1-5 5"></path>
</svg>
</button>
</div>
<div className="w-px h-4 bg-white/10"></div>

<div className="flex items-center gap-3">

<svg className="text-white/40" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
<div className="flex flex-col w-24">
<input className="w-full" id="density-slider" max="1" min="0" step="0.01" type="range" value="0.85"/>
</div>
</div>
<div className="w-px h-4 bg-white/10"></div>

<button className="flex items-center justify-center rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors p-1" id="btn-pause">
<div id="icon-pause">

<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="1" width="4" x="6" y="4"></rect>
<rect height="16" rx="1" width="4" x="14" y="4"></rect>
</svg>
</div>
<div className="hidden" id="icon-play">

<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</div>
</button>
</div>
</div>
</div>



    </>
  );
}
