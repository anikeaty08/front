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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // 1. Astonishing Canvas Effect: Dot Grid + Falling Data Beams
        const canvas = document.getElementById('bg-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        
        // Grid properties
        const gridSpacing = 35;
        let cols, rows;
        
        // Beams
        const beams = [];
        const numBeams = 15;

        function initCanvas() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            cols = Math.ceil(width / gridSpacing);
            rows = Math.ceil(height / gridSpacing);
            
            beams.length = 0;
            for (let i = 0; i < numBeams; i++) {
                resetBeam(i, true);
            }
        }

        function resetBeam(index, randomY = false) {
            beams[index] = {
                x: Math.floor(Math.random() * cols) * gridSpacing,
                y: randomY ? Math.random() * height : -200,
                length: Math.random() * 200 + 100,
                speed: Math.random() * 3 + 1,
                color: Math.random() > 0.5 ? '#00F0FF' : '#7000FF'
            };
        }

        function animateCanvas() {
            // Dark trail effect for smooth fading
            ctx.fillStyle = 'rgba(5, 5, 10, 0.2)';
            ctx.fillRect(0, 0, width, height);

            // Draw base grid (very dim)
            ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    ctx.beginPath();
                    ctx.arc(i * gridSpacing, j * gridSpacing, 1, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            // Update & Draw Beams
            beams.forEach((beam, i) => {
                beam.y += beam.speed;
                if (beam.y - beam.length > height) {
                    resetBeam(i);
                }

                // Draw beam line
                const gradient = ctx.createLinearGradient(beam.x, beam.y - beam.length, beam.x, beam.y);
                gradient.addColorStop(0, 'rgba(0,0,0,0)');
                gradient.addColorStop(0.8, beam.color.replace(')', ', 0.5)').replace('rgb', 'rgba'));
                gradient.addColorStop(1, beam.color);

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2;
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(beam.x, beam.y - beam.length);
                ctx.lineTo(beam.x, beam.y);
                ctx.stroke();

                // Highlight dots near the beam head
                ctx.shadowBlur = 10;
                ctx.shadowColor = beam.color;
                ctx.fillStyle = '#ffffff';
                
                // Find nearest grid point
                const gridX = Math.round(beam.x / gridSpacing) * gridSpacing;
                const gridY = Math.round(beam.y / gridSpacing) * gridSpacing;
                
                // Draw highlighted dot
                ctx.beginPath();
                ctx.arc(gridX, gridY, 2, 0, Math.PI * 2);
                ctx.fill();
                
                ctx.shadowBlur = 0; // Reset shadow
            });

            requestAnimationFrame(animateCanvas);
        }

        window.addEventListener('resize', initCanvas);
        initCanvas(); animateCanvas();

        // 2. Global Mouse Tracking (Cursor & Glass Glare)
        const cursor = document.getElementById('custom-cursor');
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX; 
            const mouseY = e.clientY;
            
            cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
            
            document.querySelectorAll('.glass-card').forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = mouseX - rect.left;
                const y = mouseY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // 3. Decimal Counters & Scroll Reveal
        const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
        
        const animateValue = (obj, start, end, duration, decimals) => {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const easeProgress = 1 - Math.pow(1 - progress, 3); // ease out cubic
                const current = progress * (end - start) + start;
                obj.innerHTML = current.toFixed(decimals);
                if (progress < 1) window.requestAnimationFrame(step);
                else obj.innerHTML = end.toFixed(decimals);
            };
            window.requestAnimationFrame(step);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Trigger counters
                    if (entry.target.classList.contains('val-counter') && !entry.target.dataset.animated) {
                        const target = parseFloat(entry.target.dataset.target);
                        const decimals = parseInt(entry.target.dataset.decimals);
                        animateValue(entry.target, 0, target, 2500, decimals);
                        entry.target.dataset.animated = "true";
                    }
                    // Trigger fade-up
                    if (entry.target.classList.contains('fade-up')) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.val-counter, .fade-up').forEach(el => observer.observe(el));

        // 4. Interactive Projection Calculator (SYS.008)
        const formatCurrency = (num) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(num);
        
        function updateCalc() {
            const initialEl = document.getElementById('calc-initial');
            const monthlyEl = document.getElementById('calc-monthly');
            const initial = parseFloat(initialEl.value);
            const monthly = parseFloat(monthlyEl.value);
            
            // Labels
            document.getElementById('val-initial').innerText = new Intl.NumberFormat('en-US').format(initial);
            document.getElementById('val-monthly').innerText = new Intl.NumberFormat('en-US').format(monthly);
            
            // Slider fills
            initialEl.style.setProperty('--range-progress', `${((initial - initialEl.min) / (initialEl.max - initialEl.min)) * 100}%`);
            monthlyEl.style.setProperty('--range-progress', `${((monthly - monthlyEl.min) / (monthlyEl.max - monthlyEl.min)) * 100}%`);

            // Math (20 years)
            const years = 20;
            const tradRate = 0.08; // 8% passive indexing
            const valerRate = 0.16; // 16% autonomous alpha

            let tradTotal = initial * Math.pow(1 + tradRate, years) + monthly * 12 * ((Math.pow(1 + tradRate, years) - 1) / tradRate);
            let valerTotal = initial * Math.pow(1 + valerRate, years) + monthly * 12 * ((Math.pow(1 + valerRate, years) - 1) / valerRate);

            document.getElementById('final-trad').innerText = formatCurrency(tradTotal);
            document.getElementById('final-valer').innerText = formatCurrency(valerTotal);

            // Chart Dynamics
            const maxVal = Math.max(valerTotal * 1.2, 5000000); // Dynamic scale buffer
            document.getElementById('y-max').innerText = formatCurrency(maxVal).replace(/000,000$/, 'M').replace(/000$/, 'K');

            const tradY = Math.max(5, 100 - ((tradTotal / maxVal) * 100));
            const valerY = Math.max(5, 100 - ((valerTotal / maxVal) * 100));

            const pathTrad = document.getElementById('path-trad');
            const lineTrad = document.getElementById('line-trad');
            const pathValer = document.getElementById('path-valer');
            const lineValer = document.getElementById('line-valer');

            pathTrad.setAttribute('d', `M0,100 Q50,${100 - (100-tradY)*0.5} 100,${tradY} L100,100 Z`);
            lineTrad.setAttribute('d', `M0,100 Q50,${100 - (100-tradY)*0.5} 100,${tradY}`);
            
            pathValer.setAttribute('d', `M0,100 Q50,${100 - (100-valerY)*0.7} 100,${valerY} L100,100 Z`);
            lineValer.setAttribute('d', `M0,100 Q50,${100 - (100-valerY)*0.7} 100,${valerY}`);
        }
        
        updateCalc();
    
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
      

<canvas className="fixed inset-0 z-0 pointer-events-none opacity-[0.85]" id="bg-canvas"></canvas>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-screen pointer-events-none z-0 mix-blend-screen" style={{background: 'radial-gradient(ellipse at 50% -20%, rgba(112,0,255,0.15), transparent 70%)'}}></div>

<div id="custom-cursor"></div>

<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/[0.03] bg-[#05050A]/70 backdrop-blur-xl transition-all duration-300 py-[clamp(1rem,1.5vw,1.5rem)] px-[clamp(1.5rem,5vw,4rem)] flex justify-between items-center">

<a className="relative flex items-center justify-center interactive group gap-3" href="#">
<svg className="w-[clamp(1.5rem,2.5vw,2rem)] h-[clamp(1.5rem,2.5vw,2rem)]" viewbox="0 0 40 40">

<path className="group-hover:stroke-[#00F0FF] transition-colors duration-500" d="M5 10 L20 35 L35 10" fill="none" stroke="white" strokeWidth="3" vector-effect="non-scaling-stroke"></path>
<path className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" d="M0 25 L15 15 L25 20 L40 5" fill="none" stroke="#7000FF" stroke-dasharray="100" stroke-dashoffset="100" strokeWidth="2">
<animate attributename="stroke-dashoffset" begin="mouseenter" dur="1s" fill="freeze" values="100;0"></animate>
</path>
</svg>
<span className="font-display font-semibold text-[clamp(1rem,1.2vw,1.25rem)] tracking-tight text-white group-hover:text-[#00F0FF] transition-colors">VALER</span>
</a>

<div className="hidden lg:flex items-center gap-[clamp(2rem,3vw,3rem)] font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase text-white/50 tracking-widest">
<a className="hover:text-white transition-colors" href="#engine">Architecture</a>
<a className="hover:text-white transition-colors" href="#quant">Alpha Engine</a>
<a className="hover:text-white transition-colors" href="#assets">Monopolies</a>
<a className="hover:text-white transition-colors" href="#manifesto">Thesis</a>
</div>

<a className="btn-poly btn-poly-solid px-[clamp(1.5rem,2vw,2rem)] py-[clamp(0.5rem,1vw,0.75rem)] text-[clamp(0.75rem,0.9vw,0.875rem)] font-medium text-white interactive" href="#waitlist">
            Request Access
        </a>
</nav>
<main className="relative z-10 w-full max-w-[clamp(70rem,95vw,100rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)]">

<section className="min-h-screen pt-[clamp(8rem,20vh,12rem)] pb-[clamp(5rem,10vw,10rem)] flex flex-col lg:flex-row items-center gap-[clamp(4rem,6vw,6rem)] relative border-b border-white/[0.03]">

<div className="w-full lg:w-[55%] flex flex-col items-start z-10 fade-up">
<div className="inline-flex items-center gap-3 px-3 py-1.5 glass-card !border-[#00F0FF]/30 !rounded-none mb-[clamp(1.5rem,2.5vw,2rem)] bg-[#00F0FF]/[0.02]">
<div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] status-dot"></div>
<span className="font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] text-[#00F0FF] uppercase tracking-widest">System Online / Latency: 4ms</span>
</div>
<h1 className="font-display font-medium text-[clamp(3.5rem,7.5vw,7rem)] leading-[0.9] tracking-tighter text-white mb-[clamp(1.5rem,3vw,2rem)]">
                    Grow Capital <span className="italic text-white/40">Ruthlessly.</span><br/>
                    Protect It <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#7000FF]">Absolutely.</span>
</h1>
<p className="font-body text-[clamp(1.125rem,1.5vw,1.25rem)] text-white/60 leading-[1.6] max-w-xl mb-[clamp(2.5rem,4vw,3rem)]">
                    Stop letting human emotion cap your returns. Valer's autonomous quant engine harvests yield and rebalances your net worth across global equities and private credit. Pure algorithmic alpha.
                </p>
<div className="flex flex-wrap items-center gap-[clamp(1rem,2vw,1.5rem)]">
<a className="btn-poly btn-poly-solid px-[clamp(2.5rem,4vw,3.5rem)] py-[clamp(1.25rem,1.5vw,1.5rem)] text-[clamp(0.875rem,1vw,1rem)] font-medium text-white interactive" href="#waitlist">
                        Initialize Portfolio
                    </a>
<a className="group flex items-center gap-3 text-[clamp(0.875rem,1vw,1rem)] font-mono uppercase tracking-wide text-white/50 hover:text-white transition-colors interactive" href="#calc">
                        View Projections 
                        <iconify-icon className="text-xl group-hover:translate-x-1 group-hover:text-[#00F0FF] transition-all" icon="solar:round-arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="mt-[clamp(3rem,5vw,4rem)] flex items-center gap-6 font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] text-white/30 uppercase tracking-widest">
