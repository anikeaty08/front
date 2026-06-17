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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 lg:bg-clip-text lg:text-transparent text-4xl tracking-tighter" href="#">MOST</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal">
</div>
<a className="hidden md:flex items-center justify-center h-8 px-4 text-xs font-medium text-zinc-950 bg-zinc-100 rounded hover:bg-zinc-200 transition-colors" href="#book">
                Book Session
            </a>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden border-zinc-800 border-b pt-32 pb-24 relative">
<div className="absolute inset-0 bg-grid opacity-50 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-zinc-300">Accepting 2 booking per week to ensure quality</span>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-medium text-zinc-100 tracking-tighter mb-6">Stop self doubting.<br/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-600">Start managing risk.</span></h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-zinc-400 max-w-2xl mr-auto mb-10 ml-auto">A 1-on-1 detailed consultation to enhance your trading psychology, refine your skills and clear your doubts.</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="group flex items-center justify-center gap-2 md:w-auto hover:bg-white transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 active:scale-[0.98] text-sm font-medium text-zinc-950 bg-zinc-100 w-full h-10 rounded pr-8 pl-8 relative" href="#book">
<span className="">Secure Your Slot</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="mt-16 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
<div className="flex flex-col items-center">
<span className="text-2xl font-medium text-zinc-100 tracking-tight">Pure Price Action</span>
<span className="uppercase text-xs font-medium text-zinc-500 tracking-wide">No indicators</span>
</div>
<div className="h-8 w-px bg-zinc-800 hidden md:block"></div>
<div className="flex flex-col items-center">
<span className="text-2xl font-medium text-zinc-100 tracking-tight">Clean Charts</span>
<span className="uppercase text-xs font-medium text-zinc-500 tracking-wide">VOLUME IS WEAPON</span>
</div>
<div className="h-8 w-px bg-zinc-800 hidden md:block"></div>
<div className="flex flex-col items-center">
<span className="text-2xl font-medium text-zinc-100 tracking-tight">Fast Execution</span>
<span className="uppercase text-xs font-medium text-zinc-500 tracking-wide">EXECUTE WITH CONFIDENCE</span>
</div>
</div>
</div>
</header>

<section className="bg-zinc-950" id="methodology">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-16">
<h2 className="md:text-3xl text-2xl font-medium text-zinc-100 tracking-tight mb-4">Why most traders fail</h2><p className="font-medium text-zinc-400 max-w-xl">The market is designed to transfer money from the impatient to the patient. Identify what lacks in you</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">

<div className="group hover:border-zinc-700 transition-colors bg-zinc-900/20 w-30 h-40 border-zinc-800 border rounded-xl px-3 py-3">
<div className="h-10 w-10 rounded-lg flex items-center justify-center mb-4 border border-zinc-800 group-hover:text-emerald-400 transition-colors bg-gradient-to-br from-white/10 to-white/0 lg:text-green-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:brain-circuit" data-icon-replaced="true" data-icon-set="lucide" data-lucide="brain-circuit" data-width="20" fill="none" height="20" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(52, 211, 153)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<h3 className="text-lg font-medium text-zinc-200 mb-2">TRADING WITH EMOTIONS</h3>
</div><div className="group hover:border-zinc-700 transition-colors bg-zinc-900/20 w-30 h-40 border-zinc-800 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="h-10 w-10 rounded-lg bg-zinc-900 flex items-center justify-center mb-4 border border-zinc-800 text-zinc-100 group-hover:text-emerald-400 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide w-[20px] h-[20px]" data-icon="lucide:clipboard-list" data-icon-replaced="true" height="20" role="img" strokeWidth="2" style={{color: 'rgb(52, 211, 153)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path className="" d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path className="" d="M12 11h4"></path><path className="" d="M12 16h4"></path><path d="M8 11h.01"></path><path className="" d="M8 16h.01"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-zinc-200 mb-2">NO TRADING PLAN</h3>
<p className="leading-relaxed text-sm text-zinc-500 mb-4"></p>
</div>

<div className="group hover:border-zinc-700 transition-colors bg-zinc-900/20 border-zinc-800 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="h-10 w-10 rounded-lg bg-zinc-900 flex items-center justify-center mb-4 border border-zinc-800 text-zinc-100 group-hover:text-emerald-400 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide w-[20px] h-[20px]" data-icon="lucide:bar-chart-2" data-icon-replaced="true" data-icon-set="solar" data-solar="restart-outline" data-width="20" height="20" role="img" strokeWidth="2" style={{color: 'rgb(52, 211, 153)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M18.364 3.058a.75.75 0 0 1 .75.75V8.05a.75.75 0 0 1-.75.75h-4.243a.75.75 0 0 1 0-1.5h2.36a7.251 7.251 0 1 0 2.523 3.822a.75.75 0 1 1 1.45-.387a8.75 8.75 0 1 1-2.84-4.447v-2.48a.75.75 0 0 1 .75-.75" fill="#34d399" fill-rule="evenodd"></path></svg>
</div>
<h3 className="text-lg font-medium text-zinc-200 mb-2">OVER TRADING</h3>
<p className="leading-relaxed text-sm text-zinc-500"></p>
</div>

