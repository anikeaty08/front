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
      

<nav className="lg:w-64 flex flex-col flex-shrink-0 transition-all duration-300 bg-neutral-950 w-16 border-white/5 border-r justify-between">
<div className="">

<div className="h-16 flex items-center px-6 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black font-semibold text-xs tracking-tighter">
                        SV
                    </div>
<span className="text-sm font-medium tracking-tight hidden lg:block text-neutral-200">ScriptVis</span>
</div>
</div>

<div className="py-4 px-3 flex flex-col gap-1">
<button className="flex items-center gap-3 w-full px-3 py-2 rounded-md bg-white/5 text-neutral-100 hover:text-white group">
<svg aria-hidden="true" data-icon="lucide:sparkles" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
<span className="text-xs font-medium hidden lg:block">Create</span>
</button>
<button className="flex gap-3 hover:bg-white/5 hover:text-white transition-colors group text-neutral-400 w-full rounded-md pt-2 pr-3 pb-2 pl-3 gap-x-3 gap-y-3 items-center">
<svg aria-hidden="true" data-icon="lucide:layout-grid" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></g></svg>
<span className="text-xs font-medium hidden lg:block">Projects</span>
</button>
<button className="flex items-center gap-3 w-full px-3 py-2 rounded-md hover:bg-white/5 text-neutral-400 hover:text-white transition-colors group">
<svg aria-hidden="true" data-icon="lucide:clapperboard" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 6L3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Zm-14-.7l3.1 3.9m3.1-5.8l3.1 4M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-medium hidden lg:block">Assets</span>
</button>
<button className="flex items-center gap-3 w-full px-3 py-2 rounded-md hover:bg-white/5 text-neutral-400 hover:text-white transition-colors group">
<svg aria-hidden="true" data-icon="lucide:history" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5m4-1v5l4 2"></path></g></svg>
<span className="text-xs font-medium hidden lg:block">History</span>
</button>
</div>
</div>

<div className="p-4 border-t border-white/5">
<button className="flex items-center gap-3 w-full px-2 py-2 rounded-md hover:bg-white/5 text-neutral-400 hover:text-white transition-colors">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex-shrink-0"></div>
<div className="flex flex-col items-start hidden lg:flex">
<span className="text-xs font-medium text-neutral-200">Alex Designer</span>
<span className="text-[10px] text-neutral-500">Pro Plan</span>
</div>
</button>
</div>
</nav>

<main className="flex-1 flex flex-col bg-neutral-900/50">

<header className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-neutral-950/50 backdrop-blur-xl z-10">
<div className="flex items-center gap-4">
<span className="text-neutral-500 text-xs">Projects</span>
<span className="text-neutral-700 text-xs">/</span>
<div className="flex items-center gap-2">
<h1 className="text-sm font-medium text-neutral-200">Product Launch v2</h1>
<span className="px-1.5 py-0.5 rounded border border-yellow-500/20 bg-yellow-500/10 text-yellow-500 text-[10px] font-medium tracking-wide">DRAFT</span>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-neutral-500 mr-2">Auto-saved 2m ago</span>
<button className="h-8 px-3 rounded border border-white/10 hover:bg-white/5 text-neutral-300 text-xs font-medium transition-colors flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:share" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13m4-9l-4-4l-4 4m-4 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Share
                </button>
<button className="h-8 px-4 rounded bg-white hover:bg-neutral-200 text-black text-xs font-medium transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<svg aria-hidden="true" data-icon="lucide:play" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Export Video
                </button>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<div className="w-1/2 lg:w-[480px] xl:w-[560px] flex flex-col border-r border-white/5 bg-neutral-950">

<div className="flex items-center border-b border-white/5 px-2">
<button className="px-4 py-3 text-xs font-medium text-white border-b border-white">Script</button>
<button className="px-4 py-3 text-xs font-medium text-neutral-500 hover:text-neutral-300 transition-colors">Settings</button>
<button className="px-4 py-3 text-xs font-medium text-neutral-500 hover:text-neutral-300 transition-colors">Brand Assets</button>
</div>

<div className="flex-1 overflow-y-auto p-6 relative">
<div className="absolute top-6 right-6 z-10">
<button className="flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 px-2 py-1 rounded text-[10px] font-medium transition-all">
<svg aria-hidden="true" data-icon="lucide:wand-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64l-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72M14 7l3 3M5 6v4m14 4v4M10 2v2M7 8H3m18 8h-4M11 3H9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Refine with AI
                         </button>
</div>
<div className="space-y-6">

<div className="group relative pl-4 border-l-2 border-white/20 hover:border-blue-500/50 transition-colors pb-4">
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider">Scene 01 • Intro</span>
<span className="text-[10px] text-neutral-600">00:00 - 00:05</span>
</div>
<textarea className="w-full bg-transparent text-sm leading-relaxed text-neutral-200 outline-none resize-none h-20 placeholder-neutral-700" placeholder="Type your script here...">Imagine a world where creativity knows no bounds. A canvas that expands with your imagination.</textarea>

