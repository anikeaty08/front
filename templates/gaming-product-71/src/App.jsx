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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-semibold text-lg tracking-tighter text-white">VELOCITY</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
<span className="hover:text-white transition-colors cursor-pointer">Specs</span>
<span className="hover:text-white transition-colors cursor-pointer">Technology</span>
<span className="hover:text-white transition-colors cursor-pointer">Reviews</span>
</div>
<button className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">
                Pre-order
            </button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] glow-point pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

<div className="flex flex-col items-start space-y-8">
<div className="inline-flex items-center border border-zinc-800 bg-zinc-900/50 rounded-full px-3 py-1">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-400 tracking-wide uppercase">New Release</span>
</div>
<h1 className="text-6xl md:text-8xl font-medium tracking-tighter text-white leading-[0.9]">
                    Absolute <br/>
<span className="text-zinc-500">Precision.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-md leading-relaxed">
                    Engineered for the 0.1%. Experience zero latency tracking and a featherweight chassis designed for pure competitive dominance.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-sm hover:bg-zinc-200 transition-all overflow-hidden">
<span className="relative z-10">Buy Now - $129</span>
</button>
<button className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white rounded-full font-medium text-sm hover:bg-zinc-800 transition-all">
                        View Features
                    </button>
</div>
</div>

<div className="relative flex justify-center lg:justify-end">
<div className="relative w-full max-w-lg aspect-square">

<div className="absolute inset-0 border border-white/5 rounded-full scale-90"></div>
<div className="absolute inset-0 border border-white/5 rounded-full scale-75 border-dashed animate-[spin_60s_linear_infinite]"></div>
<img alt="Velocity X1 Gaming Mouse" className="w-full h-full object-contain drop-shadow-2xl animate-float grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&amp;w=1928&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 relative border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-4">Engineering Artistry</h2>
<p className="text-zinc-500">Every angle optimized for grip and glide.</p>
</div>
<div className="relative flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">

<div className="flex flex-col gap-16 w-full md:w-1/3 order-2 md:order-1 items-start md:items-end text-left md:text-right">
<div className="group cursor-default">
<div className="text-xs font-semibold tracking-widest text-cyan-500 uppercase mb-2">Structure</div>
<h3 className="text-xl text-white font-medium mb-1">Magnesium Alloy Frame</h3>
<p className="text-sm text-zinc-500">Ultra-lightweight skeleton at 42g.</p>
<div className="h-[1px] w-12 bg-zinc-800 mt-4 md:ml-auto group-hover:w-full group-hover:bg-cyan-500 transition-all duration-500"></div>
</div>
<div className="group cursor-default">
<div className="text-xs font-semibold tracking-widest text-cyan-500 uppercase mb-2">Tactile</div>
<h3 className="text-xl text-white font-medium mb-1">Optical Switches</h3>
<p className="text-sm text-zinc-500">0.2ms actuation with no debounce delay.</p>
<div className="h-[1px] w-12 bg-zinc-800 mt-4 md:ml-auto group-hover:w-full group-hover:bg-cyan-500 transition-all duration-500"></div>
</div>
</div>

<div className="w-full md:w-1/3 order-1 md:order-2 flex justify-center py-10 md:py-0">
<img alt="Top View" className="w-64 md:w-full object-contain rotate-180 drop-shadow-[0_0_50px_rgba(255,255,255,0.05)]" src="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="flex flex-col gap-16 w-full md:w-1/3 order-3 items-start">
<div className="group cursor-default">
<div className="text-xs font-semibold tracking-widest text-cyan-500 uppercase mb-2">Sensor</div>
<h3 className="text-xl text-white font-medium mb-1">Focus Pro 30K</h3>
<p className="text-sm text-zinc-500">Pixel-perfect tracking on glass.</p>
<div className="h-[1px] w-12 bg-zinc-800 mt-4 group-hover:w-full group-hover:bg-cyan-500 transition-all duration-500"></div>
</div>
<div className="group cursor-default">
<div className="text-xs font-semibold tracking-widest text-cyan-500 uppercase mb-2">Connectivity</div>
<h3 className="text-xl text-white font-medium mb-1">HyperSpeed Wireless</h3>
<p className="text-sm text-zinc-500">Faster than wired with 4000Hz polling.</p>
<div className="h-[1px] w-12 bg-zinc-800 mt-4 group-hover:w-full group-hover:bg-cyan-500 transition-all duration-500"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black px-6">
<div className="max-w-7xl mx-auto">
<div className="mb-12">
<h2 className="text-4xl font-medium tracking-tighter text-white">Performance Metrics</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 rounded-3xl relative overflow-hidden group border border-zinc-900 bg-zinc-900/30">
<div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<img alt="Sensor" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 p-8 z-20">
<div className="text-cyan-400 font-mono text-xs mb-2 tracking-widest uppercase">Precision</div>
<h3 className="text-2xl text-white font-medium mb-2 tracking-tight">30,000 DPI Optical Sensor</h3>
<p className="text-zinc-400 text-sm max-w-sm">Flawless tracking performance on a wide variety of surfaces including glass.</p>
</div>
</div>