<span className="flex items-center gap-2"><iconify-icon className="text-white/50" icon="solar:shield-check-bold"></iconify-icon> Bank-grade Encryption</span>
<span className="flex items-center gap-2"><iconify-icon className="text-white/50" icon="solar:graph-up-bold"></iconify-icon> $2.4B+ Deployed</span>
</div>
</div>

<div className="w-full lg:w-[45%] relative mt-10 lg:mt-0 opacity-40 lg:opacity-100 pointer-events-none lg:pointer-events-auto fade-up stagger-2">
<div className="dashboard-bleed w-[110%] lg:w-[130%] relative z-10">

<div className="glass-card aspect-[4/3] w-full p-1 bg-[#0A0A12]/90 border-[#00F0FF]/20 shadow-[0_20px_60px_-15px_rgba(112,0,255,0.3)] flex flex-col">

<div className="w-full flex justify-between items-center px-4 py-3 border-b border-white/[0.05] bg-white/[0.01]">
<div className="flex gap-4 items-center font-mono text-[0.65rem] text-white/40 tracking-widest">
<span className="text-white/80">VALER_OS v2.4</span>
<span className="hidden md:inline">/ RUNNING_AGENTS: 14</span>
</div>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-sm bg-white/10"></div>
<div className="w-2 h-2 rounded-sm bg-white/10"></div>
<div className="w-2 h-2 rounded-sm bg-[#00F0FF]/50 shadow-[0_0_5px_#00F0FF]"></div>
</div>
</div>

