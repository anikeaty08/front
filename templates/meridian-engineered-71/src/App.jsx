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



        document.addEventListener('DOMContentLoaded', () => {

            // --- Realtime UTC Clock ---
            const clockEl = document.getElementById('utc-clock');
            if(clockEl) {
                setInterval(() => {
                    const now = new Date();
                    clockEl.innerText = `UTC ${now.toISOString().substr(11, 8)}`;
                }, 1000);
            }

            // --- Scroll Observers (Advanced Reveal) ---
            const observerOptions = { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 };
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        
                        // Fire inner animations
                        const reveals = entry.target.querySelectorAll('.reveal-fade, .reveal-clip, .count-up');
                        reveals.forEach(el => {
                            el.classList.add('in-view');
                            
                            // CountUp Logic
                            if(el.classList.contains('count-up') && !el.dataset.counted) {
                                el.dataset.counted = "true";
                                const targetVal = parseFloat(el.dataset.val);
                                const isInt = targetVal % 1 === 0;
                                let start = null;
                                const duration = 2000;
                                const step = (timestamp) => {
                                    if (!start) start = timestamp;
                                    const progress = Math.min((timestamp - start) / duration, 1);
                                    // easeOutExpo
                                    const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                                    const current = ease * targetVal;
                                    el.textContent = (isInt ? Math.floor(current) : current.toFixed(1));
                                    if (progress < 1) window.requestAnimationFrame(step);
                                    else el.textContent = targetVal;
                                };
                                setTimeout(() => window.requestAnimationFrame(step), 400); // delay
                            }
                        });
                        
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.scroll-section, .reveal-fade, .reveal-clip').forEach(el => observer.observe(el));
            
            // Force Hero reveals on load
            setTimeout(() => {
                document.querySelectorAll('#hero-canvas ~ div .reveal-fade, #hero-canvas ~ div .reveal-clip').forEach(el => el.classList.add('in-view'));
            }, 100);

            // --- Terminal Data & Interactions ---
            const protocols = [
                { id: '01', name: 'Norwegian Cascade', cat: 'VAGAL TONE', spec: { time: '1H 40M', temp: '-2.3°C', hr: '142 BPM' } },
                { id: '02', name: 'Hyperbaric Dive', cat: 'CELL REPAIR', spec: { time: '2H 15M', press: '2.0 ATA', o2: '95%' } },
                { id: '03', name: 'Hypoxic Ascent', cat: 'RESPIRATORY', spec: { time: '1H 10M', alt: '4,500m', spo2: '82%' } },
                { id: '04', name: 'Mitochondrial Light', cat: 'ATP REGEN', spec: { time: '0H 25M', wave: '850nm', lux: '10k' } },
                { id: '05', name: 'Thermal Loop', cat: 'CIRCULATORY', spec: { time: '1H 30M', cycles: '4', delta: '40°C' } },
                { id: '06', name: 'Chronobiology Reset', cat: 'NEURO', spec: { time: '8H 00M', rem: '+22%', hrv: '+14ms' } }
            ];

            const pItems = document.getElementById('proto-items');
            const pContent = document.getElementById('proto-content');
            const glitchOverlay = document.getElementById('glitch-overlay');
            const glitchBar = document.getElementById('glitch-bar');
            const pCounter = document.getElementById('proto-counter');

            const renderTerminalDetail = (p) => {
                const specsHtml = Object.entries(p.spec).map(([k, v]) => `
                    <div class="flex justify-between items-center py-4 border-b border-[var(--rule-2)] group-hover:px-2 transition-all duration-300">
                        <span class="font-mono-custom text-[10px] uppercase text-[var(--ink-3)] tracking-widest">${k}</span>
                        <span class="font-mono-custom font-bold text-sm text-[var(--ink)]">${v}</span>
                    </div>
                `).join('');

                pContent.innerHTML = `
                    <div class="flex justify-between items-start mb-12">
                        <span class="font-mono-custom text-[10px] bg-[var(--ink)] text-[var(--bg)] px-2 py-1 uppercase tracking-widest">MODULE_${p.id}</span>
                        <iconify-icon icon="solar:shield-check-linear" class="text-2xl text-[var(--accent)]"></iconify-icon>
                    </div>
                    <h3 class="heading-tight text-5xl text-[var(--ink)] mb-2 uppercase">${p.name}</h3>
                    <div class="font-mono-custom text-xs text-[var(--accent-ink)] bg-[var(--accent)] w-fit px-2 py-1 uppercase tracking-widest mb-12 font-bold">${p.cat}</div>
                    
                    <div class="mt-auto group">
                        <div class="font-mono-custom text-[10px] uppercase tracking-[0.2em] text-[var(--ink-3)] mb-4 border-b border-[var(--ink)] pb-2">CLINICAL TARGETS</div>
                        ${specsHtml}
                    </div>
                `;
            };

            const triggerGlitch = (callback) => {
                glitchOverlay.style.opacity = '1';
                pContent.style.opacity = '0';
                glitchBar.style.transform = 'scaleX(1)';
                
                let flashes = 0;
                const interval = setInterval(() => {
                    glitchOverlay.style.backgroundColor = flashes % 2 === 0 ? 'var(--ink)' : 'var(--bg)';
                    glitchOverlay.style.color = flashes % 2 === 0 ? 'var(--bg)' : 'var(--ink)';
                    flashes++;
                    if(flashes > 4) {
                        clearInterval(interval);
                        glitchOverlay.style.opacity = '0';
                        glitchBar.style.transform = 'scaleX(0)';
                        glitchOverlay.style.backgroundColor = 'var(--bg)'; // reset
                        callback();
                        setTimeout(() => pContent.style.opacity = '1', 50);
                    }
                }, 80);
            };

            const renderTerminalList = (activeId) => {
                pItems.innerHTML = protocols.map(p => `
                    <div class="proto-btn px-6 py-5 border-b border-[var(--rule)] cursor-pointer transition-colors duration-300 relative group flex flex-col gap-2 ${p.id === activeId ? 'bg-[var(--ink)] text-[var(--bg)]' : 'hover:bg-[var(--bg-card)]'}" data-id="${p.id}">
                        <div class="flex justify-between items-center">
                            <span class="font-mono-custom text-[10px] tracking-widest ${p.id === activeId ? 'text-[var(--accent)]' : 'text-[var(--ink-3)]'}">[ ${p.id} ]</span>
                            <iconify-icon icon="solar:arrow-right-linear" class="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all ${p.id === activeId ? 'text-[var(--accent)] opacity-100 translate-x-0' : ''}"></iconify-icon>
                        </div>
                        <span class="font-bold text-sm tracking-wide uppercase ${p.id === activeId ? 'text-white' : 'text-[var(--ink)]'}">${p.name}</span>
                    </div>
                `).join('');

                document.querySelectorAll('.proto-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const id = btn.dataset.id;
                        if(id === activeId) return; // ignore if already active
                        pCounter.innerText = `${id} / 06`;
                        triggerGlitch(() => {
                            renderTerminalList(id);
                            renderTerminalDetail(protocols.find(x => x.id === id));
                        });
                    });
                });
            };

            // Init Terminal
            if(pItems) {
                renderTerminalList('01');
                renderTerminalDetail(protocols[0]);
            }

            // --- Scramble Text Effect ---
            const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
            document.querySelectorAll('.scramble-text').forEach(el => {
                el.addEventListener('mouseenter', () => {
                    const original = el.dataset.original;
                    let iterations = 0;
                    clearInterval(el.scrambleInt);
                    el.scrambleInt = setInterval(() => {
                        el.innerText = original.split('').map((char, index) => {
                            if(char === ' ') return ' ';
                            if(index < iterations) return original[index];
                            return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
                        }).join('');
                        if(iterations >= original.length) clearInterval(el.scrambleInt);
                        iterations += 1/3;
                    }, 20);
                });
            });

            // --- Simple Fallback Background if WebGL isn't needed ---
            // Reusing a CSS pattern to save weight and maintain the extremely snappy feel of templates.
            // A template buyer prefers editable CSS backgrounds over locked ThreeJS files if possible.
            const heroCanvas = document.getElementById('hero-canvas');
            if(heroCanvas) {
                heroCanvas.style.background = 'radial-gradient(circle at 70% 30%, rgba(212, 255, 0, 0.15) 0%, transparent 50%), repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 40px, rgba(5,5,5,0.03) 40px, rgba(5,5,5,0.03) 41px)';
            }
            
            // --- Sticky Navbar Transform ---
            const nav = document.getElementById('navbar');
            let lastScroll = 0;
            window.addEventListener('scroll', () => {
                const current = window.scrollY;
                if (current > 100 && current > lastScroll) {
                    nav.style.transform = 'translateY(-100%)';
                } else {
                    nav.style.transform = 'translateY(0)';
                }
                lastScroll = current;
            }, {passive: true});

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
      

