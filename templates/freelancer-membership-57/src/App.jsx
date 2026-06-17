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
display: ['Inter', 'sans-serif'],
body: ['Geist Sans', 'Inter', 'sans-serif'],
},
colors: {
'accent': '#3b82f6', /* Blue-500 */
'glass': 'rgba(255, 255, 255, 0.03)',
'glass-border': 'rgba(255, 255, 255, 0.08)',
},
letterSpacing: {
'tight': '-0.04em',
}
}
}
}



        // --- 1. LENIS SMOOTH SCROLL ---
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // --- 2. THREE.JS FLUID PARTICLES ---
        const canvas = document.querySelector('#webgl');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 2000;
        const posArray = new Float32Array(particlesCount * 3);
        
        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 15;
        }
        
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const material = new THREE.PointsMaterial({
            size: 0.015,
            color: 0x3b82f6, // Blue-500
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });
        
        const particlesMesh = new THREE.Points(particlesGeometry, material);
        scene.add(particlesMesh);
        camera.position.z = 3;

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
        const tick = () => {
            targetX = mouseX * 0.001;
            targetY = mouseY * 0.001;
            const elapsedTime = clock.getElapsedTime();

            particlesMesh.rotation.y = .1 * elapsedTime;
            particlesMesh.rotation.x += .05 * (targetY - particlesMesh.rotation.x);
            particlesMesh.rotation.y += .05 * (targetX - particlesMesh.rotation.y);

            // Wave effect
            for (let i = 0; i < particlesCount; i++) {
                const i3 = i * 3;
                const x = particlesGeometry.attributes.position.array[i3];
                particlesGeometry.attributes.position.array[i3 + 1] = Math.sin(elapsedTime + x) * 0.5 + (Math.random() - 0.5) * 0.05;
            }
            particlesGeometry.attributes.position.needsUpdate = true;
            renderer.render(scene, camera);
            window.requestAnimationFrame(tick);
        }
        tick();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // --- 3. GSAP ANIMATIONS ---
        // Text Splitter Helper
        const revealElements = document.querySelectorAll('.reveal-text');
        revealElements.forEach(element => {
            const text = element.textContent;
            element.innerHTML = '';
            const span = document.createElement('span');
            span.textContent = text;
            span.className = 'char';
            element.appendChild(span);
        });

        // Preloader Sequence
        const tl = gsap.timeline();
        tl.to('.loader-bar', { height: '100%', duration: 1.5, ease: "power4.inOut" })
          .to('.counter', { textContent: 100, duration: 1.5, roundProps: "textContent", ease: "power4.inOut" }, "<")
          .to('.loader-wrap', { y: '-100%', duration: 1, ease: "power4.inOut", delay: 0.2 })
          .to('#webgl', { opacity: 1, duration: 1 }, "-=0.5")
          .to('.char', { y: 0, duration: 1.2, ease: "power4.out", stagger: 0.05 }, "-=0.5")
          .to('.hero-desc', { opacity: 1, duration: 1 }, "-=0.8")
          .to('.hero-tag', { opacity: 1, y: 0, duration: 0.8 }, "-=1");

        // Scroll Animations
        gsap.registerPlugin(ScrollTrigger);
        
        // Parallax Work Cards
        const cards = document.querySelectorAll('.case-card');
        cards.forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom",
                    end: "top center",
                    scrub: 1,
                },
                scale: 0.9,
                opacity: 0,
                y: 100
            });
        });

        // --- 4. SPOTLIGHT & CURSOR LOGIC ---
        const spotlightCards = document.querySelectorAll('.spotlight');
        document.addEventListener('mousemove', e => {
            spotlightCards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        const cursorDot = document.querySelector('.cursor-dot');
        const cursorCircle = document.querySelector('.cursor-circle');
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.1 });
            gsap.to(cursorCircle, { x: e.clientX, y: e.clientY, duration: 0.4 });
        });

        const interactables = document.querySelectorAll('a, button, .case-card, .spotlight, .magnetic');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => cursorCircle.classList.add('active'));
            el.addEventListener('mouseleave', () => cursorCircle.classList.remove('active'));
        });

        const magnets = document.querySelectorAll('.magnetic');
        magnets.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3 });
            });
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, { x: 0, y: 0, duration: 0.3 });
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
      

<div className="noise"></div>
<div className="cursor-dot hidden md:block"></div>
<div className="cursor-circle hidden md:block"></div>
<canvas id="webgl"></canvas>

<div className="loader-wrap">
<div className="loader-bar"></div>
<div className="loader-text"><span className="counter">000</span>% // INITIALIZING HUB</div>
</div>

