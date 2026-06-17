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



        lucide.createIcons();
    
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
      

<div className="fixed inset-0 z-[-1] bg-[#0F172A]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>

<div className="absolute bottom-0 left-0 right-0 h-screen bg-gradient-to-t from-[#EC4899]/15 via-[#8B5CF6]/5 to-transparent pointer-events-none"></div>
</div>
<div className="fixed inset-0 z-[-1] bg-noise"></div>

<nav className="border-b border-white/5 bg-slate-900/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between text-sm">
<div className="flex items-center gap-8">
<a className="text-slate-300 hover:text-white transition-colors" href="#">Home</a>
<a className="text-white flex items-center gap-1 border-b border-white pb-1 mt-1" href="#">Stages <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i></a>
</div>
<div className="flex items-center gap-2 text-slate-300 hover:text-white cursor-pointer transition-colors">
<i className="w-4 h-4" data-lucide="user" strokeWidth="1.5"></i>
<span>sangamp880</span>
<i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</nav>

<div className="border-b border-white/5 bg-slate-900/30 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center gap-6 overflow-x-auto text-sm text-slate-400">
<a className="flex items-center gap-2 hover:text-white transition-colors whitespace-nowrap" href="#"><i className="w-4 h-4" data-lucide="target" strokeWidth="1.5"></i> Tech + Touch</a>
<a className="flex items-center gap-2 bg-[#047857]/20 text-[#34D399] px-3 py-1.5 rounded-md border border-[#047857]/30 whitespace-nowrap" href="#"><i className="w-4 h-4" data-lucide="book-open" strokeWidth="1.5"></i> Our Story</a>
<a className="flex items-center gap-2 hover:text-white transition-colors whitespace-nowrap" href="#"><i className="w-4 h-4" data-lucide="settings" strokeWidth="1.5"></i> Service Model</a>
<a className="flex items-center gap-2 hover:text-white transition-colors whitespace-nowrap" href="#"><i className="w-4 h-4" data-lucide="building-2" strokeWidth="1.5"></i> Industry Expertise</a>
<a className="flex items-center gap-2 hover:text-white transition-colors whitespace-nowrap" href="#"><i className="w-4 h-4" data-lucide="search" strokeWidth="1.5"></i> Discovery</a>
<a className="flex items-center gap-2 hover:text-white transition-colors whitespace-nowrap" href="#"><i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i> Next Steps</a>
</div>
</div>
<main className="max-w-7xl mx-auto px-6 py-20">

<section className="text-center mb-20 relative z-10">
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-4">Our Story</h1>
<p className="text-xl text-slate-300 font-medium">From Big Four Accounting to Modern HCM</p>
<div className="w-64 h-[2px] mx-auto mt-8 bg-gradient-to-r from-yellow-400 via-cyan-400 to-emerald-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">

<div className="hidden lg:flex absolute top-1/2 left-[31%] -translate-y-1/2 w-8 h-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md items-center justify-center z-20 text-slate-400">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
<div className="hidden lg:flex absolute top-1/2 right-[31%] -translate-y-1/2 w-8 h-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md items-center justify-center z-20 text-slate-400">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>

<div className="group relative flex flex-col rounded-3xl bg-white/[0.03] backdrop-blur-[20px] border border-white/[0.08] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/[0.15] hover:shadow-[0_20px_40px_-15px_rgba(250,204,21,0.1)] overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex justify-between items-start mb-6">
<span className="text-yellow-400 font-medium text-sm">1990s</span>
<div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">1</div>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-2">Ernst &amp; Young<br/>Heritage</h2>
<p className="text-base text-slate-400 mb-8">Built on CPA Foundations</p>

<div className="h-16 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/5 flex items-center justify-center mb-8 relative">
<span className="text-2xl font-medium tracking-tighter text-slate-300 flex items-end">
                        E<span className="text-yellow-400 mr-1">/</span>Y
                    </span>

<div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
</div>

<div className="w-14 h-14 mx-auto rounded-xl bg-[#0F172A] border border-yellow-500/40 shadow-[0_0_20px_rgba(250,204,21,0.15)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(250,204,21,0.3)] transition-all duration-300">
<i className="w-6 h-6 text-yellow-400" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<p className="text-base text-slate-300 text-center leading-relaxed flex-grow">
                    ProLiant was founded by an Ernst &amp; Young accounting executive who brought Big Four precision, controls, and accountability to payroll.
                </p>
<a className="mt-8 text-yellow-400 flex items-center justify-center gap-2 text-sm font-medium hover:text-yellow-300 transition-colors" href="#">
                    Learn more <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="group relative flex flex-col rounded-3xl bg-white/[0.03] backdrop-blur-[20px] border border-white/[0.08] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/[0.15] hover:shadow-[0_20px_40px_-15px_rgba(34,211,238,0.1)] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex justify-between items-start mb-6">
