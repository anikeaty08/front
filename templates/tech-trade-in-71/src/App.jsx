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
      

<nav className="fixed top-0 w-full z-50 bg-neutral-100/80 backdrop-blur-md border-b border-neutral-200">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 animate-enter">
<span className="iconify text-blue-500" data-icon="lucide:recycle" data-width="24"></span>
<span className="text-sm font-semibold tracking-tight uppercase text-neutral-900">Retrade</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500 animate-enter delay-100">
<a className="hover:text-neutral-900 transition-colors" href="#">How it works</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Business</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Support</a>
</div>
<div className="flex items-center gap-4 animate-enter delay-100">
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 hidden sm:block" href="#">Sign in</a>
<a className="text-sm font-medium bg-neutral-900 text-white px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors shadow-sm ring-1 ring-white/20" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>

<main className="flex-grow flex flex-col justify-center pt-32 pb-20 px-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-neutral-100 to-neutral-100 pointer-events-none -z-10"></div>
<div className="max-w-4xl mx-auto w-full text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-sm mb-8 animate-enter delay-100 hover:border-blue-200 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs font-medium text-neutral-600">Trade-in values for iPhone 15 just increased</span>
</div>

<h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 mb-6 leading-[1.15] animate-enter delay-200">
                Turn your idle tech <br className="hidden md:block"/>
<span className="text-neutral-400">into instant payment.</span>
</h1>

<p className="text-lg text-neutral-500 max-w-xl mx-auto mb-12 font-light animate-enter delay-300">
                Get a competitive offer in seconds. We provide free shipping, secure data wiping, and payment within 24 hours of receipt.
            </p>

<div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl shadow-neutral-200/50 border border-neutral-200 p-2 animate-enter delay-400 overflow-hidden">

<div className="flex items-center gap-1 p-1 bg-neutral-50 rounded-xl mb-2 border border-neutral-100">
<button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium bg-white text-blue-600 shadow-sm ring-1 ring-black/5 transition-all">
<span className="iconify" data-icon="lucide:smartphone" data-width="16"></span>
                        Phone
                    </button>
<button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-white/50 transition-all">
<span className="iconify" data-icon="lucide:laptop" data-width="16"></span>
                        Laptop
                    </button>
<button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-white/50 transition-all">
<span className="iconify" data-icon="lucide:tablet" data-width="16"></span>
                        Tablet
                    </button>
<button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-white/50 transition-all hidden sm:flex">
<span className="iconify" data-icon="lucide:watch" data-width="16"></span>
                        Wearables
                    </button>
</div>

<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span className="iconify text-neutral-400 group-focus-within:text-blue-500 transition-colors" data-icon="lucide:search" data-width="20"></span>
</div>
<input className="block w-full pl-11 pr-32 py-4 bg-white text-neutral-900 placeholder-neutral-400 text-base font-normal focus:outline-none rounded-xl border border-transparent focus:bg-neutral-50 transition-all" placeholder="Search model (e.g. MacBook Pro M1)..." type="text"/>
<div className="absolute inset-y-0 right-1 flex items-center">
<button className="bg-neutral-900 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                            Get Quote
                            <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</div>

<div className="border-t border-neutral-100 mt-2 px-4 py-3 bg-neutral-50/50 flex flex-wrap items-center gap-3 text-xs text-neutral-500 rounded-b-lg">
<span className="font-medium text-neutral-400 uppercase tracking-wider text-[10px]">Trending:</span>
<a className="flex items-center gap-1 hover:text-blue-600 transition-colors bg-white border border-neutral-200 px-2 py-1 rounded shadow-sm" href="#">
<span className="iconify" data-icon="lucide:trending-up" data-width="12"></span> iPhone 14 Pro
                    </a>
<a className="flex items-center gap-1 hover:text-blue-600 transition-colors bg-white border border-neutral-200 px-2 py-1 rounded shadow-sm" href="#">
                        Samsung S23
                    </a>
<a className="flex items-center gap-1 hover:text-blue-600 transition-colors bg-white border border-neutral-200 px-2 py-1 rounded shadow-sm" href="#">
                        iPad Air 5
                    </a>
</div>
</div>

<div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 animate-enter delay-400 opacity-0" style={{animationFillMode: 'forwards'}}>
<div className="flex items-center gap-2 text-neutral-400">
<span className="iconify text-blue-500" data-icon="lucide:check-circle-2" data-width="18"></span>
<span className="text-sm">Price Lock Guarantee</span>
</div>
<div className="flex items-center gap-2 text-neutral-400">
<span className="iconify text-blue-500" data-icon="lucide:box" data-width="18"></span>
<span className="text-sm">Free Insured Shipping</span>
</div>
<div className="flex items-center gap-2 text-neutral-400">
<span className="iconify text-blue-500" data-icon="lucide:zap" data-width="18"></span>
<span className="text-sm">Same-Day Payment</span>
</div>
</div>
</div>
</main>

<section className="border-t border-neutral-200 bg-white py-12">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-8">Trusted by tech enthusiasts worldwide</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-xl font-bold tracking-tighter text-neutral-800 flex items-center gap-1">
<span className="iconify" data-icon="lucide:triangle" data-width="20"></span> VERGE
                </div>
<div className="text-xl font-bold tracking-tighter text-neutral-800 flex items-center gap-1">
<span className="iconify" data-icon="lucide:circle-dot" data-width="20"></span> TECHRADAR
                </div>
<div className="text-xl font-bold tracking-tighter text-neutral-800 flex items-center gap-1">
<span className="iconify" data-icon="lucide:command" data-width="20"></span> WIRED
                </div>
<div className="text-xl font-bold tracking-tighter text-neutral-800 flex items-center gap-1">
<span className="iconify" data-icon="lucide:hexagon" data-width="20"></span> CNET
                </div>
</div>
</div>
</section>

    </>
  );
}
