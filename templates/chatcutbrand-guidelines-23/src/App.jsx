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
      
<div className="max-w-5xl mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row gap-12 lg:gap-24">

<aside className="hidden md:flex w-48 shrink-0 flex-col sticky top-24 h-fit">
<div className="text-xs font-semibold tracking-tighter text-white mb-10 flex items-center gap-2">
<div className="w-5 h-5 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
<iconify-icon height="12" icon="solar:scissors-linear" strokeWidth="2" width="12"></iconify-icon>
</div>
                CHATCUT
            </div>
<nav className="flex flex-col gap-4 text-sm text-zinc-500">
<div className="text-xs font-medium text-zinc-700 tracking-wider uppercase mb-1">Overview</div>
<a className="hover:text-zinc-200 transition-colors flex items-center gap-2" href="#philosophy">
<iconify-icon height="16" icon="solar:planet-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Philosophy
                </a>
<a className="hover:text-zinc-200 transition-colors flex items-center gap-2" href="#colors">
<iconify-icon height="16" icon="solar:palette-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Color Palette
                </a>
<a className="hover:text-zinc-200 transition-colors flex items-center gap-2" href="#typography">
<iconify-icon height="16" icon="solar:text-field-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Typography
                </a>
<a className="hover:text-zinc-200 transition-colors flex items-center gap-2" href="#interface">
<iconify-icon height="16" icon="solar:layers-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Interface
                </a>
<a className="hover:text-zinc-200 transition-colors flex items-center gap-2" href="#imagery">
<iconify-icon height="16" icon="solar:gallery-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Imagery
                </a>
</nav>
</aside>

<main className="flex-1 min-w-0">

<div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 font-mono mb-10 pb-4 border-b border-white/5">
<div className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded-md">
<iconify-icon height="14" icon="solar:folder-with-files-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span>workspace</span>
</div>
<span>/</span>
<div className="flex items-center gap-1.5 bg-indigo-500/10 text-indigo-300 px-2 py-1 rounded-md">
<iconify-icon height="14" icon="solar:document-text-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span>design.md</span>
</div>
</div>

<div className="mb-16">
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">ChatCut.io Design Guidelines</h1>
<p className="text-base text-zinc-400 leading-relaxed max-w-2xl">
                    A comprehensive breakdown of the visual language, interface components, and design philosophy powering the AI video editing platform.
                </p>
</div>

<section className="mb-16 scroll-mt-24" id="philosophy">
<h2 className="text-xl font-medium tracking-tight text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-zinc-600" height="18" icon="solar:hashtag-linear" width="18"></iconify-icon>
                    1. Design Universe &amp; Philosophy
                </h2>
<div className="prose prose-invert prose-sm max-w-none text-zinc-400 space-y-4">
<p className="leading-relaxed">
                        The ChatCut design universe is built around the concept of a <span className="text-zinc-200 font-medium">"Silent Studio."</span> Video editors spend hours staring at interfaces; the UI must get out of the way of the content. 
                    </p>
<ul className="list-none space-y-3 mt-4 ml-0 pl-0">
<li className="flex gap-3 items-start">
<iconify-icon className="text-indigo-400 shrink-0 mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span><strong>Dark Mode Default:</strong> Reduces eye strain during long editing sessions and makes video content "pop" off the screen.</span>
</li>
<li className="flex gap-3 items-start">
<iconify-icon className="text-indigo-400 shrink-0 mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span><strong>Subtle Contrast:</strong> Avoid harsh dividing lines. Use slight background shifts (<code className="bg-white/5 px-1 rounded text-xs">bg-zinc-900</code> vs <code className="bg-white/5 px-1 rounded text-xs">bg-zinc-950</code>) and 10% opacity borders to define hierarchy.</span>
</li>
<li className="flex gap-3 items-start">
<iconify-icon className="text-indigo-400 shrink-0 mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span><strong>AI as Magic, Not Machine:</strong> Represent AI features with smooth, glowing gradients (indigo/purple) rather than robotic or mechanical motifs.</span>
</li>
</ul>
</div>
</section>

