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
      

<header className="h-14 border-b border-[#333] bg-[#121212]/80 backdrop-blur-md fixed top-0 w-full z-50 flex items-center justify-between px-4 lg:px-6">
<div className="flex items-center gap-2">

<div className="w-8 h-8 bg-gradient-to-br from-[#6a0dad] to-[#3a006b] rounded-md flex items-center justify-center shadow-[0_0_15px_rgba(106,13,173,0.3)]">
<span className="iconify text-white" data-icon="lucide:sparkles" data-width="16"></span>
</div>
<div className="flex flex-col">
<h1 className="text-sm font-semibold tracking-tight text-white leading-none">HOGGZ</h1>
<span className="text-[10px] text-[#a0a0a0] font-medium tracking-wide">A.I. SUITE</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-1 bg-[#1e1e1e] p-1 rounded-lg border border-[#333]">
<button className="px-3 py-1.5 text-xs font-medium text-white bg-[#333] rounded shadow-sm transition-all flex items-center gap-2">
<span className="iconify" data-icon="lucide:video" data-width="14"></span>
                Video
            </button>
<button className="px-3 py-1.5 text-xs font-medium text-[#a0a0a0] hover:text-white hover:bg-white/5 rounded transition-all flex items-center gap-2">
<span className="iconify" data-icon="lucide:image" data-width="14"></span>
                Image
            </button>
<button className="px-3 py-1.5 text-xs font-medium text-[#a0a0a0] hover:text-white hover:bg-white/5 rounded transition-all flex items-center gap-2">
<span className="iconify" data-icon="lucide:music" data-width="14"></span>
                Audio
            </button>
</nav>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-[#1e1e1e] rounded-full border border-[#333]">
<span className="iconify text-[#6a0dad]" data-icon="lucide:zap" data-width="14"></span>
<span className="text-xs font-medium text-white">420 Credits</span>
</div>
<button className="w-8 h-8 rounded-full bg-gradient-to-b from-[#333] to-[#1e1e1e] border border-[#444] flex items-center justify-center hover:border-[#6a0dad] transition-colors">
<span className="text-xs font-medium">H</span>
</button>
</div>
</header>

<div className="flex pt-14 h-screen">

<aside className="w-64 border-r border-[#333] bg-[#121212] hidden lg:flex flex-col justify-between py-6 px-3">
<div className="space-y-6">
<div className="space-y-1">
<p className="px-3 text-xs font-medium text-[#666] uppercase tracking-wider mb-2">Create</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-[#1e1e1e] rounded-md border border-[#333]" href="#">
<span className="iconify" data-icon="lucide:wand-2" data-width="16"></span>
                        Generator
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-[#a0a0a0] hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<span className="iconify" data-icon="lucide:edit-3" data-width="16"></span>
                        Editor
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-[#a0a0a0] hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<span className="iconify" data-icon="lucide:layers" data-width="16"></span>
                        Assets
                    </a>
</div>
<div className="space-y-1">
<p className="px-3 text-xs font-medium text-[#666] uppercase tracking-wider mb-2">Library</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-[#a0a0a0] hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<span className="iconify" data-icon="lucide:folder" data-width="16"></span>
                        Projects
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-[#a0a0a0] hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<span className="iconify" data-icon="lucide:heart" data-width="16"></span>
                        Favorites
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-[#a0a0a0] hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<span className="iconify" data-icon="lucide:history" data-width="16"></span>
                        History
                    </a>
</div>
</div>
<div className="px-3 pb-2">
<div className="p-3 rounded-lg bg-gradient-to-b from-[#1e1e1e] to-[#121212] border border-[#333]">
<div className="flex items-center gap-2 mb-2">
<span className="iconify text-[#6a0dad]" data-icon="lucide:crown" data-width="16"></span>
<span className="text-xs font-semibold text-white">Pro Plan</span>
</div>
<div className="w-full bg-[#333] h-1.5 rounded-full overflow-hidden mb-2">
<div className="bg-[#6a0dad] h-full rounded-full w-3/4"></div>
</div>
<p className="text-[10px] text-[#a0a0a0]">1,200 / 1,500 credits used</p>
</div>
</div>
</aside>

<main className="flex-1 flex overflow-hidden relative">

<div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-[#6a0dad] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

<div className="flex-1 flex flex-col h-full overflow-y-auto w-full lg:max-w-[60%] border-r border-[#333]">
<div className="p-6 lg:p-10 pb-32">
<div className="mb-8">
<h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-white mb-2">
                            Video Generation
                        </h2>
<p className="text-sm text-[#a0a0a0]">Describe your vision and let the AI animate it.</p>
</div>

<div className="group relative mb-8">
<div className="absolute -inset-0.5 bg-gradient-to-r from-[#6a0dad] to-[#3a006b] rounded-xl blur opacity-20 group-focus-within:opacity-50 transition duration-500"></div>
<div className="relative bg-[#1e1e1e] rounded-xl p-1">
<textarea className="w-full bg-[#121212] text-sm text-[#f5f5f5] placeholder-[#555] p-4 rounded-lg outline-none resize-none border border-[#333] focus:border-[#555] transition-colors h-36 custom-scrollbar leading-relaxed" placeholder="A cinematic drone shot of a futuristic neon city at rainy night, cyberpunk style, highly detailed, 8k resolution..."></textarea>
<div className="flex items-center justify-between px-2 py-2">
<div className="flex items-center gap-2">
<button className="p-2 text-[#a0a0a0] hover:text-white hover:bg-white/5 rounded-md transition-colors" title="Upload Image Reference">
<span className="iconify" data-icon="lucide:image-plus" data-width="18"></span>
</button>
<button className="p-2 text-[#a0a0a0] hover:text-white hover:bg-white/5 rounded-md transition-colors" title="Voice Control">
<span className="iconify" data-icon="lucide:mic" data-width="18"></span>
</button>
<button className="p-2 text-[#a0a0a0] hover:text-white hover:bg-white/5 rounded-md transition-colors" title="Prompt Enhancer">
<span className="iconify" data-icon="lucide:sparkles" data-width="18"></span>
</button>
</div>
<div className="text-xs text-[#555] font-mono">0/500</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

<div className="space-y-3">
<label className="text-xs font-medium text-[#a0a0a0] uppercase tracking-wider">Aspect Ratio</label>
<div className="grid grid-cols-3 gap-3">
<label className="cursor-pointer group">
<input checked="" className="peer sr-only" name="aspect" type="radio"/>
<div className="border border-[#333] bg-[#1e1e1e] rounded-lg p-3 flex flex-col items-center gap-2 peer-checked:border-[#6a0dad] peer-checked:bg-[#6a0dad]/10 transition-all hover:border-[#555]">
<div className="w-8 h-5 border-2 border-[#555] rounded-sm group-hover:border-[#a0a0a0] peer-checked:border-[#6a0dad]"></div>
<span className="text-[10px] text-[#a0a0a0] group-hover:text-white peer-checked:text-[#6a0dad]">16:9</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="aspect" type="radio"/>
<div className="border border-[#333] bg-[#1e1e1e] rounded-lg p-3 flex flex-col items-center gap-2 peer-checked:border-[#6a0dad] peer-checked:bg-[#6a0dad]/10 transition-all hover:border-[#555]">
<div className="w-5 h-5 border-2 border-[#555] rounded-sm group-hover:border-[#a0a0a0] peer-checked:border-[#6a0dad]"></div>
<span className="text-[10px] text-[#a0a0a0] group-hover:text-white peer-checked:text-[#6a0dad]">1:1</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="aspect" type="radio"/>
<div className="border border-[#333] bg-[#1e1e1e] rounded-lg p-3 flex flex-col items-center gap-2 peer-checked:border-[#6a0dad] peer-checked:bg-[#6a0dad]/10 transition-all hover:border-[#555]">
<div className="w-5 h-8 border-2 border-[#555] rounded-sm group-hover:border-[#a0a0a0] peer-checked:border-[#6a0dad]"></div>
<span className="text-[10px] text-[#a0a0a0] group-hover:text-white peer-checked:text-[#6a0dad]">9:16</span>
</div>
</label>
</div>
</div>

<div className="space-y-3">
<label className="text-xs font-medium text-[#a0a0a0] uppercase tracking-wider">Style Preset</label>
<div className="relative">
<select className="w-full bg-[#1e1e1e] border border-[#333] text-sm text-white rounded-lg p-3 appearance-none focus:outline-none focus:border-[#6a0dad] transition-colors cursor-pointer">
<option>Realistic (Cinematic)</option>
<option>3D Animation (Pixar)</option>
<option>Anime (Vibrant)</option>
<option>Oil Painting</option>
<option>Cyberpunk</option>
</select>
<span className="absolute right-3 top-3.5 pointer-events-none text-[#a0a0a0]">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</div>
</div>
</div>

<div className="space-y-6 mb-10 border-t border-[#333] pt-6">
<div>
<div className="flex justify-between mb-2">
<label className="text-xs font-medium text-[#a0a0a0] uppercase tracking-wider">Motion Scale</label>
<span className="text-xs text-[#f5f5f5] font-mono">0.65</span>
</div>
<input max="1" min="0" step="0.05" type="range" value="0.65"/>
</div>
<div>
<div className="flex justify-between mb-2">
<label className="text-xs font-medium text-[#a0a0a0] uppercase tracking-wider">Guidance Scale (CFG)</label>
<span className="text-xs text-[#f5f5f5] font-mono">7.5</span>
</div>
<input max="20" min="1" step="0.5" type="range" value="7.5"/>
</div>
</div>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-[#1e1e1e] appearance-none cursor-pointer transition-all duration-300" id="private" name="private" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-[#333] cursor-pointer" htmlFor="private"></label>
</input></div>
<label className="text-xs text-[#a0a0a0] font-medium cursor-pointer" htmlFor="private">Private Generation</label>
</div>
<span className="text-[10px] text-[#555]">Cost: 15 Credits</span>
</div>

<button className="w-full bg-[#f5f5f5] hover:bg-white text-black font-semibold py-3 px-4 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all transform active:scale-[0.99] flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:sparkles" data-width="18"></span>
                        Generate Video
                    </button>
</div>
</div>

<div className="hidden lg:flex flex-col w-[40%] bg-[#0e0e0e]">
<div className="h-12 border-b border-[#333] flex items-center px-4 justify-between">
<span className="text-xs font-medium text-[#a0a0a0] uppercase tracking-wider">Recent Creations</span>
<button className="text-[#a0a0a0] hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:grid" data-width="16"></span>
</button>
</div>
<div className="p-4 overflow-y-auto flex-1 grid grid-cols-2 gap-4">

<div className="group relative aspect-video bg-[#1e1e1e] rounded-lg border border-[#333] overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col justify-end p-3">
<p className="text-[10px] text-white line-clamp-1 mb-1">Cyberpunk city rain...</p>
<div className="flex gap-2">
<button className="bg-white/10 hover:bg-white/20 p-1 rounded backdrop-blur-md">
<span className="iconify text-white" data-icon="lucide:download" data-width="12"></span>
</button>
<button className="bg-white/10 hover:bg-white/20 p-1 rounded backdrop-blur-md">
<span className="iconify text-white" data-icon="lucide:maximize" data-width="12"></span>
</button>
</div>
</div>

<div className="w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900 via-[#121212] to-[#121212] flex items-center justify-center">
<span className="iconify text-white/10 group-hover:scale-110 transition-transform duration-500" data-icon="lucide:play-circle" data-width="32"></span>
</div>
<div className="absolute top-2 right-2 bg-black/50 backdrop-blur-md px-1.5 py-0.5 rounded text-[9px] text-white/80 border border-white/10">00:04</div>
</div>

<div className="group relative aspect-video bg-[#1e1e1e] rounded-lg border border-[#333] overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col justify-end p-3">
<p className="text-[10px] text-white line-clamp-1 mb-1">Astronaut in jungle...</p>
<div className="flex gap-2">
<button className="bg-white/10 hover:bg-white/20 p-1 rounded backdrop-blur-md">
<span className="iconify text-white" data-icon="lucide:download" data-width="12"></span>
</button>
</div>
</div>
<div className="w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-900 via-[#121212] to-[#121212] flex items-center justify-center">
<span className="iconify text-white/10 group-hover:scale-110 transition-transform duration-500" data-icon="lucide:play-circle" data-width="32"></span>
</div>
<div className="absolute top-2 right-2 bg-black/50 backdrop-blur-md px-1.5 py-0.5 rounded text-[9px] text-white/80 border border-white/10">00:08</div>
</div>

<div className="group relative aspect-video bg-[#1e1e1e] rounded-lg border border-[#333] overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col justify-end p-3">
<p className="text-[10px] text-white line-clamp-1 mb-1">Abstract fluids...</p>
<div className="flex gap-2">
<button className="bg-white/10 hover:bg-white/20 p-1 rounded backdrop-blur-md">
<span className="iconify text-white" data-icon="lucide:download" data-width="12"></span>
</button>
</div>
</div>
<div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#6a0dad] via-[#121212] to-[#121212] flex items-center justify-center opacity-40">
<span className="iconify text-white/10 group-hover:scale-110 transition-transform duration-500" data-icon="lucide:play-circle" data-width="32"></span>
</div>
<div className="absolute top-2 right-2 bg-black/50 backdrop-blur-md px-1.5 py-0.5 rounded text-[9px] text-white/80 border border-white/10">00:02</div>
</div>

<div className="relative aspect-video bg-[#121212] rounded-lg border border-[#333] border-dashed flex flex-col items-center justify-center gap-2">
<span className="iconify text-[#6a0dad] animate-spin" data-icon="lucide:loader-2" data-width="20"></span>
<span className="text-[10px] text-[#555] animate-pulse">Processing...</span>
</div>
</div>
</div>
</main>
</div>

<nav className="lg:hidden fixed bottom-0 w-full h-16 bg-[#121212] border-t border-[#333] flex justify-around items-center px-4 z-50">
<a className="flex flex-col items-center gap-1 text-[#6a0dad]" href="#">
<span className="iconify" data-icon="lucide:wand-2" data-width="20"></span>
<span className="text-[10px] font-medium">Create</span>
</a>
<a className="flex flex-col items-center gap-1 text-[#a0a0a0] hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:folder-open" data-width="20"></span>
<span className="text-[10px] font-medium">Library</span>
</a>
<a className="flex flex-col items-center gap-1 text-[#a0a0a0] hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:user" data-width="20"></span>
<span className="text-[10px] font-medium">Profile</span>
</a>
</nav>

    </>
  );
}
