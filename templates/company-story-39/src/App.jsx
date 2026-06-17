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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMwMDAiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9zdmc+')] opacity-50"></div>
<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-white/[0.03] rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/[0.02] rounded-full blur-[120px]"></div>
</div>

<nav className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between relative z-10">
<div className="flex items-center gap-8">

<div className="w-7 h-7 rounded-md flex items-center justify-center text-white text-xs font-semibold tracking-tighter border border-white/10 bg-gradient-to-b from-white/10 to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
          P
        </div>

<div className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-400">
<span className="text-white cursor-pointer">Home</span>
<span className="hover:text-white transition-colors cursor-pointer flex items-center gap-1">Stages <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
<span className="hover:text-white transition-colors cursor-pointer">Collateral</span>
<span className="hover:text-white transition-colors cursor-pointer">IQ</span>
<span className="hover:text-white transition-colors cursor-pointer">ProLab</span>
<span className="hover:text-white transition-colors cursor-pointer">Workspace</span>
<span className="hover:text-white transition-colors cursor-pointer">Brands</span>
<span className="hover:text-white transition-colors cursor-pointer">References</span>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer">
<span className="font-medium">bkinney</span>
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</nav>

<header className="w-full px-6 pt-32 pb-28 flex flex-col items-center text-center relative z-10">
<div className="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
<div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
<span className="text-[11px] font-medium tracking-widest uppercase text-neutral-300">Evolution Timeline</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-[84px] font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/30 mb-8 leading-[1.1]">
      Our Story
    </h1>
<p className="text-base md:text-lg text-neutral-400 max-w-2xl mb-12 font-normal tracking-tight leading-relaxed">
      From Big Four Accounting to Modern HCM. Building unwavering trust through precision, personalized service, and cutting-edge technology.
    </p>

<div className="inline-flex items-center p-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl">
<div className="flex items-center gap-3 px-4 py-1.5 hover:bg-white/[0.04] rounded-full transition-colors cursor-default">
<iconify-icon className="text-[18px] text-neutral-400" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex items-baseline gap-1.5">
<span className="text-sm font-semibold text-white tracking-tight">30+</span>
<span className="text-xs text-neutral-400 font-medium">Years</span>
</div>
</div>
<div className="w-px h-4 bg-white/10"></div>
<div className="flex items-center gap-3 px-4 py-1.5 hover:bg-white/[0.04] rounded-full transition-colors cursor-default">
<iconify-icon className="text-[18px] text-neutral-400" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex items-baseline gap-1.5">
<span className="text-sm font-semibold text-white tracking-tight">1st</span>
<span className="text-xs text-neutral-400 font-medium">In Service</span>
</div>
</div>
</div>
</header>

<section className="relative w-full max-w-6xl mx-auto px-6 pb-40 z-10">

<div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent blur-sm"></div>
</div>
<div className="flex flex-col gap-28 md:gap-40">

<div className="relative flex flex-col md:flex-row items-start md:items-center w-full group">

