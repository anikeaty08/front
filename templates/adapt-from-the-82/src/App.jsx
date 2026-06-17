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
      

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center mix-blend-multiply pointer-events-none">
<div className="pointer-events-auto">
<span className="font-display text-2xl tracking-tighter italic">Sanchez</span>
</div>
<div className="pointer-events-auto group flex items-center gap-3">
<div className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#141414]/10 bg-[#FBF7EF]/50 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse"></span>
<span className="text-[10px] uppercase tracking-widest font-medium">Confidential</span>
</div>
<a className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-[#DC2626] transition-colors duration-300" href="#">
<span>March 2025</span>
</a>
</div>
</nav>

<header className="relative w-full min-h-screen flex flex-col justify-end bg-[#FACC15] px-6 pb-12 pt-32 md:px-12 md:pb-20 overflow-hidden">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url(\'https://www.transparenttextures.com/patterns/noise.png\')'}}></div>
<div className="max-w-screen-2xl mx-auto w-full relative z-10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
<div className="md:col-span-9">
<span className="block font-body text-xs uppercase tracking-widest mb-4 opacity-60">Month 1 Activation</span>
<h1 className="font-display text-7xl md:text-9xl tracking-tight leading-[0.9] font-light italic">
                        The First <br/>
<span className="not-italic text-[#141414]">Shift.</span>
</h1>
</div>
<div className="md:col-span-3 flex flex-col justify-end gap-6">
<p className="font-body font-light text-sm md:text-base leading-relaxed opacity-90">
                        Sanchez is not just a venue. It is Bangalore’s most intentional high-energy social bar—where tequila drives the tempo and the night shifts on cue.
                    </p>
<div className="w-full h-[1px] bg-[#141414] opacity-20"></div>
<div className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-80">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>Bangalore, India</span>
</div>
</div>
</div>
</div>
</header>

<section className="w-full py-24 md:py-40 px-6 md:px-12 bg-[#FBF7EF]">
<div className="max-w-screen-md mx-auto">
<span className="block font-body text-xs uppercase tracking-widest text-[#DC2626] mb-8">The White Space</span>
<h2 className="font-display text-4xl md:text-5xl leading-tight font-normal mb-12 tracking-tight">
                Not theme-led, but <span className="italic text-[#DC2626]">ritual-led.</span>
</h2>
<div className="flex flex-col md:flex-row gap-12">
<div className="w-full md:w-1/12 border-t border-[#141414] opacity-20 pt-2"></div>
<div className="w-full md:w-11/12 space-y-8">
<p className="font-body text-lg md:text-xl font-light leading-relaxed text-[#141414] opacity-80">
                        The Bangalore market is saturated with volume-driven pubs and theme-heavy haciendas. The opportunity lies in the "High-Energy Social" space: craft-forward but tempo-driven. Sanchez exists to service the urban professional who seeks identity-led venues, not just capacity.
                    </p>
