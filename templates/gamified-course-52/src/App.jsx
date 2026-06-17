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



        lucide.createIcons();
    
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
      

<header className="h-14 shrink-0 border-b border-white/5 flex items-center justify-between px-4 bg-zinc-950 relative z-10">
<div className="flex items-center gap-3">

<div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-zinc-100">
<i className="w-5 h-5" data-lucide="square-terminal" strokeWidth="1.5"></i>
</div>

<nav className="flex items-center gap-2 text-sm">
<a className="hover:text-zinc-200 transition-colors" href="#">Kita</a>
<i className="w-4 h-4 text-zinc-600" data-lucide="chevron-right" strokeWidth="1.5"></i>
<a className="hover:text-zinc-200 transition-colors" href="#">Courses</a>
<i className="w-4 h-4 text-zinc-600" data-lucide="chevron-right" strokeWidth="1.5"></i>
<a className="hover:text-zinc-200 transition-colors truncate max-w-[200px]" href="#">Capture the flag quest: Code of Ages</a>
<i className="w-4 h-4 text-zinc-600" data-lucide="chevron-right" strokeWidth="1.5"></i>
<span className="text-zinc-100">Your quest starts here...</span>
</nav>
</div>
<div className="flex items-center gap-6">

<div className="flex items-center -space-x-2">
<div className="w-7 h-7 rounded-full bg-indigo-900 border-2 border-zinc-950 flex items-center justify-center text-xs font-medium text-indigo-200 z-30">AJ</div>
<div className="w-7 h-7 rounded-full bg-emerald-900 border-2 border-zinc-950 flex items-center justify-center text-xs font-medium text-emerald-200 z-20">L</div>
<div className="w-7 h-7 rounded-full bg-zinc-800 border-2 border-zinc-950 flex items-center justify-center text-xs font-medium text-zinc-300 z-10">+2</div>
</div>

<button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/5 text-sm text-zinc-200 transition-colors">
                Student Mode
                <i className="w-4 h-4 text-zinc-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<div className="w-14 shrink-0 border-r border-white/5 bg-zinc-950 flex flex-col items-center py-4 justify-between">
<div className="flex flex-col gap-4 w-full items-center">
<button className="w-10 h-10 rounded-lg flex items-center justify-center text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-colors">
<i className="w-5 h-5" data-lucide="sidebar" strokeWidth="1.5"></i>
</button>
<button className="w-10 h-10 rounded-lg flex items-center justify-center text-indigo-400 bg-indigo-500/10 transition-colors relative">
<i className="w-5 h-5" data-lucide="git-merge" strokeWidth="1.5"></i>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-indigo-500 rounded-r-full"></div>
</button>
<button className="w-10 h-10 rounded-lg flex items-center justify-center text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-colors">
<i className="w-5 h-5" data-lucide="users" strokeWidth="1.5"></i>
</button>
<button className="w-10 h-10 rounded-lg flex items-center justify-center text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-colors">
<i className="w-5 h-5" data-lucide="check-square" strokeWidth="1.5"></i>
</button>
</div>
<button className="w-8 h-8 rounded-full bg-orange-900/50 border border-orange-700/30 flex items-center justify-center text-sm font-medium text-orange-300">
                J
            </button>
</div>

<div className="w-[320px] shrink-0 border-r border-white/5 bg-zinc-900/30 flex flex-col">
<div className="p-4 border-b border-white/5">
<h2 className="text-sm font-medium text-zinc-200">Capture the flag quest: Code of Ages</h2>
</div>
<div className="flex-1 overflow-y-auto py-3 px-2 custom-scrollbar">

<div className="mb-6">
<div className="flex items-center justify-between px-2 py-1.5 group cursor-pointer">
<span className="text-sm font-medium text-zinc-100">01 Your quest starts here...</span>
<button className="opacity-0 group-hover:opacity-100 text-zinc-500 hover:text-zinc-300 transition-opacity">
<i className="w-4 h-4" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</button>
</div>
<div className="mt-1 space-y-0.5">

<div className="flex items-center gap-3 px-2 py-2 rounded-md bg-white/10 text-zinc-100 cursor-pointer">
<i className="w-4 h-4 text-indigo-400 shrink-0" data-lucide="circle-dot" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-zinc-400 shrink-0" data-lucide="book" strokeWidth="1.5"></i>
<span className="text-sm truncate">Where is Charlie</span>
</div>

<div className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 text-zinc-400 hover:text-zinc-200 cursor-pointer transition-colors">
<i className="w-4 h-4 text-zinc-600 shrink-0" data-lucide="circle" strokeWidth="1.5"></i>
<i className="w-4 h-4 shrink-0" data-lucide="file-text" strokeWidth="1.5"></i>
<span className="text-sm truncate">Things are getting messy</span>
</div>
<div className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 text-zinc-400 hover:text-zinc-200 cursor-pointer transition-colors">
<i className="w-4 h-4 text-zinc-600 shrink-0" data-lucide="circle" strokeWidth="1.5"></i>
<i className="w-4 h-4 shrink-0" data-lucide="flag" strokeWidth="1.5"></i>
<span className="text-sm truncate">Guess Charlie's password</span>
</div>
<div className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 text-zinc-400 hover:text-zinc-200 cursor-pointer transition-colors">
<i className="w-4 h-4 text-zinc-600 shrink-0" data-lucide="circle" strokeWidth="1.5"></i>
<i className="w-4 h-4 shrink-0" data-lucide="message-square" strokeWidth="1.5"></i>
<span className="text-sm truncate">Feedback</span>
</div>
<div className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 text-zinc-400 hover:text-zinc-200 cursor-pointer transition-colors">
<i className="w-4 h-4 text-zinc-600 shrink-0" data-lucide="circle" strokeWidth="1.5"></i>
<i className="w-4 h-4 shrink-0" data-lucide="zap" strokeWidth="1.5"></i>
<span className="text-sm truncate">We're in!</span>
</div>
</div>
</div>

