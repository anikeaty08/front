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



        // Simple JS to stagger initial opacity if animation CSS fails for some reason
        document.addEventListener('DOMContentLoaded', () => {
            const elements = document.querySelectorAll('.animate-entry');
            elements.forEach(el => {
                // Ensure opacity starts at 0 via CSS, animations handle the rest
            });
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl"></div>
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent opacity-50"></div>
</div>

<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[900px] pointer-events-none z-0" fill="none" viewbox="0 0 1400 900">
<defs>
<lineargradient id="beamGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="rgba(255,255,255,0)"></stop>
<stop offset="50%" stop-color="rgba(255,255,255,0.4)"></stop>
<stop offset="100%" stop-color="rgba(255,255,255,0)"></stop>
</lineargradient>
</defs>

<path className="noodle-path" d="M 380 450 C 450 450, 450 300, 520 300" stroke="url(#beamGradient)" strokeWidth="1" style={{opacity: '0.3'}}></path>

<path className="noodle-path" d="M 880 600 C 950 600, 950 450, 1020 450" stroke="url(#beamGradient)" strokeWidth="1" style={{animationDelay: '-1.5s', opacity: '0.3'}}></path>
</svg>

<main className="relative z-10 flex flex-col xl:flex-row gap-10 items-center justify-center py-20 scale-[0.85] lg:scale-100">


<div className="w-[393px] h-[852px] rounded-[50px] bg-[#050505] shadow-beautiful-lg border-[6px] border-[#1a1a1a] relative overflow-hidden flex flex-col z-20 animate-entry" style={{animationDelay: '0.2s'}}>

<div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white/5" style={{animation: 'sonar 4s infinite linear'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white/5" style={{animation: 'sonar 4s infinite linear 1s'}}></div>
</div>

<div className="pt-16 px-6 pb-6 z-10 bg-gradient-to-b from-[#050505] to-transparent">
<div className="flex justify-between items-center mb-8">
<span className="font-mono text-xs font-bold tracking-tighter text-white">POLY_STORE</span>
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
<iconify-icon icon="solar:bag-3-linear" width="14"></iconify-icon>
</button>
</div>
<div className="animate-entry" style={{animationDelay: '0.4s'}}>
<div className="inline-flex items-center gap-2 px-2 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="font-mono text-[9px] uppercase tracking-widest text-white/70">v2.0 Available</span>
</div>
<h1 className="font-serif text-4xl text-white italic mb-2">Digital<br/>Artifacts.</h1>
<p className="font-mono text-[10px] text-white/50 max-w-[200px] leading-relaxed">Curated collection of high-fidelity 3D assets for modern interfaces.</p>
</div>
</div>

<div className="relative w-full h-12 mb-6 border-y border-white/5 bg-white/[0.02] flex items-center overflow-hidden fade-mask-x animate-entry" style={{animationDelay: '0.5s'}}>
<div className="flex items-center gap-8 whitespace-nowrap" style={{animation: 'marquee 20s linear infinite'}}>
<span className="font-mono text-[10px] uppercase tracking-widest text-white/30">Blender</span>
<span className="font-mono text-[10px] uppercase tracking-widest text-white/30">Cinema4D</span>
<span className="font-mono text-[10px] uppercase tracking-widest text-white/30">Figma</span>
<span className="font-mono text-[10px] uppercase tracking-widest text-white/30">React Three Fiber</span>
<span className="font-mono text-[10px] uppercase tracking-widest text-white/30">Spline</span>
<span className="font-mono text-[10px] uppercase tracking-widest text-white/30">Unreal</span>

<span className="font-mono text-[10px] uppercase tracking-widest text-white/30">Blender</span>
<span className="font-mono text-[10px] uppercase tracking-widest text-white/30">Cinema4D</span>
<span className="font-mono text-[10px] uppercase tracking-widest text-white/30">Figma</span>
<span className="font-mono text-[10px] uppercase tracking-widest text-white/30">React Three Fiber</span>
<span className="font-mono text-[10px] uppercase tracking-widest text-white/30">Spline</span>
<span className="font-mono text-[10px] uppercase tracking-widest text-white/30">Unreal</span>
</div>
</div>

<div className="flex-1 overflow-y-auto px-4 pb-20 relative z-10 fade-mask-y">

<div className="relative mb-6 mx-2 animate-entry" style={{animationDelay: '0.6s'}}>
<input className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 font-mono text-xs text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-all" placeholder="Search assets..." type="text"/>
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" icon="solar:magnifer-linear"></iconify-icon>
</div>
<div className="grid grid-cols-2 gap-3">

<div className="group relative animate-entry" style={{animationDelay: '0.7s'}}>
<div className="aspect-[3/4] rounded-xl bg-neutral-900 overflow-hidden border border-white/10 relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-60 z-10"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:scale-110 transition-transform duration-700">
<div className="w-20 h-20 border border-white/30 rounded-full rotate-45"></div>
</div>
<div className="absolute bottom-3 left-3 right-3 z-20">
<h3 className="font-serif italic text-white text-lg">Abstract 01</h3>
<div className="flex justify-between items-end mt-1">
<span className="font-mono text-[9px] text-white/50 uppercase">GLTF / OBJ</span>
<span className="font-mono text-[10px] text-white bg-white/10 px-2 py-1 rounded">$24</span>
</div>
</div>
</div>
</div>

<div className="group relative animate-entry" style={{animationDelay: '0.8s'}}>
<div className="aspect-[3/4] rounded-xl bg-neutral-900 overflow-hidden border border-white/10 relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-60 z-10"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:scale-110 transition-transform duration-700">
<div className="w-16 h-16 border border-white/30 rotate-12"></div>
</div>
<div className="absolute bottom-3 left-3 right-3 z-20">
<h3 className="font-serif italic text-white text-lg">Glass Kit</h3>
<div className="flex justify-between items-end mt-1">
<span className="font-mono text-[9px] text-white/50 uppercase">Blend</span>
<span className="font-mono text-[10px] text-white bg-white/10 px-2 py-1 rounded">$32</span>
</div>
</div>
</div>
</div>

<div className="group relative animate-entry" style={{animationDelay: '0.9s'}}>
<div className="aspect-[3/4] rounded-xl bg-neutral-900 overflow-hidden border border-white/10 relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-60 z-10"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:scale-110 transition-transform duration-700">
<div className="w-20 h-20 border-2 border-dashed border-white/20 rounded-full"></div>
</div>
<div className="absolute bottom-3 left-3 right-3 z-20">
<h3 className="font-serif italic text-white text-lg">Noise Pack</h3>
<div className="flex justify-between items-end mt-1">
<span className="font-mono text-[9px] text-white/50 uppercase">4K PNG</span>
<span className="font-mono text-[10px] text-white bg-white/10 px-2 py-1 rounded">$18</span>
</div>
</div>
</div>
</div>

<div className="group relative animate-entry" style={{animationDelay: '1.0s'}}>
<div className="aspect-[3/4] rounded-xl bg-neutral-900 overflow-hidden border border-white/10 relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-60 z-10"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:scale-110 transition-transform duration-700">
<div className="w-10 h-20 border border-white/30 rounded-lg skew-y-12"></div>
</div>
<div className="absolute bottom-3 left-3 right-3 z-20">
<h3 className="font-serif italic text-white text-lg">Chrome</h3>
<div className="flex justify-between items-end mt-1">
<span className="font-mono text-[9px] text-white/50 uppercase">Shader</span>
<span className="font-mono text-[10px] text-white bg-white/10 px-2 py-1 rounded">$45</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black via-black/90 to-transparent z-30 flex items-center justify-center">
<div className="w-32 h-1 bg-white/20 rounded-full mb-4"></div>
</div>
</div>

</main>


    </>
  );
}
