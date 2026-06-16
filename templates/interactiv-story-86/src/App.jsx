import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="h-14 border-b border-stone-800 flex items-center justify-between px-4 bg-stone-900 z-50 shrink-0">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 bg-rose-500/10 rounded flex items-center justify-center border border-rose-500/20 group-hover:border-rose-500/50 transition-colors">
<span className="text-rose-500 font-bold tracking-tighter text-lg">N</span>
</div>
<div className="flex flex-col">
<span className="text-stone-200 font-medium tracking-tight leading-none">Project Titan</span>
<span className="text-xs text-stone-500 leading-none mt-1">v0.4.2 • Autosaved</span>
</div>
</div>
<div className="h-4 w-px bg-stone-800 mx-2"></div>
<nav className="flex items-center gap-1">
<button className="px-3 py-1.5 hover:bg-stone-800 rounded text-stone-400 hover:text-stone-200 transition-colors text-xs font-medium">Flow</button>
<button className="px-3 py-1.5 hover:bg-stone-800 rounded text-stone-400 hover:text-stone-200 transition-colors text-xs font-medium">Script</button>
<button className="px-3 py-1.5 hover:bg-stone-800 rounded text-stone-400 hover:text-stone-200 transition-colors text-xs font-medium">Assets</button>
</nav>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center -space-x-2 mr-2">
<div className="w-6 h-6 rounded-full bg-stone-700 border-2 border-stone-900 flex items-center justify-center text-[10px] text-stone-300">JD</div>
<div className="w-6 h-6 rounded-full bg-rose-900 border-2 border-stone-900 flex items-center justify-center text-[10px] text-rose-200">AL</div>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 bg-stone-100 hover:bg-white text-stone-900 rounded font-medium text-xs transition-colors shadow-sm">
<i className="w-3 h-3 fill-current" data-lucide="play"></i>
                Play Test
            </button>
<button className="p-2 hover:bg-stone-800 rounded text-stone-400 hover:text-stone-200 transition-colors">
<i className="w-4 h-4" data-lucide="settings"></i>
</button>
</div>
</header>

<main className="flex-1 flex overflow-hidden">

<aside className="w-64 border-r border-stone-800 bg-stone-900 flex flex-col shrink-0">
<div className="p-3 border-b border-stone-800 flex items-center justify-between">
<span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Explorer</span>
<button className="text-stone-500 hover:text-stone-300"><i className="w-3 h-3" data-lucide="plus"></i></button>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-0.5">

<div>
<button className="w-full flex items-center gap-2 px-2 py-1.5 text-stone-300 hover:bg-stone-800/50 rounded group">
<i className="w-3 h-3 text-stone-500" data-lucide="chevron-down"></i>
<i className="w-3 h-3 text-stone-500 group-hover:text-rose-500 transition-colors" data-lucide="folder"></i>
<span className="text-xs font-medium">Act 1: Awakening</span>
</button>
<div className="pl-6 pt-0.5 space-y-0.5">
<button className="w-full flex items-center gap-2 px-2 py-1.5 bg-rose-500/10 text-rose-500 rounded border border-rose-500/20">
<i className="w-3 h-3" data-lucide="file-text"></i>
<span className="text-xs font-medium">Prologue.json</span>
</button>
<button className="w-full flex items-center gap-2 px-2 py-1.5 text-stone-400 hover:text-stone-200 hover:bg-stone-800/50 rounded">
<i className="w-3 h-3 opacity-70" data-lucide="file-text"></i>
<span className="text-xs">The Village</span>
</button>
<button className="w-full flex items-center gap-2 px-2 py-1.5 text-stone-400 hover:text-stone-200 hover:bg-stone-800/50 rounded">
<i className="w-3 h-3 opacity-70" data-lucide="file-text"></i>
<span className="text-xs">Tavern Scene</span>
</button>
</div>
</div>

