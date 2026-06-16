import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
display: ['Clash Display', 'sans-serif'],
body: ['General Sans', 'sans-serif'],
},
colors: {
'accent': '#ffffff',
'subtle': '#888888',
'glass': 'rgba(255, 255, 255, 0.03)',
'glass-border': 'rgba(255, 255, 255, 0.08)',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
        // Creating a premium, "data-stream" look
        const canvas = document.querySelector('#webgl');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 3000; // Efficient count
        
        const posArray = new Float32Array(particlesCount * 3);
        
        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 15; // Spread
        }
        
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        
        const material = new THREE.PointsMaterial({
            size: 0.015,
            color: 0x6366f1, // Indigo-500
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
            
            // Rotate entire system slowly
            particlesMesh.rotation.y = .1 * elapsedTime;
            
            // Smooth mouse follow
            particlesMesh.rotation.x += .05 * (targetY - particlesMesh.rotation.x);
            particlesMesh.rotation.y += .05 * (targetX - particlesMesh.rotation.y);

            // Wave effect simulation
            for (let i = 0; i < particlesCount; i++) {
                const i3 = i * 3;
                const x = particlesGeometry.attributes.position.array[i3];
                // Simple sine wave displacement based on time and x-position
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
        
        // Text Splitter Helper (since we can't load SplitText plugin directly easily)
        const revealElements = document.querySelectorAll('.reveal-text');
        revealElements.forEach(element => {
            const text = element.textContent;
            element.innerHTML = '';
            const span = document.createElement('span');
            span.textContent = text;
            span.className = 'char'; // Styled in CSS
            element.appendChild(span);
        });

        // Preloader Sequence
        const tl = gsap.timeline();
        
        tl.to('.loader-bar', { height: '100%', duration: 1.5, ease: "power4.inOut" })
          .to('.counter', { 
              textContent: 100, 
              duration: 1.5, 
              roundProps: "textContent", 
              ease: "power4.inOut" 
          }, "<")
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
        
        // Spotlight
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

        // Custom Cursor
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorCircle = document.querySelector('.cursor-circle');
        
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.1 });
            gsap.to(cursorCircle, { x: e.clientX, y: e.clientY, duration: 0.4 });
        });

        // Hover States
        const interactables = document.querySelectorAll('a, button, .case-card, .spotlight');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => cursorCircle.classList.add('active'));
            el.addEventListener('mouseleave', () => cursorCircle.classList.remove('active'));
        });

        // Magnetic Buttons
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
  }, []);

  return (
    <>
      
<div className="noise"></div>
<div className="cursor-dot hidden md:block"></div>
<div className="cursor-circle hidden md:block"></div>
<canvas id="webgl"></canvas>
<div className="loader-wrap">
<div className="loader-bar"></div>
<div className="loader-text"><span className="counter">000</span>% // INITIALIZING COHORT</div>
</div>
<nav className="fixed top-0 left-0 w-full z-[100] px-6 py-6 mix-blend-exclusion">
<div className="flex justify-between items-center max-w-[1800px] mx-auto">
<a className="flex items-center gap-3 group magnetic" href="#">
<div className="w-8 h-8 border border-white/30 flex items-center justify-center overflow-hidden bg-white/10 backdrop-blur-md">
<div className="w-2 h-2 bg-white rounded-full group-hover:scale-[3] transition-transform duration-500"></div>
</div>
<span className="font-display font-bold tracking-widest text-sm">COHORT LABS</span>
</a>
<div className="hidden md:flex gap-1">
<a className="magnetic px-5 py-2 text-xs font-body font-medium uppercase tracking-widest text-zinc-400 hover:text-white transition-colors" href="#work">Work</a>
<a className="magnetic px-5 py-2 text-xs font-body font-medium uppercase tracking-widest text-zinc-400 hover:text-white transition-colors" href="#expertise">Expertise</a>
<a className="magnetic px-5 py-2 text-xs font-body font-medium uppercase tracking-widest text-zinc-400 hover:text-white transition-colors" href="#intel">Intel</a>
</div>
<a className="magnetic hidden md:flex items-center gap-2 border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 group" href="#contact">
<span className="text-xs font-body font-bold uppercase tracking-widest">Deploy Us</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="ph:arrow-right"></iconify-icon>
</a>
<button className="md:hidden text-white"><iconify-icon icon="ph:list" width="24"></iconify-icon></button>
</div>
</nav>
<header className="relative h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none">
</div>
<div className="z-10 text-center flex flex-col items-center">
<div className="mb-6 overflow-hidden">
<div className="hero-tag opacity-0 translate-y-full font-mono text-xs text-indigo-300 tracking-[0.3em] uppercase border border-indigo-500/30 px-3 py-1 rounded-full bg-indigo-900/10 backdrop-blur-md">
          System Online • V 4.0
        </div>
</div>
<h1 className="font-display text-[12vw] leading-[0.8] tracking-tighter text-white uppercase mix-blend-lighten text-center">
<div className="reveal-text">We Engineer</div>
<div className="reveal-text flex items-center justify-center gap-4">
<span className="text-zinc-600">Digital</span>
<span className="italic font-light">Cults</span>
</div>
</h1>
<div className="mt-12 max-w-xl text-center">
<p className="hero-desc opacity-0 font-body text-lg text-zinc-400 font-light leading-relaxed">
          The premier growth acceleration unit for the Web3 ecosystem.
          We weaponize narratives to build decentralized religions for
          L2s, DeFi protocols, and AI infrastructure.
        </p>
</div>
</div>
<div className="absolute bottom-12 left-0 w-full px-6 flex justify-between items-end mix-blend-exclusion">
<div className="hidden md:block text-[10px] font-mono text-zinc-500 uppercase tracking-widest max-w-[200px]">
        Scroll to explore<br/>the architecture
      </div>
<div className="flex gap-12">
<div>
<div className="text-2xl font-display">$4.2B+</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-widest">Value Created</div>
</div>
<div>
<div className="text-2xl font-display">24</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-widest">Protocols Scaled</div>
</div>
</div>
</div>
</header>
<section className="py-10 border-y border-white/5 bg-black/50 backdrop-blur-sm marquee-container relative z-20">
<div className="marquee-content">
<span className="text-3xl font-display font-bold text-zinc-800 flex items-center gap-4">OPTIMISM <iconify-icon className="text-zinc-800 text-sm" icon="ph:star-four-fill"></iconify-icon></span>
<span className="text-3xl font-display font-bold text-zinc-600 flex items-center gap-4">UNISWAP <iconify-icon className="text-zinc-800 text-sm" icon="ph:star-four-fill"></iconify-icon></span>
<span className="text-3xl font-display font-bold text-zinc-800 flex items-center gap-4">ARBITRUM <iconify-icon className="text-zinc-800 text-sm" icon="ph:star-four-fill"></iconify-icon></span>
<span className="text-3xl font-display font-bold text-zinc-600 flex items-center gap-4">CELESTIA <iconify-icon className="text-zinc-800 text-sm" icon="ph:star-four-fill"></iconify-icon></span>
<span className="text-3xl font-display font-bold text-zinc-800 flex items-center gap-4">BLUR <iconify-icon className="text-zinc-800 text-sm" icon="ph:star-four-fill"></iconify-icon></span>
<span className="text-3xl font-display font-bold text-zinc-600 flex items-center gap-4">LENS <iconify-icon className="text-zinc-800 text-sm" icon="ph:star-four-fill"></iconify-icon></span>
<span className="text-3xl font-display font-bold text-zinc-800 flex items-center gap-4">DYDX <iconify-icon className="text-zinc-800 text-sm" icon="ph:star-four-fill"></iconify-icon></span>
<span className="text-3xl font-display font-bold text-zinc-800 flex items-center gap-4">OPTIMISM <iconify-icon className="text-zinc-800 text-sm" icon="ph:star-four-fill"></iconify-icon></span>
<span className="text-3xl font-display font-bold text-zinc-600 flex items-center gap-4">UNISWAP <iconify-icon className="text-zinc-800 text-sm" icon="ph:star-four-fill"></iconify-icon></span>
<span className="text-3xl font-display font-bold text-zinc-800 flex items-center gap-4">ARBITRUM <iconify-icon className="text-zinc-800 text-sm" icon="ph:star-four-fill"></iconify-icon></span>
<span className="text-3xl font-display font-bold text-zinc-600 flex items-center gap-4">CELESTIA <iconify-icon className="text-zinc-800 text-sm" icon="ph:star-four-fill"></iconify-icon></span>
<span className="text-3xl font-display font-bold text-zinc-800 flex items-center gap-4">BLUR <iconify-icon className="text-zinc-800 text-sm" icon="ph:star-four-fill"></iconify-icon></span>
</div>
</section>
<section className="relative pt-32 pb-32 px-4 z-10" id="work">
<div className="max-w-[1600px] mx-auto">
<div className="flex items-end justify-between mb-24 border-b border-white/10 pb-8">
<h2 className="text-6xl md:text-8xl font-display font-medium tracking-tighter">CASE FILES</h2>
<div className="text-right hidden md:block">
<p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">We don't chase trends.<br/>We engineer them.
          </p>
</div>
</div>
<div className="sticky top-20 mb-24 perspective-container">
<div className="case-card w-full min-h-[80vh] bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 relative group hover:border-white/20 transition-colors duration-500">
<div className="p-12 lg:p-20 flex flex-col justify-between order-2 lg:order-1 relative z-10">
<div>
<div className="flex items-center gap-3 mb-8">
<span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
<span className="font-mono text-xs text-emerald-500 uppercase tracking-widest">DeFi Dominance</span>
</div>
<h3 className="text-5xl md:text-7xl font-display font-medium mb-6">VORTEX</h3>
<p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                Orchestrated a vampire attack strategy that migrated $400M TVL in 72 hours. We redesigned the incentive
                layer and mobilized a shadow army of KOLs.
              </p>
</div>
<div className="grid grid-cols-2 gap-8 pt-12 border-t border-white/5 mt-12">
<div>
<span className="block text-3xl font-display text-white mb-1">$400M</span>
<span className="block text-xs font-mono text-zinc-600 uppercase tracking-widest">Liquidity Migrated</span>
</div>
<div>
<span className="block text-3xl font-display text-white mb-1">125K</span>
<span className="block text-xs font-mono text-zinc-600 uppercase tracking-widest">Active Wallets</span>
</div>
</div>
</div>
<div className="relative order-1 lg:order-2 overflow-hidden h-[400px] lg:h-auto">
<div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0A0A0A] z-10"></div>
<img alt="Vortex Case" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" src="https://images.unsplash.com/photo-1639322537228-ad7117a3943b?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
<div className="sticky top-28 mb-24 perspective-container">
<div className="case-card w-full min-h-[80vh] bg-[#080808] border border-white/10 rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 relative group hover:border-white/20 transition-colors duration-500">
<div className="p-12 lg:p-20 flex flex-col justify-between order-2 lg:order-1 relative z-10">
<div>
<div className="flex items-center gap-3 mb-8">
<span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
<span className="font-mono text-xs text-indigo-500 uppercase tracking-widest">L2 Infrastructure</span>
</div>
<h3 className="text-5xl md:text-7xl font-display font-medium mb-6">NEXUS</h3>
<p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                Repositioned a technical ZK-rollup into a consumer lifestyle brand. The "Apple of L2s." From technical
                whitepaper to mass-market adoption.
              </p>
