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
                'stroke-width': 1.5
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
      <div className="top-0 w-full -z-10 bg-cover bg-center absolute h-3/4" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/427b9e07-29ae-49eb-8b82-0561c321737b_3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<nav className="fixed top-0 left-0 w-full z-50 border-b border-neutral-100 bg-white/80 backdrop-blur-md">
<div className="md:px-6 flex h-14 max-w-screen-2xl mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<div className="flex items-center gap-8">
<a className="uppercase text-xl font-extrabold tracking-tighter font-montserrat" href="#">Maven</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#">Science</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Ingredients</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Subscription</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-xs font-medium bg-neutral-100 hover:bg-neutral-200 px-3 py-1.5 rounded-full transition-colors">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                    In Stock
                </button>
<button className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity">
<span className="hidden md:inline">Cart (0)</span>
<svg className="lucide lucide-shopping-bag w-5 h-5" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</button>
</div>
</div>
</nav>

<header className="md:pt-32 md:pb-24 md:px-6 max-w-screen-2xl mr-auto ml-auto pt-24 pr-4 pb-12 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 items-center">
<div className="flex flex-col space-y-8 items-start">
<div className="inline-flex items-center gap-2 border border-neutral-200 rounded-full pl-1 pr-3 py-1">
<span className="text-[10px] font-bold text-rose-400 font-geist bg-slate-50 rounded-full pt-0.5 pr-2 pb-0.5 pl-2">BEST SELLER</span>
<span className="text-xs font-medium text-slate-50 font-geist">GRAPE IS HERE</span>
</div>
<h1 className="leading-[0.9] md:text-8xl lg:text-9xl text-5xl font-semibold text-slate-50 tracking-tighter font-geist">DESIGNED FOR HUMAN PERFORMANCE <br/></h1>
<p className="leading-relaxed md:text-lg text-sm font-black text-slate-50 font-geist max-w-md">Performance. Precision. Clarity.</p>
<div className="flex flex-col sm:flex-row gap-4 sm:w-auto w-full gap-x-4 gap-y-4">
<button className="hover:bg-neutral-800 transition-all sm:w-auto flex group text-sm font-medium text-slate-950 font-geist bg-slate-50 w-full rounded-lg pt-4 pr-8 pb-4 pl-8 gap-x-2 gap-y-2 items-center justify-center">SHOP NOW</button>
<button className="hover:border-neutral-300 transition-all sm:w-auto text-sm font-medium text-slate-950 font-geist bg-white w-full border-neutral-200 border rounded-lg pt-4 pr-8 pb-4 pl-8">SUBSCRIBE AND SAVE</button>
</div>
<div className="flex items-center gap-6 pt-4">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-neutral-300 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-neutral-400 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-neutral-900 border-2 border-white flex items-center justify-center text-[10px] text-white font-medium">+2k</div>
</div>
<div className="flex flex-col">
<div className="flex gap-0.5">
<svg className="lucide lucide-star w-3 h-3 fill-neutral-900 text-neutral-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-neutral-900 text-neutral-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-neutral-900 text-neutral-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-neutral-900 text-neutral-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-neutral-900 text-neutral-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs font-medium font-geist text-slate-50">Trusted by elite operators.</span>
</div>
</div>
</div>
<div className="relative h-[500px] md:h-[700px] w-full bg-neutral-100 rounded-2xl overflow-hidden flex items-center justify-center group">

<div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-neutral-100 to-neutral-200 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 w-64 h-[450px] bg-white border border-neutral-200 shadow-2xl rounded-sm flex flex-col justify-between p-6 rotate-[-5deg] group-hover:rotate-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
<div className="flex justify-between items-start">
<span className="text-xs font-geist-mono border-neutral-900 border pt-0.5 pr-1 pl-1">CORE-01</span>
<div className="text-xs text-neutral-400 font-geist-mono text-right">
                            NET WT 6g
                            (0.21 OZ)
                        </div>
