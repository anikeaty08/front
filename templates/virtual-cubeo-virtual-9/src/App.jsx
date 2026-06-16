import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



{
"imports": {
"three": "https://unpkg.com/three@0.160.0/build/three.module.js",
"three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/",
"gsap": "https://unpkg.com/gsap@3.12.5/index.js",
"gsap/ScrollTrigger": "https://unpkg.com/gsap@3.12.5/ScrollTrigger.js"
}
}



        import * as THREE from 'three';
        import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
        import gsap from 'gsap';
        import { ScrollTrigger } from 'gsap/ScrollTrigger';

        gsap.registerPlugin(ScrollTrigger);

        // --- SCROLL ANIMATIONS ---
        const revealElements = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => observer.observe(el));

        // --- GAME CONFIGURATION ---
        const canvas = document.querySelector('#webgl');
        // Parent container determines size
        const container = canvas.parentElement; 
        
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x0f0f11, 0.04);
        scene.background = new THREE.Color(0x0f0f11);

        const sizes = { width: container.clientWidth, height: container.clientHeight };
        
        const camera = new THREE.PerspectiveCamera(40, sizes.width / sizes.height, 0.1, 100);
        camera.position.set(12, 12, 12);
        
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        const controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.maxPolarAngle = Math.PI / 2 - 0.1;
        controls.enablePan = false;
        controls.minDistance = 5;
        controls.maxDistance = 20;
        controls.enabled = false; // Disabled until game starts

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        scene.add(ambientLight);
        const sunLight = new THREE.DirectionalLight(0xffffff, 1.2);
        sunLight.position.set(8, 12, 5);
        sunLight.castShadow = true;
        sunLight.shadow.mapSize.set(1024, 1024);
        scene.add(sunLight);

        // --- MATERIALS & OBJECTS ---
        const materials = {
            pet: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 }),
            eyes: new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0 }),
            ground: new THREE.MeshStandardMaterial({ color: 0x151516, roughness: 0.8 }),
            accent: new THREE.MeshStandardMaterial({ color: 0x6366f1, roughness: 0.2, emissive: 0x4338ca, emissiveIntensity: 0.2 }),
            toy: new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.1 }),
        };

        // Floor
        const floor = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), materials.ground);
        floor.rotation.x = -Math.PI / 2;
        floor.receiveShadow = true;
        scene.add(floor);

        // Grid helper for tech feel
        const grid = new THREE.GridHelper(40, 40, 0x333333, 0x1a1a1a);
        scene.add(grid);

        // Game State
        let gameActive = false;
        const gameState = {
            hunger: 0, happiness: 100, energy: 100,
            isMoving: false, targetPos: new THREE.Vector3(),
            achievements: new Set()
        };

        // --- PET & INTERACTABLES ---
        const petGroup = new THREE.Group();
        const body = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), materials.pet);
        body.position.y = 0.5;
        body.castShadow = true;
        petGroup.add(body);
        
        // Face
        const eyeGeo = new THREE.PlaneGeometry(0.15, 0.15);
        const eyeL = new THREE.Mesh(eyeGeo, materials.eyes);
        eyeL.position.set(-0.2, 0.6, 0.51);
        const eyeR = new THREE.Mesh(eyeGeo, materials.eyes);
        eyeR.position.set(0.2, 0.6, 0.51);
        petGroup.add(eyeL, eyeR);

        // Cute glowing antenna
        const antStem = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.4), materials.pet);
        antStem.position.set(0, 1.2, 0);
        const antBulb = new THREE.Mesh(new THREE.SphereGeometry(0.1), materials.accent);
        antBulb.position.set(0, 1.4, 0);
        petGroup.add(antStem, antBulb);

        scene.add(petGroup);

        // Objects
        const interactables = [];
        
        function createProp(type, x, z, color, label) {
            const group = new THREE.Group();
            let mesh;
            if(type === 'bowl') mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.4, 0.3, 16), new THREE.MeshStandardMaterial({color: color}));
            if(type === 'ball') mesh = new THREE.Mesh(new THREE.SphereGeometry(0.3), new THREE.MeshStandardMaterial({color: color}));
            if(type === 'bed') mesh = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.2, 1.5), new THREE.MeshStandardMaterial({color: color}));
            
            mesh.castShadow = true;
            mesh.position.y = type === 'ball' ? 0.3 : 0.15;
            group.add(mesh);
            group.position.set(x, 0, z);
            group.userData = { type, label };
            scene.add(group);
            interactables.push(group);
            
            // Label
            const div = document.createElement('div');
            div.className = 'absolute text-[10px] font-bold text-white/80 bg-black/50 backdrop-blur px-2 py-0.5 rounded border border-white/10 pointer-events-none transition-opacity duration-300 opacity-0';
            div.innerText = label;
            canvas.parentElement.appendChild(div);
            group.userData.dom = div;
        }

        createProp('bowl', -3, 2, 0x10b981, 'FEED');
        createProp('ball', 3, 2, 0xf59e0b, 'PLAY');
        createProp('bed', 0, -3, 0x6366f1, 'SLEEP');

        // --- LOGIC ---
        const clock = new THREE.Clock();
        const raycaster = new THREE.Raycaster();
        const pointer = new THREE.Vector2();

        // Audio
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        function playTone(freq) {
            if(ctx.state === 'suspended') ctx.resume();
            const o = ctx.createOscillator();
            const g = ctx.createGain();
            o.connect(g); g.connect(ctx.destination);
            o.frequency.value = freq;
            g.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 0.5);
            o.start(); o.stop(ctx.currentTime + 0.5);
        }

        // Interaction
        function onPointerDown(event) {
            if(!gameActive) return;
            const rect = canvas.getBoundingClientRect();
            pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

            raycaster.setFromCamera(pointer, camera);
            const intersects = raycaster.intersectObjects([...interactables.map(g=>g.children[0]), floor]);

            if(intersects.length > 0) {
                const obj = intersects[0].object.parent;
                const point = intersects[0].point;

                gameState.targetPos.copy(point);
                gameState.isMoving = true;
                
                // Face Direction
                gsap.to(petGroup.rotation, { y: Math.atan2(point.x - petGroup.position.x, point.z - petGroup.position.z), duration: 0.4 });

                if(obj && obj.userData && obj.userData.type) {
                    setTimeout(() => interact(obj.userData.type), 1000);
                }
            }
        }

        function interact(type) {
            if(type === 'bowl') { 
                gameState.hunger = Math.max(0, gameState.hunger - 20); 
                playTone(400); playTone(600);
                animJump();
            }
            if(type === 'ball') {
                gameState.happiness = Math.min(100, gameState.happiness + 15);
                playTone(800);
                animSpin();
            }
            if(type === 'bed') {
                gameState.energy = 100;
                playTone(300);
            }
            updateUI();
        }

        function animJump() { gsap.to(petGroup.position, { y: 1.5, yoyo: true, repeat: 1, duration: 0.2 }); }
        function animSpin() { gsap.to(petGroup.rotation, { y: petGroup.rotation.y + 6.28, duration: 0.6 }); }

        function updateUI() {
            document.getElementById('hunger-bar').style.width = gameState.hunger + '%';
            document.getElementById('happiness-bar').style.width = gameState.happiness + '%';
            document.getElementById('energy-bar').style.width = gameState.energy + '%';
            document.getElementById('hunger-val').innerText = Math.round(gameState.hunger) + '%';
        }

        canvas.addEventListener('pointerdown', onPointerDown);

        // --- LOOP ---
        function tick() {
            const delta = clock.getDelta();

            if (gameActive) {
                // Movement
                if (gameState.isMoving) {
                    const dir = new THREE.Vector3().subVectors(gameState.targetPos, petGroup.position);
                    if (dir.length() > 0.1) {
                        dir.normalize();
                        petGroup.position.add(dir.multiplyScalar(4 * delta));
                        petGroup.position.y = 0.5 + Math.sin(clock.elapsedTime * 15) * 0.2;
                    } else {
                        gameState.isMoving = false;
                        petGroup.position.y = 0.5;
                    }
                } else {
                    // Idle breathing
                    petGroup.scale.setScalar(1 + Math.sin(clock.elapsedTime * 2) * 0.02);
                }
                
                // Stat decay
                if(Math.random() < 0.01) {
                    gameState.hunger = Math.min(100, gameState.hunger + 0.5);
                    gameState.energy = Math.max(0, gameState.energy - 0.2);
                    updateUI();
                }
            } else {
                // Cinematic rotation when not playing
                petGroup.rotation.y += 0.005;
                petGroup.position.y = 0.5 + Math.sin(clock.elapsedTime) * 0.1;
            }

            // Sync Labels
            interactables.forEach(g => {
                const dom = g.userData.dom;
                if(dom && gameActive) {
                    const v = g.position.clone();
                    v.y += 1;
                    v.project(camera);
                    const x = (v.x * .5 + .5) * sizes.width;
                    const y = (-(v.y * .5) + .5) * sizes.height;
                    
                    if(Math.abs(v.z) < 1) {
                        dom.style.transform = `translate(${x}px, ${y}px) translate(-50%, -100%)`;
                        dom.style.opacity = 1;
                    }
                } else if (dom) {
                    dom.style.opacity = 0;
                }
            });

            controls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(tick);
        }

        // --- INIT ---
        document.getElementById('init-game-btn').addEventListener('click', () => {
            gameActive = true;
            controls.enabled = true;
            
            // Animation into game view
            document.getElementById('game-overlay').style.opacity = 0;
            setTimeout(() => document.getElementById('game-overlay').style.display = 'none', 700);
            
            gsap.to(camera.position, { x: 8, y: 8, z: 8, duration: 1.5, ease: "power2.inOut" });
            playTone(440);
        });

        window.addEventListener('resize', () => {
            sizes.width = container.clientWidth;
            sizes.height = container.clientHeight;
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();
            renderer.setSize(sizes.width, sizes.height);
        });

        lucide.createIcons();
        tick();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-[10px] font-bold tracking-tighter shadow-lg shadow-indigo-500/20">C</div>
