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
      

<div className="fixed top-0 left-0 right-0 h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-[#050505] to-[#050505] -z-10 pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#050505]/80 border-b border-white/[0.03]">
<div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-zinc-100 font-medium tracking-tight text-sm hover:text-white transition-colors" href="#">
                SA.
            </a>
<div className="flex items-center gap-6 text-xs font-medium">
<a className="hover:text-zinc-100 transition-colors" href="#work">Work</a>
<a className="hover:text-zinc-100 transition-colors" href="#about">About</a>
<a className="hover:text-zinc-100 transition-colors" href="#contact">Contact</a>
</div>
</div>
</nav>

<main className="flex-grow pt-32 pb-20 px-6">
<div className="max-w-4xl mx-auto space-y-24">

<section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-in">

<div className="flex flex-col gap-6 order-2 md:order-1">
<div className="flex flex-col gap-4">
<h1 className="text-zinc-100 text-3xl sm:text-4xl font-medium tracking-tight leading-[1.1]">
                            Saim Ali
                            <span className="block text-zinc-500">UI/UX Designer</span>
</h1>
<p className="max-w-md text-sm leading-relaxed text-zinc-400">
                            Crafting intuitive digital experiences with a focus on motion, interaction, and clean typography. Currently building accessible interfaces for the modern web.
                        </p>
</div>
<div className="flex items-center gap-4 pt-2">
<a className="group flex items-center gap-2 text-xs text-zinc-100 border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800 rounded-md px-3 py-2 transition-all" href="mailto:hello@saimali.com">
<iconify-icon icon="lucide:mail" strokeWidth="1.5" width="14"></iconify-icon>
<span>Email Me</span>
</a>
<a className="group flex items-center gap-2 text-xs text-zinc-400 hover:text-zinc-100 transition-colors px-1" href="#">
<span>LinkedIn</span>
<iconify-icon className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" icon="lucide:arrow-up-right" strokeWidth="1.5" width="12"></iconify-icon>
</a>
</div>
</div>

<div aria-hidden="true" className="relative h-[300px] w-full flex items-center justify-center order-1 md:order-2 select-none pointer-events-none">
<div className="scene w-64 h-64 flex items-center justify-center">
<div className="cluster relative grid grid-cols-4 gap-3 p-3 glow-base rounded-xl">

<div className="cube w-8 h-8 relative animate-float-1">
<div className="face-top"></div><div className="face-right"></div><div className="face-front"></div>
</div>
<div className="cube w-8 h-8 relative animate-float-2">
<div className="face-top"></div><div className="face-right"></div><div className="face-front"></div>
</div>
<div className="cube w-8 h-8 relative animate-float-1">
<div className="face-top"></div><div className="face-right"></div><div className="face-front"></div>
</div>
<div className="cube w-8 h-8 relative animate-float-3">
<div className="face-top"></div><div className="face-right"></div><div className="face-front"></div>
</div>

<div className="cube w-8 h-8 relative animate-float-2">
<div className="face-top"></div><div className="face-right"></div><div className="face-front"></div>
</div>
<div className="cube w-8 h-8 relative animate-float-1">
<div className="face-top"></div><div className="face-right"></div><div className="face-front"></div>
</div>
<div className="cube w-8 h-8 relative animate-float-3">
<div className="face-top"></div><div className="face-right"></div><div className="face-front"></div>
</div>
<div className="cube w-8 h-8 relative animate-float-2">
<div className="face-top"></div><div className="face-right"></div><div className="face-front"></div>
</div>

<div className="cube w-8 h-8 relative animate-float-3">
<div className="face-top"></div><div className="face-right"></div><div className="face-front"></div>
</div>
<div className="cube w-8 h-8 relative animate-float-1">
<div className="face-top"></div><div className="face-right"></div><div className="face-front"></div>
</div>
<div className="cube w-8 h-8 relative animate-float-2">
<div className="face-top"></div><div className="face-right"></div><div className="face-front"></div>
</div>
<div className="cube w-8 h-8 relative animate-float-1">
<div className="face-top"></div><div className="face-right"></div><div className="face-front"></div>
</div>

