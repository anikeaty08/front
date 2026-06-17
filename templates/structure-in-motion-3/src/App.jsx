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



      // Unicorn Studio Script
      !(function () {
        if (!window.UnicornStudio) {
          window.UnicornStudio = { isInitialized: !1 };
          var i = document.createElement("script");
          (i.src =
            "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js"),
            (i.onload = function () {
              window.UnicornStudio.isInitialized ||
                (UnicornStudio.init(),
                (window.UnicornStudio.isInitialized = !0));
            }),
            (document.head || document.body).appendChild(i);
        }
      })();
    


      document.addEventListener("DOMContentLoaded", () => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry, index) => {
              if (entry.isIntersecting) {
                entry.target.classList.remove("reveal-hidden");
                entry.target.classList.add("animate-in");
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1 }
        );

        const targets = document.querySelectorAll(
          "h1, h2, h3, p, button, .reveal-hidden"
        );
        targets.forEach((el) => {
          if (!el.closest(".animate-marquee-infinite")) {
            el.classList.add("reveal-hidden");
            observer.observe(el);
          }
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full z-0"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe></div></div>

<div className="fixed inset-0 w-full h-full -z-10 pointer-events-none brightness-110 saturate-125">
<div className="absolute inset-0 w-full h-full" data-us-project="7WRlj4TRuUxuldc6GVDM"></div>
</div>


<div className="absolute inset-0 z-10 w-full h-full pointer-events-none grid grid-cols-1 border-t border-white/10"></div>

<div className="relative z-20 w-full grid grid-cols-1 md:grid-cols-4 min-h-screen">

<div className="flex flex-col p-6 md:p-8 border-b md:border-b-0 border-r border-white/10 relative justify-between group">
<div className="absolute right-0 top-0 h-full w-[1px] bg-white/5 hidden md:block overflow-hidden">

<div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-red-500 to-transparent animate-beam opacity-80 shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
</div>
<div className="absolute -right-[5px] -top-[5px] text-white/30 text-[10px] hidden md:block z-20">
          +
        </div>
<div className="flex flex-col gap-1">
<span className="text-xs font-mono tracking-wider text-red-500">
            /// 01
          </span>
<span className="text-xs tracking-widest uppercase text-neutral-400 font-medium mt-2">
            Design Experiment
          </span>
</div>
<div className="mt-auto mb-8 max-w-xs">
<p className="text-sm text-neutral-300 leading-relaxed font-normal animate-in">
            A motion-first design study exploring structure, rhythm, and digital
            systems.
          </p>
</div>
</div>

<div className="hidden md:flex flex-col p-8 border-r border-white/10 relative justify-between">
<div className="absolute right-0 top-0 h-full w-[1px] bg-white/5 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-red-500 to-transparent animate-beam opacity-80 shadow-[0_0_15px_rgba(239,68,68,0.5)]" style={{animationDelay: '1.5s'}}></div>
</div>
<div className="absolute -right-[5px] -top-[5px] text-white/30 text-[10px] z-20">
          +
        </div>
</div>

<div className="hidden md:flex flex-col p-8 border-r border-white/10 relative justify-between">
<div className="absolute right-0 top-0 h-full w-[1px] bg-white/5 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-red-500 to-transparent animate-beam opacity-80 shadow-[0_0_15px_rgba(239,68,68,0.5)]" style={{animationDelay: '3s'}}></div>
</div>
<div className="absolute -right-[5px] -top-[5px] text-white/30 text-[10px] z-20">
          +
        </div>
</div>

<div className="flex flex-col md:p-8 pt-6 pr-6 pb-6 pl-6 relative justify-between">
<div className="flex justify-end md:justify-start">
<button className="flex items-center gap-2 text-xs text-white font-medium hover:text-red-500 transition-colors uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full bg-neutral-900/50 backdrop-blur-sm animate-in">
            Menu
            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="flex justify-end md:justify-start mt-auto mb-8">
<div className="relative group cursor-pointer">

<div className="absolute -inset-[1px] rounded-full bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#ef4444_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-spin blur-[0.5px]"></div>
<button className="relative bg-neutral-950/80 backdrop-blur-md border border-white/10 text-neutral-300 px-6 py-3 rounded-full flex items-center gap-3 shadow-lg group-hover:text-white group-hover:border-transparent transition-all duration-300 animate-in">
<span className="text-xs font-medium tracking-widest uppercase">
                Explore the System
              </span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-10 pointer-events-none hidden md:block">
<h1 className="text-huge leading-[0.85] text-white tracking-tighter font-syne font-semibold opacity-90 mix-blend-plus-lighter animate-in">
          STRUCTUREIN MOTION
        </h1>
</div>
</div>

<section className="z-20 overflow-hidden glass-section w-full border-t border-white/10 relative">

<div className="absolute inset-0 w-full h-full grid grid-cols-4 pointer-events-none z-10">
<div className="border-r border-white/10 h-full hidden md:block relative">
<div className="absolute -right-[5px] -top-[5px] text-white/30 text-[10px]">
            +
          </div>
</div>
<div className="border-r border-white/10 h-full hidden md:block relative">
<div className="absolute -right-[5px] -top-[5px] text-white/30 text-[10px]">
            +
          </div>
</div>
<div className="border-r border-white/10 h-full hidden md:block relative">
<div className="absolute -right-[5px] -top-[5px] text-white/30 text-[10px]">
            +
          </div>
</div>
<div className="hidden md:block"></div>
</div>
<div className="flex z-0 overflow-hidden py-12 relative items-center">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none"></div>
<div className="flex gap-20 animate-marquee-infinite whitespace-nowrap min-w-full">

<div className="flex items-center gap-20 shrink-0">
<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 group">
<svg aria-hidden="true" className="iconify w-6 h-6 group-hover:text-red-500 transition-colors iconify--lucide" data-icon="lucide:layers" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
<span className="text-lg font-semibold font-syne tracking-tight">
                Layers
              </span>
</div>
<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 group">
<svg aria-hidden="true" className="iconify w-6 h-6 group-hover:text-red-500 transition-colors iconify--lucide" data-icon="lucide:command" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-lg font-semibold font-syne tracking-tight">
                Command
              </span>
</div>
<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 group">
<svg aria-hidden="true" className="iconify w-6 h-6 group-hover:text-red-500 transition-colors iconify--lucide" data-icon="lucide:box" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg>
<span className="text-lg font-semibold font-syne tracking-tight">
                Modules
              </span>
</div>
<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 group">
<svg aria-hidden="true" className="iconify w-6 h-6 group-hover:text-red-500 transition-colors iconify--lucide" data-icon="lucide:zap" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-lg font-semibold font-syne tracking-tight">
                Energy
              </span>
</div>
<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 group">
<svg aria-hidden="true" className="iconify w-6 h-6 group-hover:text-red-500 transition-colors iconify--lucide" data-icon="lucide:hexagon" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-lg font-semibold font-syne tracking-tight">
                Vertex
              </span>
</div>
<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 group">
<svg aria-hidden="true" className="iconify w-6 h-6 group-hover:text-red-500 transition-colors iconify--lucide" data-icon="lucide:activity" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-lg font-semibold font-syne tracking-tight">
                Pulse
              </span>
</div>
<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 group">
<svg aria-hidden="true" className="iconify w-6 h-6 group-hover:text-red-500 transition-colors iconify--lucide" data-icon="lucide:globe" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg>
<span className="text-lg font-semibold font-syne tracking-tight">
                Global
              </span>
</div>
</div>
<div className="flex items-center gap-20 shrink-0">
<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 group">
<svg aria-hidden="true" className="iconify w-6 h-6 group-hover:text-red-500 transition-colors iconify--lucide" data-icon="lucide:layers" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
<span className="text-lg font-semibold font-syne tracking-tight">
                Layers
              </span>
</div>
<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 group">
<svg aria-hidden="true" className="iconify w-6 h-6 group-hover:text-red-500 transition-colors iconify--lucide" data-icon="lucide:command" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-lg font-semibold font-syne tracking-tight">
                Command
              </span>
</div>
<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 group">
<svg aria-hidden="true" className="iconify w-6 h-6 group-hover:text-red-500 transition-colors iconify--lucide" data-icon="lucide:box" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg>
<span className="text-lg font-semibold font-syne tracking-tight">
                Modules
              </span>
</div>
<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 group">
<svg aria-hidden="true" className="iconify w-6 h-6 group-hover:text-red-500 transition-colors iconify--lucide" data-icon="lucide:zap" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-lg font-semibold font-syne tracking-tight">
                Energy
              </span>
</div>
<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 group">
<svg aria-hidden="true" className="iconify w-6 h-6 group-hover:text-red-500 transition-colors iconify--lucide" data-icon="lucide:hexagon" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-lg font-semibold font-syne tracking-tight">
                Vertex
              </span>
</div>
<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 group">
<svg aria-hidden="true" className="iconify w-6 h-6 group-hover:text-red-500 transition-colors iconify--lucide" data-icon="lucide:activity" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-lg font-semibold font-syne tracking-tight">
                Pulse
              </span>
</div>
<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 group">
<svg aria-hidden="true" className="iconify w-6 h-6 group-hover:text-red-500 transition-colors iconify--lucide" data-icon="lucide:globe" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg>
<span className="text-lg font-semibold font-syne tracking-tight">
                Global
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="z-20 glass-section w-full border-t border-white/10 relative">
<div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">

<div className="md:col-span-1 flex flex-col min-h-[400px] h-full p-8 justify-between bg-white/[0.01]">
<div>
<span className="font-mono text-red-500 text-xs block mb-4">
              /// AREAS OF EXPLORATION
            </span>
<h2 className="text-3xl font-syne tracking-tight text-white mb-4 font-medium">
              Areas ofExploration
            </h2>
<p className="text-neutral-400 text-sm leading-relaxed mb-8">
              Investigating the boundaries between static design and fluid
              motion through systematic experimentation.
            </p>
</div>
<button className="w-max px-6 py-2 border border-white/10 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
            View Studies
          </button>
</div>

<div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 divide-y divide-x divide-white/10">

<div className="group flex flex-col hover:bg-white/[0.05] transition-colors duration-500 p-8 relative">
<div className="aspect-video overflow-hidden flex flex-col group transition-all duration-500 bg-neutral-900/50 w-full border border-white/5 rounded mb-8 relative items-center justify-center">
<div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(circle,black_50%,transparent_100%)]"></div>

<div className="z-10 transform transition-transform duration-700 group-hover:scale-110">
<svg className="w-48 h-auto drop-shadow-2xl" viewbox="0 0 200 160">
<g transform="translate(100, 100)">
<path className="opacity-90" d="M0,-14 L24,0 L0,14 L-24,0 Z" fill="#e5e5e5"></path>
<path d="M-24,0 L0,14 V40 L-24,26 Z" fill="#525252"></path>
<path d="M0,14 L24,0 V26 L0,40 Z" fill="#262626"></path>
</g>
<g className="transition-transform duration-500 group-hover:-translate-x-2" transform="translate(60, 80)">
<path d="M0,-14 L24,0 L0,14 L-24,0 Z" fill="#a3a3a3"></path>
<path d="M-24,0 L0,14 V40 L-24,26 Z" fill="#404040"></path>
<path d="M0,14 L24,0 V26 L0,40 Z" fill="#171717"></path>
</g>
<g className="transition-transform duration-500 group-hover:translate-x-2" transform="translate(140, 80)">

<path d="M0,-14 L24,0 L0,14 L-24,0 Z" fill="#ef4444"></path>
<path d="M-24,0 L0,14 V40 L-24,26 Z" fill="#b91c1c"></path>
<path d="M0,14 L24,0 V26 L0,40 Z" fill="#991b1b"></path>
</g>
</svg>
</div>
</div>
<div className="flex flex-col flex-grow">
<span className="font-mono text-neutral-500 text-xs block mb-3">
                01
              </span>
<h3 className="text-xl text-white font-medium uppercase tracking-wide mb-3 font-syne">
                Identity
              </h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Visual systems that adapt and evolve.
              </p>
</div>
<div className="mt-auto pt-6 border-t border-white/5">
<a className="text-xs text-neutral-500 group-hover:text-white transition-colors flex items-center gap-2" href="#">
                Explore Concept
                <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>

<div className="group flex flex-col hover:bg-white/[0.05] transition-colors duration-500 p-8 relative">
<div className="aspect-video overflow-hidden flex flex-col group bg-neutral-900/50 w-full border border-white/5 rounded mb-8 relative items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>

<div className="w-3/4 h-3/4 bg-neutral-950 border border-white/10 rounded-lg shadow-2xl flex flex-col overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
<div className="h-6 border-b border-white/5 bg-white/[0.02] flex items-center px-2 gap-1.5">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<div className="flex-1 p-3 flex gap-3">
<div className="w-1/4 h-full bg-white/[0.03] rounded animate-pulse"></div>
<div className="flex-1 h-full flex flex-col gap-2">
<div className="w-full h-16 bg-white/[0.03] rounded"></div>
<div className="flex gap-2 h-full">
<div className="flex-1 bg-white/[0.03] rounded"></div>
<div className="flex-1 bg-white/[0.03] rounded"></div>
</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col flex-grow">
<span className="font-mono text-neutral-500 text-xs block mb-3">
                02
              </span>
<h3 className="text-xl text-white font-medium uppercase tracking-wide mb-3 font-syne">
                Interface
              </h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Crafting immersive digital environments.
              </p>
</div>
<div className="mt-auto pt-6 border-t border-white/5">
<a className="text-xs text-neutral-500 group-hover:text-white transition-colors flex items-center gap-2" href="#">
                View Interaction
                <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>

<div className="group flex flex-col hover:bg-white/[0.05] transition-colors duration-500 p-8 relative">
<div className="aspect-video overflow-hidden flex flex-col group bg-neutral-900/50 w-full border border-white/5 rounded mb-8 relative items-center justify-center">

<div className="w-5/6 bg-[#09090b] rounded-lg border border-white/10 p-4 font-mono text-[10px] shadow-2xl relative">
<div className="absolute -top-3 -right-3 w-8 h-8 bg-red-500/10 rounded-full blur-xl"></div>
<div className="flex flex-col gap-1.5 text-neutral-400">
<div>
<span className="text-red-500">const</span>
<span className="text-white">init</span>
                    =
                    <span className="text-red-500">()</span>
                    =&gt; {
                  </div>
<div className="pl-4">
<span className="text-neutral-500">// Initialize core</span>
</div>
<div className="pl-4">
<span className="text-orange-400">System</span>
                    .
                    <span className="text-yellow-400">boot</span>
                    ({
                  </div>
<div className="pl-8">
                    mode:
                    <span className="text-green-400">'secure'</span>
                    ,
                  </div>
<div className="pl-8">
                    sync:
                    <span className="text-red-500">true</span>
</div>
<div className="pl-4">});</div>
<div>}</div>
</div>
</div>
</div>
<div className="flex flex-col flex-grow">
<span className="font-mono text-neutral-500 text-xs block mb-3">
                03
              </span>
<h3 className="text-xl text-white font-medium uppercase tracking-wide mb-3 font-syne">
                System
              </h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Functional logic for complex structures.
              </p>
</div>
<div className="mt-auto pt-6 border-t border-white/5">
<a className="text-xs text-neutral-500 group-hover:text-white transition-colors flex items-center gap-2" href="#">
                Analyze Code
                <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>

<div className="group flex flex-col hover:bg-white/[0.05] transition-colors duration-500 p-8 relative">
<div className="aspect-video overflow-hidden flex flex-col group bg-neutral-900/50 w-full border border-white/5 rounded mb-8 relative items-center justify-center">

<div className="w-3/4 h-1/2 flex items-end justify-between gap-2 px-4 border-b border-white/10 pb-px">
<div className="w-full bg-neutral-800 h-[30%] rounded-t-sm group-hover:h-[40%] transition-all duration-700"></div>
<div className="w-full bg-neutral-700 h-[50%] rounded-t-sm group-hover:h-[70%] transition-all duration-700 delay-75"></div>
<div className="w-full bg-red-900/50 h-[40%] rounded-t-sm group-hover:h-[50%] transition-all duration-700 delay-100"></div>
<div className="w-full bg-red-600 h-[75%] rounded-t-sm group-hover:h-[85%] transition-all duration-700 delay-150 shadow-[0_0_15px_rgba(220,38,38,0.4)]"></div>
</div>
</div>
<div className="flex flex-col flex-grow">
<span className="font-mono text-neutral-500 text-xs block mb-3">
                04
              </span>
<h3 className="text-xl text-white font-medium uppercase tracking-wide mb-3 font-syne">
                Analysis
              </h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Data-driven insights to navigate the future.
              </p>
</div>
<div className="mt-auto pt-6 border-t border-white/5">
<a className="text-xs text-neutral-500 group-hover:text-white transition-colors flex items-center gap-2" href="#">
                Read Methodology
                <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-20 w-full border-t border-white/10 glass-section overflow-hidden">
<div className="absolute inset-0 w-full h-full grid grid-cols-1 md:grid-cols-4 pointer-events-none">
<div className="border-r border-white/10 h-full hidden md:block relative">
<div className="absolute -right-[5px] -top-[5px] text-white/30 text-[10px]">
            +
          </div>
</div>
<div className="border-r border-white/10 h-full hidden md:block relative">
<div className="absolute -right-[5px] -top-[5px] text-white/30 text-[10px]">
            +
          </div>
</div>
<div className="border-r border-white/10 h-full hidden md:block relative">
<div className="absolute -right-[5px] -top-[5px] text-white/30 text-[10px]">
            +
          </div>
</div>
<div className="hidden md:block"></div>
</div>
<div className="relative z-10 grid grid-cols-1 md:grid-cols-4 w-full">
<div className="hidden md:block"></div>
<div className="md:col-span-3 flex items-center py-24 md:py-32 px-8">
<h2 className="text-5xl md:text-7xl lg:text-9xl font-syne tracking-tighter text-white leading-none font-medium drop-shadow-lg">
            +10 years in
            
            the game.
          </h2>
</div>
</div>
</section>

<section className="relative z-20 w-full border-t border-white/10 glass-section">
<div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
<div className="p-8 md:col-span-1 flex flex-col justify-between h-full min-h-[400px] bg-white/[0.01]">
<div>
<span className="font-mono text-red-500 text-xs block mb-4">
              /// FEATURES
            </span>
<h2 className="text-3xl font-syne tracking-tight text-white mb-4 font-medium">
              Core Principles
            </h2>
<p className="text-neutral-400 text-sm leading-relaxed mb-8">
              Crafted with precision to enhance digital presence through
              cutting-edge technology.
            </p>
</div>
<button className="w-max px-6 py-2 border border-white/10 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-white hover:text-black transition-colors reveal-hidden">
            Explore Principles
          </button>
</div>
<div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">

<div className="group p-8 flex flex-col justify-between hover:bg-white/[0.05] transition-colors">
<div>
<div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mb-4 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-white font-medium mb-2 font-syne">
                Velocity
              </h3>
<p className="text-neutral-500 text-sm">
                Optimized for speed and efficiency.
              </p>
</div>
<div className="relative h-24 w-full flex items-end gap-1.5 mt-8">
<div className="w-full bg-red-900/20 rounded-t-[2px] h-[40%] group-hover:bg-red-500/80 transition-all duration-500"></div>
<div className="w-full bg-red-900/20 rounded-t-[2px] h-[60%] group-hover:bg-red-500/80 transition-all duration-500 delay-75"></div>
<div className="w-full bg-red-900/20 rounded-t-[2px] h-[80%] group-hover:bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all duration-500 delay-100"></div>
<div className="w-full bg-red-900/20 rounded-t-[2px] h-[50%] group-hover:bg-red-500/80 transition-all duration-500 delay-150"></div>
</div>
</div>

<div className="group p-8 flex flex-col justify-between hover:bg-white/[0.05] transition-colors">
<div>
<div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mb-4 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-white font-medium mb-2 font-syne">Foundation</h3>
<p className="text-neutral-500 text-sm">
                Built with stability as a priority.
              </p>
</div>
<div className="relative w-full h-24 mt-8 flex items-center justify-center">
<div className="w-16 h-16 rounded-full border border-dashed border-neutral-700 animate-[spin_10s_linear_infinite] group-hover:border-red-500 transition-colors"></div>
<svg aria-hidden="true" className="iconify absolute text-neutral-600 group-hover:text-red-500 transition-colors iconify--lucide" data-icon="lucide:lock" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
</div>
</div>

<div className="group p-8 flex flex-col justify-between hover:bg-white/[0.05] transition-colors">
<div>
<div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mb-4 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:scale" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 3v18m7-13l3 8a5 5 0 0 1-6 0zV7"></path><path d="M3 7h1a17 17 0 0 0 8-2a17 17 0 0 0 8 2h1M5 8l3 8a5 5 0 0 1-6 0zV7m2 14h10"></path></g></svg>
</div>
<h3 className="text-white font-medium mb-2 font-syne">
                Scalability
              </h3>
<p className="text-neutral-500 text-sm">
                Grows with system requirements.
              </p>
</div>
<div className="relative w-full h-24 mt-8 bg-neutral-900/50 border border-white/5 rounded overflow-hidden flex items-end">
<svg className="w-full h-full text-red-500/20" preserveaspectratio="none" viewbox="0 0 100 50">
<path className="group-hover:text-red-500 transition-colors duration-500" d="M0,50 L20,40 L40,45 L60,20 L80,25 L100,5" fill="none" stroke="currentColor" strokeWidth="2"></path>
<path className="opacity-20 group-hover:opacity-40 transition-opacity" d="M0,50 L20,40 L40,45 L60,20 L80,25 L100,5 V50 H0 Z" fill="currentColor"></path>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-20 w-full border-t border-white/10 glass-section">
<div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
<div className="p-8 md:col-span-1 flex flex-col justify-between h-full min-h-[400px] bg-white/[0.01]">
<div>
<span className="font-mono text-red-500 text-xs block mb-4">
              /// OBSERVATIONS
            </span>
<h2 className="text-3xl font-syne tracking-tight text-white mb-4 font-medium reveal-hidden">
              Voices
            </h2>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 reveal-hidden">
              Perspectives from those who have interacted with the system.
            </p>
</div>
<button className="w-max px-6 py-2 border border-white/10 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-white hover:text-black transition-colors reveal-hidden">
            Read Observations
          </button>
</div>
<div className="md:col-span-3 relative overflow-hidden flex items-center bg-transparent">
<div className="absolute left-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none"></div>
<div className="flex gap-6 py-16 animate-marquee-infinite w-max pl-8">

<div className="glass-card w-[450px] p-8 rounded-2xl flex flex-col justify-between shrink-0 hover:border-white/20 transition-all duration-300 group cursor-default">
<svg aria-hidden="true" className="iconify w-8 h-8 text-neutral-500 mb-6 group-hover:text-red-500 transition-colors iconify--lucide" data-icon="lucide:quote" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<blockquote className="text-xl text-neutral-200 font-light leading-snug mb-8 font-syne">
                "The attention to detail and creative direction provided completely redefined our brand identity."
              </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center font-mono text-xs text-white">
                  AM
                </div>
<div>
<div className="text-white text-sm font-medium">Alex Morgan</div>
<div className="text-neutral-500 text-xs">CEO, Apex Dynamics</div>
</div>
</div>
</div>

<div className="glass-card w-[450px] p-8 rounded-2xl flex flex-col justify-between shrink-0 hover:border-white/20 transition-all duration-300 group cursor-default">
<svg aria-hidden="true" className="iconify w-8 h-8 text-neutral-500 mb-6 group-hover:text-red-500 transition-colors iconify--lucide" data-icon="lucide:quote" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<blockquote className="text-xl text-neutral-200 font-light leading-snug mb-8 font-syne">
                "A masterclass in design systems. The scalability and
                performance have exceeded our wildest expectations."
              </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center font-mono text-xs text-white">
                  SC
                </div>
<div>
<div className="text-white text-sm font-medium">Sarah Chen</div>
<div className="text-neutral-500 text-xs">CTO, Nexus Corp</div>
</div>
</div>
</div>

<div className="glass-card w-[450px] p-8 rounded-2xl flex flex-col justify-between shrink-0 hover:border-white/20 transition-all duration-300 group cursor-default">
<svg aria-hidden="true" className="iconify w-8 h-8 text-neutral-500 mb-6 group-hover:text-red-500 transition-colors iconify--lucide" data-icon="lucide:quote" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<blockquote className="text-xl text-neutral-200 font-light leading-snug mb-8 font-syne">
                "Transformation was instant. We saw metrics improve overnight
                thanks to the new user experience strategy."
              </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center font-mono text-xs text-white">
                  MT
                </div>
<div>
<div className="text-white text-sm font-medium">
                    Marcus Thorne
                  </div>
<div className="text-neutral-500 text-xs">
                    Director, Horizon Ventures
                  </div>
</div>
</div>
</div>

<div className="glass-card w-[450px] p-8 rounded-2xl flex flex-col justify-between shrink-0 hover:border-white/20 transition-all duration-300 group cursor-default">
<svg aria-hidden="true" className="iconify w-8 h-8 text-neutral-500 mb-6 group-hover:text-red-500 transition-colors iconify--lucide" data-icon="lucide:quote" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<blockquote className="text-xl text-neutral-200 font-light leading-snug mb-8 font-syne">
                "The attention to detail and creative direction provided completely redefined our brand identity."
              </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center font-mono text-xs text-white">
                  AM
                </div>
<div>
<div className="text-white text-sm font-medium">Alex Morgan</div>
<div className="text-neutral-500 text-xs">CEO, Apex Dynamics</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-20 w-full border-t border-white/10 glass-section">
<div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
<div className="p-8 md:col-span-1 flex flex-col justify-between h-full min-h-[300px] bg-white/[0.01]">
<div>
<span className="font-mono text-red-500 text-xs block mb-4">
              /// CONNECT
            </span>
<h2 className="text-3xl font-syne tracking-tight text-white mb-4 font-medium reveal-hidden">
              Connect
            </h2>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 reveal-hidden">
              Ready to explore? Let's build something
              extraordinary together.
            </p>
</div>
<button className="w-max px-6 py-3 bg-red-600 text-white rounded-full text-xs font-medium uppercase tracking-widest hover:bg-red-700 transition-colors reveal-hidden shadow-[0_0_20px_rgba(239,68,68,0.4)]">
            Start Dialogue
          </button>
</div>
<div className="p-8 md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">
              Sitemap
            </h4>
<ul className="space-y-3">
<li>
<a className="text-neutral-500 text-sm hover:text-white transition-colors" href="#">
                  Experiment
                </a>
</li>
<li>
<a className="text-neutral-500 text-sm hover:text-white transition-colors" href="#">
                  Studies
                </a>
</li>
<li>
<a className="text-neutral-500 text-sm hover:text-white transition-colors" href="#">
                  Journal
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">
              Socials
            </h4>
<ul className="space-y-3">
<li>
<a className="text-neutral-500 text-sm hover:text-white transition-colors" href="#">
                  Instagram
                </a>
</li>
<li>
<a className="text-neutral-500 text-sm hover:text-white transition-colors" href="#">
                  Twitter
                </a>
</li>
<li>
<a className="text-neutral-500 text-sm hover:text-white transition-colors" href="#">
                  LinkedIn
                </a>
</li>
</ul>
</div>
<div className="col-span-2 md:col-span-2">
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">
              Newsletter
            </h4>
<form className="flex flex-col gap-4">
<input className="w-full bg-transparent border-b border-white/20 py-2 text-white text-sm focus:outline-none focus:border-red-500 transition-colors placeholder:text-neutral-700" placeholder="Enter your email" type="email"/>
<button className="self-start text-xs text-neutral-400 uppercase tracking-widest hover:text-white transition-colors reveal-hidden flex items-center gap-2">
                Subscribe
                <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
</div>
</div>
</div>
<div className="border-t border-white/10 mt-0">
<div className="px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-neutral-600 text-[10px] uppercase tracking-wider">
            © 2025 — FATIMA, Design Experiment
          </span>
<span className="text-neutral-600 text-[10px] uppercase tracking-wider">
            Designed with precision.
          </span>
</div>
</div>
</footer>



    </>
  );
}