<div className="grid grid-cols-2 gap-8 pt-4">
<div>
<iconify-icon className="mb-3 opacity-60" icon="solar:martini-linear" width="24"></iconify-icon>
<h4 className="font-display text-xl mb-1">Cocktail Forward</h4>
<p className="text-xs opacity-50 uppercase tracking-wide">Agave Awareness</p>
</div>
<div>
<iconify-icon className="mb-3 opacity-60" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
<h4 className="font-display text-xl mb-1">Social Velocity</h4>
<p className="text-xs opacity-50 uppercase tracking-wide">Thursday Accelerator</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-12 md:py-24 px-6 md:px-12 bg-[#FBF7EF]">
<div className="max-w-screen-2xl mx-auto border-t border-b border-[#141414] border-opacity-10">
<div className="grid grid-cols-1 md:grid-cols-2">

<div className="py-16 md:py-32 md:pr-16 border-b md:border-b-0 md:border-r border-[#141414] border-opacity-10 flex flex-col justify-between min-h-[50vh]">
<div className="mb-8">
<iconify-icon className="opacity-60 mb-6 text-[#DC2626]" icon="solar:crown-star-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="font-display text-5xl md:text-6xl tracking-tight">Tequila<br/><span className="italic">Authority</span></h3>
</div>
<p className="font-body text-sm font-light opacity-60 max-w-xs">
                        A curated library of agave. Not for shots, but for savouring. Establishing credibility through rarity and ritual.
                    </p>
</div>

<div className="py-16 md:py-32 md:pl-16 flex flex-col justify-between min-h-[50vh]">
<div className="mb-8">
<iconify-icon className="opacity-60 mb-6 text-[#DC2626]" icon="solar:soundwave-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="font-display text-5xl md:text-6xl tracking-tight">Designed<br/><span className="italic">Energy</span></h3>
</div>
<p className="font-body text-sm font-light opacity-60 max-w-xs">
                        The "8:30 Shift". A specific moment each night where the lights dim, the tempo rises, and the room transforms.
                    </p>
</div>
</div>
</div>
</section>

<section className="w-full py-24 px-6 md:px-12 bg-[#FBF7EF]">
<div className="max-w-screen-2xl mx-auto">
<div className="flex justify-between items-end mb-16">
<h2 className="font-display text-3xl md:text-4xl tracking-tight">Month 1 Architecture</h2>
<span className="font-body text-xs uppercase tracking-widest opacity-40">Phased Activation</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">

<article className="group cursor-default">
<div className="aspect-[4/5] w-full overflow-hidden bg-[#141414] mb-6 relative">
<img alt="Ignite" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out saturate-0 group-hover:saturate-100" src="https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 text-white/20 font-display text-6xl italic">01</div>
</div>
<div className="flex flex-col gap-2">
<h3 className="font-display text-2xl tracking-tight">Week 1: Ignite</h3>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]"></span>
<p className="font-body text-xs opacity-50 tracking-wide uppercase">Launch Weekend</p>
</div>
<p className="text-sm font-light opacity-70 mt-2">Targeting 800+ guests over 3 nights. Establishing the "Shift" ritual.</p>
</div>
</article>

<article className="group cursor-default">
<div className="aspect-[4/5] w-full overflow-hidden bg-[#141414] mb-6 relative">
<img alt="Ritualise" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out saturate-0 group-hover:saturate-100" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 text-white/20 font-display text-6xl italic">02</div>
</div>
<div className="flex flex-col gap-2">
<h3 className="font-display text-2xl tracking-tight">Week 2-3: Ritualise</h3>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]"></span>
<p className="font-body text-xs opacity-50 tracking-wide uppercase">Retention Loop</p>
</div>
<p className="text-sm font-light opacity-70 mt-2">Implementing the Thursday "8:30 Shift". Craft-led carafes for groups.</p>
</div>
</article>

<article className="group cursor-default">
<div className="aspect-[4/5] w-full overflow-hidden bg-[#141414] mb-6 relative">
<img alt="Credibility" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out saturate-0 group-hover:saturate-100" src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 text-white/20 font-display text-6xl italic">04</div>
</div>
<div className="flex flex-col gap-2">
<h3 className="font-display text-2xl tracking-tight">Week 4: Credibility</h3>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#141414]"></span>
<p className="font-body text-xs opacity-50 tracking-wide uppercase">Marquee Event</p>
</div>
<p className="text-sm font-light opacity-70 mt-2">The Social Face-Off. Industry collaboration to seal authority.</p>
</div>
</article>
</div>
</div>
</section>

<section className="w-full py-24 px-6 md:px-12 bg-[#FBF7EF]">
<div className="max-w-screen-2xl mx-auto">
<div className="w-full h-[60vh] bg-[#F2EDE4] relative overflow-hidden flex items-center justify-center group border border-[#141414]/5">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#141414 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

<svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" preserveaspectratio="none" viewbox="0 0 1000 600">

