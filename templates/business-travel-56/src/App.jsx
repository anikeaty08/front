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
      

<div className="bg-[#1e1b4b] text-white py-3 px-4 text-center relative z-50">
<div className="flex items-center justify-center gap-2 text-sm font-medium">
<svg className="lucide lucide-gift w-4 h-4" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
<span>Get £400 for personal travel when your company joins Navan | <a className="underline hover:text-indigo-200 decoration-1 underline-offset-2" href="#">Learn more</a></span>
</div>
</div>

<header className="bg-white py-5 px-6 md:px-8 relative z-50">
<div className="max-w-7xl mx-auto flex justify-between items-center">

<a className="text-3xl font-bold tracking-tighter italic font-sans flex items-center gap-1" href="#">
<span>NAVAN</span>
</a>
<a className="text-sm font-semibold hover:text-indigo-600 transition-colors" href="#">
                Log in
            </a>
</div>
</header>

<main className="lg:pb-48 overflow-hidden bg-[#dbeafe] pt-12 pb-32 relative">

<div className="absolute bottom-0 left-0 w-full leading-none z-10 translate-y-1">
<svg className="md:h-48 lg:h-64 w-[1248px] h-[128px]" data-icon-replaced="true" preserveaspectratio="none" strokeWidth="2" style={{width: '1248px', height: '128px', color: 'rgb(15, 23, 42)'}} viewbox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,250.7C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#ffffff" fillOpacity="1"></path>
</svg>
</div>

<div className="absolute inset-0 bg-gradient-to-br from-indigo-100/40 via-purple-100/30 to-blue-100/20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 md:px-8 relative z-20">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

