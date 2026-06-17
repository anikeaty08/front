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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10 text-white transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 text-xl font-medium tracking-tight" href="#">
<div className="w-8 h-8 rounded bg-amber-500 flex items-center justify-center text-slate-900">
<iconify-icon icon="solar:pulse-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
                VNTRN
            </a>

<nav className="hidden lg:flex items-center h-full gap-8 text-sm font-medium">

<div className="group h-full flex items-center relative cursor-pointer">
<span className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors">
                        Brands <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
<div className="mega-menu absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white text-slate-900 rounded-xl shadow-2xl border border-slate-200 opacity-0 invisible translate-y-2 transition-all duration-300 p-6 grid grid-cols-3 gap-6 cursor-default">
<div>
<h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Top Tier</h4>
<ul className="space-y-3">
<li><a className="text-sm hover:text-amber-600 transition-colors flex items-center gap-2" href="#"><iconify-icon className="text-slate-400" icon="solar:buildings-linear"></iconify-icon> Fluke Corp</a></li>
<li><a className="text-sm hover:text-amber-600 transition-colors flex items-center gap-2" href="#"><iconify-icon className="text-slate-400" icon="solar:buildings-linear"></iconify-icon> Keysight</a></li>
<li><a className="text-sm hover:text-amber-600 transition-colors flex items-center gap-2" href="#"><iconify-icon className="text-slate-400" icon="solar:buildings-linear"></iconify-icon> Tektronix</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Specialty</h4>
<ul className="space-y-3">
<li><a className="text-sm hover:text-amber-600 transition-colors flex items-center gap-2" href="#"><iconify-icon className="text-slate-400" icon="solar:cpu-linear"></iconify-icon> Rohde &amp; Schwarz</a></li>
<li><a className="text-sm hover:text-amber-600 transition-colors flex items-center gap-2" href="#"><iconify-icon className="text-slate-400" icon="solar:cpu-linear"></iconify-icon> Anritsu</a></li>
<li><a className="text-sm hover:text-amber-600 transition-colors flex items-center gap-2" href="#"><iconify-icon className="text-slate-400" icon="solar:cpu-linear"></iconify-icon> Megger</a></li>
</ul>
</div>
<div className="bg-slate-50 p-4 rounded-lg flex flex-col justify-between">
<div>
<h4 className="text-sm font-medium text-slate-900 mb-2">Partner Directory</h4>
<p className="text-xs text-slate-500">Explore our full catalog of over 50+ authorized manufacturing partners.</p>
</div>
<a className="text-xs font-medium text-amber-600 flex items-center gap-1 mt-4 hover:gap-2 transition-all" href="#">View All <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>

<div className="group h-full flex items-center relative cursor-pointer">
<span className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors">
                        Industries <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
<div className="mega-menu absolute top-full left-1/2 -translate-x-1/2 w-[700px] bg-white text-slate-900 rounded-xl shadow-2xl border border-slate-200 opacity-0 invisible translate-y-2 transition-all duration-300 p-6 grid grid-cols-2 gap-4 cursor-default">
<a className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item" href="#">
<div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 group-hover/item:text-amber-600 group-hover/item:bg-amber-50 transition-colors">
<iconify-icon className="text-xl" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h5 className="text-sm font-medium text-slate-900 mb-1">Power &amp; Energy</h5>
<p className="text-xs text-slate-500">High voltage testing, grid analysis, and renewables.</p>
</div>
</a>
<a className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item" href="#">
<div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 group-hover/item:text-amber-600 group-hover/item:bg-amber-50 transition-colors">
<iconify-icon className="text-xl" icon="solar:rocket-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h5 className="text-sm font-medium text-slate-900 mb-1">Aerospace &amp; Defense</h5>
<p className="text-xs text-slate-500">Precision avionics, RF testing, and radar systems.</p>
</div>
</a>
<a className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item" href="#">
<div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 group-hover/item:text-amber-600 group-hover/item:bg-amber-50 transition-colors">
<iconify-icon className="text-xl" icon="solar:car-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h5 className="text-sm font-medium text-slate-900 mb-1">Automotive</h5>
<p className="text-xs text-slate-500">EV battery testing, telemetry, and safety sensors.</p>
</div>
</a>
<a className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item" href="#">
<div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 group-hover/item:text-amber-600 group-hover/item:bg-amber-50 transition-colors">
<iconify-icon className="text-xl" icon="solar:tower-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h5 className="text-sm font-medium text-slate-900 mb-1">Telecommunications</h5>
<p className="text-xs text-slate-500">5G infrastructure, fiber optics, and network analysis.</p>
</div>
</a>
</div>
</div>
<a className="text-slate-300 hover:text-white transition-colors" href="#">Services</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#">Resources</a>
</nav>