<span className="text-sm font-medium tracking-tight text-white/90">Cubeo</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-white/50 tracking-wide">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How it Works</a>
<a className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all" href="#play-zone">Play Now</a>
</div>
</div>
</nav>

<section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
<div className="absolute inset-0 hero-glow -z-10"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10"></div>
<div className="text-center z-10 px-6 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-medium tracking-wide text-indigo-300 mb-4 reveal">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                v1.0 Now Available
            </div>
<h1 className="text-6xl md:text-8xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 reveal" style={{transitionDelay: '100ms'}}>
                Virtual Life.<br/>Reimagined.
            </h1>
<p className="max-w-md mx-auto text-base md:text-lg text-white/40 font-light tracking-tight leading-relaxed reveal" style={{transitionDelay: '200ms'}}>
                Experience the next generation of digital companionship. Minimalist design, procedural behavior, and infinite interactions right in your browser.
            </p>
<div className="flex items-center justify-center gap-4 pt-4 reveal" style={{transitionDelay: '300ms'}}>
<a className="group relative px-8 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-100 transition-all flex items-center gap-2" href="#play-zone">
                    Start Experience
                    <i className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" data-lucide="arrow-down"></i>
</a>
<a className="px-8 py-3 text-sm font-medium text-white/60 hover:text-white transition-colors" href="#features">
                    Learn more
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce">
<span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto" id="features">
<div className="mb-20">
<h2 className="text-3xl font-medium tracking-tight mb-4">Engineered for connection</h2>
<p className="text-white/40 max-w-xl font-light">Built with advanced WebGL technology to deliver a seamless, responsive 3D environment.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass p-8 rounded-2xl group hover:border-white/20 transition-colors reveal">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-indigo-400">
<i className="w-5 h-5" data-lucide="cpu"></i>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Procedural AI</h3>
<p className="text-sm text-white/40 leading-relaxed">Every interaction is unique. Your Cubeo reacts to its environment, creating unpredictable and lifelike behaviors.</p>
</div>

