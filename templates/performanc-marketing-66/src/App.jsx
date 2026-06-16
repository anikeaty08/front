import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Smooth Scroll (Lenis)
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

        // 4. Marquee Scroll
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
        if(manifesto) {
            const text = manifesto.innerText;
            manifesto.innerHTML = "";
            text.split(" ").forEach(word => {
                const span = document.createElement("span");
                span.innerText = word + " ";
                span.style.opacity = "0.15";
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
                    end: "bottom 40%",
                    scrub: 1
                }
            });
        }

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
                duration: 0.6,
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
  }, []);

  return (
    <>
      
<div className="cursor-dot"></div>
<div className="noise"></div>

<nav className="fixed top-0 left-0 w-full z-50">
<div className="max-w-7xl mx-auto px-6 pt-6">
<div className="rounded-full border border-white/10 backdrop-blur-xl px-6 py-3.5 flex items-center justify-between bg-black/60 transition-all duration-300 hover:border-white/15 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">

<div className="flex items-center gap-3">
<div className="w-2.5 h-2.5 bg-blue-500 rounded-sm shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
<span className="text-xs font-semibold tracking-tight heading-font text-white">NEXUS / ADS</span>
</div>

<div className="hidden md:flex gap-8 text-[11px] font-mono uppercase tracking-widest text-neutral-400">
<a className="hover:text-blue-400 transition-colors hover-trigger relative group" href="#services">
                        Soluzioni
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-emerald-400 transition-colors hover-trigger relative group" href="#metrics">
                        Risultati
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-500 transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-purple-400 transition-colors hover-trigger relative group" href="#work">
                        Casi Studio
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-purple-500 transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-orange-400 transition-colors hover-trigger relative group" href="#process">
                        Metodo
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-orange-500 transition-all group-hover:w-full"></span>
</a>
</div>

<div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-wider text-neutral-500 bg-neutral-900/80 px-3 py-1.5 rounded-full border border-white/5">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
<span className="text-neutral-300">Accepting Clients</span>
</div>
</div>
</div>
</nav>

<section className="min-h-screen flex flex-col md:px-12 border-neutral-900 border-b pt-32 pr-6 pl-6 relative justify-center bg-[#020202] overflow-hidden">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse-ring"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
<div className="max-w-7xl mx-auto w-full z-10">
<div className="mb-12 overflow-hidden">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm shutter-wrapper">
<span className="shutter-text text-[10px] mono-font text-blue-300 uppercase tracking-widest">
                        Growth Engineering v3.0
                    </span>
</div>
</div>
<h1 className="text-5xl md:text-7xl lg:text-[8.5rem] font-medium tracking-tighter leading-[0.9] text-white uppercase mb-12 heading-font">
<div className="shutter-wrapper">
<span className="shutter-text bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-neutral-500">Performance</span>
</div>
<div className="shutter-wrapper flex items-center gap-4 md:gap-8">
<span className="shutter-text text-neutral-700 italic font-serif">Driven</span>
<div className="h-[2px] w-12 md:w-32 bg-blue-600 shutter-text"></div>
<span className="shutter-text">Scale</span>
</div>
<div className="shutter-wrapper">
<span className="shutter-text bg-clip-text text-transparent bg-gradient-to-br from-neutral-200 to-neutral-600">Architecture</span>
</div>
</h1>
<div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-10 w-full backdrop-blur-sm">
<div className="max-w-lg text-sm md:text-base text-neutral-400 leading-relaxed mb-8 md:mb-0 shutter-wrapper delay-500">
<span className="shutter-text">
                        Trasformiamo il budget pubblicitario in fatturato.
                        Combinando <span className="text-white">creative direction</span>, <span className="text-white">data science</span> e <span className="text-white">media buying</span> algoritmico per Meta, Google e TikTok.
                    </span>
</div>
<a className="group flex items-center gap-6 hover-trigger" href="#work">
<div className="relative">
<div className="absolute inset-0 bg-blue-600 blur opacity-20 group-hover:opacity-50 transition-opacity duration-500"></div>
<div className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">

<svg className="w-5 h-5 text-white group-hover:rotate-45 transition-transform duration-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</div>
</div>
<span className="text-xs font-mono uppercase tracking-widest text-neutral-500 group-hover:text-blue-400 transition-colors">
                        Vedi i Risultati
                    </span>
</a>
</div>
</div>
</section>

<div className="py-16 bg-[#020202] overflow-hidden whitespace-nowrap border-b border-neutral-900/50 marquee-container relative z-10">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020202] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020202] to-transparent z-10"></div>
<div className="inline-flex items-center gap-20 marquee-content opacity-40 hover:opacity-100 transition-opacity duration-500">
<span className="text-6xl md:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 tracking-tighter heading-font uppercase stroke-text hover:text-blue-900 transition-all">Google Ads</span>
<span className="text-6xl md:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 tracking-tighter heading-font uppercase stroke-text hover:text-blue-500 transition-all">Meta Ads</span>
<span className="text-6xl md:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 tracking-tighter heading-font uppercase stroke-text hover:text-pink-500 transition-all">TikTok</span>
<span className="text-6xl md:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 tracking-tighter heading-font uppercase stroke-text hover:text-orange-500 transition-all">Analytics</span>
<span className="text-6xl md:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 tracking-tighter heading-font uppercase stroke-text hover:text-blue-300 transition-all">LinkedIn</span>
<span className="text-6xl md:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 tracking-tighter heading-font uppercase stroke-text hover:text-emerald-500 transition-all">Shopify</span>
<span className="text-6xl md:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 tracking-tighter heading-font uppercase stroke-text hover:text-white transition-all">CAPI</span>
</div>
</div>

