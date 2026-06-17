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
      

<section className="absolute inset-x-0 top-0 h-[55%] z-0 bg-slate-100 overflow-hidden">

<nav className="absolute top-0 w-full z-20 px-5 pt-12 pb-4 flex justify-between items-start pointer-events-none">

<button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200/60 shadow-lg shadow-slate-200/50 flex items-center justify-center pointer-events-auto active:scale-95 transition-transform">
<span className="iconify text-slate-600" data-icon="lucide:menu" data-width="20"></span>
</button>

<div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-200/60 shadow-lg shadow-slate-200/50 pointer-events-auto">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-mono font-medium text-slate-600">RIYADH</span>
</div>
</nav>

<div className="w-full h-full relative">
<svg height="100%" preserveaspectratio="xMidYMid slice" viewbox="0 0 400 600" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="routeGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#10b981', stopOpacity: '0'}}></stop>
<stop offset="20%" style={{stopColor: '#10b981', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#059669', stopOpacity: '1'}}></stop>
</lineargradient>
<filter id="shadow">
<fedropshadow dx="0" dy="2" flood-color="#000" flood-opacity="0.1" stddeviation="2"></fedropshadow>
</filter>
</defs>

<rect fill="#f1f5f9" height="100%" width="100%"></rect>

<path d="M-50,400 Q100,380 150,500 T300,600 L-50,650 Z" fill="#dcfce7"></path>
<path d="M250,-50 Q300,100 450,50 L450,-50 Z" fill="#dcfce7"></path>

<g fill="#ffffff">
<rect height="120" rx="4" width="100" x="20" y="20"></rect>
<rect height="150" rx="4" width="80" x="140" y="-10"></rect>
<rect height="80" rx="4" width="150" x="240" y="20"></rect>
<rect height="180" rx="4" width="80" x="20" y="160"></rect>
<rect height="120" rx="4" width="120" x="120" y="160"></rect>
<rect height="180" rx="4" width="140" x="260" y="120"></rect>
<rect height="100" rx="4" width="280" x="120" y="300"></rect>
</g>

<g fill="none" stroke="#cbd5e1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="14">
<path d="M80,-20 L80,700"></path>
<path d="M250,-20 L250,700"></path>
<path d="M-20,130 L450,130"></path>
<path d="M-20,420 L450,420"></path>
</g>

<g fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10">
<path d="M80,-20 L80,700"></path>
<path d="M250,-20 L250,700"></path>
<path d="M-20,130 L450,130"></path>
<path d="M-20,420 L450,420"></path>
</g>

<path className="path-animation" d="M250,80 L250,380 Q250,420 220,420 L160,420" fill="none" stroke="url(#routeGradient)" stroke-dasharray="10 5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path>

<g transform="translate(250, 260)">
<circle cx="0" cy="0" fill="#ffffff" filter="url(#shadow)" r="14"></circle>
<path d="M-5,4 L0,-6 L5,4" fill="#10b981"></path>
</g>

<g transform="translate(160, 420)">
<circle className="pulse-ring" cx="0" cy="0" fill="#10b981" opacity="0.3" r="12"></circle>
<circle cx="0" cy="0" fill="#ffffff" r="5" stroke="#10b981" strokeWidth="2.5"></circle>
<rect fill="#1e293b" height="16" rx="4" width="32" x="-16" y="-30"></rect>
<text fill="white" fontFamily="Inter" fontSize="8" font-weight="600" text-anchor="middle" x="0" y="-19">3 MIN</text>
<path d="M0,-14 L0,-6" stroke="#1e293b" strokeWidth="2"></path>
</g>

<text fill="#94a3b8" fontFamily="Inter" fontSize="8" font-weight="600" transform="rotate(-90 90,300)" x="90" y="300">KING FAHD RD</text>
</svg>
</div>

<div className="absolute bottom-6 right-5 flex flex-col gap-3 z-10">
<button className="w-10 h-10 rounded-xl bg-white text-slate-600 shadow-xl shadow-slate-200/50 flex items-center justify-center active:scale-95 transition-transform border border-slate-100">
<span className="iconify" data-icon="lucide:crosshair" data-width="18"></span>
</button>
</div>
</section>

<section className="absolute bottom-0 inset-x-0 h-[50%] z-20 bg-white rounded-t-[2rem] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden">

<div className="w-full flex justify-center pt-3 pb-2 flex-shrink-0">
<div className="w-12 h-1 rounded-full bg-slate-200"></div>
</div>

<div className="flex-1 overflow-y-auto px-6 pb-8 pt-2 no-scrollbar">

<div className="flex justify-between items-center mb-6 animate-fade-in" style={{animationDelay: '0.05s'}}>
<div>
<h2 className="text-sm font-medium text-slate-500 uppercase tracking-wide">Good Morning</h2>
<h1 className="text-2xl font-serif font-semibold text-slate-900 tracking-tight mt-0.5">Where to, Faisal?</h1>
</div>
<div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">
<span className="iconify" data-icon="lucide:user" data-width="20"></span>
</div>
</div>

<div className="relative group mb-6 animate-fade-in" style={{animationDelay: '0.1s'}}>
<div className="relative bg-slate-50 ring-1 ring-slate-200 rounded-xl p-1 flex items-center transition-all focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:bg-white focus-within:shadow-lg focus-within:shadow-emerald-500/5">
<div className="pl-3 pr-2 text-emerald-600">
<span className="iconify" data-icon="lucide:map-pin" data-width="18"></span>
</div>
<input className="w-full bg-transparent border-none outline-none text-slate-900 placeholder-slate-400 py-3.5 text-sm font-medium" type="text" value="Kingdom Centre"/>
<div className="pr-1.5">
<button className="bg-white hover:bg-slate-50 text-slate-500 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors border border-slate-200 shadow-sm">
                            Clear
                        </button>
</div>
</div>

<div className="absolute -left-3 top-1/2 -translate-y-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent hidden"></div>
</div>

<div className="space-y-3 mb-6 animate-fade-in" style={{animationDelay: '0.15s'}}>
<div className="flex justify-between items-end px-1">
<span className="text-xs font-semibold text-slate-900">Choose Ride</span>
<span className="text-[10px] text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded-full">Economy Available</span>
</div>
<div className="grid grid-cols-1 gap-3">

<label className="relative flex items-center justify-between p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-50/30 cursor-pointer transition-all active:scale-[0.99] group">
<input checked="" className="peer sr-only" name="ride" type="radio"/>
<div className="flex items-center gap-4">

<div className="w-12 h-12 rounded-lg bg-white border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm relative overflow-hidden">
<div className="absolute inset-0 bg-emerald-100/50 transform rotate-45 translate-y-4"></div>
<span className="iconify relative z-10" data-icon="lucide:zap" data-width="20"></span>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Darb Electric</h3>
<div className="flex items-center gap-2 mt-0.5">
<span className="text-[10px] text-slate-500">4 min away</span>
<span className="w-0.5 h-0.5 rounded-full bg-slate-300"></span>
<span className="text-[10px] text-slate-500">Lucid Air</span>
</div>
</div>
</div>
<div className="text-right">
<p className="text-sm font-bold text-slate-900">SAR 45</p>
<p className="text-[10px] text-slate-400 line-through">SAR 52</p>
</div>

<div className="absolute inset-0 rounded-xl ring-2 ring-emerald-500 opacity-100 transition-opacity pointer-events-none"></div>

<div className="absolute -top-1 -right-1 bg-emerald-500 text-white w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
<span className="iconify" data-icon="lucide:check" data-width="10"></span>
</div>
</label>

<label className="relative flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 cursor-pointer transition-all active:scale-[0.99]">
<input className="peer sr-only" name="ride" type="radio"/>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">
<span className="iconify" data-icon="lucide:car-front" data-width="20"></span>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-700">Premium</h3>
<div className="flex items-center gap-2 mt-0.5">
<span className="text-[10px] text-slate-500">8 min away</span>
<span className="w-0.5 h-0.5 rounded-full bg-slate-300"></span>
<span className="text-[10px] text-slate-500">BMW 7</span>
</div>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-slate-600">SAR 65</p>
</div>
<div className="absolute inset-0 rounded-xl ring-2 ring-emerald-500 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"></div>
</label>
</div>
</div>

<div className="flex items-center justify-between py-3 mb-6 border-t border-b border-slate-100 animate-fade-in" style={{animationDelay: '0.2s'}}>
<div className="flex items-center gap-3">
<div className="bg-slate-900 text-white p-1 rounded">
<span className="iconify" data-icon="lucide:credit-card" data-width="12"></span>
</div>
<span className="text-xs font-medium text-slate-600">Apple Pay •••• 4242</span>
</div>
<button className="text-[10px] font-semibold text-emerald-600 hover:text-emerald-700">CHANGE</button>
</div>

<button className="w-full group relative overflow-hidden rounded-xl bg-emerald-600 py-4 shadow-lg shadow-emerald-600/20 active:scale-[0.98] transition-all animate-fade-in" style={{animationDelay: '0.25s'}}>
<span className="relative z-10 flex items-center justify-center gap-2 text-white font-semibold text-sm tracking-wide">
                    Confirm Ride
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="18"></span>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
</button>
</div>
</section>

    </>
  );
}
