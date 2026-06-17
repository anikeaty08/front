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
      

<nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 text-white">
<div className="flex h-20 max-w-7xl mx-auto px-6 items-center justify-between">

<div className="flex items-center gap-4">
<a className="flex items-center gap-3 group" href="#">
<div className="relative flex items-center justify-center w-8 h-8 bg-gradient-to-tr from-zinc-800 to-zinc-900 rounded-lg border border-white/10 group-hover:border-white/20 transition-all shadow-inner overflow-hidden">
<div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<svg className="text-white w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="M2 12h20"></path></svg>
</div>
<span className="text-xl font-semibold tracking-tight text-white group-hover:text-zinc-200 transition-colors">platmech</span>
</a>
<div className="hidden sm:block h-5 w-px bg-white/10"></div>
<div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</div>
<span className="text-[11px] font-semibold tracking-wide text-zinc-300 uppercase">TCL Partner</span>
</div>
</div>

<nav className="hidden md:flex items-center p-1 bg-zinc-900/50 border border-white/10 rounded-full backdrop-blur-xl shadow-lg shadow-black/20">
<a className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/10 transition-all group" href="#">
<svg className="lucide lucide-zap w-3.5 h-3.5 text-zinc-500 group-hover:text-blue-400 transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
<span>Solutions</span>
</a>
<a className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/10 transition-all group" href="#">
<svg className="lucide lucide-folder-open w-3.5 h-3.5 text-zinc-500 group-hover:text-amber-400 transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"></path></svg>
<span>Case Studies</span>
</a>
<a className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/10 transition-all group" href="#">
<svg className="lucide lucide-sparkles w-3.5 h-3.5 text-zinc-500 group-hover:text-purple-400 transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M9 3v4"></path><path d="M3 5h4"></path><path d="M3 9h4"></path></svg>
<span>News</span>
</a>
<div className="w-px h-4 bg-white/10 mx-1"></div>
<a className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/10 transition-all group" href="#">
<svg className="lucide lucide-message-circle w-3.5 h-3.5 text-zinc-500 group-hover:text-green-400 transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
<span>Contact</span>
</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 pl-4 pr-3 py-2 bg-white text-zinc-950 rounded-lg text-sm font-semibold hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] group" href="#">
<span>Proposal</span>
<div className="bg-zinc-900/10 p-0.5 rounded-full group-hover:translate-x-0.5 transition-transform">
<svg className="lucide lucide-arrow-right w-3.5 h-3.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>
<button className="md:hidden text-zinc-400 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors">
<svg className="lucide lucide-menu w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 8h16"></path><path d="M4 16h16"></path></svg>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-zinc-900 text-white">

<div className="absolute inset-0 z-0">
<img alt="Industrial HVAC" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-300 mb-8 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="font-medium">Exclusive TCL Partnership</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-8 text-white">
          Smart HVAC Solutions,
          <br/>
<span className="text-zinc-400">Powered by Global Scale.</span>
</h1>
<p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Platmech brings world-class HVAC innovation to the Irish market,
          delivering high-performance systems with sharper pricing and smarter
          service.
        </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-3.5 bg-white text-zinc-950 rounded text-base font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#">
            Request a Proposal
          </a>
<a className="w-full md:w-auto px-8 py-3.5 bg-white/10 border border-white/10 text-white rounded text-base font-medium hover:bg-white/20 transition-colors backdrop-blur-sm flex items-center justify-center gap-2" href="#">
            Case Studies
            <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</header>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="">
<span className="text-sm font-medium tracking-widest text-zinc-500 uppercase mb-4 block">
            TCL Heat Pumps
          </span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6">
            Precision Engineering,
            <br/>
            Award Winning Technology.
          </h2>
<p className="text-lg text-zinc-600 leading-relaxed mb-6">
            We are the exclusive distributor for TCL Heat Pump systems in
            Ireland. TCL is a global leader in smart technology, with
            world-class manufacturing and award winning heat pump products
            designed for efficiency.
          </p>
<div className="flex gap-4 mt-8">
<button className="px-6 py-3 bg-zinc-900 text-white text-sm font-medium rounded hover:bg-zinc-800 transition-colors">
              Download Brochure
            </button>
