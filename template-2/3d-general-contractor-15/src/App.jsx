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



        // --- THREE.JS SETUP ---
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        const fogColor = new THREE.Color('#09090b');
        scene.background = fogColor;
        scene.fog = new THREE.Fog(fogColor, 20, 80);

        // Camera (Chase Cam)
        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        container.appendChild(renderer.domElement);

        // --- LIGHTING ---
        const ambientLight = new THREE.HemisphereLight(0xffffff, 0x09090b, 0.4);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(50, 100, 50);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.width = 2048;
        dirLight.shadow.mapSize.height = 2048;
        dirLight.shadow.camera.near = 0.5;
        dirLight.shadow.camera.far = 200;
        dirLight.shadow.camera.left = -100;
        dirLight.shadow.camera.right = 100;
        dirLight.shadow.camera.top = 100;
        dirLight.shadow.camera.bottom = -100;
        scene.add(dirLight);

        // --- ENVIRONMENT GENERATION ---
        
        // Floor
        const planeGeometry = new THREE.PlaneGeometry(500, 500);
        const planeMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x18181b, // Dark Asphalt/Ground
            roughness: 0.9,
            metalness: 0.1
        });
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -Math.PI / 2;
        plane.receiveShadow = true;
        scene.add(plane);

        const envGroup = new THREE.Group();
        scene.add(envGroup);

        const zoneLocs = [
            { x: 0, z: 0, r: 15 }, // Spawn
            { x: -30, z: -30, r: 10 }, // About
            { x: 30, z: -30, r: 10 }, // Services
            { x: 0, z: 40, r: 10 }  // Projects
        ];

        function isSafeZone(x, z) {
            return zoneLocs.some(zone => {
                const dist = Math.hypot(x - zone.x, z - zone.z);
                return dist < zone.r;
            });
        }

        // Generate Homes (Residential Neighborhood)
        const wallGeo = new THREE.BoxGeometry(1, 1, 1);
        const roofGeo = new THREE.ConeGeometry(1, 1, 4); // Pyramid/Hip roof base
        
        // Colors for variation
        const sidingColors = [0xd4d4d8, 0xe4e4e7, 0xa1a1aa, 0x71717a]; // Zinc grays
        const roofColors = [0x18181b, 0x27272a, 0x3f3f46]; // Dark roofs
        
        for (let i = 0; i < 150; i++) {
            const x = (Math.random() - 0.5) * 180;
            const z = (Math.random() - 0.5) * 180;

            if (isSafeZone(x, z)) continue;

            const gridX = Math.round(x / 10) * 10;
            const gridZ = Math.round(z / 10) * 10;
            
            // Random House Dimensions
            const width = 3.5 + Math.random() * 2;
            const depth = 3.5 + Math.random() * 2;
            const height = 2.5 + Math.random() * 1.5; // Single or double story

            const house = new THREE.Group();
            house.position.set(gridX, 0, gridZ);

            // Walls
            const matColor = sidingColors[Math.floor(Math.random() * sidingColors.length)];
            const walls = new THREE.Mesh(wallGeo, new THREE.MeshStandardMaterial({ color: matColor, roughness: 0.8 }));
            walls.scale.set(width, height, depth);
            walls.position.y = height / 2;
            walls.castShadow = true;
            walls.receiveShadow = true;
            house.add(walls);

            // Roof
            const roofH = 1.5 + Math.random() * 0.5;
            const roofColor = roofColors[Math.floor(Math.random() * roofColors.length)];
            const roof = new THREE.Mesh(roofGeo, new THREE.MeshStandardMaterial({ color: roofColor, roughness: 0.9 }));
            
            // Adjust roof scale to cover walls + overhang
            const overhang = 0.4;
            const roofScale = Math.max(width, depth) / 1.4; // Rough scaling for cone to cover box
            
            roof.scale.set(width/1.4 + overhang, roofH, depth/1.4 + overhang);
            roof.position.y = height + (roofH / 2);
            roof.rotation.y = Math.PI / 4; // Align pyramid edges
            roof.castShadow = true;
            house.add(roof);

            // Windows (Simple emissive planes)
            if (Math.random() > 0.3) {
                const winGeo = new THREE.PlaneGeometry(0.8, 0.8);
                const winMat = new THREE.MeshBasicMaterial({ color: 0xfef3c7, side: THREE.DoubleSide }); // Warm light
                const win = new THREE.Mesh(winGeo, winMat);
                win.position.set(0, height * 0.6, depth/2 + 0.05);
                house.add(win);
            }

            envGroup.add(house);
        }

        // Trees
        const treeMat = new THREE.MeshStandardMaterial({ color: 0x14532d, roughness: 0.9 });
        const trunkMat = new THREE.MeshStandardMaterial({ color: 0x3f2e21 });
        const treeGeo = new THREE.ConeGeometry(1, 4, 8);
        const trunkGeo = new THREE.CylinderGeometry(0.2, 0.2, 1);

        for(let i=0; i<80; i++) {
            const x = (Math.random() - 0.5) * 160;
            const z = (Math.random() - 0.5) * 160;
            if (isSafeZone(x, z)) continue;
            
            // Offset from grid slightly
            const gridX = Math.round(x / 10) * 10 + 4; 
            const gridZ = Math.round(z / 10) * 10 + 4;

            const trunk = new THREE.Mesh(trunkGeo, trunkMat);
            trunk.position.set(gridX, 0.5, gridZ);
            trunk.castShadow = true;
            envGroup.add(trunk);

            const leaves = new THREE.Mesh(treeGeo, treeMat);
            leaves.position.set(gridX, 2.5, gridZ);
            leaves.castShadow = true;
            envGroup.add(leaves);
        }

        // Street Lights
        const poleGeo = new THREE.CylinderGeometry(0.05, 0.05, 4);
        const poleMat = new THREE.MeshStandardMaterial({ color: 0x52525b });
        const bulbGeo = new THREE.SphereGeometry(0.2);
        const bulbMat = new THREE.MeshBasicMaterial({ color: 0xffedd5 });

        for(let i=0; i<25; i++) {
             const x = (Math.random() - 0.5) * 120;
            const z = (Math.random() - 0.5) * 120;
            if (isSafeZone(x, z)) continue;

             const gridX = Math.round(x / 20) * 20 - 5; 
             const gridZ = Math.round(z / 20) * 20 - 5;

             const pole = new THREE.Mesh(poleGeo, poleMat);
             pole.position.set(gridX, 2, gridZ);
             envGroup.add(pole);

             const bulb = new THREE.Mesh(bulbGeo, bulbMat);
             bulb.position.set(gridX, 4, gridZ);
             envGroup.add(bulb);

             const pl = new THREE.PointLight(0xffedd5, 0.5, 12);
             pl.position.set(gridX, 3.5, gridZ);
             envGroup.add(pl);
        }

        // --- CAR SETUP ---
        const carGroup = new THREE.Group();

        // Car Body - Utility/Truck Style
        const chassisGeo = new THREE.BoxGeometry(1.6, 0.6, 3.2);
        const chassisMat = new THREE.MeshStandardMaterial({ color: 0x27272a, roughness: 0.2, metalness: 0.7 });
        const carChassis = new THREE.Mesh(chassisGeo, chassisMat);
        carChassis.position.y = 0.6;
        carChassis.castShadow = true;
        carGroup.add(carChassis);

        // Cabin
        const cabinGeo = new THREE.BoxGeometry(1.4, 0.5, 1.8);
        const cabinMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.1, metalness: 0.9 });
        const cabin = new THREE.Mesh(cabinGeo, cabinMat);
        cabin.position.set(0, 1.1, -0.2);
        carGroup.add(cabin);

        // Glow Strips (Rear)
        const stripGeo = new THREE.BoxGeometry(1.4, 0.05, 0.05);
        const stripMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
        const rearStrip = new THREE.Mesh(stripGeo, stripMat);
        rearStrip.position.set(0, 0.7, 1.61);
        carGroup.add(rearStrip);
        
        // Headlights
        const hlGeo = new THREE.BoxGeometry(0.4, 0.1, 0.05);
        const hlMat = new THREE.MeshBasicMaterial({ color: 0xfffaf0 });
        const hlLeft = new THREE.Mesh(hlGeo, hlMat);
        hlLeft.position.set(-0.5, 0.6, -1.61);
        const hlRight = new THREE.Mesh(hlGeo, hlMat);
        hlRight.position.set(0.5, 0.6, -1.61);
        carGroup.add(hlLeft);
        carGroup.add(hlRight);

        // Spotlights
        const carSpotL = new THREE.SpotLight(0xfffaf0, 3, 30, 0.5, 0.5, 1);
        carSpotL.position.set(-0.5, 0.6, -1.5);
        carSpotL.target.position.set(-0.5, 0, -10);
        carGroup.add(carSpotL);
        carGroup.add(carSpotL.target);

        const carSpotR = new THREE.SpotLight(0xfffaf0, 3, 30, 0.5, 0.5, 1);
        carSpotR.position.set(0.5, 0.6, -1.5);
        carSpotR.target.position.set(0.5, 0, -10);
        carGroup.add(carSpotR);
        carGroup.add(carSpotR.target);

        // Wheels
        const wheelGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.3, 16);
        const wheelMat = new THREE.MeshStandardMaterial({ color: 0x09090b });
        wheelGeo.rotateZ(Math.PI / 2);

        const w1 = new THREE.Mesh(wheelGeo, wheelMat); w1.position.set(0.8, 0.35, 1);
        const w2 = new THREE.Mesh(wheelGeo, wheelMat); w2.position.set(-0.8, 0.35, 1);
        const w3 = new THREE.Mesh(wheelGeo, wheelMat); w3.position.set(0.8, 0.35, -1);
        const w4 = new THREE.Mesh(wheelGeo, wheelMat); w4.position.set(-0.8, 0.35, -1);
        carGroup.add(w1, w2, w3, w4);

        scene.add(carGroup);

        // --- ZONES ---
        const zones = [
            { id: 'about', x: -30, z: -30, color: 0xf59e0b }, // Amber for About
            { id: 'services', x: 30, z: -30, color: 0x3b82f6 }, // Blue for Services
            { id: 'projects', x: 0, z: 40, color: 0x10b981 } // Green for Projects
        ];

        zones.forEach(zone => {
            // Zone Ground Marker
            const geo = new THREE.RingGeometry(3, 3.2, 32);
            const mat = new THREE.MeshBasicMaterial({ color: zone.color, side: THREE.DoubleSide, transparent: true, opacity: 0.8 });
            const ring = new THREE.Mesh(geo, mat);
            ring.rotation.x = -Math.PI / 2;
            ring.position.set(zone.x, 0.1, zone.z);
            scene.add(ring);

            // Light Beacon
            const beaconGeo = new THREE.CylinderGeometry(0.1, 0.1, 20, 8);
            const beaconMat = new THREE.MeshBasicMaterial({ color: zone.color, transparent: true, opacity: 0.2 });
            const beacon = new THREE.Mesh(beaconGeo, beaconMat);
            beacon.position.set(zone.x, 10, zone.z);
            scene.add(beacon);

            // Floor Light
            const pLight = new THREE.PointLight(zone.color, 1, 10);
            pLight.position.set(zone.x, 2, zone.z);
            scene.add(pLight);
        });

        // --- GAME LOGIC ---
        const state = {
            speed: 0,
            angle: Math.PI, 
            keys: { w: false, a: false, s: false, d: false },
            activeZone: null,
            modalOpen: false
        };

        const ACCELERATION = 0.02;
        const FRICTION = 0.96;
        const MAX_SPEED = 0.6;
        const ROTATION_SPEED = 0.05;

        // UI Refs
        const alertEl = document.getElementById('proximity-alert');
        const coordsEl = document.getElementById('coords');
        const modalContainer = document.getElementById('modal-container');

        // Input
        window.addEventListener('keydown', (e) => {
            if (state.modalOpen) {
                if(e.key === 'Escape') closeModal();
                return;
            }
            const k = e.key.toLowerCase();
            if (state.keys.hasOwnProperty(k)) state.keys[k] = true;
            const keyEl = document.getElementById(`key-${k}`);
            if(keyEl) keyEl.classList.add('pressed');

            if (e.key === 'Enter' && state.activeZone) {
                openModal(state.activeZone);
            }
        });

        window.addEventListener('keyup', (e) => {
            const k = e.key.toLowerCase();
            if (state.keys.hasOwnProperty(k)) state.keys[k] = false;
            const keyEl = document.getElementById(`key-${k}`);
            if(keyEl) keyEl.classList.remove('pressed');
        });

        const btnMap = { 'btn-gas': 'w', 'btn-brake': 's', 'btn-left': 'a', 'btn-right': 'd' };
        Object.entries(btnMap).forEach(([btnId, key]) => {
            const btn = document.getElementById(btnId);
            if(btn) {
                const press = (e) => { e.preventDefault(); state.keys[key] = true; };
                const release = (e) => { e.preventDefault(); state.keys[key] = false; };
                btn.addEventListener('touchstart', press);
                btn.addEventListener('touchend', release);
                btn.addEventListener('mousedown', press);
                btn.addEventListener('mouseup', release);
            }
        });

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        function updateLabels() {
            zones.forEach(zone => {
                const el = document.getElementById(`label-${zone.id}`);
                if (!el) return;

                const pos = new THREE.Vector3(zone.x, 3.5, zone.z);
                pos.project(camera);

                const x = (pos.x * 0.5 + 0.5) * window.innerWidth;
                const y = (-(pos.y * 0.5) + 0.5) * window.innerHeight;

                const dist = carGroup.position.distanceTo(new THREE.Vector3(zone.x, 0, zone.z));
                const maxDist = 40;

                if (pos.z < 1 && dist < maxDist) {
                    el.style.left = `${x}px`;
                    el.style.top = `${y}px`;
                    el.classList.remove('opacity-0');
                    const scale = Math.max(0.7, 1 - dist/maxDist);
                    el.style.transform = `translate(-50%, -50%) scale(${scale})`;
                } else {
                    el.classList.add('opacity-0');
                }
            });
        }

        // --- ANIMATION LOOP ---
        function animate() {
            requestAnimationFrame(animate);

            if (!state.modalOpen) {
                // Physics
                if (state.keys.w) state.speed += ACCELERATION;
                if (state.keys.s) state.speed -= ACCELERATION;
                
                state.speed *= FRICTION;
                state.speed = Math.max(-MAX_SPEED, Math.min(MAX_SPEED, state.speed));

                // Steering
                if (Math.abs(state.speed) > 0.01) {
                    const direction = state.speed > 0 ? 1 : -1;
                    if (state.keys.a) state.angle += ROTATION_SPEED * direction;
                    if (state.keys.d) state.angle -= ROTATION_SPEED * direction;
                }

                // Move Car
                carGroup.rotation.y = state.angle;
                carGroup.position.x -= Math.sin(state.angle) * state.speed;
                carGroup.position.z -= Math.cos(state.angle) * state.speed;

                // Camera Logic
                const idealOffset = new THREE.Vector3(0, 5, 10);
                idealOffset.applyAxisAngle(new THREE.Vector3(0, 1, 0), state.angle);
                idealOffset.add(carGroup.position);

                camera.position.lerp(idealOffset, 0.1);
                
                const lookAtPos = new THREE.Vector3(0, 0, -10);
                lookAtPos.applyAxisAngle(new THREE.Vector3(0, 1, 0), state.angle);
                lookAtPos.add(carGroup.position);
                camera.lookAt(lookAtPos);
            }

            // Proximity Check
            let nearbyZone = null;
            zones.forEach(zone => {
                const dist = Math.hypot(carGroup.position.x - zone.x, carGroup.position.z - zone.z);
                if (dist < 5) nearbyZone = zone.id;
            });

            if (nearbyZone !== state.activeZone) {
                state.activeZone = nearbyZone;
                if (nearbyZone) {
                    alertEl.classList.remove('opacity-0', 'scale-90', 'translate-y-4');
                    alertEl.classList.add('opacity-100', 'scale-100', 'translate-y-0');
                } else {
                    alertEl.classList.add('opacity-0', 'scale-90', 'translate-y-4');
                    alertEl.classList.remove('opacity-100', 'scale-100', 'translate-y-0');
                }
            }

            coordsEl.innerText = `X:${Math.round(carGroup.position.x)} Z:${Math.round(carGroup.position.z)}`;
            updateLabels();

            renderer.render(scene, camera);
        }

        // Modal Handlers
        function openModal(zoneId) {
            state.modalOpen = true;
            state.speed = 0;
            modalContainer.classList.remove('hidden');
            
            document.querySelectorAll('.modal-panel').forEach(p => {
                p.classList.add('hidden', 'opacity-0', 'scale-95');
            });

            const panel = document.getElementById(`modal-${zoneId}`);
            if (panel) {
                panel.classList.remove('hidden');
                setTimeout(() => {
                    panel.classList.remove('opacity-0', 'scale-95');
                    panel.classList.add('opacity-100', 'scale-100');
                }, 10);
            }
        }

        function closeModal() {
            const panels = document.querySelectorAll('.modal-panel:not(.hidden)');
            panels.forEach(p => {
                p.classList.remove('opacity-100', 'scale-100');
                p.classList.add('opacity-0', 'scale-95');
            });

            setTimeout(() => {
                modalContainer.classList.add('hidden');
                state.modalOpen = false;
            }, 300);
        }

        document.querySelectorAll('.close-modal').forEach(btn => btn.addEventListener('click', closeModal));

        // Start
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
      

