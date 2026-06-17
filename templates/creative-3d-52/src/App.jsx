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



      if (window.lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons({
          attrs: { 'stroke-width': 1.5 }
        });
      }
    
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
      

<header className="relative">
<div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]">
<div className="absolute inset-x-0 top-[-40%] h-[120vh] bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(120,119,198,0.20)_0%,rgba(76,76,135,0.10)_20%,rgba(15,15,35,0)_70%)]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-6">
<nav className="flex items-center justify-between">
<a aria-label="Home" className="inline-flex items-center gap-2" href="#">
<div className="h-8 w-8 rounded-md grid place-items-center border border-white/10 bg-white/[0.03] backdrop-blur" style={{letterSpacing: '-0.02em'}}>
<span className="text-xs font-medium" style={{fontFamily: '\'Inter\', system-ui, ui-sans-serif'}}>AK</span>
</div>
<span className="text-sm text-zinc-400">Alex Knight</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-zinc-300 text-sm hover:text-white transition-colors" href="#work">Work</a>
<a className="text-zinc-300 text-sm hover:text-white transition-colors" href="#about">About</a>
<a className="text-zinc-300 text-sm hover:text-white transition-colors" href="#contact">Contact</a>
<a className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/[0.03] transition-colors" href="#work">
<svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
<span className="text-sm">View Reel</span>
</a>
</div>
<button aria-label="Open menu" className="md:hidden inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/[0.03] transition-colors">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</nav>
</div>
</header>

<section className="relative">
<div className="md:pt-28 md:pb-16 max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-10 pl-6">
<div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
<div className="">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-zinc-300">
<span className="inline-flex size-1.5 rounded-full bg-emerald-400"></span>
              Available for 2025 projects
            </div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif'}}>
              Crafting immersive 3D visuals and interactive experiences.
            </h1>
<p className="mt-4 text-zinc-400 leading-relaxed">
              Designer &amp; creative coder blending real-time 3D, motion, and product thinking.
              I turn complex ideas into elegant visuals and delightful interactions.
            </p>
<div className="mt-8 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 bg-white text-zinc-900 hover:bg-zinc-100 transition-colors" href="#work">
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
<span className="text-sm font-medium">Explore Work</span>
</a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 border border-white/10 hover:border-white/20 hover:bg-white/[0.03] transition-colors" href="#contact">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="text-sm">Get in touch</span>
</a>
</div>
<div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
<div className="text-2xl font-semibold tracking-tight" style={{fontFamily: '\'Space Grotesk\''}}>48+</div>
<div className="text-xs text-zinc-400 mt-1">Projects shipped</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
<div className="text-2xl font-semibold tracking-tight" style={{fontFamily: '\'Space Grotesk\''}}>12y</div>
<div className="text-xs text-zinc-400 mt-1">Experience</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
<div className="text-2xl font-semibold tracking-tight" style={{fontFamily: '\'Space Grotesk\''}}>4.9</div>
<div className="text-xs text-zinc-400 mt-1">Client rating</div>
</div>
</div>
</div>

<div className="relative grid place-items-center">
<div className="absolute inset-0 -z-10 blur-3xl opacity-60">
<div className="mx-auto h-72 w-72 rounded-full bg-[conic-gradient(at_50%_50%,#7c3aed_0deg,#10b981_120deg,#06b6d4_240deg,#7c3aed_360deg)]"></div>
</div>
<div className="relative w-72 h-72 transform-gpu" style={{perspective: '1200px'}}>
<div className="absolute inset-0 animate-spin" style={{transformStyle: 'preserve-3d', animationDuration: '18s', animationTimingFunction: 'linear'}}>

<div className="absolute inset-0 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm shadow-[0_0_80px_rgba(124,58,237,0.15)]" style={{transform: 'translateZ(144px)'}}>
<div className="grid place-items-center w-full h-full">
<span className="text-sm text-zinc-300">Front</span>
</div>
</div>

<div className="absolute inset-0 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm" style={{transform: 'rotateY(180deg) translateZ(144px)'}}></div>