</div>
<div className="grid grid-cols-2 gap-8 pt-12 border-t border-white/5 mt-12">
<div>
<span className="block text-3xl font-display text-white mb-1">2.4M</span>
<span className="block text-xs font-mono text-zinc-600 uppercase tracking-widest">Impressions</span>
</div>
<div>
<span className="block text-3xl font-display text-white mb-1">#1</span>
<span className="block text-xs font-mono text-zinc-600 uppercase tracking-widest">Trending Topic</span>
</div>
</div>
</div>
<div className="relative order-1 lg:order-2 overflow-hidden h-[400px] lg:h-auto">
<div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#080808] z-10"></div>
<img alt="Nexus Case" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 px-4 relative z-10 bg-black" id="expertise">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="max-w-[1600px] mx-auto">
<div className="mb-20">
<h2 className="text-5xl md:text-7xl font-display font-medium mb-6">THE ARSENAL</h2>
<p className="text-zinc-500 max-w-md font-body text-lg">We deploy a military-grade stack of narrative weaponry.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-white/5 border border-white/5 p-px">
<div className="spotlight spotlight-border p-10 min-h-[450px] flex flex-col justify-between group cursor-pointer">
<div>
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-8 bg-white/5">
<iconify-icon className="text-white" icon="ph:brain-light" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-display text-white mb-4">Narrative Design</h3>
<p className="text-zinc-500 font-light leading-relaxed">We don't write copy; we architect belief systems.
              Whitepapers, lore, and manifestos designed to convert passive users into zealous evangelists.</p>