<section className="mb-16 scroll-mt-24" id="colors">
<h2 className="text-xl font-medium tracking-tight text-white mb-6 flex items-center gap-2">
<iconify-icon className="text-zinc-600" height="18" icon="solar:hashtag-linear" width="18"></iconify-icon>
                    2. Color Palette
                </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="group border border-white/5 rounded-xl p-3 bg-[#09090b] hover:border-white/10 transition-colors">
<div className="h-16 rounded-lg bg-[#09090b] border border-white/10 mb-3 shadow-inner"></div>
<div className="text-xs font-medium text-white mb-1">Background</div>
<div className="text-xs text-zinc-500 font-mono">#09090B</div>
<div className="text-xs text-zinc-500 font-mono mt-1">bg-zinc-950</div>
</div>

<div className="group border border-white/5 rounded-xl p-3 bg-[#18181b] hover:border-white/10 transition-colors">
<div className="h-16 rounded-lg bg-[#18181b] border border-white/10 mb-3 shadow-inner"></div>
<div className="text-xs font-medium text-white mb-1">Surface / Card</div>
<div className="text-xs text-zinc-500 font-mono">#18181B</div>
<div className="text-xs text-zinc-500 font-mono mt-1">bg-zinc-900</div>
</div>

<div className="group border border-white/5 rounded-xl p-3 bg-[#09090b] hover:border-white/10 transition-colors">
<div className="h-16 rounded-lg bg-[#6366f1] mb-3 shadow-[0_0_15px_rgba(99,102,241,0.3)]"></div>
<div className="text-xs font-medium text-white mb-1">Primary AI</div>
<div className="text-xs text-zinc-500 font-mono">#6366F1</div>
<div className="text-xs text-zinc-500 font-mono mt-1">bg-indigo-500</div>
</div>

<div className="group border border-white/5 rounded-xl p-3 bg-[#09090b] hover:border-white/10 transition-colors">
<div className="h-16 rounded-lg bg-[#a855f7] mb-3 shadow-[0_0_15px_rgba(168,85,247,0.3)]"></div>
<div className="text-xs font-medium text-white mb-1">Secondary Accent</div>
<div className="text-xs text-zinc-500 font-mono">#A855F7</div>
<div className="text-xs text-zinc-500 font-mono mt-1">bg-purple-500</div>
</div>
</div>
</section>

<section className="mb-16 scroll-mt-24" id="typography">
<h2 className="text-xl font-medium tracking-tight text-white mb-6 flex items-center gap-2">
<iconify-icon className="text-zinc-600" height="18" icon="solar:hashtag-linear" width="18"></iconify-icon>
                    3. Typography
                </h2>
<div className="border border-white/5 rounded-2xl p-6 md:p-8 bg-zinc-900/30">
<div className="mb-8 border-b border-white/5 pb-8">
<div className="text-xs text-zinc-500 font-mono mb-2">Primary Typeface</div>
<div className="text-3xl font-medium tracking-tight text-white">Inter Sans</div>
<div className="text-sm text-zinc-400 mt-2">Clean, highly legible at small sizes, geometry aligns with UI elements.</div>
</div>
<div className="space-y-6">
<div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
<div className="w-32 shrink-0 text-xs text-zinc-500 font-mono">Display Title</div>
<div className="text-4xl font-semibold tracking-tight text-white">Edit at the speed of thought.</div>
</div>
<div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
<div className="w-32 shrink-0 text-xs text-zinc-500 font-mono">Section Header</div>
<div className="text-xl font-medium tracking-tight text-zinc-100">Automated Jump Cuts</div>
</div>
<div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
<div className="w-32 shrink-0 text-xs text-zinc-500 font-mono">Body Text</div>
<div className="text-sm text-zinc-400 leading-relaxed max-w-lg">ChatCut analyzes your audio waveform and automatically removes silences, filler words, and awkward pauses with a single click.</div>
</div>
<div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
<div className="w-32 shrink-0 text-xs text-zinc-500 font-mono">Microcopy</div>
<div className="text-xs text-zinc-500 font-medium">PRESS CMD+K TO SEARCH</div>
</div>
</div>
</div>
</section>

