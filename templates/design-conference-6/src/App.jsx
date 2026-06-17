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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<div className="fixed inset-0 z-0 pointer-events-none opacity-20" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '48px 48px'}}></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[#bfa0e0] rounded-full blur-[150px] opacity-10 pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">

<a className="flex items-end gap-0.5 group" href="#">
<div className="relative">
<svg className="w-5 h-5 text-[#bfa0e0] absolute -top-2.5 -left-1.5" fill="currentColor" viewbox="0 0 24 24">
<path d="M6 2h3.5v5.5l4-4h5l-7.5 7.5h6v3.5H6z"></path>
</svg>
<span className="text-2xl font-medium tracking-tight text-zinc-100 leading-none">L</span>
</div>
<span className="text-2xl font-medium tracking-tight text-zinc-100 leading-none">earnUp</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-light tracking-wide uppercase text-zinc-400 hover:text-white transition-colors" href="#speakers">Speakers</a>
<a className="text-sm font-light tracking-wide uppercase text-zinc-400 hover:text-white transition-colors" href="#schedule">Schedule</a>
<a className="text-sm font-light tracking-wide uppercase text-zinc-400 hover:text-white transition-colors" href="#location">Location</a>
<a className="text-sm font-normal tracking-wide uppercase text-[#bfa0e0] hover:text-white transition-colors flex items-center gap-1" href="#register">
                    Register <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>

<button className="md:hidden text-zinc-400 hover:text-white">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<main className="relative z-10">

<section className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 relative overflow-hidden border-b border-white/10">
<div className="max-w-7xl mx-auto w-full flex flex-col items-start gap-8 z-10">

<div className="flex items-center gap-3 border border-white/10 rounded-full px-4 py-1.5 bg-white/5 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-[#bfa0e0] animate-pulse"></span>
<span className="text-xs font-normal tracking-widest uppercase text-zinc-300">System Online</span>
</div>

<h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight uppercase leading-[0.9] flex flex-col">
<span className="text-zinc-500">Design</span>
<span className="text-white">Summit:</span>
<span className="text-[#bfa0e0]">The Simulation</span>
</h1>

<div className="mt-4 md:mt-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 border-l-2 border-[#bfa0e0] pl-4 md:pl-6">
<p className="text-lg md:text-2xl font-light text-zinc-400 tracking-tight max-w-2xl">
                        The first immersive, practical design festival bridging theory and harsh reality.
                    </p>
<div className="flex items-center gap-4 text-sm font-normal tracking-widest uppercase text-white">
<span>Tbilisi</span>
<span className="text-zinc-700">|</span>
<span>Sept 14, 2024</span>
<span className="text-zinc-700">|</span>
<span>Fabrika</span>
</div>
</div>

<div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-[#bfa0e0] text-zinc-950 text-sm font-medium tracking-widest uppercase hover:bg-white transition-all flex items-center justify-center gap-2 group" href="#register">
                        Enter Simulation
                        <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white text-sm font-light tracking-widest uppercase hover:bg-white/10 transition-all flex items-center justify-center text-center" href="#about">
                        Initialize Core Data
                    </a>
</div>
</div>

<div className="absolute right-0 bottom-0 w-1/2 h-1/2 opacity-30 pointer-events-none mix-blend-screen" style={{backgroundImage: 'repeating-linear-gradient(45deg, #bfa0e0 0, #bfa0e0 1px, transparent 1px, transparent 10px)'}}></div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/10" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
<div className="lg:col-span-4">
<h2 className="text-3xl md:text-5xl font-normal tracking-tight uppercase sticky top-32">
                        Why<br/>
<span className="text-zinc-500">LearnUp</span><br/>
                        Summit?
                    </h2>
</div>
<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="flex flex-col gap-4 border-t border-white/10 pt-6">
<i className="w-8 h-8 text-[#bfa0e0]" data-lucide="network" strokeWidth="1.5"></i>
<h3 className="text-xl md:text-2xl font-normal tracking-tight uppercase">Network Protocols</h3>
<p className="text-lg text-zinc-400 font-light leading-relaxed">
                            Bypass the firewall. Connect directly with industry leaders, senior designers, and product owners who are shaping the digital landscape in Georgia and beyond.
                        </p>
</div>
<div className="flex flex-col gap-4 border-t border-white/10 pt-6">
<i className="w-8 h-8 text-[#bfa0e0]" data-lucide="cpu" strokeWidth="1.5"></i>
<h3 className="text-xl md:text-2xl font-normal tracking-tight uppercase">Processing Power</h3>
<p className="text-lg text-zinc-400 font-light leading-relaxed">
                            Upgrade your cognitive stack. Master the nuances of iGaming, complex SaaS architectures, and AI-driven interfaces through real, unforgiving simulation tasks.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/10 bg-zinc-950/50" id="speakers">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
<h2 className="text-4xl md:text-6xl font-normal tracking-tight uppercase">Industry<br/><span className="text-zinc-500">Leaders</span></h2>
<p className="text-base text-zinc-400 font-light tracking-widest uppercase max-w-xs md:text-right">
                        The architects controlling the simulation parameters.
                    </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">

<div className="group flex flex-col gap-4">
<div className="aspect-square bg-zinc-900 border border-white/5 overflow-hidden relative">
<img alt="Speaker" className="w-full h-full object-cover grayscale opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-in-out mix-blend-luminosity" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-xs px-2 py-1 font-mono tracking-wider border border-white/10">ID: 01</div>
</div>
<div>
<h3 className="text-lg md:text-xl font-normal tracking-tight uppercase">Giga Khutsishvili</h3>
<p className="text-base font-light text-[#bfa0e0] tracking-wide mt-1">Creative Director, Holy Motors</p>
</div>
</div>

<div className="group flex flex-col gap-4">
<div className="aspect-square bg-zinc-900 border border-white/5 overflow-hidden relative">
<img alt="Speaker" className="w-full h-full object-cover grayscale opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-in-out mix-blend-luminosity" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-xs px-2 py-1 font-mono tracking-wider border border-white/10">ID: 02</div>
</div>
<div>
<h3 className="text-lg md:text-xl font-normal tracking-tight uppercase">Mariam Diasamidze</h3>
<p className="text-base font-light text-[#bfa0e0] tracking-wide mt-1">Lead Product Designer, Redberry</p>
</div>
</div>

<div className="group flex flex-col gap-4">
<div className="aspect-square bg-zinc-900 border border-white/5 overflow-hidden relative">
<img alt="Speaker" className="w-full h-full object-cover grayscale opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-in-out mix-blend-luminosity" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-xs px-2 py-1 font-mono tracking-wider border border-white/10">ID: 03</div>
</div>
<div>
<h3 className="text-lg md:text-xl font-normal tracking-tight uppercase">Levan Kokaia</h3>
<p className="text-base font-light text-[#bfa0e0] tracking-wide mt-1">Head of Design, Upgaming</p>
</div>
</div>

<div className="group flex flex-col gap-4">
<div className="aspect-square bg-zinc-900 border border-white/5 overflow-hidden relative">
<img alt="Speaker" className="w-full h-full object-cover grayscale opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-in-out mix-blend-luminosity" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-xs px-2 py-1 font-mono tracking-wider border border-white/10">ID: 04</div>
</div>
<div>
<h3 className="text-lg md:text-xl font-normal tracking-tight uppercase">Tornike Japaridze</h3>
<p className="text-base font-light text-[#bfa0e0] tracking-wide mt-1">Senior UX/UI, Crocobet</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/10" id="schedule">
<div className="max-w-4xl mx-auto">
<h2 className="text-4xl md:text-6xl font-normal tracking-tight uppercase mb-16 md:mb-24 text-center">Agenda<span className="text-[#bfa0e0]">.</span></h2>
<div className="relative border-l border-white/10 ml-4 md:ml-0">

<div className="relative pl-8 md:pl-12 pb-16 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-zinc-800 border border-black group-hover:bg-[#bfa0e0] transition-colors"></div>
<div className="flex flex-col md:flex-row gap-4 md:gap-12">
<div className="md:w-32 flex-shrink-0">
<span className="text-base font-mono tracking-widest text-zinc-500 group-hover:text-white transition-colors">10:00 AM</span>
</div>
<div>
<h3 className="text-xl md:text-2xl font-normal tracking-tight uppercase">System Boot &amp; Welcome Coffee</h3>
<p className="text-base font-light text-zinc-400 mt-2 tracking-wide">Fuel sequence initiated by <span className="text-[#bfa0e0]">Shavi Roast Coffee</span> &amp; <span className="text-[#bfa0e0]">RedBull</span>.</p>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-12 pb-16 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-zinc-800 border border-black group-hover:bg-[#bfa0e0] transition-colors"></div>
<div className="flex flex-col md:flex-row gap-4 md:gap-12">
<div className="md:w-32 flex-shrink-0">
<span className="text-base font-mono tracking-widest text-zinc-500 group-hover:text-white transition-colors">11:00 AM</span>
</div>
<div>
<h3 className="text-xl md:text-2xl font-normal tracking-tight uppercase">Keynotes: Future of Interface</h3>
<p className="text-base font-light text-zinc-400 mt-2 tracking-wide">Mainstage directives by Holy Motors &amp; Kraken.</p>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-12 pb-16 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-zinc-800 border border-black group-hover:bg-[#bfa0e0] transition-colors"></div>
<div className="flex flex-col md:flex-row gap-4 md:gap-12">
<div className="md:w-32 flex-shrink-0">
<span className="text-base font-mono tracking-widest text-zinc-500 group-hover:text-white transition-colors">13:00 PM</span>
</div>
<div>
<h3 className="text-xl md:text-2xl font-normal tracking-tight uppercase">Brunch &amp; Data Transfer (Networking)</h3>
<p className="text-base font-light text-zinc-400 mt-2 tracking-wide">Sustenance provided by <span className="text-[#bfa0e0]">Fabrika Catering</span>.</p>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-12 pb-16 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-zinc-800 border border-black group-hover:bg-[#bfa0e0] transition-colors"></div>
<div className="flex flex-col md:flex-row gap-4 md:gap-12">
<div className="md:w-32 flex-shrink-0">
<span className="text-base font-mono tracking-widest text-zinc-500 group-hover:text-white transition-colors">14:00 PM</span>
</div>
<div>
<h3 className="text-xl md:text-2xl font-normal tracking-tight uppercase">Breakout Simulations</h3>
<p className="text-base font-light text-zinc-400 mt-2 tracking-wide">Intensive workshops: iGaming Dynamics, Complex SaaS Flows, E-commerce Conversion.</p>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-12 pb-16 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-zinc-800 border border-black group-hover:bg-[#bfa0e0] transition-colors"></div>
<div className="flex flex-col md:flex-row gap-4 md:gap-12">
<div className="md:w-32 flex-shrink-0">
<span className="text-base font-mono tracking-widest text-zinc-500 group-hover:text-white transition-colors">16:30 PM</span>
</div>
<div>
<h3 className="text-xl md:text-2xl font-normal tracking-tight uppercase">Panel: The Georgia Tech Ecosystem</h3>
<p className="text-base font-light text-zinc-400 mt-2 tracking-wide">Insights from BMG &amp; Marketer.ge.</p>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-12 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-zinc-800 border border-black group-hover:bg-[#bfa0e0] transition-colors shadow-[0_0_10px_#bfa0e0]"></div>
<div className="flex flex-col md:flex-row gap-4 md:gap-12">
<div className="md:w-32 flex-shrink-0">
<span className="text-base font-mono tracking-widest text-zinc-500 group-hover:text-white transition-colors">18:00+ PM</span>
</div>
<div>
<h3 className="text-xl md:text-2xl font-normal tracking-tight uppercase">System Shutdown (After-party)</h3>
<p className="text-base font-light text-zinc-400 mt-2 tracking-wide">Location coordinates to be unlocked.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/10 bg-zinc-950/30">
<div className="max-w-7xl mx-auto">
<h2 className="text-base font-normal tracking-widest uppercase text-zinc-500 text-center mb-12">Powered by the Network</h2>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-white/10 border border-white/10">
<div className="bg-black h-24 flex items-center justify-center p-4">
<span className="text-lg font-medium tracking-tight text-zinc-600 uppercase">Holy Motors</span>
</div>
<div className="bg-black h-24 flex items-center justify-center p-4">
<span className="text-lg font-medium tracking-tight text-zinc-600 uppercase">Redberry</span>
</div>
<div className="bg-black h-24 flex items-center justify-center p-4">
<span className="text-lg font-medium tracking-tight text-zinc-600 uppercase">Upgaming</span>
</div>
<div className="bg-black h-24 flex items-center justify-center p-4">
<span className="text-lg font-medium tracking-tight text-zinc-600 uppercase">BOG</span>
</div>
<div className="bg-black h-24 flex items-center justify-center p-4">
<span className="text-lg font-medium tracking-tight text-zinc-600 uppercase">Marketer.ge</span>
</div>
<div className="bg-black h-24 flex items-center justify-center p-4">
<span className="text-lg font-medium tracking-tight text-zinc-600 uppercase">RedBull</span>
</div>
<div className="bg-black h-24 flex items-center justify-center p-4">
<span className="text-lg font-medium tracking-tight text-zinc-600 uppercase">Zoommer</span>
</div>
<div className="bg-black h-24 flex items-center justify-center p-4">
<span className="text-lg font-medium tracking-tight text-zinc-600 uppercase">Alta</span>
</div>
<div className="bg-black h-24 flex items-center justify-center p-4">
<span className="text-lg font-medium tracking-tight text-zinc-600 uppercase">PSP</span>
</div>
<div className="bg-black h-24 flex items-center justify-center p-4">
<span className="text-lg font-medium tracking-tight text-zinc-600 uppercase">Fabrika</span>
</div>
<div className="bg-black h-24 flex items-center justify-center p-4">
<span className="text-lg font-medium tracking-tight text-zinc-600 uppercase">Impact Hub</span>
</div>
<div className="bg-black h-24 flex items-center justify-center p-4">
<span className="text-lg font-medium tracking-tight text-zinc-600 uppercase">BTU</span>
</div>
</div>

<div className="mt-16 border border-[#bfa0e0]/30 bg-[#bfa0e0]/5 p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

<div className="absolute top-0 right-0 w-32 h-32 bg-[#bfa0e0] opacity-10 blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#bfa0e0] m-4 opacity-50"></div>
<div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#bfa0e0] m-4 opacity-50"></div>
<div className="relative z-10 max-w-xl">
<div className="flex items-center gap-2 mb-4">
<i className="w-6 h-6 text-[#bfa0e0]" data-lucide="gamepad-2" strokeWidth="1.5"></i>
<span className="text-xs font-mono tracking-widest uppercase text-[#bfa0e0]">Side Quests Activated</span>
</div>
<h3 className="text-2xl md:text-3xl font-normal tracking-tight uppercase mb-4">Games &amp; Hardware Prizes</h3>
<p className="text-base text-zinc-400 font-light leading-relaxed">
                            Compete in the <strong className="text-white font-normal">UX Audit Race by Zoommer</strong> and test your logic in the <strong className="text-white font-normal">Accessibility Quiz by PSP</strong>. High scores receive hardware upgrades.
                        </p>
</div>
<div className="relative z-10 flex-shrink-0">
<div className="w-24 h-24 md:w-32 md:h-32 border border-white/20 rounded-full flex items-center justify-center relative">
<div className="absolute inset-0 border border-[#bfa0e0] rounded-full animate-[spin_10s_linear_infinite] border-t-transparent"></div>
<span className="text-sm font-mono tracking-widest">XP+</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/10" id="location">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
<div className="flex flex-col gap-8">
<h2 className="text-4xl md:text-6xl font-normal tracking-tight uppercase">Physical<br/><span className="text-zinc-500">Coordinates</span></h2>
<div className="space-y-6 border-l-2 border-white/10 pl-6">
<div>
<p className="text-xs font-mono tracking-widest uppercase text-zinc-500 mb-1">Venue</p>
<p className="text-xl md:text-2xl font-normal tracking-tight uppercase text-white">Fabrika / Impact Hub</p>
</div>
<div>
<p className="text-xs font-mono tracking-widest uppercase text-zinc-500 mb-1">Address</p>
<p className="text-lg font-light tracking-wide text-zinc-400">8 Egnate Ninoshvili St,<br/>Tbilisi 0102, Georgia</p>
</div>
</div>
<a className="inline-flex items-center gap-2 text-sm font-normal tracking-widest uppercase text-[#bfa0e0] hover:text-white transition-colors mt-4" href="#">
<i className="w-5 h-5" data-lucide="map-pin" strokeWidth="1.5"></i>
                        Extract Route Data
                    </a>
</div>

<div className="aspect-square md:aspect-video lg:aspect-square bg-zinc-950 border border-white/10 relative overflow-hidden group">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#bfa0e0]/30 rounded-full animate-ping"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-[#bfa0e0]/50 rounded-full"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<div className="w-3 h-3 bg-[#bfa0e0] rounded-full shadow-[0_0_15px_#bfa0e0]"></div>
<div className="w-px h-8 bg-gradient-to-b from-[#bfa0e0] to-transparent"></div>
</div>

<div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
<span className="text-xs font-mono tracking-widest text-zinc-600">LAT: 41.7100° N<br/>LON: 44.8015° E</span>
<div className="bg-black/80 backdrop-blur px-3 py-1 border border-white/10 text-xs font-mono tracking-widest text-white">MAP.DAT</div>
</div>
</div>
</div>
</section>

<section className="bg-[#bfa0e0] text-zinc-950 py-24 md:py-40 px-6 md:px-12 relative overflow-hidden" id="register">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none flex flex-col justify-center overflow-hidden">
<span className="text-[15rem] leading-none font-medium tracking-tight whitespace-nowrap text-black">SIMULATION SIMULATION</span>
</div>
<div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center gap-8">
<i className="w-12 h-12 text-zinc-950" data-lucide="ticket" strokeWidth="1.5"></i>
<h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight uppercase leading-[0.9]">
                    Secure Your Spot<br/>
<span className="text-zinc-800">In The Simulation</span>
</h2>
<p className="text-lg md:text-2xl font-normal tracking-tight mt-4 max-w-2xl text-zinc-800">
                    Warning: Capacity is strictly limited to ensure optimal processing power per attendee.
                </p>
<a className="mt-8 px-12 py-5 bg-zinc-950 text-white text-sm font-medium tracking-widest uppercase hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 group border border-transparent hover:border-zinc-950" href="#">
                    Register Now
                    <span className="text-xs font-mono text-zinc-400 group-hover:text-zinc-300 border-l border-zinc-700 pl-3 py-1">Limited Seats</span>
</a>
</div>
</section>
</main>

<footer className="bg-black py-12 px-6 md:px-12 border-t border-white/10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<a className="flex items-end gap-0.5 group" href="#">
<div className="relative">
<svg className="w-5 h-5 text-[#bfa0e0] absolute -top-2.5 -left-1.5" fill="currentColor" viewbox="0 0 24 24">
<path d="M6 2h3.5v5.5l4-4h5l-7.5 7.5h6v3.5H6z"></path>
</svg>
<span className="text-2xl font-medium tracking-tight text-zinc-100 leading-none">L</span>
</div>
<span className="text-2xl font-medium tracking-tight text-zinc-100 leading-none">earnUp</span>
</a>
<div className="flex items-center gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<i className="w-6 h-6" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<i className="w-6 h-6" data-lucide="link" strokeWidth="1.5"></i>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<i className="w-6 h-6" data-lucide="mail" strokeWidth="1.5"></i>
</a>
</div>
<p className="text-xs font-mono tracking-widest text-zinc-600 uppercase">
                © 2024 LearnUp. End of file.
            </p>
</div>
</footer>


    </>
  );
}
