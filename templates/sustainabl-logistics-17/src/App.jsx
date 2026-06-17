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
sans: ['Manrope', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
verdant: {
50: '#f0fdf6',
100: '#dbfce9',
200: '#bbf7d6',
300: '#86efb8',
400: '#4ade94',
500: '#22c56e', // More vibrant green
600: '#16a358',
700: '#158047',
800: '#16653c',
900: '#145334', // Lighter than previous
950: '#0d3d25', // Significantly lighter, richer forest green (was #022c22)
},
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
800: '#292524',
900: '#1c1917',
},
lime: {
400: '#a3e635',
500: '#84cc16',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      

<nav className="fixed top-0 w-full z-50 border-b border-stone-200/50 bg-stone-50/80 backdrop-blur-md">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer transition-transform duration-300 hover:scale-105">
<div className="relative w-8 h-8 flex items-center justify-center bg-verdant-950 rounded-lg group-hover:bg-verdant-800 transition-colors shadow-lg shadow-verdant-900/20">
<svg className="lucide lucide-leaf text-lime-400 w-4 h-4" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<span className="text-lg font-medium tracking-tight text-verdant-950">Verdant Relay</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-600 hover:text-verdant-600 hover:-translate-y-0.5 transition-all duration-200" href="#how-it-works">How it Works</a>
<a className="text-sm font-medium text-stone-600 hover:text-verdant-600 hover:-translate-y-0.5 transition-all duration-200" href="#services">Services</a>
<a className="text-sm font-medium text-stone-600 hover:text-verdant-600 hover:-translate-y-0.5 transition-all duration-200" href="#impact">Impact</a>
<a className="text-sm font-medium text-stone-600 hover:text-verdant-600 hover:-translate-y-0.5 transition-all duration-200" href="#about">About</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex text-sm font-medium text-verdant-900 border border-stone-200 px-4 py-2 rounded-lg hover:bg-stone-100 hover:border-verdant-300 hover:-translate-y-0.5 transition-all duration-300" href="#contact">
                    Login
                </a>
<a className="text-sm font-medium bg-verdant-950 text-white px-5 py-2.5 rounded-lg hover:bg-verdant-800 hover:scale-105 hover:shadow-xl hover:shadow-verdant-900/30 transition-all duration-300 flex items-center gap-2 group" href="#contact">
                    Get Quote <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</nav>

<section className="relative min-h-screen bg-verdant-950 flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-verdant-500/20 rounded-full blur-[128px] pointer-events-none"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-[128px] pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="z-10 space-y-8">
<div className="inline-flex gap-2 uppercase text-xs font-medium text-lime-400 tracking-wide bg-lime-500/10 border-lime-500/30 border rounded-full pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center hover:bg-lime-500/20 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
</span>
                    Now available in NYC &amp; London
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                    Fast Deliveries. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-verdant-400 animate-pulse-slow">Zero Emissions.</span>
</h1>
<p className="text-lg md:text-xl text-stone-200 max-w-lg leading-relaxed font-light">
                    Sustainable last-mile delivery for modern businesses. We help you reduce your carbon footprint without sacrificing speed or reliability.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="bg-lime-500 text-verdant-950 px-8 py-4 rounded-lg text-base font-medium hover:bg-lime-400 hover:scale-105 hover:shadow-[0_0_20px_rgba(163,230,53,0.5)] transition-all duration-300 flex items-center justify-center gap-2">
                        Start Shipping
                    </button>
<button className="px-8 py-4 rounded-lg text-base font-medium text-white border border-white/20 hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group">
<svg className="lucide lucide-play-circle w-5 h-5 group-hover:text-lime-400 transition-colors" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                        View Fleet
                    </button>
</div>

<div className="pt-8 border-t border-white/10">
<p className="text-xs text-stone-300 mb-5 font-mono uppercase tracking-wider">Trusted by eco-conscious brands</p>
<div className="flex flex-wrap items-center gap-8 opacity-50 hover:opacity-100 transition-opacity duration-500">

<div className="flex items-center gap-1.5 group cursor-pointer">
<svg className="lucide lucide-sprout w-6 h-6 text-stone-200 group-hover:text-lime-400 transition-colors" data-lucide="sprout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 20h10"></path><path d="M10 20c5.5-2.5.8-6.4 3-10"></path><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path></svg>
<span className="text-lg font-bold text-stone-200 tracking-tighter group-hover:text-white transition-colors">agriflow</span>
</div>

<div className="flex items-center gap-1.5 group cursor-pointer">
<svg className="lucide lucide-waves w-6 h-6 text-stone-200 group-hover:text-lime-400 transition-colors" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
<span className="text-lg font-bold text-stone-200 tracking-tighter group-hover:text-white transition-colors">CURRENT</span>
</div>

<div className="flex items-center gap-1.5 group cursor-pointer">
<svg className="lucide lucide-sun w-6 h-6 text-stone-200 group-hover:text-lime-400 transition-colors" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<span className="text-lg font-bold text-stone-200 tracking-tighter group-hover:text-white transition-colors">Solara</span>
</div>

<div className="flex items-center gap-1.5 group cursor-pointer">
<svg className="lucide lucide-mountain w-6 h-6 text-stone-200 group-hover:text-lime-400 transition-colors" data-lucide="mountain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>
<span className="text-lg font-bold text-stone-200 tracking-tighter group-hover:text-white transition-colors">APEX</span>
</div>
</div>
</div>
</div>

<div className="relative h-[600px] w-full hidden lg:block">

<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-[400px] h-[400px] border border-white/10 rounded-full animate-pulse-slow">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-lime-500/20 rounded-full"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-verdant-800/50 rounded-full backdrop-blur-xl border border-verdant-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:scale-110 transition-transform duration-500 cursor-pointer">
<svg className="lucide lucide-box text-lime-400 w-10 h-10" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>

<div className="absolute top-0 left-1/2 -ml-1 w-2 h-2 bg-lime-400 rounded-full shadow-[0_0_10px_rgba(163,230,53,0.8)] animate-spin origin-[50%_200px]" style={{animationDuration: '10s'}}></div>
</div>
</div>

<div className="absolute bottom-20 left-0 glass-panel p-6 rounded-xl w-auto shadow-2xl hover:scale-105 hover:bg-white/5 transition-all duration-300 cursor-default border-verdant-500/20">
<div className="flex gap-8 text-center">
<div className="group">
<p className="text-2xl font-mono text-white font-medium group-hover:text-lime-400 transition-colors">84<span className="text-sm text-lime-400">%</span></p>
<p className="text-xs text-stone-300 mt-1 uppercase tracking-wide">Route Opt.</p>
</div>
<div className="w-px bg-white/10"></div>
<div className="group">
<p className="text-2xl font-mono text-white font-medium group-hover:text-lime-400 transition-colors">0<span className="text-sm text-lime-400">g</span></p>
<p className="text-xs text-stone-300 mt-1 uppercase tracking-wide">CO2 Emitted</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-verdant-950 mb-4">Logistics simplified, nature amplified.</h2>
<p className="text-lg text-stone-600">We've stripped away the complexity and the carbon. Here is how your package moves through our network.</p>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-stone-200 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white border border-stone-200 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:border-verdant-400 group-hover:shadow-lg group-hover:shadow-verdant-200/50 group-hover:-translate-y-2 transition-all duration-300">
<svg className="lucide lucide-mouse-pointer-click w-8 h-8 text-verdant-600 group-hover:scale-110 transition-transform" data-lucide="mouse-pointer-click" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.1 12 6"></path><path d="m5.1 8-2.9-.8"></path><path d="m6 12-1.9 2"></path><path d="M7.2 2.2 8 5.1"></path><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"></path></svg>
</div>
<h3 className="text-xl font-medium text-verdant-900 mb-2 group-hover:text-verdant-600 transition-colors">1. Schedule Pickup</h3>
<p className="text-base text-stone-600">Book via our dashboard or API. We collect from your store or warehouse within hours.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white border border-stone-200 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:border-verdant-400 group-hover:shadow-lg group-hover:shadow-verdant-200/50 group-hover:-translate-y-2 transition-all duration-300">
<svg className="lucide lucide-cpu w-8 h-8 text-verdant-600 group-hover:scale-110 transition-transform" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-xl font-medium text-verdant-900 mb-2 group-hover:text-verdant-600 transition-colors">2. Smart Routing</h3>
<p className="text-base text-stone-600">Our AI algorithm bundles deliveries to minimize distance and energy consumption.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white border border-stone-200 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:border-verdant-400 group-hover:shadow-lg group-hover:shadow-verdant-200/50 group-hover:-translate-y-2 transition-all duration-300">
<svg className="lucide lucide-bike w-8 h-8 text-verdant-600 group-hover:scale-110 transition-transform" data-lucide="bike" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18.5" cy="17.5" r="3.5"></circle><circle cx="5.5" cy="17.5" r="3.5"></circle><circle cx="15" cy="5" r="1"></circle><path d="M12 17.5V14l-3-3 4-3 2 3h2"></path></svg>
</div>
<h3 className="text-xl font-medium text-verdant-900 mb-2 group-hover:text-verdant-600 transition-colors">3. Eco-Delivery</h3>
<p className="text-base text-stone-600">Cargo e-bikes and EV vans complete the last mile. Silent, clean, and efficient.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-verdant-950 mb-4">Our Services</h2>
<p className="text-lg text-stone-600 max-w-md">Tailored solutions for retailers, e-commerce brands, and local startups.</p>
</div>
<a className="text-verdant-700 font-medium hover:text-verdant-600 hover:translate-x-1 transition-all flex items-center gap-2 group" href="#">
                    See full pricing <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-verdant-300 hover:shadow-xl hover:shadow-verdant-100/50 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-verdant-100 transition-all duration-300">
<svg className="lucide lucide-zap w-6 h-6 text-verdant-600 group-hover:text-verdant-700" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-2xl font-medium text-verdant-900 mb-3 group-hover:text-verdant-700 transition-colors">Same-Day Eco</h3>
<p className="text-lg text-stone-600 mb-6">Guaranteed delivery within 4 hours for city-based customers. Perfect for perishables and urgent retail.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-stone-600 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-verdant-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 100% Electric Fleet
                        </li>
<li className="flex items-center gap-3 text-stone-600 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-verdant-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Live customer tracking link
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-verdant-300 hover:shadow-xl hover:shadow-verdant-100/50 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-verdant-100 transition-all duration-300">
<svg className="lucide lucide-repeat w-6 h-6 text-verdant-600 group-hover:text-verdant-700" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
</div>
<h3 className="text-2xl font-medium text-verdant-900 mb-3 group-hover:text-verdant-700 transition-colors">Subscription Logistics</h3>
<p className="text-lg text-stone-600 mb-6">Scheduled weekly or daily routes for subscription boxes, meal kits, and regular B2B supply runs.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-stone-600 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-verdant-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Discounted bulk rates
                        </li>
<li className="flex items-center gap-3 text-stone-600 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-verdant-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Dedicated account manager
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-verdant-300 hover:shadow-xl hover:shadow-verdant-100/50 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-verdant-100 transition-all duration-300">
<svg className="lucide lucide-map w-6 h-6 text-verdant-600 group-hover:text-verdant-700" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</div>
<h3 className="text-2xl font-medium text-verdant-900 mb-3 group-hover:text-verdant-700 transition-colors">Route Optimization API</h3>
<p className="text-lg text-stone-600 mb-6">Have your own fleet? Use our software to plan the most energy-efficient routes instantly.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-stone-600 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-verdant-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Reduce fuel costs by 30%
                        </li>
<li className="flex items-center gap-3 text-stone-600 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-verdant-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Easy API Integration
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-verdant-950 border border-verdant-800 hover:border-verdant-600 hover:shadow-2xl hover:shadow-verdant-900/50 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden cursor-pointer">
<div className="absolute top-0 right-0 p-32 bg-lime-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-lime-500/20 transition-all duration-500"></div>
<div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
<svg className="lucide lucide-building-2 w-6 h-6 text-lime-400 group-hover:text-lime-300" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-3 group-hover:text-lime-400 transition-colors">Enterprise Custom</h3>
<p className="text-lg text-stone-300 mb-6 group-hover:text-stone-200 transition-colors">Complete logistics overhaul for large retailers aiming for Net Zero goals.</p>
<a className="inline-flex items-center text-lime-400 font-medium hover:text-lime-300 hover:translate-x-2 transition-all mt-auto" href="#contact">
                        Contact Sales <svg className="lucide lucide-chevron-right w-4 h-4 ml-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-verdant-950 text-white relative overflow-hidden" id="impact">

<div className="absolute inset-0 grid-bg opacity-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Real impact, <br/>measured in real-time.</h2>
<p className="text-lg text-stone-300 mb-8">Transparency is at our core. We track every gram of CO₂ saved compared to traditional diesel delivery fleets.</p>
<div className="flex flex-col gap-6">
<div className="flex items-start gap-4 group cursor-default">
<div className="p-2 bg-verdant-500/10 rounded-lg group-hover:bg-verdant-500/20 transition-colors">
<svg className="lucide lucide-tree-pine w-6 h-6 text-verdant-400 group-hover:scale-110 transition-transform" data-lucide="tree-pine" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"></path><path d="M12 22v-3"></path></svg>
</div>
<div>
<h4 className="text-lg font-medium text-white group-hover:text-lime-400 transition-colors">Reforestation Partner</h4>
<p className="text-sm text-stone-400 mt-1">For every 100 deliveries, we plant a tree in urban areas.</p>
</div>
</div>
<div className="flex items-start gap-4 group cursor-default">
<div className="p-2 bg-verdant-500/10 rounded-lg group-hover:bg-verdant-500/20 transition-colors">
<svg className="lucide lucide-wind w-6 h-6 text-verdant-400 group-hover:scale-110 transition-transform" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg>
</div>
<div>
<h4 className="text-lg font-medium text-white group-hover:text-lime-400 transition-colors">Air Quality Improvement</h4>
<p className="text-sm text-stone-400 mt-1">Removing particulate matter from city centers by replacing vans.</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300">
<p className="text-xs font-mono text-lime-400 mb-2">CO₂ SAVED (KG)</p>
<p className="text-5xl font-mono font-normal tracking-tighter">124,592</p>
</div>
<div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300">
<p className="text-xs font-mono text-lime-400 mb-2">DELIVERIES COMPLETED</p>
<p className="text-5xl font-mono font-normal tracking-tighter">840.2k</p>
</div>
<div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm col-span-1 sm:col-span-2 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] transition-all duration-300">
<p className="text-xs font-mono text-lime-400 mb-2">EQUIVALENT TREES PLANTED</p>
<p className="text-5xl font-mono font-normal tracking-tighter">4,102</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-verdant-50" id="about">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-verdant-950 mb-8">Driven by a cleaner future.</h2>
<div className="prose prose-lg mx-auto text-stone-600">
<p className="mb-6">
                    Verdant Relay was founded on a simple premise: logistics shouldn't cost the earth. As cities become more congested and pollution levels rise, the traditional model of heavy diesel vans idling at curbsides is no longer sustainable.
                </p>
