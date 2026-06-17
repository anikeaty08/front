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
50: '#f0f9ff',
500: '#6366f1',
950: '#020617',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div></div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-brand-950/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
<span className="font-semibold text-lg tracking-tighter">L</span>
</div>
<span className="text-white font-medium tracking-tight text-lg group-hover:opacity-80 transition-opacity">LUMINA</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Products</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Technology</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Support</a>
</div>

<div className="flex items-center gap-4">
<button className="text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="h-4 w-px bg-white/10"></div>
<button className="relative text-slate-400 hover:text-white transition-colors group">
<iconify-icon icon="solar:cart-large-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
</button>
</div>
</div>
</nav>

<main className="relative min-h-screen pt-24 pb-12 flex items-center overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] opacity-50 mix-blend-screen"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] opacity-30"></div>
</div>
<div className="container max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="flex flex-col items-start space-y-8">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-medium text-indigo-300 border-indigo-500/20 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    New Series X Gen 2
                </div>

<div className="space-y-4">
<h1 className="text-5xl lg:text-7xl font-medium text-white tracking-tighter leading-[1.1]">
                        Sound that 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-white">feels infinite.</span>
</h1>
<p className="text-lg text-slate-400 max-w-md leading-relaxed font-light">
                        Experience audio with zero distortion. Crafted with aerospace-grade aluminum and our proprietary adaptive noise cancellation.
                    </p>
</div>

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4">
<div>
<p className="text-sm text-slate-500 font-medium mb-1">Total price</p>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-medium text-white tracking-tight">$349</span>
<span className="text-lg text-slate-600 line-through font-normal">$429</span>
</div>
</div>
<div className="flex items-center gap-3 w-full sm:w-auto">
<button className="group relative px-8 py-3 bg-white text-black text-sm font-medium rounded-full transition-all hover:bg-slate-200 active:scale-95 flex items-center gap-2">
                            Add to Cart
                            <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:cart-plus-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="px-8 py-3 text-sm font-medium text-white rounded-full border border-white/10 hover:bg-white/5 transition-all active:scale-95">
                            View Specs
                        </button>
</div>
</div>

<div className="pt-8 flex items-center gap-6 text-slate-500 text-xs">
<div className="flex items-center gap-2">
<div className="p-1 rounded-full bg-green-500/10 text-green-400">
<iconify-icon icon="solar:verified-check-linear" width="14"></iconify-icon>
</div>
<span>2-Year Warranty</span>
</div>
<div className="flex items-center gap-2">
<div className="p-1 rounded-full bg-blue-500/10 text-blue-400">
<iconify-icon icon="solar:box-linear" width="14"></iconify-icon>
</div>
<span>Free Shipping</span>
</div>
<div className="flex items-center gap-2">
<div className="p-1 rounded-full bg-purple-500/10 text-purple-400">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
</div>
<span>4.9/5 Rating</span>
</div>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center group">

<div className="animate-[spin_20s_linear_infinite] w-[120%] h-[120%] border-white/5 border rounded-full absolute"></div>
<div className="absolute w-[80%] h-[80%] border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

<div className="aspect-[4/5] glass-panel flex flex-col overflow-hidden shadow-indigo-500/10 transition-transform duration-500 group-hover:scale-[1.01] w-full max-w-md rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl justify-between">

<div className="flex justify-between items-start z-10">
<div className="">
<p className="text-xs text-indigo-300 font-medium tracking-widest uppercase">Lumina Series</p>
<h3 className="text-white font-medium text-xl mt-1 tracking-tight">Model X Black</h3>
</div>
<iconify-icon className="text-white/20" icon="solar:soundwave-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

<div className="absolute w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>

<img alt="Headphones" className="relative w-72 h-auto drop-shadow-2xl z-10 object-contain rotate-6 hover:rotate-0 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66d79169-f653-4590-a14b-fcaba74f8880_1600w.png" style={{}}/>
</div>

<div className="grid grid-cols-3 z-10 pt-48 gap-x-2 gap-y-2">
<div className="bg-white/5 rounded-2xl p-3 backdrop-blur-sm border border-white/5 text-center">
<iconify-icon className="text-indigo-300 mb-2" icon="solar:battery-charge-linear" width="20"></iconify-icon>
<p className="text-xs text-slate-400">40h</p>
</div>
<div className="bg-white/5 rounded-2xl p-3 backdrop-blur-sm border border-white/5 text-center">
<iconify-icon className="text-indigo-300 mb-2" icon="solar:bluetooth-linear" width="20"></iconify-icon>
<p className="text-xs text-slate-400">5.3</p>
</div>
<div className="bg-white/5 rounded-2xl p-3 backdrop-blur-sm border border-white/5 text-center">
<iconify-icon className="text-indigo-300 mb-2" icon="solar:microphone-3-linear" width="20"></iconify-icon>
<p className="text-xs text-slate-400">ANC</p>
</div>
</div>
</div>

<div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 p-2 rounded-full glass-panel hidden lg:flex">
<button className="w-6 h-6 rounded-full bg-slate-900 ring-2 ring-white/20 ring-offset-2 ring-offset-transparent"></button>
<button className="w-6 h-6 rounded-full bg-slate-400 hover:ring-2 hover:ring-white/20 hover:ring-offset-2 hover:ring-offset-transparent transition-all"></button>
<button className="w-6 h-6 rounded-full bg-indigo-500 hover:ring-2 hover:ring-white/20 hover:ring-offset-2 hover:ring-offset-transparent transition-all"></button>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full border-t border-white/5 py-6 bg-brand-950/50 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-slate-600">
<p className="text-xs font-medium uppercase tracking-widest hidden md:block">Audio Engineered For</p>
<div className="flex gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon icon="solar:monitor-camera-linear" width="24"></iconify-icon>
<iconify-icon icon="solar:gamepad-linear" width="24"></iconify-icon>
<iconify-icon icon="solar:music-note-slider-linear" width="24"></iconify-icon>
<iconify-icon icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</main>

    </>
  );
}