<svg className="noise-overlay"><filter id="n"><feturbulence basefrequency="0.8" numoctaves="3" stitchtiles="stitch" type="fractalNoise"></feturbulence></filter><rect filter="url(#n)" height="100%" width="100%"></rect></svg>
<div className="fixed inset-0 pointer-events-none z-[9998]" style={{boxShadow: 'inset 0 0 10rem rgba(0,0,0,0.03)'}}></div>

<div className="fixed inset-0 pointer-events-none z-[90] hidden md:block mix-blend-difference text-white/40">
<div className="absolute top-[var(--pad)] left-[var(--pad)] text-micro">SYS.001 / HOMEPAGE</div>
<div className="absolute top-[var(--pad)] right-[var(--pad)] text-micro text-right" id="utc-clock">UTC 00:00:00</div>
<div className="absolute bottom-[var(--pad)] left-[var(--pad)] text-micro">LAT: 47.6205°N<br/>LON: 11.0606°E</div>
<div className="absolute bottom-[var(--pad)] right-[var(--pad)] text-micro text-right">PROTOCOL: V4.2<br/>STATUS: ACTIVE</div>

<div className="crosshair top-[var(--pad)] left-[var(--pad)] -translate-x-1/2 -translate-y-1/2 bg-white/20"></div>
<div className="crosshair top-[var(--pad)] right-[var(--pad)] translate-x-1/2 -translate-y-1/2 bg-white/20"></div>
<div className="crosshair bottom-[var(--pad)] left-[var(--pad)] -translate-x-1/2 translate-y-1/2 bg-white/20"></div>
<div className="crosshair bottom-[var(--pad)] right-[var(--pad)] translate-x-1/2 translate-y-1/2 bg-white/20"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-[100] border-b border-[var(--rule)] bg-[var(--bg)]/90 backdrop-blur-xl transition-transform duration-500" id="navbar">
<div className="grid grid-cols-2 md:grid-cols-3 h-16 w-full px-[var(--pad)] items-center">

<div className="flex items-center gap-4">
<svg className="w-6 h-6 text-[var(--ink)] cursor-pointer group" viewbox="0 0 32 32">
<circle className="group-hover:stroke-[var(--accent)] transition-colors" cx="16" cy="16" fill="none" r="13" stroke="currentColor" strokeWidth="1.5"></circle>
<circle cx="16" cy="16" fill="currentColor" r="4"></circle>
<line stroke="currentColor" strokeWidth="1.5" x1="0" x2="32" y1="16" y2="16"></line>
</svg>
<span className="heading-tight text-sm tracking-[0.25em] uppercase font-mono-custom text-[var(--ink)] font-semibold mt-0.5">MERIDIAN</span>
</div>