<div className="rounded-3xl relative overflow-hidden group border border-zinc-900 bg-zinc-900/30">
<div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<img alt="Ergonomics" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1629429408209-1f912961dbd8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 z-20">
<h3 className="text-xl text-white font-medium mb-1 tracking-tight">Claw &amp; Palm Grip</h3>
<p className="text-zinc-500 text-sm">Sculpted for comfort.</p>
</div>
</div>

<div className="rounded-3xl relative overflow-hidden group border border-zinc-900 bg-zinc-900/30">
<div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
<img alt="Lighting" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1595327656903-2f54e37ce09b?q=80&amp;w=1935&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 z-20">
<h3 className="text-xl text-white font-medium mb-1 tracking-tight">Chroma Sync</h3>
<p className="text-zinc-500 text-sm">16.8M colors dynamic lighting.</p>
</div>
</div>

<div className="md:col-span-2 rounded-3xl relative overflow-hidden group border border-zinc-900 bg-zinc-900/30">
<div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<img alt="Tech" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 z-20">
<div className="text-cyan-400 font-mono text-xs mb-2 tracking-widest uppercase">Endurance</div>
<h3 className="text-2xl text-white font-medium mb-2 tracking-tight">90 Hours Battery Life</h3>
<p className="text-zinc-400 text-sm max-w-sm">Play for days. Fast charge for just 15 minutes to get 10 hours of gameplay.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-950">
<div className="max-w-5xl mx-auto px-6 text-center">
<p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-8">Community Verified</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

<div className="p-6 bg-zinc-900/20 rounded-2xl border border-white/5">
<p className="text-zinc-300 text-sm leading-relaxed mb-4">"The tracking on glass pads is phenomenal. It's the only mouse I'll use for tournaments now."</p>
<div className="flex flex-col items-center">
<span className="text-white font-medium text-sm">Alex 'S1mple' K.</span>
<span className="text-zinc-500 text-xs mt-1">Pro Valorant Player</span>
</div>
</div>

<div className="p-6 bg-zinc-900/20 rounded-2xl border border-white/5">
<p className="text-zinc-300 text-sm leading-relaxed mb-4">"Lighter than air, yet feels incredibly solid. The optical switches are a game changer."</p>
<div className="flex flex-col items-center">
<span className="text-white font-medium text-sm">Sarah Jenkins</span>
<span className="text-zinc-500 text-xs mt-1">Tech Reviewer</span>
</div>
</div>

<div className="p-6 bg-zinc-900/20 rounded-2xl border border-white/5">
<p className="text-zinc-300 text-sm leading-relaxed mb-4">"Battery life is insane. I charged it once this month. The shape fits my hand perfectly."</p>
<div className="flex flex-col items-center">
<span className="text-white font-medium text-sm">David Chen</span>
<span className="text-zinc-500 text-xs mt-1">Competitive Gamer</span>
</div>
</div>
</div>
<div className="flex flex-col items-center gap-4">
<div className="text-2xl font-semibold text-white tracking-tight">
                    5.0 / 5.0 Rating
                </div>
<p className="text-zinc-400 text-sm">Trusted by over 15,000 professional gamers worldwide.</p>
<div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 mt-4"></div>
</div>
<div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
<p>© 2024 Velocity Gaming. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-400" href="#">Privacy</a>
<a className="hover:text-zinc-400" href="#">Terms</a>
<a className="hover:text-zinc-400" href="#">Support</a>
</div>
</div>
</div>
</section>

    </>
  );
}
