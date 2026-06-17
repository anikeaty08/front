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



        // Initialize Icons
        lucide.createIcons();

        // --------------------------------------------------------
        // THREE.JS SETUP
        // --------------------------------------------------------
        
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x030304, 0.04);

        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.set(0, 0, 9);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        container.appendChild(renderer.domElement);

        // --------------------------------------------------------
        // LIGHTING
        // --------------------------------------------------------
        
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        scene.add(ambientLight);

        // Key Light (Cool Blue)
        const keyLight = new THREE.DirectionalLight(0x60a5fa, 2);
        keyLight.position.set(5, 5, 5);
        scene.add(keyLight);

        // Fill Light (Cyan)
        const fillLight = new THREE.PointLight(0x06b6d4, 1);
        fillLight.position.set(-5, 0, 5);
        scene.add(fillLight);

        // Rim Light
        const rimLight = new THREE.SpotLight(0x3b82f6, 5);
        rimLight.position.set(0, 5, -5);
        rimLight.lookAt(0,0,0);
        scene.add(rimLight);

        // --------------------------------------------------------
        // OBJECT: THREE INTERCONNECTED LAYERS
        // --------------------------------------------------------
        
        const layersGroup = new THREE.Group();
        scene.add(layersGroup);

        // Create 3 interconnected rings representing the 3 layers
        const ringRadius = 1.2;
        const ringTube = 0.08;
        
        // Layer 1 - Education (Top)
        const ring1Geo = new THREE.TorusGeometry(ringRadius, ringTube, 16, 64);
        const ring1Mat = new THREE.MeshStandardMaterial({
            color: 0x3b82f6,
            emissive: 0x3b82f6,
            emissiveIntensity: 0.5,
            roughness: 0.2,
            metalness: 0.8
        });
        const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
        ring1.rotation.x = Math.PI / 2;
        ring1.position.y = 0.8;
        layersGroup.add(ring1);

        // Layer 2 - Employment (Middle)
        const ring2Geo = new THREE.TorusGeometry(ringRadius, ringTube, 16, 64);
        const ring2Mat = new THREE.MeshStandardMaterial({
            color: 0x06b6d4,
            emissive: 0x06b6d4,
            emissiveIntensity: 0.5,
            roughness: 0.2,
            metalness: 0.8
        });
        const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
        ring2.rotation.x = Math.PI / 2;
        ring2.rotation.y = Math.PI / 3;
        ring2.position.y = 0;
        layersGroup.add(ring2);

        // Layer 3 - Economics (Bottom)
        const ring3Geo = new THREE.TorusGeometry(ringRadius, ringTube, 16, 64);
        const ring3Mat = new THREE.MeshStandardMaterial({
            color: 0x0ea5e9,
            emissive: 0x0ea5e9,
            emissiveIntensity: 0.5,
            roughness: 0.2,
            metalness: 0.8
        });
        const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
        ring3.rotation.x = Math.PI / 2;
        ring3.rotation.y = -Math.PI / 3;
        ring3.position.y = -0.8;
        layersGroup.add(ring3);

        // Central Core (Nexus point)
        const coreGeo = new THREE.SphereGeometry(0.3, 32, 32);
        const coreMat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            emissive: 0x3b82f6,
            emissiveIntensity: 1,
            roughness: 0.1,
            metalness: 0.9
        });
        const core = new THREE.Mesh(coreGeo, coreMat);
        layersGroup.add(core);

        // Connection Lines between layers
        const lineMat = new THREE.LineBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.3 });
        
        // Create connection lines
        for(let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2;
            const points = [];
            points.push(new THREE.Vector3(0, 0, 0));
            points.push(new THREE.Vector3(
                Math.cos(angle) * ringRadius * 1.2,
                Math.sin(angle * 2) * 0.8,
                Math.sin(angle) * ringRadius * 1.2
            ));
            const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
            const line = new THREE.Line(lineGeo, lineMat);
            layersGroup.add(line);
        }

        // Floating Particles (Data flow)
        const particleCount = 200;
        const pGeo = new THREE.BufferGeometry();
        const pPos = new Float32Array(particleCount * 3);
        const pSizes = new Float32Array(particleCount);

        for(let i=0; i<particleCount; i++) {
            const r = 2 + Math.random() * 3;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            
            pPos[i*3] = r * Math.sin(phi) * Math.cos(theta);
            pPos[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
            pPos[i*3+2] = r * Math.cos(phi);
            
            pSizes[i] = Math.random();
        }

        pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
        pGeo.setAttribute('size', new THREE.BufferAttribute(pSizes, 1));

        const pMat = new THREE.PointsMaterial({
            color: 0x60a5fa,
            size: 0.03,
            transparent: true,
            opacity: 0.6,
            sizeAttenuation: true
        });
        const particles = new THREE.Points(pGeo, pMat);
        layersGroup.add(particles);

        // --------------------------------------------------------
        // INTERACTIVITY: DRAG TO ROTATE
        // --------------------------------------------------------
        
        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };
        let rotationVelocity = { x: 0, y: 0 };

        container.addEventListener('mousedown', (e) => {
            isDragging = true;
            previousMousePosition = { x: e.clientX, y: e.clientY };
            container.style.cursor = 'grabbing';
        });

        window.addEventListener('mouseup', () => {
            isDragging = false;
            container.style.cursor = 'grab';
        });

        window.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const deltaMove = {
                    x: e.clientX - previousMousePosition.x,
                    y: e.clientY - previousMousePosition.y
                };

                layersGroup.rotation.y += deltaMove.x * 0.005;
                layersGroup.rotation.x += deltaMove.y * 0.005;

                rotationVelocity = {
                    x: deltaMove.x * 0.001,
                    y: deltaMove.y * 0.001
                };

                previousMousePosition = { x: e.clientX, y: e.clientY };
            }
        });

        // --------------------------------------------------------
        // GSAP SCROLL ANIMATIONS
        // --------------------------------------------------------
        
        gsap.registerPlugin(ScrollTrigger);

        // Initial State
        layersGroup.rotation.x = 0.3;
        layersGroup.rotation.y = 0.3;
        
        // 1. Hero -> Layers (Move Left & Rotate)
        gsap.to(layersGroup.position, {
            x: -2.5,
            y: 0,
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom center",
                scrub: 1
            }
        });

        gsap.to(layersGroup.rotation, {
            y: "+=3",
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom center",
                scrub: 1
            }
        });

        // Fade in Layer Card
        gsap.to("#layer-card", {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: "#layers",
                start: "top 70%",
                end: "center center",
                scrub: false,
                toggleActions: "play none none reverse"
            }
        });

        // 2. Layers -> Stats (Zoom & Spin)
        const statsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#stats",
                start: "top bottom",
                end: "center center",
                scrub: 1
            }
        });

        statsTimeline.to(layersGroup.position, { x: 0, y: 0, z: 5 })
                     .to(layersGroup.rotation, { x: 2, y: 6 }, "<")
                     .to(core.scale, { x: 1.5, y: 1.5, z: 1.5 }, "<");

        // 3. Stats -> Use Cases (Reset/Fade)
        gsap.to(layersGroup.position, {
            y: 2,
            scrollTrigger: {
                trigger: "#use-cases",
                start: "top bottom",
                end: "center center",
                scrub: 1
            }
        });

        gsap.to(layersGroup.scale, {
            x: 0, y: 0, z: 0,
            scrollTrigger: {
                trigger: "#use-cases",
                start: "top bottom",
                end: "30% center",
                scrub: 1
            }
        });

        // --------------------------------------------------------
        // RENDER LOOP
        // --------------------------------------------------------
        
        const clock = new THREE.Clock();

        function animate() {
            requestAnimationFrame(animate);
            const time = clock.getElapsedTime();

            if (!isDragging) {
                // Inertia
                rotationVelocity.x *= 0.95;
                rotationVelocity.y *= 0.95;
                layersGroup.rotation.y += rotationVelocity.x;
                layersGroup.rotation.x += rotationVelocity.y;

                // Idle Animation
                layersGroup.rotation.y += 0.002;
                
                // Individual ring rotations
                ring1.rotation.z += 0.005;
                ring2.rotation.z -= 0.004;
                ring3.rotation.z += 0.006;
                
                // Pulse core
                core.scale.setScalar(1 + Math.sin(time * 2) * 0.1);
            }

            // Animate Particles
            const positions = particles.geometry.attributes.position.array;
            for(let i=0; i<particleCount; i++) {
                const i3 = i * 3;
                const x = positions[i3];
                const z = positions[i3+2];
                positions[i3] = x * Math.cos(0.0008) - z * Math.sin(0.0008);
                positions[i3+2] = x * Math.sin(0.0008) + z * Math.cos(0.0008);
            }
            particles.geometry.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
        }

        animate();

        // --------------------------------------------------------
        // RESPONSIVE
        // --------------------------------------------------------
        
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            
            if(window.innerWidth < 768) {
                layersGroup.scale.set(0.6, 0.6, 0.6);
            } else {
                layersGroup.scale.set(1, 1, 1);
            }
        });

        // Init Check
        if(window.innerWidth < 768) {
            layersGroup.scale.set(0.6, 0.6, 0.6);
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
      

<div className="cursor-grab-custom" id="canvas-container"></div>

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center">
<div className="flex items-center gap-3 mix-blend-difference">
<div className="w-8 h-8 rounded-full border border-zinc-600 flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
</div>
<span className="text-lg font-medium tracking-tight text-white">NEXUS OS</span>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex gap-6 text-sm font-medium text-zinc-400 mix-blend-difference">
<a className="hover:text-white transition-colors" href="#">Platform</a>
<a className="hover:text-white transition-colors" href="#">APIs</a>
<a className="hover:text-white transition-colors" href="#">Documentation</a>
</div>
<button className="group flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-white hover:text-black transition-all duration-300">
<span>GET API ACCESS</span>
<i className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" data-lucide="arrow-up-right" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</nav>

<main className="relative z-10 w-full">

<section className="h-screen w-full flex flex-col justify-center items-start px-6 md:px-24 pointer-events-none" id="hero">
<div className="max-w-3xl space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
<i className="w-3 h-3 text-blue-400" data-lucide="layers" style={{strokeWidth: '1.5'}}></i>
<span className="text-xs font-medium text-zinc-300 tracking-widest uppercase">Three Layers. One Platform.</span>
</div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.9] text-white pb-2">
                    THE UNIFIED<br/>