<div className="hidden md:flex justify-center items-center gap-8 font-mono-custom text-micro text-[var(--ink-3)]">
<div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[var(--accent)] animate-pulse rounded-full"></span> <span>CAPACITY: 9/9</span></div>
<div className="w-px h-3 bg-[var(--rule)]"></div>
<div>NEXT INTAKE: T-18D</div>
<div className="w-px h-3 bg-[var(--rule)]"></div>
<div className="scramble-text hover:text-[var(--ink)] cursor-crosshair transition-colors" data-original="INDEX PROTOCOLS">INDEX PROTOCOLS</div>
</div>

<div className="flex justify-end items-center gap-6">
<a className="hidden md:block font-mono-custom text-micro text-[var(--ink)] hover:text-[var(--accent)] transition-colors" href="#">LOGIN_SYS</a>
<button className="btn-glow h-9 px-6 font-mono-custom text-xs uppercase tracking-widest flex items-center gap-2">
<span>APPLY</span>
<iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative min-h-[100svh] w-full pt-16 flex flex-col bg-grid-tech">

<div className="absolute inset-0 z-0 pointer-events-none mix-blend-darken opacity-40" id="hero-canvas"></div>
<div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 w-full border-b border-[var(--rule)]">

<div className="lg:col-span-8 flex flex-col justify-end p-[var(--pad)] pb-[10vh] border-r border-[var(--rule)]">
<div className="mb-auto pt-8 reveal-fade">
<span className="font-mono-custom text-micro bg-[var(--ink)] text-[var(--bg)] px-2 py-1 tracking-widest">[ 000 ] THE DOCTRINE</span>
</div>
<h1 className="heading-tight text-[clamp(3.5rem,8.5vw,9.5rem)] leading-[0.88] text-[var(--ink)] uppercase flex flex-col gap-2 mt-20">
<span className="overflow-hidden block"><span className="block reveal-clip" style={{transitionDelay: '0.1s'}}>Rebuild</span></span>
<span className="overflow-hidden block"><span className="block reveal-clip" style={{transitionDelay: '0.2s'}}>Biology</span></span>
<span className="overflow-hidden block flex items-center gap-4">
<span className="block reveal-clip font-serif-italic normal-case tracking-normal" style={{transitionDelay: '0.3s'}}>from</span>
<span className="block reveal-clip" style={{transitionDelay: '0.4s'}}>Baseline.</span>
</span>
</h1>
<p className="mt-12 font-light text-[clamp(1rem,1.4vw,1.25rem)] text-[var(--ink-2)] max-w-[45ch] leading-[1.6] reveal-fade" style={{transitionDelay: '0.5s'}}>
                    Seven days off-grid. A closed-loop Alpine facility where clinicians systematically apply controlled stressors to rebuild metabolic, cognitive, and autonomic resilience. <strong className="text-[var(--ink)] font-normal">We are not a retreat. We are a correction.</strong>
</p>
<div className="flex items-center gap-4 mt-10 reveal-fade" style={{transitionDelay: '0.6s'}}>
<button className="btn-brutal h-14 px-8 font-mono-custom text-xs uppercase tracking-widest group">
<span className="relative z-10 flex items-center gap-3">
                            Initiate Sequence 
                            <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="12" viewbox="0 0 12 12" width="12"><path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5"></path></svg>
</span>
</button>
<div className="hidden sm:flex flex-col font-mono-custom text-micro text-[var(--ink-3)] leading-relaxed border-l border-[var(--rule)] pl-4">
<span>// SCROLL TO PROCEED</span>
<span>// 14 GUESTS MAX</span>
</div>
</div>
</div>

<div className="hidden lg:flex lg:col-span-4 flex-col bg-[var(--bg-card)]/50 backdrop-blur-md relative">

<div className="absolute inset-0 bg-grid-tech opacity-50 pointer-events-none"></div>
<div className="p-6 border-b border-[var(--rule)] bg-[var(--bg)] flex justify-between items-center z-10">
<span className="font-mono-custom text-micro tracking-widest text-[var(--ink-2)]">LIVE COHORT TELEMETRY</span>
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)] border border-black/10"></span>
</span>
</div>

<div className="p-8 border-b border-[var(--rule)] flex-1 flex flex-col justify-center relative group reveal-fade" style={{transitionDelay: '0.7s'}}>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-[var(--accent-glow)] to-transparent pointer-events-none"></div>
<span className="font-mono-custom text-[10px] text-[var(--ink-3)] uppercase tracking-widest mb-2">MEDIAN VO2 MAX DELTA</span>
<div className="flex items-baseline gap-2">
<span className="heading-tight text-6xl text-[var(--ink)] tabular-nums track-val">+<span className="count-up" data-val="18.4">0.0</span></span>
<span className="font-mono-custom text-sm text-[var(--accent-ink)] font-semibold bg-[var(--accent)] px-1.5 py-0.5">%</span>
</div>
<svg className="w-full h-12 mt-6 overflow-visible" preserveaspectratio="none" viewbox="0 0 100 30">
<path className="svg-sparkline" d="M0,25 Q10,25 20,20 T40,15 T60,10 T80,5 T100,2" fill="none" stroke="var(--ink)" strokeWidth="1.5"></path>
<circle cx="100" cy="2" fill="var(--accent)" r="2"></circle>
</svg>
</div>

<div className="p-8 border-b border-[var(--rule)] flex-1 flex flex-col justify-center relative group reveal-fade" style={{transitionDelay: '0.8s'}}>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-[var(--ink)] to-transparent pointer-events-none"></div>
<span className="font-mono-custom text-[10px] text-[var(--ink-3)] uppercase tracking-widest mb-2 group-hover:text-white transition-colors">RESTING HRV SHIFT</span>
<div className="flex items-baseline gap-2">
<span className="heading-tight text-6xl text-[var(--ink)] group-hover:text-white transition-colors tabular-nums track-val">+<span className="count-up" data-val="42">0</span></span>
<span className="font-mono-custom text-sm text-[var(--ink-3)] group-hover:text-[var(--accent)] transition-colors">ms</span>
</div>
<div className="w-full bg-[var(--rule)] h-[1px] mt-8 relative">
<div className="absolute left-0 top-0 h-[1px] bg-[var(--ink)] group-hover:bg-[var(--accent)] transition-colors" style={{width: '78%'}}></div>
</div>
</div>

