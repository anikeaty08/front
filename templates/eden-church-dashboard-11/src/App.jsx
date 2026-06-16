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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-white border-b border-[#E8E8E5]">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-3" href="#">
<div className="w-9 h-9 bg-[#0A0A0A] flex items-center justify-center rounded-sm">
<span className="text-white text-base font-semibold tracking-tighter">
              E
            </span>
</div>
<span className="text-base font-semibold text-[#0A0A0A] tracking-tight uppercase">
            Eden Dashboard
          </span>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm text-[#6B6B68]">
<a className="text-[#0A0A0A] font-semibold border-b-2 border-[#0A0A0A] py-5" href="#">
            Overview
          </a>
<a className="hover:text-[#0A0A0A] transition-colors py-5" href="#">
            People
          </a>
<a className="hover:text-[#0A0A0A] transition-colors py-5" href="#">
            Giving
          </a>
<a className="hover:text-[#0A0A0A] transition-colors py-5" href="#">
            Attendance
          </a>
<a className="hover:text-[#0A0A0A] transition-colors py-5" href="#">
            Volunteers
          </a>
<a className="hover:text-[#0A0A0A] transition-colors py-5" href="#">
            Classes
          </a>
</div>

<div className="flex items-center gap-4">
<div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F4F4F2] border border-[#E8E8E5]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4F705D] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#4F705D]"></span>
</span>
<span className="text-xs font-medium text-[#0A0A0A] tracking-wide uppercase">
              Live · Synced 2m ago
            </span>
</div>
<button className="w-9 h-9 rounded-full overflow-hidden border border-[#E8E8E5] focus:outline-none focus:ring-2 focus:ring-[#0A0A0A]">
<img alt="Jared" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
</button>
</div>
</div>
</nav>

<header className="max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
<div className="max-w-4xl">
<span className="block text-xs font-medium text-[#6B6B68] tracking-[0.15em] uppercase mb-4">
          Monday · May 25, 2026
        </span>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-[#0A0A0A] leading-[1.05] mb-4">
          Good morning, Jared.
        </h1>
<p className="text-lg text-[#3A3A38] max-w-2xl mb-8">
          Here's how Eden is doing this week.
        </p>
<div className="flex flex-wrap items-center gap-6">
<button className="px-6 py-3 bg-[#0A0A0A] text-white text-sm font-medium rounded-full hover:bg-[#3A3A38] transition-colors">
            Generate Weekly Report
          </button>
<div className="relative flex items-center">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
<iconify-icon className="text-[#6B6B68] text-base" icon="lucide:search"></iconify-icon>
</div>
<input className="bg-white border border-[#E8E8E5] text-[#0A0A0A] text-sm rounded-full py-3 pl-11 pr-6 focus:outline-none focus:border-[#0A0A0A] transition-colors placeholder:text-[#6B6B68] w-[280px]" placeholder="Search any member or family..." type="text"/>
</div>
</div>
</div>
</header>

<section className="max-w-7xl mx-auto px-6 pb-20 w-full">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white p-6 rounded-2xl border border-[#E8E8E5] hover:border-[#0A0A0A] transition-colors duration-300 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-[#6B6B68] tracking-[0.15em] uppercase truncate pr-2">
                Sunday Attendance
              </span>
<span className="inline-flex items-center gap-1 text-xs text-[#4F705D] font-medium whitespace-nowrap">
                ↑ 5%
              </span>
</div>
<div className="bg-[#FAFAFA] rounded-xl p-4 border border-[#E8E8E5] mb-4 h-[72px]">
<div className="flex items-end justify-between gap-1.5 h-full w-full">
<div className="flex-1 bg-[#C5D6CC] rounded-sm h-[65%]"></div>
<div className="flex-1 bg-[#87A995] rounded-sm h-[72%]"></div>
<div className="flex-1 bg-[#87A995] rounded-sm h-[80%]"></div>
<div className="flex-1 bg-[#4F705D] rounded-sm h-[95%]"></div>
</div>
</div>
<div className="flex items-baseline justify-between mb-1">
<span className="font-['Anton'] text-6xl text-[#0A0A0A] leading-none tracking-tight">
                882
              </span>
<span className="text-xs text-[#6B6B68] text-right leading-tight">
                4-wk avg
                <span className="font-medium text-[#0A0A0A]">841</span>
</span>
</div>
</div>
<p className="mt-3 text-sm text-[#3A3A38]">Last Sunday — May 18</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-[#E8E8E5] hover:border-[#0A0A0A] transition-colors duration-300 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-[#6B6B68] tracking-[0.15em] uppercase truncate pr-2">
                Giving This Month
              </span>
<span className="inline-flex items-center text-xs text-[#3A3A38] font-medium whitespace-nowrap">
                72% to goal
              </span>
</div>
<div className="bg-[#FAFAFA] rounded-xl px-4 border border-[#E8E8E5] mb-4 h-[72px] flex items-center">
<div className="w-full bg-[#E8E8E5] h-2.5 rounded-full overflow-hidden">
<div className="bg-[#4F705D] h-full rounded-full" style={{width: '72%'}}></div>
</div>
</div>
<div className="flex items-baseline justify-between mb-1">
<span className="font-['Anton'] text-6xl text-[#0A0A0A] leading-none tracking-tight">
                $68.4K
              </span>
<span className="text-xs text-[#6B6B68] text-right leading-tight">
                of
                <span className="font-medium text-[#0A0A0A]">$95K</span>
</span>
</div>
</div>
<p className="mt-3 text-sm text-[#3A3A38]">30 days remaining</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-[#E8E8E5] hover:border-[#0A0A0A] transition-colors duration-300 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-[#6B6B68] tracking-[0.15em] uppercase truncate pr-2">
                First-Time Guests
              </span>
<span className="inline-flex items-center text-xs text-[#6B6B68] font-medium whitespace-nowrap">
                This month
              </span>
</div>
<div className="bg-[#FAFAFA] rounded-xl px-2 border border-[#E8E8E5] mb-4 h-[72px] flex items-center justify-center gap-3">
<div className="flex flex-col items-center leading-none">
<span className="font-['Anton'] text-3xl text-[#0A0A0A]">8</span>
<span className="text-[10px] text-[#6B6B68] font-medium tracking-wider mt-1">
                  ADULTS
                </span>
</div>
<div className="w-px h-8 bg-[#E8E8E5]"></div>
<div className="flex flex-col items-center leading-none">
<span className="font-['Anton'] text-3xl text-[#0A0A0A]">16</span>
<span className="text-[10px] text-[#6B6B68] font-medium tracking-wider mt-1">
                  KIDS
                </span>
</div>
</div>
<div className="flex items-baseline justify-between mb-1">
<span className="font-['Anton'] text-6xl text-[#0A0A0A] leading-none tracking-tight">
                24
              </span>
<span className="text-xs text-[#6B6B68] text-right leading-tight">
                vs. 19
                <span className="font-medium text-[#0A0A0A]">last mo</span>
</span>
</div>
</div>
<p className="mt-3 text-sm text-[#3A3A38]">5 still need follow-up</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-[#E8E8E5] hover:border-[#0A0A0A] transition-colors duration-300 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-[#6B6B68] tracking-[0.15em] uppercase truncate pr-2">
                Next Sun Volunteers
              </span>
<span className="inline-flex items-center text-xs text-[#3A3A38] font-medium whitespace-nowrap">
                60% confirmed
              </span>
</div>
<div className="bg-[#FAFAFA] rounded-xl p-3 border border-[#E8E8E5] mb-4 h-[72px] flex flex-col justify-center">
<div className="flex flex-wrap gap-1">
<span className="px-2 py-1 bg-[#E3EBE6] text-[#4F705D] text-[9px] rounded-sm font-medium tracking-wider uppercase">
                  60 Confirmed
                </span>
<span className="px-2 py-1 bg-[#E8E8E5] text-[#3A3A38] text-[9px] rounded-sm font-medium tracking-wider uppercase">
                  11 Unconfirmed
                </span>
<span className="px-2 py-1 bg-[#E8E8E5] text-[#3A3A38] text-[9px] rounded-sm font-medium tracking-wider uppercase">
                  29 Declined
                </span>
</div>
</div>
<div className="flex items-baseline justify-between mb-1">
<span className="font-['Anton'] text-6xl text-[#0A0A0A] leading-none tracking-tight">
                100
              </span>
<span className="text-xs text-[#6B6B68] text-right leading-tight">
<span className="font-medium text-[#0A0A0A]">scheduled</span>
</span>
</div>
</div>
<p className="mt-3 text-sm text-[#3A3A38]">37 positions still unfilled</p>
</div>

</div>
</section>

<section className="bg-[#FAFAFA] border-y border-[#E8E8E5] py-20">
<div className="max-w-7xl mx-auto px-6">
<span className="block text-xs font-medium text-[#6B6B68] tracking-[0.15em] uppercase mb-3">
          Pastoral Attention
        </span>
<h3 className="text-xl font-medium tracking-tight text-[#0A0A0A] mb-8">
          Three things worth your time this week.
        </h3>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">

<div className="bg-white p-6 rounded-2xl border border-[#E8E8E5] hover:border-[#0A0A0A] transition-colors duration-300 flex flex-col items-start text-left">
<iconify-icon className="text-2xl text-[#0A0A0A] mb-6" icon="solar:users-group-rounded-linear"></iconify-icon>
<div className="flex items-baseline gap-3 mb-2">
<span className="font-['Anton'] text-5xl text-[#0A0A0A] leading-none">
                12
              </span>
<span className="text-sm font-medium text-[#0A0A0A] leading-tight max-w-[140px]">
                people to personally text this week
              </span>
</div>
<p className="text-xs text-[#6B6B68] mb-8">
              First-time guests from May 18 + May 11 services
            </p>
<button className="mt-auto text-xs font-medium uppercase tracking-[0.1em] text-[#3A3A38] hover:text-[#0A0A0A] transition-colors flex items-center gap-1">
              Open list
              <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="bg-white p-6 rounded-2xl border border-[#E8E8E5] hover:border-[#0A0A0A] transition-colors duration-300 flex flex-col items-start text-left">
<iconify-icon className="text-2xl text-[#0A0A0A] mb-6" icon="solar:danger-circle-linear"></iconify-icon>
<div className="flex items-baseline gap-3 mb-2">
<span className="font-['Anton'] text-5xl text-[#0A0A0A] leading-none">
                5
              </span>
<span className="text-sm font-medium text-[#0A0A0A] leading-tight max-w-[150px]">
                volunteers declining 50%+ of invites
              </span>
</div>
<p className="text-xs text-[#6B6B68] mb-8">
              Trending up — was 2 last month
            </p>
<button className="mt-auto text-xs font-medium uppercase tracking-[0.1em] text-[#3A3A38] hover:text-[#0A0A0A] transition-colors flex items-center gap-1">
              Review
              <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="bg-white p-6 rounded-2xl border border-[#E8E8E5] hover:border-[#0A0A0A] transition-colors duration-300 flex flex-col items-start text-left">
<iconify-icon className="text-2xl text-[#0A0A0A] mb-6" icon="solar:heart-linear"></iconify-icon>
<div className="flex items-baseline gap-3 mb-2">
<span className="font-['Anton'] text-5xl text-[#0A0A0A] leading-none">
                3
              </span>
<span className="text-sm font-medium text-[#0A0A0A] leading-tight">
                baptisms this month
              </span>
</div>
<p className="text-xs text-[#6B6B68] mb-8">
              Sarah Jones, Marcus Reed, Diana Chen
            </p>
<button className="mt-auto text-xs font-medium uppercase tracking-[0.1em] text-[#3A3A38] hover:text-[#0A0A0A] transition-colors flex items-center gap-1">
              Celebrate
              <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="bg-white p-6 rounded-2xl border border-[#E8E8E5] hover:border-[#0A0A0A] transition-colors duration-300 flex flex-col items-start text-left">
<iconify-icon className="text-2xl text-[#0A0A0A] mb-6" icon="lucide:home"></iconify-icon>
<div className="flex items-baseline gap-3 mb-2">
<span className="font-['Anton'] text-5xl text-[#0A0A0A] leading-none">
                12
              </span>
<span className="text-sm font-medium text-[#0A0A0A] leading-tight max-w-[150px]">
                new members this month
              </span>
</div>
<div className="mb-8">
<div className="flex -space-x-2 mb-3">
<div className="w-7 h-7 rounded-full border-2 border-white bg-[#E3EBE6] text-[#0A0A0A] text-[10px] flex items-center justify-center font-medium z-40">
                  SC
                </div>
<div className="w-7 h-7 rounded-full border-2 border-white bg-[#E3EBE6] text-[#0A0A0A] text-[10px] flex items-center justify-center font-medium z-30">
                  ML
                </div>
<div className="w-7 h-7 rounded-full border-2 border-white bg-[#E3EBE6] text-[#0A0A0A] text-[10px] flex items-center justify-center font-medium z-20">
                  DP
                </div>
</div>
<p className="text-xs text-[#6B6B68] leading-tight">
                Sarah Chen, Marcus Lee, Diana Park, +9 others
              </p>
</div>
<button className="mt-auto text-xs font-medium uppercase tracking-[0.1em] text-[#3A3A38] hover:text-[#0A0A0A] transition-colors flex items-center gap-1">
              View list
              <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="bg-[#FAFAFA] py-20 flex-1">
<div className="max-w-7xl mx-auto px-6">
<span className="block text-xs font-medium text-[#6B6B68] tracking-[0.15em] uppercase mb-3">
          Trends
        </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0A0A0A] mb-12">
          The longer view.
        </h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-white p-8 rounded-2xl border border-[#E8E8E5] hover:border-[#0A0A0A] transition-colors duration-300">
<div className="flex items-center justify-between mb-12">
<h3 className="text-xl font-medium tracking-tight text-[#0A0A0A]">
                Sunday Attendance
              </h3>
<div className="flex items-center gap-1 bg-[#F4F4F2] p-1 rounded-full border border-[#E8E8E5]">
<button className="px-4 py-1.5 text-xs font-medium bg-[#0A0A0A] text-white rounded-full">
                  Weekly
                </button>
<button className="px-4 py-1.5 text-xs font-medium text-[#6B6B68] hover:text-[#0A0A0A] rounded-full transition-colors">
                  Monthly
                </button>
</div>
</div>
<div className="h-64 flex items-end justify-between gap-2 mb-6">
<div className="w-full bg-[#C5D6CC] rounded-full" style={{height: '45%'}}></div>
<div className="w-full bg-[#C5D6CC] rounded-full" style={{height: '48%'}}></div>
<div className="w-full bg-[#87A995] rounded-full" style={{height: '52%'}}></div>
<div className="w-full bg-[#87A995] rounded-full" style={{height: '85%'}}></div>
<div className="w-full bg-[#87A995] rounded-full" style={{height: '42%'}}></div>
<div className="w-full bg-[#87A995] rounded-full" style={{height: '55%'}}></div>
<div className="w-full bg-[#87A995] rounded-full" style={{height: '58%'}}></div>
<div className="w-full bg-[#4F705D] rounded-full" style={{height: '60%'}}></div>
<div className="w-full bg-[#4F705D] rounded-full" style={{height: '64%'}}></div>
<div className="w-full bg-[#4F705D] rounded-full" style={{height: '68%'}}></div>
<div className="w-full bg-[#4F705D] rounded-full" style={{height: '75%'}}></div>
<div className="w-full bg-[#1F3027] rounded-full relative" style={{height: '82%'}}>
<div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#0A0A0A] text-white text-sm px-2.5 py-1 rounded-sm font-['Anton'] shadow-sm flex flex-col items-center">
                  882
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-px h-5 bg-[#0A0A0A]"></div>
</div>
</div>
</div>
<div className="flex items-center justify-between text-xs border-t border-[#E8E8E5] pt-4">
<div className="flex items-center gap-2 text-[#6B6B68]">
<span className="w-2 h-2 rounded-full bg-[#4F705D]"></span>
                Total weekly attendance
              </div>
<span className="text-[#3A3A38]">
                4-week average:
                <strong className="font-medium text-[#0A0A0A]">841</strong>
</span>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-[#E8E8E5] hover:border-[#0A0A0A] transition-colors duration-300">
<div className="flex items-center justify-between mb-12">
<h3 className="text-xl font-medium tracking-tight text-[#0A0A0A]">
                Giving vs. Baseline
              </h3>
<div className="flex items-center gap-1 bg-[#F4F4F2] p-1 rounded-full border border-[#E8E8E5]">
<button className="px-4 py-1.5 text-xs font-medium text-[#6B6B68] hover:text-[#0A0A0A] rounded-full transition-colors">
                  Weekly
                </button>
<button className="px-4 py-1.5 text-xs font-medium bg-[#0A0A0A] text-white rounded-full">
                  Monthly
                </button>
</div>
</div>
<div className="h-64 relative flex items-end justify-between gap-2 mb-6">
<div className="absolute top-[28%] left-0 w-full border-t border-dashed border-[#6B6B68] z-0 flex items-center">
<span className="absolute -top-5 left-0 text-[10px] font-medium text-[#6B6B68] tracking-wide">
                  $95K Baseline
                </span>
</div>
<div className="w-full bg-[#C5D6CC] rounded-full z-10" style={{height: '35%'}}></div>
<div className="w-full bg-[#C5D6CC] rounded-full z-10" style={{height: '40%'}}></div>
<div className="w-full bg-[#87A995] rounded-full z-10" style={{height: '45%'}}></div>
<div className="w-full bg-[#87A995] rounded-full z-10" style={{height: '52%'}}></div>
<div className="w-full bg-[#87A995] rounded-full z-10" style={{height: '60%'}}></div>
<div className="w-full bg-[#87A995] rounded-full z-10" style={{height: '85%'}}></div>
<div className="w-full bg-[#87A995] rounded-full z-10" style={{height: '62%'}}></div>
<div className="w-full bg-[#4F705D] rounded-full z-10" style={{height: '65%'}}></div>
<div className="w-full bg-[#4F705D] rounded-full z-10" style={{height: '68%'}}></div>
<div className="w-full bg-[#4F705D] rounded-full z-10" style={{height: '70%'}}></div>
<div className="w-full bg-[#4F705D] rounded-full z-10" style={{height: '72%'}}></div>
<div className="w-full bg-[#0A0A0A] rounded-full z-10" style={{height: '72%'}}></div>
</div>
<div className="flex items-center justify-between text-xs border-t border-[#E8E8E5] pt-4">
<div className="flex items-center gap-2 text-[#6B6B68]">
<span className="w-2 h-2 rounded-full bg-[#0A0A0A]"></span>
                Monthly giving
              </div>
<span className="text-[#3A3A38]">
                12-month average:
                <strong className="font-medium text-[#0A0A0A]">$87.2K</strong>
</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#0A0A0A] py-20 px-6 w-full mt-auto">
<div className="max-w-7xl mx-auto flex flex-col items-center text-center">
<span className="block text-[10px] font-medium text-[#C5D6CC] tracking-[0.15em] uppercase mb-4">
          Jump to
        </span>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-10">
          Where do you want to go?
        </h2>
<div className="flex flex-wrap justify-center gap-4 mb-10">
<button className="px-8 py-3 bg-white text-[#0A0A0A] text-sm font-medium rounded-full hover:bg-[#F4F4F2] transition-colors flex items-center gap-2">
<iconify-icon className="text-base" icon="lucide:dollar-sign"></iconify-icon>
            Giving
          </button>
<button className="px-8 py-3 bg-white text-[#0A0A0A] text-sm font-medium rounded-full hover:bg-[#F4F4F2] transition-colors flex items-center gap-2">
<iconify-icon className="text-base" icon="lucide:users"></iconify-icon>
            Attendance
          </button>
<button className="px-8 py-3 bg-white text-[#0A0A0A] text-sm font-medium rounded-full hover:bg-[#F4F4F2] transition-colors flex items-center gap-2">
<iconify-icon className="text-base" icon="lucide:hand"></iconify-icon>
            Volunteers
          </button>
<button className="px-8 py-3 bg-white text-[#0A0A0A] text-sm font-medium rounded-full hover:bg-[#F4F4F2] transition-colors flex items-center gap-2">
<iconify-icon className="text-base" icon="lucide:book-open"></iconify-icon>
            Classes
          </button>
</div>
<div className="relative w-full max-w-xl mx-auto">
<div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
<iconify-icon className="text-[#6B6B68] text-lg" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="w-full bg-[#1A1A1A] border border-[#3A3A38] text-white text-sm rounded-full py-4 pl-12 pr-6 focus:outline-none focus:border-white focus:bg-[#0A0A0A] transition-colors placeholder:text-[#6B6B68]" placeholder="Search any member or family..." type="text"/>
</div>
</div>
</footer>

    </>
  );
}