<p>
                    We combine <span className="text-verdant-700 font-medium">cutting-edge route optimization technology</span> with a fleet of agile electric vehicles to offer a service that is faster for businesses and better for everyone else.
                </p>
</div>

<div className="mt-16 flex flex-wrap justify-center gap-8">
<div className="text-center group cursor-default">
<div className="w-20 h-20 bg-stone-200 rounded-full mx-auto mb-3 overflow-hidden group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 border-2 border-transparent group-hover:border-verdant-400">
<img alt="CEO" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<p className="text-sm font-medium text-verdant-900 group-hover:text-verdant-700 transition-colors">Elena Ross</p>
<p className="text-xs text-stone-500">Founder &amp; CEO</p>
</div>
<div className="text-center group cursor-default">
<div className="w-20 h-20 bg-stone-200 rounded-full mx-auto mb-3 overflow-hidden group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 border-2 border-transparent group-hover:border-verdant-400">
<img alt="CTO" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"/>
</div>
<p className="text-sm font-medium text-verdant-900 group-hover:text-verdant-700 transition-colors">Marcus Chen</p>
<p className="text-xs text-stone-500">Head of Logistics</p>
</div>
<div className="text-center group cursor-default">
<div className="w-20 h-20 bg-stone-200 rounded-full mx-auto mb-3 overflow-hidden group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 border-2 border-transparent group-hover:border-verdant-400">
<img alt="COO" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
</div>
<p className="text-sm font-medium text-verdant-900 group-hover:text-verdant-700 transition-colors">Sarah O'Neil</p>
<p className="text-xs text-stone-500">Sustainability Lead</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="contact">
<div className="max-w-6xl mx-auto px-6">
<div className="bg-verdant-950 rounded-3xl overflow-hidden shadow-2xl shadow-verdant-900/20 flex flex-col md:flex-row">

