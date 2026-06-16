import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Custom Cursor Logic (Minimalist)
            const cursor = document.getElementById('cursor');
            const interactives = document.querySelectorAll('.interactive, a, button, input');
            
            let mouseX = window.innerWidth / 2;
            let mouseY = window.innerHeight / 2;
            let cursorX = mouseX;
            let cursorY = mouseY;
            
            window.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });

            function renderCursor() {
                cursorX += (mouseX - cursorX) * 0.15;
                cursorY += (mouseY - cursorY) * 0.15;
                cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
                requestAnimationFrame(renderCursor);
            }
            requestAnimationFrame(renderCursor);

            interactives.forEach(el => {
                el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
                el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
            });

            // 2. Scroll Reveal Observer
            const revealElements = document.querySelectorAll('.reveal');
            const revealOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
            
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, revealOptions);

            revealElements.forEach(el => revealObserver.observe(el));

            // 3. High-End Topography Canvas Simulation
            const canvas = document.getElementById('hero-canvas');
            const ctx = canvas.getContext('2d');
            let w, h;
            let time = 0;

            function resize() {
                w = canvas.width = window.innerWidth;
                h = canvas.height = window.innerHeight;
            }
            window.addEventListener('resize', resize);
            resize();

            function drawTopography() {
                ctx.clearRect(0, 0, w, h);
                ctx.lineWidth = 1;
                
                const lines = 12;
                const amplitude = 100;
                const frequency = 0.002;
                
                for(let i = 0; i < lines; i++) {
                    ctx.beginPath();
                    // Fade out lines towards bottom
                    const alpha = 0.15 - (i * 0.01);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${Math.max(0.02, alpha)})`;
                    
                    const startY = (h / 2) - 100 + (i * 30);
                    ctx.moveTo(0, startY);
                    
                    for(let x = 0; x < w; x += 10) {
                        // Complex sine wave for topographical feel
                        const yOffset = Math.sin((x * frequency) + time + (i * 0.5)) * amplitude * Math.sin(time * 0.2 + i);
                        ctx.lineTo(x, startY + yOffset);
                    }
                    ctx.stroke();
                }
                
                time += 0.01;
                requestAnimationFrame(drawTopography);
            }
            drawTopography();

            // 4. Counters
            const counters = document.querySelectorAll('.counter, .counter-float');
            const counterObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        animateValue(entry.target, 0, parseFloat(entry.target.dataset.target), 2000, entry.target.classList.contains('counter-float'));
                        counterObserver.unobserve(entry.target);
                    }
                });
            });
            counters.forEach(c => counterObserver.observe(c));

            function animateValue(obj, start, end, duration, isFloat, formatComma = false) {
                let startTimestamp = null;
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    const easeProgress = 1 - Math.pow(1 - progress, 4); 
                    
                    let val = start + easeProgress * (end - start);
                    if(isFloat) {
                        obj.innerHTML = val.toFixed(1);
                    } else {
                        val = Math.floor(val);
                        obj.innerHTML = formatComma ? val.toLocaleString() : val;
                    }
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    }
                };
                window.requestAnimationFrame(step);
            }

            // 5. Scroll Transforms (Terminal & Progress Bar)
            const terminalWrapper = document.getElementById('terminal-wrapper');
            const progressBar = document.getElementById('scroll-progress');
            
            let lastScrollY = window.scrollY;
            let ticking = false;

            window.addEventListener('scroll', () => {
                lastScrollY = window.scrollY;
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        handleScroll(lastScrollY);
                        ticking = false;
                    });
                    ticking = true;
                }
            });

            function handleScroll(scrollY) {
                // Progress Bar
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercent = (scrollY / docHeight) * 100;
                progressBar.style.width = `${scrollPercent}%`;

                // Terminal 3D effect
                if(terminalWrapper) {
                    const rect = terminalWrapper.getBoundingClientRect();
                    const viewHeight = window.innerHeight;
                    
                    if (rect.top < viewHeight && rect.bottom > 0) {
                        let progress = 1 - (rect.top / viewHeight);
                        progress = Math.max(0, Math.min(1, progress));
                        
                        // subtle tilt for strict editorial look, not overly gamified
                        const rotateX = 10 - (progress * 10);
                        const scale = 0.98 + (progress * 0.02);
                        
                        terminalWrapper.style.transform = `rotateX(${rotateX}deg) scale(${scale})`;
                    }
                }
            }
            
            handleScroll(window.scrollY);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise-overlay"></div>
<div id="cursor"></div>

<div className="fixed top-0 left-0 h-[1px] bg-white z-[60] w-0 transition-all duration-75 ease-out" id="scroll-progress"></div>

<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-container py-6 mix-blend-difference border-b border-white/10 backdrop-blur-md bg-[#030303]/50">
<a className="font-display font-semibold text-lg tracking-[0.2em] uppercase interactive hover:opacity-50 transition-opacity" href="#">
            AXIOM
        </a>
<div className="hidden lg:flex items-center gap-12 font-mono text-xs tracking-[0.1em] text-[#888888]">
<a className="hover:text-white transition-colors interactive" href="#architecture">ARCHITECTURE</a>
<a className="hover:text-white transition-colors interactive" href="#terminal">TERMINAL</a>
<a className="hover:text-white transition-colors interactive" href="#performance">PERFORMANCE</a>
<a className="hover:text-white transition-colors interactive" href="#manifesto">MANIFESTO</a>
</div>
<a className="font-mono text-xs uppercase tracking-[0.1em] text-white flex items-center gap-2 group interactive" href="#clearance">
            REQUEST_ACCESS
            <div className="w-2 h-2 rounded-full bg-white group-hover:scale-150 transition-transform"></div>
</a>
</nav>

<section className="relative min-h-[100vh] w-full flex flex-col justify-center pb-[clamp(4rem,10vh,8rem)] pt-[clamp(8rem,15vw,12rem)] px-container z-10 border-b border-[#1F1F1F]">

<canvas className="absolute inset-0 w-full h-full -z-10 opacity-40" id="hero-canvas"></canvas>
<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent -z-10"></div>
<div className="relative z-10 w-full max-w-[120rem] mx-auto stagger-container">
<div className="font-mono text-xs text-[#888888] uppercase tracking-[0.15em] mb-8 reveal flex items-center gap-4" style={{-StaggerIdx: '0'}}>
<span>[01] // INITIALIZATION</span>
<div className="h-px w-12 bg-white/20"></div>
</div>
<h1 className="text-h1 font-display font-semibold leading-[0.85] tracking-tighter uppercase mb-[clamp(2rem,4vw,4rem)] reveal" style={{-StaggerIdx: '1'}}>
                Algorithms <br className="hidden md:block"/>do not hesitate.<br/>
<span className="text-[#333333] italic">Your legacy shouldn't either.</span>
</h1>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end reveal" style={{-StaggerIdx: '2'}}>
<div className="md:col-span-5 lg:col-span-4">
<p className="text-body text-[#888888] leading-[1.6] mb-8">
                        AXIOM is an autonomous family office architecture. We replace human bottleneck and emotional bias with sub-millisecond quantitative execution and predictive tax routing.
                    </p>
<div className="flex items-center gap-8">
<a className="btn-editorial inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white text-white font-mono text-xs uppercase tracking-[0.1em] interactive" href="#clearance">
<span>INITIALIZE</span>
</a>
<div className="font-mono text-xs text-[#333333] tracking-[0.1em] uppercase">
                            AUM: $6.1B<br/>INVITE ONLY
                        </div>
</div>
</div>
<div className="md:col-span-7 lg:col-span-8 hidden md:flex justify-end opacity-20 pointer-events-none">
<svg fill="none" height="200" stroke="white" strokeWidth="0.5" viewbox="0 0 200 200" width="200">
<circle cx="100" cy="100" r="90" stroke-dasharray="4 4"></circle>
<circle cx="100" cy="100" r="60"></circle>
<path d="M100 0 V200 M0 100 H200" opacity="0.5"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="w-full border-b border-[#1F1F1F] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#030303]" id="performance">

<div className="p-card border-b lg:border-b-0 lg:border-r border-[#1F1F1F] group hover:bg-[#0A0A0A] transition-colors duration-500 interactive flex flex-col justify-between aspect-square lg:aspect-auto">
<div className="font-mono text-xs text-[#555555] tracking-[0.1em] uppercase flex justify-between items-start">
<span>Latency</span>
<span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">01</span>
</div>
<div className="font-display text-h2 font-semibold tracking-tighter mt-12">
<span className="counter" data-target="12">0</span><span className="text-lg text-[#555555] ml-2 font-normal">ms</span>
</div>
</div>

<div className="p-card border-b lg:border-b-0 lg:border-r border-[#1F1F1F] group hover:bg-[#0A0A0A] transition-colors duration-500 interactive flex flex-col justify-between aspect-square lg:aspect-auto">
<div className="font-mono text-xs text-[#555555] tracking-[0.1em] uppercase flex justify-between items-start">
<span>Tax Jurisdictions</span>
<span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">02</span>
</div>
<div className="font-display text-h2 font-semibold tracking-tighter mt-12">
<span className="counter" data-target="184">0</span>
</div>
</div>

<div className="p-card border-b md:border-b-0 lg:border-r border-[#1F1F1F] group hover:bg-[#0A0A0A] transition-colors duration-500 interactive flex flex-col justify-between aspect-square lg:aspect-auto">
<div className="font-mono text-xs text-[#555555] tracking-[0.1em] uppercase flex justify-between items-start">
<span>Alpha Gen</span>
<span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">03</span>
</div>
<div className="font-display text-h2 font-semibold tracking-tighter mt-12">
                +<span className="counter-float" data-target="22.4">0.0</span>%
            </div>
</div>

<div className="p-card group hover:bg-[#0A0A0A] transition-colors duration-500 interactive flex flex-col justify-between aspect-square lg:aspect-auto">
<div className="font-mono text-xs text-[#555555] tracking-[0.1em] uppercase flex justify-between items-start">
<span>Human Input</span>
<span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">04</span>
</div>
<div className="font-display text-h2 font-semibold tracking-tighter mt-12 text-[#333333]">
                0.00%
            </div>
</div>
</section>

<section className="py-section px-container max-w-[120rem] mx-auto border-b border-[#1F1F1F]" id="manifesto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-section">
<div className="lg:col-span-5 relative">
<div className="lg:sticky lg:top-[clamp(8rem,15vh,10rem)] stagger-container">
<div className="font-mono text-xs text-[#888888] uppercase tracking-[0.15em] mb-8 reveal flex items-center gap-4" style={{-StaggerIdx: '0'}}>
<span>[02] // THE PROBLEM</span>
<div className="h-px w-12 bg-white/20"></div>
</div>
<h2 className="text-h2 font-display font-semibold leading-[1.0] tracking-tighter mb-8 reveal" style={{-StaggerIdx: '1'}}>
                        Biology is a liability in capital markets.
                    </h2>
<div className="w-full h-px bg-[#1F1F1F] mb-8 reveal" style={{-StaggerIdx: '1.5'}}></div>
<p className="text-body text-[#888888] leading-[1.6] mb-8 reveal" style={{-StaggerIdx: '2'}}>
                        Traditional wealth managers sleep, panic during drawdowns, and miss fleeting cross-border tax arbitrage opportunities. The old model of fragmented CPAs and subjective advisors is mathematically inferior.
                    </p>
<p className="text-body text-white font-medium leading-[1.6] reveal" style={{-StaggerIdx: '3'}}>
                        AXIOM operates outside the bounds of human limitation. Unemotional. Tireless. Precise.
                    </p>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-[clamp(2rem,4vw,4rem)]">

<div className="bg-[#050505] border border-[#1F1F1F] aspect-[4/3] sm:aspect-[16/9] relative group reveal p-8 flex flex-col justify-between">
<div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
<div className="flex justify-between items-start font-mono text-xs text-[#555555] relative z-10 uppercase tracking-widest">
<span>NODE_ALPHA_7</span>
<span className="text-white flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                            ACTIVE
                        </span>
</div>
<div className="h-2/3 w-full border-b border-l border-[#1F1F1F] relative z-10 flex items-end">
<div className="w-full flex justify-between items-end h-full px-4 gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-700">
<div className="w-full bg-white/5 h-[20%] hover:bg-white/20 transition-colors"></div>
<div className="w-full bg-white/10 h-[45%] hover:bg-white/30 transition-colors"></div>
<div className="w-full bg-white/5 h-[30%] hover:bg-white/20 transition-colors"></div>
<div className="w-full bg-white/20 h-[80%] hover:bg-white/40 transition-colors"></div>
<div className="w-full bg-white/10 h-[60%] hover:bg-white/30 transition-colors"></div>
<div className="w-full bg-white h-[95%] hover:bg-white transition-colors relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[0.6rem] font-mono text-white tracking-widest">OPT</div>
</div>
</div>
</div>
</div>

<div className="bg-[#050505] border border-[#1F1F1F] aspect-[4/3] sm:aspect-[16/9] relative group reveal overflow-hidden">
<div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
<div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/50 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-[2s] ease-linear"></div>
<div className="absolute inset-0 p-8 flex flex-col gap-6 z-10">
<div className="font-mono text-xs text-[#555555] uppercase tracking-widest border-b border-[#1F1F1F] pb-4">JURISDICTION_SCAN // TAX_VECTOR</div>
<div className="flex-1 w-full flex flex-col gap-2 opacity-40 group-hover:opacity-100 transition-opacity duration-500 font-mono text-[0.65rem] tracking-[0.2em] text-[#888888]">
<div className="flex justify-between border-b border-[#1F1F1F] pb-2"><span>USA_ENT_01</span> <span className="text-[#333333]">ANALYZING...</span></div>
<div className="flex justify-between border-b border-[#1F1F1F] pb-2"><span>CHE_TRUST_99</span> <span className="text-white">OPTIMIZED_PATH_FOUND</span></div>
<div className="flex justify-between border-b border-[#1F1F1F] pb-2"><span>SGP_HOLD_X</span> <span className="text-[#333333]">ANALYZING...</span></div>
<div className="flex justify-between border-b border-[#1F1F1F] pb-2"><span>GBR_CORP_4</span> <span className="text-[#333333]">ROUTING...</span></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-section relative overflow-hidden flex flex-col items-center terminal-perspective bg-[#030303] border-b border-[#1F1F1F]" id="terminal">
<div className="text-center max-w-3xl px-container z-10 mb-[clamp(4rem,8vw,8rem)] stagger-container">
<div className="font-mono text-xs text-[#888888] uppercase tracking-[0.15em] mb-8 flex items-center justify-center gap-4 reveal" style={{-StaggerIdx: '0'}}>
<div className="h-px w-8 bg-white/20"></div>
<span>[03] // VISIBILITY</span>
<div className="h-px w-8 bg-white/20"></div>
</div>
<h2 className="text-h2 font-display font-semibold leading-[1.0] tracking-tighter mb-6 reveal" style={{-StaggerIdx: '1'}}>
                Absolute truth about your capital.
            </h2>
<p className="text-body text-[#888888] leading-[1.6] max-w-2xl mx-auto reveal" style={{-StaggerIdx: '2'}}>
                Command your empire through a bespoke, military-grade terminal. Every asset, liability, and tax vector mapped in real-time.
            </p>
</div>

<div className="w-full max-w-[100rem] px-container relative group transition-transform duration-[1s] ease-out z-0 interactive" id="terminal-wrapper">
<div className="w-full rounded bg-[#050505] border border-[#1F1F1F] shadow-[0_30px_100px_-20px_rgba(0,0,0,1)] ring-1 ring-white/5 overflow-hidden flex flex-col h-[clamp(30rem,60vh,50rem)]">

<div className="flex items-center justify-between px-6 py-3 border-b border-[#1F1F1F] bg-[#080808]">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-[#1F1F1F]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#1F1F1F]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#1F1F1F]"></div>
</div>
<div className="font-mono text-[0.65rem] text-[#555555] tracking-widest uppercase">Axiom_Command_Center_v4.1</div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
<span className="font-mono text-[0.6rem] text-white tracking-widest">LIVE</span>
</div>
</div>

<div className="flex flex-1 overflow-hidden relative">

<div className="hidden md:flex flex-col w-64 border-r border-[#1F1F1F] bg-[#050505] p-6 font-mono text-xs text-[#888888] tracking-widest uppercase gap-6">
<div className="text-[#333333] mb-2">DIRECTORY</div>
<div className="text-white flex items-center gap-2 cursor-pointer"><iconify-icon icon="solar:folder-linear"></iconify-icon> GLOBAL_PORTFOLIO</div>
<div className="flex items-center gap-2 ml-4 cursor-pointer hover:text-white transition-colors"><iconify-icon icon="solar:document-linear"></iconify-icon> EQUITIES_US</div>
<div className="flex items-center gap-2 ml-4 cursor-pointer hover:text-white transition-colors"><iconify-icon icon="solar:document-linear"></iconify-icon> PRIVATE_DEBT</div>
<div className="flex items-center gap-2 ml-4 cursor-pointer hover:text-white transition-colors"><iconify-icon icon="solar:document-linear"></iconify-icon> REAL_ESTATE_EU</div>
<div className="mt-8 text-[#333333] mb-2">ENGINES</div>
<div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors"><iconify-icon icon="solar:cpu-linear"></iconify-icon> TAX_ROUTING</div>
<div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors"><iconify-icon icon="solar:shield-keyhole-linear"></iconify-icon> ESTATE_TRUST</div>
<div className="mt-auto pt-6 border-t border-[#1F1F1F] text-[0.6rem]">
<div>SYS.LOAD: <span className="text-white">12.4%</span></div>
<div className="mt-1">ENCRYPTION: <span className="text-white">AES-256</span></div>
</div>
</div>

<div className="flex-1 flex flex-col bg-[#030303] relative overflow-hidden">
<div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

<div className="grid grid-cols-2 md:grid-cols-4 border-b border-[#1F1F1F] relative z-10 bg-[#030303]/80 backdrop-blur">
<div className="p-6 border-r border-[#1F1F1F]">
<div className="font-mono text-[0.65rem] text-[#555555] tracking-widest mb-2">TOTAL_AUM</div>
<div className="font-display text-2xl font-semibold tracking-tighter text-white">$842,104,291</div>
</div>
<div className="p-6 border-r border-[#1F1F1F] md:border-b-0 border-b relative">
<div className="absolute top-0 left-0 w-full h-px bg-white"></div>
<div className="font-mono text-[0.65rem] text-[#555555] tracking-widest mb-2">24H_DELTA</div>
<div className="font-display text-2xl font-semibold tracking-tighter text-white">+1.24%</div>
</div>
<div className="p-6 border-r border-[#1F1F1F]">
<div className="font-mono text-[0.65rem] text-[#555555] tracking-widest mb-2">TAX_MITIGATED</div>
<div className="font-display text-2xl font-semibold tracking-tighter text-white">$4,210,000</div>
</div>
<div className="p-6">
<div className="font-mono text-[0.65rem] text-[#555555] tracking-widest mb-2">ACTIVE_NODES</div>
<div className="font-display text-2xl font-semibold tracking-tighter text-white">1,024</div>
</div>
</div>

<div className="flex-1 p-8 relative z-10 flex flex-col group/chart">
<div className="flex justify-between items-center mb-8">
<div className="font-mono text-xs text-[#888888] tracking-widest uppercase">CAPITAL_DEPLOYMENT_VECTOR</div>
<div className="font-mono text-[0.65rem] text-[#555555] tracking-widest uppercase border border-[#1F1F1F] px-3 py-1 rounded-full">REAL_TIME</div>
</div>
<div className="flex-1 relative w-full border-b border-[#1F1F1F]">

<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 1000 300">
<defs>
<lineargradient id="chartGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="rgba(255,255,255,0.15)"></stop>
<stop offset="100%" stop-color="rgba(255,255,255,0)"></stop>
</lineargradient>
</defs>

<path d="M0 75 H1000 M0 150 H1000 M0 225 H1000" fill="none" stroke="#1F1F1F" stroke-dasharray="4 4" strokeWidth="1"></path>

<path className="transition-all duration-1000 group-hover/chart:opacity-80 opacity-40" d="M0 250 C 100 240, 200 280, 300 200 C 400 120, 500 180, 600 150 C 700 120, 800 50, 900 80 L 1000 60 L 1000 300 L 0 300 Z" fill="url(#chartGrad)"></path>

<path className="drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" d="M0 250 C 100 240, 200 280, 300 200 C 400 120, 500 180, 600 150 C 700 120, 800 50, 900 80 L 1000 60" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>

<circle cx="1000" cy="60" fill="white" r="4"></circle>
<circle className="animate-ping opacity-50" cx="1000" cy="60" fill="none" r="12" stroke="white" strokeWidth="1"></circle>
</svg>
</div>

<div className="flex justify-between mt-4 font-mono text-[0.55rem] text-[#555555] tracking-widest uppercase">
<span>Q1_23</span>
<span>Q2_23</span>
<span>Q3_23</span>
<span>Q4_23</span>
<span>Q1_24</span>
<span>CURRENT</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-section px-container max-w-[120rem] mx-auto border-b border-[#1F1F1F]" id="architecture">
<div className="mb-[clamp(4rem,8vw,8rem)] stagger-container max-w-3xl">
<div className="font-mono text-xs text-[#888888] uppercase tracking-[0.15em] mb-8 flex items-center gap-4 reveal" style={{-StaggerIdx: '0'}}>
<span>[04] // MODULAR LOGIC</span>
<div className="h-px w-12 bg-white/20"></div>
</div>
<h2 className="text-h2 font-display font-semibold leading-[1.0] tracking-tighter reveal" style={{-StaggerIdx: '1'}}>
                Systems engineered for absolute preservation.
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#1F1F1F]">

<div className="bg-[#030303] border-r border-b border-[#1F1F1F] p-card hover:bg-[#0A0A0A] transition-colors duration-500 group reveal interactive flex flex-col justify-between min-h-[24rem]" style={{-StaggerIdx: '0'}}>
<div>
<div className="text-xs font-mono text-[#555555] mb-12 tracking-widest uppercase flex justify-between">
<span>SYS_01</span>
<iconify-icon className="text-lg opacity-0 group-hover:opacity-100 transition-opacity text-white" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-display font-semibold tracking-tighter mb-4">DYNAMIC EQUITIES</h3>
</div>
<p className="text-body text-[#888888] leading-[1.6]">High-frequency hedging and algorithmic alpha generation adjusting to macroeconomic turbulence in real-time.</p>
</div>

<div className="bg-[#030303] border-r border-b border-[#1F1F1F] p-card hover:bg-[#0A0A0A] transition-colors duration-500 group reveal interactive flex flex-col justify-between min-h-[24rem]" style={{-StaggerIdx: '1'}}>
<div>
<div className="text-xs font-mono text-[#555555] mb-12 tracking-widest uppercase flex justify-between">
<span>SYS_02</span>
<iconify-icon className="text-lg opacity-0 group-hover:opacity-100 transition-opacity text-white" icon="solar:global-linear"></iconify-icon>
</div>
<h3 className="text-xl font-display font-semibold tracking-tighter mb-4">TAX ARBITRAGE</h3>
</div>
<p className="text-body text-[#888888] leading-[1.6]">Continuous, predictive loss harvesting across global entities. We view tax codes as programmable routing tables.</p>
</div>

<div className="bg-[#030303] border-r border-b md:border-b-0 lg:border-b border-[#1F1F1F] p-card hover:bg-[#0A0A0A] transition-colors duration-500 group reveal interactive flex flex-col justify-between min-h-[24rem]" style={{-StaggerIdx: '2'}}>
<div>
<div className="text-xs font-mono text-[#555555] mb-12 tracking-widest uppercase flex justify-between">
<span>SYS_03</span>
<iconify-icon className="text-lg opacity-0 group-hover:opacity-100 transition-opacity text-white" icon="solar:safe-2-linear"></iconify-icon>
</div>
<h3 className="text-xl font-display font-semibold tracking-tighter mb-4">ESTATE ROUTING</h3>
</div>
<p className="text-body text-[#888888] leading-[1.6]">Algorithmic trust execution and seamless generational capital transfer. Bypassing probate delays mathematically.</p>
</div>

<div className="bg-[#030303] border-r border-b md:border-b-0 border-[#1F1F1F] p-card hover:bg-[#0A0A0A] transition-colors duration-500 group reveal interactive flex flex-col justify-between min-h-[24rem]" style={{-StaggerIdx: '3'}}>
<div>
<div className="text-xs font-mono text-[#555555] mb-12 tracking-widest uppercase flex justify-between">
<span>SYS_04</span>
<iconify-icon className="text-lg opacity-0 group-hover:opacity-100 transition-opacity text-white" icon="solar:graph-new-linear"></iconify-icon>
</div>
<h3 className="text-xl font-display font-semibold tracking-tighter mb-4">PRIVATE MARKETS</h3>
</div>
<p className="text-body text-[#888888] leading-[1.6]">AI-driven cap-table scoring and venture deal flow analytics. Quantitative rigor applied to illiquid assets.</p>
</div>
</div>
</section>

<section className="bg-[#050505] py-[clamp(8rem,20vw,20rem)] px-container relative overflow-hidden flex items-center justify-center text-center border-b border-[#1F1F1F]">
<div className="absolute inset-0 bg-grid opacity-20"></div>
<div className="relative z-10 max-w-5xl mx-auto stagger-container">
<div className="font-mono text-xs text-[#555555] uppercase tracking-widest mb-12 flex items-center justify-center gap-4 reveal" style={{-StaggerIdx: '0'}}>
<div className="h-px w-8 bg-[#333333]"></div>
<span>EXECUTION_LOG // PROTOCOL_77</span>
<div className="h-px w-8 bg-[#333333]"></div>
</div>
<p className="text-[clamp(1.5rem,3vw,3.5rem)] font-display leading-[1.1] tracking-tighter reveal text-[#888888]" style={{-StaggerIdx: '1'}}>
                "Upon ingestion of a <span className="text-white"> $420M </span> estate portfolio, AXIOM algorithms mapped a multi-jurisdictional reorganization that mitigated <span className="text-white border-b-2 border-white pb-1"> $18.4M </span> in impending tax leakage within <span className="text-white"> 14 seconds</span>."
            </p>
<div className="mt-16 font-mono text-xs text-[#555555] tracking-widest uppercase reveal" style={{-StaggerIdx: '2'}}>
                EXECUTED WITHOUT A SINGLE HUMAN MEETING.
            </div>
</div>
</section>

<section className="py-section px-container flex justify-center items-center w-full border-b border-[#1F1F1F] bg-[#030303]" id="clearance">
<div className="max-w-4xl w-full text-center relative z-10 stagger-container">
<h2 className="text-h2 font-display font-semibold leading-[1.0] tracking-tighter mb-8 reveal" style={{-StaggerIdx: '0'}}>
                REQUEST CRYPTOGRAPHIC CLEARANCE.
            </h2>
<p className="text-body text-[#888888] leading-[1.6] mb-16 max-w-2xl mx-auto reveal" style={{-StaggerIdx: '1'}}>
                Infrastructure is currently at 94% capacity. Minimum AUM requirement: $20M USD. Submit credentials for algorithmic review.
            </p>
<form className="flex flex-col items-center w-full max-w-lg mx-auto reveal" onsubmit="event.preventDefault();" style={{-StaggerIdx: '2'}}>
<div className="w-full relative group mb-12 interactive">
<input className="w-full bg-transparent border-b border-[#333333] py-4 text-center font-mono text-sm text-white placeholder:text-[#555555] focus:outline-none transition-colors tracking-widest uppercase" placeholder="ENTER PORTFOLIO SIZE (USD)" required="" type="text"/>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white group-focus-within:w-full transition-all duration-700 ease-out"></div>
</div>
<button className="btn-editorial w-full inline-flex items-center justify-center px-12 py-5 bg-transparent border border-[#333333] hover:border-white text-white font-mono text-sm uppercase tracking-[0.1em] interactive" type="submit">
<span>INITIATE_SCAN</span>
</button>
<div className="mt-8 font-mono text-[0.6rem] text-[#555555] tracking-widest uppercase flex gap-4 justify-center items-center">
<span>E2E_ENCRYPTED</span>
<span className="w-1 h-1 bg-[#555555] rounded-full"></span>
<span>NO_HUMAN_OVERSIGHT</span>
</div>
</form>
</div>
</section>

<footer className="pt-[clamp(4rem,10vw,10rem)] pb-8 px-container max-w-[120rem] mx-auto overflow-hidden bg-[#030303]">
<div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-24 font-mono text-[0.65rem] tracking-widest uppercase text-[#555555]">
<div className="col-span-2 md:col-span-1 flex flex-col gap-4">
<div className="text-white mb-4 flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    STATUS_ONLINE
                </div>
<div>SYS_LATENCY: 12MS</div>
<div>NODES_ACTIVE: 4,092</div>
</div>
<div className="flex flex-col gap-4">
<a className="hover:text-white transition-colors interactive" href="#">SYSTEM_STATUS</a>
<a className="hover:text-white transition-colors interactive" href="#">LEGAL_FRAMEWORK</a>
</div>
<div className="flex flex-col gap-4">
<a className="hover:text-white transition-colors interactive" href="#">DATA_PRIVACY</a>
<a className="hover:text-white transition-colors interactive" href="#">ENCRYPTION_KEYS</a>
</div>
<div className="col-span-2 md:col-span-2 flex justify-start md:justify-end items-end">
<div className="text-right">
<div>LONDON</div>
<div className="mt-1">ZURICH</div>
<div className="mt-1">SINGAPORE</div>
</div>
</div>
</div>

<div className="w-full relative interactive cursor-default mt-12 group border-b border-[#1F1F1F] pb-4">
<h1 className="text-[clamp(5rem,20vw,25rem)] leading-[0.75] font-display font-semibold text-white text-center w-full block tracking-tighter uppercase">
                AXIOM
            </h1>
</div>
<div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[0.6rem] text-[#555555] tracking-widest uppercase">
<div>AXIOM FINANCIAL COMPUTATION © 2026</div>
<div>ALL SYSTEMS NOMINAL.</div>
</div>
</footer>



    </>
  );
}