<div className="flex-1 p-4 flex flex-col gap-4">

<div className="flex justify-between items-end">
<div>
<div className="font-mono text-[0.65rem] text-white/40 mb-1">TOTAL_NAV</div>
<div className="font-mono text-[clamp(1.5rem,2vw,2rem)] text-white leading-none">$<span className="val-counter" data-decimals="0" data-target="14208941">0</span>.00</div>
</div>
<div className="text-right">
<div className="font-mono text-[0.65rem] text-[#00F0FF] mb-1">+<span className="val-counter" data-decimals="1" data-target="12.4">0</span>% YTD</div>
<svg className="overflow-visible" height="30" viewbox="0 0 100 30" width="100">
<path className="drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]" d="M0,30 L10,25 L20,28 L30,15 L40,20 L50,10 L60,12 L70,5 L80,8 L90,2 L100,0" fill="none" stroke="#00F0FF" strokeWidth="2"></path>
<circle className="shadow-[0_0_10px_#fff]" cx="100" cy="0" fill="#fff" r="3"></circle>
</svg>
</div>
</div>
<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-2"></div>

<div className="flex-1 grid grid-cols-2 gap-4">

<div className="glass-card !bg-transparent !border-white/5 p-3 flex flex-col gap-2">
<div className="font-mono text-[0.5rem] text-white/40 mb-2">DYNAMIC_ALLOCATION</div>
<div className="w-full h-8 flex gap-1">
<div className="bg-gradient-to-b from-[#00F0FF] to-[#00F0FF]/20 w-[60%] rounded-sm relative group"><div className="absolute inset-0 border border-white/20 rounded-sm opacity-0 group-hover:opacity-100"></div></div>
<div className="bg-gradient-to-b from-[#7000FF] to-[#7000FF]/20 w-[25%] rounded-sm"></div>
<div className="bg-gradient-to-b from-white/80 to-white/20 w-[15%] rounded-sm"></div>
</div>
<div className="font-mono text-[0.55rem] text-white/60 flex justify-between mt-1">
<span>EQ_60</span><span>PC_25</span><span>ALT_15</span>
</div>
</div>

