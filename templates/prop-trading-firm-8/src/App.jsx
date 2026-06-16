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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Initialize Lucide icons
      lucide.createIcons();

      // Reveal-on-scroll animations (subtle)
      (function () {
        const targets = Array.from(
          new Set([
            ...document.querySelectorAll('.reveal'),
            ...document.querySelectorAll('section[data-element-id]')
          ])
        );

        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                e.target.classList.add('is-visible');
                io.unobserve(e.target);
              }
            });
          },
          { threshold: 0.12 }
        );

        targets.forEach((el) => {
          if (!el.classList.contains('reveal')) el.classList.add('reveal');
          io.observe(el);
        });
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="pointer-events-none fixed inset-0 noise-overlay z-0"></div>

<div className="bg-gradient-to-r from-emerald-600/20 via-emerald-900/40 to-emerald-600/20 text-center py-3 text-sm font-medium text-emerald-200 border-b border-white/10 backdrop-blur-md">
      Haven't purchased yet? Use code HELLO &amp; get 20% OFF now on your first
      purchase!
    </div>

<header className="sticky top-0 z-50 backdrop-blur-3xl bg-[#000806]/70 border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
<div className="max-w-[1360px] mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-9 h-9 bg-gradient-to-br from-white to-gray-200 rounded-xl flex items-center justify-center text-[#011c15] font-bold text-lg shadow-sm">
            P
          </div>
<span className="text-xl font-medium tracking-tight">
            FundingPips
            <sup className="text-xs">®</sup>
</span>
</div>
<nav className="hidden lg:flex items-center gap-8 text-base text-[#8f9ab5]">
<a className="text-white hover:text-white transition-colors" href="#">
            Home
          </a>
<a className="hover:text-white transition-colors" href="#">
            Trading Objectives
          </a>
<a className="flex items-center gap-1 hover:text-white transition-colors" href="#">
            About us
            <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</a>
<a className="hover:text-white transition-colors" href="#">
            Affiliate Program
          </a>
<a className="hover:text-white transition-colors" href="#">FAQ</a>
</nav>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-[#8f9ab5] hover:text-white transition-colors" href="#">
            Sign up
          </a>
<a className="bg-white/5 border border-white/5 border-t-white/10 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-all shadow-[0_4px_10px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]" href="#">
            Dashboard
          </a>
<button className="flex items-center gap-2 text-base text-[#8f9ab5] hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="globe" strokeWidth="1.5"></i>
            English
          </button>
</div>
</div>
</header>
<main className="relative z-10">

<section className="relative pt-32 pb-24 px-6 overflow-hidden flex flex-col items-center text-center shimmer reveal">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/30 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse-glow"></div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] pointer-events-none mix-blend-overlay"></div>
<h1 className="text-6xl md:text-[80px] lg:text-[120px] font-medium tracking-tighter leading-[1.05] mb-8 relative z-10 max-w-5xl drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          Built by
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50">
            traders
          </span>
<br/>
<span className="flex items-center justify-center gap-3 md:gap-6 mt-4">
<div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-gradient-to-b from-emerald-500/20 to-emerald-500/5 flex items-center justify-center border border-emerald-400/30 border-t-emerald-300/50 backdrop-blur-2xl shadow-[0_10px_40px_rgba(16,185,129,0.4),inset_0_2px_10px_rgba(255,255,255,0.2)]">
<i className="w-6 h-6 md:w-10 md:h-10 text-emerald-400" data-lucide="arrow-right" strokeWidth="2.5"></i>
</div>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">
              for traders.
            </span>
</span>
</h1>
<p className="text-lg md:text-2xl text-[#8f9ab5] max-w-3xl mb-12 relative z-10 font-light leading-relaxed">
          Join over 2,000,000 traders in the world's leading firm. Trade in a
          fully simulated environment and earn up to 100% rewards.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
<a className="bg-gradient-to-b from-emerald-400 to-emerald-600 text-white px-10 py-4 rounded-full text-base font-medium hover:from-emerald-300 hover:to-emerald-500 transition-all duration-300 w-full sm:w-auto shadow-[0_10px_40px_-10px_rgba(16,185,129,0.8),inset_0_1px_0_rgba(255,255,255,0.4)] border border-emerald-400/50 hover:shadow-[0_20px_50px_-10px_rgba(16,185,129,1)] active:scale-[0.99]" href="#">
            Buy Evaluation
          </a>
<a className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/10 border-t-white/20 text-white px-10 py-4 rounded-full text-base font-medium hover:bg-white/10 transition-all duration-300 w-full sm:w-auto shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] hover:border-white/30 active:scale-[0.99]" href="#">
            Join Competition
          </a>
</div>
</section>



<section className="max-w-[1360px] mx-auto px-6 -mt-10 mb-10 reveal" data-element-id="live-ticker">
<div className="glass rounded-[2rem] p-4 md:p-5 backdrop-blur-2xl border border-white/10 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/10 opacity-70"></div>
<div className="relative flex items-center gap-4">
<div className="flex items-center gap-2 shrink-0">
<span className="inline-flex items-center gap-2 text-sm text-emerald-200 font-medium">
<span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.7)]"></span>
                Live
              </span>
<span className="text-sm text-[#8f9ab5] hidden md:inline">
                Prop firm conditions • fast payouts • strict risk
              </span>
</div>
<div className="flex-1 overflow-hidden">
<div className="flex gap-3 whitespace-nowrap animate-[marquee_22s_linear_infinite]" style={{willChange: 'transform'}}>
<span className="text-sm text-white/90">Student 8% target</span>
<span className="text-sm text-[#8f9ab5]">•</span>
<span className="text-sm text-white/90">
                  Practitioner 5% target
                </span>
<span className="text-sm text-[#8f9ab5]">•</span>
<span className="text-sm text-white/90">Max daily loss 5%</span>
<span className="text-sm text-[#8f9ab5]">•</span>
<span className="text-sm text-white/90">Max loss 10%</span>
<span className="text-sm text-[#8f9ab5]">•</span>
<span className="text-sm text-white/90">Rewards up to 100%</span>
<span className="text-sm text-[#8f9ab5]">•</span>
<span className="text-sm text-white/90">On-demand 90%</span>
<span className="text-sm text-[#8f9ab5]">•</span>
<span className="text-sm text-white/90">Monthly 100%</span>
<span className="text-sm text-[#8f9ab5]">•</span>
<span className="text-sm text-white/90">Zero reward denials</span>
</div>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-emerald-200 hover:text-white transition-colors px-4 py-2 rounded-full bg-white/5 border border-white/10" href="#">
              View programs
              <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>
<section className="max-w-[1360px] mx-auto px-6 mb-32 reveal">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass rounded-3xl p-8 flex flex-col justify-end min-h-[200px] hover:border-emerald-500/50 transition-all group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<p className="text-xl text-[#8f9ab5] group-hover:text-white transition-colors relative z-10 font-medium tracking-tight">
              and cTrader.
            </p>