<div className="md:w-5/12 p-10 md:p-16 text-white bg-verdant-900 relative">
<div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
<h3 className="text-3xl font-medium tracking-tight mb-6">Let's move goods for good.</h3>
<p className="text-stone-300 mb-12 text-lg">Ready to switch to carbon-neutral delivery? Get a custom quote for your business today.</p>
<div className="space-y-6">
<div className="flex items-center gap-4 group cursor-pointer hover:bg-verdant-800/50 p-2 -ml-2 rounded-lg transition-colors">
<svg className="lucide lucide-mail text-lime-400 w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="text-stone-200 group-hover:text-white transition-colors">hello@verdantrelay.com</span>
</div>
<div className="flex items-center gap-4 group cursor-pointer hover:bg-verdant-800/50 p-2 -ml-2 rounded-lg transition-colors">
<svg className="lucide lucide-phone text-lime-400 w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="text-stone-200 group-hover:text-white transition-colors">+1 (555) 019-2834</span>
</div>
<div className="flex items-center gap-4 group cursor-pointer hover:bg-verdant-800/50 p-2 -ml-2 rounded-lg transition-colors">
<svg className="lucide lucide-map-pin text-lime-400 w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-stone-200 group-hover:text-white transition-colors">101 Eco Park Way, Seattle, WA</span>
</div>
</div>
</div>

