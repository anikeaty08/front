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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
'instrument': ['"Instrument Serif"', 'serif'],
'cabinet': ['"Cabinet Grotesk"', 'sans-serif'],
'mono': ['"JetBrains Mono"', 'monospace'],
},
colors: {
'kyne-bg': '#F2EFE9',
'kyne-alt': '#EAE6DF',
'kyne-dark': '#0A0A0A',
'kyne-darker': '#050505',
'kyne-accent': '#D4F55E',
'kyne-text': '#0A0A0A',
'kyne-text-sec': '#5A5A5A',
'kyne-text-muted': '#888888',
'kyne-text-dark': '#F2EFE9',
'kyne-text-dark-sec': '#A0A0A0',
},
letterSpacing: {
'tightest': '-0.04em',
'tighter': '-0.03em',
'tight': '-0.02em',
'normal': '0',
'wide': '0.04em',
'wider': '0.08em',
'widest': '0.15em',
'mega': '0.25em',
},
transitionTimingFunction: {
'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.15)',
'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
'slow-ease': 'cubic-bezier(0.22, 1, 0.36, 1)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- 1. Loader Animation ---
        const loader = document.getElementById('loader');
        const loaderPerc = document.getElementById('loader-perc');
        let count = 0;
        
        // Block scroll during load
        document.body.style.overflow = 'hidden';

        const loadInterval = setInterval(() => {
            count += Math.floor(Math.random() * 15) + 5;
            if(count > 100) count = 100;
            loaderPerc.innerText = count + '%';
            
            if(count === 100) {
                clearInterval(loadInterval);
                setTimeout(() => {
                    loader.style.transform = 'scaleY(0)';
                    document.body.style.overflow = '';
                    initScrollReveal();
                }, 400);
            }
        }, 80);

        // --- 2. High-End Scroll Reveal ---
        function initScrollReveal() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-revealed');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-blur').forEach((el) => {
                observer.observe(el);
            });
        }
    
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
      
<div className="noise"></div>

<div className="fixed inset-0 z-[99999] bg-kyne-dark flex flex-col items-center justify-center transition-transform duration-[1.2s] ease-in-out origin-top" id="loader">
<div className="font-mono text-xs text-kyne-accent uppercase tracking-widest mb-4">Initializing Protocol</div>
<div className="w-64 h-[1px] bg-white/20 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-kyne-accent w-full origin-left scale-x-0 animate-[loading_1s_ease-out_forwards]"></div>
</div>
<div className="font-mono text-[10vw] font-medium text-kyne-text-dark mt-8 leading-none" id="loader-perc">0%</div>
</div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] md:w-auto transition-transform duration-500 reveal-blur delay-300">
<div className="h-12 backdrop-blur-xl bg-kyne-bg/70 border border-black/10 rounded-none md:rounded-full px-4 flex items-center justify-between md:gap-12 relative overflow-hidden group">

<div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-kyne-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<a className="flex items-center gap-3" href="#">
<span className="w-2 h-2 bg-kyne-accent rounded-full animate-pulse shadow-[0_0_8px_#D4F55E]"></span>
<span className="font-cabinet font-semibold text-sm tracking-tight uppercase">Kyne</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="font-mono text-xs text-kyne-text-sec hover:text-kyne-text uppercase tracking-widest transition-colors" href="#work">Architecture</a>
<a className="font-mono text-xs text-kyne-text-sec hover:text-kyne-text uppercase tracking-widest transition-colors" href="#programs">Protocols</a>
<a className="font-mono text-xs text-kyne-text-sec hover:text-kyne-text uppercase tracking-widest transition-colors" href="#trainers">Engineers</a>
</div>
<a className="flex items-center gap-2" href="#join">
<span className="font-mono text-[0.65rem] text-kyne-text-muted hidden md:block">SYS. STATUS: ACTIVE</span>
<iconify-icon className="md:hidden text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</a>
</div>
</nav>
<main className="relative z-10">

<section className="relative min-h-screen w-full px-4 md:px-[4vw] pt-32 pb-16 flex flex-col justify-end">
<div className="tech-grid"></div>

