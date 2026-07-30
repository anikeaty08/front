import React, { useEffect } from 'react';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as THREE from 'three';

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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{



        // --- Configuration ---
        const config = {
            roughness: 0.10,
            metalness: 1.0,
            color: 0xffffff,
            lightIntensity: 2.5,
            lightColor: 0x60a5fa,
            speed: 1.0,
            isPaused: false,
            shape: 'sphere'
        };

        // --- Init Scene ---
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#050505');
        // High quality fog
        scene.fog = new THREE.Fog('#050505', 5, 20);

        // Camera
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.set(0, 1.5, 6);

        // Renderer (Optimized Performance Settings)
        const renderer = new THREE.WebGLRenderer({ 
            antialias: true, 
            alpha: true, 
            powerPreference: "high-performance",
            precision: "mediump" // Added for performance
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // OPTIMIZATION: Limited to 1.5 to avoid 4k lag
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.0;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap; 
        container.appendChild(renderer.domElement);

        // --- Environment & Controls ---
        
        // Room Environment for realistic reflections (PBR)
        const pmremGenerator = new THREE.PMREMGenerator(renderer);
        pmremGenerator.compileEquirectangularShader();
        const roomEnvironment = new RoomEnvironment();
        scene.environment = pmremGenerator.fromScene(roomEnvironment, 0.04).texture;
        
        // Orbit Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.minDistance = 2.5;
        controls.maxDistance = 12;
        controls.enablePan = false;
        
        // --- Objects ---

        // 1. Main Metallic Object (Left)
        const mainMaterial = new THREE.MeshPhysicalMaterial({
            color: config.color,
            metalness: config.metalness,
            roughness: config.roughness,
            clearcoat: 0.8,
            clearcoatRoughness: 0.1,
            ior: 1.5,
            reflectivity: 0.5,
            envMapIntensity: 1.0
        });

        // Geometries (OPTIMIZATION: Reduced segments from 128 to 64)
        const sphereGeo = new THREE.SphereGeometry(1.2, 64, 64);
        const icosaGeo = new THREE.IcosahedronGeometry(1.3, 0);

        let currentMesh = new THREE.Mesh(sphereGeo, mainMaterial);
        currentMesh.position.set(-1.2, 0, 0); // Moved to left
        currentMesh.castShadow = true;
        currentMesh.receiveShadow = true;
        scene.add(currentMesh);

        // 2. Glass Rectangle (Right)
        const glassGeo = new THREE.BoxGeometry(1.2, 2.4, 0.4);
        const glassMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            metalness: 0.0,
            roughness: 0.05,
            transmission: 0.95, 
            thickness: 0.5,
            ior: 1.5,
            clearcoat: 0.8,
            clearcoatRoughness: 0.1,
            side: THREE.DoubleSide,
            transparent: true
        });

        const glassMesh = new THREE.Mesh(glassGeo, glassMaterial);
        glassMesh.position.set(1.4, 0.2, 0); // Moved to right, slightly floating
        glassMesh.castShadow = true;
        glassMesh.receiveShadow = true;
        scene.add(glassMesh);


        // Floor 
        const floorGeo = new THREE.PlaneGeometry(50, 50);
        const floorMat = new THREE.MeshStandardMaterial({
            color: 0x050505,
            roughness: 0.01,
            metalness: 0.1,
        });
        const floor = new THREE.Mesh(floorGeo, floorMat);
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -1.5;
        floor.receiveShadow = true;
        scene.add(floor);

        // Grid Helper
        const gridHelper = new THREE.GridHelper(20, 20, 0x404040, 0x111111);
        gridHelper.position.y = -1.49;
        scene.add(gridHelper);

        // --- Lights ---

        // Ambient
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
        scene.add(ambientLight);

        // Main Orbiting Light
        const lightSphereGeo = new THREE.SphereGeometry(0.1, 16, 16); // Reduced light sphere
        const lightSphereMat = new THREE.MeshBasicMaterial({ color: config.lightColor });
        const lightSphere = new THREE.Mesh(lightSphereGeo, lightSphereMat);
        scene.add(lightSphere);

        const pointLight = new THREE.PointLight(config.lightColor, config.lightIntensity * 20, 100);
        pointLight.castShadow = true;
        // OPTIMIZATION: Reduced Shadow Map Size from 2048 to 1024
        pointLight.shadow.mapSize.width = 1024;
        pointLight.shadow.mapSize.height = 1024;
        pointLight.shadow.bias = -0.00005;
        pointLight.shadow.radius = 4;
        lightSphere.add(pointLight);

        // Rim Light 
        const rimLight = new THREE.SpotLight(0xffffff, 50);
        rimLight.position.set(-5, 5, -5);
        rimLight.lookAt(0,0,0);
        scene.add(rimLight);

        // --- UI Binding ---

        const updateVal = (id, val) => document.getElementById(`val-${id}`).textContent = val;

        document.getElementById('input-roughness').addEventListener('input', (e) => {
            const val = parseFloat(e.target.value);
            config.roughness = val;
            mainMaterial.roughness = val;
            updateVal('roughness', val.toFixed(2));
        });

        document.getElementById('input-metalness').addEventListener('input', (e) => {
            const val = parseFloat(e.target.value);
            config.metalness = val;
            mainMaterial.metalness = val;
            updateVal('metalness', val.toFixed(2));
        });

        document.getElementById('input-intensity').addEventListener('input', (e) => {
            const val = parseFloat(e.target.value);
            config.lightIntensity = val;
            pointLight.intensity = val * 20;
            updateVal('intensity', val.toFixed(1));
        });

        document.getElementById('input-speed').addEventListener('input', (e) => {
            const val = parseFloat(e.target.value);
            config.speed = val;
            updateVal('speed', val.toFixed(1));
        });

        document.querySelectorAll('.color-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const color = e.target.getAttribute('data-color');
                mainMaterial.color.set(color);
            });
        });

        document.querySelectorAll('.light-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const color = e.target.getAttribute('data-color');
                pointLight.color.set(color);
                lightSphere.material.color.set(color);
            });
        });

        const btnSphere = document.getElementById('btn-sphere');
        const btnIcosa = document.getElementById('btn-icosa');

        const switchGeometry = (type) => {
            scene.remove(currentMesh);
            const prevRot = currentMesh.rotation.clone();
            
            if (type === 'sphere') {
                currentMesh = new THREE.Mesh(sphereGeo, mainMaterial);
                btnSphere.classList.add('bg-[#333]', 'text-white');
                btnSphere.classList.remove('text-neutral-400');
                btnIcosa.classList.remove('bg-[#333]', 'text-white');
                btnIcosa.classList.add('text-neutral-400');
            } else {
                currentMesh = new THREE.Mesh(icosaGeo, mainMaterial);
                btnIcosa.classList.add('bg-[#333]', 'text-white');
                btnIcosa.classList.remove('text-neutral-400');
                btnSphere.classList.remove('bg-[#333]', 'text-white');
                btnSphere.classList.add('text-neutral-400');
            }
            
            currentMesh.position.set(-1.2, 0, 0);
            currentMesh.castShadow = true;
            currentMesh.receiveShadow = true;
            currentMesh.rotation.copy(prevRot);
            scene.add(currentMesh);
        };

        btnSphere.addEventListener('click', () => switchGeometry('sphere'));
        btnIcosa.addEventListener('click', () => switchGeometry('icosa'));

        document.getElementById('btn-pause').addEventListener('click', () => {
            config.isPaused = !config.isPaused;
            const icon = document.getElementById('icon-pause');
            const text = document.getElementById('text-pause');
            
            if(config.isPaused) {
                icon.setAttribute('icon', 'solar:play-linear');
                text.textContent = "Resume";
            } else {
                icon.setAttribute('icon', 'solar:pause-linear');
                text.textContent = "Pause";
            }
        });

        document.getElementById('btn-reset').addEventListener('click', () => {
            config.roughness = 0.10;
            config.metalness = 1.00;
            config.lightIntensity = 2.5;
            config.speed = 1.0;
            config.isPaused = false;
            
            document.getElementById('input-roughness').value = 0.10;
            document.getElementById('input-metalness').value = 1.00;
            document.getElementById('input-intensity').value = 2.5;
            document.getElementById('input-speed').value = 1.0;
            
            updateVal('roughness', '0.10');
            updateVal('metalness', '1.00');
            updateVal('intensity', '2.5');
            updateVal('speed', '1.0');

            mainMaterial.roughness = 0.10;
            mainMaterial.metalness = 1.00;
            pointLight.intensity = 2.5 * 20;
            
            controls.reset();
            switchGeometry('sphere');
        });


        // --- Animation Loop ---
        
        let time = 0;

        function animate() {
            requestAnimationFrame(animate);

            // Update Controls
            controls.update();

            if (!config.isPaused) {
                time += 0.01 * config.speed;
                
                const radius = 4.0;
                lightSphere.position.x = Math.sin(time) * radius;
                lightSphere.position.z = Math.cos(time) * radius;
                lightSphere.position.y = Math.sin(time * 0.5) * 1.5 + 1;
                
                // Animate sphere/icosa
                if (currentMesh.geometry.type === 'IcosahedronGeometry') {
                    currentMesh.rotation.x += 0.002;
                    currentMesh.rotation.y += 0.002;
                }

                // Animate glass
                glassMesh.rotation.y = Math.sin(time * 0.2) * 0.1;
                glassMesh.position.y = 0.2 + Math.sin(time * 0.5) * 0.05; // Float
            }

            renderer.render(scene, camera);
        }

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Hide Loader
        setTimeout(() => {
            const loader = document.getElementById('loader');
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
            animate();
        }, 1000);
    
}
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
      

