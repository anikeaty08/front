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
      

<header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 w-full">
<div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-zinc-950">
<iconify-icon icon="lucide:orbit" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-widest text-zinc-100 uppercase">Orbit</span>
</div>

<div className="hidden sm:flex bg-zinc-900 p-1 rounded-lg border border-zinc-800/50">
<button className="px-4 py-1 text-xs font-medium text-zinc-100 bg-zinc-800 rounded-md shadow-sm transition-all">Today</button>
<button className="px-4 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-all">This Week</button>
</div>

<div className="flex items-center gap-6">

<div className="flex items-center gap-2 group cursor-default">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</div>
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500">Next Deadline</span>
<span className="text-xs font-mono text-zinc-200">18h 42m <span className="text-zinc-600">remaining</span></span>
</div>
</div>
<div className="h-8 w-px bg-zinc-900"></div>

<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="lucide:brain-circuit" strokeWidth="1.5" width="16"></iconify-icon>
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500">Cognitive Load</span>
<span className="text-xs text-zinc-200">2 Heavy • 1 Light</span>
</div>
</div>
</div>
</div>
</header>

<main className="flex-1 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-10">

<div className="lg:col-span-8 flex flex-col gap-6">
<div className="flex items-center justify-between mb-2">
<h2 className="text-xl font-semibold tracking-tight text-zinc-100">Priority Stack</h2>
<span className="text-xs text-zinc-600 font-mono">3 UNITS PENDING</span>
</div>

<div className="group relative bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 rounded-xl overflow-hidden">

<div className="absolute top-0 left-0 w-1 h-full bg-orange-500/80"></div>
<div className="p-6 flex flex-col sm:flex-row gap-6">

<div className="flex-1 space-y-3">
<div className="flex items-center gap-2 text-xs font-medium text-orange-400">
<iconify-icon icon="lucide:flame" strokeWidth="1.5" width="14"></iconify-icon>
<span>CRITICAL • ASSIGNMENT</span>
</div>
<div>
<h3 className="text-lg font-semibold text-zinc-100 tracking-tight">Advanced Calculus III: Vector Fields</h3>
<p className="text-sm text-zinc-500 mt-1">Problem Set 4: Gradient, Divergence, and Curl.</p>
</div>
<div className="flex flex-wrap gap-4 mt-2">
<div className="flex items-center gap-1.5 text-xs text-zinc-400 bg-zinc-900/50 px-2 py-1 rounded border border-zinc-800">
<iconify-icon icon="lucide:scale" strokeWidth="1.5" width="12"></iconify-icon>
<span>15% of Final Grade</span>
</div>
<div className="flex items-center gap-1.5 text-xs text-zinc-400 bg-zinc-900/50 px-2 py-1 rounded border border-zinc-800">
<iconify-icon icon="lucide:timer" strokeWidth="1.5" width="12"></iconify-icon>
<span>~2.5h Effort</span>
</div>
</div>
</div>

<div className="flex items-center justify-end sm:border-l sm:border-zinc-800 sm:pl-6">
<button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-100 hover:bg-white text-zinc-950 px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-zinc-900/20">
<iconify-icon icon="lucide:pen-tool" strokeWidth="1.5" width="16"></iconify-icon>
                            Submit
                        </button>
</div>
</div>
</div>