<div className="fixed inset-0 z-50 pointer-events-none flex flex-col justify-between p-6 sm:p-8">

<div className="flex justify-between items-start w-full">
<div className="flex flex-col gap-1 pointer-events-auto">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div>
<h1 className="text-xs font-semibold tracking-tight text-white uppercase">ZoltanBuilds [Site_Viewer]</h1>
</div>
<div className="text-[10px] text-zinc-500 tracking-wide font-mono" id="coords">LOC: 0, 0</div>
</div>

<div className="bg-zinc-900/90 backdrop-blur border border-white/5 rounded-lg p-3 max-w-[200px] text-right pointer-events-auto hidden md:block shadow-lg">
<p className="text-[10px] uppercase text-zinc-500 tracking-widest mb-2 font-medium">Nav Control</p>
<div className="flex justify-end gap-1 mb-1">
<div className="w-7 h-7 rounded bg-zinc-800 border border-white/5 flex items-center justify-center text-[10px] font-bold text-zinc-300 key-cap" id="key-w">W</div>
</div>
<div className="flex justify-end gap-1">
<div className="w-7 h-7 rounded bg-zinc-800 border border-white/5 flex items-center justify-center text-[10px] font-bold text-zinc-300 key-cap" id="key-a">A</div>
<div className="w-7 h-7 rounded bg-zinc-800 border border-white/5 flex items-center justify-center text-[10px] font-bold text-zinc-300 key-cap" id="key-s">S</div>
<div className="w-7 h-7 rounded bg-zinc-800 border border-white/5 flex items-center justify-center text-[10px] font-bold text-zinc-300 key-cap" id="key-d">D</div>
</div>
</div>
</div>

