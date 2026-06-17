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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            // 1. Parallax Background
            gsap.to("#parallax-bg", {
                y: "20vh",
                ease: "none",
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            // 2. Masked Staggered Word Reveal - Hero (Plays once on load)
            gsap.to(".hero-word", {
                y: "0%",
                duration: 0.9,
                stagger: 0.15,
                ease: "power4.out",
                repeat: 1, 
                delay: 0.2
            });

            // 3. Masked Staggered Word Reveal - Features (Plays once on scroll)
            const featureHeadings = document.querySelectorAll('.feature-heading');
            featureHeadings.forEach(heading => {
                gsap.to(heading.querySelectorAll('.feat-word'), {
                    scrollTrigger: {
                        trigger: heading,
                        start: "top 80%",
                    },
                    y: "0%",
                    duration: 0.9,
                    stagger: 0.15,
                    ease: "power4.out",
                    repeat: 1 
                });
            });

            // 4. Fade up UI Mockup
            gsap.from(".eq-ui", {
                y: 60,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.5
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bmaMERjX2VZDtPrh4Zwx"></div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none" id="parallax-bg" style={{backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(132, 204, 22, 0.08) 0%, rgba(23, 23, 23, 0) 70%)', height: '130vh', top: '-15vh'}}></div>
<div className="fixed inset-0 z-0 opacity-[0.02] pointer-events-none" style={{backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '2rem 2rem'}}></div>

<nav className="fixed top-0 w-full z-50 px-6 py-4 flex items-center justify-between border-b border-neutral-800/50 bg-neutral-900/60 backdrop-blur-md">
<div className="flex items-center gap-2">
<iconify-icon className="text-lime-500 text-2xl" icon="solar:radar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base tracking-tighter text-white font-semibold" style={{fontFamily: '\'Manrope\', sans-serif'}}>SONAR</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#presets">Pro Presets</a>
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#book">Book Call</a>
</div>
<a className="px-5 py-2 text-xs font-medium bg-white text-neutral-950 rounded-full hover:bg-neutral-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="#book">
            Book Remote Setup
        </a>
</nav>
<main className="relative z-10">

<section className="min-h-screen flex flex-col items-center justify-center pt-24 px-4 text-center relative">

<div className="mb-8 px-4 py-1.5 rounded-full border border-lime-500/30 bg-lime-500/10 text-lime-400 text-xs font-medium flex items-center gap-2 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-lime-500 shadow-[0_0_8px_rgba(132,204,22,0.8)]"></span>
                100% Secure Remote AnyDesk Setup
            </div>

<h1 className="text-6xl md:text-7xl font-semibold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.1]" style={{fontFamily: '\'Manrope\', sans-serif'}}>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.2em'}}>
<span className="hero-word" style={{display: 'inline-block', transform: 'translateY(110%)'}}>Hear</span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.2em'}}>
<span className="hero-word" style={{display: 'inline-block', transform: 'translateY(110%)'}}>Footsteps.</span>
</span>
<br className="hidden md:block"/>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.2em'}}>
<span className="hero-word text-lime-500" style={{display: 'inline-block', transform: 'translateY(110%)'}}>Dominate</span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span className="hero-word text-lime-500" style={{display: 'inline-block', transform: 'translateY(110%)'}}>The Lobby.</span>
</span>
</h1>
<p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto font-medium">
                Expert PC audio optimization tailored for competitive shooters. Book a call with our specialists for a fast, 100% secure remote setup via AnyDesk.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
<a className="w-full sm:w-auto px-8 py-3.5 bg-lime-500 text-neutral-950 text-base font-semibold rounded-full hover:bg-lime-400 transition-all shadow-[0_0_20px_rgba(132,204,22,0.3)] hover:shadow-[0_0_30px_rgba(132,204,22,0.5)] flex items-center justify-center gap-2" href="#book">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Book Your Setup
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 text-white text-base font-medium rounded-full hover:bg-neutral-800 transition-colors flex items-center justify-center" href="#presets">
                    Explore Presets
                </a>
</div>

<div className="eq-ui w-full max-w-5xl mx-auto mt-24 relative">
<div className="absolute inset-0 bg-lime-500/10 blur-[100px] rounded-[3rem] pointer-events-none"></div>
<div className="relative bg-[#111111]/80 backdrop-blur-2xl border border-neutral-800 rounded-3xl p-6 md:p-8 shadow-2xl">
<div className="flex items-center justify-between border-b border-neutral-800/80 pb-5 mb-8">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs font-semibold tracking-widest text-neutral-500">PROFILER / COD_WZ_TACTICAL</span>
<div className="px-2 py-1 rounded bg-lime-500/10 text-lime-500 text-xs font-bold tracking-widest">ACTIVE</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 flex items-end justify-between h-56 gap-1 md:gap-2 px-2 bg-neutral-900/50 rounded-2xl p-4 border border-neutral-800/50">

<div className="w-full bg-neutral-800 rounded-t h-[20%] relative group cursor-crosshair"><div className="absolute bottom-0 w-full bg-lime-500/50 rounded-t h-full transition-all group-hover:bg-lime-400"></div><span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-neutral-600">32</span></div>
<div className="w-full bg-neutral-800 rounded-t h-[30%] relative group cursor-crosshair"><div className="absolute bottom-0 w-full bg-lime-500/60 rounded-t h-full transition-all group-hover:bg-lime-400"></div><span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-neutral-600">64</span></div>
<div className="w-full bg-neutral-800 rounded-t h-[85%] relative group cursor-crosshair"><div className="absolute bottom-0 w-full bg-lime-500 shadow-[0_0_15px_rgba(132,204,22,0.4)] rounded-t h-full transition-all group-hover:bg-lime-400"></div><span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-lime-500 font-bold">125</span></div>
<div className="w-full bg-neutral-800 rounded-t h-[95%] relative group cursor-crosshair"><div className="absolute bottom-0 w-full bg-lime-500 shadow-[0_0_15px_rgba(132,204,22,0.4)] rounded-t h-full transition-all group-hover:bg-lime-400"></div><span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-lime-500 font-bold">250</span></div>
<div className="w-full bg-neutral-800 rounded-t h-[40%] relative group cursor-crosshair"><div className="absolute bottom-0 w-full bg-lime-500/60 rounded-t h-full transition-all group-hover:bg-lime-400"></div><span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-neutral-600">500</span></div>
<div className="w-full bg-neutral-800 rounded-t h-[25%] relative group cursor-crosshair"><div className="absolute bottom-0 w-full bg-lime-500/40 rounded-t h-full transition-all group-hover:bg-lime-400"></div><span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-neutral-600">1k</span></div>
<div className="w-full bg-neutral-800 rounded-t h-[15%] relative group cursor-crosshair"><div className="absolute bottom-0 w-full bg-lime-500/30 rounded-t h-full transition-all group-hover:bg-lime-400"></div><span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-neutral-600">2k</span></div>
<div className="w-full bg-neutral-800 rounded-t h-[35%] relative group cursor-crosshair"><div className="absolute bottom-0 w-full bg-lime-500/50 rounded-t h-full transition-all group-hover:bg-lime-400"></div><span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-neutral-600">4k</span></div>
<div className="w-full bg-neutral-800 rounded-t h-[60%] relative group cursor-crosshair"><div className="absolute bottom-0 w-full bg-lime-500/80 rounded-t h-full transition-all group-hover:bg-lime-400"></div><span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-neutral-600">8k</span></div>
<div className="w-full bg-neutral-800 rounded-t h-[45%] relative group cursor-crosshair"><div className="absolute bottom-0 w-full bg-lime-500/60 rounded-t h-full transition-all group-hover:bg-lime-400"></div><span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-neutral-600">16k</span></div>
</div>

<div className="flex flex-col gap-6">

<div>
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-white font-medium">Footstep Isolation (125Hz-250Hz)</span>
<span className="text-xs text-lime-500 font-medium">+12.5dB</span>
</div>
<div className="h-1.5 bg-neutral-800 rounded-full relative">
<div className="absolute left-0 top-0 h-full bg-lime-500 rounded-full w-[85%] shadow-[0_0_10px_rgba(132,204,22,0.5)]"></div>
<div className="absolute left-[85%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-[3px] border-lime-500 rounded-full cursor-pointer shadow-lg"></div>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-xl bg-neutral-800/40 border border-neutral-700/50 hover:bg-neutral-800/60 transition-colors">
<div>
<div className="text-sm text-white font-medium">Gunfire Dampening</div>
<div className="text-xs text-neutral-500 mt-0.5">Compress sharp peaks</div>
</div>
<div className="w-10 h-6 bg-lime-500 rounded-full relative cursor-pointer shadow-[0_0_10px_rgba(132,204,22,0.2)]">
<div className="absolute right-1 top-1 w-4 h-4 bg-neutral-900 rounded-full shadow-sm"></div>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-xl bg-neutral-800/40 border border-neutral-700/50 hover:bg-neutral-800/60 transition-colors">
<div>
<div className="text-sm text-white font-medium">Spatial Expansion</div>
<div className="text-xs text-neutral-500 mt-0.5">Widen stereo image</div>
</div>
<div className="w-10 h-6 bg-neutral-700 rounded-full relative cursor-pointer">
<div className="absolute left-1 top-1 w-4 h-4 bg-neutral-400 rounded-full shadow-sm"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 relative overflow-hidden flex flex-col items-center border-t border-neutral-800/50" id="presets">

<div className="absolute inset-0 pointer-events-none flex items-center justify-center mix-blend-screen opacity-[0.15]">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(132,204,22,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(132,204,22,0.2) 1px, transparent 1px)', backgroundSize: '3rem 3rem'}}></div>

<div className="absolute w-[90vw] max-w-[900px] aspect-square border border-lime-500/30 rounded-full flex items-center justify-center">
<div className="absolute w-[75%] h-[75%] border border-lime-500/30 rounded-full flex items-center justify-center">
<div className="absolute w-[66%] h-[66%] border border-lime-500/40 rounded-full flex items-center justify-center">
<div className="absolute w-[50%] h-[50%] border border-lime-500/50 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute w-[100vw] h-[1px] bg-lime-500/30"></div>
<div className="absolute h-[100vh] w-[1px] bg-lime-500/30"></div>

<div className="absolute w-[90vw] max-w-[900px] aspect-square rounded-full animate-spin origin-center" style={{animationDuration: '5s', background: 'conic-gradient(from 0deg, transparent 75%, rgba(132,204,22,0.05) 90%, rgba(132,204,22,0.6) 100%)'}}></div>

<div className="absolute w-2.5 h-2.5 bg-lime-400 rounded-full shadow-[0_0_15px_#84cc16] top-[25%] left-[35%] animate-pulse" style={{animationDuration: '5s'}}></div>
<div className="absolute w-2 h-2 bg-lime-400 rounded-full shadow-[0_0_15px_#84cc16] bottom-[30%] right-[20%] animate-pulse" style={{animationDuration: '5s', animationDelay: '1.5s'}}></div>
<div className="absolute w-2.5 h-2.5 bg-lime-400 rounded-full shadow-[0_0_15px_#84cc16] top-[65%] left-[65%] animate-pulse" style={{animationDuration: '5s', animationDelay: '3s'}}></div>
</div>
<div className="max-w-6xl mx-auto relative z-10 w-full">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4 text-center leading-[1.1]" style={{fontFamily: '\'Manrope\', sans-serif'}}>
                    Target <span className="text-lime-500">Acquired.</span>
</h2>
<p className="text-base md:text-lg text-neutral-400 mb-16 max-w-2xl mx-auto text-center font-medium">
                    Select your AO. We've mapped the exact audio engine frequencies of the top competitive shooters to give you an unfair advantage.
                </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="relative group rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900/60 hover:border-lime-500/50 transition-all duration-500">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500 mix-blend-luminosity"></div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
<div className="relative p-8 h-full flex flex-col justify-end min-h-[340px]">
<div className="mb-auto">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-neutral-800/80 border border-neutral-700 backdrop-blur-sm text-xs font-bold tracking-widest text-white mb-4 uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-lime-500 animate-pulse"></span> Infinity Ward / Treyarch
                                </div>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight" style={{fontFamily: '\'Manrope\', sans-serif'}}>Warzone &amp; Black Ops 7</h3>
<p className="text-sm text-neutral-400 mb-8 leading-relaxed">
                                Cuts through chaotic killstreaks. Isolates plate-break audio and tactical sprint thuds strictly in the 120-250Hz range.
                            </p>
<a className="w-full py-3.5 bg-white/10 hover:bg-lime-500 hover:text-neutral-950 text-white text-sm font-semibold rounded-full transition-all flex items-center justify-center gap-2 backdrop-blur-sm border border-white/10 hover:border-lime-500" href="#book">
                                Load Profile <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>

<div className="relative group rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900/60 hover:border-lime-500/50 transition-all duration-500">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500 mix-blend-luminosity"></div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
<div className="relative p-8 h-full flex flex-col justify-end min-h-[340px]">
<div className="mb-auto">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-neutral-800/80 border border-neutral-700 backdrop-blur-sm text-xs font-bold tracking-widest text-white mb-4 uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-lime-500 animate-pulse"></span> Respawn Engine
                                </div>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight" style={{fontFamily: '\'Manrope\', sans-serif'}}>Apex Legends</h3>
<p className="text-sm text-neutral-400 mb-8 leading-relaxed">
                                Enhances vertical audio tracking and shield-battery pop cues. Suppresses persistent ring ambient noise and drop-ship roar.
                            </p>
<a className="w-full py-3.5 bg-white/10 hover:bg-lime-500 hover:text-neutral-950 text-white text-sm font-semibold rounded-full transition-all flex items-center justify-center gap-2 backdrop-blur-sm border border-white/10 hover:border-lime-500" href="#book">
                                Load Profile <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>

<div className="relative group rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900/60 hover:border-lime-500/50 transition-all duration-500">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508614999368-9260051292e5?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500 mix-blend-luminosity"></div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
<div className="relative p-8 h-full flex flex-col justify-end min-h-[340px]">
<div className="mb-auto">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-neutral-800/80 border border-neutral-700 backdrop-blur-sm text-xs font-bold tracking-widest text-white mb-4 uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-lime-500 animate-pulse"></span> Frostbite
                                </div>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight" style={{fontFamily: '\'Manrope\', sans-serif'}}>Battlefield 6</h3>
<p className="text-sm text-neutral-400 mb-8 leading-relaxed">
                                Maximum dynamic range compression to tame heavy vehicle explosions while significantly boosting infantry movement.
                            </p>
<a className="w-full py-3.5 bg-white/10 hover:bg-lime-500 hover:text-neutral-950 text-white text-sm font-semibold rounded-full transition-all flex items-center justify-center gap-2 backdrop-blur-sm border border-white/10 hover:border-lime-500" href="#book">
                                Load Profile <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 relative border-t border-neutral-800/50" id="features">
<div className="max-w-6xl mx-auto">
<h2 className="feature-heading text-4xl md:text-5xl font-semibold tracking-tight text-white mb-16 text-center leading-[1.1]" style={{fontFamily: '\'Manrope\', sans-serif'}}>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.2em'}}>
<span className="feat-word" style={{display: 'inline-block', transform: 'translateY(110%)'}}>Engineered</span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.2em'}}>
<span className="feat-word" style={{display: 'inline-block', transform: 'translateY(110%)'}}>For</span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top'}}>
<span className="feat-word text-lime-500" style={{display: 'inline-block', transform: 'translateY(110%)'}}>Advantage.</span>
</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-neutral-800/20 backdrop-blur-md border border-neutral-800 hover:border-lime-500/30 hover:bg-neutral-800/40 transition-all group">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center mb-6 group-hover:bg-lime-500/10 transition-colors">
<iconify-icon className="text-2xl text-lime-500" icon="solar:headphones-round-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight" style={{fontFamily: '\'Manrope\', sans-serif'}}>Frequency Isolation</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Our expert configurations strictly isolate the 120Hz-250Hz and 4kHz-8kHz ranges where footstep audio data resides in major titles, dropping ambient mud.
                        </p>
</div>

<div className="p-8 rounded-2xl bg-neutral-800/20 backdrop-blur-md border border-neutral-800 hover:border-lime-500/30 hover:bg-neutral-800/40 transition-all group">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center mb-6 group-hover:bg-lime-500/10 transition-colors">
<iconify-icon className="text-2xl text-lime-500" icon="solar:volume-small-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight" style={{fontFamily: '\'Manrope\', sans-serif'}}>Smart Dampening</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Dynamic compression is applied to instantly reduce the volume of sudden, loud noises like airstrikes and vehicle engines, protecting your hearing and focus.
                        </p>
</div>

<div className="p-8 rounded-2xl bg-neutral-800/20 backdrop-blur-md border border-neutral-800 hover:border-lime-500/30 hover:bg-neutral-800/40 transition-all group">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center mb-6 group-hover:bg-lime-500/10 transition-colors">
<iconify-icon className="text-2xl text-lime-500" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight" style={{fontFamily: '\'Manrope\', sans-serif'}}>Full Remote Service</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            No confusing downloads. Book a call and our operators will securely connect via AnyDesk to optimally configure your PC's audio fast and safely.
                        </p>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-800/50 bg-neutral-950/50 py-12 px-6 mt-20 text-center text-xs text-neutral-600">
<div className="flex items-center justify-center gap-2 mb-4">
<iconify-icon className="text-lime-500 text-lg" icon="solar:radar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm tracking-tighter text-white font-semibold" style={{fontFamily: '\'Manrope\', sans-serif'}}>SONAR</span>
</div>
<p>Designed for competitive integrity. Not affiliated with Activision Publishing, Inc., EA, or Respawn Entertainment.</p>
</footer>
</main>


    </>
  );
}
