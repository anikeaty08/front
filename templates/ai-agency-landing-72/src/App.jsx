import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // --- Dotted Glow Background Logic (Canvas) ---
        const initDottedGlow = () => {
            const canvas = document.getElementById('dotted-glow-canvas');
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            let width, height;
            let animationFrameId;

            // Configuration matches "DottedGlowBackground" props
            const config = {
                dotColor: '#404040', // neutral-500/600 range
                glowColor: '#075985', // sky-800
                dotRadius: 1.6,
                gap: 24, // spacing
                glowRadius: 180, // distance of glow effect
                particleCount: 5 // number of moving glow agents
            };

            let particles = [];

            function resize() {
                width = canvas.parentElement.clientWidth;
                height = canvas.parentElement.clientHeight;
                
                // Increase resolution for retina displays
                const dpr = window.devicePixelRatio || 1;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                ctx.scale(dpr, dpr);
                canvas.style.width = `${width}px`;
                canvas.style.height = `${height}px`;
                
                initParticles();
            }

            function initParticles() {
                particles = [];
                for (let i = 0; i < config.particleCount; i++) {
                    particles.push({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        vx: (Math.random() - 0.5) * 1.5, // Speed Min/Max simulation
                        vy: (Math.random() - 0.5) * 1.5
                    });
                }
            }

            function draw() {
                ctx.clearRect(0, 0, width, height);

                // Update particles
                particles.forEach(p => {
                    p.x += p.vx;
                    p.y += p.vy;

                    // Bounce off walls
                    if (p.x < 0 || p.x > width) p.vx *= -1;
                    if (p.y < 0 || p.y > height) p.vy *= -1;
                });

                // Draw Grid
                for (let x = 0; x < width; x += config.gap) {
                    for (let y = 0; y < height; y += config.gap) {
                        
                        // Calculate distance to nearest particle
                        let maxIntensity = 0;
                        
                        particles.forEach(p => {
                            const dx = x - p.x;
                            const dy = y - p.y;
                            const dist = Math.sqrt(dx * dx + dy * dy);
                            
                            if (dist < config.glowRadius) {
                                // Calculate intensity based on distance (inverse square-ish)
                                const intensity = 1 - (dist / config.glowRadius);
                                if (intensity > maxIntensity) maxIntensity = intensity;
                            }
                        });

                        // Draw Dot
                        ctx.beginPath();
                        ctx.arc(x, y, config.dotRadius, 0, Math.PI * 2);
                        
                        if (maxIntensity > 0) {
                            // GLOW MODE: blend between neutral and glow color
                            // Simple approach: Set fill to glow color with opacity based on intensity
                            ctx.fillStyle = config.glowColor;
                            ctx.globalAlpha = 0.2 + (maxIntensity * 0.8); // Base opacity + glow
                        } else {
                            // STATIC MODE
                            ctx.fillStyle = config.dotColor;
                            ctx.globalAlpha = 0.2; // dim static dots
                        }
                        
                        ctx.fill();
                        ctx.globalAlpha = 1; // reset
                    }
                }

                animationFrameId = requestAnimationFrame(draw);
            }

            window.addEventListener('resize', resize);
            resize();
            draw();
        };

        initDottedGlow();


        // Spotlight Effect for Cards (Existing Logic)
        const cards = document.querySelectorAll('.spotlight-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // Scroll Reveal Animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-visible');
                    entry.target.classList.remove('scroll-hidden');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-hidden').forEach((el) => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 reveal-text delay-300">
<div className="w-full max-w-xl bg-black/50 backdrop-blur-md border border-white/10 rounded-full h-12 flex items-center justify-between px-6 shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-white/20 hover:bg-black/70">
<a className="text-xs font-semibold tracking-[0.2em] text-white uppercase hover:text-blue-400 transition-colors" href="#">
                Aether
            </a>
<div className="hidden md:flex items-center gap-6">
<a className="text-[10px] font-medium text-zinc-400 hover:text-white transition-colors tracking-widest uppercase" href="#services">Protocol</a>
<a className="text-[10px] font-medium text-zinc-400 hover:text-white transition-colors tracking-widest uppercase" href="#work">Work</a>
</div>
<a className="flex items-center gap-2 group" href="#contact">
<span className="text-[10px] font-semibold text-white uppercase tracking-widest group-hover:text-blue-400 transition-colors">Initialize</span>
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all"></div>
</a>
</div>
</nav>
<main className="relative z-10 w-full overflow-hidden">

<section className="relative h-screen min-h-[800px] flex flex-col items-center justify-center overflow-hidden bg-black">

<div className="absolute inset-0 z-0">
<canvas className="block w-full h-full canvas-mask" id="dotted-glow-canvas"></canvas>
</div>
<div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto mt-[-5vh]">

<div className="reveal-text mb-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.5)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-medium">System v2.0 Live</span>
</div>
</div>