<div className="hidden lg:flex items-center gap-6">
<div className="relative group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-amber-500 transition-colors" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-white/10 border border-white/10 rounded-full py-2 pl-9 pr-4 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:bg-white/20 transition-all w-48 focus:w-64" placeholder="Search instruments..." type="text"/>
</div>
<div className="flex flex-col items-end">
<span className="text-xs text-slate-400">Technical Support</span>
<a className="text-sm font-medium hover:text-amber-400 transition-colors" href="tel:+18005550199">+1 (800) 555-0199</a>
</div>
<a className="bg-amber-500 hover:bg-amber-400 text-slate-900 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_20px_rgba(245,158,11,0.5)]" href="#">
                    Shop Online
                </a>
</div>

<button className="lg:hidden text-2xl text-slate-300">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>

<section className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden pt-20">

<div className="absolute inset-0 z-0">
<div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-1/4 right-1/10 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px]"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_10%,transparent_100%)]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center w-full">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-amber-400 mb-8 backdrop-blur-sm">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon> ISO 9001:2015 Certified
                </div>
<h1 className="text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                    Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Measurement</span> for the Modern Era.
                </h1>
<p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">
                    Empowering industries with comprehensive testing equipment, calibration services, and expert consultation to ensure uncompromising accuracy and safety.
                </p>
<div className="flex flex-wrap items-center gap-4">
<a className="bg-amber-500 hover:bg-amber-400 text-slate-900 text-sm font-medium px-6 py-3 rounded-lg transition-colors flex items-center gap-2" href="#">
                        Explore Products <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors flex items-center gap-2" href="#">
                        Contact Sales
                    </a>
</div>
</div>

<div className="hidden lg:flex relative justify-center items-center h-[500px]">
<div className="relative w-full max-w-md aspect-square border border-white/10 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]">
<div className="absolute w-[80%] h-[80%] border border-white/5 rounded-full flex items-center justify-center border-dashed"></div>
<div className="absolute w-[60%] h-[60%] border border-amber-500/20 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.1)]"></div>
<div className="absolute w-4 h-4 bg-amber-500 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(245,158,11,0.8)]"></div>
</div>

<div className="absolute bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl -bottom-10 -left-10 w-64 transform transition-transform hover:-translate-y-2">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-500">
<iconify-icon className="text-xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<span className="text-xs text-emerald-400 font-medium">+99.9% Accuracy</span>
</div>
<h3 className="text-white text-sm font-medium mb-1">Real-time Calibration</h3>
<p className="text-xs text-slate-400">Automated synchronization with NIST standards.</p>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
<span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
<iconify-icon className="text-slate-500" icon="solar:arrow-down-linear"></iconify-icon>
</div>
</section>

<section className="py-12 bg-white border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium text-slate-500 mb-8 tracking-tight">TRUSTED BY INDUSTRY LEADERS WORLDWIDE</p>
<div className="flex overflow-x-auto hide-scrollbar items-center gap-12 lg:gap-24 justify-start lg:justify-center opacity-60 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">

