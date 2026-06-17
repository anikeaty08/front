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



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-6 w-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<i className="h-4 w-4" data-lucide="layers"></i>
</div>
<span className="font-medium text-slate-900 tracking-tight text-lg">GeoVox</span>
</div>
<div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Solutions</a>
<a className="hover:text-slate-900 transition-colors" href="#">Equipment</a>
<a className="hover:text-slate-900 transition-colors" href="#">Experience</a>
</div>
<div className="flex items-center gap-4">
<a className="text-[14px] font-medium text-slate-600 hover:text-slate-900 hidden sm:block" href="#">Sign in</a>
<a className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-full text-[14px] font-medium transition-all shadow-sm" href="#">
                    Get a Quote
                </a>
</div>
</div>
</nav>

<section className="pt-32 pb-20 overflow-hidden relative">
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 mb-8">
<span className="text-xs font-medium text-orange-600 uppercase tracking-wide">Specialized in Mining</span>
<span className="w-px h-3 bg-orange-200"></span>
<span className="text-xs text-orange-800">New expansion in Latin America</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-slate-900 tracking-tight mb-6 leading-[1.1]">
                Bridging language gaps <br className="hidden md:block"/>
                in <span className="text-slate-400">complex operations.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                Technical translation and simultaneous interpretation for the mining sector. We connect engineers, geologists, and stakeholders across Brazil and LatAm.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="px-6 py-3 bg-slate-900 text-white rounded-full font-medium text-[15px] shadow-lg shadow-slate-900/10 hover:shadow-xl hover:-translate-y-0.5 transition-all w-full sm:w-auto">
                    View Solutions
                </button>
<button className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-full font-medium text-[15px] hover:bg-slate-50 transition-all w-full sm:w-auto">
                    Contact Sales
                </button>
</div>
</div>

<div className="max-w-6xl mx-auto px-6 relative">
<div className="absolute -inset-1 bg-gradient-to-r from-orange-200 via-slate-200 to-blue-200 rounded-2xl blur-2xl opacity-40"></div>
<div className="relative bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-slate-200/50 overflow-hidden h-[400px] md:h-[500px] mesh-gradient">

<div className="absolute inset-x-0 bottom-0 top-12 bg-white/40 backdrop-blur-xl border-t border-white/60">
<div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 h-full">

<div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 relative overflow-hidden">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<i className="h-4 w-4" data-lucide="mic"></i>
</div>
<div>
<div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Live Stream</div>
<div className="text-sm font-medium text-slate-900">Geotechnical Summit</div>
</div>
</div>
<div className="space-y-2">
<div className="h-8 bg-slate-50 rounded w-full flex items-center px-2 gap-1">
<span className="w-1 h-3 bg-orange-400 rounded-full animate-pulse"></span>
<span className="w-1 h-4 bg-orange-400 rounded-full animate-pulse delay-75"></span>
<span className="w-1 h-2 bg-orange-400 rounded-full animate-pulse delay-100"></span>
<span className="w-full h-px bg-slate-200 ml-2"></span>
</div>
<div className="flex justify-between text-xs text-slate-500 font-mono mt-2">
<span>EN-US</span>
<i className="h-3 w-3" data-lucide="arrow-right"></i>
<span>PT-BR</span>
</div>
</div>
</div>

<div className="md:col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 p-4 relative overflow-hidden flex flex-col items-center justify-center">
<div className="absolute top-4 left-4 flex gap-2">
<span className="px-2 py-1 rounded bg-slate-100 text-xs font-medium text-slate-600">Minas Gerais</span>
<span className="px-2 py-1 rounded bg-slate-100 text-xs font-medium text-slate-600">Atacama</span>
</div>
<div className="w-full h-32 relative mt-4">

<svg className="w-full h-full" viewbox="0 0 400 100">
<path d="M50,50 Q200,10 350,50" fill="none" stroke="#e2e8f0" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<circle className="fill-orange-500" cx="50" cy="50" r="4"></circle>
<circle className="fill-blue-500" cx="350" cy="50" r="4"></circle>
<rect className="fill-white stroke-slate-200" height="20" rx="4" width="40" x="180" y="20"></rect>
</svg>
</div>
<div className="bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-medium shadow-lg flex items-center gap-2">
<span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                Interpreter Connected
                            </div>
