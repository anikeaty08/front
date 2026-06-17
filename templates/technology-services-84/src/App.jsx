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
      

<header className="flex justify-between items-center px-8 py-5 text-sm font-normal text-slate-400 border-b border-white/5">
<div className="flex items-center gap-8">
<a className="hover:text-white transition-colors" href="#">Home</a>
<button className="flex items-center gap-1.5 hover:text-white transition-colors">
                Stages <iconify-icon className="text-base" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
<iconify-icon className="text-base" icon="solar:user-linear"></iconify-icon>
<span>sangamp880</span>
<iconify-icon className="text-base" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</header>

<nav className="flex justify-center items-center gap-10 mt-6 px-4 overflow-x-auto w-full">
<button className="flex items-center gap-2.5 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors whitespace-nowrap">
<iconify-icon className="text-base" icon="solar:widget-5-linear"></iconify-icon> Overview
        </button>
<button className="flex items-center gap-2.5 text-sm font-medium px-4 py-2 rounded-full bg-[#0F292E] text-[#2DD4BF] border border-[#2DD4BF]/20 whitespace-nowrap shadow-[0_0_15px_rgba(45,212,191,0.1)]">
<iconify-icon className="text-base" icon="solar:devices-linear"></iconify-icon> Tech + Touch
        </button>
<button className="flex items-center gap-2.5 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors whitespace-nowrap">
<iconify-icon className="text-base" icon="solar:buildings-linear"></iconify-icon> Industry Expertise
        </button>
<button className="flex items-center gap-2.5 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors whitespace-nowrap">
<iconify-icon className="text-base" icon="solar:share-linear"></iconify-icon> Service Model
        </button>
<button className="flex items-center gap-2.5 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors whitespace-nowrap">
<iconify-icon className="text-base" icon="solar:magnifer-linear"></iconify-icon> Discovery
        </button>
<button className="flex items-center gap-2.5 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors whitespace-nowrap ml-8">
<iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon> Next Steps
        </button>
</nav>

<main className="flex-1 flex flex-col items-center justify-center pt-24 pb-32 px-6 w-full relative">

<div className="grid grid-cols-1 xl:grid-cols-[1fr_auto_1fr] gap-8 xl:gap-6 max-w-6xl w-full items-center relative z-10">

<div className="bg-[#0A101A] border border-[#1E293B]/60 rounded-[2rem] p-10 flex flex-col shadow-2xl relative overflow-hidden xl:mr-4 cursor-pointer hover:border-blue-500/50 transition-colors group">
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-12 group-hover:text-blue-400 transition-colors">Nationals</h2>

<div className="mb-10">
<div className="flex items-center gap-3 text-sm font-medium text-blue-400 uppercase tracking-widest mb-6">
<iconify-icon className="text-[18px]" icon="solar:chart-line-up-linear"></iconify-icon>
                        Scale Advantages
                    </div>
<ul className="flex flex-col gap-5">
<li className="flex items-start gap-4 text-base text-slate-300">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
                            Massive Dev Budget
                        </li>
<li className="flex items-start gap-4 text-base text-slate-300">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
                            World Class Sales &amp; Marketing
                        </li>
</ul>
</div>

<div>
<div className="flex items-center gap-3 text-sm font-medium text-slate-500 uppercase tracking-widest mb-6">
<iconify-icon className="text-[18px]" icon="solar:danger-triangle-linear"></iconify-icon>
                        Structural Limitations
                    </div>
<ul className="flex flex-col gap-5">
<li className="flex items-start gap-4 text-base text-slate-400">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 shrink-0"></span>
                            Generalists by Nature
                        </li>
<li className="flex items-start gap-4 text-base text-slate-400">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 shrink-0"></span>
                            Service capped at scale
                        </li>
<li className="flex items-start gap-4 text-base text-slate-400">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 shrink-0"></span>
                            Beholden to Investors
                        </li>
</ul>
</div>
</div>

