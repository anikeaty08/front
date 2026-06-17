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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-medium text-sm tracking-tighter">
                    V
                </div>
<span className="font-medium text-sm tracking-tight text-white group-hover:text-indigo-400 transition-colors duration-300">VIDGEN</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Features</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Showcase</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">API</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs text-neutral-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<button className="bg-white text-black hover:bg-neutral-200 transition-colors text-xs font-medium px-4 py-2 rounded-full tracking-tight">
                    Start Creating
                </button>
</div>
</div>
</nav>

<main className="flex-grow pt-24 pb-12 px-4 md:px-6 relative overflow-hidden bg-glow">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-7xl mx-auto flex flex-col gap-12">

<div className="text-center max-w-2xl mx-auto space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">Model v2.0 Live</span>
</div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent pb-1">
                    Turn text into reality.
                </h1>
<p className="text-neutral-500 text-sm md:text-base font-light tracking-wide">
                    Generate cinematic video from simple text prompts. <br className="hidden md:block"/>Control camera, lighting, and motion with precision.
                </p>
</div>

<div className="w-full max-w-6xl mx-auto rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-indigo-500/10 flex flex-col md:flex-row h-[700px] overflow-hidden backdrop-blur-sm">

<div className="w-full md:w-80 border-r border-white/5 flex flex-col bg-[#080808]">

<div className="flex border-b border-white/5">
<button className="flex-1 py-3 text-xs font-medium text-white border-b border-indigo-500 bg-white/5">Create</button>
<button className="flex-1 py-3 text-xs font-medium text-neutral-500 hover:text-white transition-colors">Edit</button>
<button className="flex-1 py-3 text-xs font-medium text-neutral-500 hover:text-white transition-colors">History</button>
</div>
<div className="p-5 flex-1 overflow-y-auto flex flex-col gap-6">

<div className="space-y-2">
<label className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">Prompt</label>
<div className="relative group">
<textarea className="w-full h-32 bg-[#111] border border-white/10 rounded-lg p-3 text-xs text-neutral-300 placeholder-neutral-600 focus:outline-none focus:border-indigo-500/50 resize-none transition-all" placeholder="Describe the video you want to generate in detail... e.g., A cyberpunk street at night with neon rain, cinematic lighting, 8k"></textarea>
<button className="absolute bottom-2 right-2 p-1.5 rounded hover:bg-white/10 text-neutral-500 hover:text-white transition-colors">
<iconify-icon icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="space-y-3">
<label className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">Aspect Ratio</label>
<div className="grid grid-cols-3 gap-2">
<button className="flex flex-col items-center justify-center gap-1 h-14 rounded border border-indigo-500/50 bg-indigo-500/10 text-indigo-400">
<div className="w-4 h-2.5 border border-current rounded-[1px]"></div>
<span className="text-[10px]">16:9</span>
</button>
<button className="flex flex-col items-center justify-center gap-1 h-14 rounded border border-white/10 bg-[#111] text-neutral-500 hover:border-white/20 transition-colors">
<div className="w-2.5 h-4 border border-current rounded-[1px]"></div>
<span className="text-[10px]">9:16</span>
</button>
<button className="flex flex-col items-center justify-center gap-1 h-14 rounded border border-white/10 bg-[#111] text-neutral-500 hover:border-white/20 transition-colors">
<div className="w-3 h-3 border border-current rounded-[1px]"></div>
<span className="text-[10px]">1:1</span>
</button>
</div>
</div>

<div className="space-y-3">
<div className="flex justify-between items-center">
<label className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">Duration</label>
<span className="text-[10px] text-white font-mono">04s</span>
</div>
<input className="w-full" max="10" min="1" type="range" value="4"/>
<div className="flex justify-between text-[10px] text-neutral-600">
<span>1s</span>
<span>10s</span>
</div>
</div>

