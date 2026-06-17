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
      

<nav className="z-50 md:px-12 lg:px-24 flex bg-white/50 w-full border-slate-200/60 border-b pt-4 pr-6 pb-4 pl-6 absolute top-0 backdrop-blur-md items-center justify-between">

<a className="flex flex-col items-center group transition-opacity hover:opacity-80 shrink-0" href="#">
<svg className="w-14 h-14 text-slate-900" fill="none" shape-rendering="geometricPrecision" viewbox="0 0 100 100">
<path d="M 68 20 A 35 35 0 1 0 80 32" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
<circle cx="78" cy="22" fill="#d6979c" r="4.5" stroke="none"></circle>
</svg>
<div className="flex flex-col items-center mt-1 text-center">
<span className="text-xl font-light tracking-[0.25em] text-slate-900 leading-none pl-[0.25em]">CIRCLE</span>
<span className="text-xs font-extralight tracking-[0.3em] text-slate-500 mt-1 pl-[0.3em] uppercase">Aesthetics</span>
</div>
</a>
<div className="hidden md:flex gap-6 lg:gap-10 text-sm font-extralight text-slate-500">
<a className="hover:text-[#A9898B] transition-colors" href="#">Home</a>
<a className="hover:text-[#A9898B] transition-colors" href="#treatments">Treatments</a>
<a className="hover:text-[#A9898B] transition-colors" href="#analysis">Skin Analysis</a>
<a className="hover:text-[#A9898B] transition-colors" href="#authority">Consultant Led</a>
<a className="hover:text-[#A9898B] transition-colors" href="#technology">Technology</a>
</div>
<button className="text-sm font-extralight border border-slate-200 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-sm hover:bg-white hover:border-[#E3D5D6] hover:text-[#A9898B] transition-all duration-300 shadow-sm">
            Book Consultation
        </button>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-40 pb-32 px-6 md:px-12 lg:px-24 overflow-hidden">

<div className="absolute inset-0 z-0 bg-[#F8FAFC]"></div>

<div className="z-0 opacity-[0.06] absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)', backgroundSize: '3rem 3rem'}}></div>

