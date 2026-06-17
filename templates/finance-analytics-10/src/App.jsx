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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
orange: {
50: '#fffaf5',
100: '#ffefe0',
200: '#ffdbba',
300: '#ffc08a',
400: '#ff9d52',
500: '#f97316',
600: '#ea580c',
700: '#c2410c',
800: '#9a3412',
900: '#7c2d12',
}
}
}
}
}



        // Simple animation keyframes injected via JS since we can't use external CSS
        const styleSheet = document.createElement("style");
        styleSheet.innerText = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(styleSheet);
    
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
      

<aside className="w-full md:w-[340px] flex-shrink-0 flex flex-col border-r border-orange-100 bg-white/60 h-full relative z-20 shadow-[4px_0_24px_-12px_rgba(249,115,22,0.05)]">

<div className="px-6 py-5 flex items-center justify-between bg-white/80 backdrop-blur-sm sticky top-0 z-10 border-b border-orange-50">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-sm shadow-orange-200">
<span className="iconify text-white" data-icon="lucide:search" data-strokeWidth="2.5" data-width="14"></span>
</div>
<h1 className="text-sm font-semibold tracking-tight text-slate-900 uppercase">SearchLeads</h1>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-4">

<div className="group bg-orange-50/50 hover:bg-orange-50 border border-orange-100 rounded-xl overflow-hidden transition-all duration-200 shadow-sm shadow-orange-100/50">
<button className="w-full px-4 py-3 flex items-center justify-between text-left focus:outline-none">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded-md bg-white border border-orange-100 text-orange-500 shadow-sm">
<span className="iconify" data-icon="lucide:user" data-width="16"></span>
</div>
<span className="text-sm font-medium text-slate-800">Contact Profile</span>
</div>
<span className="iconify text-orange-300 group-hover:text-orange-500 transition-colors" data-icon="lucide:chevron-down" data-width="16"></span>
</button>
<div className="px-4 pb-4 pt-1 space-y-4">

<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Job Titles</label>
<div className="relative group/input">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-300 group-focus-within/input:text-orange-500 transition-colors">
<span className="iconify" data-icon="lucide:search" data-width="14"></span>
</span>
<input className="w-full pl-9 pr-3 py-2 bg-white border border-orange-100 rounded-lg text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 transition-all text-slate-700" placeholder="e.g. CEO, Marketing Manager" type="text"/>
</div>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between group/check cursor-pointer">
<label className="flex items-center gap-2 cursor-pointer select-none">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 rounded border border-orange-200 bg-white peer-checked:bg-orange-500 peer-checked:border-orange-500 flex items-center justify-center transition-all shadow-sm">
<span className="iconify text-white opacity-0 peer-checked:opacity-100" data-icon="lucide:check" data-strokeWidth="3" data-width="10"></span>
</div>
<span className="text-xs text-slate-600 font-medium">Has Verified Email</span>
</label>
<span className="text-[10px] text-orange-400 font-medium bg-orange-100/50 px-1.5 py-0.5 rounded">85%</span>
</div>
<div className="flex items-center justify-between group/check cursor-pointer">
<label className="flex items-center gap-2 cursor-pointer select-none">
<input className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 rounded border border-orange-200 bg-white peer-checked:bg-orange-500 peer-checked:border-orange-500 flex items-center justify-center transition-all shadow-sm">
<span className="iconify text-white opacity-0 peer-checked:opacity-100" data-icon="lucide:check" data-strokeWidth="3" data-width="10"></span>
</div>
<span className="text-xs text-slate-600 font-medium">Has Phone Number</span>
</label>
</div>
</div>
</div>
</div>

<div className="group bg-orange-50/50 hover:bg-orange-50 border border-orange-100 rounded-xl overflow-hidden transition-all duration-200 shadow-sm shadow-orange-100/50">
<button className="w-full px-4 py-3 flex items-center justify-between text-left focus:outline-none">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded-md bg-white border border-orange-100 text-orange-500 shadow-sm">
<span className="iconify" data-icon="lucide:building-2" data-width="16"></span>
</div>
<span className="text-sm font-medium text-slate-800">Company Profile</span>
</div>
<div className="flex items-center gap-2">
<span className="flex items-center justify-center w-5 h-5 bg-orange-100 text-orange-600 rounded-full text-[10px] font-bold">2</span>
<span className="iconify text-orange-300 group-hover:text-orange-500 transition-colors" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</button>
<div className="px-4 pb-4 pt-1 space-y-4">

<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Industry</label>
<div className="relative">
<select className="w-full pl-3 pr-8 py-2 appearance-none bg-white border border-orange-100 rounded-lg text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300">
<option>SaaS</option>
<option>Fintech</option>
<option>Healthcare</option>
<option>E-commerce</option>
</select>
<span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-orange-400 pointer-events-none">
<span className="iconify" data-icon="lucide:chevrons-up-down" data-width="12"></span>
</span>
</div>
</div>