<span className="text-zinc-500">INTELLIGENCE</span><br/>
                    PLATFORM.
                </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed">
                    Nexus OS connects education, employment, and economics with real-time intelligence APIs that empower students, universities, and employers to make data-driven decisions.
                </p>
<div className="pt-12 flex items-center gap-6 pointer-events-auto">
<button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition-transform">
<span>Start Building</span>
<i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors text-sm group">
<div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center group-hover:border-white transition-colors">
<i className="w-4 h-4 fill-current" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
<span>Watch Demo</span>
</button>
</div>
</div>
<div className="absolute bottom-10 left-6 md:left-24 flex items-center gap-4 text-xs text-zinc-500 font-mono">
<span>SCROLL TO EXPLORE</span>
<div className="h-px w-16 bg-zinc-800"></div>
<span>01 / 04</span>
</div>
</section>

<section className="min-h-screen w-full flex items-center justify-end px-6 md:px-24 py-24 pointer-events-none" id="layers">
<div className="max-w-lg w-full space-y-8 glass-panel p-10 rounded-2xl pointer-events-auto opacity-0 translate-y-10 transition-all duration-700" id="layer-card">
<div className="flex justify-between items-end">
<h2 className="text-3xl font-semibold tracking-tighter text-white">Intelligence Layers</h2>
<span className="text-xs text-zinc-500 font-mono mb-1">API SUITE</span>
</div>
<div className="space-y-4">

