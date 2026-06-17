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
      

<div className="fixed inset-0 pointer-events-none z-0 flex justify-center overflow-hidden">
<div className="absolute top-[-20%] w-[800px] h-[600px] rounded-[100%] blur-[120px] bg-slate-200/20"></div>
</div>
<main className="w-full max-w-md relative z-10 space-y-10">

<header className="flex flex-col items-center text-center">
<div className="relative group cursor-pointer mb-6">

<div className="absolute -inset-1 bg-gradient-to-br rounded-full blur opacity-30 group-hover:opacity-80 transition duration-500 from-slate-300 to-slate-100"></div>
<div className="relative h-24 w-24 rounded-full border flex items-center justify-center shadow-xl overflow-hidden ring-1 bg-slate-100 border-slate-200 ring-black/5">
<span className="text-3xl font-medium tracking-tighter text-slate-800">AL</span>
</div>
</div>
<h1 className="text-2xl font-medium tracking-tight mb-2 text-slate-950">Alex Lin</h1>
<p className="text-sm font-normal max-w-[280px] leading-relaxed text-slate-600">
                Crafting digital experiences. Product engineer passionate about minimal design &amp; clean code.
            </p>
<div className="flex items-center justify-center gap-3 mt-6 text-xs font-medium text-slate-500">
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border backdrop-blur-sm bg-slate-100/60 border-slate-200/80">
<iconify-icon height="14" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
<span>San Francisco</span>
</div>
<a className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border backdrop-blur-sm transition-all duration-300 bg-slate-100/60 border-slate-200/80 hover:bg-slate-200 hover:border-slate-300 hover:text-slate-800" href="mailto:hello@example.com">
<iconify-icon height="14" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
<span>Contact</span>
</a>
</div>
</header>

<section className="space-y-3">

<a className="group relative flex items-center p-4 border rounded-2xl transition-all duration-300 backdrop-blur-md overflow-hidden shadow-sm bg-slate-100/80 border-slate-200 hover:bg-slate-200/80 hover:border-slate-300" href="#">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
<div className="relative flex items-center justify-center h-12 w-12 rounded-xl group-hover:text-slate-50 group-hover:bg-slate-700/60 transition-all duration-300 border group-hover:border-slate-600/50 bg-slate-200/60 text-slate-700 border-slate-300/50">
<iconify-icon height="22" icon="solar:globe-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div className="ml-4 flex-1 relative">
<h2 className="text-sm font-medium group-hover:text-white transition-colors text-slate-800">Personal Portfolio</h2>
<p className="text-xs font-normal text-slate-500 mt-0.5 group-hover:text-slate-400 transition-colors">alexlin.design</p>
</div>
<div className="relative flex items-center justify-center h-8 w-8 rounded-full border group-hover:border-slate-600 group-hover:bg-slate-800 transition-all duration-300 bg-slate-50/50 border-slate-200">
<iconify-icon className="group-hover:text-slate-200 transition-colors text-slate-500" height="16" icon="solar:arrow-right-up-linear" style={{color: 'rgb(226, 232, 240)'}} width="16"></iconify-icon>
</div>
</a>

<a className="group relative flex items-center p-4 border rounded-2xl transition-all duration-300 backdrop-blur-sm bg-slate-100/40 border-slate-200/60 hover:bg-slate-200/50 hover:border-slate-300" href="#">
<div className="relative flex items-center justify-center h-12 w-12 rounded-xl group-hover:text-slate-200 group-hover:bg-slate-700/40 transition-all duration-300 border group-hover:border-slate-700/50 bg-slate-200/30 text-slate-600 border-slate-200/50">
<iconify-icon height="22" icon="solar:code-square-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div className="ml-4 flex-1">
<h2 className="text-sm font-medium group-hover:text-slate-100 transition-colors text-slate-700">GitHub</h2>
<p className="text-xs font-normal text-slate-500 mt-0.5 group-hover:text-slate-400 transition-colors">Open source projects &amp; code</p>
</div>
<iconify-icon className="group-hover:text-slate-300 transform group-hover:translate-x-1 transition-all duration-300 text-slate-400" height="20" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</a>

