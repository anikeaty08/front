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



        // Initialize Smooth Scroll with more damping for luxury feel
        const lenis = new Lenis({
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 0.8,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // GSAP Setup
        gsap.registerPlugin(ScrollTrigger);

        // 1. Shutter Animation on Load
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.body.classList.add('loaded');
            }, 100);
        });

        // 2. Custom Cursor Logic
        const cursor = document.querySelector('.cursor-dot');
        const hoverTriggers = document.querySelectorAll('.hover-trigger');

        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.15,
                ease: "power2.out"
            });
        });

        hoverTriggers.forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
        });

        // 3. Grid Drawing
        const gridCells = document.querySelectorAll('.grid-cell');
        gridCells.forEach(cell => {
            ScrollTrigger.create({
                trigger: cell,
                start: "top 85%",
                onEnter: () => cell.classList.add('active')
            });
        });

        // 4. Marquee Scroll (Slower and smoother)
        gsap.to(".marquee-content", {
            xPercent: -20,
            ease: "none",
            scrollTrigger: {
                trigger: ".marquee-container",
                scrub: 1.5
            }
        });

        // 5. Text Highlight Manifesto
        const manifesto = document.getElementById('manifesto');
        const text = manifesto.innerText;
        manifesto.innerHTML = "";
        text.split(" ").forEach(word => {
            const span = document.createElement("span");
            span.innerText = word + " ";
            span.style.opacity = "0.1";
            span.style.transition = "opacity 0.3s ease";
            manifesto.appendChild(span);
        });

        const spans = manifesto.querySelectorAll("span");
        gsap.to(spans, {
            opacity: 1,
            color: "#ffffff",
            stagger: 0.05,
            scrollTrigger: {
                trigger: "#manifesto",
                start: "top 80%",
                end: "bottom 50%",
                scrub: 1
            }
        });

        // 6. Horizontal Scroll Process
        let processSection = document.querySelector(".process-wrapper");
        let processContainer = document.querySelector(".process-container");

        if (processSection && processContainer) {
            gsap.to(processContainer, {
                x: () => -(processContainer.scrollWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: processSection,
                    pin: true,
                    scrub: 1,
                    end: () => "+=" + (processContainer.scrollWidth - window.innerWidth)
                }
            });
        }

        // 7. Image Trail
        const teamItems = document.querySelectorAll('.team-item');
        const trailWrapper = document.querySelector('.trail-img-wrapper');
        const trailImg = document.querySelector('.trail-img');

        document.addEventListener('mousemove', (e) => {
            gsap.to(trailWrapper, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5,
                ease: "power2.out"
            });
        });

        teamItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const imgUrl = item.getAttribute('data-img');
                if(imgUrl) {
                    trailImg.src = imgUrl;
                    gsap.to(trailWrapper, { opacity: 1, scale: 1, rotate: 0, duration: 0.4 });
                }
            });
            item.addEventListener('mouseleave', () => {
                gsap.to(trailWrapper, { opacity: 0, scale: 0.8, rotate: -5, duration: 0.4 });
            });
        });

        // 8. Zoom Mask Effect
        gsap.to(".zoom-circle", {
            scale: 500,
            borderRadius: "0%",
            scrollTrigger: {
                trigger: ".zoom-wrapper",
                start: "top top",
                end: "bottom bottom",
                scrub: 1
            }
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
      
<div className="cursor-dot"></div>
<div className="noise"></div>

<nav className="fixed top-0 left-0 w-full z-50">
<div className="max-w-7xl mx-auto px-6 pt-6">
<div className="rounded-full border border-white/5 backdrop-blur-md px-6 py-4 flex items-center justify-between bg-black/40 transition-all duration-300 hover:border-white/10 hover:bg-black/60 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">

<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-sm"></div>
<span className="text-sm font-semibold tracking-tight heading-font text-white">SLIMANI / OS</span>
</div>

<div className="hidden md:flex gap-8 text-[11px] font-mono uppercase tracking-widest text-neutral-400">
<a className="hover:text-indigo-400 transition-colors hover-trigger relative group" href="#about">
                        Services
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-indigo-500 transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-cyan-400 transition-colors hover-trigger relative group" href="#metrics">
                        Metrics
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-500 transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-emerald-400 transition-colors hover-trigger relative group" href="#work">
                        Work
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-500 transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-rose-400 transition-colors hover-trigger relative group" href="#process">
                        Process
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-rose-500 transition-all group-hover:w-full"></span>
</a>
</div>

<div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-wider text-neutral-500 bg-neutral-900/50 px-3 py-1.5 rounded-full border border-white/5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-neutral-300">System v2.4</span>
</div>
</div>
</div>
</nav>

<section className="min-h-screen flex flex-col md:px-12 border-neutral-900/50 border-b pt-24 pr-6 pl-6 relative justify-center bg-[#030303] overflow-hidden">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse-ring"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
<div className="max-w-7xl mx-auto w-full z-10">
<div className="mb-10 overflow-hidden">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-white/10 bg-white/5 backdrop-blur-sm shutter-wrapper">
<span className="shutter-text text-[10px] mono-font text-indigo-300 uppercase tracking-widest">
                        Available for New Architecture
                    </span>
</div>
</div>
<h1 className="text-6xl md:text-8xl lg:text-[10rem] font-medium tracking-tighter leading-[0.85] text-white uppercase mb-12 heading-font">
<div className="shutter-wrapper">
<span className="shutter-text bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-neutral-500">System</span>
</div>
<div className="shutter-wrapper flex items-center gap-4 md:gap-8">
<span className="shutter-text text-neutral-700 italic font-serif">Architect</span>
<div className="h-[2px] w-12 md:w-32 bg-indigo-500 shutter-text"></div>
</div>
<div className="shutter-wrapper">
<span className="shutter-text bg-clip-text text-transparent bg-gradient-to-br from-neutral-200 to-neutral-600">&amp; Developer</span>
</div>
</h1>
<div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-10 w-full backdrop-blur-sm">
<div className="max-w-lg text-sm md:text-base text-neutral-400 leading-relaxed mb-8 md:mb-0 shutter-wrapper delay-500">
<span className="shutter-text">
                        Crafting high-performance web applications and automated data pipelines. 
                        Merging <span className="text-white">technical precision</span> with <span className="text-white">creative fluidity</span>.
                    </span>
</div>
<a className="group flex items-center gap-6 hover-trigger" href="#work">
<div className="relative">
<div className="absolute inset-0 bg-indigo-500 blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
<div className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
<svg className="w-5 h-5 text-white group-hover:rotate-45 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</div>
</div>
<span className="text-xs font-mono uppercase tracking-widest text-neutral-500 group-hover:text-indigo-400 transition-colors">
                        Explore Work
                    </span>
</a>
</div>
</div>
</section>

<div className="py-16 bg-[#030303] overflow-hidden whitespace-nowrap border-b border-neutral-900/50 marquee-container relative z-10">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10"></div>
<div className="inline-flex items-center gap-16 marquee-content opacity-50 hover:opacity-100 transition-opacity duration-500">
<span className="text-7xl md:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-neutral-700 to-neutral-900 tracking-tighter heading-font uppercase stroke-text hover:from-white hover:to-neutral-400 transition-all">Next.js</span>
<span className="text-7xl md:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 tracking-tighter heading-font uppercase stroke-text hover:from-indigo-400 hover:to-indigo-900 transition-all">React</span>
<span className="text-7xl md:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-neutral-700 to-neutral-900 tracking-tighter heading-font uppercase stroke-text hover:from-white hover:to-neutral-400 transition-all">Node.js</span>
<span className="text-7xl md:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 tracking-tighter heading-font uppercase stroke-text hover:from-cyan-400 hover:to-cyan-900 transition-all">Python</span>
<span className="text-7xl md:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-neutral-700 to-neutral-900 tracking-tighter heading-font uppercase stroke-text hover:from-white hover:to-neutral-400 transition-all">TypeScript</span>
<span className="text-7xl md:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 tracking-tighter heading-font uppercase stroke-text hover:from-emerald-400 hover:to-emerald-900 transition-all">PostgreSQL</span>
<span className="text-7xl md:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-neutral-700 to-neutral-900 tracking-tighter heading-font uppercase stroke-text hover:from-white hover:to-neutral-400 transition-all">Docker</span>
</div>
</div>

<section className="py-32 px-6 md:px-12 bg-[#030303] border-b border-neutral-900/50" id="metrics">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-900/50 border border-neutral-800/50 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">

<div className="bg-[#050505] p-8 group hover:bg-[#0a0a0a] transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full transition-transform duration-500 group-hover:scale-150"></div>
<div className="flex justify-between items-start mb-8 relative z-10">
<span className="text-[10px] font-mono uppercase text-emerald-500/70 tracking-widest border border-emerald-900/30 px-2 py-0.5 rounded bg-emerald-900/10">Uptime</span>
<div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></div>
</div>
<div className="text-4xl font-mono text-white mb-6 group-hover:text-emerald-200 transition-colors">99.99%</div>
<svg className="w-full h-10 text-emerald-900/50 group-hover:text-emerald-500 transition-colors duration-500 sparkline" fill="none" stroke="currentColor" strokeWidth="1.5">
<path d="M0 25 L10 25 L20 15 L30 20 L40 5 L50 15 L60 25 L70 25 L80 20 L90 25 L100 25"></path>
</svg>
</div>

<div className="bg-[#050505] p-8 group hover:bg-[#0a0a0a] transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-bl-full transition-transform duration-500 group-hover:scale-150"></div>
<div className="flex justify-between items-start mb-8 relative z-10">
<span className="text-[10px] font-mono uppercase text-indigo-500/70 tracking-widest border border-indigo-900/30 px-2 py-0.5 rounded bg-indigo-900/10">Latency</span>
<span className="text-[10px] text-neutral-600 font-mono">MS</span>
</div>
<div className="text-4xl font-mono text-white mb-6 group-hover:text-indigo-200 transition-colors">18ms</div>
<svg className="w-full h-10 text-indigo-900/50 group-hover:text-indigo-500 transition-colors duration-500 sparkline" fill="none" stroke="currentColor" strokeWidth="1.5">
<path d="M0 20 L15 20 L25 10 L35 20 L50 20 L60 25 L75 20 L85 15 L100 20"></path>
</svg>
</div>

<div className="bg-[#050505] p-8 group hover:bg-[#0a0a0a] transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-bl-full transition-transform duration-500 group-hover:scale-150"></div>
<div className="flex justify-between items-start mb-8 relative z-10">
<span className="text-[10px] font-mono uppercase text-cyan-500/70 tracking-widest border border-cyan-900/30 px-2 py-0.5 rounded bg-cyan-900/10">Commits</span>
<span className="text-[10px] text-neutral-600 font-mono">Wk</span>
</div>
<div className="text-4xl font-mono text-white mb-6 group-hover:text-cyan-200 transition-colors">482</div>
<div className="flex gap-1.5 h-10 items-end">
<div className="w-1.5 rounded-t-sm bg-neutral-800 h-[40%] group-hover:bg-cyan-900 transition-colors duration-300"></div>
<div className="w-1.5 rounded-t-sm bg-neutral-800 h-[70%] group-hover:bg-cyan-700 transition-colors duration-300 delay-75"></div>
<div className="w-1.5 rounded-t-sm bg-neutral-800 h-[50%] group-hover:bg-cyan-800 transition-colors duration-300 delay-100"></div>
<div className="w-1.5 rounded-t-sm bg-neutral-800 h-[90%] group-hover:bg-cyan-500 transition-colors duration-300 delay-150"></div>
<div className="w-1.5 rounded-t-sm bg-neutral-800 h-[60%] group-hover:bg-cyan-600 transition-colors duration-300 delay-200"></div>
<div className="w-1.5 rounded-t-sm bg-neutral-800 h-[80%] group-hover:bg-cyan-400 transition-colors duration-300 delay-300"></div>
<div className="w-1.5 rounded-t-sm bg-neutral-800 h-[100%] group-hover:bg-cyan-300 transition-colors duration-300 delay-500"></div>
</div>
</div>

<div className="bg-[#050505] p-8 group hover:bg-[#0a0a0a] transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-bl-full transition-transform duration-500 group-hover:scale-150"></div>
<div className="flex justify-between items-start mb-8 relative z-10">
<span className="text-[10px] font-mono uppercase text-rose-500/70 tracking-widest border border-rose-900/30 px-2 py-0.5 rounded bg-rose-900/10">Requests</span>
<span className="text-[10px] text-neutral-600 font-mono">/s</span>
</div>
<div className="text-4xl font-mono text-white mb-6 group-hover:text-rose-200 transition-colors">4.2k</div>
<svg className="w-full h-10 text-rose-900/50 group-hover:text-rose-500 transition-colors duration-500 sparkline" fill="none" stroke="currentColor" strokeWidth="1.5">
<path d="M0 28 L10 25 L20 28 L30 20 L40 22 L50 15 L60 10 L70 15 L80 5 L90 8 L100 2"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#030303] relative" id="about">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between mb-20 items-end">
<h2 className="text-4xl md:text-5xl font-medium heading-font tracking-tight text-white glow-text">
                    Core Modules
                </h2>
<div className="flex items-center gap-4">
<div className="h-px w-12 bg-neutral-800"></div>
<p className="text-sm font-mono text-neutral-500 uppercase mt-4 md:mt-0">
                        [ 01 - 06 ]
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 border-l border-neutral-800/50">

<div className="grid-cell p-12 border-r border-b border-neutral-800/50 hover:bg-neutral-900/20 transition-colors group hover-trigger cursor-none relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="mb-24 flex justify-between relative z-10">
<div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800 group-hover:border-indigo-500/50 group-hover:text-indigo-400 transition-all duration-300">
<svg className="w-6 h-6 text-neutral-400 group-hover:text-indigo-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path>
</svg>
</div>
<span className="text-xs font-mono text-neutral-600 group-hover:text-indigo-400">01</span>
</div>
<h3 className="text-2xl font-medium text-white mb-4 heading-font group-hover:translate-x-2 transition-transform duration-300">Frontend Dev</h3>
<p className="text-sm text-neutral-500 leading-relaxed max-w-xs group-hover:text-neutral-400">
                        Building lightning-fast interfaces with React, Next.js, and smooth motion libraries.
                    </p>
</div>

<div className="grid-cell p-12 border-r border-b border-neutral-800/50 hover:bg-neutral-900/20 transition-colors group hover-trigger cursor-none relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="mb-24 flex justify-between relative z-10">
<div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all duration-300">
<svg className="w-6 h-6 text-neutral-400 group-hover:text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" x2="4" y1="22" y2="15"></line>
</svg>
</div>
<span className="text-xs font-mono text-neutral-600 group-hover:text-cyan-400">02</span>
</div>
<h3 className="text-2xl font-medium text-white mb-4 heading-font group-hover:translate-x-2 transition-transform duration-300">Backend Arch</h3>
<p className="text-sm text-neutral-500 leading-relaxed max-w-xs group-hover:text-neutral-400">
                        Designing scalable APIs and database schemas that handle millions of requests securely.
                    </p>
</div>

<div className="grid-cell p-12 border-r border-b border-neutral-800/50 hover:bg-neutral-900/20 transition-colors group hover-trigger cursor-none relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="mb-24 flex justify-between relative z-10">
<div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800 group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-all duration-300">
<svg className="w-6 h-6 text-neutral-400 group-hover:text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="3"></circle><path d="M12 1v4"></path><path d="M12 19v4"></path><path d="m4.93 4.93 2.83 2.83"></path><path d="m16.24 16.24 2.83 2.83"></path><path d="M1 12h4"></path><path d="M19 12h4"></path><path d="m4.93 19.07 2.83-2.83"></path><path d="m16.24 7.76 2.83-2.83"></path>
</svg>
</div>
<span className="text-xs font-mono text-neutral-600 group-hover:text-emerald-400">03</span>
</div>
<h3 className="text-2xl font-medium text-white mb-4 heading-font group-hover:translate-x-2 transition-transform duration-300">Automation</h3>
<p className="text-sm text-neutral-500 leading-relaxed max-w-xs group-hover:text-neutral-400">
                        Building intelligent bots and data extraction pipelines that run 24/7.
                    </p>
</div>

<div className="grid-cell p-12 border-r border-b border-neutral-800/50 hover:bg-neutral-900/20 transition-colors group hover-trigger cursor-none relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="mb-24 flex justify-between relative z-10">
<div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800 group-hover:border-rose-500/50 group-hover:text-rose-400 transition-all duration-300">
<svg className="w-6 h-6 text-neutral-400 group-hover:text-rose-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
</svg>
</div>
<span className="text-xs font-mono text-neutral-600 group-hover:text-rose-400">04</span>
</div>
<h3 className="text-2xl font-medium text-white mb-4 heading-font group-hover:translate-x-2 transition-transform duration-300">DevOps</h3>
<p className="text-sm text-neutral-500 leading-relaxed max-w-xs group-hover:text-neutral-400">
                        Containerized deployments with CI/CD pipelines for zero-downtime releases.
                    </p>
</div>

<div className="grid-cell p-12 border-r border-b border-neutral-800/50 hover:bg-neutral-900/20 transition-colors group hover-trigger cursor-none relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="mb-24 flex justify-between relative z-10">
<div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800 group-hover:border-purple-500/50 group-hover:text-purple-400 transition-all duration-300">
<svg className="w-6 h-6 text-neutral-400 group-hover:text-purple-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
</div>
<span className="text-xs font-mono text-neutral-600 group-hover:text-purple-400">05</span>
</div>
<h3 className="text-2xl font-medium text-white mb-4 heading-font group-hover:translate-x-2 transition-transform duration-300">3D &amp; WebGL</h3>
<p className="text-sm text-neutral-500 leading-relaxed max-w-xs group-hover:text-neutral-400">
                        Creating immersive 3D experiences with Three.js and custom shaders.
                    </p>
</div>

<div className="grid-cell p-12 border-r border-b border-neutral-800/50 hover:bg-neutral-900/20 transition-colors group hover-trigger cursor-none relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="mb-24 flex justify-between relative z-10">
<div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800 group-hover:border-orange-500/50 group-hover:text-orange-400 transition-all duration-300">
<svg className="w-6 h-6 text-neutral-400 group-hover:text-orange-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path>
</svg>
</div>
<span className="text-xs font-mono text-neutral-600 group-hover:text-orange-400">06</span>
</div>
<h3 className="text-2xl font-medium text-white mb-4 heading-font group-hover:translate-x-2 transition-transform duration-300">API Systems</h3>
<p className="text-sm text-neutral-500 leading-relaxed max-w-xs group-hover:text-neutral-400">
                        Robust REST and GraphQL APIs with comprehensive documentation.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-[#030303] relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-900/5 blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="mb-16">
<h2 className="text-3xl font-medium heading-font tracking-tight text-white mb-2">
                    System Capabilities
                </h2>
<p className="text-sm text-neutral-500">Infrastructure grade solutions.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 rounded-3xl glass-card p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
<div className="absolute top-0 right-0 p-40 bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-indigo-500/30 transition-all duration-500"></div>
<div className="flex flex-col h-full justify-between relative z-10">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-indigo-900/20">
<svg className="w-7 h-7 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
</div>
<div>
<h3 className="text-2xl text-white heading-font mb-3">Microservices Architecture</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-md">Decoupled architecture allowing independent scaling and deployment. Utilizing Kubernetes for orchestration and Docker for containerization to ensure consistency across environments.</p>
</div>
</div>
</div>

<div className="md:col-span-2 rounded-3xl glass-card p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500 flex flex-col justify-between">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.05),transparent)]"></div>
<div className="flex justify-between items-start">
<h3 className="text-xl text-white heading-font">Real-time Sync</h3>
<div className="p-2 rounded-lg bg-neutral-900/50 border border-white/5">
<svg className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 21h5v-5"></path></svg>
</div>
</div>
<p className="text-sm text-neutral-400 mt-4 group-hover:text-neutral-300 transition-colors">WebSockets and SSE implementation for instant data propagation across clients, ensuring <span className="text-emerald-400">sub-100ms</span> latency.</p>
</div>

