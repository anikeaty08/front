import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            
            // 1. WebGL-Style Node Canvas (Particles & Beams)
            const canvas = document.getElementById('hero-canvas');
            if (canvas) {
                const ctx = canvas.getContext('2d');
                let width, height, particles;

                function initCanvas() {
                    width = canvas.width = window.innerWidth;
                    height = canvas.height = window.innerHeight;
                    particles = [];
                    // Number of nodes based on screen size for performance
                    const numParticles = Math.min(Math.floor(window.innerWidth / 15), 100);
                    
                    for(let i = 0; i < numParticles; i++) {
                        particles.push({
                            x: Math.random() * width,
                            y: Math.random() * height,
                            vx: (Math.random() - 0.5) * 0.4,
                            vy: (Math.random() - 0.5) * 0.4,
                            size: Math.random() * 1.5 + 0.5
                        });
                    }
                }

                function drawCanvas() {
                    ctx.clearRect(0, 0, width, height);
                    
                    // Draw Nodes
                    ctx.fillStyle = '#38BDF8';
                    particles.forEach(p => {
                        p.x += p.vx;
                        p.y += p.vy;
                        
                        // Bounce off edges smoothly
                        if(p.x < 0 || p.x > width) p.vx *= -1;
                        if(p.y < 0 || p.y > height) p.vy *= -1;
                        
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                        ctx.fill();
                    });

                    // Draw Beams
                    for(let i = 0; i < particles.length; i++) {
                        for(let j = i + 1; j < particles.length; j++) {
                            const dx = particles[i].x - particles[j].x;
                            const dy = particles[i].y - particles[j].y;
                            const dist = Math.sqrt(dx * dx + dy * dy);
                            
                            if(dist < 150) {
                                ctx.beginPath();
                                ctx.strokeStyle = `rgba(56, 189, 248, ${0.15 - dist / 1000})`;
                                ctx.lineWidth = 0.8;
                                ctx.moveTo(particles[i].x, particles[i].y);
                                ctx.lineTo(particles[j].x, particles[j].y);
                                ctx.stroke();
                            }
                        }
                    }
                    requestAnimationFrame(drawCanvas);
                }

                initCanvas();
                drawCanvas();
                window.addEventListener('resize', initCanvas);
            }

            // 2. Navigation Scrolled State
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('bg-[#050505]/80', 'border-white/10', 'py-2');
                    navbar.classList.remove('bg-[#050505]/60', 'border-white/5');
                } else {
                    navbar.classList.remove('bg-[#050505]/80', 'border-white/10', 'py-2');
                    navbar.classList.add('bg-[#050505]/60', 'border-white/5');
                }
            });

            // 3. Framer-style Intersection Observer
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -10% 0px',
                threshold: 0.1
            };

            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        
                        // Trigger internal children animations (like bars)
                        const bars = entry.target.querySelectorAll('.data-bar');
                        if(bars.length > 0) {
                            bars.forEach(bar => bar.classList.add('is-visible'));
                        }

                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-framer, .line-draw').forEach(el => {
                revealObserver.observe(el);
            });

            // 4. Mathematical Counter Logic (Easing)
            const counterObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const targetEl = entry.target;
                        const targetVal = parseFloat(targetEl.getAttribute('data-target'));
                        const decimals = parseInt(targetEl.getAttribute('data-decimals'));
                        const duration = 2500; // ms
                        const frameRate = 1000 / 60;
                        const totalFrames = Math.round(duration / frameRate);
                        let currentFrame = 0;

                        // Advanced ease out cubic
                        const easeOutCubic = x => 1 - Math.pow(1 - x, 3);

                        const counterInterval = setInterval(() => {
                            currentFrame++;
                            const progress = easeOutCubic(currentFrame / totalFrames);
                            const currentVal = (targetVal * progress);
                            
                            targetEl.innerText = currentVal.toFixed(decimals);

                            if (currentFrame >= totalFrames) {
                                clearInterval(counterInterval);
                                targetEl.innerText = targetVal.toFixed(decimals);
                            }
                        }, frameRate);

                        observer.unobserve(targetEl);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.counter').forEach(el => {
                counterObserver.observe(el);
            });

        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-grid"></div>

<div className="fixed top-0 w-full z-50 bg-[#38BDF8] text-[#050505] overflow-hidden border-b border-[#38BDF8]/20">
<div className="whitespace-nowrap flex w-[200%] animate-ticker font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] py-[clamp(0.25rem,0.5vh,0.5rem)] tracking-tight font-semibold">
<span className="inline-block w-1/2">PRAXIS INFRASTRUCTURE • Q4 ALLOCATIONS CLOSED • SECURE YIELD OUTPERFORMING MARKET BETA BY 4.2X • MANDATES BY INVITATION ONLY • </span>
<span className="inline-block w-1/2">PRAXIS INFRASTRUCTURE • Q4 ALLOCATIONS CLOSED • SECURE YIELD OUTPERFORMING MARKET BETA BY 4.2X • MANDATES BY INVITATION ONLY • </span>
</div>
</div>

