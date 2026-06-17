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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 ios-glass">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
<i className="text-white w-5 h-5" data-lucide="layers"></i>
</div>
<span className="text-xl font-medium tracking-tight text-white">Aura</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Platform</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Resources</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-white hover:text-slate-300 transition-colors" href="#">Sign in</a>
<button className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-200 transition-all active:scale-95">
                    Start Building
                </button>
</div>

<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<main className="relative pt-32 pb-20 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none z-0 opacity-40">
<div className="absolute top-[10%] left-[20%] w-96 h-96 bg-indigo-600 rounded-full blur-[120px] animate-pulse"></div>
<div className="absolute top-[30%] right-[20%] w-[500px] h-[500px] bg-slate-700 rounded-full blur-[140px]"></div>
<div className="absolute top-[50%] left-[40%] w-80 h-80 bg-indigo-900 rounded-full blur-[100px]"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full ios-glass-light mb-8 hover:bg-white/10 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-medium text-indigo-200">New: iOS Design Kit v2.0</span>
</div>

<h1 className="text-6xl md:text-8xl font-semibold tracking-tight text-white mb-8 max-w-4xl leading-[1.1]">
                Spatial Design <br/>
<span className="text-slate-500">for the Future.</span>
</h1>

<p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 font-normal leading-relaxed">
                Elevate your digital presence with adaptive interfaces that feel alive. Fluid animations, depth-based layouts, and haptic feedback integration.
            </p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="sm:w-auto hover:bg-indigo-400 transition-all active:scale-95 flex text-base font-medium text-white bg-indigo-500 w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)] gap-x-2 gap-y-2 items-center justify-center">
<i className="w-4 h-4 fill-white text-white" data-lucide="zap"></i>
<span className="">Start Creating</span>
</button>
<button className="w-full sm:w-auto ios-glass-light hover:bg-white/10 text-white px-8 py-4 rounded-full text-base font-medium transition-all active:scale-95 flex items-center justify-center gap-2">
<span>View Showcase</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="mt-24 flex items-center gap-4 text-slate-500 opacity-60">
<div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-slate-700"></div>
<div className="flex flex-col items-center gap-2">
<span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
<div className="border border-slate-600 rounded-full w-6 h-9 flex justify-center py-2">
<div className="w-1 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
</div>
</div>
<div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-slate-700"></div>
</div>

<div className="mt-20 w-full">
<p className="text-sm text-slate-500 mb-8 font-medium">Trusted by forward-thinking teams</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<i className="w-6 h-6 rotate-180 fill-current" data-lucide="triangle"></i>
<span className="text-xl font-semibold tracking-tight">Vortex</span>
</div>
<div className="flex items-center gap-2">
<i className="w-6 h-6 text-indigo-400" data-lucide="circle-dashed"></i>
<span className="text-xl font-semibold tracking-tight">Orbit</span>
</div>
<div className="flex items-center gap-2">
<i className="w-6 h-6 fill-current" data-lucide="hexagon"></i>
<span className="text-xl font-semibold tracking-tight">Cube</span>
</div>
<div className="flex items-center gap-2">
<i className="w-6 h-6 text-indigo-400" data-lucide="sparkles"></i>
<span className="text-xl font-semibold tracking-tight">Nova</span>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Built for the spatial era</h2>
<p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    Redefine how users interact with your applications through depth, scale, and immersion.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="ios-glass p-8 rounded-[2rem] hover:bg-white/[0.08] transition-all duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-indigo-400" data-lucide="smartphone"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Adaptive Haptics</h3>
<p className="text-slate-400 leading-relaxed">
                        Feedback that feels natural. Simulate real-world textures through advanced vibration patterns.
                    </p>
</div>

<div className="ios-glass p-8 rounded-[2rem] hover:bg-white/[0.08] transition-all duration-300 group md:col-span-2 relative overflow-hidden">

<div className="absolute right-0 top-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
<div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 h-full">
<div className="flex-1">
<div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-indigo-400" data-lucide="layers-2"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Depth Engine</h3>
<p className="text-slate-400 leading-relaxed mb-6">
                                Automatically calculate z-index layers and shadow diffusion based on ambient lighting conditions in real-time.
                            </p>
<a className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium text-sm" href="#">
                                Learn more <i className="w-4 h-4 ml-1" data-lucide="chevron-right"></i>
</a>
</div>

<div className="w-full md:w-1/2 h-48 bg-black/40 rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
<div className="w-32 h-32 bg-indigo-600 rounded-2xl shadow-2xl rotate-12 flex items-center justify-center opacity-80 backdrop-blur-md">
<i className="w-12 h-12 text-white" data-lucide="box"></i>
</div>
</div>
</div>
</div>

