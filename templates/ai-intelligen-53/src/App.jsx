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



                                    for(let i=0; i<60; i++) {
                                        let h = Math.random() * 100;
                                        document.write(`<div class="flex-1 bg-gradient-to-t from-[#ff4a1c]/20 to-[#ff4a1c] rounded-t-sm" style="height: ${h}%; opacity: ${0.3 + (h/100)}; transition: height 0.2s ease;"></div>`);
                                    }
                                


        // 1. WebGL-Style 2D Canvas Background (Flickering Grid + Data Beams)
        const canvas = document.getElementById('glCanvas');
        const ctx = canvas.getContext('2d');
        
        let width, height;
        let points = [];
        const spacing = 40; // Grid spacing
        
        function initCanvas() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            points = [];
            
            // Create grid points
            for(let x = 0; x <= width; x += spacing) {
                for(let y = 0; y <= height; y += spacing) {
                    points.push({
                        x: x,
                        y: y,
                        baseX: x,
                        baseY: y,
                        offset: Math.random() * Math.PI * 2,
                        speed: 0.02 + Math.random() * 0.03,
                        pulse: Math.random() * 100
                    });
                }
            }
        }

        let time = 0;
        let mouseX = width / 2;
        let mouseY = height / 2;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function drawBackground() {
            ctx.clearRect(0, 0, width, height);
            time += 0.01;

            // Draw connecting lines and points
            points.forEach(p => {
                // Subtle organic movement
                p.x = p.baseX + Math.sin(time + p.offset) * 2;
                p.y = p.baseY + Math.cos(time + p.offset) * 2;
                p.pulse += p.speed;

                // Mouse interaction
                let dx = mouseX - p.x;
                let dy = mouseY - p.y;
                let dist = Math.sqrt(dx*dx + dy*dy);
                
                let opacity = (Math.sin(p.pulse) * 0.5 + 0.5) * 0.15; // Base flicker
                let size = 1;
                
                // Highlight nodes near mouse
                if (dist < 150) {
                    opacity += (150 - dist) / 150 * 0.5;
                    size += (150 - dist) / 150 * 2;
                    
                    // Draw connections
                    points.forEach(p2 => {
                        let dx2 = p.x - p2.x;
                        let dy2 = p.y - p2.y;
                        let dist2 = Math.sqrt(dx2*dx2 + dy2*dy2);
                        
                        if (dist2 > 0 && dist2 < spacing * 1.5) {
                            ctx.beginPath();
                            ctx.moveTo(p.x, p.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.strokeStyle = `rgba(255, 74, 28, ${(150-dist)/150 * 0.2})`;
                            ctx.lineWidth = 1;
                            ctx.stroke();
                        }
                    });
                }

                ctx.fillStyle = `rgba(244, 244, 245, ${opacity})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw moving data beams (vertical)
            let beamCount = Math.floor(width / 200);
            for(let i=0; i<beamCount; i++) {
                let x = (i * 200 + (time * 50) % 200);
                let grad = ctx.createLinearGradient(0, 0, 0, height);
                grad.addColorStop(0, 'rgba(255, 74, 28, 0)');
                grad.addColorStop(0.5, 'rgba(255, 74, 28, 0.03)');
                grad.addColorStop(1, 'rgba(255, 74, 28, 0)');
                
                ctx.fillStyle = grad;
                ctx.fillRect(x, 0, 2, height);
            }

            requestAnimationFrame(drawBackground);
        }

        window.addEventListener('resize', initCanvas);
        initCanvas();
        drawBackground();

        // 2. Intersection Observer for Reveals
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // 3. Horizontal Drag Scroll Helper
        const sliders = document.querySelectorAll('.overflow-x-auto');
        let isDown = false;
        let startX;
        let scrollLeft;

        sliders.forEach(slider => {
            slider.addEventListener('mousedown', (e) => {
                isDown = true;
                slider.style.cursor = 'grabbing';
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
            });
            slider.addEventListener('mouseleave', () => {
                isDown = false;
                slider.style.cursor = 'grab';
            });
            slider.addEventListener('mouseup', () => {
                isDown = false;
                slider.style.cursor = 'grab';
            });
            slider.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 2;
                slider.scrollLeft = scrollLeft - walk;
            });
        });

    
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
      

<canvas className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-80 mix-blend-screen" id="glCanvas"></canvas>

<nav className="fixed top-0 w-full z-50 bg-[#070709]/70 backdrop-blur-xl border-b border-[#22222f]/50">
<div className="mx-auto w-[clamp(20rem,92vw,80rem)] flex items-center justify-between h-[4.5rem]">

<a className="flex items-center gap-3 group" href="#">
<svg className="text-[#ff4a1c] group-hover:scale-110 transition-transform duration-300" fill="none" height="32" viewbox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2L2 9L16 16L30 9L16 2Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 23L16 30L30 23" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 16L16 23L30 16" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="font-display font-[800] text-xl tracking-tighter text-[#f4f4f5]">NEXUS</span>
</a>
<div className="hidden lg:flex items-center gap-10 text-xs font-mono font-medium text-[#8a8a98]">
<a className="relative hover:text-[#f4f4f5] transition-colors accoutrement-bracket" href="#intel">Intelligence</a>
<a className="relative hover:text-[#f4f4f5] transition-colors accoutrement-bracket" href="#dashboard">Platform</a>
<a className="relative hover:text-[#f4f4f5] transition-colors accoutrement-bracket" href="#manifesto">Manifesto</a>
</div>
<div className="hidden md:flex items-center gap-4">
<span className="font-mono text-[0.625rem] text-[#ff4a1c] animate-pulse uppercase tracking-widest flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-[#ff4a1c] rounded-full"></span> Live Network
                </span>
<button className="btn-cyber text-[#f4f4f5] font-semibold text-xs px-6 py-2.5 uppercase tracking-wide">Join Roster</button>
</div>

<button className="md:hidden text-[#f4f4f5]">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-[clamp(8rem,18vw,14rem)] pb-[clamp(5rem,10vw,8rem)] min-h-screen flex flex-col justify-center overflow-hidden z-10">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff4a1c]/50 to-transparent opacity-50 animate-scanline"></div>
<div className="mx-auto w-[clamp(20rem,92vw,80rem)] relative z-10 flex flex-col items-start max-w-[56rem]">
<div className="reveal active">
<div className="mb-6 flex items-center gap-4 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-[#8a8a98]">
<span className="px-2 py-1 border border-[#22222f] bg-[#111116] rounded-sm text-[#ff4a1c]">SYS.01</span>
<span>Aggressive Growth • Zero Fluff</span>
</div>
<h1 className="font-display font-[800] text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.95] text-[#f4f4f5] mb-8 drop-shadow-2xl">
                    Stop Guessing <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4a1c] to-[#ff8c42]">Dominate AI.</span>
</h1>
<p className="text-[#8a8a98] max-w-[38rem] mb-10 text-[clamp(1rem,1.2vw,1.125rem)] leading-relaxed font-medium">
                    The only intelligence stream engineered for operators, builders, and decision-makers. We dissect frontier models, architectures, and market shifts so you can deploy faster than your competition.
                </p>
<div className="flex flex-col sm:flex-row items-start gap-5">
<button className="btn-cyber h-[3.5rem] px-10 flex items-center justify-center gap-3 text-sm font-semibold text-white uppercase tracking-wider">
<iconify-icon icon="solar:bolt-linear" width="20"></iconify-icon> Get The Briefing
                    </button>
<button className="btn-cyber-ghost h-[3.5rem] px-8 flex items-center justify-center gap-3 text-sm font-semibold text-[#8a8a98] uppercase tracking-wider">
                        Listen to Ep. 248 <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
<div className="mt-12 flex items-center gap-6 border-t border-[#22222f] pt-6 max-w-[28rem]">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#070709] object-cover grayscale" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#070709] object-cover grayscale" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#070709] object-cover grayscale" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="w-10 h-10 rounded-full border-2 border-[#070709] bg-[#1a1a24] flex items-center justify-center text-[0.6rem] font-mono text-[#ff4a1c]">+1.2M</div>
</div>
<div className="font-mono text-[0.65rem] text-[#8a8a98] uppercase leading-tight">
                        Active builders<br/>tuning in weekly
                    </div>
</div>
</div>
</div>
<span className="accoutrement-coord" style={{bottom: '2rem', right: '2rem'}}>LOC: 40.7128° N, 74.0060° W</span>
</section>

<section className="py-10 border-y border-[#22222f]/50 bg-[#0a0a0d] overflow-hidden relative z-10">
<div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#070709] to-transparent z-10"></div>
<div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#070709] to-transparent z-10"></div>
<div className="flex flex-col items-center mb-6">
<span className="font-mono text-[0.6rem] uppercase tracking-widest text-[#8a8a98]">Tactical Intel Trusted By Operators At</span>
</div>
<div className="animate-marquee flex items-center gap-16 md:gap-32 px-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex gap-16 md:gap-32 font-display font-[800] text-2xl text-[#f4f4f5]">
<span>OPENAI</span>
<span>ANTHROPIC</span>
<span>DEEPMIND</span>
<span>COHERE</span>
<span>MISTRAL</span>
<span>META</span>
<span>NVIDIA</span>
</div>
<div className="flex gap-16 md:gap-32 font-display font-[800] text-2xl text-[#f4f4f5]">
<span>OPENAI</span>
<span>ANTHROPIC</span>
<span>DEEPMIND</span>
<span>COHERE</span>
<span>MISTRAL</span>
<span>META</span>
<span>NVIDIA</span>
</div>
</div>
</section>

<section className="py-[clamp(6rem,12vw,10rem)] relative z-10" id="dashboard">
<div className="mx-auto w-[clamp(20rem,92vw,80rem)]">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
<div>
<span className="font-mono text-[#ff4a1c] text-[0.6875rem] tracking-[0.2em] uppercase block mb-3">/ SYSTEM_DASHBOARD</span>
<h2 className="font-display font-[800] text-[clamp(2rem,4vw,3rem)] text-[#f4f4f5] leading-tight">High-Signal Output.</h2>
</div>
<p className="text-[#8a8a98] max-w-[24rem] font-mono text-xs md:text-sm mt-4 md:mt-0">
                    We don't just talk. We analyze transcripts, extract entities, and provide structural breakdowns of every paper and model discussed.
                </p>
</div>

<div className="dashboard-panel rounded-xl border border-[#22222f] p-2 md:p-4 reveal delay-100 relative group overflow-hidden">

<div className="absolute inset-0 border border-[#ff4a1c]/0 group-hover:border-[#ff4a1c]/30 transition-colors duration-500 rounded-xl pointer-events-none"></div>

<div className="flex items-center gap-2 px-4 py-3 border-b border-[#22222f]/50 bg-[#070709]/50 rounded-t-lg">
<div className="w-2.5 h-2.5 rounded-full bg-[#ff4a1c]/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#8a8a98]/30"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#8a8a98]/30"></div>
<div className="ml-auto font-mono text-[0.6rem] text-[#8a8a98] uppercase">Nexus.Player_v2.1</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-px bg-[#22222f]/50">

<div className="bg-[#0a0a0d] p-6 md:p-10 flex flex-col relative">
<span className="accoutrement-coord" style={{top: '1rem', left: '1rem'}}>SEC.01</span>
<div className="flex items-center gap-4 mb-8">
<div className="w-16 h-16 bg-[#111116] border border-[#22222f] rounded flex items-center justify-center text-[#ff4a1c]">
<iconify-icon icon="solar:play-bold" width="28"></iconify-icon>
</div>
<div>
<div className="font-mono text-[0.65rem] text-[#ff4a1c] border border-[#ff4a1c]/30 bg-[#ff4a1c]/10 px-2 py-0.5 rounded-sm inline-block mb-1">LIVE NOW</div>
<h3 className="font-display font-bold text-xl md:text-2xl text-[#f4f4f5]">Architecting the Llama 3 Infrastructure</h3>
</div>
</div>

<div className="h-32 w-full flex items-end gap-1 mb-6 opacity-80">

<div className="w-full h-full flex items-end gap-[2px]">

</div>
</div>
<div className="flex justify-between items-center font-mono text-[0.65rem] text-[#8a8a98]">
<span>12:45:01</span>
<div className="flex-1 mx-4 h-px bg-[#22222f] relative">
<div className="absolute left-0 top-0 h-full bg-[#ff4a1c] w-[35%]"></div>
<div className="absolute left-[35%] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#f4f4f5] rounded-full shadow-[0_0_10px_#ff4a1c]"></div>
</div>
<span>54:20:00</span>
</div>
</div>

<div className="bg-[#0a0a0d] p-6 flex flex-col font-mono relative">
<span className="accoutrement-coord" style={{top: '1rem', right: '1rem'}}>SEC.02</span>
<h4 className="text-xs text-[#f4f4f5] uppercase tracking-wider mb-6 pb-2 border-b border-[#22222f]">Entity Extraction</h4>
<div className="flex flex-col gap-5 flex-1 overflow-y-auto hide-scrollbar">

<div>
<div className="flex justify-between text-[0.65rem] mb-1">
<span className="text-[#8a8a98]">GPU_UTILIZATION</span>
<span className="text-[#ff4a1c]">94.2%</span>
</div>
<div className="w-full h-1 bg-[#1a1a24] rounded-full overflow-hidden">
<div className="h-full bg-[#ff4a1c] data-bar" style={{width: '94.2%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-[0.65rem] mb-1">
<span className="text-[#8a8a98]">PARAMETER_COUNT</span>
<span className="text-[#f4f4f5]">400B</span>
</div>
<div className="w-full h-1 bg-[#1a1a24] rounded-full overflow-hidden">
<div className="h-full bg-[#f4f4f5] data-bar" style={{width: '80%'}}></div>
</div>
</div>

<div className="mt-4">
<div className="text-[0.6rem] text-[#8a8a98] mb-2">TOPICS_DETECTED</div>
<div className="flex flex-wrap gap-2">
<span className="bg-[#111116] border border-[#22222f] text-[#f4f4f5] text-[0.6rem] px-2 py-1">INFRASTRUCTURE</span>
<span className="bg-[#111116] border border-[#22222f] text-[#f4f4f5] text-[0.6rem] px-2 py-1">TRAINING_RUNS</span>
<span className="bg-[#111116] border border-[#22222f] text-[#ff4a1c] border-[#ff4a1c]/30 text-[0.6rem] px-2 py-1">HARDWARE</span>
</div>
</div>

<div className="mt-auto pt-6 border-t border-[#22222f]">
<div className="text-[0.6rem] text-[#ff4a1c] mb-2 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-[#ff4a1c] rounded-full animate-pulse"></span> TRANSCRIPT_SYNC
                                </div>
<p className="text-[0.7rem] text-[#8a8a98] leading-relaxed">
                                    "...the bottleneck isn't the data anymore, it's how efficiently we can route gradients across the cluster without hitting memory walls..."
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(5rem,8vw,8rem)] bg-[#070709] border-y border-[#22222f]/50 relative z-10 overflow-hidden" id="intel">
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,74,28,0.03)_0%,transparent_60%)] pointer-events-none"></div>
<div className="mx-auto w-[clamp(20rem,92vw,80rem)] mb-10 reveal flex justify-between items-end">
<div>
<span className="font-mono text-[#8a8a98] text-[0.6875rem] tracking-[0.2em] uppercase block mb-3">/ DATA_STREAM</span>
<h2 className="font-display font-[800] text-3xl md:text-4xl text-[#f4f4f5]">Intelligence Feed</h2>
</div>
<a className="hidden md:flex font-mono text-xs text-[#ff4a1c] items-center gap-2 hover:gap-3 transition-all" href="#">
                Access Archives <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="w-full reveal delay-100">
<div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 px-[max(1.5rem,calc((100vw-clamp(20rem,92vw,80rem))/2))] pb-8 cursor-grab active:cursor-grabbing hover-reveal-grid">

<a className="snap-start shrink-0 w-[22rem] bg-[#111116] border border-[#22222f] p-6 flex flex-col gap-6 relative group btn-cyber-ghost" href="#">
<div className="absolute top-4 right-4 text-[#22222f] group-hover:text-[#ff4a1c] transition-colors">
<iconify-icon icon="solar:maximize-square-linear" width="20"></iconify-icon>
</div>
<div className="flex justify-between items-center font-mono text-[0.65rem] text-[#8a8a98]">
<span className="text-[#ff4a1c]">EP_247</span>
<span>DUR: 48M</span>
</div>
<div className="h-[6rem]">
<h3 className="font-display font-bold text-lg text-[#f4f4f5] leading-snug group-hover:text-white transition-colors">The Economics of Agentic Automation</h3>
<p className="text-sm text-[#8a8a98] mt-2 line-clamp-2">Why replacing seats with agents breaks traditional SaaS pricing models completely.</p>
</div>
<div className="mt-auto pt-4 border-t border-[#22222f] flex gap-2 font-mono text-[0.6rem]">
<span className="bg-[#1a1a24] px-2 py-1 text-[#f4f4f5]">AGENTS</span>
<span className="bg-[#1a1a24] px-2 py-1 text-[#f4f4f5]">MARKET</span>
</div>
</a>

<a className="snap-start shrink-0 w-[22rem] bg-[#111116] border border-[#22222f] p-6 flex flex-col gap-6 relative group btn-cyber-ghost" href="#">
<div className="absolute top-4 right-4 text-[#22222f] group-hover:text-[#ff4a1c] transition-colors">
<iconify-icon icon="solar:maximize-square-linear" width="20"></iconify-icon>
</div>
<div className="flex justify-between items-center font-mono text-[0.65rem] text-[#8a8a98]">
<span className="text-[#ff4a1c]">EP_246</span>
<span>DUR: 55M</span>
</div>
<div className="h-[6rem]">
<h3 className="font-display font-bold text-lg text-[#f4f4f5] leading-snug group-hover:text-white transition-colors">Open Source Catch-up Myth</h3>
<p className="text-sm text-[#8a8a98] mt-2 line-clamp-2">Analyzing the compute gap between frontier labs and the open source community.</p>
</div>
<div className="mt-auto pt-4 border-t border-[#22222f] flex gap-2 font-mono text-[0.6rem]">
<span className="bg-[#1a1a24] px-2 py-1 text-[#f4f4f5]">MODELS</span>
<span className="bg-[#1a1a24] px-2 py-1 text-[#f4f4f5]">COMPUTE</span>
</div>
</a>

<a className="snap-start shrink-0 w-[22rem] bg-[#111116] border border-[#22222f] p-6 flex flex-col gap-6 relative group btn-cyber-ghost" href="#">
<div className="absolute top-4 right-4 text-[#22222f] group-hover:text-[#ff4a1c] transition-colors">
<iconify-icon icon="solar:maximize-square-linear" width="20"></iconify-icon>
</div>
<div className="flex justify-between items-center font-mono text-[0.65rem] text-[#8a8a98]">
<span className="text-[#ff4a1c]">EP_245</span>
<span>DUR: 62M</span>
</div>
<div className="h-[6rem]">
<h3 className="font-display font-bold text-lg text-[#f4f4f5] leading-snug group-hover:text-white transition-colors">Hardware Constraints in 2025</h3>
<p className="text-sm text-[#8a8a98] mt-2 line-clamp-2">Deep dive into data center power limits and novel cooling infrastructures.</p>
</div>
<div className="mt-auto pt-4 border-t border-[#22222f] flex gap-2 font-mono text-[0.6rem]">
<span className="bg-[#1a1a24] px-2 py-1 text-[#f4f4f5]">HARDWARE</span>
<span className="bg-[#1a1a24] px-2 py-1 text-[#f4f4f5]">INFRA</span>
</div>
</a>

<a className="snap-start shrink-0 w-[22rem] bg-[#111116] border border-[#22222f] p-6 flex flex-col gap-6 relative group btn-cyber-ghost" href="#">
<div className="absolute top-4 right-4 text-[#22222f] group-hover:text-[#ff4a1c] transition-colors">
<iconify-icon icon="solar:maximize-square-linear" width="20"></iconify-icon>
</div>
<div className="flex justify-between items-center font-mono text-[0.65rem] text-[#8a8a98]">
<span className="text-[#ff4a1c]">EP_244</span>
<span>DUR: 41M</span>
</div>
<div className="h-[6rem]">
<h3 className="font-display font-bold text-lg text-[#f4f4f5] leading-snug group-hover:text-white transition-colors">EU AI Act: Founder Guide</h3>
<p className="text-sm text-[#8a8a98] mt-2 line-clamp-2">How to architect your compliance layer without slowing down shipping velocity.</p>
</div>
<div className="mt-auto pt-4 border-t border-[#22222f] flex gap-2 font-mono text-[0.6rem]">
<span className="bg-[#1a1a24] px-2 py-1 text-[#f4f4f5]">POLICY</span>
<span className="bg-[#1a1a24] px-2 py-1 text-[#f4f4f5]">RISK</span>
</div>
</a>
</div>
</div>
</section>

<section className="py-[clamp(6rem,12vw,10rem)] relative z-10" id="manifesto">
<div className="mx-auto w-[clamp(20rem,92vw,80rem)] grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-24">
<div className="reveal">
<span className="font-mono text-[#ff4a1c] text-[0.6875rem] tracking-[0.2em] uppercase block mb-6">/ DOCTRINE</span>
<h2 className="font-display font-[800] text-[clamp(2.5rem,4vw,3.5rem)] text-[#f4f4f5] leading-tight mb-8">Reading papers takes 40 hours. <br/>We extract the signal so you can ship.</h2>
<button className="btn-cyber h-[3rem] px-8 inline-flex items-center justify-center gap-3 text-sm font-semibold text-white uppercase tracking-wider">
                    Read the Manifesto
                </button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 reveal delay-100">
<div className="border-l-2 border-[#ff4a1c] pl-6 py-2">
<div className="font-mono text-[0.65rem] text-[#8a8a98] mb-3">01 // VELOCITY</div>
<h4 className="font-display text-xl text-[#f4f4f5] font-bold mb-2">Speed &gt; Perfection</h4>
<p className="text-sm text-[#8a8a98]">The market rewards execution. We filter out academic noise to focus entirely on actionable implementation data.</p>
</div>
<div className="border-l-2 border-[#22222f] pl-6 py-2 hover:border-[#ff4a1c] transition-colors duration-300">
<div className="font-mono text-[0.65rem] text-[#8a8a98] mb-3">02 // TRUTH</div>
<h4 className="font-display text-xl text-[#f4f4f5] font-bold mb-2">Zero Hype</h4>
<p className="text-sm text-[#8a8a98]">No fear-mongering. No AGI utopianism. Just the raw, brutal reality of compute limits, model degradation, and real-world costs.</p>
</div>
<div className="border-l-2 border-[#22222f] pl-6 py-2 hover:border-[#ff4a1c] transition-colors duration-300">
<div className="font-mono text-[0.65rem] text-[#8a8a98] mb-3">03 // UTILITY</div>
<h4 className="font-display text-xl text-[#f4f4f5] font-bold mb-2">Build-Focused</h4>
<p className="text-sm text-[#8a8a98]">Every episode ends with architectural recommendations. If it doesn't change how you code or scale, we don't air it.</p>
</div>
<div className="border-l-2 border-[#22222f] pl-6 py-2 hover:border-[#ff4a1c] transition-colors duration-300">
<div className="font-mono text-[0.65rem] text-[#8a8a98] mb-3">04 // NETWORK</div>
<h4 className="font-display text-xl text-[#f4f4f5] font-bold mb-2">Elite Roster</h4>
<p className="text-sm text-[#8a8a98]">Guests aren't thought leaders. They are the engineers writing the CUDA kernels and the founders allocating the compute budgets.</p>
</div>
</div>
</div>
</section>

<section className="py-[clamp(5rem,8vw,8rem)] bg-[#0a0a0d] border-y border-[#22222f]/50 relative z-10">
<div className="mx-auto w-[clamp(20rem,92vw,80rem)] flex flex-col md:flex-row items-center gap-[clamp(3rem,6vw,6rem)]">

<div className="w-full md:w-1/2 relative reveal group">
<div className="absolute -inset-4 bg-gradient-to-r from-[#ff4a1c]/20 to-transparent blur-2xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10 border border-[#22222f] p-2 bg-[#111116] rounded-sm cut-corners" style={{clipPath: 'polygon(2rem 0, 100% 0, 100% calc(100% - 2rem), calc(100% - 2rem) 100%, 0 100%, 0 2rem)'}}>
<img alt="Host" className="w-full aspect-square object-cover high-fi-img rounded-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-[#070709]/80 border border-[#22222f] p-4 font-mono">
<div className="flex justify-between items-center text-[0.65rem] text-[#ff4a1c] mb-2">
<span>ID: M.VEIL_01</span>
<span className="animate-pulse">● RECORDING</span>
</div>
<h4 className="text-lg text-[#f4f4f5] font-display font-bold uppercase">Marcus Veil</h4>
<p className="text-[#8a8a98] text-xs mt-1">Ex-DeepMind ML Engineer. Lead Analyst at NEXUS.</p>
</div>
</div>
</div>

<div className="w-full md:w-1/2 reveal delay-100">
<span className="font-mono text-[#8a8a98] text-[0.6875rem] tracking-[0.2em] uppercase block mb-4">/ THE_SOURCE</span>
<h2 className="font-display font-[800] text-[clamp(2rem,3vw,2.5rem)] text-[#f4f4f5] leading-tight mb-6">Engineered by someone who actually built the machine.</h2>
<p className="text-[#8a8a98] mb-8 text-[clamp(0.9375rem,1vw,1rem)] leading-relaxed">
                    I spent 5 years optimizing neural networks before realizing the real bottleneck wasn't algorithms, it was information distribution. NEXUS is the exact briefing I wished I had when allocating $10M compute budgets. No fluff. Just the raw technical reality.
                </p>
<div className="flex flex-wrap gap-4 font-mono text-xs">
<div className="px-4 py-2 border border-[#22222f] bg-[#111116] text-[#f4f4f5]">
<span className="text-[#ff4a1c]">1.2M</span> READERS
                    </div>
<div className="px-4 py-2 border border-[#22222f] bg-[#111116] text-[#f4f4f5]">
<span className="text-[#ff4a1c]">248</span> EPISODES
                    </div>
<div className="px-4 py-2 border border-[#22222f] bg-[#111116] text-[#f4f4f5]">
<span className="text-[#ff4a1c]">TOP 5</span> TECH PODCAST
                    </div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(6rem,12vw,10rem)] relative z-10">
<div className="mx-auto w-[clamp(20rem,92vw,80rem)]">
<div className="text-center mb-16 reveal flex flex-col items-center">
<span className="font-mono text-[#ff4a1c] text-[0.6875rem] tracking-[0.2em] uppercase block mb-3">/ DATA_MATRIX</span>
<h2 className="font-display font-[800] text-[clamp(2.5rem,4vw,3rem)] text-[#f4f4f5]">The entire AI stack, decoded.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[14rem]">

<div className="md:col-span-2 md:row-span-2 bg-[#111116] border border-[#22222f] p-8 flex flex-col justify-end relative group overflow-hidden btn-cyber-ghost" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 2rem 100%, 0 calc(100% - 2rem))'}}>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,74,28,0.1),transparent_50%)]"></div>
<div className="absolute top-6 right-6 w-12 h-12 bg-[#070709] border border-[#22222f] flex items-center justify-center text-[#ff4a1c] group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:cpu-bold-duotone" width="28"></iconify-icon>
</div>
<div className="relative z-10">
<div className="font-mono text-xs text-[#8a8a98] mb-2">SEC.A // 84 REPORTS</div>
<h3 className="font-display font-[800] text-3xl text-[#f4f4f5] mb-2">Frontier Models</h3>
<p className="text-[#8a8a98] max-w-md">Deep dives into transformer architectures, MoE routing, scaling laws, and the exact benchmarks that matter for production.</p>
</div>
</div>

<div className="bg-[#111116] border border-[#22222f] p-6 flex flex-col justify-end relative group overflow-hidden hover:border-[#ff4a1c]/50 transition-colors">
<div className="absolute top-4 right-4 text-[#8a8a98] group-hover:text-[#ff4a1c] transition-colors">
<iconify-icon icon="solar:server-square-linear" width="24"></iconify-icon>
</div>
<div>
<div className="font-mono text-[0.65rem] text-[#8a8a98] mb-1">SEC.B // 52 REPORTS</div>
<h3 className="font-display font-bold text-xl text-[#f4f4f5]">Infrastructure</h3>
<p className="text-xs text-[#8a8a98] mt-1">Compute constraints, cooling, orchestration.</p>
</div>
</div>
<div className="bg-[#111116] border border-[#22222f] p-6 flex flex-col justify-end relative group overflow-hidden hover:border-[#ff4a1c]/50 transition-colors">
<div className="absolute top-4 right-4 text-[#8a8a98] group-hover:text-[#ff4a1c] transition-colors">
<iconify-icon icon="solar:shield-keyhole-linear" width="24"></iconify-icon>
</div>
<div>
<div className="font-mono text-[0.65rem] text-[#8a8a98] mb-1">SEC.C // 31 REPORTS</div>
<h3 className="font-display font-bold text-xl text-[#f4f4f5]">Policy &amp; Risk</h3>
<p className="text-xs text-[#8a8a98] mt-1">Regulatory frameworks and compliance tech.</p>
</div>
</div>
<div className="bg-[#111116] border border-[#22222f] p-6 flex flex-col justify-end relative group overflow-hidden hover:border-[#ff4a1c]/50 transition-colors">
<div className="absolute top-4 right-4 text-[#8a8a98] group-hover:text-[#ff4a1c] transition-colors">
<iconify-icon icon="solar:rocket-linear" width="24"></iconify-icon>
</div>
<div>
<div className="font-mono text-[0.65rem] text-[#8a8a98] mb-1">SEC.D // 48 REPORTS</div>
<h3 className="font-display font-bold text-xl text-[#f4f4f5]">Applied AI</h3>
<p className="text-xs text-[#8a8a98] mt-1">How enterprises are actually deploying.</p>
</div>
</div>
<div className="md:col-span-2 bg-[#111116] border border-[#22222f] p-6 flex flex-col justify-center items-center text-center relative group overflow-hidden hover:border-[#ff4a1c] transition-colors cursor-pointer">
<div className="absolute inset-0 bg-[#ff4a1c]/5 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500"></div>
<h3 className="font-display font-bold text-xl text-[#f4f4f5] relative z-10 flex items-center gap-3">
                        Unlock the Full Archive <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</h3>
</div>
</div>
</div>
</section>

<section className="py-[clamp(8rem,15vw,12rem)] relative z-10 bg-[#070709] border-t border-[#ff4a1c]/30 flex flex-col items-center justify-center text-center px-4 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ff4a1c] opacity-[0.08] blur-[100px] pointer-events-none rounded-full"></div>
<div className="reveal max-w-[40rem] w-full relative z-10">
<div className="w-16 h-16 bg-[#111116] border border-[#ff4a1c]/50 rounded-full flex items-center justify-center text-[#ff4a1c] mx-auto mb-8 animate-node">
<iconify-icon icon="solar:bolt-bold" width="28"></iconify-icon>
</div>
<h2 className="font-display font-[800] text-[clamp(2.5rem,5vw,4rem)] leading-[1] text-[#f4f4f5] mb-6">Growth doesn't wait.</h2>
<p className="text-[#8a8a98] mb-12 text-[clamp(1rem,1.2vw,1.125rem)] font-medium">Get the briefing every Thursday. What dropped, why it matters, how to architect it. Join 42,000 operators who build the future.</p>
<form className="flex flex-col sm:flex-row gap-0 w-full mb-8 relative group">

<div className="flex-1 relative border border-[#22222f] bg-[#0a0a0d] p-1 group-focus-within:border-[#ff4a1c]/60 transition-colors flex items-center" style={{clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 1rem), calc(100% - 1rem) 100%, 0 100%)'}}>
<iconify-icon className="text-[#8a8a98] ml-4" icon="solar:letter-linear" width="20"></iconify-icon>
<input className="w-full bg-transparent px-4 py-4 text-sm font-mono text-[#f4f4f5] placeholder:text-[#22222f] focus:outline-none focus:ring-0" placeholder="ENTER_EMAIL_ADDRESS..." required="" type="email"/>
</div>
<button className="btn-cyber w-full sm:w-auto mt-4 sm:mt-0 sm:-ml-4 h-full py-5 px-10 text-sm font-bold text-white uppercase tracking-widest shrink-0 border-l border-[#070709]" type="submit">
                    Initialize
                </button>
</form>
<div className="font-mono text-[0.65rem] text-[#8a8a98] flex items-center justify-center gap-4 uppercase">
<span><span className="text-[#ff4a1c]">●</span> ZERO SPAM</span>
<span><span className="text-[#ff4a1c]">●</span> ONE CLICK UNSUBSCRIBE</span>
</div>
</div>
</section>

<footer className="bg-[#070709] pt-16 pb-8 border-t border-[#22222f] relative z-10 font-mono text-xs">
<div className="mx-auto w-[clamp(20rem,92vw,80rem)] grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6 text-[#f4f4f5]" href="#">
<svg className="text-[#ff4a1c]" fill="none" height="24" viewbox="0 0 32 32" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2L2 9L16 16L30 9L16 2Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 23L16 30L30 23" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 16L16 23L30 16" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="font-display font-[800] text-lg tracking-tighter">NEXUS</span>
</a>
<p className="text-[#8a8a98] max-w-sm mb-6 leading-relaxed">The only AI intelligence stream engineered for operators, builders, and decision-makers. Execute with absolute clarity.</p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded border border-[#22222f] flex items-center justify-center text-[#8a8a98] hover:text-[#ff4a1c] hover:border-[#ff4a1c] transition-colors" href="#"><iconify-icon icon="solar:twitter-linear"></iconify-icon></a>
<a className="w-8 h-8 rounded border border-[#22222f] flex items-center justify-center text-[#8a8a98] hover:text-[#ff4a1c] hover:border-[#ff4a1c] transition-colors" href="#"><iconify-icon icon="solar:play-circle-linear"></iconify-icon></a>
<a className="w-8 h-8 rounded border border-[#22222f] flex items-center justify-center text-[#8a8a98] hover:text-[#ff4a1c] hover:border-[#ff4a1c] transition-colors" href="#"><iconify-icon icon="solar:podcast-linear"></iconify-icon></a>
</div>
</div>

<div>
<h5 className="text-[#f4f4f5] uppercase tracking-wider mb-4 border-b border-[#22222f] pb-2">Platform</h5>
<ul className="flex flex-col gap-3 text-[#8a8a98]">
<li><a className="hover:text-[#ff4a1c] transition-colors" href="#">Intelligence Feed</a></li>
<li><a className="hover:text-[#ff4a1c] transition-colors" href="#">Data Matrix</a></li>
<li><a className="hover:text-[#ff4a1c] transition-colors" href="#">Manifesto</a></li>
<li><a className="hover:text-[#ff4a1c] transition-colors" href="#">Sponsorships</a></li>
</ul>
</div>
<div>
<h5 className="text-[#f4f4f5] uppercase tracking-wider mb-4 border-b border-[#22222f] pb-2">System</h5>
<ul className="flex flex-col gap-3 text-[#8a8a98]">
<li><span className="text-[#ff4a1c]">STATUS:</span> OPERATIONAL</li>
<li><span className="text-[#ff4a1c]">LATENCY:</span> 12ms</li>
<li><a className="hover:text-[#ff4a1c] transition-colors underline decoration-[#22222f]" href="#">Privacy Protocol</a></li>
<li><a className="hover:text-[#ff4a1c] transition-colors underline decoration-[#22222f]" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="mx-auto w-[clamp(20rem,92vw,80rem)] flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#22222f] text-[#22222f]">
<p>© 2025 NEXUS INTELLIGENCE. ALL RIGHTS RESERVED.</p>
<p>DESIGNED FOR THE BUILDERS.</p>
</div>
</footer>



    </>
  );
}