<div className="group relative bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 rounded-xl overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-blue-500/80"></div>
<div className="p-6 flex flex-col sm:flex-row gap-6">
<div className="flex-1 space-y-3">
<div className="flex items-center gap-2 text-xs font-medium text-blue-400">
<iconify-icon icon="lucide:book-open" strokeWidth="1.5" width="14"></iconify-icon>
<span>READING BLOCK</span>
</div>
<div>
<h3 className="text-lg font-semibold text-zinc-100 tracking-tight">Cognitive Psychology</h3>
<p className="text-sm text-zinc-500 mt-1">Chapter 4: Memory encoding processes and retrieval failure.</p>
</div>
<div className="flex flex-wrap gap-4 mt-2">
<div className="flex items-center gap-1.5 text-xs text-zinc-400 bg-zinc-900/50 px-2 py-1 rounded border border-zinc-800">
<iconify-icon icon="lucide:target" strokeWidth="1.5" width="12"></iconify-icon>
<span>Exam Relevance: High</span>
</div>
<div className="flex items-center gap-1.5 text-xs text-zinc-400 bg-zinc-900/50 px-2 py-1 rounded border border-zinc-800">
<iconify-icon icon="lucide:timer" strokeWidth="1.5" width="12"></iconify-icon>
<span>~45m Effort</span>
</div>
</div>
</div>
<div className="flex items-center justify-end sm:border-l sm:border-zinc-800 sm:pl-6">
<button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors border border-zinc-700">
<iconify-icon icon="lucide:glasses" strokeWidth="1.5" width="16"></iconify-icon>
                            Understand
                        </button>
</div>
</div>
</div>

<div className="group relative bg-zinc-900/20 border border-zinc-800/60 hover:border-zinc-700 transition-all duration-300 rounded-xl overflow-hidden opacity-90 hover:opacity-100">
<div className="absolute top-0 left-0 w-1 h-full bg-zinc-600"></div>
<div className="p-5 flex flex-col sm:flex-row gap-6 items-center">
<div className="flex-1 space-y-1">
<div className="flex items-center gap-2 text-xs font-medium text-zinc-500 mb-1">
<iconify-icon icon="lucide:alert-circle" strokeWidth="1.5" width="14"></iconify-icon>
<span>FEEDBACK REVIEW</span>
</div>
<h3 className="text-base font-medium text-zinc-300">Macroeconomics Midterm</h3>
<p className="text-xs text-zinc-600">Scores released. Class average was 78%. Check your weak areas.</p>
</div>
<button className="group-hover:translate-x-1 transition-transform text-sm text-zinc-400 hover:text-zinc-100 flex items-center gap-2 pr-2">
                        Review
                        <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="py-8 text-center border-t border-dashed border-zinc-800/50 mt-4">
<p className="text-xs text-zinc-600">"Momentum is everything. Clear the stack."</p>
</div>
</div>

<div className="lg:col-span-4 pl-0 lg:pl-6 border-l border-zinc-900/0 lg:border-zinc-800/50">
<div className="sticky top-24">
<h2 className="text-sm font-semibold tracking-tight text-zinc-400 uppercase mb-6 flex items-center gap-2">
<iconify-icon icon="lucide:activity" strokeWidth="1.5" width="16"></iconify-icon>
                    Course Pulse
                </h2>
<div className="space-y-4">

<details className="group open:bg-zinc-900/30 rounded-lg border border-transparent open:border-zinc-800 transition-all duration-200">
<summary className="list-none flex items-center justify-between p-3 cursor-pointer select-none rounded-lg hover:bg-zinc-900/50">
<div className="flex items-center gap-3">

<div className="relative flex items-center justify-center w-2 h-10">
<div className="w-1 h-full bg-zinc-800 rounded-full overflow-hidden">
<div className="w-full h-[80%] bg-rose-500 rounded-full absolute bottom-0"></div>
</div>
</div>
<div>
<div className="text-sm font-medium text-zinc-200">Calculus III</div>
<div className="text-[10px] text-zinc-500 font-mono">HIGH LOAD</div>
</div>
</div>
<iconify-icon className="text-zinc-600 group-open:rotate-180 transition-transform duration-200" icon="lucide:chevron-down" width="16"></iconify-icon>
</summary>
<div className="px-4 pb-4 pt-1 space-y-3">
<div className="flex items-start gap-2 text-xs text-zinc-400">
<iconify-icon className="mt-0.5 text-zinc-500" icon="lucide:file-diff" width="14"></iconify-icon>
<span>2 new announcements posted since yesterday.</span>
</div>
<div className="flex items-center gap-2 text-xs text-rose-400/80 bg-rose-950/20 p-2 rounded border border-rose-900/20">
<iconify-icon icon="lucide:calendar-clock" width="14"></iconify-icon>
<span>Exam in 4 days</span>
</div>
</div>
</details>

