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

    // Thumbnail switching
    document.querySelectorAll('[data-thumb]').forEach(btn => {
      btn.addEventListener('click', () => {
        const src = btn.getAttribute('data-thumb');
        document.getElementById('main-image').src = src;
        document.querySelectorAll('.thumb-btn').forEach(b => {
          b.style.borderColor = 'rgba(148, 163, 184, 0.3)';
        });
        btn.style.borderColor = '#67e8f9';
      });
    });

    // Color selection
    document.querySelectorAll('.color-btn').forEach(dot => {
      dot.addEventListener('click', () => {
        document.querySelectorAll('.color-btn').forEach(b => {
          b.style.borderColor = 'rgba(148, 163, 184, 0.6)';
        });
        dot.style.borderColor = '#67e8f9';
        
        // Visual feedback
        dot.style.transform = 'scale(1.2)';
        setTimeout(() => {
          dot.style.transform = 'scale(1)';
        }, 200);
      });
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
      
<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: `url('/assets/dbc9ce2d-f297-4d0d-a54c-7de85b76a8d5_3840w.jpg')`}}></div>

<header className="glass sticky top-0 z-50 animate-slide-in-down delay-100 rounded-3xl border-b mt-4 mx-auto max-w-5xl" style={{borderColor: `rgba(148, 163, 184, 0.2)`}}>
<div className="max-w-7xl sm:px-8 lg:px-10 mt-2 mr-auto ml-auto pr-6 pl-6">
<div className="flex items-center justify-between h-16">

<a className="flex items-center gap-2 font-semibold text-lg tracking-tight transition-colors text-cyan-300 hover:text-cyan-200" href="#">
<svg className="" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
          stormé
        </a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="transition-colors duration-200 relative group hover:text-cyan-300" href="#">
            Collections
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full bg-cyan-300 rounded-full"></span>
</a>
<a className="relative transition-colors duration-200 group hover:text-cyan-300" href="#">
            Tactical Gear
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full bg-cyan-300 rounded-full"></span>
</a>
<a className="transition-colors duration-200 relative group hover:text-cyan-300" href="#">
            Technology
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full bg-cyan-300 rounded-full"></span>
</a>
<a className="transition-colors duration-200 relative group hover:text-cyan-300" href="#">
            Support
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full bg-cyan-300 rounded-full"></span>
</a>
</nav>

<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 text-sm font-medium transition-all duration-200 px-4 py-2 rounded-2xl hover:text-cyan-300 glass-light">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
            Search
          </button>
<button className="hidden md:flex items-center gap-2 text-sm font-medium transition-all duration-200 px-4 py-2 rounded-2xl hover:text-cyan-300 glass-light">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path></svg>
            Account
          </button>
<button className="relative flex items-center gap-2 text-sm font-medium transition-all duration-200 px-4 py-2 rounded-2xl hover:text-cyan-300 glass-light">
<svg className="" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="hidden sm:inline">Cart</span>
<span className="absolute -top-1 -right-1 text-[10px] font-semibold px-1.5 py-0.5 rounded-full min-w-[18px] text-center bg-cyan-300 text-black">2</span>
</button>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 lg:py-24">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

<div className="space-y-8">

<div className="inline-flex gap-2 animate-slide-in-left delay-200 glass-light text-xs font-semibold border rounded-3xl pt-2 pr-4 pb-2 pl-4 items-center" style={{borderColor: `rgba(6, 182, 212, 0.3)`}}>
<svg className="w-3.5 h-3.5 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
            New Release - Limited Edition
          </div>

<div className="space-y-6 animate-slide-in-left delay-300">
<h1 className="text-5xl sm:text-6xl lg:text-8xl leading-tight tracking-tight font-semibold">
              Stormguard Pro
              <span className="text-cyan-300">Tactical Raincoat</span>
</h1>
<p className="text-xl sm:text-2xl font-medium max-w-md text-slate-300">
              Military-grade weather protection meets urban sophistication. Built for the modern professional.
            </p>
</div>

<div className="flex flex-col sm:flex-row gap-6 animate-slide-in-left delay-400">
<button className="inline-flex items-center justify-center gap-3 font-semibold px-10 py-5 rounded-3xl transition-all duration-200 shadow-2xl hover:shadow-cyan-300/20 hover:scale-105 bg-cyan-300 hover:bg-cyan-200 text-black">
              Shop Collection
              <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="inline-flex gap-3 transition-all duration-200 hover:shadow-2xl glass-light font-semibold border rounded-3xl pt-5 pr-10 pb-5 pl-10 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] items-center justify-center" style={{borderColor: `rgba(148, 163, 184, 0.3)`}}>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
              Watch Demo
            </button>
</div>

<div className="grid grid-cols-3 gap-8 pt-8 border-t animate-slide-in-left delay-500" style={{borderColor: `rgba(148, 163, 184, 0.2)`}}>
<div className="text-center">
<div className="text-3xl text-cyan-300 font-semibold">15K+</div>
<div className="text-sm font-medium text-slate-400">Happy Customers</div>
</div>
<div className="text-center">
<div className="text-3xl text-cyan-300 font-semibold">4.9</div>
<div className="text-sm font-medium text-slate-400">Rating Score</div>
</div>
<div className="text-center">
<div className="text-3xl text-cyan-300 font-semibold">98%</div>
<div className="text-sm font-medium text-slate-400">Satisfaction</div>
</div>
</div>
</div>

<div className="relative animate-blur-in delay-400">

<div className="relative rounded-[3rem] overflow-hidden shadow-2xl animate-slide-in-right delay-300">
<img alt="Stormguard Pro Tactical Raincoat" className="w-full h-[600px] object-cover" id="main-image" src="/assets/a06f2572-2fcb-4c8e-ada8-e727e3052c21_1600w.jpg" />

