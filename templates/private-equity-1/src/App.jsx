import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- Scramble Text Effect on Hover ---
            const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_/";
            document.querySelectorAll('[data-scramble]').forEach(el => {
                const originalText = el.innerText;
                el.addEventListener('mouseenter', e => {
                    let iteration = 0;
                    clearInterval(el.interval);
                    el.interval = setInterval(() => {
                        e.target.innerText = originalText
                            .split("")
                            .map((letter, index) => {
                                if(index < iteration) return originalText[index];
                                return letters[Math.floor(Math.random() * 38)];
                            })
                            .join("");
                        
                        if(iteration >= originalText.length){ 
                            clearInterval(el.interval);
                        }
                        iteration += 1 / 3;
                    }, 30);
                });
                el.addEventListener('mouseleave', () => {
                    clearInterval(el.interval);
                    el.innerText = originalText;
                });
            });

            // --- Scroll Reveal Logic ---
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        
                        // Trigger Market Depth Animation
                        if(entry.target.dataset.trigger === 'market-depth') {
                            const bars = entry.target.querySelectorAll('.market-bar');
                            bars.forEach((bar, index) => {
                                setTimeout(() => {
                                    bar.style.width = bar.dataset.width;
                                }, 400 + (index * 50)); 
                            });
                        }

                        // Trigger Count Ups
                        const counters = entry.target.querySelectorAll('[data-count]');
                        counters.forEach(counter => {
                            if (!counter.dataset.animated) {
                                counter.dataset.animated = 'true';
                                animateValue(counter);
                            }
                        });

                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-group').forEach(el => revealObserver.observe(el));

            // --- Counter Animation ---
            const easeOutExpo = (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
            function animateValue(obj) {
                const target = parseFloat(obj.getAttribute('data-count'));
                const format = obj.getAttribute('data-format');
                const duration = 2000;
                let startTimestamp = null;

                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    const easeProgress = easeOutExpo(progress);
                    const currentVal = (easeProgress * target);
                    
                    if (format === 'percent') obj.innerHTML = currentVal.toFixed(1);
                    else if (format === 'currency-b') obj.innerHTML = currentVal.toFixed(2);
                    else if (format === 'k') obj.innerHTML = Math.floor(currentVal);
                    else if (Number.isInteger(target)) obj.innerHTML = Math.floor(currentVal);
                    else obj.innerHTML = currentVal.toFixed(1);

                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    } else {
                        if (format === 'percent' || format === 'currency-b') {
                            obj.innerHTML = target.toFixed(format === 'percent' ? 1 : 2);
                        } else obj.innerHTML = target;
                    }
                };
                window.requestAnimationFrame(step);
            }

            // --- WebGL / Canvas Flickering Grid Effect ---
            const canvas = document.getElementById('hero-canvas');
            const ctx = canvas.getContext('2d');
            let width, height;
            let dots = [];
            const spacing = 35; // Grid spacing
            let mouse = { x: null, y: null, radius: 250 };
            
            function resize() {
                width = canvas.width = window.innerWidth;
                height = canvas.height = document.getElementById('hero').offsetHeight;
                initGrid();
            }

            function initGrid() {
                dots = [];
                const cols = Math.floor(width / spacing);
                const rows = Math.floor(height / spacing);
                for(let i = 0; i < cols; i++) {
                    for(let j = 0; j < rows; j++) {
                        dots.push({
                            x: i * spacing + (spacing/2),
                            y: j * spacing + (spacing/2),
                            baseAlpha: Math.random() * 0.15 + 0.02,
                            alpha: 0,
                            phase: Math.random() * Math.PI * 2
                        });
                    }
                }
            }

            window.addEventListener('resize', resize);
            window.addEventListener('mousemove', (e) => {
                mouse.x = e.x;
                mouse.y = e.y; // approximate since hero is top
            });
            window.addEventListener('mouseout', () => {
                mouse.x = null;
                mouse.y = null;
            });

            resize();

            function animateCanvas() {
                ctx.clearRect(0, 0, width, height);
                
                const time = Date.now() * 0.001;

                dots.forEach(dot => {
                    // Base flicker using sine wave
                    dot.alpha = dot.baseAlpha + Math.sin(time * 2 + dot.phase) * 0.05;
                    let drawRadius = 1;
                    
                    // Mouse interaction
                    if(mouse.x != null) {
                        let dx = mouse.x - dot.x;
                        let dy = mouse.y - dot.y;
                        let dist = Math.sqrt(dx*dx + dy*dy);
                        if(dist < mouse.radius) {
                            // Increase opacity and size near mouse
                            const force = (mouse.radius - dist) / mouse.radius;
                            dot.alpha += force * 0.5;
                            drawRadius += force * 1.5;
                            
                            // Draw connection lines to mouse center sporadically
                            if(Math.random() > 0.95 && dist < 100) {
                                ctx.beginPath();
                                ctx.moveTo(dot.x, dot.y);
                                ctx.lineTo(mouse.x, mouse.y);
                                ctx.strokeStyle = `rgba(212, 184, 122, ${force * 0.1})`;
                                ctx.lineWidth = 0.5;
                                ctx.stroke();
                            }
                        }
                    }

                    // Clamp alpha
                    dot.alpha = Math.max(0, Math.min(1, dot.alpha));

                    // Draw dot
                    ctx.beginPath();
                    ctx.arc(dot.x, dot.y, drawRadius, 0, Math.PI * 2);
                    // Use theme color #828179 or accent #d4b87a
                    const r = 130, g = 129, b = 121; 
                    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${dot.alpha})`;
                    ctx.fill();
                });

                requestAnimationFrame(animateCanvas);
            }
            
            animateCanvas();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-40 backdrop-blur-xl bg-[#050505]/70 border-b border-[#1f1f1e]">
<div className="max-w-[clamp(20rem,86vw,83.75rem)] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="text-[#f5f5f0] text-[clamp(1.125rem,1.5vw,1.25rem)] font-medium tracking-tighter">VOLX</span>
<div className="h-4 w-[1px] bg-[#1f1f1e] hidden md:block"></div>
<div className="hidden md:flex items-center gap-2">
<span className="blinking-dot"></span>
<span className="font-mono-custom text-[0.625rem] tracking-[0.15em] text-[#d4b87a] mt-[2px]">SYS.ONLINE</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-8 text-[0.8125rem]">
<a className="nav-link text-[#828179] hover:text-[#f5f5f0] transition-colors duration-200" data-scramble="" href="#platform">PLATFORM</a>
<a className="nav-link text-[#828179] hover:text-[#f5f5f0] transition-colors duration-200" data-scramble="" href="#intelligence">INTELLIGENCE</a>
<a className="nav-link text-[#828179] hover:text-[#f5f5f0] transition-colors duration-200" data-scramble="" href="#secondary">MARKET</a>
<a className="btn-swiss px-6 py-2.5 font-mono-custom text-[0.6875rem] tracking-[0.05em] ml-4" data-scramble="" href="#access">INITIATE ACCESS</a>
</nav>
<button className="md:hidden text-[#f5f5f0]">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="h-8 bg-[#0a0a0a] border-t border-[#1f1f1e] overflow-hidden flex items-center relative">
<div className="animate-marquee font-mono-custom text-[0.625rem] tracking-[0.15em] text-[#828179]">
<span className="mx-4">VOLX-EUR-II <span className="text-[#d4b87a] mx-2">/</span> NAV 2.34x <span className="text-[#d4b87a] mx-2">/</span> ΔQ3 +8.2%</span>
<span className="mx-4">SYS.LOAD: <span className="text-[#f5f5f0]">OPTIMAL</span></span>
<span className="mx-4">EXIT ALERT: KESSLER HLDG <span className="text-[#d4b87a] mx-2">/</span> Q2 2026 <span className="text-[#d4b87a] mx-2">/</span> ACC: 84.3%</span>
<span className="mx-4">VOLX-EUR-II <span className="text-[#d4b87a] mx-2">/</span> NAV 2.34x <span className="text-[#d4b87a] mx-2">/</span> ΔQ3 +8.2%</span>
<span className="mx-4">SYS.LOAD: <span className="text-[#f5f5f0]">OPTIMAL</span></span>
<span className="mx-4">EXIT ALERT: KESSLER HLDG <span className="text-[#d4b87a] mx-2">/</span> Q2 2026 <span className="text-[#d4b87a] mx-2">/</span> ACC: 84.3%</span>
<span className="mx-4">VOLX-EUR-II <span className="text-[#d4b87a] mx-2">/</span> NAV 2.34x <span className="text-[#d4b87a] mx-2">/</span> ΔQ3 +8.2%</span>
<span className="mx-4">SYS.LOAD: <span className="text-[#f5f5f0]">OPTIMAL</span></span>
<span className="mx-4">EXIT ALERT: KESSLER HLDG <span className="text-[#d4b87a] mx-2">/</span> Q2 2026 <span className="text-[#d4b87a] mx-2">/</span> ACC: 84.3%</span>
</div>
</div>
</header>
<main className="relative z-10">

<section className="relative pt-32 pb-[clamp(6.25rem,10vw,10rem)] reveal-group overflow-hidden" id="hero">

<canvas id="hero-canvas"></canvas>
<div className="max-w-[clamp(20rem,86vw,83.75rem)] mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-16 min-h-[calc(100dvh-8rem)] items-center relative z-10">
<div className="max-w-[35rem]">
<div className="reveal-marker tech-badge font-mono-custom text-[0.625rem] tracking-[0.2em] mb-6 text-[#828179]">
<iconify-icon className="text-[#d4b87a]" icon="solar:cpu-bolt-linear"></iconify-icon>
                        [SYS·000] // CORE_ARCHITECTURE
                    </div>
<h1 className="reveal-heading text-[#f5f5f0] text-[clamp(3.5rem,6.5vw,6.5rem)] font-light tracking-tighter leading-[0.95] mb-8 text-balance">
                        Private equity <br/>structured <br/>for exit.
                    </h1>
<p className="reveal-content text-[clamp(1rem,1.2vw,1.125rem)] mb-10 text-[#828179] max-w-[28rem]">
                        VOLX furnishes GPs and LPs with an institutional secondary market and AI-predicted exit topography. Engineered for entities managing $200M+.
                    </p>
<div className="reveal-content flex flex-wrap items-center gap-4 mb-10">
<a className="btn-swiss px-8 py-4 font-mono-custom text-[0.8125rem] tracking-[0.05em]" data-scramble="" href="#access">REQUEST_ACCESS</a>
<button className="btn-ghost-swiss px-8 py-4 font-mono-custom text-[0.8125rem] tracking-[0.05em] bg-[#050505]" data-scramble="">VIEW_TELEMETRY</button>
</div>
<div className="reveal-content grid grid-cols-3 gap-6 font-mono-custom text-[0.6875rem] text-[#828179] border-t border-[#1f1f1e] pt-6">
<div>
<div className="text-[#f5f5f0] text-lg mb-1">$<span data-count="2.47" data-format="currency-b">0</span>B</div>
                            ASSETS_ANALYZED
                        </div>
<div>
<div className="text-[#f5f5f0] text-lg mb-1"><span data-count="34">0</span></div>
                            TIER-1_FIRMS
                        </div>
<div>
<div className="text-[#d4b87a] text-lg mb-1"><span data-count="83.4" data-format="percent">0</span>%</div>
                            PREDICTION_ACC
                        </div>
</div>
</div>

<div className="reveal-content hidden lg:block relative h-[40rem]" style={{transitionDelay: '0.3s'}}>

<div className="absolute inset-0 rounded-sm overflow-hidden img-mask-chamfer border border-[#1f1f1e]">
<img alt="Data Architecture" className="w-full h-full object-cover opacity-30 mix-blend-luminosity grayscale" src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] glass-panel rounded-sm flex flex-col z-20 overflow-hidden">

<div className="h-10 bg-[#0a0a0a]/80 border-b border-[#1f1f1e] flex items-center px-4 justify-between backdrop-blur-md">
<div className="flex gap-2">
<iconify-icon className="text-[#828179]" icon="solar:shield-check-linear"></iconify-icon>
<span className="font-mono-custom text-[0.625rem] tracking-[0.1em] text-[#828179]">VOLX_TERM_OS // V.2.4</span>
</div>
<div className="flex gap-1.5">
<div className="w-1.5 h-1.5 bg-[#828179]"></div>
<div className="w-1.5 h-1.5 bg-[#d4b87a]"></div>
</div>
</div>

<div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] px-6 py-3 font-mono-custom text-[0.625rem] text-[#828179] border-b border-[#1f1f1e] bg-[#050505]/50">
<div>ENTITY_ID</div>
<div>CAPITAL_INV</div>
<div>CURR_NAV</div>
<div>IRR_TRAJ</div>
<div>OPT_EXIT</div>
</div>

<div className="flex-1 font-mono-custom text-[0.6875rem] bg-[#0a0a0a]/40">
<div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] px-6 py-4 border-b border-[#1f1f1e]/50 text-[#828179]">
<div className="text-[#f5f5f0]">Aeronautics Tech</div>
<div>€12.4M</div>
<div>1.42x</div>
<div>+14.2%</div>
<div>Q4 2027</div>
</div>
<div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] px-6 py-4 border-b border-[#1f1f1e]/50 text-[#828179]">
<div className="text-[#f5f5f0]">Vellamo Bio</div>
<div>€28.1M</div>
<div>0.94x</div>
<div>-2.1%</div>
<div>HOLD</div>
</div>

<div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] px-6 py-5 bg-[#111111]/80 border-l-2 border-[#d4b87a] relative overflow-hidden shadow-[inset_0_0_20px_rgba(212,184,122,0.05)]">
<div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#d4b87a]/10 to-transparent pointer-events-none"></div>
<div className="text-[#f5f5f0] relative z-10 flex items-center gap-2">
<iconify-icon className="text-[#d4b87a]" icon="solar:target-linear"></iconify-icon>
                                    Kessler Hldgs
                                </div>
<div className="relative z-10 text-[#f5f5f0]">€48.2M</div>
<div className="relative z-10 text-[#d4b87a]">2.71x</div>
<div className="relative z-10 text-[#d4b87a]">+28.4%</div>
<div className="text-[#f5f5f0] relative z-10 flex items-center gap-2">
<span className="blinking-dot"></span>
                                    Q2 2026
                                </div>
</div>
<div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] px-6 py-4 border-t border-[#1f1f1e]/50 text-[#828179]">
<div className="text-[#f5f5f0]">Sentient Data</div>
<div>€18.5M</div>
<div>1.15x</div>
<div>+8.4%</div>
<div>Q2 2029</div>
</div>
</div>
</div>

<div className="absolute bottom-10 -right-6 glass-panel px-4 py-3 rounded-sm z-30 flex items-center gap-4">
<div className="w-8 h-8 rounded-full border border-[#d4b87a] flex items-center justify-center relative">
<div className="absolute inset-0 border border-[#d4b87a] rounded-full animate-ping opacity-20"></div>
<iconify-icon className="text-[#d4b87a]" icon="solar:radar-linear"></iconify-icon>
</div>
<div>
<div className="font-mono-custom text-[0.625rem] text-[#828179] mb-0.5">SIGNAL_DETECTED</div>
<div className="font-mono-custom text-[0.6875rem] text-[#f5f5f0]">LIQUIDITY WINDOW ALIGNED</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(6.25rem,10vw,10rem)] border-t border-[#1f1f1e] bg-[#050505] reveal-group relative">

<div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.02] pointer-events-none" style={{backgroundImage: 'radial-gradient(#f5f5f0 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-[clamp(20rem,86vw,83.75rem)] mx-auto px-6 grid md:grid-cols-[1.2fr_1fr] gap-24 items-start relative z-10">
<div className="max-w-[38rem]">
<div className="reveal-marker tech-badge font-mono-custom text-[0.625rem] tracking-[0.2em] mb-6 text-[#828179]">
                        [SYS·001] // DIAGNOSTIC
                    </div>
<h2 className="reveal-heading text-[#f5f5f0] text-[clamp(2.25rem,4.5vw,4rem)] font-light tracking-tighter leading-[1.05] mb-8 text-balance">
                        Your portfolio is illiquid by design. Not necessity.
                    </h2>
<p className="reveal-content text-[#828179] text-[clamp(1rem,1.2vw,1.125rem)]">
                        Conventional PE infrastructure dictates that distributions are administered via archaic spreadsheet models. LPs endure protracted illiquidity that could be structurally bypassed quarters in advance. The consequence is quantified in carry and reputation.
                    </p>
</div>
<div className="reveal-content grid grid-cols-2 gap-y-16 gap-x-8">
<div className="relative border-l border-[#1f1f1e] pl-6">
<div className="absolute top-0 left-[-1px] w-[2px] h-4 bg-[#d4b87a]"></div>
<div className="font-mono-custom text-[clamp(1.75rem,3.5vw,2.5rem)] text-[#f5f5f0] mb-2 tracking-tight"><span data-count="7.2">0</span><span className="text-[#828179] text-lg ml-1">yrs</span></div>
<div className="text-[0.8125rem] uppercase tracking-wider text-[#828179]">Avg unmanaged hold</div>
</div>
<div className="relative border-l border-[#1f1f1e] pl-6">
<div className="absolute top-0 left-[-1px] w-[2px] h-4 bg-[#d4b87a]"></div>
<div className="font-mono-custom text-[clamp(1.75rem,3.5vw,2.5rem)] text-[#f5f5f0] mb-2 tracking-tight">$<span data-count="340" data-format="k">0</span><span className="text-[#828179] text-lg ml-1">K</span></div>
<div className="text-[0.8125rem] uppercase tracking-wider text-[#828179]">Annual admin drag</div>
</div>
<div className="relative border-l border-[#1f1f1e] pl-6">
<div className="absolute top-0 left-[-1px] w-[2px] h-4 bg-[#d4b87a]"></div>
<div className="font-mono-custom text-[clamp(1.75rem,3.5vw,2.5rem)] text-[#f5f5f0] mb-2 tracking-tight"><span data-count="62">0</span><span className="text-[#828179] text-lg ml-1">%</span></div>
<div className="text-[0.8125rem] uppercase tracking-wider text-[#828179]">LP Opacity Dissatisfaction</div>
</div>
<div className="relative border-l border-[#1f1f1e] pl-6">
<div className="absolute top-0 left-[-1px] w-[2px] h-4 bg-[#d4b87a]"></div>
<div className="font-mono-custom text-[clamp(1.75rem,3.5vw,2.5rem)] text-[#f5f5f0] mb-2 tracking-tight"><span data-count="18">0</span><span className="text-[#828179] text-lg ml-1">mo</span></div>
<div className="text-[0.8125rem] uppercase tracking-wider text-[#828179]">Time reclaimed</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(6.25rem,10vw,10rem)] border-t border-[#1f1f1e] bg-[#0a0a0a] reveal-group" id="platform">
<div className="max-w-[clamp(20rem,86vw,83.75rem)] mx-auto px-6">
<div className="reveal-marker tech-badge font-mono-custom text-[0.625rem] tracking-[0.2em] mb-6 text-[#828179]">
                    [SYS·002] // OMNI_VISIBILITY
                </div>
<h2 className="reveal-heading text-[#f5f5f0] text-[clamp(2.25rem,4.5vw,4rem)] font-light tracking-tighter leading-[1.05] mb-16 max-w-3xl">
                    Singular interface. Absolute portfolio command.
                </h2>
<div className="reveal-content grid lg:grid-cols-[2fr_1fr] gap-6">

<div className="glass-panel rounded-sm relative overflow-hidden group min-h-[450px]">

<img alt="Cyber Server" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute inset-0 bg-[#050505]/60 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-transparent to-[#d4b87a]/5"></div>

<div className="absolute inset-0 flex items-center justify-center z-10">
<svg fill="none" height="100%" viewbox="0 0 600 400" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M150 100 L300 200 L450 120 M300 200 L250 320 L400 300 M300 200 L400 300" stroke="#1f1f1e" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<g className="node">
<circle cx="150" cy="100" fill="#828179" r="4"></circle>
<text fill="#828179" fontFamily="'Geist Mono', monospace" fontSize="10" text-anchor="middle" x="150" y="85">AERONAUTICS</text>
</g>
<g className="node">
<circle cx="450" cy="120" fill="#4a554a" r="4"></circle>
<text fill="#828179" fontFamily="'Geist Mono', monospace" fontSize="10" text-anchor="middle" x="450" y="105">NORDIC_GRID</text>
</g>
<g className="node cursor-pointer group/node">
<circle cx="300" cy="200" fill="#d4b87a" r="5"></circle>
<circle className="animate-ping" cx="300" cy="200" r="16" stroke="#d4b87a" stroke-opacity="0.5" strokeWidth="1" style={{animationDuration: '2s'}}></circle>

<rect fill="#050505" height="40" opacity="0.9" stroke="#d4b87a" strokeWidth="1" width="100" x="250" y="140"></rect>
<text fill="#f5f5f0" fontFamily="'Geist Mono', monospace" fontSize="10" text-anchor="middle" x="300" y="155">KESSLER_HLDG</text>
<text fill="#d4b87a" fontFamily="'Geist Mono', monospace" fontSize="10" text-anchor="middle" x="300" y="170">IRR: +28.4%</text>
<line stroke="#d4b87a" strokeWidth="1" x1="300" x2="300" y1="180" y2="195"></line>
</g>
</svg>
</div>
<div className="absolute bottom-6 left-6 tech-badge font-mono-custom text-[0.625rem] text-[#828179] z-20">
                            TOPOGRAPHY: EUR-II // REALTIME
                        </div>
</div>

<div className="grid grid-rows-2 gap-6">
<div className="glass-panel rounded-sm p-8 group transition-colors duration-300 flex flex-col justify-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-[#d4b87a]/5 blur-2xl"></div>
<iconify-icon className="text-[#828179] text-2xl mb-4" icon="solar:cpu-linear"></iconify-icon>
<h3 className="text-[#f5f5f0] text-lg tracking-tight mb-2">Algorithmic Exit Windows</h3>
<div className="font-mono-custom text-[2.5rem] text-[#d4b87a] mb-2 leading-none tracking-tighter">83.4%</div>
<p className="text-[0.8125rem] text-[#828179]">140+ quantitative signals parsed bi-weekly to compute maximal liquidity thresholds.</p>
</div>
<div className="glass-panel rounded-sm p-8 group transition-colors duration-300 flex flex-col justify-center relative overflow-hidden">
<iconify-icon className="text-[#828179] text-2xl mb-4" icon="solar:network-linear"></iconify-icon>
<h3 className="text-[#f5f5f0] text-lg tracking-tight mb-2">Equity Routing Engine</h3>
<p className="text-[0.8125rem] text-[#828179]">Autonomous secondary sale distribution to pre-cleared buyers inside your LP cohort. Zero friction.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(6.25rem,10vw,10rem)] border-t border-[#1f1f1e] bg-[#050505] reveal-group" data-trigger="market-depth" id="secondary">
<div className="max-w-[clamp(20rem,86vw,83.75rem)] mx-auto px-6 grid lg:grid-cols-[40%_60%] gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="reveal-marker tech-badge font-mono-custom text-[0.625rem] tracking-[0.2em] mb-6 text-[#828179]">
                        [SYS·003] // MARKET_MAKER
                    </div>
<h2 className="reveal-heading text-[#f5f5f0] text-[clamp(2.25rem,4.5vw,4rem)] font-light tracking-tighter leading-[1.05] mb-8 text-balance">
                        An institutional order book. Deployed internally.
                    </h2>
<p className="reveal-content text-[#828179] text-[clamp(1rem,1.2vw,1.125rem)] mb-8">
                        VOLX initializes a strictly regulated internal market specifically for your LP syndicate. It executes clean secondary transfers devoid of intermediaries, asymmetric data, or punitive fees. Immutable auditing built-in.
                    </p>
<a className="reveal-content btn-ghost-swiss inline-flex px-6 py-3 font-mono-custom text-[0.75rem] tracking-[0.05em]" data-scramble="" href="#access">VIEW_LEDGER_SPECS</a>
</div>

<div className="reveal-content order-1 lg:order-2 glass-panel rounded-sm p-8 relative overflow-hidden border-[#333]">
<div className="absolute inset-0 bg-[#0a0a0a]/80 z-0"></div>
<div className="relative z-10">
<div className="flex justify-between items-end border-b border-[#1f1f1e] pb-4 mb-8">
<div className="font-mono-custom text-[0.625rem] text-[#828179]">INTERNAL_EXCHANGE // EUR-II</div>
<div className="font-mono-custom text-[0.625rem] text-[#d4b87a] flex items-center gap-2"><span className="blinking-dot"></span> MATCHING_ENGINE: ACTIVE</div>
</div>
<div className="grid grid-cols-[1fr_1px_1fr] gap-6 relative">
<div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#1f1f1e] -translate-x-1/2"></div>

<div className="flex flex-col gap-2">
<div className="font-mono-custom text-[0.625rem] text-[#828179] mb-3 text-right">BID_SIZE <span className="mx-2">|</span> PRICE</div>
<div className="h-6 flex justify-end relative group"><div className="market-bar market-bar-fill bg-[#d4b87a]/20 absolute right-0 h-full border-l border-[#d4b87a]" data-width="65%"></div><span className="relative z-10 font-mono-custom text-[0.6875rem] leading-6 pr-3 text-[#f5f5f0]">40k <span className="mx-2 text-[#828179]">|</span> 2.68x</span></div>
<div className="h-6 flex justify-end relative group"><div className="market-bar market-bar-fill bg-[#d4b87a]/15 absolute right-0 h-full border-l border-[#d4b87a]/50" data-width="80%"></div><span className="relative z-10 font-mono-custom text-[0.6875rem] leading-6 pr-3 text-[#f5f5f0]">120k <span className="mx-2 text-[#828179]">|</span> 2.65x</span></div>
<div className="h-6 flex justify-end relative group"><div className="market-bar market-bar-fill bg-[#d4b87a]/10 absolute right-0 h-full border-l border-[#d4b87a]/30" data-width="95%"></div><span className="relative z-10 font-mono-custom text-[0.6875rem] leading-6 pr-3 text-[#828179]">250k <span className="mx-2 text-[#1f1f1e]">|</span> 2.62x</span></div>
<div className="h-6 flex justify-end relative group"><div className="market-bar market-bar-fill bg-[#d4b87a]/10 absolute right-0 h-full border-l border-[#d4b87a]/30" data-width="60%"></div><span className="relative z-10 font-mono-custom text-[0.6875rem] leading-6 pr-3 text-[#828179]">35k <span className="mx-2 text-[#1f1f1e]">|</span> 2.60x</span></div>
<div className="h-6 flex justify-end relative group"><div className="market-bar market-bar-fill bg-[#d4b87a]/5 absolute right-0 h-full border-l border-[#d4b87a]/20" data-width="70%"></div><span className="relative z-10 font-mono-custom text-[0.6875rem] leading-6 pr-3 text-[#828179]">80k <span className="mx-2 text-[#1f1f1e]">|</span> 2.55x</span></div>
</div>

<div></div>

<div className="flex flex-col gap-2">
<div className="font-mono-custom text-[0.625rem] text-[#828179] mb-3">PRICE <span className="mx-2">|</span> ASK_SIZE</div>
<div className="h-6 flex justify-start relative group"><div className="market-bar market-bar-fill bg-[#f5f5f0]/10 absolute left-0 h-full border-r border-[#f5f5f0]/50" data-width="75%"></div><span className="relative z-10 font-mono-custom text-[0.6875rem] leading-6 pl-3 text-[#f5f5f0]">2.71x <span className="mx-2 text-[#828179]">|</span> 85k</span></div>
<div className="h-6 flex justify-start relative group"><div className="market-bar market-bar-fill bg-[#f5f5f0]/5 absolute left-0 h-full border-r border-[#f5f5f0]/30" data-width="60%"></div><span className="relative z-10 font-mono-custom text-[0.6875rem] leading-6 pl-3 text-[#828179]">2.75x <span className="mx-2 text-[#1f1f1e]">|</span> 40k</span></div>
<div className="h-6 flex justify-start relative group"><div className="market-bar market-bar-fill bg-[#f5f5f0]/5 absolute left-0 h-full border-r border-[#f5f5f0]/20" data-width="90%"></div><span className="relative z-10 font-mono-custom text-[0.6875rem] leading-6 pl-3 text-[#828179]">2.80x <span className="mx-2 text-[#1f1f1e]">|</span> 210k</span></div>
<div className="h-6 flex justify-start relative group"><div className="market-bar market-bar-fill bg-[#f5f5f0]/5 absolute left-0 h-full border-r border-[#f5f5f0]/20" data-width="65%"></div><span className="relative z-10 font-mono-custom text-[0.6875rem] leading-6 pl-3 text-[#828179]">2.85x <span className="mx-2 text-[#1f1f1e]">|</span> 60k</span></div>
<div className="h-6 flex justify-start relative group"><div className="market-bar market-bar-fill bg-[#f5f5f0]/5 absolute left-0 h-full border-r border-[#f5f5f0]/20" data-width="85%"></div><span className="relative z-10 font-mono-custom text-[0.6875rem] leading-6 pl-3 text-[#828179]">2.90x <span className="mx-2 text-[#1f1f1e]">|</span> 180k</span></div>
</div>
</div>

<div className="mt-6 pt-4 border-t border-[#1f1f1e] flex justify-between items-center font-mono-custom text-[0.625rem]">
<span className="text-[#828179]">SPREAD_DELTA</span>
<span className="text-[#f5f5f0] border border-[#1f1f1e] px-2 py-1 bg-[#050505]">Δ 0.03x</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(6.25rem,10vw,10rem)] border-y border-[#1f1f1e] bg-[#0a0a0a] reveal-group relative overflow-hidden">

<img alt="Corporate" className="absolute inset-0 w-full h-full object-cover opacity-[0.03] grayscale mix-blend-screen pointer-events-none" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="max-w-[clamp(20rem,86vw,83.75rem)] mx-auto px-6 relative z-10">
<div className="reveal-marker tech-badge font-mono-custom text-[0.625rem] tracking-[0.2em] mb-6 text-[#828179]">
                    [SYS·004] // PROOF_OF_WORK
                </div>
<h2 className="reveal-heading text-[#f5f5f0] text-[clamp(2.25rem,4.5vw,4rem)] font-light tracking-tighter leading-[1.05] mb-16">
                    Firms synchronized with VOLX.
                </h2>
<div className="reveal-content flex flex-col gap-6">
<div className="grid lg:grid-cols-[2fr_1fr] gap-6">
<div className="glass-panel rounded-sm p-8 group hover:border-[#d4b87a] transition-all duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#d4b87a]/0 to-[#d4b87a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="font-mono-custom text-[0.625rem] text-[#828179] mb-6 tracking-widest relative z-10">NORDIC INFRASTRUCTURE FUND</div>
<h3 className="text-[clamp(1.75rem,3vw,2.5rem)] font-light text-[#f5f5f0] leading-tight mb-2 tracking-tighter relative z-10">-14 months</h3>
<p className="text-[0.875rem] text-[#828179] relative z-10">Reduced average hold period via anticipatory liquidity window modeling.</p>
</div>
<div className="glass-panel rounded-sm p-8 group hover:border-[#d4b87a] transition-all duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#d4b87a]/0 to-[#d4b87a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="font-mono-custom text-[0.625rem] text-[#828179] mb-6 tracking-widest relative z-10">SERIES C GROWTH EQUITY GP</div>
<h3 className="text-[clamp(1.75rem,3vw,2.5rem)] font-light text-[#f5f5f0] leading-tight mb-2 tracking-tighter relative z-10">75%</h3>
<p className="text-[0.875rem] text-[#828179] relative z-10">Exits executed exactly within the 30-day predicted threshold.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(6.25rem,10vw,10rem)] border-b border-[#1f1f1e] bg-[#050505] reveal-group">
<div className="max-w-[clamp(20rem,86vw,83.75rem)] mx-auto px-6">
<div className="reveal-marker tech-badge font-mono-custom text-[0.625rem] tracking-[0.2em] mb-6 text-[#828179]">
                    [SYS·005] // INTEGRATION_PATH
                </div>
<h2 className="reveal-heading text-[#f5f5f0] text-[clamp(2.25rem,4.5vw,4rem)] font-light tracking-tighter leading-[1.05] mb-24 max-w-2xl">
                    Full deployment in 21 days. Not 3 quarters.
                </h2>
<div className="reveal-content relative">

<div className="hidden md:block absolute top-4 left-0 w-full h-[1px] bg-[#1f1f1e] z-0">
<div className="absolute top-[-2px] left-0 w-1/4 h-[5px] bg-[#d4b87a] shadow-[0_0_10px_rgba(212,184,122,0.5)] z-10"></div>
</div>
<div className="grid md:grid-cols-4 gap-12 md:gap-6 relative z-10">
<div className="bg-[#050505] md:pr-6 relative pt-10 md:pt-0">
<div className="hidden md:block absolute top-[13px] left-0 w-2 h-2 rounded-full bg-[#d4b87a] ring-4 ring-[#050505]"></div>
<div className="font-mono-custom text-[0.875rem] text-[#d4b87a] mb-2 md:mt-10">PHASE_01</div>
<h3 className="text-[#f5f5f0] text-lg mb-2 tracking-tight">Due Diligence</h3>
<div className="font-mono-custom text-[0.625rem] text-[#828179] mb-3">T+0 TO T+7</div>
<p className="text-[0.8125rem] text-[#828179]">Structural evaluation of LP agreements and secure data-room ingestion.</p>
</div>
<div className="bg-[#050505] md:pr-6 relative pt-10 md:pt-0">
<div className="hidden md:block absolute top-[13px] left-0 w-2 h-2 rounded-full border border-[#828179] bg-[#050505] ring-4 ring-[#050505]"></div>
<div className="font-mono-custom text-[0.875rem] text-[#828179] mb-2 md:mt-10">PHASE_02</div>
<h3 className="text-[#f5f5f0] text-lg mb-2 tracking-tight">API Handshake</h3>
<div className="font-mono-custom text-[0.625rem] text-[#828179] mb-3">T+8 TO T+12</div>
<p className="text-[0.8125rem] text-[#828179]">Encrypted connection established with incumbent fund administration software.</p>
</div>
<div className="bg-[#050505] md:pr-6 relative pt-10 md:pt-0">
<div className="hidden md:block absolute top-[13px] left-0 w-2 h-2 rounded-full border border-[#828179] bg-[#050505] ring-4 ring-[#050505]"></div>
<div className="font-mono-custom text-[0.875rem] text-[#828179] mb-2 md:mt-10">PHASE_03</div>
<h3 className="text-[#f5f5f0] text-lg mb-2 tracking-tight">Model Calibration</h3>
<div className="font-mono-custom text-[0.625rem] text-[#828179] mb-3">T+13 TO T+15</div>
<p className="text-[0.8125rem] text-[#828179]">AI neural matrix tuned precisely to your firm's vintage and sector mandate.</p>
</div>
<div className="bg-[#050505] relative pt-10 md:pt-0">
<div className="hidden md:block absolute top-[13px] left-0 w-2 h-2 rounded-full border border-[#828179] bg-[#050505] ring-4 ring-[#050505]"></div>
<div className="font-mono-custom text-[0.875rem] text-[#828179] mb-2 md:mt-10">PHASE_04</div>
<h3 className="text-[#f5f5f0] text-lg mb-2 tracking-tight">System Live</h3>
<div className="font-mono-custom text-[0.625rem] text-[#828179] mb-3">T+21</div>
<p className="text-[0.8125rem] text-[#828179]">Total operational handover. Market maker and intelligence layer active.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(6.25rem,10vw,10rem)] border-b border-[#1f1f1e] bg-[#0a0a0a] reveal-group" id="access">
<div className="max-w-[clamp(20rem,86vw,83.75rem)] mx-auto px-6 grid lg:grid-cols-[1fr_1fr] gap-20">
<div>
<div className="reveal-marker tech-badge font-mono-custom text-[0.625rem] tracking-[0.2em] mb-6 text-[#828179]">
                        [SYS·006] // CLEARANCE
                    </div>
<h2 className="reveal-heading text-[#f5f5f0] text-[clamp(2.25rem,4.5vw,4rem)] font-light tracking-tighter leading-[1.05] mb-8">
                        Clearance via application.
                    </h2>
<p className="reveal-content text-[#828179] mb-12 max-w-[28rem] text-[1.0625rem]">
                        VOLX restricts access to a hermetic GP/LP cohort. We process exactly 12 institutional onboarding protocols per quarter. Initiated via structural review, not a sales pitch.
                    </p>
<div className="reveal-content glass-panel p-6 rounded-sm border-l-2 border-l-[#d4b87a]">
<div className="font-mono-custom text-[0.625rem] text-[#828179] mb-4 border-b border-[#1f1f1e] pb-2 flex justify-between">
<span>COHORT_STATUS</span>
<span className="text-[#d4b87a]">OPEN</span>
</div>
<ul className="font-mono-custom text-[0.75rem] text-[#f5f5f0] space-y-2">
<li className="flex justify-between"><span>ACTIVE_CYCLE:</span> <span className="text-[#828179]">Q1 2026</span></li>
<li className="flex justify-between"><span>CAPACITY_REMAINING:</span> <span className="text-[#828179]">04 SLOTS</span></li>
<li className="flex justify-between"><span>PREREQUISITE:</span> <span className="text-[#828179]">NDA_EXECUTION</span></li>
</ul>
</div>
</div>
<div className="reveal-content relative">

<div className="glass-panel p-8 rounded-sm relative z-10">
<div className="absolute top-0 right-0 p-4 font-mono-custom text-[0.625rem] text-[#828179]">
                            SECURE_UPLINK
                        </div>
<form className="space-y-6 mt-4" onsubmit="event.preventDefault();">
<div>
<label className="block font-mono-custom text-[0.625rem] text-[#828179] mb-2 tracking-wider">ENTITY_NAME</label>
<input className="w-full bg-[#050505] border border-[#1f1f1e] p-3 text-[0.875rem] text-[#f5f5f0]" placeholder="e.g. Nordic Infrastructure Partners" type="text"/>
</div>
<div>
<label className="block font-mono-custom text-[0.625rem] text-[#828179] mb-2 tracking-wider">AUM_PARAMETER</label>
<select %23828179\"="" 0="" 24="" 24\"="" className="w-full bg-[#050505] border border-[#1f1f1e] p-3 text-[0.875rem] text-[#f5f5f0] appearance-none" height='\"24\"' style={{backgroundImage: 'url(\'data:image/svg+xml'}} viewbox='\"0' width='\"24\"' xmlns='\"http://www.w3.org/2000/svg\"'><path 10l5="" 5="" 5-5z\"="" d='\"M7'></path>'); background-repeat: no-repeat; background-position-x: 98%; background-position-y: 50%;"&gt;
                                    <option disabled="" selected="" value="">Select threshold...</option>
<option value="200-500">$200M – $500M</option>
<option value="500-2b">$500M – $2B</option>
<option value="2b+">$2B+</option>
</select>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block font-mono-custom text-[0.625rem] text-[#828179] mb-2 tracking-wider">OPERATIVE_NAME</label>
<input className="w-full bg-[#050505] border border-[#1f1f1e] p-3 text-[0.875rem] text-[#f5f5f0]" placeholder="Full Name" type="text"/>
</div>
<div>
<label className="block font-mono-custom text-[0.625rem] text-[#828179] mb-2 tracking-wider">RANK/TITLE</label>
<input className="w-full bg-[#050505] border border-[#1f1f1e] p-3 text-[0.875rem] text-[#f5f5f0]" placeholder="Partner / MD" type="text"/>
</div>
</div>
<button className="btn-swiss w-full py-4 font-mono-custom text-[0.8125rem] tracking-[0.1em] mt-4" type="submit">
                                TRANSMIT_PROTOCOL
                            </button>
</form>
</div>
</div>
</div>
</section>
</main>
<footer className="bg-[#050505] relative z-10 border-t border-[#1f1f1e]">
<div className="max-w-[clamp(20rem,86vw,83.75rem)] mx-auto px-6 py-16 grid md:grid-cols-[1fr_1fr] gap-12">
<div>
<div className="text-[#f5f5f0] text-xl font-medium tracking-tighter mb-2">VOLX</div>
<div className="text-[0.875rem] text-[#828179] mb-12">Architecting PE Liquidity.</div>
<address className="not-italic font-mono-custom text-[0.625rem] text-[#828179] leading-relaxed">
                    VOLX Capital Technologies AG<br/>
                    Talstrasse 82<br/>
                    8001 Zürich<br/>
                    Switzerland
                </address>
</div>
<div className="grid grid-cols-2 gap-8 font-mono-custom text-[0.6875rem]">
<div className="flex flex-col gap-4">
<span className="text-[#f5f5f0] mb-2 tracking-wider">SYSTEMS</span>
<a className="text-[#828179] hover:text-[#d4b87a] transition-colors" data-scramble="" href="#">Platform</a>
<a className="text-[#828179] hover:text-[#d4b87a] transition-colors" data-scramble="" href="#">Intelligence</a>
<a className="text-[#828179] hover:text-[#d4b87a] transition-colors" data-scramble="" href="#">Market</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-[#f5f5f0] mb-2 tracking-wider">PROTOCOLS</span>
<a className="text-[#828179] hover:text-[#d4b87a] transition-colors" data-scramble="" href="#">Compliance</a>
<a className="text-[#828179] hover:text-[#d4b87a] transition-colors" data-scramble="" href="#">Privacy</a>
<a className="text-[#828179] hover:text-[#d4b87a] transition-colors" data-scramble="" href="#">Terms</a>
</div>
</div>
</div>
<div className="border-t border-[#1f1f1e] bg-[#0a0a0a]">
<div className="max-w-[clamp(20rem,86vw,83.75rem)] mx-auto px-6 h-12 flex items-center justify-between font-mono-custom text-[0.625rem] text-[#555]">
<div>© 2025 VOLX Capital Technologies AG</div>
<div>[SYS_STATE: SECURE]</div>
</div>
</div>
</footer>


    </>
  );
}
