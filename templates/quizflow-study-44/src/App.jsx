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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl opacity-50"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl opacity-50"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
</div>

<nav className="relative z-50 w-full border-b border-white/5 bg-[#08090A]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white to-slate-400 flex items-center justify-center shadow-lg shadow-white/5">
<span className="iconify text-black" data-icon="lucide:sparkles" data-inline="false" data-width="16"></span>
</div>
<span className="text-white font-medium tracking-tight text-sm">QUIZFLOW</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide">
<a className="text-slate-300 hover:text-white transition-colors" href="#">Library</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#">History</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#">Analytics</a>
</div>
<div className="flex items-center gap-4">
<button className="text-slate-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:bell" data-inline="false" data-width="18"></span>
</button>
<div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center">
<span className="text-xs text-white font-medium">JD</span>
</div>
</div>
</div>
</nav>

<main className="relative z-10 flex-grow flex flex-col items-center justify-start pt-16 pb-20 px-4 md:px-6">

<div className="text-center max-w-2xl mx-auto mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium tracking-wide text-indigo-300 mb-6 hover:bg-white/10 transition-colors cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                V2.0 NOW AVAILABLE
            </div>
<h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
                Turn your syllabus into <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300">mastery instantly.</span>
</h1>
<p className="text-sm md:text-base text-slate-500 font-normal leading-relaxed max-w-lg mx-auto">
                Upload your lecture notes, PDFs, or paste raw text. Our engine parses context to generate exam-ready questions.
            </p>
</div>

<div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

<div className="lg:col-span-7 flex flex-col gap-6">

<div className="flex items-center gap-6 border-b border-white/5 px-2">
<button className="pb-3 text-sm text-white font-medium border-b border-indigo-500 transition-all">
                        Upload File
                    </button>
<button className="pb-3 text-sm text-slate-500 hover:text-slate-300 transition-all">
                        Paste Text
                    </button>
<button className="pb-3 text-sm text-slate-500 hover:text-slate-300 transition-all">
                        Link URL
                    </button>
</div>

<div className="group relative w-full h-64 rounded-xl border border-dashed border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer overflow-hidden">
<input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" type="file"/>
<div className="w-12 h-12 rounded-xl bg-[#08090A] border border-white/10 flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:border-indigo-500/30 transition-all duration-300 z-10">
<span className="iconify text-slate-300 group-hover:text-indigo-400 transition-colors" data-icon="lucide:upload-cloud" data-width="20"></span>
</div>
<p className="text-sm text-slate-300 font-medium mb-1 z-10">Drop your lesson file here</p>
<p className="text-xs text-slate-500 z-10">PDF, DOCX, or TXT up to 10MB</p>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
</div>



