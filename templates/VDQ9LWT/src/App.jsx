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
      
<div className="min-h-screen flex items-center justify-center px-4 py-12">
<div className="flex w-full max-w-7xl gap-10 flex-col">

<div className="mb-10 text-center max-w-3xl mx-auto">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">Design &amp; Coding Mastery</h1>
<p className="text-lg text-neutral-300 font-normal">
          Advance your skills in UI design and frontend development with curated learning paths, hands-on projects, and expert feedback. Build beautiful, accessible, and performant products from concept to code.
        </p>
</div>

<div className="w-full flex justify-center items-center gap-6 mb-8 flex-wrap">
<div aria-label="Swift" className="bg-white/10 border border-white/20 rounded-full w-14 h-14 flex items-center justify-center shadow transition hover:scale-105">
<img alt="Swift Logo" className="w-8 h-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"/>
</div>
<div aria-label="React" className="bg-white/10 border border-white/20 rounded-full w-14 h-14 flex items-center justify-center shadow transition hover:scale-105">
<img alt="React Logo" className="w-8 h-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
</div>
<div aria-label="Figma" className="bg-white/10 border border-white/20 rounded-full w-14 h-14 flex items-center justify-center shadow transition hover:scale-105">
<img alt="Figma Logo" className="w-8 h-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"/>
</div>
<div aria-label="Sketch" className="bg-white/10 border border-white/20 rounded-full w-14 h-14 flex items-center justify-center shadow transition hover:scale-105">
<img alt="Sketch Logo" className="w-8 h-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg"/>
</div>
<div aria-label="Framer" className="bg-white/10 border border-white/20 rounded-full w-14 h-14 flex items-center justify-center shadow transition hover:scale-105">

<svg fill="none" height="32" viewbox="0 0 32 32" width="32">
<g>
<polygon fill="#fff" points="8 2 24 2 24 12 8 12 8 22 24 22 24 30 8 30 8 20 24 20 24 10 8 10 8 2"></polygon>
<polygon fill="#0055FF" points="8 2 24 2 24 12 8 12 8 22 24 22 24 30 8 30 8 20 24 20 24 10 8 10 8 2"></polygon>
</g>
</svg>
</div>
<div aria-label="Webflow" className="bg-white/10 border border-white/20 rounded-full w-14 h-14 flex items-center justify-center shadow transition hover:scale-105">
<img alt="Webflow Logo" className="w-8 h-8" src="https://www.vectorlogo.zone/logos/webflow/webflow-icon.svg"/>
</div>
</div>
<div className="flex w-full max-w-7xl gap-10 mx-auto">

<div className="flex-1">
<div className="w-full grid md:grid-cols-2 gap-8">

<section className="rounded-2xl bg-white/5 shadow-2xl border border-white/10 backdrop-blur-2xl overflow-hidden flex flex-col">
<header className="flex items-center justify-between px-6 h-14 bg-gradient-to-r from-indigo-900/40 via-transparent to-purple-800/30 border-b border-white/10">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-indigo-400" data-lucide="palette"></i>
<span className="text-lg font-semibold text-white tracking-tight">Design</span>
</div>
<span className="text-xs font-medium text-neutral-300" style={{fontFamily: '\'IBM Plex Mono\', monospace'}}>SECTION</span>
</header>
<div className="px-6 pt-8 pb-4 flex-1 flex flex-col">
<div className="flex items-start gap-4">
<div className="p-3 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl border border-indigo-600/30 shadow">
<i className="w-8 h-8 text-indigo-400" data-lucide="brush"></i>
</div>
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-1">UI Design Principles</h2>
<p className="text-sm text-neutral-400">Visuals, Layouts, Components</p>
</div>
</div>

