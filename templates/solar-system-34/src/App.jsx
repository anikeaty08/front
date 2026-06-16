import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



{
"imports": {
"three": "https://unpkg.com/three@0.160.0/build/three.module.js",
"three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
}
}



        import * as THREE from 'three';
        import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

        // --- Configuration & Data ---
        const config = {
            sunSize: 4, // Visual scale of sun
            scaleFactor: 1, // Global scale
            orbitScale: 15, // Spacing between orbits
            speedFactor: 0.05, // Animation speed
        };

        const planetsData = [
            { name: "Mercury", size: 0.8, distance: 6, speed: 0.04, color: 0xA5A5A5, type: "Terrestrial", year: "88 Days", desc: "The smallest planet in the Solar System and the closest to the Sun." },
            { name: "Venus", size: 1.2, distance: 9, speed: 0.015, color: 0xE3BB76, type: "Terrestrial", year: "225 Days", desc: "Second planet from the Sun. It has the hottest planetary surface in the solar system." },
            { name: "Earth", size: 1.3, distance: 13, speed: 0.01, color: 0x22A6F2, type: "Terrestrial", year: "365 Days", desc: "Third planet from the Sun and the only astronomical object known to harbor life." },
            { name: "Mars", size: 1.0, distance: 17, speed: 0.008, color: 0xDD4C22, type: "Terrestrial", year: "687 Days", desc: "Fourth planet from the Sun and the second-smallest planet in the Solar System." },
            { name: "Jupiter", size: 3.5, distance: 26, speed: 0.004, color: 0xD6A76E, type: "Gas Giant", year: "12 Years", desc: "The largest planet in the Solar System. It is a gas giant with mass one-thousandth that of the Sun." },
            { name: "Saturn", size: 3.0, distance: 36, speed: 0.003, color: 0xF4D03F, type: "Gas Giant", ring: { inner: 4, outer: 7, color: 0xC0A375 }, year: "29 Years", desc: "Sixth planet from the Sun and the second-largest in the Solar System, adorned with a complex ring system." },
            { name: "Uranus", size: 2.0, distance: 46, speed: 0.002, color: 0x7DE3F4, type: "Ice Giant", year: "84 Years", desc: "Seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass." },
            { name: "Neptune", size: 1.9, distance: 56, speed: 0.001, color: 0x3E54E8, type: "Ice Giant", year: "165 Years", desc: "Eighth and farthest known Solar planet from the Sun. It is the fourth-largest planet in the Solar System." },
        ];

        // --- Setup ---
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#050505'); // Deep space black
        scene.fog = new THREE.FogExp2(0x050505, 0.008);

        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 40, 80);

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
        controls.maxDistance = 200;
        controls.maxPolarAngle = Math.PI / 1.5; // Don't go below the plane too much

        // --- Lighting ---
        const ambientLight = new THREE.AmbientLight(0x404040, 0.5); // Soft white light
        scene.add(ambientLight);

        // The Sun is the main light source
        const sunLight = new THREE.PointLight(0xffffff, 2, 300);
        sunLight.position.set(0, 0, 0);
        sunLight.castShadow = true;
        sunLight.shadow.bias = -0.0001;
        scene.add(sunLight);

        // --- Objects ---

        // 1. Starfield
        function createStarfield() {
            const geometry = new THREE.BufferGeometry();
            const count = 3000;
            const positions = new Float32Array(count * 3);
            for(let i = 0; i < count * 3; i++) {
                positions[i] = (Math.random() - 0.5) * 600;
            }
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            const material = new THREE.PointsMaterial({ 
                color: 0xffffff, 
                size: 0.5, 
                transparent: true, 
                opacity: 0.8,
                sizeAttenuation: true 
            });
            const stars = new THREE.Points(geometry, material);
            scene.add(stars);
        }
        createStarfield();

        // 2. The Sun
        // Using a basic material with emissive property to simulate glow
        const sunGeometry = new THREE.SphereGeometry(config.sunSize, 64, 64);
        const sunMaterial = new THREE.MeshStandardMaterial({
            color: 0xFDB813,
            emissive: 0xFDB813,
            emissiveIntensity: 2,
            roughness: 0.4
        });
        const sun = new THREE.Mesh(sunGeometry, sunMaterial);
        scene.add(sun);

        // Add a glow sprite for the sun
        const spriteMaterial = new THREE.SpriteMaterial({ 
            map: new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/sprites/glow.png'), 
            color: 0xFDB813, 
            transparent: true, 
            blending: THREE.AdditiveBlending,
            opacity: 0.6
        });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.scale.set(15, 15, 1);
        sun.add(sprite);

        // 3. Planets
        const planetMeshes = [];
        const orbitLines = [];
        const planetGroup = new THREE.Group();
        scene.add(planetGroup);

        planetsData.forEach((data, index) => {
            // Orbit Group (rotates around 0,0,0)
            const orbitGroup = new THREE.Group();
            planetGroup.add(orbitGroup);

            // Calculate random starting angle
            orbitGroup.rotation.y = Math.random() * Math.PI * 2;
            
            // Planet Mesh
            const geometry = new THREE.SphereGeometry(data.size, 32, 32);
            const material = new THREE.MeshStandardMaterial({
                color: data.color,
                roughness: 0.7,
                metalness: 0.1,
            });
            const mesh = new THREE.Mesh(geometry, material);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            mesh.position.x = data.distance; // Offset from center
            
            orbitGroup.userData = { speed: data.speed, distance: data.distance, name: data.name };
            mesh.userData = { ...data, parentGroup: orbitGroup };
            
            orbitGroup.add(mesh);
            planetMeshes.push(mesh);

            // Saturn's Rings
            if(data.name === 'Saturn' && data.ring) {
                const ringGeo = new THREE.RingGeometry(data.ring.inner, data.ring.outer, 64);
                const ringMat = new THREE.MeshStandardMaterial({
                    color: data.ring.color,
                    side: THREE.DoubleSide,
                    transparent: true,
                    opacity: 0.7
                });
                const ring = new THREE.Mesh(ringGeo, ringMat);
                ring.rotation.x = Math.PI / 2;
                mesh.add(ring);
            }

            // Orbit Path Visual (Line)
            const orbitGeo = new THREE.RingGeometry(data.distance - 0.05, data.distance + 0.05, 128);
            const orbitMat = new THREE.MeshBasicMaterial({ 
                color: 0xffffff, 
                side: THREE.DoubleSide, 
                transparent: true, 
                opacity: 0.05 
            });
            const orbitLine = new THREE.Mesh(orbitGeo, orbitMat);
            orbitLine.rotation.x = Math.PI / 2;
            scene.add(orbitLine);
            orbitLines.push(orbitLine);
        });

        // --- Interaction Logic ---

        // UI References
        const planetListEl = document.getElementById('planet-list');
        const infoPanel = document.getElementById('info-panel');
        const infoName = document.getElementById('info-name');
        const infoType = document.getElementById('info-type');
        const infoDesc = document.getElementById('info-desc');
        const infoDist = document.getElementById('info-dist');
        const infoYear = document.getElementById('info-year');
        const playPauseBtn = document.getElementById('play-pause');
        const playIcon = document.getElementById('play-icon');
        const speedSlider = document.getElementById('speed-slider');
        const speedVal = document.getElementById('speed-val');
        const dateDisplay = document.getElementById('date-display');
        const toggleOrbitBtn = document.getElementById('toggle-orbit');

        let isPaused = false;
        let simSpeed = 0.5;
        let targetPlanet = null;
        let targetCameraPos = new THREE.Vector3();
        let isFocusing = false;
        
        // Populate Planet List
        planetsData.forEach((p, i) => {
            const btn = document.createElement('button');
            btn.className = `group w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-neutral-400 hover:bg-white/5 hover:text-white transition-all duration-200 outline-none`;
            btn.innerHTML = `
                <div class="flex items-center gap-3">
                    <span class="w-1.5 h-1.5 rounded-full" style="background-color: #${p.color.toString(16)}"></span>
                    <span class="font-normal tracking-wide">${p.name}</span>
                </div>
                <iconify-icon icon="solar:arrow-right-linear" class="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" width="16"></iconify-icon>
            `;
            btn.onclick = () => focusPlanet(i);
            planetListEl.appendChild(btn);
        });

        function focusPlanet(index) {
            targetPlanet = planetMeshes[index];
            const data = targetPlanet.userData;
            
            // Update Info Panel
            infoName.textContent = data.name;
            infoType.textContent = data.type;
            infoDesc.textContent = data.desc;
            infoDist.textContent = `${data.distance} units`; // Simplified
            infoYear.textContent = data.year;
            
            infoPanel.classList.remove('opacity-0', 'translate-y-4');
            isFocusing = true;
        }

        // Close info panel when clicking elsewhere (simplified logic for now, click on sun resets)
        const raycaster = new THREE.Raycaster();
        const pointer = new THREE.Vector2();

        window.addEventListener('pointerdown', (event) => {
            // Very basic raycasting to allow clicking planets in 3D
            pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
            pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(pointer, camera);
            const intersects = raycaster.intersectObjects(planetMeshes);
            
            if (intersects.length > 0) {
                const idx = planetMeshes.indexOf(intersects[0].object);
                if(idx !== -1) focusPlanet(idx);
            } else if (!event.target.closest('nav') && !event.target.closest('footer')) {
                // Clicked in space
                // Keep focus if dragging controls, but maybe reset if strictly clicking empty space?
                // Let's leave focusing active for smoother UX
            }
        });

        // Controls Logic
        playPauseBtn.addEventListener('click', () => {
            isPaused = !isPaused;
            playIcon.setAttribute('icon', isPaused ? 'solar:play-linear' : 'solar:pause-linear');
        });

        speedSlider.addEventListener('input', (e) => {
            simSpeed = parseFloat(e.target.value);
            speedVal.textContent = simSpeed.toFixed(1) + 'x';
        });

        toggleOrbitBtn.addEventListener('click', () => {
            orbitLines.forEach(line => {
                line.visible = !line.visible;
            });
            toggleOrbitBtn.classList.toggle('bg-white/10');
            toggleOrbitBtn.classList.toggle('text-white');
        });

        // Time Simulation
        let simulatedTime = new Date().getTime();
        
        // Animation Loop
        function animate() {
            requestAnimationFrame(animate);

            if(!isPaused) {
                const delta = simSpeed * config.speedFactor;
                
                // Rotate Planets around Sun
                planetMeshes.forEach(mesh => {
                    const group = mesh.userData.parentGroup;
                    group.rotation.y += mesh.userData.speed * delta;
                    
                    // Rotate Planet on Axis
                    mesh.rotation.y += 0.01 * delta; // Arbitrary self-rotation
                });

                // Update Date
                simulatedTime += delta * 1000000000; // Speed up time for display
                dateDisplay.textContent = new Date(simulatedTime).toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' });
            }

            // Camera Following Logic
            if (isFocusing && targetPlanet) {
                // Get absolute position of planet
                const targetPos = new THREE.Vector3();
                targetPlanet.getWorldPosition(targetPos);
                
                // Calculate desired camera position (offset)
                const offset = new THREE.Vector3(10, 5, 10); // Standard offset
                if(targetPlanet.userData.name === 'Saturn') offset.set(12, 6, 12);
                if(targetPlanet.userData.name === 'Jupiter') offset.set(14, 7, 14);

                // Smoothly interpolate camera position manually or use controls target
                // Better approach for OrbitControls: Move the controls target to the planet
                const lerpFactor = 0.05;
                controls.target.lerp(targetPos, lerpFactor);
                
                // Adjust camera position to maintain distance if needed, but OrbitControls handles pan nicely
                // If we want "chase" cam:
                // camera.position.lerp(targetPos.clone().add(offset), lerpFactor);
            }

            controls.update();
            renderer.render(scene, camera);
        }

        animate();

        // Responsive Resizing
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-0" id="canvas-container"></div>