<div className="absolute top-32 left-[4vw] font-mono text-[0.55rem] text-kyne-text-muted uppercase tracking-widest leading-relaxed hidden md:block reveal-blur delay-200">
                Lat: 48.8566° N<br/>
                Lon: 2.3522° E<br/>
                Protocol: K-001
            </div>
<div className="absolute top-32 right-[4vw] flex flex-col items-end reveal-blur delay-300 hidden md:flex">
<span className="font-mono text-[0.55rem] text-kyne-text-muted uppercase tracking-widest mb-2">Live Biomarker Sync</span>
<svg className="w-32 h-6 text-kyne-accent opacity-50" viewbox="0 0 100 20">
<polyline fill="none" points="0,10 10,10 15,2 25,18 30,10 100,10" stroke="currentColor" strokeWidth="1"></polyline>
<circle className="animate-ping" cx="100" cy="10" fill="currentColor" r="2"></circle>
</svg>
</div>

<div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-end relative z-10 w-full">

<div className="flex flex-col">
<div className="flex items-center gap-2 mb-6 reveal-blur delay-100">
<span className="block w-4 h-[1px] bg-kyne-text"></span>
<span className="font-mono text-xs text-kyne-text uppercase tracking-widest font-medium">Precision Human Performance</span>
</div>
<h1 className="font-instrument text-[clamp(3.5rem,10vw,11rem)] leading-[0.85] tracking-tight text-kyne-text uppercase flex flex-col">
<span className="reveal-blur delay-200">Reengineer</span>
<span className="reveal-blur delay-300 italic flex items-center gap-4 md:gap-8 text-stroke">
                            Your
                            <span className="h-[1px] bg-kyne-text/20 flex-1 hidden md:block mt-6"></span>
</span>
<span className="reveal-blur delay-400">Limits.</span>
</h1>
</div>

<div className="w-full md:w-[22rem] bg-kyne-alt/50 backdrop-blur-md border border-kyne-dark/5 p-6 relative reveal-blur delay-400 tech-border">
<div className="crosshair -top-2 -left-2"></div>
<div className="crosshair -top-2 -right-2"></div>
<div className="crosshair -bottom-2 -left-2"></div>
<div className="crosshair -bottom-2 -right-2"></div>
<div className="flex justify-between items-end mb-6 border-b border-kyne-dark/5 pb-4">
<div className="flex flex-col">
<span className="font-mono text-[0.55rem] text-kyne-text-sec uppercase tracking-widest mb-1">Target Output</span>
<span className="font-cabinet font-semibold text-4xl leading-none">378<span className="text-lg text-kyne-text-muted">bp</span></span>
</div>
<div className="flex items-end gap-1 h-8">
<div className="w-1 h-3 bg-kyne-text/20"></div>
<div className="w-1 h-5 bg-kyne-text/40"></div>
<div className="w-1 h-8 bg-kyne-accent"></div>
</div>
</div>
<p className="font-cabinet text-sm text-kyne-text-sec leading-relaxed mb-8">
                        We don't guess. We measure. 47 biomarkers tracked to build an architecture of absolute adaptation.
                    </p>
<a className="w-full h-12 bg-kyne-dark text-kyne-text-dark font-mono text-xs uppercase tracking-widest flex items-center justify-between px-6 hover:bg-kyne-accent hover:text-kyne-dark transition-all duration-300 group" href="#join">
                        Initialize
                        <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-kyne-dark text-kyne-accent py-4 border-y border-white/10 overflow-hidden relative dark-section">
<div className="marquee-track marquee-left items-center gap-8">
<div className="font-mono text-xs uppercase tracking-widest flex items-center gap-8 whitespace-nowrap">
<span>SYS_OPT: 99.4%</span>
<span className="w-1 h-1 bg-white/20"></span>
<span>VO2_MAX +14.2%</span>
<span className="w-1 h-1 bg-white/20"></span>
<span>STRUCT_INTEGRITY: SECURE</span>
<span className="w-1 h-1 bg-white/20"></span>
<span>HRV_BASELINE: ELEVATED</span>
<span className="w-1 h-1 bg-white/20"></span>
<span>ADAPTATION_RATE: 3.4X</span>
<span className="w-1 h-1 bg-white/20"></span>
<span>SYS_OPT: 99.4%</span>
<span className="w-1 h-1 bg-white/20"></span>
<span>VO2_MAX +14.2%</span>
<span className="w-1 h-1 bg-white/20"></span>
<span>STRUCT_INTEGRITY: SECURE</span>
<span className="w-1 h-1 bg-white/20"></span>
<span>HRV_BASELINE: ELEVATED</span>
<span className="w-1 h-1 bg-white/20"></span>
<span>ADAPTATION_RATE: 3.4X</span>
</div>
</div>
</section>

