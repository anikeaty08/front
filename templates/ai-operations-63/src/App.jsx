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
      
tailwind.config = {
theme: {
extend: {
colors: {
primary: '#E8E8E0',
secondary: '#6B7280',
accent: '#00FF88',
background: '#040608',
surface: '#0B0E14',
surfaceElevated: '#12161E',
},
fontFamily: {
display: ['Syne', 'system-ui', 'sans-serif'],
heading: ['Syne', 'system-ui', 'sans-serif'],
body: ['Inter', 'system-ui', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
spacing: {
section: 'clamp(4rem, 8vw, 8rem)',
container: 'clamp(1rem, 5vw, 4rem)',
card: 'clamp(1.5rem, 2.5vw, 2.5rem)',
gap_section: 'clamp(2.5rem, 5vw, 5rem)',
},
maxWidth: {
container: 'clamp(65rem, 90vw, 88rem)',
},
transitionTimingFunction: {
'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // 1. Navbar Scrolled State
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-[#040608]/90', 'backdrop-blur-md', 'border-white/5');
            } else {
                navbar.classList.remove('bg-[#040608]/90', 'backdrop-blur-md', 'border-white/5');
            }
        });

        // 2. Scroll Reveal Observer
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, observerOptions);
        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

        // 3. WebGL Particle Network (Node Orchestration visual)
        const canvas = document.getElementById('webgl-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function resize() {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = Math.random() * 1.5 + 0.5;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if(this.x < 0 || this.x > width) this.vx *= -1;
                if(this.y < 0 || this.y > height) this.vy *= -1;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0, 255, 136, 0.6)';
                ctx.fill();
            }
        }

        // Initialize particles based on screen width
        const particleCount = Math.min(Math.floor(window.innerWidth / 15), 100);
        for(let i = 0; i < particleCount; i++) particles.push(new Particle());

        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            
            // Draw lines between close particles
            for(let i = 0; i < particles.length; i++) {
                for(let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx*dx + dy*dy);
                    
                    if(dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(0, 255, 136, ${0.2 - (dist/120)*0.2})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
                particles[i].update();
                particles[i].draw();
            }
            requestAnimationFrame(animateCanvas);
        }
        animateCanvas();

        // 4. Telemetry Demo Logic
        const terminal = document.getElementById('demo-terminal');
        const status = document.getElementById('demo-status');
        
        const demoRoutines = {
            standard: [
                { delay: 100, text: "> Analyzing request: 'standard_query'" },
                { delay: 600, text: "> Executing rule: [default_route]" },
                { delay: 1200, text: "> <span class='text-accent'>Selected: gpt-3.5-turbo (cost-optimized)</span>" },
                { delay: 1800, text: "> Inference complete. Latency: 214ms" },
                { delay: 2000, text: "> Delivered successfully. HTTP 200" }
            ],
            json: [
                { delay: 100, text: "> Analyzing request: 'strict_json_extract'" },
                { delay: 500, text: "> Rule matched: [requires_structured_output == true]" },
                { delay: 1100, text: "> <span class='text-accent'>Selected: gpt-4-turbo (capability-optimized)</span>" },
                { delay: 2400, text: "> Validating schema constraint..." },
                { delay: 2800, text: "> <span class='text-accent'>Schema valid.</span> Latency: 1204ms" }
            ],
            massive: [
                { delay: 100, text: "> Analyzing request: 'document_analysis_large'" },
                { delay: 400, text: "> Calculating context: 98,241 tokens" },
                { delay: 1200, text: "> Rule matched: [context_size > 32k]" },
                { delay: 1800, text: "> <span class='text-accent'>Selected: claude-3-opus (context-optimized)</span>" },
                { delay: 4500, text: "> Streaming response... complete. Latency: 4.2s" }
            ]
        };

        let demoTimeout = null;

        function runDemo(type) {
            // Reset
            clearTimeout(demoTimeout);
            terminal.innerHTML = '';
            status.innerText = "EXECUTING...";
            status.classList.add('text-accent', 'animate-pulse');
            
            let totalDelay = 0;
            const sequence = demoRoutines[type];
            
            sequence.forEach((step, index) => {
                totalDelay += step.delay;
                setTimeout(() => {
                    const div = document.createElement('div');
                    div.innerHTML = step.text;
                    div.style.opacity = 0;
                    terminal.appendChild(div);
                    // fade in
                    setTimeout(() => div.style.opacity = 1, 50);
                    
                    if(index === sequence.length - 1) {
                        status.innerText = "IDLE";
                        status.classList.remove('text-accent', 'animate-pulse');
                    }
                }, totalDelay);
            });
        }
    
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 py-4 border-b border-transparent" id="navbar">
<div className="max-w-container mx-auto px-container flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<svg className="text-accent transform group-hover:rotate-90 transition-transform duration-500" fill="none" height="24" viewbox="0 0 24 24" width="24">
<path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
<circle cx="12" cy="12" fill="currentColor" r="3"></circle>
</svg>
<span className="font-display font-bold text-[clamp(1.1rem,1.2vw,1.25rem)] tracking-tighter text-white">AXON</span>
</a>

<div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-primary/70">
<a className="hover:text-accent transition-colors" href="#platform">Architecture</a>
<a className="hover:text-accent transition-colors" href="#telemetry">Telemetry</a>
<a className="hover:text-accent transition-colors" href="#ecosystem">Ecosystem</a>
<a className="hover:text-accent transition-colors" href="#pricing">Pricing</a>
</div>
<a className="hidden md:inline-flex axon-btn" href="#cta" style={{padding: '0.5rem 1.25rem', fontSize: '0.7rem'}}>Deploy Now</a>

<button className="md:hidden text-primary text-xl">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden border-b border-white/5">

<canvas id="webgl-canvas"></canvas>
<div className="max-w-container mx-auto px-container w-full grid grid-cols-1 lg:grid-cols-12 gap-gap_section items-center relative z-10">

<div className="lg:col-span-6 flex flex-col items-start z-20">
<div className="axon-badge reveal">
<iconify-icon icon="solar:bolt-linear"></iconify-icon>
                    SYS_INIT // V4.0.2
                </div>
<h1 className="font-display font-semibold text-[clamp(3.5rem,6vw,5.5rem)] leading-[0.9] text-white mb-6 reveal stagger-1 tracking-tighter">
                    SCALE AI <br/>
<span className="text-gradient">RUTHLESSLY.</span>
</h1>
<p className="text-secondary text-[clamp(1rem,1.1vw,1.15rem)] mb-10 reveal stagger-2">
                    Stop debugging infrastructure. Axon automates model routing, persistent memory, and delivery. Ship production-grade AI workflows in minutes, not sprints.
                </p>
<div className="flex flex-wrap items-center gap-4 reveal stagger-3">
<a className="axon-btn" href="#cta">Start Free Trial</a>
<a className="axon-btn axon-btn-outline" href="#telemetry">View Telemetry</a>
</div>
<div className="mt-8 flex items-center gap-3 font-mono text-xs text-secondary uppercase tracking-widest reveal stagger-3">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-surface border border-secondary/30 flex items-center justify-center"><iconify-icon className="text-[0.6rem]" icon="solar:user-linear"></iconify-icon></div>
<div className="w-6 h-6 rounded-full bg-surface border border-secondary/30 flex items-center justify-center"><iconify-icon className="text-[0.6rem]" icon="solar:user-linear"></iconify-icon></div>
<div className="w-6 h-6 rounded-full bg-surface border border-secondary/30 flex items-center justify-center"><iconify-icon className="text-[0.6rem]" icon="solar:user-linear"></iconify-icon></div>
</div>
<span>Trusted by 2,000+ engineering teams</span>
</div>
</div>

<div className="hidden lg:block lg:col-span-6 relative z-10 reveal stagger-2">
<div className="glass-panel rounded-none border border-white/10 shadow-2xl shadow-accent/5 overflow-hidden transform rotate-y-[-5deg] rotate-x-[5deg] perspective-[1000px]">

<div className="bg-surfaceElevated border-b border-white/5 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-secondary/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-secondary/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-secondary/50"></div>
</div>
<span className="font-mono text-[0.65rem] text-secondary tracking-widest uppercase">axon_deployment_prod</span>
</div>
<div className="flex items-center gap-2 font-mono text-[0.65rem] text-accent">
<span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span> LIVE
                        </div>
</div>

<div className="p-6 bg-[#0B0E14]/80 grid grid-cols-3 gap-4 h-[400px]">

<div className="col-span-1 flex flex-col gap-2 border-r border-white/5 pr-4">
<div className="font-mono text-[0.65rem] text-secondary uppercase mb-2">Active Traces</div>
<div className="bg-surfaceElevated p-2 border border-white/5 border-l-2 border-l-accent flex flex-col gap-1 cursor-pointer">
<span className="font-mono text-xs text-white">req_8f2a9b</span>
<span className="font-mono text-[0.6rem] text-secondary">Latency: 112ms</span>
</div>
<div className="p-2 flex flex-col gap-1 cursor-pointer hover:bg-surfaceElevated transition-colors">
<span className="font-mono text-xs text-primary/70">req_7c1x4m</span>
<span className="font-mono text-[0.6rem] text-secondary">Latency: 84ms</span>
</div>
<div className="p-2 flex flex-col gap-1 cursor-pointer hover:bg-surfaceElevated transition-colors">
<span className="font-mono text-xs text-primary/70">req_9p3v2n</span>
<span className="font-mono text-[0.6rem] text-secondary">Latency: 204ms</span>
</div>
</div>

<div className="col-span-2 flex flex-col gap-4">
<div className="flex justify-between items-end">
<div className="font-mono text-[0.65rem] text-secondary uppercase">Execution Graph</div>
<div className="font-mono text-[0.65rem] text-white bg-white/5 px-2 py-1">2.4k Tokens</div>
</div>

<div className="flex-1 border border-white/5 bg-[#080B0F] relative overflow-hidden flex items-center justify-center p-4">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
<div className="flex items-center w-full gap-2 relative z-10">
<div className="bg-surfaceElevated border border-secondary/30 p-2 w-1/3 text-center z-10 relative">
<span className="font-mono text-[0.6rem] text-primary">Input</span>

<div className="absolute top-1/2 -right-2 w-2 h-[1px] bg-secondary/50"></div>
</div>
<div className="bg-surfaceElevated border border-accent p-2 w-1/3 text-center z-10 relative shadow-[0_0_15px_rgba(0,255,136,0.15)]">
<span className="font-mono text-[0.6rem] text-accent">GPT-4-Turbo</span>
<div className="absolute top-1/2 -right-2 w-2 h-[1px] bg-secondary/50"></div>
</div>
<div className="bg-surfaceElevated border border-secondary/30 p-2 w-1/3 text-center z-10">
<span className="font-mono text-[0.6rem] text-primary">Output</span>
</div>
</div>
</div>

<div className="h-20 bg-[#040608] border border-white/5 p-2 overflow-hidden">
<div className="font-mono text-[0.6rem] text-secondary">
                                    &gt; [14:02:11] Init routing logic...<br/>
                                    &gt; <span className="text-accent">[14:02:11] Selected model: gpt-4-turbo-preview based on rule [context_size &gt; 8k]</span><br/>
                                    &gt; [14:02:12] Payload delivered. status=200
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-surface relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/5">
<div className="p-section/2 flex flex-col justify-center items-center text-center reveal">
<div className="font-mono text-[clamp(1.5rem,2.5vw,2.5rem)] text-white mb-1 font-semibold">99.99%</div>
<p className="text-secondary text-xs font-mono uppercase tracking-widest">Uptime SLA</p>
</div>
<div className="p-section/2 flex flex-col justify-center items-center text-center reveal stagger-1">
<div className="font-mono text-[clamp(1.5rem,2.5vw,2.5rem)] text-white mb-1 font-semibold">4.2B+</div>
<p className="text-secondary text-xs font-mono uppercase tracking-widest">Tasks Executed</p>
</div>
<div className="p-section/2 flex flex-col justify-center items-center text-center reveal stagger-2">
<div className="font-mono text-[clamp(1.5rem,2.5vw,2.5rem)] text-white mb-1 font-semibold">112ms</div>
<p className="text-secondary text-xs font-mono uppercase tracking-widest">P99 Latency</p>
</div>
<div className="p-section/2 flex flex-col justify-center items-center text-center reveal stagger-3">
<div className="font-mono text-[clamp(1.5rem,2.5vw,2.5rem)] text-accent mb-1 font-semibold">Zero</div>
<p className="text-secondary text-xs font-mono uppercase tracking-widest">Ops Engineers Needed</p>
</div>
</div>
</section>

<section className="py-section max-w-container mx-auto px-container border-b border-white/5">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-gap_section items-center">
<div className="reveal">
<div className="axon-badge">
<iconify-icon icon="solar:shield-warning-linear"></iconify-icon>
                    THE BOTTLENECK
                </div>
<h2 className="font-display font-semibold text-[clamp(2rem,3.5vw,3rem)] leading-tight mb-6 tracking-tight">
                    Your custom scripts are a <span className="text-white">liability.</span>
</h2>
<p className="text-secondary text-[clamp(0.9rem,1vw,1rem)] mb-6">
                    Building internal AI orchestration means writing glue code. Every model API change, context window limit, and latency spike breaks your product.
                </p>
<p className="text-secondary text-[clamp(0.9rem,1vw,1rem)] mb-8">
                    You're paying top-tier engineers to debug infrastructure instead of shipping features. Operational debt is killing your product velocity.
                </p>
<div className="font-mono text-xs border-l-2 border-accent pl-4 text-primary/80">
                    "We spent 3 months building a custom router. Axon replaced it in 10 minutes."
                </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 reveal stagger-2">
<div className="axon-card opacity-50">
<iconify-icon className="text-2xl text-secondary mb-4" icon="solar:link-broken-linear"></iconify-icon>
<h3 className="font-mono text-xs uppercase tracking-widest text-white mb-2">Brittle Routing</h3>
<p className="text-secondary text-xs">Hardcoded model fallbacks fail silently in production.</p>
</div>
<div className="axon-card opacity-50 sm:translate-y-4">
<iconify-icon className="text-2xl text-secondary mb-4" icon="solar:eye-closed-linear"></iconify-icon>
<h3 className="font-mono text-xs uppercase tracking-widest text-white mb-2">Blind Spots</h3>
<p className="text-secondary text-xs">Zero visibility into token costs or prompt latency until the invoice arrives.</p>
</div>
<div className="axon-card opacity-50">
<iconify-icon className="text-2xl text-secondary mb-4" icon="solar:layers-minimalistic-linear"></iconify-icon>
<h3 className="font-mono text-xs uppercase tracking-widest text-white mb-2">Context Loss</h3>
<p className="text-secondary text-xs">Managing conversational state across instances is a nightmare.</p>
</div>
<div className="axon-card bg-surfaceElevated border-accent/30 sm:translate-y-4 shadow-[0_0_30px_rgba(0,255,136,0.05)]">
<iconify-icon className="text-2xl text-accent mb-4" icon="solar:check-circle-linear"></iconify-icon>
<h3 className="font-mono text-xs uppercase tracking-widest text-white mb-2">The Axon Way</h3>
<p className="text-secondary text-xs">A unified, version-controlled control plane. Zero maintenance.</p>
</div>
</div>
</div>
</section>

<section className="py-section bg-surface/30 border-b border-white/5 relative" id="platform">
<div className="max-w-container mx-auto px-container">
<div className="mb-16 md:w-2/3 reveal">
<div className="axon-badge">
<iconify-icon icon="solar:cpu-linear"></iconify-icon>
                    ARCHITECTURE
                </div>
<h2 className="font-display font-semibold text-[clamp(2rem,3.5vw,3rem)] leading-tight mb-4 tracking-tight">
                    Complete Control.<br/>Zero Ops Overhead.
                </h2>
<p className="text-secondary text-[clamp(0.9rem,1vw,1rem)]">
                    Axon isn't a wrapper. It's a high-performance orchestration layer designed for teams scaling beyond their first prototype.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="axon-card reveal flex flex-col">
<div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
<div className="w-10 h-10 bg-surface flex items-center justify-center border border-white/10 rounded-none text-accent">
<iconify-icon className="text-xl" icon="solar:routing-linear"></iconify-icon>
</div>
<h3 className="font-mono text-sm uppercase tracking-widest font-semibold text-white">Dynamic Routing</h3>
</div>
<p className="text-secondary text-sm mb-6 flex-1">
                        Define rules to automatically switch models based on context length, semantic intent, latency requirements, or token cost.
                    </p>
<ul className="flex flex-col gap-2 font-mono text-xs text-secondary">
<li className="flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:alt-arrow-right-linear"></iconify-icon> Cost-based Fallbacks</li>
<li className="flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:alt-arrow-right-linear"></iconify-icon> Load Balancing</li>
<li className="flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:alt-arrow-right-linear"></iconify-icon> Semantic Caching</li>
</ul>
</div>

<div className="axon-card reveal stagger-1 flex flex-col md:-translate-y-4">
<div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
<div className="w-10 h-10 bg-surface flex items-center justify-center border border-white/10 rounded-none text-accent">
<iconify-icon className="text-xl" icon="solar:database-linear"></iconify-icon>
</div>
<h3 className="font-mono text-sm uppercase tracking-widest font-semibold text-white">Persistent State</h3>
</div>
<p className="text-secondary text-sm mb-6 flex-1">
                        Serverless memory management. Axon automatically injects relevant context into your prompts using our globally distributed vector store.
                    </p>
<ul className="flex flex-col gap-2 font-mono text-xs text-secondary">
<li className="flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:alt-arrow-right-linear"></iconify-icon> Session Management</li>
<li className="flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:alt-arrow-right-linear"></iconify-icon> Auto-Embedding</li>
<li className="flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:alt-arrow-right-linear"></iconify-icon> Context Pruning</li>
</ul>
</div>

<div className="axon-card reveal stagger-2 flex flex-col">
<div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
<div className="w-10 h-10 bg-surface flex items-center justify-center border border-white/10 rounded-none text-accent">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="font-mono text-sm uppercase tracking-widest font-semibold text-white">Guardrails</h3>
</div>
<p className="text-secondary text-sm mb-6 flex-1">
                        Ensure output reliability before it reaches your users. Schema validation, PII redaction, and semantic safety checks out of the box.
                    </p>
<ul className="flex flex-col gap-2 font-mono text-xs text-secondary">
<li className="flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:alt-arrow-right-linear"></iconify-icon> Strict JSON Enforcement</li>
<li className="flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:alt-arrow-right-linear"></iconify-icon> Hallucination Detection</li>
<li className="flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:alt-arrow-right-linear"></iconify-icon> Type Validation</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#040608] border-b border-white/5 text-center overflow-hidden relative" id="ecosystem">
<div className="max-w-container mx-auto px-container reveal">
<p className="font-mono text-xs uppercase tracking-widest text-secondary mb-8">Natively integrated with the entire stack</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="font-display font-semibold text-xl tracking-tight text-white flex items-center gap-2">
<iconify-icon className="text-2xl" icon="solar:code-circle-linear"></iconify-icon> OPENAI
                </div>
<div className="font-display font-semibold text-xl tracking-tight text-white flex items-center gap-2">
<iconify-icon className="text-2xl" icon="solar:box-minimalistic-linear"></iconify-icon> ANTHROPIC
                </div>
<div className="font-display font-semibold text-xl tracking-tight text-white flex items-center gap-2">
<iconify-icon className="text-2xl" icon="solar:layers-linear"></iconify-icon> PINECONE
                </div>
<div className="font-display font-semibold text-xl tracking-tight text-white flex items-center gap-2">
<iconify-icon className="text-2xl" icon="solar:server-linear"></iconify-icon> AWS
                </div>
<div className="font-display font-semibold text-xl tracking-tight text-white flex items-center gap-2">
<iconify-icon className="text-2xl" icon="solar:cloud-linear"></iconify-icon> GCP
                </div>
</div>
</div>
</section>

<section className="py-section border-b border-white/5 bg-surface relative">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,136,0.03)_0%,transparent_70%)] pointer-events-none"></div>
<div className="max-w-container mx-auto px-container flex flex-col gap-12">
<div className="text-center md:w-2/3 mx-auto reveal">
<div className="axon-badge mx-auto">
<iconify-icon icon="solar:eye-linear"></iconify-icon>
                    OBSERVABILITY
                </div>