<div className="mt-8">
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-fuchsia-400" data-lucide="info"></i>
<h3 className="text-sm font-medium text-white">Details</h3>
</div>
<div className="flex flex-col gap-3 mb-4 text-sm">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-indigo-400" data-lucide="layers"></i>
<span className="text-neutral-200">Covers <span className="text-white font-medium">8 modules</span> from color theory to prototyping</span>
</div>
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-amber-400" data-lucide="calendar"></i>
<span className="text-neutral-200">Next cohort starts <span className="text-white font-medium">July 10, 2024</span></span>
</div>
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-emerald-400" data-lucide="award"></i>
<span className="text-neutral-200">Certification on completion</span>
</div>
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-pink-400" data-lucide="users"></i>
<span className="text-neutral-200">Mentor feedback and peer reviews</span>
</div>
</div>
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-indigo-400" data-lucide="file-text"></i>
<h3 className="text-sm font-medium text-white">Overview</h3>
</div>
<p className="text-sm text-neutral-200 leading-relaxed mb-4">
                    Explore color theory, typography, grids, and spatial systems. Learn how to build scalable and beautiful design systems for modern interfaces.
                  </p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="inline-flex items-center gap-1 bg-indigo-900/40 border border-indigo-600/20 text-indigo-200 px-2.5 py-1 rounded-full text-xs font-medium">
<i className="w-3 h-3" data-lucide="palette"></i>
<span>Color</span>
</span>
<span className="inline-flex items-center gap-1 bg-fuchsia-900/40 border border-fuchsia-600/20 text-fuchsia-200 px-2.5 py-1 rounded-full text-xs font-medium">
<i className="w-3 h-3" data-lucide="type"></i>
<span>Typography</span>
</span>
<span className="inline-flex items-center gap-1 bg-sky-900/40 border border-sky-600/20 text-sky-200 px-2.5 py-1 rounded-full text-xs font-medium">
<i className="w-3 h-3" data-lucide="layout"></i>
<span>Layout</span>
</span>
</div>
</div>
</div>
<div className="px-6 pb-4">
<div className="border-t border-white/10 my-2"></div>
<h3 className="text-sm font-semibold text-white tracking-tight mb-4 mt-2">Featured Courses</h3>
<div className="grid gap-3">
<a aria-label="Foundations of Color Theory" className="group flex items-center gap-4 rounded-xl bg-indigo-900/30 hover:bg-indigo-900/60 border border-white/10 transition-colors duration-150 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400" href="#" tabindex="0">
<span className="p-2 bg-indigo-700/30 rounded-md">
<i className="w-5 h-5 text-indigo-300" data-lucide="droplet"></i>
</span>
<div>
<span className="text-base font-medium text-white">Foundations of Color Theory</span>
<p className="text-xs text-neutral-400">Learn harmony, contrast, and systems in practical UI contexts.</p>
</div>
</a>
<a aria-label="Modern Typography Systems" className="group flex items-center gap-4 rounded-xl bg-indigo-900/30 hover:bg-indigo-900/60 border border-white/10 transition-colors duration-150 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400" href="#" tabindex="0">
<span className="p-2 bg-indigo-700/30 rounded-md">
<i className="w-5 h-5 text-indigo-300" data-lucide="type"></i>
</span>
<div>
<span className="text-base font-medium text-white">Modern Typography Systems</span>
<p className="text-xs text-neutral-400">Master type scales, rhythm, and digital readability.</p>
</div>
</a>
<a aria-label="Designing with Grids" className="group flex items-center gap-4 rounded-xl bg-indigo-900/30 hover:bg-indigo-900/60 border border-white/10 transition-colors duration-150 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400" href="#" tabindex="0">
<span className="p-2 bg-indigo-700/30 rounded-md">
<i className="w-5 h-5 text-indigo-300" data-lucide="grid"></i>
</span>
<div>
<span className="text-base font-medium text-white">Designing with Grids</span>
<p className="text-xs text-neutral-400">Build responsive, balanced layouts for web and mobile.</p>
</div>
</a>
</div>
</div>
</section>

<section className="rounded-2xl bg-white/5 shadow-2xl border border-white/10 backdrop-blur-2xl overflow-hidden flex flex-col">
<header className="flex items-center justify-between px-6 h-14 bg-gradient-to-r from-sky-900/40 via-transparent to-cyan-800/30 border-b border-white/10">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-sky-400" data-lucide="code"></i>
<span className="text-lg font-semibold text-white tracking-tight">Coding</span>
</div>
<span className="text-xs font-medium text-neutral-300" style={{fontFamily: '\'IBM Plex Mono\', monospace'}}>SECTION</span>
</header>
<div className="px-6 pt-8 pb-4 flex-1 flex flex-col">
<div className="flex items-start gap-4">
<div className="p-3 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-xl border border-sky-600/30 shadow">
<i className="w-8 h-8 text-sky-400" data-lucide="code-2"></i>
</div>
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-1">Frontend Engineering</h2>
<p className="text-sm text-neutral-400">Components, State, Animation</p>
</div>
</div>