<a className="group relative flex items-center p-4 border rounded-2xl transition-all duration-300 backdrop-blur-sm bg-slate-100/40 border-slate-200/60 hover:bg-slate-200/50 hover:border-slate-300" href="#">
<div className="relative flex items-center justify-center h-12 w-12 rounded-xl group-hover:text-slate-200 group-hover:bg-slate-700/40 transition-all duration-300 border group-hover:border-slate-700/50 bg-slate-200/30 text-slate-600 border-slate-200/50">
<iconify-icon height="22" icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div className="ml-4 flex-1">
<h2 className="text-sm font-medium group-hover:text-slate-100 transition-colors text-slate-700">Twitter / X</h2>
<p className="text-xs font-normal text-slate-500 mt-0.5 group-hover:text-slate-400 transition-colors">Thoughts on design &amp; tech</p>
</div>
<iconify-icon className="group-hover:text-slate-300 transform group-hover:translate-x-1 transition-all duration-300 text-slate-400" height="20" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</a>

<a className="group relative flex items-center p-4 border rounded-2xl transition-all duration-300 backdrop-blur-sm bg-slate-100/40 border-slate-200/60 hover:bg-slate-200/50 hover:border-slate-300" href="#">
<div className="relative flex items-center justify-center h-12 w-12 rounded-xl group-hover:text-slate-200 group-hover:bg-slate-700/40 transition-all duration-300 border group-hover:border-slate-700/50 bg-slate-200/30 text-slate-600 border-slate-200/50">
<iconify-icon height="22" icon="solar:case-minimalistic-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div className="ml-4 flex-1">
<h2 className="text-sm font-medium group-hover:text-slate-100 transition-colors text-slate-700">LinkedIn</h2>
<p className="text-xs font-normal text-slate-500 mt-0.5 group-hover:text-slate-400 transition-colors">Professional experience</p>
</div>
<iconify-icon className="group-hover:text-slate-300 transform group-hover:translate-x-1 transition-all duration-300 text-slate-400" height="20" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</a>
</section>

<section className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-200/50">
<a className="group flex flex-col p-4 border rounded-2xl transition-all duration-300 bg-slate-100/30 border-slate-200/50 hover:bg-slate-200/60 hover:border-slate-300" href="#">
<div className="flex items-center justify-between mb-3">
<iconify-icon className="text-slate-500 group-hover:text-slate-300 transition-colors" height="20" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<iconify-icon className="group-hover:text-slate-400 transition-colors text-slate-300" height="14" icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</div>
<h3 className="text-sm font-medium group-hover:text-slate-100 transition-colors mb-0.5 text-slate-700">Resume</h3>
<p className="text-xs font-normal group-hover:text-slate-400 transition-colors text-slate-400">View PDF</p>
</a>
<a className="group flex flex-col p-4 border rounded-2xl transition-all duration-300 bg-slate-100/30 border-slate-200/50 hover:bg-slate-200/60 hover:border-slate-300" href="#">
<div className="flex items-center justify-between mb-3">
<iconify-icon className="text-slate-500 group-hover:text-slate-300 transition-colors" height="20" icon="solar:calendar-minimalistic-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<iconify-icon className="group-hover:text-slate-400 transition-colors text-slate-300" height="14" icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</div>
<h3 className="text-sm font-medium group-hover:text-slate-100 transition-colors mb-0.5 text-slate-700">Book a call</h3>
<p className="text-xs font-normal group-hover:text-slate-400 transition-colors text-slate-400">15 min chat</p>
</a>
</section>
</main>
<footer className="mt-16 text-center z-10 pb-4">
<p className="text-xs font-medium text-slate-400">
            © 2024 Alex Lin. All rights reserved.
        </p>
</footer>

    </>
  );
}
