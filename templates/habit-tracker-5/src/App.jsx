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
      

<main className="w-full max-w-md bg-[#F8F9FB] relative pb-32 min-h-screen overflow-x-hidden shadow-[0_0_40px_rgba(0,0,0,0.05)] sm:border-x sm:border-slate-100">

<header className="flex justify-between items-center w-full px-6 pt-12 pb-6">
<div className="flex items-baseline gap-2">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Today,</h1>
<h2 className="text-2xl font-medium tracking-tight text-slate-500">Feb 22</h2>
</div>
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-50">
<iconify-icon className="text-2xl text-amber-400" icon="solar:crown-linear" strokeWidth="1.5"></iconify-icon>
</div>
</header>

<div className="w-full px-6 mb-10">
<div className="bg-white rounded-full p-1.5 flex justify-between items-center shadow-sm border border-slate-50">
<button className="bg-[#2C2C2E] text-white text-sm font-semibold h-11 px-6 rounded-full transition-transform active:scale-95">Morning</button>
<button className="text-slate-400 text-sm font-medium h-11 px-4 rounded-full hover:text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer">Afternoon</button>
<button className="text-slate-400 text-sm font-medium h-11 px-4 rounded-full hover:text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer">Evening</button>
<button className="text-slate-400 text-sm font-medium h-11 px-4 rounded-full hover:text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer">Night</button>
</div>
</div>

<div className="flex justify-center mb-10">
<svg fill="none" height="140" viewbox="0 0 150 140" width="150" xmlns="http://www.w3.org/2000/svg">

<circle cx="50" cy="40" fill="#B2ADF4" r="18"></circle>
<circle cx="100" cy="40" fill="#B2ADF4" r="18"></circle>

<rect fill="#B2ADF4" height="85" rx="42" width="110" x="20" y="45"></rect>
<rect fill="#B2ADF4" height="15" width="80" x="35" y="115"></rect>

<circle cx="50" cy="68" fill="#312F44" r="14"></circle>
<circle cx="54" cy="63" fill="#FFFFFF" r="3.5"></circle>
<circle cx="100" cy="68" fill="#312F44" r="14"></circle>
<circle cx="104" cy="63" fill="#FFFFFF" r="3.5"></circle>

<line stroke="#D2CFFE" strokeLinecap="round" strokeWidth="2.5" x1="38" x2="43" y1="84" y2="89"></line>
<line stroke="#D2CFFE" strokeLinecap="round" strokeWidth="2.5" x1="44" x2="49" y1="84" y2="89"></line>
<line stroke="#D2CFFE" strokeLinecap="round" strokeWidth="2.5" x1="50" x2="55" y1="84" y2="89"></line>
<line stroke="#D2CFFE" strokeLinecap="round" strokeWidth="2.5" x1="95" x2="100" y1="89" y2="84"></line>
<line stroke="#D2CFFE" strokeLinecap="round" strokeWidth="2.5" x1="101" x2="106" y1="89" y2="84"></line>
<line stroke="#D2CFFE" strokeLinecap="round" strokeWidth="2.5" x1="107" x2="112" y1="89" y2="84"></line>

<path d="M66 92 Q75 102 84 92" fill="none" stroke="#312F44" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
</div>

<div className="w-full px-6 flex flex-col gap-4">

<div className="bg-white rounded-3xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-50 flex flex-col gap-5 relative overflow-hidden group">
<div className="flex justify-between items-start">
<div className="flex flex-col gap-1">
<h3 className="text-base font-semibold text-slate-800 tracking-tight">Meditate</h3>
<p className="text-sm text-slate-500 font-medium">Not done</p>
</div>

<div className="w-12 h-12 -mt-1 -mr-1 flex items-center justify-center cursor-pointer">