<section className="relative py-32 px-4 md:px-[4vw]" id="work">
<div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 relative">

<div className="lg:sticky lg:top-32 h-fit reveal-blur">
<div className="font-mono text-[0.65rem] text-kyne-text-muted uppercase tracking-widest mb-8 flex items-center gap-3">
<span className="w-2 h-2 border border-kyne-accent bg-kyne-accent/20"></span>
                        Architectural Approach
                    </div>
<h2 className="font-instrument text-[clamp(2.5rem,5vw,5rem)] leading-[0.9] tracking-tight uppercase mb-8">
                        Systems <br/>
<span className="italic text-kyne-text-sec text-stroke">That Build</span> <br/>
                        Athletes.
                    </h2>
<p className="font-cabinet text-base text-kyne-text-sec max-w-md leading-relaxed mb-12">
                        Motivation fails. Biology doesn't. Our protocols are engineered from your DNA up, utilizing progressive overload science and recovery architecture.
                    </p>

<div className="w-full max-w-sm aspect-square bg-kyne-dark rounded-none p-6 relative overflow-hidden group tech-border dark-section">
<div className="scan-line"></div>
<div className="flex justify-between items-start absolute top-6 left-6 right-6 z-10">
<span className="font-mono text-[0.55rem] text-kyne-text-dark-sec uppercase tracking-widest">Cohort Profiling</span>
<span className="font-mono text-[0.55rem] text-kyne-accent uppercase tracking-widest animate-pulse">Live</span>
</div>

<svg className="w-full h-full mt-4 transform group-hover:scale-105 transition-transform duration-1000" viewbox="0 0 200 200">
<g transform="translate(100, 110)">
<polygon fill="none" points="0,-70 60.6,-35 60.6,35 0,70 -60.6,35 -60.6,-35" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></polygon>
<polygon fill="none" points="0,-35 30.3,-17.5 30.3,17.5 0,35 -30.3,17.5 -30.3,-17.5" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></polygon>

<polygon className="origin-center transition-all duration-[2s]" fill="rgba(212,245,94,0.1)" points="0,-60 45,-10 50,40 -10,65 -55,20 -40,-30" stroke="#D4F55E" strokeWidth="1.5"></polygon>

<circle cx="0" cy="-60" fill="#D4F55E" r="2.5"></circle>
<circle cx="45" cy="-10" fill="#D4F55E" r="2.5"></circle>
<circle cx="50" cy="40" fill="#D4F55E" r="2.5"></circle>
<circle cx="-10" cy="65" fill="#D4F55E" r="2.5"></circle>
<circle cx="-55" cy="20" fill="#D4F55E" r="2.5"></circle>
<circle cx="-40" cy="-30" fill="#D4F55E" r="2.5"></circle>
</g>
</svg>
</div>
</div>

<div className="flex flex-col gap-8 lg:mt-32">
<div className="bg-kyne-alt p-8 md:p-12 relative overflow-hidden tech-border reveal-blur">
<div className="font-mono text-[8rem] leading-none text-kyne-bg absolute -top-8 -right-8 opacity-50 select-none">01</div>
<h3 className="font-cabinet font-semibold text-2xl uppercase tracking-tight mb-4 relative z-10">Biological Individuality</h3>
<p className="font-cabinet text-base text-kyne-text-sec leading-relaxed max-w-lg relative z-10">
                            Every training protocol starts with a 47-biomarker baseline. We establish a rigorous data foundation to identify deficits in strength, structural mobility, and metabolic conditioning.
                        </p>
