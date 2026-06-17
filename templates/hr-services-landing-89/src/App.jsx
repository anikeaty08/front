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
      

<div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,rgba(5,5,5,1)_60%)]"></div>
<main className="max-w-[80rem] mx-auto px-6 py-24 w-full relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">

<aside className="w-full lg:w-1/4 flex flex-col shrink-0">
<div className="mb-10 lg:mb-12">
<h1 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4">Unified HR<br/>Platform</h1>
<p className="text-sm text-gray-400 font-light leading-relaxed pr-4">
                    Explore our integrated suite of tools designed to streamline your entire workforce lifecycle.
                </p>
</div>

<nav className="flex flex-row lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 hide-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0">
<button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 text-gray-400 hover:text-gray-200 hover:bg-white/[0.03]">
<iconify-icon className="text-lg opacity-70" icon="solar:users-group-rounded-linear"></iconify-icon>
                    HR &amp; Benefits
                </button>

<button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 bg-gradient-to-b from-white/[0.08] to-white/[0.02] text-white border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
<iconify-icon className="text-lg text-white" icon="solar:clock-circle-linear"></iconify-icon>
                    Time &amp; Labor
                </button>
<button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 text-gray-400 hover:text-gray-200 hover:bg-white/[0.03]">
<iconify-icon className="text-lg opacity-70" icon="solar:wallet-money-linear"></iconify-icon>
                    Payroll
                </button>
<button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 text-gray-400 hover:text-gray-200 hover:bg-white/[0.03]">
<iconify-icon className="text-lg opacity-70" icon="solar:user-id-linear"></iconify-icon>
                    Talent Acquisition
                </button>
<button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 text-gray-400 hover:text-gray-200 hover:bg-white/[0.03]">
<iconify-icon className="text-lg opacity-70" icon="solar:chart-square-linear"></iconify-icon>
                    Performance
                </button>
<button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 text-gray-400 hover:text-gray-200 hover:bg-white/[0.03]">
<iconify-icon className="text-lg opacity-70" icon="solar:shield-check-linear"></iconify-icon>
                    Compliance &amp; Risk
                </button>
</nav>
</aside>

<section className="w-full lg:w-3/4 flex flex-col pt-2 lg:pt-0">

<div className="mb-12 border-b border-white/[0.05] pb-8">
<div className="flex items-center gap-4 mb-3">
<div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center">
<iconify-icon className="text-xl text-gray-300" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-white">Time &amp; Labor</h2>
</div>
<p className="text-base text-gray-400 font-light max-w-2xl">
                    Intelligent time tracking and scheduling software that automates compliance, reduces administrative burden, and prevents time theft.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

<div className="space-y-8">
<h3 className="text-xs font-medium text-gray-500 uppercase tracking-widest flex items-center gap-2">
<iconify-icon className="text-sm" icon="solar:layers-linear"></iconify-icon>
                        Core Capabilities
                    </h3>
<ul className="space-y-5">
<li className="flex items-start gap-4 group">
<div className="mt-0.5 text-gray-500 group-hover:text-gray-300 transition-colors">
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div>
<span className="text-sm font-medium text-gray-200 block mb-1">Time Tracking</span>
<span className="text-sm text-gray-500 font-light leading-relaxed">Capture accurate clock-ins across devices with biometric and pin options.</span>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-0.5 text-gray-500 group-hover:text-gray-300 transition-colors">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<span className="text-sm font-medium text-gray-200 block mb-1">Geofencing</span>
<span className="text-sm text-gray-500 font-light leading-relaxed">Ensure remote or field employees punch in only at authorized locations.</span>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-0.5 text-gray-500 group-hover:text-gray-300 transition-colors">
<iconify-icon className="text-lg" icon="solar:calendar-linear"></iconify-icon>
</div>
<div>
<span className="text-sm font-medium text-gray-200 block mb-1">Shift Scheduling</span>
<span className="text-sm text-gray-500 font-light leading-relaxed">Drag-and-drop scheduling to optimize coverage and manage labor costs.</span>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-0.5 text-gray-500 group-hover:text-gray-300 transition-colors">
<iconify-icon className="text-lg" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div>
<span className="text-sm font-medium text-gray-200 block mb-1">Overtime Rules</span>
<span className="text-sm text-gray-500 font-light leading-relaxed">Automate complex overtime calculations based on state and local laws.</span>
</div>
</li>
</ul>
</div>

<div className="space-y-8">
<h3 className="text-xs font-medium text-gray-500 uppercase tracking-widest flex items-center gap-2">
<iconify-icon className="text-sm" icon="solar:graph-up-linear"></iconify-icon>
                        Business Impact
                    </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4">

<div className="p-5 rounded-2xl bg-white/[0.01] border border-white/[0.04] hover:bg-white/[0.02] hover:border-white/[0.08] transition-all duration-300 flex flex-col justify-center">
<span className="text-2xl font-medium tracking-tight text-white mb-2">20%</span>
<span className="text-xs text-gray-400 font-light leading-snug">Average reduction in organizational overtime costs.</span>
</div>

<div className="p-5 rounded-2xl bg-white/[0.01] border border-white/[0.04] hover:bg-white/[0.02] hover:border-white/[0.08] transition-all duration-300 flex flex-col justify-center">
<span className="text-2xl font-medium tracking-tight text-white mb-2">100%</span>
<span className="text-xs text-gray-400 font-light leading-snug">Data accuracy flowing directly into integrated payroll.</span>
</div>

<div className="p-5 rounded-2xl bg-white/[0.01] border border-white/[0.04] hover:bg-white/[0.02] hover:border-white/[0.08] transition-all duration-300 flex flex-col justify-center xl:col-span-2">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-xl text-gray-300" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-sm font-medium text-white">Automated FLSA</span>
</div>
<span className="text-xs text-gray-400 font-light leading-snug">Continuous compliance monitoring and elimination of buddy punching through secure terminal access.</span>
</div>
</div>
</div>
</div>
</section>
</main>

    </>
  );
}
