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
      

<nav className="fixed top-6 left-0 right-0 mx-auto w-[92%] max-w-5xl z-50">
<div className="bg-[#E5E5EA]/80 backdrop-blur-xl border border-white/40 rounded-full p-2 pl-6 pr-2 flex items-center justify-between shadow-sm">

<div className="flex items-center gap-2">
<span className="font-medium tracking-widest text-xs uppercase text-[#1D1D1F]">Echogram</span>
</div>

<div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="text-sm font-normal text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Products</a>
<a className="text-sm font-normal text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Resources</a>
<a className="text-sm font-normal text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Pricing</a>
</div>

<a className="bg-[#CAFC01] hover:bg-[#b8e600] text-[#1D1D1F] px-5 py-2.5 rounded-full text-xs font-medium transition-all shadow-[0_2px_10px_-4px_#CAFC01]" href="#">
                Sign Up Now
            </a>
</div>
</nav>

<main className="flex flex-col overflow-hidden min-h-[90vh] text-center w-full pt-40 pb-20 relative items-center">

<div className="flex flex-col z-10 max-w-4xl mr-auto ml-auto pr-6 pl-6 relative items-center">
<span className="text-[10px] font-medium tracking-[0.2em] text-zinc-400 uppercase mb-6">Launching 2025</span>
<h1 className="md:text-7xl lg:text-8xl leading-[0.9] text-6xl font-normal text-[#1D1D1F] tracking-tighter mb-6">Mirror X to Telegram<br/> <span className="font-normal font-roboto">in 30 seconds</span></h1>
<p className="text-lg text-zinc-500 max-w-xl mb-10 leading-relaxed font-light">
                No API keys. No developer account. Just enter an X username and start receiving real-time updates in Telegram.
            </p>

<div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-lg">
<div className="relative w-full">
<input className="w-full bg-[#1D1D1F] text-zinc-200 placeholder:text-zinc-500 rounded-full px-6 py-4 text-sm outline-none focus:ring-2 focus:ring-zinc-800 transition-all shadow-xl" placeholder="Enter email" type="text"/>
</div>
<button className="w-full sm:w-auto whitespace-nowrap bg-[#CAFC01] hover:bg-[#b8e600] text-[#1D1D1F] px-8 py-4 rounded-full text-sm font-medium transition-colors shadow-lg shadow-[#CAFC01]/20">
                    Sign Up Now
                </button>
</div>
<p className="text-xs font-light text-zinc-300 mt-6" style={{}}></p>
</div><div className="flex flex-col md:flex-row gap-6 md:gap-10 space-y-20 gap-x-6 gap-y-6 items-center justify-center" style={{}}>

<div className="w-full max-w-sm bg-white rounded-3xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] border border-white/60 overflow-hidden">
<div className="flex bg-zinc-50/50 border-zinc-100 border-b pt-3 pr-5 pb-3 pl-5 items-center justify-between">
<span className="text-xs font-semibold text-zinc-900 flex items-center gap-1.5">
                             X Profile
                        </span>
<div className="flex items-center gap-1.5 bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full border border-orange-100/50">
<span className="text-[10px] uppercase tracking-wider font-semibold">Live Preview</span>
<svg className="lucide lucide-flame fill-orange-500 stroke-none w-[12px] h-[12px]" data-icon-replaced="true" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(234, 88, 12)', width: '12px', height: '12px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
</div>
</div>
<div className="pt-6 pr-6 pb-6 pl-6">
<div className="flex gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-900 shrink-0 overflow-hidden flex items-center justify-center text-white text-xs">

<span className="font-bold">EM</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-1">
<span className="font-semibold text-sm text-[#1D1D1F]">Elonmusk</span>
<svg className="lucide lucide-badge-check w-3.5 h-3.5 text-blue-500 fill-blue-500 text-white" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-zinc-400 text-xs font-normal">@elonmusk</span>
</div>
<p className="text-sm text-[#1D1D1F] mt-1.5 leading-relaxed font-normal">
                                    Just deployed a major update to our platform! 🚀 Real-time data streaming is now 10x faster. Check it out and let me know what you think!
                                </p>
