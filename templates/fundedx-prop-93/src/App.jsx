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



      document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="pointer-events-none fixed inset-0 noise-overlay z-0"></div>

<div className="bg-gradient-to-r from-emerald-600/20 via-emerald-900/40 to-emerald-600/20 text-center py-3 text-sm font-medium text-emerald-200 border-b border-white/10 backdrop-blur-md relative z-50">
      GET FUNDED UP TO $200K | KEEP 100% OF PROFITS!
    </div>

<header className="sticky top-0 z-50 backdrop-blur-3xl bg-[#000806]/70 border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
<div className="max-w-[1360px] mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-9 h-9 bg-gradient-to-br from-white to-gray-200 rounded-xl flex items-center justify-center text-[#011c15] font-semibold text-lg shadow-sm tracking-tight">
            FX
          </div>
<span className="text-xl font-medium tracking-tight">FundedX</span>
</div>
<nav className="hidden lg:flex items-center gap-8 text-base text-[#8f9ab5]">
<a className="text-white hover:text-white transition-all duration-300 ease-out magnetic-link inline-block" href="#">
            Home
          </a>
<a className="hover:text-white transition-all duration-300 ease-out magnetic-link inline-block" href="/faq">
            FAQ
          </a>
<a className="flex items-center gap-1 hover:text-white transition-all duration-300 ease-out magnetic-link inline-block" href="/success-stories">
            Success Stories
          </a>
<a className="hover:text-white transition-all duration-300 ease-out magnetic-link inline-block" href="https://www.fanbasis.com/affiliate-signup/fundedx">
            Affiliate Program
          </a>
<a className="hover:text-white transition-all duration-300 ease-out magnetic-link inline-block" href="/contact">
            Contact
          </a>
</nav>
<div className="hidden md:flex items-center gap-4">
<button className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-sm text-[#8f9ab5] hover:text-white hover:bg-white/10 transition-colors">
<iconify-icon className="w-4 h-4" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden lg:inline">Search</span>
<kbd className="font-sans font-medium text-xs bg-white/10 border border-white/10 px-1.5 py-0.5 rounded text-white/70">
              ⌘K
            </kbd>
</button>
<a className="text-sm font-medium text-[#8f9ab5] hover:text-white transition-colors" href="https://app.fundedx.com">
            Sign up
          </a>
<a className="bg-white/5 border border-white/5 border-t-white/10 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-all shadow-[0_4px_10px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]" href="https://app.fundedx.com">
            Dashboard
          </a>
<button className="flex items-center gap-2 text-base text-[#8f9ab5] hover:text-white transition-colors">
<iconify-icon className="w-4 h-4" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
            English
          </button>
</div>
</div>
</header>
<main className="relative z-10">

<section className="relative pt-32 pb-24 px-6 overflow-hidden flex flex-col items-center text-center shimmer reveal">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/30 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse-glow"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] pointer-events-none mix-blend-overlay"></div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[1.05] mb-8 relative z-10 w-full flex flex-col items-center drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
<span>Your Gateway to</span>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">
            Funded Trading Success.
          </span>
</h1>
<p className="text-lg md:text-2xl text-[#8f9ab5] max-w-3xl mb-12 relative z-10 font-light leading-relaxed">
          Join thousands of funded traders accessing leverage capital up to $10
          million. Keep up to 100% of profits.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
<a className="bg-gradient-to-b from-emerald-400 to-emerald-600 text-white px-10 py-4 rounded-full text-base font-medium hover:from-emerald-300 hover:to-emerald-500 transition-all duration-300 w-full sm:w-auto shadow-[0_10px_40px_-10px_rgba(16,185,129,0.8),inset_0_1px_0_rgba(255,255,255,0.4)] border border-emerald-400/50 hover:shadow-[0_20px_50px_-10px_rgba(16,185,129,1)] active:scale-[0.99]" href="#">
            Get Funded Now
          </a>
<a className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/10 border-t-white/20 text-white px-10 py-4 rounded-full text-base font-medium hover:bg-white/10 transition-all duration-300 w-full sm:w-auto shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] hover:border-white/30 active:scale-[0.99]" href="https://discord.gg/fundedx">
            Join Discord
          </a>
