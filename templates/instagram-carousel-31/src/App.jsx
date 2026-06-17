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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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
      

<div className="snap-center shrink-0 w-full md:w-auto h-[80vh] md:h-[600px] flex items-center justify-center px-4">
<div className="relative w-full md:w-[450px] h-full card-premium rounded-[40px] flex flex-col justify-between p-8 overflow-hidden group">

<div className="flex justify-center pt-4">
<div className="flex items-center gap-2 bg-white/5 border border-white/10 pr-4 pl-1.5 py-1.5 rounded-full backdrop-blur-md">
<div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 flex items-center justify-center">
<i className="w-3 h-3 stroke-[3]" data-lucide="alert-triangle"></i>
</div>
<span className="text-[10px] tracking-widest uppercase font-medium text-white/80">Industry Truth</span>
</div>
</div>

<div className="flex flex-col items-center justify-center text-center -mt-8 relative z-10">

<div className="mb-6 relative">
<div className="absolute inset-0 bg-red-500 blur-[80px] opacity-10"></div>
<i className="w-32 h-32 text-white/90 stroke-[1]" data-lucide="shield-alert"></i>
</div>

<h1 className="font-sans font-semibold text-6xl tracking-tighter leading-[0.9] text-white mb-4">
                    Most agencies<br/>
<span className="font-serif italic text-red-400 font-normal opacity-90">scam people.</span>
</h1>
</div>

<div className="flex justify-center pb-4">
<div className="flex flex-col items-center gap-2 animate-bounce duration-[2000ms]">
<span className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">Why? Swipe</span>
<i className="w-5 h-5 text-white/40" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-full md:w-auto h-[80vh] md:h-[600px] flex items-center justify-center px-4">
<div className="relative w-full md:w-[450px] h-full card-premium rounded-[40px] flex flex-col justify-between p-8 overflow-hidden">

<div className="flex justify-between items-center z-10">
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
<span className="text-[10px] text-neutral-600 font-mono">02 / 08</span>
</div>

<div className="flex flex-col justify-start mt-8 flex-grow z-10">
<h2 className="font-sans font-medium text-4xl tracking-tighter leading-[1.05] text-white mb-8">
                    They make <br/><span className="text-[#C5F848] font-serif italic text-glow">big promises.</span>
</h2>

<div className="w-full h-48 bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative flex flex-col justify-end overflow-hidden">

<div className="absolute inset-0 border-b border-white/5 top-1/2"></div>

<div className="absolute top-4 left-4 z-10">
<div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">Outsource to:</div>
<div className="text-sm text-white font-medium">Someone who doesn't care</div>
</div>

<svg className="w-full h-24 overflow-visible" preserveaspectratio="none">

<path className="opacity-30" d="M0,80 L100,20" fill="none" stroke="#C5F848" stroke-dasharray="2 2" strokeWidth="1"></path>

<path d="M0,80 L150,85 L300,90" fill="none" stroke="#ef4444" strokeWidth="2"></path>
<circle cx="300" cy="90" fill="#ef4444" r="4"></circle>
</svg>
<span className="absolute top-4 right-4 text-[10px] text-[#C5F848]/50 font-mono uppercase tracking-wider">Hype</span>
<span className="absolute bottom-4 right-4 text-[10px] text-red-400 font-mono uppercase tracking-wider">Reality</span>
</div>
<p className="mt-8 font-sans text-lg text-neutral-400 leading-snug font-light">
                    Then outsource everything to someone who doesn’t care.
                </p>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-full md:w-auto h-[80vh] md:h-[600px] flex items-center justify-center px-4">
<div className="relative w-full md:w-[450px] h-full card-premium rounded-[40px] flex flex-col justify-between p-8 overflow-hidden">

<div className="flex justify-between items-center z-10">
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
<span className="text-[10px] text-neutral-600 font-mono">03 / 08</span>
</div>

<div className="flex flex-col justify-start mt-8 flex-grow z-10">
<h2 className="font-sans font-medium text-3xl tracking-tighter leading-[1.1] text-white mb-2">
                    So you get...
                </h2>

<div className="mt-8 space-y-4">

<div className="w-full bg-white/[0.03] border border-white/5 rounded-xl p-4 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-neutral-500" data-lucide="layout-template"></i>
</div>
<span className="font-sans text-neutral-300">Lazy templates</span>
</div>

<div className="w-full bg-white/[0.03] border border-white/5 rounded-xl p-4 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-neutral-500" data-lucide="heart-crack"></i>
</div>
<span className="font-sans text-neutral-300">Dead engagement</span>
</div>

<div className="w-full bg-red-500/[0.05] border border-red-500/20 rounded-xl p-4 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-red-400" data-lucide="user-x"></i>
</div>
<span className="font-sans text-white font-medium">And no leads.</span>
</div>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-full md:w-auto h-[80vh] md:h-[600px] flex items-center justify-center px-4">
<div className="relative w-full md:w-[450px] h-full card-premium rounded-[40px] flex flex-col justify-center p-10 overflow-hidden">

<div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-[0.03] blur-[100px] rounded-full"></div>
<div className="relative z-10">
<i className="w-8 h-8 text-neutral-400 mb-6" data-lucide="clock"></i>
<h2 className="font-sans font-medium text-4xl tracking-tighter leading-[1.1] text-white">
                    But by the time <br/>
<span className="text-neutral-500">you realize it...</span>
</h2>
<div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent my-8"></div>
<h2 className="font-sans font-medium text-4xl tracking-tighter leading-[1.1] text-white">
                    They’ve already <br/>
<span className="text-white font-serif italic font-normal">moved on.</span>
</h2>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-full md:w-auto h-[80vh] md:h-[600px] flex items-center justify-center px-4">
<div className="relative w-full md:w-[450px] h-full card-premium rounded-[40px] flex flex-col justify-between p-8 overflow-hidden">