</div>
</div>
</div>

<div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur border border-slate-200 px-4 py-1.5 rounded-full flex items-center gap-4 text-xs font-medium shadow-sm">
<span className="text-slate-500">Latency: <span className="text-slate-900">24ms</span></span>
<span className="w-px h-3 bg-slate-200"></span>
<span className="text-slate-500">Accuracy: <span className="text-slate-900">99.8%</span></span>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="bg-slate-900 rounded-xl p-8 flex flex-col justify-center text-white">
<h3 className="text-xl font-medium tracking-tight mb-2">Trusted by leaders in mining</h3>
<p className="text-slate-400 text-sm leading-relaxed">Delivering critical communication for extraction and processing giants.</p>
</div>
<div className="bg-slate-50 rounded-xl p-8 flex flex-col justify-center border border-slate-100">
<div className="text-sm text-slate-500 mb-1 font-medium">Assets Covered</div>
<div className="text-4xl font-medium text-slate-900 tracking-tight">$10B+</div>
</div>
<div className="bg-slate-50 rounded-xl p-8 flex flex-col justify-center border border-slate-100">
<div className="text-sm text-slate-500 mb-1 font-medium">Technical Words</div>
<div className="text-4xl font-medium text-slate-900 tracking-tight">40M+</div>
</div>
<div className="bg-slate-50 rounded-xl p-8 flex flex-col justify-center border border-slate-100">
<div className="text-sm text-slate-500 mb-1 font-medium">Events Executed</div>
<div className="text-4xl font-medium text-slate-900 tracking-tight">2,500+</div>
</div>
</div>

<div className="mt-12 flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale">

<div className="flex items-center gap-2 text-lg font-bold font-serif text-slate-800">VALE</div>
<div className="flex items-center gap-2 text-lg font-bold tracking-tighter text-slate-800">ANGLO AMERICAN</div>
<div className="flex items-center gap-2 text-lg font-bold italic text-slate-800">RioTinto</div>
<div className="flex items-center gap-2 text-lg font-semibold text-slate-800">BHP</div>
<div className="flex items-center gap-2 text-lg font-bold text-slate-800">NEXA</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/3">
<div className="text-xs font-medium text-orange-600 uppercase tracking-wide mb-4">Technical Precision</div>
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-6">
                        We speak the language <br/> of <span className="text-slate-400">geology &amp; engineering.</span>
</h2>
<p className="text-lg text-slate-500 leading-relaxed mb-8">
                        General translators fail when it comes to pit slope stability or hydro-metallurgy. GeoVox interpreters are trained in the specific vocabulary of your operations.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-orange-600 transition-colors" href="#">
                        View our glossary methodology <i className="ml-2 h-4 w-4" data-lucide="arrow-right"></i>
</a>
<div className="mt-12 space-y-4">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-orange-600" data-lucide="check"></i>
<span className="text-slate-600 text-[15px]">HSE &amp; Environmental Compliance</span>
</div>
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-orange-600" data-lucide="check"></i>
<span className="text-slate-600 text-[15px]">Feasibility Studies (NI 43-101)</span>
</div>
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-orange-600" data-lucide="check"></i>
<span className="text-slate-600 text-[15px]">Heavy Machinery Training</span>
</div>
</div>
</div>
<div className="w-full md:w-2/3">
<div className="bg-blue-50/50 rounded-2xl p-8 border border-slate-100 relative overflow-hidden">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
<div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

