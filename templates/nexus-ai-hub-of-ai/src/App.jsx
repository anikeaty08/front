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
      

<aside className="w-16 md:w-64 border-r border-slate-800/60 bg-[#0A0A0A] flex flex-col justify-between transition-all duration-300 z-20">
<div>

<div className="h-16 flex items-center px-6 border-b border-slate-800/60">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white text-xs font-medium tracking-tighter font-sans">
                        N
                    </div>
<span className="text-slate-200 font-medium tracking-tight hidden md:block font-sans">NEXUS</span>
</div>
</div>

<nav className="p-3 space-y-1 mt-4">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-200 bg-slate-800/50 rounded-md border border-slate-700/50 transition-all group">
<iconify-icon icon="solar:home-smile-linear" width="20"></iconify-icon>
<span className="hidden md:block font-sans">Dashboard</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm hover:text-slate-200 hover:bg-slate-900 rounded-md transition-all group">
<iconify-icon icon="solar:widget-5-linear" width="20"></iconify-icon>
<span className="hidden md:block font-sans">All Tools</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm hover:text-slate-200 hover:bg-slate-900 rounded-md transition-all group">
<iconify-icon icon="solar:folder-with-files-linear" width="20"></iconify-icon>
<span className="hidden md:block font-sans">Projects</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm hover:text-slate-200 hover:bg-slate-900 rounded-md transition-all group">
<iconify-icon icon="solar:code-circle-linear" width="20"></iconify-icon>
<span className="hidden md:block font-sans">Developer</span>
</button>
<div className="pt-4 pb-2 px-3 hidden md:block">
<p className="text-xs font-medium text-slate-600 uppercase tracking-widest font-sans">Recent</p>
</div>
<div className="hidden md:flex flex-col space-y-1">
<a className="px-3 py-1.5 text-xs hover:text-indigo-400 truncate transition-colors flex items-center gap-2 font-sans" href="#">
<iconify-icon icon="solar:videocamera-record-linear" width="12"></iconify-icon> 
                        Marketing Video v1
                    </a>
<a className="px-3 py-1.5 text-xs hover:text-indigo-400 truncate transition-colors flex items-center gap-2 font-sans" href="#">
<iconify-icon icon="solar:chart-square-linear" width="12"></iconify-icon>
                        Q3 Report Analysis
                    </a>
<a className="px-3 py-1.5 text-xs hover:text-indigo-400 truncate transition-colors flex items-center gap-2 font-sans" href="#">
<iconify-icon icon="solar:eraser-linear" width="12"></iconify-icon>
                        Product Photo Clean
                    </a>
</div>
</nav>
</div>

<div className="p-4 border-t border-slate-800/60">
<button className="flex items-center gap-3 w-full group">
<div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs text-slate-300 font-sans">
                    JD
                </div>
<div className="hidden md:flex flex-col items-start">
<span className="text-xs text-slate-200 font-medium font-sans">John Doe</span>
<span className="text-[10px] text-slate-500 font-sans">Pro Plan</span>
</div>
<iconify-icon className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" icon="solar:settings-linear" width="16"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col relative min-w-0">

<header className="h-16 border-b border-slate-800/60 flex items-center justify-between px-6 bg-[#0A0A0A]/80 backdrop-blur-md sticky top-0 z-10">
<div className="flex items-center gap-4 text-sm">
<span className="text-slate-500 font-sans">Workspace</span>
<iconify-icon className="text-slate-600" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-slate-200 font-sans">Tools Overview</span>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded text-xs text-slate-500">
<iconify-icon icon="solar:magnifer-linear" width="14"></iconify-icon>
<span className="font-sans">Find a tool...</span>
<span className="ml-4 border border-slate-700 bg-slate-800 px-1 rounded text-[10px] font-sans">⌘K</span>
</div>
<button className="text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col items-center">

<div className="w-full max-w-5xl mt-8 mb-10">
<div className="inline-flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
<span className="text-xs font-medium text-slate-400 uppercase tracking-widest font-sans">New Features Available</span>
</div>
<h1 className="text-2xl md:text-4xl tracking-tight text-white mb-2 font-instrument-serif font-normal">
                    Create with <span className="text-gradient font-instrument-serif font-normal">intelligence</span>.
                </h1>
<p className="text-slate-500 text-sm md:text-base font-light tracking-wide max-w-xl font-sans">
                    Select a specialized agent below to begin your workflow.
                </p>
</div>

