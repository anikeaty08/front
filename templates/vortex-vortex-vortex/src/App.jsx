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

        // Question Selection Logic
        function selectOption(card) {
            // Remove selected class from all options
            const cards = document.querySelectorAll('.option-card');
            cards.forEach(c => c.classList.remove('selected'));
            
            // Add selected class to clicked card
            card.classList.add('selected');
        }

        // --------------------------------------------------------
        // THREE.JS SETUP
        // --------------------------------------------------------
        
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x050505, 0.035);

        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.set(0, 0, 9);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // --------------------------------------------------------
        // ATOMIC MODEL
        // --------------------------------------------------------
        
        const atomGroup = new THREE.Group();
        scene.add(atomGroup);

        // 1. The Nucleus
        const nucleusGeo = new THREE.IcosahedronGeometry(1.2, 2);
        const nucleusMat = new THREE.MeshBasicMaterial({ 
            color: 0xf43f5e, 
            wireframe: true,
            transparent: true,
            opacity: 0.8
        });
        const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
        atomGroup.add(nucleus);

        // 2. Electron Shells / Orbits
        const orbits = [];
        const orbitCount = 3;
        
        const orbitMat = new THREE.MeshBasicMaterial({ 
            color: 0x444444, 
            wireframe: true, 
            transparent: true, 
            opacity: 0.25 
        });

        const electronGeo = new THREE.SphereGeometry(0.15, 8, 8);
        const electronMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 }); 

        for (let i = 0; i < orbitCount; i++) {
            const orbitGroup = new THREE.Group();
            
            const radius = 4.5;
            const tube = 0.05;
            const orbitGeo = new THREE.TorusGeometry(radius, tube, 6, 100);
            const orbitMesh = new THREE.Mesh(orbitGeo, orbitMat);
            orbitGroup.add(orbitMesh);

            const electron = new THREE.Mesh(electronGeo, electronMat);
            electron.position.set(radius, 0, 0);
            
            const electronPivot = new THREE.Group();
            electronPivot.add(electron);
            orbitGroup.add(electronPivot);

            if (i === 1) {
                orbitGroup.rotation.x = Math.PI / 2;
                orbitGroup.rotation.y = Math.PI / 3;
            } else if (i === 2) {
                orbitGroup.rotation.x = Math.PI / 2;
                orbitGroup.rotation.y = -Math.PI / 3;
            } else {
                orbitGroup.rotation.x = Math.PI / 2;
            }
            
            orbitGroup.userData = { pivot: electronPivot };
            
            atomGroup.add(orbitGroup);
            orbits.push(orbitGroup);
        }

        // 3. Outer Probability Cloud
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
        // CONTINUOUS SCROLL ANIMATION
        // --------------------------------------------------------
        
        gsap.registerPlugin(ScrollTrigger);

        atomGroup.rotation.z = 0.2;
        atomGroup.rotation.x = 0.2;

        // Create a master timeline that tracks the entire page scroll
        const masterTl = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1.5 // Increased scrub for smoother inertia
            }
        });

        // Keyframe logic based on Scroll percentages roughly mapping to sections
        // 0% - Hero (Center)
        // 20-40% - Simulation (Left)
        // 60-80% - Analytics (Center, Zoomed)
        // 100% - CTA (Faded)

        // Move to Simulation State (Move Left)
        masterTl.to(atomGroup.position, { x: -3.5, z: -2, duration: 2, ease: "power1.inOut" }, 0)
                .to(atomGroup.rotation, { x: 1, y: 1, duration: 2, ease: "power1.inOut" }, 0)
                .to(cloud.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 2 }, 0);

        // Hold Left Position through Simulation section (Add dummy duration)
        masterTl.to({}, { duration: 1.5 });

        // Move to Analytics State (Move Center, Zoom)
        masterTl.to(atomGroup.position, { x: 0, y: 0, z: 1, duration: 2, ease: "power1.inOut" })
                .to(atomGroup.rotation, { x: 0, y: 0, z: Math.PI / 2, duration: 2, ease: "power1.inOut" })
                .to(atomGroup.scale, { x: 1.3, y: 1.3, z: 1.3, duration: 2 });
        
        // Hold Center
        masterTl.to({}, { duration: 1 });

        // Fade out at bottom
        masterTl.to(atomGroup.scale, { x: 0.01, y: 0.01, z: 0.01, duration: 2, ease: "power2.in" })
                .to(atomGroup.position, { y: 2, duration: 2 }, "<");


        // Interface Card Animation (Independent Trigger)
        gsap.to("#interface-card", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#simulation",
                start: "top 60%", 
                end: "center center",
                toggleActions: "play reverse play reverse"
            }
        });

        // --------------------------------------------------------
        // RENDER LOOP
        // --------------------------------------------------------
        
        const clock = new THREE.Clock();

        function tick() {
            const elapsedTime = clock.getElapsedTime();

            // Continuous gentle rotation
            atomGroup.rotation.y += 0.002;

            // Electron orbit animation
            orbits.forEach((orbitGroup, index) => {
                orbitGroup.userData.pivot.rotation.z = elapsedTime * (1.5 + index * 0.5);
            });

            // Nucleus pulse
            const scale = 1 + Math.sin(elapsedTime * 2) * 0.05;
            nucleus.scale.set(scale, scale, scale);

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
        
        if(window.innerWidth < 768) {
            atomGroup.scale.set(0.6, 0.6, 0.6);
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
<a className="hover:text-white transition-colors" href="#simulation">Simulation</a>
<a className="hover:text-white transition-colors" href="#analytics">Mastery</a>
<a className="hover:text-white transition-colors" href="#methodology">Pricing</a>
</div>
<button className="group relative overflow-hidden bg-white text-black px-5 py-2 rounded-full text-xs font-semibold hover:bg-rose-500 hover:text-white transition-all duration-300">
<span className="relative z-10">Sign In</span>
</button>
</div>
</nav>

<main className="relative z-10 w-full">

<section className="h-screen w-full flex flex-col justify-center items-start px-6 md:px-24 pointer-events-none" id="hero">
<div className="max-w-3xl space-y-8 relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-zinc-300 tracking-wider uppercase">Live Session Active</span>
</div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.9] text-white pb-2 mix-blend-overlay opacity-90">
                    MASTER<br/>
                    THE<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-300">PATTERN.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-md font-light leading-relaxed">
                    The only adaptive engine that evolves with your neural patterns. Solve less, score more.
                </p>
<div className="pt-8 flex flex-wrap items-center gap-4 pointer-events-auto">
<button className="h-12 px-8 rounded-full bg-zinc-100 text-zinc-950 text-sm font-semibold hover:bg-rose-500 hover:text-white transition-all duration-300 flex items-center gap-2">
                        Start Solving
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<div className="flex items-center gap-4 px-6 py-3 rounded-full border border-zinc-800 bg-black/20 backdrop-blur-sm">
<span className="text-xs text-zinc-500">Web-Based Platform v2.0</span>
</div>
</div>
</div>
<div className="absolute bottom-10 left-6 md:left-24 flex items-center gap-4 text-xs text-zinc-600 font-mono">
<span>SYSTEM: ONLINE</span>
<div className="h-px w-12 bg-zinc-800"></div>
<span>SCROLL TO BEGIN</span>
</div>
</section>

<section className="min-h-screen w-full flex items-center justify-center md:justify-end px-6 md:px-24 py-24 pointer-events-none" id="simulation">

<div className="max-w-xl w-full glass-panel rounded-xl pointer-events-auto opacity-0 translate-y-10 transition-all duration-700 flex flex-col overflow-hidden shadow-2xl shadow-black/50" id="interface-card">

<div className="flex justify-between items-center p-5 border-b border-zinc-800 bg-zinc-900/30">
<div className="flex items-center gap-3">
<span className="text-xs font-mono text-rose-500 font-semibold">Q. 14</span>
<span className="text-[10px] px-2 py-0.5 rounded border border-zinc-700 text-zinc-400 bg-zinc-800/50 uppercase tracking-wide">Single Choice</span>
</div>
<div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="clock"></i>
<span className="text-white">02:14</span>
</div>
<div className="flex items-center gap-1.5">
<span className="text-emerald-500">+4</span>
<span className="text-zinc-600">/</span>
<span className="text-rose-500">-1</span>
</div>
</div>
</div>

<div className="p-6 space-y-6">
<div className="space-y-4">
<p className="text-sm leading-relaxed text-zinc-200">
                            Let <span className="font-serif italic">S</span> be the set of all complex numbers <span className="font-serif italic">z</span> satisfying <span className="font-serif italic">|z - 2 + i| ≥ √5</span>. If the complex number <span className="font-serif italic">z₀</span> is such that <span className="font-serif italic">1/|z₀ - 1|</span> is maximum, then the principal argument of <span className="font-serif italic">4 - z₀ - z̅₀ + z₀z̅₀</span> is:
                        </p>

<div className="w-full h-48 rounded border border-zinc-800 bg-zinc-950/50 relative overflow-hidden flex items-center justify-center">
<svg fill="none" height="150" viewbox="0 0 300 150" width="300" xmlns="http://www.w3.org/2000/svg">

<defs>
<pattern height="10" id="smallGrid" patternunits="userSpaceOnUse" width="10">
<path d="M 10 0 L 0 0 0 10" fill="none" stroke="#27272a" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#smallGrid)" height="150" width="300"></rect>

<line stroke="#52525b" strokeWidth="1" x1="10" x2="290" y1="75" y2="75"></line>
<line stroke="#52525b" strokeWidth="1" x1="150" x2="150" y1="10" y2="140"></line>
<text fill="#71717a" fontFamily="monospace" fontSize="8" x="280" y="70">Re</text>
<text fill="#71717a" fontFamily="monospace" fontSize="8" x="155" y="15">Im</text>





<circle cx="190" cy="95" fill="rgba(244, 63, 94, 0.05)" r="45" stroke="#f43f5e" stroke-dasharray="4 2" strokeWidth="1.5"></circle>

<circle cx="190" cy="95" fill="#f43f5e" r="2"></circle>
<text fill="#f43f5e" fontFamily="monospace" fontSize="8" x="195" y="105">C(2,-i)</text>

<circle cx="170" cy="75" fill="#fff" r="2"></circle>
<text fill="#fff" fontFamily="monospace" fontSize="8" x="165" y="65">P(1,0)</text>



<line stroke="#71717a" stroke-dasharray="2 2" strokeWidth="1" x1="190" x2="158" y1="95" y2="63"></line>

<circle cx="158" cy="63" fill="#38bdf8" r="3"></circle>
<text fill="#38bdf8" fontFamily="monospace" fontSize="9" font-weight="bold" x="145" y="55">z₀</text>

<text fill="#52525b" fontFamily="monospace" fontSize="8" x="240" y="100">|z-C| ≥ √5</text>
</svg>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-3" id="options-grid">

<div className="option-card cursor-pointer flex items-center gap-3 p-3 rounded-lg border border-zinc-800 bg-zinc-900/20 group" onclick="selectOption(this)">
<div className="option-circle w-6 h-6 rounded-full border border-zinc-700 flex items-center justify-center text-[10px] text-zinc-500 transition-colors group-hover:border-zinc-500">A</div>
<span className="text-sm text-zinc-300 font-serif">π/4</span>
</div>

<div className="option-card cursor-pointer flex items-center gap-3 p-3 rounded-lg border border-zinc-800 bg-zinc-900/20 group" onclick="selectOption(this)">
<div className="option-circle w-6 h-6 rounded-full border border-zinc-700 flex items-center justify-center text-[10px] text-zinc-500 transition-colors group-hover:border-zinc-500">B</div>
<span className="text-sm text-zinc-300 font-serif">3π/4</span>
</div>

<div className="option-card cursor-pointer flex items-center gap-3 p-3 rounded-lg border border-zinc-800 bg-zinc-900/20 group" onclick="selectOption(this)">
<div className="option-circle w-6 h-6 rounded-full border border-zinc-700 flex items-center justify-center text-[10px] text-zinc-500 transition-colors group-hover:border-zinc-500">C</div>
<span className="text-sm text-zinc-300 font-serif">-π/2</span>
</div>

<div className="option-card cursor-pointer flex items-center gap-3 p-3 rounded-lg border border-zinc-800 bg-zinc-900/20 group" onclick="selectOption(this)">
<div className="option-circle w-6 h-6 rounded-full border border-zinc-700 flex items-center justify-center text-[10px] text-zinc-500 transition-colors group-hover:border-zinc-500">D</div>
<span className="text-sm text-zinc-300 font-serif">π/2</span>
</div>
</div>
</div>

<div className="px-6 py-4 bg-zinc-900/30 border-t border-zinc-800 flex justify-between items-center">
<button className="text-xs text-zinc-500 hover:text-white transition-colors flex items-center gap-1">
<i className="w-3 h-3" data-lucide="flag"></i> Report
                    </button>
<button className="bg-rose-600 text-white px-6 py-2 rounded-md text-xs font-semibold hover:bg-rose-500 transition-colors shadow-lg shadow-rose-900/20">
                        Save &amp; Next
                    </button>
</div>
</div>
</section>

<section className="h-screen w-full flex flex-col items-center justify-center text-center px-6 pointer-events-none" id="analytics">
<div className="relative z-20 space-y-12">
<div className="space-y-2">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white">DEEP INSIGHTS</h2>
<p className="text-sm text-zinc-500 font-mono">TRACKING METRICS THAT MATTER</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">

<div className="flex flex-col items-center gap-2">
<div className="text-5xl md:text-7xl font-light text-white tracking-tight flex items-start">
<span>142</span>
</div>
<span className="text-xs text-zinc-500 uppercase tracking-widest border-t border-zinc-800 pt-4 w-full">Concepts Mastered</span>
</div>

<div className="flex flex-col items-center gap-2">
<div className="text-5xl md:text-7xl font-light text-white tracking-tight flex items-start">
<span>1.8</span>
<span className="text-2xl text-rose-500 mt-2">m</span>
</div>
<span className="text-xs text-zinc-500 uppercase tracking-widest border-t border-zinc-800 pt-4 w-full">Avg. Time / Question</span>
</div>

<div className="flex flex-col items-center gap-2">
<div className="text-5xl md:text-7xl font-light text-white tracking-tight flex items-start">
<span>12</span>
<span className="text-2xl text-emerald-500 mt-2">d</span>
</div>
<span className="text-xs text-zinc-500 uppercase tracking-widest border-t border-zinc-800 pt-4 w-full">Current Streak</span>
</div>
</div>
</div>
</section>

<section className="min-h-screen w-full bg-[#050505] flex flex-col items-center justify-center py-24 px-6 border-t border-zinc-900 relative overflow-hidden" id="cta">

<div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

<div className="absolute inset-0 z-0 bg-gradient-to-t from-rose-900/10 via-transparent to-transparent"></div>
<div className="z-10 text-center space-y-6 max-w-2xl mx-auto">
<div className="w-16 h-16 mx-auto rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 shadow-2xl shadow-rose-900/20">
<i className="w-8 h-8 text-rose-500" data-lucide="zap"></i>
</div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white">Focus on solving.</h2>
<p className="text-sm md:text-base text-zinc-400 font-light">
                    No distractions. No fluff. Just a pristine environment designed for deep work and rapid syllabus coverage.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8">
<button className="w-full md:w-auto bg-white text-black px-8 py-3.5 rounded-lg text-sm font-semibold hover:bg-rose-500 hover:text-white transition-all shadow-lg shadow-white/10">
                        Launch Dashboard
                    </button>
<button className="w-full md:w-auto bg-transparent border border-zinc-800 text-white px-8 py-3.5 rounded-lg text-sm font-semibold hover:border-zinc-600 transition-all">
                        View Sample Analytics
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mt-24 z-10">
<div className="border border-zinc-800/50 bg-zinc-900/20 p-6 rounded-lg backdrop-blur-sm hover:border-zinc-700 transition-colors">
<span className="text-xs font-mono text-rose-500 mb-2 block">PHASE 01</span>
<h3 className="text-sm font-medium text-white">Diagnostic</h3>
<p className="text-xs text-zinc-500 mt-2">We analyze your previous solve history to find gaps.</p>
</div>
<div className="border border-zinc-800/50 bg-zinc-900/20 p-6 rounded-lg backdrop-blur-sm hover:border-zinc-700 transition-colors">
<span className="text-xs font-mono text-rose-500 mb-2 block">PHASE 02</span>
<h3 className="text-sm font-medium text-white">Execution</h3>
<p className="text-xs text-zinc-500 mt-2">Solve sets tailored to maximize your growth trajectory.</p>
</div>
<div className="border border-zinc-800/50 bg-zinc-900/20 p-6 rounded-lg backdrop-blur-sm hover:border-zinc-700 transition-colors">
<span className="text-xs font-mono text-rose-500 mb-2 block">PHASE 03</span>
<h3 className="text-sm font-medium text-white">Review</h3>
<p className="text-xs text-zinc-500 mt-2">Detailed breakdown of time, accuracy, and potential traps.</p>
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
<a className="hover:text-rose-500 transition-colors" href="#">Data Privacy</a>
<a className="hover:text-rose-500 transition-colors" href="#">Exam Syllabus</a>
<a className="hover:text-rose-500 transition-colors" href="#">Support</a>
</div>
</div>
</footer>
</main>


    </>
  );
}
