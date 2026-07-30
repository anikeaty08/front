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



        // Init Icons
        lucide.createIcons({
            attrs: {
                "stroke-width": 1.5
            }
        });

        // Intersection Observer for Text Reveals
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // ------------------------------------------------------------
        // THREE.JS CONFIGURATION
        // ------------------------------------------------------------

        const scenes = [];

        // Helper to create basic scene structure
        function createScene(containerId, initMeshFn, animateFn) {
            const container = document.getElementById(containerId);
            if (!container) return;

            const scene = new THREE.Scene();
            scene.fog = new THREE.FogExp2(0x050505, 0.05);

            const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
            camera.position.z = 5;

            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(renderer.domElement);

            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(ambientLight);

            const pointLight = new THREE.PointLight(0xffffff, 1);
            pointLight.position.set(5, 5, 5);
            scene.add(pointLight);
            
            // Adjusted light color to match Blender orange vibe
            const pointLight2 = new THREE.PointLight(0xf97316, 2); 
            pointLight2.position.set(-5, -5, 2);
            scene.add(pointLight2);

            const mesh = initMeshFn(scene);

            window.addEventListener('resize', () => {
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            });

            scenes.push({ renderer, scene, camera, mesh, animateFn, container });
        }

        // ------------------------------------------------------------
        // SCENE 1: HERO (Abstract Landscape - Procedural vibe)
        // ------------------------------------------------------------
        createScene('hero-canvas', (scene) => {
            const geometry = new THREE.IcosahedronGeometry(2.5, 4);
            const material = new THREE.MeshStandardMaterial({
                color: 0x111111,
                wireframe: true,
                roughness: 0.5,
                metalness: 0.8
            });
            const sphere = new THREE.Mesh(geometry, material);
            scene.add(sphere);

            const pGeo = new THREE.BufferGeometry();
            const pCount = 200;
            const pPos = new Float32Array(pCount * 3);
            for(let i=0; i<pCount*3; i++) pPos[i] = (Math.random()-0.5)*10;
            pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
            const pMat = new THREE.PointsMaterial({size: 0.02, color: 0xffffff});
            const particles = new THREE.Points(pGeo, pMat);
            scene.add(particles);

            return { sphere, particles };
        }, (data, scrollY, time) => {
            data.sphere.rotation.y = time * 0.1;
            data.sphere.rotation.x = scrollY * 0.0005;
            data.particles.rotation.y = -time * 0.05;
        });

        // ------------------------------------------------------------
        // SCENE 2: BLENDER MODELLING (Orange Wireframe)
        // ------------------------------------------------------------
        createScene('canvas-modelling', (scene) => {
            const geometry = new THREE.TorusKnotGeometry(1.2, 0.4, 150, 20);
            
            const wireframe = new THREE.WireframeGeometry(geometry);
            const line = new THREE.LineSegments(wireframe);
            line.material.depthTest = false;
            line.material.opacity = 0.3;
            line.material.transparent = true;
            line.material.color = new THREE.Color(0xf97316); // Blender Orange
            
            scene.add(line);
            
            const solidMat = new THREE.MeshBasicMaterial({ color: 0x050505 });
            const solid = new THREE.Mesh(geometry, solidMat);
            scene.add(solid);

            return { line, solid };
        }, (data, scrollY, time) => {
            data.line.rotation.x = time * 0.2;
            data.line.rotation.y = time * 0.3;
            data.solid.rotation.x = time * 0.2;
            data.solid.rotation.y = time * 0.3;
        });

        // ------------------------------------------------------------
        // SCENE 3: UNREAL REALTIME (Blue Particles/Niagara vibe)
        // ------------------------------------------------------------
        createScene('canvas-simulation', (scene) => {
            const count = 1000;
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(count * 3);
            const originalY = new Float32Array(count); 

            for (let i = 0; i < count; i++) {
                positions[i * 3] = (Math.random() - 0.5) * 6;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 2;
                originalY[i] = positions[i * 3 + 1];
                positions[i * 3 + 2] = (Math.random() - 0.5) * 3;
            }

            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            
            const material = new THREE.PointsMaterial({
                color: 0x3b82f6, // Unreal Blue
                size: 0.03,
                transparent: true,
                opacity: 0.8
            });

            const particles = new THREE.Points(geometry, material);
            scene.add(particles);

            return { particles, positions, originalY, count, geometry };
        }, (data, scrollY, time) => {
            const positions = data.geometry.attributes.position.array;
            for (let i = 0; i < data.count; i++) {
                const x = positions[i * 3];
                positions[i * 3 + 1] = data.originalY[i] + Math.sin(time * 2 + x) * 0.5;
            }
            data.geometry.attributes.position.needsUpdate = true;
            data.particles.rotation.y = scrollY * 0.0002;
        });

        // ------------------------------------------------------------
        // SCENE 4: ADOBE/COMPOSITING (Purple Layers)
        // ------------------------------------------------------------
        createScene('canvas-manipulation', (scene) => {
            const group = new THREE.Group();
            const size = 0.4;
            const gap = 0.05;

            for(let x=-1; x<=1; x+=2) {
                for(let y=-1; y<=1; y+=2) {
                    for(let z=-1; z<=1; z+=2) {
                        const geometry = new THREE.BoxGeometry(size, size, size);
                        const material = new THREE.MeshStandardMaterial({ color: 0xa855f7, roughness: 0.1 }); // Adobe Purple
                        const mesh = new THREE.Mesh(geometry, material);
                        
                        mesh.userData = { 
                            initial: new THREE.Vector3(x*(size/2+gap), y*(size/2+gap), z*(size/2+gap)),
                            direction: new THREE.Vector3(x, y, z)
                        };
                        mesh.position.copy(mesh.userData.initial);
                        group.add(mesh);
                    }
                }
            }
            scene.add(group);
            return { group };
        }, (data, scrollY, time, container) => {
            const rect = container.getBoundingClientRect();
            const centerOffset = (window.innerHeight/2 - rect.top) * 0.003;
            const expansion = Math.max(0, Math.min(1.5, centerOffset)); 

            data.group.children.forEach(mesh => {
                const target = mesh.userData.initial.clone().add(
                    mesh.userData.direction.clone().multiplyScalar(expansion)
                );
                mesh.position.lerp(target, 0.1);
                mesh.rotation.x += 0.01;
                mesh.rotation.y += 0.01;
            });
            
            data.group.rotation.y = time * 0.2;
        });

        // Loop
        const clock = new THREE.Clock();

        function animate() {
            requestAnimationFrame(animate);
            const time = clock.getElapsedTime();
            const scrollY = window.scrollY;

            scenes.forEach(s => {
                const rect = s.container.getBoundingClientRect();
                if (rect.bottom > 0 && rect.top < window.innerHeight) {
                    s.animateFn(s.mesh, scrollY, time, s.container);
                    s.renderer.render(s.scene, s.camera);
                }
            });
        }
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center text-black font-bold text-[10px] group-hover:rotate-180 transition-transform duration-500">3D</div>
<span className="text-sm font-semibold tracking-tight text-white group-hover:text-neutral-300 transition-colors">3DVMSTUDIO</span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#pipeline">Pipeline</a>
<a className="hover:text-white transition-colors" href="#work">Showcase</a>
<a className="hover:text-white transition-colors" href="#stack">Stack</a>
</div>
<a className="hidden md:flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white border border-white/10 rounded-full hover:bg-white/10 transition-all group" href="#contact">
                Start Project
                <i className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</nav>

