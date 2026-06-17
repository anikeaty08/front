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
      

<div className="video-background-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://rentclub.ca/wp-content/uploads/2025/10/search-agent-1.mp4"></video></div>

<div className="fixed top-0 left-1/4 w-full h-full bg-fuchsia-500/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
<div className="fixed bottom-0 right-1/4 w-2/3 h-2/3 bg-slate-800/20 blur-[100px] rounded-full pointer-events-none translate-y-1/4"></div>

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-800/50">
<div className="max-w-screen-2xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-fuchsia-500 text-xl iconify--lucide" data-icon="lucide:building-2" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></g></svg>
<span className="font-serif text-lg tracking-tighter text-white font-medium">RENT CLUB</span>
</div>

<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-zinc-400">
<a className="hover:text-white transition-colors" href="#">PROPERTIES</a>
<a className="hover:text-white transition-colors" href="#">HOW IT WORKS</a>
<a className="hover:text-white transition-colors" href="#">PRICING</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:block text-xs font-medium text-zinc-400 hover:text-white transition-colors">SIGN IN</button>
<button className="bg-zinc-800 hover:bg-zinc-700 text-white text-xs px-4 py-2 rounded-full border border-slate-700 transition-all shadow-sm flex items-center gap-2 group">
<span className="">Get Started</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</nav>

<main className="z-10 min-h-screen flex w-full pt-20 pb-10 relative items-center justify-center">
<div className="max-w-screen-2xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 flex flex-col gap-8 text-center lg:text-left">

<div className="animate-enter flex lg:justify-start justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-400 text-xs font-medium shadow-[0_0_15px_-3px_rgba(217,70,239,0.3)]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
<span className="">AI Driven / Human Refined</span>
</div>
</div>

<div className="ml-22 pl-22 shadow-sm space-y-6">
<h1 className="animate-enter delay-100 leading-tight md:text-7xl text-5xl font-light text-white tracking-normal font-serif bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-stone-400/60 to-stone-600/40 [--fx-filter:blur(10px)_liquid-glass(2.2,10)_saturate(1.25)_noise(0.5,1,0)]">
                        Rentclub finds <br className="hidden md:block"/>
<span className="text-pink-500 bg-gradient-to-r from-white via-zinc-200 to-zinc-500">move-in ready</span> rentals.
                    
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            </h1>
<p className="animate-enter delay-200 md:text-lg lg:mx-0 leading-relaxed text-sm font-semibold text-zinc-100 text-right max-w-2xl mx-auto">
                        Victoria's vetted marketplace tailored to your needs. Our AI and live agents analyze your lifestyle and budget to deliver properties that match effortlessly.
                    </p>
</div>

<div className="animate-enter delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-2">
<div className="relative w-full max-w-md group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:search" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</div>
<input className="block w-full pl-10 pr-4 py-4 rounded-xl bg-zinc-800/50 border border-slate-800 text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500 transition-all text-sm shadow-sm" placeholder="Where do you want to live in Victoria?" type="text"/>
<div className="absolute inset-y-0 right-2 flex items-center">
<button className="p-2 bg-fuchsia-600 hover:bg-fuchsia-500 text-white rounded-lg transition-colors shadow-lg shadow-fuchsia-900/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="text-xs text-zinc-500 flex items-center gap-4">
<span className="flex items-center gap-1"><svg aria-hidden="true" className="iconify text-fuchsia-500 iconify--lucide" data-icon="lucide:check-circle" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> Vetted</span>
<span className="flex items-center gap-1"><svg aria-hidden="true" className="iconify text-fuchsia-500 iconify--lucide" data-icon="lucide:check-circle" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> On Budget</span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative h-full min-h-[400px] flex items-center justify-center animate-enter delay-500">

<div className="relative w-full max-w-sm animate-float-once">


<div className="absolute -z-10 top-10 -right-10 w-48 h-48 bg-fuchsia-600/20 rounded-full blur-3xl"></div>
<div className="absolute -z-10 -bottom-5 -left-5 w-full h-full border border-slate-700/30 rounded-2xl"></div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-0 w-full border-t border-slate-800 glass-panel py-4 z-40 hidden md:block">
<div className="max-w-screen-2xl mx-auto px-6 flex justify-between items-center text-xs text-zinc-500">
<div>
                Trusted by 500+ Renters in Victoria
            </div>
<div className="flex gap-6 grayscale opacity-50">
<div className="flex items-center gap-1 font-semibold"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg> Secure</div>
<div className="flex items-center gap-1 font-semibold"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Fast</div>
<div className="flex items-center gap-1 font-semibold"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:heart" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Tailored</div>
</div>
</div>
</div>

    </>
  );
}
