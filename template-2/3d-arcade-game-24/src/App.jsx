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



        // --- UI Elements ---
        const startScreen = document.getElementById('start-screen');
        const gameOverScreen = document.getElementById('game-over-screen');
        const hudContainer = document.getElementById('hud-container');
        const scoreDisplay = document.getElementById('score-display');
        const finalScoreDisplay = document.getElementById('final-score');
        const startBtn = document.getElementById('start-btn');
        const restartBtn = document.getElementById('restart-btn');

        // --- Game State ---
        let state = 'MENU'; // MENU, PLAYING, GAMEOVER
        let score = 0;
        let gameSpeed = 0.25;
        let frameCount = 0;

        // --- Three.js Setup ---
        const container = document.getElementById('game-container');
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#020617'); // slate-950
        scene.fog = new THREE.Fog('#020617', 10, 60);

        // Camera optimized for side-scrolling perspective
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(-8, 5, 12);
        camera.lookAt(-2, 1, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Performance optimization
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        container.appendChild(renderer.domElement);

        // --- Lighting ---
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight.position.set(10, 20, 10);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.width = 1024;
        dirLight.shadow.mapSize.height = 1024;
        dirLight.shadow.camera.near = 0.5;
        dirLight.shadow.camera.far = 50;
        dirLight.shadow.camera.left = -20;
        dirLight.shadow.camera.right = 20;
        dirLight.shadow.camera.top = 20;
        dirLight.shadow.camera.bottom = -20;
        scene.add(dirLight);

        // --- Materials ---
        const playerMat = new THREE.MeshStandardMaterial({ 
            color: 0x06b6d4, // cyan-500
            roughness: 0.2,
            metalness: 0.1,
            emissive: 0x06b6d4,
            emissiveIntensity: 0.2
        });
        
        const obstacleMat = new THREE.MeshStandardMaterial({ 
            color: 0xf43f5e, // rose-500
            roughness: 0.3,
            metalness: 0.2
        });

        // --- Objects ---
        // Ground
        const groundGeo = new THREE.PlaneGeometry(1000, 100);
        const groundMat = new THREE.MeshStandardMaterial({ 
            color: 0x0f172a, // slate-900
            roughness: 0.9,
        });
        const ground = new THREE.Mesh(groundGeo, groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        scene.add(ground);

        // Grid (visual ground marker)
        const gridHelper = new THREE.GridHelper(1000, 500, 0x1e293b, 0x0f172a);
        gridHelper.position.y = 0.01;
        scene.add(gridHelper);

        // Player
        const playerSize = 1;
        const playerGeo = new THREE.BoxGeometry(playerSize, playerSize, playerSize);
        const player = new THREE.Mesh(playerGeo, playerMat);
        player.castShadow = true;
        scene.add(player);

        // Physics variables
        const gravity = -0.018;
        let yVelocity = 0;
        const jumpStrength = 0.35;
        let isGrounded = true;
        let obstacles = [];

        // Particles group for death effect
        const particleGroup = new THREE.Group();
        scene.add(particleGroup);

        // --- Core Functions ---

        function initPlayer() {
            player.position.set(0, playerSize / 2, 0);
            player.rotation.set(0, 0, 0);
            player.visible = true;
            yVelocity = 0;
            isGrounded = true;
            camera.position.x = player.position.x - 8;
            dirLight.position.x = player.position.x + 10;
        }

        function createObstacle(xPos) {
            // Randomly choose between a box or a spike (cone)
            const isSpike = Math.random() > 0.5;
            let obs;

            if (isSpike) {
                const geo = new THREE.ConeGeometry(0.6, 1.2, 4);
                obs = new THREE.Mesh(geo, obstacleMat);
                obs.position.set(xPos, 0.6, 0);
                obs.rotation.y = Math.PI / 4; // rotate to look sharp
            } else {
                const geo = new THREE.BoxGeometry(1, 1, 1);
                obs = new THREE.Mesh(geo, obstacleMat);
                obs.position.set(xPos, 0.5, 0);
            }

            obs.castShadow = true;
            scene.add(obs);
            obstacles.push(obs);
        }

        function spawnParticles(position) {
            const particleGeo = new THREE.BoxGeometry(0.2, 0.2, 0.2);
            for(let i=0; i<15; i++) {
                const mesh = new THREE.Mesh(particleGeo, playerMat);
                mesh.position.copy(position);
                mesh.userData = {
                    velocity: new THREE.Vector3(
                        (Math.random() - 0.5) * 0.5,
                        Math.random() * 0.5,
                        (Math.random() - 0.5) * 0.5
                    ),
                    rotSpeed: new THREE.Vector3(
                        Math.random() * 0.2,
                        Math.random() * 0.2,
                        Math.random() * 0.2
                    )
                };
                particleGroup.add(mesh);
            }
        }

        function jump() {
            if (isGrounded && state === 'PLAYING') {
                yVelocity = jumpStrength;
                isGrounded = false;
            }
        }

        function handleInput() {
            if (state === 'MENU') {
                startGame();
            } else if (state === 'PLAYING') {
                jump();
            }
        }

        // --- Game Flow Methods ---

        function startGame() {
            initPlayer();
            
            // Clear existing obstacles
            obstacles.forEach(obs => scene.remove(obs));
            obstacles = [];
            
            // Clear particles
            while(particleGroup.children.length > 0){ 
                particleGroup.remove(particleGroup.children[0]); 
            }

            score = 0;
            gameSpeed = 0.25;
            frameCount = 0;
            state = 'PLAYING';

            // UI Transitions
            startScreen.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
            startScreen.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
            
            gameOverScreen.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
            gameOverScreen.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
            
            hudContainer.style.opacity = '1';
            scoreDisplay.innerText = '0';
        }

        function triggerGameOver() {
            state = 'GAMEOVER';
            
            // Visual death
            player.visible = false;
            spawnParticles(player.position);
            
            // Shake camera slightly
            camera.position.y += 0.5;
            camera.position.z += 0.5;

            // UI Transitions
            hudContainer.style.opacity = '0';
            finalScoreDisplay.innerText = Math.floor(score);
            
            setTimeout(() => {
                gameOverScreen.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
                gameOverScreen.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
            }, 500);
        }

        // --- Event Listeners ---
        window.addEventListener('keydown', (e) => {
            if (e.code === 'Space' || e.code === 'ArrowUp') handleInput();
        });
        
        container.addEventListener('mousedown', handleInput);
        container.addEventListener('touchstart', handleInput, {passive: false});
        
        startBtn.addEventListener('click', (e) => { e.stopPropagation(); startGame(); });
        restartBtn.addEventListener('click', (e) => { e.stopPropagation(); startGame(); });

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Setup initial state
        initPlayer();

        // --- Main Game Loop ---
        function animate() {
            requestAnimationFrame(animate);

            if (state === 'PLAYING') {
                frameCount++;

                // -- Physics & Movement --
                player.position.x += gameSpeed;
                player.position.y += yVelocity;
                
                if (!isGrounded) {
                    yVelocity += gravity;
                    // Rotate cube while in air
                    player.rotation.z -= 0.08;
                }

                // Floor collision
                if (player.position.y <= playerSize / 2) {
                    player.position.y = playerSize / 2;
                    yVelocity = 0;
                    isGrounded = true;
                    // Snap rotation to 90deg increments cleanly
                    player.rotation.z = Math.round(player.rotation.z / (Math.PI / 2)) * (Math.PI / 2);
                }

                // -- Camera & Lights Tracking --
                // Smoothly follow player X
                camera.position.x += (player.position.x - 8 - camera.position.x) * 0.1;
                // Look slightly ahead
                camera.lookAt(player.position.x + 4, 1, 0); 
                dirLight.position.x = player.position.x + 10;

                // -- Obstacle Management --
                // Spawn logic based on distance moved
                if (frameCount % 45 === 0) {
                    // Increase speed slightly over time
                    if (gameSpeed < 0.4) gameSpeed += 0.001;
                    
                    if (Math.random() > 0.3) {
                        createObstacle(player.position.x + 30);
                        
                        // Small chance for double obstacle
                        if(Math.random() > 0.7) {
                            createObstacle(player.position.x + 31.5);
                        }
                    }
                }

                // Collision Detection & Cleanup
                const playerBox = new THREE.Box3().setFromObject(player);
                playerBox.expandByScalar(-0.15); // Slightly forgiving hitbox

                for (let i = obstacles.length - 1; i >= 0; i--) {
                    const obs = obstacles[i];
                    
                    // Simple AABB Collision
                    const obsBox = new THREE.Box3().setFromObject(obs);
                    obsBox.expandByScalar(-0.1);

                    if (playerBox.intersectsBox(obsBox)) {
                        triggerGameOver();
                        break;
                    }

                    // Remove obstacles that fall far behind
                    if (obs.position.x < player.position.x - 15) {
                        scene.remove(obs);
                        obstacles.splice(i, 1);
                    }
                }

                // Update Score
                score += gameSpeed;
                if (frameCount % 5 === 0) {
                    scoreDisplay.innerText = Math.floor(score);
                }

            } else if (state === 'GAMEOVER') {
                // Animate death particles
                particleGroup.children.forEach(p => {
                    p.position.add(p.userData.velocity);
                    p.rotation.x += p.userData.rotSpeed.x;
                    p.rotation.y += p.userData.rotSpeed.y;
                    p.userData.velocity.y += gravity * 0.5; // less gravity for explosion
                    p.scale.multiplyScalar(0.95); // shrink
                });
                
                // Slowly pan camera to look at ground
                camera.position.x += 0.02;
                camera.lookAt(player.position.x, 0, 0);
            } else if (state === 'MENU') {
                // Subtle camera drift for menu
                camera.position.x = Math.sin(Date.now() * 0.0005) * 2 - 8;
                camera.lookAt(0, 1, 0);
            }

            renderer.render(scene, camera);
        }

        // Start loop
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
      

<div className="absolute inset-0 cursor-pointer" id="game-container"></div>

<div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-6" id="ui-layer">

<div className="flex justify-between items-start w-full max-w-5xl mx-auto transition-opacity duration-300" id="hud-container" style={{opacity: `0`}}>
<div className="flex items-center gap-2 text-slate-400">
<iconify-icon icon="solar:gamepad-linear" width="1.2em"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-medium">Playing</span>
</div>
<div className="flex flex-col items-end">
<span className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-1">Score</span>
<span className="text-2xl font-semibold tracking-tight tabular-nums text-white drop-shadow-md" id="score-display">0</span>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center">

<div className="flex flex-col items-center justify-center transition-all duration-500 transform scale-100 opacity-100 pointer-events-auto" id="start-screen">
<div className="mb-2 text-cyan-400 flex items-center justify-center">
<iconify-icon icon="solar:box-linear" width="3em"></iconify-icon>
</div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6 drop-shadow-lg">GEOMETRY</h1>
<p className="text-sm text-slate-400 mb-8 max-w-xs text-center font-light leading-relaxed">
                    Navigate the geometric landscape. Tap or press space to leap over obstacles.
                </p>
<button className="group relative px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center gap-3 transition-all duration-300 backdrop-blur-sm overflow-hidden text-white" id="start-btn">
<span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
<iconify-icon className="text-lg relative z-10" icon="solar:play-linear"></iconify-icon>
<span className="text-sm font-medium tracking-wide relative z-10">Start Game</span>
</button>
</div>

<div className="flex flex-col items-center justify-center transition-all duration-500 transform scale-95 opacity-0 pointer-events-none absolute" id="game-over-screen">
<div className="px-8 py-10 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl flex flex-col items-center shadow-2xl">
<div className="text-rose-500 mb-4">
<iconify-icon icon="solar:danger-triangle-linear" width="2.5em"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-2">Sector Failed</h2>
<div className="flex flex-col items-center my-6 py-4 border-y border-slate-800 w-full">
<span className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-1">Final Score</span>
<span className="text-4xl font-semibold tracking-tight tabular-nums text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]" id="final-score">0</span>
</div>
<button className="w-full px-6 py-3 bg-white text-slate-950 hover:bg-slate-200 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 font-medium text-sm mt-2" id="restart-btn">
<iconify-icon className="text-lg" icon="solar:restart-linear"></iconify-icon>
                        Restart Run
                    </button>
</div>
</div>
</div>

<div className="w-full flex justify-center pb-2 opacity-50">
<span className="text-xs font-light tracking-widest text-slate-500 uppercase">System Active</span>
</div>
</div>


    </>
  );
}