<section className="py-32 px-6 md:px-12 bg-[#020202] border-b border-neutral-900/50" id="metrics">
<div className="max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-12">
<h2 className="text-2xl font-medium text-white heading-font">Live Performance Aggregata</h2>
<div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    LIVE DATA
                 </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl shadow-black">

<div className="bg-[#050505] p-8 group hover:bg-[#0a0a0a] transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full transition-transform duration-500 group-hover:scale-150 blur-xl"></div>
<div className="flex justify-between items-start mb-8 relative z-10">
<span className="text-[10px] font-mono uppercase text-emerald-500/70 tracking-widest border border-emerald-900/30 px-2 py-0.5 rounded bg-emerald-900/10">ROAS Medio</span>
<svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
</div>
<div className="text-4xl font-mono text-white mb-6 group-hover:text-emerald-200 transition-colors">4.85x</div>
<svg className="w-full h-12 text-emerald-900/40 group-hover:text-emerald-500 transition-colors duration-500 sparkline" fill="none" stroke="currentColor" strokeWidth="1.5">
<path d="M0 35 L10 32 L20 34 L30 25 L40 28 L50 20 L60 22 L70 15 L80 18 L90 5 L100 8"></path>
</svg>
</div>

<div className="bg-[#050505] p-8 group hover:bg-[#0a0a0a] transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full transition-transform duration-500 group-hover:scale-150 blur-xl"></div>
<div className="flex justify-between items-start mb-8 relative z-10">
<span className="text-[10px] font-mono uppercase text-blue-500/70 tracking-widest border border-blue-900/30 px-2 py-0.5 rounded bg-blue-900/10">Budget Gestito</span>
<span className="text-[10px] text-neutral-600 font-mono">YTD</span>
</div>
<div className="text-4xl font-mono text-white mb-6 group-hover:text-blue-200 transition-colors">€2.4M</div>
<svg className="w-full h-12 text-blue-900/40 group-hover:text-blue-500 transition-colors duration-500 sparkline" fill="none" stroke="currentColor" strokeWidth="1.5">
<path d="M0 40 L15 38 L25 35 L40 30 L55 25 L70 20 L85 10 L100 5"></path>
</svg>
</div>

