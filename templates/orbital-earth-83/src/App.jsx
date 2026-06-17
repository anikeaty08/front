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



        // --- Configuration & State ---
        let scene, camera, renderer, earthMesh, cloudsMesh, controls, sunLight;
        let rotationSpeed = 0.001;
        let isAtmosEnabled = true;

        // UI References
        const speedInput = document.getElementById('rotation-speed');
        const lightInput = document.getElementById('sun-intensity');
        const atmosToggle = document.getElementById('atmos-toggle');
        const speedVal = document.getElementById('speed-val');
        const lightVal = document.getElementById('light-val');
        const resetBtn = document.getElementById('reset-view');

        function init() {
            // Scene Setup
            const container = document.getElementById('canvas-container');
            scene = new THREE.Scene();
            // Subtle Fog for depth
            scene.fog = new THREE.FogExp2(0x030303, 0.02);

            // Camera Setup
            camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 2.5;

            // Renderer Setup
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            // Linear Tone Mapping for more realistic lighting (less washed out)
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 1.0;
            container.appendChild(renderer.domElement);

            // Lighting
            const ambientLight = new THREE.AmbientLight(0x404040, 0.5); // Soft cool ambient
            scene.add(ambientLight);

            sunLight = new THREE.DirectionalLight(0xffffff, 1.5);
            sunLight.position.set(5, 3, 5);
            scene.add(sunLight);

            // Backlight/Rim light for cinematic look
            const rimLight = new THREE.SpotLight(0x4f46e5, 2); // Indigo rim light
            rimLight.position.set(-5, 5, -2);
            rimLight.lookAt(0, 0, 0);
            scene.add(rimLight);

            // Create Objects
            createEarth();
            createStars();

            // Controls
            controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.05;
            controls.enablePan = false;
            controls.minDistance = 1.5;
            controls.maxDistance = 10;

            // Event Listeners
            window.addEventListener('resize', onWindowResize, false);
            setupUIListeners();
        }

        function createEarth() {
            const loader = new THREE.TextureLoader();
            const geometry = new THREE.SphereGeometry(1, 64, 64);

            // Earth Material
            const material = new THREE.MeshPhongMaterial({
                map: loader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg'),
                bumpMap: loader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg'),
                bumpScale: 0.05,
                specularMap: loader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg'),
                specular: new THREE.Color(0x333333),
                shininess: 15
            });

            earthMesh = new THREE.Mesh(geometry, material);
            scene.add(earthMesh);

            // Atmosphere / Clouds (Slightly larger sphere)
            const cloudGeometry = new THREE.SphereGeometry(1.02, 64, 64);
            const cloudMaterial = new THREE.MeshPhongMaterial({
                map: loader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png'),
                side: THREE.DoubleSide,
                opacity: 0.8,
                transparent: true,
                depthWrite: false,
            });
            
            cloudsMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
            scene.add(cloudsMesh);
        }

        function createStars() {
            const starGeometry = new THREE.BufferGeometry();
            const starMaterial = new THREE.PointsMaterial({
                color: 0xffffff,
                size: 0.02,
                transparent: true,
                opacity: 0.8
            });

            const starVertices = [];
            for (let i = 0; i < 2000; i++) {
                const x = (Math.random() - 0.5) * 20;
                const y = (Math.random() - 0.5) * 20;
                const z = (Math.random() - 0.5) * 20;
                // Keep stars away from center
                if (Math.abs(x) + Math.abs(y) + Math.abs(z) > 5) {
                    starVertices.push(x, y, z);
                }
            }

            starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
            const stars = new THREE.Points(starGeometry, starMaterial);
            scene.add(stars);
        }

        function setupUIListeners() {
            // Speed Slider
            speedInput.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value);
                rotationSpeed = val * 0.0001; // Scale down for JS logic
                speedVal.innerText = (val / 10).toFixed(1) + "x";
            });

            // Light Slider
            lightInput.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value) / 100;
                sunLight.intensity = val * 1.5; // Base intensity is 1.5
                lightVal.innerText = Math.round(val * 100) + "%";
            });

            // Atmosphere Toggle
            atmosToggle.addEventListener('change', (e) => {
                isAtmosEnabled = e.target.checked;
                if(cloudsMesh) cloudsMesh.visible = isAtmosEnabled;
            });

            // Reset Button
            resetBtn.addEventListener('click', () => {
                controls.reset();
                rotationSpeed = 0.001;
                speedInput.value = 10;
                speedVal.innerText = "1.0x";
                sunLight.intensity = 1.5;
                lightInput.value = 100;
                lightVal.innerText = "100%";
            });
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function animate() {
            requestAnimationFrame(animate);

            if (earthMesh) {
                earthMesh.rotation.y += rotationSpeed;
            }
            if (cloudsMesh) {
                cloudsMesh.rotation.y += rotationSpeed * 1.1; // Clouds move slightly faster
            }

            // Fake data update for UI
            const coordDisplay = document.getElementById('coord-display');
            if(coordDisplay && earthMesh) {
                // Just pseudo-randomizing last digit to look alive
                if(Math.random() > 0.9) {
                     // Keep static text mostly
                }
            }
            
            controls.update();
            renderer.render(scene, camera);
        }

        init();
        animate();

    
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
      