</div>
<div className="space-y-2">
<h3 className="text-5xl font-bold tracking-tighter font-montserrat">MAVEN</h3>
<p className="uppercase text-xs text-rose-500 tracking-widest font-geist-mono">GRAPE</p>
</div>
<div className="space-y-4">
<div className="w-full h-px bg-neutral-200"></div>
<div className="flex justify-between font-mono text-sm font-bold">
<span className="font-geist">SODIUM</span>
<span className="font-geist">1100mg</span>
</div>
<div className="w-full h-px bg-neutral-200"></div>
<div className="flex justify-between font-mono text-sm font-bold">
<span className="font-geist">POTASSIUM</span>
<span className="font-geist">300mg</span>
</div>
<div className="w-full h-px bg-neutral-200"></div>
<div className="flex justify-between font-mono text-sm font-bold">
<span className="font-geist">MAGNESIUM</span>
<span className="font-geist">100mg</span>
</div>
</div>
</div>

<div className="absolute top-1/4 right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-1/4 left-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl"></div>
</div>
</div>
</header>

<div className="w-full bg-neutral-900 py-4 overflow-hidden border-y border-neutral-900">
<div className="whitespace-nowrap flex animate-ticker">
<div className="flex gap-12 pr-6 pl-6 items-center">
<span className="uppercase flex items-center gap-2 text-sm text-neutral-400 tracking-widest font-geist-mono"><svg className="lucide lucide-check text-white w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 0g Sugar</span>
<span className="uppercase flex items-center gap-2 text-sm text-neutral-400 tracking-widest font-geist-mono"><svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Gluten Free</span>
<span className="uppercase flex items-center gap-2 text-sm text-neutral-400 tracking-widest font-geist-mono"><svg className="lucide lucide-check w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Paleo Friendly</span>
<span className="uppercase flex items-center gap-2 text-sm text-neutral-400 tracking-widest font-geist-mono"><svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Vegan</span>
<span className="uppercase flex items-center gap-2 text-sm text-neutral-400 tracking-widest font-geist-mono"><svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> No Fillers</span>
<span className="uppercase flex items-center gap-2 text-sm text-neutral-400 tracking-widest font-geist-mono"><svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Science Backed</span>
</div>
<div className="flex gap-12 pr-6 pl-6 items-center">
<span className="uppercase flex items-center gap-2 text-sm text-neutral-400 tracking-widest font-geist-mono"><svg className="lucide lucide-check text-white w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 0g Sugar</span>
<span className="text-neutral-400 text-sm font-mono uppercase tracking-widest flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Gluten Free</span>
<span className="text-neutral-400 text-sm font-mono uppercase tracking-widest flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Paleo Friendly</span>
<span className="text-neutral-400 text-sm font-mono uppercase tracking-widest flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Vegan</span>
<span className="text-neutral-400 text-sm font-mono uppercase tracking-widest flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> No Fillers</span>
<span className="text-neutral-400 text-sm font-mono uppercase tracking-widest flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Science Backed</span>
</div>
<div className="flex items-center gap-12 px-6">
<span className="text-neutral-400 text-sm font-mono uppercase tracking-widest flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 0g Sugar</span>
<span className="text-neutral-400 text-sm font-mono uppercase tracking-widest flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Gluten Free</span>
<span className="text-neutral-400 text-sm font-mono uppercase tracking-widest flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Paleo Friendly</span>
<span className="text-neutral-400 text-sm font-mono uppercase tracking-widest flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Vegan</span>
<span className="text-neutral-400 text-sm font-mono uppercase tracking-widest flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> No Fillers</span>
<span className="text-neutral-400 text-sm font-mono uppercase tracking-widest flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Science Backed</span>
</div>
</div>
</div>

<section className="md:px-6 max-w-screen-2xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4">
<div className="flex flex-col md:flex-row gap-6 mb-12 items-end justify-between">
<div className="max-w-xl">
<h2 className="md:text-5xl text-4xl font-semibold tracking-tighter font-geist mb-4">Optimal Infrastructure</h2>
<p className="text-slate-950 font-geist">Our performance system is built for operators who live under continuous load. Our products function as modular layers – Precise, stackable, and engineered to reinforce each other.</p>
</div>
<a className="hover:border-neutral-900 transition-colors text-sm font-medium font-geist border-neutral-300 border-b pb-0.5" href="#">View Supplement Facts</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-neutral-200 border border-neutral-200 gap-px">

