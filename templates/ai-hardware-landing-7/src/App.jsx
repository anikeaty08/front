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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Syne', 'sans-serif'],
},
colors: {
dark: {
900: '#050505', // Pure Black
800: '#0f0f0f',
700: '#1a1a1a',
},
accent: {
orange: '#FF3D00', // International Orange
light: '#FFDBD0',
white: '#FFFFFF',
}
},
backgroundImage: {
'gradient-glow': 'linear-gradient(135deg, #FF3D00 0%, #FFFFFF 100%)',
'glass': 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- Smooth Scroll Interaction ---
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // --- Three.js Setup ---
        const initThree = () => {
            const canvas = document.querySelector('#webgl-canvas');
            const scene = new THREE.Scene();
            
            // Fog for depth (Darker for contrast)
            scene.fog = new THREE.FogExp2(0x050505, 0.02);

            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({
                canvas: canvas,
                alpha: true,
                antialias: true
            });

            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            // Geometry: Sphere of Particles (The "Sun/Core")
            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCount = 2000;
            const posArray = new Float32Array(particlesCount * 3);

            for(let i = 0; i < particlesCount * 3; i+=3) {
                // Spherical distribution
                const r = 12;
                // Random point inside sphere
                const theta = Math.random() * 2 * Math.PI;
                const phi = Math.acos(2 * Math.random() - 1);
                const distance = Math.pow(Math.random(), 1/3) * r; // Distribute evenly
                
                posArray[i] = distance * Math.sin(phi) * Math.cos(theta);
                posArray[i+1] = distance * Math.sin(phi) * Math.sin(theta);
                posArray[i+2] = distance * Math.cos(phi);
            }

            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

            // Material: Orange Points
            const particlesMaterial = new THREE.PointsMaterial({
                size: 0.05,
                color: 0xFF3D00, // Vibrant Orange
                transparent: true,
                opacity: 0.8,
                sizeAttenuation: true
            });

            const sphereMesh = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(sphereMesh);

            // Add a second outer layer of faint white particles
            const outerGeometry = new THREE.BufferGeometry();
            const outerCount = 500;
            const outerPos = new Float32Array(outerCount * 3);
             for(let i = 0; i < outerCount * 3; i+=3) {
                const r = 18; // Larger radius
                const theta = Math.random() * 2 * Math.PI;
                const phi = Math.acos(2 * Math.random() - 1);
                
                outerPos[i] = r * Math.sin(phi) * Math.cos(theta);
                outerPos[i+1] = r * Math.sin(phi) * Math.sin(theta);
                outerPos[i+2] = r * Math.cos(phi);
            }
            outerGeometry.setAttribute('position', new THREE.BufferAttribute(outerPos, 3));
            const outerMaterial = new THREE.PointsMaterial({
                size: 0.03,
                color: 0xFFFFFF,
                transparent: true,
                opacity: 0.3
            });
            const outerMesh = new THREE.Points(outerGeometry, outerMaterial);
            scene.add(outerMesh);

            // Camera positioning
            camera.position.z = 25;

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

            // Clock for smooth animation
            const clock = new THREE.Clock();

            const animate = () => {
                const elapsedTime = clock.getElapsedTime();

                targetX = mouseX * 0.0005;
                targetY = mouseY * 0.0005;

                // Rotate Sphere
                sphereMesh.rotation.y = elapsedTime * 0.1;
                outerMesh.rotation.y = elapsedTime * 0.05;
                outerMesh.rotation.x = elapsedTime * 0.02;

                // Mouse interaction tilt
                scene.rotation.y += 0.05 * (targetX - scene.rotation.y);
                scene.rotation.x += 0.05 * (targetY - scene.rotation.x);

                renderer.render(scene, camera);
                requestAnimationFrame(animate);
            };

            animate();

            // Resize Handler
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        }

        // --- Intersection Observer for Scroll Animations ---
        const initScrollAnimations = () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, {
                threshold: 0.1
            });

            document.querySelectorAll('.reveal-on-scroll').forEach(el => {
                observer.observe(el);
            });
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            initThree();
            initScrollAnimations();
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
      

<div className="noise-overlay"></div>

<canvas className="fixed top-0 left-0 w-full h-full -z-10 opacity-60" height="858" id="webgl-canvas" width="1320"></canvas>

