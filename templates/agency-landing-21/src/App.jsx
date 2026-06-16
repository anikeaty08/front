import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
background: '#08090A', // Deep dark distinct from pure black
surface: '#121416',
primary: '#EDEDED',
secondary: '#888888',
accent: '#D44D28', // Terracotta/Earth tone for "Sarhad" (Borders)
border: 'rgba(255,255,255,0.08)'
},
fontFamily: {
sans: ['Geist', 'Inter', 'sans-serif'],
mono: ['Geist Mono', 'JetBrains Mono', 'monospace']
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em'
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



        // Init Icons
        lucide.createIcons();

        // Lenis Smooth Scroll
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

        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);

        // Loader Sequence
        const loaderTimeline = gsap.timeline();
        
        loaderTimeline.to("#loader-bar", {
            width: "100%",
            duration: 1.5,
            ease: "power2.inOut",
            onUpdate: function() {
                const percent = Math.round(this.progress() * 100);
                document.getElementById("loader-percent").innerText = (percent < 10 ? "0" : "") + percent + "%";
            }
        })
        .to("#loader", {
            yPercent: -100,
            duration: 0.8,
            ease: "power4.inOut",
            delay: 0.2
        })
        .from(".hero-title span", {
            yPercent: 100,
            duration: 1,
            stagger: 0.1,
            ease: "power4.out"
        }, "-=0.4")
        .to(".hero-anim", {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        }, "-=0.6");

        // Reveal Animations on Scroll
        const revealElements = document.querySelectorAll(".reveal-trigger");
        revealElements.forEach(element => {
            gsap.fromTo(element, 
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out"
                }
            );
        });

        const revealCards = document.querySelectorAll(".reveal-card");
        gsap.fromTo(revealCards, 
            { y: 50, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: "#philosophy",
                    start: "top 70%",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            }
        );

        // Marquee Animation
        gsap.to(".marquee-content", {
            xPercent: -50,
            repeat: -1,
            duration: 30,
            ease: "linear"
        });

        // Magnetic Button Effect
        const magneticBtns = document.querySelectorAll('.magnetic-btn');
        magneticBtns.forEach(btn => {
            btn.addEventListener('mousemove', function(e) {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                gsap.to(btn, {
                    x: x * 0.3,
                    y: y * 0.3,
                    duration: 0.3
                });
            });
            
            btn.addEventListener('mouseleave', function() {
                gsap.to(btn, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "elastic.out(1, 0.3)"
                });
            });
        });

        // Custom Cursor Logic
        if (window.matchMedia("(pointer: fine)").matches) {
            const cursorDot = document.querySelector('.cursor-dot');
            const cursorCircle = document.querySelector('.cursor-circle');
            
            let mouseX = 0;
            let mouseY = 0;
            let circleX = 0;
            let circleY = 0;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                
                // Dot follows immediately
                gsap.set(cursorDot, { x: mouseX, y: mouseY });
            });

            // Circle follows with delay
            gsap.ticker.add(() => {
                circleX += (mouseX - circleX) * 0.15;
                circleY += (mouseY - circleY) * 0.15;
                gsap.set(cursorCircle, { x: circleX, y: circleY });
            });

            // Hover states
            const interactiveElements = document.querySelectorAll('a, button, input, textarea');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => document.body.classList.add('hover-active'));
                el.addEventListener('mouseleave', () => document.body.classList.remove('hover-active'));
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise"></div>

<div className="cursor-dot"></div>
<div className="cursor-circle"></div>

<div className="loader" id="loader">
<div className="font-mono text-sm tracking-widest uppercase text-secondary mb-4">Initialising Sarhad Protocol</div>
<div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
<div className="absolute inset-0 bg-accent w-0" id="loader-bar"></div>
</div>
<div className="mt-2 font-mono text-xs text-secondary" id="loader-percent">00%</div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 mix-blend-difference text-primary pointer-events-none">
<div className="flex justify-between items-center max-w-[1800px] mx-auto w-full">
<a className="pointer-events-auto group" href="#">
<div className="font-semibold text-lg tracking-tight flex items-center gap-2">
<span className="w-2 h-2 bg-accent rounded-sm group-hover:rotate-45 transition-transform duration-500"></span>
                    SARHAD
                </div>
