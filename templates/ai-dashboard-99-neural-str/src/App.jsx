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
      

<aside className="w-64 border-r border-stone-800/50 bg-stone-950/80 backdrop-blur-xl flex-col hidden lg:flex flex-shrink-0 z-20">
<div className="h-16 flex items-center px-6 border-b border-stone-800/50">
<div className="w-6 h-6 rounded-md bg-stone-100 flex items-center justify-center mr-3">
<i className="w-4 h-4 text-stone-950" data-lucide="infinity" strokeWidth="1.5"></i>
</div>
<span className="font-medium tracking-tight text-lg text-stone-100">Synapse</span>
</div>
<div className="flex-1 overflow-y-auto pt-6 pr-4 pb-6 pl-4 space-y-8">
<div className="">
<div className="px-2 text-sm font-medium text-stone-500 mb-3 tracking-wide">Workspace</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-2 py-2 rounded-lg bg-stone-800/50 text-stone-100 font-medium transition-colors" href="#">
<i className="w-4 h-4 text-stone-400" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
<span className="text-base">Overview</span>
</a>
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-stone-400 hover:bg-stone-800/30 hover:text-stone-200 font-medium transition-colors" href="#">
<i className="w-4 h-4" data-lucide="brain-circuit" strokeWidth="1.5"></i>
<span className="text-base">Neural Streams</span>
</a>
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-stone-400 hover:bg-stone-800/30 hover:text-stone-200 font-medium transition-colors" href="#">
<i className="w-4 h-4" data-lucide="network" strokeWidth="1.5"></i>
<span className="text-base">Knowledge Graph</span>
</a>
</nav>
</div>
<div>
<div className="px-2 text-sm font-medium text-stone-500 mb-3 tracking-wide">Processing</div>
<nav className="space-y-1">
<a className="flex items-center justify-between px-2 py-2 rounded-lg text-stone-400 hover:bg-stone-800/30 hover:text-stone-200 font-medium transition-colors" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="cpu" strokeWidth="1.5"></i>
<span className="text-base">Active Models</span>
</div>
<span className="w-2 h-2 rounded-full bg-orange-500"></span>
</a>
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-stone-400 hover:bg-stone-800/30 hover:text-stone-200 font-medium transition-colors" href="#">
<i className="w-4 h-4" data-lucide="database" strokeWidth="1.5"></i>
<span className="text-base">Memory Vector</span>
</a>
</nav>
</div>
</div>
<div className="p-4 border-t border-stone-800/50">
<button className="flex items-center gap-3 px-2 py-2 w-full rounded-lg text-stone-400 hover:bg-stone-800/30 hover:text-stone-200 font-medium transition-colors">
<div className="w-6 h-6 rounded-full bg-stone-800 flex items-center justify-center border border-stone-700">
<i className="w-3 h-3 text-stone-300" data-lucide="user" strokeWidth="1.5"></i>
</div>
<span className="text-base text-left flex-1">Commander</span>
<i className="w-4 h-4" data-lucide="chevrons-up-down" strokeWidth="1.5"></i>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-y-auto overflow-x-hidden bg-[#0a0a0a]">

<header className="h-16 flex items-center justify-between px-4 sm:px-8 sticky top-0 z-10 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-stone-800/50">
<div className="flex items-center gap-4">
<button className="lg:hidden text-stone-400 hover:text-stone-100">
<i className="w-5 h-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
<div className="hidden sm:flex items-center gap-2 text-sm text-stone-500">
<span className="hover:text-stone-300 cursor-pointer transition-colors">Synapse</span>
<i className="w-3 h-3" data-lucide="chevron-right" strokeWidth="1.5"></i>
<span className="text-stone-200">Overview</span>
</div>
</div>
<div className="flex items-center gap-4">

<div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md bg-stone-900 border border-stone-800 text-sm text-stone-400 w-64 lg:w-80 cursor-text hover:border-stone-700 transition-colors">
<i className="w-4 h-4" data-lucide="search" strokeWidth="1.5"></i>
<span className="flex-1">Query semantic space...</span>
<div className="flex items-center gap-1 text-[10px] uppercase font-medium bg-stone-800 px-1.5 py-0.5 rounded text-stone-500">
<span>⌘</span>K
                    </div>
</div>
<button className="text-stone-400 hover:text-stone-100 transition-colors w-8 h-8 flex items-center justify-center rounded-md hover:bg-stone-800/50">
<i className="w-4 h-4" data-lucide="bell" strokeWidth="1.5"></i>
</button>
</div>
</header>

<div className="p-4 sm:p-8 max-w-7xl mx-auto w-full space-y-8 pb-24">

<div className="relative rounded-[2rem] overflow-hidden bg-stone-900 border border-stone-800/60 shadow-2xl flex flex-col min-h-[500px] lg:min-h-[600px]">

<div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#18181b] to-black pointer-events-none z-0"></div>

<div className="absolute top-0 right-0 w-[800px] h-[600px] bg-gradient-to-l from-red-900/20 to-transparent blur-3xl rounded-full transform rotate-12 pointer-events-none z-0 opacity-50"></div>
<div className="absolute -top-20 right-20 w-[600px] h-[100px] bg-gradient-to-r from-transparent via-pink-600/10 to-transparent blur-2xl transform -rotate-12 pointer-events-none z-0"></div>
<div className="absolute top-40 right-10 w-[500px] h-[80px] bg-gradient-to-r from-transparent via-red-500/10 to-transparent blur-2xl transform -rotate-12 pointer-events-none z-0"></div>

<div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black via-stone-950/80 to-transparent pointer-events-none z-0"></div>

<div className="relative z-10 flex justify-between items-start sm:items-center p-6 sm:p-10 flex-col sm:flex-row gap-4">
<div className="flex items-center gap-3 text-sm text-stone-300 font-medium tracking-wide uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                        Systems Operational
                    </div>
<div className="px-4 py-1.5 rounded-full border border-stone-700/50 bg-stone-800/30 backdrop-blur-md text-sm text-stone-300 flex items-center gap-2">
<i className="w-3.5 h-3.5 text-red-400" data-lucide="sparkles" strokeWidth="1.5"></i> Neural Engine
                    </div>
</div>

<div className="relative z-10 flex-1 flex flex-col justify-end p-6 sm:p-10 pb-16">
<h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] tracking-tight text-white font-medium mb-2 leading-[1.05]">
                        Intelligent Context<br/>