<div className="group cursor-pointer">
<div className="flex justify-between items-center py-4 border-b border-zinc-800 group-hover:border-zinc-600 transition-colors">
<div className="flex items-center gap-4">
<div className="p-2 rounded bg-zinc-900 text-zinc-400 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="graduation-cap" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-base text-zinc-200 font-medium group-hover:text-white">Education Intelligence</h3>
<p className="text-xs text-zinc-500 mt-1">Real-time insights on top colleges for career paths</p>
</div>
</div>
<i className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" data-lucide="chevron-right" style={{strokeWidth: '1.5'}}></i>
</div>
</div>

<div className="group cursor-pointer">
<div className="flex justify-between items-center py-4 border-b border-zinc-800 group-hover:border-zinc-600 transition-colors">
<div className="flex items-center gap-4">
<div className="p-2 rounded bg-zinc-900 text-zinc-400 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="briefcase" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-base text-zinc-200 font-medium group-hover:text-white">Employment Intelligence</h3>
<p className="text-xs text-zinc-500 mt-1">In-demand occupations &amp; regional employment rates</p>
</div>
</div>
<i className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" data-lucide="chevron-right" style={{strokeWidth: '1.5'}}></i>
</div>
</div>

<div className="group cursor-pointer">
<div className="flex justify-between items-center py-4 border-b border-zinc-800 group-hover:border-zinc-600 transition-colors">
<div className="flex items-center gap-4">
<div className="p-2 rounded bg-zinc-900 text-zinc-400 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="trending-up" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-base text-zinc-200 font-medium group-hover:text-white">Economics Intelligence</h3>
<p className="text-xs text-zinc-500 mt-1">Real-time labor market insights nationwide</p>
</div>
</div>
<i className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" data-lucide="chevron-right" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<button className="w-full py-3 mt-4 text-sm text-zinc-400 border border-zinc-800 rounded-lg hover:bg-zinc-800 hover:text-white transition-all">
                    Explore Full API Documentation
                </button>
</div>
</section>

