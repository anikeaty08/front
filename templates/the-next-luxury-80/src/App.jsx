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
      

<nav className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#C9A24C]/10 w-full">
<div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
<a className="text-2xl text-[#C9A24C] font-['Cormorant_Garamond',_serif] font-normal tracking-tight" href="#">The NEXT</a>
<div className="hidden md:flex space-x-8 items-center text-[#C9A24C]" style={{fontVariant: 'small-caps'}}>
<a className="text-base hover:text-[#FFFFFF] transition-colors duration-300" href="#architect">The Architect</a>
<a className="text-base hover:text-[#FFFFFF] transition-colors duration-300" href="#methodology">The Methodology</a>
<a className="text-base hover:text-[#FFFFFF] transition-colors duration-300" href="#days">The Days</a>
<a className="text-base hover:text-[#FFFFFF] transition-colors duration-300" href="#investment">The Investment</a>
<a className="text-base hover:text-[#FFFFFF] transition-colors duration-300" href="#apply">Apply</a>
</div>
</div>
</nav>
<div className="w-full bg-[#0A0A0A] border-b border-[#C9A24C]/20 h-10 flex items-center justify-center">
<p className="text-xs text-[#C9A24C] tracking-[0.1em]">June 2026 · Malaysia   |   September 2026 · Spain</p>
</div>

<section className="relative w-full py-40 lg:py-56 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">

<img alt="Cinematic Architectural Detail" className="w-full h-full object-cover object-center grayscale opacity-20" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0A0A0A_80%)]"></div>
<div className="bg-[#0A0A0A]/60 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="flex flex-col text-center max-w-4xl z-10 mr-auto ml-auto pr-6 pl-6 relative items-center">
<span className="uppercase block text-8xl font-extrabold text-[#C9A24C] tracking-[0.2em]">THE NEXT</span>
<h1 className="text-5xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-light tracking-tight mb-2 lg:text-6xl">Stop carrying your life's work in your head.</h1>
<h1 className="lg:text-7xl text-5xl font-extrabold text-[#C9A24C] tracking-tight mb-16">BUILD IT.</h1>
<a className="inline-block uppercase hover:bg-[#C9A24C]/10 transition-colors duration-300 text-xs text-[#C9A24C] tracking-[0.2em] bg-transparent border-[#C9A24C] border rounded-sm mb-6 pt-5 pr-10 pb-5 pl-10" href="#apply">
                APPLY TO THE NEXT
            </a>
</div>
</section>

<section className="w-full bg-[#111418] py-32 lg:py-40">
<div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
<div className="w-[60px] h-[1px] bg-[#C9A24C] mb-8"></div>
<span className="text-xs uppercase tracking-[0.2em] text-[#C9A24C] mb-12 block">WHAT MAKES THIS WEEK DIFFERENT</span>
<p className="text-lg lg:text-xl text-[#B8B8B8] leading-[1.7] mb-8">While most founders at this stage are still planning the next chapter, twenty-four will arrive in 2026 with the work in their heads and leave with the work in the world.</p>
<p className="text-lg lg:text-xl text-[#B8B8B8] leading-[1.7]">The Week is not for thinking about the next chapter. The Week is for building it.</p>
</div>
</section>

<section className="w-full bg-[#0A0A0A] py-24 lg:py-32 border-b border-[#C9A24C]/10">
<div className="max-w-6xl mx-auto px-6 text-center flex flex-col items-center mb-16">
<div className="w-[60px] h-[1px] bg-[#C9A24C] mb-8"></div>
<span className="text-xs uppercase tracking-[0.2em] text-[#C9A24C] block">THE FACTS AT A GLANCE</span>
</div>
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">