<div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-6">

<header className="flex justify-between items-start pointer-events-auto">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 text-white/90">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-orange-500 to-yellow-300 shadow-[0_0_15px_rgba(255,165,0,0.5)]"></div>
<h1 className="text-lg font-medium tracking-tight">SOLAR SYSTEM</h1>
</div>
<p className="text-xs text-neutral-500 font-normal ml-8 max-w-[200px]">Real-time orbital simulation. Scale is adjusted for visibility.</p>
</div>
<div className="flex gap-2">
<button className="group flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900/50 backdrop-blur-md border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 transition-all duration-300" id="toggle-orbit" title="Toggle Orbits">
<iconify-icon height="20" icon="solar:orbit-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<a className="group flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900/50 backdrop-blur-md border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 transition-all duration-300" href="#">
<iconify-icon height="20" icon="solar:settings-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</header>

<nav className="absolute top-1/2 left-6 -translate-y-1/2 pointer-events-auto hidden md:block">
<ul className="flex flex-col gap-1 bg-neutral-900/40 backdrop-blur-xl border border-white/5 rounded-2xl p-2 w-48 shadow-2xl shadow-black/50">
<li className="px-3 py-2 text-xs font-medium text-neutral-500 uppercase tracking-widest border-b border-white/5 mb-1 pb-2">Planets</li>

