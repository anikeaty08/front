import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
bg: '#020203', // Deeper Void Black
card: '#08080A',
border: '#ffffff08',
accent: '#4FD1C5', // Teal 300
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
                
                // Section 3: Narrative Text Reveal (Improved with Scale and Blur)
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

                // Section 4: Horizontal Scroll (With Parallax)
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
                scrollTrigger: { trigger: "#maturity", start: "top center", end: "bottom center", scrub: true }
            });

            // 6. FAQ
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
<span id="counter">0</span>%
                </div>
<div className="absolute inset-0 bg-gradient-to-t from-luxota-bg via-transparent to-transparent z-20"></div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="flex items-center gap-3 text-xs font-mono text-luxota-accent uppercase tracking-[0.2em]">
<iconify-icon className="animate-spin text-lg" icon="solar:refresh-circle-linear"></iconify-icon>
<span>System Initialization</span>
</div>
<div className="w-48 h-[1px] bg-white/10 mt-2 overflow-hidden rounded-full">
<div className="w-full h-full bg-gradient-to-r from-luxota-accent to-white origin-left scale-x-0" id="loader-bar"></div>
</div>
</div>
</div>
</div>

<div className="cursor-dot hidden md:block"></div>
<div className="cursor-outline hidden md:flex">
<span className="cursor-text">Learn more</span>
</div>

<div className="noise"></div>

<nav className="fixed top-8 left-0 right-0 z-50 flex justify-center pointer-events-none opacity-0 reveal-nav">
<div className="pointer-events-auto bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 flex items-center gap-1 shadow-2xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08]">
<a className="px-6 py-2.5 text-xs font-medium text-white/70 hover:text-white rounded-full hover:bg-white/5 transition-all" href="#os">System</a>
<a className="px-6 py-2.5 text-xs font-medium text-white/70 hover:text-white rounded-full hover:bg-white/5 transition-all" href="#maturity">Maturity</a>
<div className="w-px h-4 bg-white/10 mx-2"></div>
<a className="group px-6 py-2.5 text-xs font-bold text-luxota-bg bg-white rounded-full hover:bg-luxota-accent transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]" href="#action">
                Login <span className="hidden group-hover:inline-block ml-1 transition-all">→</span>
</a>
</div>
</nav>