<h2 className="font-display font-semibold text-[clamp(2rem,3.5vw,3rem)] leading-tight mb-4 tracking-tight">
                    Your Black Box is now a Glass Box.
                </h2>
<p className="text-secondary text-[clamp(0.9rem,1vw,1rem)]">
                    Stop guessing why a response failed. Inspect every token, every routing decision, and every latency spike in real-time.
                </p>
</div>

<div className="w-full glass-panel border border-white/10 rounded-sm overflow-hidden reveal stagger-2 relative z-10 shadow-2xl">

<div className="bg-[#040608] border-b border-white/10 px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-6">
<div className="font-mono text-sm text-white font-semibold">TRACE <span className="text-secondary">#REQ-9942</span></div>
<div className="hidden md:flex gap-4 font-mono text-xs text-secondary uppercase">
<span className="text-accent border-b border-accent pb-1">Overview</span>
<span className="hover:text-white cursor-pointer transition-colors">Logs</span>
<span className="hover:text-white cursor-pointer transition-colors">Metrics</span>
</div>
</div>
<div className="axon-btn" style={{padding: '0.4rem 1rem', fontSize: '0.6rem'}}>Export Log</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-4 bg-surfaceElevated h-[500px]">

<div className="col-span-1 border-r border-white/5 p-6 flex flex-col gap-6 font-mono text-xs overflow-y-auto">
<div>
<div className="text-secondary mb-2 uppercase tracking-widest">Status</div>
<div className="flex items-center gap-2 text-accent"><iconify-icon icon="solar:check-circle-bold"></iconify-icon> 200 OK</div>
</div>
<div>
<div className="text-secondary mb-2 uppercase tracking-widest">Latency</div>
<div className="text-white">842ms <span className="text-secondary">(P95)</span></div>
</div>
<div>
<div className="text-secondary mb-2 uppercase tracking-widest">Total Tokens</div>
<div className="text-white">4,291 <span className="text-secondary">($0.014)</span></div>
</div>
<div className="h-px bg-white/5 w-full"></div>
<div>
<div className="text-secondary mb-2 uppercase tracking-widest">Metadata</div>
<div className="flex flex-col gap-1 text-[0.65rem] text-primary/70">
<div className="flex justify-between"><span>user_id:</span> <span className="text-white">usr_7x9q</span></div>
<div className="flex justify-between"><span>env:</span> <span className="text-white">production</span></div>
<div className="flex justify-between"><span>region:</span> <span className="text-white">us-east-1</span></div>
</div>
</div>
</div>