<div className="space-y-1">
<div className="px-2 py-1.5 text-sm text-zinc-600 hover:text-zinc-400 cursor-pointer transition-colors">02 The story continues here...</div>
<div className="px-2 py-1.5 text-sm text-zinc-600 hover:text-zinc-400 cursor-pointer transition-colors">03 Easy challenge</div>
<div className="px-2 py-1.5 text-sm text-zinc-600 hover:text-zinc-400 cursor-pointer transition-colors">04 Intermediate challenge</div>
<div className="px-2 py-1.5 text-sm text-zinc-600 hover:text-zinc-400 cursor-pointer transition-colors">05 Hard challenge</div>
<div className="px-2 py-1.5 text-sm text-zinc-600 hover:text-zinc-400 cursor-pointer transition-colors">06 The letter</div>
<div className="px-2 py-1.5 text-sm text-zinc-600 hover:text-zinc-400 cursor-pointer transition-colors">07 In another location</div>
<div className="px-2 py-1.5 text-sm text-zinc-600 hover:text-zinc-400 cursor-pointer transition-colors">08 More decoding</div>
<div className="px-2 py-1.5 text-sm text-zinc-600 hover:text-zinc-400 cursor-pointer transition-colors">09 Travel bug</div>
<div className="px-2 py-1.5 text-sm text-zinc-600 hover:text-zinc-400 cursor-pointer transition-colors">10 Keep warm</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col bg-zinc-950 min-w-0">

<div className="h-12 border-b border-white/5 flex items-end px-4 bg-zinc-900/20">
<div className="px-5 py-3 border-b-2 border-indigo-500 text-indigo-400 text-sm font-medium flex items-center gap-2">
<i className="w-4 h-4" data-lucide="list-tree" strokeWidth="1.5"></i>
                    Instructions
                </div>
</div>

<div className="flex-1 overflow-y-auto p-8 lg:p-12 relative">
<div className="max-w-3xl mx-auto w-full">

<div className="flex items-center justify-between mb-12">
<h1 className="text-2xl font-semibold tracking-tight text-zinc-100">Chapters</h1>
<button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white/5 text-zinc-500 hover:text-zinc-300 transition-colors">
<i className="w-5 h-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>

<div className="mb-12">
<div className="flex items-center justify-between border-b border-white/5 pb-3 mb-6">
<span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">Section 1</span>
<i className="w-4 h-4 text-yellow-500/80" data-lucide="pie-chart" strokeWidth="1.5"></i>
</div>
<h3 className="text-base text-zinc-300 mb-4">01 Your quest starts here...</h3>

<div className="rounded-xl border border-white/5 bg-zinc-900/30 p-1.5 mb-8">
<div className="px-4 py-3 rounded-lg bg-white/5 text-zinc-100 text-base font-medium flex items-center shadow-sm">
                                Where is Charlie
                            </div>
<div className="flex flex-col gap-1 mt-2 mb-2 pl-6 relative">

<div className="absolute left-6 top-0 bottom-2 w-px bg-white/5"></div>
<div className="px-4 py-2 text-base text-zinc-400 hover:text-zinc-200 cursor-pointer transition-colors flex items-center gap-3 relative">
<div className="absolute left-0 w-2 h-px bg-white/5"></div>
                                    Try
                                </div>
<div className="px-4 py-2 text-base text-zinc-400 hover:text-zinc-200 cursor-pointer transition-colors flex items-center gap-3 relative">
<div className="absolute left-0 w-2 h-px bg-white/5"></div>
                                    Investigate
                                </div>
<div className="px-4 py-2 text-base text-zinc-400 hover:text-zinc-200 cursor-pointer transition-colors flex items-center gap-3 relative">
<div className="absolute left-0 w-2 h-px bg-white/5"></div>
                                    Evaluate
                                </div>
</div>
</div>

<div className="space-y-5 text-base text-zinc-600 pl-1">
<div className="hover:text-zinc-400 cursor-pointer transition-colors">02 The story continues here...</div>
<div className="hover:text-zinc-400 cursor-pointer transition-colors">03 Easy challenge</div>
<div className="hover:text-zinc-400 cursor-pointer transition-colors">04 Intermediate challenge</div>
<div className="hover:text-zinc-400 cursor-pointer transition-colors">05 Hard challenge</div>
<div className="hover:text-zinc-400 cursor-pointer transition-colors">06 The letter</div>
<div className="hover:text-zinc-400 cursor-pointer transition-colors">07 In another location</div>
</div>
</div>
</div>
</div>

<div className="h-16 shrink-0 border-t border-white/5 bg-zinc-950/80 backdrop-blur-md flex items-center justify-between px-6 z-10">
<div className="flex items-center gap-3 text-zinc-300">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/5">
<i className="w-4 h-4 text-zinc-400" data-lucide="book" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium">Your quest starts here...</span>
</div>
<div className="flex items-center gap-2">
<button className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-all">
<i className="w-4 h-4" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<button className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-all">
<i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>
<style>
        /* Minimal custom scrollbar for absolute best look, avoiding generic tailwind scrollbar plugins as per constraints */
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #27272a; /* zinc-800 */
            border-radius: 4px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
            background: #3f3f46; /* zinc-700 */
        }
    </style>


    </>
  );
}
