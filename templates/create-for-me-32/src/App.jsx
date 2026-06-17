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



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
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
      

<div className="scanlines"></div>

<div className="max-w-[1400px] mx-auto w-full border-x border-cyan-900/30 relative bg-[#050505] min-h-screen flex flex-col shadow-[0_0_50px_-12px_rgba(6,182,212,0.1)]">

<div className="absolute inset-0 cyber-grid z-0 pointer-events-none fixed"></div>

<header className="sticky top-0 z-40 border-b border-cyan-900/30 glass-panel">
<div className="grid grid-cols-1 md:grid-cols-12 h-16 divide-y md:divide-y-0 md:divide-x divide-cyan-900/30">

<div className="col-span-1 md:col-span-3 flex items-center px-6 justify-between md:justify-start group">
<a className="font-bold tracking-widest text-sm uppercase text-cyan-50 font-grotesk flex items-center gap-2" href="#">
<span className="text-cyan-500 animate-pulse">&gt;_</span> ADAM_PARISH
                    </a>
<button className="md:hidden text-cyan-400">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>

<nav className="col-span-1 md:col-span-6 flex items-center px-6 space-x-8 hidden md:flex">
<a className="text-xs font-bold uppercase tracking-widest text-cyan-700 hover:text-cyan-400 transition-colors hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" href="#home">Home</a>
<a className="text-xs font-bold uppercase tracking-widest text-cyan-700 hover:text-cyan-400 transition-colors hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" href="#about">About</a>
<a className="text-xs font-bold uppercase tracking-widest text-cyan-700 hover:text-cyan-400 transition-colors hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" href="#resume">Resume</a>
<a className="text-xs font-bold uppercase tracking-widest text-cyan-700 hover:text-cyan-400 transition-colors hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" href="#">Net_Link</a>
</nav>

<div className="col-span-1 md:col-span-3 flex items-center px-6 justify-end hidden md:flex bg-cyan-950/10">
<a className="text-[10px] font-mono text-cyan-500 transition-colors flex items-center gap-2 uppercase tracking-wider" href="mailto:hello@atomparish.com">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                        System Online
                    </a>
</div>
</div>
</header>

<main className="flex-grow grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x relative divide-cyan-900/30 z-10">

<div className="col-span-1 md:col-span-9 divide-y divide-cyan-900/30">

<section className="p-8 md:p-16 lg:p-24 flex flex-col gap-8 relative overflow-hidden" id="home">

<div className="absolute top-0 right-0 p-4 opacity-30">
<svg className="text-cyan-800 fill-current" height="100" viewbox="0 0 100 100" width="100">
<path d="M0 0 L20 0 L20 100 L0 100 Z M30 0 L100 0 L100 20 L30 20 Z"></path>
</svg>
</div>
<div className="space-y-6 max-w-4xl relative z-10">
<div className="flex items-center gap-3 mb-4">
<span className="px-2 py-0.5 border border-cyan-500/50 bg-cyan-500/10 text-[10px] uppercase tracking-widest text-cyan-300">
                                Open for Contracts
                            </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.85] text-white font-grotesk font-bold mix-blend-lighten drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                            ADAM<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">PARISH</span>.
                        </h1>
<h2 className="text-xl md:text-2xl tracking-tight text-cyan-100/80 font-grotesk font-medium flex items-center gap-2">
<i className="w-5 h-5 text-fuchsia-500" data-lucide="cpu"></i>
                            Lead Product Designer
                            <span className="text-cyan-600">@</span>
<span className="text-cyan-300 border-b border-cyan-500/30">Atomic FI</span>
</h2>
<p className="text-sm md:text-base text-cyan-400/60 leading-relaxed max-w-2xl font-mono">
                            // EXECUTE: INTRODUCTION<br/>
                            Currently optimizing payroll data streams. Previously deployed designs @Aon, @CloudEngage, @Imprezzio. Co-founder protocol initialized @XpenseOne.
                            <br/><br/>
<span className="text-cyan-200">Passionate about innovative constructs that reprogram our reality.</span>
</p>
<div className="pt-8 flex flex-wrap gap-4">
<a className="group relative inline-flex items-center justify-center px-6 py-3 text-xs font-bold text-black uppercase tracking-widest bg-cyan-400 hover:bg-white transition-all overflow-hidden clip-path-slant" href="#">
<span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
<span className="relative flex items-center gap-2">
<i className="w-4 h-4" data-lucide="download"></i> Download_Data
                                </span>
</a>
<a className="group inline-flex items-center justify-center px-6 py-3 text-xs font-bold text-cyan-400 uppercase tracking-widest border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-950/30 transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]" href="#about">
                                Read_Bio
                            </a>
</div>
</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-cyan-900/30">