<div className="group hover:border-zinc-700 transition-colors bg-zinc-900/20 border-zinc-800 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="flex group-hover:text-emerald-400 transition-colors text-zinc-100 bg-zinc-900 w-10 h-10 border-zinc-800 border rounded-lg mb-4 items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide w-[20px] h-[20px]" data-icon="lucide:search-x" data-icon-replaced="true" data-icon-set="lucide" data-lucide="dollar-sign" data-width="20" fill="none" height="20" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(52, 211, 153)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<h3 className="text-lg font-medium text-zinc-200 mb-2">OVER RISKING</h3>
</div>
</div>
</div><div className="max-w-6xl mt-20 mr-10 mb-20 ml-10 pr-6 pl-6">
<div className="mb-16">
<h2 className="md:text-4xl text-xl font-semibold text-zinc-100 tracking-tight mb-4">Why this session important for you</h2><div className="group hover:border-zinc-700 transition-colors bg-zinc-900/20 border-zinc-800 border rounded-xl pt-5 pr-1 pl-1">
<h3 className="text-base font-medium text-zinc-200 text-center mt-1 mr-1 mb-10 ml-1">I WILL FIGURE OUT YOUR PROBLEMS, YOUR CONFUSIONS, YOUR DOUBTS THAT YOU ARE FACING WHILE TRADING. I WILL HELP YOU TO CLEAR YOUR CONFUSIONS YOUR DOUBTS AND ANY PROBLEM THAT YOUR ARE FACING. EVERY QUESTION OF YOU WILL BE ANSWERED IN THIS SESSION. ALWAYS REMEMBER IN TRADING " LESS IS MORE"</h3>
</div><h2 className="md:text-lg text-base font-light italic text-zinc-100 tracking-tight mt-8 mb-4 ml-4 relative">Make sure to put your email address correctly. After booking keep patience you will be contacted soon through email. You can also message on instagram after booking your consultation here.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">



</div>
<textarea className="" style={{fontSize: '36px', fontWeight: '600', fontFamily: 'Inter, sans-serif', color: 'rgb(244, 244, 245)', lineHeight: '40px', textAlign: 'start', textTransform: 'none', letterSpacing: '-0.9px', position: 'absolute', left: '64px', top: '1495px', width: '1096px', height: '40px', boxSizing: 'border-box', padding: '0px', margin: '0px', border: 'medium', outline: 'currentcolor', background: 'none', resize: 'none', overflow: 'auto', zIndex: '2147483647'}}></textarea></div>
<textarea className="" style={{fontSize: '36px', fontWeight: '600', fontFamily: 'Inter, sans-serif', color: 'rgb(244, 244, 245)', lineHeight: '40px', textAlign: 'start', textTransform: 'none', letterSpacing: '-0.9px', position: 'absolute', left: '64px', top: '1495px', width: '1096px', height: '40px', boxSizing: 'border-box', padding: '0px', margin: '0px', border: 'medium', outline: 'currentcolor', background: 'none', resize: 'none', overflow: 'auto', zIndex: '2147483647'}}></textarea><textarea className="" style={{fontSize: '36px', fontWeight: '600', fontFamily: 'Inter, sans-serif', color: 'rgb(244, 244, 245)', lineHeight: '40px', textAlign: 'start', textTransform: 'none', letterSpacing: '-0.9px', position: 'absolute', left: '64px', top: '1495px', width: '1096px', height: '40px', boxSizing: 'border-box', padding: '0px', margin: '0px', border: 'medium', outline: 'currentcolor', background: 'none', resize: 'none', overflow: 'auto', zIndex: '2147483647'}}></textarea></section>


<section className="overflow-hidden relative" id="book">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-zinc-950 pointer-events-none"></div>
<div className="max-w-md mx-auto px-6 relative z-10">
<div className="shadow-black/50 bg-zinc-900/80 border-zinc-800 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-2xl backdrop-blur-xl">
<div className="flex mb-6 items-center justify-between">
<div className="">
<h3 className="text-xl font-semibold text-zinc-100" style={{}}>Limited Price</h3>
<p className="text-sm text-zinc-500 mt-1"></p>
</div>
<div className="text-right">
<span className="block text-2xl font-medium text-zinc-100 tracking-tight">$49.99</span>
<span className="text-xs text-zinc-500 uppercase tracking-wide">USD</span>
</div>
</div>
<div className="mb-8 space-y-4">
<div className="flex gap-3 text-sm text-zinc-400 gap-x-3 gap-y-3 items-center">
<div className="h-5 w-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:video" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect className="" height="12" rx="2" width="14" x="2" y="6"></rect></g></svg>
</div>
                        90 Minute Zoom Call
                    </div>
<div className="flex gap-3 text-sm text-zinc-400 gap-x-3 gap-y-3 items-center">
<div className="h-5 w-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:smartphone" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></g></svg>
</div>
                        2 Weeks Direct Chat Support
                    </div>
</div>

<form className="space-y-4">

<div className="flex items-center justify-between py-2 px-1">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
</label>
</div>
<button className="hover:bg-white transition-colors flex gap-2 cursor-pointer font-medium text-zinc-950 bg-zinc-100 w-full rounded-lg mt-2 pt-2.5 pb-2.5 gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='https://tally.so/r/2EaOPj'" role="button" type="button">
                        Book Consultation
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
</div>
</div>
</section>


<footer className="border-zinc-900 border-t pt-12 pb-12">
<div className="flex flex-col md:flex-row gap-6 max-w-6xl mr-auto ml-auto pr-6 pl-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<svg aria-hidden="true" className="iconify iconify--lucide w-[24px] h-[24px] text-rose-500" data-icon="lucide:candlestick-chart" data-icon-replaced="true" data-icon-set="lucide" data-lucide="instagram" data-width="16" fill="none" height="16" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg><span className="text-sm font-medium text-zinc-500 tracking-tight">mister_most_</span>
</div>
<div className="text-xs font-light text-zinc-600"></div>
<div className="flex gap-4">
<a className="text-zinc-600 hover:text-zinc-400 transition-colors" href="#">
</a>
<a className="text-zinc-600 hover:text-zinc-400 transition-colors" href="#">
</a>
</div>
</div>
</footer>

    </>
  );
}
