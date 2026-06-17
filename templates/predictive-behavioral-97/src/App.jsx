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



      function initHeroAnimation() {
          if (typeof gsap === 'undefined') return;
          const tl = gsap.timeline();
          const connectorLines = document.querySelectorAll('.connector-line');
          connectorLines.forEach(line => {
              const length = line.getTotalLength();
              line.style.strokeDasharray = length;
              line.style.strokeDashoffset = length;
          });
          tl.fromTo(".exploded-layer", { y: 60, scale: 0.9, opacity: 0 }, { y: 0, scale: 1, opacity: 1, duration: 1.8, stagger: 0.2, ease: "power3.out" });
          tl.fromTo(".struts line, .struts rect", { opacity: 0, scaleY: 0, transformOrigin: "bottom center" }, { opacity: 1, scaleY: 1, duration: 1.2, stagger: 0.08, ease: "power2.out" }, "-=1.2");
          tl.to("#annotations-group", { opacity: 1, duration: 0.1 }, "-=0.5");
          tl.to(".connector-line", { strokeDashoffset: 0, duration: 1.5, stagger: 0.15, ease: "power2.inOut" }, "-=0.5");
          tl.fromTo(".annotation text, .annotation circle, .annotation rect", { opacity: 0, x: (i, el) => el.getAttribute('text-anchor') === 'start' ? -10 : 10 }, { opacity: 1, x: 0, duration: 1, stagger: 0.1, ease: "power2.out" }, "-=1");
          gsap.to(".exploded-layer:nth-child(1)", { y: -3, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 2 });
          gsap.to(".exploded-layer:nth-child(3)", { y: -1.5, duration: 4.2, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 2.5 });
          gsap.to(".exploded-layer:nth-child(5)", { y: 2, duration: 3.8, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 2.2 });
      }
      if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', initHeroAnimation);
      } else {
          initHeroAnimation();
      }
    
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
      

<div className="absolute pointer-events-none z-0 opacity-20 top-0 left-0 w-full h-screen" style={{backgroundImage: 'radial-gradient(circle at center, #3f3f46 0.5px, transparent 1px)', backgroundSize: '4px 4px'}}></div>
<div className="absolute pointer-events-none z-0 opacity-[0.03] top-0 left-0 w-full h-screen" style={{backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '64px 64px'}}></div>
<div className="absolute pointer-events-none z-0 top-0 left-0 w-full h-screen bg-[radial-gradient(circle_at_center,transparent_20%,#0B0E14_100%)]"></div>

<div className="absolute border border-zinc-900 pointer-events-none z-10 rounded-sm top-4 md:top-6 left-4 md:left-6 right-4 md:right-6 h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)]"></div>
<div className="absolute pointer-events-none z-10 flex flex-col justify-between p-4 md:p-6 opacity-40 top-0 left-0 w-full h-screen">
<svg className="absolute top-4 left-4 w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24">
<path d="M6 18v-8a2 2 0 012-2h8"></path>
</svg>
<svg className="absolute top-4 right-4 w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24">
<path d="M18 18v-8a2 2 0 00-2-2h-8"></path>
</svg>
<svg className="absolute bottom-4 left-4 w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24">
<path d="M6 6v8a2 2 0 002 2h8"></path>
</svg>
<svg className="absolute bottom-4 right-4 w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24">
<path d="M18 6v8a2 2 0 01-2 2h-8"></path>
</svg>
</div>

<header className="absolute top-0 left-0 right-0 z-30 p-8 md:p-12 flex flex-col md:flex-row justify-between items-start pointer-events-none">

<div className="flex flex-col gap-4 pointer-events-auto max-w-xl">
<div className="flex items-center gap-2 text-zinc-500">
<iconify-icon icon="solar:dna-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs font-light tracking-widest uppercase font-mono">
            Phenometrix // Core_v2.0
          </span>
</div>
<h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white uppercase leading-none">
          Behavioral Data.
          <br/>
          Not Astrology.
        </h1>
<p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-md mt-2">
          Generic personality tests are theater. Stop flying blind and start
          predicting with actuarially sound behavioral intelligence. See exactly
          how a candidate thinks and connects under pressure before day one.
        </p>
