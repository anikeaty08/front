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



                  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
                


                !function(){if(window.UnicornStudio){try{window.UnicornStudio.init()}catch(i){}}else{window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head||document.body).appendChild(i)}}();
              


      document.addEventListener("DOMContentLoaded", () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("sys-active");

              // Counter Animation
              if (entry.target.hasAttribute("data-sys-counter")) {
                const target = parseInt(entry.target.getAttribute("data-sys-counter"));
                const suffix = entry.target.getAttribute("data-sys-suffix") || "";
                const duration = 2800;
                const start = 0;
                const startTime = performance.now();

                const animate = (currentTime) => {
                  const elapsed = currentTime - startTime;
                  const progress = Math.min(elapsed / duration, 1);
                  const ease = 1 - Math.pow(1 - progress, 5);

                  entry.target.innerText = Math.floor(start + (target - start) * ease) + suffix;

                  if (progress < 1) requestAnimationFrame(animate);
                  else entry.target.innerText = target + suffix;
                };
                requestAnimationFrame(animate);
              }

              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1, rootMargin: "0px 0px -80px 0px" });

        document.querySelectorAll(".sys-reveal, .sys-flicker-anim, [data-sys-counter], .sys-bar-fill").forEach(el => observer.observe(el));
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
      

<div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-grid"></div>

<header className="relative z-40 h-16 border-b border-zinc-800 bg-[#050505] flex items-stretch sticky top-0">

<div className="md:w-64 flex bg-[#050505] w-full border-zinc-800 border-r pr-6 pl-6 items-center justify-between">
<span className="text-xl font-bold tracking-tighter text-white">TRACE<span className="text-orange-600">0</span></span>
<div className="w-2 h-2 bg-orange-600 rounded-none"></div>
</div>

<nav className="hidden md:flex flex-1 items-stretch">
<a className="flex items-center px-8 border-r border-zinc-800 text-xs font-mono uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-colors" href="#">
<span className="text-orange-600 mr-2">01.</span>
          Services
        </a>
<a className="flex items-center px-8 border-r border-zinc-800 text-xs font-mono uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-colors" href="#">
<span className="text-zinc-600 mr-2">02.</span>
          Process
        </a>
<a className="flex items-center px-8 border-r border-zinc-800 text-xs font-mono uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-colors" href="#">
<span className="text-zinc-600 mr-2">03.</span>
          Models
        </a>
</nav>

<div className="flex items-stretch">
<div className="flex items-center border-l border-zinc-800 bg-[#050505]">
<input className="bg-transparent text-xs font-mono text-zinc-300 px-6 py-2 w-48 focus:outline-none placeholder:text-zinc-700 uppercase" placeholder="CMD_SEARCH" type="text"/>
<button className="px-4 h-full hover:text-white border-l border-zinc-800">
<iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon>
</button>
</div>
<button className="px-6 border-l border-zinc-800 text-white hover:bg-orange-600 transition-colors h-full flex items-center justify-center">
<iconify-icon icon="solar:shield-warning-linear" width="18"></iconify-icon>
</button>
</div>
</header>

<main className="relative z-10 flex-1 flex flex-col md:flex-row">

<aside className="hidden md:flex flex-col w-16 border-r border-zinc-800 bg-[#050505] shrink-0">
<div className="flex-1 flex flex-col pt-32 pb-12 gap-x-12 gap-y-12 items-center justify-start">
<div className="whitespace-nowrap text-[10px] uppercase text-zinc-600 tracking-widest font-mono -rotate-90">
            Advisory Status: Active
          </div>
<div className="w-px h-24 bg-zinc-800"></div>
<div className="-rotate-90 whitespace-nowrap text-[10px] font-mono uppercase tracking-widest text-zinc-600">
            Trace0 Global
          </div>
</div>
</aside>

<div className="flex-1 flex flex-col min-w-0">

<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px] border-b border-zinc-800">

<div className="lg:col-span-7 md:p-16 flex flex-col bg-center bg-[#050505] border-zinc-800 border-r pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-none justify-between" style={{maskImage: 'linear-gradient(280deg, transparent, black 45%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(280deg, transparent, black 45%, black 100%, transparent)'}}>
<div className="absolute inset-0 -z-10 pointer-events-none" data-container-bg="true">
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="yWZ2Tbe094Fsjgy9NRnD"></div>

</div>
</div>

<div className="absolute top-8 left-8 w-4 h-4 border-l border-t border-zinc-700"></div>
<div className="absolute bottom-8 right-8 w-4 h-4 border-r border-b border-zinc-700"></div>
<div className="font-mono text-xs text-orange-600 mb-8 uppercase tracking-widest">
              // ABOUT TRACE0
            </div>
<div className="space-y-6">
<h1 className="uppercase leading-none md:text-[5rem] lg:text-[5.5rem] text-6xl font-medium text-white tracking-tight sys-reveal sys-rise">
                Elite advisory
                <span className="text-zinc-600">for organizations under threat.</span>
</h1>
<p className="max-w-md text-sm text-zinc-500 font-mono leading-relaxed border-l-2 border-orange-600 pl-4 sys-reveal sys-rise sys-delay-100">
                Trace0 is a next-generation cybersecurity advisory built around deep offensive expertise. We don't just find problems — we trace them to their origin, understand their blast radius, and help organizations build durable defenses.
              </p>
</div>
<div className="pt-12 flex flex-wrap items-center gap-4">
<button className="group bg-zinc-100 hover:bg-orange-600 text-black hover:text-white text-xs uppercase tracking-widest px-8 py-4 transition-all flex items-center gap-4 w-fit border border-transparent hover:border-orange-600 rounded-none font-semibold sys-reveal sys-rise sys-delay-200">
                Start Engagement
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="group bg-transparent text-zinc-400 hover:text-white text-xs uppercase tracking-widest px-8 py-4 transition-all flex items-center gap-4 w-fit border border-zinc-800 hover:border-zinc-500 rounded-none font-semibold sys-reveal sys-rise sys-delay-200">
                View Services
              </button>
</div>
</div>

<div className="lg:col-span-5 relative bg-zinc-900 overflow-hidden group">

<div className="absolute inset-0 z-20 pointer-events-none p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="bg-black/50 backdrop-blur-sm border border-zinc-700 p-2 text-[10px] font-mono text-white sys-flicker-anim">
                  CAM_04 [LIVE]
                </div>
