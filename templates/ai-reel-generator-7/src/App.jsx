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
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
},
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
925: '#121212',
950: '#0a0a0a',
}
}
}
}
}



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
      

<header className="sticky top-0 z-50 border-b border-neutral-800/60 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="solar:clapperboard-play-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-semibold text-base tracking-tighter text-neutral-100 uppercase">ViralGen.</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
<a className="hover:text-neutral-100 transition-colors" href="#">Dashboard</a>
<a className="hover:text-neutral-100 transition-colors" href="#">History</a>
<a className="hover:text-neutral-100 transition-colors" href="#">Settings</a>
</nav>
<div className="flex items-center gap-4">
<div className="text-xs font-medium text-emerald-400/90 bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-400/20 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Systems Operational
                </div>
<button className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-neutral-100 transition-colors">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</header>

<main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8">

<div className="mb-10 text-center max-w-2xl mx-auto">
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-100 mb-3">Create Viral Reels Using AI</h1>
<p className="text-base text-neutral-400">Transform simple topics into complete video blueprints with cinematic prompts, engaging scripts, and optimized captions in seconds.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<aside className="lg:col-span-3 flex flex-col gap-4">

<div className="bg-neutral-900/50 border border-neutral-800/60 rounded-2xl p-5 flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-transparent"></div>
<h2 className="text-sm font-medium text-neutral-100 mb-4 flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:magic-stick-3-linear"></iconify-icon>
                        New Generation
                    </h2>
<label className="text-xs font-medium text-neutral-500 mb-1.5 block">Topic or Idea</label>
<textarea className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all resize-none mb-4 h-28" placeholder="e.g., what happens if humans stop sleeping..."></textarea>
<div className="flex items-center justify-between mb-6">
<label className="text-xs font-medium text-neutral-500">Target Platform</label>
<div className="flex gap-1 bg-neutral-950 border border-neutral-800 p-0.5 rounded-lg">
<button className="px-2 py-1 rounded-md bg-neutral-800 text-neutral-200 text-xs font-medium transition-colors">Reels</button>
<button className="px-2 py-1 rounded-md text-neutral-500 hover:text-neutral-300 text-xs font-medium transition-colors">Shorts</button>
<button className="px-2 py-1 rounded-md text-neutral-500 hover:text-neutral-300 text-xs font-medium transition-colors">TikTok</button>
</div>
</div>
<button className="w-full mt-auto bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-medium py-2.5 rounded-xl transition-all btn-glow flex items-center justify-center gap-2">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
                        Generate Blueprint
                    </button>
</div>

<div className="bg-neutral-900/30 border border-neutral-800/60 rounded-2xl p-4">
<h3 className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-3">Idea Generators</h3>
<div className="flex flex-col gap-2">
<button className="flex items-center justify-between px-3 py-2 rounded-lg bg-neutral-950/50 border border-neutral-800/50 text-sm text-neutral-400 hover:text-neutral-200 hover:border-neutral-700 transition-all group">
<span className="flex items-center gap-2"><iconify-icon className="text-orange-500/70 group-hover:text-orange-400" icon="solar:fire-linear"></iconify-icon> Trending Topics</span>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="flex items-center justify-between px-3 py-2 rounded-lg bg-neutral-950/50 border border-neutral-800/50 text-sm text-neutral-400 hover:text-neutral-200 hover:border-neutral-700 transition-all group">
<span className="flex items-center gap-2"><iconify-icon className="text-purple-500/70 group-hover:text-purple-400" icon="solar:dice-linear"></iconify-icon> Random Idea</span>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="flex items-center justify-between px-3 py-2 rounded-lg bg-neutral-950/50 border border-neutral-800/50 text-sm text-neutral-400 hover:text-neutral-200 hover:border-neutral-700 transition-all group">
<span className="flex items-center gap-2"><iconify-icon className="text-teal-500/70 group-hover:text-teal-400" icon="solar:magnet-linear"></iconify-icon> Hook Generator</span>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="mt-auto px-2 flex flex-col gap-1.5 text-xs text-neutral-500">
<div className="flex items-center justify-between">
<span>Daily Free Quota</span>
<span className="font-medium text-neutral-300">8/10 Left</span>
</div>
<div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500/50 w-[20%] rounded-full"></div>
</div>
<p className="text-[10px] mt-1 text-neutral-600">Rate limited per IP. Queue active during peak hours.</p>
</div>
</aside>

<div className="lg:col-span-6 flex flex-col gap-6">
<div className="flex items-center justify-between mb-2">
<h2 className="text-xl font-medium tracking-tight text-neutral-100 flex items-center gap-2">
                        Video Blueprint
                        <span className="px-2 py-0.5 rounded-md bg-neutral-800 border border-neutral-700 text-xs font-normal text-neutral-400">Generated</span>