<div className="text-xl font-medium tracking-tighter text-slate-800 shrink-0">FLUKE</div>
<div className="text-xl font-medium tracking-tighter text-slate-800 shrink-0">KEYSIGHT</div>
<div className="text-xl font-medium tracking-tighter text-slate-800 shrink-0">TEKTRONIX</div>
<div className="text-xl font-medium tracking-tighter text-slate-800 shrink-0">ROHDE&amp;SCHWARZ</div>
<div className="text-xl font-medium tracking-tighter text-slate-800 shrink-0">ANRITSU</div>
<div className="text-xl font-medium tracking-tighter text-slate-800 shrink-0">MEGGER</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-3">Equipment Categories</h2>
<p className="text-slate-500 max-w-xl">Browse our extensive inventory of high-precision testing and measurement tools engineered for exactitude.</p>
</div>
<a className="text-sm font-medium text-amber-600 flex items-center gap-1 hover:gap-2 transition-all" href="#">View All Categories <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
<a className="group bg-white border border-slate-200 rounded-xl p-6 flex flex-col items-center text-center hover:border-amber-500 hover:shadow-lg transition-all duration-300" href="#">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 mb-4 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:bolt-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1">Electrical</h3>
<span className="text-xs text-slate-400 group-hover:text-amber-600 transition-colors flex items-center gap-1">Explore <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></span>
</a>
<a className="group bg-white border border-slate-200 rounded-xl p-6 flex flex-col items-center text-center hover:border-amber-500 hover:shadow-lg transition-all duration-300" href="#">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 mb-4 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:thermometer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1">Temperature</h3>
<span className="text-xs text-slate-400 group-hover:text-amber-600 transition-colors flex items-center gap-1">Explore <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></span>
</a>
<a className="group bg-white border border-slate-200 rounded-xl p-6 flex flex-col items-center text-center hover:border-amber-500 hover:shadow-lg transition-all duration-300" href="#">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 mb-4 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:wi-fi-router-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1">RF &amp; Microwave</h3>
<span className="text-xs text-slate-400 group-hover:text-amber-600 transition-colors flex items-center gap-1">Explore <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></span>
</a>
<a className="group bg-white border border-slate-200 rounded-xl p-6 flex flex-col items-center text-center hover:border-amber-500 hover:shadow-lg transition-all duration-300" href="#">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 mb-4 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:server-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1">Data Logging</h3>
<span className="text-xs text-slate-400 group-hover:text-amber-600 transition-colors flex items-center gap-1">Explore <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></span>
</a>
<a className="group bg-white border border-slate-200 rounded-xl p-6 flex flex-col items-center text-center hover:border-amber-500 hover:shadow-lg transition-all duration-300" href="#">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 mb-4 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:ruler-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1">Dimensional</h3>
<span className="text-xs text-slate-400 group-hover:text-amber-600 transition-colors flex items-center gap-1">Explore <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></span>
</a>
<a className="group bg-white border border-slate-200 rounded-xl p-6 flex flex-col items-center text-center hover:border-amber-500 hover:shadow-lg transition-all duration-300" href="#">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 mb-4 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:test-tube-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1">Chemical</h3>
<span className="text-xs text-slate-400 group-hover:text-amber-600 transition-colors flex items-center gap-1">Explore <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-12">Industry Applications</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">

