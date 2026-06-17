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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        // Huly-style spotlight effect
        // Tracks mouse position relative to each card and updates CSS variables
        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.card-spotlight');

            const handleMouseMove = (e, card) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            };

            cards.forEach(card => {
                card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="GE8mpmmCRgK6XBF57jgF"></div>
</div>

<nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm font-extrabold text-white tracking-tight">JENNIFER CHIGOZIE</span>
</div>
<div className="hidden items-center gap-8 md:flex">
<a className="text-xs font-medium text-neutral-400 transition-colors hover:text-white" href="#work">Work</a>
<a className="text-xs font-medium text-neutral-400 transition-colors hover:text-white" href="#services">Services</a>
<a className="text-xs font-medium text-neutral-400 transition-colors hover:text-white" href="#about">About</a>
</div>
<a className="group relative flex h-8 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-xs font-medium text-white transition-all hover:bg-white/10 hover:border-white/20" href="#contact">
<span className="cursor-pointer" onclick="window.location.href='/wa.me/+2348107121087'" role="button">Contact Me</span>
<iconify-icon className="transition-transform group-hover:translate-x-0.5" icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
</nav>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute -top-[20%] left-[20%] h-[500px] w-[500px] animate-pulse-glow rounded-full bg-cyan-500/10 blur-[100px]"></div>
<div className="absolute top-[40%] -right-[10%] h-[600px] w-[600px] animate-drift rounded-full bg-blue-600/10 blur-[120px]"></div>
<div className="absolute bottom-[-10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[100px]"></div>
</div>

<main className="relative z-10 pt-32 pb-20">

<section className="text-center max-w-5xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-cyan-400 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                Available for new projects
            </div>
<h1 className="bg-clip-text lg:text-8xl md:text-5xl text-5xl font-extrabold text-transparent tracking-tighter bg-gradient-to-b from-white via-white to-neutral-500 mb-6">BUILDING DIGITAL <br/> EXPERIENCES THAT MATTER. </h1>
<p className="mx-auto mb-10 max-w-2xl text-lg text-neutral-400 md:text-xl font-light">
                I help visionary founders and startups build high-performance websites and applications with a focus on stunning UI and intuitive UX.
            </p>
<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
<button className="group relative flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-semibold text-black transition-all hover:bg-neutral-200">
<span>View Projects</span>
<iconify-icon className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 text-black" icon="lucide:arrow-down-right" width="16"></iconify-icon>
</button>
<button className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-8 text-sm font-medium text-white transition-all hover:bg-white/5">
<iconify-icon className="" icon="lucide:mail" width="16"></iconify-icon>
<span className="">Get in touch</span>
</button>
</div>
</section>

<section className="mx-auto mt-32 max-w-7xl px-6" id="work">
<div className="mb-12 flex items-end justify-between">
<div className="">
<h2 className="md:text-3xl text-3xl font-medium text-white tracking-tight">BUILT PROJECTS</h2>
<p className="text-sm text-neutral-400 mt-2">A list of recent interfaces and applications.</p>
</div>
<a className="hidden text-xs font-medium text-white underline decoration-neutral-700 underline-offset-4 transition-colors hover:decoration-white md:block" href="#">View all archives</a>
</div>

<div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 h-auto">

<div className="card-spotlight group col-span-1 md:col-span-2 md:row-span-2 cursor-pointer" style={{'--mouse-x': '112px', '--mouse-y': '546.1666870117188px'}}>
<div className="card-content flex flex-col h-full pt-8 pr-8 pb-8 pl-8 justify-between">
<div className="relative h-64 w-full overflow-hidden rounded-xl border border-white/5 bg-neutral-900 md:h-96">

<div className="absolute inset-x-8 top-8 bottom-0 rounded-t-lg border border-white/10 bg-[#0A0A0A] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2">
<div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-4 py-3">
<div className="h-2 w-2 rounded-full bg-red-500/50"></div>
<div className="h-2 w-2 rounded-full bg-yellow-500/50"></div>
<div className="h-2 w-2 rounded-full bg-green-500/50"></div>
</div>
<div className="p-6">
<div className="flex items-center justify-between">
<div className="h-8 w-8 rounded bg-blue-500/20"></div>
<div className="h-2 w-20 rounded bg-neutral-800"></div>
</div>
<div className="mt-8 grid grid-cols-3 gap-4">
<div className="h-24 rounded bg-neutral-800/50"></div>
<div className="h-24 rounded bg-neutral-800/50"></div>
<div className="h-24 rounded bg-neutral-800/50"></div>
</div>
<div className="mt-4 space-y-2">
<div className="h-2 w-full rounded bg-neutral-800"></div>
<div className="h-2 w-2/3 rounded bg-neutral-800"></div>
</div>
</div>
</div>
</div>
<div className="mt-6">
<div className="mb-2 flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></span>
<span className="text-xs font-medium uppercase tracking-wider text-cyan-400">Fintech</span>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white">Nexus Dashboard</h3>
<p className="mt-2 text-sm leading-relaxed text-neutral-400">A comprehensive financial analytics platform for enterprise clients. Focused on data visualization and real-time socket updates.</p>
</div>
</div>
</div>

<div className="card-spotlight group col-span-1 cursor-pointer" style={{'--mouse-x': '20.6666259765625px', '--mouse-y': '104.83332824707031px'}}>
<div className="card-content flex h-full flex-col justify-between p-8">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors group-hover:bg-white/10">
<iconify-icon className="" icon="lucide:zap" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium text-white tracking-tight">Volt UI Kit</h3>
<p className="mt-2 text-sm text-neutral-400">A React component library designed for speed and accessibility.</p>
</div>
<div className="mt-4 flex items-center gap-4 border-t border-white/5 pt-4">
<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full border border-black bg-neutral-700"></div>
<div className="h-6 w-6 rounded-full border border-black bg-neutral-600"></div>
</div>
<span className="text-xs text-neutral-500">Used by 400+ devs</span>
</div>
</div>
</div>

<div className="card-spotlight group col-span-1 cursor-pointer">
<div className="card-content flex h-full flex-col p-0">
<div className="relative h-40 w-full overflow-hidden border-b border-white/5 bg-gradient-to-br from-purple-900/20 to-indigo-900/20">
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white/20 group-hover:text-white/40 transition-colors" icon="lucide:image" width="32"></iconify-icon>
</div>
<div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-purple-500/20 blur-xl"></div>
</div>
<div className="flex-1 p-6">
<h3 className="text-lg font-medium tracking-tight text-white">Artify AI</h3>
<p className="mt-2 text-sm text-neutral-400">Generative art platform landing page with WebGL interactions.</p>
</div>
</div>
</div>

<div className="card-spotlight group col-span-1 md:col-span-3" style={{'--mouse-x': '82px', '--mouse-y': '221.8333282470703px'}}>
<div className="card-content grid grid-cols-1 gap-8 p-8 md:grid-cols-2 items-center">
<div className="">
<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium text-neutral-300">
<iconify-icon icon="lucide:code-2" width="12"></iconify-icon>
<span>Open Source</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">Linear Clone</h3>
<p className="mt-2 text-sm leading-relaxed text-neutral-400">
                                A full-stack issue tracking application rebuilding the core features of Linear. Built with Next.js 14, Supabase, and Tailwind CSS. Features optimistic UI and offline support.
                            </p>
<div className="mt-6 flex gap-4">
<button className="text-xs font-medium text-white hover:text-cyan-400 flex items-center gap-1 transition-colors">
                                    Live Demo <iconify-icon icon="lucide:external-link" width="12"></iconify-icon>
</button>
<button className="text-xs font-medium text-neutral-400 hover:text-white flex items-center gap-1 transition-colors">
                                    GitHub <iconify-icon icon="lucide:github" width="12"></iconify-icon>
</button>
</div>
</div>
<div className="relative h-48 w-full overflow-hidden rounded-lg border border-white/10 bg-black/40 p-4">

<div className="font-mono text-[10px] text-neutral-500">
<p><span className="text-purple-400">import</span> { useState } <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;</p>
<p className="mt-2"><span className="text-blue-400">export default</span> <span className="text-purple-400">function</span> <span className="text-yellow-200">TaskCard</span>({ task }) {</p>
<p className="pl-4"><span className="text-purple-400">return</span> (</p>
<p className="pl-8"><span className="text-neutral-600">&lt;</span><span className="text-red-400">motion.div</span> <span className="text-orange-300">layoutId</span>=<span className="text-green-400">"card"</span><span className="text-neutral-600">&gt;</span></p>
<p className="pl-12 text-white/80">
                                     {task.title}
                                 </p>
<p className="pl-8"><span className="text-neutral-600">&lt;/</span><span className="text-red-400">motion.div</span><span className="text-neutral-600">&gt;</span></p>
<p className="pl-4">);</p>
<p>}</p>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto mt-32 max-w-5xl px-6" id="services">
<h2 className="text-center text-3xl font-medium tracking-tight text-white">Capabilities</h2>
<p className="mx-auto mt-3 text-center text-sm text-neutral-400 max-w-md">Bridging the gap between design and engineering with a comprehensive skill set.</p>
<div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">

<div className="card-spotlight group p-6 text-center cursor-default" style={{'--mouse-x': '73px', '--mouse-y': '60.5px'}}>
<div className="card-content">
<div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-500/20 transition-all">
<iconify-icon icon="lucide:layout" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white">UI/UX Design</h3>
<p className="mt-2 text-xs text-neutral-500">Figma, Prototyping, Design Systems</p>
</div>
</div>
<div className="card-spotlight group p-6 text-center cursor-default" style={{'--mouse-x': '136px', '--mouse-y': '57.5px'}}>
<div className="card-content">
<div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 group-hover:text-purple-300 group-hover:bg-purple-500/20 transition-all">
<iconify-icon icon="lucide:code" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white">Frontend</h3>
<p className="mt-2 text-xs text-neutral-500">React, Vue, Tailwind, TypeScript</p>
</div>
</div>
<div className="card-spotlight group p-6 text-center cursor-default" style={{'--mouse-x': '19px', '--mouse-y': '4.5px'}}>
<div className="card-content">
<div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-400 group-hover:text-green-300 group-hover:bg-green-500/20 transition-all">
<iconify-icon icon="lucide:database" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white">Backend</h3>
<p className="mt-2 text-xs text-neutral-500">Node.js, Supabase, PostgreSQL</p>
</div>
</div>
<div className="card-spotlight group p-6 text-center cursor-default">
<div className="card-content">
<div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-orange-400 group-hover:text-orange-300 group-hover:bg-orange-500/20 transition-all">
<iconify-icon icon="lucide:rocket" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white">Optimization</h3>
<p className="mt-2 text-xs text-neutral-500">SEO, Performance, Analytics</p>
</div>
</div>
</div>
</section>

<section className="mx-auto mt-32 max-w-4xl px-6 pb-20" id="contact">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/40 p-10 text-center md:p-20">

<div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-cyan-900/10"></div>
<div className="relative z-10">
<h2 className="mb-4 text-3xl font-medium tracking-tight text-white md:text-5xl">Ready to build the future?</h2>
<p className="mx-auto mb-8 max-w-lg text-neutral-400 text-sm md:text-base">Let's collaborate to turn your innovative ideas into a high-quality digital reality. Open for freelance and contract work.</p>
<a className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-semibold text-black transition-transform hover:scale-105 active:scale-95" href="mailto:hello@alexdev.io">
<span>Start a Conversation</span>
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12">
<div className="flex flex-col gap-6 md:flex-row max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-500">© 2024 Jennifer Chigozie. All rights reserved.</span>
</div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg className="" data-icon-set="lucide" data-lucide="twitter" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon className="" icon="lucide:github" width="18"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" width="18"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg className="" data-icon-set="lucide" data-lucide="dribbble" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94m19.5 1.9c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></g></svg>
</a>
</div>
</div>
</footer>
</main>


    </>
  );
}
