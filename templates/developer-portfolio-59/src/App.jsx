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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-900/50 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="logo text-zinc-100 font-semibold text-lg tracking-tighter">
                MANAS<span className="text-zinc-500">.</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest">
<a className="text-zinc-100 hover:text-white transition-colors" href="#">Projects</a>
<a className="hover:text-white transition-colors" href="#">Experience</a>
<a className="hover:text-white transition-colors" href="#">Stack</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex items-center gap-4">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="custom-toggle bg-zinc-800"></div>
</label>
</div>
</div>
</nav>
<main className="max-w-5xl mx-auto px-6 pt-32 pb-24">

<section className="mb-24">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs mb-6">
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Available for new opportunities
            </div>
<h1 className="text-4xl md:text-6xl text-zinc-100 font-semibold tracking-tight mb-6 leading-tight">
                Crafting digital experiences <br/>
<span className="text-zinc-500">with precision and purpose.</span>
</h1>
<p className="text-lg max-w-xl leading-relaxed text-zinc-400 mb-8">
                Full-stack developer specializing in building clean, performant, and accessible web applications using modern architectures.
            </p>
<div className="flex items-center gap-4">
<button className="bg-zinc-100 text-zinc-950 px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-white transition-all">
                    View Projects
                </button>
<button className="bg-zinc-900 text-zinc-300 border border-zinc-800 px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-zinc-800 transition-all">
                    Copy Email
                </button>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24">
<div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-900/20 card-hover transition-all">
<iconify-icon className="text-2xl text-zinc-100 mb-4" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-zinc-100 font-medium mb-1 tracking-tight">Technical Architecture</h3>
<p className="text-xs leading-relaxed">Designing scalable systems with a focus on performance and maintainability.</p>
</div>
<div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-900/20 card-hover transition-all">
<iconify-icon className="text-2xl text-zinc-100 mb-4" icon="solar:palet-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-zinc-100 font-medium mb-1 tracking-tight">UI/UX Engineering</h3>
<p className="text-xs leading-relaxed">Bridging the gap between design and code with pixel-perfect precision.</p>
</div>
<div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-900/20 card-hover transition-all">
<iconify-icon className="text-2xl text-zinc-100 mb-4" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-zinc-100 font-medium mb-1 tracking-tight">Fast Optimization</h3>
<p className="text-xs leading-relaxed">Core Web Vitals and SEO optimization for maximum reach and speed.</p>
</div>
</section>

<section className="mb-24">
<div className="flex items-end justify-between mb-10">
<div>
<h2 className="text-2xl text-zinc-100 font-semibold tracking-tight">Selected Projects</h2>
<p className="text-sm">A collection of recent works and experiments.</p>
</div>
<a className="text-xs font-medium border-b border-zinc-700 pb-0.5 hover:text-white transition-colors" href="#">View all archives</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative rounded-2xl border border-zinc-900 bg-zinc-900/20 overflow-hidden card-hover transition-all">
<div className="aspect-video bg-zinc-800/50 flex items-center justify-center p-8 overflow-hidden">
<div className="w-full h-full bg-zinc-900 rounded-lg shadow-2xl border border-zinc-800 flex items-center justify-center text-zinc-700">
<iconify-icon className="text-4xl" icon="solar:gallery-wide-linear"></iconify-icon>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-zinc-100 font-medium tracking-tight">Nova Dashboard</h3>
<iconify-icon className="text-zinc-500 group-hover:text-zinc-100 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<p className="text-xs mb-4">Enterprise-grade analytics platform for SaaS teams.</p>
<div className="flex gap-2">
<span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-300">Next.js</span>
<span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-300">TypeScript</span>
</div>
</div>
</div>

<div className="group relative rounded-2xl border border-zinc-900 bg-zinc-900/20 overflow-hidden card-hover transition-all">
<div className="aspect-video bg-zinc-800/50 flex items-center justify-center p-8 overflow-hidden">
<div className="w-full h-full bg-zinc-900 rounded-lg shadow-2xl border border-zinc-800 flex items-center justify-center text-zinc-700">
<iconify-icon className="text-4xl" icon="solar:layers-linear"></iconify-icon>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-zinc-100 font-medium tracking-tight">Flux Interface</h3>
<iconify-icon className="text-zinc-500 group-hover:text-zinc-100 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<p className="text-xs mb-4">A custom headless CMS built for content creators.</p>
<div className="flex gap-2">
<span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-300">Prisma</span>
<span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-300">Node.js</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-2xl">
<h2 className="text-2xl text-zinc-100 font-semibold tracking-tight mb-8">Experience</h2>
<div className="space-y-8">
<div className="relative pl-8 border-l border-zinc-900">
<div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-zinc-800 border-2 border-zinc-950"></div>
<div className="flex flex-col md:flex-row md:justify-between mb-1">
<h4 className="text-zinc-100 font-medium text-sm tracking-tight">Senior Software Engineer</h4>
<span className="text-xs text-zinc-500">2022 — Present</span>
</div>
<p className="text-xs text-zinc-500 mb-2">Tech Solutions Inc.</p>
<p className="text-xs leading-relaxed">Leading the frontend department to migrate legacy systems into modern React architectures, improving load times by 40%.</p>
</div>
<div className="relative pl-8 border-l border-zinc-900">
<div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-zinc-800 border-2 border-zinc-950"></div>
<div className="flex flex-col md:flex-row md:justify-between mb-1">
<h4 className="text-zinc-100 font-medium text-sm tracking-tight">Frontend Developer</h4>
<span className="text-xs text-zinc-500">2020 — 2022</span>
</div>
<p className="text-xs text-zinc-500 mb-2">Creative Studio</p>
<p className="text-xs leading-relaxed">Collaborated with designers to create high-fidelity prototypes and accessible interfaces for global clients.</p>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-900 py-12">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-[10px] uppercase tracking-widest text-zinc-600">
                © 2024 MANAS HUB. ALL RIGHTS RESERVED.
            </div>
<div className="flex items-center gap-6 text-zinc-500">
<a className="hover:text-zinc-100 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="hover:text-zinc-100 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:globus-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="hover:text-zinc-100 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:programming-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
