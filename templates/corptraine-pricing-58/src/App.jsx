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
      

<header className="flex justify-between items-center w-full mb-10 lg:mb-16">
<div className="flex items-center gap-3">
<div className="h-10 w-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
<i className="text-white w-6 h-6" data-lucide="brain-circuit"></i>
</div>
<span className="text-white font-semibold text-xl tracking-tight">CorpTrainer</span>
</div>
<div className="text-slate-500 text-sm font-medium">
            Slide 2 of 2
        </div>
</header>

<main className="grid lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto w-full flex-grow">

<div className="flex flex-col justify-center space-y-10">

<h1 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.15]">
                Everything You Need to <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">Get Started</span>
</h1>

<div className="space-y-6">
<h3 className="text-sky-400 font-medium text-lg">The Basic Stuff:</h3>
<ul className="space-y-5">
<li className="flex items-start gap-4 group">
<div className="mt-1 min-w-[36px] h-9 rounded-lg bg-sky-900/20 border border-sky-800/30 flex items-center justify-center text-sky-400">
<i className="w-4 h-4" data-lucide="database"></i>
</div>
<p className="text-slate-300 text-lg leading-relaxed pt-1">
                            A private place for all your training videos and papers
                        </p>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-1 min-w-[36px] h-9 rounded-lg bg-sky-900/20 border border-sky-800/30 flex items-center justify-center text-sky-400">
<i className="w-4 h-4" data-lucide="bot"></i>
</div>
<p className="text-slate-300 text-lg leading-relaxed pt-1">
                            An AI assistant that helps workers find answers fast
                        </p>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-1 min-w-[36px] h-9 rounded-lg bg-sky-900/20 border border-sky-800/30 flex items-center justify-center text-sky-400">
<i className="w-4 h-4" data-lucide="bar-chart-3"></i>
</div>
<p className="text-slate-300 text-lg leading-relaxed pt-1">
                            Easy tools to see who has finished their work
                        </p>
</li>
</ul>
</div>

<div className="space-y-6">
<h3 className="text-purple-400 font-medium text-lg">The "Extra Mile" (Megan Specials):</h3>
<div className="grid sm:grid-cols-2 gap-4">

<div className="bg-[#0f121d] border border-white/5 rounded-xl p-5 hover:border-purple-500/30 transition-colors duration-300">
<div className="flex items-center gap-3 mb-2">
<i className="text-purple-400 w-5 h-5" data-lucide="headphones"></i>
<h4 className="text-white font-medium text-base">24/7 Help</h4>
</div>
<p className="text-slate-400 text-sm leading-relaxed">
                            If anything breaks, we fix it—any time, day or night.
                        </p>
</div>

<div className="bg-[#0f121d] border border-white/5 rounded-xl p-5 hover:border-purple-500/30 transition-colors duration-300">
<div className="flex items-center gap-3 mb-2">
<i className="text-purple-400 w-5 h-5" data-lucide="plug"></i>
<h4 className="text-white font-medium text-base">Hooked into Adtini</h4>
</div>
<p className="text-slate-400 text-sm leading-relaxed">
                            We make sure CorpTrainer talks perfectly to your Adtini system.
                        </p>
</div>

<div className="bg-[#0f121d] border border-white/5 rounded-xl p-5 hover:border-purple-500/30 transition-colors duration-300">
<div className="flex items-center gap-3 mb-2">
<i className="text-purple-400 w-5 h-5" data-lucide="palette"></i>
<h4 className="text-white font-medium text-base">Built Just for You</h4>
</div>
<p className="text-slate-400 text-sm leading-relaxed">
                            Custom colors and logos so it feels like your own company's app.
                        </p>
</div>

<div className="bg-[#0f121d] border border-white/5 rounded-xl p-5 hover:border-purple-500/30 transition-colors duration-300">
<div className="flex items-center gap-3 mb-2">
<i className="text-purple-400 w-5 h-5" data-lucide="video"></i>
<h4 className="text-white font-medium text-base">High-Speed Video</h4>
</div>
<p className="text-slate-400 text-sm leading-relaxed">
                            Movies play instantly, even if your internet is slow.
                        </p>
</div>
</div>
</div>
</div>

<div className="flex flex-col justify-center">
<div className="bg-[#0a0e17] border border-slate-800/50 rounded-2xl p-6 lg:p-10 shadow-2xl relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-30 blur-sm"></div>

<div className="text-center mb-10 space-y-4">
<span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-500/20 to-indigo-500/20 border border-indigo-500/30 text-sky-200 text-sm font-medium">
                        Pricing
                    </span>
<h2 className="text-2xl font-semibold text-white tracking-tight">Choose Your Plan</h2>
</div>

<div className="space-y-4">

<div className="group p-5 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/20 transition-all cursor-pointer">
<div className="flex justify-between items-center">
<div>
<h3 className="text-white font-medium text-lg">Standard Plan</h3>
<p className="text-slate-400 text-sm mt-1">Up to 50 users</p>
</div>
<div className="text-right">
<p className="text-2xl font-semibold text-indigo-400 tracking-tight">$1,000</p>
<p className="text-slate-500 text-xs">/month</p>
</div>
</div>
</div>

<div className="relative p-5 rounded-xl border border-sky-600 bg-sky-900/10 shadow-[0_0_30px_-10px_rgba(14,165,233,0.15)] cursor-pointer">
<div className="absolute -top-3 left-4">
<span className="bg-sky-600 text-white text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded shadow-sm">Popular</span>
</div>
<div className="flex justify-between items-center">
<div>
<h3 className="text-white font-medium text-lg">Professional Plan</h3>
<p className="text-sky-100/60 text-sm mt-1">51 to 200 users</p>
</div>
<div className="text-right">
<p className="text-2xl font-semibold text-sky-400 tracking-tight">$2,250</p>
<p className="text-slate-400 text-xs">/month</p>
</div>
</div>
</div>

<div className="group p-5 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/20 transition-all cursor-pointer">
<div className="flex justify-between items-center">
<div>
<h3 className="text-white font-medium text-lg">Enterprise Plan</h3>
<p className="text-slate-400 text-sm mt-1">201 to 500+ users</p>
</div>
<div className="text-right">
<p className="text-2xl font-semibold text-indigo-400 tracking-tight">$8,000</p>
<p className="text-slate-500 text-xs">/month</p>
</div>
</div>
</div>
</div>

<div className="mt-8 flex items-center justify-center gap-2 text-sky-400/80 text-sm font-medium">
<i className="w-4 h-4 text-yellow-400/80 fill-yellow-400/20" data-lucide="lightbulb"></i>
<span>Final Pricing: Coming Monday!</span>
</div>
</div>
</div>
</main>

<footer className="mt-16 flex flex-col md:flex-row justify-between items-center gap-6 w-full pt-6 border-t border-slate-900/50">
<button className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800/50 hover:text-white transition-all text-sm font-medium group">
<i className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" data-lucide="arrow-left"></i>
            Previous Slide
        </button>
<p className="text-slate-500 text-sm font-medium text-center">
            Ready to transform your training? <a className="text-slate-400 hover:text-white transition-colors" href="#">Let's talk!</a>
</p>
</footer>


    </>
  );
}
