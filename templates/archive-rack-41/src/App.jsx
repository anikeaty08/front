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
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
extend: {
boxShadow: {
'binder': 'inset 1px 0 0 rgba(255,255,255,0.1), inset -1px 0 0 rgba(0,0,0,0.1), 3px 0 8px rgba(0,0,0,0.15), 1px 0 1px rgba(0,0,0,0.1)',
'binder-hover': 'inset 1px 0 0 rgba(255,255,255,0.2), 8px 0 15px rgba(0,0,0,0.2)',
'shelf': 'inset 0 -1px 0 rgba(0,0,0,0.1), inset 0 2px 4px rgba(0,0,0,0.05)',
'hole': 'inset 0 2px 4px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.1)',
},
colors: {
slate: { 850: '#151e2e' }
}
}
}
}

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
      

<header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4 z-30 flex-shrink-0 shadow-sm relative">
<div className="flex items-center gap-4">
<div className="w-8 h-8 bg-slate-900 rounded-md shadow-sm flex items-center justify-center text-white ring-1 ring-slate-900/10">
<span className="iconify" data-icon="lucide:library" data-width="16"></span>
</div>
<div className="flex flex-col">
<h1 className="text-sm font-semibold tracking-tight text-slate-900 leading-none">ARCHIVE_HQ</h1>
<div className="flex items-center gap-1.5 mt-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[10px] font-medium text-slate-500 uppercase tracking-wide">System Online</span>
</div>
</div>
</div>

<div className="flex-1 max-w-sm mx-6">
<div className="relative group">
<span className="absolute left-2.5 top-2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
<span className="iconify" data-icon="lucide:search" data-width="14"></span>
</span>
<input className="w-full bg-slate-50 border border-slate-200 rounded-md py-1.5 pl-8 pr-12 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all placeholder:text-slate-400 shadow-sm" placeholder="Search physical records..." type="text"/>
<div className="absolute right-2 top-1.5 flex gap-1">
<kbd className="hidden sm:inline-block border border-slate-200 rounded px-1.5 text-[9px] font-mono text-slate-400">⌘K</kbd>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-all">
<span className="iconify" data-icon="lucide:bell" data-width="16"></span>
</button>
<div className="h-4 w-px bg-slate-200"></div>
<button className="flex items-center gap-2 pl-1 pr-2 py-1 hover:bg-slate-50 rounded-md border border-transparent hover:border-slate-200 transition-all">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-slate-200 to-slate-100 border border-slate-200 flex items-center justify-center">
<span className="text-[10px] font-bold text-slate-600">JS</span>
</div>
<span className="text-xs font-medium text-slate-700">Admin</span>
</button>
</div>
</header>

<div className="flex flex-1 overflow-hidden">

<main className="flex-1 flex flex-col min-w-0 bg-slate-50/50 relative">

<div className="h-12 border-b border-slate-200/60 px-6 flex items-center justify-between bg-white/50 backdrop-blur-sm sticky top-0 z-20">
<div className="flex items-center gap-2 text-xs font-medium text-slate-500">
<span className="hover:text-slate-900 cursor-pointer">Storage</span>
<span className="iconify text-slate-300" data-icon="lucide:chevron-right" data-width="12"></span>
<span className="hover:text-slate-900 cursor-pointer">Room A</span>
<span className="iconify text-slate-300" data-icon="lucide:chevron-right" data-width="12"></span>
<span className="text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded">Rack 01</span>
</div>
<div className="flex items-center gap-2">
<button className="p-1.5 bg-white border border-slate-200 rounded hover:border-slate-300 text-slate-500 shadow-sm">
<span className="iconify" data-icon="lucide:filter" data-width="14"></span>
</button>
<button className="p-1.5 bg-white border border-slate-200 rounded hover:border-slate-300 text-slate-500 shadow-sm">
<span className="iconify" data-icon="lucide:arrow-up-down" data-width="14"></span>
</button>
<button className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white pl-2 pr-3 py-1.5 rounded text-xs font-medium transition-all shadow-sm active:translate-y-px">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                        New Entry
                    </button>
</div>
</div>

<div className="flex-1 overflow-y-auto overflow-x-hidden p-8 space-y-12 pb-24 texture-noise">

<div className="relative max-w-5xl mx-auto">

<div className="flex items-end justify-between mb-1 px-1">
<div className="flex items-center gap-2">
<h3 className="text-sm font-semibold text-slate-800">Section A</h3>
<span className="text-[10px] text-slate-400 font-mono bg-slate-100 border border-slate-200 px-1.5 rounded">#SEC-001</span>
</div>
<span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Finance / Legal</span>
</div>