<div className="relative bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-100 p-6 max-w-lg mx-auto">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<div className="h-2 w-2 bg-green-500 rounded-full"></div>
<span className="text-xs font-medium text-slate-500">Context: Open Pit Mining</span>
</div>
<span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-1 rounded font-mono">ID: #9281</span>
</div>
<div className="space-y-3">
<div className="p-3 bg-slate-50 rounded border border-slate-100 flex justify-between items-center group cursor-default hover:border-orange-200 transition-colors">
<div>
<div className="text-[11px] text-slate-400 uppercase font-medium">Source (EN)</div>
<div className="text-sm font-medium text-slate-900">Tailings Dam Failure</div>
</div>
<i className="h-4 w-4 text-slate-300" data-lucide="arrow-right"></i>
<div className="text-right">
<div className="text-[11px] text-slate-400 uppercase font-medium">Target (PT-BR)</div>
<div className="text-sm font-medium text-slate-900">Ruptura de Barragem de Rejeitos</div>
</div>
</div>
<div className="p-3 bg-white rounded border border-slate-100 flex justify-between items-center shadow-sm">
<div>
<div className="text-[11px] text-slate-400 uppercase font-medium">Source (EN)</div>
<div className="text-sm font-medium text-slate-900">Run-of-Mine (ROM)</div>
</div>
<i className="h-4 w-4 text-slate-300" data-lucide="arrow-right"></i>
<div className="text-right">
<div className="text-[11px] text-slate-400 uppercase font-medium">Target (ES)</div>
<div className="text-sm font-medium text-slate-900">Mineral Todo Uno</div>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
<div className="text-xs text-slate-500">Accuracy Score</div>
<div className="text-sm font-medium text-green-600">99.4% Verified</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-3">Workflow</div>
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">From Site to Boardroom</h2>
<p className="text-lg text-slate-500 font-normal">Our hybrid infrastructure allows seamless interpretation whether your team is underground or in a corporate office.</p>
</div>
<div className="bg-[#FAFAFA] rounded-2xl border border-slate-200 p-12 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center mb-4">
<i className="h-6 w-6 text-slate-700" data-lucide="mic-2"></i>
</div>
<h4 className="font-medium text-slate-900 mb-1">Speaker</h4>
<p className="text-xs text-slate-500">Field or Remote</p>
</div>

<div className="hidden md:flex flex-1 items-center px-4 relative">
<div className="h-px bg-slate-300 w-full dashed"></div>
<div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-slate-100 px-2 py-0.5 rounded text-[10px] text-slate-500 border border-slate-200">SRT Protocol</div>
</div>

<div className="md:hidden h-12 w-px bg-slate-300"></div>

<div className="relative">
<div className="w-64 h-64 rounded-full border border-slate-200 bg-white flex items-center justify-center relative">
<div className="absolute inset-0 rounded-full border border-orange-100 scale-110"></div>
<div className="text-center">
<div className="font-medium text-slate-900 text-lg mb-1">GeoVox Hub</div>
<div className="text-xs text-slate-500">Human + AI Assist</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 w-3 h-3 bg-orange-500 rounded-full shadow-sm"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1.5 w-3 h-3 bg-blue-500 rounded-full shadow-sm"></div>
</div>
</div>

<div className="hidden md:flex flex-1 items-center px-4 relative">
<div className="h-px bg-slate-300 w-full"></div>
<div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-slate-100 px-2 py-0.5 rounded text-[10px] text-slate-500 border border-slate-200">Private Cloud</div>
</div>

<div className="md:hidden h-12 w-px bg-slate-300"></div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-slate-900 rounded-2xl shadow-lg shadow-slate-900/20 flex items-center justify-center mb-4">
<i className="h-6 w-6 text-white" data-lucide="headphones"></i>
</div>
<h4 className="font-medium text-slate-900 mb-1">Audience</h4>
<p className="text-xs text-slate-500">Mobile App / Headsets</p>
</div>
<div className="absolute bottom-6 right-6">
<button className="bg-white border border-slate-200 text-slate-700 text-xs px-3 py-1.5 rounded-full hover:border-slate-300 transition-colors shadow-sm">
                            Explore Full Stack
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div className="max-w-xl">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">
                        Why traditional agencies <br/>
<span className="text-slate-400">fail in technical environments.</span>
</h2>
</div>
<p className="text-sm text-slate-500 max-w-xs mb-2 md:mb-0">
                    Standard translation misses the nuance of regulatory and operational context, leading to safety risks.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center mb-6">
<i className="h-5 w-5 text-orange-600" data-lucide="book-open"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Glossary Management</h3>
<p className="text-[15px] text-slate-500 leading-relaxed">
                        We build custom glossaries for every project, ensuring "bench" means the geological formation, not a seat.
                    </p>