<div className="glass p-8 rounded-2xl group hover:border-white/20 transition-colors reveal" style={{transitionDelay: '100ms'}}>
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-emerald-400">
<i className="w-5 h-5" data-lucide="activity"></i>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Live Statistics</h3>
<p className="text-sm text-white/40 leading-relaxed">Monitor health, happiness, and energy levels in real-time. Balance your care to unlock special animations.</p>
</div>

<div className="glass p-8 rounded-2xl group hover:border-white/20 transition-colors reveal" style={{transitionDelay: '200ms'}}>
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-amber-400">
<i className="w-5 h-5" data-lucide="moon"></i>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Day &amp; Night Cycle</h3>
<p className="text-sm text-white/40 leading-relaxed">The environment adapts to real-world concepts. Watch the lighting shift as your digital friend gets ready for bed.</p>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-white/[0.02]" id="how-it-works">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="md:w-1/3 reveal">
<h2 className="text-2xl font-medium tracking-tight mb-4">Simple Interaction</h2>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-[10px] text-white/60">1</span>
<p className="text-sm text-white/60"><strong className="text-white block mb-1">Feed</strong> Click the bowl to replenish hunger stats.</p>
</li>
<li className="flex items-start gap-3">
<span className="flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-[10px] text-white/60">2</span>
<p className="text-sm text-white/60"><strong className="text-white block mb-1">Play</strong> Interact with the ball to boost happiness.</p>
</li>
<li className="flex items-start gap-3">
<span className="flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-[10px] text-white/60">3</span>
<p className="text-sm text-white/60"><strong className="text-white block mb-1">Rest</strong> Use the bed to restore energy levels.</p>
</li>
</ul>
</div>
<div className="md:w-2/3 w-full h-64 relative rounded-xl overflow-hidden border border-white/10 reveal">

