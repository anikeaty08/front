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
heading: ['Manrope', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
brand: {
blue: '#2563eb', // Matches the vibrant blue in reference
}
},
boxShadow: {
'soft': '0 20px 40px -15px rgba(0, 0, 0, 0.1)',
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
      

<header className="fixed top-0 w-full z-50 transition-all duration-300 pt-4">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2">
<a className="font-heading font-extrabold text-2xl tracking-tight text-slate-900" href="#">
                        Weagle
                    </a>
</div>

<nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="group inline-flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors" href="#process">
                        Process
                        <i className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="chevron-down"></i>
</a>
<a className="group inline-flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors" href="#verification">
                        Verification
                        <i className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="chevron-down"></i>
</a>
<a className="group inline-flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors" href="#pricing">
                        Pricing
                        <i className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="chevron-down"></i>
</a>
<a className="group inline-flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors" href="#reviews">
                        Contact Sales
                    </a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 bg-white/50 rounded-lg hover:bg-white/80 transition-all">
                        Eng
                        <i className="w-3.5 h-3.5" data-lucide="chevron-down"></i>
</button>
<a className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-all" href="#login">
                        Login
                    </a>
</div>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative w-full min-h-[95vh] bg-[#eff6ff] flex flex-col pt-32 sm:pt-40 overflow-hidden">

<div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

<div className="font-mono text-xs sm:text-sm text-slate-500 mb-6 tracking-wide">
                    Global Logistics Solutions
                </div>

<h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-heading font-extrabold tracking-tight text-slate-900 leading-[1.05] mb-8">
                    Premium Spices <br/>
                    and Exports <br/>
<span className="text-brand-blue">Simplified.</span>
</h1>

<div className="mt-2 mb-16 relative z-30">
<a className="inline-flex items-center justify-center rounded-xl bg-brand-blue px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:-translate-y-0.5 transition-all duration-200" href="#start">
                        Get Started
                    </a>
</div>
</div>


<div className="relative w-full flex-grow mt-auto z-10">

<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#eff6ff] to-transparent z-20"></div>

<img alt="Global Spice Logistics Landscape" className="w-full h-[60vh] sm:h-[70vh] object-cover object-bottom shadow-sm align-bottom select-none pointer-events-none translate-y-1" src="https://images.unsplash.com/photo-1597017684078-438902d1d02e?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-[20%] left-[10%] hidden md:block animate-bounce" style={{animationDuration: '4s'}}>
<div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg border border-white/50 text-xs font-semibold text-slate-700 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Live Shipment Tracking
                     </div>
</div>
<div className="absolute bottom-[40%] right-[15%] hidden md:block animate-bounce" style={{animationDuration: '5s'}}>
<div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg border border-white/50 text-xs font-semibold text-slate-700 flex items-center gap-2">
<i className="w-3 h-3 text-blue-600" data-lucide="check-circle-2"></i>
                       Quality Verified
                    </div>
</div>
</div>

<div className="absolute top-32 right-[10%] opacity-40 rotate-12 pointer-events-none">
<i className="w-8 h-8 text-blue-300" data-lucide="plane"></i>
</div>
</section>

<section className="relative bg-slate-900 pt-24 pb-24 overflow-hidden z-20">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-60 mb-20 border-b border-slate-800 pb-12">
<div className="flex items-center gap-2 text-white font-semibold text-lg">
<i className="text-blue-500" data-lucide="badge-check"></i> ISO 22000
                   </div>
<div className="flex items-center gap-2 text-white font-semibold text-lg">
<i className="text-blue-500" data-lucide="badge-check"></i> FDA Registered
                    </div>
<div className="flex items-center gap-2 text-white font-semibold text-lg">
<i className="text-blue-500" data-lucide="badge-check"></i> APEDA Member
                    </div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 order-2 lg:order-1">
<div>
<span className="inline-block py-1 px-3 rounded-md bg-blue-500/10 text-blue-400 text-xs font-mono tracking-wider uppercase mb-4 border border-blue-500/20">
                                #1 Logistics Partner
                            </span>
<h2 className="text-3xl sm:text-5xl font-heading font-semibold text-white tracking-tight leading-tight">
                                Complete Peace of Mind <br/> Logistics Solution
                            </h2>
</div>
<p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                            Consistent quality, clear pricing, and full visibility from production to delivery. We take responsibility for quality control so your business runs without delays.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all">
                                Request Quote
                                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-800 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 border border-slate-700 transition-all">
                                View Catalog
                            </button>
</div>
</div>

<div className="relative group order-1 lg:order-2">
<div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400">
<i className="w-6 h-6" data-lucide="ship"></i>
</div>
<div>
<h4 className="text-white font-semibold">Shipment #SH-8291</h4>
<p className="text-slate-400 text-sm">In Transit • Arriving in 2 days</p>
</div>
</div>
<div className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-medium">
                                    On Time
                                </div>
</div>

<div className="relative w-full h-2 bg-slate-700 rounded-full mb-8">
<div className="absolute left-0 top-0 h-full w-[75%] bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
<div className="absolute left-[75%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-4 border-blue-500 shadow-lg"></div>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="bg-slate-900 rounded-lg p-3 text-center">
<p className="text-xs text-slate-500 uppercase font-mono mb-1">Origin</p>
<p className="text-white font-semibold text-sm">Cochin, IN</p>
</div>
<div className="bg-slate-900 rounded-lg p-3 text-center">
<p className="text-xs text-slate-500 uppercase font-mono mb-1">Weight</p>
<p className="text-white font-semibold text-sm">24 Tons</p>
</div>
<div className="bg-slate-900 rounded-lg p-3 text-center">
<p className="text-xs text-slate-500 uppercase font-mono mb-1">Dest</p>
<p className="text-white font-semibold text-sm">New York, US</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