<div className="col-span-3 p-6 flex flex-col overflow-y-auto bg-[#040608]">
<div className="font-mono text-xs text-secondary mb-4 uppercase tracking-widest">Execution Timeline</div>
<div className="flex flex-col gap-4 relative">

<div className="absolute left-3 top-2 bottom-2 w-px bg-white/10"></div>

<div className="flex gap-4 relative z-10">
<div className="w-6 h-6 rounded-full bg-surface border border-secondary/50 flex items-center justify-center mt-1"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div></div>
<div className="flex-1 bg-surfaceElevated border border-white/5 p-4 flex flex-col gap-2 hover:border-white/20 transition-colors">
<div className="flex justify-between items-center font-mono text-xs">
<span className="text-white font-semibold">1. Input Ingestion</span>
<span className="text-secondary">12ms</span>
</div>
<div className="font-mono text-[0.65rem] text-secondary bg-[#040608] p-2 border border-white/5">
                                        Payload size: 1.2KB | Auth: Validated
                                    </div>
</div>
</div>

<div className="flex gap-4 relative z-10">
<div className="w-6 h-6 rounded-full bg-surface border border-accent/50 flex items-center justify-center mt-1"><div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div></div>
<div className="flex-1 bg-surfaceElevated border border-white/5 border-l-2 border-l-accent p-4 flex flex-col gap-2 shadow-[0_4px_20px_rgba(0,255,136,0.03)]">
<div className="flex justify-between items-center font-mono text-xs">
<span className="text-white font-semibold flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:routing-linear"></iconify-icon> 2. Model Router</span>
<span className="text-secondary">4ms</span>
</div>
<div className="font-mono text-[0.65rem] text-secondary">
                                        Rule matched: <span className="text-white">`requires_json == true`</span> -&gt; Routing to GPT-4-Turbo.
                                    </div>
