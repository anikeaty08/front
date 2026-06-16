import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Loader
        let p = 0;
        const loaderInt = setInterval(() => {
            p += Math.random() * 8;
            if(p >= 100) {
                p = 100;
                clearInterval(loaderInt);
                gsap.to('#loader', {
                    opacity: 0, 
                    duration: 0.8, 
                    ease: "power2.inOut",
                    onComplete: () => document.getElementById('loader').remove()
                });
            }
            document.getElementById('loader-bar').style.width = p + '%';
            document.getElementById('loader-text').innerText = Math.floor(p).toString().padStart(2, '0') + '%';
        }, 30);

        // Spotlight effect
        document.querySelectorAll('.spotlight-card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Reveal Elements
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(el => {
            ScrollTrigger.create({
                trigger: el,
                start: "top 85%",
                onEnter: () => el.classList.add('is-visible')
            });
        });

        // Karaoke Text
        const textToAnimate = "Stop building fragile pipelines. Lumina's autonomic core maps your architecture, processing trillions of events with deterministic precision and zero latency.";
        const container = document.getElementById('karaoke-container');
        
        textToAnimate.split(' ').forEach(word => {
            const span = document.createElement('span');
            span.className = 'karaoke-word';
            span.innerText = word + ' ';
            container.appendChild(span);
        });

        const words = document.querySelectorAll('.karaoke-word');
        ScrollTrigger.create({
            trigger: container,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 0.5,
            onUpdate: self => {
                const progress = self.progress;
                const activeIndex = Math.floor(progress * words.length);
                words.forEach((word, index) => {
                    if (index <= activeIndex) {
                        word.classList.add('active');
                    } else {
                        word.classList.remove('active');
                    }
                });
            }
        });

        // Timeline Flow
        const fill = document.getElementById('timeline-fill');
        const nodes = document.querySelectorAll('.timeline-node');
        const steps = document.querySelectorAll('.timeline-step');

        if(fill) {
            gsap.to(fill, {
                height: '100%',
                ease: 'none',
                scrollTrigger: {
                    trigger: '#topology',
                    start: 'top 50%',
                    end: 'bottom 60%',
                    scrub: true,
                    onUpdate: self => {
                        const prog = self.progress;
                        steps.forEach((step, i) => {
                            const threshold = (i + 1) / steps.length - 0.2;
                            if(prog > threshold) {
                                step.style.opacity = '1';
                                nodes[i].style.borderColor = '#22d3ee';
                                nodes[i].style.backgroundColor = '#fff';
                                nodes[i].style.boxShadow = '0 0 15px rgba(34,211,238,0.5)';
                            } else {
                                step.style.opacity = '0.3';
                                nodes[i].style.borderColor = '#030303';
                                nodes[i].style.backgroundColor = '#27272a'; // zinc-800
                                nodes[i].style.boxShadow = 'none';
                            }
                        });
                    }
                }
            });
        }

        // Stats Counter
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            ScrollTrigger.create({
                trigger: counter,
                start: "top 80%",
                once: true,
                onEnter: () => {
                    const target = parseFloat(counter.getAttribute('data-target'));
                    gsap.to(counter, {
                        innerHTML: target,
                        duration: 2,
                        ease: "power2.out",
                        snap: { innerHTML: target % 1 === 0 ? 1 : 0.01 },
                        onUpdate: function() {
                            counter.innerHTML = parseFloat(counter.innerHTML).toFixed(target % 1 === 0 ? 0 : 2);
                        }
                    });
                }
            });
        });

        // Scan Line animation logic for CSS keyframe
        const styleSheet = document.createElement("style");
        styleSheet.innerText = `
            @keyframes scan {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
            }
        `;
        document.head.appendChild(styleSheet);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-noise"></div>

<div className="fixed inset-0 z-[100] bg-[#030303] flex flex-col items-center justify-center" id="loader">
<iconify-icon className="text-3xl text-zinc-500 mb-6 animate-pulse" icon="solar:infinity-linear"></iconify-icon>
<div className="w-48 h-[1px] bg-zinc-800 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-cyan-400 w-0" id="loader-bar"></div>
</div>
<div className="mt-4 text-xs font-mono text-zinc-500" id="loader-text">00%</div>
</div>

