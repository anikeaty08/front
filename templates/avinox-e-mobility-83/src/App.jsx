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
      

<header className="fixed w-full top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-zinc-950/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-zinc-950 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
<iconify-icon icon="lucide:zap" strokeWidth="2.5" width="14"></iconify-icon>
</div>
<span className="text-white tracking-widest font-semibold text-lg uppercase group-hover:opacity-80 transition-opacity">AVINOX</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight text-zinc-400">
<a className="hover:text-white transition-colors duration-200" href="#products">The System</a>
<a className="hover:text-white transition-colors duration-200" href="#core">Technology</a>
<a className="hover:text-white transition-colors duration-200" href="#partners">Partners</a>
</nav>

<div className="flex items-center gap-4">
<button className="text-zinc-400 hover:text-white transition-colors">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="18"></iconify-icon>
</button>

<div className="relative group hidden sm:block">
<button className="flex items-center gap-2 text-xs font-medium text-zinc-400 border border-white/10 px-3 py-1.5 rounded-full hover:bg-white/5 hover:text-white hover:border-white/20 transition-all">
<iconify-icon icon="lucide:globe" strokeWidth="1.5" width="12"></iconify-icon>
<span>EN</span>
</button>
</div>
<button className="md:hidden text-zinc-400 hover:text-white">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</header>
<main>

<section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">
<img alt="E-MTB Rider" className="w-full h-full object-cover opacity-50 scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-950/20"></div>

<div className="absolute inset-0 bg-grid-white opacity-20 mix-blend-overlay"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center mt-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm text-xs font-medium text-emerald-400 mb-8 fade-in-up shadow-[0_0_15px_-5px_rgba(16,185,129,0.4)]">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span>The Next Generation Drive System</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-8 fade-in-up delay-100 leading-[0.9]">
                    POWER BEYOND <br className="hidden md:block"/> BOUNDARIES.
                </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed fade-in-up delay-200">
                    The Avinox propulsion system redefines e-mobility with industry-leading torque-to-weight ratios and intelligent connectivity.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up delay-300">
<button className="group w-full sm:w-auto px-8 py-4 bg-white text-zinc-950 text-sm font-medium rounded-full hover:bg-zinc-200 transition-all flex items-center justify-center gap-2">
                        Explore The System
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
<iconify-icon className="fill-white" icon="lucide:play" strokeWidth="1.5" width="16"></iconify-icon>
                        Watch Film
                    </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
<button className="w-12 h-1 bg-white rounded-full transition-all shadow-[0_0_10px_rgba(255,255,255,0.5)]"></button>
<button className="w-2 h-1 bg-white/20 rounded-full hover:bg-white/60 transition-all"></button>
<button className="w-2 h-1 bg-white/20 rounded-full hover:bg-white/60 transition-all"></button>
</div>
</section>

<section className="py-24 bg-zinc-950 relative border-t border-white/5" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">The Ecosystem</h2>
<p className="text-zinc-400 max-w-md text-sm leading-relaxed">
                            A fully integrated suite of components designed to work in perfect harmony. From the core drive unit to the digital interface.
                        </p>
</div>
<a className="text-sm font-medium text-white hover:text-zinc-300 flex items-center gap-2 group" href="#">
                        View Full Specs 
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:chevron-right" width="16"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">

<a className="group lg:col-span-4 relative bg-zinc-900/40 border border-white/5 rounded-3xl overflow-hidden min-h-[360px] hover:border-white/20 hover:bg-zinc-900/60 transition-all duration-300 cursor-pointer" href="/product/drive-unit">
<div className="absolute top-6 left-6 z-10">
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
<span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Core Unit</span>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight group-hover:text-emerald-400 transition-colors">Avinox M-Pro Drive</h3>
<p className="text-zinc-400 text-sm mt-2">85Nm Torque / 2.7kg</p>
</div>
<img alt="Drive Unit" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none"></div>
<div className="absolute bottom-6 right-6">
<span className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
<iconify-icon icon="lucide:arrow-up-right" width="18"></iconify-icon>
</span>
</div>
</a>

<a className="group lg:col-span-2 relative bg-zinc-900/40 border border-white/5 rounded-3xl overflow-hidden min-h-[360px] flex flex-col justify-between p-6 hover:border-white/20 hover:bg-zinc-900/60 transition-all duration-300 cursor-pointer" href="/product/battery">
<div>
<span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Power</span>
<h3 className="text-xl font-medium text-white mt-1 tracking-tight group-hover:text-emerald-400 transition-colors">EnergyPak 800</h3>
</div>
<div className="w-full flex-1 flex items-center justify-center relative">

<div className="w-3/4 h-12 bg-zinc-800 rounded border border-white/10 relative overflow-hidden flex items-center px-1">
<div className="h-10 bg-zinc-700 rounded-sm w-[20%] mx-0.5"></div>
<div className="h-10 bg-zinc-700 rounded-sm w-[20%] mx-0.5"></div>
<div className="h-10 bg-emerald-500/80 rounded-sm w-[20%] mx-0.5 shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>
<div className="h-10 bg-emerald-500 rounded-sm w-[20%] mx-0.5 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
</div>
</div>
<div className="flex justify-between items-end border-t border-white/5 pt-4">
<span className="text-xs text-zinc-500">Range</span>
<span className="text-xs text-white font-mono">~120km</span>
</div>
</a>

