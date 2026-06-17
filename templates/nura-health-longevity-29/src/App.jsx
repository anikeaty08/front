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



        document.addEventListener('DOMContentLoaded', () => {
            gsap.registerPlugin(ScrollTrigger);

            // 1. Navbar Morphing Logic
            ScrollTrigger.create({
                trigger: "#hero",
                start: "bottom 90%",
                onEnter: () => {
                    gsap.to("#navbar", { 
                        backgroundColor: "rgba(242, 240, 233, 0.8)", 
                        backdropFilter: "blur(16px)",
                        color: "#1A1A1A", 
                        border: "1px solid rgba(26, 26, 26, 0.1)",
                        duration: 0.4 
                    });
                },
                onLeaveBack: () => {
                    gsap.to("#navbar", { 
                        backgroundColor: "transparent", 
                        backdropFilter: "blur(0px)",
                        color: "#F2F0E9", 
                        border: "1px solid transparent",
                        duration: 0.4 
                    });
                }
            });

            // 2. Hero Initial Animation
            const heroTl = gsap.timeline();
            heroTl.from(".hero-el", {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.2
            });

            // 3. Magnetic Button Micro-interactions
            document.querySelectorAll('.magnetic').forEach(btn => {
                btn.addEventListener('mousemove', (e) => {
                    const rect = btn.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    gsap.to(btn, { x: x * 0.15, y: y * 0.15, duration: 0.4, ease: "power2.out" });
                });
                btn.addEventListener('mouseleave', () => {
                    gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" });
                });
            });

            // 4. Diagnostic Shuffler Card
            const shufflerData = [
                { label: "Metabolic Panel", val: "Optimal" },
                { label: "Neural Telemetry", val: "Syncing" },
                { label: "Cellular Age", val: "Decelerated" }
            ];
            const shufflerContainer = document.getElementById('shuffler-container');
            
            shufflerData.forEach((item, i) => {
                const el = document.createElement('div');
                el.className = 'absolute inset-x-0 top-0 rounded-xl bg-[#F2F0E9] p-4 border border-[#1A1A1A]/10 shadow-sm flex justify-between items-center shuffler-card';
                el.innerHTML = `<span class="text-sm font-medium">${item.label}</span><span class="font-data text-xs text-[#CC5833]">${item.val}</span>`;
                shufflerContainer.appendChild(el);
            });

            let cards = Array.from(document.querySelectorAll('.shuffler-card'));
            
            function updateShuffler(init = false) {
                cards.forEach((card, i) => {
                    gsap.to(card, {
                        y: i * 14,
                        scale: 1 - i * 0.05,
                        opacity: i === 2 ? 0 : (1 - i * 0.3),
                        zIndex: 30 - i * 10,
                        duration: init ? 0 : 0.7,
                        ease: "power3.inOut"
                    });
                });
            }
            updateShuffler(true);
            setInterval(() => {
                cards.unshift(cards.pop());
                updateShuffler();
            }, 3000);

            // 5. Telemetry Typewriter Card
            const typeText = document.getElementById('typewriter-text');
            const msgs = ["Sequencing biological data...", "Analyzing metabolic variance...", "Synthesizing protocol parameters..."];
            let msgIdx = 0, charIdx = 0, isDeleting = false;
            
            function type() {
                const currentMsg = msgs[msgIdx];
                if (isDeleting) {
                    typeText.innerText = currentMsg.substring(0, charIdx - 1);
                    charIdx--;
                } else {
                    typeText.innerText = currentMsg.substring(0, charIdx + 1);
                    charIdx++;
                }
                
                let speed = isDeleting ? 20 : 60;
                if (!isDeleting && charIdx === currentMsg.length) {
                    speed = 2500; 
                    isDeleting = true;
                } else if (isDeleting && charIdx === 0) {
                    isDeleting = false; 
                    msgIdx = (msgIdx + 1) % msgs.length; 
                    speed = 500;
                }
                setTimeout(type, speed);
            }
            setTimeout(type, 1000);

            // 6. Cursor Protocol Scheduler
            const cursor = document.getElementById('scheduler-cursor');
            const dayCell = document.getElementById('day-cell');
            const cursorTl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
            
            cursorTl.set(cursor, { x: 10, y: -20, opacity: 0 })
              .to(cursor, { opacity: 1, duration: 0.3 })
              .to(cursor, { x: 95, y: 15, duration: 1, ease: "power2.inOut" }) // Move to Tuesday
              .to(cursor, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 }) // Click
              .to(dayCell, { backgroundColor: "#CC5833", color: "#F2F0E9", duration: 0.2 }, "-=0.1") // Highlight cell
              .to(cursor, { x: 150, y: 50, duration: 1, ease: "power2.inOut", delay: 0.5 }) // Move away
              .to(cursor, { opacity: 0, duration: 0.3 })
              .set(dayCell, { backgroundColor: "transparent", color: "inherit", delay: 0.2 });

            // 7. Philosophy Reveal
            gsap.utils.toArray('.reveal-text').forEach(text => {
                gsap.from(text, {
                    scrollTrigger: {
                        trigger: text,
                        start: "top 85%"
                    },
                    y: 40,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power3.out"
                });
            });

            // 8. Protocol Stacking Parallax (Scale & Fade Previous)
            const panels = gsap.utils.toArray('.protocol-panel');
            panels.forEach((panel, i) => {
                if (i === 0) return;
                gsap.to(panels[i - 1], {
                    scale: 0.9,
                    opacity: 0.3,
                    filter: "blur(12px)",
                    ease: "none",
                    scrollTrigger: {
                        trigger: panel,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: true
                    }
                });
            });

            // 9. EKG Animation
            const ekgPath = document.getElementById('ekg-path');
            const length = ekgPath.getTotalLength();
            ekgPath.style.strokeDasharray = length;
            ekgPath.style.strokeDashoffset = length;
            
            gsap.to(ekgPath, {
                strokeDashoffset: 0,
                duration: 2,
                repeat: -1,
                ease: "linear",
                repeatDelay: 0.5
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
      

<svg className="noise-layer">
<filter id="noiseFilter">
<feturbulence basefrequency="0.8" numoctaves="3" stitchtiles="stitch" type="fractalNoise"></feturbulence>
</filter>
<rect filter="url(#noiseFilter)" height="100%" width="100%"></rect>
</svg>

<nav className="fixed top-6 left-1/2 z-50 flex w-[90%] max-w-5xl -translate-x-1/2 items-center justify-between rounded-full px-6 py-4 text-[#F2F0E9] transition-all duration-500 md:w-fit md:gap-16" id="navbar">
<div className="font-heading text-lg font-semibold tracking-tighter uppercase text-inherit">
            Nura
        </div>
<div className="hidden items-center gap-8 text-sm font-medium tracking-tight md:flex">
<a className="nav-link hover:text-[#CC5833] transition-colors" href="#philosophy">Philosophy</a>
<a className="nav-link hover:text-[#CC5833] transition-colors" href="#protocol">Protocol</a>
<a className="nav-link hover:text-[#CC5833] transition-colors" href="#membership">Membership</a>
</div>
<button className="magnetic group relative overflow-hidden rounded-full bg-[#CC5833] px-6 py-2.5 text-sm font-medium text-[#F2F0E9] shadow-lg">
<span className="relative z-10 block transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:-translate-y-full">Client Portal</span>
<span className="absolute inset-0 z-10 flex h-full w-full translate-y-full items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-y-0">Access</span>
<span className="absolute inset-0 z-0 h-full w-full bg-[#1A1A1A] transition-transform duration-500"></span>
</button>
</nav>

<section className="relative flex h-[100dvh] w-full flex-col justify-end bg-cover bg-center bg-no-repeat pb-16 pt-32" id="hero" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1510844355160-2fb07bf9af75?q=80&amp'}}>

<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent"></div>
<div className="absolute inset-0 bg-[#2E4036]/20 mix-blend-multiply"></div>
<div className="relative z-10 w-full px-6 md:px-16 lg:w-2/3">
<p className="hero-el font-data mb-6 text-xs text-[#CC5833] tracking-widest uppercase">Precision Longevity Medicine</p>
<h1 className="hero-el flex flex-col">
<span className="font-heading text-4xl text-[#F2F0E9] tracking-tight md:text-6xl">Biology is the</span>
<span className="font-drama text-7xl text-[#F2F0E9] italic tracking-tight md:text-9xl leading-[0.8] mt-2">Blueprint.</span>
</h1>
<p className="hero-el mt-8 max-w-md text-base text-[#F2F0E9]/80 font-medium">
                We decode your biological data to engineer extreme healthspan. Stop guessing. Start optimizing.
            </p>
<div className="hero-el mt-10 flex items-center gap-4">
<button className="magnetic group relative overflow-hidden rounded-full bg-[#2E4036] px-8 py-4 text-sm font-medium text-[#F2F0E9]">
<span className="relative z-10 flex items-center gap-2">
                        Apply for Waitlist
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
<span className="absolute inset-0 z-0 h-full w-full translate-y-full bg-[#CC5833] transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-y-0"></span>
</button>
</div>
</div>
</section>

<section className="relative z-20 -mt-8 rounded-t-[3rem] bg-[#F2F0E9] px-6 py-24 md:px-16 lg:px-24">
<div className="mx-auto max-w-7xl">
<div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
<div>
<h2 className="font-heading text-3xl tracking-tight text-[#1A1A1A] md:text-5xl">The Engine</h2>
<p className="mt-4 max-w-sm text-sm text-[#1A1A1A]/70">Three proprietary diagnostic systems replacing traditional generalized medicine.</p>
</div>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-3">

<div className="group relative flex h-96 flex-col overflow-hidden rounded-[2rem] border border-[#1A1A1A]/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
<div className="mb-auto">
<iconify-icon className="text-3xl text-[#2E4036]" icon="solar:layers-linear"></iconify-icon>
<h3 className="font-heading mt-4 text-xl tracking-tight text-[#1A1A1A]">Biomarker Rotation</h3>
<p className="mt-2 text-xs text-[#1A1A1A]/60">Continuous assessment of 140+ individual biological markers.</p>
</div>
<div className="relative h-32 w-full" id="shuffler-container">

</div>
</div>

<div className="group relative flex h-96 flex-col overflow-hidden rounded-[2rem] border border-[#1A1A1A]/10 bg-[#1A1A1A] p-8 shadow-sm">
<div className="mb-auto">
<div className="flex items-center justify-between">
<iconify-icon className="text-3xl text-[#CC5833]" icon="solar:code-scan-linear"></iconify-icon>
<div className="flex items-center gap-2 rounded-full border border-[#CC5833]/30 bg-[#CC5833]/10 px-3 py-1">
<span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#CC5833]"></span>
<span className="font-data text-xs text-[#CC5833]">Live Feed</span>
</div>
</div>
<h3 className="font-heading mt-4 text-xl tracking-tight text-[#F2F0E9]">Cognitive Telemetry</h3>
<p className="mt-2 text-xs text-[#F2F0E9]/60">Real-time interpretation of metabolic variance.</p>
</div>
<div className="mt-8 rounded-xl bg-[#2A2A35]/50 p-4">
<p className="font-data text-xs text-[#F2F0E9]/80 leading-relaxed">
<span className="text-[#CC5833]">&gt;</span>
<span id="typewriter-text"></span><span className="animate-pulse text-[#CC5833]">_</span>
</p>
</div>
</div>

<div className="group relative flex h-96 flex-col overflow-hidden rounded-[2rem] border border-[#1A1A1A]/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
<div className="mb-auto">
<iconify-icon className="text-3xl text-[#2E4036]" icon="solar:calendar-linear"></iconify-icon>
<h3 className="font-heading mt-4 text-xl tracking-tight text-[#1A1A1A]">Dynamic Scheduling</h3>
<p className="mt-2 text-xs text-[#1A1A1A]/60">Protocols that adapt to your weekly biological state.</p>
</div>
<div className="relative mt-4 grid grid-cols-7 gap-1 rounded-xl bg-[#F2F0E9] p-3">
<div className="text-center font-data text-xs text-[#1A1A1A]/40">S</div>
<div className="text-center font-data text-xs text-[#1A1A1A]/40">M</div>
<div className="rounded-md text-center font-data text-xs text-[#1A1A1A]/40 transition-colors" id="day-cell">T</div>
<div className="text-center font-data text-xs text-[#1A1A1A]/40">W</div>
<div className="text-center font-data text-xs text-[#1A1A1A]/40">T</div>
<div className="text-center font-data text-xs text-[#1A1A1A]/40">F</div>
<div className="text-center font-data text-xs text-[#1A1A1A]/40">S</div>

<div className="absolute left-0 top-0 z-10 text-xl text-[#2E4036]" id="scheduler-cursor" style={{opacity: '0'}}>
<iconify-icon icon="solar:mouse-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative flex min-h-[80dvh] items-center justify-center overflow-hidden bg-[#1A1A1A] py-32" id="philosophy">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
<p className="reveal-text font-data mb-8 text-sm text-[#F2F0E9]/60 uppercase tracking-widest">
                Most medicine focuses on: reactive symptom management.
            </p>
<h2 className="reveal-text flex flex-col gap-2">
<span className="font-heading text-3xl text-[#F2F0E9] tracking-tight md:text-5xl">We focus on:</span>
<span className="font-drama text-6xl text-[#F2F0E9] italic tracking-tight md:text-8xl mt-4">
                    biological <span className="text-[#CC5833]">precision.</span>
</span>
</h2>
</div>
</section>

<section className="relative bg-[#F2F0E9]" id="protocol">
<div className="mx-auto max-w-7xl px-6 py-24 md:px-16 lg:px-24">
<div className="mb-16">
<h2 className="font-heading text-3xl tracking-tight text-[#1A1A1A] md:text-5xl">The Methodology</h2>
</div>
<div className="relative">

<div className="protocol-panel sticky top-24 mb-12 flex min-h-[60vh] w-full flex-col overflow-hidden rounded-[3rem] border border-[#1A1A1A]/10 bg-white p-8 shadow-xl md:flex-row md:p-16">
<div className="flex w-full flex-col justify-center md:w-1/2">
<span className="font-data text-sm text-[#CC5833]">01 / Mapping</span>
<h3 className="font-heading mt-4 text-4xl tracking-tight text-[#1A1A1A]">Genetic Sequencing</h3>
<p className="mt-4 max-w-md text-sm text-[#1A1A1A]/70 leading-relaxed">
                            We establish your baseline by analyzing your entire exome, cross-referenced with your metabolic panel to expose structural longevity opportunities.
                        </p>
</div>
<div className="relative mt-8 flex w-full items-center justify-center md:mt-0 md:w-1/2">
<svg className="h-64 w-64 animate-spin-slow opacity-80" viewbox="0 0 200 200">
<circle cx="100" cy="100" fill="none" r="80" stroke="#2E4036" stroke-dasharray="4 4" strokeWidth="1"></circle>
<circle cx="100" cy="100" fill="none" r="60" stroke="#CC5833" stroke-dasharray="10 10" strokeWidth="2"></circle>
<circle cx="100" cy="100" fill="none" r="40" stroke="#2E4036" strokeWidth="1"></circle>
<circle cx="100" cy="100" fill="#CC5833" fillOpacity="0.1" r="20" stroke="#CC5833" strokeWidth="1"></circle>
</svg>
</div>
</div>

<div className="protocol-panel sticky top-32 mb-12 flex min-h-[60vh] w-full flex-col overflow-hidden rounded-[3rem] border border-[#1A1A1A]/10 bg-[#2E4036] p-8 shadow-xl md:flex-row md:p-16">
<div className="flex w-full flex-col justify-center md:w-1/2">
<span className="font-data text-sm text-[#CC5833]">02 / Monitoring</span>
<h3 className="font-heading mt-4 text-4xl tracking-tight text-[#F2F0E9]">Cellular Telemetry</h3>
<p className="mt-4 max-w-md text-sm text-[#F2F0E9]/70 leading-relaxed">
                            Continuous data ingestion via clinical-grade wearables, feeding thousands of data points daily into your personalized biological model.
                        </p>
</div>
<div className="relative mt-8 flex w-full items-center justify-center md:mt-0 md:w-1/2">
<svg className="h-64 w-64 opacity-80" viewbox="0 0 200 200">

<pattern height="20" id="grid" patternunits="userSpaceOnUse" width="20">
<path d="M 20 0 L 0 0 0 20" fill="none" stroke="#F2F0E9" stroke-opacity="0.2" strokeWidth="1"></path>
</pattern>
<rect fill="url(#grid)" height="200" width="200"></rect>

<line id="svg-laser" stroke="#CC5833" strokeWidth="2" x1="0" x2="200" y1="0" y2="0">
<animate attributename="y1" dur="4s" repeatcount="indefinite" values="0;200;0"></animate>
<animate attributename="y2" dur="4s" repeatcount="indefinite" values="0;200;0"></animate>
</line>
</svg>
</div>
</div>

<div className="protocol-panel sticky top-40 mb-12 flex min-h-[60vh] w-full flex-col overflow-hidden rounded-[3rem] border border-[#1A1A1A]/10 bg-white p-8 shadow-xl md:flex-row md:p-16">
<div className="flex w-full flex-col justify-center md:w-1/2">
<span className="font-data text-sm text-[#CC5833]">03 / Intervention</span>
<h3 className="font-heading mt-4 text-4xl tracking-tight text-[#1A1A1A]">Targeted Protocols</h3>
<p className="mt-4 max-w-md text-sm text-[#1A1A1A]/70 leading-relaxed">
                            Algorithmic generation of pharmaceutical, nutritional, and recovery interventions. Precision medicine delivered instantly to your interface.
                        </p>
</div>
<div className="relative mt-8 flex w-full items-center justify-center md:mt-0 md:w-1/2">
<svg className="h-32 w-full opacity-80" viewbox="0 0 200 100">
<path d="M0,50 L40,50 L50,20 L60,80 L70,50 L200,50" fill="none" id="ekg-path" stroke="#CC5833" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-[#F2F0E9] px-6 py-24 md:px-16 lg:px-24" id="membership">
<div className="mx-auto max-w-7xl">
<div className="mb-16 text-center">
<h2 className="font-heading text-3xl tracking-tight text-[#1A1A1A] md:text-5xl">Clinical Access</h2>
<p className="mt-4 text-sm text-[#1A1A1A]/70">Strictly limited intake to ensure architectural precision.</p>
</div>
<div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">

<div className="rounded-[2.5rem] border border-[#1A1A1A]/10 bg-white p-8 shadow-sm">
<h3 className="font-heading text-xl tracking-tight text-[#1A1A1A]">Foundation</h3>
<div className="mt-4 flex items-baseline gap-2">
<span className="font-heading text-4xl text-[#1A1A1A]">$400</span>
<span className="text-xs text-[#1A1A1A]/50">/ month</span>
</div>
<ul className="mt-8 flex flex-col gap-4 text-sm text-[#1A1A1A]/70">
<li className="flex items-center gap-3"><iconify-icon className="text-[#CC5833]" icon="solar:check-circle-linear"></iconify-icon> Quarterly Metabolic Panel</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#CC5833]" icon="solar:check-circle-linear"></iconify-icon> Base Telemetry Integration</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#CC5833]" icon="solar:check-circle-linear"></iconify-icon> Monthly Protocol Adjustments</li>
</ul>
<button className="magnetic mt-10 w-full rounded-full border border-[#1A1A1A]/10 px-6 py-3 text-sm font-medium text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A]/5">Request Invite</button>
</div>

<div className="relative rounded-[2.5rem] bg-[#2E4036] p-8 shadow-2xl md:scale-105">
<div className="absolute -top-4 right-8 rounded-full bg-[#CC5833] px-3 py-1 text-xs font-medium text-[#F2F0E9]">Priority Waitlist</div>
<h3 className="font-heading text-xl tracking-tight text-[#F2F0E9]">Performance</h3>
<div className="mt-4 flex items-baseline gap-2">
<span className="font-heading text-4xl text-[#F2F0E9]">$1,200</span>
<span className="text-xs text-[#F2F0E9]/50">/ month</span>
</div>
<ul className="mt-8 flex flex-col gap-4 text-sm text-[#F2F0E9]/80">
<li className="flex items-center gap-3"><iconify-icon className="text-[#CC5833]" icon="solar:check-circle-linear"></iconify-icon> Full Genome Sequencing</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#CC5833]" icon="solar:check-circle-linear"></iconify-icon> Real-Time Telemetry Feed</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#CC5833]" icon="solar:check-circle-linear"></iconify-icon> Direct Clinical Interface</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#CC5833]" icon="solar:check-circle-linear"></iconify-icon> Weekly Protocol Injection</li>
</ul>
<button className="magnetic group relative mt-10 w-full overflow-hidden rounded-full bg-[#CC5833] px-6 py-3 text-sm font-medium text-[#F2F0E9]">
<span className="relative z-10">Apply for Access</span>
<span className="absolute inset-0 z-0 h-full w-full translate-y-full bg-[#1A1A1A] transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-y-0"></span>
</button>
</div>

<div className="rounded-[2.5rem] border border-[#1A1A1A]/10 bg-white p-8 shadow-sm">
<h3 className="font-heading text-xl tracking-tight text-[#1A1A1A]">Longevity</h3>
<div className="mt-4 flex items-baseline gap-2">
<span className="font-heading text-4xl text-[#1A1A1A]">Custom</span>
</div>
<ul className="mt-8 flex flex-col gap-4 text-sm text-[#1A1A1A]/70">
<li className="flex items-center gap-3"><iconify-icon className="text-[#CC5833]" icon="solar:check-circle-linear"></iconify-icon> On-Premise Assessment</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#CC5833]" icon="solar:check-circle-linear"></iconify-icon> Dedicated Biotech Team</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#CC5833]" icon="solar:check-circle-linear"></iconify-icon> Experimental Therapeutics</li>
</ul>
<button className="magnetic mt-10 w-full rounded-full border border-[#1A1A1A]/10 px-6 py-3 text-sm font-medium text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A]/5">Contact Office</button>
</div>
</div>
</div>
</section>

<footer className="mt-12 rounded-t-[4rem] bg-[#1A1A1A] px-6 pb-12 pt-24 text-[#F2F0E9] md:px-16 lg:px-24">
<div className="mx-auto max-w-7xl">
<div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-24">
<div className="md:col-span-2">
<div className="font-heading text-2xl font-semibold tracking-tighter uppercase">Nura</div>
<p className="mt-4 max-w-xs text-sm text-[#F2F0E9]/60">Precision longevity medicine powered by continuous biological telemetry.</p>
<div className="mt-12 flex items-center gap-3 rounded-full border border-[#F2F0E9]/10 bg-[#F2F0E9]/5 px-4 py-2 w-fit">
<span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
<span className="font-data text-xs text-[#F2F0E9]/80">System Operational</span>
</div>
</div>
<div>
<h4 className="font-heading text-sm text-[#F2F0E9]/40 tracking-widest uppercase">Platform</h4>
<ul className="mt-6 flex flex-col gap-3 text-sm">
<li><a className="hover:text-[#CC5833] transition-colors" href="#">Philosophy</a></li>
<li><a className="hover:text-[#CC5833] transition-colors" href="#">Methodology</a></li>
<li><a className="hover:text-[#CC5833] transition-colors" href="#">Clinical Evidence</a></li>
<li><a className="hover:text-[#CC5833] transition-colors" href="#">Waitlist Application</a></li>
</ul>
</div>
<div>
<h4 className="font-heading text-sm text-[#F2F0E9]/40 tracking-widest uppercase">Legal</h4>
<ul className="mt-6 flex flex-col gap-3 text-sm">
<li><a className="hover:text-[#CC5833] transition-colors" href="#">Privacy Protocol</a></li>
<li><a className="hover:text-[#CC5833] transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-[#CC5833] transition-colors" href="#">Data Security</a></li>
</ul>
</div>
</div>
<div className="mt-24 border-t border-[#F2F0E9]/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#F2F0E9]/40">
<p>© 2024 Nura Health Inc. All rights reserved.</p>
<p className="mt-2 md:mt-0 font-data">v.2.0.4. biological-interface</p>
</div>
</div>
</footer>



    </>
  );
}