<header className="relative h-screen min-h-[800px] flex flex-col justify-center items-center overflow-hidden">

<div className="absolute inset-0 z-0 opacity-40" id="hero-canvas"></div>

<div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950 z-10 pointer-events-none"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz4KPC9zdmc+')] opacity-20 z-10 pointer-events-none"></div>
<div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-0">
<div className="reveal inline-flex items-center gap-3 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
<div className="flex items-center gap-1.5 border-r border-white/10 pr-3">
<i className="w-3 h-3 text-orange-400" data-lucide="box"></i>
<i className="w-3 h-3 text-blue-400" data-lucide="zap"></i>
<i className="w-3 h-3 text-purple-400" data-lucide="aperture"></i>
</div>
<span className="text-[10px] font-medium tracking-widest uppercase text-neutral-300">Blender • Unreal • Adobe</span>
</div>
<h1 className="reveal text-5xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-white mb-8 leading-[0.85] mix-blend-screen">
                DIGITAL<br /><span className="text-neutral-500">COMPOSITE</span>
</h1>
<p className="reveal text-neutral-400 text-sm md:text-lg font-light max-w-lg mx-auto leading-relaxed mb-12">
                Procedural workflows meeting real-time rendering. We engineer assets in Blender, simulate in Houdini, and render in Unreal Engine 5.
            </p>
<div className="reveal flex flex-col md:flex-row items-center justify-center gap-4">
<a className="group px-8 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition-all w-full md:w-auto text-center flex items-center justify-center gap-2" href="#pipeline">
                    View Pipeline
                    <i className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" data-lucide="arrow-down"></i>
</a>
</div>
</div>
</header>

<div className="relative z-30 bg-neutral-950" id="pipeline">