<div className="fixed top-9 left-8 z-40 mix-blend-difference pointer-events-none opacity-0 reveal-nav">
<div className="text-sm font-semibold tracking-tight text-white flex items-center gap-3">
<div className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-luxota-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-luxota-accent shadow-[0_0_15px_#4FD1C5]"></span>
</div>
<span className="tracking-[0.2em] text-xs">LUXOTA</span>
</div>
</div>

<section className="relative h-screen flex flex-col items-center justify-center overflow-hidden" id="os">
<div className="perspective-grid opacity-30"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-luxota-accent/10 rounded-full blur-[150px] pointer-events-none"></div>

<div className="absolute inset-0 -z-10" id="particles-js"></div>
<div className="relative z-10 text-center max-w-7xl px-6">
<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-10 opacity-0 reveal-hero-fade shadow-lg">
<span className="w-1.5 h-1.5 bg-luxota-accent rounded-full shadow-[0_0_10px_#4FD1C5]"></span>
<span className="text-[10px] uppercase tracking-widest text-white/80 font-medium">System v2.0 Live</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-[7rem] font-medium tracking-tightest text-white leading-[0.9] mb-10">
<div className="overflow-hidden py-2"><span className="block reveal-text drop-shadow-2xl">The Operating System</span></div>
<div className="overflow-hidden flex justify-center gap-4 items-center flex-wrap py-2">
<span className="block reveal-text text-white/30 italic font-serif tracking-tight pr-4">for</span>
<span className="block reveal-text text-gradient-premium">Agency Growth</span>
</div>
</h1>
<p className="text-lg md:text-xl text-luxota-dim max-w-xl mx-auto leading-relaxed mb-14 font-light opacity-0 reveal-hero-fade translate-y-4">
                Luxota helps small and medium travel agencies grow — from fragmented operations to structured, scalable businesses.
            </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-6 opacity-0 reveal-hero-fade delay-200">
<button className="group relative px-9 py-4 bg-white text-luxota-bg rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)]">
<div className="btn-glow"></div>
<span className="relative z-10 text-sm font-bold flex items-center gap-2">
                        Initialize System
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
<div className="absolute inset-0 bg-luxota-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo"></div>
</button>
<button className="px-9 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all text-white font-medium text-sm hover:border-white/30 hover:shadow-lg">
                    Talk to an expert
                </button>
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
<span className="text-xs text-luxota-accent font-mono tracking-[0.2em] uppercase">Provenance</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
                        Built on <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Real Operations.</span>
</h2>
<p className="text-luxota-dim text-base mb-10 leading-relaxed border-l border-white/10 pl-6">
                        Luxota isn't a theory. It's an operating system hardened by over a decade of daily use in high-volume agency environments.
                    </p>
<a className="group inline-flex items-center gap-3 text-white text-sm font-medium hover:text-luxota-accent transition-colors" href="#">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-luxota-accent group-hover:bg-luxota-accent/10 transition-all bg-white/5">
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<span className="border-b border-transparent group-hover:border-luxota-accent/50 transition-all">Explore the ecosystem</span>
</a>
</div>

<div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="spotlight-card rounded-[2rem] p-10 flex flex-col justify-between group cursor-none h-full min-h-[400px]">
<div className="absolute right-0 top-0 p-10 opacity-10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
<iconify-icon className="text-[12rem] text-white" icon="solar:calendar-linear"></iconify-icon>
</div>
<div className="relative z-10">
<div className="flex items-start gap-1">
<span className="text-7xl font-medium text-white tracking-tighter">10</span>
<span className="text-luxota-accent text-5xl font-light mt-1">+</span>
</div>
<div className="text-xl text-white font-medium mt-2 mb-1">Years of Operation</div>
<p className="text-sm text-luxota-dim">Continuous runtime in live production environments.</p>
</div>
<div className="relative w-full h-1.5 bg-white/5 rounded-full mt-10 overflow-hidden">
<div className="absolute inset-0 bg-luxota-accent/20"></div>
<div className="h-full bg-luxota-accent w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[1.5s] ease-expo"></div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="spotlight-card rounded-[2rem] p-10 flex flex-col justify-center group cursor-none min-h-[220px]">
<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10">
<div className="flex items-baseline gap-3 mb-2">
<span className="text-4xl font-medium text-white tracking-tight">Hundreds</span>
</div>
<div className="flex items-center gap-2 mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-luxota-accent animate-pulse"></span>
<span className="text-xs font-mono text-luxota-accent uppercase tracking-wider">Active Agencies</span>
</div>
<p className="text-sm text-luxota-dim leading-relaxed">Daily operations managed within the ecosystem.</p>
</div>
</div>

<div className="spotlight-card rounded-[2rem] p-10 flex-1 min-h-[240px] flex flex-col justify-end group cursor-none">
<div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
<svg className="w-full h-full object-cover" preserveaspectratio="xMidYMid slice" viewbox="0 0 400 200">
<path className="group-hover:animate-pulse" d="M50,100 Q100,50 150,100 T250,100 T350,100" fill="none" stroke="white" stroke-dasharray="4 4" strokeWidth="0.5"></path>
<path d="M50,120 Q100,170 150,120 T250,120 T350,120" fill="none" opacity="0.5" stroke="white" stroke-dasharray="4 4" strokeWidth="0.5"></path>
<circle className="animate-ping" cx="250" cy="100" fill="#4FD1C5" r="3"></circle>
<circle cx="250" cy="100" fill="white" r="2"></circle>
</svg>
</div>
<div className="relative z-10 bg-gradient-to-t from-[#08080A] via-[#08080A]/80 to-transparent pt-10">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 rounded-full bg-white/5 border border-white/10">
<iconify-icon className="text-luxota-accent text-lg" icon="solar:globe-linear"></iconify-icon>
</div>
<span className="text-xl font-medium text-white">Global Reach</span>
</div>
<p className="text-sm text-luxota-dim">Multi-region support with localized compliance.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="h-screen flex items-center justify-center bg-luxota-bg relative overflow-hidden z-20" id="narrative-section">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,209,197,0.05),transparent_60%)] pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 text-center relative z-10" id="narrative-content">
<p className="text-4xl md:text-6xl lg:text-8xl font-normal leading-tight tracking-tight text-white flex flex-wrap justify-center gap-x-6 gap-y-4" id="scrolly-text">
<span className="highlight-word opacity-20 blur-sm">Most</span>
<span className="highlight-word opacity-20 blur-sm">platforms</span>
<span className="highlight-word opacity-20 blur-sm">sell</span>
<span className="highlight-word opacity-20 blur-sm text-white font-medium">fragmented</span>
<span className="highlight-word opacity-20 blur-sm text-white font-medium">tools.</span>
<span className="highlight-word opacity-20 blur-sm">Luxota</span>
<span className="highlight-word opacity-20 blur-sm">builds</span>
<span className="highlight-word opacity-20 blur-sm text-luxota-accent">maturity.</span>
<span className="highlight-word opacity-20 blur-sm">We</span>
<span className="highlight-word opacity-20 blur-sm">don't</span>
<span className="highlight-word opacity-20 blur-sm">just</span>
<span className="highlight-word opacity-20 blur-sm">capture</span>
<span className="highlight-word opacity-20 blur-sm">bookings;</span>
<span className="highlight-word opacity-20 blur-sm">we</span>
<span className="highlight-word opacity-20 blur-sm">engineer</span>
<span className="highlight-word opacity-20 blur-sm text-luxota-accent italic font-serif">scalability.</span>
</p>
</div>
</section>