<nav className="fixed top-0 left-0 w-full z-[100] px-6 py-6 mix-blend-exclusion">
<div className="flex justify-between items-center max-w-[1800px] mx-auto">
<a className="flex items-center gap-3 group magnetic" href="#">
<div className="w-8 h-8 border border-white/30 flex items-center justify-center overflow-hidden bg-white/10 backdrop-blur-md rounded-lg">
<iconify-icon className="text-white group-hover:scale-125 transition-transform duration-500" icon="lucide:layers"></iconify-icon>
</div>
<span className="font-display font-semibold tracking-tight text-sm text-white">GrowthHub</span>
</a>
<div className="hidden md:flex gap-1">
<a className="magnetic px-5 py-2 text-xs font-body font-medium text-zinc-400 hover:text-white transition-colors" href="#problem">The Problem</a>
<a className="magnetic px-5 py-2 text-xs font-body font-medium text-zinc-400 hover:text-white transition-colors" href="#layers">The Layers</a>
<a className="magnetic px-5 py-2 text-xs font-body font-medium text-zinc-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<a className="magnetic hidden md:flex items-center gap-2 border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 group" href="#pricing">
<span className="text-xs font-body font-semibold tracking-wide">Join Now</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
<button className="md:hidden text-white"><iconify-icon icon="lucide:menu" width="24"></iconify-icon></button>
</div>
</nav>

<header className="relative h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="z-10 text-center flex flex-col items-center">
<div className="mb-8 overflow-hidden">
<div className="hero-tag opacity-0 translate-y-full font-body text-[10px] font-semibold text-blue-300 tracking-wider uppercase border border-blue-500/30 px-3 py-1.5 rounded-full bg-blue-900/10 backdrop-blur-md flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                    Membership Open
                </div>
</div>
<h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight text-white text-center mb-6">
<div className="reveal-text">Beyond Client Work.</div>
<div className="reveal-text flex flex-col md:block">
<span className="text-zinc-500">A Place Built</span>
<span className="italic font-normal text-blue-400">For You.</span>
</div>
</h1>
<div className="mt-8 max-w-xl text-center">
<p className="hero-desc opacity-0 font-body text-sm md:text-base text-zinc-400 font-normal leading-relaxed">
                    When the old freelancing model stops matching your ambition, this is your next move. Delivering work <i>and</i> building assets.
                </p>
</div>
</div>
<div className="absolute bottom-12 left-0 w-full px-6 flex justify-between items-end mix-blend-exclusion">
<div className="hidden md:block text-[10px] font-body font-medium text-zinc-500 uppercase tracking-widest max-w-[200px]">
                Scroll to evolve<br/>your career
            </div>
<div className="flex gap-12">
<div>
<div className="text-2xl font-display font-semibold tracking-tight">500+</div>
<div className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest">Members</div>
</div>
<div>
<div className="text-2xl font-display font-semibold tracking-tight">85%</div>
<div className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest">Recurring Revenue</div>
</div>
</div>
</div>
</header>

<section className="py-10 border-y border-white/5 bg-black/50 backdrop-blur-sm marquee-container relative z-20">
<div className="marquee-content">
<span className="text-2xl font-display font-semibold text-zinc-800 flex items-center gap-4">CLIENT WORK <iconify-icon className="text-blue-500" icon="lucide:minus"></iconify-icon></span>
<span className="text-2xl font-display font-semibold text-zinc-600 flex items-center gap-4">DIGITAL ASSETS <iconify-icon className="text-blue-500" icon="lucide:minus"></iconify-icon></span>
<span className="text-2xl font-display font-semibold text-zinc-800 flex items-center gap-4">CONSULTING <iconify-icon className="text-blue-500" icon="lucide:minus"></iconify-icon></span>
<span className="text-2xl font-display font-semibold text-zinc-600 flex items-center gap-4">COMMUNITY <iconify-icon className="text-blue-500" icon="lucide:minus"></iconify-icon></span>
<span className="text-2xl font-display font-semibold text-zinc-800 flex items-center gap-4">WORKSHOPS <iconify-icon className="text-blue-500" icon="lucide:minus"></iconify-icon></span>
<span className="text-2xl font-display font-semibold text-zinc-600 flex items-center gap-4">AUTHORITY <iconify-icon className="text-blue-500" icon="lucide:minus"></iconify-icon></span>
<span className="text-2xl font-display font-semibold text-zinc-800 flex items-center gap-4">CLIENT WORK <iconify-icon className="text-blue-500" icon="lucide:minus"></iconify-icon></span>
<span className="text-2xl font-display font-semibold text-zinc-600 flex items-center gap-4">DIGITAL ASSETS <iconify-icon className="text-blue-500" icon="lucide:minus"></iconify-icon></span>
</div>
</section>