<nav className="fixed top-[clamp(1.5rem,2.5vh,2rem)] w-full z-40 transition-all duration-700 backdrop-blur-2xl bg-[#050505]/60 border-b border-white/5" id="navbar">
<div className="mx-auto px-[clamp(1.5rem,4vw,3rem)] max-w-[clamp(75rem,95vw,120rem)] h-[clamp(4rem,6vh,5rem)] flex items-center justify-between relative">
<a className="flex items-center gap-3 font-display text-[clamp(1.25rem,1.5vw,1.5rem)] tracking-tight text-[#F5F5F0] hover:text-[#38BDF8] transition-colors duration-500 z-50" href="#">
<svg className="text-[#38BDF8]" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M12 2L2 22h20L12 2z"></path>
<path d="M12 12l-4 8h8l-4-8z"></path>
</svg>
                PRAXIS
            </a>
<div className="hidden md:flex items-center gap-[clamp(2.5rem,4vw,4rem)]">
<a className="group relative font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-[0.1em] text-[#8A8A8A] hover:text-[#F5F5F0] transition-colors" href="#reality">
                    Thesis <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#38BDF8] transition-all duration-500 group-hover:w-full"></span>
</a>
<a className="group relative font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-[0.1em] text-[#8A8A8A] hover:text-[#F5F5F0] transition-colors" href="#philosophy">
                    Methodology <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#38BDF8] transition-all duration-500 group-hover:w-full"></span>
</a>
<a className="group relative font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-[0.1em] text-[#8A8A8A] hover:text-[#F5F5F0] transition-colors" href="#capabilities">
                    Architecture <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#38BDF8] transition-all duration-500 group-hover:w-full"></span>
</a>
<a className="group relative font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-[0.1em] text-[#8A8A8A] hover:text-[#F5F5F0] transition-colors" href="#scenarios">
                    Yield <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#38BDF8] transition-all duration-500 group-hover:w-full"></span>
</a>
</div>
<div className="flex items-center gap-[clamp(1rem,2vw,1.5rem)]">
<a className="hidden sm:inline-flex btn-custom px-[clamp(1.5rem,2.5vw,2.5rem)] py-[clamp(0.75rem,1.2vh,1rem)] font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-[0.1em] text-[#F5F5F0]" href="#contact">
<span className="relative z-10 flex items-center gap-2">Initiate <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</a>
</div>
</div>
</nav>
<main>

<section className="relative min-h-[100svh] flex flex-col justify-center pt-[clamp(8rem,15vh,10rem)] pb-[clamp(4rem,8vh,6rem)] px-[clamp(1.5rem,4vw,3rem)] mx-auto w-full overflow-hidden" id="hero">

<canvas className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen" id="hero-canvas"></canvas>
<div className="max-w-[clamp(75rem,95vw,120rem)] mx-auto w-full relative z-10">

<div className="crosshair top-0 left-0">+</div>
<div className="crosshair top-0 right-0">+</div>
<div className="crosshair bottom-0 left-0">+</div>
<div className="crosshair bottom-0 right-0">+</div>
<div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5 line-draw transform-origin-top is-visible hidden lg:block"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(2rem,4vw,4rem)] items-center relative">

<div className="hidden lg:flex lg:col-span-2 flex-col justify-between h-full py-[clamp(2rem,4vh,4rem)] border-r border-white/5 reveal-framer" style={{transitionDelay: '100ms'}}>
<div className="flex flex-col gap-2">
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#8A8A8A] tracking-[0.2em] uppercase">Status</span>
<div className="flex items-center gap-2 text-[#38BDF8] font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#38BDF8]"></span>
</span>
                                OPTIMAL
                            </div>
</div>
<div className="flex flex-col gap-2 mt-20">
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#8A8A8A] tracking-[0.2em] uppercase">Target</span>
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#F5F5F0]">Alpha Gen<br/>+22.4% ARR</span>
</div>
</div>

<div className="lg:col-span-10 flex flex-col gap-[clamp(2rem,4vw,3rem)]">
<div className="flex items-center gap-4 reveal-framer" style={{transitionDelay: '200ms'}}>
<div className="w-[clamp(2rem,4vw,3rem)] h-[1px] bg-[#38BDF8]"></div>
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-[0.2em] text-[#38BDF8]">
                                SYS_REQ // ALPHA_GEN
                            </span>
</div>
<h1 className="font-display text-[clamp(3.5rem,8vw,9rem)] leading-[0.9] tracking-tight text-[#F5F5F0] reveal-framer" style={{transitionDelay: '300ms'}}>
                            Dominate <span className="italic text-[#8A8A8A]">Markets.</span><br/>
                            Protect <span className="italic text-[#38BDF8]">Legacy.</span>
</h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(2rem,4vw,4rem)] items-start mt-[clamp(2rem,4vw,3rem)] reveal-framer" style={{transitionDelay: '400ms'}}>
<p className="font-body text-[clamp(1rem,1.2vw,1.25rem)] leading-[1.6] text-[#8A8A8A]">
                                We don’t try to beat the market; we bypass it entirely. Praxis engineers bespoke financial architecture that delivers aggressive capital multiplication and impenetrable asset protection for those who demand absolute sovereignty.
                            </p>
