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
nour: {
black: '#020202',
panel: '#080808',
text: '#EDEDED',
dim: '#888888',
lux: '#E2E8F0', // Platinum/Silver for luxury
accent: '#D4FF00', // Electric Lime/Gold fusion
glass: 'rgba(255, 255, 255, 0.02)',
glassBorder: 'rgba(255, 255, 255, 0.06)'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
display: ['Syne', 'sans-serif'],
},
animation: {
'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 8s ease-in-out infinite',
'charge': 'charge 2s ease-out forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
charge: {
'0%': { width: '0%' },
'100%': { width: '100%' }
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
      

<div className="fixed inset-0 bg-noise z-0"></div>

<div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-nour-accent/5 blur-[120px] pointer-events-none z-0"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-900/5 blur-[120px] pointer-events-none z-0"></div>

<header className="fixed top-0 w-full z-50 px-6 py-6 transition-all duration-300">
<div className="max-w-7xl mx-auto">
<div className="glass-panel rounded-full px-6 py-3 flex justify-between items-center">
<a className="font-display font-bold text-xl tracking-tighter text-white flex items-center gap-2 group" href="#">
<span className="w-2 h-2 bg-nour-accent rounded-full group-hover:animate-ping"></span>
                    NØUR<span className="opacity-50 font-light">LUXUS</span>
</a>
<nav className="hidden md:flex gap-8 items-center">
<a className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-nour-dim hover:text-white transition-colors" href="#restoration">Protocol_01</a>
<a className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-nour-dim hover:text-white transition-colors" href="#longevity">Longevity</a>
<a className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-nour-dim hover:text-white transition-colors" href="#aesthetics">Aesthetics</a>
<a className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-nour-dim hover:text-white transition-colors" href="#shop">Acquire</a>
</nav>
<div className="flex items-center gap-4">
<span className="hidden md:block text-[0.6rem] font-mono text-nour-accent border border-nour-accent/20 px-2 py-1 rounded-full bg-nour-accent/5">
                        STATUS: DEGRADING
                    </span>
<button className="text-white hover:text-nour-accent transition-colors">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
</div>
</div>
</div>
</header>

<section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-20 overflow-hidden">
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

<div className="inline-flex items-center gap-3 mb-10 border border-white/10 bg-white/5 rounded-full px-4 py-1.5 backdrop-blur-sm animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nour-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-nour-accent"></span>
</span>
<span className="text-[0.6rem] font-mono uppercase tracking-widest text-gray-300">
                    Biological Clock: <span className="text-white">Unsynced</span>
</span>
</div>
<h1 className="font-display text-5xl md:text-8xl tracking-tighter leading-[0.9] font-medium mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 glow-text">
                Restore <br/>
<span className="font-light italic text-gray-400">Your Essence.</span>
</h1>
<p className="text-nour-dim max-w-lg mx-auto text-sm md:text-base leading-relaxed font-light mb-12 font-sans tracking-wide">
                The world's first adaptive longevity protocol designed to heal cellular degradation from <span className="text-white">0%</span> to <span className="text-nour-accent">100%</span>. Reverse visible aging and extend your timeline.
            </p>
<div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full mb-16">
<button className="group relative px-8 py-4 bg-nour-accent text-nour-black text-xs font-mono font-bold tracking-[0.2em] uppercase overflow-hidden rounded-sm transition-transform hover:scale-105">
<span className="relative z-10">Initiate Restoration</span>
<div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
</button>
<button className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
<span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
                    Watch The Process
                </button>
</div>

<div className="w-full max-w-md mx-auto glass-panel p-6 rounded-sm border-t border-white/10">
<div className="flex justify-between items-end mb-2">
<span className="text-[0.6rem] font-mono uppercase tracking-widest text-nour-dim">Cellular Integrity</span>
<span className="text-xs font-mono font-bold text-nour-accent">RECHARGING...</span>
</div>
<div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden charge-bar-container">
<div className="h-full bg-nour-accent w-[0%] animate-[charge_4s_ease-out_forwards_1s] charge-bar-fill"></div>
</div>
<div className="flex justify-between mt-2 text-[0.6rem] font-mono text-gray-600">
<span>0% (CRITICAL)</span>
<span className="text-white animate-pulse">100% (OPTIMAL)</span>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5 bg-nour-panel" id="restoration">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-display text-4xl tracking-tighter text-white mb-6">
                        From Deficit to <br/>
<span className="text-nour-accent">Abundance.</span>
</h2>
<p className="text-nour-dim font-light mb-8 text-sm leading-relaxed max-w-md">
                        Modern life drains your biological battery to critical levels. Our protocol doesn't just maintain; it rebuilds. We take you from a state of cellular exhaustion (0%) to peak regenerative performance (100%).
                    </p>
<div className="space-y-8 mt-12">

<div className="flex gap-4 group">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-gray-700 text-gray-500 flex items-center justify-center text-xs font-mono group-hover:border-nour-accent group-hover:text-nour-accent transition-colors">01</div>
<div className="h-12 w-px bg-gray-800 my-2 group-hover:bg-gray-700"></div>
</div>
<div>
<h4 className="text-white text-sm font-medium uppercase tracking-wide mb-1">Detoxify (0-30%)</h4>
<p className="text-xs text-gray-500 font-mono">Flush senescent cells and heavy metals.</p>
</div>
</div>

<div className="flex gap-4 group">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-gray-700 text-gray-500 flex items-center justify-center text-xs font-mono group-hover:border-nour-accent group-hover:text-nour-accent transition-colors">02</div>
<div className="h-12 w-px bg-gray-800 my-2 group-hover:bg-gray-700"></div>
</div>
<div>
<h4 className="text-white text-sm font-medium uppercase tracking-wide mb-1">Repair (30-70%)</h4>
<p className="text-xs text-gray-500 font-mono">Mitochondrial reboot and DNA methylation.</p>
</div>
</div>

<div className="flex gap-4 group">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-nour-accent bg-nour-accent text-black flex items-center justify-center text-xs font-mono shadow-[0_0_15px_rgba(212,255,0,0.4)]">03</div>
</div>
<div>
<h4 className="text-white text-sm font-medium uppercase tracking-wide mb-1">Optimize (70-100%)</h4>
<p className="text-xs text-gray-500 font-mono">Age reversal and cognitive expansion.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-nour-accent/10 to-transparent blur-[80px] rounded-full"></div>
<div className="relative z-10 glass-panel aspect-[4/5] rounded-sm p-1 border border-white/10 overflow-hidden">
<img alt="Skin Texture" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000" src="https://images.unsplash.com/photo-1535585209827-a15fcdbc2c2d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
<div className="flex justify-between items-end">
<div>
<p className="text-[0.6rem] font-mono text-nour-accent uppercase mb-1">Visual Age</p>
<p className="text-2xl text-white font-display tracking-tight">-12.4 Years</p>
</div>
<span className="iconify text-nour-accent animate-pulse" data-icon="lucide:activity" data-width="24"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 md:px-6" id="aesthetics">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<span className="text-[0.65rem] font-mono uppercase tracking-[0.3em] text-nour-dim border border-white/5 px-3 py-1 rounded-full">Tangible Results</span>
<h2 className="mt-6 font-display text-4xl md:text-6xl tracking-tighter text-white">
                    Look Younger. <br/>
<span className="italic font-serif text-gray-500">Live Longer.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1">

<div className="group relative bg-[#050505] border border-white/5 p-8 h-[400px] flex flex-col justify-between overflow-hidden hover:bg-[#0a0a0a] transition-colors">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
<span className="iconify text-nour-accent" data-icon="lucide:sparkles" data-width="24"></span>
</div>
<div>
<h3 className="font-display text-xl text-white mb-2">Radiance</h3>
<p className="text-xs text-gray-500 font-mono leading-relaxed">Restore collagen density and skin elasticity from within. The "Luxus Glow" is not makeup; it is cellular health.</p>
</div>
<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-nour-accent/50 transition-all"></div>
</div>

<div className="group relative bg-[#050505] border-y md:border-y-0 md:border-x border-white/5 p-8 h-[400px] flex flex-col justify-between overflow-hidden hover:bg-[#0a0a0a] transition-colors">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
<span className="iconify text-nour-accent" data-icon="lucide:hourglass" data-width="24"></span>
</div>
<div>
<h3 className="font-display text-xl text-white mb-2">Time Dilation</h3>
<p className="text-xs text-gray-500 font-mono leading-relaxed">Clinically proven to lengthen telomeres. We literally buy you more time on this planet.</p>
</div>
<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-nour-accent/50 transition-all"></div>
</div>

<div className="group relative bg-[#050505] border border-white/5 p-8 h-[400px] flex flex-col justify-between overflow-hidden hover:bg-[#0a0a0a] transition-colors">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
<span className="iconify text-nour-accent" data-icon="lucide:zap" data-width="24"></span>
</div>
<div>
<h3 className="font-display text-xl text-white mb-2">Vitality 100%</h3>
<p className="text-xs text-gray-500 font-mono leading-relaxed">Infinite energy. No crashes. Just pure, clean ATP production for mental and physical dominance.</p>
</div>
<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-nour-accent/50 transition-all"></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-6 border-t border-white/5 bg-[#030303]" id="shop">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<h2 className="font-display text-3xl md:text-4xl tracking-tighter text-white mb-2">The Elixirs</h2>
<p className="font-mono text-xs text-nour-dim uppercase tracking-widest">Limited allocation batches</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-nour-accent transition-colors"><span className="iconify" data-icon="lucide:chevron-left"></span></button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-nour-accent transition-colors"><span className="iconify" data-icon="lucide:chevron-right"></span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-[#080808] border border-white/5 rounded-sm overflow-hidden mb-6">
<div className="absolute inset-0 flex items-center justify-center">

<div className="w-24 h-48 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-md rounded-full border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_30px_rgba(212,255,0,0.2)] transition-all duration-500"></div>
</div>
<div className="absolute top-4 right-4 text-[0.6rem] font-mono text-nour-accent border border-nour-accent/30 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">STEP 01</div>
<div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/80 backdrop-blur-md border-t border-white/10 flex justify-between items-center">
<span className="text-xs font-mono text-white">ADD_TO_CART</span>
<span className="iconify text-nour-accent" data-icon="lucide:plus"></span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-display text-white tracking-tight">NØUR PURIFY</h3>
<p className="text-[0.65rem] font-mono text-gray-500 uppercase tracking-wide mt-1">Deep Tissue Detox Agent</p>
</div>
<span className="font-mono text-sm text-white">$125</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-[#080808] border border-white/5 rounded-sm overflow-hidden mb-6">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-24 h-48 bg-gradient-to-b from-nour-accent/20 to-transparent backdrop-blur-md rounded-full border border-nour-accent/20 shadow-[0_0_30px_rgba(212,255,0,0.1)] group-hover:shadow-[0_0_40px_rgba(212,255,0,0.3)] transition-all duration-500"></div>
</div>
<div className="absolute top-4 right-4 text-[0.6rem] font-mono text-nour-accent border border-nour-accent/30 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">STEP 02</div>
<div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/80 backdrop-blur-md border-t border-white/10 flex justify-between items-center">
<span className="text-xs font-mono text-white">ADD_TO_CART</span>
<span className="iconify text-nour-accent" data-icon="lucide:plus"></span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-display text-white tracking-tight">NØUR REVIVE</h3>
<p className="text-[0.65rem] font-mono text-gray-500 uppercase tracking-wide mt-1">NAD+ Booster Complex</p>
</div>
<span className="font-mono text-sm text-white">$185</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-[#080808] border border-white/5 rounded-sm overflow-hidden mb-6">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 rounded-full border border-white/10 bg-gradient-to-tr from-white/5 to-transparent backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
<div className="w-24 h-24 rounded-full bg-white/5 blur-md"></div>
</div>
</div>
<div className="absolute top-4 right-4 text-[0.6rem] font-mono text-nour-accent border border-nour-accent/30 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">STEP 03</div>
<div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/80 backdrop-blur-md border-t border-white/10 flex justify-between items-center">
<span className="text-xs font-mono text-white">ADD_TO_CART</span>
<span className="iconify text-nour-accent" data-icon="lucide:plus"></span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-display text-white tracking-tight">NØUR ETERNITY</h3>
<p className="text-[0.65rem] font-mono text-gray-500 uppercase tracking-wide mt-1">Telomere Extension Kit</p>
</div>
<span className="font-mono text-sm text-white">$250</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black text-white pt-24 pb-12 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center justify-center text-center mb-20">
<a className="font-display font-bold text-4xl tracking-tighter text-white mb-6" href="#">NØUR<span className="font-light opacity-50">LUXUS</span></a>
<p className="text-nour-dim max-w-sm font-mono text-xs leading-relaxed">
                    The intersection of luxury aesthetics and radical life extension. Welcome to the 100%.
                </p>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[0.6rem] font-mono uppercase tracking-widest text-gray-600">
<div>
                    © 2025 NØUR Luxus. Zurich / Tokyo / New York.
                </div>
<div className="flex gap-8 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Lab Results</a>
<a className="hover:text-white transition-colors" href="#">Manifesto</a>
<a className="hover:text-white transition-colors" href="#">Concierge</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