</div>
<div className="glass rounded-3xl p-8 flex flex-col justify-end min-h-[200px] hover:border-emerald-500/50 transition-all group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<p className="text-xl text-[#8f9ab5] group-hover:text-white transition-colors relative z-10 font-medium tracking-tight">
              weekly, monthly or on demand.
            </p>
</div>
<div className="glass rounded-3xl p-8 flex flex-col justify-end min-h-[200px] hover:border-emerald-500/50 transition-all group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<p className="text-xl text-[#8f9ab5] group-hover:text-white transition-colors relative z-10 font-medium tracking-tight">
              simulated capital.
            </p>
</div>
</div>
</section>

<section className="max-w-[1360px] mx-auto px-6 mb-20 reveal" data-element-id="trust-bar">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="glass rounded-2xl p-5 flex items-center gap-3 backdrop-blur-xl">
<div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center">
<i className="w-5 h-5 text-emerald-300" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm font-medium tracking-tight">Rule clarity</div>
<div className="text-xs text-[#8f9ab5]">No surprises, no gotchas</div>
</div>
</div>
<div className="glass rounded-2xl p-5 flex items-center gap-3 backdrop-blur-xl">
<div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center">
<i className="w-5 h-5 text-emerald-300" data-lucide="timer" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm font-medium tracking-tight">Fast cycles</div>
<div className="text-xs text-[#8f9ab5]">Weekly → monthly</div>
</div>
</div>
<div className="glass rounded-2xl p-5 flex items-center gap-3 backdrop-blur-xl">
<div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center">
<i className="w-5 h-5 text-emerald-300" data-lucide="banknote" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm font-medium tracking-tight">Up to 100%</div>
<div className="text-xs text-[#8f9ab5]">Reward split options</div>
</div>
</div>
<div className="glass rounded-2xl p-5 flex items-center gap-3 backdrop-blur-xl">
<div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center">
<i className="w-5 h-5 text-emerald-300" data-lucide="globe-2" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm font-medium tracking-tight">
                195+ countries
              </div>
<div className="text-xs text-[#8f9ab5]">Global trader base</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1360px] mx-auto px-6 mb-32 reveal" data-element-id="how-it-works">
<div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-10">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
              A modern evaluation flow
            </h2>
<p className="text-lg text-[#8f9ab5]">
              A clean path from evaluation to mastery—built for serious traders
              and strict risk control.
            </p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-emerald-200 hover:text-white transition-colors px-5 py-3 rounded-full bg-white/5 border border-white/10" href="#">
            Explore rules
            <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-60"></div>
<div className="relative">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-white" data-lucide="shopping-cart" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">
                1) Choose evaluation
              </h3>
<p className="text-base text-[#8f9ab5] leading-relaxed">
                Pick your account size, platform, and reward cycle. Keep it
                simple.
              </p>
</div>
</div>
<div className="glass rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-60"></div>
<div className="relative">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-white" data-lucide="target" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">
                2) Hit objectives
              </h3>
<p className="text-base text-[#8f9ab5] leading-relaxed">
                Trade with discipline. Targets, drawdown limits, and minimum
                days—clear and enforced.
              </p>
</div>
</div>
<div className="glass rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-60"></div>
<div className="relative">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-white" data-lucide="badge-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">
                3) Get rewarded
              </h3>
<p className="text-base text-[#8f9ab5] leading-relaxed">
                Graduate to the next stage and unlock reward splits up to
                100%—choose your schedule.
              </p>
</div>
</div>
</div>
</section>

<section className="max-w-[1360px] mx-auto px-6 mb-32 reveal" data-element-id="edge">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
<div className="glass rounded-[2rem] p-10 backdrop-blur-2xl relative overflow-hidden">
<div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/15 blur-[70px] rounded-full"></div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-4">
              Prop-firm vibe, upgraded
            </h2>
<p className="text-lg text-[#8f9ab5] mb-8">
              Clean glass UI, high-contrast hierarchy, and subtle
              motion—designed to feel premium without chasing gimmicks.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-2xl p-5 bg-black/25 border border-white/10">
<div className="flex items-center gap-2 text-sm text-emerald-200 font-medium">
<i className="w-4 h-4" data-lucide="sparkles" strokeWidth="1.5"></i>
                  Modern UI
                </div>
<div className="text-xs text-[#8f9ab5] mt-1">
                  Refined spacing + typography
                </div>
</div>
<div className="rounded-2xl p-5 bg-black/25 border border-white/10">
<div className="flex items-center gap-2 text-sm text-emerald-200 font-medium">
<i className="w-4 h-4" data-lucide="shield" strokeWidth="1.5"></i>
                  Risk-first
                </div>
<div className="text-xs text-[#8f9ab5] mt-1">
                  Rules visible everywhere
                </div>
</div>
<div className="rounded-2xl p-5 bg-black/25 border border-white/10">
<div className="flex items-center gap-2 text-sm text-emerald-200 font-medium">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i>
                  Fast actions
                </div>
<div className="text-xs text-[#8f9ab5] mt-1">
                  CTA hierarchy that converts
                </div>
</div>
<div className="rounded-2xl p-5 bg-black/25 border border-white/10">
<div className="flex items-center gap-2 text-sm text-emerald-200 font-medium">
<i className="w-4 h-4" data-lucide="line-chart" strokeWidth="1.5"></i>
                  Built for performance
                </div>
<div className="text-xs text-[#8f9ab5] mt-1">
                  Clarity over noise
                </div>
</div>
</div>
</div>
<div className="glass rounded-[2rem] p-10 backdrop-blur-2xl relative overflow-hidden">
<div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/15 blur-[70px] rounded-full"></div>
<div className="flex items-start justify-between gap-6 mb-8">
<div>
<div className="text-sm text-[#8f9ab5]">Risk dashboard</div>
<div className="text-2xl font-medium tracking-tight">
                  Stay inside limits
                </div>
</div>
<span className="inline-flex items-center gap-2 text-xs text-emerald-200 font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Live
              </span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
<div className="rounded-[1.5rem] p-6 bg-black/25 border border-white/10">
<div className="text-xs text-[#8f9ab5]">Daily loss</div>
<div className="text-3xl font-medium tracking-tight mt-2">2.1%</div>
<div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-[42%] bg-gradient-to-r from-emerald-400 to-emerald-200"></div>
</div>
<div className="text-xs text-[#8f9ab5] mt-2">42% of limit</div>
</div>
<div className="rounded-[1.5rem] p-6 bg-black/25 border border-white/10">
<div className="text-xs text-[#8f9ab5]">Max loss</div>
<div className="text-3xl font-medium tracking-tight mt-2">4.7%</div>
<div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-[47%] bg-gradient-to-r from-emerald-400 to-emerald-200"></div>
</div>
<div className="text-xs text-[#8f9ab5] mt-2">47% of limit</div>
</div>
</div>
<div className="rounded-[1.5rem] p-6 bg-black/25 border border-white/10">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-2 text-sm text-emerald-200 font-medium">
<i className="w-4 h-4" data-lucide="shield-check" strokeWidth="1.5"></i>
                  Guardrails
                </div>