<button className="px-6 py-3 border border-zinc-200 text-zinc-900 text-sm font-medium rounded hover:border-zinc-400 transition-colors">
              Learn More
            </button>
</div>
</div>
<div className="bg-zinc-50 p-12 rounded-xl border border-zinc-100 flex flex-col items-center justify-center text-center">
<div className="flex items-center gap-4 mb-8">
<div className="text-4xl font-bold text-red-600 tracking-tight">
              TCL
            </div>
<div className="h-8 w-px bg-zinc-300"></div>
<div className="flex gap-1">
<div className="w-3 h-3 rounded-full border border-blue-600"></div>
<div className="w-3 h-3 rounded-full border border-black"></div>
<div className="w-3 h-3 rounded-full border border-red-600"></div>
<div className="w-3 h-3 rounded-full border border-yellow-500"></div>
<div className="w-3 h-3 rounded-full border border-green-600"></div>
</div>
</div>
<p className="text-sm text-zinc-500 max-w-md mx-auto leading-relaxed">
            The award-winning
            
            R290 Tri-Thermal Heat Pump range delivers exceptional efficiency,
            low-noise operation, and high-temperature performance up to 80°C.
          </p>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<span className="text-sm font-medium tracking-widest text-blue-600 uppercase mb-4 block bg-blue-50 w-fit mx-auto px-3 py-1 rounded-full border border-blue-100">
                    Integrated Solution
                </span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6">
                    The Platmech Package
                </h2>
<p className="text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                    A complete developer ecosystem designed for confidence. One partner, one cohesive system, total accountability from design to aftercare.
                </p>
</div>
<div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="hidden lg:block absolute top-[60px] left-0 w-full h-px border-t-2 border-dashed border-zinc-200 z-0"></div>

<div className="lg:hidden absolute top-0 bottom-0 left-[43px] w-px border-l-2 border-dashed border-zinc-200 z-0"></div>

<div className="group relative z-10 bg-white rounded-2xl p-8 border border-zinc-200/60 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative flex flex-col h-full">
<div className="flex items-center justify-between mb-8">
<div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500">
<svg className="animate-float" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
<div className="absolute -bottom-2 -right-2 bg-white text-zinc-900 text-[10px] font-bold px-2 py-0.5 rounded-full border border-zinc-100 shadow-sm">01</div>
</div>
<div className="opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-blue-500">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors">
                            The Engine: TCL R290
                        </h3>
<p className="text-zinc-600 leading-relaxed text-sm mb-6 flex-grow">
                            Market-leading SCOP of 5.33 and ultra-quiet 35 dB(A) operation. The R290 Tri-Thermal system handles high-temp demands (80°C) with future-proof, eco-friendly refrigerant technology.
                        </p>
<div className="pt-6 border-t border-zinc-100 mt-auto">
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs font-medium text-zinc-500">
<svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    A+++ Energy Efficiency
                                </li>
<li className="flex items-center gap-2 text-xs font-medium text-zinc-500">
<svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Future-proof R290 Gas
                                </li>
</ul>
</div>
</div>
</div>

<div className="group relative z-10 bg-white rounded-2xl p-8 border border-zinc-200/60 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative flex flex-col h-full">
<div className="flex items-center justify-between mb-8">
<div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-500">
<svg className="animate-float" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.8-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
<div className="absolute -bottom-2 -right-2 bg-white text-zinc-900 text-[10px] font-bold px-2 py-0.5 rounded-full border border-zinc-100 shadow-sm">02</div>
</div>
<div className="opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-cyan-500">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-3 group-hover:text-cyan-600 transition-colors">
                            The Hub: Pre-Plumbed Cylinder
                        </h3>
<p className="text-zinc-600 leading-relaxed text-sm mb-6 flex-grow">
                            Stainless steel construction meets plug-and-play design. Factory tested with integrated buffers and premium insulation, our cylinders drastically reduce install time and eliminate callbacks.
                        </p>
<div className="pt-6 border-t border-zinc-100 mt-auto">
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs font-medium text-zinc-500">
<svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Rapid Installation
                                </li>
