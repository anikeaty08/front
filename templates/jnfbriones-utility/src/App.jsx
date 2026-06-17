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
colors: {
forge: '#111210',
safety: '#E8622A',
limestone: '#EDE9E0',
iron: '#2C2C2A'
},
fontFamily: {
condensed: ['"Barlow Condensed"', 'sans-serif'],
drama: ['"Abril Fatface"', 'serif'],
cormorant: ['"Cormorant Garamond"', 'serif'],
mono: ['"IBM Plex Mono"', 'monospace']
},
transitionTimingFunction: {
'ground': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // 1. Navbar Morph
            const navbar = document.getElementById('navbar');
            ScrollTrigger.create({
                start: "top -50",
                onUpdate: (self) => {
                    if (self.progress > 0) {
                        navbar.classList.add('bg-forge/80', 'border-limestone/20', 'shadow-lg');
                        navbar.classList.remove('bg-forge/10', 'border-limestone/10');
                    } else {
                        navbar.classList.remove('bg-forge/80', 'border-limestone/20', 'shadow-lg');
                        navbar.classList.add('bg-forge/10', 'border-limestone/10');
                    }
                }
            });

            // 2. Hero Animations
            const heroAnim = gsap.utils.toArray('.hero-anim');
            gsap.fromTo(heroAnim, 
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.2 }
            );
            gsap.fromTo("#hero-bg",
                { scale: 1.04 },
                { scale: 1, duration: 3, ease: "power2.out" }
            );

            // 3. Depth Finder Shuffler
            const cards = document.querySelectorAll('.shuffler-card');
            let order = [0, 1, 2]; // top to bottom
            setInterval(() => {
                order.unshift(order.pop());
                cards.forEach((card, i) => {
                    const pos = order.indexOf(i); // 0 is top
                    card.style.transform = `translateY(${pos * 15}px) scale(${1 - pos * 0.05})`;
                    card.style.zIndex = 3 - pos;
                    card.style.opacity = 1 - pos * 0.3;
                });
            }, 3000);

            // 4. Live Dispatch Typewriter
            const terminal = document.getElementById('typewriter-text');
            const msgs = [
                "CREW DEPLOYED — Loop 820 Bore, 12IN HDPE, 6:14AM CST.",
                "SITE SECURED — TXDOT permit active, traffic control set.",
                "PRESSURE TEST PASSED — 150PSI held for 4hrs. Clear.",
                "EMERGENCY CALLOUT — Main line breach at Sec 4. Rolling."
            ];
            let msgIdx = 0;
            let charIdx = 0;
            let isDeleting = false;

            function typeWriter() {
                const currentMsg = msgs[msgIdx];
                if (isDeleting) {
                    terminal.textContent = currentMsg.substring(0, charIdx - 1);
                    charIdx--;
                } else {
                    terminal.textContent = currentMsg.substring(0, charIdx + 1);
                    charIdx++;
                }

                let typingSpeed = isDeleting ? 30 : 70;

                if (!isDeleting && charIdx === currentMsg.length) {
                    typingSpeed = 3000; // Pause at end
                    isDeleting = true;
                } else if (isDeleting && charIdx === 0) {
                    isDeleting = false;
                    msgIdx = (msgIdx + 1) % msgs.length;
                    typingSpeed = 500; // Pause before start
                }

                setTimeout(typeWriter, typingSpeed);
            }
            setTimeout(typeWriter, 1000);

            // 5. Phase Scheduler Animation
            const nodes = document.querySelectorAll('.schedule-node');
            let nodeIdx = 0;
            setInterval(() => {
                // Reset previous
                nodes.forEach(n => {
                    n.classList.remove('opacity-100', '-translate-y-2');
                    n.classList.add('opacity-30');
                    n.querySelector('.node-dot').classList.remove('bg-safety', 'border-safety');
                    n.querySelector('.node-dot').classList.add('bg-iron', 'border-limestone');
                });
                
                // Highlight current
                const current = nodes[nodeIdx];
                current.classList.remove('opacity-30');
                current.classList.add('opacity-100', '-translate-y-2');
                current.querySelector('.node-dot').classList.remove('bg-iron', 'border-limestone');
                current.querySelector('.node-dot').classList.add('bg-safety', 'border-safety');

                nodeIdx = (nodeIdx + 1) % nodes.length;
            }, 2000);

            // 6. Philosophy Parallax & Reveal
            gsap.to("#parallax-img", {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: "#philosophy",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

            gsap.to(".philosophy-text", {
                y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power4.out",
                scrollTrigger: {
                    trigger: "#philosophy",
                    start: "top 60%"
                }
            });
            gsap.to(".philosophy-badges", {
                opacity: 1, duration: 1, delay: 0.6, ease: "power2.out",
                scrollTrigger: {
                    trigger: "#philosophy",
                    start: "top 60%"
                }
            });

            // 7. Process Stacking Interaction
            const processCards = gsap.utils.toArray('.process-card');
            processCards.forEach((card, i) => {
                // Determine SVG animation based on index
                let onEnterFn;
                if (i === 0) {
                    onEnterFn = () => gsap.to("#bore-path", {strokeDashoffset: 0, duration: 2, ease: "power1.inOut"});
                } else if (i === 1) {
                    // Scanner handled by CSS mostly, but we can animate the line
                    onEnterFn = () => gsap.fromTo("#laser-scanner", {top: 0}, {top: "100%", duration: 2, yoyo: true, repeat: -1, ease: "sine.inOut"});
                } else if (i === 2) {
                    onEnterFn = () => gsap.to("#waveform-path", {strokeDashoffset: 0, duration: 2, ease: "power1.inOut"});
                }

                ScrollTrigger.create({
                    trigger: card,
                    start: "top center",
                    onEnter: onEnterFn,
                    once: i !== 1 // repeat scanner
                });

                if (i < processCards.length - 1) {
                    gsap.to(card, {
                        scale: 0.92,
                        filter: "blur(12px)",
                        opacity: 0.45,
                        scrollTrigger: {
                            trigger: processCards[i + 1],
                            start: "top bottom",
                            end: "top top+=128", // account for top offset
                            scrub: true
                        }
                    });
                }
            });

            // 8. Social Proof Counters
            const counters = document.querySelectorAll('.counter');
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                ScrollTrigger.create({
                    trigger: counter,
                    start: "top 80%",
                    onEnter: () => {
                        gsap.to(counter, {
                            innerHTML: target,
                            duration: 2.5,
                            snap: { innerHTML: 1 },
                            ease: "power2.out"
                        });
                    },
                    once: true
                });
            });
        });
    </
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
      

