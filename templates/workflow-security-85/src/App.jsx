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
            attrs: { 'stroke-width': 1.5 }
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
      

<aside className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-5 gap-6 shrink-0 z-20 hidden sm:flex relative">
<div className="w-8 h-8 bg-gray-900 rounded-md flex items-center justify-center text-white mb-2">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
</div>
<nav className="flex flex-col gap-5 text-gray-400 w-full items-center">
<button className="p-2 text-gray-900 bg-gray-100 rounded-lg transition-colors"><i className="w-5 h-5" data-lucide="layout-dashboard"></i></button>
<button className="p-2 hover:text-gray-900 transition-colors"><i className="w-5 h-5" data-lucide="git-branch"></i></button>
<button className="p-2 hover:text-gray-900 transition-colors"><i className="w-5 h-5" data-lucide="file-code"></i></button>
<button className="p-2 hover:text-gray-900 transition-colors"><i className="w-5 h-5" data-lucide="key"></i></button>
<button className="p-2 hover:text-gray-900 transition-colors"><i className="w-5 h-5" data-lucide="shield"></i></button>
<button className="p-2 hover:text-gray-900 transition-colors"><i className="w-5 h-5" data-lucide="users"></i></button>
<button className="p-2 hover:text-gray-900 transition-colors"><i className="w-5 h-5" data-lucide="settings"></i></button>
</nav>
<div className="mt-auto flex flex-col gap-4 items-center w-full">
<button className="p-2 text-gray-400 hover:text-gray-900 transition-colors"><i className="w-5 h-5" data-lucide="arrow-left-to-line"></i></button>
<div className="w-8 h-8 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center text-xs font-medium text-gray-600 mb-2">D</div>
</div>
</aside>

<div className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="bg-white/80 backdrop-blur-md border-b border-gray-200 h-14 flex items-center justify-between px-6 shrink-0 sticky top-0 z-10">
<div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
<div className="flex items-center gap-2 bg-gray-100/50 border border-gray-200 rounded-full px-3 py-1.5 text-sm text-gray-600 font-normal whitespace-nowrap">
<i className="w-4 h-4 text-cyan-600" data-lucide="user"></i>
<span>GitHub Account: <span className="font-medium text-gray-900">SangamSecureDev</span></span>
<button className="ml-1 text-gray-400 hover:text-gray-900"><i className="w-3.5 h-3.5" data-lucide="x"></i></button>
</div>
<div className="flex items-center gap-2 bg-gray-100/50 border border-gray-200 rounded-full px-3 py-1.5 text-sm text-gray-600 font-normal whitespace-nowrap">
<i className="w-4 h-4 text-cyan-600" data-lucide="folder-git-2"></i>
<span>Repository: <span className="font-medium text-gray-900">awesome-docker</span></span>
<button className="ml-1 text-gray-400 hover:text-gray-900"><i className="w-3.5 h-3.5" data-lucide="x"></i></button>
</div>
<div className="flex items-center gap-2 bg-gray-100/50 border border-gray-200 rounded-full px-3 py-1.5 text-sm text-gray-600 font-normal whitespace-nowrap">
<i className="w-4 h-4 text-cyan-600" data-lucide="git-branch"></i>
<span>Branch: <span className="font-medium text-gray-900">master</span></span>
<button className="ml-1 text-gray-400 hover:text-gray-900"><i className="w-3.5 h-3.5" data-lucide="x"></i></button>
</div>
</div>
<div className="flex items-center gap-2 ml-4 shrink-0">
<button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors">
<i className="w-4 h-4" data-lucide="sun"></i>
</button>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors">
<i className="w-4 h-4" data-lucide="moon"></i>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto p-6 lg:p-8 flex flex-col gap-8 w-full max-w-[1600px] mx-auto">

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Workflow</h1>
<div className="flex items-center gap-2 mt-2 text-sm text-gray-500 font-normal">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>Last scanned: March 18, 2026 at 09:43:06 PM</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="w-9 h-9 rounded-lg border border-gray-200 bg-white text-gray-500 flex items-center justify-center hover:bg-gray-50 transition-colors">
<i className="w-4 h-4" data-lucide="refresh-cw"></i>
</button>
<button className="w-9 h-9 rounded-lg border border-gray-200 bg-white text-gray-500 flex items-center justify-center hover:bg-gray-50 transition-colors">
<i className="w-4 h-4" data-lucide="settings-2"></i>
</button>
</div>
</div>

