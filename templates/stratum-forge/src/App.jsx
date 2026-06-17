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



      (() => {
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) return;

        const entranceNodes = [
          ...document.querySelectorAll("nav"),
          ...[...document.querySelectorAll("main > div")].filter(
            (el) => !el.hasAttribute("data-no-entrance")
          )
        ];

        entranceNodes.forEach((el, index) => {
          el.setAttribute("data-entrance", "");
          el.style.setProperty("--motion-delay", `${Math.min(index * 90, 540)}ms`);
        });

        const revealNodes = [
          ...document.querySelectorAll("section > *"),
          ...document.querySelectorAll("footer > *")
        ].filter((el) => !el.hasAttribute("data-entrance"));

        revealNodes.forEach((el, index) => {
          el.setAttribute("data-reveal", "");
          el.style.setProperty("--motion-delay", `${(index % 6) * 60}ms`);
        });

        const loopCardNodes = [
          ...document.querySelectorAll("div[class*='rounded-[2rem]'][class*='p-8'][class*='flex-col'][class*='group']"),
          ...document.querySelectorAll("div[class*='w-80'][class*='rounded-xl'][class*='group']")
        ];

        const capabilitiesSection = [...document.querySelectorAll("section")].find((section) =>
          (section.textContent || "").includes("MOD. 01 // CORE")
        );

        const capabilitiesLoopNodes = capabilitiesSection
          ? [...capabilitiesSection.querySelectorAll("div.flex.flex-col.group.w-full.rounded-\\[2rem\\].p-6.relative")]
          : [];

        loopCardNodes.forEach((el, index) => {
          el.setAttribute("data-card-loop", "");
          el.style.setProperty("--loop-delay", `${(index % 5) * 0.55}s`);
        });

        capabilitiesLoopNodes.forEach((el, index) => {
          el.setAttribute("data-cap-card-loop", "");
          el.style.setProperty("--cap-loop-delay", `${index * 0.25}s`);
        });

        document.body.classList.add("motion-ready");

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            entranceNodes.forEach((el) => el.classList.add("is-visible"));
          });
        });

        const revealObserver = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            });
          },
          { threshold: 0.22, rootMargin: "0px 0px -8% 0px" }
        );

        revealNodes.forEach((el) => revealObserver.observe(el));
      })();
    
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
      

<nav className="flex z-50 w-full pt-4 pb-4 absolute top-0 left-0" style={{background: 'rgba(18, 18, 20, 0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #27272a', boxShadow: '0 1px 0 rgba(255, 255, 255, 0.03), 0 4px 20px rgba(0,0,0,0.5)'}}>
<div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between relative">
<div className="flex items-center gap-3">
<div className="text-xs font-medium tracking-widest text-zinc-200 uppercase font-sans" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
            STRATUM
          </div>
