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
      

<nav className="h-12 border-b border-zinc-200 bg-white flex items-center justify-between px-4 shrink-0 z-20">
<div className="flex items-center gap-4">

<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="pen-tool"></i>
</div>
<span className="font-semibold text-sm tracking-tight text-zinc-900">DRAFT</span>
</div>

<div className="h-4 w-[1px] bg-zinc-200"></div>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
<span className="hover:text-zinc-900 cursor-pointer transition-colors">Projects</span>
<i className="w-3 h-3 text-zinc-300" data-lucide="chevron-right"></i>
<span className="text-zinc-900">Fade To Black</span>
<span className="bg-zinc-100 text-zinc-500 px-1.5 py-0.5 rounded text-[10px] border border-zinc-200">v2.4</span>
</div>
</div>

<div className="hidden md:flex items-center bg-zinc-100 p-0.5 rounded-md border border-zinc-200">
<button className="px-3 py-1 bg-white rounded shadow-sm text-xs font-medium text-zinc-900 border border-zinc-200">Write</button>
<button className="px-3 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Plan</button>
<button className="px-3 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Board</button>
</div>

<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<img alt="User" className="w-6 h-6 rounded-full border-2 border-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<img alt="User" className="w-6 h-6 rounded-full border-2 border-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
</div>
<div className="h-4 w-[1px] bg-zinc-200"></div>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors">
<i className="w-4 h-4" data-lucide="history"></i>
</button>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors">
<i className="w-4 h-4" data-lucide="message-square"></i>
</button>
<button className="bg-zinc-900 hover:bg-zinc-800 text-white px-3 py-1.5 rounded text-xs font-medium tracking-wide transition-colors flex items-center gap-2">
<i className="w-3 h-3" data-lucide="share-2"></i> Export
            </button>
</div>
</nav>

<main className="flex-1 flex overflow-hidden">

<aside className="w-64 bg-zinc-50 border-r border-zinc-200 flex flex-col shrink-0 hidden lg:flex">

<div className="p-2 space-y-0.5 border-b border-zinc-200 pb-2">
<button className="w-full flex items-center gap-2 px-2 py-1.5 text-xs font-medium text-zinc-900 bg-zinc-200/50 rounded group">
<i className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-900" data-lucide="file-text"></i>
                    Screenplay
                </button>
<button className="w-full flex items-center gap-2 px-2 py-1.5 text-xs font-medium text-zinc-500 hover:bg-zinc-100 rounded group transition-colors">
<i className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-600" data-lucide="users"></i>
                    Characters
                </button>
<button className="w-full flex items-center gap-2 px-2 py-1.5 text-xs font-medium text-zinc-500 hover:bg-zinc-100 rounded group transition-colors">
<i className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-600" data-lucide="map-pin"></i>
                    Locations
                </button>
</div>

<div className="px-3 py-3 flex items-center justify-between">
<span className="text-xs font-semibold text-zinc-500 tracking-tight uppercase">Scenes</span>
<button className="text-zinc-400 hover:text-zinc-900">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto px-2 pb-4 space-y-1">
<div className="group flex items-start gap-2 px-2 py-2 rounded hover:bg-zinc-100 cursor-pointer border border-transparent hover:border-zinc-200/50 transition-all">
<span className="text-[10px] font-mono text-zinc-400 pt-0.5">1</span>
<div className="flex-1 min-w-0">
<p className="text-xs font-semibold text-zinc-800 truncate">INT. COFFEE SHOP</p>
<p className="text-[10px] text-zinc-500 truncate mt-0.5">Protagonist meets antagonist for the first time.</p>
</div>
</div>
<div className="group flex items-start gap-2 px-2 py-2 rounded bg-white shadow-sm border border-zinc-200 cursor-pointer">
<span className="text-[10px] font-mono text-zinc-900 pt-0.5">2</span>
<div className="flex-1 min-w-0">
<p className="text-xs font-semibold text-zinc-900 truncate">EXT. STREET - DAY</p>
<p className="text-[10px] text-zinc-500 truncate mt-0.5">The chase begins. Rain starts falling.</p>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
</div>
<div className="group flex items-start gap-2 px-2 py-2 rounded hover:bg-zinc-100 cursor-pointer border border-transparent hover:border-zinc-200/50 transition-all">
<span className="text-[10px] font-mono text-zinc-400 pt-0.5">3</span>
<div className="flex-1 min-w-0">
<p className="text-xs font-semibold text-zinc-800 truncate">INT. SUBWAY STATION</p>
<p className="text-[10px] text-zinc-500 truncate mt-0.5">Crowded platform. Tension builds.</p>
</div>
</div>
<div className="group flex items-start gap-2 px-2 py-2 rounded hover:bg-zinc-100 cursor-pointer border border-transparent hover:border-zinc-200/50 transition-all">
<span className="text-[10px] font-mono text-zinc-400 pt-0.5">4</span>
<div className="flex-1 min-w-0">
<p className="text-xs font-semibold text-zinc-800 truncate">INT. APARTMENT - NIGHT</p>
<p className="text-[10px] text-zinc-500 truncate mt-0.5">Quiet reflection.</p>
</div>
</div>
</div>