<div className="flex justify-between items-center z-10">
<div className="w-2 h-2 rounded-full bg-[#C5F848]"></div>
<span className="text-[10px] text-neutral-600 font-mono">05 / 08</span>
</div>

<div className="flex flex-col justify-center flex-grow z-10">
<p className="font-sans text-neutral-500 mb-6 text-sm">I’ve seen too many people getting scammed.</p>
<h2 className="font-sans font-medium text-3xl tracking-tighter leading-tight text-white mb-8">
                    If you want an Instagram brand that <span className="text-[#C5F848] border-b border-[#C5F848]/30">actually grows,</span>
</h2>

<div className="relative w-full h-40 flex items-center justify-center bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>

<svg className="w-full h-full p-4 overflow-visible">
<path d="M10,120 Q100,120 150,80 T300,20" fill="none" stroke="#C5F848" strokeWidth="2"></path>
<circle className="animate-pulse" cx="300" cy="20" fill="#C5F848" r="4"></circle>
</svg>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-full md:w-auto h-[80vh] md:h-[600px] flex items-center justify-center px-4">
<div className="relative w-full md:w-[450px] h-full bg-[#C5F848] rounded-[40px] flex flex-col justify-between p-8 overflow-hidden shadow-[0_20px_50px_-20px_rgba(197,248,72,0.3)]">
<div className="absolute inset-0 bg-grain mix-blend-overlay opacity-30"></div>
<div className="z-10 h-full flex flex-col justify-center">
<i className="w-12 h-12 text-black mb-6 fill-black/10 stroke-[1.5]" data-lucide="crown"></i>
<h2 className="font-sans font-semibold text-4xl tracking-tighter leading-[1.05] text-black/80 mb-2">
                    You need content that positions you as the
                </h2>
<h2 className="font-serif italic font-normal text-5xl tracking-tight leading-[1] text-black">
                    go-to authority.
                </h2>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-full md:w-auto h-[80vh] md:h-[600px] flex items-center justify-center px-4">
<div className="relative w-full md:w-[450px] h-full card-premium rounded-[40px] flex flex-col justify-between p-8 overflow-hidden">

<div className="flex justify-between items-center z-10">
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
<span className="text-[10px] text-neutral-600 font-mono">07 / 08</span>
</div>

<div className="flex flex-col justify-center flex-grow z-10">
<h3 className="font-sans text-xl text-white font-medium mb-8 leading-tight">
                    That’s what I do at <br/><span className="text-[#C5F848]">IG Content Factory.</span>
</h3>
<div className="space-y-4 mb-10">
<div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
<i className="w-5 h-5 text-[#C5F848]" data-lucide="check"></i>
<span className="font-sans text-white text-base">No fluff.</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
<i className="w-5 h-5 text-[#C5F848]" data-lucide="check"></i>
<span className="font-sans text-white text-base">No crappy hacks.</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
<i className="w-5 h-5 text-[#C5F848]" data-lucide="check"></i>
<span className="font-sans text-white text-base">No fake numbers.</span>
</div>
</div>
<div className="border-t border-white/10 pt-6">
<p className="font-serif italic text-2xl text-white text-center">Just real, compounding growth.</p>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-full md:w-auto h-[80vh] md:h-[600px] flex items-center justify-center px-4">
<div className="relative w-full md:w-[450px] h-full card-premium rounded-[40px] flex flex-col justify-between p-8 overflow-hidden group border border-white/10 hover:border-[#C5F848]/30 transition-all duration-500">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#C5F848] opacity-[0.05] blur-[100px] rounded-t-full pointer-events-none"></div>

<div className="flex justify-between items-center z-10 opacity-50">
<span className="font-sans font-medium text-xs">@igcontentfactory</span>
</div>

<div className="flex flex-col items-center justify-center flex-grow z-10 text-center relative w-full">
<h2 className="font-sans font-semibold text-3xl tracking-tighter leading-[1.1] text-white mb-2">
                    Want content that works like an <span className="font-serif italic text-[#C5F848] font-normal">asset?</span>
</h2>

<div className="w-full max-w-[280px] relative mt-10 group-hover:-translate-y-2 transition-transform duration-500">

<div className="bg-neutral-900 border border-white/10 rounded-full h-14 flex items-center px-6 relative z-10 shadow-2xl">
<span className="text-neutral-300 text-sm font-medium mr-3">Reply "IG"</span>
<div className="w-0.5 h-4 bg-[#C5F848] animate-pulse"></div>
</div>

<div className="absolute top-0 right-2 h-14 flex items-center z-20">
<div className="w-8 h-8 rounded-full bg-[#C5F848] flex items-center justify-center">
<i className="w-4 h-4 text-black rotate-45" data-lucide="arrow-up"></i>
</div>
</div>

<div className="absolute -bottom-6 -right-4 z-30 drop-shadow-lg animate-[bounce_2s_infinite]">
<i className="w-8 h-8 text-white fill-black" data-lucide="mouse-pointer-2"></i>
</div>
</div>
<div className="mt-12">
<p className="text-[11px] text-neutral-500 uppercase tracking-widest font-medium">I'll send you the details</p>
</div>
</div>

<div className="flex justify-between items-end z-10 w-full pt-4">
<div className="flex items-center gap-2 text-white/40 text-[10px] font-medium uppercase tracking-wider">
<i className="w-3 h-3" data-lucide="message-circle"></i> DM
                </div>
<div className="flex items-center gap-2 text-[#C5F848] text-[10px] font-medium uppercase tracking-wider">
                    Follow <i className="w-3 h-3" data-lucide="user-plus"></i>
</div>
</div>
</div>
</div>


    </>
  );
}