<div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 transform scale-90 pointer-events-none flex flex-col items-center" id="proximity-alert">
<div className="bg-white text-black px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
<iconify-icon className="animate-bounce" icon="solar:arrow-down-linear" width="14"></iconify-icon>
                Press ENTER to View
            </div>
</div>

<div className="md:hidden flex justify-between items-end w-full pb-4 pointer-events-auto">
<div className="flex gap-3">
<button className="w-16 h-16 rounded-full bg-zinc-900/80 border border-white/10 active:bg-white/10 backdrop-blur flex items-center justify-center" id="btn-left">
<iconify-icon className="text-white" icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="w-16 h-16 rounded-full bg-zinc-900/80 border border-white/10 active:bg-white/10 backdrop-blur flex items-center justify-center" id="btn-right">
<iconify-icon className="text-white" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-3">
<button className="w-16 h-16 rounded-full bg-zinc-900/80 border border-white/10 active:bg-white/10 backdrop-blur flex items-center justify-center" id="btn-gas">
<iconify-icon className="text-white" icon="solar:arrow-up-linear" width="24"></iconify-icon>
</button>
<button className="w-16 h-16 rounded-full bg-zinc-900/80 border border-white/10 active:bg-white/10 backdrop-blur flex items-center justify-center" id="btn-brake">
<iconify-icon className="text-white" icon="solar:arrow-down-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="relative z-0" id="canvas-container"></div>

