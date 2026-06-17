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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
<div className="max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-white text-xl font-semibold tracking-tighter uppercase z-50" href="#">
                TITAN
            </a>

<div className="hidden md:flex items-center gap-10">
<a className="text-xs uppercase tracking-widest hover:text-white transition-colors duration-300" href="#">Philosophy</a>
<a className="text-xs uppercase tracking-widest hover:text-white transition-colors duration-300" href="#">Services</a>
<a className="text-xs uppercase tracking-widest hover:text-white transition-colors duration-300" href="#">Private Client</a>
<a className="text-xs uppercase tracking-widest hover:text-white transition-colors duration-300" href="#">Journal</a>
</div>

<a className="hidden md:flex group relative overflow-hidden bg-white text-black px-8 py-3 text-xs uppercase tracking-widest font-semibold transition-transform hover:scale-105" href="#inquire">
<span className="relative z-10">Inquire</span>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Architecture" className="w-full h-full object-cover grayscale opacity-40" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black"></div>
</div>
<div className="relative z-10 text-center max-w-5xl px-6">
<p className="text-xs md:text-sm font-medium tracking-[0.2em] text-zinc-500 uppercase mb-6 reveal-text" style={{animationDelay: '0.1s'}}>
                Wealth Management for the Driven
            </p>
<h1 className="text-5xl md:text-8xl lg:text-9xl font-semibold text-white uppercase tracking-tighter leading-none mb-8 reveal-text" style={{animationDelay: '0.3s'}}>
                Commit To<br/><span className="text-zinc-500">Legacy.</span>
</h1>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 reveal-text" style={{animationDelay: '0.5s'}}>
<button className="border border-white text-white px-10 py-4 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                    Explore The Method
                </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
<iconify-icon className="text-white opacity-50" icon="solar:arrow-down-linear" width="24"></iconify-icon>
</div>
</header>

<section className="py-32 border-b border-zinc-900">
<div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-3xl md:text-5xl font-semibold text-white uppercase tracking-tighter mb-8 leading-tight">
                    Capital is not enough.<br/>
                    It requires <span className="text-zinc-500">velocity.</span>
</h2>
<div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed max-w-xl">
<p>
                        True wealth is not stagnant. It is a living, breathing entity that demands rigorous discipline, architectural precision, and an unwavering commitment to growth.
                    </p>
<p>
                        At TITAN, we do not simply manage assets. We optimize your financial physiology. We treat your portfolio with the same intensity you treat your body and your business.
                    </p>
</div>
<div className="mt-12 flex items-center gap-4 group cursor-pointer w-max">
<span className="text-white text-xs uppercase tracking-widest border-b border-white pb-1 group-hover:border-zinc-500 transition-colors">Our Philosophy</span>
<iconify-icon className="text-white group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
<div className="order-1 lg:order-2 relative h-[600px] w-full bg-zinc-900 overflow-hidden">
<img alt="Abstract Concrete" className="w-full h-full object-cover grayscale opacity-60 hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black to-transparent w-full">
<p className="text-white text-xs uppercase tracking-widest">Precision / 01</p>
</div>
</div>
</div>
</section>

<section className="border-b border-zinc-900 bg-zinc-950/50">
<div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-900">
<div className="p-12 text-center group hover:bg-zinc-900/40 transition-colors duration-300">
<p className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-2 group-hover:scale-110 transition-transform duration-300">$12B+</p>
<p className="text-xs uppercase tracking-widest text-zinc-500">Assets Engineered</p>
</div>
<div className="p-12 text-center group hover:bg-zinc-900/40 transition-colors duration-300">
<p className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-2 group-hover:scale-110 transition-transform duration-300">45</p>
<p className="text-xs uppercase tracking-widest text-zinc-500">Global Markets</p>
</div>
<div className="p-12 text-center group hover:bg-zinc-900/40 transition-colors duration-300">
<p className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-2 group-hover:scale-110 transition-transform duration-300">100%</p>
<p className="text-xs uppercase tracking-widest text-zinc-500">Fiduciary Standard</p>
</div>
<div className="p-12 text-center group hover:bg-zinc-900/40 transition-colors duration-300">
<p className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-2 group-hover:scale-110 transition-transform duration-300">24/7</p>
<p className="text-xs uppercase tracking-widest text-zinc-500">Portfolio Monitoring</p>
</div>
</div>
</section>