</a>
<div className="hidden md:flex items-center gap-1 pointer-events-auto glass-panel rounded-full p-1.5 px-2">
<a className="px-5 py-2 rounded-full hover:bg-white/5 text-xs font-medium text-secondary hover:text-white transition-all magnetic-btn" href="#philosophy">Philosophy</a>
<a className="px-5 py-2 rounded-full hover:bg-white/5 text-xs font-medium text-secondary hover:text-white transition-all magnetic-btn" href="#services">Expertise</a>
<a className="px-5 py-2 rounded-full hover:bg-white/5 text-xs font-medium text-secondary hover:text-white transition-all magnetic-btn" href="#process">System</a>
</div>
<a className="pointer-events-auto magnetic-btn bg-white text-black px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide hover:bg-accent hover:text-white transition-colors duration-300" href="#contact">
                INITIATE
            </a>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-6 pt-20">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
<div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
<div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md opacity-0 hero-anim">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="font-mono text-[10px] tracking-[0.2em] uppercase text-secondary">System Online</span>
</div>
<h1 className="text-[10vw] md:text-[8vw] leading-[0.85] font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-8 hero-title">
<div className="overflow-hidden"><span className="block translate-y-full">BEYOND</span></div>
<div className="overflow-hidden"><span className="block translate-y-full">BOUNDARIES</span></div>
</h1>
<div className="max-w-xl mx-auto opacity-0 hero-anim">
<p className="text-secondary text-lg md:text-xl font-light leading-relaxed tracking-tight">
                    Bridging the gap between established businesses and modern technological capabilities. We operationalize efficiency through strategic design and systems optimization.
                </p>
</div>
<div className="mt-12 opacity-0 hero-anim">
<p className="font-mono text-xs text-secondary/60 uppercase tracking-widest mb-4">Operating In</p>
<div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-xs text-secondary">
<span>Lagos</span>
<span className="text-accent">/</span>
<span>Karachi</span>
<span className="text-accent">/</span>
<span>Nairobi</span>
<span className="text-accent">/</span>
<span>Berlin</span>
<span className="text-accent">/</span>
<span>London</span>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 hero-anim">
<div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-secondary to-transparent"></div>
</div>
</header>

<div className="border-y border-white/5 bg-surface/50 overflow-hidden py-4">
<div className="marquee-content flex gap-12 whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-secondary">
<span>Operational User Experience</span>
<span className="text-accent">✦</span>
<span>Systems Optimization</span>
<span className="text-accent">✦</span>
<span>Brand Revitalization</span>
<span className="text-accent">✦</span>
<span>Process Automation</span>
<span className="text-accent">✦</span>
<span>Data Management</span>
<span className="text-accent">✦</span>
<span>Technology Democratization</span>
<span className="text-accent">✦</span>
<span>Operational User Experience</span>
<span className="text-accent">✦</span>
<span>Systems Optimization</span>
</div>
</div>

<section className="py-24 md:py-32 px-4 md:px-6 max-w-[1400px] mx-auto border-gradient-bottom" id="philosophy">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
<div className="space-y-8 sticky top-32 h-fit">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-gradient reveal-trigger">
                    Operational<br/>User Experience.
                </h2>
<div className="h-[1px] w-24 bg-accent"></div>
<p className="text-secondary text-lg font-light leading-relaxed reveal-trigger">
                    Most agencies focus on the end-user. We focus on the business operator. We eliminate busy work, systemize internal processes, and bring Gen Z technological thinking to traditional business models.
                </p>
<div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5 reveal-trigger">
<div>
<div className="text-3xl font-medium text-white mb-2">35%</div>
<div className="text-xs font-mono text-secondary uppercase tracking-wider">Efficiency Gain</div>
</div>
<div>
<div className="text-3xl font-medium text-white mb-2">100%</div>
<div className="text-xs font-mono text-secondary uppercase tracking-wider">Data Clarity</div>
</div>
</div>
</div>
<div className="space-y-6">

<div className="group p-8 rounded-2xl glass-panel hover:bg-white/5 transition-all duration-500 reveal-card">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:text-accent transition-colors">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Integrated Approach</h3>
<p className="text-secondary text-sm leading-relaxed">
                        We don't view design, systems, and automation as separate entities. We combine them holistically to create businesses that are functional, usable, and aesthetically excellent.
                    </p>
</div>

<div className="group p-8 rounded-2xl glass-panel hover:bg-white/5 transition-all duration-500 reveal-card">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:text-accent transition-colors">
<i className="w-5 h-5" data-lucide="cpu"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Technology Democratization</h3>
<p className="text-secondary text-sm leading-relaxed">
                        Making enterprise-level automation accessible for mid-tier businesses. From voice transcription for data logging to custom operational dashboards.
                    </p>
</div>

<div className="group p-8 rounded-2xl glass-panel hover:bg-white/5 transition-all duration-500 reveal-card">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:text-accent transition-colors">
<i className="w-5 h-5" data-lucide="globe"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Global Context</h3>
<p className="text-secondary text-sm leading-relaxed">
                        Serving the Diaspora and Emerging Markets. We understand the trust dynamics of family-owned businesses while implementing international standards of quality.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-4 md:px-6 border-gradient-bottom" id="services">