<span className="text-xs text-[#8f9ab5]">Transparent rules</span>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="rounded-2xl p-4 bg-black/30 border border-white/10">
<div className="text-sm font-medium">Minimum days</div>
<div className="text-xs text-[#8f9ab5] mt-1">3 days</div>
</div>
<div className="rounded-2xl p-4 bg-black/30 border border-white/10">
<div className="text-sm font-medium">Objectives</div>
<div className="text-xs text-[#8f9ab5] mt-1">Clear targets</div>
</div>
</div>
<a className="mt-5 inline-flex items-center justify-center w-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all rounded-xl py-3 text-sm font-medium text-white" href="#">
                Open dashboard
              </a>
</div>
</div>
</div>
</section>

<section className="max-w-[1360px] mx-auto px-6 mb-32 reveal" data-element-id="platform-compare">
<div className="flex items-end justify-between gap-8 mb-10 flex-col lg:flex-row">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-4">
              Pick your platform
            </h2>
<p className="text-lg text-[#8f9ab5]">
              Modern execution on the tools traders already use.
            </p>
</div>
<div className="flex items-center gap-2 text-sm text-[#8f9ab5]">
<i className="w-4 h-4" data-lucide="monitor-smartphone" strokeWidth="1.5"></i>
            Web • Desktop • Mobile
          </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass rounded-3xl p-8 backdrop-blur-xl">
<div className="flex items-center justify-between">
<div className="text-xl font-medium tracking-tight">TradingView</div>
<span className="text-xs text-emerald-200 font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                Charts-first
              </span>
</div>
<p className="text-base text-[#8f9ab5] mt-3">
              Fast analysis, clean layouts, and strong community indicators.
            </p>
<ul className="mt-6 space-y-3 text-sm text-white/90">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
                One-click templates
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
                Multi-timeframe
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
                Web-native
              </li>
</ul>
</div>
<div className="glass rounded-3xl p-8 backdrop-blur-xl">
<div className="flex items-center justify-between">
<div className="text-xl font-medium tracking-tight">MetaTrader</div>
<span className="text-xs text-emerald-200 font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                Classic
              </span>
</div>
<p className="text-base text-[#8f9ab5] mt-3">
              Deep ecosystem for discretionary and automated trading.
            </p>
<ul className="mt-6 space-y-3 text-sm text-white/90">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
                EAs &amp; indicators
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
                Strategy tester
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
                Desktop-first
              </li>
</ul>
</div>
<div className="glass rounded-3xl p-8 backdrop-blur-xl">
<div className="flex items-center justify-between">
<div className="text-xl font-medium tracking-tight">cTrader</div>
<span className="text-xs text-emerald-200 font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                Modern
              </span>
</div>
<p className="text-base text-[#8f9ab5] mt-3">
              Sleek execution with a pro-grade interface.
            </p>
<ul className="mt-6 space-y-3 text-sm text-white/90">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
                Depth of market
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
                Clean order UI
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
                Great on web
              </li>
</ul>
</div>
</div>
</section>

<section className="max-w-[1360px] mx-auto px-6 mb-32 reveal" data-element-id="risk-callout">
<div className="rounded-[2rem] p-10 md:p-12 bg-gradient-to-r from-emerald-900/40 via-[#000806]/80 to-emerald-900/40 border border-white/5 border-t-emerald-500/20 backdrop-blur-3xl overflow-hidden relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)]">
<div className="absolute inset-0 opacity-70" style={{background: 'radial-gradient(700px 300px at 20% 20%, rgba(16,185,129,.18), transparent 60%), radial-gradient(600px 260px at 80% 60%, rgba(255,255,255,.08), transparent 60%)'}}></div>
<div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
<div className="lg:col-span-2">
<div className="inline-flex items-center gap-2 text-sm text-emerald-200 font-medium px-4 py-2 rounded-full bg-white/5 border border-white/10">
<i className="w-4 h-4" data-lucide="shield-alert" strokeWidth="1.5"></i>
                Risk controls built-in
              </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mt-5">
                Trade with structure
              </h2>
<p className="text-lg text-[#8f9ab5] mt-4 max-w-2xl">
                Daily loss limits, overall loss limits, and objective
                milestones—so performance is repeatable, not accidental.
              </p>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-2xl p-5 bg-black/20 border border-white/10">
<div className="text-xs text-[#8f9ab5]">Max daily loss</div>
<div className="text-2xl font-medium tracking-tight mt-2">5%</div>
</div>
<div className="rounded-2xl p-5 bg-black/20 border border-white/10">
<div className="text-xs text-[#8f9ab5]">Max loss</div>
<div className="text-2xl font-medium tracking-tight mt-2">
                    10%
                  </div>
</div>
<div className="rounded-2xl p-5 bg-black/20 border border-white/10">
<div className="text-xs text-[#8f9ab5]">Minimum days</div>
<div className="text-2xl font-medium tracking-tight mt-2">3</div>
</div>
</div>
</div>
<div className="rounded-[1.5rem] p-6 bg-black/25 border border-white/10">
<div className="flex items-center gap-2 text-sm text-emerald-200 font-medium mb-4">
<i className="w-4 h-4" data-lucide="bell" strokeWidth="1.5"></i>
                Alerts
              </div>
<div className="space-y-4">
<div className="rounded-2xl p-5 bg-black/30 border border-white/10">
<div className="text-sm font-medium">Daily loss buffer</div>
<div className="text-xs text-[#8f9ab5] mt-1">
                    You’re within limits
                  </div>
</div>
<div className="rounded-2xl p-5 bg-black/30 border border-white/10">
<div className="text-sm font-medium">Reward cycle</div>
<div className="text-xs text-[#8f9ab5] mt-1">
                    Next window: soon
                  </div>
</div>
</div>
<a className="mt-6 inline-flex items-center justify-center w-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all rounded-xl py-3 text-sm font-medium text-white" href="#">
                Open dashboard
              </a>
</div>
</div>
</div>
</section>

<section className="max-w-[1360px] mx-auto px-6 mb-40 reveal" data-element-id="cta-strip">
<div className="bg-gradient-to-r from-emerald-900/40 via-[#000806]/80 to-emerald-900/40 border border-white/5 border-t-emerald-500/20 rounded-[2rem] p-10 md:p-12 backdrop-blur-3xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)]">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-3">
              Ready to run it like a pro?
            </h2>
<p className="text-lg text-[#8f9ab5]">
              Pick a challenge, follow the objectives, and trade with structure.
            </p>
</div>
<div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
<a className="w-full sm:w-auto bg-gradient-to-b from-[#10b981] to-[#059669] text-white px-10 py-4 rounded-full text-base font-semibold hover:from-[#34d399] hover:to-[#10b981] transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] border border-emerald-400/50" href="#">
              Buy Evaluation
            </a>