<li className="flex items-center gap-2 text-xs font-medium text-zinc-500">
<svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Lifetime Warranty
                                </li>
</ul>
</div>
</div>
</div>

<div className="group relative z-10 bg-white rounded-2xl p-8 border border-zinc-200/60 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative flex flex-col h-full">
<div className="flex items-center justify-between mb-8">
<div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-500">
<svg className="animate-float" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
<div className="absolute -bottom-2 -right-2 bg-white text-zinc-900 text-[10px] font-bold px-2 py-0.5 rounded-full border border-zinc-100 shadow-sm">03</div>
</div>
<div className="opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-indigo-500">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m22 4-12 12-4-4"></path></svg>
</div>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-3 group-hover:text-indigo-600 transition-colors">
                            The Guarantee: Total Aftercare
                        </h3>
<p className="text-zinc-600 leading-relaxed text-sm mb-6 flex-grow">
                            Dublin-based support ensures long-term reliability. We manage warranties, spare parts, and commissioning documentation, giving developers and homeowners total peace of mind.
                        </p>
<div className="pt-6 border-t border-zinc-100 mt-auto">
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs font-medium text-zinc-500">
<svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Local Spare Parts
                                </li>
<li className="flex items-center gap-2 text-xs font-medium text-zinc-500">
<svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Traceable Commissioning
                                </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 text-white relative overflow-hidden">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-24">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
            The Platmech Journey
          </h2>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            From vision to trusted distributor and installer of HVAC solutions
            in Ireland.
          </p>
</div>
<div className="relative">

<div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 md:-ml-px"></div>

<div className="space-y-16">

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
<div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-1 hidden md:block"></div>
<div className="absolute left-[-5px] md:left-1/2 top-1 md:top-1/2 w-2.5 h-2.5 bg-zinc-950 border border-zinc-500 rounded-full md:-mt-1 md:-ml-[5px] z-20 group-hover:bg-white group-hover:border-white transition-all"></div>
<div className="md:w-1/2 md:pl-12 order-2 md:order-2 pl-8">
<span className="text-sm font-mono text-zinc-500 mb-1 block">
                  2014
                </span>
<h3 className="text-xl font-medium text-white mb-2">
                  How It All Started
                </h3>
<p className="text-zinc-400 text-base leading-relaxed">
                  Donal Somers founded Platinum Air Conditioning to offer
                  bespoke service in the HVAC industry.
                </p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
<div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 pl-8 md:pl-0">
<span className="text-sm font-mono text-zinc-500 mb-1 block">
                  2019
                </span>
<h3 className="text-xl font-medium text-white mb-2">
                  Big Step Forward
                </h3>
<p className="text-zinc-400 text-base leading-relaxed">
                  Partnered with a leading Irish real estate developer on
                  significant HVAC upgrades for Dublin office buildings.
                </p>
</div>
<div className="absolute left-[-5px] md:left-1/2 top-1 md:top-1/2 w-2.5 h-2.5 bg-zinc-950 border border-zinc-500 rounded-full md:-mt-1 md:-ml-[5px] z-20 group-hover:bg-white group-hover:border-white transition-all"></div>
<div className="md:w-1/2 hidden md:block order-2"></div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
<div className="md:w-1/2 hidden md:block order-1"></div>
<div className="absolute left-[-5px] md:left-1/2 top-1 md:top-1/2 w-2.5 h-2.5 bg-zinc-950 border border-zinc-500 rounded-full md:-mt-1 md:-ml-[5px] z-20 group-hover:bg-white group-hover:border-white transition-all"></div>
<div className="md:w-1/2 md:pl-12 order-2 pl-8">
<span className="text-sm font-mono text-zinc-500 mb-1 block">
                  2021
                </span>
<h3 className="text-xl font-medium text-white mb-2">
                  Taking on Bigger Projects
                </h3>
<p className="text-zinc-400 text-base leading-relaxed">
                  Delivered full-scale mechanical installation for the Dublin
                  office and R&amp;D lab of a leading NASDAQ-listed firm.
                </p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
<div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 pl-8 md:pl-0">
<div className="inline-block px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-xs font-medium mb-2 border border-blue-500/20">
                  Current Era
                </div>
