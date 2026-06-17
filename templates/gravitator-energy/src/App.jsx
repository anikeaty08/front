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
      
<div className="min-h-screen">
<header className="sticky top-0 z-40 backdrop-blur-xl bg-white/80 border-b border-zinc-200/70">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
<div className="h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="text-lg font-semibold tracking-tight text-zinc-950">GV</div>
<div className="text-sm text-zinc-500">Gravitator</div>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
<a className="hover:text-zinc-950 transition" href="#technology">Technology</a>
<a className="hover:text-zinc-950 transition" href="#performance">Performance</a>
<a className="hover:text-zinc-950 transition" href="#applications">Applications</a>
<a className="hover:text-zinc-950 transition" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center rounded-full border border-zinc-300 px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 transition" href="#contact">Talk to team</a>
<a className="inline-flex items-center rounded-full bg-zinc-950 px-4 py-2 text-sm text-white hover:bg-zinc-800 transition" href="#technology">View system</a>
</div>
</div>
</div>
</header>
<main>
<section className="relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(24,24,27,0.06),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_22%),linear-gradient(to_bottom,white,rgba(244,244,245,0.65))]"></div>
<div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24">
<div className="grid lg:grid-cols-2 gap-14 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3 py-1.5 text-xs text-zinc-600 shadow-sm">
<span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
                Next-generation kinetic energy platform
              </div>
<h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-950 leading-none">
                Gravity, engineered into continuous power.
              </h1>
<p className="mt-6 text-base sm:text-lg text-zinc-600 leading-8 max-w-xl">
                Gravitator is a gravity based power generation system designed to convert controlled mass displacement into reliable electrical output with low operating complexity, modular deployment, and resilient uptime.
              </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm text-white hover:bg-zinc-800 transition" href="#contact">
                  Request a system brief
                </a>
<a className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm text-zinc-700 hover:bg-zinc-50 transition" href="#performance">
                  Explore performance
                </a>
</div>
<div className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-zinc-200">
<div>
<div className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">24/7</div>
<div className="mt-1 text-xs sm:text-sm text-zinc-500">steady-cycle generation potential</div>
</div>
<div>
<div className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">Modular</div>
<div className="mt-1 text-xs sm:text-sm text-zinc-500">scaling from local to industrial</div>
</div>
<div>
<div className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">Low Impact</div>
<div className="mt-1 text-xs sm:text-sm text-zinc-500">minimal land and visual footprint</div>
</div>
</div>
</div>
<div className="relative">
<div className="relative rounded-3xl border border-zinc-200 bg-white/80 shadow-[0_20px_80px_rgba(0,0,0,0.08)] overflow-hidden">
<div className="flex items-center justify-between px-5 py-4 border-b border-zinc-200 bg-zinc-50/80">
<div>
<div className="text-sm font-medium text-zinc-900">System Overview</div>
<div className="text-xs text-zinc-500">Gravity cycle architecture</div>
</div>
<div className="rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 text-xs">
                    Active
                  </div>