</div>
</div>

<div className="flex gap-4 relative z-10">
<div className="w-6 h-6 rounded-full bg-surface border border-secondary/50 flex items-center justify-center mt-1"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div></div>
<div className="flex-1 bg-surfaceElevated border border-white/5 p-4 flex flex-col gap-2 hover:border-white/20 transition-colors">
<div className="flex justify-between items-center font-mono text-xs">
<span className="text-white font-semibold">3. LLM Inference</span>
<span className="text-secondary">820ms</span>
</div>
<div className="font-mono text-[0.65rem] text-secondary bg-[#040608] p-2 border border-white/5 line-clamp-2">
                                        {"company": "Acme Corp", "metrics": {"arr": 1200000, "growth": 0.45}, "status": "verified"}
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-section border-b border-white/5 relative bg-[#040608]" id="telemetry">
<div className="max-w-container mx-auto px-container flex flex-col lg:flex-row gap-12 items-center">
<div className="lg:w-1/3 reveal">
<div className="axon-badge">
<iconify-icon icon="solar:play-circle-linear"></iconify-icon>
                    LIVE PLAYGROUND
                </div>
<h2 className="font-display font-semibold text-[clamp(2rem,3vw,3rem)] leading-tight mb-4 tracking-tight">
                    Test the routing engine.
                </h2>
<p className="text-secondary text-[clamp(0.9rem,1vw,1rem)] mb-8">
                    Select a payload type below. Watch how Axon instantly routes, executes, and validates the output based on predefined logic.
                </p>
<div className="flex flex-col gap-3 font-mono text-xs">
<button className="w-full text-left bg-surfaceElevated border border-white/10 p-4 text-white hover:border-accent hover:text-accent transition-colors group flex justify-between items-center" onclick="runDemo('standard')">
<span>[01] Standard Query</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full text-left bg-surfaceElevated border border-white/10 p-4 text-white hover:border-accent hover:text-accent transition-colors group flex justify-between items-center" onclick="runDemo('json')">
<span>[02] Strict JSON Request</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full text-left bg-surfaceElevated border border-white/10 p-4 text-white hover:border-accent hover:text-accent transition-colors group flex justify-between items-center" onclick="runDemo('massive')">
<span>[03] 100k Token Context</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="lg:w-2/3 w-full bg-surfaceElevated border border-white/10 h-[400px] flex flex-col reveal stagger-2">
<div className="border-b border-white/5 px-4 py-2 font-mono text-xs text-secondary flex justify-between">
<span>TERMINAL OUTPUT</span>
<span id="demo-status">WAITING_FOR_INPUT</span>
</div>
<div className="p-6 font-mono text-xs text-primary/80 overflow-y-auto flex-1 flex flex-col gap-2" id="demo-terminal">
<div>&gt; Select a scenario to initialize sequence...</div>
</div>
</div>
</div>
</section>

<section className="py-section max-w-container mx-auto px-container border-b border-white/5">
<div className="text-center mb-16 reveal">
<div className="axon-badge mx-auto">
<iconify-icon icon="solar:star-linear"></iconify-icon>
                VALIDATION
            </div>
<h2 className="font-display font-semibold text-[clamp(2rem,3.5vw,3rem)] leading-tight tracking-tight uppercase">
                Shipped faster. Broke less.
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal stagger-2">
<div className="axon-card flex flex-col justify-between">
<div className="flex text-accent mb-6"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<p className="text-white text-sm leading-relaxed mb-8">"We ripped out 10,000 lines of custom routing logic and replaced it with Axon in an afternoon. Our API latency dropped by 40% and we haven't touched infra since."</p>
<div className="flex items-center gap-4 border-t border-white/5 pt-4">
<div className="w-10 h-10 bg-secondary/20 rounded-none border border-white/10"></div>
<div className="font-mono text-[0.7rem] text-secondary uppercase tracking-widest">
<span className="text-white block font-semibold mb-1">David M.</span> VP Eng @ Nexus
                    </div>
</div>
</div>
<div className="axon-card border-accent/20 shadow-[0_0_20px_rgba(0,255,136,0.05)] transform md:-translate-y-4 flex flex-col justify-between">
<div className="flex text-accent mb-6"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<p className="text-white text-sm leading-relaxed mb-8">"The observability tools alone paid for the platform. We found a recursive loop burning $500/day in OpenAI credits within 5 minutes of deploying."</p>
<div className="flex items-center gap-4 border-t border-white/5 pt-4">
<div className="w-10 h-10 bg-secondary/20 rounded-none border border-white/10"></div>
<div className="font-mono text-[0.7rem] text-secondary uppercase tracking-widest">
<span className="text-white block font-semibold mb-1">Sarah K.</span> CTO @ Synthetix
                    </div>
</div>
</div>
<div className="axon-card flex flex-col justify-between">
<div className="flex text-accent mb-6"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<p className="text-white text-sm leading-relaxed mb-8">"Our product velocity 3x'd. We treat workflows as code now—versioned, tested, and deployed safely. No more 3am production fire drills."</p>
<div className="flex items-center gap-4 border-t border-white/5 pt-4">
<div className="w-10 h-10 bg-secondary/20 rounded-none border border-white/10"></div>
<div className="font-mono text-[0.7rem] text-secondary uppercase tracking-widest">
<span className="text-white block font-semibold mb-1">Michael R.</span> Lead Architect @ Forge
                    </div>
</div>
</div>
</div>
</section>

<section className="py-section bg-[#040608] border-b border-white/5" id="pricing">
<div className="max-w-container mx-auto px-container text-center mb-16 reveal">
<div className="axon-badge mx-auto">
<iconify-icon icon="solar:wallet-linear"></iconify-icon>
                ECONOMICS
            </div>
<h2 className="font-display font-semibold text-[clamp(2rem,3.5vw,3rem)] leading-tight tracking-tight uppercase mb-4">Scale without penalty.</h2>
<p className="font-mono text-secondary text-xs uppercase tracking-widest">Pay for compute, not seats. Cancel anytime.</p>
</div>
<div className="max-w-container mx-auto px-container grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">

<div className="axon-card bg-surfaceElevated reveal flex flex-col h-full relative overflow-hidden">
<h3 className="font-mono text-secondary uppercase tracking-widest mb-2 text-xs">Professional</h3>
<div className="font-display text-[clamp(2rem,2.5vw,3rem)] text-white mb-6 font-semibold">$99<span className="text-sm text-secondary font-body font-normal">/mo</span></div>
<p className="text-secondary text-sm mb-8">Perfect for startups scaling their first AI features into production.</p>
<div className="flex-1 flex flex-col gap-3 font-mono text-xs text-primary/80 mb-8 border-t border-white/5 pt-6">
<div className="flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> Up to 500k Tasks/mo</div>
<div className="flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> Standard Routing Engine</div>
<div className="flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> 7-Day Log Retention</div>
<div className="flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> Community Support</div>
</div>
<button className="axon-btn w-full axon-btn-outline">Start 14-Day Trial</button>
</div>

<div className="axon-card border-accent/40 shadow-[0_0_40px_rgba(0,255,136,0.08)] transform md:-translate-y-4 reveal stagger-1 flex flex-col h-full relative z-10 bg-[#0B0E14]">
<div className="absolute top-4 right-4 bg-accent/10 border border-accent/20 text-accent font-mono text-[0.65rem] uppercase font-semibold px-2 py-1 tracking-widest">Recommended</div>
<h3 className="font-mono text-accent uppercase tracking-widest mb-2 text-xs">Scale</h3>
<div className="font-display text-[clamp(2rem,2.5vw,3rem)] text-white mb-6 font-semibold">$499<span className="text-sm text-secondary font-body font-normal">/mo</span></div>
<p className="text-primary/90 text-sm mb-8">For teams running mission-critical AI workloads with high throughput.</p>
<div className="flex-1 flex flex-col gap-3 font-mono text-xs text-white mb-8 border-t border-white/5 pt-6">
<div className="flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:check-circle-bold"></iconify-icon> Unlimited Tasks</div>
<div className="flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:check-circle-bold"></iconify-icon> Custom Routing Rules</div>
<div className="flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:check-circle-bold"></iconify-icon> 90-Day Log Retention &amp; Export</div>
<div className="flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:check-circle-bold"></iconify-icon> Dedicated Slack Channel</div>
</div>
<button className="axon-btn w-full">Deploy Now</button>
</div>
</div>
</section>

<section className="py-section max-w-container mx-auto px-container flex justify-center border-b border-white/5" id="cta">
<div className="w-full max-w-4xl border border-accent/30 bg-surfaceElevated p-[clamp(2rem,4vw,4rem)] relative reveal z-10 clip-path-[polygon(0_0,100%_0,100%_calc(100%-2rem),calc(100%-2rem)_100%,0_100%)]">

<div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,rgba(0,255,136,0.1)_0%,transparent_70%)] pointer-events-none"></div>
<div className="text-center mb-10">
<h2 className="font-display font-semibold text-[clamp(2rem,3.5vw,3.5rem)] leading-tight uppercase mb-4 text-white tracking-tight">
                    Stop building infra.<br/>Start shipping AI.
                </h2>