<div className="space-y-3">
<div className="flex justify-between items-center">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Founded Year</label>
<button className="text-[10px] text-orange-500 hover:text-orange-700 font-medium">Clear</button>
</div>
<div className="flex items-center gap-2">
<input className="w-full bg-white border border-orange-100 rounded-lg py-1.5 px-2 text-xs text-center text-slate-700 focus:ring-1 focus:ring-orange-200 outline-none" type="number" value="2015"/>
<span className="text-slate-400 text-xs">-</span>
<input className="w-full bg-white border border-orange-100 rounded-lg py-1.5 px-2 text-xs text-center text-slate-700 focus:ring-1 focus:ring-orange-200 outline-none" type="number" value="2024"/>
</div>
<input className="w-full accent-orange-500 h-1" max="2024" min="2000" type="range"/>
</div>
</div>
</div>

<div className="group bg-orange-50/50 hover:bg-orange-50 border border-orange-100 rounded-xl overflow-hidden transition-all duration-200 shadow-sm shadow-orange-100/50">
<button className="w-full px-4 py-3 flex items-center justify-between text-left focus:outline-none">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded-md bg-white border border-orange-100 text-orange-500 shadow-sm">
<span className="iconify" data-icon="lucide:bar-chart-3" data-width="16"></span>
</div>
<span className="text-sm font-medium text-slate-800">Size &amp; Growth</span>
</div>
<span className="iconify text-orange-300 group-hover:text-orange-500 transition-colors" data-icon="lucide:chevron-right" data-width="16"></span>
</button>
</div>

<div className="group bg-orange-50/50 hover:bg-orange-50 border border-orange-100 rounded-xl overflow-hidden transition-all duration-200 shadow-sm shadow-orange-100/50">
<button className="w-full px-4 py-3 flex items-center justify-between text-left focus:outline-none">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded-md bg-white border border-orange-100 text-orange-500 shadow-sm">
<span className="iconify" data-icon="lucide:map-pin" data-width="16"></span>
</div>
<span className="text-sm font-medium text-slate-800">Location</span>
</div>
<span className="iconify text-orange-300 group-hover:text-orange-500 transition-colors" data-icon="lucide:chevron-right" data-width="16"></span>
</button>
</div>

<div className="group bg-orange-50/50 hover:bg-orange-50 border border-orange-100 rounded-xl overflow-hidden transition-all duration-200 shadow-sm shadow-orange-100/50">
<button className="w-full px-4 py-3 flex items-center justify-between text-left focus:outline-none">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded-md bg-white border border-orange-100 text-orange-500 shadow-sm">
<span className="iconify" data-icon="lucide:cpu" data-width="16"></span>
</div>
<span className="text-sm font-medium text-slate-800">Tech &amp; Financials</span>
</div>
<span className="iconify text-orange-300 group-hover:text-orange-500 transition-colors" data-icon="lucide:chevron-right" data-width="16"></span>
</button>
</div>
</div>

<div className="p-4 bg-white/80 border-t border-orange-100 backdrop-blur-sm sticky bottom-0 z-10">
<div className="flex gap-3">
<button className="flex-1 py-2.5 px-4 bg-white border border-orange-200 text-slate-600 hover:text-orange-600 hover:border-orange-300 rounded-lg text-xs font-semibold transition-all shadow-sm">
                    Reset
                </button>
<button className="flex-[2] py-2.5 px-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg text-xs font-semibold shadow-md shadow-orange-200 transition-all flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:filter" data-width="14"></span>
                    Apply Filters
                </button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col relative h-full overflow-hidden bg-[#FFFBF7]">

<header className="h-16 w-full flex items-center justify-end px-8 gap-4 z-20">

<button className="group flex items-center gap-2 bg-orange-50 hover:bg-orange-100 border border-orange-100/50 text-orange-700 px-3 py-1.5 rounded-lg text-xs font-medium transition-all">
<span className="iconify group-hover:scale-110 transition-transform" data-icon="lucide:bookmark" data-width="14"></span>
                Saved Searches
            </button>

<div className="flex items-center gap-1.5 bg-orange-100/60 border border-orange-200/50 px-3 py-1.5 rounded-full">
<span className="iconify text-orange-500" data-fill="currentColor" data-icon="lucide:zap" data-width="14"></span>
<span className="text-xs font-semibold text-orange-800 tracking-tight">100 Credits</span>
</div>

<button className="flex items-center gap-2 bg-orange-50 hover:bg-orange-100 border border-orange-100 text-orange-700 px-3 py-1.5 rounded-lg text-xs font-medium transition-all shadow-sm">
<span className="iconify" data-icon="lucide:download" data-width="14"></span>
                Export
            </button>

<div className="w-8 h-8 rounded-full bg-orange-200 border-2 border-white shadow-sm flex items-center justify-center text-orange-600 text-xs font-bold ml-2">
                SL
            </div>
</header>

<div className="flex-1 flex flex-col items-center justify-center p-8 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">

<div className="w-24 h-24 bg-gradient-to-b from-orange-50 to-orange-100/50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-orange-50">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm shadow-orange-100 text-orange-400">
<span className="iconify" data-icon="lucide:search" data-strokeWidth="1.5" data-width="32"></span>
</div>
</div>
<h2 className="text-xl font-semibold text-slate-800 tracking-tight mb-2">Ready to explore?</h2>
<p className="text-slate-500 text-sm max-w-sm text-center leading-relaxed">
                Choose filters from the left sidebar to fetch data and build your lead lists.
            </p>
<div className="mt-8 flex gap-2">
<div className="h-1.5 w-16 bg-orange-100 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-orange-300 rounded-full animate-pulse"></div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-orange-100/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-orange-100/30 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
</main>


    </>
  );
}
