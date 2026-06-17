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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<aside className="w-64 border-r border-white/5 flex-col hidden md:flex bg-zinc-950 z-20">
<div className="h-14 flex items-center px-6 border-b border-white/5">
<div className="text-lg font-medium text-white tracking-tight flex items-center gap-2">
<div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center">
<iconify-icon icon="solar:play-stream-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
                AIVID
            </div>
</div>
<nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
<div className="text-xs font-medium text-zinc-500 px-3 mb-2 uppercase tracking-widest">Studio</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-zinc-900 text-zinc-100 group transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm">Generate</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-900/50 text-zinc-400 hover:text-zinc-200 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:clapperboard-play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm">My Videos</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-900/50 text-zinc-400 hover:text-zinc-200 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:history-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm">History</span>
</a>
<div className="text-xs font-medium text-zinc-500 px-3 mt-8 mb-2 uppercase tracking-widest">Discover</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-900/50 text-zinc-400 hover:text-zinc-200 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:gallery-wide-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm">Templates</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-900/50 text-zinc-400 hover:text-zinc-200 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:music-library-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm">Audio Library</span>
</a>
</nav>
<div className="p-4 border-t border-white/5">
<div className="bg-zinc-900/50 rounded-lg p-4 border border-white/5">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-zinc-500">5000 Credits</span><span className="text-sm font-medium text-zinc-200">Free Plan</span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden mb-3">
<div className="h-full bg-white rounded-full" style={{width: '24%'}}></div>
</div>
<button className="w-full py-1.5 px-3 bg-white text-black text-sm font-medium rounded-md hover:bg-zinc-200 transition-colors">
                    Upgrade to Pro
                </button>
</div>
<div className="mt-4 flex items-center gap-3 px-2 cursor-pointer group">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 border border-white/10 group-hover:border-zinc-500 transition-colors">
<iconify-icon icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-200 truncate">Creator User</p>
<p className="text-xs text-zinc-500 truncate">Settings &amp; Billing</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-zinc-950 relative">

<header className="h-14 border-b border-white/5 flex items-center justify-between px-4 lg:px-8 bg-zinc-950/80 backdrop-blur-md z-10 absolute top-0 w-full">
<div className="flex items-center gap-4">
<button className="md:hidden text-zinc-400 hover:text-white">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="hidden sm:flex items-center gap-2 text-sm text-zinc-500">
<span>Workspace</span>
<iconify-icon icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-zinc-200">New Generation</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-md bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all">
<iconify-icon icon="solar:download-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Export HD
                </button>
<button className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-md bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all">
<iconify-icon icon="solar:share-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Share
                </button>
</div>
</header>

<div className="flex-1 flex flex-col lg:flex-row pt-14 overflow-hidden">

<div className="flex-1 flex flex-col overflow-y-auto px-4 lg:px-8 py-6 gap-6 relative">

<div className="space-y-4">
<div className="flex items-center gap-4 border-b border-white/5 pb-2">
<button className="text-sm font-medium text-white border-b-2 border-white pb-2 -mb-[9px] flex items-center gap-2">
<iconify-icon icon="solar:text-field-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Text to Video
                        </button>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-300 pb-2 flex items-center gap-2 transition-colors">
<iconify-icon icon="solar:gallery-add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Image to Video
                        </button>
</div>
<div className="relative bg-zinc-900/50 border border-white/10 rounded-xl p-1 focus-within:border-zinc-600 focus-within:bg-zinc-900 transition-all">
<textarea className="w-full bg-transparent text-zinc-200 text-sm placeholder-zinc-500 resize-none outline-none p-3 min-h-[100px]" placeholder="Describe the video you want to generate. E.g., 'A futuristic city at night, neon lights, flying cars, cinematic camera pan...'"></textarea>
<div className="flex items-center justify-between p-2 border-t border-white/5">
<div className="flex items-center gap-2">
<button className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-200 bg-zinc-800/50 px-2 py-1 rounded transition-colors" title="Auto Script Generator">
<iconify-icon icon="solar:magic-stick-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                    Enhance Prompt
                                </button>