<section className="relative pt-32 pb-32 px-4 z-10" id="problem">
<div className="max-w-[1400px] mx-auto">
<div className="flex items-end justify-between mb-24 border-b border-white/10 pb-8">
<h2 className="text-5xl md:text-6xl font-display font-semibold tracking-tight text-white">THE SHIFT</h2>
<div className="text-right hidden md:block">
<p className="text-zinc-500 font-body text-xs uppercase tracking-widest">We filter the noise.<br/>Focus on the signal.</p>
</div>
</div>

<div className="sticky top-20 mb-24 perspective-container">
<div className="case-card w-full min-h-[70vh] bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 relative group hover:border-blue-500/30 transition-colors duration-500">
<div className="p-12 lg:p-16 flex flex-col justify-between order-2 lg:order-1 relative z-10">
<div>
<div className="flex items-center gap-3 mb-8">
<span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
<span className="font-body text-[10px] font-bold text-red-500 uppercase tracking-widest">The Problem</span>
</div>
<h3 className="text-4xl md:text-5xl font-display font-semibold mb-6 tracking-tight text-white">Escaping The Repeat</h3>
<p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-md font-body">
                                We reject the model of "Learn skill → Get client → Repeat". If the budget doesn't compound or the relationship doesn't grow, you won't see it here.
                            </p>
</div>
<div className="grid grid-cols-2 gap-8 pt-12 border-t border-white/5 mt-12">
<div>
<span className="block text-2xl font-display font-semibold text-white mb-1">0%</span>
<span className="block text-[10px] font-body text-zinc-600 uppercase tracking-widest">Equity Built</span>
</div>
<div>
<span className="block text-2xl font-display font-semibold text-white mb-1">100%</span>
<span className="block text-[10px] font-body text-zinc-600 uppercase tracking-widest">Time Dependent</span>
</div>
</div>
</div>
<div className="relative order-1 lg:order-2 overflow-hidden h-[300px] lg:h-auto bg-zinc-900">
<div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0A0A0A] z-10"></div>

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-zinc-700 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-1000"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-zinc-600 rounded-full opacity-30 group-hover:scale-125 transition-transform duration-1000"></div>
</div>
</div>
</div>

<div className="sticky top-28 mb-24 perspective-container">
<div className="case-card w-full min-h-[70vh] bg-[#080808] border border-white/10 rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 relative group hover:border-blue-500/30 transition-colors duration-500">
<div className="p-12 lg:p-16 flex flex-col justify-between order-2 lg:order-1 relative z-10">
<div>
<div className="flex items-center gap-3 mb-8">
<span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
<span className="font-body text-[10px] font-bold text-blue-500 uppercase tracking-widest">The Solution</span>
</div>
<h3 className="text-4xl md:text-5xl font-display font-semibold mb-6 tracking-tight text-white">Asset Ownership</h3>
<p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-md font-body">
                                Transition from renting your time to owning your output. Build libraries, frameworks, and products that sell while you sleep.
                            </p>