<div className="cube w-8 h-8 relative animate-float-2">
<div className="face-top"></div><div className="face-right"></div><div className="face-front"></div>
</div>
<div className="cube w-8 h-8 relative animate-float-3">
<div className="face-top"></div><div className="face-right"></div><div className="face-front"></div>
</div>
<div className="cube w-8 h-8 relative animate-float-1">
<div className="face-top"></div><div className="face-right"></div><div className="face-front"></div>
</div>
<div className="cube w-8 h-8 relative animate-float-2">
<div className="face-top"></div><div className="face-right"></div><div className="face-front"></div>
</div>

<div className="particle animate-particle-1 absolute top-10 left-10">
<div className="face-top"></div><div className="face-right"></div><div className="face-front"></div>
</div>
<div className="particle animate-particle-2 absolute top-20 right-20">
<div className="face-top"></div><div className="face-right"></div><div className="face-front"></div>
</div>
<div className="particle animate-particle-3 absolute bottom-20 left-20">
<div className="face-top"></div><div className="face-right"></div><div className="face-front"></div>
</div>
<div className="particle animate-particle-4 absolute top-1/2 left-1/2">
<div className="face-top"></div><div className="face-right"></div><div className="face-front"></div>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-8 animate-fade-in delay-100 opacity-0" id="work">
<div className="flex items-baseline justify-between border-b border-white/[0.05] pb-4">
<h2 className="text-sm font-medium text-zinc-200">Selected Work</h2>
<span className="text-xs text-zinc-600">2021 — 2024</span>
</div>
<div className="grid gap-1">

<a className="group relative flex items-center justify-between py-4 px-2 -mx-2 rounded-lg hover:bg-white/[0.03] transition-colors border-b border-transparent hover:border-white/[0.02]" href="#">
<div className="flex flex-col gap-1">
<span className="text-zinc-200 font-medium text-sm group-hover:text-white transition-colors">Fintech Dashboard</span>
<span className="text-xs text-zinc-500">Product Design, Design System</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-zinc-600 font-mono hidden sm:block">2024</span>
<iconify-icon className="text-zinc-600 group-hover:text-zinc-300 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</a>

<a className="group relative flex items-center justify-between py-4 px-2 -mx-2 rounded-lg hover:bg-white/[0.03] transition-colors border-b border-transparent hover:border-white/[0.02]" href="#">
<div className="flex flex-col gap-1">
<span className="text-zinc-200 font-medium text-sm group-hover:text-white transition-colors">Chronos SaaS</span>
<span className="text-xs text-zinc-500">UI/UX, Frontend Implementation</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-zinc-600 font-mono hidden sm:block">2023</span>
<iconify-icon className="text-zinc-600 group-hover:text-zinc-300 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</a>

<a className="group relative flex items-center justify-between py-4 px-2 -mx-2 rounded-lg hover:bg-white/[0.03] transition-colors border-b border-transparent hover:border-white/[0.02]" href="#">
<div className="flex flex-col gap-1">
<span className="text-zinc-200 font-medium text-sm group-hover:text-white transition-colors">E-Commerce Mobile App</span>
<span className="text-xs text-zinc-500">Mobile Design, Prototyping</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-zinc-600 font-mono hidden sm:block">2023</span>
<iconify-icon className="text-zinc-600 group-hover:text-zinc-300 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</a>

<a className="group relative flex items-center justify-between py-4 px-2 -mx-2 rounded-lg hover:bg-white/[0.03] transition-colors border-b border-transparent hover:border-white/[0.02]" href="#">
<div className="flex flex-col gap-1">
<span className="text-zinc-200 font-medium text-sm group-hover:text-white transition-colors">Vercel Redesign Concept</span>
<span className="text-xs text-zinc-500">Visual Interaction</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-zinc-600 font-mono hidden sm:block">2022</span>
<iconify-icon className="text-zinc-600 group-hover:text-zinc-300 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</a>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in delay-200 opacity-0">