<section className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-5">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-md bg-gray-50 border border-gray-100 flex items-center justify-center">
<i className="w-4 h-4 text-cyan-600" data-lucide="folder-code"></i>
</div>
<h2 className="text-base font-medium text-gray-900">Repository Overview</h2>
<span className="text-sm text-gray-500 ml-2 font-normal">SangamSecureDev/awesome-docker <span className="mx-1.5 text-gray-300">/</span> master</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 pt-2 border-t border-gray-50">
<div className="flex flex-col gap-1.5">
<span className="text-xs text-gray-400 font-normal">Last Commit</span>
<span className="text-sm font-medium text-gray-900 truncate">Add Segspec To Securit...</span>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-xs text-gray-400 font-normal">Commit Author</span>
<div className="flex items-center gap-1.5 text-sm font-medium text-gray-900">
<span className="w-4 h-4 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center text-[10px]">D</span>
                            Dor Morgenstern
                        </div>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-xs text-gray-400 font-normal">Scan Type</span>
<span className="text-sm font-medium text-gray-900">All</span>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-xs text-gray-400 font-normal">Event Type</span>
<span className="text-sm font-medium text-gray-900">Manual</span>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-xs text-gray-400 font-normal">Duration</span>
<div className="flex items-center gap-1.5 text-sm font-medium text-gray-900">
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="clock"></i>
                            1.25s
                        </div>
</div>
</div>
</section>

<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4 hover:border-gray-300 transition-colors">
<div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-blue-500" data-lucide="file-code"></i>
</div>
<div className="flex flex-col">
<span className="text-2xl font-medium tracking-tight text-gray-900 leading-none mb-1.5">2</span>
<span className="text-sm text-gray-500 font-normal">Files Scanned</span>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4 hover:border-gray-300 transition-colors">
<div className="w-12 h-12 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-orange-500" data-lucide="alert-triangle"></i>
</div>
<div className="flex flex-col">
<span className="text-2xl font-medium tracking-tight text-gray-900 leading-none mb-1.5">2</span>
<span className="text-sm text-gray-500 font-normal">Total Issues</span>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4 hover:border-gray-300 transition-colors">
<div className="w-12 h-12 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-amber-500" data-lucide="alert-circle"></i>
</div>
<div className="flex flex-col">
<span className="text-2xl font-medium tracking-tight text-gray-900 leading-none mb-1.5">1</span>
<span className="text-sm text-gray-500 font-normal">Medium Issues</span>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4 hover:border-gray-300 transition-colors">
<div className="w-12 h-12 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-emerald-500" data-lucide="shield-check"></i>
</div>
<div className="flex flex-col">
<span className="text-2xl font-medium tracking-tight text-gray-900 leading-none mb-1.5">1</span>
<span className="text-sm text-gray-500 font-normal">Low Issues</span>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-4">

<div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col">
<h3 className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-6">Security Score</h3>
<div className="flex-1 flex flex-col items-center justify-center relative min-h-[180px]">
<div className="relative w-36 h-36">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="42" stroke="#F3F4F6" strokeWidth="8"></circle>
<circle className="donut-fill" cx="50" cy="50" fill="none" r="42" stroke="#10B981" stroke-dasharray="264" stroke-dashoffset="5.2" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-4xl font-medium tracking-tight text-gray-900">98</span>
<span className="text-sm text-emerald-500 font-medium mt-0.5">Good</span>
</div>
</div>
</div>
<div className="flex justify-center gap-2 mt-4">
<span className="inline-flex items-center px-2 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-medium border border-amber-100">Medium 1</span>
<span className="inline-flex items-center px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100">Low 1</span>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col">
<h3 className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-6">Issues by Severity</h3>
<div className="flex-1 flex min-h-[180px] relative">

<div className="absolute left-0 top-0 bottom-6 w-6 flex flex-col justify-between text-xs text-gray-400 font-normal">
<span className="leading-none">1</span>
<span className="leading-none">0.5</span>
<span className="leading-none">0</span>
</div>

<div className="flex-1 ml-8 h-full relative border-b border-gray-100 pb-6">

<div className="absolute inset-0 bottom-6 flex flex-col justify-between">
<div className="w-full border-t border-dashed border-gray-100"></div>
<div className="w-full border-t border-dashed border-gray-100"></div>
<div className="w-full border-t border-dashed border-gray-100"></div>
</div>

