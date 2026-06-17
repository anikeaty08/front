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
      

<div className="fixed inset-0 z-[-1] bg-grid opacity-20 pointer-events-none h-screen w-full"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/10 glass-panel">
<div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-white font-medium tracking-tight text-sm hover:opacity-80 transition-opacity" href="#">
                JD.
            </a>
<div className="flex items-center gap-6">
<a className="text-xs font-medium hover:text-white transition-colors" href="#work">Work</a>
<a className="text-xs font-medium hover:text-white transition-colors" href="#about">About</a>
<a className="text-xs font-medium hover:text-white transition-colors" href="#contact">Contact</a>
</div>
</div>
</nav>
<main className="max-w-4xl mx-auto px-6 pt-32 pb-20">

<section className="flex flex-col items-start justify-center min-h-[40vh] mb-24">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-white/10 text-xs font-medium text-neutral-300 mb-6 hover:bg-neutral-800 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Available for new projects
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6 leading-[1.1]">
                Crafting digital <br/>
<span className="text-gradient">experiences &amp; systems.</span>
</h1>
<p className="text-lg text-neutral-500 max-w-xl leading-relaxed mb-10">
                I'm a multidisciplinary developer and designer focused on building accessible, human-centered products with refined interfaces.
            </p>
<div className="flex flex-wrap gap-4">
<a className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-white px-6 font-medium text-neutral-950 transition-all duration-300 hover:bg-neutral-200 hover:ring-2 hover:ring-neutral-200 hover:ring-offset-2 hover:ring-offset-black" href="#work">
<span className="mr-2 text-sm">View Work</span>
<i className="w-4 h-4 transition-transform group-hover:translate-y-0.5" data-lucide="arrow-down"></i>
</a>
<a className="group inline-flex h-10 items-center justify-center rounded-md border border-neutral-800 bg-neutral-950 px-6 text-sm font-medium text-neutral-300 transition-all hover:bg-neutral-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-2 focus:ring-offset-black" href="mailto:hello@example.com">
<span className="mr-2">Contact Me</span>
</a>
</div>
</section>

<section className="mb-32 scroll-mt-24" id="work">
<div className="flex items-center justify-between mb-8">
<h2 className="text-white font-medium tracking-tight text-xl">Selected Work</h2>
<span className="text-xs text-neutral-600 font-mono">2023 — 2024</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="group relative md:col-span-2 row-span-2 bg-neutral-900/40 border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-colors duration-500">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60"></div>
<div className="p-8 h-[24rem] flex flex-col justify-between relative z-20">
<div className="flex justify-between items-start">
<div className="p-3 bg-neutral-950/50 border border-white/10 rounded-lg backdrop-blur-md">
<i className="text-white w-6 h-6" data-lucide="layers"></i>
</div>
<a className="p-2 text-neutral-400 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</a>
</div>
<div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">Lumina Dashboard</h3>
<p className="text-neutral-400 text-sm leading-relaxed max-w-sm">A comprehensive analytics platform for SaaS businesses, featuring real-time data visualization and modular widget systems.</p>
<div className="flex gap-2 mt-4">
<span className="text-[10px] uppercase tracking-wider text-neutral-500 bg-neutral-900 border border-white/5 px-2 py-1 rounded">Next.js</span>
<span className="text-[10px] uppercase tracking-wider text-neutral-500 bg-neutral-900 border border-white/5 px-2 py-1 rounded">Tailwind</span>
<span className="text-[10px] uppercase tracking-wider text-neutral-500 bg-neutral-900 border border-white/5 px-2 py-1 rounded">Vercel KV</span>
</div>
</div>
</div>

<div className="absolute right-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-800/30 via-neutral-900/10 to-transparent pointer-events-none"></div>
</div>

<div className="group relative bg-neutral-900/40 border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-colors duration-500 flex flex-col justify-between h-64 md:h-auto">
<div className="p-6 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<i className="text-neutral-200 w-5 h-5" data-lucide="command"></i>
</div>
<div>
<h3 className="text-lg font-medium text-white tracking-tight mb-1">Command K</h3>
<p className="text-neutral-500 text-xs">Global search palette interface implementation.</p>
</div>
</div>
</div>

<div className="group relative bg-neutral-900/40 border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-colors duration-500 flex flex-col justify-between h-64 md:h-auto">
<div className="p-6 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<i className="text-neutral-200 w-5 h-5" data-lucide="zap"></i>
</div>
<div>
<h3 className="text-lg font-medium text-white tracking-tight mb-1">Turbo Pack</h3>
<p className="text-neutral-500 text-xs">High performance rust-based bundler exploration.</p>
</div>
</div>
</div>

