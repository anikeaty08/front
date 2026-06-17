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



        // Initialize Lucide icons with customized stroke width
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5,
                'class': 'w-5 h-5'
            },
            nameAttr: 'data-lucide'
        });
    
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
      
<div className="flex-1 flex flex-col md:flex-row h-screen overflow-hidden">

<aside className="w-full md:w-[420px] bg-zinc-950 border-b md:border-b-0 md:border-r border-zinc-800/60 flex flex-col h-full overflow-y-auto z-20 flex-shrink-0 shadow-2xl shadow-black">
<div className="p-6 md:p-8 space-y-8 flex-1">

<div>
<h1 className="text-2xl tracking-tight font-medium flex items-center gap-3">
<i className="text-yellow-500" data-lucide="aperture"></i>
                        MotionType
                    </h1>
<p className="text-zinc-400 mt-3 text-base">Create and render cinematic lettering animations.</p>
</div>

<div className="space-y-6">

<div className="space-y-5 bg-zinc-900/40 p-5 rounded-xl border border-zinc-800/60">
<div className="space-y-2.5">
<label className="block text-sm font-medium text-zinc-400">Heading Text</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-base text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-yellow-500/50 focus:border-yellow-500/50 transition-all shadow-inner" type="text" value="HAPPY"/>
</div>
<div className="space-y-2.5">
<label className="block text-sm font-medium text-zinc-400">Main Script Text</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-base text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-yellow-500/50 focus:border-yellow-500/50 transition-all shadow-inner" type="text" value="40th Birthday"/>
</div>
</div>

<div className="space-y-5">
<div className="space-y-2.5">
<label className="block text-sm font-medium text-zinc-400">Visual Style</label>
<div className="relative group">
<select className="w-full appearance-none bg-zinc-900/80 border border-zinc-800 rounded-lg px-4 py-3 text-base text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-600 transition-all cursor-pointer hover:bg-zinc-800">
<option>Golden Bokeh</option>
<option>Stardust Silver</option>
<option>Neon Pulse</option>
</select>
<i className="absolute right-4 top-3.5 text-zinc-500 pointer-events-none group-hover:text-zinc-300 transition-colors" data-lucide="chevron-down"></i>
</div>
</div>

<div className="space-y-4 pt-2">
<div className="flex justify-between items-center">
<label className="block text-sm font-medium text-zinc-400">Particle Density</label>
<span className="text-sm text-zinc-500 font-medium">High</span>
</div>
<input max="100" min="1" type="range" value="85"/>
</div>
<div className="space-y-4 pt-2">
<div className="flex justify-between items-center">
<label className="block text-sm font-medium text-zinc-400">Animation Speed</label>
<span className="text-sm text-zinc-500 font-medium">1.0x</span>
</div>
<input max="100" min="1" type="range" value="50"/>
</div>
</div>

<div className="pt-2">
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="custom-checkbox" type="checkbox"/>
<span className="text-base text-zinc-300 group-hover:text-zinc-100 transition-colors">Include high-res alpha channel</span>
</label>
</div>
</div>
</div>

<div className="p-6 md:p-8 border-t border-zinc-800/60 bg-zinc-950/50 space-y-4 backdrop-blur-xl">
<button className="w-full flex items-center justify-center gap-2.5 bg-zinc-100 hover:bg-white text-zinc-950 font-medium py-3.5 px-4 rounded-lg transition-colors text-base shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<i data-lucide="play-circle"></i>
                    Preview Animation
                </button>
<button className="w-full flex items-center justify-center gap-2.5 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-100 font-medium py-3.5 px-4 rounded-lg transition-all text-base group">
<i className="text-zinc-400 group-hover:text-zinc-100 transition-colors" data-lucide="download"></i>
                    Render &amp; Download MP4
                </button>
</div>
</aside>

<main className="flex-1 bg-[#09090b] relative flex items-center justify-center p-4 md:p-12 overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

<div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl shadow-2xl ring-1 ring-white/10 overflow-hidden flex flex-col items-center justify-center z-10 group">

<div className="absolute inset-0 pointer-events-none">

<div className="absolute top-[10%] left-[20%] w-64 h-64 bg-yellow-600/10 rounded-full blur-3xl mix-blend-screen"></div>
<div className="absolute bottom-[20%] right-[15%] w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl mix-blend-screen"></div>

<div className="absolute top-[30%] left-[35%] w-4 h-4 bg-yellow-200/40 rounded-full blur-[2px] shadow-[0_0_15px_rgba(253,224,71,0.6)]"></div>
<div className="absolute top-[20%] right-[40%] w-6 h-6 bg-yellow-400/20 rounded-full blur-[4px]"></div>
<div className="absolute bottom-[35%] left-[25%] w-8 h-8 bg-yellow-500/30 rounded-full blur-[6px]"></div>
<div className="absolute top-[15%] left-[15%] w-3 h-3 bg-yellow-100/60 rounded-full blur-[1px] shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
<div className="absolute bottom-[25%] right-[30%] w-5 h-5 bg-yellow-300/50 rounded-full blur-[3px]"></div>
<div className="absolute bottom-[10%] right-[45%] w-12 h-12 bg-yellow-600/40 rounded-full blur-[8px]"></div>
<div className="absolute top-[45%] right-[15%] w-3 h-3 bg-yellow-200/70 rounded-full blur-[1px] shadow-[0_0_15px_rgba(253,224,71,0.8)]"></div>
<div className="absolute top-[5%] right-[5%] w-16 h-16 bg-yellow-500/20 rounded-full blur-[10px]"></div>
</div>

<div className="relative z-10 text-center flex flex-col items-center transform scale-90 md:scale-100 transition-transform">
<h2 className="text-gold-solid text-xl md:text-2xl uppercase tracking-[0.4em] font-light mb-1 md:mb-2 ml-4">
                        Happy
                    </h2>
<h1 className="font-cursive text-gold-gradient text-6xl md:text-8xl lg:text-9xl leading-none pr-4 md:pr-8 py-4">
                        40<span className="text-4xl md:text-6xl lg:text-7xl align-top block inline-block -mt-4 md:-mt-6 ml-1">th</span> Birthday
                    </h1>
</div>

<div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-white/10 text-white/70 px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    00:00 / 00:08
                </div>
<div className="absolute bottom-0 left-0 right-0 h-1.5 bg-zinc-900/80 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="h-full bg-yellow-500 w-1/3 relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"></div>
</div>
</div>
</div>

<div className="absolute bottom-8 text-zinc-500 text-sm flex items-center gap-2">
<i className="w-4 h-4" data-lucide="info"></i>
                Preview is rendered at lower resolution for performance.
            </div>
</main>
</div>


    </>
  );
}