<div className="relative flex flex-col items-center justify-center w-full max-w-[360px] mx-auto z-20">
<div className="absolute inset-0 bg-gradient-to-tr from-red-600/40 via-orange-500/30 to-transparent blur-[70px] rounded-full scale-125 z-0 pointer-events-none"></div>
<div className="bg-[#030508] border border-orange-500/20 rounded-[2rem] p-12 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.1)] w-full h-[360px] relative z-10 backdrop-blur-xl">
<div className="absolute inset-0 rounded-[2rem] border border-white/5 pointer-events-none"></div>
<div className="w-14 h-14 rounded-[14px] border border-amber-500/40 bg-amber-500/10 flex items-center justify-center mb-8 text-amber-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
<iconify-icon className="text-[28px]" icon="solar:layers-linear"></iconify-icon>
</div>
<h2 className="text-4xl font-medium text-white tracking-tight mb-4">ProLiant</h2>
<p className="text-base font-medium text-amber-500 text-center leading-relaxed">
                        Proprietary Tech +<br/>Personal Service
                    </p>
</div>
</div>

<div className="bg-[#0A101A] border border-[#1E293B]/60 rounded-[2rem] p-10 flex flex-col shadow-2xl relative overflow-hidden xl:ml-4">
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-12">Regionals</h2>
<div className="mb-10">
<div className="flex items-center gap-3 text-sm font-medium text-[#2DD4BF] uppercase tracking-widest mb-6">
<iconify-icon className="text-[18px]" icon="solar:heart-linear"></iconify-icon>
                        Service Strengths
                    </div>
<ul className="flex flex-col gap-5">
<li className="flex items-start gap-4 text-base text-slate-300">
<span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] mt-2 shrink-0 shadow-[0_0_8px_rgba(45,212,191,0.6)]"></span>
                            High Service
                        </li>
<li className="flex items-start gap-4 text-base text-slate-300">
<span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] mt-2 shrink-0 shadow-[0_0_8px_rgba(45,212,191,0.6)]"></span>
                            Industry Specialists
                        </li>
</ul>
</div>
<div>
<div className="flex items-center gap-3 text-sm font-medium text-slate-500 uppercase tracking-widest mb-6">
<iconify-icon className="text-[18px]" icon="solar:extension-linear"></iconify-icon>
                        Platform Limitations
                    </div>
<ul className="flex flex-col gap-5">
<li className="flex items-start gap-4 text-base text-slate-400">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 shrink-0"></span>
                            Limited Tech
                        </li>
<li className="flex items-start gap-4 text-base text-slate-400">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 shrink-0"></span>
                            No Control as Reseller
                        </li>
<li className="flex items-start gap-4 text-base text-slate-400">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 shrink-0"></span>
                            Gets Acquired
                        </li>
</ul>
</div>
</div>
</div>

<div className="flex flex-col items-center mt-32 z-10 w-full px-4 text-center">
<h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-8">
                Bridging the gap between scale and service.
            </h1>
<div className="flex h-[3px] w-28 rounded-full overflow-hidden mt-2">
<div className="w-1/2 bg-blue-600"></div>
<div className="w-1/2 bg-[#2DD4BF]"></div>
</div>
</div>
</main>


<div className="fixed inset-0 z-[100] bg-[#04060A]/70 backdrop-blur-md flex justify-center lg:justify-start items-center p-4 lg:pl-[12%] animate-in fade-in duration-300">

<div className="w-full max-w-[440px] bg-[#080C13]/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col relative transform transition-all scale-100 opacity-100 animate-in zoom-in-[0.98] duration-300">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[120px] bg-blue-500/20 blur-[70px] rounded-full pointer-events-none"></div>
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>

<div className="px-8 pt-10 pb-6 relative z-10 flex flex-col gap-4">
<button className="absolute top-6 right-6 text-slate-500 hover:text-white bg-white/5 hover:bg-white/10 w-8 h-8 rounded-full flex items-center justify-center transition-all focus:outline-none border border-white/5">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium self-start shadow-[0_0_20px_rgba(59,130,246,0.1)]">
<iconify-icon className="text-sm" icon="solar:buildings-3-linear"></iconify-icon>
                    Big National Providers
                </div>
<div className="mt-1">
<h3 className="text-[26px] font-medium text-white tracking-tight leading-[1.2]">
                        Technology-Driven,<br />
<span className="text-slate-400">Service-Light</span>
</br></h3>
</div>
</div>