<div className="md:w-7/12 p-10 md:p-16 bg-white">
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700" htmlFor="name">Full Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-verdant-500 focus:ring-1 focus:ring-verdant-500 outline-none transition-all hover:bg-stone-100" id="name" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700" htmlFor="business">Business Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-verdant-500 focus:ring-1 focus:ring-verdant-500 outline-none transition-all hover:bg-stone-100" id="business" placeholder="Acme Co." type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700" htmlFor="email">Work Email</label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-verdant-500 focus:ring-1 focus:ring-verdant-500 outline-none transition-all hover:bg-stone-100" id="email" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700">Estimated Monthly Deliveries</label>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
<label className="cursor-pointer group">
<input className="peer sr-only" name="volume" type="radio"/>
<div className="text-center py-2 border border-stone-200 rounded-md text-sm text-stone-600 peer-checked:bg-verdant-50 peer-checked:border-verdant-500 peer-checked:text-verdant-900 transition-all group-hover:border-verdant-300 group-hover:bg-stone-50">
                                        &lt; 50
                                    </div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="volume" type="radio"/>
<div className="text-center py-2 border border-stone-200 rounded-md text-sm text-stone-600 peer-checked:bg-verdant-50 peer-checked:border-verdant-500 peer-checked:text-verdant-900 transition-all group-hover:border-verdant-300 group-hover:bg-stone-50">
                                        50-200
                                    </div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="volume" type="radio"/>