<div className="md:col-span-1 rounded-3xl glass-card p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-full h-full flex flex-col justify-between relative z-10">
<svg className="w-8 h-8 text-neutral-500 group-hover:text-rose-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
<h3 className="text-lg text-white heading-font">Enterprise Security</h3>
</div>
</div>

<div className="md:col-span-1 rounded-3xl glass-card p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-full h-full flex flex-col justify-between relative z-10">
<svg className="w-8 h-8 text-neutral-500 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
<h3 className="text-lg text-white heading-font">Global Edge</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 bg-[#030303] flex items-center justify-center border-t border-b border-neutral-900/50">
<div className="max-w-4xl mx-auto text-center">
<p className="text-4xl md:text-6xl font-medium leading-[1.15] tracking-tight heading-font text-neutral-300" id="manifesto">
                I don't just write code. I architect systems that scale, automate workflows that save time, and build interfaces that users actually enjoy. In a world of digital noise, functionality is the only currency.
            </p>
</div>
</section>

<section className="process-wrapper overflow-hidden bg-[#030303] h-screen relative border-b border-neutral-900/50" id="process">
<div className="process-container flex h-full w-[400vw]">

<div className="w-screen h-full grid grid-cols-1 lg:grid-cols-2 border-r border-neutral-800/50 relative bg-[#030303]">
<div className="flex flex-col justify-center px-12 md:px-24 relative z-10 pointer-events-none">
<div className="absolute top-12 left-12 text-xs font-mono text-indigo-500 mb-2">PHASE_01</div>
<h3 className="text-6xl md:text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 mb-8 heading-font">Discovery</h3>
<p className="text-xl md:text-2xl text-neutral-400 max-w-xl font-light leading-relaxed">
                        Deep dive into business logic. Understanding goals, target audience, and defining technical constraints.
                    </p>
</div>
<div className="hidden lg:flex items-center justify-center relative border-l border-neutral-800/50 overflow-hidden bg-neutral-900/20">
<div className="relative p-12 border border-neutral-800/50 rounded-2xl bg-black/40 shadow-2xl">
<div className="grid grid-cols-4 gap-6 opacity-40">
<div className="w-3 h-3 bg-neutral-600 rounded-full"></div>
<div className="w-3 h-3 bg-neutral-600 rounded-full"></div>
<div className="w-3 h-3 bg-neutral-600 rounded-full"></div>
<div className="w-3 h-3 bg-neutral-600 rounded-full"></div>
<div className="w-3 h-3 bg-neutral-600 rounded-full"></div>
<div className="w-3 h-3 bg-neutral-600 rounded-full"></div>
<div className="w-3 h-3 bg-neutral-600 rounded-full"></div>
<div className="w-3 h-3 bg-neutral-600 rounded-full"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent animate-scan border-b border-emerald-500/50"></div>
</div>
</div>
</div>

<div className="w-screen h-full grid grid-cols-1 lg:grid-cols-2 border-r border-neutral-800/50 relative bg-[#030303]">
<div className="flex flex-col justify-center px-12 md:px-24 relative z-10 pointer-events-none">
<div className="absolute top-12 left-12 text-xs font-mono text-cyan-500 mb-2">PHASE_02</div>
<h3 className="text-6xl md:text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 mb-8 heading-font">Architecture</h3>
<p className="text-xl md:text-2xl text-neutral-400 max-w-xl font-light leading-relaxed">
                        Blueprinting the system. Designing scalable schemas, API contracts, and choosing the right stack.
                    </p>
</div>
<div className="hidden lg:flex items-center justify-center relative border-l border-neutral-800/50 overflow-hidden bg-neutral-900/20">
<div className="relative w-96 h-96 flex items-center justify-center">
<div className="absolute inset-0 border border-neutral-800 rounded-full animate-[spin_20s_linear_infinite]"></div>
<div className="absolute inset-12 border border-dashed border-neutral-700 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="w-24 h-24 bg-neutral-900 border border-cyan-500/30 rounded-xl flex items-center justify-center z-10 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
<svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
</div>
</div>
</div>

<div className="w-screen h-full grid grid-cols-1 lg:grid-cols-2 border-r border-neutral-800/50 relative bg-[#030303]">
<div className="flex flex-col justify-center px-12 md:px-24 relative z-10 pointer-events-none">
<div className="absolute top-12 left-12 text-xs font-mono text-purple-500 mb-2">PHASE_03</div>
<h3 className="text-6xl md:text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 mb-8 heading-font">Development</h3>
<p className="text-xl md:text-2xl text-neutral-400 max-w-xl font-light leading-relaxed">
                        Rigorous coding sprints. Continuous integration, automated testing, and pixel-perfect implementation.
                    </p>
</div>
<div className="hidden lg:flex items-center justify-center relative border-l border-neutral-800/50 overflow-hidden bg-neutral-900/20">
<div className="relative flex items-center gap-8">
<div className="w-14 h-14 rounded-full border border-neutral-700 bg-neutral-900 flex items-center justify-center z-10">
<div className="w-2 h-2 bg-neutral-500 rounded-full"></div>
</div>
<div className="w-32 h-[1px] bg-neutral-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent w-1/2 animate-data-flow"></div>
</div>
<div className="w-24 h-24 rounded-2xl border border-purple-500/30 bg-neutral-900 flex items-center justify-center relative shadow-[0_0_40px_-5px_rgba(168,85,247,0.3)] z-10">
<svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
</svg>
</div>
<div className="w-32 h-[1px] bg-neutral-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent w-1/2 animate-data-flow" style={{animationDelay: '.5s'}}></div>
</div>
<div className="w-14 h-14 rounded-full border border-neutral-700 bg-neutral-900 flex items-center justify-center z-10">
<div className="w-2 h-2 bg-neutral-500 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="w-screen h-full flex items-center justify-center relative bg-white text-black">
<div className="text-center relative z-10">
<h3 className="text-8xl md:text-[10rem] font-semibold tracking-tighter mb-10 heading-font">
                        Ready?
                    </h3>
<a className="px-10 py-5 bg-black text-white rounded-full text-sm font-mono uppercase tracking-widest hover:scale-105 transition-transform hover-trigger inline-block hover:shadow-2xl hover:shadow-black/20" href="#contact">
                        Initialize Project
                    </a>
</div>

<div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#030303] border-t border-neutral-900/50" id="work">
<div className="max-w-7xl mx-auto mb-24">
<h2 className="text-4xl md:text-5xl font-medium heading-font tracking-tight text-white">
                Selected Output
            </h2>
</div>
<div className="max-w-5xl mx-auto relative space-y-40">

<div className="sticky top-24 work-card group hover-trigger cursor-none">
<div className="bg-[#0a0a0a] border border-neutral-800 rounded-2xl overflow-hidden aspect-video relative shadow-2xl shadow-black">

<img className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black via-black/80 to-transparent">
<div className="flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div>
<h3 className="text-3xl font-medium text-white mb-2 heading-font">Lifa Platform</h3>
<div className="flex gap-2 text-xs font-mono text-indigo-300">
<span className="bg-indigo-900/30 border border-indigo-500/30 px-2 py-1 rounded">NEXT.JS</span>
<span className="bg-indigo-900/30 border border-indigo-500/30 px-2 py-1 rounded">STRIPE</span>
</div>
</div>
<div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="sticky top-32 work-card group hover-trigger cursor-none">
<div className="bg-[#0a0a0a] border border-neutral-800 rounded-2xl overflow-hidden aspect-video relative shadow-2xl shadow-black">

<img className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1558494949-ef526bca4899?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black via-black/80 to-transparent">
<div className="flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div>
<h3 className="text-3xl font-medium text-white mb-2 heading-font">Morphe Data</h3>
<div className="flex gap-2 text-xs font-mono text-cyan-300">
<span className="bg-cyan-900/30 border border-cyan-500/30 px-2 py-1 rounded">PYTHON</span>
<span className="bg-cyan-900/30 border border-cyan-500/30 px-2 py-1 rounded">REDIS</span>
</div>
</div>
<div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="sticky top-40 work-card group hover-trigger cursor-none">
<div className="bg-[#0a0a0a] border border-neutral-800 rounded-2xl overflow-hidden aspect-video relative shadow-2xl shadow-black">

<img className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black via-black/80 to-transparent">
<div className="flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div>
<h3 className="text-3xl font-medium text-white mb-2 heading-font">Grau Interface</h3>
<div className="flex gap-2 text-xs font-mono text-purple-300">
<span className="bg-purple-900/30 border border-purple-500/30 px-2 py-1 rounded">THREE.JS</span>
<span className="bg-purple-900/30 border border-purple-500/30 px-2 py-1 rounded">WEBGL</span>
</div>
</div>
<div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#030303] flex justify-center">
<div className="max-w-4xl w-full">
<div className="rounded-xl border border-neutral-800 bg-[#0a0a0a] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">

<div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-[#0f0f0f]">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
</div>
<span className="ml-4 text-xs font-mono text-neutral-500 flex-1 text-center">slimani-os — -zsh</span>
</div>

<div className="p-8 font-mono text-xs md:text-sm text-neutral-300 leading-relaxed min-h-[340px]">
<div className="mb-4">
<span className="text-emerald-500">➜</span> <span className="text-indigo-400">~</span> <span className="text-neutral-400">./deploy_system.sh --production</span>
</div>
<div className="mb-2">
<span className="text-neutral-600">[14:20:01]</span> <span className="text-white">Initializing core modules...</span>
</div>
<div className="mb-2 pl-4 border-l border-neutral-800">
<span className="text-neutral-500">Loading:</span> <span className="text-yellow-500">React v18.2.0</span><br/>
<span className="text-neutral-500">Loading:</span> <span className="text-yellow-500">Next.js v14.0.1</span><br/>
<span className="text-neutral-500">Loading:</span> <span className="text-yellow-500">TailwindCSS</span>
</div>
<div className="mb-2 mt-4">
<span className="text-neutral-600">[14:20:04]</span> Connecting to primary database cluster... <span className="text-emerald-500">Connected</span>
</div>
<div className="mb-2">
<span className="text-neutral-600">[14:20:05]</span> Optimizing assets &amp; chunks... <span className="text-emerald-500">Done (0.42s)</span>
</div>
<div className="mb-6 mt-4">
<span className="text-neutral-600">[14:20:08]</span> <span className="text-indigo-400 bg-indigo-900/20 px-2 py-0.5 rounded">System ready for deployment.</span>
</div>
<div className="flex items-center">
<span className="text-emerald-500 mr-2">➜</span> <span className="text-indigo-400 mr-2">~</span> <span className="animate-blink inline-block w-2.5 h-5 bg-neutral-400"></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#030303] border-b border-neutral-900/50">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between mb-20 items-end">
<h2 className="text-4xl md:text-5xl font-medium heading-font tracking-tight text-white">
                    References
                </h2>
<p className="text-sm font-mono text-neutral-500 uppercase mt-4 md:mt-0">
                    [ Trusted By ]
                </p>
</div>
<div className="flex flex-col border-t border-neutral-800/50">

<div className="team-item py-16 border-b border-neutral-800/50 flex justify-between items-center group cursor-pointer hover-trigger transition-all duration-300 hover:pl-8" data-img="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop">
<h3 className="text-4xl md:text-6xl font-medium text-neutral-500 group-hover:text-white transition-colors heading-font">
                        Michael König
                    </h3>
<span className="text-xs font-mono uppercase text-neutral-600 group-hover:text-neutral-400 text-right">
                        CEO, TechStart GmbH<br/><span className="text-indigo-500/50 group-hover:text-indigo-400">"Exceptional quality."</span>
</span>
</div>

<div className="team-item py-16 border-b border-neutral-800/50 flex justify-between items-center group cursor-pointer hover-trigger transition-all duration-300 hover:pl-8" data-img="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=1000&amp;auto=format&amp;fit=crop">
<h3 className="text-4xl md:text-6xl font-medium text-neutral-500 group-hover:text-white transition-colors heading-font">
                        Sarah Hoffmann
                    </h3>
<span className="text-xs font-mono uppercase text-neutral-600 group-hover:text-neutral-400 text-right">
                        Ops Lead, DataFlow<br/><span className="text-cyan-500/50 group-hover:text-cyan-400">"Saved 40+ hrs/week."</span>
</span>
</div>

<div className="team-item py-16 border-b border-neutral-800/50 flex justify-between items-center group cursor-pointer hover-trigger transition-all duration-300 hover:pl-8" data-img="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop">
<h3 className="text-4xl md:text-6xl font-medium text-neutral-500 group-hover:text-white transition-colors heading-font">
                        Thomas Mueller
                    </h3>
<span className="text-xs font-mono uppercase text-neutral-600 group-hover:text-neutral-400 text-right">
                        Founder, E-Com Plus<br/><span className="text-emerald-500/50 group-hover:text-emerald-400">"True technical partner."</span>
</span>
</div>
</div>
</div>
</section>

<section className="zoom-wrapper h-[200vh] relative bg-[#030303]">
<div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

<div className="zoom-circle w-1 h-1 rounded-full overflow-hidden relative z-10">
<img alt="Footer Visual" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&amp;w=3000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/30 flex items-center justify-center">
<h3 className="text-white text-5xl md:text-7xl heading-font font-medium tracking-tight">Let's Build</h3>
</div>
</div>
</div>
</section>

<footer className="py-20 px-6 border-t border-white/10 text-center bg-[#030303] relative z-20" id="contact">
<a className="block text-[13vw] font-bold leading-none text-[#111] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-white hover:to-neutral-500 transition-all duration-700 cursor-pointer hover-trigger heading-font tracking-tight" href="mailto:hello@slimani.dev">
            SLIMANI
        </a>
<div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto mt-20 text-xs font-mono text-neutral-600 gap-6">
<div className="flex gap-4">
<span>© 2024 JOSEF SLIMANI</span>
<span className="text-neutral-800">/</span>
<span className="text-green-500">ALL SYSTEMS OPERATIONAL</span>
</div>
<div className="flex gap-8 justify-center md:justify-end">
<a className="hover:text-white transition-colors" href="#">TWITTER</a>
<a className="hover:text-white transition-colors" href="#">GITHUB</a>
<a className="hover:text-white transition-colors" href="#">LINKEDIN</a>
</div>
</div>
</footer>

<div className="trail-img-wrapper">
<img alt="" className="trail-img grayscale contrast-125" src=""/>
</div>



    </>
  );
}