<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-black"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="grid grid-cols-2 gap-4 opacity-50">
<div className="w-20 h-20 rounded bg-white/5 animate-pulse"></div>
<div className="w-20 h-20 rounded bg-white/10 animate-pulse delay-75"></div>
<div className="w-20 h-20 rounded bg-white/10 animate-pulse delay-150"></div>
<div className="w-20 h-20 rounded bg-white/5 animate-pulse delay-300"></div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen flex flex-col items-center justify-center py-20 px-4 md:px-10 relative" id="play-zone">
<div className="w-full max-w-6xl aspect-[16/9] md:aspect-[2/1] bg-[#0f0f11] relative rounded-2xl shadow-2xl overflow-hidden border border-white/10 ring-1 ring-white/5">

<div className="absolute top-6 left-6 right-6 md:left-8 md:w-72 z-20 pointer-events-none select-none">
<div className="glass rounded-xl p-4 text-white/90 shadow-2xl">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold tracking-tighter">VP</div>
<div>
<h1 className="text-sm font-semibold tracking-tight text-white">Cubeo</h1>
<p className="text-[10px] text-white/50 font-medium tracking-wide uppercase" id="status-text">Active</p>
</div>
</div>
<div className="flex gap-1">
<button className="pointer-events-auto p-1.5 rounded-md hover:bg-white/10 transition-colors text-white/60" id="mute-btn">
<i className="w-3.5 h-3.5" data-lucide="volume-2"></i>
</button>
<button className="pointer-events-auto p-1.5 rounded-md hover:bg-white/10 transition-colors text-white/60" id="reset-btn">
<i className="w-3.5 h-3.5" data-lucide="rotate-ccw"></i>
</button>
</div>
</div>
<div className="space-y-3">

<div className="group">
<div className="flex justify-between text-[10px] font-medium mb-1 text-white/40 uppercase tracking-wider">
<span>Hunger</span> <span id="hunger-val">0%</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full w-0" id="hunger-bar"></div>
</div>
</div>
<div className="group">
<div className="flex justify-between text-[10px] font-medium mb-1 text-white/40 uppercase tracking-wider">
<span>Happiness</span> <span id="happiness-val">100%</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 rounded-full w-full" id="happiness-bar"></div>
</div>
</div>
<div className="group">
<div className="flex justify-between text-[10px] font-medium mb-1 text-white/40 uppercase tracking-wider">
<span>Energy</span> <span id="energy-val">100%</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-amber-400 rounded-full w-full" id="energy-bar"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 z-30 bg-black/80 backdrop-blur-sm flex items-center justify-center transition-all duration-700" id="game-overlay">
<div className="text-center">
<button className="group relative px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:scale-105 transition-all active:scale-95 tracking-tight shadow-[0_0_20px_rgba(255,255,255,0.3)]" id="init-game-btn">
<span>Initialize Simulation</span>
</button>
<p className="mt-4 text-xs text-white/30 font-mono">CLICK TO START</p>
</div>
</div>

<div className="absolute bottom-6 right-6 z-30 flex flex-col items-end gap-2 pointer-events-none" id="achievements-container"></div>

<canvas className="block w-full h-full outline-none cursor-pointer" id="webgl"></canvas>
</div>
<div className="mt-6 flex gap-8 text-[10px] text-white/30 uppercase tracking-widest font-medium">
<span>Left Click • Move</span>
<span>Interact • Objects</span>
<span>Scroll • Zoom</span>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020202] py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[10px] text-white">C</div>
<span className="text-sm font-medium">Cubeo Inc.</span>
</div>
<p className="text-xs text-white/40 max-w-xs">Pioneering the future of digital entities through procedural generation and reactive AI systems.</p>
</div>
<div className="flex gap-8 text-xs text-white/60">
<a className="hover:text-white transition-colors" href="#">Documentation</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] text-white/20">
<p>© 2024 Cubeo Virtual Pet. All rights reserved.</p>
<p>Designed with Linear Style.</p>
</div>
</div>
</footer>



    </>
  );
}
