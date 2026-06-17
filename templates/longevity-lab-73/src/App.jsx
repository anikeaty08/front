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



tailwind.config = {
theme: {
extend: {
colors: {
lab: {
white: '#FFFFFF',
zinc100: '#F4F4F5',
zinc300: '#D4D4D8',
zinc500: '#71717A',
black: '#09090B',
orange: '#FF4500',
}
},
fontFamily: {
sans: ['Manrope', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
spacing: {
'128': '32rem',
},
animation: {
'marquee': 'marquee 25s linear infinite',
'spin-slow': 'spin 12s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Scroll Progress Line
        window.onscroll = function() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            document.getElementById("scroll-line").style.width = scrolled + "%";
            
            // "Brutal" Count Interaction
            const metrics = document.querySelectorAll('.metric-row');
            const centerScreen = window.innerHeight / 2;

            metrics.forEach(metric => {
                const rect = metric.getBoundingClientRect();
                const distanceFromCenter = Math.abs(rect.top + rect.height/2 - centerScreen);
                
                if (distanceFromCenter < 200) {
                    metric.classList.remove('text-lab-zinc300');
                    metric.classList.add('text-lab-black');
                } else {
                    metric.classList.add('text-lab-zinc300');
                    metric.classList.remove('text-lab-black');
                }
            });
        };

        // Simple Drag Simulation for Hero Cards
        const draggables = document.querySelectorAll('.draggable');
        
        draggables.forEach(elm => {
            let isDown = false;
            let offset = [0,0];

            elm.addEventListener('mousedown', function(e) {
                isDown = true;
                offset = [
                    elm.offsetLeft - e.clientX,
                    elm.offsetTop - e.clientY
                ];
                elm.style.zIndex = 30; // Bring to front
            }, true);

            document.addEventListener('mouseup', function() {
                isDown = false;
                elm.style.zIndex = 20; // Reset
            }, true);

            document.addEventListener('mousemove', function(e) {
                if (isDown) {
                    elm.style.left = (e.clientX + offset[0]) + 'px';
                    elm.style.top  = (e.clientY + offset[1]) + 'px';
                }
            }, true);
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
      

<div className="fixed top-0 left-0 h-[2px] bg-lab-orange z-50 w-0" id="scroll-line"></div>

<nav className="fixed top-0 w-full z-40 bg-lab-white border-b border-lab-zinc300">

<div className="hidden md:flex bg-lab-black text-lab-white h-8 items-center overflow-hidden whitespace-nowrap font-mono text-xs tracking-wider">
<div className="animate-marquee flex gap-12 items-center min-w-full">
<span>/// SYSTEM_STATUS: ONLINE</span>
<span>TEMP: 21°C</span>
<span>AIR_QUALITY: 99.9%</span>
<span>OCCUPANCY: LOW</span>
<span>NEXT_COHORT: 04:22:10</span>
<span>/// SYSTEM_STATUS: ONLINE</span>
<span>TEMP: 21°C</span>
<span>AIR_QUALITY: 99.9%</span>
<span>OCCUPANCY: LOW</span>
<span>NEXT_COHORT: 04:22:10</span>
</div>
</div>

<div className="flex justify-between items-center h-16 px-4 md:px-6 border-b border-lab-zinc300 bg-lab-white">
<div className="flex items-center gap-2">
<a className="font-extrabold text-2xl tracking-tighter text-lab-black" href="#">AETERNA</a>
<span className="text-[10px] font-mono text-lab-zinc500 border border-lab-zinc300 px-1 py-0.5 rounded-[2px] hidden sm:inline-block">v2.0.4</span>
</div>

<div className="hidden md:flex gap-8 font-mono text-xs font-medium text-lab-black">
<a className="hover:text-lab-orange transition-colors" href="#method">[ 01_METHOD ]</a>
<a className="hover:text-lab-orange transition-colors" href="#labs">[ 02_LABS ]</a>
<a className="hover:text-lab-orange transition-colors" href="#cost">[ 03_COST ]</a>
</div>

<button className="bg-lab-orange text-white w-10 h-10 flex items-center justify-center hover:opacity-90 transition-opacity">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen pt-24 md:pt-32 flex flex-col justify-center items-center overflow-hidden border-b border-lab-zinc300 bg-dot-pattern">

<div className="absolute inset-0 pointer-events-none flex justify-between px-4 md:px-12 opacity-30">
<div className="w-px h-full bg-lab-zinc300"></div>
<div className="w-px h-full bg-lab-zinc300 hidden md:block"></div>
<div className="w-px h-full bg-lab-zinc300 hidden md:block"></div>
<div className="w-px h-full bg-lab-zinc300"></div>
</div>

<div className="relative z-10 text-center px-4 max-w-7xl mx-auto mt-10 md:mt-0">
<h1 className="text-[14vw] md:text-[9vw] leading-[0.85] font-extrabold tracking-tighter text-lab-black select-none">
                QUANTIFY.<br/>
                OPTIMIZE.<br/>
                REPEAT.
            </h1>
</div>


<div className="draggable absolute top-[60%] left-[5%] md:top-[30%] md:left-[10%] bg-lab-white border border-lab-zinc300 p-4 w-48 shadow-none group hover:border-lab-orange z-20">
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] font-mono text-lab-zinc500">BIO_METRIC</span>
<iconify-icon className="text-lab-orange" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<div className="text-3xl font-mono font-bold">45<span className="text-xs font-normal text-lab-zinc500 ml-1">ms</span></div>
<div className="text-[10px] font-mono mt-1 text-lab-zinc500">HEART_RATE_VAR</div>
</div>

<div className="draggable absolute top-[75%] right-[5%] md:top-[40%] md:right-[15%] bg-lab-white border border-lab-zinc300 p-2 w-40 h-56 shadow-none hover:border-lab-orange z-20 hidden sm:block">
<div className="w-full h-full border border-dashed border-lab-zinc300 flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-lab-zinc300" icon="solar:hand-shake-linear" width="80"></iconify-icon>
<div className="absolute bottom-2 left-2 text-[10px] font-mono bg-lab-black text-white px-1">SCAN_01</div>
</div>
</div>

<div className="draggable absolute top-[20%] right-[10%] md:top-[65%] md:left-[25%] bg-lab-white border border-lab-zinc300 p-3 w-56 shadow-none hover:border-lab-orange z-20">
<div className="flex items-center gap-3">
<iconify-icon className="text-lab-black animate-spin-slow" icon="solar:dna-linear" width="32"></iconify-icon>
<div>
<div className="text-xs font-bold">GENOME_SEQ</div>
<div className="text-[10px] font-mono text-lab-zinc500">PROCESSING...</div>
</div>
</div>
<div className="mt-3 h-1 w-full bg-lab-zinc100">
<div className="h-full bg-lab-orange w-[72%]"></div>
</div>
</div>
</section>

<section className="border-b border-lab-zinc300 py-8 overflow-hidden bg-lab-white">
<div className="relative flex overflow-x-hidden group">
<div className="animate-marquee flex whitespace-nowrap items-center">

<span className="text-4xl md:text-5xl font-extrabold tracking-tight px-8 md:px-16 text-lab-black">WHOOP</span>
<span className="text-lab-orange text-4xl font-light">+</span>
<span className="text-4xl md:text-5xl font-extrabold tracking-tight px-8 md:px-16 text-lab-black">OURA</span>
<span className="text-lab-orange text-4xl font-light">+</span>
<span className="text-4xl md:text-5xl font-extrabold tracking-tight px-8 md:px-16 text-lab-black">HUBERMAN LAB</span>
<span className="text-lab-orange text-4xl font-light">+</span>
<span className="text-4xl md:text-5xl font-extrabold tracking-tight px-8 md:px-16 text-lab-black">HYPERICE</span>
<span className="text-lab-orange text-4xl font-light">+</span>

<span className="text-4xl md:text-5xl font-extrabold tracking-tight px-8 md:px-16 text-lab-black">WHOOP</span>
<span className="text-lab-orange text-4xl font-light">+</span>
<span className="text-4xl md:text-5xl font-extrabold tracking-tight px-8 md:px-16 text-lab-black">OURA</span>
<span className="text-lab-orange text-4xl font-light">+</span>
<span className="text-4xl md:text-5xl font-extrabold tracking-tight px-8 md:px-16 text-lab-black">HUBERMAN LAB</span>
<span className="text-lab-orange text-4xl font-light">+</span>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-6 max-w-7xl mx-auto" id="method">
<div className="mb-12 border border-lab-black inline-block px-4 py-2">
<h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight">01_The_Calibration</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-0 border border-lab-zinc300 bg-lab-zinc300">

<div className="md:col-span-2 md:row-span-2 bg-lab-white p-8 md:p-12 flex flex-col justify-between hover:bg-lab-zinc100 hover:border-l-4 hover:border-lab-orange transition-all duration-0 gap-[1px]">
<iconify-icon className="text-lab-orange mb-4" icon="solar:target-linear" strokeWidth="1" width="40"></iconify-icon>
<h3 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">We do not guess.<br/>We measure.</h3>
<p className="text-lab-zinc500 mt-4 font-mono text-xs max-w-xs">Using clinical-grade telemetry to establish your biological baseline before intervention.</p>
</div>

<div className="md:col-span-1 md:row-span-2 bg-lab-white p-6 border-l border-lab-zinc300 relative group overflow-hidden">
<div className="absolute top-4 left-4 text-[10px] font-mono text-lab-zinc500">STRUCTURAL_INTEGRITY</div>
<div className="h-full w-full flex items-center justify-center">

<div className="flex flex-col gap-2 items-center opacity-20 group-hover:opacity-100 transition-opacity">
<div className="w-8 h-4 border border-black rounded-sm"></div>
<div className="w-10 h-5 border border-black rounded-sm"></div>
<div className="w-10 h-5 border border-black rounded-sm"></div>
<div className="w-8 h-6 border border-black rounded-sm"></div>
<div className="w-8 h-6 border border-black rounded-sm bg-lab-orange border-none"></div>
<div className="w-8 h-6 border border-black rounded-sm"></div>
</div>
</div>
</div>

<div className="md:col-span-1 bg-lab-white p-6 border-l border-b border-lab-zinc300 flex flex-col justify-end group hover:bg-lab-zinc100">
<div className="text-[10px] font-mono text-lab-zinc500 mb-2">HRV_AMPLITUDE</div>
<div className="flex items-end gap-1 h-16">
<div className="w-1/6 bg-lab-zinc300 h-[20%] group-hover:bg-lab-orange transition-colors"></div>
<div className="w-1/6 bg-lab-zinc300 h-[40%] group-hover:bg-lab-orange transition-colors delay-75"></div>
<div className="w-1/6 bg-lab-zinc300 h-[80%] group-hover:bg-lab-orange transition-colors delay-100"></div>
<div className="w-1/6 bg-lab-zinc300 h-[50%] group-hover:bg-lab-orange transition-colors delay-150"></div>
<div className="w-1/6 bg-lab-zinc300 h-[30%] group-hover:bg-lab-orange transition-colors delay-200"></div>
<div className="w-1/6 bg-lab-zinc300 h-[60%] group-hover:bg-lab-orange transition-colors delay-300"></div>
</div>
</div>

<div className="md:col-span-1 bg-lab-white p-6 border-l border-lab-zinc300 flex items-center justify-between hover:bg-lab-black hover:text-white transition-colors cursor-pointer group">
<span className="font-mono text-xs tracking-widest">[ SYSTEM_READY ]</span>
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
</div>
</div>
</section>

<section className="border-y border-lab-zinc300 bg-lab-zinc100 py-24" id="labs">
<div className="px-4 md:px-6 mb-8 flex justify-between items-end">
<h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-lab-black">MODALITIES_04</h2>
<div className="text-xs font-mono text-lab-zinc500 hidden md:block">SCROLL TO INSPECT &gt;&gt;&gt;</div>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 md:px-6 pb-8 no-scrollbar">

<div className="min-w-[85vw] md:min-w-[45vw] snap-center">
<div className="aspect-video bg-lab-black relative overflow-hidden group border border-lab-zinc300">

<div className="absolute inset-0 bg-neutral-800 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-white text-9xl opacity-20" icon="solar:capsule-linear"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 w-full h-1 bg-lab-orange transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
</div>
<div className="mt-4 flex justify-between items-center border-b border-lab-zinc300 pb-2">
<span className="font-bold tracking-tight text-lg">MODALITY_01 | HYPERBARIC</span>
<button className="text-xs font-mono bg-black text-white px-2 py-1 hover:bg-lab-orange transition-colors">[ BOOK ]</button>
</div>
<div className="flex gap-4 mt-2 text-[10px] font-mono text-lab-zinc500">
<span>O2_SAT: 100%</span>
<span>PRESSURE: 2.0 ATA</span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[45vw] snap-center">
<div className="aspect-video bg-lab-black relative overflow-hidden group border border-lab-zinc300">
<div className="absolute inset-0 bg-neutral-800 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-white text-9xl opacity-20" icon="solar:snowflake-linear"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 w-full h-1 bg-lab-orange transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
</div>
<div className="mt-4 flex justify-between items-center border-b border-lab-zinc300 pb-2">
<span className="font-bold tracking-tight text-lg">MODALITY_02 | CRYOTHERAPY</span>
<button className="text-xs font-mono bg-black text-white px-2 py-1 hover:bg-lab-orange transition-colors">[ BOOK ]</button>
</div>
<div className="flex gap-4 mt-2 text-[10px] font-mono text-lab-zinc500">
<span>TEMP: -110°C</span>
<span>DURATION: 180s</span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[45vw] snap-center">
<div className="aspect-video bg-lab-black relative overflow-hidden group border border-lab-zinc300">
<div className="absolute inset-0 bg-neutral-800 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-white text-9xl opacity-20" icon="solar:sun-2-linear"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 w-full h-1 bg-lab-orange transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
</div>
<div className="mt-4 flex justify-between items-center border-b border-lab-zinc300 pb-2">
<span className="font-bold tracking-tight text-lg">MODALITY_03 | RED_LIGHT</span>
<button className="text-xs font-mono bg-black text-white px-2 py-1 hover:bg-lab-orange transition-colors">[ BOOK ]</button>
</div>
<div className="flex gap-4 mt-2 text-[10px] font-mono text-lab-zinc500">
<span>WAVELENGTH: 660nm</span>
<span>ATP: MAX</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-6 max-w-7xl mx-auto" id="cost">
<div className="flex justify-center mb-16">
<div className="inline-flex bg-lab-zinc100 p-1 border border-lab-zinc300">
<button className="px-6 py-2 text-xs font-mono font-bold bg-white border border-lab-zinc300 shadow-sm text-black">MEMBER</button>
<button className="px-6 py-2 text-xs font-mono font-bold text-lab-zinc500 hover:text-black">VISITOR</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-lab-white border border-lab-zinc300 relative p-6 flex flex-col h-full hover:border-lab-black transition-colors">

<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-lab-white border border-lab-zinc300 rounded-full z-10"></div>
<div className="text-center pt-6 pb-8 border-b border-lab-zinc300 border-dashed">
<h3 className="font-mono text-sm tracking-widest text-lab-zinc500">LEVEL_1</h3>
<div className="text-6xl font-extrabold mt-4 tracking-tighter">$199</div>
<div className="text-xs text-lab-zinc500 mt-2">PER_MONTH</div>
</div>
<ul className="flex-1 py-8 space-y-3 font-mono text-xs">
<li className="flex items-center gap-2"><iconify-icon className="text-lab-orange" icon="solar:check-read-linear"></iconify-icon> Access: 08:00 - 18:00</li>
<li className="flex items-center gap-2"><iconify-icon className="text-lab-orange" icon="solar:check-read-linear"></iconify-icon> 4x Modality Sessions</li>
<li className="flex items-center gap-2"><iconify-icon className="text-lab-orange" icon="solar:check-read-linear"></iconify-icon> Quarterly Blood Panel</li>
</ul>
<button className="w-full bg-lab-zinc100 text-black border border-lab-zinc300 py-3 text-sm font-bold hover:bg-lab-orange hover:text-white hover:border-lab-orange transition-all">[ ISSUE_PASS ]</button>
</div>

<div className="bg-lab-white border border-lab-zinc300 relative p-6 flex flex-col h-full hover:border-lab-black transition-colors">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-lab-white border border-lab-zinc300 rounded-full z-10"></div>
<div className="absolute top-0 right-0 bg-lab-orange text-white text-[10px] font-mono px-2 py-1">MOST_OPTIMIZED</div>
<div className="text-center pt-6 pb-8 border-b border-lab-zinc300 border-dashed">
<h3 className="font-mono text-sm tracking-widest text-lab-zinc500">LEVEL_2</h3>
<div className="text-6xl font-extrabold mt-4 tracking-tighter">$399</div>
<div className="text-xs text-lab-zinc500 mt-2">PER_MONTH</div>
</div>
<ul className="flex-1 py-8 space-y-3 font-mono text-xs">
<li className="flex items-center gap-2"><iconify-icon className="text-lab-orange" icon="solar:check-read-linear"></iconify-icon> Access: 24/7</li>
<li className="flex items-center gap-2"><iconify-icon className="text-lab-orange" icon="solar:check-read-linear"></iconify-icon> Unlimited Modalities</li>
<li className="flex items-center gap-2"><iconify-icon className="text-lab-orange" icon="solar:check-read-linear"></iconify-icon> Monthly Blood Panel</li>
<li className="flex items-center gap-2"><iconify-icon className="text-lab-orange" icon="solar:check-read-linear"></iconify-icon> Genetic Sequencing</li>
</ul>
<button className="w-full bg-lab-black text-white border border-lab-black py-3 text-sm font-bold hover:bg-lab-orange hover:border-lab-orange transition-all">[ ISSUE_PASS ]</button>
</div>

<div className="bg-lab-white border border-lab-zinc300 relative p-6 flex flex-col h-full hover:border-lab-black transition-colors opacity-60 hover:opacity-100">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-lab-white border border-lab-zinc300 rounded-full z-10"></div>
<div className="text-center pt-6 pb-8 border-b border-lab-zinc300 border-dashed">
<h3 className="font-mono text-sm tracking-widest text-lab-zinc500">LEVEL_3</h3>
<div className="text-6xl font-extrabold mt-4 tracking-tighter">$999</div>
<div className="text-xs text-lab-zinc500 mt-2">PER_MONTH</div>
</div>
<ul className="flex-1 py-8 space-y-3 font-mono text-xs">
<li className="flex items-center gap-2"><iconify-icon className="text-lab-orange" icon="solar:check-read-linear"></iconify-icon> Dedicated Physician</li>
<li className="flex items-center gap-2"><iconify-icon className="text-lab-orange" icon="solar:check-read-linear"></iconify-icon> Custom Compounding</li>
<li className="flex items-center gap-2"><iconify-icon className="text-lab-orange" icon="solar:check-read-linear"></iconify-icon> Off-Site Protocols</li>
</ul>
<button className="w-full bg-lab-zinc100 text-black border border-lab-zinc300 py-3 text-sm font-bold hover:bg-lab-orange hover:text-white hover:border-lab-orange transition-all">[ ISSUE_PASS ]</button>
</div>
</div>
</section>

<section className="py-24 border-y border-lab-zinc300 overflow-hidden">
<div className="flex flex-col items-center justify-center space-y-4">
<div className="metric-row text-[12vw] leading-none font-extrabold tracking-tighter text-lab-zinc300 transition-colors duration-500 hover:text-lab-black cursor-default">
<span className="text-2xl font-mono align-top text-lab-orange mr-4">+</span>14.2%
                <p className="text-xs font-mono font-normal tracking-normal text-center text-lab-zinc500 mt-0">AVG_SLEEP_EFFICIENCY</p>
</div>
<div className="metric-row text-[12vw] leading-none font-extrabold tracking-tighter text-lab-zinc300 transition-colors duration-500 hover:text-lab-black cursor-default">
<span className="text-2xl font-mono align-top text-lab-orange mr-4">+</span>22.5%
                <p className="text-xs font-mono font-normal tracking-normal text-center text-lab-zinc500 mt-0">VO2_MAX_INCREASE</p>
</div>
<div className="metric-row text-[12vw] leading-none font-extrabold tracking-tighter text-lab-zinc300 transition-colors duration-500 hover:text-lab-black cursor-default">
<span className="text-2xl font-mono align-top text-lab-orange mr-4">-</span>11.0%
                <p className="text-xs font-mono font-normal tracking-normal text-center text-lab-zinc500 mt-0">BIOLOGICAL_AGE</p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto py-24 px-4">
<h2 className="text-xl font-bold mb-8 uppercase tracking-widest border-b border-black pb-2 inline-block">Protocol_FAQ</h2>
<div className="border-t-2 border-lab-black">

<details className="group border-b-2 border-lab-black">
<summary className="faq-item flex justify-between items-center p-6 cursor-pointer list-none transition-all duration-0">
<h3 className="text-xl md:text-2xl font-semibold tracking-tight">IS THIS MEDICAL ADVICE?</h3>
<iconify-icon className="icon-plus text-2xl transition-transform duration-200" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="p-6 pt-0 font-mono text-sm leading-relaxed max-w-2xl">
                    No. AETERNA is a data facility. We provide raw telemetry and optimization protocols based on current longevity literature. All interventions should be cleared by your primary care physician.
                </div>
</details>

<details className="group border-b-2 border-lab-black">
<summary className="faq-item flex justify-between items-center p-6 cursor-pointer list-none transition-all duration-0">
<h3 className="text-xl md:text-2xl font-semibold tracking-tight">DATA PRIVACY LEVEL?</h3>
<iconify-icon className="icon-plus text-2xl transition-transform duration-200" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="p-6 pt-0 font-mono text-sm leading-relaxed max-w-2xl">
                    HIPAA Compliant + Air-Gapped Local Servers. Your biological data is not stored on the cloud. It is stored on physical drives within the facility vault.
                </div>
</details>

<details className="group border-b-2 border-lab-black">
<summary className="faq-item flex justify-between items-center p-6 cursor-pointer list-none transition-all duration-0">
<h3 className="text-xl md:text-2xl font-semibold tracking-tight">CONTRAINDICATIONS?</h3>
<iconify-icon className="icon-plus text-2xl transition-transform duration-200" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="p-6 pt-0 font-mono text-sm leading-relaxed max-w-2xl">
                    Pregnancy, Pacemakers, and active Oncology treatments are strict contraindications for the High-Intensity fields (PEMF, Cryo).
                </div>
</details>
</div>
</section>

<section className="py-24 bg-lab-zinc100 border-t border-lab-zinc300">
<div className="max-w-5xl mx-auto px-6 relative">
<div className="absolute top-0 right-6 text-[10px] font-mono text-lab-orange border border-lab-orange px-2 py-1 uppercase tracking-widest">Intake_Form_v1</div>
<form className="text-2xl md:text-5xl font-extrabold leading-tight tracking-tight text-lab-zinc300 focus-within:text-lab-black transition-colors duration-300">
                I am <input className="bg-transparent border-b-2 border-lab-orange text-lab-black placeholder-lab-zinc300 focus:outline-none w-[300px] font-mono text-2xl md:text-4xl py-2" placeholder="FULL NAME" type="text"/> looking to optimize my 
                <div className="inline-block relative">
<select className="appearance-none bg-transparent border-b-2 border-lab-orange text-lab-black focus:outline-none py-2 pr-8 font-mono text-2xl md:text-4xl cursor-pointer">
<option>ENERGY</option>
<option>SLEEP</option>
<option>COGNITION</option>
<option>LONGEVITY</option>
</select>
</div>. My monthly budget for optimization is 
                <div className="inline-block relative">
<select className="appearance-none bg-transparent border-b-2 border-lab-orange text-lab-black focus:outline-none py-2 pr-8 font-mono text-2xl md:text-4xl cursor-pointer">
<option>UNLIMITED</option>
<option>$1k - $5k</option>
<option>$500 - $1k</option>
</select>
</div>.
                <br/><br/>
<button className="mt-8 bg-lab-orange text-white text-lg font-mono px-8 py-4 hover:bg-black transition-colors flex items-center gap-4" type="button">
                    [ SUBMIT_INTAKE ]
                    <iconify-icon icon="solar:upload-track-linear"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="map-bg relative pt-24 pb-0 border-t border-lab-zinc300 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-32 relative z-10">
<div>
<h4 className="font-mono text-xs text-lab-zinc500 mb-4 uppercase">HQ_COORDINATES</h4>
<p className="font-bold text-lg">SAN_FRANCISCO</p>
<p className="font-mono text-sm text-lab-zinc500">37.77° N, 122.41° W</p>
<div className="mt-2 w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse"></div>
</div>
<div>
<h4 className="font-mono text-xs text-lab-zinc500 mb-4 uppercase">LAB_02</h4>
<p className="font-bold text-lg">LONDON</p>
<p className="font-mono text-sm text-lab-zinc500">51.50° N, 0.12° W</p>
</div>
<div>
<h4 className="font-mono text-xs text-lab-zinc500 mb-4 uppercase">LAB_03</h4>
<p className="font-bold text-lg">TOKYO</p>
<p className="font-mono text-sm text-lab-zinc500">35.67° N, 139.65° E</p>
</div>
<div>
<h4 className="font-mono text-xs text-lab-zinc500 mb-4 uppercase">COMPLIANCE</h4>
<div className="grid grid-cols-2 gap-2">
<div className="border border-lab-zinc300 p-2 text-center opacity-50">
<span className="text-[10px] font-bold">FDA</span>
</div>
<div className="border border-lab-zinc300 p-2 text-center opacity-50">
<span className="text-[10px] font-bold">ISO</span>
</div>
<div className="border border-lab-zinc300 p-2 text-center opacity-50">
<span className="text-[10px] font-bold">GMP</span>
</div>
<div className="border border-lab-zinc300 p-2 text-center opacity-50">
<span className="text-[10px] font-bold">HIPAA</span>
</div>
</div>
</div>
</div>

<div className="w-full text-center leading-none">
<h1 className="text-[25vw] font-extrabold tracking-tighter text-lab-black translate-y-[20%] select-none">AETERNA</h1>
</div>
</footer>



    </>
  );
}
