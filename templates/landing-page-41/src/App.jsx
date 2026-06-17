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



        document.addEventListener("DOMContentLoaded", () => {
            const container = document.getElementById('canvas-container');
            
            // Setup Scene
            const scene = new THREE.Scene();
            // Optional: subtle fog to blend the edges
            scene.fog = new THREE.FogExp2(0x09090b, 0.04);

            // Setup Camera
            const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 12;

            // Setup Renderer
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // optimize for high DPI
            container.appendChild(renderer.domElement);

            // Core/Nucleus
            const nucleusGroup = new THREE.Group();
            scene.add(nucleusGroup);

            // Inner solid core
            const coreGeo = new THREE.IcosahedronGeometry(0.8, 1);
            const coreMat = new THREE.MeshBasicMaterial({ 
                color: 0x3b82f6, // blue-500
                wireframe: true,
                transparent: true,
                opacity: 0.6
            });
            const core = new THREE.Mesh(coreGeo, coreMat);
            nucleusGroup.add(core);

            // Outer glowing aura
            const auraGeo = new THREE.SphereGeometry(1.2, 32, 32);
            const auraMat = new THREE.MeshBasicMaterial({
                color: 0x60a5fa, // blue-400
                transparent: true,
                opacity: 0.1,
                blending: THREE.AdditiveBlending
            });
            const aura = new THREE.Mesh(auraGeo, auraMat);
            nucleusGroup.add(aura);

            // Orbits and Electrons
            const electrons = [];
            const numOrbits = 4;
            const orbitRadius = 4.5;

            for (let i = 0; i < numOrbits; i++) {
                // The orbit path (visual only)
                const orbitGeo = new THREE.TorusGeometry(orbitRadius, 0.015, 16, 100);
                const orbitMat = new THREE.MeshBasicMaterial({ 
                    color: 0x3f3f46, // zinc-700
                    transparent: true, 
                    opacity: 0.4 
                });
                const orbit = new THREE.Mesh(orbitGeo, orbitMat);
                
                // Randomize orbit angles
                orbit.rotation.x = Math.random() * Math.PI;
                orbit.rotation.y = Math.random() * Math.PI;
                scene.add(orbit);

                // Pivot group for the electron to rotate around the center
                const pivot = new THREE.Group();
                pivot.rotation.copy(orbit.rotation); // Align pivot with the orbit's plane
                scene.add(pivot);

                // The electron particle
                const electronGeo = new THREE.SphereGeometry(0.15, 16, 16);
                const electronMat = new THREE.MeshBasicMaterial({ 
                    color: 0xffffff,
                    transparent: true,
                    opacity: 0.9,
                    blending: THREE.AdditiveBlending
                });
                const electron = new THREE.Mesh(electronGeo, electronMat);
                
                // Position electron on the edge of the orbit
                electron.position.set(orbitRadius, 0, 0);
                pivot.add(electron);

                // Store for animation
                electrons.push({
                    pivot: pivot,
                    speed: 0.01 + (Math.random() * 0.015) // varied speeds
                });
            }

            // Mouse Interaction
            let mouseX = 0;
            let mouseY = 0;
            let targetX = 0;
            let targetY = 0;
            const windowHalfX = window.innerWidth / 2;
            const windowHalfY = window.innerHeight / 2;

            document.addEventListener('mousemove', (event) => {
                mouseX = (event.clientX - windowHalfX);
                mouseY = (event.clientY - windowHalfY);
            });

            // Animation Loop
            const clock = new THREE.Clock();

            function animate() {
                requestAnimationFrame(animate);
                
                const delta = clock.getDelta();
                const time = clock.getElapsedTime();

                // Rotate nucleus
                nucleusGroup.rotation.y += 0.005;
                nucleusGroup.rotation.x += 0.003;
                
                // Pulse nucleus
                const scale = 1 + Math.sin(time * 2) * 0.05;
                nucleusGroup.scale.set(scale, scale, scale);

                // Move electrons around orbits
                electrons.forEach(el => {
                    el.pivot.rotateZ(el.speed);
                });

                // Subtle parallax based on mouse
                targetX = mouseX * 0.001;
                targetY = mouseY * 0.001;
                
                scene.rotation.y += 0.05 * (targetX - scene.rotation.y);
                scene.rotation.x += 0.05 * (targetY - scene.rotation.x);

                renderer.render(scene, camera);
            }

            animate();

            // Handle Resize
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-800/50 bg-zinc-950/50 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-lg font-semibold tracking-tighter text-white uppercase" href="#">QNTM</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
<a className="hover:text-zinc-50 transition-colors" href="#">Platform</a>
<a className="hover:text-zinc-50 transition-colors" href="#">Solutions</a>
<a className="hover:text-zinc-50 transition-colors" href="#">Documentation</a>
</div>
</div>
<div className="flex items-center gap-4 text-sm font-medium">
<a className="hidden md:block text-zinc-400 hover:text-zinc-50 transition-colors" href="#">Sign in</a>
<a className="rounded-full bg-white px-4 py-2 text-zinc-950 hover:bg-zinc-200 transition-colors" href="#">Get Started</a>
</div>
</div>
</nav>

<section className="relative h-screen min-h-[40rem] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 pointer-events-none opacity-60" id="canvas-container"></div>

<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/0 via-zinc-950/20 to-zinc-950 pointer-events-none"></div>

<div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto mt-16">
<a className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-md hover:bg-zinc-800/60 transition-colors" href="#">
<span className="flex h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
                Introducing Quantum Compute v2.0
                <iconify-icon className="text-zinc-500" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white drop-shadow-sm">
                Compute power at the <br className="hidden sm:block"/> atomic level.
            </h1>
<p className="mt-6 max-w-2xl text-base md:text-lg text-zinc-400">
                Harness the infrastructure of tomorrow, today. Build, scale, and deploy complex models with sub-millisecond latency using our next-generation distributed architecture.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
<button className="w-full sm:w-auto rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                    Start Building
                </button>
<button className="w-full sm:w-auto rounded-full border border-zinc-800 bg-zinc-900/50 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800 hover:border-zinc-700 transition-colors backdrop-blur-sm flex items-center justify-center gap-2">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
                    Read the Docs
                </button>
</div>
</div>
</section>

<section className="relative py-24 sm:py-32 z-20 bg-zinc-950">
<div className="mx-auto max-w-7xl px-6">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Engineered for extreme scale.</h2>
<p className="mt-4 text-base text-zinc-400">Everything you need to run high-performance workloads without managing the underlying physical infrastructure.</p>
</div>
<div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative flex flex-col items-start justify-between rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-8 hover:bg-zinc-900/50 transition-colors">
<div>
<div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300">
<iconify-icon icon="solar:cpu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="mt-6 text-lg font-medium text-white tracking-tight">Atomic Processing</h3>
<p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                            Distribute your computational tasks across millions of micro-nodes automatically, ensuring optimal resource utilization.
                        </p>
</div>
</div>

<div className="group relative flex flex-col items-start justify-between rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-8 hover:bg-zinc-900/50 transition-colors">
<div>
<div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300">
<iconify-icon icon="solar:shield-network-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="mt-6 text-lg font-medium text-white tracking-tight">Quantum Security</h3>
<p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                            State-of-the-art encryption at rest and in transit. Your data is fragmented and secured using post-quantum cryptographic algorithms.
                        </p>
</div>
</div>

<div className="group relative flex flex-col items-start justify-between rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-8 hover:bg-zinc-900/50 transition-colors">
<div>
<div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="mt-6 text-lg font-medium text-white tracking-tight">Zero-Latency Mesh</h3>
<p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                            Our global network utilizes predictive routing to position your data exactly where it needs to be, milliseconds before it's requested.
                        </p>
</div>
</div>
</div>
</div>
</section>



    </>
  );
}