<div className="w-full max-w-5xl mb-12">
<div className="flex items-center gap-2 mb-4 px-1">
<iconify-icon className="text-amber-500" icon="solar:fire-linear" width="18"></iconify-icon>
<h2 className="text-sm font-medium text-slate-200 font-sans">Top Trendy Tools</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<button className="group p-4 rounded-xl border border-slate-800 bg-slate-900/20 hover:bg-slate-900/50 hover:border-slate-700 transition-all text-left relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-3">
<div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform duration-300 shadow-sm">
<iconify-icon icon="solar:clapperboard-text-linear" width="20"></iconify-icon>
</div>
<span className="px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-[10px] text-slate-400 group-hover:text-violet-300 transition-colors font-sans">Popular</span>
</div>
<h3 className="text-slate-200 text-sm font-semibold mb-1 font-sans">Text to Video</h3>
<p className="text-xs text-slate-500 leading-relaxed font-sans">Turn scripts into cinematic scenes.</p>
</button>

<button className="group p-4 rounded-xl border border-slate-800 bg-slate-900/20 hover:bg-slate-900/50 hover:border-slate-700 transition-all text-left relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-3">
<div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform duration-300 shadow-sm">
<iconify-icon icon="solar:gallery-favourite-linear" width="20"></iconify-icon>
</div>
</div>
<h3 className="text-slate-200 text-sm font-semibold mb-1 font-sans">AI Image Generator</h3>
<p className="text-xs text-slate-500 leading-relaxed font-sans">High-fidelity assets from prompts.</p>
</button>

<button className="group p-4 rounded-xl border border-slate-800 bg-slate-900/20 hover:bg-slate-900/50 hover:border-slate-700 transition-all text-left relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-3">
<div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-300 shadow-sm">
<iconify-icon icon="solar:play-stream-linear" width="20"></iconify-icon>
</div>
<iconify-icon className="text-slate-600 group-hover:text-indigo-400 transition-colors" icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</div>
<h3 className="text-slate-200 text-sm font-semibold mb-1 font-sans">Image to Video</h3>
<p className="text-xs text-slate-500 leading-relaxed font-sans">Animate static images with motion.</p>
</button>

<button className="group p-4 rounded-xl border border-slate-800 bg-slate-900/20 hover:bg-slate-900/50 hover:border-slate-700 transition-all text-left relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-3">
<div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300 shadow-sm">
<iconify-icon icon="solar:eraser-square-linear" width="20"></iconify-icon>
</div>
</div>
<h3 className="text-slate-200 text-sm font-semibold mb-1 font-sans">Watermark Remover</h3>
<p className="text-xs text-slate-500 leading-relaxed font-sans">Clean cleanup for professional assets.</p>
</button>

<button className="group p-4 rounded-xl border border-slate-800 bg-slate-900/20 hover:bg-slate-900/50 hover:border-slate-700 transition-all text-left relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-3">
<div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform duration-300 shadow-sm">
<iconify-icon icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
</div>
<h3 className="text-slate-200 text-sm font-semibold mb-1 font-sans">File Analyzer</h3>
<p className="text-xs text-slate-500 leading-relaxed font-sans">Insights from PDF, CSV &amp; Docs.</p>
</button>

<button className="group p-4 rounded-xl border border-slate-800 bg-slate-900/20 hover:bg-slate-900/50 hover:border-slate-700 transition-all text-left relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-3">
<div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-300 shadow-sm">
<iconify-icon icon="solar:text-underline-circle-linear" width="20"></iconify-icon>
</div>
</div>
<h3 className="text-slate-200 text-sm font-semibold mb-1 font-sans">Grammar Checker</h3>
<p className="text-xs text-slate-500 leading-relaxed font-sans">Advanced syntax &amp; tone correction.</p>
</button>
</div>
</div>

<div className="w-full max-w-5xl mt-auto">
<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-20 blur transition duration-1000 group-hover:opacity-40 group-hover:duration-200"></div>
<div className="relative flex flex-col bg-[#0F1012] border border-slate-800 rounded-xl p-2 shadow-2xl">

<div className="flex items-center gap-2 px-2 py-1 border-b border-slate-800/50 pb-2 mb-2">
<button className="p-1.5 rounded hover:bg-slate-800 text-slate-500 hover:text-slate-300 transition-colors">
<iconify-icon icon="solar:paperclip-linear" width="16"></iconify-icon>
</button>
<button className="p-1.5 rounded hover:bg-slate-800 text-slate-500 hover:text-slate-300 transition-colors">
<iconify-icon icon="solar:microphone-linear" width="16"></iconify-icon>
</button>
<div className="h-4 w-px bg-slate-800 mx-1"></div>
<div className="flex items-center gap-2">
<span className="text-[10px] text-slate-500 uppercase tracking-wider font-medium font-sans">Model:</span>
<button className="flex items-center gap-1 text-xs text-slate-300 hover:text-white transition-colors font-sans">
                                    GPT-4 Omni
                                    <iconify-icon icon="solar:alt-arrow-down-linear" width="10"></iconify-icon>
