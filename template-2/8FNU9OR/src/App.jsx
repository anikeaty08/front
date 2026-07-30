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
      

<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

<div className="absolute inset-0 opacity-[0.035]" style={{backgroundImage: `url('https://images.unsplash.com/photo-1505682499293-233fb1417547?q=80&w=1200&auto=format&fit=crop')`, backgroundSize: `cover`, backgroundPosition: `center`}}></div>

<div className="absolute -top-1/2 -left-1/3 w-[120vw] h-[120vw] rounded-full blur-3xl opacity-20 mix-blend-screen animate-spin" style={{background: `conic-gradient(from 90deg, rgba(168,85,247,.2), rgba(59,130,246,.15), rgba(236,72,153,.18), transparent 60%)`, animationDuration: `40s`}}></div>
<div className="absolute -bottom-1/2 -right-1/4 w-[100vw] h-[100vw] rounded-full blur-2xl opacity-25 mix-blend-screen animate-spin" style={{background: `conic-gradient(from 0deg, rgba(59,130,246,.18), rgba(14,165,233,.15), rgba(217,70,239,.18), transparent 55%)`, animationDuration: `55s`, animationDirection: `reverse`}}></div>
<div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[75vw] h-[75vw] rounded-full blur-3xl opacity-15 mix-blend-screen animate-spin" style={{background: `conic-gradient(from 210deg, rgba(236,72,153,.18), rgba(147,51,234,.18), rgba(56,189,248,.15), transparent 60%)`, animationDuration: `70s`}}></div>

<div className="absolute inset-0" style={{background: `radial-gradient(1200px 600px at 50% 20%, rgba(255,255,255,0.08), rgba(0,0,0,0) 55%), radial-gradient(800px 500px at 80% 80%, rgba(217,70,239,0.06), rgba(0,0,0,0) 60%)`}}></div>

<div className="absolute bottom-0 left-0 right-0 h-48 opacity-25" style={{background: `repeating-linear-gradient(90deg, rgba(147,51,234,0.15) 0px, rgba(56,189,248,0.15) 2px, transparent 2px, transparent 80px)`, maskImage: `linear-gradient(to top, black, transparent)`}}></div>
</div>

<header className="fixed top-0 inset-x-0 z-20 backdrop-blur-xl">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex items-center justify-between h-16 border-b border-white/10">
<a className="flex items-center gap-2 group" href="#">
<div className="relative flex items-center justify-center w-9 h-9 rounded-md bg-white/5 ring-1 ring-white/10">
<span className="text-xs font-semibold tracking-tight font-geist">PR</span>
<span className="absolute inset-0 rounded-md blur-md opacity-40" style={{background: `radial-gradient(45px 45px at 50% 50%, rgba(168,85,247,.35), rgba(59,130,246,.0))`}}></span>
</div>
<span className="text-sm md:text-base font-semibold tracking-tight font-geist">Prism Studio</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
<a className="hover:text-white transition-colors font-geist" href="#">Home</a>
<a className="hover:text-white transition-colors font-geist" href="#process">Process</a>
<a className="hover:text-white transition-colors font-geist" href="#projects">Projects</a>
<a className="hover:text-white transition-colors font-geist" href="#footer">Contact</a>
</nav>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium tracking-tight text-white ring-1 ring-white/15 hover:ring-white/30 transition-all hover:-translate-y-0.5" href="#projects" style={{background: `linear-gradient(135deg, rgba(168,85,247,.35), rgba(56,189,248,.35))`, boxShadow: `0 0 24px rgba(147,51,234,.28), inset 0 0 0 1px rgba(255,255,255,.05)`}}>
<span className="font-geist">Explore</span>

<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 4.5L21 12l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
</div>
</div>
</header>

<section className="relative min-h-[100svh] flex items-center" id="hero">

<div className="mx-auto max-w-7xl px-6 lg:px-8 pt-28 md:pt-32 lg:pt-40 pb-24">
<div className="max-w-3xl relative mx text-center" id="aura-emev6skoq">