<div className="space-y-2">
<label className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">Art Style</label>
<div className="relative">
<select className="w-full bg-[#111] border border-white/10 rounded-lg p-2.5 text-xs text-neutral-300 appearance-none focus:outline-none focus:border-white/20 cursor-pointer">
<option>Cinematic Realistic</option>
<option>3D Animation</option>
<option>Anime Style</option>
<option>Vintage Film</option>
</select>
<div className="absolute right-3 top-2.5 pointer-events-none text-neutral-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-4 pt-2 border-t border-white/5">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-300">Negative Prompt</span>
<div className="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-300 border-neutral-600 right-4" id="toggle1" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-neutral-800 cursor-pointer" htmlFor="toggle1"></label>
</input></div>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-300">High Fidelity</span>
<div className="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-300 right-0 border-indigo-500" id="toggle2" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-indigo-500 cursor-pointer" htmlFor="toggle2"></label>
</div>
</div>
</div>
</div>

<div className="p-5 border-t border-white/5 bg-[#0a0a0a]">
<button className="w-full bg-white hover:bg-neutral-200 text-black py-2.5 rounded-lg text-xs font-semibold tracking-tight flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
<iconify-icon icon="solar:stars-minimalistic-linear" width="16"></iconify-icon>
                            Generate Video <span className="text-neutral-500 font-normal ml-1"> (20 credits)</span>
</button>
</div>
</div>

<div className="flex-1 flex flex-col relative bg-[#050505] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]">

<div className="h-12 border-b border-white/5 flex items-center justify-between px-4">
<div className="flex items-center gap-4">
<span className="text-[10px] text-neutral-500">Project: Untitled-1</span>
</div>
<div className="flex items-center gap-3">
<button className="p-1.5 hover:bg-white/10 rounded text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:undo-left-linear" width="18"></iconify-icon>
</button>
<button className="p-1.5 hover:bg-white/10 rounded text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:redo-right-linear" width="18"></iconify-icon>
</button>
<div className="h-4 w-px bg-white/10 mx-1"></div>
<button className="p-1.5 hover:bg-white/10 rounded text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:download-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 flex items-center justify-center p-8 relative">
<div className="relative w-full max-w-2xl aspect-video bg-neutral-900 rounded-lg overflow-hidden border border-white/5 shadow-2xl group">

<img alt="AI Generated Video" className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>

<div className="absolute inset-0 flex items-center justify-center">
<button className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:scale-105 hover:bg-white/20 transition-all">
<iconify-icon className="ml-1" icon="solar:play-linear" width="32"></iconify-icon>
</button>
</div>



<div className="absolute bottom-0 w-full p-4 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="text-white hover:text-indigo-400">
<iconify-icon icon="solar:pause-linear" width="20"></iconify-icon>
</button>
<div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
<div className="w-1/3 h-full bg-indigo-500 rounded-full"></div>
</div>
<span className="text-[10px] font-mono text-neutral-300">00:04 / 00:12</span>
</div>
</div>
</div>

<div className="h-24 border-t border-white/5 bg-[#080808] flex flex-col">
<div className="flex-1 relative overflow-hidden flex items-center px-2 gap-1">

<div className="h-12 w-32 rounded bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center text-[10px] text-indigo-300 cursor-pointer hover:bg-indigo-900/50">Scene 1</div>
<div className="h-12 w-48 rounded bg-neutral-800 border border-white/5 flex items-center justify-center text-[10px] text-neutral-500 cursor-pointer hover:bg-neutral-700">Scene 2 (Generating...)</div>

<div className="absolute top-0 bottom-0 left-32 w-px bg-red-500 z-10 flex flex-col items-center">
<div className="w-2 h-2 -mt-1 bg-red-500 rotate-45"></div>
</div>
</div>
<div className="h-6 border-t border-white/5 flex items-center px-4 justify-between text-[10px] text-neutral-600 font-mono">
<span>TIMELINE</span>
<span>AUTO-SAVED</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">

<div className="p-6 rounded-xl border border-white/5 bg-[#0a0a0a] hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:clapperboard-edit-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Director Mode</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Control camera angles, zoom levels, and lighting with granular precision sliders.</p>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-[#0a0a0a] hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:user-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Character Consistency</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Keep characters consistent across multiple scenes and shots with Seed control.</p>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-[#0a0a0a] hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Batch Generation</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Generate 4 variations at once and pick the best render to upscale to 4K.</p>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-[#050505] py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center text-white font-medium text-xs">V</div>
<span className="text-xs text-neutral-500">© 2024 VidGen Inc.</span>
</div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-discord-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