<a className="group lg:col-span-2 relative bg-zinc-900/40 border border-white/5 rounded-3xl overflow-hidden min-h-[260px] flex flex-col justify-between p-6 hover:border-white/20 hover:bg-zinc-900/60 transition-all duration-300 cursor-pointer" href="/product/display">
<div>
<span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Interface</span>
<h3 className="text-xl font-medium text-white mt-1 tracking-tight group-hover:text-emerald-400 transition-colors">HMI Display</h3>
</div>
<div className="w-full flex items-center justify-center my-4">
<div className="relative w-20 h-14 border-2 border-zinc-700 rounded-lg flex items-center justify-center group-hover:border-white transition-colors duration-500 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
<div className="absolute inset-0 bg-zinc-800 rounded-md opacity-50"></div>
<span className="text-xs font-mono text-emerald-400 z-10">24<span className="text-[8px] text-zinc-500">km/h</span></span>
</div>
</div>
<div className="flex justify-between items-end border-t border-white/5 pt-4">
<span className="text-xs text-zinc-500">Type</span>
<span className="text-xs text-white font-mono">OLED</span>
</div>
</a>

<a className="group lg:col-span-2 relative bg-zinc-900/40 border border-white/5 rounded-3xl overflow-hidden min-h-[260px] p-6 flex flex-col hover:border-white/20 hover:bg-zinc-900/60 transition-all duration-300 cursor-pointer" href="/product/app">
<div className="z-10">
<span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Software</span>
<h3 className="text-xl font-medium text-white mt-1 tracking-tight group-hover:text-emerald-400 transition-colors">Avinox Cloud</h3>
</div>
<div className="absolute right-0 bottom-0 top-0 w-2/3 bg-gradient-to-l from-zinc-800/30 to-transparent">
<img alt="App" className="w-full h-full object-cover opacity-30 mix-blend-luminosity group-hover:opacity-50 transition-opacity" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-auto pt-4 relative z-10 flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon icon="lucide:smartphone" width="14"></iconify-icon>
<span>iOS &amp; Android</span>
</div>
</a>

<a className="group lg:col-span-2 relative bg-zinc-900/40 border border-white/5 rounded-3xl overflow-hidden min-h-[260px] p-6 flex flex-col hover:border-white/20 hover:bg-zinc-900/60 transition-all duration-300 cursor-pointer" href="/product/accessories">
<div className="z-10 w-full h-full flex flex-col justify-between">
<div>
<span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Expansion</span>
<h3 className="text-xl font-medium text-white mt-1 tracking-tight group-hover:text-emerald-400 transition-colors">Smart Peripherals</h3>
</div>
<div className="grid grid-cols-3 gap-3 mt-4">
<div className="bg-white/5 rounded-lg p-2 text-center border border-white/5 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-zinc-400 mb-1" icon="lucide:bluetooth" width="14"></iconify-icon>
</div>
<div className="bg-white/5 rounded-lg p-2 text-center border border-white/5 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-zinc-400 mb-1" icon="lucide:activity" width="14"></iconify-icon>
</div>
<div className="bg-white/5 rounded-lg p-2 text-center border border-white/5 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-zinc-400 mb-1" icon="lucide:settings-2" width="14"></iconify-icon>
</div>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-white/5" id="core">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Engineered for The Future</h2>
<p className="text-zinc-400">We don't just build motors; we engineer the sensation of limitless power.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 border-l border-white/10 hover:border-emerald-500/50 transition-colors duration-500 group">
<div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white border border-white/5 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all">
<iconify-icon icon="lucide:cpu" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Intelligent Response</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Our proprietary algorithms process sensor data 1000x per second to deliver power exactly when you need it.
                        </p>
</div>

<div className="p-8 border-l border-white/10 hover:border-emerald-500/50 transition-colors duration-500 group">
<div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white border border-white/5 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Extreme Durability</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            IP67 rated components tested in the harshest conditions. Mud, snow, and impact resistant for true exploration.
                        </p>
</div>

<div className="p-8 border-l border-white/10 hover:border-emerald-500/50 transition-colors duration-500 group">
<div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white border border-white/5 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all">
<iconify-icon icon="lucide:network" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Seamless Integration</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            A compact form factor allows frame designers to maintain geometry and aesthetics without compromise.
                        </p>
</div>
</div>

