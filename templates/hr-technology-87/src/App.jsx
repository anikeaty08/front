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
      

<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-orange-900/5 rounded-full blur-[100px] pointer-events-none"></div>

<nav className="sticky top-0 z-50 bg-[#030303]/70 backdrop-blur-xl border-b border-white/[0.04]">
<div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-8">
<div className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 bg-white/[0.02] shadow-sm">
<iconify-icon className="text-neutral-200 text-lg" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="hidden lg:flex items-center gap-6 text-sm font-light text-neutral-500">
<a className="hover:text-neutral-200 transition-colors duration-300" href="#">Home</a>
<button className="flex items-center gap-1.5 hover:text-neutral-200 transition-colors duration-300 group">
                        Stages 
                        <iconify-icon className="text-neutral-600 group-hover:text-neutral-400 transition-colors" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<a className="hover:text-neutral-200 transition-colors duration-300" href="#">Collateral</a>
<a className="hover:text-neutral-200 transition-colors duration-300" href="#">IQ</a>
<a className="hover:text-neutral-200 transition-colors duration-300" href="#">ProLab</a>
<a className="hover:text-neutral-200 transition-colors duration-300" href="#">Workspace</a>
<a className="hover:text-neutral-200 transition-colors duration-300" href="#">Brands</a>
<a className="hover:text-neutral-200 transition-colors duration-300" href="#">References</a>
</div>
</div>

<div className="flex items-center gap-3 cursor-pointer group">
<div className="w-7 h-7 bg-neutral-900 rounded-full border border-white/10 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-neutral-400 text-sm" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-center gap-1.5 text-sm font-light text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300">
                    bkinney 
                    <iconify-icon className="text-neutral-600 group-hover:text-neutral-400 transition-colors" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</nav>

<main className="flex-grow max-w-[1200px] mx-auto px-6 pt-24 pb-20 w-full relative z-10">

<div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full ring-1 ring-white/10 bg-white/[0.02] mb-8 backdrop-blur-sm">
<iconify-icon className="text-neutral-400 text-sm" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-neutral-300 tracking-widest uppercase">Evolution Timeline</span>
</div>

<h1 className="text-5xl md:text-7xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 tracking-tighter mb-6 pb-2">
                Our Story
            </h1>
<p className="text-lg md:text-xl text-neutral-400 font-light mb-12 max-w-xl">
                From Big Four Accounting to Modern HCM. A three-decade journey of precision and service.
            </p>

<div className="grid grid-cols-2 gap-4 w-full max-w-md">
<div className="flex flex-col items-center justify-center p-5 rounded-2xl ring-1 ring-white/[0.05] bg-white/[0.01] backdrop-blur-sm">
<div className="text-3xl font-medium text-neutral-200 tracking-tighter mb-1">30+</div>
<div className="text-xs font-normal text-neutral-500 uppercase tracking-widest">Years Experience</div>
</div>
<div className="flex flex-col items-center justify-center p-5 rounded-2xl ring-1 ring-white/[0.05] bg-white/[0.01] backdrop-blur-sm">
<div className="text-3xl font-medium text-neutral-200 tracking-tighter mb-1">1st</div>
<div className="text-xs font-normal text-neutral-500 uppercase tracking-widest">In Client Service</div>
</div>
</div>
</div>

<div className="hidden md:block relative w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12">
<div className="absolute left-[16.6%] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.5)]"></div>
<div className="absolute left-[50%] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.5)]"></div>
<div className="absolute left-[83.3%] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="group relative flex flex-col p-8 rounded-[2rem] bg-neutral-900/20 ring-1 ring-white/[0.05] hover:ring-white/[0.1] transition-all duration-500 overflow-hidden backdrop-blur-md hover:-translate-y-1">

<div className="absolute -right-4 -bottom-6 text-[10rem] font-medium text-white/[0.02] pointer-events-none group-hover:text-orange-500/[0.03] transition-colors duration-500 tracking-tighter leading-none">
                    01
                </div>

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-10">
<div className="flex flex-col gap-1.5">
<span className="text-xs font-medium tracking-widest text-orange-400/80 uppercase">1990s</span>
<span className="text-neutral-500 text-sm font-light">CPA Foundations</span>
</div>
<div className="w-10 h-10 rounded-full ring-1 ring-white/10 flex items-center justify-center bg-white/[0.03] text-neutral-300 group-hover:text-orange-400 group-hover:bg-orange-500/10 transition-all duration-500">
<iconify-icon className="text-xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<h3 className="text-2xl font-medium text-neutral-100 tracking-tight mb-4">Ernst &amp; Young Heritage</h3>
<p className="text-sm font-light text-neutral-400 leading-relaxed mb-10 flex-grow">
                        ProLiant was founded by an Ernst &amp; Young accounting executive who brought <span className="text-neutral-200 font-normal">Big Four precision, controls, and ultimate accountability</span> to the payroll sector.
                    </p>