<line stroke="#141414" strokeWidth="1" x1="0" x2="1000" y1="300" y2="300"></line>

<path d="M0,300 Q200,300 300,300 T400,300 T500,200 T600,100 T800,50 T1000,50" fill="none" stroke="#DC2626" strokeWidth="2"></path>

<line stroke="#141414" strokeWidth="1" x1="300" x2="300" y1="280" y2="320"></line> 
<line stroke="#141414" strokeWidth="2" x1="500" x2="500" y1="250" y2="350"></line> 
<text fill="#141414" fontFamily="Manrope" fontSize="12" text-anchor="middle" x="300" y="340">ARRIVAL 7:30</text>
<text fill="#DC2626" fontFamily="Manrope" fontSize="14" font-weight="bold" text-anchor="middle" x="500" y="380">THE SHIFT 8:30</text>
</svg>
<div className="relative z-10 text-center">
<div className="inline-flex items-center gap-2 mb-8 bg-white px-4 py-1 rounded-full shadow-sm">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon>
<span className="text-xs font-bold tracking-widest uppercase">Recurring IP</span>
</div>
<h3 className="font-display text-4xl md:text-6xl tracking-tight mb-8">Every Thursday Night</h3>
<button className="flex items-center gap-3 px-8 py-4 border border-[#141414] bg-[#141414] text-[#FBF7EF] hover:bg-[#DC2626] hover:border-[#DC2626] transition-all duration-300 rounded-full group">
<span className="text-sm uppercase tracking-widest font-body">Activate the Ritual</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform duration-500" icon="solar:play-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="w-full py-16 px-6 md:px-12 bg-[#FBF7EF] border-t border-[#141414]/10">
<div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="space-y-2">
<p className="font-display text-4xl md:text-5xl text-[#141414]">800+</p>
<p className="font-body text-xs uppercase tracking-widest opacity-40">Launch Guests</p>
</div>
<div className="space-y-2">
<p className="font-display text-4xl md:text-5xl text-[#141414]">30%</p>
<p className="font-body text-xs uppercase tracking-widest opacity-40">Repeat Rate</p>
</div>
<div className="space-y-2">
<p className="font-display text-4xl md:text-5xl text-[#141414]">₹15L</p>
<p className="font-body text-xs uppercase tracking-widest opacity-40">Est. Budget</p>
</div>
<div className="space-y-2">
<p className="font-display text-4xl md:text-5xl text-[#141414]">#1</p>
<p className="font-body text-xs uppercase tracking-widest opacity-40">Tequila Authority</p>
</div>
</div>
</section>

<section className="w-full py-32 md:py-48 px-6 md:px-12 bg-[#FACC15] flex items-center justify-center text-center">
<div className="max-w-screen-md">
<iconify-icon className="mb-12 opacity-80 text-[#141414]" icon="solar:bottle-linear" strokeWidth="1" width="48"></iconify-icon>
<p className="font-display text-4xl md:text-6xl tracking-tight italic leading-tight mb-12 text-[#141414]">
                "Some venues are built for volume. Sanchez is built for <span className="not-italic border-b-2 border-[#141414]">the moment</span>."
            </p>
<div className="flex justify-center">
<a className="font-body text-xs uppercase tracking-widest border-b border-[#141414] pb-1 hover:opacity-50 transition-opacity text-[#141414]" href="#">
                    View Full Deck
                </a>
</div>
</div>
</section>

<footer className="w-full py-8 px-6 md:px-12 bg-[#FACC15] flex flex-col md:flex-row justify-between items-center border-t border-[#141414] border-opacity-10 gap-4">
<span className="font-body text-xs opacity-40">© 2025 Sanchez Strategy. Confidential.</span>
<div className="flex gap-4 opacity-40">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
<iconify-icon icon="solar:link-linear" width="20"></iconify-icon>
</div>
</footer>

    </>
  );
}
