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
      

<div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10 h-[100vh] w-full pointer-events-none"></div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-zinc-950/70 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-white" href="#">IZ</a>
<div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</div>
<a className="text-sm font-medium bg-white text-black px-4 py-1.5 rounded-full hover:bg-zinc-200 transition-colors" href="#contact">Let's Talk</a>
</div>
</nav>

<section className="pt-48 pb-24 px-6 max-w-6xl mx-auto flex flex-col items-center text-center relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-400 mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span> Available for new projects
        </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 max-w-4xl leading-tight">
            Imran Zahed
        </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed mb-10">
            Crafting precise digital experiences through Graphic Design, UI/UX, Motion Graphics, and Web Development.
        </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="text-sm font-medium bg-white text-black px-6 py-3 rounded-full hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#work">
                View Portfolio
            </a>
<a className="text-sm font-medium border border-zinc-800 bg-zinc-900/50 text-white px-6 py-3 rounded-full hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2" href="#contact">
<iconify-icon height="18" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon> Get in touch
            </a>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto" id="expertise">
<div className="mb-12 border-t border-white/5 pt-12">
<h2 className="text-3xl font-medium tracking-tight text-white mb-3">Areas of Expertise</h2>
<p className="text-base text-zinc-500 font-normal">A multidisciplinary approach to digital product creation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="p-8 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/60 transition-colors group">
<div className="w-10 h-10 rounded-lg border border-zinc-700/50 bg-zinc-800/50 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-white group-hover:border-zinc-600 transition-all">
<iconify-icon height="20" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Graphic Design</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-normal">Crafting compelling visual identities, branding, and marketing materials that communicate your core message effectively.</p>
</div>

<div className="p-8 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/60 transition-colors group">
<div className="w-10 h-10 rounded-lg border border-zinc-700/50 bg-zinc-800/50 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-white group-hover:border-zinc-600 transition-all">
<iconify-icon height="20" icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">UI/UX Design</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-normal">Designing intuitive, user-centric interfaces for web and mobile applications with a focus on seamless and logical experiences.</p>
</div>

<div className="p-8 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/60 transition-colors group">
<div className="w-10 h-10 rounded-lg border border-zinc-700/50 bg-zinc-800/50 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-white group-hover:border-zinc-600 transition-all">
<iconify-icon height="20" icon="solar:video-frame-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Motion Graphics</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-normal">Bringing static designs to life through deliberate animation, adding dynamic interactions and narrative flow to digital products.</p>
</div>

<div className="p-8 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/60 transition-colors group">
<div className="w-10 h-10 rounded-lg border border-zinc-700/50 bg-zinc-800/50 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-white group-hover:border-zinc-600 transition-all">
<iconify-icon height="20" icon="solar:code-square-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Web Development</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-normal">Building responsive, highly performant, and accessible websites, transforming complex designs into functional, flawless code.</p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto" id="work">
<div className="mb-12 border-t border-white/5 pt-12 flex justify-between items-end">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-3">Selected Work</h2>
<p className="text-base text-zinc-500 font-normal">Recent projects spanning design and code.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group" href="#">
                View archive <iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900/50 border border-zinc-800/50 mb-4 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 shadow-2xl">
<div className="w-16 h-16 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-500 blur-sm opacity-50"></div>
<div className="absolute w-16 h-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-md"></div>
</div>
</div>
<div className="flex justify-between items-start px-1">
<div>
<h3 className="text-lg font-medium tracking-tight text-white mb-1">Fintech App Experience</h3>
<p className="text-sm text-zinc-500 font-normal">UI/UX &amp; Motion</p>
</div>
<div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:border-zinc-500 group-hover:bg-zinc-800/50 transition-all">
<iconify-icon height="16" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900/50 border border-zinc-800/50 mb-4 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="grid grid-cols-2 gap-3 opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500">
<div className="w-14 h-14 bg-zinc-400 rounded-sm"></div>
<div className="w-14 h-14 bg-zinc-500 rounded-full"></div>
<div className="w-14 h-14 bg-zinc-600 rounded-tl-2xl"></div>
<div className="w-14 h-14 border border-zinc-400 rounded-sm"></div>
</div>
</div>
<div className="flex justify-between items-start px-1">
<div>
<h3 className="text-lg font-medium tracking-tight text-white mb-1">Nexus Brand Identity</h3>
<p className="text-sm text-zinc-500 font-normal">Graphic Design</p>
</div>
<div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:border-zinc-500 group-hover:bg-zinc-800/50 transition-all">
<iconify-icon height="16" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer md:col-span-2 mt-4">
<div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-zinc-900/50 border border-zinc-800/50 mb-4 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="flex gap-4 items-end opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 translate-y-8">
<div className="w-12 h-24 bg-zinc-300 rounded-t-md"></div>
<div className="w-12 h-40 bg-zinc-400 rounded-t-md"></div>
<div className="w-12 h-16 bg-zinc-500 rounded-t-md"></div>
<div className="w-12 h-32 bg-zinc-400 rounded-t-md"></div>
<div className="w-12 h-48 bg-zinc-300 rounded-t-md hidden sm:block"></div>
</div>
</div>
<div className="flex justify-between items-start px-1">
<div>
<h3 className="text-lg font-medium tracking-tight text-white mb-1">Aura E-commerce Platform</h3>
<p className="text-sm text-zinc-500 font-normal">Web Development &amp; UI</p>
</div>
<div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:border-zinc-500 group-hover:bg-zinc-800/50 transition-all">
<iconify-icon height="16" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6 mt-12 bg-zinc-950/50">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-medium tracking-tighter text-white">IZ</span>
</div>
<div className="flex gap-6 text-sm font-medium text-zinc-500">
<a className="hover:text-white transition-colors flex items-center gap-1.5" href="#">
<iconify-icon height="16" icon="solar:figma-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Figma
                </a>
<a className="hover:text-white transition-colors flex items-center gap-1.5" href="#">
<iconify-icon height="16" icon="solar:code-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> GitHub
                </a>
<a className="hover:text-white transition-colors flex items-center gap-1.5" href="#">
<iconify-icon height="16" icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> LinkedIn
                </a>
</div>
<div className="text-xs text-zinc-600 font-normal">
                © 2024 Imran Zahed. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
