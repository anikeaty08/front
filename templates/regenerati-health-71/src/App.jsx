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
      

<nav className="fixed top-0 left-0 w-full z-50 px-4 py-4 lg:px-6">
<div className="glass-panel max-w-7xl mx-auto rounded-full border border-stone-200/50 flex items-center justify-between px-5 py-2.5 shadow-sm transition-all duration-300">
<div className="flex items-center gap-6">
<a className="flex items-center gap-2 group" href="#">
<div className="w-2.5 h-2.5 bg-orange-600 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
<span className="font-semibold text-lg tracking-tight text-stone-900">Sohma House</span>
</a>

<div className="hidden md:flex items-center gap-1 pl-6 border-l border-stone-200">
<a className="px-3 py-1.5 text-xs font-medium text-stone-900 bg-stone-100 rounded-full transition-colors" href="#">Home</a>
<a className="px-3 py-1.5 text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#blueprint">The Blueprint</a>
<a className="px-3 py-1.5 text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#field">The Field</a>
<a className="px-3 py-1.5 text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#institute">Institute</a>
</div>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:flex items-center gap-2 text-xs font-medium text-stone-500 hover:text-stone-900 px-3 py-2 transition-colors">
<svg className="lucide lucide-search" data-lucide="search" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                    Search
                </button>
<button className="text-xs font-medium px-4 py-2 rounded-full bg-stone-900 text-stone-50 hover:bg-stone-800 transition-all shadow-lg shadow-stone-200">
                    Patient Portal
                </button>
</div>
</div>
</nav>

<header className="pt-32 pb-16 px-4 lg:px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
<div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white shadow-sm mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-[10px] uppercase tracking-widest font-medium text-stone-500">Integrative Medicine Collective</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight font-semibold text-stone-900 leading-[0.95] mb-8">
                Deep work. <br/>
<span className="text-stone-400">Deep rest.</span>
</h1>
<p className="text-xl text-stone-500 font-light leading-relaxed text-balance max-w-2xl mx-auto">
                A living clinic in Tropical North Queensland. We merge precision biological data with an ecological model of care.
            </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 h-auto lg:h-[500px] animate-fade-up delay-100">

<a className="group relative rounded-[2.5rem] overflow-hidden bg-[#0a0a0a] border border-stone-800 p-8 lg:p-12 flex flex-col justify-between hover:border-stone-700 transition-all duration-500" href="#blueprint">
<div className="absolute inset-0 bg-[linear-gradient(rgba(30,30,30,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(30,30,30,0.5)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-stone-800/20 rounded-full blur-3xl pointer-events-none group-hover:bg-orange-900/10 transition-colors"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center mb-6 text-stone-400 group-hover:text-white transition-colors">
<svg className="lucide lucide-network" data-lucide="network" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
</div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">The Blueprint</h2>
<p className="text-stone-500 text-sm font-medium uppercase tracking-wide">Digital Nervous System</p>
</div>
<div className="relative z-10 flex items-end justify-between mt-12">
<p className="text-stone-400 max-w-xs font-light text-sm leading-relaxed">
                        Genomics, biomarkers, and real-time health data visualized. The operating system for your longevity.
                    </p>
<div className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-stone-500 group-hover:bg-white group-hover:text-black transition-all">
<svg data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>

<a className="group relative rounded-[2.5rem] overflow-hidden bg-stone-200 border border-stone-300 p-8 lg:p-12 flex flex-col justify-between hover:border-orange-200 transition-all duration-500" href="#field">
<img alt="Organic Texture" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1618517047923-45184c8a2a7a?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-stone-100/50 to-stone-100/10 pointer-events-none"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center mb-6 text-orange-700">
<svg className="lucide lucide-sprout" data-lucide="sprout" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path><path d="M5 21h14"></path></svg>
</div>
<h2 className="text-3xl font-semibold text-stone-900 tracking-tight mb-2">The Field</h2>
<p className="text-stone-600 text-sm font-medium uppercase tracking-wide">The Clinical Ecology</p>
</div>
<div className="relative z-10 flex items-end justify-between mt-12">
<p className="text-stone-700 max-w-xs font-light text-sm leading-relaxed">
                        Psychology, Somatic Therapies, and Breathwork. A community of practitioners dedicated to regulation.
                    </p>
<div className="w-10 h-10 rounded-full border border-stone-400 flex items-center justify-center text-stone-600 group-hover:bg-stone-900 group-hover:text-white transition-all">
<svg data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>
</div>
</header>

<section className="bg-[#050505] py-24 lg:py-32 relative overflow-hidden rounded-t-[4rem] -mt-12 z-20 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.3)]" id="blueprint">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
<div className="flex flex-col lg:flex-row gap-16 lg:items-start mb-20">
<div className="lg:w-1/2">
<div className="inline-flex items-center gap-2 mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]"></span>
<span className="text-xs font-mono text-emerald-500 uppercase tracking-widest">System Online</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                        Sohma Functional <br/>
                        Blueprint™
                    </h2>