<div className="bg-[#050505] p-8 group hover:bg-[#0a0a0a] transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-bl-full transition-transform duration-500 group-hover:scale-150 blur-xl"></div>
<div className="flex justify-between items-start mb-8 relative z-10">
<span className="text-[10px] font-mono uppercase text-purple-500/70 tracking-widest border border-purple-900/30 px-2 py-0.5 rounded bg-purple-900/10">CTR (Click Rate)</span>
<span className="text-[10px] text-neutral-600 font-mono">%</span>
</div>
<div className="text-4xl font-mono text-white mb-6 group-hover:text-purple-200 transition-colors">2.1%</div>
<div className="flex gap-1 h-12 items-end">
<div className="w-2 bg-neutral-800 h-[30%] group-hover:bg-purple-900 transition-all duration-300"></div>
<div className="w-2 bg-neutral-800 h-[50%] group-hover:bg-purple-800 transition-all duration-300 delay-75"></div>
<div className="w-2 bg-neutral-800 h-[40%] group-hover:bg-purple-700 transition-all duration-300 delay-100"></div>
<div className="w-2 bg-neutral-800 h-[70%] group-hover:bg-purple-600 transition-all duration-300 delay-150"></div>
<div className="w-2 bg-neutral-800 h-[60%] group-hover:bg-purple-500 transition-all duration-300 delay-200"></div>
<div className="w-2 bg-neutral-800 h-[85%] group-hover:bg-purple-400 transition-all duration-300 delay-300"></div>
<div className="w-2 bg-neutral-800 h-[100%] group-hover:bg-purple-300 transition-all duration-300 delay-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
</div>
</div>

<div className="bg-[#050505] p-8 group hover:bg-[#0a0a0a] transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full transition-transform duration-500 group-hover:scale-150 blur-xl"></div>
<div className="flex justify-between items-start mb-8 relative z-10">
<span className="text-[10px] font-mono uppercase text-orange-500/70 tracking-widest border border-orange-900/30 px-2 py-0.5 rounded bg-orange-900/10">Ricavi Generati</span>
</div>
<div className="text-4xl font-mono text-white mb-6 group-hover:text-orange-200 transition-colors">€11M+</div>
<svg className="w-full h-12 text-orange-900/40 group-hover:text-orange-500 transition-colors duration-500 sparkline" fill="none" stroke="currentColor" strokeWidth="1.5">
<path d="M0 45 L10 40 L20 42 L30 35 L40 25 L50 28 L60 20 L70 15 L80 18 L90 5 L100 2"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#020202] relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between mb-20 items-end">
<h2 className="text-4xl md:text-5xl font-medium heading-font tracking-tight text-white glow-text">
                    L'Ecosistema
                </h2>
<div className="flex items-center gap-4">
<div className="h-px w-12 bg-neutral-800"></div>
<p className="text-xs font-mono text-neutral-500 uppercase mt-4 md:mt-0">
                        [ 01 - 06 ]
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 border-l border-neutral-800/50">

<div className="grid-cell p-12 border-r border-b border-neutral-800/50 hover:bg-neutral-900/30 transition-colors group hover-trigger cursor-none relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="mb-24 flex justify-between relative z-10">
<div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-all duration-300">

<svg className="w-6 h-6 text-neutral-400 group-hover:text-blue-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<span className="text-xs font-mono text-neutral-600 group-hover:text-blue-400">01</span>
</div>
<h3 className="text-2xl font-medium text-white mb-4 heading-font group-hover:translate-x-2 transition-transform duration-300">Paid Social</h3>
<p className="text-sm text-neutral-500 leading-relaxed max-w-xs group-hover:text-neutral-400">
                        Strategie full-funnel su Meta, TikTok e Pinterest. Creatività che fermano lo scroll e convertono.
                    </p>
</div>

<div className="grid-cell p-12 border-r border-b border-neutral-800/50 hover:bg-neutral-900/30 transition-colors group hover-trigger cursor-none relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="mb-24 flex justify-between relative z-10">
<div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800 group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-all duration-300">