<div className="flex flex-col gap-6 md:pl-[clamp(2rem,4vw,4rem)] md:border-l md:border-white/5">
<div className="flex gap-[clamp(1rem,2vw,2rem)]">
<div className="flex flex-col">
<span className="font-mono-custom text-[clamp(1.5rem,2.5vw,2.5rem)] text-[#F5F5F0] leading-none tracking-tight">$8.4B+</span>
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#555] uppercase tracking-[0.1em] mt-2">Capital Secured</span>
</div>
<div className="flex flex-col">
<span className="font-mono-custom text-[clamp(1.5rem,2.5vw,2.5rem)] text-[#38BDF8] leading-none tracking-tight"><span className="counter" data-decimals="1" data-target="24.2">0</span>%</span>
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#555] uppercase tracking-[0.1em] mt-2">Target Yield</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(3rem,5vh,4rem)] border-y border-white/5 bg-[#030303] overflow-hidden relative" id="infrastructure">
<div className="mx-auto max-w-[clamp(75rem,95vw,120rem)] px-[clamp(1.5rem,4vw,3rem)] flex flex-col md:flex-row items-center justify-between gap-8 reveal-framer">
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#555] uppercase tracking-[0.2em] whitespace-nowrap">
                    Infrastructure &amp; Custodian Partners //
                </span>
<div className="flex flex-wrap justify-center md:justify-end items-center gap-[clamp(2rem,5vw,4rem)] opacity-40 grayscale font-display text-[clamp(1.25rem,2vw,1.75rem)] tracking-tight">
<span>APEX</span>
<span>QUANTUM</span>
<span>NEXUS</span>
<span>AETHER</span>
<span className="hidden lg:block">VOLITION</span>
</div>
</div>
</section>

<section className="py-[clamp(6rem,12vh,10rem)] px-[clamp(1.5rem,4vw,3rem)] mx-auto max-w-[clamp(75rem,95vw,120rem)] relative" id="reality">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(4rem,8vw,6rem)] items-center">
<div className="reveal-framer relative">
<div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-red-500/20"></div>
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-[0.2em] text-red-400 mb-6 block">
                        WARN_SYS // MARKET_BETA_DECAY
                    </span>
<h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-tight text-[#F5F5F0] mb-6">
                        The traditional 60/40 portfolio is a <span className="italic text-[#8A8A8A] line-through decoration-red-500 decoration-2">controlled descent</span> into poverty.
                    </h2>
<p className="font-body text-[clamp(1.125rem,1.4vw,1.25rem)] leading-relaxed text-[#8A8A8A] mb-8">
                        Inflation quietly steals your baseline. Public market volatility destroys compound growth. Standard family offices sell you access to saturated indexes. To genuinely preserve and multiply your bloodline's wealth, you must completely abandon public beta.
                    </p>
<div className="flex items-center gap-4 text-red-400 font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] bg-red-950/20 w-fit px-4 py-2 border border-red-500/20">
<iconify-icon className="text-lg" icon="solar:danger-triangle-linear"></iconify-icon>
                        Average public yield negated by true inflation.
                    </div>
</div>
<div className="relative min-h-[400px] border border-white/5 bg-[#0a0a0a] p-8 reveal-framer group overflow-hidden" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.03)_0%,transparent_100%)]"></div>

<div className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#555] space-y-2 relative z-10">
<p>&gt; ANALYZING STANDARD PORTFOLIO...</p>
<p className="text-red-400">&gt; INFLATION ADJUSTMENT: -6.4%</p>
<p className="text-red-400">&gt; TAX DRAG: -2.1%</p>
<p>&gt; REAL YIELD GENERATED: <span className="text-red-500">NEG_0.3%</span></p>
<br/>
<p>&gt; INITIATING PRAXIS PROTOCOL...</p>
<p className="text-[#38BDF8]">&gt; PRIVATE CREDIT ARBITRAGE: +14%</p>
<p className="text-[#38BDF8]">&gt; JURISDICTIONAL SHIELD: ACTIVE</p>
<p className="text-[#F5F5F0]">&gt; NET ASYMMETRIC YIELD: +22.4%</p>
</div>
<div className="absolute bottom-8 right-8 w-24 h-24 border border-white/10 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite] group-hover:border-[#38BDF8]/30 transition-colors">
<div className="w-16 h-16 border-t border-r border-white/20 rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(6rem,10vh,10rem)] px-[clamp(1.5rem,4vw,3rem)] mx-auto max-w-[clamp(75rem,95vw,120rem)] relative border-t border-white/5" id="metrics">
<div className="flex flex-col lg:flex-row justify-between lg:items-end gap-[clamp(2rem,4vw,4rem)] mb-[clamp(4rem,8vh,6rem)] reveal-framer">
<div className="flex flex-col gap-4">
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-[0.2em] text-[#8A8A8A]">
                        DATA_LOG // SUPREMACY
                    </span>
<h2 className="font-display text-[clamp(3rem,6vw,5rem)] leading-none tracking-tight">Quantifiable Supremacy.</h2>
</div>
<p className="font-body text-[clamp(1rem,1.2vw,1.25rem)] text-[#8A8A8A] max-w-[35ch] lg:text-right">
                    Stop accepting average returns. Our architectures deliver mathematical outperformance regardless of macroeconomic destruction.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(1rem,2vw,1.5rem)] relative z-10">