<div className="absolute inset-0 pointer-events-none overflow-hidden z-10" id="labels-container">
<div className="world-label flex flex-col items-center gap-3 opacity-0" id="label-about">
<div className="relative group">
<div className="absolute -inset-2 bg-amber-500/30 rounded-full blur-md animate-pulse"></div>
<div className="w-12 h-12 bg-zinc-900 border border-amber-500/50 rounded-full flex items-center justify-center relative z-10">
<iconify-icon className="text-amber-400" icon="solar:info-circle-linear" width="20"></iconify-icon>
</div>
</div>
<div className="text-center">
<div className="bg-zinc-900/80 backdrop-blur px-2 py-1 rounded border border-white/10">
<div className="text-[10px] font-bold text-white tracking-widest uppercase">About Us</div>
</div>
<div className="w-0.5 h-8 bg-gradient-to-b from-amber-500 to-transparent mx-auto mt-1"></div>
</div>
</div>
<div className="world-label flex flex-col items-center gap-3 opacity-0" id="label-services">
<div className="relative group">
<div className="absolute -inset-2 bg-blue-500/30 rounded-full blur-md animate-pulse"></div>
<div className="w-12 h-12 bg-zinc-900 border border-blue-500/50 rounded-full flex items-center justify-center relative z-10">
<iconify-icon className="text-blue-400" icon="solar:hammer-linear" width="20"></iconify-icon>
</div>
</div>
<div className="text-center">
<div className="bg-zinc-900/80 backdrop-blur px-2 py-1 rounded border border-white/10">
<div className="text-[10px] font-bold text-white tracking-widest uppercase">Services</div>
</div>
<div className="w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent mx-auto mt-1"></div>
</div>
</div>
<div className="world-label flex flex-col items-center gap-3 opacity-0" id="label-projects">
<div className="relative group">
<div className="absolute -inset-2 bg-emerald-500/30 rounded-full blur-md animate-pulse"></div>
<div className="w-12 h-12 bg-zinc-900 border border-emerald-500/50 rounded-full flex items-center justify-center relative z-10">
<iconify-icon className="text-emerald-400" icon="solar:buildings-2-linear" width="20"></iconify-icon>
</div>
</div>
<div className="text-center">
<div className="bg-zinc-900/80 backdrop-blur px-2 py-1 rounded border border-white/10">
<div className="text-[10px] font-bold text-white tracking-widest uppercase">Our Work</div>
</div>
<div className="w-0.5 h-8 bg-gradient-to-b from-emerald-500 to-transparent mx-auto mt-1"></div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md hidden flex items-center justify-center p-4" id="modal-container">

