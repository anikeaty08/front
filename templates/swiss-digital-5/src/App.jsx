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
      

<div className="fixed inset-0 z-0 pointer-events-none bg-grid h-screen w-full"></div>

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
<div className="max-w-[1920px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<span className="text-zinc-950 font-bold tracking-tighter text-xl">AURA.</span>
</div>
<div className="hidden md:flex items-center gap-12 text-xs font-mono font-medium text-zinc-500 uppercase tracking-widest">
<a className="hover:text-black transition-colors duration-300 link-underline" href="#work">[01] Work</a>
<a className="hover:text-black transition-colors duration-300 link-underline" href="#services">[02] Services</a>
<a className="hover:text-black transition-colors duration-300 link-underline" href="#studio">[03] Studio</a>
</div>
<button className="text-xs font-mono font-medium bg-zinc-950 text-white px-6 py-3 hover:bg-zinc-800 transition-all duration-300 flex items-center gap-3">
                LET'S TALK
                <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</nav>

<main className="relative z-10 pt-40 pb-20 md:pt-60 md:pb-32">
<div className="max-w-[1920px] mx-auto px-6 md:px-12 border-l border-zinc-200 ml-0 md:ml-12 pl-6 md:pl-12">
<div className="flex flex-col items-start text-left">
<div className="flex items-center gap-3 mb-8">
<div className="w-2 h-2 bg-zinc-950 animate-pulse"></div>
<span className="font-mono text-xs uppercase tracking-widest text-zinc-500">Zürich — Based Digital Studio</span>
</div>
<h1 className="text-huge font-semibold text-zinc-950 mb-12">
                    DIGITAL<br/>
                    GRAVITY.
                </h1>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full border-t border-zinc-200 pt-12">
<div className="md:col-span-5 lg:col-span-4">
<p className="text-zinc-600 text-lg md:text-xl leading-relaxed font-light">
                            We fuse systemic design, data intelligence, and WebGL experiences to build products that scale. Minimal intervention, maximum impact.
                        </p>
</div>
<div className="md:col-span-7 lg:col-span-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-end">
<button className="h-14 px-10 border border-zinc-200 hover:border-zinc-950 text-zinc-950 font-mono text-xs uppercase tracking-widest hover:bg-zinc-50 transition-all duration-300 flex items-center gap-3">
<span className="iconify" data-icon="lucide:play" data-width="14"></span>
                            Showreel 2024
                        </button>
<button className="h-14 px-10 bg-zinc-950 text-white font-mono text-xs uppercase tracking-widest hover:bg-zinc-800 transition-all duration-300">
                            Explore Services
                        </button>
</div>
</div>
</div>
</div>

<div className="mt-24 w-full h-[30vh] md:h-[60vh] relative border-y border-zinc-200 overflow-hidden bg-zinc-50 flex items-center justify-center">

<div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 h-full w-full">
<div className="border-r border-zinc-200 h-full"></div>
<div className="border-r border-zinc-200 h-full"></div>
<div className="border-r border-zinc-200 h-full"></div>
<div className="border-r border-zinc-200 h-full hidden md:block"></div>
<div className="border-r border-zinc-200 h-full hidden md:block"></div>
</div>

<div className="relative z-10 w-64 h-64 md:w-96 md:h-96 border border-zinc-950 bg-white flex items-center justify-center shadow-2xl shadow-zinc-200/50">
<div className="w-full h-full p-2 grid grid-cols-2 grid-rows-2 gap-2">
<div className="bg-zinc-100"></div>
<div className="bg-zinc-950"></div>
<div className="bg-zinc-200"></div>
<div className="border border-zinc-200 flex items-center justify-center">
<span className="iconify animate-spin" data-duration="5s" data-icon="lucide:asterisk" data-width="40"></span>
</div>
</div>
</div>
</div>
</main>

<div className="w-full border-b border-zinc-200 bg-white py-12 overflow-hidden marquee-container relative z-10">
<div className="flex w-max marquee-content gap-24 items-center">
<span className="text-3xl font-bold tracking-tighter text-zinc-950">ACME CORP</span>
<span className="text-3xl font-bold tracking-tighter text-zinc-300">VERTEX</span>
<span className="text-3xl font-bold tracking-tighter text-zinc-950">LUMA</span>
<span className="text-3xl font-bold tracking-tighter text-zinc-300">ORBITAL</span>
<span className="text-3xl font-bold tracking-tighter text-zinc-950">STRATOS</span>
<span className="text-3xl font-bold tracking-tighter text-zinc-300">NEXUS</span>
<span className="text-3xl font-bold tracking-tighter text-zinc-950">ACME CORP</span>
<span className="text-3xl font-bold tracking-tighter text-zinc-300">VERTEX</span>
<span className="text-3xl font-bold tracking-tighter text-zinc-950">LUMA</span>
<span className="text-3xl font-bold tracking-tighter text-zinc-300">ORBITAL</span>
</div>
</div>