<div className="absolute inset-0 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm" style={{transform: 'rotateY(90deg) translateZ(144px)'}}></div>

<div className="absolute inset-0 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm" style={{transform: 'rotateY(-90deg) translateZ(144px)'}}></div>

<div className="absolute inset-0 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm" style={{transform: 'rotateX(90deg) translateZ(144px)'}}></div>

<div className="absolute inset-0 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm" style={{transform: 'rotateX(-90deg) translateZ(144px)'}}></div>
</div>

<div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/60 px-3 py-1.5 backdrop-blur">
<i className="w-4 h-4" data-lucide="cube"></i>
<span className="text-xs text-zinc-300">Real-time 3D</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
</section>

<section className="relative" id="work">
<div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{fontFamily: '\'Space Grotesk\''}}>
              Selected Work
            </h2>
<p className="text-zinc-400 text-sm mt-1.5">3D, motion, and interactive art direction</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors" href="#">
<span>All projects</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group relative rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/20 transition-colors" href="#" style={{transformStyle: 'preserve-3d'}}>
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="3D motion — kinetic sculpture" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
</div>
<div className="p-4">
<div className="flex items-center gap-2 text-[11px] text-zinc-400">
<span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2 py-0.5">3D</span>
<span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2 py-0.5">Motion</span>
</div>
<div className="mt-2 flex items-start justify-between">
<h3 className="text-lg font-medium tracking-tight">Kinetic Sculpture Visualizer</h3>
<svg className="lucide lucide-external-link w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</div>
<p className="text-sm text-zinc-400 mt-1.5">
                Procedural animation system with shader-driven lighting.
              </p>
</div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{transform: 'translateZ(30px)'}}></div>
</a>

<a className="group relative rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/20 transition-colors" href="#">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Interactive web experience" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" src="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
</div>
<div className="p-4">
<div className="flex items-center gap-2 text-[11px] text-zinc-400">
<span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2 py-0.5">WebGL</span>
<span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2 py-0.5">Interactive</span>
</div>
<div className="mt-2 flex items-start justify-between">
<h3 className="text-lg font-medium tracking-tight">Fluid Navigation Experiment</h3>
<svg className="lucide lucide-external-link w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</div>
<p className="text-sm text-zinc-400 mt-1.5">
                Scroll-driven morph targets with tactile micro-interactions.
              </p>
</div>
</a>

<a className="group relative rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/20 transition-colors" href="#">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Brand CG film" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
</div>
<div className="p-4">
<div className="flex items-center gap-2 text-[11px] text-zinc-400">
<span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2 py-0.5">CG</span>
<span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2 py-0.5">Film</span>
</div>
<div className="mt-2 flex items-start justify-between">
<h3 className="text-lg font-medium tracking-tight">Atmospheric Product Film</h3>
<svg className="lucide lucide-external-link w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</div>
<p className="text-sm text-zinc-400 mt-1.5">
                Cinematic look-dev with volumetrics and ray-traced reflections.
              </p>
</div>
</a>
</div>
<div className="mt-10 flex justify-center">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 border border-white/10 hover:border-white/20 hover:bg-white/[0.03] transition-colors" href="#">
<svg className="lucide lucide-grid w-4 h-4" data-lucide="grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
<span className="text-sm">Browse more</span>
</a>
</div>
</div>
</section>

<section className="relative" id="about">
<div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
<div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
<div className="relative">
<div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-emerald-500/10 via-fuchsia-500/10 to-cyan-500/10 blur-xl"></div>
<img alt="Portrait" className="relative rounded-2xl border border-white/10 object-cover w-full h-80 sm:h-96" src="https://images.unsplash.com/photo-1543965170-4c01a586684e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{fontFamily: '\'Space Grotesk\''}}>
              Designer, developer, and motion generalist.
            </h2>
<p className="mt-3 text-zinc-400 leading-relaxed">
              I build expressive, performant experiences across web and video—bridging 3D,
              interaction, and brand. Comfortable from storyboard to shader, with a focus on
              clarity and craft.
            </p>