<span className="font-serif italic font-normal text-stone-400">—Synthesized</span>
</h1>
<div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-stone-800/80 border border-stone-700/50 text-sm text-stone-300 w-max backdrop-blur-sm">
<i className="w-4 h-4 text-orange-400" data-lucide="activity" strokeWidth="1.5"></i> Stream Active
                    </div>
</div>

<div className="relative z-10 border-t border-stone-800/80 bg-stone-950/60 backdrop-blur-xl p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-8 rounded-b-[2rem]">
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-12 flex-1">
<div>
<div className="text-sm text-stone-500 mb-1.5 font-medium">Core Focus</div>
<div className="text-lg text-stone-100 font-medium tracking-tight">Project Genesis</div>
</div>
<div>
<div className="text-sm text-stone-500 mb-1.5 font-medium">Architecture</div>
<div className="text-lg text-stone-100 font-medium tracking-tight">RAG Pipeline</div>
</div>
<div>
<div className="text-sm text-stone-500 mb-1.5 font-medium">Topology</div>
<div className="text-lg text-stone-100 font-medium tracking-tight">Graph Network</div>
</div>
<div>
<div className="text-sm text-stone-500 mb-1.5 font-medium">Efficiency Gain</div>
<div className="text-lg text-orange-400 font-medium tracking-tight">+450% Speed</div>
</div>
</div>
<button className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3.5 rounded-full font-medium text-base hover:bg-stone-200 transition-colors w-full lg:w-auto flex-shrink-0 group">
                        Enter Matrix <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
<div className="relative bg-stone-900/80 backdrop-blur-sm border border-stone-800 rounded-2xl p-2 sm:p-3 flex items-start sm:items-center gap-3 transition-colors focus-within:border-stone-700 focus-within:bg-stone-900 shadow-lg">
<button className="mt-1 sm:mt-0 w-10 h-10 rounded-xl bg-stone-800 flex items-center justify-center flex-shrink-0 text-stone-400 hover:text-stone-100 hover:bg-stone-700 transition-colors">
<i className="w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<textarea className="bg-transparent border-none outline-none flex-1 text-base sm:text-lg text-stone-100 placeholder-stone-500 w-full resize-none py-2 max-h-32 overflow-y-auto" placeholder="Capture a thought, outline a structure, or connect disparate ideas..." rows="1"></textarea>
<div className="flex items-center gap-2 mt-2 sm:mt-0 self-end sm:self-auto px-2">
<button className="p-2 text-stone-500 hover:text-stone-300 transition-colors hidden sm:block">
<i className="w-5 h-5" data-lucide="mic" strokeWidth="1.5"></i>
</button>
<button className="p-2 text-stone-500 hover:text-stone-300 transition-colors hidden sm:block">
<i className="w-5 h-5" data-lucide="paperclip" strokeWidth="1.5"></i>
</button>
<button className="px-5 py-2.5 bg-stone-100 text-stone-900 rounded-lg text-sm font-medium hover:bg-white transition-colors flex items-center gap-2">
                            Synthesize <i className="w-3.5 h-3.5 opacity-50 hidden sm:inline-block" data-lucide="corner-down-left" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-medium tracking-tight text-stone-100">Recent Syntheses</h2>