<h1 className="reveal-text delay-100 text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 leading-[0.9]">
                    Digital <br/>
                    Intelligence
                </h1>

<p className="reveal-text delay-200 mt-8 text-sm md:text-base text-zinc-400 max-w-md mx-auto leading-relaxed tracking-wide font-light">
                    We architect self-evolving interfaces and agentic workflows. <br className="hidden md:block"/> The next generation of business infrastructure is code.
                </p>

<div className="reveal-text delay-300 flex flex-col md:flex-row items-center gap-6 mt-10">
<button className="group relative h-12 px-8 bg-white text-black text-xs font-semibold uppercase tracking-widest rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]">
<span className="relative z-10">Start Project</span>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-100 to-zinc-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
</button>
<button className="group flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-white transition-colors uppercase tracking-widest">
<span>Explore Grid</span>
<i className="w-3 h-3 group-hover:translate-y-1 transition-transform" data-lucide="arrow-down"></i>
</button>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none"></div>
</section>

<section className="py-8 border-y border-white/[0.05] bg-black relative z-10">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
<div className="flex overflow-hidden group">
<div className="flex gap-24 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused] opacity-40">

<span className="text-xl font-semibold tracking-tighter text-white">VORTEX</span>
<span className="text-xl font-bold italic tracking-tighter text-white font-serif">Aura</span>
<span className="text-xl font-mono font-medium tracking-tight text-white">0xLabs</span>
<span className="text-xl font-bold tracking-tight text-white uppercase">Linear</span>
<span className="text-xl font-light tracking-[0.2em] text-white uppercase">Echo</span>
<span className="text-xl font-medium tracking-tighter text-white">NEXUS</span>

<span className="text-xl font-semibold tracking-tighter text-white">VORTEX</span>
<span className="text-xl font-bold italic tracking-tighter text-white font-serif">Aura</span>
<span className="text-xl font-mono font-medium tracking-tight text-white">0xLabs</span>
<span className="text-xl font-bold tracking-tight text-white uppercase">Linear</span>
<span className="text-xl font-light tracking-[0.2em] text-white uppercase">Echo</span>
<span className="text-xl font-medium tracking-tighter text-white">NEXUS</span>
</div>
</div>
</section>

<section className="py-32 px-4 max-w-7xl mx-auto" id="services">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 scroll-hidden">
<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-4">Core Protocols</h2>
<p className="text-zinc-500 text-sm max-w-sm leading-relaxed">Replacing legacy friction with autonomous digital infrastructure.</p>
</div>
<div className="mt-4 md:mt-0">
<button className="text-xs font-mono text-blue-500 hover:text-blue-400 flex items-center gap-2">
                        [VIEW_DOCUMENTATION] <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[340px]">

<div className="spotlight-card group md:col-span-2 rounded-3xl bg-zinc-900/20 border border-white/5 p-8 flex flex-col justify-between scroll-hidden hover:bg-zinc-900/40 transition-colors">
<div className="spotlight-border"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 text-white">
<i className="w-5 h-5" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">Neural Automation</h3>
<p className="text-sm text-zinc-400 max-w-md leading-relaxed">
                            Deploy custom LLMs that operate as functional employees. Capable of handling complex reasoning, data extraction, and decision making without human oversight.
                        </p>
</div>

<div className="relative w-full h-32 rounded-xl bg-black/50 border border-white/5 overflow-hidden mt-6">
<div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(59,130,246,0.1)_50%,transparent_100%)] animate-[shimmer_2s_infinite]"></div>
<div className="absolute top-4 left-4 flex gap-2">
<div className="w-16 h-2 bg-zinc-800 rounded-full"></div>
<div className="w-8 h-2 bg-blue-900/50 rounded-full"></div>
</div>
<div className="absolute top-8 left-4 w-24 h-2 bg-zinc-800 rounded-full"></div>
</div>
</div>

<div className="spotlight-card group rounded-3xl bg-zinc-900/20 border border-white/5 p-8 flex flex-col items-center justify-center text-center scroll-hidden hover:bg-zinc-900/40 transition-colors">
<div className="spotlight-border"></div>
<div className="relative z-10">
<div className="relative w-32 h-32 mx-auto mb-6 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-zinc-800" cx="64" cy="64" fill="transparent" r="60" stroke="currentColor" strokeWidth="2"></circle>
<circle className="text-white" cx="64" cy="64" fill="transparent" r="60" stroke="currentColor" stroke-dasharray="377" stroke-dashoffset="10" strokeWidth="2"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-3xl font-bold text-white tracking-tighter">100</span>
<span className="text-[10px] uppercase text-zinc-500 tracking-widest">Lighthouse</span>
</div>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">Zero Latency</h3>
</div>
</div>

