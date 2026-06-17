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
      

<div className="fixed inset-0 pointer-events-none">
<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
</div>

<div className="relative w-full h-full max-w-[1600px] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 z-10">

<div className="animate-blur-sequence delay-1 group relative flex flex-col justify-between p-8 md:p-10 lg:p-12 bg-slate-800/40 backdrop-blur-xl border border-neutral-800 rounded-3xl hover:bg-slate-800/50 transition-colors duration-500 overflow-hidden">

<div className="flex items-start justify-between">
<div className="tracking-tight font-semibold text-lg text-slate-100">EA.</div>
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs font-medium text-blue-400">Open to work</span>
</div>
</div>
<div className="space-y-6 mt-12 md:mt-0">
<div className="space-y-2">
<h1 className="text-4xl md:text-5xl font-semibold text-slate-100 tracking-tight leading-[1.1]">
                        Designing the <span className="text-blue-500">future</span> of digital interfaces.
                    </h1>
<p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-md">
                        I'm Ethan, a product designer and developer crafting refined digital experiences with a focus on motion and typography.
                    </p>
</div>
</div>
<div className="mt-8">
<button className="group/btn flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
<span>Read my story</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover/btn:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="animate-blur-sequence delay-2 relative flex flex-col p-8 md:p-10 bg-slate-800/40 backdrop-blur-xl border border-neutral-800 rounded-3xl hover:bg-slate-800/50 transition-colors duration-500 overflow-y-auto">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-semibold text-slate-100 tracking-tight">Selected Work</h2>
<a className="text-xs font-medium text-slate-500 hover:text-blue-400 transition-colors" href="#">View All</a>
</div>
<div className="flex flex-col gap-2 h-full">

<a className="group flex items-center justify-between p-4 -mx-4 rounded-xl hover:bg-slate-700/30 transition-all duration-300" href="#">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-slate-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors">
<svg className="lucide lucide-layers w-6 h-6" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<div>
<h3 className="text-base font-semibold text-slate-200 group-hover:text-white">Velox System</h3>
<p className="text-xs text-slate-500">Design System, React</p>
</div>
</div>
<div className="w-8 h-8 flex items-center justify-center rounded-full border border-transparent group-hover:border-neutral-700 opacity-0 group-hover:opacity-100 transition-all">
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-slate-400" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a>

<a className="group flex items-center justify-between p-4 -mx-4 rounded-xl hover:bg-slate-700/30 transition-all duration-300" href="#">
<div className="flex gap-x-4 gap-y-4 items-center">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-slate-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors">
<svg className="lucide lucide-activity w-6 h-6" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="">
<h3 className="text-base font-semibold text-slate-200 group-hover:text-white">Pulse Finance</h3>
<p className="text-xs text-slate-500">Dashboard, Fintech</p>
</div>
</div>
<div className="w-8 h-8 flex items-center justify-center rounded-full border border-transparent group-hover:border-neutral-700 opacity-0 group-hover:opacity-100 transition-all">
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-slate-400" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a>

<a className="group flex items-center justify-between p-4 -mx-4 rounded-xl hover:bg-slate-700/30 transition-all duration-300" href="#">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-slate-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors">
<svg className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div>
<h3 className="text-base font-semibold text-slate-200 group-hover:text-white">Hyperion</h3>
<p className="text-xs text-slate-500">SaaS, Branding</p>
</div>
</div>
<div className="w-8 h-8 flex items-center justify-center rounded-full border border-transparent group-hover:border-neutral-700 opacity-0 group-hover:opacity-100 transition-all">
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-slate-400" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a>
</div>
</div>

<div className="animate-blur-sequence delay-3 relative flex flex-col p-8 md:p-10 bg-slate-800/40 backdrop-blur-xl border border-neutral-800 rounded-3xl hover:bg-slate-800/50 transition-colors duration-500">
<h2 className="text-2xl font-semibold text-slate-100 tracking-tight mb-8">Expertise</h2>
<div className="grid grid-cols-2 gap-8 h-full">
<div className="space-y-4">
<div className="flex items-center gap-3 text-blue-400 mb-2">
<svg className="lucide lucide-layout-grid w-5 h-5" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
<h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Design</h4>
</div>
<ul className="space-y-2">
<li className="text-sm text-slate-300 hover:text-white transition-colors cursor-default">User Interface</li>
<li className="text-sm text-slate-300 hover:text-white transition-colors cursor-default">Interaction Design</li>
<li className="text-sm text-slate-300 hover:text-white transition-colors cursor-default">Design Systems</li>
<li className="text-sm text-slate-300 hover:text-white transition-colors cursor-default">Prototyping</li>
</ul>
</div>
<div className="space-y-4">
<div className="flex items-center gap-3 text-blue-400 mb-2">
<svg className="lucide lucide-code-2 w-5 h-5" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
<h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Engineering</h4>
</div>
<ul className="space-y-2">
<li className="text-sm text-slate-300 hover:text-white transition-colors cursor-default">Frontend Architecture</li>
<li className="text-sm text-slate-300 hover:text-white transition-colors cursor-default">React &amp; Next.js</li>
<li className="text-sm text-slate-300 hover:text-white transition-colors cursor-default">TypeScript</li>
<li className="text-sm text-slate-300 hover:text-white transition-colors cursor-default">WebGL / Three.js</li>
</ul>
</div>
</div>
<div className="mt-auto pt-6 border-t border-neutral-800/50">
<div className="flex gap-4">

<div className="p-2 bg-neutral-900 rounded-lg border border-neutral-800 text-slate-400"><svg className="lucide lucide-figma w-5 h-5" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg></div>
<div className="p-2 bg-neutral-900 rounded-lg border border-neutral-800 text-slate-400"><svg className="lucide lucide-framer w-5 h-5" data-lucide="framer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"></path></svg></div>
<div className="p-2 bg-neutral-900 rounded-lg border border-neutral-800 text-slate-400"><svg className="lucide lucide-codepen w-5 h-5" data-lucide="codepen" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" x2="12" y1="22" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" x2="12" y1="2" y2="8.5"></line></svg></div>
<div className="p-2 bg-neutral-900 rounded-lg border border-neutral-800 text-slate-400"><svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></div>
</div>
</div>
</div>

<div className="animate-blur-sequence delay-4 relative flex flex-col justify-between p-8 md:p-10 bg-slate-800/40 backdrop-blur-xl border border-neutral-800 rounded-3xl hover:bg-slate-800/50 transition-colors duration-500">
<div>
<h2 className="text-2xl font-semibold text-slate-100 tracking-tight mb-2">Let's Connect</h2>
<p className="text-sm text-slate-400">Have a project in mind? Let's build something extraordinary together.</p>
</div>
<div className="flex flex-col gap-4 justify-center items-start my-auto">
<a className="group flex items-center gap-3 text-2xl md:text-3xl font-semibold text-slate-200 hover:text-blue-500 transition-colors tracking-tight" href="mailto:hello@ethan.design">
<span>hello@ethan.design</span>
<svg className="lucide lucide-arrow-up-right w-6 h-6 text-slate-600 group-hover:text-blue-500 transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-2 gap-4">
<button className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-100 text-slate-900 font-semibold text-sm hover:bg-white transition-colors">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>Book a Call</span>
</button>
<button className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-700/30 text-slate-200 font-semibold text-sm border border-neutral-700 hover:bg-slate-700/50 hover:border-neutral-600 transition-all">
<svg className="lucide lucide-copy w-4 h-4" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
<span>Copy CV</span>
</button>
</div>
</div>
</div>


    </>
  );
}
