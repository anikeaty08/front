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



        // Initialize Lucide Icons
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
      

<div className="noise-overlay"></div>

<nav className="fixed top-0 left-0 w-full z-40 border-b border-white/5 bg-[#020408]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

<div className="flex items-center gap-4 group cursor-pointer">
<div className="relative flex items-end justify-center h-10 w-10">

<div className="absolute -top-1 flex justify-center gap-[2px]">
<div className="w-[2px] bg-green-400 rounded-full fiber-strand" style={{animationDelay: '0s'}}></div>
<div className="w-[2px] bg-yellow-400 rounded-full fiber-strand" style={{animationDelay: '0.2s'}}></div>
<div className="w-[2px] bg-red-500 rounded-full fiber-strand" style={{animationDelay: '0.4s'}}></div>
<div className="w-[2px] bg-cyan-400 rounded-full fiber-strand" style={{animationDelay: '0.6s'}}></div>
</div>

<h1 className="font-tech text-3xl font-bold tracking-tighter text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">OP</h1>
<i className="w-4 h-4 text-cyan-400 -ml-1 mb-1 rotate-90" data-lucide="plug-2"></i>
</div>
<div className="flex flex-col">
<span className="font-tech text-base tracking-widest font-semibold text-white uppercase leading-none">Original</span>
<span className="font-tech text-xs tracking-widest font-medium text-cyan-400 uppercase leading-none mt-1">Prestige Group</span>
</div>
</div>

<div className="hidden md:flex items-center gap-8 font-tech text-xs tracking-widest text-slate-400 uppercase">
<a className="hover:text-cyan-400 transition-colors duration-300" href="#">Infrastructure</a>
<a className="hover:text-cyan-400 transition-colors duration-300" href="#">Global Map</a>
<a className="hover:text-cyan-400 transition-colors duration-300" href="#">Solutions</a>
<button className="btn-magnetic border border-white/10 px-6 py-2 text-white hover:border-cyan-500 hover:text-cyan-400 transition-colors duration-300 clip-diagonal bg-white/5">
                    Access Portal
                </button>
</div>
</div>
</nav>

<header className="relative w-full h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 w-full h-full z-0">
<img alt="Global Network Earth" className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_10s_ease-in-out_infinite] filter contrast-125 saturate-0" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/80 to-[#020408]/50"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020408_90%)]"></div>
</div>

<div className="absolute inset-0 tech-grid z-0 opacity-30"></div>

<div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-20">
<div className="flex flex-col items-start max-w-4xl">

<div className="flex items-center gap-3 mb-6 animate-fade-up" style={{animationDelay: '0.1s'}}>
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</div>
<span className="font-tech text-xs tracking-[0.2em] text-green-400 uppercase">Network Status: Optimal</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight uppercase leading-[0.95] mb-8 animate-fade-up text-glow" style={{animationDelay: '0.2s'}}>
                    Original <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-600">Prestige</span>
</h1>
<p className="text-slate-400 text-lg md:text-xl font-light max-w-xl leading-relaxed mb-10 animate-fade-up border-l border-cyan-500/50 pl-6" style={{animationDelay: '0.3s'}}>
                    Pioneering the backbone of digital civilization. We deliver ultra-low latency optical networks for the prestige of speed.
                </p>

<div className="flex flex-col md:flex-row gap-6 animate-fade-up" style={{animationDelay: '0.4s'}}>
<button className="group relative px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-black font-tech uppercase tracking-widest text-sm font-semibold transition-all duration-300 clip-diagonal overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
<span className="relative z-10 flex items-center gap-2">
                            Explore Network <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
</button>
<button className="group px-8 py-4 border border-white/20 text-white font-tech uppercase tracking-widest text-sm hover:bg-white/5 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 clip-diagonal flex items-center gap-2">
                        Our Services
                    </button>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full border-t border-white/10 bg-black/40 backdrop-blur-sm z-20 hidden md:block">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-xs text-slate-500 font-tech tracking-widest uppercase">
