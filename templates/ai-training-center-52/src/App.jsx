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
      

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-slate-50 to-blue-50/30 pointer-events-none -z-10"></div>

<main className="flex-grow flex flex-col items-center justify-center w-full max-w-7xl px-4 py-12 relative z-10">

<div className="relative w-full max-w-lg aspect-square flex items-center justify-center mb-10">

<div className="absolute inset-0 bg-blue-900/5 blur-3xl rounded-full"></div>
<svg className="w-full h-full drop-shadow-2xl" fill="none" viewbox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">

<g className="origin-center animate-spin-slow opacity-70">
<path d="M300 50 L450 150 L500 300 L450 450 L300 550 L150 450 L100 300 L150 150 Z" stroke="url(#lineGradient)" strokeWidth="0.5"></path>
<path d="M300 50 L150 150 M450 150 L300 50 M500 300 L450 150 M450 450 L500 300 M300 550 L450 450 M150 450 L300 550 M100 300 L150 450 M150 150 L100 300" stroke="url(#lineGradient)" stroke-dasharray="4 4" strokeWidth="0.5"></path>

<circle className="fill-blue-900" cx="300" cy="50" r="3"></circle>
<circle className="fill-red-700" cx="450" cy="150" r="3"></circle>
<circle className="fill-blue-800" cx="500" cy="300" r="3"></circle>
<circle className="fill-blue-900" cx="450" cy="450" r="3"></circle>
<circle className="fill-red-700" cx="300" cy="550" r="3"></circle>
<circle className="fill-blue-800" cx="150" cy="450" r="3"></circle>
<circle className="fill-blue-900" cx="100" cy="300" r="3"></circle>
<circle className="fill-red-700" cx="150" cy="150" r="3"></circle>
</g>

<g className="origin-center animate-spin-reverse">
<path d="M300 120 L400 220 L400 380 L300 480 L200 380 L200 220 Z" stroke="url(#lineGradient2)" strokeWidth="0.8"></path>
<path d="M300 120 L300 220 M400 220 L300 300 M400 380 L300 300 M300 480 L300 380 M200 380 L300 300 M200 220 L300 300" stroke="#1e3a8a" stroke-opacity="0.2" strokeWidth="0.5"></path>

<circle className="fill-red-600" cx="300" cy="120" r="3.5"></circle>
<circle className="fill-red-600" cx="300" cy="480" r="3.5"></circle>
<circle className="fill-blue-400" cx="400" cy="220" r="2.5"></circle>
<circle className="fill-blue-400" cx="400" cy="380" r="2.5"></circle>
<circle className="fill-blue-400" cx="200" cy="380" r="2.5"></circle>
<circle className="fill-blue-400" cx="200" cy="220" r="2.5"></circle>
</g>

<g className="animate-pulse-subtle">

<path d="M300 180 L403 240 V360 L300 420 L197 360 V240 Z" fill="url(#hexGradient)" stroke="url(#hexBorder)" strokeWidth="1.5"></path>
</g>

<defs>

<lineargradient id="facetDarkBlue" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#0f172a"></stop> 
<stop offset="100%" stop-color="#1e40af"></stop> 
</lineargradient>
<lineargradient id="facetMedBlue" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#3b82f6"></stop> 
<stop offset="100%" stop-color="#1e3a8a"></stop> 
</lineargradient>
<lineargradient id="facetDarkRed" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#4c1d95"></stop> 
<stop offset="100%" stop-color="#991b1b"></stop> 
</lineargradient>
<lineargradient id="facetBrightRed" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#dc2626"></stop> 
<stop offset="100%" stop-color="#f87171"></stop> 
</lineargradient>
<lineargradient id="arrowLeftGrad" x1="0" x2="1" y1="1" y2="0">
<stop offset="0%" stop-color="#1e3a8a"></stop>
<stop offset="100%" stop-color="#60a5fa"></stop>
</lineargradient>
<lineargradient id="arrowRightGrad" x1="0" x2="1" y1="1" y2="0">
<stop offset="0%" stop-color="#7f1d1d"></stop>
<stop offset="100%" stop-color="#f87171"></stop>
</lineargradient>

<lineargradient id="lineGradient" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#1e3a8a" stop-opacity="0.1"></stop>
<stop offset="50%" stop-color="#dc2626" stop-opacity="0.4"></stop>
<stop offset="100%" stop-color="#1e3a8a" stop-opacity="0.1"></stop>
</lineargradient>
<lineargradient id="lineGradient2" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#93c5fd" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#2563eb" stop-opacity="0.5"></stop>
</lineargradient>
<lineargradient gradientunits="userSpaceOnUse" id="hexGradient" x1="197" x2="403" y1="180" y2="420">
<stop offset="0%" stop-color="#0f172a"></stop>
<stop offset="50%" stop-color="#1e3a8a"></stop>
<stop offset="100%" stop-color="#7f1d1d"></stop>
</lineargradient>
<lineargradient gradientunits="userSpaceOnUse" id="hexBorder" x1="197" x2="403" y1="180" y2="420">
<stop offset="0%" stop-color="#3b82f6"></stop>
<stop offset="50%" stop-color="#1e3a8a"></stop>
<stop offset="100%" stop-color="#dc2626"></stop>
</lineargradient>
</defs>
</svg>
</div>

<div className="text-center z-20 mb-14">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-5 uppercase leading-none">
                Centre d’Innovation en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-red-600">IA</span>
</h1>
<div className="flex items-center justify-center gap-3 text-xs md:text-sm font-medium tracking-[0.2em] text-slate-500 uppercase">
<span>Qualiopi</span>
<span className="text-slate-300">|</span>
<span>Opco</span>
<span className="text-slate-300">|</span>
<span>CFA Certifié</span>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center">

<button className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 font-medium text-sm tracking-wide transition-all duration-300 hover:border-blue-200 hover:shadow-sm">
                DÉCOUVRIR NOS FORMATIONS
            </button>

<div className="w-full sm:w-auto p-[1.5px] rounded-full bg-gradient-to-r from-blue-900 via-red-600 to-blue-900 shadow-lg shadow-blue-100 group transition-transform duration-300 hover:scale-[1.02]">
<button className="w-full h-full px-8 py-3.5 rounded-full bg-slate-50 group-hover:bg-white text-slate-800 font-semibold text-sm tracking-wide transition-colors duration-200 flex items-center justify-center gap-2">
<span>INSCRIPTION RAPIDE</span>
<i className="w-4 h-4 text-red-600" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</main>

<footer className="w-full pb-10 pt-4 flex flex-col items-center justify-center relative z-10">
<p className="text-xs font-medium tracking-widest text-slate-400 uppercase mb-4">
            L’intelligence artificielle au cœur de tous les métiers
        </p>

<svg className="opacity-40" fill="none" height="20" viewbox="0 0 400 20" width="400">
<path d="M0 10 Q 200 25 400 10" fill="none" stroke="url(#curveGradient)" strokeWidth="1"></path>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="curveGradient" x1="0" x2="400" y1="0" y2="0">
<stop offset="0%" stop-color="white" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#dc2626"></stop>
<stop offset="100%" stop-color="white" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
</footer>


    </>
  );
}
