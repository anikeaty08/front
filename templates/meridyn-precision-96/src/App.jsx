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



        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // 1. Live UTC Clock
            const clockEl = document.getElementById('clock-utc');
            if(clockEl) {
                setInterval(() => {
                    const d = new Date();
                    clockEl.textContent = d.toISOString().substr(11, 8) + ' UTC';
                }, 1000);
            }

            // 2. Scroll Progress Bar
            gsap.to("#scroll-progress", {
                width: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.1
                }
            });

            // 3. Hero Animations (Aggressive Entry)
            const heroTl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.5 }});
            
            heroTl.from(".gsap-hero-elem", {
                y: 30,
                opacity: 0,
                stagger: 0.1,
                delay: 0.2
            })
            .from("#hero-title span", {
                y: "120%",
                stagger: 0.1,
                duration: 1.2
            }, "-=1.2")
            .from(".gsap-hero-panel", {
                x: 50,
                opacity: 0,
                duration: 1.2
            }, "-=1.0");

            // 4. Number Counters (Hero)
            const counters = document.querySelectorAll('.counter');
            counters.forEach(counter => {
                const target = parseFloat(counter.getAttribute('data-val'));
                const isFloat = target % 1 !== 0;
                gsap.to(counter, {
                    innerHTML: target,
                    duration: 2.5,
                    ease: "power3.out",
                    snap: { innerHTML: isFloat ? 0.1 : 1 },
                    onUpdate: function() {
                        counter.innerHTML = isFloat ? Number(this.targets()[0].innerHTML).toFixed(1) : Math.round(this.targets()[0].innerHTML);
                    },
                    scrollTrigger: {
                        trigger: counter,
                        start: "top 90%"
                    }
                });
            });

            // 5. Section Reveals (Global)
            const sections = document.querySelectorAll('.sec-reveal');
            sections.forEach(sec => {
                gsap.from(sec, {
                    y: 60,
                    opacity: 0,
                    duration: 1.2,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: sec,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                });
            });

            // 6. Accordion Logic
            const accRows = document.querySelectorAll('.acc-row');
            accRows.forEach(row => {
                row.addEventListener('click', () => {
                    // Close others
                    accRows.forEach(r => {
                        if(r !== row) r.classList.remove('active-row');
                    });
                    // Toggle clicked
                    row.classList.toggle('active-row');
                });
            });

            // 7. Spotlight Mouse Tracking (Cards)
            const cards = document.querySelectorAll('.spotlight-card');
            cards.forEach(card => {
                card.addEventListener('mousemove', e => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });
            });
            
            // 8. Text Split Animation for Manifesto (Award winning feel)
            if(typeof SplitType !== 'undefined') {
                const manifestoText = new SplitType('#manifesto p', { types: 'lines' });
                gsap.from(manifestoText.lines, {
                    y: 30,
                    opacity: 0,
                    stagger: 0.05,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: '#manifesto',
                        start: "top 75%"
                    }
                });
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
      

<div className="grain-overlay fixed inset-0 z-[999] pointer-events-none"></div>
<div className="bg-grid-pattern fixed inset-0 z-[0] pointer-events-none opacity-100"></div>
<div className="fixed top-0 left-0 h-[0.125rem] bg-[#E8EDF2] z-[100] w-0 origin-left" id="scroll-progress"></div>

<div className="fixed top-[1.5rem] right-[1.5rem] z-40 text-right hidden lg:block mix-blend-difference pointer-events-none">
<div className="flex items-center justify-end gap-3 mb-1">
<div className="w-1 h-1 bg-white animate-pulse"></div>
<div className="text-[0.625rem] font-mono-custom text-white uppercase tracking-[0.2em] font-bold">SYS_ONLINE</div>
</div>
<div className="text-[0.5625rem] font-mono-custom text-[#8A8F96] uppercase tracking-[0.18em]" id="clock-utc">--:--:-- UTC</div>
</div>
<div className="fixed bottom-[1.5rem] left-[1.5rem] z-40 hidden lg:flex flex-col gap-1 mix-blend-difference pointer-events-none">
<div className="text-[0.5625rem] font-mono-custom text-[#8A8F96] uppercase tracking-[0.2em]">LAT. 47° 22' N</div>
<div className="text-[0.5625rem] font-mono-custom text-[#8A8F96] uppercase tracking-[0.2em]">LONG. 8° 32' E</div>
<div className="w-8 h-[1px] bg-white/20 my-1"></div>
<div className="text-[0.5625rem] font-mono-custom text-white uppercase tracking-[0.2em]">ZÜRICH, CH</div>
</div>