<div className="hover-bento-card bg-[#0a0a0a] border border-white/5 p-[clamp(2rem,3vw,3rem)] flex flex-col justify-between min-h-[clamp(20rem,30vh,24rem)] reveal-framer" style={{transitionDelay: '100ms'}}>
<iconify-icon className="text-[#38BDF8] text-3xl mb-8" icon="solar:shield-check-linear"></iconify-icon>
<div>
<div className="font-mono-custom text-[clamp(3rem,5vw,4.5rem)] leading-none text-[#F5F5F0] tracking-tight mb-4">
<span className="counter" data-decimals="0" data-target="100">0</span>%
                        </div>
<p className="font-body text-[clamp(1rem,1.1vw,1.125rem)] text-[#8A8A8A] leading-relaxed">
                            Assets completely insulated from localized state-level jurisdictional risks.
                        </p>
</div>
</div>

<div className="hover-bento-card bg-[#0a0a0a] border border-white/5 p-[clamp(2rem,3vw,3rem)] flex flex-col justify-between min-h-[clamp(20rem,30vh,24rem)] reveal-framer" style={{transitionDelay: '200ms'}}>
<div className="flex justify-between items-start mb-8">
<iconify-icon className="text-[#F5F5F0] text-3xl" icon="solar:graph-up-linear"></iconify-icon>
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#38BDF8] bg-[#38BDF8]/10 px-3 py-1 rounded-sm">+Alpha</span>
</div>
<div>
<div className="font-mono-custom text-[clamp(3rem,5vw,4.5rem)] leading-none text-[#F5F5F0] tracking-tight mb-4">
<span className="counter" data-decimals="1" data-target="4.2">0.0</span>x
                        </div>
<p className="font-body text-[clamp(1rem,1.1vw,1.125rem)] text-[#8A8A8A] leading-relaxed">
                            Consistent outperformance against public indices over a 10-year horizon.
                        </p>
</div>
</div>

<div className="hover-bento-card bg-[#0a0a0a] border border-white/5 p-[clamp(2rem,3vw,3rem)] flex flex-col justify-between min-h-[clamp(20rem,30vh,24rem)] reveal-framer relative overflow-hidden group" style={{transitionDelay: '300ms'}}>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.05)_0%,transparent_60%)]"></div>
<div className="flex justify-between items-end h-32 mb-8 gap-2 border-b border-white/10 pb-4 relative z-10">
<div className="w-full data-bar" style={{transitionDelay: '400ms', height: '15%', background: 'rgba(56, 189, 248, 0.2)'}}></div>
<div className="w-full data-bar" style={{transitionDelay: '500ms', height: '35%', background: 'rgba(56, 189, 248, 0.4)'}}></div>
<div className="w-full data-bar" style={{transitionDelay: '600ms', height: '60%', background: 'rgba(56, 189, 248, 0.7)'}}></div>
<div className="w-full data-bar" style={{transitionDelay: '700ms', height: '100%', background: '#38BDF8'}}></div>
</div>
<div className="relative z-10">
<div className="font-mono-custom text-[clamp(1.5rem,2vw,2rem)] leading-none text-[#F5F5F0] tracking-tight mb-2">
                            Drawdown Immunity
                        </div>
<p className="font-body text-[clamp(0.875rem,1vw,1rem)] text-[#555] uppercase tracking-widest font-mono-custom">
                            Structural resilience applied.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-[clamp(8rem,12vh,14rem)] relative border-t border-white/5 bg-[#030303]" id="philosophy">
<div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_right_center,rgba(56,189,248,0.03)_0%,transparent_60%)] pointer-events-none"></div>
<div className="px-[clamp(1.5rem,4vw,3rem)] mx-auto max-w-[clamp(75rem,95vw,120rem)]">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(4rem,6vw,8rem)] relative">