<button className="w-9 h-9 bg-slate-50 hover:bg-[#B2ADF4]/10 rounded-full flex items-center justify-center shadow-sm border border-slate-100 text-slate-400 hover:text-[#B2ADF4] transition-colors cursor-pointer">
<iconify-icon className="text-lg" icon="solar:check-circle-linear" strokeWidth="2"></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col gap-2 mt-auto">
<div className="flex justify-between items-center">
<span className="text-xs font-medium text-slate-400">Progress</span>
<span className="text-xs font-semibold text-slate-500">42%</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-[#B2ADF4] rounded-full w-[42%]"></div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-50 flex flex-col gap-5 relative overflow-hidden group">
<div className="flex justify-between items-start">
<div className="flex flex-col gap-1">
<h3 className="text-base font-semibold text-slate-800 tracking-tight">Deep Work</h3>
<p className="text-sm text-slate-500 font-medium">25 min</p>
</div>
<div className="w-12 h-12 -mt-1 -mr-1 flex items-center justify-center cursor-pointer">
<button className="w-9 h-9 bg-slate-50 hover:bg-[#84C5F4]/10 rounded-full flex items-center justify-center shadow-sm border border-slate-100 text-slate-400 hover:text-[#84C5F4] transition-colors cursor-pointer">
<iconify-icon className="text-lg translate-x-[1px]" icon="solar:play-linear" strokeWidth="2"></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col gap-2 mt-auto">
<div className="flex justify-between items-center">
<span className="text-xs font-medium text-slate-400">Progress</span>
<span className="text-xs font-semibold text-slate-500">60%</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-[#84C5F4] rounded-full w-[60%]"></div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-50 flex flex-col gap-5 relative overflow-hidden group">
<div className="flex justify-between items-start">
<div className="flex flex-col gap-1">
<h3 className="text-base font-semibold text-slate-800 tracking-tight">Drink Water</h3>
<p className="text-sm text-slate-500 font-medium">2 / 5 today</p>
</div>
<div className="w-12 h-12 -mt-1 -mr-1 flex items-center justify-center cursor-pointer">
<button className="w-9 h-9 bg-slate-50 hover:bg-[#F4A261]/10 rounded-full flex items-center justify-center shadow-sm border border-slate-100 text-slate-400 hover:text-[#F4A261] transition-colors cursor-pointer">
<iconify-icon className="text-xl" icon="solar:add-linear" strokeWidth="2"></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col gap-2 mt-auto">
<div className="flex justify-between items-center">
<span className="text-xs font-medium text-slate-400">Progress</span>
<span className="text-xs font-semibold text-slate-500">40%</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-[#F4A261] rounded-full w-[40%]"></div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-50 flex flex-col gap-5 relative overflow-hidden group">
<div className="flex justify-between items-start">
<div className="flex flex-col gap-1">
<h3 className="text-base font-semibold text-slate-800 tracking-tight">Morning Routine</h3>
<p className="text-sm text-slate-500 font-medium">3 / 5 done</p>
</div>
<div className="w-12 h-12 -mt-1 -mr-1 flex items-center justify-center cursor-pointer">
<button className="w-9 h-9 bg-slate-50 hover:bg-[#FF96B4]/10 rounded-full flex items-center justify-center shadow-sm border border-slate-100 text-slate-400 hover:text-[#FF96B4] transition-colors cursor-pointer">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear" strokeWidth="2"></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col gap-2 mt-auto">
<div className="flex justify-between items-center">
<span className="text-xs font-medium text-slate-400">Progress</span>
<span className="text-xs font-semibold text-slate-500">60%</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-[#FF96B4] rounded-full w-[60%]"></div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-[#34D399]/10 flex flex-col gap-5 relative overflow-hidden">

<div className="absolute -right-10 -top-10 w-32 h-32 bg-[#34D399]/10 rounded-full blur-2xl pointer-events-none"></div>
<div className="flex justify-between items-start relative z-10">
<div className="flex flex-col gap-1">
<h3 className="text-base font-semibold text-slate-800 tracking-tight">Reading</h3>
<p className="text-sm text-slate-500 font-medium">Maintained</p>
</div>
<div className="w-12 h-12 -mt-1 -mr-1 flex items-center justify-center cursor-pointer relative z-10">
<button className="w-9 h-9 bg-[#34D399]/10 rounded-full flex items-center justify-center shadow-sm border border-[#34D399]/20 text-[#34D399] transition-colors cursor-pointer">
<iconify-icon className="text-xl" icon="solar:check-circle-linear" strokeWidth="2"></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col gap-2 mt-auto relative z-10">
<div className="flex justify-between items-center">
<span className="text-xs font-medium text-slate-400">Health</span>
<span className="text-xs font-semibold text-[#34D399]">92%</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-[#34D399] rounded-full w-[92%]"></div>
</div>
</div>
</div>
</div>

<nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white rounded-t-[36px] px-8 py-5 flex justify-between items-center shadow-[0_-8px_30px_rgba(0,0,0,0.03)] border-t border-slate-50 z-50">
<button className="text-slate-800 p-2 hover:bg-slate-50 rounded-full transition-colors cursor-pointer">
<iconify-icon className="text-3xl" icon="solar:home-2-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-[60px] h-[60px] bg-[#B2ADF4] rounded-full flex items-center justify-center text-white shadow-[0_8px_20px_rgba(178,173,244,0.3)] hover:bg-[#A39EED] transition-colors transform hover:scale-105 active:scale-95 absolute left-1/2 -translate-x-1/2 -top-4 border-[6px] border-[#F8F9FB] cursor-pointer">
<iconify-icon className="text-3xl" icon="solar:add-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="text-slate-300 p-2 hover:bg-slate-50 hover:text-slate-400 rounded-full transition-colors cursor-pointer">
<iconify-icon className="text-3xl" icon="solar:widget-5-linear" strokeWidth="1.5"></iconify-icon>
</button>
</nav>
</main>

    </>
  );
}
