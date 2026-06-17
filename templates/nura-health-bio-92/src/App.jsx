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



                                 // Simple inline dash animation for SVGs
                                 gsap.to(".dash-path", {
                                     strokeDasharray: 1000,
                                     strokeDashoffset: 1000,
                                     duration: 2,
                                     repeat: -1,
                                     ease: "power1.inOut",
                                     yoyo: true,
                                     onStart: function() { this.targets()[0].style.strokeDashoffset = 0; }
                                 });
                             


        document.addEventListener('DOMContentLoaded', () => {
            gsap.registerPlugin(ScrollTrigger);

            /* 1. Navbar Morphing */
            const navbar = document.getElementById('navbar');
            const navText = document.querySelectorAll('.nav-text');
            const navBtn = document.querySelector('.nav-btn');

            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    navbar.classList.add('bg-white/60', 'backdrop-blur-xl', 'border-gray-200', 'shadow-sm');
                    navText.forEach(el => el.classList.remove('text-[#F2F0E9]'));
                    navText.forEach(el => el.classList.add('text-[#2E4036]'));
                    navBtn.classList.replace('bg-white/20', 'bg-[#2E4036]');
                    navBtn.classList.replace('text-[#F2F0E9]', 'text-white');
                    navBtn.classList.replace('border-white/30', 'border-transparent');
                } else {
                    navbar.classList.remove('bg-white/60', 'backdrop-blur-xl', 'border-gray-200', 'shadow-sm');
                    navText.forEach(el => el.classList.add('text-[#F2F0E9]'));
                    navText.forEach(el => el.classList.remove('text-[#2E4036]'));
                    navBtn.classList.replace('bg-[#2E4036]', 'bg-white/20');
                    navBtn.classList.replace('text-white', 'text-[#F2F0E9]');
                    navBtn.classList.replace('border-transparent', 'border-white/30');
                }
            });

            /* 2. Hero Animation */
            const tl = gsap.timeline();
            tl.from('.hero-line h1', {
                y: 100,
                opacity: 0,
                duration: 1.5,
                stagger: 0.2,
                ease: "power4.out"
            })
            .to('.hero-meta', { opacity: 1, duration: 1 }, "-=0.5")
            .to('.hero-cta', { opacity: 1, x: 0, duration: 1 }, "-=0.8");

            /* 3. Feature: Diagnostic Shuffler */
            const stackContainer = document.getElementById('card-stack-container');
            const cardsData = ["Epigenetic Age", "Microbiome Score", "Cortisol Optimization"];
            
            // Create cards
            cardsData.forEach((label, i) => {
                const card = document.createElement('div');
                card.className = `absolute w-48 h-64 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center p-4 text-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] text-[#2E4036] font-medium text-sm`;
                card.innerHTML = `<span class="opacity-80">${label}</span>`;
                // Initial stack position
                card.style.zIndex = 3 - i;
                card.style.transform = `translateY(${i * 10}px) scale(${1 - i * 0.05})`;
                card.style.opacity = 1 - (i * 0.2);
                stackContainer.appendChild(card);
            });

            const stackCards = Array.from(stackContainer.children);
            let activeIndex = 0;

            setInterval(() => {
                // Shift visual state
                stackCards.forEach((card, i) => {
                    const offset = (i - activeIndex + 3) % 3; // 0, 1, 2
                    
                    if (offset === 0) {
                        // Front card moves to back
                        card.style.zIndex = 3;
                        card.style.transform = 'translateY(0) scale(1)';
                        card.style.opacity = '1';
                    } else if (offset === 1) {
                         // Middle
                        card.style.zIndex = 2;
                        card.style.transform = 'translateY(10px) scale(0.95)';
                        card.style.opacity = '0.8';
                    } else {
                        // Back
                        card.style.zIndex = 1;
                        card.style.transform = 'translateY(20px) scale(0.90)';
                        card.style.opacity = '0.6';
                    }
                });
                activeIndex = (activeIndex + 1) % 3;
            }, 3000);

            /* 4. Feature: Typewriter */
            const feed = document.getElementById('telemetry-feed');
            const messages = [
                "Analysis complete: Biomarker panel A7",
                "Optimizing circadian rhythm...",
                "Cortisol spike detected. Regulating.",
                "Methylation status: Optimal",
                "Deep sleep cycles: +14% vs baseline"
            ];
            let msgIndex = 0;

            function typeWriter() {
                if(feed.children.length > 4) feed.removeChild(feed.lastChild);
                
                const div = document.createElement('div');
                div.className = "flex items-center gap-2";
                div.innerHTML = `<span class="text-[#CC5833]">></span> <span class="typing-text"></span>`;
                feed.prepend(div);

                const span = div.querySelector('.typing-text');
                const text = messages[msgIndex];
                let charIndex = 0;

                const typeInterval = setInterval(() => {
                    if(charIndex < text.length) {
                        span.textContent += text.charAt(charIndex);
                        charIndex++;
                    } else {
                        clearInterval(typeInterval);
                        span.classList.add('cursor-blink'); // Add blinking cursor effect at end
                        setTimeout(() => span.classList.remove('cursor-blink'), 2000);
                    }
                }, 50);

                msgIndex = (msgIndex + 1) % messages.length;
            }
            setInterval(typeWriter, 4000);
            typeWriter(); // Init

            /* 5. Feature: Mock Cursor */
            const grid = document.getElementById('regimen-grid');
            // Build Grid
            for(let i=0; i<16; i++) {
                const day = document.createElement('div');
                day.className = "bg-gray-100 rounded-lg w-full h-full transition-colors duration-300";
                day.id = `grid-day-${i}`;
                grid.appendChild(day);
            }

            const cursorTimeline = gsap.timeline({ repeat: -1 });
            const cursor = document.getElementById('mock-cursor');

            cursorTimeline
                .to(cursor, { x: 100, y: 100, duration: 1, ease: "power2.inOut" })
                .to(cursor, { scale: 0.8, duration: 0.1 })
                .to("#grid-day-5", { backgroundColor: "#CC5833", duration: 0.1 }, "<")
                .to(cursor, { scale: 1, duration: 0.1 })
                .to(cursor, { x: 200, y: 50, duration: 1, ease: "power2.inOut", delay: 0.2 })
                .to(cursor, { scale: 0.8, duration: 0.1 })
                .to("#grid-day-3", { backgroundColor: "#CC5833", duration: 0.1 }, "<")
                .to(cursor, { scale: 1, duration: 0.1 })
                .to(cursor, { x: 50, y: 150, duration: 1, ease: "power2.inOut", delay: 0.2 })
                .to(".bg-[#CC5833]", { backgroundColor: "#F3F4F6", duration: 0.5 }); // Reset grid


            /* 6. Philosophy Parallax */
            gsap.to("#parallax-bg img", {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: "#parallax-bg",
                    scrub: true
                }
            });

            const revealText = document.querySelectorAll('.reveal-text');
            revealText.forEach(text => {
                gsap.from(text, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: text,
                        start: "top 80%"
                    }
                });
            });

            /* 7. Protocol Stacking Cards */
            const protocolCards = gsap.utils.toArray('.protocol-card');
            
            protocolCards.forEach((card, i) => {
                if (i === protocolCards.length - 1) return; // Don't animate the last card out
                
                gsap.to(card, {
                    scale: 0.9,
                    opacity: 0.5,
                    filter: "blur(10px)",
                    scrollTrigger: {
                        trigger: protocolCards[i+1], // When next card hits...
                        start: "top top", // ... the top of the viewport
                        end: "top 20%",
                        scrub: true,
                    }
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
      

<div className="noise-overlay"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 w-[90%] max-w-4xl rounded-full px-8 py-4 flex items-center justify-between border border-transparent" id="navbar">
<div className="flex items-center gap-2">
<iconify-icon className="nav-text transition-colors duration-500" icon="solar:dna-linear" width="24"></iconify-icon>
<span className="text-sm font-medium tracking-widest uppercase nav-text transition-colors duration-500">Nura Health</span>
</div>
<div className="hidden md:flex gap-8 text-xs font-medium tracking-wide nav-text transition-colors duration-500">
<a className="hover:opacity-60 transition-opacity" href="#">DIAGNOSTICS</a>
<a className="hover:opacity-60 transition-opacity" href="#">PROTOCOL</a>
<a className="hover:opacity-60 transition-opacity" href="#">MEMBERSHIP</a>
</div>
<button className="nav-btn bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-xs font-semibold tracking-wide border border-white/30 hover:scale-105 transition-transform duration-300">
            PATIENT LOGIN
        </button>
</nav>

<section className="relative h-[100dvh] w-full overflow-hidden flex items-end pb-20 md:pb-32 px-6 md:px-12 bg-[#1A1A1A]">

<div className="absolute inset-0 z-0">
<img alt="Dark forest" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2E4036] via-[#1A1A1A]/60 to-transparent mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-90"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
<div className="md:col-span-8 space-y-2">
<div className="hero-line overflow-hidden">
<h1 className="text-[#F2F0E9] text-5xl md:text-8xl lg:text-9xl font-semibold tracking-tight leading-[0.9]">
                        Nature is the
                    </h1>
</div>
<div className="hero-line overflow-hidden">
<h1 className="text-[#CC5833] text-5xl md:text-8xl lg:text-9xl font-serif-italic leading-[0.9]">
                        Algorithm.
                    </h1>
</div>
<div className="hero-meta opacity-0 mt-8 flex flex-col md:flex-row gap-6 md:items-center text-[#F2F0E9]/80 font-mono-tech text-xs tracking-wider">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:infinity-linear" width="16"></iconify-icon>
<span>SYSTEM OPTIMAL</span>
</div>
<div className="h-px w-8 bg-white/20 hidden md:block"></div>
<div>BIO-REGENERATIVE MEDICINE</div>
</div>
</div>
<div className="md:col-span-4 flex flex-col justify-end items-start md:items-end">
<div className="hero-cta opacity-0 backdrop-blur-sm bg-white/5 border border-white/10 p-1 rounded-full flex items-center pr-6 gap-4 cursor-pointer group hover:bg-white/10 transition-colors">
<div className="w-10 h-10 rounded-full bg-[#CC5833] flex items-center justify-center text-[#F2F0E9] group-hover:scale-110 transition-transform duration-500 ease-[0.16,1,0.3,1]">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
<span className="text-[#F2F0E9] text-sm tracking-wide font-medium">Initialize Sequence</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#F2F0E9] relative">
<div className="max-w-7xl mx-auto mb-20">
<span className="text-[#CC5833] font-mono-tech text-xs tracking-widest mb-4 block">SYSTEM TELEMETRY</span>
<h2 className="text-[#2E4036] text-4xl md:text-6xl tracking-tight font-medium">
                Quantified <span className="font-serif-italic">Biology</span>
</h2>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="relative h-[400px] bg-[#EAE8E0] rounded-[2rem] overflow-hidden group border border-[#2E4036]/5">
<div className="absolute inset-0 p-8 flex flex-col justify-between z-20 pointer-events-none">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#2E4036]" icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
<span className="font-mono-tech text-[10px] text-[#2E4036]/60">SHUFFLE_MODE</span>
</div>
<h3 className="text-[#2E4036] text-xl font-medium tracking-tight">Audit<br/>Intelligence</h3>
</div>
<div className="absolute inset-0 flex items-center justify-center" id="card-stack-container">

</div>
</div>

<div className="relative h-[400px] bg-[#1A1A1A] rounded-[2rem] overflow-hidden p-8 flex flex-col justify-between border border-[#2E4036]/5">
<div className="flex justify-between items-start text-[#F2F0E9]/50">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#CC5833] animate-pulse"></div>
<span className="font-mono-tech text-[10px]">LIVE_FEED</span>
</div>
<iconify-icon icon="solar:server-square-linear" width="24"></iconify-icon>
</div>
<div className="font-mono-tech text-sm text-[#F2F0E9] h-32 overflow-hidden relative">
<div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#F2F0E9]/10"></div>
<div className="pl-4 space-y-4" id="telemetry-feed">

</div>
</div>
<div>
<h3 className="text-[#F2F0E9] text-xl font-medium tracking-tight mb-1">Neural Stream</h3>
<p className="text-[#F2F0E9]/60 text-sm">Real-time biomarker synchronization.</p>
</div>
</div>

<div className="relative h-[400px] bg-white rounded-[2rem] overflow-hidden border border-[#2E4036]/5">
<div className="absolute inset-0 p-8 flex flex-col z-10 pointer-events-none">
<span className="font-mono-tech text-[10px] text-[#2E4036]/60 mb-auto">PROTOCOL_DESIGNER</span>
<h3 className="text-[#2E4036] text-xl font-medium tracking-tight">Adaptive<br/>Regimen</h3>
</div>

<div className="absolute right-0 bottom-0 w-3/4 h-3/4 p-6">
<div className="grid grid-cols-4 gap-3 h-full w-full opacity-50" id="regimen-grid">

</div>
</div>

<div className="absolute top-1/2 left-1/2 w-6 h-6 z-30 pointer-events-none text-[#2E4036]" id="mock-cursor">
<svg className="drop-shadow-xl" fill="currentColor" viewbox="0 0 24 24">
<path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19138L11.7841 12.3673H5.65376Z" stroke="white" strokeWidth="1"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="relative min-h-screen flex items-center bg-[#1A1A1A] overflow-hidden py-32">

<div className="absolute inset-0 opacity-20" id="parallax-bg">
<img alt="Organic texture" className="w-full h-[120%] object-cover object-center" src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="text-white/40 text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight reveal-text">
                Modern medicine asks: <br/>
<span className="line-through decoration-[#CC5833]/50 decoration-2">What is wrong?</span>
</div>
<div className="text-[#F2F0E9] text-4xl md:text-6xl lg:text-7xl font-serif-italic leading-tight reveal-text">
                We ask: <br/>
<span className="text-[#CC5833]">What is optimal?</span>
</div>
</div>
</section>

<section className="bg-[#F2F0E9] pt-20 pb-40 px-4 md:px-8" id="protocol-section">
<div className="max-w-screen-xl mx-auto">
<div className="text-center mb-24">
<span className="text-[#CC5833] font-mono-tech text-xs tracking-widest uppercase">The Methodology</span>
</div>
<div className="relative">

<div className="sticky top-6 min-h-[90vh] w-full mb-12 protocol-card origin-top">
<div className="bg-[#2E4036] rounded-[2.5rem] p-8 md:p-16 h-full flex flex-col md:flex-row gap-12 overflow-hidden relative shadow-2xl shadow-[#2E4036]/20">
<div className="w-full md:w-1/2 relative z-10 flex flex-col justify-center">
<div className="text-[#CC5833] font-mono-tech text-xs mb-4">PHASE_01</div>
<h3 className="text-[#F2F0E9] text-5xl md:text-7xl font-serif-italic mb-6">Molecular Decoding.</h3>
<p className="text-[#F2F0E9]/70 text-lg leading-relaxed max-w-md">We analyze 500+ biomarkers to construct a digital twin of your biology. Beyond standard ranges.</p>
</div>
<div className="w-full md:w-1/2 relative flex items-center justify-center">

<div className="relative w-64 h-64 md:w-96 md:h-96 opacity-20">
<iconify-icon className="text-[#F2F0E9] w-full h-full loader-spin" icon="solar:settings-minimalistic-bold" width="100%"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="sticky top-12 min-h-[90vh] w-full mb-12 protocol-card origin-top">
<div className="bg-[#E5E2D6] rounded-[2.5rem] p-8 md:p-16 h-full flex flex-col md:flex-row gap-12 overflow-hidden relative shadow-2xl">
<div className="w-full md:w-1/2 relative z-10 flex flex-col justify-center">
<div className="text-[#2E4036] font-mono-tech text-xs mb-4">PHASE_02</div>
<h3 className="text-[#2E4036] text-5xl md:text-7xl font-serif-italic mb-6">Cellular Calibration.</h3>
<p className="text-[#2E4036]/70 text-lg leading-relaxed max-w-md">Targeted compound introduction to upregulate mitochondrial function and optimize hormonal substrates.</p>
</div>
<div className="w-full md:w-1/2 relative flex items-center justify-center overflow-hidden rounded-3xl bg-[#D6D3C5]">

<div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 p-4 opacity-30">
<div className="bg-[#2E4036] rounded-sm"></div> <div className="bg-[#2E4036] rounded-sm"></div> <div className="bg-[#2E4036] rounded-sm"></div> <div className="bg-[#2E4036] rounded-sm"></div>
<div className="bg-[#2E4036] rounded-sm"></div> <div className="bg-[#2E4036] rounded-sm"></div> <div className="bg-[#2E4036] rounded-sm"></div> <div className="bg-[#2E4036] rounded-sm"></div>

</div>
<div className="absolute top-0 left-0 w-full h-1 bg-[#CC5833] shadow-[0_0_20px_#CC5833] scan-line z-20"></div>
</div>
</div>
</div>

<div className="sticky top-18 min-h-[90vh] w-full protocol-card origin-top">
<div className="bg-[#F2F0E9] border border-[#2E4036]/10 rounded-[2.5rem] p-8 md:p-16 h-full flex flex-col md:flex-row gap-12 overflow-hidden relative shadow-2xl">
<div className="w-full md:w-1/2 relative z-10 flex flex-col justify-center">
<div className="text-[#CC5833] font-mono-tech text-xs mb-4">PHASE_03</div>
<h3 className="text-[#2E4036] text-5xl md:text-7xl font-serif-italic mb-6">Systemic Longevity.</h3>
<p className="text-[#2E4036]/70 text-lg leading-relaxed max-w-md">Continuous monitoring and algorithmic adjustments ensuring your biological age reverses over time.</p>
</div>
<div className="w-full md:w-1/2 relative flex items-center justify-center">

<svg className="w-full text-[#CC5833]" viewbox="0 0 500 200">
<path className="dash-path" d="M0,100 L100,100 L120,40 L140,160 L160,100 L500,100" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>

</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#F2F0E9]">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

<div className="p-8 rounded-[2rem] border border-[#2E4036]/10 bg-white/50 backdrop-blur-sm">
<h3 className="text-xl font-medium text-[#2E4036]">Audit</h3>
<div className="my-6 text-3xl font-serif-italic text-[#2E4036]">$2,500 <span className="text-sm font-sans text-gray-400 not-italic">/ one-time</span></div>
<ul className="space-y-3 mb-8 text-sm text-[#2E4036]/70">
<li className="flex gap-2"><iconify-icon className="text-[#CC5833]" icon="solar:check-circle-linear"></iconify-icon> Comprehensive Panel</li>
<li className="flex gap-2"><iconify-icon className="text-[#CC5833]" icon="solar:check-circle-linear"></iconify-icon> Epigenetic Age</li>
<li className="flex gap-2"><iconify-icon className="text-[#CC5833]" icon="solar:check-circle-linear"></iconify-icon> 1hr MD Consultation</li>
</ul>
<button className="w-full py-4 rounded-xl border border-[#2E4036]/20 hover:bg-[#2E4036] hover:text-white transition-colors text-xs font-semibold tracking-widest uppercase">Select</button>
</div>

<div className="p-10 rounded-[2.5rem] bg-[#2E4036] text-[#F2F0E9] relative shadow-2xl scale-105 z-10">
<div className="absolute top-6 right-6">
<iconify-icon className="text-[#CC5833]" icon="solar:star-fall-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium">Performance</h3>
<div className="my-6 text-4xl font-serif-italic text-white">$850 <span className="text-sm font-sans text-white/40 not-italic">/ month</span></div>
<ul className="space-y-4 mb-10 text-sm text-[#F2F0E9]/80">
<li className="flex gap-2 items-center"><iconify-icon className="text-[#CC5833]" icon="solar:check-circle-bold"></iconify-icon> Quarterly Diagnostics</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-[#CC5833]" icon="solar:check-circle-bold"></iconify-icon> Wearable Integration</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-[#CC5833]" icon="solar:check-circle-bold"></iconify-icon> Daily Protocol App</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-[#CC5833]" icon="solar:check-circle-bold"></iconify-icon> Supplement Stack</li>
</ul>
<button className="w-full py-4 rounded-xl bg-[#CC5833] text-white hover:bg-[#B34925] transition-colors text-xs font-semibold tracking-widest uppercase shadow-lg shadow-[#CC5833]/30">Apply for Access</button>
</div>

<div className="p-8 rounded-[2rem] border border-[#2E4036]/10 bg-white/50 backdrop-blur-sm">
<h3 className="text-xl font-medium text-[#2E4036]">Concierge</h3>
<div className="my-6 text-3xl font-serif-italic text-[#2E4036]">$2,500 <span className="text-sm font-sans text-gray-400 not-italic">/ month</span></div>
<ul className="space-y-3 mb-8 text-sm text-[#2E4036]/70">
<li className="flex gap-2"><iconify-icon className="text-[#CC5833]" icon="solar:check-circle-linear"></iconify-icon> Monthly Diagnostics</li>
<li className="flex gap-2"><iconify-icon className="text-[#CC5833]" icon="solar:check-circle-linear"></iconify-icon> 24/7 Care Team</li>
<li className="flex gap-2"><iconify-icon className="text-[#CC5833]" icon="solar:check-circle-linear"></iconify-icon> Home Visits</li>
</ul>
<button className="w-full py-4 rounded-xl border border-[#2E4036]/20 hover:bg-[#2E4036] hover:text-white transition-colors text-xs font-semibold tracking-widest uppercase">Inquire</button>
</div>
</div>
</div>
</section>

<footer className="bg-[#1A1A1A] rounded-t-[3rem] md:rounded-t-[4rem] pt-20 pb-10 px-6 md:px-12 text-[#F2F0E9] mt-12 relative overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
<div className="max-w-md">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-[#CC5833]" icon="solar:dna-linear" width="32"></iconify-icon>
<span className="text-2xl font-medium tracking-tight">Nura Health</span>
</div>
<p className="text-white/40 font-serif-italic text-2xl leading-relaxed">
                        Redefining the architecture of human biology through data, design, and precision.
                    </p>
</div>
<div className="flex gap-16 text-sm text-white/60">
<div className="flex flex-col gap-4">
<span className="text-white font-medium mb-2">Platform</span>
<a className="hover:text-[#CC5833] transition-colors" href="#">Science</a>
<a className="hover:text-[#CC5833] transition-colors" href="#">Technology</a>
<a className="hover:text-[#CC5833] transition-colors" href="#">Clinics</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-white font-medium mb-2">Company</span>
<a className="hover:text-[#CC5833] transition-colors" href="#">Manifesto</a>
<a className="hover:text-[#CC5833] transition-colors" href="#">Careers</a>
<a className="hover:text-[#CC5833] transition-colors" href="#">Contact</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="font-mono-tech text-[10px] text-white/30 flex items-center gap-2">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    SYSTEM OPERATIONAL
                </div>
<div className="text-white/30 text-xs">
                    © 2024 Nura Health Inc. All rights reserved.
                </div>
</div>
</div>
</footer>



    </>
  );
}