<section className="min-h-screen flex items-center py-24 relative overflow-hidden border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<div className="reveal">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-orange-500/10 rounded border border-orange-500/20">
<i className="w-5 h-5 text-orange-500" data-lucide="box-select"></i>
</div>
<span className="text-xs font-medium uppercase tracking-widest text-neutral-500">01 — Asset Creation</span>
</div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">Blender <br /><span className="text-neutral-600">Geometry Nodes.</span></h2>
<p className="text-neutral-400 text-lg font-light leading-relaxed mb-8 max-w-md">
                            Non-destructive procedural modelling using Blender's advanced node systems. We deliver clean topology optimized for Nanite visualization.
                        </p>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="glass-panel p-4 rounded-lg">
<h4 className="text-white text-sm font-medium mb-1">Cycles X</h4>
<p className="text-neutral-500 text-xs">Path-traced accuracy.</p>
</div>
<div className="glass-panel p-4 rounded-lg">
<h4 className="text-white text-sm font-medium mb-1">Substance</h4>
<p className="text-neutral-500 text-xs">PBR Texturing workflow.</p>
</div>
</div>
<ul className="space-y-3 text-sm text-neutral-400 font-light">
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-orange-500" data-lucide="check"></i> Hard Surface (Boxcutter/HardOps)
                            </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-orange-500" data-lucide="check"></i> Python Scripting Automation
                            </li>
</ul>
</div>
</div>

<div className="order-1 lg:order-2 h-[400px] lg:h-[600px] relative reveal delay-200">
<div className="glow-spot top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500/10 blur-[80px]"></div>
<div className="canvas-wrapper" id="canvas-modelling"></div>
</div>
</div>
</section>

<section className="min-h-screen flex items-center py-24 relative overflow-hidden bg-neutral-900/20 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-1 h-[400px] lg:h-[600px] relative reveal">
<div className="glow-spot top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 blur-[80px]"></div>
<div className="canvas-wrapper" id="canvas-simulation"></div>
</div>

<div className="order-2">
<div className="reveal delay-200">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-blue-500/10 rounded border border-blue-500/20">
<i className="w-5 h-5 text-blue-500" data-lucide="zap"></i>
</div>
<span className="text-xs font-medium uppercase tracking-widest text-neutral-500">02 — Real-time</span>
</div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">Unreal Engine <br /><span className="text-neutral-600">Lumen & Nanite.</span></h2>
<p className="text-neutral-400 text-lg font-light leading-relaxed mb-8 max-w-md">
                            Direct integration into UE5 for cinematic sequencing and interactive experiences. We utilize Blueprints for logic and Niagara for VFX.
                        </p>
<div className="glass-panel p-6 rounded-xl border-l-2 border-l-blue-500 mb-8">
<p className="text-neutral-300 italic text-sm">"Real-time rendering changes the iteration loop from hours to milliseconds."</p>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300">Blueprints</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300">Niagara VFX</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300">Metahuman</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300">Quixel</span>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen flex items-center py-24 relative overflow-hidden border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<div className="reveal">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-purple-500/10 rounded border border-purple-500/20">
<i className="w-5 h-5 text-purple-500" data-lucide="layers"></i>
</div>
<span className="text-xs font-medium uppercase tracking-widest text-neutral-500">03 — Post Production</span>
</div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">Adobe <br /><span className="text-neutral-600">Compositing.</span></h2>
<p className="text-neutral-400 text-lg font-light leading-relaxed mb-8 max-w-md">
                            Final polish in After Effects. We handle EXR multi-pass compositing, motion graphics, and color grading to achieve the broadcast look.
                        </p>
<div className="flex items-center gap-8 mb-8 pt-4 border-t border-white/5">
<div>
<div className="text-3xl font-medium text-white tracking-tight">EXR</div>
<div className="text-xs text-neutral-500 mt-1">Multi-layer</div>
</div>
<div>
<div className="text-3xl font-medium text-white tracking-tight">ACES</div>
<div className="text-xs text-neutral-500 mt-1">Color Space</div>
</div>
<div>
<div className="text-3xl font-medium text-white tracking-tight">AE</div>
<div className="text-xs text-neutral-500 mt-1">Motion Graph</div>
</div>
</div>
<a className="inline-flex items-center text-sm font-medium text-white hover:text-neutral-300 transition-colors border-b border-white pb-0.5" href="#work">
                            View Case Studies <i className="w-3 h-3 ml-2" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>

<div className="order-1 lg:order-2 h-[400px] lg:h-[600px] relative reveal delay-200">
<div className="glow-spot top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-500/10 blur-[80px]"></div>
<div className="canvas-wrapper" id="canvas-manipulation"></div>
</div>
</div>
</section>
</div>

<section className="py-32 bg-neutral-950 border-t border-white/5" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-start mb-20 reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-4">Selected Works</h2>
<div className="w-full h-[1px] bg-white/10 mt-6"></div>
</div>

