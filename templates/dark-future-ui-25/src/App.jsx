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
      

<div className="max-w-6xl mx-auto mb-16 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-emerald-400 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Design System v1.0
        </div>
<h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-4">Dark Future UI</h1>
<p className="text-lg text-neutral-500 max-w-2xl font-light">
            A high-fidelity design language focused on glassmorphism, subtle gradients, and deep contrast. Optimized for fitness and data-heavy applications.
        </p>
</div>
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">

<div className="lg:col-span-8 space-y-16">

<section className="">
<h2 className="text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-6 flex items-center gap-2">
<svg className="lucide lucide-palette w-4 h-4" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg> Chromatic Scale
                </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="space-y-3">
<div className="h-24 rounded-2xl bg-[#000000] border border-white/10 relative shadow-xl"></div>
<div>
<p className="text-white text-sm font-medium">Pure Void</p>
<p className="text-neutral-600 text-xs font-mono">#000000</p>
</div>
</div>
<div className="space-y-3">
<div className="h-24 rounded-2xl bg-[#030303] border border-white/10 relative shadow-xl"></div>
<div className="">
<p className="text-white text-sm font-medium">Card Surface</p>
<p className="text-neutral-600 text-xs font-mono">#030303</p>
</div>
</div>
<div className="space-y-3">
<div className="h-24 rounded-2xl bg-[#0a0a0a] border border-white/10 relative shadow-xl"></div>
<div className="">
<p className="text-white text-sm font-medium">Elevated</p>
<p className="text-neutral-600 text-xs font-mono">#0A0A0A</p>
</div>
</div>

<div className="space-y-3">
<div className="h-24 rounded-2xl bg-emerald-500 border border-emerald-400/20 relative shadow-[0_0_30px_rgba(16,185,129,0.3)]"></div>
<div>
<p className="text-white text-sm font-medium">Neon Emerald</p>
<p className="text-neutral-600 text-xs font-mono">text-emerald-500</p>
</div>
</div>
</div>
</section>

<section className="">
<h2 className="text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-6 flex items-center gap-2">
<svg className="lucide lucide-type w-4 h-4" data-lucide="type" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16"></path><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path><path d="M9 20h6"></path></svg> Typography
                </h2>
<div className="glass-panel p-8 rounded-3xl space-y-8 relative overflow-hidden">
<div className="noise-texture"></div>
<div className="border-b border-white/5 pb-6">
<span className="text-xs text-neutral-500 font-mono mb-2 block">Display / H1</span>
<h1 className="text-4xl font-medium text-white tracking-tight">Workouts &amp; Metrics</h1>
<p className="text-xs text-neutral-600 font-mono mt-2" style={{}}>Inter Medium • Tracking Tight (-0.025em)</p>
</div>
<div className="border-b border-white/5 pb-6">
<span className="text-xs text-neutral-500 font-mono mb-2 block">Display / H2</span>
<h2 className="text-2xl font-medium text-white tracking-tight">Session History</h2>
<p className="text-xs text-neutral-600 mt-2 font-mono">Inter Medium • Tracking Tight</p>
</div>
<div className="grid grid-cols-2 gap-8">
<div className="">
<span className="text-xs text-neutral-500 font-mono mb-2 block">Label / UI</span>
<p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Intensity Level</p>
<p className="text-xs text-neutral-600 mt-2 font-mono">SemiBold • Tracking Widest • Uppercase</p>
</div>
<div className="">
<span className="text-xs text-neutral-500 font-mono mb-2 block">Body</span>
<p className="text-sm text-neutral-400 leading-relaxed">Focus on eccentric loading for hypertrophy phases.</p>
<p className="text-xs text-neutral-600 mt-2 font-mono">Regular • Text-Neutral-400</p>
</div>
</div>
</div>
</section>

<section className="">
<h2 className="text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-6 flex items-center gap-2">
<svg className="lucide lucide-mouse-pointer-2 w-4 h-4" data-lucide="mouse-pointer-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path></svg> Components
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="space-y-4">
<p className="text-xs text-neutral-500">Buttons</p>

<button className="w-full h-14 bg-emerald-500 hover:bg-emerald-400 text-black rounded-2xl text-base font-semibold shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2">
<svg className="lucide lucide-play w-4 h-4 fill-black/20" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                            Start Workout
                        </button>

<button className="w-full h-14 bg-neutral-900/50 hover:bg-neutral-900 rounded-2xl border border-white/10 flex items-center justify-between px-5 text-white transition-all hover:border-emerald-500/50 group">
<span className="font-medium">Configure</span>
<svg className="lucide lucide-chevron-right w-4 h-4 text-neutral-600 group-hover:text-emerald-500 transition-colors" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

<div className="space-y-4">
<p className="text-xs text-neutral-500">Cards</p>

<div className="glass-panel p-4 rounded-[1.2rem] flex items-center gap-4 group cursor-pointer hover:bg-white/5 transition-all border border-white/10 hover:border-white/20">
<div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center border border-white/5">
<svg className="lucide lucide-dumbbell w-5 h-5 text-white" data-lucide="dumbbell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"></path><path d="m2.5 21.5 1.4-1.4"></path><path d="m20.1 3.9 1.4-1.4"></path><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"></path><path d="m9.6 14.4 4.8-4.8"></path></svg>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-medium text-white">Strength A</h4>
<span className="text-xs text-neutral-500">45 Min • Heavy</span>
</div>
</div>