<div className="glass-card !bg-black/40 !border-white/5 p-3 relative overflow-hidden font-mono text-[0.55rem] text-white/40 leading-relaxed shadow-inner">
<div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-black/80 to-transparent z-10"></div>
<div className="animate-terminal absolute inset-x-3 top-3">
<span className="text-[#00F0FF]">&gt;</span> ANALYZING_MACRO_DATA<br/>
<span className="text-[#00F0FF]">&gt;</span> DETECTED_YIELD_ARBITRAGE<br/>
<span className="text-[#7000FF]">&gt;</span> REBALANCING_NODE_0x4A...<br/>
<span className="text-white">&gt;</span> EXECUTION_MS: 4.012<br/>
<span className="text-[#00F0FF]">&gt;</span> YIELD_HARVESTED: $4,209<br/>
<span className="text-[#00F0FF]">&gt;</span> ANALYZING_MACRO_DATA<br/>
<span className="text-[#7000FF]">&gt;</span> REBALANCING_NODE_0x4A...<br/>
</div>
<div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -left-8 w-[60%] glass-card p-4 flex items-center justify-between border-[#7000FF]/40 bg-[#05050A]/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
<div>
<div className="font-mono text-[0.55rem] text-white/40 mb-1">TAX_LOSS_HARVESTED</div>
<div className="font-mono text-[clamp(0.875rem,1vw,1rem)] text-white">+$<span className="val-counter" data-decimals="0" data-target="84210">0</span></div>
</div>
<iconify-icon className="text-2xl text-[#7000FF]" icon="solar:shield-check-line-duotone"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="w-full py-[clamp(3rem,5vw,4rem)] border-b border-white/[0.03] bg-[#0A0A12]/30 fade-up">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-[clamp(2rem,4vw,4rem)] divide-x divide-white/5">
<div className="flex flex-col items-center justify-center text-center px-4 group">
<div className="font-display font-medium text-[clamp(2rem,3vw,3rem)] text-white mb-2 tracking-tight group-hover:text-[#00F0FF] transition-colors">
<span className="val-counter" data-decimals="0" data-target="100">0</span>%
                    </div>
<div className="font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] text-white/40 uppercase tracking-widest">Capital Protected</div>
</div>
<div className="flex flex-col items-center justify-center text-center px-4 group">
<div className="font-display font-medium text-[clamp(2rem,3vw,3rem)] text-white mb-2 tracking-tight group-hover:text-[#00F0FF] transition-colors">
<span className="val-counter" data-decimals="0" data-target="4">0</span>ms
                    </div>
<div className="font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] text-white/40 uppercase tracking-widest">Execution Advantage</div>
</div>
<div className="flex flex-col items-center justify-center text-center px-4 group">
<div className="font-display font-medium text-[clamp(2rem,3vw,3rem)] text-white mb-2 tracking-tight group-hover:text-[#00F0FF] transition-colors">
                        +<span className="val-counter" data-decimals="1" data-target="8.4">0.0</span>%
                    </div>
<div className="font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] text-white/40 uppercase tracking-widest">Market Outperformance</div>
</div>
<div className="flex flex-col items-center justify-center text-center px-4 group">
<div className="font-display font-medium text-[clamp(2rem,3vw,3rem)] text-[#7000FF] mb-2 tracking-tight">
                        24/7
                    </div>
<div className="font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] text-white/40 uppercase tracking-widest">Continuous Uptime</div>
</div>
</div>
</section>

<section className="py-[clamp(4rem,8vw,6rem)] border-b border-white/[0.03] fade-up relative overflow-hidden">

<div className="absolute left-0 top-1/2 -translate-y-1/2 font-display text-[15vw] leading-none text-white/[0.01] whitespace-nowrap pointer-events-none font-medium">TRUSTED BY THE 0.1%</div>
<div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
<div className="font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] text-white/40 uppercase tracking-widest mb-4">Network Validation</div>
<h2 className="font-display font-medium text-[clamp(1.5rem,2.5vw,2rem)] leading-tight text-white mb-8">
                    Monopolizing alpha for ex-founders, partners at Tier-1 VC firms, and institutional whales.
                </h2>
<div className="flex flex-wrap justify-center items-center gap-x-[clamp(3rem,5vw,5rem)] gap-y-6 opacity-40 grayscale font-display font-semibold text-xl tracking-tighter">

<span className="hover:opacity-100 hover:text-white transition-all cursor-default">SEQUOIA<span className="text-[0.5em] align-top">ALUMNI</span></span>
<span className="hover:opacity-100 hover:text-white transition-all cursor-default">YCOMBINATOR<span className="text-[0.5em] align-top">FOUNDERS</span></span>
<span className="hover:opacity-100 hover:text-white transition-all cursor-default">GOLDMAN<span className="text-[0.5em] align-top">EXITS</span></span>
<span className="hover:opacity-100 hover:text-white transition-all cursor-default">BINANCE<span className="text-[0.5em] align-top">WHALES</span></span>
</div>
</div>
</section>

<section className="py-[clamp(6rem,12vw,10rem)] fade-up" id="manifesto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(4rem,8vw,8rem)] items-center">

<div className="flex flex-col items-start order-2 lg:order-1">
<div className="font-mono text-[0.65rem] text-[#00F0FF] uppercase tracking-widest mb-4 border border-[#00F0FF]/30 px-2 py-1 bg-[#00F0FF]/[0.02]">
                        THE INEFFICIENCY
                    </div>
<h2 className="font-display font-medium text-[clamp(2.5rem,5vw,4rem)] leading-tight tracking-tighter text-white mb-6">
                        Human wealth managers are bleeding your returns.
                    </h2>
<p className="font-body text-[clamp(1.125rem,1.5vw,1.25rem)] text-white/60 leading-[1.6] mb-6">
                        They charge 2% to lose to the S&amp;P 500. They are slow, emotional, and trade on outdated data. Robo-advisors aren't much better—they trap you in rigid, generic models.
                    </p>
<p className="font-body text-[clamp(1.125rem,1.5vw,1.25rem)] text-white/90 leading-[1.6]">
                        Your capital deserves a hyper-personalized, purely rational engine that executes thousand-variable calculations per second. Zero fees on AUM. Just performance.
                    </p>
</div>

<div className="relative h-[clamp(25rem,35vw,30rem)] w-full order-1 lg:order-2">

<div className="glass-card absolute top-10 left-0 w-[60%] h-[70%] bg-[#1A0A0A]/40 border-red-500/10 p-6 flex flex-col justify-between opacity-50 scale-95 origin-bottom-left filter grayscale-[30%]">
<div className="font-mono text-[0.65rem] text-red-400/50 uppercase">TRADITIONAL_ADVISORY</div>
<div className="w-full flex-1 flex items-center justify-center relative my-4">

<svg className="w-full h-full stroke-red-500/30" fill="none" strokeWidth="2" viewbox="0 0 100 50">
<path d="M0,10 L20,30 L40,25 L60,45 L80,40 L100,60"></path>
</svg>
</div>
<div className="flex justify-between font-mono text-[0.65rem] text-white/30 border-t border-white/5 pt-2">
<span>FEE: 2.0%</span><span>SPEED: MANUAL</span>
</div>
</div>

<div className="glass-card absolute bottom-10 right-0 w-[70%] h-[80%] border-[#00F0FF]/30 bg-[#00F0FF]/[0.02] shadow-[0_20px_50px_rgba(0,240,255,0.1)] p-6 z-10 flex flex-col justify-between transform hover:-translate-y-2 transition-transform duration-500">
<div className="flex justify-between items-center w-full">
<span className="font-mono text-[0.65rem] text-[#00F0FF] tracking-widest">VALER_AUTONOMOUS</span>
<span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span></span>
</div>
<div className="w-full flex-1 flex items-end relative my-4">

<svg className="w-full h-full absolute inset-0 preserveAspectRatio=" none""="" viewbox="0 0 100 50">
<defs>
<lineargradient id="glowG" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#00F0FF" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#00F0FF" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,50 L0,40 Q25,35 50,25 T100,5 L100,50 Z" fill="url(#glowG)"></path>
<path className="drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]" d="M0,40 Q25,35 50,25 T100,5" fill="none" stroke="#00F0FF" strokeWidth="2"></path>
</svg>
</div>
<div className="flex justify-between font-mono text-[0.65rem] text-white/80 border-t border-white/10 pt-2">
<span>FEE: $0</span><span className="text-[#00F0FF]">SPEED: 4ms</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(6rem,12vw,10rem)] fade-up relative" id="engine">
<div className="flex flex-col items-center text-center mb-[clamp(4rem,6vw,5rem)] max-w-3xl mx-auto">
<div className="font-mono text-[0.65rem] text-[#00F0FF] uppercase tracking-widest mb-4 border border-[#00F0FF]/30 px-2 py-1 bg-[#00F0FF]/[0.02]">
                    THE PLATFORM
                </div>
