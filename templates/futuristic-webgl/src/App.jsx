import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{
  if(window.parent&&window.parent!==window){
    window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";
    window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000";
  }
}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        !function(){var u=window.UnicornStudio;if(u&&u.init){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){u.init()})}else{u.init()}}else{window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js",i.onload=function(){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){UnicornStudio.init()})}else{UnicornStudio.init()}},(document.head||document.body).appendChild(i)}}();
      


    (function () {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const progressBar = document.getElementById('scroll-progress');
      const reveals = document.querySelectorAll('[data-reveal]');
      const parallaxItems = document.querySelectorAll('.js-parallax');
      const magneticCards = document.querySelectorAll('[data-magnetic]');
      const sections = document.querySelectorAll('section');
      const supportsIO = 'IntersectionObserver' in window;

      if (reveals.length) {
        sections.forEach((section) => {
          let index = 0;
          section.querySelectorAll('[data-reveal]').forEach((node) => {
            node.style.setProperty('--reveal-delay', (index * 90) + 'ms');
            index += 1;
          });
        });

        if (supportsIO) {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('in-view');
                  observer.unobserve(entry.target);
                }
              });
            },
            { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
          );
          reveals.forEach((node) => observer.observe(node));
        } else {
          reveals.forEach((node) => node.classList.add('in-view'));
        }
      }

      if (!reduceMotion) {
        let ticking = false;
        const updateScrollFx = () => {
          const y = window.scrollY || 0;
          const doc = document.documentElement.scrollHeight - window.innerHeight;
          const p = doc > 0 ? Math.min(1, Math.max(0, y / doc)) : 0;
          if (progressBar) progressBar.style.transform = 'scaleX(' + p.toFixed(4) + ')';

          parallaxItems.forEach((item) => {
            const speed = Number(item.dataset.parallaxSpeed || 0);
            const offset = y * speed;
            item.style.transform = 'translate3d(0,' + offset.toFixed(2) + 'px,0)';
          });
          ticking = false;
        };

        const onScroll = () => {
          if (!ticking) {
            window.requestAnimationFrame(updateScrollFx);
            ticking = true;
          }
        };

        updateScrollFx();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        const finePointer = window.matchMedia('(pointer:fine)').matches;
        if (finePointer) {
          magneticCards.forEach((card) => {
            card.addEventListener('mousemove', (e) => {
              const rect = card.getBoundingClientRect();
              const mx = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
              const my = ((e.clientY - rect.top) / rect.height - 0.5) * 6;
              card.style.setProperty('--mx', mx.toFixed(2) + 'px');
              card.style.setProperty('--my', my.toFixed(2) + 'px');
            });
            card.addEventListener('mouseleave', () => {
              card.style.setProperty('--mx', '0px');
              card.style.setProperty('--my', '0px');
            });
          });
        }
      } else if (progressBar) {
        progressBar.style.display = 'none';
      }
    })();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed top-0 left-0 h-[2px] w-full z-[70] bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 pointer-events-none" id="scroll-progress"></div>

<div className="fixed inset-0 vertical-streaks pointer-events-none z-0"></div>
<div className="fixed inset-0 crt-scanlines pointer-events-none z-0 opacity-40"></div>
<div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/5 via-black/95 to-black z-0 pointer-events-none"></div>

<nav className="fixed top-0 left-0 z-50 w-full bg-black/80 backdrop-blur-xl border-b border-white/5">
<div className="md:px-10 lg:px-16 flex w-full h-20 md:h-24 px-6 items-center">
<div className="flex items-center gap-4">
<div className="w-2 h-2 bg-cyan-500 animate-pulse"></div>
<a className="font-orbitron text-xs md:text-sm uppercase tracking-[0.3em] text-white/90 hover:text-cyan-400 transition-colors" href="#home">LAB.01 // SYSTEM</a>
</div>
<div className="ml-auto flex items-center gap-6 md:gap-10">
<div className="hidden md:flex items-center gap-12">
<a className="text-xs font-orbitron uppercase tracking-[0.2em] text-neutral-500 hover:text-cyan-400 transition-colors" href="#experiments">Experiments</a>
<a className="text-xs font-orbitron uppercase tracking-[0.2em] text-neutral-500 hover:text-cyan-400 transition-colors" href="#system">System</a>
<a className="text-xs font-orbitron uppercase tracking-[0.2em] text-neutral-500 hover:text-cyan-400 transition-colors" href="#licensing">Licensing</a>
</div>
<a className="font-orbitron text-xs uppercase tracking-[0.2em] border border-cyan-500/30 text-cyan-400 bg-cyan-500/5 px-8 py-3 hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all duration-300 relative group overflow-hidden rounded-none" href="#contact">
<div className="absolute inset-0 w-full h-full bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
<span className="relative z-10">Init_Sequence</span>
</a>
</div>
</div>
</nav>

<main className="relative z-10 w-full">

<section className="relative w-full h-screen overflow-hidden flex items-center border-b border-white/5" data-parallax-root="" id="home">

<div className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen js-parallax" data-parallax-speed="-0.14" data-us-project="q0JSwb0l42Yf6m79xfW9" style={{width: '100%', height: '100%'}}></div>

<div className="absolute bottom-12 left-6 md:left-12 lg:left-16 z-20 pointer-events-none w-full max-w-4xl animate-hero-rise" data-sequence="">
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-orbitron tracking-[0.4em] text-cyan-500 uppercase">SYS.ONLINE</span>
<span className="w-12 h-[1px] bg-cyan-500/50"></span>
</div>
<h1 className="font-orbitron text-white uppercase leading-[1.1] tracking-tight text-4xl md:text-6xl lg:text-7xl drop-shadow-[0_0_30px_rgba(0,255,255,0.15)] kinetic-heading in-view">
          Real-Time Interfaces<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white/50">for the AI Era.</span>
</h1>
<p className="mt-8 text-sm md:text-base text-neutral-400 font-light tracking-wide max-w-xl border-l border-cyan-500/30 pl-4 py-1">
          Interactive experiments in WebGL, motion systems, and immersive UI. Bridging the gap between raw compute and human perception.
        </p>