<div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 w-8 h-8 rounded-full border border-white/10 bg-[#000000] flex items-center justify-center transform md:-translate-x-1/2 md:-translate-y-1/2 z-20 shadow-[0_0_15px_rgba(245,158,11,0.1)] group-hover:border-amber-500/30 transition-colors duration-500">
<div className="w-2 h-2 rounded-full bg-amber-500/80 group-hover:bg-amber-400 group-hover:shadow-[0_0_12px_rgba(251,191,36,0.8)] transition-all duration-500"></div>
</div>

<div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-24 flex flex-col md:items-end md:text-right order-2 md:order-1 mt-6 md:mt-0 pt-2 md:pt-0">
<div className="flex items-center gap-3 mb-4">
<span className="text-[11px] font-semibold text-amber-500 tracking-widest uppercase">1990s</span>
<span className="text-[11px] font-mono text-neutral-600">01</span>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">Ernst &amp; Young Heritage</h3>
<p className="text-sm font-normal text-neutral-400 leading-relaxed max-w-sm">
            Built on pure CPA foundations. ProLiant was founded by an Ernst &amp; Young accounting executive who brought Big Four precision, rigid controls, and absolute accountability to the payroll sector.
          </p>
</div>

<div className="w-full md:w-1/2 pl-16 md:pl-24 md:pr-0 order-1 md:order-2">
<div className="w-full aspect-[4/3] md:aspect-video rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-amber-500/30 transition-all duration-700 shadow-2xl">

<div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute -top-20 -right-20 w-48 h-48 bg-amber-500/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

<div className="relative z-10 flex flex-col gap-2 p-6 border border-white/5 rounded-lg bg-black/40 backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-700">
<div className="flex gap-2">
<div className="w-12 h-2 rounded bg-white/5"></div>
<div className="w-8 h-2 rounded bg-white/5"></div>
<div className="w-4 h-2 rounded bg-amber-500/40"></div>
</div>
<div className="flex gap-2">
<div className="w-8 h-2 rounded bg-white/5"></div>
<div className="w-12 h-2 rounded bg-white/10"></div>
<div className="w-4 h-2 rounded bg-white/5"></div>
</div>
<div className="flex gap-2">
<div className="w-12 h-2 rounded bg-white/5"></div>
<div className="w-4 h-2 rounded bg-white/5"></div>
<div className="w-8 h-2 rounded bg-white/10"></div>
</div>
</div>

<div className="absolute bottom-4 left-5 text-[10px] font-semibold tracking-widest text-neutral-600 uppercase">EY Origin</div>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center w-full group">

<div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 w-8 h-8 rounded-full border border-white/10 bg-[#000000] flex items-center justify-center transform md:-translate-x-1/2 md:-translate-y-1/2 z-20 shadow-[0_0_15px_rgba(168,85,247,0.1)] group-hover:border-purple-500/30 transition-colors duration-500">
<div className="w-2 h-2 rounded-full bg-purple-500/80 group-hover:bg-purple-400 group-hover:shadow-[0_0_12px_rgba(192,132,252,0.8)] transition-all duration-500"></div>
</div>

<div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-24 order-1 md:order-1 flex justify-end">
<div className="w-full aspect-[4/3] md:aspect-video rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-purple-500/30 transition-all duration-700 shadow-2xl">

<div className="absolute inset-0 bg-gradient-to-tr from-purple-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute -bottom-20 -left-20 w-48 h-48 bg-purple-500/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

<div className="relative z-10 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-700">
<div className="w-16 h-16 rounded-full border border-white/20 absolute -translate-x-6 backdrop-blur-md bg-white/[0.01]"></div>
<div className="w-16 h-16 rounded-full border border-purple-500/40 absolute translate-x-6 backdrop-blur-md bg-purple-500/[0.02]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-purple-400 absolute z-20 shadow-[0_0_10px_rgba(192,132,252,1)]"></div>
</div>

<div className="absolute bottom-4 right-5 text-[10px] font-semibold tracking-widest text-neutral-600 uppercase text-right">PayDayUSA</div>
</div>
</div>

<div className="w-full md:w-1/2 pl-16 md:pl-24 md:pr-0 flex flex-col md:items-start text-left order-2 md:order-2 mt-6 md:mt-0 pt-2 md:pt-0">
<div className="flex items-center gap-3 mb-4">
<span className="text-[11px] font-mono text-neutral-600">02</span>
<span className="text-[11px] font-semibold text-purple-400 tracking-widest uppercase">Mid-2000s</span>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">PayDayUSA Era</h3>
<p className="text-sm font-normal text-neutral-400 leading-relaxed max-w-sm">
            The pivot to a service-first methodology. We became known as the highly personalized alternative to large, impersonal national providers. Deep client relationships defined our operational approach.
          </p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center w-full group">

<div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 w-8 h-8 rounded-full border border-cyan-500/30 bg-[#000000] flex items-center justify-center transform md:-translate-x-1/2 md:-translate-y-1/2 z-20 shadow-[0_0_20px_rgba(34,211,238,0.2)] group-hover:border-cyan-400/50 transition-colors duration-500">
<div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)]"></div>
<div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-ping opacity-50"></div>
</div>

<div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-24 flex flex-col md:items-end md:text-right order-2 md:order-1 mt-6 md:mt-0 pt-2 md:pt-0">
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-cyan-400 tracking-widest uppercase border border-cyan-500/20 bg-cyan-500/10 px-2 py-0.5 rounded-full">
<div className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse"></div>
              Present
            </span>
<span className="text-[11px] font-mono text-neutral-600">03</span>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">ProLiant</h3>
<p className="text-sm font-normal text-neutral-400 leading-relaxed max-w-sm">
            The convergence of high-touch service and modern HR technology. We combine three decades of world-class provision with comprehensive tech—giving clients total control without sacrificing support.
          </p>
</div>

<div className="w-full md:w-1/2 pl-16 md:pl-24 md:pr-0 order-1 md:order-2">
<div className="w-full aspect-[4/3] md:aspect-video rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-cyan-500/40 transition-all duration-700 shadow-[0_0_40px_rgba(34,211,238,0.03)]">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:12px_12px] opacity-20"></div>
<div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/[0.04] to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/20 rounded-full blur-[60px] opacity-60 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-slow"></div>

<div className="relative z-10 flex flex-col items-center transform group-hover:scale-105 transition-transform duration-700">
<div className="w-24 h-1 rounded-full bg-cyan-500/40 mb-2 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
<div className="w-32 h-16 border border-cyan-500/20 bg-black/60 backdrop-blur-md rounded-md flex flex-col justify-between p-2 shadow-xl">
<div className="flex justify-between w-full">
<div className="w-4 h-4 rounded-full bg-white/5"></div>
<div className="w-8 h-1 rounded-full bg-white/10 mt-1.5"></div>
</div>
<div className="w-full h-1 rounded-full bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
</div>
</div>

<div className="absolute bottom-4 left-5 text-[10px] font-semibold tracking-widest text-neutral-600 uppercase">ProLiant</div>
</div>
</div>
</div>
</div>
</section>

<footer className="mt-auto border-t border-white/5 bg-[#000000] relative z-10 py-8">
<div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4 text-xs font-normal text-neutral-500">
<span>© ProLiant History</span>
<div className="w-px h-3 bg-white/10"></div>
<span>1990 — Present</span>
</div>
<div className="flex items-center gap-3 text-[11px] font-medium text-neutral-500 uppercase tracking-widest">
<span className="hover:text-white transition-colors cursor-pointer">EY</span>
<iconify-icon className="text-white/20" icon="solar:arrow-right-linear"></iconify-icon>
<span className="hover:text-white transition-colors cursor-pointer">PayDayUSA</span>
<iconify-icon className="text-white/20" icon="solar:arrow-right-linear"></iconify-icon>
<span className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">ProLiant</span>
</div>
</div>
</footer>

    </>
  );
}
