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



tailwind.config = {
theme: {
extend: {
colors: {
desperado: {
bg: '#020405',     /* Deepest Black/Teal */
surface: '#081014', /* Slightly lighter */
accent: '#2dd4bf',  /* Teal 400 */
cyan: '#06b6d4',    /* Cyan 500 */
}
}
}
}
}



        // Initialize Icons
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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">

<div className="relative w-8 h-8 flex items-center justify-center">
<div className="absolute w-2 h-4 bg-gradient-to-b from-teal-400 to-cyan-500 rounded-sm -translate-x-2 translate-y-1 group-hover:-translate-y-0 transition-transform duration-300"></div>
<div className="absolute w-2 h-5 bg-gradient-to-b from-teal-300 to-cyan-400 rounded-sm z-10 group-hover:-translate-y-1 transition-transform duration-300 delay-75"></div>
<div className="absolute w-2 h-4 bg-gradient-to-b from-teal-400 to-cyan-500 rounded-sm translate-x-2 translate-y-1 group-hover:-translate-y-0 transition-transform duration-300 delay-100"></div>
</div>
<span className="text-lg font-semibold tracking-tight text-white group-hover:text-teal-200 transition-colors">DESPERADO</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-teal-400 transition-colors" href="#work">Work</a>
<a className="hover:text-teal-400 transition-colors" href="#services">Services</a>
<a className="hover:text-teal-400 transition-colors" href="#about">About</a>
<a className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-teal-500/50 transition-all" href="#contact">
                    Contact
                </a>
</div>

<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>
<main className="relative pt-32 pb-20 px-6 max-w-5xl mx-auto">

<section className="min-h-[80vh] flex flex-col justify-center mb-24 relative">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="space-y-6 max-w-3xl">
<div className="animate-enter inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/10 border border-teal-500/20 text-teal-400 text-xs font-medium tracking-wide uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                    Available for new projects
                </div>
<h1 className="animate-enter delay-100 text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1]">
                    Crafting digital <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-teal-300">experiences</span> that matter.
                </h1>
<p className="animate-enter delay-200 text-xl text-slate-400 max-w-xl leading-relaxed">
                    We are a full-stack design and development agency. We build scalable products, immersive interfaces, and robust backends for forward-thinking companies.
                </p>
<div className="animate-enter delay-300 flex flex-wrap gap-4 pt-4">
<a className="inline-flex items-center gap-2 px-6 py-3 bg-white text-desperado-bg font-medium rounded-lg hover:bg-teal-50 transition-colors" href="#work">
                        View Selected Work
                        <i className="w-4 h-4" data-lucide="arrow-down-right"></i>
</a>
<a className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-colors" href="mailto:hello@desperado.dev">
                        Get in Touch
                    </a>
</div>
</div>

<div className="animate-enter delay-400 mt-24 pt-10 border-t border-white/5">
<p className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-6">Powering ideas with</p>
<div className="flex flex-wrap gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<i className="w-8 h-8 text-teal-400" data-lucide="code-2"></i>
<i className="w-8 h-8 text-cyan-400" data-lucide="database"></i>
<i className="w-8 h-8 text-teal-300" data-lucide="cpu"></i>
<i className="w-8 h-8 text-blue-400" data-lucide="globe"></i>
<i className="w-8 h-8 text-emerald-400" data-lucide="layers"></i>
<i className="w-8 h-8 text-sky-400" data-lucide="cloud"></i>
</div>
</div>
</section>

<section className="py-24" id="work">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Selected Work</h2>
<p className="text-lg text-slate-400">Highlights from our recent partnerships.</p>
</div>
<a className="text-teal-400 hover:text-teal-300 text-sm font-medium flex items-center gap-1 group" href="#">
                    View Archive <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<article className="group relative card-hover bg-desperado-surface border border-white/5 rounded-2xl overflow-hidden transition-all duration-300">
<div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">