<div className="absolute inset-0 z-0 cursor-move" id="canvas-container"></div>

<div className="absolute inset-0 z-50 flex items-center justify-center bg-black" id="loader">
<div className="flex flex-col items-center gap-4">
<iconify-icon className="text-neutral-500 animate-spin-slow" height="48" icon="solar:infinity-linear" strokeWidth="1.5" width="48"></iconify-icon>
<span className="text-xs text-neutral-500 tracking-wide font-medium">OPTIMIZING ENGINE</span>
</div>
</div>

<div className="relative z-10 w-full h-full pointer-events-none p-4 md:p-6 flex flex-col justify-between">

<header className="flex items-start justify-between w-full pointer-events-auto">
<div className="flex items-center gap-3 glass-panel px-4 py-2 rounded-lg">
<iconify-icon className="text-white" icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div>
<h1 className="text-sm font-medium text-white tracking-tight leading-none">LUMEN</h1>
<p className="text-xs text-neutral-500 leading-none mt-1">Light Physics Simulator</p>
</div>
</div>
<a className="glass-panel w-9 h-9 flex items-center justify-center rounded-lg text-neutral-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:github-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</header>

<aside className="pointer-events-auto absolute right-4 top-20 bottom-4 w-72 md:w-80 flex flex-col gap-4 overflow-hidden">
<div className="glass-panel rounded-xl flex-1 flex flex-col overflow-y-auto">
<div className="p-4 border-b border-white/5 flex items-center justify-between sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-20">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Properties</span>
<iconify-icon className="text-neutral-500" icon="solar:tuning-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="p-5 space-y-7">