<div className="relative bg-white border border-slate-300 rounded-sm shadow-sm pt-8 px-8 pb-0">

<div className="absolute inset-0 bg-gradient-to-b from-slate-100/50 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 right-0 h-3 bg-slate-200/80 border-t border-slate-300/50 shadow-shelf z-0"></div>

<div className="relative z-10 flex items-end gap-[2px] overflow-x-visible min-h-[220px]">

<div className="group relative w-12 shrink-0 flex flex-col items-center cursor-pointer transition-all duration-300 hover:-translate-y-6 hover:z-20">

<div className="w-full h-52 bg-slate-800 rounded-sm shadow-binder group-hover:shadow-binder-hover transition-shadow relative overflow-hidden flex flex-col items-center pt-8 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:via-transparent before:to-black/20 before:pointer-events-none border-l border-white/5 border-r border-black/20">
<div className="bg-white w-8 h-12 shadow-inner rounded-sm flex flex-col items-center justify-center mb-6 relative">
<span className="text-[10px] font-bold text-slate-900">01</span>
</div>
<div className="w-5 h-5 rounded-full bg-slate-900 shadow-hole mb-auto ring-1 ring-white/10"></div>
<div className="w-full h-8 bg-blue-600 mt-auto opacity-90 border-t border-black/10"></div>
</div>

<div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap z-30 pointer-events-none">
                                    Q1 Finance Reports
                                </div>
</div>

<div className="group relative w-12 shrink-0 flex flex-col items-center cursor-pointer transition-all duration-300 hover:-translate-y-6 hover:z-20">
<div className="w-full h-52 bg-slate-700 rounded-sm shadow-binder group-hover:shadow-binder-hover transition-shadow relative overflow-hidden flex flex-col items-center pt-8 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:via-transparent before:to-black/20 before:pointer-events-none border-l border-white/5 border-r border-black/20">
<div className="bg-white w-8 h-12 shadow-inner rounded-sm flex flex-col items-center justify-center mb-6">
<span className="text-[10px] font-bold text-slate-900">02</span>
</div>
<div className="w-5 h-5 rounded-full bg-slate-800 shadow-hole mb-auto ring-1 ring-white/10"></div>
<div className="w-full h-8 bg-blue-600 mt-auto opacity-90 border-t border-black/10"></div>
</div>
</div>

<div className="group relative w-14 shrink-0 flex flex-col items-center cursor-pointer transition-all duration-300 hover:-translate-y-6 hover:z-20 mx-1">
<div className="w-full h-[215px] bg-[#3a3a3a] rounded-sm shadow-binder group-hover:shadow-binder-hover transition-shadow relative overflow-hidden flex flex-col items-center pt-4 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/5 before:via-transparent before:to-black/30 before:pointer-events-none border-l border-white/5 border-r border-black/20 texture-noise">
<div className="w-full h-full absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-30 mix-blend-overlay"></div>
<div className="bg-white w-10 h-24 shadow-inner rounded-[2px] flex flex-col items-center p-2 mb-4 relative z-10 border border-slate-200">
<div className="w-full h-[1px] bg-slate-300 mb-1"></div>
<div className="w-full h-[1px] bg-slate-300 mb-2"></div>
<span className="text-[9px] font-bold text-slate-900 leading-tight text-center uppercase">Tax<br/>2023</span>
</div>
<div className="w-6 h-6 rounded-full bg-[#2a2a2a] shadow-hole mb-auto ring-1 ring-white/10 relative z-10"></div>
</div>
</div>

<div className="w-8 shrink-0 h-full border-b border-transparent"></div>

<div className="group relative w-12 shrink-0 flex flex-col items-center cursor-pointer transition-all duration-300 hover:-translate-y-6 hover:z-20">
<div className="w-full h-52 bg-rose-700 rounded-sm shadow-binder group-hover:shadow-binder-hover transition-shadow relative overflow-hidden flex flex-col items-center pt-8 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:via-transparent before:to-black/20 before:pointer-events-none border-l border-white/5 border-r border-black/20">
<div className="bg-white w-8 h-10 shadow-inner rounded-sm flex flex-col items-center justify-center mb-6">
<span className="text-[10px] font-bold text-red-700">ALERT</span>
</div>
<div className="w-5 h-5 rounded-full bg-rose-900 shadow-hole mb-auto ring-1 ring-white/10"></div>
</div>
</div>