<div className="mt-10 flex flex-col sm:flex-row items-start gap-4 pointer-events-auto">
<a className="group relative inline-flex items-center gap-3 border border-cyan-400 bg-cyan-400/10 text-cyan-400 font-orbitron font-medium text-xs uppercase tracking-[0.2em] px-8 py-4 transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] rounded-none" href="#contact">
<span>Enter the Lab</span>
<iconify-icon height="18" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50 group-hover:border-black/50"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50 group-hover:border-black/50"></div>
</a>
<a className="group relative inline-flex items-center gap-3 border border-white/10 bg-transparent text-white font-orbitron font-medium text-xs uppercase tracking-[0.2em] px-8 py-4 transition-all duration-300 hover:border-white/30 hover:bg-white/5 rounded-none" href="#experiments">
<span>View Experiments</span>
<iconify-icon height="18" icon="solar:code-scan-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-12 right-6 lg:right-16 z-30 flex flex-col items-end gap-2 text-right pointer-events-none reveal-on-scroll" data-reveal="">
<p className="font-orbitron text-xs tracking-[0.3em] text-neutral-600 uppercase">Core Technologies</p>
<div className="flex gap-4 text-xs font-mono text-cyan-500/70 mt-2">
<span>[ WEBGL ]</span>
<span>[ SHADERS ]</span>
<span>[ GLSL ]</span>
</div>
</div>
</section>

<section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 w-full border-b border-white/5 bg-black relative" id="experiments">
<div className="max-w-7xl mx-auto">
<div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8 reveal-on-scroll" data-reveal="">
<div>
<p className="font-orbitron text-xs uppercase tracking-[0.4em] text-cyan-500 mb-4 flex items-center gap-3">
<span className="w-8 h-[1px] bg-cyan-500"></span> 01 // Experiments
            </p>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white font-orbitron uppercase">Research &amp; Development</h2>
</div>
<p className="text-neutral-500 text-xs font-orbitron tracking-[0.2em] uppercase max-w-xs text-right">
            Live prototypes pushing browser capabilities.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-neutral-950 border border-white/10 hover:border-cyan-500/50 transition-colors duration-500 p-6 flex flex-col justify-between min-h-[320px] rounded-none overflow-hidden cursor-crosshair reveal-on-scroll magnetic-card" data-magnetic="" data-reveal="">
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
<div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden"><div className="h-full w-1/3 bg-cyan-400 animate-scan-line hidden group-hover:block"></div></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-12">
<div className="w-10 h-10 border border-white/10 bg-black flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-500 rounded-none">
<iconify-icon icon="solar:bacteria-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-orbitron tracking-[0.2em] text-neutral-600 border border-white/5 px-2 py-1 uppercase">Live Demo</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2 text-white font-orbitron uppercase group-hover:text-cyan-300 transition-colors">Neural Particle Field</h3>
<p className="text-xs text-neutral-500 font-light leading-relaxed">
                100,000 instanced geometries reacting to cursor velocity and audio input via custom fragment shaders.
              </p>
</div>
<div className="relative z-10 flex items-center gap-2 text-cyan-500 text-xs font-orbitron tracking-[0.2em] uppercase mt-8 opacity-50 group-hover:opacity-100 transition-opacity">
              Initialize <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>

<div className="group relative bg-neutral-950 border border-white/10 hover:border-cyan-500/50 transition-colors duration-500 p-6 flex flex-col justify-between min-h-[320px] rounded-none overflow-hidden cursor-crosshair reveal-on-scroll magnetic-card" data-magnetic="" data-reveal="">
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
<div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden"><div className="h-full w-1/3 bg-cyan-400 animate-scan-line hidden group-hover:block"></div></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-12">
<div className="w-10 h-10 border border-white/10 bg-black flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-500 rounded-none">
<iconify-icon icon="solar:gallery-favourite-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-orbitron tracking-[0.2em] text-neutral-600 border border-white/5 px-2 py-1 uppercase">Interactive</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2 text-white font-orbitron uppercase group-hover:text-cyan-300 transition-colors">Image Reveal Shader</h3>
<p className="text-xs text-neutral-500 font-light leading-relaxed">
                Liquid distortion effects applied to DOM images mapped onto WebGL planes with noise displacement.
              </p>
</div>
<div className="relative z-10 flex items-center gap-2 text-cyan-500 text-xs font-orbitron tracking-[0.2em] uppercase mt-8 opacity-50 group-hover:opacity-100 transition-opacity">
              Initialize <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>

<div className="group relative bg-neutral-950 border border-white/10 hover:border-cyan-500/50 transition-colors duration-500 p-6 flex flex-col justify-between min-h-[320px] rounded-none overflow-hidden cursor-crosshair reveal-on-scroll magnetic-card" data-magnetic="" data-reveal="">
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
<div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden"><div className="h-full w-1/3 bg-cyan-400 animate-scan-line hidden group-hover:block"></div></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-12">
<div className="w-10 h-10 border border-white/10 bg-black flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-500 rounded-none">
<iconify-icon icon="solar:mouse-circle-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-orbitron tracking-[0.2em] text-neutral-600 border border-white/5 px-2 py-1 uppercase">Motion</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2 text-white font-orbitron uppercase group-hover:text-cyan-300 transition-colors">Scroll Scan Engine</h3>
<p className="text-xs text-neutral-500 font-light leading-relaxed">
                Tying camera z-depth and post-processing bloom intensity directly to native browser scroll velocity.
              </p>
</div>
<div className="relative z-10 flex items-center gap-2 text-cyan-500 text-xs font-orbitron tracking-[0.2em] uppercase mt-8 opacity-50 group-hover:opacity-100 transition-opacity">
              Initialize <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 w-full border-b border-white/5 relative bg-neutral-950/30" id="system">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center relative z-10">
<div className="w-full lg:w-1/2 space-y-8">
<p className="font-orbitron text-xs uppercase tracking-[0.4em] text-cyan-500 flex items-center gap-3 reveal-on-scroll" data-reveal="">
<span className="w-8 h-[1px] bg-cyan-500"></span> 02 // Architecture
          </p>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white font-orbitron uppercase leading-[1.1] reveal-on-scroll" data-reveal="">
            Built With<br/>Performance in Mind.
          </h2>
