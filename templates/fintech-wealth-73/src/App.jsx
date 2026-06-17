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
colors: {
q: {
void: '#050505',
graphite: '#1A1A1A',
neon: '#00FF66',
bg: '#000000',
surface: '#0A0A0A',
border: '#333333',
text: '#FFFFFF',
muted: '#888888'
}
},
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
display: ['Inter', 'system-ui', 'sans-serif'] // Using Inter tight as Geist alternative
},
spacing: {
section: 'clamp(6rem, 12vw, 14rem)'
},
animation: {
'marquee': 'marquee 30s linear infinite',
'marquee-fast': 'marquee 15s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' }
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



                            for(let i=0; i<100; i++) document.write('<div class="grid-bg-cell"></div>');
                        


            document.addEventListener('scroll', () => {
                const cards = document.querySelectorAll('.security-card');
                cards.forEach((card, index) => {
                    const rect = card.getBoundingClientRect();
                    const viewHeight = window.innerHeight;
                    // Only apply effect if in viewport
                    if(rect.top < viewHeight && rect.bottom > 0) {
                        const progress = (rect.top / viewHeight); // 1 at bottom, 0 at top
                        const rotateX = (progress - 0.5) * 10; // -5deg to 5deg
                        card.style.transform = `rotateX(${rotateX}deg) translateZ(0)`;
                    }
                });
            });
        


        // 1. WebGL Background (Canvas 2D Approximation for performance)
        const canvas = document.getElementById('bg-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        const spacing = 40;

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initParticles();
        }

        function initParticles() {
            particles = [];
            // Disable or simplify on mobile based on width
            if (width < 768) return; 

            const cols = Math.floor(width / spacing);
            const rows = Math.floor(height / spacing);

            for (let i = 0; i <= cols; i++) {
                for (let j = 0; j <= rows; j++) {
                    particles.push({
                        x: i * spacing,
                        y: j * spacing,
                        baseAlpha: Math.random() * 0.3 + 0.1,
                        timeOffset: Math.random() * Math.PI * 2
                    });
                }
            }
        }

        let scrollY = window.scrollY;
        window.addEventListener('scroll', () => { scrollY = window.scrollY; });

        function draw(time) {
            ctx.clearRect(0, 0, width, height);
            
            if (width >= 768) {
                ctx.fillStyle = '#FFFFFF';
                particles.forEach(p => {
                    // Pulse based on time and scroll position
                    const pulse = Math.sin(time * 0.001 + p.timeOffset) * 0.5 + 0.5;
                    // Scrolled down makes grid slightly brighter
                    const scrollEffect = Math.min(scrollY / 1000, 0.5);
                    const alpha = p.baseAlpha * pulse * (0.5 + scrollEffect);
                    
                    ctx.globalAlpha = alpha;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
                    ctx.fill();
                });
                
                // Draw faint connecting lines sometimes
                ctx.strokeStyle = '#00FF66';
                ctx.lineWidth = 0.5;
                if(Math.random() > 0.95) {
                   const p1 = particles[Math.floor(Math.random() * particles.length)];
                   const p2 = particles[Math.floor(Math.random() * particles.length)];
                   if(Math.hypot(p1.x - p2.x, p1.y - p2.y) < spacing * 3) {
                       ctx.globalAlpha = 0.1;
                       ctx.beginPath();
                       ctx.moveTo(p1.x, p1.y);
                       ctx.lineTo(p2.x, p2.y);
                       ctx.stroke();
                   }
                }
            }
            requestAnimationFrame(draw);
        }

        window.addEventListener('resize', resize);
        resize();
        requestAnimationFrame(draw);


        // 2. Cryptographic Text Scramble on Hover
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>";
        
        document.querySelectorAll('.scramble-hover').forEach(el => {
            el.dataset.original = el.innerText;
            el.addEventListener('mouseenter', () => scrambleText(el));
        });

        function scrambleText(element) {
            let iterations = 0;
            const original = element.dataset.original;
            
            clearInterval(element.scrambleInterval);
            
            element.scrambleInterval = setInterval(() => {
                element.innerText = original.split("").map((letter, index) => {
                    if (index < iterations) return original[index];
                    if (letter === " ") return " ";
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join("");
                
                if (iterations >= original.length) clearInterval(element.scrambleInterval);
                iterations += 1/3;
            }, 30);
        }

        // 3. FAQ Decryption Effect
        document.querySelectorAll('details').forEach(details => {
            details.addEventListener('click', (e) => {
                if(!details.open) {
                    const contentDiv = details.querySelector('.faq-content');
                    if(!contentDiv.dataset.original) {
                        contentDiv.dataset.original = contentDiv.innerText;
                    }
                    // Temporarily set to scramble, then resolve
                    let iterations = 0;
                    const original = contentDiv.dataset.original;
                    const interval = setInterval(() => {
                        contentDiv.innerText = original.split("").map((l, i) => {
                            if(i < iterations) return original[i];
                            return chars[Math.floor(Math.random() * chars.length)];
                        }).join("");
                        
                        if(iterations >= original.length) clearInterval(interval);
                        iterations += original.length / 10; // Fast resolve
                    }, 20);
                }
            });
        });

        // 4. Yield Calculator Logic
        const formatEuro = (num) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(num);
        
        const sliderCapital = document.getElementById('slider-capital');
        const sliderMonthly = document.getElementById('slider-monthly');
        const sliderYears = document.getElementById('slider-years');
        
        const valCapital = document.getElementById('val-capital');
        const valMonthly = document.getElementById('val-monthly');
        const valYears = document.getElementById('val-years');
        const valTotal = document.getElementById('val-total');
        
        const graphArea = document.getElementById('graph-area');
        const graphLine = document.getElementById('graph-line');
        const graphNode = document.getElementById('graph-node');
        const graphBaselineText = document.getElementById('graph-baseline');
        const graphYieldText = document.getElementById('graph-yield');

        function updateCalc() {
            const P = parseFloat(sliderCapital.value);
            const PMT = parseFloat(sliderMonthly.value);
            const t = parseFloat(sliderYears.value);
            const r = 0.084; // 8.4% return
            const n = 12; // Monthly compounding

            // Compound interest formula with monthly contributions
            // A = P(1 + r/n)^(nt) + PMT * [ (1 + r/n)^(nt) - 1 ] / (r/n)
            const amount = P * Math.pow(1 + r/n, n*t) + PMT * (Math.pow(1 + r/n, n*t) - 1) / (r/n);
            const baseline = P + (PMT * 12 * t);
            const yieldGained = amount - baseline;

            valCapital.innerText = formatEuro(P);
            valMonthly.innerText = formatEuro(PMT);
            valYears.innerText = t + " YEARS";
            valTotal.innerText = formatEuro(amount);
            
            graphBaselineText.innerText = formatEuro(baseline);
            graphYieldText.innerText = "+" + formatEuro(yieldGained);

            // Update SVG Graph dynamically
            // Start at bottom left (0, 100). End at top right (100, Y based on yield ratio)
            // Baseline goes from (0, 100) to (100, baseline_ratio)
            // Projected curve goes from (0, 100) to (100, projected_ratio)
            
            // Normalize height
            const maxVal = amount * 1.1; // Add headroom
            const endY = 100 - (amount / maxVal * 100);
            
            // Generate curve path using quadratic bezier
            const pathD = `M0 100 Q 50 ${100 - ((endY+100)/2) + 10} 100 ${endY}`;
            const pathDArea = `${pathD} L 100 100 Z`;
            
            graphLine.setAttribute('d', pathD);
            graphArea.setAttribute('d', pathDArea);
            graphNode.setAttribute('cy', endY);

            // Trigger scramble on total
            scrambleText(valTotal);
        }

        sliderCapital.addEventListener('input', updateCalc);
        sliderMonthly.addEventListener('input', updateCalc);
        sliderYears.addEventListener('input', updateCalc);

        // Initial call
        updateCalc();

        // 5. Hero Live Ticker Simulation
        const heroTicker = document.getElementById('hero-ticker');
        setInterval(() => {
            let current = parseFloat(heroTicker.innerText.replace(/,/g, ''));
            // Random fluctuation between -5 and +8
            const change = (Math.random() * 13) - 5;
            current += change;
            heroTicker.innerText = new Intl.NumberFormat('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}).format(current);
        }, 2000);

    
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
      

<canvas className="fixed inset-0 z-[-1] w-full h-full opacity-60 pointer-events-none" id="bg-canvas"></canvas>

<div className="fixed inset-0 z-[-1] bg-gradient-to-b from-transparent via-q-bg/80 to-q-bg pointer-events-none"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
<div className="glass-surface border border-q-border rounded-full flex items-center justify-between px-2 py-2 md:px-6 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
<div className="flex items-center gap-3">
<a className="group flex items-center gap-2" href="#">

<svg className="group-hover:animate-pulse" fill="none" height="32" viewbox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10L16 2L30 10V22L16 30L2 22V10Z" stroke="#00FF66" strokelinejoin="bevel" strokewidth="2"></path>
<path d="M16 8V24M8 12L24 20" stroke="#FFFFFF" strokelinejoin="bevel" strokewidth="2"></path>
</svg>
<span className="font-display font-medium text-lg tracking-tight hidden sm:block">QUANTIS</span>
</a>
</div>
<div className="hidden md:flex items-center gap-8 font-mono text-xs text-q-muted">
<a className="hover:text-q-neon transition-colors scramble-hover" data-tooltip="ALGO_ROUTING_ACTIVE" href="#algorithms">[ALGORITHMS]</a>
<a className="hover:text-q-neon transition-colors scramble-hover" data-tooltip="YIELD_CURVE_HIST" href="#performance">[PERFORMANCE]</a>
<a className="hover:text-q-neon transition-colors scramble-hover" data-tooltip="ENCRYPTION_LAYER_4" href="#security">[SECURITY_PROTOCOL]</a>
<a className="hover:text-q-neon transition-colors scramble-hover" data-tooltip="TRANSPARENCY_LEDGER" href="#fees">[FEE_STRUCTURE]</a>
</div>
<div>
<button className="relative px-6 py-2 md:px-8 md:py-3 font-mono text-xs md:text-sm font-semibold text-black bg-q-neon clip-chamfer transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] group overflow-hidden btn-hover-stroke">
<span className="relative z-10">INITIALIZE PORTFOLIO</span>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">

<div className="lg:col-span-7 flex flex-col justify-center relative z-20">
<div className="mb-6 inline-flex self-start">
<span className="font-mono text-xs uppercase tracking-widest text-q-neon border border-q-neon/30 px-2 py-1 bg-q-neon/5 shadow-[0_0_10px_rgba(0,255,102,0.1)] scramble-hover">
                        [SYS_INIT]
                    </span>
</div>
<h1 className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight-display text-white mb-6 uppercase">
                    Compound your wealth.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-q-muted">Crush the baseline.</span>
</h1>
<p className="font-sans text-base md:text-lg text-q-muted max-w-xl leading-relaxed mb-10 border-l border-q-border pl-4">
                    Institutional-grade passive indexing engineered for the European market. Automate your financial trajectory with zero friction and absolute transparency.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
<button className="relative px-8 py-4 font-mono text-sm font-semibold text-black bg-q-neon clip-chamfer transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] group overflow-hidden shadow-[0_0_20px_rgba(0,255,102,0.2)]">
<span className="relative z-10 flex items-center gap-2">
                            Deploy Capital Now
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
</button>
<a className="group font-mono text-sm text-white flex items-center gap-2 relative pb-1" href="#data">
<span className="scramble-hover">View Live Index Data</span>
<iconify-icon className="text-q-neon transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-q-neon transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
<div className="flex items-center gap-3 font-mono text-xs text-q-muted">
<iconify-icon className="text-q-neon" icon="solar:shield-check-linear" width="16"></iconify-icon>
<span className="scramble-hover">FCA &amp; BaFin Regulated. Capital protected up to €100k.</span>
</div>
</div>

<div className="lg:col-span-5 relative mt-12 lg:mt-0 lg:-mr-32 xl:-mr-64 pointer-events-none select-none">

<div className="absolute inset-0 bg-q-neon/5 blur-[100px] rounded-full"></div>
<div className="relative glass-surface border border-q-border rounded-lg shadow-2xl p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-700 ease-out origin-top-left">

<div className="flex justify-between items-center border-b border-q-border/50 pb-4 mb-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-q-neon animate-pulse"></div>
<span className="font-mono text-xs text-q-muted uppercase">Live Terminal // Auth Node 04</span>
</div>
<span className="font-mono text-xs text-white border border-q-border px-2 py-0.5 rounded-sm">V.2.4.1</span>
</div>

<div className="mb-8">
<p className="font-mono text-xs text-q-muted mb-1">AGGREGATE PORTFOLIO VALUE</p>
<div className="font-display font-semibold text-5xl tracking-tight text-white flex items-baseline gap-2">
                            €<span id="hero-ticker">142,854.20</span>
<span className="font-mono text-sm text-q-neon">+12.4% YTD</span>
</div>
</div>

<div className="h-32 w-full border-b border-q-border/50 flex items-end gap-1 mb-6 relative">

<div className="w-full bg-q-surface/50 absolute inset-0 rounded-sm"></div>
<div className="relative z-10 w-full flex items-end justify-between h-full px-1 gap-1">
<div className="w-full bg-q-border h-[20%] transition-all duration-500 hover:bg-white/20"></div>
<div className="w-full bg-q-border h-[25%] transition-all duration-500 hover:bg-white/20"></div>
<div className="w-full bg-q-border h-[22%] transition-all duration-500 hover:bg-white/20"></div>
<div className="w-full bg-q-border h-[35%] transition-all duration-500 hover:bg-white/20"></div>
<div className="w-full bg-q-border h-[30%] transition-all duration-500 hover:bg-white/20"></div>
<div className="w-full bg-q-border h-[45%] transition-all duration-500 hover:bg-white/20"></div>
<div className="w-full bg-q-border h-[40%] transition-all duration-500 hover:bg-white/20"></div>
<div className="w-full bg-q-border h-[60%] transition-all duration-500 hover:bg-white/20"></div>
<div className="w-full bg-q-border h-[55%] transition-all duration-500 hover:bg-white/20"></div>
<div className="w-full bg-q-border h-[70%] transition-all duration-500 hover:bg-white/20"></div>
<div className="w-full bg-q-neon shadow-[0_0_10px_rgba(0,255,102,0.5)] h-[85%] transition-all duration-500"></div>
</div>
</div>

<div className="space-y-3">
<div className="flex justify-between items-center text-sm">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-white text-black flex items-center justify-center font-bold text-xs rounded-sm">Q</div>
<span className="font-mono text-white">Quantis Global Alpha</span>
</div>
<span className="font-mono text-q-muted text-xs">65.4%</span>
</div>
<div className="flex justify-between items-center text-sm">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-q-surface border border-q-border flex items-center justify-center font-bold text-xs text-white rounded-sm">T</div>
<span className="font-mono text-white">Treasury Shield ETF</span>
</div>
<span className="font-mono text-q-muted text-xs">20.1%</span>
</div>
<div className="flex justify-between items-center text-sm">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-q-surface border border-q-border flex items-center justify-center font-bold text-xs text-white rounded-sm">E</div>
<span className="font-mono text-white">Emerging Markets Edge</span>
</div>
<span className="font-mono text-q-muted text-xs">14.5%</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-q-border bg-q-void py-3 overflow-hidden whitespace-nowrap flex relative z-10">

<div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-q-void to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-q-void to-transparent z-10 pointer-events-none"></div>
<div className="animate-marquee flex gap-12 items-center font-mono text-xs uppercase text-q-muted w-[200%]">

<div className="flex items-center gap-12 w-full justify-around">
<span className="flex items-center gap-2"><iconify-icon icon="solar:verified-check-linear"></iconify-icon> BaFin REGULATED LOG_01</span>
<span>AUM: <span className="text-white">€1.2B+</span></span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:shield-network-linear"></iconify-icon> SECURE NODES: <span className="text-white">154,000+</span></span>
<span>YOY AVG: <span className="text-q-neon">+8.4%</span></span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:verified-check-linear"></iconify-icon> FCA COMPLIANT LOG_02</span>
<span>AUM: <span className="text-white">€1.2B+</span></span>
<span>YOY AVG: <span className="text-q-neon">+8.4%</span></span>
</div>

<div className="flex items-center gap-12 w-full justify-around">
<span className="flex items-center gap-2"><iconify-icon icon="solar:verified-check-linear"></iconify-icon> BaFin REGULATED LOG_01</span>
<span>AUM: <span className="text-white">€1.2B+</span></span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:shield-network-linear"></iconify-icon> SECURE NODES: <span className="text-white">154,000+</span></span>
<span>YOY AVG: <span className="text-q-neon">+8.4%</span></span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:verified-check-linear"></iconify-icon> FCA COMPLIANT LOG_02</span>
<span>AUM: <span className="text-white">€1.2B+</span></span>
<span>YOY AVG: <span className="text-q-neon">+8.4%</span></span>
</div>
</div>
</section>

<section className="py-section relative z-10" id="algorithms">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

<div>
<div className="mb-4 inline-flex">
<span className="font-mono text-xs uppercase tracking-widest text-q-neon border border-q-neon/30 px-2 py-1 bg-q-neon/5 scramble-hover">
                            [YIELD_CALC]
                        </span>
</div>
<h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight text-white mb-4">
                        Time is leverage.<br/>Exploit it.
                    </h2>
<p className="font-sans text-base text-q-muted mb-10 max-w-md">
                        Model your decadal growth. Our algorithms continuously rebalance to maximize tax-efficiency and yield.
                    </p>

<div className="space-y-8 p-6 border border-q-border bg-q-surface rounded-lg relative overflow-hidden group">

<div className="absolute -inset-4 bg-q-neon/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full pointer-events-none"></div>
<div className="relative z-10">
<div className="flex justify-between font-mono text-xs mb-3">
<span className="text-q-muted">INITIAL CAPITAL</span>
<span className="text-white scramble-number" id="val-capital">€10,000</span>
</div>
<input className="w-full" id="slider-capital" max="100000" min="1000" step="1000" type="range" value="10000"/>
<div className="flex justify-between font-mono text-[10px] mt-2 text-q-muted/50">
<span>€1K</span><span>€100K</span>
</div>
</div>
<div className="relative z-10">
<div className="flex justify-between font-mono text-xs mb-3">
<span className="text-q-muted">MONTHLY INFLUX</span>
<span className="text-white scramble-number" id="val-monthly">€500</span>
</div>
<input className="w-full" id="slider-monthly" max="5000" min="0" step="100" type="range" value="500"/>
<div className="flex justify-between font-mono text-[10px] mt-2 text-q-muted/50">
<span>€0</span><span>€5K</span>
</div>
</div>
<div className="relative z-10">
<div className="flex justify-between font-mono text-xs mb-3">
<span className="text-q-muted">TIMEFRAME</span>
<span className="text-white scramble-number" id="val-years">10 YEARS</span>
</div>
<input className="w-full" id="slider-years" max="30" min="1" step="1" type="range" value="10"/>
<div className="flex justify-between font-mono text-[10px] mt-2 text-q-muted/50">
<span>1Y</span><span>30Y</span>
</div>
</div>
<div className="pt-6 border-t border-q-border mt-6 relative z-10 flex justify-between items-end">
<div>
<p className="font-mono text-xs text-q-muted mb-1">PROJECTED BALANCE</p>
<p className="font-mono text-3xl font-bold text-q-neon scramble-number" id="val-total">€103,450</p>
</div>
<button className="relative px-6 py-2 font-mono text-xs font-semibold text-black bg-q-neon clip-chamfer transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]">
                                Lock In Strategy
                            </button>
</div>
</div>
</div>

<div className="relative h-[400px] lg:h-[500px] border border-q-border bg-q-void rounded-lg p-6 flex flex-col justify-end overflow-hidden">
<div className="absolute inset-0 grid grid-cols-10 grid-rows-10 opacity-10 pointer-events-none">

<style>
                            .grid-bg-cell { border-right: 1px solid white; border-bottom: 1px solid white; }
                        </style>

</div>

<svg className="absolute bottom-0 left-0 w-full h-[80%] overflow-visible pointer-events-none" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<lineargradient id="grad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#00FF66" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#00FF66" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M0 100 L100 80" fill="none" stroke="#333" stroke-dasharray="2,2" strokeWidth="1"></path>

<path d="M0 100 Q 50 80 100 20 L 100 100 Z" fill="url(#grad)" id="graph-area"></path>

<path className="drop-shadow-[0_0_8px_rgba(0,255,102,0.8)]" d="M0 100 Q 50 80 100 20" fill="none" id="graph-line" stroke="#00FF66" strokeWidth="2"></path>

<circle className="animate-pulse" cx="100" cy="20" fill="#fff" id="graph-node" r="3"></circle>
</svg>

<div className="absolute top-6 right-6 text-right">
<p className="font-mono text-[10px] text-q-muted uppercase tracking-widest">Est. Baseline <span className="text-white" id="graph-baseline">€70,000</span></p>
<p className="font-mono text-[10px] text-q-neon uppercase tracking-widest mt-1">Quantis Yield <span id="graph-yield">+€33,450</span></p>
</div>
</div>
</div>
</div>
</section>

<section className="py-section relative z-10 bg-q-void" id="performance">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<div className="mb-4 inline-flex">
<span className="font-mono text-xs uppercase tracking-widest text-q-neon border border-q-neon/30 px-2 py-1 bg-q-neon/5 scramble-hover">
                        [EXEC_PIPELINE]
                    </span>
</div>
<h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight text-white">
                    Institutional architecture.<br/>Retail access.
                </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[240px]">

<div className="md:col-span-8 border border-q-border bg-q-surface p-8 relative group overflow-hidden transition-colors hover:border-q-neon/50">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-q-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-white mb-6" icon="solar:global-linear" width="24"></iconify-icon>
<h3 className="font-display font-medium text-2xl text-white mb-2">Global Liquidity</h3>
<p className="font-mono text-sm text-q-muted scramble-hover">Fractional shares across 10,000+ global equities.</p>

<div className="absolute bottom-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<div className="flex items-end gap-1 h-16">
<div className="w-2 bg-white h-[20%]"></div>
<div className="w-2 bg-white h-[30%]"></div>
<div className="w-2 bg-white h-[40%]"></div>
<div className="w-2 bg-white h-[25%]"></div>
<div className="w-2 bg-q-neon shadow-[0_0_8px_rgba(0,255,102,0.8)] h-[80%]"></div>
</div>
</div>
</div>

<div className="md:col-span-4 border border-q-border bg-q-surface p-8 relative group overflow-hidden transition-colors hover:border-q-neon/50">
<iconify-icon className="text-white mb-6" icon="solar:shield-warning-linear" width="24"></iconify-icon>
<h3 className="font-display font-medium text-2xl text-white mb-2">Tax-Loss Harvesting</h3>
<p className="font-mono text-sm text-q-muted scramble-hover">Automated offset generation to shield your gains.</p>
</div>

<div className="md:col-span-4 border border-q-border bg-q-surface p-8 relative group overflow-hidden transition-colors hover:border-q-neon/50">
<iconify-icon className="text-white mb-6" icon="solar:wallet-money-linear" width="24"></iconify-icon>
<h3 className="font-display font-medium text-2xl text-white mb-2">0.45% Flat Protocol</h3>
<p className="font-mono text-sm text-q-muted scramble-hover">Zero hidden spreads. Zero withdrawal penalties.</p>
</div>

<div className="md:col-span-4 border border-q-border bg-q-surface p-8 relative group overflow-hidden transition-colors hover:border-q-neon/50">
<iconify-icon className="text-white mb-6" icon="solar:restart-square-linear" width="24"></iconify-icon>
<h3 className="font-display font-medium text-2xl text-white mb-2">Auto-Rebalancing</h3>
<p className="font-mono text-sm text-q-muted scramble-hover">Daily algorithmic drift correction.</p>
</div>

<div className="md:col-span-4 border border-q-border bg-q-surface p-8 relative group overflow-hidden transition-colors hover:border-q-neon/50">
<iconify-icon className="text-white mb-6" icon="solar:chart-square-linear" width="24"></iconify-icon>
<h3 className="font-display font-medium text-2xl text-white mb-2">Yield Optimization</h3>
<p className="font-mono text-sm text-q-muted scramble-hover">Smart dividend reinvestment routing.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 bg-black border-y border-q-border overflow-hidden" id="security">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,26,26,0.8)_0%,rgba(0,0,0,1)_100%)]"></div>
<div className="max-w-7xl mx-auto px-6 relative flex flex-col md:flex-row items-start pt-32 pb-32">

<div className="md:sticky md:top-32 md:w-1/3 mb-16 md:mb-0 pr-8">
<div className="mb-4 inline-flex">
<span className="font-mono text-xs uppercase tracking-widest text-q-neon border border-q-neon/30 px-2 py-1 bg-q-neon/5 scramble-hover">
                        [SEC_AUDIT]
                    </span>
</div>
<h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight text-white mb-6">
                    Paranoia is our baseline.
                </h2>
<p className="font-sans text-base text-q-muted border-l border-q-border pl-4">
                    Bank-grade is obsolete. We utilize cold-storage asset allocation and continuous third-party cryptographic auditing.
                </p>
</div>

<div className="md:w-2/3 space-y-24 md:space-y-48 pb-32 w-full perspective-1000" style={{perspective: '1000px'}}>

<div className="security-card transform-gpu transition-all duration-700 hover:scale-[1.02] bg-q-surface border border-q-border rounded-lg p-6 shadow-2xl relative">
<div className="absolute top-0 right-0 w-24 h-24 bg-q-neon/10 blur-xl rounded-full"></div>
<div className="flex items-center justify-between border-b border-q-border pb-4 mb-6">
<span className="font-mono text-xs text-q-muted">LAYER_01: ASSET VAULT</span>
<span className="font-mono text-[10px] bg-green-900/30 text-q-neon border border-q-neon px-2 py-0.5 rounded-full flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-q-neon animate-pulse"></div>
                            SECURE
                        </span>
</div>
<div className="grid grid-cols-2 gap-4 font-mono text-xs">
<div className="bg-q-void border border-q-border p-4">
<p className="text-q-muted mb-1">COLD STORAGE</p>
<p className="text-white text-lg">99.8%</p>
<p className="text-[10px] text-q-muted mt-2 truncate">SHA-256 HASH VERIFIED</p>
</div>
<div className="bg-q-void border border-q-border p-4">
<p className="text-q-muted mb-1">HOT LIQUIDITY</p>
<p className="text-white text-lg">0.2%</p>
<p className="text-[10px] text-q-muted mt-2 truncate">MULTI-SIG REQUIRED</p>
</div>
</div>
</div>

<div className="security-card transform-gpu transition-all duration-700 hover:scale-[1.02] bg-q-surface border border-q-border rounded-lg p-6 shadow-2xl relative">
<div className="flex items-center justify-between border-b border-q-border pb-4 mb-6">
<span className="font-mono text-xs text-q-muted">LAYER_02: ENCRYPTION</span>
<iconify-icon className="text-white" icon="solar:key-minimalistic-linear"></iconify-icon>
</div>
<div className="space-y-2 font-mono text-[10px]">
<div className="flex justify-between p-2 border border-q-border bg-q-void">
<span className="text-q-muted">CLIENT_KEY_GEN</span>
<span className="text-q-neon scramble-hover">0x7F...3B9A</span>
</div>
<div className="flex justify-between p-2 border border-q-border bg-q-void">
<span className="text-q-muted">ROUTING_ENCRYPT</span>
<span className="text-q-neon scramble-hover">AES-GCM-256</span>
</div>
<div className="flex justify-between p-2 border border-q-border bg-q-void">
<span className="text-q-muted">PFS_HANDSHAKE</span>
<span className="text-white">ACTIVE</span>
</div>
</div>
</div>

<div className="security-card transform-gpu transition-all duration-700 hover:scale-[1.02] bg-q-surface border border-q-border rounded-lg p-6 shadow-2xl relative">
<div className="flex items-center justify-between border-b border-q-border pb-4 mb-4">
<span className="font-mono text-xs text-q-muted">LAYER_03: CONTINUOUS AUDIT</span>
<iconify-icon className="text-white" icon="solar:document-text-linear"></iconify-icon>
</div>

<div className="h-32 bg-q-void border border-q-border p-2 overflow-hidden relative font-mono text-[8px] sm:text-[10px] text-q-muted/50 leading-relaxed">
<div className="animate-marquee-fast flex flex-col absolute top-0 w-full">
<p>&gt; [INFO] Initiating external ledger verification...</p>
<p>&gt; [OK] Block 14,892,001 signature valid.</p>
<p>&gt; [WARN] Slight drift in node 4 latency, adjusting weights.</p>
<p>&gt; [OK] Merkle root matching firm ledger.</p>
<p>&gt; [INFO] Re-running vulnerability heuristic...</p>
<p>&gt; [OK] 0 anomalies detected.</p>
<p>&gt; [INFO] Verification loop reset.</p>

<p>&gt; [INFO] Initiating external ledger verification...</p>
<p>&gt; [OK] Block 14,892,002 signature valid.</p>
</div>
</div>
</div>
</div>
</div>


</section>

<section className="py-section relative z-10 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-12">
<div className="mb-4 inline-flex">
<span className="font-mono text-xs uppercase tracking-widest text-q-neon border border-q-neon/30 px-2 py-1 bg-q-neon/5 scramble-hover">
                    [NODE_CONSENSUS]
                </span>
</div>
<h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight text-white mb-2">
                The smart money is already here.
            </h2>
<p className="font-sans text-base text-q-muted">
                Don't get left behind by legacy banking fees.
            </p>
</div>

<div className="flex gap-6 overflow-x-auto no-scrollbar pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2))] pr-24 pb-12 snap-x">

<div className="min-w-[300px] md:min-w-[400px] bg-q-surface border border-q-border p-8 snap-start relative group">

<div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-q-muted/50"></div>
<div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-q-muted/50"></div>
<p className="font-sans text-base text-white mb-8 leading-relaxed">
                    "Moved €80k from my traditional broker. The algorithmic tax harvesting alone covered the fees in month one."
                </p>
<div className="flex items-center gap-4 border-t border-q-border pt-4">

<div className="w-10 h-10 bg-q-void border border-q-muted flex items-center justify-center font-mono text-xs text-white grayscale contrast-150">JK</div>
<div>
<p className="font-mono text-xs text-white uppercase">J. Kellner</p>
<p className="font-mono text-[10px] text-q-muted uppercase">Berlin, DE</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-q-surface border border-q-border p-8 snap-start relative group">
<div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-q-muted/50"></div>
<div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-q-muted/50"></div>
<p className="font-sans text-base text-white mb-8 leading-relaxed">
                    "The UI is unapologetic. Just raw data and performance. My compounding curve is finally acting like a mathematical truth, not a sales pitch."
                </p>
<div className="flex items-center gap-4 border-t border-q-border pt-4">
<div className="w-10 h-10 bg-q-void border border-q-muted flex items-center justify-center font-mono text-xs text-white grayscale contrast-150">AM</div>
<div>
<p className="font-mono text-xs text-white uppercase">A. Moreau</p>
<p className="font-mono text-[10px] text-q-muted uppercase">Paris, FR</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-q-surface border border-q-border p-8 snap-start relative group">
<div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-q-muted/50"></div>
<div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-q-muted/50"></div>
<p className="font-sans text-base text-white mb-8 leading-relaxed">
                    "Institutional tools were gated for years. Quantis gives me the exact risk-parity routing that family offices use, for 45 bps."
                </p>
<div className="flex items-center gap-4 border-t border-q-border pt-4">
<div className="w-10 h-10 bg-q-void border border-q-muted flex items-center justify-center font-mono text-xs text-white grayscale contrast-150">TS</div>
<div>
<p className="font-mono text-xs text-white uppercase">T. Schmidt</p>
<p className="font-mono text-[10px] text-q-muted uppercase">Zurich, CH</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-section relative z-10 bg-black border-t border-q-border" id="fees">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<div className="mb-4 inline-flex">
<span className="font-mono text-xs uppercase tracking-widest text-q-neon border border-q-neon/30 px-2 py-1 bg-q-neon/5 scramble-hover">
                        [SYS_QUERY]
                    </span>
</div>
<h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight text-white">
                    Interrogate the protocol.
                </h2>
</div>
<div className="space-y-4">

<details className="group bg-q-surface border border-q-border rounded-none" name="faq">
<summary className="flex justify-between items-center font-mono text-sm md:text-base font-medium cursor-pointer list-none p-6 text-white hover:text-q-neon transition-colors faq-trigger">
<span>WHAT IS THE EXACT FEE BREAKDOWN?</span>
<span className="transition group-open:rotate-45 font-light text-xl">+</span>
</summary>
<div className="text-q-muted font-sans text-sm p-6 pt-0 border-t border-q-border/50 leading-relaxed faq-content">
                        A flat 0.45% annual protocol fee. No hidden spreads, no withdrawal penalties, no deposit fees. ETF TERs (Total Expense Ratios) are handled inherently by the underlying assets, averaging 0.12%. We do not take kickbacks from fund providers.
                    </div>
</details>

<details className="group bg-q-surface border border-q-border rounded-none" name="faq">
<summary className="flex justify-between items-center font-mono text-sm md:text-base font-medium cursor-pointer list-none p-6 text-white hover:text-q-neon transition-colors faq-trigger">
<span>HOW IS WITHDRAWAL LIQUIDITY HANDLED?</span>
<span className="transition group-open:rotate-45 font-light text-xl">+</span>
</summary>
<div className="text-q-muted font-sans text-sm p-6 pt-0 border-t border-q-border/50 leading-relaxed faq-content">
                        Your capital is never locked. Sell orders are executed during standard market hours (XETRA/Euronext). Fiat off-ramps settle to your designated SEPA account within T+1 to T+2 business days depending on your banking institution.
                    </div>
</details>

<details className="group bg-q-surface border border-q-border rounded-none" name="faq">
<summary className="flex justify-between items-center font-mono text-sm md:text-base font-medium cursor-pointer list-none p-6 text-white hover:text-q-neon transition-colors faq-trigger">
<span>WHAT ARE THE REGULATORY PROTECTIONS?</span>
<span className="transition group-open:rotate-45 font-light text-xl">+</span>
</summary>
<div className="text-q-muted font-sans text-sm p-6 pt-0 border-t border-q-border/50 leading-relaxed faq-content">
                        We operate under strict BaFin (Germany) and FCA (UK) regulatory frameworks. Your assets are held in segregated accounts at our partner custodian banks, rendering them untouchable in the unlikely event of our insolvency. Cash deposits are protected up to €100,000 by the statutory deposit guarantee scheme.
                    </div>
</details>

<details className="group bg-q-surface border border-q-border rounded-none" name="faq">
<summary className="flex justify-between items-center font-mono text-sm md:text-base font-medium cursor-pointer list-none p-6 text-white hover:text-q-neon transition-colors faq-trigger">
<span>HOW DOES ALGORITHMIC REBALANCING WORK?</span>
<span className="transition group-open:rotate-45 font-light text-xl">+</span>
</summary>
<div className="text-q-muted font-sans text-sm p-6 pt-0 border-t border-q-border/50 leading-relaxed faq-content">
                        The system queries portfolio weights daily. If an asset drifts beyond a 2.5% tolerance threshold from your target allocation, the algorithm auto-generates buy/sell orders utilizing incoming dividends or deposits to minimize tax events, executing only when optimal.
                    </div>
</details>
</div>
</div>
</section>

<footer className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-q-void border-t border-q-border z-10 pt-32">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,102,0.05)_0%,rgba(0,0,0,1)_70%)] pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center text-center w-full px-6 flex-grow justify-center">
<h2 className="font-display font-bold text-[12vw] leading-none tracking-tighter text-white mb-8 opacity-90 drop-shadow-2xl">
                STOP WAITING.
            </h2>
<button className="relative px-12 py-6 font-mono text-base md:text-lg font-bold text-black bg-q-neon clip-chamfer transition-transform duration-300 hover:scale-[1.05] active:scale-[0.95] group overflow-hidden shadow-[0_0_40px_rgba(0,255,102,0.3)] hover:shadow-[0_0_60px_rgba(0,255,102,0.5)] btn-hover-stroke mb-20">
<span className="relative z-10 tracking-widest">INITIALIZE ACCOUNT</span>
</button>
</div>
<div className="w-full max-w-7xl mx-auto px-6 pb-12 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-q-border/50 pt-8 font-mono text-[10px] md:text-xs text-q-muted">
<div className="flex flex-col gap-2">
<span className="text-white mb-2 font-semibold">PROTOCOL</span>
<a className="hover:text-q-neon transition-colors" href="#">Algorithms</a>
<a className="hover:text-q-neon transition-colors" href="#">Yield Data</a>
<a className="hover:text-q-neon transition-colors" href="#">Security</a>
</div>
<div className="flex flex-col gap-2">
<span className="text-white mb-2 font-semibold">COMPANY</span>
<a className="hover:text-q-neon transition-colors" href="#">About</a>
<a className="hover:text-q-neon transition-colors" href="#">Careers [2 Open]</a>
<a className="hover:text-q-neon transition-colors" href="#">Press Kit</a>
</div>
<div className="flex flex-col gap-2">
<span className="text-white mb-2 font-semibold">LEGAL</span>
<a className="hover:text-q-neon transition-colors" href="#">Imprint</a>
<a className="hover:text-q-neon transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-q-neon transition-colors" href="#">Terms of Service</a>
</div>
<div className="flex flex-col gap-2 justify-between">
<div>
<span className="text-white mb-2 font-semibold block">SYSTEM STATUS</span>
<span className="flex items-center gap-2 text-q-neon"><div className="w-1.5 h-1.5 rounded-full bg-q-neon animate-pulse"></div> All Systems Operational</span>
</div>
<div className="mt-4">
<span>© 2024 QUANTIS GMBH</span>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
