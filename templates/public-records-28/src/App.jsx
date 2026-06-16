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



      // Observe layout safely without heavy animations
      document.addEventListener('DOMContentLoaded', () => {
          const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          if (reduceMotion) {
              document.documentElement.classList.remove('scroll-smooth');
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<a className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-[#1c222b] px-4 py-2 border border-[#30363d] rounded text-white text-sm font-semibold shadow-lg" href="#main-content">
      Skip to main content
    </a>

<header className="sticky top-0 z-50 bg-[#14181f]/90 backdrop-blur-md border-b border-[#30363d] flex flex-col">
<div className="px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-4">
<a className="text-xl font-semibold tracking-tighter uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b949e] rounded" href="/">
            JCSTREAM
          </a>
<div className="h-4 w-px bg-[#30363d] hidden sm:block"></div>
<span className="hidden sm:flex items-center gap-2 text-xs text-[#8b949e] font-mono">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#238636] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#238636]"></span>
</span>
            LIVE MONITOR
          </span>
</div>
<div className="flex items-center gap-3">
<button aria-label="Search records" className="text-[#8b949e] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b949e] rounded p-1">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button aria-label="Filter records" className="text-[#8b949e] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b949e] rounded p-1">
<iconify-icon icon="solar:filter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>

<nav aria-label="Chronological Filter" className="flex overflow-x-auto gap-2 px-4 pb-3 scrollbar-hide">
<button aria-current="page" className="bg-[#ffffff] text-[#14181f] border border-[#ffffff] rounded-full px-3 py-1 flex items-center gap-2 text-xs transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#14181f]">
<span className="uppercase tracking-widest font-semibold">Oct</span>
<span className="font-mono font-semibold bg-[#14181f]/10 px-1.5 rounded-full">
            342
          </span>
</button>
<button className="bg-[#1c222b] text-[#8b949e] border border-[#30363d] rounded-full px-3 py-1 flex items-center gap-2 text-xs hover:border-[#8b949e] hover:text-white transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b949e]">
<span className="uppercase tracking-widest font-semibold">Sep</span>
<span className="font-mono font-semibold text-white">812</span>
</button>
<button className="bg-[#1c222b] text-[#8b949e] border border-[#30363d] rounded-full px-3 py-1 flex items-center gap-2 text-xs hover:border-[#8b949e] hover:text-white transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b949e]">
<span className="uppercase tracking-widest font-semibold">Aug</span>
<span className="font-mono font-semibold text-white">904</span>
</button>
<button className="bg-[#1c222b] text-[#8b949e] border border-[#30363d] rounded-full px-3 py-1 flex items-center gap-2 text-xs hover:border-[#8b949e] hover:text-white transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b949e]">
<span className="uppercase tracking-widest font-semibold">Jul</span>
<span className="font-mono font-semibold text-white">876</span>
</button>
<button className="bg-[#1c222b] text-[#8b949e] border border-[#30363d] rounded-full px-3 py-1 flex items-center gap-2 text-xs hover:border-[#8b949e] hover:text-white transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b949e]">
<span className="uppercase tracking-widest font-semibold">Jun</span>
<span className="font-mono font-semibold text-white">821</span>
</button>
<button className="bg-[#1c222b] text-[#8b949e] border border-[#30363d] rounded-full px-3 py-1 flex items-center gap-2 text-xs hover:border-[#8b949e] hover:text-white transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b949e]">
<span className="uppercase tracking-widest font-semibold">May</span>
<span className="font-mono font-semibold text-white">755</span>
</button>
</nav>
</header>
<main className="pb-12" id="main-content">

<section className="px-4 py-6 sm:py-8 border-b border-[#30363d] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<h1 className="text-5xl font-semibold tracking-tight leading-none text-white">
            342
          </h1>
<p className="text-xs text-[#8b949e] uppercase tracking-widest mt-3 font-semibold">
            Current Oct Bookings
          </p>
</div>
<div className="flex flex-col sm:items-end gap-1">
<p className="text-xs text-[#8b949e] font-semibold uppercase tracking-widest flex items-center gap-1.5">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
            Last Sync
          </p>
<p className="text-xs text-white font-mono">2023-10-27T14:32:00Z</p>
</div>
</section>

<div className="px-4 py-2 bg-[#1c222b] border-b border-[#30363d]">
<h2 className="text-xs font-semibold uppercase tracking-wider text-[#8b949e]">
          Today
        </h2>
</div>

<div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">

<article className="relative bg-[#1c222b] border border-[#30363d] p-3 rounded flex gap-3 hover:border-[#8b949e] transition-colors focus-within:ring-1 focus-within:ring-[#8b949e] focus-within:border-[#8b949e] outline-none group">
<div aria-label="Felony Classification" className="absolute top-0 left-0 bg-[#ff4d4d] text-white px-1.5 py-0.5 rounded-tl rounded-br text-xs font-semibold leading-none z-10 border-b border-r border-[#30363d]">
            F
          </div>
<div className="w-12 shrink-0">
<img alt="HCSO booking photo of COLLINS, MARCUS" className="w-12 h-[60px] object-cover rounded bg-[#14181f] border border-[#30363d]" decoding="async" loading="lazy" src="https://www.aretheyinjail.com/photos/14808689.jpg"/>
</div>
<div className="flex flex-col flex-1 min-w-0 justify-center">
<a aria-label="View record for COLLINS, MARCUS" className="text-sm font-semibold truncate uppercase text-white tracking-tight hover:underline focus:outline-none before:absolute before:inset-0" href="#">
              COLLINS, MARCUS D.
            </a>
<p className="text-xs text-[#ff4d4d] truncate mt-0.5" title="Aggravated Robbery">
<iconify-icon className="mr-1 align-middle" icon="solar:danger-triangle-linear" width="14"></iconify-icon>
              Aggravated Robbery
            </p>
<div className="flex items-center gap-2 mt-2 relative z-20">
<span className="font-mono text-xs font-semibold text-[#8b949e] bg-[#14181f] px-1.5 py-0.5 rounded border border-[#30363d]">
                INMATE ID #: 14808689
              </span>
<span className="text-xs uppercase font-semibold text-[#238636] ml-auto tracking-widest">
                Booked
              </span>
</div>
</div>
</article>

<article className="relative bg-[#1c222b] border border-[#30363d] p-3 rounded flex gap-3 hover:border-[#8b949e] transition-colors focus-within:ring-1 focus-within:ring-[#8b949e] focus-within:border-[#8b949e] outline-none group">
<div aria-label="Misdemeanor Classification" className="absolute top-0 left-0 bg-[#ffd700] text-[#14181f] px-1.5 py-0.5 rounded-tl rounded-br text-xs font-semibold leading-none z-10 border-b border-r border-[#30363d]">
            M
          </div>
<div className="w-12 shrink-0">
<img alt="HCSO booking photo of SMITH, SARAH" className="w-12 h-[60px] object-cover rounded bg-[#14181f] border border-[#30363d]" decoding="async" loading="lazy" src="https://www.aretheyinjail.com/photos/14796306.jpg"/>
</div>
<div className="flex flex-col flex-1 min-w-0 justify-center">
<a aria-label="View record for SMITH, SARAH" className="text-sm font-semibold truncate uppercase text-white tracking-tight hover:underline focus:outline-none before:absolute before:inset-0" href="#">
              SMITH, SARAH A.
            </a>
<p className="text-xs text-[#ffd700] truncate mt-0.5" title="Theft">
<iconify-icon className="mr-1 align-middle" icon="solar:info-circle-linear" width="14"></iconify-icon>
              Theft
            </p>
<div className="flex items-center gap-2 mt-2 relative z-20">
<span className="font-mono text-xs font-semibold text-[#8b949e] bg-[#14181f] px-1.5 py-0.5 rounded border border-[#30363d]">
                INMATE ID #: 14796306
              </span>
<span className="text-xs uppercase font-semibold text-[#238636] ml-auto tracking-widest">
                Booked
              </span>
</div>
</div>
</article>

<article className="relative bg-[#1c222b] border border-[#30363d] p-3 rounded flex gap-3 hover:border-[#8b949e] transition-colors focus-within:ring-1 focus-within:ring-[#8b949e] focus-within:border-[#8b949e] outline-none group opacity-80 hover:opacity-100">
<div aria-label="Felony Classification" className="absolute top-0 left-0 bg-[#ff4d4d] text-white px-1.5 py-0.5 rounded-tl rounded-br text-xs font-semibold leading-none z-10 border-b border-r border-[#30363d]">
            F
          </div>
<div className="w-12 shrink-0">
<img alt="HCSO booking photo of JENKINS, TYLER" className="w-12 h-[60px] object-cover rounded bg-[#14181f] border border-[#30363d] grayscale" decoding="async" loading="lazy" src="https://www.aretheyinjail.com/photos/14767950.jpg"/>
</div>
<div className="flex flex-col flex-1 min-w-0 justify-center">
<a aria-label="View record for JENKINS, TYLER" className="text-sm font-semibold truncate uppercase text-[#8b949e] group-hover:text-white tracking-tight hover:underline focus:outline-none before:absolute before:inset-0 transition-colors" href="#">
              JENKINS, TYLER R.
            </a>
<p className="text-xs text-[#ff4d4d] truncate mt-0.5" title="Possession of Controlled Substances">
<iconify-icon className="mr-1 align-middle" icon="solar:danger-triangle-linear" width="14"></iconify-icon>
              Possession of Controlled Substances
            </p>
<div className="flex items-center gap-2 mt-2 relative z-20">
<span className="font-mono text-xs font-semibold text-[#8b949e] bg-[#14181f] px-1.5 py-0.5 rounded border border-[#30363d]">
                INMATE ID #: 14767950
              </span>
<span className="text-xs uppercase font-semibold text-[#8b949e] ml-auto tracking-widest">
                Released
              </span>
</div>
</div>
</article>

<article className="relative bg-[#1c222b] border border-[#30363d] p-3 rounded flex gap-3 hover:border-[#8b949e] transition-colors focus-within:ring-1 focus-within:ring-[#8b949e] focus-within:border-[#8b949e] outline-none group">
<div aria-label="Misdemeanor Classification" className="absolute top-0 left-0 bg-[#ffd700] text-[#14181f] px-1.5 py-0.5 rounded-tl rounded-br text-xs font-semibold leading-none z-10 border-b border-r border-[#30363d]">
            M
          </div>
<div className="w-12 shrink-0">
<img alt="HCSO booking photo of RODRIGUEZ, LUIS" className="w-12 h-[60px] object-cover rounded bg-[#14181f] border border-[#30363d]" decoding="async" loading="lazy" src="https://www.aretheyinjail.com/photos/14738888.jpg"/>
</div>
<div className="flex flex-col flex-1 min-w-0 justify-center">
<a aria-label="View record for RODRIGUEZ, LUIS" className="text-sm font-semibold truncate uppercase text-white tracking-tight hover:underline focus:outline-none before:absolute before:inset-0" href="#">
              RODRIGUEZ, LUIS
            </a>
<p className="text-xs text-[#ffd700] truncate mt-0.5" title="Disorderly Conduct">
<iconify-icon className="mr-1 align-middle" icon="solar:info-circle-linear" width="14"></iconify-icon>
              Disorderly Conduct
            </p>
<div className="flex items-center gap-2 mt-2 relative z-20">
<span className="font-mono text-xs font-semibold text-[#8b949e] bg-[#14181f] px-1.5 py-0.5 rounded border border-[#30363d]">
                INMATE ID #: 14738888
              </span>
<span className="text-xs uppercase font-semibold text-[#238636] ml-auto tracking-widest">
                Booked
              </span>
</div>
</div>
</article>

<article className="relative bg-[#1c222b] border border-[#30363d] p-3 rounded flex gap-3 hover:border-[#8b949e] transition-colors focus-within:ring-1 focus-within:ring-[#8b949e] focus-within:border-[#8b949e] outline-none group">
<div aria-label="Felony Classification" className="absolute top-0 left-0 bg-[#ff4d4d] text-white px-1.5 py-0.5 rounded-tl rounded-br text-xs font-semibold leading-none z-10 border-b border-r border-[#30363d]">
            F
          </div>
<div className="w-12 shrink-0">
<img alt="HCSO booking photo of WASHINGTON, KEVIN" className="w-12 h-[60px] object-cover rounded bg-[#14181f] border border-[#30363d]" decoding="async" loading="lazy" src="https://www.aretheyinjail.com/photos/14698717.jpg"/>
</div>
<div className="flex flex-col flex-1 min-w-0 justify-center">
<a aria-label="View record for WASHINGTON, KEVIN" className="text-sm font-semibold truncate uppercase text-white tracking-tight hover:underline focus:outline-none before:absolute before:inset-0" href="#">
              WASHINGTON, KEVIN T.
            </a>
<p className="text-xs text-[#ff4d4d] truncate mt-0.5" title="Felonious Assault">
<iconify-icon className="mr-1 align-middle" icon="solar:danger-triangle-linear" width="14"></iconify-icon>
              Felonious Assault
            </p>
<div className="flex items-center gap-2 mt-2 relative z-20">
<span className="font-mono text-xs font-semibold text-[#8b949e] bg-[#14181f] px-1.5 py-0.5 rounded border border-[#30363d]">
                INMATE ID #: 14698717
              </span>
<span className="text-xs uppercase font-semibold text-[#238636] ml-auto tracking-widest">
                Booked
              </span>
</div>
</div>
</article>

<article className="relative bg-[#1c222b] border border-[#30363d] p-3 rounded flex gap-3 hover:border-[#8b949e] transition-colors focus-within:ring-1 focus-within:ring-[#8b949e] focus-within:border-[#8b949e] outline-none group">
<div aria-label="Felony Classification" className="absolute top-0 left-0 bg-[#ff4d4d] text-white px-1.5 py-0.5 rounded-tl rounded-br text-xs font-semibold leading-none z-10 border-b border-r border-[#30363d]">
            F
          </div>
<div className="w-12 shrink-0">
<img alt="HCSO booking photo of BRYANT, JAMES" className="w-12 h-[60px] object-cover rounded bg-[#14181f] border border-[#30363d]" decoding="async" loading="lazy" src="https://www.aretheyinjail.com/photos/14694504.jpg"/>
</div>
<div className="flex flex-col flex-1 min-w-0 justify-center">
<a aria-label="View record for BRYANT, JAMES" className="text-sm font-semibold truncate uppercase text-white tracking-tight hover:underline focus:outline-none before:absolute before:inset-0" href="#">
              BRYANT, JAMES E.
            </a>
<p className="text-xs text-[#ff4d4d] truncate mt-0.5" title="Burglary">
<iconify-icon className="mr-1 align-middle" icon="solar:danger-triangle-linear" width="14"></iconify-icon>
              Burglary
            </p>
<div className="flex items-center gap-2 mt-2 relative z-20">
<span className="font-mono text-xs font-semibold text-[#8b949e] bg-[#14181f] px-1.5 py-0.5 rounded border border-[#30363d]">
                INMATE ID #: 14694504
              </span>
<span className="text-xs uppercase font-semibold text-[#238636] ml-auto tracking-widest">
                Booked
              </span>
</div>
</div>
</article>
</div>

<div className="px-4 py-2 bg-[#1c222b] border-y border-[#30363d] mt-2">
<h2 className="text-xs font-semibold uppercase tracking-wider text-[#8b949e]">
          Yesterday
        </h2>
</div>

<div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">

<article className="relative bg-[#1c222b] border border-[#30363d] p-3 rounded flex gap-3 hover:border-[#8b949e] transition-colors focus-within:ring-1 focus-within:ring-[#8b949e] focus-within:border-[#8b949e] outline-none group opacity-80 hover:opacity-100">
<div aria-label="Misdemeanor Classification" className="absolute top-0 left-0 bg-[#ffd700] text-[#14181f] px-1.5 py-0.5 rounded-tl rounded-br text-xs font-semibold leading-none z-10 border-b border-r border-[#30363d]">
            M
          </div>
<div className="w-12 shrink-0">
<img alt="HCSO booking photo of MARTINEZ, CARLOS" className="w-12 h-[60px] object-cover rounded bg-[#14181f] border border-[#30363d] grayscale" decoding="async" loading="lazy" src="https://www.aretheyinjail.com/photos/14676166.jpg"/>
</div>
<div className="flex flex-col flex-1 min-w-0 justify-center">
<a aria-label="View record for MARTINEZ, CARLOS" className="text-sm font-semibold truncate uppercase text-[#8b949e] group-hover:text-white tracking-tight hover:underline focus:outline-none before:absolute before:inset-0 transition-colors" href="#">
              MARTINEZ, CARLOS
            </a>
<p className="text-xs text-[#ffd700] truncate mt-0.5" title="Criminal Trespass">
<iconify-icon className="mr-1 align-middle" icon="solar:info-circle-linear" width="14"></iconify-icon>
              Criminal Trespass
            </p>
<div className="flex items-center gap-2 mt-2 relative z-20">
<span className="font-mono text-xs font-semibold text-[#8b949e] bg-[#14181f] px-1.5 py-0.5 rounded border border-[#30363d]">
                INMATE ID #: 14676166
              </span>
<span className="text-xs uppercase font-semibold text-[#8b949e] ml-auto tracking-widest">
                Released
              </span>
</div>
</div>
</article>

<article className="relative bg-[#1c222b] border border-[#30363d] p-3 rounded flex gap-3 hover:border-[#8b949e] transition-colors focus-within:ring-1 focus-within:ring-[#8b949e] focus-within:border-[#8b949e] outline-none group opacity-80 hover:opacity-100">
<div aria-label="Felony Classification" className="absolute top-0 left-0 bg-[#ff4d4d] text-white px-1.5 py-0.5 rounded-tl rounded-br text-xs font-semibold leading-none z-10 border-b border-r border-[#30363d]">
            F
          </div>
<div className="w-12 shrink-0">
<img alt="HCSO booking photo of WILLIAMS, DAVID" className="w-12 h-[60px] object-cover rounded bg-[#14181f] border border-[#30363d] grayscale" decoding="async" loading="lazy" src="https://www.aretheyinjail.com/photos/14663979.jpg"/>
</div>
<div className="flex flex-col flex-1 min-w-0 justify-center">
<a aria-label="View record for WILLIAMS, DAVID" className="text-sm font-semibold truncate uppercase text-[#8b949e] group-hover:text-white tracking-tight hover:underline focus:outline-none before:absolute before:inset-0 transition-colors" href="#">
              WILLIAMS, DAVID L.
            </a>
<p className="text-xs text-[#ff4d4d] truncate mt-0.5" title="Grand Theft of a Motor Vehicle">
<iconify-icon className="mr-1 align-middle" icon="solar:danger-triangle-linear" width="14"></iconify-icon>
              Grand Theft of a Motor Vehicle
            </p>
<div className="flex items-center gap-2 mt-2 relative z-20">
<span className="font-mono text-xs font-semibold text-[#8b949e] bg-[#14181f] px-1.5 py-0.5 rounded border border-[#30363d]">
                INMATE ID #: 14663979
              </span>
<span className="text-xs uppercase font-semibold text-[#8b949e] ml-auto tracking-widest">
                Released
              </span>
</div>
</div>
</article>

<article className="relative bg-[#1c222b] border border-[#30363d] p-3 rounded flex gap-3 hover:border-[#8b949e] transition-colors focus-within:ring-1 focus-within:ring-[#8b949e] focus-within:border-[#8b949e] outline-none group">
<div aria-label="Misdemeanor Classification" className="absolute top-0 left-0 bg-[#ffd700] text-[#14181f] px-1.5 py-0.5 rounded-tl rounded-br text-xs font-semibold leading-none z-10 border-b border-r border-[#30363d]">
            M
          </div>
<div className="w-12 shrink-0">
<img alt="HCSO booking photo of BROWN, MICHAEL" className="w-12 h-[60px] object-cover rounded bg-[#14181f] border border-[#30363d]" decoding="async" loading="lazy" src="https://www.aretheyinjail.com/photos/14653644.jpg"/>
</div>
<div className="flex flex-col flex-1 min-w-0 justify-center">
<a aria-label="View record for BROWN, MICHAEL" className="text-sm font-semibold truncate uppercase text-white tracking-tight hover:underline focus:outline-none before:absolute before:inset-0" href="#">
              BROWN, MICHAEL P.
            </a>
<p className="text-xs text-[#ffd700] truncate mt-0.5" title="Operating a Vehicle Under the Influence">
<iconify-icon className="mr-1 align-middle" icon="solar:info-circle-linear" width="14"></iconify-icon>
              Operating a Vehicle Under the Influence
            </p>
<div className="flex items-center gap-2 mt-2 relative z-20">
<span className="font-mono text-xs font-semibold text-[#8b949e] bg-[#14181f] px-1.5 py-0.5 rounded border border-[#30363d]">
                INMATE ID #: 14653644
              </span>
<span className="text-xs uppercase font-semibold text-[#238636] ml-auto tracking-widest">
                Booked
              </span>
</div>
</div>
</article>

<article className="relative bg-[#1c222b] border border-[#30363d] p-3 rounded flex gap-3 hover:border-[#8b949e] transition-colors focus-within:ring-1 focus-within:ring-[#8b949e] focus-within:border-[#8b949e] outline-none group">
<div aria-label="Felony Classification" className="absolute top-0 left-0 bg-[#ff4d4d] text-white px-1.5 py-0.5 rounded-tl rounded-br text-xs font-semibold leading-none z-10 border-b border-r border-[#30363d]">
            F
          </div>
<div className="w-12 shrink-0">
<img alt="HCSO booking photo of DAVIS, AMANDA" className="w-12 h-[60px] object-cover rounded bg-[#14181f] border border-[#30363d]" decoding="async" loading="lazy" src="https://www.aretheyinjail.com/photos/14584135.jpg"/>
</div>
<div className="flex flex-col flex-1 min-w-0 justify-center">
<a aria-label="View record for DAVIS, AMANDA" className="text-sm font-semibold truncate uppercase text-white tracking-tight hover:underline focus:outline-none before:absolute before:inset-0" href="#">
              DAVIS, AMANDA J.
            </a>
<p className="text-xs text-[#ff4d4d] truncate mt-0.5" title="Trafficking in Drugs">
<iconify-icon className="mr-1 align-middle" icon="solar:danger-triangle-linear" width="14"></iconify-icon>
              Trafficking in Drugs
            </p>
<div className="flex items-center gap-2 mt-2 relative z-20">
<span className="font-mono text-xs font-semibold text-[#8b949e] bg-[#14181f] px-1.5 py-0.5 rounded border border-[#30363d]">
                INMATE ID #: 14584135
              </span>
<span className="text-xs uppercase font-semibold text-[#238636] ml-auto tracking-widest">
                Booked
              </span>
</div>
</div>
</article>
</div>
<div className="px-4 py-8 flex justify-center">
<button className="bg-[#1c222b] hover:bg-[#30363d] border border-[#30363d] text-white text-xs font-semibold uppercase tracking-widest px-6 py-2 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b949e]">
          Load More Records
        </button>
</div>
</main>


    </>
  );
}