<svg className="noise-overlay">
<filter id="noiseFilter">
<feturbulence basefrequency="0.8" numoctaves="4" stitchtiles="stitch" type="fractalNoise"></feturbulence>
</filter>
<rect filter="url(#noiseFilter)" height="100%" width="100%"></rect>
</svg>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-500 rounded-full" id="navbar">
<div className="flex items-center justify-between px-6 py-4 bg-forge/10 backdrop-blur-md rounded-full border border-limestone/10 group-hover:border-limestone/20">
<div className="flex flex-col">
<span className="font-condensed font-bold text-xl tracking-tight leading-none text-limestone uppercase">JNF Briones</span>
<span className="font-mono text-xs text-safety tracking-widest mt-1">Utility Contracting</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-limestone/80 hover:text-safety transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-safety after:transition-all hover:after:w-full hover:-translate-y-0.5 transform duration-300 text-sm tracking-wide relative" href="#expertise">About</a>
<a className="text-limestone/80 hover:text-safety transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-safety after:transition-all hover:after:w-full hover:-translate-y-0.5 transform duration-300 text-sm tracking-wide relative" href="#philosophy">Services</a>
<a className="text-limestone/80 hover:text-safety transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-safety after:transition-all hover:after:w-full hover:-translate-y-0.5 transform duration-300 text-sm tracking-wide relative" href="#process">Contact</a>
</div>
<button className="bg-safety text-forge px-6 py-2 rounded-full font-condensed font-bold tracking-widest text-sm uppercase relative overflow-hidden group active:scale-95 transition-transform duration-300 ease-ground btn-fill hover:text-safety border border-safety">
<span className="relative z-10 flex items-center gap-2">
                    Request Bid <iconify-icon icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</button>
</div>
</nav>

