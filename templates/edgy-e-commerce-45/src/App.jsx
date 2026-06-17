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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
'brat-green': '#8ace00',
'brat-pink': '#eb008b',
'off-white': '#fdfdf8',
'dark': '#111111',
'bag-beige': '#f2ebd9',
'graphic-purple': '#5b5bff',
'graphic-green': '#d4f976',
},
animation: {
'marquee': 'marquee 25s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
}
}
}
}
}



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
      

<nav className="fixed top-0 w-full z-50 border-b border-dark/10 bg-off-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">

<div className="flex items-center gap-2">
<a className="text-lg font-semibold tracking-tight uppercase hover:text-brat-pink transition-colors" href="#">ZioBratClub</a>
<span className="hidden sm:block text-[10px] font-mono bg-dark text-white px-1.5 py-0.5 rounded-sm">V.2025</span>
</div>

<div className="hidden md:flex items-center gap-8">
<div className="group relative cursor-pointer h-14 flex items-center">
<span className="text-sm font-medium hover:text-brat-pink transition-colors">Home</span>
<div className="absolute top-10 left-1/2 -translate-x-1/2 w-max bg-dark text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        Welcome to the Resistance
                    </div>
</div>
<div className="group relative cursor-pointer h-14 flex items-center">
<span className="text-sm font-medium hover:text-brat-pink transition-colors">Shop</span>
<div className="absolute top-10 left-1/2 -translate-x-1/2 w-max bg-dark text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        Shop ZBC Official Merch
                    </div>
</div>
<div className="group relative cursor-pointer h-14 flex items-center">
<span className="text-sm font-medium hover:text-brat-pink transition-colors">Lore</span>
<div className="absolute top-10 left-1/2 -translate-x-1/2 w-max bg-dark text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        Archives &amp; Classified Files
                    </div>
</div>
<div className="group relative cursor-pointer h-14 flex items-center">
<span className="text-sm font-medium hover:text-brat-pink transition-colors">HQ</span>
<div className="absolute top-10 left-1/2 -translate-x-1/2 w-max bg-dark text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        Contact &amp; Confessions
                    </div>
</div>
</div>

<div className="flex items-center gap-4">
<button className="relative group">
<i className="w-5 h-5 text-dark group-hover:text-brat-pink transition-colors" data-lucide="search"></i>
</button>
<button className="relative group">
<i className="w-5 h-5 text-dark group-hover:text-brat-pink transition-colors" data-lucide="shopping-bag"></i>
<span className="absolute -top-1 -right-1 w-3 h-3 bg-brat-green rounded-full border border-off-white"></span>
</button>
<button className="md:hidden">
<i className="w-5 h-5 text-dark" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 overflow-hidden border-b border-dark">

<div className="absolute inset-0 opacity-5 pointer-events-none select-none overflow-hidden leading-none">
<div className="text-[20vw] font-bold text-dark whitespace-nowrap -rotate-2 origin-top-left translate-y-10">ZIO BRAT CLUB</div>
<div className="text-[20vw] font-bold text-dark whitespace-nowrap -rotate-2 origin-top-left translate-y-20 ml-20">RESISTANCE</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brat-green/20 border border-brat-green/30 text-dark/80 mb-6 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brat-green opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brat-green"></span>
</span>
<span className="text-xs font-mono uppercase tracking-wide">Drop 01: Comments Section Live</span>
</div>
<h1 className="text-5xl md:text-8xl font-semibold tracking-tight mb-8 text-dark">
                YOU CAN'T CANCEL <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brat-pink to-brat-pink/70">WHAT WAS PROMISED</span>
</h1>
<p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-10 font-medium">
                Classified brand. Unapologetically Zionist. Satire as survival.
                <br/>Welcome to the resistance movement with better merch.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-dark text-white rounded-md font-medium hover:bg-brat-green hover:text-dark transition-all duration-200 flex items-center justify-center gap-2 group" href="#shop">
                    Explore the Collection
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-3 bg-white border border-neutral-200 text-dark rounded-md font-medium hover:border-dark transition-colors" href="#lore">
                    Access Lore Archives
                </a>
</div>
</div>
</header>