<div className="relative z-30 bg-luxota-bg" id="architecture-wrapper">
<section className="hidden lg:block h-screen relative" id="architecture-pin">
<div className="h-full w-full overflow-hidden bg-luxota-bg flex flex-col justify-center border-t border-white/5">
<div className="absolute top-12 left-0 w-full px-12 flex justify-between items-end z-20">
<div>
<span className="text-xs text-luxota-accent font-mono mb-3 block tracking-widest">[ 02 — ARCHITECTURE ]</span>
<h2 className="text-4xl font-medium text-white tracking-tight">The Core Triad</h2>
</div>
<div className="flex items-center gap-3 text-white/30">
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
<iconify-icon className="animate-bounce text-lg" icon="solar:mouse-circle-linear"></iconify-icon>
</div>
<span className="text-xs font-mono tracking-widest">SCROLL TO EXPLORE</span>
</div>
</div>
<div className="flex gap-16 px-24 pl-[20vw] items-center h-full w-max" id="cards-track">

<div className="w-[70vw] max-w-[900px] h-[65vh] spotlight-card rounded-[2.5rem] p-16 shrink-0 relative flex overflow-hidden border border-white/10 bg-[#050507]">
<div className="w-5/12 flex flex-col justify-between relative z-10 h-full">
<div>
<div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-10 shadow-xl backdrop-blur-md">
<iconify-icon className="text-4xl text-luxota-accent" icon="solar:laptop-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-5xl text-white font-medium mb-6 tracking-tight">Travel Portal</h3>
<p className="text-lg text-luxota-dim leading-relaxed">
                                    The front-end engine. Deploy white-label booking sites in minutes. Completely headless architecture allows for infinite customization.
                                </p>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-4 text-sm text-white/90">
<div className="w-6 h-6 rounded-full bg-luxota-accent/10 flex items-center justify-center">
<iconify-icon className="text-luxota-accent" icon="solar:check-circle-linear"></iconify-icon>
</div>
                                    B2B &amp; B2C Ready
                                </li>
<li className="flex items-center gap-4 text-sm text-white/90">
<div className="w-6 h-6 rounded-full bg-luxota-accent/10 flex items-center justify-center">
<iconify-icon className="text-luxota-accent" icon="solar:check-circle-linear"></iconify-icon>
</div>
                                    Next.js / React Support
                                </li>
</ul>
</div>
<div className="w-7/12 absolute right-0 top-0 bottom-0 bg-gradient-to-l from-white/[0.02] to-transparent flex items-center justify-center overflow-hidden card-graphic-wrapper">
<div className="w-80 h-[28rem] border border-white/10 rounded-2xl relative bg-black/40 backdrop-blur-xl rotate-6 translate-x-12 shadow-2xl transition-transform duration-700 hover:rotate-3">
<div className="absolute top-6 left-6 right-6 h-4 bg-white/10 rounded-full"></div>
<div className="absolute top-16 left-6 w-16 h-16 bg-luxota-accent/20 rounded-full blur-2xl"></div>
<div className="absolute top-16 left-6 w-12 h-12 bg-luxota-accent rounded-full shadow-[0_0_20px_#4FD1C540]"></div>
<div className="absolute bottom-6 left-6 right-6 h-40 bg-white/5 rounded-xl border border-white/5"></div>
</div>
</div>
</div>