</div>
<div className="flex justify-between items-end">
<span className="text-[10px] font-mono text-zinc-700">01</span>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="ph:arrow-up-right"></iconify-icon>
</div>
</div>
</div>
<div className="spotlight spotlight-border p-10 min-h-[450px] flex flex-col justify-between group cursor-pointer">
<div>
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-8 bg-white/5">
<iconify-icon className="text-white" icon="ph:users-three-light" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-display text-white mb-4">Alpha Network</h3>
<p className="text-zinc-500 font-light leading-relaxed">Direct lines to 500+ market-moving KOLs, VCs, and
              angels. We know exactly who moves the candle and how to activate them.</p>
</div>
<div className="flex justify-between items-end">
<span className="text-[10px] font-mono text-zinc-700">02</span>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="ph:arrow-up-right"></iconify-icon>
</div>
</div>
</div>
<div className="spotlight spotlight-border p-10 min-h-[450px] flex flex-col justify-between group cursor-pointer">
<div>
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-8 bg-white/5">
<iconify-icon className="text-white" icon="ph:chart-line-up-light" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-display text-white mb-4">Growth Engineering</h3>
<p className="text-zinc-500 font-light leading-relaxed">Algorithmic dominance. We optimize every tweet, space,
              and announcement for maximum viral coefficient using proprietary data models.</p>
