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



        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        
        let width, height;
        let points = [];
        let mouse = { x: -1000, y: -1000 };
        const spacing = 35; // Grid density
        let time = 0;

        function init() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = canvas.offsetHeight;
            points = [];

            const cols = Math.floor(width / spacing) + 2;
            const rows = Math.floor(height / spacing) + 2;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    points.push({
                        x: i * spacing,
                        y: j * spacing,
                        baseX: i * spacing,
                        baseY: j * spacing,
                        phase: Math.random() * Math.PI * 2
                    });
                }
            }
        }

        function draw() {
            ctx.clearRect(0, 0, width, height);
            time += 0.02;

            // Radar Sweep Angle
            const sweepAngle = (time * 0.5) % (Math.PI * 2);

            points.forEach(p => {
                // Wave motion
                const wave = Math.sin(p.x * 0.01 + time) * Math.cos(p.y * 0.01 + time) * 15;
                p.x = p.baseX + Math.sin(p.phase + time) * 2;
                p.y = p.baseY + wave;

                // Mouse Repulsion
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 150) {
                    const force = (150 - dist) / 150;
                    p.x -= (dx / dist) * force * 20;
                    p.y -= (dy / dist) * force * 20;
                }

                // Radar Illumination Logic
                const centerDx = p.x - width / 2;
                const centerDy = p.y - height / 2;
                let angle = Math.atan2(centerDy, centerDx);
                if (angle < 0) angle += Math.PI * 2;
                
                let angleDiff = sweepAngle - angle;
                if (angleDiff < 0) angleDiff += Math.PI * 2;

                // Default point
                let radius = 1;
                let opacity = 0.2;
                let color = '#C8C4BB'; // Default grid color

                // If caught in radar sweep
                if (angleDiff < 0.3) {
                    radius = 2;
                    opacity = 1 - (angleDiff / 0.3);
                    color = '#D4FF00'; // Accent color
                }
                
                // If near mouse
                if(dist < 100) {
                    radius = 2.5;
                    opacity = 0.8;
                    color = '#D4FF00';
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.globalAlpha = opacity;
                ctx.fill();
            });

            ctx.globalAlpha = 1;

            // Draw scanning line
            ctx.save();
            ctx.translate(width / 2, height / 2);
            ctx.rotate(sweepAngle);
            const gradient = ctx.createLinearGradient(0, 0, width, 0);
            gradient.addColorStop(0, 'rgba(212, 255, 0, 0.8)');
            gradient.addColorStop(1, 'rgba(212, 255, 0, 0)');
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(width, 0);
            ctx.lineTo(width, 50); // slight fan
            ctx.closePath();
            ctx.fillStyle = gradient;
            ctx.globalAlpha = 0.05;
            ctx.fill();
            
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(width, 0);
            ctx.strokeStyle = '#D4FF00';
            ctx.lineWidth = 1;
            ctx.globalAlpha = 0.4;
            ctx.stroke();
            ctx.restore();

            requestAnimationFrame(draw);
        }

        window.addEventListener('resize', init);
        window.addEventListener('mousemove', (e) => {
            // Adjust for scroll position for absolute canvas
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });

        init();
        draw();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed bottom-0 left-0 w-full bg-[#0E0E0C] border-t border-[#6B6860]/30 z-[100] overflow-hidden flex items-center pointer-events-none" style={{height: 'clamp(1.5rem, 3vw, 2rem)'}}>
<div className="flex w-max" style={{animation: 'ticker 40s linear infinite'}}>
<div className="flex items-center text-[#D4FF00] font-['JetBrains_Mono'] uppercase tracking-widest whitespace-nowrap" style={{fontSize: 'clamp(0.625rem, 0.8vw, 0.75rem)'}}>
<span className="mx-8 flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#D4FF00] relative"><span className="absolute inset-0 bg-[#D4FF00]" style={{animation: 'pulse-ring 2s infinite'}}></span></span>⬡ SECTOR 7 ALIVE · DENSITY +41%</span>
<span className="mx-8 flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#D4FF00] relative"><span className="absolute inset-0 bg-[#D4FF00]" style={{animation: 'pulse-ring 2s infinite 0.5s'}}></span></span>⬡ GRID 9 OBSCURED · INTERVENTION REQ</span>
<span className="mx-8 flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#D4FF00] relative"><span className="absolute inset-0 bg-[#D4FF00]" style={{animation: 'pulse-ring 2s infinite 1s'}}></span></span>⬡ ZONE ALPHA · FLUX NORMALIZED</span>
<span className="mx-8 flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#D4FF00] relative"><span className="absolute inset-0 bg-[#D4FF00]" style={{animation: 'pulse-ring 2s infinite 1.5s'}}></span></span>⬡ CORRIDOR B · ANOMALY DETECTED</span>

<span className="mx-8 flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#D4FF00] relative"><span className="absolute inset-0 bg-[#D4FF00]" style={{animation: 'pulse-ring 2s infinite'}}></span></span>⬡ SECTOR 7 ALIVE · DENSITY +41%</span>
<span className="mx-8 flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#D4FF00] relative"><span className="absolute inset-0 bg-[#D4FF00]" style={{animation: 'pulse-ring 2s infinite 0.5s'}}></span></span>⬡ GRID 9 OBSCURED · INTERVENTION REQ</span>
<span className="mx-8 flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#D4FF00] relative"><span className="absolute inset-0 bg-[#D4FF00]" style={{animation: 'pulse-ring 2s infinite 1s'}}></span></span>⬡ ZONE ALPHA · FLUX NORMALIZED</span>
<span className="mx-8 flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#D4FF00] relative"><span className="absolute inset-0 bg-[#D4FF00]" style={{animation: 'pulse-ring 2s infinite 1.5s'}}></span></span>⬡ CORRIDOR B · ANOMALY DETECTED</span>
</div>
</div>
</div>

<div className="fixed bottom-10 left-6 z-[90] font-['JetBrains_Mono'] text-[#6B6860] mix-blend-difference pointer-events-none" id="coord-stamp" style={{fontSize: 'clamp(0.625rem, 0.8vw, 0.75rem)'}}>
        [SYS.ONLINE] 37.7749° N, 122.4194° W
    </div>

<nav className="fixed top-0 left-0 w-full z-50 bg-[#F2F0EB]/90 backdrop-blur-xl border-b border-[#C8C4BB] transition-all duration-300">
<div className="max-w-[1440px] mx-auto flex justify-between items-center h-[72px]" style={{padding: '0 clamp(1rem, 2vw, 1.5rem)'}}>
<a className="flex items-center gap-3 text-[#0E0E0C] z-50 group" href="#">

<svg fill="none" height="32" viewbox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M2 4L16 28L30 4H22L16 16L10 4H2Z" fill="#0E0E0C"></path>
<path className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" d="M10 4L16 16L22 4H30L16 28L2 4H10Z" stroke="#D4FF00" strokeWidth="1"></path>
</svg>
<span className="font-['Space_Grotesk'] font-semibold tracking-tighter leading-none mt-1" style={{fontSize: 'clamp(1.25rem, 1.5vw, 1.5rem)'}}>VEKTOR</span>
</a>
<div className="hidden md:flex gap-8 font-['JetBrains_Mono'] font-medium uppercase tracking-widest text-[#6B6860] items-center" style={{fontSize: 'clamp(0.625rem, 0.8vw, 0.75rem)'}}>
<a className="hover:text-[#0E0E0C] transition-colors relative group" href="#platform">
<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4FF00] transition-all duration-300 group-hover:w-full"></span> Platform
                </a>