<div className="spotlight-card group rounded-3xl bg-zinc-900/20 border border-white/5 p-8 flex flex-col justify-end overflow-hidden scroll-hidden hover:bg-zinc-900/40 transition-colors">
<div className="spotlight-border"></div>
<div className="absolute inset-0 z-0">

<div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-purple-900/20 blur-[60px] rounded-full group-hover:bg-purple-800/30 transition-colors duration-500"></div>
</div>
<div className="relative z-10">
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Liquid Interfaces</h3>
<p className="text-sm text-zinc-500">Motion-driven UI that feels like physics, not code.</p>
</div>
</div>

<div className="spotlight-card group md:col-span-2 rounded-3xl bg-zinc-900/20 border border-white/5 p-8 flex flex-col justify-between scroll-hidden hover:bg-zinc-900/40 transition-colors">
<div className="spotlight-border"></div>
<div className="flex justify-between items-start relative z-10">
<div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Global Edge Network</h3>
<p className="text-sm text-zinc-400 max-w-xs">Instant deployment to 350+ edge nodes worldwide.</p>
</div>
<i className="w-6 h-6 text-zinc-600 group-hover:text-white transition-colors" data-lucide="globe"></i>
</div>
<div className="relative h-32 mt-6 w-full opacity-50">
<div className="absolute inset-0 grid grid-cols-12 gap-1">
<div className="col-span-1 bg-zinc-800 h-full rounded-sm opacity-20"></div>
<div className="col-span-1 bg-zinc-800 h-[80%] mt-auto rounded-sm opacity-40"></div>
<div className="col-span-1 bg-zinc-800 h-[40%] mt-auto rounded-sm opacity-30"></div>
<div className="col-span-1 bg-white h-[90%] mt-auto rounded-sm shadow-[0_0_15px_white]"></div>
<div className="col-span-1 bg-zinc-800 h-[60%] mt-auto rounded-sm opacity-50"></div>

</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] relative overflow-hidden" id="work">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=\\'0 0 200 200\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noiseFilter\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23noiseFilter)\\'/%3E%3C/svg%3E\')'}}></div>
<div className="max-w-6xl mx-auto px-4 relative z-10">
<div className="mb-20 scroll-hidden">
<h2 className="text-4xl font-medium tracking-tighter text-white">Selected Works</h2>
</div>
<div className="space-y-0">

<div className="group relative border-t border-white/10 py-12 transition-all hover:bg-white/[0.02] scroll-hidden">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-4">
<div className="flex-1">
<h3 className="text-3xl md:text-5xl font-light tracking-tighter text-zinc-500 group-hover:text-white transition-colors duration-500">
                                    Nebula <span className="hidden md:inline-block opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-blue-500">///</span>
</h3>
</div>
<div className="flex flex-col md:items-end">
<p className="text-sm text-zinc-400 mb-2">FinTech Infrastructure</p>
<div className="flex gap-2">
<span className="text-[10px] uppercase tracking-wider border border-white/10 px-2 py-1 rounded text-zinc-500">Rust</span>
<span className="text-[10px] uppercase tracking-wider border border-white/10 px-2 py-1 rounded text-zinc-500">WASM</span>
</div>
</div>
</div>

<div className="hidden lg:block fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-zinc-900 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 rounded-lg overflow-hidden border border-white/10 shadow-2xl rotate-3 group-hover:rotate-6 scale-90 group-hover:scale-100">
<img alt="Nebula" className="w-full h-full object-cover opacity-80 mix-blend-screen" src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>

<div className="group relative border-t border-white/10 py-12 transition-all hover:bg-white/[0.02] scroll-hidden">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-4">
<div className="flex-1">
<h3 className="text-3xl md:text-5xl font-light tracking-tighter text-zinc-500 group-hover:text-white transition-colors duration-500">
                                    Chroma <span className="hidden md:inline-block opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-purple-500">///</span>
</h3>
</div>
<div className="flex flex-col md:items-end">
<p className="text-sm text-zinc-400 mb-2">Generative AI Suite</p>
<div className="flex gap-2">
<span className="text-[10px] uppercase tracking-wider border border-white/10 px-2 py-1 rounded text-zinc-500">Python</span>
<span className="text-[10px] uppercase tracking-wider border border-white/10 px-2 py-1 rounded text-zinc-500">WebGL</span>
</div>
</div>
</div>

<div className="hidden lg:block fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-zinc-900 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 rounded-lg overflow-hidden border border-white/10 shadow-2xl -rotate-3 group-hover:-rotate-6 scale-90 group-hover:scale-100">
<img alt="Chroma" className="w-full h-full object-cover opacity-80 mix-blend-screen" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>

<div className="group relative border-t border-b border-white/10 py-12 transition-all hover:bg-white/[0.02] scroll-hidden">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-4">
<div className="flex-1">
<h3 className="text-3xl md:text-5xl font-light tracking-tighter text-zinc-500 group-hover:text-white transition-colors duration-500">
                                    Vertex <span className="hidden md:inline-block opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-emerald-500">///</span>