<div className="pt-2">
<button className="w-full flex items-center gap-2 px-2 py-1.5 text-stone-400 hover:text-stone-200 hover:bg-stone-800/50 rounded group">
<i className="w-3 h-3 text-stone-600" data-lucide="chevron-right"></i>
<i className="w-3 h-3 text-stone-600 group-hover:text-stone-400 transition-colors" data-lucide="folder"></i>
<span className="text-xs font-medium">Act 2: Journey</span>
</button>
</div>
<div className="pt-2">
<button className="w-full flex items-center gap-2 px-2 py-1.5 text-stone-400 hover:text-stone-200 hover:bg-stone-800/50 rounded group">
<i className="w-3 h-3 text-stone-600" data-lucide="chevron-right"></i>
<i className="w-3 h-3 text-stone-600 group-hover:text-stone-400 transition-colors" data-lucide="database"></i>
<span className="text-xs font-medium">Global Variables</span>
</button>
</div>
</div>
<div className="p-3 border-t border-stone-800 text-[10px] text-stone-600 flex justify-between">
<span>12 Nodes</span>
<span>2.4MB</span>
</div>
</aside>

<div className="flex-1 relative bg-stone-950 overflow-hidden cursor-move group">

<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

<div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
<div className="bg-stone-800/90 backdrop-blur border border-stone-700 p-1 rounded-lg shadow-xl flex flex-col gap-1">
<button className="p-2 hover:bg-stone-700 rounded text-rose-500 bg-stone-700/50" title="Select">
<i className="w-4 h-4" data-lucide="mouse-pointer-2"></i>
</button>
<button className="p-2 hover:bg-stone-700 rounded text-stone-400 hover:text-stone-200" title="Add Node">
<i className="w-4 h-4" data-lucide="plus-square"></i>
</button>
<button className="p-2 hover:bg-stone-700 rounded text-stone-400 hover:text-stone-200" title="Connect">
<i className="w-4 h-4" data-lucide="link"></i>
</button>
<button className="p-2 hover:bg-stone-700 rounded text-stone-400 hover:text-stone-200" title="Comment">
<i className="w-4 h-4" data-lucide="message-square"></i>
</button>
</div>
</div>
<div className="absolute bottom-4 left-4 z-10 text-xs text-stone-600 font-mono">
                x: 1402 y: 894 • 100%
            </div>

<svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
<defs>
<marker id="arrowhead" markerheight="7" markerwidth="10" orient="auto" refx="9" refy="3.5">
<polygon fill="#57534e" points="0 0, 10 3.5, 0 7"></polygon>
</marker>
</defs>

<path d="M 380 180 C 430 180, 430 320, 480 320" fill="none" marker-end="url(#arrowhead)" stroke="#57534e" strokeWidth="2"></path>

<path d="M 736 320 C 786 320, 786 240, 836 240" fill="none" marker-end="url(#arrowhead)" stroke="#57534e" strokeWidth="2"></path>

<path d="M 736 380 C 786 380, 786 520, 836 520" fill="none" marker-end="url(#arrowhead)" stroke="#57534e" strokeWidth="2"></path>
</svg>

<div className="absolute top-[140px] left-[140px] w-60 rounded-lg bg-stone-900 border border-stone-700 node-shadow flex flex-col cursor-pointer hover:border-rose-500/50 transition-colors z-10">
<div className="h-1 bg-green-500 rounded-t-lg w-full"></div>
<div className="p-3">
<div className="flex items-center gap-2 mb-2">
<i className="w-3 h-3 text-green-500" data-lucide="play-circle"></i>
<span className="text-xs font-semibold text-stone-200">Start_Game</span>
</div>
<p className="text-[11px] text-stone-500 line-clamp-2">Initialize variables and load intro cinematic.</p>
</div>

<div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-stone-400 rounded-full border-2 border-stone-900 hover:bg-rose-500 transition-colors"></div>
</div>

<div className="absolute top-[280px] left-[480px] w-64 rounded-lg bg-stone-900 border border-rose-500 node-shadow flex flex-col cursor-pointer ring-1 ring-rose-500/20 z-20">
<div className="h-1 bg-blue-500 rounded-t-lg w-full"></div>
<div className="p-3">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<i className="w-3 h-3 text-blue-500" data-lucide="message-circle"></i>
<span className="text-xs font-semibold text-stone-200">dlg_stranger_meet</span>
</div>
<span className="text-[10px] bg-stone-800 text-stone-400 px-1.5 py-0.5 rounded border border-stone-700">ID: 024</span>
</div>
<div className="bg-stone-950 p-2 rounded border border-stone-800 mb-2">
<p className="text-xs text-stone-300 italic">"The wind howls. A figure approaches..."</p>
</div>
</div>

