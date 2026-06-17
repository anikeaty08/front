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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            strokeWidth: 1.5
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
      
<div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

<div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden flex flex-col relative h-full">

<div className="p-6 pb-5 flex justify-between items-center">
<h2 className="text-xl font-semibold tracking-tight">Video Call · Live visual</h2>
<button className="bg-gray-100 p-2 rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>

<div className="px-6">
<div className="bg-slate-900 rounded-3xl h-56 relative overflow-hidden flex flex-col justify-between p-4 shadow-inner">
<div className="flex justify-between items-start">
<div className="bg-rose-500/20 text-rose-500 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 backdrop-blur-sm border border-rose-500/20">
<div className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse"></div>
                            LIVE
                        </div>
<div className="border border-white/20 rounded-xl p-2 backdrop-blur-sm">
<i className="w-5 h-5 text-white/80" data-lucide="smartphone"></i>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/5">
<i className="w-8 h-8 text-white" data-lucide="headphones"></i>
</div>
</div>
<div className="flex justify-between items-end relative z-10">
<div>
<p className="text-xs font-semibold text-white/60 tracking-wider mb-0.5">DISPATCHER</p>
<p className="text-sm font-medium text-white">Maya · RelyOn HQ</p>
</div>
<div className="bg-slate-800/80 px-2.5 py-1.5 rounded-full text-xs font-medium text-white flex items-center gap-1.5 backdrop-blur-sm">
<i className="w-3 h-3" data-lucide="video"></i>
                            ~4s
                        </div>
</div>
</div>
</div>

<div className="p-6 flex-grow flex flex-col">
<div className="bg-gray-50 rounded-2xl p-5 mb-auto">
<div className="flex items-start gap-4">
<div className="mt-1 bg-white p-2 rounded-full shadow-sm border border-gray-100 shrink-0">
<i className="w-5 h-5 text-gray-700" data-lucide="headphones"></i>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900 mb-2">See and be seen by a real dispatcher.</h3>
<p className="text-base text-gray-500 leading-relaxed">Open a live video line in seconds. They confirm your situation, stay with you on screen and escalate if needed.</p>
</div>
</div>
</div>
</div>

<div className="p-6 pt-0 flex flex-col gap-4">
<button className="w-full bg-[#c84b55] hover:bg-[#b04049] text-white py-4 rounded-2xl text-base font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm">
<i className="w-4 h-4" data-lucide="lock"></i>
                    Unlock Video Call
                </button>
<button className="w-full py-2 text-base font-medium text-gray-500 hover:text-gray-800 transition-colors">
                    Maybe later
                </button>
</div>
</div>

<div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden flex flex-col relative h-full">
<div className="p-6 pb-5 flex justify-between items-center">
<h2 className="text-xl font-semibold tracking-tight">Chat · Silent contact</h2>
<button className="bg-gray-100 p-2 rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="px-6">
<div className="bg-[#f8f9f9] rounded-3xl h-56 relative overflow-hidden flex flex-col p-4 shadow-inner">
<div className="flex flex-col gap-3 h-full justify-start overflow-hidden">
<div className="flex items-end gap-2">
<div className="w-6 h-6 rounded-full bg-[#27825b] text-white flex items-center justify-center text-xs font-medium shrink-0">M</div>
<div className="bg-white border border-gray-100 px-4 py-2.5 rounded-2xl rounded-bl-sm text-sm text-gray-800 shadow-sm max-w-[85%]">
                                Hi — I'm here. Are you safe to type?
                            </div>
</div>
<div className="flex items-end justify-end gap-2">
<div className="bg-[#27825b] text-white px-4 py-2.5 rounded-2xl rounded-br-sm text-sm shadow-sm max-w-[85%]">
                                Stuck in a meeting. Need a check-in in 10.
                            </div>
</div>
<div className="flex items-end gap-2">
<div className="w-6 h-6 rounded-full bg-[#27825b] text-white flex items-center justify-center text-xs font-medium shrink-0">M</div>
<div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm flex gap-1 items-center">
<div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
</div>
</div>
</div>
<div className="absolute bottom-3 left-3 right-3 bg-white rounded-full border border-gray-200 px-4 py-2.5 flex justify-between items-center shadow-sm">
<span className="text-sm text-gray-400">Type silently...</span>
<div className="bg-[#27825b] p-1.5 rounded-full text-white">
<i className="w-3 h-3 translate-x-[-1px] translate-y-[1px]" data-lucide="send"></i>
</div>
</div>
</div>
</div>
<div className="p-6 flex-grow flex flex-col">
<div className="bg-gray-50 rounded-2xl p-5 mb-auto">
<div className="flex items-start gap-4">
<div className="mt-1 bg-white p-2 rounded-full shadow-sm border border-gray-100 shrink-0">
<i className="w-5 h-5 text-gray-700" data-lucide="message-circle"></i>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900 mb-2">When you can't speak out loud.</h3>
<p className="text-base text-gray-500 leading-relaxed">A silent text channel to a real dispatcher. Type one line — they read it instantly and act, day or night.</p>
</div>
</div>
</div>
</div>
<div className="p-6 pt-0 flex flex-col gap-4">
<button className="w-full bg-[#3e936c] hover:bg-[#2e7554] text-white py-4 rounded-2xl text-base font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm">
<i className="w-4 h-4" data-lucide="lock"></i>
                    Unlock Chat
                </button>
<button className="w-full py-2 text-base font-medium text-gray-500 hover:text-gray-800 transition-colors">
                    Maybe later
                </button>
</div>
</div>

