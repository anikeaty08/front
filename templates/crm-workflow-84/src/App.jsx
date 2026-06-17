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
      

<header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-10">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-lg font-medium tracking-tighter text-emerald-600">PIED PIPER</span>
<div className="hidden sm:flex items-center gap-1.5 ml-2 px-2.5 py-1 rounded-md bg-emerald-50/50 border border-emerald-100/50">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-medium text-emerald-600">Engine Online</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-all duration-200">
<iconify-icon className="text-base" icon="solar:history-linear"></iconify-icon> History
                </button>
<button className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-all duration-200">
<iconify-icon className="text-base" icon="solar:settings-linear"></iconify-icon> Settings
                </button>
<div className="w-px h-5 bg-slate-200 mx-2"></div>
<button className="flex items-center gap-2 pl-2 pr-2 sm:pr-3 py-1 hover:bg-slate-100 rounded-md transition-all duration-200 group">
<div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-medium ring-1 ring-emerald-600/10">
                        RG
                    </div>
<span className="text-sm font-medium text-slate-700 hidden sm:block group-hover:text-slate-900">Richard G.</span>
<iconify-icon className="text-slate-400 text-sm hidden sm:block group-hover:text-slate-600 transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
</header>

<main className="flex-1 max-w-[90rem] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 flex flex-col xl:flex-row gap-8 lg:gap-16">

<div className="w-full xl:w-[55%] flex flex-col gap-12">

