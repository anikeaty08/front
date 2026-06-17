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
      

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl shadow-2xl shadow-black/50">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-semibold tracking-tighter group-hover:scale-105 transition-transform">
                    H
                </div>
<span className="text-white font-semibold tracking-tight text-lg">HYRISTON</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#products">Products</a>
<a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors" href="#rdso">R&amp;D &amp; Quality</a>
<a className="hover:text-white transition-colors" href="#downloads">Downloads</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:flex bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors" href="#contact">
                    Get Quote
                </a>

<button className="md:hidden text-slate-300">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute top-20 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-medium mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                RDSO Approved Manufacturer
            </div>

<h1 className="md:text-7xl leading-[1.1] glow-text text-5xl font-semibold text-white tracking-tight mb-6">
                Reliable Power. <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">Engineered for Industry.</span>
</h1>

<p className="md:text-xl leading-relaxed text-lg font-light text-slate-400 max-w-2xl mr-auto mb-10 ml-auto" style={{}}>Hyriston manufactures industrial-grade power solutions—inverters, UPS, and embedded systemfss designed for critical infrastructure and extreme environments.</p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-2xl font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]" href="#contact">
                    Start a Project
                    <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="flex items-center gap-2 glass-panel text-white px-8 py-3.5 rounded-2xl font-medium hover:bg-white/5 transition-all" href="#downloads">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                    Download Brochure
                </a>
</div>
</div>

<div className="mt-24 border-t border-white/5 pt-10">
<p className="text-center text-sm text-slate-500 mb-8 font-mono uppercase tracking-widest">Trusted by industry leaders</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">

<div className="text-xl font-semibold tracking-tighter text-white">INDIAN RAILWAYS</div>
<div className="text-xl font-semibold tracking-tighter text-white">BSNL</div>
<div className="text-xl font-semibold tracking-tighter text-white">L&amp;T</div>
<div className="text-xl font-semibold tracking-tighter text-white">SIEMENS</div>
<div className="text-xl font-semibold tracking-tighter text-white">ABB</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="container mx-auto px-4">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Why the Industry Choose Hyriston</h2>
<p className="text-slate-400">Combining deep R&amp;D capabilities with ISO-level manufacturing quality.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-3xl group hover:border-blue-500/30 transition-colors">
<div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-award w-6 h-6" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">RDSO Approved</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        Certified SMPS power plants for Indian Railway telecom equipment. We meet the strictest safety and performance standards.
                    </p>
</div>

<div className="glass-panel p-8 rounded-3xl group hover:border-blue-500/30 transition-colors">
<div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-cpu w-6 h-6" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Custom Embedded R&amp;D</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        In-house R&amp;D team capable of designing custom IoT devices, controllers, and power circuits from scratch.
                    </p>
</div>