<div className="space-y-6 text-sm text-neutral-400 font-light leading-relaxed border-l border-white/10 pl-6 reveal-on-scroll" data-reveal="">
<p>
              The era of static web pages is dead. Interfaces must now be fluid, responsive, and render complex data visualizations at 60fps across all devices.
            </p>
<p>
              By heavily relying on custom GLSL shaders, GPU instancing, and scroll-driven requestAnimationFrame loops, the system bypasses standard DOM bottlenecks to deliver uncompromising immersive experiences.
            </p>
<p>
              Every module is benchmarked in isolation first, then validated as part of a full interaction chain including input latency, memory churn, and compositing throughput.
            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 reveal-on-scroll" data-reveal="">
<div className="border border-white/10 bg-black/40 p-4">
<p className="text-[10px] font-orbitron uppercase tracking-[0.2em] text-neutral-500">Avg TTI</p>
<p className="mt-3 text-2xl font-orbitron text-cyan-400">1.7s</p>
</div>
<div className="border border-white/10 bg-black/40 p-4">
<p className="text-[10px] font-orbitron uppercase tracking-[0.2em] text-neutral-500">Frame Stability</p>
<p className="mt-3 text-2xl font-orbitron text-cyan-400">98.6%</p>
</div>
<div className="border border-white/10 bg-black/40 p-4">
<p className="text-[10px] font-orbitron uppercase tracking-[0.2em] text-neutral-500">Input Latency</p>
<p className="mt-3 text-2xl font-orbitron text-cyan-400">11ms</p>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 relative bg-black border border-white/10 p-8 md:p-12 reveal-on-scroll" data-reveal="">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent"></div>
<h3 className="text-xs font-orbitron tracking-[0.3em] uppercase text-neutral-500 mb-8 flex items-center justify-between">
<span>System Telemetry</span>
<span className="text-cyan-500 animate-pulse">LIVE</span>
</h3>
<div className="space-y-8">

<div>
<div className="flex justify-between text-xs font-orbitron text-cyan-400 mb-2 tracking-widest uppercase">
<span>Shader Compilation</span>
<span>1.2ms</span>
</div>
<div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-cyan-400 w-[92%] shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs font-orbitron text-cyan-400 mb-2 tracking-widest uppercase">
<span>GPU Acceleration</span>
<span>Active / 100%</span>
</div>
<div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-cyan-500 w-full shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs font-orbitron text-cyan-400 mb-2 tracking-widest uppercase">
<span>Frame Rate Target</span>
<span>60 FPS</span>
</div>
<div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-cyan-300 w-[98%] shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
</div>
</div>
</div>
<div className="mt-10 border-t border-white/10 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
<div className="border border-white/10 p-4 bg-neutral-950/40">
<p className="font-orbitron uppercase tracking-[0.2em] text-neutral-500">Pipeline</p>
<p className="mt-2 text-neutral-300">Input Sampling → GPU Queue → Shader Passes → Output Composite</p>
</div>
<div className="border border-white/10 p-4 bg-neutral-950/40">
<p className="font-orbitron uppercase tracking-[0.2em] text-neutral-500">Failover</p>
<p className="mt-2 text-neutral-300">Automatic reduction to medium-density meshes under thermal throttling.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 w-full border-b border-white/5 bg-black" id="use-cases">
<div className="max-w-7xl mx-auto">
<div className="mb-20 flex flex-col lg:flex-row justify-between items-end gap-6 reveal-on-scroll" data-reveal="">
<div>
<p className="font-orbitron text-xs uppercase tracking-[0.4em] text-cyan-500 mb-4 flex items-center gap-3">
<span className="w-8 h-[1px] bg-cyan-500"></span> 03 // Applied Environments
            </p>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white font-orbitron uppercase">
              Commercial Deployment
            </h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">

<div className="bg-black p-10 lg:p-14 group hover:bg-neutral-950 transition-colors relative overflow-hidden reveal-on-scroll magnetic-card" data-magnetic="" data-reveal="">
<div className="absolute top-0 left-0 w-[2px] h-0 bg-cyan-500 group-hover:h-full transition-all duration-500 ease-out"></div>
<iconify-icon className="text-cyan-500 mb-6" icon="solar:cpu-bolt-linear" width="32"></iconify-icon>
<h3 className="text-xl font-orbitron tracking-tight text-white uppercase mb-3">AI SaaS Landing Pages</h3>
<p className="text-xs text-neutral-500 font-light leading-relaxed">
              Visualize abstract machine learning processes with dynamic particle networks that react to scroll and communicate high-tech competency instantly.
            </p>
</div>

<div className="bg-black p-10 lg:p-14 group hover:bg-neutral-950 transition-colors relative overflow-hidden reveal-on-scroll magnetic-card" data-magnetic="" data-reveal="">
<div className="absolute top-0 left-0 w-[2px] h-0 bg-cyan-500 group-hover:h-full transition-all duration-500 ease-out"></div>
<iconify-icon className="text-cyan-500 mb-6" icon="solar:chart-square-linear" width="32"></iconify-icon>
<h3 className="text-xl font-orbitron tracking-tight text-white uppercase mb-3">Fintech Interfaces</h3>
<p className="text-xs text-neutral-500 font-light leading-relaxed">
              High-density, real-time data visualization utilizing WebGL to render thousands of transactional nodes without freezing the DOM.
            </p>
</div>

<div className="bg-black p-10 lg:p-14 group hover:bg-neutral-950 transition-colors relative overflow-hidden reveal-on-scroll magnetic-card" data-magnetic="" data-reveal="">
<div className="absolute top-0 left-0 w-[2px] h-0 bg-cyan-500 group-hover:h-full transition-all duration-500 ease-out"></div>
<iconify-icon className="text-cyan-500 mb-6" icon="solar:video-frame-cut-linear" width="32"></iconify-icon>
<h3 className="text-xl font-orbitron tracking-tight text-white uppercase mb-3">Interactive Storytelling</h3>
<p className="text-xs text-neutral-500 font-light leading-relaxed">
              Scroll-reactive scenes and smooth transition states for launch campaigns, product reveals, and immersive editorial experiences.
            </p>