<div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden flex flex-col relative h-full">
<div className="p-6 pb-5 flex justify-between items-center">
<h2 className="text-xl font-semibold tracking-tight">Code Word · Discreet alert</h2>
<button className="bg-gray-100 p-2 rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="px-6">
<div className="bg-[#fce9e9] rounded-3xl h-56 relative flex flex-col items-center justify-center p-4 shadow-inner border border-rose-100">
<div className="bg-[#cf4e5b] w-12 h-12 rounded-full flex items-center justify-center text-white mb-4 shadow-md">
<i className="w-6 h-6" data-lucide="mic"></i>
</div>
<div className="bg-white px-6 py-2 rounded-full shadow-sm mb-4 border border-rose-50">
<span className="text-rose-600 font-bold text-lg tracking-wider">"BLUEJAY"</span>
</div>
<p className="text-xs font-semibold text-rose-900/40 tracking-widest mb-3 uppercase">Listening · Only RelyOn hears it</p>
<div className="flex items-end gap-1 h-6">
<div className="w-1 bg-[#cf4e5b]/40 rounded-full h-2"></div>
<div className="w-1 bg-[#cf4e5b]/60 rounded-full h-4"></div>
<div className="w-1 bg-[#cf4e5b] rounded-full h-6"></div>
<div className="w-1 bg-[#cf4e5b]/80 rounded-full h-5"></div>
<div className="w-1 bg-[#cf4e5b]/40 rounded-full h-3"></div>
<div className="w-1 bg-[#cf4e5b] rounded-full h-5"></div>
<div className="w-1 bg-[#cf4e5b]/60 rounded-full h-3"></div>
</div>
</div>
</div>
<div className="p-6 flex-grow flex flex-col">
<div className="bg-gray-50 rounded-2xl p-5 mb-auto">
<div className="flex items-start gap-4">
<div className="mt-1 bg-white p-2 rounded-full shadow-sm border border-gray-100 shrink-0">
<i className="w-5 h-5 text-gray-700" data-lucide="key"></i>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900 mb-2">A duress phrase only we hear.</h3>
<p className="text-base text-gray-500 leading-relaxed">Say your code word in any conversation. RelyOn detects it, escalates silently, and no one around you notices.</p>
</div>
</div>
</div>
</div>
<div className="p-6 pt-0 flex flex-col gap-4">
<button className="w-full bg-[#d64152] hover:bg-[#ba3645] text-white py-4 rounded-2xl text-base font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm">
<i className="w-4 h-4" data-lucide="lock"></i>
                    Unlock Code Word
                </button>
<button className="w-full py-2 text-base font-medium text-gray-500 hover:text-gray-800 transition-colors">
                    Maybe later
                </button>
</div>
</div>

<div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden flex flex-col relative h-full">
<div className="p-6 pb-5 flex justify-between items-center">
<h2 className="text-xl font-semibold tracking-tight">Responder Map · Help is on the way</h2>
<button className="bg-gray-100 p-2 rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="px-6">
<div className="bg-[#eff2ef] rounded-3xl h-56 relative overflow-hidden shadow-inner border border-gray-200/50">

<div className="absolute inset-0 opacity-50">
<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M-50 50 Q 50 20 150 80 T 350 50" fill="none" stroke="white" strokeLinecap="round" strokeWidth="24"></path>
<path d="M80 -50 Q 120 100 80 250" fill="none" stroke="white" strokeLinecap="round" strokeWidth="16"></path>
<path d="M250 -50 Q 200 150 350 200" fill="none" stroke="white" strokeLinecap="round" strokeWidth="20"></path>
</svg>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M 25 70 Q 50 65, 75 35" fill="none" stroke="#ba3645" stroke-dasharray="4 4" strokeLinecap="round" strokeWidth="2"></path>
</svg>

<div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-full shadow-md text-sm font-semibold flex items-center gap-1.5 text-gray-800">
<i className="w-3.5 h-3.5 text-rose-600 fill-rose-600/20" data-lucide="navigation"></i>
                        ETA 3 min · 0.4 mi
                    </div>

<div className="absolute bottom-8 left-16 flex flex-col items-center">
<div className="w-3.5 h-3.5 bg-[#27825b] rounded-full border-2 border-white shadow-sm z-10"></div>
<span className="text-xs font-semibold mt-1 text-gray-800">You</span>
</div>

<div className="absolute top-8 right-8 flex flex-col items-center">
<div className="bg-[#ba3645] text-white p-1.5 rounded-lg shadow-md z-10">
<i className="w-4 h-4" data-lucide="shield"></i>
</div>
<span className="text-xs font-semibold mt-1 text-gray-800">Responder</span>
</div>
</div>
</div>
<div className="p-6 flex-grow flex flex-col">
<div className="bg-gray-50 rounded-2xl p-5 mb-auto">
<div className="flex items-start gap-4">
<div className="mt-1 bg-white p-2 rounded-full shadow-sm border border-gray-100 shrink-0">
<i className="w-5 h-5 text-gray-700" data-lucide="map-pin"></i>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900 mb-2">A verified responder, dispatched to you.</h3>
<p className="text-base text-gray-500 leading-relaxed">See the closest ground responder on a live map. Real ETA, real person, until they reach you safely.</p>
</div>
</div>
</div>
</div>
<div className="p-6 pt-0 flex flex-col gap-4">
<button className="w-full bg-[#d64152] hover:bg-[#ba3645] text-white py-4 rounded-2xl text-base font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm">
<i className="w-4 h-4" data-lucide="lock"></i>
                    Unlock Responder Map
                </button>
<button className="w-full py-2 text-base font-medium text-gray-500 hover:text-gray-800 transition-colors">
                    Maybe later
                </button>
</div>
</div>
</div>




    </>
  );
}