<div className="group relative p-8 md:p-12 h-full bg-gradient-to-br from-transparent to-cyan-950/5 hover:to-cyan-900/20 transition-all duration-500 cursor-pointer border-t md:border-t-0 border-transparent hover:border-cyan-500/20">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 text-cyan-400" data-lucide="maximize-2"></i>
</div>
<div className="flex justify-between items-start mb-12">
<div className="p-3 border border-cyan-500/30 bg-black shadow-[0_0_10px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-shadow">
<i className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" data-lucide="layers"></i>
</div>
</div>
<h3 className="text-2xl font-grotesk font-bold tracking-tight mb-2 text-white group-hover:text-cyan-300 transition-colors">
                            Atomic Financial
                        </h3>
<p className="text-xs text-cyan-500/60 mb-6 font-mono border-l-2 border-cyan-800 pl-3">
                            Target: Personalization protocols.
                        </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="text-[10px] uppercase tracking-wider px-2 py-1 border border-cyan-900 text-cyan-600 bg-cyan-950/30">Product Lead</span>
<span className="text-[10px] uppercase tracking-wider px-2 py-1 border border-cyan-900 text-cyan-600 bg-cyan-950/30">Systems</span>
</div>
</div>

<div className="group relative p-8 md:p-12 h-full bg-gradient-to-br from-transparent to-purple-950/5 hover:to-purple-900/20 transition-all duration-500 cursor-pointer">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 text-fuchsia-400" data-lucide="maximize-2"></i>
</div>
<div className="flex justify-between items-start mb-12">
<div className="p-3 border border-fuchsia-500/30 bg-black shadow-[0_0_10px_rgba(217,70,239,0.1)] group-hover:shadow-[0_0_15px_rgba(217,70,239,0.4)] transition-shadow">
<i className="w-6 h-6 text-fuchsia-400 group-hover:text-white transition-colors" data-lucide="layout-grid"></i>
</div>
</div>
<h3 className="text-2xl font-grotesk font-bold tracking-tight mb-2 text-white group-hover:text-fuchsia-300 transition-colors">
                            Local Startup Comms
                        </h3>
<p className="text-xs text-fuchsia-300/60 mb-6 font-mono border-l-2 border-fuchsia-900 pl-3">
                            Target: Community connection node.
                        </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="text-[10px] uppercase tracking-wider px-2 py-1 border border-fuchsia-900 text-fuchsia-600 bg-fuchsia-950/30">UI/UX</span>
<span className="text-[10px] uppercase tracking-wider px-2 py-1 border border-fuchsia-900 text-fuchsia-600 bg-fuchsia-950/30">No Code</span>
</div>
</div>
</div>

<div className="w-full overflow-hidden bg-black/40 border-y border-cyan-900/30">
<div className="p-8 md:p-12">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-2 text-cyan-500">
<i className="w-4 h-4" data-lucide="database"></i>
<span className="text-xs tracking-widest font-bold">VISUAL_LOGS</span>
</div>
<div className="flex gap-2">
<button className="p-2 border border-cyan-900/50 text-cyan-600 hover:text-cyan-300 hover:border-cyan-400 hover:bg-cyan-900/20 transition-all" onclick="document.getElementById('gallery-scroller').scrollBy({left: -320, behavior: 'smooth'})">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
</button>
<button className="p-2 border border-cyan-900/50 text-cyan-600 hover:text-cyan-300 hover:border-cyan-400 hover:bg-cyan-900/20 transition-all" onclick="document.getElementById('gallery-scroller').scrollBy({left: 320, behavior: 'smooth'})">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" id="gallery-scroller">
<div className="flex gap-6 animate-infinite-scroll hover:[animation-play-state:paused]">