<div className="p-3 border-t border-zinc-200 bg-zinc-50">
<div className="flex justify-between items-center text-[10px] text-zinc-400 uppercase tracking-wider font-medium">
<span>Pages: 12</span>
<span>Words: 2,405</span>
</div>
<div className="w-full bg-zinc-200 h-1 rounded-full mt-2 overflow-hidden">
<div className="bg-zinc-800 h-full w-1/4 rounded-full"></div>
</div>
</div>
</aside>

<section className="flex-1 bg-zinc-100 flex flex-col relative overflow-hidden">

<div className="absolute top-6 left-1/2 -translate-x-1/2 bg-zinc-900/90 backdrop-blur-sm text-white px-1.5 py-1.5 rounded-lg shadow-xl z-30 flex items-center gap-1 border border-white/10 transition-all opacity-0 hover:opacity-100 group-hover:opacity-100 duration-300" id="toolbar">
<button className="px-3 py-1.5 hover:bg-white/10 rounded text-xs font-medium transition-colors">Scene</button>
<button className="px-3 py-1.5 hover:bg-white/10 rounded text-xs font-medium transition-colors text-zinc-300">Action</button>
<button className="px-3 py-1.5 bg-white text-zinc-900 rounded shadow-sm text-xs font-bold transition-colors">Character</button>
<button className="px-3 py-1.5 hover:bg-white/10 rounded text-xs font-medium transition-colors text-zinc-300">Dialogue</button>
<button className="px-3 py-1.5 hover:bg-white/10 rounded text-xs font-medium transition-colors text-zinc-300">Parenthetical</button>
<div className="w-[1px] h-4 bg-white/20 mx-1"></div>
<button className="p-1.5 hover:bg-white/10 rounded text-zinc-300 hover:text-white transition-colors">
<i className="w-3.5 h-3.5" data-lucide="bold"></i>
</button>
<button className="p-1.5 hover:bg-white/10 rounded text-zinc-300 hover:text-white transition-colors">
<i className="w-3.5 h-3.5" data-lucide="italic"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto p-8 md:p-12 flex justify-center" id="editor-scroll">

<div className="bg-white w-full max-w-3xl min-h-[11in] paper-shadow px-12 py-16 md:px-20 md:py-24 relative group cursor-text">

<div className="absolute top-8 right-12 script-font text-xs text-zinc-400 select-none">2.</div>

<div className="script-font text-base leading-relaxed text-zinc-900 space-y-4">

<div className="uppercase font-bold mb-6 tracking-wide">
                            2   EXT. STREET - DAY
                        </div>

<div className="mb-4">
                            Heavy rain pelts the pavement. Neon signs flicker in puddles reflecting the chaos above. <span className="uppercase">Jaxon</span> (30s, rugged, wearing a trench coat) sprints down the alleyway, glancing over his shoulder.
                        </div>
<div className="mb-4">
                             He skids to a halt at a dead end. A brick wall looms over him.
                        </div>

<div className="mt-6 mb-0 w-2/3 mx-auto text-center uppercase tracking-wider">
                            Jaxon
                        </div>

<div className="w-3/4 mx-auto mb-4">
                            (breathless)
                            <br/>
                            There's nowhere left to run.
                        </div>

<div className="mb-4">
                            A shadow emerges from the steam of a manhole cover. It’s <span className="uppercase">The Silhouette</span>.
                        </div>

<div className="mt-6 mb-0 w-2/3 mx-auto text-center uppercase tracking-wider">
                            The Silhouette
                        </div>

<div className="w-3/4 mx-auto mb-4">
                            You were never running, Jaxon. You were being herded.
                        </div>

<div className="mb-4">
                            Jaxon reaches for his holster, but his hand freezes. A red laser dot dances on his chest.
                        </div>

<div className="mt-6 mb-0 w-2/3 mx-auto text-center uppercase tracking-wider">
                            Jaxon
                        </div>

<div className="w-3/4 mx-auto mb-4 relative">
                            So that's how it ends. Not with a bang, but with a--<span className="caret-blink border-r-2 border-zinc-900 ml-0.5"></span>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
</div>
</div>
</section>

<aside className="w-72 bg-white border-l border-zinc-200 flex flex-col shrink-0 hidden xl:flex z-10">