<nav className="fixed top-0 w-full z-50 bg-[#030303]/60 backdrop-blur-xl border-b border-white/[0.04]">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-3 cursor-pointer">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.3)]">
<iconify-icon className="text-sm text-white" icon="solar:infinity-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="font-medium text-sm tracking-tight text-white">Lumina</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#orchestration">Orchestration</a>
<a className="hover:text-white transition-colors" href="#network">Network</a>
<a className="hover:text-white transition-colors" href="#topology">Topology</a>
<a className="hover:text-white transition-colors" href="#pricing">Scale</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block" href="#">Sign in</a>
<button className="px-4 py-1.5 text-xs font-medium bg-white text-black rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Deploy Core
                </button>
</div>
</div>
</nav>

<main className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">

<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute inset-0 bg-grid pointer-events-none"></div>
<div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">

<div className="relative w-48 h-48 mx-auto mb-10 reveal">
<div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/40 to-cyan-400/40 blur-2xl animate-pulse"></div>
<div className="absolute inset-4 rounded-full border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md flex items-center justify-center shadow-[inset_0_0_30px_rgba(255,255,255,0.03)]">
<iconify-icon className="text-4xl text-zinc-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" icon="solar:cpu-linear"></iconify-icon>
</div>
<svg className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite]" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="48" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4 4" strokeWidth="0.5"></circle>
</svg>
<svg className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite_reverse]" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="url(#grad1)" stroke-dasharray="15 5 5 5" strokeWidth="1"></circle>
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#6366f1"></stop>
<stop offset="100%" stop-color="#22d3ee"></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm mb-6 reveal">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse"></span>
<span className="text-[10px] font-medium text-cyan-400 tracking-widest uppercase">Engine V2.4 Active</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1] reveal" style={{transitionDelay: '100ms'}}>
                Orchestrate Intelligence <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-400 animate-gradient">At Light Speed.</span>
</h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed reveal" style={{transitionDelay: '200ms'}}>
                Build, deploy, and scale autonomous data pipelines with our quantum-resistant routing engine. Parse complex logic into deterministic flows without legacy overhead.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal" style={{transitionDelay: '300ms'}}>
<button className="btn-glow relative px-6 py-2.5 bg-white text-black font-medium text-sm rounded-full flex items-center gap-2 hover:scale-[1.02] transition-transform">
                    Initialize Protocol
                    <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="px-6 py-2.5 bg-white/5 border border-white/10 text-white font-medium text-sm rounded-full backdrop-blur-md hover:bg-white/10 transition-colors flex items-center gap-2">
                    Read Documentation
                </button>
</div>
</div>
</main>

<section className="py-40 px-6 relative z-10 border-t border-white/[0.02] bg-[#030303]">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl font-medium leading-[1.3] text-zinc-100 tracking-tight" id="karaoke-container">

</h2>
</div>
</section>

<section className="py-32 px-6 max-w-6xl mx-auto relative z-10" id="orchestration">
<div className="text-center mb-16 reveal">
<p className="text-[10px] font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">Capabilities</p>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Neural Architecture</h2>
<p className="text-zinc-500 text-sm font-light max-w-md mx-auto">Deterministic state management across distributed edge clusters.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4">

<div className="md:col-span-8 spotlight-card surface-glass rounded-2xl p-8 reveal">
<div className="spotlight-content h-full flex flex-col">
<div className="w-10 h-10 rounded border border-white/10 bg-white/5 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-indigo-400" icon="solar:routing-2-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Adaptive Routing</h3>
<p className="text-sm text-zinc-400 font-light max-w-md mb-8">
                        Dynamic payload fan-out and compression tuned specifically per region. Bypasses congestion with predictive pathing.
                    </p>

<div className="mt-auto h-32 w-full rounded-lg border border-white/5 bg-black/50 relative overflow-hidden flex items-center justify-center">
<svg className="w-full h-full opacity-30" preserveaspectratio="none" viewbox="0 0 400 100">
<path className="flow-line" d="M0,50 Q100,10 200,50 T400,50" fill="none" stroke="#6366f1" strokeWidth="2"></path>
<path className="flow-line" d="M0,70 Q100,100 200,70 T400,70" fill="none" stroke="#22d3ee" strokeWidth="1" style={{animationDuration: '3s'}}></path>
</svg>
<div className="absolute left-1/4 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
<div className="absolute right-1/4 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
</div>
</div>
</div>

