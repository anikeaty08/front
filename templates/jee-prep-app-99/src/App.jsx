import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // --------------------------------------------------------
        // THREE.JS SETUP - WIREFRAME ATOMIC MODEL
        // --------------------------------------------------------
        
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        // Dark fog for depth
        scene.fog = new THREE.FogExp2(0x050505, 0.035);

        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.set(0, 0, 9);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // --------------------------------------------------------
        // ATOMIC MODEL (WIREFRAME MESH)
        // --------------------------------------------------------
        
        const atomGroup = new THREE.Group();
        scene.add(atomGroup);

        // 1. The Nucleus (Wireframe Sphere/Icosahedron)
        const nucleusGeo = new THREE.IcosahedronGeometry(1.2, 2);
        const nucleusMat = new THREE.MeshBasicMaterial({ 
            color: 0xf43f5e, // Rose 500
            wireframe: true,
            transparent: true,
            opacity: 0.8
        });
        const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
        atomGroup.add(nucleus);

        // 2. Inner Glow of Nucleus
        const coreGeo = new THREE.SphereGeometry(0.5, 16, 16);
        const coreMat = new THREE.MeshBasicMaterial({ color: 0xf43f5e });
        const core = new THREE.Mesh(coreGeo, coreMat);
        atomGroup.add(core);

        // 3. Electron Shells / Orbits (Wireframe Torus)
        const orbits = [];
        const orbitCount = 3;
        
        const orbitMat = new THREE.MeshBasicMaterial({ 
            color: 0x444444, 
            wireframe: true, 
            transparent: true, 
            opacity: 0.25 
        });

        for (let i = 0; i < orbitCount; i++) {
            // Large thin rings
            const radius = 4.5;
            const tube = 0.05;
            const radialSegments = 6; // Low poly cross section
            const tubularSegments = 100;

            const orbitGeo = new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments);
            const orbit = new THREE.Mesh(orbitGeo, orbitMat);
            
            // Randomize rotations to look like Bohr model
            orbit.rotation.x = Math.PI / 2; // Flat initially
            
            if (i === 1) {
                orbit.rotation.x = Math.PI / 2;
                orbit.rotation.y = Math.PI / 3;
            } else if (i === 2) {
                orbit.rotation.x = Math.PI / 2;
                orbit.rotation.y = -Math.PI / 3;
            }
            
            atomGroup.add(orbit);
            orbits.push(orbit);
        }

        // 4. Outer Sphere (Probability Cloud - Very Faint Wireframe)
        const cloudGeo = new THREE.SphereGeometry(6, 32, 32);
        const cloudMat = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            wireframe: true,
            transparent: true,
            opacity: 0.03
        });
        const cloud = new THREE.Mesh(cloudGeo, cloudMat);
        atomGroup.add(cloud);

        // --------------------------------------------------------
        // ANIMATION & SCROLL
        // --------------------------------------------------------
        
        gsap.registerPlugin(ScrollTrigger);

        // Initial orientation
        atomGroup.rotation.z = 0.2;
        atomGroup.rotation.x = 0.2;

        // 1. Hero -> Interface
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom center",
                scrub: 1.5
            }
        });

        tl.to(atomGroup.position, { x: -3, z: -2 }, 0)
          .to(atomGroup.rotation, { x: 1, y: 1 }, 0)
          .to(cloud.scale, { x: 1.2, y: 1.2, z: 1.2 }, 0);

        // Fade in UI Card
        gsap.to("#interface-card", {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: "#subjects",
                start: "top 70%",
                end: "center center",
                scrub: false,
                toggleActions: "play none none reverse"
            }
        });

        // 2. Interface -> Stats
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#analytics",
                start: "top bottom",
                end: "center center",
                scrub: 1
            }
        });

        tl2.to(atomGroup.position, { x: 0, y: 0, z: 1 })
           .to(atomGroup.rotation, { x: 0, y: 0, z: Math.PI / 2 })
           .to(atomGroup.scale, { x: 1.3, y: 1.3, z: 1.3 });

        // 3. Stats -> CTA
        gsap.to(atomGroup.scale, {
            x: 0.01, y: 0.01, z: 0.01,
            opacity: 0,
            scrollTrigger: {
                trigger: "#cta",
                start: "top center",
                end: "bottom bottom",
                scrub: 1
            }
        });

        // --------------------------------------------------------
        // RENDER LOOP
        // --------------------------------------------------------
        
        const clock = new THREE.Clock();

        function tick() {
            const elapsedTime = clock.getElapsedTime();

            // Rotate the whole atom slowly
            atomGroup.rotation.y += 0.002;

            // Rotate individual electron orbits slightly differently
            orbits.forEach((orbit, index) => {
                orbit.rotation.z = elapsedTime * (0.1 + index * 0.05);
            });

            // Pulse the nucleus
            const scale = 1 + Math.sin(elapsedTime * 2) * 0.1;
            nucleus.scale.set(scale, scale, scale);
            
            // Pulse the core
            core.scale.set(scale * 0.5, scale * 0.5, scale * 0.5);

            renderer.render(scene, camera);
            requestAnimationFrame(tick);
        }

        tick();

        // --------------------------------------------------------
        // RESPONSIVE
        // --------------------------------------------------------
        
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            
            if(window.innerWidth < 768) {
                atomGroup.scale.set(0.6, 0.6, 0.6);
            } else {
                atomGroup.scale.set(1, 1, 1);
            }
        });
        
        // Initial check
        if(window.innerWidth < 768) {
            atomGroup.scale.set(0.6, 0.6, 0.6);
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="canvas-container"></div>

<nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-5 flex justify-between items-center glass-nav">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full border border-rose-500/50 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-rose-500/20 blur-sm"></div>
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
<span className="text-sm font-semibold tracking-tighter text-white">VORTEX</span>
</div>
<div className="flex items-center gap-8">
<div className="hidden md:flex gap-6 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#subjects">Subjects</a>
<a className="hover:text-white transition-colors" href="#analytics">Analytics</a>
<a className="hover:text-white transition-colors" href="#methodology">Methodology</a>
</div>
<button className="group relative overflow-hidden bg-white text-black px-4 py-2 rounded-full text-xs font-semibold hover:bg-rose-500 hover:text-white transition-all duration-300">
<span className="relative z-10">Get Application</span>
</button>
</div>
</nav>

<main className="relative z-10 w-full">

<section className="h-screen w-full flex flex-col justify-center items-start px-6 md:px-24 pointer-events-none" id="hero">
<div className="max-w-3xl space-y-8 relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
<span className="text-xs font-medium text-zinc-300 tracking-wider uppercase">JEE Advanced 2025 Ready</span>
</div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.9] text-white pb-2 mix-blend-overlay opacity-90">
                    SOLVE<br/>
                    THE<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-300">UNKNOWN.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-md font-light leading-relaxed">
                    Precision-engineered practice for JEE Mains, Advanced &amp; BITSAT. 
                    Navigate the syllabus with atomic accuracy.
                </p>