</div>

<div className="bg-black p-10 lg:p-14 group hover:bg-neutral-950 transition-colors relative overflow-hidden reveal-on-scroll magnetic-card" data-magnetic="" data-reveal="">
<div className="absolute top-0 left-0 w-[2px] h-0 bg-cyan-500 group-hover:h-full transition-all duration-500 ease-out"></div>
<iconify-icon className="text-cyan-500 mb-6" icon="solar:monitor-smartphone-linear" width="32"></iconify-icon>
<h3 className="text-xl font-orbitron tracking-tight text-white uppercase mb-3">Product Dashboards</h3>
<p className="text-xs text-neutral-500 font-light leading-relaxed">
              Unified desktop/mobile canvas rendering with adaptive quality layers and deterministic interactions under heavy data loads.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 w-full border-b border-white/5 bg-neutral-950/30" id="demo-reel">
<div className="max-w-7xl mx-auto">
<div className="mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
<div>
<p className="font-orbitron text-xs uppercase tracking-[0.4em] text-cyan-500 mb-4 flex items-center gap-3">
<span className="w-8 h-[1px] bg-cyan-500"></span> 04 // Demo Reel
            </p>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white font-orbitron uppercase">
              Cinematic Interaction Preview
            </h2>
</div>
<p className="text-xs text-neutral-500 font-orbitron tracking-[0.2em] uppercase max-w-sm">
            A curated sequence of real-time interaction scenes and motion systems.
          </p>
</div>
<div className="border border-white/10 bg-black p-4 md:p-6">
<div className="aspect-video border border-white/10 bg-gradient-to-br from-cyan-500/10 via-black to-black relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 border border-cyan-400/60 bg-cyan-400/10 flex items-center justify-center">
<iconify-icon className="text-cyan-400" icon="solar:play-circle-linear" width="40"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] font-orbitron uppercase tracking-[0.2em] text-neutral-300">
<span>Sequence: LAB_REEL_V03</span>
<span>00:42</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
<div className="border border-white/10 p-4 bg-neutral-950/40">
<p className="text-[10px] text-neutral-500 font-orbitron uppercase tracking-[0.2em]">Scenes</p>
<p className="text-2xl mt-2 text-cyan-400 font-orbitron">12</p>
</div>
<div className="border border-white/10 p-4 bg-neutral-950/40">
<p className="text-[10px] text-neutral-500 font-orbitron uppercase tracking-[0.2em]">Avg FPS</p>
<p className="text-2xl mt-2 text-cyan-400 font-orbitron">60</p>
</div>
<div className="border border-white/10 p-4 bg-neutral-950/40">
<p className="text-[10px] text-neutral-500 font-orbitron uppercase tracking-[0.2em]">Devices</p>
<p className="text-2xl mt-2 text-cyan-400 font-orbitron">Desktop + Mobile</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 w-full border-b border-white/5 bg-black" id="sandbox">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
<div>
<p className="font-orbitron text-xs uppercase tracking-[0.4em] text-cyan-500 mb-4 flex items-center gap-3">
<span className="w-8 h-[1px] bg-cyan-500"></span> 05 // Live Sandbox
          </p>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white font-orbitron uppercase">
            Tweak Parameters in Real Time
          </h2>
<p className="text-sm text-neutral-400 mt-6 leading-relaxed">
            Expose shader uniforms and motion constants to quickly test aesthetic directions, performance thresholds, and interaction sensitivity.
          </p>
</div>
<div className="border border-white/10 bg-neutral-950/60 p-6 space-y-5">
<div>
<div className="flex justify-between text-xs font-orbitron uppercase tracking-[0.2em] text-neutral-400 mb-2"><span>Particle Count</span><span>100000</span></div>
<div className="h-[2px] bg-white/10"><div className="h-full w-[85%] bg-cyan-400"></div></div>
</div>
<div>
<div className="flex justify-between text-xs font-orbitron uppercase tracking-[0.2em] text-neutral-400 mb-2"><span>Bloom Intensity</span><span>0.72</span></div>
<div className="h-[2px] bg-white/10"><div className="h-full w-[72%] bg-cyan-400"></div></div>
</div>
<div>
<div className="flex justify-between text-xs font-orbitron uppercase tracking-[0.2em] text-neutral-400 mb-2"><span>Noise Scale</span><span>0.38</span></div>
<div className="h-[2px] bg-white/10"><div className="h-full w-[38%] bg-cyan-400"></div></div>
</div>
<div>
<div className="flex justify-between text-xs font-orbitron uppercase tracking-[0.2em] text-neutral-400 mb-2"><span>Motion Damping</span><span>0.18</span></div>
<div className="h-[2px] bg-white/10"><div className="h-full w-[18%] bg-cyan-400"></div></div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 w-full border-b border-white/5 bg-neutral-950/30" id="case-studies">
<div className="max-w-7xl mx-auto">
<p className="font-orbitron text-xs uppercase tracking-[0.4em] text-cyan-500 mb-4 flex items-center gap-3">
<span className="w-8 h-[1px] bg-cyan-500"></span> 06 // Case Studies
        </p>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white font-orbitron uppercase mb-12">
          Outcome-Driven Deployments
        </h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="border border-white/10 bg-black p-6">