<a className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-10 py-4 rounded-full text-base font-semibold hover:bg-white/10 hover:border-white/20 transition-all" href="#">
              Join Competition
            </a>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mb-40 text-center reveal">
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
          Buckle Up, Your Journey Starts Here!
        </h2>
<p className="text-lg text-[#8f9ab5] mb-12 max-w-2xl mx-auto">
          We evaluate according to objectives that best fit your style. From
          beginners to experts, traders from 195+ countries trust our platform.
        </p>

<div className="inline-flex flex-wrap justify-center gap-1 bg-black/40 backdrop-blur-3xl p-1.5 rounded-full mb-12 border border-white/5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
<button className="px-6 py-2.5 rounded-full text-sm font-medium text-[#8f9ab5] hover:text-white hover:bg-white/5 transition-all">
            Zero
          </button>
<button className="px-6 py-2.5 rounded-full text-sm font-medium text-[#8f9ab5] hover:text-white hover:bg-white/5 transition-all">
            1 step
          </button>
<button className="px-6 py-2.5 rounded-full bg-gradient-to-b from-[#10b981] to-[#059669] text-white text-sm font-semibold shadow-[0_0_20px_rgba(16,185,129,0.3)] border border-emerald-400/50">
            2 step
          </button>
<button className="px-6 py-2.5 rounded-full text-sm font-medium text-[#8f9ab5] hover:text-white hover:bg-white/5 transition-all">
            FundingPips
          </button>
<button className="px-6 py-2.5 rounded-full text-sm font-medium text-[#8f9ab5] hover:text-white hover:bg-white/5 transition-all">
            FundingPips Pro
          </button>
<div className="w-px h-6 bg-white/10 self-center mx-2"></div>
<button className="px-5 py-2.5 rounded-full text-sm font-medium text-[#8f9ab5] hover:text-white hover:bg-white/5 transition-all">
            $5K
          </button>
<button className="px-5 py-2.5 rounded-full text-sm font-medium text-[#8f9ab5] hover:text-white hover:bg-white/5 transition-all">
            $10K
          </button>
<button className="px-5 py-2.5 rounded-full text-sm font-medium text-[#8f9ab5] hover:text-white hover:bg-white/5 transition-all">
            $25K
          </button>
<button className="px-5 py-2.5 rounded-full bg-gradient-to-b from-[#10b981] to-[#059669] text-white text-sm font-semibold shadow-[0_0_20px_rgba(16,185,129,0.3)] border border-emerald-400/50">
            $50K
          </button>
<button className="px-5 py-2.5 rounded-full text-sm font-medium text-[#8f9ab5] hover:text-white hover:bg-white/5 transition-all">
            $100K
          </button>
</div>

<div className="bg-gradient-to-b from-emerald-900/30 to-[#000806]/80 border border-white/5 border-t-emerald-500/20 rounded-[2rem] overflow-hidden backdrop-blur-3xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] relative">

