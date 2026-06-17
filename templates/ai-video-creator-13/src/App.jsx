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
      

<aside className="w-64 border-r border-white/5 flex flex-col bg-black/50 hidden md:flex z-20">

<div className="h-16 flex items-center px-6 border-b border-white/5">
<div className="flex items-center gap-2 text-white">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-white to-zinc-500 flex items-center justify-center text-black text-xs font-semibold tracking-tighter">
                    AI
                </div>
<span className="font-medium tracking-tight text-sm">AIVID</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-white text-sm transition-colors group" href="#">
<iconify-icon className="text-white" icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
<span className="font-medium">Generate</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white text-sm transition-colors group" href="#">
<iconify-icon className="group-hover:text-white transition-colors" icon="solar:gallery-wide-linear" width="18"></iconify-icon>
<span>Library</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white text-sm transition-colors group" href="#">
<iconify-icon className="group-hover:text-white transition-colors" icon="solar:history-linear" width="18"></iconify-icon>
<span>History</span>
</a>
<div className="pt-4 pb-2 px-3">
<p className="text-xs font-medium uppercase tracking-wider text-zinc-600">Settings</p>
</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white text-sm transition-colors group" href="#">
<iconify-icon className="group-hover:text-white transition-colors" icon="solar:user-circle-linear" width="18"></iconify-icon>
<span>Profile</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white text-sm transition-colors group" href="#">
<iconify-icon className="group-hover:text-white transition-colors" icon="solar:settings-linear" width="18"></iconify-icon>
<span>Preferences</span>
</a>
</nav>

<div className="p-4 border-t border-white/5">
<div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg p-3 border border-white/5 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon icon="solar:infinity-linear" width="40"></iconify-icon>
</div>
<p className="text-white text-xs font-medium mb-1">Free Plan</p>
<p className="text-xs text-zinc-500 mb-2">Unlimited generations</p>
<div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
<div className="bg-white h-full w-full rounded-full"></div>
</div>
</div>
<div className="flex items-center gap-3 mt-4">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-xs text-white">
                    JD
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">John Doe</p>
<p className="text-xs truncate">john@example.com</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-black relative">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoNDBWMEgwdi41aDM5LjV2MzlIMHoiIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none opacity-20"></div>

<header className="h-16 border-b border-white/5 flex items-center justify-between px-6 glass sticky top-0 z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<h1 className="text-white font-medium tracking-tight">Create Video</h1>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-medium text-white transition-all">
<iconify-icon icon="solar:share-linear" width="14"></iconify-icon>
                    Share
                </button>
<button className="text-zinc-400 hover:text-white transition-colors">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</button>
</div>
</header>
<div className="flex-1 overflow-y-auto p-4 md:p-8 relative">
<div className="max-w-5xl mx-auto space-y-8">

<div className="space-y-4">

<div className="inline-flex bg-zinc-900/50 p-1 rounded-lg border border-white/5 backdrop-blur-sm">
<button className="px-4 py-1.5 rounded-md text-xs font-medium bg-zinc-800 text-white shadow-sm ring-1 ring-white/10 transition-all">
                            Text to Video
                        </button>
<button className="px-4 py-1.5 rounded-md text-xs font-medium text-zinc-400 hover:text-white transition-colors">
                            Image to Video
                        </button>
</div>

<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
<div className="relative bg-zinc-900 rounded-xl border border-white/10 shadow-xl overflow-hidden">
<textarea className="w-full bg-transparent border-none text-white placeholder-zinc-600 p-5 focus:ring-0 resize-none h-32 text-sm leading-relaxed" placeholder="Describe your video in detail... e.g., A cinematic drone shot of a futuristic cyberpunk city at night with neon lights reflecting in the rain..."></textarea>

<div className="flex items-center justify-between px-4 py-3 border-t border-white/5 bg-zinc-900/50">
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors tooltip" title="Enhance Prompt">
<iconify-icon icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
</button>
<button className="p-2 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors" title="Upload Reference">
<iconify-icon icon="solar:gallery-add-linear" width="18"></iconify-icon>
</button>
<div className="h-4 w-px bg-white/10 mx-1"></div>
<button className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-white/5 text-xs text-zinc-400 hover:text-white transition-colors">
<span>Style: </span>
<span className="text-white">Cinematic</span>
<iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>
</div>
<button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.15)]">
<iconify-icon icon="solar:clapperboard-play-linear" width="16"></iconify-icon>
                                    Generate Video
                                </button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="space-y-3">
<label className="text-xs font-medium text-white flex items-center gap-2">
<iconify-icon icon="solar:crop-minimalistic-linear" width="14"></iconify-icon>
                            Aspect Ratio
                        </label>