<div className="p-8 flex-1 flex flex-col justify-center bg-[var(--ink)] text-[var(--bg)] relative overflow-hidden group reveal-fade" style={{transitionDelay: '0.9s'}}>
<span className="font-mono-custom text-[10px] text-[var(--ink-4)] uppercase tracking-widest mb-2">DEEP SLEEP GAIN</span>
<div className="flex items-baseline gap-2">
<span className="heading-tight text-6xl tabular-nums track-val">+<span className="count-up" data-val="71">0</span></span>
<span className="font-mono-custom text-sm text-[var(--accent)]">min / night</span>
</div>

<div className="absolute right-0 bottom-0 w-32 h-32 opacity-10 group-hover:scale-110 transition-transform duration-700">
<svg className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 100 100">
<circle cx="50" cy="50" r="40" stroke-dasharray="4 4"></circle>
<circle cx="50" cy="50" r="20"></circle>
<line x1="50" x2="50" y1="10" y2="90"></line>
<line x1="10" x2="90" y1="50" y2="50"></line>
</svg>
</div>
</div>
</div>
</div>

<div className="w-full border-b border-[var(--rule)] bg-[var(--ink)] text-[var(--bg)] py-3 overflow-hidden ticker-container cursor-ew-resize">
<div className="ticker-track font-mono-custom text-xs uppercase tracking-[0.2em] flex items-center">

<span className="px-8 whitespace-nowrap">DEVELOPED WITH ETH ZÜRICH</span><span className="text-[var(--accent)]">///</span>
<span className="px-8 whitespace-nowrap">PASTEUR CIRCADIAN DIVISION</span><span className="text-[var(--accent)]">///</span>
<span className="px-8 whitespace-nowrap">NORDIC SLEEP COALITION</span><span className="text-[var(--accent)]">///</span>
<span className="px-8 whitespace-nowrap">ANDERMATT PHYSIOLOGY LAB</span><span className="text-[var(--accent)]">///</span>
<span className="px-8 whitespace-nowrap">KOLHAPUR PRANAYAMA</span><span className="text-[var(--accent)]">///</span>

<span className="px-8 whitespace-nowrap">DEVELOPED WITH ETH ZÜRICH</span><span className="text-[var(--accent)]">///</span>
<span className="px-8 whitespace-nowrap">PASTEUR CIRCADIAN DIVISION</span><span className="text-[var(--accent)]">///</span>
<span className="px-8 whitespace-nowrap">NORDIC SLEEP COALITION</span><span className="text-[var(--accent)]">///</span>
<span className="px-8 whitespace-nowrap">ANDERMATT PHYSIOLOGY LAB</span><span className="text-[var(--accent)]">///</span>
<span className="px-8 whitespace-nowrap">KOLHAPUR PRANAYAMA</span><span className="text-[var(--accent)]">///</span>
</div>
</div>
</section>

<section className="py-32 px-[var(--pad)] bg-[var(--bg-alt)] scroll-section">
<div className="max-w-[100rem] mx-auto bento-grid shadow-2xl reveal-fade">

<div className="col-span-12 lg:col-span-4 bento-item p-10 flex flex-col justify-between aspect-square lg:aspect-auto">
<div className="flex justify-between items-start">
<span className="font-mono-custom text-micro tracking-[0.2em] text-[var(--ink-3)] bg-[var(--rule-2)] px-2 py-1">[ 001 ] / DOCTRINE</span>
<div className="w-10 h-10 border border-[var(--ink)] rounded-full flex items-center justify-center font-serif-italic text-xl">M</div>
</div>
<h2 className="heading-tight text-[clamp(2.5rem,4vw,4rem)] leading-[0.95] text-[var(--ink)] uppercase mt-12 lg:mt-auto">
                    Wellness is a <span className="font-serif-italic normal-case text-[1.1em] text-[var(--accent-ink)] bg-[var(--accent)] px-2 block w-fit mt-2">hobby.</span><br/>This is biology.
                </h2>
</div>

<div className="col-span-12 lg:col-span-8 bento-item relative overflow-hidden group min-h-[40vh] lg:min-h-0">
<div className="absolute inset-0 bg-[var(--ink)] group-hover:scale-105 transition-transform duration-1000 ease-out">

<div className="w-full h-full opacity-30" style={{backgroundImage: 'repeating-radial-gradient(circle at 0 0, transparent 0, var(--bg) 1px, transparent 1px, transparent 100px)'}}></div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-8 left-8 right-8 flex justify-between items-end text-[var(--bg)]">
<span className="font-mono-custom text-xs uppercase tracking-widest text-[var(--ink-4)] max-w-[30ch]">Most architecture optimizes for comfort. Comfort is the enemy of adaptation.</span>
<iconify-icon className="text-2xl text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:maximize-square-minimalistic-linear"></iconify-icon>
</div>
</div>

<div className="col-span-12 md:col-span-6 lg:col-span-4 bento-item p-10 group hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors duration-500">
<div className="font-mono-custom text-[10px] text-[var(--accent)] mb-6 flex items-center gap-2">
<div className="w-4 h-[1px] bg-current"></div> 01_THESIS
                </div>
<p className="font-light text-lg leading-[1.7] text-[var(--ink-2)] group-hover:text-[var(--ink-4)] transition-colors">
                    The human organism was not built to arrive — it was built to respond. A biology that is never stressed is a biology that is slowly atrophying, one comfortable Tuesday at a time. MERIDIAN is engineered on controlled stressors.
                </p>
</div>