<span className="text-sm font-mono text-zinc-500 mb-1 block">
                  2025
                </span>
<h3 className="text-2xl font-semibold text-white mb-2">
                  Platmech Partnership
                </h3>
<p className="text-zinc-400 text-base leading-relaxed">
                  Officially rebranded as Platmech, entering an exciting new
                  chapter with the exclusive partnership with TCL.
                </p>
</div>
<div className="absolute left-[-5px] md:left-1/2 top-1 md:top-1/2 w-3 h-3 bg-white border border-white rounded-full md:-mt-1 md:-ml-[6px] z-20 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
<div className="md:w-1/2 hidden md:block order-2"></div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#FBFBF9] py-24 border-b border-zinc-200">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/2">
<div className="aspect-video bg-zinc-200 rounded-lg overflow-hidden shadow-sm relative group cursor-pointer">
<img alt="Meeting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
</div>
</div>
<div className="w-full md:w-1/2">
<div className="flex items-center gap-3 text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4">
<span>News</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span>2 min read</span>
</div>
<h3 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">
              Platmech Launches Exclusive Irish Partnership with TCL
            </h3>
<p className="text-lg text-zinc-600 leading-relaxed mb-6">
              Platmech officially launched their partnership with TCL at Ella
              House, Dublin on September 11th, 2025, marking a major milestone
              for the HVAC industry.
            </p>
<a className="inline-flex items-center text-zinc-900 font-medium hover:text-blue-600 transition-colors" href="#">
              Read full story
              <svg className="lucide lucide-arrow-right w-4 h-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white relative">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-4xl font-semibold tracking-tight mb-4">
              Our Services &amp;
              
              Capabilities
            </h2>
<p className="text-zinc-400 text-lg max-w-md">
              Comprehensive solutions designed for modern infrastructure
              requirements.
            </p>
</div>
<div className="flex gap-4">
<button className="px-5 py-2 bg-white text-zinc-900 text-sm font-medium rounded hover:bg-zinc-200 transition-colors">
              Request Proposal
            </button>
<button className="px-5 py-2 border border-zinc-700 text-white text-sm font-medium rounded hover:bg-zinc-800 transition-colors">
              See Case Studies
            </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white text-zinc-900 p-8 rounded-lg md:rounded-xl group hover:shadow-2xl transition-all duration-300">
<div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center mb-6 text-zinc-900">
<svg className="lucide lucide-pen-tool w-5 h-5" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<h3 className="text-xl font-semibold mb-3">
              Custom Design &amp; Spec of Your Project
            </h3>
<p className="text-zinc-600 leading-relaxed">
              At Platmech, we understand that every project is unique. We offer
              custom design and specification services tailored to your specific
              needs.
            </p>
</div>

<div className="bg-white text-zinc-900 p-8 rounded-lg md:rounded-xl group hover:shadow-2xl transition-all duration-300">
<div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center mb-6 text-zinc-900">
<svg className="lucide lucide-truck w-5 h-5" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<h3 className="text-xl font-semibold mb-3">
              Efficient Delivery &amp; Site Logistics
            </h3>
<p className="text-zinc-600 leading-relaxed">
              We deliver to sites across Ireland on time, providing real-time
              updates to minimise disruption and keep projects on schedule.
            </p>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-zinc-200 bg-white">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium text-zinc-500 mb-8">
          Trusted by industry leaders
        </p>
<div className="flex flex-wrap justify-center gap-12 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-zinc-900 font-bold text-lg">
<svg className="lucide lucide-hexagon fill-current" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
            ARDAGH
          </div>
<div className="flex items-center gap-2 text-zinc-900 font-bold text-lg">
<svg className="lucide lucide-triangle fill-current" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg>
            AVESTUS
          </div>
<div className="flex items-center gap-2 text-zinc-900 font-bold text-lg">
<svg className="lucide lucide-wind fill-current" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg>
            VENTIL
          </div>
<div className="flex items-center gap-2 text-zinc-900 font-bold text-lg">
<svg className="lucide lucide-cpu fill-current" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
            MICROCHIP
          </div>
