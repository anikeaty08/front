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
theme: {
extend: {
colors: {
slate: {
850: '#151e2e',
950: '#020617', // darker base
}
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}

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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-14">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-indigo-500 rounded-md flex items-center justify-center text-white text-xs font-semibold">L</div>
<span className="text-sm font-medium tracking-tight text-white">LUMINA</span>
</div>
<div className="hidden md:flex gap-8">
<a className="text-xs font-medium hover:text-white transition-colors" href="#">Features</a>
<a className="text-xs font-medium hover:text-white transition-colors" href="#">Templates</a>
<a className="text-xs font-medium hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-xs font-medium hover:text-white transition-colors" href="#">Community</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<button className="bg-white text-slate-950 px-3 py-1.5 rounded text-xs font-semibold hover:bg-slate-200 transition-colors">Start Creating</button>
</div>
</div>
</div>
</nav>

<main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto min-h-screen flex flex-col">

<div className="text-center mb-10 space-y-3">
<div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-medium uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                AI Integrated Workflow
            </div>
<h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight">Edit reality with intelligence.</h1>
<p className="text-slate-400 text-sm max-w-2xl mx-auto font-light">
                Professional photo manipulation and video editing suite powered by next-gen generative AI. 
                Remove backgrounds, generate subtitles, and color grade in seconds.
            </p>
</div>

<div className="flex-1 glass-panel rounded-xl overflow-hidden shadow-2xl shadow-indigo-900/20 flex flex-col h-[80vh] w-full border border-white/10 relative">

<div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-slate-900/50">
<div className="flex items-center gap-4">
<div className="flex gap-2">
<span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></span>
<span className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></span>
<span className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></span>
</div>
<div className="h-4 w-px bg-white/10 mx-2"></div>
<button className="flex items-center gap-2 text-xs text-white bg-slate-800 hover:bg-slate-700 px-3 py-1 rounded border border-white/5 transition-colors">
<iconify-icon icon="solar:gallery-linear" width="14"></iconify-icon>
                        Import Media
                    </button>
<div className="flex text-[10px] gap-2 text-slate-400">
<button className="hover:text-white">File</button>
<button className="hover:text-white">Edit</button>
<button className="hover:text-white">AI Tools</button>
<button className="hover:text-white">View</button>
</div>
</div>
<div className="flex items-center gap-2 bg-black/20 rounded-lg p-0.5 border border-white/5">
<button className="px-3 py-1 rounded-md bg-slate-800 text-white text-[10px] font-medium shadow-sm">Video</button>
<button className="px-3 py-1 rounded-md text-slate-400 hover:text-white text-[10px] font-medium transition-colors">Photo</button>
</div>
<div className="flex items-center gap-3">
<span className="text-[10px] text-slate-500">Auto-saved</span>
<button className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded text-xs font-medium transition-all shadow-[0_0_15px_-3px_rgba(99,102,241,0.4)]">
                        Export
                        <iconify-icon icon="solar:export-linear" width="12"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 flex overflow-hidden">

<div className="w-16 border-r border-white/5 bg-slate-900/30 flex flex-col items-center py-4 gap-6">
<button className="group flex flex-col items-center gap-1 text-indigo-400">
<iconify-icon icon="solar:cursor-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-[9px] font-medium">Select</span>
</button>
<button className="group flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="solar:scissors-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-[9px]">Cut</span>
</button>
<button className="group flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="solar:text-field-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-[9px]">Text</span>
</button>
<button className="group flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors">
<iconify-icon className="text-indigo-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-[9px]">AI Edit</span>
</button>
<button className="group flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="solar:clapperboard-text-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-[9px]">Subs</span>
</button>
<button className="group flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="solar:music-note-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-[9px]">Audio</span>
</button>
<div className="flex-1"></div>
<button className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white">
<iconify-icon icon="solar:settings-linear" width="16"></iconify-icon>
</button>
</div>

<div className="w-64 border-r border-white/5 bg-slate-900/10 flex flex-col hidden lg:flex">
<div className="p-4 border-b border-white/5">
<div className="relative">
<iconify-icon className="absolute left-2.5 top-2 text-slate-500" icon="solar:magnifer-linear" width="14"></iconify-icon>
<input className="w-full bg-slate-900 border border-white/10 rounded-md py-1.5 pl-8 pr-3 text-xs text-slate-300 focus:outline-none focus:border-indigo-500/50" placeholder="Search assets..." type="text"/>
</div>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-6">

<div>
<h3 className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider mb-3">AI Generation</h3>
<div className="space-y-2">
<div className="p-3 rounded border border-indigo-500/20 bg-indigo-500/5 space-y-2">
<label className="text-[10px] text-indigo-300 font-medium">Text to Video</label>
<textarea className="w-full bg-slate-950/50 border border-white/10 rounded p-2 text-[10px] text-slate-300 resize-none h-16 focus:outline-none focus:border-indigo-500/50" placeholder="A cinematic drone shot of a futuristic city..."></textarea>
<button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-1 rounded text-[10px] font-medium transition-colors">Generate</button>
</div>
</div>
</div>

<div>
<h3 className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider mb-3">Project Media</h3>
<div className="grid grid-cols-2 gap-2">
<div className="aspect-square bg-slate-800 rounded border border-white/5 overflow-hidden relative group cursor-pointer">
<div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="solar:add-circle-linear" width="20"></iconify-icon>
</div>
<img alt="Asset" className="w-full h-full object-cover opacity-70" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div className="aspect-square bg-slate-800 rounded border border-white/5 overflow-hidden relative group cursor-pointer">
<img alt="Asset" className="w-full h-full object-cover opacity-70" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div className="aspect-square bg-slate-800 rounded border border-white/5 overflow-hidden relative group cursor-pointer">
<img alt="Asset" className="w-full h-full object-cover opacity-70" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div className="aspect-square bg-slate-900 rounded border border-white/5 flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-slate-800 transition-colors">
<iconify-icon className="text-slate-500" icon="solar:upload-linear" width="16"></iconify-icon>
<span className="text-[9px] text-slate-500">Upload</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col bg-slate-950 relative">

<div className="flex-1 flex items-center justify-center p-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 to-slate-950 relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

<div className="relative w-[70%] aspect-video bg-black shadow-2xl shadow-black ring-1 ring-white/10 group">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute bottom-4 left-0 right-0 text-center">
<div className="inline-block bg-black/60 backdrop-blur px-3 py-1 rounded text-white text-sm font-medium border border-white/10">
                                    "Exploring the mountains today!"
                                </div>
</div>

<div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-indigo-500 border border-white"></div>
<div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-indigo-500 border border-white"></div>
<div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-indigo-500 border border-white"></div>
<div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-indigo-500 border border-white"></div>
</div>

<div className="absolute bottom-6 right-6 bg-slate-800/80 backdrop-blur rounded-full px-3 py-1.5 flex items-center gap-3 border border-white/10">
<button className="text-slate-400 hover:text-white"><iconify-icon icon="solar:minus-linear" width="14"></iconify-icon></button>
<span className="text-[10px] font-medium text-slate-300">45%</span>
<button className="text-slate-400 hover:text-white"><iconify-icon icon="solar:add-linear" width="14"></iconify-icon></button>
</div>
</div>

<div className="h-48 border-t border-white/5 bg-slate-900/50 flex flex-col">

<div className="h-8 border-b border-white/5 flex items-center justify-between px-3 bg-slate-900">
<div className="flex items-center gap-3">
<button className="text-slate-400 hover:text-white"><iconify-icon icon="solar:undo-left-linear" width="14"></iconify-icon></button>
<button className="text-slate-400 hover:text-white"><iconify-icon icon="solar:redo-right-linear" width="14"></iconify-icon></button>
<div className="h-3 w-px bg-white/10"></div>
<button className="text-slate-400 hover:text-white"><iconify-icon icon="solar:scissors-linear" width="14"></iconify-icon></button>
<button className="text-slate-400 hover:text-white"><iconify-icon icon="solar:trash-bin-trash-linear" width="14"></iconify-icon></button>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] font-mono text-slate-400">00:04:12 / 00:15:00</span>
</div>
<div className="w-24">
<input className="scale-75 origin-right" max="100" min="0" type="range"/>
</div>
</div>

<div className="flex-1 overflow-y-auto p-2 space-y-1 relative">

<div className="absolute top-0 bottom-0 left-[30%] w-px bg-red-500 z-10 flex flex-col items-center">
<div className="w-2.5 h-2.5 bg-red-500 rotate-45 -mt-1.5"></div>
</div>

<div className="flex h-10 bg-slate-800/50 rounded overflow-hidden relative">
<div className="w-20 border-r border-white/5 bg-slate-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-500" icon="solar:videocamera-record-linear" width="14"></iconify-icon>
</div>
<div className="flex-1 relative">
<div className="absolute left-0 top-1 bottom-1 w-[40%] bg-indigo-600/30 border border-indigo-500/50 rounded mx-1 overflow-hidden">
<div className="flex h-full w-full opacity-30 gap-0.5">
<div className="w-8 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&amp'}}></div>
<div className="w-8 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&amp'}}></div>
<div className="w-8 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&amp'}}></div>
</div>
</div>
<div className="absolute left-[41%] top-1 bottom-1 w-[25%] bg-indigo-600/30 border border-indigo-500/50 rounded mx-1"></div>
</div>
</div>

<div className="flex h-8 bg-slate-800/30 rounded overflow-hidden relative mt-1">
<div className="w-20 border-r border-white/5 bg-slate-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-500" icon="solar:music-library-linear" width="14"></iconify-icon>
</div>
<div className="flex-1 relative">
<div className="absolute left-[5%] top-1 bottom-1 w-[55%] bg-teal-500/20 border border-teal-500/40 rounded mx-1 flex items-center justify-center overflow-hidden">

<div className="flex items-center gap-0.5 h-full w-full px-1">
<div className="w-0.5 h-2 bg-teal-500/60"></div>
<div className="w-0.5 h-4 bg-teal-500/60"></div>
<div className="w-0.5 h-3 bg-teal-500/60"></div>
<div className="w-0.5 h-5 bg-teal-500/60"></div>
<div className="w-0.5 h-2 bg-teal-500/60"></div>
<div className="w-0.5 h-4 bg-teal-500/60"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-72 border-l border-white/5 bg-slate-900/30 flex flex-col hidden xl:flex">

<div className="flex border-b border-white/5">
<button className="flex-1 py-3 text-[10px] font-medium text-white border-b-2 border-indigo-500">Adjust</button>
<button className="flex-1 py-3 text-[10px] font-medium text-slate-500 hover:text-slate-300">AI Effects</button>
<button className="flex-1 py-3 text-[10px] font-medium text-slate-500 hover:text-slate-300">Export</button>
</div>
<div className="flex-1 overflow-y-auto p-5 space-y-6">

<div className="space-y-3">
<div className="flex items-center justify-between">
<h3 className="text-[11px] font-medium text-slate-300">Smart Enhance</h3>
<iconify-icon className="text-indigo-400" icon="solar:stars-linear" width="14"></iconify-icon>
</div>
<div className="bg-slate-800/50 p-3 rounded border border-white/5 space-y-3">
<div className="flex items-center justify-between">
<span className="text-[10px] text-slate-400">Face Retouch</span>
<div className="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-3 h-3 rounded-full bg-white border-4 appearance-none cursor-pointer left-0.5 top-0.5 transition-all duration-300" id="toggle1" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-slate-700 cursor-pointer" htmlFor="toggle1"></label>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-[10px] text-slate-400">Remove BG</span>
<button className="text-[9px] bg-slate-700 px-2 py-0.5 rounded text-white hover:bg-indigo-600 transition-colors">Apply</button>
</div>
</div>
</div>

<div className="space-y-4">
<h3 className="text-[11px] font-medium text-slate-300">Color Correction</h3>
<div className="space-y-1">
<div className="flex justify-between text-[9px] text-slate-500">
<span>Exposure</span>
<span>+0.5</span>
</div>
<input className="accent-indigo-500" type="range" value="60"/>
</div>
<div className="space-y-1">
<div className="flex justify-between text-[9px] text-slate-500">
<span>Contrast</span>
<span>+12</span>
</div>
<input className="accent-indigo-500" type="range" value="70"/>
</div>
<div className="space-y-1">
<div className="flex justify-between text-[9px] text-slate-500">
<span>Saturation</span>
<span>-5</span>
</div>
<input className="accent-indigo-500" type="range" value="45"/>
</div>
</div>

<div className="space-y-3 pt-2 border-t border-white/5">
<h3 className="text-[11px] font-medium text-slate-300 flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:chat-square-code-linear"></iconify-icon>
                                Auto Captions
                            </h3>
<button className="w-full py-2 border border-dashed border-indigo-500/30 rounded bg-indigo-500/5 text-indigo-300 text-[10px] font-medium hover:bg-indigo-500/10 transition-colors">
                                Generate Subtitles
                            </button>
<div className="flex gap-2 text-[9px]">
<span className="bg-slate-800 px-2 py-1 rounded text-slate-400 border border-white/5">English</span>
<span className="bg-slate-800 px-2 py-1 rounded text-slate-400 border border-white/5">Spanish</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">

<div className="bg-slate-900/40 border border-white/5 rounded-xl p-5 hover:bg-slate-900/60 transition-colors group">
<div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<iconify-icon className="text-indigo-400" icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-1">Background Removal</h3>
<p className="text-xs text-slate-500 leading-relaxed">Instantly isolate subjects from images or videos with pixel-perfect precision.</p>
</div>

<div className="bg-slate-900/40 border border-white/5 rounded-xl p-5 hover:bg-slate-900/60 transition-colors group">
<div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<iconify-icon className="text-pink-400" icon="solar:text-square-linear" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-1">Text to Video</h3>
<p className="text-xs text-slate-500 leading-relaxed">Turn simple prompts into engaging short-form video content automatically.</p>
</div>

<div className="bg-slate-900/40 border border-white/5 rounded-xl p-5 hover:bg-slate-900/60 transition-colors group">
<div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<iconify-icon className="text-emerald-400" icon="solar:soundwave-linear" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-1">Auto Beat Sync</h3>
<p className="text-xs text-slate-500 leading-relaxed">Perfectly align cuts and transitions to the rhythm of your music tracks.</p>
</div>

<div className="bg-slate-900/40 border border-white/5 rounded-xl p-5 hover:bg-slate-900/60 transition-colors group">
<div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<iconify-icon className="text-orange-400" icon="solar:gallery-wide-linear" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-1">4K Upscaling</h3>
<p className="text-xs text-slate-500 leading-relaxed">Restore old footage or enhance low-res images to crystal clear HD quality.</p>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-slate-950 py-8">
<div className="max-w-7xl mx-auto px-4 text-center">
<p className="text-[10px] text-slate-600">© 2024 Lumina AI Inc. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