<div className="bg-brat-green border-b border-dark py-3 overflow-hidden whitespace-nowrap">
<div className="inline-flex animate-marquee">
<span className="text-sm font-mono font-bold uppercase mx-4">★ UNAUTHORIZED DISTRIBUTION ENCOURAGED</span>
<span className="text-sm font-mono font-bold uppercase mx-4">★ ACCORDING TO THE COMMENTS SECTION</span>
<span className="text-sm font-mono font-bold uppercase mx-4">★ BASED IN TEL AVIV</span>
<span className="text-sm font-mono font-bold uppercase mx-4">★ SPIRITUALLY EVERYWHERE</span>
<span className="text-sm font-mono font-bold uppercase mx-4">★ YOU KNOW WHICH SIDE YOU'RE ON</span>
<span className="text-sm font-mono font-bold uppercase mx-4">★ UNAUTHORIZED DISTRIBUTION ENCOURAGED</span>
<span className="text-sm font-mono font-bold uppercase mx-4">★ ACCORDING TO THE COMMENTS SECTION</span>
<span className="text-sm font-mono font-bold uppercase mx-4">★ BASED IN TEL AVIV</span>
<span className="text-sm font-mono font-bold uppercase mx-4">★ SPIRITUALLY EVERYWHERE</span>
<span className="text-sm font-mono font-bold uppercase mx-4">★ YOU KNOW WHICH SIDE YOU'RE ON</span>
</div>
</div>

<section className="py-24 border-b border-dark/10 grid-bg" id="shop">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-2 flex items-center gap-2">
<i className="w-6 h-6 text-brat-pink" data-lucide="lock"></i>
                        EVIDENCE LOCKER
                    </h2>
<p className="text-neutral-500">Seized artifacts from Headquarters. Limited supply.</p>
</div>
<a className="text-sm font-medium border-b border-dark pb-0.5 hover:text-brat-pink hover:border-brat-pink transition-colors" href="#">
                    View All Seized Goods
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-white border border-neutral-200 p-4 rounded-lg hover:shadow-xl hover:shadow-brat-green/20 hover:border-brat-green transition-all duration-300">
<div className="aspect-square bg-white rounded-md mb-4 relative overflow-hidden flex items-center justify-center p-6">
<div className="absolute top-3 left-3 bg-brat-pink text-white text-[10px] font-bold uppercase px-2 py-1 rounded-sm z-10">Bestseller</div>

<div className="w-full h-full flex flex-col items-center justify-end relative group-hover:scale-105 transition-transform duration-500">

<div className="absolute top-0 w-24 h-24 rounded-t-full border-[8px] border-bag-beige bg-transparent -translate-y-4 shadow-sm z-0"></div>
<div className="absolute top-0 w-24 h-24 rounded-t-full border-[8px] border-black/5 bg-transparent -translate-y-3.5 -z-10 blur-sm"></div>

<div className="w-56 h-48 bg-bag-beige relative rounded-sm shadow-lg flex flex-col items-center justify-center z-10 overflow-hidden border border-neutral-200/50">

<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/canvas-orange.png')] opacity-30 mix-blend-multiply"></div>

<div className="relative z-20 flex flex-col items-center justify-center -mt-2 space-y-1">
<div className="font-sans font-black italic text-xl tracking-tight text-graphic-green text-outline-purple leading-none transform -rotate-1">
                                        PUREBRED
                                    </div>
<div className="font-sans font-black italic text-xl tracking-tight text-graphic-green text-outline-purple leading-none transform -rotate-1 mb-1">
                                        ZIODOG
                                    </div>

<div className="relative mt-1">
<i className="absolute -top-3 -right-4 w-3 h-3 text-graphic-purple fill-graphic-purple animate-pulse" data-lucide="sparkles"></i>
<i className="absolute top-4 -left-5 w-3 h-3 text-graphic-purple fill-graphic-purple animate-pulse delay-150" data-lucide="sparkles"></i>
<div className="relative text-graphic-purple">
<i className="w-16 h-16 stroke-[1.5]" data-lucide="dog"></i>

<i className="absolute top-[18px] left-[14px] w-8 h-8 fill-graphic-purple/20 stroke-[2] transform -rotate-2" data-lucide="glasses"></i>

<i className="absolute bottom-[18px] left-[26px] w-3 h-3 fill-white stroke-[1.5]" data-lucide="hexagon"></i>
</div>
</div>
</div>