<div className="flex items-center gap-6 mt-4 text-zinc-400">
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<span className="text-xs">45</span>
</div>
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-repeat-2 w-4 h-4" data-lucide="repeat-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m2 9 3-3 3 3"></path><path d="M13 18H7a2 2 0 0 1-2-2V6"></path><path d="m22 15-3 3-3-3"></path><path d="M11 6h6a2 2 0 0 1 2 2v10"></path></svg>
<span className="text-xs">89</span>
</div>
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="text-xs">1234</span>
</div>
<span className="text-xs ml-auto">2 mins ago</span>
</div>
</div>
</div>
</div>
</div>

<div className="text-zinc-300 hidden md:block" style={{}}>
<div className="relative gap-x-10 gap-y-10" style={{width: '180px', height: '180px'}}>

<div className="border-white/0 border-2 rounded-full absolute top-0 right-0 bottom-0 left-0 backdrop-blur-xl" style={{background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.03))', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 8px 32px, rgba(255, 255, 255, 0.2) 0px 2px 8px inset', animation: '20s linear 0s infinite normal none running compassRotate', visibility: 'hidden'}}>

<div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-60">
</div>
</div>

<div className="border-lime-300/30 border rounded-full absolute top-6 right-6 bottom-6 left-6 backdrop-blur-md gap-x-10 gap-y-10" style={{background: 'rgba(163, 230, 53, 0.08)', boxShadow: 'rgba(163, 230, 53, 0.3) 0px 0px 20px, rgba(255, 255, 255, 0.15) 0px 1px 4px inset', animation: '4s ease-in-out 0s infinite normal none running compassPulse'}}>

<div className="absolute top-2 left-1/2 -translate-x-1/2 text-lime-300 text-xs font-semibold" style={{textShadow: 'rgba(163, 230, 53, 0.8) 0px 0px 8px', visibility: 'hidden'}}>
            N
          </div>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/40 text-xs" style={{visibility: 'hidden'}}>
            S
          </div>
<div className="-translate-y-1/2 text-xs text-white/40 absolute top-1/2 right-2 gap-x-10 gap-y-10" style={{visibility: 'hidden'}}>
            E
          </div>
<div className="absolute left-2 top-1/2 -translate-y-1/2 text-white/40 text-xs" style={{visibility: 'hidden'}}>
            W
          </div>
</div>

<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center" style={{}}>
<div className="relative w-20 h-20 rounded-full border-2 border-lime-300/40 backdrop-blur-xl overflow-hidden" style={{background: 'linear-gradient(135deg, rgba(163, 230, 53, 0.25) 0%, rgba(163, 230, 53, 0.08) 100%)', boxShadow: 'rgba(163, 230, 53, 0.4) 0px 12px 40px, rgba(255, 255, 255, 0.3) 0px 2px 6px inset'}}>

<div className="bg-gradient-to-br from-white/40 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"><svg className="lucide lucide-circle-dot-dashed mt-7 mr-10 ml-7" data-icon-replaced="true" data-icon-set="lucide" data-lucide="circle-dot-dashed" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0"></path><path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"></path><path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8"></path><path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"></path><path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0"></path><path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"></path><path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8"></path><path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"></path><circle cx="12" cy="12" r="1"></circle></svg></div>

<div className="absolute inset-0 flex items-center justify-center" style={{animation: '6s ease-in-out 0s infinite normal none running compassNeedle', visibility: 'hidden'}}>
<div className="relative w-1 h-12" style={{transformOrigin: 'center center'}}>

<div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-lime-400 to-lime-300" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', filter: 'drop-shadow(0 2px 4px rgba(163, 230, 53, 0.6))'}}>
</div>