<div className="text-[9px] font-medium text-zinc-600 uppercase tracking-widest font-sans px-1.5 py-0.5 rounded border border-zinc-800/50 bg-zinc-900/50" style={{boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.5)'}}>
            SYS.01
          </div>
</div>
<div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
<button className="text-xs font-normal tracking-wide text-zinc-400 hover:text-zinc-200 hover:brightness-110 transition-all duration-200 font-sans">
            Capabilities
          </button>
<button className="relative text-xs font-normal tracking-wide text-zinc-200 transition-all duration-200 font-sans flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500" style={{boxShadow: '0 0 6px rgba(249, 115, 22, 0.6), inset 0 1px 1px rgba(255,255,255,0.5)'}}></span>
            Console
          </button>
<button className="text-xs font-normal tracking-wide text-zinc-400 hover:text-zinc-200 hover:brightness-110 transition-all duration-200 font-sans">
            Pricing
          </button>
<button className="text-xs font-normal tracking-wide text-zinc-400 hover:text-zinc-200 hover:brightness-110 transition-all duration-200 font-sans">
            Enterprise
          </button>
</div>
<div className="flex items-center gap-6">
<button className="hidden sm:block text-xs font-normal tracking-wide text-zinc-500 hover:text-zinc-300 transition-colors duration-200 font-sans">
            Sign In
          </button>
<button className="relative px-6 py-2.5 rounded-xl text-zinc-100 font-medium text-xs flex items-center justify-center gap-2 group transition-transform duration-100 active:scale-[0.98] font-sans" style={{background: 'linear-gradient(180deg, #3f3f46 0%, #27272a 100%)', boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.15), 0 12px 24px -6px rgba(0, 0, 0, 0.8), 0 4px 8px -4px rgba(0,0,0,0.6)', border: '1px solid #18181b'}}>
<span className="relative z-10 flex items-center gap-1.5 text-shadow-sm font-sans" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
              Access Console
              <iconify-icon className="text-base opacity-70 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
<div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
</button>
</div>
</div>
</nav>

<main className="lg:pt-32 lg:pb-24 grid lg:grid-cols-2 gap-16 lg:gap-24 z-10 min-h-screen w-full max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative gap-x-16 gap-y-16 items-center">

<div className="flex flex-col gap-8 relative z-20">

<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-zinc-800/80 bg-zinc-900/50 backdrop-blur-md w-fit shadow-sm" style={{boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.05), 0 4px 12px rgba(0,0,0,0.5)'}}>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 relative" style={{boxShadow: '0 0 10px 1px #f97316'}}>
<div className="absolute inset-0 rounded-full bg-white opacity-50 blur-[1px]"></div>
</div>
<span className="text-xs font-normal text-zinc-300 tracking-wide font-sans">
            Hardware Link Active
          </span>
</div>
<div className="flex flex-col gap-6">
<h1 className="text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-600 leading-[1.05] font-dm-sans tracking-tight">
            Engineered Control
            <br/>
            for Complex Systems.
          </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed font-dm-sans tracking-tight">
            Fine-tune every variable with precision-driven architecture. Master
            your infrastructure through tactile, high-fidelity interfaces.
          </p>
</div>
<div className="flex flex-col sm:flex-row gap-5 pt-4">

<button className="relative px-8 py-4 rounded-xl text-zinc-100 font-normal text-sm flex items-center justify-center gap-3 group transition-transform duration-100 active:scale-[0.98]" style="background: linear-gradient(180deg, #3f3f46 0%, #27272a 100%);
                               box-shadow: inset 0 1px 1px rgba(255,255,255,0.15),
                                           0 12px 24px -6px rgba(0,0,0,0.8),
                                           0 4px 8px -4px rgba(0,0,0,0.6);
                               border: 1px solid #18181b;">
<span className="relative z-10 flex items-center gap-2 text-shadow-sm font-sans" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
              Access Console
              <iconify-icon className="text-lg opacity-70 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>

<div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
</button>

<button className="px-8 py-4 rounded-xl text-zinc-300 font-normal text-sm flex items-center justify-center transition-all duration-300 hover:text-white hover:bg-zinc-800/50 font-sans" style="background: rgba(39, 39, 42, 0.3);
                               backdrop-filter: blur(8px);
                               box-shadow: inset 0 0 0 1px rgba(255,255,255,0.05),
                                           inset 0 2px 4px rgba(0,0,0,0.2);">
            View Specifications
          </button>
</div>
</div>

<div className="relative w-full max-w-lg mx-auto flex items-center justify-center lg:justify-end">

<div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[85%] h-16 bg-black/80 blur-2xl rounded-[100%] z-0"></div>

<div className="aspect-[4/4.5] md:p-10 z-10 w-full rounded-[2.5rem] pt-8 pr-8 pb-8 pl-8 relative" style="background: linear-gradient(135deg, #2a2a2e 0%, #121214 100%);
                        box-shadow: -16px -16px 40px rgba(63, 63, 70, 0.04),
                                    32px 32px 80px rgba(0,0,0,0.9),
                                    inset 1px 1px 2px rgba(255,255,255,0.1),
                                    inset -1px -1px 4px rgba(0,0,0,0.8);
                        border: 1px solid #3f3f46">

<div className="absolute inset-0 rounded-[2.5rem] opacity-[0.04] pointer-events-none mix-blend-screen" style={{backgroundImage: 'repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 4px)'}}></div>

<div className="absolute inset-0 rounded-[2.5rem] pointer-events-none" style={{background: 'radial-gradient(120% 120% at 0% 0%, rgba(255,255,255,0.06) 0%, transparent 50%)'}}></div>

<div className="absolute top-6 left-6 w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1.5px] bg-zinc-950 rotate-45 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute top-6 right-6 w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1.5px] bg-zinc-950 -rotate-12 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute bottom-6 left-6 w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1.5px] bg-zinc-950 rotate-[75deg] shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute bottom-6 right-6 w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1.5px] bg-zinc-950 rotate-6 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>

<div className="relative z-10 flex flex-col h-full justify-between pt-2">

<div className="flex justify-between items-end px-4">

<div className="flex flex-col gap-2.5 items-center">
<div className="text-xs font-normal text-zinc-500 uppercase tracking-widest font-sans" style={{textShadow: '0 1px 0 rgba(255,255,255,0.05)'}}>
                  Master
                </div>
<div className="relative w-3 h-3 rounded-full bg-orange-500" style={{boxShadow: '0 0 16px 2px #f97316, inset 0 1px 2px rgba(255, 255, 255, 0.8), inset 0 -1px 2px rgba(0,0,0,0.6)'}}>

<div className="absolute inset-0.5 rounded-full bg-white opacity-60 blur-[0.5px]"></div>
</div>
</div>

<div className="flex flex-col gap-2.5 items-center">
<div className="text-xs font-normal text-zinc-500 uppercase tracking-widest font-sans" style={{textShadow: '0 1px 0 rgba(255,255,255,0.05)'}}>
                  Clock
                </div>
<div className="w-3 h-3 rounded-full bg-zinc-900 border border-zinc-950" style={{boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.9), 0 1px 1px rgba(255,255,255,0.08)'}}></div>
</div>
<div className="flex flex-col gap-2.5 items-center">
<div className="text-xs font-normal text-zinc-500 uppercase tracking-widest font-sans" style={{textShadow: '0 1px 0 rgba(255,255,255,0.05)'}}>
                  Limit
                </div>
<div className="w-3 h-3 rounded-full bg-zinc-900 border border-zinc-950" style={{boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.9), 0 1px 1px rgba(255,255,255,0.08)'}}></div>
</div>
</div>

<div className="relative w-[15rem] h-[15rem] mx-auto flex items-center justify-center my-6 group">

<div className="absolute inset-[-14px] rounded-full z-0" style="background: conic-gradient(from 225deg, #18181b 0%, #18181b 75%, transparent 75%, transparent 100%);
                                    mask-image: radial-gradient(transparent 68%, black 69%);
                                    -webkit-mask-image: radial-gradient(transparent 68%, black 69%);
                                    box-shadow: inset 0 2px 4px rgba(0,0,0,0.5);"></div>

<div className="absolute inset-[-14px] rounded-full z-10 transition-all duration-700 ease-out group-hover:opacity-100" style="background: conic-gradient(from 225deg, #f97316 0%, #ea580c 45%, transparent 45%, transparent 100%);
                                    mask-image: radial-gradient(transparent 68%, black 69%);
                                    -webkit-mask-image: radial-gradient(transparent 68%, black 69%);
                                    filter: drop-shadow(0 0 10px rgba(249, 115, 22, 0.7));
                                    opacity: 0.85;"></div>

<div className="absolute inset-[-24px] rounded-full z-0 opacity-20" style="background: repeating-conic-gradient(from 225deg, #fff 0deg, #fff 1deg, transparent 1deg, transparent 9deg);
                                    mask-image: radial-gradient(transparent 72%, black 73%);
                                    -webkit-mask-image: radial-gradient(transparent 72%, black 73%);
                                    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 85%);"></div>

<div className="absolute inset-0 rounded-full bg-zinc-950" style="box-shadow: inset 4px 4px 8px rgba(0,0,0,0.9),
                                         inset -2px -2px 6px rgba(255,255,255,0.03),
                                         0 1px 1px rgba(255,255,255,0.05);"></div>

<div className="relative w-[82%] h-[82%] rounded-full cursor-grab active:cursor-grabbing flex items-center justify-center rotate-[30deg] transition-transform duration-700 ease-out group-hover:rotate-[140deg]" style="background: conic-gradient(from 180deg at 50% 50%, #2a2a2e 0deg, #4b4b52 90deg, #18181b 180deg, #4b4b52 270deg, #2a2a2e 360deg);
                                    box-shadow: 0 20px 30px -5px rgba(0,0,0,0.95),
                                                0 10px 15px -5px rgba(0,0,0,0.7),
                                                inset 0 2px 5px rgba(255,255,255,0.2),
                                                inset 0 -2px 8px rgba(0,0,0,0.9);
                                    border: 1px solid #18181b;">

<div className="absolute inset-2.5 rounded-full border border-zinc-600/20 shadow-[inset_0_1px_1px_rgba(0,0,0,0.5)]"></div>
<div className="absolute inset-5 rounded-full border border-zinc-600/10 shadow-[inset_0_1px_1px_rgba(0,0,0,0.5)]"></div>

<div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
<div className="w-2.5 h-2.5 rounded-full bg-orange-500 relative" style={{boxShadow: '0 0 12px #f97316, inset 0 1px 2px rgba(255, 255, 255, 0.9), inset 0 -1px 2px rgba(0,0,0,0.5)'}}>
<div className="absolute inset-[2px] rounded-full bg-white opacity-60 blur-[0.5px]"></div>
</div>
</div>

<div className="w-[4.5rem] h-[4.5rem] rounded-full bg-zinc-900 flex items-center justify-center" style={{boxShadow: 'inset 0 2px 6px rgba(0, 0, 0, 0.9), 0 1px 2px rgba(255,255,255,0.06)'}}>

<div className="w-4 h-4 rounded-full border border-zinc-800 shadow-[inset_0_1px_1px_rgba(0,0,0,0.5)] opacity-50"></div>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-6 px-4">

<div className="flex flex-col items-center gap-4">

<div className="w-10 h-16 rounded-full relative bg-zinc-950 flex justify-center p-1" style="box-shadow: inset 0 6px 12px rgba(0,0,0,1),
                                             inset 0 1px 2px rgba(0,0,0,1),
                                             0 1px 1px rgba(255,255,255,0.05);
                                        border: 1px solid #000;">

<div className="w-8 h-8 rounded-full absolute top-1 cursor-pointer transition-transform hover:-translate-y-0.5" style="background: linear-gradient(180deg, #e4e4e7 0%, #71717a 100%);
                                            box-shadow: 0 8px 10px rgba(0,0,0,0.9),
                                                        inset 0 2px 4px rgba(255,255,255,0.9),
                                                        inset 0 -2px 4px rgba(0,0,0,0.5);
                                            border: 1px solid #52525b;">
<div className="absolute inset-0 flex flex-col items-center justify-center gap-[2px] opacity-20">
<div className="w-4 h-[1px] bg-black"></div>
<div className="w-5 h-[1px] bg-black"></div>
<div className="w-4 h-[1px] bg-black"></div>
</div>
</div>
</div>
<div className="text-xs font-normal text-zinc-500 uppercase tracking-widest font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
                  Filter
                </div>
</div>

<div className="flex flex-col items-center gap-4">
<div className="w-10 h-16 rounded-full relative bg-zinc-950 flex justify-center p-1" style={{boxShadow: 'inset 0 6px 12px rgba(0, 0, 0, 1), inset 0 1px 2px rgba(0, 0, 0, 1), 0 1px 1px rgba(255,255,255,0.05)', border: '1px solid #000'}}>

<div className="w-8 h-8 rounded-full absolute bottom-1 cursor-pointer transition-transform hover:translate-y-0.5" style="background: linear-gradient(180deg, #a1a1aa 0%, #3f3f46 100%);
                                            box-shadow: 0 -2px 8px rgba(0,0,0,0.8),
                                                        inset 0 1px 2px rgba(255,255,255,0.5),
                                                        inset 0 -2px 4px rgba(0,0,0,0.8);
                                            border: 1px solid #27272a;">
<div className="absolute inset-0 flex flex-col items-center justify-center gap-[2px] opacity-20">
<div className="w-4 h-[1px] bg-black"></div>
<div className="w-5 h-[1px] bg-black"></div>
<div className="w-4 h-[1px] bg-black"></div>
</div>
</div>
</div>
<div className="text-xs font-normal text-zinc-600 uppercase tracking-widest font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
                  Bypass
                </div>
</div>

<div className="flex flex-col items-center gap-4">
<div className="w-10 h-16 rounded-full relative bg-zinc-950 flex justify-center p-1" style={{boxShadow: 'inset 0 6px 12px rgba(0, 0, 0, 1), inset 0 1px 2px rgba(0, 0, 0, 1), 0 1px 1px rgba(255,255,255,0.05)', border: '1px solid #000'}}>
<div className="w-8 h-8 rounded-full absolute top-1 cursor-pointer transition-transform hover:-translate-y-0.5" style="background: linear-gradient(180deg, #e4e4e7 0%, #71717a 100%);
                                            box-shadow: 0 8px 10px rgba(0,0,0,0.9), inset 0 2px 4px rgba(255,255,255,0.9), inset 0 -2px 4px rgba(0,0,0,0.5);
                                            border: 1px solid #52525b;">
<div className="absolute inset-0 flex flex-col items-center justify-center gap-[2px] opacity-20">
<div className="w-4 h-[1px] bg-black"></div>
<div className="w-5 h-[1px] bg-black"></div>
<div className="w-4 h-[1px] bg-black"></div>
</div>
</div>
</div>
<div className="text-xs font-normal text-zinc-500 uppercase tracking-widest font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
                  Phase
                </div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-14 z-30 flex items-center w-screen" data-no-entrance="" style={{background: 'linear-gradient(180deg, #18181b 0%, #121214 100%)', borderTop: '1px solid rgba(63, 63, 70, 0.5)', borderBottom: '1px solid #000', boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 -4px 20px rgba(0,0,0,0.5)'}}>

<div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen" style={{backgroundImage: 'repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 4px)'}}></div>

<div className="w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-start md:justify-between gap-8 md:gap-4 overflow-x-auto relative z-10 whitespace-nowrap" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>

<div className="flex items-center gap-1.5 shrink-0 text-[10px] uppercase tracking-tighter font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
<span className="text-zinc-500 font-normal">Throughput:</span>
<span className="text-zinc-300 font-medium">18.4GB/s</span>
</div>

<div className="h-4 w-[1px] bg-zinc-950 shadow-[1px_0_0_rgba(255,255,255,0.06)] shrink-0"></div>

<div className="flex items-center gap-1.5 shrink-0 text-[10px] uppercase tracking-tighter font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
<span className="text-zinc-500 font-normal">Latency:</span>
<span className="text-zinc-300 font-medium">2.3ms</span>
</div>

<div className="h-4 w-[1px] bg-zinc-950 shadow-[1px_0_0_rgba(255,255,255,0.06)] shrink-0"></div>

<div className="flex items-center gap-1.5 shrink-0 text-[10px] uppercase tracking-tighter font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
<span className="text-zinc-500 font-normal">Uptime:</span>
<span className="text-zinc-300 font-medium">99.999%</span>
</div>

<div className="h-4 w-[1px] bg-zinc-950 shadow-[1px_0_0_rgba(255,255,255,0.06)] shrink-0"></div>

<div className="flex items-center gap-1.5 shrink-0 text-[10px] uppercase tracking-tighter font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
<span className="text-zinc-500 font-normal">Nodes:</span>
<span className="text-zinc-300 font-medium">124 Active</span>
</div>

<div className="h-4 w-[1px] bg-zinc-950 shadow-[1px_0_0_rgba(255,255,255,0.06)] shrink-0"></div>

<div className="flex items-center gap-1.5 shrink-0 text-[10px] uppercase tracking-tighter font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
<span className="text-zinc-500 font-normal">Status:</span>
<div className="flex items-center gap-1.5 ml-1">

<div className="relative w-1.5 h-1.5 rounded-full bg-green-500" style={{boxShadow: '0 0 6px 1px rgba(34, 197, 94, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.8), inset 0 -1px 1px rgba(0,0,0,0.6)'}}>
<div className="absolute inset-[1px] rounded-full bg-white opacity-70 blur-[0.5px]"></div>
</div>
<span className="text-zinc-200 font-medium">Operational</span>
</div>
</div>
</div>
</div>
</main>

<div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent relative z-10"></div>

<section className="lg:pt-48 lg:pb-64 w-full z-10 pt-24 pb-24 relative">

<div className="md:mb-24 flex flex-col items-center gap-6 text-center max-w-4xl mr-auto mb-16 ml-auto pr-6 pl-6 relative">
<div className="w-full flex justify-between items-end border-b border-zinc-800/80 pb-3 mb-2 relative">
<div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-zinc-900 border border-black shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]">
<div className="w-1.5 h-1.5 bg-zinc-600 rounded-full shadow-[inset_0_1px_1px_rgba(0,0,0,1)] relative">
<div className="absolute inset-0 m-auto w-full h-[0.5px] bg-black rotate-45"></div>
</div>
</div>
<span className="text-[10px] font-mono text-zinc-500 tracking-[0.2em] uppercase font-bold" style={{textShadow: '0 1px 1px rgba(0,0,0,1)'}}>
              MOD. 01 // CORE
            </span>
</div>
<div className="flex items-center gap-2 px-2.5 py-1 rounded-[3px] bg-zinc-950 border border-black shadow-[inset_0_2px_4px_rgba(0,0,0,1),_0_1px_1px_rgba(255,255,255,0.05)]">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_6px_#22c55e,inset_0_1px_1px_rgba(255,255,255,0.8)] animate-pulse"></div>
<span className="text-[9px] font-mono text-green-400 tracking-widest uppercase font-bold" style={{textShadow: '0 0 4px rgba(34,197,94,0.4)'}}>
              Sys.Online
            </span>
</div>
</div>
<div className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 border-l-2 border-t-2 border-zinc-700/30"></div>
<div className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 border-r-2 border-b-2 border-zinc-700/30"></div>
<div className="relative z-10 flex flex-col gap-5 mt-2">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-full bg-zinc-600/5 blur-[80px] rounded-full pointer-events-none z-0"></div>
<h2 className="relative z-10 md:text-5xl lg:text-6xl text-4xl font-medium tracking-tight font-dm-sans text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500" style={{filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))'}}>
            Precision Architecture.
            <br className="hidden sm:block"/>
            Real-World Performance.
          </h2>
<p className="relative z-10 text-base md:text-lg text-zinc-400 font-sans max-w-2xl mx-auto leading-relaxed tracking-tight" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
            Every component engineered for clarity, responsiveness, and absolute
            control.
          </p>
</div>
<div className="mt-4 flex items-center justify-center gap-4 opacity-50">
<div className="w-16 h-[2px] bg-zinc-950 rounded-full shadow-[inset_0_1px_1px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.1)]"></div>
<div className="flex gap-1.5">
<div className="w-1.5 h-2.5 bg-zinc-700 skew-x-[-20deg] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
<div className="w-1.5 h-2.5 bg-zinc-700 skew-x-[-20deg] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
<div className="w-1.5 h-2.5 bg-zinc-700 skew-x-[-20deg] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
</div>
<span className="text-[9px] font-mono text-zinc-500 tracking-[0.3em] font-bold" style={{textShadow: '0 1px 1px rgba(255, 255, 255, 0.1), 0 -1px 1px rgba(0,0,0,1)'}}>
            MK-IV.009
          </span>
<div className="w-16 h-[2px] bg-zinc-950 rounded-full shadow-[inset_0_1px_1px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-6 gap-y-6">
<div className="flex flex-col group transition-all duration-500 hover:-translate-y-1 w-full rounded-[2rem] p-6 relative" style="background: linear-gradient(135deg, #2a2a2e 0%, #121214 100%); 
           box-shadow: -16px -16px 40px rgba(63, 63, 70, 0.04), 32px 32px 80px rgba(0,0,0,0.9), inset 1px 1px 2px rgba(255,255,255,0.1), inset -1px -1px 4px rgba(0,0,0,0.8); 
           border: 1px solid #3f3f46;">
<div className="absolute inset-0 rounded-[2rem] opacity-[0.04] pointer-events-none mix-blend-screen" style={{backgroundImage: 'repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 4px)'}}></div>
<div className="absolute inset-0 rounded-[2rem] pointer-events-none" style={{background: 'radial-gradient(120% 120% at 0% 0%, rgba(255,255,255,0.06) 0%, transparent 50%)'}}></div>
<div className="relative z-10 flex justify-between items-center mb-6 pl-1 pr-1 mt-1">
<span className="text-xs font-bold text-zinc-600 uppercase tracking-widest font-sans" style={{textShadow: '0px 1px 1px rgba(255, 255, 255, 0.1), 0px -1px 1px rgba(0,0,0,0.8)'}}>
              SYS.01
            </span>
<div className="relative w-4 h-4 rounded-full bg-zinc-900 flex items-center justify-center" style={{boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 1), 0 1px 1px rgba(255,255,255,0.1)'}}>
<div className="relative w-2.5 h-2.5 rounded-full bg-orange-950 border border-black transition-colors duration-500" style={{boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.2)'}}>
<div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-300 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{boxShadow: '0 0 8px #f97316, inset 0 1px 2px rgba(255,255,255,0.8)'}}></div>
</div>
</div>
</div>
<div className="relative z-10 mb-8 w-full h-32 bg-zinc-950 rounded-md overflow-hidden flex flex-col justify-end mt-2 cursor-crosshair border border-black" style={{boxShadow: 'inset 0 8px 16px rgba(0, 0, 0, 1), inset 0 2px 4px rgba(0, 0, 0, 0.8), 0 1px 1px rgba(255,255,255,0.1)'}}>
<div className="absolute inset-0 pointer-events-none z-30" style={{background: 'linear-gradient(to bottom, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 40%, transparent 40%)'}}></div>
<div className="absolute inset-0 pointer-events-none z-20" style={{background: 'linear-gradient(rgba(255,255,255,0.03) 50%, transparent 50%)', backgroundSize: '100% 4px'}}></div>
<div className="absolute inset-0 opacity-20 z-0" style={{backgroundImage: 'linear-gradient(rgba(249,115,22,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.4) 1px, transparent 1px)', backgroundSize: '10px 10px', backgroundPosition: '-1px -1px'}}></div>
<div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent -translate-x-full group-hover:translate-x-[400px] transition-transform duration-[2000ms] ease-in-out z-10 pointer-events-none"></div>
<svg className="absolute inset-0 w-full h-full z-10 pt-2" preserveaspectratio="none" viewbox="0 0 100 40">
<defs>
<lineargradient id="trace-gradient-sys01" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#f97316" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#f97316" stop-opacity="0.0"></stop>
</lineargradient>
</defs>
<path className="" d="M0,25 L5,26 L10,24 L15,18 L18,28 L22,8 L26,32 L30,22 L35,24 L45,21 L55,23 L60,19 L65,12 L70,25 L80,22 L90,26 L100,24 L100,40 L0,40 Z" fill="url(#trace-gradient-sys01)"></path>
<path className="opacity-80 group-hover:opacity-100 transition-opacity duration-500" d="M0,25 L5,26 L10,24 L15,18 L18,28 L22,8 L26,32 L30,22 L35,24 L45,21 L55,23 L60,19 L65,12 L70,25 L80,22 L90,26 L100,24" fill="none" stroke="#f97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{filter: 'drop-shadow(0 0 4px rgba(249,115,22,1))'}}></path>
<path className="opacity-30" d="M0,28 L10,25 L15,22 L20,29 L25,12 L30,26 L35,23 L45,25 L55,20 L60,24 L65,16 L75,26 L85,24 L100,28" fill="none" stroke="#ea580c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5"></path>
</svg>
<div className="absolute top-2 left-2 z-20 flex flex-col">
<span className="text-[9px] font-bold text-orange-500/80 uppercase tracking-widest font-sans drop-shadow-[0_0_2px_rgba(249,115,22,0.8)]">
                Stream.IO
              </span>
</div>
<div className="absolute top-2 right-2 z-20 flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_6px_#f97316] animate-pulse"></div>
<span className="text-[10px] font-mono font-medium text-orange-100 tracking-wider drop-shadow-[0_0_2px_rgba(249,115,22,0.8)]">
                LIVE
              </span>
</div>
<div className="absolute bottom-0 inset-x-0 h-6 bg-black/80 border-t border-orange-500/30 backdrop-blur-md z-20 flex items-center justify-between px-3">
<div className="flex items-center gap-2">
<span className="text-[8px] text-zinc-500 font-mono">RX</span>
<span className="text-[10px] text-zinc-300 font-mono group-hover:text-zinc-100 transition-colors">
                  48.2k
                </span>
</div>
<div className="flex items-center gap-2">
<span className="text-[8px] text-zinc-500 font-mono">TX</span>
<span className="text-[10px] text-zinc-300 font-mono group-hover:text-zinc-100 transition-colors">
                  12.1k
                </span>
</div>
<div className="flex items-center gap-2">
<span className="text-[8px] text-zinc-500 font-mono">ERR</span>
<span className="text-[10px] text-green-400 font-mono drop-shadow-[0_0_3px_#22c55e]">
                  0.00
                </span>
</div>
</div>
</div>
<div className="relative z-10 px-1 mt-auto">
<h3 className="text-base text-zinc-200 font-medium tracking-tight mb-1" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
              Real-Time Monitoring
            </h3>
<p className="text-sm text-zinc-400 font-sans leading-relaxed">
              Continuous telemetry stream with sub-millisecond latency.
            </p>
</div>
</div>
<div className="flex flex-col group transition-all duration-500 hover:-translate-y-1 delay-[50ms] w-full rounded-[2rem] p-6 relative" style="background: linear-gradient(135deg, #2a2a2e 0%, #121214 100%); 
           box-shadow: -16px -16px 40px rgba(63, 63, 70, 0.04), 32px 32px 80px rgba(0,0,0,0.9), inset 1px 1px 2px rgba(255,255,255,0.1), inset -1px -1px 4px rgba(0,0,0,0.8); 
           border: 1px solid #3f3f46;">
<div className="absolute inset-0 rounded-[2rem] opacity-[0.04] pointer-events-none mix-blend-screen" style={{backgroundImage: 'repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 4px)'}}></div>
<div className="absolute inset-0 rounded-[2rem] pointer-events-none" style={{background: 'radial-gradient(120% 120% at 0% 0%, rgba(255,255,255,0.06) 0%, transparent 50%)'}}></div>
<div className="relative z-10 flex justify-between items-center mb-6 pl-1 pr-1 mt-1">
<span className="text-xs font-bold text-zinc-600 uppercase tracking-widest font-sans" style={{textShadow: '0px 1px 1px rgba(255, 255, 255, 0.1), 0px -1px 1px rgba(0,0,0,0.8)'}}>
              RTE.02
            </span>
<div className="relative w-4 h-4 rounded-full bg-zinc-900 flex items-center justify-center" style={{boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 1), 0 1px 1px rgba(255,255,255,0.1)'}}>
<div className="relative w-2.5 h-2.5 rounded-full bg-orange-950 border border-black transition-colors duration-500" style={{boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.2)'}}>
<div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-300 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{boxShadow: '0 0 8px #f97316, inset 0 1px 2px rgba(255,255,255,0.8)'}}></div>
</div>
</div>
</div>
<div className="relative z-10 mb-8 flex gap-3 h-32 mt-2">
<div className="w-9 h-full bg-zinc-900 rounded-[4px] border border-[#18181b] flex flex-col items-center justify-between py-2 px-1 z-10" style={{boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.8), 0 1px 1px rgba(255,255,255,0.05)'}}>
<span className="text-[7px] font-bold text-zinc-500 tracking-wider" style={{textShadow: '0 1px 0 rgba(255, 255, 255, 0.1), 0 -1px 0 rgba(0,0,0,0.8)'}}>
                LOAD
              </span>
<div className="w-full flex-1 mt-2 mb-1 flex flex-col justify-between gap-[2px] bg-zinc-950 p-1 rounded-[2px] shadow-inner border border-black">
<div className="w-full flex-1 rounded-[1px] bg-red-950 border border-red-900/30 transition-all duration-100 group-hover:bg-red-500 group-hover:border-red-400 group-hover:shadow-[0_0_6px_#ef4444] delay-0 group-hover:delay-[400ms]"></div>
<div className="w-full flex-1 rounded-[1px] bg-orange-950 border border-orange-900/30 transition-all duration-100 group-hover:bg-orange-500 group-hover:border-orange-400 group-hover:shadow-[0_0_6px_#f97316] delay-0 group-hover:delay-[300ms]"></div>
<div className="w-full flex-1 rounded-[1px] bg-orange-950 border border-orange-900/30 transition-all duration-100 group-hover:bg-orange-500 group-hover:border-orange-400 group-hover:shadow-[0_0_6px_#f97316] delay-0 group-hover:delay-[200ms]"></div>
<div className="w-full flex-1 rounded-[1px] bg-green-950 border border-green-900/30 transition-all duration-100 group-hover:bg-green-500 group-hover:border-green-400 group-hover:shadow-[0_0_6px_#22c55e] delay-0 group-hover:delay-[100ms]"></div>
<div className="w-full flex-1 rounded-[1px] bg-green-500 border border-green-400 shadow-[0_0_6px_#22c55e]"></div>
</div>
</div>
<div className="flex-1 h-full bg-zinc-950 rounded-[4px] relative border border-black overflow-hidden z-10" style={{boxShadow: 'inset 0 8px 16px rgba(0, 0, 0, 1), inset 0 2px 4px rgba(0, 0, 0, 0.8), 0 1px 1px rgba(255,255,255,0.1)'}}>
<div className="absolute inset-0 pointer-events-none z-30" style={{background: 'linear-gradient(to bottom, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 40%, transparent 40%)'}}></div>
<div className="absolute inset-0 opacity-20 z-0" style={{backgroundImage: 'linear-gradient(rgba(249,115,22,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.4) 1px, transparent 1px)', backgroundSize: '8px 8px', backgroundPosition: '-1px -1px'}}></div>
<div className="absolute left-1/2 -translate-x-1/2 top-2 flex items-center gap-1 z-20 transition-opacity duration-300 delay-0 group-hover:delay-[400ms] opacity-100 group-hover:opacity-30">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_4px_#22c55e]"></div>
<span className="text-[7px] font-mono text-green-400 tracking-wider font-bold">
                  RTE.A ACTIVE
                </span>
</div>
<div className="absolute left-1/2 -translate-x-1/2 bottom-2 flex items-center gap-1 z-20 transition-opacity duration-300 delay-0 group-hover:delay-[400ms] opacity-30 group-hover:opacity-100">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_4px_#f97316]"></div>
<span className="text-[7px] font-mono text-orange-400 tracking-wider font-bold">
                  RTE.B ACTIVE
                </span>
</div>
<svg className="absolute inset-0 w-full h-full z-10" preserveaspectratio="none" viewbox="0 0 200 100">
<path d="M 20 50 L 60 50 L 90 25 L 160 25" fill="none" stroke="#27272a" strokeLinejoin="round" strokeWidth="3"></path>
<path d="M 60 50 L 90 75 L 160 75" fill="none" stroke="#27272a" strokeLinejoin="round" strokeWidth="3"></path>
<path className="transition-opacity duration-300 delay-0 group-hover:delay-[400ms] opacity-100 group-hover:opacity-0" d="M 20 50 L 60 50 L 90 25 L 160 25" fill="none" stroke="#22c55e" strokeLinejoin="round" strokeWidth="3" style={{filter: 'drop-shadow(0 0 5px rgba(34,197,94,0.8))'}}></path>
<path className="transition-opacity duration-300 delay-0 group-hover:delay-[400ms] opacity-0 group-hover:opacity-100" d="M 20 50 L 60 50 L 90 75 L 160 75" fill="none" stroke="#f97316" strokeLinejoin="round" strokeWidth="3" style={{filter: 'drop-shadow(0 0 5px rgba(249,115,22,0.8))'}}></path>
<circle cx="20" cy="50" fill="#27272a" r="4" stroke="#71717a" strokeWidth="2"></circle>
<circle cx="60" cy="50" fill="#71717a" r="2.5"></circle>
<circle cx="160" cy="25" fill="#27272a" r="4" stroke="#71717a" strokeWidth="2"></circle>
<circle cx="160" cy="75" fill="#27272a" r="4" stroke="#71717a" strokeWidth="2"></circle>
</svg>
</div>
</div>
<div className="z-10 mt-auto pr-1 pl-1 relative">
<h3 className="text-base text-zinc-200 font-medium tracking-tight mb-1" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
              Adaptive Routing
            </h3>
<p className="text-sm text-zinc-400 font-sans leading-relaxed">
              Dynamic signal pathing based on continuous load thresholds.
            </p>
</div>
</div>
<div className="flex flex-col group transition-all duration-500 hover:-translate-y-1 delay-[100ms] w-full rounded-[2rem] p-6 relative" style="background: linear-gradient(135deg, #2a2a2e 0%, #121214 100%); 
           box-shadow: -16px -16px 40px rgba(63, 63, 70, 0.04), 32px 32px 80px rgba(0,0,0,0.9), inset 1px 1px 2px rgba(255,255,255,0.1), inset -1px -1px 4px rgba(0,0,0,0.8); 
           border: 1px solid #3f3f46;">
<div className="absolute inset-0 rounded-[2rem] opacity-[0.04] pointer-events-none mix-blend-screen" style={{backgroundImage: 'repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 4px)'}}></div>
<div className="absolute inset-0 rounded-[2rem] pointer-events-none" style={{background: 'radial-gradient(120% 120% at 0% 0%, rgba(255,255,255,0.06) 0%, transparent 50%)'}}></div>
<div className="relative z-10 flex justify-between items-center mb-6 pl-1 pr-1 mt-1">
<span className="text-xs font-bold text-zinc-600 uppercase tracking-widest font-sans" style={{textShadow: '0px 1px 1px rgba(255, 255, 255, 0.1), 0px -1px 1px rgba(0,0,0,0.8)'}}>
              FAL.03
            </span>
<div className="relative w-4 h-4 rounded-full bg-zinc-900 flex items-center justify-center" style={{boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 1), 0 1px 1px rgba(255,255,255,0.1)'}}>
<div className="relative w-2.5 h-2.5 rounded-full bg-orange-950 border border-black transition-colors duration-500" style={{boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.2)'}}>
<div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-300 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{boxShadow: '0 0 8px #f97316, inset 0 1px 2px rgba(255,255,255,0.8)'}}></div>
</div>
</div>
</div>
<div className="relative z-10 mb-8 w-full h-32 bg-[#0a0a0c] rounded-[4px] border border-black overflow-hidden mt-2 cursor-crosshair" style={{boxShadow: 'inset 0 8px 16px rgba(0, 0, 0, 1), 0 1px 1px rgba(255,255,255,0.05)'}}>
<div className="absolute inset-0 opacity-[0.25] pointer-events-none" style={{backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 6px)'}}></div>
<div className="absolute top-1/2 left-[5rem] right-[5rem] h-3 bg-zinc-950 border-t border-b border-black -translate-y-1/2 z-0" style={{boxShadow: 'inset 0 4px 8px rgba(0,0,0,1)'}}>
<div className="absolute top-[3px] bottom-[3px] left-1 right-1 flex flex-col justify-between opacity-40">
<div className="w-full h-[1px] bg-orange-600 shadow-[0_0_2px_#ea580c]"></div>
<div className="w-full h-[1px] bg-orange-600 shadow-[0_0_2px_#ea580c]"></div>
</div>
</div>
<div className="absolute top-1/2 left-[4.8rem] w-9 h-7 -translate-y-1/2 rounded-[2px] transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:left-[calc(100%-7.05rem)] z-10 flex flex-col justify-center items-center gap-[3px]" style={{background: 'linear-gradient(to bottom, #71717a 0%, #3f3f46 100%)', border: '1px solid #18181b', boxShadow: '0 4px 12px rgba(0, 0, 0, 1), inset 0 1px 1px rgba(255, 255, 255, 0.4), inset 0 -1px 2px rgba(0,0,0,0.4)'}}>
<div className="flex gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-900 shadow-[inset_0_1px_2px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.2)]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-900 shadow-[inset_0_1px_2px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.2)]"></div>
</div>
<div className="w-5 h-[1.5px] bg-black opacity-80 shadow-[0_1px_0_rgba(255,255,255,0.2)]"></div>
<div className="w-5 h-[1.5px] bg-black opacity-80 shadow-[0_1px_0_rgba(255,255,255,0.2)]"></div>
</div>
<div className="absolute left-3 top-2 bottom-2 w-16 rounded-[3px] flex flex-col items-center p-1.5 z-20 transition-all duration-300" style={{background: 'linear-gradient(to bottom, #52525b 0%, #3f3f46 10%, #27272a 100%)', border: '1px solid #18181b', boxShadow: '6px 0 12px -4px rgba(0, 0, 0, 0.9), inset 0 1px 2px rgba(255, 255, 255, 0.3), inset 0 -2px 4px rgba(0,0,0,0.8)'}}>
<div className="w-full h-1.5 bg-zinc-900 rounded-[1px] shadow-[inset_0_2px_2px_rgba(0,0,0,1)] mb-2"></div>
<div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e,inset_0_1px_2px_rgba(255,255,255,0.8)] border border-black/50 transition-colors duration-200 delay-0 group-hover:bg-red-600 group-hover:shadow-[0_0_8px_#dc2626,inset_0_1px_2px_rgba(255,255,255,0.8)] group-hover:delay-100 mb-2"></div>
<div className="w-full h-5 bg-zinc-950 rounded-[2px] border border-black flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,1)] relative overflow-hidden mb-auto">
<div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 50%, transparent 50%)', backgroundSize: '100% 2px'}}></div>
<span className="text-[9px] font-mono font-bold text-green-400 drop-shadow-[0_0_2px_rgba(34,197,94,0.8)] transition-colors duration-200 delay-0 group-hover:text-red-500 group-hover:drop-shadow-[0_0_2px_rgba(220,38,38,0.8)] group-hover:delay-100 tracking-wider">
                  PRI
                </span>
</div>
<div className="w-full flex-1 flex flex-col justify-end gap-[3px] pb-1 opacity-60">
<div className="w-full h-[2px] bg-zinc-950 shadow-[inset_0_1px_1px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.1)] rounded-full"></div>
<div className="w-full h-[2px] bg-zinc-950 shadow-[inset_0_1px_1px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.1)] rounded-full"></div>
<div className="w-full h-[2px] bg-zinc-950 shadow-[inset_0_1px_1px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.1)] rounded-full"></div>
</div>
</div>
<div className="absolute right-3 top-2 bottom-2 w-16 rounded-[3px] flex flex-col items-center p-1.5 z-20 transition-all duration-300" style={{background: 'linear-gradient(to bottom, #52525b 0%, #3f3f46 10%, #27272a 100%)', border: '1px solid #18181b', boxShadow: '-6px 0 12px -4px rgba(0, 0, 0, 0.9), inset 0 1px 2px rgba(255, 255, 255, 0.3), inset 0 -2px 4px rgba(0,0,0,0.8)'}}>
<div className="w-full h-1.5 bg-zinc-900 rounded-[1px] shadow-[inset_0_2px_2px_rgba(0,0,0,1)] mb-2"></div>
<div className="w-3 h-3 rounded-full bg-yellow-600/30 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)] border border-black/50 transition-colors duration-200 delay-0 group-hover:bg-green-500 group-hover:shadow-[0_0_8px_#22c55e,inset_0_1px_2px_rgba(255,255,255,0.8)] group-hover:delay-[300ms] mb-2"></div>
<div className="w-full h-5 bg-zinc-950 rounded-[2px] border border-black flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,1)] relative overflow-hidden mb-auto">
<div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 50%, transparent 50%)', backgroundSize: '100% 2px'}}></div>
<span className="text-[9px] font-mono font-bold text-yellow-600/40 transition-colors duration-200 delay-0 group-hover:text-green-400 group-hover:drop-shadow-[0_0_2px_rgba(34,197,94,0.8)] group-hover:delay-[300ms] tracking-wider">
                  SEC
                </span>
</div>
<div className="w-full flex-1 flex flex-col justify-end gap-[3px] pb-1 opacity-60">
<div className="w-full h-[2px] bg-zinc-950 shadow-[inset_0_1px_1px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.1)] rounded-full"></div>
<div className="w-full h-[2px] bg-zinc-950 shadow-[inset_0_1px_1px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.1)] rounded-full"></div>
<div className="w-full h-[2px] bg-zinc-950 shadow-[inset_0_1px_1px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.1)] rounded-full"></div>
</div>
</div>
</div>
<div className="relative z-10 px-1 mt-auto">
<h3 className="text-base text-zinc-200 font-medium tracking-tight mb-1" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
              Fail-Safe Redundancy
            </h3>
<p className="text-sm text-zinc-400 font-sans leading-relaxed">
              Automatic hardware failover protocols ensuring zero data loss.
            </p>
</div>
</div>
<div className="flex flex-col group transition-all duration-500 hover:-translate-y-1 delay-[150ms] w-full rounded-[2rem] p-6 relative" style="background: linear-gradient(135deg, #2a2a2e 0%, #121214 100%); 
           box-shadow: -16px -16px 40px rgba(63, 63, 70, 0.04), 32px 32px 80px rgba(0,0,0,0.9), inset 1px 1px 2px rgba(255,255,255,0.1), inset -1px -1px 4px rgba(0,0,0,0.8); 
           border: 1px solid #3f3f46;">
<div className="absolute inset-0 rounded-[2rem] opacity-[0.04] pointer-events-none mix-blend-screen" style={{backgroundImage: 'repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 4px)'}}></div>
<div className="absolute inset-0 rounded-[2rem] pointer-events-none" style={{background: 'radial-gradient(120% 120% at 0% 0%, rgba(255,255,255,0.06) 0%, transparent 50%)'}}></div>
<div className="relative z-10 flex justify-between items-center mb-6 pl-1 pr-1 mt-1">
<span className="text-xs font-bold text-zinc-600 uppercase tracking-widest font-sans" style={{textShadow: '0px 1px 1px rgba(255, 255, 255, 0.1), 0px -1px 1px rgba(0,0,0,0.8)'}}>
              AI.04
            </span>
<div className="relative w-4 h-4 rounded-full bg-zinc-900 flex items-center justify-center" style={{boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 1), 0 1px 1px rgba(255,255,255,0.1)'}}>
<div className="relative w-2.5 h-2.5 rounded-full bg-orange-950 border border-black transition-colors duration-500" style={{boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.2)'}}>
<div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-300 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{boxShadow: '0 0 8px #f97316, inset 0 1px 2px rgba(255,255,255,0.8)'}}></div>
</div>
</div>
</div>
<div className="relative z-10 mb-8 flex justify-center items-center h-32 mt-2">
<div className="relative w-28 h-28 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(145deg, #52525b 0%, #3f3f46 20%, #27272a 100%)', boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.9), inset 0 2px 4px rgba(255, 255, 255, 0.3), inset 0 -2px 4px rgba(0,0,0,0.8)', border: '1px solid #18181b'}}>
<svg className="absolute inset-0 w-full h-full opacity-40" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="#000" stroke-dasharray="2 4" strokeWidth="2.5"></circle>
<circle cx="50" cy="50" fill="none" opacity="0.5" r="45" stroke="#fff" stroke-dasharray="2 4" strokeWidth="1" transform="translate(0, 1)"></circle>
</svg>
<div className="relative w-[4.5rem] h-[4.5rem] rounded-full bg-[#0a0a0c] border border-black overflow-hidden flex items-center justify-center cursor-crosshair" style={{boxShadow: 'inset 0 8px 16px rgba(0, 0, 0, 1), inset 0 2px 4px rgba(0, 0, 0, 0.8), 0 1px 1px rgba(255,255,255,0.1)'}}>
<div className="absolute inset-0 pointer-events-none z-30" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 40%, transparent 40%)'}}></div>
<div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle, rgba(249,115,22,0.6) 1px, transparent 1px)', backgroundSize: '3px 3px'}}></div>
<div className="absolute inset-[4px] rounded-full border border-orange-500/20 z-10"></div>
<div className="absolute inset-[14px] rounded-full border border-orange-500/20 z-10"></div>
<div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-orange-500/30 z-10"></div>
<div className="absolute left-0 right-0 top-1/2 h-[1px] bg-orange-500/30 z-10"></div>
<div className="absolute inset-0 origin-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 delay-100 animate-spin" style={{background: 'conic-gradient(from 0deg, transparent 60%, rgba(249,115,22,0.1) 90%, rgba(249,115,22,0.9) 100%)', animationDuration: '2s'}}></div>
<div className="absolute w-1.5 h-1.5 rounded-full bg-orange-500 z-20 shadow-[0_0_6px_#f97316]"></div>
<div className="absolute top-3 left-3 w-1 h-1 rounded-full bg-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 shadow-[0_0_4px_#fdba74]" style={{transitionDelay: '300ms'}}></div>
<div className="absolute bottom-4 left-6 w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 shadow-[0_0_6px_#f97316]" style={{transitionDelay: '700ms'}}></div>
<div className="absolute top-5 right-3 w-1 h-1 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 shadow-[0_0_6px_#4ade80]" style={{transitionDelay: '1100ms'}}></div>
<div className="absolute top-3 right-1 w-5 h-5 border-[1.5px] border-green-500/0 group-hover:border-green-500/80 rounded-[1px] transition-all duration-300 z-20 scale-150 group-hover:scale-100 opacity-0 group-hover:opacity-100" style={{boxShadow: 'rgba(74, 222, 128, 0.2) 0px 0px 4px inset', transitionDelay: '1100ms'}}></div>
</div>
<div className="absolute -right-4 -bottom-1 w-12 h-5 bg-zinc-950 rounded-[2px] border border-black flex items-center justify-center z-20" style={{boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 1), 0 4px 6px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255,255,255,0.1)'}}>
<span className="text-[8px] font-mono font-bold text-zinc-700 group-hover:text-green-400 transition-colors duration-300 delay-0 group-hover:delay-[1200ms] tracking-wider" style={{textShadow: '0 0 4px rgba(74,222,128,0)'}}>
                  CAL.OK
                </span>
</div>
<div className="absolute -right-2 bottom-4 w-4 h-[2px] bg-zinc-800 border-t border-b border-black shadow-[0_1px_1px_rgba(255,255,255,0.05)] z-10 -rotate-[15deg]"></div>
</div>
</div>
<div className="relative z-10 px-1 mt-auto">
<h3 className="text-base text-zinc-200 font-medium tracking-tight mb-1" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
              Intelligent Automation
            </h3>
<p className="text-sm text-zinc-400 font-sans leading-relaxed">
              Algorithmic calibration of environmental variables on the fly.
            </p>
</div>
</div>
</div>
<div className="-translate-x-1/2 z-30 flex w-[100vw] h-14 absolute bottom-0 left-1/2 items-center" style={{background: 'linear-gradient(180deg, #18181b 0%, #121214 100%)', borderTop: '1px solid rgba(63, 63, 70, 0.5)', borderBottom: '1px solid #000', boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 -4px 20px rgba(0,0,0,0.5)'}}>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen" style={{backgroundImage: 'repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 4px)'}}></div>
<div className="w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-start md:justify-between gap-8 md:gap-4 overflow-x-auto relative z-10 whitespace-nowrap" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>
<div className="flex items-center gap-1.5 shrink-0 text-[10px] uppercase tracking-tighter font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
<span className="text-zinc-500 font-normal">Packets:</span>
<span className="text-zinc-300 font-medium">1.2B</span>
</div>
<div className="h-4 w-[1px] bg-zinc-950 shadow-[1px_0_0_rgba(255,255,255,0.06)] shrink-0"></div>
<div className="flex items-center gap-1.5 shrink-0 text-[10px] uppercase tracking-tighter font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
<span className="text-zinc-500 font-normal">Errors:</span>
<span className="text-zinc-300 font-medium">0.00%</span>
</div>
<div className="h-4 w-[1px] bg-zinc-950 shadow-[1px_0_0_rgba(255,255,255,0.06)] shrink-0"></div>
<div className="flex items-center gap-1.5 shrink-0 text-[10px] uppercase tracking-tighter font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
<span className="text-zinc-500 font-normal">Bandwidth:</span>
<span className="text-zinc-300 font-medium">10GB/s</span>
</div>
<div className="h-4 w-[1px] bg-zinc-950 shadow-[1px_0_0_rgba(255,255,255,0.06)] shrink-0"></div>
<div className="flex items-center gap-1.5 shrink-0 text-[10px] uppercase tracking-tighter font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
<span className="text-zinc-500 font-normal">Connections:</span>
<span className="text-zinc-300 font-medium">842 Active</span>
</div>
<div className="h-4 w-[1px] bg-zinc-950 shadow-[1px_0_0_rgba(255,255,255,0.06)] shrink-0"></div>
<div className="flex items-center gap-1.5 shrink-0 text-[10px] uppercase tracking-tighter font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
<span className="text-zinc-500 font-normal">Status:</span>
<div className="flex items-center gap-1.5 ml-1">
<div className="relative w-1.5 h-1.5 rounded-full bg-green-500" style={{boxShadow: '0 0 6px 1px rgba(34, 197, 94, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.8), inset 0 -1px 1px rgba(0,0,0,0.6)'}}>
<div className="absolute inset-[1px] rounded-full bg-white opacity-70 blur-[0.5px]"></div>
</div>
<span className="text-zinc-200 font-medium">Nominal</span>
</div>
</div>
</div>
</div>
</section>
<section className="lg:pt-48 lg:pb-64 w-full z-10 pt-24 pb-24 relative">

<div className="md:mb-24 flex flex-col items-center gap-6 text-center max-w-4xl mr-auto mb-16 ml-auto pr-6 pl-6 relative">
<div className="w-full flex justify-between items-end border-b border-zinc-800/80 pb-3 mb-2 relative">
<div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-zinc-900 border border-black shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]">
<div className="w-1.5 h-1.5 bg-zinc-600 rounded-full shadow-[inset_0_1px_1px_rgba(0,0,0,1)] relative">
<div className="absolute inset-0 m-auto w-full h-[0.5px] bg-black rotate-45"></div>
</div>
</div>
<span className="text-[10px] font-mono text-zinc-500 tracking-[0.2em] uppercase font-bold" style={{textShadow: '0 1px 1px rgba(0,0,0,1)'}}>
              MOD. 02 // CONSOLE
            </span>
</div>
<div className="flex items-center gap-2 px-2.5 py-1 rounded-[3px] bg-zinc-950 border border-black shadow-[inset_0_2px_4px_rgba(0,0,0,1),_0_1px_1px_rgba(255,255,255,0.05)]">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_6px_#22c55e,inset_0_1px_1px_rgba(255,255,255,0.8)] animate-pulse"></div>
<span className="text-[9px] font-mono text-green-400 tracking-widest uppercase font-bold" style={{textShadow: '0 0 4px rgba(34,197,94,0.4)'}}>
              Sys.Online
            </span>
</div>
</div>
<div className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 border-l-2 border-t-2 border-zinc-700/30"></div>
<div className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 border-r-2 border-b-2 border-zinc-700/30"></div>
<div className="relative z-10 flex flex-col gap-5 mt-2">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-full bg-zinc-600/5 blur-[80px] rounded-full pointer-events-none z-0"></div>
<h2 className="relative z-10 md:text-5xl lg:text-6xl text-4xl font-medium tracking-tight font-dm-sans text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500" style={{filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))'}}>
            Command the System.
          </h2>
<p className="relative z-10 text-base md:text-lg text-zinc-400 font-sans max-w-2xl mx-auto leading-relaxed tracking-tight" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
            A unified console built for real-time precision and operational
            control.
          </p>
</div>
<div className="mt-4 flex items-center justify-center gap-4 opacity-50">
<div className="w-16 h-[2px] bg-zinc-950 rounded-full shadow-[inset_0_1px_1px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.1)]"></div>
<div className="flex gap-1.5">
<div className="w-1.5 h-2.5 bg-zinc-700 skew-x-[-20deg] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
<div className="w-1.5 h-2.5 bg-zinc-700 skew-x-[-20deg] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
<div className="w-1.5 h-2.5 bg-zinc-700 skew-x-[-20deg] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
</div>
<span className="text-[9px] font-mono text-zinc-500 tracking-[0.3em] font-bold" style={{textShadow: '0 1px 1px rgba(255, 255, 255, 0.1), 0 -1px 1px rgba(0,0,0,1)'}}>
            MK-IV.010
          </span>
<div className="w-16 h-[2px] bg-zinc-950 rounded-full shadow-[inset_0_1px_1px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6">

<div className="relative w-full mx-auto">
<div className="-bottom-8 -translate-x-1/2 z-0 bg-black/90 w-[90%] h-12 rounded-[100%] absolute left-1/2 blur-2xl"></div>

<div className="relative w-full rounded-3xl p-6 md:p-10 z-10 overflow-hidden" style="background: linear-gradient(135deg, #2a2a2e 0%, #121214 100%);
                            box-shadow: -16px -16px 40px rgba(63, 63, 70, 0.04),
                                        32px 32px 80px rgba(0,0,0,0.95),
                                        inset 1px 1px 2px rgba(255,255,255,0.1),
                                        inset -1px -1px 4px rgba(0,0,0,0.8);
                            border: 1px solid #3f3f46;">

<div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-screen" style={{backgroundImage: 'repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 4px)'}}></div>
<div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<div className="absolute inset-0 pointer-events-none mix-blend-overlay" style={{background: 'radial-gradient(150% 150% at 0% 0%, rgba(255,255,255,0.08) 0%, transparent 40%)'}}></div>

<div className="absolute top-5 left-5 w-3 h-3 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 rotate-45 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute top-5 right-5 w-3 h-3 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 -rotate-12 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute bottom-5 left-5 w-3 h-3 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 rotate-90 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute bottom-5 right-5 w-3 h-3 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 rotate-[30deg] shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>

<div className="relative z-10 w-full overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
<div className="min-w-[800px] flex gap-8 items-stretch pt-2">

<div className="flex-1 flex justify-between gap-6 pr-8 relative">

<div className="absolute right-0 top-0 bottom-0 w-px bg-zinc-950 shadow-[1px_0_0_rgba(255,255,255,0.05)]"></div>

<div className="flex flex-col items-center gap-6 group flex-1">
<span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest font-sans" style={{textShadow: '0 1px 0 rgba(255,255,255,0.05)'}}>
                      IN.01
                    </span>

<div className="relative w-14 h-14 rounded-full bg-zinc-950 flex items-center justify-center p-1.5 shadow-[inset_2px_2px_6px_rgba(0,0,0,1),_0_1px_1px_rgba(255,255,255,0.05)] border border-black">
<div className="w-full h-full rounded-full rotate-[-45deg] group-hover:rotate-[30deg] transition-transform duration-700 ease-out shadow-lg relative cursor-pointer" style={{background: 'conic-gradient(from 180deg at 50% 50%, #2a2a2e 0deg, #4b4b52 90deg, #18181b 180deg, #4b4b52 270deg, #2a2a2e 360deg)', border: '1px solid #3f3f46', boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.2), 0 4px 6px rgba(0,0,0,0.8)'}}>
<div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_6px_#f97316]"></div>
<div className="absolute inset-2.5 rounded-full border border-zinc-600/20 shadow-[inset_0_1px_1px_rgba(0,0,0,0.5)]"></div>
</div>
</div>

<button className="w-10 h-6 rounded bg-zinc-900 border border-zinc-950 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,1),_0_1px_1px_rgba(255,255,255,0.05)] active:scale-95 transition-all group-hover:bg-zinc-800">
<div className="w-4 h-1.5 rounded-full bg-orange-500 opacity-90 shadow-[0_0_8px_#f97316] transition-all"></div>
</button>

<div className="h-40 w-2.5 bg-zinc-950 rounded-full relative shadow-[inset_0_4px_8px_rgba(0,0,0,1)] border border-black mt-4 flex justify-center">

<div className="absolute -left-3 top-2 bottom-2 w-1 flex flex-col justify-between items-end opacity-20">
<div className="w-2 h-px bg-white"></div>
<div className="w-1 h-px bg-white"></div>
<div className="w-1 h-px bg-white"></div>
<div className="w-2 h-px bg-white"></div>
<div className="w-1 h-px bg-white"></div>
<div className="w-1 h-px bg-white"></div>
<div className="w-2 h-px bg-white"></div>
</div>

<div className="absolute bottom-[40%] group-hover:bottom-[60%] transition-all duration-[800ms] ease-out w-8 h-12 rounded shadow-[0_10px_20px_rgba(0,0,0,0.9)] cursor-pointer hover:brightness-110 flex items-center justify-center" style={{background: 'linear-gradient(180deg, #52525b 0%, #27272a 100%)', border: '1px solid #3f3f46', boxShadow: '0 8px 12px rgba(0, 0, 0, 0.9), inset 0 2px 2px rgba(255, 255, 255, 0.3), inset 0 -2px 4px rgba(0,0,0,0.9)'}}>
<div className="w-full h-1 bg-black/80 border-t border-b border-white/20 shadow-[inset_0_1px_2px_rgba(0,0,0,1)]"></div>
</div>
</div>
</div>

<div className="flex flex-col items-center gap-6 group flex-1">
<span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest font-sans" style={{textShadow: '0 1px 0 rgba(255,255,255,0.05)'}}>
                      RTE.02
                    </span>
<div className="relative w-14 h-14 rounded-full bg-zinc-950 flex items-center justify-center p-1.5 shadow-[inset_2px_2px_6px_rgba(0,0,0,1),_0_1px_1px_rgba(255,255,255,0.05)] border border-black">
<div className="w-full h-full rounded-full rotate-[15deg] group-hover:rotate-[85deg] transition-transform duration-700 ease-out shadow-lg relative cursor-pointer" style={{background: 'conic-gradient(from 180deg at 50% 50%, #2a2a2e 0deg, #4b4b52 90deg, #18181b 180deg, #4b4b52 270deg, #2a2a2e 360deg)', border: '1px solid #3f3f46', boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.2), 0 4px 6px rgba(0,0,0,0.8)'}}>
<div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_6px_#f97316]"></div>
<div className="absolute inset-2.5 rounded-full border border-zinc-600/20 shadow-[inset_0_1px_1px_rgba(0,0,0,0.5)]"></div>
</div>
</div>
<button className="w-10 h-6 rounded bg-zinc-900 border border-zinc-950 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,1),_0_1px_1px_rgba(255,255,255,0.05)] active:scale-95 transition-all">
<div className="w-4 h-1.5 rounded-full bg-zinc-800 opacity-50 shadow-inner transition-all group-hover:bg-orange-500 group-hover:opacity-90 group-hover:shadow-[0_0_8px_#f97316]"></div>
</button>
<div className="h-40 w-2.5 bg-zinc-950 rounded-full relative shadow-[inset_0_4px_8px_rgba(0,0,0,1)] border border-black mt-4 flex justify-center">
<div className="absolute -left-3 top-2 bottom-2 w-1 flex flex-col justify-between items-end opacity-20">
<div className="w-2 h-px bg-white"></div>
<div className="w-1 h-px bg-white"></div>
<div className="w-1 h-px bg-white"></div>
<div className="w-2 h-px bg-white"></div>
<div className="w-1 h-px bg-white"></div>
<div className="w-1 h-px bg-white"></div>
<div className="w-2 h-px bg-white"></div>
</div>
<div className="absolute bottom-[20%] group-hover:bottom-[45%] transition-all duration-[800ms] ease-out w-8 h-12 rounded shadow-[0_10px_20px_rgba(0,0,0,0.9)] cursor-pointer hover:brightness-110 flex items-center justify-center" style={{background: 'linear-gradient(180deg, #52525b 0%, #27272a 100%)', border: '1px solid #3f3f46', boxShadow: '0 8px 12px rgba(0, 0, 0, 0.9), inset 0 2px 2px rgba(255, 255, 255, 0.3), inset 0 -2px 4px rgba(0,0,0,0.9)'}}>
<div className="w-full h-1 bg-black/80 border-t border-b border-white/20 shadow-[inset_0_1px_2px_rgba(0,0,0,1)]"></div>
</div>
</div>
</div>

<div className="flex flex-col items-center gap-6 group flex-1">
<span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest font-sans" style={{textShadow: '0 1px 0 rgba(255,255,255,0.05)'}}>
                      FAL.03
                    </span>
<div className="relative w-14 h-14 rounded-full bg-zinc-950 flex items-center justify-center p-1.5 shadow-[inset_2px_2px_6px_rgba(0,0,0,1),_0_1px_1px_rgba(255,255,255,0.05)] border border-black">
<div className="w-full h-full rounded-full rotate-[60deg] group-hover:rotate-[-20deg] transition-transform duration-700 ease-out shadow-lg relative cursor-pointer" style={{background: 'conic-gradient(from 180deg at 50% 50%, #2a2a2e 0deg, #4b4b52 90deg, #18181b 180deg, #4b4b52 270deg, #2a2a2e 360deg)', border: '1px solid #3f3f46', boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.2), 0 4px 6px rgba(0,0,0,0.8)'}}>
<div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_6px_#f97316]"></div>
<div className="absolute inset-2.5 rounded-full border border-zinc-600/20 shadow-[inset_0_1px_1px_rgba(0,0,0,0.5)]"></div>
</div>
</div>
<button className="w-10 h-6 rounded bg-zinc-900 border border-zinc-950 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,1),_0_1px_1px_rgba(255,255,255,0.05)] active:scale-95 transition-all group-hover:bg-zinc-800">
<div className="w-4 h-1.5 rounded-full bg-orange-500 opacity-90 shadow-[0_0_8px_#f97316] transition-all"></div>
</button>
<div className="h-40 w-2.5 bg-zinc-950 rounded-full relative shadow-[inset_0_4px_8px_rgba(0,0,0,1)] border border-black mt-4 flex justify-center">
<div className="absolute -left-3 top-2 bottom-2 w-1 flex flex-col justify-between items-end opacity-20">
<div className="w-2 h-px bg-white"></div>
<div className="w-1 h-px bg-white"></div>
<div className="w-1 h-px bg-white"></div>
<div className="w-2 h-px bg-white"></div>
<div className="w-1 h-px bg-white"></div>
<div className="w-1 h-px bg-white"></div>
<div className="w-2 h-px bg-white"></div>
</div>
<div className="absolute bottom-[60%] group-hover:bottom-[80%] transition-all duration-[800ms] ease-out w-8 h-12 rounded shadow-[0_10px_20px_rgba(0,0,0,0.9)] cursor-pointer hover:brightness-110 flex items-center justify-center" style={{background: 'linear-gradient(180deg, #52525b 0%, #27272a 100%)', border: '1px solid #3f3f46', boxShadow: '0 8px 12px rgba(0, 0, 0, 0.9), inset 0 2px 2px rgba(255, 255, 255, 0.3), inset 0 -2px 4px rgba(0,0,0,0.9)'}}>
<div className="w-full h-1 bg-black/80 border-t border-b border-white/20 shadow-[inset_0_1px_2px_rgba(0,0,0,1)]"></div>
</div>
</div>
</div>

<div className="flex flex-col items-center gap-6 group flex-1">
<span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest font-sans" style={{textShadow: '0 1px 0 rgba(255,255,255,0.05)'}}>
                      AI.04
                    </span>
<div className="relative w-14 h-14 rounded-full bg-zinc-950 flex items-center justify-center p-1.5 shadow-[inset_2px_2px_6px_rgba(0,0,0,1),_0_1px_1px_rgba(255,255,255,0.05)] border border-black">
<div className="w-full h-full rounded-full rotate-[-10deg] group-hover:rotate-[60deg] transition-transform duration-700 ease-out shadow-lg relative cursor-pointer" style={{background: 'conic-gradient(from 180deg at 50% 50%, #2a2a2e 0deg, #4b4b52 90deg, #18181b 180deg, #4b4b52 270deg, #2a2a2e 360deg)', border: '1px solid #3f3f46', boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.2), 0 4px 6px rgba(0,0,0,0.8)'}}>
<div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-zinc-700 shadow-inner group-hover:bg-orange-500 group-hover:shadow-[0_0_6px_#f97316] transition-colors"></div>
<div className="absolute inset-2.5 rounded-full border border-zinc-600/20 shadow-[inset_0_1px_1px_rgba(0,0,0,0.5)]"></div>
</div>
</div>
<button className="w-10 h-6 rounded bg-zinc-900 border border-zinc-950 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,1),_0_1px_1px_rgba(255,255,255,0.05)] active:scale-95 transition-all">
<div className="w-4 h-1.5 rounded-full bg-zinc-800 opacity-50 shadow-inner transition-all group-hover:bg-orange-500 group-hover:opacity-90 group-hover:shadow-[0_0_8px_#f97316]"></div>
</button>
<div className="h-40 w-2.5 bg-zinc-950 rounded-full relative shadow-[inset_0_4px_8px_rgba(0,0,0,1)] border border-black mt-4 flex justify-center">
<div className="absolute -left-3 top-2 bottom-2 w-1 flex flex-col justify-between items-end opacity-20">
<div className="w-2 h-px bg-white"></div>
<div className="w-1 h-px bg-white"></div>
<div className="w-1 h-px bg-white"></div>
<div className="w-2 h-px bg-white"></div>
<div className="w-1 h-px bg-white"></div>
<div className="w-1 h-px bg-white"></div>
<div className="w-2 h-px bg-white"></div>
</div>
<div className="absolute bottom-[35%] group-hover:bottom-[50%] transition-all duration-[800ms] ease-out w-8 h-12 rounded shadow-[0_10px_20px_rgba(0,0,0,0.9)] cursor-pointer hover:brightness-110 flex items-center justify-center" style={{background: 'linear-gradient(180deg, #52525b 0%, #27272a 100%)', border: '1px solid #3f3f46', boxShadow: '0 8px 12px rgba(0, 0, 0, 0.9), inset 0 2px 2px rgba(255, 255, 255, 0.3), inset 0 -2px 4px rgba(0,0,0,0.9)'}}>
<div className="w-full h-1 bg-black/80 border-t border-b border-white/20 shadow-[inset_0_1px_2px_rgba(0,0,0,1)]"></div>
</div>
</div>
</div>
</div>

<div className="w-80 flex flex-col justify-between items-center bg-zinc-900/10 rounded-xl p-4 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] border border-zinc-800/30 group relative">

<div className="w-full flex justify-between items-center mb-4">
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest font-sans" style={{textShadow: '0 1px 0 rgba(255,255,255,0.05)'}}>
                      SYS.CTRL
                    </span>
<div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]"></div>
</div>

<div className="relative w-36 h-36 rounded-full bg-zinc-950 flex items-center justify-center p-2 shadow-[inset_4px_4px_10px_rgba(0,0,0,1),_inset_-1px_-1px_3px_rgba(255,255,255,0.05),_0_1px_1px_rgba(255,255,255,0.05)] border border-black group">

<div className="absolute inset-1.5 rounded-full z-0 opacity-80" style={{background: 'conic-gradient(from 225deg, #f97316 0%, #ea580c 45%, transparent 45%, transparent 100%)', maskImage: 'radial-gradient(transparent 68%, black 69%)', WebkitMaskImage: 'radial-gradient(transparent 68%, black 69%)'}}></div>

<div className="w-full h-full z-10 rounded-full rotate-[120deg] group-hover:rotate-[150deg] transition-transform duration-1000 ease-out shadow-2xl relative cursor-pointer flex items-center justify-center" style={{background: 'conic-gradient(from 180deg at 50% 50%, #2a2a2e 0deg, #4b4b52 90deg, #18181b 180deg, #4b4b52 270deg, #2a2a2e 360deg)', border: '1px solid #3f3f46', boxShadow: '0 15px 25px -5px rgba(0, 0, 0, 0.9), 0 8px 10px -5px rgba(0, 0, 0, 0.7), inset 0 2px 4px rgba(255, 255, 255, 0.2), inset 0 -2px 6px rgba(0,0,0,0.9)'}}>

<div className="absolute inset-3 rounded-full border border-zinc-600/30 shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]"></div>
<div className="absolute inset-5 rounded-full border border-zinc-700/20 shadow-[inset_0_1px_1px_rgba(0,0,0,0.5)]"></div>

<div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316,inset_0_1px_1px_rgba(255,255,255,0.8)]"></div>

<div className="w-16 h-16 rounded-full bg-zinc-900 shadow-[inset_0_2px_8px_rgba(0,0,0,0.9),_0_1px_2px_rgba(255,255,255,0.1)] flex items-center justify-center">
<div className="w-6 h-6 rounded-full border border-zinc-800 opacity-60"></div>
</div>
</div>
</div>

<div className="w-full flex justify-between items-end px-4 mt-8">

<div className="flex flex-col gap-[3px] items-center">
<div className="text-[8px] font-semibold text-zinc-600 mb-1">
                        L
                      </div>
<div className="w-5 h-1.5 bg-red-500 rounded-sm shadow-[0_0_8px_#ef4444,inset_0_1px_1px_rgba(255,255,255,0.4)]"></div>
<div className="w-5 h-1.5 bg-red-500 rounded-sm shadow-[0_0_8px_#ef4444,inset_0_1px_1px_rgba(255,255,255,0.4)]"></div>
<div className="w-5 h-1.5 bg-orange-500 rounded-sm shadow-[0_0_8px_#f97316,inset_0_1px_1px_rgba(255,255,255,0.4)]"></div>
<div className="w-5 h-1.5 bg-yellow-500 rounded-sm shadow-[0_0_8px_#eab308,inset_0_1px_1px_rgba(255,255,255,0.4)]"></div>
<div className="w-5 h-1.5 bg-yellow-500 rounded-sm shadow-[0_0_8px_#eab308,inset_0_1px_1px_rgba(255,255,255,0.4)]"></div>
<div className="w-5 h-1.5 bg-green-500 rounded-sm shadow-[0_0_8px_#22c55e,inset_0_1px_1px_rgba(255,255,255,0.4)]"></div>
<div className="w-5 h-1.5 bg-green-500 rounded-sm shadow-[0_0_8px_#22c55e,inset_0_1px_1px_rgba(255,255,255,0.4)]"></div>
<div className="w-5 h-1.5 bg-green-500 rounded-sm shadow-[0_0_8px_#22c55e,inset_0_1px_1px_rgba(255,255,255,0.4)]"></div>
</div>

<div className="flex flex-col items-center gap-3">
<div className="w-10 h-14 rounded-full bg-zinc-950 p-1 flex justify-center shadow-[inset_0_4px_8px_rgba(0,0,0,1),0_1px_1px_rgba(255,255,255,0.05)] border border-black">
<div className="w-8 h-8 rounded-full bg-gradient-to-b from-zinc-300 to-zinc-500 shadow-[0_6px_8px_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(255,255,255,0.9)] cursor-pointer hover:-translate-y-0.5 transition-transform flex items-center justify-center">
<div className="flex flex-col gap-px opacity-20">
<div className="w-3 h-px bg-black"></div>
<div className="w-4 h-px bg-black"></div>
<div className="w-3 h-px bg-black"></div>
</div>
</div>
</div>
<span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest font-sans drop-shadow">
                        Power
                      </span>
</div>

<div className="flex flex-col gap-[3px] items-center">
<div className="text-[8px] font-semibold text-zinc-600 mb-1">
                        R
                      </div>
<div className="w-5 h-1.5 bg-zinc-900 border border-black rounded-sm shadow-inner"></div>
<div className="w-5 h-1.5 bg-red-500 rounded-sm shadow-[0_0_8px_#ef4444,inset_0_1px_1px_rgba(255,255,255,0.4)]"></div>
<div className="w-5 h-1.5 bg-orange-500 rounded-sm shadow-[0_0_8px_#f97316,inset_0_1px_1px_rgba(255,255,255,0.4)]"></div>
<div className="w-5 h-1.5 bg-yellow-500 rounded-sm shadow-[0_0_8px_#eab308,inset_0_1px_1px_rgba(255,255,255,0.4)]"></div>
<div className="w-5 h-1.5 bg-yellow-500 rounded-sm shadow-[0_0_8px_#eab308,inset_0_1px_1px_rgba(255,255,255,0.4)]"></div>
<div className="w-5 h-1.5 bg-green-500 rounded-sm shadow-[0_0_8px_#22c55e,inset_0_1px_1px_rgba(255,255,255,0.4)]"></div>
<div className="w-5 h-1.5 bg-green-500 rounded-sm shadow-[0_0_8px_#22c55e,inset_0_1px_1px_rgba(255,255,255,0.4)]"></div>
<div className="w-5 h-1.5 bg-green-500 rounded-sm shadow-[0_0_8px_#22c55e,inset_0_1px_1px_rgba(255,255,255,0.4)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="-translate-x-1/2 z-30 flex w-[100vw] h-14 absolute bottom-0 left-1/2 items-center" style={{background: 'linear-gradient(180deg, #18181b 0%, #121214 100%)', borderTop: '1px solid rgba(63, 63, 70, 0.5)', borderBottom: '1px solid #000', boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 -4px 20px rgba(0,0,0,0.5)'}}>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen" style={{backgroundImage: 'repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 4px)'}}></div>
<div className="w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-start md:justify-between gap-8 md:gap-4 overflow-x-auto relative z-10 whitespace-nowrap" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>
<div className="flex items-center gap-1.5 shrink-0 text-[10px] uppercase tracking-tighter font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
<span className="text-zinc-500 font-normal">API Calls:</span>
<span className="text-zinc-300 font-medium">42k/s</span>
</div>
<div className="h-4 w-[1px] bg-zinc-950 shadow-[1px_0_0_rgba(255,255,255,0.06)] shrink-0"></div>
<div className="flex items-center gap-1.5 shrink-0 text-[10px] uppercase tracking-tighter font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
<span className="text-zinc-500 font-normal">Memory:</span>
<span className="text-zinc-300 font-medium">32%</span>
</div>
<div className="h-4 w-[1px] bg-zinc-950 shadow-[1px_0_0_rgba(255,255,255,0.06)] shrink-0"></div>
<div className="flex items-center gap-1.5 shrink-0 text-[10px] uppercase tracking-tighter font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
<span className="text-zinc-500 font-normal">CPU:</span>
<span className="text-zinc-300 font-medium">12%</span>
</div>
<div className="h-4 w-[1px] bg-zinc-950 shadow-[1px_0_0_rgba(255,255,255,0.06)] shrink-0"></div>
<div className="flex items-center gap-1.5 shrink-0 text-[10px] uppercase tracking-tighter font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
<span className="text-zinc-500 font-normal">Workers:</span>
<span className="text-zinc-300 font-medium">64 Active</span>
</div>
<div className="h-4 w-[1px] bg-zinc-950 shadow-[1px_0_0_rgba(255,255,255,0.06)] shrink-0"></div>
<div className="flex items-center gap-1.5 shrink-0 text-[10px] uppercase tracking-tighter font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
<span className="text-zinc-500 font-normal">Status:</span>
<div className="flex items-center gap-1.5 ml-1">
<div className="relative w-1.5 h-1.5 rounded-full bg-blue-500" style={{boxShadow: '0 0 6px 1px rgba(59, 130, 246, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.8), inset 0 -1px 1px rgba(0,0,0,0.6)'}}>
<div className="absolute inset-[1px] rounded-full bg-white opacity-70 blur-[0.5px]"></div>
</div>
<span className="text-zinc-200 font-medium">Syncing</span>
</div>
</div>
</div>
</div>
</section>
<section className="lg:pt-48 lg:pb-64 w-full z-10 pt-24 pb-24 relative">

<div className="md:mb-24 flex flex-col items-center gap-6 text-center max-w-4xl mr-auto mb-16 ml-auto pr-6 pl-6 relative">
<div className="w-full flex justify-between items-end border-b border-zinc-800/80 pb-3 mb-2 relative">
<div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-zinc-900 border border-black shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]">
<div className="w-1.5 h-1.5 bg-zinc-600 rounded-full shadow-[inset_0_1px_1px_rgba(0,0,0,1)] relative">
<div className="absolute inset-0 m-auto w-full h-[0.5px] bg-black rotate-45"></div>
</div>
</div>
<span className="text-[10px] font-mono text-zinc-500 tracking-[0.2em] uppercase font-bold" style={{textShadow: '0 1px 1px rgba(0,0,0,1)'}}>
              MOD. 03 // CONFIG
            </span>
</div>
<div className="flex items-center gap-2 px-2.5 py-1 rounded-[3px] bg-zinc-950 border border-black shadow-[inset_0_2px_4px_rgba(0,0,0,1),_0_1px_1px_rgba(255,255,255,0.05)]">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_6px_#22c55e,inset_0_1px_1px_rgba(255,255,255,0.8)] animate-pulse"></div>
<span className="text-[9px] font-mono text-green-400 tracking-widest uppercase font-bold" style={{textShadow: '0 0 4px rgba(34,197,94,0.4)'}}>
              Sys.Online
            </span>
</div>
</div>
<div className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 border-l-2 border-t-2 border-zinc-700/30"></div>
<div className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 border-r-2 border-b-2 border-zinc-700/30"></div>
<div className="relative z-10 flex flex-col gap-5 mt-2">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-full bg-zinc-600/5 blur-[80px] rounded-full pointer-events-none z-0"></div>
<h2 className="relative z-10 md:text-5xl lg:text-6xl text-4xl font-medium tracking-tight font-dm-sans text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500" style={{filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))'}}>
            Choose Your Configuration.
          </h2>
<p className="relative z-10 text-base md:text-lg text-zinc-400 font-sans max-w-2xl mx-auto leading-relaxed tracking-tight" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
            Scalable system control for every operational level.
          </p>
</div>
<div className="mt-4 flex items-center justify-center gap-4 opacity-50">
<div className="w-16 h-[2px] bg-zinc-950 rounded-full shadow-[inset_0_1px_1px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.1)]"></div>
<div className="flex gap-1.5">
<div className="w-1.5 h-2.5 bg-zinc-700 skew-x-[-20deg] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
<div className="w-1.5 h-2.5 bg-zinc-700 skew-x-[-20deg] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
<div className="w-1.5 h-2.5 bg-zinc-700 skew-x-[-20deg] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
</div>
<span className="text-[9px] font-mono text-zinc-500 tracking-[0.3em] font-bold" style={{textShadow: '0 1px 1px rgba(255, 255, 255, 0.1), 0 -1px 1px rgba(0,0,0,1)'}}>
            MK-IV.011
          </span>
<div className="w-16 h-[2px] bg-zinc-950 rounded-full shadow-[inset_0_1px_1px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="relative w-full rounded-[2rem] p-8 flex flex-col group transition-all duration-500 hover:-translate-y-1" style="background: linear-gradient(135deg, #2a2a2e 0%, #141417 100%);
                        box-shadow: -8px -8px 20px rgba(63, 63, 70, 0.03),
                                    16px 16px 40px rgba(0,0,0,0.8),
                                    inset 1px 1px 2px rgba(255,255,255,0.1),
                                    inset -1px -1px 4px rgba(0,0,0,0.8);
                        border: 1px solid #3f3f46;">

<div className="absolute inset-0 rounded-[2rem] opacity-[0.03] pointer-events-none mix-blend-screen" style={{backgroundImage: 'repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 4px)'}}></div>

<div className="absolute top-5 left-5 w-2.5 h-2.5 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 rotate-45 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute top-5 right-5 w-2.5 h-2.5 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 -rotate-12 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute bottom-5 left-5 w-2.5 h-2.5 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 rotate-90 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute bottom-5 right-5 w-2.5 h-2.5 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 rotate-[30deg] shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="relative z-10 flex items-center gap-3 mb-6 mt-1">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700" style={{boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.8), 0 1px 1px rgba(255,255,255,0.05)'}}></div>
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest font-sans" style={{textShadow: '0 1px 0 rgba(255,255,255,0.05)'}}>
              Core
            </span>
</div>
<div className="relative z-10 mb-8 flex items-end gap-1">
<span className="text-4xl md:text-5xl text-zinc-200 font-dm-sans font-medium tracking-tight" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
              $29
            </span>
<span className="text-sm text-zinc-500 font-sans mb-1.5 font-medium">
              /month
            </span>
</div>

<div className="relative z-10 w-full h-px bg-zinc-950 shadow-[0_1px_0_rgba(255,255,255,0.06)] mb-8"></div>
<ul className="relative z-10 flex flex-col gap-4 mb-10 flex-1">
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-zinc-600 mt-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-sm text-zinc-400 font-sans leading-relaxed" style={{textShadow: '0 1px 0 rgba(0,0,0,0.5)'}}>
                5 Deployment Projects
              </span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-zinc-600 mt-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-sm text-zinc-400 font-sans leading-relaxed" style={{textShadow: '0 1px 0 rgba(0,0,0,0.5)'}}>
                10GB System Storage
              </span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-zinc-600 mt-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-sm text-zinc-400 font-sans leading-relaxed" style={{textShadow: '0 1px 0 rgba(0,0,0,0.5)'}}>
                Standard Telemetry Data
              </span>
</li>
<li className="flex items-start gap-3 opacity-50">
<svg className="w-4 h-4 text-zinc-800 mt-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24">
<line x1="5" x2="19" y1="12" y2="12"></line>
</svg>
<span className="text-sm text-zinc-500 font-sans leading-relaxed">
                Priority Support Ticket
              </span>
</li>
</ul>
<button className="relative z-10 w-full px-6 py-4 rounded-xl text-zinc-300 font-medium text-sm flex items-center justify-center transition-all duration-300 hover:text-white active:scale-[0.98] mt-auto" style="background: linear-gradient(180deg, #3f3f46 0%, #27272a 100%);
                               box-shadow: inset 0 1px 1px rgba(255,255,255,0.15),
                                           0 8px 16px -4px rgba(0,0,0,0.6),
                                           0 4px 8px -4px rgba(0,0,0,0.6);
                               border: 1px solid #18181b;">
<span className="relative z-10 text-shadow-sm font-sans" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
              Initialize Core
            </span>
</button>
</div>

<div className="relative w-full rounded-[2rem] p-8 flex flex-col group transition-all duration-500 hover:-translate-y-1 z-20" style="background: linear-gradient(135deg, #2a2a2e 0%, #141417 100%);
                        box-shadow: -8px -8px 20px rgba(63, 63, 70, 0.03),
                                    16px 16px 50px rgba(0,0,0,0.9),
                                    inset 1px 1px 2px rgba(255,255,255,0.15),
                                    inset -1px -1px 4px rgba(0,0,0,0.8);
                        border: 1px solid #52525b;">

<div className="absolute inset-0 rounded-[2rem] opacity-[0.03] pointer-events-none mix-blend-screen" style={{backgroundImage: 'repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 4px)'}}></div>
<div className="absolute inset-0 rounded-[2rem] pointer-events-none opacity-20 mix-blend-overlay" style={{background: 'radial-gradient(120% 120% at 50% 0%, #f97316 0%, transparent 40%)'}}></div>

<div className="absolute top-5 left-5 w-2.5 h-2.5 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 rotate-[60deg] shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute top-5 right-5 w-2.5 h-2.5 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 -rotate-[20deg] shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute bottom-5 left-5 w-2.5 h-2.5 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 rotate-[45deg] shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute bottom-5 right-5 w-2.5 h-2.5 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 rotate-[-10deg] shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="relative z-10 flex items-center gap-3 mb-6 mt-1">
<div className="relative w-2.5 h-2.5 rounded-full bg-orange-500" style={{boxShadow: '0 0 12px 2px rgba(249, 115, 22, 0.8), inset 0 1px 2px rgba(255, 255, 255, 0.8), inset 0 -1px 2px rgba(0,0,0,0.6)'}}>
<div className="absolute inset-[1px] rounded-full bg-white opacity-70 blur-[0.5px]"></div>
</div>
<span className="text-xs font-semibold text-zinc-300 uppercase tracking-widest font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
              Pro
            </span>
</div>
<div className="relative z-10 mb-8 flex items-end gap-1">
<span className="text-4xl md:text-5xl text-zinc-50 font-dm-sans font-medium tracking-tight" style={{textShadow: '0 2px 4px rgba(0,0,0,0.8)'}}>
              $79
            </span>
<span className="text-sm text-zinc-400 font-sans mb-1.5 font-medium">
              /month
            </span>
</div>

<div className="relative z-10 w-full h-px bg-zinc-950 shadow-[0_1px_0_rgba(255,255,255,0.08)] mb-8"></div>
<ul className="relative z-10 flex flex-col gap-4 mb-10 flex-1">
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-orange-500/90 mt-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" style={{filter: 'drop-shadow(0 0 4px rgba(249,115,22,0.4))'}} viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-sm text-zinc-300 font-sans leading-relaxed" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
                Unlimited Deployment Projects
              </span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-orange-500/90 mt-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" style={{filter: 'drop-shadow(0 0 4px rgba(249,115,22,0.4))'}} viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-sm text-zinc-300 font-sans leading-relaxed" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
                100GB System Storage
              </span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-orange-500/90 mt-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" style={{filter: 'drop-shadow(0 0 4px rgba(249,115,22,0.4))'}} viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-sm text-zinc-300 font-sans leading-relaxed" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
                Advanced Telemetry &amp; Analytics
              </span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-orange-500/90 mt-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" style={{filter: 'drop-shadow(0 0 4px rgba(249,115,22,0.4))'}} viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-sm text-zinc-300 font-sans leading-relaxed" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
                Priority Support Protocol
              </span>
</li>
</ul>
<button className="relative z-10 w-full px-6 py-4 rounded-xl text-orange-50 font-medium text-sm flex items-center justify-center transition-all duration-300 hover:text-white active:scale-[0.98] mt-auto" style="background: linear-gradient(180deg, #9a3412 0%, #7c2d12 100%);
                               box-shadow: inset 0 1px 1px rgba(255,255,255,0.25),
                                           0 8px 16px -4px rgba(0,0,0,0.8),
                                           0 4px 8px -4px rgba(0,0,0,0.6),
                                           0 0 12px rgba(234,88,12,0.2);
                               border: 1px solid #431407;">
<span className="relative z-10 text-shadow-sm font-sans" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
              Deploy Pro
            </span>
</button>
</div>

<div className="relative w-full rounded-[2rem] p-8 flex flex-col group transition-all duration-500 hover:-translate-y-1" style="background: linear-gradient(135deg, #2a2a2e 0%, #141417 100%);
                        box-shadow: -8px -8px 20px rgba(63, 63, 70, 0.03),
                                    16px 16px 40px rgba(0,0,0,0.8),
                                    inset 1px 1px 2px rgba(255,255,255,0.1),
                                    inset -1px -1px 4px rgba(0,0,0,0.8);
                        border: 1px solid #3f3f46;">

<div className="absolute inset-0 rounded-[2rem] opacity-[0.03] pointer-events-none mix-blend-screen" style={{backgroundImage: 'repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 4px)'}}></div>

<div className="absolute top-5 left-5 w-2.5 h-2.5 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 rotate-[10deg] shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute top-5 right-5 w-2.5 h-2.5 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 -rotate-[85deg] shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute bottom-5 left-5 w-2.5 h-2.5 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 rotate-[30deg] shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute bottom-5 right-5 w-2.5 h-2.5 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 rotate-[-15deg] shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="relative z-10 flex items-center gap-3 mb-6 mt-1">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700" style={{boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.8), 0 1px 1px rgba(255,255,255,0.05)'}}></div>
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest font-sans" style={{textShadow: '0 1px 0 rgba(255,255,255,0.05)'}}>
              Enterprise
            </span>
</div>
<div className="relative z-10 mb-8 flex items-end gap-1">
<span className="text-4xl md:text-5xl text-zinc-200 font-dm-sans font-medium tracking-tight" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
              Custom
            </span>
</div>

<div className="relative z-10 w-full h-px bg-zinc-950 shadow-[0_1px_0_rgba(255,255,255,0.06)] mb-8"></div>
<ul className="relative z-10 flex flex-col gap-4 mb-10 flex-1">
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-zinc-600 mt-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-sm text-zinc-400 font-sans leading-relaxed" style={{textShadow: '0 1px 0 rgba(0,0,0,0.5)'}}>
                Custom Network Deployment
              </span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-zinc-600 mt-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-sm text-zinc-400 font-sans leading-relaxed" style={{textShadow: '0 1px 0 rgba(0,0,0,0.5)'}}>
                Unlimited Block Storage
              </span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-zinc-600 mt-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-sm text-zinc-400 font-sans leading-relaxed" style={{textShadow: '0 1px 0 rgba(0,0,0,0.5)'}}>
                Dedicated Systems Engineer
              </span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-zinc-600 mt-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-sm text-zinc-400 font-sans leading-relaxed" style={{textShadow: '0 1px 0 rgba(0,0,0,0.5)'}}>
                99.999% Hardware SLA
              </span>
</li>
</ul>
<button className="relative z-10 w-full px-6 py-4 rounded-xl text-zinc-300 font-medium text-sm flex items-center justify-center transition-all duration-300 hover:text-white active:scale-[0.98] mt-auto" style="background: linear-gradient(180deg, #3f3f46 0%, #27272a 100%);
                               box-shadow: inset 0 1px 1px rgba(255,255,255,0.15),
                                           0 8px 16px -4px rgba(0,0,0,0.6),
                                           0 4px 8px -4px rgba(0,0,0,0.6);
                               border: 1px solid #18181b;">
<span className="relative z-10 text-shadow-sm font-sans" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
              Contact Sysadmin
            </span>
</button>
</div>
</div>
<div className="-translate-x-1/2 z-30 flex w-[100vw] h-14 absolute bottom-0 left-1/2 items-center" style={{background: 'linear-gradient(180deg, #18181b 0%, #121214 100%)', borderTop: '1px solid rgba(63, 63, 70, 0.5)', borderBottom: '1px solid #000', boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 -4px 20px rgba(0,0,0,0.5)'}}>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen" style={{backgroundImage: 'repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 4px)'}}></div>
<div className="w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-start md:justify-between gap-8 md:gap-4 overflow-x-auto relative z-10 whitespace-nowrap" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>
<div className="flex items-center gap-1.5 shrink-0 text-[10px] uppercase tracking-tighter font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
<span className="text-zinc-500 font-normal">Storage:</span>
<span className="text-zinc-300 font-medium">4.2PB</span>
</div>
<div className="h-4 w-[1px] bg-zinc-950 shadow-[1px_0_0_rgba(255,255,255,0.06)] shrink-0"></div>
<div className="flex items-center gap-1.5 shrink-0 text-[10px] uppercase tracking-tighter font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
<span className="text-zinc-500 font-normal">IOPS:</span>
<span className="text-zinc-300 font-medium">125k</span>
</div>
<div className="h-4 w-[1px] bg-zinc-950 shadow-[1px_0_0_rgba(255,255,255,0.06)] shrink-0"></div>
<div className="flex items-center gap-1.5 shrink-0 text-[10px] uppercase tracking-tighter font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
<span className="text-zinc-500 font-normal">Queue:</span>
<span className="text-zinc-300 font-medium">0</span>
</div>
<div className="h-4 w-[1px] bg-zinc-950 shadow-[1px_0_0_rgba(255,255,255,0.06)] shrink-0"></div>
<div className="flex items-center gap-1.5 shrink-0 text-[10px] uppercase tracking-tighter font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
<span className="text-zinc-500 font-normal">Backup:</span>
<span className="text-zinc-300 font-medium">Synced</span>
</div>
<div className="h-4 w-[1px] bg-zinc-950 shadow-[1px_0_0_rgba(255,255,255,0.06)] shrink-0"></div>
<div className="flex items-center gap-1.5 shrink-0 text-[10px] uppercase tracking-tighter font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
<span className="text-zinc-500 font-normal">Status:</span>
<div className="flex items-center gap-1.5 ml-1">
<div className="relative w-1.5 h-1.5 rounded-full bg-green-500" style={{boxShadow: '0 0 6px 1px rgba(34, 197, 94, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.8), inset 0 -1px 1px rgba(0,0,0,0.6)'}}>
<div className="absolute inset-[1px] rounded-full bg-white opacity-70 blur-[0.5px]"></div>
</div>
<span className="text-zinc-200 font-medium">Secured</span>
</div>
</div>
</div>
</div>
</section>
<section className="lg:pt-48 lg:pb-64 w-full z-10 pt-24 pb-24 relative">

<div className="md:mb-24 flex flex-col items-center gap-6 text-center max-w-4xl mr-auto mb-16 ml-auto pr-6 pl-6 relative">
<div className="w-full flex justify-between items-end border-b border-zinc-800/80 pb-3 mb-2 relative">
<div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-zinc-900 border border-black shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]">
<div className="w-1.5 h-1.5 bg-zinc-600 rounded-full shadow-[inset_0_1px_1px_rgba(0,0,0,1)] relative">
<div className="absolute inset-0 m-auto w-full h-[0.5px] bg-black rotate-45"></div>
</div>
</div>
<span className="text-[10px] font-mono text-zinc-500 tracking-[0.2em] uppercase font-bold" style={{textShadow: '0 1px 1px rgba(0,0,0,1)'}}>
              MOD. 04 // METRICS
            </span>
</div>
<div className="flex items-center gap-2 px-2.5 py-1 rounded-[3px] bg-zinc-950 border border-black shadow-[inset_0_2px_4px_rgba(0,0,0,1),_0_1px_1px_rgba(255,255,255,0.05)]">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_6px_#22c55e,inset_0_1px_1px_rgba(255,255,255,0.8)] animate-pulse"></div>
<span className="text-[9px] font-mono text-green-400 tracking-widest uppercase font-bold" style={{textShadow: '0 0 4px rgba(34,197,94,0.4)'}}>
              Sys.Online
            </span>
</div>
</div>
<div className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 border-l-2 border-t-2 border-zinc-700/30"></div>
<div className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 border-r-2 border-b-2 border-zinc-700/30"></div>
<div className="relative z-10 flex flex-col gap-5 mt-2">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-full bg-zinc-600/5 blur-[80px] rounded-full pointer-events-none z-0"></div>
<h2 className="relative z-10 md:text-5xl lg:text-6xl text-4xl font-medium tracking-tight font-dm-sans text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500" style={{filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))'}}>
            Validated in Production.
          </h2>
<p className="relative z-10 text-base md:text-lg text-zinc-400 font-sans max-w-2xl mx-auto leading-relaxed tracking-tight" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
            Trusted by engineering teams operating at scale.
          </p>
</div>
<div className="mt-4 flex items-center justify-center gap-4 opacity-50">
<div className="w-16 h-[2px] bg-zinc-950 rounded-full shadow-[inset_0_1px_1px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.1)]"></div>
<div className="flex gap-1.5">
<div className="w-1.5 h-2.5 bg-zinc-700 skew-x-[-20deg] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
<div className="w-1.5 h-2.5 bg-zinc-700 skew-x-[-20deg] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
<div className="w-1.5 h-2.5 bg-zinc-700 skew-x-[-20deg] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
</div>
<span className="text-[9px] font-mono text-zinc-500 tracking-[0.3em] font-bold" style={{textShadow: '0 1px 1px rgba(255, 255, 255, 0.1), 0 -1px 1px rgba(0,0,0,1)'}}>
            MK-IV.012
          </span>
<div className="w-16 h-[2px] bg-zinc-950 rounded-full shadow-[inset_0_1px_1px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mb-16 relative"></div>

<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

<div className="lg:col-span-7 relative w-full rounded-[2rem] p-8 md:p-12 flex flex-col transition-transform duration-500 hover:-translate-y-1" style="background: linear-gradient(135deg, #2a2a2e 0%, #141417 100%);
                        box-shadow: -16px -16px 40px rgba(63, 63, 70, 0.03),
                                    24px 24px 60px rgba(0,0,0,0.8),
                                    inset 1px 1px 2px rgba(255,255,255,0.1),
                                    inset -1px -1px 4px rgba(0,0,0,0.8);
                        border: 1px solid #3f3f46;">

<div className="absolute inset-0 rounded-[2rem] opacity-[0.03] pointer-events-none mix-blend-screen" style={{backgroundImage: 'repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 4px)'}}></div>

<div className="absolute inset-0 rounded-[2rem] pointer-events-none opacity-20 mix-blend-overlay" style={{background: 'radial-gradient(100% 100% at 0% 0%, #ffffff 0%, transparent 50%)'}}></div>

<div className="absolute top-6 left-6 w-3 h-3 rounded-full flex items-center justify-center z-20" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 rotate-[35deg] shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute top-6 right-6 w-3 h-3 rounded-full flex items-center justify-center z-20" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 -rotate-12 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute bottom-6 left-6 w-3 h-3 rounded-full flex items-center justify-center z-20" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 rotate-90 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute bottom-6 right-6 w-3 h-3 rounded-full flex items-center justify-center z-20" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 rotate-[65deg] shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="">

<div className="mb-6 relative">
<svg className="w-12 h-12 text-zinc-900 opacity-60" fill="currentColor" style={{filter: 'drop-shadow(0 1px 1px rgba(255,255,255,0.15))'}} viewbox="0 0 24 24">
<path className="" d="M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3"></path>
</svg>
</div>
<p className="text-xl md:text-2xl text-zinc-300 font-dm-sans leading-relaxed tracking-tight" style={{textShadow: '0 2px 4px rgba(0,0,0,0.8)'}}>
                "Integrated across 120+ operational nodes without a single
                millisecond of downtime. The precision of the routing
                architecture completely changed our deployment workflows and
                redefined our hardware SLA expectations."
              </p>
</div>
<div className="mt-12">

<div className="w-full h-px bg-zinc-950 shadow-[0_1px_0_rgba(255,255,255,0.06)] mb-6"></div>
<div className="flex items-end justify-between">
<div className="">

<div className="w-10 h-[2px] bg-orange-500 mb-4 rounded-full" style={{boxShadow: '0 0 10px rgba(249,115,22,0.6)'}}></div>
<h4 className="text-lg font-dm-sans text-zinc-200 tracking-tight font-medium" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
                    NEXUS HEAVY INDUSTRIES
                  </h4>
<p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest font-sans mt-1.5" style={{textShadow: '0 1px 0 rgba(0,0,0,0.5)'}}>
                    Lead Systems Engineer
                  </p>
</div>

<div className="flex flex-col items-center gap-2">
<span className="text-[10px] font-semibold text-zinc-600 uppercase tracking-widest font-sans" style={{textShadow: '0 1px 0 rgba(255,255,255,0.05)'}}>
                    SYS.OP
                  </span>
<div className="relative w-3.5 h-3.5 rounded-full bg-orange-500" style={{boxShadow: '0 0 16px 2px rgba(249, 115, 22, 0.8), inset 0 1px 2px rgba(255, 255, 255, 0.8), inset 0 -1px 2px rgba(0,0,0,0.6)'}}>
<div className="absolute inset-[2px] rounded-full bg-white opacity-70 blur-[0.5px]"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">

<div className="relative w-full rounded-[2rem] p-8 flex flex-col transition-transform duration-500 hover:-translate-y-1 h-full" style={{background: 'linear-gradient(135deg, #2a2a2e 0%, #141417 100%)', boxShadow: '-8px -8px 20px rgba(63, 63, 70, 0.03), 16px 16px 40px rgba(0, 0, 0, 0.8), inset 1px 1px 2px rgba(255, 255, 255, 0.1), inset -1px -1px 4px rgba(0,0,0,0.8)', border: '1px solid #3f3f46'}}>
<div className="absolute inset-0 rounded-[2rem] opacity-[0.03] pointer-events-none mix-blend-screen" style={{backgroundImage: 'repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 4px)'}}></div>
<div className="absolute top-5 left-5 w-2.5 h-2.5 rounded-full flex items-center justify-center z-20" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 rotate-[15deg] shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute top-5 right-5 w-2.5 h-2.5 rounded-full flex items-center justify-center z-20" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 -rotate-[45deg] shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute bottom-5 left-5 w-2.5 h-2.5 rounded-full flex items-center justify-center z-20" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 rotate-[80deg] shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute bottom-5 right-5 w-2.5 h-2.5 rounded-full flex items-center justify-center z-20" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 rotate-[-20deg] shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="relative z-10 flex flex-col h-full justify-between">
<p className="text-lg md:text-xl text-zinc-300 font-dm-sans leading-relaxed tracking-tight" style={{textShadow: '0 2px 4px rgba(0,0,0,0.8)'}}>
                "Reduced system latency by 34% immediately after deployment
                across our global network."
              </p>
<div className="mt-8">
<div className="w-full h-px bg-zinc-950 shadow-[0_1px_0_rgba(255,255,255,0.06)] mb-5"></div>
<div className="flex items-center justify-between">
<div>
<h4 className="text-sm font-dm-sans text-zinc-200 tracking-tight font-medium" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
                      AEROSPACE DYNAMICS
                    </h4>
<p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest font-sans mt-1" style={{textShadow: '0 1px 0 rgba(0,0,0,0.5)'}}>
                      Infrastructure Dir.
                    </p>
</div>
<div className="relative w-2.5 h-2.5 rounded-full bg-green-500" style={{boxShadow: '0 0 12px 2px rgba(34, 197, 94, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.8), inset 0 -1px 2px rgba(0,0,0,0.6)'}}>
<div className="absolute inset-[1px] rounded-full bg-white opacity-70 blur-[0.5px]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full rounded-[2rem] p-8 flex flex-col transition-transform duration-500 hover:-translate-y-1 h-full" style={{background: 'linear-gradient(135deg, #2a2a2e 0%, #141417 100%)', boxShadow: '-8px -8px 20px rgba(63, 63, 70, 0.03), 16px 16px 40px rgba(0, 0, 0, 0.8), inset 1px 1px 2px rgba(255, 255, 255, 0.1), inset -1px -1px 4px rgba(0,0,0,0.8)', border: '1px solid #3f3f46'}}>
<div className="absolute inset-0 rounded-[2rem] opacity-[0.03] pointer-events-none mix-blend-screen" style={{backgroundImage: 'repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 4px)'}}></div>
<div className="absolute top-5 left-5 w-2.5 h-2.5 rounded-full flex items-center justify-center z-20" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 rotate-[60deg] shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute top-5 right-5 w-2.5 h-2.5 rounded-full flex items-center justify-center z-20" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 -rotate-[10deg] shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute bottom-5 left-5 w-2.5 h-2.5 rounded-full flex items-center justify-center z-20" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 rotate-[45deg] shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute bottom-5 right-5 w-2.5 h-2.5 rounded-full flex items-center justify-center z-20" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 rotate-[-70deg] shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="relative z-10 flex flex-col h-full justify-between">
<p className="text-lg md:text-xl text-zinc-300 font-dm-sans leading-relaxed tracking-tight" style={{textShadow: '0 2px 4px rgba(0,0,0,0.8)'}}>
                "Real-time telemetry and automated hardware failovers eliminated
                our operational blind spots."
              </p>
<div className="mt-8">
<div className="w-full h-px bg-zinc-950 shadow-[0_1px_0_rgba(255,255,255,0.06)] mb-5"></div>
<div className="flex items-center justify-between">
<div>
<h4 className="text-sm font-dm-sans text-zinc-200 tracking-tight font-medium" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
                      QUANTUM LOGISTICS
                    </h4>
<p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest font-sans mt-1" style={{textShadow: '0 1px 0 rgba(0,0,0,0.5)'}}>
                      Chief Architect
                    </p>
</div>
<div className="relative w-2.5 h-2.5 rounded-full bg-orange-500" style={{boxShadow: '0 0 12px 2px rgba(249, 115, 22, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.8), inset 0 -1px 2px rgba(0,0,0,0.6)'}}>
<div className="absolute inset-[1px] rounded-full bg-white opacity-70 blur-[0.5px]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="-translate-x-1/2 z-30 flex w-[100vw] h-14 absolute bottom-0 left-1/2 items-center" style={{background: 'linear-gradient(180deg, #18181b 0%, #121214 100%)', borderTop: '1px solid rgba(63, 63, 70, 0.5)', borderBottom: '1px solid #000', boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 -4px 20px rgba(0,0,0,0.5)'}}>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen" style={{backgroundImage: 'repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 4px)'}}></div>
<div className="w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-start md:justify-between gap-8 md:gap-4 overflow-x-auto relative z-10 whitespace-nowrap" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>
<div className="flex items-center gap-1.5 shrink-0 text-[10px] uppercase tracking-tighter font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
<span className="text-zinc-500 font-normal">Nodes:</span>
<span className="text-zinc-300 font-medium">124 Active</span>
</div>
<div className="h-4 w-[1px] bg-zinc-950 shadow-[1px_0_0_rgba(255,255,255,0.06)] shrink-0"></div>
<div className="flex items-center gap-1.5 shrink-0 text-[10px] uppercase tracking-tighter font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
<span className="text-zinc-500 font-normal">Routing:</span>
<span className="text-zinc-300 font-medium">Optimal</span>
</div>
<div className="h-4 w-[1px] bg-zinc-950 shadow-[1px_0_0_rgba(255,255,255,0.06)] shrink-0"></div>
<div className="flex items-center gap-1.5 shrink-0 text-[10px] uppercase tracking-tighter font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
<span className="text-zinc-500 font-normal">Packet Loss:</span>
<span className="text-zinc-300 font-medium">0.0%</span>
</div>
<div className="h-4 w-[1px] bg-zinc-950 shadow-[1px_0_0_rgba(255,255,255,0.06)] shrink-0"></div>
<div className="flex items-center gap-1.5 shrink-0 text-[10px] uppercase tracking-tighter font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
<span className="text-zinc-500 font-normal">Encryption:</span>
<span className="text-zinc-300 font-medium">AES-256</span>
</div>
<div className="h-4 w-[1px] bg-zinc-950 shadow-[1px_0_0_rgba(255,255,255,0.06)] shrink-0"></div>
<div className="flex items-center gap-1.5 shrink-0 text-[10px] uppercase tracking-tighter font-sans" style={{textShadow: '0 1px 0 rgba(0,0,0,0.8)'}}>
<span className="text-zinc-500 font-normal">Status:</span>
<div className="flex items-center gap-1.5 ml-1">
<div className="relative w-1.5 h-1.5 rounded-full bg-green-500" style={{boxShadow: '0 0 6px 1px rgba(34, 197, 94, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.8), inset 0 -1px 1px rgba(0,0,0,0.6)'}}>
<div className="absolute inset-[1px] rounded-full bg-white opacity-70 blur-[0.5px]"></div>
</div>
<span className="text-zinc-200 font-medium">Verified</span>
</div>
</div>
</div>
</div>
</section>
<section className="lg:pt-48 lg:pb-0 w-full z-10 pt-24 pb-12 relative">

<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-orange-500/5 blur-[120px] rounded-full"></div>
</div>

<div className="max-w-5xl mx-auto px-6 mb-24 relative z-10">
<div className="relative w-full rounded-[2.5rem] p-10 md:p-16 flex flex-col items-center text-center overflow-hidden" style="background: linear-gradient(135deg, #2a2a2e 0%, #141417 100%);
                        box-shadow: -16px -16px 40px rgba(63, 63, 70, 0.03),
                                    24px 24px 60px rgba(0,0,0,0.8),
                                    inset 1px 1px 2px rgba(255,255,255,0.1),
                                    inset -1px -1px 4px rgba(0,0,0,0.8);
                        border: 1px solid #3f3f46;">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen" style={{backgroundImage: 'repeating-linear-gradient(0deg, #fff, #fff 1px, transparent 1px, transparent 4px)'}}></div>

<div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay" style={{background: 'radial-gradient(120% 120% at 0% 0%, #ffffff 0%, transparent 60%)'}}></div>

<div className="absolute top-6 left-6 w-3 h-3 rounded-full flex items-center justify-center z-20" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 rotate-45 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute top-6 right-6 w-3 h-3 rounded-full flex items-center justify-center z-20" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 -rotate-12 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute bottom-6 left-6 w-3 h-3 rounded-full flex items-center justify-center z-20" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 rotate-90 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute bottom-6 right-6 w-3 h-3 rounded-full flex items-center justify-center z-20" style={{background: 'linear-gradient(135deg, #52525b 0%, #27272a 100%)', boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0,0,0,0.9)'}}>
<div className="w-full h-[1px] bg-zinc-950 rotate-[30deg] shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>


<div className="relative z-20 max-w-2xl mx-auto flex flex-col gap-6 mb-12">
<h2 className="text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500 font-dm-sans font-medium tracking-tight" style={{filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))'}}>
              Deploy With Precision.
            </h2>
<p className="text-lg text-zinc-400 font-sans leading-relaxed tracking-tight" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
              Activate your system. Configure your infrastructure. Take control.
            </p>
</div>

<div className="relative z-20 flex flex-col sm:flex-row gap-5 items-center justify-center w-full">

<button className="relative px-8 py-4 rounded-xl text-zinc-100 font-medium text-sm flex items-center justify-center gap-3 group transition-transform duration-100 active:scale-[0.98] w-full sm:w-auto" style="background: linear-gradient(180deg, #3f3f46 0%, #27272a 100%);
                               box-shadow: inset 0 1px 1px rgba(255,255,255,0.15),
                                           0 12px 24px -6px rgba(0,0,0,0.8),
                                           0 4px 8px -4px rgba(0,0,0,0.6);
                               border: 1px solid #18181b;">
<span className="relative z-10 flex items-center gap-2 text-shadow-sm font-sans" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-1" style={{boxShadow: '0 0 8px #f97316'}}></div>
                Access Console
              </span>

<div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
</button>

<button className="px-8 py-4 rounded-xl text-zinc-400 font-medium text-sm flex items-center justify-center transition-all duration-300 hover:text-white hover:bg-zinc-800/50 w-full sm:w-auto font-sans" style="background: rgba(39, 39, 42, 0.3);
                               backdrop-filter: blur(8px);
                               box-shadow: inset 0 0 0 1px rgba(255,255,255,0.05),
                                           inset 0 2px 4px rgba(0,0,0,0.2);">
              Request Enterprise Access
            </button>
</div>
</div>
</div>

<footer className="w-full bg-zinc-950 pt-20 pb-12 relative border-t border-zinc-900/50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
<div className="flex items-center gap-4">
<div className="text-sm font-bold tracking-[0.3em] text-zinc-100 uppercase">
                STRATUM
              </div>
<div className="h-4 w-px bg-zinc-800"></div>
<div className="flex items-center gap-2">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-40"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
</span>
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  Link Active
                </span>
</div>
</div>
<div className="relative w-full md:w-72">
<input className="w-full bg-transparent border-b border-zinc-800 py-2 text-xs text-zinc-400 focus:outline-none focus:border-orange-500/50 transition-colors font-mono" placeholder="Updates: terminal@access.io" type="email"/>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
<div className="flex flex-col gap-4">
<h4 className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                Capabilities
              </h4>
<nav className="flex flex-col gap-2">
<a className="text-xs text-zinc-400 hover:text-orange-500 transition-colors" href="#">
                  Monitoring
                </a>
<a className="text-xs text-zinc-400 hover:text-orange-500 transition-colors" href="#">
                  Failover
                </a>
<a className="text-xs text-zinc-400 hover:text-orange-500 transition-colors" href="#">
                  Automation
                </a>
</nav>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                Company
              </h4>
<nav className="flex flex-col gap-2">
<a className="text-xs text-zinc-400 hover:text-orange-500 transition-colors" href="#">
                  About
                </a>
<a className="text-xs text-zinc-400 hover:text-orange-500 transition-colors" href="#">
                  Security
                </a>
<a className="text-xs text-zinc-400 hover:text-orange-500 transition-colors" href="#">
                  Careers
                </a>
</nav>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                Resources
              </h4>
<nav className="flex flex-col gap-2">
<a className="text-xs text-zinc-400 hover:text-orange-500 transition-colors" href="#">
                  Documentation
                </a>
<a className="text-xs text-zinc-400 hover:text-orange-500 transition-colors" href="#">
                  API Status
                </a>
<a className="text-xs text-zinc-400 hover:text-orange-500 transition-colors" href="#">
                  Terminal Log
                </a>
</nav>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                Connect
              </h4>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="ri:twitter-x-fill"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="ri:github-fill"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="ri:discord-fill"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between pt-8 border-t border-zinc-900 text-[9px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
<div className="flex gap-6 mb-4 md:mb-0">
<span>©2026 STRATUM SYSTEMS</span>
<a className="hover:text-zinc-400" href="#">Privacy</a>
<a className="hover:text-zinc-400" href="#">Terms</a>
</div>
<div className="flex items-center gap-2">
<span>Region: NA-EAST-1</span>
<span className="text-zinc-800">//</span>
<span>Build: 4.0.2</span>
</div>
</div>
</div>
</footer>
</section>


    </>
  );
}
