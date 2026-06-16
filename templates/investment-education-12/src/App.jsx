import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
primary: '#0A0A0A',
secondary: '#F4F4F0',
accent: '#00DC82',
background: '#0A0A0A',
surface: '#1A1A1A',
text: {
primary: '#F4F4F0',
secondary: '#A1A1AA',
}
},
fontFamily: {
display: ['Clash Display', 'system-ui', 'sans-serif'],
heading: ['Inter', 'system-ui', 'sans-serif'],
body: ['Inter', 'system-ui', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
spacing: {
section: 'clamp(4rem, 8vw, 8rem)',
container: 'clamp(1rem, 5vw, 4rem)',
card: 'clamp(1.5rem, 3vw, 2.5rem)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Navbar Scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-primary/80', 'backdrop-blur-xl', 'border-b-[#1A1A1A]');
                navbar.classList.remove('bg-background/0', 'border-transparent');
            } else {
                navbar.classList.remove('bg-primary/80', 'backdrop-blur-xl', 'border-b-[#1A1A1A]');
                navbar.classList.add('bg-background/0', 'border-transparent');
            }
        });

        // Intersection Observer
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);
        document.querySelectorAll('.reveal, .scroll-line').forEach(el => observer.observe(el));

        // Counters
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    const el = entry.target;
                    const target = parseFloat(el.getAttribute('data-target'));
                    const prefix = el.getAttribute('data-prefix') || '';
                    const suffix = el.getAttribute('data-suffix') || '';
                    const isDecimal = el.getAttribute('data-target').includes('.');
                    
                    let start = 0;
                    const duration = 2500; 
                    const startTime = performance.now();

                    const updateCounter = (currentTime) => {
                        const elapsedTime = currentTime - startTime;
                        const progress = Math.min(elapsedTime / duration, 1);
                        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                        const currentVal = start + (target - start) * easeProgress;

                        el.innerText = `${prefix}${isDecimal ? currentVal.toFixed(2) : Math.floor(currentVal)}${suffix}`;

                        if (progress < 1) requestAnimationFrame(updateCounter);
                        else {
                            el.innerText = `${prefix}${target}${suffix}`;
                            el.classList.add('counted');
                        }
                    };
                    requestAnimationFrame(updateCounter);
                }
            });
        }, observerOptions);
        document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

        // Canvas Particles
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let mouse = { x: null, y: null };

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = document.getElementById('hero').offsetHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = (Math.random() - 0.5) * 0.3;
                this.radius = Math.random() * 1.5;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > width) this.vx = -this.vx;
                if (this.y < 0 || this.y > height) this.vy = -this.vy;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(244, 244, 240, 0.2)';
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const numParticles = Math.min(window.innerWidth / 20, 60); 
            for (let i = 0; i < numParticles; i++) particles.push(new Particle());
        }
        initParticles();

        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });
        canvas.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });

        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 220, 130, ${0.1 - dist/100 * 0.1})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
                if (mouse.x != null) {
                    const dx = particles[i].x - mouse.x;
                    const dy = particles[i].y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(244, 244, 240, ${0.15 - dist/150 * 0.15})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                        particles[i].x -= dx * 0.015;
                        particles[i].y -= dy * 0.015;
                    }
                }
            }
            requestAnimationFrame(animateCanvas);
        }
        animateCanvas();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise"></div>

<div className="grid-guide hidden md:grid">
<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
</div>

<nav className="fixed top-0 w-full z-40 transition-all duration-300 border-b border-transparent bg-background/0" id="navbar">
<div className="max-w-[clamp(65rem,90vw,90rem)] mx-auto px-container h-[4.5rem] flex items-center justify-between">
<a className="font-display font-medium tracking-tighter text-[clamp(1.25rem,2vw,1.5rem)] text-text-primary uppercase flex items-center gap-2 z-50" href="#">
                VESTL
            </a>