<div className="text-center py-2 border border-stone-200 rounded-md text-sm text-stone-600 peer-checked:bg-verdant-50 peer-checked:border-verdant-500 peer-checked:text-verdant-900 transition-all group-hover:border-verdant-300 group-hover:bg-stone-50">
                                        200-1k
                                    </div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="volume" type="radio"/>
<div className="text-center py-2 border border-stone-200 rounded-md text-sm text-stone-600 peer-checked:bg-verdant-50 peer-checked:border-verdant-500 peer-checked:text-verdant-900 transition-all group-hover:border-verdant-300 group-hover:bg-stone-50">
                                        1k+
                                    </div>
</label>
</div>
</div>
<div className="pt-4">
<button className="w-full bg-verdant-600 text-white font-medium py-3.5 rounded-lg hover:bg-verdant-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-verdant-600/30 transition-all duration-300 active:scale-[0.98]" type="submit">
                                Request Quote
                            </button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-stone-50 border-t border-stone-200 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6 group cursor-pointer hover:scale-105 transition-transform origin-left">
<div className="w-6 h-6 flex items-center justify-center bg-verdant-950 rounded shadow-md group-hover:bg-verdant-800 transition-colors">
<svg className="lucide lucide-leaf text-lime-400 w-3 h-3" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<span className="text-base font-semibold text-verdant-950">Verdant Relay</span>
</div>
<p className="text-sm text-stone-500">
                        © 2024 Verdant Relay Inc.<br/>
                        Designing a greener last mile.
                    </p>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4">Product</h4>
<ul className="space-y-3 text-sm text-stone-600">
<li><a className="hover:text-verdant-600 hover:translate-x-1 inline-block transition-all" href="#">Services</a></li>
<li><a className="hover:text-verdant-600 hover:translate-x-1 inline-block transition-all" href="#">Coverage Area</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-stone-600">
<li><a className="hover:text-verdant-600 hover:translate-x-1 inline-block transition-all" href="#">About Us</a></li>
<li><a className="hover:text-verdant-600 hover:translate-x-1 inline-block transition-all" href="#">Impact Report</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-stone-600">
<li><a className="hover:text-verdant-600 hover:translate-x-1 inline-block transition-all" href="#">Privacy Policy</a></li>
<li><a className="hover:text-verdant-600 hover:translate-x-1 inline-block transition-all" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-200 gap-4">
<div className="flex gap-4">
<a className="text-stone-400 hover:text-verdant-700 hover:scale-125 transition-all duration-300" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-stone-400 hover:text-verdant-700 hover:scale-125 transition-all duration-300" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-stone-400 hover:text-verdant-700 hover:scale-125 transition-all duration-300" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-lime-500 animate-pulse"></div>
<span className="text-xs font-medium text-stone-500">All Systems Operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