<div className="space-y-3">
<p className="text-xs font-medium text-slate-500 uppercase tracking-widest pl-1">Recently Uploaded</p>
<div className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
<span className="iconify text-indigo-400" data-icon="lucide:file-text" data-width="14"></span>
</div>
<div>
<h4 className="text-sm text-slate-200 font-medium group-hover:text-indigo-300 transition-colors">Biology_Chapter_4.pdf</h4>
<p className="text-[10px] text-slate-500">2.4 MB • Uploaded 2 mins ago</p>
</div>
</div>
<div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 hover:bg-white/10 rounded text-slate-400 hover:text-white">
<span className="iconify" data-icon="lucide:trash-2" data-width="14"></span>
</button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 bg-[#0C0D0F] border border-white/5 rounded-2xl p-6 shadow-2xl shadow-black">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-white tracking-tight">Configuration</h3>
<button className="text-xs text-indigo-400 hover:text-indigo-300 font-medium">Reset defaults</button>
</div>

<div className="space-y-8">

<div className="space-y-3">
<label className="text-xs text-slate-400 font-medium">Focus Area</label>
<div className="relative">
<select className="w-full appearance-none bg-[#08090A] border border-white/10 text-slate-200 text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all cursor-pointer">
<option>Entire Document</option>
<option>Chapter 1: Introduction</option>
<option>Chapter 2: Core Concepts</option>
<option>Summary Only</option>
</select>
<span className="iconify absolute right-4 top-3.5 text-slate-500 pointer-events-none" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>

<div className="space-y-3">
<div className="flex justify-between text-xs">
<label className="text-slate-400 font-medium">Quantity</label>
<span className="text-white font-mono">15</span>
</div>
<div className="grid grid-cols-4 gap-2">
<label className="cursor-pointer">
<input className="peer sr-only" name="count" type="radio"/>
<div className="h-9 rounded-md border border-white/10 bg-white/5 flex items-center justify-center text-xs font-medium text-slate-400 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all hover:bg-white/10">5</div>
</label>
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="count" type="radio"/>
<div className="h-9 rounded-md border border-white/10 bg-white/5 flex items-center justify-center text-xs font-medium text-slate-400 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all hover:bg-white/10">10</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="count" type="radio"/>
<div className="h-9 rounded-md border border-white/10 bg-white/5 flex items-center justify-center text-xs font-medium text-slate-400 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all hover:bg-white/10">20</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="count" type="radio"/>
<div className="h-9 rounded-md border border-white/10 bg-white/5 flex items-center justify-center text-xs font-medium text-slate-400 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all hover:bg-white/10">50</div>
</label>
</div>
</div>

<div className="space-y-4">
<div className="flex justify-between items-center">
<label className="text-xs text-slate-400 font-medium">Complexity</label>
<span className="text-[10px] uppercase tracking-wider text-indigo-400 font-semibold bg-indigo-500/10 px-2 py-0.5 rounded">Hard</span>
</div>
<input className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer" max="100" min="1" type="range" value="75"/>
<div className="flex justify-between text-[10px] text-slate-600 font-medium uppercase tracking-wider">
<span>Recall</span>
<span>Analysis</span>
<span>Synthesis</span>
</div>
</div>

<div className="space-y-3">
<label className="text-xs text-slate-400 font-medium">Format</label>
<div className="space-y-2">
<label className="flex items-center justify-between group cursor-pointer p-2 -mx-2 rounded-lg hover:bg-white/5 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded flex items-center justify-center bg-blue-500/10 text-blue-400">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="16"></span>
</div>
<span className="text-sm text-slate-300 group-hover:text-white">Multiple Choice</span>
</div>
<div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
<input checked="" className="peer absolute block w-5 h-5 rounded-full bg-white border-4 border-[#0C0D0F] appearance-none cursor-pointer checked:right-0 right-5 transition-all duration-300 z-10" name="toggle" type="checkbox"/>
<div className="block overflow-hidden h-5 rounded-full bg-slate-800 cursor-pointer peer-checked:bg-blue-600 transition-colors"></div>
</div>
</label>
<label className="flex items-center justify-between group cursor-pointer p-2 -mx-2 rounded-lg hover:bg-white/5 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded flex items-center justify-center bg-purple-500/10 text-purple-400">
<span className="iconify" data-icon="lucide:type" data-width="16"></span>
</div>
<span className="text-sm text-slate-300 group-hover:text-white">Short Answer</span>
</div>
<div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
<input className="peer absolute block w-5 h-5 rounded-full bg-slate-400 border-4 border-[#0C0D0F] appearance-none cursor-pointer checked:right-0 right-5 transition-all duration-300 z-10" name="toggle" type="checkbox"/>
<div className="block overflow-hidden h-5 rounded-full bg-slate-800 cursor-pointer peer-checked:bg-purple-600 transition-colors"></div>
</div>
</label>
<label className="flex items-center justify-between group cursor-pointer p-2 -mx-2 rounded-lg hover:bg-white/5 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded flex items-center justify-center bg-emerald-500/10 text-emerald-400">
<span className="iconify" data-icon="lucide:list-todo" data-width="16"></span>
</div>
<span className="text-sm text-slate-300 group-hover:text-white">True / False</span>
</div>
<div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
<input checked="" className="peer absolute block w-5 h-5 rounded-full bg-white border-4 border-[#0C0D0F] appearance-none cursor-pointer checked:right-0 right-5 transition-all duration-300 z-10" name="toggle" type="checkbox"/>
<div className="block overflow-hidden h-5 rounded-full bg-slate-800 cursor-pointer peer-checked:bg-emerald-600 transition-colors"></div>
</div>
</label>
</div>
</div>

<div className="pt-4">
<button className="group w-full relative overflow-hidden rounded-lg bg-white p-3.5 transition-all duration-300 hover:bg-slate-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
<div className="flex items-center justify-center gap-2 relative z-10">
<span className="text-sm font-semibold text-black tracking-tight">Generate Questions</span>
<span className="iconify text-black group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</div>
</button>
<p className="text-center text-[10px] text-slate-600 mt-3 flex items-center justify-center gap-1">
<span className="iconify" data-icon="lucide:zap" data-width="10"></span>
                            Est. processing time: 12s
                        </p>
</div>
</div>
</div>
</div>

<div className="w-full max-w-5xl mt-12 border-t border-white/5 pt-10">
<div className="flex items-center gap-2 mb-6 opacity-40">
<span className="iconify" data-icon="lucide:layout-grid" data-width="16"></span>
<span className="text-xs font-medium uppercase tracking-widest">Preview</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 opacity-50 pointer-events-none select-none blur-[1px]">
<div className="p-5 rounded-xl border border-white/5 bg-[#0C0D0F]">
<div className="flex items-start justify-between mb-4">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-xs font-mono text-slate-500">01</div>
<div className="h-2 w-16 bg-white/5 rounded-full"></div>
</div>
<div className="space-y-2">
<div className="h-4 w-3/4 bg-white/10 rounded"></div>
<div className="h-4 w-1/2 bg-white/10 rounded"></div>
</div>
<div className="mt-6 space-y-2">
<div className="h-8 w-full border border-white/5 rounded flex items-center px-3"><div className="h-2 w-1/3 bg-white/5 rounded"></div></div>
<div className="h-8 w-full border border-white/5 rounded flex items-center px-3"><div className="h-2 w-1/4 bg-white/5 rounded"></div></div>
</div>
</div>
<div className="p-5 rounded-xl border border-white/5 bg-[#0C0D0F]">
<div className="flex items-start justify-between mb-4">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-xs font-mono text-slate-500">02</div>
<div className="h-2 w-16 bg-white/5 rounded-full"></div>
</div>
<div className="space-y-2">
<div className="h-4 w-5/6 bg-white/10 rounded"></div>
<div className="h-4 w-2/3 bg-white/10 rounded"></div>
</div>
<div className="mt-6 space-y-2">
<div className="h-8 w-full border border-white/5 rounded flex items-center px-3"><div className="h-2 w-1/2 bg-white/5 rounded"></div></div>
<div className="h-8 w-full border border-white/5 rounded flex items-center px-3"><div className="h-2 w-1/3 bg-white/5 rounded"></div></div>
</div>
</div>
</div>
<div className="text-center mt-4">
<p className="text-xs text-slate-600">Generated content will appear here</p>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-[#08090A] py-8 mt-auto relative z-10">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-[10px] text-slate-600 font-medium tracking-wide">
                © 2024 QUIZFLOW LABS
            </div>
<div className="flex items-center gap-6">
<a className="text-[10px] text-slate-600 hover:text-white transition-colors" href="#">PRIVACY</a>
<a className="text-[10px] text-slate-600 hover:text-white transition-colors" href="#">TERMS</a>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-[10px] text-slate-500">Systems Operational</span>
</div>
</div>
</div>
</footer>
<style>
        @keyframes shimmer {
            100% {
                transform: translateX(100%);
            }
        }
    </style>

    </>
  );
}