<div className="modal-panel w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-xl shadow-2xl overflow-hidden hidden transform scale-95 opacity-0" id="modal-about">
<div className="h-1 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500"></div>
<div className="p-8">
<div className="flex items-start justify-between mb-6">
<div>
<h2 className="text-xl font-semibold text-white tracking-tight">ZoltanBuilds</h2>
<p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">General Contracting</p>
</div>
<button className="close-modal text-zinc-500 hover:text-white transition-colors">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
<p>We provide full-service general contracting with a focus on quality craftsmanship and structural integrity. From luxury bathrooms to custom outdoor structures, we build to last.</p>
<p className="text-white font-medium">Serving: Kitchener-Waterloo, Guelph, GTA, Hamilton, and Oakville.</p>
</div>
<div className="space-y-3">
<div className="bg-zinc-900 p-3 rounded border border-white/5 flex items-center gap-3">
<iconify-icon className="text-amber-400" icon="solar:map-point-linear" width="16"></iconify-icon>
<span className="text-xs text-zinc-300">Headquarters: Ontario, CA</span>
</div>
<div className="bg-zinc-900 p-3 rounded border border-white/5 flex items-center gap-3">
<iconify-icon className="text-amber-400" icon="solar:letter-linear" width="16"></iconify-icon>
<span className="text-xs text-zinc-300">contact@zoltanbuilds.com</span>
</div>
<div className="bg-zinc-900 p-3 rounded border border-white/5 flex items-center gap-3">
<iconify-icon className="text-amber-400" icon="solar:phone-linear" width="16"></iconify-icon>
<span className="text-xs text-zinc-300">(555) 123-4567</span>
</div>
</div>
</div>
</div>
</div>

