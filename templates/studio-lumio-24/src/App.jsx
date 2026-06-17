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



        lucide.createIcons({
            attrs: {
                "stroke-width": 1.5
            }
        });
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-[#050505] to-[#050505]"></div>

<div className="absolute inset-0 bg-grain mix-blend-overlay"></div>

</div>

<nav className="fixed flex md:p-10 w-full z-50 pt-6 pr-6 pb-6 pl-6 top-0 left-0 items-start justify-between">

<a className="group" href="#">
<svg className="lucide lucide-globe w-8 h-8 text-[#dfff00] transition-transform group-hover:rotate-180 duration-700" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</a>

<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="hidden md:flex items-center gap-3">
<a className="hover:bg-white/10 transition-colors text-sm font-medium bg-white/5 rounded-full pt-2 pr-5 pb-2 pl-5 backdrop-blur-sm" href="#">Studio</a>
<a className="px-5 py-2 rounded-full bg-white/5 backdrop-blur-sm text-sm font-medium hover:bg-white/10 transition-colors" href="#">Works</a>
<a className="px-5 py-2 rounded-full bg-white/5 backdrop-blur-sm text-sm font-medium hover:bg-white/10 transition-colors" href="#">Lab</a>
</div>
<a className="px-5 py-2 rounded-full bg-[#dfff00] text-black text-sm font-semibold hover:bg-[#ccee00] transition-colors flex items-center gap-1 group" href="#">
                Hello
                <svg className="lucide lucide-arrow-up-right w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</nav>

<main className="z-10 flex flex-col min-h-screen md:pb-0 pb-32 relative items-center justify-center">
<div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/15 via-neutral-500/5 to-transparent pointer-events-none"></div>
<div className="absolute inset-0 z-0 bg-grain opacity-30 mix-blend-overlay pointer-events-none"></div>
<h1 className="z-10 text-[13vw] md:text-[11vw] leading-[0.8] uppercase stretch-font select-none font-bold text-white tracking-tighter text-center mix-blend-lighten relative drop-shadow-2xl">Looped Studio</h1>
</main>

<footer className="md:absolute z-20 md:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 w-full pt-6 pr-6 pb-6 pl-6 relative bottom-0 gap-x-6 gap-y-6 items-end">

<div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden select-none">

<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>

<div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent blur-3xl opacity-60"></div>

<div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay"></div>
</div>

<div className="lg:col-span-3 w-full group cursor-pointer">
<div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">

<div className="absolute inset-0 bg-[#e8e4d9] flex flex-col p-4">
<div className="flex justify-between items-center mb-4 opacity-50">
<span className="text-[10px] uppercase tracking-widest text-black">Crown</span>
</div>
<div className="text-neutral-800 text-lg font-medium leading-tight mt-2">Answers</div>
<div className="mt-4 space-y-2">
<div className="h-1 w-3/4 bg-neutral-400/20 rounded"></div>
<div className="h-1 w-1/2 bg-neutral-400/20 rounded"></div>
</div>

<div className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded flex items-center gap-2 group-hover:bg-black/60 transition-colors">
                        Play Reel <svg className="lucide lucide-play fill-current w-[12px] h-[12px]" data-icon-replaced="true" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '12px', height: '12px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 flex flex-col justify-end pb-2 pl-0 lg:pl-4">
<p className="md:text-2xl leading-snug text-xl font-medium text-white max-w-md mb-8">Looped Studio crafts custom websites that go beyond pretty pixels.</p>
<div className="flex items-center gap-3">
<button className="px-5 py-2.5 rounded bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-2">
                    Our Work <svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<button className="px-5 py-2.5 rounded bg-[#dfff00] text-black text-sm font-semibold hover:bg-[#ccee00] transition-colors flex items-center gap-2">
                    Contact us <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>

<div className="lg:col-span-2 flex items-end justify-start lg:justify-center gap-3 pb-2">
<a className="w-10 h-10 flex items-center justify-center rounded border border-white/10 text-neutral-400 hover:text-white hover:bg-white/5 transition-all" href="#">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded border border-white/10 text-neutral-400 hover:text-white hover:bg-white/5 transition-all" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded border border-white/10 text-neutral-400 hover:text-white hover:bg-white/5 transition-all" href="#">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded border border-white/10 text-neutral-400 hover:text-white hover:bg-white/5 transition-all" href="#">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded border border-white/10 text-neutral-400 hover:text-white hover:bg-white/5 transition-all" href="#">
<svg className="lucide lucide-waves w-4 h-4" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
</a>
</div>

<div className="lg:col-span-2 flex flex-col justify-between h-32 p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
<div className="flex justify-between items-start">
<div>
<div className="text-xs text-neutral-400 font-medium mb-1">Wyoming, USA</div>
<div className="text-2xl font-semibold text-white tracking-tight">12:15 AM</div>
</div>
</div>
<div className="flex justify-between items-end">
<div className="text-xs text-neutral-500 font-medium">MST</div>

<div className="relative w-12 h-12 rounded-full border border-neutral-600">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-0.5 h-1 bg-neutral-600 absolute top-1"></div>
<div className="w-0.5 h-1 bg-neutral-600 absolute bottom-1"></div>
<div className="w-1 h-0.5 bg-neutral-600 absolute left-1"></div>
<div className="w-1 h-0.5 bg-neutral-600 absolute right-1"></div>
</div>

<div className="absolute top-1/2 left-1/2 w-3.5 h-[1.5px] bg-white origin-left -rotate-90"></div> 
<div className="absolute top-1/2 left-1/2 w-4 h-[1.5px] bg-white origin-left rotate-0"></div> 
<div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
</div>
</div>
</div>

<div className="lg:col-span-2 flex flex-col justify-between h-32 p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
<div className="flex justify-between items-start">
<div>
<div className="text-xs text-neutral-400 font-medium mb-1">Lagos, NG</div>
<div className="text-2xl font-semibold text-white tracking-tight">8:15 AM</div>
</div>
</div>
<div className="flex justify-between items-end">
<div className="text-xs text-neutral-500 font-medium">GMT+1</div>

<div className="relative w-12 h-12 rounded-full border border-neutral-600">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-0.5 h-1 bg-neutral-600 absolute top-1"></div>
<div className="w-0.5 h-1 bg-neutral-600 absolute bottom-1"></div>
<div className="w-1 h-0.5 bg-neutral-600 absolute left-1"></div>
<div className="w-1 h-0.5 bg-neutral-600 absolute right-1"></div>
</div>

<div className="absolute top-1/2 left-1/2 w-3 h-[1.5px] bg-white origin-left rotate-[200deg]"></div> 
<div className="absolute top-1/2 left-1/2 w-4 h-[1.5px] bg-white origin-left rotate-0"></div> 
<div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
</div>
</div>
</div>
</footer>


    </>
  );
}
