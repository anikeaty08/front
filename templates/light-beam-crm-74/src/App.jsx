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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


      document.addEventListener('DOMContentLoaded', function () {
        // Icons
        if (window.lucide) {
          lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
        }

        // Year
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();

        // Chart
        const el = document.getElementById('pipelineChart');
        if (el && window.Chart) {
          const ctx = el.getContext('2d');
          const gradient = ctx.createLinearGradient(0, 0, 0, 180);
          gradient.addColorStop(0, 'rgba(16, 185, 129, 0.28)');
          gradient.addColorStop(1, 'rgba(16, 185, 129, 0.02)');

          new Chart(ctx, {
            type: 'line',
            data: {
              labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6'],
              datasets: [
                {
                  label: 'Velocity',
                  data: [18, 22, 21, 27, 29, 31],
                  borderColor: 'rgb(16, 185, 129)',
                  backgroundColor: gradient,
                  borderWidth: 2,
                  fill: true,
                  tension: 0.35,
                  pointRadius: 0
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
                tooltip: {
                  backgroundColor: 'rgba(15, 23, 42, 0.95)',
                  padding: 10,
                  titleFont: { family: 'Inter', weight: '600' },
                  bodyFont: { family: 'Inter', weight: '500' },
                  displayColors: false
                }
              },
              scales: {
                x: {
                  grid: { display: false },
                  ticks: { color: '#64748b', font: { family: 'Inter', weight: '500', size: 10 } }
                },
                y: {
                  grid: { color: 'rgba(100,116,139,0.15)', drawBorder: false },
                  ticks: { color: '#64748b', font: { family: 'Inter', weight: '500', size: 10 }, maxTicksLimit: 5 }
                }
              }
            }
          });
        }
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
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-1/2" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="emerald-filter-container" style={{filter: 'hue-rotate(130deg) saturate(2) brightness(0.8) contrast(1.1)', width: '100%', height: '100%', position: 'absolute', top: '0', left: '0'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bmaMERjX2VZDtPrh4Zwx"></div>

</div></div>

<header className="relative z-10 border-b border-slate-800/70">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md grid place-items-center ring-1 bg-slate-100 text-black ring-white/5">
<span className="text-xs font-semibold tracking-tight">LB</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-base sm:text-lg font-semibold tracking-tight text-slate-100">Light Beam</span>
<span className="text-slate-500 text-sm font-medium tracking-tight">CRM</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:underline underline-offset-4 text-slate-400 hover:text-slate-100" href="#features">Features</a>
<a className="text-sm font-medium hover:underline underline-offset-4 text-slate-400 hover:text-slate-100" href="#solutions">Solutions</a>
<a className="text-sm font-medium hover:underline underline-offset-4 text-slate-400 hover:text-slate-100" href="#pricing">Pricing</a>
<a className="text-sm font-medium hover:underline underline-offset-4 text-slate-400 hover:text-slate-100" href="#resources">Resources</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center text-sm font-medium text-slate-300 hover:text-slate-100" href="#">
              Sign in
            </a>
<a className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium shadow-sm ring-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/40 bg-slate-100 text-black ring-white/5 hover:bg-slate-200 hover:ring-white/10" href="#get-started">
<i className="h-4 w-4" data-lucide="sparkles" strokeWidth="1.5"></i>
              Get started
            </a>
</div>
</div>
</div>
</header>

<section className="overflow-hidden relative">

<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(65% 65% at 50% 50%, rgba(99,102,241,0.25) 0%, rgba(14,165,233,0.18) 35%, rgba(236,72,153,0.12) 70%, rgba(255,255,255,0) 100%)'}}></div>
<div className="absolute -bottom-24 -right-24 h-[22rem] w-[22rem] rounded-full blur-3xl opacity-20" style={{background: 'radial-gradient(70% 70% at 50% 50%, rgba(16,185,129,0.2) 0%, rgba(59,130,246,0.16) 40%, rgba(255,255,255,0) 100%)'}}></div>
</div>
<div className="sm:px-6 lg:px-8 sm:pt-20 lg:pt-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pl-4 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-x-12 gap-y-12 items-center">

<div className="">
<div className="inline-flex items-center gap-2 rounded-full px-2.5 py-1.5 text-xs font-medium ring-1 backdrop-blur bg-black/80 text-slate-300 ring-slate-800">
<i className="h-3.5 w-3.5 text-amber-500" data-lucide="zap" strokeWidth="1.5"></i>
        New: AI deal scoring and auto-routing
      </div>
<h1 className="sm:text-5xl lg:text-6xl text-4xl font-semibold text-slate-100 tracking-tight mt-5">
        Pipeline clarity at the speed of light
      </h1>
<p className="mt-4 text-base sm:text-lg max-w-xl text-slate-400">
        See every deal, predict revenue with confidence, and automate the busywork. Designed for modern GTM teams who
        move fast.
      </p>
<div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<a className="inline-flex justify-center items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium shadow-sm ring-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/40 bg-slate-100 text-black ring-white/5 hover:bg-slate-200 hover:ring-white/10" href="#get-started">
<i className="h-4 w-4" data-lucide="rocket" strokeWidth="1.5"></i>
          Start free trial
        </a>
<a className="inline-flex justify-center items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium shadow-sm ring-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/15 bg-black text-slate-100 ring-slate-800 hover:bg-slate-950 hover:ring-slate-700" href="#book-demo">
<i className="h-4 w-4" data-lucide="calendar" strokeWidth="1.5"></i>
          Book a demo
        </a>
</div>
<div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
<div className="flex -space-x-2">
<img alt="Customer avatar" className="h-8 w-8 rounded-full ring-2 object-cover ring-black" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a576fc9c-9638-4d6c-a314-39e5324a86d4_320w.webp"/>
<img alt="Customer avatar" className="h-8 w-8 rounded-full ring-2 object-cover ring-black" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<img alt="Customer avatar" className="h-8 w-8 rounded-full ring-2 object-cover ring-black" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
</div>
<span>Trusted by 3,000+ growing teams</span>
</div>
</div>

<div className="relative">
<div className="overflow-hidden bg-black ring-slate-800 ring-1 rounded-2xl shadow-sm">

<div className="flex cursor-pointer border-slate-800/80 border-b pt-3 pr-4 pb-3 pl-4 items-center justify-between" onclick="window.location.href='https://www.unicorn.studio/edit/Ka61vydGOoin3TZN4Idphttps://www.unicorn.studio/edit/Ka61vydGOoin3TZN4Idp'" role="button">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded grid place-items-center ring-1 bg-slate-100 text-black ring-white/5">
<span className="text-[10px] font-semibold tracking-tight">LB</span>
</div>
<span className="text-sm font-medium text-slate-100">Pipeline</span>
</div>
<div className="flex items-center gap-2 text-slate-500">
<i className="h-4 w-4" data-lucide="search" strokeWidth="1.5"></i>
<i className="h-4 w-4" data-lucide="settings" strokeWidth="1.5"></i>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">

<div className="rounded-lg border border-slate-800">
<div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 bg-slate-950">
<span className="text-xs font-medium text-slate-300">New</span>
<span className="text-[10px] text-slate-500">8</span>
</div>
<div className="p-2 space-y-2">
<div className="rounded-md border p-2 border-slate-800 bg-black">
<div className="flex items-center justify-between">
<span className="text-xs font-medium truncate text-slate-200">Acme Inc. — Discovery</span>
<span className="text-[11px] text-slate-500">$12k</span>
</div>
<div className="mt-1 flex items-center gap-2 text-[11px] text-slate-500">
<i className="h-3.5 w-3.5" data-lucide="clock" strokeWidth="1.5"></i>
                  3d idle
                </div>
</div>
<div className="rounded-md border p-2 border-slate-800 bg-black">
<div className="flex items-center justify-between">
<span className="text-xs font-medium truncate text-slate-200">Nimbus — Inbound</span>
<span className="text-[11px] text-slate-500">$4k</span>
</div>
<div className="mt-1 flex items-center gap-2 text-[11px] text-emerald-400">
<i className="h-3.5 w-3.5" data-lucide="trending-up" strokeWidth="1.5"></i>
                  +12% fit
                </div>
</div>
</div>
</div>

<div className="rounded-lg border border-slate-800">
<div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 bg-slate-950">
<span className="text-xs font-medium text-slate-300">Qualified</span>
<span className="text-[10px] text-slate-500">6</span>
</div>
<div className="p-2 space-y-2">
<div className="rounded-md border p-2 border-slate-800 bg-black">
<div className="flex items-center justify-between">
<span className="text-xs font-medium truncate text-slate-200">Zephyr — Pilot</span>
<span className="text-[11px] text-slate-500">$22k</span>
</div>
<div className="mt-1 flex items-center gap-2 text-[11px] text-sky-400">
<i className="h-3.5 w-3.5" data-lucide="bolt" strokeWidth="1.5"></i>
                  SLAs synced
                </div>
</div>
</div>
</div>

<div className="rounded-lg border border-slate-800">
<div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 bg-slate-950">
<span className="text-xs font-medium text-slate-300">Proposal</span>
<span className="text-[10px] text-slate-500">3</span>
</div>
<div className="p-2 space-y-2">
<div className="rounded-md border p-2 border-slate-800 bg-black">
<div className="flex items-center justify-between">
<span className="text-xs font-medium truncate text-slate-200">Orbit — Security review</span>
<span className="text-[11px] text-slate-500">$40k</span>
</div>
<div className="mt-1 flex items-center gap-2 text-[11px] text-amber-400">
<i className="h-3.5 w-3.5" data-lucide="shield" strokeWidth="1.5"></i>
                  Legal pending
                </div>
</div>
</div>
</div>

<div className="rounded-lg border border-slate-800">
<div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 bg-slate-950">
<span className="text-xs font-medium text-slate-300">Closed</span>
<span className="text-[10px] text-slate-500">5</span>
</div>
<div className="p-2 space-y-2">
<div className="rounded-md border p-2 border-slate-800 bg-black">
<div className="flex items-center justify-between">
<span className="text-xs font-medium truncate text-slate-200">Aster — Won</span>
<span className="text-[11px] text-emerald-400">$68k</span>
</div>
<div className="mt-1 flex items-center gap-2 text-[11px] text-emerald-400">
<i className="h-3.5 w-3.5" data-lucide="check" strokeWidth="1.5"></i>
                  Forecast hit
                </div>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-slate-800 bg-slate-950/60">
<div className="rounded-lg ring-1 p-4 bg-black ring-slate-800">
<div className="flex items-center justify-between">
<div>
<h3 className="text-sm font-medium tracking-tight text-slate-100">Pipeline Velocity</h3>
<p className="text-xs text-slate-500">Last 6 weeks</p>
</div>
<div className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400">
<i className="h-3.5 w-3.5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
                14.2%
              </div>
</div>
<div className="mt-4">
<div className="relative h-36">
<canvas className="absolute inset-0 !h-full !w-full" height="180" id="pipelineChart" style={{display: 'block', boxSizing: 'border-box', height: '144px', width: '512px'}} width="640"></canvas>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-3 -left-3 sm:-left-6 rounded-md px-2.5 py-1.5 text-xs font-medium shadow-sm ring-1 bg-black text-slate-300 ring-slate-800">
<i className="h-3.5 w-3.5 inline-block mr-1 align-[-2px] text-amber-500" data-lucide="sun" strokeWidth="1.5"></i>
        Real-time sync enabled
      </div>
</div>
</div>

<div className="mt-12 sm:mt-16">
<div className="text-xs text-slate-500">Trusted by high-velocity teams</div>
<div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
<div className="flex items-center justify-center rounded-md border py-2.5 border-slate-800 bg-black text-slate-200">
<span className="text-sm font-semibold tracking-tight">ALPHA</span>
</div>
<div className="flex items-center justify-center rounded-md border py-2.5 border-slate-800 bg-black text-slate-200">
<span className="text-sm font-semibold tracking-tight">NEXA</span>
</div>
<div className="flex items-center justify-center rounded-md border py-2.5 border-slate-800 bg-black text-slate-200">
<span className="text-sm font-semibold tracking-tight">POLAR</span>
</div>
<div className="flex items-center justify-center rounded-md border py-2.5 border-slate-800 bg-black text-slate-200">
<span className="text-sm font-semibold tracking-tight">LUMO</span>
</div>
<div className="flex items-center justify-center rounded-md border py-2.5 border-slate-800 bg-black text-slate-200">
<span className="text-sm font-semibold tracking-tight">VANTA</span>
</div>
<div className="flex items-center justify-center rounded-md border py-2.5 border-slate-800 bg-black text-slate-200">
<span className="text-sm font-semibold tracking-tight">QUARK</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 sm:py-20 lg:py-24" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-100">Everything you need to light up your pipeline</h2>
<p className="mt-3 text-base text-slate-400">From capture to close, orchestrate every motion with speed and precision.</p>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="rounded-xl ring-1 p-5 transition bg-black ring-slate-800 hover:ring-slate-700">
<div className="h-9 w-9 rounded-md grid place-items-center ring-1 bg-slate-100 text-black ring-white/5">
<i className="h-4.5 w-4.5" data-lucide="brain-circuit" strokeWidth="1.5"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-100">AI deal scoring</h3>
<p className="mt-2 text-sm text-slate-400">Surface the deals that matter most with adaptive models tuned to your motion.</p>
<div className="mt-4 rounded-lg border p-3 border-slate-800 bg-slate-950/60">
<div className="flex items-center justify-between text-sm">
<span className="text-slate-300">Acme — P(Win)</span>
<span className="font-medium text-emerald-400">82%</span>
</div>
<div className="mt-2 h-1.5 w-full rounded-full overflow-hidden bg-slate-800">
<div className="h-full w-[82%] bg-emerald-500"></div>
</div>
</div>
</div>

<div className="rounded-xl ring-1 p-5 transition bg-black ring-slate-800 hover:ring-slate-700">
<div className="h-9 w-9 rounded-md grid place-items-center ring-1 bg-slate-100 text-black ring-white/5">
<i className="h-4.5 w-4.5" data-lucide="workflow" strokeWidth="1.5"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-100">Automation</h3>
<p className="mt-2 text-sm text-slate-400">Auto-route leads, trigger tasks, and sync fields across your stack.</p>
<div className="mt-4 grid grid-cols-3 gap-2">
<div className="rounded-md border px-2.5 py-2 text-center text-[11px] border-slate-800 bg-black text-slate-300">Routing</div>
<div className="rounded-md border px-2.5 py-2 text-center text-[11px] border-slate-800 bg-black text-slate-300">Enrichment</div>
<div className="rounded-md border px-2.5 py-2 text-center text-[11px] border-slate-800 bg-black text-slate-300">Alerts</div>
</div>
</div>

<div className="rounded-xl ring-1 p-5 transition bg-black ring-slate-800 hover:ring-slate-700">
<div className="h-9 w-9 rounded-md grid place-items-center ring-1 bg-slate-100 text-black ring-white/5">
<i className="h-4.5 w-4.5" data-lucide="inbox" strokeWidth="1.5"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-100">Email &amp; calls</h3>
<p className="mt-2 text-sm text-slate-400">Track every touchpoint automatically with two-way sync.</p>
<div className="mt-4 rounded-lg border p-3 border-slate-800 bg-black">
<div className="flex items-center gap-2 text-xs text-slate-400">
<i className="h-4 w-4" data-lucide="mail" strokeWidth="1.5"></i>
                Follow-up sent · 2m ago
              </div>
<div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
<i className="h-4 w-4" data-lucide="phone" strokeWidth="1.5"></i>
                Call logged · 12:41
              </div>
</div>
</div>

<div className="rounded-xl ring-1 p-5 transition bg-black ring-slate-800 hover:ring-slate-700">
<div className="h-9 w-9 rounded-md grid place-items-center ring-1 bg-slate-100 text-black ring-white/5">
<i className="h-4.5 w-4.5" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-100">Forecasting</h3>
<p className="mt-2 text-sm text-slate-400">Understand risk, calls, and upside in one place—updated continuously.</p>
<div className="mt-4 flex items-center justify-between rounded-lg border px-3 py-2 text-sm border-slate-800 bg-black">
<span className="text-slate-300">Q3 Commit</span>
<span className="font-medium text-slate-100">$1.34M</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-14 sm:py-16 border-t border-slate-800/70 bg-slate-950" id="solutions">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:items-start">
<div className="lg:col-span-1">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100">Works with your entire stack</h2>
<p className="mt-3 text-base text-slate-400">Snaps into your tools without the duct tape—sync in minutes, not quarters.</p>
<ul className="mt-6 space-y-3 text-sm text-slate-300">
<li className="flex items-start gap-3">
<i className="h-4.5 w-4.5 mt-0.5 text-slate-100" data-lucide="plug" strokeWidth="1.5"></i>
                Bi-directional sync with field mapping
              </li>
<li className="flex items-start gap-3">
<i className="h-4.5 w-4.5 mt-0.5 text-slate-100" data-lucide="shield-check" strokeWidth="1.5"></i>
                Enterprise-grade security &amp; audit trails
              </li>
<li className="flex items-start gap-3">
<i className="h-4.5 w-4.5 mt-0.5 text-slate-100" data-lucide="cloud" strokeWidth="1.5"></i>
                SOC 2, SSO/SAML, SCIM provisioning
              </li>
</ul>
</div>
<div className="lg:col-span-2">
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
<div className="flex items-center gap-2 rounded-lg ring-1 px-3 py-2.5 transition bg-black ring-slate-800 hover:ring-slate-700">
<div className="h-7 w-7 rounded grid place-items-center ring-1 text-[11px] font-semibold tracking-tight bg-slate-100 text-black ring-white/5">G</div>
<span className="text-sm font-medium text-slate-200">Google</span>
</div>
<div className="flex items-center gap-2 rounded-lg ring-1 px-3 py-2.5 transition bg-black ring-slate-800 hover:ring-slate-700">
<div className="h-7 w-7 rounded grid place-items-center ring-1 text-[11px] font-semibold tracking-tight bg-slate-100 text-black ring-white/5">SF</div>
<span className="text-sm font-medium text-slate-200">Salesforce</span>
</div>
<div className="flex items-center gap-2 rounded-lg ring-1 px-3 py-2.5 transition bg-black ring-slate-800 hover:ring-slate-700">
<div className="h-7 w-7 rounded grid place-items-center ring-1 text-[11px] font-semibold tracking-tight bg-slate-100 text-black ring-white/5">O</div>
<span className="text-sm font-medium text-slate-200">Outlook</span>
</div>
<div className="flex items-center gap-2 rounded-lg ring-1 px-3 py-2.5 transition bg-black ring-slate-800 hover:ring-slate-700">
<div className="h-7 w-7 rounded grid place-items-center ring-1 text-[11px] font-semibold tracking-tight bg-slate-100 text-black ring-white/5">SL</div>
<span className="text-sm font-medium text-slate-200">Slack</span>
</div>
<div className="flex items-center gap-2 rounded-lg ring-1 px-3 py-2.5 transition bg-black ring-slate-800 hover:ring-slate-700">
<div className="h-7 w-7 rounded grid place-items-center ring-1 text-[11px] font-semibold tracking-tight bg-slate-100 text-black ring-white/5">HZ</div>
<span className="text-sm font-medium text-slate-200">HubSpot</span>
</div>
<div className="flex items-center gap-2 rounded-lg ring-1 px-3 py-2.5 transition bg-black ring-slate-800 hover:ring-slate-700">
<div className="h-7 w-7 rounded grid place-items-center ring-1 text-[11px] font-semibold tracking-tight bg-slate-100 text-black ring-white/5">SC</div>
<span className="text-sm font-medium text-slate-200">Snowflake</span>
</div>
<div className="flex items-center gap-2 rounded-lg ring-1 px-3 py-2.5 transition bg-black ring-slate-800 hover:ring-slate-700">
<div className="h-7 w-7 rounded grid place-items-center ring-1 text-[11px] font-semibold tracking-tight bg-slate-100 text-black ring-white/5">ZS</div>
<span className="text-sm font-medium text-slate-200">Zoom</span>
</div>
<div className="flex items-center gap-2 rounded-lg ring-1 px-3 py-2.5 transition bg-black ring-slate-800 hover:ring-slate-700">
<div className="h-7 w-7 rounded grid place-items-center ring-1 text-[11px] font-semibold tracking-tight bg-slate-100 text-black ring-white/5">GH</div>
<span className="text-sm font-medium text-slate-200">GitHub</span>
</div>
</div>
</div>
</div>

<div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="rounded-lg ring-1 p-4 text-center bg-black ring-slate-800">
<div className="text-3xl font-semibold tracking-tight text-slate-100">+28%</div>
<div className="mt-1 text-xs text-slate-400">Win rate</div>
</div>
<div className="rounded-lg ring-1 p-4 text-center bg-black ring-slate-800">
<div className="text-3xl font-semibold tracking-tight text-slate-100">-34%</div>
<div className="mt-1 text-xs text-slate-400">Cycle time</div>
</div>
<div className="rounded-lg ring-1 p-4 text-center bg-black ring-slate-800">
<div className="text-3xl font-semibold tracking-tight text-slate-100">3.2x</div>
<div className="mt-1 text-xs text-slate-400">Pipeline coverage</div>
</div>
<div className="rounded-lg ring-1 p-4 text-center bg-black ring-slate-800">
<div className="text-3xl font-semibold tracking-tight text-slate-100">99.99%</div>
<div className="mt-1 text-xs text-slate-400">Uptime</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 sm:py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="rounded-2xl ring-1 p-6 bg-black ring-slate-800">
<div className="flex items-center gap-3">
<img alt="Customer" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-slate-100">Maya Patel</div>
<div className="text-xs text-slate-500">VP Sales, Nimbus</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-300">
              We replaced three tools and cut our time-to-quote by 40%. The forecasting is eerily accurate and our reps actually love using it.
            </p>
</div>
<div className="rounded-2xl ring-1 p-6 bg-black ring-slate-800">
<div className="flex items-center gap-3">
<img alt="Customer" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-slate-100">Ethan Zhou</div>
<div className="text-xs text-slate-500">RevOps, Lumo</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-300">
              Implementation took days, not months. The automations remove so much manual work—our data is finally clean.
            </p>
</div>
</div>
</div>
</section>

<section className="relative py-16 sm:py-20 border-t border-slate-800/70 bg-slate-950" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-100">Simple, transparent pricing</h2>
<p className="mt-3 text-base text-slate-400">Start free. Upgrade as your team scales.</p>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="flex flex-col rounded-2xl ring-1 p-6 bg-black ring-slate-800">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Starter</h3>
<span className="text-xs text-slate-500">Up to 5 users</span>
</div>
<div className="mt-3">
<div className="text-3xl font-semibold tracking-tight text-slate-100">$0</div>
<div className="text-xs text-slate-500">forever</div>
</div>
<ul className="mt-6 space-y-3 text-sm text-slate-300">
<li className="flex items-start gap-2">
<i className="h-4 w-4 mt-0.5 text-emerald-400" data-lucide="check" strokeWidth="1.5"></i>
                Contact &amp; deal management
              </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 mt-0.5 text-emerald-400" data-lucide="check" strokeWidth="1.5"></i>
                Email sync
              </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 mt-0.5 text-emerald-400" data-lucide="check" strokeWidth="1.5"></i>
                Basic automations
              </li>
</ul>
<a className="mt-6 inline-flex justify-center items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium shadow-sm ring-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/15 bg-black text-slate-100 ring-slate-800 hover:bg-slate-950 hover:ring-slate-700" href="#get-started">Get started</a>
</div>

<div className="flex flex-col rounded-2xl ring-2 p-6 shadow-sm bg-black ring-slate-100">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Growth</h3>
<span className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ring-1 bg-slate-100 text-black ring-white/5">Popular</span>
</div>
<div className="mt-3">
<div className="text-3xl font-semibold tracking-tight text-slate-100">$29</div>
<div className="text-xs text-slate-500">per user / month</div>
</div>
<ul className="mt-6 space-y-3 text-sm text-slate-300">
<li className="flex items-start gap-2">
<i className="h-4 w-4 mt-0.5 text-emerald-400" data-lucide="check" strokeWidth="1.5"></i>
                Everything in Starter
              </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 mt-0.5 text-emerald-400" data-lucide="check" strokeWidth="1.5"></i>
                Advanced automations &amp; routing
              </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 mt-0.5 text-emerald-400" data-lucide="check" strokeWidth="1.5"></i>
                AI deal scoring
              </li>
</ul>
<a className="mt-6 inline-flex justify-center items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium shadow-sm ring-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/40 bg-slate-100 text-black ring-white/5 hover:bg-slate-200 hover:ring-white/10" href="#get-started">
              Try Growth
            </a>
</div>

<div className="flex flex-col rounded-2xl ring-1 p-6 bg-black ring-slate-800">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Enterprise</h3>
<span className="text-xs text-slate-500">Custom</span>
</div>
<div className="mt-3">
<div className="text-3xl font-semibold tracking-tight text-slate-100">Let’s talk</div>
<div className="text-xs text-slate-500">annual</div>
</div>
<ul className="mt-6 space-y-3 text-sm text-slate-300">
<li className="flex items-start gap-2">
<i className="h-4 w-4 mt-0.5 text-emerald-400" data-lucide="check" strokeWidth="1.5"></i>
                SSO/SAML, SCIM, audit logs
              </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 mt-0.5 text-emerald-400" data-lucide="check" strokeWidth="1.5"></i>
                Dedicated environment &amp; support
              </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 mt-0.5 text-emerald-400" data-lucide="check" strokeWidth="1.5"></i>
                Custom objects &amp; permissions
              </li>
</ul>
<a className="mt-6 inline-flex justify-center items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium shadow-sm ring-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/15 bg-black text-slate-100 ring-slate-800 hover:bg-slate-950 hover:ring-slate-700" href="#book-demo">Contact sales</a>
</div>
</div>
</div>
</section>

<section className="relative py-16 sm:py-20" id="get-started">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-2xl ring-1 p-6 sm:p-10 bg-black ring-slate-800">
<div className="absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-25" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(99,102,241,0.22) 0%, rgba(14,165,233,0.16) 50%, rgba(255,255,255,0) 100%)'}}></div>
<div className="relative">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100">Shine a light on your pipeline</h3>
<p className="mt-2 text-sm text-slate-400">Start your 14-day trial. No credit card required.</p>
<form action="#" className="mt-6 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3" method="post">
<label className="sr-only" htmlFor="email">Work email</label>
<input className="w-full rounded-lg border px-3.5 py-2.5 text-sm placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900/20 border-slate-700 bg-black text-slate-100" id="email" name="email" placeholder="you@company.com" required="" type="email"/>
<button className="inline-flex justify-center items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium shadow-sm ring-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/40 bg-slate-100 text-black ring-white/5 hover:bg-slate-200 hover:ring-white/10" type="submit">
<i className="h-4 w-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
                Create account
              </button>
</form>
<div className="mt-3 text-xs text-slate-500">By continuing you agree to our Terms and Privacy.</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-800/70" id="resources">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded grid place-items-center ring-1 bg-slate-100 text-black ring-white/5">
<span className="text-[10px] font-semibold tracking-tight">LB</span>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-100">Light Beam CRM</span>
</div>
<p className="mt-3 text-xs max-w-xs text-slate-400">
              The modern CRM for revenue teams that move fast and love clarity.
            </p>
</div>
<div>
<div className="text-xs font-medium text-slate-100">Product</div>
<ul className="mt-3 space-y-2 text-xs text-slate-400">
<li><a className="hover:underline underline-offset-4 hover:text-slate-100" href="#features">Features</a></li>
<li><a className="hover:underline underline-offset-4 hover:text-slate-100" href="#pricing">Pricing</a></li>
<li><a className="hover:underline underline-offset-4 hover:text-slate-100" href="#">Security</a></li>
</ul>
</div>
<div>
<div className="text-xs font-medium text-slate-100">Company</div>
<ul className="mt-3 space-y-2 text-xs text-slate-400">
<li><a className="hover:underline underline-offset-4 hover:text-slate-100" href="#">About</a></li>
<li><a className="hover:underline underline-offset-4 hover:text-slate-100" href="#">Careers</a></li>
<li><a className="hover:underline underline-offset-4 hover:text-slate-100" href="#">Contact</a></li>
</ul>
</div>
<div>
<div className="text-xs font-medium text-slate-100">Resources</div>
<ul className="mt-3 space-y-2 text-xs text-slate-400">
<li><a className="hover:underline underline-offset-4 hover:text-slate-100" href="#">Docs</a></li>
<li><a className="hover:underline underline-offset-4 hover:text-slate-100" href="#">API</a></li>
<li><a className="hover:underline underline-offset-4 hover:text-slate-100" href="#">Blog</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-6 border-slate-800">
<div className="text-xs text-slate-500">© <span id="year">2026</span> Light Beam, Inc. All rights reserved.</div>
<div className="flex items-center gap-5 text-xs text-slate-400">
<a className="hover:underline underline-offset-4 hover:text-slate-100" href="#">Status</a>
<a className="hover:underline underline-offset-4 hover:text-slate-100" href="#">Privacy</a>
<a className="hover:underline underline-offset-4 hover:text-slate-100" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
