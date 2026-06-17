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



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
neutral: {
850: '#1f1f1f',
925: '#101010',
950: '#0a0a0a',
}
}
}
}
}



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
      

<header className="h-14 border-b border-neutral-900 flex items-center justify-between px-6 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-50">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-neutral-100 group cursor-pointer">
<div className="w-6 h-6 bg-neutral-100 rounded flex items-center justify-center">
<div className="w-3 h-3 bg-neutral-950 rounded-full"></div>
</div>
<span className="text-sm font-semibold tracking-tighter group-hover:opacity-80 transition-opacity">AUTOSHORTS.AI</span>
</div>
<span className="text-neutral-700 text-lg font-thin">/</span>
<div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-neutral-900 transition-colors cursor-pointer">
<span className="text-xs font-medium text-neutral-300">Workflows</span>
<span className="text-neutral-600">v2.4</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 text-xs font-medium text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                System Operational
            </div>
<button className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:border-neutral-700 transition-colors">
<i className="w-4 h-4 text-neutral-400" data-lucide="bell"></i>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neutral-700 to-neutral-600 border border-neutral-700"></div>
</div>
</header>

<div className="flex flex-1 h-full overflow-hidden">

<aside className="w-16 border-r border-neutral-900 flex flex-col items-center py-6 gap-6 hidden sm:flex">
<button className="p-2 rounded-lg bg-neutral-100 text-neutral-950 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<i className="w-5 h-5" data-lucide="zap"></i>
</button>
<button className="p-2 rounded-lg hover:bg-neutral-900 hover:text-neutral-200 transition-colors relative group">
<i className="w-5 h-5" data-lucide="layout-grid"></i>
<div className="absolute left-14 top-1/2 -translate-y-1/2 bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Dashboard</div>
</button>
<button className="p-2 rounded-lg hover:bg-neutral-900 hover:text-neutral-200 transition-colors relative group">
<i className="w-5 h-5" data-lucide="layers"></i>
</button>
<button className="p-2 rounded-lg hover:bg-neutral-900 hover:text-neutral-200 transition-colors relative group">
<i className="w-5 h-5" data-lucide="calendar"></i>
</button>
<div className="flex-1"></div>
<button className="p-2 rounded-lg hover:bg-neutral-900 hover:text-neutral-200 transition-colors">
<i className="w-5 h-5" data-lucide="settings"></i>
</button>
</aside>

<main className="flex-1 overflow-y-auto border-r border-neutral-900 bg-neutral-950">
<div className="max-w-3xl mx-auto py-10 px-8">
<div className="mb-10">
<h1 className="text-2xl font-semibold text-neutral-100 tracking-tight mb-2">Create New Workflow</h1>
<p className="text-sm text-neutral-500">Configure your autonomous agent to generate and post content.</p>
</div>

<div className="relative pl-8 pb-10 border-l border-neutral-800 last:border-0 last:pb-0">
<div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-xs font-medium text-neutral-300">1</div>
<div className="bg-neutral-925 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20 text-blue-400">
<i className="w-5 h-5" data-lucide="brain-circuit"></i>
</div>
<div>
<h3 className="text-sm font-medium text-neutral-200">Content Source</h3>
<p className="text-xs text-neutral-500">Define what the AI should talk about.</p>
</div>
</div>
<span className="text-[10px] font-mono text-neutral-600 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">INPUT</span>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Niche / Topic</label>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all placeholder:text-neutral-700" placeholder="e.g. Psychology Facts, Tech News" type="text" value="Interesting History Facts"/>
</div>
<div className="flex gap-4">
<div className="flex-1">
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Source Material</label>
<select className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-neutral-600 appearance-none cursor-pointer">
<option>Generate from LLM (GPT-4)</option>
<option>Scrape Reddit (Top Daily)</option>
<option>Scrape News RSS</option>
</select>
</div>
<div className="w-1/3">
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Frequency</label>
<select className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-neutral-600 appearance-none cursor-pointer">
<option>Daily</option>
<option>Twice Daily</option>
<option>Hourly</option>
</select>
</div>
</div>
</div>
</div>
</div>

<div className="relative pl-8 pb-10 border-l border-neutral-800 last:border-0 last:pb-0">
<div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-xs font-medium text-neutral-300">2</div>
<div className="bg-neutral-925 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20 text-purple-400">
<i className="w-5 h-5" data-lucide="wand-2"></i>
</div>
<div>
<h3 className="text-sm font-medium text-neutral-200">Generation Settings</h3>
<p className="text-xs text-neutral-500">Video style, voiceover, and captions.</p>
</div>
</div>
<span className="text-[10px] font-mono text-neutral-600 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">PROCESS</span>
</div>
<div className="grid grid-cols-2 gap-4 mb-4">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Visual Style</label>
<div className="relative">
<select className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-neutral-600 appearance-none cursor-pointer">
<option>AI Stock B-Roll</option>
<option>Generated Art (Midjourney)</option>
<option>Minimal Text Overlay</option>
<option>Minecraft Parkour</option>
</select>
<i className="absolute right-3 top-2.5 w-4 h-4 text-neutral-600 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Voiceover</label>
<div className="relative">
<select className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-neutral-600 appearance-none cursor-pointer">
<option>Adam (Deep, Viral)</option>
<option>ElevenLabs - Josh</option>
<option>ElevenLabs - Rachel</option>
</select>
<i className="absolute right-3 top-2.5 w-4 h-4 text-neutral-600 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="space-y-4 pt-2">
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-neutral-400">Video Duration</span>
<span className="text-neutral-200 font-mono">55s</span>
</div>
<div className="w-full h-1 bg-neutral-800 rounded-full relative cursor-pointer group">
<div className="absolute left-0 top-0 h-full bg-neutral-200 w-[85%] rounded-full group-hover:bg-white transition-colors"></div>
<div className="absolute left-[85%] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow border border-neutral-300 transform scale-0 group-hover:scale-100 transition-transform"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-neutral-400">Editing Pace (Cuts per min)</span>
<span className="text-neutral-200 font-mono">Fast</span>
</div>
<div className="w-full h-1 bg-neutral-800 rounded-full relative cursor-pointer group">
<div className="absolute left-0 top-0 h-full bg-neutral-200 w-[70%] rounded-full group-hover:bg-white transition-colors"></div>
</div>
</div>
</div>
<div className="mt-4 flex items-center gap-2">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-neutral-400 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neutral-100 peer-checked:after:bg-black"></div>
</label>
<span className="text-xs text-neutral-400">Add dynamic subtitles (Karaoke style)</span>
</div>
</div>
</div>