</div>
<div className="p-6 sm:p-8">
<div className="rounded-2xl bg-zinc-950 text-white p-6">
<div className="grid grid-cols-3 gap-4 text-center">
<div className="rounded-2xl bg-white/5 border border-white/10 p-4">
<div className="flex justify-center mb-3">
<iconify-icon height="22" icon="solar:atom-linear" style={{color: 'white'}} width="22"></iconify-icon>
</div>
<div className="text-xs text-zinc-400">Input Force</div>
<div className="mt-1 text-sm font-medium text-white">Gravity</div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-4">
<div className="flex justify-center mb-3">
<iconify-icon height="22" icon="solar:restart-linear" style={{color: 'white'}} width="22"></iconify-icon>
</div>
<div className="text-xs text-zinc-400">Cycle Mode</div>
<div className="mt-1 text-sm font-medium text-white">Continuous</div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-4">
<div className="flex justify-center mb-3">
<iconify-icon height="22" icon="solar:bolt-linear" style={{color: 'white'}} width="22"></iconify-icon>
</div>
<div className="text-xs text-zinc-400">Output</div>
<div className="mt-1 text-sm font-medium text-white">Electrical</div>
</div>
</div>
<div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center justify-between">
<div>
<div className="text-xs text-zinc-400">Live system efficiency band</div>
<div className="mt-2 text-3xl font-semibold tracking-tight text-white">92%</div>
</div>
<div className="h-24 w-24 rounded-full border-8 border-white/10 border-t-white"></div>
</div>
</div>
</div>
<div className="mt-6 grid sm:grid-cols-2 gap-4">
<div className="rounded-2xl border border-zinc-200 p-5">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-2xl bg-zinc-100 flex items-center justify-center">
<iconify-icon height="20" icon="solar:sort-by-time-linear" style={{color: '#18181b'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-900">Long-duration cycle</div>
<div className="text-xs text-zinc-500">Optimized for persistent output</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-zinc-200 p-5">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-2xl bg-zinc-100 flex items-center justify-center">
<iconify-icon height="20" icon="solar:shield-check-linear" style={{color: '#18181b'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-900">Redundant safety logic</div>
<div className="text-xs text-zinc-500">Monitored mechanical balancing</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="hidden sm:block absolute -bottom-6 -left-6 rounded-3xl border border-zinc-200 bg-white shadow-lg p-4 w-56">
<div className="text-xs text-zinc-500">Projected annual availability</div>
<div className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950">99.2%</div>
<div className="mt-3 h-2 rounded-full bg-zinc-100 overflow-hidden">
<div className="h-full w-[92%] bg-zinc-950 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-20 sm:py-24 border-t border-zinc-200" id="technology">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
<div className="max-w-3xl">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Technology</div>
<h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
              Built around controlled gravitational motion.
            </h2>
<p className="mt-5 text-base text-zinc-600 leading-8">
              The Gravitator platform uses calibrated mass travel, regenerative control systems, and high-efficiency electromechanical conversion to deliver stable output in environments where consistency matters.
            </p>
</div>
<div className="mt-12 grid lg:grid-cols-3 gap-6">
<div className="rounded-3xl border border-zinc-200 bg-white p-7">
<div className="h-12 w-12 rounded-2xl bg-zinc-100 flex items-center justify-center">
<iconify-icon height="22" icon="solar:layers-linear" style={{color: '#18181b'}} width="22"></iconify-icon>
</div>
<h3 className="mt-5 text-lg font-medium text-zinc-950">Modular architecture</h3>
<p className="mt-3 text-sm text-zinc-600 leading-7">
                Deploy single units or stack modules into larger synchronized generation arrays without redesigning the full system.
              </p>
</div>
<div className="rounded-3xl border border-zinc-200 bg-white p-7">
<div className="h-12 w-12 rounded-2xl bg-zinc-100 flex items-center justify-center">
<iconify-icon height="22" icon="solar:tuning-2-linear" style={{color: '#18181b'}} width="22"></iconify-icon>
</div>
<h3 className="mt-5 text-lg font-medium text-zinc-950">Precision control</h3>
<p className="mt-3 text-sm text-zinc-600 leading-7">
                Adaptive balancing software regulates cycle timing, energy capture intervals, and load matching across operating states.
              </p>
</div>
<div className="rounded-3xl border border-zinc-200 bg-white p-7">
<div className="h-12 w-12 rounded-2xl bg-zinc-100 flex items-center justify-center">
<iconify-icon height="22" icon="solar:leaf-linear" style={{color: '#18181b'}} width="22"></iconify-icon>
</div>
<h3 className="mt-5 text-lg font-medium text-zinc-950">Low-impact footprint</h3>
<p className="mt-3 text-sm text-zinc-600 leading-7">
                Designed for reduced emissions, quiet operation, and compact installation compared with conventional generation systems.
              </p>
</div>
</div>
</div>
</section>
<section className="py-20 sm:py-24 bg-zinc-50 border-y border-zinc-200" id="performance">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
<div className="grid lg:grid-cols-2 gap-10 items-start">
<div>
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Performance</div>
<h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
                Engineered for reliability under real operational demand.
              </h2>
<p className="mt-5 text-base text-zinc-600 leading-8 max-w-xl">
                From remote infrastructure to industrial backup and grid support, Gravitator is optimized around availability, maintainability, and predictable output behavior.
              </p>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="rounded-3xl border border-zinc-200 bg-white p-6">
<div className="text-xs text-zinc-500">Cycle stability</div>
<div className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950">High</div>
<div className="mt-4 text-sm text-zinc-600">Balanced mechanical design for smoother generation patterns.</div>
</div>
<div className="rounded-3xl border border-zinc-200 bg-white p-6">
<div className="text-xs text-zinc-500">Maintenance interval</div>
<div className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950">Extended</div>
<div className="mt-4 text-sm text-zinc-600">Service access points simplify inspection and upkeep cycles.</div>
</div>
<div className="rounded-3xl border border-zinc-200 bg-white p-6">
<div className="text-xs text-zinc-500">Deployment model</div>
<div className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950">Flexible</div>
<div className="mt-4 text-sm text-zinc-600">Suitable for standalone sites or integrated energy systems.</div>
</div>
<div className="rounded-3xl border border-zinc-200 bg-white p-6">
<div className="text-xs text-zinc-500">Energy continuity</div>
<div className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950">Resilient</div>
<div className="mt-4 text-sm text-zinc-600">Built to support dependable generation across long-duration cycles.</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-20 sm:py-24" id="applications">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
<div className="max-w-2xl">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Applications</div>
<h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
                Designed for infrastructure that cannot afford interruption.
              </h2>
</div>
<p className="max-w-xl text-base text-zinc-600 leading-8">
              Gravitator fits use cases where efficient, low-footprint, and resilient power systems create strategic advantage.
            </p>
</div>
<div className="mt-12 grid md:grid-cols-2 xl:grid-cols-4 gap-5">
<div className="rounded-3xl border border-zinc-200 p-6 bg-white">
<div className="h-11 w-11 rounded-2xl bg-zinc-100 flex items-center justify-center">
<iconify-icon height="21" icon="solar:buildings-2-linear" style={{color: '#18181b'}} width="21"></iconify-icon>
</div>
<h3 className="mt-5 text-base font-medium text-zinc-950">Commercial facilities</h3>
<p className="mt-3 text-sm text-zinc-600 leading-7">Reliable support for large-scale buildings and operational campuses.</p>
</div>
<div className="rounded-3xl border border-zinc-200 p-6 bg-white">
<div className="h-11 w-11 rounded-2xl bg-zinc-100 flex items-center justify-center">
<iconify-icon height="21" icon="solar:server-square-linear" style={{color: '#18181b'}} width="21"></iconify-icon>
</div>
<h3 className="mt-5 text-base font-medium text-zinc-950">Data infrastructure</h3>
<p className="mt-3 text-sm text-zinc-600 leading-7">Stable backup and continuous power support for critical compute environments.</p>
</div>
<div className="rounded-3xl border border-zinc-200 p-6 bg-white">
<div className="h-11 w-11 rounded-2xl bg-zinc-100 flex items-center justify-center">
<iconify-icon height="21" icon="solar:global-linear" style={{color: '#18181b'}} width="21"></iconify-icon>
</div>
<h3 className="mt-5 text-base font-medium text-zinc-950">Remote installations</h3>
<p className="mt-3 text-sm text-zinc-600 leading-7">Independent generation in areas where grid access is limited or unstable.</p>
</div>
<div className="rounded-3xl border border-zinc-200 p-6 bg-white">
<div className="h-11 w-11 rounded-2xl bg-zinc-100 flex items-center justify-center">
<iconify-icon height="21" icon="solar:factory-linear" style={{color: '#18181b'}} width="21"></iconify-icon>
</div>
<h3 className="mt-5 text-base font-medium text-zinc-950">Industrial continuity</h3>
<p className="mt-3 text-sm text-zinc-600 leading-7">Operational support for production sites with constant energy demand.</p>
</div>
</div>
</div>
</section>
<section className="py-20 sm:py-24" id="contact">
<div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
<div className="rounded-[2rem] border border-zinc-200 bg-zinc-950 text-white p-8 sm:p-12">
<div className="max-w-2xl">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-400">Contact</div>
<h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
                Bring gravity-powered generation into your energy roadmap.
              </h2>
<p className="mt-5 text-sm sm:text-base text-zinc-300 leading-8">
                Speak with the Gravitator team to review deployment models, technical requirements, and integration pathways for your site.
              </p>
</div>
<form className="mt-8 grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-zinc-400 mb-2">Name</label>
<input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-white/30" placeholder="Your name" type="text"/>
</div>
<div>
<label className="block text-xs text-zinc-400 mb-2">Company</label>
<input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-white/30" placeholder="Organization" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="block text-xs text-zinc-400 mb-2">Email</label>
<input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-white/30" placeholder="you@company.com" type="email"/>
</div>
<div className="sm:col-span-2">
<label className="block text-xs text-zinc-400 mb-2">Project details</label>
<textarea className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-white/30" placeholder="Tell us about your energy goals" rows="5"></textarea>
</div>
<div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 pt-2">
<button className="inline-flex items-center justify-center rounded-full bg-white text-zinc-950 px-5 py-3 text-sm hover:bg-zinc-100 transition" type="submit">
                  Request consultation
                </button>
<a className="inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-3 text-sm text-white hover:bg-white/5 transition" href="mailto:hello@gravitator.energy">
                  hello@gravitator.energy
                </a>
</div>
</form>
</div>
</div>
</section>
</main>
<footer className="border-t border-zinc-200">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div>
<div className="text-sm font-medium tracking-tight text-zinc-950">GV</div>
<div className="text-xs text-zinc-500 mt-1">Gravitator — gravity based power generation system</div>
</div>
<div className="text-xs text-zinc-500">
          © 2026 Gravitator. Built for resilient energy infrastructure.
        </div>
</div>
</footer>
</div>

    </>
  );
}