<div className="lg:col-span-5 relative">
<div className="lg:sticky lg:top-[clamp(8rem,15vh,10rem)] reveal-framer">
<div className="flex items-center gap-4 mb-[clamp(2rem,3vw,3rem)]">
<span className="w-2 h-2 bg-[#38BDF8]"></span>
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-[0.2em] text-[#8A8A8A]">
                                    CORE_PRECEPTS //
                                </span>
</div>
<h2 className="font-display text-[clamp(3.5rem,6vw,5.5rem)] leading-[0.9] tracking-tight text-[#F5F5F0] mb-8">
                                The Unfair <br/><span className="italic text-[#555]">Advantage.</span>
</h2>
<p className="font-body text-[clamp(1rem,1.2vw,1.25rem)] text-[#8A8A8A] max-w-[30ch]">
                                We provide structural and strategic advantages previously restricted to sovereign entities and massive endowments.
                            </p>
<div className="mt-12 p-6 border border-white/5 bg-[#0a0a0a] inline-block relative overflow-hidden group">
<div className="absolute inset-0 bg-[#38BDF8] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out opacity-10"></div>
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#38BDF8] block mb-2">AXIOM REF: 0x99A</span>
<p className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#555] max-w-[25ch]">Capital is a utility. Correct structuring is the ultimate asset class.</p>
</div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-[clamp(4rem,8vh,6rem)] pt-[clamp(2rem,5vh,4rem)]">
<div className="reveal-framer relative group">
<div className="absolute -left-[clamp(2rem,4vw,4rem)] top-0 bottom-0 w-[1px] bg-white/5 group-hover:bg-[#38BDF8]/50 transition-colors duration-500"></div>
<span className="font-mono-custom text-[clamp(1.5rem,2vw,2rem)] text-[#222] absolute -left-[clamp(4rem,6vw,6rem)] top-0 group-hover:text-[#38BDF8] transition-colors duration-500">01</span>
<h3 className="font-display text-[clamp(2rem,3vw,3rem)] tracking-tight text-[#F5F5F0] mb-6">Jurisdictional Arbitrage</h3>
<p className="font-body text-[clamp(1.125rem,1.4vw,1.5rem)] leading-[1.6] text-[#8A8A8A]">
                                Geography is a variable, not a constant. We architect bespoke, multi-jurisdictional legal frameworks that insulate your assets from predatory taxation, litigation, and localized state collapse.
                            </p>
</div>
<div className="reveal-framer relative group">
<div className="absolute -left-[clamp(2rem,4vw,4rem)] top-0 bottom-0 w-[1px] bg-white/5 group-hover:bg-[#38BDF8]/50 transition-colors duration-500"></div>
<span className="font-mono-custom text-[clamp(1.5rem,2vw,2rem)] text-[#222] absolute -left-[clamp(4rem,6vw,6rem)] top-0 group-hover:text-[#38BDF8] transition-colors duration-500">02</span>
<h3 className="font-display text-[clamp(2rem,3vw,3rem)] tracking-tight text-[#F5F5F0] mb-6">Private Market Dislocation</h3>
<p className="font-body text-[clamp(1.125rem,1.4vw,1.5rem)] leading-[1.6] text-[#8A8A8A]">
                                Access determines yield. We force entry into exclusive direct private equity, venture debt, and illiquid credit opportunities structurally walled off from the standard family office ecosystem.
                            </p>
</div>
<div className="reveal-framer relative group">
<div className="absolute -left-[clamp(2rem,4vw,4rem)] top-0 bottom-0 w-[1px] bg-white/5 group-hover:bg-[#38BDF8]/50 transition-colors duration-500"></div>
<span className="font-mono-custom text-[clamp(1.5rem,2vw,2rem)] text-[#222] absolute -left-[clamp(4rem,6vw,6rem)] top-0 group-hover:text-[#38BDF8] transition-colors duration-500">03</span>
<h3 className="font-display text-[clamp(2rem,3vw,3rem)] tracking-tight text-[#F5F5F0] mb-6">Dynastic Continuity</h3>
<p className="font-body text-[clamp(1.125rem,1.4vw,1.5rem)] leading-[1.6] text-[#8A8A8A]">
                                Without governance, capital dissipates. We engineer ironclad foundation structuring, voting trusts, and next-generation educational pipelines to ensure your wealth compounds aggressively into perpetuity.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(8rem,12vh,14rem)] px-[clamp(1.5rem,4vw,3rem)] mx-auto max-w-[clamp(75rem,95vw,120rem)] border-t border-white/5 relative" id="capabilities">
