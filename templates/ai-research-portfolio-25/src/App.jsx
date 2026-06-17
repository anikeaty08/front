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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100/50">
<div className="max-w-[1536px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">

<div className="flex items-center gap-8">
<a className="font-['Manrope'] font-semibold text-lg tracking-tighter text-slate-900" href="#">
                    Aetheris Research
                </a>

<div className="hidden md:flex items-center gap-8 pl-8 border-l border-slate-200/60">
<a className="text-sm font-medium text-blue-600 border-b-2 border-blue-600 h-16 flex items-center" href="#">Labs</a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors h-16 flex items-center" href="#">Papers</a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors h-16 flex items-center" href="#">Archives</a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors h-16 flex items-center" href="#">About</a>
</div>
</div>

<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center bg-slate-100/70 rounded px-3 py-1.5 border border-slate-200/50">
<span className="text-xs text-slate-400">Search archives...</span>
</div>
<a className="bg-[#0059C2] hover:bg-[#004bb0] text-white text-xs font-medium px-5 py-2 rounded transition-colors shadow-sm" href="#">
                    Contact
                </a>
</div>
</div>
</nav>

<div className="flex flex-1 pt-16 max-w-[1536px] w-full mx-auto">

<aside className="w-64 shrink-0 hidden lg:flex flex-col justify-between px-6 py-10 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto no-scrollbar border-r border-slate-100/50">
<div>
<div className="mb-8 px-2">
<h2 className="text-xs font-medium text-blue-600 uppercase tracking-wider mb-1">Core Units</h2>
<p className="text-[0.65rem] text-slate-400 uppercase tracking-widest">Sector Alpha</p>
</div>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 bg-white px-3 py-2.5 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.02)] border border-slate-100 text-blue-600 text-sm font-medium transition-all" href="#">
<iconify-icon height="18" icon="solar:pie-chart-linear" width="18"></iconify-icon>
                        Overview
                    </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100/50 text-sm font-normal transition-all" href="#">
<iconify-icon height="18" icon="solar:network-linear" width="18"></iconify-icon>
                        Neural Nets
                    </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100/50 text-sm font-normal transition-all" href="#">
<iconify-icon height="18" icon="solar:atom-linear" width="18"></iconify-icon>
                        Quantum
                    </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100/50 text-sm font-normal transition-all" href="#">
<iconify-icon height="18" icon="solar:dna-linear" width="18"></iconify-icon>
                        Bio-AI
                    </a>
</nav>
</div>

<div className="bg-slate-200/50 rounded-xl p-4 mt-8 border border-slate-200/30">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-blue-600" height="16" icon="solar:shield-check-linear" width="16"></iconify-icon>
</div>
<div>
<h3 className="text-[0.65rem] font-medium text-slate-500 tracking-wider">SYSTEM STATUS</h3>
<p className="text-xs font-normal text-blue-600 mt-0.5">All Nodes Operational</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 px-6 py-12 md:px-16 lg:px-24 xl:px-32 max-w-5xl mx-auto">

<section className="mb-32 pt-8 lg:pt-16">
<div className="inline-flex items-center bg-blue-50 border border-blue-100/50 text-[#0059C2] text-[0.65rem] font-medium uppercase tracking-widest px-3 py-1.5 rounded-full mb-8">
                    Clinical Ethereal Edition
                </div>
<h1 className="font-['Manrope'] font-bold text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tighter text-slate-900 mb-8 max-w-4xl">
                    The Future of <br/>
<span className="text-[#0059C2]">Synthetics.</span>
</h1>
<p className="text-lg md:text-xl font-light text-slate-500 max-w-2xl mb-12 leading-relaxed">
                    Pioneering at the intersection of biological intuition and neural precision. We build interfaces that breathe through data.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="bg-[#0059C2] hover:bg-[#004bb0] text-white px-8 py-3.5 rounded-lg text-sm font-medium transition-all shadow-sm flex justify-center w-full sm:w-auto" href="#">
                        Explore Lab
                    </a>
<a className="bg-slate-200/40 hover:bg-slate-200/60 backdrop-blur-md border border-slate-200/50 text-slate-700 px-8 py-3.5 rounded-lg text-sm font-medium transition-all flex justify-center w-full sm:w-auto" href="#">
                        View Papers
                    </a>
</div>
</section>

<section className="space-y-32 mb-32">

<article className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
<div className="lg:col-span-7 relative group rounded-2xl overflow-hidden aspect-[16/10] bg-slate-200 border border-slate-100 shadow-sm">

<img alt="Neural Architecture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[30%] contrast-125 mix-blend-multiply opacity-90" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none"></div>
</div>
<div className="lg:col-span-5 flex flex-col items-start">
<span className="text-[0.65rem] text-blue-600 uppercase tracking-widest mb-4">Neural Architecture / 001</span>
<h3 className="font-['Manrope'] font-semibold text-3xl md:text-4xl tracking-tight text-slate-900 mb-4">Cerebro-Link Alpha</h3>
<p className="text-sm font-light text-slate-500 mb-8 leading-relaxed">
                            A non-invasive neural interface designed for high-throughput data processing between human cognitive nodes and silicon-based logic arrays.
                        </p>
<a className="inline-flex items-center gap-2 text-xs font-medium text-slate-800 uppercase tracking-widest hover:text-blue-600 transition-colors group" href="#">
                            View Case Study
                            <iconify-icon className="transform group-hover:translate-x-1 transition-transform" height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</article>