<div className="h-20 rounded-[1.2rem] bg-gradient-to-r from-emerald-900/20 to-teal-900/10 border border-emerald-500/20 p-4 flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
<span className="text-sm font-medium text-emerald-100">Active Selection</span>
</div>
</div>
</div>
</section>

<section className="">
<h2 className="text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-6 flex items-center gap-2">
<svg className="lucide lucide-text-cursor-input w-4 h-4" data-lucide="text-cursor-input" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6"></path><path d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"></path><path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"></path><path d="M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1"></path><path d="M9 6v12"></path></svg> Inputs &amp; Data
                </h2>
<div className="glass-panel p-8 rounded-3xl space-y-6">

<div className="space-y-3">
<label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider ml-1">Input Field</label>
<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
<input className="relative w-full h-14 bg-neutral-900/80 rounded-2xl border border-white/10 px-5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500/50 transition-colors" placeholder="Type something..." type="text" value="Push Day (Chest/Triceps)"/>
</div>
</div>

<div className="bg-neutral-900 rounded-2xl p-1.5 flex relative">
<div className="absolute left-1.5 top-1.5 bottom-1.5 w-[calc(33%-4px)] bg-neutral-800 rounded-xl shadow-sm border border-white/5"></div>
<button className="flex-1 relative z-10 py-2 text-xs font-medium text-white text-center">Option A</button>
<button className="flex-1 relative z-10 py-2 text-xs font-medium text-neutral-500 hover:text-neutral-300 text-center">Option B</button>
<button className="flex-1 relative z-10 py-2 text-xs font-medium text-neutral-500 hover:text-neutral-300 text-center">Option C</button>
</div>
</div>
</section>
</div>

<div className="lg:col-span-4 space-y-12">

<div className="glass-heavy p-6 rounded-3xl border border-white/10 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-[50px] rounded-full"></div>
<h3 className="text-lg font-medium text-white mb-4 relative z-10">Glass Effect</h3>
<div className="space-y-4 relative z-10">
<div className="p-3 bg-black/40 rounded-xl border border-white/5">
<code className="text-[10px] text-emerald-400 font-mono block">background: rgba(20, 20, 20, 0.6);</code>
<code className="text-[10px] text-emerald-400 font-mono block">backdrop-filter: blur(20px);</code>
<code className="text-[10px] text-emerald-400 font-mono block">border: 1px solid rgba(255,255,255,0.08);</code>
</div>
<p className="text-xs text-neutral-500">
                        Used for cards and secondary layers. Ensure noise texture is applied behind for depth.
                    </p>
</div>
</div>

<div className="p-6 rounded-3xl border border-white/10 bg-[#050505]">
<h3 className="text-lg font-medium text-white mb-4">Iconography</h3>
<div className="grid grid-cols-4 gap-4 mb-4">
<div className="aspect-square rounded-xl bg-neutral-900 flex items-center justify-center text-white border border-white/5">
<svg className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="aspect-square rounded-xl bg-neutral-900 flex items-center justify-center text-white border border-white/5">
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="aspect-square rounded-xl bg-neutral-900 flex items-center justify-center text-white border border-white/5">
<svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<div className="aspect-square rounded-xl bg-emerald-500 flex items-center justify-center text-black shadow-lg shadow-emerald-500/20">
<svg className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</div>
<p className="text-xs text-neutral-500">
                    Lucide Icons. 1.5px Stroke Width. 
                    Primary icons often wrapped in <code>w-10 h-10</code> containers.
                </p>
</div>

<div className="relative h-32 rounded-3xl bg-neutral-900 overflow-hidden border border-white/10 flex items-end justify-center pb-6">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=1470&amp;auto=format&amp;fit=crop')] bg-cover opacity-20"></div>
<div className="h-14 w-48 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-between px-5 shadow-2xl">
<svg className="lucide lucide-home w-4 h-4 text-neutral-500" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-black">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<svg className="lucide lucide-user w-4 h-4 text-neutral-500" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto mt-16 pt-16 border-t border-white/5">
<h2 className="text-xl font-medium text-white mb-6">Quick Start CSS</h2>
<div className="w-full bg-[#050505] rounded-xl border border-white/10 p-6 overflow-x-auto">
<pre className="text-xs font-mono text-neutral-400"><span className="text-neutral-600">/* Add to main CSS file */</span>

<span className="text-emerald-500">body</span> {
  background-color: <span className="text-white">#000000</span>;
  background-image: radial-gradient(at 0% 0%, rgba(16, 185, 129, 0.08) 0px, transparent 50%);
}

<span className="text-emerald-500">.glass-card</span> {
  background: <span className="text-white">rgba(20, 20, 20, 0.6)</span>;
  backdrop-filter: <span className="text-white">blur(20px)</span>;
  border: <span className="text-white">1px solid rgba(255, 255, 255, 0.08)</span>;
}

<span className="text-emerald-500">.text-gradient</span> {
  background: <span className="text-white">linear-gradient(to right, #fff, #a3a3a3)</span>;
  -webkit-background-clip: <span className="text-white">text</span>;
  color: <span className="text-white">transparent</span>;
}
</pre>
</div>
</div>


    </>
  );
}
