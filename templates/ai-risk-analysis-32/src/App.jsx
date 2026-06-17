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



        // Initialize Lucide icons
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
      

<aside className="hidden md:flex w-[260px] flex-col bg-[#111827] h-full flex-shrink-0 relative z-20 text-slate-300">

<div className="flex items-center justify-between px-4 h-14 shrink-0">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
<i className="w-4 h-4" data-lucide="activity"></i>
</div>
<span className="text-base font-semibold text-white tracking-tight">RiskAI</span>
</div>
<button className="text-slate-500 hover:text-slate-300 transition-colors">
<i className="w-4 h-4" data-lucide="panel-left-close"></i>
</button>
</div>

<div className="px-4 py-2 shrink-0">
<div className="relative flex items-center w-full">
<i className="w-4 h-4 absolute left-3 text-slate-500" data-lucide="search"></i>
<input className="w-full bg-[#1f2937] text-slate-200 placeholder-slate-500 text-sm rounded-lg pl-9 pr-12 py-2 focus:outline-none focus:ring-1 focus:ring-slate-600 transition-shadow" placeholder="Search chats..." type="text"/>
<div className="absolute right-2 flex items-center gap-1 opacity-50">
<span className="flex items-center justify-center w-4 h-4 rounded bg-[#374151] text-xs text-slate-300">⌘</span>
<span className="flex items-center justify-center w-4 h-4 rounded bg-[#374151] text-xs text-slate-300">K</span>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto px-2 py-4 space-y-6 dark-scroll">

<div className="space-y-1">
<div className="flex items-center justify-between px-2 py-1.5 group cursor-pointer">
<div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 tracking-wider">
<i className="w-3.5 h-3.5" data-lucide="chevron-down"></i>
                        PROJECTS
                    </div>