</div>
<div className="flex items-center justify-center gap-4 mt-10 relative z-10">
<div className="flex -space-x-3">
<img alt="Trader" className="w-10 h-10 rounded-full border-2 border-[#000806] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Trader" className="w-10 h-10 rounded-full border-2 border-[#000806] object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Trader" className="w-10 h-10 rounded-full border-2 border-[#000806] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Trader" className="w-10 h-10 rounded-full border-2 border-[#000806] object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="text-left">
<div className="flex items-center gap-1 text-[#10b981] mb-0.5">
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
</div>
<div className="text-sm text-[#8f9ab5]">
              Trusted by
              <span className="text-white font-medium">15,000+</span>
              traders
            </div>
</div>
</div>
</section>

<section className="max-w-[1360px] mx-auto px-6 -mt-10 mb-10 reveal">
<div className="glass rounded-[2rem] p-4 md:p-5 backdrop-blur-2xl border border-white/10 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/10 opacity-70"></div>
<div className="relative flex items-center gap-4">
<div className="flex items-center gap-2 shrink-0">
<span className="inline-flex items-center gap-2 text-sm text-emerald-200 font-medium">
<span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.7)]"></span>
                Live
              </span>
<span className="text-sm text-[#8f9ab5] hidden md:inline">
                Instant Funding Available • No Time Limits
              </span>
</div>
<div className="flex-1 overflow-hidden">
<div className="flex gap-3 whitespace-nowrap animate-[marquee_22s_linear_infinite]" style={{willChange: 'transform'}}>
<span className="text-sm text-white/90">Turbo 5% target</span>
<span className="text-sm text-[#8f9ab5]">•</span>
<span className="text-sm text-white/90">1 Phase 10% target</span>
<span className="text-sm text-[#8f9ab5]">•</span>
<span className="text-sm text-white/90">Up to 5% daily loss</span>
<span className="text-sm text-[#8f9ab5]">•</span>
<span className="text-sm text-white/90">Up to 10% max loss</span>
<span className="text-sm text-[#8f9ab5]">•</span>
<span className="text-sm text-white/90">
                  Up to 100% profit split
                </span>
</div>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-emerald-200 hover:text-white transition-colors px-4 py-2 rounded-full bg-white/5 border border-white/10" href="#">
              View programs
              <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="max-w-[1360px] mx-auto px-6 mb-32 reveal relative">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass rounded-3xl p-8 flex flex-col justify-end min-h-[200px] hover:border-emerald-500/50 transition-all group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<p className="text-xl text-[#8f9ab5] group-hover:text-white transition-colors relative z-10 font-medium tracking-tight">
              Trade on TradeLocker, MT5, and cTrader.
            </p>
