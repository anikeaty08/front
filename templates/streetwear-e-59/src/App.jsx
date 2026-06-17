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
display: ['Oswald', 'sans-serif'],
},
colors: {
'brat-green': '#ccff00',
'brat-pink': '#ff00cc',
'off-white': '#fdfbf7',
'deep-black': '#0a0a0a',
'purple-accent': '#7c3aed',
},
animation: {
marquee: 'marquee 25s linear infinite',
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
      

<nav className="fixed top-0 w-full z-50 bg-off-white/90 backdrop-blur-md border-b border-stone-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2">
<span className="font-display font-semibold text-2xl tracking-tight text-deep-black">ZioBratClub</span>
</div>

<div className="hidden md:flex items-center gap-8">
<div className="group relative cursor-pointer">
<a className="text-lg font-medium hover:text-brat-pink transition-colors" href="#">Home</a>
<span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Welcome to the resistance</span>
</div>
<div className="group relative cursor-pointer">
<a className="text-lg font-medium hover:text-brat-pink transition-colors" href="#shop">Shop</a>
<span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">ZBC Official Merch</span>
</div>
<div className="group relative cursor-pointer">
<a className="text-lg font-medium hover:text-brat-pink transition-colors" href="#lore">Lore</a>
<span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Archives &amp; Classified Files</span>
</div>
<div className="group relative cursor-pointer">
<a className="text-lg font-medium hover:text-brat-pink transition-colors" href="#contact">HQ</a>
<span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Contact / Collabs / Confessions</span>
</div>
</div>

<div className="flex items-center gap-4">
<button className="relative p-2 hover:bg-stone-100 rounded-full transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="shopping-bag"></i>
<span className="absolute top-1 right-1 w-2.5 h-2.5 bg-brat-pink rounded-full border border-white"></span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden grid-bg min-h-screen flex flex-col justify-center">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden select-none font-display font-bold text-9xl leading-none text-black break-words whitespace-normal text-center" style={{zIndex: '0'}}>
            ZIO BRAT ZIO BRAT ZIO BRAT ZIO BRAT ZIO BRAT ZIO BRAT ZIO BRAT
            ZIO BRAT ZIO BRAT ZIO BRAT ZIO BRAT ZIO BRAT ZIO BRAT ZIO BRAT
            ZIO BRAT ZIO BRAT ZIO BRAT ZIO BRAT ZIO BRAT ZIO BRAT ZIO BRAT
        </div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

<div className="mb-8 transform -rotate-2">
<h1 className="text-[5rem] md:text-[8rem] leading-none font-display font-bold text-brat-pink graffiti-text tracking-tighter drop-shadow-lg">
                    ZioBratClub
                </h1>
</div>

<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-deep-black mb-6 max-w-4xl mx-auto">
                YOU CAN'T CANCEL <br/> <span className="bg-brat-green px-2 italic">WHAT WAS PROMISED</span>
</h2>
<p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto">
                Classified brand. Unapologetically Zionist. Satire as survival.
            </p>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center">
<a className="bg-deep-black text-brat-green px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform border-2 border-transparent hover:border-brat-green flex items-center gap-2" href="#shop">
                    Explore the Collection <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="bg-transparent border-2 border-deep-black text-deep-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-stone-100 transition-colors" href="#lore">
                    Access Full Lore
                </a>
</div>

<div className="mt-12 inline-flex items-center gap-2 bg-white border border-stone-200 rounded-full pl-2 pr-6 py-2 shadow-sm">
<span className="bg-brat-pink text-white text-xs font-semibold px-2 py-1 rounded-full uppercase tracking-wider">New Drop</span>
<span className="text-lg font-medium text-slate-700">"According to the Comments Section" Now Live!</span>
</div>
</div>

<i className="absolute top-1/4 left-10 w-12 h-12 text-brat-green stroke-[1.5] rotate-12 opacity-80 animate-pulse" data-lucide="star"></i>
<i className="absolute bottom-1/4 right-10 w-16 h-16 text-brat-green stroke-[1.5] -rotate-12 opacity-80" data-lucide="zap"></i>
</section>

<div className="bg-purple-600 py-3 overflow-hidden border-y border-deep-black">
<div className="whitespace-nowrap animate-marquee flex gap-8 items-center">
<span className="text-brat-green font-display font-bold text-2xl uppercase tracking-widest">JOIN THE CLUB • JOIN THE CLUB • JOIN THE CLUB • JOIN THE CLUB • JOIN THE CLUB • JOIN THE CLUB • JOIN THE CLUB • JOIN THE CLUB •</span>
<span className="text-brat-green font-display font-bold text-2xl uppercase tracking-widest">JOIN THE CLUB • JOIN THE CLUB • JOIN THE CLUB • JOIN THE CLUB • JOIN THE CLUB • JOIN THE CLUB • JOIN THE CLUB • JOIN THE CLUB •</span>
</div>
</div>

<section className="py-24 bg-brat-green/20 relative" id="shop">

<div className="absolute inset-0 z-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(#fff 2px, transparent 2px), linear-gradient(90deg, #fff 2px, transparent 2px)', backgroundSize: '100px 100px', opacity: '0.3'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex justify-between items-end mb-12">
<div>
<h3 className="text-lg font-medium text-slate-500 uppercase tracking-widest mb-2">Evidence Seized from HQ</h3>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-deep-black flex items-center gap-3">
<i className="w-8 h-8" data-lucide="lock"></i> Top Picks
                    </h2>
</div>
<a className="hidden md:flex items-center gap-2 text-lg font-semibold hover:underline decoration-2 underline-offset-4" href="#">View all drops <i className="w-5 h-5" data-lucide="arrow-up-right"></i></a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white border-2 border-deep-black p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex flex-col items-center">
<div className="bg-stone-50 w-full aspect-square mb-6 rounded flex items-center justify-center relative overflow-hidden">
<span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 font-mono">ARTIFACT #01</span>

<div className="text-center opacity-50">
<i className="w-24 h-24 mx-auto mb-2 text-stone-400" data-lucide="shopping-bag"></i>
<span className="text-stone-400 font-display text-xl">ZIO BRAT CLUB</span>
</div>
</div>
<h3 className="text-xl font-semibold text-center mb-1">PureBreed Ziodog</h3>
<p className="text-slate-500 mb-2">Tote Bag</p>
<p className="text-lg font-medium mb-4">79₪</p>
<button className="bg-brat-green text-deep-black w-full py-3 rounded-full font-semibold border border-deep-black hover:bg-brat-pink hover:text-white transition-colors">
                        To shop the bag
                    </button>
</div>

<div className="bg-white border-2 border-deep-black p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex flex-col items-center relative">
<div className="absolute -top-6 -right-6 z-20">
<i className="w-16 h-16 fill-brat-green text-black stroke-2" data-lucide="zap"></i>
</div>
<div className="bg-stone-50 w-full aspect-square mb-6 rounded flex items-center justify-center relative">
<span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 font-mono">ARTIFACT #02</span>
<div className="text-center opacity-50">
<i className="w-24 h-24 mx-auto mb-2 text-stone-400" data-lucide="shopping-bag"></i>
<span className="text-stone-400 font-display text-xl">PUREBRED ZIODOG</span>
</div>
</div>
<h3 className="text-xl font-semibold text-center mb-1">PureBreed Ziodog</h3>
<p className="text-slate-500 mb-2">Tote Bag (Variant)</p>
<p className="text-lg font-medium mb-4">79₪</p>
<button className="bg-brat-green text-deep-black w-full py-3 rounded-full font-semibold border border-deep-black hover:bg-brat-pink hover:text-white transition-colors">
                        To shop the bag
                    </button>
</div>

<div className="bg-white border-2 border-deep-black p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex flex-col items-center">
<div className="bg-stone-50 w-full aspect-square mb-6 rounded flex items-center justify-center relative">
<span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 font-mono">ARTIFACT #03</span>
<div className="text-center opacity-50">
<i className="w-24 h-24 mx-auto mb-2 text-stone-400" data-lucide="shopping-bag"></i>
<span className="text-stone-400 font-display text-xl">SLUTTY LITTLE ZIONIST</span>
</div>
</div>
<h3 className="text-xl font-semibold text-center mb-1">Slutty Little Zionist</h3>
<p className="text-slate-500 mb-2">Tote Bag</p>
<p className="text-lg font-medium mb-4">79₪</p>
<button className="bg-brat-green text-deep-black w-full py-3 rounded-full font-semibold border border-deep-black hover:bg-brat-pink hover:text-white transition-colors">
                        To shop the bag
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 noise-bg text-white overflow-hidden" id="lore">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-6xl font-display font-semibold tracking-tight mb-4">Exhibit A: The Evidence</h2>
<p className="text-xl text-stone-300 max-w-2xl mx-auto mb-16 leading-relaxed">
                ZBC isn't a brand — it's membership. When you post, you don't just wear the merch — <strong className="text-white border-b-2 border-brat-green">you testify.</strong>
<br/>
                Tag us <a className="text-brat-green hover:underline" href="#">@ziobratclub</a> to be featured in The Evidence Room.
            </p>

<div className="flex flex-wrap justify-center gap-8 md:gap-16 relative">

<i className="absolute -top-12 left-10 md:left-32 w-16 h-16 text-white opacity-80 rotate-[-12deg] hidden md:block" data-lucide="camera"></i>
<i className="absolute -top-12 right-10 md:right-32 w-16 h-16 text-white opacity-80 rotate-[12deg] hidden md:block" data-lucide="megaphone"></i>

<div className="bg-white p-3 pb-12 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 max-w-xs">
<div className="bg-black w-full h-64 grayscale contrast-125 flex items-center justify-center overflow-hidden">

<div className="w-full h-full bg-stone-800 flex items-center justify-center">
<i className="w-12 h-12 text-stone-600" data-lucide="user"></i>
</div>
</div>
</div>

<div className="bg-white p-3 pb-12 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300 max-w-xs z-10">
<div className="bg-black w-full h-64 grayscale contrast-125 flex items-center justify-center overflow-hidden">
<div className="w-full h-full bg-stone-800 flex items-center justify-center">
<i className="w-12 h-12 text-stone-600" data-lucide="user"></i>
</div>
</div>
</div>

<div className="bg-white p-3 pb-12 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 max-w-xs">
<div className="bg-black w-full h-64 grayscale contrast-125 flex items-center justify-center overflow-hidden">
<div className="w-full h-full bg-stone-800 flex items-center justify-center">
<i className="w-12 h-12 text-stone-600" data-lucide="user"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="bg-brat-green py-3 overflow-hidden border-y border-deep-black">
<div className="whitespace-nowrap animate-marquee flex gap-8 items-center">
<span className="text-deep-black font-display font-bold text-lg uppercase tracking-widest">JOIN THE CLUB • JOIN THE CLUB • JOIN THE CLUB • JOIN THE CLUB • JOIN THE CLUB • JOIN THE CLUB • JOIN THE CLUB • JOIN THE CLUB •</span>
<span className="text-deep-black font-display font-bold text-lg uppercase tracking-widest">JOIN THE CLUB • JOIN THE CLUB • JOIN THE CLUB • JOIN THE CLUB • JOIN THE CLUB • JOIN THE CLUB • JOIN THE CLUB • JOIN THE CLUB •</span>
</div>
</div>

<section className="py-24 bg-white border-b border-stone-200">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-brat-pink font-mono font-semibold text-sm uppercase mb-2 block">Classification Protocol</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-deep-black mb-4">Which ZioBrat Archetype Are You?</h2>
<p className="text-xl text-slate-500">7 questions. One ruthless classification.</p>
</div>

<div className="space-y-12">

<div className="border border-stone-200 rounded-xl p-8 hover:border-brat-pink transition-colors group">
<h3 className="text-2xl font-semibold mb-6 flex items-start gap-3">
<span className="bg-black text-white text-sm py-1 px-2 rounded mt-1">Q1</span>
                        Pick your natural habitat.
                    </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<label className="flex items-center gap-3 p-4 border border-stone-100 rounded-lg cursor-pointer hover:bg-stone-50 transition-colors">
<input className="w-5 h-5 accent-brat-pink" name="q1" type="radio"/>
<span className="text-lg">Frishman Beach, post-hangover</span>
</label>
<label className="flex items-center gap-3 p-4 border border-stone-100 rounded-lg cursor-pointer hover:bg-stone-50 transition-colors">
<input className="w-5 h-5 accent-brat-pink" name="q1" type="radio"/>
<span className="text-lg">Checkpoint line</span>
</label>
<label className="flex items-center gap-3 p-4 border border-stone-100 rounded-lg cursor-pointer hover:bg-stone-50 transition-colors">
<input className="w-5 h-5 accent-brat-pink" name="q1" type="radio"/>
<span className="text-lg">The comments section you started</span>
</label>
<label className="flex items-center gap-3 p-4 border border-stone-100 rounded-lg cursor-pointer hover:bg-stone-50 transition-colors">
<input className="w-5 h-5 accent-brat-pink" name="q1" type="radio"/>
<span className="text-lg">The homeland. Always.</span>
</label>
</div>
</div>

<div className="text-center">
<button className="bg-deep-black text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-brat-pink transition-colors shadow-lg">
                        Reveal My Archetype
                     </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100 text-center border-b border-stone-200">
<div className="max-w-2xl mx-auto px-6">
<h2 className="text-3xl font-display font-bold uppercase tracking-tight mb-2">🩸 FINAL DECLARATION OF LOYALTY</h2>
<p className="text-lg text-slate-600 mb-8">
                The internet doesn’t need another brand. It needs a resistance movement with better merch.
                <br/>You know which side you’re on.
            </p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 px-6 py-4 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-brat-pink text-lg" placeholder="ENLISTMENT TRANSMISSION (Email)" type="email"/>
<button className="bg-brat-green text-deep-black font-bold px-8 py-4 rounded-lg border border-deep-black hover:bg-white transition-colors uppercase tracking-wide" type="button">
                    Enlist
                </button>
</form>
<p className="text-xs text-slate-400 mt-4">
                By enlisting, you consent to receive propaganda, dispatches, and occasional early-drop alerts. Desertion is frowned upon.
            </p>
</div>
</section>

<footer className="bg-off-white pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<h3 className="font-display font-bold text-2xl mb-6">ZioBratClub</h3>
<p className="text-lg text-slate-500 mb-6">
                    Propaganda Division © 2025.<br/>
                    Unauthorized distribution encouraged.
                </p>
<div className="flex gap-4">
<div className="w-4 h-4 bg-brat-pink"></div>
<div className="w-4 h-4 bg-brat-green"></div>
</div>
</div>

<div>
<h4 className="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-6">Operations</h4>
<ul className="space-y-4 text-lg">
<li><a className="hover:text-brat-pink transition-colors" href="#">Collaborations &amp; Confessions</a></li>
<li><a className="hover:text-brat-pink transition-colors" href="#">Returns &amp; Exchanges</a></li>
<li><a className="hover:text-brat-pink transition-colors" href="#">Shipping Information</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-6">Legal Archives</h4>
<ul className="space-y-4 text-lg">
<li><a className="hover:text-brat-pink transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brat-pink transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-6">Surveillance Feed</h4>
<ul className="space-y-4 text-lg">
<li>
<a className="flex items-center gap-2 hover:text-brat-pink transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i> @ziobratclub
                        </a>
</li>
<li className="flex items-start gap-2 text-slate-500 mt-4 text-base">
<i className="w-5 h-5 flex-shrink-0 mt-1" data-lucide="map-pin"></i> 
                        Operational base: <br/>Tel Aviv District, Israel.
                    </li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-slate-400">This site uses standard cookies for performance monitoring.</p>
<div className="flex gap-2">
<i className="w-4 h-4 text-blue-500" data-lucide="flag"></i>
</div>
</div>
</footer>



    </>
  );
}
