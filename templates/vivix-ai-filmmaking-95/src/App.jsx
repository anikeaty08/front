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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-12">
<a className="text-xl font-semibold tracking-tight" href="#">vivix</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#examples">Examples</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
</div>
<div className="flex items-center gap-3">
<a className="text-sm text-zinc-400 hover:text-white transition-colors hidden sm:block" href="#">Sign in</a>
<a className="px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-100 transition-colors" href="#">Start creating</a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
<div className="noise absolute inset-0 pointer-events-none"></div>
<div className="max-w-7xl mx-auto">
<div className="max-w-4xl mx-auto text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
</span>
                    Now with full camera control
                </div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 text-balance">
                    Turn ideas into film.<br/>
<span className="text-zinc-500">No crew needed.</span>
</h1>
<p className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto text-balance">
                    Professional filmmaking tools powered by AI. Full creative control over camera movement, lighting, and style — accessible to everyone.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-zinc-100 transition-all" href="#">
                        Try it free
                    </a>
<a className="w-full sm:w-auto px-6 py-3 bg-zinc-900 text-white font-medium rounded-lg hover:bg-zinc-800 transition-all border border-zinc-800 flex items-center justify-center gap-2" href="#demo">
<i className="w-4 h-4" data-lucide="play"></i>
                        Watch demo
                    </a>
</div>
</div>

<div className="relative max-w-6xl mx-auto">
<div className="relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl">

<div className="relative aspect-video bg-gradient-to-br from-violet-950/20 to-black">
<img alt="Cinematic scene" className="w-full h-full object-cover" onload="this.classList.add('loaded')" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&amp;h=675&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
<button className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all">
<i className="w-6 h-6 ml-1" data-lucide="play"></i>
</button>
</div>

<div className="absolute bottom-6 left-6 flex items-center gap-3">
<div className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 text-xs font-mono">
                                Camera: Dolly forward
                            </div>
<div className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 text-xs font-mono">
                                Lighting: Golden hour
                            </div>
</div>
</div>
</div>

<div className="absolute -right-4 top-1/4 hidden lg:block">
<div className="w-64 p-4 rounded-xl bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 shadow-xl">
<div className="text-xs text-zinc-500 mb-3">Motion Controls</div>
<div className="space-y-3">
<div>
<div className="flex items-center justify-between text-xs mb-1">
<span className="text-zinc-400">Pan speed</span>
<span className="text-white">0.8</span>
</div>
<input className="w-full" max="1" min="0" step="0.1" type="range" value="0.8"/>
</div>
<div>
<div className="flex items-center justify-between text-xs mb-1">
<span className="text-zinc-400">Zoom</span>
<span className="text-white">1.2x</span>
</div>
<input className="w-full" max="3" min="1" step="0.1" type="range" value="1.2"/>
</div>
</div>
</div>
</div>
<div className="absolute -left-4 bottom-1/4 hidden lg:block">
<div className="w-56 p-4 rounded-xl bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 shadow-xl">
<div className="text-xs text-zinc-500 mb-2">Style</div>
<div className="grid grid-cols-3 gap-2">
<button className="aspect-square rounded-lg bg-orange-900/30 border-2 border-orange-500/50 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-orange-600/40 to-orange-900/40"></div>
</button>
<button className="aspect-square rounded-lg bg-zinc-800 border border-zinc-700"></button>
<button className="aspect-square rounded-lg bg-zinc-800 border border-zinc-700"></button>
</div>
<div className="text-[10px] text-zinc-500 mt-2">Golden hour selected</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-4 border-y border-zinc-900">
<div className="max-w-7xl mx-auto">
<p className="text-center text-xs uppercase tracking-wider text-zinc-600 mb-8">Trusted by creators at</p>
<div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
<div className="text-lg font-semibold">Netflix</div>
<div className="text-lg font-semibold">Adobe</div>
<div className="text-lg font-semibold">Sony</div>
<div className="text-lg font-semibold">Warner Bros</div>
<div className="text-lg font-semibold">A24</div>
</div>
</div>
</section>