<details className="group open:bg-zinc-900/30 rounded-lg border border-transparent open:border-zinc-800 transition-all duration-200">
<summary className="list-none flex items-center justify-between p-3 cursor-pointer select-none rounded-lg hover:bg-zinc-900/50">
<div className="flex items-center gap-3">
<div className="relative flex items-center justify-center w-2 h-10">
<div className="w-1 h-full bg-zinc-800 rounded-full overflow-hidden">
<div className="w-full h-[40%] bg-amber-500 rounded-full absolute bottom-0"></div>
</div>
</div>
<div>
<div className="text-sm font-medium text-zinc-200">History</div>
<div className="text-[10px] text-zinc-500 font-mono">MODERATE</div>
</div>
</div>
<iconify-icon className="text-zinc-600 group-open:rotate-180 transition-transform duration-200" icon="lucide:chevron-down" width="16"></iconify-icon>
</summary>
<div className="px-4 pb-4 pt-1">
<div className="flex items-start gap-2 text-xs text-zinc-400">
<iconify-icon className="mt-0.5 text-zinc-500" icon="lucide:eye-off" width="14"></iconify-icon>
<span>Quiet. No unread changes.</span>
</div>
</div>
</details>

<details className="group open:bg-zinc-900/30 rounded-lg border border-transparent open:border-zinc-800 transition-all duration-200">
<summary className="list-none flex items-center justify-between p-3 cursor-pointer select-none rounded-lg hover:bg-zinc-900/50">
<div className="flex items-center gap-3">
<div className="relative flex items-center justify-center w-2 h-10">
<div className="w-1 h-full bg-zinc-800 rounded-full overflow-hidden">
<div className="w-full h-[10%] bg-emerald-500 rounded-full absolute bottom-0"></div>
</div>
</div>
<div>
<div className="text-sm font-medium text-zinc-200">Comp Sci 101</div>
<div className="text-[10px] text-zinc-500 font-mono">STABLE</div>
</div>
</div>
<iconify-icon className="text-zinc-600 group-open:rotate-180 transition-transform duration-200" icon="lucide:chevron-down" width="16"></iconify-icon>
</summary>
<div className="px-4 pb-4 pt-1 space-y-3">
<div className="flex items-center gap-2 text-xs text-emerald-400/80 bg-emerald-950/20 p-2 rounded border border-emerald-900/20">
<iconify-icon icon="lucide:check-circle-2" width="14"></iconify-icon>
<span>All assignments cleared</span>
</div>
</div>
</details>

<details className="group open:bg-zinc-900/30 rounded-lg border border-transparent open:border-zinc-800 transition-all duration-200">
<summary className="list-none flex items-center justify-between p-3 cursor-pointer select-none rounded-lg hover:bg-zinc-900/50">
<div className="flex items-center gap-3">
<div className="relative flex items-center justify-center w-2 h-10">
<div className="w-1 h-full bg-zinc-800 rounded-full overflow-hidden">
<div className="w-full h-[20%] bg-emerald-500 rounded-full absolute bottom-0"></div>
</div>
</div>
<div>
<div className="text-sm font-medium text-zinc-200">Physics Lab</div>
<div className="text-[10px] text-zinc-500 font-mono">STABLE</div>
</div>
</div>
<iconify-icon className="text-zinc-600 group-open:rotate-180 transition-transform duration-200" icon="lucide:chevron-down" width="16"></iconify-icon>
</summary>
<div className="px-4 pb-4 pt-1">
<div className="flex items-start gap-2 text-xs text-zinc-400">
<iconify-icon className="mt-0.5 text-zinc-500" icon="lucide:flask-conical" width="14"></iconify-icon>
<span>Next lab: Thursday 2PM</span>
</div>
</div>
</details>
</div>
</div>
</div>
</main>

<div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none z-10"></div>

    </>
  );
}