<div className="flex gap-8">
<span className="flex items-center gap-2 text-cyan-400"><i className="w-4 h-4" data-lucide="activity"></i> Latency: 12ms</span>
<span className="flex items-center gap-2 hover:text-cyan-400 transition-colors"><i className="w-4 h-4" data-lucide="shield-check"></i> Encryption: AES-256</span>
</div>
<div className="flex gap-4">
<span className="text-green-500">fiber_optic: active</span>
<span className="text-yellow-500">routing: optimized</span>
</div>
</div>
</div>
</header>

<section className="py-24 border-b border-white/5 relative bg-[#030509]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative p-8 border border-white/5 hover:border-cyan-500/30 bg-[#0A0C10] transition-colors duration-500">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
<i className="w-8 h-8 text-cyan-400" data-lucide="hard-drive"></i>
</div>
<h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2">940<span className="text-cyan-400 text-2xl ml-1">Tbps</span></h3>
<p className="font-tech text-xs tracking-widest text-slate-400 uppercase">Core Capacity</p>
<div className="w-full h-[1px] bg-slate-800 mt-6 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full w-3/4 bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
</div>
</div>

<div className="group relative p-8 border border-white/5 hover:border-cyan-500/30 bg-[#0A0C10] transition-colors duration-500">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
<i className="w-8 h-8 text-cyan-400" data-lucide="globe-2"></i>
</div>
<h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2">142</h3>
<p className="font-tech text-xs tracking-widest text-slate-400 uppercase">Global POPs</p>
<div className="w-full h-[1px] bg-slate-800 mt-6 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full w-1/2 bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
</div>
</div>

<div className="group relative p-8 border border-white/5 hover:border-cyan-500/30 bg-[#0A0C10] transition-colors duration-500">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
<i className="w-8 h-8 text-cyan-400" data-lucide="zap"></i>
</div>
<h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2">99.999<span className="text-sm align-top text-slate-500">%</span></h3>
<p className="font-tech text-xs tracking-widest text-slate-400 uppercase">Availability</p>
<div className="w-full h-[1px] bg-slate-800 mt-6 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full w-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-20">
<div>
<span className="font-tech text-xs text-cyan-400 tracking-[0.3em] uppercase mb-4 block">Ecosystem</span>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight uppercase">Connected <br/> Architecture</h2>
</div>
<div className="hidden md:block w-32 h-[1px] bg-slate-800 mb-4"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="group relative h-80 bg-slate-900/50 border border-white/5 p-8 flex flex-col justify-end overflow-hidden hover:bg-slate-800/50 transition-colors duration-500">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 mix-blend-luminosity transition-opacity duration-700 scale-100 group-hover:scale-105 transform"></div>
<div className="absolute top-0 left-0 p-4">
<span className="font-tech text-xs text-white/40 border border-white/10 px-2 py-1">01</span>
</div>
<div className="relative z-10">
<i className="text-cyan-400 w-10 h-10 mb-4" data-lucide="cable"></i>
<h3 className="text-xl font-semibold text-white tracking-tight uppercase mb-2">Fiber Backbone</h3>
<p className="text-sm text-slate-400 max-w-sm">High-density multi-core optical networks delivering terabit speeds to enterprise endpoints.</p>
</div>
</div>

<div className="group relative h-80 bg-slate-900/50 border border-white/5 p-8 flex flex-col justify-end overflow-hidden hover:bg-slate-800/50 transition-colors duration-500">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541185933-710f50b90858?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 mix-blend-luminosity transition-opacity duration-700 scale-100 group-hover:scale-105 transform"></div>
<div className="absolute top-0 left-0 p-4">
<span className="font-tech text-xs text-white/40 border border-white/10 px-2 py-1">02</span>
</div>
<div className="relative z-10">
<i className="text-cyan-400 w-10 h-10 mb-4" data-lucide="satellite"></i>
<h3 className="text-xl font-semibold text-white tracking-tight uppercase mb-2">Orbital Uplink</h3>
<p className="text-sm text-slate-400 max-w-sm">LEO constellation integration providing redundant coverage in remote sectors.</p>
</div>
</div>