<div className="mt-8">
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-cyan-400" data-lucide="info"></i>
<h3 className="text-sm font-medium text-white">Details</h3>
</div>
<div className="flex flex-col gap-3 mb-4 text-sm">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-sky-400" data-lucide="layers"></i>
<span className="text-neutral-200">Includes <span className="text-white font-medium">10 hands-on projects</span> with code reviews</span>
</div>
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-amber-400" data-lucide="calendar"></i>
<span className="text-neutral-200">Next cohort starts <span className="text-white font-medium">July 22, 2024</span></span>
</div>
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-emerald-400" data-lucide="award"></i>
<span className="text-neutral-200">Certificate and portfolio on completion</span>
</div>
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-sky-300" data-lucide="message-square"></i>
<span className="text-neutral-200">Weekly live Q&amp;A sessions</span>
</div>
</div>
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-sky-400" data-lucide="file-text"></i>
<h3 className="text-sm font-medium text-white">Overview</h3>
</div>
<p className="text-sm text-neutral-200 leading-relaxed mb-4">
                    Build robust UI components with React, leverage design tokens, and implement advanced animation and accessibility patterns for production-ready interfaces.
                  </p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="inline-flex items-center gap-1 bg-sky-900/40 border border-sky-600/20 text-sky-200 px-2.5 py-1 rounded-full text-xs font-medium">
<i className="w-3 h-3" data-lucide="monitor"></i>
<span>React</span>
</span>
<span className="inline-flex items-center gap-1 bg-green-900/40 border border-green-600/20 text-green-200 px-2.5 py-1 rounded-full text-xs font-medium">
<i className="w-3 h-3" data-lucide="accessibility"></i>
<span>Accessibility</span>
</span>
<span className="inline-flex items-center gap-1 bg-fuchsia-900/40 border border-fuchsia-600/20 text-fuchsia-200 px-2.5 py-1 rounded-full text-xs font-medium">
<i className="w-3 h-3" data-lucide="feather"></i>
<span>Animation</span>
</span>
</div>
</div>
</div>
<div className="px-6 pb-4">
<div className="border-t border-white/10 my-2"></div>
<h3 className="text-sm font-semibold text-white tracking-tight mb-4 mt-2">Featured Courses</h3>
<div className="grid gap-3">
<a aria-label="React for Designers" className="group flex items-center gap-4 rounded-xl bg-sky-900/30 hover:bg-sky-900/60 border border-white/10 transition-colors duration-150 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400" href="#" tabindex="0">
<span className="p-2 bg-sky-700/30 rounded-md">
<i className="w-5 h-5 text-sky-300" data-lucide="monitor"></i>
</span>
<div>
<span className="text-base font-medium text-white">React for Designers</span>
<p className="text-xs text-neutral-400">Create interactive UIs with modern React patterns.</p>
</div>
</a>
<a aria-label="Accessible Interfaces" className="group flex items-center gap-4 rounded-xl bg-sky-900/30 hover:bg-sky-900/60 border border-white/10 transition-colors duration-150 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400" href="#" tabindex="0">
<span className="p-2 bg-sky-700/30 rounded-md">
<i className="w-5 h-5 text-sky-300" data-lucide="accessibility"></i>
</span>
<div>
<span className="text-base font-medium text-white">Accessible Interfaces</span>
<p className="text-xs text-neutral-400">Implement inclusive features and ARIA best-practices.</p>
</div>
</a>
<a aria-label="Micro-interactions with JavaScript" className="group flex items-center gap-4 rounded-xl bg-sky-900/30 hover:bg-sky-900/60 border border-white/10 transition-colors duration-150 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400" href="#" tabindex="0">
<span className="p-2 bg-sky-700/30 rounded-md">
<i className="w-5 h-5 text-sky-300" data-lucide="zap"></i>
</span>
<div>
<span className="text-base font-medium text-white">Micro-interactions with JavaScript</span>
<p className="text-xs text-neutral-400">Enhance UX with smooth, accessible animations.</p>
</div>
</a>
</div>
</div>
</section>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