<iconify-icon className="text-white opacity-50" icon="solar:maximize-linear" width="20"></iconify-icon>
</div>

<div className="self-end bg-[#050505] border border-zinc-700 p-4 w-64 shadow-2xl sys-reveal sys-slide-r sys-delay-300">
<div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2">
<span className="text-[10px] text-white uppercase tracking-widest">
                    Vulnerability Scanner
                  </span>
<div className="w-1.5 h-1.5 bg-orange-600 rounded-none animate-pulse"></div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[10px] font-mono text-zinc-500">
<span>ATTACK_SURFACE</span>
<span className="text-white">MAPPED</span>
</div>
<div className="w-full bg-zinc-800 h-0.5">
<div className="w-[100%] h-full bg-orange-600"></div>
</div>
<div className="flex justify-between text-[10px] font-mono text-zinc-500">
<span>VECTORS_FOUND</span>
<span className="text-white">14</span>
</div>
<a className="block text-right text-[10px] text-orange-600 hover:text-white mt-4 uppercase tracking-wider decoration-orange-600 underline underline-offset-4 pointer-events-auto" href="#">
                    View Threat Map -&gt;
                  </a>
</div>
</div>
</div>

<img className="absolute inset-0 w-full h-full object-cover contrast-100 brightness-50 [transform:scaleX(-1)_scaleY(1)] group-hover:brightness-100 group-hover:[transform:scaleX(-1.05)_scaleY(1.05)] transition-[filter,transform] duration-1000 ease-linear" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8826ae6a-df85-4863-aa7e-53251ae70196_1600w.jpg" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)'}}/>

<div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#050505]">

<div className="group relative border-r border-b lg:border-b-0 border-zinc-800 p-8 h-80 flex flex-col justify-between hover:bg-zinc-900/50 transition-colors sys-reveal sys-rise sys-delay-100">
<div className="flex justify-between items-start">
<span className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-1">
                ⬡ 01
              </span>
<iconify-icon className="text-white group-hover:text-orange-600 transition-colors" icon="solar:target-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-2">
                Offensive Mindset
              </h3>
<p className="leading-relaxed text-xs text-zinc-500 font-mono">
                We approach security the way attackers do — finding gaps before they're exploited.
              </p>
</div>
<div className="w-full h-px bg-zinc-800 group-hover:bg-orange-600 transition-colors origin-left duration-500"></div>
</div>

<div className="group relative border-r border-b lg:border-b-0 border-zinc-800 p-0 h-80 overflow-hidden sys-reveal sys-rise sys-delay-200">
<div className="text-[10px] uppercase text-white font-mono bg-black z-20 border-white/20 border pt-1 pr-2 pb-1 pl-2 absolute top-4 left-4">
              ◎ 02 Research-Led
            </div>

<div className="absolute inset-0 z-10 p-8 flex flex-col justify-end bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent opacity-90">
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-2 relative z-20">
                Research-Led
              </h3>
<p className="leading-relaxed text-xs text-zinc-300 font-mono relative z-20">
                Deep vulnerability research drives every engagement, not checklists.
              </p>
</div>
<img className="absolute inset-0 w-full h-full object-cover contrast-100 brightness-50 group-hover:brightness-75 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8721dd74-22c0-4f42-a5e2-c29bfc289ba2_1600w.jpg"/>
<div className="absolute inset-0 border-[0.5px] border-white/10 m-4 pointer-events-none z-20"></div>
<div className="absolute top-4 right-4 z-20">
<iconify-icon className="text-white/50 group-hover:text-white transition-colors" icon="solar:code-scan-linear" width="24"></iconify-icon>
</div>
</div>

<div className="group relative border-r border-b md:border-b-0 border-zinc-800 p-8 h-80 flex flex-col justify-between bg-zinc-900/20 sys-reveal sys-rise sys-delay-300">
<div className="absolute top-0 right-0 p-4">
<iconify-icon className="text-zinc-600 group-hover:text-orange-600 transition-colors" icon="solar:lightbulb-bolt-linear" width="32"></iconify-icon>
</div>
<div className="mt-4">
<div className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-1 w-fit mb-4">
                ◈ 03
              </div>
<h3 className="text-2xl font-light text-white uppercase tracking-tight leading-8">
                Strategic Clarity
              </h3>
<p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-4 leading-relaxed">
                Every finding is translated into actionable risk remediation guidance.
              </p>
</div>
<div className="font-mono text-[10px] space-y-2 text-zinc-500 border-t border-zinc-800 pt-4">
<div className="flex justify-between">
<span className="">BUSINESS_IMPACT</span>
<span className="text-green-500">[MAPPED]</span>
</div>
<div className="flex justify-between">
<span className="">REMEDIATION</span>
<span className="text-white">PRIORITIZED</span>
</div>
</div>
</div>

<div className="group relative border-b md:border-b-0 border-zinc-800 h-80 bg-zinc-950 flex flex-col sys-reveal sys-rise sys-delay-400">
<div className="p-4 border-b border-zinc-800 flex justify-between items-start">
<div className="flex flex-col">
<span className="text-[10px] font-mono text-orange-600 uppercase tracking-wider">
                  ⬟ 04 Precision Execution
                </span>
<span className="text-[8px] font-mono text-zinc-600 uppercase mt-0.5 tracking-tight max-w-[180px]">
                  Scoped, contained, and documented engagements with zero collateral.
                </span>
</div>
<span className="text-[10px] font-mono text-white">100%</span>
</div>
<div className="flex-1 relative p-4 grid grid-cols-8 grid-rows-6 gap-1">