<nav className="fixed top-[1.5rem] left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[90rem] z-50 flex justify-between items-center h-[4rem] px-[1.5rem] bg-[rgba(4,4,4,0.6)] backdrop-blur-xl border border-white/5 tech-border">
<a className="flex items-center gap-[1rem] group cursor-pointer z-10" href="#">
<div className="relative w-[2rem] h-[2rem] flex items-center justify-center">
<svg className="w-full h-full text-[#E8EDF2]" fill="none" stroke="currentColor" viewbox="0 0 40 40">
<polygon className="origin-center group-hover:rotate-90 transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]" points="20 2 38 20 20 38 2 20" strokeWidth="1.5"></polygon>
<circle className="group-hover:scale-0 transition-transform duration-500" cx="20" cy="20" fill="currentColor" r="4"></circle>
<rect className="scale-0 group-hover:scale-100 transition-transform duration-500 delay-100" fill="currentColor" height="4" width="4" x="18" y="18"></rect>
</svg>
</div>
<span className="font-bold text-[1.125rem] tracking-[-0.04em] uppercase hidden md:block">Meridyn</span>
</a>
<div className="hidden lg:flex items-center gap-[3.5rem] absolute left-1/2 -translate-x-1/2 h-full">
<a className="text-[0.6875rem] font-mono-custom text-[#8A8F96] hover:text-[#E8EDF2] uppercase tracking-[0.2em] transition-all duration-300 relative group h-full flex items-center" href="#manifesto">
<span className="relative z-10">Manifesto</span>
<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#E8EDF2] group-hover:w-full transition-all duration-300 ease-out"></span>
</a>
<a className="text-[0.6875rem] font-mono-custom text-[#8A8F96] hover:text-[#E8EDF2] uppercase tracking-[0.2em] transition-all duration-300 relative group h-full flex items-center" href="#protocols">
<span className="relative z-10">Protocols</span>
<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#E8EDF2] group-hover:w-full transition-all duration-300 ease-out"></span>
</a>
<a className="text-[0.6875rem] font-mono-custom text-[#8A8F96] hover:text-[#E8EDF2] uppercase tracking-[0.2em] transition-all duration-300 relative group h-full flex items-center" href="#atlas">
<span className="relative z-10">Atlas System</span>
<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#E8EDF2] group-hover:w-full transition-all duration-300 ease-out"></span>
</a>
<a className="text-[0.6875rem] font-mono-custom text-[#8A8F96] hover:text-[#E8EDF2] uppercase tracking-[0.2em] transition-all duration-300 relative group h-full flex items-center" href="#lab">
<span className="relative z-10">Instrumentation</span>
<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#E8EDF2] group-hover:w-full transition-all duration-300 ease-out"></span>
</a>
</div>
<div className="flex items-center gap-[1.5rem] z-10">
<div className="hidden xl:flex flex-col text-right mr-4">
<span className="text-[0.5625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.18em]">Intake Status</span>
<span className="text-[0.6875rem] font-mono-custom text-white uppercase tracking-[0.18em]">Q3 Open</span>
</div>
<a className="relative flex items-center justify-center h-[2.75rem] px-[1.5rem] bg-white text-black font-bold text-[0.6875rem] font-mono-custom uppercase tracking-[0.2em] overflow-hidden group hover:bg-[#E8EDF2] transition-colors" href="#contact">
<span className="relative z-10 flex items-center gap-2">
                    Apply Now <iconify-icon className="text-[1rem] group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>
</nav>

<section className="relative min-h-[100svh] pt-[12rem] pb-[5rem] px-[1.5rem] md:px-[3rem] lg:px-[5rem] flex flex-col justify-end z-10 overflow-hidden bg-[#040404]" id="hero">

<div className="absolute inset-0 z-0 flex justify-center items-center opacity-20 pointer-events-none">
<div className="w-[120vw] h-[120vh] bg-dot-pattern animate-[spin_240s_linear_infinite]"></div>
</div>

<div className="crosshair top-[10%] left-[5%] hidden lg:block"></div>
<div className="crosshair top-[10%] right-[5%] hidden lg:block"></div>
<div className="crosshair bottom-[10%] left-[5%] hidden lg:block"></div>
<div className="crosshair bottom-[10%] right-[5%] hidden lg:block"></div>
<div className="relative z-10 w-full max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[4rem] items-end h-full">

<div className="lg:col-span-8 flex flex-col">
<div className="mb-[2rem] flex items-center gap-3 overflow-hidden">
<span className="w-8 h-[1px] bg-white gsap-hero-elem"></span>
<span className="text-[0.6875rem] font-mono-custom text-[#E8EDF2] uppercase tracking-[0.25em] font-bold gsap-hero-elem">The Apex of Human Optimization</span>
</div>
<h1 className="text-fluid-giant text-white uppercase leading-[0.8] tracking-[-0.06em] mb-[3rem]" id="hero-title">
<div className="overflow-hidden pb-2"><span className="block">Absolute</span></div>
<div className="overflow-hidden pb-2"><span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#5A5E63]">Precision.</span></div>
</h1>
<div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center overflow-hidden">
<p className="text-[1.125rem] lg:text-[1.25rem] font-medium leading-[1.6] text-[#8A8F96] max-w-[30rem] gsap-hero-elem">
                        We do not guess. We quantify 378 biomarkers. We optimize against clinical baselines. We win.
                    </p>
<a className="group relative flex items-center justify-center w-[4rem] h-[4rem] rounded-full border border-white/20 hover:bg-white transition-colors duration-500 gsap-hero-elem shrink-0" href="#protocols">
<iconify-icon className="text-2xl text-white group-hover:text-black group-hover:translate-y-1 transition-all duration-300" icon="solar:arrow-down-linear"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-4 grid grid-cols-2 gap-4 lg:pb-8 w-full gsap-hero-panel">
<div className="col-span-2 tech-border bg-[#0a0a0a]/80 backdrop-blur-md p-[1.5rem] flex flex-col justify-between h-[10rem] group hover:bg-[#111111] transition-colors cursor-default">
<div className="flex justify-between items-start">
<span className="text-[0.625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.2em]">Active Cohort Avg</span>
<div className="flex gap-1"><span className="w-1 h-3 bg-white/20 group-hover:bg-white/40 transition-colors"></span><span className="w-1 h-3 bg-white/40 group-hover:bg-white/70 transition-colors"></span><span className="w-1 h-3 bg-white group-hover:bg-green-500 transition-colors"></span></div>
</div>
<div>
<div className="text-[3rem] font-doto font-bold text-white leading-none mb-1"><span className="text-[#8A8F96] font-normal text-[0.6em]">+</span><span className="counter" data-val="14.2">0</span><span className="text-[0.5em] ml-1">%</span></div>
<div className="text-[0.6875rem] font-mono-custom text-[#8A8F96] uppercase tracking-[0.1em]">VO2 Max Uplift (90 Days)</div>
</div>
</div>
<div className="col-span-1 tech-border bg-[#0a0a0a]/80 backdrop-blur-md p-[1.5rem] flex flex-col justify-between h-[10rem]">
<span className="text-[0.5625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.2em]">Variables</span>
<div>
<div className="text-[2rem] font-doto font-bold text-white leading-none mb-1"><span className="counter" data-val="378">0</span></div>
<div className="text-[0.5625rem] font-mono-custom text-[#8A8F96] uppercase tracking-[0.1em] leading-tight">Biomarkers<br/>Tracked</div>
</div>
</div>
<div className="col-span-1 tech-border bg-[#0a0a0a]/80 backdrop-blur-md p-[1.5rem] flex flex-col justify-between h-[10rem]">
<span className="text-[0.5625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.2em]">Protocols</span>
<div>
<div className="text-[2rem] font-doto font-bold text-white leading-none mb-1"><span className="counter" data-val="04">0</span></div>
<div className="text-[0.5625rem] font-mono-custom text-[#8A8F96] uppercase tracking-[0.1em] leading-tight">Clinical<br/>Pathways</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#040404] py-[2rem] border-y border-white/5 overflow-hidden relative group">
<div className="absolute inset-0 bg-gradient-to-r from-[#040404] via-transparent to-[#040404] z-10 pointer-events-none w-full h-full"></div>