<div className="flex items-center gap-2 text-zinc-900 font-bold text-lg">
<svg className="lucide lucide-sun fill-current" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
            Sonbrook
          </div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-6">
              Delivering Comfort, Efficiency
              
              &amp; Ongoing Support
            </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">

<div className="flex items-start gap-4">
<div className="mt-1 text-zinc-400">
<svg className="lucide lucide-fan w-6 h-6" data-lucide="fan" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"></path><path d="M12 12v.01"></path></svg>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wide mb-1">
                  Air-to-water
                </h4>
<p className="text-sm text-zinc-600">
                  High efficiency exhaust air heat pumps.
                </p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="mt-1 text-zinc-400">
<svg className="lucide lucide-settings w-6 h-6" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wide mb-1">
                  Ventilation
                </h4>
<p className="text-sm text-zinc-600">
                  Mechanical heat recovery systems.
                </p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="mt-1 text-zinc-400">
<svg className="lucide lucide-thermometer w-6 h-6" data-lucide="thermometer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wide mb-1">
                  Heating
                </h4>
<p className="text-sm text-zinc-600">
                  Underfloor heating and cooling solutions.
                </p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="mt-1 text-zinc-400">
<svg className="lucide lucide-shield-check w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wide mb-1">
                  Maintenance
                </h4>
<p className="text-sm text-zinc-600">
                  System maintenance and after-sales support.
                </p>
</div>
</div>
</div>
</div>

<div className="space-y-16">

<div className="group border-t border-zinc-200 pt-16 grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-2">
<span className="text-6xl font-medium text-zinc-200 group-hover:text-zinc-900 transition-colors duration-500">
                01
              </span>
</div>
<div className="md:col-span-10">
<span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2 block">
                High Performance
              </span>
<h3 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-4">
                At Platmech, we are specialists in heat pump and renewable
                energy systems.
              </h3>
<p className="text-lg text-zinc-600 leading-relaxed max-w-3xl">
                We thrive on delivering high-performance solutions for heating,
                cooling, and ventilation across both residential and commercial
                sectors.
              </p>
</div>
</div>

<div className="group border-t border-zinc-200 pt-16 grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-2">
<span className="text-6xl font-medium text-zinc-200 group-hover:text-zinc-900 transition-colors duration-500">
                02
              </span>
</div>
<div className="md:col-span-10">
<span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2 block">
                Energy Efficiency
              </span>
<h3 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-4">
                We have deep expertise in technologies that prioritises energy
                efficiency.
              </h3>
<p className="text-lg text-zinc-600 leading-relaxed max-w-3xl">
                With deep expertise in technologies such as air-to-water heat
                pumps, exhaust air systems, and mechanical ventilation (HRV), we
                design systems built for long-term value.
              </p>
</div>
</div>

<div className="group border-t border-zinc-200 pt-16 grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-2">
<span className="text-6xl font-medium text-zinc-200 group-hover:text-zinc-900 transition-colors duration-500">
                03
              </span>
</div>
<div className="md:col-span-10">
<span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2 block">
                Tailored Solutions
              </span>
<h3 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-4">
                Every project we undertake is tailored to our clients.
              </h3>
<p className="text-lg text-zinc-600 leading-relaxed max-w-3xl">
                Our turnkey solutions are built around each client's unique
                needs, helping to support Ireland's transition to a cleaner,
                more sustainable energy future.
              </p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 py-16">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
<h4 className="text-xl font-semibold tracking-tight text-zinc-900">
          Our Accreditations
        </h4>
<div className="flex items-center gap-8 grayscale opacity-70">

<div className="flex flex-col items-center">
<svg className="lucide lucide-award w-8 h-8 mb-1" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<span className="text-xs font-bold">SEAI</span>
</div>
<div className="flex flex-col items-center">
<svg className="lucide lucide-shield w-8 h-8 mb-1" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="text-xs font-bold">FGA</span>
</div>
<div className="flex flex-col items-center">
<svg className="lucide lucide-check-circle w-8 h-8 mb-1" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-xs font-bold">RGI</span>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between text-sm text-zinc-500">
<p>© 2025 Platmech Engineering. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-900" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900" href="#">Terms of Service</a>
</div>
</div>
</footer>


    </>
  );
}