<div className="mt-8 pt-6 border-t border-kyne-dark/10 flex gap-8 relative z-10">
<div>
<div className="font-mono text-xs text-kyne-text-muted uppercase tracking-widest mb-1">Data Points</div>
<div className="font-mono text-xl text-kyne-text">47</div>
</div>
<div>
<div className="font-mono text-xs text-kyne-text-muted uppercase tracking-widest mb-1">Precision</div>
<div className="font-mono text-xl text-kyne-text">99.8%</div>
</div>
</div>
</div>
<div className="bg-kyne-alt p-8 md:p-12 relative overflow-hidden tech-border reveal-blur lg:-ml-12">
<div className="font-mono text-[8rem] leading-none text-kyne-bg absolute -top-8 -right-8 opacity-50 select-none">02</div>
<h3 className="font-cabinet font-semibold text-2xl uppercase tracking-tight mb-4 relative z-10">Progressive Overload</h3>
<p className="font-cabinet text-base text-kyne-text-sec leading-relaxed max-w-lg relative z-10">
                            Our adaptive load system recalculates your training stimulus weekly. Tracking 23 variables per session ensures you remain strictly in the optimal adaptation zone.
                        </p>
<div className="mt-8 flex items-center gap-2 relative z-10 w-full bg-kyne-dark/5 p-2 h-16">
<div className="h-full bg-kyne-dark w-[20%] transition-all hover:w-[80%] duration-500 ease-spring flex items-center px-4">
<span className="font-mono text-[0.55rem] text-kyne-text-dark uppercase tracking-widest">Adaptation</span>
</div>
<div className="h-full bg-kyne-dark/10 flex-1 flex items-center px-4">
<span className="font-mono text-[0.55rem] text-kyne-text-sec uppercase tracking-widest">Load</span>
</div>
</div>
</div>
<div className="bg-kyne-dark text-kyne-text-dark p-8 md:p-12 relative overflow-hidden tech-border reveal-blur dark-section">
<div className="scan-line hidden md:block"></div>
<div className="font-mono text-[8rem] leading-none text-white/5 absolute -top-8 -right-8 select-none">03</div>
<h3 className="font-cabinet font-semibold text-2xl uppercase tracking-tight mb-4 relative z-10">Recovery Architecture</h3>
<p className="font-cabinet text-base text-kyne-text-dark-sec leading-relaxed max-w-lg relative z-10">
                            48% of gains occur outside the studio. We integrate daily HRV tracking and sleep architecture analysis to modulate training intensity dynamically.
                        </p>
<div className="mt-8 flex gap-2 relative z-10">
<span className="px-3 py-1 border border-white/20 font-mono text-xs uppercase tracking-widest">HRV</span>
<span className="px-3 py-1 border border-white/20 font-mono text-xs uppercase tracking-widest">CNS</span>
<span className="px-3 py-1 border border-kyne-accent text-kyne-accent font-mono text-xs uppercase tracking-widest">Ready</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-[4vw] border-y border-kyne-dark/10 bg-white">
<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-kyne-dark/10 border border-kyne-dark/10 reveal-blur">
<div className="bg-white p-8 md:p-12 flex flex-col justify-between aspect-square group hover:bg-kyne-bg transition-colors">
<span className="font-mono text-[0.65rem] text-kyne-text-muted uppercase tracking-widest">Active Members</span>
<div className="font-cabinet font-bold text-[clamp(3rem,6vw,5rem)] leading-none tracking-tightest group-hover:text-kyne-accent transition-colors">847</div>
</div>
<div className="bg-white p-8 md:p-12 flex flex-col justify-between aspect-square group hover:bg-kyne-bg transition-colors">
<span className="font-mono text-[0.65rem] text-kyne-text-muted uppercase tracking-widest">Retention Rate</span>
<div className="font-cabinet font-bold text-[clamp(3rem,6vw,5rem)] leading-none tracking-tightest group-hover:text-kyne-accent transition-colors">94<span className="text-3xl">%</span></div>
</div>
<div className="bg-white p-8 md:p-12 flex flex-col justify-between aspect-square group hover:bg-kyne-bg transition-colors">
<span className="font-mono text-[0.65rem] text-kyne-text-muted uppercase tracking-widest">Avg Output Gain</span>
<div className="font-cabinet font-bold text-[clamp(3rem,6vw,5rem)] leading-none tracking-tightest group-hover:text-kyne-accent transition-colors">3.7<span className="text-3xl">x</span></div>
</div>
<div className="bg-white p-8 md:p-12 flex flex-col justify-between aspect-square group hover:bg-kyne-bg transition-colors relative overflow-hidden">
<span className="font-mono text-[0.65rem] text-kyne-text-muted uppercase tracking-widest relative z-10">Time to Result</span>
<div className="font-instrument italic text-[clamp(3rem,6vw,5rem)] leading-none tracking-tight relative z-10">6 wks</div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#D4F55E_0%,transparent_70%)] opacity-0 group-hover:opacity-20 transition-opacity"></div>
</div>
</div>
</section>

