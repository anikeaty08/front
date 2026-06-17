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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      
<section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">

<div className="mb-10 lg:mb-14 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-3">Hot Cruise Deals</h2>
<p className="text-base text-slate-500">Discover exclusive limited-time offers and upcoming luxury voyages curated for your next unforgettable escape.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

<div className="lg:col-span-7 relative group flex flex-col h-[500px] sm:h-[600px] lg:h-auto rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1 bg-slate-900">

<img alt="Luxury Cruise Ship" className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-slate-900/50"></div>

<div className="relative flex flex-col h-full p-6 sm:p-10 z-10">

<div className="flex items-start justify-between w-full">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium tracking-wide">
<iconify-icon className="text-orange-400 text-sm" icon="solar:fire-linear"></iconify-icon>
                            40% OFF
                        </span>
<span className="text-white/80 text-[10px] sm:text-xs font-medium tracking-widest uppercase bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">Current Deal</span>
</div>

<div className="mt-auto">

<div className="flex items-center gap-3 mb-5">
<div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-white">
<iconify-icon className="text-blue-400 text-sm" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-xs sm:text-sm font-medium tabular-nums tracking-wide">
                                    12<span className="text-[10px] text-white/60 ml-0.5 mr-1">h</span>
                                    45<span className="text-[10px] text-white/60 ml-0.5 mr-1">m</span>
                                    30<span className="text-[10px] text-white/60 ml-0.5">s</span>
</span>
</div>
<span className="text-xs text-white/70 font-medium">Offer ends soon</span>
</div>

<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-3 group-hover:text-blue-50 transition-colors">Caribbean Luxury Escape</h3>
<p className="text-sm sm:text-base text-white/80 line-clamp-2 max-w-lg mb-8 leading-relaxed font-light">
                            Experience the ultimate tropical getaway. Sail through crystal-clear waters, explore pristine beaches, and indulge in world-class onboard amenities.
                        </p>

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-white/10 pt-6">
<div>
<p className="text-xs text-white/60 mb-1 font-medium uppercase tracking-wider">Starting from</p>
<div className="flex items-baseline gap-1">
<span className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">$799</span>
<span className="text-sm text-white/60">/person</span>
</div>
</div>
<button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[14px] bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.25)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] active:scale-95 group/btn">
                                Book Now
                                <iconify-icon className="text-lg group-hover/btn:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col lg:h-full">
<h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4 hidden lg:block">Upcoming Deals</h3>

<div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-5 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 sm:grid-rows-2 lg:flex-grow">

<div className="group relative flex-shrink-0 w-[80vw] sm:w-auto bg-white/60 backdrop-blur-xl border border-white/60 rounded-[20px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col snap-center">
<div className="relative h-36 overflow-hidden">
<img alt="Alaska" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3">
<span className="inline-flex px-2 py-1 rounded-md bg-white/90 backdrop-blur text-slate-800 text-[10px] font-medium uppercase tracking-wider shadow-sm">Coming Soon</span>
</div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex items-center gap-1.5 text-slate-400 mb-1.5">
<iconify-icon className="text-sm" icon="solar:map-point-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider font-medium">Alaska</span>
</div>
<h4 className="text-lg font-semibold text-slate-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors">Glacier Adventure</h4>
<p className="text-xs text-slate-500 line-clamp-2 mb-5 flex-grow leading-relaxed">Witness majestic icebergs and untamed wildlife on this epic northern journey.</p>
<button className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 bg-white/50 text-slate-600 font-medium text-xs hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 transition-all active:scale-95">
<iconify-icon className="text-sm" icon="solar:bell-linear"></iconify-icon>
                                Notify Me
                            </button>
</div>
</div>

<div className="group relative flex-shrink-0 w-[80vw] sm:w-auto bg-white/60 backdrop-blur-xl border border-white/60 rounded-[20px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col snap-center">
<div className="relative h-36 overflow-hidden">
<img alt="Mediterranean" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 right-3">
<span className="inline-flex px-2 py-1 rounded-md bg-white/90 backdrop-blur text-slate-800 text-[10px] font-medium uppercase tracking-wider shadow-sm">Coming Soon</span>
</div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex items-center gap-1.5 text-slate-400 mb-1.5">
<iconify-icon className="text-sm" icon="solar:map-point-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider font-medium">Europe</span>
</div>
<h4 className="text-lg font-semibold text-slate-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors">Mediterranean Bliss</h4>
<p className="text-xs text-slate-500 line-clamp-2 mb-5 flex-grow leading-relaxed">Sail through historic coastlines and discover the rich flavors of the Riviera.</p>
<button className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 bg-white/50 text-slate-600 font-medium text-xs hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 transition-all active:scale-95">
<iconify-icon className="text-sm" icon="solar:bell-linear"></iconify-icon>
                                Notify Me
                            </button>
</div>
</div>

<div className="group relative flex-shrink-0 w-[80vw] sm:w-auto sm:col-span-2 bg-white/60 backdrop-blur-xl border border-white/60 rounded-[20px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col sm:flex-row snap-center">
<div className="relative h-36 sm:h-auto sm:w-2/5 overflow-hidden">
<img alt="Bahamas" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 right-3 sm:left-3 sm:right-auto">
<span className="inline-flex px-2 py-1 rounded-md bg-white/90 backdrop-blur text-slate-800 text-[10px] font-medium uppercase tracking-wider shadow-sm">Coming Soon</span>
</div>
</div>
<div className="p-5 sm:p-6 flex flex-col flex-grow justify-center">
<div className="flex items-center gap-1.5 text-slate-400 mb-1.5">
<iconify-icon className="text-sm" icon="solar:map-point-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider font-medium">Bahamas</span>
</div>
<h4 className="text-lg sm:text-xl font-semibold text-slate-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors">Island Hopper Getaway</h4>
<p className="text-xs sm:text-sm text-slate-500 line-clamp-2 mb-5 leading-relaxed">Relax on pink sand beaches and swim in vibrant turquoise waters. A quick and perfect escape to paradise.</p>
<div className="mt-auto sm:mt-0">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-slate-200 bg-white/50 text-slate-600 font-medium text-xs hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 transition-all active:scale-95">
<iconify-icon className="text-sm" icon="solar:bell-linear"></iconify-icon>
                                    Notify Me
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