<div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-visible">
<div className="absolute -top-24 -left-32 w-[75vw] h-[75vw] rounded-full blur-3xl opacity-30 mix-blend-screen" style={{background: `conic-gradient(from 90deg, rgba(168,85,247,.25), rgba(59,130,246,.18), rgba(236,72,153,.22), transparent 60%)`}}></div>
<div className="absolute -bottom-40 -right-24 w-[70vw] h-[70vw] rounded-full blur-3xl opacity-25 mix-blend-screen" style={{background: `conic-gradient(from 0deg, rgba(59,130,246,.22), rgba(14,165,233,.18), rgba(217,70,239,.22), transparent 55%)`}}></div>
<div className="absolute inset-0" style={{background: `radial-gradient(900px 400px at 50% 18%, rgba(255,255,255,0.06), rgba(0,0,0,0) 55%)`}}></div>
<div className="absolute inset-x-0 -bottom-16 h-32 opacity-20" style={{background: `repeating-linear-gradient(90deg, rgba(147,51,234,0.18) 0px, rgba(56,189,248,0.18) 2px, transparent 2px, transparent 80px)`, maskImage: `linear-gradient(to top, black, transparent)`}}></div>
</div>
<div className="inline-flex items-center gap-2 rounded-full px- py-1.5 text-[11px] font-medium text-white/80 ring-1 ring-white/15 mb-6 font-geist" style={{background: `linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))`}}>

<svg className="w-3.5 h-3.5 text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www3.org/2000/svg">
<path d="M12 3l1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3zM19 14l.6 1.9L21.5 17l-1.9.6L19 19.5l-.6-1.9L16.5 17l1.9-.6.6-1.9zM5 14l.6 1.9L7.5 17l-1.9.6L5 19.5l-.6-1.9L25 17l1.9-.6.6-1.9z" strokeLinecap="round" strokeLinejoin=""></path>
</svg>
    A creative studio for tomorrow
  </div>
<h1 className="text-4xl sm:text-5xl lg:text-6 tracking-tight leading-[1.05] font-playfair font-medium" style={{}}>
    Designing Ideas That Shine Through
  </h1>
<p className="mt-5 text-base sm:text-lg leading-relaxed text-white/70 max-w-2xl mx-auto font-geist">
    We are a creative design studio crafting digital experiences and visuals that inspire.
  </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
<a className="group relative inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold tracking-tight text-white transition-all:-translate-y-0.5 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-400" href="#projects" style={{background: `linear-gradient(135deg, rgba(168,85,247,1), rgba(56,189,248,1))`, boxShadow: `0 10px 35px rgba(147,51,234,.35), 0 2px 10px rgba(56,189,248,.25`}}>
<span className="relative z-10 font-geist">Explore Our Work</span>
<span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" style={{background: `radial-gradient(120px 120px at 30% 30%, rgba(255,255,255,.25), rgba(255,255,255,0))`}}></span>
</a>
<a className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold tracking-tight text-white/90 ring-1 ring-white/15 hover:text-white hover:ring-white/30 transition-all hover:-translate-y-0.5 font-geist" href="#footer" style={{background: `rgba(255,255,255,0.02)`}}>
      Contact Us
    </a>
</div>
</div>

<div className="mt-16 md:mt-20 relative">
<div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">