<ul className="flex flex-col gap-4 mt-8 text-sm text-zinc-400 font-light pointer-events-auto">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00FFD1] mt-0.5 text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="leading-relaxed">
<strong className="text-white font-medium">
                See past rehearsed answers:
              </strong>
              Find out how a candidate actually thinks and works under pressure,
              not just what they practiced.
            </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00FFD1] mt-0.5 text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="leading-relaxed">
<strong className="text-white font-medium">
                Predict team fit instantly:
              </strong>
              Know exactly how someone will interact, communicate, and resolve
              conflicts within your existing team.
            </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00FFD1] mt-0.5 text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="leading-relaxed">
<strong className="text-white font-medium">
                Get hard data, not gut feelings:
              </strong>
              Receive a clear, objective confidence score for every candidate
              before you make a job offer.
            </span>
</li>
</ul>
</div>

<div className="hidden md:flex flex-col items-end gap-2 pointer-events-auto mt-4 md:mt-0">
<div className="flex -space-x-2">
<img className="w-8 h-8 rounded-full border-2 border-[#0B0E14] grayscale opacity-70 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img className="w-8 h-8 rounded-full border-2 border-[#0B0E14] grayscale opacity-70 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img className="w-8 h-8 rounded-full border-2 border-[#0B0E14] grayscale opacity-70 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-8 h-8 rounded-full border-2 border-[#0B0E14] bg-zinc-800 flex items-center justify-center text-[10px] font-mono text-zinc-400 z-10">
            +12k
          </div>
</div>
<span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mt-1 block text-right">
          Human Data Analyzed
        </span>
</div>
</header>


<aside className="hidden lg:flex absolute left-12 top-1/2 -translate-y-1/2 z-20 flex-col gap-12 w-56 pointer-events-none">
<div className="flex flex-col gap-4 pointer-events-auto">
<h2 className="text-xs font-light tracking-widest text-zinc-500 uppercase border-b border-zinc-800 pb-2">
          Legacy Sys. Leakage
        </h2>
<div className="flex flex-col gap-3">
<div className="flex justify-between items-center text-xs">
<span className="font-light text-zinc-400">Interview Bias</span>
<span className="font-mono text-zinc-300">CRITICAL</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="font-light text-zinc-400">Self-Report Gaming</span>
<span className="font-mono text-zinc-300">HIGH</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="font-light text-zinc-600">Relational IQ Data</span>
<span className="font-mono text-zinc-600">MISSING</span>
</div>
</div>
</div>
<div className="flex flex-col gap-4 pointer-events-auto">
<h2 className="text-xs font-light tracking-widest text-zinc-500 uppercase border-b border-zinc-800 pb-2">
          Actuarial Prediction
        </h2>
<div className="flex flex-col gap-4">
<div className="flex flex-col gap-2">
<div className="flex justify-between text-xs font-mono tracking-widest text-zinc-400">
<span>Role Alignment</span>
<span className="text-[#00FFD1]">92%</span>
</div>
<div className="w-full h-[2px] bg-zinc-900 rounded-full overflow-hidden">
<div className="h-full w-[92%] bg-[#00FFD1] shadow-[0_0_8px_#00FFD1]"></div>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex justify-between text-xs font-mono tracking-widest text-zinc-400">
<span>Bias Mitigation</span>
<span className="text-[#00FFD1]">88%</span>
</div>
<div className="w-full h-[2px] bg-zinc-900 rounded-full overflow-hidden">
<div className="h-full w-[88%] bg-[#00FFD1] opacity-70"></div>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex justify-between text-xs font-mono tracking-widest text-zinc-400">
<span>Culture Cohesion</span>
<span className="text-zinc-500">74%</span>
</div>
<div className="w-full h-[2px] bg-zinc-900 rounded-full overflow-hidden">
<div className="h-full bg-zinc-700 w-[74%]"></div>
</div>
</div>
</div>
</div>
</aside>

<aside className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 z-20 flex-col gap-4 w-64 pointer-events-none">
<div className="flex items-center gap-4 p-3 border border-zinc-800 bg-black/80 backdrop-blur-md pointer-events-auto relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-[#00FFD1]"></div>
<img alt="Candidate" className="w-10 h-10 rounded-full border border-zinc-700 object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div className="flex flex-col">
<span className="text-sm font-medium text-white">Elena Rodriguez</span>
<span className="text-[10px] font-mono text-zinc-500 mt-0.5">
            CANDIDATE // VP ENGR
          </span>
</div>
</div>
<h2 className="text-xs font-light tracking-widest text-zinc-500 uppercase border-b border-zinc-800 pb-2 text-right pointer-events-auto">
        Live Teardown Telemetry
      </h2>
<div className="flex flex-col gap-3 text-xs font-mono tracking-wider text-right pointer-events-auto opacity-70">
<div className="text-zinc-400">
          T-04:12
          <span className="text-zinc-600 ml-2">MAPPING_COGNITION</span>
</div>
<div className="text-zinc-400">
          T-04:13
          <span className="text-zinc-600 ml-2">BYPASSING_SURFACE_TRAITS</span>
</div>
<div className="text-zinc-300">
          T-04:14
          <span className="text-white ml-2 border border-zinc-700 px-1 py-0.5 bg-zinc-900/50">
            ISOLATING_STRESS_RESPONSE
          </span>
</div>
<div className="text-zinc-400">
          T-04:15
          <span className="text-zinc-600 ml-2">VERIFYING_TEAM_FIT</span>
</div>
<div className="text-zinc-500">
          T-04:16
          <span className="text-zinc-700 ml-2">AWAITING_HR_DECISION</span>
</div>
</div>
</aside>

<main className="absolute z-10 flex items-center justify-center pointer-events-none mt-16 md:mt-0 top-0 left-0 w-full h-screen">
<div className="relative w-full max-w-[1000px] h-full flex items-center justify-center">
<svg className="w-full h-[70%] md:h-[80%] overflow-visible" preserveaspectratio="xMidYMid meet" viewbox="0 0 1000 800">
<defs>
<pattern height="20" id="grid-pattern" patternunits="userSpaceOnUse" width="20">
<path d="M 20 0 L 0 0 0 20" fill="none" stroke="#27272a" strokeWidth="0.5"></path>
</pattern>
</defs>

<line stroke="#3f3f46" stroke-dasharray="4 8" strokeWidth="1" x1="500" x2="500" y1="150" y2="720"></line>

<g id="wireframe-group">

<g className="exploded-layer" data-y="0">
<ellipse cx="500" cy="650" fill="none" rx="320" ry="100" stroke="#00FFD1" strokeWidth="2"></ellipse>
<ellipse cx="500" cy="650" fill="none" rx="290" ry="90" stroke="#3f3f46" stroke-dasharray="2 4" strokeWidth="1"></ellipse>
<ellipse cx="500" cy="650" fill="none" rx="150" ry="45" stroke="#27272a" strokeWidth="1"></ellipse>

<path d="M 180 650 Q 500 750 820 650" fill="none" stroke="#27272a" strokeWidth="1"></path>
<path d="M 210 650 Q 500 720 790 650" fill="none" stroke="#27272a" strokeWidth="1"></path>
<path d="M 350 650 Q 500 680 650 650" fill="none" stroke="#27272a" strokeWidth="1"></path>
<line stroke="#3f3f46" strokeWidth="0.5" x1="180" x2="820" y1="650" y2="650"></line>
<line stroke="#3f3f46" strokeWidth="0.5" x1="500" x2="500" y1="550" y2="750"></line>
</g>

<g className="struts">
<line stroke="#3f3f46" strokeWidth="1" x1="260" x2="180" y1="500" y2="650"></line>
<line stroke="#3f3f46" strokeWidth="1" x1="740" x2="820" y1="500" y2="650"></line>
<line stroke="#27272a" stroke-dasharray="2 4" strokeWidth="1" x1="350" x2="290" y1="500" y2="650"></line>
<line stroke="#27272a" stroke-dasharray="2 4" strokeWidth="1" x1="650" x2="710" y1="500" y2="650"></line>
</g>

<g className="exploded-layer" data-y="0">
<ellipse cx="500" cy="500" fill="rgba(0,0,0,0.8)" rx="240" ry="80" stroke="#71717a" strokeWidth="1.5"></ellipse>
<ellipse cx="500" cy="500" fill="none" rx="200" ry="66" stroke="#52525b" stroke-dasharray="4 4" strokeWidth="1"></ellipse>
<ellipse cx="500" cy="500" fill="none" rx="100" ry="33" stroke="#3f3f46" strokeWidth="1"></ellipse>
<line stroke="#3f3f46" strokeWidth="1" x1="260" x2="740" y1="500" y2="500"></line>
<line stroke="#3f3f46" strokeWidth="0.5" x1="330" x2="670" y1="443" y2="557"></line>
<line stroke="#3f3f46" strokeWidth="0.5" x1="330" x2="670" y1="557" y2="443"></line>
</g>

<g className="struts">
<line stroke="#52525b" strokeWidth="1" x1="320" x2="260" y1="350" y2="500"></line>
<line stroke="#52525b" strokeWidth="1" x1="680" x2="740" y1="350" y2="500"></line>
</g>

<g className="exploded-layer" data-y="0">
<ellipse cx="500" cy="350" fill="rgba(0,0,0,0.8)" rx="180" ry="60" stroke="#a1a1aa" strokeWidth="1.5"></ellipse>
<ellipse cx="500" cy="350" fill="none" rx="150" ry="50" stroke="#71717a" strokeWidth="1"></ellipse>
<ellipse cx="500" cy="350" fill="none" rx="120" ry="40" stroke="#52525b" stroke-dasharray="2 4" strokeWidth="1"></ellipse>
<path d="M 320 350 A 180 60 0 0 0 680 350" fill="none" stroke="#52525b" strokeWidth="1"></path>
<line stroke="#52525b" strokeWidth="1" x1="320" x2="680" y1="350" y2="350"></line>
</g>

<g className="struts">
<line stroke="#71717a" strokeWidth="1" x1="380" x2="320" y1="200" y2="350"></line>
<line stroke="#71717a" strokeWidth="1" x1="620" x2="680" y1="200" y2="350"></line>
<rect fill="none" height="150" stroke="#3f3f46" stroke-dasharray="2 4" strokeWidth="1" width="40" x="480" y="200"></rect>
</g>

<g className="exploded-layer" data-y="0">
<ellipse cx="500" cy="200" fill="rgba(0,0,0,0.9)" rx="120" ry="40" stroke="#e4e4e7" strokeWidth="2"></ellipse>
<ellipse cx="500" cy="200" fill="none" rx="100" ry="33" stroke="#a1a1aa" strokeWidth="1"></ellipse>
<circle cx="500" cy="200" fill="none" r="15" stroke="#ffffff" strokeWidth="1"></circle>
<circle cx="500" cy="200" fill="#ffffff" r="5"></circle>
<line stroke="#71717a" strokeWidth="1" x1="380" x2="620" y1="200" y2="200"></line>
<line stroke="#71717a" strokeWidth="1" x1="500" x2="500" y1="160" y2="240"></line>
</g>
</g>

<g className="opacity-0" id="annotations-group">

<g className="annotation">
<path className="connector-line" d="M 440 180 L 300 110 L 160 110" fill="none" stroke="#a1a1aa" strokeWidth="1"></path>
<circle cx="440" cy="180" fill="#ffffff" r="2"></circle>
<rect fill="#a1a1aa" height="4" width="4" x="160" y="108"></rect>
<text className="text-sm font-medium tracking-wide fill-zinc-200" text-anchor="end" x="145" y="105">
                Surface Persona
              </text>
<text className="text-xs font-mono tracking-widest uppercase fill-zinc-500" text-anchor="end" x="145" y="125">
                HIGH GAMING RISK
              </text>
</g>

<g className="annotation">
<path className="connector-line" d="M 660 330 L 750 260 L 870 260" fill="none" stroke="#71717a" strokeWidth="1"></path>
<circle cx="660" cy="330" fill="#a1a1aa" r="2"></circle>
<rect fill="#71717a" height="4" width="4" x="866" y="258"></rect>
<text className="text-sm font-medium tracking-wide fill-zinc-300" text-anchor="start" x="885" y="255">
                Relational IQ
              </text>
<text className="text-xs font-mono tracking-widest uppercase fill-zinc-500" text-anchor="start" x="885" y="275">
                TEAM COHESION IDX
              </text>
</g>

<g className="annotation">
<path className="connector-line" d="M 280 480 L 160 430 L 80 430" fill="none" stroke="#71717a" strokeWidth="1"></path>
<circle cx="280" cy="480" fill="#a1a1aa" r="2"></circle>
<rect fill="#71717a" height="4" width="4" x="80" y="428"></rect>
<text className="text-sm font-medium tracking-wide fill-zinc-300" text-anchor="end" x="65" y="425">
                Stress Resilience
              </text>
<text className="text-xs font-mono tracking-widest uppercase fill-zinc-500" text-anchor="end" x="65" y="445">
                PRESSURE RESPONSE // REAL
              </text>
</g>

<g className="annotation">
<path className="connector-line" d="M 760 620 L 820 580 L 920 580" fill="none" stroke="#00FFD1" strokeWidth="1"></path>
<circle cx="760" cy="620" fill="#00FFD1" r="2"></circle>
<rect fill="#00FFD1" height="4" width="4" x="916" y="578"></rect>
<text className="text-sm font-medium tracking-wide fill-[#00FFD1]" text-anchor="start" x="935" y="575">
                Core Wiring
              </text>
<text className="text-xs font-mono tracking-widest uppercase fill-zinc-600" text-anchor="start" x="935" y="595">
                PREDICTIVE FOUNDATION
              </text>
</g>
</g>
</svg>
</div>
</main>

<footer className="absolute left-6 md:left-12 right-6 md:right-12 z-30 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 pointer-events-none top-[calc(100vh-7rem)] md:top-[calc(100vh-6rem)]">

<div className="hidden md:flex items-center gap-2 pointer-events-auto">
<button className="w-10 h-10 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-400 transition-colors bg-black/50 backdrop-blur-md">
<iconify-icon icon="solar:shield-check-linear" width="18"></iconify-icon>
</button>
<button className="w-10 h-10 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-400 transition-colors bg-black/50 backdrop-blur-md">
<iconify-icon icon="solar:graph-up-linear" width="18"></iconify-icon>
</button>
<div className="ml-4 pl-4 border-l border-zinc-800 flex flex-col justify-center h-10">
<span className="text-xs font-mono text-zinc-500">CONFIDENCE SCORE</span>
<span className="text-sm font-medium text-white">94.2%</span>
</div>
</div>

<div className="flex gap-4 pointer-events-auto w-full md:w-auto justify-center md:justify-end relative flex-wrap md:flex-nowrap">
<button className="group relative border border-zinc-700 px-6 py-3 flex items-center gap-3 text-sm text-zinc-300 bg-black backdrop-blur-sm hover:border-white hover:text-white transition-all overflow-hidden w-full md:w-auto justify-center">
<div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
<span className="relative z-10 font-medium tracking-wide">
            View the Science
          </span>
</button>
<button className="group border border-transparent px-6 py-3 flex items-center gap-3 text-sm text-black bg-[#00FFD1] hover:bg-[#00CCA7] transition-colors w-full md:w-auto justify-center shadow-[0_0_15px_rgba(0,255,209,0.2)]">
<iconify-icon icon="solar:lock-keyhole-unlocked-linear" width="16"></iconify-icon>
<span className="font-medium tracking-wide">
            Request a Candidate Teardown
          </span>
</button>
<div className="w-full text-center md:text-right text-[10px] font-mono text-zinc-500 tracking-wider mt-2 md:absolute md:top-full md:mt-3 md:right-0">
          No AI black box. See exactly how the predictive model works. Zero
          integration required.
        </div>
</div>
</footer>


<div className="w-full h-screen pointer-events-none shrink-0"></div>
<div className="relative z-20 bg-[#0B0E14] w-full flex flex-col items-center" id="new-sections">
<section className="w-full max-w-6xl mx-auto py-12 px-6 border-t border-zinc-900/50">
<p className="text-center text-xs font-mono text-zinc-500 uppercase tracking-widest mb-8">
          Integrating seamlessly with the systems you already trust:
        </p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="text-xl font-bold tracking-tighter text-zinc-300">
            greenhouse
          </div>
<div className="text-xl font-bold tracking-tighter text-zinc-300">
            workday
          </div>
<div className="text-xl font-bold tracking-tighter text-zinc-300">
            LEVER
          </div>
<div className="text-xl font-bold tracking-tighter text-zinc-300">
            bambooHR
          </div>
</div>
</section>
<section className="w-full max-w-6xl mx-auto py-24 px-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white text-center mb-6">
          The Cost of Hiring in the Dark.
        </h2>
<p className="text-center text-zinc-400 font-light mb-16 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          Traditional assessments are performative theater. They rely on
          self-reporting and measure how people want to be seen—leaving your
          pipeline completely vulnerable to critical, expensive blind spots.
        </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="border border-zinc-800 bg-[#0F1115] p-6 flex flex-col gap-3 relative overflow-hidden group hover:border-red-900/50 transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-red-900/20 group-hover:bg-red-900/50 transition-colors"></div>
<h4 className="text-lg text-zinc-300 font-medium">
              The "Brilliant Jerk"
            </h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
              Hires with insane technical skills who silently destroy your team
              culture.
            </p>
</div>
<div className="border border-zinc-800 bg-[#0F1115] p-6 flex flex-col gap-3 relative overflow-hidden group hover:border-red-900/50 transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-red-900/20 group-hover:bg-red-900/50 transition-colors"></div>
<h4 className="text-lg text-zinc-300 font-medium">
              The "Rehearsed Answer"
            </h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
              Candidates who ace structured interviews but completely freeze
              under real execution.
            </p>
</div>
<div className="border border-zinc-800 bg-[#0F1115] p-6 flex flex-col gap-3 relative overflow-hidden group hover:border-red-900/50 transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-red-900/20 group-hover:bg-red-900/50 transition-colors"></div>
<h4 className="text-lg text-zinc-300 font-medium">
              The "Diversity Gamble"
            </h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
              Hires made to hit a compliance metric rather than to organically
              perform and thrive.
            </p>
</div>
<div className="border border-zinc-800 bg-[#0F1115] p-6 flex flex-col gap-3 relative overflow-hidden group hover:border-red-900/50 transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-red-900/20 group-hover:bg-red-900/50 transition-colors"></div>
<h4 className="text-lg text-zinc-300 font-medium">The "Culture Rot"</h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
              One misaligned hire that slowly poisons the morale of the entire
              department.
            </p>
</div>
<div className="border border-zinc-800 bg-[#0F1115] p-6 flex flex-col gap-3 relative overflow-hidden group hover:border-red-900/50 transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-red-900/20 group-hover:bg-red-900/50 transition-colors"></div>
<h4 className="text-lg text-zinc-300 font-medium">The "$1.2M Miss"</h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
              The true, compounded cost of a single bad senior hire (according
              to Harvard Business Review).
            </p>
</div>
<div className="border border-zinc-800 bg-[#0F1115] p-6 flex flex-col gap-3 relative overflow-hidden group hover:border-red-900/50 transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-red-900/20 group-hover:bg-red-900/50 transition-colors"></div>
<h4 className="text-lg text-zinc-300 font-medium">
              The "Post-Hire Surprise"
            </h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
              The sinking realization that you hired a completely different
              person than you interviewed.
            </p>
</div>
<div className="border border-zinc-800 bg-[#0F1115] p-6 flex flex-col gap-3 relative overflow-hidden group hover:border-red-900/50 transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-red-900/20 group-hover:bg-red-900/50 transition-colors"></div>
<h4 className="text-lg text-zinc-300 font-medium">
              The "Mini-Me Bias"
            </h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
              Unconscious bias leading your managers to hire clones of
              themselves, not what the role needs.
            </p>
</div>
<div className="border border-zinc-800 bg-[#0F1115] p-6 flex flex-col gap-3 relative overflow-hidden group hover:border-red-900/50 transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-red-900/20 group-hover:bg-red-900/50 transition-colors"></div>
<h4 className="text-lg text-zinc-300 font-medium">The "Fake Test"</h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
              Assessments (like DISC or Big 5) that feel scientific but are just
              easily gamed questionnaires.
            </p>
</div>
<div className="border border-zinc-800 bg-[#0F1115] p-6 flex flex-col gap-3 relative overflow-hidden group hover:border-red-900/50 transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-red-900/20 group-hover:bg-red-900/50 transition-colors"></div>
<h4 className="text-lg text-zinc-300 font-medium">
              The "Empty DEI Report"
            </h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
              Millions spent on unconscious bias training with zero measurable
              change in hiring outcomes.
            </p>
</div>
</div>
</section>
<section className="w-full bg-[#0F1115] py-24 border-y border-zinc-900">
<div className="max-w-6xl mx-auto px-6">
<h2 className="font-mono text-center mb-16 text-3xl md:text-4xl font-medium tracking-tight text-white">
            We don’t ask questions. We measure cognitive telemetry.
          </h2>
<div className="grid md:grid-cols-3 gap-8 relative">
<div className="hidden md:block absolute top-8 left-12 right-12 h-px bg-zinc-800 z-0"></div>
<div className="relative z-10 flex flex-col gap-4">
<div className="w-16 h-16 rounded-full bg-[#0B0E14] border border-zinc-800 flex items-center justify-center text-[#00FFD1] font-mono text-xl shadow-[0_0_15px_rgba(0,255,209,0.1)]">
                01
              </div>
<h3 className="text-lg text-zinc-200 font-medium tracking-tight">
                The Diagnostic Probe
              </h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                We don’t ask for a life story. We present a short, structured,
                simulated pressure scenario. Our system analyzes how their brain
                processes the problem—mapping raw cognitive micro-signatures.
              </p>
</div>
<div className="relative z-10 flex flex-col gap-4">
<div className="w-16 h-16 rounded-full bg-[#0B0E14] border border-zinc-800 flex items-center justify-center text-[#00FFD1] font-mono text-xl shadow-[0_0_15px_rgba(0,255,209,0.1)]">
                02
              </div>
<h3 className="text-lg text-zinc-200 font-medium tracking-tight">
                Stress Isolation
              </h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                Our proprietary model strips away rehearsed interview answers.
                We isolate the candidate's true stress response, measuring
                actual resilience and decision-making under pressure.
              </p>
</div>
<div className="relative z-10 flex flex-col gap-4">
<div className="w-16 h-16 rounded-full bg-[#0B0E14] border border-[#00FFD1]/50 flex items-center justify-center text-[#00FFD1] font-mono text-xl shadow-[0_0_20px_rgba(0,255,209,0.2)]">
                03
              </div>
<h3 className="text-lg text-white font-medium tracking-tight">
                The Predictive Teardown
              </h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                Out comes a Behavioral Blueprint. Not a color. Not a four-letter
                type. A hard, actuarial map of exactly how this individual will
                interact with your team, handle conflict, and drive results.
                Clear, cold, and undeniable.
              </p>
</div>
</div>
</div>
</section>
<section className="w-full max-w-6xl mx-auto py-24 px-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white text-center mb-4">
          Defensible data. Undeniable outcomes.
        </h2>
<p className="text-center text-sm text-zinc-500 font-light mb-16 max-w-2xl mx-auto">
          Your CEO, your Head of DEI, and your Legal team all need proof before
          approving a new system. Here is the science, in a format they respect.
        </p>
<div className="grid md:grid-cols-3 gap-6 mb-12">
<div className="border border-zinc-800 bg-[#0F1115] p-8 flex flex-col items-center text-center gap-2">
<span className="text-4xl font-mono text-[#00FFD1] mb-2">3.2x</span>
<h4 className="text-sm text-zinc-300 font-medium uppercase tracking-wide">
              Higher Retention
            </h4>
<p className="text-xs text-zinc-600">
              For roles using Phenometrix vs. standard interviews.
            </p>
</div>
<div className="border border-zinc-800 bg-[#0F1115] p-8 flex flex-col items-center text-center gap-2">
<span className="text-4xl font-mono text-[#00FFD1] mb-2">40%</span>
<h4 className="text-sm text-zinc-300 font-medium uppercase tracking-wide">
              Bias Reduction
            </h4>
<p className="text-xs text-zinc-600">
              Reduction in bias-related drop-offs during the evaluation phase.
            </p>
</div>
<div className="border border-zinc-800 bg-[#0F1115] p-8 flex flex-col items-center text-center gap-2">
<span className="text-4xl font-mono text-[#00FFD1] mb-2">85%</span>
<h4 className="text-sm text-zinc-300 font-medium uppercase tracking-wide">
              Culture Fit Match
            </h4>
<p className="text-xs text-zinc-600">
              Reduction in subjective 'cultural fit' mis-hires.
            </p>
</div>
</div>
<div className="border border-zinc-800 p-8 md:p-12 relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,rgba(0,255,209,0.05),transparent_50%)]">
<iconify-icon className="text-4xl text-zinc-800 absolute top-8 left-8" icon="solar:quote-right-bold"></iconify-icon>
<p className="text-lg md:text-xl text-zinc-300 font-light italic text-center max-w-3xl mx-auto relative z-10 leading-relaxed">
            "We removed 85% of the 'cultural fit' bias in our first quarter. Our
            VP of People calls it the only tool he trusts. No more
            second-guessing. No more hiring managers fighting me."
          </p>
<div className="flex flex-col items-center mt-8 relative z-10">
<img alt="Sarah Jenkins" className="w-16 h-16 rounded-full border border-zinc-700 mb-4 object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;w=150&amp;h=150"/>
<span className="text-sm text-white font-medium">Head of Talent</span>
<span className="text-xs text-zinc-500 font-mono tracking-widest mt-1">
              FORTUNE 500 FINANCIAL SERVICES FIRM
            </span>
</div>
</div>
</section>
<section className="w-full py-24 border-t border-zinc-900 relative overflow-hidden bg-[#0B0E14]">
<div className="absolute inset-0 pointer-events-none z-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at center, #00FFD1 0.5px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Ready to stop guessing and start predicting?
          </h2>
<p className="text-zinc-400 font-light mb-10 max-w-xl">
            The first ten candidate reports are on us. No credit card. No sales
            call. No implementation meeting. Just the truth—delivered to your
            inbox in a 2-minute video that shows you exactly how the telemetry
            works.
          </p>
<input className="bg-black/50 border border-zinc-700 text-white px-4 py-3 w-full max-w-sm mb-6 outline-none focus:border-[#00FFD1] transition-colors rounded-none placeholder:text-zinc-600 text-sm shadow-inner" placeholder="Enter your work email" type="email"/>
<button className="group relative border border-transparent px-8 py-4 flex items-center gap-3 text-base text-black bg-[#00FFD1] hover:bg-[#00CCA7] transition-all shadow-[0_0_20px_rgba(0,255,209,0.3)] hover:shadow-[0_0_30px_rgba(0,255,209,0.5)]">
<iconify-icon icon="solar:bolt-linear" width="20"></iconify-icon>
<span className="font-medium tracking-wide">
              Run a Sample Candidate
            </span>
</button>
<span className="text-xs font-mono text-zinc-500 mt-4 tracking-widest uppercase">
            No sales call required. We will show you how it works on your own
            screen. Cancel anytime.
          </span>
</div>
</section>
<section className="w-full bg-[#0B0E14] border-t border-zinc-900 py-24 px-6 relative z-10">
<div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
<h2 className="text-3xl font-medium text-white tracking-tight">
            The Unbreakable Guarantee.
          </h2>
<p className="text-zinc-400 font-light text-base max-w-2xl leading-relaxed">
            This tool is built to make you look like a genius. If three months
            in, your hiring managers are not asking “Where did you find
            them?”—we will refund the entire year. No questions asked. Your
            reputation is our only metric.
          </p>
<div className="flex flex-wrap justify-center gap-8 mt-12 text-xs font-mono text-zinc-600 uppercase tracking-widest">
<a className="hover:text-[#00FFD1] transition-colors flex flex-col items-center gap-1.5" href="#">
              The Science
              <span className="text-[10px] text-zinc-600 normal-case tracking-normal">
                (Full methodology white paper)
              </span>
</a>
<a className="hover:text-[#00FFD1] transition-colors flex flex-col items-center gap-1.5" href="#">
              The Methodology
              <span className="text-[10px] text-zinc-600 normal-case tracking-normal">
                (Peer-reviewed validation study)
              </span>
</a>
<a className="hover:text-[#00FFD1] transition-colors flex flex-col items-center gap-1.5" href="#">
              Our Data Promise
              <span className="text-[10px] text-zinc-600 normal-case tracking-normal">
                (No candidate data sold or shared)
              </span>
</a>
<a className="hover:text-[#00FFD1] transition-colors flex flex-col items-center gap-1.5" href="#">
              Privacy
              <span className="text-[10px] text-zinc-600 normal-case tracking-normal">
                (SOC 2 Type II compliant)
              </span>
</a>
</div>
</div>
</section>
</div>

    </>
  );
}