<div className="col-span-12 md:col-span-6 lg:col-span-4 bento-item p-10 group hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors duration-500">
<div className="font-mono-custom text-[10px] text-[var(--accent)] mb-6 flex items-center gap-2">
<div className="w-4 h-[1px] bg-current"></div> 02_METHOD
                </div>
<p className="font-light text-lg leading-[1.7] text-[var(--ink-2)] group-hover:text-[var(--ink-4)] transition-colors">
                    Applied in precise doses under clinical supervision, in a closed environment with zero ambient noise, we reset cellular machinery in seven days that modern life degrades in forty years. Hard science. Hard removal.
                </p>
</div>

<div className="col-span-12 lg:col-span-4 bento-item p-10 bg-[var(--accent)] flex flex-col justify-between">
<ul className="font-mono-custom text-xs uppercase tracking-widest text-[var(--ink)] space-y-4">
<li className="flex justify-between border-b border-black/10 pb-2"><span>No Devices</span> <span>Post 20:00</span></li>
<li className="flex justify-between border-b border-black/10 pb-2"><span>Zero Alcohol</span> <span>100% Total</span></li>
<li className="flex justify-between border-b border-black/10 pb-2"><span>No UPF</span> <span>Zero Tolerance</span></li>
</ul>
<div className="mt-12">
<div className="font-serif-italic text-3xl text-[var(--ink)] opacity-70 mb-2">Dr. Leona Valter</div>
<span className="font-mono-custom text-[10px] uppercase tracking-widest text-[var(--ink-2)]">FACILITY DIRECTOR</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-[var(--pad)] bg-[var(--bg)] scroll-section">
<div className="max-w-[100rem] mx-auto">
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8 reveal-fade">
<div>
<span className="font-mono-custom text-micro tracking-[0.2em] text-[var(--ink-3)] block mb-6">[ 002 ] / CURRICULUM</span>
<h2 className="heading-tight text-[clamp(2.5rem,5vw,5rem)] leading-[0.9] text-[var(--ink)] uppercase">
                        Twelve Modalities.<br/><span className="text-[var(--ink-4)]">One Architecture.</span>
</h2>
</div>
<p className="font-light text-lg text-[var(--ink-2)] max-w-[32ch] leading-[1.6]">
                    Residencies are personalized by cohort biomarkers on day one. Explore the terminal to view clinical specifications.
                </p>
</div>

<div className="border border-[var(--ink)] bg-[var(--bg-card)] flex flex-col lg:flex-row min-h-[45rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] reveal-fade overflow-hidden group/terminal relative">

<div className="absolute top-0 left-0 right-0 h-8 border-b border-[var(--rule)] bg-[var(--bg-alt)] flex items-center px-4 gap-2 z-20">
<div className="w-2.5 h-2.5 rounded-full border border-[var(--ink-3)]"></div>
<div className="w-2.5 h-2.5 rounded-full border border-[var(--ink-3)]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[var(--ink-3)]"></div>
<span className="font-mono-custom text-[9px] uppercase tracking-widest ml-4 text-[var(--ink-3)]">PROTOCOL_INDEX_OS_V2</span>
</div>

<div className="w-full lg:w-[35%] border-b lg:border-b-0 lg:border-r border-[var(--rule)] bg-[var(--bg-alt)] flex flex-col pt-8 relative z-10" id="proto-list">
<div className="px-6 py-4 border-b border-[var(--rule)] flex justify-between items-center font-mono-custom text-[10px] text-[var(--ink-2)] uppercase tracking-widest bg-white/50 backdrop-blur">
<span>SELECT MODULE</span>
<span id="proto-counter">01 / 06</span>
</div>
<div className="flex-1 overflow-y-auto scrollbar-hide" id="proto-items">

</div>
</div>

<div className="w-full lg:w-[65%] bg-[var(--bg)] pt-8 flex flex-col relative z-10">
<div className="px-10 py-4 border-b border-[var(--rule)] flex justify-between items-center font-mono-custom text-[10px] text-[var(--ink-2)] uppercase tracking-widest bg-[var(--bg)]">
<span>SPECIFICATION SHEET</span>
<span className="flex items-center gap-2"><span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse"></span> ONLINE</span>
</div>
<div className="p-10 flex-1 flex flex-col overflow-y-auto relative" id="proto-detail">

<div className="absolute inset-0 bg-[var(--bg)] z-50 pointer-events-none opacity-0 flex flex-col justify-center items-center font-mono-custom text-[var(--ink)] font-bold text-4xl uppercase overflow-hidden" id="glitch-overlay">
<span className="glitch-text block tracking-widest opacity-20">DECRYPTING...</span>
<div className="w-full h-1 bg-[var(--accent)] mt-4 shadow-[0_0_20px_var(--accent)] scale-x-0 origin-left transition-transform duration-300" id="glitch-bar"></div>
</div>

<div className="w-full h-full flex flex-col transition-opacity duration-300" id="proto-content"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-[var(--pad)] bg-[var(--ink)] text-[var(--bg)] scroll-section">
<div className="max-w-[100rem] mx-auto">
<div className="flex justify-between items-end mb-20 reveal-fade">
<div>
<span className="font-mono-custom text-micro tracking-[0.2em] text-[var(--ink-3)] block mb-6">[ 003 ] / THE COMPOUND</span>
<h2 className="heading-tight text-[clamp(2.5rem,5vw,5rem)] leading-[0.9] text-[var(--bg)] uppercase">
                        Nine Structures.<br/><span className="text-[var(--ink-2)]">Zero Grid.</span>
</h2>
</div>
<button className="hidden md:flex btn-brutal border-white bg-transparent text-white hover:bg-white hover:text-[var(--ink)] h-12 px-8 font-mono-custom text-xs uppercase tracking-widest">
<span className="relative z-10">VIEW ARCHITECTURE</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-[1px] bg-white/20 border border-white/20 p-[1px] reveal-fade">