<header className="relative h-screen w-full flex items-end justify-start overflow-hidden bg-forge pb-20 md:pb-32 px-6 md:px-12">

<div className="absolute inset-0 z-0 scale-105" id="hero-bg">
<div className="absolute inset-0 bg-gradient-to-t from-forge via-forge/80 to-transparent z-10"></div>
<div className="bg-center bg-gradient-to-r from-forge via-forge/50 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/012cfcdf-b8dd-43e1-aed7-21ef023ab6e4_1600w.jpg)] bg-cover z-10 absolute top-0 right-0 bottom-0 left-0 brightness-50"></div>
<img alt="Heavy Machinery Excavation" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="overflow-hidden hidden md:block z-20 opacity-40 mix-blend-overlay w-8 h-full absolute top-0 right-4 [--fx-filter:blur(10px)_liquid-glass(0,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="ticker-col flex flex-col gap-8 text-xs font-mono whitespace-nowrap" style={{writingMode: 'vertical-rl'}}>
<span>BONDED · INSURED · DOT CERTIFIED · TEXAS LICENSED · 24HR RESPONSE</span>
<span>BONDED · INSURED · DOT CERTIFIED · TEXAS LICENSED · 24HR RESPONSE</span>
<span className="">BONDED · INSURED · DOT CERTIFIED · TEXAS LICENSED · 24HR RESPONSE</span>
</div>
</div>
<div className="relative z-20 max-w-5xl">
<div className="hero-anim overflow-hidden">
<h2 className="font-condensed font-bold text-3xl md:text-5xl tracking-tight text-safety uppercase mb-2">Underground Utility Contracting is</h2>
</div>
<div className="hero-anim overflow-hidden">
<h1 className="font-cormorant font-semibold text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] text-limestone tracking-tight">Our Domain.</h1>
</div>
<div className="hero-anim flex flex-col sm:flex-row gap-4 sm:items-center mt-10 gap-x-4 gap-y-4 items-start">
<button className="bg-safety text-forge px-8 py-4 rounded-full font-condensed font-bold tracking-widest text-lg uppercase relative overflow-hidden group active:scale-95 hover:scale-105 transition-transform duration-300 ease-ground shadow-[0_0_30px_rgba(232,98,42,0.3)]">
<span className="relative z-10">Deploy Our Crew</span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-ground"></div>
</button>
<button className="uppercase text-limestone border-limestone/30 hover:border-limestone hover:bg-limestone/10 active:scale-95 transition-all duration-300 ease-ground flex text-sm font-mono border rounded-full pt-4 pr-8 pb-4 pl-8 gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon> View Field Work
                </button>
</div>
</div>
</header>

<section className="py-32 bg-limestone text-iron relative z-20 clip-trench-top clip-trench-bottom -mt-8 px-6 md:px-12" id="expertise">
<div className="max-w-7xl mr-auto ml-auto">
<div className="flex flex-col md:flex-row gap-6 border-iron/20 text-left border-b mb-20 pb-8 gap-x-6 gap-y-6 items-end justify-between">
<div className="">
<span className="text-safety uppercase block text-sm font-semibold tracking-widest font-mono text-left mb-4">/// Core Capabilities</span>
<h2 className="md:text-7xl uppercase text-forge text-5xl font-bold tracking-tight font-condensed text-left">Engineered for<br/>the Underground.</h2>
</div>
<p className="text-iron/80 text-sm font-mono max-w-sm">Precision, safety, and Texas-grade toughness. We don't just move dirt; we construct reliable subterranean arteries.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">