<p className="text-xs text-cyan-400 font-orbitron uppercase tracking-[0.2em] mb-3">AI Platform Launch</p>
<p className="text-sm text-neutral-400 leading-relaxed mb-4">Designed cinematic scroll-driven interface for ML explainability.</p>
<p className="text-xs text-neutral-500 uppercase tracking-[0.2em]">Results: +37% time-on-page, +21% demo requests</p>
</div>
<div className="border border-white/10 bg-black p-6">
<p className="text-xs text-cyan-400 font-orbitron uppercase tracking-[0.2em] mb-3">Fintech Analytics Suite</p>
<p className="text-sm text-neutral-400 leading-relaxed mb-4">Migrated heavy SVG charts to GPU-accelerated rendering pipeline.</p>
<p className="text-xs text-neutral-500 uppercase tracking-[0.2em]">Results: 2.1x render speed, stable 60fps on modern mobile</p>
</div>
<div className="border border-white/10 bg-black p-6">
<p className="text-xs text-cyan-400 font-orbitron uppercase tracking-[0.2em] mb-3">Product Story Experience</p>
<p className="text-sm text-neutral-400 leading-relaxed mb-4">Built chapter-based motion narrative with progressive interactions.</p>
<p className="text-xs text-neutral-500 uppercase tracking-[0.2em]">Results: +44% session depth, -29% bounce rate</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 w-full border-b border-white/5 bg-black" id="performance-proof">
<div className="max-w-7xl mx-auto">
<p className="font-orbitron text-xs uppercase tracking-[0.4em] text-cyan-500 mb-4 flex items-center gap-3">
<span className="w-8 h-[1px] bg-cyan-500"></span> 07 // Performance Proof
        </p>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white font-orbitron uppercase mb-10">
          Measured, Not Assumed
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="border border-white/10 p-5 bg-neutral-950/40"><p className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-orbitron">Frame Time</p><p className="text-2xl mt-2 text-cyan-400 font-orbitron">16.2ms</p></div>
<div className="border border-white/10 p-5 bg-neutral-950/40"><p className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-orbitron">LCP</p><p className="text-2xl mt-2 text-cyan-400 font-orbitron">1.9s</p></div>
<div className="border border-white/10 p-5 bg-neutral-950/40"><p className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-orbitron">CLS</p><p className="text-2xl mt-2 text-cyan-400 font-orbitron">0.01</p></div>
<div className="border border-white/10 p-5 bg-neutral-950/40"><p className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-orbitron">INP</p><p className="text-2xl mt-2 text-cyan-400 font-orbitron">98ms</p></div>
</div>
</div>
</section>

<section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 w-full border-b border-white/5 bg-neutral-950/30" id="process">
<div className="max-w-7xl mx-auto">
<p className="font-orbitron text-xs uppercase tracking-[0.4em] text-cyan-500 mb-4 flex items-center gap-3">
<span className="w-8 h-[1px] bg-cyan-500"></span> 08 // Process Timeline
        </p>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white font-orbitron uppercase mb-12">
          From Concept to Production
        </h2>
<div className="grid grid-cols-1 md:grid-cols-5 gap-4">
<div className="border border-white/10 p-5 bg-black"><p className="text-cyan-400 text-xs font-orbitron uppercase tracking-[0.2em]">01</p><p className="text-sm text-white mt-3">Discovery</p></div>
<div className="border border-white/10 p-5 bg-black"><p className="text-cyan-400 text-xs font-orbitron uppercase tracking-[0.2em]">02</p><p className="text-sm text-white mt-3">Visual R&amp;D</p></div>
<div className="border border-white/10 p-5 bg-black"><p className="text-cyan-400 text-xs font-orbitron uppercase tracking-[0.2em]">03</p><p className="text-sm text-white mt-3">Shader Prototyping</p></div>
<div className="border border-white/10 p-5 bg-black"><p className="text-cyan-400 text-xs font-orbitron uppercase tracking-[0.2em]">04</p><p className="text-sm text-white mt-3">Optimization</p></div>
<div className="border border-white/10 p-5 bg-black"><p className="text-cyan-400 text-xs font-orbitron uppercase tracking-[0.2em]">05</p><p className="text-sm text-white mt-3">Production Handoff</p></div>
</div>
</div>
</section>

<section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 w-full border-b border-white/5 bg-black" id="stack">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="border border-white/10 p-8 bg-neutral-950/40">
<p className="font-orbitron text-xs uppercase tracking-[0.4em] text-cyan-500 mb-6">09 // Technology Stack</p>
<div className="grid grid-cols-2 gap-3 text-xs">
<span className="border border-white/10 px-3 py-2 text-neutral-300">WebGL</span>
<span className="border border-white/10 px-3 py-2 text-neutral-300">GLSL</span>
<span className="border border-white/10 px-3 py-2 text-neutral-300">Three.js</span>
<span className="border border-white/10 px-3 py-2 text-neutral-300">Custom RAF Loops</span>
<span className="border border-white/10 px-3 py-2 text-neutral-300">Tailwind UI Layer</span>
<span className="border border-white/10 px-3 py-2 text-neutral-300">Telemetry Hooks</span>
</div>
</div>
<div className="border border-white/10 p-8 bg-neutral-950/40">
<p className="font-orbitron text-xs uppercase tracking-[0.4em] text-cyan-500 mb-6">10 // Delivery Pipeline</p>
<p className="text-sm text-neutral-400 leading-relaxed">
            Design Spec → Motion Board → Interactive Prototype → GPU Budgeting → QA Benchmarks → Staging → Production Release.
          </p>
<div className="mt-6 h-[2px] bg-white/10"><div className="h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500"></div></div>
</div>
</div>
</section>

