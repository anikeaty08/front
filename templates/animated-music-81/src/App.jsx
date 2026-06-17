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



    window.addEventListener('DOMContentLoaded', () => {
      // Replace any lucide icons if needed (not strictly required here)
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      const playToggle = document.getElementById('play-toggle');
      const playIcon = document.getElementById('play-toggle-icon');

      let isPlaying = false;
      playToggle?.addEventListener('click', () => {
        isPlaying = !isPlaying;
        if (!playIcon) return;

        if (isPlaying) {
          playIcon.innerHTML = '<path d="M10 5h2v14h-2zM14 5h2v14h-2z" stroke-linecap="round" stroke-linejoin="round" />';
          playToggle.classList.remove('bg-emerald-500', 'hover:bg-emerald-400');
          playToggle.classList.add('bg-slate-900', 'hover:bg-slate-800', 'text-emerald-300', 'border', 'border-emerald-500/60');
        } else {
          playIcon.innerHTML = '<path d="M8 5v14l11-7z" stroke-linecap="round" stroke-linejoin="round" />';
          playToggle.classList.add('bg-emerald-500', 'hover:bg-emerald-400', 'text-slate-950');
          playToggle.classList.remove('bg-slate-900', 'hover:bg-slate-800', 'text-emerald-300', 'border', 'border-emerald-500/60');
        }
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
      
<div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
<div className="w-full max-w-6xl mx-auto px-6 lg:px-10 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/70 px-3 py-1.5 backdrop-blur">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="text-sm font-medium tracking-tight text-slate-200">Live Audio Playground</span>
</div>
<div className="space-y-4">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-50">
            Compose in the dark.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400">
              Watch melodies float.
            </span>
</h1>
<p className="text-lg sm:text-xl text-slate-300/90 max-w-xl">
            Turn every keystroke into a note and every note into motion. Craft generative soundscapes with a live, animated score that dances across your screen.
          </p>
</div>
<div className="flex flex-wrap items-center gap-4">
<button className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-medium text-base tracking-tight px-5 py-2.5 transition-colors shadow-[0_0_0_1px_rgba(16,185,129,0.35)]">
<span>Start a live session</span>
<span className="inline-flex" id="play-icon">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 4v16l13-8L7 4z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
</button>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-800/80 bg-slate-950/60 hover:border-slate-700 text-slate-200 font-medium text-base tracking-tight px-5 py-2.5 transition-colors">
<span className="inline-flex">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18V5l12-2v13" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="6" cy="18" r="3"></circle>
<circle cx="18" cy="16" r="3"></circle>
</svg>
</span>
<span>Preview the motion</span>
</button>
</div>
<div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
<span className="text-base">Reactive animations</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/15 text-sky-300">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v18m-7-7h14" strokeLinecap="round"></path>
</svg>
</span>
<span className="text-base">Spatial audio grid</span>
</div>
</div>
</div>

<div className="relative">

<div className="absolute inset-0 -translate-y-6 blur-3xl opacity-60">
<div className="w-full h-full bg-gradient-to-tr from-emerald-500/15 via-cyan-500/15 to-purple-500/15 rounded-3xl"></div>
</div>
<div className="relative rounded-3xl border border-slate-800/80 bg-slate-900/80 backdrop-blur-xl overflow-hidden shadow-2xl shadow-emerald-500/10">

<div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-950/80 px-5 py-3">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-slate-600"></span>
<span className="h-2 w-2 rounded-full bg-slate-600"></span>
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/90 px-2 py-1">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18V5l12-2v13" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="6" cy="18" r="3"></circle>
<circle cx="18" cy="16" r="3"></circle>
</svg>
<span className="text-[0.7rem] tracking-tight">Session · 128 BPM</span>
</span>
</div>
</div>

<div className="relative h-80 sm:h-96 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 overflow-hidden">

<div className="absolute inset-0 opacity-40">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.14),_transparent_55%)]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.09)_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]"></div>
</div>

<div className="absolute inset-0 pointer-events-none" id="note-layer">

<div className="absolute left-[8%] top-[10%] animate-[float_9s_ease-in-out_infinite]">
<div className="inline-flex items-center justify-center rounded-full border border-emerald-400/40 bg-slate-950/80 backdrop-blur text-emerald-300/90 h-10 w-10 shadow-[0_0_35px_rgba(45,212,191,0.5)]">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18V5l12-2v13" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="6" cy="18" r="3"></circle>
<circle cx="18" cy="16" r="3"></circle>
</svg>
</div>
</div>
<div className="absolute left-[4%] top-[55%] animate-[float_12s_ease-in-out_infinite_reverse]">
<div className="inline-flex items-center justify-center rounded-2xl border border-sky-400/40 bg-slate-950/80 backdrop-blur text-sky-300/90 h-9 w-9 shadow-[0_0_28px_rgba(56,189,248,0.4)]">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 17h16M4 12h10M4 7h6" strokeLinecap="round"></path>
</svg>
</div>
</div>

