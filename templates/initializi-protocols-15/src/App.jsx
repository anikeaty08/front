import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
cyber: {
black: '#05070a',
dark: '#0b0f1a',
panel: '#101214',
border: '#1f2937',
text: '#94a3b8',
accent: '#38bdf8',
metal: '#475569'
}
},
fontFamily: {
mono: ['"Space Mono"', 'monospace'],
tech: ['"Share Tech Mono"', 'monospace'],
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)",
}
}
}
}



        // State Management
        let currentSection = 'home';
        const sections = ['home', 'about', 'projects', 'casestudy', 'services', 'contact'];

        // --- Functions ---
        
        // Navigation Logic
        function navigate(targetId) {
            if (targetId === currentSection && targetId !== 'casestudy') return;
            
            // Update Menu State
            document.querySelectorAll('.nav-link').forEach(btn => {
                if(btn.dataset.target === targetId) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });

            // Transition
            const tl = gsap.timeline();
            const currentEl = document.getElementById(currentSection);
            const nextEl = document.getElementById(targetId);

            if (currentEl) {
                tl.to(currentEl, {
                    opacity: 0,
                    y: -20,
                    duration: 0.4,
                    ease: "power2.in",
                    onComplete: () => {
                        currentEl.classList.add('hidden');
                        nextEl.classList.remove('hidden');
                        // Reset position for entry
                        gsap.set(nextEl, { y: 20, opacity: 0 });
                        window.scrollTo(0,0);
                    }
                });
            } else {
                nextEl.classList.remove('hidden');
                gsap.set(nextEl, { y: 20, opacity: 0 });
            }

            tl.to(nextEl, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                onComplete: () => {
                    triggerSectionAnimations(targetId);
                }
            });

            currentSection = targetId;
        }

        // Section Specific Animation Triggers
        function triggerSectionAnimations(id) {
            if(id === 'about') {
                gsap.from(".about-anim", {
                    y: 30,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "power2.out"
                });
            } else if (id === 'projects') {
                gsap.from(".project-card", {
                    y: 50,
                    opacity: 0,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: "back.out(1.2)"
                });
            } else if (id === 'casestudy') {
                gsap.from(".case-anim", {
                    x: -20,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.6
                });
            } else if (id === 'services') {
                gsap.from(".service-card", {
                    scale: 0.95,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.6
                });
            } else if (id === 'contact') {
                gsap.from(".contact-anim", {
                    y: 20,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.6
                });
            }
        }

        // Home Animation Sequence
        function animateHome() {
            const tl = gsap.timeline();
            
            tl.to(".home-anim", {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out"
            });
            
            // Glitch Text Effect on Title
            if(document.getElementById("hero-role")) {
                gsap.to("#hero-role", {
                    duration: 2,
                    scrambleText: {
                        text: "DEVELOPER",
                        chars: "01X/>_",
                        revealDelay: 0.5,
                        speed: 0.3
                    }
                });
            }
        }

        // Helper: Mobile Menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('translate-x-full')) {
                menu.classList.remove('translate-x-full');
            } else {
                menu.classList.add('translate-x-full');
            }
        }

        // Helper: Open Case Study
        function openCaseStudy(id) {
            navigate('casestudy');
        }

        // --- Initialization ---
        document.addEventListener("DOMContentLoaded", (event) => {
            
            // Register GSAP Plugins
            gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrambleTextPlugin);
            
            // Initial set for home elements
            gsap.set(".home-anim", { y: 20, opacity: 0 });

            // Boot Sequence
            const loaderBar = document.getElementById('loader-bar');
            const loader = document.getElementById('loader');
            
            if(loaderBar && loader) {
                const tl = gsap.timeline();
                
                tl.to(loaderBar, { width: "100%", duration: 1.2, ease: "power2.inOut" })
                  .to(loader, { opacity: 0, duration: 0.5, onComplete: () => {
                      loader.style.display = 'none';
                      animateHome();
                  }});
            } else {
                // Failsafe if loader elements missing
                if(loader) loader.style.display = 'none';
                animateHome();
            }
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="scanlines"></div>
<div className="noise"></div>

<div className="flex flex-col items-center gap-4" id="loader">
<div className="w-64 h-[1px] bg-gray-800 overflow-hidden relative">
<div className="absolute top-0 left-0 h-full bg-cyber-accent w-0" id="loader-bar"></div>
</div>
<div className="text-xs text-cyber-accent animate-pulse tracking-widest">INITIALIZING PROTOCOLS...</div>
</div>

<nav className="fixed top-0 left-0 w-full z-40 border-b border-cyber-border/50 bg-cyber-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-base font-tech tracking-tight text-slate-200 hover:text-white transition-colors group" href="#" onclick="navigate('home'); return false;">
                0x<span className="text-cyber-accent group-hover:blur-[1px] transition-all">DEV</span>
</a>

<div className="hidden md:flex items-center gap-8">
<button className="nav-link transition-all duration-300 text-slate-500 hover:text-slate-300 uppercase tracking-widest text-xs py-1 active" data-target="home" onclick="navigate('home')">Home</button>
<button className="nav-link transition-all duration-300 text-slate-500 hover:text-slate-300 uppercase tracking-widest text-xs py-1" data-target="about" onclick="navigate('about')">Profile</button>
<button className="nav-link transition-all duration-300 text-slate-500 hover:text-slate-300 uppercase tracking-widest text-xs py-1" data-target="projects" onclick="navigate('projects')">Work</button>
<button className="nav-link transition-all duration-300 text-slate-500 hover:text-slate-300 uppercase tracking-widest text-xs py-1" data-target="services" onclick="navigate('services')">Services</button>
<button className="nav-link transition-all duration-300 text-slate-500 hover:text-slate-300 uppercase tracking-widest text-xs py-1" data-target="contact" onclick="navigate('contact')">Comms</button>
</div>

<button className="md:hidden text-slate-300" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-cyber-black z-30 transform translate-x-full transition-transform duration-300 flex flex-col justify-center items-center gap-8 md:hidden" id="mobile-menu">
<button className="text-xl uppercase tracking-widest text-slate-300" onclick="navigate('home'); toggleMobileMenu()">Home</button>
<button className="text-xl uppercase tracking-widest text-slate-300" onclick="navigate('about'); toggleMobileMenu()">Profile</button>
<button className="text-xl uppercase tracking-widest text-slate-300" onclick="navigate('projects'); toggleMobileMenu()">Work</button>
<button className="text-xl uppercase tracking-widest text-slate-300" onclick="navigate('services'); toggleMobileMenu()">Services</button>
<button className="text-xl uppercase tracking-widest text-slate-300" onclick="navigate('contact'); toggleMobileMenu()">Comms</button>
<button className="absolute top-6 right-6 text-slate-300" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
</div>

<main className="relative pt-16 min-h-screen" id="content">

<section className="page-section absolute w-full top-0 left-0 min-h-screen flex items-center justify-center px-6 overflow-hidden" id="home">

<div className="absolute inset-0 bg-[size:50px_50px] bg-grid-pattern opacity-[0.05]"></div>
<div className="fog top-1/2 left-1/2"></div>
<div className="relative z-10 max-w-4xl w-full">
<div className="flex items-center gap-2 mb-4 text-cyber-accent text-xs tracking-[0.2em] uppercase opacity-0 home-anim">
<iconify-icon className="animate-spin-slow" icon="solar:code-circle-linear"></iconify-icon> System Online
                </div>
<h1 className="text-4xl md:text-7xl lg:text-8xl font-tech font-bold leading-none tracking-tighter text-slate-100 mb-6 home-anim glitch-hover mix-blend-screen cursor-default">
                    CREATIVE<br/>
<span className="text-slate-600" id="hero-role">DEVELOPER</span>
</h1>
<p className="max-w-md text-slate-400 leading-relaxed mb-8 home-anim border-l border-slate-700 pl-4">
                    Constructing high-performance digital interfaces with focus on security, motion, and industrial aesthetics.
                </p>
<div className="flex flex-wrap gap-4 home-anim">
<button className="group relative px-6 py-3 bg-slate-900 border border-slate-700 hover:border-cyber-accent transition-colors overflow-hidden" onclick="navigate('projects')">
<span className="relative z-10 uppercase tracking-widest text-xs font-semibold text-slate-300 group-hover:text-cyber-accent">View Protocols</span>
<div className="absolute inset-0 bg-slate-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</button>
<button className="group relative px-6 py-3 border border-transparent hover:border-slate-800 transition-colors" onclick="navigate('contact')">
<span className="uppercase tracking-widest text-xs font-semibold text-slate-500 group-hover:text-slate-300">Establish Link -&gt;</span>
</button>
</div>
</div>

<div className="absolute bottom-10 right-10 text-[10px] text-slate-700 font-mono hidden md:block text-right">
<div className="mb-1">COORDS: 35.6895° N, 139.6917° E</div>
<div className="mb-1">STATUS: ENCRYPTED</div>
<div>FRAME: 60FPS</div>
</div>
</section>

<section className="page-section hidden min-h-screen pt-20 px-6 max-w-7xl mx-auto" id="about">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-5 about-anim">
<h2 className="text-3xl font-tech text-slate-100 mb-8 tracking-tight">OPERATOR_PROFILE</h2>
<div className="prose prose-invert prose-sm text-slate-400 font-mono">
<p className="mb-4">
                            I operate at the intersection of creative frontend development and security research. My mission is to build digital experiences that are not only visually striking but mathematically secure.
                        </p>
<p className="mb-6">
                            With a background in systems architecture, I approach frontend with a performance-first mindset. Every animation is calculated, every request optimized.
                        </p>
</div>
<div className="mt-12">
<h3 className="text-xs uppercase tracking-widest text-slate-500 mb-6">Experience_Timeline</h3>
<div className="space-y-6 border-l border-slate-800 pl-6 relative">
<div className="relative">
<div className="absolute -left-[29px] top-1 w-2 h-2 bg-cyber-accent rounded-full"></div>
<div className="text-xs text-cyber-accent mb-1">2023 - PRESENT</div>
<div className="text-slate-200 font-semibold">Senior Frontend Engineer</div>
<div className="text-xs text-slate-500">CyberCore Industries</div>
</div>
<div className="relative">
<div className="absolute -left-[29px] top-1 w-2 h-2 bg-slate-700 rounded-full"></div>
<div className="text-xs text-slate-500 mb-1">2021 - 2023</div>
<div className="text-slate-300 font-semibold">Creative Developer</div>
<div className="text-xs text-slate-500">Vector Digital</div>
</div>
<div className="relative">
<div className="absolute -left-[29px] top-1 w-2 h-2 bg-slate-700 rounded-full"></div>
<div className="text-xs text-slate-500 mb-1">2019 - 2021</div>
<div className="text-slate-300 font-semibold">UI/UX Engineer</div>
<div className="text-xs text-slate-500">Freelance</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 about-anim">
<h2 className="text-3xl font-tech text-slate-100 mb-8 tracking-tight lg:text-right">TECH_ARSENAL</h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">

<div className="group p-4 bg-cyber-panel border border-slate-800 hover:border-slate-600 transition-all duration-300">
<iconify-icon className="text-2xl text-slate-400 mb-3 group-hover:text-cyber-accent transition-colors" icon="solar:laptop-linear"></iconify-icon>
<h4 className="text-slate-200 mb-1">Frontend</h4>
<p className="text-[10px] text-slate-500">React, Next.js, Vue, TypeScript</p>
</div>

<div className="group p-4 bg-cyber-panel border border-slate-800 hover:border-slate-600 transition-all duration-300">
<iconify-icon className="text-2xl text-slate-400 mb-3 group-hover:text-cyber-accent transition-colors" icon="solar:pallete-2-linear"></iconify-icon>
<h4 className="text-slate-200 mb-1">Creative</h4>
<p className="text-[10px] text-slate-500">GSAP, Three.js, WebGL, Tailwind</p>
</div>

<div className="group p-4 bg-cyber-panel border border-slate-800 hover:border-slate-600 transition-all duration-300">
<iconify-icon className="text-2xl text-slate-400 mb-3 group-hover:text-cyber-accent transition-colors" icon="solar:shield-warning-linear"></iconify-icon>
<h4 className="text-slate-200 mb-1">Security</h4>
<p className="text-[10px] text-slate-500">OWASP, Pentesting, Secure Headers</p>
</div>

<div className="group p-4 bg-cyber-panel border border-slate-800 hover:border-slate-600 transition-all duration-300">
<iconify-icon className="text-2xl text-slate-400 mb-3 group-hover:text-cyber-accent transition-colors" icon="solar:database-linear"></iconify-icon>
<h4 className="text-slate-200 mb-1">Backend</h4>
<p className="text-[10px] text-slate-500">Node.js, Supabase, PostgreSQL</p>
</div>

<div className="group p-4 bg-cyber-panel border border-slate-800 hover:border-slate-600 transition-all duration-300">
<iconify-icon className="text-2xl text-slate-400 mb-3 group-hover:text-cyber-accent transition-colors" icon="solar:settings-linear"></iconify-icon>
<h4 className="text-slate-200 mb-1">Tools</h4>
<p className="text-[10px] text-slate-500">Git, Docker, Figma, Blender</p>
</div>

<div className="group p-4 bg-cyber-panel border border-slate-800 hover:border-slate-600 transition-all duration-300">
<iconify-icon className="text-2xl text-slate-400 mb-3 group-hover:text-cyber-accent transition-colors" icon="solar:wordpress-linear"></iconify-icon>
<h4 className="text-slate-200 mb-1">CMS</h4>
<p className="text-[10px] text-slate-500">Headless WP, Sanity, Strapi</p>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden min-h-screen pt-20 px-6 max-w-7xl mx-auto pb-20" id="projects">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-800 pb-4">
<div>
<h2 className="text-3xl font-tech text-slate-100 tracking-tight">DEPLOYED_UNITS</h2>
<p className="text-xs text-slate-500 mt-2 font-mono">Select a unit to view case study.</p>
</div>
<div className="flex gap-4 mt-4 md:mt-0 text-xs font-mono">
<span className="text-cyber-accent cursor-pointer">[ALL]</span>
<span className="text-slate-500 hover:text-slate-300 cursor-pointer hover:underline">[WEB]</span>
<span className="text-slate-500 hover:text-slate-300 cursor-pointer hover:underline">[SEC]</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="project-card group cursor-pointer" onclick="openCaseStudy(1)">
<div className="relative h-64 bg-slate-900 border border-slate-800 overflow-hidden">
<div className="absolute inset-0 bg-slate-800/50 mix-blend-multiply z-10"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 border border-slate-700 rounded-full animate-pulse opacity-20"></div>
<div className="absolute w-40 h-40 border border-slate-700 rotate-45 opacity-20"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 bg-cyber-accent/10 text-cyber-accent text-[10px] border border-cyber-accent/20">FINTECH</span>
</div>
<h3 className="text-xl text-slate-100 font-tech">Obsidian Vault</h3>
<p className="text-xs text-slate-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity delay-100">Secure crypto dashboard with WebGL data viz.</p>
</div>
</div>
</article>

<article className="project-card group cursor-pointer" onclick="openCaseStudy(2)">
<div className="relative h-64 bg-slate-900 border border-slate-800 overflow-hidden">
<div className="absolute inset-0 bg-slate-800/50 mix-blend-multiply z-10"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-full h-px bg-slate-700 rotate-12 opacity-30"></div>
<div className="w-full h-px bg-slate-700 -rotate-12 opacity-30"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 bg-purple-500/10 text-purple-400 text-[10px] border border-purple-500/20">E-COMMERCE</span>
</div>
<h3 className="text-xl text-slate-100 font-tech">Neon Market</h3>
<p className="text-xs text-slate-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity delay-100">Headless Shopify with GSAP page transitions.</p>
</div>
</div>
</article>

<article className="project-card group cursor-pointer" onclick="openCaseStudy(3)">
<div className="relative h-64 bg-slate-900 border border-slate-800 overflow-hidden">
<div className="absolute inset-0 bg-slate-800/50 mix-blend-multiply z-10"></div>
<div className="absolute inset-0 grid grid-cols-4 gap-4 opacity-10">
<div className="bg-slate-500 h-full"></div>
<div className="bg-slate-500 h-full"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[10px] border border-emerald-500/20">SECURITY</span>
</div>
<h3 className="text-xl text-slate-100 font-tech">NetGuard CLI</h3>
<p className="text-xs text-slate-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity delay-100">Network vulnerability scanner interface.</p>
</div>
</div>
</article>
</div>
</section>

<section className="page-section hidden min-h-screen pt-20 px-6 max-w-5xl mx-auto pb-20" id="casestudy">
<button className="mb-8 flex items-center gap-2 text-xs text-slate-500 hover:text-cyber-accent transition-colors" onclick="navigate('projects')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> RETURN_TO_GRID
            </button>
<div className="border-l-2 border-cyber-accent pl-6 mb-12 case-anim">
<h1 className="text-4xl md:text-6xl font-tech text-white mb-2 tracking-tight">OBSIDIAN VAULT</h1>
<p className="text-lg text-slate-400 font-mono">Next.js / WebGL / Solidity</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="md:col-span-2 space-y-12">
<div className="case-anim">
<h3 className="text-sm font-semibold text-slate-200 uppercase tracking-widest mb-4">The Challenge</h3>
<p className="text-slate-400 leading-relaxed">
                            The client required a high-frequency trading dashboard that could visualize millions of data points without compromising browser performance. The aesthetic needed to be "institutional grade dark mode".
                        </p>
</div>
<div className="case-anim">
<h3 className="text-sm font-semibold text-slate-200 uppercase tracking-widest mb-4">The Solution</h3>
<p className="text-slate-400 leading-relaxed">
                            Utilized Three.js for data visualization to offload rendering to the GPU. Implemented a custom WebSocket hook system for real-time updates. The UI was built with a component-first architecture ensuring atomic re-renders.
                        </p>
</div>
<div className="border border-slate-800 bg-cyber-panel p-6 case-anim">
<div className="flex justify-between text-xs text-slate-500 mb-2">
<span>PERFORMANCE SCORE</span>
<span className="text-cyber-accent">98/100</span>
</div>
<div className="w-full bg-slate-800 h-1">
<div className="bg-cyber-accent h-full w-[98%]"></div>
</div>
<div className="flex justify-between text-xs text-slate-500 mt-4 mb-2">
<span>SEO INDEXING</span>
<span className="text-cyber-accent">100/100</span>
</div>
<div className="w-full bg-slate-800 h-1">
<div className="bg-cyber-accent h-full w-[100%]"></div>
</div>
</div>
</div>
<div className="md:col-span-1">
<div className="sticky top-24 space-y-8 case-anim">
<div>
<h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Technologies</h3>
<ul className="space-y-2 text-sm text-slate-300">
<li className="flex items-center gap-2"><iconify-icon className="text-cyber-accent" icon="solar:check-read-linear"></iconify-icon> Next.js 14</li>
<li className="flex items-center gap-2"><iconify-icon className="text-cyber-accent" icon="solar:check-read-linear"></iconify-icon> Tailwind CSS</li>
<li className="flex items-center gap-2"><iconify-icon className="text-cyber-accent" icon="solar:check-read-linear"></iconify-icon> Three.js</li>
<li className="flex items-center gap-2"><iconify-icon className="text-cyber-accent" icon="solar:check-read-linear"></iconify-icon> Ethers.js</li>
</ul>
</div>
<div>
<h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Year</h3>
<p className="text-sm text-slate-300">2023</p>
</div>
<a className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-xs text-white hover:bg-slate-700 transition-colors" href="#">
                            VISIT LIVE SITE <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="page-section hidden min-h-screen pt-20 px-6 max-w-7xl mx-auto flex items-center" id="services">
<div className="w-full">
<h2 className="text-3xl font-tech text-slate-100 mb-12 tracking-tight border-b border-slate-800 pb-4">SERVICES_OFFERED</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="service-card p-6 border border-slate-800 bg-cyber-panel/50 hover:bg-cyber-panel transition-all duration-300 group">
<iconify-icon className="text-3xl text-slate-500 group-hover:text-cyber-accent mb-4 transition-colors" icon="solar:code-square-linear"></iconify-icon>
<h3 className="text-xl text-slate-200 font-tech mb-2">Frontend Engineering</h3>
<p className="text-sm text-slate-400 mb-4">Scalable Single Page Applications built with React/Next.js. Focus on component modularity and state management.</p>
<ul className="text-xs text-slate-500 space-y-1 font-mono">
<li>&gt; React / Next.js</li>
<li>&gt; TypeScript</li>
<li>&gt; PWA Development</li>
</ul>
</div>

<div className="service-card p-6 border border-slate-800 bg-cyber-panel/50 hover:bg-cyber-panel transition-all duration-300 group">
<iconify-icon className="text-3xl text-slate-500 group-hover:text-purple-400 mb-4 transition-colors" icon="solar:magic-stick-3-linear"></iconify-icon>
<h3 className="text-xl text-slate-200 font-tech mb-2">Creative Motion</h3>
<p className="text-sm text-slate-400 mb-4">Award-winning animations using GSAP and WebGL. Making the web feel fluid and alive.</p>
<ul className="text-xs text-slate-500 space-y-1 font-mono">
<li>&gt; GSAP ScrollTrigger</li>
<li>&gt; Canvas / WebGL</li>
<li>&gt; SVG Animation</li>
</ul>
</div>

<div className="service-card p-6 border border-slate-800 bg-cyber-panel/50 hover:bg-cyber-panel transition-all duration-300 group">
<iconify-icon className="text-3xl text-slate-500 group-hover:text-emerald-400 mb-4 transition-colors" icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
<h3 className="text-xl text-slate-200 font-tech mb-2">Security Audits</h3>
<p className="text-sm text-slate-400 mb-4">Frontend security analysis to prevent XSS, CSRF, and data leaks. Hardening your public-facing apps.</p>
<ul className="text-xs text-slate-500 space-y-1 font-mono">
<li>&gt; Code Review</li>
<li>&gt; Vulnerability Scanning</li>
<li>&gt; Best Practices Impl.</li>
</ul>
</div>

<div className="service-card p-6 border border-slate-800 bg-cyber-panel/50 hover:bg-cyber-panel transition-all duration-300 group">
<iconify-icon className="text-3xl text-slate-500 group-hover:text-amber-400 mb-4 transition-colors" icon="solar:layers-minimalistic-linear"></iconify-icon>
<h3 className="text-xl text-slate-200 font-tech mb-2">WordPress Dev</h3>
<p className="text-sm text-slate-400 mb-4">Custom theme development and Headless WordPress implementations for enterprise content management.</p>
<ul className="text-xs text-slate-500 space-y-1 font-mono">
<li>&gt; Headless WP + Next.js</li>
<li>&gt; Custom Blocks (ACF)</li>
<li>&gt; Performance Optimization</li>
</ul>
</div>
</div>
</div>
</section>

<section className="page-section hidden min-h-screen pt-20 px-6 max-w-4xl mx-auto flex items-center" id="contact">
<div className="w-full">
<div className="text-center mb-12 contact-anim">
<h2 className="text-4xl md:text-5xl font-tech text-slate-100 tracking-tight mb-4">INITIATE_HANDSHAKE</h2>
<p className="text-slate-400">Available for freelance contracts and security consultations.</p>
</div>
<form className="space-y-6 contact-anim bg-cyber-panel/30 p-8 border border-slate-800 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-cyber-accent"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="relative group">
<label className="block text-[10px] uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-cyber-accent transition-colors">Identity</label>
<input className="w-full bg-slate-900/50 border-b border-slate-700 text-slate-200 p-2 focus:outline-none focus:border-cyber-accent transition-colors font-mono" placeholder="Name" type="text"/>
</div>
<div className="relative group">
<label className="block text-[10px] uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-cyber-accent transition-colors">Frequency</label>
<input className="w-full bg-slate-900/50 border-b border-slate-700 text-slate-200 p-2 focus:outline-none focus:border-cyber-accent transition-colors font-mono" placeholder="Email" type="email"/>
</div>
</div>
<div className="relative group">
<label className="block text-[10px] uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-cyber-accent transition-colors">Transmission</label>
<textarea className="w-full bg-slate-900/50 border-b border-slate-700 text-slate-200 p-2 focus:outline-none focus:border-cyber-accent transition-colors font-mono" placeholder="Project details..." rows="4"></textarea>
</div>
<div className="pt-4">
<button className="w-full md:w-auto px-8 py-3 bg-cyber-accent text-cyber-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors" type="button">
                            Send Transmission
                        </button>
</div>
</form>
<div className="flex justify-center gap-8 mt-12 contact-anim">
<a className="text-slate-500 hover:text-cyber-accent transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear" width="24"></iconify-icon></a>
<a className="text-slate-500 hover:text-cyber-accent transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="24"></iconify-icon></a>
<a className="text-slate-500 hover:text-cyber-accent transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="24"></iconify-icon></a>
</div>
</div>
</section>
</main>

<footer className="fixed bottom-4 left-6 z-40 hidden md:block">
<div className="text-[10px] text-slate-600 font-mono">
            © 2024 0xDEV SYSTEM
        </div>
</footer>


    </>
  );
}