<div className="space-y-6">
<h3 className="text-sm font-medium text-zinc-200 border-b border-white/[0.05] pb-4">Experience</h3>
<div className="space-y-6">
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-zinc-300 text-sm font-medium">Senior Designer</span>
<span className="text-xs text-zinc-600 font-mono">Present</span>
</div>
<p className="text-xs text-zinc-500 mb-2">Studio Alpha</p>
<p className="text-xs text-zinc-500 leading-relaxed max-w-[90%]">Leading design systems and product interface decisions for enterprise clients.</p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="text-zinc-300 text-sm font-medium">Product Designer</span>
<span className="text-xs text-zinc-600 font-mono">2022</span>
</div>
<p className="text-xs text-zinc-500 mb-2">TechFlow Inc.</p>
<p className="text-xs text-zinc-500 leading-relaxed max-w-[90%]">Collaborated with engineering to ship the v2.0 dashboard update.</p>
</div>
</div>
</div>

<div className="space-y-6">
<h3 className="text-sm font-medium text-zinc-200 border-b border-white/[0.05] pb-4">Toolbox</h3>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<h4 className="text-xs uppercase tracking-wider text-zinc-600 font-medium">Design</h4>
<ul className="space-y-1.5">
<li className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon icon="lucide:figma" strokeWidth="1.5" width="12"></iconify-icon> Figma
                                </li>
<li className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon icon="lucide:pen-tool" strokeWidth="1.5" width="12"></iconify-icon> Illustrator
                                </li>
<li className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon icon="lucide:framer" strokeWidth="1.5" width="12"></iconify-icon> Framer
                                </li>
</ul>
</div>
<div className="space-y-2">
<h4 className="text-xs uppercase tracking-wider text-zinc-600 font-medium">Development</h4>
<ul className="space-y-1.5">
<li className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon icon="lucide:code-2" strokeWidth="1.5" width="12"></iconify-icon> HTML/CSS
                                </li>
<li className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon icon="lucide:wind" strokeWidth="1.5" width="12"></iconify-icon> Tailwind
                                </li>
<li className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon icon="lucide:braces" strokeWidth="1.5" width="12"></iconify-icon> React Basics
                                </li>
</ul>
</div>
</div>
</div>
</section>

<section className="space-y-6 animate-fade-in delay-300 opacity-0" id="about">
<div className="flex items-baseline justify-between">
<h2 className="text-sm font-medium text-zinc-200">Playground</h2>
<a className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors" href="#">View Dribbble</a>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

<div className="aspect-square bg-zinc-900/50 border border-white/[0.05] rounded-lg p-4 flex flex-col justify-between group hover:border-zinc-700 transition-colors cursor-pointer">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-700 group-hover:text-zinc-200 transition-colors">
<iconify-icon icon="lucide:layout" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">Design System Kit</span>
</div>

<div className="aspect-square bg-zinc-900/50 border border-white/[0.05] rounded-lg p-4 flex flex-col justify-between group hover:border-zinc-700 transition-colors cursor-pointer">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-700 group-hover:text-zinc-200 transition-colors">
<iconify-icon icon="lucide:smartphone" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">iOS Widget</span>
</div>

<div className="aspect-square bg-zinc-900/50 border border-white/[0.05] rounded-lg p-4 flex flex-col justify-between group hover:border-zinc-700 transition-colors cursor-pointer">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-700 group-hover:text-zinc-200 transition-colors">
<iconify-icon icon="lucide:aperture" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">Iconography</span>
</div>
</div>
</section>

<section className="pt-12 border-t border-white/[0.05] animate-fade-in delay-300 opacity-0" id="contact">
<div className="flex flex-col md:flex-row justify-between gap-8 md:items-end">
<div className="space-y-4">
<h2 className="text-zinc-100 font-medium text-lg tracking-tight">Let's create something together.</h2>
<div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-zinc-500">
<a className="hover:text-zinc-300 transition-colors flex items-center gap-1" href="#">
                                Twitter <iconify-icon icon="lucide:arrow-up-right" width="10"></iconify-icon>
</a>
<a className="hover:text-zinc-300 transition-colors flex items-center gap-1" href="#">
                                Instagram <iconify-icon icon="lucide:arrow-up-right" width="10"></iconify-icon>
</a>
<a className="hover:text-zinc-300 transition-colors flex items-center gap-1" href="#">
                                Save.it <iconify-icon icon="lucide:arrow-up-right" width="10"></iconify-icon>
</a>
</div>
</div>
<div className="text-xs text-zinc-700">
<p>© 2024 Saim Ali. All Rights Reserved.</p>
<p className="mt-1">Designed with precision.</p>
</div>
</div>
</section>
</div>
</main>

    </>
  );
}