<section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 w-full border-b border-white/5 bg-neutral-950/30" id="trust">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
<div>
<p className="font-orbitron text-xs uppercase tracking-[0.4em] text-cyan-500 mb-4">11 // Trust Signals</p>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white font-orbitron uppercase mb-8">Teams We Work With</h2>
<div className="grid grid-cols-2 gap-3 text-xs">
<div className="border border-white/10 px-4 py-3 text-neutral-400">[ AETHER AI ]</div>
<div className="border border-white/10 px-4 py-3 text-neutral-400">[ NOVA FINTECH ]</div>
<div className="border border-white/10 px-4 py-3 text-neutral-400">[ GRID ANALYTICS ]</div>
<div className="border border-white/10 px-4 py-3 text-neutral-400">[ ORBIT SYSTEMS ]</div>
</div>
</div>
<div className="border border-white/10 bg-black p-6" id="faq">
<p className="font-orbitron text-xs uppercase tracking-[0.4em] text-cyan-500 mb-6">12 // FAQ</p>
<div className="space-y-5 text-sm">
<div>
<p className="text-white font-medium">Timeline?</p>
<p className="text-neutral-500 mt-1">Typical production timeline is 3-8 weeks depending on scope and scene complexity.</p>
</div>
<div>
<p className="text-white font-medium">Mobile support?</p>
<p className="text-neutral-500 mt-1">Yes, with adaptive quality presets, thermal fallback, and reduced post-processing layers.</p>
</div>
<div>
<p className="text-white font-medium">Maintenance model?</p>
<p className="text-neutral-500 mt-1">Optional monthly optimization and telemetry review for long-term performance stability.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 w-full border-b border-white/5 bg-neutral-950/30 relative" id="evaluations">
<div className="max-w-7xl mx-auto">
<div className="mb-20 reveal-on-scroll" data-reveal="">
<p className="font-orbitron text-xs uppercase tracking-[0.4em] text-cyan-500 mb-4 flex items-center gap-3">
<span className="w-8 h-[1px] bg-cyan-500"></span> 04 // Field Reports
          </p>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white font-orbitron uppercase">
            Subject Evaluations
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-black border border-white/10 p-8 relative group hover:border-cyan-500/30 transition-colors duration-500 reveal-on-scroll" data-reveal="">
<iconify-icon className="text-white/10 absolute top-6 right-6" icon="solar:quote-left-linear" width="24"></iconify-icon>
<p className="text-sm text-neutral-400 font-light leading-relaxed mb-8 relative z-10">
              "The integration of custom shader logic directly reduced our main-thread workload by 40%. The UI feels physically connected to the user's input devices in ways standard DOM manipulation simply cannot achieve."
            </p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
<div className="w-10 h-10 border border-white/10 bg-neutral-900 flex items-center justify-center">
<iconify-icon className="text-cyan-500/50" icon="solar:user-circle-linear" width="20"></iconify-icon>
</div>
<div>
<p className="font-orbitron text-xs tracking-[0.1em] text-white uppercase">Subject.092</p>
<p className="text-xs text-cyan-500 tracking-[0.2em] font-orbitron uppercase mt-1">Lead Architect</p>
</div>
</div>
</div>

<div className="bg-black border border-white/10 p-8 relative group hover:border-cyan-500/30 transition-colors duration-500 reveal-on-scroll" data-reveal="">
<iconify-icon className="text-white/10 absolute top-6 right-6" icon="solar:quote-left-linear" width="24"></iconify-icon>
<p className="text-sm text-neutral-400 font-light leading-relaxed mb-8 relative z-10">
              "Deploying the particle field system for our ML dashboard completely shifted our brand perception. Clients now immediately associate our platform with deep-tech capabilities before even seeing the core product."
            </p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
<div className="w-10 h-10 border border-cyan-500/30 bg-cyan-500/5 flex items-center justify-center">
<iconify-icon className="text-cyan-400" icon="solar:user-id-linear" width="20"></iconify-icon>
</div>
<div>
<p className="font-orbitron text-xs tracking-[0.1em] text-white uppercase">Subject.144</p>
<p className="text-xs text-cyan-500 tracking-[0.2em] font-orbitron uppercase mt-1">VP Engineering</p>
</div>
</div>
</div>

<div className="bg-black border border-white/10 p-8 relative group hover:border-cyan-500/30 transition-colors duration-500 reveal-on-scroll" data-reveal="">
<iconify-icon className="text-white/10 absolute top-6 right-6" icon="solar:quote-left-linear" width="24"></iconify-icon>
<p className="text-sm text-neutral-400 font-light leading-relaxed mb-8 relative z-10">
              "We required a high-density data visualizer that didn't compromise framerate. The LAB.01 WebGL pipeline handled 50,000 concurrent nodes without breaking 60fps on mobile environments. Unprecedented."
            </p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
<div className="w-10 h-10 border border-white/10 bg-neutral-900 flex items-center justify-center">
<iconify-icon className="text-cyan-500/50" icon="solar:user-speak-linear" width="20"></iconify-icon>
</div>
<div>
<p className="font-orbitron text-xs tracking-[0.1em] text-white uppercase">Subject.045</p>
<p className="text-xs text-cyan-500 tracking-[0.2em] font-orbitron uppercase mt-1">Data Scientist</p>
</div>
</div>
</div>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 reveal-on-scroll" data-reveal="">
<div className="border border-white/10 bg-black p-6">
<p className="font-orbitron text-[10px] uppercase tracking-[0.2em] text-neutral-500">Deployment Success</p>
<p className="mt-3 text-3xl font-orbitron text-cyan-400">93%</p>
<p className="mt-2 text-xs text-neutral-500">First release pass without major visual regressions.</p>
</div>
<div className="border border-white/10 bg-black p-6">
<p className="font-orbitron text-[10px] uppercase tracking-[0.2em] text-neutral-500">Perceived Speed Gain</p>
<p className="mt-3 text-3xl font-orbitron text-cyan-400">1.8x</p>
<p className="mt-2 text-xs text-neutral-500">User feedback score compared to prior static interfaces.</p>
</div>
<div className="border border-white/10 bg-black p-6">
<p className="font-orbitron text-[10px] uppercase tracking-[0.2em] text-neutral-500">Avg Session Depth</p>
<p className="mt-3 text-3xl font-orbitron text-cyan-400">4.2m</p>
<p className="mt-2 text-xs text-neutral-500">Time spent interacting with data-driven experiences.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 w-full border-b border-white/5 bg-black relative" id="licensing">
<div className="max-w-7xl mx-auto">
<div className="mb-20 flex flex-col items-center text-center reveal-on-scroll" data-reveal="">
<p className="font-orbitron text-xs uppercase tracking-[0.4em] text-cyan-500 mb-4 flex items-center justify-center gap-3">
             05 // Resource Allocation
          </p>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white font-orbitron uppercase">
            System Licensing
          </h2>
<p className="mt-6 text-sm text-neutral-400 font-light tracking-wide max-w-xl">
            Acquire dedicated computing instances and source code access to integrate our WebGL interfaces directly into your ecosystem.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end">