<div className="mt-20 relative w-full h-[500px] rounded-2xl overflow-hidden group">
<img alt="Lifestyle" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 hover:scale-105 transition-transform duration-[1.5s]" src="https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/20 to-transparent"></div>
<div className="absolute bottom-10 left-10 max-w-lg">
<div className="w-12 h-0.5 bg-emerald-500 mb-6"></div>
<p className="text-white text-3xl font-medium tracking-tighter leading-tight">"The silent power of Avinox changes the way you perceive the mountain."</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-900/30 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-10">Industry Recognition</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-3 group cursor-default">
<iconify-icon className="text-red-500 group-hover:scale-110 transition-transform" icon="lucide:award" width="32"></iconify-icon>
<div className="text-left">
<div className="text-white font-bold leading-none">Red Dot</div>
<div className="text-[10px] text-zinc-400 uppercase tracking-wider">Winner 2024</div>
</div>
</div>
<div className="flex items-center gap-3 group cursor-default">
<div className="w-8 h-8 bg-white text-black font-black flex items-center justify-center text-xs group-hover:scale-110 transition-transform">iF</div>
<div className="text-left">
<div className="text-white font-bold leading-none">Design Award</div>
<div className="text-[10px] text-zinc-400 uppercase tracking-wider">Gold 2023</div>
</div>
</div>
<div className="flex items-center gap-3 group cursor-default">
<iconify-icon className="text-yellow-500 group-hover:scale-110 transition-transform" icon="lucide:star" width="32"></iconify-icon>
<div className="text-left">
<div className="text-white font-bold leading-none">Eurobike</div>
<div className="text-[10px] text-zinc-400 uppercase tracking-wider">Innovator</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 overflow-hidden" id="partners">
<div className="max-w-7xl mx-auto px-6 mb-12 text-center">
<h2 className="text-2xl font-semibold text-white tracking-tight">Trusted by The Leading Manufacturers</h2>
</div>
<div className="relative w-full">

<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10"></div>

<div className="flex overflow-hidden w-full py-4">
<div className="flex animate-marquee gap-16 md:gap-32 items-center whitespace-nowrap min-w-full pl-16">

<span className="text-2xl font-bold text-zinc-800 tracking-tighter uppercase font-sans hover:text-white transition-colors cursor-pointer">SPECIALIZED</span>
<span className="text-2xl font-bold text-zinc-800 tracking-tighter uppercase font-sans hover:text-white transition-colors cursor-pointer">CANYON</span>
<span className="text-2xl font-bold text-zinc-800 tracking-tighter uppercase font-sans hover:text-white transition-colors cursor-pointer">TREK</span>
<span className="text-2xl font-bold text-zinc-800 tracking-tighter uppercase font-sans hover:text-white transition-colors cursor-pointer">SANTA CRUZ</span>
<span className="text-2xl font-bold text-zinc-800 tracking-tighter uppercase font-sans hover:text-white transition-colors cursor-pointer">SCOTT</span>
<span className="text-2xl font-bold text-zinc-800 tracking-tighter uppercase font-sans hover:text-white transition-colors cursor-pointer">GIANT</span>
<span className="text-2xl font-bold text-zinc-800 tracking-tighter uppercase font-sans hover:text-white transition-colors cursor-pointer">ORBEA</span>
<span className="text-2xl font-bold text-zinc-800 tracking-tighter uppercase font-sans hover:text-white transition-colors cursor-pointer">YETI</span>

<span className="text-2xl font-bold text-zinc-800 tracking-tighter uppercase font-sans hover:text-white transition-colors cursor-pointer">SPECIALIZED</span>
<span className="text-2xl font-bold text-zinc-800 tracking-tighter uppercase font-sans hover:text-white transition-colors cursor-pointer">CANYON</span>
<span className="text-2xl font-bold text-zinc-800 tracking-tighter uppercase font-sans hover:text-white transition-colors cursor-pointer">TREK</span>
<span className="text-2xl font-bold text-zinc-800 tracking-tighter uppercase font-sans hover:text-white transition-colors cursor-pointer">SANTA CRUZ</span>
<span className="text-2xl font-bold text-zinc-800 tracking-tighter uppercase font-sans hover:text-white transition-colors cursor-pointer">SCOTT</span>
<span className="text-2xl font-bold text-zinc-800 tracking-tighter uppercase font-sans hover:text-white transition-colors cursor-pointer">GIANT</span>
<span className="text-2xl font-bold text-zinc-800 tracking-tighter uppercase font-sans hover:text-white transition-colors cursor-pointer">ORBEA</span>
<span className="text-2xl font-bold text-zinc-800 tracking-tighter uppercase font-sans hover:text-white transition-colors cursor-pointer">YETI</span>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-zinc-950 pt-20 pb-10 border-t border-white/5 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-20">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6 text-white" href="#">
<iconify-icon icon="lucide:zap" width="20"></iconify-icon>
<span className="tracking-widest font-bold">AVINOX</span>
</a>
<p className="text-zinc-500 max-w-xs mb-6 leading-relaxed">
                        Pioneering the future of electric mobility with advanced drive systems designed for the path less traveled.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">The Product</h4>
<ul className="space-y-3 text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Drive Units</a></li>
<li><a className="hover:text-white transition-colors" href="#">Batteries</a></li>
<li><a className="hover:text-white transition-colors" href="#">Displays</a></li>
<li><a className="hover:text-white transition-colors" href="#">Software</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-3 text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Resources</h4>
<ul className="space-y-3 text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Support Center</a></li>
<li><a className="hover:text-white transition-colors" href="#">Partner Portal</a></li>
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-xs">
<div>© 2024 Avinox Systems Inc. All rights reserved.</div>
<div className="flex gap-6">
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
