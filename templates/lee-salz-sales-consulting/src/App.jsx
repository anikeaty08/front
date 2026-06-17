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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['Space Grotesk', 'monospace'],
tech: ['Share Tech Mono', 'monospace']
},
colors: {
luxota: {
bg: '#020203',
card: '#08080A',
border: '#ffffff08',
accent: '#4FD1C5',
accentGlow: '#4FD1C540',
dim: '#9ca3af',
surface: '#ffffff03'
}
},
letterSpacing: {
tighter: '-0.04em',
tightest: '-0.07em'
},
backgroundImage: {
'aurora': 'conic-gradient(from 180deg at 50% 50%, #0A0A0C 0deg, #111827 120deg, #0A0A0C 360deg)',
},
animation: {
'blob': 'blob 10s infinite',
'text-shimmer': 'text-shimmer 3s ease-out infinite alternate',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
'text-shimmer': {
'0%': { backgroundPosition: '0% 50%' },
'100%': { backgroundPosition: '100% 50%' },
},
'float': {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
},
transitionTimingFunction: {
'expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            // 0. PRELOADER
            const loaderBar = document.getElementById("loader-bar");
            const counterElement = document.getElementById("counter");
            const preloader = document.getElementById("preloader");
            const preloaderTl = gsap.timeline();

            preloaderTl.to(loaderBar, { scaleX: 1, duration: 1.5, ease: "power2.inOut" })
            .to(counterElement, { innerText: 100, duration: 1.5, snap: { innerText: 1 }, ease: "power2.inOut" }, "<")
            .to(preloader, { yPercent: -100, duration: 1, ease: "power4.inOut", delay: 0.2 })
            .fromTo(".reveal-nav", { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.5")
            .to(".reveal-text", { y: "0%", duration: 1.2, stagger: 0.05, ease: "power4.out" }, "-=0.8")
            .to(".reveal-hero-fade", { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }, "-=0.8");

            // 1. Lenis (Fixed GSAP Sync)
            const lenis = new Lenis({
                duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                direction: 'vertical', smooth: true,
            });
            
            lenis.on('scroll', ScrollTrigger.update)
            gsap.ticker.add((time)=>{ lenis.raf(time * 1000) })
            gsap.ticker.lagSmoothing(0)
            
            // 2. Custom Cursor
            const cursorDot = document.querySelector('.cursor-dot');
            const cursorOutline = document.querySelector('.cursor-outline');
            const cursorText = document.querySelector('.cursor-text');
            const cards = document.querySelectorAll('.spotlight-card');
            let mouseX = 0, mouseY = 0;

            window.addEventListener('mousemove', (e) => {
                mouseX = e.clientX; mouseY = e.clientY;
                cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
                gsap.to(cursorOutline, { x: mouseX, y: mouseY, duration: 0.15, ease: "power2.out" });
                
                // Update CSS variables for all cards
                cards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    card.style.setProperty('--mouse-x', `${mouseX - rect.left}px`);
                    card.style.setProperty('--mouse-y', `${mouseY - rect.top}px`);
                });
            });

            // 3. IMPROVED SCROLL INTERACTIONS
            let mm = gsap.matchMedia();

            mm.add("(min-width: 1024px)", () => {
                
                // Section 3: Narrative Text Reveal
                const narrativeSection = document.getElementById("narrative-section");
                const words = gsap.utils.toArray(".highlight-word");
                
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: narrativeSection,
                        start: "top top", 
                        end: "+=150%", 
                        pin: true,
                        anticipatePin: 1, 
                        scrub: 1, 
                    }
                });

                tl.fromTo(words, 
                    { opacity: 0.1, filter: "blur(8px)", y: 20, scale: 0.95 },
                    { 
                        opacity: 1, 
                        filter: "blur(0px)", 
                        y: 0, 
                        scale: 1, 
                        stagger: 0.1, 
                        color: (i, target) => target.classList.contains("text-luxota-accent") ? "#4FD1C5" : "#ffffff", 
                        duration: 1,
                        ease: "power2.out"
                    }
                );

                // Section 4: Horizontal Scroll
                const track = document.getElementById("cards-track");
                const pinSection = document.getElementById("architecture-pin");
                const cardGraphics = document.querySelectorAll(".card-graphic-wrapper > div");
                
                const getScrollAmount = () => {
                    let trackWidth = track.scrollWidth;
                    let viewportWidth = window.innerWidth;
                    return -(trackWidth - viewportWidth + 100);
                };

                gsap.to(track, {
                    x: getScrollAmount,
                    ease: "none",
                    scrollTrigger: {
                        trigger: pinSection,
                        start: "top top",
                        end: "+=3000",
                        pin: true,
                        scrub: 1,
                        invalidateOnRefresh: true, 
                    }
                });

                // Parallax Effect
                gsap.to(cardGraphics, {
                    x: -80,
                    ease: "none",
                    scrollTrigger: {
                        trigger: pinSection,
                        start: "top top",
                        end: "+=3000",
                        scrub: 1
                    }
                });
            });

            // Commercial Model Reveal
            gsap.utils.toArray('.reveal-commercial').forEach((el, i) => {
                gsap.to(el, {
                    scrollTrigger: {
                        trigger: "#commercial",
                        start: "top 80%",
                    },
                    y: 0, opacity: 1, duration: 1, delay: i * 0.1, ease: "power3.out"
                });
            });
            
            gsap.to('.reveal-visual', {
                scrollTrigger: {
                    trigger: "#commercial",
                    start: "top 80%",
                },
                opacity: 1, scale: 1, duration: 1.2, ease: "power3.out"
            });

            // 4. Cursor Hover Interactions
            const archCards = document.querySelectorAll('#cards-track .spotlight-card');

            archCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    gsap.to(cursorOutline, {
                        width: 110,
                        height: 110,
                        backgroundColor: "#ffffff",
                        borderColor: "transparent",
                        duration: 0.4, ease: "power3.out"
                    });
                    gsap.to(cursorDot, { opacity: 0, duration: 0.2 });
                    gsap.to(cursorText, { opacity: 1, scale: 1, duration: 0.3, delay: 0.1 });
                });

                card.addEventListener('mouseleave', () => {
                    gsap.to(cursorOutline, {
                        width: 40, height: 40,
                        backgroundColor: "transparent",
                        borderColor: "rgba(255, 255, 255, 0.15)",
                        backdropFilter: "blur(2px)",
                        duration: 0.4, ease: "power3.out"
                    });
                    gsap.to(cursorDot, { opacity: 1, duration: 0.2 });
                    gsap.to(cursorText, { opacity: 0, scale: 0.5, duration: 0.2 });
                });
            });

            // 5. Maturity Bar
            gsap.to("#maturity-bar", {
                height: "100%", ease: "none",
                scrollTrigger: { trigger: "#differentiators", start: "top center", end: "bottom center", scrub: true }
            });

            // 6. FAQ (Testimonials)
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                const button = item.querySelector('button');
                const content = item.querySelector('.faq-content');
                const icon = item.querySelector('.faq-icon');
                button.addEventListener('click', () => {
                    const isOpen = item.classList.contains('active');
                    faqItems.forEach(otherItem => {
                        const otherContent = otherItem.querySelector('.faq-content');
                        const otherIcon = otherItem.querySelector('.faq-icon');
                        gsap.to(otherContent, { height: 0, opacity: 0, duration: 0.3 });
                        gsap.to(otherIcon, { rotation: 0, duration: 0.3 });
                        otherItem.classList.remove('active');
                    });
                    if (!isOpen) {
                        gsap.to(content, { height: 'auto', opacity: 1, duration: 0.4 });
                        gsap.to(icon, { rotation: 180, duration: 0.3 });
                        item.classList.add('active');
                    }
                });
            });

            // 7. Initialize Particles
            particlesJS('particles-js', {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: "#ffffff" },
                    shape: { type: "circle" },
                    opacity: { value: 0.2, random: false },
                    size: { value: 3, random: true },
                    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.1, width: 1 },
                    move: { enable: true, speed: 0.5, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
                },
                interactivity: {
                    detect_on: "window",
                    events: { 
                        onhover: { enable: true, mode: "grab" }, 
                        onclick: { enable: true, mode: "push" }, 
                        resize: true 
                    },
                    modes: { 
                        grab: { distance: 200, line_linked: { opacity: 0.3 } }, 
                        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, 
                        repulse: { distance: 200, duration: 0.4 }, 
                        push: { particles_nb: 4 }, 
                        remove: { particles_nb: 2 } 
                    }
                },
                retina_detect: true
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
      