<div className="w-[70vw] max-w-[900px] h-[65vh] spotlight-card rounded-[2.5rem] p-16 shrink-0 relative flex overflow-hidden border border-white/10 bg-[#050507]">
<div className="w-5/12 flex flex-col justify-between relative z-10 h-full">
<div>
<div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-10 shadow-xl backdrop-blur-md">
<iconify-icon className="text-4xl text-luxota-accent" icon="solar:network-linear"></iconify-icon>
</div>
<h3 className="text-5xl text-white font-medium mb-6 tracking-tight">ShareHub</h3>
<p className="text-lg text-luxota-dim leading-relaxed">
                                    The liquidity layer. Connect seamlessly with suppliers and other agencies. Inventory flows like water through a unified API.
                                </p>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-4 text-sm text-white/90">
<div className="w-6 h-6 rounded-full bg-luxota-accent/10 flex items-center justify-center">
<iconify-icon className="text-luxota-accent" icon="solar:check-circle-linear"></iconify-icon>
</div>
                                    Real-time Inventory
                                </li>
<li className="flex items-center gap-4 text-sm text-white/90">
<div className="w-6 h-6 rounded-full bg-luxota-accent/10 flex items-center justify-center">
<iconify-icon className="text-luxota-accent" icon="solar:check-circle-linear"></iconify-icon>
</div>
                                    Dynamic Markup Rules
                                </li>