<section className="py-32 bg-kyne-dark text-kyne-text-dark dark-section relative" id="programs">
<div className="tech-grid"></div>
<div className="px-4 md:px-[4vw] relative z-10">
<div className="font-mono text-[0.65rem] text-kyne-text-dark-sec uppercase tracking-widest mb-8 flex items-center gap-3 reveal-blur">
<span className="w-2 h-2 bg-kyne-accent"></span>
                    Clinical Pathways
                </div>
<h2 className="font-instrument text-[clamp(3rem,6vw,6rem)] leading-[0.9] tracking-tight uppercase mb-16 max-w-4xl reveal-blur delay-100">
                    Four Paths. <br/><span className="italic text-kyne-text-dark-sec text-stroke">One Outcome.</span>
</h2>
<div className="border-t border-white/10 flex flex-col w-full reveal-blur delay-200">

<div className="group relative border-b border-white/10 w-full overflow-hidden">
<div className="absolute inset-0 bg-kyne-accent scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-spring z-0"></div>
<div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between p-6 md:p-10 gap-6 group-hover:text-kyne-dark transition-colors duration-300">
<div className="flex items-center gap-8 md:w-1/3">
<span className="font-mono text-xs opacity-50">01</span>
<h3 className="font-cabinet font-semibold text-2xl md:text-3xl uppercase tracking-tight">Performance<br/>Protocol</h3>
</div>
<div className="md:w-1/3 font-cabinet text-sm opacity-70 leading-relaxed">
                                12-week program anchored in 1RM testing and weekly HRV-adjusted load. Built for athletic return.
                            </div>
<div className="flex items-center gap-6 justify-end md:w-1/3">
<div className="text-right hidden md:block">
<span className="block font-mono text-[0.55rem] uppercase tracking-widest opacity-50 mb-1">Avg 1RM</span>
<span className="font-cabinet font-bold text-xl">+31.4%</span>
</div>
<iconify-icon className="text-3xl opacity-50 group-hover:opacity-100 group-hover:rotate-45 transition-all" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group relative border-b border-white/10 w-full overflow-hidden">
<div className="absolute inset-0 bg-kyne-accent scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-spring z-0"></div>
<div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between p-6 md:p-10 gap-6 group-hover:text-kyne-dark transition-colors duration-300">
<div className="flex items-center gap-8 md:w-1/3">
<span className="font-mono text-xs opacity-50">02</span>
<h3 className="font-cabinet font-semibold text-2xl md:text-3xl uppercase tracking-tight">Metabolic<br/>Conditioning</h3>
</div>
<div className="md:w-1/3 font-cabinet text-sm opacity-70 leading-relaxed">
                                Progressive Zone 2 infrastructure paired with anaerobic intervals. Extreme lipid oxidation focus.
                            </div>
<div className="flex items-center gap-6 justify-end md:w-1/3">
<div className="text-right hidden md:block">
<span className="block font-mono text-[0.55rem] uppercase tracking-widest opacity-50 mb-1">Fat Mass</span>
<span className="font-cabinet font-bold text-xl">-8.2kg</span>
</div>
<iconify-icon className="text-3xl opacity-50 group-hover:opacity-100 group-hover:rotate-45 transition-all" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group relative border-b border-white/10 w-full overflow-hidden">
<div className="absolute inset-0 bg-kyne-accent scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-spring z-0"></div>
<div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between p-6 md:p-10 gap-6 group-hover:text-kyne-dark transition-colors duration-300">
<div className="flex items-center gap-8 md:w-1/3">
<span className="font-mono text-xs opacity-50">03</span>
<h3 className="font-cabinet font-semibold text-2xl md:text-3xl uppercase tracking-tight">Structural<br/>Mobility</h3>
</div>
<div className="md:w-1/3 font-cabinet text-sm opacity-70 leading-relaxed">
                                Systematic joint integrity. 47 movement screens identifying compensation, resolved via 8 targeted protocols.
                            </div>