<div className="min-w-[280px] md:min-w-[380px] aspect-[16/10] bg-gray-900 border border-cyan-900/50 relative group overflow-hidden shrink-0">
<div className="absolute inset-0 bg-cyan-500/10 z-10 mix-blend-overlay"></div>
<img alt="Dashboard" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 filter contrast-125" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400 z-20 transition-all duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-cyan-500 z-30">
<span className="text-cyan-300 text-xs font-mono">DATA_VIZ_01</span>
</div>
</div>
<div className="min-w-[280px] md:min-w-[380px] aspect-[16/10] bg-gray-900 border border-fuchsia-900/50 relative group overflow-hidden shrink-0">
<div className="absolute inset-0 bg-fuchsia-500/10 z-10 mix-blend-overlay"></div>
<img alt="Tech" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 filter contrast-125" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border-2 border-transparent group-hover:border-fuchsia-400 z-20 transition-all duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-fuchsia-500 z-30">
<span className="text-fuchsia-300 text-xs font-mono">HARDWARE_INTERFACE</span>
</div>
</div>
<div className="min-w-[280px] md:min-w-[380px] aspect-[16/10] bg-gray-900 border border-cyan-900/50 relative group overflow-hidden shrink-0">
<div className="absolute inset-0 bg-cyan-500/10 z-10 mix-blend-overlay"></div>
<img alt="Cyber" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 filter contrast-125" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400 z-20 transition-all duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-cyan-500 z-30">
<span className="text-cyan-300 text-xs font-mono">SECURE_TERMINAL</span>
</div>
</div>
<div className="min-w-[280px] md:min-w-[380px] aspect-[16/10] bg-gray-900 border border-fuchsia-900/50 relative group overflow-hidden shrink-0">
<div className="absolute inset-0 bg-fuchsia-500/10 z-10 mix-blend-overlay"></div>
<img alt="AR" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 filter contrast-125" src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&amp;w=2487&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border-2 border-transparent group-hover:border-fuchsia-400 z-20 transition-all duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-fuchsia-500 z-30">
<span className="text-fuchsia-300 text-xs font-mono">VR_ENVIRONMENT</span>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-cyan-900/30" id="about">
<div className="col-span-1 md:col-span-4 p-8 md:p-12 bg-cyan-950/5 relative">
<div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-cyan-500"></div>
<div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-cyan-500"></div>
<h3 className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2 text-cyan-400">
<i className="w-4 h-4" data-lucide="user-check"></i>
                            Identity
                        </h3>
<div className="aspect-square w-full mb-6 relative overflow-hidden bg-black border border-cyan-900/50 group">

<div className="absolute inset-0 flex items-center justify-center text-cyan-900 group-hover:text-cyan-600 transition-colors">
<i className="w-24 h-24 opacity-50 group-hover:opacity-100 group-hover:animate-pulse" data-lucide="scan-face"></i>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
</div>
<div className="flex flex-col gap-2 font-mono text-[10px] text-cyan-600/80">
<p className="flex justify-between border-b border-cyan-900/30 pb-1">
<span>LOC:</span> <span className="text-cyan-400">SPOKANE_SECTOR</span>
</p>
<p className="flex justify-between border-b border-cyan-900/30 pb-1">
<span>ROLE:</span> <span className="text-cyan-400">LEAD_DESIGN</span>
</p>
<p className="flex justify-between border-b border-cyan-900/30 pb-1">
<span>EXP:</span> <span className="text-cyan-400">LVL_09</span>
</p>
<p className="flex justify-between pt-1">
<span>STATUS:</span> <span className="text-green-500 animate-pulse">ACTIVE</span>
</p>
</div>
</div>
<div className="col-span-1 md:col-span-8 p-8 md:p-16 relative">

<div className="absolute top-4 right-6 text-[10px] text-cyan-900/40 select-none font-mono text-right hidden lg:block">
                            func init() {<br/>
                              load_creativity();<br/>
                              render_ui();<br/>
                            }
                        </div>
<h3 className="text-2xl md:text-3xl tracking-tight mb-8 text-white font-grotesk font-semibold leading-tight">
                            Decrypting complexity.<br/>
<span className="text-cyan-500">Recompiling simplicity.</span>
</h3>
<div className="space-y-6 text-sm leading-relaxed text-cyan-100/60 font-mono">
<p>
<span className="text-cyan-500">&gt;</span> I'm Adam Parish, a multidisciplinary architect based in the Spokane sector. Currently overseeing product design protocols at Aon - IP Solutions Group. Former startup co-founder and freelance operative.
                            </p>
<p>
<span className="text-cyan-500">&gt;</span> Initialized my career sequence by co-founding XpenseOne. While the unicorn status wasn't achieved, the data gained was invaluable for future operations.
                            </p>
<p>
<span className="text-cyan-500">&gt;</span> Downtime activities involve exploring side-projects to upgrade my skill tree without budgetary constraints.
                            </p>
<p>
<span className="text-cyan-500">&gt;</span> Recharge mode: Traveling ✈️, gaming 🎤, acoustic frequencies 🎵, and crafting local brews.
                            </p>
</div>
</div>
</section>
</div>

<div className="col-span-1 md:col-span-3 relative bg-black/40 backdrop-blur-sm border-l border-cyan-900/30">
<div className="sticky top-16">
<div className="p-6 border-b border-cyan-900/30 flex items-center justify-between bg-cyan-950/20">
<h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-cyan-500 rounded-sm animate-spin"></span>
                            Data_Log
                        </h3>
<i className="w-4 h-4 text-cyan-700" data-lucide="history"></i>
</div>
<div className="divide-y divide-cyan-900/20">