<div className="flex flex-col gap-0.5" id="planet-list"></div>
</ul>
</nav>

<footer className="flex flex-col md:flex-row items-end md:items-center justify-between gap-4 pointer-events-auto w-full">

<div className="bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-xl p-4 w-full md:w-80 transition-opacity duration-500 opacity-0 transform translate-y-4" id="info-panel">
<div className="flex items-center justify-between mb-2">
<h2 className="text-xl font-medium text-white tracking-tight" id="info-name">Earth</h2>
<span className="text-xs text-neutral-400 border border-white/10 px-2 py-0.5 rounded-full bg-white/5" id="info-type">Terrestrial</span>
</div>
<p className="text-xs text-neutral-400 leading-relaxed mb-4" id="info-desc">
                    The third planet from the Sun and the only astronomical object known to harbor life.
                </p>
<div className="grid grid-cols-2 gap-2">
<div className="bg-white/5 rounded-lg p-2 border border-white/5">
<p className="text-[10px] text-neutral-500 uppercase tracking-wider">Distance</p>
<p className="text-sm font-medium text-neutral-200" id="info-dist">1 AU</p>
</div>
<div className="bg-white/5 rounded-lg p-2 border border-white/5">
<p className="text-[10px] text-neutral-500 uppercase tracking-wider">Year Length</p>
<p className="text-sm font-medium text-neutral-200" id="info-year">365 Days</p>
</div>
</div>
</div>

<div className="flex items-center gap-4 bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-full px-5 py-3 shadow-2xl">
<button className="text-white hover:text-indigo-400 transition-colors flex items-center" id="play-pause">
<iconify-icon height="24" icon="solar:pause-linear" id="play-icon" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<div className="flex flex-col w-32 md:w-48 gap-1">
<div className="flex justify-between text-[10px] text-neutral-400 font-medium tracking-wide">
<span>SPEED</span>
<span id="speed-val">1x</span>
</div>
<input className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer" id="speed-slider" max="2" min="0" step="0.1" type="range" value="0.5"/>
</div>
<div className="h-8 w-px bg-white/10 mx-1"></div>
<div className="flex flex-col items-end">
<span className="text-[10px] text-neutral-500 font-medium uppercase tracking-widest">Simulated Time</span>
<span className="text-xs font-medium tabular-nums tracking-wide text-neutral-300" id="date-display">Loading...</span>
</div>
</div>
</footer>
</div>



    </>
  );
}