<h2 className="font-display font-medium text-[clamp(2.5rem,5vw,4rem)] leading-tight tracking-tighter text-white mb-6">
                    Command center for generational wealth.
                </h2>
<p className="font-body text-[clamp(1.125rem,1.5vw,1.25rem)] text-white/60">
                    Deep institutional insights. Infinite granular control. Zero manual labor required.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[clamp(1rem,2vw,1.5rem)] auto-rows-[clamp(16rem,22vw,22rem)]">

<div className="glass-card lg:col-span-2 lg:row-span-2 p-[clamp(2rem,3vw,3rem)] flex flex-col justify-between group">
<div className="relative z-10">
<iconify-icon className="text-3xl text-[#00F0FF] mb-4" icon="solar:cpu-bold-duotone"></iconify-icon>
<h3 className="font-display text-[clamp(1.5rem,2vw,1.75rem)] font-medium text-white mb-2 tracking-tight">Predictive Trajectory</h3>
<p className="font-body text-[clamp(1rem,1.1vw,1.125rem)] text-white/50 max-w-sm">Agentic AI models millions of market scenarios to project your precise wealth scaling over 30 years.</p>
</div>

<div className="absolute bottom-0 right-0 w-[80%] h-[60%] opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
<svg height="100%" preserveaspectratio="none" viewbox="0 0 200 100" width="100%">
<path d="M0,100 C50,80 100,90 150,40 S200,10 200,0" fill="none" stroke="rgba(0,240,255,0.2)" strokeWidth="1"></path>
<path d="M0,100 C50,70 100,80 150,30 S200,0 200,0" fill="none" stroke="rgba(0,240,255,0.4)" strokeWidth="1"></path>
<path className="drop-shadow-[0_0_8px_#00F0FF]" d="M0,100 C50,60 100,70 150,20 S200,-10 200,0" fill="none" stroke="#00F0FF" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="glass-card lg:col-span-1 lg:row-span-1 p-[clamp(1.5rem,2vw,2rem)] flex flex-col justify-between overflow-hidden">
<div>
<h3 className="font-display text-[clamp(1.25rem,1.5vw,1.5rem)] font-medium text-white mb-2">Algorithmic Hedging</h3>
<p className="font-body text-[0.875rem] text-white/50">Auto-deploys capital into counter-cyclical assets during volatility.</p>
</div>
<div className="mt-4 flex flex-col gap-2 font-mono text-[0.65rem] text-white/60">
<div className="flex justify-between items-center"><span className="flex items-center gap-1"><div className="w-1 h-1 bg-red-500 rounded-full"></div> S&amp;P_DROP</span> <span className="text-red-400">-4.2%</span></div>
<div className="flex justify-between items-center"><span className="flex items-center gap-1"><div className="w-1 h-1 bg-[#00F0FF] rounded-full"></div> VALER_HEDGE</span> <span className="text-[#00F0FF]">+1.1%</span></div>
</div>
</div>

<div className="glass-card lg:col-span-1 lg:row-span-1 p-[clamp(1.5rem,2vw,2rem)] flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#7000FF]/[0.05] to-transparent group">
<iconify-icon className="text-4xl text-[#7000FF] mb-4 group-hover:scale-110 transition-transform" icon="solar:wallet-money-bold-duotone"></iconify-icon>
<h3 className="font-display text-[clamp(1.25rem,1.5vw,1.5rem)] font-medium text-white mb-1">Micro-Tax Harvesting</h3>
<div className="font-mono text-[clamp(1.5rem,2vw,1.75rem)] text-white mt-2">
                        +$<span className="val-counter" data-decimals="1" data-target="24.8">0.0</span>k
                    </div>
<p className="font-mono text-[0.65rem] text-white/40 mt-1 uppercase tracking-widest">Saved YTD</p>
</div>

<div className="glass-card lg:col-span-2 lg:row-span-1 p-0 flex flex-col overflow-hidden group">
<div className="p-4 border-b border-white/5 flex justify-between items-center bg-black/20">
<h3 className="font-display text-[1rem] font-medium text-white">Live Execution Terminal</h3>
<div className="font-mono text-[0.55rem] text-[#00F0FF] animate-pulse">RECORDING</div>
</div>
<div className="relative flex-1 p-4 bg-black/40 font-mono text-[0.65rem] text-white/50 leading-[1.8] mask-image:linear-gradient(to_bottom,black,transparent)]">
<div className="animate-terminal absolute inset-x-4 top-4">
<div><span className="text-[#7000FF]">[0.012s]</span> Parsing SEC filings (TSLA)...</div>
<div><span className="text-[#00F0FF]">[0.014s]</span> Sentiment: NEGATIVE. Exposure: 2.4%</div>
<div><span className="text-[#00F0FF]">[0.015s]</span> Executing partial liquidation...</div>
<div><span className="text-white">[0.021s]</span> Capital routed to Private Credit Node 4.</div>
<div><span className="text-[#7000FF]">[0.012s]</span> Parsing SEC filings (TSLA)...</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(6rem,12vw,10rem)] relative fade-up border-y border-white/[0.03]" id="quant">
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-[clamp(4rem,6vw,5rem)] gap-6">
<div className="max-w-2xl">
<div className="font-mono text-[0.65rem] text-[#00F0FF] uppercase tracking-widest mb-4 border border-[#00F0FF]/30 px-2 py-1 bg-[#00F0FF]/[0.02] inline-block">
                        THE METHODOLOGY
                    </div>
