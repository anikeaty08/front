import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
        const keyLight = new THREE.DirectionalLight(0xa5b4fc, 2); // Indigo tint
        keyLight.position.set(5, 5, 5);
        scene.add(keyLight);

        // Fill Light (Purple)
        const fillLight = new THREE.PointLight(0xc084fc, 1); // Purple tint
        fillLight.position.set(-5, 0, 5);
        scene.add(fillLight);

        // Rim Light (Cyan/White)
        const rimLight = new THREE.SpotLight(0x22d3ee, 5); // Cyan
        rimLight.position.set(0, 5, -5);
        rimLight.lookAt(0,0,0);
        scene.add(rimLight);

        // --------------------------------------------------------
        // OBJECT: THE AWARD (Abstract Geometric Form)
        // --------------------------------------------------------
        
        const awardGroup = new THREE.Group();
        scene.add(awardGroup);

        // 1. Inner Core (Glowing Sphere)
        const coreGeo = new THREE.IcosahedronGeometry(0.8, 4);
        const coreMat = new THREE.MeshStandardMaterial({
            color: 0x000000,
            emissive: 0x4f46e5, // Indigo glow
            emissiveIntensity: 0.8,
            roughness: 0.1,
            metalness: 0.9
        });
        const core = new THREE.Mesh(coreGeo, coreMat);
        awardGroup.add(core);

        // 2. Outer Shell (Wireframe Glass)
        const shellGeo = new THREE.IcosahedronGeometry(1.4, 0);
        const shellMat = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            roughness: 0,
            metalness: 0.1,
            transmission: 0.2,
            transparent: true,
            opacity: 0.3,
            wireframe: true,
            wireframeLinewidth: 1.5,
            side: THREE.DoubleSide
        });
        const shell = new THREE.Mesh(shellGeo, shellMat);
        awardGroup.add(shell);

        // 3. Floating Particles (Data points)
        const particleCount = 150;
        const pGeo = new THREE.BufferGeometry();
        const pPos = new Float32Array(particleCount * 3);
        const pSizes = new Float32Array(particleCount);

        for(let i=0; i<particleCount; i++) {
            const r = 2.5 + Math.random() * 2;
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
            color: 0xa5b4fc,
            size: 0.04,
            transparent: true,
            opacity: 0.6,
            sizeAttenuation: true
        });
        const particles = new THREE.Points(pGeo, pMat);
        awardGroup.add(particles);

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

                awardGroup.rotation.y += deltaMove.x * 0.005;
                awardGroup.rotation.x += deltaMove.y * 0.005;

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
        awardGroup.rotation.x = 0.5;
        awardGroup.rotation.y = 0.5;
        
        // 1. Hero -> Categories (Move Left)
        // Use immediateRender: false to prevent glitches on reload
        
        // Move Object Left & Rotate
        gsap.to(awardGroup.position, {
            x: -2.5,
            y: 0,
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom center",
                scrub: 1
            }
        });

        gsap.to(awardGroup.rotation, {
            y: "+=2",
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom center",
                scrub: 1
            }
        });

        // Fade in Categories
        gsap.to("#category-card", {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: "#categories",
                start: "top 70%",
                end: "center center",
                scrub: false,
                toggleActions: "play none none reverse"
            }
        });

        // 2. Categories -> Stats (Zoom & Spin)
        const statsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#stats",
                start: "top bottom",
                end: "center center",
                scrub: 1
            }
        });

        statsTimeline.to(awardGroup.position, { x: 0, y: 0, z: 5 }) // Zoom in
                     .to(awardGroup.rotation, { x: 1, y: 5 }, "<") // Spin
                     .to(shellMat, { opacity: 0.1 }, "<") // Fade shell slightly
                     .to(core.scale, { x: 1.2, y: 1.2, z: 1.2 }, "<"); // Pulse core

        // 3. Stats -> CTA (Reset/Fade)
        gsap.to(awardGroup.position, {
            y: 2,
            scrollTrigger: {
                trigger: "#cta",
                start: "top bottom",
                end: "center center",
                scrub: 1
            }
        });

        gsap.to(awardGroup.scale, {
            x: 0, y: 0, z: 0, // Shrink away
            scrollTrigger: {
                trigger: "#cta",
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
                awardGroup.rotation.y += rotationVelocity.x;
                awardGroup.rotation.x += rotationVelocity.y;

                // Idle Animation
                awardGroup.rotation.y += 0.002;
                awardGroup.position.y += Math.sin(time) * 0.001;
                
                // Pulse Shell
                shell.scale.setScalar(1 + Math.sin(time * 2) * 0.02);
            }

            // Animate Particles
            const positions = particles.geometry.attributes.position.array;
            for(let i=0; i<particleCount; i++) {
                const i3 = i * 3;
                // Subtle orbiting
                const x = positions[i3];
                const z = positions[i3+2];
                positions[i3] = x * Math.cos(0.001) - z * Math.sin(0.001);
                positions[i3+2] = x * Math.sin(0.001) + z * Math.cos(0.001);
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
                awardGroup.scale.set(0.6, 0.6, 0.6);
            } else {
                awardGroup.scale.set(1, 1, 1);
            }
        });

        // Init Check
        if(window.innerWidth < 768) {
            awardGroup.scale.set(0.6, 0.6, 0.6);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="cursor-grab-custom" id="canvas-container"></div>

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center">
<div className="flex items-center gap-3 mix-blend-difference">
<div className="w-8 h-8 rounded-full border border-zinc-600 flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
</div>
<span className="text-lg font-medium tracking-tight text-white">AI AWARDS</span>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex gap-6 text-sm font-medium text-zinc-400 mix-blend-difference">
<a className="hover:text-white transition-colors" href="#">Categories</a>
<a className="hover:text-white transition-colors" href="#">Judges</a>
<a className="hover:text-white transition-colors" href="#">Past Winners</a>
</div>
<button className="group flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-white hover:text-black transition-all duration-300">
<span>SUBMIT NOMINATION</span>
<i className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" data-lucide="arrow-up-right"></i>
</button>
</div>
</nav>

<main className="relative z-10 w-full">

<section className="h-screen w-full flex flex-col justify-center items-start px-6 md:px-24 pointer-events-none" id="hero">
<div className="max-w-2xl space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
<i className="w-3 h-3 text-indigo-400" data-lucide="sparkles"></i>
<span className="text-xs font-medium text-zinc-300 tracking-widest uppercase">2024 Entries Open</span>
</div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.9] text-white pb-2">
                    ARCHITECTS<br/>
