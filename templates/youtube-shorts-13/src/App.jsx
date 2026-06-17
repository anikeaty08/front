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
      

<aside className="w-64 border-r border-zinc-900/60 bg-zinc-950 flex flex-col justify-between hidden md:flex">
<div>

<div className="h-16 flex items-center px-6 border-b border-zinc-900/60">
<div className="font-semibold text-lg tracking-tighter text-white flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded flex items-center justify-center">
<div className="w-3 h-3 bg-zinc-950 rounded-sm"></div>
</div>
                    AUTOSHORT
                </div>
</div>

<nav className="px-3 py-6 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-100 bg-zinc-900/50 rounded-md border border-zinc-800/50 transition-all" href="#">
<iconify-icon icon="solar:widget-linear" width="18"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:text-zinc-100 hover:bg-zinc-900/30 rounded-md transition-all" href="#">
<iconify-icon icon="solar:video-library-linear" width="18"></iconify-icon>
                    Content Library
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:text-zinc-100 hover:bg-zinc-900/30 rounded-md transition-all" href="#">
<iconify-icon icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
                    Generators
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:text-zinc-100 hover:bg-zinc-900/30 rounded-md transition-all" href="#">
<iconify-icon icon="solar:chart-2-linear" width="18"></iconify-icon>
                    Analytics
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:text-zinc-100 hover:bg-zinc-900/30 rounded-md transition-all" href="#">
<iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon>
                    Schedule
                </a>
</nav>
<div className="px-6 py-4">
<div className="text-xs font-medium text-zinc-600 uppercase tracking-widest mb-3">Workflows</div>
<div className="space-y-3">
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
<span className="text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors">Reddit Stories</span>
</div>
<span className="text-[10px] bg-zinc-900 text-zinc-500 px-1.5 py-0.5 rounded border border-zinc-800">Active</span>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]"></div>
<span className="text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors">Facts &amp; Trivia</span>
</div>
<span className="text-[10px] bg-zinc-900 text-zinc-500 px-1.5 py-0.5 rounded border border-zinc-800">Paused</span>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-zinc-900/60">
<button className="flex items-center gap-3 w-full p-2 rounded-md hover:bg-zinc-900/40 transition-colors">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 border border-zinc-500 flex items-center justify-center text-xs text-white font-medium">JD</div>
<div className="text-left">
<div className="text-xs font-medium text-zinc-200">John Doe</div>
<div className="text-[10px] text-zinc-500">Pro Plan</div>
</div>
<iconify-icon className="ml-auto text-zinc-500" icon="solar:settings-linear" width="16"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full bg-black/20 overflow-hidden relative">

<div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-zinc-900/20 to-transparent pointer-events-none"></div>

<header className="h-16 border-b border-zinc-900/60 flex items-center justify-between px-8 bg-zinc-950/50 backdrop-blur-sm z-10">
<div className="flex items-center gap-2 text-sm text-zinc-500">
<span>Dashboard</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-zinc-200">Overview</span>
</div>
<div className="flex items-center gap-4">
<button className="text-zinc-500 hover:text-zinc-300 transition-colors">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</button>
<button className="bg-white text-black hover:bg-zinc-200 px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-2">
<iconify-icon icon="solar:add-circle-linear" width="14"></iconify-icon>
                    Create Short
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 scroll-smooth">

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
<div className="p-5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:border-zinc-800 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
<iconify-icon icon="solar:eye-linear" width="18"></iconify-icon>
</div>
<span className="text-emerald-500 text-xs font-medium bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">+12%</span>
</div>
<div className="text-2xl font-medium text-zinc-100 tracking-tight mb-1">1.2M</div>
<div className="text-xs text-zinc-500">Total Views</div>
</div>
<div className="p-5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:border-zinc-800 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
</div>
<span className="text-emerald-500 text-xs font-medium bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">+4%</span>
</div>
<div className="text-2xl font-medium text-zinc-100 tracking-tight mb-1">24.5k</div>
<div className="text-xs text-zinc-500">Subscribers</div>
</div>
<div className="p-5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:border-zinc-800 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
<iconify-icon icon="solar:clock-circle-linear" width="18"></iconify-icon>
</div>
</div>
<div className="text-2xl font-medium text-zinc-100 tracking-tight mb-1">1h 42m</div>
<div className="text-xs text-zinc-500">Saved Time</div>
</div>
<div className="p-5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:border-zinc-800 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
<iconify-icon icon="solar:wallet-linear" width="18"></iconify-icon>
</div>
</div>
<div className="text-2xl font-medium text-zinc-100 tracking-tight mb-1">840</div>
<div className="text-xs text-zinc-500">Credits Left</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-8">
<div className="flex items-center justify-between">
<h2 className="text-lg font-medium text-zinc-100 tracking-tight">New Automation</h2>
<button className="text-xs text-zinc-500 hover:text-zinc-300">Reset Config</button>
</div>
<div className="border border-zinc-900 rounded-xl bg-zinc-950/30 p-6 space-y-6">