<div className="border border-white/10 bg-neutral-950/50 p-8 flex flex-col h-full hover:border-white/30 transition-colors reveal-on-scroll" data-reveal="">
<div className="mb-8">
<h3 className="text-xs font-orbitron tracking-[0.3em] uppercase text-neutral-500 mb-4">Development</h3>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-3xl font-orbitron font-medium text-white">$49</span>
<span className="text-xs text-neutral-500 tracking-widest uppercase">/ Month</span>
</div>
<p className="text-xs text-neutral-400 font-light">Access to basic shaders and prototype environments.</p>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-xs text-neutral-300">
<iconify-icon className="text-white/30 shrink-0 mt-0.5" icon="solar:check-square-linear" width="16"></iconify-icon>
<span>Pre-compiled WebGL components</span>
</li>
<li className="flex items-start gap-3 text-xs text-neutral-300">
<iconify-icon className="text-white/30 shrink-0 mt-0.5" icon="solar:check-square-linear" width="16"></iconify-icon>
<span>Standard DOM interactions</span>
</li>
<li className="flex items-start gap-3 text-xs text-neutral-300">
<iconify-icon className="text-white/30 shrink-0 mt-0.5" icon="solar:check-square-linear" width="16"></iconify-icon>
<span>Community telemetry support</span>
</li>
</ul>
<a className="w-full text-center border border-white/10 bg-white/5 hover:bg-white/10 text-white font-orbitron text-xs uppercase tracking-[0.2em] py-4 transition-colors" href="#">
              Init Process
            </a>
</div>

<div className="border border-cyan-500/50 bg-black p-8 flex flex-col h-full relative shadow-[0_0_30px_rgba(0,255,255,0.05)] lg:-translate-y-4 reveal-on-scroll" data-reveal="">
<div className="absolute top-0 left-0 w-full h-1 bg-cyan-500"></div>
<div className="absolute -top-3 right-6 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-orbitron uppercase tracking-[0.2em] px-3 py-1 backdrop-blur-md">
              Recommended
            </div>
<div className="mb-8 mt-2">
<h3 className="text-xs font-orbitron tracking-[0.3em] uppercase text-cyan-400 mb-4">Production</h3>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-4xl font-orbitron font-medium text-white">$149</span>
<span className="text-xs text-neutral-500 tracking-widest uppercase">/ Month</span>
</div>
<p className="text-xs text-neutral-400 font-light">Full raw shader source code and physics motion systems.</p>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-xs text-neutral-300">
<iconify-icon className="text-cyan-500 shrink-0 mt-0.5" icon="solar:check-square-linear" width="16"></iconify-icon>
<span>Everything in Development</span>
</li>
<li className="flex items-start gap-3 text-xs text-neutral-300">
<iconify-icon className="text-cyan-500 shrink-0 mt-0.5" icon="solar:check-square-linear" width="16"></iconify-icon>
<span>Raw GLSL Shader Code Access</span>
</li>
<li className="flex items-start gap-3 text-xs text-neutral-300">
<iconify-icon className="text-cyan-500 shrink-0 mt-0.5" icon="solar:check-square-linear" width="16"></iconify-icon>
<span>Custom particle instancing limits</span>
</li>
<li className="flex items-start gap-3 text-xs text-neutral-300">
<iconify-icon className="text-cyan-500 shrink-0 mt-0.5" icon="solar:check-square-linear" width="16"></iconify-icon>
<span>Priority infrastructure support</span>
</li>
</ul>
<a className="w-full text-center border border-cyan-500 bg-cyan-500/10 hover:bg-cyan-500 hover:text-black text-cyan-400 font-orbitron text-xs uppercase tracking-[0.2em] py-4 transition-all duration-300 group" href="#">
<span className="relative z-10 flex justify-center items-center gap-2">Allocate Resources <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear"></iconify-icon></span>
</a>
</div>

<div className="border border-white/10 bg-neutral-950/50 p-8 flex flex-col h-full hover:border-white/30 transition-colors reveal-on-scroll" data-reveal="">
<div className="mb-8">
<h3 className="text-xs font-orbitron tracking-[0.3em] uppercase text-neutral-500 mb-4">Enterprise</h3>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-3xl font-orbitron font-medium text-white">Custom</span>
</div>
<p className="text-xs text-neutral-400 font-light">Bespoke WebGL pipelines mapped to your precise architecture.</p>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-xs text-neutral-300">
<iconify-icon className="text-white/30 shrink-0 mt-0.5" icon="solar:check-square-linear" width="16"></iconify-icon>
<span>Dedicated hardware mapping</span>
</li>
<li className="flex items-start gap-3 text-xs text-neutral-300">
<iconify-icon className="text-white/30 shrink-0 mt-0.5" icon="solar:check-square-linear" width="16"></iconify-icon>
<span>Custom post-processing chains</span>
</li>
<li className="flex items-start gap-3 text-xs text-neutral-300">
<iconify-icon className="text-white/30 shrink-0 mt-0.5" icon="solar:check-square-linear" width="16"></iconify-icon>
<span>On-site engineering deployment</span>
</li>
</ul>
<a className="w-full text-center border border-white/10 bg-transparent hover:bg-white/5 text-white font-orbitron text-xs uppercase tracking-[0.2em] py-4 transition-colors" href="#">
              Request Uplink
            </a>
</div>
</div>
<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 reveal-on-scroll" data-reveal="">
<div className="border border-white/10 bg-neutral-950/40 p-6">
<p className="font-orbitron text-xs uppercase tracking-[0.2em] text-neutral-400">Onboarding</p>
<p className="mt-3 text-xs text-neutral-500 leading-relaxed">Kickoff workshop, architecture audit, and staging deployment blueprint included in every paid tier.</p>
</div>
<div className="border border-white/10 bg-neutral-950/40 p-6">
<p className="font-orbitron text-xs uppercase tracking-[0.2em] text-neutral-400">Security</p>
<p className="mt-3 text-xs text-neutral-500 leading-relaxed">Source distribution with scoped access, signed artifacts, and environment-specific configuration controls.</p>
</div>
<div className="border border-white/10 bg-neutral-950/40 p-6">
<p className="font-orbitron text-xs uppercase tracking-[0.2em] text-neutral-400">Support SLA</p>
<p className="mt-3 text-xs text-neutral-500 leading-relaxed">Response windows from 48h (Development) to 4h (Enterprise Mission-Critical contracts).</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 lg:px-24 w-full bg-black relative overflow-hidden border-b border-white/5" id="contact">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3N2Zz4=')] opacity-30 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center reveal-on-scroll" data-reveal="">
<p className="font-orbitron text-xs uppercase tracking-[0.5em] text-cyan-500 mb-8 border border-cyan-500/20 px-4 py-1 bg-cyan-500/5">06 // Terminate Session</p>
<h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white font-orbitron uppercase mb-6">
          Initialize <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white/30">Sequence.</span>