<div className="bg-zinc-800 col-span-1 row-span-1 opacity-20"></div>
<div className="bg-zinc-800 col-span-1 row-span-1 opacity-40"></div>
<div className="bg-orange-600 col-span-1 row-span-1 opacity-80"></div>
<div className="bg-zinc-800 col-span-1 row-span-1 opacity-20"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="h-32 flex items-end gap-1">
<div className="w-1/6 bg-zinc-800 h-[40%] hover:bg-orange-600 transition-colors"></div>
<div className="w-1/6 bg-zinc-800 h-[60%] hover:bg-orange-600 transition-colors"></div>
<div className="w-1/6 bg-zinc-800 h-[30%] hover:bg-orange-600 transition-colors"></div>
<div className="w-1/6 bg-zinc-800 h-[80%] hover:bg-orange-600 transition-colors"></div>
<div className="w-1/6 bg-zinc-800 h-[50%] hover:bg-orange-600 transition-colors"></div>
<div className="w-1/6 bg-white h-[90%]"></div>
</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:p-12 md:flex-row md:items-end bg-gradient-to-r from-white/10 via-white/0 to-white/10 border-zinc-800 border-t pt-8 pr-8 pb-8 pl-8 gap-x-6 gap-y-6 justify-between">
<div className="max-w-2xl">
<div className="text-[10px] font-mono text-orange-600 mb-6 uppercase tracking-widest">
              // Scope of Advisory Services
            </div>
<h2 className="text-3xl md:text-4xl font-medium text-white uppercase tracking-tight mb-4 leading-none sys-reveal sys-rise">
              What We
              <span className="text-zinc-600">Offer</span>
</h2>
<p className="text-sm text-zinc-500 font-mono leading-relaxed max-w-lg sys-reveal sys-rise sys-delay-100">
              From exploit development to board-level risk briefings — our capabilities span the full threat lifecycle.
            </p>
</div>
<button className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white border-b border-zinc-800 hover:border-orange-600 pb-1 transition-colors">
            View All Services
          </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#050505] border-t border-zinc-800 border-b">

<div className="group relative border-r border-b border-zinc-800 p-8 min-h-[280px] flex flex-col justify-between hover:bg-zinc-900/30 transition-colors sys-reveal sys-rise sys-delay-100">
<div>
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider border border-zinc-800 px-2 py-1">
                  01
                </span>
<iconify-icon className="text-zinc-600 group-hover:text-orange-600 transition-colors" icon="solar:bug-minimalistic-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-3">
                Vulnerability Research
              </h3>
<p className="text-xs text-zinc-500 font-mono leading-relaxed">
                Deep-dive research into target systems, protocols, and software to uncover novel vulnerabilities before adversaries do.
              </p>
</div>
<div className="mt-8 pt-4 border-t border-zinc-800/50 flex flex-wrap gap-2">
<span className="px-2 py-1 bg-zinc-950 border border-zinc-800 text-[9px] font-mono text-zinc-400 uppercase">0-Day</span>
<span className="px-2 py-1 bg-zinc-950 border border-zinc-800 text-[9px] font-mono text-zinc-400 uppercase">CVE</span>
<span className="px-2 py-1 bg-zinc-950 border border-zinc-800 text-[9px] font-mono text-zinc-400 uppercase">Bug Bounty</span>
</div>
</div>

<div className="group relative border-r border-b border-zinc-800 p-8 min-h-[280px] flex flex-col justify-between hover:bg-zinc-900/30 transition-colors sys-reveal sys-rise sys-delay-200">
<div>
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider border border-zinc-800 px-2 py-1">
                  02
                </span>
<iconify-icon className="text-zinc-600 group-hover:text-orange-600 transition-colors" icon="solar:flag-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-3">
                Red Team Operations
              </h3>
<p className="text-xs text-zinc-500 font-mono leading-relaxed">
                Full-scope adversarial simulation targeting people, process, and technology to test real-world detection and response.
              </p>
</div>
<div className="mt-8 pt-4 border-t border-zinc-800/50 flex flex-wrap gap-2">
<span className="px-2 py-1 bg-zinc-950 border border-zinc-800 text-[9px] font-mono text-zinc-400 uppercase">APT Simulation</span>
<span className="px-2 py-1 bg-zinc-950 border border-zinc-800 text-[9px] font-mono text-zinc-400 uppercase">Social Eng</span>
<span className="px-2 py-1 bg-zinc-950 border border-zinc-800 text-[9px] font-mono text-zinc-400 uppercase">Persistence</span>
</div>
</div>

<div className="group relative border-b lg:border-r-0 border-zinc-800 p-8 min-h-[280px] flex flex-col justify-between hover:bg-zinc-900/30 transition-colors sys-reveal sys-rise sys-delay-300">
<div>
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider border border-zinc-800 px-2 py-1">
                  03
                </span>
<iconify-icon className="text-zinc-600 group-hover:text-orange-600 transition-colors" icon="solar:shield-cross-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-3">
                Penetration Testing
              </h3>
<p className="text-xs text-zinc-500 font-mono leading-relaxed">
                Targeted, scoped assessments across web, mobile, network, and cloud environments with actionable remediation.
              </p>
</div>
<div className="mt-8 pt-4 border-t border-zinc-800/50 flex flex-wrap gap-2">
<span className="px-2 py-1 bg-zinc-950 border border-zinc-800 text-[9px] font-mono text-zinc-400 uppercase">Web/Mobile</span>
<span className="px-2 py-1 bg-zinc-950 border border-zinc-800 text-[9px] font-mono text-zinc-400 uppercase">Cloud</span>
<span className="px-2 py-1 bg-zinc-950 border border-zinc-800 text-[9px] font-mono text-zinc-400 uppercase">Network</span>
</div>
</div>

<div className="group relative border-r border-b lg:border-b-0 border-zinc-800 p-8 min-h-[280px] flex flex-col justify-between hover:bg-zinc-900/30 transition-colors sys-reveal sys-rise sys-delay-400">
<div>
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider border border-zinc-800 px-2 py-1">
                  04
                </span>
<iconify-icon className="text-zinc-600 group-hover:text-orange-600 transition-colors" icon="solar:diagram-up-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-3">
                Threat Modeling
              </h3>
<p className="text-xs text-zinc-500 font-mono leading-relaxed">
                Systematic identification of threat vectors and attack surfaces before code ships or architecture is finalized.
              </p>
</div>
<div className="mt-8 pt-4 border-t border-zinc-800/50 flex flex-wrap gap-2">
<span className="px-2 py-1 bg-zinc-950 border border-zinc-800 text-[9px] font-mono text-zinc-400 uppercase">STRIDE</span>
<span className="px-2 py-1 bg-zinc-950 border border-zinc-800 text-[9px] font-mono text-zinc-400 uppercase">PASTA</span>
<span className="px-2 py-1 bg-zinc-950 border border-zinc-800 text-[9px] font-mono text-zinc-400 uppercase">Architecture</span>
</div>
</div>

