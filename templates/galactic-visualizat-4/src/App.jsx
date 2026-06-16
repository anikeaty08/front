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

        const parameters = {
            count: 50000,
            size: 0.015,
            radius: 5,
            branches: 3,
            spin: 1,
            randomness: 0.2,
            randomnessPower: 3,
            insideColor: '#ff6030',
            outsideColor: '#1b3984',
            autoRotate: true
        };

        const canvas = document.querySelector('canvas#webgl');
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x000000, 0.002); // Reduced fog density to see further

        const sizes = { width: window.innerWidth, height: window.innerHeight };
        // Increased Far Plane so we can see distant galaxy while zooming out
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 5000);
        camera.position.set(3, 3, 3);
        scene.add(camera);

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
        });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 1);

        const controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enableZoom = true;
        controls.autoRotate = parameters.autoRotate;
        controls.autoRotateSpeed = 0.5;
        // Allow zooming out far enough to see both galaxies
        controls.maxDistance = 2000;

        // --- Common Texture ---
        const getTexture = () => {
            const canvas = document.createElement('canvas');
            canvas.width = 32;
            canvas.height = 32;
            const ctx = canvas.getContext('2d');
            const grad = ctx.createRadialGradient(16,16,0,16,16,16);
            grad.addColorStop(0, 'rgba(255,255,255,1)');
            grad.addColorStop(0.2, 'rgba(255,255,255,0.8)');
            grad.addColorStop(0.5, 'rgba(255,255,255,0.2)');
            grad.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = grad;
            ctx.fillRect(0,0,32,32);
            const texture = new THREE.Texture(canvas);
            texture.needsUpdate = true;
            return texture;
        };
        const particleTexture = getTexture();

        // --- Main Galaxy Generator ---
        let geometry = null;
        let material = null;
        let points = null;

        const generateGalaxy = () => {
            if (points !== null) {
                geometry.dispose();
                material.dispose();
                scene.remove(points);
            }

            geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(parameters.count * 3);
            const colors = new Float32Array(parameters.count * 3);
            
            const colorInside = new THREE.Color(parameters.insideColor);
            const colorOutside = new THREE.Color(parameters.outsideColor);

            for (let i = 0; i < parameters.count; i++) {
                const i3 = i * 3;
                const radius = Math.random() * parameters.radius;
                const spinAngle = radius * parameters.spin;
                const branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2;
                
                const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
                const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
                const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;

                positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
                positions[i3 + 1] = randomY; 
                positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

                const mixedColor = colorInside.clone();
                mixedColor.lerp(colorOutside, radius / parameters.radius);

                colors[i3] = mixedColor.r;
                colors[i3 + 1] = mixedColor.g;
                colors[i3 + 2] = mixedColor.b;
            }

            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

            material = new THREE.PointsMaterial({
                size: parameters.size,
                sizeAttenuation: true,
                depthWrite: false,
                blending: THREE.AdditiveBlending,
                vertexColors: true,
                map: particleTexture,
                transparent: true,
                opacity: 0.8
            });

            points = new THREE.Points(geometry, material);
            scene.add(points);
        };

        generateGalaxy();

        // --- Distant Massive Galaxy ---
        const distantGalaxyGroup = new THREE.Group();
        scene.add(distantGalaxyGroup);
        const distantGalaxyPos = new THREE.Vector3(-150, -40, -200);

        const createDistantGalaxy = () => {
            const bgParams = {
                count: 100000,
                size: 0.2, 
                radius: 60,
                branches: 5,
                spin: 2,
                randomness: 0.4,
                randomnessPower: 3,
                insideColor: '#a855f7', 
                outsideColor: '#06b6d4', 
            };

            const bgGeo = new THREE.BufferGeometry();
            const bgPos = new Float32Array(bgParams.count * 3);
            const bgCol = new Float32Array(bgParams.count * 3);
            const bgIn = new THREE.Color(bgParams.insideColor);
            const bgOut = new THREE.Color(bgParams.outsideColor);

            for (let i = 0; i < bgParams.count; i++) {
                const i3 = i * 3;
                const r = Math.random() * bgParams.radius;
                const s = r * bgParams.spin;
                const b = (i % bgParams.branches) / bgParams.branches * Math.PI * 2;
                
                const rndX = Math.pow(Math.random(), bgParams.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * bgParams.randomness * r;
                const rndY = Math.pow(Math.random(), bgParams.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * bgParams.randomness * r;
                const rndZ = Math.pow(Math.random(), bgParams.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * bgParams.randomness * r;

                bgPos[i3] = Math.cos(b + s) * r + rndX;
                bgPos[i3+1] = rndY;
                bgPos[i3+2] = Math.sin(b + s) * r + rndZ;

                const mixed = bgIn.clone();
                mixed.lerp(bgOut, r / bgParams.radius);

                bgCol[i3] = mixed.r;
                bgCol[i3+1] = mixed.g;
                bgCol[i3+2] = mixed.b;
            }

            bgGeo.setAttribute('position', new THREE.BufferAttribute(bgPos, 3));
            bgGeo.setAttribute('color', new THREE.BufferAttribute(bgCol, 3));

            const bgMat = new THREE.PointsMaterial({
                size: bgParams.size,
                sizeAttenuation: true,
                depthWrite: false,
                blending: THREE.AdditiveBlending,
                vertexColors: true,
                map: particleTexture,
                transparent: true,
                opacity: 0.7
            });

            const galaxyMesh = new THREE.Points(bgGeo, bgMat);
            
            galaxyMesh.position.copy(distantGalaxyPos);
            galaxyMesh.rotation.x = Math.PI / 6;
            galaxyMesh.rotation.z = Math.PI / 6;
            
            distantGalaxyGroup.add(galaxyMesh);
        };
        
        createDistantGalaxy();


        // --- Starfield Background ---
        const bgGeometry = new THREE.BufferGeometry();
        const bgCount = 5000;
        const bgPosArray = new Float32Array(bgCount * 3);
        for(let i = 0; i < bgCount * 3; i++) {
            bgPosArray[i] = (Math.random() - 0.5) * 1000; 
        }
        bgGeometry.setAttribute('position', new THREE.BufferAttribute(bgPosArray, 3));
        const bgMaterial = new THREE.PointsMaterial({
            size: 0.15,
            sizeAttenuation: true,
            depthWrite: false,
            color: 0x888888
        });
        const bgStars = new THREE.Points(bgGeometry, bgMaterial);
        scene.add(bgStars);


        // --- UI Binding ---
        const bindInput = (id, paramKey, isNumber = true, isColor = false) => {
            const el = document.getElementById(id);
            const valEl = document.getElementById(id + 'Val');
            if(el) {
                el.addEventListener('input', (e) => {
                    let val = e.target.value;
                    if(isNumber) val = parseFloat(val);
                    parameters[paramKey] = val;
                    if(valEl) valEl.innerText = val;
                    generateGalaxy();
                });
            }
        };

        bindInput('count', 'count');
        bindInput('size', 'size');
        bindInput('radius', 'radius');
        bindInput('branches', 'branches');
        bindInput('spin', 'spin');
        bindInput('randomness', 'randomness');
        bindInput('power', 'randomnessPower');
        bindInput('insideColor', 'insideColor', false, true);
        bindInput('outsideColor', 'outsideColor', false, true);

        document.getElementById('autoRotate').addEventListener('change', (e) => {
            parameters.autoRotate = e.target.checked;
            controls.autoRotate = parameters.autoRotate;
        });

        // --- Navigation Logic ---
        let currentSector = 'home'; // 'home' or 'distant'
        let isTransitioning = false;
        let transitionProgress = 0;
        const transitionDuration = 2.0; // Seconds

        // Transition State Storage
        const transitionStartPos = new THREE.Vector3();
        const transitionEndPos = new THREE.Vector3();
        const transitionStartTarget = new THREE.Vector3();
        const transitionEndTarget = new THREE.Vector3();

        // Preset Locations
        const homeTarget = new THREE.Vector3(0, 0, 0);
        const homeCameraOffset = new THREE.Vector3(8, 6, 8); // Offset relative to target

        const distantTarget = distantGalaxyPos.clone();
        const distantCameraOffset = new THREE.Vector3(30, 20, 30); // Offset relative to target
        
        const warpBtn = document.getElementById('warpBtn');
        const warpText = document.getElementById('warpText');
        const warpIcon = document.getElementById('warpIcon');
        const systemStatus = document.getElementById('systemStatus');
        
        warpBtn.addEventListener('click', () => {
            if(isTransitioning) return; // Prevent double clicking during flight

            isTransitioning = true;
            transitionProgress = 0;
            
            // Capture Start State
            transitionStartPos.copy(camera.position);
            transitionStartTarget.copy(controls.target);

            // Determine End State
            if (currentSector === 'home') {
                // Go to Distant
                currentSector = 'distant';
                transitionEndTarget.copy(distantTarget);
                transitionEndPos.copy(distantTarget).add(distantCameraOffset);
                
                // UI Update
                warpText.innerText = 'Return Home';
                warpIcon.setAttribute('icon', 'lucide:home');
                systemStatus.innerText = 'Deep Space Network';
            } else {
                // Go Home
                currentSector = 'home';
                transitionEndTarget.copy(homeTarget);
                transitionEndPos.copy(homeTarget).add(homeCameraOffset);
                
                // UI Update
                warpText.innerText = 'Warp to Sector 2';
                warpIcon.setAttribute('icon', 'lucide:rocket');
                systemStatus.innerText = 'Active System';
            }

            // Disable controls during flight
            controls.enabled = false;
        });

        document.getElementById('resetBtn').addEventListener('click', () => {
            // Reset Params
            parameters.count = 50000;
            parameters.size = 0.015;
            parameters.radius = 5;
            parameters.branches = 3;
            parameters.spin = 1;
            parameters.randomness = 0.2;
            parameters.randomnessPower = 3;
            parameters.insideColor = '#ff6030';
            parameters.outsideColor = '#1b3984';
            parameters.autoRotate = true;

            const inputs = {
                'count': 50000, 'size': 0.015, 'radius': 5, 'branches': 3,
                'spin': 1, 'randomness': 0.2, 'power': 3
            };
            Object.keys(inputs).forEach(key => {
                document.getElementById(key).value = inputs[key];
                document.getElementById(key+'Val').innerText = inputs[key];
            });
            document.getElementById('insideColor').value = '#ff6030';
            document.getElementById('outsideColor').value = '#1b3984';
            document.getElementById('autoRotate').checked = true;
            controls.autoRotate = true;
            generateGalaxy();
            
            // Reset Camera
            currentSector = 'home';
            camera.position.set(3, 3, 3);
            controls.target.set(0, 0, 0);
            controls.update();
            
            // Reset UI
            warpText.innerText = 'Warp to Sector 2';
            warpIcon.setAttribute('icon', 'lucide:rocket');
            systemStatus.innerText = 'Active System';
        });

        window.addEventListener('resize', () => {
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();
            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });

        const clock = new THREE.Clock();
        const cameraInfo = document.getElementById('cameraInfo');

        // Smoothstep function for nicer ease-in-out
        function smoothstep(min, max, value) {
            var x = Math.max(0, Math.min(1, (value-min)/(max-min)));
            return x * x * (3 - 2 * x);
        }

        const tick = () => {
            const delta = clock.getDelta();
            const elapsedTime = clock.getElapsedTime();
            
            if (isTransitioning) {
                transitionProgress += delta / transitionDuration;
                
                // Ease function
                const t = smoothstep(0, 1, transitionProgress);

                // Interpolate Position
                camera.position.lerpVectors(transitionStartPos, transitionEndPos, t);
                
                // Interpolate Target (Focus point)
                const currentTarget = new THREE.Vector3().lerpVectors(transitionStartTarget, transitionEndTarget, t);
                controls.target.copy(currentTarget);

                if (transitionProgress >= 1) {
                    isTransitioning = false;
                    controls.enabled = true; // Re-enable user control
                }
            } else {
                controls.update();
            }
            
            // Rotate the distant galaxy slowly
            if(distantGalaxyGroup.children.length > 0) {
                distantGalaxyGroup.children[0].rotation.y = elapsedTime * 0.05;
            }

            if(cameraInfo) {
                const {x, y, z} = camera.position;
                cameraInfo.innerText = `POS: ${x.toFixed(0)}, ${y.toFixed(0)}, ${z.toFixed(0)}`;
            }

            renderer.render(scene, camera);
            window.requestAnimationFrame(tick);
        };

        tick();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<canvas className="fixed inset-0 z-0 bg-black" id="webgl"></canvas>

<div className="fixed inset-0 pointer-events-none z-10 flex flex-col justify-between p-6">
<header className="flex items-start justify-between">
<div className="flex flex-col gap-1 pointer-events-auto">
<div className="flex items-center gap-2 text-white">
<iconify-icon icon="lucide:orbit" strokeWidth="1.5" width="20"></iconify-icon>
<h1 className="text-lg font-medium tracking-tight">Galactic Renderer</h1>
</div>
<p className="text-xs text-neutral-500 font-light tracking-wide">Multi-Galaxy Simulation</p>
</div>
<aside className="w-80 bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden pointer-events-auto transition-all duration-300 group flex flex-col max-h-[90vh]">
<div className="px-5 py-4 border-b border-white/5 flex items-center justify-between shrink-0">
<span className="text-xs font-medium text-neutral-300 uppercase tracking-wider">Parameters</span>
<button className="text-xs text-neutral-500 hover:text-white transition-colors flex items-center gap-1" id="resetBtn">
<iconify-icon icon="lucide:rotate-ccw" width="12"></iconify-icon> Reset
                    </button>
</div>
<div className="p-5 overflow-y-auto flex flex-col gap-6 custom-scrollbar">

<div className="space-y-4">
<div className="flex items-center gap-2 text-neutral-200 text-xs font-medium">
<iconify-icon icon="lucide:boxes" width="14"></iconify-icon> Structure
                        </div>
<div className="space-y-2">
<div className="flex justify-between text-xs">
<span>Stars</span>
<span className="text-white font-mono" id="countVal">50000</span>
</div>
<input id="count" max="100000" min="1000" step="1000" type="range" value="50000"/>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs">
<span>Radius</span>
<span className="text-white font-mono" id="radiusVal">5</span>
</div>
<input id="radius" max="20" min="1" step="0.1" type="range" value="5"/>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs">
<span>Arms</span>
<span className="text-white font-mono" id="branchesVal">3</span>
</div>
<input id="branches" max="10" min="2" step="1" type="range" value="3"/>
</div>
</div>
<div className="h-px bg-white/5 w-full"></div>

<div className="space-y-4">
<div className="flex items-center gap-2 text-neutral-200 text-xs font-medium">
<iconify-icon icon="lucide:wind" width="14"></iconify-icon> Dynamics
                        </div>
<div className="space-y-2">
<div className="flex justify-between text-xs">
<span>Spin Curvature</span>
<span className="text-white font-mono" id="spinVal">1</span>
</div>
<input id="spin" max="5" min="-5" step="0.1" type="range" value="1"/>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs">
<span>Scattering</span>
<span className="text-white font-mono" id="randomnessVal">0.2</span>
</div>
<input id="randomness" max="2" min="0" step="0.01" type="range" value="0.2"/>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs">
<span>Concentration</span>
<span className="text-white font-mono" id="powerVal">3</span>
</div>
<input id="power" max="10" min="1" step="0.1" type="range" value="3"/>
</div>
</div>
<div className="h-px bg-white/5 w-full"></div>

<div className="space-y-4">
<div className="flex items-center gap-2 text-neutral-200 text-xs font-medium">
<iconify-icon icon="lucide:palette" width="14"></iconify-icon> Appearance
                        </div>
<div className="space-y-2">
<div className="flex justify-between text-xs">
<span>Star Size</span>
<span className="text-white font-mono" id="sizeVal">0.015</span>
</div>
<input id="size" max="0.1" min="0.001" step="0.001" type="range" value="0.015"/>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="space-y-1">
<label className="text-xs block mb-1">Inner Color</label>
<div className="relative h-8 w-full rounded-md overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
<input className="absolute -top-2 -left-2 w-[150%] h-[150%] cursor-pointer p-0 border-0" id="insideColor" type="color" value="#ff6030"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs block mb-1">Outer Color</label>
<div className="relative h-8 w-full rounded-md overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
<input className="absolute -top-2 -left-2 w-[150%] h-[150%] cursor-pointer p-0 border-0" id="outsideColor" type="color" value="#1b3984"/>
</div>
</div>
</div>
</div>
<div className="h-px bg-white/5 w-full"></div>

<div className="flex items-center justify-between">
<label className="text-xs text-neutral-300 cursor-pointer select-none" htmlFor="autoRotate">Auto Rotate</label>
<input checked="" className="custom-checkbox w-4 h-4 cursor-pointer" id="autoRotate" type="checkbox"/>
</div>
<div className="h-px bg-white/5 w-full"></div>

<button className="group relative w-full py-2.5 bg-white text-black text-xs font-semibold rounded-md hover:bg-neutral-200 transition-all overflow-hidden flex items-center justify-center gap-2 active:scale-95" id="warpBtn">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>
<iconify-icon icon="lucide:rocket" id="warpIcon" width="14"></iconify-icon>
<span id="warpText">Warp to Sector 2</span>
</button>
</div>
</aside>
</header>
<footer className="flex items-end justify-between pointer-events-none">
<div className="flex items-center gap-6 text-xs font-mono text-neutral-600">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span id="systemStatus">Active System</span>
</div>
<div className="hidden sm:block" id="cameraInfo">POS: 0, 3, 0</div>
</div>
<a className="pointer-events-auto text-neutral-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:github" width="18"></iconify-icon>
</a>
</footer>
</div>


    </>
  );
}
