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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
handwriting: ['Caveat', 'cursive'],
},
colors: {
brand: {
50: '#f0fdfa',
100: '#ccfbf1',
500: '#14b8a6',
900: '#134e4a',
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        // --- 1. Utilities & Custom Cursor ---
        const cursorDot = document.getElementById('cursor-dot');
        const cursorGlow = document.getElementById('cursor-glow');
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let glowX = mouseX;
        let glowY = mouseY;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        });

        // Smooth glow follow
        function renderCursor() {
            glowX += (mouseX - glowX) * 0.15;
            glowY += (mouseY - glowY) * 0.15;
            cursorGlow.style.left = glowX + 'px';
            cursorGlow.style.top = glowY + 'px';
            requestAnimationFrame(renderCursor);
        }
        renderCursor();

        // --- 2. Three.js Setup ---
        const container = document.getElementById('webgl-container');
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x050505, 0.002);

        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 5, 40);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        scene.add(ambientLight);
        
        const coreLight = new THREE.PointLight(0xffffff, 2, 100);
        scene.add(coreLight);

        // Universe Particles (Stars)
        const starsGeometry = new THREE.BufferGeometry();
        const starsCount = 2000;
        const posArray = new Float32Array(starsCount * 3);
        const colorArray = new Float32Array(starsCount * 3);
        
        for(let i = 0; i < starsCount * 3; i+=3) {
            // Spherical distribution
            const radius = 10 + Math.random() * 100;
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);
            
            posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
            posArray[i+1] = radius * Math.sin(phi) * Math.sin(theta);
            posArray[i+2] = radius * Math.cos(phi);

            // Slight color variations
            const c = new THREE.Color().setHSL(Math.random() * 0.1 + 0.6, 0.5, Math.random() * 0.5 + 0.5);
            colorArray[i] = c.r;
            colorArray[i+1] = c.g;
            colorArray[i+2] = c.b;
        }
        
        starsGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        starsGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
        
        const starsMaterial = new THREE.PointsMaterial({
            size: 0.15,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });
        
        const starsMesh = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(starsMesh);

        // Core (Sun)
        const coreGeo = new THREE.SphereGeometry(3, 32, 32);
        const coreMat = new THREE.MeshBasicMaterial({ 
            color: 0xffffff,
            transparent: true,
            opacity: 0.9
        });
        const core = new THREE.Mesh(coreGeo, coreMat);
        scene.add(core);

        // Core Glow
        const glowGeo = new THREE.SphereGeometry(4.5, 32, 32);
        const glowMat = new THREE.MeshBasicMaterial({
            color: 0x14b8a6, // Brand color
            transparent: true,
            opacity: 0.15,
            blending: THREE.AdditiveBlending,
            side: THREE.BackSide
        });
        const coreGlow = new THREE.Mesh(glowGeo, glowMat);
        scene.add(coreGlow);

        // Planets Setup
        const planetsData = [
            { id: 'letters', color: 0xffb7b2, radius: 1.2, distance: 12, speed: 0.002, yOffset: 2, label: "Letters" },
            { id: 'games', color: 0x82b1ff, radius: 1.5, distance: 18, speed: 0.0015, yOffset: -1, label: "Games" },
            { id: 'surprises', color: 0xffd54f, radius: 1.0, distance: 24, speed: 0.001, yOffset: 1.5, label: "Surprises" },
            { id: 'final', color: 0xe1bee7, radius: 2.0, distance: 32, speed: 0.0008, yOffset: 0, label: "Final" }
        ];

        const planets = [];
        const orbitGroups = [];
        const baseOrbitRotation = Math.PI / 6; // Tilt orbits slightly

        planetsData.forEach((data, index) => {
            const orbitGroup = new THREE.Group();
            orbitGroup.rotation.x = baseOrbitRotation;
            orbitGroup.rotation.y = Math.random() * Math.PI * 2; // Random starting angle
            scene.add(orbitGroup);
            orbitGroups.push({ group: orbitGroup, speed: data.speed });

            // Path visualizer (optional, subtle)
            const pathGeo = new THREE.RingGeometry(data.distance - 0.05, data.distance + 0.05, 64);
            const pathMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.02, side: THREE.DoubleSide });
            const pathMesh = new THREE.Mesh(pathGeo, pathMat);
            pathMesh.rotation.x = Math.PI / 2;
            orbitGroup.add(pathMesh);

            // Planet Mesh
            const geo = new THREE.SphereGeometry(data.radius, 32, 32);
            // Procedural texture simulation using material properties
            const mat = new THREE.MeshStandardMaterial({
                color: data.color,
                roughness: 0.7,
                metalness: 0.2,
                emissive: data.color,
                emissiveIntensity: 0.1
            });
            const mesh = new THREE.Mesh(geo, mat);
            
            mesh.position.set(data.distance, data.yOffset, 0);
            mesh.userData = { id: data.id, name: data.label, baseDistance: data.distance };
            
            // Inner glow
            const pGlowGeo = new THREE.SphereGeometry(data.radius * 1.2, 32, 32);
            const pGlowMat = new THREE.MeshBasicMaterial({
                color: data.color, transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending, side: THREE.BackSide
            });
            const pGlow = new THREE.Mesh(pGlowGeo, pGlowMat);
            mesh.add(pGlow);

            orbitGroup.add(mesh);
            planets.push(mesh);
        });

        // Raycasting for interaction
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        let hoveredPlanet = null;
        let isUniverseActive = false;
        let currentView = 'orbit'; // 'orbit' or planet id

        window.addEventListener('mousemove', (event) => {
            if(!isUniverseActive || currentView !== 'orbit') {
                if(hoveredPlanet) {
                    gsap.to(hoveredPlanet.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
                    hoveredPlanet = null;
                }
                return;
            }

            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(planets);

            if (intersects.length > 0) {
                const object = intersects[0].object;
                if (hoveredPlanet !== object) {
                    if (hoveredPlanet) gsap.to(hoveredPlanet.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
                    hoveredPlanet = object;
                    gsap.to(hoveredPlanet.scale, { x: 1.15, y: 1.15, z: 1.15, duration: 0.3, ease: "back.out(1.5)" });
                    document.body.style.cursor = 'none'; // keep custom cursor
                    cursorDot.style.transform = 'translate(-50%, -50%) scale(2)';
                    cursorDot.style.backgroundColor = 'rgba(255,255,255,0.8)';
                }
            } else {
                if (hoveredPlanet) {
                    gsap.to(hoveredPlanet.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
                    hoveredPlanet = null;
                    cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
                    cursorDot.style.backgroundColor = 'white';
                }
            }
        });

        window.addEventListener('click', () => {
            if(!isUniverseActive || currentView !== 'orbit' || !hoveredPlanet) return;
            goToPlanet(hoveredPlanet);
        });

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Animation Loop
        const clock = new THREE.Clock();
        function animate() {
            requestAnimationFrame(animate);
            const delta = clock.getDelta();
            const time = clock.getElapsedTime();

            starsMesh.rotation.y = time * 0.02;
            core.rotation.y = time * 0.2;
            coreGlow.scale.setScalar(1 + Math.sin(time * 2) * 0.05);

            if (currentView === 'orbit') {
                orbitGroups.forEach(og => {
                    og.group.rotation.y += og.speed;
                });
                planets.forEach(p => {
                    p.rotation.y += 0.01; // rotate on own axis
                    // gentle float
                    p.position.y += Math.sin(time * 2 + p.position.x) * 0.005; 
                });
            }

            renderer.render(scene, camera);
        }
        animate();

        // --- 3. UI Flow & State Management ---
        const screens = {
            login: document.getElementById('screen-login'),
            letters: document.getElementById('overlay-letters'),
            games: document.getElementById('overlay-games'),
            surprises: document.getElementById('overlay-surprises'),
            final: document.getElementById('overlay-final')
        };
        const hintText = document.getElementById('hint-text');
        const btnBack = document.getElementById('btn-back');
        const logo = document.getElementById('logo');

        function switchUI(targetId) {
            Object.values(screens).forEach(el => {
                if(el) {
                    el.classList.remove('visible-op');
                    el.classList.add('hidden-op');
                }
            });
            if(targetId && screens[targetId]) {
                screens[targetId].classList.remove('hidden-op');
                screens[targetId].classList.add('visible-op');
            }
        }

        // Login Logic
        const btnUnlock = document.getElementById('btn-unlock');
        const inputPass = document.getElementById('input-password');
        const loginErr = document.getElementById('login-error');

        function unlockUniverse() {
            const pass = inputPass.value.toLowerCase().trim();
            // Accept empty or basic variations for demo smoothness, but ideally check
            if(pass === 'prachita' || pass === 'bestie' || pass === '') {
                loginErr.style.opacity = 0;
                switchUI(null); // Hide login
                
                // Camera intro animation
                gsap.to(camera.position, {
                    y: 15, z: 35, duration: 3, ease: "power3.inOut",
                    onComplete: () => {
                        isUniverseActive = true;
                        hintText.classList.remove('hidden-op');
                        hintText.classList.add('visible-op');
                        logo.classList.remove('hidden-op');
                        logo.classList.add('visible-op');
                    }
                });
            } else {
                loginErr.style.opacity = 1;
                gsap.fromTo(inputPass, {x: -5}, {x: 5, duration: 0.1, yoyo: true, repeat: 3});
            }
        }

        btnUnlock.addEventListener('click', unlockUniverse);
        inputPass.addEventListener('keypress', (e) => { if(e.key === 'Enter') unlockUniverse(); });

        // Navigation Logic
        let cameraOrbitPos = new THREE.Vector3(0, 15, 35);
        let cameraOrbitTarget = new THREE.Vector3(0, 0, 0);

        function goToPlanet(planetMesh) {
            currentView = planetMesh.userData.id;
            hintText.classList.remove('visible-op');
            hintText.classList.add('hidden-op');
            
            // Calculate world position of the planet
            const targetPos = new THREE.Vector3();
            planetMesh.getWorldPosition(targetPos);

            // Calculate camera position (slightly offset from planet)
            const camOffset = targetPos.clone().normalize().multiplyScalar(planetMesh.geometry.parameters.radius * 4);
            const finalCamPos = targetPos.clone().add(camOffset);
            // add a little vertical offset for better framing
            finalCamPos.y += planetMesh.geometry.parameters.radius;

            // Animate Camera
            gsap.to(camera.position, {
                x: finalCamPos.x, y: finalCamPos.y, z: finalCamPos.z,
                duration: 2, ease: "power3.inOut"
            });
            
            // Animate target (where camera looks)
            // Using a dummy object to tween lookAt smoothly
            const dummy = { x: cameraOrbitTarget.x, y: cameraOrbitTarget.y, z: cameraOrbitTarget.z };
            gsap.to(dummy, {
                x: targetPos.x, y: targetPos.y, z: targetPos.z,
                duration: 2, ease: "power3.inOut",
                onUpdate: () => camera.lookAt(dummy.x, dummy.y, dummy.z),
                onComplete: () => {
                    showOverlay(currentView);
                    btnBack.classList.remove('hidden-op');
                    btnBack.classList.add('visible-op');
                }
            });
        }

        btnBack.addEventListener('click', () => {
            currentView = 'orbit';
            switchUI(null);
            btnBack.classList.remove('visible-op');
            btnBack.classList.add('hidden-op');
            
            const dummy = { x: camera.position.x, y: camera.position.y, z: camera.position.z };
            // Need current lookAt direction
            const dir = new THREE.Vector3();
            camera.getWorldDirection(dir);
            const currentLookAt = camera.position.clone().add(dir);
            const lookDummy = { x: currentLookAt.x, y: currentLookAt.y, z: currentLookAt.z };

            gsap.to(camera.position, {
                x: cameraOrbitPos.x, y: cameraOrbitPos.y, z: cameraOrbitPos.z,
                duration: 2, ease: "power3.inOut"
            });

            gsap.to(lookDummy, {
                x: cameraOrbitTarget.x, y: cameraOrbitTarget.y, z: cameraOrbitTarget.z,
                duration: 2, ease: "power3.inOut",
                onUpdate: () => camera.lookAt(lookDummy.x, lookDummy.y, lookDummy.z),
                onComplete: () => {
                    hintText.classList.remove('hidden-op');
                    hintText.classList.add('visible-op');
                }
            });
        });

        function showOverlay(id) {
            switchUI(id);
            if(id === 'letters') renderLetters();
            if(id === 'games') initGames();
            if(id === 'surprises') spawnSurprises();
            if(id === 'final') triggerFinalSequence();
        }

        // --- 4. Content Logic ---

        // Letters
        const lettersData = [
            { title: "To my best friend", excerpt: "You are one of the best...", full: "Dear Prachita,\n\nYou are one of the best friends anyone could ask for. Your energy, your kindness, and your absolute vibe make every day better. \n\nNever change." },
            { title: "Thank you", excerpt: "For always being there...", full: "Hey bestie,\n\nThank you for always being there, through the highs and the lows. Having someone who truly understands me is rare, and I'm lucky to have found that in you." },
            { title: "Memories", excerpt: "Life is more fun with you...", full: "Prachita,\n\nLife is just infinitely more fun with you around. Our late-night talks, the random adventures, the shared jokes... I cherish all of it.\n\nHere's to making infinitely more memories together." },
            { title: "Future", excerpt: "Whatever comes next...", full: "To the future,\n\nWhatever comes next, I know we'll face it together. Keep shining, keep being your amazing self. The universe has nothing on you." }
        ];

        function renderLetters() {
            const container = document.querySelector('#overlay-letters .grid');
            if(container.children.length > 0) return; // already rendered
            
            lettersData.forEach((letter, i) => {
                const card = document.createElement('div');
                card.className = "glass glass-hover p-6 rounded-xl flex flex-col gap-4 cursor-pointer transform hover:-translate-y-1 transition-all duration-300 clickable";
                card.style.opacity = 0;
                card.style.animation = `float 6s ease-in-out infinite`;
                card.style.animationDelay = `${i * 0.5}s`;
                
                card.innerHTML = `
                    <div class="flex items-center justify-between text-zinc-400">
                        <iconify-icon icon="solar:letter-linear" class="text-2xl text-brand-400" stroke-width="1.5"></iconify-icon>
                        <span class="text-xs">Letter 0${i+1}</span>
                    </div>
                    <div>
                        <h3 class="text-sm font-semibold text-white mb-1 tracking-tight">${letter.title}</h3>
                        <p class="text-xs text-zinc-500 font-handwriting text-lg leading-tight line-clamp-2">${letter.excerpt}</p>
                    </div>
                `;
                
                card.addEventListener('click', () => openLetter(letter));
                container.appendChild(card);
                
                gsap.to(card, { opacity: 1, duration: 0.5, delay: i * 0.1 + 0.5 });
            });
        }

        const modal = document.getElementById('letter-modal');
        const content = document.getElementById('letter-content');
        document.getElementById('btn-close-letter').addEventListener('click', () => {
            modal.classList.remove('visible-op');
            modal.classList.add('hidden-op');
        });

        function openLetter(letter) {
            content.textContent = letter.full;
            modal.classList.remove('hidden-op');
            modal.classList.add('visible-op');
            gsap.fromTo(modal.querySelector('div'), {scale: 0.9, opacity: 0}, {scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.5)"});
        }

        // Games Logic (Simplified for single file stability)
        function initGames() {
            // Tab switching
            const tabs = document.querySelectorAll('.game-tab');
            const views = document.querySelectorAll('.game-view');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    tabs.forEach(t => { t.classList.remove('active', 'border-white/30', 'bg-white/10', 'text-white'); t.classList.add('text-zinc-400'); });
                    tab.classList.add('active', 'border-white/30', 'bg-white/10', 'text-white');
                    tab.classList.remove('text-zinc-400');
                    
                    views.forEach(v => v.classList.add('hidden'));
                    document.getElementById(tab.dataset.target).classList.remove('hidden');
                });
            });

            initTicTacToe();
            initMemory();
        }

        function initTicTacToe() {
            const board = document.querySelector('#game-tictactoe .grid');
            if(board.children.length > 0) return; // already init
            
            let currentPlayer = 'X';
            let cells = Array(9).fill('');
            const status = document.getElementById('ttt-status');
            let active = true;

            const checkWin = () => {
                const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
                for(let combo of wins) {
                    if(cells[combo[0]] && cells[combo[0]] === cells[combo[1]] && cells[combo[0]] === cells[combo[2]]) return cells[combo[0]];
                }
                if(!cells.includes('')) return 'Draw';
                return null;
            };

            const handleClick = (i, div) => {
                if(!active || cells[i]) return;
                cells[i] = currentPlayer;
                div.innerHTML = `<span class="text-4xl font-semibold ${currentPlayer==='X'?'text-brand-400':'text-zinc-300'} drop-shadow-lg">${currentPlayer}</span>`;
                
                const win = checkWin();
                if(win) {
                    active = false;
                    status.textContent = win === 'Draw' ? "It's a draw!" : `Player ${win} wins!`;
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    status.textContent = `Your turn (${currentPlayer})`;
                }
            };

            for(let i=0; i<9; i++) {
                const div = document.createElement('div');
                div.className = "tic-tac-cell flex items-center justify-center cursor-pointer clickable hover:bg-white/5 transition-colors";
                div.addEventListener('click', () => handleClick(i, div));
                board.appendChild(div);
            }

            document.getElementById('ttt-reset').addEventListener('click', () => {
                cells = Array(9).fill('');
                currentPlayer = 'X';
                active = true;
                status.textContent = "Your turn (X)";
                Array.from(board.children).forEach(c => c.innerHTML = '');
            });
        }

        function initMemory() {
            const board = document.querySelector('#game-memory .grid');
            if(board.children.length > 0) return;

            const icons = ['heart', 'star', 'music-notes', 'crown', 'ghost', 'planet-2'];
            const deck = [...icons, ...icons].sort(() => Math.random() - 0.5);
            let flipped = [];
            let matched = 0;
            let locked = false;

            deck.forEach((icon, i) => {
                const card = document.createElement('div');
                card.className = "memory-card w-full aspect-square clickable";
                card.innerHTML = `
                    <div class="memory-card-inner w-full h-full relative">
                        <div class="memory-card-front glass rounded-lg flex items-center justify-center text-white/20 hover:bg-white/10 transition-colors">
                            <iconify-icon icon="solar:question-circle-linear" class="text-xl"></iconify-icon>
                        </div>
                        <div class="memory-card-back bg-brand-900/50 border border-brand-500/50 rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                            <iconify-icon icon="solar:${icon}-linear" class="text-2xl"></iconify-icon>
                        </div>
                    </div>
                `;
                
                card.addEventListener('click', () => {
                    if(locked || card.classList.contains('flipped') || flipped.length === 2) return;
                    card.classList.add('flipped');
                    flipped.push({card, icon});
                    
                    if(flipped.length === 2) {
                        locked = true;
                        if(flipped[0].icon === flipped[1].icon) {
                            matched += 2;
                            flipped = [];
                            locked = false;
                            if(matched === deck.length) setTimeout(() => alert("You matched them all!"), 500);
                        } else {
                            setTimeout(() => {
                                flipped[0].card.classList.remove('flipped');
                                flipped[1].card.classList.remove('flipped');
                                flipped = [];
                                locked = false;
                            }, 1000);
                        }
                    }
                });
                board.appendChild(card);
            });

            document.getElementById('memory-reset').addEventListener('click', () => {
                board.innerHTML = '';
                initMemory();
            });
        }

        // Surprises Logic
        const surpriseMsgs = [
            "You found a secret message! 🌸",
            "You're an amazing friend. 💖",
            "Surprise! You mean a lot to me. ✨",
            "Your smile is contagious. 😊",
            "Keep being awesome! 🚀"
        ];
        
        function spawnSurprises() {
            const container = document.getElementById('surprise-container');
            if(container.children.length > 0) return;

            const icons = ['star-fall', 'heart-angle', 'gift', 'magic-stick-3', 'moon'];
            
            for(let i=0; i<10; i++) {
                const el = document.createElement('div');
                el.className = "absolute text-3xl text-white/50 hover:text-white hover:scale-125 transition-all duration-300 clickable cursor-pointer";
                // random position avoiding center text roughly
                let top, left;
                do {
                    top = Math.random() * 80 + 10;
                    left = Math.random() * 80 + 10;
                } while (top > 40 && top < 60 && left > 30 && left < 70);
                
                el.style.top = `${top}%`;
                el.style.left = `${left}%`;
                el.style.animation = `float ${4 + Math.random()*4}s ease-in-out infinite`;
                el.style.animationDelay = `${Math.random()*2}s`;
                
                const iconName = icons[Math.floor(Math.random() * icons.length)];
                el.innerHTML = `<iconify-icon icon="solar:${iconName}-linear" stroke-width="1.5"></iconify-icon>`;
                
                el.addEventListener('click', (e) => {
                    showToast(surpriseMsgs[Math.floor(Math.random() * surpriseMsgs.length)]);
                    createClickParticles(e.clientX, e.clientY);
                    el.style.display = 'none'; // hide after click
                });
                
                container.appendChild(el);
            }
        }

        const toast = document.getElementById('toast-surprise');
        const toastMsg = document.getElementById('toast-msg');
        let toastTimeout;
        
        function showToast(msg) {
            clearTimeout(toastTimeout);
            toastMsg.textContent = msg;
            toast.classList.remove('hidden-op', 'translate-y-4');
            toast.classList.add('visible-op', 'translate-y-0');
            
            toastTimeout = setTimeout(() => {
                toast.classList.remove('visible-op', 'translate-y-0');
                toast.classList.add('hidden-op', 'translate-y-4');
            }, 3000);
        }

        function createClickParticles(x, y) {
            const colors = ['#f0fdfa', '#14b8a6', '#ccfbf1'];
            confetti({
                particleCount: 20, spread: 40, origin: { x: x / window.innerWidth, y: y / window.innerHeight },
                colors: colors, disableForReducedMotion: true, zIndex: 9999
            });
        }

        // Final Sequence
        function triggerFinalSequence() {
            const texts = document.querySelectorAll('.final-text');
            texts.forEach(t => {
                t.style.opacity = 1;
                t.style.transform = 'translateY(0)';
            });

            // Start ambient confetti
            const end = Date.now() + 5 * 1000;
            const colors = ['#ffb7b2', '#ffffff', '#e1bee7'];

            (function frame() {
                confetti({
                    particleCount: 2, angle: 60, spread: 55, origin: { x: 0 }, colors: colors, zIndex: 50
                });
                confetti({
                    particleCount: 2, angle: 120, spread: 55, origin: { x: 1 }, colors: colors, zIndex: 50
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());
        }

        document.getElementById('btn-final-hug').addEventListener('click', (e) => {
            confetti({
                particleCount: 150, spread: 100, origin: { y: 0.6 },
                colors: ['#ff4d4f', '#ff7875', '#ffffff'],
                shapes: ['circle'],
                scalar: 1.2,
                zIndex: 9999
            });
            e.target.innerHTML = `<iconify-icon icon="solar:heart-bold" class="text-red-500 text-lg"></iconify-icon> Hug Sent!`;
        });

    
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="100" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 100%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ZPruWnhzwuk5Tf6nc1q0"></div>

</div></div>

<div id="cursor-dot" style={{left: '651px', top: '209px'}}></div>
<div id="cursor-glow" style={{left: '650.735px', top: '208.991px'}}></div>

<div id="webgl-container"></div>

<div className="flex flex-col items-center justify-center" id="ui-layer">

<div className="absolute top-6 left-6 hidden-op pointer-events-auto flex items-center gap-2 text-white/50 hover:text-white transition-colors" id="logo">
<span className="tracking-tighter font-semibold text-lg">P.</span>
</div>

<button className="absolute top-6 right-6 hidden-op pointer-events-auto glass px-4 py-2 rounded-full text-xs font-medium text-zinc-300 flex items-center gap-2 hover:bg-white/10 transition-all clickable" id="btn-back">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5"></iconify-icon>
            Return to Orbit
        </button>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden-op pointer-events-none text-center" id="hint-text">
<p className="text-xs text-white/40 tracking-widest uppercase font-medium">Select a planet to explore</p>
</div>

<div className="visible-op pointer-events-auto flex flex-col items-center max-w-sm w-full px-6" id="screen-login">
<div className="glass p-8 rounded-2xl w-full flex flex-col items-center text-center shadow-2xl shadow-black/50">
<iconify-icon className="text-3xl text-zinc-400 mb-4" icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon>
<h1 className="text-xl tracking-tight font-semibold text-white mb-2">This universe is only for Prachita.</h1>
<p className="text-xs text-zinc-400 mb-6">Enter the secret password to unlock the universe.</p>
<div className="w-full relative">
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all clickable text-center" id="input-password" placeholder="Password..." type="password"/>
</div>
<button className="mt-4 w-full bg-white text-black font-semibold text-sm py-3 rounded-lg hover:bg-zinc-200 transition-colors clickable flex items-center justify-center gap-2" id="btn-unlock">
                    Unlock <iconify-icon icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
</button>
<p className="text-red-400 text-xs mt-3 opacity-0 transition-opacity" id="login-error">Incorrect sequence. Try again.</p>
</div>
</div>

<div className="absolute inset-0 hidden-op flex items-center justify-center p-6 sm:p-12" id="overlay-letters">
<div className="w-full max-w-4xl h-full max-h-[80vh] flex flex-col">
<h2 className="text-2xl tracking-tight font-semibold text-white mb-8 text-center drop-shadow-lg">Letters to You</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 overflow-y-auto pb-8 pointer-events-auto pr-2">

</div>
</div>
</div>

<div className="hidden-op z-50 flex bg-black/80 pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-sm items-center justify-center" id="letter-modal">
<div className="bg-[#fdfbf7] w-full max-w-lg rounded-xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl rotate-1">
<button className="absolute top-4 right-4 text-zinc-400 hover:text-black transition-colors clickable" id="btn-close-letter">
<iconify-icon className="text-xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<p className="font-handwriting text-xl text-zinc-800 leading-relaxed mt-4 whitespace-pre-line" id="letter-content">the password is prachitaaaaaa</p>
<p className="font-handwriting text-lg text-zinc-600 mt-6 text-right">- Yours truly</p>
</div>
</div>

<div className="absolute inset-0 hidden-op flex flex-col items-center justify-center p-6 pointer-events-auto" id="overlay-games">
<h2 className="text-2xl tracking-tight font-semibold text-white mb-2 text-center">Arcade Nebula</h2>
<p className="text-xs text-zinc-400 mb-8 text-center">Take a break and play.</p>
<div className="flex flex-wrap justify-center gap-4 mb-8">
<button className="game-tab active glass px-4 py-2 rounded-lg text-sm font-medium text-white clickable transition-all border-white/30 bg-white/10" data-target="game-tictactoe">Tic Tac Toe</button>
<button className="game-tab glass px-4 py-2 rounded-lg text-sm font-medium text-zinc-400 clickable transition-all hover:text-white" data-target="game-memory">Memory Match</button>
</div>
<div className="glass p-8 rounded-2xl w-full max-w-md relative min-h-[400px] flex items-center justify-center overflow-hidden">

<div className="game-view w-full flex flex-col items-center" id="game-tictactoe">
<p className="text-sm font-medium mb-6 h-5" id="ttt-status">Your turn (X)</p>
<div className="grid grid-cols-3 w-64 h-64 border border-white/10 rounded-xl overflow-hidden bg-black/20">

</div>
<button className="mt-6 text-xs text-zinc-400 hover:text-white clickable" id="ttt-reset">Reset Game</button>
</div>

<div className="game-view w-full flex flex-col items-center hidden" id="game-memory">
<div className="grid grid-cols-4 gap-2 w-full max-w-[300px]">

</div>
<button className="mt-6 text-xs text-zinc-400 hover:text-white clickable" id="memory-reset">Reset Game</button>
</div>
</div>
</div>

<div className="absolute inset-0 hidden-op pointer-events-auto overflow-hidden" id="overlay-surprises">
<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
<h2 className="text-2xl tracking-tight font-semibold text-white/20 mb-2">Constellation of Surprises</h2>
<p className="text-xs text-zinc-500">Look around and explore...</p>
</div>

<div className="w-full h-full relative" id="surprise-container"></div>
</div>

<div className="absolute bottom-20 left-1/2 -translate-x-1/2 glass px-6 py-3 rounded-full flex items-center gap-3 hidden-op translate-y-4 transition-all duration-300 z-50 pointer-events-none" id="toast-surprise">
<iconify-icon className="text-brand-400 text-lg" icon="solar:star-fall-linear"></iconify-icon>
<span className="text-sm font-medium text-white" id="toast-msg"></span>
</div>

<div className="absolute inset-0 hidden-op flex flex-col items-center justify-center p-6 bg-black/60 backdrop-blur-sm pointer-events-auto" id="overlay-final">
<div className="flex flex-col min-h-[50vh] text-center w-full max-w-2xl items-center justify-center">prachitaaaaaa</div>
</div>
</div>


    </>
  );
}