</div>

<div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
<div className="relative w-10 h-10 flex items-center justify-center">
<svg className="w-full h-full -rotate-90" viewbox="0 0 36 36">
<path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2"></path>
<path className="text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="0, 100" strokeWidth="2"></path>
</svg>
<span className="absolute text-[10px] font-bold text-slate-900">0%</span>
</div>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Zero Downtime</h3>
<p className="text-[15px] text-slate-500 leading-relaxed">
                        Redundant systems for audio and video ensure your town hall meeting or technical training never drops.
                    </p>
</div>

<div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
<i className="h-5 w-5 text-blue-600" data-lucide="shield-check"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Confidentiality First</h3>
<p className="text-[15px] text-slate-500 leading-relaxed">
                        Strict NDAs and encrypted data transmission. We handle sensitive exploration data with military-grade security.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start mb-12">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-2">Project Volume &amp; Accuracy</h2>
<p className="text-slate-400">Real-time metrics from our recent large-scale implementations.</p>
</div>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 md:p-10 relative overflow-hidden">

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-b border-neutral-800 pb-8">
<div>
<div className="text-xs text-neutral-500 uppercase font-medium mb-1">Words Processed</div>
<div className="text-2xl font-medium">540k</div>
<div className="text-xs text-green-500 mt-1">+15.2% last month</div>
</div>
<div>
<div className="text-xs text-neutral-500 uppercase font-medium mb-1">Interpretation Hours</div>
<div className="text-2xl font-medium">1,209</div>
<div className="text-xs text-green-500 mt-1">+12.2% last month</div>
</div>
<div>
<div className="text-xs text-neutral-500 uppercase font-medium mb-1">Active Interpreters</div>
<div className="text-2xl font-medium">42</div>
<div className="text-xs text-neutral-500 mt-1">Specialized</div>
</div>
<div>
<div className="text-xs text-neutral-500 uppercase font-medium mb-1">Client Satisfaction</div>
<div className="text-2xl font-medium">4.9/5</div>
<div className="text-xs text-green-500 mt-1">Top Tier</div>
</div>
</div>

<div className="h-64 w-full relative">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 1000 300">

<line stroke="#262626" strokeWidth="1" x1="0" x2="1000" y1="250" y2="250"></line>
<line stroke="#262626" strokeWidth="1" x1="0" x2="1000" y1="150" y2="150"></line>
<line stroke="#262626" strokeWidth="1" x1="0" x2="1000" y1="50" y2="50"></line>

<path d="M0,250 C100,240 200,100 300,120 C400,140 500,80 600,90 C700,100 800,40 1000,20" fill="none" stroke="#f97316" strokeWidth="2"></path>
<path d="M0,250 C100,240 200,100 300,120 C400,140 500,80 600,90 C700,100 800,40 1000,20 L1000,300 L0,300 Z" fill="url(#grad1)" opacity="0.1"></path>

<path d="M0,280 C150,270 250,200 350,210 C450,220 550,150 650,160 C750,170 850,140 1000,100" fill="none" stroke="#3b82f6" stroke-dasharray="4 4" strokeWidth="2"></path>
<defs>
<lineargradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#f97316', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#f97316', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>

<line stroke="#525252" stroke-dasharray="4" strokeWidth="1" x1="600" x2="600" y1="0" y2="300"></line>
<circle cx="600" cy="90" fill="#171717" r="4" stroke="#f97316" strokeWidth="2"></circle>
</svg>

<div className="absolute top-[20%] left-[60%] bg-neutral-800 border border-neutral-700 p-3 rounded shadow-lg text-xs">
<div className="text-neutral-400 mb-1">Quarter 3 Peak</div>
<div className="font-medium text-white">$0.08 / word</div>
<div className="text-orange-500">99.9% uptime</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight">Recent Implementations</h2>
<p className="text-slate-500 mt-2">Connecting operations across borders.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="h-64 w-full bg-slate-100 rounded-xl mb-4 overflow-hidden relative">

