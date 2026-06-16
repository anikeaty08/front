import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- View Switching Logic ---
        function switchView(viewName) {
            const orbitView = document.getElementById('view-orbit');
            const projectsView = document.getElementById('view-projects');
            const navOrbit = document.getElementById('nav-orbit');
            const navProjects = document.getElementById('nav-projects');
            const canvasContainer = document.getElementById('canvas-container');

            if (viewName === 'projects') {
                orbitView.classList.remove('active-view');
                orbitView.classList.add('hidden-view');
                
                projectsView.classList.remove('hidden-view');
                projectsView.classList.add('active-view');
                
                navOrbit.setAttribute('data-active', 'false');
                navProjects.setAttribute('data-active', 'true');

                // Dim the background slightly for readability
                canvasContainer.style.opacity = '0.3';
            } else {
                projectsView.classList.remove('active-view');
                projectsView.classList.add('hidden-view');
                
                orbitView.classList.remove('hidden-view');
                orbitView.classList.add('active-view');
                
                navProjects.setAttribute('data-active', 'false');
                navOrbit.setAttribute('data-active', 'true');

                // Restore background brightness
                canvasContainer.style.opacity = '1';
            }
        }

        // --- Three.js Configuration & State ---
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
            scene.fog = new THREE.FogExp2(0x030303, 0.02);

            // Camera Setup
            camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 2.5;

            // Renderer Setup
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 1.0;
            container.appendChild(renderer.domElement);

            // Lighting
            const ambientLight = new THREE.AmbientLight(0x404040, 0.5); 
            scene.add(ambientLight);

            sunLight = new THREE.DirectionalLight(0xffffff, 1.5);
            sunLight.position.set(5, 3, 5);
            scene.add(sunLight);

            const rimLight = new THREE.SpotLight(0x4f46e5, 2);
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
                if (Math.abs(x) + Math.abs(y) + Math.abs(z) > 5) {
                    starVertices.push(x, y, z);
                }
            }

            starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
            const stars = new THREE.Points(starGeometry, starMaterial);
            scene.add(stars);
        }

        function setupUIListeners() {
            speedInput.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value);
                rotationSpeed = val * 0.0001; 
                speedVal.innerText = (val / 10).toFixed(1) + "x";
            });

            lightInput.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value) / 100;
                sunLight.intensity = val * 1.5; 
                lightVal.innerText = Math.round(val * 100) + "%";
            });

            atmosToggle.addEventListener('change', (e) => {
                isAtmosEnabled = e.target.checked;
                if(cloudsMesh) cloudsMesh.visible = isAtmosEnabled;
            });

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
                cloudsMesh.rotation.y += rotationSpeed * 1.1; 
            }
            
            controls.update();
            renderer.render(scene, camera);
        }

        init();
        animate();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-0 transition-opacity duration-700" id="canvas-container"></div>

<div className="absolute inset-0 z-10 flex flex-col h-full">

<header className="flex items-start justify-between w-full px-4 pt-4 md:px-6 md:pt-6 pointer-events-auto z-50">

<div className="flex flex-col gap-1 w-1/3">
<div className="flex items-center gap-3">
<h1 className="text-xl md:text-2xl font-medium tracking-tighter text-white">21st Labs</h1>
<div className="glass-panel px-2 py-0.5 rounded-md hidden md:flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-neutral-400 text-[10px] font-medium tracking-wide uppercase">Online</span>
</div>
</div>
</div>

<nav className="glass-panel p-1 rounded-full flex items-center gap-1">
<button className="nav-btn px-4 py-1.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white transition-colors flex items-center gap-2" data-active="true" id="nav-orbit" onclick="switchView('orbit')">
<iconify-icon icon="solar:planet-linear" width="14"></iconify-icon>
                    Orbit
                </button>
<button className="nav-btn px-4 py-1.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white transition-colors flex items-center gap-2" data-active="false" id="nav-projects" onclick="switchView('projects')">
<iconify-icon icon="solar:folder-with-files-linear" width="14"></iconify-icon>
                    Projects
                </button>
</nav>

<div className="flex gap-2 w-1/3 justify-end">
<button className="glass-panel p-2 rounded-full text-neutral-400 hover:text-white transition-colors">
<iconify-icon height="20" icon="solar:settings-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="glass-panel p-2 rounded-full text-neutral-400 hover:text-white transition-colors">
<iconify-icon height="20" icon="solar:user-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</header>

<main className="flex-1 relative overflow-hidden">

<div className="view-section active-view w-full h-full flex flex-col justify-end p-4 md:p-6 pb-8" id="view-orbit">
<div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-4 pointer-events-auto">

<div className="hidden md:flex flex-col gap-1 text-xs font-mono text-neutral-500">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:gps-linear" width="14"></iconify-icon>
<span id="coord-display">LAT 32.0853° N • LON 34.7818° E</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:pulse-linear" width="14"></iconify-icon>
<span>SYSTEM NORMAL</span>
</div>
</div>

<div className="glass-panel w-full md:w-96 rounded-2xl p-5 space-y-5">
<div className="flex items-center justify-between border-b border-white/5 pb-3">
<span className="text-sm font-medium text-white">Visual Settings</span>
<iconify-icon className="text-neutral-500" icon="solar:tuning-linear" width="16"></iconify-icon>
</div>