<div className="ambient-light">
<div className="blob blob-1"></div>
<div className="blob blob-2"></div>
<div className="blob blob-3"></div>
</div>


<div id="preloader">
<div className="flex flex-col items-center justify-center gap-6 text-center z-50">
<div className="relative">
<div className="text-[12rem] font-medium leading-none tracking-tighter text-white/5 relative z-10 font-sans">
<span id="counter">100</span>%
                </div>
<div className="absolute inset-0 bg-gradient-to-t from-luxota-bg via-transparent to-transparent z-20"></div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="flex items-center gap-3 text-xs font-mono text-luxota-accent uppercase tracking-[0.2em]">
<iconify-icon className="animate-spin text-lg" icon="solar:refresh-circle-linear"></iconify-icon>
<span>Architecture Initialization</span>
</div>
<div className="w-48 h-[1px] bg-white/10 mt-2 overflow-hidden rounded-full">
<div className="w-full h-full bg-gradient-to-r from-luxota-accent to-white origin-left scale-x-0" id="loader-bar"></div>
</div>
</div>
</div>
</div><div className="cursor-dot hidden md:block"></div>
<div className="cursor-outline hidden md:flex" style={{borderColor: 'rgba(255, 255, 255, 0.15)', backgroundColor: 'transparent', height: '40px', width: '40px', backdropFilter: 'blur(2px)'}}>
<span className="cursor-text">Read more</span>
</div>

<div className="noise"></div>