<span className="text-zinc-500">OF</span> INTELLIGENCE.
                </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-md font-light leading-relaxed">
                    Honoring the breakthrough algorithms and ethical frameworks defining our synthetic future.
                </p>
<div className="pt-12 flex items-center gap-6 pointer-events-auto">
<button className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors text-sm group">
<div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center group-hover:border-white transition-colors">
<i className="w-4 h-4 fill-current" data-lucide="play"></i>
</div>
<span>Watch 2023 Highlights</span>
</button>
</div>
</div>
<div className="absolute bottom-10 left-6 md:left-24 flex items-center gap-4 text-xs text-zinc-500 font-mono">
<span>SCROLL TO EXPLORE</span>
<div className="h-px w-16 bg-zinc-800"></div>
<span>01 / 04</span>
</div>
</section>

<section className="min-h-screen w-full flex items-center justify-end px-6 md:px-24 py-24 pointer-events-none" id="categories">
<div className="max-w-lg w-full space-y-8 glass-panel p-10 rounded-2xl pointer-events-auto opacity-0 translate-y-10 transition-all duration-700" id="category-card">
<div className="flex justify-between items-end">
<h2 className="text-3xl font-semibold tracking-tighter text-white">Award Categories</h2>
<span className="text-xs text-zinc-500 font-mono mb-1">SELECT A DISCIPLINE</span>
</div>
<div className="space-y-4">

<div className="group cursor-pointer">
<div className="flex justify-between items-center py-4 border-b border-zinc-800 group-hover:border-zinc-600 transition-colors">
<div className="flex items-center gap-4">
<div className="p-2 rounded bg-zinc-900 text-zinc-400 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="brain-circuit"></i>
</div>
<div>
<h3 className="text-base text-zinc-200 font-medium group-hover:text-white">Generative Excellence</h3>
<p className="text-xs text-zinc-500 mt-1">LLMs, Diffusion Models, Audio Synthesis</p>
</div>
</div>
<i className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" data-lucide="chevron-right"></i>
</div>
</div>

<div className="group cursor-pointer">
<div className="flex justify-between items-center py-4 border-b border-zinc-800 group-hover:border-zinc-600 transition-colors">
<div className="flex items-center gap-4">
<div className="p-2 rounded bg-zinc-900 text-zinc-400 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="microscope"></i>
</div>
<div>
<h3 className="text-base text-zinc-200 font-medium group-hover:text-white">Scientific Discovery</h3>
<p className="text-xs text-zinc-500 mt-1">Bio-computing, Material Science, Physics</p>
</div>
</div>
<i className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" data-lucide="chevron-right"></i>
</div>
</div>

<div className="group cursor-pointer">
<div className="flex justify-between items-center py-4 border-b border-zinc-800 group-hover:border-zinc-600 transition-colors">
<div className="flex items-center gap-4">
<div className="p-2 rounded bg-zinc-900 text-zinc-400 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<div>
<h3 className="text-base text-zinc-200 font-medium group-hover:text-white">Responsible AI</h3>
<p className="text-xs text-zinc-500 mt-1">Alignment, Bias Mitigation, Transparency</p>
</div>
</div>
<i className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" data-lucide="chevron-right"></i>
</div>
</div>
</div>
<button className="w-full py-3 mt-4 text-sm text-zinc-400 border border-zinc-800 rounded-lg hover:bg-zinc-800 hover:text-white transition-all">
                    View All 12 Categories
                </button>