<nav className="fixed top-0 w-full z-40 px-6 py-6 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto flex justify-between items-center glass-panel rounded-full px-6 py-3">
<a className="font-display font-bold text-lg tracking-widest text-white uppercase z-10 flex items-center gap-2 hover:text-accent-orange transition-colors" href="#">
                AURA
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="nav-link text-sm font-medium text-white/70 hover:text-white transition-colors" href="#features">Capabilities</a>
<a className="nav-link text-sm font-medium text-white/70 hover:text-white transition-colors" href="#design">Design</a>
<a className="nav-link text-sm font-medium text-white/70 hover:text-white transition-colors" href="#preorder">Pricing</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-accent-orange hover:bg-white text-white hover:text-accent-orange text-xs font-semibold px-5 py-2.5 rounded-full transition-all border border-accent-orange/20 shadow-[0_0_20px_rgba(255,61,0,0.3)] group" href="#preorder">
<span className="transition-colors">Reserve Now</span>
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-white hover:text-accent-orange transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="">

<section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-orange/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10 text-center max-w-5xl mx-auto">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-orange/20 bg-accent-orange/5 backdrop-blur-sm mb-8 animate-float">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-accent-orange"></span>
</span>
<span className="text-xs font-medium tracking-wide text-accent-orange uppercase">Prototype Phase 2</span>
</div>
<h1 className="font-display font-semibold text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-8">
<span className="block text-white">Think</span>
<span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-orange via-white to-orange-200 italic font-light pr-4">Forward.</span>
</h1>
<p className="font-sans text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
                    An operating system for your life. Powered by a neural core that anticipates, adapts, and evolves with you.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="group relative px-8 py-4 rounded-full bg-white text-dark-900 font-semibold text-sm overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]" onclick="document.getElementById('features').scrollIntoView({behavior: 'smooth'})">
<span className="relative flex items-center gap-2">
                            Explore Features
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
</button>
<button className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-medium text-sm backdrop-blur-md hover:bg-white/10 hover:border-accent-orange/50 transition-all flex items-center gap-2 group">
<iconify-icon className="group-hover:text-accent-orange transition-colors" icon="solar:play-circle-linear" width="18"></iconify-icon>
                        Watch the Film
                    </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce cursor-pointer hover:opacity-100 transition-opacity" onclick="document.getElementById('features').scrollIntoView({behavior: 'smooth'})">
<span className="text-[10px] uppercase tracking-widest">Scroll</span>
<iconify-icon icon="solar:mouse-minimalistic-linear" width="20"></iconify-icon>
</div>
</section>

<section className="py-32 px-6 relative z-10" id="features">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal-on-scroll">
<div>
<h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight mb-4">Beyond <span className="text-gradient-accent">Raw Data</span></h2>
<p className="text-white/50 max-w-md text-sm md:text-base">AURA translates complex world data into actionable intuition. It's not just smart; it's wise.</p>
</div>
<div className="flex items-center gap-2 text-accent-orange text-sm font-medium border-b border-accent-orange/30 pb-1">
<iconify-icon icon="solar:stars-minimalistic-linear"></iconify-icon>
<span>Neural Core v2</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-3xl reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-2xl bg-accent-orange/10 border border-accent-orange/20 flex items-center justify-center mb-6 text-accent-orange pulsing-eye relative">
<iconify-icon icon="solar:brain-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl mb-3">Active Learning</h3>
<p className="text-white/50 text-sm leading-relaxed">The system rebuilds its understanding of your habits every 24 hours to ensure perfect synchronization.</p>
</div>

<div className="glass-panel p-8 rounded-3xl reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl mb-3">Adaptive Home</h3>
<p className="text-white/50 text-sm leading-relaxed">Lighting, temperature, and soundscapes that shift subtly based on the time of day and your activity level.</p>
</div>