<nav className="fixed top-8 left-0 right-0 z-50 flex justify-center pointer-events-none opacity-0 reveal-nav">
<div className="pointer-events-auto bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 flex items-center gap-1 shadow-2xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08]">
<a className="px-6 py-2.5 text-xs font-medium text-white/70 hover:text-white rounded-full hover:bg-white/5 transition-all" href="#process">Process</a>
<a className="px-6 py-2.5 text-xs font-medium text-white/70 hover:text-white rounded-full hover:bg-white/5 transition-all" href="#differentiators">Methodology</a>
<div className="w-px h-4 bg-white/10 mx-2"></div>
<a className="group px-6 py-2.5 text-xs font-bold text-luxota-bg bg-white rounded-full hover:bg-luxota-accent transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]" href="#calendly">
                Consultation <span className="hidden group-hover:inline-block ml-1 transition-all">→</span>
</a>
</div>
</nav>

<div className="fixed top-9 left-8 z-40 mix-blend-difference pointer-events-none opacity-0 reveal-nav">
<div className="text-sm font-semibold tracking-tight text-white flex items-center gap-3">
<div className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-luxota-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-luxota-accent shadow-[0_0_15px_#4FD1C5]"></span>
</div>
<span className="tracking-[0.2em] text-xs">SALES ARCHITECTS®</span>
</div>
</div><section className="relative h-screen flex flex-col items-center justify-center overflow-hidden" id="os">
<div className="perspective-grid opacity-30"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-luxota-accent/10 rounded-full blur-[150px] pointer-events-none"></div>

<div className="absolute inset-0 -z-10" id="particles-js"><canvas className="particles-js-canvas-el" height="826" style={{width: '100%', height: '100%'}} width="1421"></canvas></div>
<div className="relative z-10 text-center max-w-7xl px-6 mt-16">
<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-10 opacity-0 reveal-hero-fade shadow-lg">
<span className="w-1.5 h-1.5 bg-luxota-accent rounded-full shadow-[0_0_10px_#4FD1C5]"></span>
<span className="text-[10px] uppercase tracking-widest text-white/80 font-medium">Strategic Advisory</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-[7rem] font-medium tracking-tightest text-white leading-[0.9] mb-10">
<div className="overflow-hidden py-2"><span className="block reveal-text drop-shadow-2xl">Win More Deals at</span></div>
<div className="overflow-hidden flex justify-center gap-4 items-center flex-wrap py-2">
<span className="block reveal-text text-white/30 italic font-serif tracking-tight pr-4">the</span>
<span className="block reveal-text text-gradient-premium">Prices You Want®</span>
</div>
</h1>
<div className="text-lg md:text-xl text-luxota-dim max-w-3xl mx-auto leading-relaxed mb-14 font-light opacity-0 reveal-hero-fade translate-y-4 space-y-4">
<p>Build a structured, documented sales process with embedded Sales Differentiation® and measurable behaviors that create consistent performance.</p>
<p className="text-base text-white/60">Most sales teams struggle because they lack defined sales architecture. Training alone does not create discipline. In this process, you’ll learn how structured Sales Playbooks and Sales Differentiation® create measurable, consistent results.</p>
</div>
<div className="flex flex-col sm:flex-row justify-center items-center gap-6 opacity-0 reveal-hero-fade delay-200">
<a className="group relative px-9 py-4 bg-white text-luxota-bg rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)]" href="#calendly">
<div className="btn-glow"></div>
<span className="relative z-10 text-sm font-bold flex items-center gap-2">
                        Schedule Consultation
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
<div className="absolute inset-0 bg-luxota-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo"></div>
</a>
</div>
</div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 reveal-hero-fade delay-500 z-20">
<span className="text-[9px] text-white/30 tracking-[0.3em] uppercase">Scroll to explore</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
</div>
</section>

<section className="py-40 relative z-10 px-4 md:px-6" id="trust">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-4 flex flex-col justify-center p-6 lg:sticky lg:top-32 self-start">
<div className="inline-flex items-center gap-3 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-luxota-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-luxota-accent"></span>
</span>
<span className="text-xs text-luxota-accent font-mono tracking-[0.2em] uppercase">The Structural Gap</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
                        Why Sales Teams <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Underperform.</span>
</h2>
<p className="text-luxota-dim text-base mb-10 leading-relaxed border-l border-white/10 pl-6">
                        Without a documented architecture, sales organizations rely on individual heroics rather than a measurable, scalable system.
                    </p>
</div>

<div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="spotlight-card rounded-[2rem] p-10 flex flex-col justify-between group cursor-none h-full min-h-[400px]" style={{'--mouse-x': '-85.15625px', '--mouse-y': '-883px'}}>
<div className="absolute right-0 top-0 p-10 opacity-10 transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-4">
<iconify-icon className="text-[12rem] text-white" icon="solar:graph-down-linear"></iconify-icon>
</div>
<div className="relative z-10">
<div className="flex items-start gap-1 mb-6">
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
<iconify-icon className="text-2xl text-luxota-accent" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
</div>
<div className="text-2xl text-white font-medium mt-2 mb-4 tracking-tight">Inconsistent Sales Performance</div>
<ul className="space-y-3 text-sm text-luxota-dim leading-relaxed">
<li className="flex gap-3"><span className="text-luxota-accent">—</span> Results vary rep to rep.</li>
<li className="flex gap-3"><span className="text-luxota-accent">—</span> No clearly defined sales process.</li>
<li className="flex gap-3"><span className="text-luxota-accent">—</span> Forecasts lack reliability.</li>
</ul>
</div>
<div className="relative w-full h-1.5 bg-white/5 rounded-full mt-10 overflow-hidden">
<div className="absolute inset-0 bg-luxota-accent/20"></div>
<div className="h-full bg-luxota-accent w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[1.5s] ease-expo"></div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="spotlight-card rounded-[2rem] p-10 flex flex-col justify-center group cursor-none min-h-[220px]" style={{'--mouse-x': '-519.828125px', '--mouse-y': '-883px'}}>
<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-luxota-accent animate-pulse"></span>
<span className="text-xs font-mono text-luxota-accent uppercase tracking-wider">Commoditization</span>
</div>
<div className="text-xl font-medium text-white mb-4">Weak Differentiation</div>
<ul className="space-y-2 text-sm text-luxota-dim leading-relaxed">
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-white/40" icon="solar:alt-arrow-right-linear"></iconify-icon> Conversations focus on product.</li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-white/40" icon="solar:alt-arrow-right-linear"></iconify-icon> Prospects compare on price.</li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-white/40" icon="solar:alt-arrow-right-linear"></iconify-icon> Margins compress.</li>
</ul>
</div>
</div>

<div className="spotlight-card rounded-[2rem] p-10 flex-1 min-h-[240px] flex flex-col justify-end group cursor-none" style={{'--mouse-x': '-519.828125px', '--mouse-y': '-1149.25px'}}>
<div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-1000 bg-[radial-gradient(circle_at_bottom_right,rgba(79,209,197,0.4),transparent_70%)]"></div>
<div className="relative z-10 bg-gradient-to-t from-[#08080A] via-[#08080A]/80 to-transparent pt-6">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-full bg-white/5 border border-white/10">
<iconify-icon className="text-luxota-accent text-lg" icon="solar:ruler-cross-pen-linear"></iconify-icon>
</div>
<span className="text-xl font-medium text-white">No Measurable Discipline</span>
</div>
<ul className="space-y-2 text-sm text-luxota-dim leading-relaxed">
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-white/40" icon="solar:alt-arrow-right-linear"></iconify-icon> Undefined stage criteria.</li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-white/40" icon="solar:alt-arrow-right-linear"></iconify-icon> Managers cannot inspect behaviors.</li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-white/40" icon="solar:alt-arrow-right-linear"></iconify-icon> Coaching becomes reactive.</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '20', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1421px', height: '2065px', padding: '0px 0px 1239px'}}><section className="h-screen flex items-center justify-center bg-luxota-bg relative overflow-hidden z-20" id="narrative-section" style={{inset: '0px auto auto 0px', margin: '0px', maxWidth: '1421px', width: '1421px', maxHeight: '826px', height: '826px', padding: '0px'}}>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,209,197,0.05),transparent_60%)] pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 text-center relative z-10" id="narrative-content">
<p className="text-4xl md:text-6xl lg:text-8xl font-normal leading-tight tracking-tight text-white flex flex-wrap justify-center gap-x-6 gap-y-4" id="scrolly-text">
<span className="highlight-word opacity-20 blur-sm" style={{filter: 'blur(8px)', color: 'rgb(255, 255, 255)'}}>Most</span>
<span className="highlight-word opacity-20 blur-sm" style={{filter: 'blur(8px)', color: 'rgb(255, 255, 255)'}}>sales</span>
<span className="highlight-word opacity-20 blur-sm" style={{filter: 'blur(8px)', color: 'rgb(255, 255, 255)'}}>teams</span>
<span className="highlight-word opacity-20 blur-sm" style={{filter: 'blur(8px)', color: 'rgb(255, 255, 255)'}}>sell</span>
<span className="highlight-word opacity-20 blur-sm text-white font-medium" style={{filter: 'blur(8px)', color: 'rgb(255, 255, 255)'}}>fragmented</span>
<span className="highlight-word opacity-20 blur-sm text-white font-medium" style={{filter: 'blur(8px)', color: 'rgb(255, 255, 255)'}}>tactics.</span>
<span className="highlight-word opacity-20 blur-sm" style={{filter: 'blur(8px)', color: 'rgb(255, 255, 255)'}}>Sales</span>
<span className="highlight-word opacity-20 blur-sm" style={{filter: 'blur(8px)', color: 'rgb(255, 255, 255)'}}>Architects®</span>
<span className="highlight-word opacity-20 blur-sm" style={{filter: 'blur(8px)', color: 'rgb(255, 255, 255)'}}>builds</span>
<span className="highlight-word opacity-20 blur-sm text-luxota-accent" style={{filter: 'blur(8px)', color: 'rgb(79, 209, 197)'}}>discipline.</span>
<span className="highlight-word opacity-20 blur-sm" style={{filter: 'blur(8px)', color: 'rgb(255, 255, 255)'}}>We</span>
<span className="highlight-word opacity-20 blur-sm" style={{filter: 'blur(8px)', color: 'rgb(255, 255, 255)'}}>don't</span>
<span className="highlight-word opacity-20 blur-sm" style={{filter: 'blur(8px)', color: 'rgb(255, 255, 255)'}}>just</span>
<span className="highlight-word opacity-20 blur-sm" style={{filter: 'blur(8px)', color: 'rgb(255, 255, 255)'}}>train;</span>
<span className="highlight-word opacity-20 blur-sm" style={{filter: 'blur(8px)', color: 'rgb(255, 255, 255)'}}>we</span>
<span className="highlight-word opacity-20 blur-sm text-luxota-accent italic font-serif" style={{filter: 'blur(8px)', color: 'rgb(79, 209, 197)'}}>engineer</span>
<span className="highlight-word opacity-20 blur-sm text-luxota-accent italic font-serif" style={{filter: 'blur(8px)', color: 'rgb(79, 209, 197)'}}>scalability.</span>
</p>
</div>
</section></div>

<div className="relative z-30 bg-luxota-bg" id="architecture-wrapper">
<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1421px', height: '3826px', padding: '0px 0px 3000px'}}><section className="hidden lg:block h-screen relative" id="architecture-pin" style={{inset: '0px auto auto 0px', margin: '0px', maxWidth: '1421px', width: '1421px', maxHeight: '826px', height: '826px', padding: '0px'}}>
<div className="h-full w-full overflow-hidden bg-luxota-bg flex flex-col justify-center border-t border-white/5">
<div className="absolute top-12 left-0 w-full px-12 flex justify-between items-end z-20">
<div className="">
<span className="text-xs text-luxota-accent font-mono mb-3 block tracking-widest">[ 02 — ARCHITECTURE PROCESS ]</span>
<h2 className="text-4xl font-medium text-white tracking-tight">The 3-Step Execution</h2>
</div>
<div className="flex items-center gap-3 text-white/30">
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
<iconify-icon className="animate-bounce text-lg" icon="solar:mouse-circle-linear"></iconify-icon>
</div>
<span className="text-xs font-mono tracking-widest">SCROLL TO EXPLORE</span>
</div>
</div>
<div className="flex gap-16 px-24 pl-[20vw] items-center h-full w-max" id="cards-track">

<div className="w-[70vw] max-w-[900px] h-[65vh] spotlight-card rounded-[2.5rem] p-16 shrink-0 relative flex overflow-hidden border border-white/10 bg-[#050507]" style={{'--mouse-x': '132px', '--mouse-y': '-3767.546875px'}}>
<div className="w-5/12 flex flex-col justify-between relative z-10 h-full">
<div>
<div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-10 shadow-xl backdrop-blur-md text-luxota-accent font-mono font-bold text-xl">
                                    STEP 1
                                </div>
<h3 className="text-5xl text-white font-medium mb-6 tracking-tight">Diagnose the Sales Architecture</h3>
<p className="text-lg text-luxota-dim leading-relaxed">
                                    Assess current process, stage definitions, and differentiation gaps. We locate exactly where performance leaks occur.
                                </p>
</div>
</div>
<div className="w-7/12 absolute right-0 top-0 bottom-0 bg-gradient-to-l from-white/[0.02] to-transparent flex items-center justify-center overflow-hidden card-graphic-wrapper">
<div className="w-80 h-[28rem] border border-white/10 rounded-2xl relative bg-black/40 backdrop-blur-xl rotate-6 translate-x-12 shadow-2xl transition-transform duration-700 hover:rotate-3">
<div className="absolute top-6 left-6 right-6 h-4 bg-white/10 rounded-full"></div>
<div className="absolute top-16 left-6 w-16 h-16 bg-luxota-accent/20 rounded-full blur-2xl"></div>
<div className="absolute top-16 left-6 w-12 h-12 bg-luxota-accent rounded-full shadow-[0_0_20px_#4FD1C540] flex items-center justify-center"><iconify-icon className="text-white text-xl" icon="solar:magnifer-linear"></iconify-icon></div>
<div className="absolute bottom-6 left-6 right-6 h-40 bg-white/5 rounded-xl border border-white/5"></div>
</div>
</div>
</div>

<div className="w-[70vw] max-w-[900px] h-[65vh] spotlight-card rounded-[2.5rem] p-16 shrink-0 relative flex overflow-hidden border border-white/10 bg-[#050507]" style={{'--mouse-x': '-832px', '--mouse-y': '-3767.546875px'}}>
<div className="w-5/12 flex flex-col justify-between relative z-10 h-full">
<div className="">
<div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-10 shadow-xl backdrop-blur-md text-luxota-accent font-mono font-bold text-xl">
                                    STEP 2
                                </div>
<h3 className="text-5xl text-white font-medium mb-6 tracking-tight">Build the Custom Sales Playbook</h3>
<p className="text-lg text-luxota-dim leading-relaxed">
                                    Document defined stages, measurable behaviors, and advancement criteria into a comprehensive execution framework.
                                </p>
</div>
</div>
<div className="w-7/12 absolute right-0 top-0 bottom-0 bg-gradient-to-l from-white/[0.02] to-transparent flex items-center justify-center overflow-hidden card-graphic-wrapper">
<div className="relative w-full h-full flex items-center justify-center">
<div className="absolute w-64 h-64 border border-luxota-accent/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute w-96 h-96 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="w-16 h-16 bg-[#0A0A0C] border border-white/10 rounded-xl shadow-[0_0_30px_#4FD1C540] flex items-center justify-center"><iconify-icon className="text-luxota-accent text-3xl" icon="solar:book-bookmark-linear"></iconify-icon></div>
</div>
</div>
</div>

<div className="w-[70vw] max-w-[900px] h-[65vh] spotlight-card rounded-[2.5rem] p-16 shrink-0 relative flex overflow-hidden border border-white/10 bg-[#050507]" style={{'--mouse-x': '-1796px', '--mouse-y': '-3767.546875px'}}>
<div className="w-5/12 flex flex-col justify-between relative z-10 h-full">
<div>
<div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-10 shadow-xl backdrop-blur-md text-luxota-accent font-mono font-bold text-xl">
                                    STEP 3
                                </div>
<h3 className="text-5xl text-white font-medium mb-6 tracking-tight">Reinforce Through Coaching &amp; Sales Differentiation®</h3>
<p className="text-lg text-luxota-dim leading-relaxed">
                                    Embed discipline and structured differentiation into daily execution to ensure consistency and continuous improvement.
                                </p>
</div>
</div>
<div className="w-7/12 absolute right-0 top-0 bottom-0 bg-gradient-to-l from-white/[0.02] to-transparent flex items-center justify-center overflow-hidden card-graphic-wrapper">
<div className="w-64 h-80 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-4 p-6 shadow-2xl backdrop-blur-lg">
<div className="h-3 w-full bg-white/10 rounded-full"></div>
<div className="h-3 w-2/3 bg-white/10 rounded-full"></div>
<div className="mt-auto h-12 w-full bg-luxota-accent/10 border border-luxota-accent/20 rounded-xl flex items-center justify-center gap-2 text-xs text-luxota-accent font-mono tracking-widest">
<iconify-icon className="text-lg" icon="solar:chart-square-linear"></iconify-icon> EXECUTION
                                </div>
</div>
</div>
</div>
</div>
</div>
</section></div>
</div>

<section className="block lg:hidden px-6 py-20 space-y-8 bg-luxota-bg">
<span className="text-xs text-luxota-accent font-mono mb-2 block tracking-widest">[ 02 — ARCHITECTURE PROCESS ]</span>
<div className="spotlight-card rounded-3xl p-8 border border-white/10" style={{'--mouse-x': '420px', '--mouse-y': '103px'}}>
<h3 className="text-2xl text-white font-medium mb-2">Step 1: Diagnose</h3>
<p className="text-sm text-luxota-dim">Assess current process, stage definitions, and differentiation gaps.</p>
</div>
<div className="spotlight-card rounded-3xl p-8 border border-white/10" style={{'--mouse-x': '420px', '--mouse-y': '103px'}}>
<h3 className="text-2xl text-white font-medium mb-2">Step 2: Build Playbook</h3>
<p className="text-sm text-luxota-dim">Document defined stages, measurable behaviors, and advancement criteria.</p>
</div>
<div className="spotlight-card rounded-3xl p-8 border border-white/10" style={{'--mouse-x': '420px', '--mouse-y': '103px'}}>
<h3 className="text-2xl text-white font-medium mb-2">Step 3: Reinforce</h3>
<p className="text-sm text-luxota-dim">Embed discipline and structured differentiation into daily execution.</p>
</div>
</section>

<section className="py-40 bg-luxota-bg border-t border-white/5 relative z-20" id="differentiators">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
<div className="lg:sticky lg:top-32 self-start">
<span className="text-xs text-luxota-accent font-mono mb-6 block tracking-widest">[ 03 — OUR DIFFERENCE ]</span>
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-8 leading-[1.1]">
                        Architecture <br/> Over Tactics
                    </h2>
<p className="text-luxota-dim text-lg leading-relaxed mb-12">
                        Training alone does not change behavior. Real performance requires foundational structure. We implement strict, measurable architecture to ensure every sales interaction is disciplined and differentiated. <br/><br/> <span className="text-white/80 border-l-2 border-luxota-accent pl-4 block">Discipline creates consistency. Consistency drives results.</span>
</p>
<a className="group inline-flex items-center gap-3 text-white text-sm font-medium hover:text-luxota-accent transition-colors" href="#calendly">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-luxota-accent group-hover:bg-luxota-accent/10 transition-all bg-white/5">
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<span className="border-b border-transparent group-hover:border-luxota-accent/50 transition-all">Architect My Sales Process</span>
</a>
</div>
<div className="relative pl-12 border-l border-white/10 space-y-16">
<div className="absolute left-[-1.5px] top-0 bottom-0 w-[3px] bg-white/5">
<div className="w-full h-0 bg-luxota-accent shadow-[0_0_15px_#4FD1C5]" id="maturity-bar" style={{height: '0%'}}></div>
</div>
<div className="group cursor-pointer transition-all hover:translate-x-2">
<div className="text-xs font-mono text-luxota-dim mb-2 group-hover:text-luxota-accent transition-colors">01</div>
<h3 className="text-2xl text-white mb-2 font-medium">Custom Sales Playbooks</h3>
<p className="text-base text-luxota-dim/60">Documented, stage-specific strategies tailored to your exact market environment rather than generic advice.</p>
</div>
<div className="group cursor-pointer transition-all hover:translate-x-2">
<div className="text-xs font-mono text-luxota-dim mb-2 group-hover:text-luxota-accent transition-colors">02</div>
<h3 className="text-2xl text-white mb-2 font-medium">Sales Differentiation® Strategy</h3>
<p className="text-base text-luxota-dim/60">Equip reps to win on value, not price, by defining meaningful differences your buyers care about.</p>
</div>
<div className="group cursor-pointer transition-all hover:translate-x-2">
<div className="text-xs font-mono text-luxota-dim mb-2 group-hover:text-luxota-accent transition-colors">03</div>
<h3 className="text-2xl text-white mb-2 font-medium">Architecture Over Tactics</h3>
<p className="text-base text-luxota-dim/60">Building a scalable, repeatable system rather than relying on one-off training events that fade over time.</p>
</div>
<div className="group cursor-pointer transition-all hover:translate-x-2">
<div className="text-xs font-mono text-luxota-accent mb-2">04</div>
<h3 className="text-2xl text-white mb-2 font-medium flex items-center gap-3">
                            Measurable Behaviors &amp; Inspection
                            <span className="text-[10px] px-2.5 py-1 rounded-full bg-luxota-accent/10 text-luxota-accent border border-luxota-accent/20 font-medium tracking-wide uppercase">Core Discipline</span>
</h3>
<p className="text-base text-luxota-dim">Giving managers the exact criteria needed to coach proactively and measure leading indicators accurately.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 px-4 md:px-6 bg-[#020203]" id="commercial">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(79,209,197,0.05),transparent_50%)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

<div className="lg:col-span-5 space-y-10" id="commercial-text">
<div>
<span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest reveal-commercial opacity-0 translate-y-4">[ 04 — POSITIONING ]</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.1] reveal-commercial opacity-0 translate-y-4">
                            Hi, I’m Lee Salz.
                        </h2>
</div>
<div className="space-y-8">
<div className="relative pl-8 reveal-commercial opacity-0 translate-y-4 border-l border-white/10">
<h3 className="text-xl text-white font-medium mb-2">The Mission</h3>
<p className="text-luxota-dim font-light leading-relaxed">
                                I founded Sales Architects® with one mission: to build world-class sales forces through structure and discipline.
                            </p>
</div>
<div className="relative pl-8 reveal-commercial opacity-0 translate-y-4 border-l border-luxota-accent">
<h3 className="text-xl text-white font-medium mb-2">The Approach</h3>
<p className="text-luxota-dim font-light leading-relaxed">
                                As a Sales Management Strategist and sales contrarian, I challenge ineffective selling methods and replace them with documented sales architecture and measurable behaviors. We focus strictly on structure, differentiation, and disciplined execution.
                            </p>
</div>
</div>
<div className="pt-4 reveal-commercial opacity-0 translate-y-4">
<a className="group inline-flex items-center gap-3 text-white text-sm font-medium hover:text-luxota-accent transition-colors" href="#calendly">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-luxota-accent group-hover:bg-luxota-accent/10 transition-all bg-white/5">
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<span className="border-b border-transparent group-hover:border-luxota-accent/50 transition-all">Schedule Consultation</span>
</a>
</div>
</div>

<div className="lg:col-span-7 relative reveal-visual opacity-0 scale-95">
<div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-sm">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(79,209,197,0.1),transparent_60%)]"></div>

<div className="absolute inset-0 flex items-center justify-center overflow-hidden grayscale opacity-70 mix-blend-lighten group-hover:grayscale-0 transition-all duration-700">
<img alt="Lee Salz Representation" className="opacity-60 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37de8602-9296-4f74-b04e-e7d61f4a4318_1600w.jpg"/>
</div>

<div className="absolute top-1/4 right-[10%] p-4 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md animate-float z-20">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-luxota-accent/20 text-luxota-accent flex items-center justify-center"><iconify-icon icon="solar:pen-new-square-linear"></iconify-icon></div>
<div>
<div className="text-[10px] text-luxota-dim uppercase tracking-wider">Methodology</div>
<div className="text-sm font-bold text-white">Sales Architecture</div>
</div>
</div>
</div>
<div className="absolute bottom-1/4 left-[10%] p-4 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md animate-float z-20" style={{animationDelay: '-2s'}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-luxota-accent/20 text-luxota-accent flex items-center justify-center"><iconify-icon icon="solar:star-fall-linear"></iconify-icon></div>
<div>
<div className="text-[10px] text-luxota-dim uppercase tracking-wider">Strategy</div>
<div className="text-sm font-bold text-white">Sales Differentiation®</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 bg-luxota-bg border-t border-white/5" id="faq">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-20">
<span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest">[ 05 — VERIFIED RESULTS ]</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Client Outcomes</h2>
</div>
<div className="space-y-4">
<div className="faq-item group border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden">
<button className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
<span className="text-lg text-white/90 group-hover:text-white transition-colors font-medium">Wes Amann, VP Sales, Filterbuy</span>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/10">
<iconify-icon className="text-white text-xl faq-icon transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="faq-content">
<div className="px-6 pb-8 text-luxota-dim leading-relaxed max-w-2xl italic">
                            “Working with Lee Salz at Sales Architects was a game-changer for our sales team. The playbook Lee developed wasn’t just a collection of generic tactics. It was a clear, actionable plan outlining every sales process step.”
                        </div>
</div>
</div>
<div className="faq-item group border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden">
<button className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
<span className="text-lg text-white/90 group-hover:text-white transition-colors font-medium">Rick Olson, CEO, KRM Information Services</span>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/10">
<iconify-icon className="text-white text-xl faq-icon transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="faq-content">
<div className="px-6 pb-8 text-luxota-dim leading-relaxed max-w-2xl italic">
                            “We’ve used Lee’s sales architecture methodology to bring discipline, structure, and measurement. We now have a clearly defined strategy, process, and tools.”
                        </div>
</div>
</div>
<div className="faq-item group border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden">
<button className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
<span className="text-lg text-white/90 group-hover:text-white transition-colors font-medium">Aaron Aldinger, President, Scale Dealers Association</span>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/10">
<iconify-icon className="text-white text-xl faq-icon transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="faq-content">
<div className="px-6 pb-8 text-luxota-dim leading-relaxed max-w-2xl italic">
                            “His Sales Differentiation concept seemed like common sense initially, but turned out to be so much more.”
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-[80vh] flex flex-col items-center justify-center px-6 relative overflow-hidden py-32" id="action">
<div className="absolute inset-0 bg-gradient-to-t from-luxota-accent/5 to-transparent pointer-events-none"></div>
<div className="relative z-10 text-center max-w-5xl">
<h2 className="text-5xl md:text-7xl font-medium tracking-tightest text-white mb-16 leading-[1.1]">
                The 3-Step <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 italic font-serif">Transformation.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16 text-left">
<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
<div className="text-xs text-luxota-accent font-mono mb-4 tracking-widest">STEP 1</div>
<h3 className="text-xl text-white font-medium mb-3">Book a Consultation</h3>
<p className="text-luxota-dim text-sm leading-relaxed">We review your current sales architecture and assess fit.</p>
</div>
<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
<div className="text-xs text-luxota-accent font-mono mb-4 tracking-widest">STEP 2</div>
<h3 className="text-xl text-white font-medium mb-3">Architect Your Process</h3>
<p className="text-luxota-dim text-sm leading-relaxed">We build a documented, measurable Sales Playbook.</p>
</div>
<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 relative overflow-hidden border-luxota-accent/30 bg-luxota-accent/[0.02]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,209,197,0.1),transparent_70%)] pointer-events-none"></div>
<div className="text-xs text-luxota-accent font-mono mb-4 tracking-widest relative z-10">STEP 3</div>
<h3 className="text-xl text-white font-medium mb-3 relative z-10">Gain Consistent Performance</h3>
<p className="text-luxota-dim text-sm leading-relaxed relative z-10">Your team executes with structure and defined differentiation.</p>
</div>
</div>
<div className="flex flex-col items-center gap-8">
<a className="group relative bg-white text-black px-12 py-5 rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105 shadow-[0_0_60px_-15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_80px_-15px_rgba(79,209,197,0.5)]" href="#calendly">
<span className="relative z-10 flex items-center gap-3">
                        Schedule Consultation 
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
<div className="absolute inset-0 bg-luxota-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo"></div>
</a>
</div>
</div>
</section>

<section className="py-32 relative z-10 px-4 md:px-6 bg-[#020203] border-t border-white/5" id="calendly">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest">[ 06 — CONSULTATION ]</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                    Architect Your Sales Process Today
                </h2>
<p className="text-luxota-dim text-lg leading-relaxed max-w-2xl mx-auto">
                    Schedule a consultation to review your sales architecture and identify structural gaps limiting performance.
                </p>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-3xl p-4 md:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-luxota-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

<div className="calendly-inline-widget" data-processed="true" data-url="https://calendly.com/your-calendly-link?hide_gdpr_banner=1&amp;background_color=020203&amp;text_color=ffffff&amp;primary_color=4FD1C5" style={{position: 'relative', minWidth: '320px', height: '700px'}}><div className="calendly-spinner"><div className="calendly-bounce1"></div><div className="calendly-bounce2"></div><div className="calendly-bounce3"></div></div><iframe frameborder="0" height="100%" src="https://calendly.com/your-calendly-link?embed_domain=&amp;embed_type=Inline&amp;hide_gdpr_banner=1&amp;background_color=020203&amp;text_color=ffffff&amp;primary_color=4FD1C5" title="Select a Date &amp; Time - Calendly" width="100%"></iframe></div>


</div>
<div className="text-center mt-12">
<p className="text-white/60 font-mono text-sm tracking-widest uppercase">
                    Structure creates consistency. <span className="text-luxota-accent">Consistency drives performance.</span>
</p>
</div>
</div>
</section>

<footer className="relative py-12 px-6 border-t border-white/5 bg-[#020203] overflow-hidden">

<div className="absolute bottom-[-5%] left-0 right-0 select-none pointer-events-none flex justify-center opacity-[0.02]">
<h1 className="text-[14vw] font-bold text-white tracking-tighter leading-none whitespace-nowrap">SALES ARCHITECTS</h1>
</div>
<div className="max-w-7xl mx-auto relative z-10">

<div className="flex flex-col md:flex-row justify-between items-center text-xs text-luxota-dim/60 font-mono tracking-wider gap-4">
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-luxota-accent animate-pulse"></span>
<span className="uppercase">Sales Architects®</span>
</div>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<span>© 2026 Sales Architects. All rights reserved.</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