<div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-800/[0.04] via-slate-400/[0.02] to-[#F8FAFC] pointer-events-none"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[80%] bg-gradient-to-b from-slate-400/20 via-slate-300/10 to-transparent blur-[120px] pointer-events-none z-0"></div>
<div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-md text-slate-600 rounded-sm text-xs font-extralight tracking-[0.1em] uppercase mb-10 border border-slate-200/80 shadow-sm" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<iconify-icon className="text-base text-[#C5A8AA]" icon="solar:map-point-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
                Dublin, Ireland
            </div>
<div className="relative mb-10">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] max-w-5xl bg-gradient-to-tr from-slate-300/20 via-slate-200/20 to-transparent blur-[80px] -z-10 pointer-events-none"></div>
<h1 className="sm:text-6xl md:text-8xl lg:text-9xl leading-[0.95] text-5xl font-extralight text-slate-900 tracking-tighter">
                    Regenerative Aesthetic<br/>
<span className="text-slate-400">Medicine.</span>
</h1>
</div>
<p className="text-xl md:text-3xl text-slate-500 max-w-3xl font-thin mb-14 leading-relaxed tracking-tight">
                Evidence-based skin and facial treatments delivered in a hospital-grade environment. Redefining aesthetic standards through clinical rigor.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="bg-slate-900 text-white px-8 py-4 rounded-sm text-sm font-extralight border border-slate-900 shadow-sm hover:bg-slate-800 transition-all duration-300 flex justify-center items-center" href="#consultation">
                    Book Consultation
                </a>
<a className="bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-900 px-8 py-4 rounded-sm text-sm font-extralight shadow-sm hover:border-[#E3D5D6] hover:text-[#A9898B] hover:bg-white transition-all duration-300 flex justify-center items-center gap-2 group" href="#technology">
                    Explore Treatments 
                    <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-400">
<iconify-icon className="text-3xl animate-pulse" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
</header>

<section className="md:py-32 md:px-12 lg:px-24 bg-white border-t border-slate-200 pt-24 pr-6 pb-24 pl-6 relative overflow-hidden" id="authority">
<div className="absolute inset-0 z-0 opacity-[0.02]" style={{backgroundImage: 'linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)', backgroundSize: '3rem 3rem'}}></div>
<div className="grid lg:grid-cols-2 md:gap-24 lg:gap-x-24 md:py-20 max-w-7xl mr-auto ml-auto pt-12 pb-12 gap-x-20 gap-y-20 items-center relative z-10">
<div className="flex flex-col">
<span className="text-xs font-extralight uppercase tracking-[0.2em] text-[#C5A8AA] mb-5 block" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Medical Leadership</span>
<h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8 text-slate-900 leading-tight">
                    Hospital-Grade<br/>Clinical Standards.
                </h2>
<p className="text-slate-500 font-thin leading-relaxed mb-10 text-lg md:text-xl">
                    Led by Consultant Plastic Surgeon Dr Fuan Chan, Circle Aesthetics brings rigorous medical protocols to the forefront of regenerative aesthetics. We bridge the gap between high-end cosmetic care and strict hospital safety measures.
                </p>
<div className="flex items-center gap-5 border-t border-slate-200 pt-8 group cursor-default">
<div className="w-12 h-12 rounded-sm bg-slate-50 flex items-center justify-center text-slate-600 border border-slate-200 group-hover:border-[#E3D5D6] group-hover:text-[#C5A8AA] transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:user-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<div className="">
<div className="text-base font-extralight tracking-tight text-slate-900">Dr Fuan Chan</div>
<div className="text-xs font-extralight text-slate-500 tracking-wide mt-0.5" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>CONSULTANT PLASTIC SURGEON</div>
</div>
</div>
</div>
<div className="relative w-full">
<div className="absolute -inset-4 bg-slate-50 border border-slate-100 -z-10 rounded-lg"></div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-md overflow-hidden relative z-10 shadow-sm">
<div className="group bg-white p-8 md:p-10 h-full flex flex-col transition-colors duration-300 hover:bg-slate-50/50">
<iconify-icon className="text-3xl text-slate-700 group-hover:text-[#C5A8AA] transition-colors duration-300 mb-8" icon="solar:shield-check-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<div className="text-base font-light tracking-tight mb-2 text-slate-900">Protocol Driven</div>
<div className="text-base font-thin text-slate-500 leading-relaxed">Every treatment is executed under strict consultant-designed clinical pathways.</div>
</div>
<div className="group bg-white p-8 md:p-10 h-full flex flex-col transition-colors duration-300 hover:bg-slate-50/50">
<iconify-icon className="text-3xl text-slate-700 group-hover:text-[#C5A8AA] transition-colors duration-300 mb-8" icon="solar:medical-kit-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<div className="text-base font-light tracking-tight mb-2 text-slate-900">Clinical Environment</div>
<div className="text-base font-thin text-slate-500 leading-relaxed">Operating with the sterility and safety standards of a premium medical facility.</div>
</div>
<div className="group bg-white p-8 md:p-10 h-full flex flex-col transition-colors duration-300 hover:bg-slate-50/50">
<iconify-icon className="text-3xl text-slate-700 group-hover:text-[#C5A8AA] transition-colors duration-300 mb-8" icon="solar:clipboard-list-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<div className="text-base font-light tracking-tight mb-2 text-slate-900">Evidence Based</div>
<div className="text-base font-thin text-slate-500 leading-relaxed">Utilizing only peer-reviewed, scientifically proven regenerative technologies.</div>
</div>
<div className="group bg-white p-8 md:p-10 h-full flex flex-col transition-colors duration-300 hover:bg-slate-50/50">
<iconify-icon className="text-3xl text-slate-700 group-hover:text-[#C5A8AA] transition-colors duration-300 mb-8" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<div className="text-base font-light tracking-tight mb-2 text-slate-900">Expert Team</div>
<div className="text-base font-thin text-slate-500 leading-relaxed">Delivered by highly qualified medical professionals under continuous supervision.</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 md:px-12 lg:px-24 bg-[#F8FAFC] border-slate-200 border-t pt-24 pr-6 pb-24 pl-6" id="technology">
<div className="max-w-7xl mx-auto w-full">
<div className="mb-12 border-b border-slate-200 pb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full bg-[#C5A8AA] opacity-75"></span>
<span className="relative inline-flex h-1.5 w-1.5 bg-[#A9898B]"></span>
</div>
<span className="text-xs font-extralight uppercase tracking-[0.2em] text-slate-400" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>System Architecture</span>
</div>
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-slate-900">Advanced Clinical Technology.</h2>
</div>
<a className="inline-flex text-sm font-extralight text-slate-600 hover:text-[#A9898B] items-center gap-2 transition-colors group px-4 py-2.5 rounded-sm border border-slate-200 hover:border-[#E3D5D6] bg-white shadow-sm" href="#">
<iconify-icon className="text-xl text-slate-400 group-hover:text-[#C5A8AA] transition-colors" icon="solar:document-text-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
                    View specifications
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-md overflow-hidden shadow-sm">

<div className="bg-white p-8 md:p-12 flex flex-col h-full relative group hover:bg-slate-50/80 transition-colors z-10 overflow-hidden">
<div className="absolute -right-4 -bottom-4 text-[12rem] font-thin tracking-tighter text-slate-900 opacity-[0.02] group-hover:scale-105 transition-transform duration-700 pointer-events-none leading-none z-0" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>01</div>
<div className="relative z-10 flex justify-between items-start mb-20 md:mb-28">
<div className="w-10 h-10 rounded-sm bg-white text-slate-700 flex items-center justify-center border border-slate-200 shadow-sm group-hover:border-[#E3D5D6] group-hover:text-[#C5A8AA] transition-colors">
<iconify-icon className="text-2xl" icon="solar:target-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<div className="flex flex-col items-end gap-1.5">
<span className="text-xs font-extralight uppercase tracking-[0.15em] px-2 py-1 bg-slate-50 border border-slate-200 rounded-sm text-slate-600" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Class IV Laser</span>
<span className="text-xs text-[#C5A8AA] font-extralight uppercase tracking-[0.15em]" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Active</span>
</div>
</div>
<div className="relative z-10 mt-auto border-t border-slate-100 pt-8 group-hover:border-[#E3D5D6] transition-colors">
<h3 className="text-2xl md:text-3xl font-extralight tracking-tight mb-3 text-slate-900">Sciton Laser</h3>
<p className="text-base md:text-lg text-slate-500 font-thin leading-relaxed max-w-sm">Precision resurfacing and targeted skin correction protocols for structural refinement and deep dermal renewal.</p>
</div>
</div>

<div className="bg-white p-8 md:p-12 flex flex-col h-full relative group hover:bg-slate-50/80 transition-colors z-10 overflow-hidden">
<div className="absolute -right-4 -bottom-4 text-[12rem] font-thin tracking-tighter text-slate-900 opacity-[0.02] group-hover:scale-105 transition-transform duration-700 pointer-events-none leading-none z-0" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>02</div>
<div className="relative z-10 flex justify-between items-start mb-20 md:mb-28">
<div className="w-10 h-10 rounded-sm bg-white text-slate-700 flex items-center justify-center border border-slate-200 shadow-sm group-hover:border-[#E3D5D6] group-hover:text-[#C5A8AA] transition-colors">
<iconify-icon className="text-2xl" icon="solar:box-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<div className="flex flex-col items-end gap-1.5">
<span className="text-xs font-extralight uppercase tracking-[0.15em] px-2 py-1 bg-slate-50 border border-slate-200 rounded-sm text-slate-600" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Interstitial</span>
<span className="text-xs text-[#C5A8AA] font-extralight uppercase tracking-[0.15em]" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Active</span>
</div>
</div>
<div className="relative z-10 mt-auto border-t border-slate-100 pt-8 group-hover:border-[#E3D5D6] transition-colors">
<h3 className="text-2xl md:text-3xl font-extralight text-slate-900 tracking-tight mb-3">Aura 3D Facial Analysis</h3>
<p className="text-base md:text-lg leading-relaxed font-thin text-slate-500 max-w-sm">Swiss-engineered 3D imaging technology designed for precision structural assessment and evidence-based treatment planning.</p>
</div>
</div>

<div className="bg-white p-8 md:p-12 flex flex-col h-full relative group hover:bg-slate-50/80 transition-colors z-10 overflow-hidden">
<div className="absolute -right-4 -bottom-4 text-[12rem] font-thin tracking-tighter text-slate-900 opacity-[0.02] group-hover:scale-105 transition-transform duration-700 pointer-events-none leading-none z-0" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>03</div>
<div className="relative z-10 flex justify-between items-start mb-20 md:mb-28">
<div className="w-10 h-10 rounded-sm bg-white text-slate-700 flex items-center justify-center border border-slate-200 shadow-sm group-hover:border-[#E3D5D6] group-hover:text-[#C5A8AA] transition-colors">
<iconify-icon className="text-2xl" icon="solar:sun-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<div className="flex flex-col items-end gap-1.5">
<span className="text-xs font-extralight uppercase tracking-[0.15em] px-2 py-1 bg-slate-50 border border-slate-200 rounded-sm text-slate-600" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>LED Array</span>
<span className="text-xs text-[#C5A8AA] font-extralight uppercase tracking-[0.15em]" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Active</span>
</div>
</div>
<div className="relative z-10 mt-auto border-t border-slate-100 pt-8 group-hover:border-[#E3D5D6] transition-colors">
<h3 className="text-2xl md:text-3xl font-extralight tracking-tight mb-3 text-slate-900">Photobiomodulation</h3>
<p className="text-base md:text-lg text-slate-500 font-thin leading-relaxed max-w-sm">Medical-grade LED therapy accelerating cellular recovery, enhancing ATP synthesis, and reducing inflammation.</p>
</div>
</div>

<div className="bg-white p-8 md:p-12 flex flex-col h-full relative group hover:bg-slate-50/80 transition-colors z-10 overflow-hidden">
<div className="absolute -right-4 -bottom-4 text-[12rem] font-thin tracking-tighter text-slate-900 opacity-[0.02] group-hover:scale-105 transition-transform duration-700 pointer-events-none leading-none z-0" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>04</div>
<div className="relative z-10 flex justify-between items-start mb-20 md:mb-28">
<div className="w-10 h-10 rounded-sm bg-white text-slate-700 flex items-center justify-center border border-slate-200 shadow-sm group-hover:border-[#E3D5D6] group-hover:text-[#C5A8AA] transition-colors">
<iconify-icon className="text-2xl" icon="solar:syringe-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<div className="flex flex-col items-end gap-1.5">
<span className="text-xs font-extralight uppercase tracking-[0.15em] px-2 py-1 bg-slate-50 border border-slate-200 rounded-sm text-slate-600" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Biologics</span>
<span className="text-xs text-[#C5A8AA] font-extralight uppercase tracking-[0.15em]" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Active</span>
</div>
</div>
<div className="relative z-10 mt-auto border-t border-slate-100 pt-8 group-hover:border-[#E3D5D6] transition-colors">
<h3 className="text-2xl md:text-3xl font-extralight tracking-tight mb-3 text-slate-900">Regenerative Injectables</h3>
<p className="text-base md:text-lg text-slate-500 font-thin leading-relaxed max-w-sm">Polynucleotides and biostimulators designed to rebuild the extracellular matrix and prompt natural collagen.</p>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-48 md:px-12 lg:px-24 bg-white pt-32 pr-6 pb-32 pl-6 border-t border-slate-200" id="philosophy">
<div className="text-center max-w-4xl mr-auto ml-auto">
<h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight mb-10 leading-[1.1] text-slate-900">
                Regenerative Philosophy. <br/>
<span className="text-slate-300">Beyond superficial correction</span>
</h2>
<p className="text-lg md:text-2xl text-slate-500 font-thin leading-relaxed mb-16 max-w-3xl mx-auto">
                Our focus shifts from mere augmentation to profound cellular repair. By strategically stimulating natural collagen production and optimizing underlying tissue health, we achieve sustained, sophisticated, and entirely natural-looking results.
            </p>
<div className="flex flex-wrap justify-center gap-3">
<div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 text-slate-600 hover:border-[#E3D5D6] hover:text-[#A9898B] transition-colors cursor-default rounded-sm text-xs font-extralight tracking-wide" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<iconify-icon className="text-base text-[#C5A8AA]" icon="solar:atom-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
                    CELLULAR OPTIMIZATION
                </div>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 text-slate-600 hover:border-[#E3D5D6] hover:text-[#A9898B] transition-colors cursor-default rounded-sm text-xs font-extralight tracking-wide" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<iconify-icon className="text-base text-[#C5A8AA]" icon="solar:stars-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
                    COLLAGEN STIMULATION
                </div>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 text-slate-600 hover:border-[#E3D5D6] hover:text-[#A9898B] transition-colors cursor-default rounded-sm text-xs font-extralight tracking-wide" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<iconify-icon className="text-base text-[#C5A8AA]" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
                    LONG-TERM EFFICACY
                </div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#0B1221] text-white border-t border-slate-800 mt-auto relative overflow-hidden" id="consultation">
<div className="absolute inset-0 z-0 opacity-[0.06]" style={{backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '3rem 3rem'}}></div>
<div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-800/30 via-[#0B1221]/60 to-[#0B1221] pointer-events-none"></div>
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-slate-700/20 via-slate-800/5 to-transparent blur-[100px] z-0 pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<iconify-icon className="text-4xl text-[#C5A8AA] mb-8 mx-auto" icon="solar:calendar-add-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<h2 className="text-3xl md:text-5xl font-extralight tracking-tight mb-6 text-white leading-tight">
                Initiate your clinical treatment plan.
            </h2>
<p className="text-slate-400 font-thin mb-12 text-lg md:text-xl max-w-xl mx-auto">
                Schedule a comprehensive skin and structural consultation with our medical team to establish your baseline and roadmap.
            </p>
<button className="bg-white text-slate-900 border border-white px-10 py-4 rounded-sm text-sm font-extralight hover:text-[#A9898B] hover:bg-white shadow-[0_4px_14px_rgba(255,255,255,0.1)] transition-all duration-300">
                Request Consultation
            </button>
</div>
</section>

<footer className="bg-[#0B1221] text-slate-400 py-12 px-6 md:px-12 lg:px-24 border-t border-slate-800/50">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
<div className="md:col-span-2">

<a className="flex flex-col items-start mb-8 group transition-opacity hover:opacity-80" href="/">
<div className="flex flex-col items-center">
<svg className="w-14 h-14 text-white" fill="none" shape-rendering="geometricPrecision" viewbox="0 0 100 100">
<path d="M 68 20 A 35 35 0 1 0 80 32" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
<circle cx="78" cy="22" fill="#d6979c" r="4.5" stroke="none"></circle>
</svg>
<div className="flex flex-col items-center mt-1 text-center">
<span className="text-xl font-normal tracking-[0.25em] text-white leading-none pl-[0.25em]">CIRCLE</span>
<span className="text-xs font-light tracking-[0.3em] text-slate-400 mt-1 pl-[0.3em] uppercase">Aesthetics</span>
</div>
</div>
</a>
<p className="text-sm font-extralight max-w-xs leading-relaxed">
                    Hospital-grade regenerative aesthetic medicine. Consultant supervised clinical excellence.
                </p>
</div>
<div>
<h4 className="text-xs font-mono-tech font-light uppercase tracking-[0.2em] text-slate-500 mb-6" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Clinic</h4>
<ul className="space-y-4 text-sm font-extralight">
<li><a className="hover:text-[#C5A8AA] transition-colors" href="/treatments">Treatments</a></li>
<li><a className="hover:text-[#C5A8AA] transition-colors" href="/consultant-led">Dr Fuan Chan</a></li>
<li><a className="hover:text-[#C5A8AA] transition-colors" href="/technology">Technology</a></li>
<li><a className="hover:text-[#C5A8AA] transition-colors" href="/book-consultation">Book Consultation</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-mono-tech font-light uppercase tracking-[0.2em] text-slate-500 mb-6" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Contact</h4>
<ul className="space-y-4 text-sm font-extralight">
<li>Dublin Ireland</li>
<li><a className="hover:text-[#C5A8AA] transition-colors" href="mailto:clinical@circleaesthetics.ie">clinical@circleaesthetics.ie</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-extralight text-slate-600">
<p className="">© 2026 Circle Aesthetics. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-[#C5A8AA] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#C5A8AA] transition-colors" href="#">Terms of Use</a>
</div>
</div>
</footer>

    </>
  );
}
