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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex justify-between items-center">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-9 h-9 bg-neutral-900 border border-white/10 rounded-lg flex items-center justify-center group-hover:border-amber-500/50 transition-colors duration-300">
<span className="font-semibold text-white text-sm tracking-tight">C</span>
</div>
<span className="text-base font-medium tracking-tight text-white">CUT Laser Workshop</span>
</div>
<div className="hidden md:flex gap-10 text-base text-neutral-400 font-medium">
<a className="hover:text-white transition-colors" href="#hero">Home</a>
<a className="hover:text-white transition-colors" href="#feature">Capabilities</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#testimonial">Clients</a>
</div>
<a className="flex items-center gap-2 text-sm font-medium text-white bg-white/10 hover:bg-white/15 px-4 py-2 rounded-full transition-all border border-white/5" href="#pricing">
        Get a quote
        <i className="w-4 h-4 opacity-70" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</nav>

<header className="relative pt-40 pb-32 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden" id="hero">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none opacity-40"></div>
<div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col gap-8">
<div className="inline-flex items-center gap-2.5 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-1.5 text-sm font-medium text-amber-200 w-max">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
          Accepting new projects for Oct
        </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1]">
          Precision cuts.<br/>
<span className="text-neutral-500">Lasting impressions.</span>
</h1>
<p className="text-xl text-neutral-400 leading-relaxed max-w-lg font-light">
          Millimeter-accurate laser cutting and engraving on wood, Perspex, and metal. Designed for architects, agencies, and product designers.
        </p>
<div className="flex flex-wrap items-center gap-5 pt-2">
<button className="bg-white text-black hover:bg-neutral-200 px-8 py-4 rounded-full font-medium text-base tracking-tight transition-all">
            Start a project
          </button>
<button className="px-8 py-4 rounded-full font-medium text-base tracking-tight text-neutral-300 hover:text-white transition-colors flex items-center gap-2">
<i className="w-5 h-5" data-lucide="play-circle" style={{strokeWidth: '1.5'}}></i>
            Watch process
          </button>
</div>
<div className="flex items-center gap-8 mt-4 border-t border-white/5 pt-8">
<div>
<p className="text-sm text-neutral-500 mb-1">Turnaround</p>
<p className="text-lg font-medium text-neutral-200 tracking-tight">48 hours</p>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div>
<p className="text-sm text-neutral-500 mb-1">Tolerance</p>
<p className="text-lg font-medium text-neutral-200 tracking-tight">±0.1mm</p>
</div>
</div>
</div>

<div className="relative w-full flex justify-center lg:justify-end">

<div className="absolute -inset-y-20 left-10 w-px bg-gradient-to-b from-transparent via-amber-500/50 to-transparent blur-[1px] hidden lg:block"></div>
<div className="w-full max-w-md bg-neutral-900/50 border border-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-2xl relative z-10">
<div className="flex items-center justify-between mb-8">
<h3 className="text-sm font-medium text-neutral-400 uppercase tracking-wider">Live Production Queue</h3>
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
</div>
</div>
<div className="space-y-4">

<div className="group relative overflow-hidden rounded-2xl bg-neutral-800/40 border border-amber-500/30 p-4 transition-all hover:bg-neutral-800/60">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>
<div className="flex items-start justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
<i className="w-5 h-5" data-lucide="zap" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<p className="text-base font-medium text-white">Retail Signage Set</p>
<p className="text-sm text-neutral-500">Perspex 6mm · Cutting</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-amber-500">84%</p>
<p className="text-xs text-neutral-600">3m left</p>
</div>
</div>

<div className="mt-4 h-1 w-full bg-neutral-700/50 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 w-[84%] laser-glow"></div>
</div>
</div>

<div className="flex items-center justify-between rounded-2xl bg-neutral-900/40 border border-white/5 p-4 hover:border-white/10 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-neutral-400">
<i className="w-5 h-5" data-lucide="layers" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<p className="text-base font-medium text-neutral-300">Arch. Model Parts</p>
<p className="text-sm text-neutral-500">Birch Plywood 3mm</p>
</div>
</div>
<span className="px-2.5 py-1 rounded-md bg-neutral-800 text-xs font-medium text-neutral-400">Queued</span>
</div>

<div className="flex items-center justify-between rounded-2xl bg-neutral-900/40 border border-white/5 p-4 hover:border-white/10 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-neutral-400">
<i className="w-5 h-5" data-lucide="cpu" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<p className="text-base font-medium text-neutral-300">Control Panels</p>
<p className="text-sm text-neutral-500">Anodized Alum. · Marking</p>
</div>
</div>
<span className="px-2.5 py-1 rounded-md bg-neutral-800 text-xs font-medium text-neutral-400">Queued</span>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5" id="feature">
<div className="mb-20 md:flex md:justify-between md:items-end">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Capabilities</h2>
<p className="text-xl text-neutral-400 leading-relaxed">
          From single prototypes to full production runs. We deliver clean, consistent results across a wide range of materials.
        </p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-base text-white hover:text-amber-400 transition-colors mt-4 md:mt-0" href="#">
        View material guide <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative p-8 rounded-3xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-neutral-800 rounded-2xl flex items-center justify-center mb-8 border border-white/5">
<i className="w-6 h-6 text-amber-200" data-lucide="component" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Wood &amp; MDF</h3>
<p className="text-base text-neutral-400 leading-relaxed mb-8">
            Complex geometries with zero contact force. Ideal for architectural models, furniture parts, and intricate signage.
          </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-neutral-500">
<i className="w-4 h-4 text-neutral-300" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
              Up to 1200x900mm bed
            </li>
<li className="flex items-center gap-3 text-sm text-neutral-500">
<i className="w-4 h-4 text-neutral-300" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
              Clean, burn-free edges
            </li>