<div className="glass-panel p-8 rounded-3xl reveal-on-scroll" style={{transitionDelay: '300ms'}}>
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl mb-3">Privacy First</h3>
<p className="text-white/50 text-sm leading-relaxed">All voice data is processed locally on the Neural Core. Nothing leaves your home without explicit permission.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10 bg-dark-800/30 border-y border-white/5" id="design">
<div className="max-w-7xl mx-auto">
<h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight mb-16 text-center reveal-on-scroll">Designed for Humans</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 md:row-span-2 group relative rounded-3xl overflow-hidden border border-white/10 reveal-on-scroll bg-black">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,61,0,0.15),transparent_60%)]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-accent-orange/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
<div className="w-32 h-32 rounded-full bg-accent-orange/20 blur-xl animate-pulse"></div>
<div className="w-40 h-40 rounded-full border border-accent-orange/10 border-dashed animate-[spin_10s_linear_infinite]"></div>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full z-10">
<div className="flex justify-between items-end">
<div>
<span className="text-xs font-mono text-accent-orange mb-2 block uppercase tracking-widest">Visual Feedback</span>
<h3 className="font-display text-2xl font-medium">Warmth in Technology</h3>
<p className="text-white/40 text-sm mt-2 max-w-xs">Amber LED matrix conveys status without intrusive screens.</p>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-2 group relative rounded-3xl overflow-hidden border border-white/10 reveal-on-scroll bg-gradient-to-b from-[#1a1a1a] to-black">
<div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<span className="text-xs font-mono text-white/40 mb-2 block uppercase">Structure</span>
<h3 className="font-display text-xl font-medium">Ceramic &amp; Steel</h3>
<p className="text-white/40 text-xs mt-2">Matte white ceramic coating over a surgical steel frame.</p>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 group relative rounded-3xl overflow-hidden border border-white/10 reveal-on-scroll bg-dark-800 hover:bg-white/5 transition-colors">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:text-accent-orange group-hover:border-accent-orange/30 transition-all">
<iconify-icon icon="solar:bolt-circle-linear" width="32"></iconify-icon>
</div>
</div>
<div className="absolute bottom-6 left-6">
<span className="text-xs font-mono text-white/50 uppercase">Zero Latency</span>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 group relative rounded-3xl overflow-hidden border border-white/10 reveal-on-scroll bg-dark-800">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent hover:bg-accent-orange/5 transition-colors flex flex-col justify-between p-6">
<div className="flex justify-between items-start">
<iconify-icon className="text-white/70" icon="solar:cloud-linear" width="28"></iconify-icon>
<span className="text-[10px] border border-white/10 px-2 py-1 rounded-full text-white/40">SYNC</span>
</div>
<div>
<h3 className="font-display text-lg font-medium">Unified Cloud</h3>
<p className="text-xs text-white/40 mt-1">Seamless across devices</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 relative z-10 overflow-hidden" id="preorder">
<div className="text-center max-w-4xl mr-auto ml-auto relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-accent-orange/10 rounded-full pointer-events-none animate-pulse"></div>
<h2 className="font-display font-semibold text-5xl md:text-7xl tracking-tight mb-8 reveal-on-scroll">
                    Intelligent Life<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-white">Awaits You.</span>
</h2>
<div className="glass-panel max-w-md mx-auto rounded-3xl p-8 mb-12 reveal-on-scroll border-accent-orange/20">
<div className="text-sm text-accent-orange font-mono mb-2 uppercase tracking-widest">Early Access</div>
<div className="text-5xl font-bold font-display mb-2">₹4,999</div>
<p className="text-white/40 text-sm mb-6">First batch shipping Q2 2026</p>
<ul className="text-left space-y-3 mb-8 text-sm text-white/70">
<li className="flex items-center gap-3">
<iconify-icon className="text-accent-orange" icon="solar:check-circle-linear"></iconify-icon>
                            White Ceramic Edition
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-accent-orange" icon="solar:check-circle-linear"></iconify-icon>
                            Lifetime Core Updates
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-accent-orange" icon="solar:check-circle-linear"></iconify-icon>
                            Priority Support
                        </li>
</ul>
<button className="w-full group relative inline-flex justify-center items-center gap-2 px-8 py-4 bg-accent-orange hover:bg-white hover:text-accent-orange text-white rounded-full font-semibold text-sm overflow-hidden transition-all hover:scale-[1.02] shadow-[0_0_40px_rgba(255,61,0,0.3)]">
<span>Secure Reservation</span>
<iconify-icon icon="solar:card-linear" width="18"></iconify-icon>
</button>
<div className="mt-4 text-xs text-white/30 text-center">No payment required today</div>
</div>
<div className="flex justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-display font-bold">WIRED</span>
<span className="text-lg font-display font-bold">The Verge</span>
<span className="text-lg font-display font-bold">FastCompany</span>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 py-12 px-6 relative z-10 bg-dark-900">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<span className="font-display font-bold text-xl tracking-widest uppercase hover:text-accent-orange transition-colors cursor-pointer">AURA</span>
<span className="text-xs text-white/30 ml-2">© 2026</span>
</div>
<div className="flex gap-8">
<a className="text-white/40 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-white/40 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
<a className="text-white/40 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