<div className="group relative border-r border-b md:border-b-0 border-zinc-800 p-8 min-h-[280px] flex flex-col justify-between hover:bg-zinc-900/30 transition-colors sys-reveal sys-rise sys-delay-500">
<div>
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider border border-zinc-800 px-2 py-1">
                  05
                </span>
<iconify-icon className="text-zinc-600 group-hover:text-orange-600 transition-colors" icon="solar:siren-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-3">
                Incident Response
              </h3>
<p className="text-xs text-zinc-500 font-mono leading-relaxed">
                Rapid forensic investigation, containment, and remediation advisory when breaches occur.
              </p>
</div>
<div className="mt-8 pt-4 border-t border-zinc-800/50 flex flex-wrap gap-2">
<span className="px-2 py-1 bg-zinc-950 border border-zinc-800 text-[9px] font-mono text-zinc-400 uppercase">Forensics</span>
<span className="px-2 py-1 bg-zinc-950 border border-zinc-800 text-[9px] font-mono text-zinc-400 uppercase">Containment</span>
<span className="px-2 py-1 bg-zinc-950 border border-zinc-800 text-[9px] font-mono text-zinc-400 uppercase">Recovery</span>
</div>
</div>

<div className="group relative border-b md:border-b-0 border-zinc-800 p-8 min-h-[280px] flex flex-col justify-between hover:bg-zinc-900/30 transition-colors sys-reveal sys-rise sys-delay-[600ms]">
<div>
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider border border-zinc-800 px-2 py-1">
                  06
                </span>
<iconify-icon className="text-zinc-600 group-hover:text-orange-600 transition-colors" icon="solar:user-speak-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-3">
                Security Advisory
              </h3>
<p className="text-xs text-zinc-500 font-mono leading-relaxed">
                Strategic cyber risk guidance for boards, CISOs, and engineering leaders navigating complex threat landscapes.
              </p>
</div>
<div className="mt-8 pt-4 border-t border-zinc-800/50 flex flex-wrap gap-2">
<span className="px-2 py-1 bg-zinc-950 border border-zinc-800 text-[9px] font-mono text-zinc-400 uppercase">CISO</span>
<span className="px-2 py-1 bg-zinc-950 border border-zinc-800 text-[9px] font-mono text-zinc-400 uppercase">Risk</span>
<span className="px-2 py-1 bg-zinc-950 border border-zinc-800 text-[9px] font-mono text-zinc-400 uppercase">Strategy</span>
</div>
</div>
</div>
<div className="flex flex-col border-t border-b border-zinc-800 bg-[#050505] relative overflow-hidden">

<div className="flex flex-col md:px-12 md:flex-row md:items-end bg-gradient-to-r from-white/10 via-white/0 to-white/10 z-10 border-zinc-800 border-b px-8 py-10 relative gap-x-6 gap-y-6 justify-between">
<div className="">
<div className="text-[10px] font-mono text-orange-600 mb-4 uppercase tracking-widest">
                // How We Work
              </div>
<h2 className="text-3xl md:text-4xl font-medium text-white uppercase tracking-tight leading-none">
                Engagement
                <span className="text-zinc-600">Process</span>
</h2>
<p className="text-sm text-zinc-500 font-mono leading-relaxed max-w-xl mt-4">
                Operational pipeline outlining how Trace0 engages with organizations from initial scoping to final delivery.
              </p>
</div>
<div className="hidden md:flex items-center gap-3 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span>Methodology Active</span>
<div className="w-px h-4 bg-zinc-800 mx-2"></div>
<span>Trace0_Ops</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">

<div className="lg:col-span-3 border-r border-zinc-800 p-8 flex flex-col relative bg-zinc-900/10 group hover:bg-zinc-900/20 transition-colors sys-reveal sys-slide-l">
<div className="absolute top-0 left-0 p-2 border-r border-b border-zinc-800 bg-[#050505] text-[9px] font-mono text-zinc-500">
                01_SCOPING
              </div>
<div className="mt-12 space-y-6 flex-1">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm text-white font-medium uppercase tracking-wider">
                    Define Objectives
                  </h3>
<iconify-icon className="text-zinc-500" icon="solar:document-add-linear" width="18"></iconify-icon>
</div>
<p className="text-xs text-zinc-400 font-mono leading-relaxed">
                  Define objectives, rules of engagement, and success criteria before adversarial activities commence.
                </p>

<div className="space-y-3">
<div className="flex items-center justify-between p-3 border border-zinc-800 bg-black/50 hover:border-zinc-700 transition-colors cursor-default">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-orange-600 rounded-none"></div>
<span className="text-xs text-zinc-300 font-mono">
                        THREAT_MODEL
                      </span>
</div>
<span className="text-[9px] text-green-500 font-mono">
                      DEFINED
                    </span>
</div>
<div className="flex items-center justify-between p-3 border border-zinc-800 bg-black/50 hover:border-zinc-700 transition-colors cursor-default">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-zinc-600 rounded-none"></div>
<span className="text-xs text-zinc-300 font-mono">
                        RULES_OF_ENG
                      </span>
</div>
<span className="text-[9px] text-zinc-500 font-mono">DRAFT</span>
</div>
</div>
</div>
<div className="mt-auto pt-6">
<div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 mb-2">
<span>PREPARATION_STATUS</span>
<span className="text-white">READY</span>
</div>
<div className="w-full bg-zinc-800 h-px overflow-hidden">
<div className="h-full w-full bg-orange-600/80 animate-pulse ml-0"></div>
</div>
</div>
</div>

<div className="lg:col-span-6 border-r border-zinc-800 bg-[#080808] relative flex flex-col overflow-hidden group sys-reveal sys-scale sys-delay-100">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none"></div>
<div className="absolute top-0 right-0 p-2 border-l border-b border-zinc-800 bg-[#050505] text-[9px] font-mono text-orange-600 z-10">
                02_RECONNAISSANCE [ACTIVE]
              </div>
<div className="p-12 flex flex-col h-full items-center justify-center relative z-10">