<div className="absolute top-1/2 -left-1.5 w-3 h-3 bg-stone-400 rounded-full border-2 border-stone-900"></div>

<div className="absolute top-[40px] -right-1.5 w-3 h-3 bg-stone-400 rounded-full border-2 border-stone-900 hover:bg-rose-500"></div>
<div className="absolute top-[100px] -right-1.5 w-3 h-3 bg-stone-400 rounded-full border-2 border-stone-900 hover:bg-rose-500"></div>
</div>

<div className="absolute top-[180px] left-[840px] w-60 rounded-lg bg-stone-900 border border-stone-700 node-shadow flex flex-col cursor-pointer hover:border-orange-500/50 transition-colors z-10">
<div className="h-1 bg-orange-500 rounded-t-lg w-full"></div>
<div className="p-3">
<div className="flex items-center gap-2 mb-2">
<i className="w-3 h-3 text-orange-500" data-lucide="git-branch"></i>
<span className="text-xs font-semibold text-stone-200">Choice_Fight</span>
</div>
<div className="space-y-1">
<div className="flex items-center justify-between text-[10px] bg-stone-800/50 p-1 rounded border border-stone-800/50">
<span className="text-stone-400">Condition</span>
<span className="text-orange-400 font-mono">str &gt; 5</span>
</div>
</div>
</div>

<div className="absolute top-1/2 -left-1.5 w-3 h-3 bg-stone-400 rounded-full border-2 border-stone-900"></div>
<div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-stone-400 rounded-full border-2 border-stone-900 hover:bg-rose-500"></div>
</div>

<div className="absolute top-[480px] left-[840px] w-48 rounded-lg bg-stone-900 border border-stone-700 node-shadow flex flex-col cursor-pointer opacity-70 hover:opacity-100 transition-opacity z-10">
<div className="h-1 bg-red-500 rounded-t-lg w-full"></div>
<div className="p-3">
<div className="flex items-center gap-2">
<i className="w-3 h-3 text-red-500" data-lucide="skull"></i>
<span className="text-xs font-semibold text-stone-200">Death_Scene</span>
</div>
</div>
<div className="absolute top-1/2 -left-1.5 w-3 h-3 bg-stone-400 rounded-full border-2 border-stone-900"></div>
</div>
</div>

<aside className="w-80 border-l border-stone-800 bg-stone-900 flex flex-col shrink-0 z-20 shadow-xl">

<div className="h-12 border-b border-stone-800 flex items-center justify-between px-4 bg-stone-900/50 backdrop-blur-sm">
<span className="text-xs font-semibold text-stone-200">Inspector</span>
<div className="flex gap-2">
<button className="text-stone-500 hover:text-stone-300"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button>
<button className="text-stone-500 hover:text-stone-300"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-6">

<div className="space-y-3">
<div className="flex flex-col gap-1.5">
<label className="text-[10px] uppercase font-semibold text-stone-500 tracking-wide">Node ID</label>
<input className="bg-stone-800 border border-stone-700 rounded px-2.5 py-1.5 text-xs text-stone-200 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20 font-mono transition-all" type="text" value="dlg_stranger_meet"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-[10px] uppercase font-semibold text-stone-500 tracking-wide">Speaker</label>
<div className="relative group">
<select className="w-full bg-stone-800 border border-stone-700 rounded px-2.5 py-1.5 text-xs text-stone-200 appearance-none focus:outline-none focus:border-rose-500 transition-colors cursor-pointer">
<option>Stranger</option>
<option>Player</option>
<option>Narrator</option>
</select>
<i className="absolute right-2.5 top-2 w-3 h-3 text-stone-500 pointer-events-none group-hover:text-stone-300" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between">
<label className="text-[10px] uppercase font-semibold text-stone-500 tracking-wide">Dialogue Text</label>
<span className="text-[10px] text-stone-600">Markdown enabled</span>
</div>
<div className="relative">
<textarea className="w-full bg-stone-800/50 border border-stone-700 rounded-lg p-3 text-sm text-stone-200 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20 h-32 resize-none leading-relaxed transition-all placeholder:text-stone-600" placeholder="Type dialog here...">"Well met, traveler. The roads are dangerous tonight."
                        
