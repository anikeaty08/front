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
        const SCENE_BG = 0x09090b; // Zinc 950
        const CUBE_SIZE = 1;
        const SPACING = 0.05;
        const TOTAL_SIZE = CUBE_SIZE + SPACING;
        
        // Colors (Standard Rubik's Scheme)
        const COLORS = {
            base: 0x18181b, // Zinc 900 (Internal Plastic)
            R: 0xef4444,    // Red
            L: 0xf97316,    // Orange
            U: 0xffffff,    // White
            D: 0xeab308,    // Yellow
            F: 0x22c55e,    // Green
            B: 0x3b82f6     // Blue
        };

        let scene, camera, renderer, controls;
        let cubes = [];
        let isAnimating = false;
        let moveHistory = []; 
        
        // Pivot for rotation
        const pivot = new THREE.Object3D();
        
        // Move Queue
        const moveQueue = [];
        let animationSpeed = 300; 

        // UI Elements
        const moveCounterEl = document.getElementById('move-counter');
        const btnSolve = document.getElementById('btn-solve');

        init();
        animate();

        function init() {
            // Setup Scene
            const container = document.getElementById('canvas-container');
            scene = new THREE.Scene();
            scene.background = new THREE.Color(SCENE_BG);
            scene.fog = new THREE.FogExp2(SCENE_BG, 0.035);

            // Setup Camera
            camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
            camera.position.set(6, 4, 6);
            camera.lookAt(0, 0, 0);

            // Setup Renderer
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            renderer.physicallyCorrectLights = true;
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 0.9;
            container.appendChild(renderer.domElement);

            // Setup Lighting 
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(ambientLight);

            // Key light
            const dirLight = new THREE.DirectionalLight(0xffffff, 3);
            dirLight.position.set(5, 12, 8);
            dirLight.castShadow = true;
            dirLight.shadow.mapSize.width = 2048;
            dirLight.shadow.mapSize.height = 2048;
            dirLight.shadow.bias = -0.0001;
            scene.add(dirLight);

            // Rim light for texture definition
            const rimLight = new THREE.SpotLight(0x6366f1, 8);
            rimLight.position.set(-10, 5, -5);
            rimLight.lookAt(0,0,0);
            scene.add(rimLight);

            // Fill light
            const fillLight = new THREE.DirectionalLight(0xffffff, 1);
            fillLight.position.set(-10, -8, 5);
            scene.add(fillLight);

            // Controls
            controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.05;
            controls.enablePan = false;
            controls.minDistance = 5;
            controls.maxDistance = 20;

            createRubiksCube();
            scene.add(pivot);

            window.addEventListener('resize', onWindowResize);
            
            setTimeout(() => {
                scrambleCube(5);
            }, 1000);
        }

        // Generate a procedural noise texture for the plastic grain
        function createPlasticNoiseTexture() {
            const size = 512;
            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext('2d');

            // Fill background
            ctx.fillStyle = '#808080';
            ctx.fillRect(0, 0, size, size);

            const imageData = ctx.getImageData(0, 0, size, size);
            const data = imageData.data;

            // Generate high frequency noise
            for (let i = 0; i < data.length; i += 4) {
                // Subtle grain
                const grain = (Math.random() - 0.5) * 20;
                data[i] = data[i] + grain;     // R
                data[i + 1] = data[i + 1] + grain; // G
                data[i + 2] = data[i + 2] + grain; // B
            }

            ctx.putImageData(imageData, 0, 0);

            const texture = new THREE.CanvasTexture(canvas);
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(2, 2); // Scale the texture
            
            return texture;
        }

        function createRubiksCube() {
            const geometry = new THREE.BoxGeometry(CUBE_SIZE, CUBE_SIZE, CUBE_SIZE);
            const plasticTexture = createPlasticNoiseTexture();
            
            // Material properties for textured ABS Plastic
            const plasticProps = {
                roughness: 0.65,         // Slightly rougher base for plastic
                metalness: 0.0,
                clearcoat: 1.0,          // Shiny coating
                clearcoatRoughness: 0.15, // Polish imperfections
                reflectivity: 0.5,
                bumpMap: plasticTexture, // The texture
                bumpScale: 0.008         // Subtle bump depth
            };

            for(let x=-1; x<=1; x++) {
                for(let y=-1; y<=1; y++) {
                    for(let z=-1; z<=1; z++) {
                        
                        // Create materials for each face
                        const materials = [
                            new THREE.MeshPhysicalMaterial({ ...plasticProps, color: x===1 ? COLORS.R : COLORS.base }),
                            new THREE.MeshPhysicalMaterial({ ...plasticProps, color: x===-1 ? COLORS.L : COLORS.base }),
                            new THREE.MeshPhysicalMaterial({ ...plasticProps, color: y===1 ? COLORS.U : COLORS.base }),
                            new THREE.MeshPhysicalMaterial({ ...plasticProps, color: y===-1 ? COLORS.D : COLORS.base }),
                            new THREE.MeshPhysicalMaterial({ ...plasticProps, color: z===1 ? COLORS.F : COLORS.base }),
                            new THREE.MeshPhysicalMaterial({ ...plasticProps, color: z===-1 ? COLORS.B : COLORS.base }),
                        ];

                        const cube = new THREE.Mesh(geometry, materials);
                        
                        cube.position.set(x * TOTAL_SIZE, y * TOTAL_SIZE, z * TOTAL_SIZE);
                        cube.castShadow = true;
                        cube.receiveShadow = true;
                        
                        cube.userData = { x, y, z };
                        
                        scene.add(cube);
                        cubes.push(cube);
                    }
                }
            }
        }

        function rotateLayer(axis, index, dir, duration = 300, isSolving = false) {
            if (isAnimating && duration > 0) return;
            isAnimating = true;

            const activeCubes = cubes.filter(c => Math.abs(c.position[axis] - (index * TOTAL_SIZE)) < 0.1);

            pivot.rotation.set(0, 0, 0);
            pivot.position.set(0, 0, 0);
            
            activeCubes.forEach(cube => {
                pivot.attach(cube);
            });

            const targetRotation = { value: 0 };
            const finalRotation = (Math.PI / 2) * dir * -1;

            const tween = new TWEEN.Tween(targetRotation)
                .to({ value: finalRotation }, duration)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(() => {
                    pivot.rotation[axis] = targetRotation.value;
                })
                .onComplete(() => {
                    pivot.updateMatrixWorld();
                    activeCubes.forEach(cube => {
                        scene.attach(cube);
                        cube.position.x = Math.round(cube.position.x / TOTAL_SIZE) * TOTAL_SIZE;
                        cube.position.y = Math.round(cube.position.y / TOTAL_SIZE) * TOTAL_SIZE;
                        cube.position.z = Math.round(cube.position.z / TOTAL_SIZE) * TOTAL_SIZE;
                        
                        cube.rotation.x = Math.round(cube.rotation.x / (Math.PI/2)) * (Math.PI/2);
                        cube.rotation.y = Math.round(cube.rotation.y / (Math.PI/2)) * (Math.PI/2);
                        cube.rotation.z = Math.round(cube.rotation.z / (Math.PI/2)) * (Math.PI/2);
                        cube.updateMatrix();
                    });
                    
                    pivot.rotation.set(0,0,0);
                    isAnimating = false;

                    if (!isSolving) {
                        moveHistory.push({ axis, index, dir });
                        updateUI();
                    }

                    if (moveQueue.length > 0) {
                        const nextMove = moveQueue.shift();
                        rotateLayer(nextMove.axis, nextMove.index, nextMove.dir, nextMove.duration, nextMove.isSolving);
                    } else if (isSolving && moveHistory.length === 0) {
                        showToast("Cube Solved!");
                        updateUI();
                    }
                });

            tween.start();
        }

        function scrambleCube(count = 20) {
            if (isAnimating) return;
            const speed = 100; 

            for(let i=0; i<count; i++) {
                const axes = ['x', 'y', 'z'];
                const axis = axes[Math.floor(Math.random() * axes.length)];
                const index = Math.floor(Math.random() * 3) - 1; 
                const dir = Math.random() > 0.5 ? 1 : -1;
                moveQueue.push({ axis, index, dir, duration: speed, isSolving: false });
            }
            processQueue();
        }

        function solveCube() {
            if (isAnimating || moveHistory.length === 0) return;
            const history = [...moveHistory];
            moveHistory = []; 
            updateUI();
            history.reverse().forEach(move => {
                moveQueue.push({ 
                    axis: move.axis, 
                    index: move.index, 
                    dir: move.dir * -1, 
                    duration: 150, 
                    isSolving: true 
                });
            });
            processQueue();
        }

        function processQueue() {
            if (!isAnimating && moveQueue.length > 0) {
                const move = moveQueue.shift();
                rotateLayer(move.axis, move.index, move.dir, move.duration, move.isSolving);
            }
        }

        function resetCamera() {
            new TWEEN.Tween(camera.position)
                .to({ x: 6, y: 4, z: 6 }, 1000)
                .easing(TWEEN.Easing.Cubic.Out)
                .start();
            
            new TWEEN.Tween(controls.target)
                .to({ x: 0, y: 0, z: 0 }, 1000)
                .easing(TWEEN.Easing.Cubic.Out)
                .start();
        }

        function updateUI() {
            moveCounterEl.innerText = moveHistory.length;
            if (moveHistory.length === 0) {
                btnSolve.disabled = true;
                btnSolve.classList.add('opacity-50', 'cursor-not-allowed');
            } else {
                btnSolve.disabled = false;
                btnSolve.classList.remove('opacity-50', 'cursor-not-allowed');
            }
        }

        function showToast(msg) {
            const toast = document.getElementById('toast');
            const toastMsg = document.getElementById('toast-msg');
            toastMsg.innerText = msg;
            toast.classList.remove('translate-y-[-150%]');
            setTimeout(() => {
                toast.classList.add('translate-y-[-150%]');
            }, 3000);
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
            controls.update();
            renderer.render(scene, camera);
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
      

<div className="absolute inset-0 z-0" id="canvas-container"></div>

<div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-6 sm:p-8">

<header className="flex justify-between items-start">
<div className="pointer-events-auto">
<div className="flex items-center gap-3 mb-1">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
<iconify-icon className="text-white text-lg" icon="lucide:box" strokeWidth="1.5"></iconify-icon>
</div>
<h1 className="text-lg font-semibold tracking-tight text-white">Cube<span className="text-zinc-500">3D</span></h1>
</div>
<p className="text-xs text-zinc-500 tracking-tight font-medium max-w-[200px] leading-relaxed">
                    Interactive simulation with realistic ABS plastic texture.
                </p>
</div>
<div className="pointer-events-auto">
<a className="text-xs font-medium text-zinc-500 hover:text-white transition-colors flex items-center gap-1.5 group" href="#">
<span>Help</span>
<iconify-icon className="text-zinc-600 group-hover:text-zinc-300 transition-colors" icon="lucide:help-circle" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</header>

<div className="absolute top-1/2 right-8 -translate-y-1/2 flex flex-col items-end pointer-events-none hidden sm:flex">
<div className="glass-panel px-4 py-3 rounded-xl flex flex-col items-end gap-1">
<span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Moves</span>
<span className="text-2xl font-medium text-white tracking-tight tabular-nums" id="move-counter">0</span>
</div>
</div>

<div className="w-full flex justify-center pb-4 pointer-events-auto">
<div className="glass-panel p-2 rounded-2xl flex items-center gap-1 sm:gap-2">
<button className="btn-action group relative flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-zinc-400 hover:text-white" id="btn-scramble" onClick={(e) => { scrambleCube() }}>
<iconify-icon className="text-xl mb-0.5" icon="lucide:shuffle" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Scramble</span>
</button>
<div className="w-px h-8 bg-white/10 mx-1"></div>
<button className="btn-action group relative flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-indigo-400 hover:text-indigo-300 disabled:opacity-50 disabled:cursor-not-allowed" id="btn-solve" onClick={(e) => { solveCube() }}>
<iconify-icon className="text-xl mb-0.5" icon="lucide:sparkles" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Auto Solve</span>
</button>
<div className="w-px h-8 bg-white/10 mx-1"></div>
<button className="btn-action group relative flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-zinc-400 hover:text-white" onClick={(e) => { resetCamera() }}>
<iconify-icon className="text-xl mb-0.5" icon="lucide:focus" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Reset View</span>
</button>
</div>
</div>
</div>

<div className="fixed top-8 left-1/2 -translate-x-1/2 translate-y-[-150%] transition-transform duration-500 z-50 glass-panel px-4 py-2 rounded-full flex items-center gap-2 pointer-events-none" id="toast">
<iconify-icon className="text-emerald-400" icon="lucide:check-circle" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-white" id="toast-msg">Solved!</span>
</div>


    </>
  );
}