<div className="col-span-2 h-36 md:h-44 rounded-xl ring-1 ring-white/10 bg-white/5 backdrop-blur-md overflow-hidden relative">
<div className="absolute inset-0 opacity-40 mix-blend-screen blur-xl" style={{background: `linear-gradient(90deg, rgba(168,85,247,.35), rgba(59,130,246,.25), rgba(236,72,153,.35))`}}></div>
<div className="absolute inset-0" style={{backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255,255,255,.06) 0, transparent 50%)`}}></div>
</div>
<div className="h-36 md:h-44 rounded-xl ring-1 ring-white/10 bg-white/5 backdrop-blur-md relative overflow-hidden">
<div className="absolute inset-0 opacity-50 mix-blend-screen blur-xl animate-spin" style={{background: `conic-gradient(from 180deg, rgba(56,189,248,.4), rgba(217,70,239,.3), transparent 70%)`, animationDuration: `30s`}}></div>
</div>
<div className="h-36 md:h-44 rounded-xl ring-1 ring-white/10 bg-white/5 backdrop-blur-md relative overflow-hidden">
<div className="absolute inset-0 opacity-50 mix-blend-screen blur-xl animate-spin" style={{background: `conic-gradient(from 0deg, rgba(236,72,153,.35), rgba(59,130,246,.35), transparent 70%)`, animationDuration: `45s`, animationDirection: `reverse`}}></div>
</div>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<section className="relative py-20 md:py-28" id="process">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-playfair font-medium" style={{}}>Our Design Process</h2>
<p className="mt-2 text-white/60 max-w-xl font-geist" style={{}}>A sleek approach that transforms insight into impact.</p>
</div>
<div className="hidden md:flex items-center gap-3 text-xs text-white/60">

<span className="inline-flex items-center gap-2 font-geist">
<span className="w-2.5 h-2.5 rounded-full" style={{background: `radial-gradient(circle at 30% 30%, rgba(168,85,247,.9), rgba(168,85,247,.2))`}}></span>
            Prism accent
          </span>
</div>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<div className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-md p-6">
<div className="absolute -top-20 -right-20 w-56 h-56 rounded-full blur-3xl opacity-30 mix-blend-screen" style={{background: `radial-gradient(closest-side, rgba(56,189,248,.45), rgba(56,189,248,0))`}}></div>
<div className="flex items-start gap-4">
<div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">

<svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="7"></circle>
<path d="M21 21l-4.3-4.3" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="absolute inset-0 rounded-xl opacity-30 blur-md" style={{background: `radial-gradient(30px 30px at 50% 50%, rgba(56,189,248,.5), rgba(56,189,248,0))`}}></span>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight font-geist">Discover</h3>
<p className="text-sm text-white/70 mt-1 font-geist">Research & Understand</p>
</div>
</div>
<p className="mt-4 text-sm leading-relaxed text-white/70 font-geist">We dig deep to uncover insights, audience needs, and opportunities that guide the direction.</p>
<div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-md p-6">
<div className="absolute -top-20 -left-16 w-56 h-56 rounded-full blur-3xl opacity-30 mix-blend-screen" style={{background: `radial-gradient(closest-side, rgba(168,85,247,.45), rgba(168,85,247,0))`}}></div>
<div className="flex items-start gap-4">
<div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">

<svg className="w-6 h-6 text-fuchsia-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18h6" strokeLinecap="round"></path>
<path d="M10 22h4" strokeLinecap="round"></path>
<path d="M12 2a7 7 0 0 0-4 12c.5.5 1 1.5 1 2h6c0-.5.5-1.5 1-2A7 7 0 0 0 12 2z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="absolute inset-0 rounded-xl opacity-30 blur-md" style={{background: `radial-gradient(30px 30px at 50% 50%, rgba(168,85,247,.5), rgba(168,85,247,0))`}}></span>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight font-geist">Ideate</h3>
<p className="text-sm text-white/70 mt-1 font-geist">Concepts & Sketches</p>
</div>
</div>
<p className="mt-4 text-sm leading-relaxed text-white/70 font-geist">We explore directions quickly, framing distinct paths through sketches, moodboards, and narratives.</p>
<div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-md p-6">
<div className="absolute -bottom-20 -right-16 w-56 h-56 rounded-full blur-3xl opacity-30 mix-blend-screen" style={{background: `radial-gradient(closest-side, rgba(236,72,153,.45), rgba(236,72,153,0))`}}></div>
<div className="flex items-start gap-4">
<div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">

<svg className="w-6 h-6 text-pink-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19l7-7-5-5-7 7 5 5z" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M2 22l7-7" strokeLinecap="round"></path>
<circle cx="17" cy="7" r="1"></circle>
</svg>
<span className="absolute inset-0 rounded-xl opacity-30 blur-md" style={{background: `radial-gradient(30px 30px at 50% 50%, rgba(236,72,153,.5), rgba(236,72,153,0))`}}></span>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight font-geist">Design</h3>
<p className="text-sm text-white/70 mt-1 font-geist">Visuals & Prototypes</p>
</div>
</div>
<p className="mt-4 text-sm leading-relaxed text-white/70 font-geist">High-fidelity visuals come to life with interactive prototypes, micro-interactions, and system rules.</p>
<div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-md p-6">
<div className="absolute -bottom-24 -left-16 w-56 h-56 rounded-full blur-3xl opacity-30 mix-blend-screen" style={{background: `radial-gradient(closest-side, rgba(59,130,246,.45), rgba(59,130,246,0))`}}></div>
<div className="flex items-start gap-4">
<div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">

<svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 2L11 13" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M22 2L15 22l-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="absolute inset-0 rounded-xl opacity-30 blur-md" style={{background: `radial-gradient(30px 30px at 50% 50%, rgba(59,130,246,.5), rgba(59,130,246,0))`}}></span>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight font-geist">Deliver</h3>
<p className="text-sm text-white/70 mt-1 font-geist">Final Output & Support</p>
</div>
</div>
<p className="mt-4 text-sm leading-relaxed text-white/70 font-geist">We ship polished deliverables with documentation, guidance, and ongoing support.</p>
<div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<section className="relative py-20 md:py-28" id="projects">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl tracking-tight font-playfair font-medium" style={{}}>Selected Works</h2>
<p className="mt-2 text-white/60 font-geist" style={{}}>A glimpse into our creative journey</p>
</div>

<div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">

<article className="mb-6 break-inside-avoid group relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur-md">
<div className="relative w-full">
<img alt="Project • Neon Architecture" className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen" style={{background: `linear-gradient(135deg, rgba(168,85,247,.35), rgba(56,189,248,.35))`}}></div>
</div>
<div className="absolute inset-x-0 bottom-0 p-4">
<div className="rounded-lg px-3 py-2 text-sm font-medium tracking-tight text-white/95 ring-1 ring-white/15 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-fit font-geist">
              Neon Architecture
            </div>
</div>
</article>

<article className="mb-6 break-inside-avoid group relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur-md">
<div className="relative w-full">
<img alt="Project • Portrait Aesthetic" className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1400&auto=format&fit=crop" />
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen" style={{background: `linear-gradient(135deg, rgba(236,72,153,.35), rgba(59,130,246,.35))`}}></div>
</div>
<div className="absolute inset-x-0 bottom-0 p-4">
<div className="rounded-lg px-3 py-2 text-sm font-medium tracking-tight text-white/95 ring-1 ring-white/15 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-fit font-geist">
              Portrait Aesthetic
            </div>
</div>
</article>

<article className="mb-6 break-inside-avoid group relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur-md">
<div className="relative w-full">
<img alt="Project • 3D Prism Forms" className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen" style={{background: `linear-gradient(135deg, rgba(56,189,248,.35), rgba(168,85,247,.35))`}}></div>
</div>
<div className="absolute inset-x-0 bottom-0 p-4">
<div className="rounded-lg px-3 py-2 text-sm font-medium tracking-tight text-white/95 ring-1 ring-white/15 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-fit font-geist">
              3D Prism Forms
            </div>
</div>
</article>

<article className="mb-6 break-inside-avoid group relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur-md">
<div className="relative w-full">
<img alt="Project • Night City Campaign" className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen" style={{background: `linear-gradient(135deg, rgba(217,70,239,.35), rgba(56,189,248,.35))`}}></div>
</div>
<div className="absolute inset-x-0 bottom-0 p-4">
<div className="rounded-lg px-3 py-2 text-sm font-medium tracking-tight text-white/95 ring-1 ring-white/15 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-fit font-geist">
              Night City Campaign
            </div>
</div>
</article>

<article className="mb-6 break-inside-avoid group relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur-md">
<div className="relative w-full">
<img alt="Project • Motion Exploration" className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop" />
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen" style={{background: `linear-gradient(135deg, rgba(236,72,153,.35), rgba(168,85,247,.35))`}}></div>
</div>
<div className="absolute inset-x-0 bottom-0 p-4">
<div className="rounded-lg px-3 py-2 text-sm font-medium tracking-tight text-white/95 ring-1 ring-white/15 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-fit font-geist">
              Motion Exploration
            </div>
</div>
</article>

<article className="mb-6 break-inside-avoid group relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur-md">
<div className="relative w-full">
<img alt="Project • Brand Atmospheres" className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen" style={{background: `linear-gradient(135deg, rgba(56,189,248,.35), rgba(217,70,239,.35))`}}></div>
</div>
<div className="absolute inset-x-0 bottom-0 p-4">
<div className="rounded-lg px-3 py-2 text-sm font-medium tracking-tight text-white/95 ring-1 ring-white/15 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-fit font-geist">
              Brand Atmospheres
            </div>
</div>
</article>
</div>

<div className="mt-12 flex items-center justify-center">
<a className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold tracking-tight text-white ring-1 ring-white/15 hover:ring-white/30 transition-all hover:-translate-y-0.5 font-geist" href="#footer" style={{background: `rgba(255,255,255,0.03)`}}>
          Work with us
          
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 2L11 13" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M22 2L15 22l-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
</div>
</div>
</section>

<footer className="relative pt-20 pb-10" id="footer">

<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="absolute inset-x-0 -top-10 h-32 opacity-30" style={{background: `repeating-linear-gradient(90deg, rgba(168,85,247,.14) 0px, rgba(56,189,248,.14) 2px, transparent 2px, transparent 80px)`, maskImage: `linear-gradient(to bottom, black 20%, transparent)`}}></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-2">
<a className="inline-flex items-center gap-3" href="#">
<div className="relative flex items-center justify-center w-10 h-10 rounded-md bg-white/5 ring-1 ring-white/10">
<span className="text-sm font-semibold tracking-tight font-geist">PR</span>
<span className="absolute inset-0 rounded-md blur-md opacity-40" style={{background: `radial-gradient(45px 45px at 50% 50%, rgba(147,51,234,.4), rgba(56,189,248,.0))`}}></span>
</div>
<div className="text-base font-semibold tracking-tight font-geist">Prism Studio</div>
</a>
<p className="mt-4 text-sm text-white/60 max-w-md font-geist">We partner with ambitious teams to build brands, products, and visuals that stand out in luminous ways.</p>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight font-geist">Quick Links</h4>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li><a className="hover:text-white transition-colors font-geist" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#process">Process</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#projects">Projects</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#footer">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight font-geist">Follow</h4>
<div className="mt-4 flex items-center gap-3">

<a aria-label="Behance" className="group inline-flex items-center justify-center w-9 h-9 rounded-md ring-1 ring-white/10 bg-white/5 hover:ring-white/30 transition" href="#">
<svg className="w-5 h-5 text-white/80 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 9h4a3 3 0 0 1 0 6H4V7h4" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M14 12.5h6a3 3 0 1 1-3 3" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M14 9h6" strokeLinecap="round"></path>
</svg>
</a>

<a aria-label="Dribbble" className="group inline-flex items-center justify-center w-9 h-9 rounded-md ring-1 ring-white/10 bg-white/5 hover:ring-white/30 transition" href="#">
<svg className="w-5 h-5 text-white/80 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="9"></circle>
<path d="M2.1 12h19.8M6.3 4.2c5.4 4.2 8.7 9.3 9.9 15.6M4.2 17.7c5.1-2.1 10.2-2.1 15.6 0"></path>
</svg>
</a>

<a aria-label="LinkedIn" className="group inline-flex items-center justify-center w-9 h-9 rounded-md ring-1 ring-white/10 bg-white/5 hover:ring-white/30 transition" href="#">
<svg className="w-5 h-5 text-white/80 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>

<a aria-label="Instagram" className="group inline-flex items-center justify-center w-9 h-9 rounded-md ring-1 ring-white/10 bg-white/5 hover:ring-white/30 transition" href="#">
<svg className="w-5 h-5 text-white/80 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="5" width="18" x="3" y="3"></rect>
<circle cx="12" cy="12" r="3.5"></circle>
<circle cx="17.5" cy="6.5" r="1"></circle>
</svg>
</a>
</div>
</div>
</div>
<div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="mt-6 flex items-center justify-between text-xs text-white/50">
<span className="font-geist">© 2025 Prism Studio. All Rights Reserved.</span>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1 font-geist">

<svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
            Privacy
          </span>
<span className="inline-flex items-center gap-1 font-geist">

<svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>
            EN
          </span>
</div>
</div>
</div>
</footer>

    </>
  );
}