<div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused] w-max mb-4">
<div className="flex items-center gap-[2rem] px-[1rem]">

<span className="text-[0.875rem] font-mono-custom text-[#8A8F96] uppercase tracking-[0.2em] font-bold">ETH Zürich Advisory Board</span>
<span className="text-[1.2rem] text-[#5A5E63]">✦</span>
<span className="text-[0.875rem] font-mono-custom text-[#8A8F96] uppercase tracking-[0.2em] font-bold">ISO 15189 Accredited Lab</span>
<span className="text-[1.2rem] text-[#5A5E63]">✦</span>
<span className="text-[0.875rem] font-mono-custom text-[#8A8F96] uppercase tracking-[0.2em] font-bold">Whoop Science Partner</span>
<span className="text-[1.2rem] text-[#5A5E63]">✦</span>
<span className="text-[0.875rem] font-mono-custom text-[#8A8F96] uppercase tracking-[0.2em] font-bold">UCSF Longevity Institute</span>
<span className="text-[1.2rem] text-[#5A5E63]">✦</span>

<span className="text-[0.875rem] font-mono-custom text-[#8A8F96] uppercase tracking-[0.2em] font-bold">ETH Zürich Advisory Board</span>
<span className="text-[1.2rem] text-[#5A5E63]">✦</span>
<span className="text-[0.875rem] font-mono-custom text-[#8A8F96] uppercase tracking-[0.2em] font-bold">ISO 15189 Accredited Lab</span>
<span className="text-[1.2rem] text-[#5A5E63]">✦</span>
<span className="text-[0.875rem] font-mono-custom text-[#8A8F96] uppercase tracking-[0.2em] font-bold">Whoop Science Partner</span>
<span className="text-[1.2rem] text-[#5A5E63]">✦</span>
<span className="text-[0.875rem] font-mono-custom text-[#8A8F96] uppercase tracking-[0.2em] font-bold">UCSF Longevity Institute</span>
<span className="text-[1.2rem] text-[#5A5E63]">✦</span>
</div>
</div>

<div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused] w-max [animation-direction:reverse]">
<div className="flex items-center gap-[3rem] px-[1.5rem]">
<span className="text-[0.625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.3em]">Hologic Horizon W DXA</span>
<span className="w-[2rem] h-[1px] bg-[#5A5E63]/50"></span>
<span className="text-[0.625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.3em]">Cosmed K5 CPET</span>
<span className="w-[2rem] h-[1px] bg-[#5A5E63]/50"></span>
<span className="text-[0.625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.3em]">2.0 ATA HBOT Chamber</span>
<span className="w-[2rem] h-[1px] bg-[#5A5E63]/50"></span>
<span className="text-[0.625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.3em]">Cambridge CANTAB</span>
<span className="w-[2rem] h-[1px] bg-[#5A5E63]/50"></span>

<span className="text-[0.625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.3em]">Hologic Horizon W DXA</span>
<span className="w-[2rem] h-[1px] bg-[#5A5E63]/50"></span>
<span className="text-[0.625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.3em]">Cosmed K5 CPET</span>
<span className="w-[2rem] h-[1px] bg-[#5A5E63]/50"></span>
<span className="text-[0.625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.3em]">2.0 ATA HBOT Chamber</span>
<span className="w-[2rem] h-[1px] bg-[#5A5E63]/50"></span>
<span className="text-[0.625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.3em]">Cambridge CANTAB</span>
<span className="w-[2rem] h-[1px] bg-[#5A5E63]/50"></span>
</div>
</div>
</section>

<section className="bg-[#040404] py-[8rem] lg:py-[12rem] px-[1.5rem] md:px-[3rem] lg:px-[5rem] relative" id="manifesto">
<div className="max-w-[90rem] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-[5rem] xl:gap-[8rem] items-center">

<div className="xl:col-span-5 relative sec-reveal">
<div className="absolute -top-10 -left-10 text-[10rem] text-white/5 font-bold leading-none select-none pointer-events-none">03</div>
<div className="mb-[2rem]">
<span className="text-[0.6875rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.25em] font-bold border border-white/10 px-3 py-1 rounded-full">Positioning</span>
</div>
<h2 className="text-fluid-h2 text-white font-bold mb-[2rem] uppercase leading-[0.9]">
                    We are<br/>not a<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#333]">gym.</span>
</h2>
</div>

<div className="xl:col-span-7 flex flex-col gap-[3rem] sec-reveal">
<p className="text-[clamp(1.5rem,2.5vw,2.5rem)] leading-[1.3] tracking-[-0.02em] text-[#E8EDF2] font-medium">
                    The average fitness industry optimizes for adherence. We optimize for <span className="relative inline-block text-white group cursor-crosshair">causation<span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform origin-left transition-transform group-hover:scale-x-0"></span><span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white text-black text-[0.625rem] font-mono px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">DEF: Verifiable Outcome</span></span>. 
                </p>
<p className="text-[1.125rem] leading-[1.6] text-[#8A8F96] max-w-[40rem]">
                    Every intervention is indexed against a clinical biomarker. Every biomarker is trended across a longitudinal six-month window. If a protocol cannot mathematically prove itself against your baseline, it is eliminated. Not opinions. Not vibes. Only what moves the number.
                </p>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-white/10 pt-[3rem]">