<div className="group relative w-32 shrink-0 flex flex-col justify-end gap-[1px] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:z-20 ml-2">
<div className="h-12 w-full bg-amber-700 rounded-sm shadow-sm relative flex items-center px-3 border border-amber-800 before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent">
<span className="text-[9px] font-bold text-amber-100/80 tracking-widest uppercase">Archive Box A</span>
</div>
<div className="h-12 w-full bg-amber-700 rounded-sm shadow-sm relative flex items-center px-3 border border-amber-800 before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent">
<span className="text-[9px] font-bold text-amber-100/80 tracking-widest uppercase">Archive Box B</span>
</div>
<div className="h-12 w-full bg-amber-700 rounded-sm shadow-sm relative flex items-center px-3 border border-amber-800 before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent">
<span className="text-[9px] font-bold text-amber-100/80 tracking-widest uppercase">Archive Box C</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative max-w-5xl mx-auto">
<div className="flex items-end justify-between mb-1 px-1">
<div className="flex items-center gap-2">
<h3 className="text-sm font-semibold text-slate-800">Section B</h3>
<span className="text-[10px] text-slate-400 font-mono bg-slate-100 border border-slate-200 px-1.5 rounded">#SEC-002</span>
</div>
<span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Engineering / Blueprints</span>
</div>
<div className="relative bg-white border border-slate-300 rounded-sm shadow-sm pt-8 px-8 pb-0">
<div className="absolute inset-0 bg-gradient-to-b from-slate-100/50 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 right-0 h-3 bg-slate-200/80 border-t border-slate-300/50 shadow-shelf z-0"></div>
<div className="relative z-10 flex items-end gap-0.5 overflow-x-visible min-h-[220px]">

<div className="group relative w-16 shrink-0 flex flex-col items-center cursor-pointer transition-all duration-300 hover:-translate-y-6 hover:z-20">
<div className="w-full h-[220px] bg-slate-600 rounded-sm shadow-binder group-hover:shadow-binder-hover transition-shadow relative overflow-hidden flex flex-col items-center pt-6 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:via-transparent before:to-black/20 before:pointer-events-none border-l border-white/5 border-r border-black/20">
<div className="bg-white w-10 h-16 shadow-inner rounded-sm flex flex-col items-center justify-center mb-6 border-l-4 border-orange-500">
<span className="text-[10px] font-bold text-slate-900">ENG</span>
<span className="text-[8px] text-slate-400">01</span>
</div>
<div className="w-6 h-6 rounded-full bg-slate-700 shadow-hole mb-auto ring-1 ring-white/10"></div>
</div>
</div>
<div className="group relative w-16 shrink-0 flex flex-col items-center cursor-pointer transition-all duration-300 hover:-translate-y-6 hover:z-20">
<div className="w-full h-[220px] bg-slate-600 rounded-sm shadow-binder group-hover:shadow-binder-hover transition-shadow relative overflow-hidden flex flex-col items-center pt-6 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:via-transparent before:to-black/20 before:pointer-events-none border-l border-white/5 border-r border-black/20">
<div className="bg-white w-10 h-16 shadow-inner rounded-sm flex flex-col items-center justify-center mb-6 border-l-4 border-orange-500">
<span className="text-[10px] font-bold text-slate-900">ENG</span>
<span className="text-[8px] text-slate-400">02</span>
</div>
<div className="w-6 h-6 rounded-full bg-slate-700 shadow-hole mb-auto ring-1 ring-white/10"></div>
</div>
</div>

<div className="relative w-14 shrink-0 h-[220px] mx-2 group">
<div className="absolute bottom-0 left-0 w-14 h-[220px] bg-emerald-700 rounded-sm shadow-binder origin-bottom-left rotate-6 transform transition-transform duration-300 group-hover:rotate-0 group-hover:-translate-y-4 cursor-pointer z-10 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:via-transparent before:to-black/20 border-l border-white/5 border-r border-black/20 flex flex-col items-center pt-8">
<div className="bg-white w-8 h-12 shadow-inner rounded-sm flex flex-col items-center justify-center mb-6">
<span className="text-[10px] font-bold text-slate-900">LG</span>
</div>
<div className="w-5 h-5 rounded-full bg-emerald-900 shadow-hole mb-auto ring-1 ring-white/10"></div>
</div>
</div>

