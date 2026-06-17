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



        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
            });

            lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time) => { lenis.raf(time * 1000); });
            gsap.ticker.lagSmoothing(0);

            const cursor = document.getElementById('custom-cursor');
            let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
            let cursorX = mouseX, cursorY = mouseY;

            window.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });

            gsap.ticker.add(() => {
                cursorX += (mouseX - cursorX) * 0.2;
                cursorY += (mouseY - cursorY) * 0.2;
                if (cursor) {
                    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
                }
            });

            const interactives = document.querySelectorAll('a, button, .btn-hover-effect, .journey-card');
            interactives.forEach(el => {
                el.addEventListener('mouseenter', () => cursor.classList.add('hover-scale'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('hover-scale'));
            });

            const magnets = document.querySelectorAll('.btn-hover-effect');
            magnets.forEach(magnet => {
                magnet.addEventListener('mousemove', (e) => {
                    const rect = magnet.getBoundingClientRect();
                    const x = (e.clientX - rect.left) - rect.width / 2;
                    const y = (e.clientY - rect.top) - rect.height / 2;
                    gsap.to(magnet, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: "power2.out" });
                });
                magnet.addEventListener('mouseleave', () => {
                    gsap.to(magnet, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" });
                });
            });

            const nav = document.getElementById("navbar");
            const navInner = document.getElementById("nav-inner");
            
            ScrollTrigger.create({
                start: "top -50",
                onUpdate: (self) => {
                    if (self.direction === 1 || self.progress > 0) {
                        navInner.classList.add("bg-[#FAF8F5]/80", "backdrop-blur-xl", "border", "border-[#2A2A35]/10", "shadow-sm");
                        navInner.classList.remove("text-[#FAF8F5]");
                        navInner.classList.add("text-[#0D0D12]");
                    } else if (self.progress === 0) {
                        navInner.classList.remove("bg-[#FAF8F5]/80", "backdrop-blur-xl", "border", "border-[#2A2A35]/10", "shadow-sm");
                        navInner.classList.remove("text-[#0D0D12]");
                        navInner.classList.add("text-[#FAF8F5]");
                    }
                }
            });

            const splitTextToSpans = (selector) => {
                const el = document.querySelector(selector);
                if(!el) return;
                const words = el.innerText.split(' ');
                el.innerHTML = '';
                words.forEach((word) => {
                    const wrapper = document.createElement('span');
                    wrapper.className = 'word-wrapper mr-2 md:mr-3';
                    const inner = document.createElement('span');
                    inner.className = 'word-inner';
                    inner.innerText = word;
                    wrapper.appendChild(inner);
                    el.appendChild(wrapper);
                });
            };
            
            splitTextToSpans('#hero-line-1');
            splitTextToSpans('#hero-line-2');

            const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
            heroTl.fromTo("#hero-img", 
                { scale: 1.15, opacity: 0 }, 
                { scale: 1.05, opacity: 0.4, duration: 2.5 }
            )
            .fromTo(".hero-anim:not(span)", 
                { y: 30, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 1.2, stagger: 0.1 },
                "-=2"
            )
            .fromTo(".word-inner",
                { y: "110%", rotation: 5 },
                { y: "0%", rotation: 0, duration: 1, stagger: 0.04, ease: "power4.out" },
                "-=1.8"
            );

            gsap.to("#hero-img", {
                yPercent: 20,
                opacity: 0.1,
                ease: "none",
                scrollTrigger: {
                    trigger: "header",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            gsap.from(".feature-title, .feature-desc", {
                scrollTrigger: { trigger: "#features", start: "top 70%" },
                y: 40, opacity: 0, duration: 1, stagger: 0.1, ease: "power3.out"
            });
            gsap.from(".card-stagger", {
                scrollTrigger: { trigger: ".card-stagger", start: "top 80%" },
                y: 50, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power2.out"
            });

            const twText = "> Syncing wearable telemetry...\n> HRV baseline established.\n> Glucose spikes: Nominal.\n> Cortisol curve optimized.\n> Protocol stable.";
            const twEl = document.getElementById("typewriter-text");
            let twIndex = 0;

            function typeWriter() {
                if(twIndex < twText.length) {
                    twEl.innerHTML += twText.charAt(twIndex) === '\n' ? '<br/><br/>' : twText.charAt(twIndex);
                    twIndex++;
                    setTimeout(typeWriter, Math.random() * 50 + 30);
                } else {
                    setTimeout(() => { twEl.innerHTML = ''; twIndex = 0; typeWriter(); }, 4000);
                }
            }
            if(twEl) {
                ScrollTrigger.create({ trigger: twEl, start: "top 80%", once: true, onEnter: () => typeWriter() });
            }

            const schedCursor = document.getElementById("sched-cursor");
            const schedTarget = document.getElementById("sched-target");
            const schedBtn = document.getElementById("sched-btn");
            if(schedCursor) {
                const schedTl = gsap.timeline({repeat: -1, repeatDelay: 1, paused: true});
                gsap.set(schedCursor, {x: 10, y: 100});
                schedTl.to(schedCursor, {x: 130, y: 10, duration: 1, ease: "power2.inOut"})
                       .to(schedCursor, {scale: 0.8, duration: 0.15, yoyo: true, repeat: 1})
                       .to(schedTarget, {backgroundColor: "#C9A84C", color: "#0D0D12", borderColor: "#C9A84C", duration: 0.2}, "-=0.1")
                       .to(schedCursor, {x: 150, y: 80, duration: 0.8, ease: "power2.inOut"}, "+=0.3")
                       .to(schedCursor, {scale: 0.8, duration: 0.15, yoyo: true, repeat: 1})
                       .to(schedBtn, {backgroundColor: "#C9A84C", color: "#0D0D12", borderColor: "#C9A84C", duration: 0.2}, "-=0.1")
                       .to(schedCursor, {opacity: 0, duration: 0.3}, "+=0.5")
                       .set(schedTarget, {backgroundColor: "transparent", color: "rgba(42,42,53,0.4)", borderColor: "rgba(42,42,53,0.1)"})
                       .set(schedBtn, {backgroundColor: "transparent", color: "rgba(42,42,53,0.4)", borderColor: "rgba(42,42,53,0.1)"})
                       .set(schedCursor, {x: 10, y: 100, opacity: 1});

                ScrollTrigger.create({ trigger: schedCursor, start: "top 80%", onEnter: () => schedTl.play() });
            }

            const journeyCards = document.querySelectorAll(".journey-card");
            const navItems = document.querySelectorAll(".journey-nav-item");
            const trackerDot = document.getElementById("journey-tracker-dot");

            journeyCards.forEach((card, i) => {
                ScrollTrigger.create({
                    trigger: card,
                    start: "top 60%",
                    end: "bottom 60%",
                    onEnter: () => updateJourneyNav(i),
                    onEnterBack: () => updateJourneyNav(i)
                });
            });

            function updateJourneyNav(index) {
                if(!navItems[index]) return;
                navItems.forEach((item, i) => {
                    item.classList.toggle("opacity-100", i === index);
                    item.classList.toggle("opacity-40", i !== index);
                });
                const dotY = navItems[index].offsetTop;
                if(trackerDot) trackerDot.style.transform = `translateY(${dotY}px)`;
            }

            gsap.to("#telemetry-dashboard", {
                scale: 1,
                scrollTrigger: {
                    trigger: "#telemetry-dashboard",
                    start: "top 90%",
                    end: "top 40%",
                    scrub: true
                }
            });

            const dashTl = gsap.timeline({ scrollTrigger: { trigger: "#telemetry-dashboard", start: "top 60%" } });
            dashTl.from(".dashboard-panel", { y: 40, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" });
            const bars = document.querySelectorAll(".anim-bar");
            bars.forEach(bar => { dashTl.to(bar, { width: bar.getAttribute("data-width"), duration: 1.5, ease: "power4.out" }, "-=0.6"); });

            const countEl = document.querySelector(".counter-text");
            if(countEl) {
                const targetVal = parseFloat(countEl.getAttribute("data-val"));
                dashTl.to(countEl, { innerHTML: targetVal, duration: 2, snap: { innerHTML: 0.1 }, ease: "power2.out", onUpdate: () => countEl.innerHTML = parseFloat(countEl.innerHTML).toFixed(1) }, "-=1.5");
            }

            const chartLine = document.getElementById("dash-chart-line");
            const chartFill = document.getElementById("dash-chart-fill");
            if(chartLine) {
                const chartLength = chartLine.getTotalLength();
                gsap.set(chartLine, { strokeDasharray: chartLength, strokeDashoffset: chartLength });
                dashTl.to(chartLine, { strokeDashoffset: 0, duration: 1.5, ease: "power2.inOut" }, "-=1")
                      .to(chartFill, { opacity: 1, duration: 1, ease: "power2.out" }, "-=0.5")
                      .to(".chart-point", { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(2)" }, "-=1");
            }

            gsap.from(".bento-item", {
                scrollTrigger: { trigger: ".bento-title", start: "top 70%" },
                y: 50, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out"
            });
            gsap.to("#proto-gear", { rotation: 360, duration: 20, repeat: -1, ease: "none" });
            
            const ekgPath = document.getElementById("proto-ekg");
            if(ekgPath) {
                const ekgLength = ekgPath.getTotalLength();
                gsap.set(ekgPath, { strokeDasharray: ekgLength, strokeDashoffset: ekgLength });
                gsap.to(ekgPath, {
                    strokeDashoffset: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#ekg-container",
                        start: "top 90%",
                        end: "bottom 10%",
                        scrub: 1
                    }
                });
            }
            gsap.to("#proto-laser", { y: 120, duration: 1.5, repeat: -1, yoyo: true, ease: "sine.inOut" });

            const interTl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#interstitial-wrap",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1
                }
            });
            interTl.to("#inter-orb", { scale: 1.5, opacity: 1, duration: 1 })
                   .to("#inter-text", { y: "0%", opacity: 1, duration: 0.8, ease: "power3.out" }, "<0.2")
                   .to("#inter-text-2", { y: "0%", opacity: 1, duration: 0.8, ease: "power3.out" }, "<0.2")
                   .to({}, {duration: 0.5});

            // FIXED: Removed conflicting CSS styles in HTML, allowed GSAP to handle pinning.
            const hardwareTrack = document.querySelector(".hardware-track-container");
            const hardwareSection = document.getElementById("hardware-scroll");
            if(hardwareTrack && hardwareSection) {
                function getScrollAmount() {
                    let trackWidth = hardwareTrack.scrollWidth;
                    return -(trackWidth - window.innerWidth + 120); 
                }
                const tween = gsap.to(hardwareTrack, {
                    x: getScrollAmount,
                    ease: "none"
                });
                ScrollTrigger.create({
                    trigger: hardwareSection,
                    start: "top top",
                    end: () => `+=${getScrollAmount() * -1}`,
                    pin: true,
                    animation: tween,
                    scrub: 1,
                    invalidateOnRefresh: true
                });
            }

            const metricNums = document.querySelectorAll(".metric-num");
            metricNums.forEach(num => {
                const target = parseFloat(num.getAttribute("data-target"));
                const isFloat = target % 1 !== 0;
                ScrollTrigger.create({
                    trigger: num,
                    start: "top 85%",
                    onEnter: () => {
                        gsap.to(num, {
                            innerHTML: target,
                            duration: 2.5,
                            snap: { innerHTML: isFloat ? 0.1 : 1 },
                            ease: "power3.out",
                            onUpdate: () => num.innerHTML = isFloat ? parseFloat(num.innerHTML).toFixed(1) : Math.round(num.innerHTML)
                        });
                    }, once: true
                });
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
      
<div id="custom-cursor"></div>
<svg className="noise-overlay" xmlns="http://www.w3.org/2000/svg">
<filter id="noiseFilter">
<feturbulence basefrequency="0.8" numoctaves="3" stitchtiles="stitch" type="fractalNoise"></feturbulence>
</filter>
<rect filter="url(#noiseFilter)" height="100%" width="100%"></rect>
</svg>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] w-[90%] max-w-5xl rounded-[2.5rem]" id="navbar">
<div className="flex items-center justify-between px-8 py-4 rounded-[2.5rem] transition-all duration-700 text-[#FAF8F5]" id="nav-inner">
<a className="font-sans font-medium text-lg tracking-tight uppercase flex items-center gap-2 group hover:-translate-y-[1px] transition-transform" href="#">
<iconify-icon className="text-2xl text-[#C9A84C]" icon="solar:infinity-linear"></iconify-icon>
                Nura
            </a>
<div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium tracking-tight">
<a className="hover:text-[#C9A84C] hover:-translate-y-[1px] transition-all" href="#features">Protocol</a>
<a className="hover:text-[#C9A84C] hover:-translate-y-[1px] transition-all" href="#journey">Journey</a>
<a className="hover:text-[#C9A84C] hover:-translate-y-[1px] transition-all" href="#membership">Membership</a>
</div>
<button className="btn-hover-effect bg-[#C9A84C] text-[#0D0D12] px-6 py-2.5 rounded-[2rem] font-sans font-medium text-xs tracking-tight shadow-lg shadow-[#C9A84C]/20">
<div className="btn-bg-slide dark-slide"></div>
<span className="relative z-10 group-hover:text-[#FAF8F5] transition-colors duration-500">Apply Now</span>
</button>
</div>
</nav>

<header className="relative h-[100dvh] w-full flex items-end pb-24 px-6 md:px-16 overflow-hidden bg-[#0D0D12]">
<div className="absolute inset-0 w-full h-full">
<img alt="Luxury Architecture" className="w-full h-full object-cover opacity-40 scale-105" id="hero-img" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#0D0D12]/80 to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start">
<div className="flex items-center gap-3 mb-6 hero-anim overflow-hidden rounded-full border border-[#C9A84C]/30 bg-[#0D0D12]/50 backdrop-blur-md px-4 py-2" id="hero-badge">
<div className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse"></div>
<span className="font-mono-data text-xs text-[#C9A84C] tracking-tight uppercase">Waitlist Open for Q4</span>
</div>
<h1 className="flex flex-col mb-10">
<span className="font-sans font-medium text-3xl md:text-5xl tracking-tight text-[#FAF8F5] leading-tight mb-2" id="hero-line-1">Longevity medicine meets</span>
<span className="font-serif-drama italic font-medium text-7xl md:text-9xl tracking-tighter leading-[0.85] text-[#C9A84C] pr-8" id="hero-line-2">Precision.</span>
</h1>
<button className="btn-hover-effect flex items-center gap-4 bg-[#FAF8F5] text-[#0D0D12] pl-8 pr-2 py-2 rounded-[3rem] font-sans font-medium text-sm tracking-tight hero-anim">
<div className="btn-bg-slide bg-[#C9A84C]"></div>
<span className="relative z-10">Initiate Protocol</span>
<div className="relative z-10 w-10 h-10 rounded-full bg-[#0D0D12] flex items-center justify-center text-[#FAF8F5]">
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</button>
</div>
</header>

<section className="relative py-32 bg-[#FAF8F5] text-[#0D0D12] px-6 md:px-16 overflow-hidden rounded-t-[3rem] -mt-8 z-20" id="features">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div className="max-w-2xl">
<h2 className="font-sans font-medium text-3xl md:text-5xl tracking-tight mb-4 feature-title">Biological determinism, <br/><span className="font-serif-drama italic font-medium text-[#C9A84C]">engineered.</span></h2>
<p className="font-sans text-base text-[#2A2A35]/80 max-w-md feature-desc">We replace generalized advice with continuous telemetry, shifting your health from reactive probability to engineered certainty.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white border border-[#2A2A35]/10 rounded-[2.5rem] p-8 h-[26rem] shadow-sm flex flex-col hover:-translate-y-1 transition-transform duration-500 card-stagger">
<div className="flex items-center justify-between mb-8">
<iconify-icon className="text-3xl text-[#C9A84C]" icon="solar:dna-linear"></iconify-icon>
<span className="font-mono-data text-xs text-[#2A2A35]/50 border border-[#2A2A35]/10 rounded-full px-3 py-1">01 / Sequencing</span>
</div>
<h3 className="font-sans font-medium text-xl tracking-tight mb-2">Multi-Omic Profiling</h3>
<p className="font-sans text-sm text-[#2A2A35]/70 mb-8">Continuous analysis of your genomic, epigenetic, and proteomic layers.</p>
<div className="relative flex-1 w-full flex items-center justify-center">
<div className="w-full max-w-[150px] aspect-[3/4] rounded-xl border border-[#2A2A35]/10 bg-[#FAF8F5] shadow-inner flex items-center justify-center rotate-6 hover:rotate-0 transition-transform duration-500">
<iconify-icon className="text-4xl text-[#C9A84C]/50" icon="solar:medical-kit-linear"></iconify-icon>
</div>
</div>
</div>

<div className="bg-[#0D0D12] rounded-[2.5rem] p-8 h-[26rem] shadow-xl flex flex-col relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500 card-stagger">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A84C]/5 blur-[80px] rounded-full mix-blend-screen pointer-events-none"></div>
<div className="flex items-center justify-between mb-8 relative z-10">
<iconify-icon className="text-3xl text-[#C9A84C]" icon="solar:pulse-linear"></iconify-icon>
<span className="font-mono-data text-xs text-[#C9A84C] border border-[#C9A84C]/20 rounded-full px-3 py-1 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse"></span>
                            Live Feed
                        </span>
</div>
<h3 className="font-sans font-medium text-xl tracking-tight text-[#FAF8F5] mb-2 relative z-10">Real-Time Telemetry</h3>
<p className="font-sans text-sm text-[#FAF8F5]/50 mb-8 relative z-10">Biomarker tracking streams directly to our clinical intelligence engine.</p>
<div className="flex-1 w-full bg-[#15151A] rounded-[1.5rem] p-6 border border-[#2A2A35]/30 relative z-10 overflow-hidden">
<div className="font-mono-data text-xs text-[#C9A84C] leading-relaxed" id="typewriter-text"></div>
<span className="inline-block w-1.5 h-3 bg-[#C9A84C] ml-1 animate-pulse" id="typewriter-cursor"></span>
</div>
</div>

<div className="bg-white border border-[#2A2A35]/10 rounded-[2.5rem] p-8 h-[26rem] shadow-sm flex flex-col hover:-translate-y-1 transition-transform duration-500 card-stagger">
<div className="flex items-center justify-between mb-8">
<iconify-icon className="text-3xl text-[#C9A84C]" icon="solar:calendar-date-linear"></iconify-icon>
<span className="font-mono-data text-xs text-[#2A2A35]/50 border border-[#2A2A35]/10 rounded-full px-3 py-1">03 / Intervention</span>
</div>
<h3 className="font-sans font-medium text-xl tracking-tight mb-2">Dynamic Scheduling</h3>
<p className="font-sans text-sm text-[#2A2A35]/70 mb-8">Protocols auto-adjust weekly based on cellular response metrics.</p>
<div className="relative flex-1 w-full bg-[#FAF8F5] rounded-[1.5rem] p-4 border border-[#2A2A35]/10 overflow-hidden flex flex-col justify-center">
<div className="grid grid-cols-7 gap-2 mb-4 relative z-0">
<div className="aspect-square rounded-full border border-[#2A2A35]/10 flex items-center justify-center text-xs font-sans text-[#2A2A35]/40">S</div>
<div className="aspect-square rounded-full border border-[#2A2A35]/10 flex items-center justify-center text-xs font-sans text-[#2A2A35]/40">M</div>
<div className="aspect-square rounded-full border border-[#2A2A35]/10 flex items-center justify-center text-xs font-sans text-[#2A2A35]/40">T</div>
<div className="aspect-square rounded-full border border-[#2A2A35]/10 flex items-center justify-center text-xs font-sans text-[#2A2A35]/40 transition-colors" id="sched-target">W</div>
<div className="aspect-square rounded-full border border-[#2A2A35]/10 flex items-center justify-center text-xs font-sans text-[#2A2A35]/40">T</div>
<div className="aspect-square rounded-full border border-[#2A2A35]/10 flex items-center justify-center text-xs font-sans text-[#2A2A35]/40">F</div>
<div className="aspect-square rounded-full border border-[#2A2A35]/10 flex items-center justify-center text-xs font-sans text-[#2A2A35]/40">S</div>
</div>
<div className="w-full py-2 rounded-full border border-[#2A2A35]/10 text-center font-sans text-xs text-[#2A2A35]/40 transition-colors" id="sched-btn">Update Protocol</div>
<div className="absolute z-10 top-0 left-0 drop-shadow-md" id="sched-cursor">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 3L18 12L12 14L9 21L6 3Z" fill="#0D0D12" stroke="#FAF8F5" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#FAF8F5] text-[#0D0D12] px-6 md:px-16 z-20" id="journey">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 relative">
<div className="w-full md:w-1/3 md:sticky top-32 h-fit z-10 mb-12 md:mb-0">
<span className="font-mono-data text-xs text-[#C9A84C] tracking-tight uppercase mb-4 block">The Process</span>
<h2 className="font-sans font-medium text-4xl md:text-5xl tracking-tight mb-12">The Biological<br/><span className="font-serif-drama italic font-medium text-[#C9A84C]">Timeline.</span></h2>
<div className="relative pl-6 border-l border-[#2A2A35]/10 space-y-10 py-2 hidden md:block">
<div className="absolute left-[-4.5px] top-2 w-2 h-2 rounded-full bg-[#C9A84C] transition-transform duration-500 ease-out z-10" id="journey-tracker-dot"></div>
<div className="journey-nav-item transition-opacity duration-300 opacity-100">
<span className="font-mono-data text-xs uppercase tracking-tight text-[#C9A84C] block mb-1">Phase 01</span>
<h4 className="font-sans font-medium text-lg tracking-tight">Ingestion</h4>
</div>
<div className="journey-nav-item transition-opacity duration-300 opacity-40">
<span className="font-mono-data text-xs uppercase tracking-tight text-[#2A2A35]/50 block mb-1">Phase 02</span>
<h4 className="font-sans font-medium text-lg tracking-tight">Simulation</h4>
</div>
<div className="journey-nav-item transition-opacity duration-300 opacity-40">
<span className="font-mono-data text-xs uppercase tracking-tight text-[#2A2A35]/50 block mb-1">Phase 03</span>
<h4 className="font-sans font-medium text-lg tracking-tight">Synthesis</h4>
</div>
<div className="journey-nav-item transition-opacity duration-300 opacity-40">
<span className="font-mono-data text-xs uppercase tracking-tight text-[#2A2A35]/50 block mb-1">Phase 04</span>
<h4 className="font-sans font-medium text-lg tracking-tight">Adaptation</h4>
</div>
</div>
</div>
<div className="w-full md:w-2/3 md:pb-[30vh]">

<div className="journey-card min-h-[50vh] flex flex-col justify-center mb-24 md:mb-[30vh]">
<div className="bg-white border border-[#2A2A35]/10 rounded-[2.5rem] p-10 md:p-14 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-48 h-48 bg-[#C9A84C]/5 blur-[60px] rounded-full pointer-events-none"></div>
<iconify-icon className="text-4xl text-[#C9A84C] mb-8" icon="solar:database-linear"></iconify-icon>
<h3 className="font-sans font-medium text-3xl tracking-tight mb-4">Data Ingestion</h3>
<p className="font-sans text-base text-[#2A2A35]/70 leading-relaxed mb-8">We begin with a comprehensive extraction of your biological data. Full-body MRI, 150+ blood biomarkers, VO2 max testing, and continuous glucose monitoring establish an unassailable baseline.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-full border border-[#2A2A35]/10 font-mono-data text-xs text-[#2A2A35]/60">MRI Scan</span>
<span className="px-3 py-1.5 rounded-full border border-[#2A2A35]/10 font-mono-data text-xs text-[#2A2A35]/60">DEXA</span>
<span className="px-3 py-1.5 rounded-full border border-[#2A2A35]/10 font-mono-data text-xs text-[#2A2A35]/60">Liquid Biopsy</span>
</div>
</div>
</div>

<div className="journey-card min-h-[50vh] flex flex-col justify-center mb-24 md:mb-[30vh]">
<div className="bg-white border border-[#2A2A35]/10 rounded-[2.5rem] p-10 md:p-14 shadow-sm relative overflow-hidden">
<iconify-icon className="text-4xl text-[#C9A84C] mb-8" icon="solar:cpu-linear"></iconify-icon>
<h3 className="font-sans font-medium text-3xl tracking-tight mb-4">Digital Twin Simulation</h3>
<p className="font-sans text-base text-[#2A2A35]/70 leading-relaxed mb-8">Your biological data is fed into the Nura Intelligence Engine. We construct a digital replica of your metabolic pathways to simulate the efficacy of thousands of potential interventions before physical application.</p>
<div className="w-full h-32 bg-[#FAF8F5] rounded-xl border border-[#2A2A35]/10 flex items-center justify-center overflow-hidden relative">
<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" fill="#C9A84C" opacity="0.1">
<animate attributename="d" dur="3s" repeatcount="indefinite" values="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z; M0,50 Q25,70 50,50 T100,50 L100,100 L0,100 Z; M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"></animate>
</path>
</svg>
</div>
</div>
</div>

<div className="journey-card min-h-[50vh] flex flex-col justify-center mb-24 md:mb-[30vh]">
<div className="bg-white border border-[#2A2A35]/10 rounded-[2.5rem] p-10 md:p-14 shadow-sm">
<iconify-icon className="text-4xl text-[#C9A84C] mb-8" icon="solar:test-tube-linear"></iconify-icon>
<h3 className="font-sans font-medium text-3xl tracking-tight mb-4">Protocol Synthesis</h3>
<p className="font-sans text-base text-[#2A2A35]/70 leading-relaxed mb-8">Our clinical board reviews the algorithmic outputs to prescribe a highly targeted regimen. This includes custom-compounded peptides, precision nutraceuticals, and lifestyle directives designed specifically for your cellular makeup.</p>
</div>
</div>

<div className="journey-card min-h-[50vh] flex flex-col justify-center">
<div className="bg-[#0D0D12] text-[#FAF8F5] border border-[#2A2A35]/30 rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden group">
<div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
<iconify-icon className="text-4xl text-[#C9A84C] mb-8 relative z-10 group-hover:rotate-180 transition-transform duration-1000" icon="solar:restart-linear"></iconify-icon>
<h3 className="font-sans font-medium text-3xl tracking-tight mb-4 relative z-10">Continuous Adaptation</h3>
<p className="font-sans text-base text-[#FAF8F5]/60 leading-relaxed relative z-10">Health is dynamic. Through wearable integrations and weekly micro-testing, your protocol evolves in real-time, ensuring optimal trajectory without plateau.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0D0D12] text-[#FAF8F5] px-6 md:px-16 overflow-hidden border-t border-[#2A2A35]/20">
<div className="max-w-7xl mx-auto">
<div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
<div className="dash-title-wrap">
<h2 className="font-sans font-medium text-4xl md:text-5xl tracking-tight mb-4 text-[#FAF8F5]">Command Center</h2>
<p className="font-mono-data text-xs text-[#C9A84C] uppercase tracking-tight">Real-time biological interface</p>
</div>
<div className="flex gap-2 items-center">
<span className="font-mono-data text-xs text-[#FAF8F5]/40 mr-2">Live Status</span>
<div className="w-1.5 h-1.5 rounded-full bg-[#2A2A35]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#2A2A35]"></div>
</div>
</div>

<div className="relative w-full aspect-[4/3] md:aspect-video bg-[#0D0D12] rounded-[2.5rem] border border-[#2A2A35]/50 shadow-[0_0_80px_rgba(201,168,76,0.05)] overflow-hidden scale-95 origin-bottom" id="telemetry-dashboard">
<div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
<div className="absolute top-0 left-0 w-full h-12 border-b border-[#2A2A35]/50 flex items-center px-6 gap-2 glass-panel z-20">
<div className="w-3 h-3 rounded-full bg-[#2A2A35]/80 hover:bg-[#C9A84C] transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-[#2A2A35]/80 hover:bg-[#C9A84C] transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-[#2A2A35]/80 hover:bg-[#C9A84C] transition-colors"></div>
<div className="ml-auto font-mono-data text-xs text-[#FAF8F5]/30">NURA_OS v2.4.1</div>
</div>
<div className="absolute inset-0 pt-16 p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 z-10">
<div className="col-span-1 flex flex-col gap-6">
<div className="glass-panel rounded-2xl p-6 border border-[#2A2A35]/30 dashboard-panel">
<div className="flex justify-between items-center mb-6">
<span className="font-sans text-xs text-[#FAF8F5]/50 uppercase tracking-tight">Metabolic Load</span>
<iconify-icon className="text-[#C9A84C]" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div className="space-y-5" id="stat-bars">
<div>
<div className="flex justify-between text-xs font-mono-data text-[#FAF8F5]/40 mb-2"><span>Glucose</span><span className="bar-val">84 mg/dL</span></div>
<div className="w-full h-1.5 bg-[#0D0D12] rounded-full overflow-hidden"><div className="h-full bg-[#C9A84C] w-0 anim-bar" data-width="72%"></div></div>
</div>
<div>
<div className="flex justify-between text-xs font-mono-data text-[#FAF8F5]/40 mb-2"><span>Lactate</span><span className="bar-val">1.2 mmol/L</span></div>
<div className="w-full h-1.5 bg-[#0D0D12] rounded-full overflow-hidden"><div className="h-full bg-[#FAF8F5]/80 w-0 anim-bar" data-width="45%"></div></div>
</div>
<div>
<div className="flex justify-between text-xs font-mono-data text-[#FAF8F5]/40 mb-2"><span>Cortisol</span><span className="bar-val">12.4 μg/dL</span></div>
<div className="w-full h-1.5 bg-[#0D0D12] rounded-full overflow-hidden"><div className="h-full bg-[#2A2A35] w-0 anim-bar" data-width="30%"></div></div>
</div>
</div>
</div>
<div className="glass-panel rounded-2xl p-6 border border-[#2A2A35]/30 flex-1 dashboard-panel relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A84C]/10 blur-[40px] rounded-full"></div>
<span className="font-sans text-xs text-[#FAF8F5]/50 uppercase tracking-tight block mb-4">Cellular Health</span>
<div className="font-sans font-medium text-6xl tracking-tighter text-[#FAF8F5] mb-2 counter-text" data-val="98.4">0.0</div>
<div className="font-mono-data text-xs text-[#C9A84C] flex items-center gap-1"><iconify-icon icon="solar:arrow-up-linear"></iconify-icon> Top 1% of cohort</div>
</div>
</div>
<div className="col-span-1 md:col-span-2 glass-panel rounded-2xl p-6 border border-[#2A2A35]/30 dashboard-panel flex flex-col relative">
<div className="flex justify-between items-center mb-8 relative z-10">
<span className="font-sans text-xs text-[#FAF8F5]/50 uppercase tracking-tight">HRV Trajectory (7-Day)</span>
<div className="px-4 py-1.5 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 text-[#C9A84C] font-mono-data text-xs">Optimal Range</div>
</div>
<div className="flex-1 w-full relative flex items-end">
<div className="absolute inset-0 flex flex-col justify-between pb-8">
<div className="w-full border-t border-[#2A2A35]/20"></div>
<div className="w-full border-t border-[#2A2A35]/20"></div>
<div className="w-full border-t border-[#2A2A35]/20"></div>
<div className="w-full border-t border-[#2A2A35]/20"></div>
</div>
<svg className="w-full h-full relative z-10 overflow-visible" preserveaspectratio="none" viewbox="0 0 500 200">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#C9A84C" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#C9A84C" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,200 L0,150 Q50,120 100,140 T200,80 T300,100 T400,40 T500,20 L500,200 Z" fill="url(#chartGradient)" id="dash-chart-fill" opacity="0"></path>
<path d="M0,150 Q50,120 100,140 T200,80 T300,100 T400,40 T500,20" fill="none" id="dash-chart-line" stroke="#C9A84C" strokeLinecap="round" strokeWidth="3"></path>
<circle className="chart-point opacity-0" cx="100" cy="140" fill="#0D0D12" r="4" stroke="#FAF8F5" strokeWidth="2"></circle>
<circle className="chart-point opacity-0" cx="200" cy="80" fill="#0D0D12" r="4" stroke="#FAF8F5" strokeWidth="2"></circle>
<circle className="chart-point opacity-0" cx="300" cy="100" fill="#0D0D12" r="4" stroke="#FAF8F5" strokeWidth="2"></circle>
<circle className="chart-point opacity-0" cx="400" cy="40" fill="#0D0D12" r="4" stroke="#FAF8F5" strokeWidth="2"></circle>
<circle className="chart-point opacity-0" cx="500" cy="20" fill="#C9A84C" r="4">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="4;8;4"></animate>
</circle>
</svg>
</div>
<div className="flex justify-between font-mono-data text-xs text-[#FAF8F5]/30 mt-6 relative z-10">
<span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0D0D12] text-[#FAF8F5] px-6 md:px-16 pb-48">
<div className="max-w-7xl mx-auto">
<h2 className="font-sans font-medium text-4xl md:text-5xl tracking-tight mb-16 max-w-2xl bento-title">The Architecture of<br/><span className="font-serif-drama italic font-medium text-[#C9A84C]">Optimization.</span></h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[28rem]">

<div className="md:col-span-2 bg-[#15151A] rounded-[2.5rem] border border-[#2A2A35]/30 p-8 md:p-12 flex flex-col md:flex-row gap-8 relative overflow-hidden group hover:border-[#2A2A35]/60 transition-colors bento-item">
<div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
<div className="w-full md:w-1/2 flex flex-col justify-center relative z-10">
<span className="font-mono-data text-xs text-[#C9A84C] mb-4 block">Detail 01</span>
<h3 className="font-sans font-medium text-3xl tracking-tight mb-4 text-[#FAF8F5]">Deep Quantification</h3>
<p className="font-sans text-sm text-[#FAF8F5]/60 leading-relaxed">
                            We map your complete biological architecture. Over 150+ biomarkers, full-genome sequencing, and epigenetic age clocks establish an unassailable baseline.
                        </p>
</div>
<div className="w-full md:w-1/2 flex items-center justify-center relative z-10">
<div className="relative w-48 h-48 md:w-64 md:h-64 border border-[#C9A84C]/20 rounded-full flex items-center justify-center before:absolute before:inset-4 before:border before:border-dashed before:border-[#2A2A35] before:rounded-full" id="proto-gear">
<iconify-icon className="text-6xl text-[#C9A84C] absolute drop-shadow-[0_0_15px_rgba(201,168,76,0.5)]" icon="solar:dna-linear"></iconify-icon>
</div>
</div>
</div>

<div className="md:col-span-1 bg-[#1A1A24] rounded-[2.5rem] border border-[#2A2A35]/30 p-8 flex flex-col relative overflow-hidden group hover:border-[#2A2A35]/60 transition-colors bento-item">
<span className="font-mono-data text-xs text-[#C9A84C] mb-4 block relative z-10">Detail 02</span>
<h3 className="font-sans font-medium text-2xl tracking-tight mb-4 text-[#FAF8F5] relative z-10">Algorithmic Synthesis</h3>
<p className="font-sans text-sm text-[#FAF8F5]/60 leading-relaxed relative z-10 mb-8">
                        Identifying micro-deficiencies before they manifest clinically.
                    </p>
<div className="flex-1 w-full relative flex items-center justify-center">
<div className="w-32 h-32 grid grid-cols-4 grid-rows-4 gap-1.5 relative" id="proto-laser-grid">
<div className="bg-[#FAF8F5]/5 rounded-sm"></div><div className="bg-[#FAF8F5]/5 rounded-sm"></div><div className="bg-[#FAF8F5]/5 rounded-sm"></div><div className="bg-[#FAF8F5]/5 rounded-sm"></div>
<div className="bg-[#FAF8F5]/5 rounded-sm"></div><div className="bg-[#C9A84C]/40 rounded-sm"></div><div className="bg-[#FAF8F5]/5 rounded-sm"></div><div className="bg-[#FAF8F5]/5 rounded-sm"></div>
<div className="bg-[#FAF8F5]/5 rounded-sm"></div><div className="bg-[#FAF8F5]/5 rounded-sm"></div><div className="bg-[#C9A84C]/40 rounded-sm"></div><div className="bg-[#FAF8F5]/5 rounded-sm"></div>
<div className="bg-[#FAF8F5]/5 rounded-sm"></div><div className="bg-[#FAF8F5]/5 rounded-sm"></div><div className="bg-[#FAF8F5]/5 rounded-sm"></div><div className="bg-[#FAF8F5]/5 rounded-sm"></div>
<div className="absolute top-0 left-0 w-full h-0.5 bg-[#C9A84C] shadow-[0_0_15px_#C9A84C] z-10" id="proto-laser"></div>
</div>
</div>
</div>

<div className="md:col-span-3 bg-[#21212E] rounded-[2.5rem] border border-[#2A2A35]/30 p-8 md:p-12 flex flex-col md:flex-row items-center relative overflow-hidden group hover:border-[#2A2A35]/60 transition-colors bento-item">
<div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C]/5 to-transparent"></div>
<div className="w-full md:w-1/3 mb-8 md:mb-0 relative z-10 pr-8">
<span className="font-mono-data text-xs text-[#C9A84C] mb-4 block">Detail 03</span>
<h3 className="font-sans font-medium text-3xl tracking-tight mb-4 text-[#FAF8F5]">Precision Intervention</h3>
<p className="font-sans text-sm text-[#FAF8F5]/60 leading-relaxed">
                            Execution of targeted peptides, customized pharmacology, and cellular optimization routines. Driven directly by the scroll physics below.
                        </p>
</div>
<div className="w-full md:w-2/3 h-full relative z-10 flex items-center justify-end" id="ekg-container">
<svg className="w-full h-32 md:h-48" fill="none" preserveaspectratio="none" viewbox="0 0 600 100" xmlns="http://www.w3.org/2000/svg">
<path d="M0 50 H150 L180 20 L220 90 L260 10 L300 80 L330 50 H600" id="proto-ekg" stroke="#C9A84C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
<path d="M0 50 H150 L180 20 L220 90 L260 10 L300 80 L330 50 H600" stroke="#FAF8F5" strokeLinecap="round" strokeLinejoin="round" stroke-opacity="0.05" strokeWidth="2.5"></path>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="h-[200vh] bg-[#0D0D12] relative z-20" id="interstitial-wrap">
<div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-6">
<div className="absolute inset-0 bg-grid-pattern opacity-10" id="inter-grid"></div>
<div className="absolute w-[40vw] h-[40vw] bg-[#C9A84C]/20 rounded-full blur-[100px] mix-blend-screen scale-50 opacity-0" id="inter-orb"></div>
<div className="relative z-10 text-center flex flex-col items-center w-full max-w-5xl">
<div className="overflow-hidden w-full pb-1">
<h2 className="font-sans font-medium text-5xl md:text-[8rem] tracking-tighter text-[#FAF8F5] leading-none translate-y-full opacity-0 uppercase" id="inter-text">
                        Transcend
                    </h2>
</div>
<div className="overflow-hidden w-full pt-1">
<h2 className="font-serif-drama italic font-medium text-5xl md:text-[8rem] tracking-tighter text-[#C9A84C] leading-none -translate-y-full opacity-0" id="inter-text-2">
                        Limitations.
                    </h2>
</div>
</div>
</div>
</section>

<section className="bg-[#0D0D12] text-[#FAF8F5] overflow-hidden" id="hardware-scroll">
<div className="h-screen flex flex-col justify-center relative py-24">
<div className="absolute top-24 left-6 md:left-16 z-20 pointer-events-none">
<span className="font-mono-data text-xs text-[#C9A84C] tracking-tight uppercase mb-4 block">Clinical Infrastructure</span>
<h2 className="font-sans font-medium text-4xl md:text-5xl tracking-tight">Proprietary<br/><span className="font-serif-drama italic font-medium text-[#C9A84C]">Hardware.</span></h2>
</div>
<div className="hardware-track-container flex gap-8 px-6 md:px-16 items-center mt-32 h-[55vh]">

<div className="w-[85vw] md:w-[45vw] flex-shrink-0 h-full bg-[#15151A] rounded-[2.5rem] border border-[#2A2A35]/50 p-10 flex flex-col justify-end relative overflow-hidden group">
<div className="absolute inset-0 hardware-img-parallax opacity-40 bg-[url('https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&amp;fit=crop&amp;q=80&amp;w=2000')] bg-cover bg-center mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/50 to-transparent"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full border border-[#C9A84C]/30 flex items-center justify-center mb-6 backdrop-blur-md">
<iconify-icon className="text-xl text-[#C9A84C]" icon="solar:scanner-linear"></iconify-icon>
</div>
<h3 className="font-sans font-medium text-3xl tracking-tight mb-2">Next-Gen MRI</h3>
<p className="font-sans text-sm text-[#FAF8F5]/60 max-w-sm">Sub-millimeter resolution for early-stage pathology detection, establishing structural baselines.</p>
</div>
</div>

<div className="w-[85vw] md:w-[45vw] flex-shrink-0 h-full bg-[#15151A] rounded-[2.5rem] border border-[#2A2A35]/50 p-10 flex flex-col justify-end relative overflow-hidden group">
<div className="absolute inset-0 hardware-img-parallax opacity-40 bg-[url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&amp;fit=crop&amp;q=80&amp;w=2000')] bg-cover bg-center mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/50 to-transparent"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full border border-[#C9A84C]/30 flex items-center justify-center mb-6 backdrop-blur-md">
<iconify-icon className="text-xl text-[#C9A84C]" icon="solar:test-tube-minimalistic-linear"></iconify-icon>
</div>
<h3 className="font-sans font-medium text-3xl tracking-tight mb-2">Liquid Biopsy Array</h3>
<p className="font-sans text-sm text-[#FAF8F5]/60 max-w-sm">Proprietary sequencing tech to identify circulating tumor DNA and epigenetic methylation markers.</p>
</div>
</div>

<div className="w-[85vw] md:w-[45vw] flex-shrink-0 h-full bg-[#15151A] rounded-[2.5rem] border border-[#2A2A35]/50 p-10 flex flex-col justify-end relative overflow-hidden group">
<div className="absolute inset-0 hardware-img-parallax opacity-40 bg-[url('https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&amp;fit=crop&amp;q=80&amp;w=2000')] bg-cover bg-center mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/50 to-transparent"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full border border-[#C9A84C]/30 flex items-center justify-center mb-6 backdrop-blur-md">
<iconify-icon className="text-xl text-[#C9A84C]" icon="solar:pill-linear"></iconify-icon>
</div>
<h3 className="font-sans font-medium text-3xl tracking-tight mb-2">Compounding Lab</h3>
<p className="font-sans text-sm text-[#FAF8F5]/60 max-w-sm">In-house formulation of targeted peptides and longevity pharmacology, precision-dosed daily.</p>
</div>
</div>

<div className="w-[85vw] md:w-[45vw] flex-shrink-0 h-full bg-[#15151A] rounded-[2.5rem] border border-[#2A2A35]/50 p-10 flex flex-col justify-end relative overflow-hidden group">
<div className="absolute inset-0 hardware-img-parallax opacity-40 bg-[url('https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&amp;fit=crop&amp;q=80&amp;w=2000')] bg-cover bg-center mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/50 to-transparent"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full border border-[#C9A84C]/30 flex items-center justify-center mb-6 backdrop-blur-md">
<iconify-icon className="text-xl text-[#C9A84C]" icon="solar:smart-watch-linear"></iconify-icon>
</div>
<h3 className="font-sans font-medium text-3xl tracking-tight mb-2">Continuous Telemetry</h3>
<p className="font-sans text-sm text-[#FAF8F5]/60 max-w-sm">Real-time physiological streaming, feeding the intelligence engine with non-stop biofeedback.</p>
</div>
</div>

<div className="w-[85vw] md:w-[45vw] flex-shrink-0 h-full bg-[#15151A] rounded-[2.5rem] border border-[#2A2A35]/50 p-10 flex flex-col justify-end relative overflow-hidden group">
<div className="absolute inset-0 hardware-img-parallax opacity-40 bg-[url('https://images.unsplash.com/photo-1581093806997-124204d9fa9d?auto=format&amp;fit=crop&amp;q=80&amp;w=2000')] bg-cover bg-center mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/50 to-transparent"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full border border-[#C9A84C]/30 flex items-center justify-center mb-6 backdrop-blur-md">
<iconify-icon className="text-xl text-[#C9A84C]" icon="solar:snow-linear"></iconify-icon>
</div>
<h3 className="font-sans font-medium text-3xl tracking-tight mb-2">Environmental Chambers</h3>
<p className="font-sans text-sm text-[#FAF8F5]/60 max-w-sm">Hyperbaric and cryo-adaptation suites utilized to stress-test and fortify cellular resilience.</p>
</div>
</div>

<div className="w-[85vw] md:w-[45vw] flex-shrink-0 h-full bg-[#15151A] rounded-[2.5rem] border border-[#2A2A35]/50 p-10 flex flex-col justify-end relative overflow-hidden group">
<div className="absolute inset-0 hardware-img-parallax opacity-40 bg-[url('https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&amp;fit=crop&amp;q=80&amp;w=2000')] bg-cover bg-center mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/50 to-transparent"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full border border-[#C9A84C]/30 flex items-center justify-center mb-6 backdrop-blur-md">
<iconify-icon className="text-xl text-[#C9A84C]" icon="solar:brain-linear"></iconify-icon>
</div>
<h3 className="font-sans font-medium text-3xl tracking-tight mb-2">Neural Mapping</h3>
<p className="font-sans text-sm text-[#FAF8F5]/60 max-w-sm">High-density EEG arrays mapping cognitive load, sleep architecture, and neuro-plasticity potential.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#C9A84C] text-[#0D0D12] px-6 md:px-16 overflow-hidden rounded-[3rem] -mt-12 relative z-30">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center md:text-left">
<div className="metric-block">
<div className="font-serif-drama italic font-medium text-6xl md:text-7xl tracking-tighter mb-2 flex justify-center md:justify-start">
<span className="metric-num" data-target="5.2">0</span><span className="text-4xl mt-2 ml-1">yrs</span>
</div>
<div className="font-mono-data text-xs uppercase tracking-tight font-medium opacity-70">Avg. Bio Age Reversal</div>
</div>
<div className="metric-block">
<div className="font-serif-drama italic font-medium text-6xl md:text-7xl tracking-tighter mb-2 flex justify-center md:justify-start">
<span className="text-4xl mt-2 mr-1">-</span><span className="metric-num" data-target="42">0</span><span className="text-4xl mt-2 ml-1">%</span>
</div>
<div className="font-mono-data text-xs uppercase tracking-tight font-medium opacity-70">Inflammation Drop</div>
</div>
<div className="metric-block">
<div className="font-serif-drama italic font-medium text-6xl md:text-7xl tracking-tighter mb-2 flex justify-center md:justify-start">
<span className="text-4xl mt-2 mr-1">+</span><span className="metric-num" data-target="68">0</span><span className="text-4xl mt-2 ml-1">%</span>
</div>
<div className="font-mono-data text-xs uppercase tracking-tight font-medium opacity-70">Hormonal Optimization</div>
</div>
<div className="metric-block">
<div className="font-serif-drama italic font-medium text-6xl md:text-7xl tracking-tighter mb-2 flex justify-center md:justify-start">
<span className="metric-num" data-target="150">0</span><span className="text-4xl mt-2 ml-1">+</span>
</div>
<div className="font-mono-data text-xs uppercase tracking-tight font-medium opacity-70">Biomarkers Tracked</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#FAF8F5] text-[#0D0D12] px-6 md:px-16 rounded-[3rem] -mt-12 z-20 overflow-hidden" id="membership">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<h2 className="font-sans font-medium text-4xl md:text-6xl tracking-tight mb-6">Select your <span className="font-serif-drama italic font-medium text-[#C9A84C]">stratum.</span></h2>
<p className="font-sans text-base text-[#2A2A35]/70 max-w-lg mx-auto">Access to the Nura Intelligence platform is strictly limited to ensure uncompromising clinical attention.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">

<div className="bg-white border border-[#2A2A35]/10 rounded-[2.5rem] p-10 hover:-translate-y-2 transition-transform duration-500">
<h3 className="font-sans font-medium text-2xl tracking-tight mb-2">Essential</h3>
<p className="font-sans text-sm text-[#2A2A35]/60 mb-8 h-10">Advanced diagnostics and quarterly protocol adjustments.</p>
<div className="mb-8">
<span className="font-sans font-medium text-4xl tracking-tight">$2,500</span>
<span className="font-sans text-sm text-[#2A2A35]/50">/yr</span>
</div>
<ul className="space-y-4 font-sans text-sm text-[#2A2A35]/80 mb-10">
<li className="flex items-center gap-3"><iconify-icon className="text-[#C9A84C] text-lg" icon="solar:check-circle-linear"></iconify-icon> Annual Blood Panel (150+ markers)</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#C9A84C] text-lg" icon="solar:check-circle-linear"></iconify-icon> Baseline Genomic Sequencing</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#C9A84C] text-lg" icon="solar:check-circle-linear"></iconify-icon> App Access &amp; Basic Telemetry</li>
</ul>
<button className="w-full py-4 rounded-full border border-[#2A2A35]/20 font-sans font-medium text-sm tracking-tight hover:bg-[#0D0D12] hover:text-[#FAF8F5] transition-colors duration-300">Join Waitlist</button>
</div>

<div className="bg-[#0D0D12] text-[#FAF8F5] rounded-[3rem] p-12 md:scale-105 shadow-2xl relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-[#C9A84C]/10 to-transparent pointer-events-none"></div>
<div className="absolute top-6 right-8 bg-[#C9A84C]/20 text-[#C9A84C] font-mono-data text-xs px-3 py-1 rounded-full border border-[#C9A84C]/30">Most Selected</div>
<h3 className="font-sans font-medium text-2xl tracking-tight mb-2 relative z-10">Performance</h3>
<p className="font-sans text-sm text-[#FAF8F5]/60 mb-8 h-10 relative z-10">Continuous telemetry and real-time intervention adjustments.</p>
<div className="mb-8 relative z-10">
<span className="font-sans font-medium text-5xl tracking-tight">$8,000</span>
<span className="font-sans text-sm text-[#FAF8F5]/50">/yr</span>
</div>
<ul className="space-y-4 font-sans text-sm text-[#FAF8F5]/80 mb-10 relative z-10">
<li className="flex items-center gap-3"><iconify-icon className="text-[#C9A84C] text-lg" icon="solar:check-circle-bold"></iconify-icon> Quarterly Comprehensive Panels</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#C9A84C] text-lg" icon="solar:check-circle-bold"></iconify-icon> Wearable Data Sync &amp; Analysis</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#C9A84C] text-lg" icon="solar:check-circle-bold"></iconify-icon> Custom Supplement Compounding</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#C9A84C] text-lg" icon="solar:check-circle-bold"></iconify-icon> Monthly Physician Review</li>
</ul>
<button className="btn-hover-effect w-full py-4 rounded-full bg-[#C9A84C] text-[#0D0D12] font-sans font-medium text-sm tracking-tight shadow-lg shadow-[#C9A84C]/20 relative z-10">
<div className="btn-bg-slide bg-white"></div>
<span className="relative z-10">Apply for Access</span>
</button>
</div>

<div className="bg-white border border-[#2A2A35]/10 rounded-[2.5rem] p-10 hover:-translate-y-2 transition-transform duration-500">
<h3 className="font-sans font-medium text-2xl tracking-tight mb-2">Enterprise</h3>
<p className="font-sans text-sm text-[#2A2A35]/60 mb-8 h-10">Unrestricted access for peak biological optimization.</p>
<div className="mb-8">
<span className="font-sans font-medium text-4xl tracking-tight">Custom</span>
</div>
<ul className="space-y-4 font-sans text-sm text-[#2A2A35]/80 mb-10">
<li className="flex items-center gap-3"><iconify-icon className="text-[#C9A84C] text-lg" icon="solar:check-circle-linear"></iconify-icon> Full Body MRI &amp; Cancer Screening</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#C9A84C] text-lg" icon="solar:check-circle-linear"></iconify-icon> Advanced Pharmacological Interventions</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#C9A84C] text-lg" icon="solar:check-circle-linear"></iconify-icon> 24/7 Concierge Care Team</li>
</ul>
<button className="w-full py-4 rounded-full border border-[#2A2A35]/20 font-sans font-medium text-sm tracking-tight hover:bg-[#0D0D12] hover:text-[#FAF8F5] transition-colors duration-300">Inquire</button>
</div>
</div>
</div>
</section>

<footer className="bg-[#0D0D12] text-[#FAF8F5] rounded-t-[4rem] px-6 md:px-16 pt-32 pb-8 -mt-12 relative z-10">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24 border-b border-[#2A2A35]/30 pb-16">
<div className="col-span-1 md:col-span-2">
<a className="font-sans font-medium text-2xl tracking-tighter uppercase flex items-center gap-2 mb-6" href="#">
<iconify-icon className="text-3xl text-[#C9A84C]" icon="solar:infinity-linear"></iconify-icon>
                        Nura
                    </a>
<p className="font-sans text-sm text-[#FAF8F5]/50 max-w-sm mb-8 leading-relaxed">Precision longevity medicine powered by biological data. Engineered for those who demand absolute control over their health trajectory.</p>
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#2A2A35]/50 bg-[#15151A]">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="font-mono-data text-xs text-[#FAF8F5]/80 uppercase tracking-tight">Intelligence System Operational</span>
</div>
</div>
<div>
<h4 className="font-sans font-medium text-base mb-6 tracking-tight text-[#C9A84C]">Platform</h4>
<ul className="space-y-4 font-sans text-sm text-[#FAF8F5]/60">
<li><a className="hover:text-[#FAF8F5] transition-colors inline-block hover:translate-x-1 duration-300" href="#">The Protocol</a></li>
<li><a className="hover:text-[#FAF8F5] transition-colors inline-block hover:translate-x-1 duration-300" href="#">Clinical Intelligence</a></li>
<li><a className="hover:text-[#FAF8F5] transition-colors inline-block hover:translate-x-1 duration-300" href="#">Biomarkers</a></li>
<li><a className="hover:text-[#FAF8F5] transition-colors inline-block hover:translate-x-1 duration-300" href="#">Membership</a></li>
</ul>
</div>
<div>
<h4 className="font-sans font-medium text-base mb-6 tracking-tight text-[#C9A84C]">Institute</h4>
<ul className="space-y-4 font-sans text-sm text-[#FAF8F5]/60">
<li><a className="hover:text-[#FAF8F5] transition-colors inline-block hover:translate-x-1 duration-300" href="#">Our Philosophy</a></li>
<li><a className="hover:text-[#FAF8F5] transition-colors inline-block hover:translate-x-1 duration-300" href="#">Medical Board</a></li>
<li><a className="hover:text-[#FAF8F5] transition-colors inline-block hover:translate-x-1 duration-300" href="#">Research Journal</a></li>
<li><a className="hover:text-[#FAF8F5] transition-colors inline-block hover:translate-x-1 duration-300" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-xs text-[#FAF8F5]/40">
<p>© 2024 Nura Health Inc. All biological data strictly encrypted.</p>
<div className="flex gap-6">
<a className="hover:text-[#FAF8F5] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#FAF8F5] transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
