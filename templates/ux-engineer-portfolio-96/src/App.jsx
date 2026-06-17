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
      
<div className="noise"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2 group" href="#">
<span className="w-8 h-8 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-xs group-hover:bg-neutral-800 transition-colors">
                    JX
                </span>
</a>
<div className="flex items-center gap-6 text-sm font-normal">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="text-white bg-white/10 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300" href="mailto:hello@portfolio.com">Contact</a>
</div>
</div>
</nav>
<main className="pt-32 pb-20 relative">

<section className="max-w-6xl mx-auto px-6 mb-32">
<div className="flex flex-col gap-8 max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-900/30 bg-green-900/10 w-fit">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-green-500 tracking-wide uppercase">Available for work</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[0.95]">
                    Designing the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">interface of tomorrow.</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-neutral-500 max-w-xl">
                    Senior Product Designer crafting digital experiences with a focus on motion, typography, and micro-interactions. Bridging the gap between design and engineering.
                </p>
<div className="flex pt-4 gap-x-4 gap-y-4">
<a className="group flex items-center gap-2 text-white border-b border-white/20 pb-1 hover:border-white transition-all" href="#work">
                        View Projects <svg className="lucide lucide-arrow-down-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-down-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10"></path><path d="M17 7v10H7"></path></svg>
</a>
</div>
</div>

<div className="absolute top-0 right-0 -z-10 opacity-20 overflow-hidden pointer-events-none w-full h-full">
<div className="absolute top-[10%] right-[10%] w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px]"></div>
<div className="absolute top-[20%] right-[30%] w-64 h-64 bg-rose-500/10 rounded-full blur-[96px]"></div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32" id="work">
<div className="flex items-end justify-between mb-12 border-b border-white/5 pb-6">
<h2 className="text-sm font-medium text-white tracking-widest uppercase opacity-80">Selected Work</h2>
<span className="text-xs text-neutral-600">2023 — 2024</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px] gap-x-6 gap-y-6">

<div className="group relative glass-card rounded-2xl p-8 lg:col-span-2 overflow-hidden flex flex-col justify-between cursor-pointer">
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
<svg className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<span className="text-sm font-medium text-indigo-300">System Design</span>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">Nexus Design System</h3>
<p className="text-sm text-neutral-500 max-w-sm">A comprehensive component library for enterprise-scale React applications, focusing on accessibility and tokenization.</p>
</div>

<div className="absolute bottom-0 right-0 w-[85%] h-[60%] bg-[#0f0f0f] rounded-tl-xl border-t border-l border-white/10 shadow-2xl group-hover:translate-y-[-10px] group-hover:translate-x-[-10px] transition-transform duration-500 ease-out p-6 overflow-hidden">

<div className="flex gap-4 mb-6">
<div className="w-1/3 h-8 bg-neutral-800 rounded animate-pulse"></div>
<div className="w-1/4 h-8 bg-neutral-800/50 rounded"></div>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="h-24 rounded-lg border border-indigo-500/30 bg-indigo-500/5 flex items-center justify-center">
<div className="w-8 h-8 rounded bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
</div>
<div className="h-24 rounded-lg border border-white/5 bg-neutral-900 flex items-center justify-center">
<div className="w-8 h-8 rounded border border-white/20"></div>
</div>
<div className="h-24 rounded-lg border border-white/5 bg-neutral-900 flex items-center justify-center">
<div className="w-6 h-6 rounded-full border-2 border-white/20 border-t-white"></div>
</div>
</div>
</div>
</div>

<div className="group relative glass-card rounded-2xl p-8 overflow-hidden flex flex-col justify-between cursor-pointer">
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<svg className="lucide lucide-smartphone w-5 h-5" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<span className="text-sm font-medium text-emerald-300">iOS</span>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">CoinFlow</h3>
<p className="text-sm text-neutral-500">Crypto wallet interaction model.</p>
</div>

<div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-48 h-80 bg-black border border-white/10 rounded-[2rem] shadow-2xl group-hover:bottom-[-30px] transition-all duration-500">
<div className="h-full w-full relative overflow-hidden rounded-[2rem]">
<div className="absolute top-4 w-16 h-4 left-1/2 -translate-x-1/2 bg-neutral-900 rounded-full z-20"></div>
<div className="p-4 pt-12 flex flex-col gap-3">
<div className="w-full h-32 bg-gradient-to-br from-emerald-900/40 to-black rounded-xl border border-emerald-500/20 flex flex-col justify-center items-center">
<span className="text-xs text-emerald-500 font-mono">$12,402.00</span>
</div>
<div className="flex gap-2">
<div className="h-10 w-full bg-neutral-900 rounded-lg"></div>
<div className="h-10 w-full bg-white/10 rounded-lg"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative glass-card rounded-2xl p-8 overflow-hidden flex flex-col justify-between cursor-pointer">
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
<svg className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<span className="text-sm font-medium text-rose-300">SaaS</span>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">Metrics AI</h3>
<p className="text-sm text-neutral-500">Analytics dashboard for data teams.</p>
</div>