<div className="px-8 mb-8 relative z-10">
<div className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.05] rounded-2xl p-5 relative overflow-hidden group/overview">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600/50"></div>
<p className="text-sm text-slate-300 leading-relaxed">
                        Large-scale providers who prioritize software and automation over personalized service.
                    </p>
</div>
</div>

<div className="px-8 mb-8 relative z-10">
<h4 className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-5 flex items-center gap-2">
<iconify-icon className="text-sm" icon="solar:checklist-minimalistic-linear"></iconify-icon>
                    Key Characteristics
                </h4>
<ul className="flex flex-col gap-3.5">
<li className="flex items-start gap-3.5 group/item">
<div className="w-[22px] h-[22px] rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:border-blue-500/40 group-hover/item:bg-blue-500/10 transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
<iconify-icon className="text-[10px] text-blue-400 opacity-50 group-hover/item:opacity-100 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-400 group-hover/item:text-slate-200 transition-colors leading-relaxed">Proprietary software platforms with regular updates</span>
</li>
<li className="flex items-start gap-3.5 group/item">
<div className="w-[22px] h-[22px] rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:border-blue-500/40 group-hover/item:bg-blue-500/10 transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
<iconify-icon className="text-[10px] text-blue-400 opacity-50 group-hover/item:opacity-100 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-400 group-hover/item:text-slate-200 transition-colors leading-relaxed">Self-service portals and automated workflows</span>
</li>
<li className="flex items-start gap-3.5 group/item">
<div className="w-[22px] h-[22px] rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:border-blue-500/40 group-hover/item:bg-blue-500/10 transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
<iconify-icon className="text-[10px] text-blue-400 opacity-50 group-hover/item:opacity-100 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-400 group-hover/item:text-slate-200 transition-colors leading-relaxed">Large customer base with standardized solutions</span>
</li>
<li className="flex items-start gap-3.5 group/item">
<div className="w-[22px] h-[22px] rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:border-blue-500/40 group-hover/item:bg-blue-500/10 transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
<iconify-icon className="text-[10px] text-blue-400 opacity-50 group-hover/item:opacity-100 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-400 group-hover/item:text-slate-200 transition-colors leading-relaxed">Lower touch, call-center style support</span>
</li>
<li className="flex items-start gap-3.5 group/item">
<div className="w-[22px] h-[22px] rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:border-blue-500/40 group-hover/item:bg-blue-500/10 transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
<iconify-icon className="text-[10px] text-blue-400 opacity-50 group-hover/item:opacity-100 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-400 group-hover/item:text-slate-200 transition-colors leading-relaxed">Focus on efficiency and scale over personalization</span>
</li>
<li className="flex items-start gap-3.5 group/item">
<div className="w-[22px] h-[22px] rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:border-blue-500/40 group-hover/item:bg-blue-500/10 transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
<iconify-icon className="text-[10px] text-blue-400 opacity-50 group-hover/item:opacity-100 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-400 group-hover/item:text-slate-200 transition-colors leading-relaxed">Limited flexibility for custom requirements</span>
</li>
</ul>
</div>

<div className="px-8 py-6 bg-[#04060A]/60 border-t border-white/5 relative z-10 flex items-center justify-between gap-4 backdrop-blur-sm">
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest shrink-0">Examples</span>
<div className="flex flex-wrap gap-2 justify-end">
<span className="px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/10 text-slate-300 text-xs font-medium hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white transition-all cursor-default select-none shadow-sm shadow-black/20">ADP</span>
<span className="px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/10 text-slate-300 text-xs font-medium hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white transition-all cursor-default select-none shadow-sm shadow-black/20">Paychex</span>
<span className="px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/10 text-slate-300 text-xs font-medium hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white transition-all cursor-default select-none shadow-sm shadow-black/20">Paycom</span>
<span className="px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/10 text-slate-300 text-xs font-medium hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white transition-all cursor-default select-none shadow-sm shadow-black/20">Paylocity</span>
</div>
</div>
</div>
</div>


<div className="fixed bottom-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-medium text-slate-400 hover:bg-white/[0.06] transition-colors cursor-pointer backdrop-blur-md z-50">
<iconify-icon className="text-sm -rotate-90" icon="solar:play-linear"></iconify-icon>
        Made in Aura
    </div>

    </>
  );
}
