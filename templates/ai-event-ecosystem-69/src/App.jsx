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
      

<div className="fixed inset-0 pointer-events-none flex justify-center">
<div className="w-full h-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.3]"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,transparent_0%,#fafafa_100%)]"></div>
</div>

<div className="relative w-full max-w-[1000px] h-[700px] flex items-center justify-center">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0" fill="none" viewbox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="grad-blue" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#3b82f6" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#3b82f6" stop-opacity="0.6"></stop>
</lineargradient>
<lineargradient id="grad-pink" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#f472b6" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#f472b6" stop-opacity="0.6"></stop>
</lineargradient>
<lineargradient id="grad-mixed" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#f472b6" stop-opacity="0.6"></stop>
<stop offset="100%" stop-color="#3b82f6" stop-opacity="0.1"></stop>
</lineargradient>

<marker id="arrow-blue" markerheight="5" markerwidth="5" orient="auto-start-reverse" refx="8" refy="5" viewbox="0 0 10 10">
<path d="M 0 1 L 8 5 L 0 9 z" fill="#3b82f6" opacity="0.6"></path>
</marker>
<marker id="arrow-pink" markerheight="5" markerwidth="5" orient="auto-start-reverse" refx="8" refy="5" viewbox="0 0 10 10">
<path d="M 0 1 L 8 5 L 0 9 z" fill="#f472b6" opacity="0.6"></path>
</marker>
</defs>

<path d="M 500 350 C 600 250 680 200 720 220" fill="none" marker-end="url(#arrow-blue)" stroke="url(#grad-blue)" stroke-dasharray="4 4" strokeLinecap="round" strokeWidth="1.5"></path>

<path d="M 500 350 C 580 450 650 500 700 480" fill="none" marker-end="url(#arrow-pink)" stroke="url(#grad-pink)" stroke-dasharray="4 4" strokeLinecap="round" strokeWidth="1.5"></path>

<path d="M 500 350 C 400 450 280 480 220 450" fill="none" marker-end="url(#arrow-blue)" stroke="url(#grad-mixed)" stroke-dasharray="4 4" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>

<div className="absolute left-[10%] sm:left-[15%] top-[55%] sm:top-[60%] z-20 w-64 bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] border border-zinc-200/60 p-4 transform rotate-3 hover:rotate-0 hover:-translate-y-1 transition-all duration-400 ease-out origin-bottom-left">
<div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-100">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:chat-round-line-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Attendee Query</span>
</div>
<div className="space-y-3">

<div className="flex justify-end">
<div className="bg-zinc-100 text-zinc-700 text-xs px-3 py-2.5 rounded-2xl rounded-tr-sm max-w-[90%] leading-relaxed shadow-sm">
                        Where is the networking lunch?
                    </div>
</div>

<div className="flex gap-2 items-end">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-400 to-pink-400 flex-shrink-0 flex items-center justify-center text-white mb-0.5 shadow-sm">
<iconify-icon className="text-[10px]" icon="solar:stars-linear"></iconify-icon>
</div>
<div className="bg-blue-50/80 border border-blue-100/50 text-zinc-800 text-xs px-3 py-2.5 rounded-2xl rounded-tl-sm leading-relaxed shadow-sm">
                        Lunch is starting now in the <span className="font-medium text-blue-600">Rooftop Garden</span>. I've sent directions to your app.
                    </div>
</div>
</div>
</div>

<div className="absolute right-[10%] sm:right-[15%] top-[65%] sm:top-[60%] z-30 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] border border-zinc-200/60 p-5 transform -rotate-2 hover:rotate-0 hover:-translate-y-1 transition-all duration-400 ease-out origin-bottom-right">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-500 flex items-center justify-center shadow-inner shadow-white">
<iconify-icon className="text-xl" icon="solar:calendar-date-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-zinc-900">Future of AI Panel</h4>
<p className="text-xs text-pink-500 font-medium mt-0.5">2:00 PM - 3:30 PM</p>
</div>
</div>
</div>
<div className="flex items-center justify-between mb-5">
<div className="flex -space-x-2">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-white flex items-center justify-center text-blue-600 font-medium text-[10px] tracking-tighter">JD</div>
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 border-2 border-white flex items-center justify-center text-pink-600 font-medium text-[10px] tracking-tighter">AM</div>
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-zinc-100 to-zinc-200 border-2 border-white flex items-center justify-center text-zinc-600 font-medium text-[10px] tracking-tighter">SK</div>
<div className="w-7 h-7 rounded-full bg-zinc-50 border-2 border-white flex items-center justify-center text-[10px] text-zinc-500 font-medium shadow-sm">+12</div>
</div>