<div className="absolute bottom-0 left-0 w-full h-40 px-8 pb-8 group-hover:scale-105 transition-transform duration-500">
<div className="flex items-end justify-between h-full gap-2 opacity-50">
<div className="w-full bg-rose-500/20 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-rose-500/40 rounded-t-sm h-[70%]"></div>
<div className="w-full bg-rose-500/60 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-rose-500/80 rounded-t-sm h-[85%]"></div>
<div className="w-full bg-rose-500 rounded-t-sm h-[60%]"></div>
</div>
</div>
</div>

<div className="group relative glass-card rounded-2xl p-8 lg:col-span-2 overflow-hidden flex flex-col justify-between cursor-pointer">
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
<svg className="lucide lucide-globe w-5 h-5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<span className="text-sm font-medium text-blue-300">Web</span>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">Linear Sync</h3>
<p className="text-sm text-neutral-500 max-w-sm">Marketing site redesign focusing on WebGL performance and scroll-driven animations.</p>
</div>

<div className="absolute top-12 right-[-20px] w-[60%] h-full bg-[#0a0a0a] rounded-tl-xl border border-white/10 shadow-2xl group-hover:translate-x-[-30px] transition-transform duration-500 overflow-hidden">
<div className="h-8 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="p-6 relative">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)]"></div>
<div className="h-4 w-1/2 bg-white/20 rounded mb-4"></div>
<div className="h-2 w-3/4 bg-white/10 rounded mb-2"></div>
<div className="h-2 w-2/3 bg-white/10 rounded"></div>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="h-20 bg-white/5 rounded border border-white/5"></div>
<div className="h-20 bg-white/5 rounded border border-white/5"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32" id="about">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
<div className="">
<h2 className="text-sm font-medium text-white tracking-widest uppercase opacity-80 mb-8">Experience</h2>
<div className="space-y-8">
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h3 className="text-white font-medium text-lg group-hover:text-indigo-400 transition-colors">Senior Product Designer</h3>
<span className="text-xs text-neutral-500 font-mono">2021 — PRESENT</span>
</div>
<p className="text-sm text-neutral-400">Vercel Inc.</p>
<p className="text-sm text-neutral-600 mt-2 leading-relaxed">Leading design for deployment infrastructure and developer experience. Implemented the new design system.</p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h3 className="text-white font-medium text-lg group-hover:text-indigo-400 transition-colors">UI Engineer</h3>
<span className="text-xs text-neutral-500 font-mono">2019 — 2021</span>
</div>
<p className="text-sm text-neutral-400">Stripe</p>
<p className="text-sm text-neutral-600 mt-2 leading-relaxed">Contributed to the Checkout team. bridged design and frontend code (React/TS).</p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h3 className="text-white font-medium text-lg group-hover:text-indigo-400 transition-colors">Freelance</h3>
<span className="text-xs text-neutral-500 font-mono">2017 — 2019</span>
</div>
<p className="text-sm text-neutral-400">Self-Employed</p>
<p className="text-sm text-neutral-600 mt-2 leading-relaxed">Worked with early stage startups to define MVP product strategies.</p>
</div>
</div>
</div>
<div className="">
<h2 className="text-sm font-medium text-white tracking-widest uppercase opacity-80 mb-8">Stack &amp; Tools</h2>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded bg-white/5 border border-white/5 text-xs text-neutral-300 hover:bg-white/10 hover:border-white/10 transition-colors cursor-default">Figma</span>
<span className="px-3 py-1.5 rounded bg-white/5 border border-white/5 text-xs text-neutral-300 hover:bg-white/10 hover:border-white/10 transition-colors cursor-default">React</span>
<span className="px-3 py-1.5 rounded bg-white/5 border border-white/5 text-xs text-neutral-300 hover:bg-white/10 hover:border-white/10 transition-colors cursor-default">TypeScript</span>
<span className="px-3 py-1.5 rounded bg-white/5 border border-white/5 text-xs text-neutral-300 hover:bg-white/10 hover:border-white/10 transition-colors cursor-default">Tailwind CSS</span>
<span className="px-3 py-1.5 rounded bg-white/5 border border-white/5 text-xs text-neutral-300 hover:bg-white/10 hover:border-white/10 transition-colors cursor-default">Next.js</span>
<span className="px-3 py-1.5 rounded bg-white/5 border border-white/5 text-xs text-neutral-300 hover:bg-white/10 hover:border-white/10 transition-colors cursor-default">Framer Motion</span>
<span className="px-3 py-1.5 rounded bg-white/5 border border-white/5 text-xs text-neutral-300 hover:bg-white/10 hover:border-white/10 transition-colors cursor-default">Three.js</span>
<span className="px-3 py-1.5 rounded bg-white/5 border border-white/5 text-xs text-neutral-300 hover:bg-white/10 hover:border-white/10 transition-colors cursor-default">Blender</span>
</div>
<h2 className="text-sm font-medium text-white tracking-widest uppercase opacity-80 mb-6 mt-12">Connect</h2>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><svg className="lucide lucide-dribbble w-5 h-5" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg></a>
</div>
</div>
</div>
</section>

<footer className="max-w-6xl mx-auto px-6 pt-12 pb-8 border-t border-white/5">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<p className="text-sm text-neutral-500">
                        © 2024 JX Portfolio. Built with precision.
                    </p>
</div>
<div className="flex items-center gap-6">
<div className="text-xs text-neutral-600 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Systems Operational
                   </div>
</div>
</div>
</footer>
</main>


    </>
  );
}