<div className="pt-6 border-t border-white/[0.05] mt-auto flex items-center justify-between">
<a className="text-sm font-light text-neutral-500 group-hover:text-neutral-300 transition-colors duration-300" href="#">Explore era</a>
<iconify-icon className="text-neutral-600 group-hover:text-orange-400 transition-all duration-300 transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="group relative flex flex-col p-8 rounded-[2rem] bg-neutral-900/20 ring-1 ring-white/[0.05] hover:ring-white/[0.1] transition-all duration-500 overflow-hidden backdrop-blur-md hover:-translate-y-1">

<div className="absolute -right-4 -bottom-6 text-[10rem] font-medium text-white/[0.02] pointer-events-none group-hover:text-purple-500/[0.03] transition-colors duration-500 tracking-tighter leading-none">
                    02
                </div>

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-10">
<div className="flex flex-col gap-1.5">
<span className="text-xs font-medium tracking-widest text-purple-400/80 uppercase">Mid-2000s</span>
<span className="text-neutral-500 text-sm font-light">Service-First Payroll</span>
</div>
<div className="w-10 h-10 rounded-full ring-1 ring-white/10 flex items-center justify-center bg-white/[0.03] text-neutral-300 group-hover:text-purple-400 group-hover:bg-purple-500/10 transition-all duration-500">
<iconify-icon className="text-xl" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<h3 className="text-2xl font-medium text-neutral-100 tracking-tight mb-4">PayDayUSA Era</h3>
<p className="text-sm font-light text-neutral-400 leading-relaxed mb-10 flex-grow">
                        As PayDayUSA, we became known as the <span className="text-neutral-200 font-normal">highly service-oriented alternative</span> to large providers. Deep personal relationships defined our approach.
                    </p>
<div className="pt-6 border-t border-white/[0.05] mt-auto flex items-center justify-between">
<a className="text-sm font-light text-neutral-500 group-hover:text-neutral-300 transition-colors duration-300" href="#">Explore era</a>
<iconify-icon className="text-neutral-600 group-hover:text-purple-400 transition-all duration-300 transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="group relative flex flex-col p-8 rounded-[2rem] bg-blue-950/10 ring-1 ring-white/[0.05] hover:ring-blue-500/20 transition-all duration-500 overflow-hidden backdrop-blur-md hover:-translate-y-1">

<div className="absolute -right-4 -bottom-6 text-[10rem] font-medium text-blue-500/[0.02] pointer-events-none group-hover:text-blue-500/[0.05] transition-colors duration-500 tracking-tighter leading-none">
                    03
                </div>

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-10">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2">
<span className="text-xs font-medium tracking-widest text-blue-400 uppercase">Today</span>
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
</span>
</div>
<span className="text-neutral-500 text-sm font-light">Modern HR Tech</span>
</div>
<div className="w-10 h-10 rounded-full ring-1 ring-blue-500/20 flex items-center justify-center bg-blue-500/10 text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-500/20 transition-all duration-500">
<iconify-icon className="text-xl" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<h3 className="text-2xl font-medium text-neutral-100 tracking-tight mb-4">ProLiant</h3>
<p className="text-sm font-light text-neutral-400 leading-relaxed mb-10 flex-grow">
                        Combining three decades of payroll provision with <span className="text-neutral-200 font-normal">comprehensive HR technology</span>. Emerging as HR tech converges with world-class payroll.
                    </p>
<div className="pt-6 border-t border-white/[0.05] mt-auto flex items-center justify-between">
<a className="text-sm font-light text-neutral-400 group-hover:text-blue-300 transition-colors duration-300" href="#">View platform</a>
<iconify-icon className="text-blue-500/50 group-hover:text-blue-400 transition-all duration-300 transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</main>

<footer className="w-full mt-auto relative z-10 pb-8">
<div className="max-w-[1200px] mx-auto px-6 flex items-center justify-center gap-3 text-xs font-light text-neutral-600">
<iconify-icon className="text-sm opacity-50" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="tracking-wide">Three-decade journey  ·  Ernst &amp; Young → PayDayUSA → ProLiant</span>
</div>
</footer>

    </>
  );
}