<div className="xl:col-span-8 xl:row-span-2 bg-[var(--bg-contrast)] module-card p-10 min-h-[30rem] flex flex-col justify-between group">
<div className="brackets"></div>
<div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8cGF0aCBkPSJNMCAwdjhINFYweiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjMiPjwvcGF0aD4KPC9zdmc+')] pointer-events-none mix-blend-overlay"></div>
<div className="relative z-10 flex justify-between font-mono-custom text-[10px] text-[var(--ink-4)] uppercase tracking-widest border-b border-white/10 pb-4">
<span>FAC-01 / RESIDENCE WING</span>
<span className="text-[var(--accent)]">[ 12,400 SQFT ]</span>
</div>
<div className="relative z-10 mt-auto">
<iconify-icon className="text-4xl text-[var(--accent)] mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" icon="solar:home-smile-linear"></iconify-icon>
<h3 className="heading-tight text-4xl text-white mb-4">THE LODGE</h3>
<p className="font-light text-sm text-[var(--ink-4)] max-w-[45ch] leading-[1.6]">Nine private chambers facing east for dawn light entrainment. Zero electronics post-20:00. Blackout shutters activate automatically at astronomical dusk.</p>
</div>
</div>

<div className="xl:col-span-4 bg-[var(--bg-contrast)] module-card p-8 flex flex-col justify-between group min-h-[16rem]">
<div className="brackets"></div>
<div className="relative z-10 flex justify-between font-mono-custom text-[10px] text-[var(--ink-4)] uppercase tracking-widest mb-12">
<span>FAC-02 / HYDRO</span>
<span>[ 1,800 SQFT ]</span>
</div>
<div className="relative z-10 mt-auto">
<h3 className="heading-tight text-2xl text-white mb-2 group-hover:text-[var(--accent)] transition-colors">CONTRAST HALL</h3>
<p className="font-light text-sm text-[var(--ink-4)]">Three plunge pools (−2°C, +14°C, +38°C). Copper mineralization.</p>
</div>
</div>

<div className="xl:col-span-4 bg-[var(--bg-contrast)] module-card p-8 flex flex-col justify-between group min-h-[16rem]">
<div className="brackets"></div>
<div className="relative z-10 flex justify-between font-mono-custom text-[10px] text-[var(--ink-4)] uppercase tracking-widest mb-12">
<span>FAC-03 / HYPOXIC</span>
<span>[ 2,100 SQFT ]</span>
</div>
<div className="relative z-10 mt-auto">
<h3 className="heading-tight text-2xl text-white mb-2 group-hover:text-[var(--accent)] transition-colors">ALTITUDE SIM</h3>
<p className="font-light text-sm text-[var(--ink-4)]">Normobaric hypoxia chamber, altitude range 0–6,500m.</p>
</div>
</div>

<div className="xl:col-span-4 bg-[var(--accent)] text-[var(--ink)] module-card p-8 flex flex-col justify-center items-center text-center group cursor-pointer">
<iconify-icon className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-500" icon="solar:map-point-wave-linear"></iconify-icon>
<span className="font-mono-custom text-[10px] uppercase tracking-widest font-bold">EXPLORE COMPOUND MAP</span>
</div>

<div className="xl:col-span-8 bg-[var(--bg-contrast)] module-card p-8 flex flex-col sm:flex-row sm:items-end justify-between group min-h-[16rem]">
<div className="brackets"></div>
<div className="relative z-10 flex flex-col h-full w-full">
<div className="flex justify-between font-mono-custom text-[10px] text-[var(--ink-4)] uppercase tracking-widest mb-auto">
<span>FAC-07 / CENTRAL</span>
<span>[ 2,800 SQFT ]</span>
</div>
<div className="mt-8 sm:mt-0 max-w-[35ch]">
<h3 className="heading-tight text-3xl text-white mb-2 group-hover:text-[var(--accent)] transition-colors">FERMENTATION LAB</h3>
<p className="font-light text-sm text-[var(--ink-4)]">Chef-led wholefoods service. 68% of inputs grown on-site in closed-loop geothermal greenhouse.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-[var(--pad)] bg-[var(--bg-alt)] border-b border-[var(--rule)] scroll-section overflow-hidden">
<div className="max-w-[100rem] mx-auto relative">

<div className="absolute -top-10 left-0 text-[clamp(10rem,25vw,25rem)] font-serif-italic text-[var(--rule-2)] pointer-events-none leading-none select-none z-0">
                Data.
            </div>
<div className="relative z-10 mb-20 reveal-fade">
<span className="font-mono-custom text-micro tracking-[0.2em] text-[var(--ink-3)] block mb-6">[ 004 ] / VALIDATION</span>
<h2 className="heading-tight text-[clamp(2rem,4vw,3.5rem)] leading-[1] text-[var(--ink)] max-w-[20ch]">
                    Four cohort studies. Independently validated at 90 days post-discharge.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[var(--rule)] border border-[var(--rule)] reveal-fade z-10 relative">

<div className="bg-[var(--bg-card)] p-10 flex flex-col group hover:bg-[var(--ink)] transition-colors duration-500">
<span className="font-mono-custom text-[10px] uppercase tracking-widest text-[var(--ink-3)] mb-12">BIOLOGICAL AGE REVERSAL</span>
<div className="mt-auto">
<span className="heading-tight text-[clamp(4rem,7vw,6.5rem)] text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors leading-none tracking-tighter tabular-nums flex items-baseline">
                            -<span className="count-up" data-val="3.8">0.0</span>
<span className="text-2xl font-mono-custom ml-2 opacity-50 text-[var(--ink)] group-hover:text-[var(--bg)] transition-colors">YRS</span>
</span>
<div className="w-full h-px bg-[var(--rule)] my-6 group-hover:bg-white/20 transition-colors"></div>
<p className="font-light text-sm text-[var(--ink-2)] group-hover:text-[var(--ink-4)] transition-colors">Horvath methylation clock median delta, N=214.</p>
</div>
</div>