<button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-slate-200 transition-all">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
<div className="space-y-0.5">
<button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-md hover:bg-[#1f2937] text-slate-400 hover:text-slate-200 transition-colors text-sm text-left">
<i className="w-4 h-4 shrink-0" data-lucide="folder"></i>
<span className="truncate">Techcolab</span>
</button>
<button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-md hover:bg-[#1f2937] text-slate-400 hover:text-slate-200 transition-colors text-sm text-left">
<i className="w-4 h-4 shrink-0" data-lucide="folder"></i>
<span className="truncate">YI Lab</span>
</button>
<button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-md hover:bg-[#1f2937] text-slate-400 hover:text-slate-200 transition-colors text-sm text-left">
<i className="w-4 h-4 shrink-0" data-lucide="folder"></i>
<span className="truncate">Arbin's Library</span>
</button>
</div>
</div>

<div className="space-y-1">
<div className="flex items-center justify-between px-2 py-1.5 group cursor-pointer">
<div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 tracking-wider">
<i className="w-3.5 h-3.5" data-lucide="chevron-down"></i>
                        CHATS
                    </div>
<button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-slate-200 transition-all">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
<div className="space-y-0.5">
<button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-md bg-[#1f2937] text-white transition-colors text-sm text-left">
<i className="w-4 h-4 shrink-0" data-lucide="message-square"></i>
<span className="truncate">First Chat</span>
</button>
<button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-md hover:bg-[#1f2937] text-slate-400 hover:text-slate-200 transition-colors text-sm text-left">
<i className="w-4 h-4 shrink-0" data-lucide="message-square"></i>
<span className="truncate">Access national and regiona...</span>
</button>
</div>
</div>
</div>

<div className="p-4 border-t border-slate-800 shrink-0">
<button className="w-full flex items-center justify-between group">
<div className="flex items-center gap-3">
<img alt="User" className="w-8 h-8 rounded-full" src="https://ui-avatars.com/api/?name=Arbin+Paudel&amp;background=ea580c&amp;color=fff"/>
<div className="flex flex-col items-start">
<span className="text-sm font-medium text-slate-200">Arbin Paudel</span>
<span className="text-xs text-slate-500">olvinsp80@gmail.com</span>
</div>
</div>
<i className="w-4 h-4 text-slate-500 group-hover:text-slate-300" data-lucide="chevron-up"></i>
</button>
<div className="mt-4 text-xs text-slate-500">
                © Copyright 2026, All right Reserved
            </div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white">

<header className="h-14 border-b border-slate-200 flex items-center px-6 shrink-0 bg-white z-10">
<div className="flex items-center gap-2 text-sm text-slate-800 font-medium">
<i className="w-4 h-4 text-slate-400" data-lucide="message-square"></i>
<span className="text-slate-400">/</span>
<span>First Chat</span>
</div>
</header>

<div className="flex-1 overflow-y-auto px-6 py-6 pb-32 w-full relative">
<div className="max-w-4xl mx-auto space-y-8 w-full">

<div className="bg-[#f8fafc] border border-slate-100 rounded-2xl p-6 text-base text-slate-700 leading-relaxed space-y-4 shadow-sm">
<p>- Option A: Tailored plan for your region/time and generate a ready-to-run workflow</p>
<p className="pl-3">- Tell me: region(s) of interest, time window, hazards to analyze, preferred tools (Python, R, or Google Earth Engine), and whether you want near-real-time monitoring or historical trend analysis.</p>
<p className="pl-3">- I'll provide a region-specific data plan, a list of required datasets with download links, and a step-by-step notebook outline (including code skeletons) to reproduce the analysis.</p>
<p className="pt-2">- Option B: Start with a minimal, reproducible example</p>
<p className="pl-3">- I can draft a small, self-contained workflow for a specific region (e.g., a country or a river basin) and a defined period (e.g., 2000–2020) using openly available datasets. You can run it locally or in the cloud, then extend to more hazards.</p>
<p className="pt-2">Would you like me to:</p>
<p>- propose a region and time window to start with, and</p>
<p>- pick a tooling path (Python notebook, R script, or Google Earth Engine) so I can deliver a concrete starter notebook and data plan?</p>
<p>If you provide region/time and tool preference, I'll tailor a runnable analysis plan and include references to all datasets with verifiable sources.</p>
</div>

<div className="border border-slate-200 rounded-2xl bg-white shadow-sm flex flex-col max-w-3xl mx-auto relative overflow-hidden">

<div className="flex items-center justify-between p-5 border-b border-slate-100 bg-white z-10">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Generating Report</h2>
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
<i className="w-4 h-4" data-lucide="x"></i>
                            Close
                        </button>
</div>

<div className="p-6 relative">
<div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 pb-14">

<div className="flex items-start gap-4 p-4 border border-slate-100 rounded-xl bg-white opacity-50">
<div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5 text-white">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-400">Research step finalized.</span>
</div>
</div>

<div className="flex items-start gap-4 p-5 border border-purple-100/50 rounded-xl bg-white shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] ring-1 ring-slate-100">
<div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-white shadow-sm">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2">
<span className="text-base font-medium text-slate-800">Compiling report</span>
<span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-medium">Done</span>
</div>
<span className="text-sm text-slate-500">Compiling report.</span>
</div>
</div>

<div className="flex items-start gap-4 p-5 border border-purple-100/50 rounded-xl bg-white shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] ring-1 ring-slate-100">
<div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-white shadow-sm">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2">
<span className="text-base font-medium text-slate-800">Draft completed</span>
<span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-medium">Done</span>
</div>
<span className="text-sm text-slate-500">Report draft completed.</span>
</div>
</div>

<div className="flex items-start gap-4 p-5 border border-purple-100/50 rounded-xl bg-white shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] ring-1 ring-slate-100">
<div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-white shadow-sm">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2">
<span className="text-base font-medium text-slate-800">Report completed</span>
<span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-medium">Done</span>
</div>
<span className="text-sm text-slate-500">Report generation completed.</span>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 z-10 pt-4 bg-gradient-to-t from-white via-white to-transparent pl-4">
<button className="flex items-center gap-2 px-5 py-2.5 bg-[#2563eb] hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
<i className="w-4 h-4" data-lucide="download"></i>
                                Download
                            </button>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-white pt-4 pb-6 px-6 border-t border-transparent z-20">
<div className="max-w-4xl mx-auto w-full">
<div className="relative flex items-center bg-white border border-slate-300 rounded-full p-1.5 pl-4 shadow-sm focus-within:ring-1 focus-within:ring-slate-400 focus-within:border-slate-400 transition-shadow">
<button className="text-slate-400 hover:text-slate-600 transition-colors p-1 shrink-0">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
<input className="w-full bg-transparent px-3 py-2 text-base text-slate-800 placeholder-slate-400 outline-none" placeholder="Message to RiskAI..." type="text"/>
<button className="w-9 h-9 bg-[#111827] text-white rounded-full flex items-center justify-center shrink-0 hover:bg-slate-800 transition-colors">
<i className="w-4 h-4 ml-0.5" data-lucide="send"></i>
</button>
</div>
</div>
</div>
</main>

<aside className="hidden lg:flex w-[320px] bg-[#f8fafc] border-l border-slate-200 flex-col h-full flex-shrink-0 z-20">

<div className="px-5 py-4 border-b border-slate-200 bg-white flex items-center justify-between shrink-0">
<h3 className="text-sm font-semibold text-slate-800 tracking-tight">Reports</h3>
<span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">3 Total</span>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-3">

<div className="bg-white border border-blue-100 rounded-xl p-3.5 shadow-sm relative overflow-hidden ring-1 ring-blue-50">
<div className="absolute top-0 left-0 w-1 bg-blue-500 h-full animate-pulse"></div>
<div className="flex gap-3 items-start pl-1">
<div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<iconify-icon height="18" icon="solar:document-add-linear" width="18"></iconify-icon>
</div>
<div className="flex flex-col flex-1">
<span className="text-sm font-medium text-slate-900">Regional Analysis</span>
<div className="flex items-center gap-1.5 mt-1">
<iconify-icon className="text-blue-500 animate-spin" height="12" icon="solar:round-transfer-linear" width="12"></iconify-icon>
<span className="text-xs text-blue-600 font-medium">Generating...</span>
</div>
</div>
</div>

<div className="mt-3 pl-1 flex flex-wrap gap-1.5">
<div className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600">
                        USGS Seismic
                    </div>
<div className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600">
                        NOAA Climate
                    </div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-sm hover:shadow-md transition-shadow group">
<div className="flex gap-3 items-start">
<div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 text-slate-600 flex items-center justify-center shrink-0">
<iconify-icon height="18" icon="solar:document-text-linear" width="18"></iconify-icon>
</div>
<div className="flex flex-col flex-1">
<span className="text-sm font-medium text-slate-900 line-clamp-1">Landslide Risk 2024</span>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-slate-500">PDF • 2.4 MB</span>
<span className="text-xs text-slate-400">4:39 PM</span>
</div>
</div>
</div>

<div className="mt-3 flex flex-wrap gap-1.5">
<div className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600">
                        FEMA Zone X
                    </div>
<div className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600">
                        20y History
                    </div>
<div className="flex items-center gap-1.5 px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600">
                        More Sources
                        <span className="flex items-center justify-center min-w-[20px] h-[20px] px-1 rounded-md bg-slate-100 text-slate-600 text-xs font-semibold">3</span>
</div>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="flex-1 flex items-center justify-center gap-1.5 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-medium hover:bg-slate-800 transition-colors">
<iconify-icon height="14" icon="solar:download-linear" width="14"></iconify-icon>
                        Download
                    </button>
<button className="w-8 h-8 flex items-center justify-center bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
<iconify-icon height="14" icon="solar:eye-linear" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-sm opacity-80">
<div className="flex gap-3 items-start">
<div className="w-9 h-9 rounded-lg bg-red-50 text-red-500 flex items-center justify-center shrink-0">
<iconify-icon height="18" icon="solar:danger-triangle-linear" width="18"></iconify-icon>
</div>
<div className="flex flex-col flex-1">
<span className="text-sm font-medium text-slate-900 line-clamp-1">Disaster Mitigation</span>
<span className="text-xs text-red-500 mt-1 font-medium">Failed to generate</span>
</div>
</div>

<div className="mt-3 flex flex-wrap gap-1.5">
<div className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600">
                        Global Forest Watch
                    </div>
</div>
<button className="w-full mt-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg text-xs font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5">
<iconify-icon height="14" icon="solar:refresh-linear" width="14"></iconify-icon>
                    Retry
                </button>
</div>
</div>
</aside>


    </>
  );
}