<section className="mb-16 scroll-mt-24" id="interface">
<h2 className="text-xl font-medium tracking-tight text-white mb-6 flex items-center gap-2">
<iconify-icon className="text-zinc-600" height="18" icon="solar:hashtag-linear" width="18"></iconify-icon>
                    4. Interface Elements
                </h2>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    Forms and interactive elements prioritize a flat, borderless appearance until hovered or focused. We use a 1.5px stroke width for all iconography to maintain a delicate balance with the font weight.
                </p>

<div className="grid md:grid-cols-2 gap-6">

<div className="border border-white/5 rounded-2xl p-6 bg-zinc-900/20 flex flex-col gap-6">
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Controls</div>
<div className="flex items-center gap-4">
<button className="bg-white text-black text-sm font-medium px-4 py-2 rounded-lg hover:bg-zinc-200 transition-colors">
                                Export Video
                            </button>
<button className="bg-white/5 border border-white/10 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
<iconify-icon height="16" icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
                                Auto-Edit
                            </button>
</div>

<div className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-black/20">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" height="18" icon="solar:volume-loud-linear" width="18"></iconify-icon>
<span className="text-sm text-zinc-300">Remove Silences</span>
</div>
<div className="w-9 h-5 bg-indigo-500 rounded-full relative cursor-pointer shadow-[0_0_10px_rgba(99,102,241,0.2)]">
<div className="w-3.5 h-3.5 bg-white rounded-full absolute right-1 top-0.5 shadow-sm"></div>
</div>
</div>
</div>

<div className="border border-white/5 rounded-2xl p-6 bg-zinc-900/20 flex flex-col gap-6">
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Inputs</div>
<div className="space-y-1">
<label className="text-xs text-zinc-400 ml-1">Project Name</label>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-zinc-600" readonly="" type="text" value="Vlog_04_Final_v2.mp4"/>
</div>

<div className="space-y-1">
<label className="text-xs text-zinc-400 ml-1">Export Quality</label>
<div className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-zinc-200 flex items-center justify-between cursor-pointer hover:border-white/20 transition-colors">
<span className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                                    4K Ultra HD
                                </span>
<iconify-icon className="text-zinc-500" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="mb-16 scroll-mt-24" id="imagery">
<h2 className="text-xl font-medium tracking-tight text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-zinc-600" height="18" icon="solar:hashtag-linear" width="18"></iconify-icon>
                    5. Image Styles &amp; Assets
                </h2>
<div className="prose prose-invert prose-sm max-w-none text-zinc-400 space-y-4 mb-6">
<p className="leading-relaxed">
                        Imagery should feel technical but accessible. We avoid generic stock photos of people editing. Instead, we focus on high-fidelity, stylized representations of the interface itself, often suspended in abstract, dark spaces with subtle light leaks.
                    </p>
</div>
<div className="aspect-video w-full rounded-2xl border border-white/10 bg-[#09090b] overflow-hidden relative group flex items-center justify-center">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#09090b] to-[#09090b]"></div>
<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full"></div>

<div className="relative w-3/4 h-3/4 bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl flex flex-col overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">

<div className="h-8 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02]">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>

<div className="flex-1 p-6 flex flex-col gap-4">
<div className="w-1/3 h-4 bg-white/5 rounded-md"></div>
<div className="flex gap-2 items-end h-24 mt-auto">
<div className="flex-1 h-full bg-indigo-500/20 rounded border border-indigo-500/30"></div>
<div className="w-12 h-1/2 bg-red-500/10 rounded border border-red-500/20 relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-red-400">Cut</div>
</div>
<div className="flex-1 h-full bg-indigo-500/20 rounded border border-indigo-500/30"></div>
<div className="flex-[2] h-full bg-indigo-500/20 rounded border border-indigo-500/30"></div>
</div>
</div>
</div>
</div>
<div className="text-xs text-center text-zinc-600 mt-4">Example: Abstract interface representation used in hero sections.</div>
</section>
</main>
</div>

    </>
  );
}