<div className="flex items-center gap-6 justify-end md:w-1/3">
<div className="text-right hidden md:block">
<span className="block font-mono text-[0.55rem] uppercase tracking-widest opacity-50 mb-1">Pain Red.</span>
<span className="font-cabinet font-bold text-xl">73%</span>
</div>
<iconify-icon className="text-3xl opacity-50 group-hover:opacity-100 group-hover:rotate-45 transition-all" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group relative border-b border-white/10 w-full overflow-hidden">
<div className="absolute inset-0 bg-white scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-spring z-0"></div>
<div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between p-6 md:p-10 gap-6 group-hover:text-kyne-dark transition-colors duration-300">
<div className="flex items-center gap-8 md:w-1/3">
<span className="font-mono text-xs text-kyne-accent group-hover:text-kyne-dark">04</span>
<h3 className="font-cabinet font-semibold text-2xl md:text-3xl uppercase tracking-tight">Elite<br/>1-on-1</h3>
</div>
<div className="md:w-1/3 font-cabinet text-sm opacity-70 leading-relaxed">
                                Fully individualized training with daily biofeedback monitoring and fortnightly clinical assessments.
                            </div>
<div className="flex items-center gap-6 justify-end md:w-1/3">
<div className="text-right hidden md:block">
<span className="block font-mono text-[0.55rem] uppercase tracking-widest opacity-50 mb-1">Retention</span>
<span className="font-cabinet font-bold text-xl">94.3%</span>
</div>
<iconify-icon className="text-3xl opacity-50 group-hover:opacity-100 group-hover:rotate-45 transition-all" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 md:px-[4vw] bg-kyne-bg" id="trainers">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-blur">
<div>
<div className="font-mono text-[0.65rem] text-kyne-text-muted uppercase tracking-widest mb-4 flex items-center gap-3">
<span className="w-2 h-2 border border-kyne-dark"></span>
                        The Engineers
                    </div>
<h2 className="font-instrument text-[clamp(2.5rem,5vw,5rem)] leading-[0.9] tracking-tight uppercase">
                        Architects Of <br/>Your Result.
                    </h2>
</div>
<p className="font-cabinet text-sm text-kyne-text-sec max-w-xs mt-6 md:mt-0">
                    Dual certifications and minimum 3-year applied sport science backgrounds. We do not hire "influencers".
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative reveal-blur delay-100">
<div className="img-wrap aspect-[3/4] bg-kyne-dark relative">
<img alt="Mara" className="w-full h-full object-cover filter grayscale contrast-125 opacity-80 group-hover:opacity-100 mix-blend-luminosity" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 border border-kyne-dark/20 group-hover:border-kyne-accent transition-colors z-10 pointer-events-none"></div>
<div className="absolute top-4 right-4 font-mono text-[0.55rem] text-white uppercase tracking-widest bg-black/50 px-2 py-1 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">ID: MS-01</div>
</div>
<div className="pt-6 border-b border-kyne-dark/10 pb-4">
<h3 className="font-cabinet font-semibold text-xl uppercase tracking-tight">Mara Söderblom</h3>
<div className="flex justify-between items-center mt-2">
<span className="font-mono text-[0.65rem] text-kyne-text-sec uppercase tracking-widest">Head of Perf.</span>
<span className="font-mono text-[0.65rem] text-kyne-text uppercase tracking-widest bg-kyne-accent px-2 py-1">4.9★</span>
</div>
</div>
</div>