<div className="absolute inset-0 z-0" id="canvas-container"></div>

<div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-4 md:p-6">

<header className="flex items-center justify-between w-full pointer-events-auto">
<div className="glass-panel px-4 py-2 rounded-full flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="font-semibold tracking-tight text-sm uppercase text-white">ORBITAL</span>
<span className="text-neutral-500 text-xs">|</span>
<span className="text-neutral-400 text-xs tracking-tight">LIVE FEED</span>
</div>
<div className="flex gap-2">
<button className="glass-panel p-2 rounded-full text-neutral-400 hover:text-white transition-colors">
<span className="iconify" data-height="18" data-icon="lucide:settings-2" data-strokeWidth="1.5" data-width="18"></span>
</button>
<button className="glass-panel p-2 rounded-full text-neutral-400 hover:text-white transition-colors">
<span className="iconify" data-height="18" data-icon="lucide:share" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
</header>

<footer className="flex flex-col md:flex-row items-end md:items-center justify-between gap-4 pointer-events-auto">

<div className="hidden md:flex flex-col gap-1 text-xs font-mono text-neutral-500">
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:crosshair" data-width="14"></span>
<span id="coord-display">LAT 32.0853° N • LON 34.7818° E</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:activity" data-width="14"></span>
<span>SYSTEM NORMAL</span>
</div>
</div>

<div className="glass-panel w-full md:w-96 rounded-2xl p-5 space-y-5">
<div className="flex items-center justify-between border-b border-white/5 pb-3">
<span className="text-sm font-medium text-white">הגדרות תצוגה</span>
<span className="iconify text-neutral-500" data-icon="lucide:sliders-horizontal" data-width="16"></span>
</div>

<div className="space-y-2">
<div className="flex justify-between text-xs text-neutral-400">
<span>מהירות סיבוב</span>
<span id="speed-val">1.0x</span>
</div>
<input className="w-full" id="rotation-speed" max="50" min="0" type="range" value="10"/>
</div>

<div className="space-y-2">
<div className="flex justify-between text-xs text-neutral-400">
<span>עוצמת שמש</span>
<span id="light-val">100%</span>
</div>
<input className="w-full" id="sun-intensity" max="200" min="0" type="range" value="100"/>
</div>

<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-2">
<span className="iconify text-neutral-400" data-icon="lucide:cloud" data-width="16"></span>
<span className="text-xs text-neutral-300">אטמוספירה</span>
</div>

<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-neutral-900 appearance-none cursor-pointer transition-all duration-300 left-0 checked:left-5" id="atmos-toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-800 cursor-pointer transition-colors duration-300 checked:bg-neutral-600" htmlFor="atmos-toggle"></label>
</input></div>
</div>
<div className="grid grid-cols-2 gap-2 pt-2">
<button className="flex items-center justify-center gap-2 py-2 rounded-lg border border-white/10 text-xs font-medium hover:bg-white/5 transition-colors" id="reset-view">
<span className="iconify" data-icon="lucide:rotate-ccw" data-width="14"></span>
                        איפוס
                    </button>
<button className="flex items-center justify-center gap-2 py-2 rounded-lg bg-white text-black text-xs font-medium hover:bg-neutral-200 transition-colors">
<span className="iconify" data-icon="lucide:camera" data-width="14"></span>
                        צילום
                    </button>
</div>
</div>
</footer>
</div>





    </>
  );
}