<section className="relative z-10 border-b border-zinc-200" id="services">
<div className="max-w-[1920px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-4">

<div className="lg:col-span-1 p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-zinc-200 bg-white">
<span className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4 block">[02] Capabilities</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-950 mb-8">Systemic<br/>Design.</h2>
<p className="text-zinc-600 text-sm leading-relaxed max-w-xs">
                        Engineered for growth through precise design and data-driven marketing.
                    </p>
</div>

<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 bg-zinc-50">

<div className="group border-b md:border-r border-zinc-200 p-12 bg-white hover:bg-zinc-50 transition-colors duration-300">
<div className="flex justify-between items-start mb-12">
<span className="iconify text-zinc-950" data-icon="lucide:monitor" data-width="24"></span>
<span className="font-mono text-xs text-zinc-400">01</span>
</div>
<h3 className="text-xl font-bold text-zinc-950 mb-3 tracking-tight">Web Design &amp; WebGL</h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-sm">Immersive frontend development using GSAP and Three.js for interactive storytelling.</p>
</div>

<div className="group border-b border-zinc-200 p-12 bg-white hover:bg-zinc-50 transition-colors duration-300">
<div className="flex justify-between items-start mb-12">
<span className="iconify text-zinc-950" data-icon="lucide:bar-chart-2" data-width="24"></span>
<span className="font-mono text-xs text-zinc-400">02</span>
</div>
<h3 className="text-xl font-bold text-zinc-950 mb-3 tracking-tight">SEO &amp; Analytics</h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-sm">Data-centric search engine optimization strategies to dominate organic rankings.</p>
</div>

<div className="group border-b md:border-r border-zinc-200 p-12 bg-white hover:bg-zinc-50 transition-colors duration-300">
<div className="flex justify-between items-start mb-12">
<span className="iconify text-zinc-950" data-icon="lucide:globe-2" data-width="24"></span>
<span className="font-mono text-xs text-zinc-400">03</span>
</div>
<h3 className="text-xl font-bold text-zinc-950 mb-3 tracking-tight">GEO Marketing</h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-sm">Hyper-local targeting and geospatial data analysis for physical footprint expansion.</p>
</div>

<div className="group border-b border-zinc-200 p-12 bg-white hover:bg-zinc-50 transition-colors duration-300">
<div className="flex justify-between items-start mb-12">
<span className="iconify text-zinc-950" data-icon="lucide:layers" data-width="24"></span>
<span className="font-mono text-xs text-zinc-400">04</span>
</div>
<h3 className="text-xl font-bold text-zinc-950 mb-3 tracking-tight">Brand Strategy</h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-sm">Defining visual identity and voice for consistency across all touchpoints.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative z-10" id="work">
<div className="max-w-[1920px] mx-auto px-6 md:px-12">
<div className="flex items-end justify-between mb-24 border-b border-zinc-200 pb-6">
<h2 className="text-6xl md:text-8xl font-semibold tracking-tighter text-zinc-950">SELECTED<br/>WORK</h2>
<span className="hidden md:block font-mono text-sm text-zinc-500 mb-2">2023 — 2024</span>
</div>
<div className="space-y-32">

<div className="group grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-8 order-2 md:order-1">
<div className="aspect-[16/9] bg-zinc-100 overflow-hidden relative border border-zinc-200 group-hover:border-zinc-950 transition-colors duration-500">

<div className="absolute inset-0 flex items-center justify-center bg-zinc-50">
<div className="w-3/4 h-3/4 border border-zinc-200 flex items-center justify-center group-hover:scale-95 transition-transform duration-700">
<div className="w-1/2 h-1/2 bg-zinc-950 rounded-full blur-[100px] opacity-20"></div>
<span className="font-bold text-4xl text-zinc-200 tracking-tighter">NEOBANK 01</span>
</div>
</div>
</div>
</div>
<div className="md:col-span-4 order-1 md:order-2 flex flex-col justify-end h-full pb-6">
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 bg-zinc-100 text-[10px] font-mono uppercase tracking-widest text-zinc-950">Interface</span>
<span className="px-2 py-1 bg-zinc-100 text-[10px] font-mono uppercase tracking-widest text-zinc-950">Development</span>
</div>
<h3 className="text-4xl font-bold text-zinc-950 mb-4 tracking-tighter">NeoBank App</h3>
<p className="text-zinc-500 text-sm leading-relaxed mb-8 border-l border-zinc-200 pl-4">A complete overhaul focusing on micro-interactions and real-time visualization.</p>
<a className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-zinc-950 hover:text-zinc-600 transition-colors" href="#">
                            View Case <span className="iconify" data-icon="lucide:arrow-up-right" data-width="14"></span>