<div>
<div className="text-[0.625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.2em] mb-2">Protocol Efficacy</div>
<div className="text-[1.5rem] font-doto font-bold text-white">94.2%</div>
</div>
<div>
<div className="text-[0.625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.2em] mb-2">Data Points / Mo</div>
<div className="text-[1.5rem] font-doto font-bold text-white">4.2M</div>
</div>
<div className="hidden md:block">
<div className="text-[0.625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.2em] mb-2">Clinical Staff</div>
<div className="text-[1.5rem] font-doto font-bold text-white">PhD / MD</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#070707] py-[10rem] px-[1.5rem] md:px-[3rem] lg:px-[5rem] border-y border-white/5 relative overflow-hidden" id="protocols">
<div className="absolute top-0 right-[10%] w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
<div className="absolute top-0 right-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="max-w-[90rem] mx-auto sec-reveal">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-[6rem] gap-8">
<div>
<div className="mb-[1.5rem]">
<span className="text-[0.6875rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.25em] font-bold border border-white/10 px-3 py-1 rounded-full">04 // Protocols</span>
</div>
<h2 className="text-fluid-h2 text-white font-bold leading-tight uppercase">Four Tracks.<br/>Zero Guesswork.</h2>
</div>
<p className="text-[1.125rem] text-[#8A8F96] max-w-[24rem]">
                    Select an entry point. Every track plugs into the same foundational biomarker spine, heavily individualized to your physiology.
                </p>
</div>
<div className="w-full flex flex-col border-t border-white/10" id="protocol-accordion">

<div className="acc-row border-b border-white/10 group cursor-pointer transition-colors duration-400 hover:bg-white/[0.02] active-row" data-index="0">
<div className="flex flex-col md:flex-row items-start md:items-center py-[3rem] px-[1.5rem] md:px-4 min-h-[8rem] relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
<div className="w-full md:w-[50%] flex items-center gap-[2rem] mb-[1.5rem] md:mb-0 relative z-10">
<span className="text-[0.875rem] font-mono-custom text-[#5A5E63] font-bold">01</span>
<span className="text-[clamp(2rem,3.5vw,3.5rem)] tracking-[-0.03em] font-bold uppercase text-white group-hover:pl-4 transition-all duration-500">Baseline Audit</span>
</div>
<div className="w-full md:w-[35%] text-[1.125rem] text-[#8A8F96] mb-[1.5rem] md:mb-0 pr-8 relative z-10">
                            Where you actually are. Everything else is theater.
                        </div>
<div className="w-full md:w-[15%] flex justify-between md:justify-end items-center gap-[1.5rem] relative z-10">
<span className="text-[0.6875rem] font-mono-custom text-white uppercase tracking-[0.2em] border border-white/20 px-2 py-1 rounded">1 Visit</span>
<div className="w-[2.5rem] h-[2.5rem] rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors acc-icon-wrap">
<iconify-icon className="text-xl text-white transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] acc-icon rotate-45" icon="solar:add-linear"></iconify-icon>
</div>
</div>
</div>

<div className="acc-content px-[1.5rem] md:px-4 pb-[4rem]">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-[3rem]">
<div className="lg:col-span-5 flex flex-col gap-[2rem]">
<p className="text-[1.125rem] leading-[1.6] text-[#8A8F96]">The foundational appointment. You leave with a 44-page clinical document detailing every subsystem. We measure body composition via DEXA, metabolic rate via indirect calorimetry, and cardiovascular fitness via CPET. No upsell. Just the map.</p>
<div className="flex flex-col gap-[1rem]">
<div className="flex items-center gap-4 text-[0.875rem] text-white border-b border-white/5 pb-2"><iconify-icon className="text-[#5A5E63]" icon="solar:check-circle-linear"></iconify-icon> DEXA Body Composition Scan</div>
<div className="flex items-center gap-4 text-[0.875rem] text-white border-b border-white/5 pb-2"><iconify-icon className="text-[#5A5E63]" icon="solar:check-circle-linear"></iconify-icon> VO2max / CPET Testing</div>
<div className="flex items-center gap-4 text-[0.875rem] text-white border-b border-white/5 pb-2"><iconify-icon className="text-[#5A5E63]" icon="solar:check-circle-linear"></iconify-icon> 44-Analyte Venous Draw</div>
<div className="flex items-center gap-4 text-[0.875rem] text-white border-b border-white/5 pb-2"><iconify-icon className="text-[#5A5E63]" icon="solar:check-circle-linear"></iconify-icon> 14-Day CGM Monitoring</div>
</div>
</div>