</div>
<div className="glass rounded-3xl p-8 flex flex-col justify-end min-h-[200px] hover:border-emerald-500/50 transition-all group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<p className="text-xl text-[#8f9ab5] group-hover:text-white transition-colors relative z-10 font-medium tracking-tight">
              Bi-weekly payouts and scaling to 100% profit share.
            </p>
</div>
<div className="glass rounded-3xl p-8 flex flex-col justify-end min-h-[200px] hover:border-emerald-500/50 transition-all group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<p className="text-xl text-[#8f9ab5] group-hover:text-white transition-colors relative z-10 font-medium tracking-tight">
              Up to 1:50 leverage and instant funding available.
            </p>
</div>
</div>
</section>

<section className="max-w-[1360px] mx-auto px-6 mb-20 reveal relative">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="glass rounded-2xl p-5 flex items-center gap-3 backdrop-blur-xl">
<div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center">
<iconify-icon className="w-5 h-5 text-emerald-300" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium tracking-tight">
                Instant Access
              </div>
<div className="text-xs text-[#8f9ab5]">Trade immediately</div>
</div>
</div>
<div className="glass rounded-2xl p-5 flex items-center gap-3 backdrop-blur-xl">
<div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center">
<iconify-icon className="w-5 h-5 text-emerald-300" icon="solar:stopwatch-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium tracking-tight">24/7 Support</div>
<div className="text-xs text-[#8f9ab5]">Always here for you</div>
</div>
</div>
<div className="glass rounded-2xl p-5 flex items-center gap-3 backdrop-blur-xl">
<div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center">
<iconify-icon className="w-5 h-5 text-emerald-300" icon="solar:banknote-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium tracking-tight">
                1:50 Leverage
              </div>
<div className="text-xs text-[#8f9ab5]">Maximize your potential</div>
</div>
</div>
<div className="glass rounded-2xl p-5 flex items-center gap-3 backdrop-blur-xl">
<div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center">
<iconify-icon className="w-5 h-5 text-emerald-300" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium tracking-tight">
                150+ Countries
              </div>
<div className="text-xs text-[#8f9ab5]">Global trader base</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1360px] mx-auto px-6 mb-32 reveal relative">
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
<iconify-icon className="w-4 h-4" icon="solar:monitor-smartphone-linear" strokeWidth="1.5"></iconify-icon>
            Web • Desktop • Mobile
          </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass rounded-3xl p-8 backdrop-blur-xl">
<div className="flex items-center justify-between">
<div className="text-xl font-medium tracking-tight">TradeLocker</div>
<span className="text-xs text-emerald-200 font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                Modern
              </span>
</div>
<p className="text-base text-[#8f9ab5] mt-3">
              Advanced charting and tightest spreads on .pro accounts.
            </p>
<ul className="mt-6 space-y-3 text-sm text-white/90">
<li className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-emerald-300" icon="solar:check-linear" strokeWidth="1.5"></iconify-icon>
                TradingView integration
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-emerald-300" icon="solar:check-linear" strokeWidth="1.5"></iconify-icon>
                Web &amp; Mobile
              </li>
</ul>
</div>
<div className="glass rounded-3xl p-8 backdrop-blur-xl">
<div className="flex items-center justify-between">
<div className="text-xl font-medium tracking-tight">
                MT5 (Platform 5)
              </div>
<span className="text-xs text-emerald-200 font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                Standard
              </span>
</div>
<p className="text-base text-[#8f9ab5] mt-3">
              Raw spreads available and deep liquidity for all traders.
            </p>
<ul className="mt-6 space-y-3 text-sm text-white/90">
<li className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-emerald-300" icon="solar:check-linear" strokeWidth="1.5"></iconify-icon>
                EAs &amp; indicators
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-emerald-300" icon="solar:check-linear" strokeWidth="1.5"></iconify-icon>
                Strategy tester
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
              Sleek execution, transparent pricing, and advanced order types.
            </p>
<ul className="mt-6 space-y-3 text-sm text-white/90">
<li className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-emerald-300" icon="solar:check-linear" strokeWidth="1.5"></iconify-icon>
                Depth of market
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-emerald-300" icon="solar:check-linear" strokeWidth="1.5"></iconify-icon>
                Clean order UI
              </li>
</ul>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mb-40 text-center reveal relative">
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
          Buckle Up, Your Journey Starts Here!
        </h2>
<p className="text-lg text-[#8f9ab5] mb-12 max-w-2xl mx-auto">
          Choose from Turbo, 1 Phase, 2 Phase, or Instant Funding. Options for
          every trading style.
        </p>

<div className="inline-flex flex-wrap justify-center gap-1 bg-black/40 backdrop-blur-3xl p-1.5 rounded-full mb-12 border border-white/5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
<button className="px-6 py-2.5 rounded-full text-sm font-medium text-[#8f9ab5] hover:text-white hover:bg-white/5 transition-all">
            Turbo
          </button>
<button className="px-6 py-2.5 rounded-full text-sm font-medium text-[#8f9ab5] hover:text-white hover:bg-white/5 transition-all">
            1 Phase
          </button>
<button className="px-6 py-2.5 rounded-full bg-gradient-to-b from-[#10b981] to-[#059669] text-white text-sm font-semibold shadow-[0_0_20px_rgba(16,185,129,0.3)] border border-emerald-400/50">
            2 Phase
          </button>
<div className="w-px h-6 bg-white/10 self-center mx-2 hidden sm:block"></div>
<button className="px-5 py-2.5 rounded-full text-sm font-medium text-[#8f9ab5] hover:text-white hover:bg-white/5 transition-all">
            Instant
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
<span className="text-xl font-medium">Challenge Stage</span>
<span className="text-base text-emerald-200">
                  (Phase 1 &amp; Phase 2)
                </span>
</div>
<div className="bg-white/5 rounded-xl p-4 flex flex-col justify-center items-center border border-white/5">
<span className="text-xl font-medium">Funded Stage</span>
<span className="text-base text-[#8f9ab5]">(Real Capital)</span>
</div>
</div>
</div>

<div className="p-8 pb-4 overflow-x-auto">
<div className="min-w-[600px]">
<div className="grid grid-cols-4 gap-4 mb-6 items-center">
<div></div>
<div className="text-center flex flex-col items-center gap-2">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-[#8f9ab5]">
                    1
                  </div>
<span className="text-lg font-medium">Phase 1</span>
</div>
<div className="text-center flex flex-col items-center gap-2">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-[#8f9ab5]">
                    2
                  </div>
<span className="text-lg font-medium">Phase 2</span>
</div>
<div className="text-center flex flex-col items-center gap-2">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-[#8f9ab5]">
                    3
                  </div>
<span className="text-lg font-medium">Funded</span>
</div>
</div>

<div className="space-y-4">
<div className="grid grid-cols-4 gap-4 items-center py-2 border-b border-white/5">
<div className="text-left text-base text-[#8f9ab5]">
                    Profit Target
                  </div>
<div className="text-center text-lg">$4,000 (8%)</div>
<div className="text-center text-lg">$2,500 (5%)</div>
<div className="text-center text-lg text-[#8f9ab5]">-</div>
</div>
<div className="grid grid-cols-4 gap-4 items-center py-2 border-b border-white/5">
<div className="text-left text-base text-[#8f9ab5]">
                    Maximum Loss
                  </div>
<div className="text-center text-lg">10%</div>
<div className="text-center text-lg">10%</div>
<div className="text-center text-lg">10%</div>
</div>
<div className="grid grid-cols-4 gap-4 items-center py-2 border-b border-white/5">
<div className="text-left text-base text-[#8f9ab5]">
                    Max Daily Loss
                  </div>
<div className="text-center text-lg">5%</div>
<div className="text-center text-lg">5%</div>
<div className="text-center text-lg">5%</div>
</div>
</div>
</div>
</div>

<div className="p-8 pt-4 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<span className="text-base text-[#8f9ab5]">Account size:</span>
<span className="text-4xl font-medium">$50,000</span>
</div>
<div className="flex items-center gap-6">
<div className="text-left">
<div className="flex items-center gap-2">
<span className="text-base text-[#8f9ab5]">Price:</span>
<span className="text-4xl font-medium">$246</span>
</div>
</div>
<button className="bg-gradient-to-b from-[#10b981] to-[#059669] text-white px-10 py-4 rounded-xl text-base font-semibold hover:from-[#34d399] hover:to-[#10b981] transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] border border-emerald-400/50 whitespace-nowrap">
                Start Challenge
              </button>
</div>
</div>
</div>
</section>

<section className="max-w-[1360px] mx-auto px-6 mb-32 relative reveal">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-to-b from-emerald-400/30 to-transparent rounded-full blur-[120px] pointer-events-none opacity-60 animate-pulse-glow mix-blend-screen"></div>
<div className="text-center relative z-10 pt-10 mb-16">
<div className="w-64 h-64 mx-auto relative mb-12 flex items-center justify-center perspective-[1000px] group">
<div className="absolute inset-0 bg-emerald-500/30 rounded-full blur-[60px] animate-pulse-glow group-hover:bg-emerald-500/40 transition-all duration-700"></div>
<div className="w-full h-full bg-gradient-to-tr from-[#000806] via-emerald-900/80 to-emerald-400/30 rounded-full shadow-[inset_0_0_80px_rgba(255,255,255,0.2),0_20px_100px_rgba(16,185,129,0.5)] relative overflow-hidden border border-emerald-300/50 border-t-emerald-200/80 backdrop-blur-2xl animate-float">
<div className="absolute -inset-1/2 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4yKSIvPjwvc3ZnPg==')] opacity-40 animate-[spin_60s_linear_infinite]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-400 rounded-full shadow-[0_0_40px_rgba(52,211,153,1)] animate-ping"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_20px_#fff]"></div>
</div>
<div className="absolute top-4 -left-10 glass px-4 py-2 rounded-2xl text-xs font-medium text-emerald-200 border-emerald-500/30 animate-float shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              99.9% Uptime
            </div>
<div className="absolute bottom-4 -right-10 glass px-4 py-2 rounded-2xl text-xs font-medium text-emerald-200 border-emerald-500/30 animate-float shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-2" style={{animationDelay: '-2s'}}>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Zero Denials
            </div>
</div>
<h2 className="text-6xl md:text-8xl font-medium tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-white to-emerald-300">
            $2.5+ Million
          </h2>
<p className="text-xl text-[#8f9ab5] mb-2">
            Paid to FundedX Traders Globally
          </p>
</div>

<div className="flex gap-4 overflow-x-auto pb-8 hide-scrollbar snap-x relative z-10">
<div className="min-w-[260px] bg-white/5 border border-white/10 rounded-[1.5rem] p-6 snap-center backdrop-blur-md opacity-70 hover:opacity-100 hover:bg-white/10 transition-all duration-300">
<div className="flex items-center gap-2 mb-6">
<span className="text-lg">🇦🇱</span>
<span className="text-base">Albania</span>
</div>
<div className="text-3xl font-medium">$14,106</div>
</div>
<div className="min-w-[260px] bg-white/5 border border-white/10 rounded-[1.5rem] p-6 snap-center backdrop-blur-md opacity-70 hover:opacity-100 hover:bg-white/10 transition-all duration-300">
<div className="flex items-center gap-2 mb-6">
<span className="text-lg">🇧🇷</span>
<span className="text-base">Brazil</span>
</div>
<div className="text-3xl font-medium">$112,050</div>
</div>
<div className="min-w-[260px] bg-white/5 border border-white/10 rounded-[1.5rem] p-6 snap-center backdrop-blur-md opacity-70 hover:opacity-100 hover:bg-white/10 transition-all duration-300">
<div className="flex items-center gap-2 mb-6">
<span className="text-lg">🇯🇵</span>
<span className="text-base">Japan</span>
</div>
<div className="text-3xl font-medium">$85,400</div>
</div>
<div className="min-w-[260px] bg-white/5 border border-white/10 rounded-[1.5rem] p-6 snap-center backdrop-blur-md opacity-70 hover:opacity-100 hover:bg-white/10 transition-all duration-300">
<div className="flex items-center gap-2 mb-6">
<span className="text-lg">🇬🇧</span>
<span className="text-base">United Kingdom</span>
</div>
<div className="text-3xl font-medium">$215,900</div>
</div>
<div className="min-w-[260px] bg-white/5 border border-white/10 rounded-[1.5rem] p-6 snap-center backdrop-blur-md opacity-70 hover:opacity-100 hover:bg-white/10 transition-all duration-300">
<div className="flex items-center gap-2 mb-6">
<span className="text-lg">🇻🇳</span>
<span className="text-base">Vietnam</span>
</div>
<div className="text-3xl font-medium">$42,300</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-[#000806] pt-20 pb-10 relative z-10">
<div className="max-w-[1360px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-[#011c15] font-semibold text-base shadow-sm">
                FX
              </div>
<span className="text-lg font-medium tracking-tight">FundedX</span>
</div>
<p className="text-sm text-[#8f9ab5] mb-6">
              Join thousands of funded traders accessing leverage capital up to
              $10 million. Keep up to 100% of profits.
            </p>
<div className="flex items-center gap-4">
<a className="text-[#8f9ab5] hover:text-white transition-colors" href="#">
<iconify-icon className="w-5 h-5" icon="solar:twitter-bold"></iconify-icon>
</a>
<a className="text-[#8f9ab5] hover:text-white transition-colors" href="#">
<iconify-icon className="w-5 h-5" icon="solar:camera-bold"></iconify-icon>
</a>
<a className="text-[#8f9ab5] hover:text-white transition-colors" href="#">
<iconify-icon className="w-5 h-5" icon="solar:chat-round-bold"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium mb-4 text-white">Programs</h4>
<ul className="space-y-3 text-sm text-[#8f9ab5]">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Turbo Challenge
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  1 Phase Challenge
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  2 Phase Challenge
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Instant Funding
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-4 text-white">Company</h4>
<ul className="space-y-3 text-sm text-[#8f9ab5]">
<li>
<a className="hover:text-white transition-colors" href="/success-stories">
                  Success Stories
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="https://www.fanbasis.com/affiliate-signup/fundedx">
                  Affiliate Program
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="/contact">
                  Contact Us
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="/faq">
                  FAQ
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-4 text-white">Legal</h4>
<ul className="space-y-3 text-sm text-[#8f9ab5]">
<li>
<a className="hover:text-white transition-colors" href="/terms">
                  Terms &amp; Conditions
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="/privacy">
                  Privacy Policy
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="/refund">
                  Refund Policy
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="https://intercom.help/fundedx/en">
                  Help Center
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8f9ab5]">
<p>
            © 2025 FundedX. All rights reserved. Xenon Group Inc. (2025-00301).
          </p>
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Systems Operational
            </span>
</div>
</div>
</div>
</footer>



    </>
  );
}
