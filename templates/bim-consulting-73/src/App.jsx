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
      

<nav className="w-full px-6 py-5 flex items-center justify-between relative z-50">

<div className="hidden lg:flex items-center gap-8">
<div className="flex items-center gap-1 text-[#4a4a4a] hover:text-black cursor-pointer transition-colors text-sm font-medium">
                Services <i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
</div>
<div className="flex items-center gap-1 text-[#4a4a4a] hover:text-black cursor-pointer transition-colors text-sm font-medium">
                Projects <i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
</div>
<a className="text-[#4a4a4a] hover:text-black transition-colors text-sm font-medium" href="#">About</a>
<a className="text-[#4a4a4a] hover:text-black transition-colors text-sm font-medium" href="#">Contact</a>
</div>

<button className="lg:hidden text-gray-800">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>

<div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
<a className="text-black flex items-center gap-2" href="#">

<svg className="w-8 h-8" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
</a>
</div>

<div className="hidden lg:flex items-center gap-8">
<a className="text-[#4a4a4a] hover:text-black transition-colors text-sm font-medium" href="#">Portfolio</a>
<a className="text-[#4a4a4a] hover:text-black transition-colors text-sm font-medium" href="#">Client Login</a>
<a className="bg-[#ebe6de] hover:bg-[#e0dbd3] text-[#2b1c12] px-5 py-2.5 rounded-xl text-sm font-medium transition-colors" href="#">
                Get a Quote
            </a>
</div>

<a className="lg:hidden bg-[#ebe6de] text-[#2b1c12] px-4 py-2 rounded-lg text-xs font-medium" href="#">
            Quote
        </a>
</nav>

<main className="flex-grow flex flex-col items-center pt-16 pb-24 px-4 sm:px-6">

<a className="inline-flex items-center gap-2 bg-white border border-[#eaddcf] px-4 py-1.5 rounded-full shadow-sm hover:shadow-md transition-shadow mb-8" href="#">
<span className="text-xs font-medium text-orange-600">Design Quest Solutions</span>
<span className="text-xs font-medium text-gray-500">— Precision Revit Modeling</span>
<i className="w-3 h-3 text-gray-400" data-lucide="arrow-right"></i>
</a>

<h1 className="text-5xl sm:text-6xl lg:text-[5rem] leading-[1.1] text-center text-[#1a1a1a] tracking-tight mb-8 max-w-4xl mx-auto">
            Engineering Certainty for <br/> Complex Construction
        </h1>

<p className="text-center text-[#555] text-lg sm:text-xl font-normal leading-relaxed max-w-xl mx-auto mb-10">
            Partner with the experts in high-fidelity BIM for HVAC and piping. <br/> 
            We transform intricate designs into error-free, constructible models.
        </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 w-full">
<button className="bg-[#2b1c12] hover:bg-black text-[#fdfcfb] px-8 py-3.5 rounded-2xl text-base font-medium transition-transform active:scale-95 w-full sm:w-auto shadow-lg shadow-orange-900/10">
                View Our Projects
            </button>
<button className="bg-[#ebe6de] hover:bg-[#dfd8cd] text-[#2b1c12] px-8 py-3.5 rounded-2xl text-base font-medium transition-colors w-full sm:w-auto">
                Our Services
            </button>
</div>

<div className="w-full max-w-[1400px] mx-auto overflow-hidden">
<div className="flex gap-4 overflow-x-auto hide-scrollbar pb-8 px-4 snap-x snap-mandatory">

<div className="snap-center shrink-0 w-[280px] sm:w-[320px] aspect-[4/5] relative rounded-2xl overflow-hidden group cursor-pointer shadow-xl shadow-orange-900/10">
<div className="absolute inset-0 bg-gradient-to-b from-[#a72e2e] to-[#7f1d1d] group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-400/40 via-transparent to-transparent opacity-70"></div>
<img alt="HVAC Mechanical" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] h-[100%] object-cover brightness-75 mix-blend-overlay" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-0 left-0 w-full p-6 text-center z-10">
<h3 className="text-white font-medium text-lg leading-tight">HVAC Design</h3>
<p className="text-white/70 text-sm font-normal mt-0.5">Mechanical Systems</p>
</div>
</div>

<div className="snap-center shrink-0 w-[280px] sm:w-[320px] aspect-[4/5] relative rounded-2xl overflow-hidden group cursor-pointer shadow-xl shadow-orange-900/10">
<div className="absolute inset-0 bg-gradient-to-b from-[#9a2828] to-[#6b1515] group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-red-400/30 via-transparent to-transparent opacity-60"></div>
<img alt="Process Piping" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] h-[100%] object-cover brightness-75 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-0 left-0 w-full p-6 text-center z-10">
<h3 className="text-white font-medium text-lg leading-tight">Process Piping</h3>
<p className="text-white/70 text-sm font-normal mt-0.5">Industrial Solutions</p>
</div>
</div>

<div className="snap-center shrink-0 w-[280px] sm:w-[320px] aspect-[4/5] relative rounded-2xl overflow-hidden group cursor-pointer shadow-xl shadow-orange-900/10">
<div className="absolute inset-0 bg-gradient-to-b from-[#c2410c] to-[#9a3412] group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-300/20 via-transparent to-transparent"></div>
<img alt="BIM Modeling" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[100%] object-cover brightness-75 mix-blend-overlay" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-0 left-0 w-full p-6 text-center z-10">
<h3 className="text-white font-medium text-lg leading-tight">Revit Modeling</h3>
<p className="text-white/70 text-sm font-normal mt-0.5">LOD 400 Accuracy</p>
</div>

<div className="absolute bottom-6 left-6 right-6 bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shrink-0">
<i className="w-3.5 h-3.5 stroke-2 ml-0" data-lucide="box"></i>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1 h-4">

<div className="w-0.5 h-2 bg-white/80 rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-0.5 h-3 bg-white/80 rounded-full animate-[pulse_1.2s_ease-in-out_infinite]"></div>
<div className="w-0.5 h-2 bg-white/80 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]"></div>
<div className="w-0.5 h-4 bg-white/80 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"></div>
<div className="w-0.5 h-2 bg-white/80 rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
<p className="text-xs text-white/90 font-medium ml-2 truncate">Rendering Model...</p>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[280px] sm:w-[320px] aspect-[4/5] relative rounded-2xl overflow-hidden group cursor-pointer shadow-xl shadow-orange-900/10">
<div className="absolute inset-0 bg-gradient-to-b from-[#7f1d1d] to-[#450a0a] group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent"></div>
<img alt="Clash Detection" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[115%] h-[100%] object-cover brightness-90 mix-blend-overlay" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-0 left-0 w-full p-6 text-center z-10">
<h3 className="text-white font-medium text-lg leading-tight">Clash Detection</h3>
<p className="text-white/70 text-sm font-normal mt-0.5">Pre-Construction</p>
</div>
</div>

<div className="snap-center shrink-0 w-[280px] sm:w-[320px] aspect-[4/5] relative rounded-2xl overflow-hidden group cursor-pointer shadow-xl shadow-orange-900/10">
<div className="absolute inset-0 bg-gradient-to-b from-[#b91c1c] to-[#7f1d1d] group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-orange-400/30 via-transparent to-transparent"></div>
<img alt="Shop Drawings" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] h-[100%] object-cover brightness-75 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-0 left-0 w-full p-6 text-center z-10">
<h3 className="text-white font-medium text-lg leading-tight">Shop Drawings</h3>
<p className="text-white/70 text-sm font-normal mt-0.5">Fabrication Ready</p>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
