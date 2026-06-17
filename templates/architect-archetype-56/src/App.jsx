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
      

<header className="border-b border-[#E2E8F0] py-6 relative z-10 bg-white">
<div className="max-w-[680px] mx-auto px-5 flex justify-between items-center">
<div className="font-[Montserrat] font-semibold text-lg tracking-tighter uppercase text-[#141414]">
          Compounding Lab
        </div>
</div>
</header>
<main className="w-full overflow-hidden">

<section className="max-w-[680px] mx-auto px-5 pt-12 pb-12">
<div className="bg-[#1A202C] text-white p-8 rounded-[4px] shadow-sm relative overflow-hidden">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 mb-6">
<iconify-icon className="text-[#81E6D9] text-base" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[#81E6D9] font-[Montserrat] text-xs font-semibold uppercase tracking-widest">
                Your Archetype is Confirmed.
              </span>
</div>
<h1 className="font-[Montserrat] text-4xl font-semibold tracking-tight mb-4 text-white leading-tight">
              Your Archetype:
              <br/>
              The Architect
            </h1>
<p className="text-base text-[#E2E8F0] mb-8 font-sans leading-relaxed max-w-lg">
              The diagnostic indicates a high-leverage builder profile. You
              aren't lazy, unmotivated, or lacking discipline. You've simply
              been running the
              <strong className="text-white font-semibold">wrong software</strong>
              . You are Wired Different, and forcing standard operating
              procedures will only result in cognitive friction.
            </p>
</div>
</div>
</section>

<section className="max-w-[680px] mx-auto px-5 pb-12 space-y-8">
<div className="border-l-2 border-[#1A202C] pl-4 mb-8">
<h2 className="font-[Montserrat] text-2xl font-semibold tracking-tight text-[#141414]">
            Your AXIS Profile
          </h2>
<p className="text-[#718096] text-base leading-relaxed mt-2">
            Based on your inputs, your cognitive load distributes unevenly
            across the four primary vectors. Your dominant pattern is clear.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
<div className="flex flex-col items-center">
<span className="font-[Montserrat] text-xs font-semibold uppercase tracking-widest text-[#718096] mb-4">
              AXIS Distribution
            </span>
<div className="relative w-full aspect-square max-w-[240px] border border-[#1E232A] bg-[#0A0C0F] flex items-center justify-center p-4">
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 100">
<polygon fill="none" points="50,25 75,50 50,75 25,50" stroke="#2A2F38" stroke-dasharray="1,1" strokeWidth="0.5"></polygon>
<polygon fill="none" points="50,10 90,50 50,90 10,50" stroke="#2A2F38" strokeWidth="0.5"></polygon>
<line stroke="#2A2F38" strokeWidth="0.5" x1="50" x2="50" y1="10" y2="90"></line>
<line stroke="#2A2F38" strokeWidth="0.5" x1="10" x2="90" y1="50" y2="50"></line>
<polygon fill="rgba(91, 124, 141, 0.3)" points="50,20 85,50 50,65 30,50" stroke="#5B7C8D" strokeWidth="1.5"></polygon>
<text className="text-[5px] font-mono fill-[#E6E8EB]" text-anchor="middle" x="50" y="6">
                  Anchor
                </text>
<text className="text-[5px] font-mono fill-[#E6E8EB]" text-anchor="start" x="93" y="51.5">
                  Systemize
                </text>
<text className="text-[5px] font-mono fill-[#E6E8EB]" text-anchor="middle" x="50" y="97">
                  eXert
                </text>
<text className="text-[5px] font-mono fill-[#E6E8EB]" text-anchor="end" x="7" y="51.5">
                  Invest
                </text>
</svg>
</div>
</div>
<div className="flex flex-col justify-center space-y-6">
<div className="space-y-1">
<div className="flex justify-between items-end">
<span className="font-[Montserrat] text-xs font-semibold uppercase tracking-widest text-[#141414]">
                  Anchor
                </span>
<span className="font-mono text-xs text-[#718096]">
                  {anchor_val}
                </span>
</div>
<div className="h-[4px] w-full bg-[#EDF2F7] relative">
<div className="absolute top-1/2 -translate-y-1/2 left-[85%] w-2 h-4 bg-[#1A202C]"></div>
</div>
<div className="text-[10px] text-[#A0AEC0] font-mono">
                Higher than {anchor_percentile}% of profiles
              </div>
</div>
<div className="space-y-1">
<div className="flex justify-between items-end">
<span className="font-[Montserrat] text-xs font-semibold uppercase tracking-widest text-[#141414]">
                  eXert
                </span>
<span className="font-mono text-xs text-[#718096]">
                  {exert_val}
                </span>
</div>
<div className="h-[4px] w-full bg-[#EDF2F7] relative">
<div className="absolute top-1/2 -translate-y-1/2 left-[30%] w-2 h-4 bg-[#1A202C]"></div>
</div>
<div className="text-[10px] text-[#A0AEC0] font-mono">
                Higher than {exert_percentile}% of profiles
              </div>
</div>
<div className="space-y-1">
<div className="flex justify-between items-end">
<span className="font-[Montserrat] text-xs font-semibold uppercase tracking-widest text-[#141414]">
                  Invest
                </span>
<span className="font-mono text-xs text-[#718096]">
                  {invest_val}
                </span>
</div>
<div className="h-[4px] w-full bg-[#EDF2F7] relative">
<div className="absolute top-1/2 -translate-y-1/2 left-[60%] w-2 h-4 bg-[#1A202C]"></div>
</div>
<div className="text-[10px] text-[#A0AEC0] font-mono">
                Higher than {invest_percentile}% of profiles
              </div>
</div>
<div className="space-y-1">
<div className="flex justify-between items-end">
<span className="font-[Montserrat] text-xs font-semibold uppercase tracking-widest text-[#141414]">
                  Systemize
                </span>
<span className="font-mono text-xs text-[#718096]">
                  {systemize_val}
                </span>
</div>
<div className="h-[4px] w-full bg-[#EDF2F7] relative">
<div className="absolute top-1/2 -translate-y-1/2 left-[95%] w-2 h-4 bg-[#4299E1]"></div>
</div>
<div className="text-[10px] text-[#4299E1] font-mono font-semibold">
                Higher than {systemize_percentile}% of profiles
              </div>
</div>
</div>
</div>
<button className="w-full bg-[#4299E1] text-white py-4 px-6 rounded-[3px] font-[Montserrat] font-semibold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors hover:bg-[#3182CE] focus:ring-4 focus:ring-[#81E6D9] outline-none group">
          Read Your Architect Letter — $17
          <iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</section>
<hr className="border-t border-[#E2E8F0] max-w-[680px] mx-auto my-4"/>

<section className="max-w-[680px] mx-auto px-5 pb-12 pt-12">
<h2 className="font-[Montserrat] text-3xl font-semibold tracking-tight mb-12 text-[#141414]">
          Inside The Architect Letter
        </h2>
<div className="space-y-16">
<div className="text-[#2D3748] text-base leading-relaxed border-l-2 border-[#E2E8F0] pl-4">
            The letter maps your specific Architect pattern across all four AXIS
            dimensions and shows you exactly where your compounding stops and
            why.
          </div>
<div className="space-y-8">
<h3 className="font-[Montserrat] text-lg font-semibold text-[#141414]">
              The Refinement Trap
            </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="border border-[#E2E8F0] bg-[#F7FAFC] p-6 opacity-75">
<div className="font-[Montserrat] text-xs font-semibold uppercase tracking-widest text-[#718096] mb-6">
                  Current Pattern
                </div>
<div className="flex flex-col items-center space-y-3 font-mono text-xs text-center text-[#4A5568]">
<div className="border border-[#A0AEC0] px-3 py-2 w-full bg-white">
                    Perfect System Design
                  </div>
<iconify-icon className="text-[#A0AEC0]" icon="solar:arrow-down-linear"></iconify-icon>
<div className="border border-[#A0AEC0] px-3 py-2 w-full bg-white">
                    Endless Refinement
                  </div>
<iconify-icon className="text-[#A0AEC0]" icon="solar:arrow-down-linear"></iconify-icon>
<div className="border border-[#A0AEC0] px-3 py-2 w-full bg-white text-[#E53E3E]">
                    Never Ships
                  </div>
<iconify-icon className="text-[#A0AEC0]" icon="solar:arrow-up-linear"></iconify-icon>
<div className="text-[10px] uppercase text-[#718096]">
                    Concludes "Needs Better System"
                  </div>
</div>
</div>
<div className="border border-[#1A202C] bg-white p-6 shadow-sm">
<div className="font-[Montserrat] text-xs font-semibold uppercase tracking-widest text-[#1A202C] mb-6">
                  After The Letter
                </div>
<div className="flex flex-col items-center space-y-3 font-mono text-xs text-center text-[#1A202C]">
<div className="border border-[#1A202C] px-3 py-2 w-full bg-[#F7FAFC]">
                    System Design
                  </div>
<iconify-icon icon="solar:arrow-down-linear"></iconify-icon>
<div className="border border-[#1A202C] px-3 py-2 w-full bg-white border-dashed text-[#4299E1] font-semibold">
                    [ Interrupt Injected ]
                  </div>
<iconify-icon icon="solar:arrow-down-linear"></iconify-icon>
<div className="border border-[#1A202C] px-3 py-2 w-full bg-[#1A202C] text-white">
                    Shipped Output
                  </div>
<iconify-icon className="text-xl text-[#4299E1] mt-2" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="space-y-6 pt-8 border-t border-[#E2E8F0]">
<h3 className="font-[Montserrat] text-lg font-semibold text-[#141414]">
              Trait Inversion
            </h3>
<div className="space-y-4 font-mono text-xs">
<div className="flex items-center gap-2">
<div className="flex-1 text-right text-[#4A5568]">
                  Systems thinking
                </div>
<div className="w-1/2 flex items-center justify-center gap-1">
<div className="h-2 w-full bg-[#A0AEC0]"></div>
<div className="w-px h-4 bg-[#1A202C]"></div>
<div className="h-2 w-full bg-[#E53E3E]"></div>
</div>
<div className="flex-1 text-left text-[#E53E3E]">
                  Builds systems instead of shipping
                </div>
</div>
<div className="flex items-center gap-2">
<div className="flex-1 text-right text-[#4A5568]">
                  High standards
                </div>
<div className="w-1/2 flex items-center justify-center gap-1">
<div className="h-2 w-3/4 bg-[#A0AEC0]"></div>
<div className="w-px h-4 bg-[#1A202C]"></div>
<div className="h-2 w-3/4 bg-[#E53E3E]"></div>
</div>
<div className="flex-1 text-left text-[#E53E3E]">
                  Friction-induced paralysis
                </div>
</div>
</div>
</div>
<div className="space-y-6 pt-8 border-t border-[#E2E8F0]">
<h3 className="font-[Montserrat] text-lg font-semibold text-[#141414]">
              The Cost of the Pattern
            </h3>
<div className="border border-[#E2E8F0] bg-[#F7FAFC] h-[200px] relative p-4 flex items-end">
<div className="absolute left-2 top-2 bottom-2 flex flex-col justify-between text-[10px] font-mono text-[#A0AEC0]">
<span>High</span>
<span>Low</span>
</div>
<svg className="w-full h-full overflow-visible ml-6" viewbox="0 0 100 50">
<path d="M0,45 Q50,40 100,5" fill="none" stroke="#A0AEC0" stroke-dasharray="2,2" strokeWidth="1"></path>
<path d="M0,45 Q50,45 100,45" fill="none" stroke="#1A202C" strokeWidth="1.5"></path>
<path d="M0,45 Q50,40 100,5 L100,45 Q50,45 0,45 Z" fill="rgba(229, 62, 62, 0.1)"></path>
<text className="text-[5px] font-mono fill-[#A0AEC0]" x="80" y="15">
                  Projects Started
                </text>
<text className="text-[5px] font-mono fill-[#1A202C]" x="80" y="42">
                  Projects Finished
                </text>
<text className="text-[6px] font-mono fill-[#E53E3E] font-semibold" text-anchor="middle" x="50" y="28">
                  Compounding Cost
                </text>
</svg>
</div>
</div>
<div className="space-y-6 pt-8 border-t border-[#E2E8F0]">
<h3 className="font-[Montserrat] text-lg font-semibold text-[#141414]">
              Taxonomy Placement
            </h3>
<div className="border border-[#1E232A] bg-[#0A0C0F] aspect-square max-w-[300px] mx-auto relative p-6 flex items-center justify-center">
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 100">
<line stroke="#2A2F38" strokeWidth="0.5" x1="50" x2="50" y1="10" y2="90"></line>
<line stroke="#2A2F38" strokeWidth="0.5" x1="10" x2="90" y1="50" y2="50"></line>
<text className="text-[4px] font-mono fill-[#E6E8EB]" text-anchor="middle" x="50" y="98">
                  Low Systemize → High Systemize
                </text>
<text className="text-[4px] font-mono fill-[#E6E8EB]" text-anchor="middle" transform="rotate(-90)" x="-50" y="5">
                  High eXert → Low eXert
                </text>
<circle cx="25" cy="25" fill="#3A4048" r="1.5"></circle>
<circle cx="65" cy="35" fill="#3A4048" r="1.5"></circle>
<circle cx="35" cy="65" fill="#3A4048" r="1.5"></circle>
<circle cx="45" cy="45" fill="#3A4048" r="1.5"></circle>
<circle cx="80" cy="75" fill="#5B7C8D" r="2.5"></circle>
<text className="text-[4px] font-mono fill-[#E6E8EB]" text-anchor="middle" x="80" y="82">
                  The Architect
                </text>
</svg>
</div>
</div>
</div>
</section>

<section className="bg-[#F7FAFC] py-16 border-y border-[#E2E8F0]">
<div className="max-w-[680px] mx-auto px-5">
<h2 className="font-[Montserrat] text-xs font-semibold uppercase tracking-widest text-[#718096] mb-8 text-center">
            Why This Exists
          </h2>
<div className="bg-white border border-[#E2E8F0] p-8 md:p-10 shadow-sm relative">
<iconify-icon className="absolute top-8 right-8 text-2xl text-[#E2E8F0]" icon="solar:pen-new-square-linear"></iconify-icon>
<p className="text-[#1A202C] text-base leading-relaxed mb-6 font-serif">
              I'm not writing this from a podium. For years the pattern was the
              same: build something real, get it to the edge of paying off, then
              abandon it to chase the next start — and start the next one from
              the same floor. The pile of dead projects got long enough that I
              stopped counting, and somewhere in it I spent $31,000 learning a
              lesson that wouldn't stick.
            </p>
<p className="text-[#1A202C] text-base leading-relaxed mb-8 font-serif">
              It was never discipline; I was running the wrong software for the
              way I'm wired, and the day I could name that exact pattern was the
              day it lost its grip. I wrote your letter so you can name yours in
              an afternoon — not in the years it cost me. By the last page
              you'll have your pattern named, in your own words.
            </p>
<div className="flex items-center gap-3 pt-6 border-t border-[#E2E8F0]">
<div className="w-10 h-10 bg-[#1A202C] rounded-[2px] flex items-center justify-center text-white font-mono text-sm">
                MG
              </div>
<div>
<div className="font-[Montserrat] text-sm font-semibold text-[#141414]">
                  Michael G.
                </div>
<div className="font-[Montserrat] text-xs text-[#718096]">
                  Founder — Compounding Lab
                </div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[680px] mx-auto px-5 pb-24 pt-16">
<div className="max-w-[680px] mx-auto px-5 pb-24 pt-16 space-y-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-[#E2E8F0] pb-12">
<div className="flex flex-col items-center justify-center">
<h4 className="font-[Montserrat] text-xs font-semibold uppercase tracking-widest text-[#718096] mb-6">
                Effort Allocation
              </h4>
<div className="w-32 h-32 rounded-full border-[16px] border-[#1A202C] relative">
<div className="absolute inset-0 border-[16px] border-[#4299E1] rounded-full" style={{clipPath: 'polygon(50% 50%, 100% 0, 100% 20%, 50% 50%)'}}></div>
</div>
<div className="flex gap-4 mt-6 text-[10px] font-mono">
<div className="flex items-center gap-1">
<div className="w-2 h-2 bg-[#1A202C]"></div>
                  Designing/Refining
                </div>
<div className="flex items-center gap-1">
<div className="w-2 h-2 bg-[#4299E1]"></div>
                  Shipped Output
                </div>
</div>
</div>
<div className="flex flex-col justify-center">
<h4 className="font-[Montserrat] text-xs font-semibold uppercase tracking-widest text-[#718096] mb-6">
                Intervention Timeline
              </h4>
<div className="space-y-4 font-mono text-xs">
<div className="flex gap-4 items-start">
<div className="w-12 text-[#A0AEC0]">Day 1</div>
<div className="flex-1 pb-4 border-l-2 border-[#1A202C] pl-4 relative">
<div className="absolute -left-[5px] top-1 w-2 h-2 bg-[#1A202C]"></div>
                    Name the pattern
                  </div>
</div>
<div className="flex gap-4 items-start">
<div className="w-12 text-[#A0AEC0]">Week 1</div>
<div className="flex-1 pb-4 border-l-2 border-[#1A202C] pl-4 relative">
<div className="absolute -left-[5px] top-1 w-2 h-2 bg-[#1A202C]"></div>
                    Install the interrupt
                  </div>
</div>
<div className="flex gap-4 items-start">
<div className="w-12 text-[#4299E1] font-semibold">Week 4</div>
<div className="flex-1 pl-4 relative">
<div className="absolute -left-[5px] top-1 w-2 h-2 bg-[#4299E1]"></div>
<span className="text-[#1A202C] font-semibold">
                      First shipped output
                    </span>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-[#E2E8F0] pb-12">
<div>
<h4 className="font-[Montserrat] text-xs font-semibold uppercase tracking-widest text-[#718096] mb-6">
                Synthesis Engine
              </h4>
<div className="flex flex-col gap-2 font-mono text-[10px] text-center">
<div className="border border-[#E2E8F0] py-3 bg-[#F7FAFC] text-[#718096]">
                  [Your 4 AXIS Scores]
                </div>
<iconify-icon className="mx-auto text-[#A0AEC0]" icon="solar:arrow-down-linear"></iconify-icon>
<div className="border border-[#1A202C] py-3 bg-white font-semibold">
                  [Pattern Recognition]
                </div>
<iconify-icon className="mx-auto text-[#A0AEC0]" icon="solar:arrow-down-linear"></iconify-icon>
<div className="border border-[#4299E1] py-3 bg-[#4299E1] text-white">
                  [Your Architect Letter]
                </div>
</div>
</div>
<div className="relative bg-[#1A202C] p-4 rounded-sm shadow-md overflow-hidden h-[180px] text-[8px] font-serif text-[#A0AEC0]">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A202C] z-10"></div>
<div className="w-1/3 h-2 bg-[#4299E1] mb-4"></div>
<div className="w-full h-1 bg-[#2D3748] mb-1"></div>
<div className="w-5/6 h-1 bg-[#2D3748] mb-4"></div>
<div className="w-full h-1 bg-[#2D3748] mb-1"></div>
<div className="w-full h-1 bg-[#2D3748] mb-1"></div>
<div className="w-4/5 h-1 bg-[#2D3748] mb-4"></div>
<div className="absolute top-4 right-4 z-20 flex items-center gap-2">
<div className="text-[#81E6D9] font-mono text-[8px]">
                  Written for your exact AXIS profile
                </div>
<div className="w-4 h-px bg-[#81E6D9]"></div>
</div>
<div className="absolute top-12 right-12 z-20 flex items-center gap-2">
<div className="text-[#81E6D9] font-mono text-[8px]">
                  Names specific behavioral loop
                </div>
<div className="w-4 h-px bg-[#81E6D9]"></div>
</div>
</div>
</div>
<div className="max-w-md mx-auto mb-12">
<h4 className="font-[Montserrat] text-xs font-semibold uppercase tracking-widest text-[#718096] mb-6 text-center">
              Inside Your Letter
            </h4>
<div className="space-y-3 font-mono text-xs">
<div className="flex items-center gap-3 p-3 border border-[#E2E8F0] bg-white">
<iconify-icon className="text-[#4299E1] text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Why you systemize before you ship</span>
</div>
<div className="flex items-center gap-3 p-3 border border-[#E2E8F0] bg-white">
<iconify-icon className="text-[#4299E1] text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>The one-line pattern interrupt</span>
</div>
<div className="flex items-center gap-3 p-3 border border-[#E2E8F0] bg-[#F7FAFC] text-[#A0AEC0] select-none">
<iconify-icon className="text-[#A0AEC0] text-lg" icon="solar:lock-linear"></iconify-icon>
<span className="blur-sm opacity-60">
                  The 3 triggers that send you back into design mode
                </span>
</div>
<div className="flex items-center gap-3 p-3 border border-[#E2E8F0] bg-[#F7FAFC] text-[#A0AEC0] select-none">
<iconify-icon className="text-[#A0AEC0] text-lg" icon="solar:lock-linear"></iconify-icon>
<span className="blur-sm opacity-60">
                  How to pivot from 'planning' to 'output'
                </span>
</div>
<div className="flex items-center gap-3 p-3 border border-[#E2E8F0] bg-[#F7FAFC] text-[#A0AEC0] select-none">
<iconify-icon className="text-[#A0AEC0] text-lg" icon="solar:lock-linear"></iconify-icon>
<span className="blur-sm opacity-60">
                  Mapping your unique leverage point
                </span>
</div>
</div>
</div>
<div className="border border-[#E2E8F0] rounded-[4px] p-8 md:p-10 text-center relative overflow-hidden bg-white max-w-lg mx-auto">
<div className="absolute top-0 left-0 w-full h-1 bg-[#1A202C]"></div>
<h2 className="font-[Montserrat] text-2xl md:text-3xl font-semibold tracking-tight text-[#141414] mb-3">
              Access Your Letter
            </h2>
<p className="text-[#718096] text-base mb-8">
              Secure your deep dive letter and full Architect pattern analysis.
            </p>
<div className="text-left mb-8">
<label className="block font-[Montserrat] text-xs font-semibold uppercase tracking-widest text-[#718096] mb-2">
                Delivery Format
              </label>
<div className="relative group">
<select className="w-full appearance-none bg-[#FFFFFF] border border-[#E2E8F0] rounded-[3px] py-3 pl-4 pr-10 font-sans text-base text-[#141414] focus:outline-none focus:ring-[3px] focus:ring-[#E2E8F0] focus:border-[#A0AEC0] cursor-pointer transition-shadow hover:border-[#A0AEC0]">
<option>Digital PDF + Private Web Portal</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-[#718096] group-hover:text-[#141414] transition-colors">
<svg fill="none" height="8" viewbox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
<a className="w-full bg-transparent border-2 border-[#1A202C] text-[#1A202C] hover:bg-[#1A202C] hover:text-white transition-colors py-4 px-6 rounded-[3px] font-[Montserrat] font-semibold uppercase tracking-widest flex items-center justify-center gap-2 outline-none" href="https://members.thecompoundingaxis.com">
              Access Your Letter
            </a>
</div>
</div>
</section>
</main>

<footer className="border-t border-[#E2E8F0] py-12 bg-[#FFFFFF]">
<div className="max-w-[680px] mx-auto px-5">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
<div className="font-[Montserrat] font-semibold text-sm tracking-tighter uppercase text-[#141414] flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
            Compounding Lab
          </div>
<div className="flex flex-wrap justify-center gap-6 font-[Montserrat] text-xs font-semibold uppercase tracking-widest text-[#718096]">
<a className="hover:text-[#141414] transition-colors" href="#">
              Manifesto
            </a>
<a className="hover:text-[#141414] transition-colors" href="#">Terms</a>
<a className="hover:text-[#141414] transition-colors" href="#">
              Privacy
            </a>
</div>
</div>
<div className="w-full h-px bg-[#E2E8F0] mb-8"></div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#A0AEC0] font-sans">
<p>© 2026 PolymathFinishLine. All rights reserved.</p>
<p className="flex items-center gap-1 font-[Montserrat] font-medium tracking-wide">
            Built for those
            <strong className="font-semibold text-[#718096]">
              Wired Different
            </strong>
</p>
</div>
</div>
</footer>

    </>
  );
}