<article className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center flex-col-reverse lg:flex-row">
<div className="lg:col-span-5 flex flex-col items-start lg:items-end lg:text-right order-2 lg:order-1">
<span className="text-[0.65rem] text-blue-600 uppercase tracking-widest mb-4">Quantum Computing / 002</span>
<h3 className="font-['Manrope'] font-semibold text-3xl md:text-4xl tracking-tight text-slate-900 mb-4">Qubit Orchestrator</h3>
<p className="text-sm font-light text-slate-500 mb-8 leading-relaxed">
                            Stabilizing coherence through predictive error correction. Our proprietary algorithm reduces decoherence by 42% in ambient temperatures.
                        </p>
<a className="inline-flex items-center gap-2 text-xs font-medium text-slate-800 uppercase tracking-widest hover:text-blue-600 transition-colors group" href="#">
                            View Case Study
                            <iconify-icon className="transform group-hover:translate-x-1 transition-transform lg:order-last" height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
<div className="lg:col-span-7 relative group rounded-2xl overflow-hidden aspect-[16/10] bg-slate-200 border border-slate-100 shadow-sm order-1 lg:order-2">

<img alt="Quantum Processor" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] contrast-110 opacity-90" src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none"></div>
</div>
</article>
</section>

<section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-32">

<div className="md:col-span-2 md:row-span-2 bg-white rounded-2xl p-8 lg:p-10 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col justify-between group">
<div>
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-6">
<iconify-icon className="text-blue-600" height="20" icon="solar:cpu-linear" width="20"></iconify-icon>
</div>
<h4 className="font-['Manrope'] font-semibold text-2xl tracking-tight text-slate-900 mb-3">Deep Insight Engine</h4>
<p className="text-sm font-light text-slate-500 leading-relaxed max-w-xs">
                            Real-time telemetry and metadata extraction for large language model behavioral patterns.
                        </p>
</div>
<div className="grid grid-cols-2 gap-4 mt-12 bg-slate-50 rounded-xl p-5 border border-slate-100/50">
<div className="flex flex-col justify-center">
<span className="font-['Manrope'] font-semibold text-3xl text-slate-800 mb-1">99.9%</span>
<span className="text-[0.65rem] uppercase tracking-widest text-slate-400">Accuracy</span>
</div>
<div className="flex flex-col justify-center border-l border-slate-200 pl-4">
<span className="font-['Manrope'] font-semibold text-3xl text-slate-800 mb-1">12ms</span>
<span className="text-[0.65rem] uppercase tracking-widest text-slate-400">Latency</span>
</div>
</div>
</div>

<div className="md:col-span-2 bg-slate-100 rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden group border border-slate-200/50">
<div className="absolute top-6 right-6 text-slate-300 group-hover:text-blue-200 transition-colors duration-500">
<iconify-icon className="opacity-30" height="64" icon="solar:test-tube-linear" width="64"></iconify-icon>
</div>
<span className="text-[0.65rem] text-blue-600 uppercase tracking-widest mb-3 relative z-10">Ongoing Lab Test</span>
<h5 className="font-['Manrope'] font-semibold text-xl tracking-tight text-slate-800 relative z-10 max-w-[200px]">
                        Bio-Synthetic Skin Respiration
                    </h5>
</div>

<div className="bg-[#0059C2] rounded-2xl p-8 flex flex-col items-center justify-center text-center group shadow-md shadow-blue-900/10 border border-blue-600">
<span className="font-['Manrope'] font-bold text-5xl text-white mb-2 group-hover:scale-105 transition-transform">14</span>
<span className="text-[0.65rem] uppercase tracking-widest text-blue-200">Patents</span>
</div>

<div className="bg-blue-50/80 rounded-2xl p-8 flex flex-col items-center justify-center text-center border border-blue-100">
<span className="font-['Manrope'] font-bold text-5xl text-slate-800 mb-2">2.4k</span>
<span className="text-[0.65rem] uppercase tracking-widest text-slate-500">Citations</span>
</div>
</section>

<section className="max-w-3xl mx-auto text-center flex flex-col items-center mb-16">
<iconify-icon className="text-slate-200 mb-8" height="48" icon="solar:quote-right-linear" width="48"></iconify-icon>
<h2 className="font-['Manrope'] font-semibold text-3xl md:text-4xl tracking-tight text-slate-900 mb-8">
                    Data is the DNA of the Digital Soul.
                </h2>
<p className="text-base md:text-lg font-light text-slate-500 leading-relaxed max-w-2xl">
                    "We do not merely process information; we cultivate understanding. In the vacuum of pure logic, we seek the ghost of biological elegance, ensuring that tomorrow's intelligence remains inextricably linked to the human spirit."
                </p>
<div className="flex items-center gap-2 mt-16">
<div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#0059C2]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
</div>
</section>
</main>
</div>

<footer className="mt-auto border-t border-slate-200/60 bg-white">
<div className="max-w-[1536px] mx-auto px-6 md:px-12 lg:pl-80 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-[0.65rem] font-normal text-slate-400 uppercase tracking-widest text-center md:text-left">
                © 2024 Aetheris Intelligence. Clinical Ethereal Edition.
            </p>
<div className="flex flex-wrap justify-center gap-6 md:gap-10">
<a className="text-[0.65rem] font-normal text-slate-500 uppercase tracking-widest hover:text-slate-900 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-slate-300 after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform" href="#">
                    Privacy Protocol
                </a>
<a className="text-[0.65rem] font-normal text-slate-500 uppercase tracking-widest hover:text-slate-900 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-slate-300 after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform" href="#">
                    Ethics Statement
                </a>
<a className="text-[0.65rem] font-normal text-slate-500 uppercase tracking-widest hover:text-slate-900 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-slate-300 after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform" href="#">
                    Grant Inquiries
                </a>
</div>
</div>
</footer>

    </>
  );
}