<div className="absolute left-[35%] top-[20%] animate-[float_11s_ease-in-out_infinite]">
<div className="inline-flex items-center justify-center rounded-full border border-cyan-400/40 bg-slate-950/80 backdrop-blur text-cyan-300/90 h-11 w-11 shadow-[0_0_40px_rgba(34,211,238,0.55)]">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 10v4" strokeLinecap="round"></path>
<path d="M7 7v10" strokeLinecap="round"></path>
<path d="M11 4v16" strokeLinecap="round"></path>
<path d="M15 7v10" strokeLinecap="round"></path>
<path d="M19 10v4" strokeLinecap="round"></path>
</svg>
</div>
</div>
<div className="absolute left-[32%] top-[65%] animate-[float_13s_ease-in-out_infinite_reverse]">
<div className="inline-flex items-center justify-center rounded-2xl border border-purple-400/40 bg-slate-950/80 backdrop-blur text-purple-300/90 h-9 w-9 shadow-[0_0_28px_rgba(168,85,247,0.45)]">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 18V7l5-2v11" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="4" cy="18" r="2"></circle>
<circle cx="9" cy="16" r="2"></circle>
</svg>
</div>
</div>

<div className="absolute left-[62%] top-[12%] animate-[float_10s_ease-in-out_infinite_reverse]">
<div className="inline-flex items-center justify-center rounded-full border border-emerald-400/40 bg-slate-950/80 backdrop-blur text-emerald-300/90 h-10 w-10 shadow-[0_0_32px_rgba(45,212,191,0.45)]">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18V8l6-2v10" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="6" cy="18" r="2"></circle>
<circle cx="12" cy="16" r="2"></circle>
<path d="M16 9.5a2.5 2.5 0 0 1 5 0V16" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="21" cy="18" r="2"></circle>
</svg>
</div>
</div>
<div className="absolute left-[65%] top-[55%] animate-[float_14s_ease-in-out_infinite]">
<div className="inline-flex items-center justify-center rounded-xl border border-cyan-400/40 bg-slate-950/80 backdrop-blur text-cyan-300/90 h-9 w-9 shadow-[0_0_26px_rgba(34,211,238,0.45)]">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4h4v16H4zM16 4h4v16h-4z"></path>
<path d="M10 9h4v6h-4z"></path>
</svg>
</div>
</div>

<div className="absolute right-[6%] top-[22%] animate-[float_12s_ease-in-out_infinite]">
<div className="inline-flex items-center justify-center rounded-full border border-sky-400/40 bg-slate-950/80 backdrop-blur text-sky-300/90 h-9 w-9 shadow-[0_0_26px_rgba(56,189,248,0.45)]">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h4l3 8 4-16 3 8h2" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<div className="absolute right-[10%] top-[62%] animate-[float_15s_ease-in-out_infinite_reverse]">
<div className="inline-flex items-center justify-center rounded-2xl border border-emerald-400/40 bg-slate-950/80 backdrop-blur text-emerald-300/90 h-10 w-10 shadow-[0_0_32px_rgba(45,212,191,0.5)]">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 15a3 3 0 0 0 6 0V6l10-2v9a3 3 0 0 0-3 3" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 border-t border-slate-800/80 bg-slate-950/90 backdrop-blur">
<div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5">
<div className="flex items-center gap-3">
<button className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors" id="play-toggle">
<svg className="h-4 w-4" fill="none" id="play-toggle-icon" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5v14l11-7z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<div className="space-y-0.5">
<div className="flex items-center gap-2 text-xs text-slate-300">
<span className="font-medium tracking-tight">Night Sketch · 01</span>
<span className="h-0.5 w-0.5 rounded-full bg-slate-500"></span>
<span className="text-slate-400">Deep mode</span>
</div>
<div className="flex items-center gap-2 text-[0.7rem] text-slate-500">
<span>Reverb</span>
<span className="inline-flex h-1 w-8 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"></span>
<span>Delay</span>
</div>
</div>
</div>
<div className="flex items-center gap-4 text-xs text-slate-400">
<div className="hidden sm:flex items-center gap-1.5">
<span className="inline-flex">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 18V6" strokeLinecap="round"></path>
<path d="M9 18V3" strokeLinecap="round"></path>
<path d="M14 18V8" strokeLinecap="round"></path>
<path d="M19 18V10" strokeLinecap="round"></path>
</svg>
</span>
<span>Reactive grid</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M11 5h2M4 8h16M7 12h10M9 16h6M10 20h4" strokeLinecap="round"></path>
</svg>
</span>
<span>02:47</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/95 px-4 py-2.5 backdrop-blur shadow-xl">
<div className="inline-flex items-center justify-center h-8 w-8 rounded-xl bg-emerald-500/15 text-emerald-300">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v18" strokeLinecap="round"></path>
<path d="M5 10l7-7 7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="space-y-0.5">
<div className="text-xs font-medium tracking-tight text-slate-100">Real-time note physics</div>
<div className="text-[0.7rem] text-slate-400">Every beat gently pushes nearby notes in orbit.</div>
</div>
</div>
</div>
</div>
</div>

<style>
    @keyframes float {
      0%   { transform: translate3d(0, 0, 0); }
      25%  { transform: translate3d(0.15rem, -0.7rem, 0); }
      50%  { transform: translate3d(-0.1rem, -1.1rem, 0); }
      75%  { transform: translate3d(0.1rem, -0.5rem, 0); }
      100% { transform: translate3d(0, 0, 0); }
    }
  </style>



    </>
  );
}