</div>
<div className="grid grid-cols-2 gap-8 pt-12 border-t border-white/5 mt-12">
<div>
<span className="block text-2xl font-display font-semibold text-white mb-1">85%</span>
<span className="block text-[10px] font-body text-zinc-600 uppercase tracking-widest">Recurring Revenue</span>
</div>
<div>
<span className="block text-2xl font-display font-semibold text-white mb-1">High</span>
<span className="block text-[10px] font-body text-zinc-600 uppercase tracking-widest">Leverage</span>
</div>
</div>
</div>
<div className="relative order-1 lg:order-2 overflow-hidden h-[300px] lg:h-auto bg-zinc-900">
<div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#080808] z-10"></div>
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(45deg, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500 rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 relative z-10 bg-[#030303]" id="layers">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="max-w-[1400px] mx-auto">
<div className="mb-20">
<h2 className="text-4xl md:text-6xl font-display font-semibold tracking-tight mb-6 text-white">THE LAYERS</h2>
<p className="text-zinc-500 max-w-md font-body text-sm md:text-base">We don't skip steps. We build the foundation, frame the offer, and scale the asset.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-white/5 border border-white/5 p-px">

<div className="spotlight spotlight-border p-10 min-h-[450px] flex flex-col justify-between group cursor-pointer">
<div>
<div className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center mb-8 bg-white/5">
<iconify-icon className="text-blue-400" icon="lucide:box" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-display font-semibold text-white mb-4 tracking-tight">Foundation &amp; Framing</h3>
<p className="text-zinc-500 text-sm font-body leading-relaxed">Stop pitching "services." Start pitching outcomes. We rebuild your portfolio to look like a consultancy, not a hired gun.</p>
</div>
<div className="flex justify-between items-end">
<span className="text-[10px] font-body font-bold text-zinc-700">LAYER 01</span>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="lucide:arrow-up-right"></iconify-icon>
</div>
</div>
</div>

<div className="spotlight spotlight-border p-10 min-h-[450px] flex flex-col justify-between group cursor-pointer">
<div>
<div className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center mb-8 bg-white/5">
<iconify-icon className="text-blue-400" icon="lucide:package-check" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-display font-semibold text-white mb-4 tracking-tight">Productization</h3>
<p className="text-zinc-500 text-sm font-body leading-relaxed">Turn repetitive tasks into sellable products. Workshops, audits, and strategy sessions that run without scope creep.</p>
</div>
<div className="flex justify-between items-end">
<span className="text-[10px] font-body font-bold text-zinc-700">LAYER 02</span>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="lucide:arrow-up-right"></iconify-icon>
</div>
</div>
</div>

<div className="spotlight spotlight-border p-10 min-h-[450px] flex flex-col justify-between group cursor-pointer">
<div>
<div className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center mb-8 bg-white/5">
<iconify-icon className="text-blue-400" icon="lucide:network" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-display font-semibold text-white mb-4 tracking-tight">The Ecosystem</h3>
<p className="text-zinc-500 text-sm font-body leading-relaxed">The final evolution. You are no longer the primary deliverable. You own the platform, the community, or the agency.</p>
</div>
<div className="flex justify-between items-end">
<span className="text-[10px] font-body font-bold text-zinc-700">LAYER 03</span>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="lucide:arrow-up-right"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-[80vh] flex items-center justify-center relative px-6 py-20 overflow-hidden" id="pricing">
<div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black z-0"></div>
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-display font-semibold text-white tracking-tight mb-8">
                INVEST IN YOUR<br/>
<span className="text-zinc-600">TRAJECTORY.</span>
</h2>
<div className="grid md:grid-cols-2 gap-6 mt-16 text-left">

<div className="p-8 border border-white/10 rounded-xl bg-white/5 hover:border-blue-500/50 transition-all group cursor-pointer backdrop-blur-sm">
<h3 className="text-lg font-display font-semibold text-white mb-2">Quarterly</h3>
<div className="text-3xl font-display font-bold text-white mb-4">$149<span className="text-sm font-body text-zinc-500 font-normal">/qtr</span></div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-xs text-zinc-400"><iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> Foundation Modules</li>
<li className="flex items-center gap-3 text-xs text-zinc-400"><iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> Community Access</li>
</ul>
<button className="w-full py-3 rounded border border-white/20 text-xs font-semibold text-white hover:bg-white hover:text-black transition-colors">Select Plan</button>
</div>

<div className="p-8 border border-blue-500/30 rounded-xl bg-blue-900/10 hover:border-blue-500 transition-all group cursor-pointer backdrop-blur-sm relative overflow-hidden">
<div className="absolute top-0 right-0 bg-blue-600 px-3 py-1 rounded-bl text-[9px] font-bold text-white uppercase tracking-wider">Best Value</div>
<h3 className="text-lg font-display font-semibold text-white mb-2">Yearly</h3>
<div className="text-3xl font-display font-bold text-white mb-4">$499<span className="text-sm font-body text-zinc-500 font-normal">/year</span></div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-xs text-zinc-300"><iconify-icon className="text-blue-400" icon="lucide:check"></iconify-icon> <strong>All Layers (1, 2 &amp; 3)</strong></li>
<li className="flex items-center gap-3 text-xs text-zinc-300"><iconify-icon className="text-blue-400" icon="lucide:check"></iconify-icon> Asset Workshops</li>
<li className="flex items-center gap-3 text-xs text-zinc-300"><iconify-icon className="text-blue-400" icon="lucide:check"></iconify-icon> Proposal Vault</li>
</ul>
<button className="w-full py-3 rounded bg-blue-600 text-xs font-semibold text-white hover:bg-blue-500 transition-colors">Become a Member</button>
</div>
</div>
</div>
</section>

<footer className="bg-black pt-32 pb-12 px-6 border-t border-white/10 relative z-20">
<div className="max-w-[1400px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end pt-12 border-t border-white/10">
<div className="flex flex-col gap-2">
<span className="text-xl font-display font-bold tracking-tight text-white">GrowthHub</span>
<span className="text-[10px] font-body text-zinc-600 uppercase tracking-widest">Build Assets. Not Jobs.</span>
</div>
<div className="flex gap-8 mt-8 md:mt-0">
<a className="text-[10px] font-body font-medium text-zinc-500 hover:text-white transition-colors uppercase" href="#">Twitter</a>
<a className="text-[10px] font-body font-medium text-zinc-500 hover:text-white transition-colors uppercase" href="#">Instagram</a>
<a className="text-[10px] font-body font-medium text-zinc-500 hover:text-white transition-colors uppercase" href="#">Login</a>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-[9px] font-body text-zinc-800 uppercase">© 2024 GrowthHub Inc. All Rights Reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
