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



tailwind.config = {
theme: {
extend: {
colors: {
bg: '#000000',
surface: '#0a0a0c',
surface2: '#121214',
accent: '#c8ff00',
primary: '#ffffff',
secondary: '#888891',
border: '#222224',
danger: '#ff3366',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
fontSize: {
'xs': '0.75rem',
'sm': '0.875rem',
'base': 'clamp(0.875rem, 1vw, 1rem)',
'lg': '1.125rem',
'xl': '1.25rem',
'2xl': '1.5rem',
'3xl': '1.875rem',
'4xl': '2.25rem',
'5xl': 'clamp(2.5rem, 4vw, 3.5rem)',
'h1': 'clamp(3.5rem, 10vw, 12rem)',
},
spacing: {
'section': 'clamp(6rem, 10vw, 12rem)',
'container-w': 'clamp(20rem, 95vw, 90rem)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- Intersection Observer for Reveals ---
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

            // --- FAQ Accordion Logic ---
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                const btn = item.querySelector('.faq-btn');
                const content = item.querySelector('.faq-content');
                const icon = item.querySelector('.faq-icon');

                btn.addEventListener('click', () => {
                    const isOpen = !content.classList.contains('hidden');
                    
                    // Close all
                    faqItems.forEach(i => {
                        i.querySelector('.faq-content').classList.add('hidden');
                        i.querySelector('.faq-icon').setAttribute('icon', 'solar:add-linear');
                        i.classList.remove('border-accent');
                    });

                    // Open clicked if it was closed
                    if (!isOpen) {
                        content.classList.remove('hidden');
                        icon.setAttribute('icon', 'solar:minus-linear');
                        item.classList.add('border-accent');
                    }
                });
            });

            // --- Technical WebGL-Style Canvas (Strict Grid/Dotted) ---
            const canvas = document.getElementById('webgl-canvas');
            if(canvas) {
                const ctx = canvas.getContext('2d');
                let width, height;
                let dots = [];
                const spacing = 40; 
                const baseRadius = 0.8;
                let mouse = { x: -1000, y: -1000 };

                function resize() {
                    width = canvas.width = window.innerWidth;
                    height = canvas.height = window.innerHeight;
                    initDots();
                }

                class Dot {
                    constructor(x, y) {
                        this.x = x;
                        this.y = y;
                        this.baseX = x;
                        this.baseY = y;
                        this.radius = baseRadius;
                        this.alpha = 0.1;
                    }
                    update() {
                        let dx = mouse.x - this.baseX;
                        let dy = mouse.y - this.baseY;
                        let distance = Math.sqrt(dx * dx + dy * dy);
                        let maxDist = 200;

                        if (distance < maxDist) {
                            let force = (maxDist - distance) / maxDist;
                            // Kinetic repulsion (snappy)
                            this.x = this.baseX - dx * force * 0.15;
                            this.y = this.baseY - dy * force * 0.15;
                            
                            this.alpha = 0.1 + force * 0.8;
                            this.radius = baseRadius + force * 1.5;
                        } else {
                            // Snap back
                            this.x += (this.baseX - this.x) * 0.2;
                            this.y += (this.baseY - this.y) * 0.2;
                            this.alpha = 0.1;
                            this.radius = baseRadius;
                        }
                    }
                    draw() {
                        ctx.fillStyle = `rgba(200, 255, 0, ${this.alpha})`;
                        ctx.fillRect(this.x, this.y, this.radius * 2, this.radius * 2); // Square dots for brutalism
                    }
                }

                function initDots() {
                    dots = [];
                    for (let x = 0; x < width + spacing; x += spacing) {
                        for (let y = 0; y < height + spacing; y += spacing) {
                            dots.push(new Dot(x, y));
                        }
                    }
                }

                function animate() {
                    ctx.clearRect(0, 0, width, height);
                    
                    // Draw strict orthogonal connections for nearby active dots
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(200, 255, 0, 0.05)`;
                    ctx.lineWidth = 1;
                    
                    let activeDots = dots.filter(d => d.alpha > 0.3);
                    for(let i=0; i<activeDots.length; i++) {
                        for(let j=i+1; j<activeDots.length; j++) {
                            let dx = Math.abs(activeDots[i].x - activeDots[j].x);
                            let dy = Math.abs(activeDots[i].y - activeDots[j].y);
                            // Draw orthogonal lines instead of direct diagonals
                            if (dx < spacing * 1.5 && dy < spacing * 1.5) {
                                ctx.moveTo(activeDots[i].x, activeDots[i].y);
                                ctx.lineTo(activeDots[j].x, activeDots[i].y);
                                ctx.lineTo(activeDots[j].x, activeDots[j].y);
                            }
                        }
                    }
                    ctx.stroke();

                    dots.forEach(dot => {
                        dot.update();
                        dot.draw();
                    });

                    requestAnimationFrame(animate);
                }

                window.addEventListener('resize', resize);
                
                window.addEventListener('mousemove', (e) => {
                    mouse.x = e.clientX;
                    mouse.y = e.clientY + window.scrollY; // Adjust for scroll if canvas is relative to document, but here it's fixed/absolute to top
                });
                
                window.addEventListener('mouseleave', () => {
                    mouse.x = -1000; mouse.y = -1000;
                });

                resize();
                animate();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-bg border-b border-border transition-all duration-300">
<div className="flex items-stretch h-16 md:h-20 w-full">

<a className="flex items-center gap-3 px-6 md:px-10 border-r border-border group hover:bg-surface transition-colors w-auto" href="#">
<svg className="text-primary group-hover:text-accent transition-colors duration-300" fill="none" height="24" viewbox="0 0 32 32" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2L2 24H12L16 16L20 24H30L16 2Z" stroke="currentColor" strokeLinejoin="bevel" strokeWidth="2"></path>
<path d="M16 30L22 20H10L16 30Z" fill="currentColor"></path>
</svg>
<span className="font-mono font-medium tracking-tighter text-lg leading-none text-primary mt-0.5">VERTEX</span>
</a>

<div className="hidden lg:flex flex-1 items-stretch font-mono text-xs uppercase text-secondary">
<a className="flex-1 flex items-center justify-center border-r border-border hover:text-primary hover:bg-surface transition-colors" href="#platform">Platform</a>
<a className="flex-1 flex items-center justify-center border-r border-border hover:text-primary hover:bg-surface transition-colors" href="#impact">Impact</a>
<a className="flex-1 flex items-center justify-center border-r border-border hover:text-primary hover:bg-surface transition-colors" href="#ecosystem">Ecosystem</a>
<a className="flex-1 flex items-center justify-center border-r border-border hover:text-primary hover:bg-surface transition-colors" href="#deployment">Deployment</a>
</div>

<div className="hidden md:flex items-stretch w-48 lg:w-64">
<a className="w-full flex items-center justify-center bg-accent text-bg font-mono text-xs font-semibold uppercase tracking-widest hover:bg-primary transition-colors group" href="#cta">
                    Init Sequence
                    <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<button className="lg:hidden ml-auto px-6 text-primary border-l border-border hover:bg-surface transition-colors flex items-center">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-[100svh] flex flex-col pt-[4rem] md:pt-[5rem] overflow-hidden bg-bg border-b border-border">

<canvas className="absolute inset-0 z-0" id="webgl-canvas"></canvas>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQwIDBMMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] z-0 pointer-events-none opacity-50"></div>
<div className="relative z-10 w-full flex-1 flex flex-col">

<div className="px-6 md:px-10 pt-16 md:pt-24 pb-12 reveal-up">
<div className="font-mono text-[0.625rem] md:text-xs uppercase mb-8 flex items-center gap-3 text-accent border border-accent bg-accent/5 inline-flex px-3 py-1.5">
<div className="w-1.5 h-1.5 bg-accent status-dot"></div>
<span>System Online // Protocol V3.0</span>
</div>
<h1 className="text-h1 leading-[0.85] tracking-tighter text-primary uppercase font-medium">
                    Absolute <br/>
<span className="text-accent">Spatial Control.</span>
</h1>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 flex-1 border-t border-border bg-bg/60 backdrop-blur-sm">

<div className="lg:col-span-5 p-6 md:p-10 lg:border-r border-border flex flex-col justify-between reveal-up">
<p className="text-secondary text-base lg:text-lg max-w-md font-light leading-relaxed mb-10">
                        Stop bleeding margins to positioning drift. We deploy sub-millimeter tracking systems that scale instantly. Your warehouse, assembly line, or autonomous fleet—perfectly mapped, perfectly controlled.
                    </p>
<div className="flex flex-col sm:flex-row items-stretch gap-px bg-border border border-border mt-auto">
<a className="flex-1 bg-accent text-bg px-6 py-5 font-mono text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary transition-colors" href="#demo">
                            Deploy Ops
                            <iconify-icon icon="solar:rocket-linear" width="16"></iconify-icon>
</a>
<a className="flex-1 bg-surface text-primary px-6 py-5 font-mono text-xs font-medium uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-surface2 transition-colors" href="#impact">
                            Calculate ROI
                        </a>
</div>

<div className="mt-8 grid grid-cols-3 gap-px bg-border border border-border font-mono text-[0.625rem] text-secondary uppercase tracking-widest">
<div className="bg-bg p-4 flex flex-col gap-1"><span>Precision</span><span className="text-primary text-sm font-medium">±0.2mm</span></div>
<div className="bg-bg p-4 flex flex-col gap-1"><span>Latency</span><span className="text-primary text-sm font-medium">&lt;12ms</span></div>
<div className="bg-bg p-4 flex flex-col gap-1"><span>Uptime</span><span className="text-primary text-sm font-medium">99.999%</span></div>
</div>
</div>

<div className="lg:col-span-7 p-6 md:p-10 flex items-center justify-center reveal-up d-2 min-h-[500px] relative">
<div className="w-full h-full border border-border bg-bg flex flex-col relative overflow-hidden group">
<div className="h-10 border-b border-border bg-surface flex items-center justify-between px-4 z-10">
<span className="font-mono text-[0.625rem] text-secondary uppercase tracking-widest flex items-center gap-2">
<iconify-icon icon="solar:radar-linear"></iconify-icon> Live Telemetry Array
                            </span>
<span className="font-mono text-[0.625rem] text-accent flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-accent status-dot"></div> SECURE_LINK
                            </span>
</div>
<div className="flex-1 relative bg-surface2 overflow-hidden flex items-center justify-center">
<div className="scan-line"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDBMMCAwIDAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgzNCwzNCwzNiwwLjUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]"></div>

<div className="relative z-10 w-48 h-48 border border-accent/40 rounded-full flex items-center justify-center">
<div className="absolute w-full h-[1px] bg-accent/20"></div>
<div className="absolute h-full w-[1px] bg-accent/20"></div>
<div className="w-32 h-32 border border-accent/20 rounded-full animate-[spin_10s_linear_infinite] border-t-accent"></div>
<div className="absolute w-6 h-6 border border-accent top-1/4 left-1/3 flex items-center justify-center bg-accent/10">
<div className="w-1 h-1 bg-accent"></div>
</div>
<div className="absolute -top-4 -right-12 font-mono text-[0.625rem] text-bg bg-accent px-2 py-1 font-semibold uppercase">TGT_ACQUIRED</div>
<div className="absolute -bottom-8 -left-8 font-mono text-[0.625rem] text-primary bg-bg px-2 py-1 border border-border uppercase">Z_OFFSET: -0.04</div>
</div>

<div className="absolute bottom-4 left-4 font-mono text-[0.625rem] text-secondary leading-tight bg-bg p-4 border border-border w-64 z-20">
<div className="text-primary mb-2 border-b border-border pb-2 uppercase flex justify-between"><span>Pipeline_Log</span><span className="text-accent">SYS_OK</span></div>
<div className="opacity-80 mt-1">&gt;&gt; Sync IMU... <span className="text-accent float-right">OK</span></div>
<div className="opacity-80">&gt;&gt; Parse LiDAR... <span className="text-accent float-right">OK</span></div>
<div className="opacity-80">&gt;&gt; Pose update: [42.1, 8.4, 0.0]</div>
<div className="opacity-80">&gt;&gt; Drift variance: 0.00012</div>
<div className="mt-3 w-full h-1 bg-border"><div className="h-full bg-accent w-3/4"></div></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-section border-b border-border bg-surface" id="stakes">
<div className="w-container-w mx-auto">
<div className="flex flex-col md:flex-row gap-12 justify-between items-start mb-16">
<div className="md:w-1/2 reveal-up">
<div className="font-mono text-xs uppercase text-accent mb-4">[ SYSTEM DIAGNOSTIC ]</div>
<h2 className="text-3xl md:text-5xl display-font text-primary mb-6 uppercase tracking-tight">Every Inch of Error<br/>Costs Millions.</h2>
<p className="text-secondary text-base font-light">
                        The physical world is chaotic. Legacy mapping systems degrade, WiFi triangulation bounces, and LiDAR standard integration cycles take months. When autonomous fleets lose context, operations halt.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
<div className="bg-bg p-8 reveal-up d-1 hover:bg-surface2 transition-colors">
<div className="font-mono text-xs text-secondary uppercase mb-6 border-b border-border pb-2">Industry Average</div>
<div className="text-danger text-5xl font-mono mb-2 font-medium tracking-tighter">&gt;5<span className="text-2xl">cm</span></div>
<p className="text-primary text-sm mb-1 font-medium uppercase">Baseline Drift</p>
<p className="text-secondary text-xs">Accumulated error in standard warehouse positioning over 4 hours.</p>
</div>
<div className="bg-bg p-8 reveal-up d-2 hover:bg-surface2 transition-colors">
<div className="font-mono text-xs text-secondary uppercase mb-6 border-b border-border pb-2">Financial Impact</div>
<div className="text-primary text-5xl font-mono mb-2 font-medium tracking-tighter">$2.3<span className="text-2xl">M</span></div>
<p className="text-primary text-sm mb-1 font-medium uppercase">Annual Capital Bleed</p>
<p className="text-secondary text-xs">Lost efficiency due to pathfinding conflicts and lost assets.</p>
</div>
<div className="bg-surface2 border border-accent/20 p-8 reveal-up d-3 hover:bg-surface transition-colors">
<div className="font-mono text-xs text-accent uppercase mb-6 border-b border-accent/20 pb-2">The Vertex Standard</div>
<div className="text-accent text-5xl font-mono mb-2 font-medium tracking-tighter">±0.2<span className="text-2xl">mm</span></div>
<p className="text-primary text-sm mb-1 font-medium uppercase">Absolute Truth</p>
<p className="text-secondary text-xs">Sustained accuracy regardless of dynamic obstacles or lighting.</p>
</div>
</div>
</div>
</section>

<section className="py-section bg-bg" id="platform">
<div className="w-container-w mx-auto">
<div className="mb-20 reveal-up max-w-3xl">
<div className="font-mono text-xs uppercase text-accent mb-4">[ ARCHITECTURE ]</div>
<h2 className="text-4xl md:text-5xl display-font text-primary mb-6 uppercase tracking-tight">Engineered for Human Benefit. <br/>Designed for Unfair Advantage.</h2>
<p className="text-secondary text-base font-light">We didn't just build a better sensor; we built a deployment engine. Minimize human risk, maximize robotic throughput, and gain god-mode visibility.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">

<div className="bg-surface p-1 reveal-up d-1 group flex flex-col sm:flex-row h-full">
<div className="sm:w-1/2 h-48 sm:h-auto relative overflow-hidden bg-bg border-b sm:border-b-0 sm:border-r border-border">
<img className="absolute inset-0 w-full h-full object-cover hi-fi-img" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="sm:w-1/2 p-8 flex flex-col justify-center bg-bg group-hover:bg-surface2 transition-colors">
<iconify-icon className="text-3xl text-primary mb-4" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-xl font-medium mb-2 text-primary uppercase tracking-tight">Unbreakable Safety</h3>
<p className="text-sm text-secondary font-light">Eliminate collisions. Real-time semantic awareness predicts human movement, triggering instant micro-adjustments.</p>
</div>
</div>

<div className="bg-surface p-1 reveal-up d-2 group flex flex-col sm:flex-row-reverse h-full">
<div className="sm:w-1/2 h-48 sm:h-auto relative overflow-hidden bg-bg border-b sm:border-b-0 sm:border-l border-border">
<img className="absolute inset-0 w-full h-full object-cover hi-fi-img" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="sm:w-1/2 p-8 flex flex-col justify-center bg-bg group-hover:bg-surface2 transition-colors">
<iconify-icon className="text-3xl text-primary mb-4" icon="solar:chart-2-linear"></iconify-icon>
<h3 className="text-xl font-medium mb-2 text-primary uppercase tracking-tight">Hyper-Scale Throughput</h3>
<p className="text-sm text-secondary font-light">Narrower safety tolerances mean tighter packing, faster routing, and a massive 2.1x increase in processing density.</p>
</div>
</div>

<div className="bg-bg p-10 reveal-up d-3 group md:col-span-2 relative hover:bg-surface2 transition-colors flex flex-col md:flex-row gap-10 items-center">
<div className="md:w-1/2 relative z-10">
<iconify-icon className="text-3xl text-primary mb-4" icon="solar:global-linear"></iconify-icon>
<h3 className="text-2xl font-medium mb-3 text-primary uppercase tracking-tight">Edge-Native Autonomy</h3>
<p className="text-base text-secondary font-light mb-6">Process heavily locally, sync lightly globally. Our neural pipelines run natively on edge hardware, ensuring zero latency spikes even in offline environments. No cloud dependency when it matters most.</p>
<div className="flex flex-wrap items-center gap-2 font-mono text-xs">
<span className="border border-border bg-surface px-3 py-1 text-primary">JETSON OPTIMIZED</span>
<span className="border border-border bg-surface px-3 py-1 text-primary">OFFLINE MODE</span>
</div>
</div>
<div className="md:w-1/2 w-full h-full min-h-[200px] border border-border bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzIyMjIyNCIvPjwvc3ZnPg==')] relative flex items-center justify-center">
<div className="text-accent font-mono text-xs border border-accent/30 bg-accent/5 px-4 py-2 uppercase">Local Processing Node Active</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-section border-y border-border bg-surface relative" id="impact">
<div className="w-container-w mx-auto">
<div className="flex flex-col md:flex-row gap-12 justify-between items-end mb-16 border-b border-border pb-8">
<div className="reveal-up">
<div className="font-mono text-xs uppercase text-accent mb-4">[ PERFORMANCE METRICS ]</div>
<h2 className="text-3xl md:text-5xl display-font text-primary uppercase tracking-tight">Truth in Numbers.</h2>
</div>
<div className="reveal-up d-1 max-w-md">
<p className="text-secondary text-sm font-light">We don't sell theoretical efficiency. We ship production infrastructure that radically alters enterprise P&amp;L statements.</p>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border overflow-hidden reveal-up d-2">
<div className="bg-bg p-8 flex flex-col justify-center text-center group hover:bg-surface2 transition-colors duration-300">
<div className="text-4xl md:text-5xl font-mono text-primary font-medium mb-2 group-hover:text-accent transition-colors">$4.2M</div>
<div className="text-xs text-secondary font-mono uppercase tracking-wide">Avg Annual Savings</div>
</div>
<div className="bg-bg p-8 flex flex-col justify-center text-center group hover:bg-surface2 transition-colors duration-300">
<div className="text-4xl md:text-5xl font-mono text-primary font-medium mb-2 group-hover:text-accent transition-colors">40+</div>
<div className="text-xs text-secondary font-mono uppercase tracking-wide">Enterprise Sites Live</div>
</div>
<div className="bg-bg p-8 flex flex-col justify-center text-center group hover:bg-surface2 transition-colors duration-300">
<div className="text-4xl md:text-5xl font-mono text-primary font-medium mb-2 group-hover:text-accent transition-colors">7<span className="text-xl">mo</span></div>
<div className="text-xs text-secondary font-mono uppercase tracking-wide">Payback Period</div>
</div>
<div className="bg-bg p-8 flex flex-col justify-center text-center group hover:bg-surface2 transition-colors duration-300">
<div className="text-4xl md:text-5xl font-mono text-primary font-medium mb-2 group-hover:text-accent transition-colors">0<span className="text-xl">%</span></div>
<div className="text-xs text-secondary font-mono uppercase tracking-wide">Data Loss Incidents</div>
</div>
</div>

<div className="mt-16 reveal-up d-3">
<p className="font-mono text-[0.625rem] text-secondary uppercase tracking-widest mb-8 text-center">Powering Infrastructure For</p>
<div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-40 hover:opacity-100 transition-opacity duration-500">
<span className="font-sans font-bold text-xl tracking-tighter text-primary uppercase">Aerospace Corp</span>
<span className="font-sans font-bold text-xl tracking-tighter text-primary uppercase">Global Logistics</span>
<span className="font-sans font-bold text-xl tracking-tighter text-primary uppercase">Autonomy Labs</span>
<span className="font-sans font-bold text-xl tracking-tighter text-primary uppercase">Nexus Robotics</span>
</div>
</div>
</div>
</section>

<section className="py-section relative bg-bg" id="ecosystem">
<div className="w-container-w mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal-up">
<div className="font-mono text-xs uppercase text-accent mb-4">[ ECOSYSTEM ]</div>
<h2 className="text-3xl md:text-5xl display-font text-primary mb-6 uppercase tracking-tight">Write Logic.<br/>Not Drivers.</h2>
<p className="text-secondary text-base font-light mb-8">
                    Stop wasting engineering cycles on low-level sensor fusion. VERTEX provides native APIs, pre-compiled SDKs, and plug-and-play nodes for modern robotics stacks. Get raw coordinate data in 3 lines of code.
                </p>
<div className="flex flex-col gap-px bg-border border border-border font-mono text-xs text-primary mb-10 w-fit">
<span className="bg-surface px-4 py-3 flex items-center gap-3"><iconify-icon className="text-primary text-lg" icon="solar:programming-circle-linear"></iconify-icon> ROS2 Foxy/Humble Native</span>
<span className="bg-surface px-4 py-3 flex items-center gap-3"><iconify-icon className="text-primary text-lg" icon="solar:code-square-linear"></iconify-icon> C++ / Python / Rust SDKs</span>
<span className="bg-surface px-4 py-3 flex items-center gap-3"><iconify-icon className="text-primary text-lg" icon="solar:server-square-linear"></iconify-icon> Pre-compiled Docker Images</span>
</div>
<a className="inline-flex items-center gap-2 border-b border-primary pb-1 text-sm font-mono text-primary uppercase tracking-wide hover:text-accent hover:border-accent transition-colors" href="#">
                    View API Documentation <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="reveal-up d-2 relative w-full border border-border bg-bg flex flex-col">
<div className="h-10 border-b border-border bg-surface flex items-center px-4 justify-between">
<span className="font-mono text-[0.625rem] text-secondary">navigation_node.py</span>
<span className="font-mono text-[0.625rem] text-accent flex items-center gap-1 uppercase">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Synced
                    </span>
</div>
<div className="p-6 font-mono text-xs sm:text-sm overflow-x-auto text-[#888891] leading-loose bg-surface2">
<pre>
<span className="text-[#c678dd]">import</span> vertex_core <span className="text-[#c678dd]">as</span> vx

<span className="text-[#5c6370]"># 1. Connect to local spatial engine</span>
engine = vx.Engine(target=<span className="text-[#98c379]">"local"</span>)

<span className="text-[#5c6370]"># 2. Subscribe to sub-mm coordinates</span>
<span className="text-[#c678dd]">def</span> <span className="text-[#61afef]">on_pose_update</span>(pose):
    <span className="text-[#e5c07b]">print</span>(<span className="text-[#98c379]">f"X:{pose.x:.4f} Y:{pose.y:.4f} Z:{pose.z:.4f}"</span>)
    robot.navigate_to(pose.target)

<span className="text-[#5c6370]"># 3. Stream at 200Hz</span>
engine.streams.pose.subscribe(
    callback=on_pose_update, 
    rate_hz=<span className="text-[#d19a66]">200</span>
)
engine.run()
</pre>
</div>
</div>
</div>
</section>

<section className="py-section border-t border-border bg-surface" id="deployment">
<div className="w-container-w mx-auto">
<div className="mb-16 reveal-up border-b border-border pb-10">
<div className="font-mono text-xs uppercase text-accent mb-4">[ PROTOCOL ]</div>
<h2 className="text-3xl md:text-5xl display-font text-primary mb-6 uppercase tracking-tight">Live in 8 Weeks.<br/>Guaranteed.</h2>
<p className="text-secondary text-base font-light max-w-2xl">No endless pilot purgatory. We map, deploy, validate, and hand over the keys on a strict, mathematically precise timeline.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">

<div className="bg-bg p-10 reveal-up hover:bg-surface2 transition-colors flex flex-col">
<div className="w-12 h-12 border border-border bg-surface flex items-center justify-center font-mono text-primary font-medium mb-8">01</div>
<h3 className="text-xl font-medium text-primary mb-4 uppercase tracking-tight">Spatial Audit</h3>
<p className="text-secondary font-light text-sm">Engineers deploy temporary edge nodes to map your environment, identify occlusion zones, and define the absolute geometric truth of your facility.</p>
</div>

<div className="bg-bg p-10 reveal-up d-1 hover:bg-surface2 transition-colors flex flex-col">
<div className="w-12 h-12 border border-border bg-surface flex items-center justify-center font-mono text-primary font-medium mb-8">02</div>
<h3 className="text-xl font-medium text-primary mb-4 uppercase tracking-tight">Digital Twin &amp; Sim</h3>
<p className="text-secondary font-light text-sm">We construct a millimeter-perfect virtual replica, running thousands of simulated robotic interactions to optimize node placement and pathing.</p>
</div>

<div className="bg-surface2 border border-accent/30 p-10 reveal-up d-2 hover:bg-surface transition-colors flex flex-col">
<div className="w-12 h-12 border border-accent bg-accent/10 flex items-center justify-center font-mono text-accent font-medium mb-8">03</div>
<h3 className="text-xl font-medium text-primary mb-4 uppercase tracking-tight">Zero-Downtime Injection</h3>
<p className="text-secondary font-light text-sm">Hardware installed overhead without disrupting floor operations. Software runs in parallel shadow mode for 7 days to prove superiority before the switch.</p>
</div>
</div>
</div>
</section>

<section className="py-section border-t border-border bg-bg">
<div className="w-container-w mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-4 reveal-up">
<div className="font-mono text-xs uppercase text-accent mb-4">[ INTELLIGENCE ]</div>
<h2 className="text-3xl display-font text-primary mb-6 uppercase tracking-tight">Unfiltered <br/>Realities.</h2>
<p className="text-secondary text-sm font-light mb-8">Engineering transparency is our default mode. No marketing fluff, just stark facts on how the system performs under severe duress.</p>
<a className="inline-block border border-border bg-surface px-6 py-4 font-mono text-xs font-medium uppercase tracking-widest text-primary hover:bg-primary hover:text-bg transition-colors" href="#cta">
                    Request Spec Sheet
                </a>
</div>
<div className="lg:col-span-8 flex flex-col gap-px bg-border border border-border reveal-up d-1 faq-container">

<div className="faq-item bg-bg transition-colors duration-300">
<button className="faq-btn w-full text-left p-6 flex justify-between items-center font-mono text-sm group text-primary hover:bg-surface">
<span className="uppercase tracking-wide">Localized Sensor Failure?</span>
<iconify-icon className="faq-icon text-secondary transition-transform duration-300" icon="solar:add-linear"></iconify-icon>
</button>
<div className="faq-content hidden px-6 pb-6 text-sm text-secondary font-light border-t border-border/50 pt-4 bg-surface2">
                        Graceful degradation to last-known state. Multi-sensor redundancy ensures no single point of failure. The system relies on overlapping FOVs; if Node A dies, Node B interpolates data. Average recovery time to functional state: 200ms.
                    </div>
</div>

<div className="faq-item bg-bg transition-colors duration-300">
<button className="faq-btn w-full text-left p-6 flex justify-between items-center font-mono text-sm group text-primary hover:bg-surface">
<span className="uppercase tracking-wide">Highly Volatile Environments?</span>
<iconify-icon className="faq-icon text-secondary transition-transform duration-300" icon="solar:add-linear"></iconify-icon>
</button>
<div className="faq-content hidden px-6 pb-6 text-sm text-secondary font-light border-t border-border/50 pt-4 bg-surface2">
                        Real-time semantic segmentation via edge AI distinguishes permanent infrastructure from temporary obstacles (pallets, humans, vehicles). Re-mapping occurs continuously in the background at 30Hz.
                    </div>
</div>

<div className="faq-item bg-bg transition-colors duration-300">
<button className="faq-btn w-full text-left p-6 flex justify-between items-center font-mono text-sm group text-primary hover:bg-surface">
<span className="uppercase tracking-wide">Production-Hardened vs R&amp;D?</span>
<iconify-icon className="faq-icon text-secondary transition-transform duration-300" icon="solar:add-linear"></iconify-icon>
</button>
<div className="faq-content hidden px-6 pb-6 text-sm text-secondary font-light border-t border-border/50 pt-4 bg-surface2">
                        We are running in 40+ full production enterprise environments globally. Our infrastructure is SOC 2 Type II certified. 99.999% SLA available for enterprise tiers.
                    </div>
</div>

<div className="faq-item bg-bg transition-colors duration-300">
<button className="faq-btn w-full text-left p-6 flex justify-between items-center font-mono text-sm group text-primary hover:bg-surface">
<span className="uppercase tracking-wide">Pilot Availability?</span>
<iconify-icon className="faq-icon text-secondary transition-transform duration-300" icon="solar:add-linear"></iconify-icon>
</button>
<div className="faq-content hidden px-6 pb-6 text-sm text-secondary font-light border-t border-border/50 pt-4 bg-surface2">
                        Yes. We offer a 4-week proof-of-concept with strictly defined success criteria. Cost is credited entirely toward full deployment if criteria are met. We only take on pilots we know will convert.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(8rem,12vw,12rem)] border-t border-border relative overflow-hidden bg-bg" id="cta">
<div className="w-container-w mx-auto relative z-10 reveal-up text-center flex flex-col items-center">
<div className="font-mono text-xs uppercase text-accent mb-6 flex items-center justify-center gap-2 border border-accent bg-accent/5 px-4 py-2">
<iconify-icon icon="solar:radar-linear"></iconify-icon> INITIALIZE CONNECTION
            </div>
<h2 className="text-4xl md:text-7xl display-font text-primary mb-8 uppercase tracking-tighter">Stop Guessing.<br/>Take Control.</h2>
<p className="text-secondary text-base max-w-xl mx-auto mb-10 font-light">Book a technical discovery call. Bypass the sales pitch. We will map your specific bottlenecks and architect a hard deployment plan.</p>
<a className="inline-flex items-center gap-3 bg-accent text-bg px-10 py-5 font-mono text-sm font-semibold uppercase tracking-widest hover:bg-primary transition-colors" href="#">
                Book Engineering Call
                <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<div className="mt-8 font-mono text-[0.625rem] text-secondary uppercase tracking-widest opacity-60">
                No commitment. Strict NDA applied automatically.
            </div>
</div>
</section>

<footer className="bg-surface border-t border-border text-sm relative">
<div className="w-full px-6 md:px-10 py-16">
<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">

<div className="md:col-span-2">
<a className="flex items-center gap-3 group mb-6 w-fit" href="#">
<svg className="text-primary group-hover:text-accent transition-colors duration-300" fill="none" height="24" viewbox="0 0 32 32" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2L2 24H12L16 16L20 24H30L16 2Z" stroke="currentColor" strokeLinejoin="bevel" strokeWidth="2"></path>
<path d="M16 30L22 20H10L16 30Z" fill="currentColor"></path>
</svg>
<span className="font-mono font-medium tracking-tighter text-lg leading-none text-primary mt-0.5">VERTEX</span>
</a>
<p className="text-secondary font-light text-xs max-w-xs uppercase tracking-wide leading-relaxed">Absolute Spatial Control.<br/>Engineered for autonomous scale.</p>
</div>

<div>
<h4 className="font-mono text-xs text-primary uppercase mb-6 tracking-wider font-semibold border-b border-border pb-2">Platform</h4>
<ul className="flex flex-col gap-4 text-secondary font-light text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Architecture</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Hardware Nodes</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Software Pipeline</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Security (SOC2)</a></li>
</ul>
</div>

<div>
<h4 className="font-mono text-xs text-primary uppercase mb-6 tracking-wider font-semibold border-b border-border pb-2">Resources</h4>
<ul className="flex flex-col gap-4 text-secondary font-light text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-primary transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Whitepapers</a></li>
<li><a className="hover:text-primary transition-colors" href="#">System Status</a></li>
</ul>
</div>

<div>
<h4 className="font-mono text-xs text-primary uppercase mb-6 tracking-wider font-semibold border-b border-border pb-2">Contact</h4>
<ul className="flex flex-col gap-4 text-secondary font-mono text-xs">
<li><a className="hover:text-accent transition-colors" href="mailto:deploy@vertex.agency">deploy@vertex.agency</a></li>
<li>+1 (800) 555-0199</li>
<li className="mt-2 text-[#55555c] leading-relaxed">1400 Coordination Way<br/>San Francisco, CA 94103</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4 text-xs text-secondary font-mono uppercase tracking-wide">
<div className="flex gap-6">
<span>© 2024 VERTEX Systems</span>
<a className="hover:text-primary transition-colors" href="#">Privacy</a>
<a className="hover:text-primary transition-colors" href="#">Terms</a>
</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-primary"></div>
                    Strictly Formatted
                </div>
</div>
</div>
</footer>



    </>
  );
}