<p className="text-secondary text-[clamp(0.9rem,1vw,1rem)] max-w-lg mx-auto">
                    Join elite engineering teams. Setup takes 5 minutes.
                </p>
</div>
<form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto" onsubmit="event.preventDefault();">
<div className="relative flex-1">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" icon="solar:letter-linear"></iconify-icon>
<input className="bg-[#040608] border border-white/10 pl-10 pr-4 py-4 font-mono text-sm text-white placeholder:text-secondary focus:outline-none focus:border-accent transition-colors w-full rounded-none" placeholder="Work Email" required="" type="email"/>
</div>
<button className="axon-btn px-8" type="submit">Get Access</button>
</form>
<p className="font-mono text-center text-[0.65rem] text-secondary mt-6 flex items-center justify-center gap-2 uppercase tracking-widest">
<iconify-icon icon="solar:shield-keyhole-linear"></iconify-icon> No credit card required. Free 14-day trial.
            </p>
</div>
</section>

<footer className="bg-[#040608] pt-16 pb-8 relative overflow-hidden flex flex-col">
<div className="max-w-container mx-auto px-container w-full grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10 flex-1 border-b border-white/5 pb-16">

<div className="flex flex-col gap-4">
<a className="flex items-center gap-2 group mb-4" href="#">
<svg className="text-accent" fill="none" height="20" viewbox="0 0 24 24" width="20">
<path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
<circle cx="12" cy="12" fill="currentColor" r="3"></circle>
</svg>
<span className="font-display font-semibold text-lg tracking-tight text-white">AXON</span>
</a>
<p className="font-mono text-[0.65rem] text-secondary tracking-widest uppercase">The control plane for production AI.</p>
</div>

