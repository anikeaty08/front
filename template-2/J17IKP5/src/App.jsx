import React, { useEffect } from 'react';
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


        // Initialize icons
        lucide.createIcons();

        // Three.js Scene Setup
        let scene, camera, renderer, controls;
        let ramenGroup, bowl, broth, noodles, toppings = [];
        let animationId;
        let stats = { fps: 0, drawCalls: 0, vertices: 0, faces: 0, lastTime: 0 };

        function init() {
            // Scene creation
            scene = new THREE.Scene();
            scene.background = new THREE.Color(0x0a0a0f);
            scene.fog = new THREE.Fog(0x0a0a0f, 50, 200);

            // Camera setup
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(15, 10, 15);

            // Renderer setup
            const canvas = document.getElementById('canvas');
            renderer = new THREE.WebGLRenderer({ 
                canvas: canvas, 
                antialias: true,
                alpha: true
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 1.2;

            // Controls
            controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.05;
            controls.maxDistance = 50;
            controls.minDistance = 5;

            // Lighting
            setupLighting();

            // Create ramen scene
            createRamenBowl();

            // Event listeners
            setupEventListeners();

            // Start animation loop
            animate();

            // Hide loading screen
            setTimeout(() => {
                document.getElementById('loading').classList.add('opacity-0');
                setTimeout(() => {
                    document.getElementById('loading').style.display = 'none';
                }, 500);
            }, 1000);
        }

        function setupLighting() {
            // Ambient light
            const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
            scene.add(ambientLight);

            // Main directional light
            const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(20, 20, 10);
            directionalLight.castShadow = true;
            directionalLight.shadow.mapSize.width = 2048;
            directionalLight.shadow.mapSize.height = 2048;
            scene.add(directionalLight);

            // Fill light
            const fillLight = new THREE.DirectionalLight(0x6366f1, 0.5);
            fillLight.position.set(-10, 5, -10);
            scene.add(fillLight);

            // Point light for warm glow
            const pointLight = new THREE.PointLight(0xff6b35, 0.8, 30);
            pointLight.position.set(0, 15, 0);
            scene.add(pointLight);
        }

        function createRamenBowl() {
            ramenGroup = new THREE.Group();

            // Bowl
            const bowlGeometry = new THREE.CylinderGeometry(8, 6, 4, 32);
            const bowlMaterial = new THREE.MeshPhongMaterial({ 
                color: 0x8b4513,
                shininess: 30
            });
            bowl = new THREE.Mesh(bowlGeometry, bowlMaterial);
            bowl.position.y = -2;
            bowl.castShadow = true;
            bowl.receiveShadow = true;
            ramenGroup.add(bowl);

            // Broth
            const brothGeometry = new THREE.CylinderGeometry(7.5, 5.5, 0.5, 32);
            const brothMaterial = new THREE.MeshPhongMaterial({ 
                color: 0xd2691e,
                transparent: true,
                opacity: 0.9,
                shininess: 100
            });
            broth = new THREE.Mesh(brothGeometry, brothMaterial);
            broth.position.y = 0.5;
            ramenGroup.add(broth);

            // Noodles
            createNoodles();

            // Toppings
            createToppings();

            // Chopsticks
            createChopsticks();

            scene.add(ramenGroup);
        }

        function createNoodles() {
            const noodleGroup = new THREE.Group();
            
            for (let i = 0; i < 30; i++) {
                const curve = new THREE.CatmullRomCurve3([
                    new THREE.Vector3((Math.random() - 0.5) * 10, 1, (Math.random() - 0.5) * 10),
                    new THREE.Vector3((Math.random() - 0.5) * 8, 0.5, (Math.random() - 0.5) * 8),
                    new THREE.Vector3((Math.random() - 0.5) * 6, 0, (Math.random() - 0.5) * 6),
                    new THREE.Vector3((Math.random() - 0.5) * 4, -0.5, (Math.random() - 0.5) * 4)
                ]);

                const geometry = new THREE.TubeGeometry(curve, 20, 0.08, 6, false);
                const material = new THREE.MeshPhongMaterial({ color: 0xffd700 });
                const noodle = new THREE.Mesh(geometry, material);
                noodleGroup.add(noodle);
            }

            ramenGroup.add(noodleGroup);
        }

        function createToppings() {
            // Egg
            const eggGeometry = new THREE.SphereGeometry(1.5, 16, 12);
            const eggMaterial = new THREE.MeshPhongMaterial({ color: 0xfff8dc });
            const egg = new THREE.Mesh(eggGeometry, eggMaterial);
            egg.position.set(-3, 1.5, 2);
            egg.scale.y = 0.7;
            egg.castShadow = true;
            toppings.push(egg);

            // Egg yolk
            const yolkGeometry = new THREE.SphereGeometry(0.8, 16, 12);
            const yolkMaterial = new THREE.MeshPhongMaterial({ color: 0xffa500 });
            const yolk = new THREE.Mesh(yolkGeometry, yolkMaterial);
            yolk.position.set(-3, 1.2, 2);
            yolk.castShadow = true;
            toppings.push(yolk);

            // Chashu pork
            const chashuGeometry = new THREE.CylinderGeometry(1.5, 1.5, 0.3, 16);
            const chashuMaterial = new THREE.MeshPhongMaterial({ color: 0x8b4513 });
            const chashu = new THREE.Mesh(chashuGeometry, chashuMaterial);
            chashu.position.set(3, 1.2, -2);
            chashu.rotation.z = Math.PI / 6;
            chashu.castShadow = true;
            toppings.push(chashu);

            // Green onions
            for (let i = 0; i < 8; i++) {
                const onionGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 8);
                const onionMaterial = new THREE.MeshPhongMaterial({ color: 0x228b22 });
                const onion = new THREE.Mesh(onionGeometry, onionMaterial);
                onion.position.set(
                    (Math.random() - 0.5) * 8,
                    1.5,
                    (Math.random() - 0.5) * 8
                );
                onion.rotation.x = (Math.random() - 0.5) * Math.PI / 4;
                onion.rotation.z = (Math.random() - 0.5) * Math.PI / 4;
                onion.castShadow = true;
                toppings.push(onion);
            }

            toppings.forEach(topping => {
                ramenGroup.add(topping);
            });
        }

        function createChopsticks() {
            const chopstickGroup = new THREE.Group();
            
            for (let i = 0; i < 2; i++) {
                const geometry = new THREE.CylinderGeometry(0.15, 0.1, 12, 8);
                const material = new THREE.MeshPhongMaterial({ color: 0x8b4513 });
                const chopstick = new THREE.Mesh(geometry, material);
                chopstick.position.set(10 + i * 0.5, 0, -5);
                chopstick.rotation.z = Math.PI / 2 + (i * 0.1);
                chopstick.castShadow = true;
                chopstickGroup.add(chopstick);
            }

            scene.add(chopstickGroup);
        }

        function setupEventListeners() {
            // Window resize
            window.addEventListener('resize', onWindowResize, false);

            // Reset camera button
            document.getElementById('reset-camera').addEventListener('click', () => {
                camera.position.set(15, 10, 15);
                controls.reset();
            });

            // Wireframe toggle
            let wireframeMode = false;
            document.getElementById('toggle-wireframe').addEventListener('click', () => {
                wireframeMode = !wireframeMode;
                scene.traverse((child) => {
                    if (child.material) {
                        child.material.wireframe = wireframeMode;
                    }
                });
            });
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function animate() {
            animationId = requestAnimationFrame(animate);
            
            const currentTime = performance.now();

            // Update controls
            controls.update();

            // Rotate ramen bowl slowly
            if (ramenGroup) {
                ramenGroup.rotation.y += 0.003;
            }

            // Animate broth surface
            if (broth) {
                broth.position.y = 0.5 + Math.sin(currentTime * 0.001) * 0.05;
            }

            // Update FPS counter (every 60 frames for performance)
            if (Math.floor(currentTime / 16.67) % 60 === 0) {
                stats.fps = Math.round(1000 / (currentTime - stats.lastTime));
                document.getElementById('fps').textContent = stats.fps || 60;
                stats.lastTime = currentTime;
            }

            // Render
            renderer.render(scene, camera);
        }

        // Initialize everything when page loads
        window.addEventListener('load', init);
    
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
      

<div className="fixed inset-0 bg-gray-950/90 flex items-center justify-center z-50" id="loading">
<div className="text-center space-y-4">
<div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
<p className="text-white/80 font-medium">Preparing your ramen...</p>
</div>
</div>

<header className="relative z-10 border-b border-white/10 fade-in">
<div className="max-w-7xl mx-auto px-4 py-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="w-8 h-8 text-indigo-400" data-lucide="soup"></i>
<h1 className="text-2xl font-bold tracking-tight">3D Ramen Bowl</h1>
</div>
<div className="flex items-center gap-4">
<button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all duration-200 flex items-center gap-2" id="reset-camera">
<i className="w-4 h-4" data-lucide="rotate-3d"></i>
                        Reset View
                    </button>
<button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all duration-200 flex items-center gap-2" id="toggle-wireframe">
<i className="w-4 h-4" data-lucide="grid-3x3"></i>
                        Wireframe
                    </button>
</div>
</div>
</div>
</header>

<main className="relative">

<div className="relative h-screen">
<canvas className="w-full h-full" id="canvas"></canvas>

<div className="absolute top-6 left-6 glass-card p-4 rounded-xl max-w-sm slide-up delay-200">
<h3 className="font-semibold mb-3 flex items-center gap-2">
<i className="w-4 h-4 text-indigo-400" data-lucide="mouse"></i>
                    Controls
                </h3>
<div className="space-y-2 text-sm text-white/80">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
<span>Drag to rotate camera</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
<span>Scroll to zoom in/out</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
<span>Right click + drag to pan</span>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 glass-card p-6 rounded-xl max-w-md slide-up delay-400">
<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-indigo-400" data-lucide="info"></i>
                    Tonkotsu Ramen
                </h3>
<p className="text-white/80 text-sm leading-relaxed mb-4">
                    A rich, creamy pork bone broth simmered for 24 hours, topped with tender chashu pork, 
                    soft-boiled egg, green onions, and perfectly cooked ramen noodles.
                </p>
<div className="grid grid-cols-2 gap-4 text-sm">
<div className="glass-card p-3 rounded-lg">
<div className="font-medium text-indigo-300">Vertices</div>
<div className="text-xl font-bold" id="vertex-count">2,847</div>
</div>
<div className="glass-card p-3 rounded-lg">
<div className="font-medium text-indigo-300">Faces</div>
<div className="text-xl font-bold" id="face-count">1,692</div>
</div>
</div>
</div>

<div className="absolute top-6 right-6 glass-card p-4 rounded-xl slide-up delay-600">
<div className="flex items-center gap-3">
<div className="text-center">
<div className="text-xs text-white/60">FPS</div>
<div className="text-lg font-bold text-green-400" id="fps">60</div>
</div>
<div className="w-px h-8 bg-white/20"></div>
<div className="text-center">
<div className="text-xs text-white/60">Draw Calls</div>
<div className="text-lg font-bold text-blue-400" id="draw-calls">12</div>
</div>
</div>
</div>
</div>

<section className="py-20 px-4">
<div className="max-w-6xl mx-auto">
<h2 className="text-4xl font-bold text-center mb-16 tracking-tight slide-up delay-800">
                    Crafted with Three.js Magic
                </h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="glass-card p-8 rounded-2xl slide-up delay-200 hover:scale-105 transition-transform duration-300">
<i className="w-12 h-12 text-yellow-400 mb-6" data-lucide="zap"></i>
<h3 className="text-xl font-semibold mb-4">Real-time Rendering</h3>
<p className="text-white/70">WebGL-powered 3D graphics with smooth 60fps performance and dynamic lighting effects.</p>
</div>
<div className="glass-card p-8 rounded-2xl slide-up delay-400 hover:scale-105 transition-transform duration-300">
<i className="w-12 h-12 text-purple-400 mb-6" data-lucide="palette"></i>
<h3 className="text-xl font-semibold mb-4">Realistic Materials</h3>
<p className="text-white/70">Physically-based rendering with realistic textures, reflections, and material properties.</p>
</div>
<div className="glass-card p-8 rounded-2xl slide-up delay-600 hover:scale-105 transition-transform duration-300">
<i className="w-12 h-12 text-cyan-400 mb-6" data-lucide="move-3d"></i>
<h3 className="text-xl font-semibold mb-4">Interactive Experience</h3>
<p className="text-white/70">Full camera control with orbit, zoom, and pan functionality for immersive exploration.</p>
</div>
</div>
</div>
</section>
</main>

<script type="importmap" dangerouslySetInnerHTML={{
  __html: `
    {
        "imports": {
            "three": "https://unpkg.com/three@0.158.0/build/three.module.js",
            "three/addons/": "https://unpkg.com/three@0.158.0/examples/jsm/"
        }
    }
    `
}} />


    </>
  );
}