<div className="mt-2 p-3 rounded bg-neutral-900/50 border border-white/5 group-hover:border-white/10 transition-colors">
<div className="flex items-center gap-2 mb-2">
<svg aria-hidden="true" data-icon="lucide:image" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></g></svg>
<span className="text-[10px] font-medium text-neutral-400">Visual Directive</span>
</div>
<input className="w-full bg-transparent text-xs text-neutral-300 outline-none border-b border-transparent focus:border-white/10 pb-1" type="text" value="Cinematic drone shot of misty mountains, sunrise, golden hour, 8k"/>
</div>
</div>

<div className="group relative pl-4 border-l-2 border-white/20 hover:border-blue-500/50 transition-colors pb-4">
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider">Scene 02 • Demo</span>
<span className="text-[10px] text-neutral-600">00:05 - 00:12</span>
</div>
<textarea className="w-full bg-transparent text-sm leading-relaxed text-neutral-200 outline-none resize-none h-20 placeholder-neutral-700">Introducing ScriptVis. The tool that transforms your words into stunning visual experiences instantly.</textarea>

<div className="mt-2 p-3 rounded bg-neutral-900/50 border border-white/5 group-hover:border-white/10 transition-colors">
<div className="flex items-center gap-2 mb-2">
<svg aria-hidden="true" data-icon="lucide:video" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></g></svg>
<span className="text-[10px] font-medium text-neutral-400">Visual Directive</span>
</div>
<input className="w-full bg-transparent text-xs text-neutral-300 outline-none border-b border-transparent focus:border-white/10 pb-1" type="text" value="Futuristic UI interface floating in space, data visualization, glowing cyan lines"/>
</div>
</div>

<button className="w-full py-3 rounded border border-dashed border-neutral-800 text-neutral-500 text-xs font-medium hover:border-neutral-600 hover:text-neutral-300 transition-all flex items-center justify-center gap-2">
<svg aria-hidden="true" data-icon="lucide:plus" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Add Scene
                        </button>
</div>
</div>

<div className="p-4 border-t border-white/5 bg-neutral-900/20">
<div className="grid grid-cols-2 gap-4">

<div>
<label className="block text-[10px] uppercase text-neutral-500 font-semibold tracking-wider mb-2">Voiceover</label>
<div className="relative group">
<div className="flex items-center justify-between w-full p-2 bg-neutral-900 border border-white/10 rounded cursor-pointer hover:border-white/20 transition-all">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-orange-500/20 flex items-center justify-center">
<svg aria-hidden="true" data-icon="lucide:mic" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 19v3m7-12v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></g></svg>
</div>
<span className="text-xs text-neutral-300">Rachel (Professional)</span>
</div>
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
<div>
<label className="block text-[10px] uppercase text-neutral-500 font-semibold tracking-wider mb-2">Visual Style</label>
<div className="relative group">
<div className="flex items-center justify-between w-full p-2 bg-neutral-900 border border-white/10 rounded cursor-pointer hover:border-white/20 transition-all">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center">
<svg aria-hidden="true" data-icon="lucide:palette" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></g></svg>
</div>
<span className="text-xs text-neutral-300">Photorealistic 3D</span>
</div>
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col bg-neutral-950 relative">

<div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 bg-neutral-900/90 backdrop-blur border border-white/10 p-1 rounded-full shadow-2xl">
<button className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors">
<svg aria-hidden="true" data-icon="lucide:mouse-pointer-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors">
<svg aria-hidden="true" data-icon="lucide:crop" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 2v14a2 2 0 0 0 2 2h14"></path><path d="M18 22V8a2 2 0 0 0-2-2H2"></path></g></svg>
</button>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors">
<svg aria-hidden="true" className="" data-icon="lucide:type" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2M9 20h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<div className="w-px h-4 bg-white/10 mx-1"></div>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 transition-colors">
<svg aria-hidden="true" data-icon="lucide:play" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="flex-1 flex bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950 pt-8 pr-8 pb-8 pl-8 items-center justify-center">

<div className="aspect-video w-full max-w-3xl bg-neutral-900 border border-white/5 rounded-lg shadow-2xl relative overflow-hidden group">

<div className="absolute inset-0 flex items-center justify-center">
<img alt="preview" className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

<div className="absolute bottom-12 w-full text-center px-10">
<span className="inline-block bg-black/60 backdrop-blur-sm px-4 py-2 rounded text-white text-lg font-medium leading-tight shadow-lg">
                                    Transforms your words into stunning visual experiences.
                                </span>
</div>


</div>