</h2>
<p className="text-sm text-neutral-500 font-mono tracking-widest mb-12 max-w-md">
          &gt; Enter the laboratory and explore the next generation of digital interfaces.
        </p>
<a className="group relative inline-flex items-center justify-center gap-3 bg-white text-black font-orbitron font-medium text-sm uppercase tracking-[0.2em] px-12 py-5 transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] rounded-none overflow-hidden" href="mailto:sys@lab01.com">
<span className="relative z-10 flex items-center gap-2">System.init() <iconify-icon icon="solar:terminal-linear" width="20"></iconify-icon></span>
<div className="absolute inset-0 border border-black group-hover:scale-95 transition-transform"></div>
</a>
</div>
</section>

<footer className="bg-black pt-20 pb-10 px-6 md:px-12 lg:px-24 relative overflow-hidden w-full">

<div className="absolute inset-0 crt-scanlines pointer-events-none opacity-20"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

<div className="lg:col-span-4 flex flex-col items-start">
<div className="flex items-center gap-4 mb-6">
<div className="w-2 h-2 bg-cyan-500 animate-pulse"></div>
<span className="font-orbitron text-sm uppercase tracking-[0.3em] text-white">LAB.01 // SYSTEM</span>
</div>
<p className="text-xs text-neutral-500 font-light leading-relaxed mb-8 max-w-xs">
              Experimental WebGL architecture and high-performance interactive interfaces designed for the modern web frontier.
            </p>
<div className="border border-white/10 flex items-center gap-3 px-4 py-2 bg-white/5 w-fit">
<span className="w-1.5 h-1.5 rounded-none bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
<span className="font-mono text-xs uppercase tracking-widest text-neutral-400">Mainframe Optimal</span>
</div>
</div>

<div className="lg:col-span-2 lg:col-start-7">
<h4 className="font-orbitron text-xs uppercase tracking-[0.2em] text-white mb-6">Infrastructure</h4>
<ul className="space-y-4">
<li><a className="text-xs text-neutral-500 hover:text-cyan-400 transition-colors tracking-wide" href="#">WebGL Core</a></li>
<li><a className="text-xs text-neutral-500 hover:text-cyan-400 transition-colors tracking-wide" href="#">Shader Engine</a></li>
<li><a className="text-xs text-neutral-500 hover:text-cyan-400 transition-colors tracking-wide" href="#">Motion Systems</a></li>
<li><a className="text-xs text-neutral-500 hover:text-cyan-400 transition-colors tracking-wide" href="#">Architecture Map</a></li>
</ul>
</div>

<div className="lg:col-span-2">
<h4 className="font-orbitron text-xs uppercase tracking-[0.2em] text-white mb-6">Resources</h4>
<ul className="space-y-4">
<li><a className="text-xs text-neutral-500 hover:text-cyan-400 transition-colors tracking-wide" href="#">Documentation</a></li>
<li><a className="text-xs text-neutral-500 hover:text-cyan-400 transition-colors tracking-wide" href="#">Experiments Logs</a></li>
<li><a className="text-xs text-neutral-500 hover:text-cyan-400 transition-colors tracking-wide" href="#">Live Telemetry</a></li>
<li><a className="text-xs text-neutral-500 hover:text-cyan-400 transition-colors tracking-wide" href="#">GitHub Repo</a></li>
</ul>
</div>

<div className="lg:col-span-2">
<h4 className="font-orbitron text-xs uppercase tracking-[0.2em] text-white mb-6">Legal / Access</h4>
<ul className="space-y-4">
<li><a className="text-xs text-neutral-500 hover:text-cyan-400 transition-colors tracking-wide" href="#">Privacy Protocol</a></li>
<li><a className="text-xs text-neutral-500 hover:text-cyan-400 transition-colors tracking-wide" href="#">Terms of Service</a></li>
<li><a className="text-xs text-neutral-500 hover:text-cyan-400 transition-colors tracking-wide" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
<p className="text-xs font-orbitron uppercase tracking-[0.2em] text-neutral-600">
            © 2024 LAB.01 Research Facility. All sequences verified.
          </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 border border-white/5 flex items-center justify-center text-neutral-500 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300" href="#">
<iconify-icon icon="solar:code-square-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 border border-white/5 flex items-center justify-center text-neutral-500 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300" href="#">
<iconify-icon icon="solar:cpu-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 border border-white/5 flex items-center justify-center text-neutral-500 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300" href="#">
<iconify-icon icon="solar:link-square-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>
</main>

<div className="fixed bottom-8 right-8 z-50 flex-col items-end gap-1 text-cyan-400 hidden md:flex border border-white/10 bg-black/80 backdrop-blur-md p-4 rounded-none shadow-[0_0_20px_rgba(0,0,0,0.8)]">
<div className="flex items-center gap-3 border-b border-white/10 pb-2 mb-2 w-full justify-between">
<span className="font-orbitron text-xs tracking-[0.3em] uppercase text-white/50">Terminal</span>
<iconify-icon icon="solar:minus-square-linear" width="14"></iconify-icon>
</div>
<div className="flex flex-col items-end gap-1">
<div className="flex items-center gap-2">
<span className="animate-pulse w-1.5 h-1.5 bg-cyan-400"></span>
<span className="font-mono text-xs tracking-widest uppercase">System._Idle</span>
</div>
<span className="font-mono text-xs opacity-50 tracking-widest text-white/30">V.2.0.4.Beta</span>
</div>
</div>


    </>
  );
}