<div className="space-y-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-neutral-300" icon="solar:cube-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs font-medium text-white">Sphere Material</span>
</div>

<div className="group">
<div className="flex justify-between text-xs mb-2">
<label className="text-neutral-400">Roughness</label>
<span className="text-neutral-300 font-mono" id="val-roughness">0.10</span>
</div>
<input id="input-roughness" max="1" min="0" step="0.01" type="range" value="0.10" />
</div>

<div className="group">
<div className="flex justify-between text-xs mb-2">
<label className="text-neutral-400">Metalness</label>
<span className="text-neutral-300 font-mono" id="val-metalness">1.00</span>
</div>
<input id="input-metalness" max="1" min="0" step="0.01" type="range" value="1.00" />
</div>

<div className="flex items-center justify-between pt-1">
<label className="text-xs text-neutral-400">Base Color</label>
<div className="flex gap-2">
<button className="w-5 h-5 rounded-full bg-white border border-white/20 hover:scale-110 transition-transform color-btn" data-color="#ffffff"></button>
<button className="w-5 h-5 rounded-full bg-neutral-800 border border-white/20 hover:scale-110 transition-transform color-btn" data-color="#171717"></button>
<button className="w-5 h-5 rounded-full bg-rose-500 border border-white/20 hover:scale-110 transition-transform color-btn" data-color="#f43f5e"></button>
<button className="w-5 h-5 rounded-full bg-emerald-500 border border-white/20 hover:scale-110 transition-transform color-btn" data-color="#10b981"></button>
</div>
</div>
</div>
<div className="h-px bg-white/5 w-full"></div>