<section className="h-screen w-full flex flex-col items-center justify-center text-center px-6 pointer-events-none" id="stats">
<div className="relative z-20 space-y-6">
<div className="inline-block border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
<span className="text-xs font-medium tracking-widest text-blue-300">PLATFORM REACH</span>
</div>
<div className="flex flex-col md:flex-row items-baseline justify-center gap-2 md:gap-6">
<h2 className="text-5xl md:text-8xl font-semibold tracking-tighter text-white">500M+</h2>
<span className="text-2xl md:text-4xl font-light text-zinc-500 tracking-tight">DATA POINTS</span>
</div>
<div className="h-px w-24 bg-gradient-to-r from-transparent via-zinc-500 to-transparent mx-auto my-4"></div>
<div className="flex flex-col md:flex-row items-baseline justify-center gap-2 md:gap-6">
<span className="text-2xl md:text-4xl font-light text-zinc-500 tracking-tight">ACROSS</span>
<h2 className="text-5xl md:text-8xl font-semibold tracking-tighter text-white">50</h2>
<span className="text-2xl md:text-4xl font-light text-zinc-500 tracking-tight">STATES</span>
</div>
<p className="mt-8 text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                    Empowering informed decisions across the entire education-to-employment pipeline with unified intelligence.
                </p>
</div>
</section>

<section className="min-h-screen w-full bg-[#030304] flex flex-col items-center justify-center py-24 px-6 border-t border-zinc-900 relative" id="use-cases">

<div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: 'linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mb-24 z-10">
<div className="glass-panel p-6 rounded-xl border-t border-t-blue-500/20">
<span className="text-xs font-mono text-zinc-500 mb-2 block">FOR STUDENTS</span>
<h3 className="text-lg font-medium text-white mb-2">Career Pathfinding</h3>
<p className="text-sm text-zinc-400">Discover the optimal colleges and programs aligned with your career aspirations and market demand.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-blue-400">
<i className="w-3 h-3" data-lucide="user" style={{strokeWidth: '1.5'}}></i>
                        Actionable Insights
                    </div>
</div>
<div className="glass-panel p-6 rounded-xl">
<span className="text-xs font-mono text-zinc-500 mb-2 block">FOR UNIVERSITIES</span>
<h3 className="text-lg font-medium text-white mb-2">Program Intelligence</h3>
<p className="text-sm text-zinc-400">Align curriculum with labor market trends and provide students with competitive advantage.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-zinc-600">
<i className="w-3 h-3" data-lucide="building-2" style={{strokeWidth: '1.5'}}></i>
                        Strategic Planning
                    </div>
</div>
<div className="glass-panel p-6 rounded-xl">
<span className="text-xs font-mono text-zinc-500 mb-2 block">FOR EMPLOYERS</span>
<h3 className="text-lg font-medium text-white mb-2">Talent Mapping</h3>
<p className="text-sm text-zinc-400">Access real-time insights on regional talent availability and emerging skill trends.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-zinc-600">
<i className="w-3 h-3" data-lucide="users" style={{strokeWidth: '1.5'}}></i>
                        Workforce Planning
                    </div>
</div>
</div>
<div className="text-center space-y-8 z-10 relative">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white">BUILD WITH NEXUS</h2>
<div className="flex flex-col md:flex-row items-center gap-4 justify-center">
<button className="relative group overflow-hidden bg-white text-black px-10 py-4 rounded-full text-base font-semibold tracking-tight transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]">
<span className="relative z-10 flex items-center gap-2">
                            START FREE TRIAL
                            <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</span>
</button>
<button className="px-10 py-4 rounded-full text-base font-medium text-zinc-400 hover:text-white transition-colors border border-transparent hover:border-zinc-800 hover:bg-zinc-900">
                        View Documentation
                    </button>
</div>
<p className="text-zinc-600 text-xs mt-4">No credit card required • Full API access • 10,000 free monthly requests</p>
</div>
</section>

<footer className="w-full border-t border-zinc-900 py-12 px-6 md:px-24 flex flex-col md:flex-row justify-between items-start md:items-center text-zinc-600 text-sm bg-[#030304] z-20 relative">
<div className="flex flex-col gap-2">
<span className="text-white font-semibold tracking-tight">NEXUS OS</span>
<p>© 2024 Nexus Intelligence Corp.</p>
</div>
<div className="flex flex-wrap gap-8 mt-8 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Platform</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Partners</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex gap-4 mt-8 md:mt-0">
<i className="w-5 h-5 hover:text-white cursor-pointer transition-colors" data-lucide="twitter" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5 hover:text-white cursor-pointer transition-colors" data-lucide="linkedin" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5 hover:text-white cursor-pointer transition-colors" data-lucide="github" style={{strokeWidth: '1.5'}}></i>
</div>
</footer>
</main>


    </>
  );
}