<div className="absolute top-10 right-0 w-3 h-4 bg-dark flex items-center justify-center">
<span className="text-[3px] text-white rotate-90 font-mono">ZBC</span>
</div>

<div className="absolute bottom-0 w-full h-4 bg-black/5 blur-[1px]"></div>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-lg leading-tight group-hover:text-brat-pink transition-colors">Purebred Ziodog Tote</h3>
<p className="text-sm text-neutral-500 mt-1">Heavy Canvas / Graphic Print</p>
</div>
<span className="font-mono text-sm font-medium bg-neutral-100 px-2 py-1 rounded">89₪</span>
</div>
<button className="w-full mt-4 py-2.5 bg-brat-green text-dark font-medium text-sm rounded hover:bg-opacity-80 transition-opacity">
                        Add to Evidence Bag
                    </button>
</div>

<div className="group bg-white border border-neutral-200 p-4 rounded-lg hover:shadow-xl hover:shadow-brat-green/20 hover:border-brat-green transition-all duration-300">
<div className="aspect-square bg-[#f0f0f0] rounded-md mb-4 relative overflow-hidden flex items-center justify-center">
<div className="text-center p-8 opacity-80 group-hover:scale-105 transition-transform duration-500">
<div className="w-48 h-56 mx-auto bg-[#e5e5d0] border-2 border-dashed border-neutral-300 rounded flex items-center justify-center relative">
<div className="text-center">
<span className="text-[#5b5bff] font-bold text-sm leading-tight block mb-2">PUREBRED<br/>ZIODOG</span>
<i className="w-8 h-8 mx-auto text-[#5b5bff]" data-lucide="dog"></i>
</div>
<div className="absolute top-0 w-8 h-16 bg-[#d5d5c0] rounded-full -translate-y-10 border-2 border-[#d5d5c0]"></div>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-lg leading-tight group-hover:text-brat-pink transition-colors">The Purebred Blue</h3>
<p className="text-sm text-neutral-500 mt-1">Canvas / 100% Cotton</p>
</div>
<span className="font-mono text-sm font-medium bg-neutral-100 px-2 py-1 rounded">79₪</span>
</div>
<button className="w-full mt-4 py-2.5 bg-neutral-100 text-dark font-medium text-sm rounded hover:bg-brat-green hover:text-dark transition-colors">
                        Add to Evidence Bag
                    </button>
</div>

<div className="group bg-white border border-neutral-200 p-4 rounded-lg hover:shadow-xl hover:shadow-brat-green/20 hover:border-brat-green transition-all duration-300">
<div className="aspect-square bg-[#f0f0f0] rounded-md mb-4 relative overflow-hidden flex items-center justify-center">
<div className="absolute top-3 right-3 bg-dark text-white text-[10px] font-bold uppercase px-2 py-1 rounded-sm">Viral</div>
<div className="text-center p-8 opacity-80 group-hover:scale-105 transition-transform duration-500">
<div className="w-48 h-56 mx-auto bg-[#e5e5d0] border-2 border-dashed border-neutral-300 rounded flex items-center justify-center relative shadow-sm">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/canvas-orange.png')] opacity-30"></div>
<span className="text-brat-pink font-bold text-sm text-center leading-tight relative z-10 font-mono tracking-tighter">
                                    SLUTTY<br/>LITTLE<br/>ZIONIST<br/>♡♡
                                </span>
<div className="absolute top-0 w-8 h-16 bg-[#d5d5c0] rounded-full -translate-y-10 border-2 border-[#d5d5c0]"></div>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-lg leading-tight group-hover:text-brat-pink transition-colors">Slutty Little Zionist Tote Bag</h3>
<p className="text-sm text-neutral-500 mt-1">Canvas / 100% Cotton</p>
</div>
<span className="font-mono text-sm font-medium bg-neutral-100 px-2 py-1 rounded">79₪</span>
</div>
<button className="w-full mt-4 py-2.5 bg-neutral-100 text-dark font-medium text-sm rounded hover:bg-brat-green hover:text-dark transition-colors">
                        Add to Evidence Bag
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark text-off-white relative overflow-hidden" id="lore">
<div className="absolute top-0 right-0 p-10 opacity-10">
<i className="w-64 h-64" data-lucide="file-warning"></i>
</div>
<div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
<div className="flex items-center gap-3 mb-8 text-brat-green font-mono text-sm uppercase tracking-widest">
<span className="w-2 h-2 bg-brat-green rounded-full animate-pulse"></span>
                System Message: Classified
            </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
                The internet doesn’t need another brand. It needs a resistance movement.
            </h2>
