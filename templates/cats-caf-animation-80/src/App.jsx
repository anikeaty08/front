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



    lucide.createIcons({ attrs: { "stroke-width": "1.5" } });
  
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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_1rem_1rem,rgba(114,63,33,0.06)_0,rgba(114,63,33,0.06)_0.125rem,transparent_0.125rem,transparent_1.25rem)] [background-size:1.75rem_1.75rem] opacity-60"></div>
<div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-[#ffb37a]/20 blur-3xl"></div>
<div className="absolute top-40 -right-24 h-72 w-72 rounded-full bg-[#ffd7b0]/25 blur-3xl"></div>
<div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#caa07a]/15 blur-3xl"></div>
</div>

<header className="relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#8a4a2d] via-[#8a4a2d] to-[#fbf4ec] opacity-90"></div>
<div className="opacity-25 mix-blend-overlay bg-[url(https://images.unsplash.com/photo-1675917209877-843fb4c351a3?w=3840&amp;q=80)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0">
<div className="absolute left-6 top-6 h-14 w-14 rounded-2xl border border-white/25 bg-white/10"></div>
<div className="absolute right-6 top-10 h-10 w-10 rounded-2xl border border-white/25 bg-white/10"></div>
<div className="absolute left-1/2 top-14 h-12 w-12 -translate-x-1/2 rounded-2xl border border-white/25 bg-white/10"></div>
</div>
<nav className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
<a className="group inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-white/90 backdrop-blur-sm ring-1 ring-white/15" href="#">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20">
<i className="h-5 w-5 text-white/90" data-lucide="paw-print"></i>
</span>
<span className="font-[Outfit] text-sm font-medium tracking-tight">Cats Café</span>
</a>
<div className="hidden items-center gap-2 sm:flex">
<a className="rounded-lg px-3 py-2 text-sm font-medium text-white/85 hover:text-white" href="#concept">Process</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-white/85 hover:text-white" href="#characters">Characters</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-white/85 hover:text-white" href="#results">Results</a>
<a className="inline-flex items-center gap-2 rounded-xl bg-[#f3c19a] px-4 py-2 text-sm font-semibold text-[#4a2a1a] shadow-sm hover:bg-[#f7cfad]" href="#watch">
<i className="h-4 w-4" data-lucide="play"></i>
          Watch
        </a>
</div>
<button className="sm:hidden inline-flex items-center justify-center rounded-xl bg-white/10 p-2 text-white/90 ring-1 ring-white/15">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</nav>
<div className="relative mx-auto max-w-6xl px-4 pb-10 pt-6 sm:px-6 sm:pb-16 sm:pt-10">
<div className="mx-auto max-w-3xl text-center text-white">
<p className="font-[Outfit] text-sm font-medium text-white/80">— The Wabi Whimsy Moments Anew —</p>
<h1 className="mt-3 font-[Fraunces] text-4xl font-semibold tracking-tight sm:text-5xl">
          Catscafe
        </h1>
<p className="mt-4 font-[Outfit] text-base text-white/85 sm:text-lg">
          A cozy animation case study: concept, characters, environments, and the final cut—crafted with warm charm and clean motion.
        </p>
<div className="mt-6 rounded-2xl bg-white/10 p-5 backdrop-blur-sm ring-1 ring-white/15 sm:p-6">
<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
<div className="text-left">
<p className="font-[Outfit] text-sm font-medium text-white/90">Project overview</p>
<p className="mt-1 font-[Outfit] text-sm text-white/75 sm:text-base">
                A full pipeline from storyboard to final animation.
              </p>
</div>
<div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#4a2a1a] shadow-sm hover:bg-[#fff6ef]" href="#concept">
<i className="h-4 w-4" data-lucide="sparkles"></i>
                Explore the process
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15" href="#contact">
<i className="h-4 w-4" data-lucide="mail"></i>
                Get in touch
              </a>
</div>
</div>
</div>
<div className="mt-8 flex items-center justify-center gap-6 text-white/75">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="timer"></i>
<span className="font-[Outfit] text-sm sm:text-base">Full pipeline</span>
</div>
<div className="h-4 w-px bg-white/20"></div>
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="film"></i>
<span className="font-[Outfit] text-sm sm:text-base">Animation-ready</span>
</div>
<div className="h-4 w-px bg-white/20"></div>
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="palette"></i>
<span className="font-[Outfit] text-sm sm:text-base">Warm palette</span>
</div>
</div>
</div>
</div>
</header>

<section className="relative" id="concept">
<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
<div className="mx-auto max-w-2xl text-center">
<h2 className="font-[Fraunces] text-2xl font-semibold tracking-tight sm:text-3xl">From Concept to Screen</h2>
<p className="mt-3 font-[Outfit] text-base text-[#5a3b2a]/80 sm:text-lg">
          A structured production path—each step designed to keep the tone cozy, the acting readable, and the timing clean.
        </p>
</div>
<div className="mt-10 rounded-3xl bg-white/55 p-6 ring-1 ring-[#5a3b2a]/10 shadow-sm sm:p-10">
<div className="relative grid gap-8 sm:grid-cols-2">

<div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#e8b592] via-[#b86f43] to-[#e8b592] sm:block"></div>

<div className="space-y-8">
<div className="group relative">
<div className="hidden sm:block absolute -right-6 top-6 h-4 w-4 rounded-full bg-[#f3c19a] ring-4 ring-white/80"></div>
<div className="rounded-2xl bg-white/90 p-5 ring-1 ring-[#5a3b2a]/10 shadow-sm">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#f8e3d3] ring-1 ring-[#5a3b2a]/10">
<i className="h-5 w-5 text-[#7a3f22]" data-lucide="lightbulb"></i>
</span>
<div>
<p className="font-[Outfit] text-sm font-semibold text-[#3c2a1f] sm:text-base">Idea + Story beats</p>
<p className="mt-1 font-[Outfit] text-sm text-[#5a3b2a]/80 sm:text-base">
                      Core premise, emotional arc, and a clear “slice-of-life” rhythm.
                    </p>
</div>
</div>
</div>
</div>
<div className="group relative">
<div className="hidden sm:block absolute -right-6 top-6 h-4 w-4 rounded-full bg-[#f3c19a] ring-4 ring-white/80"></div>
<div className="rounded-2xl bg-white/90 p-5 ring-1 ring-[#5a3b2a]/10 shadow-sm">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#f8e3d3] ring-1 ring-[#5a3b2a]/10">
<i className="h-5 w-5 text-[#7a3f22]" data-lucide="pencil"></i>
</span>
<div>
<p className="font-[Outfit] text-sm font-semibold text-[#3c2a1f] sm:text-base">Storyboard</p>
<p className="mt-1 font-[Outfit] text-sm text-[#5a3b2a]/80 sm:text-base">
                      Composition, acting, and camera flow—kept readable and soft.
                    </p>
</div>
</div>
</div>
</div>
<div className="group relative">
<div className="hidden sm:block absolute -right-6 top-6 h-4 w-4 rounded-full bg-[#f3c19a] ring-4 ring-white/80"></div>
<div className="rounded-2xl bg-white/90 p-5 ring-1 ring-[#5a3b2a]/10 shadow-sm">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#f8e3d3] ring-1 ring-[#5a3b2a]/10">
<i className="h-5 w-5 text-[#7a3f22]" data-lucide="layers"></i>
</span>
<div>
<p className="font-[Outfit] text-sm font-semibold text-[#3c2a1f] sm:text-base">Layout + Timing</p>
<p className="mt-1 font-[Outfit] text-sm text-[#5a3b2a]/80 sm:text-base">
                      Beat spacing, holds, and transitions—optimized before polish.
                    </p>
</div>
</div>
</div>
</div>
<div className="group relative">
<div className="hidden sm:block absolute -right-6 top-6 h-4 w-4 rounded-full bg-[#f3c19a] ring-4 ring-white/80"></div>
<div className="rounded-2xl bg-white/90 p-5 ring-1 ring-[#5a3b2a]/10 shadow-sm">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#f8e3d3] ring-1 ring-[#5a3b2a]/10">
<i className="h-5 w-5 text-[#7a3f22]" data-lucide="brush"></i>
</span>
<div>
<p className="font-[Outfit] text-sm font-semibold text-[#3c2a1f] sm:text-base">Cleanup + Line</p>
<p className="mt-1 font-[Outfit] text-sm text-[#5a3b2a]/80 sm:text-base">
                      Consistent silhouettes and warm lines with minimal visual noise.
                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-8">
<div className="group relative">
<div className="hidden sm:block absolute -left-6 top-6 h-4 w-4 rounded-full bg-[#f3c19a] ring-4 ring-white/80"></div>
<div className="rounded-2xl bg-white/90 p-5 ring-1 ring-[#5a3b2a]/10 shadow-sm">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#f8e3d3] ring-1 ring-[#5a3b2a]/10">
<i className="h-5 w-5 text-[#7a3f22]" data-lucide="users"></i>
</span>
<div className="">
<p className="font-[Outfit] text-sm font-semibold text-[#3c2a1f] sm:text-base">Character design</p>
<p className="mt-1 font-[Outfit] text-sm text-[#5a3b2a]/80 sm:text-base">
                      Expressive faces, simple shapes, and a unified café vibe.
                    </p>
</div>
</div>
</div>
</div>
<div className="group relative">
<div className="hidden sm:block absolute -left-6 top-6 h-4 w-4 rounded-full bg-[#f3c19a] ring-4 ring-white/80"></div>
<div className="rounded-2xl bg-white/90 p-5 ring-1 ring-[#5a3b2a]/10 shadow-sm">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#f8e3d3] ring-1 ring-[#5a3b2a]/10">
<i className="h-5 w-5 text-[#7a3f22]" data-lucide="home"></i>
</span>
<div className="">
<p className="font-[Outfit] text-sm font-semibold text-[#3c2a1f] sm:text-base">Environment + Props</p>
<p className="mt-1 font-[Outfit] text-sm text-[#5a3b2a]/80 sm:text-base">
                      Cozy set dressing—menus, mugs, signage, and shelf clutter.
                    </p>
</div>
</div>
</div>
</div>
<div className="group relative">
<div className="hidden sm:block absolute -left-6 top-6 h-4 w-4 rounded-full bg-[#f3c19a] ring-4 ring-white/80"></div>
<div className="rounded-2xl bg-white/90 p-5 ring-1 ring-[#5a3b2a]/10 shadow-sm">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#f8e3d3] ring-1 ring-[#5a3b2a]/10">
<i className="h-5 w-5 text-[#7a3f22]" data-lucide="palette"></i>
</span>
<div>
<p className="font-[Outfit] text-sm font-semibold text-[#3c2a1f] sm:text-base">Color script</p>
<p className="mt-1 font-[Outfit] text-sm text-[#5a3b2a]/80 sm:text-base">
                      Warm browns and creams with orange highlights for energy.
                    </p>
</div>
</div>
</div>
</div>
<div className="group relative">
<div className="hidden sm:block absolute -left-6 top-6 h-4 w-4 rounded-full bg-[#f3c19a] ring-4 ring-white/80"></div>
<div className="rounded-2xl bg-white/90 p-5 ring-1 ring-[#5a3b2a]/10 shadow-sm">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#f8e3d3] ring-1 ring-[#5a3b2a]/10">
<i className="h-5 w-5 text-[#7a3f22]" data-lucide="wand-2"></i>
</span>
<div className="">
<p className="font-[Outfit] text-sm font-semibold text-[#3c2a1f] sm:text-base">Final comp</p>
<p className="mt-1 font-[Outfit] text-sm text-[#5a3b2a]/80 sm:text-base">
                      Grain, soft shadows, and gentle motion polish for cohesion.
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="characters">
<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
<div className="mx-auto max-w-2xl text-center">
<span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[#6b3f27] ring-1 ring-[#5a3b2a]/10">
<i className="h-4 w-4" data-lucide="sparkle"></i>
          Character lineup
        </span>
<h2 className="mt-4 font-[Fraunces] text-2xl font-semibold tracking-tight sm:text-3xl">Character Roster</h2>
<p className="mt-3 font-[Outfit] text-base text-[#5a3b2a]/80 sm:text-lg">
          A small cast with distinct silhouettes and simple, readable expressions.
        </p>
</div>
<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

<div className="rounded-2xl bg-white/75 p-4 ring-1 ring-[#5a3b2a]/10 shadow-sm">
<div className="aspect-square rounded-xl bg-gradient-to-b from-[#fff2e7] to-[#fde0cc] ring-1 ring-[#5a3b2a]/10 flex items-center justify-center">
<div className="text-center">
<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 ring-1 ring-[#5a3b2a]/10">
<i className="h-8 w-8 text-[#b65a2b]" data-lucide="cat"></i>
</div>
<p className="mt-3 font-[Outfit] text-sm font-semibold sm:text-base">Chef</p>
<p className="font-[Outfit] text-sm text-[#5a3b2a]/75 sm:text-base">Warm, playful</p>
</div>
</div>
</div>

<div className="rounded-2xl bg-white/75 p-4 ring-1 ring-[#5a3b2a]/10 shadow-sm">
<div className="aspect-square rounded-xl bg-gradient-to-b from-[#f2fbff] to-[#d8eef7] ring-1 ring-[#5a3b2a]/10 flex items-center justify-center">
<div className="text-center">
<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 ring-1 ring-[#5a3b2a]/10">
<i className="h-8 w-8 text-[#2d6a7a]" data-lucide="coffee"></i>
</div>
<p className="mt-3 font-[Outfit] text-sm font-semibold sm:text-base">Barista</p>
<p className="font-[Outfit] text-sm text-[#5a3b2a]/75 sm:text-base">Focused, calm</p>
</div>
</div>
</div>

<div className="rounded-2xl bg-white/75 p-4 ring-1 ring-[#5a3b2a]/10 shadow-sm">
<div className="aspect-square rounded-xl bg-gradient-to-b from-[#fff7f2] to-[#ffe2d6] ring-1 ring-[#5a3b2a]/10 flex items-center justify-center">
<div className="text-center">
<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 ring-1 ring-[#5a3b2a]/10">
<i className="h-8 w-8 text-[#c24a3a]" data-lucide="heart"></i>
</div>
<p className="mt-3 font-[Outfit] text-sm font-semibold sm:text-base">Regular</p>
<p className="font-[Outfit] text-sm text-[#5a3b2a]/75 sm:text-base">Sweet, curious</p>
</div>
</div>
</div>

<div className="rounded-2xl bg-white/75 p-4 ring-1 ring-[#5a3b2a]/10 shadow-sm">
<div className="aspect-square rounded-xl bg-gradient-to-b from-[#fff3e3] to-[#ffd7b0] ring-1 ring-[#5a3b2a]/10 flex items-center justify-center">
<div className="text-center">
<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 ring-1 ring-[#5a3b2a]/10">
<i className="h-8 w-8 text-[#a05a24]" data-lucide="sparkles"></i>
</div>
<p className="mt-3 font-[Outfit] text-sm font-semibold sm:text-base">Star</p>
<p className="font-[Outfit] text-sm text-[#5a3b2a]/75 sm:text-base">Cheeky, bright</p>
</div>
</div>
</div>
</div>
<div className="mt-8 rounded-3xl bg-white/70 p-6 ring-1 ring-[#5a3b2a]/10 shadow-sm sm:p-8">
<div className="flex items-center justify-between gap-4">
<div>
<p className="font-[Outfit] text-sm font-semibold sm:text-base">Rough Animation Sketches</p>
<p className="mt-1 font-[Outfit] text-sm text-[#5a3b2a]/75 sm:text-base">Pose tests and acting thumbnails to validate the tone.</p>
</div>
<span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#f8e3d3] px-3 py-1 text-xs font-semibold text-[#6b3f27] ring-1 ring-[#5a3b2a]/10">
<i className="h-4 w-4" data-lucide="pen-tool"></i>
            Sketchboard
          </span>
</div>
<div className="mt-5 rounded-2xl bg-[#fffaf5] ring-1 ring-[#5a3b2a]/10 p-4 sm:p-6">
<svg className="w-[992px] h-[396px]" data-icon-replaced="true" strokeWidth="2" style={{width: '992px', height: '396px', color: 'rgb(60, 42, 31)'}} viewbox="0 0 900 360">
<defs>
<filter height="140%" id="grain" width="140%" x="-20%" y="-20%">
<feturbulence basefrequency="0.9" numoctaves="2" stitchtiles="stitch" type="fractalNoise"></feturbulence>
<fecolormatrix type="matrix" values="0 0 0 0 0.55  0 0 0 0 0.38  0 0 0 0 0.26  0 0 0 .12 0"></fecolormatrix>
</filter>
</defs>
<g fill="none" opacity="0.95" stroke="#6b3f27" strokeWidth="2">

<g transform="translate(80,60)">
<path d="M60 40c-22 0-40 18-40 40 0 26 18 58 40 58s40-32 40-58c0-22-18-40-40-40z"></path>
<path d="M34 46l-12-14M86 46l12-14"></path>
<path d="M42 82c8 8 28 8 36 0"></path>
<path d="M28 112c10 18 54 18 64 0"></path>
<path d="M92 132c18 6 26 22 18 34"></path>
</g>
<g transform="translate(350,50)">
<path d="M60 44c-22 0-40 18-40 40 0 40 18 82 40 82s40-42 40-82c0-22-18-40-40-40z"></path>
<path d="M34 50l-14-12M86 50l14-12"></path>
<path d="M46 90c10 10 18 10 28 0"></path>
<path d="M36 126c12 22 36 22 48 0"></path>
</g>
<g transform="translate(620,60)">
<path d="M60 40c-22 0-40 18-40 40 0 26 18 58 40 58s40-32 40-58c0-22-18-40-40-40z"></path>
<path d="M34 46l-10-16M86 46l10-16"></path>
<path d="M44 82c6 10 26 10 32 0"></path>
<path d="M30 112c10 18 50 18 60 0"></path>
<path d="M24 120c-14 12-18 26-8 40"></path>
</g>
<g transform="translate(120,215)">
<path d="M60 20c-22 0-40 18-40 40 0 22 18 42 40 42s40-20 40-42c0-22-18-40-40-40z"></path>
<path d="M34 26l-12-14M86 26l12-14"></path>
<path d="M42 56c10 8 28 8 36 0"></path>
<path d="M40 88c0 18 40 18 40 0"></path>
</g>
<g transform="translate(380,210)">
<path d="M60 20c-22 0-40 18-40 40 0 22 18 42 40 42s40-20 40-42c0-22-18-40-40-40z"></path>
<path d="M36 26l-10-16M84 26l10-16"></path>
<path d="M44 58c8 10 24 10 32 0"></path>
<path d="M22 88c14 8 72 8 76 0"></path>
</g>
<g transform="translate(640,205)">
<path d="M60 22c-22 0-40 18-40 40 0 22 18 42 40 42s40-20 40-42c0-22-18-40-40-40z"></path>
<path d="M34 30l-14-12M86 30l14-12"></path>
<path d="M42 62c10 8 28 8 36 0"></path>
<path d="M26 90c10 14 56 14 68 0"></path>
<path d="M88 94c22 10 32 26 24 44"></path>
</g>
</g>
<rect className="" filter="url(#grain)" height="360" opacity="0.25" width="900" x="0" y="0"></rect>
</svg>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
<div className="mx-auto max-w-2xl text-center">
<h2 className="font-[Fraunces] text-2xl font-semibold tracking-tight sm:text-3xl">Environment &amp; Details</h2>
<p className="mt-3 font-[Outfit] text-base text-[#5a3b2a]/80 sm:text-lg">
          Backgrounds are designed like a lived-in café—simple shapes, layered props, and warm lighting cues.
        </p>
</div>
<div className="mt-10 grid gap-4 lg:grid-cols-2">
<div className="rounded-2xl bg-white/70 p-4 ring-1 ring-[#5a3b2a]/10 shadow-sm">
<div className="rounded-xl bg-gradient-to-b from-[#ffead8] to-[#ffd5b2] ring-1 ring-[#5a3b2a]/10 p-4">
<div className="flex items-center justify-between">
<p className="font-[Outfit] text-sm font-semibold sm:text-base">Café Interior</p>
<span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[#6b3f27] ring-1 ring-[#5a3b2a]/10">
<i className="h-4 w-4" data-lucide="store"></i>
                Set
              </span>
</div>
<div className="mt-3 aspect-[16/9] rounded-xl bg-[#8a4a2d]/10 ring-1 ring-white/40 overflow-hidden">
<svg className="h-full w-full" viewbox="0 0 800 450">
<defs>
<lineargradient id="bg1" x1="0" x2="0" y1="0" y2="1">
<stop offset="0" stop-color="#ffcc9c"></stop>
<stop offset="1" stop-color="#f07a3b"></stop>
</lineargradient>
</defs>
<rect fill="url(#bg1)" height="450" opacity="0.85" width="800"></rect>
<rect fill="#7a3f22" height="120" opacity="0.55" rx="18" width="720" x="40" y="250"></rect>
<rect fill="#fff2e7" height="110" opacity="0.65" rx="16" width="320" x="60" y="110"></rect>
<rect fill="#ffe2c9" height="140" opacity="0.6" rx="16" width="330" x="410" y="100"></rect>
<rect fill="#ffd7b0" height="60" opacity="0.8" rx="14" width="140" x="90" y="280"></rect>
<rect fill="#ffd7b0" height="60" opacity="0.8" rx="14" width="140" x="250" y="280"></rect>
<rect fill="#ffd7b0" height="60" opacity="0.8" rx="14" width="140" x="410" y="280"></rect>
<rect fill="#ffd7b0" height="60" opacity="0.8" rx="14" width="140" x="570" y="280"></rect>
<circle cx="120" cy="210" fill="#fff7f2" opacity="0.7" r="26"></circle>
<circle cx="170" cy="210" fill="#fff7f2" opacity="0.7" r="22"></circle>
<circle cx="220" cy="210" fill="#fff7f2" opacity="0.7" r="18"></circle>
</svg>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/70 p-4 ring-1 ring-[#5a3b2a]/10 shadow-sm">
<div className="rounded-xl bg-gradient-to-b from-[#fff1e4] to-[#ffe0c8] ring-1 ring-[#5a3b2a]/10 p-4">
<div className="flex items-center justify-between">
<p className="font-[Outfit] text-sm font-semibold sm:text-base">Counter &amp; Menu Wall</p>
<span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[#6b3f27] ring-1 ring-[#5a3b2a]/10">
<i className="h-4 w-4" data-lucide="clipboard-list"></i>
                Detail
              </span>
</div>
<div className="mt-3 aspect-[16/9] rounded-xl bg-[#8a4a2d]/10 ring-1 ring-white/40 overflow-hidden">
<svg className="h-full w-full" viewbox="0 0 800 450">
<defs>
<lineargradient id="bg2" x1="0" x2="1" y1="0" y2="1">
<stop offset="0" stop-color="#ffd7b0"></stop>
<stop offset="1" stop-color="#f4a261"></stop>
</lineargradient>
</defs>
<rect fill="url(#bg2)" height="450" opacity="0.9" width="800"></rect>
<rect fill="#fff7f2" height="220" opacity="0.65" rx="16" width="280" x="70" y="70"></rect>
<rect fill="#7a3f22" height="170" opacity="0.35" rx="16" width="350" x="380" y="90"></rect>
<rect fill="#fff2e7" height="18" opacity="0.55" rx="9" width="270" x="420" y="120"></rect>
<rect fill="#fff2e7" height="18" opacity="0.55" rx="9" width="230" x="420" y="150"></rect>
<rect fill="#fff2e7" height="18" opacity="0.55" rx="9" width="250" x="420" y="180"></rect>
<rect fill="#7a3f22" height="90" opacity="0.55" rx="18" width="640" x="80" y="310"></rect>
<circle cx="200" cy="190" fill="#ffd7b0" opacity="0.75" r="44"></circle>
<circle cx="260" cy="190" fill="#ffd7b0" opacity="0.7" r="36"></circle>
<circle cx="320" cy="190" fill="#ffd7b0" opacity="0.65" r="30"></circle>
</svg>
</div>
</div>
</div>
</div>
<div className="mt-8 grid gap-4 lg:grid-cols-3">
<div className="rounded-2xl bg-white/70 p-5 ring-1 ring-[#5a3b2a]/10 shadow-sm">
<div className="flex items-start gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#f8e3d3] ring-1 ring-[#5a3b2a]/10">
<i className="h-5 w-5 text-[#7a3f22]" data-lucide="sticky-note"></i>
</span>
<div>
<p className="font-[Outfit] text-sm font-semibold sm:text-base">Prop language</p>
<p className="mt-1 font-[Outfit] text-sm text-[#5a3b2a]/75 sm:text-base">Mugs, menus, and signage repeat shapes to unify the set.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/70 p-5 ring-1 ring-[#5a3b2a]/10 shadow-sm">
<div className="flex items-start gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#f8e3d3] ring-1 ring-[#5a3b2a]/10">
<i className="h-5 w-5 text-[#7a3f22]" data-lucide="sun"></i>
</span>
<div>
<p className="font-[Outfit] text-sm font-semibold sm:text-base">Lighting cues</p>
<p className="mt-1 font-[Outfit] text-sm text-[#5a3b2a]/75 sm:text-base">Soft highlights and warm bounce keep the mood gentle.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/70 p-5 ring-1 ring-[#5a3b2a]/10 shadow-sm">
<div className="flex items-start gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#f8e3d3] ring-1 ring-[#5a3b2a]/10">
<i className="h-5 w-5 text-[#7a3f22]" data-lucide="grid-2x2"></i>
</span>
<div>
<p className="font-[Outfit] text-sm font-semibold sm:text-base">Background readability</p>
<p className="mt-1 font-[Outfit] text-sm text-[#5a3b2a]/75 sm:text-base">Value grouping ensures characters pop without harsh contrast.</p>
</div>
</div>
</div>
</div>

<div className="mt-10 rounded-3xl bg-white/70 p-6 ring-1 ring-[#5a3b2a]/10 shadow-sm sm:p-8">
<div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
<div>
<p className="font-[Outfit] text-sm font-semibold sm:text-base">Animation Palette</p>
<p className="mt-1 font-[Outfit] text-sm text-[#5a3b2a]/75 sm:text-base">Warm core tones with a cool accent for balance.</p>
</div>
<span className="inline-flex items-center gap-2 rounded-full bg-[#f8e3d3] px-3 py-1 text-xs font-semibold text-[#6b3f27] ring-1 ring-[#5a3b2a]/10">
<i className="h-4 w-4" data-lucide="droplets"></i>
            Colors
          </span>
</div>
<div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-6">
<div className="rounded-2xl bg-white/80 p-3 ring-1 ring-[#5a3b2a]/10">
<div className="h-10 rounded-xl bg-[#e86b52] ring-1 ring-black/5"></div>
<p className="mt-2 font-[Outfit] text-xs font-medium text-[#5a3b2a]/80">Coral</p>
</div>
<div className="rounded-2xl bg-white/80 p-3 ring-1 ring-[#5a3b2a]/10">
<div className="h-10 rounded-xl bg-[#f29a4a] ring-1 ring-black/5"></div>
<p className="mt-2 font-[Outfit] text-xs font-medium text-[#5a3b2a]/80">Orange</p>
</div>
<div className="rounded-2xl bg-white/80 p-3 ring-1 ring-[#5a3b2a]/10">
<div className="h-10 rounded-xl bg-[#d8b26e] ring-1 ring-black/5"></div>
<p className="mt-2 font-[Outfit] text-xs font-medium text-[#5a3b2a]/80">Sand</p>
</div>
<div className="rounded-2xl bg-white/80 p-3 ring-1 ring-[#5a3b2a]/10">
<div className="h-10 rounded-xl bg-[#7a4a2b] ring-1 ring-black/5"></div>
<p className="mt-2 font-[Outfit] text-xs font-medium text-[#5a3b2a]/80">Cocoa</p>
</div>
<div className="rounded-2xl bg-white/80 p-3 ring-1 ring-[#5a3b2a]/10">
<div className="h-10 rounded-xl bg-[#f4eadf] ring-1 ring-black/5"></div>
<p className="mt-2 font-[Outfit] text-xs font-medium text-[#5a3b2a]/80">Cream</p>
</div>
<div className="rounded-2xl bg-white/80 p-3 ring-1 ring-[#5a3b2a]/10">
<div className="h-10 rounded-xl bg-[#6ea7b8] ring-1 ring-black/5"></div>
<p className="mt-2 font-[Outfit] text-xs font-medium text-[#5a3b2a]/80">Teal</p>
</div>
</div>
<div className="mt-6 rounded-2xl bg-[#fffaf5] p-5 ring-1 ring-[#5a3b2a]/10">
<div className="flex items-start gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#f8e3d3] ring-1 ring-[#5a3b2a]/10">
<i className="h-5 w-5 text-[#7a3f22]" data-lucide="info"></i>
</span>
<div>
<p className="font-[Outfit] text-sm font-semibold sm:text-base">Palette note</p>
<p className="mt-1 font-[Outfit] text-sm text-[#5a3b2a]/75 sm:text-base">
                Warm values carry the atmosphere; cool accents are reserved for small props and UI-like highlights.
              </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-[#f6ede3]/70">
<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
<div className="mx-auto max-w-2xl text-center">
<span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[#6b3f27] ring-1 ring-[#5a3b2a]/10">
<i className="h-4 w-4" data-lucide="book-open"></i>
          Pipeline
        </span>
<h2 className="mt-4 font-[Fraunces] text-2xl font-semibold tracking-tight sm:text-3xl">From Comic to Animation</h2>
<p className="mt-3 font-[Outfit] text-base text-[#5a3b2a]/80 sm:text-lg">
          A clear transformation: panel → rough → final. Each stage preserves intent while improving motion clarity.
        </p>
</div>
<div className="mt-10 grid gap-4 lg:grid-cols-3">
<div className="rounded-2xl bg-white/75 p-5 ring-1 ring-[#5a3b2a]/10 shadow-sm">
<div className="flex items-center justify-between">
<p className="font-[Outfit] text-sm font-semibold sm:text-base">Comic panel</p>
<i className="h-4 w-4 text-[#6b3f27]/70" data-lucide="square"></i>
</div>
<div className="mt-4 aspect-[16/10] rounded-xl bg-gradient-to-b from-[#fff1e4] to-[#ffd7b0] ring-1 ring-[#5a3b2a]/10 overflow-hidden">
<svg className="h-full w-full" viewbox="0 0 800 500">
<rect fill="#fff2e7" height="500" width="800"></rect>
<rect fill="#ffd7b0" height="140" rx="18" width="680" x="60" y="60"></rect>
<rect fill="#f4a261" height="220" opacity="0.65" rx="18" width="320" x="60" y="220"></rect>
<rect fill="#e86b52" height="220" opacity="0.55" rx="18" width="320" x="420" y="220"></rect>
<circle cx="200" cy="330" fill="#fff7f2" opacity="0.85" r="60"></circle>
<circle cx="580" cy="330" fill="#fff7f2" opacity="0.85" r="60"></circle>
</svg>
</div>
<p className="mt-3 font-[Outfit] text-sm text-[#5a3b2a]/75 sm:text-base">Frames the joke and the main staging.</p>
</div>
<div className="rounded-2xl bg-white/75 p-5 ring-1 ring-[#5a3b2a]/10 shadow-sm">
<div className="flex items-center justify-between">
<p className="font-[Outfit] text-sm font-semibold sm:text-base">Rough motion</p>
<i className="h-4 w-4 text-[#6b3f27]/70" data-lucide="scan-line"></i>
</div>
<div className="mt-4 aspect-[16/10] rounded-xl bg-gradient-to-b from-[#fffaf5] to-[#ffe2d6] ring-1 ring-[#5a3b2a]/10 overflow-hidden">
<svg className="h-full w-full" viewbox="0 0 800 500">
<rect className="" fill="#fffaf5" height="500" width="800"></rect>
<g fill="none" opacity="0.9" stroke="#6b3f27" strokeWidth="2">
<path d="M150 170c70-70 180-70 250 0"></path>
<path d="M165 170l-25-30M385 170l25-30"></path>
<path d="M180 250c40 40 170 40 210 0"></path>
<path d="M510 190c60-60 150-60 210 0"></path>
<path d="M520 190l-20-28M700 190l20-28"></path>
<path d="M540 260c40 34 120 34 160 0"></path>
<path d="M110 340c110 60 240 60 350 0"></path>
<path d="M440 360c80 40 220 40 300 0"></path>
</g>
</svg>
</div>
<p className="mt-3 font-[Outfit] text-sm text-[#5a3b2a]/75 sm:text-base">Pose-to-pose timing and acting clarity.</p>
</div>
<div className="rounded-2xl bg-white/75 p-5 ring-1 ring-[#5a3b2a]/10 shadow-sm">
<div className="flex items-center justify-between">
<p className="font-[Outfit] text-sm font-semibold sm:text-base">Final shot</p>
<i className="h-4 w-4 text-[#6b3f27]/70" data-lucide="clapperboard"></i>
</div>
<div className="mt-4 aspect-[16/10] rounded-xl bg-gradient-to-b from-[#ffe2c9] to-[#f29a4a] ring-1 ring-[#5a3b2a]/10 overflow-hidden">
<svg className="h-full w-full" viewbox="0 0 800 500">
<defs>
<lineargradient id="final" x1="0" x2="0" y1="0" y2="1">
<stop offset="0" stop-color="#ffe2c9"></stop>
<stop offset="1" stop-color="#f07a3b"></stop>
</lineargradient>
</defs>
<rect fill="url(#final)" height="500" width="800"></rect>
<rect fill="#7a3f22" height="140" opacity="0.28" rx="18" width="680" x="60" y="70"></rect>
<rect fill="#7a3f22" height="200" opacity="0.35" rx="22" width="680" x="60" y="240"></rect>
<circle cx="250" cy="335" fill="#fff7f2" opacity="0.85" r="70"></circle>
<circle cx="560" cy="335" fill="#fff7f2" opacity="0.85" r="70"></circle>
<circle cx="250" cy="335" fill="#ffd7b0" opacity="0.75" r="22"></circle>
<circle cx="560" cy="335" fill="#ffd7b0" opacity="0.75" r="22"></circle>
</svg>
</div>
<p className="mt-3 font-[Outfit] text-sm text-[#5a3b2a]/75 sm:text-base">Color, polish, and compositing for cohesion.</p>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden" id="results">
<div className="absolute inset-0 bg-gradient-to-b from-[#6b3a22] to-[#3b2218]"></div>
<div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
<div className="mx-auto max-w-2xl text-center text-white">
<span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/85 ring-1 ring-white/15">
<i className="h-4 w-4" data-lucide="trending-up"></i>
          Outcome
        </span>
<h2 className="mt-4 font-[Fraunces] text-2xl font-semibold tracking-tight sm:text-3xl">Results That Travel</h2>
<p className="mt-3 font-[Outfit] text-base text-white/75 sm:text-lg">
          Shareable clips, consistent visuals, and a clear story beat structure—built to work across platforms.
        </p>
</div>
<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
<div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur-sm">
<div className="flex items-center justify-between">
<p className="font-[Outfit] text-sm font-semibold text-white/90 sm:text-base">Views</p>
<i className="h-4 w-4 text-white/70" data-lucide="eye"></i>
</div>
<p className="mt-4 font-[Fraunces] text-2xl font-semibold tracking-tight text-white sm:text-3xl">87.9K</p>
<p className="mt-1 font-[Outfit] text-sm text-white/70 sm:text-base">Organic reach</p>
</div>
<div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur-sm">
<div className="flex items-center justify-between">
<p className="font-[Outfit] text-sm font-semibold text-white/90 sm:text-base">Likes</p>
<i className="h-4 w-4 text-white/70" data-lucide="heart"></i>
</div>
<p className="mt-4 font-[Fraunces] text-2xl font-semibold tracking-tight text-white sm:text-3xl">9,420</p>
<p className="mt-1 font-[Outfit] text-sm text-white/70 sm:text-base">Positive response</p>
</div>
<div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur-sm">
<div className="flex items-center justify-between">
<p className="font-[Outfit] text-sm font-semibold text-white/90 sm:text-base">Saves</p>
<i className="h-4 w-4 text-white/70" data-lucide="bookmark"></i>
</div>
<p className="mt-4 font-[Fraunces] text-2xl font-semibold tracking-tight text-white sm:text-3xl">83</p>
<p className="mt-1 font-[Outfit] text-sm text-white/70 sm:text-base">High intent</p>
</div>
<div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur-sm">
<div className="flex items-center justify-between">
<p className="font-[Outfit] text-sm font-semibold text-white/90 sm:text-base">Shares</p>
<i className="h-4 w-4 text-white/70" data-lucide="share-2"></i>
</div>
<p className="mt-4 font-[Fraunces] text-2xl font-semibold tracking-tight text-white sm:text-3xl">117</p>
<p className="mt-1 font-[Outfit] text-sm text-white/70 sm:text-base">Boosted discovery</p>
</div>
</div>
<div className="mx-auto mt-8 max-w-3xl rounded-3xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur-sm sm:p-8">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div className="text-white">
<p className="font-[Outfit] text-sm font-semibold text-white/90 sm:text-base">Why it worked</p>
<p className="mt-1 font-[Outfit] text-sm text-white/70 sm:text-base">
              Clean staging, warm palette consistency, and readable acting beats at every cut.
            </p>
</div>
<div className="flex items-center gap-3 text-white/75">
<div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15">
<i className="h-4 w-4" data-lucide="check-circle-2"></i>
<span className="font-[Outfit] text-sm sm:text-base">Cohesion</span>
</div>
<div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15">
<i className="h-4 w-4" data-lucide="check-circle-2"></i>
<span className="font-[Outfit] text-sm sm:text-base">Clarity</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="watch">
<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
<div className="mx-auto max-w-2xl text-center">
<span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[#6b3f27] ring-1 ring-[#5a3b2a]/10">
<i className="h-4 w-4" data-lucide="video"></i>
          Final deliverable
        </span>
<h2 className="mt-4 font-[Fraunces] text-2xl font-semibold tracking-tight sm:text-3xl">Watch the Animation</h2>
<p className="mt-3 font-[Outfit] text-base text-[#5a3b2a]/80 sm:text-lg">
          A cozy short built from the pipeline above—ready for sharing and iteration.
        </p>
</div>
<div className="mt-10 rounded-3xl bg-white/70 p-4 ring-1 ring-[#5a3b2a]/10 shadow-sm sm:p-6">
<div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#f5e9dd] to-[#ead7c3] ring-1 ring-[#5a3b2a]/10">
<div className="absolute inset-0 opacity-20">
<div className="absolute -top-20 left-10 h-56 w-56 rounded-full bg-[#f29a4a]/40 blur-3xl"></div>
<div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-[#6ea7b8]/25 blur-3xl"></div>
</div>
<div className="relative flex min-h-72 flex-col items-center justify-center px-6 py-12 text-center sm:min-h-80">
<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/70 ring-1 ring-[#5a3b2a]/10 shadow-sm">
<i className="h-8 w-8 text-[#7a3f22]" data-lucide="clapperboard"></i>
</div>
<p className="mt-4 font-[Outfit] text-sm font-semibold sm:text-base">Video placeholder</p>
<p className="mt-1 font-[Outfit] text-sm text-[#5a3b2a]/70 sm:text-base">
              Replace this block with an embedded player when ready.
            </p>
<div className="mt-6 flex flex-col gap-2 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7a3f22] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#6b351d]" href="#">
<i className="h-4 w-4" data-lucide="play"></i>
                Play
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/60 px-5 py-2.5 text-sm font-semibold text-[#4a2a1a] ring-1 ring-[#5a3b2a]/10 hover:bg-white/75" href="#results">
<i className="h-4 w-4" data-lucide="bar-chart-3"></i>
                See results
              </a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-[#6b3a22] to-[#3b2218]"></div>
<div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
<div className="mx-auto max-w-2xl text-center text-white">
<p className="font-[Outfit] text-xs font-semibold text-white/70">CREDITS</p>
<h3 className="mt-3 font-[Fraunces] text-xl font-semibold tracking-tight sm:text-2xl">Credits</h3>
</div>
<div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
<div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur-sm">
<p className="font-[Outfit] text-sm font-semibold text-white/90 sm:text-base">Direction</p>
<p className="mt-1 font-[Outfit] text-sm text-white/70 sm:text-base">Story + timing</p>
</div>
<div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur-sm">
<p className="font-[Outfit] text-sm font-semibold text-white/90 sm:text-base">Art</p>
<p className="mt-1 font-[Outfit] text-sm text-white/70 sm:text-base">Characters + BG</p>
</div>
<div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur-sm">
<p className="font-[Outfit] text-sm font-semibold text-white/90 sm:text-base">Animation</p>
<p className="mt-1 font-[Outfit] text-sm text-white/70 sm:text-base">Cleanup + comp</p>
</div>
</div>
<div className="mx-auto mt-12 max-w-2xl text-center text-white">
<h3 className="font-[Fraunces] text-2xl font-semibold tracking-tight sm:text-3xl">Ready to start your animated project?</h3>
<p className="mt-3 font-[Outfit] text-base text-white/75 sm:text-lg">
          Let’s build something cozy, readable, and shareable—from concept to final cut.
        </p>
<div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f3c19a] px-5 py-2.5 text-sm font-semibold text-[#4a2a1a] shadow-sm hover:bg-[#f7cfad]" href="#">
<i className="h-4 w-4" data-lucide="send"></i>
            Get in touch
          </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15" href="#watch">
<i className="h-4 w-4" data-lucide="play"></i>
            Watch again
          </a>
</div>
<div className="mt-10 border-t border-white/10 pt-6">
<p className="font-[Outfit] text-xs font-medium tracking-[0.2em] text-white/55">ESSENCECARTOON</p>
</div>
</div>
</div>
</footer>


    </>
  );
}