<span className="text-cyan-400 font-medium text-sm">Mid-2000s</span>
<div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">2</div>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-2">PayDayUSA Era</h2>
<p className="text-base text-slate-400 mb-8">Service-First Payroll</p>

<div className="h-16 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/5 flex items-center justify-center gap-2 mb-8 relative">
<div className="w-5 h-5 bg-slate-300 text-slate-900 flex items-center justify-center text-xs font-semibold rounded-sm">$</div>
<span className="text-lg font-medium tracking-tight text-slate-200">PAYDAY<br/><span className="text-xs text-slate-400 uppercase tracking-widest leading-none block -mt-1">USA</span></span>
<div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
</div>

<div className="w-14 h-14 mx-auto rounded-xl bg-[#0F172A] border border-cyan-500/40 shadow-[0_0_20px_rgba(34,211,238,0.15)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] transition-all duration-300">
<i className="w-6 h-6 text-cyan-400" data-lucide="heart" strokeWidth="1.5"></i>
</div>
<p className="text-base text-slate-300 text-center leading-relaxed flex-grow">
                    As PayDayUSA, we became known as the highly service-oriented alternative to the large, impersonal providers. Personal relationships and white-glove service defined this era.
                </p>
<a className="mt-8 text-cyan-400 flex items-center justify-center gap-2 text-sm font-medium hover:text-cyan-300 transition-colors" href="#">
                    Learn more <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="group relative flex flex-col rounded-3xl bg-white/[0.03] backdrop-blur-[20px] border border-white/[0.08] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/[0.15] hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.1)] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex justify-between items-start mb-6">
<span className="text-blue-400 font-medium text-sm">Today</span>
<div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">3</div>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-2">ProLiant</h2>
<p className="text-base text-slate-400 mb-8 min-h-[48px]">30 Years of Payroll Excellence Meets Modern HR Tech</p>

<div className="h-16 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/5 flex items-center justify-center mb-8 relative">
<span className="text-2xl font-semibold tracking-tight text-white italic">ProLiant.</span>
<div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
</div>

<div className="w-14 h-14 mx-auto rounded-xl bg-[#0F172A] border border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.15)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-300">
<i className="w-6 h-6 text-blue-400" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<p className="text-base text-slate-300 text-center leading-relaxed flex-grow">
                    ProLiant emerged as HR tech converged with payroll. We combine three decades of world-class payroll provision with comprehensive HR technology — giving you the best of both worlds.
                </p>
<a className="mt-8 text-blue-400 flex items-center justify-center gap-2 text-sm font-medium hover:text-blue-300 transition-colors" href="#">
                    Learn more <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</section>

<section className="mt-32 relative z-10">
<div className="text-center mb-12">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Our Evolution</h2>
<p className="text-lg text-slate-400">Key milestones that shaped ProLiant from CPA roots to a fully owned HCM platform</p>
</div>

<div className="bg-white/[0.02] backdrop-blur-[20px] border border-white/[0.08] rounded-3xl p-10 md:p-16 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-fuchsia-500/5 to-cyan-500/5 pointer-events-none"></div>
<div className="relative w-full max-w-5xl mx-auto hidden md:block">

<div className="absolute top-[28px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-transparent via-white/15 to-transparent z-0"></div>

<div className="flex justify-between items-start relative z-10">

<div className="flex flex-col items-center gap-4 group cursor-default w-24">

<div className="absolute top-[29px] w-1.5 h-1.5 rounded-full bg-slate-500 z-0"></div>
<div className="w-14 h-14 rounded-2xl bg-[#0F172A] border border-yellow-500/40 shadow-[0_0_15px_rgba(250,204,21,0.1)] flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(250,204,21,0.3)] group-hover:border-yellow-400/60 transition-all duration-300 relative z-10">
<i className="w-6 h-6 text-yellow-400" data-lucide="building" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-semibold text-yellow-400">1986</span>
</div>

<div className="flex flex-col items-center gap-4 group cursor-default w-24">
<div className="absolute top-[29px] w-1.5 h-1.5 rounded-full bg-slate-500 z-0"></div>
<div className="w-14 h-14 rounded-2xl bg-[#0F172A] border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.1)] flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] group-hover:border-emerald-400/60 transition-all duration-300 relative z-10">
<i className="w-6 h-6 text-emerald-400" data-lucide="heart" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-semibold text-emerald-400">1993</span>
</div>

<div className="flex flex-col items-center gap-4 group cursor-default w-24">
<div className="absolute top-[29px] w-1.5 h-1.5 rounded-full bg-slate-500 z-0"></div>
<div className="w-14 h-14 rounded-2xl bg-[#0F172A] border border-fuchsia-500/40 shadow-[0_0_15px_rgba(217,70,239,0.1)] flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(217,70,239,0.3)] group-hover:border-fuchsia-400/60 transition-all duration-300 relative z-10">
<i className="w-6 h-6 text-fuchsia-400" data-lucide="code" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-semibold text-fuchsia-400">2005</span>
</div>