<div className="space-y-8 max-w-xl">
<h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-medium tracking-tight text-[#1a1a1a] leading-[1.1]">
                        Your company’s one-stop travel shop
                    </h1>
<p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                        Make business travel a pleasure for travellers, easy for admins, and cost-effective for the company.
                    </p>
<form className="space-y-4 pt-2">
<div className="relative">
<input className="w-full p-4 pl-5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm text-base placeholder:text-slate-400" placeholder="Work email (name@company.com)" type="email"/>
</div>
<div className="flex items-start gap-3">
<div className="relative flex items-center">
<input className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 bg-white checked:bg-indigo-600 checked:border-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 transition-all" id="consent" type="checkbox"/>
<svg className="lucide lucide-check absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<label className="text-sm text-slate-500 font-light leading-snug cursor-pointer select-none" htmlFor="consent">
                                Get travel tips, promos &amp; Navan news. <a className="underline hover:text-indigo-600" href="#">See privacy policy</a>.
                            </label>
</div>
<button className="w-full bg-[#6200ee] hover:bg-[#5000c9] text-white font-medium text-lg py-4 rounded-full shadow-lg shadow-indigo-500/20 transition-all transform active:scale-[0.99]" type="button">
                            Get started
                        </button>
<p className="text-center text-xs text-slate-500 font-light">
                            Navan Travel is free* — no platform fees
                        </p>
</form>
</div>

<div className="relative pt-8 lg:pt-0">

<div className="bg-indigo-200/40 backdrop-blur-md border border-white/40 rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden group">

<div className="absolute top-8 right-8 md:top-12 md:right-12 z-20">
<button className="bg-white/90 hover:bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 group">
<svg className="lucide lucide-play w-8 h-8 text-indigo-600 fill-indigo-600 ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
<div className="relative z-10 space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1a1a2e] max-w-sm leading-tight">
                                #1 rated  business travel platform
                            </h2>

<div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
<div className="bg-[#ff492c] text-white p-0.5 rounded px-1 text-[10px] font-bold">G2</div>
<div className="flex text-indigo-500">
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs text-slate-500">8K+ reviews</span>
</div>

<div className="flex flex-wrap gap-3 pt-4">

<div className="w-16 h-20 bg-white border border-slate-200 shadow-sm rounded-sm flex flex-col items-center justify-between p-1 relative overflow-hidden">
<div className="w-full bg-[#ff492c] h-3 absolute top-0 left-0"></div>
<div className="mt-4 text-[6px] font-bold text-center leading-tight uppercase text-slate-700">GridLeader</div>
<div className="text-[5px] text-slate-400 mb-1">Small Business</div>
<div className="absolute bottom-0 w-full h-1 bg-yellow-400"></div>
</div>

<div className="w-16 h-20 bg-white border border-slate-200 shadow-sm rounded-sm flex flex-col items-center justify-between p-1 relative overflow-hidden">
<div className="w-full bg-[#ff492c] h-3 absolute top-0 left-0"></div>
<div className="mt-4 text-[6px] font-bold text-center leading-tight uppercase text-slate-700">BestRelationship</div>
<div className="text-[5px] text-slate-400 mb-1">Enterprise</div>
<div className="absolute bottom-0 w-full h-1 bg-green-400"></div>
</div>

<div className="w-16 h-20 bg-white border border-slate-200 shadow-sm rounded-sm flex flex-col items-center justify-between p-1 relative overflow-hidden">
<div className="w-full bg-[#ff492c] h-3 absolute top-0 left-0"></div>
<div className="mt-4 text-[6px] font-bold text-center leading-tight uppercase text-slate-700">MomentumLeader</div>
<div className="text-[5px] text-slate-400 mb-1">Spring 2025</div>
<div className="absolute bottom-0 w-full h-1 bg-blue-400"></div>
</div>

<div className="w-16 h-20 bg-white border border-slate-200 shadow-sm rounded-sm flex flex-col items-center justify-between p-1 relative overflow-hidden">
<div className="w-full bg-[#ff492c] h-3 absolute top-0 left-0"></div>
<div className="mt-4 text-[6px] font-bold text-center leading-tight uppercase text-slate-700">RegionalLeader</div>
<div className="text-[5px] text-slate-400 mb-1">EMEA</div>
<div className="absolute bottom-0 w-full h-1 bg-pink-400"></div>
</div>
</div>
</div>
</div>

<div className="mt-6 flex items-center justify-center lg:justify-start gap-3">
<div className="relative w-8 h-8">

<svg className="w-full h-full text-slate-600 fill-current" viewbox="0 0 100 100">
<path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90C27.9 90 10 72.1 10 50S27.9 10 50 10s40 17.9 40 40-17.9 40-40 40z"></path>
<path d="M65 40h-20v-5h20V25H35v25h10v5H35v20h30V60H55v-5h10v20h-20V40h20z" fill="none" stroke="currentColor" strokeWidth="0"></path>
<text dy=".3em" fill="#64748b" fontSize="40" font-weight="bold" text-anchor="middle" x="50%" y="50%">G2</text>
</svg>
</div>
<div className="flex text-slate-400 space-x-0.5">
<svg className="lucide lucide-star w-4 h-4 fill-slate-500 text-slate-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-slate-500 text-slate-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-slate-500 text-slate-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-slate-500 text-slate-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-slate-500 text-slate-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div className="text-sm font-semibold text-slate-600">
                             4.7 <span className="font-normal text-slate-500">out of</span> 5 <span className="text-slate-300 mx-1">|</span> <span className="font-bold">8.5K+ reviews</span>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="bg-white pb-20 relative z-20 overflow-hidden">
<div className="relative max-w-7xl mx-auto px-6 md:px-8">
<div className="relative flex items-center justify-center -mt-3 mb-12">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-slate-200"></div>
</div>
<div className="bg-white my-2 pr-4 pl-4 relative">
<h3 className="text-base font-semibold text-slate-500 pt-1">Loved by companies across the UK</h3>
</div>
</div>
</div>

<div className="w-full overflow-hidden relative group">

<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
<div className="flex items-center gap-16 w-max animate-marquee opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-16 shrink-0">
<span className="font-sans font-bold text-2xl tracking-tighter">Huel</span>
<div className="flex flex-col items-center leading-none"><span className="font-sans font-bold text-xl tracking-[0.2em] text-slate-700">BASALT</span><span className="text-[0.4rem] tracking-widest uppercase text-slate-400 mt-1">Infrastructure Partners</span></div>
<span className="font-sans font-bold text-2xl text-slate-400 lowercase tracking-tight">informa</span>
<div className="flex items-center gap-2"><span className="font-serif text-[0.6rem] tracking-widest uppercase">Monica</span><span className="font-serif text-2xl italic">M</span><span className="font-serif text-[0.6rem] tracking-widest uppercase">Vinader</span></div>
<span className="font-serif text-2xl font-bold text-slate-600">Ebury</span>
<div className="w-10 h-10 rounded-full bg-slate-400 flex items-center justify-center text-white font-bold text-sm">LGC</div>
<span className="font-['Playfair_Display'] italic text-2xl font-bold">Unilever</span>
<div className="flex items-center gap-1"><div className="w-4 h-4 rounded-full border-2 border-slate-400"></div><span className="font-sans font-light text-lg tracking-tight">paymentsense</span></div>
<div className="flex items-center gap-1"><div className="w-5 h-5 bg-slate-500 rounded flex items-center justify-center text-white text-[10px] font-bold">S</div><span className="font-sans font-bold text-lg text-slate-500">sumup</span></div>
</div>

<div className="flex items-center gap-16 shrink-0">
<span className="font-sans font-bold text-2xl tracking-tighter">Huel</span>
<div className="flex flex-col items-center leading-none"><span className="font-sans font-bold text-xl tracking-[0.2em] text-slate-700">BASALT</span><span className="text-[0.4rem] tracking-widest uppercase text-slate-400 mt-1">Infrastructure Partners</span></div>
<span className="font-sans font-bold text-2xl text-slate-400 lowercase tracking-tight">informa</span>
<div className="flex items-center gap-2"><span className="font-serif text-[0.6rem] tracking-widest uppercase">Monica</span><span className="font-serif text-2xl italic">M</span><span className="font-serif text-[0.6rem] tracking-widest uppercase">Vinader</span></div>
<span className="font-serif text-2xl font-bold text-slate-600">Ebury</span>
<div className="w-10 h-10 rounded-full bg-slate-400 flex items-center justify-center text-white font-bold text-sm">LGC</div>
<span className="font-['Playfair_Display'] italic text-2xl font-bold">Unilever</span>
<div className="flex items-center gap-1"><div className="w-4 h-4 rounded-full border-2 border-slate-400"></div><span className="font-sans font-light text-lg tracking-tight">paymentsense</span></div>
<div className="flex items-center gap-1"><div className="w-5 h-5 bg-slate-500 rounded flex items-center justify-center text-white text-[10px] font-bold">S</div><span className="font-sans font-bold text-lg text-slate-500">sumup</span></div>
</div>
</div>
</div>
</section>


    </>
  );
}
