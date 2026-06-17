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



        // --- 1. Loader Animation ---
        window.addEventListener('load', () => {
            const tl = gsap.timeline();
            tl.to("#loader-progress", { width: "100%", duration: 1.5, ease: "power3.inOut" })
              .to("#loader", { opacity: 0, duration: 0.8, ease: "power2.inOut", onComplete: () => {
                  document.getElementById('loader').style.display = 'none';
                  // Trigger initial reveals
                  gsap.to(".gs-reveal", {
                      y: 0,
                      opacity: 1,
                      duration: 1,
                      stagger: 0.1,
                      ease: "power3.out",
                      clearProps: "all" 
                  });
              }});
        });

        // --- 2. Custom Cursor ---
        const cursorDot = document.getElementById('cursor-dot');
        const cursorRing = document.getElementById('cursor-ring');
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let ringX = mouseX;
        let ringY = mouseY;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            gsap.set(cursorDot, { x: mouseX, y: mouseY });
        });

        gsap.ticker.add(() => {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            gsap.set(cursorRing, { x: ringX, y: ringY });
        });

        const initHoverables = () => {
            const hoverables = document.querySelectorAll('.cursor-hover, a, button, input, textarea');
            hoverables.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    gsap.to(cursorRing, { scale: 1.5, borderColor: 'rgba(34, 211, 238, 0.5)', duration: 0.3 });
                    gsap.to(cursorDot, { scale: 0, duration: 0.3 });
                });
                el.addEventListener('mouseleave', () => {
                    gsap.to(cursorRing, { scale: 1, borderColor: 'rgba(255, 255, 255, 0.2)', duration: 0.3 });
                    gsap.to(cursorDot, { scale: 1, duration: 0.3 });
                });
            });
        };
        initHoverables();

        // --- 3. Interactive UI Elements (Menu & Form) ---
        const menuToggle = document.getElementById('menu-toggle');
        const menuIcon = document.getElementById('menu-icon');
        const mobileMenu = document.getElementById('mobile-menu');
        let isMenuOpen = false;

        menuToggle.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                menuIcon.setAttribute('icon', 'solar:close-circle-linear');
            } else {
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                menuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
            }
        });

        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                menuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
            });
        });

        const contactForm = document.getElementById('contact-form');
        const submitBtn = document.getElementById('submit-btn');
        const btnText = document.getElementById('btn-text');
        const formIcon = document.getElementById('form-icon');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (submitBtn.disabled) return;
            
            submitBtn.disabled = true;
            btnText.innerText = "Transmitting...";
            formIcon.setAttribute('icon', 'solar:refresh-circle-linear');
            formIcon.classList.add('animate-spin');

            setTimeout(() => {
                btnText.innerText = "Signal Received";
                formIcon.classList.remove('animate-spin');
                formIcon.classList.remove('group-hover:-translate-y-1');
                formIcon.setAttribute('icon', 'solar:check-circle-linear');
                
                setTimeout(() => {
                    btnText.innerText = "Transmit Message";
                    formIcon.setAttribute('icon', 'solar:plain-3-linear');
                    formIcon.classList.add('group-hover:-translate-y-1');
                    submitBtn.disabled = false;
                    contactForm.reset();
                }, 3000);
            }, 1500);
        });

        // --- 4. Three.js Particle System ---
        const canvas = document.getElementById('webgl-canvas');
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x020617, 0.001);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
        camera.position.z = 500;

        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 3000;
        const posArray = new Float32Array(particlesCount * 3);
        for(let i = 0; i < particlesCount * 3; i++) posArray[i] = (Math.random() - 0.5) * 2000;
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 2,
            color: 0x22d3ee,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending
        });

        const particleMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particleMesh);

        const particlesGeometry2 = new THREE.BufferGeometry();
        const posArray2 = new Float32Array(1500 * 3);
        for(let i = 0; i < 1500 * 3; i++) posArray2[i] = (Math.random() - 0.5) * 1500;
        particlesGeometry2.setAttribute('position', new THREE.BufferAttribute(posArray2, 3));
        const particlesMaterial2 = new THREE.PointsMaterial({
            size: 1.5,
            color: 0x8b5cf6,
            transparent: true,
            opacity: 0.3,
            blending: THREE.AdditiveBlending
        });
        const particleMesh2 = new THREE.Points(particlesGeometry2, particlesMaterial2);
        scene.add(particleMesh2);

        let targetX = 0;
        let targetY = 0;
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        document.addEventListener('mousemove', (event) => {
            targetX = (event.clientX - windowHalfX) * 0.05;
            targetY = (event.clientY - windowHalfY) * 0.05;
        });

        const clock = new THREE.Clock();
        const tick = () => {
            const elapsedTime = clock.getElapsedTime();
            particleMesh.rotation.y = elapsedTime * 0.05;
            particleMesh.rotation.x = elapsedTime * 0.02;
            particleMesh2.rotation.y = elapsedTime * 0.03;
            particleMesh2.rotation.z = elapsedTime * 0.02;

            camera.position.x += (targetX - camera.position.x) * 0.02;
            camera.position.y += (-targetY - camera.position.y) * 0.02;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
            window.requestAnimationFrame(tick);
        };
        tick();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // --- 5. Vanilla Tilt Init ---
        VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
            max: 5,
            speed: 400,
            glare: true,
            "max-glare": 0.1,
            gyroscope: false
        });

        // --- 6. GSAP Scroll Animations ---
        gsap.registerPlugin(ScrollTrigger);
        document.querySelectorAll('.gs-reveal').forEach((el) => {
            if(el.closest('section').id === '') return; 
            gsap.fromTo(el, 
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // --- 7. Abstract 3D Skill Cluster Animation ---
        const cluster = document.getElementById('skill-cluster');
        const skills = ['React', 'WebGL', 'Three.js', 'GSAP', 'Next.js', 'Tailwind', 'Motion', 'GLSL'];
        
        skills.forEach((skill, i) => {
            const el = document.createElement('a');
            el.href = "javascript:void(0)";
            el.className = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-full glass-panel text-xs font-medium text-white hover:text-cyan-300 hover:border-cyan-500/50 transition-colors whitespace-nowrap box-glow cursor-hover';
            el.innerText = skill;
            
            const radius = 120;
            const theta = (i / skills.length) * Math.PI * 2;
            const yOffset = (Math.random() - 0.5) * 100;
            
            gsap.set(el, {
                x: Math.cos(theta) * radius,
                y: yOffset,
                z: Math.sin(theta) * radius,
                rotationY: -theta * (180/Math.PI)
            });
            
            cluster.appendChild(el);
        });

        gsap.to(cluster, {
            rotationY: 360,
            duration: 20,
            repeat: -1,
            ease: "none"
        });

        const heroTitle = document.getElementById('hero-title');
        window.addEventListener('mousemove', (e) => {
            if(window.scrollY > window.innerHeight / 2) return; 
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            gsap.to(heroTitle, {
                rotationY: x,
                rotationX: -y,
                duration: 1,
                ease: "power2.out"
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
      

<div className="fixed top-0 left-0 w-1.5 h-1.5 bg-cyan-400 rounded-full pointer-events-none z-[100] mix-blend-screen" id="cursor-dot" style={{transform: 'translate(-50%, -50%)'}}></div>
<div className="fixed top-0 left-0 w-8 h-8 border border-white/20 rounded-full pointer-events-none z-[100] transition-all duration-300 ease-out" id="cursor-ring" style={{transform: 'translate(-50%, -50%)'}}></div>

<div className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950" id="loader">
<div className="flex flex-col items-center gap-4">
<h1 className="font-display text-2xl font-medium tracking-tight clip-text-loader" style={{letterSpacing: '0.1em'}}>ARKAN</h1>
<div className="h-[1px] w-24 bg-slate-800 overflow-hidden">
<div className="h-full w-0 bg-cyan-400 box-glow" id="loader-progress"></div>
</div>
</div>
</div>

<canvas className="fixed inset-0 z-0 pointer-events-none opacity-60" id="webgl-canvas"></canvas>

<nav className="fixed top-0 w-full z-40 px-6 py-4 mix-blend-difference">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<a className="font-display text-lg font-semibold tracking-tight text-white hover:text-cyan-400 transition-colors cursor-hover" href="#top" style={{letterSpacing: '0.05em'}}>ARKAN</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors cursor-hover" href="#work">Work</a>
<a className="hover:text-white transition-colors cursor-hover" href="#about">About</a>
<a className="hover:text-white transition-colors cursor-hover" href="#contact">Contact</a>
</div>
<button className="md:hidden text-white cursor-hover flex items-center justify-center" id="menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear" id="menu-icon" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 z-30 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none transition-opacity duration-300" id="mobile-menu">
<a className="mobile-link text-2xl font-display font-medium text-white hover:text-cyan-400 transition-colors cursor-hover" href="#work">Work</a>
<a className="mobile-link text-2xl font-display font-medium text-white hover:text-cyan-400 transition-colors cursor-hover" href="#about">About</a>
<a className="mobile-link text-2xl font-display font-medium text-white hover:text-cyan-400 transition-colors cursor-hover" href="#contact">Contact</a>
</div>

<main className="relative z-10">

<section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
<div className="text-center max-w-4xl mx-auto" style={{transformStyle: 'preserve-3d', perspective: '1000px'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-medium text-cyan-300 mb-6 gs-reveal opacity-0" style={{transform: 'translateY(20px)'}}>
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 box-glow animate-pulse"></span>
                    Initializing Dimension
                </div>

<h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20 text-glow leading-none gs-reveal opacity-0" id="hero-title" style={{transform: 'translateZ(50px) translateY(20px)'}}>
                    ARKAN
                </h1>
<p className="mt-6 text-base md:text-lg text-slate-400 max-w-xl mx-auto gs-reveal opacity-0" style={{transform: 'translateZ(30px) translateY(20px)'}}>
                    Crafting immersive digital architectures and motion-driven experiences at the intersection of design and technology.
                </p>
<div className="mt-10 flex items-center justify-center gap-4 gs-reveal opacity-0" style={{transform: 'translateZ(40px) translateY(20px)'}}>
<a className="group relative px-6 py-3 rounded-full bg-white text-slate-950 font-medium text-sm overflow-hidden cursor-hover flex items-center gap-2" href="#work">
<span className="relative z-10">Explore Work</span>
<iconify-icon className="relative z-10 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 opacity-50 cursor-pointer cursor-hover" onclick="document.getElementById('work').scrollIntoView({behavior: 'smooth'})">
<span className="text-xs font-medium uppercase tracking-widest" style={{letterSpacing: '0.2em'}}>Scroll</span>
<div className="w-[1px] h-12 glass-panel overflow-hidden">
<div className="w-full h-1/2 bg-slate-300 animate-[translateY_1.5s_ease-in-out_infinite]"></div>
</div>
</div>
</section>

<section className="py-32 px-6" id="work">
<div className="max-w-7xl mx-auto">
<div className="mb-16 gs-reveal opacity-0" style={{transform: 'translateY(30px)'}}>
<h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Selected Realities</h2>
<p className="text-sm text-slate-400 max-w-md">A collection of interactive spaces and digital products built with precision.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<a className="tilt-card group relative rounded-2xl glass-panel p-2 overflow-hidden cursor-hover gs-reveal opacity-0 block" href="javascript:void(0)" style={{transform: 'translateY(40px)'}}>
<div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-white/5">

<div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 to-slate-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<iconify-icon className="text-cyan-500/50 group-hover:text-cyan-400 transition-colors duration-500" icon="solar:planet-3-linear" strokeWidth="1" width="64"></iconify-icon>
</div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="p-6 relative z-10" style={{transform: 'translateZ(30px)'}}>
<div className="flex items-center justify-between mb-2">
<h3 className="font-display text-xl font-medium tracking-tight text-white group-hover:text-cyan-300 transition-colors">Project Nexus</h3>
<iconify-icon className="text-slate-500 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 duration-300" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<p className="text-sm text-slate-400 mb-4 line-clamp-2">WebGL data visualization platform mapping neural networks in real-time 3D space.</p>
<div className="flex gap-2">
<span className="text-xs px-2 py-1 rounded-md glass-panel text-slate-300">Three.js</span>
<span className="text-xs px-2 py-1 rounded-md glass-panel text-slate-300">GSAP</span>
</div>
</div>
</a>

<a className="tilt-card group relative rounded-2xl glass-panel p-2 overflow-hidden cursor-hover gs-reveal opacity-0 block" href="javascript:void(0)" style={{transform: 'translateY(40px)'}}>
<div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-white/5">
<div className="absolute inset-0 bg-gradient-to-bl from-violet-900/40 to-slate-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<iconify-icon className="text-violet-500/50 group-hover:text-violet-400 transition-colors duration-500" icon="solar:box-linear" strokeWidth="1" width="64"></iconify-icon>
</div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="p-6 relative z-10" style={{transform: 'translateZ(30px)'}}>
<div className="flex items-center justify-between mb-2">
<h3 className="font-display text-xl font-medium tracking-tight text-white group-hover:text-violet-300 transition-colors">Aether OS</h3>
<iconify-icon className="text-slate-500 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 duration-300" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<p className="text-sm text-slate-400 mb-4 line-clamp-2">Conceptual operating system interface utilizing spatial computing paradigms.</p>
<div className="flex gap-2">
<span className="text-xs px-2 py-1 rounded-md glass-panel text-slate-300">React</span>
<span className="text-xs px-2 py-1 rounded-md glass-panel text-slate-300">Framer Motion</span>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="about">

<div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen -translate-y-1/2"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="gs-reveal opacity-0" style={{transform: 'translateY(30px)'}}>
<h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Designing the unseen.</h2>
<div className="space-y-4 text-sm md:text-base text-slate-400 font-medium leading-relaxed">
<p>I operate at the boundary where design logic meets technical execution. My focus is on creating web experiences that don't just function, but feel alive.</p>
<p>With a foundation in both creative direction and rigorous front-end engineering, I build digital environments that guide users through intuitive, motion-rich narratives.</p>
</div>
<div className="mt-12">
<h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6" style={{letterSpacing: '0.1em'}}>Technical Arsenal</h3>
<div className="flex flex-wrap gap-3">
<a className="px-4 py-2 rounded-lg glass-panel text-sm text-slate-200 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors cursor-hover flex items-center gap-2" href="javascript:void(0)">
<iconify-icon icon="solar:code-circle-linear" width="18"></iconify-icon> WebGL &amp; Three.js
                            </a>
<a className="px-4 py-2 rounded-lg glass-panel text-sm text-slate-200 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors cursor-hover flex items-center gap-2" href="javascript:void(0)">
<iconify-icon icon="solar:layers-linear" width="18"></iconify-icon> React &amp; Next.js
                            </a>
<a className="px-4 py-2 rounded-lg glass-panel text-sm text-slate-200 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors cursor-hover flex items-center gap-2" href="javascript:void(0)">
<iconify-icon icon="solar:magic-stick-3-linear" width="18"></iconify-icon> GSAP Animation
                            </a>
<a className="px-4 py-2 rounded-lg glass-panel text-sm text-slate-200 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors cursor-hover flex items-center gap-2" href="javascript:void(0)">
<iconify-icon icon="solar:pen-linear" width="18"></iconify-icon> UI/UX Architecture
                            </a>
</div>
</div>
</div>

<div className="relative h-[400px] flex items-center justify-center gs-reveal opacity-0" style={{transform: 'translateY(30px)'}}>
<div className="relative w-full h-full cursor-hover" id="skill-cluster" style={{transformStyle: 'preserve-3d'}}>

</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="contact">
<div className="max-w-3xl mx-auto glass-panel rounded-3xl p-8 md:p-12 box-glow relative overflow-hidden gs-reveal opacity-0" style={{transform: 'translateY(40px)'}}>

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 text-center mb-10">
<h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-white mb-3">Initiate Sequence</h2>
<p className="text-sm text-slate-400">Open for new realities and collaborations.</p>
</div>
<form className="relative z-10 space-y-4" id="contact-form">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 ml-1">Name</label>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-700 cursor-hover" placeholder="Enter your name" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 ml-1">Coordinates (Email)</label>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-700 cursor-hover" placeholder="name@domain.com" required="" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 ml-1">Transmission</label>
<textarea className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-700 resize-none cursor-hover" placeholder="Describe your vision..." required="" rows="4"></textarea>
</div>
<button className="w-full group relative py-4 rounded-xl bg-white text-slate-950 font-medium text-sm overflow-hidden cursor-hover flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed" id="submit-btn" type="submit">
<span className="relative z-10" id="btn-text">Transmit Message</span>
<iconify-icon className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:plain-3-linear" id="form-icon" width="18"></iconify-icon>
<div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
</button>
</form>
</div>
</section>

<footer className="py-8 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
<span className="font-display text-sm font-semibold tracking-tight text-slate-500 cursor-hover hover:text-white transition-colors" onclick="window.scrollTo(0,0)">© ARKAN <span className="text-xs font-medium">SYS.2024</span></span>
<div className="flex items-center gap-4 text-slate-500">
<a className="hover:text-cyan-400 transition-colors cursor-hover flex items-center" href="javascript:void(0)"><iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon></a>
<a className="hover:text-cyan-400 transition-colors cursor-hover flex items-center" href="javascript:void(0)"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>
</main>


    </>
  );
}