<div className="relative w-64 h-64 mb-12 flex items-center justify-center">
<div className="absolute inset-0 border border-zinc-800 rounded-full animate-[spin_10s_linear_infinite] opacity-30"></div>
<div className="absolute inset-4 border border-zinc-800 rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-30"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 border border-orange-600/20 bg-orange-600/5 rounded-full flex items-center justify-center backdrop-blur-sm">
<iconify-icon className="text-orange-600 text-4xl drop-shadow-[0_0_15px_rgba(234,88,12,0.5)]" icon="solar:radar-linear"></iconify-icon>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-white rounded-full"></div>
<div className="absolute bottom-1/2 right-0 translate-x-1 translate-y-1/2 w-1.5 h-1.5 bg-zinc-500 rounded-full"></div>
</div>
<div className="text-center space-y-2 max-w-md">
<h3 className="text-xl font-medium text-white uppercase tracking-tight">
                    Intelligence Gathering
                  </h3>
<p className="text-zinc-500 font-mono text-xs leading-relaxed">
                    Passive and active intelligence gathering on the target environment to map full attack surface.
                  </p>
</div>

<div className="mt-8 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-pulse"></span>
<span className="text-[10px] font-mono text-zinc-300 uppercase tracking-wider">
                    SCANNING IN PROGRESS
                  </span>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-32 border-t border-zinc-800 bg-[#050505]/90 p-4 font-mono text-[10px] text-zinc-500 overflow-hidden">
<div className="flex justify-between items-center mb-2 opacity-50">
<span>OSINT_STREAM</span>
<span>LIVE</span>
</div>
<div className="space-y-1 opacity-70">
<div className="flex gap-4">
<span className="text-zinc-700">00:01:23</span>
<span className="text-zinc-400">
                      &gt; mapping_subdomains(target="scope_alpha")
                    </span>
</div>
<div className="flex gap-4">
<span className="text-zinc-700">00:01:24</span>
<span className="text-zinc-400">
                      &gt; enumerating_services...
                      <span className="text-green-600">FOUND: 42</span>
</span>
</div>
<div className="flex gap-4">
<span className="text-zinc-700">00:01:25</span>
<span className="text-zinc-400">
                      &gt; identifying_tech_stack
                    </span>
</div>
<div className="flex gap-4">
<span className="text-zinc-700">00:01:25</span>
<span className="text-orange-600">
                      &gt; INFO: outdated_protocol detected on port_8080
                    </span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 flex flex-col border-r lg:border-r-0 border-zinc-800 sys-reveal sys-slide-r sys-delay-200">

<div className="flex-1 border-b border-zinc-800 p-8 relative bg-zinc-900/5 group hover:bg-zinc-900/10 transition-colors">
<div className="absolute top-0 left-0 p-2 border-r border-b border-zinc-800 bg-[#050505] text-[9px] font-mono text-zinc-500">
                  03_EXPLOITATION
                </div>
<div className="mt-10 mb-6">
<h3 className="text-sm text-white font-medium uppercase tracking-wider mb-4">
                    Adversarial Activity
                  </h3>
<p className="text-[10px] text-zinc-400 font-mono leading-relaxed mb-4">
                    Controlled adversarial activity within agreed boundaries.
                  </p>
<div className="grid grid-cols-2 gap-3">
<div className="p-3 border border-zinc-800 bg-[#050505]">
<div className="text-[9px] text-zinc-500 font-mono uppercase mb-1">
                        VECTORS
                      </div>
<div className="text-lg text-white font-light tracking-tighter">
                        TESTED
                      </div>
</div>
<div className="p-3 border border-zinc-800 bg-[#050505]">
<div className="text-[9px] text-zinc-500 font-mono uppercase mb-1">
                        IMPACT
                      </div>
<div className="text-lg text-orange-600 font-light tracking-tighter">
                        PROVEN
                      </div>
</div>
</div>
</div>
</div>

<div className="flex-1 p-8 relative bg-zinc-950 flex flex-col justify-center group hover:bg-zinc-900 transition-colors">
<div className="absolute top-0 left-0 p-2 border-r border-b border-zinc-800 bg-[#050505] text-[9px] font-mono text-zinc-500">
                  04_REPORTING
                </div>
<div className="flex items-start justify-between mb-6">
<div>
<h3 className="text-sm text-white font-medium uppercase tracking-wider">
                      Deliverables
                    </h3>
<p className="text-[10px] text-zinc-500 mt-2 font-mono leading-relaxed">
                      Findings documented with full technical detail and remediation guidance.
                    </p>
</div>
<iconify-icon className="text-orange-600" icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<div className="space-y-4 mt-2">
<div className="flex justify-between text-[10px] font-mono text-zinc-400 border-b border-zinc-800 pb-2">
<span>EXEC_BRIEF</span>
<span className="text-green-500">COMPILED</span>
</div>
<div className="flex justify-between text-[10px] font-mono text-zinc-400">
<span>TECH_REPORT</span>
<span className="text-green-500">COMPILED</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col border-b border-zinc-800 bg-[#050505] relative">

<div className="flex flex-col overflow-hidden md:px-8 md:flex-row md:items-end bg-gradient-to-r from-white/10 via-white/0 to-white/10 border-zinc-800 border-b px-8 py-8 relative gap-x-6 gap-y-6 items-start justify-between">

<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-zinc-800/20 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="text-[9px] font-mono text-orange-600 mb-3 uppercase tracking-widest flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-orange-600"></span>
                // What You Receive
              </div>
<h2 className="text-3xl md:text-4xl font-medium text-white uppercase tracking-tight leading-none">
                Deliverables &amp;
                <span className="text-zinc-600">Artifacts</span>
</h2>
<p className="text-sm text-zinc-500 font-mono leading-relaxed max-w-2xl mt-4">
                Every engagement concludes with comprehensive documentation designed for both technical teams and leadership.
              </p>
</div>
<div className="flex items-center gap-8 relative z-10">
<div className="hidden md:block text-right">
<div className="text-[9px] text-zinc-500 font-mono uppercase tracking-wider mb-1">
                  Documentation_Type
                </div>
<div className="text-xs text-white font-mono bg-zinc-900 px-2 py-1 border border-zinc-800">
                  FULL_SPECTRUM
                </div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px] bg-[#050505]">

<div className="lg:col-span-8 border-r border-zinc-800 flex flex-col">

<div className="flex-1 p-8 md:p-12 relative overflow-hidden group border-b border-zinc-800 bg-zinc-900/5 hover:bg-zinc-900/10 transition-colors sys-reveal sys-rise">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 border border-green-500/20 bg-green-500/5 text-[10px] font-mono text-green-500 uppercase tracking-wider mb-8">
<iconify-icon icon="solar:check-read-bold" width="14"></iconify-icon>
                      Actionable Remediation
                    </div>
<h3 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tighter uppercase leading-[0.9]">
                      Strategic
                      <span className="block text-zinc-700">Clarity</span>
</h3>
</div>
<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
<p className="text-xs text-zinc-500 font-mono leading-relaxed border-l border-zinc-800 pl-4">
                      We ensure that every vulnerability discovered is contextualized within your business operations, providing clear, prioritized paths to resolution.
                    </p>
</div>
</div>
</div>

<div className="h-auto md:h-64 grid grid-cols-1 md:grid-cols-2">

<div className="border-r border-zinc-800 p-8 flex flex-col justify-between hover:bg-zinc-900/20 transition-colors">
<div className="flex justify-between items-start">
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      ▤ 01 Technical_Report
                    </span>
<iconify-icon className="text-zinc-600" icon="solar:document-medicine-linear" width="18"></iconify-icon>
</div>
<div className="mt-4">
<div className="text-xl font-medium text-white mb-2 tracking-tight uppercase">
                      Technical Report
                    </div>
<div className="text-[11px] text-zinc-500 font-mono leading-relaxed">
                      Full exploit chain documentation with CVSS scoring, PoC code, and granular remediation guidance.
                    </div>
</div>
</div>

<div className="p-8 flex flex-col justify-between hover:bg-zinc-900/20 transition-colors relative overflow-hidden group">
<div className="flex justify-between items-start z-10">
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      ▣ 02 Exec_Brief
                    </span>
<iconify-icon className="text-zinc-600" icon="solar:briefcase-linear" width="18"></iconify-icon>
</div>
<div className="z-10 mt-4">
<div className="text-xl font-medium text-white mb-2 tracking-tight uppercase">
                      Executive Brief
                    </div>
<div className="text-[11px] text-zinc-500 font-mono leading-relaxed">
                      Board-ready risk summary translating deep technical findings into business impact language.
                    </div>
</div>
<iconify-icon className="absolute -bottom-4 -right-4 text-zinc-800/50 -rotate-12 group-hover:text-zinc-800 transition-colors duration-500" icon="solar:presentation-graph-bold" width="100"></iconify-icon>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col bg-zinc-950/30">

<div className="flex-1 p-6 border-b border-zinc-800 hover:bg-zinc-900 transition-colors flex flex-col justify-center">
<div className="flex justify-between items-start mb-2">
<span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">
                    ▧ 03 Timeline
                  </span>
</div>
<h4 className="text-md font-medium text-white uppercase tracking-tight mb-2">Attack Timeline</h4>
<p className="text-[10px] text-zinc-500 font-mono">
                  Step-by-step reconstruction of simulated attack paths with detection opportunities mapped.
                </p>
</div>

<div className="flex-1 p-6 border-b border-zinc-800 hover:bg-zinc-900 transition-colors flex flex-col justify-center">
<div className="flex justify-between items-start mb-2">
<span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">
                    ▦ 04 Roadmap
                  </span>
</div>
<h4 className="text-md font-medium text-white uppercase tracking-tight mb-2">Remediation Roadmap</h4>
<p className="text-[10px] text-zinc-500 font-mono">
                  Prioritized fix plan with effort estimates, quick wins, and long-term hardening strategies.
                </p>
</div>

<div className="flex-1 p-6 border-b border-zinc-800 hover:bg-zinc-900 transition-colors flex flex-col justify-center">
<div className="flex justify-between items-start mb-2">
<span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">
                    ▩ 05 Validation
                  </span>
</div>
<h4 className="text-md font-medium text-white uppercase tracking-tight mb-2">Retest Validation</h4>
<p className="text-[10px] text-zinc-500 font-mono">
                  Post-remediation verification that all critical findings have been properly addressed.
                </p>
</div>

<div className="flex-1 p-6 hover:bg-zinc-900 transition-colors flex flex-col justify-center">
<div className="flex justify-between items-start mb-2">
<span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">
                    ◫ 06 Artifact
                  </span>
</div>
<h4 className="text-md font-medium text-white uppercase tracking-tight mb-2">Threat Model Artifact</h4>
<p className="text-[10px] text-zinc-500 font-mono">
                  Living document capturing attack surfaces, trust boundaries, and mitigations for ongoing use.
                </p>
</div>
</div>
</div>
</div>
<section className="overflow-hidden bg-[#050505] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f879b8e1-cba6-476a-9fea-a4abd7ca2645_3840w.jpg?w=800&amp;q=80)] bg-cover bg-center border-zinc-800 border-b pt-24 pr-4 pb-24 pl-4 relative">

<div className="bg-black/90 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-sm" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 30%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 30%, transparent)'}}></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.03)_0%,transparent_70%)] pointer-events-none"></div>
<div className="max-w-[90rem] mx-auto relative z-10 flex flex-col items-center text-center">

<div className="mb-16 max-w-2xl mx-auto">
<div className="text-[10px] font-mono text-orange-600 mb-4 uppercase tracking-widest">
                // Commercials
              </div>
<h2 className="text-4xl md:text-5xl font-medium text-white uppercase tracking-tight leading-none mb-6">
                Engagement
                <span className="text-zinc-600">Models</span>
</h2>
<p className="text-sm text-zinc-500 font-mono leading-relaxed">
                Flexible engagement structures designed to align with your organization's security maturity and operational tempo.
              </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full items-center">

<div className="group relative bg-zinc-900/20 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/40 p-8 flex flex-col items-center transition-all duration-500 hover:-translate-y-1 rounded-sm sys-reveal sys-rise sys-delay-100 h-full">
<div className="px-3 py-1 border border-zinc-800 bg-zinc-950 text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-6">
                  Project-Based
                </div>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors mb-6" icon="solar:folder-with-files-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white uppercase tracking-tight mb-3">
                  Fixed Scope
                </h3>
<p className="text-xs text-zinc-500 font-mono leading-relaxed mb-8 flex-1">
                  Defined scope, timeline, and deliverables. Ideal for point-in-time pen tests and specific assessments.
                </p>
<button className="w-full py-3 border border-zinc-800 bg-zinc-900/50 hover:bg-white hover:text-black hover:border-white text-[10px] text-zinc-400 uppercase tracking-widest font-mono transition-all mt-auto">
                  Request Quote
                </button>
</div>

<div className="relative bg-zinc-900/40 border border-orange-600/30 p-10 flex flex-col items-center shadow-[0_0_40px_-10px_rgba(234,88,12,0.1)] lg:scale-105 z-10 transition-all duration-500 hover:shadow-[0_0_60px_-10px_rgba(234,88,12,0.2)] rounded-sm sys-reveal sys-scale sys-delay-200 h-full">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-600 text-white text-[9px] font-mono uppercase tracking-widest px-3 py-1 shadow-lg shadow-orange-900/40">
                  Recommended
                </div>
<div className="px-3 py-1 border border-orange-600/30 bg-orange-600/10 text-[10px] font-mono text-orange-500 uppercase tracking-wider mb-6">
                  Ongoing Advisory
                </div>
<iconify-icon className="text-orange-600 mb-6 drop-shadow-[0_0_15px_rgba(234,88,12,0.5)]" icon="solar:calendar-date-bold" width="40"></iconify-icon>
<h3 className="text-2xl font-semibold text-white uppercase tracking-tight mb-3">
                  Monthly Retainer
                </h3>
<p className="text-xs text-zinc-400 font-mono leading-relaxed mb-8 flex-1">
                  Continuous advisory, research access, and priority response capacity built as an extension of your team.
                </p>
<button className="w-full py-4 bg-orange-600 text-white hover:bg-orange-500 text-[10px] uppercase tracking-widest font-mono font-semibold transition-all shadow-lg shadow-orange-900/20 hover:scale-[1.02] mt-auto">
                  Discuss Partnership
                </button>
</div>

<div className="group relative bg-zinc-900/20 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/40 p-8 flex flex-col items-center transition-all duration-500 hover:-translate-y-1 rounded-sm sys-reveal sys-rise sys-delay-300 h-full">
<div className="px-3 py-1 border border-zinc-800 bg-zinc-950 text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-6">
                  Custom
                </div>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors mb-6" icon="solar:users-group-two-rounded-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white uppercase tracking-tight mb-3">
                  Embedded Research
                </h3>
<p className="text-xs text-zinc-500 font-mono leading-relaxed mb-8 flex-1">
                  Trace0 researchers embedded directly into your engineering teams for deep, sustained vulnerability research.
                </p>
<button className="w-full py-3 border border-zinc-800 bg-zinc-900/50 hover:bg-white hover:text-black hover:border-white text-[10px] text-zinc-400 uppercase tracking-widest font-mono transition-all mt-auto">
                  Contact Sales
                </button>
</div>

<div className="group relative bg-zinc-900/20 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/40 p-8 flex flex-col items-center transition-all duration-500 hover:-translate-y-1 rounded-sm sys-reveal sys-rise sys-delay-400 h-full">
<div className="px-3 py-1 border border-zinc-800 bg-zinc-950 text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-6">
                  On-Demand
                </div>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors mb-6" icon="solar:danger-triangle-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white uppercase tracking-tight mb-3 text-center">
                  Incident Response
                </h3>
<p className="text-xs text-zinc-500 font-mono leading-relaxed mb-8 flex-1">
                  Rapid deployment for active incidents requiring immediate forensic investigation and expert containment.
                </p>
<button className="w-full py-3 border border-zinc-800 bg-zinc-900/50 hover:bg-white hover:text-black hover:border-white text-[10px] text-zinc-400 uppercase tracking-widest font-mono transition-all mt-auto text-red-500/80 hover:text-red-500 hover:border-red-500">
                  Emergency Contact
                </button>
</div>
</div>
</div>
</section>
<section className="md:py-24 overflow-hidden flex flex-col select-none bg-[#050505] w-full border-zinc-800 border-b pt-32 pb-32 relative items-center justify-center">
<div className="absolute inset-0 pointer-events-none z-0" data-container-bg="true">
<div className="aura-background-component top-0 w-full z-0 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 z-0" data-us-project="UtvhDctN8AjL6tvf1yKd"></div>

</div>
</div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.15)_0%,transparent_50%)] pointer-events-none mix-blend-screen"></div>