<div className="hidden md:flex items-center gap-8 font-heading text-[0.875rem] font-medium tracking-tight text-text-secondary">
<a className="hover:text-text-primary transition-colors" href="#curriculum">Curriculum</a>
<a className="hover:text-text-primary transition-colors" href="#results">Outcomes</a>
<a className="hover:text-text-primary transition-colors" href="#pricing">Enroll</a>
</div>
<div className="hidden md:block">
<a className="btn-primary py-2 px-6 text-[0.875rem] font-medium" href="#pricing">Start Learning</a>
</div>
<button aria-label="Menu" className="md:hidden text-text-primary z-50">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden" id="hero">
<canvas id="hero-canvas"></canvas>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,220,130,0.05)_0%,transparent_50%)] z-0 pointer-events-none"></div>
<div className="max-w-[clamp(65rem,90vw,90rem)] mx-auto px-container relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7 flex flex-col items-start text-left z-20">
<span className="section-marker reveal">/001/</span>
<h1 className="font-display font-medium text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] tracking-tighter mb-6 reveal stagger-1 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40">
                    Invest With Precision.<br/>Ignore The Noise.
                </h1>
<p className="text-text-secondary text-[clamp(1rem,1.2vw,1.125rem)] max-w-[45ch] mb-10 reveal stagger-2">
                    The definitive system for building generational wealth. Professional frameworks stripped of complexity, built for individuals.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-start gap-4 w-full sm:w-auto reveal stagger-3">
<a className="btn-primary w-full sm:w-auto" href="#pricing">Join The Cohort</a>
<a className="btn-secondary w-full sm:w-auto group" href="#curriculum">
                        View Syllabus <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="mt-16 flex items-center gap-4 text-[0.75rem] font-mono text-text-secondary reveal stagger-3">
<div className="flex gap-1 text-accent">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<span>2,400+ Students • 4.9/5 Rating</span>
</div>
</div>