<div className="modal-panel w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-xl shadow-2xl overflow-hidden hidden transform scale-95 opacity-0" id="modal-services">
<div className="h-1 w-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
<div className="p-8">
<div className="flex items-start justify-between mb-8">
<div>
<h2 className="text-xl font-semibold text-white tracking-tight">Services</h2>
<p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Expertise</p>
</div>
<button className="close-modal text-zinc-500 hover:text-white transition-colors">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="space-y-8">
<div className="relative pl-6 border-l border-zinc-800">
<div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-zinc-950"></div>
<h3 className="text-sm font-semibold text-white">Renovations</h3>
<p className="text-[10px] text-blue-400 mb-1 uppercase tracking-wider font-mono">Interior</p>
<p className="text-xs text-zinc-400 mt-2">Specializing in Basement finishing, Bathroom modernization, and full Kitchen remodels.</p>
</div>
<div className="relative pl-6 border-l border-zinc-800">
<div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-zinc-700 ring-4 ring-zinc-950"></div>
<h3 className="text-sm font-semibold text-white">Outdoor Builds</h3>
<p className="text-[10px] text-zinc-500 mb-1 uppercase tracking-wider font-mono">Exterior</p>
<p className="text-xs text-zinc-400 mt-2">Custom Deck & Pergola construction designed for Canadian weather.</p>
</div>
<div className="relative pl-6 border-l border-zinc-800">
<div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-zinc-700 ring-4 ring-zinc-950"></div>
<h3 className="text-sm font-semibold text-white">General Contracting</h3>
<p className="text-[10px] text-zinc-500 mb-1 uppercase tracking-wider font-mono">Management</p>
<p className="text-xs text-zinc-400 mt-2">End-to-end project management for residential and commercial sites.</p>
</div>
</div>
</div>
</div>