<div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-100"></div>
<div className="absolute inset-0 flex items-center justify-center">
<i className="h-12 w-12 text-slate-300 group-hover:scale-110 transition-transform duration-500" data-lucide="mountain"></i>
</div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 text-[10px] uppercase font-bold tracking-wide rounded">Simultaneous</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">Annual Safety Congress</h3>
<p className="text-sm text-slate-500 leading-relaxed">Remote interpretation for 2,000 employees across 4 continents.</p>
</div>

<div className="group cursor-pointer">
<div className="h-64 w-full bg-slate-900 rounded-xl mb-4 overflow-hidden relative">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-slate-900 to-black"></div>
<div className="absolute inset-0 flex items-center justify-center">
<i className="h-12 w-12 text-slate-700 group-hover:text-blue-500 transition-colors duration-500" data-lucide="file-text"></i>
</div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-[10px] uppercase font-bold tracking-wide rounded">Translation</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Environmental Impact Report</h3>
<p className="text-sm text-slate-500 leading-relaxed">20,000 page document translated and formatted for regulatory approval in Brazil.</p>
</div>

<div className="group cursor-pointer">
<div className="h-64 w-full bg-gradient-to-br from-orange-500 to-red-600 rounded-xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center opacity-50">
<div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40"></div>
</div>
<div className="absolute bottom-6 left-6 text-white">
<div className="text-xs font-medium opacity-80 mb-1">Live from Site</div>
<div className="font-medium">Equipment Training</div>
</div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 bg-purple-100 text-purple-800 text-[10px] uppercase font-bold tracking-wide rounded">On-Site</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">Drilling Equipment Rollout</h3>
<p className="text-sm text-slate-500 leading-relaxed">On-site interpreters accompanying engineers in the Carajás mine.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAF9] border-t border-slate-200">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="flex justify-center mb-8">
<div className="w-16 h-16 bg-white rounded-full shadow-sm border border-slate-200 flex items-center justify-center">
<i className="h-8 w-8 text-slate-900" data-lucide="globe-2"></i>
</div>
</div>
<h2 className="text-4xl font-medium text-slate-900 tracking-tight mb-6">Ready to expand your operations?</h2>
<p className="text-xl text-slate-500 mb-10 font-normal">Join the leading mining companies trusting GeoVox for their mission-critical communication.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-8 py-3 bg-slate-900 text-white rounded-full font-medium text-[15px] hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10">
                    Get Started
                </button>
<button className="px-8 py-3 bg-white border border-slate-200 text-slate-700 rounded-full font-medium text-[15px] hover:bg-slate-50 transition-all">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start mb-12">
<div className="mb-8 md:mb-0">
<div className="flex items-center gap-2 mb-4">
<div className="h-5 w-5 bg-slate-900 rounded flex items-center justify-center text-white text-[10px]">
<i className="h-3 w-3" data-lucide="layers"></i>
</div>
<span className="font-medium text-slate-900">GeoVox</span>
</div>
<p className="text-xs text-slate-400 max-w-xs">
                        Specialized technical translation and interpretation for the mining industry in Brazil and Latin America.
                    </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-sm">
<div>
<h4 className="font-medium text-slate-900 mb-3">Products</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-slate-900" href="#">Translation</a></li>
<li><a className="hover:text-slate-900" href="#">Interpretation</a></li>
<li><a className="hover:text-slate-900" href="#">Glossaries</a></li>
<li><a className="hover:text-slate-900" href="#">Equipment</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-3">Solutions</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-slate-900" href="#">Mining</a></li>
<li><a className="hover:text-slate-900" href="#">Oil &amp; Gas</a></li>
<li><a className="hover:text-slate-900" href="#">Engineering</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-3">Company</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-slate-900" href="#">About</a></li>
<li><a className="hover:text-slate-900" href="#">Careers</a></li>
<li><a className="hover:text-slate-900" href="#">Blog</a></li>
<li><a className="hover:text-slate-900" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-3">Legal</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-slate-900" href="#">Privacy</a></li>
<li><a className="hover:text-slate-900" href="#">Terms</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
<p>© 2024 GeoVox Solutions. All rights reserved.</p>
<div className="flex items-center gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-900" href="#">Twitter</a>
<a className="hover:text-slate-900" href="#">LinkedIn</a>
<a className="hover:text-slate-900" href="#">Instagram</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