<div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white/60 to-white/30" style={{clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white ring-1 ring-lime-300/50" style={{boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)'}}></div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-30" style={{visibility: 'hidden'}}>
<svg className="text-lime-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<path className="" d="m16.2 7.8-2 6.3-6.4 2.1 2-6.3z"></path>
</svg>
</div>
</div>
</div>

<div className="absolute w-2 h-2 rounded-full bg-lime-400/80 backdrop-blur-sm ring-1 ring-lime-300/50" style={{top: '15px', left: '50%', transform: 'translateX(-50%)', boxShadow: 'rgba(163, 230, 53, 0.8) 0px 0px 10px', animation: '10s linear 0s infinite normal none running orbitCompass1'}}>
</div>
<div className="absolute w-1.5 h-1.5 rounded-full bg-white/60 backdrop-blur-sm ring-1 ring-white/40" style={{top: '50%', right: '15px', transform: 'translateY(-50%)', boxShadow: 'rgba(255, 255, 255, 0.6) 0px 0px 8px', animation: '12s linear 0s infinite normal none running orbitCompass2'}}>
</div>
<div className="absolute w-2 h-2 rounded-full bg-lime-300/60 backdrop-blur-sm ring-1 ring-lime-300/40" style={{bottom: '15px', left: '50%', transform: 'translateX(-50%)', boxShadow: 'rgba(163, 230, 53, 0.6) 0px 0px 10px', animation: '14s linear 0s infinite normal none running orbitCompass3'}}>
</div>
</div>
</div>
<div className="text-zinc-300 md:hidden transform rotate-90" style={{visibility: 'hidden', display: 'none'}}>
<svg className="lucide lucide-arrow-right w-6 h-6 stroke-[2]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>

<div className="w-full max-w-sm bg-[#F2F2F4] rounded-3xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] border border-white overflow-hidden relative" style={{}}>
<div className="px-5 py-3 border-b border-white/50 flex justify-between items-center bg-white/40">
<span className="text-xs font-semibold text-[#229ED9] flex items-center gap-1.5">
                             Telegram Channel
                        </span>
<div className="flex items-center gap-1.5 bg-blue-50 text-[#229ED9] px-2 py-0.5 rounded-full border border-blue-100/50">
<span className="text-[10px] uppercase tracking-wider font-semibold">Auto-Generated</span>
<svg className="lucide lucide-zap w-3 h-3 fill-current stroke-none" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
</div>
<div className="p-6">
<div className="flex gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2AABEE] to-[#229ED9] flex items-center justify-center text-white font-bold text-sm shadow-sm shrink-0">
                                E
                            </div>
<div className="flex-1">
<div className="flex flex-col mb-1.5">
<span className="text-sm font-semibold text-[#229ED9]">Echogram Bot</span>
<span className="text-[10px] text-zinc-400">Channel • Elonmusk Feed</span>
</div>
<div className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-sm border border-black/[0.03]">
<div className="mb-1 text-[#1D1D1F] text-xs font-medium opacity-80">
                                        @elonmusk
                                    </div>
<p className="text-sm text-[#1D1D1F] leading-relaxed font-normal">
                                        Just deployed a major update to our platform! 🚀 Real-time data streaming is now 10x faster. Check it out and let me know what you think!
                                    </p>
<div className="mt-3 pt-2 border-t border-zinc-100 flex items-center justify-between text-[10px] text-zinc-500">
<div className="flex gap-2">
<span className="flex items-center gap-1">💬 45</span>
<span className="flex items-center gap-1">🔁 89</span>
<span className="flex items-center gap-1">❤️ 1234</span>
</div>
<span>2 mins ago</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10 flex justify-center items-end">

<div className="absolute -bottom-[60%] w-[180vw] h-[180vw] md:w-[120rem] md:h-[120rem] rounded-full virtual-ripple opacity-30"></div>

<div className="absolute -bottom-[50%] w-[150vw] h-[150vw] md:w-[100rem] md:h-[100rem] rounded-full virtual-ripple opacity-50"></div>

<div className="absolute -bottom-[40%] w-[120vw] h-[120vw] md:w-[80rem] md:h-[80rem] rounded-full virtual-ripple opacity-70"></div>

<div className="absolute -bottom-[30%] w-[90vw] h-[90vw] md:w-[60rem] md:h-[60rem] rounded-full virtual-ripple opacity-90"></div>
</div>
</main>

<section className="z-10 bg-white/50 border-white/60 border-t pt-24 pb-24 relative backdrop-blur-sm">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white/60 p-8 rounded-3xl border border-white shadow-sm">
<div className="w-12 h-12 rounded-2xl bg-[#F2F2F4] flex items-center justify-center mb-6 text-[#1D1D1F]">
<svg className="lucide lucide-zap w-6 h-6 stroke-[1.5]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-medium text-[#1D1D1F] mb-3 tracking-tight">Instant Setup</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">No technical knowledge required. Connect your X feed to Telegram in just 2 clicks.</p>
</div>

<div className="bg-white/60 p-8 rounded-3xl border border-white shadow-sm">
<div className="w-12 h-12 rounded-2xl bg-[#F2F2F4] flex items-center justify-center mb-6 text-[#1D1D1F]">
<svg className="lucide lucide-lock w-6 h-6 stroke-[1.5]" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<h3 className="text-xl font-medium text-[#1D1D1F] mb-3 tracking-tight">No API Keys</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">We handle all the technical complexity. You never need to touch or manage an API key.</p>
</div>

<div className="bg-white/60 p-8 rounded-3xl border border-white shadow-sm">
<div className="w-12 h-12 rounded-2xl bg-[#F2F2F4] flex items-center justify-center mb-6 text-[#1D1D1F]">
<svg className="lucide lucide-clock w-6 h-6 stroke-[1.5]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-xl font-medium text-[#1D1D1F] mb-3 tracking-tight">Real-time Updates</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">Premium tier gets tweets delivered in 1-2 seconds. Basic tier updates every 15 minutes.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-32 pb-32 relative">

<div className="max-w-5xl mx-auto px-6 relative z-10">

<div className="text-center max-w-3xl mx-auto mb-20">
<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-md bg-zinc-100 mb-8 border border-zinc-200/60">
<span className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500">We Redefined Collaboration</span>
</div>
<h2 className="md:text-6xl text-5xl font-medium text-[#1D1D1F] tracking-tighter mb-6">Precision. Simplicity. Echogram.</h2>
<p className="leading-relaxed text-lg font-light text-zinc-500">Real-time performance all in one tool. Automation without the complexity. Just plug in an X username.</p>
</div>

<div className="md:h-[500px] flex w-full h-[400px] relative items-center justify-center">

<div className="flex pointer-events-none absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="animate-pulse-slow bg-stone-100/50 w-[280px] h-[280px] border-zinc-100 border rounded-full"></div>
<div className="w-[450px] h-[450px] border-zinc-100 border rounded-full absolute"></div>
<div className="absolute w-[620px] h-[620px] rounded-full border border-zinc-100/60"></div>
<div className="absolute w-[790px] h-[790px] rounded-full border border-zinc-50/60"></div>
</div>

<div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">

<div className="absolute top-[20%] left-[25%] w-3 h-3 border border-zinc-200 rounded-[2px] transform rotate-12"></div>
<div className="absolute top-[30%] left-[20%] w-2 h-2 bg-zinc-50 rounded-full"></div>
<div className="absolute bottom-[30%] right-[25%] w-4 h-4 border border-zinc-200 rounded-[4px] transform -rotate-6"></div>
<div className="absolute top-[25%] right-[20%] w-2 h-2 bg-zinc-100 rounded-sm"></div>
<div className="absolute bottom-[40%] left-[30%] w-2 h-2 border border-zinc-200 rounded-sm"></div>
<div className="absolute top-[45%] right-[28%] w-1.5 h-1.5 bg-zinc-100 rounded-full"></div>
</div>

<div className="animate-float z-20 flex gap-4 hover:scale-[1.02] transition-transform duration-500 cursor-default bg-white w-full max-w-md border-zinc-100 border rounded-full mr-4 ml-4 pt-2 pr-6 pb-2 pl-2 relative shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] gap-x-4 gap-y-4 items-center">

<div className="w-12 h-12 rounded-full bg-[#1D1D1F] flex items-center justify-center shrink-0 shadow-lg text-white">
<svg className="lucide lucide-circle-dot lucide-sparkles w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="circle-dot" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="1"></circle></svg>
</div>

<span className="flex-1 text-sm font-medium text-[#1D1D1F]">Work faster and smarter with Echo AI.</span>

<div className="text-zinc-400">
<svg className="lucide lucide-loader-circle w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="loader-circle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(161, 161, 170)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mr-auto ml-auto pt-32 pr-6 pb-32 pl-6">
<div className="text-center mb-20">
<h2 className="text-4xl font-light tracking-tighter text-[#1D1D1F] mb-4">Why struggle with complex tools?</h2>
<p className="text-zinc-500 font-light">See how Echogram compares to traditional solutions</p>
</div>
<div className="overflow-x-auto no-scrollbar bg-white/40 rounded-[2rem] border border-white/60 shadow-sm p-2">
<table className="w-full text-left border-collapse min-w-[700px]">
<thead className="">
<tr className="border-b border-zinc-200/50">
<th className="py-6 px-8 text-xs font-medium text-zinc-400 uppercase tracking-widest w-1/4">Feature</th>
<th className="py-6 px-8 text-xs font-medium text-zinc-400 uppercase tracking-widest w-1/4">Competitors</th>
<th className="py-6 px-8 text-xs font-medium text-[#1D1D1F] uppercase tracking-widest w-1/4">Basic</th>
<th className="py-6 px-8 text-xs font-medium text-[#1D1D1F] uppercase tracking-widest w-1/4">Premium</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-200/50">
<tr className="">
<td className="py-5 px-8 text-sm font-medium text-[#1D1D1F]">Cost</td>
<td className="py-5 px-8 text-sm text-zinc-400 line-through">$20-50/mo</td>
<td className="py-5 px-8 text-sm text-zinc-600">$4.99/mo</td>
<td className="py-5 px-8 text-sm font-semibold text-[#1D1D1F]">$9.99/mo</td>
</tr>
<tr className="">
<td className="py-5 px-8 text-sm font-medium text-[#1D1D1F]">Setup Time</td>
<td className="py-5 px-8 text-sm text-zinc-500">15+ clicks</td>
<td className="py-5 px-8 text-sm text-zinc-600">2 clicks</td>
<td className="py-5 px-8 text-sm text-[#1D1D1F]">2 clicks</td>
</tr>
<tr className="">
<td className="py-5 px-8 text-sm font-medium text-[#1D1D1F]">Update Speed</td>
<td className="py-5 px-8 text-sm text-zinc-500">15-60 min delay</td>
<td className="py-5 px-8 text-sm text-zinc-600">15 minutes</td>
<td className="py-5 px-8 text-sm text-[#1D1D1F] flex items-center gap-2">
                            1-2 seconds 
                            <div className="w-1.5 h-1.5 rounded-full bg-[#CAFC01]"></div>
</td>
</tr>
<tr className="">
<td className="py-5 px-8 text-sm font-medium text-[#1D1D1F]">API Keys Required</td>
<td className="pt-5 pr-8 pb-5 pl-8">
<svg className="lucide lucide-check w-4 h-4 text-zinc-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</td>
<td className="py-5 px-8">
<svg className="lucide lucide-x w-4 h-4 text-zinc-300" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</td>
<td className="py-5 px-8">
<svg className="lucide lucide-x w-4 h-4 text-zinc-300" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="overflow-hidden pt-0 pr-6 pb-0 pl-6 relative">

<div className="-z-10 bg-[#1D1D1F] rounded-t-[3rem] mt-20 absolute top-0 right-0 bottom-0 left-0" style={{}}></div>
<section className="sm:py-24 grid-corners border-white/5 border-t pt-24 pb-24 relative" style={{}}>
<div className="grid-corners-bottom"></div>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 gap-x-10 gap-y-10 items-center" style={{}}>
<div className="animate-slide-left" style={{}}>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Concept.</span>
<span className="karaoke-word">Code.</span>
<span className="karaoke-word">Deploy.</span>
<span className="karaoke-word"></span>
</h2>
<p className="karaoke-container text-neutral-300 mt-3" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Transform</span>
<span className="karaoke-word">hours</span>
<span className="karaoke-word">of</span>
<span className="karaoke-word">manual</span>
<span className="karaoke-word">work</span>
<span className="karaoke-word">into</span>
<span className="karaoke-word">minutes.</span>
<span className="karaoke-word">Maintain</span>
<span className="karaoke-word">full</span>
<span className="karaoke-word">control</span>
<span className="karaoke-word">with</span>
<span className="karaoke-word">human</span>
<span className="karaoke-word">oversight</span>
<span className="karaoke-word">at</span>
<span className="karaoke-word">every</span>
<span className="karaoke-word">step.</span>
<span className="karaoke-word"></span>
</p>
<ul className="mt-6 space-y-3 text-sm">
</ul>
<div className="mt-6 inline-flex gap-3">
<a className="inline-flex items-center gap-2 hover:bg-lime-300 transition font-medium text-neutral-950 bg-lime-400 rounded-full pt-3 pr-5 pb-3 pl-5" href="#cta">Get Started free</a>
</div>
</div>
<div className="animate-slide-right relative overflow-hidden rounded-2xl ring-1 ring-white/10" style={{}}>
<img alt="Minimal workspace" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f9a7d170-212e-4d48-994a-f342f4cb4f51_1600w.png" style={{}}/>
</div>
</div>

<div className="-translate-x-1/2 -translate-y-1/2 pointer-events-none z-30 absolute top-1/2 left-1/2 gap-x-10 gap-y-10" style={{animation: '8s ease-in-out 0s infinite normal none running compassFloat'}}>
<div className="relative gap-x-10 gap-y-10" style={{width: '180px', height: '180px'}}>

<div className="border-emerald-400/20 border-2 rounded-full absolute top-0 right-0 bottom-0 left-0 backdrop-blur-xl" style={{background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.03))', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 8px 32px, rgba(255, 255, 255, 0.2) 0px 2px 8px inset', animation: '20s linear 0s infinite normal none running compassRotate'}}>