<div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<input className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer" max="100" min="0" type="range" value="35"/>
<div className="flex justify-between items-center mt-2">
<span className="text-[10px] text-white/70 font-mono">00:05 / 00:32</span>
<div className="flex gap-3">
<svg aria-hidden="true" data-icon="lucide:volume-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298zM16 9a5 5 0 0 1 0 6m3.364 3.364a9 9 0 0 0 0-12.728" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:maximize" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="h-64 border-t border-white/5 bg-neutral-900/30 flex flex-col">

<div className="h-10 border-b border-white/5 flex items-center px-4 justify-between bg-neutral-950">
<div className="flex items-center gap-4">
<span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">Timeline</span>
<div className="flex items-center gap-1">
<button className="p-1 rounded hover:bg-white/5 text-neutral-500 hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="lucide:zoom-in" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><path d="m21 21l-4.35-4.35M11 8v6m-3-3h6"></path></g></svg>
</button>
<button className="p-1 rounded hover:bg-white/5 text-neutral-500 hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="lucide:zoom-out" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><path d="m21 21l-4.35-4.35M8 11h6"></path></g></svg>
</button>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2">
<label className="custom-check-label flex items-center gap-2">
<input checked="" className="custom-check-input" type="checkbox"/>
<div className="custom-check-box w-3.5 h-3.5 border border-white/20 rounded bg-transparent flex items-center justify-center">
<svg className="w-2.5 h-2.5 opacity-0 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-[10px] text-neutral-400">Snap</span>
</label>
</div>
</div>
</div>

<div className="flex-1 overflow-x-auto overflow-y-hidden p-4 relative">

<div className="absolute top-0 left-0 w-full h-6 border-b border-white/5 flex text-[10px] text-neutral-600 font-mono pl-24">
<span className="w-32">00:00</span>
<span className="w-32">00:05</span>
<span className="w-32">00:10</span>
<span className="w-32">00:15</span>
<span className="w-32">00:20</span>
</div>

<div className="absolute left-0 top-8 w-24 h-full bg-neutral-950 border-r border-white/5 z-10 flex flex-col gap-2 pt-1 px-2">
<div className="h-10 flex items-center text-[10px] font-medium text-neutral-400">
<svg aria-hidden="true" data-icon="lucide:video" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></g></svg> Video
                            </div>
<div className="h-10 flex items-center text-[10px] font-medium text-neutral-400">
<svg aria-hidden="true" data-icon="lucide:music" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></g></svg> Audio
                            </div>
<div className="h-10 flex items-center text-[10px] font-medium text-neutral-400">
<svg aria-hidden="true" data-icon="lucide:type" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2M9 20h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Text
                            </div>
</div>

<div className="absolute left-24 top-8 right-0 bottom-0 pt-1 pr-4">

<div className="h-10 mb-2 flex relative">
<div className="absolute left-0 w-32 h-full bg-neutral-800 rounded border border-white/10 group overflow-hidden cursor-pointer">
<img className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<span className="absolute bottom-1 left-2 text-[9px] text-white font-medium shadow-black drop-shadow-md">Scene 01</span>
<div className="absolute right-0 top-0 bottom-0 w-1 bg-blue-500 cursor-e-resize opacity-0 group-hover:opacity-100"></div>
</div>
<div className="absolute left-32 w-48 h-full bg-blue-900/30 rounded border border-blue-500/30 group overflow-hidden cursor-pointer">
<div className="w-full h-full flex items-center justify-center">
<span className="text-[9px] text-blue-200">Generating...</span>
</div>
</div>
</div>

<div className="h-10 mb-2 flex relative">
<div className="absolute left-0 w-80 h-full bg-orange-900/20 rounded border border-orange-500/20 flex items-center px-2">

<div className="flex gap-0.5 items-center w-full h-4 opacity-50">
<div className="w-1 h-3 bg-orange-400 rounded-full"></div>
<div className="w-1 h-5 bg-orange-400 rounded-full"></div>
<div className="w-1 h-2 bg-orange-400 rounded-full"></div>
<div className="w-1 h-6 bg-orange-400 rounded-full"></div>
<div className="w-1 h-3 bg-orange-400 rounded-full"></div>
<div className="w-1 h-4 bg-orange-400 rounded-full"></div>
<div className="w-1 h-2 bg-orange-400 rounded-full"></div>
</div>
<span className="absolute top-1 left-2 text-[8px] text-orange-300">Rachel_VO.mp3</span>
</div>
</div>

<div className="h-10 flex relative">
<div className="absolute left-10 w-40 h-8 mt-1 bg-purple-900/20 rounded border border-purple-500/20 flex items-center px-2 cursor-pointer hover:bg-purple-900/30">
<span className="text-[9px] text-purple-300 truncate">Subtitle: Imagine a world...</span>
</div>
</div>

<div className="absolute top-0 bottom-0 left-32 w-px bg-red-500 z-20 pointer-events-none">
<div className="absolute -top-1 -left-1.5 w-3 h-3 bg-red-500 transform rotate-45 rounded-[1px]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