<div className="flex flex-col items-center text-center md:border-r border-[#C9A24C]/20 px-4">
<iconify-icon className="text-4xl text-[#C9A24C] mb-6" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-sm uppercase tracking-[0.2em] text-[#FFFFFF] mb-4">LOCATION</h3>
<p className="text-base text-[#B8B8B8] leading-[1.7]">Malaysia (June) — Spain (September)</p>
</div>

<div className="flex flex-col items-center text-center md:border-r border-[#C9A24C]/20 px-4">
<iconify-icon className="text-4xl text-[#C9A24C] mb-6" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-sm uppercase tracking-[0.2em] text-[#FFFFFF] mb-4">DATES</h3>
<p className="text-base text-[#B8B8B8] leading-[1.7]">27 June – 4 July 2026 · September 2026</p>
</div>

<div className="flex flex-col items-center text-center px-4">
<iconify-icon className="text-4xl text-[#C9A24C] mb-6" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-sm uppercase tracking-[0.2em] text-[#FFFFFF] mb-4">COHORT</h3>
<p className="text-base text-[#B8B8B8] leading-[1.7]">Twelve founders per cohort. Twenty-four total in 2026.</p>
</div>
</div>
</section>

<section className="w-full bg-[#0A0A0A] py-24 text-center">
<a className="inline-block border border-[#C9A24C] text-[#C9A24C] bg-transparent text-xs uppercase tracking-[0.2em] px-10 py-5 rounded-sm hover:bg-[#C9A24C]/10 transition-colors duration-300 mb-8" href="#apply">
            APPLY TO THE NEXT
        </a>
<div className="max-w-2xl mx-auto px-6">
<p className="text-xs text-[#7A7A7A] leading-[1.7]" style={{fontStyle: 'italic'}}>Investment: $20,000 standalone. $24,995 with the Transmit It bundle. Phil personally reviews every application. Cohort fit is assessed across all twenty-four founding seats together.</p>
</div>
</section>

<section className="w-full bg-[#111418] py-32 lg:py-40" id="methodology">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center mb-20">
<div className="w-[60px] h-[1px] bg-[#C9A24C] mb-8"></div>
<span className="text-xs uppercase tracking-[0.2em] text-[#C9A24C] mb-6 block">THE METHODOLOGY'S TRACK RECORD</span>
<h2 className="text-4xl lg:text-5xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-light tracking-tight">Forty Years of Producing Structural Form</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="border border-[#C9A24C] bg-[#111418]/50 p-8 rounded-sm flex flex-col justify-between">
<span className="text-5xl lg:text-6xl text-[#C9A24C] font-['Cormorant_Garamond',_serif] font-light tracking-tight block mb-6">40 YEARS</span>
<p className="text-sm text-[#B8B8B8] leading-[1.7]">Methodology applied across domains — video processing, surgery, hospital reorganization, hardware design, biological tools, security patents, enterprise IT migration.</p>
</div>

<div className="border border-[#C9A24C] bg-[#111418]/50 p-8 rounded-sm flex flex-col justify-between">
<span className="text-5xl lg:text-6xl text-[#C9A24C] font-['Cormorant_Garamond',_serif] font-light tracking-tight block mb-6">24M FRANCS</span>
<p className="text-sm text-[#B8B8B8] leading-[1.7]">Business built on a single architecture conversation. The FPGA problem most engineers said could not be solved.</p>
</div>

<div className="border border-[#C9A24C] bg-[#111418]/50 p-8 rounded-sm flex flex-col justify-between">
<span className="text-5xl lg:text-6xl text-[#C9A24C] font-['Cormorant_Garamond',_serif] font-light tracking-tight block mb-6">200 PEOPLE</span>
<p className="text-sm text-[#B8B8B8] leading-[1.7]">Swiss insurance firm reorganized through merger. Two weeks of structured listening. The proposal held.</p>
</div>

<div className="border border-[#C9A24C] bg-[#111418]/50 p-8 rounded-sm flex flex-col justify-between">
<span className="text-5xl lg:text-6xl text-[#C9A24C] font-['Cormorant_Garamond',_serif] font-light tracking-tight block mb-6">5 MONTHS</span>
<p className="text-sm text-[#B8B8B8] leading-[1.7]">Artist's project shipped, down from a five-year estimate, after one conversation with the architect.</p>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#0A0A0A] py-32 lg:py-40">
<div className="max-w-[700px] mx-auto px-6 text-center flex flex-col items-center">
<div className="w-[60px] h-[1px] bg-[#C9A24C] mb-8"></div>
<span className="text-xs uppercase tracking-[0.2em] text-[#C9A24C] mb-12 block">THE STRUCTURAL ASYMMETRY</span>
<p className="text-xl lg:text-2xl text-[#FFFFFF] font-normal leading-[1.7] tracking-tight mb-8">You have built one direction of your life — the company — to a level of structural rigor most people will never reach.</p>
<p className="text-xl lg:text-2xl text-[#FFFFFF] font-normal leading-[1.7] tracking-tight mb-8">The other directions are still running on the rules of a younger operator. The asymmetry is felt every day.</p>
<p className="text-xl lg:text-2xl text-[#C9A24C] font-normal leading-[1.7] tracking-tight">The NEXT exists to close it.</p>
</div>
</section>

<section className="w-full bg-[#111418] py-32 lg:py-40" id="architect">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
<div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden">

<img alt="Phil R. Lange" className="w-full h-full object-cover grayscale object-top" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border border-[#C9A24C]/20 pointer-events-none"></div>
</div>
<div className="flex flex-col">
<div className="w-[60px] h-[1px] bg-[#C9A24C] mb-8"></div>
<span className="text-xs uppercase tracking-[0.2em] text-[#C9A24C] mb-6 block">THE ARCHITECT</span>
<h2 className="text-3xl lg:text-4xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-light tracking-tight mb-8 leading-tight">Phil R. Lange has spent forty years building methodologies that produce structural form.</h2>
<p className="text-base text-[#B8B8B8] leading-[1.7] mb-12">The work has been applied across video processing, surgery, hospital reorganization, hardware design, biological tools, security patents, and IT migration for some of Europe's largest enterprises. The same engine, applied across domains.</p>
<div className="space-y-10 mb-12">
<div>
<h4 className="text-sm uppercase tracking-[0.1em] text-[#C9A24C] mb-3">The FPGA architecture.</h4>
<p className="text-base text-[#B8B8B8] leading-[1.7]">A colleague brought a real-time hardware reconfiguration problem most engineers said could not be solved. The conversation produced an FPGA architecture. He went on to build a 24 million franc business on it.</p>
</div>
<div>
<h4 className="text-sm uppercase tracking-[0.1em] text-[#C9A24C] mb-3">The Swiss reorganization.</h4>
<p className="text-base text-[#B8B8B8] leading-[1.7]">A 200-person Swiss insurance firm asked for a merger reorganization. Two weeks of structured listening, then the proposal. The proposal held.</p>
</div>
<div>
<h4 className="text-sm uppercase tracking-[0.1em] text-[#C9A24C] mb-3">The artist's project.</h4>
<p className="text-base text-[#B8B8B8] leading-[1.7]">An artist had been planning a project for two decades and was sure it would take five years. By the end of one conversation, the timeline was five months. The work shipped in five months.</p>
</div>
</div>
<p className="text-base text-[#B8B8B8] leading-[1.7] mb-8">Across forty years, the methodology has produced patents, products that shipped, businesses built, organizations that held through reorganization, and frameworks that scaled past the architect. The pattern is consistent across domains.</p>
<p className="text-lg text-[#FFFFFF] leading-[1.7] font-medium tracking-tight">The NEXT is the first time the methodology has been compressed into a cohort format. Twelve founders. Seven days. The architect in the room for every hour of it.</p>
</div>
</div>
</section>

<section className="w-full bg-[#0A0A0A] py-32 lg:py-40 border-t border-b border-[#C9A24C]/10">
<div className="max-w-4xl mx-auto px-6">
<div className="flex flex-col items-center text-center mb-16">
<div className="w-[60px] h-[1px] bg-[#C9A24C] mb-8"></div>
<span className="text-xs uppercase tracking-[0.2em] text-[#C9A24C] mb-6 block">THE FOUNDING TWENTY-FOUR</span>
<h2 className="text-4xl lg:text-5xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-light tracking-tight mb-8">What Founding-Cohort Status Actually Means</h2>
<p className="text-base lg:text-lg text-[#B8B8B8] leading-[1.7] max-w-3xl mb-6">The Malaysia and Spain cohorts of 2026 are the founding twenty-four.</p>
<p className="text-base lg:text-lg text-[#B8B8B8] leading-[1.7] max-w-3xl">The format will be reviewed after the founding cohorts ship. Future cohorts, if they run, will not be the founding cohorts. The architect will not necessarily be in the room for every hour the way he is in 2026.</p>
</div>
<div className="border border-[#C9A24C]/30 bg-[#111418]/30 p-10 lg:p-14 rounded-sm max-w-3xl mx-auto">
<h3 className="text-lg text-[#C9A24C] font-normal tracking-tight mb-8 text-center">The founding twenty-four are the only seats where:</h3>
<ul className="space-y-6 mb-10">
<li className="flex items-start">
<iconify-icon className="text-2xl text-[#C9A24C] mr-4 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-[#FFFFFF] leading-[1.7]">The architect is the entire faculty</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-2xl text-[#C9A24C] mr-4 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-[#FFFFFF] leading-[1.7]">The methodology is delivered in its first compressed form</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-2xl text-[#C9A24C] mr-4 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-[#FFFFFF] leading-[1.7]">The cohort size is held to twelve</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-2xl text-[#C9A24C] mr-4 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-[#FFFFFF] leading-[1.7]">The format has not yet been altered by scale</span>
</li>
</ul>
<p className="text-base text-[#B8B8B8] leading-[1.7]">This is what brand-new looks like at the architect level. Not unproven. Uncompressed. The methodology has been producing structural form for forty years. The compression into seven days is what is new.</p>
</div>
</div>
</section>

<section className="w-full bg-[#111418] py-24 text-center">
<a className="inline-block border border-[#C9A24C] text-[#C9A24C] bg-transparent text-xs uppercase tracking-[0.2em] px-10 py-5 rounded-sm hover:bg-[#C9A24C]/10 transition-colors duration-300 mb-6" href="#apply">
            APPLY TO THE NEXT
        </a>
<p className="text-xs text-[#7A7A7A] leading-[1.7]">Twelve seats per cohort. Two cohorts in 2026. The founding twenty-four.</p>
</section>

<section className="w-full bg-[#0A0A0A] py-32 lg:py-40">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center mb-20">
<div className="w-[60px] h-[1px] bg-[#C9A24C] mb-8"></div>
<span className="text-xs uppercase tracking-[0.2em] text-[#C9A24C] mb-6 block">THE THREE STRUCTURAL REALITIES</span>
<h2 className="text-4xl lg:text-5xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-light tracking-tight max-w-3xl">Why the Engine That Built the Company Cannot Build the Next Chapter</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

<div className="border border-[#C9A24C] bg-[#111418]/50 p-10 rounded-sm">
<span className="text-5xl text-[#C9A24C] font-['Cormorant_Garamond',_serif] font-light tracking-tight block mb-6">01</span>
<h3 className="text-xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-normal tracking-tight mb-4">The Proving Phase Ends</h3>
<p className="text-sm text-[#B8B8B8] leading-[1.7]">The business is real. The revenue arrives. What used to be uncertain is now operational. The energy that built the company is no longer the energy needed for what comes next.</p>
</div>

<div className="border border-[#C9A24C] bg-[#111418]/50 p-10 rounded-sm">
<span className="text-5xl text-[#C9A24C] font-['Cormorant_Garamond',_serif] font-light tracking-tight block mb-6">02</span>
<h3 className="text-xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-normal tracking-tight mb-4">The Work in the Head Accumulates</h3>
<p className="text-sm text-[#B8B8B8] leading-[1.7]">A book. A school. A methodology. A framework. Carried for years inside the founder, said out loud only in tones that signal it is not to be taken seriously.</p>
</div>

<div className="border border-[#C9A24C] bg-[#111418]/50 p-10 rounded-sm">
<span className="text-5xl text-[#C9A24C] font-['Cormorant_Garamond',_serif] font-light tracking-tight block mb-6">03</span>
<h3 className="text-xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-normal tracking-tight mb-4">The Engine Cannot Cross</h3>
<p className="text-sm text-[#B8B8B8] leading-[1.7]">Different work, different architecture. Willpower applies more of the existing engine. The next chapter requires structural moves the engine itself cannot make.</p>
</div>
</div>
<p className="text-2xl lg:text-3xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-light tracking-tight text-center max-w-2xl mx-auto">The NEXT is the architecture for that crossing.</p>
</div>
</section>

<section className="w-full bg-[#111418] py-32 lg:py-40" id="days">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col items-center text-center mb-20">
<div className="w-[60px] h-[1px] bg-[#C9A24C] mb-8"></div>
<span className="text-xs uppercase tracking-[0.2em] text-[#C9A24C] mb-6 block">THE WEEK, DAY BY DAY</span>
<h2 className="text-4xl lg:text-5xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-light tracking-tight">Seven Days. One Vehicle. Built and Revealed.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

<div className="border border-[#C9A24C] bg-[#0A0A0A]/50 p-8 rounded-sm">
<span className="text-xs uppercase tracking-[0.1em] text-[#C9A24C] mb-4 block">DAY 1 · ARRIVAL</span>
<h3 className="text-2xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-normal tracking-tight mb-4">The Welcome Half-Day</h3>
<p className="text-sm text-[#B8B8B8] leading-[1.7]">Sixty-second pitches. Personal book delivery. Compass Pairing introduction. Cohort dinner. The Week begins with structure, not orientation.</p>
</div>

<div className="border border-[#C9A24C] bg-[#0A0A0A]/50 p-8 rounded-sm">
<span className="text-xs uppercase tracking-[0.1em] text-[#C9A24C] mb-4 block">DAY 2 · PAIRING</span>
<h3 className="text-2xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-normal tracking-tight mb-4">The Compass Session</h3>
<p className="text-sm text-[#B8B8B8] leading-[1.7]">Phil pairs founders by complementary REAL Compass bearings. The pairs hold for the rest of the Week — buddy work for video shoots, sales page review, accountability. The cohort is twelve, but the working unit is two.</p>
</div>

<div className="border border-[#C9A24C] bg-[#0A0A0A]/50 p-8 rounded-sm">
<span className="text-xs uppercase tracking-[0.1em] text-[#C9A24C] mb-4 block">DAY 3 · VOICE</span>
<h3 className="text-2xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-normal tracking-tight mb-4">Brand Voice and DNA Confirmation</h3>
<p className="text-sm text-[#B8B8B8] leading-[1.7]">Brand Voice Skill in the morning. Open work block in the afternoon for Brand DNA and Voice Confirmation. Founders leave the day with their voice captured at a level of structural specificity most have never seen written down.</p>
</div>

<div className="border border-[#C9A24C] bg-[#0A0A0A]/50 p-8 rounded-sm">
<span className="text-xs uppercase tracking-[0.1em] text-[#C9A24C] mb-4 block">DAY 4 · CAPTURE</span>
<h3 className="text-2xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-normal tracking-tight mb-4">Video Script and Parrot Method Shoot</h3>
<p className="text-sm text-[#B8B8B8] leading-[1.7]">Script written and signed off by lunch. Shoot in the afternoon with Phil's production team handling framing, sound, and lighting. Cohort buddies handle the read. The anchor video for Friday's Reveal goes into edit overnight.</p>
</div>

<div className="border border-[#C9A24C] bg-[#0A0A0A]/50 p-8 rounded-sm">
<span className="text-xs uppercase tracking-[0.1em] text-[#C9A24C] mb-4 block">DAY 5 · STRUCTURE</span>
<h3 className="text-2xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-normal tracking-tight mb-4">Sales Page Anatomy and Copy</h3>
<p className="text-sm text-[#B8B8B8] leading-[1.7]">The twelve belief shifts that structure a premium sales page in the morning. Complete sales page draft written in the afternoon and handed to Phil's team. Designed and built overnight.</p>
</div>

<div className="border border-[#C9A24C] bg-[#0A0A0A]/50 p-8 rounded-sm">
<span className="text-xs uppercase tracking-[0.1em] text-[#C9A24C] mb-4 block">DAY 6 · DEPLOYMENT</span>
<h3 className="text-2xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-normal tracking-tight mb-4">Email Sequence and Social Optimization</h3>
<p className="text-sm text-[#B8B8B8] leading-[1.7]">Seven-email welcome sequence in the morning. Social profile optimization across primary platforms in the afternoon. By end of day, the entire Vehicle is in production. Overnight, Phil's team finalizes the sales pages and edits the videos for Friday.</p>
</div>

<div className="border border-[#C9A24C] bg-[#0A0A0A]/50 p-8 rounded-sm lg:col-span-3 max-w-2xl mx-auto w-full">
<span className="text-xs uppercase tracking-[0.1em] text-[#C9A24C] mb-4 block text-center">DAY 7 · REVEAL</span>
<h3 className="text-2xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-normal tracking-tight mb-4 text-center">The Big Reveal and Send-Off</h3>
<p className="text-sm text-[#B8B8B8] leading-[1.7] text-center">Awards in the morning. Asset checklist sign-off. Lunch. The Reveal in the afternoon — anchor video on the big screen, sales page revealed live, every founder takes the stage. Send-off dinner in the evening.</p>
</div>
</div>
<p className="text-xs text-[#7A7A7A] text-center leading-[1.7]">Bundlers also work in daily 5pm–6pm Book Sessions Monday through Friday.</p>
</div>
</section>

<section className="w-full bg-[#0A0A0A] py-32 lg:py-40">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center mb-20">
<div className="w-[60px] h-[1px] bg-[#C9A24C] mb-8"></div>
<span className="text-xs uppercase tracking-[0.2em] text-[#C9A24C] mb-6 block">THE DELIVERABLE</span>
<h2 className="text-4xl lg:text-5xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-light tracking-tight max-w-3xl mb-8">What the Founder Leaves With: A Premium Positioning System</h2>
<p className="text-base text-[#B8B8B8] leading-[1.7] max-w-3xl mb-6">The Signature Vehicle is the public architecture that turns the work into a market-facing asset the founder owns and controls. It carries the founder's IP, voice, and offer into the world as a coherent system.</p>
<p className="text-base text-[#B8B8B8] leading-[1.7] max-w-3xl">The Vehicle has five components. Each is built and revealed during the Week.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

<div className="border border-[#C9A24C] bg-[#111418]/50 p-6 rounded-sm flex flex-col">
<iconify-icon className="text-3xl text-[#C9A24C] mb-6 block" icon="solar:video-frame-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-sm text-[#C9A24C] uppercase tracking-[0.1em] mb-4">01 · THE ANCHOR VIDEO</h3>
<p className="text-sm text-[#B8B8B8] leading-[1.7]">Founder-grade. Scripted Tuesday morning. Shot with Phil's production team Tuesday afternoon. Edited overnight. Plays on the big screen Friday afternoon at the Reveal.</p>
</div>

<div className="border border-[#C9A24C] bg-[#111418]/50 p-6 rounded-sm flex flex-col">
<iconify-icon className="text-3xl text-[#C9A24C] mb-6 block" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-sm text-[#C9A24C] uppercase tracking-[0.1em] mb-4">02 · THE SALES PAGE</h3>
<p className="text-sm text-[#B8B8B8] leading-[1.7]">Long-form. Drafted Wednesday afternoon under Phil's twelve-belief-shift anatomy. Designed and built overnight by Phil's team. Live on staging URL by Friday afternoon.</p>
</div>

<div className="border border-[#C9A24C] bg-[#111418]/50 p-6 rounded-sm flex flex-col">
<iconify-icon className="text-3xl text-[#C9A24C] mb-6 block" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-sm text-[#C9A24C] uppercase tracking-[0.1em] mb-4">03 · THE EMAIL SEQUENCE</h3>
<p className="text-sm text-[#B8B8B8] leading-[1.7]">Seven emails. Welcome to first offer. Written Thursday morning under Phil's framework. Ready for the founder's email platform by end of day.</p>
</div>

<div className="border border-[#C9A24C] bg-[#111418]/50 p-6 rounded-sm flex flex-col">
<iconify-icon className="text-3xl text-[#C9A24C] mb-6 block" icon="solar:share-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-sm text-[#C9A24C] uppercase tracking-[0.1em] mb-4">04 · THE SOCIAL ARCHITECTURE</h3>
<p className="text-sm text-[#B8B8B8] leading-[1.7]">Optimized profiles across the founder's primary platforms. Rewritten Thursday afternoon to match the captured Brand Voice.</p>
</div>

<div className="border border-[#C9A24C] bg-[#111418]/50 p-6 rounded-sm flex flex-col">
<iconify-icon className="text-3xl text-[#C9A24C] mb-6 block" icon="solar:map-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-sm text-[#C9A24C] uppercase tracking-[0.1em] mb-4">05 · THE VEHICLE ARCHITECTURE DOCUMENT</h3>
<p className="text-sm text-[#B8B8B8] leading-[1.7]">Printed in the founder's personal book. The map of the Vehicle as a system the founder owns and understands. The asset the team can build from after the Week.</p>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#111418] py-24 text-center border-b border-[#C9A24C]/10">
<a className="inline-block border border-[#C9A24C] text-[#C9A24C] bg-transparent text-xs uppercase tracking-[0.2em] px-10 py-5 rounded-sm hover:bg-[#C9A24C]/10 transition-colors duration-300" href="#apply">
            APPLY TO THE NEXT
        </a>
</section>

<section className="w-full bg-[#0A0A0A] py-32 lg:py-40 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-24 text-center flex flex-col items-center">
<div className="w-[60px] h-[1px] bg-[#C9A24C] mb-8"></div>
<span className="text-xs uppercase tracking-[0.2em] text-[#C9A24C] mb-6 block">THE ENVIRONMENT</span>
<h2 className="text-4xl lg:text-5xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-light tracking-tight mb-8">Two Venues. One Standard.</h2>
<p className="text-base text-[#B8B8B8] leading-[1.7] max-w-[700px] mx-auto">Both cohort venues were selected on three criteria: a private space where the cohort eats together, a working space large enough to stage the Friday afternoon Reveal as a live event with full production setup, and an environment where the phone goes off the table during sessions.</p>
</div>

<div className="max-w-7xl mx-auto px-6 mb-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div className="w-full lg:w-[60%]">
<div className="relative w-full aspect-video rounded-sm overflow-hidden border border-[#C9A24C]">
<img alt="Malaysia Villa" className="w-full h-full object-cover venue-image-filter" src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#C9A24C] opacity-[0.12] pointer-events-none mix-blend-overlay"></div>
</div>
<div className="grid grid-cols-3 gap-4 mt-4">
<div className="relative aspect-video rounded-sm overflow-hidden border border-[#C9A24C]">
<img className="w-full h-full object-cover venue-image-filter" src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#C9A24C] opacity-[0.12] pointer-events-none mix-blend-overlay"></div>
</div>
<div className="relative aspect-video rounded-sm overflow-hidden border border-[#C9A24C]">
<img className="w-full h-full object-cover venue-image-filter" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#C9A24C] opacity-[0.12] pointer-events-none mix-blend-overlay"></div>
</div>
<div className="relative aspect-video rounded-sm overflow-hidden border border-[#C9A24C]">
<img className="w-full h-full object-cover venue-image-filter" src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#C9A24C] opacity-[0.12] pointer-events-none mix-blend-overlay"></div>
</div>
</div>
</div>
<div className="w-full lg:w-[40%] flex flex-col">
<span className="text-xs uppercase tracking-[0.2em] text-[#C9A24C] mb-6 block">27 JUNE – 4 JULY 2026</span>
<h3 className="text-3xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-normal tracking-tight mb-6">Langkawi, Malaysia</h3>
<p className="text-base text-[#B8B8B8] leading-[1.7] mb-6">A private villa in the Langkawi archipelago. Twelve founders, one residence, no other guests. The cohort works together, eats together, and reveals together for seven days inside the same walls.</p>
<p className="text-base text-[#B8B8B8] leading-[1.7]">The villa is configured for the Week — workshop space for daily build sessions, a private dining setting for the seven dinners, and a stage configuration on Friday afternoon for the Reveal.</p>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mb-32 flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
<div className="w-full lg:w-[60%]">
<div className="relative w-full aspect-video rounded-sm overflow-hidden border border-[#C9A24C]">
<img alt="Viluz Resort Spain" className="w-full h-full object-cover venue-image-filter" src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#C9A24C] opacity-[0.12] pointer-events-none mix-blend-overlay"></div>
</div>
<div className="grid grid-cols-3 gap-4 mt-4">
<div className="relative aspect-video rounded-sm overflow-hidden border border-[#C9A24C]">
<img className="w-full h-full object-cover venue-image-filter" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#C9A24C] opacity-[0.12] pointer-events-none mix-blend-overlay"></div>
</div>
<div className="relative aspect-video rounded-sm overflow-hidden border border-[#C9A24C]">
<img className="w-full h-full object-cover venue-image-filter" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#C9A24C] opacity-[0.12] pointer-events-none mix-blend-overlay"></div>
</div>
<div className="relative aspect-video rounded-sm overflow-hidden border border-[#C9A24C]">
<img className="w-full h-full object-cover venue-image-filter" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#C9A24C] opacity-[0.12] pointer-events-none mix-blend-overlay"></div>
</div>
</div>
</div>
<div className="w-full lg:w-[40%] flex flex-col">
<span className="text-xs uppercase tracking-[0.2em] text-[#C9A24C] mb-6 block">SEPTEMBER 2026</span>
<h3 className="text-3xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-normal tracking-tight mb-6">Viluz, Mijas — Costa del Sol, Spain</h3>
<p className="text-base text-[#B8B8B8] leading-[1.7] mb-6">An adults-only boutique resort in the foothills of the Sierra de la Nieves, overlooking the Mediterranean. Viluz holds the Spain cohort as an exclusive group stay — no other guests in the resort during the Week.</p>
<p className="text-base text-[#B8B8B8] leading-[1.7]">The same configuration as Malaysia: workshop space, private dining, Reveal stage on Friday afternoon. A different climate, the same standard.</p>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
<div>
<h4 className="text-sm text-[#C9A24C] uppercase tracking-[0.1em] mb-4">THE DAILY RHYTHM</h4>
<p className="text-sm text-[#B8B8B8] leading-[1.7]">Mornings open with the sound of the venue, not notifications. Sessions run nine to noon and one to four. Lunches and dinners are part of the Week — the cohort eats together, every day. The Reveal on Friday afternoon is staged with the production setup of a live event, not a meeting room.</p>
</div>
<div>
<h4 className="text-sm text-[#C9A24C] uppercase tracking-[0.1em] mb-4">THE AWARDS</h4>
<p className="text-sm text-[#B8B8B8] leading-[1.7]">Friday morning. The cohort recognizes structural breakthroughs from the Week. Not popularity. Not networking. Implementation.</p>
</div>
<div>
<h4 className="text-sm text-[#C9A24C] uppercase tracking-[0.1em] mb-4">THE DINNERS</h4>
<p className="text-sm text-[#B8B8B8] leading-[1.7]">The seven dinners are part of the Vehicle. Founders who have built one direction of life to structural rigor talking to other founders doing the same work. The peer set is the proof.</p>
</div>
</div>
<div className="max-w-4xl mx-auto px-6 text-center">
<p className="text-xs text-[#7A7A7A] leading-[1.7]">Hotel and travel logistics for both venues are handled with accepted founders during the four-week pre-event window. Founders cover travel and accommodation; lunches and dinners during the Week are included.</p>
</div>
</section>

<section className="w-full bg-[#111418] py-32 lg:py-40">
<div className="max-w-4xl mx-auto px-6">
<div className="flex flex-col items-center text-center mb-16">
<div className="w-[60px] h-[1px] bg-[#C9A24C] mb-8"></div>
<span className="text-xs uppercase tracking-[0.2em] text-[#C9A24C] mb-6 block">BEFORE YOU APPLY</span>
<h2 className="text-4xl lg:text-5xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-light tracking-tight mb-8">A Few Things Many Founders Consider</h2>
</div>
<div className="space-y-6">

<details className="group border-b border-[#C9A24C]/30 pb-6" open="">
<summary className="flex justify-between items-center cursor-pointer list-none text-[#C9A24C] text-xl font-['Cormorant_Garamond',_serif] tracking-tight pr-4">
                        "I have been in masterminds and high-ticket programs that underdelivered."
                        <iconify-icon className="transform group-open:rotate-180 transition-transform duration-300 ml-4 shrink-0" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="pt-4 text-[#B8B8B8] text-base leading-[1.7]">
                        The NEXT is not a mastermind. It is a build week with a fixed deliverable revealed on stage Friday afternoon. The Signature Vehicle is built in the room or the financial investment is refunded. The format is structural, not aspirational.
                    </div>
</details>

<details className="group border-b border-[#C9A24C]/30 pb-6">
<summary className="flex justify-between items-center cursor-pointer list-none text-[#C9A24C] text-xl font-['Cormorant_Garamond',_serif] tracking-tight pr-4">
                        "Seven days away from my business is the cost, not the dollars."
                        <iconify-icon className="transform group-open:rotate-180 transition-transform duration-300 ml-4 shrink-0" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="pt-4 text-[#B8B8B8] text-base leading-[1.7]">
                        For most founders at this stage, seven days is the smallest unit of time in which work of this magnitude can be compressed. The alternative is the same work distributed across sixteen to twenty weeks, with the founder still running the build alongside the company. The Week trades calendar duration for compression.
                    </div>
</details>

<details className="group border-b border-[#C9A24C]/30 pb-6">
<summary className="flex justify-between items-center cursor-pointer list-none text-[#C9A24C] text-xl font-['Cormorant_Garamond',_serif] tracking-tight pr-4">
                        "This is a brand-new format. There are no past cohort testimonials yet."
                        <iconify-icon className="transform group-open:rotate-180 transition-transform duration-300 ml-4 shrink-0" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="pt-4 text-[#B8B8B8] text-base leading-[1.7]">
                        Correct. The methodology behind the format has produced structural form across domains for forty years. The seven-day compression is what is new. The founding twenty-four are the cohorts where the architect is the entire faculty. The guarantee in Section 18 reflects this — the financial risk of execution sits with Phil, not with the founder.
                    </div>
</details>

<details className="group border-b border-[#C9A24C]/30 pb-6">
<summary className="flex justify-between items-center cursor-pointer list-none text-[#C9A24C] text-xl font-['Cormorant_Garamond',_serif] tracking-tight pr-4">
                        "What if the work I want to build is not a clean fit for the format."
                        <iconify-icon className="transform group-open:rotate-180 transition-transform duration-300 ml-4 shrink-0" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="pt-4 text-[#B8B8B8] text-base leading-[1.7]">
                        Every founder leaves with the same Signature Vehicle. The Vehicle is the universal form. What it carries is the work the founder has been holding. The format does not impose a content type.
                    </div>
</details>

<details className="group border-b border-[#C9A24C]/30 pb-6">
<summary className="flex justify-between items-center cursor-pointer list-none text-[#C9A24C] text-xl font-['Cormorant_Garamond',_serif] tracking-tight pr-4">
                        "What if I write a script Tuesday morning and dislike it on camera that afternoon."
                        <iconify-icon className="transform group-open:rotate-180 transition-transform duration-300 ml-4 shrink-0" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="pt-4 text-[#B8B8B8] text-base leading-[1.7]">
                        The Parrot Method exists for this. The script is signed off before lunch. The shoot uses Phil's production team for framing, sound, and lighting. Cohort buddies handle the read. Most founders are surprised by the result rather than disappointed by it.
                    </div>
</details>

<details className="group border-b border-[#C9A24C]/30 pb-6">
<summary className="flex justify-between items-center cursor-pointer list-none text-[#C9A24C] text-xl font-['Cormorant_Garamond',_serif] tracking-tight pr-4">
                        "Twelve founders means I might be in a room with people not at my level."
                        <iconify-icon className="transform group-open:rotate-180 transition-transform duration-300 ml-4 shrink-0" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="pt-4 text-[#B8B8B8] text-base leading-[1.7]">
                        Cohort selection is part of the application. The cohort is sized at twelve so that fit can be assessed across all twenty-four founding seats. Phil reviews every application personally.
                    </div>
</details>
</div>
</div>
</section>

<section className="w-full bg-[#0A0A0A] py-32 lg:py-40">
<div className="max-w-[700px] mx-auto px-6 text-center flex flex-col items-center">
<div className="w-[60px] h-[1px] bg-[#C9A24C] mb-8"></div>
<span className="text-xs uppercase tracking-[0.2em] text-[#C9A24C] mb-8 block">THE VEHICLE FUNCTIONS AS A WHOLE</span>
<h2 className="text-4xl lg:text-5xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-light tracking-tight mb-10">Built Whole, or Not Built</h2>
<p className="text-base lg:text-lg text-[#B8B8B8] leading-[1.7] mb-8">A founder who leaves with the video but not the sales page does not have a Vehicle. A founder who leaves with the page but not the email sequence does not have a Vehicle. The five components are not features. They are the architecture, and the architecture functions only when complete.</p>
<p className="text-base lg:text-lg text-[#B8B8B8] leading-[1.7]">This is why the Week is structured the way it is. Every day produces one component. By Friday afternoon, the system is whole.</p>
</div>
</section>

<section className="w-full bg-[#111418] py-32 lg:py-40 border-t border-[#C9A24C]/10" id="investment">
<div className="max-w-4xl mx-auto px-6">
<div className="flex flex-col items-center text-center mb-16">
<div className="w-[60px] h-[1px] bg-[#C9A24C] mb-8"></div>
<span className="text-xs uppercase tracking-[0.2em] text-[#C9A24C] mb-6 block">WHAT THE WEEK DELIVERS</span>
<h2 className="text-4xl lg:text-5xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-light tracking-tight">Anchored to What Each Component Would Cost Separately</h2>
</div>
<div className="w-full border-t border-[#C9A24C]/30 mb-12">
<div className="flex justify-between py-6 border-b border-[#C9A24C]/30 gap-6">
<span className="text-sm md:text-base text-[#FFFFFF] leading-[1.7]">Founder-grade anchor video — scripted, shot with full production team, edited overnight</span>
<span className="text-sm md:text-base text-[#C9A24C] whitespace-nowrap">$8,000 – $15,000</span>
</div>
<div className="flex justify-between py-6 border-b border-[#C9A24C]/30 gap-6">
<span className="text-sm md:text-base text-[#FFFFFF] leading-[1.7]">Long-form sales page — copy + design + build</span>
<span className="text-sm md:text-base text-[#C9A24C] whitespace-nowrap">$5,000 – $12,000</span>
</div>
<div className="flex justify-between py-6 border-b border-[#C9A24C]/30 gap-6">
<span className="text-sm md:text-base text-[#FFFFFF] leading-[1.7]">Seven-email welcome sequence</span>
<span className="text-sm md:text-base text-[#C9A24C] whitespace-nowrap">$3,000 – $6,000</span>
</div>
<div className="flex justify-between py-6 border-b border-[#C9A24C]/30 gap-6">
<span className="text-sm md:text-base text-[#FFFFFF] leading-[1.7]">Social profile optimization</span>
<span className="text-sm md:text-base text-[#C9A24C] whitespace-nowrap">$1,500 – $3,000</span>
</div>
<div className="flex justify-between py-6 border-b border-[#C9A24C]/30 gap-6">
<span className="text-sm md:text-base text-[#FFFFFF] leading-[1.7]">Founder DNA Intensive — Founder DNA, Voice DNA, 8 Signals, REAL Compass, EXPRESSION Matrix</span>
<span className="text-sm md:text-base text-[#C9A24C] whitespace-nowrap">$5,000+</span>
</div>
</div>
<div className="w-full bg-[#0A0A0A]/50 border border-[#C9A24C]/30 p-8 md:p-12 text-center rounded-sm mb-16">
<span className="text-sm text-[#C9A24C] uppercase tracking-[0.1em] mb-6 block">INCLUDED IN THE WEEK</span>
<p className="text-sm md:text-base text-[#B8B8B8] leading-[1.7]">The personalized hardcover personal book. The Compass Pairing. The cohort venue. Seven days of Phil's direct attention with eleven other founders. The production team for the build days and the overnight Reveal. All lunches and dinners. The Founders' Circle invitation post-event.</p>
</div>
<p className="text-2xl lg:text-3xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-light tracking-tight text-center mb-16">Total component value: well above the price of the Week.</p>
<div className="flex flex-col items-center mb-16">
<h3 className="text-4xl md:text-5xl text-[#C9A24C] font-['Cormorant_Garamond',_serif] font-light tracking-tight mb-4">Investment: $20,000 standalone.</h3>
<h3 className="text-4xl md:text-5xl text-[#C9A24C] font-['Cormorant_Garamond',_serif] font-light tracking-tight text-center">$24,995 with the Transmit It bundle.</h3>
</div>
<p className="text-base text-[#B8B8B8] leading-[1.7] mb-6 max-w-3xl mx-auto text-center">What the price reflects, structurally, is sixteen to twenty weeks of distributed work compressed into seven days on the ground plus one week of post-event finishing.</p>
<p className="text-base text-[#B8B8B8] leading-[1.7] max-w-3xl mx-auto text-center">The other way to think about the price is the alternative. Five years from now, the work in the founder's head will either still be in the founder's head, or it will be in the world. If it is still in the founder's head, the cost is not measured in dollars. It is measured in the chapter that did not happen.</p>
</div>
</section>

<section className="w-full bg-[#0A0A0A] py-32">
<div className="max-w-5xl mx-auto px-6">
<div className="border border-[#C9A24C] bg-[#111418] p-12 lg:p-20 text-center rounded-sm">
<span className="text-xs uppercase tracking-[0.2em] text-[#C9A24C] mb-6 block">THE STRUCTURAL GUARANTEE</span>
<h2 className="text-3xl lg:text-4xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-light tracking-tight mb-8">The Risk of Execution Sits With Phil. Not With the Founder.</h2>
<p className="text-base text-[#B8B8B8] leading-[1.7] mb-6 max-w-3xl mx-auto">By Friday afternoon, every founder takes the stage at the Reveal. The anchor video plays on the big screen. The sales page is revealed live. The email sequence is written. The social profiles are optimized. The Signature Vehicle architecture is signed off.</p>
<p className="text-base text-[#B8B8B8] leading-[1.7] mb-6 max-w-3xl mx-auto">If the four revealed assets are not produced and revealed by Friday afternoon, the founder receives a full refund of the Week investment and keeps every asset built to that point.</p>
<p className="text-base text-[#FFFFFF] font-medium leading-[1.7] max-w-3xl mx-auto tracking-tight">The NEXT is the architecture for the next life chapter. The guarantee is that the architecture is built, revealed, and in the world by Friday afternoon, or the financial investment is returned in full.</p>
</div>
</div>
</section>

<section className="w-full bg-[#111418] py-32 lg:py-40">
<div className="max-w-4xl mx-auto px-6">
<div className="flex flex-col items-center text-center mb-16">
<div className="w-[60px] h-[1px] bg-[#C9A24C] mb-8"></div>
<span className="text-xs uppercase tracking-[0.2em] text-[#C9A24C] mb-6 block">OPTIONAL ADD-ON</span>
<h2 className="text-4xl lg:text-5xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-light tracking-tight mb-4">The Transmit It Bundle</h2>
<h3 className="text-xl text-[#C9A24C] font-['Cormorant_Garamond',_serif] font-normal tracking-tight">+$4,995 — Adds the Book Project to the Week</h3>
</div>
<div className="max-w-3xl mx-auto mb-12">
<p className="text-base text-[#B8B8B8] leading-[1.7] mb-8 text-center">The Transmit It bundle adds the book project to the Week. Can be added until Sunday evening of the Week.</p>
<ul className="space-y-6 mb-12 bg-[#0A0A0A]/30 p-10 border border-[#C9A24C]/20 rounded-sm">
<li className="flex items-start">
<iconify-icon className="text-2xl text-[#C9A24C] mr-4 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-[#FFFFFF] leading-[1.7]">Daily 5pm to 6pm Book Sessions, Monday through Friday</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-2xl text-[#C9A24C] mr-4 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-[#FFFFFF] leading-[1.7]">The book outline and chapter spine drafted in the room</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-2xl text-[#C9A24C] mr-4 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-[#FFFFFF] leading-[1.7]">The Claude Skill built during the Week so the founder can write in their own voice, structurally captured</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-2xl text-[#C9A24C] mr-4 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-[#FFFFFF] leading-[1.7]">The book written in the week after the event using the Skill</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-2xl text-[#C9A24C] mr-4 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-[#FFFFFF] leading-[1.7]">A designed, laid-out first edition manuscript, ready to publish on Amazon KDP or send to print</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-2xl text-[#C9A24C] mr-4 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-[#FFFFFF] leading-[1.7]">The book funnel built and live by Phil's team</span>
</li>
</ul>
<p className="text-base text-[#B8B8B8] leading-[1.7] mb-6 text-center">What ships within one week of the event: the first edition manuscript, designed and laid out, plus the live book funnel. Trade publishing, if pursued, runs on its own timeline. The Week produces the book the founder owns and controls.</p>
<p className="text-base text-[#B8B8B8] leading-[1.7] text-center">The bundle is for founders who already know a book is part of the next chapter. It is not for founders who are testing whether they want to write a book.</p>
</div>
</div>
</section>

<section className="w-full bg-[#0A0A0A] py-32 lg:py-40">
<div className="max-w-[700px] mx-auto px-6 text-center flex flex-col items-center">
<div className="w-[60px] h-[1px] bg-[#C9A24C] mb-8"></div>
<span className="text-xs uppercase tracking-[0.2em] text-[#C9A24C] mb-6 block">WHY TWELVE</span>
<h2 className="text-4xl lg:text-5xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-light tracking-tight mb-10">Twelve Founders Per Cohort. Twenty-Four Total in 2026.</h2>
<p className="text-base lg:text-lg text-[#B8B8B8] leading-[1.7] mb-8">The cap is not a marketing tactic. The Week functions at twelve. Beyond twelve, the Compass Pairing breaks. The Reveal stage cannot accommodate more than twelve founders in an afternoon. The dinners cannot hold a real conversation past twelve seats.</p>
<p className="text-base lg:text-lg text-[#B8B8B8] leading-[1.7] mb-8">The Malaysia and Spain cohorts are the founding twenty-four. The format will be reviewed after the founding cohorts ship. Future cohorts, if they run, will not be the founding cohorts, and the architect will not necessarily be in the room for every hour the way he is in 2026.</p>
<p className="text-base lg:text-lg text-[#B8B8B8] leading-[1.7]">Phil personally reviews every application. Cohort fit is assessed across all twenty-four founding seats together. Applications are reviewed in order of submission, and seats are confirmed as fits emerge.</p>
</div>
</section>

<section className="w-full bg-[#111418] py-32 lg:py-40 border-t border-[#C9A24C]/10 text-center" id="apply">
<div className="max-w-2xl mx-auto px-6">
<div className="flex flex-col items-center mb-10">
<div className="w-[60px] h-[1px] bg-[#C9A24C] mb-8"></div>
<span className="text-xs uppercase tracking-[0.2em] text-[#C9A24C] mb-6 block">TWO COHORTS OPEN FOR 2026</span>
<h2 className="text-4xl lg:text-5xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-light tracking-tight">Apply to The NEXT</h2>
</div>
<p className="text-base text-[#B8B8B8] leading-[1.7] mb-6">Malaysia runs 27 June through 4 July 2026. Spain runs in September 2026. Cohort cap: twelve per cohort. The founding twenty-four.</p>
<p className="text-base text-[#B8B8B8] leading-[1.7] mb-6">The application is short. Five questions. Cohort selection is part of the application.</p>
<p className="text-base text-[#B8B8B8] leading-[1.7] mb-12">Cart closes one week before each cohort begins.</p>

<a className="inline-block border border-[#C9A24C] bg-[#C9A24C] text-[#0A0A0A] font-medium text-xs uppercase tracking-[0.2em] px-10 py-5 rounded-sm hover:bg-[#C9A24C]/90 transition-colors duration-300" href="#apply">
                APPLY TO THE NEXT
            </a>
</div>
</section>

<section className="w-full bg-[#0A0A0A] py-32 lg:py-40">
<div className="max-w-4xl mx-auto px-6">
<div className="flex flex-col items-center text-center mb-16">
<div className="w-[60px] h-[1px] bg-[#C9A24C] mb-8"></div>
<span className="text-xs uppercase tracking-[0.2em] text-[#C9A24C] mb-6 block">FREQUENTLY ASKED</span>
<h2 className="text-4xl lg:text-5xl text-[#FFFFFF] font-['Cormorant_Garamond',_serif] font-light tracking-tight mb-8">Logistics and Details</h2>
</div>
<div className="space-y-6">
<details className="group border-b border-[#C9A24C]/30 pb-6">
<summary className="flex justify-between items-center cursor-pointer list-none text-[#C9A24C] text-xl font-['Cormorant_Garamond',_serif] tracking-tight pr-4">
                        Is the Founder DNA Intensive separate or included.
                        <iconify-icon className="transform group-open:rotate-180 transition-transform duration-300 ml-4 shrink-0" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="pt-4 text-[#B8B8B8] text-base leading-[1.7]">Included as part of the total component value during the cohort methodology execution.</div>
</details>
<details className="group border-b border-[#C9A24C]/30 pb-6">
<summary className="flex justify-between items-center cursor-pointer list-none text-[#C9A24C] text-xl font-['Cormorant_Garamond',_serif] tracking-tight pr-4">
                        Cohort size.
                        <iconify-icon className="transform group-open:rotate-180 transition-transform duration-300 ml-4 shrink-0" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="pt-4 text-[#B8B8B8] text-base leading-[1.7]">Twelve founders per cohort. Twenty-four total in 2026.</div>
</details>
<details className="group border-b border-[#C9A24C]/30 pb-6">
<summary className="flex justify-between items-center cursor-pointer list-none text-[#C9A24C] text-xl font-['Cormorant_Garamond',_serif] tracking-tight pr-4">
                        Travel and accommodation.
                        <iconify-icon className="transform group-open:rotate-180 transition-transform duration-300 ml-4 shrink-0" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="pt-4 text-[#B8B8B8] text-base leading-[1.7]">Handled with accepted founders during the pre-event window. Founders cover travel and accommodation; lunches and dinners during the Week are included.</div>
</details>
<details className="group border-b border-[#C9A24C]/30 pb-6">
<summary className="flex justify-between items-center cursor-pointer list-none text-[#C9A24C] text-xl font-['Cormorant_Garamond',_serif] tracking-tight pr-4">
                        Will The NEXT run again after 2026.
                        <iconify-icon className="transform group-open:rotate-180 transition-transform duration-300 ml-4 shrink-0" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="pt-4 text-[#B8B8B8] text-base leading-[1.7]">The format will be reviewed after the founding cohorts ship. Future cohorts, if they run, will not necessarily have the architect in the room for every hour the way he is in 2026.</div>
</details>
<details className="group border-b border-[#C9A24C]/30 pb-6">
<summary className="flex justify-between items-center cursor-pointer list-none text-[#C9A24C] text-xl font-['Cormorant_Garamond',_serif] tracking-tight pr-4">
                        There are no past cohort testimonials. How do I evaluate this.
                        <iconify-icon className="transform group-open:rotate-180 transition-transform duration-300 ml-4 shrink-0" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="pt-4 text-[#B8B8B8] text-base leading-[1.7]">The methodology has been producing structural form for forty years. The seven-day compression is what is new. The financial risk of execution sits with Phil.</div>
</details>
<details className="group border-b border-[#C9A24C]/30 pb-6">
<summary className="flex justify-between items-center cursor-pointer list-none text-[#C9A24C] text-xl font-['Cormorant_Garamond',_serif] tracking-tight pr-4">
                        Do I bring my team.
                        <iconify-icon className="transform group-open:rotate-180 transition-transform duration-300 ml-4 shrink-0" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="pt-4 text-[#B8B8B8] text-base leading-[1.7]">The Week is for the founder. The architecture document you leave with is the asset your team can build from after the Week.</div>
</details>
<details className="group border-b border-[#C9A24C]/30 pb-6">
<summary className="flex justify-between items-center cursor-pointer list-none text-[#C9A24C] text-xl font-['Cormorant_Garamond',_serif] tracking-tight pr-4">
                        The Transmit It bundle.
                        <iconify-icon className="transform group-open:rotate-180 transition-transform duration-300 ml-4 shrink-0" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="pt-4 text-[#B8B8B8] text-base leading-[1.7]">An optional add-on (+$4,995) to produce your book in the room and live funnel shortly after. For founders who already know a book is part of their next chapter.</div>
</details>
<details className="group border-b border-[#C9A24C]/30 pb-6">
<summary className="flex justify-between items-center cursor-pointer list-none text-[#C9A24C] text-xl font-['Cormorant_Garamond',_serif] tracking-tight pr-4">
                        What if I am not building a book or a school. What if my work is something else.
                        <iconify-icon className="transform group-open:rotate-180 transition-transform duration-300 ml-4 shrink-0" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="pt-4 text-[#B8B8B8] text-base leading-[1.7]">The Vehicle is the universal form. What it carries is the work the founder has been holding. The format does not impose a content type.</div>
</details>
<details className="group border-b border-[#C9A24C]/30 pb-6">
<summary className="flex justify-between items-center cursor-pointer list-none text-[#C9A24C] text-xl font-['Cormorant_Garamond',_serif] tracking-tight pr-4">
                        The difference between The NEXT and the Founder Method Intensive.
                        <iconify-icon className="transform group-open:rotate-180 transition-transform duration-300 ml-4 shrink-0" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="pt-4 text-[#B8B8B8] text-base leading-[1.7]">The NEXT is a 7-day compressed cohort build. It is not just the methodology applied to the business, but the physical building of the assets in real-time.</div>
</details>
<details className="group border-b border-[#C9A24C]/30 pb-6">
<summary className="flex justify-between items-center cursor-pointer list-none text-[#C9A24C] text-xl font-['Cormorant_Garamond',_serif] tracking-tight pr-4">
                        After the Week.
                        <iconify-icon className="transform group-open:rotate-180 transition-transform duration-300 ml-4 shrink-0" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="pt-4 text-[#B8B8B8] text-base leading-[1.7]">Founders receive an invitation to the Founders' Circle post-event, carrying the structural framework built during the Week into ongoing execution.</div>
</details>
</div>
</div>
</section>

<section className="w-full bg-[#111418] py-32 text-center flex flex-col items-center">
<a className="inline-block border border-[#C9A24C] bg-transparent text-[#C9A24C] text-xs uppercase tracking-[0.2em] px-10 py-5 rounded-sm hover:bg-[#C9A24C]/10 transition-colors duration-300 mb-6" href="#apply">
            APPLY TO THE NEXT
        </a>
<p className="text-xs text-[#7A7A7A] leading-[1.7] max-w-lg mx-auto">Two cohorts open for 2026: Malaysia, 27 June – 4 July, and Spain in September. Cohort cap: twelve per cohort. The founding twenty-four.</p>
</section>
<footer className="w-full bg-[#0A0A0A] border-t border-[#C9A24C]/20 py-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-xl text-[#C9A24C] font-['Cormorant_Garamond',_serif] font-normal tracking-tight">The NEXT</span>
<div className="flex gap-6 text-xs text-[#7A7A7A] uppercase tracking-widest">
<a className="hover:text-[#C9A24C] transition-colors duration-300" href="#">Terms</a>
<a className="hover:text-[#C9A24C] transition-colors duration-300" href="#">Privacy</a>
<a className="hover:text-[#C9A24C] transition-colors duration-300" href="#">Contact</a>
</div>
<span className="text-xs text-[#7A7A7A]">© 2026 Phil R. Lange. All rights reserved.</span>
</div>
</footer>

    </>
  );
}
