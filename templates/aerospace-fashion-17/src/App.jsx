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
aero: {
base: '#030303',
panel: '#0a0a0a',
border: '#1f1f1f',
orange: '#FF6600',
yellow: '#FFB800',
teal: '#00F0FF'
}
},
spacing: {
'128': '32rem',
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
      

<div className="fixed inset-0 scanline z-50 opacity-10 pointer-events-none mix-blend-overlay"></div>

<nav className="fixed top-0 w-full z-40 border-b border-aero-border bg-aero-base/80 backdrop-blur-md">
<div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 bg-aero-yellow flex items-center justify-center text-black font-semibold text-xs tracking-tighter">AC</div>
<span className="font-mono text-sm tracking-widest text-neutral-400 group-hover:text-white transition-colors">AEROCORE <span className="text-[10px] bg-neutral-800 px-1 py-0.5 rounded text-neutral-400">v2.0</span></span>
</a>
<div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Products</a>
<a className="hover:text-white transition-colors" href="#">Collections</a>
<a className="hover:text-white transition-colors" href="#">Technology</a>
<a className="hover:text-white transition-colors" href="#">Studio</a>
</div>
</div>
<div className="flex items-center gap-6 text-neutral-400">
<button className="hover:text-white"><i className="w-5 h-5" data-lucide="search"></i></button>
<button className="hover:text-white"><i className="w-5 h-5" data-lucide="user"></i></button>
<button className="flex items-center gap-2 hover:text-white group">
<span className="text-xs uppercase tracking-wider font-mono hidden sm:block">Cart (0)</span>
<i className="w-5 h-5 group-hover:text-aero-orange transition-colors" data-lucide="shopping-bag"></i>
</button>
</div>
</div>
</nav>
<main className="pt-24 pb-20 px-4 md:px-6 max-w-[1600px] mx-auto">

<div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4 h-auto lg:h-[75vh] min-h-[600px]">

<div className="lg:col-span-3 relative rounded-sm overflow-hidden group border border-aero-border min-h-[500px] lg:min-h-full">
<div className="absolute inset-0 bg-neutral-900">
<img alt="Futuristic Pilot" className="w-full h-full object-cover opacity-80 mix-blend-overlay scale-100 group-hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-aero-orange/20 to-blue-500/10 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
</div>

<div className="absolute top-6 left-6 flex items-center gap-4">
<div className="flex flex-col">
<span className="text-[10px] font-mono text-aero-orange uppercase tracking-widest">System Status</span>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs text-neutral-300 font-mono">Online / Active</span>
</div>
</div>
</div>
<div className="absolute top-6 right-6">
<div className="bg-black/40 backdrop-blur border border-white/10 rounded-full py-1 pl-1 pr-4 flex items-center gap-3">
<img className="w-8 h-8 rounded-full grayscale border border-white/20" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=150&amp;h=150&amp;fit=crop"/>
<div className="flex flex-col">
<span className="text-[9px] uppercase text-neutral-400 tracking-wider">Featured</span>
<span className="text-xs font-medium text-white">Velocity Jacket</span>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
<div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-white mb-2 leading-[0.9]">
                                DEFY <span className="text-transparent bg-clip-text bg-gradient-to-br from-neutral-400 to-neutral-700">GRAVITY</span>
</h1>
<div className="flex items-center gap-6 mt-8">
<button className="bg-aero-yellow hover:bg-white text-black px-8 py-3 text-sm font-semibold tracking-tight transition-colors flex items-center gap-2">
                                    SHOP NOW <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<a className="text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-aero-orange border-b border-transparent hover:border-aero-orange transition-all pb-0.5" href="#">View Tech Specs</a>
</div>
</div>
<div className="flex items-end gap-4">
<span className="text-6xl font-light text-aero-yellow tracking-tighter">01</span>
<span className="text-2xl font-light text-neutral-600 mb-2">/ 03</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1 grid grid-cols-1 gap-4 h-full">

<div className="relative h-full bg-neutral-900 border border-aero-border rounded-sm overflow-hidden group p-6 flex flex-col justify-between">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626246960105-0720464f1419?auto=format&amp;fit=crop&amp;q=80')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
<div className="relative z-10 flex justify-between items-start">
<span className="text-[10px] font-mono border border-white/20 px-2 py-1 rounded text-white bg-black/30 backdrop-blur">LIMITED OFFER</span>
<i className="w-4 h-4 text-neutral-500" data-lucide="tag"></i>
</div>
<div className="relative z-10">
<div className="text-4xl font-semibold text-white tracking-tight mb-1">-50%</div>
<p className="text-xs text-neutral-400 mb-6 leading-relaxed">End of season clearance on all performance footwear.</p>
<a className="flex items-center justify-between w-full border-t border-white/10 pt-4 group/link" href="#">
<span className="text-xs font-medium text-white">View Offers</span>
<i className="w-4 h-4 text-white transform group-hover/link:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="relative h-full bg-neutral-900 border border-aero-border rounded-sm overflow-hidden group">
<img className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-lg font-medium text-white mb-1">New Arrivals</h3>
<p className="text-xs text-neutral-400 mb-4">The new technical fleece collection.</p>
<button className="w-full bg-white text-black py-2.5 text-xs font-semibold hover:bg-neutral-200 transition-colors">EXPLORE</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-min">

<div className="lg:col-span-3 bg-aero-panel border border-aero-border p-6 rounded-sm flex flex-col justify-between h-48 hover:border-neutral-600 transition-colors">
<div className="flex justify-between items-start">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-black overflow-hidden"><img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/></div>
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-black overflow-hidden"><img className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/></div>
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-black flex items-center justify-center text-[10px] text-neutral-400">+4</div>
</div>
<span className="font-mono text-neutral-600 text-xs">01</span>
</div>
<div>
<h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-1">Flight Crew</h3>
<p className="text-xs text-neutral-500">Elite pilots &amp; engineers.</p>
</div>
</div>

<div className="lg:col-span-4 bg-aero-panel border border-aero-border p-6 rounded-sm flex flex-col justify-between h-48 relative overflow-hidden">
<div className="absolute right-0 top-0 p-4 opacity-20">
<i className="w-16 h-16 text-white" data-lucide="thermometer"></i>
</div>
<div className="flex justify-between">
<i className="w-5 h-5 text-neutral-400" data-lucide="waves"></i>
<span className="font-mono text-neutral-600 text-xs">02</span>
</div>
<div>
<h3 className="text-sm font-semibold text-white mb-2">Thermodynamic Analysis</h3>
<p className="text-xs text-neutral-500 mb-4 max-w-[80%]">Explore our most recent stress tests on the Mark IV heat shield composites.</p>
<a className="text-[10px] font-mono border border-white/20 px-3 py-1.5 rounded text-neutral-300 hover:bg-white hover:text-black transition-colors inline-block" href="#">READ LOG &gt;</a>
</div>
</div>

<div className="lg:col-span-5 bg-black border border-aero-border p-8 rounded-sm flex flex-col justify-center h-48 relative grid-bg">
<span className="text-[10px] font-mono text-aero-yellow uppercase tracking-widest mb-2">Meet Aerocore</span>
<h2 className="text-2xl font-medium text-white leading-tight tracking-tight">
                    Empowering <span className="text-neutral-500">hyper-sonic</span> exploration.
                </h2>
</div>

<div className="lg:col-span-5 bg-aero-panel border border-aero-border rounded-sm min-h-[280px] p-6 relative overflow-hidden">

<div className="absolute inset-0 grid-bg opacity-20"></div>
<div className="absolute right-6 top-6 text-neutral-700 text-6xl font-bold opacity-20">03</div>
<div className="relative z-10 h-full flex flex-col justify-end">
<div className="border border-white/10 bg-black/50 backdrop-blur w-10 h-10 flex items-center justify-center rounded mb-4">
<i className="w-5 h-5 text-aero-teal" data-lucide="activity"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Transmission Log</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">Stay informed with our latest firmware updates, telemetry data, and orbital trajectory adjustments sent directly to your dashboard.</p>
<div className="flex items-center gap-4">
<div className="flex flex-col">
<span className="text-[9px] uppercase text-neutral-600 font-mono">Latest Build</span>
<span className="text-xs font-mono text-white">v4.2.0-alpha</span>
</div>
<div className="w-px h-6 bg-white/10"></div>
<div className="flex flex-col">
<span className="text-[9px] uppercase text-neutral-600 font-mono">Status</span>
<span className="text-xs font-mono text-emerald-500">Stable</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 bg-aero-yellow rounded-sm p-6 flex flex-col justify-between min-h-[280px] relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4">
<i className="w-24 h-24 text-black opacity-10 transform rotate-12 group-hover:rotate-0 transition-transform duration-500" data-lucide="cpu"></i>
</div>
<div>
<div className="text-5xl font-bold text-black tracking-tighter mb-1">50<sup className="text-2xl">+</sup></div>
<div className="text-xs font-bold text-black uppercase tracking-wider">Active Modules</div>
</div>
<div>
<p className="text-sm text-black/80 font-medium leading-snug">Explore our diverse range of propulsion categories and flight systems.</p>
</div>
</div>

<div className="lg:col-span-4 bg-neutral-900 border border-aero-border rounded-sm p-8 flex flex-col justify-center min-h-[280px]">
<p className="text-lg text-neutral-200 leading-relaxed font-light mb-6">"A world-class engineering marvel for the next generation of space travel."</p>
<div className="flex items-center gap-3">
<div className="w-1 h-1 rounded-full bg-aero-orange"></div>
<div className="flex flex-col">
<span className="text-xs font-bold text-white uppercase tracking-wide">Dr. Aris Thorne</span>
<span className="text-[10px] text-neutral-500 uppercase">Chief Engineer, Aerocore</span>
</div>
</div>
</div>

<div className="lg:col-span-6 bg-aero-panel border border-aero-border rounded-sm p-6 h-40 flex flex-col justify-between">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center">
<i className="w-4 h-4 text-neutral-400" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Global Telemetry</h4>
<p className="text-xs text-neutral-400 font-mono">Tracking nodes active in 12 regions.</p>
<div className="mt-3 w-32 h-1 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-aero-yellow w-2/3"></div>
</div>
</div>
</div>

<div className="lg:col-span-6 bg-neutral-900 border border-aero-border rounded-sm p-6 h-40 flex flex-col justify-between hover:bg-neutral-800 transition-colors cursor-pointer group">
<i className="w-6 h-6 text-aero-yellow group-hover:scale-110 transition-transform" data-lucide="zap"></i>
<div>
<h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Join the Fleet</h4>
<p className="text-xs text-neutral-400 mb-2">Become a certified operator and write your own journey.</p>
<span className="text-[10px] text-white border-b border-white/30 pb-0.5">Apply Now</span>
</div>
</div>
</div>

<div className="py-20 border-b border-aero-border mb-20">
<p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mb-8">Trusted by Industry Leaders</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-white"><i className="text-aero-orange" data-lucide="rocket"></i> SPACEX</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-white">NASA</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-white">ACTIVISION</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-white">AIRBUS</div>
</div>
</div>

<section className="mb-24">
<div className="flex justify-between items-end mb-16 border-b border-aero-border pb-6">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white">Log</h2>
<p className="text-xs text-neutral-500 font-mono text-right hidden sm:block">Notes about avionics, deep-space telemetry,<br/>propulsion systems, and life in orbit.</p>
</div>

<article className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-20">
<div className="order-2 md:order-1">
<div className="flex items-center gap-3 mb-6">
<span className="px-2 py-1 rounded bg-neutral-900 text-[10px] font-mono text-white border border-neutral-800">Latest</span>
<span className="text-xs text-neutral-500 font-mono">March 6, 2035</span>
</div>
<h3 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight group-hover:text-neutral-300 transition-colors">
                        The Future of <span className="text-neutral-500">Navigation:</span> Trends to Watch in 2035
                    </h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-8 max-w-md">
                        Fleets that adapt to these quantum-guidance protocols will stay relevant, competitive, and positioned for long-term interstellar success. Let's explore the key navigation trends shaping the future of the Aerocore program.
                    </p>
<a className="text-[10px] font-mono uppercase tracking-widest border border-neutral-700 px-4 py-2 rounded-full hover:bg-white hover:text-black hover:border-white transition-all" href="#">
                        Systems
                    </a>
</div>
<div className="order-1 md:order-2 relative overflow-hidden rounded-sm aspect-video border border-aero-border">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent"></div>
<div className="absolute bottom-4 right-4 text-6xl font-bold text-white/10 font-mono">01</div>
<div className="absolute bottom-4 left-4">
<span className="bg-neutral-900/80 backdrop-blur text-[10px] text-neutral-300 px-2 py-1 rounded border border-white/10">Made in Aura</span>
</div>
</div>
</article>

<article className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-12">
<div className="relative overflow-hidden rounded-sm aspect-video border border-aero-border">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-125 saturate-0 group-hover:saturate-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="absolute inset-0 bg-red-500/10 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute inset-0 bg-blue-500/10 mix-blend-screen translate-x-1 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-4 left-4 text-6xl font-bold text-white/10 font-mono">02</div>
<div className="absolute bottom-4 left-4 p-2 bg-black/50 backdrop-blur rounded-full border border-white/10">
<i className="w-4 h-4 text-aero-orange" data-lucide="activity"></i>
</div>
</div>
<div>
<div className="flex items-center gap-3 mb-6">
<span className="text-[10px] font-mono text-neutral-500 uppercase">Archived</span>
<span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
<span className="text-xs text-neutral-500 font-mono">February 24, 2035</span>
</div>
<h3 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight group-hover:text-neutral-300 transition-colors">
                        Orbital <span className="text-neutral-500">Mechanics:</span> The Art of Gravity Assists
                    </h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-8 max-w-md">
                        Leveraging planetary gravity wells to conserve fuel remains the cornerstone of long-distance trajectory planning. New simulation models suggest efficiency gains of up to 14% for deep-space missions.
                    </p>
<a className="text-[10px] font-mono uppercase tracking-widest border border-neutral-700 px-4 py-2 rounded-full hover:bg-white hover:text-black hover:border-white transition-all" href="#">
                        Physics
                    </a>
</div>
</article>
<div className="flex justify-center mt-20">
<button className="group flex items-center gap-3 px-6 py-3 bg-neutral-900 border border-neutral-800 hover:border-aero-orange/50 transition-all rounded-sm">
<span className="text-[10px] font-mono uppercase tracking-widest text-white">Load Archives</span>
<i className="w-3 h-3 text-neutral-400 group-hover:translate-y-1 transition-transform" data-lucide="arrow-down"></i>
</button>
</div>
</section>

<section className="relative py-32 border-t border-b border-aero-border bg-neutral-950 overflow-hidden mb-0">
<div className="absolute inset-0 grid-bg opacity-30"></div>
<div className="relative z-10 text-center max-w-2xl mx-auto px-4">
<h2 className="text-5xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
                    Ready for <span className="text-neutral-600">Liftoff?</span>
</h2>
<p className="text-neutral-400 mb-10 text-sm leading-relaxed">
                    Join the elite squadron of data-driven pilots creating the future of interstellar travel and propulsion.
                </p>
<div className="flex justify-center">
<button className="bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-aero-orange hover:text-white transition-all duration-300 flex items-center gap-3">
                        Initialize Sequence <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>
</main>

<footer className="bg-aero-base pt-20 pb-10 border-t border-aero-border">
<div className="max-w-[1600px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
<div className="md:col-span-4">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 bg-aero-yellow flex items-center justify-center text-black font-semibold text-xs">AC</div>
<span className="font-mono text-sm tracking-widest text-white">AEROCORE</span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed max-w-xs mb-8">
                        Aerocore empowers deep-space telemetry teams to transform raw sensor data into clear, actionable flight paths — making the unknown navigable.
                    </p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
</div>
</div>
<div className="md:col-span-2 md:col-start-7">
<h4 className="text-[10px] font-mono text-aero-yellow uppercase tracking-widest mb-6">01 Platform</h4>
<ul className="space-y-4 text-xs text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">Telemetry Analysis</a></li>
<li><a className="hover:text-white transition-colors" href="#">Propulsion Logs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Navigation Systems</a></li>
<li><a className="hover:text-white transition-colors" href="#">Life Support</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-[10px] font-mono text-aero-yellow uppercase tracking-widest mb-6">02 Research</h4>
<ul className="space-y-4 text-xs text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Status</a></li>
<li><a className="hover:text-white transition-colors" href="#">Flight Manuals</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-[10px] font-mono text-aero-yellow uppercase tracking-widest mb-6">03 Command</h4>
<ul className="space-y-4 text-xs text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">Mission Control</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Press Releases</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] text-neutral-600 font-mono">
<div className="flex gap-6 mb-4 md:mb-0">
<span>© 2035 AEROCORE INC.</span>
<a className="hover:text-neutral-400" href="#">PRIVACY</a>
<a className="hover:text-neutral-400" href="#">TERMS</a>
</div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
<span>SYSTEMS NOMINAL</span>
<span className="ml-4 text-neutral-700">Made in Aura</span>
</div>
</div>

<div className="fixed bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none -z-10 opacity-[0.02]">
<span className="text-[20vw] font-black text-white tracking-tighter">AEROCORE</span>
</div>
</div>
</footer>

ll
    </>
  );
}