<div className="md:col-span-4 spotlight-card surface-glass rounded-2xl p-8 reveal">
<div className="spotlight-content">
<div className="w-10 h-10 rounded border border-white/10 bg-white/5 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-cyan-400" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Zero-Trust Audits</h3>
<p className="text-sm text-zinc-400 font-light mb-6">
                        Cryptographic chaining ensures immutability.
                    </p>
<div className="bg-[#050505] border border-white/5 rounded-lg p-4 font-mono text-xs text-zinc-500">
<div className="flex justify-between mb-2"><span>Status</span><span className="text-cyan-400">Verified</span></div>
<div className="flex justify-between mb-2"><span>Latency</span><span className="text-white">2.4ms</span></div>
<div className="flex justify-between"><span>Hash</span><span className="text-indigo-400">0x8F...2A1</span></div>
</div>
</div>
</div>

<div className="md:col-span-4 spotlight-card surface-glass rounded-2xl p-8 reveal">
<div className="spotlight-content">
<div className="w-10 h-10 rounded border border-white/10 bg-white/5 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-zinc-300" icon="solar:database-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">State Replay</h3>
<p className="text-sm text-zinc-400 font-light">
                        Event-sourced architecture allows for instant point-in-time recovery.
                    </p>
</div>
</div>

<div className="md:col-span-8 spotlight-card surface-glass rounded-2xl p-8 reveal flex flex-col md:flex-row gap-8 items-center">
<div className="spotlight-content flex-1">
<div className="w-10 h-10 rounded border border-white/10 bg-white/5 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-indigo-400" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Auto-Scaling Cores</h3>
<p className="text-sm text-zinc-400 font-light">
                        Resource allocation expands instantly as computational load increases, ensuring zero throttling.
                    </p>
</div>
<div className="w-full md:w-48 h-32 rounded-lg border border-white/5 bg-[#050505] relative overflow-hidden flex items-end p-2 gap-1">