<section className="py-32 bg-black">
<div className="max-w-screen-2xl mx-auto px-6 mb-20">
<h3 className="text-xs font-medium tracking-[0.2em] text-zinc-500 uppercase mb-4">The Regimen</h3>
<h2 className="text-3xl md:text-5xl font-semibold text-white uppercase tracking-tighter">
                Comprehensive<br/>Architecture.
            </h2>
</div>
<div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">

<div className="bg-black p-12 hover:bg-zinc-950 transition-colors duration-500 group relative">
<div className="absolute top-12 right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-white" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div className="mb-12 text-white">
<iconify-icon icon="solar:graph-new-up-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h4 className="text-xl text-white font-medium uppercase tracking-tight mb-4">Active Yield Strategy</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                    Dynamic allocation designed to capture upside in volatile markets while rigorously defending the baseline.
                </p>
</div>

<div className="bg-black p-12 hover:bg-zinc-950 transition-colors duration-500 group relative">
<div className="absolute top-12 right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-white" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div className="mb-12 text-white">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h4 className="text-xl text-white font-medium uppercase tracking-tight mb-4">Legacy Engineering</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                    Structuring intergenerational wealth transfer with tax-efficient precision and legal fortitude.
                </p>
</div>

<div className="bg-black p-12 hover:bg-zinc-950 transition-colors duration-500 group relative">
<div className="absolute top-12 right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-white" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div className="mb-12 text-white">
<iconify-icon icon="solar:pie-chart-2-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h4 className="text-xl text-white font-medium uppercase tracking-tight mb-4">Private Markets</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                    Exclusive access to venture capital, private equity, and real estate opportunities unavailable to the public.
                </p>
</div>

<div className="bg-black p-12 hover:bg-zinc-950 transition-colors duration-500 group relative">
<div className="absolute top-12 right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-white" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div className="mb-12 text-white">
<iconify-icon icon="solar:documents-minimalistic-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h4 className="text-xl text-white font-medium uppercase tracking-tight mb-4">Tax Optimization</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                    Advanced strategies to minimize liability and maximize compound growth across all asset classes.
                </p>
</div>

<div className="bg-black p-12 hover:bg-zinc-950 transition-colors duration-500 group relative">
<div className="absolute top-12 right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<div className="mb-12 text-white">
<iconify-icon icon="solar:crown-star-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h4 className="text-xl text-white font-medium uppercase tracking-tight mb-4">Concierge Advisory</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                    A dedicated team available 24/7 to handle liquidity events, acquisitions, and lifestyle management.
                </p>
</div>

<div className="bg-black p-12 hover:bg-zinc-950 transition-colors duration-500 group relative flex flex-col justify-center items-center text-center">
<h4 className="text-3xl text-white font-semibold uppercase tracking-tighter mb-4">View All<br/>Capabilities</h4>
<div className="mt-4 flex items-center gap-2 group cursor-pointer">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="relative h-[80vh] w-full overflow-hidden">
<img alt="Black Sand Texture" className="w-full h-full object-cover grayscale brightness-50" src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
<h2 className="text-4xl md:text-7xl font-semibold text-white uppercase tracking-tighter mb-6">
                Silence The Noise.
            </h2>
<p className="text-zinc-300 max-w-lg text-lg font-light mb-10">
                In a world of volatility, we provide the stillness of certainty.
            </p>
<a className="inline-flex items-center gap-2 text-white text-xs uppercase tracking-widest border border-white/30 px-8 py-3 hover:bg-white hover:text-black transition-all" href="#">
                Read The Quarterly Report
            </a>
</div>
</section>

<section className="py-32 bg-zinc-950 relative overflow-hidden" id="inquire">