<div className="absolute inset-x-0 bottom-6 top-0 flex items-end justify-around px-2 z-10">
<div className="relative w-12 h-full flex items-end group cursor-pointer">
<div className="w-full bg-orange-500 rounded-t-sm h-full bar-grow opacity-90 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="relative w-12 h-full flex items-end group cursor-pointer">
<div className="w-full bg-amber-400 rounded-t-sm h-full bar-grow opacity-90 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="relative w-12 h-full flex items-end">
<div className="w-full h-0"></div>
</div>
<div className="relative w-12 h-full flex items-end">
<div className="w-full h-0"></div>
</div>
</div>
</div>

<div className="absolute left-8 right-0 bottom-0 flex justify-around px-2 text-xs text-gray-400 font-normal">
<span className="w-12 text-center">Medium</span>
<span className="w-12 text-center">Low</span>
<span className="w-12 text-center">High</span>
<span className="w-12 text-center">Critical</span>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col">
<h3 className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-6">Policy Distribution</h3>
<div className="flex-1 flex items-center justify-between min-h-[180px]">

<div className="relative w-[120px] h-[120px] shrink-0">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">
<circle cx="18" cy="18" fill="none" r="14" stroke="#F3F4F6" strokeWidth="6"></circle>
<circle className="donut-fill" cx="18" cy="18" fill="none" r="14" stroke="#06B6D4" stroke-dasharray="43.98 87.96" stroke-dashoffset="0" strokeWidth="6"></circle>
<circle className="donut-fill" cx="18" cy="18" fill="none" r="14" stroke="#8B5CF6" stroke-dasharray="43.98 87.96" stroke-dashoffset="-43.98" strokeWidth="6"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-2xl font-medium tracking-tight text-gray-900">2</span>
<span className="text-xs text-gray-400">Total</span>
</div>
</div>

<div className="flex flex-col gap-4 w-full pl-8">
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-2.5">
<div className="w-2.5 h-2.5 rounded-full bg-cyan-500"></div>
<span className="text-sm text-gray-600 font-normal group-hover:text-gray-900 transition-colors">Gha Sec012</span>
</div>
<span className="text-sm font-medium text-gray-900">1</span>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-2.5">
<div className="w-2.5 h-2.5 rounded-full bg-violet-500"></div>
<span className="text-sm text-gray-600 font-normal group-hover:text-gray-900 transition-colors">Gha Sec003</span>
</div>
<span className="text-sm font-medium text-gray-900">1</span>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-4 mb-8">
<div className="flex items-center justify-between">
<h2 className="text-sm font-medium text-gray-900">Security Findings</h2>
<button className="text-sm text-gray-500 hover:text-gray-900 font-normal flex items-center gap-1 transition-colors">
                        Show Less <i className="w-4 h-4" data-lucide="chevron-up"></i>
</button>
</div>
<div className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col">

<div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-50/30">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100">
<i className="w-4 h-4" data-lucide="file-text"></i>
</div>
<span className="text-sm font-medium text-gray-900">Workflow Findings</span>
<span className="text-xs text-gray-500 bg-white border border-gray-200 px-2 py-0.5 rounded-full ml-2">2 Files</span>
</div>
<div className="relative w-full sm:w-64">
<i className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="search"></i>
<input className="w-full h-9 pl-9 pr-4 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300 transition-shadow" placeholder="Search..." type="text"/>
</div>
</div>

<div className="flex flex-col divide-y divide-gray-100">

<div className="p-4 hover:bg-gray-50 transition-colors flex items-center justify-between group cursor-pointer">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-gray-400 mt-0.5 group-hover:text-cyan-600 transition-colors" data-lucide="file-code"></i>
<div className="flex flex-col gap-1.5">
<span className="text-sm font-normal text-gray-900 font-mono">.github/workflows/pull_request.yml</span>
<div className="flex items-center gap-2">
<span className="inline-flex items-center px-2 py-0.5 rounded bg-amber-50 text-amber-700 text-xs font-medium border border-amber-100">
                                            1 Medium
                                        </span>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-sm text-gray-500 font-normal">1 Issue</span>
<i className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors" data-lucide="chevron-right"></i>
</div>
</div>

<div className="p-4 hover:bg-gray-50 transition-colors flex items-center justify-between group cursor-pointer">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-gray-400 mt-0.5 group-hover:text-cyan-600 transition-colors" data-lucide="file-code"></i>
<div className="flex flex-col gap-1.5">
<span className="text-sm font-normal text-gray-900 font-mono">.github/workflows/health_report.yml</span>
<div className="flex items-center gap-2">
<span className="inline-flex items-center px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100">
                                            1 Low
                                        </span>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-sm text-gray-500 font-normal">1 Issue</span>
<i className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors" data-lucide="chevron-right"></i>
</div>
</div>
</div>
</div>
</section>
</main>
</div>



    </>
  );
}