<div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-60">
</div>
</div>

<div className="border-lime-300/30 border rounded-full absolute top-6 right-6 bottom-6 left-6 backdrop-blur-md gap-x-10 gap-y-10" style={{background: 'rgba(163, 230, 53, 0.08)', boxShadow: '0 0 20px rgba(163, 230, 53, 0.3), inset 0 1px 4px rgba(255, 255, 255, 0.15)', animation: 'compassPulse 4s ease-in-out infinite'}}>

<div className="absolute top-2 left-1/2 -translate-x-1/2 text-lime-300 text-xs font-semibold" style={{textShadow: 'rgba(163, 230, 53, 0.8) 0px 0px 8px', visibility: 'hidden'}}>
            N
          </div>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/40 text-xs" style={{visibility: 'hidden'}}>
            S
          </div>
<div className="-translate-y-1/2 text-xs text-white/40 absolute top-1/2 right-2 gap-x-10 gap-y-10" style={{visibility: 'hidden'}}>
            E
          </div>
<div className="absolute left-2 top-1/2 -translate-y-1/2 text-white/40 text-xs" style={{visibility: 'hidden'}}>
            W
          </div>
</div>

<div className="absolute inset-0 flex items-center justify-center" style={{}}>
<div className="relative w-20 h-20 rounded-full border-2 border-lime-300/40 backdrop-blur-xl overflow-hidden" style={{background: 'linear-gradient(135deg, rgba(163, 230, 53, 0.25) 0%, rgba(163, 230, 53, 0.08) 100%)', boxShadow: 'rgba(163, 230, 53, 0.4) 0px 12px 40px, rgba(255, 255, 255, 0.3) 0px 2px 6px inset'}}>