<div className="flex flex-col items-center gap-4 group cursor-default w-24">
<div className="absolute top-[29px] w-1.5 h-1.5 rounded-full bg-slate-500 z-0"></div>
<div className="w-14 h-14 rounded-2xl bg-[#0F172A] border border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.1)] flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] group-hover:border-blue-400/60 transition-all duration-300 relative z-10">
<i className="w-6 h-6 text-blue-400" data-lucide="rocket" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-semibold text-blue-400">2010</span>
</div>

<div className="flex flex-col items-center gap-4 group cursor-default w-24">
<div className="absolute top-[29px] w-1.5 h-1.5 rounded-full bg-slate-500 z-0"></div>
<div className="w-14 h-14 rounded-2xl bg-[#0F172A] border border-rose-500/40 shadow-[0_0_15px_rgba(244,63,94,0.1)] flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(244,63,94,0.3)] group-hover:border-rose-400/60 transition-all duration-300 relative z-10">
<i className="w-6 h-6 text-rose-400" data-lucide="award" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-semibold text-rose-400">2016</span>
</div>

<div className="flex flex-col items-center gap-4 group cursor-default w-24">
<div className="absolute top-[29px] w-1.5 h-1.5 rounded-full bg-slate-500 z-0"></div>
<div className="w-14 h-14 rounded-2xl bg-[#0F172A] border border-cyan-500/40 shadow-[0_0_15px_rgba(34,211,238,0.1)] flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] group-hover:border-cyan-400/60 transition-all duration-300 relative z-10">
<i className="w-6 h-6 text-cyan-400" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-semibold text-cyan-400">2026</span>
</div>
</div>
</div>

<div className="flex flex-col gap-8 md:hidden relative">
<div className="absolute left-7 top-0 bottom-0 w-px bg-white/10"></div>

<div className="flex items-center gap-6 relative z-10 group">
<div className="w-14 h-14 shrink-0 rounded-2xl bg-[#0F172A] border border-yellow-500/40 shadow-[0_0_15px_rgba(250,204,21,0.1)] flex items-center justify-center">
<i className="w-6 h-6 text-yellow-400" data-lucide="building" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-semibold text-yellow-400">1986</span>
</div>

</div>

<div className="mt-16 flex justify-center relative z-10">
<div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-2.5 backdrop-blur-md shadow-[0_4px_20px_-5px_rgba(0,0,0,0.5)] text-sm text-slate-300">
<i className="w-4 h-4 text-slate-400" data-lucide="calendar" strokeWidth="1.5"></i>
<span className="font-medium">1986 → 2026: Four decades of innovation and service excellence</span>
</div>
</div>
</div>
</section>

<section className="mt-16 mb-32 relative z-10">
<div className="max-w-4xl mx-auto bg-white/[0.03] backdrop-blur-[20px] border border-white/[0.08] rounded-[2rem] p-10 md:p-14 text-center shadow-2xl shadow-black/50 overflow-hidden relative">

<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">The Best of All Three Worlds</h2>
<p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-14">
                    Today's ProLiant combines <span className="text-yellow-400 font-medium">Big Four rigor</span>, <span className="text-emerald-400 font-medium">boutique service</span>, and <span className="text-blue-400 font-medium">cutting-edge HR technology</span>. With 30 years of world-class payroll provision at our core, we've evolved into a comprehensive HCM platform that never forgot where it came from.
                </p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-[#0F172A]/50 border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.05] hover:border-yellow-500/30 hover:shadow-[0_0_30px_rgba(250,204,21,0.05)] cursor-default">
<i className="w-6 h-6 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform" data-lucide="building" strokeWidth="1.5"></i>
<h3 className="text-sm font-semibold text-white mb-2">CPA Precision</h3>
<p className="text-xs text-slate-400">Accuracy and accountability in every transaction</p>
</div>

<div className="group bg-[#0F172A]/50 border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.05] hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] cursor-default">
<i className="w-6 h-6 text-emerald-400 mx-auto mb-4 group-hover:scale-110 transition-transform" data-lucide="heart" strokeWidth="1.5"></i>
<h3 className="text-sm font-semibold text-white mb-2">Personal Service</h3>
<p className="text-xs text-slate-400">Dedicated teams who know your business</p>
</div>

<div className="group bg-[#0F172A]/50 border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.05] hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.05)] cursor-default">
<i className="w-6 h-6 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" data-lucide="sparkles" strokeWidth="1.5"></i>
<h3 className="text-sm font-semibold text-white mb-2">Modern HCM</h3>
<p className="text-xs text-slate-400">Full-featured platform built for today</p>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