<a className="hover:text-[#0E0E0C] transition-colors relative group" href="#roi">
<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4FF00] transition-all duration-300 group-hover:w-full"></span> Impact
                </a>
<a className="hover:text-[#0E0E0C] transition-colors relative group" href="#applications">
<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4FF00] transition-all duration-300 group-hover:w-full"></span> Sectors
                </a>
<a className="hover:text-[#0E0E0C] transition-colors relative group" href="#evidence">
<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4FF00] transition-all duration-300 group-hover:w-full"></span> Proof
                </a>
</div>
<div className="hidden md:block">

<button className="relative inline-flex items-center justify-center bg-[#0E0E0C] text-[#F2F0EB] font-['Space_Grotesk'] font-semibold uppercase tracking-wide overflow-hidden group transition-all hover:text-[#D4FF00]" style={{height: '48px', padding: '0 1.5rem', fontSize: 'clamp(0.75rem, 1vw, 0.875rem)', clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'}}>
<div className="absolute inset-0 bg-[#D4FF00]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
<div className="absolute top-0 left-0 w-full h-[2px] bg-[#D4FF00] opacity-0 group-hover:opacity-100" style={{animation: 'scanline 2s linear infinite'}}></div>
<span className="relative z-10 flex items-center gap-2">Deploy Radar <iconify-icon icon="solar:radar-linear" strokeWidth="1.5"></iconify-icon></span>
</button>
</div>
<button className="md:hidden text-[#0E0E0C] text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-[100svh] flex items-center bg-[#0E0E0C] overflow-hidden" style={{paddingTop: '104px', paddingBottom: 'clamp(5rem, 10vw, 10rem)'}}>

<canvas className="absolute inset-0 w-full h-full z-0 opacity-80 pointer-events-auto" id="hero-canvas"></canvas>
<div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-[#0E0E0C] pointer-events-none"></div>
<div className="max-w-[1440px] mx-auto w-full relative z-10" style={{padding: '0 clamp(1rem, 2vw, 1.5rem)'}}>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-6 flex flex-col items-start text-[#F2F0EB]">
<div className="inline-flex items-center gap-2 border border-[#D4FF00]/30 bg-[#D4FF00]/10 text-[#D4FF00] px-3 py-1 font-['JetBrains_Mono'] uppercase tracking-widest mb-6" style={{fontSize: 'clamp(0.625rem, 0.8vw, 0.75rem)', clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)'}}>
<iconify-icon icon="solar:target-linear"></iconify-icon> Unfair Advantage Online
                    </div>
<h1 className="font-['Space_Grotesk'] font-semibold tracking-tight leading-none mb-6" style={{fontSize: 'clamp(3rem, 6.5vw, 6rem)'}}>
                        Dominate Your Domain.<br/><span className="text-[#D4FF00]">Zero Blind Spots.</span>
</h1>
<p className="font-['Inter'] text-[#C8C4BB] max-w-xl mb-10" style={{fontSize: 'clamp(1rem, 1.2vw, 1.125rem)', lineHeight: '1.6'}}>
                        While your competitors analyze yesterday's static maps, VEKTOR turns raw sensor feeds into live predictive engines. See the shift, measure the risk, and act before the market even knows what happened.
                    </p>
<div className="flex flex-wrap gap-4 mb-12">

<button className="relative inline-flex items-center justify-center bg-[#D4FF00] text-[#0E0E0C] font-['Space_Grotesk'] font-semibold uppercase tracking-wide overflow-hidden group transition-all shadow-[0_0_30px_rgba(212,255,0,0.2)] hover:shadow-[0_0_50px_rgba(212,255,0,0.4)]" style={{height: '64px', padding: '0 2rem', fontSize: 'clamp(0.875rem, 1.1vw, 1rem)', clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)'}}>
<div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
<span className="relative z-10 flex items-center gap-2">Command Your Terrain <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon></span>
</button>
</div>
<div className="flex flex-wrap gap-x-8 gap-y-4 font-['JetBrains_Mono'] uppercase tracking-widest text-[#6B6860]" style={{fontSize: 'clamp(0.625rem, 0.8vw, 0.75rem)'}}>
<span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4FF00]"></span> Millisecond Latency</span>
<span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4FF00]"></span> AI-Fused Telemetry</span>
</div>
</div>

<div className="lg:col-span-6 relative w-full hidden lg:block">

<div className="absolute -inset-4 border border-[#D4FF00]/20 pointer-events-none" style={{clipPath: 'polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)'}}></div>
<div className="relative bg-[#1A1A18] border border-[#33312C] shadow-2xl flex flex-col group overflow-hidden" style={{minHeight: '540px', clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'}}>

<div className="flex items-center justify-between px-4 py-3 border-b border-[#33312C] bg-[#0E0E0C]/80 backdrop-blur">
<div className="flex gap-2">
<div className="w-2 h-2 bg-[#D4FF00]/50" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></div>
<div className="w-2 h-2 bg-[#D4FF00]" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></div>
</div>
<span className="font-['JetBrains_Mono'] uppercase tracking-widest text-[#C8C4BB]" style={{fontSize: '10px'}}>V-OS // ORBITAL FEED</span>
</div>

<div className="relative flex-1 bg-[#0E0E0C] overflow-hidden">

<img className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out" src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(212,255,0,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(212,255,0,0.2)_1px,transparent_1px)]" style={{backgroundSize: '40px 40px'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#D4FF00]/30 rounded-full flex items-center justify-center">
<div className="w-full h-[1px] bg-[#D4FF00]/20 absolute"></div>
<div className="h-full w-[1px] bg-[#D4FF00]/20 absolute"></div>
<div className="w-32 h-32 border border-[#D4FF00]/50 rounded-full flex items-center justify-center relative">
<div className="absolute top-0 w-2 h-2 bg-[#D4FF00] -translate-y-1/2"></div>
<div className="absolute bottom-0 w-2 h-2 bg-[#D4FF00] translate-y-1/2"></div>
<div className="absolute left-0 w-2 h-2 bg-[#D4FF00] -translate-x-1/2"></div>
<div className="absolute right-0 w-2 h-2 bg-[#D4FF00] translate-x-1/2"></div>
</div>
</div>

<div className="absolute top-6 left-6 flex flex-col gap-2 font-['JetBrains_Mono'] text-[#D4FF00]" style={{fontSize: '10px'}}>
<div className="bg-[#0E0E0C]/80 px-2 py-1 border border-[#D4FF00]/30 backdrop-blur">ALT: 420.5 KM</div>
<div className="bg-[#0E0E0C]/80 px-2 py-1 border border-[#D4FF00]/30 backdrop-blur">VEL: 7.66 KM/S</div>
</div>
<div className="absolute bottom-6 right-6 flex flex-col items-end gap-2 font-['JetBrains_Mono']" style={{fontSize: '10px'}}>
<div className="flex items-center gap-2 text-[#F2F0EB] bg-[#0E0E0C]/80 px-2 py-1 border border-[#33312C]"><span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span> THERMAL SPIKE</div>
<div className="text-[#D4FF00] bg-[#0E0E0C]/80 px-2 py-1 border border-[#D4FF00]/30 backdrop-blur">LOCK ACQUIRED</div>
</div>
</div>

<div className="flex border-t border-[#33312C] bg-[#1A1A18] text-[#F2F0EB] font-['JetBrains_Mono'] divide-x divide-[#33312C]">
<div className="flex-1 p-4 flex justify-between items-center">
<span className="text-[#6B6860] uppercase" style={{fontSize: '10px'}}>Bandwidth</span>
<span className="text-sm font-semibold">1.4 TB/s</span>
</div>
<div className="flex-1 p-4 flex justify-between items-center">
<span className="text-[#6B6860] uppercase" style={{fontSize: '10px'}}>Nodes</span>
<span className="text-[#D4FF00] text-sm font-semibold">ACTIVE</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#D4FF00] text-[#0E0E0C] border-y border-[#0E0E0C] overflow-hidden" style={{paddingTop: 'clamp(2.5rem, 5vw, 4rem)', paddingBottom: 'clamp(2.5rem, 5vw, 4rem)'}}>
<div className="max-w-[1440px] mx-auto w-full mb-12" style={{padding: '0 clamp(1rem, 2vw, 1.5rem)'}}>
<p className="font-['JetBrains_Mono'] uppercase tracking-widest font-semibold mb-4" style={{fontSize: 'clamp(0.625rem, 0.8vw, 0.75rem)'}}>Trusted by Entities Demanding Absolute Certainty</p>
</div>
<div className="w-full overflow-hidden flex items-center">
<div className="flex w-max items-center font-['Space_Grotesk'] font-semibold uppercase tracking-tight gap-16 whitespace-nowrap opacity-80" style={{fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', animation: 'ticker 30s linear infinite'}}>
<span>DEPARTMENT OF DEFENSE</span>
<span><iconify-icon icon="solar:star-fall-linear"></iconify-icon></span>
<span>APEX INFRASTRUCTURE</span>
<span><iconify-icon icon="solar:star-fall-linear"></iconify-icon></span>
<span>GLOBAL LOGISTICS CORP</span>
<span><iconify-icon icon="solar:star-fall-linear"></iconify-icon></span>
<span>FEDERAL EMERGENCY AGENCY</span>
<span><iconify-icon icon="solar:star-fall-linear"></iconify-icon></span>
<span>AEROSPACE COMMAND</span>
<span><iconify-icon icon="solar:star-fall-linear"></iconify-icon></span>

<span>DEPARTMENT OF DEFENSE</span>
<span><iconify-icon icon="solar:star-fall-linear"></iconify-icon></span>
<span>APEX INFRASTRUCTURE</span>
<span><iconify-icon icon="solar:star-fall-linear"></iconify-icon></span>
<span>GLOBAL LOGISTICS CORP</span>
<span><iconify-icon icon="solar:star-fall-linear"></iconify-icon></span>
<span>FEDERAL EMERGENCY AGENCY</span>
<span><iconify-icon icon="solar:star-fall-linear"></iconify-icon></span>
<span>AEROSPACE COMMAND</span>
</div>
</div>
</section>

<section className="bg-[#F2F0EB] border-b border-[#C8C4BB] relative" style={{paddingTop: 'clamp(5rem, 10vw, 10rem)', paddingBottom: 'clamp(5rem, 10vw, 10rem)'}}>
<div className="max-w-[1440px] mx-auto w-full" style={{padding: '0 clamp(1rem, 2vw, 1.5rem)'}}>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 border border-[#0E0E0C] text-[#0E0E0C] px-3 py-1 font-['JetBrains_Mono'] uppercase tracking-widest mb-8" style={{fontSize: 'clamp(0.625rem, 0.8vw, 0.75rem)', clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)'}}>
                        ◈ The Liability
                    </div>
<h2 className="font-['Space_Grotesk'] font-semibold tracking-tight text-[#0E0E0C] leading-none mb-8" style={{fontSize: 'clamp(2.25rem, 4.5vw, 4.5rem)'}}>
                        Flying Blind Costs Millions.
                    </h2>
<p className="font-['Inter'] text-[#6B6860] mb-8" style={{fontSize: 'clamp(1rem, 1.2vw, 1.25rem)', lineHeight: '1.6'}}>
                        Every unmonitored corridor, undocumented density shift, and unread terrain anomaly is a catastrophic failure waiting to happen. If you rely on historical data to manage physical assets, your response is already late.
                    </p>
<ul className="flex flex-col gap-6 font-['Inter'] text-[#0E0E0C]">
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 shrink-0 flex items-center justify-center bg-[#0E0E0C] text-[#D4FF00]" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
<iconify-icon icon="solar:danger-triangle-linear" style={{fontSize: '12px'}}></iconify-icon>
</div>
<div>
<strong className="font-semibold block mb-1">Reactive Paralysis</strong>
<span className="text-[#6B6860] text-sm block">Reacting to physical events costs 7x more than predicting them.</span>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 shrink-0 flex items-center justify-center bg-[#0E0E0C] text-[#D4FF00]" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
<iconify-icon icon="solar:map-linear" style={{fontSize: '12px'}}></iconify-icon>
</div>
<div>
<strong className="font-semibold block mb-1">Siloed Geodata</strong>
<span className="text-[#6B6860] text-sm block">Spreadsheets cannot model three-dimensional, high-velocity space.</span>
</div>
</li>
</ul>
</div>

<div className="relative bg-[#0E0E0C] p-8 md:p-12 text-[#F2F0EB]" style={{clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)'}}>
<div className="absolute top-0 right-0 w-32 h-32 bg-[#D4FF00] opacity-10 blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-32 h-32 bg-red-500 opacity-10 blur-3xl"></div>
<span className="font-['JetBrains_Mono'] uppercase tracking-widest text-[#D4FF00] block mb-12" style={{fontSize: '10px'}}>// SYSTEMIC RISK ANALYSIS</span>
<div className="mb-8">
<div className="text-[80px] md:text-[120px] font-['Space_Grotesk'] font-semibold leading-none text-red-500 tracking-tighter">6.2<span className="text-4xl">hrs</span></div>
<p className="font-['JetBrains_Mono'] text-[#C8C4BB] uppercase mt-2 text-xs">Average latency of standard enterprise GIS tools.</p>
</div>
<div className="w-full h-[1px] bg-[#33312C] my-8"></div>
<div>
<div className="text-[40px] md:text-[60px] font-['Space_Grotesk'] font-semibold leading-none text-[#D4FF00] tracking-tighter">1.4<span className="text-2xl">sec</span></div>
<p className="font-['JetBrains_Mono'] text-[#C8C4BB] uppercase mt-2 text-xs">VEKTOR predictive anomaly detection speed.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0E0E0C] text-[#F2F0EB] relative" id="platform" style={{paddingTop: 'clamp(5rem, 10vw, 10rem)', paddingBottom: 'clamp(5rem, 10vw, 10rem)'}}>

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
<div className="max-w-[1440px] mx-auto w-full relative z-10" style={{padding: '0 clamp(1rem, 2vw, 1.5rem)'}}>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 border border-[#D4FF00] text-[#D4FF00] px-3 py-1 font-['JetBrains_Mono'] uppercase tracking-widest mb-6" style={{fontSize: 'clamp(0.625rem, 0.8vw, 0.75rem)', clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)'}}>
                        ◈ The Platform
                    </div>
<h2 className="font-['Space_Grotesk'] font-semibold tracking-tight leading-none" style={{fontSize: 'clamp(2.25rem, 4.5vw, 4rem)'}}>
                        The Omniscient Layer.
                    </h2>
</div>
<p className="font-['Inter'] text-[#C8C4BB] max-w-md" style={{fontSize: 'clamp(0.875rem, 1vw, 1rem)'}}>
                    A unified engine fusing real-time satellite imagery, ground-truth IoT, and algorithmic risk scoring into human-readable tactical briefings.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[320px]">

<div className="md:col-span-2 md:row-span-2 relative bg-[#1A1A18] border border-[#33312C] group overflow-hidden flex flex-col justify-between p-8" style={{clipPath: 'polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)'}}>
<div className="relative z-10 max-w-md pointer-events-none">
<iconify-icon className="text-4xl text-[#D4FF00] mb-4" icon="solar:layers-linear"></iconify-icon>
<h3 className="font-['Space_Grotesk'] font-semibold text-2xl mb-2">Sub-Meter Terrain Parsing</h3>
<p className="text-[#C8C4BB] text-sm">LiDAR + optical satellite fusion updated every 15 minutes. See physical changes instantly.</p>
</div>
<div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-[#0E0E0C] border-t border-l border-[#33312C] transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-4 flex items-center justify-center overflow-hidden" style={{clipPath: 'polygon(20px 0, 100% 0, 100% 100%, 0 100%, 0 20px)'}}>
<img className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<svg className="absolute inset-0 w-full h-full opacity-30 text-[#D4FF00]" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
<path d="M0,60 Q25,40 50,60 T100,60" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
<path d="M0,70 Q25,50 50,70 T100,70" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
</svg>
</div>
</div>

<div className="relative bg-[#1A1A18] border border-[#33312C] group overflow-hidden p-8 flex flex-col justify-between" style={{clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)'}}>
<div className="relative z-10">
<iconify-icon className="text-3xl text-[#6B6860] group-hover:text-[#D4FF00] transition-colors mb-4" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h3 className="font-['Space_Grotesk'] font-semibold text-xl mb-2">Population Flux</h3>
<p className="text-[#C8C4BB] text-sm">Live movement modeling across 200+ distinct signal types to predict crowding.</p>
</div>

<div className="h-24 w-full mt-6 flex items-end gap-1 opacity-60">
<div className="w-full bg-[#33312C] h-[20%] group-hover:h-[40%] group-hover:bg-[#D4FF00] transition-all duration-300"></div>
<div className="w-full bg-[#33312C] h-[40%] group-hover:h-[80%] group-hover:bg-red-500 transition-all duration-500"></div>
<div className="w-full bg-[#33312C] h-[30%] group-hover:h-[60%] group-hover:bg-[#D4FF00] transition-all duration-300 delay-75"></div>
<div className="w-full bg-[#33312C] h-[70%] group-hover:h-[100%] group-hover:bg-red-500 transition-all duration-500 delay-75"></div>
<div className="w-full bg-[#33312C] h-[50%] group-hover:h-[30%] group-hover:bg-[#D4FF00] transition-all duration-300 delay-100"></div>
</div>
</div>

<div className="relative bg-[#1A1A18] border border-[#33312C] group overflow-hidden p-8 flex flex-col justify-between" style={{clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)'}}>
<div className="relative z-10">
<iconify-icon className="text-3xl text-[#6B6860] group-hover:text-[#D4FF00] transition-colors mb-4" icon="solar:shield-warning-linear"></iconify-icon>
<h3 className="font-['Space_Grotesk'] font-semibold text-xl mb-2">Infrastructure Risk</h3>
<p className="text-[#C8C4BB] text-sm">Algorithmic failure scoring mapped precisely to your high-value assets.</p>
</div>
<div className="mt-6 font-['JetBrains_Mono'] text-xs text-[#6B6860]">
<div className="flex justify-between border-b border-[#33312C] py-2"><span>NODE_01</span><span className="text-[#D4FF00]">SECURE</span></div>
<div className="flex justify-between border-b border-[#33312C] py-2"><span>NODE_02</span><span className="text-red-500">CRITICAL</span></div>
<div className="flex justify-between py-2"><span>NODE_03</span><span className="text-[#D4FF00]">SECURE</span></div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#D4FF00] text-[#0E0E0C] relative" id="roi" style={{paddingTop: 'clamp(5rem, 10vw, 8rem)', paddingBottom: 'clamp(5rem, 10vw, 8rem)'}}>
<div className="max-w-[1440px] mx-auto w-full" style={{padding: '0 clamp(1rem, 2vw, 1.5rem)'}}>
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="font-['Space_Grotesk'] font-semibold tracking-tight leading-none mb-6" style={{fontSize: 'clamp(2.25rem, 4vw, 3.5rem)'}}>
                    Growth Through Absolute Precision.
                </h2>
<p className="font-['Inter'] text-[#0E0E0C]/80" style={{fontSize: 'clamp(1rem, 1.2vw, 1.125rem)'}}>
                    VEKTOR doesn't just draw maps; we manufacture time. See the direct operational impact across our enterprise deployments.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-[#F2F0EB] p-8 border border-[#0E0E0C] flex flex-col items-start transition-transform hover:-translate-y-2" style={{clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'}}>
<div className="text-5xl font-['Space_Grotesk'] font-semibold tracking-tighter mb-2">3.4x</div>
<div className="w-8 h-[2px] bg-[#0E0E0C] mb-4"></div>
<h4 className="font-['Space_Grotesk'] font-semibold text-xl mb-2">Asset Utilization</h4>
<p className="text-sm text-[#6B6860]">Increase in successful routing efficiency for field operations via dynamic avoidance.</p>
</div>
<div className="bg-[#F2F0EB] p-8 border border-[#0E0E0C] flex flex-col items-start transition-transform hover:-translate-y-2" style={{clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'}}>
<div className="text-5xl font-['Space_Grotesk'] font-semibold tracking-tighter mb-2">-81%</div>
<div className="w-8 h-[2px] bg-[#0E0E0C] mb-4"></div>
<h4 className="font-['Space_Grotesk'] font-semibold text-xl mb-2">Unplanned Downtime</h4>
<p className="text-sm text-[#6B6860]">Reduction in critical infrastructure failure through predictive environmental tracking.</p>
</div>
<div className="bg-[#F2F0EB] p-8 border border-[#0E0E0C] flex flex-col items-start transition-transform hover:-translate-y-2" style={{clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'}}>
<div className="text-5xl font-['Space_Grotesk'] font-semibold tracking-tighter mb-2">$14M</div>
<div className="w-8 h-[2px] bg-[#0E0E0C] mb-4"></div>
<h4 className="font-['Space_Grotesk'] font-semibold text-xl mb-2">Avg. Annual Savings</h4>
<p className="text-sm text-[#6B6860]">Calculated across Top 10 logistics and defense partners purely from optimized routing.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#F2F0EB] border-b border-[#C8C4BB] overflow-hidden" id="applications" style={{paddingTop: 'clamp(5rem, 10vw, 10rem)', paddingBottom: 'clamp(5rem, 10vw, 10rem)'}}>
<div className="max-w-[1440px] mx-auto w-full mb-12" style={{padding: '0 clamp(1rem, 2vw, 1.5rem)'}}>
<div className="inline-flex items-center gap-2 border border-[#0E0E0C] text-[#0E0E0C] px-3 py-1 font-['JetBrains_Mono'] uppercase tracking-widest mb-6" style={{fontSize: 'clamp(0.625rem, 0.8vw, 0.75rem)', clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)'}}>
                ◈ Deployments
            </div>
<h2 className="font-['Space_Grotesk'] font-semibold tracking-tight text-[#0E0E0C] max-w-2xl" style={{fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', lineHeight: '1.1'}}>
                Engineered for Entities Where Wrong is Not an Option.
            </h2>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6" style={{paddingLeft: 'max(1rem, calc((100vw - 1440px) / 2 + 1rem))', paddingRight: '10vw', paddingBottom: '2rem'}}>

<div className="snap-center shrink-0 w-[300px] md:w-[400px] bg-white border border-[#C8C4BB] p-8 min-h-[400px] flex flex-col hover:border-[#0E0E0C] transition-colors group cursor-grab" style={{clipPath: 'polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)'}}>
<div className="flex justify-between items-start mb-8 border-b border-[#C8C4BB] pb-4">
<span className="font-['JetBrains_Mono'] text-xs font-semibold uppercase tracking-widest text-[#0E0E0C]">Defense &amp; Intel</span>
<iconify-icon className="text-2xl text-[#0E0E0C]" icon="solar:shield-bold-duotone"></iconify-icon>
</div>
<ul className="space-y-4 text-sm text-[#6B6860] flex-1">
<li className="flex items-start gap-2"><iconify-icon className="mt-1 text-[#D4FF00] bg-[#0E0E0C] rounded-full p-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Terrain advantage modeling</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-1 text-[#D4FF00] bg-[#0E0E0C] rounded-full p-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Force movement simulation</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-1 text-[#D4FF00] bg-[#0E0E0C] rounded-full p-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Contested zone mapping</li>
</ul>
<div className="mt-8 font-['Space_Grotesk'] font-semibold uppercase tracking-wide text-[#0E0E0C] group-hover:text-[#D4FF00] group-hover:bg-[#0E0E0C] inline-flex items-center justify-between px-4 py-3 transition-all" style={{clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'}}>
                    Explore Sector →
                </div>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[400px] bg-white border border-[#C8C4BB] p-8 min-h-[400px] flex flex-col hover:border-[#0E0E0C] transition-colors group cursor-grab" style={{clipPath: 'polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)'}}>
<div className="flex justify-between items-start mb-8 border-b border-[#C8C4BB] pb-4">
<span className="font-['JetBrains_Mono'] text-xs font-semibold uppercase tracking-widest text-[#0E0E0C]">Critical Infra</span>
<iconify-icon className="text-2xl text-[#0E0E0C]" icon="solar:transmission-circle-bold-duotone"></iconify-icon>
</div>
<ul className="space-y-4 text-sm text-[#6B6860] flex-1">
<li className="flex items-start gap-2"><iconify-icon className="mt-1 text-[#D4FF00] bg-[#0E0E0C] rounded-full p-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Grid resilience mapping</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-1 text-[#D4FF00] bg-[#0E0E0C] rounded-full p-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Cascade failure prediction</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-1 text-[#D4FF00] bg-[#0E0E0C] rounded-full p-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Automated site geofencing</li>
</ul>
<div className="mt-8 font-['Space_Grotesk'] font-semibold uppercase tracking-wide text-[#0E0E0C] group-hover:text-[#D4FF00] group-hover:bg-[#0E0E0C] inline-flex items-center justify-between px-4 py-3 transition-all" style={{clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'}}>
                    Explore Sector →
                </div>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[400px] bg-white border border-[#C8C4BB] p-8 min-h-[400px] flex flex-col hover:border-[#0E0E0C] transition-colors group cursor-grab" style={{clipPath: 'polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)'}}>
<div className="flex justify-between items-start mb-8 border-b border-[#C8C4BB] pb-4">
<span className="font-['JetBrains_Mono'] text-xs font-semibold uppercase tracking-widest text-[#0E0E0C]">Urban Mobility</span>
<iconify-icon className="text-2xl text-[#0E0E0C]" icon="solar:city-bold-duotone"></iconify-icon>
</div>
<ul className="space-y-4 text-sm text-[#6B6860] flex-1">
<li className="flex items-start gap-2"><iconify-icon className="mt-1 text-[#D4FF00] bg-[#0E0E0C] rounded-full p-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Density forecasting</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-1 text-[#D4FF00] bg-[#0E0E0C] rounded-full p-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Mobility corridor analytics</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-1 text-[#D4FF00] bg-[#0E0E0C] rounded-full p-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Zoning risk scoring</li>
</ul>
<div className="mt-8 font-['Space_Grotesk'] font-semibold uppercase tracking-wide text-[#0E0E0C] group-hover:text-[#D4FF00] group-hover:bg-[#0E0E0C] inline-flex items-center justify-between px-4 py-3 transition-all" style={{clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'}}>
                    Explore Sector →
                </div>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[400px] bg-white border border-[#C8C4BB] p-8 min-h-[400px] flex flex-col hover:border-[#0E0E0C] transition-colors group cursor-grab" style={{clipPath: 'polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)'}}>
<div className="flex justify-between items-start mb-8 border-b border-[#C8C4BB] pb-4">
<span className="font-['JetBrains_Mono'] text-xs font-semibold uppercase tracking-widest text-[#0E0E0C]">Disaster Response</span>
<iconify-icon className="text-2xl text-[#0E0E0C]" icon="solar:medical-kit-bold-duotone"></iconify-icon>
</div>
<ul className="space-y-4 text-sm text-[#6B6860] flex-1">
<li className="flex items-start gap-2"><iconify-icon className="mt-1 text-[#D4FF00] bg-[#0E0E0C] rounded-full p-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Live perimeter tracking</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-1 text-[#D4FF00] bg-[#0E0E0C] rounded-full p-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Evacuation corridor modeling</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-1 text-[#D4FF00] bg-[#0E0E0C] rounded-full p-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon> Real-time resource routing</li>
</ul>
<div className="mt-8 font-['Space_Grotesk'] font-semibold uppercase tracking-wide text-[#0E0E0C] group-hover:text-[#D4FF00] group-hover:bg-[#0E0E0C] inline-flex items-center justify-between px-4 py-3 transition-all" style={{clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'}}>
                    Explore Sector →
                </div>
</div>
</div>
</section>

<section className="bg-[#0E0E0C] text-[#F2F0EB]" id="evidence">

<div className="grid grid-cols-1 md:grid-cols-2 group border-b border-[#33312C]">
<div className="relative min-h-[400px] overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 group-hover:opacity-70 transition-all duration-[1500ms] ease-out" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#0E0E0C] mix-blend-color"></div>

<div className="absolute top-8 left-8 border border-[#D4FF00]/50 p-2 backdrop-blur-sm hidden md:block" style={{clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'}}>
<div className="font-['JetBrains_Mono'] text-[10px] text-[#D4FF00]">TARGET: PORT_ROTTERDAM</div>
<div className="font-['JetBrains_Mono'] text-[10px] text-[#F2F0EB]">STATUS: OPTIMIZED</div>
</div>
</div>
<div className="flex flex-col justify-center bg-[#0E0E0C]" style={{padding: 'clamp(2rem, 5vw, 4rem)'}}>
<div className="font-['JetBrains_Mono'] text-xs text-[#6B6860] uppercase tracking-widest mb-4 flex items-center gap-3">
<span className="w-8 h-[1px] bg-[#6B6860]"></span> Port of Rotterdam
                </div>
<h3 className="font-['Space_Grotesk'] font-semibold text-3xl md:text-4xl mb-6 text-[#F2F0EB] tracking-tight">61% Reduction in Unplanned Logistics Events</h3>
<p className="text-[#C8C4BB] text-sm md:text-base leading-relaxed mb-8">Deploying VEKTOR's predictive risk mapping allowed port authorities to shift from reactive maintenance to automated asset geo-fencing, isolating high-stress nodes before failure cascades.</p>
<a className="font-['Space_Grotesk'] font-semibold uppercase tracking-wide text-[#D4FF00] hover:text-[#F2F0EB] transition-colors flex items-center gap-2 w-max text-sm group/link" href="#">
                    Access Intelligence Brief <iconify-icon className="group-hover/link:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 group border-b border-[#33312C]">
<div className="flex flex-col justify-center bg-[#1A1A18] order-2 md:order-1" style={{padding: 'clamp(2rem, 5vw, 4rem)'}}>
<div className="font-['JetBrains_Mono'] text-xs text-[#6B6860] uppercase tracking-widest mb-4 flex items-center gap-3">
<span className="w-8 h-[1px] bg-[#6B6860]"></span> Singapore Land Authority
                </div>
<h3 className="font-['Space_Grotesk'] font-semibold text-3xl md:text-4xl mb-6 text-[#F2F0EB] tracking-tight">Emergency Response Cut to 6.4 Minutes</h3>
<p className="text-[#C8C4BB] text-sm md:text-base leading-relaxed mb-8">Utilizing live population flux modeling, emergency routing was untethered from static maps. Routing algorithms now automatically bypass invisible bottlenecks.</p>
<a className="font-['Space_Grotesk'] font-semibold uppercase tracking-wide text-[#D4FF00] hover:text-[#F2F0EB] transition-colors flex items-center gap-2 w-max text-sm group/link" href="#">
                    Access Intelligence Brief <iconify-icon className="group-hover/link:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="relative min-h-[400px] overflow-hidden order-1 md:order-2">
<img className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 group-hover:opacity-70 transition-all duration-[1500ms] ease-out" src="https://images.unsplash.com/photo-1542361345-89e58247f2d5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#0E0E0C] mix-blend-color"></div>
</div>
</div>
</section>

<section className="bg-[#F2F0EB] relative" style={{paddingTop: 'clamp(5rem, 10vw, 10rem)', paddingBottom: 'clamp(5rem, 10vw, 10rem)'}}>
<div className="max-w-[1440px] mx-auto w-full" style={{padding: '0 clamp(1rem, 2vw, 1.5rem)'}}>
<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 border border-[#0E0E0C] text-[#0E0E0C] px-3 py-1 font-['JetBrains_Mono'] uppercase tracking-widest mb-6" style={{fontSize: 'clamp(0.625rem, 0.8vw, 0.75rem)', clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)'}}>
                    ◈ The Pipeline
                </div>
<h2 className="font-['Space_Grotesk'] font-semibold tracking-tight text-[#0E0E0C] max-w-3xl mx-auto" style={{fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', lineHeight: '1.1'}}>
                    From Raw Signal to Strategic Action in 4 Minutes.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-[2px] bg-[#C8C4BB] z-0"></div>
<div className="relative z-10 bg-white p-6 border border-[#C8C4BB] hover:border-[#0E0E0C] transition-colors group" style={{clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)'}}>
<div className="w-12 h-12 bg-[#0E0E0C] text-[#F2F0EB] font-['JetBrains_Mono'] font-semibold flex items-center justify-center mb-6" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>01</div>
<h4 className="font-['Space_Grotesk'] font-semibold text-xl uppercase tracking-wide mb-3">Ingest</h4>
<p className="text-sm text-[#6B6860]">Connect satellite, LiDAR, IoT, and proprietary feeds via VEKTOR API. Sub-5-min onboarding.</p>
</div>
<div className="relative z-10 bg-white p-6 border border-[#C8C4BB] hover:border-[#0E0E0C] transition-colors group" style={{clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)'}}>
<div className="w-12 h-12 bg-[#0E0E0C] text-[#F2F0EB] font-['JetBrains_Mono'] font-semibold flex items-center justify-center mb-6" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>02</div>
<h4 className="font-['Space_Grotesk'] font-semibold text-xl uppercase tracking-wide mb-3">Parse</h4>
<p className="text-sm text-[#6B6860]">Fusion engine classifies 200+ spatial signals, removes noise, and flags anomalies autonomously.</p>
</div>
<div className="relative z-10 bg-white p-6 border border-[#C8C4BB] hover:border-[#0E0E0C] transition-colors group" style={{clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)'}}>
<div className="w-12 h-12 bg-[#0E0E0C] text-[#F2F0EB] font-['JetBrains_Mono'] font-semibold flex items-center justify-center mb-6" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>03</div>
<h4 className="font-['Space_Grotesk'] font-semibold text-xl uppercase tracking-wide mb-3">Score</h4>
<p className="text-sm text-[#6B6860]">Predictive scores applied across predefined custom zones. Immediate risk quantification.</p>
</div>
<div className="relative z-10 bg-[#0E0E0C] p-6 text-[#F2F0EB] transition-transform hover:-translate-y-2 group" style={{clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)'}}>
<div className="w-12 h-12 bg-[#D4FF00] text-[#0E0E0C] font-['JetBrains_Mono'] font-semibold flex items-center justify-center mb-6" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>04</div>
<h4 className="font-['Space_Grotesk'] font-semibold text-xl uppercase tracking-wide mb-3 text-[#D4FF00]">Execute</h4>
<p className="text-sm text-[#C8C4BB]">Narrative briefings and webhook alerts delivered instantly to operational tools.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#1A1A18] text-[#F2F0EB] border-t border-[#33312C]" style={{paddingTop: 'clamp(5rem, 10vw, 8rem)', paddingBottom: 'clamp(5rem, 10vw, 8rem)'}}>
<div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16" style={{padding: '0 clamp(1rem, 2vw, 1.5rem)'}}>
<div className="lg:col-span-4">
<div className="inline-flex items-center gap-2 border border-[#6B6860] text-[#C8C4BB] px-3 py-1 font-['JetBrains_Mono'] uppercase tracking-widest mb-6" style={{fontSize: 'clamp(0.625rem, 0.8vw, 0.75rem)', clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)'}}>
                    ◈ Military-Grade Baseline
                </div>
<h2 className="font-['Space_Grotesk'] font-semibold tracking-tight leading-none mb-6" style={{fontSize: 'clamp(2rem, 3.5vw, 3rem)'}}>
                    Engineered for Complete Sovereignty.
                </h2>
<div className="flex gap-4 mt-8">
<div className="px-4 py-2 border border-[#33312C] font-['JetBrains_Mono'] text-xs text-[#6B6860]">ISO 27001</div>
<div className="px-4 py-2 border border-[#33312C] font-['JetBrains_Mono'] text-xs text-[#6B6860]">SOC 2 TYPE II</div>
<div className="px-4 py-2 border border-[#33312C] font-['JetBrains_Mono'] text-xs text-[#6B6860]">ITAR</div>
</div>
</div>
<div className="lg:col-span-8 flex flex-col gap-2">
<details className="group border-b border-[#33312C] pb-6 mb-6" open="">
<summary className="flex justify-between items-center cursor-pointer font-['Space_Grotesk'] font-semibold text-xl md:text-2xl hover:text-[#D4FF00] transition-colors outline-none list-none [&amp;::-webkit-details-marker]:hidden">
                        "Is our intelligence sovereign and air-gapped?"
                        <iconify-icon className="text-2xl text-[#6B6860] group-open:rotate-180 group-open:text-[#D4FF00] transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pt-6 text-[#C8C4BB] text-sm md:text-base pr-8 leading-relaxed">
                        Absolute sovereignty is guaranteed. VEKTOR operates entirely within your preferred boundary—whether on-premise air-gapped hardware, or your dedicated sovereign cloud. No raw data or derived models ever ping external servers.
                    </div>
</details>
<details className="group border-b border-[#33312C] pb-6 mb-6">
<summary className="flex justify-between items-center cursor-pointer font-['Space_Grotesk'] font-semibold text-xl md:text-2xl hover:text-[#D4FF00] transition-colors outline-none list-none [&amp;::-webkit-details-marker]:hidden">
                        "How painful is integration with existing legacy GIS?"
                        <iconify-icon className="text-2xl text-[#6B6860] group-open:rotate-180 group-open:text-[#D4FF00] transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pt-6 text-[#C8C4BB] text-sm md:text-base pr-8 leading-relaxed">
                        We don't replace your stack; we supercharge it. VEKTOR provides native zero-code connectors for ESRI ArcGIS, QGIS, Palantir Foundry, and 14 standard enterprise platforms. Full integration averages 72 hours.
                    </div>
</details>
<details className="group border-b border-[#33312C] pb-6 mb-6">
<summary className="flex justify-between items-center cursor-pointer font-['Space_Grotesk'] font-semibold text-xl md:text-2xl hover:text-[#D4FF00] transition-colors outline-none list-none [&amp;::-webkit-details-marker]:hidden">
                        "Who owns the custom algorithmic models?"
                        <iconify-icon className="text-2xl text-[#6B6860] group-open:rotate-180 group-open:text-[#D4FF00] transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pt-6 text-[#C8C4BB] text-sm md:text-base pr-8 leading-relaxed">
                        You retain 100% intellectual property rights over any model trained on your proprietary data. VEKTOR explicitly disclaims all rights to derived intelligence.
                    </div>
</details>
</div>
</div>
</section>

<section className="bg-[#0E0E0C] text-[#F2F0EB] relative flex items-center justify-center overflow-hidden" style={{minHeight: '80svh', paddingTop: 'clamp(5rem, 10vw, 10rem)', paddingBottom: 'clamp(5rem, 10vw, 10rem)'}}>

<div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20">
<div className="w-[800px] h-[800px] border border-[#D4FF00] rounded-full absolute"></div>
<div className="w-[600px] h-[600px] border border-[#D4FF00] rounded-full absolute"></div>
<div className="w-[400px] h-[400px] border border-[#D4FF00] rounded-full absolute"></div>

<div className="absolute w-[400px] h-[400px] origin-bottom-right bottom-1/2 right-1/2 bg-gradient-to-t from-transparent to-[#D4FF00] opacity-30" style={{animation: 'spin 4s linear infinite', clipPath: 'polygon(100% 100%, 0 0, 100% 0)'}}></div>
</div>
<div className="max-w-[800px] mx-auto text-center relative z-10 flex flex-col items-center px-4">
<h2 className="font-['Space_Grotesk'] font-semibold tracking-tight leading-none mb-6" style={{fontSize: 'clamp(3rem, 6vw, 5rem)'}}>
                The Map is Only the Beginning.
            </h2>
<p className="font-['Inter'] text-[#C8C4BB] max-w-2xl mb-12" style={{fontSize: 'clamp(1rem, 1.2vw, 1.25rem)'}}>
                Stop reacting. Start commanding. Request a briefing and we will demonstrate total spatial awareness tailored to your exact operational theater.
            </p>
<form className="w-full max-w-xl flex flex-col md:flex-row gap-4 mb-8" onsubmit="event.preventDefault(); alert('Briefing Requested.');">
<input className="flex-1 bg-[#1A1A18] border border-[#33312C] text-[#F2F0EB] px-6 py-4 font-['JetBrains_Mono'] text-sm focus:outline-none focus:border-[#D4FF00] placeholder-[#6B6860] transition-colors" placeholder="ENTER CLASSIFIED EMAIL" required="" style={{clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'}} type="email"/>
<button className="relative inline-flex items-center justify-center bg-[#D4FF00] text-[#0E0E0C] font-['Space_Grotesk'] font-semibold uppercase tracking-wide overflow-hidden group shrink-0" style={{height: '56px', padding: '0 2rem', clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)'}} type="submit">
<div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
<span className="relative z-10 flex items-center gap-2">Request Briefing <iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon></span>
</button>
</form>
<div className="flex flex-wrap justify-center gap-x-6 gap-y-3 font-['JetBrains_Mono'] text-xs text-[#6B6860] uppercase tracking-widest">
<span><span className="text-[#D4FF00]">◈</span> Secure Demo</span>
<span><span className="text-[#D4FF00]">◈</span> NDA Default</span>
<span><span className="text-[#D4FF00]">◈</span> 2Hr SLA</span>
</div>
</div>
</section>

<footer className="bg-[#0E0E0C] text-[#F2F0EB] border-t border-[#33312C] relative z-50 pt-20 pb-12">
<div className="max-w-[1440px] mx-auto w-full" style={{padding: '0 clamp(1rem, 2vw, 1.5rem)'}}>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="flex flex-col gap-6">
<a className="flex items-center gap-3 text-[#F2F0EB] group" href="#">
<svg fill="none" height="24" viewbox="0 0 32 32" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 4L16 28L30 4H22L16 16L10 4H2Z" fill="#F2F0EB"></path>
<path className="opacity-0 group-hover:opacity-100 transition-opacity" d="M10 4L16 16L22 4H30L16 28L2 4H10Z" stroke="#D4FF00" strokeWidth="1"></path>
</svg>
<span className="font-['Space_Grotesk'] font-semibold text-lg tracking-tighter leading-none mt-1">VEKTOR</span>
</a>
<p className="font-['JetBrains_Mono'] text-[#6B6860] text-xs max-w-[200px]">Omniscient Spatial Intelligence. Dominate your domain.</p>
</div>

<div className="flex flex-col gap-4">
<span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#6B6860] mb-2">Platform</span>
<a className="text-sm text-[#C8C4BB] hover:text-[#D4FF00] transition-colors w-max" href="#">Core Engine</a>
<a className="text-sm text-[#C8C4BB] hover:text-[#D4FF00] transition-colors w-max" href="#">API Docs</a>
<a className="text-sm text-[#C8C4BB] hover:text-[#D4FF00] transition-colors w-max flex items-center gap-2" href="#">Network Status <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" style={{animation: 'pulse-ring 2s infinite'}}></span></a>
</div>

<div className="flex flex-col gap-4">
<span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#6B6860] mb-2">Company</span>
<a className="text-sm text-[#C8C4BB] hover:text-[#D4FF00] transition-colors w-max" href="#">About</a>
<a className="text-sm text-[#C8C4BB] hover:text-[#D4FF00] transition-colors w-max" href="#">Careers</a>
<a className="text-sm text-[#C8C4BB] hover:text-[#D4FF00] transition-colors w-max" href="#">Security</a>
</div>

<div className="flex flex-col gap-4">
<span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#6B6860] mb-2">Intel Feed</span>
<p className="text-xs text-[#C8C4BB] mb-2">Weekly unclassified briefing on global spatial shifts.</p>
<form className="flex gap-2" onsubmit="event.preventDefault();">
<input className="w-full bg-[#1A1A18] border border-[#33312C] text-[#F2F0EB] px-3 py-2 font-['JetBrains_Mono'] text-xs focus:outline-none focus:border-[#D4FF00]" placeholder="EMAIL" style={{clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)'}} type="email"/>
<button className="bg-[#33312C] text-[#F2F0EB] px-4 py-2 font-['JetBrains_Mono'] text-xs hover:bg-[#D4FF00] hover:text-[#0E0E0C] transition-colors" style={{clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)'}} type="submit">→</button>
</form>
</div>
</div>
<div className="border-t border-[#33312C] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[#6B6860] font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest">
<span>© 2025 VEKTOR SYSTEMS. ALL RIGHTS RESERVED.</span>
<div className="flex gap-6">
<a className="hover:text-[#F2F0EB] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#F2F0EB] transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