<div className="bg-forge rounded-[2rem] p-8 relative overflow-hidden shadow-2xl flex flex-col justify-end group">
<div className="absolute top-6 left-6 text-safety opacity-50"><iconify-icon className="text-4xl" icon="solar:shield-warning-linear"></iconify-icon></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-forge/90 z-10 pointer-events-none"></div>
<div className="z-0 w-full mb-8 relative flex flex-col gap-4" id="list-container">
<div className="border-iron hover:border-safety/50 hover:bg-iron/30 transitionsm bg-forge/40">
<span className="font-mono text-xs text-safety block mb-1">REQ: TR-01</span>
<span className="font-condensed font-bold text-lg text-limestone">Shoring Installation</span>
</div>
<div className="border-iron hover:border-safety/50 hover:bg-iron/30 transition-all duration-300 ease-ground w-full border rounded-xl p-4 backdrop-blur-sm bg-forge/40">
<span className="font-mono text-xs text-safety block mb-1">REQ: TR-02</span>
<span className="font-condensed font-bold text-lg text-limestone">Soil Classification</span>
</div>
<div className="border-iron hover:border-safety/50 hover:bg-iron/30 transition-all duration-300 ease-ground w-full border rounded-xl p-4 backdrop-blur-sm bg-forge/40">
<span className="font-mono text-xs text-safety block mb-1">REQ: TR-03</span>
<span className="font-condensed font-bold text-lg text-limestone">Confined Space Entry</span>
</div>
</div>
<div className="relative z-20">
<h3 className="font-condensed font-bold text-3xl tracking-tight text-limestone uppercase mb-2">Trench Safety Expertise</h3>
<p className="font-mono text-xs text-limestone/60">OSHA-compliant excavation protocols protecting the crew and the schedule.</p>
</div>
</div>

<div className="bg-iron rounded-[2rem] p-8 relative overflow-hidden shadow-2xl flex flex-col justify-between border border-forge/10">
<div className="flex justify-between items-center mb-8">
<div className="flex items-center gap-2 text-safety font-mono text-xs font-bold">
<div className="w-2 h-2 bg-safety rounded-full animate-pulse"></div>
                            LIVE DISPATCH
                        </div>
<span className="font-mono text-xs text-limestone/40">FREQ: 144.0</span>
</div>
<div className="flex-grow text-safety/90 leading-relaxed border-safety/20 overflow-hidden text-sm font-mono border rounded-xl pt-6 pr-6 pb-6 pl-6 relative shadow-inner">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-safety/5 via-transparent to-transparent pointer-events-none"></div>
<span id="typewriter-text"></span><span className="cursor-blink inline-block w-2 h-4 bg-safety align-middle ml-1"></span>
</div>
<div className="mt-8">
<h3 className="font-condensed font-bold text-3xl tracking-tight text-limestone uppercase mb-2">24/7 Emergency Response</h3>
<p className="font-mono text-xs text-limestone/60">Municipal line breaks and critical infrastructure outages mitigated immediately.</p>
</div>
</div>

<div className="bg-limestone border border-iron/20 rounded-[2rem] p-8 relative overflow-hidden shadow-[0_20px_40px_rgba(17,18,16,0.1)] flex flex-col justify-between group">
<div className="absolute top-6 right-6 text-iron opacity-20"><iconify-icon className="text-5xl" icon="solar:route-linear"></iconify-icon></div>
<div className="mt-12 mb-8 relative">

<div className="absolute top-1/2 left-0 w-full h-px bg-iron/20 -translate-y-1/2"></div>
<div className="flex justify-between relative z-10" id="scheduler-nodes">

<div className="flex flex-col items-center gap-2 schedule-node opacity-30 transition-all duration-300">
<div className="w-4 h-4 rounded-full bg-iron border-2 border-limestone z-10 node-dot transition-colors duration-300"></div>
<span className="font-mono text-[10px] font-bold">SURVEY</span>
</div>
<div className="flex flex-col items-center gap-2 schedule-node opacity-30 transition-all duration-300">
<div className="w-4 h-4 rounded-full bg-iron border-2 border-limestone z-10 node-dot transition-colors duration-300"></div>
<span className="font-mono text-[10px] font-bold">PERMIT</span>
</div>
<div className="flex flex-col items-center gap-2 schedule-node opacity-30 transition-all duration-300">
<div className="w-4 h-4 rounded-full bg-iron border-2 border-limestone z-10 node-dot transition-colors duration-300"></div>
<span className="font-mono text-[10px] font-bold">EXCAVATE</span>
</div>
<div className="flex flex-col items-center gap-2 schedule-node opacity-30 transition-all duration-300">
<div className="w-4 h-4 rounded-full bg-iron border-2 border-limestone z-10 node-dot transition-colors duration-300"></div>
<span className="font-mono text-[10px] font-bold">INSTALL</span>
</div>
</div>
</div>
<div>
<h3 className="font-condensed font-bold text-3xl tracking-tight text-forge uppercase mb-2">DOT-Certified Crews</h3>
<p className="font-mono text-xs text-iron/70">Rigorous procedural compliance from traffic control planning to final backfill.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 relative bg-forge overflow-hidden z-10 -mt-12 pb-56" id="philosophy">