<button className="text-sm font-medium text-stone-400 hover:text-stone-200 flex items-center gap-1 transition-colors">
                        View all <i className="w-3.5 h-3.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="group p-6 rounded-2xl border border-stone-800/60 bg-stone-900/40 hover:bg-stone-900/80 transition-all duration-300 cursor-pointer flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-red-500/10 transition-colors"></div>
<div className="flex items-center justify-between mb-5 relative z-10">
<div className="flex items-center gap-2 text-sm text-stone-400 font-medium">
<i className="w-4 h-4 text-red-400" data-lucide="link-2" strokeWidth="1.5"></i> Insight
                            </div>
<span className="text-sm text-stone-500">2h ago</span>
</div>
<h3 className="text-lg font-medium text-stone-100 tracking-tight mb-3 group-hover:text-red-400 transition-colors relative z-10">Market Expansion Vector</h3>
<p className="text-base text-stone-400 line-clamp-3 mb-6 flex-1 leading-relaxed relative z-10">
                            Connected Q3 meeting notes with recent competitor analysis. Identified a potential whitespace opportunity in the APAC region logistics chain.
                        </p>
<div className="flex flex-wrap gap-2 mt-auto relative z-10">
<span className="px-2.5 py-1 rounded-md bg-stone-800/60 border border-stone-700/50 text-sm text-stone-300">#strategy</span>
<span className="px-2.5 py-1 rounded-md bg-stone-800/60 border border-stone-700/50 text-sm text-stone-300">#apac</span>
</div>
</div>

<div className="group p-6 rounded-2xl border border-stone-800/60 bg-stone-900/40 hover:bg-stone-900/80 transition-all duration-300 cursor-pointer flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-pink-500/10 transition-colors"></div>
<div className="flex items-center justify-between mb-5 relative z-10">
<div className="flex items-center gap-2 text-sm text-stone-400 font-medium">
<i className="w-4 h-4 text-pink-400" data-lucide="lightbulb" strokeWidth="1.5"></i> Node Generated
                            </div>
<span className="text-sm text-stone-500">5h ago</span>
</div>
<h3 className="text-lg font-medium text-stone-100 tracking-tight mb-3 group-hover:text-pink-400 transition-colors relative z-10">UI Component Architecture</h3>
<p className="text-base text-stone-400 line-clamp-3 mb-6 flex-1 leading-relaxed relative z-10">
                            Drafted the new component structure based on atomic design principles. Reduces redundancy by 40% across the main dashboard application.
                        </p>
<div className="flex flex-wrap gap-2 mt-auto relative z-10">
<span className="px-2.5 py-1 rounded-md bg-stone-800/60 border border-stone-700/50 text-sm text-stone-300">#design-system</span>
<span className="px-2.5 py-1 rounded-md bg-stone-800/60 border border-stone-700/50 text-sm text-stone-300">#frontend</span>
</div>
</div>

<div className="group p-6 rounded-2xl border border-stone-800/60 bg-stone-900/40 hover:bg-stone-900/80 transition-all duration-300 cursor-pointer flex flex-col h-full relative overflow-hidden hidden md:flex">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-orange-500/10 transition-colors"></div>
<div className="flex items-center justify-between mb-5 relative z-10">
<div className="flex items-center gap-2 text-sm text-stone-400 font-medium">
<i className="w-4 h-4 text-orange-400" data-lucide="workflow" strokeWidth="1.5"></i> Stream
                            </div>
<span className="text-sm text-stone-500">Yesterday</span>
</div>
<h3 className="text-lg font-medium text-stone-100 tracking-tight mb-3 group-hover:text-orange-400 transition-colors relative z-10">User Onboarding Flow</h3>
<div className="flex-1 space-y-3 relative z-10">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-stone-600"></div>
<span className="text-base text-stone-400">Simplify initial signup form</span>
</div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-stone-600"></div>
<span className="text-base text-stone-400">Add context-aware tooltips</span>
</div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-stone-600"></div>
<span className="text-base text-stone-400">Implement progressive profiling</span>
</div>
</div>
<div className="flex flex-wrap gap-2 mt-6 relative z-10">
<span className="px-2.5 py-1 rounded-md bg-stone-800/60 border border-stone-700/50 text-sm text-stone-300">#ux</span>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-6 right-6 z-50">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900 border border-stone-800 shadow-lg text-sm text-stone-400 backdrop-blur-md">
<i className="w-3.5 h-3.5" data-lucide="zap" strokeWidth="1.5"></i>
            v2.4.1
        </div>
</div>




    </>
  );
}