<div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] opacity-20"></div>
<div className="relative z-20 flex flex-col items-center text-center max-w-5xl px-6">

<div className="mb-12 flex items-center gap-4">
<div className="h-px w-12 bg-zinc-800"></div>
<div className="flex items-center gap-3 px-3 py-1 bg-zinc-900/50 border border-zinc-800 text-[10px] font-mono text-zinc-400 uppercase tracking-widest backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                Ready to Engage
              </div>
<div className="h-px w-12 bg-zinc-800"></div>
</div>

<h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter uppercase leading-[0.85] mb-8 relative group cursor-default sys-reveal sys-rise">
<span className="relative z-10 block mb-2">
                Cybersecurity demands
              </span>
<span className="relative z-10 text-zinc-700 group-hover:text-zinc-500 transition-colors">
                foresight.
              </span>
<span className="relative z-10 block mt-2 text-orange-600">
                Let's build yours.
              </span>
</h2>
<p className="text-sm text-zinc-500 font-mono mb-16 max-w-lg mx-auto leading-relaxed border-l-2 border-orange-600/50 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
<span className="text-orange-600">//</span>
              Whether you're assessing risk, responding to an incident, or building a long-term security program — Trace0 is ready to engage.
            </p>

<div className="relative flex flex-col sm:flex-row gap-6 items-center justify-center group z-30">