<div className="space-y-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-neutral-300" icon="solar:sun-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs font-medium text-white">Light Source</span>
</div>

<div className="group">
<div className="flex justify-between text-xs mb-2">
<label className="text-neutral-400">Intensity</label>
<span className="text-neutral-300 font-mono" id="val-intensity">2.5</span>
</div>
<input id="input-intensity" max="10" min="0" step="0.1" type="range" value="2.5" />
</div>

<div className="group">
<div className="flex justify-between text-xs mb-2">
<label className="text-neutral-400">Orbit Speed</label>
<span className="text-neutral-300 font-mono" id="val-speed">1.0</span>
</div>
<input id="input-speed" max="5" min="0" step="0.1" type="range" value="1.0" />
</div>

<div className="flex items-center justify-between pt-1">
<label className="text-xs text-neutral-400">Light Tint</label>
<div className="flex gap-2">
<button className="w-5 h-5 rounded-full bg-blue-400 border border-white/20 hover:scale-110 transition-transform light-btn" data-color="#60a5fa"></button>
<button className="w-5 h-5 rounded-full bg-amber-400 border border-white/20 hover:scale-110 transition-transform light-btn" data-color="#fbbf24"></button>
<button className="w-5 h-5 rounded-full bg-purple-400 border border-white/20 hover:scale-110 transition-transform light-btn" data-color="#c084fc"></button>
<button className="w-5 h-5 rounded-full bg-white border border-white/20 hover:scale-110 transition-transform light-btn" data-color="#ffffff"></button>
</div>
</div>
</div>
<div className="h-px bg-white/5 w-full"></div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-300" icon="solar:shapes-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs font-medium text-white">Left Geometry</span>
</div>
<div className="flex bg-[#1f1f1f] rounded-lg p-0.5">
<button className="px-3 py-1 text-[10px] font-medium rounded-md bg-[#333] text-white shadow-sm transition-all hover:text-white" id="btn-sphere">Sphere</button>
<button className="px-3 py-1 text-[10px] font-medium rounded-md text-neutral-400 hover:text-white transition-all" id="btn-icosa">Crystal</button>
</div>
</div>
</div>
</div>

<div className="glass-panel p-3 rounded-xl flex items-center justify-between gap-3">
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg border border-white/10 hover:bg-white/5 transition-colors text-xs font-medium text-neutral-300" id="btn-reset">
<iconify-icon icon="solar:restart-linear" strokeWidth="1.5" width="14"></iconify-icon>
                    Reset
                </button>
<button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg bg-white text-black hover:bg-neutral-200 transition-colors text-xs font-medium" id="btn-pause">
<iconify-icon icon="solar:pause-linear" id="icon-pause" strokeWidth="1.5" width="14"></iconify-icon>
<span id="text-pause">Pause</span>
</button>
</div>
</aside>

<footer className="pointer-events-auto flex items-end justify-between w-full md:w-[calc(100%-21rem)]">
<div className="glass-panel px-3 py-1.5 rounded-lg flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wide">PERFORMANCE MODE</span>
</div>
<div className="text-[10px] text-neutral-600 font-mono flex gap-3">
<span>ORBIT CONTROLS ENABLED</span>
<span>THREE.JS v0.160</span>
</div>
</footer>
</div>



    </>
  );
}