<p className="text-lg text-stone-400 font-light leading-relaxed max-w-md">
                        Your biological data is no longer static. We interpret DNA as grammar, not script, contextualized within real-time biomarkers.
                    </p>
<div className="mt-8 flex gap-4">
<button className="px-6 py-3 rounded-full bg-white text-stone-950 text-sm font-medium hover:bg-stone-200 transition-colors">
                            Explore the Data Model
                        </button>
<button className="px-6 py-3 rounded-full border border-stone-800 text-stone-400 text-sm font-medium hover:text-white hover:border-stone-600 transition-colors">
                            View Sample Report
                        </button>
</div>
</div>

<div className="lg:w-1/2 w-full">
<div className="rounded-2xl border border-stone-800 bg-[#0f0f0f] p-6 shadow-2xl">

<div className="flex justify-between items-center mb-8 border-b border-stone-800 pb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-stone-400">
<svg data-lucide="user" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div>
<div className="text-sm text-white font-medium">Patient 8024</div>
<div className="text-[10px] text-stone-500 font-mono">ID: SH-29-XJ</div>
</div>
</div>
<div className="px-2 py-1 rounded bg-stone-900 border border-stone-800 text-[10px] text-stone-400 font-mono">
                                LIVE STREAM
                            </div>
</div>

<div className="space-y-6">

<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-stone-400">Cortisol Rhythm</span>
<span className="text-orange-400 font-mono">Elevated</span>
</div>
<div className="h-10 w-full flex items-end gap-1">
<div className="w-1/12 bg-stone-800 h-[40%] rounded-sm"></div>
<div className="w-1/12 bg-stone-800 h-[60%] rounded-sm"></div>
<div className="w-1/12 bg-stone-800 h-[30%] rounded-sm"></div>
<div className="w-1/12 bg-orange-900 h-[80%] rounded-sm relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-stone-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">18μg/dL</div>
</div>
<div className="w-1/12 bg-stone-800 h-[50%] rounded-sm"></div>
<div className="w-1/12 bg-stone-800 h-[40%] rounded-sm"></div>
<div className="w-1/12 bg-stone-800 h-[30%] rounded-sm"></div>
<div className="w-1/12 bg-stone-800 h-[20%] rounded-sm"></div>
</div>
</div>

<div className="pt-4 border-t border-stone-800">
<div className="flex justify-between text-xs mb-3">
<span className="text-stone-400">Methylation Profile</span>
<span className="text-emerald-400 font-mono">Optimal</span>
</div>
<div className="flex items-center gap-3">
<div className="flex-1 h-2 bg-stone-800 rounded-full overflow-hidden">
<div className="h-full w-[85%] bg-gradient-to-r from-emerald-900 to-emerald-500"></div>
</div>
<span className="text-xs text-white font-mono">85%</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-800 border border-stone-800 rounded-2xl overflow-hidden">
<div className="bg-[#0c0c0c] p-8 hover:bg-[#111] transition-colors">
<svg className="lucide lucide-dna text-stone-500 mb-4" data-lucide="dna" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 16 1.5 1.5"></path><path d="m14 8-1.5-1.5"></path><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"></path><path d="m16.5 10.5 1 1"></path><path d="m17 6-2.891-2.891"></path><path d="M2 15c6.667-6 13.333 0 20-6"></path><path d="m20 9 .891.891"></path><path d="M3.109 14.109 4 15"></path><path d="m6.5 12.5 1 1"></path><path d="m7 18 2.891 2.891"></path><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"></path></svg>
<h3 className="text-lg font-medium text-white mb-2">Genomics</h3>
<p className="text-sm text-stone-400 leading-relaxed">Detailed mapping of SNPs affecting detoxification, neurotransmitters, and metabolism.</p>
</div>
<div className="bg-[#0c0c0c] p-8 hover:bg-[#111] transition-colors">
<svg className="lucide lucide-flask-conical text-stone-500 mb-4" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"></path><path d="M8.5 2h7"></path><path d="M7 16h10"></path></svg>
<h3 className="text-lg font-medium text-white mb-2">Functional Labs</h3>
<p className="text-sm text-stone-400 leading-relaxed">OATs, DUTCH hormone panels, and gut microbiome analysis.</p>
</div>
<div className="bg-[#0c0c0c] p-8 hover:bg-[#111] transition-colors">
<svg className="lucide lucide-cpu text-stone-500 mb-4" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
<h3 className="text-lg font-medium text-white mb-2">Wearables</h3>
<p className="text-sm text-stone-400 leading-relaxed">Integration of Oura and WHOOP data for HRV and sleep tracking.</p>
</div>
</div>
</div>
</section>

