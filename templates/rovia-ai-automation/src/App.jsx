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
      

<nav className="fixed top-0 w-full z-50 border-b border-neutral-900 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-screen-xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center">
<span className="text-xl font-semibold tracking-tighter text-white">ROVIA</span>
</div>
<div className="hidden md:flex items-center gap-x-10">
<a className="text-xs uppercase tracking-widest text-neutral-500 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-xs uppercase tracking-widest text-neutral-500 hover:text-white transition-colors" href="#about">Methodology</a>
<a className="text-xs uppercase tracking-widest text-neutral-100 border border-neutral-800 px-5 py-2 rounded-full hover:bg-neutral-900 transition-all" href="#inquiry">Start a Project</a>
</div>
</div>
</nav>

<main className="relative pt-44 pb-20 px-6">
<div className="max-w-screen-xl mx-auto">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-500"></span>
</span>
<span className="text-xs font-medium tracking-wide text-neutral-400 uppercase">Available for Q3 Projects</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-8">
                    Helping Businesses Run Smarter, Grow Faster
                </h1>
<p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-2xl mb-12">
                    ROVIA helps businesses solve operational problems using AI automation. From handling customer conversations to capturing leads and streamlining workflows, we build systems that save time and drive growth.
                </p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<a className="bg-white text-black px-8 py-4 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors" href="#inquiry">
                        Submit Inquiry
                    </a>
<div className="flex items-center gap-6 px-6 py-4">
<div className="flex flex-col">
<span className="text-white text-sm font-medium">98% Success</span>
<span className="text-neutral-500 text-xs">Workflow Efficiency</span>
</div>
<div className="w-px h-8 bg-neutral-800"></div>
<div className="flex flex-col">
<span className="text-white text-sm font-medium">24/7 Ops</span>
<span className="text-neutral-500 text-xs">AI Automation</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-20 pointer-events-none" style={{background: 'radial-gradient(circle at center, #1a1a1a 0%, transparent 70%)'}}></div>
</main>

<section className="py-24 border-t border-neutral-900" id="services">
<div className="max-w-screen-xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="group">
<div className="mb-6 flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 text-white transition-all group-hover:border-neutral-700">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Helping Businesses</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        We partner with ambitious teams to identify bottlenecks and implement scalable digital foundations.
                    </p>
</div>
<div className="group">
<div className="mb-6 flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 text-white transition-all group-hover:border-neutral-700">
<iconify-icon icon="solar:settings-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Solving Real Problems</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        No fluff. We focus on tangible operational challenges that hinder daily performance and revenue.
                    </p>
</div>
<div className="group">
<div className="mb-6 flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 text-white transition-all group-hover:border-neutral-700">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Enabling Growth</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        By automating the repetitive, we free your team to focus on high-impact strategic initiatives.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808]" id="inquiry">
<div className="max-w-screen-md mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4 block">Consultation</span>
<h2 className="text-3xl font-semibold text-white tracking-tight">What service are you looking for?</h2>
</div>
<form className="space-y-8">
<div className="relative group">
<textarea className="w-full bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 text-neutral-200 placeholder:text-neutral-600 focus:outline-none transition-all resize-none" placeholder="Tell us what you want to automate or improve in your business…" rows="6"></textarea>
<div className="absolute bottom-4 right-4 text-[10px] text-neutral-600 uppercase tracking-widest pointer-events-none">
                        Free-form response
                    </div>
</div>
<div className="flex flex-col items-center gap-6">
<button className="w-full sm:w-auto px-12 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition-all active:scale-[0.98]" type="button">
                        Submit Inquiry
                    </button>
<p className="text-xs text-neutral-500">We’ll review and get back with the best solution.</p>
</div>
</form>
</div>
</section>

<footer className="pt-24 pb-12 border-t border-neutral-900">
<div className="max-w-screen-xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
<div>
<h4 className="text-xl font-semibold tracking-tighter text-white mb-6 uppercase">ROVIA</h4>
<p className="text-sm text-neutral-500 max-w-xs leading-relaxed">
                        High-performance AI systems for modern business operations. Built with precision and purpose.
                    </p>
</div>
<div className="grid grid-cols-2 gap-8">
<div className="flex flex-col gap-4">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Connect with ROVIA</span>
<div className="flex items-center gap-5">
<a className="text-neutral-500 hover:text-white transition-colors" href="https://www.facebook.com/share/17zzdAnPnG/">
<iconify-icon icon="solar:share-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="https://www.instagram.com/rovia.ai?igsh=MXg1YnBuaDFuc3czZw==">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="https://wa.me/916291665155">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-col gap-4 text-right md:text-left">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Contact</span>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="tel:+916291665155">+91 6291665155</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-[10px] text-neutral-600 uppercase tracking-widest font-medium">© ROVIA — AI Automation Agency</span>
<div className="flex gap-6">
<span className="text-[10px] text-neutral-600 uppercase tracking-widest cursor-default">Privacy</span>
<span className="text-[10px] text-neutral-600 uppercase tracking-widest cursor-default">Terms</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