<div className="mb-[clamp(4rem,8vh,8rem)] reveal-framer flex flex-col items-center text-center">
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-[0.2em] text-[#38BDF8] mb-6 block">
                    EXECUTION_VECTORS //
                </span>
<h2 className="font-display text-[clamp(3.5rem,6vw,6rem)] leading-none tracking-tight text-[#F5F5F0]">
                    System Architecture
                </h2>
</div>
<div className="flex flex-col border-t border-white/10">

<div className="capability-row border-b border-white/5 relative cursor-crosshair group reveal-framer">
<div className="py-[clamp(2rem,3vw,3rem)] px-[clamp(1rem,2vw,2rem)] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
<div className="flex items-center gap-[clamp(2rem,4vw,4rem)] w-full lg:w-1/2">
<span className="font-mono-custom text-[clamp(1rem,1.2vw,1.25rem)] text-[#555] group-hover:text-[#38BDF8] transition-colors">01</span>
<h3 className="font-display text-[clamp(2rem,3vw,3.5rem)] text-[#F5F5F0] tracking-tight group-hover:translate-x-4 transition-transform duration-500">Direct Equity</h3>
</div>
<div className="w-full lg:w-1/2 flex flex-col gap-4">
<div className="flex gap-2">
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] border border-white/10 px-3 py-1 text-[#8A8A8A] uppercase tracking-widest">Buyouts</span>
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] border border-white/10 px-3 py-1 text-[#8A8A8A] uppercase tracking-widest">Co-Invest</span>
</div>
<div className="row-hidden-data">
<p className="font-body text-[clamp(1rem,1.1vw,1.125rem)] text-[#8A8A8A] mb-2">Proprietary origination of off-market private equity transactions alongside top-decile institutional sponsors.</p>
<span className="font-mono-custom text-xs text-[#38BDF8] uppercase">Benefit: Bypass management fees and secure direct alpha.</span>
</div>
</div>
</div>
</div>

<div className="capability-row border-b border-white/5 relative cursor-crosshair group reveal-framer" style={{transitionDelay: '100ms'}}>
<div className="py-[clamp(2rem,3vw,3rem)] px-[clamp(1rem,2vw,2rem)] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
<div className="flex items-center gap-[clamp(2rem,4vw,4rem)] w-full lg:w-1/2">
<span className="font-mono-custom text-[clamp(1rem,1.2vw,1.25rem)] text-[#555] group-hover:text-[#38BDF8] transition-colors">02</span>
<h3 className="font-display text-[clamp(2rem,3vw,3.5rem)] text-[#F5F5F0] tracking-tight group-hover:translate-x-4 transition-transform duration-500">Global Structuring</h3>
</div>
<div className="w-full lg:w-1/2 flex flex-col gap-4">
<div className="flex gap-2">
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] border border-white/10 px-3 py-1 text-[#8A8A8A] uppercase tracking-widest">Trusts</span>
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] border border-white/10 px-3 py-1 text-[#8A8A8A] uppercase tracking-widest">Anonymity</span>
</div>
<div className="row-hidden-data">
<p className="font-body text-[clamp(1rem,1.1vw,1.125rem)] text-[#8A8A8A] mb-2">Implementation of multi-layered corporate structures across highly defensible jurisdictions.</p>
<span className="font-mono-custom text-xs text-[#38BDF8] uppercase">Benefit: Ultimate privacy and aggressive tax mitigation.</span>
</div>
</div>
</div>
</div>

<div className="capability-row border-b border-white/5 relative cursor-crosshair group reveal-framer" style={{transitionDelay: '200ms'}}>
<div className="py-[clamp(2rem,3vw,3rem)] px-[clamp(1rem,2vw,2rem)] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
<div className="flex items-center gap-[clamp(2rem,4vw,4rem)] w-full lg:w-1/2">
<span className="font-mono-custom text-[clamp(1rem,1.2vw,1.25rem)] text-[#555] group-hover:text-[#38BDF8] transition-colors">03</span>
<h3 className="font-display text-[clamp(2rem,3vw,3.5rem)] text-[#F5F5F0] tracking-tight group-hover:translate-x-4 transition-transform duration-500">Real Assets</h3>
</div>
<div className="w-full lg:w-1/2 flex flex-col gap-4">
<div className="flex gap-2">
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] border border-white/10 px-3 py-1 text-[#8A8A8A] uppercase tracking-widest">Trophy</span>
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] border border-white/10 px-3 py-1 text-[#8A8A8A] uppercase tracking-widest">Aviation</span>
</div>
<div className="row-hidden-data">
<p className="font-body text-[clamp(1rem,1.1vw,1.125rem)] text-[#8A8A8A] mb-2">Acquisition, management, and strategic monetization of trophy real estate and private aviation fleets.</p>
<span className="font-mono-custom text-xs text-[#38BDF8] uppercase">Benefit: Hard asset preservation and lifestyle sovereignity.</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(6rem,10vh,12rem)] px-[clamp(1.5rem,4vw,3rem)] mx-auto max-w-[clamp(75rem,95vw,120rem)] relative border-t border-white/5" id="scenarios">
<div className="mb-[clamp(4rem,6vh,6rem)] reveal-framer">
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-[0.2em] text-[#8A8A8A] block mb-4">
                    SIMULATED_VECTORS //
                </span>
<h2 className="font-display text-[clamp(3rem,5vw,4.5rem)] leading-none tracking-tight">Yield Scenarios.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(1.5rem,2vw,2rem)]">

<div className="scenario-card bg-[#0a0a0a] border border-white/5 p-[clamp(2rem,3vw,3rem)] relative group reveal-framer" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#38BDF8] mb-6 block">SCENARIO: ALPHA</span>
<h3 className="font-display text-[clamp(1.5rem,2vw,2rem)] text-[#F5F5F0] mb-4">Tax-Neutral Liquidation</h3>
<p className="font-body text-[clamp(0.875rem,1vw,1rem)] text-[#8A8A8A] mb-8 line-clamp-3">
                        Utilizing a dual-trust structure in zero-tax jurisdictions to execute the sale of a $150M private entity, legally eliminating $45M in capital gains friction.
                    </p>
<svg className="w-full h-12" preserveaspectratio="none" viewbox="0 0 100 20">
<path d="M0 15 L20 15 L35 5 L50 15 L70 10 L100 2" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>
<path className="scenario-line" d="M0 15 L20 15 L35 5 L50 15 L70 10 L100 2" fill="none" stroke="#38BDF8" strokeWidth="1"></path>
</svg>
</div>

<div className="scenario-card bg-[#0a0a0a] border border-white/5 p-[clamp(2rem,3vw,3rem)] relative group reveal-framer" style={{transitionDelay: '200ms'}}>
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#38BDF8] mb-6 block">SCENARIO: BETA</span>
<h3 className="font-display text-[clamp(1.5rem,2vw,2rem)] text-[#F5F5F0] mb-4">Venture Debt Arbitrage</h3>
<p className="font-body text-[clamp(0.875rem,1vw,1rem)] text-[#8A8A8A] mb-8 line-clamp-3">
                        Structuring a senior secured credit facility for late-stage SaaS, generating an 18% cash yield plus aggressive equity warrants, insulated from valuation compression.
                    </p>
<svg className="w-full h-12" preserveaspectratio="none" viewbox="0 0 100 20">
<path d="M0 18 L25 16 L45 8 L65 10 L85 4 L100 1" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>
<path className="scenario-line" d="M0 18 L25 16 L45 8 L65 10 L85 4 L100 1" fill="none" stroke="#38BDF8" strokeWidth="1"></path>
</svg>
</div>