<div className="max-w-[1400px] mx-auto">
<div className="mb-20 md:flex justify-between items-end">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-4 md:mb-0">
                    Core Capabilities
                </h2>
<p className="font-mono text-xs text-secondary uppercase tracking-widest">
                    Design · Systems · Operations
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">

<div className="bg-background p-10 group hover:bg-surface transition-colors duration-300 relative border-b md:border-b-0 md:border-r border-white/5">
<div className="absolute top-10 right-10 opacity-20 group-hover:opacity-100 group-hover:text-accent transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
<i className="w-6 h-6 text-secondary group-hover:text-white transition-colors mb-6" data-lucide="pen-tool"></i>
<h3 className="text-lg font-medium text-white mb-3">Brand Revitalization</h3>
<ul className="space-y-2">
<li className="text-xs text-secondary flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span>Identity Redesign</li>
<li className="text-xs text-secondary flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span>Market Positioning</li>
<li className="text-xs text-secondary flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span>Visual Collateral</li>
</ul>
</div>

<div className="bg-background p-10 group hover:bg-surface transition-colors duration-300 relative border-b md:border-b-0 md:border-r border-white/5">
<div className="absolute top-10 right-10 opacity-20 group-hover:opacity-100 group-hover:text-accent transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
<i className="w-6 h-6 text-secondary group-hover:text-white transition-colors mb-6" data-lucide="workflow"></i>
<h3 className="text-lg font-medium text-white mb-3">Systems &amp; Automation</h3>
<ul className="space-y-2">
<li className="text-xs text-secondary flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span>Workflow Design</li>
<li className="text-xs text-secondary flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span>Data Logging Solutions</li>
<li className="text-xs text-secondary flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span>Process Optimization</li>
</ul>
</div>

<div className="bg-background p-10 group hover:bg-surface transition-colors duration-300 relative border-b md:border-b-0 border-white/5">
<div className="absolute top-10 right-10 opacity-20 group-hover:opacity-100 group-hover:text-accent transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
<i className="w-6 h-6 text-secondary group-hover:text-white transition-colors mb-6" data-lucide="database"></i>
<h3 className="text-lg font-medium text-white mb-3">Data Portals</h3>
<ul className="space-y-2">
<li className="text-xs text-secondary flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span>Custom Dashboards</li>
<li className="text-xs text-secondary flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span>Business Analytics</li>
<li className="text-xs text-secondary flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span>Reporting Tools</li>
</ul>
</div>

<div className="bg-background p-10 group hover:bg-surface transition-colors duration-300 relative border-b md:border-b-0 md:border-r border-white/5 md:border-t">
<div className="absolute top-10 right-10 opacity-20 group-hover:opacity-100 group-hover:text-accent transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
<i className="w-6 h-6 text-secondary group-hover:text-white transition-colors mb-6" data-lucide="monitor"></i>
<h3 className="text-lg font-medium text-white mb-3">Web Presence</h3>
<ul className="space-y-2">
<li className="text-xs text-secondary flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span>Functional Design</li>
<li className="text-xs text-secondary flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span>E-commerce</li>
<li className="text-xs text-secondary flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span>Mobile Responsive</li>
</ul>
</div>

<div className="bg-background p-10 group hover:bg-surface transition-colors duration-300 relative md:border-t md:border-r border-white/5">
<div className="absolute top-10 right-10 opacity-20 group-hover:opacity-100 group-hover:text-accent transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
<i className="w-6 h-6 text-secondary group-hover:text-white transition-colors mb-6" data-lucide="briefcase"></i>
<h3 className="text-lg font-medium text-white mb-3">Consulting</h3>
<ul className="space-y-2">
<li className="text-xs text-secondary flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span>Efficiency Audits</li>
<li className="text-xs text-secondary flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span>Integration Roadmaps</li>
<li className="text-xs text-secondary flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span>Gap Analysis</li>
</ul>
</div>

<div className="bg-surface p-10 flex flex-col justify-center items-start md:border-t border-white/5">
<h3 className="text-lg font-medium text-white mb-2">Ready to evolve?</h3>
<p className="text-xs text-secondary mb-6">Identify your inefficiencies today.</p>
<a className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent hover:text-white transition-colors" href="#contact">
                        Start Audit <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-6 bg-surface/30 relative overflow-hidden">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1">
<div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 font-mono text-[10px] text-accent uppercase tracking-widest mb-6">
                        Case Study: Vintage Retail
                    </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6">
                        From manual entry to <br/> <span className="text-secondary">voice-activated logistics.</span>
