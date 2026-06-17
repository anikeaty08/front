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



        // Initialize Icons
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
      

<div className="noise-overlay"></div>

<nav className="fixed top-0 left-0 w-full z-50 bg-[#E6E6E6] border-beam-b">
<div className="flex flex-col lg:flex-row justify-between lg:items-stretch h-auto lg:h-20">

<div className="flex items-center justify-between p-4 lg:p-0 lg:w-1/4 lg:border-beam-r bg-[#E6E6E6] relative z-20">
<a className="block pl-4 lg:pl-6" href="#">
<span className="text-4xl lg:text-5xl font-extrabold tracking-tight-custom uppercase">VØLK</span>
</a>

<button className="lg:hidden p-2 border-beam bg-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>

<div className="hidden lg:flex flex-1 justify-end items-center font-tech text-xs tracking-widest uppercase divide-x-2 divide-black">
<a className="h-full flex items-center px-8 hover:bg-black hover:text-white transition-colors duration-0 border-l-2 border-black" href="#">
                    [01] Infrastructure
                </a>
<a className="h-full flex items-center px-8 hover:bg-black hover:text-white transition-colors duration-0" href="#">
                    [02] Public
                </a>
<a className="h-full flex items-center px-8 hover:bg-black hover:text-white transition-colors duration-0" href="#">
                    [03] Tender
                </a>
<a className="h-full flex items-center px-8 bg-[#FF3300] text-white hover:bg-black transition-colors duration-0 font-bold border-l-2 border-black" href="#">
<i className="w-4 h-4 mr-2" data-lucide="download"></i> Capability [PDF]
                </a>
</div>
</div>
</nav>

<div className="h-20 lg:h-20 w-full"></div>

<section className="w-full border-beam-b grid grid-cols-1 lg:grid-cols-12 min-h-[90vh]">

<div className="lg:col-span-8 border-beam-r relative overflow-hidden group">
<div className="absolute inset-0 bg-cover bg-center brutalist-img" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp'}}></div>

<div className="absolute bottom-8 right-8 bg-white border-beam p-2 font-tech text-xs z-10 hidden group-hover:block">
                SCALE: 1:1000 // HUMAN REF <i className="inline w-3 h-3 ml-1" data-lucide="user"></i>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
</div>

<div className="lg:col-span-4 flex flex-col justify-between bg-[#E6E6E6] p-6 lg:p-10 relative">

<div className="absolute top-0 left-0 w-full h-[2px] bg-black animate-[width_1s_ease-out]"></div>
<div>
<div className="font-tech text-xs text-[#FF3300] mb-4 flex items-center gap-2">
<i className="w-3 h-3 animate-spin" data-lucide="circle-dashed"></i> SYSTEM STATUS: OPERATIONAL
                </div>
<h1 className="text-6xl lg:text-7xl font-extrabold uppercase tracking-tight-custom leading-[0.85] mb-6">
                    Cast In<br/>Concrete.
                </h1>
<div className="w-12 h-2 bg-[#FF3300] mb-6"></div>
<p className="font-medium text-lg leading-snug max-w-sm">
                    VØLK designs the structures of state. We build for permanence, sovereignty, and the next century.
                </p>
</div>
<div className="mt-12 lg:mt-0">
<div className="font-tech text-[10px] mb-2 text-gray-500 uppercase">Coordinate: 52.5200° N, 13.4050° E</div>
<a className="group block w-full border-beam bg-transparent hover:bg-black hover:text-white transition-all duration-0 p-4 text-center uppercase font-bold tracking-wider flex justify-between items-center" href="#">
<span>View Sector Projects</span>
<i className="w-5 h-5" data-lucide="arrow-down-right"></i>
</a>
</div>
</div>
</section>