<button className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-200 bg-zinc-800/50 px-2 py-1 rounded transition-colors" title="Add Negative Prompt">
<iconify-icon icon="solar:minus-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                    Negative
                                </button>
</div>
<span className="text-xs text-zinc-600">0 / 1000</span>
</div>
</div>
</div>

<div className="flex-1 min-h-[300px] flex flex-col gap-4">
<div className="flex items-center justify-between">
<h2 className="text-lg font-medium text-white tracking-tight">Preview</h2>
<div className="flex gap-2">
<button className="p-1.5 rounded text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="solar:undo-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="p-1.5 rounded text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="solar:redo-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>

<div className="w-full aspect-video bg-black rounded-xl border border-white/5 relative group overflow-hidden flex items-center justify-center">
<img alt="Preview Background" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"></div>
<button className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all z-10 shadow-lg group-hover:scale-105">
<iconify-icon className="text-2xl ml-1" icon="solar:play-bold"></iconify-icon>
</button>

<div className="absolute bottom-0 left-0 w-full p-4 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
<button className="text-white hover:text-zinc-300">
<iconify-icon className="text-xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="flex-1 h-1 bg-white/20 rounded-full cursor-pointer relative">
<div className="absolute left-0 top-0 h-full bg-white rounded-full w-1/3"></div>
<div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"></div>
</div>
<span className="text-xs text-white font-medium">00:02 / 00:08</span>
<button className="text-white hover:text-zinc-300">
<iconify-icon className="text-xl" icon="solar:full-screen-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-xl p-3 flex flex-col gap-2">

<div className="flex items-center gap-3">
<div className="w-20 text-xs text-zinc-500 flex items-center gap-1.5">
<iconify-icon icon="solar:video-frame-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Video
                            </div>
<div className="flex-1 h-10 bg-zinc-800/50 rounded border border-white/5 relative overflow-hidden flex">
<div className="h-full w-full bg-blue-500/20 border-l border-r border-blue-500/50 flex items-center px-2">
<span className="text-[10px] text-blue-200 truncate">Clip 1: Futuristic City Pan</span>
</div>
</div>
</div>

<div className="flex items-center gap-3">
<div className="w-20 text-xs text-zinc-500 flex items-center gap-1.5">
<iconify-icon icon="solar:music-note-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Audio
                            </div>
<div className="flex-1 h-8 bg-zinc-800/50 rounded border border-white/5 relative overflow-hidden flex gap-1">
<div className="h-full w-2/3 bg-emerald-500/20 border-l border-r border-emerald-500/50 flex items-center px-2">
<span className="text-[10px] text-emerald-200">AI Voiceover</span>
</div>
<div className="h-full w-1/3 bg-purple-500/20 border-l border-r border-purple-500/50 flex items-center px-2">
<span className="text-[10px] text-purple-200">Ambient Music</span>
</div>
</div>
</div>

<div className="flex items-center gap-3">
<div className="w-20 text-xs text-zinc-500 flex items-center gap-1.5">
<iconify-icon icon="solar:text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Text
                            </div>
<div className="flex-1 h-6 bg-zinc-800/50 rounded border border-white/5 relative overflow-hidden flex gap-1 pt-[2px]">
<div className="h-4 w-1/4 bg-zinc-700 rounded-sm ml-4"></div>
<div className="h-4 w-1/4 bg-zinc-700 rounded-sm ml-2"></div>
<div className="h-4 w-1/4 bg-zinc-700 rounded-sm ml-8"></div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-white/5 bg-zinc-950/50 flex flex-col overflow-y-auto">
<div className="p-5 space-y-8">