<div className="pt-8 flex flex-wrap items-center gap-4 pointer-events-auto">
<button className="h-12 px-8 rounded-full bg-zinc-100 text-zinc-950 text-sm font-semibold hover:bg-rose-500 hover:text-white transition-all duration-300 flex items-center gap-2">
                        Start Practicing
                        <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
<div className="flex items-center gap-4 px-6 py-3 rounded-full border border-zinc-800 bg-black/20 backdrop-blur-sm">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-zinc-800 border border-black flex items-center justify-center text-[10px] text-zinc-400">P</div>
<div className="w-6 h-6 rounded-full bg-zinc-800 border border-black flex items-center justify-center text-[10px] text-zinc-400">C</div>
<div className="w-6 h-6 rounded-full bg-zinc-800 border border-black flex items-center justify-center text-[10px] text-zinc-400">M</div>
</div>
<span className="text-xs text-zinc-500">45 Years PYQs Included</span>
</div>
</div>
</div>
<div className="absolute bottom-10 left-6 md:left-24 flex items-center gap-4 text-xs text-zinc-600 font-mono">
<span>COORD: 001.24.X</span>
<div className="h-px w-12 bg-zinc-800"></div>
<span>SCROLL TO INITIALIZE</span>
</div>
</section>

<section className="min-h-screen w-full flex items-center justify-center md:justify-end px-6 md:px-24 py-24 pointer-events-none" id="subjects">
<div className="max-w-md w-full glass-panel p-8 rounded-2xl pointer-events-auto opacity-0 translate-y-10 transition-all duration-700 space-y-6" id="interface-card">
<div className="flex justify-between items-center mb-6">
<div>
<h2 className="text-xl font-semibold tracking-tight text-white">Question Bank</h2>
<p className="text-xs text-zinc-500 mt-1">Select parameters to generate set</p>
</div>
<i className="w-5 h-5 text-zinc-500" data-lucide="layers"></i>
</div>