<div className="absolute inset-4 bg-slate-950/50 rounded-lg border border-white/5 shadow-2xl transform group-hover:scale-[1.02] group-hover:-translate-y-1 transition-transform duration-500 flex flex-col">
<div className="h-6 border-b border-white/5 flex items-center px-3 gap-1.5">
<div className="w-2 h-2 rounded-full bg-red-500/20"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
<div className="w-2 h-2 rounded-full bg-green-500/20"></div>
</div>
<div className="flex-1 p-4">
<div className="h-full w-full bg-gradient-to-br from-teal-500/10 to-transparent rounded"></div>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-desperado-surface to-transparent opacity-60"></div>
</div>
<div className="p-8">
<div className="flex items-center justify-between mb-3">
<h3 className="text-xl font-semibold text-white group-hover:text-teal-400 transition-colors">FinTech Dashboard</h3>
<i className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<p className="text-slate-400 mb-4 text-base">A comprehensive financial analytics platform handling millions in real-time transactions.</p>
<div className="flex gap-2">
<span className="px-2.5 py-1 rounded bg-white/5 text-xs text-slate-300 font-medium">React</span>
<span className="px-2.5 py-1 rounded bg-white/5 text-xs text-slate-300 font-medium">TypeScript</span>
<span className="px-2.5 py-1 rounded bg-white/5 text-xs text-slate-300 font-medium">Node.js</span>
</div>
</div>
</article>

<article className="group relative card-hover bg-desperado-surface border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 md:translate-y-12">
<div className="aspect-[4/3] bg-gradient-to-br from-slate-900 to-black relative overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 bg-teal-500/20 rounded-full blur-2xl absolute animate-pulse"></div>
<i className="w-24 h-24 text-slate-700 relative z-10 transform group-hover:scale-110 transition-transform duration-500" data-lucide="smartphone"></i>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-desperado-surface to-transparent opacity-60"></div>
</div>
<div className="p-8">
<div className="flex items-center justify-between mb-3">
<h3 className="text-xl font-semibold text-white group-hover:text-teal-400 transition-colors">HealthSync App</h3>
<i className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<p className="text-slate-400 mb-4 text-base">Mobile application bridging patients and healthcare providers with secure messaging.</p>
<div className="flex gap-2">
<span className="px-2.5 py-1 rounded bg-white/5 text-xs text-slate-300 font-medium">React Native</span>
<span className="px-2.5 py-1 rounded bg-white/5 text-xs text-slate-300 font-medium">GraphQL</span>
</div>
</div>
</article>

<article className="group relative card-hover bg-desperado-surface border border-white/5 rounded-2xl overflow-hidden transition-all duration-300">
<div className="aspect-[4/3] bg-gradient-to-br from-indigo-950/20 to-purple-900/10 relative overflow-hidden">

<div className="absolute inset-x-8 top-8 bottom-0 bg-slate-950/80 rounded-t-lg border-t border-x border-white/10 transform group-hover:translate-y-2 transition-transform duration-500">
<div className="p-4 grid grid-cols-3 gap-2">
<div className="h-16 bg-white/5 rounded"></div>
<div className="h-16 bg-white/5 rounded"></div>
<div className="h-16 bg-white/5 rounded"></div>
<div className="h-16 bg-white/5 rounded col-span-2"></div>
<div className="h-16 bg-white/5 rounded"></div>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-desperado-surface to-transparent opacity-60"></div>
</div>
<div className="p-8">
<div className="flex items-center justify-between mb-3">
<h3 className="text-xl font-semibold text-white group-hover:text-teal-400 transition-colors">E-Commerce Core</h3>
<i className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<p className="text-slate-400 mb-4 text-base">Headless e-commerce solution engineered for speed and conversion optimization.</p>
<div className="flex gap-2">
<span className="px-2.5 py-1 rounded bg-white/5 text-xs text-slate-300 font-medium">Next.js</span>
<span className="px-2.5 py-1 rounded bg-white/5 text-xs text-slate-300 font-medium">Stripe</span>
<span className="px-2.5 py-1 rounded bg-white/5 text-xs text-slate-300 font-medium">Postgres</span>
</div>
</div>
</article>