<div className="ios-glass p-8 rounded-[2rem] hover:bg-white/[0.08] transition-all duration-300 group md:col-span-3 lg:col-span-1">
<div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-indigo-400" data-lucide="fingerprint"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Privacy First</h3>
<p className="text-slate-400 leading-relaxed">
                        Biometric authentication integrated directly into the flow without breaking immersion.
                    </p>
</div>

<div className="ios-glass p-8 rounded-[2rem] hover:bg-white/[0.08] transition-all duration-300 group md:col-span-3 lg:col-span-2 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-indigo-400" data-lucide="activity"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Real-time Performance</h3>
<p className="text-slate-400 leading-relaxed">
                            60fps guaranteed on all devices. Our engine optimizes rendering paths automatically.
                        </p>
</div>

<div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
<div>
<div className="text-2xl font-semibold text-white">0.02s</div>
<div className="text-xs text-slate-500 mt-1">Latency</div>
</div>
<div>
<div className="text-2xl font-semibold text-white">99.9%</div>
<div className="text-xs text-slate-500 mt-1">Uptime</div>
</div>
<div>
<div className="text-2xl font-semibold text-white">5M+</div>
<div className="text-xs text-slate-500 mt-1">Users</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative">
<div className="max-w-7xl mx-auto px-6">

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-20 items-center">

<div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 group">
<img alt="Team meeting" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>

<div className="flex flex-col justify-center">
<div className="inline-flex items-center gap-2 self-start border border-white/20 rounded-full px-4 py-1.5 mb-8">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
<span className="text-xs font-medium text-white tracking-wide">Reviews</span>
</div>
<h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-6">
                        Client Reviews
                    </h2>
<p className="text-lg text-slate-400 font-normal leading-relaxed mb-10 max-w-lg">
                        Real feedback from clients who trusted my design expertise to elevate their brands successfully.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="border border-white/20 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all active:scale-95">
                            Book a Free Call
                        </button>
<button className="border border-white/20 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white/10 transition-all active:scale-95">
                            See Services
                        </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white/[0.03] border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors">
<div className="flex items-center gap-4 mb-6">
<img alt="Jona Carter" className="w-12 h-12 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
<div>
<h4 className="text-lg font-medium text-white leading-tight">Jona Carter</h4>
<p className="text-xs text-slate-500 mt-0.5">Founder of EcoLux</p>
</div>
</div>
<div className="w-full h-px bg-white/10 mb-6"></div>
<p className="text-slate-400 text-sm leading-relaxed mb-6 min-h-[80px]">
                        "Every project Meily touches turns into a perfect blend of design and purpose. She crafted packaging that reflected our eco-friendly mission while making our products stand out on the shelves."
                    </p>
<div className="flex items-center gap-2">
<span className="text-white font-medium">5.0</span>
<div className="flex gap-0.5">
<i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i>
</div>
</div>
</div>

<div className="bg-white/[0.03] border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors">
<div className="flex items-center gap-4 mb-6">
<img alt="Sofia Toms" className="w-12 h-12 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
<div>
<h4 className="text-lg font-medium text-white leading-tight">Sofia Toms</h4>
<p className="text-xs text-slate-500 mt-0.5">Founder at GreenK Studios</p>
</div>
</div>
<div className="w-full h-px bg-white/10 mb-6"></div>
<p className="text-slate-400 text-sm leading-relaxed mb-6 min-h-[80px]">
                        "Meily's designs speak for themselves — bold, strategic, and impactful. She took the time to understand our brand, delivering packaging concepts that resonated with our target audience and boosted our product's visibility."
                    </p>
<div className="flex items-center gap-2">
<span className="text-white font-medium">5.0</span>
<div className="flex gap-0.5">
<i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i>
</div>
</div>
</div>

<div className="bg-white/[0.03] border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors">
<div className="flex items-center gap-4 mb-6">
<img alt="Richards Johnson" className="w-12 h-12 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
<div>
<h4 className="text-lg font-medium text-white leading-tight">Richards Johnson</h4>
<p className="text-xs text-slate-500 mt-0.5">Creative Director &amp; Lead Designer</p>
</div>
</div>
<div className="w-full h-px bg-white/10 mb-6"></div>
<p className="text-slate-400 text-sm leading-relaxed mb-6 min-h-[80px]">
                        "Working with Meily was a seamless experience. Her ability to merge creativity with functionality resulted in designs that not only looked stunning but also drove meaningful engagement. Highly recommended!"
                    </p>
<div className="flex items-center gap-2">
<span className="text-white font-medium">5.0</span>
<div className="flex gap-0.5">
<i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-sm text-slate-500">© 2024 Aura Design Inc. All rights reserved.</span>
<div className="flex gap-6 text-slate-500">
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
</footer>


    </>
  );
}