<div className="relative pl-8 pb-4 border-l border-neutral-800 border-transparent">
<div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-xs font-medium text-neutral-300">3</div>
<div className="bg-neutral-925 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="p-2 bg-red-500/10 rounded-lg border border-red-500/20 text-red-500">
<i className="w-5 h-5" data-lucide="youtube"></i>
</div>
<div>
<h3 className="text-sm font-medium text-neutral-200">Publishing</h3>
<p className="text-xs text-neutral-500">Destination channels and approval flow.</p>
</div>
</div>
<span className="text-[10px] font-mono text-neutral-600 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">OUTPUT</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-neutral-800 bg-neutral-900/50 mb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-neutral-300">YT</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-neutral-200">@HistoryFacts_Shorts</span>
<span className="text-[10px] text-green-500 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="check-circle-2"></i> Connected
                                    </span>
</div>
</div>
<button className="text-xs text-neutral-500 hover:text-neutral-300">Manage</button>
</div>
<div className="flex items-center gap-3 mb-2">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-neutral-400 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500 peer-checked:after:bg-white"></div>
</label>
<span className="text-xs text-neutral-400">Auto-post without manual approval</span>
</div>
</div>
</div>
<div className="mt-8 flex justify-end gap-3 pl-8">
<button className="px-4 py-2 rounded-md border border-neutral-800 text-xs font-medium text-neutral-300 hover:bg-neutral-900 transition-colors">Save Draft</button>
<button className="px-4 py-2 rounded-md bg-neutral-100 text-black text-xs font-semibold hover:bg-neutral-300 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-2">
<i className="w-3 h-3 fill-current" data-lucide="play"></i>
                        Activate Workflow
                    </button>
</div>
</div>
</main>

<aside className="w-[400px] bg-neutral-950 flex flex-col hidden lg:flex">

<div className="flex border-b border-neutral-900">
<button className="flex-1 py-3 text-xs font-medium text-neutral-200 border-b border-neutral-200 bg-neutral-900/50">Activity Log</button>
<button className="flex-1 py-3 text-xs font-medium text-neutral-500 hover:text-neutral-300">Preview</button>
</div>

<div className="flex-1 p-4 font-mono text-[11px] overflow-y-auto space-y-3">
<div className="flex gap-2">
<span className="text-neutral-600">10:42:01</span>
<span className="text-emerald-500">System initialized.</span>
</div>
<div className="flex gap-2">
<span className="text-neutral-600">10:42:05</span>
<span className="text-neutral-400">Workflow "History Facts" triggered manually.</span>
</div>
<div className="flex gap-2">
<span className="text-neutral-600">10:42:06</span>
<span className="text-blue-400">Fetching topic from GPT-4...</span>
</div>
<div className="pl-14 border-l border-neutral-800 ml-3 py-1 text-neutral-500">
                    Topic: "The Great Emu War of 1932"<br/>
                    Keywords: Australia, Birds, Military, Fail
                </div>
<div className="flex gap-2">
<span className="text-neutral-600">10:42:12</span>
<span className="text-blue-400">Generating script...</span>
</div>
<div className="flex gap-2">
<span className="text-neutral-600">10:42:15</span>
<span className="text-neutral-400">Script generated (142 words).</span>
</div>
<div className="flex gap-2">
<span className="text-neutral-600">10:42:16</span>
<span className="text-purple-400">Synthesizing audio (ElevenLabs)...</span>
</div>
<div className="flex gap-2">
<span className="text-neutral-600">10:42:22</span>
<span className="text-yellow-500">Searching B-roll media...</span>
</div>

<div className="mt-4 border border-neutral-800 bg-neutral-925 rounded p-3">
<div className="flex justify-between items-center mb-2">
<span className="text-neutral-300 font-sans font-medium text-xs">Rendering Video</span>
<span className="text-neutral-500">78%</span>
</div>
<div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-neutral-100 h-full w-[78%] animate-pulse"></div>
</div>
<div className="mt-2 text-neutral-500 text-[10px] flex gap-2">
<span>ETA: 12s</span>
<span>•</span>
<span>1080x1920</span>
<span>•</span>
<span>60fps</span>
</div>
</div>
<div className="flex gap-2 opacity-50">
<span className="text-neutral-600">--:--:--</span>
<span className="text-neutral-600">Waiting for render...</span>
</div>
</div>

<div className="p-4 border-t border-neutral-900 bg-neutral-950">
<div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3">
<h4 className="text-xs font-medium text-neutral-300 mb-1">Next Scheduled Run</h4>
<p className="text-xs text-neutral-500">Today, 4:00 PM EST</p>
<div className="mt-2 flex gap-2">
<button className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-[10px] py-1.5 rounded transition-colors">Skip</button>
<button className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-[10px] py-1.5 rounded transition-colors">Run Now</button>
</div>
</div>
</div>
</aside>
</div>


    </>
  );
}