<div className="lg:col-span-7 grid grid-cols-2 gap-[1rem]">
<div className="tech-border bg-[#0a0a0a] p-[1.5rem] flex flex-col justify-between h-[12rem]">
<div className="text-[0.625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.2em] mb-2">Sample Output / Hormonal</div>
<div className="flex-grow flex items-center justify-center">
<div className="w-full flex items-end justify-between h-12 gap-1 opacity-70">
<div className="w-full bg-[#5A5E63] h-[30%]"></div><div className="w-full bg-[#5A5E63] h-[50%]"></div><div className="w-full bg-[#5A5E63] h-[40%]"></div><div className="w-full bg-white h-[80%] relative"><span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[0.5625rem] font-mono-custom text-white">TEST</span></div><div className="w-full bg-[#5A5E63] h-[60%]"></div>
</div>
</div>
</div>
<div className="tech-border bg-[#0a0a0a] p-[1.5rem] flex flex-col justify-between h-[12rem] bg-[url('https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80')] bg-cover bg-center mix-blend-luminosity grayscale relative overflow-hidden group/img">
<div className="absolute inset-0 bg-black/60 group-hover/img:bg-black/30 transition-colors duration-500"></div>
<div className="absolute bottom-4 left-4 z-10 text-[0.625rem] font-mono-custom text-white uppercase tracking-[0.2em] border border-white/20 bg-black/50 backdrop-blur-sm px-2 py-1">Lab View</div>
</div>
</div>
</div>
</div>
</div>

<div className="acc-row border-b border-white/10 group cursor-pointer transition-colors duration-400 hover:bg-white/[0.02]" data-index="1">
<div className="flex flex-col md:flex-row items-start md:items-center py-[3rem] px-[1.5rem] md:px-4 min-h-[8rem] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
<div className="w-full md:w-[50%] flex items-center gap-[2rem] mb-[1.5rem] md:mb-0 relative z-10">
<span className="text-[0.875rem] font-mono-custom text-[#5A5E63] font-bold">02</span>
<span className="text-[clamp(2rem,3.5vw,3.5rem)] tracking-[-0.03em] font-bold uppercase text-white group-hover:pl-4 transition-all duration-500">Performance</span>
</div>
<div className="w-full md:w-[35%] text-[1.125rem] text-[#8A8F96] mb-[1.5rem] md:mb-0 pr-8 relative z-10">
                            For operators whose body is their instrument.
                        </div>
<div className="w-full md:w-[15%] flex justify-between md:justify-end items-center gap-[1.5rem] relative z-10">
<span className="text-[0.6875rem] font-mono-custom text-white uppercase tracking-[0.2em] border border-white/20 px-2 py-1 rounded">12 WKS</span>
<div className="w-[2.5rem] h-[2.5rem] rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors acc-icon-wrap">
<iconify-icon className="text-xl text-white transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] acc-icon rotate-0" icon="solar:add-linear"></iconify-icon>
</div>
</div>
</div>

<div className="acc-content px-[1.5rem] md:px-4 pb-[4rem]">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-[3rem]">
<div className="lg:col-span-5 flex flex-col gap-[2rem]">
<p className="text-[1.125rem] leading-[1.6] text-[#8A8F96]">Designed for athletes and operators. Built on Banister impulse-response modeling. We individualize training load against HRV, sleep debt, and glycogen state. Coaches hold a PhD or equivalent.</p>
</div>
<div className="lg:col-span-7 tech-border bg-[#0a0a0a] p-[1.5rem] flex flex-col justify-center items-center h-[12rem]">
<span className="text-[0.625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.2em] mb-4">Live Preview · VO2Max Target</span>
<div className="text-[3rem] font-doto font-bold text-white leading-none">68.4 <span className="text-[1rem] text-[#8A8F96]">ml/kg</span></div>
</div>
</div>
</div>
</div>

<div className="acc-row border-b border-white/10 group cursor-pointer transition-colors duration-400 hover:bg-white/[0.02]" data-index="2">
<div className="flex flex-col md:flex-row items-start md:items-center py-[3rem] px-[1.5rem] md:px-4 min-h-[8rem] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
<div className="w-full md:w-[50%] flex items-center gap-[2rem] mb-[1.5rem] md:mb-0 relative z-10">
<span className="text-[0.875rem] font-mono-custom text-[#5A5E63] font-bold">03</span>
<span className="text-[clamp(2rem,3.5vw,3.5rem)] tracking-[-0.03em] font-bold uppercase text-white group-hover:pl-4 transition-all duration-500">Longevity</span>
</div>
<div className="w-full md:w-[35%] text-[1.125rem] text-[#8A8F96] mb-[1.5rem] md:mb-0 pr-8 relative z-10">
                            Extending healthspan via cellular optimization.
                        </div>
<div className="w-full md:w-[15%] flex justify-between md:justify-end items-center gap-[1.5rem] relative z-10">
<span className="text-[0.6875rem] font-mono-custom text-white uppercase tracking-[0.2em] border border-white/20 px-2 py-1 rounded">24 WKS</span>
<div className="w-[2.5rem] h-[2.5rem] rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors acc-icon-wrap">
<iconify-icon className="text-xl text-white transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] acc-icon rotate-0" icon="solar:add-linear"></iconify-icon>
</div>
</div>
</div>
<div className="acc-content px-[1.5rem] md:px-4 pb-[4rem]"><div className="h-[12rem] tech-border bg-[#0a0a0a] flex items-center justify-center text-[#5A5E63] font-mono-custom text-xs tracking-widest">DATA LOCKED</div></div>
</div>
</div>
</div>
</section>

<section className="bg-[#020202] py-[12rem] px-[1.5rem] md:px-[3rem] lg:px-[5rem] relative overflow-hidden" id="atlas">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,237,242,0.03)_0%,transparent_70%)]"></div>
<div className="max-w-[90rem] mx-auto flex flex-col items-center relative z-10 sec-reveal">
<div className="mb-[1.5rem] w-full text-center">
<span className="text-[0.6875rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.25em] font-bold border border-white/10 px-3 py-1 rounded-full">05 // Atlas System</span>
</div>
<h2 className="text-fluid-h2 text-white font-bold leading-tight uppercase text-center mb-[1rem]">378 Variables.<br/>One Interface.</h2>
<p className="text-[1.125rem] text-[#8A8F96] text-center mb-[6rem] max-w-[30rem]">Our proprietary dashboard aggregates disparate clinical hardware into a single, unified longitudinal record.</p>

<div className="relative w-full max-w-[60rem] h-[40rem] hidden lg:flex justify-center items-center border border-white/5 tech-border bg-[#050505]">

<div className="scanner-line"></div>

<div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"></div>

<svg className="h-[80%] z-10 opacity-80" style={{filter: 'drop-shadow(0 0 2rem rgba(232,237,242,0.1))'}} viewbox="0 0 200 500">
<path d="M100,20 C115,20 125,35 125,50 C125,65 110,75 100,75 C90,75 75,65 75,50 C75,35 85,20 100,20 Z 
                             M65,85 C90,80 110,80 135,85 C150,90 160,110 160,130 C160,150 150,220 150,220 C150,230 140,240 130,240 L130,170 C125,170 120,180 120,200 L120,270 C120,290 130,380 130,400 C130,420 120,480 120,480 C115,490 105,490 100,480 C95,490 85,490 80,480 C80,480 70,420 70,400 C70,380 80,290 80,270 L80,200 C80,180 75,170 70,170 L70,240 C60,240 50,230 50,220 C50,220 40,150 40,130 C40,110 50,90 65,85 Z" fill="none" stroke="rgba(232,237,242,0.4)" stroke-dasharray="2 4" strokeWidth="1"></path>