<div className="absolute inset-0 z-0 opacity-20">
<img alt="Underground pipes" className="w-full h-[120%] object-cover" id="parallax-img" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
<div className="philosophy-text opacity-0 translate-y-10">
<span className="font-mono text-sm text-limestone/60 block mb-6 uppercase tracking-widest border-l-2 border-safety pl-4">Most contractors focus on moving dirt quickly.</span>
</div>
<div className="philosophy-text opacity-0 translate-y-10">
<h2 className="font-cormorant font-semibold text-5xl md:text-7xl lg:text-[6rem] leading-tight text-limestone">We focus on <span className="text-safety italic">leaving a permanent legacy</span> beneath the surface.</h2>
</div>

<div className="flex flex-wrap border-limestone/10 philosophy-badges opacity-0 border-t mt-20 pt-8 gap-x-6 gap-y-6 items-center">
<div className="flex items-center gap-2 font-mono text-xs text-limestone/80 uppercase">
<iconify-icon className="text-safety text-lg" icon="solar:verified-check-linear"></iconify-icon> DOT Certified
                </div>
<div className="w-1 h-1 bg-safety rounded-full"></div>
<div className="flex items-center gap-2 font-mono text-xs text-limestone/80 uppercase">
<iconify-icon className="text-safety text-lg" icon="solar:shield-check-linear"></iconify-icon> OSHA 30 Configured
                </div>
<div className="w-1 h-1 bg-safety rounded-full"></div>
<div className="flex items-center gap-2 font-mono text-xs text-limestone/80 uppercase">
<iconify-icon className="text-safety text-lg" icon="solar:map-point-linear"></iconify-icon> Texas Licensed
                </div>
<div className="w-1 h-1 bg-safety rounded-full hidden sm:block"></div>
<div className="flex items-center gap-2 font-mono text-xs text-limestone/80 uppercase">
<iconify-icon className="text-safety text-lg" icon="solar:lock-keyhole-linear"></iconify-icon> Bonded &amp; Insured
                </div>
</div>
</div>
</section>

<section className="relative z-30 bg-limestone clip-shear -mt-20 pb-40 text-forge" id="process">
<div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 mb-20">
<span className="font-mono text-safety text-sm font-semibold tracking-widest uppercase block mb-4">/// Operational Protocol</span>
<h2 className="font-condensed font-bold text-5xl md:text-7xl tracking-tight uppercase">Execution Standard.</h2>
</div>
<div className="relative max-w-6xl mx-auto px-6 md:px-12 process-container">

<div className="process-card sticky top-32 h-[60vh] md:h-[70vh] w-full bg-forge text-limestone rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row justify-between items-center overflow-hidden shadow-2xl mb-12 origin-top border border-iron">
<div className="relative z-10 w-full md:w-1/2">
<span className="font-mono text-6xl md:text-8xl font-bold text-safety/20 block mb-4">01</span>
<h3 className="font-condensed font-bold text-4xl md:text-6xl tracking-tight uppercase mb-6">Subsurface<br/>Mobilization</h3>
<p className="font-mono text-sm text-limestone/70 max-w-md">Utility locating, potholing, and environmental controls established before iron touches earth.</p>
</div>

<div className="w-full md:w-1/2 h-full absolute md:relative right-0 opacity-20 md:opacity-100 pointer-events-none flex items-center justify-center">
<svg className="w-full max-w-md" height="100%" viewbox="0 0 400 300" width="100%">
<line opacity="0.3" stroke="#EDE9E0" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="400" y1="50" y2="50"></line>
<line opacity="0.3" stroke="#EDE9E0" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="400" y1="150" y2="150"></line>
<text fill="#E8622A" fontFamily="monospace" fontSize="10" x="10" y="45">BASE - 2FT</text>
<text fill="#E8622A" fontFamily="monospace" fontSize="10" x="10" y="145">CLAY - 6FT</text>
<path d="M -50 20 Q 150 250, 450 180" fill="none" id="bore-path" stroke="#E8622A" stroke-dasharray="1000" stroke-dashoffset="1000" strokeLinecap="round" strokeWidth="4"></path>
<circle className="animate-ping opacity-50" cx="200" cy="170" fill="none" r="15" stroke="#E8622A" strokeWidth="2"></circle>
</svg>
</div>
</div>