</h2>
<p className="text-secondary text-lg font-light leading-relaxed mb-8 max-w-md">
                        How we helped a diaspora-owned vintage clothing chain automate inventory management, reducing weekly admin time by 15 hours.
                    </p>
<div className="flex items-center gap-8 border-t border-white/5 pt-8">
<div>
<div className="text-2xl font-medium text-white">15h+</div>
<div className="text-[10px] uppercase tracking-wider text-secondary mt-1">Saved Weekly</div>
</div>
<div>
<div className="text-2xl font-medium text-white">0%</div>
<div className="text-[10px] uppercase tracking-wider text-secondary mt-1">Data Errors</div>
</div>
</div>
</div>
<div className="order-1 md:order-2 relative group cursor-none">
<div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<div className="relative bg-background border border-white/10 rounded-lg overflow-hidden aspect-[4/3] flex items-center justify-center">

<div className="w-3/4 h-3/4 bg-surface rounded border border-white/5 p-4 flex flex-col gap-3 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
<div className="flex items-center justify-between border-b border-white/5 pb-3">
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="h-1 w-12 bg-white/10 rounded"></div>
</div>
<div className="flex-1 space-y-2">
<div className="flex gap-2">
<div className="w-1/3 h-20 bg-white/5 rounded animate-pulse"></div>
<div className="w-2/3 h-20 bg-white/5 rounded"></div>
</div>
<div className="h-4 w-full bg-white/5 rounded"></div>
<div className="h-4 w-2/3 bg-white/5 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-4 md:px-6 max-w-[1200px] mx-auto text-center" id="process">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-16">The Sarhad Method</h2>
<div className="relative">

<div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -z-10 hidden md:block"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="relative group">
<div className="w-12 h-12 mx-auto bg-surface border border-white/10 rounded-full flex items-center justify-center text-secondary group-hover:text-white group-hover:border-accent transition-all duration-300 z-10 relative mb-6">
<span className="font-mono text-sm">01</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Audit</h3>
<p className="text-xs text-secondary leading-relaxed">Identify busy work and operational bottlenecks.</p>
</div>
<div className="relative group">
<div className="w-12 h-12 mx-auto bg-surface border border-white/10 rounded-full flex items-center justify-center text-secondary group-hover:text-white group-hover:border-accent transition-all duration-300 z-10 relative mb-6">
<span className="font-mono text-sm">02</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Strategy</h3>
<p className="text-xs text-secondary leading-relaxed">Design the perfect workflow before writing code.</p>
</div>
<div className="relative group">
<div className="w-12 h-12 mx-auto bg-surface border border-white/10 rounded-full flex items-center justify-center text-secondary group-hover:text-white group-hover:border-accent transition-all duration-300 z-10 relative mb-6">
<span className="font-mono text-sm">03</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Build</h3>
<p className="text-xs text-secondary leading-relaxed">Implement automation and design systems.</p>
</div>
<div className="relative group">
<div className="w-12 h-12 mx-auto bg-surface border border-white/10 rounded-full flex items-center justify-center text-secondary group-hover:text-white group-hover:border-accent transition-all duration-300 z-10 relative mb-6">
<span className="font-mono text-sm">04</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Optimize</h3>
<p className="text-xs text-secondary leading-relaxed">Continuous refinement and support.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-4 md:px-6 border-t border-white/5 bg-background" id="contact">
<div className="max-w-4xl mx-auto text-center">
<p className="font-mono text-xs text-accent uppercase tracking-widest mb-6">Stealth Operations</p>
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-8">
                Cross the boundary.
            </h2>
<p className="text-secondary text-lg font-light mb-12 max-w-xl mx-auto">
                Currently accepting partnerships for Q3. We are selective with our clients to ensure perfectionist quality control.
            </p>
<form className="max-w-md mx-auto space-y-4 text-left">
<div>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors placeholder:text-gray-600" placeholder="Email Address" type="email"/>
</div>
<div>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors placeholder:text-gray-600" placeholder="Briefly describe your operational challenge..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-medium text-sm py-3 rounded-lg hover:bg-accent hover:text-white transition-all duration-300 magnetic-btn" type="button">
                    Request Consultation
                </button>
</form>
<div className="mt-16 flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-xs text-secondary font-mono uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="mailto:hello@sarhad.agency">hello@sarhad.agency</a>
</div>
</div>
</section>
<footer className="py-8 border-t border-white/5 text-center">
<div className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
            © 2024 Sarhad Agency. Beyond Boundaries.
        </div>
</footer>


    </>
  );
}