<div className="flex items-center gap-2">
<span className="text-xs text-zinc-400 font-medium">Alert</span>
<button aria-checked="true" className="relative inline-flex h-4 w-7 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-blue-500" role="switch">
<span className="translate-x-3 pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>
</div>
<button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl shadow-[0_4px_12px_rgba(37,99,235,0.2)] transition-colors flex items-center justify-center gap-2 group">
<iconify-icon className="text-lg group-hover:scale-110 transition-transform" icon="solar:calendar-add-linear"></iconify-icon>
                Add to Calendar
            </button>
</div>

<div className="absolute right-[15%] sm:right-[20%] top-[10%] sm:top-[15%] z-20 w-60 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_15px_35px_-10px_rgba(0,0,0,0.06)] border border-zinc-200/60 overflow-hidden transform rotate-2 hover:rotate-0 hover:-translate-y-1 transition-all duration-400 ease-out origin-top-right">
<div className="h-28 bg-zinc-50 relative overflow-hidden border-b border-zinc-100">

<div className="absolute inset-0 opacity-40">
<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M-20,40 Q40,60 100,20 T240,50" fill="none" stroke="#e5e7eb" strokeLinecap="round" strokeWidth="8"></path>
<path d="M20,-10 Q80,80 180,40" fill="none" stroke="#e5e7eb" strokeLinecap="round" strokeWidth="12"></path>
<path d="M120,0 L120,120" fill="none" stroke="#f3f4f6" strokeWidth="20"></path>
</svg>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="relative flex items-center justify-center">
<div className="absolute w-8 h-8 bg-pink-400/20 rounded-full animate-ping"></div>
<div className="bg-white rounded-full p-1.5 shadow-md flex items-center justify-center text-pink-500 relative z-10 border border-pink-50">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="p-4 bg-white">
<div className="flex items-start justify-between gap-3">
<div className="flex-1">
<h4 className="text-sm font-semibold tracking-tight text-zinc-900 truncate">Main Innovation Stage</h4>
<p className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
<iconify-icon className="text-zinc-400" icon="solar:routing-2-linear"></iconify-icon>
                            2 min walk
                        </p>
</div>
</div>
</div>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-80 bg-white rounded-[1.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-zinc-200/80 p-6 flex flex-col items-center gap-5 hover:scale-[1.02] transition-transform duration-500 ease-out">

<div className="relative">
<div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 rounded-full"></div>
<div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center text-white shadow-inner shadow-white/30 relative z-10 transform rotate-3">
<iconify-icon className="text-3xl" icon="solar:stars-linear"></iconify-icon>
</div>

<div className="absolute -top-2 -right-2 w-3 h-3 bg-pink-400 rounded-full shadow-sm border-2 border-white z-20"></div>
<div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-300 rounded-full shadow-sm z-20"></div>
</div>
<div className="text-center w-full">
<h2 className="text-xl font-semibold tracking-tight text-zinc-900">Event Nexus Core</h2>
<p className="text-sm text-zinc-500 mt-1.5">Orchestrating attendee requests</p>
</div>

<div className="w-full bg-zinc-50 rounded-xl p-3 border border-zinc-100">
<div className="flex justify-between items-center text-xs text-zinc-600 font-medium mb-2">
<span className="flex items-center gap-1.5">
<iconify-icon className="text-blue-500" icon="solar:cpu-linear"></iconify-icon>
                        Analyzing Context
                    </span>
<span className="text-zinc-400">82%</span>
</div>
<div className="h-1.5 w-full bg-zinc-200/80 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-blue-500 to-pink-400 w-[82%] rounded-full animate-subtle-pulse relative">
<div className="absolute inset-0 bg-white/20 w-full h-full transform -skew-x-12 translate-x-full animate-[shimmer_2s_infinite]"></div>
</div>
</div>
<div className="mt-3 flex gap-2">
<div className="h-1 w-1/3 bg-blue-500/20 rounded-full"></div>
<div className="h-1 w-1/4 bg-zinc-200 rounded-full"></div>
<div className="h-1 w-1/5 bg-pink-400/20 rounded-full"></div>
</div>
</div>
</div>
</div>

    </>
  );
}