<div className="lg:col-span-5 relative hidden lg:block reveal stagger-2">
<div className="glass-panel p-8 rounded-2xl relative z-10 shadow-2xl transform hover:scale-[1.02] transition-transform duration-700">
<div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
<div className="font-mono text-[0.75rem] text-text-secondary uppercase tracking-widest">Live Execution</div>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-[#2A2A2A]"></span>
<span className="w-2 h-2 rounded-full bg-[#2A2A2A]"></span>
<span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
</div>
</div>
<div className="mb-6">
<div className="text-[0.75rem] text-text-secondary mb-1">Portfolio Alpha</div>
<div className="font-display text-[clamp(2rem,3vw,3rem)] tracking-tighter font-medium counter text-white" data-prefix="+" data-suffix="%" data-target="112.45">+0.00%</div>
</div>
<svg className="w-full h-[6rem] overflow-visible" preserveaspectratio="none" viewbox="0 0 200 60">
<path d="M0,50 Q40,40 80,60 T140,20 T200,10" fill="none" stroke="rgba(0, 220, 130, 0.2)" strokeWidth="2"></path>
<path className="[stroke-dasharray:300] [stroke-dashoffset:300] animate-[dash_3s_ease-out_forwards] delay-1000" d="M0,50 Q40,40 80,60 T140,20 T200,10" fill="none" stroke="#00DC82" strokeWidth="2"></path>
<circle className="animate-pulse" cx="200" cy="10" fill="#00DC82" r="4"></circle>
</svg>
</div>

<div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-transparent blur-2xl -z-10 rounded-full opacity-30"></div>
</div>
</div>
</section>

<section className="py-12 border-y border-surface bg-primary relative z-20">
<div className="max-w-[clamp(65rem,90vw,90rem)] mx-auto px-container text-center mb-8">
<p className="font-mono text-[0.75rem] uppercase tracking-widest text-text-secondary">Frameworks Used By Professionals At</p>
</div>
<div className="marquee-container opacity-40 hover:opacity-100 transition-opacity duration-700">
<div className="marquee-content font-display text-[clamp(1.5rem,2vw,2rem)] font-medium tracking-tight uppercase text-text-secondary items-center">
<span className="hover:text-white transition-colors cursor-default">Goldman Sachs</span>
<iconify-icon className="text-surface" icon="solar:minus-linear" width="24"></iconify-icon>
<span className="hover:text-white transition-colors cursor-default">Bridgewater</span>
<iconify-icon className="text-surface" icon="solar:minus-linear" width="24"></iconify-icon>
<span className="hover:text-white transition-colors cursor-default">Jane Street</span>
<iconify-icon className="text-surface" icon="solar:minus-linear" width="24"></iconify-icon>
<span className="hover:text-white transition-colors cursor-default">Citadel</span>
<iconify-icon className="text-surface" icon="solar:minus-linear" width="24"></iconify-icon>
<span className="hover:text-white transition-colors cursor-default">Goldman Sachs</span>
<iconify-icon className="text-surface" icon="solar:minus-linear" width="24"></iconify-icon>
<span className="hover:text-white transition-colors cursor-default">Bridgewater</span>
<iconify-icon className="text-surface" icon="solar:minus-linear" width="24"></iconify-icon>
<span className="hover:text-white transition-colors cursor-default">Jane Street</span>
<iconify-icon className="text-surface" icon="solar:minus-linear" width="24"></iconify-icon>
<span className="hover:text-white transition-colors cursor-default">Citadel</span>
<iconify-icon className="text-surface" icon="solar:minus-linear" width="24"></iconify-icon>
</div>
</div>
</section>

<section className="py-section max-w-[clamp(65rem,90vw,90rem)] mx-auto px-container relative" id="about">
<div className="grid grid-cols-1 md:grid-cols-12 gap-gap-section items-start">
<div className="md:col-span-5 md:sticky md:top-32 reveal self-start">
<span className="section-marker">/02/</span>
<h2 className="font-display font-medium text-[clamp(2rem,3vw,3rem)] tracking-tight leading-[1.1] mb-6">
                    Stop Trading on Emotion. Start Investing with Logic.
                </h2>
<p className="text-text-secondary text-[clamp(1rem,1vw,1.125rem)] mb-8">
                    Retail investors lose money chasing hype. We teach the exact quantitative frameworks institutions use to manage risk, allocate capital, and compound wealth consistently.
                </p>
<div className="flex items-center gap-4 text-[0.875rem]">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-primary bg-surface flex items-center justify-center font-mono text-[0.75rem] text-text-secondary">01</div>
<div className="w-10 h-10 rounded-full border-2 border-primary bg-surface flex items-center justify-center font-mono text-[0.75rem] text-text-secondary">02</div>
<div className="w-10 h-10 rounded-full border-2 border-primary bg-surface flex items-center justify-center font-mono text-[0.75rem] text-text-secondary">03</div>
</div>
<span className="text-text-secondary font-medium tracking-tight">Shift your paradigm.</span>
</div>
</div>
<div className="md:col-span-7 flex flex-col gap-6 mt-12 md:mt-0">

<div className="card-base p-10 flex flex-col sm:flex-row items-center gap-8 group reveal stagger-1">
<div className="flex-shrink-0 w-32 h-32 rounded-full border border-[#2A2A2A] flex items-center justify-center relative">
<svg className="absolute inset-0 w-full h-full -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="#1A1A1A" strokeWidth="4"></circle>
<circle className="transition-all duration-1000" cx="50" cy="50" fill="none" r="45" stroke="#ef4444" stroke-dasharray="283" stroke-dashoffset="56" strokeWidth="4"></circle>
</svg>
<span className="font-display text-2xl font-medium tracking-tighter text-red-500">80%</span>
</div>
<div>
<h3 className="font-heading font-medium text-[1.25rem] mb-2 tracking-tight">The Retail Trap</h3>
<p className="text-text-secondary text-[0.875rem]">80% of independent traders underperform a standard index fund due to emotional execution and poor risk scaling.</p>
</div>
</div>

<div className="card-base p-10 flex flex-col sm:flex-row items-center gap-8 group reveal stagger-2">
<div className="flex-shrink-0 w-32 h-32 rounded-full border border-[#2A2A2A] flex items-center justify-center relative">
<svg className="absolute inset-0 w-full h-full -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="#1A1A1A" strokeWidth="4"></circle>
<circle className="transition-all duration-1000" cx="50" cy="50" fill="none" r="45" stroke="#00DC82" stroke-dasharray="283" stroke-dashoffset="198" strokeWidth="4"></circle>
</svg>
<span className="font-display text-2xl font-medium tracking-tighter text-accent">30%</span>
</div>
<div>
<h3 className="font-heading font-medium text-[1.25rem] mb-2 tracking-tight">The Institutional Edge</h3>
<p className="text-text-secondary text-[0.875rem]">Institutions dedicate 30% of their focus to entries, and 70% to risk management. We flip your perspective to match.</p>
</div>
</div>
</div>
</div>
</section>
<div className="max-w-[clamp(65rem,90vw,90rem)] mx-auto px-container"><div className="scroll-line"></div></div>

<section className="py-section max-w-[clamp(65rem,90vw,90rem)] mx-auto px-container" id="curriculum">
<div className="mb-16 md:flex justify-between items-end reveal">
<div className="max-w-2xl">
<span className="section-marker">/03/</span>
<h2 className="font-display font-medium text-[clamp(2rem,3vw,3rem)] tracking-tight leading-[1.1] mb-4">
                    The Curriculum
                </h2>
<p className="text-text-secondary">From foundational mechanics to advanced quantitative logic. Everything required to architect and manage a resilient portfolio.</p>
</div>
<div className="mt-6 md:mt-0">
<a className="btn-secondary group" href="#">
<iconify-icon icon="solar:document-linear" width="20"></iconify-icon> Syllabus PDF
                </a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">

<div className="md:col-span-7 card-base p-8 lg:p-12 reveal stagger-1 group relative overflow-hidden flex flex-col justify-between min-h-[18rem]">
<div className="absolute right-[-5%] top-[-10%] opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
<iconify-icon icon="solar:chart-square-bold" width="240"></iconify-icon>
</div>
<div className="mb-8">
<span className="font-mono text-accent text-[0.75rem] border border-accent/20 px-2 py-1 rounded">Module 01</span>
</div>
<div>
<h3 className="font-heading font-medium text-[clamp(1.25rem,1.5vw,1.5rem)] mb-3 tracking-tight">Market Mechanics</h3>
<p className="text-text-secondary text-[0.875rem] max-w-md">Understand exactly what moves asset prices. Master liquidity pools, order flow dynamics, and structural market shifts.</p>
</div>
</div>

<div className="md:col-span-5 card-base p-8 lg:p-12 reveal stagger-2 group flex flex-col justify-between min-h-[18rem]">
<div className="mb-8 flex justify-between items-start">
<span className="font-mono text-text-secondary text-[0.75rem]">Module 02</span>
<iconify-icon className="text-text-secondary group-hover:text-accent transition-colors" icon="solar:pie-chart-2-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="font-heading font-medium text-[clamp(1.25rem,1.5vw,1.5rem)] mb-3 tracking-tight">Portfolio Architecture</h3>
<p className="text-text-secondary text-[0.875rem]">Build portfolios that survive drawdowns using institutional asset allocation techniques.</p>
</div>
</div>

<div className="md:col-span-5 card-base p-8 lg:p-12 reveal stagger-3 group flex flex-col justify-between min-h-[18rem]">
<div className="mb-8 flex justify-between items-start">
<span className="font-mono text-text-secondary text-[0.75rem]">Module 03</span>
<iconify-icon className="text-text-secondary group-hover:text-accent transition-colors" icon="solar:earth-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="font-heading font-medium text-[clamp(1.25rem,1.5vw,1.5rem)] mb-3 tracking-tight">Macro Synthesis</h3>
<p className="text-text-secondary text-[0.875rem]">Turn global news into setups. Connect interest rates and inflation to long-term asset performance.</p>
</div>
</div>

<div className="md:col-span-7 card-base p-8 lg:p-12 reveal stagger-4 group relative overflow-hidden flex flex-col justify-between min-h-[18rem] border-accent/20 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,220,130,0.05)_0%,transparent_60%)]">
<div className="mb-8">
<span className="font-mono text-accent text-[0.75rem] border border-accent/20 bg-accent/5 px-2 py-1 rounded">Module 04</span>
</div>
<div className="flex justify-between items-end">
<div className="max-w-md">
<h3 className="font-heading font-medium text-[clamp(1.25rem,1.5vw,1.5rem)] mb-3 tracking-tight">Algorithmic Risk</h3>
<p className="text-text-secondary text-[0.875rem]">Remove human error entirely. Build automated risk-parity models and position sizing calculators based on volatility metrics.</p>
</div>
<div className="hidden sm:block">
<iconify-icon className="text-accent/50" icon="solar:shield-check-linear" width="48"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-section bg-background">
<div className="max-w-[clamp(65rem,90vw,90rem)] mx-auto px-container">
<div className="relative rounded-2xl overflow-hidden card-base p-0 min-h-[35rem] flex items-center group reveal">

<div className="absolute inset-0 w-full h-full">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80')] bg-cover bg-center grayscale contrast-125 transition-transform duration-1000 group-hover:scale-[1.03]"></div>

<div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 lg:via-background/40 to-transparent"></div>
<div className="absolute inset-0 bg-accent mix-blend-overlay opacity-10"></div>
</div>

<div className="relative z-10 p-8 lg:p-16 max-w-2xl">
<span className="section-marker">/04/</span>
<h2 className="font-display font-medium text-[clamp(2rem,3vw,3rem)] tracking-tight leading-[1.1] mb-6">
                        Taught By<br/>Wall Street Veterans.
                    </h2>
<p className="text-text-secondary text-[1rem] mb-10 max-w-lg">
                        Learn directly from former quantitative analysts who have overseen $500M+ in assets. No academic theories—only battle-tested logic that survives contact with live markets.
                    </p>
<div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 max-w-md">
<div>
<div className="font-display text-[2rem] font-medium counter tracking-tighter" data-suffix="+" data-target="15">0+</div>
<div className="font-mono text-[0.75rem] text-text-secondary uppercase mt-1">Years Trading</div>
</div>
<div>
<div className="font-display text-[2rem] font-medium counter tracking-tighter" data-prefix="$" data-suffix="M" data-target="500">$0M</div>
<div className="font-mono text-[0.75rem] text-text-secondary uppercase mt-1">Assets Managed</div>
</div>
</div>
<div className="mt-10 inline-flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
<div className="w-2 h-2 rounded-full bg-accent"></div>
<span className="font-mono text-[0.75rem] uppercase tracking-widest text-text-secondary">Lead Strategist: E. Vance</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-section max-w-[clamp(65rem,90vw,90rem)] mx-auto px-container" id="results">
<div className="text-center mb-16 reveal">
<span className="section-marker mx-auto">/05/</span>
<h2 className="font-display font-medium text-[clamp(2rem,3vw,3rem)] tracking-tight mb-4">Student Outcomes.</h2>
<p className="text-text-secondary max-w-xl mx-auto">See how quantitative logic translates to actual portfolio growth.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
<div className="card-base p-8 reveal stagger-1">
<div className="flex items-start justify-between mb-6">
<div>
<div className="font-medium text-[0.875rem] tracking-tight">Marcus T.</div>
<div className="text-[0.75rem] text-text-secondary">Software Engineer</div>
</div>
<div className="text-right">
<div className="font-mono text-[0.75rem] text-accent">YTD</div>
<div className="font-display font-medium text-[1.25rem] counter tracking-tighter" data-prefix="+" data-suffix="%" data-target="145.50">+0.00%</div>
</div>
</div>
<p className="text-text-secondary text-[0.875rem] leading-relaxed">"The clarity provided is unmatched. I stopped looking at Twitter for stock picks and started building systematic frameworks. It paid for itself in week two."</p>
</div>
<div className="card-base p-8 md:mt-12 reveal stagger-2 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-20"></div>
<div className="flex items-start justify-between mb-6">
<div>
<div className="font-medium text-[0.875rem] tracking-tight">Sarah J.</div>
<div className="text-[0.75rem] text-text-secondary">Consultant</div>
</div>
<div className="text-right">
<div className="font-mono text-[0.75rem] text-accent">YTD</div>
<div className="font-display font-medium text-[1.25rem] counter tracking-tighter" data-prefix="+" data-suffix="%" data-target="82.40">+0.00%</div>
</div>
</div>
<p className="text-text-secondary text-[0.875rem] leading-relaxed">"I had capital but no conviction. The portfolio architecture module completely shifted how I view risk. Highly analytical, absolutely no fluff."</p>
</div>
<div className="card-base p-8 md:mt-6 reveal stagger-3">
<div className="flex items-start justify-between mb-6">
<div>
<div className="font-medium text-[0.875rem] tracking-tight">David C.</div>
<div className="text-[0.75rem] text-text-secondary">Director</div>
</div>
<div className="text-right">
<div className="font-mono text-[0.75rem] text-accent">YTD</div>
<div className="font-display font-medium text-[1.25rem] counter tracking-tighter" data-prefix="+" data-suffix="%" data-target="210.15">+0.00%</div>
</div>
</div>
<p className="text-text-secondary text-[0.875rem] leading-relaxed">"Aggressive, precise, and practical. The macro synthesis techniques alone gave me an edge I didn't think was possible for retail participants."</p>
</div>
</div>
</section>

<section className="py-section max-w-[clamp(65rem,90vw,90rem)] mx-auto px-container relative" id="pricing">
<div className="text-center mb-16 reveal">
<span className="section-marker mx-auto">/06/</span>
<h2 className="font-display font-medium text-[clamp(2rem,3vw,3rem)] tracking-tight mb-4">Invest In Your Future.</h2>
<p className="text-text-secondary">One single payment. Lifetime access. Zero hidden fees.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto relative z-10 items-center">

<div className="card-base p-8 reveal stagger-1 flex flex-col h-full bg-surface/50 border-transparent">
<div className="font-mono text-[0.875rem] text-text-secondary uppercase mb-2">Basic</div>
<div className="font-display text-[2.5rem] font-medium mb-6 tracking-tighter">$499</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-[0.875rem] text-text-secondary"><iconify-icon className="text-text-secondary mt-0.5 text-[1.125rem]" icon="solar:check-circle-linear"></iconify-icon> Core Curriculum (4 Modules)</li>
<li className="flex items-start gap-3 text-[0.875rem] text-text-secondary"><iconify-icon className="text-text-secondary mt-0.5 text-[1.125rem]" icon="solar:check-circle-linear"></iconify-icon> Standard Workbooks</li>
</ul>
<a className="btn-secondary w-full border-transparent bg-white/5 hover:bg-white/10" href="#">Select Basic</a>
</div>

<div className="card-base p-10 border-accent relative transform md:scale-105 z-20 reveal stagger-2 bg-[radial-gradient(ellipse_at_top,rgba(0,220,130,0.08)_0%,transparent_80%)] shadow-[0_0_3rem_-1rem_rgba(0,220,130,0.15)] flex flex-col h-full">

<div className="absolute inset-0 border border-accent/30 rounded-2xl pointer-events-none mix-blend-overlay"></div>
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-primary font-mono text-[0.75rem] px-4 py-1 font-semibold rounded-full tracking-widest uppercase">Popular</div>
<div className="text-center mb-6">
<div className="font-mono text-[0.875rem] text-accent uppercase mb-2">Pro Cohort</div>
<div className="font-display text-[3.5rem] font-medium tracking-tighter">$999</div>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-[0.875rem]"><iconify-icon className="text-accent mt-0.5 text-[1.125rem]" icon="solar:check-circle-bold"></iconify-icon> <span className="font-medium text-white">Full 6-Module Curriculum</span></li>
<li className="flex items-start gap-3 text-[0.875rem] text-text-secondary"><iconify-icon className="text-accent mt-0.5 text-[1.125rem]" icon="solar:check-circle-linear"></iconify-icon> Advanced Algo Templates</li>
<li className="flex items-start gap-3 text-[0.875rem] text-text-secondary"><iconify-icon className="text-accent mt-0.5 text-[1.125rem]" icon="solar:check-circle-linear"></iconify-icon> Private Network Access</li>
<li className="flex items-start gap-3 text-[0.875rem] text-text-secondary"><iconify-icon className="text-accent mt-0.5 text-[1.125rem]" icon="solar:check-circle-linear"></iconify-icon> Monthly Live Strategy Calls</li>
</ul>
<a className="btn-primary w-full shadow-[0_0_1.5rem_rgba(0,220,130,0.15)] py-4" href="#">Enroll Now</a>
</div>

<div className="card-base p-8 reveal stagger-3 flex flex-col h-full bg-surface/50 border-transparent">
<div className="font-mono text-[0.875rem] text-text-secondary uppercase mb-2">Elite</div>
<div className="font-display text-[2.5rem] font-medium mb-6 tracking-tighter">$2,499</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-[0.875rem] text-text-secondary"><iconify-icon className="text-text-secondary mt-0.5 text-[1.125rem]" icon="solar:check-circle-linear"></iconify-icon> Everything in Pro</li>
<li className="flex items-start gap-3 text-[0.875rem] text-text-secondary"><iconify-icon className="text-text-secondary mt-0.5 text-[1.125rem]" icon="solar:check-circle-linear"></iconify-icon> 1-on-1 Portfolio Review</li>
<li className="flex items-start gap-3 text-[0.875rem] text-text-secondary"><iconify-icon className="text-text-secondary mt-0.5 text-[1.125rem]" icon="solar:check-circle-linear"></iconify-icon> Direct Slack Access</li>
</ul>
<a className="btn-secondary w-full border-transparent bg-white/5 hover:bg-white/10" href="#">Apply For Elite</a>
</div>
</div>
</section>

<section className="py-section mt-section relative overflow-hidden border-t border-[#2A2A2A]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,220,130,0.05)_0%,transparent_60%)]"></div>
<div className="max-w-[clamp(65rem,90vw,90rem)] mx-auto px-container text-center relative z-10 reveal">
<h2 className="font-display font-medium text-[clamp(2.5rem,5vw,4.5rem)] tracking-tighter leading-none mb-6">Ready To Build Wealth?</h2>
<p className="text-text-secondary text-[clamp(1rem,1.2vw,1.125rem)] mb-10 max-w-2xl mx-auto">Stop waiting on the sidelines. The market doesn't reward hesitation.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="btn-primary px-10 py-4 text-[1rem]" href="#pricing">Secure Your Spot</a>
</div>
</div>
</section>

<footer className="bg-primary pt-20 pb-10 relative overflow-hidden border-t border-[#1A1A1A]">

<div className="absolute bottom-[-15%] left-1/2 transform -translate-x-1/2 text-[clamp(10rem,25vw,30rem)] font-display font-medium leading-none opacity-[0.015] pointer-events-none tracking-tighter w-full text-center whitespace-nowrap select-none">
            VESTL
        </div>
<div className="max-w-[clamp(65rem,90vw,90rem)] mx-auto px-container relative z-10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
<div className="md:col-span-4">
<a className="font-display font-medium tracking-tighter text-[1.5rem] uppercase mb-6 block text-white" href="#">VESTL</a>
<p className="text-text-secondary text-[0.875rem] max-w-[25ch] leading-relaxed">Invest With Precision.<br/>Ignore The Noise.</p>
</div>
<div className="md:col-span-2">
<h4 className="font-mono text-[0.75rem] uppercase tracking-widest text-text-secondary mb-6">Navigation</h4>
<ul className="space-y-3 text-[0.875rem] font-medium tracking-tight">
<li><a className="hover:text-accent transition-colors" href="#curriculum">Curriculum</a></li>
<li><a className="hover:text-accent transition-colors" href="#results">Outcomes</a></li>
<li><a className="hover:text-accent transition-colors" href="#pricing">Enroll</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="font-mono text-[0.75rem] uppercase tracking-widest text-text-secondary mb-6">Legal</h4>
<ul className="space-y-3 text-[0.875rem] text-text-secondary">
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div className="md:col-span-4">
<h4 className="font-mono text-[0.75rem] uppercase tracking-widest text-text-secondary mb-6">Intelligence Brief</h4>
<form className="flex gap-2" onsubmit="event.preventDefault();">
<input className="bg-surface/50 border border-[#2A2A2A] rounded p-3 text-[0.875rem] focus:outline-none focus:border-accent transition-colors w-full" placeholder="Email Address" type="email"/>
<button className="bg-white text-black px-4 rounded font-medium text-[0.875rem] hover:bg-gray-200 transition-colors" type="submit">Join</button>
</form>
<a className="mt-6 flex items-center gap-2 text-[0.875rem] text-text-secondary hover:text-accent transition-colors group w-max" href="#">
                        Follow on X <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div className="border-t border-[#1A1A1A] pt-8 flex flex-col md:flex-row items-center justify-between text-[0.75rem] text-text-secondary font-mono">
<div>Vestl © 2024</div>
<div className="mt-4 md:mt-0 opacity-50">Systematic Architecture</div>
</div>
</div>
</footer>



    </>
  );
}