<div className="modal-panel w-full max-w-3xl bg-zinc-950 border border-white/10 rounded-xl shadow-2xl overflow-hidden hidden transform scale-95 opacity-0" id="modal-projects">
<div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-500"></div>
<div className="p-8">
<div className="flex items-start justify-between mb-8">
<div>
<h2 className="text-xl font-semibold text-white tracking-tight">Recent Builds</h2>
<p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Gallery</p>
</div>
<button className="close-modal text-zinc-500 hover:text-white transition-colors">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div className="group relative aspect-[4/3] bg-zinc-900 rounded border border-white/5 overflow-hidden cursor-pointer hover:border-emerald-500/50 transition-colors">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent flex flex-col justify-end p-5 z-10">
<h4 className="text-sm font-medium text-white">Oakville Kitchen</h4>
<p className="text-xs text-zinc-500">Full Remodel • Quartz & Oak</p>
</div>
<div className="absolute inset-0 bg-zinc-800 group-hover:scale-105 transition-transform duration-700"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-10">
<iconify-icon icon="solar:chef-hat-linear" width="64"></iconify-icon>
</div>
</div>
<div className="group relative aspect-[4/3] bg-zinc-900 rounded border border-white/5 overflow-hidden cursor-pointer hover:border-emerald-500/50 transition-colors">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent flex flex-col justify-end p-5 z-10">
<h4 className="text-sm font-medium text-white">Guelph Cedar Deck</h4>
<p className="text-xs text-zinc-500">Outdoor Living • Pergola</p>
</div>
<div className="absolute inset-0 bg-zinc-800 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-10">
<iconify-icon icon="solar:sun-fog-linear" width="64"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