<div className="bg-[var(--bg-card)] p-10 flex flex-col group hover:bg-[var(--ink)] transition-colors duration-500">
<span className="font-mono-custom text-[10px] uppercase tracking-widest text-[var(--ink-3)] mb-12">CORTISOL PLUMMET</span>
<div className="mt-auto">
<span className="heading-tight text-[clamp(4rem,7vw,6.5rem)] text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors leading-none tracking-tighter tabular-nums flex items-baseline">
                            -<span className="count-up" data-val="41">0</span>
<span className="text-2xl font-mono-custom ml-2 opacity-50 text-[var(--ink)] group-hover:text-[var(--bg)] transition-colors">%</span>
</span>
<div className="w-full h-px bg-[var(--rule)] my-6 group-hover:bg-white/20 transition-colors"></div>
<p className="font-light text-sm text-[var(--ink-2)] group-hover:text-[var(--ink-4)] transition-colors">Morning salivary measure post-residency day 30.</p>
</div>
</div>

<div className="bg-[var(--bg-card)] p-10 flex flex-col group hover:bg-[var(--ink)] transition-colors duration-500">
<span className="font-mono-custom text-[10px] uppercase tracking-widest text-[var(--ink-3)] mb-12">GUEST RETENTION</span>
<div className="mt-auto">
<span className="heading-tight text-[clamp(4rem,7vw,6.5rem)] text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors leading-none tracking-tighter tabular-nums flex items-baseline">
<span className="count-up" data-val="73">0</span>
<span className="text-2xl font-mono-custom ml-2 opacity-50 text-[var(--ink)] group-hover:text-[var(--bg)] transition-colors">%</span>
</span>
<div className="w-full h-px bg-[var(--rule)] my-6 group-hover:bg-white/20 transition-colors"></div>
<p className="font-light text-sm text-[var(--ink-2)] group-hover:text-[var(--ink-4)] transition-colors">Unprompted rebooking within 18 months of discharge.</p>
</div>
</div>
</div>
<div className="mt-12 flex justify-end reveal-fade">
<button className="font-mono-custom text-[10px] uppercase tracking-widest text-[var(--ink)] border-b border-[var(--ink)] pb-1 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors flex items-center gap-2">
                    REQUEST CLINICAL METHODOLOGY <iconify-icon icon="solar:download-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-32 px-[var(--pad)] bg-[var(--bg)] scroll-section relative">
<div className="max-w-[100rem] mx-auto">
<div className="text-center mb-24 reveal-fade">
<span className="font-mono-custom text-micro tracking-[0.2em] text-[var(--ink-3)] block mb-6">[ 005 ] / ENROLLMENT QUEUE</span>
<h2 className="heading-tight text-[clamp(2.5rem,5vw,4.5rem)] leading-[1] text-[var(--ink)] max-w-[24ch] mx-auto uppercase">
                    Three durations.<br/>One standard of <span className="font-serif-italic normal-case text-[1.05em]">execution.</span>
</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 lg:items-center reveal-fade relative z-10">

<div className="border border-[var(--rule)] bg-[var(--bg-card)] p-10 flex flex-col lg:rounded-l-lg hover:shadow-2xl transition-shadow duration-500 group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity"><iconify-icon className="text-3xl text-[var(--ink)]" icon="solar:shield-warning-linear"></iconify-icon></div>
<span className="font-mono-custom text-[10px] uppercase tracking-widest text-[var(--ink-3)] mb-4 block">RES-07</span>
<h3 className="heading-tight text-4xl text-[var(--ink)] mb-2 group-hover:text-[var(--accent-ink)] transition-colors">THE RESET</h3>
<div className="font-mono-custom text-sm text-[var(--ink)] mb-8 bg-[var(--bg-alt)] w-fit px-2 py-1">7 DAYS</div>
<p className="font-light text-sm text-[var(--ink-2)] mb-10 leading-[1.6]">A physiological interruption. Ideal for acute nervous system regulation and protocol introduction.</p>
<div className="heading-tight text-3xl text-[var(--ink)] mb-8 tracking-tighter">€ 14,500</div>
<button className="btn-brutal h-12 w-full font-mono-custom text-[10px] uppercase tracking-widest mt-auto">APPLY FOR 07</button>
</div>

<div className="border-2 border-[var(--ink)] bg-[var(--ink)] text-[var(--bg)] p-12 flex flex-col lg:scale-105 z-20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative group">
<div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-glow)] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
<div className="flex justify-between items-start mb-4">
<span className="font-mono-custom text-[10px] uppercase tracking-widest text-[var(--accent)]">RES-14 // CLINICAL STANDARD</span>
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
</span>
</div>
<h3 className="heading-tight text-[2.75rem] text-[var(--bg)] mb-2">THE RENOVATION</h3>
<div className="font-mono-custom text-sm text-[var(--ink)] mb-8 bg-[var(--accent)] w-fit px-2 py-1 font-bold">14 DAYS</div>
<p className="font-light text-[0.95rem] text-[var(--ink-4)] mb-10 leading-[1.6]">Sufficient duration to measure pre/post bloodwork and engrain entirely new metabolic pathways. Highly intensive.</p>
<ul className="space-y-4 mb-10 border-t border-white/20 pt-8 font-mono-custom text-[10px] uppercase tracking-widest text-[var(--ink-4)]">
<li className="flex items-center gap-3"><iconify-icon className="text-[var(--accent)] text-lg" icon="solar:check-circle-linear"></iconify-icon> 2x Overnight PSG Sleep Studies</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[var(--accent)] text-lg" icon="solar:check-circle-linear"></iconify-icon> Pre/Post Telomere Panel</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[var(--accent)] text-lg" icon="solar:check-circle-linear"></iconify-icon> Full 12-Protocol Curriculum</li>
</ul>
<div className="heading-tight text-4xl text-[var(--bg)] mb-8 tracking-tighter mt-auto">€ 26,000</div>
<button className="btn-glow h-14 w-full font-mono-custom text-xs uppercase tracking-widest font-bold">SECURE SEAT</button>
</div>