<div className="p-6 hover:bg-cyan-500/5 transition-all group border-l-2 border-transparent hover:border-cyan-400 cursor-default">
<div className="flex items-center justify-between mb-2">
<h4 className="text-sm font-bold text-white font-grotesk group-hover:text-cyan-300">Atomic Financial</h4>
<div className="px-1.5 py-0.5 rounded text-[8px] bg-cyan-900/50 text-cyan-300 border border-cyan-700">CURRENT</div>
</div>
<p className="text-xs text-cyan-500/70 mb-1">Lead Product Designer</p>
<p className="text-[10px] text-cyan-800 font-mono">2022.03 - PRESENT</p>
</div>

<div className="p-6 hover:bg-cyan-500/5 transition-all group border-l-2 border-transparent hover:border-cyan-400 cursor-default">
<h4 className="text-sm font-bold text-cyan-200/70 mb-1 group-hover:text-cyan-300 font-grotesk">Aon</h4>
<p className="text-xs text-cyan-500/50 mb-1">Lead Product Designer</p>
<p className="text-[10px] text-cyan-800 font-mono">2019.11 - 2022.03</p>
</div>

<div className="p-6 hover:bg-cyan-500/5 transition-all group border-l-2 border-transparent hover:border-cyan-400 cursor-default">
<h4 className="text-sm font-bold text-cyan-200/70 mb-1 group-hover:text-cyan-300 font-grotesk">CloudEngage</h4>
<p className="text-xs text-cyan-500/50 mb-1">Lead Product Designer</p>
<p className="text-[10px] text-cyan-800 font-mono">2018.10 - 2019.11</p>
</div>

<div className="p-6 hover:bg-cyan-500/5 transition-all group border-l-2 border-transparent hover:border-cyan-400 cursor-default">
<h4 className="text-sm font-bold text-cyan-200/70 mb-1 group-hover:text-cyan-300 font-grotesk">XpenseOne</h4>
<p className="text-xs text-cyan-500/50 mb-1">Co-Founder / Lead</p>
<p className="text-[10px] text-cyan-800 font-mono">2014.04 - 2018.04</p>
</div>

<div className="p-6 hover:bg-cyan-500/5 transition-all group border-l-2 border-transparent hover:border-cyan-400 cursor-default">
<h4 className="text-sm font-bold text-cyan-200/70 mb-1 group-hover:text-cyan-300 font-grotesk">Imprezzio</h4>
<p className="text-xs text-cyan-500/50 mb-1">Product Designer</p>
<p className="text-[10px] text-cyan-800 font-mono">2017.02 - 2018.02</p>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-cyan-900/30 relative bg-black/80 z-10">
<div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-cyan-900/30">

<div className="col-span-1 md:col-span-9 p-8 md:p-16 flex flex-col justify-center items-start relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.1),transparent_50%)]"></div>
<h2 className="text-3xl md:text-4xl tracking-tighter mb-4 text-white font-grotesk font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                        Initialize Handshake? <span className="text-cyan-500 animate-pulse">_</span>
</h2>
<p className="text-lg text-cyan-400/60 mb-8 font-mono max-w-xl">
                        Transmit data packets to 
                        <a className="text-cyan-300 hover:text-white hover:bg-cyan-500/20 px-1 transition-colors underline decoration-cyan-500/30 underline-offset-4" href="mailto:hello@atomparish.com">hello@atomparish.com</a>
                        and I will respond within standard latency parameters.
                    </p>
<a className="group relative px-8 py-4 bg-transparent overflow-hidden border border-cyan-500/50 text-cyan-400 font-bold text-xs uppercase tracking-widest hover:text-black transition-colors duration-300" href="mailto:hello@atomparish.com">
<div className="absolute inset-0 w-0 bg-cyan-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
<span className="relative flex items-center gap-2">
                            Send_Message <i className="w-3 h-3" data-lucide="send"></i>
</span>
</a>
</div>

<div className="col-span-1 md:col-span-3 p-8 md:p-16 flex flex-col justify-end bg-cyan-950/10">
<div className="mt-auto font-mono text-[10px] space-y-4 text-cyan-700">
<div className="flex items-center gap-2 text-cyan-500">
<i className="w-3 h-3" data-lucide="map-pin"></i>
<span className="tracking-widest">SPOKANE_WA</span>
</div>
<div className="grid grid-cols-2 gap-4 border-t border-cyan-900/30 pt-4">
<div>
<span className="block text-cyan-800 mb-1">LATITUDE</span>
<span className="text-cyan-500">47.6588° N</span>
</div>
<div>
<span className="block text-cyan-800 mb-1">LONGITUDE</span>
<span className="text-cyan-500">117.4260° W</span>
</div>
</div>
<div className="pt-8 text-cyan-800 flex justify-between items-center">
<span>© 2024 ADAM PARISH</span>
<span className="w-2 h-2 bg-cyan-900 rounded-full animate-pulse"></span>
</div>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