<h2 className="font-display font-medium text-[clamp(2.5rem,4vw,3.5rem)] leading-tight tracking-tighter text-white mb-4">
                        Engineered to win.<br/>Every millisecond.
                    </h2>
<p className="font-body text-[clamp(1.125rem,1.5vw,1.25rem)] text-white/60">
                        How the Valer architecture converts raw global data into an unfair advantage.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">

<div className="hidden md:block absolute top-[3rem] left-0 w-full h-[1px] bg-white/5 z-0">
<div className="h-full bg-gradient-to-r from-[#00F0FF] via-[#7000FF] to-transparent w-full opacity-50 relative">

<div className="absolute top-1/2 -translate-y-1/2 left-0 w-8 h-[2px] bg-white shadow-[0_0_10px_#fff] animate-[pulse_3s_linear_infinite]" style={{animation: 'scanline 4s linear infinite'}}></div>
</div>
</div>
<style>@keyframes scanline { 0% { left: 0%; } 100% { left: 100%; } }</style>

<div className="p-6 pt-10 md:border-r border-white/5 relative group z-10">
<div className="absolute top-10 left-6 w-2 h-2 rounded-full bg-[#1A1A24] border border-[#00F0FF] group-hover:bg-[#00F0FF] transition-colors md:top-[2.8rem] md:left-1/2 md:-translate-x-1/2 md:w-3 md:h-3"></div>
<div className="font-mono text-[1.5rem] text-white/10 font-bold mb-4 mt-8 md:mt-12 md:text-center">01</div>
<h3 className="font-display text-[1.25rem] font-medium text-white mb-2 md:text-center">Absorb</h3>
<p className="font-body text-[0.875rem] text-white/50 md:text-center">Ingests millions of data points from global markets, SEC filings, and institutional flows.</p>
</div>
<div className="p-6 pt-10 md:border-r border-white/5 relative group z-10">
<div className="absolute top-10 left-6 w-2 h-2 rounded-full bg-[#1A1A24] border border-[#00F0FF] group-hover:bg-[#00F0FF] transition-colors md:top-[2.8rem] md:left-1/2 md:-translate-x-1/2 md:w-3 md:h-3"></div>
<div className="font-mono text-[1.5rem] text-white/10 font-bold mb-4 mt-8 md:mt-12 md:text-center">02</div>
<h3 className="font-display text-[1.25rem] font-medium text-white mb-2 md:text-center">Synthesize</h3>
<p className="font-body text-[0.875rem] text-white/50 md:text-center">Deep learning models map complex market conditions directly to your precise risk profile.</p>
</div>
<div className="p-6 pt-10 md:border-r border-white/5 relative group z-10">
<div className="absolute top-10 left-6 w-2 h-2 rounded-full bg-[#1A1A24] border border-[#7000FF] group-hover:bg-[#7000FF] transition-colors md:top-[2.8rem] md:left-1/2 md:-translate-x-1/2 md:w-3 md:h-3"></div>
<div className="font-mono text-[1.5rem] text-white/10 font-bold mb-4 mt-8 md:mt-12 md:text-center">03</div>
<h3 className="font-display text-[1.25rem] font-medium text-white mb-2 md:text-center">Execute</h3>
<p className="font-body text-[0.875rem] text-white/50 md:text-center">Autonomously routes micro-adjustments via low-latency API without human hesitation.</p>
</div>
<div className="p-6 pt-10 relative group z-10">
<div className="absolute top-10 left-6 w-2 h-2 rounded-full bg-[#1A1A24] border border-[#7000FF] group-hover:bg-[#7000FF] transition-colors md:top-[2.8rem] md:left-1/2 md:-translate-x-1/2 md:w-3 md:h-3"></div>
<div className="font-mono text-[1.5rem] text-white/10 font-bold mb-4 mt-8 md:mt-12 md:text-center">04</div>
<h3 className="font-display text-[1.25rem] font-medium text-white mb-2 md:text-center">Compound</h3>
<p className="font-body text-[0.875rem] text-white/50 md:text-center">Instantly reinvests harvested yield to maximize the mathematical compounding curve.</p>
</div>
</div>
</section>

<section className="py-[clamp(6rem,12vw,10rem)] fade-up" id="assets">
<div className="flex flex-col items-center text-center mb-[clamp(4rem,6vw,5rem)] max-w-3xl mx-auto">
<div className="font-mono text-[0.65rem] text-[#00F0FF] uppercase tracking-widest mb-4 border border-[#00F0FF]/30 px-2 py-1 bg-[#00F0FF]/[0.02]">
                    THE INVENTORY
                </div>
<h2 className="font-display font-medium text-[clamp(2.5rem,5vw,4rem)] leading-tight tracking-tighter text-white mb-4">
                    Monopolize elite asset classes.
                </h2>
<p className="font-body text-[clamp(1.125rem,1.5vw,1.25rem)] text-white/60">
                    True wealth isn't built on standard ETFs. The AI dynamically reallocates your capital across tiers previously locked behind billion-dollar buy-ins.
                </p>
</div>