<article className="group relative card-hover bg-desperado-surface border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 md:translate-y-12">
<div className="aspect-[4/3] bg-gradient-to-br from-teal-900/10 to-emerald-900/10 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center gap-4">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-teal-400 to-cyan-400 opacity-80 shadow-lg shadow-teal-500/20 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500"></div>
<div className="w-16 h-16 rounded-2xl bg-slate-800 border border-white/10 opacity-80 transform rotate-12 group-hover:rotate-0 transition-transform duration-500"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-desperado-surface to-transparent opacity-60"></div>
</div>
<div className="p-8">
<div className="flex items-center justify-between mb-3">
<h3 className="text-xl font-semibold text-white group-hover:text-teal-400 transition-colors">Desperado Design System</h3>
<i className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<p className="text-slate-400 mb-4 text-base">Our internal UI kit and design tokens package released open source.</p>
<div className="flex gap-2">
<span className="px-2.5 py-1 rounded bg-white/5 text-xs text-slate-300 font-medium">Figma</span>
<span className="px-2.5 py-1 rounded bg-white/5 text-xs text-slate-300 font-medium">Tailwind</span>
</div>
</div>
</article>
</div>
</section>

<section className="py-24 border-t border-white/5" id="services">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-16 text-center">Our Expertise</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
<div className="bg-desperado-bg p-10 group hover:bg-desperado-surface transition-colors">
<div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-teal-400" data-lucide="monitor"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Frontend Development</h3>
<p className="text-slate-400 leading-relaxed text-base">Pixel-perfect implementation using modern frameworks like React, Vue, and Next.js.</p>
</div>
<div className="bg-desperado-bg p-10 group hover:bg-desperado-surface transition-colors">
<div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-cyan-400" data-lucide="server"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Backend Systems</h3>
<p className="text-slate-400 leading-relaxed text-base">Scalable APIs, database architecture, and cloud infrastructure on AWS and Vercel.</p>
</div>
<div className="bg-desperado-bg p-10 group hover:bg-desperado-surface transition-colors">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-emerald-400" data-lucide="pen-tool"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">UI/UX Design</h3>
<p className="text-slate-400 leading-relaxed text-base">User-centric design, wireframing, and interactive prototyping that drives engagement.</p>
</div>
</div>
</section>

<section className="py-24 grid md:grid-cols-2 gap-16 items-center" id="about">
<div className="order-2 md:order-1">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">About Desperado</h2>
<div className="space-y-4 text-lg text-slate-400 leading-relaxed">
<p>Founded in 2023, Desperado was born from a desire to bridge the gap between aesthetic excellence and technical robustness. We don't just write code; we solve problems.</p>
<p>Our team consists of passionate engineers and designers who obsess over the details—from the millisecond load time to the pixel-perfect border radius.</p>
</div>
<div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-8">
<div>
<div className="text-3xl font-semibold text-white mb-1">20+</div>
<div className="text-sm text-slate-500 uppercase tracking-wider">Projects Shipped</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1">100%</div>
<div className="text-sm text-slate-500 uppercase tracking-wider">Client Retention</div>
</div>
</div>
</div>
<div className="order-1 md:order-2 relative">

<div className="aspect-square rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-800 border border-white/5 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
<div className="relative z-10 grid grid-cols-3 gap-4 transform -rotate-12">
<div className="w-12 h-32 bg-gradient-to-b from-teal-500 to-cyan-600 rounded-lg shadow-lg shadow-teal-900/50 translate-y-8 animate-[float_4s_ease-in-out_infinite]"></div>
<div className="w-12 h-40 bg-gradient-to-b from-teal-400 to-cyan-500 rounded-lg shadow-lg shadow-teal-900/50 animate-[float_4s_ease-in-out_infinite_1s]"></div>
<div className="w-12 h-32 bg-gradient-to-b from-teal-500 to-cyan-600 rounded-lg shadow-lg shadow-teal-900/50 translate-y-8 animate-[float_4s_ease-in-out_infinite_2s]"></div>
</div>
</div>
</div>
</section>

<section className="py-32 text-center relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-900/10 pointer-events-none"></div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ready to build something great?</h2>
<p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">We are currently accepting new projects. Let's discuss how we can help your business grow.</p>
<a className="inline-flex items-center gap-3 px-8 py-4 bg-white text-desperado-bg font-semibold rounded-full text-lg hover:scale-105 transition-transform duration-200" href="mailto:hello@desperado.dev">
                 Start a Project
                 <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</section>
<footer className="py-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<div className="w-4 h-4 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-sm"></div>
<span className="text-slate-300 font-medium">Desperado</span>
<span>© 2024</span>
</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
</div>
</footer>
</main>


    </>
  );
}
