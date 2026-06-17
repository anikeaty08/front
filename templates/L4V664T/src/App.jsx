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
      
<div className="container mx-auto px-2 py-10">
<h1 className="text-4xl font-black text-center text-white mb-6 tracking-tight">500+ Pure CSS Transform Animations Gallery</h1>
<p className="text-center text-slate-300 mb-8">Hover over a card to see a unique transform effect.<br/>Repeat/rotate these 60+ effects for 500+ items as needed.</p>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-5">


<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="1" className="object-cover w-full h-32 ani01 duration-150 transition-transform" src="https://placehold.co/300x300/1e293b/fff?text=1"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Rotate 360°</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="2" className="object-cover w-full h-32 ani02 duration-150 transition-transform" src="https://placehold.co/300x300/334155/fff?text=2"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Rotate Y</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="3" className="object-cover w-full h-32 ani03 duration-150 transition-transform" src="https://placehold.co/300x300/64748b/fff?text=3"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Rotate X</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="4" className="object-cover w-full h-32 ani04 duration-150 transition-transform" src="https://placehold.co/300x300/1e293b/fff?text=4"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Pulse Scale</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="5" className="object-cover w-full h-32 ani05 duration-150 transition-transform" src="https://placehold.co/300x300/334155/fff?text=5"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Scale Up</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="6" className="object-cover w-full h-32 ani06 duration-150 transition-transform" src="https://placehold.co/300x300/64748b/fff?text=6"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Scale Down</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="7" className="object-cover w-full h-32 ani07 duration-150 transition-transform" src="https://placehold.co/300x300/1e293b/fff?text=7"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Skew X</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="8" className="object-cover w-full h-32 ani08 duration-150 transition-transform" src="https://placehold.co/300x300/334155/fff?text=8"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Skew Y</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="9" className="object-cover w-full h-32 ani09 duration-150 transition-transform" src="https://placehold.co/300x300/64748b/fff?text=9"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Skew Both</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="10" className="object-cover w-full h-32 ani10 duration-150 transition-transform" src="https://placehold.co/300x300/1e293b/fff?text=10"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Translate X</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="11" className="object-cover w-full h-32 ani11 duration-150 transition-transform" src="https://placehold.co/300x300/334155/fff?text=11"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Translate Y</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="12" className="object-cover w-full h-32 ani12 duration-150 transition-transform" src="https://placehold.co/300x300/64748b/fff?text=12"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Flip Y</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="13" className="object-cover w-full h-32 ani13 duration-150 transition-transform" src="https://placehold.co/300x300/1e293b/fff?text=13"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Flip X</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="14" className="object-cover w-full h-32 ani14 duration-150 transition-transform" src="https://placehold.co/300x300/334155/fff?text=14"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Rotate+Scale</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="15" className="object-cover w-full h-32 ani15 duration-150 transition-transform" src="https://placehold.co/300x300/64748b/fff?text=15"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Bounce</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="16" className="object-cover w-full h-32 ani16 duration-150 transition-transform" src="https://placehold.co/300x300/1e293b/fff?text=16"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Shake</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="17" className="object-cover w-full h-32 ani17 duration-150 transition-transform" src="https://placehold.co/300x300/334155/fff?text=17"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Rubber Band</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="18" className="object-cover w-full h-32 ani18 duration-150 transition-transform" src="https://placehold.co/300x300/64748b/fff?text=18"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Jelly</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="19" className="object-cover w-full h-32 ani19 duration-150 transition-transform" src="https://placehold.co/300x300/1e293b/fff?text=19"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Float</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="20" className="object-cover w-full h-32 ani20 duration-150 transition-transform" src="https://placehold.co/300x300/334155/fff?text=20"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Rotate 3D</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="21" className="object-cover w-full h-32 ani21 duration-150 transition-transform" src="https://placehold.co/300x300/64748b/fff?text=21"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Cube Y</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="22" className="object-cover w-full h-32 ani22 duration-150 transition-transform" src="https://placehold.co/300x300/1e293b/fff?text=22"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Rocket</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="23" className="object-cover w-full h-32 ani23 duration-150 transition-transform" src="https://placehold.co/300x300/334155/fff?text=23"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Heart Beat</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="24" className="object-cover w-full h-32 ani24 duration-150 transition-transform" src="https://placehold.co/300x300/64748b/fff?text=24"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Scale+Rotate</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="25" className="object-cover w-full h-32 ani25 duration-150 transition-transform" src="https://placehold.co/300x300/1e293b/fff?text=25"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Perspective Y</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="26" className="object-cover w-full h-32 ani26 duration-150 transition-transform" src="https://placehold.co/300x300/334155/fff?text=26"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Perspective X</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="27" className="object-cover w-full h-32 ani27 duration-150 transition-transform" src="https://placehold.co/300x300/64748b/fff?text=27"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Scale Down+Rotate</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="28" className="object-cover w-full h-32 ani28 duration-150 transition-transform" src="https://placehold.co/300x300/1e293b/fff?text=28"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Rotate -180°</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="29" className="object-cover w-full h-32 ani29 duration-150 transition-transform" src="https://placehold.co/300x300/334155/fff?text=29"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Scale+Skew Y</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="30" className="object-cover w-full h-32 ani30 duration-150 transition-transform" src="https://placehold.co/300x300/64748b/fff?text=30"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Scale+Skew X</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="31" className="object-cover w-full h-32 ani31 duration-150 transition-transform" src="https://placehold.co/300x300/1e293b/fff?text=31"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Rotate+Scale In</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="32" className="object-cover w-full h-32 ani32 duration-150 transition-transform" src="https://placehold.co/300x300/334155/fff?text=32"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Rotate+Scale Out</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="33" className="object-cover w-full h-32 ani33 duration-150 transition-transform" src="https://placehold.co/300x300/64748b/fff?text=33"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Diagonal Move</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="34" className="object-cover w-full h-32 ani34 duration-150 transition-transform" src="https://placehold.co/300x300/1e293b/fff?text=34"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Rotate Y -360°</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="35" className="object-cover w-full h-32 ani35 duration-150 transition-transform" src="https://placehold.co/300x300/334155/fff?text=35"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Rotate X -360°</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="36" className="object-cover w-full h-32 ani36 duration-150 transition-transform" src="https://placehold.co/300x300/64748b/fff?text=36"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Rotate+Scale</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="37" className="object-cover w-full h-32 ani37 duration-150 transition-transform" src="https://placehold.co/300x300/1e293b/fff?text=37"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Scale+Skew X</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="38" className="object-cover w-full h-32 ani38 duration-150 transition-transform" src="https://placehold.co/300x300/334155/fff?text=38"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Scale+Skew Y</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="39" className="object-cover w-full h-32 ani39 duration-150 transition-transform" src="https://placehold.co/300x300/64748b/fff?text=39"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Scale+Skew Both</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="40" className="object-cover w-full h-32 ani40 duration-150 transition-transform" src="https://placehold.co/300x300/1e293b/fff?text=40"/><span className="absolute inset-0 flex items-center justify-center text-white text-base font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Scale+Skew Both</span></div>
<div className="relative group overflow-hidden rounded-xl shadow-lg"><img alt="41" className="object-cover w-full h-32 ani41 duration-150 transition-transform" src="https://placehold.co/300x300/334155/fff?text=41"/></div></div></div>
    </>
  );
}