<section className="w-full border-beam-b">
<div className="bg-black text-white px-6 py-2 font-tech text-xs border-beam-b tracking-widest uppercase flex items-center gap-2">
<i className="w-3 h-3" data-lucide="shield-check"></i> Contracted By Federal Entities
        </div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 bg-[#E6E6E6]">

<div className="h-32 border-beam-r flex items-center justify-center p-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-opacity duration-300">

<i className="w-12 h-12" data-lucide="landmark"></i>
</div>
<div className="h-32 border-beam-r flex items-center justify-center p-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-opacity duration-300">
<i className="w-12 h-12" data-lucide="scale"></i>
</div>
<div className="h-32 border-beam-r flex items-center justify-center p-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-opacity duration-300">
<i className="w-12 h-12" data-lucide="building-2"></i>
</div>
<div className="h-32 border-beam-r flex items-center justify-center p-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-opacity duration-300">
<i className="w-12 h-12" data-lucide="factory"></i>
</div>
<div className="h-32 border-beam-r flex items-center justify-center p-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-opacity duration-300">
<i className="w-12 h-12" data-lucide="globe"></i>
</div>
<div className="h-32 flex items-center justify-center p-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-opacity duration-300">
<i className="w-12 h-12" data-lucide="anchor"></i>
</div>
</div>
</section>

<section className="w-full border-beam-b">
<div className="grid grid-cols-1 lg:grid-cols-3">

<div className="border-beam-b lg:border-b-0 lg:border-beam-r p-8 lg:p-12 bg-white lg:bg-transparent">
<h2 className="text-5xl font-extrabold uppercase tracking-tight-custom leading-none mb-4">Civil<br/>Rigor.</h2>
<div className="w-full h-[2px] bg-black mb-4"></div>
<p className="font-tech text-xs uppercase tracking-widest text-[#FF3300]">/// Protocol 0192-B</p>
</div>

<div className="border-beam-b lg:border-b-0 lg:border-beam-r p-8 lg:p-12 hover:bg-white transition-colors duration-0 group relative cursor-help">

<div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-[#FF3300] hidden group-hover:block"></div>
<div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-[#FF3300] hidden group-hover:block"></div>
<div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-[#FF3300] hidden group-hover:block"></div>
<div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-[#FF3300] hidden group-hover:block"></div>
<h3 className="font-bold text-xl uppercase mb-4 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="component"></i> Brutalism
                </h3>
<p className="text-sm font-medium leading-relaxed opacity-80">
                    Function over decoration. We minimize maintenance costs through material honesty. Concrete does not lie. It endures.
                </p>
</div>

<div className="p-8 lg:p-12 hover:bg-white transition-colors duration-0 group relative cursor-help">
<h3 className="font-bold text-xl uppercase mb-4 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="scaling"></i> Scale
                </h3>
<p className="text-sm font-medium leading-relaxed opacity-80">
                    Capable of managing $500M+ mixed-use developments and federal infrastructure. We build large to last long.
                </p>
<div className="mt-8 font-tech text-xs border border-black inline-block px-2 py-1 bg-gray-100">
                    CAPACITY &gt; 500M
                </div>
</div>
</div>
</section>

<section className="w-full border-beam-b bg-[#1A1A1A]">
<div className="border-beam-b bg-[#E6E6E6] p-4 flex justify-between items-center sticky top-20 z-30">
<h2 className="text-2xl font-extrabold uppercase tracking-tight">Built Works</h2>
<span className="font-tech text-xs border border-black px-2 py-1">INDEX: 01-03</span>
</div>

<div className="group relative w-full h-[80vh] border-beam-b overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center transition-all duration-0 grayscale group-hover:grayscale-0" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1544321036-724e527d4c1d?q=80&amp'}}>
</div>

<div className="absolute bottom-0 left-0 w-full lg:w-1/2 p-6 lg:p-10 bg-gradient-to-t from-black to-transparent">
<div className="font-tech text-xs text-[#FF3300] mb-2 uppercase tracking-widest">Completed: 2024</div>
<h3 className="text-4xl lg:text-6xl text-white font-extrabold uppercase tracking-tight leading-none mb-4">
                    Kyiv Municipal<br/>Library
                </h3>
<div className="flex gap-4">
<span className="text-white text-xs border border-white/30 px-2 py-1 font-tech uppercase">Concrete</span>
<span className="text-white text-xs border border-white/30 px-2 py-1 font-tech uppercase">$120M Budget</span>
</div>
</div>
</div>

<div className="group relative w-full h-[80vh] border-beam-b overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center transition-all duration-0 grayscale group-hover:grayscale-0" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&amp'}}>
</div>
<div className="absolute bottom-0 left-0 w-full lg:w-1/2 p-6 lg:p-10 bg-gradient-to-t from-black to-transparent">
<div className="font-tech text-xs text-[#FF3300] mb-2 uppercase tracking-widest">Completed: 2023</div>
<h3 className="text-4xl lg:text-6xl text-white font-extrabold uppercase tracking-tight leading-none mb-4">
                    Port Authority<br/>Terminal 4
                </h3>
<div className="flex gap-4">
<span className="text-white text-xs border border-white/30 px-2 py-1 font-tech uppercase">Steel</span>
<span className="text-white text-xs border border-white/30 px-2 py-1 font-tech uppercase">$450M Budget</span>
</div>
</div>
</div>
</section>

<section className="w-full border-beam-b">
<div className="p-6 border-beam-b bg-white">
<h2 className="text-2xl font-extrabold uppercase tracking-tight">Architects of Record</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

<div className="relative border-beam-b lg:border-b-0 lg:border-beam-r h-[500px] overflow-hidden group bg-gray-200">
<img alt="Principal" className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#FF3300]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-6">
<div className="font-tech text-white">
<p className="text-2xl font-bold uppercase mb-1">J. VØLK</p>
<p className="text-sm uppercase mb-4">Lead Principal</p>
<div className="text-xs space-y-1 opacity-80 border-t border-white pt-2">
<p>LIC: #9928-XA</p>
<p>EDU: ETH ZÜRICH</p>
<p>EXP: 25 YEARS</p>
</div>
</div>
</div>
</div>

<div className="relative border-beam-b lg:border-b-0 lg:border-beam-r h-[500px] overflow-hidden group bg-gray-200">
<img alt="Partner" className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1888&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#FF3300]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-6">
<div className="font-tech text-white">
<p className="text-2xl font-bold uppercase mb-1">A. ROARK</p>
<p className="text-sm uppercase mb-4">Structural Lead</p>
<div className="text-xs space-y-1 opacity-80 border-t border-white pt-2">
<p>LIC: #1102-ST</p>
<p>EDU: MIT</p>
<p>EXP: 18 YEARS</p>
</div>
</div>
</div>
</div>

<div className="relative h-[500px] overflow-hidden group bg-gray-200">
<img alt="Partner" className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#FF3300]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-6">
<div className="font-tech text-white">
<p className="text-2xl font-bold uppercase mb-1">M. STONE</p>
<p className="text-sm uppercase mb-4">Civil Engineer</p>
<div className="text-xs space-y-1 opacity-80 border-t border-white pt-2">
<p>LIC: #8839-CE</p>
<p>EDU: POLYTECHNIQUE</p>
<p>EXP: 22 YEARS</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-beam-b p-6 lg:p-12">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl font-extrabold uppercase tracking-tight mb-8">Operational Capacity</h2>
<div className="border-t-2 border-black">

<div className="group flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b-2 border-black hover:bg-[#FF3300] hover:text-white transition-colors duration-0 px-2 cursor-pointer">
<div className="font-tech text-xs uppercase w-32 opacity-70 group-hover:opacity-100 group-hover:text-white mb-2 md:mb-0">Spec 01</div>
<div className="flex-1 font-bold uppercase text-lg">Liability Coverage</div>
<div className="font-tech font-bold">$50,000,000 USD</div>
</div>

<div className="group flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b-2 border-black hover:bg-[#FF3300] hover:text-white transition-colors duration-0 px-2 cursor-pointer">
<div className="font-tech text-xs uppercase w-32 opacity-70 group-hover:opacity-100 group-hover:text-white mb-2 md:mb-0">Spec 02</div>
<div className="flex-1 font-bold uppercase text-lg">Certifications</div>
<div className="font-tech font-bold">ISO 9001 / LEED PLATINUM</div>
</div>

<div className="group flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b-2 border-black hover:bg-[#FF3300] hover:text-white transition-colors duration-0 px-2 cursor-pointer">
<div className="font-tech text-xs uppercase w-32 opacity-70 group-hover:opacity-100 group-hover:text-white mb-2 md:mb-0">Spec 03</div>
<div className="flex-1 font-bold uppercase text-lg">Jurisdictions</div>
<div className="font-tech font-bold">EU / UK / US / MENA</div>
</div>

<div className="group flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b-2 border-black hover:bg-[#FF3300] hover:text-white transition-colors duration-0 px-2 cursor-pointer">
<div className="font-tech text-xs uppercase w-32 opacity-70 group-hover:opacity-100 group-hover:text-white mb-2 md:mb-0">Spec 04</div>
<div className="flex-1 font-bold uppercase text-lg">Security Clearance</div>
<div className="font-tech font-bold">LEVEL 5 (FEDERAL)</div>
</div>
</div>
</div>
</section>

<footer className="bg-black text-[#E6E6E6] w-full border-t-2 border-black">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-[#333]">
<h2 className="text-5xl lg:text-7xl font-extrabold uppercase tracking-tight-custom leading-none mb-8">
                    Building for<br/>the next<br/>100 years.
                </h2>
<div className="space-y-4">
<label className="font-tech text-xs uppercase tracking-widest text-gray-400">Procurement Inquiries</label>
<div className="flex border border-[#555]">
<input className="bg-transparent w-full p-4 font-tech text-white outline-none placeholder:text-gray-600 focus:bg-[#1A1A1A]" placeholder="OFFICIAL EMAIL" type="email"/>
<button className="bg-white text-black font-bold uppercase px-8 py-4 hover:bg-[#FF3300] hover:text-white transition-colors duration-0">
                            Submit
                        </button>
</div>
</div>
</div>
<div className="p-8 lg:p-16 flex flex-col justify-between">
<div className="grid grid-cols-2 gap-8 mb-16">
<div>
<h4 className="font-tech text-xs text-gray-400 uppercase mb-4">Headquarters</h4>
<p className="uppercase font-bold text-sm leading-relaxed">
                            Industrial Sector 4<br/>
                            Alexanderplatz 1<br/>
                            10178 Berlin, DE
                        </p>
</div>
<div>
<h4 className="font-tech text-xs text-gray-400 uppercase mb-4">Direct Line</h4>
<p className="uppercase font-bold text-sm leading-relaxed">
                            +49 30 555 0123<br/>
                            TENDER@VOLK.ARCH
                        </p>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-end md:items-center pt-8 border-t border-[#333] font-tech text-[10px] uppercase text-gray-500">
<div>© 2024 VØLK INFRASTRUCTURE. ALL RIGHTS RESERVED.</div>
<div className="mt-2 md:mt-0">DESIGN: BUREAU OF WORKS</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