<div className="relative w-full max-w-4xl mx-auto space-y-8">
<div className="glass-card p-[clamp(2rem,4vw,3rem)] group">
<div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
<div className="flex items-center gap-6">
<div className="w-16 h-16 rounded-full border border-[#00F0FF]/30 flex items-center justify-center bg-[#00F0FF]/5 group-hover:bg-[#00F0FF]/10 transition-colors">
<iconify-icon className="text-2xl text-[#00F0FF]" icon="solar:chart-line-duotone"></iconify-icon>
</div>
<div>
<div className="font-mono text-[0.65rem] text-white/40 mb-1 tracking-widest">LIQUIDITY_TIER</div>
<h3 className="font-display text-[clamp(1.25rem,2vw,1.75rem)] font-medium text-white">Algorithmic Equities</h3>
</div>
</div>
<p className="font-body text-[1rem] text-white/50 max-w-xs md:text-right">Hyper-liquid, millisecond trading across global public markets.</p>
</div>
</div>
<div className="glass-card p-[clamp(2rem,4vw,3rem)] group transform md:translate-x-8 border-l-[#7000FF]/50">
<div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
<div className="flex items-center gap-6">
<div className="w-16 h-16 rounded-full border border-[#7000FF]/30 flex items-center justify-center bg-[#7000FF]/5 group-hover:bg-[#7000FF]/10 transition-colors">
<iconify-icon className="text-2xl text-[#7000FF]" icon="solar:safe-square-duotone"></iconify-icon>
</div>
<div>
<div className="font-mono text-[0.65rem] text-white/40 mb-1 tracking-widest">YIELD_TIER</div>
<h3 className="font-display text-[clamp(1.25rem,2vw,1.75rem)] font-medium text-white">Private Credit</h3>
</div>
</div>
<p className="font-body text-[1rem] text-white/50 max-w-xs md:text-right">Low correlation, institutional-grade debt funds generating secure yield.</p>
</div>
</div>
<div className="glass-card p-[clamp(2rem,4vw,3rem)] group transform md:translate-x-16 border-l-white/50">
<div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
<div className="flex items-center gap-6">
<div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-2xl text-white" icon="solar:shield-keyhole-duotone"></iconify-icon>
</div>
<div>
<div className="font-mono text-[0.65rem] text-white/40 mb-1 tracking-widest">HEDGE_TIER</div>
<h3 className="font-display text-[clamp(1.25rem,2vw,1.75rem)] font-medium text-white">Alternative Assets</h3>
</div>
</div>
<p className="font-body text-[1rem] text-white/50 max-w-xs md:text-right">Calculated hedges against inflation and macro volatility.</p>
</div>
</div>
</div>
</section>

<section className="py-[clamp(6rem,12vw,10rem)] fade-up" id="calc">
<div className="glass-card w-full p-[clamp(2rem,5vw,5rem)] bg-gradient-to-br from-[#1A1A24]/60 to-[#05050A]">
<div className="flex flex-col lg:flex-row gap-[clamp(4rem,8vw,8rem)] items-center">

<div className="w-full lg:w-5/12 flex flex-col justify-center">
<div className="font-mono text-[0.65rem] text-[#00F0FF] uppercase tracking-widest mb-4 border border-[#00F0FF]/30 px-2 py-1 bg-[#00F0FF]/[0.02] inline-table">
                            PROJECTION MODEL
                        </div>
<h2 className="font-display font-medium text-[clamp(2.5rem,4vw,3.5rem)] leading-tight tracking-tighter text-white mb-4">
                            Calculate your unfair advantage.
                        </h2>
<p className="font-body text-[1.125rem] text-white/60 mb-10">
                            See the mathematical difference of autonomous compounding over 20 years versus traditional passive indexing.
                        </p>

<div className="mb-8 relative interactive group">
<div className="flex justify-between font-mono text-[0.75rem] mb-4 uppercase tracking-wider">
<span className="text-white/60 group-hover:text-white transition-colors">Initial Capital</span>
<span className="text-[#00F0FF]">$<span id="val-initial">250,000</span></span>
</div>
<input className="w-full" id="calc-initial" max="5000000" min="50000" oninput="updateCalc()" step="50000" type="range" value="250000"/>
</div>

<div className="mb-8 relative interactive group">
<div className="flex justify-between font-mono text-[0.75rem] mb-4 uppercase tracking-wider">
<span className="text-white/60 group-hover:text-white transition-colors">Monthly Contribution</span>
<span className="text-[#00F0FF]">$<span id="val-monthly">5,000</span></span>
</div>
<input className="w-full" id="calc-monthly" max="100000" min="0" oninput="updateCalc()" step="1000" type="range" value="5000"/>
</div>
</div>

<div className="w-full lg:w-7/12 relative h-[400px] flex flex-col justify-end p-4 lg:p-8 border border-white/5 bg-black/20 rounded-xl">

<div className="absolute top-6 left-6 flex flex-col gap-3 font-mono text-[0.65rem] uppercase tracking-widest z-20">
<div className="flex items-center justify-between gap-6 w-48">
<span className="flex items-center gap-2 text-white/90"><div className="w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]"></div> Valer AI</span>
<span className="text-[#00F0FF] text-[0.85rem] font-bold" id="final-valer">$0</span>
</div>
<div className="flex items-center justify-between gap-6 w-48">
<span className="flex items-center gap-2 text-white/40"><div className="w-2 h-2 rounded-full bg-white/20"></div> S&amp;P 500</span>
<span className="text-white/40" id="final-trad">$0</span>
</div>
</div>

<div className="relative w-full h-[80%] border-b border-l border-white/10">

<div className="absolute -left-12 top-0 bottom-0 flex flex-col justify-between font-mono text-[0.55rem] text-white/30 text-right pr-2">
<span id="y-max">$20M</span>
<span>$10M</span>
<span>$0</span>
</div>

<svg className="absolute bottom-0 left-0 w-full h-full preserveAspectRatio=" none""="" viewbox="0 0 100 100">
<path d="M0,100 Q50,90 100,70 L100,100 Z" fill="rgba(255,255,255,0.03)" id="path-trad"></path>
<path d="M0,100 Q50,90 100,70" fill="none" id="line-trad" stroke="rgba(255,255,255,0.15)" stroke-dasharray="2 2" strokeWidth="1.5"></path>
</svg>

