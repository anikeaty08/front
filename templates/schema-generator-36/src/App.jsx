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
      

<aside className="hidden md:flex flex-col w-[260px] h-full border-r border-white/[0.06] bg-[#050505] relative z-20">

<div className="p-4 pb-2 space-y-4">

<div className="flex items-center gap-2.5 px-2">
<div className="w-5 h-5 rounded-md bg-white text-black flex items-center justify-center font-bold text-[10px] shadow-[0_0_10px_rgba(255,255,255,0.3)]">S</div>
<span className="text-sm font-medium tracking-tight text-white/90">Schema.ai</span>
</div>

<button className="w-full flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.05] text-slate-500 hover:text-slate-300 hover:border-white/10 hover:bg-white/[0.06] transition-all group">
<iconify-icon className="text-slate-600 group-hover:text-slate-400" icon="solar:magnifer-linear" width="14"></iconify-icon>
<span className="text-xs">Search...</span>
<span className="ml-auto text-[10px] px-1.5 py-0.5 rounded border border-white/5 bg-black text-slate-600 font-mono group-hover:border-white/10">/</span>
</button>
</div>

<div className="px-3 py-2">
<nav className="space-y-0.5">
<button className="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-md hover:bg-white/[0.04] text-slate-400 hover:text-white transition-colors group">
<iconify-icon className="text-slate-600 group-hover:text-slate-300 transition-colors" icon="solar:home-smile-linear" width="16"></iconify-icon>
<span className="text-xs font-medium">Home</span>
</button>
<button className="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-md hover:bg-white/[0.04] text-slate-400 hover:text-white transition-colors group">
<iconify-icon className="text-slate-600 group-hover:text-slate-300 transition-colors" icon="solar:widget-linear" width="16"></iconify-icon>
<span className="text-xs font-medium">Templates</span>
</button>
<button className="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-md hover:bg-white/[0.04] text-slate-400 hover:text-white transition-colors group">
<iconify-icon className="text-slate-600 group-hover:text-slate-300 transition-colors" icon="solar:settings-linear" width="16"></iconify-icon>
<span className="text-xs font-medium">Settings</span>
</button>
</nav>
</div>

<div className="flex-1 overflow-y-auto px-3 py-2 space-y-6">

<div>
<div className="flex items-center justify-between px-2.5 mb-2 group cursor-pointer">
<h3 className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest group-hover:text-slate-500 transition-colors">Workspace</h3>
<iconify-icon className="text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity hover:text-white" icon="solar:add-circle-linear" width="14"></iconify-icon>
</div>
<ul className="space-y-0.5">

<li>
<a className="flex items-center gap-2.5 px-2.5 py-2 rounded-md bg-white/[0.06] border border-white/[0.02] text-white shadow-sm group relative" href="#">
<iconify-icon className="text-blue-400" icon="solar:database-linear" width="14"></iconify-icon>
<span className="text-xs truncate font-medium">E-commerce Microservices</span>

<div className="absolute right-2 w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
</a>
</li>
<li>
<a className="flex items-center gap-2.5 px-2.5 py-2 rounded-md hover:bg-white/[0.03] text-slate-400 hover:text-slate-200 transition-colors group" href="#">
<iconify-icon className="text-slate-600 group-hover:text-slate-500" icon="solar:graph-linear" width="14"></iconify-icon>
<span className="text-xs truncate">Auth Flow Chart</span>
</a>
</li>
<li>
<a className="flex items-center gap-2.5 px-2.5 py-2 rounded-md hover:bg-white/[0.03] text-slate-400 hover:text-slate-200 transition-colors group" href="#">
<iconify-icon className="text-slate-600 group-hover:text-slate-500" icon="solar:document-text-linear" width="14"></iconify-icon>
<span className="text-xs truncate">Invoice PDF Parsing</span>
</a>
</li>
</ul>
</div>

<div>
<h3 className="px-2.5 text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-2">Previous 7 Days</h3>
<ul className="space-y-0.5">
<li>
<a className="flex items-center gap-2.5 px-2.5 py-2 rounded-md hover:bg-white/[0.03] text-slate-500 hover:text-slate-300 transition-colors group" href="#">
<iconify-icon className="text-slate-700 group-hover:text-slate-600" icon="solar:database-linear" width="14"></iconify-icon>
<span className="text-xs truncate">Legacy DB Migration</span>
</a>
</li>
<li>
<a className="flex items-center gap-2.5 px-2.5 py-2 rounded-md hover:bg-white/[0.03] text-slate-500 hover:text-slate-300 transition-colors group" href="#">
<iconify-icon className="text-slate-700 group-hover:text-slate-600" icon="solar:code-file-linear" width="14"></iconify-icon>
<span className="text-xs truncate">User Schema v2</span>
</a>
</li>
</ul>
</div>
</div>

