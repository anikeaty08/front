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
      

<header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 shrink-0 z-20">

<div className="flex items-center gap-4 w-1/4">
<div className="flex items-center gap-2 text-gray-900 tracking-tighter font-semibold select-none">
<span className="bg-gray-900 text-white w-6 h-6 rounded flex items-center justify-center text-xs">C</span>
<span>CANVAS</span>
</div>
<div className="h-4 w-px bg-gray-200"></div>
<div className="flex flex-col">
<h1 className="text-sm font-medium tracking-tight text-gray-900 truncate max-w-[200px]">UX Research Methodology</h1>
<span className="text-xs text-gray-500">HUM 101 • Section A</span>
</div>
</div>

<div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1 border border-gray-200 shadow-sm">
<button className="w-8 h-8 flex items-center justify-center rounded hover:bg-white hover:shadow-sm text-gray-500 hover:text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-gray-200" title="Previous Student (k)">
<iconify-icon icon="lucide:chevron-left" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<div className="flex flex-col items-center w-48 cursor-pointer group">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Sofia Davis</span>
<span className="w-2 h-2 rounded-full bg-green-500" title="Online now"></span>
</div>
<div className="text-[10px] text-gray-400 font-medium tracking-wide">STUDENT 4 OF 32</div>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded hover:bg-white hover:shadow-sm text-gray-500 hover:text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-gray-200" title="Next Student (j)">
<iconify-icon icon="lucide:chevron-right" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>

<div className="flex items-center justify-end gap-3 w-1/4">
<div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">
<iconify-icon icon="lucide:bar-chart-2" width="14"></iconify-icon>
<span>Avg: 84%</span>
</div>
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon icon="lucide:settings-2" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon icon="lucide:keyboard" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</header>

<main className="flex-1 flex overflow-hidden">

<section className="flex-1 bg-gray-100/50 flex flex-col min-w-0 relative">

<div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg border border-gray-200 px-4 py-2 flex items-center gap-4 z-10 transition-transform hover:scale-105">
<button className="text-gray-500 hover:text-blue-600 tooltip-trigger">
<iconify-icon icon="lucide:mouse-pointer-2" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<div className="w-px h-4 bg-gray-200"></div>
<button className="text-gray-500 hover:text-blue-600">
<iconify-icon icon="lucide:highlighter" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="text-gray-500 hover:text-blue-600">
<iconify-icon icon="lucide:message-square-plus" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="text-gray-500 hover:text-blue-600">
<iconify-icon icon="lucide:type" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<div className="w-px h-4 bg-gray-200"></div>
<button className="text-gray-500 hover:text-blue-600">
<iconify-icon icon="lucide:zoom-in" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto p-8 flex justify-center bg-dots-pattern">

<div className="max-w-3xl w-full space-y-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded border border-blue-100 font-medium">Submitted Oct 12, 10:42 AM</span>
<span className="text-xs text-gray-400 flex items-center gap-1">
<iconify-icon icon="lucide:file-text" width="12"></iconify-icon>
                                research_final_v2.pdf
                            </span>
</div>
<button className="text-xs text-blue-600 hover:underline">Download Original</button>
</div>

<div className="bg-white shadow-md border border-gray-200 rounded-sm min-h-[1000px] p-12 text-gray-800 relative">
<h2 className="text-2xl font-bold tracking-tight mb-2">The Impact of Micro-interactions on User Retention</h2>
<p className="text-sm text-gray-500 mb-8">Sofia Davis • HUM 101 • Oct 12, 2023</p>
<div className="space-y-4 text-base leading-relaxed text-gray-600">
<p><strong>Abstract.</strong> In the modern digital landscape, user retention is often dictated not by the macro-architecture of an application, but by the subtle, almost invisible moments of interaction. This paper explores the psychological impact of feedback loops...</p>
<p>The methodology employed involves a heuristic analysis of three major SaaS platforms: Linear, Notion, and Slack. By isolating specific animation timings and haptic feedback responses, we can correlate "delight" metrics with session duration.</p>

<p>One critical finding suggests that <span className="bg-yellow-200/50 cursor-pointer border-b-2 border-yellow-300">latency perception is reduced by 40% when a skeleton loader is used</span> compared to a standard spinner. This aligns with Jakob Nielsen's guidelines on perceived performance.</p>

<div className="absolute right-0 top-[280px] translate-x-1/2 bg-white shadow-lg border border-gray-200 rounded-lg p-3 w-64 z-10">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-semibold text-gray-900">Instructor</span>
<span className="text-[10px] text-gray-400">Just now</span>
</div>
<p className="text-xs text-gray-600">Excellent reference to Nielsen. Consider adding a citation for the specific study year.</p>
</div>
<p className="mt-4">Furthermore, the "Labor Illusion" effect demonstrates that users value results more when they perceive the system is working hard for them, even if the result is instantaneous.</p>
<div className="h-64 bg-gray-50 rounded border border-dashed border-gray-200 flex items-center justify-center mt-8">
<span className="text-sm text-gray-400 italic">[Chart: Retention vs Animation Duration]</span>
</div>
</div>
</div>
</div>
</div>
</section>

<aside className="w-[400px] bg-white border-l border-gray-200 flex flex-col shadow-xl z-20">

<div className="p-5 border-b border-gray-100 bg-white">
<div className="flex items-end justify-between mb-2">
<label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Total Score</label>
<span className="text-[10px] font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">ON TIME</span>
</div>
<div className="flex items-baseline gap-2">
<div className="relative group">
<input className="text-4xl font-semibold tracking-tighter text-gray-900 w-24 bg-transparent border-b-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors p-0 placeholder-gray-200" placeholder="--" type="number" value="92"/>
<span className="absolute -right-3 top-2 opacity-0 group-hover:opacity-100 text-gray-300 pointer-events-none">
<iconify-icon icon="lucide:pencil" width="12"></iconify-icon>
</span>
</div>
<span className="text-xl text-gray-400 font-light">/ 100</span>
</div>
</div>