<div className="space-y-2">
<div className="flex justify-between text-xs text-neutral-400">
<span>Orbital Speed</span>
<span id="speed-val">1.0x</span>
</div>
<input className="w-full" id="rotation-speed" max="50" min="0" type="range" value="10"/>
</div>

<div className="space-y-2">
<div className="flex justify-between text-xs text-neutral-400">
<span>Solar Intensity</span>
<span id="light-val">100%</span>
</div>
<input className="w-full" id="sun-intensity" max="200" min="0" type="range" value="100"/>
</div>

<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:cloud-linear" width="16"></iconify-icon>
<span className="text-xs text-neutral-300">Atmosphere</span>
</div>
<div className="relative inline-block w-10 ml-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-neutral-900 appearance-none cursor-pointer transition-all duration-300 left-0 checked:left-5" id="atmos-toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-800 cursor-pointer transition-colors duration-300 checked:bg-neutral-600" htmlFor="atmos-toggle"></label>
</div>
</div>
<div className="grid grid-cols-2 gap-2 pt-2">
<button className="flex items-center justify-center gap-2 py-2 rounded-lg border border-white/10 text-xs font-medium hover:bg-white/5 transition-colors" id="reset-view">
<iconify-icon icon="solar:restart-linear" width="14"></iconify-icon>
                                Reset
                            </button>
<button className="flex items-center justify-center gap-2 py-2 rounded-lg bg-white text-black text-xs font-medium hover:bg-neutral-200 transition-colors">
<iconify-icon icon="solar:camera-linear" width="14"></iconify-icon>
                                Capture
                            </button>
</div>
</div>
</div>
</div>

<div className="view-section hidden-view w-full h-full overflow-y-auto pointer-events-auto" id="view-projects">
<div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
<div className="flex flex-col gap-2 mb-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white">Active Projects</h2>
<p className="text-neutral-400 text-sm font-light max-w-lg">Monitoring ongoing development across all active sectors. Real-time telemetry and status updates.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="glass-card p-5 rounded-xl group cursor-pointer">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:rocket-linear" width="20"></iconify-icon>
</div>
<div className="px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-medium uppercase tracking-wide">
                                    Live
                                </div>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-1 group-hover:text-emerald-400 transition-colors">Hyperion Link</h3>
<p className="text-neutral-500 text-xs leading-relaxed mb-6 font-light">Low-latency orbital communication mesh providing 99.9% uptime for deep space assets.</p>
<div className="flex items-center gap-3 border-t border-white/5 pt-4">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-neutral-700 border border-black"></div>
<div className="w-6 h-6 rounded-full bg-neutral-600 border border-black"></div>
</div>
<span className="text-xs text-neutral-400">Updated 2m ago</span>
</div>
</div>

<div className="glass-card p-5 rounded-xl group cursor-pointer">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-network-linear" width="20"></iconify-icon>
</div>
<div className="px-2 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-medium uppercase tracking-wide">
                                    Building
                                </div>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-1 group-hover:text-amber-400 transition-colors">Aegis Protocol</h3>
<p className="text-neutral-500 text-xs leading-relaxed mb-6 font-light">Advanced encryption layer for planetary defense grid. Currently in alpha testing phase.</p>
<div className="flex items-center gap-3 border-t border-white/5 pt-4">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-neutral-700 border border-black"></div>
</div>
<span className="text-xs text-neutral-400">Updated 4h ago</span>
</div>
</div>

<div className="glass-card p-5 rounded-xl group cursor-pointer">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:database-linear" width="20"></iconify-icon>
</div>
<div className="px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-medium uppercase tracking-wide">
                                    Beta
                                </div>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-1 group-hover:text-blue-400 transition-colors">Core Archive</h3>
<p className="text-neutral-500 text-xs leading-relaxed mb-6 font-light">Decentralized storage solution for exabytes of telemetry data using quantum sharding.</p>
<div className="flex items-center gap-3 border-t border-white/5 pt-4">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-neutral-700 border border-black"></div>
<div className="w-6 h-6 rounded-full bg-neutral-600 border border-black"></div>
<div className="w-6 h-6 rounded-full bg-neutral-500 border border-black"></div>
</div>
<span className="text-xs text-neutral-400">Updated 1d ago</span>
</div>
</div>

<div className="glass-card p-5 rounded-xl group cursor-pointer">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:satellite-linear" width="20"></iconify-icon>
</div>
<div className="px-2 py-1 rounded-full bg-neutral-700/30 border border-neutral-600/30 text-neutral-400 text-[10px] font-medium uppercase tracking-wide">
                                    Planned
                                </div>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-1 group-hover:text-white transition-colors">Project Dawn</h3>
<p className="text-neutral-500 text-xs leading-relaxed mb-6 font-light">Next-generation solar collection arrays for orbital habitats. Feasibility study.</p>
<div className="flex items-center gap-3 border-t border-white/5 pt-4">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-neutral-700 border border-black"></div>
</div>
<span className="text-xs text-neutral-400">Updated 1w ago</span>
</div>
</div>

<div className="glass-card p-5 rounded-xl border border-dashed border-neutral-800 hover:border-neutral-700 bg-transparent flex flex-col items-center justify-center text-center gap-3 cursor-pointer group h-full min-h-[200px]">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-500 group-hover:text-white group-hover:bg-neutral-800 transition-colors">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</div>
<span className="text-sm text-neutral-400 font-medium group-hover:text-white transition-colors">Initialize New Project</span>
</div>
</div>
</div>
</div>
</main>
</div>





    </>
  );
}