<div className="absolute top-8 right-8 px-6 py-3 rounded-3xl shadow-2xl glass-dark border" style={{borderColor: `rgba(148, 163, 184, 0.2)`}}>
<div className="text-xs font-medium text-slate-300">Starting at</div>
<div className="text-xl font-bold text-cyan-300">$429</div>
</div>
</div>

<div className="absolute -top-6 left-6 flex gap-4 animate-slide-in-up delay-500">
<button className="thumb-btn w-20 h-20 rounded-2xl border-2 overflow-hidden shadow-lg hover:scale-105 transition-all glass-light border-cyan-300" data-thumb="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80">
<img alt="Front View" className="object-cover w-full h-full" src="/assets/877754b8-1924-4c34-b534-2054029367ff_320w.jpg" />
</button>
<button className="thumb-btn w-20 h-20 rounded-2xl border-2 overflow-hidden shadow-lg hover:scale-105 transition-all glass-light" data-thumb="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80" style={{borderColor: `rgba(148, 163, 184, 0.3)`}}>
<img alt="Side View" className="object-cover w-full h-full" src="/assets/061a4cd8-bc75-4891-9b91-3c8d0f85cbbe_800w.jpg" />
</button>
<button className="thumb-btn w-20 h-20 rounded-2xl border-2 overflow-hidden shadow-lg hover:scale-105 transition-all glass-light" data-thumb="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80" style={{borderColor: `rgba(148, 163, 184, 0.3)`}}>
<img alt="Detail View" className="object-cover w-full h-full" src="/assets/5eeba3bb-f55a-4386-a87d-08ef1505633b_320w.jpg" />
</button>
</div>

<div className="absolute top-1/2 -left-10 -translate-y-1/2 space-y-4 animate-slide-in-left delay-600">
<div className="glass-dark border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-xl" style={{borderColor: `rgba(148, 163, 184, 0.2)`}}>
<div className="text-xs font-semibold mb-4 text-center text-slate-100">Colors</div>
<div className="space-y-4">
<button className="color-btn w-10 h-10 rounded-2xl border-2 shadow-md hover:scale-110 transition-transform border-slate-600 bg-slate-900"></button>
<button className="color-btn w-10 h-10 rounded-2xl border-2 shadow-md hover:scale-110 transition-transform border-slate-600 bg-slate-400"></button>
<button className="color-btn w-10 h-10 rounded-2xl border-2 shadow-md hover:scale-110 transition-transform border-cyan-300 bg-green-600"></button>
<button className="color-btn w-10 h-10 rounded-2xl border-2 shadow-md hover:scale-110 transition-transform border-slate-600 bg-blue-900"></button>
<button className="color-btn w-10 h-10 rounded-2xl border-2 shadow-md hover:scale-110 transition-transform border-slate-600 bg-yellow-600"></button>
</div>
</div>
</div>

<div className="absolute bottom-8 left-8 px-6 py-4 rounded-3xl shadow-lg border animate-slide-in-up delay-700 glass-dark" style={{borderColor: `rgba(148, 163, 184, 0.2)`}}>
<div className="flex items-center gap-2 text-sm">
<svg className="w-4 h-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path><path d="m14.5 12.5 2-2"></path><path d="m11.5 9.5 2-2"></path><path d="m8.5 6.5 2-2"></path><path d="m17.5 15.5 2-2"></path></svg>
<span className="font-medium">Size Guide Available</span>
</div>
</div>
</div>
</div>

<div className="mt-24 animate-fade-in delay-800">
<div className="glass-dark border rounded-[3rem] pt-12 pr-12 pb-12 pl-12 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" style={{borderColor: `rgba(148, 163, 184, 0.2)`}}>
<div className="">
<h2 className="text-3xl tracking-tight mb-8 font-semibold">
              Advanced Weather Protection Technology
            </h2>
<p className="leading-relaxed text-xl mb-12 text-slate-300">
              The Stormguard Pro Tactical Raincoat combines military-grade materials with contemporary urban design. 
              Featuring a three-layer membrane system that delivers complete waterproof protection while maintaining 
              breathability for all-day comfort. Multiple tactical pockets provide secure storage for essentials, 
              while the adjustable hood and storm cuffs ensure maximum protection against harsh weather conditions.
            </p>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="flex items-start gap-6">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 glass-light">
<svg className="w-6 h-6 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<div>
<h3 className="font-semibold mb-2 text-slate-100 text-lg">3-Layer Protection</h3>
<p className="text-slate-400">Advanced membrane technology</p>
</div>
</div>
<div className="flex items-start gap-6">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 glass-light">
<svg className="w-6 h-6 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg>
</div>
<div>
<h3 className="font-semibold mb-2 text-slate-100 text-lg">Wind Resistant</h3>
<p className="text-slate-400">Up to 60mph wind protection</p>
</div>
</div>
<div className="flex items-start gap-6">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 glass-light">
<svg className="w-6 h-6 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
</div>
<div>
<h3 className="font-semibold mb-2 text-slate-100 text-lg">Temperature Range</h3>
<p className="text-slate-400">Comfort from -10°C to 25°C</p>
</div>
</div>
</div>

<div className="mt-16 pt-12 border-t flex items-center justify-between" style={{borderColor: `rgba(148, 163, 184, 0.2)`}}>
<div className="flex items-center gap-4">
<h3 className="text-3xl sm:text-4xl tracking-tight text-slate-100 font-semibold">
                  Weather The Storm.
                  <span className="text-cyan-300">Conquer The City.</span>
</h3>
</div>
<div className="text-right text-sm text-slate-500">
<div>© 2024 Stormé</div>
<div className="font-mono">Model: SG-PRO-001</div>
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
