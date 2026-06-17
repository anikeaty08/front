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



        !function(){var u=window.UnicornStudio;if(u&&u.init){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){u.init()})}else{u.init()}}else{window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js",i.onload=function(){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){UnicornStudio.init()})}else{UnicornStudio.init()}},(document.head||document.body).appendChild(i)}}();
      


    // Initialize Lucide icons
    lucide.createIcons();

    // Scroll Progress Indicator
    const scrollProgress = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollPx / winHeightPx;
      if (scrollProgress) {
        scrollProgress.style.transform = `scaleX(${progress})`;
      }
    });

    // Intersection Observer for Reveal Animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          // Optional: stop observing once revealed
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll, .kinetic-heading').forEach((el) => {
      revealObserver.observe(el);
    });

    // Subtle Magnetic Interaction for Cards
    document.querySelectorAll('.magnetic-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Apply smooth transform using CSS vars or inline styles
        card.style.transform = `translate3d(${x * 0.03}px, ${y * 0.03}px, 0)`;
      });

      card.addEventListener('mouseleave', () => {
        // Reset transform when mouse leaves
        card.style.transform = `translate3d(0px, 0px, 0)`;
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
      
<div className="fixed top-0 left-0 h-[2px] w-full z-[70] bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 pointer-events-none" id="scroll-progress"></div>

<div className="fixed inset-0 vertical-streaks pointer-events-none z-0"></div>
<div className="fixed inset-0 crt-scanlines pointer-events-none z-0 opacity-40"></div>
<div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/5 via-black/95 to-black z-0 pointer-events-none"></div>

<nav className="fixed top-0 left-0 z-50 w-full bg-black/80 backdrop-blur-xl border-b border-white/5">
<div className="md:px-10 lg:px-16 flex md:h-20 w-full h-16 pr-6 pl-6 items-center">
<div className="flex items-center gap-4">
<div className="w-2 h-2 bg-cyan-500 animate-pulse"></div>
<a className="font-orbitron text-sm md:text-base uppercase tracking-[0.3em] text-white/90 hover:text-cyan-400 transition-colors" href="#home">LAB.01 // SYSTEM</a>
</div>
<div className="ml-auto flex items-center gap-6 md:gap-10">
<div className="hidden md:flex items-center gap-10">
<a className="text-xs font-orbitron uppercase tracking-[0.2em] text-neutral-500 hover:text-cyan-400 transition-colors" href="#experiments">Experiments</a>
<a className="text-xs font-orbitron uppercase tracking-[0.2em] text-neutral-500 hover:text-cyan-400 transition-colors" href="#system">System</a>
<a className="text-xs font-orbitron uppercase tracking-[0.2em] text-neutral-500 hover:text-cyan-400 transition-colors" href="#licensing">Licensing</a>
</div>
<a className="font-orbitron text-xs uppercase tracking-[0.2em] border border-cyan-500/30 text-cyan-400 bg-cyan-500/5 px-6 py-2.5 md:py-3 hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all duration-300 relative group overflow-hidden rounded-none" href="#contact">
<div className="absolute inset-0 w-full h-full bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
<span className="relative z-10">Init_Sequence</span>
</a>
</div>
</div>
</nav>

<main className="z-10 w-full relative pt-16 md:pt-20">

<section className="relative w-full h-[80vh] min-h-[500px] overflow-hidden flex items-center border-b border-white/5" data-parallax-root="" id="home">

<div className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen js-parallax" data-parallax-speed="-0.14" data-us-project="q0JSwb0l42Yf6m79xfW9" style={{width: '100%', height: '100%'}}></div>

<div className="absolute bottom-12 left-6 md:left-12 lg:left-16 z-20 pointer-events-none w-full max-w-4xl animate-hero-rise" data-sequence="">
<div className="flex items-center gap-3 mb-4">
<span className="text-xs md:text-sm font-orbitron tracking-[0.4em] text-cyan-500 uppercase">SYS.ONLINE</span>
<span className="w-10 h-[1px] bg-cyan-500/50"></span>
</div>
<h1 className="font-orbitron text-white uppercase leading-[1.1] tracking-tight text-3xl md:text-5xl lg:text-6xl drop-shadow-[0_0_30px_rgba(0,255,255,0.15)] kinetic-heading in-view">
          Real-Time Interfaces<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white/50">for the AI Era.</span>
</h1>
<p className="mt-6 text-base text-neutral-400 font-light tracking-wide max-w-xl border-l border-cyan-500/30 pl-4 py-1">
          Interactive experiments in WebGL, motion systems, and immersive UI. Bridging the gap between raw compute and human perception.
        </p>
<div className="mt-8 flex flex-col sm:flex-row items-start gap-4 pointer-events-auto">
<a className="group relative inline-flex items-center gap-3 border border-cyan-400 bg-cyan-400/10 text-cyan-400 font-orbitron font-normal text-xs uppercase tracking-[0.2em] px-6 py-3 transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] rounded-none" href="#contact">
<span>Enter the Lab</span>
<iconify-icon height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50 group-hover:border-black/50"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50 group-hover:border-black/50"></div>
</a>
<a className="group relative inline-flex items-center gap-3 border border-white/10 bg-transparent text-white font-orbitron font-normal text-xs uppercase tracking-[0.2em] px-6 py-3 transition-all duration-300 hover:border-white/30 hover:bg-white/5 rounded-none" href="#experiments">
<span className="">View Experiments</span>
<iconify-icon height="16" icon="solar:code-scan-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-12 right-6 lg:right-16 z-30 flex flex-col items-end gap-2 text-right pointer-events-none reveal-on-scroll in-view" data-reveal="" style={{'--reveal-delay': '0ms'}}>
<p className="font-orbitron text-xs tracking-[0.3em] text-neutral-600 uppercase">Core Technologies</p>
<div className="flex gap-3 text-xs font-mono text-cyan-500/70 mt-1">
<span>[ WEBGL ]</span>
<span>[ SHADERS ]</span>
<span>[ GLSL ]</span>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 w-full border-b border-white/5 bg-black relative" id="experiments">
<div className="max-w-7xl mx-auto">
<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6 reveal-on-scroll in-view" data-reveal="" style={{'--reveal-delay': '0ms'}}>
<div className="">
<p className="font-orbitron text-xs uppercase tracking-[0.4em] text-cyan-500 mb-3 flex items-center gap-3">
<span className="w-6 md:w-8 h-[1px] bg-cyan-500"></span> 01 // Experiments
            </p>
<h2 className="text-2xl md:text-4xl font-normal tracking-tight text-white font-orbitron uppercase">Research &amp; Development</h2>
</div>
<p className="text-neutral-500 text-xs font-orbitron tracking-[0.2em] uppercase max-w-xs text-right">
            Live prototypes pushing browser capabilities.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

<div className="group relative bg-neutral-950 border border-white/10 hover:border-cyan-500/50 transition-colors duration-500 p-5 md:p-6 flex flex-col justify-between min-h-[280px] rounded-none overflow-hidden cursor-crosshair reveal-on-scroll magnetic-card" data-magnetic="" data-reveal="" style={{'--reveal-delay': '90ms', '--mx': '0px', '--my': '0px'}}>
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
<div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden"><div className="h-full w-1/3 bg-cyan-400 animate-scan-line hidden group-hover:block"></div></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-8">
<div className="w-8 h-8 md:w-10 md:h-10 border border-white/10 bg-black flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-500 rounded-none">
<iconify-icon icon="solar:bacteria-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-orbitron tracking-[0.2em] text-neutral-600 border border-white/5 px-2 py-1 uppercase">Live Demo</span>
</div>
<h3 className="text-lg md:text-xl font-normal tracking-tight mb-2 text-white font-orbitron uppercase group-hover:text-cyan-300 transition-colors">Neural Particle Field</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                100,000 instanced geometries reacting to cursor velocity and audio input via custom fragment shaders.
              </p>
</div>
<div className="relative z-10 flex items-center gap-2 text-cyan-500 text-xs font-orbitron tracking-[0.2em] uppercase mt-6 opacity-50 group-hover:opacity-100 transition-opacity">
              Initialize <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>

<div className="group relative bg-neutral-950 border border-white/10 hover:border-cyan-500/50 transition-colors duration-500 p-5 md:p-6 flex flex-col justify-between min-h-[280px] rounded-none overflow-hidden cursor-crosshair reveal-on-scroll magnetic-card" data-magnetic="" data-reveal="" style={{'--reveal-delay': '180ms', '--mx': '0px', '--my': '0px'}}>
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
<div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden"><div className="h-full w-1/3 bg-cyan-400 animate-scan-line hidden group-hover:block"></div></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-8">
<div className="w-8 h-8 md:w-10 md:h-10 border border-white/10 bg-black flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-500 rounded-none">
<iconify-icon icon="solar:gallery-favourite-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-orbitron tracking-[0.2em] text-neutral-600 border border-white/5 px-2 py-1 uppercase">Interactive</span>
</div>
<h3 className="text-lg md:text-xl font-normal tracking-tight mb-2 text-white font-orbitron uppercase group-hover:text-cyan-300 transition-colors">Image Reveal Shader</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                Liquid distortion effects applied to DOM images mapped onto WebGL planes with noise displacement.
              </p>
</div>
<div className="relative z-10 flex items-center gap-2 text-cyan-500 text-xs font-orbitron tracking-[0.2em] uppercase mt-6 opacity-50 group-hover:opacity-100 transition-opacity">
              Initialize <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>

<div className="group relative bg-neutral-950 border border-white/10 hover:border-cyan-500/50 transition-colors duration-500 p-5 md:p-6 flex flex-col justify-between min-h-[280px] rounded-none overflow-hidden cursor-crosshair reveal-on-scroll magnetic-card" data-magnetic="" data-reveal="" style={{'--reveal-delay': '270ms'}}>
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
<div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden"><div className="h-full w-1/3 bg-cyan-400 animate-scan-line hidden group-hover:block"></div></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-8">
<div className="w-8 h-8 md:w-10 md:h-10 border border-white/10 bg-black flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-500 rounded-none">
<iconify-icon icon="solar:mouse-circle-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-orbitron tracking-[0.2em] text-neutral-600 border border-white/5 px-2 py-1 uppercase">Motion</span>
</div>
<h3 className="text-lg md:text-xl font-normal tracking-tight mb-2 text-white font-orbitron uppercase group-hover:text-cyan-300 transition-colors">Scroll Scan Engine</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                Tying camera z-depth and post-processing bloom intensity directly to native browser scroll velocity.
              </p>
</div>
<div className="relative z-10 flex items-center gap-2 text-cyan-500 text-xs font-orbitron tracking-[0.2em] uppercase mt-6 opacity-50 group-hover:opacity-100 transition-opacity">
              Initialize <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-24 md:px-12 overflow-hidden bg-neutral-950/30 w-full border-white/5 border-b pt-16 pr-6 pb-16 pl-6 relative" id="demo-reel">
<div className="max-w-[1300px] mx-auto">
<div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 reveal-on-scroll border-b border-white/10 pb-6" data-reveal="" style={{'--reveal-delay': '0ms'}}>
<div className="">
<p className="uppercase flex items-center gap-3 text-xs md:text-sm text-cyan-500 tracking-[0.4em] font-orbitron mb-3">
<span className="bg-cyan-500 w-6 md:w-8 h-[1px]"></span> 04 // Interactive Simulation
            </p>
<h2 className="text-2xl md:text-4xl uppercase font-normal text-white tracking-tight font-orbitron">Agents operation system</h2>
</div>
<p className="text-xs md:text-sm text-neutral-500 font-orbitron tracking-[0.2em] uppercase max-w-sm md:text-right">
            Real-time multi-agent processing mapped visually.
          </p>
</div>

<div className="border border-[#222] bg-[#0a0a0a] flex h-[800px] w-full overflow-hidden relative rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] reveal-on-scroll font-sans" data-reveal="" style={{'--reveal-delay': '90ms'}}>

<aside className="w-64 border-r border-[#222] bg-[#0a0a0a] flex flex-col shrink-0 hidden lg:flex">

<div className="p-4 flex flex-col gap-4 border-b border-[#222]">
<div className="flex items-center gap-3">
<div className="w-7 h-7 bg-[#2563eb] rounded-lg flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="infinity" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-normal text-white">Fleet Command</span>
</div>
<div className="bg-[#141414] border border-[#222] rounded-md flex items-center px-2.5 py-1.5 text-neutral-400">
<i className="w-4 h-4 mr-2" data-lucide="search" strokeWidth="1.5"></i>
<span className="text-xs font-light">Search agents, logs...</span>
<kbd className="ml-auto text-xs font-mono bg-[#222] px-1.5 py-0.5 rounded border border-[#333]">⌘K</kbd>
</div>
</div>

<nav className="flex-1 overflow-y-auto p-3 space-y-6">

<div>
<h3 className="px-2 text-xs font-light tracking-widest text-neutral-500 mb-2 uppercase">HQ</h3>
<div className="space-y-0.5">
<a className="flex items-center gap-3 px-2 py-1.5 text-neutral-400 hover:text-white hover:bg-[#1a1a1a] rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="home" strokeWidth="1.5"></i>
<span className="text-xs font-light">Overview</span>
</a>
<a className="flex items-center justify-between px-2 py-1.5 text-neutral-400 hover:text-white hover:bg-[#1a1a1a] rounded-md transition-colors" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="inbox" strokeWidth="1.5"></i>
<span className="text-xs font-light">Agent Inbox</span>
</div>
<span className="bg-[#1e3a8a] text-[#60a5fa] text-xs px-2 py-0.5 rounded-full font-light">12</span>
</a>
</div>
</div>

<div>
<h3 className="px-2 text-xs font-light tracking-widest text-neutral-500 mb-2 uppercase">Workforces</h3>
<div className="space-y-0.5">
<a className="flex items-center gap-3 px-2 py-1.5 bg-[#141414] text-white rounded-md border border-[#222]" href="#">
<i className="w-4 h-4 text-[#60a5fa]" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-xs font-normal">Sales SDR Swarm</span>
</a>
<a className="flex items-center gap-3 px-2 py-1.5 text-neutral-400 hover:text-white hover:bg-[#1a1a1a] rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="user" strokeWidth="1.5"></i>
<span className="text-xs font-light">CEO Co-Pilot</span>
</a>
<a className="flex items-center gap-3 px-2 py-1.5 text-neutral-400 hover:text-white hover:bg-[#1a1a1a] rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="terminal-square" strokeWidth="1.5"></i>
<span className="text-xs font-light">IT Support Agent</span>
</a>
</div>
</div>
</nav>

<div className="p-4 border-t border-[#222] flex items-center justify-between hover:bg-[#111] transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#222] border border-[#333] flex items-center justify-center text-xs text-neutral-300 font-normal">SJ</div>
<div>
<div className="text-sm font-normal text-white">Sarah Jenkins</div>
<div className="text-xs font-light text-neutral-500">sarah@looper.ai</div>
</div>
</div>
<i className="w-4 h-4 text-neutral-500" data-lucide="settings" strokeWidth="1.5"></i>
</div>
</aside>

<main className="flex-1 flex flex-col relative bg-[#0a0a0a] min-w-0">

<header className="h-14 border-b border-[#222] flex items-center justify-between px-6 shrink-0 z-20 bg-[#0a0a0a]">
<div className="flex items-center gap-2 text-xs font-light text-neutral-500">
<i className="w-4 h-4" data-lucide="chevron-left" strokeWidth="1.5"></i>
<span>Workforces</span>
<span>/</span>
<span className="text-white font-normal">Sales SDR Swarm</span>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 text-xs text-neutral-300 border border-[#222] hover:bg-[#141414] rounded-md transition-colors font-light">
<i className="w-3.5 h-3.5" data-lucide="play" strokeWidth="1.5"></i> Simulate Run
                </button>
<button className="px-4 py-1.5 text-xs text-white bg-[#0284c7] hover:bg-[#0369a1] rounded-md font-normal transition-colors shadow-[0_0_15px_rgba(2,132,199,0.3)]">
                  Activate Swarm
                </button>
</div>
</header>

<div className="flex-1 relative overflow-auto bg-[#0a0a0a]">

<div className="absolute inset-0 z-0 opacity-[0.25]" style={{backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<div className="relative w-[800px] h-[600px] mx-auto mt-12 z-10 flex-shrink-0">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0">

<path d="M 280 250 C 350 250, 350 150, 420 150" fill="none" stroke="#333" strokeWidth="2"></path>

<path d="M 280 250 C 350 250, 350 350, 420 350" fill="none" stroke="#333" strokeWidth="2"></path>

<circle cx="280" cy="250" fill="#0284c7" r="4"></circle>
<circle cx="420" cy="150" fill="#333" r="4"></circle>
<circle cx="420" cy="350" fill="#333" r="4"></circle>

<path d="M 676 150 L 700 150" fill="none" stroke="#333" strokeWidth="2"></path>
<circle cx="676" cy="150" fill="#333" r="4"></circle>
<path d="M 676 350 L 700 350" fill="none" stroke="#333" strokeWidth="2"></path>
<circle cx="676" cy="350" fill="#333" r="4"></circle>
</svg>


<div className="absolute top-[180px] left-[16px] w-64 bg-[#141414] border border-[#0284c7]/30 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col z-10 overflow-hidden">
<div className="absolute -top-3 left-4 bg-[#0a0a0a] px-1">
<span className="text-xs font-normal text-[#0ea5e9] border border-[#0ea5e9]/30 bg-[#0ea5e9]/10 px-2 py-0.5 rounded uppercase tracking-wider">Data Source</span>
</div>
<div className="p-4 pt-6 flex gap-3">
<div className="w-8 h-8 rounded-lg bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center text-[#0ea5e9] shrink-0 mt-0.5">
<i className="w-4 h-4" data-lucide="database" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-sm font-normal text-white">High-Intent Lead</h4>
<p className="text-xs font-light text-neutral-500 mt-0.5">Signal from Apollo</p>
</div>
</div>
<div className="bg-[#1a1a1a] p-3 text-xs font-light text-neutral-400 border-t border-[#222] text-center">
                    Enrich: <span className="font-normal text-white">Clearbit API</span> • Filter: <span className="font-normal text-white">ICP Match</span>
</div>
</div>

<div className="absolute top-[80px] left-[420px] w-64 bg-[#141414] border border-[#222] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col z-10">
<div className="absolute -top-3 left-4 bg-[#0a0a0a] px-1">
<span className="text-xs font-light text-neutral-400 uppercase tracking-wider">Agent: SDR</span>
</div>
<div className="p-4 pt-6">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-lg bg-[#222] border border-[#333] flex items-center justify-center text-neutral-300 shrink-0">
<i className="w-4 h-4" data-lucide="message-square-text" strokeWidth="1.5"></i>
</div>
<h4 className="text-sm font-normal text-white">Draft Outreach</h4>
</div>
<div className="bg-[#0a0a0a] border border-[#222] rounded-lg p-3 text-center mb-4 relative">
<span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#141414] px-1 text-xs font-light text-neutral-500">Context</span>
<p className="text-xs font-light text-neutral-300 mt-1">Analyze recent company news</p>
</div>
<div className="inline-flex items-center gap-1.5 border border-[#0ea5e9]/30 bg-[#0ea5e9]/5 text-[#0ea5e9] px-2.5 py-1 rounded-full text-xs font-light">
<div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]"></div>
                       GPT-4o Reasoning
                    </div>
</div>
</div>

<div className="absolute top-[280px] left-[420px] w-64 bg-[#141414] border border-[#222] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col z-10">
<div className="absolute -top-3 left-4 bg-[#0a0a0a] px-1">
<span className="text-xs font-light text-neutral-400 uppercase tracking-wider">Agent: Co-Pilot</span>
</div>
<div className="p-4 pt-6">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-lg bg-[#222] border border-[#333] flex items-center justify-center text-neutral-300 shrink-0">
<i className="w-4 h-4" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h4 className="text-sm font-normal text-white">Review &amp; Approve</h4>
</div>
<div className="bg-[#0a0a0a] border border-[#222] rounded-lg p-3 flex justify-between items-center text-xs">
<span className="font-light text-neutral-500">Rule Engine</span>
<span className="font-normal text-[#0ea5e9]">Brand Safety</span>
</div>
</div>
</div>
</div>
</div>

<footer className="h-12 border-t border-[#222] flex items-center justify-between px-6 shrink-0 z-20 bg-[#0a0a0a]">
<div className="flex items-center gap-4 text-xs font-light text-neutral-400">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="activity" strokeWidth="1.5"></i>
<span>Agent Status</span>
</div>
<span className="text-[#333]">•</span>
<span>Success rate <span className="font-normal text-[#0ea5e9]">99.2%</span></span>
</div>
<div className="flex items-center gap-4 text-xs font-light text-neutral-400">
<span>Last action: 2m ago</span>
<div className="flex items-center gap-2 text-[#10b981] font-normal">
<div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></div>
                  Swarm Active
                </div>
</div>
</footer>
</main>

<aside className="w-80 border-l border-[#222] bg-[#0a0a0a] flex flex-col shrink-0 hidden xl:flex overflow-y-auto">

<div className="p-6 border-b border-[#222]">
<h2 className="text-base font-normal text-white mb-1">AI SDR Agent</h2>
<p className="text-xs font-light text-neutral-500">Role • Outbound Sales</p>
</div>
<div className="p-6 space-y-8 flex-1">

<div className="border border-[#222] rounded-xl bg-[#141414] overflow-hidden">
<div className="p-4 border-b border-[#222] flex justify-center">
<span className="text-xs font-light text-neutral-500 tracking-widest uppercase">Agent Mandate</span>
</div>
<div className="p-4">
<p className="text-xs font-light text-neutral-400 mb-4 leading-relaxed text-center px-2">
                    Instruct the agent in plain text. It will adapt its approach based on your guidelines.
                  </p>
<div className="bg-[#0a0a0a] border border-[#222] rounded-lg p-3 relative">
<p className="text-xs font-light text-neutral-500 mb-8 leading-relaxed">
                      e.g. Focus on VP level targets. Use a casual tone. Reference their recent funding round if applicable.
                    </p>
<div className="flex justify-end">
<button className="px-3 py-1.5 bg-[#0ea5e9] hover:bg-[#0284c7] text-white text-xs font-normal rounded-md transition-colors">
                        Update
                      </button>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-3 px-1">
<span className="text-xs font-light text-neutral-500 tracking-widest uppercase">Knowledge Base</span>
<span className="text-xs font-normal text-[#10b981] border border-[#10b981]/30 bg-[#10b981]/10 px-2 py-0.5 rounded-full">Synced</span>
</div>
<div className="space-y-2">
<div className="flex items-center gap-3 p-3 border border-[#222] rounded-lg bg-[#141414] text-xs font-light text-neutral-300">
<i className="w-4 h-4 text-neutral-500" data-lucide="file-text" strokeWidth="1.5"></i>
                     Company_Pitch_Deck.pdf
                  </div>
<div className="flex items-center gap-3 p-3 border border-[#222] rounded-lg bg-[#141414] text-xs font-light text-neutral-300">
<i className="w-4 h-4 text-neutral-500" data-lucide="link" strokeWidth="1.5"></i>
                     looper.ai/case-studies
                  </div>
</div>
</div>
</div>

<div className="p-6 border-t border-[#222] bg-[#0a0a0a]">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-light text-neutral-400">Swarm Health</span>
<span className="text-xs font-normal text-[#10b981] border border-[#10b981]/30 px-2 py-0.5 rounded">Optimal</span>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="border border-[#222] rounded-lg bg-[#141414] p-3 text-center">
<p className="text-xs font-light text-neutral-500 mb-1">Active Agents</p>
<p className="text-base font-normal text-white">3</p>
</div>
<div className="border border-[#222] rounded-lg bg-[#141414] p-3 text-center">
<p className="text-xs font-light text-neutral-500 mb-1">Tasks Executed</p>
<p className="text-base font-normal text-white">1,402</p>
</div>
</div>
</div>
</aside>
</div>
</div>
</section>
<section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-neutral-950/30 w-full border-white/5 border-b relative" id="workforces">
<div className="z-10 max-w-7xl mx-auto relative">
<div className="flex flex-col md:flex-row md:items-end gap-6 reveal-on-scroll border-white/10 border-b mb-12 pb-6 justify-between" data-reveal="" style={{'--reveal-delay': '0ms'}}>
<div className="">
<p className="uppercase flex items-center gap-3 text-xs md:text-sm text-cyan-500 tracking-[0.4em] font-orbitron mb-3">
<span className="w-6 md:w-8 h-[1px] bg-cyan-500"></span> 01.5 // Active Units
            </p>
<h2 className="text-2xl md:text-4xl font-normal tracking-tight text-white font-orbitron uppercase">Agent Workforces</h2>
</div>
<p className="text-neutral-500 text-xs md:text-sm font-orbitron tracking-[0.2em] uppercase max-w-xs md:text-right">
            Autonomous multi-agent systems currently deployed in the field.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

<div className="group border border-white/10 bg-black p-5 md:p-6 relative overflow-hidden reveal-on-scroll magnetic-card" data-magnetic="" data-reveal="" style={{'--reveal-delay': '90ms', '--mx': '0px', '--my': '0px'}}>
<div className="absolute top-0 left-0 w-full h-[2px] bg-white/5 group-hover:bg-cyan-500 transition-colors duration-500"></div>
<div className="flex justify-between items-start mb-6">
<div className="flex group-hover:scale-110 transition-transform duration-500 text-cyan-400 bg-neutral-950 w-8 h-8 md:w-10 md:h-10 border-white/10 border rounded-none items-center justify-center">
<iconify-icon icon="solar:cpu-linear" width="18"></iconify-icon>
</div>
<span className="flex items-center gap-1.5 text-xs font-orbitron tracking-[0.2em] text-cyan-500 uppercase">
<span className="w-1.5 h-1.5 bg-cyan-500 animate-pulse"></span> Online
              </span>
</div>
<h3 className="text-lg md:text-xl font-normal tracking-tight text-white font-orbitron uppercase mb-1">Nexus-7</h3>
<p className="text-xs md:text-sm text-neutral-500 font-light mb-5">Data Synthesis &amp; Pattern Recognition</p>
<div className="space-y-2 border-t border-white/5 pt-3">
<div className="flex justify-between text-xs md:text-sm font-mono text-neutral-400"><span className="uppercase tracking-wider">Throughput</span> <span className="text-cyan-400">1.2 TB/s</span></div>
<div className="flex justify-between text-xs md:text-sm font-mono text-neutral-400"><span className="uppercase tracking-wider">Nodes</span> <span className="text-cyan-400">14,020</span></div>
</div>
</div>

<div className="group border border-white/10 bg-black p-5 md:p-6 relative overflow-hidden reveal-on-scroll magnetic-card" data-magnetic="" data-reveal="" style={{'--reveal-delay': '180ms', '--mx': '0px', '--my': '0px'}}>
<div className="absolute top-0 left-0 w-full h-[2px] bg-white/5 group-hover:bg-cyan-500 transition-colors duration-500"></div>
<div className="flex justify-between items-start mb-6">
<div className="w-8 h-8 md:w-10 md:h-10 border border-white/10 bg-neutral-950 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-500 rounded-none">
<iconify-icon icon="solar:network-linear" width="18"></iconify-icon>
</div>
<span className="flex items-center gap-1.5 text-xs font-orbitron tracking-[0.2em] text-cyan-500 uppercase">
<span className="w-1.5 h-1.5 bg-cyan-500 animate-pulse"></span> Online
              </span>
</div>
<h3 className="text-lg md:text-xl font-normal tracking-tight text-white font-orbitron uppercase mb-1">Aether-Core</h3>
<p className="text-xs md:text-sm text-neutral-500 font-light mb-5">Generative Architecture Framework</p>
<div className="space-y-2 border-t border-white/5 pt-3">
<div className="flex justify-between text-xs md:text-sm font-mono text-neutral-400"><span className="uppercase tracking-wider">Latency</span> <span className="text-cyan-400">4ms</span></div>
<div className="flex justify-between text-xs md:text-sm font-mono text-neutral-400"><span className="uppercase tracking-wider">Uptime</span> <span className="text-cyan-400">99.99%</span></div>
</div>
</div>

<div className="group border border-white/10 bg-black p-5 md:p-6 relative overflow-hidden reveal-on-scroll magnetic-card" data-magnetic="" data-reveal="" style={{'--reveal-delay': '270ms', '--mx': '0px', '--my': '0px'}}>
<div className="absolute top-0 left-0 w-full h-[2px] bg-white/5 group-hover:bg-cyan-500 transition-colors duration-500"></div>
<div className="flex justify-between items-start mb-6">
<div className="w-8 h-8 md:w-10 md:h-10 border border-white/10 bg-neutral-950 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-500 rounded-none">
<iconify-icon icon="solar:shield-check-linear" width="18"></iconify-icon>
</div>
<span className="flex items-center gap-1.5 text-xs font-orbitron tracking-[0.2em] text-cyan-500 uppercase">
<span className="w-1.5 h-1.5 bg-cyan-500 animate-pulse"></span> Online
              </span>
</div>
<h3 className="text-lg md:text-xl font-normal tracking-tight text-white font-orbitron uppercase mb-1">Cipher-9</h3>
<p className="text-xs md:text-sm text-neutral-500 font-light mb-5">Cryptographic Validation &amp; Security</p>
<div className="space-y-2 border-t border-white/5 pt-3">
<div className="flex justify-between text-xs md:text-sm font-mono text-neutral-400"><span className="uppercase tracking-wider">Hashes</span> <span className="text-cyan-400">450M/s</span></div>
<div className="flex justify-between text-xs md:text-sm font-mono text-neutral-400"><span className="uppercase tracking-wider">Integrity</span> <span className="text-cyan-400">100%</span></div>
</div>
</div>

<div className="group border border-white/10 bg-black p-5 md:p-6 relative overflow-hidden reveal-on-scroll magnetic-card" data-magnetic="" data-reveal="" style={{'--reveal-delay': '360ms', '--mx': '0px', '--my': '0px'}}>
<div className="absolute top-0 left-0 w-full h-[2px] bg-white/5 group-hover:bg-cyan-500 transition-colors duration-500"></div>
<div className="flex justify-between items-start mb-6">
<div className="w-8 h-8 md:w-10 md:h-10 border border-white/10 bg-neutral-950 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-500 rounded-none">
<iconify-icon icon="solar:radar-linear" width="18"></iconify-icon>
</div>
<span className="flex items-center gap-1.5 text-xs font-orbitron tracking-[0.2em] text-amber-500 uppercase">
<span className="w-1.5 h-1.5 bg-amber-500 animate-pulse"></span> Standby
              </span>
</div>
<h3 className="text-lg md:text-xl font-normal tracking-tight text-white font-orbitron uppercase mb-1">Vanguard-X</h3>
<p className="text-xs md:text-sm text-neutral-500 font-light mb-5">Predictive Telemetry &amp; Forecasting</p>
<div className="space-y-2 border-t border-white/5 pt-3">
<div className="flex justify-between text-xs md:text-sm font-mono text-neutral-400"><span className="uppercase tracking-wider">Forecasts</span> <span className="text-cyan-400">1.4B</span></div>
<div className="flex justify-between text-xs md:text-sm font-mono text-neutral-400"><span className="uppercase tracking-wider">Accuracy</span> <span className="text-cyan-400">96.4%</span></div>
</div>
</div>
</div>

<div className="reveal-on-scroll overflow-hidden bg-black border-white/10 border mt-10 p-6 md:p-8 relative" data-reveal="" style={{'--reveal-delay': '450ms'}}>

<div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden">
<div className="h-full w-1/3 bg-cyan-400 animate-scan-line"></div>
</div>
<div className="flex flex-col lg:flex-row gap-8 items-center">
<div className="w-full lg:w-1/3">
<h4 className="text-sm md:text-base font-orbitron tracking-[0.2em] text-white uppercase mb-2">Global Deployment</h4>
<p className="leading-relaxed text-xs md:text-sm font-light text-neutral-500 mb-6">
                  Agent workforces are distributed across specialized edge nodes, guaranteeing sub-10ms latency for critical real-time interfaces and heavy ML model execution.
                </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 md:w-14 md:h-14 border border-cyan-500/30 bg-cyan-500/10 flex flex-col items-center justify-center">
<span className="text-cyan-400 font-orbitron text-sm md:text-base">4</span>
<span className="text-xs uppercase tracking-widest text-cyan-500/70 mt-0.5">Clusters</span>
</div>
<div className="w-12 h-12 md:w-14 md:h-14 border border-white/10 bg-neutral-900 flex flex-col items-center justify-center">
<span className="text-white font-orbitron text-sm md:text-base">12</span>
<span className="text-xs uppercase tracking-widest text-neutral-500 mt-0.5">Regions</span>
</div>
</div>
</div>

<div className="w-full lg:w-2/3 flex flex-col justify-center gap-4 border border-white/5 bg-neutral-950/50 p-5 md:p-6 relative">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="flex justify-between items-end mb-2">
<span className="text-xs font-orbitron uppercase tracking-widest text-neutral-500">Node Alpha (US-EAST)</span>
<span className="text-xs md:text-sm font-mono text-cyan-400">99.9%</span>
</div>
<div className="w-full h-[2px] bg-white/5 overflow-hidden"><div className="w-[99.9%] h-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div></div>
</div>
<div className="relative z-10">
<div className="flex justify-between items-end mb-2">
<span className="text-xs font-orbitron uppercase tracking-widest text-neutral-500">Node Beta (EU-WEST)</span>
<span className="text-xs md:text-sm font-mono text-cyan-400">98.4%</span>
</div>
<div className="w-full h-[2px] bg-white/5 overflow-hidden"><div className="w-[98.4%] h-full bg-cyan-500"></div></div>
</div>
<div className="relative z-10">
<div className="flex justify-between items-end mb-2">
<span className="text-xs font-orbitron uppercase tracking-widest text-neutral-500">Node Gamma (AP-SOUTH)</span>
<span className="text-xs md:text-sm font-mono text-amber-500">76.2%</span>
</div>
<div className="w-full h-[2px] bg-white/5 overflow-hidden"><div className="w-[76.2%] h-full bg-amber-500"></div></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 w-full border-b border-white/5 bg-black" id="sandbox">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
<div className="">
<p className="font-orbitron text-xs md:text-sm uppercase tracking-[0.4em] text-cyan-500 mb-3 flex items-center gap-3">
<span className="w-6 md:w-8 h-[1px] bg-cyan-500"></span> 05 // Live Sandbox
          </p>
<h2 className="text-2xl md:text-4xl font-normal tracking-tight text-white font-orbitron uppercase">
            Tweak Parameters in Real Time
          </h2>
<p className="text-xs md:text-sm text-neutral-400 mt-4 leading-relaxed max-w-lg">
            Expose shader uniforms and motion constants to quickly test aesthetic directions, performance thresholds, and interaction sensitivity.
          </p>
</div>
<div className="border border-white/10 bg-neutral-950/60 p-5 md:p-6 space-y-4 md:space-y-5">
<div className="">
<div className="flex justify-between text-xs font-orbitron uppercase tracking-[0.2em] text-neutral-400 mb-2"><span className="">Particle Count</span><span>100000</span></div>
<div className="h-[2px] bg-white/10"><div className="h-full w-[85%] bg-cyan-400"></div></div>
</div>
<div className="">
<div className="flex justify-between text-xs font-orbitron uppercase tracking-[0.2em] text-neutral-400 mb-2"><span className="">Bloom Intensity</span><span>0.72</span></div>
<div className="h-[2px] bg-white/10"><div className="h-full w-[72%] bg-cyan-400"></div></div>
</div>
<div className="">
<div className="flex justify-between text-xs font-orbitron uppercase tracking-[0.2em] text-neutral-400 mb-2"><span className="">Noise Scale</span><span>0.38</span></div>
<div className="h-[2px] bg-white/10"><div className="h-full w-[38%] bg-cyan-400"></div></div>
</div>
<div className="">
<div className="flex justify-between text-xs font-orbitron uppercase tracking-[0.2em] text-neutral-400 mb-2"><span className="">Motion Damping</span><span>0.18</span></div>
<div className="h-[2px] bg-white/10"><div className="h-full w-[18%] bg-cyan-400"></div></div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 w-full border-b border-white/5 bg-neutral-950/30" id="case-studies">
<div className="max-w-7xl mx-auto">
<p className="font-orbitron text-xs md:text-sm uppercase tracking-[0.4em] text-cyan-500 mb-3 flex items-center gap-3">
<span className="w-6 md:w-8 h-[1px] bg-cyan-500"></span> 06 // Case Studies
        </p>
<h2 className="text-2xl md:text-4xl font-normal tracking-tight text-white font-orbitron uppercase mb-10">
          Outcome-Driven Deployments
        </h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
<div className="border border-white/10 bg-black p-5 md:p-6">
<p className="text-xs md:text-sm text-cyan-400 font-orbitron uppercase tracking-[0.2em] mb-2">AI Platform Launch</p>
<p className="text-xs md:text-sm text-neutral-400 leading-relaxed mb-4">Designed cinematic scroll-driven interface for ML explainability.</p>
<p className="text-xs md:text-sm text-neutral-500 uppercase tracking-[0.2em]">Results: +37% time-on-page, +21% demo requests</p>
</div>
<div className="border border-white/10 bg-black p-5 md:p-6">
<p className="text-xs md:text-sm text-cyan-400 font-orbitron uppercase tracking-[0.2em] mb-2">Fintech Analytics Suite</p>
<p className="text-xs md:text-sm text-neutral-400 leading-relaxed mb-4">Migrated heavy SVG charts to GPU-accelerated rendering pipeline.</p>
<p className="text-xs md:text-sm text-neutral-500 uppercase tracking-[0.2em]">Results: 2.1x render speed, stable 60fps on modern mobile</p>
</div>
<div className="border border-white/10 bg-black p-5 md:p-6">
<p className="text-xs md:text-sm text-cyan-400 font-orbitron uppercase tracking-[0.2em] mb-2">Product Story Experience</p>
<p className="text-xs md:text-sm text-neutral-400 leading-relaxed mb-4">Built chapter-based motion narrative with progressive interactions.</p>
<p className="text-xs md:text-sm text-neutral-500 uppercase tracking-[0.2em]">Results: +44% session depth, -29% bounce rate</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 w-full border-b border-white/5 bg-black" id="performance-proof">
<div className="max-w-7xl mx-auto">
<p className="font-orbitron text-xs md:text-sm uppercase tracking-[0.4em] text-cyan-500 mb-3 flex items-center gap-3">
<span className="w-6 md:w-8 h-[1px] bg-cyan-500"></span> 07 // Performance Proof
        </p>
<h2 className="text-2xl md:text-4xl font-normal tracking-tight text-white font-orbitron uppercase mb-8">
          Measured, Not Assumed
        </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
<div className="border border-white/10 p-4 md:p-5 bg-neutral-950/40"><p className="text-xs md:text-sm text-neutral-500 uppercase tracking-[0.2em] font-orbitron">Frame Time</p><p className="text-lg md:text-2xl mt-1 md:mt-2 text-cyan-400 font-orbitron">16.2ms</p></div>
<div className="border border-white/10 p-4 md:p-5 bg-neutral-950/40"><p className="text-xs md:text-sm text-neutral-500 uppercase tracking-[0.2em] font-orbitron">LCP</p><p className="text-lg md:text-2xl mt-1 md:mt-2 text-cyan-400 font-orbitron">1.9s</p></div>
<div className="border border-white/10 p-4 md:p-5 bg-neutral-950/40"><p className="text-xs md:text-sm text-neutral-500 uppercase tracking-[0.2em] font-orbitron">CLS</p><p className="text-lg md:text-2xl mt-1 md:mt-2 text-cyan-400 font-orbitron">0.01</p></div>
<div className="border border-white/10 p-4 md:p-5 bg-neutral-950/40"><p className="text-xs md:text-sm text-neutral-500 uppercase tracking-[0.2em] font-orbitron">INP</p><p className="text-lg md:text-2xl mt-1 md:mt-2 text-cyan-400 font-orbitron">98ms</p></div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-neutral-950/30 w-full border-white/5 border-b" id="process">
<div className="max-w-7xl mx-auto">
<p className="font-orbitron text-xs md:text-sm uppercase tracking-[0.4em] text-cyan-500 mb-3 flex items-center gap-3">
<span className="w-6 md:w-8 h-[1px] bg-cyan-500"></span> 08 // Process Timeline
        </p>
<h2 className="text-2xl md:text-4xl font-normal tracking-tight text-white font-orbitron uppercase mb-10">
          From Concept to Production
        </h2>
<div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
<div className="border border-white/10 p-4 bg-black"><p className="text-cyan-400 text-xs md:text-sm font-orbitron uppercase tracking-[0.2em]">01</p><p className="text-xs md:text-sm text-white mt-2">Discovery</p></div>
<div className="border border-white/10 p-4 bg-black"><p className="text-cyan-400 text-xs md:text-sm font-orbitron uppercase tracking-[0.2em]">02</p><p className="text-xs md:text-sm text-white mt-2">Visual R&amp;D</p></div>
<div className="border border-white/10 p-4 bg-black"><p className="text-cyan-400 text-xs md:text-sm font-orbitron uppercase tracking-[0.2em]">03</p><p className="text-xs md:text-sm text-white mt-2">Shader Prototyping</p></div>
<div className="border border-white/10 p-4 bg-black"><p className="text-cyan-400 text-xs md:text-sm font-orbitron uppercase tracking-[0.2em]">04</p><p className="text-xs md:text-sm text-white mt-2">Optimization</p></div>
<div className="border border-white/10 p-4 bg-black col-span-2 md:col-span-1"><p className="text-cyan-400 text-xs md:text-sm font-orbitron uppercase tracking-[0.2em]">05</p><p className="text-xs md:text-sm text-white mt-2">Production Handoff</p></div>
</div>
</div>
</section>
<section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-black w-full border-white/5 border-b" id="stack">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
<div className="border border-white/10 p-6 md:p-8 bg-neutral-950/40">
<p className="font-orbitron text-xs md:text-sm uppercase tracking-[0.4em] text-cyan-500 mb-4 md:mb-6">09 // Technology Stack</p>
<div className="grid grid-cols-2 gap-2 md:gap-3 text-xs md:text-sm">
<span className="border border-white/10 px-3 py-2 text-neutral-300">WebGL</span>
<span className="border border-white/10 px-3 py-2 text-neutral-300">GLSL</span>
<span className="border border-white/10 px-3 py-2 text-neutral-300">Three.js</span>
<span className="border border-white/10 px-3 py-2 text-neutral-300">Custom RAF Loops</span>
<span className="border border-white/10 px-3 py-2 text-neutral-300">Tailwind UI Layer</span>
<span className="border border-white/10 px-3 py-2 text-neutral-300">Telemetry Hooks</span>
</div>
</div>
<div className="border border-white/10 p-6 md:p-8 bg-neutral-950/40">
<p className="font-orbitron text-xs md:text-sm uppercase tracking-[0.4em] text-cyan-500 mb-4 md:mb-6">10 // Delivery Pipeline</p>
<p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
            Design Spec → Motion Board → Interactive Prototype → GPU Budgeting → QA Benchmarks → Staging → Production Release.
          </p>
<div className="mt-4 md:mt-6 h-[2px] bg-white/10"><div className="h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500"></div></div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-neutral-950/30 w-full border-white/5 border-b" id="trust">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
<div className="">
<p className="font-orbitron text-xs md:text-sm uppercase tracking-[0.4em] text-cyan-500 mb-3">11 // Trust Signals</p>
<h2 className="text-2xl md:text-4xl uppercase font-normal text-white tracking-tight font-orbitron mb-6 md:mb-8">Agent Workforce Teams We Work With</h2>
<div className="grid grid-cols-2 gap-2 md:gap-3 text-xs md:text-sm">
<div className="border border-white/10 px-3 py-2.5 md:py-3 text-neutral-400">[ AETHER AI ]</div>
<div className="border border-white/10 px-3 py-2.5 md:py-3 text-neutral-400">[ NOVA FINTECH ]</div>
<div className="border border-white/10 px-3 py-2.5 md:py-3 text-neutral-400">[ GRID ANALYTICS ]</div>
<div className="border border-white/10 px-3 py-2.5 md:py-3 text-neutral-400">[ ORBIT SYSTEMS ]</div>
</div>
</div>
<div className="border border-white/10 bg-black p-6" id="faq">
<p className="font-orbitron text-xs md:text-sm uppercase tracking-[0.4em] text-cyan-500 mb-4 md:mb-6">12 // FAQ</p>
<div className="space-y-4 md:space-y-5 text-xs md:text-sm">
<div>
<p className="text-white font-normal">Timeline?</p>
<p className="text-neutral-500 mt-1">Typical production timeline is 3-8 weeks depending on scope and scene complexity.</p>
</div>
<div>
<p className="text-white font-normal">Mobile support?</p>
<p className="text-neutral-500 mt-1">Yes, with adaptive quality presets, thermal fallback, and reduced post-processing layers.</p>
</div>
<div>
<p className="text-white font-normal">Maintenance model?</p>
<p className="text-neutral-500 mt-1">Optional monthly optimization and telemetry review for long-term performance stability.</p>
</div>
</div>
</div>
</div>
</section>
<section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-black w-full border-white/5 border-b relative overflow-hidden" id="a-team">

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-1/2 -translate-y-1/2 right-[-30%] md:right-[-10%] lg:right-[0%] w-[150%] md:w-[90%] lg:w-[60%] opacity-20 md:opacity-30 transition-transform duration-1000 transform scale-100 hover:scale-105">
<img alt="A-Team Workforce" className="w-full h-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{filter: 'drop-shadow(0 0 60px rgba(34, 211, 238, 0.2))'}}/>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 md:via-black/70 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
</div>
<div className="max-w-7xl mx-auto relative z-10">

<div className="max-w-2xl mb-12 md:mb-16 reveal-on-scroll" data-reveal="" style={{'--reveal-delay': '0ms'}}>
<p className="font-orbitron text-xs md:text-sm uppercase tracking-[0.4em] text-cyan-500 mb-3 flex items-center gap-3">
<span className="w-6 md:w-8 h-[1px] bg-cyan-500"></span> 11.5 // Specialized Units
          </p>
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white font-orbitron uppercase mb-6 leading-tight">
            The A-Team <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white/50">Agents.</span>
</h2>
<p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed border-l border-cyan-500/30 pl-4 py-1">
            Deploy specialized autonomous units tailored for high-impact organizational roles. Operating seamlessly in the background to drive acquisition, streamline internal operations, and augment executive strategy.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

<div className="group border border-white/10 bg-neutral-950/60 backdrop-blur-md p-6 md:p-8 relative overflow-hidden reveal-on-scroll magnetic-card hover:border-blue-500/50 transition-colors duration-500" data-magnetic="" data-reveal="" style={{'--reveal-delay': '90ms'}}>
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
<div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden"><div className="h-full w-1/3 bg-blue-400 animate-scan-line hidden group-hover:block"></div></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 border border-white/10 bg-black flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
<i className="w-5 h-5" data-lucide="headset" strokeWidth="1.5"></i>
</div>
<span className="flex items-center gap-1.5 text-xs font-orbitron tracking-[0.2em] text-blue-500 uppercase">
<span className="w-1.5 h-1.5 bg-blue-500 animate-pulse"></span> Active
                </span>
</div>
<p className="text-xs font-mono text-neutral-500 mb-1">[ OUTBOUND / ACQUISITION ]</p>
<h3 className="text-xl md:text-2xl font-normal tracking-tight text-white font-orbitron uppercase mb-3">SDR Unit</h3>
<p className="text-sm text-neutral-400 font-light mb-6 leading-relaxed">
                Relentless pipeline generation. Autonomous multi-channel outreach, dynamic script adaptation, and real-time lead qualification at infinite scale.
              </p>
<div className="space-y-3 border-t border-white/5 pt-4">
<div className="flex justify-between items-center text-xs font-mono">
<span className="text-neutral-500 uppercase">Volume Cap</span>
<span className="text-blue-400">10k+ / Day</span>
</div>
<div className="w-full h-1 bg-white/5 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-blue-500 animate-progress" style={{width: '95%'}}></div>
</div>
</div>
</div>
</div>

<div className="group border border-white/10 bg-neutral-950/60 backdrop-blur-md p-6 md:p-8 relative overflow-hidden reveal-on-scroll magnetic-card hover:border-cyan-500/50 transition-colors duration-500" data-magnetic="" data-reveal="" style={{'--reveal-delay': '180ms'}}>
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
<div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden"><div className="h-full w-1/3 bg-cyan-400 animate-scan-line hidden group-hover:block"></div></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 border border-white/10 bg-black flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(34,211,238,0.1)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
<i className="w-5 h-5" data-lucide="terminal-square" strokeWidth="1.5"></i>
</div>
<span className="flex items-center gap-1.5 text-xs font-orbitron tracking-[0.2em] text-cyan-500 uppercase">
<span className="w-1.5 h-1.5 bg-cyan-500 animate-pulse"></span> Active
                </span>
</div>
<p className="text-xs font-mono text-neutral-500 mb-1">[ INTERNAL / OPERATIONS ]</p>
<h3 className="text-xl md:text-2xl font-normal tracking-tight text-white font-orbitron uppercase mb-3">IT Support</h3>
<p className="text-sm text-neutral-400 font-light mb-6 leading-relaxed">
                Automated triage and resolution. Instantly solves 80% of level-1 tickets, provisions access, and maintains internal knowledge graphs securely.
              </p>
<div className="space-y-3 border-t border-white/5 pt-4">
<div className="flex justify-between items-center text-xs font-mono">
<span className="text-neutral-500 uppercase">Resolution Rate</span>
<span className="text-cyan-400">82.4%</span>
</div>
<div className="w-full h-1 bg-white/5 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-cyan-500 animate-progress" style={{width: '82.4%'}}></div>
</div>
</div>
</div>
</div>

<div className="group border border-white/10 bg-neutral-950/60 backdrop-blur-md p-6 md:p-8 relative overflow-hidden reveal-on-scroll magnetic-card hover:border-purple-500/50 transition-colors duration-500" data-magnetic="" data-reveal="" style={{'--reveal-delay': '270ms'}}>
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
<div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden"><div className="h-full w-1/3 bg-purple-400 animate-scan-line hidden group-hover:block"></div></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 border border-white/10 bg-black flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(168,85,247,0.1)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
<i className="w-5 h-5" data-lucide="user" strokeWidth="1.5"></i>
</div>
<span className="flex items-center gap-1.5 text-xs font-orbitron tracking-[0.2em] text-purple-500 uppercase">
<span className="w-1.5 h-1.5 bg-purple-500 animate-pulse"></span> Active
                </span>
</div>
<p className="text-xs font-mono text-neutral-500 mb-1">[ STRATEGY / EXECUTIVE ]</p>
<h3 className="text-xl md:text-2xl font-normal tracking-tight text-white font-orbitron uppercase mb-3">CEO Co-Pilot</h3>
<p className="text-sm text-neutral-400 font-light mb-6 leading-relaxed">
                Strategic synthesis and executive summary. Aggregates cross-departmental data into real-time briefings, surfacing critical anomalies before they escalate.
              </p>
<div className="space-y-3 border-t border-white/5 pt-4">
<div className="flex justify-between items-center text-xs font-mono">
<span className="text-neutral-500 uppercase">Data Sources</span>
<span className="text-purple-400">14 Active</span>
</div>
<div className="w-full h-1 bg-white/5 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-purple-500 animate-progress" style={{width: '100%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-black border-t border-white/10 w-full relative z-10" id="contact">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="w-2 h-2 bg-cyan-500 animate-pulse"></div>
<span className="font-orbitron text-sm md:text-base uppercase tracking-[0.3em] text-white/90">LAB.01 // SYSTEM</span>
</div>
<p className="text-xs text-neutral-500 font-mono">Initialize sequence. Connect to central grid.</p>
</div>
<div className="flex flex-col md:flex-row items-start md:items-center gap-6">
<a className="text-xs font-orbitron uppercase tracking-[0.2em] text-neutral-500 hover:text-cyan-400 transition-colors" href="#">GitHub</a>
<a className="text-xs font-orbitron uppercase tracking-[0.2em] text-neutral-500 hover:text-cyan-400 transition-colors" href="#">Twitter</a>
<a className="text-xs font-orbitron uppercase tracking-[0.2em] text-neutral-500 hover:text-cyan-400 transition-colors" href="#">LinkedIn</a>
<a className="font-orbitron text-xs uppercase tracking-[0.2em] border border-cyan-500/30 text-cyan-400 bg-cyan-500/5 px-6 py-2.5 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300" href="mailto:hello@example.com">
            Transmit Signal
          </a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
<p className="text-xs font-mono text-neutral-600">© 2024 LAB.01 EXPERIMENTAL</p>
<p className="text-xs font-mono text-neutral-600">SYS_STATUS: <span className="text-cyan-500">NOMINAL</span></p>
</div>
</footer>
</main>




    </>
  );
}