<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400">Video Topic or Script</label>
<div className="relative">
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-600" placeholder="e.g. Top 5 mysterious places in the world..." type="text"/>
<button className="absolute right-2 top-2 p-1 text-zinc-500 hover:text-indigo-400 transition-colors">
<iconify-icon icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400">AI Voice Model</label>
<div className="relative">
<select className="w-full appearance-none bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-300 focus:outline-none focus:border-zinc-600">
<option>Adam (Deep, Narrator)</option>
<option>Eleven (Expressive)</option>
<option>Rachel (News Anchor)</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400">Background Footage</label>
<div className="relative">
<select className="w-full appearance-none bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-300 focus:outline-none focus:border-zinc-600">
<option>Minecraft Parkour</option>
<option>GTA V Stunts</option>
<option>Subway Surfers</option>
<option>Oddly Satisfying</option>
<option>Stock AI Abstract</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-zinc-500 pointer-events-none" icon="solar:videocamera-record-linear" width="14"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-4 pt-2">
<div className="flex justify-between items-center">
<label className="text-xs font-medium text-zinc-400">Duration Limit</label>
<span className="text-xs font-mono text-zinc-300 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">45s</span>
</div>
<input className="w-full" max="60" min="15" type="range" value="45"/>
<div className="flex justify-between text-[10px] text-zinc-600 font-medium">
<span>15s</span>
<span>30s</span>
<span>45s</span>
<span>60s</span>
</div>
</div>

<div className="grid grid-cols-2 gap-4 pt-2">
<div className="flex items-center justify-between p-3 border border-zinc-800/50 rounded-lg bg-zinc-900/20">
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-300">Auto Captions</span>
<span className="text-[10px] text-zinc-500">Karaoke style animation</span>
</div>

<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
</label>
</div>
<div className="flex items-center justify-between p-3 border border-zinc-800/50 rounded-lg bg-zinc-900/20">
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-300">Auto Upload</span>
<span className="text-[10px] text-zinc-500">Post to linked channel</span>
</div>

<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
</label>
</div>
</div>
<div className="pt-2">
<button className="w-full bg-white hover:bg-zinc-200 text-black font-medium py-2.5 rounded-lg transition-all text-sm shadow-[0_0_15px_rgba(255,255,255,0.1)] flex justify-center items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                                Generate Short
                            </button>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-lg font-medium text-zinc-100 tracking-tight">Trending Hashtags</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<div className="p-3 border border-zinc-800 rounded-lg bg-zinc-900/20 hover:bg-zinc-900/50 cursor-pointer transition-colors group">