<div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 transform transition-transform duration-700 group-hover:scale-105">
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0,transparent_100%)]"></div>
</div>
<div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/60 transition-colors duration-300"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-white mb-4 border border-white/20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:routing-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Semiconductor Testing</h3>
<p className="text-sm text-slate-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">Advanced wafer probing and signal integrity analysis for next-gen microchips.</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-slate-950 transform transition-transform duration-700 group-hover:scale-105">
<div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
</div>
<div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/60 transition-colors duration-300"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-white mb-4 border border-white/20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:battery-charge-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">EV Battery Analytics</h3>
<p className="text-sm text-slate-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">Cell characterization, thermal monitoring, and lifecycle testing solutions.</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 transform transition-transform duration-700 group-hover:scale-105">
<div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.8)_0,transparent_60%)]"></div>
</div>
<div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/60 transition-colors duration-300"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-white mb-4 border border-white/20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:radar-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Aerospace Telemetry</h3>
<p className="text-sm text-slate-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">High-frequency RF testing and environmental simulation for flight systems.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/10 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-3 gap-8 divide-x divide-white/10">
<div className="flex flex-col gap-3 pr-8">
<iconify-icon className="text-3xl text-amber-500" icon="solar:diploma-linear"></iconify-icon>
<h4 className="text-base font-medium">Accredited Calibration</h4>
<p className="text-sm text-slate-400 font-light">ISO/IEC 17025 accredited labs ensuring your instruments meet strict compliance standards.</p>
</div>
<div className="flex flex-col gap-3 px-8">
<iconify-icon className="text-3xl text-amber-500" icon="solar:wrench-linear"></iconify-icon>
<h4 className="text-base font-medium">Repair &amp; Maintenance</h4>
<p className="text-sm text-slate-400 font-light">Factory-trained technicians providing fast turnaround times to minimize your downtime.</p>
</div>
<div className="flex flex-col gap-3 pl-8">
<iconify-icon className="text-3xl text-amber-500" icon="solar:laptop-minimalistic-linear"></iconify-icon>
<h4 className="text-base font-medium">Software Integration</h4>
<p className="text-sm text-slate-400 font-light">Custom automated test systems (ATS) and data management software solutions.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl lg:text-4xl font-medium text-slate-900 tracking-tight mb-4">Need help choosing the right instrument?</h2>
<p className="text-slate-500 mb-8 max-w-2xl mx-auto text-lg">Our application engineers are ready to assist you with technical specifications, product demonstrations, and custom configurations.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-8 py-3.5 rounded-lg transition-colors w-full sm:w-auto text-center" href="#">
                    Get Expert Consultation
                </a>
<a className="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-sm font-medium px-8 py-3.5 rounded-lg transition-colors w-full sm:w-auto text-center" href="#">
                    Browse Resource Center
                </a>
</div>
</div>
</section>

<footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

<div>
<a className="flex items-center gap-2 text-xl font-medium tracking-tight text-white mb-6" href="#">
<div className="w-8 h-8 rounded bg-amber-500 flex items-center justify-center text-slate-900">
<iconify-icon icon="solar:pulse-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
                        VNTRN
                    </a>
<p className="text-sm text-slate-400 font-light mb-6 leading-relaxed">
                        The premier distributor of industrial testing, measurement, and calibration equipment. Delivering accuracy since 1995.
                    </p>
<div className="flex items-center gap-4 text-slate-400">
<a className="hover:text-amber-500 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:link-circle-linear"></iconify-icon></a>
<a className="hover:text-amber-500 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
<a className="hover:text-amber-500 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon></a>
</div>
</div>

<div>
<h5 className="text-sm font-medium text-white mb-6">Quick Links</h5>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Shop All Products</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Brands &amp; Partners</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Request a Quote</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Track Order</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>

<div>
<h5 className="text-sm font-medium text-white mb-6">Services</h5>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Equipment Calibration</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Repair Center</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Rental Equipment</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Training &amp; Certifications</a></li>
</ul>
</div>

<div>
<h5 className="text-sm font-medium text-white mb-6">Contact</h5>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="text-lg text-slate-500 mt-0.5 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>100 Innovation Drive,<br/>Tech Park, CA 94043</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="text-lg text-slate-500 shrink-0" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:+18005550199">+1 (800) 555-0199</a>
</li>
<li className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="text-lg text-slate-500 shrink-0" icon="solar:letter-opened-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:sales@vntrn.com">sales@vntrn.com</a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-slate-500">
<p>© 2023 VNTRN Instruments. All rights reserved.</p>
<div className="flex items-center gap-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Cookie Settings</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