<div className="flex border-b border-zinc-200">
<button className="flex-1 py-3 text-xs font-medium text-zinc-900 border-b-2 border-zinc-900 bg-zinc-50">Analysis</button>
<button className="flex-1 py-3 text-xs font-medium text-zinc-500 hover:text-zinc-700 hover:bg-zinc-50 transition-colors">Notes</button>
<button className="flex-1 py-3 text-xs font-medium text-zinc-500 hover:text-zinc-700 hover:bg-zinc-50 transition-colors">History</button>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-6">

<div className="bg-zinc-50 rounded-lg p-3 border border-zinc-100">
<div className="flex items-center gap-2 mb-3">
<i className="w-3.5 h-3.5 text-purple-500" data-lucide="sparkles"></i>
<span className="text-xs font-semibold text-zinc-900">Scene Pulse</span>
</div>
<div className="space-y-2">
<div className="flex justify-between items-center text-[10px] text-zinc-500">
<span>Pacing</span>
<span className="text-zinc-900 font-medium">Fast</span>
</div>
<div className="w-full bg-zinc-200 h-1 rounded-full">
<div className="bg-purple-500 h-full w-3/4 rounded-full"></div>
</div>
<div className="flex justify-between items-center text-[10px] text-zinc-500 mt-2">
<span>Dialogue Density</span>
<span className="text-zinc-900 font-medium">Balanced</span>
</div>
<div className="w-full bg-zinc-200 h-1 rounded-full">
<div className="bg-blue-500 h-full w-1/2 rounded-full"></div>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-semibold text-zinc-900 mb-3 tracking-tight uppercase text-[10px] text-zinc-400">Suggestions</h3>
<div className="space-y-3">

<div className="group p-3 rounded border border-zinc-200 hover:border-zinc-300 hover:shadow-sm transition-all bg-white cursor-pointer">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-semibold text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded">Structure</span>
<span className="text-[10px] text-zinc-400">Just now</span>
</div>
<p className="text-xs text-zinc-700 leading-snug">Consider shortening Jaxon's monologue. The action speaks louder here.</p>
<div className="mt-2 flex gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
<button className="text-[10px] font-medium text-zinc-900 hover:underline">Apply</button>
<button className="text-[10px] font-medium text-zinc-400 hover:text-zinc-600">Dismiss</button>
</div>
</div>

<div className="group p-3 rounded border border-zinc-200 hover:border-zinc-300 hover:shadow-sm transition-all bg-white cursor-pointer">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">Character</span>
<span className="text-[10px] text-zinc-400">2m ago</span>
</div>
<p className="text-xs text-zinc-700 leading-snug">The Silhouette's tone shifts abruptly. Check consistency with Scene 1.</p>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-semibold text-zinc-900 mb-3 tracking-tight uppercase text-[10px] text-zinc-400">In this Scene</h3>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-white border border-zinc-200 rounded text-[10px] font-medium text-zinc-700 hover:border-zinc-300 cursor-pointer">JAXON</span>
<span className="px-2 py-1 bg-white border border-zinc-200 rounded text-[10px] font-medium text-zinc-700 hover:border-zinc-300 cursor-pointer">THE SILHOUETTE</span>
</div>
</div>
</div>

<div className="p-3 border-t border-zinc-200 bg-zinc-50">
<div className="relative">
<input className="w-full bg-white border border-zinc-200 rounded pl-3 pr-8 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-zinc-300 placeholder-zinc-400" placeholder="Add a note..." type="text"/>
<button className="absolute right-2 top-1.5 text-zinc-400 hover:text-zinc-600">
<i className="w-3.5 h-3.5" data-lucide="arrow-up"></i>
</button>
</div>
</div>
</aside>
</main>

<footer className="h-8 bg-white border-t border-zinc-200 flex items-center justify-between px-4 text-[10px] text-zinc-500 select-none">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                Saved
            </span>
<span className="text-zinc-300">|</span>
<span className="font-mono">Ln 42, Col 18</span>
</div>
<div className="flex items-center gap-3">

<div className="flex items-center gap-2 cursor-pointer group">
<span className="group-hover:text-zinc-800 transition-colors">Focus Mode</span>
<div className="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-3 h-3 rounded-full bg-white border-2 border-zinc-300 appearance-none cursor-pointer transition-all duration-300 top-0.5 left-0.5" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-zinc-200 cursor-pointer transition-colors duration-300" htmlFor="toggle"></label>
</div>
</div>
<span className="text-zinc-300">|</span>
<button className="hover:text-zinc-900 transition-colors">Keyboard Shortcuts</button>
</div>
</footer>


    </>
  );
}