</h3>
</div>
<div className="flex flex-col md:items-end">
<p className="text-sm text-zinc-400 mb-2">Decentralized Exchange</p>
<div className="flex gap-2">
<span className="text-[10px] uppercase tracking-wider border border-white/10 px-2 py-1 rounded text-zinc-500">Solidity</span>
<span className="text-[10px] uppercase tracking-wider border border-white/10 px-2 py-1 rounded text-zinc-500">React</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 relative">
<div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/10 to-black pointer-events-none"></div>
<div className="max-w-5xl mx-auto relative z-10">
<div className="text-center mb-20 scroll-hidden">
<h2 className="text-4xl font-medium tracking-tighter text-white mb-6">Investment</h2>
<div className="inline-flex bg-zinc-900/50 rounded-full p-1 border border-white/10">
<button className="px-6 py-2 rounded-full bg-white text-black text-xs font-semibold shadow-sm">Monthly</button>
<button className="px-6 py-2 rounded-full text-zinc-400 text-xs font-medium hover:text-white transition-colors">Quarterly</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border border-white/5 bg-zinc-900/10 backdrop-blur-sm hover:border-white/10 transition-all duration-300 scroll-hidden">
<h3 className="text-lg text-zinc-400 font-light mb-4">Audit</h3>
<div className="text-4xl font-semibold text-white tracking-tighter mb-8">$5,000</div>
<ul className="space-y-4 mb-8">
<li className="text-sm text-zinc-500 flex items-center gap-3"><div className="w-1 h-1 bg-zinc-500 rounded-full"></div>UX/UI Heuristic Analysis</li>
<li className="text-sm text-zinc-500 flex items-center gap-3"><div className="w-1 h-1 bg-zinc-500 rounded-full"></div>Performance Report</li>
<li className="text-sm text-zinc-500 flex items-center gap-3"><div className="w-1 h-1 bg-zinc-500 rounded-full"></div>Architecture Roadmap</li>
</ul>
<button className="w-full py-3 text-xs font-semibold text-white border border-white/10 rounded-lg hover:bg-white hover:text-black transition-all uppercase tracking-widest">Select</button>
</div>

<div className="p-8 rounded-2xl border border-blue-500/20 bg-blue-900/5 backdrop-blur-sm relative overflow-hidden group scroll-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<h3 className="text-lg text-blue-400 font-light mb-4">Transformation</h3>
<div className="text-4xl font-semibold text-white tracking-tighter mb-8">$12,000<span className="text-lg text-zinc-600 font-normal">/mo</span></div>
<ul className="space-y-4 mb-8 relative z-10">
<li className="text-sm text-zinc-300 flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>Dedicated Design Team</li>
<li className="text-sm text-zinc-300 flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>Full-Stack Development</li>
<li className="text-sm text-zinc-300 flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>24/7 Slack Access</li>
</ul>
<button className="relative z-10 w-full py-3 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] uppercase tracking-widest">Inquire</button>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-zinc-900/10 backdrop-blur-sm hover:border-white/10 transition-all duration-300 scroll-hidden">
<h3 className="text-lg text-zinc-400 font-light mb-4">Enterprise</h3>
<div className="text-4xl font-semibold text-white tracking-tighter mb-8">Custom</div>
<ul className="space-y-4 mb-8">
<li className="text-sm text-zinc-500 flex items-center gap-3"><div className="w-1 h-1 bg-zinc-500 rounded-full"></div>On-premise AI Models</li>
<li className="text-sm text-zinc-500 flex items-center gap-3"><div className="w-1 h-1 bg-zinc-500 rounded-full"></div>SLA Guarantee</li>
<li className="text-sm text-zinc-500 flex items-center gap-3"><div className="w-1 h-1 bg-zinc-500 rounded-full"></div>Dedicated Infrastructure</li>
</ul>
<button className="w-full py-3 text-xs font-semibold text-white border border-white/10 rounded-lg hover:bg-white hover:text-black transition-all uppercase tracking-widest">Contact</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/[0.08] bg-black pt-24 pb-12 px-4 relative overflow-hidden" id="contact">

<div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>
<div className="max-w-7xl mx-auto flex flex-col items-center text-center">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-8 hover:text-zinc-300 transition-colors cursor-default">
                    aether
                </h2>
<div className="flex gap-8 mb-12">
<a className="text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest" href="#">Twitter</a>
<a className="text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest" href="#">LinkedIn</a>
<a className="text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest" href="#">GitHub</a>
</div>
<div className="text-[10px] text-zinc-700 font-mono uppercase tracking-widest">
                    System Status: Operational • 2024
                </div>
</div>
</footer>
</main>


    </>
  );
}