<section className="py-32 px-4 sm:px-6 lg:px-8" id="features">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl mb-20">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
                    Full creative control.<br/>
<span className="text-zinc-500">Zero technical barriers.</span>
</h2>
<p className="text-lg text-zinc-400">
                    Professional filmmaking has always required expensive equipment and specialized skills. We're changing that with AI that understands cinematography.
                </p>
</div>
<div className="grid lg:grid-cols-2 gap-6 mb-6">

<div className="relative group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 p-8 hover:border-zinc-700 transition-all">
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-violet-400" data-lucide="video"></i>
</div>
<h3 className="text-2xl font-semibold mb-3">Camera Movement</h3>
<p className="text-zinc-400 mb-6">
                            Control every aspect of camera motion. Pan, tilt, dolly, zoom — all with precise timing and easing.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-zinc-800 text-xs">Dolly shots</span>
<span className="px-3 py-1 rounded-full bg-zinc-800 text-xs">Crane moves</span>
<span className="px-3 py-1 rounded-full bg-zinc-800 text-xs">Handheld</span>
<span className="px-3 py-1 rounded-full bg-zinc-800 text-xs">Tracking</span>
</div>
</div>
<div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
<img className="w-full h-full object-cover" onload="this.classList.add('loaded')" src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&amp;h=400&amp;fit=crop"/>
</div>
</div>

<div className="relative group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 p-8 hover:border-zinc-700 transition-all">
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-orange-400" data-lucide="sun"></i>
</div>
<h3 className="text-2xl font-semibold mb-3">Dynamic Lighting</h3>
<p className="text-zinc-400 mb-6">
                            Set the mood with cinematic lighting. From harsh noon sun to moody noir shadows.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-zinc-800 text-xs">Golden hour</span>
<span className="px-3 py-1 rounded-full bg-zinc-800 text-xs">Blue hour</span>
<span className="px-3 py-1 rounded-full bg-zinc-800 text-xs">Studio</span>
<span className="px-3 py-1 rounded-full bg-zinc-800 text-xs">Dramatic</span>
</div>
</div>
<div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
<img className="w-full h-full object-cover" onload="this.classList.add('loaded')" src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&amp;h=400&amp;fit=crop"/>
</div>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-8 hover:border-zinc-700 transition-all">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-emerald-400" data-lucide="sparkles"></i>
</div>
<h3 className="text-xl font-semibold mb-3">AI Scene Generation</h3>
<p className="text-sm text-zinc-400">
                        Describe any environment and watch it come to life. Photorealistic quality with full spatial consistency.
                    </p>
</div>

<div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-8 hover:border-zinc-700 transition-all">
<div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-pink-400" data-lucide="palette"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Film Look Presets</h3>
<p className="text-sm text-zinc-400">
                        Apply the look of your favorite films. Color grade, grain, and atmosphere in one click.
                    </p>
</div>

<div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-8 hover:border-zinc-700 transition-all">
<div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-cyan-400" data-lucide="grid-3x3"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Multi-angle Shots</h3>
<p className="text-sm text-zinc-400">
                        Generate the same scene from multiple camera angles. Perfect for editing flexibility.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950" id="examples">
<div className="max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-4xl font-semibold tracking-tight mb-2">Made with Vivix</h2>
<p className="text-zinc-400">Real scenes from our community</p>
</div>
<a className="text-sm hover:text-zinc-400 transition-colors hidden sm:block" href="#">View all →</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-900 mb-3">
<img alt="Cyberpunk street" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onload="this.classList.add('loaded')" src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&amp;h=750&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute bottom-4 left-4 right-4">
<div className="flex gap-2 mb-2">
<span className="px-2 py-1 rounded bg-black/60 backdrop-blur-sm text-[10px]">Sci-fi</span>
<span className="px-2 py-1 rounded bg-black/60 backdrop-blur-sm text-[10px]">Night</span>
</div>
</div>
</div>
</div>
<p className="text-sm text-zinc-400">"Neon-lit cyberpunk alley with rain"</p>
</div>