<div className="scenario-card bg-[#0a0a0a] border border-white/5 p-[clamp(2rem,3vw,3rem)] relative group reveal-framer" style={{transitionDelay: '300ms'}}>
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#38BDF8] mb-6 block">SCENARIO: GAMMA</span>
<h3 className="font-display text-[clamp(1.5rem,2vw,2rem)] text-[#F5F5F0] mb-4">Distressed Acquisition</h3>
<p className="font-body text-[clamp(0.875rem,1vw,1rem)] text-[#8A8A8A] mb-8 line-clamp-3">
                        Deploying capital into structurally dislocated real assets during macroeconomic panic, acquiring prime commercial infra at a 40% discount to replacement cost.
                    </p>
<svg className="w-full h-12" preserveaspectratio="none" viewbox="0 0 100 20">
<path d="M0 5 L30 18 L50 15 L70 5 L85 8 L100 2" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>
<path className="scenario-line" d="M0 5 L30 18 L50 15 L70 5 L85 8 L100 2" fill="none" stroke="#38BDF8" strokeWidth="1"></path>
</svg>
</div>
</div>
</section>

<section className="py-[clamp(8rem,15vh,16rem)] px-[clamp(1.5rem,4vw,3rem)] relative border-t border-white/5 bg-[#030303] overflow-hidden" id="contact">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.015] mix-blend-screen">
<span className="font-display text-[30vw] tracking-tighter leading-none">RESTRICTED</span>
</div>
<div className="mx-auto max-w-[clamp(40rem,60vw,50rem)] flex flex-col items-center relative z-10">
<div className="flex items-center justify-center w-16 h-16 border border-[#38BDF8]/30 rounded-full mb-8 reveal-framer relative">
<div className="absolute inset-0 rounded-full border border-[#38BDF8] animate-ping opacity-20"></div>
<div className="w-2 h-2 bg-[#38BDF8] rounded-full animate-pulse"></div>
</div>
<h2 className="font-display text-[clamp(3.5rem,5vw,5rem)] leading-none tracking-tight text-[#F5F5F0] mb-6 text-center reveal-framer" style={{transitionDelay: '100ms'}}>
                    Access Portal
                </h2>
<p className="font-body text-[clamp(1rem,1.2vw,1.25rem)] text-[#8A8A8A] text-center max-w-[45ch] mb-[clamp(4rem,6vh,5rem)] reveal-framer" style={{transitionDelay: '200ms'}}>
                    Praxis mandates are strictly by invitation. Principals requiring aggressive asset multiplication and total protection may submit credentials below.
                </p>

<form className="w-full flex flex-col gap-[clamp(2.5rem,4vw,3rem)] reveal-framer bg-[#0a0a0a] p-[clamp(2rem,4vw,4rem)] relative border border-white/5" onsubmit="event.preventDefault();" style={{transitionDelay: '300ms'}}>
<div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#38BDF8] -translate-x-[1px] -translate-y-[1px]"></div>
<div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#38BDF8] translate-x-[1px] -translate-y-[1px]"></div>
<div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#38BDF8] -translate-x-[1px] translate-y-[1px]"></div>
<div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#38BDF8] translate-x-[1px] translate-y-[1px]"></div>
<div className="flex justify-between items-center border-b border-white/5 pb-4 mb-4">
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#555] uppercase tracking-widest flex items-center gap-2">
<iconify-icon icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon> SECURE ENCLAVE
                        </span>
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#38BDF8]">ID: PRX-AUM</span>
</div>
<div className="relative group">
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#555] mb-2 block uppercase tracking-widest group-focus-within:text-[#38BDF8] transition-colors">01 // Principal Entity</span>
<input className="w-full bg-transparent border-b border-white/10 py-3 font-mono-custom text-[clamp(1.125rem,1.2vw,1.25rem)] text-[#F5F5F0] focus:outline-none focus:border-[#38BDF8] transition-colors placeholder:text-[#333]" placeholder="Legal Name or FO Designation" required="" type="text"/>
</div>
<div className="relative group">
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#555] mb-2 block uppercase tracking-widest group-focus-within:text-[#38BDF8] transition-colors">02 // Liquid Capital Range</span>
<select className="w-full bg-transparent border-b border-white/10 py-3 font-mono-custom text-[clamp(1.125rem,1.2vw,1.25rem)] text-[#F5F5F0] focus:outline-none focus:border-[#38BDF8] transition-colors appearance-none cursor-pointer">
<option className="bg-[#0a0a0a] text-[#8A8A8A]" value="1">$25M - $50M</option>
<option className="bg-[#0a0a0a] text-[#8A8A8A]" value="2">$50M - $100M</option>
<option className="bg-[#0a0a0a] text-[#8A8A8A]" value="3">$100M+</option>
</select>
<iconify-icon className="absolute right-0 bottom-4 text-[#555] pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative group mb-4">
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#555] mb-2 block uppercase tracking-widest group-focus-within:text-[#38BDF8] transition-colors">03 // Strategic Objective</span>
<textarea className="w-full bg-transparent border-b border-white/10 py-3 font-mono-custom text-[clamp(1.125rem,1.2vw,1.25rem)] text-[#F5F5F0] focus:outline-none focus:border-[#38BDF8] transition-colors placeholder:text-[#333] resize-none overflow-hidden" oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'" placeholder="Define desired structural outcome" required="" rows="1"></textarea>
</div>
<button className="w-full btn-custom py-[clamp(1.25rem,2vw,1.5rem)] font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-[0.2em] text-[#F5F5F0] mt-4 flex items-center justify-center gap-4 group cursor-pointer border-none bg-transparent" type="submit">
<span className="relative z-10 flex items-center gap-2 group-hover:text-[#050505] transition-colors duration-300">
                            Transmit Protocol <iconify-icon className="text-xl transition-transform group-hover:translate-x-2" icon="solar:arrow-right-linear"></iconify-icon>