<div className="flex flex-col hover:bg-neutral-50 transition-colors bg-white h-64 pt-8 pr-8 pb-8 pl-8 justify-between">
<div className="flex font-geist-mono items-start justify-between">
<span className="text-xs text-neutral-400 font-geist-mono">01</span>
<svg className="lucide lucide-zap w-5 h-5 text-neutral-900" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="">
<h3 className="text-6xl font-semibold tracking-tighter font-geist mb-2">1100<span className="align-top text-2xl font-geist">mg</span></h3>
<p className="uppercase text-sm font-medium tracking-wide font-geist">Sodium</p>
<p className="text-xs text-neutral-500 font-geist mt-2">The primary electrolyte lost in sweat. Crucial for nerve impulses and muscle function.</p>
</div>
</div>

<div className="bg-white p-8 flex flex-col justify-between h-64 hover:bg-neutral-50 transition-colors">
<div className="flex justify-between items-start">
<span className="text-xs text-neutral-400 font-geist-mono">02</span>
<svg className="lucide lucide-activity w-5 h-5 text-neutral-900" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="">
<h3 className="text-6xl font-semibold tracking-tighter font-geist mb-2">300<span className="align-top text-2xl font-geist">mg</span></h3>
<p className="uppercase text-sm font-medium tracking-wide font-geist">Potassium</p>
<p className="text-xs text-neutral-500 font-geist mt-2">Maintains intracellular fluid balance and prevents muscle cramps.</p>
</div>
</div>

<div className="bg-white p-8 flex flex-col justify-between h-64 hover:bg-neutral-50 transition-colors">
<div className="flex justify-between items-start">
<span className="text-xs text-neutral-400 font-geist-mono">03</span>
<svg className="lucide lucide-brain w-5 h-5 text-neutral-900" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</div>
<div className="">
<h3 className="text-6xl font-semibold tracking-tighter font-geist mb-2">100<span className="align-top text-2xl font-geist">mg</span></h3>
<p className="uppercase text-sm font-medium tracking-wide font-geist">Magnesium</p>
<p className="text-xs text-neutral-500 font-geist mt-2">Supports energy production, sleep, and over 300 enzymatic processes.</p>
</div>
</div>

<div className="bg-neutral-900 text-white p-8 flex flex-col justify-between h-64 group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:bg-white/10 transition-colors"></div>
<div className="flex justify-between items-start relative z-10">
<span className="font-mono text-xs text-neutral-500">04</span>
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="relative z-10">
<h3 className="text-6xl font-semibold tracking-tighter font-geist mb-2">20<span className="align-top text-2xl font-geist">mg</span></h3>
<p className="uppercase group-hover:text-white transition-colors text-sm font-medium text-neutral-400 tracking-wide">EAA</p>
<p className="group-hover:text-neutral-400 transition-colors text-xs text-neutral-500 font-geist mt-2" style={{}}>Muscle repair, energy, recovery and overall performance.</p>
</div>
</div>
</div>
</section>

<section className="md:px-6 max-w-screen-xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 md:p-12">
<div className="text-center mb-12">
<h3 className="text-3xl font-semibold tracking-tighter font-geist mb-2">THE SCIENCE</h3>
<p className="font-light text-slate-950 font-geist">Why we outperform, everyone.</p>
</div>
<div className="overflow-x-auto no-scrollbar">
<div className="min-w-[600px] w-full grid grid-cols-4 text-sm">

<div className="col-span-1 font-light text-neutral-400 font-geist pt-4 pr-4 pb-4 pl-4">METRIC (1X)</div>
<div className="col-span-1 font-bold text-neutral-900 font-montserrat text-center bg-white border-neutral-100 border rounded-t-lg pt-4 pr-4 pb-4 pl-4 shadow-sm">MAVEN</div>
<div className="col-span-1 p-4 font-medium text-neutral-500 text-center">Sports Drinks</div>
<div className="col-span-1 p-4 font-medium text-neutral-500 text-center">Water</div>