<div className="text-xs font-mono text-indigo-400 mb-1">#AIRevolution</div>
<div className="text-[10px] text-zinc-500 group-hover:text-zinc-400">2.1M views/hr</div>
</div>
<div className="p-3 border border-zinc-800 rounded-lg bg-zinc-900/20 hover:bg-zinc-900/50 cursor-pointer transition-colors group">
<div className="text-xs font-mono text-indigo-400 mb-1">#CodingLife</div>
<div className="text-[10px] text-zinc-500 group-hover:text-zinc-400">850K views/hr</div>
</div>
<div className="p-3 border border-zinc-800 rounded-lg bg-zinc-900/20 hover:bg-zinc-900/50 cursor-pointer transition-colors group">
<div className="text-xs font-mono text-indigo-400 mb-1">#FactsDaily</div>
<div className="text-[10px] text-zinc-500 group-hover:text-zinc-400">1.4M views/hr</div>
</div>
<div className="p-3 border border-zinc-800 rounded-lg bg-zinc-900/20 hover:bg-zinc-900/50 cursor-pointer transition-colors group">
<div className="text-xs font-mono text-indigo-400 mb-1">#Motivation</div>
<div className="text-[10px] text-zinc-500 group-hover:text-zinc-400">3.2M views/hr</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<h2 className="text-lg font-medium text-zinc-100 tracking-tight">Active Queue</h2>

<div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-10 bg-zinc-800 rounded overflow-hidden flex-shrink-0 border border-zinc-700">
<div className="w-full h-full bg-indigo-500/20 flex items-center justify-center">
<iconify-icon className="text-indigo-400" icon="solar:clapperboard-edit-linear" width="16"></iconify-icon>
</div>
</div>
<div>
<div className="text-xs font-medium text-zinc-200">History of Rome</div>
<div className="text-[10px] text-zinc-500">Generating Voiceover...</div>
</div>
</div>
<div className="w-4 h-4 rounded-full border border-indigo-500/30 flex items-center justify-center animate-spin">
<div className="w-2 h-2 border-t border-indigo-500 rounded-full"></div>
</div>
</div>

<div className="mt-2">
<div className="flex justify-between text-[10px] text-zinc-500 mb-1.5">
<span>Progress</span>
<span>42%</span>
</div>
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[42%] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
</div>
</div>
</div>

<div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 opacity-70 hover:opacity-100 transition-opacity">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-3">
<div className="w-8 h-10 bg-zinc-800 rounded overflow-hidden flex-shrink-0 border border-zinc-700">
<div className="w-full h-full flex items-center justify-center">
<iconify-icon className="text-zinc-600" icon="solar:gallery-wide-linear" width="16"></iconify-icon>
</div>
</div>
<div>
<div className="text-xs font-medium text-zinc-200">Tech News Daily</div>
<div className="text-[10px] text-zinc-500">Scheduled: 14:00</div>
</div>
</div>
<span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-500 border border-zinc-700">Queued</span>
</div>
</div>

<div className="pt-4">
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-4">Recent Uploads</h3>
<div className="space-y-0 divide-y divide-zinc-800/50 border-t border-b border-zinc-800/50">

<div className="py-3 flex items-center justify-between group hover:bg-zinc-900/20 transition-colors -mx-2 px-2 rounded-sm">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<div className="flex flex-col">
<span className="text-xs text-zinc-300">Space Facts #42</span>
<span className="text-[10px] text-zinc-600">Posted 2h ago</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="text-right">
<div className="text-xs font-mono text-zinc-400">12.4k</div>
<div className="text-[10px] text-zinc-600">Views</div>
</div>
<iconify-icon className="text-zinc-600 hover:text-white cursor-pointer" icon="solar:link-circle-linear" width="16"></iconify-icon>
</div>
</div>

<div className="py-3 flex items-center justify-between group hover:bg-zinc-900/20 transition-colors -mx-2 px-2 rounded-sm">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<div className="flex flex-col">
<span className="text-xs text-zinc-300">Sigma Rule #99</span>
<span className="text-[10px] text-zinc-600">Posted 5h ago</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="text-right">
<div className="text-xs font-mono text-zinc-400">8.1k</div>
<div className="text-[10px] text-zinc-600">Views</div>
</div>
<iconify-icon className="text-zinc-600 hover:text-white cursor-pointer" icon="solar:link-circle-linear" width="16"></iconify-icon>
</div>
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