<section className="flex flex-col gap-6">
<header className="flex items-center gap-3 border-b border-slate-200/80 pb-4">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-600/20 text-xs font-medium">1</span>
<h2 className="text-xl font-medium tracking-tight text-slate-900">Entity details</h2>
</header>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-slate-600 tracking-wide uppercase">Name</label>
<div className="relative">
<input className="block w-full rounded-lg border-0 py-2.5 pl-3 pr-10 text-sm text-slate-900 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500/20 focus:border-emerald-500 transition-all bg-white" placeholder="Lead / Prospect" type="text"/>
<iconify-icon className="absolute right-3 top-2.5 text-slate-400 text-lg pointer-events-none" icon="solar:user-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-slate-600 tracking-wide uppercase">Company</label>
<div className="relative">
<input className="block w-full rounded-lg border-0 py-2.5 pl-3 pr-10 text-sm text-slate-900 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500/20 focus:border-emerald-500 transition-all bg-white" placeholder="Company name" type="text"/>
<iconify-icon className="absolute right-3 top-2.5 text-slate-400 text-lg pointer-events-none" icon="solar:buildings-2-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-slate-600 tracking-wide uppercase">Type</label>
<div className="relative">
<select className="block w-full rounded-lg border-0 py-2.5 pl-3 pr-10 text-sm text-slate-900 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-emerald-500/20 focus:border-emerald-500 transition-all bg-white appearance-none cursor-pointer">
<option disabled="" selected="" value="">Select type...</option>
<option>Inbound</option>
<option>Outbound</option>
<option>Referral</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-slate-400 text-base pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-slate-600 tracking-wide uppercase">Stage</label>
<div className="relative">
<select className="block w-full rounded-lg border-0 py-2.5 pl-3 pr-10 text-sm text-slate-900 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-emerald-500/20 focus:border-emerald-500 transition-all bg-white appearance-none cursor-pointer">
<option disabled="" selected="" value="">Select stage...</option>
<option>Discovery</option>
<option>Evaluation</option>
<option>Negotiation</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-slate-400 text-base pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-6">
<header className="flex items-center gap-3 border-b border-slate-200/80 pb-4">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-600/20 text-xs font-medium">2</span>
<h2 className="text-xl font-medium tracking-tight text-slate-900">Deal parameters</h2>
</header>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-2">
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-slate-600 tracking-wide uppercase">Budget</label>
<div className="relative">
<select className="block w-full rounded-lg border-0 py-2.5 pl-3 pr-10 text-sm text-slate-900 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-emerald-500/20 focus:border-emerald-500 transition-all bg-white appearance-none cursor-pointer">
<option>Select...</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-slate-400 text-base pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-slate-600 tracking-wide uppercase">Goal</label>
<div className="relative">
<select className="block w-full rounded-lg border-0 py-2.5 pl-3 pr-10 text-sm text-slate-900 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-emerald-500/20 focus:border-emerald-500 transition-all bg-white appearance-none cursor-pointer">
<option>Select...</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-slate-400 text-base pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-slate-600 tracking-wide uppercase">Owner</label>
<div className="relative">
<select className="block w-full rounded-lg border-0 py-2.5 pl-3 pr-10 text-sm text-slate-900 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-emerald-500/20 focus:border-emerald-500 transition-all bg-white appearance-none cursor-pointer">
<option>Select...</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-slate-400 text-base pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="flex flex-col gap-8">
<div className="flex flex-col gap-3">
<label className="text-xs font-medium text-slate-600 tracking-wide uppercase">Urgency</label>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-1.5 rounded-full ring-1 ring-slate-200 bg-white text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all">Low</button>
<button className="px-4 py-1.5 rounded-full ring-1 ring-emerald-600/20 bg-emerald-50 text-emerald-700 text-sm font-medium transition-all">Medium</button>
<button className="px-4 py-1.5 rounded-full ring-1 ring-slate-200 bg-white text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all">High</button>
<button className="px-4 py-1.5 rounded-full ring-1 ring-slate-200 bg-white text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all">Immediate</button>
</div>
</div>
<div className="flex flex-col gap-3">
<label className="text-xs font-medium text-slate-600 tracking-wide uppercase">Scope</label>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-1.5 rounded-full ring-1 ring-emerald-600/20 bg-emerald-50 text-emerald-700 text-sm font-medium transition-all">Positioning</button>
<button className="px-4 py-1.5 rounded-full ring-1 ring-slate-200 bg-white text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all">Narrative</button>
<button className="px-4 py-1.5 rounded-full ring-1 ring-emerald-600/20 bg-emerald-50 text-emerald-700 text-sm font-medium transition-all">GTM</button>
<button className="px-4 py-1.5 rounded-full ring-1 ring-slate-200 bg-white text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all">Content</button>
<button className="px-4 py-1.5 rounded-full ring-1 ring-slate-200 bg-white text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all">Founder Comms</button>
<button className="px-4 py-1.5 rounded-full ring-1 ring-slate-200 bg-white text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all">PR</button>
</div>
</div>
<div className="flex flex-col gap-3">
<label className="text-xs font-medium text-slate-600 tracking-wide uppercase">Objections</label>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-1.5 rounded-full ring-1 ring-slate-200 bg-white text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all">Price</button>
<button className="px-4 py-1.5 rounded-full ring-1 ring-slate-200 bg-white text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all">Wants smaller scope</button>
<button className="px-4 py-1.5 rounded-full ring-1 ring-emerald-600/20 bg-emerald-50 text-emerald-700 text-sm font-medium transition-all">Internal bandwidth</button>
<button className="px-4 py-1.5 rounded-full ring-1 ring-slate-200 bg-white text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all">Timing</button>
</div>
</div>
<div className="flex flex-col gap-4">
<label className="text-xs font-medium text-slate-600 tracking-wide uppercase">Middle-Out Compression</label>
<div className="flex items-center gap-6">
<span className="text-sm text-slate-500 font-medium">Lossless</span>
<div className="flex-1 relative flex items-center h-6 group cursor-pointer">
<div className="absolute w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
<div className="absolute top-0 left-0 w-1/3 h-full bg-emerald-500 rounded-full transition-all"></div>
</div>
<div className="absolute left-1/3 w-4 h-4 bg-white ring-2 ring-emerald-500 rounded-full shadow-sm transform -translate-x-1/2 group-hover:scale-110 transition-transform"></div>
</div>
<span className="text-sm text-slate-500 font-medium">Lossy</span>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-6">
<header className="flex items-center gap-3 border-b border-slate-200/80 pb-4">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-600/20 text-xs font-medium">3</span>
<h2 className="text-xl font-medium tracking-tight text-slate-900">Data stream</h2>
</header>
<div className="flex flex-col gap-8">
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<label className="text-xs font-medium text-slate-600 tracking-wide uppercase">Notes Transcript</label>
<button className="text-sm font-medium text-slate-500 hover:text-emerald-600 flex items-center gap-1.5 transition-colors">
<iconify-icon className="text-base" icon="solar:paperclip-linear"></iconify-icon> Attach file
                            </button>