<div className="col-span-1 flex font-bold font-geist border-neutral-200 border-t pt-4 pr-4 pb-4 pl-4 gap-x-2 gap-y-2 items-center">SODIUM</div>
<div className="col-span-1 border-x flex font-bold text-neutral-900 font-geist text-center bg-white border-neutral-100 pt-4 pr-4 pb-4 pl-4 items-center justify-center">1100mg</div>
<div className="col-span-1 p-4 text-neutral-500 border-t border-neutral-200 text-center flex items-center justify-center">270mg</div>
<div className="col-span-1 p-4 text-neutral-500 border-t border-neutral-200 text-center flex items-center justify-center">0mg</div>

<div className="col-span-1 flex font-bold font-geist border-neutral-200 border-t pt-4 pr-4 pb-4 pl-4 gap-x-2 gap-y-2 items-center" style={{}}>POTASSIUM</div>
<div className="col-span-1 border-x flex font-bold text-neutral-900 font-geist text-center bg-white border-neutral-100 pt-4 pr-4 pb-4 pl-4 items-center justify-center">300g</div>
<div className="col-span-1 p-4 text-neutral-500 border-t border-neutral-200 text-center flex items-center justify-center">21g</div>
<div className="col-span-1 p-4 text-neutral-500 border-t border-neutral-200 text-center flex items-center justify-center">0g</div>

<div className="col-span-1 flex gap-2 font-extrabold font-geist border-neutral-200 border-t pt-4 pr-4 pb-4 pl-4 gap-x-2 gap-y-2 items-center" style={{}}>MAGNESIUM</div>
<div className="col-span-1 border-x flex font-bold text-neutral-900 font-geist text-center bg-white border-neutral-100 pt-4 pr-4 pb-4 pl-4 items-center justify-center">100mg</div>
<div className="col-span-1 p-4 text-neutral-500 border-t border-neutral-200 text-center flex items-center justify-center">65mg</div>
<div className="col-span-1 p-4 text-neutral-500 border-t border-neutral-200 text-center flex items-center justify-center">0mg</div>

<div className="col-span-1 flex gap-2 font-light font-geist border-neutral-200 border-t pt-4 pr-4 pb-4 pl-4 gap-x-2 gap-y-2 items-center">PRICE / SERVING</div>
<div className="col-span-1 border-x flex font-bold text-neutral-900 font-geist text-center bg-white border-neutral-100 rounded-b-lg border-b pt-4 pr-4 pb-4 pl-4 shadow-sm items-center justify-center">$1.15</div>
<div className="col-span-1 p-4 text-neutral-500 border-t border-neutral-200 text-center flex items-center justify-center">$2.50</div>
<div className="col-span-1 p-4 text-neutral-500 border-t border-neutral-200 text-center flex items-center justify-center">$0.05</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-neutral-100 border-t pt-24 pb-24">
<div className="md:px-6 max-w-screen-2xl mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 gap-x-16 gap-y-16">

<div className="relative">
<div className="sticky top-32 bg-neutral-100 rounded-2xl aspect-square flex items-center justify-center overflow-hidden">
<div className="w-3/5 h-4/5 bg-white shadow-2xl rounded-sm border border-neutral-200 flex flex-col p-6 rotate-[-2deg] hover:rotate-0 transition-all duration-500 cursor-pointer">

