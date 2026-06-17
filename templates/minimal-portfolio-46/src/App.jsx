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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-neutral-950/70 border-b border-neutral-900/50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2 uppercase" href="#">
<span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                RORY ULLOA.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-white transition-colors duration-200" href="#work">Work</a>
<a className="hover:text-white transition-colors duration-200" href="#approach">Approach</a>
<a className="hover:text-white transition-colors duration-200" href="#contact">Contact</a>
</div>
<a className="hidden md:inline-flex h-9 items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-medium text-neutral-950 transition-colors hover:bg-neutral-200" href="#contact">
                Start a project
            </a>
<button className="md:hidden text-white flex items-center justify-center">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="flex-grow pt-32 pb-16 md:pt-48 md:pb-32 px-6">
<div className="max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Available for new opportunities
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-white leading-[1.1] mb-6">
                Crafting digital experiences that perform.
            </h1>
<p className="text-base md:text-lg text-neutral-500 max-w-2xl mb-10 leading-relaxed">
                I'm Rory, a web designer and developer building high-end websites for modern brands, retail spaces, and startups. Combining minimal aesthetics with robust engineering to drive real business results.
            </p>
<div className="flex flex-wrap items-center gap-4">
<a className="h-10 inline-flex items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200 gap-2" href="#work">
                    View Portfolio
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<div className="flex items-center gap-4 px-4">
<iconify-icon className="text-neutral-600 hover:text-white transition-colors" icon="solar:figma-linear" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="text-neutral-600 hover:text-white transition-colors" icon="solar:code-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="text-neutral-600 hover:text-white transition-colors" icon="solar:server-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>
</main>

<section className="py-24 px-6 border-t border-neutral-900 bg-neutral-950/50" id="work">
<div className="max-w-6xl mx-auto">
<div className="flex items-end justify-between mb-16">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-2">Selected Works</h2>
<p className="text-sm text-neutral-500">Recent projects and case studies.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">

<a className="group block cursor-pointer" href="https://www.smokeshopgrowth.com" target="_blank">
<div className="relative aspect-[4/3] rounded-2xl bg-[#0c0c0c] border border-neutral-800/80 overflow-hidden mb-6 flex flex-col justify-between p-6 md:p-8 transition-transform duration-500 group-hover:scale-[1.02]">

<div className="w-full flex items-center justify-between mb-8 opacity-40">
<div className="text-white text-xs font-medium tracking-tighter uppercase">smokeshopgrowth.com</div>
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
</div>
</div>

<div className="flex-grow flex flex-col items-center justify-center text-center max-w-sm mx-auto space-y-4">
<div className="w-16 h-16 rounded-full bg-gradient-to-tr from-neutral-800 to-neutral-600 flex items-center justify-center mb-2 shadow-2xl">
<iconify-icon className="text-white" icon="solar:graph-up-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="w-3/4 h-3 bg-neutral-800 rounded-full mx-auto"></div>
<div className="w-1/2 h-2 bg-neutral-800/50 rounded-full mx-auto"></div>

<div className="grid grid-cols-3 gap-3 w-full mt-6">
<div className="aspect-square bg-neutral-800/40 rounded-lg border border-neutral-800/50"></div>
<div className="aspect-square bg-neutral-800/40 rounded-lg border border-neutral-800/50"></div>
<div className="aspect-square bg-neutral-800/40 rounded-lg border border-neutral-800/50"></div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60"></div>
</div>
<div className="pl-2">
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-medium tracking-tight text-white">Smoke Shop Growth</h3>
<div className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-500 group-hover:bg-white group-hover:text-neutral-950 group-hover:border-white transition-all duration-300">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<p className="text-sm text-neutral-500 leading-relaxed mb-4 max-w-md">
                            My personal business platform dedicated to scaling smoke shops digitally. Built a high-performance headless storefront with custom flows, optimized product discovery, and tailored growth solutions.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">Founder</span>
<span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">Next.js</span>
<span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">Web Design</span>
</div>
</div>
</a>

<a className="group block cursor-pointer" href="#">
<div className="relative aspect-[4/3] rounded-2xl bg-neutral-100 border border-neutral-200 overflow-hidden mb-6 flex flex-col justify-between p-6 md:p-8 transition-transform duration-500 group-hover:scale-[1.02]">

<div className="w-full flex items-center justify-between mb-8 opacity-40">
<div className="text-neutral-950 text-xs font-medium tracking-tighter uppercase">lumina-tech.io</div>
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-neutral-300"></div>
<div className="w-2 h-2 rounded-full bg-neutral-300"></div>
</div>
</div>
<div className="flex-grow flex flex-col items-start justify-center max-w-sm space-y-4">
<div className="w-3/4 h-8 bg-neutral-200 rounded-md"></div>
<div className="w-full h-3 bg-neutral-200/50 rounded-full"></div>
<div className="w-5/6 h-3 bg-neutral-200/50 rounded-full"></div>
<div className="w-24 h-8 bg-neutral-950 rounded-full mt-4"></div>
</div>
</div>
<div className="pl-2">
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-medium tracking-tight text-white">Lumina SaaS Platform</h3>
<div className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-500 group-hover:bg-white group-hover:text-neutral-950 group-hover:border-white transition-all duration-300">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<p className="text-sm text-neutral-500 leading-relaxed mb-4 max-w-md">
                            Marketing site and dashboard design for a B2B analytics startup. Focused on communicating complex data flows through minimal, intuitive interface design and micro-interactions.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">Web App</span>