<div className="glass-panel p-8 rounded-3xl group hover:border-blue-500/30 transition-colors">
<div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-factory w-6 h-6" data-lucide="factory" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16h.01"></path><path d="M16 16h.01"></path><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path><path d="M8 16h.01"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">End-to-End Mfg</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        From prototyping to mass production. Our facility handles rigorous testing, QA, and assembly under one roof.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080910] border-y border-white/5" id="products">
<div className="container mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">Our Solutions</h2>
<p className="text-slate-400">High-performance power electronics for every application.</p>
</div>
<a className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1" href="#">
                    View full catalog <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative rounded-2xl overflow-hidden bg-[#0F111A] border border-white/5 hover:border-white/10 transition-all">
<div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center group-hover:opacity-90 transition-opacity">

<svg className="lucide lucide-zap w-12 h-12 text-slate-600" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="p-5">
<div className="text-xs font-mono text-blue-400 mb-2">POWER</div>
<h3 className="text-lg font-semibold text-white mb-1">Industrial Inverters</h3>
<p className="text-xs text-slate-500 mb-4">Single &amp; Three-phase solutions.</p>
<a className="text-sm text-white border-b border-white/20 pb-0.5 hover:border-blue-500 hover:text-blue-400 transition-colors inline-flex items-center gap-1" href="#">
                            Specs <svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-[#0F111A] border border-white/5 hover:border-white/10 transition-all">
<div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
<svg className="lucide lucide-battery-charging w-12 h-12 text-slate-600" data-lucide="battery-charging" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7-3 5h4l-3 5"></path><path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path><path d="M22 14v-4"></path><path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path></svg>
</div>
<div className="p-5">
<div className="text-xs font-mono text-blue-400 mb-2">BACKUP</div>
<h3 className="text-lg font-semibold text-white mb-1">Online UPS Systems</h3>
<p className="text-xs text-slate-500 mb-4">Zero transfer time, line-interactive.</p>
<a className="text-sm text-white border-b border-white/20 pb-0.5 hover:border-blue-500 hover:text-blue-400 transition-colors inline-flex items-center gap-1" href="#">
                            Specs <svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-[#0F111A] border border-white/5 hover:border-white/10 transition-all">
<div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
<svg className="lucide lucide-activity w-12 h-12 text-slate-600" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="p-5">
<div className="text-xs font-mono text-blue-400 mb-2">REGULATION</div>
<h3 className="text-lg font-semibold text-white mb-1">Isolation Transformers</h3>
<p className="text-xs text-slate-500 mb-4">Noise reduction &amp; surge protection.</p>
<a className="text-sm text-white border-b border-white/20 pb-0.5 hover:border-blue-500 hover:text-blue-400 transition-colors inline-flex items-center gap-1" href="#">
                            Specs <svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-[#0F111A] border border-white/5 hover:border-white/10 transition-all">
<div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
<svg className="lucide lucide-wifi w-12 h-12 text-slate-600" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
</div>
<div className="p-5">
<div className="text-xs font-mono text-blue-400 mb-2">SMART</div>
<h3 className="text-lg font-semibold text-white mb-1">IoT &amp; Embedded</h3>
<p className="text-xs text-slate-500 mb-4">Custom controllers &amp; telemetry.</p>
<a className="text-sm text-white border-b border-white/20 pb-0.5 hover:border-blue-500 hover:text-blue-400 transition-colors inline-flex items-center gap-1" href="#">
                            Specs <svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="solutions">

<div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="container mx-auto px-4">
<div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-yellow-400 to-blue-500"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="">
<div className="text-yellow-400 text-sm font-mono mb-4 flex items-center gap-2">
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> CASE STUDY
                        </div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Powering Indian Railways Telecom Network</h2>
<p className="text-slate-400 text-lg mb-8">
                            HYRISTON successfully deployed RDSO-approved SMPS power plants across critical junction points. The solution involved high-redundancy power modules ensuring 99.999% uptime for signaling equipment.
                        </p>
<div className="grid grid-cols-2 gap-6 mb-8">
<div className="">
<div className="text-3xl font-semibold text-white" style={{}}>99.8%</div>
<div className="text-sm text-slate-500">Uptime Guarantee</div>
</div>
<div>
<div className="text-3xl font-semibold text-white">10+</div>
<div className="text-sm text-slate-500">Railway Zones</div>
</div>
</div>
<button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl text-sm font-medium transition-colors border border-white/10">
                            Read Case Study
                        </button>
</div>
<div className="relative">
<div className="aspect-video bg-slate-800 rounded-xl overflow-hidden border border-white/10 shadow-2xl relative">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"></div>
<div className="absolute bottom-4 left-4 right-4 p-4 glass-panel rounded-lg">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-xs font-mono text-green-400">SYSTEM OPERATIONAL</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12" id="downloads">
<div className="container mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-panel p-10 rounded-3xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<svg className="lucide lucide-microscope w-32 h-32 text-white" data-lucide="microscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">R&amp;D Capabilities</h3>
<ul className="space-y-3 mb-8 text-slate-400">
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle w-4 h-4 text-blue-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> In-house PCB Design &amp; Prototyping</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle w-4 h-4 text-blue-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Thermal &amp; Load Testing Labs</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle w-4 h-4 text-blue-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Firmware Development</li>
</ul>
<a className="text-white text-sm font-medium hover:text-blue-400 transition-colors flex items-center gap-2" href="#rdso">
                        Explore our facility <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="bg-blue-600 p-10 rounded-3xl relative overflow-hidden text-white flex flex-col justify-between">
<div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-50"></div>
<div>
<h3 className="text-2xl font-semibold mb-2">Technical Resources</h3>
<p className="text-blue-100 mb-6 text-sm">Access datasheets, brochures, and certificates.</p>
<div className="space-y-3">
<a className="block bg-white/20 hover:bg-white/30 p-3 rounded-lg backdrop-blur-sm transition-colors flex justify-between items-center group" href="#">
<div className="flex items-center gap-3">
<svg className="lucide lucide-file-text w-5 h-5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="font-medium text-sm">Product Brochure 2024</span>
</div>
<svg className="lucide lucide-download w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</a>
<a className="block bg-white/20 hover:bg-white/30 p-3 rounded-lg backdrop-blur-sm transition-colors flex justify-between items-center group" href="#">
<div className="flex items-center gap-3">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-medium text-sm">RDSO Certificate</span>
</div>
<svg className="lucide lucide-download w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="contact">
<div className="container mx-auto px-4 max-w-5xl">
<div className="grid grid-cols-1 md:grid-cols-5 gap-12 bg-[#0F111A] border border-white/5 rounded-3xl p-8 md:p-12">

<div className="md:col-span-2 space-y-8">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Let's build together.</h2>
<p className="text-slate-400 text-sm">Whether you need a custom embedded solution or bulk industrial power supplies, our engineering team is ready.</p>
</div>
<div className="space-y-4">
<div className="flex items-start gap-3 text-slate-300 text-sm">
<svg className="lucide lucide-map-pin w-5 h-5 text-blue-500 mt-0.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Plot No. 12, Industrial Area,<br/>Tech Zone, City - 110020</span>
</div>
<div className="flex items-center gap-3 text-slate-300 text-sm">
<svg className="lucide lucide-mail w-5 h-5 text-blue-500" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<a className="hover:text-white" href="mailto:sales@hyriston.com">sales@hyriston.com</a>
</div>
<div className="flex items-center gap-3 text-slate-300 text-sm">
<svg className="lucide lucide-phone w-5 h-5 text-blue-500" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>+91 98765 43210</span>
</div>
</div>
</div>

<div className="md:col-span-3">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-400 ml-1">Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-400 ml-1">Company</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm" placeholder="Acme Industries" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-400 ml-1">Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm" placeholder="john@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-400 ml-1">Interest</label>
<div className="relative">
<select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm appearance-none">
<option className="bg-slate-900">Inverters &amp; UPS</option>
<option className="bg-slate-900">Embedded Systems Design</option>
<option className="bg-slate-900">Isolation Transformers</option>
<option className="bg-slate-900">RDSO Products</option>
<option className="bg-slate-900">Other</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-3.5 w-4 h-4 text-slate-500 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-400 ml-1">Message</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm resize-none" placeholder="Tell us about your project requirements..." rows="3"></textarea>
</div>
<div className="pt-2">
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-xl transition-colors shadow-lg shadow-blue-900/20" type="button">
                                Send Enquiry
                            </button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-16 pb-8 bg-[#0B0C15]">
<div className="container mx-auto px-4">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">H</div>
<span className="text-white font-semibold">HYRISTON</span>
</a>
<p className="text-xs text-slate-500 max-w-[150px]">
                        Industrial grade power solutions engineered for reliability.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Products</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-400 transition-colors" href="#">Inverters</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Online UPS</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Transformers</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">R&amp;D Facility</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Social</h4>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-youtube w-5 h-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2024 Hyriston Electronics Pvt Ltd. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-600">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