<div className="flex justify-between mb-4">
<div className="bg-rose-400 w-8 h-8 rounded-full"></div>
<div className="text-[10px] font-mono border-black border pr-1 pl-1">CORE 1</div>
</div>
<h2 className="text-4xl font-bold tracking-tighter font-montserrat mb-2">MAVEN</h2>
<div className="flex-1 border-y border-neutral-200 my-4 py-4 space-y-2">
<div className="flex justify-between text-xs font-mono font-bold">
<span className="font-geist">GRAPE</span>
<span className="font-geist">30 PACK</span>
</div>
<div className="text-[10px] leading-tight text-neutral-500 font-geist">INGREDIENTS: SODIUM CHLORIDE, GRAPE ACID, MAGNESIUM MALATE, POTASSIUM CHLORIDE, MONK FRUIT EXTRACT.</div>
</div>
<div className="text-xs font-bold font-geist-mono text-center">ADVANCED ELECTROLYTES</div>
</div>
</div>
</div>

<div className="flex flex-col pt-8 space-y-10">
<div className="">
<h2 className="text-4xl font-semibold text-neutral-900 tracking-tighter font-geist mb-2">STARTER PACK</h2>
<div className="flex items-center gap-4">
<span className="text-2xl font-medium font-geist">$45.00</span>
<span className="line-through text-sm text-neutral-500 font-geist">$55.00</span>
<span className="text-xs font-medium text-green-700 font-geist bg-green-100 rounded-full pt-0.5 pr-2 pb-0.5 pl-2">Save 20%</span>
</div>
</div>
<div className="space-y-4">
<label className="uppercase text-xs font-medium text-neutral-500 tracking-wide font-geist">Flavor Profile</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer group">
<input checked="" className="peer sr-only" name="flavor" type="radio"/>
<div className="p-4 border border-neutral-200 rounded-lg peer-checked:border-neutral-900 peer-checked:bg-neutral-50 transition-all group-hover:border-neutral-400">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-black font-geist">YUZU</span>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
</div>
<p className="text-xs text-neutral-500 font-geist">Bright, sharp citrus with a fragrant bitterness.</p>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="flavor" type="radio"/>
<div className="peer-checked:border-neutral-900 peer-checked:bg-neutral-50 transition-all group-hover:border-neutral-400 border-neutral-200 border rounded-lg pt-4 pr-4 pb-4 pl-4">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-black font-geist">BLACKBERRY</span>
<div className="bg-neutral-950 w-3 h-3 border-neutral-300 border rounded-full"></div>
</div>
<p className="text-xs text-neutral-500">Dark, ripe berry depth, tartness and sweetness.</p>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="flavor" type="radio"/>
<div className="p-4 border border-neutral-200 rounded-lg peer-checked:border-neutral-900 peer-checked:bg-neutral-50 transition-all group-hover:border-neutral-400">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-black">GRAPE</span>
<div className="w-3 h-3 rounded-full bg-red-400"></div>
</div>
<p className="text-xs text-neutral-500">Bold, juicy, and aromatic.</p>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="flavor" type="radio"/>
<div className="p-4 border border-neutral-200 rounded-lg peer-checked:border-neutral-900 peer-checked:bg-neutral-50 transition-all group-hover:border-neutral-400">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-black">WATERMELON</span>
<div className="bg-green-500 w-3 h-3 rounded-full"></div>
</div>
<p className="text-xs text-neutral-500">Light, crisp sweetness, refreshing, and cool.</p>
</div>
</label>
</div>
</div>
<div className="space-y-4">
<label className="uppercase text-xs font-medium text-neutral-500 tracking-wide font-geist">Delivery Frequency</label>
<div className="flex flex-col gap-3">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="freq" type="radio"/>
<div className="flex items-center p-4 border border-neutral-200 rounded-lg peer-checked:border-neutral-900 peer-checked:bg-neutral-50 transition-all">
<div className="w-4 h-4 rounded-full border border-neutral-300 flex items-center justify-center mr-4 peer-checked:border-neutral-900">
<div className="w-2 h-2 rounded-full bg-neutral-900 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<div className="flex-1">
<div className="flex justify-between font-medium text-sm">
<span className="font-geist">Subscribe &amp; Save 15%</span>
<span className="font-geist">$38.25</span>
</div>
<p className="text-xs text-neutral-500 font-geist mt-1">Free shipping. Cancel anytime.</p>
</div>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="freq" type="radio"/>
<div className="flex items-center p-4 border border-neutral-200 rounded-lg peer-checked:border-neutral-900 peer-checked:bg-neutral-50 transition-all">
<div className="w-4 h-4 rounded-full border border-neutral-300 flex items-center justify-center mr-4 peer-checked:border-neutral-900">
<div className="w-2 h-2 rounded-full bg-neutral-900 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<div className="flex-1">
<div className="flex justify-between font-medium text-sm">
<span className="font-geist">One-time Purchase</span>
<span className="font-geist">$45.00</span>
</div>
</div>
</div>
</label>
</div>
</div>
<div className="pt-4">
<button className="hover:bg-neutral-800 transition-colors flex font-medium text-white font-geist bg-neutral-900 w-full rounded-lg pt-4 pb-4 gap-x-2 gap-y-2 items-center justify-center">
                            Add to Cart
                            <span className="w-1 h-1 bg-white rounded-full mx-2"></span>
                            $38.25
                        </button>