<div className="process-card sticky top-40 h-[60vh] md:h-[70vh] w-full bg-iron text-limestone rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row justify-between items-center overflow-hidden shadow-[0_-20px_40px_rgba(17,18,16,0.5)] mb-12 origin-top border border-forge/50">
<div className="relative z-10 w-full md:w-1/2">
<span className="font-mono text-6xl md:text-8xl font-bold text-safety/20 block mb-4">02</span>
<h3 className="font-condensed font-bold text-4xl md:text-6xl tracking-tight uppercase mb-6">Directional<br/>Installation</h3>
<p className="font-mono text-sm text-limestone/70 max-w-md">Trenchless conduit placement and heavy excavation managed with telemetry and laser precision.</p>
</div>

<div className="w-full md:w-1/2 h-full absolute md:relative right-0 opacity-20 md:opacity-100 pointer-events-none flex items-center justify-center">
<div className="relative w-64 h-64 border border-limestone/20 rounded-full flex items-center justify-center overflow-hidden">
<div className="grid grid-cols-3 gap-4">
<div className="w-12 h-12 rounded-full border-2 border-limestone/30 conduit-circle"></div>
<div className="w-12 h-12 rounded-full border-2 border-limestone/30 conduit-circle"></div>
<div className="w-12 h-12 rounded-full border-2 border-limestone/30 conduit-circle"></div>
<div className="w-12 h-12 rounded-full border-2 border-limestone/30 conduit-circle"></div>
<div className="w-12 h-12 rounded-full border-2 border-limestone/30 conduit-circle"></div>
<div className="w-12 h-12 rounded-full border-2 border-limestone/30 conduit-circle"></div>
</div>
<div className="absolute top-0 left-0 w-full h-1 bg-safety shadow-[0_0_15px_#E8622A]" id="laser-scanner"></div>
</div>
</div>
</div>

<div className="process-card sticky top-48 h-[60vh] md:h-[70vh] w-full bg-safety text-forge rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row justify-between items-center overflow-hidden shadow-[0_-20px_40px_rgba(17,18,16,0.6)] mb-12 origin-top">
<div className="relative z-10 w-full md:w-1/2">
<span className="font-mono text-6xl md:text-8xl font-bold text-forge/20 block mb-4">03</span>
<h3 className="font-condensed font-bold text-4xl md:text-6xl tracking-tight uppercase mb-6">Commissioning<br/>&amp; Restoration</h3>
<p className="font-mono text-sm text-forge/80 max-w-md">Mandrel testing, pressure verification, and surface restoration to state DOT specifications.</p>
</div>

<div className="w-full md:w-1/2 h-full absolute md:relative right-0 opacity-20 md:opacity-100 pointer-events-none flex items-center justify-center">
<svg className="w-full max-w-md" height="100%" viewbox="0 0 400 200" width="100%">

<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" opacity="0.1" stroke="#111210" strokeWidth="1"></path>
</pattern>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
<path d="M 0 100 L 50 100 L 70 40 L 90 160 L 110 80 L 130 110 L 160 100 L 250 100 L 270 40 L 290 160 L 310 80 L 330 110 L 360 100 L 400 100" fill="none" id="waveform-path" stroke="#111210" stroke-dasharray="1000" stroke-dashoffset="1000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="py-32 bg-forge text-limestone border-t border-iron relative z-40">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-iron/40 pb-20 mb-20">
<div className="text-center md:text-left">
<div className="font-condensed font-bold text-7xl md:text-8xl text-safety tracking-tight mb-2"><span className="counter" data-target="450">0</span>+</div>
<div className="font-mono text-xs text-limestone/60 uppercase tracking-widest">Projects Completed</div>
</div>
<div className="text-center md:text-left">
<div className="font-condensed font-bold text-7xl md:text-8xl text-safety tracking-tight mb-2"><span className="counter" data-target="1200">0</span></div>
<div className="font-mono text-xs text-limestone/60 uppercase tracking-widest">Miles of Conduit Laid</div>
</div>
<div className="text-center md:text-left">
<div className="font-condensed font-bold text-7xl md:text-8xl text-safety tracking-tight mb-2"><span className="counter" data-target="15">0</span></div>
<div className="font-mono text-xs text-limestone/60 uppercase tracking-widest">Years Operating in TX</div>
</div>
</div>
</div>