<div className="group cursor-pointer lg:mt-8">
<div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-900 mb-3">
<img alt="Mountain landscape" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onload="this.classList.add('loaded')" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&amp;h=750&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute bottom-4 left-4 right-4">
<div className="flex gap-2 mb-2">
<span className="px-2 py-1 rounded bg-black/60 backdrop-blur-sm text-[10px]">Nature</span>
<span className="px-2 py-1 rounded bg-black/60 backdrop-blur-sm text-[10px]">Epic</span>
</div>
</div>
</div>
</div>
<p className="text-sm text-zinc-400">"Aerial mountain vista at sunrise"</p>
</div>

<div className="group cursor-pointer lg:mt-16">
<div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-900 mb-3">
<img alt="Urban scene" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onload="this.classList.add('loaded')" src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&amp;h=750&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute bottom-4 left-4 right-4">
<div className="flex gap-2 mb-2">
<span className="px-2 py-1 rounded bg-black/60 backdrop-blur-sm text-[10px]">Urban</span>
<span className="px-2 py-1 rounded bg-black/60 backdrop-blur-sm text-[10px]">Moody</span>
</div>
</div>
</div>
</div>
<p className="text-sm text-zinc-400">"City street with dramatic lighting"</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-900 mb-3">
<img alt="Desert landscape" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onload="this.classList.add('loaded')" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&amp;h=750&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute bottom-4 left-4 right-4">
<div className="flex gap-2 mb-2">
<span className="px-2 py-1 rounded bg-black/60 backdrop-blur-sm text-[10px]">Desert</span>
<span className="px-2 py-1 rounded bg-black/60 backdrop-blur-sm text-[10px]">Wide</span>
</div>
</div>
</div>
</div>
<p className="text-sm text-zinc-400">"Wide angle desert dunes"</p>
</div>

<div className="group cursor-pointer lg:mt-8">
<div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-900 mb-3">
<img alt="Space scene" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onload="this.classList.add('loaded')" src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&amp;h=750&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute bottom-4 left-4 right-4">
<div className="flex gap-2 mb-2">
<span className="px-2 py-1 rounded bg-black/60 backdrop-blur-sm text-[10px]">Space</span>
<span className="px-2 py-1 rounded bg-black/60 backdrop-blur-sm text-[10px]">Cosmic</span>
</div>
</div>
</div>
</div>
<p className="text-sm text-zinc-400">"Milky way timelapse"</p>
</div>

<div className="group cursor-pointer lg:mt-16">
<div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-900 mb-3">
<img alt="Forest scene" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onload="this.classList.add('loaded')" src="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?w=600&amp;h=750&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute bottom-4 left-4 right-4">
<div className="flex gap-2 mb-2">
<span className="px-2 py-1 rounded bg-black/60 backdrop-blur-sm text-[10px]">Forest</span>
<span className="px-2 py-1 rounded bg-black/60 backdrop-blur-sm text-[10px]">Mystical</span>
</div>
</div>
</div>
</div>
<p className="text-sm text-zinc-400">"Foggy forest with light rays"</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 sm:px-6 lg:px-8">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold tracking-tight mb-4">Professional quality.<br/>Consumer simplicity.</h2>
<p className="text-lg text-zinc-400">Compare traditional production vs Vivix</p>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-4">
<div className="text-sm font-medium text-zinc-500">Traditional Production</div>
<div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" data-lucide="x"></i>
<span className="text-zinc-400">Requires crew, equipment, location permits</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" data-lucide="x"></i>
<span className="text-zinc-400">Weeks of planning and scheduling</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" data-lucide="x"></i>
<span className="text-zinc-400">$10,000+ per day of shooting</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" data-lucide="x"></i>
<span className="text-zinc-400">Limited by weather and daylight</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" data-lucide="x"></i>
<span className="text-zinc-400">Expensive reshoots for changes</span>
</li>
</ul>
</div>
</div>
<div className="space-y-4">
<div className="text-sm font-medium">With Vivix</div>
<div className="p-6 rounded-xl bg-zinc-900 border border-zinc-700">
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Just you and your computer</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Start creating in minutes</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" data-lucide="check"></i>
<span>$29/month unlimited creation</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Any time of day, any weather</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Instant iterations and changes</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold tracking-tight mb-4">Simple, transparent pricing</h2>
<p className="text-zinc-400">Start free. Upgrade when you're ready.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-8">
<h3 className="font-semibold mb-2">Free</h3>
<div className="mb-6">
<span className="text-4xl font-semibold">$0</span>
</div>
<ul className="space-y-3 mb-8 text-sm">
<li className="flex items-start gap-2">
<i className="w-4 h-4 shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-zinc-400">5 scenes per month</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-zinc-400">720p export</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-zinc-400">Basic controls</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-zinc-400">Vivix watermark</span>
</li>
</ul>
<button className="w-full py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors text-sm font-medium">
                        Start free
                    </button>