<div className="group md:col-span-3 relative bg-neutral-900/40 border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-colors duration-500 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Open Source Design System</h3>
<p className="text-neutral-400 text-sm max-w-md">A React-based component library focusing on accessibility and dark mode primitives.</p>
</div>
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-black flex items-center justify-center text-[10px] text-white">JD</div>
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-black flex items-center justify-center text-[10px] text-white">AB</div>
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-black flex items-center justify-center text-[10px] text-white">TS</div>
</div>
<button className="text-xs font-medium bg-white text-black px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                             View Repository
                         </button>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 scroll-mt-24" id="about">

<div>
<h2 className="text-white font-medium tracking-tight text-xl mb-8">Technologies</h2>
<div className="grid grid-cols-2 gap-y-4 gap-x-2">
<div className="flex items-center gap-3 p-2 rounded-md hover:bg-white/5 transition-colors">
<div className="w-8 h-8 rounded bg-neutral-900 border border-white/10 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="code-2"></i>
</div>
<span className="text-sm text-neutral-300">React / Next.js</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-md hover:bg-white/5 transition-colors">
<div className="w-8 h-8 rounded bg-neutral-900 border border-white/10 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="layout-template"></i>
</div>
<span className="text-sm text-neutral-300">TypeScript</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-md hover:bg-white/5 transition-colors">
<div className="w-8 h-8 rounded bg-neutral-900 border border-white/10 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="server"></i>
</div>
<span className="text-sm text-neutral-300">Node.js</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-md hover:bg-white/5 transition-colors">
<div className="w-8 h-8 rounded bg-neutral-900 border border-white/10 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="database"></i>
</div>
<span className="text-sm text-neutral-300">PostgreSQL</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-md hover:bg-white/5 transition-colors">
<div className="w-8 h-8 rounded bg-neutral-900 border border-white/10 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="figma"></i>
</div>
<span className="text-sm text-neutral-300">Figma</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-md hover:bg-white/5 transition-colors">
<div className="w-8 h-8 rounded bg-neutral-900 border border-white/10 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="cloud"></i>
</div>
<span className="text-sm text-neutral-300">AWS / Vercel</span>
</div>
</div>
</div>

<div>
<h2 className="text-white font-medium tracking-tight text-xl mb-8">Experience</h2>
<div className="relative border-l border-neutral-800 ml-3 space-y-10">
<div className="relative pl-8">
<div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-neutral-800 bg-black"></div>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
<h3 className="text-white font-medium text-sm">Senior Frontend Engineer</h3>
<span className="text-xs text-neutral-500 font-mono">2022 — Present</span>
</div>
<p className="text-neutral-400 text-sm mb-2">Vercel</p>
<p className="text-neutral-500 text-xs leading-relaxed">Leading the development of the core dashboard infrastructure and improving build deployment speeds.</p>
</div>
<div className="relative pl-8">
<div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-neutral-800 bg-neutral-800"></div>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
<h3 className="text-white font-medium text-sm">Product Designer</h3>
<span className="text-xs text-neutral-500 font-mono">2020 — 2022</span>
</div>
<p className="text-neutral-400 text-sm mb-2">Linear</p>
<p className="text-neutral-500 text-xs leading-relaxed">Designed and implemented the initial version of the issue tracking timeline view.</p>
</div>
<div className="relative pl-8">
<div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-neutral-800 bg-neutral-800"></div>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
<h3 className="text-white font-medium text-sm">Frontend Developer</h3>
<span className="text-xs text-neutral-500 font-mono">2018 — 2020</span>
</div>
<p className="text-neutral-400 text-sm mb-2">Agency</p>
<p className="text-neutral-500 text-xs leading-relaxed">Built performant marketing sites for Series B startups using Jamstack technologies.</p>
</div>
</div>
</div>
</section>

<section className="mb-20" id="contact">
<div className="rounded-xl bg-neutral-900/30 border border-white/5 p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
<div className="max-w-md">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-3">Let's work together</h2>
<p className="text-neutral-400 text-sm leading-relaxed">
                        Currently open for freelance projects and consulting. <br className="hidden md:block"/>
                        Reach out if you need high-quality frontend work.
                    </p>
</div>
<div className="flex flex-col w-full md:w-auto gap-3">
<a className="inline-flex h-10 w-full md:w-auto items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-neutral-200" href="mailto:hello@example.com">
                        Drop an email
                    </a>
<div className="flex items-center justify-center gap-4 mt-2">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="github"></i>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-600">
                © 2024 John Doe. All rights reserved.
            </p>
<div className="flex items-center gap-6">
<span className="flex items-center gap-2 text-xs text-neutral-600">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
                    All systems normal
                </span>
</div>
</footer>
</main>


    </>
  );
}