<div className="flex flex-col gap-3 font-mono text-[0.7rem] uppercase tracking-widest text-secondary">
<h4 className="text-white mb-2">Platform</h4>
<a className="hover:text-accent transition-colors" href="#">Routing</a>
<a className="hover:text-accent transition-colors" href="#">Memory</a>
<a className="hover:text-accent transition-colors" href="#">Telemetry</a>
</div>
<div className="flex flex-col gap-3 font-mono text-[0.7rem] uppercase tracking-widest text-secondary">
<h4 className="text-white mb-2">Developers</h4>
<a className="hover:text-accent transition-colors" href="#">Documentation</a>
<a className="hover:text-accent transition-colors" href="#">API Reference</a>
<a className="hover:text-accent transition-colors" href="#">GitHub</a>
</div>

<div className="flex flex-col gap-3 font-mono text-[0.7rem] uppercase tracking-widest text-secondary">
<h4 className="text-white mb-2">Company</h4>
<a className="hover:text-accent transition-colors" href="#">Privacy</a>
<a className="hover:text-accent transition-colors" href="#">Terms</a>
<div className="flex gap-4 text-lg mt-4">
<a className="hover:text-accent transition-colors" href="#"><iconify-icon icon="solar:twitter-linear"></iconify-icon></a>
<a className="hover:text-accent transition-colors" href="#"><iconify-icon icon="solar:github-linear"></iconify-icon></a>
</div>
</div>
</div>
<div className="max-w-container mx-auto px-container w-full flex flex-col md:flex-row justify-between items-center font-mono text-[0.65rem] text-secondary tracking-widest uppercase relative z-10">
<p>© 2026 AXON SYSTEMS. ALL RIGHTS RESERVED.</p>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,255,136,0.6)]"></div>
                All systems operational
            </div>
</div>
</footer>



    </>
  );
}