<div className="border border-[var(--rule)] bg-[var(--bg-card)] p-10 flex flex-col lg:rounded-r-lg hover:shadow-2xl transition-shadow duration-500 group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity"><iconify-icon className="text-3xl text-[var(--ink)]" icon="solar:shield-warning-linear"></iconify-icon></div>
<span className="font-mono-custom text-[10px] uppercase tracking-widest text-[var(--ink-3)] mb-4 block">RES-21</span>
<h3 className="heading-tight text-4xl text-[var(--ink)] mb-2 group-hover:text-[var(--accent-ink)] transition-colors">THE REBUILD</h3>
<div className="font-mono-custom text-sm text-[var(--ink)] mb-8 bg-[var(--bg-alt)] w-fit px-2 py-1">21 DAYS</div>
<p className="font-light text-sm text-[var(--ink-2)] mb-10 leading-[1.6]">Clinical-grade intervention. Reserved for severe burnout recovery or extreme longevity protocols.</p>
<div className="heading-tight text-3xl text-[var(--ink)] mb-8 tracking-tighter">€ 38,500</div>
<button className="btn-brutal h-12 w-full font-mono-custom text-[10px] uppercase tracking-widest mt-auto">APPLY FOR 21</button>
</div>
</div>

<div className="mt-16 border border-[var(--ink)] bg-[var(--bg-card)] p-8 flex flex-col md:flex-row justify-between items-center gap-6 reveal-fade shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<div className="flex items-center gap-4">
<iconify-icon className="text-2xl text-[var(--ink)]" icon="solar:info-circle-linear"></iconify-icon>
<div>
<div className="font-mono-custom text-[10px] uppercase tracking-widest text-[var(--ink-2)]">URGENT NOTIFICATION</div>
<div className="font-semibold text-sm mt-1">Next intake closes in 18 days. 14 names on waitlist.</div>
</div>
</div>
<button className="text-xs font-mono-custom uppercase tracking-widest text-[var(--ink)] hover:text-[var(--accent-ink)] hover:bg-[var(--accent)] border border-[var(--ink)] px-6 py-3 transition-colors">JOIN WAITLIST</button>
</div>
</div>
</section>

<footer className="bg-[var(--ink)] pt-32 pb-10 text-[var(--bg)] border-t-[10px] border-[var(--accent)] relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none opacity-5 select-none overflow-hidden">
<span className="heading-tight text-[35vw] leading-[0.7] tracking-tighter whitespace-nowrap">MERIDIAN</span>
</div>
<div className="max-w-[100rem] mx-auto px-[var(--pad)] relative z-10 flex flex-col h-full">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32 border-b border-white/10 pb-20">

<div>
<h4 className="font-mono-custom text-[10px] uppercase tracking-[0.2em] text-[var(--ink-3)] mb-6">HQ COORDINATES</h4>
<ul className="space-y-3 font-light text-sm text-[var(--ink-4)] leading-relaxed">
<li>Andermatt South, CH</li>
<li className="scramble-text" data-original="47.6205° N / 11.0606° E">47.6205° N / 11.0606° E</li>
<li>+1,140m Elevation</li>
<li className="text-[var(--accent)] mt-4 block">Heliswiss Acc. Landing Pad 3</li>
</ul>
</div>

<div>
<h4 className="font-mono-custom text-[10px] uppercase tracking-[0.2em] text-[var(--ink-3)] mb-6">INDEX</h4>
<ul className="space-y-3 font-light text-sm text-[var(--ink-4)]">
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#">Protocols <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#">Facility OS <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#">Manifesto <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#">Clinical Data <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
</ul>
</div>

<div>
<h4 className="font-mono-custom text-[10px] uppercase tracking-[0.2em] text-[var(--ink-3)] mb-6">PRACTITIONERS</h4>
<ul className="space-y-4">
<li>
<div className="text-sm font-semibold text-white">Dr. Leona Valter</div>
<div className="font-mono-custom text-[9px] text-[var(--ink-4)] tracking-widest mt-1">FACILITY DIRECTOR</div>
</li>
<li>
<div className="text-sm font-semibold text-white">Dr. Anders Solberg</div>
<div className="font-mono-custom text-[9px] text-[var(--ink-4)] tracking-widest mt-1">COLD PHYSIOLOGY</div>
</li>
</ul>
</div>

<div className="flex flex-col justify-between">
<div>
<h4 className="font-mono-custom text-[10px] uppercase tracking-[0.2em] text-[var(--ink-3)] mb-6">CONNECTION</h4>
<div className="flex gap-4">
<a className="w-10 h-10 border border-white/20 rounded flex items-center justify-center hover:bg-white hover:text-[var(--ink)] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
<a className="w-10 h-10 border border-white/20 rounded flex items-center justify-center hover:bg-white hover:text-[var(--ink)] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:link-circle-linear"></iconify-icon></a>
</div>
</div>
<div className="mt-8 lg:mt-0 font-mono-custom text-[9px] uppercase tracking-[0.2em] text-[var(--ink-4)] border-l-2 border-[var(--accent)] pl-3">
                        SYSTEM STATUS: GREEN<br/>BUILD: V.4.2.7_PRO
                    </div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-auto">
<span className="heading-tight text-3xl sm:text-5xl tracking-tighter text-white">MERIDIAN AG</span>
<span className="font-mono-custom text-[10px] uppercase tracking-widest text-[var(--ink-3)] text-center md:text-right">
                    © 2021-2026 MERIDIAN BIOLOGICAL INSTITUTE<br/>ENGINEERED IN SWITZERLAND
                </span>
</div>
</div>
</footer>



    </>
  );
}