</h2>
<div className="flex gap-2">
<button className="p-1.5 text-neutral-500 hover:text-neutral-200 transition-colors rounded-md hover:bg-neutral-800" title="Grid View">
<iconify-icon icon="solar:widget-3-linear"></iconify-icon>
</button>
<button className="p-1.5 text-indigo-400 bg-indigo-500/10 transition-colors rounded-md" title="List View">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>

<div className="bg-neutral-900/30 border border-neutral-800/60 rounded-2xl p-5 hover:border-neutral-700/80 transition-colors group relative">
<div className="absolute top-5 left-0 w-1 h-8 bg-indigo-500 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between mb-4 pl-2">
<div className="flex items-center gap-3">
<span className="w-6 h-6 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs font-medium text-neutral-300">1</span>
<span className="text-xs font-medium text-indigo-400 uppercase tracking-widest">The Hook</span>
</div>
<span className="text-xs text-neutral-500 flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 0:00 - 0:03</span>
</div>
<div className="pl-2 space-y-4">

<div>
<p className="text-xs font-medium text-neutral-500 mb-1.5 flex items-center gap-1.5">
<iconify-icon icon="solar:microphone-3-linear"></iconify-icon> Voiceover
                            </p>
<p className="text-base text-neutral-200 leading-relaxed font-medium">"What happens if humans just... stopped sleeping?"</p>
</div>

<div className="bg-neutral-950/80 border border-neutral-800/80 rounded-xl p-3 relative group/prompt">
<p className="text-[10px] font-medium text-neutral-500 mb-1.5 flex items-center gap-1.5 uppercase tracking-wider">
<iconify-icon icon="solar:camera-linear"></iconify-icon> Video Generation Prompt
                            </p>
<p className="text-sm text-neutral-400 font-mono leading-relaxed pr-8">ultra realistic human standing in dark void, cinematic lighting, eyes wide open, subtle dark circles appearing, dramatic high contrast, 8k resolution</p>
<button className="absolute top-3 right-3 p-1.5 rounded-md text-neutral-500 bg-neutral-900 hover:text-white hover:bg-neutral-800 transition-all opacity-0 group-hover/prompt:opacity-100 border border-neutral-800">
<iconify-icon className="text-sm" icon="solar:copy-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-neutral-900/30 border border-neutral-800/60 rounded-2xl p-5 hover:border-neutral-700/80 transition-colors group relative">
<div className="absolute top-5 left-0 w-1 h-8 bg-neutral-500 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between mb-4 pl-2">
<div className="flex items-center gap-3">
<span className="w-6 h-6 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs font-medium text-neutral-300">2</span>
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Main Explanation</span>
</div>
<span className="text-xs text-neutral-500 flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 0:03 - 0:08</span>
</div>
<div className="pl-2 space-y-4">
<div>
<p className="text-xs font-medium text-neutral-500 mb-1.5 flex items-center gap-1.5">
<iconify-icon icon="solar:microphone-3-linear"></iconify-icon> Voiceover
                            </p>
<p className="text-base text-neutral-200 leading-relaxed font-medium">"After just 24 hours, your brain starts literally eating itself to survive."</p>
</div>
<div className="bg-neutral-950/80 border border-neutral-800/80 rounded-xl p-3 relative group/prompt">
<p className="text-[10px] font-medium text-neutral-500 mb-1.5 flex items-center gap-1.5 uppercase tracking-wider">
<iconify-icon icon="solar:camera-linear"></iconify-icon> Video Generation Prompt
                            </p>
<p className="text-sm text-neutral-400 font-mono leading-relaxed pr-8">macro shot inside human brain, neural networks glowing with neon blue light, synapses firing erratically, highly detailed biological visualization, 3d render, octane</p>
<button className="absolute top-3 right-3 p-1.5 rounded-md text-neutral-500 bg-neutral-900 hover:text-white hover:bg-neutral-800 transition-all opacity-0 group-hover/prompt:opacity-100 border border-neutral-800">
<iconify-icon className="text-sm" icon="solar:copy-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-neutral-900/30 border border-neutral-800/60 rounded-2xl p-5 hover:border-neutral-700/80 transition-colors group relative">
<div className="absolute top-5 left-0 w-1 h-8 bg-neutral-500 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between mb-4 pl-2">
<div className="flex items-center gap-3">
<span className="w-6 h-6 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs font-medium text-neutral-300">3</span>
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Suspense Twist</span>
</div>
<span className="text-xs text-neutral-500 flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 0:08 - 0:13</span>
</div>
<div className="pl-2 space-y-4">
<div>
<p className="text-xs font-medium text-neutral-500 mb-1.5 flex items-center gap-1.5">
<iconify-icon icon="solar:microphone-3-linear"></iconify-icon> Voiceover
                            </p>