<div className="grid grid-cols-3 gap-2">
<label className="cursor-pointer group">
<input checked="" className="hidden peer" name="subject" type="radio"/>
<div className="h-20 rounded-lg border border-zinc-800 bg-zinc-900/50 flex flex-col items-center justify-center gap-2 transition-all peer-checked:border-rose-500/50 peer-checked:bg-rose-500/10 hover:bg-zinc-800">
<i className="w-5 h-5 text-zinc-400 peer-checked:text-rose-400" data-lucide="sigma"></i>
<span className="text-xs text-zinc-400 peer-checked:text-rose-400">Maths</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="hidden peer" name="subject" type="radio"/>
<div className="h-20 rounded-lg border border-zinc-800 bg-zinc-900/50 flex flex-col items-center justify-center gap-2 transition-all peer-checked:border-rose-500/50 peer-checked:bg-rose-500/10 hover:bg-zinc-800">
<i className="w-5 h-5 text-zinc-400 peer-checked:text-rose-400" data-lucide="atom"></i>
<span className="text-xs text-zinc-400 peer-checked:text-rose-400">Physics</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="hidden peer" name="subject" type="radio"/>
<div className="h-20 rounded-lg border border-zinc-800 bg-zinc-900/50 flex flex-col items-center justify-center gap-2 transition-all peer-checked:border-rose-500/50 peer-checked:bg-rose-500/10 hover:bg-zinc-800">
<i className="w-5 h-5 text-zinc-400 peer-checked:text-rose-400" data-lucide="flask-conical"></i>
<span className="text-xs text-zinc-400 peer-checked:text-rose-400">Chem</span>
</div>
</label>
</div>

<div className="space-y-3 pt-2">
<div className="flex justify-between text-xs text-zinc-400">
<span>Difficulty</span>
<span className="text-rose-400">Advanced+</span>
</div>
<input className="w-full" max="100" min="1" type="range" value="85"/>
<div className="flex justify-between text-[10px] text-zinc-600 font-mono">
<span>MAINS</span>
<span>ADVANCED</span>
<span>OLYMPIAD</span>
</div>
</div>

<div className="space-y-2 pt-2">
<label className="flex items-center justify-between p-3 rounded-lg border border-zinc-800 hover:border-zinc-700 cursor-pointer custom-checkbox transition-colors">
<div className="flex items-center gap-3">
<input checked="" className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-600 flex items-center justify-center transition-colors">
<i className="w-3 h-3 text-black" data-lucide="check"></i>
</div>
<span className="text-xs text-zinc-300">Previous Year Questions Only</span>
</div>
</label>
<label className="flex items-center justify-between p-3 rounded-lg border border-zinc-800 hover:border-zinc-700 cursor-pointer custom-checkbox transition-colors">
<div className="flex items-center gap-3">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-600 flex items-center justify-center transition-colors">
<i className="w-3 h-3 text-black" data-lucide="check"></i>
</div>
<span className="text-xs text-zinc-300">Include Numerical Type</span>
</div>
</label>
</div>
<button className="w-full py-3 mt-2 rounded-lg bg-white text-black text-xs font-semibold hover:bg-rose-500 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Generate Problem Set
                </button>
</div>
</section>

<section className="h-screen w-full flex flex-col items-center justify-center text-center px-6 pointer-events-none" id="analytics">
<div className="relative z-20 space-y-12">
<div className="space-y-2">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white">CALCULATED PRECISION</h2>
<p className="text-sm text-zinc-500 font-mono">REAL-TIME PERFORMANCE METRICS</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">

<div className="flex flex-col items-center gap-2">
<div className="text-5xl md:text-7xl font-light text-white tracking-tight flex items-start">
<span>25</span>
<span className="text-2xl text-rose-500 mt-2">k+</span>
</div>
<span className="text-xs text-zinc-500 uppercase tracking-widest border-t border-zinc-800 pt-4 w-full">Questions Solved</span>
</div>