<div className="group relative reveal-blur delay-200">
<div className="img-wrap aspect-[3/4] bg-kyne-dark relative">
<img alt="Theo" className="w-full h-full object-cover filter grayscale contrast-125 opacity-80 group-hover:opacity-100 mix-blend-luminosity" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border border-kyne-dark/20 group-hover:border-kyne-accent transition-colors z-10 pointer-events-none"></div>
<div className="absolute top-4 right-4 font-mono text-[0.55rem] text-white uppercase tracking-widest bg-black/50 px-2 py-1 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">ID: TN-02</div>
</div>
<div className="pt-6 border-b border-kyne-dark/10 pb-4">
<h3 className="font-cabinet font-semibold text-xl uppercase tracking-tight">Théo Nakamura</h3>
<div className="flex justify-between items-center mt-2">
<span className="font-mono text-[0.65rem] text-kyne-text-sec uppercase tracking-widest">Metabolic Spec.</span>
<span className="font-mono text-[0.65rem] text-kyne-text uppercase tracking-widest bg-kyne-accent px-2 py-1">4.8★</span>
</div>
</div>
</div>

<div className="group relative reveal-blur delay-300">
<div className="img-wrap aspect-[3/4] bg-kyne-dark relative">
<img alt="Leila" className="w-full h-full object-cover object-top filter grayscale contrast-125 opacity-80 group-hover:opacity-100 mix-blend-luminosity" src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border border-kyne-dark/20 group-hover:border-kyne-accent transition-colors z-10 pointer-events-none"></div>
<div className="absolute top-4 right-4 font-mono text-[0.55rem] text-white uppercase tracking-widest bg-black/50 px-2 py-1 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">ID: LF-03</div>
</div>
<div className="pt-6 border-b border-kyne-dark/10 pb-4">
<h3 className="font-cabinet font-semibold text-xl uppercase tracking-tight">Leila Farouk</h3>
<div className="flex justify-between items-center mt-2">
<span className="font-mono text-[0.65rem] text-kyne-text-sec uppercase tracking-widest">Movement Arch.</span>
<span className="font-mono text-[0.65rem] text-kyne-text uppercase tracking-widest bg-kyne-accent px-2 py-1">5.0★</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-kyne-darker text-kyne-text-dark dark-section relative border-t border-white/10">
<div className="px-4 md:px-[4vw] max-w-7xl mx-auto">
<div className="text-center mb-16 reveal-blur">
<h2 className="font-instrument text-[clamp(2.5rem,5vw,5rem)] leading-[0.9] tracking-tight uppercase mb-6">
                        No Hidden Fees. <br/><span className="italic text-kyne-text-dark-sec text-stroke">No Wasted Months.</span>
</h2>
<p className="font-cabinet text-base text-kyne-text-dark-sec max-w-lg mx-auto">
                        Every plan includes your 47-biomarker baseline and a 30-day data-backed guarantee.
                    </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

<div className="p-8 border border-white/10 tech-border reveal-blur delay-100 relative bg-kyne-dark/50 backdrop-blur-sm">
<span className="font-mono text-[0.55rem] text-white/50 uppercase tracking-widest block mb-4">Tier 01</span>
<h3 className="font-cabinet font-semibold text-2xl uppercase tracking-tight mb-2">Starter</h3>
<div className="font-cabinet font-bold text-5xl mb-6">€89<span className="text-lg font-medium text-white/50">/mo</span></div>
<ul className="flex flex-col gap-4 font-cabinet text-sm text-white/70 mb-8 border-t border-white/10 pt-6">
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-kyne-accent rounded-full"></span> Group Access (5x/wk)</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-kyne-accent rounded-full"></span> Baseline Assessment</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-white/20 rounded-full"></span> Monthly Check-in</li>
</ul>
<button className="w-full py-4 border border-white/20 font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-kyne-dark transition-colors">Select Protocol</button>
</div>

<div className="p-10 border border-kyne-accent tech-border reveal-blur delay-200 relative bg-kyne-dark shadow-[0_0_40px_rgba(212,245,94,0.05)] lg:scale-105 z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-kyne-accent text-kyne-dark font-mono text-[0.55rem] uppercase tracking-widest px-3 py-1">Optimal Pathway</div>
<span className="font-mono text-[0.55rem] text-white/50 uppercase tracking-widest block mb-4">Tier 02</span>
<h3 className="font-cabinet font-semibold text-2xl uppercase tracking-tight mb-2 text-kyne-accent">Performance</h3>
<div className="font-cabinet font-bold text-6xl mb-6 text-kyne-accent">€189<span className="text-lg font-medium text-white/50">/mo</span></div>
<ul className="flex flex-col gap-4 font-cabinet text-sm text-white/90 mb-8 border-t border-white/10 pt-6">
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-kyne-accent rounded-full"></span> All Starter Features</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-kyne-accent rounded-full"></span> 2× 1-on-1 Sessions/wk</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-kyne-accent rounded-full"></span> Weekly HRV Review</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-kyne-accent rounded-full"></span> Custom Nutritional Protocol</li>
</ul>
<button className="w-full py-4 bg-kyne-accent text-kyne-dark font-mono text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity">Initialize System</button>
</div>

