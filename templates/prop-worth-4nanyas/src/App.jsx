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
colors: {
brand: {
400: '#fbbf24',
500: '#f59e0b',
600: '#d97706',
},
amber: {
500: '#f59e0b',
600: '#d97706',
700: '#b45309',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}

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
      

<div className="fixed inset-0 z-0 pointer-events-none bg-[#020202]">
<div className="absolute inset-0 z-0 bg-breathe bg-cover bg-[center_top] opacity-30 mix-blend-luminosity" style={{backgroundImage: 'url(\'https://t3.ftcdn.net/jpg/07/50/54/66/360_F_750546693_djdr9LKaYjldHJWxFmnaaIOGMLR11qbi.jpg\')'}}>
</div>
<div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020202] via-[#020202]/80 to-transparent"></div>
<div className="absolute inset-0 z-10 bg-gradient-to-b from-[#020202]/30 to-transparent"></div>

<div :style={{`background: 'radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(217, 119, 6, 0.04), transparent 40%)'}} className="absolute inset-0 z-20 transition-opacity duration-300">
</div>
</div>

<nav className="sticky top-0 z-50 w-full bg-transparent">
<div className="flex h-24 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div @click="view = 'landing'" className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover:border-amber-500/50 transition-all duration-300">
<i className="text-white w-4 h-4" data-lucide="building-2"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-white">PropWorth</span>
</div>
<button @click="view = 'app'; resetForm()" className="bg-white/10 hover:bg-white/20 border border-white/5 backdrop-blur-md text-white px-6 py-2 rounded-full text-[11px] font-semibold tracking-widest uppercase transition-all">
        Launch Demo
      </button>
</div>
</nav>

<main className="flex-grow flex flex-col min-h-[calc(100vh-96px)] w-full z-10 pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">

<div className="text-center max-w-4xl mx-auto flex flex-col items-center pt-0 pb-12" x-show="view === 'landing'" x-transition:enter="transition ease-out duration-1000" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-8">

<div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-900/10 backdrop-blur-xl mb-8 shadow-[0_0_15px_-3px_rgba(245,158,11,0.1)]">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
<span className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em]">Your Reliable Property Advisor</span>
</div>

<h1 className="text-6xl md:text-8xl font-medium tracking-tighter text-white mb-6 leading-[0.95] drop-shadow-2xl">
                Real Estate <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 via-neutral-200 to-amber-600 pb-2">Intelligence.</span>
</h1>

<p className="leading-relaxed text-base md:text-lg font-light text-neutral-400/80 max-w-xl mx-auto mb-10">
                Step into the future of property valuation. Instantly estimate property values with precision using
                advanced algorithms powered by Dubai market insights.
            </p>

<button @click="view = 'app'; resetForm()" className="group relative px-10 py-5 bg-white text-black rounded-full font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:bg-amber-600 hover:text-white hover:shadow-[0_0_30px_-5px_rgba(217,119,6,0.4)] hover:scale-105">
<span className="relative z-10 flex items-center gap-3">
                Start Valuation 
                <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</span>
</button>
</div>

<div className="w-full max-w-lg mx-auto relative transition-all duration-500" style={{display: 'none'}} x-show="view === 'app'">

<div className="relative" x-show="!result">
<div className="glass-panel rounded-2xl p-8 relative overflow-hidden">
<div className="mb-8">
<h2 className="text-lg font-semibold text-white mb-1 flex items-center gap-2">
<i className="w-4 h-4 text-amber-500" data-lucide="home"></i>
                            Property Details
                        </h2>
<p className="text-neutral-500 text-xs">Enter specifications for instant analysis</p>
</div>
<div className="space-y-6">

<div className="bg-red-900/20 border border-red-500/20 rounded-lg p-3 flex items-start gap-3" style={{display: 'none'}} x-show="error">
<i className="w-4 h-4 text-red-500 mt-0.5" data-lucide="alert-circle"></i>
<span className="text-xs text-red-400" x-text="error"></span>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">Area (Sq Ft)</label>
<div className="relative group/input">
<input className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white focus:border-amber-500 focus:outline-none focus:bg-neutral-900/80 transition-all placeholder-neutral-700 font-medium" placeholder="2400" type="number" x-model="formData.area_sqft"/>
<i className="absolute right-3.5 top-3.5 w-4 h-4 text-neutral-700 pointer-events-none transition-colors group-focus-within/input:text-amber-500/50" data-lucide="ruler"></i>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">Bedrooms</label>
<div className="relative group/input">
<input className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white focus:border-amber-500 focus:outline-none focus:bg-neutral-900/80 transition-all placeholder-neutral-700 font-medium" placeholder="3" type="number" x-model="formData.beds"/>
<i className="absolute right-3.5 top-3.5 w-4 h-4 text-neutral-700 pointer-events-none transition-colors group-focus-within/input:text-amber-500/50" data-lucide="bed"></i>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">Bathrooms</label>
<div className="relative group/input">
<input className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white focus:border-amber-500 focus:outline-none focus:bg-neutral-900/80 transition-all placeholder-neutral-700 font-medium" placeholder="2" type="number" x-model="formData.baths"/>
<i className="absolute right-3.5 top-3.5 w-4 h-4 text-neutral-700 pointer-events-none transition-colors group-focus-within/input:text-amber-500/50" data-lucide="bath"></i>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">Furnishing</label>
<div className="relative group/input">
<select className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white focus:border-amber-500 focus:outline-none focus:bg-neutral-900/80 transition-all appearance-none cursor-pointer font-medium hover:bg-neutral-900/50" x-model="formData.furnishing">
<option className="bg-neutral-900" value="0">Unfurnished</option>
<option className="bg-neutral-900" value="1">Furnished</option>
</select>
<i className="absolute right-3.5 top-4 w-4 h-4 text-neutral-600 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="pt-6">
<button :disabled="!formData.area_sqft || loading" @click="predict()" className="w-full py-4 bg-white text-black rounded-lg font-bold text-xs tracking-widest uppercase hover:bg-amber-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/20" disabled="disabled">
<span x-show="!loading">Predict Price</span>
<i className="w-3.5 h-3.5" data-lucide="wand-2" x-show="!loading"></i>
<span className="flex items-center gap-2" style={{display: 'none'}} x-show="loading">
<i className="w-3.5 h-3.5 animate-spin" data-lucide="loader-2"></i> Processing
                            </span>
</button>
</div>
</div>
</div>
</div>

<div className="relative" style={{display: 'none'}} x-show="result" x-transition:enter="transition ease-out duration-500" x-transition:enter-end="opacity-100 scale-100 translate-y-0" x-transition:enter-start="opacity-0 scale-95 translate-y-4">
<div className="result-card rounded-2xl p-8 relative w-full overflow-hidden">

<div className="absolute -right-6 bottom-10 opacity-[0.03] pointer-events-none rotate-[-10deg]">
<i className="w-4 h-4 text-amber-500" data-lucide="home"></i>
</div>

<div className="flex justify-between items-start mb-8">
<div>
<div className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest mb-1 font-mono">
                                VALUATION ID: <span className="text-neutral-500" x-text="valuationId"></span>
</div>
<h2 className="text-xl font-bold text-white tracking-tight">Price Prediction</h2>
</div>
<button @click="resetForm()" className="w-8 h-8 flex items-center justify-center rounded-md bg-white/5 border border-white/10 hover:bg-white/10 text-neutral-500 hover:text-white transition-all">
<i className="w-4 h-4" data-lucide="rotate-cw"></i>
</button>
</div>

<div className="text-center mb-10 relative z-10">
<div className="flex items-center justify-center gap-1.5 mb-3">
<i className="w-4 h-4 text-amber-500 fill-amber-500/10" data-lucide="badge-check"></i>
<span className="text-[10px] font-bold text-amber-500 tracking-widest uppercase">Verified Estimate</span>
</div>
<div className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-3" x-text="formatMoney(currentDisplayPrice)">$0</div>
<div className="text-xs font-medium text-neutral-500">
                            Confidence Score: <span className="text-green-500 font-semibold">98.4%</span>
</div>
</div>

<div className="h-px w-full bg-white/5 mb-8"></div>

<div className="relative z-10">
<h3 className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-6">Price
                            Breakdown</h3>
<div className="space-y-5">

<div className="flex items-center gap-4">
<span className="text-xs text-neutral-400 w-16 font-medium">Area</span>
<div className="flex-grow h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-amber-600 rounded-full w-[55%]"></div>
</div>
<span className="text-xs text-neutral-300 font-mono w-8 text-right">55%</span>
</div>

<div className="flex items-center gap-4">
<span className="text-xs text-neutral-400 w-16 font-medium">Rooms</span>
<div className="flex-grow h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-amber-400 rounded-full w-[30%]"></div>
</div>
<span className="text-xs text-neutral-300 font-mono w-8 text-right">30%</span>
</div>

<div className="flex items-center gap-4">
<span className="text-xs text-neutral-400 w-16 font-medium">Amenities</span>
<div className="flex-grow h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-amber-900 rounded-full w-[15%]"></div>
</div>
<span className="text-xs text-neutral-300 font-mono w-8 text-right">15%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