</button>
</div>
</div>

<textarea className="w-full bg-transparent text-sm text-slate-200 placeholder-slate-600 resize-none outline-none h-20 px-2 font-light leading-relaxed" placeholder="Describe your creation or upload a file to analyze..."></textarea>

<div className="flex justify-between items-center px-2 pt-2">
<div className="flex gap-2">
<label className="flex items-center cursor-pointer">
<div className="relative">
<input className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4 bg-slate-800 rounded-full shadow-inner peer-checked:bg-indigo-600/50 transition-colors"></div>
<div className="dot absolute left-0.5 top-0.5 bg-slate-400 w-3 h-3 rounded-full transition transform peer-checked:translate-x-4 peer-checked:bg-white"></div>
</div>
<span className="ml-2 text-xs text-slate-500 font-sans">Auto-Select Tool</span>
</label>
</div>
<button className="flex items-center gap-2 px-4 py-1.5 bg-white text-black text-xs font-medium rounded-md hover:bg-indigo-50 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] font-sans">
<iconify-icon icon="solar:stars-minimalistic-linear" width="16"></iconify-icon>
                                Generate
                            </button>
</div>
</div>
</div>
<p className="text-center text-[10px] text-slate-600 mt-4 font-sans">Nexus AI may produce inaccurate information. Verify critical outputs.</p>
</div>
</div>
</main>

<aside className="w-72 bg-[#0A0A0A] border-l border-slate-800/60 hidden lg:flex flex-col p-4 z-10">
<h3 className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-6 font-sans">Configuration</h3>
<div className="space-y-6">

<div>
<div className="flex justify-between items-center mb-2">
<label className="text-xs text-slate-300 font-sans">Creativity</label>
<span className="text-xs text-slate-500 font-sans">0.7</span>
</div>
<div className="h-1 w-full bg-slate-800 rounded-full relative cursor-pointer group">
<div className="absolute h-full w-[70%] bg-indigo-500 rounded-full"></div>
<div className="absolute top-1/2 left-[70%] -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow transition-opacity"></div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-2">
<label className="text-xs text-slate-300 font-sans">Max Length</label>
<span className="text-xs text-slate-500 font-sans">2048</span>
</div>
<div className="h-1 w-full bg-slate-800 rounded-full relative cursor-pointer group">
<div className="absolute h-full w-[40%] bg-slate-500 rounded-full"></div>
<div className="absolute top-1/2 left-[40%] -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow transition-opacity"></div>
</div>
</div>
<div className="h-px bg-slate-800/60 w-full my-4"></div>

<div className="flex items-center justify-between">
<span className="text-xs text-slate-300 font-sans">High Quality Mode</span>
<label className="flex items-center cursor-pointer">
<div className="relative">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4 bg-slate-800 rounded-full shadow-inner peer-checked:bg-emerald-500/20 transition-colors"></div>
<div className="dot absolute left-0.5 top-0.5 bg-slate-400 w-3 h-3 rounded-full transition transform peer-checked:translate-x-4 peer-checked:bg-emerald-400"></div>
</div>
</label>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-slate-300 font-sans">Private Mode</span>
<label className="flex items-center cursor-pointer">
<div className="relative">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4 bg-slate-800 rounded-full shadow-inner peer-checked:bg-emerald-500/20 transition-colors"></div>
<div className="dot absolute left-0.5 top-0.5 bg-slate-400 w-3 h-3 rounded-full transition transform peer-checked:translate-x-4 peer-checked:bg-emerald-400"></div>
</div>
</label>
</div>
<div className="h-px bg-slate-800/60 w-full my-4"></div>

<div>
<label className="text-xs text-slate-500 uppercase tracking-widest mb-2 block font-sans">System Instructions</label>
<textarea className="w-full h-32 bg-slate-900/50 border border-slate-800 rounded-md p-2 text-xs text-slate-300 resize-none focus:border-indigo-500/50 focus:outline-none transition-colors leading-relaxed font-sans">You are a helpful, professional AI assistant focused on technical accuracy and concise explanations.</textarea>
</div>
</div>

<div className="mt-auto pt-4 border-t border-slate-800/60">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
<span className="text-[10px] text-slate-400 font-sans">Systems Operational</span>
</div>
</div>
</aside>

    </>
  );
}