</span>
<span className="absolute inset-0 border border-white/10" style={{clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)'}}></span>
</button>
</form>
</div>
</section>
</main>

<footer className="pt-[clamp(6rem,10vh,8rem)] pb-[clamp(2rem,4vh,2rem)] px-[clamp(1.5rem,4vw,3rem)] border-t border-white/10 relative overflow-hidden bg-[#050505]">
<div className="mx-auto max-w-[clamp(75rem,95vw,120rem)] grid grid-cols-1 md:grid-cols-12 gap-[clamp(4rem,6vw,4rem)] mb-[clamp(8rem,15vh,12rem)] relative z-10 reveal-framer">

<div className="md:col-span-4 flex flex-col gap-8 pr-8">
<a className="flex items-center gap-3 font-display text-[clamp(1.5rem,2vw,2rem)] tracking-tight text-[#F5F5F0]" href="#">
<svg className="text-[#38BDF8]" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M12 2L2 22h20L12 2z"></path>
<path d="M12 12l-4 8h8l-4-8z"></path>
</svg>
                    PRAXIS
                </a>
<p className="font-body text-[clamp(1rem,1.1vw,1.125rem)] text-[#8A8A8A] leading-relaxed max-w-[30ch]">
                    Architects of sovereign wealth. Bypass public markets. Protect your legacy through ruthless mathematical precision.
                </p>
<div className="flex gap-4">
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#555] border border-white/10 px-3 py-1">ZURICH</span>
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#555] border border-white/10 px-3 py-1">LONDON</span>
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#555] border border-white/10 px-3 py-1">DUBAI</span>
</div>
</div>

<div className="md:col-span-2 flex flex-col gap-4">
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#333] uppercase tracking-[0.2em] mb-4 block">Index</span>
<a className="font-body text-[clamp(1rem,1.1vw,1.125rem)] text-[#8A8A8A] hover:text-[#38BDF8] transition-colors w-fit" href="#reality">Thesis</a>
<a className="font-body text-[clamp(1rem,1.1vw,1.125rem)] text-[#8A8A8A] hover:text-[#38BDF8] transition-colors w-fit" href="#metrics">Data Log</a>
<a className="font-body text-[clamp(1rem,1.1vw,1.125rem)] text-[#8A8A8A] hover:text-[#38BDF8] transition-colors w-fit" href="#capabilities">Vectors</a>
</div>

<div className="md:col-span-2 flex flex-col gap-4">
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#333] uppercase tracking-[0.2em] mb-4 block">Network</span>
<a className="font-body text-[clamp(1rem,1.1vw,1.125rem)] text-[#8A8A8A] hover:text-[#38BDF8] transition-colors w-fit" href="#">Enclave Login</a>
<a className="font-body text-[clamp(1rem,1.1vw,1.125rem)] text-[#8A8A8A] hover:text-[#38BDF8] transition-colors w-fit" href="#">Regulatory</a>
<a className="font-body text-[clamp(1rem,1.1vw,1.125rem)] text-[#8A8A8A] hover:text-[#38BDF8] transition-colors w-fit" href="#">Structurings</a>
</div>

<div className="md:col-span-4 flex flex-col gap-6">
<span className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#333] uppercase tracking-[0.2em] block">Intelligence</span>
<p className="font-body text-[clamp(1rem,1.1vw,1.125rem)] text-[#8A8A8A]">Request our quarterly macroeconomic dislocation report.</p>
<form className="flex items-center border-b border-white/20 focus-within:border-[#38BDF8] transition-colors pb-3 mt-4" onsubmit="event.preventDefault();">
<input className="bg-transparent w-full font-mono-custom text-[clamp(0.875rem,1vw,1rem)] text-[#F5F5F0] outline-none placeholder:text-[#555]" placeholder="Corporate/FO Email Address" required="" type="email"/>
<button className="text-[#8A8A8A] hover:text-[#38BDF8] transition-colors px-2" type="submit">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="mx-auto max-w-[clamp(75rem,95vw,120rem)] flex flex-col md:flex-row justify-between items-center relative z-10 border-t border-white/5 pt-8 reveal-framer">
<p className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#555] uppercase tracking-widest">
                © PRAXIS WEALTH ARCHITECTURE.
            </p>
<p className="font-mono-custom text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#555] uppercase tracking-widest mt-4 md:mt-0 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-[#38BDF8] rounded-full"></span> SECURE FACILITY
            </p>
</div>

<div className="absolute bottom-[-15%] left-0 w-full text-center pointer-events-none select-none z-0">
<h2 className="font-display text-[25vw] leading-none tracking-tighter text-[#F5F5F0] opacity-[0.02] m-0 p-0 whitespace-nowrap">
                PRAXIS
            </h2>
</div>
</footer>



    </>
  );
}
