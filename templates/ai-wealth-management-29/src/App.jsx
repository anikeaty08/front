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



tailwind.config = {
theme: {
extend: {
fontFamily: {
display: ['Cabinet Grotesk', 'sans-serif'],
body: ['DM Sans', 'sans-serif'],
mono: ['Geist Mono', 'monospace'],
},
colors: {
bg: '#080808',
'bg-alt': '#0c0c0f',
'bg-deep': '#0a0a0d',
surface: '#101014',
primary: '#f0f0ee',
secondary: '#4a4a55',
accent: '#C4B5FD',
'accent-dark': '#6B5CE7',
},
animation: {
'marquee': 'marquee 40s linear infinite',
'marquee-reverse': 'marquee-reverse 40s linear infinite',
'ticker': 'ticker 25s linear infinite',
'spin-slow': 'spin 22s linear infinite',
'spin-reverse-slow': 'spin-reverse 14s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' } },
'marquee-reverse': { '0%': { transform: 'translateX(-50%)' }, '100%': { transform: 'translateX(0%)' } },
ticker: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' } },
'spin-reverse': { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(-360deg)' } }
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- 1. Canvas Voronoi/Plasma Simulation ---
        const canvas = document.getElementById('heroCanvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let mouse = { x: null, y: null };

        function initCanvas() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            particles = [];
            const count = Math.min(60, Math.floor((width * height) / 20000));
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    baseOp: Math.random() > 0.8 ? 0.45 : 0.09,
                    fill: Math.random() > 0.9 ? true : false
                });
            }
        }

        window.addEventListener('resize', initCanvas);
        window.addEventListener('mousemove', e => { mouse.x = e.x; mouse.y = e.y; });
        window.addEventListener('mouseout', () => { mouse.x = null; mouse.y = null; });

        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            
            // Draw connections (pseudo-voronoi edges)
            for (let i = 0; i < particles.length; i++) {
                let p1 = particles[i];
                p1.x += p1.vx; p1.y += p1.vy;
                
                // Bounce
                if (p1.x < 0 || p1.x > width) p1.vx *= -1;
                if (p1.y < 0 || p1.y > height) p1.vy *= -1;

                // Mouse interaction (lerp)
                if (mouse.x) {
                    const dx = mouse.x - p1.x;
                    const dy = mouse.y - p1.y;
                    const dist = Math.sqrt(dx*dx + dy*dy);
                    if (dist < 160) {
                        p1.x += dx * 0.02;
                        p1.y += dy * 0.02;
                    }
                }

                for (let j = i + 1; j < particles.length; j++) {
                    let p2 = particles[j];
                    const dist = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
                    
                    if (dist < 180) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        const opacity = (1 - dist/180) * p1.baseOp;
                        ctx.strokeStyle = `rgba(196,181,253, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();

                        // Occasional fill (simulating cell fill)
                        if (p1.fill && dist < 100) {
                            ctx.fillStyle = 'rgba(196,181,253, 0.025)';
                            ctx.fill();
                        }
                    }
                }
            }
            requestAnimationFrame(animateCanvas);
        }
        initCanvas();
        animateCanvas();

        // --- 2. Scroll Reveal & Count Up ---
        const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Trigger Count Up
                    const counters = entry.target.querySelectorAll('.count-up');
                    counters.forEach(counter => {
                        const target = parseFloat(counter.getAttribute('data-target'));
                        const dec = parseInt(counter.getAttribute('data-decimals') || 0);
                        let start = 0;
                        const duration = 1800;
                        const startTime = performance.now();

                        function updateCount(currentTime) {
                            const elapsed = currentTime - startTime;
                            const progress = Math.min(elapsed / duration, 1);
                            // Ease out expo
                            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                            const current = start + (target - start) * easeProgress;
                            
                            counter.innerText = current.toFixed(dec);
                            if (progress < 1) requestAnimationFrame(updateCount);
                        }
                        requestAnimationFrame(updateCount);
                        counter.classList.remove('count-up'); // Prevent re-trigger
                    });

                    // DNA Ring Animation
                    const dnaRing = entry.target.querySelector('svg .dna-segment');
                    if(dnaRing && !entry.target.hasAttribute('data-animated')) {
                         const segments = entry.target.querySelectorAll('.dna-segment');
                         segments.forEach((seg, i) => {
                             setTimeout(() => {
                                 seg.style.transition = 'stroke-dashoffset 1.4s cubic-bezier(0.2, 0.8, 0.2, 1)';
                                 seg.style.strokeDashoffset = '0';
                             }, i * 120);
                         });
                         entry.target.setAttribute('data-animated', 'true');
                    }

                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

        // --- 3. 3D Tilt Effect on Cards ---
        document.querySelectorAll('.tilt-card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = `rotateX(0deg) rotateY(0deg)`;
            });
        });

        // --- 4. Easter Egg ---
        const footerBrand = document.getElementById('footer-brand');
        const footerRing = document.getElementById('footer-ring');
        if(footerBrand && footerRing) {
            footerBrand.addEventListener('mouseenter', () => footerRing.style.opacity = '1');
            footerBrand.addEventListener('mouseleave', () => footerRing.style.opacity = '0');
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
      

<div className="noise-overlay"></div>
<div className="grid-bg fixed inset-0 z-[-1]"></div>

<canvas className="fixed inset-0 z-[-1] opacity-60" id="heroCanvas"></canvas>

<nav className="fixed top-0 w-full z-40 backdrop-blur-xl bg-bg/80 border-b border-white/5 transition-all duration-300 px-[clamp(1.5rem,5vw,5rem)] py-4 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">

<svg className="w-8 h-8 group-hover:scale-105 transition-transform" viewbox="0 0 32 32">
<g className="animate-spin-slow group-hover:[animation-duration:11s]" transform-origin="16 16">
<path d="M 16 3 A 13 13 0 1 1 5.9 24.2" fill="none" stroke="#f0f0ee" strokeLinecap="round" strokeWidth="2.5"></path>
<circle cx="5.9" cy="24.2" fill="#C4B5FD" r="2.5"></circle>
</g>
<g className="animate-spin-reverse-slow group-hover:[animation-duration:7s]" transform-origin="16 16">
<path d="M 16 9 A 7 7 0 1 0 19.5 9.9" fill="none" stroke="#4a4a55" strokeLinecap="round" strokeWidth="1"></path>
</g>
</svg>
<span className="font-display font-medium text-lg tracking-tight">Vela</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-secondary">
<a className="nav-link hover:text-primary transition-colors" href="#">Portfolio</a>
<a className="nav-link hover:text-primary transition-colors" href="#">Intelligence</a>
<a className="nav-link hover:text-primary transition-colors" href="#">Allocations</a>
<a className="nav-link hover:text-primary transition-colors" href="#">Pricing</a>
<a className="nav-link hover:text-primary transition-colors" href="#">Docs</a>
</div>
<div className="flex items-center gap-6">
<a className="text-sm font-medium btn-08 hidden sm:block" href="#">Sign in</a>
<a className="text-sm font-medium btn-05 px-5 py-2.5 rounded-sm" href="#">Start Free</a>
</div>
</nav>

<section className="relative pt-32 pb-20 px-[clamp(1.5rem,5vw,5rem)] min-h-[90vh] flex items-center">
<div className="aurora-bg"></div>
<div className="max-w-[clamp(20rem,90vw,80rem)] mx-auto w-full flex flex-col lg:flex-row items-center gap-16 relative z-10">

<div className="w-full lg:w-[48%] flex flex-col items-start reveal-up stagger-1">
<h1 className="font-display font-bold text-[clamp(3.25rem,7vw,6.75rem)] leading-[0.9] tracking-tight mb-6">
                    Wealth managed by <br/><span className="font-normal text-white/90">INTELLIGENCE</span>,<br/>not instinct.
                </h1>
<p className="text-secondary text-lg sm:text-xl max-w-xl leading-relaxed mb-10">
                    Vela models every allocation, stress-tests every position, and surfaces opportunities your advisor missed.
                </p>
<div className="flex flex-wrap items-center gap-4 mb-14">
<a className="btn-05 text-sm font-medium px-6 py-3.5 rounded-sm bg-surface" href="#">Start Free — No card required</a>
<a className="btn-08 text-sm font-medium px-2 py-2 text-secondary flex items-center gap-2" href="#">See Live Demo <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon></a>
</div>
<div className="flex items-center gap-8 text-xs font-mono text-secondary border-t border-white/5 pt-6 w-full max-w-md">
<div><span className="text-primary block text-sm mb-0.5">$4.2B</span> AUM</div>
<div className="w-px h-6 bg-white/5"></div>
<div><span className="text-primary block text-sm mb-0.5">847</span> Portfolios</div>
<div className="w-px h-6 bg-white/5"></div>
<div><span className="text-accent block text-sm mb-0.5">+18.4%</span> Avg YTD</div>
</div>
</div>

<div className="w-full lg:w-[52%] reveal-up stagger-2 perspective-[2000px]">
<div className="relative bg-surface border border-white/5 rounded-xl shadow-[0_40px_120px_rgba(0,0,0,0.6)] overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">

<div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-[#101014]/50">
<div className="flex items-center gap-4">
<div className="w-5 h-5 rounded-full border border-white/10 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
</div>
<div className="flex gap-4 text-xs font-medium text-secondary">
<span>Overview</span>
<span className="text-primary relative after:content-[''] after:absolute after:-bottom-[17px] after:left-0 after:w-full after:h-[2px] after:bg-accent">AI Signals <span className="ml-1 px-1.5 py-0.5 bg-accent/15 text-accent rounded text-[10px]">3</span></span>
<span>Portfolio</span>
</div>
</div>
</div>

<div className="p-6">

<div className="grid grid-cols-2 gap-4 mb-6">
<div className="p-4 bg-bg rounded-lg border border-white/5">
<div className="text-xs font-mono text-secondary mb-2">Net Worth</div>
<div className="font-display font-bold text-2xl tracking-tight">$2,847,340</div>
<div className="text-xs font-mono text-accent mt-1 flex items-center gap-1">▲ +6.2%</div>
</div>
<div className="p-4 bg-bg rounded-lg border border-white/5 relative overflow-hidden">
<div className="text-xs font-mono text-secondary mb-2">AI Alpha</div>
<div className="font-display font-bold text-2xl tracking-tight text-white">+4.7%</div>
<div className="text-xs font-mono text-accent mt-1 flex items-center gap-1">▲ +0.9%</div>

<svg className="absolute bottom-2 right-2 w-16 h-8" viewbox="0 0 64 32">
<path className="spark-up" d="M0 24 Q 10 10, 20 20 T 40 10 T 64 4" strokeWidth="1"></path>
</svg>
</div>
</div>

<div className="border border-white/5 rounded-lg bg-bg overflow-hidden text-sm">
<div className="grid grid-cols-4 gap-2 p-3 border-b border-white/5 text-xs font-mono text-secondary">
<div>Asset</div>
<div>Value</div>
<div>7D</div>
<div>Signal</div>
</div>
<div className="grid grid-cols-4 gap-2 p-3 border-b border-white/5 items-center bg-accent/5">
<div className="font-medium">AAPL</div>
<div className="font-mono">$344,528</div>
<div className="font-mono text-accent text-xs">▲ +3.4%</div>
<div className="flex items-center gap-1.5 text-xs text-green-400"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> Accumulate</div>
</div>
<div className="grid grid-cols-4 gap-2 p-3 items-center opacity-70">
<div>GLD</div>
<div className="font-mono">$207,856</div>
<div className="font-mono text-red-400 text-xs">▼ -0.8%</div>
<div className="flex items-center gap-1.5 text-xs text-red-400"><div className="w-1.5 h-1.5 rounded-full bg-red-400"></div> Reduce</div>
</div>
</div>
</div>

<div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-30 pointer-events-none">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="#C4B5FD" stroke-dasharray="146 250" strokeLinecap="round" strokeWidth="8"></circle>
<circle cx="50" cy="50" fill="none" r="40" stroke="rgba(255,255,255,0.5)" stroke-dasharray="55 250" stroke-dashoffset="-150" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 bg-bg-alt border-y border-white/5 overflow-hidden relative">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg-alt to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg-alt to-transparent z-10 pointer-events-none"></div>
<div className="flex w-[200%] animate-marquee opacity-30 invert brightness-0 gap-16 items-center">
<span className="font-display font-bold text-2xl tracking-tight shrink-0">Fidelity</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">Vanguard</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">BlackRock</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">Goldman Sachs</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">Betterment</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">Wealthfront</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">Interactive Brokers</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">Morningstar</span>

<span className="font-display font-bold text-2xl tracking-tight shrink-0">Fidelity</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">Vanguard</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">BlackRock</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">Goldman Sachs</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">Betterment</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">Wealthfront</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">Interactive Brokers</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">Morningstar</span>
</div>
<div className="flex w-[200%] animate-marquee-reverse opacity-30 invert brightness-0 gap-16 items-center mt-6 ml-[-20%]">
<span className="font-display font-bold text-2xl tracking-tight shrink-0">Bloomberg</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">Refinitiv</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">Fidelity</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">Vanguard</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">BlackRock</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">Goldman Sachs</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">Betterment</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">Wealthfront</span>

<span className="font-display font-bold text-2xl tracking-tight shrink-0">Bloomberg</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">Refinitiv</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">Fidelity</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">Vanguard</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">BlackRock</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">Goldman Sachs</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">Betterment</span>
<span className="font-display font-bold text-2xl tracking-tight shrink-0">Wealthfront</span>
</div>
</section>

<section className="py-32 px-[clamp(1.5rem,5vw,5rem)] bg-bg-alt">
<div className="max-w-[clamp(20rem,90vw,80rem)] mx-auto">
<div className="text-xs font-mono text-secondary tracking-widest mb-6 reveal-up">/ THE STATUS QUO</div>
<h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] tracking-tight max-w-2xl leading-tight mb-20 reveal-up">Your wealth deserves more than a quarterly call.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group perspective-[1000px] reveal-up stagger-1">
<div className="tilt-card bg-surface border border-white/5 rounded-xl p-8 h-full hover:border-white/10 group-hover:shadow-2xl group-hover:shadow-accent/5">
<div className="w-10 h-10 rounded bg-bg border border-white/5 flex items-center justify-center mb-8 text-secondary group-hover:text-accent transition-colors">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl tracking-tight mb-4">Human advisors react. AI anticipates.</h3>
<p className="text-secondary text-sm leading-relaxed">Data shows advisors lag market signals by avg 11 days. Vela processes 2,400 signals/hour, reacting to regime shifts before they manifest in your statements.</p>
</div>
</div>

<div className="group perspective-[1000px] reveal-up stagger-2">
<div className="tilt-card bg-surface border border-white/5 rounded-xl p-8 h-full hover:border-white/10 group-hover:shadow-2xl group-hover:shadow-accent/5">
<div className="w-10 h-10 rounded bg-bg border border-white/5 flex items-center justify-center mb-8 text-secondary group-hover:text-accent transition-colors">
<iconify-icon icon="solar:wallet-money-linear" width="20"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl tracking-tight mb-4">Fees erode compounding.</h3>
<p className="text-secondary text-sm leading-relaxed">A 1% AUM fee on $1M over 20 years equals $430,000 lost to management. Vela charges a flat $49/month, ensuring your alpha stays in your portfolio.</p>
</div>
</div>

<div className="group perspective-[1000px] reveal-up stagger-3">
<div className="tilt-card bg-surface border border-white/5 rounded-xl p-8 h-full hover:border-white/10 group-hover:shadow-2xl group-hover:shadow-accent/5">
<div className="w-10 h-10 rounded bg-bg border border-white/5 flex items-center justify-center mb-8 text-secondary group-hover:text-accent transition-colors">
<iconify-icon icon="solar:eye-closed-linear" width="20"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl tracking-tight mb-4">Blind spots compound.</h3>
<p className="text-secondary text-sm leading-relaxed">71% of HNW individuals hold undetected factor concentrations across fragmented accounts. Vela cross-correlates all holdings in real-time.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-[clamp(1.5rem,5vw,5rem)] bg-bg border-t border-white/5">
<div className="max-w-[clamp(20rem,90vw,80rem)] mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 reveal-up">
<div>
<div className="text-xs font-mono text-secondary tracking-widest mb-6">/ VELA INTELLIGENCE</div>
<h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] tracking-tight max-w-2xl leading-tight">See your wealth the way a quant fund does.</h2>
</div>
<a className="btn-03 px-6 py-3 bg-surface border border-white/5 text-sm font-medium inline-flex items-center gap-2 w-fit" href="#">Explore Models <iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon></a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-auto lg:h-[32rem]">

<div className="lg:col-span-3 bg-surface border border-white/5 rounded-2xl p-8 relative overflow-hidden group reveal-up">
<div className="absolute top-0 right-0 p-6">
<div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full text-xs font-mono text-accent">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon> AI Alpha +4.7%
                        </div>
</div>
<h3 className="font-display font-medium text-2xl tracking-tight mb-2">Portfolio DNA</h3>
<p className="text-secondary text-sm max-w-sm mb-12">Real-time breakdown of structural allocation, cross-referenced against 40 years of macro cycles.</p>

<div className="flex items-center justify-center relative w-60 h-60 mx-auto group-hover:scale-105 transition-transform duration-700">

<div className="absolute inset-0 rounded-full border border-white/5"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
<span className="font-display font-bold text-3xl tracking-tight">$2.85M</span>
<span className="font-mono text-[10px] text-secondary">Total AUM</span>
</div>
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 240 240">

<circle className="dna-segment cursor-crosshair transition-all duration-300 hover:stroke-width-[12px] hover:stroke-accent" cx="120" cy="120" fill="none" r="100" stroke="#C4B5FD" stroke-dasharray="366.3 628" stroke-dashoffset="628" strokeLinecap="round" strokeWidth="8"></circle>

<circle className="dna-segment cursor-crosshair transition-all duration-300 hover:stroke-width-[12px]" cx="120" cy="120" fill="none" r="100" stroke="rgba(255,255,255,0.5)" stroke-dasharray="138.8 628" stroke-dashoffset="628" strokeLinecap="round" strokeWidth="8"></circle>

<circle className="dna-segment cursor-crosshair transition-all duration-300 hover:stroke-width-[12px]" cx="120" cy="120" fill="none" r="100" stroke="rgba(196,181,253,0.4)" stroke-dasharray="74.1 628" stroke-dashoffset="628" strokeLinecap="round" strokeWidth="8"></circle>

<circle className="dna-segment cursor-crosshair transition-all duration-300 hover:stroke-width-[12px]" cx="120" cy="120" fill="none" r="100" stroke="rgba(255,255,255,0.2)" stroke-dasharray="48.9 628" stroke-dashoffset="628" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
</div>

<div className="absolute bottom-0 left-0 w-full h-9 bg-bg-alt border-t border-white/5 flex items-center ticker-container overflow-hidden">
<div className="flex animate-ticker whitespace-nowrap text-[11px] font-mono gap-8 w-[200%] cursor-default">
<span className="hover:text-primary transition-colors hover:scale-105 inline-block">AAPL <span className="text-green-400">+3.4% ▲</span></span>
<span className="hover:text-primary transition-colors hover:scale-105 inline-block">BTC <span className="text-green-400">+8.1% ▲</span></span>
<span className="hover:text-primary transition-colors hover:scale-105 inline-block">EURUSD <span className="text-red-400">-0.3% ▼</span></span>
<span className="hover:text-primary transition-colors hover:scale-105 inline-block">SPY <span className="text-green-400">+1.1% ▲</span></span>
<span className="hover:text-primary transition-colors hover:scale-105 inline-block">GLD <span className="text-red-400">-0.8% ▼</span></span>
<span className="hover:text-primary transition-colors hover:scale-105 inline-block">NVDA <span className="text-green-400">+5.6% ▲</span></span>

<span className="hover:text-primary transition-colors hover:scale-105 inline-block">AAPL <span className="text-green-400">+3.4% ▲</span></span>
<span className="hover:text-primary transition-colors hover:scale-105 inline-block">BTC <span className="text-green-400">+8.1% ▲</span></span>
<span className="hover:text-primary transition-colors hover:scale-105 inline-block">EURUSD <span className="text-red-400">-0.3% ▼</span></span>
<span className="hover:text-primary transition-colors hover:scale-105 inline-block">SPY <span className="text-green-400">+1.1% ▲</span></span>
<span className="hover:text-primary transition-colors hover:scale-105 inline-block">GLD <span className="text-red-400">-0.8% ▼</span></span>
<span className="hover:text-primary transition-colors hover:scale-105 inline-block">NVDA <span className="text-green-400">+5.6% ▲</span></span>
</div>
</div>
</div>

<div className="lg:col-span-2 flex flex-col gap-6 h-full">

<div className="bg-surface border border-white/5 rounded-2xl p-8 flex-1 relative overflow-hidden group reveal-up stagger-1">
<div className="w-8 h-8 rounded bg-bg border border-white/5 flex items-center justify-center mb-6 text-secondary">
<iconify-icon icon="solar:radar-linear" width="16"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl tracking-tight mb-2">Regime Detection</h3>
<p className="text-secondary text-sm mb-6">Macro flags update daily based on yield curves and volatility.</p>
<div className="bg-bg border border-white/5 rounded-lg p-4 font-mono text-sm flex items-center justify-between">
<span className="text-secondary">Current Regime</span>
<span className="text-accent flex items-center gap-2">Soft Landing <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow"></span></span>
</div>
</div>

<div className="bg-surface border border-white/5 rounded-2xl p-8 flex-1 relative overflow-hidden group reveal-up stagger-2">
<div className="w-8 h-8 rounded bg-bg border border-white/5 flex items-center justify-center mb-6 text-secondary">
<iconify-icon icon="solar:leaf-linear" width="16"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl tracking-tight mb-2">Tax-Loss Harvesting</h3>
<p className="text-secondary text-sm mb-6">Automated routing preserved capital in 2024.</p>
<div className="text-4xl font-display font-bold tracking-tight text-white flex items-baseline gap-1">
<span className="text-accent">$</span><span className="count-up" data-target="12400">0</span>
<span className="text-xs font-mono font-normal text-secondary ml-2">Avg saved/user</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-[clamp(1.5rem,5vw,5rem)] bg-bg-deep border-t border-white/5">
<div className="max-w-[clamp(20rem,90vw,80rem)] mx-auto reveal-up">
<div className="text-xs font-mono text-secondary tracking-widest mb-6 text-center">/ LIVE PLATFORM</div>
<h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] tracking-tight text-center mb-16">One screen. Complete clarity.</h2>

<div className="w-full bg-surface border border-white/8 rounded-xl shadow-[0_60px_200px_rgba(0,0,0,0.7)] overflow-hidden">

<div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-bg/50">
<div className="flex items-center gap-10">

<div className="flex items-center gap-2">
<svg className="w-5 h-5" viewbox="0 0 32 32">
<path d="M 16 3 A 13 13 0 1 1 5.9 24.2" fill="none" stroke="#f0f0ee" strokeLinecap="round" strokeWidth="2.5"></path>
<circle cx="5.9" cy="24.2" fill="#C4B5FD" r="2.5"></circle>
<path d="M 16 9 A 7 7 0 1 0 19.5 9.9" fill="none" stroke="#4a4a55" strokeLinecap="round" strokeWidth="1"></path>
</svg>
<span className="font-display font-medium text-sm">Vela</span>
</div>

<div className="hidden md:flex gap-6 text-sm font-medium text-secondary">
<span className="hover:text-primary cursor-pointer transition-colors">Overview</span>
<span className="hover:text-primary cursor-pointer transition-colors">Portfolio</span>
<span className="hover:text-primary cursor-pointer transition-colors">Allocations</span>
<span className="text-primary relative cursor-pointer after:content-[''] after:absolute after:-bottom-[21px] after:left-0 after:w-full after:h-[2px] after:bg-accent flex items-center gap-2">AI Signals <span className="px-1.5 py-0.5 bg-accent/15 text-accent rounded text-[10px] leading-none">3</span></span>
<span className="hover:text-primary cursor-pointer transition-colors">Reports</span>
<span className="hover:text-primary cursor-pointer transition-colors">Tax</span>
</div>
</div>

<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded flex items-center justify-center border border-white/8 text-secondary hover:text-primary cursor-pointer transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="16"></iconify-icon>
</div>
<div className="w-8 h-8 rounded flex items-center justify-center text-secondary hover:text-primary cursor-pointer transition-colors relative">
<iconify-icon icon="solar:bell-bing-linear" width="18"></iconify-icon>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-accent rounded-full animate-pulse-slow"></span>
</div>
<div className="w-7 h-7 rounded bg-[#1c1c1e] text-[10px] font-mono flex items-center justify-center ml-2 border border-white/10">CL</div>
</div>
</div>

<div className="p-8">

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
<div className="p-5 bg-bg rounded-lg border border-white/5 relative">
<div className="text-xs font-mono text-secondary mb-2">Net Worth</div>
<div className="font-display font-bold text-2xl tracking-tight mb-1">$2,847,340</div>
<div className="text-xs font-mono text-accent">▲ +6.2%</div>
</div>
<div className="p-5 bg-bg rounded-lg border border-white/5 relative">
<div className="text-xs font-mono text-secondary mb-2">YTD Return</div>
<div className="font-display font-bold text-2xl tracking-tight mb-1">+18.4%</div>
<div className="text-xs font-mono text-accent">▲ +3.1%</div>
</div>
<div className="p-5 bg-bg rounded-lg border border-white/5 relative">
<div className="text-xs font-mono text-secondary mb-2">AI Alpha</div>
<div className="font-display font-bold text-2xl tracking-tight mb-1">+4.7%</div>
<div className="text-xs font-mono text-accent">▲ +0.9%</div>
</div>
<div className="p-5 bg-bg rounded-lg border border-white/5 relative">
<div className="text-xs font-mono text-secondary mb-2">Risk Score</div>
<div className="font-display font-bold text-2xl tracking-tight mb-1">34<span className="text-secondary text-base">/100</span></div>
<div className="text-xs font-mono text-secondary">▼ -2pts</div>
</div>
</div>

<div className="w-full h-64 border border-white/5 bg-bg rounded-lg mb-8 relative overflow-hidden flex flex-col justify-between p-4">

<div className="absolute left-4 top-4 bottom-8 flex flex-col justify-between text-[10px] font-mono text-secondary z-10">
<span>$3.0M</span>
<span>$2.7M</span>
<span>$2.4M</span>
<span>$2.1M</span>
</div>

<div className="absolute inset-x-12 inset-y-6 flex flex-col justify-between z-0">
<div className="w-full h-px bg-white/[0.03]"></div>
<div className="w-full h-px bg-white/[0.03]"></div>
<div className="w-full h-px bg-white/[0.03]"></div>
<div className="w-full h-px bg-white/[0.03]"></div>
</div>

<div className="absolute inset-x-12 inset-y-6 z-0">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">

<path className="graph-area-fill" d="M0,80 Q20,70 40,60 T70,40 T100,20 L100,100 L0,100 Z"></path>

<path d="M0,90 L20,85 L40,75 L60,70 L80,60 L100,55" fill="none" stroke="rgba(255,255,255,0.25)" stroke-dasharray="4,4" strokeWidth="1.5"></path>

<path d="M0,80 Q20,70 40,60 T70,40 T100,20" fill="none" stroke="#C4B5FD" strokeWidth="2"></path>
</svg>
</div>

<div className="absolute bottom-2 left-12 right-4 flex justify-between text-[10px] font-mono text-secondary z-10">
<span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span><span>Dec</span>
</div>
</div>

<div className="w-full border border-white/5 rounded-lg overflow-hidden bg-bg">

<div className="grid grid-cols-5 gap-4 p-4 border-b border-white/5 text-xs font-mono text-secondary">
<div>Asset</div>
<div>Allocation %</div>
<div>Value</div>
<div>7D Change</div>
<div>AI Signal</div>
</div>

<div className="grid grid-cols-5 gap-4 p-4 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors text-sm">
<div className="font-medium">Vanguard Total Market</div>
<div className="font-mono">28.4%</div>
<div className="font-mono">$809,045</div>
<div className="font-mono text-green-400 text-xs">▲ +1.2%</div>
<div className="flex items-center gap-2 text-xs text-green-400"><span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Strong Hold</div>
</div>
<div className="grid grid-cols-5 gap-4 p-4 border-b border-white/5 items-center bg-accent/5 hover:bg-accent/10 transition-colors text-sm">
<div className="font-medium text-accent">AAPL</div>
<div className="font-mono">12.1%</div>
<div className="font-mono text-white">$344,528</div>
<div className="font-mono text-accent text-xs">▲ +3.4%</div>
<div className="flex items-center gap-2 text-xs text-accent"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Accumulate</div>
</div>
<div className="grid grid-cols-5 gap-4 p-4 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors text-sm">
<div className="font-medium">T-Bills 3M</div>
<div className="font-mono">9.8%</div>
<div className="font-mono">$278,959</div>
<div className="font-mono text-secondary text-xs">→ 0.0%</div>
<div className="flex items-center gap-2 text-xs text-yellow-400"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span> Hold</div>
</div>
<div className="grid grid-cols-5 gap-4 p-4 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors text-sm">
<div className="font-medium">iShares Gold</div>
<div className="font-mono">7.3%</div>
<div className="font-mono">$207,856</div>
<div className="font-mono text-red-400 text-xs">▼ -0.8%</div>
<div className="flex items-center gap-2 text-xs text-red-400"><span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> Reduce</div>
</div>
<div className="grid grid-cols-5 gap-4 p-4 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors text-sm">
<div className="font-medium">BTC</div>
<div className="font-mono">4.2%</div>
<div className="font-mono">$119,588</div>
<div className="font-mono text-green-400 text-xs">▲ +8.1%</div>
<div className="flex items-center gap-2 text-xs text-yellow-400"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span> Speculative</div>
</div>
<div className="grid grid-cols-5 gap-4 p-4 items-center hover:bg-white/[0.02] transition-colors text-sm">
<div className="font-medium">Berkshire B</div>
<div className="font-mono">6.1%</div>
<div className="font-mono">$173,688</div>
<div className="font-mono text-green-400 text-xs">▲ +0.7%</div>
<div className="flex items-center gap-2 text-xs text-yellow-400"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span> Hold</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-[clamp(1.5rem,5vw,5rem)] bg-bg-alt border-t border-white/5 relative">
<div className="max-w-[clamp(20rem,90vw,80rem)] mx-auto">
<div className="text-xs font-mono text-secondary tracking-widest mb-6 text-center reveal-up">/ THREE STEPS</div>
<h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] tracking-tight text-center mb-24 reveal-up">From open to optimised in 4 minutes.</h2>
<div className="flex flex-col md:flex-row items-center relative gap-8 md:gap-0">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0"></div>

<div className="flex-1 w-full bg-bg border border-white/5 rounded-xl p-8 relative z-10 reveal-up stagger-1 md:mr-4">
<div className="text-xs font-mono text-accent mb-4">Step 01</div>
<h3 className="font-display font-medium text-xl tracking-tight mb-2">Connect</h3>
<p className="text-secondary text-sm">OAuth with 12,000+ brokerages via Plaid. Avg connection time 47s. Secure read-only access.</p>
</div>

<div className="hidden md:flex w-8 shrink-0 items-center justify-center text-secondary relative z-10 bg-bg-alt reveal-up stagger-2">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>

<div className="flex-1 w-full bg-bg border border-white/5 rounded-xl p-8 relative z-10 reveal-up stagger-2 mx-0 md:mx-4">
<div className="text-xs font-mono text-accent mb-4">Step 02</div>
<h3 className="font-display font-medium text-xl tracking-tight mb-2">Analyse</h3>
<p className="text-secondary text-sm">Vela AI runs 340 risk checks, identifies 23 avg portfolio anomalies per user across sectors and factors.</p>
</div>

<div className="hidden md:flex w-8 shrink-0 items-center justify-center text-secondary relative z-10 bg-bg-alt reveal-up stagger-3">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>

<div className="flex-1 w-full bg-bg border border-white/5 rounded-xl p-8 relative z-10 reveal-up stagger-3 md:ml-4">
<div className="text-xs font-mono text-accent mb-4">Step 03</div>
<h3 className="font-display font-medium text-xl tracking-tight mb-2">Act</h3>
<p className="text-secondary text-sm">One-click rebalancing suggestions or full auto-pilot mode. Execute trades without leaving Vela.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-[clamp(1.5rem,5vw,5rem)] bg-bg border-t border-white/5">
<div className="max-w-[clamp(20rem,90vw,80rem)] mx-auto">
<div className="text-xs font-mono text-secondary tracking-widest mb-6 reveal-up">/ USER RESULTS</div>
<h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] tracking-tight max-w-2xl leading-tight mb-16 reveal-up">Vela doesn't manage money.<br/>It multiplies clarity.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 perspective-[2000px]">

<div className="group h-48 perspective-[1000px] reveal-up stagger-1 cursor-pointer">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-x-180">

<div className="absolute inset-0 backface-hidden bg-surface border border-white/5 rounded-xl p-8 flex flex-col justify-between">
<p className="text-sm italic text-primary/90">"Vela flagged a $340K factor overlap I'd been ignoring for 3 years."</p>
<div className="text-xs text-secondary mt-4">— Marcus Hellström, Head of Family Office</div>
</div>

<div className="absolute inset-0 backface-hidden rotate-x-180 bg-accent/5 border border-accent/20 rounded-xl p-8 flex flex-col justify-center items-center text-center">
<div className="font-display font-bold text-2xl text-accent mb-1">+7.2%</div>
<div className="text-xs font-mono text-secondary">Outperformance vs Benchmark (12mo)</div>
</div>
</div>
</div>

<div className="group h-48 perspective-[1000px] reveal-up stagger-2 cursor-pointer">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-x-180">

<div className="absolute inset-0 backface-hidden bg-surface border border-white/5 rounded-xl p-8 flex flex-col justify-between">
<p className="text-sm italic text-primary/90">"First time I've understood my own portfolio in 6 years of investing."</p>
<div className="text-xs text-secondary mt-4">— Camille Renard, Entrepreneur</div>
</div>

<div className="absolute inset-0 backface-hidden rotate-x-180 bg-accent/5 border border-accent/20 rounded-xl p-8 flex flex-col justify-center items-center text-center">
<div className="font-display font-bold text-2xl text-accent mb-1">0%</div>
<div className="text-xs font-mono text-secondary">Advisor fees paid since joining</div>
</div>
</div>
</div>

<div className="group h-48 perspective-[1000px] reveal-up stagger-3 cursor-pointer">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-x-180">

<div className="absolute inset-0 backface-hidden bg-surface border border-white/5 rounded-xl p-8 flex flex-col justify-between">
<p className="text-sm italic text-primary/90">"The AI signal on NVDA in January made my entire year."</p>
<div className="text-xs text-secondary mt-4">— Daniel Osei, Engineer/Investor</div>
</div>

<div className="absolute inset-0 backface-hidden rotate-x-180 bg-accent/5 border border-accent/20 rounded-xl p-8 flex flex-col justify-center items-center text-center">
<div className="font-display font-bold text-2xl text-accent mb-1">Top 5%</div>
<div className="text-xs font-mono text-secondary">Alpha generation cohort</div>
</div>
</div>
</div>

<div className="group h-48 perspective-[1000px] reveal-up stagger-4 cursor-pointer">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-x-180">

<div className="absolute inset-0 backface-hidden bg-surface border border-white/5 rounded-xl p-8 flex flex-col justify-between">
<p className="text-sm italic text-primary/90">"We run Vela for 4 family members. $12.4M monitored. No advisor on retainer."</p>
<div className="text-xs text-secondary mt-4">— Sofia Nakamura, VC Partner</div>
</div>

<div className="absolute inset-0 backface-hidden rotate-x-180 bg-accent/5 border border-accent/20 rounded-xl p-8 flex flex-col justify-center items-center text-center">
<div className="font-display font-bold text-2xl text-accent mb-1">$12.4M</div>
<div className="text-xs font-mono text-secondary">AUM consolidated on Vela</div>
</div>
</div>
</div>
</div>
</div>
<style>
            .transform-style-3d { transform-style: preserve-3d; }
            .backface-hidden { backface-visibility: hidden; }
            .rotate-x-180 { transform: rotateX(180deg); }
        </style>
</section>

<section className="py-32 px-[clamp(1.5rem,5vw,5rem)] bg-bg-deep border-t border-white/5 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-[clamp(20rem,90vw,80rem)] mx-auto relative z-10 text-center">
<div className="text-xs font-mono text-secondary tracking-widest mb-16">/ TRACK RECORD</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12">
<div className="reveal-up stagger-1">
<div className="font-display font-bold text-[clamp(2.5rem,5vw,4rem)] text-accent tracking-tight leading-none mb-2">
                        $<span className="count-up" data-decimals="1" data-target="4.2">0</span>B
                    </div>
<div className="text-xs font-mono text-secondary uppercase">AUM Monitored</div>
</div>
<div className="reveal-up stagger-2">
<div className="font-display font-bold text-[clamp(2.5rem,5vw,4rem)] text-accent tracking-tight leading-none mb-2">
                        +<span className="count-up" data-decimals="1" data-target="18.4">0</span>%
                    </div>
<div className="text-xs font-mono text-secondary uppercase">Avg YTD Return</div>
</div>
<div className="reveal-up stagger-3">
<div className="font-display font-bold text-[clamp(2.5rem,5vw,4rem)] text-accent tracking-tight leading-none mb-2">
<span className="count-up" data-target="847">0</span>
</div>
<div className="text-xs font-mono text-secondary uppercase">Portfolios Active</div>
</div>
<div className="reveal-up stagger-4">
<div className="font-display font-bold text-[clamp(2.5rem,5vw,4rem)] text-accent tracking-tight leading-none mb-2">
                        $<span className="count-up" data-decimals="1" data-target="12.4">0</span>k
                    </div>
<div className="text-xs font-mono text-secondary uppercase">Avg Fee Savings</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-[clamp(1.5rem,5vw,5rem)] bg-bg-alt border-t border-white/5">
<div className="max-w-[clamp(20rem,90vw,80rem)] mx-auto">
<div className="text-xs font-mono text-secondary tracking-widest mb-6 text-center reveal-up">/ TRANSPARENT PRICING</div>
<h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] tracking-tight text-center mb-16 reveal-up">Less than a lunch with your advisor.<br/>Every month.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="conic-border p-8 flex flex-col reveal-up stagger-1">
<h3 className="font-display font-medium text-xl mb-1">Starter</h3>
<div className="text-secondary text-sm mb-6">For building the foundation.</div>
<div className="mb-8"><span className="font-display font-bold text-4xl">$29</span><span className="text-secondary text-sm">/mo</span></div>
<ul className="flex flex-col gap-4 text-sm text-primary/80 mb-10 flex-1">
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> 1 Portfolio</li>
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> Up to $250K AUM</li>
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> Basic AI Signals</li>
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> Manual Rebalancing</li>
</ul>
<a className="btn-03 block text-center w-full py-3 bg-bg border border-white/5 text-sm font-medium" href="#">Start Free Trial</a>
</div>

<div className="conic-border p-8 flex flex-col relative reveal-up stagger-2 transform md:-translate-y-4 shadow-2xl shadow-accent/5" style={{'--angle': '180deg', opacity: '1'}}>
<style>
                        /* Keep border slightly visible for middle tier */
                        .middle-tier::before { opacity: 0.3; }
                        .middle-tier:hover::before { opacity: 1; }
                    </style>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-bg font-mono text-[10px] font-bold px-3 py-1 rounded tracking-wider uppercase">Most Popular</div>
<h3 className="font-display font-medium text-xl mb-1 text-accent">Growth</h3>
<div className="text-secondary text-sm mb-6">For the serious optimizer.</div>
<div className="mb-8"><span className="font-display font-bold text-4xl">$79</span><span className="text-secondary text-sm">/mo</span></div>
<ul className="flex flex-col gap-4 text-sm text-primary/80 mb-10 flex-1">
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> 5 Portfolios</li>
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> Unlimited AUM</li>
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> Regime Detection</li>
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> Automated Tax Harvesting</li>
</ul>
<a className="btn-05 block text-center w-full py-3 bg-surface text-sm font-medium" href="#">Start Free Trial</a>
</div>

<div className="conic-border p-8 flex flex-col reveal-up stagger-3">
<h3 className="font-display font-medium text-xl mb-1">Private</h3>
<div className="text-secondary text-sm mb-6">For family offices &amp; UHNW.</div>
<div className="mb-8"><span className="font-display font-bold text-4xl">$249</span><span className="text-secondary text-sm">/mo</span></div>
<ul className="flex flex-col gap-4 text-sm text-primary/80 mb-10 flex-1">
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> Unlimited Portfolios</li>
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> Custom AI Models</li>
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> White-glove Onboarding</li>
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> Full API Access</li>
</ul>
<a className="btn-03 block text-center w-full py-3 bg-bg border border-white/5 text-sm font-medium" href="#">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="py-32 px-[clamp(1.5rem,5vw,5rem)] bg-bg border-t border-white/5">
<div className="max-w-[clamp(20rem,50vw,48rem)] mx-auto">
<div className="text-xs font-mono text-secondary tracking-widest mb-6 reveal-up">/ QUESTIONS</div>
<h2 className="font-display font-bold text-[clamp(2rem,3vw,2.5rem)] tracking-tight mb-12 reveal-up">Clarity, expanded.</h2>
<div className="flex flex-col gap-2 reveal-up stagger-1">

<details className="group bg-surface border border-white/5 rounded-lg overflow-hidden transition-colors hover:border-white/10">
<summary className="flex items-center justify-between p-6 cursor-pointer text-sm font-medium">
                        Is my brokerage data secure?
                        <iconify-icon className="text-secondary group-open:rotate-45 transition-transform" icon="solar:add-circle-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-secondary leading-relaxed border-t border-white/5 pt-4 mt-2 bg-bg/30">
                        Vela uses bank-level 256-bit encryption and partners with Plaid for read-only access to your accounts. We cannot move your money without your explicit 2FA execution.
                    </div>
</details>

<details className="group bg-surface border border-white/5 rounded-lg overflow-hidden transition-colors hover:border-white/10">
<summary className="flex items-center justify-between p-6 cursor-pointer text-sm font-medium">
                        How does AI Alpha work?
                        <iconify-icon className="text-secondary group-open:rotate-45 transition-transform" icon="solar:add-circle-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-secondary leading-relaxed border-t border-white/5 pt-4 mt-2 bg-bg/30">
                        Our models analyze 2,400+ data points per hour including institutional flow, macro indicators, and technical regimes to generate probability scores for specific assets.
                    </div>
</details>

<details className="group bg-surface border border-white/5 rounded-lg overflow-hidden transition-colors hover:border-white/10">
<summary className="flex items-center justify-between p-6 cursor-pointer text-sm font-medium">
                        Can I use Vela alongside my existing advisor?
                        <iconify-icon className="text-secondary group-open:rotate-45 transition-transform" icon="solar:add-circle-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-secondary leading-relaxed border-t border-white/5 pt-4 mt-2 bg-bg/30">
                        Absolutely. 40% of our users run Vela as a secondary check against their advisor's strategies. It's an excellent tool to keep wealth managers accountable.
                    </div>
</details>

<details className="group bg-surface border border-white/5 rounded-lg overflow-hidden transition-colors hover:border-white/10">
<summary className="flex items-center justify-between p-6 cursor-pointer text-sm font-medium">
                        How is this different from Betterment?
                        <iconify-icon className="text-secondary group-open:rotate-45 transition-transform" icon="solar:add-circle-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-secondary leading-relaxed border-t border-white/5 pt-4 mt-2 bg-bg/30">
                        Robo-advisors put you in a static MPT bucket. Vela dynamically adjusts to macro regimes, scores individual stock picks, and identifies cross-account blind spots for HNW profiles.
                    </div>
</details>
</div>
</div>
</section>

<footer className="pt-24 pb-12 px-[clamp(1.5rem,5vw,5rem)] bg-bg border-t border-accent/20 relative overflow-hidden">

<div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 opacity-0 pointer-events-none transition-opacity duration-700" id="footer-ring">
<svg className="w-full h-full animate-spin-slow" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" opacity="0.2" r="40" stroke="#C4B5FD" stroke-dasharray="10 20" strokeWidth="2"></circle>
<circle cx="50" cy="50" fill="none" opacity="0.4" r="30" stroke="#6B5CE7" stroke-dasharray="5 10" strokeWidth="1"></circle>
</svg>
</div>
<div className="max-w-[clamp(20rem,90vw,80rem)] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8 justify-between relative z-10">

<div className="w-full lg:w-[55%]">
<h3 className="font-display font-medium text-3xl tracking-tight mb-8">Your best trade is knowing more.</h3>
<div className="flex flex-wrap items-center gap-4">
<a className="btn-08 text-sm font-medium text-accent pb-1 border-b-2 border-accent" href="#">Start Your Free Trial</a>
<span className="text-xs text-secondary font-mono">No credit card. 14-day full access.</span>
</div>
</div>

<div className="w-full lg:w-[45%] grid grid-cols-2 sm:grid-cols-3 gap-8">
<div className="flex flex-col gap-3 text-sm text-secondary">
<span className="text-primary font-medium mb-2">Platform</span>
<a className="hover:text-primary transition-colors w-fit" href="#">Portfolio</a>
<a className="hover:text-primary transition-colors w-fit" href="#">AI Signals</a>
<a className="hover:text-primary transition-colors w-fit" href="#">Allocations</a>
<a className="hover:text-primary transition-colors w-fit" href="#">Tax Tools</a>
</div>
<div className="flex flex-col gap-3 text-sm text-secondary">
<span className="text-primary font-medium mb-2">Company</span>
<a className="hover:text-primary transition-colors w-fit" href="#">About</a>
<a className="hover:text-primary transition-colors w-fit" href="#">Blog</a>
<a className="hover:text-primary transition-colors w-fit" href="#">Careers</a>
<a className="hover:text-primary transition-colors w-fit" href="#">Security</a>
</div>
<div className="col-span-2 sm:col-span-1 flex flex-col gap-3 text-sm text-secondary">
<span className="text-primary font-medium mb-2">Legal</span>
<a className="hover:text-primary transition-colors w-fit" href="#">Privacy</a>
<a className="hover:text-primary transition-colors w-fit" href="#">Terms</a>
<a className="hover:text-primary transition-colors w-fit" href="#">GDPR</a>
</div>
</div>
</div>
<div className="max-w-[clamp(20rem,90vw,80rem)] mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2 cursor-crosshair" id="footer-brand">
<svg className="w-5 h-5" viewbox="0 0 32 32">
<path d="M 16 3 A 13 13 0 1 1 5.9 24.2" fill="none" stroke="#4a4a55" strokeLinecap="round" strokeWidth="2.5"></path>
<circle cx="5.9" cy="24.2" fill="#4a4a55" r="2.5"></circle>
<path d="M 16 9 A 7 7 0 1 0 19.5 9.9" fill="none" stroke="#2a2a35" strokeLinecap="round" strokeWidth="1"></path>
</svg>
<span className="font-display font-medium text-sm text-secondary">Vela © 2024</span>
</div>
<div className="text-[10px] font-mono text-secondary/50">ARCHETYPE 14 · SYSTEM ONLINE</div>
</div>
</footer>



    </>
  );
}