<div className="mt-6 flex flex-wrap gap-2">
<span className="text-xs text-zinc-300 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1">Three.js</span>
<span className="text-xs text-zinc-300 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1">Spline</span>
<span className="text-xs text-zinc-300 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1">After Effects</span>
<span className="text-xs text-zinc-300 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1">Blender</span>
<span className="text-xs text-zinc-300 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1">Shaders</span>
<span className="text-xs text-zinc-300 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1">Prototyping</span>
</div>
<div className="mt-8 flex gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 bg-white text-zinc-900 hover:bg-zinc-100 transition-colors" href="#contact">
<svg className="lucide lucide-message-square w-4 h-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span className="text-sm font-medium">Start a project</span>
</a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 border border-white/10 hover:border-white/20 hover:bg-white/[0.03] transition-colors" href="#">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span className="text-sm">Download CV</span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="contact">
<div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-10">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight" style={{fontFamily: '\'Space Grotesk\''}}>
                Let’s build something remarkable.
              </h3>
<p className="mt-2 text-zinc-400 text-sm">
                Share a few details about your idea, timeline, and goals. I’ll reply within 24–48 hours.
              </p>
<div className="mt-6 flex gap-3">
<a className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors" href="mailto:hello@alexknight.studio">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                  hello@alexknight.studio
                </a>
<span className="text-zinc-600">•</span>
<a className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                  Book a call
                </a>
</div>
</div>
<form className="grid grid-cols-1 gap-4">
<div className="grid sm:grid-cols-2 gap-4">
<label className="block">
<span className="text-xs text-zinc-400">Name</span>
<input className="mt-1 w-full rounded-md bg-zinc-900/60 border border-white/10 px-3 py-2 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/10" placeholder="Your name" type="text"/>
</label>
<label className="block">
<span className="text-xs text-zinc-400">Email</span>
<input className="mt-1 w-full rounded-md bg-zinc-900/60 border border-white/10 px-3 py-2 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/10" placeholder="you@studio.com" type="email"/>
</label>
</div>
<label className="block">
<span className="text-xs text-zinc-400">Project type</span>
<select className="mt-1 w-full rounded-md bg-zinc-900/60 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/10">
<option>3D &amp; Motion</option>
<option>Interactive Website</option>
<option>Brand Film</option>
<option>Consulting</option>
</select>
</label>
<label className="block">
<span className="text-xs text-zinc-400">Message</span>
<textarea className="mt-1 w-full rounded-md bg-zinc-900/60 border border-white/10 px-3 py-2 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/10" placeholder="Tell me about your vision..." rows="4"></textarea>
</label>
<div className="flex items-center justify-between">
<div className="text-[11px] text-zinc-500">
                  By sending, you agree to the terms.
                </div>
<button className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 bg-white text-zinc-900 hover:bg-zinc-100 transition-colors" type="submit">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
<span className="text-sm font-medium">Send</span>
</button>
</div>
</form>
</div>
</div>
<div className="mt-8 flex items-center justify-center gap-4 text-zinc-400">
<a className="inline-flex items-center gap-2 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
<span className="text-sm">GitHub</span>
</a>
<span className="text-zinc-600">•</span>
<a className="inline-flex items-center gap-2 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-dribbble w-4 h-4" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
<span className="text-sm">Dribbble</span>
</a>
<span className="text-zinc-600">•</span>
<a className="inline-flex items-center gap-2 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
<span className="text-sm">LinkedIn</span>
</a>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md grid place-items-center border border-white/10 bg-white/[0.03] backdrop-blur" style={{letterSpacing: '-0.02em'}}>
<span className="text-[11px] font-medium" style={{fontFamily: '\'Inter\', system-ui, ui-sans-serif'}}>AK</span>
</div>
<span className="text-xs text-zinc-500">© 2025 Alex Knight. All rights reserved.</span>
</div>
<div className="flex items-center gap-5">
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#work">Work</a>
</div>
</div>
</footer>


    </>
  );
}