<svg className="w-6 h-6 text-neutral-400 group-hover:text-emerald-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line></svg>
</div>
<span className="text-xs font-mono text-neutral-600 group-hover:text-emerald-400">02</span>
</div>
<h3 className="text-2xl font-medium text-white mb-4 heading-font group-hover:translate-x-2 transition-transform duration-300">Google Ads</h3>
<p className="text-sm text-neutral-500 leading-relaxed max-w-xs group-hover:text-neutral-400">
                        Cattura la domanda intenzionale. Search, Shopping, YouTube e PMax ottimizzate per il ROAS.
                    </p>
</div>

<div className="grid-cell p-12 border-r border-b border-neutral-800/50 hover:bg-neutral-900/30 transition-colors group hover-trigger cursor-none relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="mb-24 flex justify-between relative z-10">
<div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800 group-hover:border-purple-500/50 group-hover:text-purple-400 transition-all duration-300">

<svg className="w-6 h-6 text-neutral-400 group-hover:text-purple-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<span className="text-xs font-mono text-neutral-600 group-hover:text-purple-400">03</span>
</div>
<h3 className="text-2xl font-medium text-white mb-4 heading-font group-hover:translate-x-2 transition-transform duration-300">Creative Studio</h3>
<p className="text-sm text-neutral-500 leading-relaxed max-w-xs group-hover:text-neutral-400">
                        Produzione UGC, banner dinamici e video motion. Il design è il nuovo targeting.
                    </p>
</div>

<div className="grid-cell p-12 border-r border-b border-neutral-800/50 hover:bg-neutral-900/30 transition-colors group hover-trigger cursor-none relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="mb-24 flex justify-between relative z-10">
<div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800 group-hover:border-orange-500/50 group-hover:text-orange-400 transition-all duration-300">

<svg className="w-6 h-6 text-neutral-400 group-hover:text-orange-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><line x1="12" x2="12" y1="20" y2="10"></line><line x1="18" x2="18" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="16"></line></svg>
</div>
<span className="text-xs font-mono text-neutral-600 group-hover:text-orange-400">04</span>
</div>
<h3 className="text-2xl font-medium text-white mb-4 heading-font group-hover:translate-x-2 transition-transform duration-300">Data &amp; Tracking</h3>
<p className="text-sm text-neutral-500 leading-relaxed max-w-xs group-hover:text-neutral-400">
                        Setup GTM, Server-Side Tracking (CAPI) e dashboard personalizzate. Misura ciò che conta.
                    </p>
</div>

<div className="grid-cell p-12 border-r border-b border-neutral-800/50 hover:bg-neutral-900/30 transition-colors group hover-trigger cursor-none relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="mb-24 flex justify-between relative z-10">
<div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all duration-300">

<svg className="w-6 h-6 text-neutral-400 group-hover:text-cyan-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path></svg>
</div>
<span className="text-xs font-mono text-neutral-600 group-hover:text-cyan-400">05</span>
</div>
<h3 className="text-2xl font-medium text-white mb-4 heading-font group-hover:translate-x-2 transition-transform duration-300">CRO Audit</h3>
<p className="text-sm text-neutral-500 leading-relaxed max-w-xs group-hover:text-neutral-400">
                        Ottimizzazione tasso di conversione delle Landing Page. Il traffico è inutile se non converte.
                    </p>
</div>

<div className="grid-cell p-12 border-r border-b border-neutral-800/50 hover:bg-neutral-900/30 transition-colors group hover-trigger cursor-none relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="mb-24 flex justify-between relative z-10">
<div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800 group-hover:border-rose-500/50 group-hover:text-rose-400 transition-all duration-300">