<div className="p-8 border-b border-white/10">
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-[#10b981] rounded-xl p-4 flex flex-col justify-center items-center">
<span className="text-xl font-medium">Evaluation Stage</span>
<span className="text-base text-emerald-200">
                  (Student &amp; Practitioner)
                </span>
</div>
<div className="bg-white/5 rounded-xl p-4 flex flex-col justify-center items-center border border-white/5">
<span className="text-xl font-medium">Master Stage</span>
<span className="text-base text-[#8f9ab5]">(Master)</span>
</div>
</div>
<div className="text-center">
<span className="text-base text-[#8f9ab5] mb-3 block">
                Reward Cycles
              </span>
<div className="flex items-center justify-center gap-6 flex-wrap">
<span className="flex items-center gap-2 text-base">
<i className="w-5 h-5 text-white fill-black" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                  Weekly 80%
                </span>
<span className="flex items-center gap-2 text-base">
<i className="w-5 h-5 text-white fill-black" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                  Bi-weekly 80%
                </span>
<span className="flex items-center gap-2 text-base">
<i className="w-5 h-5 text-white fill-black" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                  On Demand 90%
                </span>
<span className="flex items-center gap-2 text-base">
<i className="w-5 h-5 text-white fill-black" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                  Monthly 100%
                </span>
</div>
</div>
</div>

<div className="p-8 pb-4">

<div className="grid grid-cols-4 gap-4 mb-6 items-center">
<div></div>

<div className="text-center flex flex-col items-center gap-2">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-[#8f9ab5]">
                  1
                </div>
<span className="text-lg font-medium">Student</span>
</div>
<div className="text-center flex flex-col items-center gap-2">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-[#8f9ab5]">
                  2
                </div>
<span className="text-lg font-medium">Practitioner</span>
</div>
<div className="text-center flex flex-col items-center gap-2">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-[#8f9ab5]">
                  3
                </div>
<span className="text-lg font-medium">Master</span>
</div>
</div>

<div className="space-y-4">
<div className="grid grid-cols-4 gap-4 items-center py-2 border-b border-white/5">
<div className="text-left text-base text-[#8f9ab5] flex items-center gap-2">
                  Profit Target
                  <i className="w-4 h-4" data-lucide="info" strokeWidth="1.5"></i>
</div>
<div className="text-center text-lg flex items-center justify-center gap-2">
<button className="text-[#8f9ab5] hover:text-white">
<i className="w-4 h-4" data-lucide="minus-circle" strokeWidth="1.5"></i>
</button>
                  $4,000 (8%)
                  <button className="text-[#8f9ab5] hover:text-white">
<i className="w-4 h-4" data-lucide="plus-circle" strokeWidth="1.5"></i>
</button>
</div>
<div className="text-center text-lg">$2,500 (5%)</div>
<div className="text-center text-lg text-[#8f9ab5]">-</div>
</div>
<div className="grid grid-cols-4 gap-4 items-center py-2 border-b border-white/5">
<div className="text-left text-base text-[#8f9ab5] flex items-center gap-2">
                  Maximum Loss
                  <i className="w-4 h-4" data-lucide="info" strokeWidth="1.5"></i>
</div>
<div className="text-center text-lg">10%</div>
<div className="text-center text-lg">10%</div>
<div className="text-center text-lg">10%</div>
</div>
<div className="grid grid-cols-4 gap-4 items-center py-2 border-b border-white/5">
<div className="text-left text-base text-[#8f9ab5] flex items-center gap-2">
                  Maximum Daily Loss
                  <i className="w-4 h-4" data-lucide="info" strokeWidth="1.5"></i>
</div>
<div className="text-center text-lg">5%</div>
<div className="text-center text-lg">5%</div>
<div className="text-center text-lg">5%</div>
</div>
<div className="grid grid-cols-4 gap-4 items-center py-2 border-b border-white/5">
<div className="text-left text-base text-[#8f9ab5] flex items-center gap-2">
                  Minimum Trading Days
                  <i className="w-4 h-4" data-lucide="info" strokeWidth="1.5"></i>
</div>
<div className="text-center text-lg">3 days</div>
<div className="text-center text-lg">3 days</div>
<div className="text-center text-lg text-[#8f9ab5]">-</div>
</div>
<div className="grid grid-cols-4 gap-4 items-center py-2">
<div className="text-left text-base text-[#8f9ab5] flex items-center gap-2">
                  Leverage
                  <i className="w-4 h-4" data-lucide="info" strokeWidth="1.5"></i>
</div>
<div className="text-center text-lg">1:100</div>
<div className="text-center text-lg">1:100</div>
<div className="text-center text-lg">1:100</div>
</div>
</div>
</div>

<div className="p-8 pt-4 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<span className="text-base text-[#8f9ab5]">Account size:</span>
<span className="text-4xl font-medium">50k</span>
</div>
<div className="flex items-center gap-6">
<div className="text-left">
<div className="flex items-center gap-2">
<span className="text-base text-[#8f9ab5]">Price:</span>
<span className="text-4xl font-medium">$289</span>
</div>
<span className="text-xs text-[#8f9ab5]">
                  Add-on available: Swap Free
                  <span className="text-blue-400 text-emerald-400">(+10%)</span>
</span>
</div>
<button className="bg-gradient-to-b from-[#10b981] to-[#059669] text-white px-10 py-4 rounded-xl text-base font-semibold hover:from-[#34d399] hover:to-[#10b981] transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] border border-emerald-400/50 whitespace-nowrap">
                Buy Challenge
              </button>
</div>
</div>
</div>
<p className="mt-6 text-base text-[#8f9ab5]">
          Please check
          <a className="underline hover:text-white transition-colors" href="#">
            Trading Objectives
          </a>
          for detailed info
        </p>
</section>

<section className="max-w-[1360px] mx-auto px-6 mb-40 relative reveal">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-to-b from-emerald-400/30 to-transparent rounded-full blur-[120px] pointer-events-none opacity-60 animate-pulse-glow mix-blend-screen"></div>
<div className="text-center relative z-10 pt-20 mb-16">

<div className="w-80 h-80 mx-auto relative mb-12 flex items-center justify-center perspective-[1000px] group">

<div className="absolute inset-0 bg-emerald-500/30 rounded-full blur-[60px] animate-pulse-glow group-hover:bg-emerald-500/40 transition-all duration-700"></div>

<div className="absolute inset-[-15%] border border-emerald-500/20 rounded-full animate-[spin_15s_linear_infinite] border-t-emerald-400/60 shadow-[0_0_30px_rgba(52,211,153,0.1)]"></div>
<div className="absolute inset-[-30%] border border-emerald-500/10 rounded-full animate-[spin_25s_linear_infinite_reverse] border-b-emerald-300/50 transform rotate-45 shadow-[inset_0_0_20px_rgba(52,211,153,0.1)]"></div>

<div className="w-full h-full bg-gradient-to-tr from-[#000806] via-emerald-900/80 to-emerald-400/30 rounded-full shadow-[inset_0_0_80px_rgba(255,255,255,0.2),0_20px_100px_rgba(16,185,129,0.5)] relative overflow-hidden border border-emerald-300/50 border-t-emerald-200/80 backdrop-blur-2xl animate-float">

<div className="absolute -inset-1/2 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4yKSIvPjwvc3ZnPg==')] opacity-40 animate-[spin_60s_linear_infinite]"></div>

<div className="absolute inset-0 rounded-full" style={{background: 'conic-gradient(from 0deg, transparent 70%, rgba(52,211,153,0.4) 100%)', animation: 'spin 4s linear infinite'}}></div>

<div className="w-full h-[1px] bg-emerald-400/40 absolute top-1/2 shadow-[0_0_15px_rgba(52,211,153,0.8)]"></div>
<div className="w-[1px] h-full bg-emerald-400/40 absolute left-1/2 shadow-[0_0_15px_rgba(52,211,153,0.8)]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-400 rounded-full shadow-[0_0_40px_rgba(52,211,153,1)] animate-ping" style={{animationDuration: '2s'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_20px_#fff]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-emerald-400/30 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
</div>

<div className="absolute top-4 -left-16 glass px-5 py-2.5 rounded-2xl text-xs font-medium text-emerald-200 border-emerald-500/30 animate-float shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-2" style={{animationDelay: '-1s'}}>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              99.9% Uptime
            </div>
<div className="absolute bottom-4 -right-20 glass px-5 py-2.5 rounded-2xl text-xs font-medium text-emerald-200 border-emerald-500/30 animate-float shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-2" style={{animationDelay: '-2.5s'}}>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Zero Denials
            </div>
</div>
<h2 className="text-7xl md:text-8xl font-medium tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-white to-emerald-300">
            $200+ Million
          </h2>
<p className="text-xl text-[#8f9ab5] mb-2">
            Earned by Traders Globally at FundingPips
          </p>
<p className="text-lg text-emerald-300/80 font-medium tracking-wide uppercase mt-4">
            Quick and reliable. Zero reward denials.
          </p>
</div>

<div className="flex gap-6 overflow-x-auto pb-12 hide-scrollbar snap-x relative z-10 px-6">

<div className="min-w-[280px] md:min-w-[320px] bg-white/5 border border-white/10 rounded-[2rem] p-8 snap-center backdrop-blur-md opacity-40 hover:opacity-100 hover:bg-white/10 transition-all duration-300 group">
<div className="flex items-center gap-2 mb-8">
<span className="text-lg">🇦🇱</span>
<span className="text-base">Albania</span>
</div>
<div className="text-4xl font-medium">$14,106</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] bg-gradient-to-br from-[#10b981] to-[#059669] border border-emerald-400/50 rounded-[2rem] p-8 snap-center shadow-[0_20px_40px_rgba(16,185,129,0.4)] relative overflow-hidden group hover:scale-[1.02] transition-transform">
<div className="flex items-center gap-2 mb-8">
<span className="text-lg">🇩🇪</span>
<span className="text-base">Germany</span>
</div>
<div className="text-4xl font-medium">$140,354</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] bg-white/5 border border-white/10 rounded-[2rem] p-8 snap-center backdrop-blur-md hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 group">
<div className="flex items-center gap-2 mb-8">
<span className="text-lg">🇹🇭</span>
<span className="text-base">Thailand</span>
</div>
<div className="text-4xl font-medium">$50,197</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] bg-white/5 border border-white/10 rounded-[2rem] p-8 snap-center backdrop-blur-md hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 group">
<div className="flex items-center gap-2 mb-8">
<span className="text-lg">🇮🇳</span>
<span className="text-base">India</span>
</div>
<div className="text-4xl font-medium">$46,646</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] bg-white/5 border border-white/10 rounded-[2rem] p-8 snap-center backdrop-blur-md hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 group">
<div className="flex items-center gap-2 mb-8">
<span className="text-lg">🇰🇿</span>
<span className="text-base">Kazakhstan</span>
</div>
<div className="text-4xl font-medium">$45,312</div>
</div>
</div>

<div className="flex justify-center gap-4 mt-4">
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors text-[#8f9ab5] hover:text-white">
<i className="w-5 h-5" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors text-[#8f9ab5] hover:text-white">
<i className="w-5 h-5" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>
</section>

<section className="max-w-[1360px] mx-auto px-6 mb-40 text-center relative reveal">

<div className="absolute inset-0 grid grid-cols-5 md:grid-cols-9 gap-4 opacity-40 pointer-events-none z-0 overflow-hidden" style={{maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)'}}>

<div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
<div className="w-8 h-8 bg-blue-500/20 rounded-full"></div>
</div>
<div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
<span className="text-2xl font-bold opacity-30">TV</span>
</div>
<div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
<div className="w-8 h-8 bg-green-500/20 rounded-full"></div>
</div>
<div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
<div className="w-8 h-8 bg-purple-500/20 rounded-full"></div>
</div>
<div className="aspect-square bg-[#8b0000]/20 rounded-2xl flex items-center justify-center border border-red-500/20">
<div className="w-8 h-8 border-4 border-red-500 rounded-full"></div>
</div>
<div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
<div className="w-8 h-8 bg-blue-400/20 rounded-full"></div>
</div>
<div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
<span className="text-2xl font-bold opacity-30">TV</span>
</div>
<div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
<div className="w-8 h-8 bg-green-500/20 rounded-full"></div>
</div>
<div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
<div className="w-8 h-8 bg-purple-500/20 rounded-full"></div>
</div>
<div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
<span className="text-2xl font-bold opacity-30">TV</span>
</div>
<div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
<div className="w-8 h-8 bg-green-500/20 rounded-full"></div>
</div>
<div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
<div className="w-8 h-8 bg-purple-500/20 rounded-full"></div>
</div>
<div className="aspect-square bg-[#8b0000]/20 rounded-2xl flex items-center justify-center border border-red-500/20">
<div className="w-8 h-8 border-4 border-red-500 rounded-full"></div>
</div>
<div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
<div className="w-8 h-8 bg-blue-400/20 rounded-full"></div>
</div>
<div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
<span className="text-2xl font-bold opacity-30">TV</span>
</div>
<div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
<div className="w-8 h-8 bg-green-500/20 rounded-full"></div>
</div>
<div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
<div className="w-8 h-8 bg-purple-500/20 rounded-full"></div>
</div>
<div className="aspect-square bg-[#8b0000]/20 rounded-2xl flex items-center justify-center border border-red-500/20">
<div className="w-8 h-8 border-4 border-red-500 rounded-full"></div>
</div>
</div>
<div className="relative z-10 py-20">
<h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            Empowering your Success on All Major Trading Platforms
          </h2>
<p className="text-lg text-white mb-8">
            FundingPips provides its users with tools, rules and trading
            platforms needed to succeed in evaluations!
          </p>
<button className="bg-gradient-to-b from-[#10b981] to-[#059669] text-white px-10 py-4 rounded-full text-base font-semibold hover:from-[#34d399] hover:to-[#10b981] transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] border border-emerald-400/50 mt-4">
            Start Trading Now
          </button>

<div className="mt-20 relative h-[500px] sm:h-[600px] w-full max-w-3xl mx-auto flex flex-col items-center justify-center perspective-[1200px]">

<div className="absolute top-[50%] w-full max-w-lg h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse-glow"></div>

<div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-emerald-900/40 to-black/60 backdrop-blur-xl rounded-[2.5rem] absolute top-32 sm:top-48 transform rotate-x-[60deg] rotate-z-[45deg] shadow-[0_40px_100px_rgba(0,0,0,0.8),inset_0_0_30px_rgba(16,185,129,0.1)] border border-white/10 animate-float" style={{animationDuration: '8s', animationDelay: '-2s'}}>

<div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMjBoNDBNMjAgMHY0MCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')]"></div>
</div>

<div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-emerald-500/20 to-transparent backdrop-blur-md rounded-[2.5rem] absolute top-16 sm:top-24 transform rotate-x-[60deg] rotate-z-[45deg] shadow-[0_20px_60px_rgba(16,185,129,0.2),inset_0_0_20px_rgba(255,255,255,0.1)] border border-emerald-400/30 animate-float" style={{animationDuration: '7s', animationDelay: '-1s'}}></div>

<div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-emerald-400/30 to-emerald-900/80 backdrop-blur-2xl rounded-[2.5rem] absolute top-0 transform rotate-x-[60deg] rotate-z-[45deg] shadow-[0_0_80px_rgba(16,185,129,0.5),inset_0_0_40px_rgba(16,185,129,0.6)] border border-emerald-300/50 flex items-center justify-center animate-float group hover:border-emerald-200/70 transition-colors duration-500 cursor-pointer">

<div className="absolute w-[85%] h-[85%] rounded-full border border-emerald-300/40 animate-[spin_8s_linear_infinite] group-hover:border-emerald-300/80 transition-colors duration-500"></div>
<div className="absolute w-[70%] h-[70%] rounded-full border border-emerald-400/20 border-dashed animate-[spin_12s_linear_infinite_reverse]"></div>

<div className="w-24 h-24 sm:w-32 sm:h-32 bg-[#011c15] rounded-3xl transform -rotate-z-[45deg] rotate-x-[-60deg] mb-8 mr-8 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.8),inset_0_0_20px_rgba(255,255,255,0.2)] border border-emerald-400/50 relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
<div className="absolute inset-0 bg-gradient-to-t from-emerald-500/40 to-transparent"></div>
<span className="text-6xl sm:text-7xl font-bold text-white relative z-10 drop-shadow-[0_0_15px_#fff]">
                  P
                </span>
</div>
</div>

<div className="hidden sm:block absolute top-20 -left-10 lg:-left-20 w-56 h-36 glass bg-black/40 backdrop-blur-2xl rounded-[2rem] border border-white/10 p-5 transform -rotate-y-[20deg] rotate-z-[5deg] shadow-[0_30px_60px_rgba(0,0,0,0.6)] animate-float" style={{animationDuration: '6s', animationDelay: '-3s'}}>
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] animate-pulse"></div>
<div className="text-xs font-medium text-emerald-200 uppercase tracking-widest">
                  Execution Speed
                </div>
</div>
<div className="text-4xl font-light text-white mb-2 tracking-tight">
                0.12
                <span className="text-lg text-[#8f9ab5]">s</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="w-[92%] h-full bg-gradient-to-r from-emerald-500 to-emerald-300 shadow-[0_0_10px_#34d399]"></div>
</div>
</div>

<div className="hidden sm:block absolute top-48 -right-10 lg:-right-20 w-64 h-40 glass bg-[#011c15]/60 backdrop-blur-2xl rounded-[2rem] border border-emerald-500/30 p-5 transform rotate-y-[20deg] -rotate-z-[5deg] shadow-[0_30px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(16,185,129,0.15)] animate-float" style={{animationDuration: '9s', animationDelay: '-0.5s'}}>
<div className="flex justify-between items-center mb-5 border-b border-white/10 pb-3">
<span className="text-xs font-medium text-[#8f9ab5] uppercase tracking-wider">
                  Spread History
                </span>
<span className="text-[10px] font-bold text-[#011c15] bg-emerald-400 px-2.5 py-1 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(52,211,153,0.5)]">
                  Raw
                </span>
</div>
<div className="flex items-end justify-between gap-1.5 h-14">
<div className="w-full bg-emerald-500/10 rounded-t-sm relative h-full">
<div className="absolute bottom-0 w-full h-[40%] bg-emerald-500/40 rounded-t-sm"></div>
</div>
<div className="w-full bg-emerald-500/10 rounded-t-sm relative h-full">
<div className="absolute bottom-0 w-full h-[65%] bg-emerald-400/60 rounded-t-sm"></div>
</div>
<div className="w-full bg-emerald-500/10 rounded-t-sm relative h-full">
<div className="absolute bottom-0 w-full h-[35%] bg-emerald-500/40 rounded-t-sm"></div>
</div>
<div className="w-full bg-emerald-500/20 rounded-t-sm relative h-full">
<div className="absolute bottom-0 w-full h-[95%] bg-emerald-400 rounded-t-sm shadow-[0_0_15px_#34d399]"></div>
</div>
<div className="w-full bg-emerald-500/10 rounded-t-sm relative h-full">
<div className="absolute bottom-0 w-full h-[55%] bg-emerald-400/60 rounded-t-sm"></div>
</div>
<div className="w-full bg-emerald-500/10 rounded-t-sm relative h-full">
<div className="absolute bottom-0 w-full h-[80%] bg-emerald-400/80 rounded-t-sm"></div>
</div>
</div>
</div>

<div className="absolute w-1.5 h-1.5 bg-emerald-300 rounded-full top-[15%] left-[25%] animate-ping shadow-[0_0_15px_#6ee7b7]" style={{animationDuration: '2.5s'}}></div>
<div className="absolute w-2 h-2 bg-white rounded-full top-[40%] right-[25%] animate-ping" style={{animationDuration: '3s'}}></div>
<div className="absolute w-1 h-1 bg-emerald-400 rounded-full bottom-[25%] left-[35%] animate-ping" style={{animationDuration: '2s'}}></div>

<div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-full max-w-xl h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent transform -rotate-12 pointer-events-none mix-blend-screen"></div>
</div>
</div>
</section>

<section className="max-w-[1360px] mx-auto px-6 mb-40 flex flex-col md:flex-row items-end justify-between gap-8 reveal">
<div className="max-w-xl">
<h2 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[1.1]">
            Made in Dubai.
            <br/>
<span className="text-[#8f9ab5]">
              Testimonials from all around the world.
            </span>
</h2>
</div>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
<i className="w-6 h-6" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
<i className="w-6 h-6" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>
</section>

<section className="text-center mb-24 px-6 reveal">
<h2 className="text-6xl md:text-[80px] font-medium tracking-tighter text-white/80">
          Empowering Traders in
        </h2>
<h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200 mt-2">
          195+ Countries
        </h2>
</section>

<section className="max-w-[1360px] mx-auto px-6 mb-24 reveal">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass rounded-[2rem] p-10 flex flex-col items-start h-full hover:border-emerald-500/40 hover:bg-white/[0.07] transition-all duration-300 relative overflow-hidden group">
<div className="flex items-center gap-3 mb-6">
<i className="w-6 h-6 text-white" data-lucide="message-square" strokeWidth="1.5"></i>
<span className="text-lg font-medium">Our Community</span>
</div>
<h3 className="text-2xl font-medium mb-3">Do not skip any beat.</h3>
<p className="text-base text-[#8f9ab5] mb-8 flex-grow">
              The Ultimate Trading Community. Join our Discord server to get the
              latest updates, news and more.
            </p>
<a className="bg-white text-[#011c15] px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-emerald-50 hover:scale-105 transition-all duration-300 shadow-[0_10px_20px_rgba(255,255,255,0.1)]" href="#">
              Open Discord
            </a>
</div>

<div className="glass rounded-[2rem] p-10 flex flex-col items-start h-full hover:border-emerald-500/40 hover:bg-white/[0.07] transition-all duration-300 relative overflow-hidden group">
<div className="flex items-center gap-3 mb-6">
<i className="w-6 h-6 text-white" data-lucide="life-buoy" strokeWidth="1.5"></i>
<span className="text-lg font-medium">Customer Support</span>
</div>
<h3 className="text-2xl font-medium mb-3">24/7 Customer Support</h3>
<p className="text-base text-[#8f9ab5] mb-8 flex-grow">
              We provide customer support around the clock 24/7 in multiple
              languages for our traders around the world.
            </p>
<div className="flex gap-3">
<a className="bg-white text-[#011c15] px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-emerald-50 hover:scale-105 transition-all duration-300 shadow-[0_10px_20px_rgba(255,255,255,0.1)]" href="#">
                Talk to our support
              </a>
<a className="bg-transparent border border-white/20 text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300" href="#">
                Open FAQs
              </a>
</div>
</div>

<div className="glass rounded-[2rem] p-10 flex flex-col items-start h-full hover:border-emerald-500/40 hover:bg-white/[0.07] transition-all duration-300 relative overflow-hidden group">
<div className="flex items-center gap-3 mb-6">
<i className="w-6 h-6 text-white" data-lucide="send" strokeWidth="1.5"></i>
<span className="text-lg font-medium">Newsletter</span>
</div>
<h3 className="text-2xl font-medium mb-3">Join our Newsletter</h3>
<p className="text-base text-[#8f9ab5] mb-8">
              Stay updated with our newsletter!
            </p>
<div className="w-full mt-auto">
<input className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-base text-white placeholder:text-[#8f9ab5] mb-4 focus:outline-none focus:border-[#10b981]" placeholder="Enter your email" type="email"/>
<button className="bg-white text-[#011c15] px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-emerald-50 hover:scale-105 transition-all duration-300 shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
                Subscribe
              </button>
</div>
</div>
</div>
</section>

<footer className="max-w-[1360px] mx-auto px-6 border-t border-white/10 pt-16">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">

<div className="col-span-1">
<h4 className="text-base font-medium mb-4">Company</h4>
<ul className="space-y-3">
<li>
<a className="text-base text-[#8f9ab5] hover:text-white transition-colors" href="#">
                  Contact Us
                </a>
</li>
<li>
<a className="text-base text-[#8f9ab5] hover:text-white transition-colors" href="#">
                  Trading Objectives
                </a>
</li>
<li>
<a className="text-base text-[#8f9ab5] hover:text-white transition-colors" href="#">
                  Affiliate Program
                </a>
</li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-base font-medium mb-4">Community</h4>
<ul className="space-y-3">
<li>
<a className="text-base text-[#8f9ab5] hover:text-white transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="text-base text-[#8f9ab5] hover:text-white transition-colors" href="#">
                  Blog
                </a>
</li>
<li>
<a className="text-base text-[#8f9ab5] hover:text-white transition-colors" href="#">
                  Brand kit
                </a>
</li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-base font-medium mb-4">Legal</h4>
<ul className="space-y-3">
<li>
<a className="text-base text-[#8f9ab5] hover:text-white transition-colors" href="#">
                  Terms &amp; Conditions
                </a>
</li>
<li>
<a className="text-base text-[#8f9ab5] hover:text-white transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
</ul>
</div>

<div className="col-span-2 lg:col-span-3 lg:col-start-4 space-y-6 text-right lg:text-left flex flex-col lg:items-end">
<div>
<p className="text-base font-medium">ISO 27001:2022</p>
<p className="text-sm text-[#8f9ab5]">
                Information Security Management System - ISMS
              </p>
</div>
<div>
<p className="text-base font-medium">ISO 22301:2019</p>
<p className="text-sm text-[#8f9ab5]">
                Business Continuity Management Systems - BCMS
              </p>
</div>
<div>
<p className="text-base font-medium">ISO 9001:2015</p>
<p className="text-sm text-[#8f9ab5]">
                Quality Management System - QMS
              </p>
</div>
</div>
</div>
<div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded flex items-center justify-center text-[#022c22] font-medium text-sm">
              P
            </div>
<span className="text-lg font-medium tracking-tight">FundingPips</span>
</div>

<div className="flex items-center gap-4 text-[#8f9ab5]">
<a className="hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="message-square" strokeWidth="1.5"></i>
</a>
<a className="hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a className="hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="youtube" strokeWidth="1.5"></i>
</a>
<a className="hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="x" strokeWidth="1.5"></i>
</a>
</div>

<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
<span className="text-green-500 font-bold text-xl">★</span>
</div>
<div>
<div className="flex text-green-500 text-sm">★★★★★</div>
<div className="text-xs font-medium">4.7 / 5</div>
</div>
</div>
</div>

<div className="border-t border-white/10 pt-8 pb-12 space-y-4 text-xs text-[#8f9ab5] leading-relaxed">
<p className="font-medium text-white mb-2">
            IMPORTANT INFORMATION &amp; DISCLAIMER
          </p>
<p>
            SIMULATED TRADING ENVIRONMENT
            <br/>
            All accounts provided by FundingPips are demo accounts operating
            exclusively in a simulated trading environment. No actual trades are
            executed on live financial markets. The services we offer are
            designed for educational and evaluation purposes only.
          </p>
<p>
            NO INVESTMENT SERVICES
            <br/>
            The simulated trading services are provided by FundingPips Corp. All
            content published and distributed by FundingPips and its related
            entities (collectively, the "Company") is for general information
            only.
            <br/>
            • The Company does not provide investment advice.
            <br/>
            • The Company does not solicit or recommend the purchase or sale of
            any financial instruments, securities, or funds.
            <br/>
            • The Company does not act as a broker, custodian, or financial
            intermediary.
          </p>
<p>
            Participation in any of our programs is entirely voluntary, and all
            fees paid to the Company are strictly service fees. Program fees are
            not deposits, do not represent client funds, and should not be
            considered investments under any circumstances. These fees are
            non-refundable once paid, except where required by applicable laws,
            and they do not earn interest, returns, or profit sharing of any
            kind. Instead, all program fees are applied toward the Company's
            operational and administrative expenses, including but not limited
            to staffing, technology infrastructure, platform development and
            maintenance, software licensing, risk management systems, customer
            support, and other business-related costs. Payment of program fees
            does not create any fiduciary duty, custodial relationship, or
            investment arrangement between participants and the Company, and
            participants should understand that such fees provide access only to
            simulated trading evaluations and related services in a demo
            environment.
          </p>
<p>
            Nothing on this website or in our programs constitutes an offer to
            buy or sell futures, options, CFDs, forex, stocks, or any other
            financial instruments. All results displayed are based on simulated
            trading performance. Past simulated performance is not necessarily
            indicative of future results.
          </p>
<p>
            GENERAL RISK WARNING
            <br/>
            Trading financial markets involves substantial risk of loss. Even in
            a simulated environment, strategies tested under leveraged
            conditions may result in outcomes that do not reflect real-world
            execution. You should carefully consider your objectives, level of
            experience, and risk tolerance before participating.
          </p>
<p>
            CORPORATE &amp; RELATED ENTITIES
            <br/>
            FundingPips Corp is a limited liability company incorporated under
            the laws of the Comoros Union with company number: HY01223081,
            having its registered address at Bonovo Road, Fomboni Island of
            Mohéli, Comoros Union. The Company holds an International Brokerage
            and Clearing House License, tbc Regulation Act 2014 (License No.
            Bfx2024004).
            <br/>
            Note: Although licensed, FundingPips Corp does not conduct brokerage
            services or offer real trading accounts on this website. Its
            services are limited to simulated trading programs.
          </p>
<p>
            Restrictions: Services are not offered to residents of certain
            jurisdictions, including countries on the FATF and EU/UN sanctions
            lists, Vietnam and UAE.
          </p>
<p>
            Registered Address FundingPips:
            <br/>
            • Premises NO. 19948-001, IFZA Business Park, DDP Dubai U.A.E
          </p>
<p>
            Related Entities (non-operational support and administrative
            offices):
            <br/>
            • FundingPips Services Ltd - Cyprus (HE 450941), 15 Dimitriou
            Karatasou Street, Anastasio Building, 6th Floor, Office 601, 2024
            Strovolos, Nicosia, Cyprus.
            <br/>
            • Bay View Tower, Business Bay, Dubai, UAE.
          </p>
</div>

<div className="flex flex-col md:flex-row items-center justify-between py-6 border-t border-white/10 gap-4">
<div className="flex items-center gap-4 grayscale opacity-50 flex-wrap justify-center">
<span className="text-xl font-bold tracking-tighter italic">VISA</span>
<span className="text-xl font-medium tracking-tighter">AstroPay</span>
<span className="text-xl font-medium tracking-tighter">Pay</span>
<div className="w-8 h-5 bg-gradient-to-r from-red-500 to-yellow-500 rounded-sm"></div>
<span className="text-base font-medium">paysafecard</span>
<span className="text-base font-medium text-green-500">NETELLER</span>
<span className="text-xl font-medium tracking-tighter">G Pay</span>
<span className="text-base font-medium">BANK</span>
<span className="text-xl font-bold tracking-tighter text-purple-500">
              Skrill
            </span>
</div>
<div className="text-sm text-[#8f9ab5]">Copyright © 2026</div>
</div>
</footer>
</main>


    </>
  );
}