<div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-screen-xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
<div>
<h2 className="text-4xl font-semibold text-white uppercase tracking-tighter mb-6">
                    Request Access
                </h2>
<p className="text-zinc-400 mb-12 max-w-md leading-relaxed">
                    Membership is limited to ensure uncompromising attention to detail for each portfolio. Submit your details to schedule a private consultation.
                </p>
<div className="space-y-8">
<div className="flex items-center gap-6">
<div className="w-12 h-12 flex items-center justify-center border border-zinc-800 bg-black text-white rounded-full">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-white text-sm font-medium">New York / London / Dubai</p>
<p className="text-zinc-500 text-xs mt-1">Global Headquarters</p>
</div>
</div>
<div className="flex items-center gap-6">
<div className="w-12 h-12 flex items-center justify-center border border-zinc-800 bg-black text-white rounded-full">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-white text-sm font-medium">+1 (212) 555-0199</p>
<p className="text-zinc-500 text-xs mt-1">Private Line</p>
</div>
</div>
</div>
</div>
<form className="space-y-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<div className="relative group">
<input className="peer w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder-transparent" id="fname" placeholder="First Name" type="text"/>
<label className="absolute left-0 -top-3.5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-xs uppercase tracking-wider" htmlFor="fname">First Name</label>
</div>
<div className="relative group">
<input className="peer w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder-transparent" id="lname" placeholder="Last Name" type="text"/>
<label className="absolute left-0 -top-3.5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-xs uppercase tracking-wider" htmlFor="lname">Last Name</label>
</div>
</div>
<div className="relative group">
<input className="peer w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder-transparent" id="email" placeholder="Email" type="email"/>
<label className="absolute left-0 -top-3.5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-xs uppercase tracking-wider" htmlFor="email">Email Address</label>
</div>
<div className="space-y-4 pt-4">
<span className="text-xs text-zinc-500 uppercase tracking-widest block mb-4">Interest Level</span>

<div className="relative w-full h-12 flex items-center">
<input className="w-full appearance-none h-[1px] bg-zinc-700 rounded-lg outline-none slider-thumb-custom cursor-pointer z-20 opacity-0 absolute inset-0" max="100" min="1" type="range" value="50"/>
<div className="w-full h-[1px] bg-zinc-800 relative">
<div className="absolute top-1/2 -translate-y-1/2 left-0 h-[1px] bg-white w-1/2"></div> 
<div className="absolute top-1/2 -translate-y-1/2 left-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] cursor-grab"></div>
</div>
</div>
<div className="flex justify-between text-xs text-zinc-600 uppercase">
<span>Private Wealth</span>
<span>Institutional</span>
</div>
</div>
<div className="pt-6 flex items-center gap-4">

<label className="relative flex items-center cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-zinc-600 peer-checked:bg-white peer-checked:border-white transition-all"></div>
<iconify-icon className="absolute left-0.5 top-0.5 text-black opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="16"></iconify-icon>
<span className="ml-4 text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">I agree to the privacy policy and terms.</span>
</label>
</div>
<button className="w-full bg-white text-black py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-zinc-200 transition-colors mt-8" type="submit">
                    Submit Inquiry
                </button>
</form>
</div>
</section>

<footer className="bg-black border-t border-zinc-900 pt-20 pb-10">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-1">
<a className="text-white text-xl font-semibold tracking-tighter uppercase" href="#">TITAN</a>
</div>
<div className="flex flex-col gap-4">
<h5 className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Firm</h5>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">About</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Careers</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Locations</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Press</a>
</div>
<div className="flex flex-col gap-4">
<h5 className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Legal</h5>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Terms of Use</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Disclosures</a>
</div>
<div className="flex flex-col gap-4">
<h5 className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Connect</h5>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:plain-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-end md:items-center border-t border-zinc-900 pt-10 gap-6">
<p className="text-xs text-zinc-600">
                    © 2024 TITAN Wealth Management. All rights reserved. <br/>
                    Investments involve risk, including possible loss of principal.
                </p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs text-zinc-500 uppercase tracking-widest">Systems Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