<svg className="w-6 h-6 text-neutral-400 group-hover:text-rose-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.1 4-1 4-1S10 9 9 12z"></path><path d="M12 9v4c.99-.24 3.03-.55 4-2 1.1-1.62 1-4 1-4s-3.03.55-4 2z"></path></svg>
</div>
<span className="text-xs font-mono text-neutral-600 group-hover:text-rose-400">06</span>
</div>
<h3 className="text-2xl font-medium text-white mb-4 heading-font group-hover:translate-x-2 transition-transform duration-300">Email Automation</h3>
<p className="text-sm text-neutral-500 leading-relaxed max-w-xs group-hover:text-neutral-400">
                        Sistemi di Retention marketing (Klaviyo) per aumentare il LTV e i riacquisti.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-[#020202] relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-900/10 blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="mb-16">
<h2 className="text-3xl font-medium heading-font tracking-tight text-white mb-2">
                    Infrastruttura di Crescita
                </h2>
<p className="text-sm text-neutral-500">Tecnologia al servizio del marketing.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 rounded-3xl glass-card p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
<div className="absolute top-0 right-0 p-40 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-all duration-500"></div>
<div className="flex flex-col h-full justify-between relative z-10">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/10 border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">

<svg className="w-7 h-7 text-blue-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
</div>
<div>
<h3 className="text-2xl text-white heading-font mb-3">Cross-Channel Attribution</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-md">Utilizziamo modelli di attribuzione proprietari (TripleWhale, Northbeam, Hyros) per capire il vero impatto di ogni euro speso, superando i limiti del tracking iOS.</p>
</div>
</div>
</div>

<div className="md:col-span-2 rounded-3xl glass-card p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500 flex flex-col justify-between">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.05),transparent)]"></div>
<div className="flex justify-between items-start">
<h3 className="text-xl text-white heading-font">Real-Time Bidding</h3>
<div className="p-2 rounded-lg bg-neutral-900/50 border border-white/5">
<svg className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 transition-colors" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
</div>
</div>
<p className="text-sm text-neutral-400 mt-4 group-hover:text-neutral-300 transition-colors">Regole automatizzate e script personalizzati per scalare il budget orizzontalmente quando il <span className="text-emerald-400">CPA</span> scende sotto la soglia target.</p>
</div>

<div className="md:col-span-1 rounded-3xl glass-card p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-full h-full flex flex-col justify-between relative z-10">
<svg className="w-8 h-8 text-neutral-500 group-hover:text-orange-400 transition-colors" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
<h3 className="text-lg text-white heading-font">Creative Testing</h3>
</div>
</div>