<div className="grid grid-cols-3 gap-2">
<button className="flex flex-col items-center justify-center p-3 rounded-lg border border-white/10 bg-zinc-900/50 hover:bg-zinc-800 hover:border-white/20 transition-all text-white ring-1 ring-white/10 shadow-sm">
<div className="w-6 h-3 border-2 border-current rounded-sm mb-2 opacity-80"></div>
<span className="text-xs">16:9</span>
</button>
<button className="flex flex-col items-center justify-center p-3 rounded-lg border border-white/5 bg-zinc-900/30 hover:bg-zinc-800 hover:border-white/10 transition-all text-zinc-500 hover:text-zinc-300">
<div className="w-3 h-4 border-2 border-current rounded-sm mb-2 opacity-80"></div>
<span className="text-xs">9:16</span>
</button>
<button className="flex flex-col items-center justify-center p-3 rounded-lg border border-white/5 bg-zinc-900/30 hover:bg-zinc-800 hover:border-white/10 transition-all text-zinc-500 hover:text-zinc-300">
<div className="w-4 h-4 border-2 border-current rounded-sm mb-2 opacity-80"></div>
<span className="text-xs">1:1</span>
</button>
</div>
</div>

<div className="space-y-3">
<div className="flex justify-between">
<label className="text-xs font-medium text-white flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
                                Duration
                            </label>
<span className="text-xs text-zinc-400">4s</span>
</div>
<div className="h-[74px] flex items-center p-4 rounded-lg border border-white/5 bg-zinc-900/30">
<input className="w-full h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer" max="10" min="2" type="range" value="4"/>
</div>
</div>

<div className="space-y-3">
<div className="flex justify-between">
<label className="text-xs font-medium text-white flex items-center gap-2">
<iconify-icon icon="solar:running-linear" width="14"></iconify-icon>
                                Motion Strength
                            </label>
<span className="text-xs text-zinc-400">Medium</span>
</div>
<div className="h-[74px] flex items-center p-4 rounded-lg border border-white/5 bg-zinc-900/30">
<input className="w-full h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer" max="10" min="1" type="range" value="5"/>
</div>
</div>
</div>

<div className="border-t border-white/5 pt-6">
<details className="group">
<summary className="flex items-center gap-2 cursor-pointer list-none text-xs font-medium text-zinc-400 hover:text-white transition-colors select-none w-max">
<iconify-icon className="transform transition-transform group-open:rotate-90" icon="solar:settings-minimalistic-linear"></iconify-icon>
                            Advanced Settings (Seed, Steps, Negative Prompt)
                        </summary>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pl-6 animate-[fadeIn_0.2s_ease-out]">
<div className="space-y-2">
<label className="text-xs text-zinc-500">Negative Prompt</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-white/20 transition-colors" placeholder="blurry, distorted, low quality" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-zinc-500">Seed</label>
<div className="flex gap-2">
<input className="flex-1 bg-zinc-900 border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-white/20 transition-colors" placeholder="Random" type="number"/>
<button className="px-3 py-2 bg-zinc-800 rounded-md border border-white/5 hover:bg-zinc-700 text-white transition-colors">
<iconify-icon icon="solar:dice-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</details>
</div>

<div className="space-y-4">
<h2 className="text-sm font-medium text-white tracking-tight flex items-center gap-2">
<iconify-icon icon="solar:clapperboard-text-linear" width="16"></iconify-icon>
                        Recent Generations
                    </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group relative aspect-video bg-zinc-900 rounded-lg overflow-hidden border border-white/5 hover:border-white/20 transition-all cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10"></div>

<div className="absolute inset-0 flex items-center justify-center bg-zinc-800">
<div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/50 via-zinc-900 to-zinc-900 opacity-50"></div>
<iconify-icon className="text-white opacity-50 group-hover:scale-110 transition-transform duration-300 z-20" icon="solar:play-circle-linear" width="48"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 right-0 p-3 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-xs text-white font-medium truncate">Cyberpunk city rain...</p>
<div className="flex justify-between items-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-[10px] text-zinc-400">4s • 16:9</span>
<div className="flex gap-2">
<button className="text-white hover:text-indigo-400 transition-colors"><iconify-icon icon="solar:download-minimalistic-linear" width="14"></iconify-icon></button>
<button className="text-white hover:text-indigo-400 transition-colors"><iconify-icon icon="solar:maximize-linear" width="14"></iconify-icon></button>
</div>
</div>
</div>
</div>

<div className="group relative aspect-video bg-zinc-900 rounded-lg overflow-hidden border border-white/5 hover:border-white/20 transition-all cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10"></div>
<div className="absolute inset-0 flex items-center justify-center bg-zinc-800">
<div className="w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/40 via-zinc-900 to-zinc-900 opacity-50"></div>
<iconify-icon className="text-white opacity-50 group-hover:scale-110 transition-transform duration-300 z-20" icon="solar:play-circle-linear" width="48"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 right-0 p-3 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-xs text-white font-medium truncate">Astronaut riding horse...</p>
<div className="flex justify-between items-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-[10px] text-zinc-400">2s • 16:9</span>
<div className="flex gap-2">
<button className="text-white hover:text-indigo-400 transition-colors"><iconify-icon icon="solar:download-minimalistic-linear" width="14"></iconify-icon></button>
<button className="text-white hover:text-indigo-400 transition-colors"><iconify-icon icon="solar:maximize-linear" width="14"></iconify-icon></button>
</div>
</div>
</div>
</div>

<div className="relative aspect-video bg-zinc-900 rounded-lg overflow-hidden border border-white/5 flex items-center justify-center">
<div className="text-center space-y-2">
<div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto"></div>
<p className="text-xs text-zinc-500 animate-pulse">Generating...</p>
</div>
</div>
</div>
</div>
</div>

<div className="h-20"></div>
</div>
</main>

    </>
  );
}