<div className="p-3 mt-auto border-t border-white/[0.06]">
<button className="group flex items-center gap-3 w-full p-2 rounded-lg hover:bg-white/[0.04] transition-all border border-transparent hover:border-white/[0.02]">
<div className="relative">
<div className="w-8 h-8 rounded-full bg-gradient-to-b from-neutral-700 to-neutral-800 ring-1 ring-white/10 flex items-center justify-center text-[10px] text-white font-medium">
                        JD
                    </div>
<div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-black rounded-full flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
</div>
</div>
<div className="flex flex-col items-start text-left overflow-hidden">
<span className="text-xs font-medium text-white group-hover:text-white truncate">John Doe</span>
<span className="text-[10px] text-slate-500 group-hover:text-slate-400 truncate">john@schema.ai</span>
</div>
<iconify-icon className="ml-auto text-slate-600 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 relative flex flex-col items-center justify-center bg-black overflow-hidden">

<div className="absolute top-4 left-4 md:hidden z-50">
<button className="text-white/70 hover:text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="moving-grid-bg"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-0"></div>

<div className="absolute inset-x-0 top-1/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent blur-sm z-0"></div>
<div className="absolute inset-x-0 bottom-1/4 h-[1px] bg-gradient-to-r from-transparent via-blue-900/10 to-transparent z-0"></div>

<div className="w-full max-w-3xl px-6 relative z-10 flex flex-col items-center gap-8">

<div className="text-center space-y-3 mb-4">
<div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/5 shadow-2xl shadow-blue-500/10 mb-4 backdrop-blur-sm">
<iconify-icon className="text-white" icon="solar:cpu-bolt-linear" width="32"></iconify-icon>
</div>
<h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white drop-shadow-lg">
                    Design your architecture.
                </h1>
<p className="text-slate-500 text-lg font-light">
                    Upload a diagram, paste JSON, or describe your system.
                </p>
</div>

<div className="w-full group relative">

<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-blue-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
<div className="relative w-full bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">

<textarea className="w-full bg-transparent text-white text-base placeholder-slate-600 p-5 min-h-[120px] outline-none resize-none font-light leading-relaxed scrollbar-hide focus:bg-white/[0.01] transition-colors" placeholder="Describe the database schema you need, or paste a rough SQL dump..."></textarea>

<div className="flex items-center justify-between px-4 pb-4 pt-2 border-t border-white/[0.02]">

<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all border border-transparent hover:border-white/5">
<iconify-icon icon="solar:gallery-linear" width="16"></iconify-icon>
<span>Image</span>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all border border-transparent hover:border-white/5">
<iconify-icon icon="solar:file-text-linear" width="16"></iconify-icon>
<span>PDF</span>
</button>
</div>

<button className="flex items-center gap-2 bg-white text-black pl-4 pr-3 py-2 rounded-lg text-sm font-medium tracking-tight hover:bg-blue-50 transition-all hover:scale-[1.02] active:scale-[0.98]">
<span>Generate Schema</span>
<iconify-icon className="text-blue-600" icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="flex flex-wrap justify-center gap-3 w-full">
<button className="px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] text-xs text-slate-500 hover:text-slate-300 hover:border-white/10 hover:bg-white/[0.04] transition-colors backdrop-blur-sm">
                    Create User Auth Schema
                </button>
<button className="px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] text-xs text-slate-500 hover:text-slate-300 hover:border-white/10 hover:bg-white/[0.04] transition-colors backdrop-blur-sm">
                    Convert ERD Image to SQL
                </button>
<button className="px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] text-xs text-slate-500 hover:text-slate-300 hover:border-white/10 hover:bg-white/[0.04] transition-colors backdrop-blur-sm">
                    Optimize JSON Structure
                </button>
</div>
</div>

<div className="absolute bottom-6 text-[10px] text-slate-700 tracking-wide font-medium">
            GENERATED CONTENT MAY REQUIRE REVIEW
        </div>
</main>

    </>
  );
}