<div className="group relative h-80 bg-slate-900/50 border border-white/5 p-8 flex flex-col justify-end overflow-hidden hover:bg-slate-800/50 transition-colors duration-500 md:col-span-2">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 mix-blend-luminosity transition-opacity duration-700 scale-100 group-hover:scale-105 transform"></div>
<div className="absolute top-0 left-0 p-4">
<span className="font-tech text-xs text-white/40 border border-white/10 px-2 py-1">03</span>
</div>
<div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between w-full">
<div>
<i className="text-cyan-400 w-10 h-10 mb-4" data-lucide="cpu"></i>
<h3 className="text-xl font-semibold text-white tracking-tight uppercase mb-2">Industrial IoT</h3>
<p className="text-sm text-slate-400 max-w-md">Scalable M2M communication protocols for automation and smart city infrastructure.</p>
</div>
<div className="mt-6 md:mt-0">
<a className="inline-flex items-center gap-2 text-xs font-tech text-white uppercase tracking-widest hover:text-cyan-400 transition-colors" href="#">
                                View Technical Specs <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-40 flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Abstract Fiber" className="w-full h-full object-cover filter grayscale contrast-125 opacity-10" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#020408] via-transparent to-[#020408]"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<i className="w-12 h-12 text-cyan-500 mx-auto mb-8 opacity-50 fill-current" data-lucide="quote"></i>
<h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-8">
                "THE DISTANCE BETWEEN TWO <br/> POINTS IS ZERO WHEN CONNECTED <br/> AT THE SPEED OF LIGHT."
            </h2>
<div className="flex items-center justify-center gap-4">
<div className="h-[1px] w-12 bg-cyan-600"></div>
<span className="font-tech text-xs tracking-[0.2em] text-slate-400 uppercase">Original Prestige Group</span>
<div className="h-[1px] w-12 bg-cyan-600"></div>
</div>
</div>
</section>

<footer className="relative bg-[#05060A] border-t border-white/10 pt-20 pb-10">

<div className="absolute top-0 left-10 w-[1px] h-full bg-white/5 hidden md:block"></div>
<div className="absolute top-0 right-10 w-[1px] h-full bg-white/5 hidden md:block"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

<div>

<div className="flex items-center gap-3 mb-6">
<div className="relative flex items-end justify-center h-8 w-8">
<h1 className="font-tech text-2xl font-bold tracking-tighter text-cyan-400">OP</h1>
<i className="w-3 h-3 text-cyan-400 -ml-0.5 mb-1 rotate-90" data-lucide="plug-2"></i>
</div>
<span className="font-tech text-sm tracking-tight font-semibold text-white uppercase">Original Prestige <br/>Group</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Powering the next generation of digital exchange. Secure, scalable, and instantaneous global communication.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-cyan-400 transition-colors" href="#"><i className="w-5 h-5" data-lucide="globe"></i></a>
<a className="text-slate-400 hover:text-cyan-400 transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-slate-400 hover:text-cyan-400 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>

<div>
<h4 className="font-tech text-xs text-white uppercase tracking-widest mb-6 border-b border-cyan-500/30 pb-2 inline-block">Network</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Global Map</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Data Centers</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Peering</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Status</a></li>
</ul>
</div>

<div>
<h4 className="font-tech text-xs text-white uppercase tracking-widest mb-6 border-b border-cyan-500/30 pb-2 inline-block">Company</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li><a className="hover:text-cyan-400 transition-colors" href="#">About OPG</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Investors</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Careers</a></li>
</ul>
</div>

<div>
<h4 className="font-tech text-xs text-white uppercase tracking-widest mb-6 border-b border-cyan-500/30 pb-2 inline-block">System Updates</h4>
<form className="flex flex-col gap-4">
<div className="relative">
<input className="w-full bg-[#0F1218] border border-white/10 p-3 pl-4 text-xs text-white focus:outline-none focus:border-cyan-600 transition-colors placeholder-slate-600 font-tech tracking-wider uppercase" placeholder="ENTER EMAIL" type="email"/>
</div>
<button className="w-full bg-cyan-500 text-black hover:bg-cyan-400 transition-colors p-3 text-xs font-semibold uppercase tracking-widest clip-diagonal">
                            Connect
                        </button>
</form>
</div>
</div>

<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-slate-600 uppercase tracking-widest font-tech">
                    © 2026 Original Prestige Group. All protocols secured.
                </p>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<span className="block h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-[10px] text-slate-500 uppercase tracking-widest font-tech">Node: OPG-NY-1</span>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