<div className="group relative w-8 shrink-0 flex flex-col items-center cursor-pointer transition-all duration-300 hover:-translate-y-6 hover:z-20 ml-4">
<div className="w-full h-52 bg-white border border-slate-300 rounded-sm shadow-sm group-hover:shadow-md transition-shadow relative overflow-hidden flex flex-col items-center pt-4">
<div className="w-full h-full bg-slate-50 absolute inset-0"></div>
<span className="relative z-10 text-[9px] font-mono text-slate-500 rotate-90 mt-12 whitespace-nowrap">MANUAL v1</span>
</div>
</div>
<div className="group relative w-8 shrink-0 flex flex-col items-center cursor-pointer transition-all duration-300 hover:-translate-y-6 hover:z-20">
<div className="w-full h-52 bg-white border border-slate-300 rounded-sm shadow-sm group-hover:shadow-md transition-shadow relative overflow-hidden flex flex-col items-center pt-4">
<div className="w-full h-full bg-slate-50 absolute inset-0"></div>
<span className="relative z-10 text-[9px] font-mono text-slate-500 rotate-90 mt-12 whitespace-nowrap">MANUAL v2</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<aside className="w-80 bg-white border-l border-slate-200 flex flex-col z-30 shadow-xl">

<div className="h-12 border-b border-slate-200 flex items-center justify-between px-5 bg-slate-50/50">
<span className="text-xs font-semibold text-slate-900 uppercase tracking-wide">Inspector</span>
<button className="text-slate-400 hover:text-slate-600 transition-colors">
<span className="iconify" data-icon="lucide:x" data-width="14"></span>
</button>
</div>
<div className="flex-1 overflow-y-auto p-5">

<div className="flex flex-col items-center mb-8">
<div className="w-24 h-36 bg-slate-800 rounded shadow-lg relative flex flex-col items-center pt-4 mb-4 border border-slate-700 before:absolute before:inset-0 before:bg-gradient-to-tr before:from-white/5 before:to-transparent">
<div className="bg-white w-12 h-16 shadow-inner rounded-sm flex flex-col items-center justify-center">
<span className="text-[10px] font-bold text-slate-900">01</span>
</div>
<div className="w-full h-1 bg-blue-500 mt-auto mb-4"></div>
</div>
<h2 className="text-sm font-semibold text-slate-900">Finance Reports Q1</h2>
<span className="text-[10px] text-slate-500 font-mono mt-1">ID: FIN-2023-Q1-A</span>
</div>

<div className="space-y-6">
<div>
<h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Properties</h4>
<div className="space-y-3">
<div className="flex justify-between items-center pb-2 border-b border-slate-100">
<span className="text-xs text-slate-500">Department</span>
<span className="text-xs font-medium text-slate-800 bg-slate-100 px-2 py-0.5 rounded-full">Finance</span>
</div>
<div className="flex justify-between items-center pb-2 border-b border-slate-100">
<span className="text-xs text-slate-500">Classification</span>
<span className="text-xs font-medium text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full">Confidential</span>
</div>
<div className="flex justify-between items-center pb-2 border-b border-slate-100">
<span className="text-xs text-slate-500">Last Accessed</span>
<span className="text-xs font-medium text-slate-800">2 hours ago</span>
</div>
<div className="flex justify-between items-center pb-2 border-b border-slate-100">
<span className="text-xs text-slate-500">Physical Loc</span>
<span className="text-xs font-mono text-slate-600">RACK-01-A-04</span>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-2">
<h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Capacity</h4>
<span className="text-[10px] font-medium text-slate-600">85% Full</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-800 w-[85%] rounded-full"></div>
</div>
</div>

<div>
<h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Actions</h4>
<div className="grid grid-cols-2 gap-2">
<button className="flex items-center justify-center gap-2 py-2 border border-slate-200 rounded hover:bg-slate-50 text-xs font-medium text-slate-700 transition-colors">
<span className="iconify" data-icon="lucide:arrow-right-left" data-width="12"></span>
                                Move
                            </button>
<button className="flex items-center justify-center gap-2 py-2 border border-slate-200 rounded hover:bg-slate-50 text-xs font-medium text-slate-700 transition-colors">
<span className="iconify" data-icon="lucide:printer" data-width="12"></span>
                                Label
                            </button>
<button className="col-span-2 flex items-center justify-center gap-2 py-2 bg-slate-900 text-white rounded hover:bg-slate-800 text-xs font-medium transition-colors shadow-sm">
<span className="iconify" data-icon="lucide:scan-line" data-width="12"></span>
                                Digital Scan
                            </button>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-slate-200 bg-slate-50">
<button className="w-full py-2 text-xs font-medium text-red-600 hover:bg-red-50 rounded border border-transparent hover:border-red-100 transition-colors flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:trash-2" data-width="12"></span>
                    Mark for Disposal
                </button>
</div>
</aside>
</div>

    </>
  );
}