<div className="w-full overflow-hidden bg-iron/20 py-8 border-y border-iron/40 transform -rotate-1 relative">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-forge to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-forge to-transparent z-10"></div>
<div className="flex whitespace-nowrap animate-marquee w-fit items-center gap-16 font-condensed font-bold text-3xl text-limestone/40 uppercase tracking-widest">
<span>MUNICIPAL INFRASTRUCTURE</span>
<span className="text-safety">///</span>
<span>FIBER OPTIC NETWORKS</span>
<span className="text-safety">///</span>
<span>TXDOT COMPLIANT</span>
<span className="text-safety">///</span>
<span>COMMERCIAL DEVELOPMENT</span>
<span className="text-safety">///</span>
<span>WATER &amp; SEWER MAINS</span>
<span className="text-safety">///</span>

<span>MUNICIPAL INFRASTRUCTURE</span>
<span className="text-safety">///</span>
<span>FIBER OPTIC NETWORKS</span>
<span className="text-safety">///</span>
<span>TXDOT COMPLIANT</span>
<span className="text-safety">///</span>
<span>COMMERCIAL DEVELOPMENT</span>
<span className="text-safety">///</span>
<span>WATER &amp; SEWER MAINS</span>
</div>
</div>
</section>

<footer className="bg-[#0a0a09] text-limestone rounded-t-[3rem] mt-[-3rem] relative z-50 pt-24 pb-12 overflow-hidden border-t border-iron/30">

<svg className="absolute -right-20 bottom-0 opacity-[0.03] w-[600px] h-[600px] pointer-events-none" fill="currentColor" viewbox="0 0 100 100">
<path d="M50 0 L100 20 L90 80 L50 100 L10 80 L0 20 Z"></path> 
</svg>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
<div className="lg:col-span-2">
<h2 className="font-condensed font-bold text-5xl tracking-tight uppercase mb-4 text-safety">JNF Briones</h2>
<p className="font-mono text-sm text-limestone/60 max-w-sm mb-8">Underground utility contracting built on precision, safety, and Texas-grade toughness.</p>
<div className="inline-flex items-center gap-3 bg-iron/30 border border-iron rounded-full px-4 py-2">
<div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
<span className="font-mono text-xs tracking-widest uppercase">Operational — North Texas</span>
</div>
</div>
<div>
<h4 className="font-mono text-xs text-safety tracking-widest uppercase mb-6">Operations</h4>
<ul className="space-y-4 font-mono text-sm text-limestone/70">
<li><a className="hover:text-safety transition-colors" href="#">Directional Boring</a></li>
<li><a className="hover:text-safety transition-colors" href="#">Trenching &amp; Excavation</a></li>
<li><a className="hover:text-safety transition-colors" href="#">Emergency Repair (24/7)</a></li>
<li><a className="hover:text-safety transition-colors" href="#">Subsurface Locating</a></li>
</ul>
</div>
<div className="">
<h4 className="font-mono text-xs text-safety tracking-widest uppercase mb-6">Command</h4>
<ul className="space-y-4 font-mono text-sm text-limestone/70">
<li className="flex gap-2 gap-x-2 gap-y-2 items-center">(817) 430-9500</li>
<li className="flex gap-x-2 gap-y-2 items-center"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon> dispatch@jnfbriones.com</li>
<li className="flex items-center gap-2 mt-6">
<button className="w-full bg-limestone text-forge px-4 py-3 rounded-xl font-condensed font-bold tracking-widest text-sm uppercase hover:bg-safety hover:text-limestone transition-colors duration-300">Request Bid</button>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-iron/30 pt-8 font-mono text-[10px] text-limestone/40 tracking-widest uppercase">
<p>© 2024 JNF Briones Utility Contracting. All Rights Reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-safety" href="#">Privacy</a>
<a className="hover:text-safety" href="#">Terms</a>
<a className="hover:text-safety" href="#">License Info</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