</div>

<div className="rounded-2xl bg-white text-black p-8 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-violet-500 text-white text-[10px] font-semibold uppercase tracking-wider rounded-full">
                        Most Popular
                    </div>
<h3 className="font-semibold mb-2">Pro</h3>
<div className="mb-6">
<span className="text-4xl font-semibold">$29</span>
<span className="text-zinc-600">/month</span>
</div>
<ul className="space-y-3 mb-8 text-sm">
<li className="flex items-start gap-2">
<i className="w-4 h-4 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Unlimited scenes</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 shrink-0 mt-0.5" data-lucide="check"></i>
<span>4K export</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Full camera controls</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 shrink-0 mt-0.5" data-lucide="check"></i>
<span>No watermark</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Commercial license</span>
</li>
</ul>
<button className="w-full py-3 rounded-lg bg-black text-white hover:bg-zinc-800 transition-colors text-sm font-medium">
                        Start free trial
                    </button>
</div>

<div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-8">
<h3 className="font-semibold mb-2">Studio</h3>
<div className="mb-6">
<span className="text-4xl font-semibold">$99</span>
<span className="text-zinc-600">/month</span>
</div>
<ul className="space-y-3 mb-8 text-sm">
<li className="flex items-start gap-2">
<i className="w-4 h-4 shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-zinc-400">Everything in Pro</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-zinc-400">Team collaboration</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-zinc-400">Priority rendering</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-zinc-400">API access</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-zinc-400">Dedicated support</span>
</li>
</ul>
<button className="w-full py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors text-sm font-medium">
                        Contact sales
                    </button>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 sm:px-6 lg:px-8">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-5xl sm:text-6xl font-semibold tracking-tight mb-6 text-balance">
                Ready to start creating?
            </h2>
<p className="text-xl text-zinc-400 mb-10 text-balance">
                Join thousands of creators already using Vivix to bring their ideas to life.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-zinc-100 transition-all text-lg" href="#">
                    Start creating for free
                </a>
<a className="px-8 py-4 bg-zinc-900 text-white font-medium rounded-lg hover:bg-zinc-800 transition-all border border-zinc-800 text-lg" href="#">
                    Talk to sales
                </a>
</div>
<p className="text-xs text-zinc-600 mt-6">No credit card required · Cancel anytime</p>
</div>
</section>

<footer className="border-t border-zinc-900 py-12 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
<div className="col-span-2">
<div className="text-xl font-semibold mb-4">vivix</div>
<p className="text-sm text-zinc-500 max-w-xs">Professional AI filmmaking tools for everyone.</p>
</div>
<div>
<div className="text-sm font-medium mb-4">Product</div>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Examples</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium mb-4">Company</div>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium mb-4">Legal</div>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">License</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600">© 2024 Vivix. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="youtube"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