</div>
<textarea className="block w-full rounded-lg border-0 py-3 px-4 text-sm text-slate-900 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500/20 focus:border-emerald-500 transition-all bg-white resize-y leading-relaxed" placeholder="Paste transcript or raw notes..." rows="4"></textarea>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<label className="text-xs font-medium text-slate-600 tracking-wide uppercase">Follow-up Call Transcript</label>
<span className="text-xs font-medium text-slate-400">Optional</span>
</div>
<textarea className="block w-full rounded-lg border-0 py-3 px-4 text-sm text-slate-900 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500/20 focus:border-emerald-500 transition-all bg-white resize-y leading-relaxed" placeholder="Additional context from follow-up..." rows="3"></textarea>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<label className="text-xs font-medium text-slate-600 tracking-wide uppercase">Strategist Notes</label>
<div className="flex gap-2">
<button className="px-3 py-1 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors">Load Template</button>
</div>
</div>
<textarea className="block w-full rounded-lg border-0 py-3 px-4 text-sm text-slate-900 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500/20 focus:border-emerald-500 transition-all bg-white resize-y leading-relaxed" placeholder="Your synthesis and internal notes..." rows="3"></textarea>
</div>
</div>
</section>

<div className="pt-6 pb-20 xl:pb-0">
<button className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl text-base font-medium shadow-[0_1px_3px_rgba(0,0,0,0.1)] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 active:scale-[0.99]">
<iconify-icon className="text-lg" icon="solar:cpu-bold-duotone"></iconify-icon>
                    Calculate Weissman Score
                </button>
</div>
</div>

<div className="w-full xl:w-[45%] h-auto xl:h-[calc(100vh-8rem)] xl:sticky xl:top-24 flex flex-col gap-6">
<div className="flex items-center justify-between">
<div className="relative w-64 group">
<iconify-icon className="absolute left-3 top-2.5 text-slate-400 text-base pointer-events-none group-focus-within:text-emerald-500 transition-colors" icon="solar:magnifer-linear"></iconify-icon>
<input className="block w-full rounded-lg border-0 py-2 pl-9 pr-3 text-sm text-slate-900 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500/20 focus:border-emerald-500 transition-all bg-white" placeholder="Search saved entities..." type="text"/>
</div>
</div>
<div className="flex-1 bg-white ring-1 ring-slate-200/80 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col relative">

<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
<div className="px-6 py-4 border-b border-slate-100 bg-white flex items-center justify-between mt-1">
<h3 className="text-sm font-medium tracking-tight text-slate-900">Compression Results</h3>
<div className="flex items-center gap-2">
<button className="text-xs font-medium text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-md hover:bg-slate-50 transition-colors flex items-center gap-1.5 ring-1 ring-transparent hover:ring-slate-200">
<iconify-icon className="text-sm" icon="solar:bookmark-linear"></iconify-icon> Saved
                        </button>
<button className="p-1.5 text-slate-400 hover:text-slate-900 rounded-md hover:bg-slate-50 transition-colors">
<iconify-icon className="text-lg" icon="solar:menu-dots-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 p-8 flex flex-col items-center justify-center text-center bg-slate-50/30">
<div className="w-14 h-14 rounded-2xl bg-white ring-1 ring-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
<iconify-icon className="text-emerald-500 text-2xl" icon="solar:server-square-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-slate-900 mb-2">Awaiting Data Stream</h4>
<p className="text-sm text-slate-500 max-w-[280px] leading-relaxed">Input parameters to the left to calculate optimal Weissman score and compression strategy.</p>
</div>
</div>
</div>
</main>

    </>
  );
}