<div className="space-y-3">
<label className="text-sm font-medium text-zinc-200 block">Aspect Ratio</label>
<div className="grid grid-cols-3 gap-2">
<div className="cursor-pointer group">
<div className="aspect-video bg-zinc-900 border border-zinc-700 rounded-md flex items-center justify-center mb-1 group-hover:border-zinc-500 transition-colors">
<div className="w-6 h-4 border-2 border-white rounded-sm"></div>
</div>
<div className="text-center text-xs text-white">16:9</div>
<div className="text-center text-[10px] text-zinc-500">YouTube</div>
</div>
<div className="cursor-pointer group">
<div className="aspect-video bg-zinc-900 border border-white/10 rounded-md flex items-center justify-center mb-1 group-hover:border-zinc-500 transition-colors">
<div className="w-3 h-5 border-2 border-zinc-500 group-hover:border-zinc-300 rounded-sm transition-colors"></div>
</div>
<div className="text-center text-xs text-zinc-400 group-hover:text-zinc-200">9:16</div>
<div className="text-center text-[10px] text-zinc-600">TikTok</div>
</div>
<div className="cursor-pointer group">
<div className="aspect-video bg-zinc-900 border border-white/10 rounded-md flex items-center justify-center mb-1 group-hover:border-zinc-500 transition-colors">
<div className="w-4 h-4 border-2 border-zinc-500 group-hover:border-zinc-300 rounded-sm transition-colors"></div>
</div>
<div className="text-center text-xs text-zinc-400 group-hover:text-zinc-200">1:1</div>
<div className="text-center text-[10px] text-zinc-600">Instagram</div>
</div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<label className="text-sm font-medium text-zinc-200 block">Visual Style</label>
<span className="text-xs text-zinc-500 cursor-pointer hover:text-white">See all</span>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="bg-zinc-900 border border-zinc-700 rounded-lg p-2 cursor-pointer flex flex-col gap-2 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<img alt="Cinematic" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&amp;q=80"/>
<iconify-icon className="text-white z-20" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-white z-20 mt-4">Cinematic</span>
</div>
<div className="bg-zinc-900 border border-white/5 hover:border-white/20 rounded-lg p-2 cursor-pointer flex flex-col gap-2 relative overflow-hidden group transition-colors">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>
<iconify-icon className="text-zinc-400 group-hover:text-white z-20 transition-colors" icon="solar:palette-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-zinc-400 group-hover:text-white z-20 mt-4 transition-colors">Anime</span>
</div>
<div className="bg-zinc-900 border border-white/5 hover:border-white/20 rounded-lg p-2 cursor-pointer flex flex-col gap-2 relative overflow-hidden group transition-colors">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>
<iconify-icon className="text-zinc-400 group-hover:text-white z-20 transition-colors" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-zinc-400 group-hover:text-white z-20 mt-4 transition-colors">Realistic</span>
</div>
<div className="bg-zinc-900 border border-white/5 hover:border-white/20 rounded-lg p-2 cursor-pointer flex flex-col gap-2 relative overflow-hidden group transition-colors">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>
<iconify-icon className="text-zinc-400 group-hover:text-white z-20 transition-colors" icon="solar:ghost-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-zinc-400 group-hover:text-white z-20 mt-4 transition-colors">3D Cartoon</span>
</div>
</div>
</div>

<div className="space-y-4 pt-4 border-t border-white/5">
<label className="text-sm font-medium text-zinc-200 block">AI Add-ons</label>
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm text-zinc-300">Auto Captions</span>
<span className="text-[10px] text-zinc-500">Generate styled subtitles</span>
</div>

<div className="w-8 h-4 bg-white rounded-full relative cursor-pointer flex items-center">
<div className="w-3 h-3 bg-black rounded-full absolute right-0.5"></div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm text-zinc-300">AI Voiceover</span>
<span className="text-[10px] text-zinc-500">Text-to-speech audio</span>
</div>

<div className="w-8 h-4 bg-zinc-800 rounded-full relative cursor-pointer flex items-center border border-white/10">
<div className="w-3 h-3 bg-zinc-400 rounded-full absolute left-0.5"></div>
</div>
</div>
</div>

<div className="pt-6 border-t border-white/5 mt-auto">
<div className="flex items-center justify-between mb-3">
<span className="text-xs text-zinc-500">Cost: 1 Credits</span>
<span className="text-xs text-zinc-500">Est. Time:    700-s</span>
</div>
<button className="w-full py-2.5 px-4 bg-white text-black font-medium text-sm rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<iconify-icon icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Generate Video
                        </button>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