<div className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 mb-32 items-center reveal">
<div className="md:col-span-7 relative overflow-hidden rounded-lg border border-white/5">
<img alt="Blender Project" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop" />
</div>
<div className="md:col-span-5 md:pl-8">
<span className="text-orange-500 text-xs font-medium uppercase tracking-widest mb-2 block">Blender • Substance</span>
<h3 className="text-3xl font-medium text-white mb-4 tracking-tight">Cyber-Kinetic Arm</h3>
<p className="text-neutral-400 font-light mb-6 leading-relaxed">
                        A full rigged mechanical arm concept. Modelled in Blender 4.0 using HardOps, textured in Substance Painter, rendered in Cycles X.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] px-2 py-1 border border-white/10 rounded text-neutral-400 bg-white/5">Blender Cycles</span>
<span className="text-[10px] px-2 py-1 border border-white/10 rounded text-neutral-400 bg-white/5">Substance Painter</span>
</div>
</div>
</div>

<div className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 mb-32 items-center reveal">
<div className="md:col-span-5 md:pr-8 order-2 md:order-1">
<span className="text-blue-500 text-xs font-medium uppercase tracking-widest mb-2 block">Unreal Engine 5</span>
<h3 className="text-3xl font-medium text-white mb-4 tracking-tight">Neo-Tokyo Interior</h3>
<p className="text-neutral-400 font-light mb-6 leading-relaxed">
                        Real-time architectural visualization. Utilizing Lumen for dynamic global illumination and Nanite for infinite geometry detail.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] px-2 py-1 border border-white/10 rounded text-neutral-400 bg-white/5">UE5 Lumen</span>
<span className="text-[10px] px-2 py-1 border border-white/10 rounded text-neutral-400 bg-white/5">Niagara</span>
</div>
</div>
<div className="md:col-span-7 relative overflow-hidden rounded-lg border border-white/5 order-1 md:order-2">
<img alt="Unreal Project" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" />
</div>
</div>

<div className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center reveal">
<div className="md:col-span-7 relative overflow-hidden rounded-lg border border-white/5">
<img alt="Adobe Project" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2670&auto=format&fit=crop" />
</div>
<div className="md:col-span-5 md:pl-8">
<span className="text-purple-500 text-xs font-medium uppercase tracking-widest mb-2 block">Adobe After Effects</span>
<h3 className="text-3xl font-medium text-white mb-4 tracking-tight">Liquid Chrome</h3>
<p className="text-neutral-400 font-light mb-6 leading-relaxed">
                        Commercial motion graphics piece. Simulated fluid dynamics composited with Adobe After Effects using EXR cryptomattes.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] px-2 py-1 border border-white/10 rounded text-neutral-400 bg-white/5">After Effects</span>
<span className="text-[10px] px-2 py-1 border border-white/10 rounded text-neutral-400 bg-white/5">Red Giant</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5" id="stack">
<div className="max-w-7xl mx-auto px-6 text-center">
<h3 className="text-sm font-medium text-neutral-500 mb-12 uppercase tracking-widest">Our Technical Stack</h3>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60">
<div className="flex flex-col items-center gap-2 group">
<i className="w-8 h-8 text-white group-hover:text-orange-500 transition-colors" data-lucide="box"></i>
<span className="text-xs font-semibold text-neutral-400">BLENDER</span>
</div>
<div className="flex flex-col items-center gap-2 group">
<i className="w-8 h-8 text-white group-hover:text-blue-500 transition-colors" data-lucide="zap"></i>
<span className="text-xs font-semibold text-neutral-400">UNREAL 5</span>
</div>
<div className="flex flex-col items-center gap-2 group">
<i className="w-8 h-8 text-white group-hover:text-purple-500 transition-colors" data-lucide="layers"></i>
<span className="text-xs font-semibold text-neutral-400">ADOBE AE</span>
</div>
<div className="flex flex-col items-center gap-2 group">
<i className="w-8 h-8 text-white group-hover:text-emerald-500 transition-colors" data-lucide="palette"></i>
<span className="text-xs font-semibold text-neutral-400">SUBSTANCE</span>
</div>
</div>
</div>
</section>

<footer className="py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden" id="contact">
<div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-7xl font-semibold tracking-tighter text-white mb-8">Start Production.</h2>
<p className="text-neutral-400 mb-10 text-lg font-light">Booking for Q4 2024. Specialized in Blender to Unreal pipelines.</p>
<a className="inline-flex items-center gap-3 px-10 py-4 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-all hover:scale-105" href="mailto:hello@3dvm.studio">
                Contact Studio
            </a>
<div className="mt-20 flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-xs text-neutral-600 font-medium">
<p>© 2024 3DVMSTUDIO</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">ArtStation</a>
<a className="hover:text-white transition-colors" href="#">Behance</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
