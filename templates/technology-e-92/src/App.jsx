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



        // Initialize Lucide Icons
        lucide.createIcons({ strokeWidth: 1.5 });

        // --- Card Hover Glow Effect ---
        const cards = document.querySelectorAll('.glow-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const glow = card.querySelector('.glow-effect');
                // Create a soft radial gradient that follows the mouse
                glow.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.08), transparent 40%)`;
            });
            
            // Reset on leave for a cleaner transition
            card.addEventListener('mouseleave', () => {
                const glow = card.querySelector('.glow-effect');
                glow.style.background = `radial-gradient(600px circle at 50% 50%, rgba(255,255,255,0), transparent 40%)`;
            });
        });

        // --- WebGL Background Animation (Three.js) ---
        const initWebGL = () => {
            const container = document.getElementById('canvas-container');
            if (!container) return;

            // Setup Scene
            const scene = new THREE.Scene();
            
            // Setup Camera
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 30;

            // Setup Renderer
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Performance optimization
            container.appendChild(renderer.domElement);

            // Create abstract tech-like geometry (Points/Network)
            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCount = 800; // Adjust for density
            const posArray = new Float32Array(particlesCount * 3);

            for(let i = 0; i < particlesCount * 3; i++) {
                // Create a wide dispersion to cover the hero background
                posArray[i] = (Math.random() - 0.5) * 100;
            }

            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

            const material = new THREE.PointsMaterial({
                size: 0.15,
                color: 0x888888,
                transparent: true,
                opacity: 0.8,
                blending: THREE.AdditiveBlending
            });

            const particlesMesh = new THREE.Points(particlesGeometry, material);
            scene.add(particlesMesh);

            // Connect some points with lines to create a network look
            const lineMaterial = new THREE.LineBasicMaterial({
                color: 0x333333,
                transparent: true,
                opacity: 0.2
            });
            
            // Simple logic to connect close points (Performance intensive if too many, keep simple)
            const lineGeometry = new THREE.BufferGeometry();
            // Just reusing the positions to create abstract lines
            lineGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
            scene.add(linesMesh);

            // Mouse tracking for parallax
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

            // Handle Resize
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });

            // Animation Loop
            const clock = new THREE.Clock();

            const animate = () => {
                requestAnimationFrame(animate);
                const elapsedTime = clock.getElapsedTime();

                // Smooth interpolation for mouse movement
                targetX = mouseX * 0.001;
                targetY = mouseY * 0.001;

                // Rotate entire mesh slowly
                particlesMesh.rotation.y += 0.001;
                particlesMesh.rotation.x += 0.0005;
                linesMesh.rotation.y += 0.001;
                linesMesh.rotation.x += 0.0005;

                // Parallax effect based on mouse
                particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
                particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);
                linesMesh.rotation.y += 0.05 * (targetX - linesMesh.rotation.y);
                linesMesh.rotation.x += 0.05 * (targetY - linesMesh.rotation.x);

                // Subtle wave effect on particles
                const positions = particlesGeometry.attributes.position.array;
                for(let i = 0; i < particlesCount; i++) {
                    const i3 = i * 3;
                    const x = positions[i3];
                    // Modifying Y based on X and Time
                    positions[i3 + 1] += Math.sin(elapsedTime + x) * 0.01;
                }
                particlesGeometry.attributes.position.needsUpdate = true;

                renderer.render(scene, camera);
            };

            animate();
        };

        // Init WebGL on load
        window.addEventListener('load', initWebGL);
    
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
      

<div className="fixed inset-0 pointer-events-none z-50 opacity-[0.015]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<nav className="fixed top-0 w-full z-40 bg-[#030303]/70 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-semibold text-xl tracking-tight text-white flex items-center gap-2" href="#">
<i className="w-6 h-6" data-lucide="cpu"></i>
                Techzy
            </a>
<div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-1 py-1">
<a className="px-5 py-2 rounded-full bg-white/10 text-white text-base font-medium transition-colors" href="#">Home</a>
<a className="px-5 py-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/5 text-base font-medium transition-colors" href="#">Products</a>
<a className="px-5 py-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/5 text-base font-medium transition-colors" href="#">About</a>
<a className="px-5 py-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/5 text-base font-medium transition-colors" href="#">Contact</a>
</div>
<button className="md:hidden text-neutral-400 hover:text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0 opacity-60" id="canvas-container"></div>

<div className="absolute inset-0 z-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] pointer-events-none"></div>
<div className="absolute inset-0 z-0 bg-gradient-to-r from-[#030303] via-transparent to-transparent pointer-events-none w-1/2"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="flex flex-col items-start pt-12 lg:pt-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
<span className="text-base text-neutral-300 font-medium">New Series 9 Available</span>
</div>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05] mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                    Premium laptops<br/>for serious work.
                </h1>
<p className="text-xl md:text-2xl text-neutral-400 max-w-lg mb-10 font-normal leading-relaxed">
                    Curated configurations. Fast shipping. Human support. A clean buying experience, end to end.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-medium text-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group">
                        Browse products
                        <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                        View specifications
                    </button>
</div>
</div>
</div>
</section>

<section className="py-32 relative border-t border-white/5 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Featured laptops</h2>
<p className="text-xl text-neutral-400">Our most popular configurations.</p>
</div>
<p className="text-lg text-neutral-500 font-medium">3 picks, no noise.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glow-card relative rounded-3xl bg-[#0a0a0a] border border-white/10 p-2 overflow-hidden group cursor-pointer transition-transform duration-500 hover:-translate-y-1">
<div className="glow-effect absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
<div className="relative z-10 bg-[#0a0a0a] rounded-2xl h-full flex flex-col">
<div className="aspect-[16/10] bg-neutral-900/50 rounded-xl mb-6 m-2 flex items-center justify-center relative overflow-hidden border border-white/5">
<i className="w-16 h-16 text-neutral-700" data-lucide="laptop"></i>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-50"></div>
</div>
<div className="px-6 pb-6 flex-grow flex flex-col">
<h3 className="text-2xl font-semibold tracking-tight mb-2 group-hover:text-white transition-colors">NovaBook Air 14</h3>
<p className="text-base text-neutral-400 mb-8 flex items-center gap-2 flex-wrap">
<span>Ultra-light</span>
<span className="w-1 h-1 rounded-full bg-neutral-600"></span>
<span>16GB</span>
<span className="w-1 h-1 rounded-full bg-neutral-600"></span>
<span>512GB</span>
<span className="w-1 h-1 rounded-full bg-neutral-600"></span>
<span>14"</span>
</p>
<div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6">
<span className="text-xl font-medium">$1,199</span>
<span className="px-5 py-2 rounded-full border border-white/20 text-base font-medium text-neutral-300 group-hover:bg-white group-hover:text-black transition-all">View</span>
</div>
</div>
</div>
</div>

<div className="glow-card relative rounded-3xl bg-[#0a0a0a] border border-white/10 p-2 overflow-hidden group cursor-pointer transition-transform duration-500 hover:-translate-y-1">
<div className="glow-effect absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
<div className="relative z-10 bg-[#0a0a0a] rounded-2xl h-full flex flex-col">
<div className="aspect-[16/10] bg-neutral-900/50 rounded-xl mb-6 m-2 flex items-center justify-center relative overflow-hidden border border-white/5">
<i className="w-16 h-16 text-neutral-700" data-lucide="laptop-2"></i>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-50"></div>
</div>
<div className="px-6 pb-6 flex-grow flex flex-col">
<h3 className="text-2xl font-semibold tracking-tight mb-2 group-hover:text-white transition-colors">NovaBook Pro 16</h3>
<p className="text-base text-neutral-400 mb-8 flex items-center gap-2 flex-wrap">
<span>Creator-ready</span>
<span className="w-1 h-1 rounded-full bg-neutral-600"></span>
<span>32GB</span>
<span className="w-1 h-1 rounded-full bg-neutral-600"></span>
<span>1TB</span>
<span className="w-1 h-1 rounded-full bg-neutral-600"></span>
<span>OLED</span>
</p>
<div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6">
<span className="text-xl font-medium">$1,899</span>
<span className="px-5 py-2 rounded-full border border-white/20 text-base font-medium text-neutral-300 group-hover:bg-white group-hover:text-black transition-all">View</span>
</div>
</div>
</div>
</div>

<div className="glow-card relative rounded-3xl bg-[#0a0a0a] border border-white/10 p-2 overflow-hidden group cursor-pointer transition-transform duration-500 hover:-translate-y-1">
<div className="glow-effect absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
<div className="relative z-10 bg-[#0a0a0a] rounded-2xl h-full flex flex-col">
<div className="aspect-[16/10] bg-neutral-900/50 rounded-xl mb-6 m-2 flex items-center justify-center relative overflow-hidden border border-white/5">
<i className="w-16 h-16 text-neutral-700" data-lucide="pc-case"></i>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-50"></div>
</div>
<div className="px-6 pb-6 flex-grow flex flex-col">
<h3 className="text-2xl font-semibold tracking-tight mb-2 group-hover:text-white transition-colors">Nova Tower Core</h3>
<p className="text-base text-neutral-400 mb-8 flex items-center gap-2 flex-wrap">
<span>Quiet power</span>
<span className="w-1 h-1 rounded-full bg-neutral-600"></span>
<span>32GB</span>
<span className="w-1 h-1 rounded-full bg-neutral-600"></span>
<span>1TB</span>
<span className="w-1 h-1 rounded-full bg-neutral-600"></span>
<span>RTX</span>
</p>
<div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6">
<span className="text-xl font-medium">$1,599</span>
<span className="px-5 py-2 rounded-full border border-white/20 text-base font-medium text-neutral-300 group-hover:bg-white group-hover:text-black transition-all">View</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative border-t border-white/5 overflow-hidden">

<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-20 text-center">Why choose Techzy</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<i className="w-8 h-8" data-lucide="search"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4">Transparent specs</h3>
<p className="text-lg text-neutral-400 leading-relaxed">No confusing SKUs. Every model is explained in plain language so you know exactly what you're getting.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<i className="w-8 h-8" data-lucide="zap"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4">Fast delivery</h3>
<p className="text-lg text-neutral-400 leading-relaxed">Ship within 48 hours on most in-stock configurations. Because your work can't wait.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<i className="w-8 h-8" data-lucide="headphones"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4">Human support</h3>
<p className="text-lg text-neutral-400 leading-relaxed">Get setup advice and warranty help from real people who understand your technical needs.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative border-t border-white/5 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-12">Categories</h2>

<div className="inline-flex bg-white/5 border border-white/10 rounded-full p-1.5 mb-12">
<button className="px-8 py-2.5 rounded-full bg-white text-black text-base font-medium shadow-sm transition-all">Laptops</button>
<button className="px-8 py-2.5 rounded-full text-neutral-400 hover:text-white text-base font-medium transition-all">Desktops</button>
<button className="px-8 py-2.5 rounded-full text-neutral-400 hover:text-white text-base font-medium transition-all">Accessories</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glow-card relative rounded-3xl bg-[#0a0a0a] border border-white/10 p-8 overflow-hidden group cursor-pointer">
<div className="glow-effect absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
<div className="relative z-10">
<i className="w-10 h-10 text-white mb-6" data-lucide="laptop"></i>
<h3 className="text-2xl font-semibold tracking-tight mb-3">Laptops</h3>
<p className="text-lg text-neutral-400">Portable power for work and travel. Engineered for efficiency.</p>
</div>
</div>
<div className="glow-card relative rounded-3xl bg-[#0a0a0a] border border-white/10 p-8 overflow-hidden group cursor-pointer">
<div className="glow-effect absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
<div className="relative z-10">
<i className="w-10 h-10 text-white mb-6" data-lucide="monitor"></i>
<h3 className="text-2xl font-semibold tracking-tight mb-3">Desktops</h3>
<p className="text-lg text-neutral-400">Maximum performance, minimal noise. For your permanent setup.</p>
</div>
</div>
<div className="glow-card relative rounded-3xl bg-[#0a0a0a] border border-white/10 p-8 overflow-hidden group cursor-pointer">
<div className="glow-effect absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
<div className="relative z-10">
<i className="w-10 h-10 text-white mb-6" data-lucide="keyboard"></i>
<h3 className="text-2xl font-semibold tracking-tight mb-3">Accessories</h3>
<p className="text-lg text-neutral-400">Keyboards, docks, and premium add-ons to complete your desk.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 relative border-y border-white/10 bg-[#020202] overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[100px]"></div>
</div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">Ready to pick your next machine?</h2>
<p className="text-xl md:text-2xl text-neutral-400 mb-12 max-w-2xl mx-auto">Tell us how you work. We'll recommend the right configuration in minutes.</p>
<button className="px-10 py-5 bg-white text-black rounded-full font-medium text-xl hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                Get recommendations
            </button>
</div>
</section>

<footer className="bg-[#030303] py-20 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
<div>
<a className="font-semibold text-xl tracking-tight text-white flex items-center gap-2 mb-8" href="#">
<i className="w-6 h-6" data-lucide="cpu"></i>
                    Techzy
                </a>
<div className="text-lg text-neutral-400 space-y-2 mb-12">
<p>hello@techzy.example</p>
<p>+1 (555) 012-3456</p>
<p>San Francisco, CA</p>
</div>
<p className="text-base text-neutral-600">© 2026 Techzy. All rights reserved.</p>
</div>
<div className="md:text-right">
<h4 className="text-lg font-medium text-white mb-6">Pages</h4>
<ul className="space-y-4 text-lg text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#">Products</a></li>
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
</footer>



    </>
  );
}