He gestures to the empty seat opposite him.</textarea>
<div className="absolute bottom-2 right-2 text-[10px] text-stone-600 bg-stone-800 px-1 rounded">84 chars</div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between border-b border-stone-800 pb-2">
<label className="text-[10px] uppercase font-semibold text-stone-500 tracking-wide">Responses / Options</label>
<button className="text-[10px] bg-stone-800 hover:bg-stone-700 text-stone-300 px-2 py-0.5 rounded border border-stone-700 transition-colors">+ Add</button>
</div>
<div className="space-y-2">

<div className="bg-stone-800/30 rounded border border-stone-700 p-2 group hover:border-stone-600 transition-colors">
<div className="flex items-start gap-2">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_4px_rgba(244,63,94,0.5)]"></div>
<div className="flex-1 space-y-2">
<input className="w-full bg-transparent border-none p-0 text-xs text-stone-200 focus:ring-0 placeholder:text-stone-600 font-medium" type="text" value="Sit down cautiously."/>
<div className="flex items-center gap-2">
<div className="flex items-center gap-1 px-1.5 py-0.5 bg-stone-800 rounded border border-stone-700">
<i className="w-3 h-3 text-stone-500" data-lucide="arrow-right-circle"></i>
<span className="text-[10px] text-stone-400 font-mono">next: Choice_Fight</span>
</div>
</div>
</div>
<button className="opacity-0 group-hover:opacity-100 text-stone-500 hover:text-rose-500 transition-all"><i className="w-3 h-3" data-lucide="trash-2"></i></button>
</div>
</div>

<div className="bg-stone-800/30 rounded border border-stone-700 p-2 group hover:border-stone-600 transition-colors">
<div className="flex items-start gap-2">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-600"></div>
<div className="flex-1 space-y-2">
<input className="w-full bg-transparent border-none p-0 text-xs text-stone-200 focus:ring-0 placeholder:text-stone-600 font-medium" type="text" value="Draw your weapon."/>
<div className="flex items-center gap-2">
<div className="flex items-center gap-1 px-1.5 py-0.5 bg-stone-800 rounded border border-stone-700">
<i className="w-3 h-3 text-stone-500" data-lucide="arrow-right-circle"></i>
<span className="text-[10px] text-stone-400 font-mono">next: Combat_Start</span>
</div>
</div>
</div>
<button className="opacity-0 group-hover:opacity-100 text-stone-500 hover:text-rose-500 transition-all"><i className="w-3 h-3" data-lucide="trash-2"></i></button>
</div>
</div>
</div>
</div>

<div className="pt-4 border-t border-stone-800 space-y-3">
<label className="text-[10px] uppercase font-semibold text-stone-500 tracking-wide">Logic &amp; Events</label>

<div className="flex items-center justify-between">
<span className="text-xs text-stone-400">Run once</span>
<button className="w-8 h-4 bg-stone-700 rounded-full relative transition-colors hover:bg-stone-600 cursor-pointer">
<div className="absolute left-0.5 top-0.5 w-3 h-3 bg-stone-300 rounded-full shadow-sm"></div>
</button>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-stone-400">Track analytics</span>
<button className="w-8 h-4 bg-rose-500 rounded-full relative transition-colors cursor-pointer">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</button>
</div>
<div className="pt-2">
<button className="w-full py-1.5 border border-dashed border-stone-700 text-stone-500 rounded text-xs hover:border-stone-500 hover:text-stone-300 transition-all flex items-center justify-center gap-2">
<i className="w-3 h-3" data-lucide="code"></i> Add Script
                        </button>
</div>
</div>
</div>

<div className="p-4 border-t border-stone-800 bg-stone-900">
<button className="w-full bg-stone-100 hover:bg-white text-stone-900 font-semibold py-2 rounded text-xs shadow-md transition-all active:scale-[0.98]">
                    Save Changes
                </button>
</div>
</aside>
</main>


    </>
  );
}