<p className="flex items-center justify-center gap-2 text-xs text-neutral-400 font-geist text-center mt-4">
<svg className="lucide lucide-shield-check w-3 h-3" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> 30-Day Money Back Guarantee
                        </p>
</div>
<div className="border-t border-neutral-100 pt-8">
<div className="grid grid-cols-2 gap-8">
<div className="flex flex-col gap-2">
<svg className="lucide lucide-droplet w-6 h-6 text-neutral-900 mb-1" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
<span className="text-sm font-semibold font-geist">Osmolarity Optimized</span>
<p className="leading-relaxed text-xs text-neutral-500 font-geist">Formulated to 280 mOsm/L for rapid gastric emptying and instant systemic absorption.</p>
</div>
<div className="flex flex-col gap-2">
<svg className="lucide lucide-flask-conical w-6 h-6 text-neutral-900 mb-1" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg>
<span className="text-sm font-semibold font-geist">Lab Tested</span>
<p className="leading-relaxed text-xs text-neutral-500 font-geist">Every batch is third-party tested for heavy metals and banned substances.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="text-white bg-neutral-900 border-neutral-800 border-t pt-24 pb-12">
<div className="max-w-screen-2xl mx-auto px-4 md:px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="block text-2xl font-bold tracking-tighter font-montserrat mb-6" href="#">MAVEN</a>
<p className="text-neutral-400 font-geist max-w-sm mb-8">Performance hydration based on human physiology, not marketing hype. Zero sugar, meaningful electrolytes.</p>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</div>
</div>
</div>
<div className="">
<h4 className="uppercase text-xs text-neutral-500 tracking-widest font-geist-mono mb-6">Product</h4>
<ul className="space-y-4 text-sm text-neutral-300">
<li className=""><a className="hover:text-white transition-colors font-geist" href="#">Shop All</a></li>
<li className=""><a className="hover:text-white transition-colors font-geist" href="#">Starter Kit</a></li>
<li className="font-geist"><a className="hover:text-white transition-colors font-geist" href="#">Subscription</a></li>
<li className=""><a className="hover:text-white transition-colors font-geist" href="#">Gift Cards</a></li>
</ul>
</div>
<div className="">
<h4 className="uppercase text-xs text-neutral-500 tracking-widest font-geist-mono mb-6">Company</h4>
<ul className="space-y-4 text-sm text-neutral-300">
<li className="font-geist"><a className="hover:text-white transition-colors font-geist" href="#">The Science</a></li>
<li className="font-geist"><a className="hover:text-white transition-colors font-geist" href="#">About Us</a></li>
<li className=""><a className="hover:text-white transition-colors font-geist" href="#">Careers</a></li>
<li className=""><a className="hover:text-white transition-colors font-geist" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
<p className="font-black tracking-tighter font-geist">© 2025 MAVEN INDUSTRIES INC. ALL RIGHTS RESERVED.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-300 text-xs font-black tracking-tighter font-geist" href="#">PRIVACY POLICY</a>
<a className="hover:text-neutral-300 text-xs font-black tracking-tighter font-geist" href="#">TERMS OF SERVICE</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