<div className="p-8 border border-white/10 tech-border reveal-blur delay-300 relative bg-kyne-dark/50 backdrop-blur-sm">
<span className="font-mono text-[0.55rem] text-white/50 uppercase tracking-widest block mb-4">Tier 03</span>
<h3 className="font-cabinet font-semibold text-2xl uppercase tracking-tight mb-2">Elite</h3>
<div className="font-cabinet font-bold text-5xl mb-6">€349<span className="text-lg font-medium text-white/50">/mo</span></div>
<ul className="flex flex-col gap-4 font-cabinet text-sm text-white/70 mb-8 border-t border-white/10 pt-6">
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-kyne-accent rounded-full"></span> Unlimited Biofeedback Coaching</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-kyne-accent rounded-full"></span> 6 Sessions/wk</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-white/20 rounded-full"></span> Quarterly Biomarker Panel</li>
</ul>
<button className="w-full py-4 border border-white/20 font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-kyne-dark transition-colors">Apply For Access</button>
</div>
</div>
</div>
</section>

<footer className="bg-kyne-dark text-kyne-text-dark border-t border-white/10 pt-24 pb-8 px-4 md:px-[4vw] dark-section relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-kyne-accent rounded-full blur-[150px] opacity-[0.03] pointer-events-none"></div>
<div className="flex flex-col items-center justify-center mb-24 reveal-blur">
<h2 className="font-cabinet font-bold text-[clamp(4rem,15vw,18rem)] leading-[0.75] tracking-tighter text-white opacity-5 text-stroke select-none text-center w-full">
                    KYNE
                </h2>
<a className="absolute font-mono text-xs md:text-sm uppercase tracking-widest text-kyne-dark bg-kyne-accent px-8 py-4 hover:scale-105 transition-transform flex items-center gap-4 group" href="#join">
                    Initialize Protocol
                    <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:round-arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-12">
<div className="col-span-1 md:col-span-2">
<span className="font-cabinet font-bold text-2xl tracking-tight uppercase block mb-4">Kyne</span>
<p className="font-cabinet text-sm text-white/50 max-w-xs">
                        Engineering human adaptation through measurement, science, and brutal consistency.
                    </p>
<div className="font-mono text-[0.55rem] text-white/30 uppercase tracking-widest mt-8">
                        SYS_LOC: 48.8566° N, 2.3522° E
                    </div>
</div>
<div>
<span className="font-mono text-[0.55rem] text-white/50 uppercase tracking-widest block mb-4">Architecture</span>
<ul className="flex flex-col gap-2 font-cabinet text-sm text-white/80">
<li><a className="hover:text-kyne-accent transition-colors" href="#">Biomarker Panel</a></li>
<li><a className="hover:text-kyne-accent transition-colors" href="#">Overload Science</a></li>
<li><a className="hover:text-kyne-accent transition-colors" href="#">Recovery Systems</a></li>
</ul>
</div>
<div>
<span className="font-mono text-[0.55rem] text-white/50 uppercase tracking-widest block mb-4">Network</span>
<ul className="flex flex-col gap-2 font-cabinet text-sm text-white/80">
<li><a className="hover:text-kyne-accent transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-kyne-accent transition-colors" href="#">Strava</a></li>
<li><a className="hover:text-kyne-accent transition-colors" href="#">Client Portal</a></li>
</ul>
</div>
</div>
<div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[0.55rem] text-white/30 uppercase tracking-widest">
<span>© 2024 Kyne Performance. All Rights Reserved.</span>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Data Policy</a>
</div>
</div>
</footer>
</main>



    </>
  );
}