<p className="text-base text-neutral-200 leading-relaxed font-medium">"By day 3, hallucinations kick in. You stop knowing what's real... and what's not."</p>
</div>
<div className="bg-neutral-950/80 border border-neutral-800/80 rounded-xl p-3 relative group/prompt">
<p className="text-[10px] font-medium text-neutral-500 mb-1.5 flex items-center gap-1.5 uppercase tracking-wider">
<iconify-icon icon="solar:camera-linear"></iconify-icon> Video Generation Prompt
                            </p>
<p className="text-sm text-neutral-400 font-mono leading-relaxed pr-8">first person view point of view, distorted reality, blurry edges, shadow figures in the background, dimly lit room, psychological thriller aesthetic, volumetric fog</p>
<button className="absolute top-3 right-3 p-1.5 rounded-md text-neutral-500 bg-neutral-900 hover:text-white hover:bg-neutral-800 transition-all opacity-0 group-hover/prompt:opacity-100 border border-neutral-800">
<iconify-icon className="text-sm" icon="solar:copy-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<button className="w-full py-3 rounded-xl border border-dashed border-neutral-800 hover:border-neutral-600 text-sm font-medium text-neutral-500 hover:text-neutral-300 bg-neutral-900/10 hover:bg-neutral-900/30 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon> Add Custom Scene
                </button>
</div>

<aside className="lg:col-span-3 flex flex-col gap-6">

<div className="bg-neutral-900/30 border border-neutral-800/60 rounded-2xl p-5 relative">
<h3 className="text-sm font-medium text-neutral-100 mb-3 flex items-center justify-between">
<span className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="solar:pen-new-square-linear"></iconify-icon> Viral Caption</span>
<button className="text-neutral-500 hover:text-indigo-400 transition-colors"><iconify-icon className="text-lg" icon="solar:refresh-circle-linear"></iconify-icon></button>
</h3>
<div className="bg-neutral-950 rounded-xl p-3 border border-neutral-800/50 relative group">
<p className="text-sm text-neutral-300 leading-relaxed font-sans whitespace-pre-wrap">Your body is doing THIS right now… and you don’t even know it 🤯 

Wait until you hear what happens on day 3... 

Drop a 😴 if you need a nap right now!

#sciencefacts #viralreels #didyouknow #aianimation #humanbody</p>
<button className="absolute top-2 right-2 p-1.5 bg-neutral-800 border border-neutral-700 rounded-md text-neutral-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100 shadow-sm">
<iconify-icon className="text-xs" icon="solar:copy-linear"></iconify-icon>
</button>
</div>
</div>

<div className="bg-neutral-900/30 border border-neutral-800/60 rounded-2xl p-5">
<h3 className="text-sm font-medium text-neutral-100 mb-3 flex items-center gap-2">
<iconify-icon className="text-purple-400" icon="solar:music-note-linear"></iconify-icon> Suggested Audio
                    </h3>
<div className="flex items-center justify-between bg-neutral-950 p-3 rounded-xl border border-neutral-800/50">
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-200">Spooky Suspense Core</span>
<span className="text-xs text-neutral-500">Trending • 4.2M uses</span>
</div>
<iconify-icon className="text-2xl text-purple-400 cursor-pointer hover:text-purple-300 transition-colors" icon="solar:play-circle-bold-duotone"></iconify-icon>
</div>
</div>

<div className="mt-auto bg-neutral-900/50 border border-neutral-800/60 rounded-2xl p-4 flex flex-col gap-3">
<h3 className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-1">Export Options</h3>
<button className="w-full bg-neutral-100 hover:bg-white text-neutral-950 text-sm font-medium py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:copy-bold-duotone"></iconify-icon>
                        Copy All Prompts
                    </button>
<button className="w-full bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 hover:border-neutral-600 text-neutral-200 text-sm font-medium py-2.5 rounded-xl transition-all flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon>
                        Download TXT
                    </button>

<div className="mt-2 pt-4 border-t border-neutral-800/60 flex items-center justify-between">
<span className="text-xs text-neutral-400">Include timestamps in export</span>

<div className="relative inline-block w-8 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 border-neutral-800 appearance-none cursor-pointer transition-all duration-300 z-10 top-0.5 left-0.5 checked:border-indigo-500 checked:translate-x-full" id="toggle1" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-800 cursor-pointer transition-colors duration-300" htmlFor="toggle1"></label>
</div>
</div>
</div>
</aside>
</div>
</main>

    </>
  );
}