<circle className="animate-pulse" cx="100" cy="50" fill="#E8EDF2" r="4"></circle>
<circle className="animate-pulse" cx="100" cy="120" fill="#E8EDF2" r="4" style={{animationDelay: '0.5s'}}></circle>
<circle cx="85" cy="220" fill="#E8EDF2" r="3"></circle>
</svg>


<div className="absolute left-[5%] top-[15%] group cursor-crosshair z-20">
<div className="bg-black/80 backdrop-blur-md border border-white/20 p-[1.5rem] w-[14rem] transition-all duration-300 group-hover:border-white tech-border">
<div className="flex justify-between items-center mb-2">
<span className="text-[0.5625rem] font-mono-custom text-[#8A8F96] uppercase tracking-[0.2em]">Cognitive</span>
<span className="w-2 h-2 bg-green-500 rounded-full animate-status-pulse"></span>
</div>
<div className="text-[2rem] font-doto font-bold text-white leading-none mb-1">98.2</div>
<div className="text-[0.625rem] font-mono-custom text-[#8A8F96] uppercase tracking-[0.1em] border-t border-white/10 pt-2 mt-2 flex justify-between">
<span>Index Score</span> <span className="text-white">+2.4 Δ</span>
</div>
</div>

<svg className="absolute top-[3rem] left-[14rem] w-[8rem] h-[2rem] pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity">
<path d="M0,0 L40,0 L80,30" fill="none" stroke="#E8EDF2" stroke-dasharray="4 4" strokeWidth="1"></path>
</svg>
</div>

<div className="absolute right-[5%] bottom-[20%] group cursor-crosshair z-20">
<div className="bg-black/80 backdrop-blur-md border border-white/20 p-[1.5rem] w-[14rem] transition-all duration-300 group-hover:border-white tech-border">
<div className="flex justify-between items-center mb-2">
<span className="text-[0.5625rem] font-mono-custom text-[#8A8F96] uppercase tracking-[0.2em]">Metabolic</span>
<span className="w-2 h-2 bg-green-500 rounded-full animate-status-pulse"></span>
</div>
<div className="text-[2rem] font-doto font-bold text-white leading-none mb-1">4.2</div>
<div className="text-[0.625rem] font-mono-custom text-[#8A8F96] uppercase tracking-[0.1em] border-t border-white/10 pt-2 mt-2 flex justify-between">
<span>Lactate mM</span> <span className="text-white">-0.8 Δ</span>
</div>
</div>
<svg className="absolute top-[1rem] right-[14rem] w-[6rem] h-[4rem] pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity">
<path d="M60,0 L20,0 L0,-40" fill="none" stroke="#E8EDF2" stroke-dasharray="4 4" strokeWidth="1"></path>
</svg>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden w-full mt-8">
<div className="tech-border bg-[#0a0a0a] p-[1.5rem]">
<div className="text-[0.625rem] font-mono-custom text-[#8A8F96] uppercase mb-[0.5rem] tracking-[0.2em]">Cognitive Index</div>
<div className="text-[2rem] font-doto font-bold text-white mb-[0.5rem]">98.2</div>
<div className="text-xs font-mono-custom text-[#8A8F96]">+2.4 pts</div>
</div>

</div>
</div>
</section>

<section className="bg-[#040404] py-[12rem] px-[1.5rem] md:px-[3rem] lg:px-[5rem] border-y border-white/5" id="lab">
<div className="max-w-[90rem] mx-auto sec-reveal">
<div className="mb-[1.5rem]">
<span className="text-[0.6875rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.25em] font-bold border border-white/10 px-3 py-1 rounded-full">06 // Instrumentation</span>
</div>
<h2 className="text-fluid-h2 text-white font-bold leading-tight uppercase mb-[5rem] max-w-[45rem]">Clinical-grade hardware.<br/>No compromises.</h2>

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto lg:grid-rows-[repeat(2,20rem)] gap-4">