<div className="space-y-6 text-neutral-400 text-lg leading-relaxed font-light">
<p>
<strong className="text-white font-medium">Origin File:</strong> We turned projection into product.
                    Every shirt, every tote, every sticker is a piece of evidence seized from the comments section.
                </p>
<p>
                    We are the lore archives, the classified files, and the propaganda division you actually want to join.
                    By enlisting, you consent to receive dispatches and occasional early-drop alerts from HQ.
                </p>
<p className="italic text-brat-pink">
                    You may unsubscribe, but desertion is frowned upon.
                </p>
</div>

<div className="mt-12 bg-white/5 p-8 rounded-lg border border-white/10 backdrop-blur-sm">
<h3 className="text-xl font-medium mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-brat-green" data-lucide="radio"></i>
                    Enlistment Transmission
                </h3>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-dark border border-white/20 rounded px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-brat-green transition-colors" placeholder="agent@ziobratclub.com" type="email"/>
<button className="px-6 py-3 bg-brat-green text-dark font-semibold rounded hover:bg-white transition-colors" type="button">
                        TRANSMIT
                    </button>
</form>
<p className="text-xs text-neutral-600 mt-3 font-mono">
                    By clicking transmit, you agree to our Terms of Service.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-brat-pink text-white">
<div className="max-w-4xl mx-auto px-4 sm:px-6">
<div className="text-center mb-12">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-black">
                    WHICH ZIO-BRAT ARCHETYPE ARE YOU?
                </h2>
<p className="text-xl text-black/80 font-medium">7 Questions. One ruthless classification.</p>
</div>

<div className="bg-off-white text-dark rounded-xl shadow-2xl overflow-hidden max-w-2xl mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500">
<div className="bg-black text-white px-6 py-3 flex justify-between items-center font-mono text-xs uppercase">
<span>Question 01 / 07</span>
<span>Evaluation In Progress</span>
</div>
<div className="p-8">
<h3 className="text-2xl font-semibold mb-6">Pick your natural habitat.</h3>
<div className="space-y-3">
<label className="flex items-center gap-4 p-4 rounded-lg border border-neutral-200 cursor-pointer hover:bg-brat-green/10 hover:border-brat-green transition-colors group">
<input className="w-5 h-5 accent-brat-pink" name="q1" type="radio"/>
<span className="font-medium group-hover:text-black">Frishman Beach, post-hangover</span>
</label>
<label className="flex items-center gap-4 p-4 rounded-lg border border-neutral-200 cursor-pointer hover:bg-brat-green/10 hover:border-brat-green transition-colors group">
<input className="w-5 h-5 accent-brat-pink" name="q1" type="radio"/>
<span className="font-medium group-hover:text-black">The comments section you started</span>
</label>
<label className="flex items-center gap-4 p-4 rounded-lg border border-neutral-200 cursor-pointer hover:bg-brat-green/10 hover:border-brat-green transition-colors group">
<input className="w-5 h-5 accent-brat-pink" name="q1" type="radio"/>
<span className="font-medium group-hover:text-black">Boardroom, but everyone works for you</span>
</label>
<label className="flex items-center gap-4 p-4 rounded-lg border border-neutral-200 cursor-pointer hover:bg-brat-green/10 hover:border-brat-green transition-colors group">
<input className="w-5 h-5 accent-brat-pink" name="q1" type="radio"/>
<span className="font-medium group-hover:text-black">The homeland. Always.</span>
</label>
</div>
<div className="mt-8 flex justify-end">
<button className="flex items-center gap-2 font-mono text-sm font-bold uppercase hover:text-brat-pink">
                            Next Question <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-2">EXHIBIT A: THE EVIDENCE</h2>
<p className="text-neutral-500 max-w-md">
                    ZBC isn't a brand — it's membership. When you post, you don't just wear the merch — <span className="font-bold text-dark">you testify.</span>
</p>
</div>
<div className="flex gap-2">
<button className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-100"><i className="w-5 h-5" data-lucide="chevron-left"></i></button>
<button className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-100"><i className="w-5 h-5" data-lucide="chevron-right"></i></button>
</div>
</div>