<div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent" style={{}}></div>

<div className="absolute inset-0 flex items-center justify-center" style={{animation: '6s ease-in-out 0s infinite normal none running compassNeedle', visibility: 'hidden'}}>
<div className="relative w-1 h-12" style={{transformOrigin: 'center center'}}>

<div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-lime-400 to-lime-300" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', filter: 'drop-shadow(0 2px 4px rgba(163, 230, 53, 0.6))'}}>
</div>

<div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white/60 to-white/30" style={{clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white ring-1 ring-lime-300/50" style={{boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)'}}></div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-30" style={{visibility: 'hidden'}}>
<svg className="text-lime-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<path className="" d="m16.2 7.8-2 6.3-6.4 2.1 2-6.3z"></path>
</svg>
</div>
</div>
</div>

<div className="absolute w-2 h-2 rounded-full bg-lime-400/80 backdrop-blur-sm ring-1 ring-lime-300/50" style={{top: '15px', left: '50%', transform: 'translateX(-50%)', boxShadow: '0 0 10px rgba(163, 230, 53, 0.8)', animation: 'orbitCompass1 10s linear infinite'}}>
</div>
<div className="absolute w-1.5 h-1.5 rounded-full bg-white/60 backdrop-blur-sm ring-1 ring-white/40" style={{top: '50%', right: '15px', transform: 'translateY(-50%)', boxShadow: '0 0 8px rgba(255, 255, 255, 0.6)', animation: 'orbitCompass2 12s linear infinite'}}>
</div>
<div className="absolute w-2 h-2 rounded-full bg-lime-300/60 backdrop-blur-sm ring-1 ring-lime-300/40" style={{bottom: '15px', left: '50%', transform: 'translateX(-50%)', boxShadow: '0 0 10px rgba(163, 230, 53, 0.6)', animation: 'orbitCompass3 14s linear infinite'}}>
</div>
</div>

<div className="-bottom-16 -translate-x-1/2 whitespace-nowrap text-xs border-white/10 border rounded-xl pt-2 pr-4 pb-2 pl-4 absolute left-1/2 backdrop-blur-md gap-x-10 gap-y-10" style={{background: 'rgba(0, 0, 0, 0.4)', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 4px 16px'}}>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-lime-400" style={{animation: 'pulse 2s ease-in-out infinite'}}></div>
<span className="text-neutral-300 font-medium">
                Navigation Active
              </span>
</div>
</div>
</div>
<style className="">
      @keyframes compassFloat {

        0%,
        100% {
          transform: translate(-50%, -50%) translateY(0px);
        }

        50% {
          transform: translate(-50%, -50%) translateY(-20px);
        }
      }

      @keyframes compassRotate {
        from {
          transform: rotate(0deg);
        }

        to {
          transform: rotate(360deg);
        }
      }

      @keyframes compassPulse {

        0%,
        100% {
          opacity: 1;
          transform: scale(1);
        }

        50% {
          opacity: 0.8;
          transform: scale(1.02);
        }
      }

      @keyframes compassNeedle {

        0%,
        100% {
          transform: rotate(0deg);
        }

        25% {
          transform: rotate(15deg);
        }

        75% {
          transform: rotate(-15deg);
        }
      }

      @keyframes orbitCompass1 {
        0% {
          transform: translateX(-50%) rotate(0deg) translateX(90px) rotate(0deg);
        }

        100% {
          transform: translateX(-50%) rotate(360deg) translateX(90px) rotate(-360deg);
        }
      }

      @keyframes orbitCompass2 {
        0% {
          transform: translateY(-50%) rotate(120deg) translateX(90px) rotate(-120deg);
        }

        100% {
          transform: translateY(-50%) rotate(480deg) translateX(90px) rotate(-480deg);
        }
      }

      @keyframes orbitCompass3 {
        0% {
          transform: translateX(-50%) rotate(240deg) translateX(90px) rotate(-240deg);
        }

        100% {
          transform: translateX(-50%) rotate(600deg) translateX(90px) rotate(-600deg);
        }
      }
    </style>
</div>
</section>
</section>

<footer className="bg-[#1D1D1F] border-t border-white/5 pt-12 pb-12 px-6">
<div className="flex flex-col md:flex-row gap-6 max-w-6xl mr-auto ml-auto gap-x-6 gap-y-6 items-center justify-between" style={{}}>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-white tracking-widest uppercase">Echogram</span>
<span className="text-xs text-zinc-600">© 2024</span>
</div>
<div className="flex gap-8">
<a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>


    </>
  );
}