<div className="lg:col-span-2 lg:row-span-2 tech-border bg-[#080808] relative overflow-hidden group cursor-crosshair h-[25rem] lg:h-auto spotlight-card">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80')] bg-cover bg-center grayscale contrast-125 brightness-[0.4] group-hover:brightness-[0.7] group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-[2.5rem] z-20 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-[2.5rem] font-bold text-white leading-none mb-[1rem] uppercase">DEXA Scan</h3>
<div className="text-[0.75rem] font-mono-custom text-white/80 uppercase tracking-[0.2em]">Hologic Horizon W · Low-Dose DXA</div>
</div>
<div className="hidden md:flex flex-col text-right">
<span className="text-[1.5rem] font-doto font-bold text-white">0.2%</span>
<span className="text-[0.5625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.2em]">Margin of Error</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1 lg:row-span-1 tech-border bg-[#080808] relative overflow-hidden group spotlight-card h-[20rem]">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80')] bg-cover bg-center grayscale contrast-125 brightness-[0.4] group-hover:brightness-[0.6] transition-all duration-700"></div>
<div className="absolute bottom-[1.5rem] left-[1.5rem] z-20">
<h3 className="text-[1.5rem] font-bold text-white leading-none mb-[0.5rem] uppercase">CPET Cart</h3>
<div className="text-[0.5625rem] font-mono-custom text-white/80 uppercase tracking-[0.2em]">Cosmed K5</div>
</div>
</div>

<div className="lg:col-span-1 lg:row-span-1 tech-border bg-[#0a0a0a] flex flex-col justify-between p-[2rem] spotlight-card h-[20rem]">
<div className="flex justify-between items-start">
<iconify-icon className="text-3xl text-white" icon="solar:test-tube-linear"></iconify-icon>
<span className="w-2 h-2 bg-white rounded-full"></span>
</div>
<div>
<div className="text-[4rem] font-doto font-bold text-white leading-none mb-[0.5rem] tracking-tight">44</div>
<div className="text-[0.6875rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.2em] leading-relaxed">Venous Analytes<br/>Measured Monthly</div>
</div>
</div>

<div className="lg:col-span-2 lg:row-span-1 tech-border bg-[#0a0a0a] flex items-center p-[2.5rem] spotlight-card h-[20rem] relative overflow-hidden">
<div className="absolute right-[-10%] top-1/2 -translate-y-1/2 text-[15rem] font-doto font-bold text-white/5 select-none pointer-events-none">2.0</div>
<div className="relative z-10 w-full">
<div className="text-[0.6875rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.2em] mb-4">Hyperbaric Oxygen Therapy</div>
<h3 className="text-[2.5rem] font-bold text-white leading-none mb-[1.5rem] uppercase max-w-[20rem]">Certified 2.0 ATA Chamber</h3>
<a className="inline-flex items-center gap-2 text-[0.6875rem] font-mono-custom text-white uppercase tracking-[0.2em] border-b border-white/30 hover:border-white transition-colors pb-1" href="#protocols">View Protocol <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#040404] py-[12rem] px-[1.5rem] md:px-[3rem] lg:px-[5rem] border-y border-white/5" id="evidence">
<div className="max-w-[90rem] mx-auto sec-reveal">
<div className="mb-[1.5rem]">
<span className="text-[0.6875rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.25em] font-bold border border-white/10 px-3 py-1 rounded-full">08 // Evidence</span>
</div>
<h2 className="text-fluid-h2 text-white font-bold leading-tight uppercase mb-[6rem]">The Delta,<br/>Not the Story.</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-[4rem]">

<div className="tech-border bg-[#080808] p-[2.5rem] md:p-[3.5rem] group relative overflow-hidden flex flex-col">
<div className="absolute top-0 right-0 p-[2rem] opacity-20 group-hover:opacity-100 transition-opacity"><iconify-icon className="text-2xl text-white" icon="solar:lock-password-linear"></iconify-icon></div>
<div className="text-[0.625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.2em] mb-[1.5rem] flex gap-4">
<span>Case_ID: 847</span> <span>Track: Longevity</span>
</div>
<p className="text-[1.5rem] font-medium leading-[1.4] text-white mb-[2rem] max-w-[30rem]">
                        "I came in for vanity. I'm staying because my ApoB is 62, my biological age reversed 4.8 years, and I added seven minutes to my Zone-2 baseline."
                    </p>
<div className="text-[0.75rem] font-mono-custom text-[#8A8F96] uppercase tracking-[0.1em] mb-[4rem]">— C.M. · 43 · Founder</div>

<div className="mt-auto border-t border-white/10 pt-[2rem]">
<div className="grid grid-cols-3 gap-4 border-b border-white/5 pb-3 mb-3">
<div className="text-[0.5625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.2em]">Marker</div>
<div className="text-[0.5625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.2em] text-right">Result</div>
<div className="text-[0.5625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.2em] text-right">Delta</div>
</div>
<div className="grid grid-cols-3 gap-4 items-center mb-3">
<div className="text-[0.75rem] font-mono-custom text-white uppercase tracking-[0.1em]">ApoB (mg/dL)</div>
<div className="text-[1.25rem] font-doto font-bold text-white text-right">62</div>
<div className="text-[0.75rem] font-mono-custom text-white text-right">▼ -38%</div>
</div>
<div className="grid grid-cols-3 gap-4 items-center mb-3">
<div className="text-[0.75rem] font-mono-custom text-white uppercase tracking-[0.1em]">Bio Age (Yrs)</div>
<div className="text-[1.25rem] font-doto font-bold text-white text-right">-4.8</div>
<div className="text-[0.75rem] font-mono-custom text-white text-right">✓ VRFD</div>
</div>
<div className="grid grid-cols-3 gap-4 items-center">
<div className="text-[0.75rem] font-mono-custom text-white uppercase tracking-[0.1em]">Zone-2 (W)</div>
<div className="text-[1.25rem] font-doto font-bold text-white text-right">184</div>
<div className="text-[0.75rem] font-mono-custom text-white text-right">▲ +21%</div>
</div>
</div>
</div>

<div className="tech-border bg-[#080808] p-[2.5rem] md:p-[3.5rem] group relative overflow-hidden flex flex-col">
<div className="absolute top-0 right-0 p-[2rem] opacity-20 group-hover:opacity-100 transition-opacity"><iconify-icon className="text-2xl text-white" icon="solar:lock-password-linear"></iconify-icon></div>
<div className="text-[0.625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.2em] mb-[1.5rem] flex gap-4">
<span>Case_ID: 1204</span> <span>Track: Performance</span>
</div>
<p className="text-[1.5rem] font-medium leading-[1.4] text-white mb-[2rem] max-w-[30rem]">
                        "Coach handed me a PDF the size of a novel. Twelve weeks later, I shaved 11 minutes off my 100k and my HRV finally stopped crashing on race week."
                    </p>
<div className="text-[0.75rem] font-mono-custom text-[#8A8F96] uppercase tracking-[0.1em] mb-[4rem]">— S.R. · 38 · Ultra-Athlete</div>
<div className="mt-auto border-t border-white/10 pt-[2rem]">
<div className="grid grid-cols-3 gap-4 border-b border-white/5 pb-3 mb-3">
<div className="text-[0.5625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.2em]">Marker</div>
<div className="text-[0.5625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.2em] text-right">Result</div>
<div className="text-[0.5625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.2em] text-right">Delta</div>
</div>
<div className="grid grid-cols-3 gap-4 items-center mb-3">
<div className="text-[0.75rem] font-mono-custom text-white uppercase tracking-[0.1em]">100K Pace</div>
<div className="text-[1.25rem] font-doto font-bold text-white text-right">-11:04</div>
<div className="text-[0.75rem] font-mono-custom text-white text-right">▼ PB</div>
</div>
<div className="grid grid-cols-3 gap-4 items-center mb-3">
<div className="text-[0.75rem] font-mono-custom text-white uppercase tracking-[0.1em]">HRV RMSSD</div>
<div className="text-[1.25rem] font-doto font-bold text-white text-right">87.2</div>
<div className="text-[0.75rem] font-mono-custom text-white text-right">▲ +28%</div>
</div>
<div className="grid grid-cols-3 gap-4 items-center">
<div className="text-[0.75rem] font-mono-custom text-white uppercase tracking-[0.1em]">VO2 Max</div>
<div className="text-[1.25rem] font-doto font-bold text-white text-right">68.4</div>
<div className="text-[0.75rem] font-mono-custom text-white text-right">▲ +4.2</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#040404] py-[12rem] px-[1.5rem] md:px-[3rem] lg:px-[5rem] relative" id="contact">
<div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[6rem] items-start sec-reveal">

<div className="lg:col-span-5 flex flex-col">
<div className="mb-[1.5rem]">
<span className="text-[0.6875rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.25em] font-bold border border-white/10 px-3 py-1 rounded-full">11 // Initiate</span>
</div>
<h2 className="text-fluid-h2 text-white font-bold leading-tight uppercase mb-[2rem]">Secure Your<br/>Intake.</h2>
<p className="text-[1.125rem] text-[#8A8F96] leading-[1.6] max-w-[28rem] mb-[4rem]">
                    We onboard exactly 12 new members per quarter to maintain clinical standards. Intake sessions are held at our Zurich facility.
                </p>
<div className="flex flex-col gap-[2rem] border-l border-white/20 pl-6">
<div>
<div className="text-[0.5625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.2em] mb-1">Coordinates</div>
<div className="text-[0.875rem] text-white uppercase font-bold tracking-wide">Seefeldstrasse 214, 8008 Zürich</div>
</div>
<div>
<div className="text-[0.5625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.2em] mb-1">Direct Line</div>
<div className="text-[0.875rem] text-white uppercase font-bold tracking-wide">+41 44 555 01 42</div>
</div>
</div>
</div>

<div className="lg:col-span-7 tech-border bg-[#080808] p-[2.5rem] md:p-[4rem]">
<div className="flex justify-between items-center mb-[3rem] border-b border-white/10 pb-[1.5rem]">
<span className="text-[0.6875rem] font-mono-custom text-white uppercase tracking-[0.2em] font-bold">Encrypted Intake Portal</span>
<span className="w-2 h-2 bg-green-500 rounded-full animate-status-pulse"></span>
</div>
<form className="flex flex-col gap-[2.5rem]" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-[2.5rem]">
<div className="flex flex-col relative group">
<label className="text-[0.5625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.2em] mb-2 group-focus-within:text-white transition-colors">Applicant Name</label>
<input className="w-full bg-transparent border-b border-white/20 pb-2 text-[1rem] text-white focus:outline-none focus:border-white transition-colors font-medium placeholder:text-[#333]" placeholder="J. DOE" required="" type="text"/>
</div>
<div className="flex flex-col relative group">
<label className="text-[0.5625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.2em] mb-2 group-focus-within:text-white transition-colors">Secure Email</label>
<input className="w-full bg-transparent border-b border-white/20 pb-2 text-[1rem] text-white focus:outline-none focus:border-white transition-colors font-medium placeholder:text-[#333]" placeholder="SECURE@DOMAIN.COM" required="" type="email"/>
</div>
</div>
<div className="flex flex-col relative group">
<label className="text-[0.5625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.2em] mb-2 group-focus-within:text-white transition-colors">Target Track (Optional)</label>
<select className="w-full bg-transparent border-b border-white/20 pb-2 text-[1rem] text-white focus:outline-none focus:border-white transition-colors font-medium appearance-none cursor-pointer">
<option className="bg-[#080808]" value="none">UNDECIDED / PENDING AUDIT</option>
<option className="bg-[#080808]" value="performance">PERFORMANCE TRACK</option>
<option className="bg-[#080808]" value="longevity">LONGEVITY TRACK</option>
</select>
</div>
<div className="flex flex-col relative group">
<label className="text-[0.5625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.2em] mb-2 group-focus-within:text-white transition-colors">Primary Objective</label>
<textarea className="w-full bg-transparent border-b border-white/20 pb-2 text-[1rem] text-white focus:outline-none focus:border-white transition-colors font-medium resize-none placeholder:text-[#333]" placeholder="DEFINE YOUR CATALYST..." required="" rows="2"></textarea>
</div>
<button className="w-full mt-4 h-[4rem] bg-white text-black font-bold text-[0.875rem] font-mono-custom uppercase tracking-[0.2em] hover:bg-[#E8EDF2] hover:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-3 group" type="submit">
                        Submit Application <iconify-icon className="text-lg group-hover:rotate-12 transition-transform" icon="solar:lock-password-linear"></iconify-icon>
</button>
<div className="text-center mt-2">
<span className="text-[0.5625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.2em]">All data is end-to-end encrypted under Swiss privacy law.</span>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-[#020202] py-[3rem] px-[1.5rem] border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-[0.625rem] font-mono-custom text-[#5A5E63] uppercase tracking-[0.2em]">© 2026 MERIDYN LABS · ZÜRICH</div>
<div className="flex gap-6">
<a className="text-[0.625rem] font-mono-custom text-[#5A5E63] hover:text-white uppercase tracking-[0.2em] transition-colors" href="#">Imprint</a>
<a className="text-[0.625rem] font-mono-custom text-[#5A5E63] hover:text-white uppercase tracking-[0.2em] transition-colors" href="#">Data Privacy</a>
<a className="text-[0.625rem] font-mono-custom text-[#5A5E63] hover:text-white uppercase tracking-[0.2em] transition-colors" href="#">Terms</a>
</div>
</footer>



    </>
  );
}