<div className="flex gap-6 px-6 overflow-x-auto no-scrollbar pb-8">

<div className="min-w-[300px] h-[400px] bg-neutral-100 rounded-lg relative group overflow-hidden">
<div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-neutral-500">
<i className="w-12 h-12 opacity-50" data-lucide="image"></i>
</div>

<div className="absolute bottom-4 left-4 right-4 bg-white p-3 rounded shadow-lg transform rotate-2 group-hover:rotate-0 transition-transform duration-300">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-brat-pink"></div>
<span className="text-xs font-mono">@agent_001</span>
</div>
</div>
</div>

<div className="min-w-[300px] h-[400px] bg-neutral-100 rounded-lg relative group overflow-hidden">
<div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-neutral-500">
<i className="w-12 h-12 opacity-50" data-lucide="image"></i>
</div>
<div className="absolute bottom-4 left-4 right-4 bg-white p-3 rounded shadow-lg transform -rotate-1 group-hover:rotate-0 transition-transform duration-300">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-brat-green"></div>
<span className="text-xs font-mono">@telaviv_brat</span>
</div>
</div>
</div>

<div className="min-w-[300px] h-[400px] bg-neutral-100 rounded-lg relative group overflow-hidden">
<div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-neutral-500">
<i className="w-12 h-12 opacity-50" data-lucide="image"></i>
</div>
<div className="absolute bottom-4 left-4 right-4 bg-white p-3 rounded shadow-lg transform rotate-1 group-hover:rotate-0 transition-transform duration-300">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-purple-500"></div>
<span className="text-xs font-mono">@campus_cynic</span>
</div>
</div>
</div>

<div className="min-w-[300px] h-[400px] bg-neutral-100 rounded-lg relative group overflow-hidden">
<div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-neutral-500">
<i className="w-12 h-12 opacity-50" data-lucide="image"></i>
</div>
<div className="absolute bottom-4 left-4 right-4 bg-white p-3 rounded shadow-lg transform -rotate-2 group-hover:rotate-0 transition-transform duration-300">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-blue-500"></div>
<span className="text-xs font-mono">@proud_zionist</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-dark text-white pt-20 pb-10 border-t border-neutral-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-4">
<h3 className="text-2xl font-bold tracking-tight text-brat-green">ZioBratClub</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                        Propaganda Division © 2025<br/>
                        Unauthorized distribution encouraged.<br/>
                        Operational Base: Tel Aviv District.
                    </p>
</div>

<div>
<h4 className="font-mono text-xs uppercase text-neutral-500 tracking-wider mb-6">Operations</h4>
<ul className="space-y-3 text-sm text-neutral-300">
<li><a className="hover:text-brat-pink transition-colors" href="#">HQ Contact / Interrogations</a></li>
<li><a className="hover:text-brat-pink transition-colors" href="#">Returns &amp; Exchanges</a></li>
<li><a className="hover:text-brat-pink transition-colors" href="#">Shipping Information</a></li>
<li><a className="hover:text-brat-pink transition-colors" href="#">Track Mission</a></li>
</ul>
</div>

<div>
<h4 className="font-mono text-xs uppercase text-neutral-500 tracking-wider mb-6">Legal Archives</h4>
<ul className="space-y-3 text-sm text-neutral-300">
<li><a className="hover:text-brat-pink transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brat-pink transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-brat-pink transition-colors" href="#">Cookie Surveillance</a></li>
</ul>
</div>

<div>
<h4 className="font-mono text-xs uppercase text-neutral-500 tracking-wider mb-6">Surveillance Feed</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded bg-white/10 flex items-center justify-center hover:bg-brat-pink hover:text-white transition-all" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded bg-white/10 flex items-center justify-center hover:bg-brat-pink hover:text-white transition-all" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 rounded bg-white/10 flex items-center justify-center hover:bg-brat-pink hover:text-white transition-all" href="#">
<i className="w-5 h-5" data-lucide="mail"></i>
</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-mono">
<p>Designed with <span className="text-brat-pink">♥</span> for the Resistance.</p>
<p>This site uses standard cookies for performance monitoring.</p>
</div>
</div>
</footer>


    </>
  );
}