</div>
</section>

<section className="h-screen w-full flex flex-col items-center justify-center text-center px-6 pointer-events-none" id="stats">
<div className="relative z-20 space-y-6">
<div className="inline-block border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
<span className="text-xs font-medium tracking-widest text-indigo-300">GLOBAL IMPACT</span>
</div>
<div className="flex flex-col md:flex-row items-baseline justify-center gap-2 md:gap-6">
<h2 className="text-5xl md:text-8xl font-semibold tracking-tighter text-white">1,200+</h2>
<span className="text-2xl md:text-4xl font-light text-zinc-500 tracking-tight">NOMINATIONS</span>
</div>
<div className="h-px w-24 bg-gradient-to-r from-transparent via-zinc-500 to-transparent mx-auto my-4"></div>
<div className="flex flex-col md:flex-row items-baseline justify-center gap-2 md:gap-6">
<span className="text-2xl md:text-4xl font-light text-zinc-500 tracking-tight">FROM</span>
<h2 className="text-5xl md:text-8xl font-semibold tracking-tighter text-white">42</h2>
<span className="text-2xl md:text-4xl font-light text-zinc-500 tracking-tight">COUNTRIES</span>
</div>
<p className="mt-8 text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed">
                    Connecting the brightest minds to shape a benevolent singularity.
                </p>
</div>
</section>

<section className="min-h-screen w-full bg-[#030304] flex flex-col items-center justify-center py-24 px-6 border-t border-zinc-900 relative" id="cta">

<div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: 'linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mb-24 z-10">
<div className="glass-panel p-6 rounded-xl border-t border-t-indigo-500/20">
<span className="text-xs font-mono text-zinc-500 mb-2 block">PHASE 1</span>
<h3 className="text-lg font-medium text-white mb-2">Nominations</h3>
<p className="text-sm text-zinc-400">Open globally for startups, research labs, and enterprise AI divisions.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-indigo-400">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                        Active Now
                    </div>
</div>
<div className="glass-panel p-6 rounded-xl">
<span className="text-xs font-mono text-zinc-500 mb-2 block">PHASE 2</span>
<h3 className="text-lg font-medium text-white mb-2">Deliberation</h3>
<p className="text-sm text-zinc-400">A panel of 50 expert judges from Turing Award winners to Industry CTOs.</p>
<div className="mt-4 text-xs text-zinc-600">
                        Starts Nov 15
                    </div>
</div>
<div className="glass-panel p-6 rounded-xl">
<span className="text-xs font-mono text-zinc-500 mb-2 block">PHASE 3</span>
<h3 className="text-lg font-medium text-white mb-2">The Ceremony</h3>
<p className="text-sm text-zinc-400">Live gala in San Francisco honoring the winners of the 2024 AI Awards.</p>
<div className="mt-4 text-xs text-zinc-600">
                        Dec 10, 2024
                    </div>
</div>
</div>
<div className="text-center space-y-8 z-10 relative">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white">MAKE HISTORY</h2>
<div className="flex flex-col md:flex-row items-center gap-4 justify-center">
<button className="relative group overflow-hidden bg-white text-black px-10 py-4 rounded-full text-base font-semibold tracking-tight transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]">
<span className="relative z-10 flex items-center gap-2">
                            SUBMIT ENTRY
                            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
</button>
<button className="px-10 py-4 rounded-full text-base font-medium text-zinc-400 hover:text-white transition-colors border border-transparent hover:border-zinc-800 hover:bg-zinc-900">
                        Download Kit
                    </button>
</div>
<p className="text-zinc-600 text-xs mt-4">Early bird submission deadline: October 31st, 2024</p>
</div>
</section>

<footer className="w-full border-t border-zinc-900 py-12 px-6 md:px-24 flex flex-col md:flex-row justify-between items-start md:items-center text-zinc-600 text-sm bg-[#030304] z-20 relative">
<div className="flex flex-col gap-2">
<span className="text-white font-semibold tracking-tight">AI AWARDS</span>
<p>© 2024 Intelligence Foundation.</p>
</div>
<div className="flex flex-wrap gap-8 mt-8 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Manifesto</a>
<a className="hover:text-white transition-colors" href="#">Sponsorship</a>
<a className="hover:text-white transition-colors" href="#">Press</a>
<a className="hover:text-white transition-colors" href="#">Legal</a>
</div>
<div className="flex gap-4 mt-8 md:mt-0">
<i className="w-5 h-5 hover:text-white cursor-pointer transition-colors" data-lucide="twitter"></i>
<i className="w-5 h-5 hover:text-white cursor-pointer transition-colors" data-lucide="linkedin"></i>
<i className="w-5 h-5 hover:text-white cursor-pointer transition-colors" data-lucide="github"></i>
</div>
</footer>
</main>


    </>
  );
}