<div className="w-full bg-indigo-500/20 rounded-t h-[20%] animate-[pulse_2s_ease-in-out_infinite]"></div>
<div className="w-full bg-indigo-500/40 rounded-t h-[40%] animate-[pulse_2s_ease-in-out_infinite]" style={{animationDelay: '0.2s'}}></div>
<div className="w-full bg-cyan-400/60 rounded-t h-[80%] animate-[pulse_2s_ease-in-out_infinite]" style={{animationDelay: '0.4s'}}></div>
<div className="w-full bg-indigo-500/30 rounded-t h-[50%] animate-[pulse_2s_ease-in-out_infinite]" style={{animationDelay: '0.6s'}}></div>
<div className="w-full bg-indigo-500/10 rounded-t h-[30%] animate-[pulse_2s_ease-in-out_infinite]" style={{animationDelay: '0.8s'}}></div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative border-t border-white/[0.02] bg-gradient-to-b from-[#030303] to-[#050505]" id="topology">
<div className="max-w-4xl mx-auto relative">
<div className="mb-24 text-center reveal">
<p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-400 mb-3">Process</p>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Data Synthesis</h2>
</div>

<div className="relative pl-8 md:pl-0">

<div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-px"></div>

<div className="absolute left-8 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-indigo-500 to-cyan-400 md:-translate-x-px h-0 origin-top shadow-[0_0_15px_rgba(34,211,238,0.5)]" id="timeline-fill">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_#fff]"></div>
</div>
<div className="space-y-32 py-10">

<div className="timeline-step relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 opacity-30 transition-all duration-500">
<div className="md:text-right md:pr-12 relative order-2 md:order-1">
<h3 className="text-xl font-medium text-white mb-1 tracking-tight">Ingestion &amp; Sharding</h3>
<p className="text-[10px] font-mono text-indigo-400 mb-3 uppercase tracking-widest">OP_01 // 12ms</p>
<p className="text-sm text-zinc-500 font-light max-w-xs ml-auto leading-relaxed">Raw input streams are decomposed into atomic shards and validated against schema definitions.</p>
</div>

<div className="absolute left-8 md:left-1/2 top-2 w-4 h-4 -ml-2 rounded-full border-2 border-[#030303] bg-zinc-800 z-10 timeline-node transition-colors duration-300 md:top-2"></div>
<div className="pl-12 md:pl-0 order-1 md:order-2 flex items-start">
<div className="h-24 w-full md:w-64 surface-glass rounded-xl p-4 flex items-center justify-between border border-white/5">
<div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center"><iconify-icon className="text-zinc-500" icon="solar:archive-linear"></iconify-icon></div>
<iconify-icon className="text-zinc-700" icon="solar:arrow-right-linear"></iconify-icon>
<div className="w-8 h-8 rounded border border-indigo-500/30 bg-indigo-500/10 flex items-center justify-center shadow-[0_0_10px_rgba(99,102,241,0.2)]"><iconify-icon className="text-indigo-400" icon="solar:layers-linear"></iconify-icon></div>
</div>
</div>
</div>

<div className="timeline-step relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 opacity-30 transition-all duration-500">
<div className="pl-12 md:pl-0 md:pr-12 order-2 md:order-1 flex items-start md:justify-end">
<div className="h-24 w-full md:w-64 surface-glass rounded-xl p-4 flex items-center justify-center border border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent w-full h-full -translate-x-full animate-[scan_2s_ease-in-out_infinite]"></div>
<iconify-icon className="text-2xl text-cyan-400" icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
</div>
<div className="absolute left-8 md:left-1/2 top-2 w-4 h-4 -ml-2 rounded-full border-2 border-[#030303] bg-zinc-800 z-10 timeline-node transition-colors duration-300 md:top-2"></div>
<div className="md:pl-12 order-1 md:order-2">
<h3 className="text-xl font-medium text-white mb-1 tracking-tight">Quantum Entanglement</h3>
<p className="text-[10px] font-mono text-cyan-400 mb-3 uppercase tracking-widest">HASH_VX // 04ms</p>
<p className="text-sm text-zinc-500 font-light max-w-xs leading-relaxed">Signatures applied. Data states are entangled with previous block hashes for linear consistency.</p>
</div>
</div>

<div className="timeline-step relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 opacity-30 transition-all duration-500">
<div className="md:text-right md:pr-12 relative order-2 md:order-1">
<h3 className="text-xl font-medium text-white mb-1 tracking-tight">Global Propagation</h3>
<p className="text-[10px] font-mono text-indigo-400 mb-3 uppercase tracking-widest">NET_CAST // 28ms</p>
<p className="text-sm text-zinc-500 font-light max-w-xs ml-auto leading-relaxed">Optimized routing tables blast confirmed states to 40+ edge regions simultaneously.</p>
</div>
<div className="absolute left-8 md:left-1/2 top-2 w-4 h-4 -ml-2 rounded-full border-2 border-[#030303] bg-zinc-800 z-10 timeline-node transition-colors duration-300 md:top-2"></div>
<div className="pl-12 md:pl-0 order-1 md:order-2 flex items-start">
<div className="h-24 w-full md:w-64 surface-glass rounded-xl p-4 flex items-center justify-center border border-white/5 relative">
<div className="w-12 h-12 rounded-full border border-dashed border-indigo-500/50 animate-[spin_4s_linear_infinite] flex items-center justify-center">
<div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/[0.04] bg-white/[0.01] relative z-10">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="reveal">
<div className="text-4xl font-medium text-white mb-1 tracking-tight counter" data-target="99.99">0</div>
<div className="text-[10px] font-medium uppercase tracking-widest text-zinc-500">Uptime %</div>
</div>
<div className="reveal" style={{transitionDelay: '100ms'}}>
<div className="text-4xl font-medium text-white mb-1 tracking-tight"><span className="counter" data-target="45">0</span>+</div>
<div className="text-[10px] font-medium uppercase tracking-widest text-zinc-500">Edge Regions</div>
</div>
<div className="reveal" style={{transitionDelay: '200ms'}}>
<div className="text-4xl font-medium text-white mb-1 tracking-tight"><span className="counter" data-target="12">0</span>ms</div>
<div className="text-[10px] font-medium uppercase tracking-widest text-zinc-500">Avg Latency</div>
</div>
<div className="reveal" style={{transitionDelay: '300ms'}}>
<div className="text-4xl font-medium text-white mb-1 tracking-tight"><span className="counter" data-target="3">0</span>B+</div>
<div className="text-[10px] font-medium uppercase tracking-widest text-zinc-500">Events/Day</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-6xl mx-auto relative z-10" id="pricing">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Elastic Scaling</h2>
<p className="text-zinc-500 text-sm font-light max-w-md mx-auto">Transparent compute pricing for pipelines of any size.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

<div className="surface-glass rounded-2xl p-8 border border-white/5 flex flex-col reveal">
<h3 className="text-base font-medium text-zinc-300 mb-2">Developer</h3>
<div className="text-4xl font-medium text-white mb-6 tracking-tight">$0<span className="text-sm font-light text-zinc-600">/mo</span></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-zinc-400 font-light"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> Up to 1M events</li>
<li className="flex items-center gap-3 text-sm text-zinc-400 font-light"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> 3 Global Regions</li>
<li className="flex items-center gap-3 text-sm text-zinc-400 font-light"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> Community Support</li>
</ul>
<button className="w-full py-2.5 rounded border border-white/10 text-xs font-medium text-white hover:bg-white/5 transition-colors">Start Building</button>
</div>

<div className="surface-glass rounded-2xl p-8 border border-indigo-500/40 relative flex flex-col shadow-[inset_0_0_40px_rgba(99,102,241,0.05)] reveal md:-translate-y-4 z-10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Production</div>
<h3 className="text-base font-medium text-indigo-300 mb-2">Scale</h3>
<div className="text-4xl font-medium text-white mb-6 tracking-tight">$99<span className="text-sm font-light text-zinc-600">/mo</span></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white font-light"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Unlimited events</li>
<li className="flex items-center gap-3 text-sm text-white font-light"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> All 45 Regions</li>
<li className="flex items-center gap-3 text-sm text-white font-light"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Priority SLA</li>
</ul>
<button className="w-full py-2.5 rounded bg-white text-black text-xs font-medium hover:scale-[1.02] transition-transform shadow-[0_0_15px_rgba(255,255,255,0.2)]">Deploy Now</button>
</div>

<div className="surface-glass rounded-2xl p-8 border border-white/5 flex flex-col reveal">
<h3 className="text-base font-medium text-zinc-300 mb-2">Enterprise</h3>
<div className="text-4xl font-medium text-white mb-6 tracking-tight">Custom</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-zinc-400 font-light"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> Dedicated Cores</li>
<li className="flex items-center gap-3 text-sm text-zinc-400 font-light"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> VPC Peering</li>
<li className="flex items-center gap-3 text-sm text-zinc-400 font-light"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> 24/7 Phone Support</li>
</ul>
<button className="w-full py-2.5 rounded border border-white/10 text-xs font-medium text-white hover:bg-white/5 transition-colors">Contact Sales</button>
</div>
</div>
</section>

<section className="py-40 relative border-t border-white/[0.04] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#030303] to-[#0a0a14]"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/20 rounded-t-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto reveal">
<iconify-icon className="text-4xl text-cyan-400 mb-6 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" icon="solar:infinity-linear"></iconify-icon>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6 leading-tight">
                Synthesize your <br/> data reality.
            </h2>
<p className="text-zinc-400 text-base mb-10 font-light max-w-lg">
                Join thousands of engineers building the next generation of autonomous infrastructure.
            </p>
<button className="btn-glow px-8 py-3 bg-white text-black font-medium text-sm rounded-full hover:scale-[1.02] transition-transform">
                Start Free Trial
            </button>
</div>
</section>

<footer className="border-t border-white/[0.04] bg-[#000] py-12 px-6 relative z-10">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 items-center md:items-start">
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-white" icon="solar:infinity-linear"></iconify-icon>
<span className="font-medium text-sm text-white tracking-tight">Lumina</span>
</div>
<div className="flex gap-8 text-xs font-medium text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Documentation</a>
<a className="hover:text-white transition-colors" href="#">Status</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
</div>
</div>
</footer>



    </>
  );
}