<span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">Dashboard</span>
</div>
</div>
</a>

<a className="group block cursor-pointer" href="#">
<div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-neutral-800/80 overflow-hidden mb-6 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">

<div className="w-48 h-[80%] rounded-[2rem] border-[6px] border-neutral-800 bg-neutral-950 relative overflow-hidden shadow-2xl flex flex-col">
<div className="absolute top-0 w-full h-6 flex justify-center pt-2">
<div className="w-16 h-4 bg-neutral-800 rounded-b-xl"></div>
</div>
<div className="mt-10 px-4 space-y-4">
<div className="w-full h-32 bg-neutral-900 rounded-xl"></div>
<div className="w-3/4 h-2 bg-neutral-800 rounded-full"></div>
<div className="w-1/2 h-2 bg-neutral-800 rounded-full"></div>
</div>
</div>
</div>
<div className="pl-2">
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-medium tracking-tight text-white">Aura Wellness App</h3>
<div className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-500 group-hover:bg-white group-hover:text-neutral-950 group-hover:border-white transition-all duration-300">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<p className="text-sm text-neutral-500 leading-relaxed mb-4 max-w-md">
                            A cross-platform mobile application focusing on mental wellness. Designed with accessibility and calm aesthetics in mind, utilizing fluid animations and soothing color palettes.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">Mobile Design</span>
<span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">React Native</span>
</div>
</div>
</a>

<a className="group block cursor-pointer" href="https://www.mcdesign.bio" target="_blank">
<div className="relative aspect-[4/3] rounded-2xl bg-[#0a0a0a] border border-neutral-800/80 overflow-hidden mb-6 flex flex-col justify-between p-6 md:p-8 transition-transform duration-500 group-hover:scale-[1.02]">

<div className="w-full flex items-center justify-between mb-8 opacity-40">
<div className="text-white text-xs font-medium tracking-tighter uppercase">mcdesign.bio</div>
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
</div>
</div>

<div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm mx-auto space-y-4">
<div className="w-full h-28 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 rounded-xl border border-neutral-800/50 flex items-center justify-center">
<iconify-icon className="text-neutral-500" icon="solar:layers-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="flex gap-3 w-full">
<div className="h-14 flex-1 bg-neutral-900/80 rounded-lg border border-neutral-800/50"></div>
<div className="h-14 flex-1 bg-neutral-900/80 rounded-lg border border-neutral-800/50"></div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60"></div>
</div>
<div className="pl-2">
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-medium tracking-tight text-white">MC Design</h3>
<div className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-500 group-hover:bg-white group-hover:text-neutral-950 group-hover:border-white transition-all duration-300">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<p className="text-sm text-neutral-500 leading-relaxed mb-4 max-w-md">
                            A sleek, high-end portfolio platform built for modern design professionals. Engineered to showcase visual work through clean typography and seamless, minimal interactions.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">Portfolio</span>
<span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">Web Design</span>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-900" id="approach">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-12">Core Capabilities</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-900 hover:border-neutral-800 transition-colors">
<div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center mb-6">
<iconify-icon className="text-white" icon="solar:pen-new-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-3">Interface Design</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Creating intuitive, accessible, and visually striking interfaces. Every component is designed with intent to guide the user naturally towards their goal.
                    </p>
</div>

<div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-900 hover:border-neutral-800 transition-colors">
<div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center mb-6">
<iconify-icon className="text-white" icon="solar:code-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-3">Web Development</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Writing clean, semantic, and performant code. I specialize in modern JavaScript frameworks and utility-first CSS to build robust architectures.
                    </p>
</div>

<div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-900 hover:border-neutral-800 transition-colors">
<div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center mb-6">
<iconify-icon className="text-white" icon="solar:rocket-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-3">Performance &amp; SEO</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Ensuring your site ranks well and loads instantly. Optimization isn't an afterthought; it's baked into the foundation of every project I touch.
                    </p>
</div>
</div>
</div>
</section>

<footer className="py-16 px-6 border-t border-neutral-900 bg-[#050505]" id="contact">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
<div className="max-w-md">
<h2 className="text-2xl font-medium tracking-tight text-white mb-4">Let's build something.</h2>
<p className="text-sm text-neutral-500 mb-8">
                    Currently accepting new projects. Whether you need a complete redesign like the Smoke Shop Growth platform or a focused web application, let's discuss your vision.
                </p>
<a className="inline-flex items-center gap-2 text-white hover:text-neutral-300 transition-colors group" href="mailto:rory@smokeshopgrowth.com">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium underline underline-offset-4 decoration-neutral-800 group-hover:decoration-neutral-500 transition-colors">rory@smokeshopgrowth.com</span>
</a>
</div>
<div className="flex flex-col gap-6 md:text-right w-full md:w-auto">
<div className="flex items-center gap-6 md:justify-end">
<a aria-label="Twitter" className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:bomb-emoji-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a aria-label="GitHub" className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:programming-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
<div className="text-xs text-neutral-600 flex flex-col gap-2">
<p>© 2024 Rory Ulloa. All rights reserved.</p>
<p>Designed and built with precision.</p>
</div>
</div>
</div>
</footer>

    </>
  );
}
