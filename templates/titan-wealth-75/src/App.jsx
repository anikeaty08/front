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
      
<div className="flex flex-col lg:flex-row min-h-screen w-full border-b border-gray-200">

<div className="flex flex-col w-full lg:w-1/2 border-r border-gray-100 relative">

<header className="flex lg:px-12 lg:py-8 pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<div className="flex items-center gap-6">

<a className="flex items-center gap-2 group" href="#">
<div className="relative w-10 h-10 rounded-full border border-gray-900 flex items-center justify-center overflow-hidden bg-white">

<svg className="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
<path d="M8.5 8.5v.01"></path>
<path d="M16 16v.01"></path>
<path d="M12 12v.01"></path>
</svg>
</div>
<span className="text-2xl font-serif-display font-semibold tracking-tight text-gray-900">TITAN</span>
</a>

<nav className="hidden md:flex items-center bg-[#F3F4F6] rounded-full px-1.5 py-1.5 ml-4">
<a className="px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-white rounded-full transition-all" href="#">Offerings</a>
<a className="px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-white rounded-full transition-all" href="#">About</a>
<a className="px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-white rounded-full transition-all" href="#">Blog</a>
</nav>
</div>
</header>

<main className="flex-grow flex flex-col lg:px-12 pt-12 pr-6 pb-12 pl-6 justify-center">

<div className="flex items-center gap-3 mb-10 w-fit cursor-pointer group">
<span className="bg-amber-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-sm">NEW</span>
<span className="text-base text-gray-800 font-medium group-hover:text-amber-600 transition-colors flex items-center gap-1">
                        How Titan is helping Big Tech Employees
                        <i className="w-4 h-4 text-gray-400 group-hover:text-amber-600" data-lucide="chevron-right"></i>
</span>
</div>

<h1 className="lg:text-[5.5rem] leading-[1.05] text-5xl font-medium text-gray-900 tracking-tight font-serif-display mb-12" style={{}}>This is the future of website design.</h1>

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
<a className="group bg-gray-900 text-white text-sm font-medium px-8 py-4 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl" href="#">
                        JOIN TITAN
                        <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
<a className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors group" href="#">
                        SEE WHY
                        <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all">
<svg className="ml-0.5" fill="currentColor" height="10" stroke="none" viewbox="0 0 24 24" width="10">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</div>
</a>
</div>
</main>

<footer className="px-6 lg:px-12 pb-12 pt-8">
<div className="flex flex-col gap-8 border-gray-100 border-t pt-8 gap-x-8 gap-y-8 items-start">
<p className="text-lg text-gray-800 max-w-md font-normal leading-relaxed">
                        The modern wealth advisor, <br/>
                        built for the age of acceleration
                    </p>
<div className="w-10 h-6 bg-gray-100 rounded-full flex items-center justify-center mt-2">
<i className="w-3.5 h-3.5 text-gray-500" data-lucide="arrow-down"></i>
</div>
</div>
</footer>
</div>

<div className="flex flex-col w-full lg:w-1/2 relative bg-white">

<header className="flex lg:px-12 lg:py-8 pt-6 pr-6 pb-6 pl-6 gap-x-6 gap-y-6 items-center justify-end">
<a className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors" href="#">Log In</a>
<a className="bg-[#F5F2EF] text-gray-900 text-sm font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition-colors" href="#">
                    Join Titan
                </a>
</header>

<div className="flex-grow flex lg:px-12 overflow-hidden pt-8 pr-6 pb-8 pl-6 relative items-center justify-center">

<div className="relative w-full max-w-lg aspect-square">
<svg className="opacity-90 w-[512px] h-[512px]" data-icon-replaced="true" strokeWidth="2" style={{color: 'rgb(0, 0, 0)', width: '512px', height: '512px'}} viewbox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
<defs>
<filter id="ink" x="0" y="0">
<feturbulence basefrequency="0.8" numoctaves="3" result="noise" type="fractalNoise"></feturbulence>
<fedisplacementmap in="SourceGraphic" in2="noise" scale="2"></fedisplacementmap>
</filter>
</defs>

<g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2">

<path d="M100,350 L100,200 L140,180 L180,200 L180,350"></path>
<path d="M120,350 L120,250 M140,350 L140,220 M160,350 L160,250" strokeWidth="0.5"></path>
<path d="M105,210 L135,210 M105,230 L135,230 M145,210 L175,210 M145,230 L175,230" strokeWidth="0.8"></path>

<path className="" d="M200,350 L200,100 L230,80 L260,100 L260,350"></path>
<line x1="230" x2="230" y1="80" y2="40"></line>
<line strokeWidth="0.5" x1="215" x2="245" y1="120" y2="120"></line>
<line strokeWidth="0.5" x1="215" x2="245" y1="140" y2="140"></line>
<line strokeWidth="0.5" x1="215" x2="245" y1="160" y2="160"></line>
<path d="M210,350 L210,180 M220,350 L220,180 M230,350 L230,100 M240,350 L240,180 M250,350 L250,180" strokeWidth="0.5"></path>

<path d="M280,350 L280,160 L350,140 L350,350"></path>
<path d="M280,180 L350,160 M280,200 L350,180 M280,220 L350,200" strokeWidth="0.8"></path>
<path d="M300,350 L300,230 M330,350 L330,220" strokeWidth="0.5"></path>

<path d="M50,350 Q80,250 110,350 Z" fill="currentColor" fillOpacity="0.1" stroke-dasharray="2 2"></path>
<path d="M320,350 Q360,280 400,350 Z" fill="currentColor" fillOpacity="0.1" stroke-dasharray="2 2"></path>

<path d="M80,120 Q90,100 110,110 Q100,130 80,120" fill="currentColor"></path>
<path d="M80,120 L60,110 L75,125" fill="currentColor"></path>
</g>
</svg>

<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none mix-blend-multiply"></div>
</div>
</div>

<footer className="px-6 lg:px-12 pb-12 pt-8">
<div className="border-t border-gray-100 pt-8">
<div className="grid grid-cols-3 gap-8 mb-4">

<div className="flex flex-col gap-1">
<span className="text-sm text-gray-500 font-normal">Assets Under Management</span>
<span className="text-3xl font-semibold text-gray-900 tracking-tight font-serif-display">$1.1B</span>
</div>

<div className="flex flex-col gap-1 border-l border-gray-100 pl-8 lg:border-none lg:pl-0">
<span className="text-sm text-gray-500 font-normal">All-in Advisory Fee</span>
<span className="text-3xl font-semibold text-gray-900 tracking-tight font-serif-display">0.4%</span>
</div>

<div className="flex flex-col gap-1 border-l border-gray-100 pl-8 lg:border-none lg:pl-0">
<span className="text-sm text-gray-500 font-normal">Awards Won</span>
<span className="text-3xl font-semibold text-gray-900 tracking-tight font-serif-display">10</span>
</div>
</div>
<a className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 transition-colors mt-4" href="#">
<i className="w-3 h-3" data-lucide="info"></i>
                        See Disclosures
                    </a>
</div>
</footer>
</div>
</div>


    </>
  );
}