<svg className="absolute bottom-0 left-0 w-full h-full preserveAspectRatio=" none""="" viewbox="0 0 100 100">
<defs>
<lineargradient id="valerGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#00F0FF" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#7000FF" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,100 Q50,70 100,20 L100,100 Z" fill="url(#valerGrad)" id="path-valer"></path>
<path className="drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]" d="M0,100 Q50,70 100,20" fill="none" id="line-valer" stroke="#00F0FF" strokeWidth="2.5"></path>
</svg>
</div>

<div className="w-full flex justify-between font-mono text-[0.55rem] text-white/30 mt-2 pl-[1px]">
<span>YEAR 0</span><span>YEAR 10</span><span>YEAR 20</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(8rem,15vw,15rem)] fade-up" id="waitlist">
<div className="glass-card w-full py-[clamp(6rem,12vw,10rem)] px-[clamp(2rem,5vw,4rem)] flex flex-col items-center justify-center text-center relative bg-transparent border-white/5 overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none opacity-[0.85] mix-blend-screen" style={{background: 'radial-gradient(circle 800px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(112,0,255,0.15), transparent 100%)'}}>
</div>
<div className="relative z-10 flex flex-col items-center max-w-4xl">
<iconify-icon className="text-5xl text-[#00F0FF] mb-8" icon="solar:lock-keyhole-minimalistic-bold-duotone"></iconify-icon>
<h2 className="font-display font-medium text-[clamp(3.5rem,6vw,6rem)] leading-[0.9] tracking-tighter text-white mb-6">
                        Stop leaving money<br/>on the table.
                    </h2>
<p className="font-body text-[clamp(1.125rem,1.5vw,1.25rem)] text-white/60 mb-10 max-w-xl">
                        The market doesn't sleep. Neither should your capital. Secure your allocation and redefine your financial legacy.
                    </p>
<a className="btn-poly btn-poly-solid px-[clamp(3.5rem,5vw,5rem)] py-[clamp(1.5rem,2vw,1.75rem)] text-[clamp(1rem,1.2vw,1.125rem)] font-medium text-white interactive group" href="#">
<span className="relative z-10 flex items-center gap-3">
                            Request Private Access
                            <iconify-icon className="text-xl group-hover:translate-x-2 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>
</div>
</section>
</main>

<footer className="relative w-full border-t border-white/[0.03] bg-[#05050A] pt-[clamp(5rem,10vw,8rem)] pb-8 overflow-hidden z-10">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-semibold text-[30vw] leading-none text-white opacity-[0.01] pointer-events-none select-none tracking-tighter">
            VALER
        </div>
<div className="max-w-[clamp(70rem,95vw,100rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)] relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[clamp(3rem,5vw,6rem)] gap-y-12 pb-16 border-b border-white/[0.03]">
<div className="flex flex-col gap-5">
<h4 className="font-mono text-[0.65rem] text-[#00F0FF] uppercase tracking-widest mb-2">Platform</h4>
<a className="font-body text-[0.875rem] text-white/50 hover:text-white transition-colors interactive" href="#">Algorithm Architecture</a>
<a className="font-body text-[0.875rem] text-white/50 hover:text-white transition-colors interactive" href="#">Encryption Specs</a>
<a className="font-body text-[0.875rem] text-white/50 hover:text-white transition-colors interactive" href="#">Historical Performance</a>
</div>
<div className="flex flex-col gap-5">
<h4 className="font-mono text-[0.65rem] text-[#00F0FF] uppercase tracking-widest mb-2">Allocations</h4>
<a className="font-body text-[0.875rem] text-white/50 hover:text-white transition-colors interactive" href="#">Institutional LPs</a>
<a className="font-body text-[0.875rem] text-white/50 hover:text-white transition-colors interactive" href="#">Private Wealth</a>
<a className="font-body text-[0.875rem] text-white/50 hover:text-white transition-colors interactive" href="#">Family Offices</a>
</div>
<div className="flex flex-col gap-5">
<h4 className="font-mono text-[0.65rem] text-[#00F0FF] uppercase tracking-widest mb-2">Compliance</h4>
<a className="font-body text-[0.875rem] text-white/50 hover:text-white transition-colors interactive" href="#">SEC Form ADV</a>
<a className="font-body text-[0.875rem] text-white/50 hover:text-white transition-colors interactive" href="#">Privacy Policy</a>
<a className="font-body text-[0.875rem] text-white/50 hover:text-white transition-colors interactive" href="#">Terms of Service</a>
</div>
<div className="flex flex-col gap-5">
<h4 className="font-mono text-[0.65rem] text-[#00F0FF] uppercase tracking-widest mb-2">Alpha Transmission</h4>
<form className="relative w-full mt-2 group interactive" onsubmit="event.preventDefault();">
<input className="w-full bg-transparent border-b border-white/20 pb-3 font-mono text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#00F0FF] transition-colors rounded-none" placeholder="ENTER_EMAIL_" type="email"/>
<button aria-label="Submit email" className="absolute right-0 top-0 text-white/40 group-hover:text-[#00F0FF] transition-colors" type="submit">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
<p className="font-mono text-[0.55rem] text-white/30 mt-2 uppercase tracking-widest leading-relaxed">Highly asymmetrical insights. Delivered strictly to approved nodes.</p>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 font-mono text-[0.55rem] text-white/30 uppercase tracking-widest gap-4 text-center md:text-left">
<span>© VALER AUTONOMOUS WEALTH. ALL RIGHTS RESERVED. NOT FINANCIAL ADVICE.</span>
<span className="flex items-center gap-4">
<span className="flex items-center gap-1"><div className="w-1 h-1 bg-[#00F0FF] rounded-full"></div> SYS_ONLINE</span>
<span>NODE_US_EAST</span>
</span>
</div>
</div>
</footer>



    </>
  );
}