</a>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-4 flex flex-col justify-end h-full pb-6">
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 bg-zinc-100 text-[10px] font-mono uppercase tracking-widest text-zinc-950">SEO</span>
<span className="px-2 py-1 bg-zinc-100 text-[10px] font-mono uppercase tracking-widest text-zinc-950">Marketing</span>
</div>
<h3 className="text-4xl font-bold text-zinc-950 mb-4 tracking-tighter">Luxe Fashion</h3>
<p className="text-zinc-500 text-sm leading-relaxed mb-8 border-l border-zinc-200 pl-4">Increased organic traffic by 400% through technical SEO auditing and GEO-targeted content.</p>
<a className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-zinc-950 hover:text-zinc-600 transition-colors" href="#">
                            View Case <span className="iconify" data-icon="lucide:arrow-up-right" data-width="14"></span>
</a>
</div>
<div className="md:col-span-8">
<div className="aspect-[16/9] bg-zinc-100 overflow-hidden relative border border-zinc-200 group-hover:border-zinc-950 transition-colors duration-500">

<div className="absolute inset-0 flex items-center justify-center bg-zinc-50">
<div className="w-3/4 h-3/4 border border-zinc-200 flex items-center justify-center group-hover:scale-95 transition-transform duration-700">
<div className="w-full h-full bg-gradient-to-tr from-zinc-200 to-transparent opacity-50"></div>
<span className="absolute font-bold text-4xl text-zinc-200 tracking-tighter">LUXE 02</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-50 border-t border-zinc-200">
<div className="max-w-4xl mx-auto px-6 text-center">
<span className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6 block">Start a project</span>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-950 mb-8">Ready to scale?</h2>
<form className="max-w-lg mx-auto flex flex-col gap-0 text-left bg-white border border-zinc-200 shadow-sm">
<div className="relative group border-b border-zinc-100">
<input className="w-full bg-transparent px-6 py-6 text-xl text-zinc-950 placeholder:text-zinc-300 focus:outline-none focus:bg-zinc-50 transition-all font-medium" placeholder="Email address" required="" type="email"/>
</div>
<div className="grid grid-cols-2 border-b border-zinc-100">
<label className="flex items-center gap-3 cursor-pointer group p-4 hover:bg-zinc-50 border-r border-zinc-100 transition-colors">
<input className="w-4 h-4 border-2 border-zinc-300 rounded-none text-zinc-950 focus:ring-0 checked:bg-zinc-950 checked:border-zinc-950 transition-colors cursor-pointer" type="checkbox"/>
<span className="text-xs font-mono uppercase tracking-wide text-zinc-600">Webdesign</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group p-4 hover:bg-zinc-50 transition-colors">
<input className="w-4 h-4 border-2 border-zinc-300 rounded-none text-zinc-950 focus:ring-0 checked:bg-zinc-950 checked:border-zinc-950 transition-colors cursor-pointer" type="checkbox"/>
<span className="text-xs font-mono uppercase tracking-wide text-zinc-600">Strategy</span>
</label>
</div>
<button className="px-6 py-6 bg-zinc-950 text-white font-mono text-sm uppercase tracking-widest hover:bg-zinc-800 transition-colors flex items-center justify-between group" type="button">
<span>Send Request</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</form>
</div>
</section>

<footer className="border-t border-zinc-200 bg-white pt-20 pb-10">
<div className="max-w-[1920px] mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-2">
<span className="text-zinc-950 font-bold tracking-tighter text-2xl block mb-6">AURA.</span>
<p className="text-zinc-500 text-sm max-w-xs mb-8">
                        Swiss-engineered digital products. Focus on clarity, functionality, and impact.
                    </p>
</div>
<div>
<h4 className="text-zinc-950 font-mono font-bold mb-6 text-xs uppercase tracking-widest">Sitemap</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-950 transition-colors" href="#">Home</a></li>
<li><a className="hover:text-zinc-950 transition-colors" href="#">Work</a></li>
<li><a className="hover:text-zinc-950 transition-colors" href="#">Services</a></li>
</ul>
</div>
<div>
<h4 className="text-zinc-950 font-mono font-bold mb-6 text-xs uppercase tracking-widest">Social</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-950 transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-zinc-950 transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-zinc-950 transition-colors" href="#">LinkedIn</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-400 uppercase tracking-wide">
<p>© 2024 Aura Studio. Zürich.</p>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-950"></div>
<span>Systems Normal</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