</ul>
</div>
<div className="w-7/12 absolute right-0 top-0 bottom-0 bg-gradient-to-l from-white/[0.02] to-transparent flex items-center justify-center overflow-hidden card-graphic-wrapper">
<div className="relative w-full h-full flex items-center justify-center">
<div className="absolute w-64 h-64 border border-luxota-accent/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute w-96 h-96 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="w-4 h-4 bg-luxota-accent rounded-full shadow-[0_0_30px_#4FD1C5]"></div>
</div>
</div>
</div>

<div className="w-[70vw] max-w-[900px] h-[65vh] spotlight-card rounded-[2.5rem] p-16 shrink-0 relative flex overflow-hidden border border-white/10 bg-[#050507]">
<div className="w-5/12 flex flex-col justify-between relative z-10 h-full">
<div>
<div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-10 shadow-xl backdrop-blur-md">
<iconify-icon className="text-4xl text-luxota-accent" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<h3 className="text-5xl text-white font-medium mb-6 tracking-tight">Trustee</h3>
<p className="text-lg text-luxota-dim leading-relaxed">
                                    The governance sentinel. Automated compliance, payment reconciliation, and security auditing running in the background.
                                </p>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-4 text-sm text-white/90">
<div className="w-6 h-6 rounded-full bg-luxota-accent/10 flex items-center justify-center">
<iconify-icon className="text-luxota-accent" icon="solar:check-circle-linear"></iconify-icon>
</div>
                                    Automated Audits
                                </li>
<li className="flex items-center gap-4 text-sm text-white/90">
<div className="w-6 h-6 rounded-full bg-luxota-accent/10 flex items-center justify-center">
<iconify-icon className="text-luxota-accent" icon="solar:check-circle-linear"></iconify-icon>
</div>
                                    PCI DSS Compliant
                                </li>
</ul>
</div>
<div className="w-7/12 absolute right-0 top-0 bottom-0 bg-gradient-to-l from-white/[0.02] to-transparent flex items-center justify-center overflow-hidden card-graphic-wrapper">
<div className="w-64 h-80 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-4 p-6 shadow-2xl backdrop-blur-lg">
<div className="h-3 w-full bg-white/10 rounded-full"></div>
<div className="h-3 w-2/3 bg-white/10 rounded-full"></div>
<div className="mt-auto h-12 w-full bg-luxota-accent/10 border border-luxota-accent/20 rounded-xl flex items-center justify-center gap-2 text-xs text-luxota-accent font-mono tracking-widest">
<iconify-icon className="text-lg" icon="solar:verified-check-linear"></iconify-icon> VERIFIED
                                </div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<section className="block lg:hidden px-6 py-20 space-y-8 bg-luxota-bg">
<span className="text-xs text-luxota-accent font-mono mb-2 block tracking-widest">[ 02 — ARCHITECTURE ]</span>
<div className="spotlight-card rounded-3xl p-8 border border-white/10">
<h3 className="text-2xl text-white font-medium mb-2">Travel Portal</h3>
<p className="text-sm text-luxota-dim">Headless booking engine.</p>
</div>
<div className="spotlight-card rounded-3xl p-8 border border-white/10">
<h3 className="text-2xl text-white font-medium mb-2">ShareHub</h3>
<p className="text-sm text-luxota-dim">Inventory liquidity layer.</p>
</div>
<div className="spotlight-card rounded-3xl p-8 border border-white/10">
<h3 className="text-2xl text-white font-medium mb-2">Trustee</h3>
<p className="text-sm text-luxota-dim">Automated governance.</p>
</div>
</section>

<section className="py-40 bg-luxota-bg border-t border-white/5 relative z-20" id="maturity">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
<div className="lg:sticky lg:top-32 self-start">
<span className="text-xs text-luxota-accent font-mono mb-6 block tracking-widest">[ 03 — DIAGNOSIS ]</span>
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-8 leading-[1.1]">
                        Where does your <br/> agency stand?
                    </h2>
<p className="text-luxota-dim text-lg leading-relaxed mb-12">
                        Growth isn't just volume. It's moving from fragile manual processes to automated governance. Luxota is designed to bridge the gap between digital chaos and ecosystem maturity. <br/><br/> <span className="text-white/80 border-l-2 border-luxota-accent pl-4 block">Most agencies we onboard are between Level 1 and Level 2.</span>
</p>
<a className="group inline-flex items-center gap-3 text-white text-sm font-medium hover:text-luxota-accent transition-colors" href="#">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-luxota-accent group-hover:bg-luxota-accent/10 transition-all bg-white/5">
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<span className="border-b border-transparent group-hover:border-luxota-accent/50 transition-all">Take the maturity assessment</span>
</a>
</div>
<div className="relative pl-12 border-l border-white/10 space-y-16">
<div className="absolute left-[-1.5px] top-0 bottom-0 w-[3px] bg-white/5">
<div className="w-full h-0 bg-luxota-accent shadow-[0_0_15px_#4FD1C5]" id="maturity-bar"></div>
</div>
<div className="group cursor-pointer transition-all hover:translate-x-2">
<div className="text-xs font-mono text-luxota-dim mb-2 group-hover:text-luxota-accent transition-colors">LEVEL 0</div>
<h3 className="text-2xl text-white mb-2 font-medium">Fragmented Agency</h3>
<p className="text-base text-luxota-dim/60">Operations are scattered and managed across disconnected tools.</p>
</div>
<div className="group cursor-pointer transition-all hover:translate-x-2">
<div className="text-xs font-mono text-luxota-dim mb-2 group-hover:text-luxota-accent transition-colors">LEVEL 1</div>
<h3 className="text-2xl text-white mb-2 font-medium">Digital Agency</h3>
<p className="text-base text-luxota-dim/60">Basic online presence with limited operational integration.</p>
</div>
<div className="group cursor-pointer transition-all hover:translate-x-2">
<div className="text-xs font-mono text-luxota-dim mb-2 group-hover:text-luxota-accent transition-colors">LEVEL 2</div>
<h3 className="text-2xl text-white mb-2 font-medium">Connected Agency</h3>
<p className="text-base text-luxota-dim/60">Systems and partners are connected, enabling collaboration and scale.</p>
</div>
<div className="group cursor-pointer transition-all hover:translate-x-2">
<div className="text-xs font-mono text-luxota-accent mb-2">LEVEL 3</div>
<h3 className="text-2xl text-white mb-2 font-medium flex items-center gap-3">
                            Mature Agency
                            <span className="text-[10px] px-2.5 py-1 rounded-full bg-luxota-accent/10 text-luxota-accent border border-luxota-accent/20 font-medium tracking-wide uppercase">Luxota Standard</span>
</h3>
<p className="text-base text-luxota-dim">Operations are structured, governed, and designed for predictable growth.</p>
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
<span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest reveal-commercial opacity-0 translate-y-4">[ 04 — COMMERCIAL MODEL ]</span>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.1] reveal-commercial opacity-0 translate-y-4">
                            Start free.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Scale deeply.</span>
</h2>
</div>
<div className="space-y-8">
<div className="relative pl-8 reveal-commercial opacity-0 translate-y-4 border-l border-white/10">
<h3 className="text-xl text-white font-medium mb-2">1. Operating System</h3>
<p className="text-luxota-dim font-light leading-relaxed">
                                Begin with the core infrastructure. Manage bookings and inventory with zero upfront cost.
                            </p>
</div>
<div className="relative pl-8 reveal-commercial opacity-0 translate-y-4 border-l border-luxota-accent">
<h3 className="text-xl text-white font-medium mb-2">2. Growth Ecosystem</h3>
<p className="text-luxota-dim font-light leading-relaxed">
                                Unlock advanced capabilities, financial tools, and global distribution when you're ready to expand.
                            </p>
</div>
</div>
<div className="pt-4 reveal-commercial opacity-0 translate-y-4">
<a className="group inline-flex items-center gap-3 text-white text-sm font-medium hover:text-luxota-accent transition-colors" href="#">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-luxota-accent group-hover:bg-luxota-accent/10 transition-all bg-white/5">
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<span className="border-b border-transparent group-hover:border-luxota-accent/50 transition-all">Learn about pricing</span>
</a>
</div>
</div>

<div className="lg:col-span-7 relative reveal-visual opacity-0 scale-95">
<div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-sm">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(79,209,197,0.1),transparent_60%)]"></div>

<div className="absolute inset-0 flex items-center justify-center">

<div className="relative z-20 w-32 h-32 rounded-full bg-[#0A0A0C] border border-white/10 flex items-center justify-center shadow-2xl">
<iconify-icon className="text-5xl text-white" icon="solar:layers-minimalistic-bold-duotone"></iconify-icon>
</div>

<div className="absolute z-10 w-64 h-64 rounded-full border border-dashed border-white/10 animate-[spin_20s_linear_infinite]"></div>

<div className="absolute z-10 w-96 h-96 rounded-full border border-white/5 animate-[spin_30s_linear_infinite_reverse]">
<div className="absolute top-1/2 -right-3 w-6 h-6 bg-[#0A0A0C] border border-luxota-accent rounded-full flex items-center justify-center shadow-[0_0_15px_#4FD1C5]">
<div className="w-2 h-2 bg-luxota-accent rounded-full"></div>
</div>
</div>

<div className="absolute top-1/4 right-[10%] p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md animate-float">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center"><iconify-icon icon="solar:graph-up-bold"></iconify-icon></div>
<div>
<div className="text-[10px] text-luxota-dim uppercase tracking-wider">Revenue</div>
<div className="text-sm font-bold text-white">+124%</div>
</div>
</div>
</div>
<div className="absolute bottom-1/4 left-[10%] p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md animate-float" style={{animationDelay: '-2s'}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-luxota-accent/20 text-luxota-accent flex items-center justify-center"><iconify-icon icon="solar:global-bold"></iconify-icon></div>
<div>
<div className="text-[10px] text-luxota-dim uppercase tracking-wider">Reach</div>
<div className="text-sm font-bold text-white">Global</div>
</div>
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
<span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest">[ 05 — INQUIRIES ]</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Common Questions</h2>
</div>
<div className="space-y-4">
<div className="faq-item group border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden">
<button className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
<span className="text-lg text-white/90 group-hover:text-white transition-colors font-medium">How does Luxota connect with our current tools?</span>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/10">
<iconify-icon className="text-white text-xl faq-icon transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="faq-content">
<div className="px-6 pb-8 text-luxota-dim leading-relaxed max-w-2xl">
                            Seamlessly. We prioritize integration over replacement. Luxota offers real-time, two-way synchronization with Salesforce, HubSpot, and proprietary internal systems, ensuring your data never sits in a silo.
                        </div>
</div>
</div>
<div className="faq-item group border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden">
<button className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
<span className="text-lg text-white/90 group-hover:text-white transition-colors font-medium">Can we fully white-label the booking experience?</span>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/10">
<iconify-icon className="text-white text-xl faq-icon transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="faq-content">
<div className="px-6 pb-8 text-luxota-dim leading-relaxed max-w-2xl">
                            Absolutely. Your brand comes first. Our 'headless' architecture allows you to use our component library to build a client interface that looks and feels exactly like your agency, pixel for pixel.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-[90vh] flex flex-col items-center justify-center px-6 relative overflow-hidden" id="action">
<div className="absolute inset-0 bg-gradient-to-t from-luxota-accent/5 to-transparent pointer-events-none"></div>
<div className="relative z-10 text-center max-w-5xl">
<h2 className="text-6xl md:text-9xl font-medium tracking-tightest text-white mb-10 leading-[0.85]">
                Launch your<br/> agency — <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 italic font-serif">now.</span>
</h2>
<p className="text-xl md:text-2xl text-luxota-dim max-w-2xl mx-auto leading-relaxed mb-16 font-light">
                Start operating instantly, with no payment, no card, and no commitment.
            </p>
<div className="flex flex-col items-center gap-10">
<button className="group relative bg-white text-black px-16 py-6 rounded-full font-bold text-xl overflow-hidden transition-transform hover:scale-105 shadow-[0_0_60px_-15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_80px_-15px_rgba(79,209,197,0.5)]">
<span className="relative z-10 flex items-center gap-3">
                        Instant Live 
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
<div className="absolute inset-0 bg-luxota-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo"></div>
</button>
<div className="text-sm text-luxota-dim tracking-wide">
                    Have questions? 
                    <a className="text-white border-b border-white/30 pb-0.5 hover:border-white transition-all hover:text-luxota-accent ml-1" href="#">Talk to an expert</a>
</div>
</div>
</div>
</section>

<footer className="relative py-24 px-6 border-t border-white/5 bg-[#020203] overflow-hidden">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-luxota-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

<div className="absolute bottom-[-5%] left-0 right-0 select-none pointer-events-none flex justify-center opacity-[0.03]">
<h1 className="text-[18vw] font-bold text-white tracking-tighter leading-none">LUXOTA</h1>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-24">

<div>
<h4 className="text-white font-medium mb-8 text-xs uppercase tracking-[0.2em] opacity-80">Company</h4>
<ul className="space-y-5 text-sm text-luxota-dim font-light">
<li><a className="hover:text-white transition-colors duration-300 flex items-center gap-2 group" href="#"><span className="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"></span>About Luxota</a></li>
<li><a className="hover:text-white transition-colors duration-300 flex items-center gap-2 group" href="#"><span className="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"></span>Vision &amp; North Star</a></li>
<li><a className="hover:text-white transition-colors duration-300 flex items-center gap-2 group" href="#"><span className="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"></span>Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-8 text-xs uppercase tracking-[0.2em] opacity-80">Platform</h4>
<ul className="space-y-5 text-sm text-luxota-dim font-light">
<li><a className="hover:text-white transition-colors duration-300 flex items-center gap-2 group" href="#"><span className="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"></span>Travel Portal</a></li>
<li><a className="hover:text-white transition-colors duration-300 flex items-center gap-2 group" href="#"><span className="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"></span>ShareHub</a></li>
<li><a className="hover:text-white transition-colors duration-300 flex items-center gap-2 group" href="#"><span className="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"></span>Trustee</a></li>
<li><a className="hover:text-white transition-colors duration-300 flex items-center gap-2 group" href="#"><span className="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"></span>Commercial Model</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-8 text-xs uppercase tracking-[0.2em] opacity-80">Resources</h4>
<ul className="space-y-5 text-sm text-luxota-dim font-light">
<li><a className="hover:text-white transition-colors duration-300 flex items-center gap-2 group" href="#"><span className="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"></span>Agency Maturity Levels</a></li>
<li><a className="hover:text-white transition-colors duration-300 flex items-center gap-2 group" href="#"><span className="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"></span>Agencies in the Ecosystem</a></li>
<li><a className="hover:text-white transition-colors duration-300 flex items-center gap-2 group" href="#"><span className="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"></span>Case Snapshots</a></li>
<li><a className="hover:text-white transition-colors duration-300 flex items-center gap-2 group" href="#"><span className="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"></span>FAQ</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-8 text-xs uppercase tracking-[0.2em] opacity-80">Legal</h4>
<ul className="space-y-5 text-sm text-luxota-dim font-light">
<li><a className="hover:text-white transition-colors duration-300 flex items-center gap-2 group" href="#"><span className="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"></span>Terms of Service</a></li>
<li><a className="hover:text-white transition-colors duration-300 flex items-center gap-2 group" href="#"><span className="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"></span>Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors duration-300 flex items-center gap-2 group" href="#"><span className="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"></span>Imprint</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-luxota-dim/60 font-mono tracking-wider gap-4">
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-luxota-accent animate-pulse"></span>
<span className="uppercase">Luxota Operating System</span>
</div>
<div>© 2026 Luxota. All rights reserved.</div>
</div>
</div>
</footer>


    </>
  );
}