<div className="relative group/btn">
<div className="absolute -inset-1 bg-orange-600 rounded-sm opacity-20 blur-lg group-hover/btn:opacity-40 transition-opacity duration-500"></div>
<button className="relative bg-orange-600 text-white px-10 py-5 flex items-center justify-center transition-all duration-300 transform group-hover/btn:-translate-y-1 sys-reveal sys-scale sys-delay-200">
<span className="text-sm font-bold uppercase tracking-widest flex items-center gap-3">
                    Schedule a Call
                  </span>
</button>
</div>

<a className="bg-[#080808] border border-zinc-700 hover:border-white text-zinc-400 hover:text-white px-10 py-5 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 sys-reveal sys-scale sys-delay-300" href="mailto:contact@trace0.io">
<span className="text-sm font-mono uppercase tracking-widest flex items-center gap-3">
                  contact@trace0.io
                </span>
</a>
</div>
</div>
</section>
<footer className="border-t border-zinc-800 bg-[#050505] text-zinc-500 font-mono relative z-20">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-[0.15]"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[320px] relative z-10">

<div className="lg:col-span-3 border-r border-zinc-800 p-8 flex flex-col justify-between bg-zinc-900/5 backdrop-blur-sm">
<div>

<div className="flex items-center gap-3 mb-8">
<span className="text-lg font-bold tracking-tighter text-white uppercase">
                    TRACE<span className="text-orange-600">0</span>