</div>
<div className="flex justify-between items-end">
<span className="text-[10px] font-mono text-zinc-700">03</span>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="ph:arrow-up-right"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="min-h-[90vh] flex items-center justify-center relative px-6 py-20 overflow-hidden" id="intel">
<div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black z-0"></div>
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}}>
</div>
<div className="max-w-5xl mx-auto text-center relative z-10">
<h2 className="text-[6vw] leading-[1] font-display font-medium text-zinc-700 tracking-tighter mix-blend-screen">
        "IN THE ATTENTION ECONOMY, <br/>
<span className="text-white">INDIFFERENCE IS DEATH.</span>"
      </h2>
<div className="mt-16">
<button className="group magnetic relative inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 rounded-full overflow-hidden transition-all duration-300 hover:border-white/50 hover:px-10">
<span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
<span className="relative text-xs font-mono uppercase tracking-[0.2em] text-white">Read The Manifesto</span>
</button>
</div>
</div>
</section>
<footer className="bg-black pt-32 pb-12 px-6 border-t border-white/10 relative z-20" id="contact">
<div className="max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-40">
<div>
<h2 className="text-[10vw] leading-[0.85] font-display font-medium tracking-tighter text-white mb-8">
            LET'S <br/> <span className="text-zinc-700">BUILD.</span>
</h2>
</div>
<div className="flex flex-col justify-end items-start lg:items-end">
<p className="text-zinc-400 max-w-sm text-right mb-10 hidden lg:block">We are currently accepting 2 new partners
            for Q3 2025. Applications are reviewed weekly.</p>
<a className="group magnetic relative w-full lg:w-auto overflow-hidden bg-white text-black px-12 py-8 flex items-center justify-center rounded-sm" href="#">
<div className="absolute inset-0 bg-indigo-500 transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
</div>
<div className="relative z-10 flex items-center gap-4">
<span className="font-display font-bold text-xl uppercase tracking-widest group-hover:text-white transition-colors">Book Strategy Audit</span>
<iconify-icon className="text-xl group-hover:text-white transition-colors group-hover:translate-x-1 duration-300" icon="ph:arrow-right-bold"></iconify-icon>
</div>
</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-end pt-12 border-t border-white/10">
<div className="flex flex-col gap-1">
<span className="text-xl font-display font-bold tracking-tight text-white">COHORT LABS</span>
<span className="text-[10px] font-mono text-zinc-600 uppercase">Singapore • New York • Dubai</span>
</div>
<div className="flex gap-8 mt-8 md:mt-0">
<a className="text-[10px] font-mono text-zinc-500 hover:text-white transition-colors uppercase" href="#">X
            (Twitter)</a>
<a className="text-[10px] font-mono text-zinc-500 hover:text-white transition-colors uppercase" href="#">LinkedIn</a>
<a className="text-[10px] font-mono text-zinc-500 hover:text-white transition-colors uppercase" href="#">Telegram</a>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-[9px] font-mono text-zinc-800 uppercase">© 2025 Cohort Labs. All Rights Reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