</ul>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-neutral-800 rounded-2xl flex items-center justify-center mb-8 border border-white/5">
<i className="w-6 h-6 text-emerald-200" data-lucide="layers" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Perspex &amp; Acrylic</h3>
<p className="text-base text-neutral-400 leading-relaxed mb-8">
            Flame-polished edges directly from the laser. Perfect for retail displays, lighting fixtures, and technical enclosures.
          </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-neutral-500">
<i className="w-4 h-4 text-neutral-300" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
              Clear, tinted, &amp; frosted
            </li>
<li className="flex items-center gap-3 text-sm text-neutral-500">
<i className="w-4 h-4 text-neutral-300" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
              Precision bending available
            </li>
</ul>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-neutral-800 rounded-2xl flex items-center justify-center mb-8 border border-white/5">
<i className="w-6 h-6 text-sky-200" data-lucide="scan-line" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Metal Marking</h3>
<p className="text-base text-neutral-400 leading-relaxed mb-8">
            Permanent, high-contrast marking on stainless steel and anodized aluminum for serials, branding, and instruction plates.
          </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-neutral-500">
<i className="w-4 h-4 text-neutral-300" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
              Resistant to abrasion
            </li>
<li className="flex items-center gap-3 text-sm text-neutral-500">
<i className="w-4 h-4 text-neutral-300" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
              QR &amp; Barcode compatible
            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 border-y border-white/5" id="testimonial">
<div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
<div className="mb-8 flex justify-center">
<div className="p-3 bg-neutral-800 rounded-full">
<i className="w-6 h-6 text-amber-500" data-lucide="quote" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<h3 className="text-2xl md:text-4xl font-medium text-white leading-tight tracking-tight mb-10">
        “CUT Laser Workshop is our go-to partner for retail displays. Files go in, flawless parts come back—perfectly packed and on time.”
      </h3>
<div className="flex flex-col items-center gap-2">
<p className="text-lg font-medium text-white">Alex Green</p>
<p className="text-base text-neutral-500">Creative Director, Studio Frame</p>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto" id="pricing">
<div className="text-center mb-20 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Transparent Pricing</h2>
<p className="text-xl text-neutral-400">
        Send your files for an exact quote. No setup fees for standard materials.
      </p>
</div>
<div className="grid md:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-3xl bg-neutral-900/20 border border-white/5 flex flex-col gap-6">
<div>
<h3 className="text-lg font-medium text-white">Prototyping</h3>
<p className="text-base text-neutral-500 mt-2">For students &amp; makers.</p>
</div>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight">R250</span>
<span className="text-sm text-neutral-500">/ job minimum</span>
</div>
<div className="h-px bg-white/5 w-full"></div>
<ul className="space-y-4 text-base text-neutral-400">
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-500"></div>
            Standard Lead Time (3-5 days)
          </li>
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-500"></div>
            Stock Materials Only
          </li>
</ul>
<button className="w-full py-3 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors mt-4">
          Upload Files
        </button>
</div>

<div className="p-8 rounded-3xl bg-neutral-800/50 border border-amber-500/30 flex flex-col gap-6 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4">
<div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
</div>
<div>
<h3 className="text-lg font-medium text-amber-500">Professional</h3>
<p className="text-base text-neutral-400 mt-2">For agencies &amp; production.</p>
</div>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight">R180</span>
<span className="text-sm text-neutral-500">/ sheet base</span>
</div>
<div className="h-px bg-white/10 w-full"></div>
<ul className="space-y-4 text-base text-neutral-300">
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
            Priority Queue (48h)
          </li>
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
            Material Sourcing Included
          </li>
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
            File Optimization
          </li>
</ul>
<button className="w-full py-3 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors mt-4">
          Start Batch Order
        </button>
</div>

<div className="p-8 rounded-3xl bg-neutral-900/20 border border-white/5 flex flex-col gap-6">
<div>
<h3 className="text-lg font-medium text-white">Manufacturing</h3>
<p className="text-base text-neutral-500 mt-2">Large scale volume.</p>
</div>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight">Custom</span>
</div>
<div className="h-px bg-white/5 w-full"></div>
<ul className="space-y-4 text-base text-neutral-400">
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-500"></div>
            Dedicated Production Slot
          </li>
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-500"></div>
            Assembly &amp; Packing
          </li>
</ul>
<button className="w-full py-3 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors mt-4">
          Contact Sales
        </button>
</div>
</div>
</section>

<footer className="bg-black pt-20 pb-10 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
<div className="lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-amber-500 rounded flex items-center justify-center">
<span className="text-black text-xs font-bold">C</span>
</div>
<span className="text-lg font-medium text-white tracking-tight">CUT Laser Workshop</span>
</div>
<p className="text-lg text-neutral-500 max-w-sm">
            Digital fabrication studio helping creators bridge the gap between digital design and physical objects.
          </p>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wider">Services</h4>
<ul className="space-y-4 text-base text-neutral-500">
<li><a className="hover:text-amber-500 transition-colors" href="#">Laser Cutting</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Engraving</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Material Sales</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Design Service</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wider">Connect</h4>
<ul className="space-y-4 text-base text-neutral-500">
<li><a className="hover:text-amber-500 transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Email Us</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">+27 12 345 6789</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
<p className="text-sm text-neutral-600">© 2024 CUT Laser Workshop. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-sm text-neutral-600 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-sm text-neutral-600 hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>

<div className="mt-20 select-none opacity-50 overflow-hidden">
<h1 className="text-[18vw] font-bold text-neutral-900 leading-none text-center tracking-tighter mix-blend-difference">CUT</h1>
</div>
</div>
</footer>


    </>
  );
}