<div className="flex-1 overflow-y-auto p-5 space-y-6">

<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-gray-900">Rubric</h3>
<span className="text-xs text-gray-400">3 Criteria</span>
</div>

<div className="border border-blue-100 bg-blue-50/30 rounded-lg p-3 transition-all">
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="text-sm font-medium text-blue-900">Thesis &amp; Argument</h4>
<p className="text-xs text-blue-700/70 mt-0.5 line-clamp-1">Clarity of the central argument...</p>
</div>
<span className="text-sm font-semibold text-blue-700">35<span className="text-blue-300 font-normal">/40</span></span>
</div>

<div className="flex gap-1 pt-2">
<button className="flex-1 h-8 rounded border border-gray-200 bg-white text-xs font-medium text-gray-500 hover:border-gray-300 transition-colors">0</button>
<button className="flex-1 h-8 rounded border border-gray-200 bg-white text-xs font-medium text-gray-500 hover:border-gray-300 transition-colors">10</button>
<button className="flex-1 h-8 rounded border border-gray-200 bg-white text-xs font-medium text-gray-500 hover:border-gray-300 transition-colors">20</button>
<button className="flex-1 h-8 rounded border border-gray-200 bg-white text-xs font-medium text-gray-500 hover:border-gray-300 transition-colors">30</button>
<button className="flex-1 h-8 rounded border border-blue-500 bg-blue-600 text-xs font-medium text-white shadow-sm ring-2 ring-blue-100 ring-offset-1">35</button>
<button className="flex-1 h-8 rounded border border-gray-200 bg-white text-xs font-medium text-gray-500 hover:border-gray-300 transition-colors">40</button>
</div>
</div>

<div className="border border-gray-200 rounded-lg p-3 hover:border-gray-300 cursor-pointer group transition-all">
<div className="flex justify-between items-center">
<div>
<h4 className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Evidence &amp; Analysis</h4>
</div>
<span className="text-sm font-medium text-gray-400 group-hover:text-gray-600">--/30</span>
</div>
</div>

<div className="border border-gray-200 rounded-lg p-3 hover:border-gray-300 cursor-pointer group transition-all">
<div className="flex justify-between items-center">
<div>
<h4 className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Formatting (APA)</h4>
</div>
<span className="text-sm font-medium text-gray-400 group-hover:text-gray-600">--/30</span>
</div>
</div>
</div>

<div className="space-y-3 pt-2">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-gray-900">Feedback</h3>
<button className="text-xs text-blue-600 hover:text-blue-700 font-medium">Use Library</button>
</div>

<div className="border border-gray-200 rounded-lg shadow-sm bg-white focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all">

<div className="flex items-center gap-1 p-2 border-b border-gray-50">
<button className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-700"><iconify-icon icon="lucide:bold" width="14"></iconify-icon></button>
<button className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-700"><iconify-icon icon="lucide:italic" width="14"></iconify-icon></button>
<button className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-700"><iconify-icon icon="lucide:list" width="14"></iconify-icon></button>
<div className="w-px h-3 bg-gray-200 mx-1"></div>
<button className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-700" title="Record Audio"><iconify-icon icon="lucide:mic" width="14"></iconify-icon></button>
<button className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-700" title="Record Video"><iconify-icon icon="lucide:video" width="14"></iconify-icon></button>
<button className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-700" title="Attach File"><iconify-icon icon="lucide:paperclip" width="14"></iconify-icon></button>
</div>
<textarea className="w-full p-3 text-sm text-gray-800 placeholder-gray-400 resize-none focus:outline-none min-h-[120px]" placeholder="Write feedback for Sofia..."></textarea>
</div>

<div className="flex flex-wrap gap-2">
<button className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-2 py-1 rounded-full hover:bg-gray-100 hover:border-gray-300 transition-colors">Great analysis</button>
<button className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-2 py-1 rounded-full hover:bg-gray-100 hover:border-gray-300 transition-colors">Check citations</button>
<button className="text-xs bg-white border border-dashed border-gray-300 text-gray-400 px-2 py-1 rounded-full hover:text-gray-600 hover:border-gray-400 transition-colors">+ Add</button>
</div>
</div>
</div>

<div className="p-4 border-t border-gray-200 bg-gray-50/50 backdrop-blur-sm z-30">
<div className="flex items-center justify-between mb-3">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative inline-flex items-center h-4 rounded-full w-8 bg-blue-600 transition-colors">
<span className="inline-block w-3 h-3 transform translate-x-4 bg-white rounded-full transition-transform"></span>
</div>
<span className="text-xs font-medium text-gray-600 group-hover:text-gray-900 select-none">Auto-advance</span>
</label>
<button className="text-xs text-gray-500 hover:text-red-600 font-medium">Reassign</button>
</div>
<div className="grid grid-cols-4 gap-2">
<button className="col-span-3 bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm py-2.5 px-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 active:transform active:scale-[0.98]">
<span>Submit Grade</span>
<div className="w-px h-3 bg-gray-700"></div>
<span className="text-gray-400 text-xs font-normal">⌘ Enter</span>
</button>
<button className="col-span-1 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium text-sm rounded-lg shadow-sm transition-colors flex items-center justify-center">
<iconify-icon icon="lucide:chevron-right" width="20"></iconify-icon>
</button>
</div>
</div>
</aside>
</main>

    </>
  );
}