<section className="bg-stone-50 py-24 lg:py-32 relative rounded-t-[4rem] -mt-12 z-30" id="field">
<div className="max-w-7xl mx-auto px-4 lg:px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-sm font-medium uppercase tracking-widest text-orange-600 mb-4">The Ecology</h2>
<h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-stone-900 tracking-tight mb-6">
                    Health is a property of relationships.
                </h3>
<p className="text-xl text-stone-500 font-light text-balance">
                    Sohma House is not just a clinic, but a field of practice. Our practitioners operate as a unified nervous system.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 rounded-[2.5rem] bg-white p-10 border border-stone-200 shadow-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-stone-100 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-orange-50 transition-colors duration-700"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-900">
<svg className="lucide lucide-stethoscope" data-lucide="stethoscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.8 2.3A.3.3 0 0 0 5 2h14a.3.3 0 0 0 .2.3v3.3a.3.3 0 0 0-.2.3v0a.3.3 0 0 0 .2.3v9.4a1 1 0 0 1-1.6.8L16 13h-3l-1.6 3.4a1 1 0 0 1-1.6-.8V6.2a.3.3 0 0 0 .2-.3V2.3z"></path><path d="M11 2v3"></path><path d="M5 2v3"></path><path d="M7 21a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2Z"></path></svg>
</div>
<div>
<h4 className="text-2xl font-semibold text-stone-900 mb-2">The Keystone Doctor</h4>
<p className="text-stone-500 font-light leading-relaxed max-w-md">
                                Stabilizing the ecosystem. Diagnostic gravity, pharmacological authority, and ethical oversight.
                            </p>
</div>
</div>
</div>

<div className="md:col-span-1 rounded-[2.5rem] bg-[#fdfbf7] p-8 border border-stone-200 shadow-sm flex flex-col justify-between group hover:border-orange-200 transition-colors">
<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<svg className="lucide lucide-hand-heart" data-lucide="hand-heart" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"></path><path d="m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95"></path><path d="m2 15 6 6"></path><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91"></path></svg>
</div>
<div>
<h4 className="text-xl font-semibold text-stone-900 mb-1">Somatic</h4>
<p className="text-sm text-stone-500">Stewards of interoception and nervous system regulation.</p>
</div>
</div>

<div className="md:col-span-1 rounded-[2.5rem] bg-[#fdfbf7] p-8 border border-stone-200 shadow-sm flex flex-col justify-between group hover:border-orange-200 transition-colors">
<div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-600">
<svg className="lucide lucide-brain-circuit" data-lucide="brain-circuit" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<div>
<h4 className="text-xl font-semibold text-stone-900 mb-1">Psychology</h4>
<p className="text-sm text-stone-500">Architects of meaning and trauma integration.</p>
</div>
</div>

<div className="md:col-span-2 rounded-[2.5rem] bg-orange-950 p-10 shadow-sm relative overflow-hidden text-orange-50 group">
<div className="absolute -right-4 -top-4 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 rounded-full bg-orange-900/50 border border-orange-800/50 flex items-center justify-center text-orange-200">
<svg className="lucide lucide-waves" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
</div>
<div className="flex items-end justify-between">
<div>
<h4 className="text-2xl font-semibold mb-2">Experiential Ecology</h4>
<p className="text-orange-200/60 font-light leading-relaxed max-w-md">
                                    Breathwork, Ice, Sauna, and Cannabis-Assisted sessions.
                                </p>
</div>
<button className="bg-orange-500 text-white rounded-full p-3 hover:bg-orange-400 transition-colors">
<svg data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium border-b border-stone-300 pb-0.5 hover:text-orange-600 hover:border-orange-600 transition-colors" href="#field">
                    Meet the collective
                    <svg data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<footer className="bg-white py-20 px-4 lg:px-6 border-t border-stone-200">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-6">
<div className="w-3 h-3 bg-orange-600 rounded-full"></div>
<span className="font-semibold tracking-tight text-stone-900">Sohma House</span>
</div>
<p className="text-stone-500 text-sm leading-relaxed">
                        Tropical North Queensland.<br/>
                        Regenerative medicine for the long term.
                    </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">Ecosystem</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-orange-600 transition-colors" href="#blueprint">The Blueprint</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#field">The Field</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Institute</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">Patients</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Enquire</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Portal Login</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h4 className="font-medium text-stone-900 mb-4 text-sm">Subscribe</h4>
<div className="flex gap-2">
<input className="bg-stone-50 border border-stone-200 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-stone-400" placeholder="Email address" type="email"/>
<button className="bg-stone-900 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-stone-800">
<svg data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-100 gap-4">
<p className="text-xs text-stone-400">© 2024 Sohma House Medicine Collective.</p>
<div className="flex gap-6">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<svg data-lucide="instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<svg data-lucide="linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