<div className="flex flex-col items-center gap-2">
<div className="text-5xl md:text-7xl font-light text-white tracking-tight flex items-start">
<span>99.8</span>
<span className="text-2xl text-rose-500 mt-2">%</span>
</div>
<span className="text-xs text-zinc-500 uppercase tracking-widest border-t border-zinc-800 pt-4 w-full">Accuracy Algorithm</span>
</div>

<div className="flex flex-col items-center gap-2">
<div className="text-5xl md:text-7xl font-light text-white tracking-tight flex items-start">
<span>42</span>
<span className="text-2xl text-rose-500 mt-2">yrs</span>
</div>
<span className="text-xs text-zinc-500 uppercase tracking-widest border-t border-zinc-800 pt-4 w-full">Historical Data</span>
</div>
</div>
</div>
</section>

<section className="min-h-screen w-full bg-[#050505] flex flex-col items-center justify-center py-24 px-6 border-t border-zinc-900 relative overflow-hidden" id="cta">

<div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

<div className="absolute inset-0 z-0 bg-gradient-to-t from-rose-900/10 via-transparent to-transparent"></div>
<div className="z-10 text-center space-y-6 max-w-2xl mx-auto">
<div className="w-16 h-16 mx-auto rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 shadow-2xl shadow-rose-900/20">
<i className="w-8 h-8 text-rose-500" data-lucide="infinity"></i>
</div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white">Enter the Vortex.</h2>
<p className="text-sm md:text-base text-zinc-400 font-light">
                    The ultimate tool for serious aspirants. Adaptive difficulty, detailed analytics, and distraction-free interface.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8">
<button className="flex items-center gap-3 bg-white text-black px-6 py-3.5 rounded-lg text-sm font-semibold hover:bg-rose-500 hover:text-white transition-all group w-full md:w-auto justify-center">
<i className="w-5 h-5" data-lucide="apple"></i>
<div className="flex flex-col items-start leading-none">
<span className="text-[10px] uppercase font-medium opacity-60">Download on the</span>
<span className="text-xs">App Store</span>
</div>
</button>
<button className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 text-white px-6 py-3.5 rounded-lg text-sm font-semibold hover:border-rose-500/50 hover:bg-zinc-800 transition-all group w-full md:w-auto justify-center">
<i className="w-5 h-5" data-lucide="smartphone"></i>
<div className="flex flex-col items-start leading-none">
<span className="text-[10px] uppercase font-medium opacity-60">Get it on</span>
<span className="text-xs">Google Play</span>
</div>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mt-24 z-10">
<div className="border border-zinc-800/50 bg-zinc-900/20 p-6 rounded-lg backdrop-blur-sm">
<span className="text-xs font-mono text-rose-500 mb-2 block">STEP 01</span>
<h3 className="text-sm font-medium text-white">Calibrate</h3>
<p className="text-xs text-zinc-500 mt-2">Input your target exam and current proficiency level.</p>
</div>
<div className="border border-zinc-800/50 bg-zinc-900/20 p-6 rounded-lg backdrop-blur-sm">
<span className="text-xs font-mono text-rose-500 mb-2 block">STEP 02</span>
<h3 className="text-sm font-medium text-white">Iterate</h3>
<p className="text-xs text-zinc-500 mt-2">Solve curated problem sets adapted to your weak areas.</p>
</div>
<div className="border border-zinc-800/50 bg-zinc-900/20 p-6 rounded-lg backdrop-blur-sm">
<span className="text-xs font-mono text-rose-500 mb-2 block">STEP 03</span>
<h3 className="text-sm font-medium text-white">Converge</h3>
<p className="text-xs text-zinc-500 mt-2">Achieve peak performance with 99.9% probability.</p>
</div>
</div>
</section>

<footer className="w-full border-t border-zinc-900 py-12 px-6 md:px-24 bg-[#050505] z-20 relative">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="space-y-2">
<span className="text-white text-sm font-bold tracking-tight">VORTEX</span>
<p className="text-zinc-500 text-xs">© 2024 Kinetic Education Labs.</p>
</div>
<div className="flex gap-6 text-xs text-zinc-500 font-medium">
<a className="hover:text-rose-500 transition-colors" href="#">Privacy</a>
<a className="hover:text-rose-500 transition-colors" href="#">Terms</a>
<a className="hover:text-rose-500 transition-colors" href="#">Syllabus</a>
<a className="hover:text-rose-500 transition-colors" href="#">Contact</a>
</div>
</div>
</footer>
</main>


    </>
  );
}