<div className="md:col-span-1 rounded-3xl glass-card p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-full h-full flex flex-col justify-between relative z-10">
<svg className="w-8 h-8 text-neutral-500 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="14" rx="2" ry="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
<h3 className="text-lg text-white heading-font">Reporting AI</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 bg-[#020202] flex items-center justify-center border-t border-b border-neutral-900/50">
<div className="max-w-5xl mx-auto text-center">
<p className="text-3xl md:text-5xl font-medium leading-[1.3] tracking-tight heading-font text-neutral-400" id="manifesto">
                Non ci limitiamo a lanciare campagne. Progettiamo ecosistemi di acquisizione che si auto-finanziano, eliminiamo le inefficienze di spesa e costruiamo una macchina di crescita prevedibile per il tuo brand. In un mondo di rumore, i dati sono l'unica verità.
            </p>
</div>
</section>

<section className="process-wrapper overflow-hidden bg-[#020202] h-screen relative border-b border-neutral-900/50" id="process">
<div className="process-container flex h-full w-[400vw]">

<div className="w-screen h-full grid grid-cols-1 lg:grid-cols-2 border-r border-neutral-800/50 relative bg-[#020202]">
<div className="flex flex-col justify-center px-12 md:px-24 relative z-10 pointer-events-none">
<div className="absolute top-12 left-12 text-xs font-mono text-blue-500 mb-2">FASE_01</div>
<h3 className="text-6xl md:text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 mb-8 heading-font">Audit &amp; Setup</h3>
<p className="text-xl md:text-2xl text-neutral-400 max-w-xl font-light leading-relaxed">
                        Analisi profonda dello storico dati. Correggiamo il tracking pixel, identifichiamo sprechi di budget e definiamo i KPI target.
                    </p>
</div>
<div className="hidden lg:flex items-center justify-center relative border-l border-neutral-800/50 overflow-hidden bg-neutral-900/10">
<div className="relative p-12 border border-neutral-800/50 rounded-2xl bg-black/40 shadow-2xl w-96">

<div className="space-y-4">
<div className="h-2 bg-neutral-800 rounded w-3/4"></div>
<div className="h-2 bg-neutral-800 rounded w-full"></div>
<div className="h-2 bg-neutral-800 rounded w-5/6"></div>
<div className="h-2 bg-neutral-800 rounded w-1/2"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent animate-scan border-b border-blue-500/30"></div>
</div>
</div>
</div>

<div className="w-screen h-full grid grid-cols-1 lg:grid-cols-2 border-r border-neutral-800/50 relative bg-[#020202]">
<div className="flex flex-col justify-center px-12 md:px-24 relative z-10 pointer-events-none">
<div className="absolute top-12 left-12 text-xs font-mono text-purple-500 mb-2">FASE_02</div>
<h3 className="text-6xl md:text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 mb-8 heading-font">Creative Strategy</h3>
<p className="text-xl md:text-2xl text-neutral-400 max-w-xl font-light leading-relaxed">
                        Produzione di angle creativi e hook. Non vendiamo il prodotto, vendiamo la trasformazione.
                    </p>
</div>
<div className="hidden lg:flex items-center justify-center relative border-l border-neutral-800/50 overflow-hidden bg-neutral-900/10">

<div className="relative w-80 h-80 border border-neutral-800 rounded-full flex items-center justify-center">
<div className="absolute inset-0 border border-neutral-800 rounded-full animate-[spin_20s_linear_infinite]"></div>
<div className="w-20 h-20 bg-purple-900/20 rounded-lg flex items-center justify-center border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
<svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
</div>
</div>
</div>

<div className="w-screen h-full grid grid-cols-1 lg:grid-cols-2 border-r border-neutral-800/50 relative bg-[#020202]">
<div className="flex flex-col justify-center px-12 md:px-24 relative z-10 pointer-events-none">
<div className="absolute top-12 left-12 text-xs font-mono text-emerald-500 mb-2">FASE_03</div>
<h3 className="text-6xl md:text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 mb-8 heading-font">Scaling</h3>
<p className="text-xl md:text-2xl text-neutral-400 max-w-xl font-light leading-relaxed">
                        Aumento aggressivo del budget sulle creatività vincenti (Winners) e test orizzontale su nuove audience.
                    </p>
</div>
<div className="hidden lg:flex items-center justify-center relative border-l border-neutral-800/50 overflow-hidden bg-neutral-900/10">
<div className="relative flex items-end gap-2 h-40">
<div className="w-8 bg-neutral-800 h-[20%]"></div>
<div className="w-8 bg-neutral-800 h-[40%]"></div>
<div className="w-8 bg-neutral-800 h-[30%]"></div>
<div className="w-8 bg-emerald-900 h-[60%] animate-pulse"></div>
<div className="w-8 bg-emerald-700 h-[80%] shadow-[0_0_20px_rgba(16,185,129,0.4)]"></div>
<div className="w-8 bg-emerald-500 h-[100%] shadow-[0_0_30px_rgba(16,185,129,0.6)]"></div>
</div>
</div>
</div>

<div className="w-screen h-full flex items-center justify-center relative bg-white text-black">
<div className="text-center relative z-10">
<h3 className="text-7xl md:text-[9rem] font-semibold tracking-tighter mb-10 heading-font leading-none">
                        Ready to<br/>Scale?
                    </h3>
<a className="px-10 py-5 bg-black text-white rounded-full text-sm font-mono uppercase tracking-widest hover:scale-105 transition-transform hover-trigger inline-block hover:shadow-2xl hover:shadow-black/20" href="#contact">
                        Prenota Audit Gratuito
                    </a>
</div>
<div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#020202] border-t border-neutral-900/50" id="work">
<div className="max-w-7xl mx-auto mb-24">
<h2 className="text-4xl md:text-5xl font-medium heading-font tracking-tight text-white">
                Casi Studio
            </h2>
</div>
<div className="max-w-5xl mx-auto relative space-y-40">

<div className="sticky top-24 work-card group hover-trigger cursor-none">
<div className="bg-[#0a0a0a] border border-neutral-800 rounded-2xl overflow-hidden aspect-video relative shadow-2xl shadow-black">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black via-black/80 to-transparent">
<div className="flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div>
<h3 className="text-3xl font-medium text-white mb-2 heading-font">Lusso &amp; Apparel</h3>
<p className="text-neutral-400 mb-3 text-sm">Scalato da 15k a 90k/mese in 4 mesi.</p>
<div className="flex gap-2 text-[10px] font-mono text-blue-300">
<span className="bg-blue-900/30 border border-blue-500/30 px-2 py-1 rounded">META ADS</span>
<span className="bg-blue-900/30 border border-blue-500/30 px-2 py-1 rounded">ROAS 6.2x</span>
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
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black via-black/80 to-transparent">
<div className="flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div>
<h3 className="text-3xl font-medium text-white mb-2 heading-font">Tech SaaS B2B</h3>
<p className="text-neutral-400 mb-3 text-sm">-40% Costo per Lead Qualificato.</p>
<div className="flex gap-2 text-[10px] font-mono text-purple-300">
<span className="bg-purple-900/30 border border-purple-500/30 px-2 py-1 rounded">LINKEDIN</span>
<span className="bg-purple-900/30 border border-purple-500/30 px-2 py-1 rounded">GOOGLE ADS</span>
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
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black via-black/80 to-transparent">
<div className="flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div>
<h3 className="text-3xl font-medium text-white mb-2 heading-font">Skincare Brand</h3>
<p className="text-neutral-400 mb-3 text-sm">Lancio su TikTok con UGC strategy.</p>
<div className="flex gap-2 text-[10px] font-mono text-pink-300">
<span className="bg-pink-900/30 border border-pink-500/30 px-2 py-1 rounded">TIKTOK ADS</span>
<span className="bg-pink-900/30 border border-pink-500/30 px-2 py-1 rounded">+300% REVENUE</span>
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

<section className="py-32 px-6 md:px-12 bg-[#020202] flex justify-center">
<div className="max-w-4xl w-full">
<div className="rounded-xl border border-neutral-800 bg-[#0a0a0a] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">

<div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-[#0f0f0f]">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
</div>
<span className="ml-4 text-xs font-mono text-neutral-500 flex-1 text-center">nexus-cli — campaign_manager</span>
</div>

<div className="p-8 font-mono text-xs md:text-sm text-neutral-300 leading-relaxed min-h-[340px]">
<div className="mb-4">
<span className="text-emerald-500">user@nexus</span> <span className="text-blue-400">~/ads</span> <span className="text-neutral-400">$ ./launch_campaign.sh --scale</span>
</div>
<div className="mb-2">
<span className="text-neutral-600">[10:00:01]</span> <span className="text-white">Analyzing audience segments...</span>
</div>
<div className="mb-2 pl-4 border-l border-neutral-800">
<span className="text-neutral-500">Targeting:</span> <span className="text-yellow-500">Lookalike 1% (Purchasers)</span><br/>
<span className="text-neutral-500">Exclusions:</span> <span className="text-red-400">Past 30 Days Visitors</span><br/>
<span className="text-neutral-500">Geo:</span> <span className="text-blue-300">Europe, USA</span>
</div>
<div className="mb-2 mt-4">
<span className="text-neutral-600">[10:00:04]</span> Connecting to Ads API (Meta/Google)... <span className="text-emerald-500">Connected</span>
</div>
<div className="mb-2">
<span className="text-neutral-600">[10:00:05]</span> Uploading creative assets (4k Video)... <span className="text-emerald-500">Done (0.8s)</span>
</div>
<div className="mb-2">
<span className="text-neutral-600">[10:00:06]</span> Setting budget rules: <span className="text-purple-400">"Increase by 20% if CPA &lt; €15"</span>
</div>
<div className="mb-6 mt-4">
<span className="text-neutral-600">[10:00:08]</span> <span className="text-blue-400 bg-blue-900/20 px-2 py-0.5 rounded">Campaign ACTIVE. Tracking pixels firing.</span>
</div>
<div className="flex items-center">
<span className="text-emerald-500 mr-2">➜</span> <span className="animate-blink inline-block w-2.5 h-5 bg-neutral-400"></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#020202] border-b border-neutral-900/50">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between mb-20 items-end">
<h2 className="text-4xl md:text-5xl font-medium heading-font tracking-tight text-white">
                    Partner
                </h2>
<p className="text-xs font-mono text-neutral-500 uppercase mt-4 md:mt-0">
                    [ Founder &amp; CMOs ]
                </p>
</div>
<div className="flex flex-col border-t border-neutral-800/50">

<div className="team-item py-16 border-b border-neutral-800/50 flex justify-between items-center group cursor-pointer hover-trigger transition-all duration-300 hover:pl-8" data-img="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop">
<h3 className="text-3xl md:text-5xl font-medium text-neutral-500 group-hover:text-white transition-colors heading-font">
                        Marco Rossi
                    </h3>
<span className="text-xs font-mono uppercase text-neutral-600 group-hover:text-neutral-400 text-right">
                        CEO, Velox Fashion<br/><span className="text-blue-500/70 group-hover:text-blue-400">"ROAS raddoppiato in 60gg."</span>
</span>
</div>

<div className="team-item py-16 border-b border-neutral-800/50 flex justify-between items-center group cursor-pointer hover-trigger transition-all duration-300 hover:pl-8" data-img="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop">
<h3 className="text-3xl md:text-5xl font-medium text-neutral-500 group-hover:text-white transition-colors heading-font">
                        Elena Bianchi
                    </h3>
<span className="text-xs font-mono uppercase text-neutral-600 group-hover:text-neutral-400 text-right">
                        CMO, TechSolutions<br/><span className="text-purple-500/70 group-hover:text-purple-400">"Qualità lead impeccabile."</span>
</span>
</div>

<div className="team-item py-16 border-b border-neutral-800/50 flex justify-between items-center group cursor-pointer hover-trigger transition-all duration-300 hover:pl-8" data-img="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop">
<h3 className="text-3xl md:text-5xl font-medium text-neutral-500 group-hover:text-white transition-colors heading-font">
                        Luca Verdi
                    </h3>
<span className="text-xs font-mono uppercase text-neutral-600 group-hover:text-neutral-400 text-right">
                        Founder, EcoHome<br/><span className="text-emerald-500/70 group-hover:text-emerald-400">"Partner strategico vero."</span>
</span>
</div>
</div>
</div>
</section>

<section className="zoom-wrapper h-[200vh] relative bg-[#020202]">
<div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

<div className="zoom-circle w-1 h-1 rounded-full overflow-hidden relative z-10 border border-white/20">
<img alt="Footer Visual" className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=3000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center">
<h3 className="text-white text-5xl md:text-8xl heading-font font-medium tracking-tight">Let's Grow</h3>
</div>
</div>
</div>
</section>

<footer className="py-20 px-6 border-t border-white/10 text-center bg-[#020202] relative z-20" id="contact">
<a className="block text-[15vw] font-bold leading-none text-[#111] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-white hover:to-neutral-500 transition-all duration-700 cursor-pointer hover-trigger heading-font tracking-tight" href="mailto:growth@nexus.ads">
            NEXUS
        </a>
<div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto mt-20 text-xs font-mono text-neutral-600 gap-6">
<div className="flex gap-4">
<span>© 2024 NEXUS ADS</span>
<span className="text-neutral-800">/</span>
<span className="text-green-500">SYSTEMS ONLINE</span>
</div>
<div className="flex gap-8 justify-center md:justify-end uppercase">
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Clutch</a>
</div>
</div>
</footer>

<div className="trail-img-wrapper">
<img alt="" className="trail-img grayscale contrast-125" src=""/>
</div>



    </>
  );
}
