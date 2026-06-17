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



        // Initialize Lucide Icons with custom stroke width
        lucide.createIcons({
            attrs: {
                'stroke-width': '1.5'
            }
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
      

<div className="fixed z-50 top-6 right-6">
<button className="group flex transition-all duration-300 hover:text-slate-900 hover:border-slate-300 dark:bg-white/5 dark:border-white/10 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/10 text-slate-500 bg-white w-10 h-10 border-slate-200 border rounded-full shadow-sm items-center justify-center" onclick="document.documentElement.classList.toggle('dark')">

<svg className="lucide lucide-sun w-5 h-5 hidden dark:block transition-transform duration-500 rotate-90 dark:rotate-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>

<svg className="lucide lucide-moon w-5 h-5 block dark:hidden transition-transform duration-500 -rotate-90 dark:rotate-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
</button>
</div>
<main className="flex flex-col min-h-screen w-full pt-20 pb-20 relative items-center justify-center">

<div className="grid-bg z-0 pointer-events-none absolute top-0 right-0 bottom-0 left-0"></div>

<div className="rays-container">
<div className="ray blur-3xl opacity-60 dark:opacity-100"></div>
<div className="ray-2 blur-3xl opacity-60 dark:opacity-100"></div>
</div>

<div className="flex flex-col z-10 w-full max-w-full relative items-center px-4">

<div className="mb-8 animate-fade-in-up">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium tracking-wide uppercase shadow-sm border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-400">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
</span>
                    New V2.0 Assembly
                </span>
</div>

<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] font-semibold tracking-tight text-center max-w-5xl mb-6 text-slate-900 dark:text-white">
                AI-Powered Code &amp; 
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-white/40">
                    Architecture Design
                </span>
</h1>

<p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-normal text-center max-w-3xl mb-12 text-slate-600 dark:text-slate-400">
                Kreona Studio is your source for high-quality, scalable web assembly. 
                Generate components, create designs, and chat with AI in seconds.
            </p>

<div className="mb-12 flex flex-col sm:flex-row gap-4">
<button className="group relative px-8 py-3 text-sm font-semibold tracking-wide uppercase border border-transparent transition-all duration-300 shadow-xl bg-slate-900 text-white hover:bg-slate-800 shadow-slate-300/50 dark:bg-white dark:text-black dark:hover:bg-slate-200 dark:shadow-cyan-500/10">
                    Schedule A Demo
                </button>
<button className="group relative px-8 py-3 text-sm font-semibold tracking-wide uppercase border transition-all duration-300 shadow-lg bg-white text-slate-900 border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-transparent dark:text-white dark:border-white/20 dark:hover:bg-white/5">
                    Start Free Trial
                </button>
</div>

<div className="w-full max-w-7xl mt-8 relative">

<div className="absolute inset-0 pointer-events-none hidden md:block opacity-30 dark:opacity-20">
<div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-6 items-center">

<div className="flex md:flex-col md:gap-32 gap-6 justify-center">

<div className="group flex flex-col gap-3 items-center">
<div className="w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 shadow-lg border bg-white border-slate-200 text-slate-500 group-hover:border-cyan-500/50 group-hover:text-cyan-600 group-hover:shadow-cyan-500/20 dark:bg-white/5 dark:border-white/10 dark:text-slate-400 dark:group-hover:text-cyan-400 dark:group-hover:shadow-none">
<svg className="lucide lucide-folder-code w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 10.5 8 13l2 2.5"></path><path d="m14 10.5 2 2.5-2 2.5"></path><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"></path></svg>
</div>
<span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-600">Code Gen</span>
</div>

<div className="group flex flex-col items-center gap-3">
<div className="w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 shadow-lg border bg-white border-slate-200 text-slate-500 group-hover:border-cyan-500/50 group-hover:text-cyan-600 group-hover:shadow-cyan-500/20 dark:bg-white/5 dark:border-white/10 dark:text-slate-400 dark:group-hover:text-cyan-400 dark:group-hover:shadow-none">
<svg className="lucide lucide-layers w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-600">Components</span>
</div>
</div>

<div className="relative z-20 group">

<div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg blur opacity-20 dark:opacity-20 transition duration-1000 group-hover:opacity-40"></div>
<div className="relative w-full rounded-lg shadow-2xl overflow-hidden min-h-[220px] flex flex-col justify-between border bg-white border-slate-200 dark:bg-[#0A0A0A] dark:border-white/10">

<div className="text-sm font-mono p-5">
<p className="mb-2 text-slate-500 dark:text-slate-500">Describe your startup or business idea, and we'll identify the key roles you need to build and scale</p>
<div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
<span className="text-cyan-600 dark:text-cyan-400">&gt;</span>
                                    Example: A SaaS platform that helps small businesses manage their inventory and automate reordering...
                                    <span className="animate-pulse w-2 h-4 bg-cyan-500 block ml-1"></span>
</div>
</div>

<div className="p-3 flex items-center justify-between border-t border-slate-100 bg-slate-50 dark:border-white/5 dark:bg-white/5">
<div className="flex items-center gap-3">
<button className="w-8 h-8 flex items-center justify-center rounded transition-colors bg-slate-200 text-slate-500 hover:text-cyan-600 dark:bg-white/10 dark:text-slate-400 dark:hover:text-cyan-400">
<svg className="lucide lucide-sparkles w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</button>
<span className="hidden sm:inline-block px-2 py-1 rounded border text-xs font-mono border-slate-200 text-cyan-600 bg-white dark:border-white/10 dark:text-cyan-500 dark:bg-cyan-500/5">
                                        /Search-Command
                                    </span>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded transition-all bg-slate-200 text-slate-500 hover:bg-cyan-600 hover:text-white dark:bg-white/10 dark:text-slate-400 dark:hover:bg-cyan-500 dark:hover:text-white">
<svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="flex md:flex-col md:gap-32 gap-6 justify-center">

<div className="group flex flex-col items-center gap-3">
<div className="w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 shadow-lg border bg-white border-slate-200 text-slate-500 group-hover:border-cyan-500/50 group-hover:text-cyan-600 group-hover:shadow-cyan-500/20 dark:bg-white/5 dark:border-white/10 dark:text-slate-400 dark:group-hover:text-cyan-400 dark:group-hover:shadow-none">
<svg className="lucide lucide-pen-tool w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-600">Design Sys</span>
</div>

<div className="group flex flex-col items-center gap-3">
<div className="w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 shadow-lg border bg-white border-slate-200 text-slate-500 group-hover:border-cyan-500/50 group-hover:text-cyan-600 group-hover:shadow-cyan-500/20 dark:bg-white/5 dark:border-white/10 dark:text-slate-400 dark:group-hover:text-cyan-400 dark:group-hover:shadow-none">
<svg className="lucide lucide-message-square w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
<span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-600">AI Support</span>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