<span className="text-zinc-600 text-xs tracking-widest ml-1">_SYS</span>
</span>
</div>

<div className="border border-zinc-800 bg-[#050505] p-4 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
<div className="flex justify-between items-start mb-2">
<span className="text-[9px] uppercase tracking-widest text-zinc-500">
                      Advisory_Status
                    </span>
<iconify-icon className="text-zinc-600" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="flex items-center gap-2 mb-1">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs text-white font-medium tracking-wide">
                      ACCEPTING ENGAGEMENTS
                    </span>
</div>
<div className="text-[9px] text-zinc-600 font-mono mt-2">
                    Global Capacity: NORMAL
                  </div>
</div>
</div>

<div className="space-y-2">
<div className="flex justify-between items-center text-[10px] pb-1 border-t border-zinc-800 pt-4">
<span className="uppercase tracking-wider">Classification</span>
<span className="text-orange-600">CONFIDENTIAL</span>
</div>
</div>
</div>

<div className="lg:col-span-6 border-r border-zinc-800 grid grid-cols-1 md:grid-cols-3">

<div className="border-r border-zinc-800 p-8 flex flex-col relative group hover:bg-zinc-900/10 transition-colors">
<div className="text-[9px] text-orange-600 uppercase tracking-widest mb-6 font-semibold">
                  // Services
                </div>
<ul className="space-y-3 text-[11px] font-medium tracking-wide">
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
<span className="w-1 h-px bg-zinc-700"></span>
                      Vulnerability Research
                    </a>
</li>
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
<span className="w-1 h-px bg-zinc-700"></span>
                      Red Teaming
                    </a>
</li>
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
<span className="w-1 h-px bg-zinc-700"></span>
                      Penetration Testing
                    </a>
</li>
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
<span className="w-1 h-px bg-zinc-700"></span>
                      Incident Response
                    </a>
</li>
</ul>
</div>

<div className="border-r border-zinc-800 p-8 flex flex-col relative group hover:bg-zinc-900/10 transition-colors">
<div className="text-[9px] text-zinc-500 uppercase tracking-widest mb-6 font-semibold">
                  // Process
                </div>
<ul className="space-y-3 text-[11px] font-medium tracking-wide">
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
<span className="w-1 h-px bg-zinc-700"></span>
                      Methodology
                    </a>
</li>
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
<span className="w-1 h-px bg-zinc-700"></span>
                      Deliverables
                    </a>
</li>
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
<span className="w-1 h-px bg-zinc-700"></span>
                      Models &amp; Pricing
                    </a>
</li>
</ul>
</div>

<div className="p-8 flex flex-col relative group hover:bg-zinc-900/10 transition-colors">
<div className="text-[9px] text-zinc-500 uppercase tracking-widest mb-6 font-semibold">
                  // Research Lab
                </div>
<ul className="space-y-3 text-[11px] font-medium tracking-wide">
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
<span className="w-1 h-px bg-zinc-700"></span>
                      Advisories
                    </a>
</li>
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
<span className="w-1 h-px bg-zinc-700"></span>
                      Publications
                    </a>
</li>
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
<span className="w-1 h-px bg-zinc-700"></span>
                      Tools
                    </a>
</li>
</ul>
</div>
</div>

<div className="lg:col-span-3 p-8 flex flex-col justify-between bg-zinc-900/5">
<div>
<div className="text-[9px] text-zinc-500 uppercase tracking-widest mb-6 font-semibold">
                  // Company
                </div>
<ul className="space-y-3 text-[11px] font-medium tracking-wide mb-8">
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300" href="#">
                      About Trace0
                    </a>
</li>
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300" href="#">
                      Careers
                      <span className="text-[9px] ml-1 text-orange-600 bg-orange-600/10 px-1 py-0.5 rounded-sm">
                        HIRING
                      </span>
</a>
</li>
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300" href="#">
                      Legal &amp; Privacy
                    </a>
</li>
</ul>
</div>
<div className="bg-[#050505] border border-zinc-800 p-4 relative group hover:border-zinc-700 transition-colors">
<div className="text-[9px] uppercase tracking-wider text-zinc-500 mb-2">
                  Threat_Intel_Brief
                </div>
<div className="flex gap-2">
<input className="bg-zinc-900/50 border border-zinc-800 text-[10px] px-2 py-1.5 w-full focus:outline-none focus:border-orange-600 text-white placeholder-zinc-700 font-mono uppercase" placeholder="EMAIL_ADDR" type="text"/>
<button className="bg-zinc-800 hover:bg-orange-600 text-white px-2 py-1.5 transition-colors border border-zinc-700 hover:border-orange-600">
<iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="border-t border-zinc-800 bg-[#080808] px-8 py-3 flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-wider text-zinc-600 relative z-20">
<div className="flex items-center gap-8">
<span className="hover:text-zinc-400 transition-colors cursor-default">
                © 2024 Trace0 LLC.
              </span>
<span className="hidden md:inline w-px h-3 bg-zinc-800"></span>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">
                  Privacy
                </a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
<div className="flex items-center gap-6 mt-2 md:mt-0 font-mono">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon>
<span>14:32:01 UTC</span>
</div>
<div className="hidden md:block w-px h-3 bg-zinc-800"></div>
<div className="flex items-center gap-2 text-green-900">
<iconify-icon icon="solar:shield-check-linear" width="12"></iconify-icon>
<span className="text-green-600">End-to-End Encrypted</span>
</div>
</div>
</div>
</footer>
</div>
</main>


    </>
  );
}
