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
seraluna: {
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

            // 3. Navigation Click Handler with Offset & Active State
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        e.preventDefault();
                        if (typeof lenis !== 'undefined') {
                            lenis.scrollTo(targetElement, { offset: -100, duration: 1.2 });
                        } else {
                            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 100;
                            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                        }
                    }
                });
            });

            const observeSections = [
                document.getElementById('services'),
                document.getElementById('about'),
                document.getElementById('pricing')
            ].filter(Boolean);

            const navObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        document.querySelectorAll('.nav-link').forEach(link => {
                            if (link.getAttribute('href') === `#${id}`) {
                                link.classList.add('text-white', 'bg-white/10');
                                link.classList.remove('text-white/70');
                            } else {
                                link.classList.remove('text-white', 'bg-white/10');
                                link.classList.add('text-white/70');
                            }
                        });
                    }
                });
            }, { rootMargin: '-20% 0px -40% 0px', threshold: 0 });

            observeSections.forEach(sec => navObserver.observe(sec));

            // 4. IMPROVED SCROLL INTERACTIONS
            let mm = gsap.matchMedia();

            mm.add("(min-width: 1024px)", () => {
                
                // Narrative Text Reveal
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
                        color: (i, target) => target.classList.contains("text-seraluna-accent") ? "#4FD1C5" : "#ffffff", 
                        duration: 1,
                        ease: "power2.out"
                    }
                );

                // Horizontal Scroll
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

            // 5. Cursor Hover Interactions
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

            // 6. Maturity Bar
            gsap.to("#maturity-bar", {
                height: "100%", ease: "none",
                scrollTrigger: { trigger: "#maturity", start: "top center", end: "bottom center", scrub: true }
            });

            // 7. FAQ
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

            // 8. Initialize Particles
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

<div className="" id="preloader">
<div className="flex flex-col items-center justify-center gap-6 text-center z-50">
<div className="relative">
<div className="text-[12rem] font-medium leading-none tracking-tighter text-white/5 relative z-10 font-sans">
<span className="" id="counter">100</span>%
                </div>
<div className="absolute inset-0 bg-gradient-to-t from-seraluna-bg via-transparent to-transparent z-20"></div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="flex items-center gap-3 text-xs font-mono text-seraluna-accent uppercase tracking-[0.2em]">
<iconify-icon className="animate-spin text-lg" icon="solar:refresh-circle-linear"></iconify-icon>
<span>System Initialization</span>
</div>
<div className="w-48 h-[1px] bg-white/10 mt-2 overflow-hidden rounded-full">
<div className="w-full h-full bg-gradient-to-r from-seraluna-accent to-white origin-left scale-x-0" id="loader-bar"></div>
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
<a className="nav-link px-6 py-2.5 text-xs font-medium text-white/70 hover:text-white rounded-full hover:bg-white/5 transition-all" href="#services">Services</a>
<a className="nav-link hover:text-white hover:bg-white/5 transition-all text-xs font-medium text-white/70 rounded-full pt-2.5 pr-6 pb-2.5 pl-6" href="#about">About</a>
<a className="nav-link px-6 py-2.5 text-xs font-medium text-white/70 hover:text-white rounded-full hover:bg-white/5 transition-all" href="#pricing">Pricing</a>
<div className="w-px h-4 bg-white/10 mx-2"></div>
<a className="group px-6 py-2.5 text-xs font-bold text-seraluna-bg bg-white rounded-full hover:bg-seraluna-accent transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]" href="#pricing">
                Get Started <span className="hidden group-hover:inline-block ml-1 transition-all">→</span>
</a>
</div>
</nav>

<div className="fixed top-9 left-8 z-40 mix-blend-difference pointer-events-none opacity-0 reveal-nav">
<div className="text-sm font-semibold tracking-tight text-white flex items-center gap-3">
<div className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-seraluna-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-seraluna-accent shadow-[0_0_15px_#4FD1C5]"></span>
</div>
<span className="tracking-[0.2em] text-xs">SERALUNA</span>
</div>
</div>

<section className="relative h-screen flex flex-col items-center justify-center overflow-hidden" id="os">
<div className="perspective-grid opacity-30"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-seraluna-accent/10 rounded-full blur-[150px] pointer-events-none"></div>

<div className="absolute inset-0 -z-10" id="particles-js"></div>
<div className="relative z-10 text-center max-w-7xl px-6">
<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-10 opacity-0 reveal-hero-fade shadow-lg">
<span className="w-1.5 h-1.5 bg-seraluna-accent rounded-full shadow-[0_0_10px_#4FD1C5]"></span>
<span className="text-[10px] uppercase tracking-widest text-white/80 font-medium">Automation Platform Live</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-[7rem] font-medium tracking-tightest text-white leading-[0.9] mb-10">
<div className="overflow-hidden py-2"><span className="block reveal-text drop-shadow-2xl">We build the systems.</span></div>
<div className="overflow-hidden flex flex-wrap pt-2 pb-2 gap-x-4 gap-y-4 items-center justify-center">
<span className="block reveal-text text-gradient-premium">You run the business.</span>
</div>
</h1>
<p className="text-lg md:text-xl text-seraluna-dim max-w-2xl mx-auto leading-relaxed mb-14 font-light opacity-0 reveal-hero-fade translate-y-4">
                Seraluna helps small businesses stop losing leads and start running lean with smart automation and modern systems built around the way they actually work.
            </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-6 opacity-0 reveal-hero-fade delay-200">
<button className="group relative px-9 py-4 bg-white text-seraluna-bg rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)]">
<div className="btn-glow"></div>
<span className="relative z-10 text-sm font-bold flex items-center gap-2">
                        Start Automating
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
<div className="absolute inset-0 bg-seraluna-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo"></div>
</button>
<a className="px-9 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all text-white font-medium text-sm hover:border-white/30 hover:shadow-lg" href="https://calendly.com/mitch-seraluna/quick-call" target="_blank">
                    Talk to an expert
                </a>
</div>
</div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 reveal-hero-fade delay-500 z-20">
<span className="text-[9px] text-white/30 tracking-[0.3em] uppercase">Scroll to explore</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
</div>
</section>

<section className="py-40 relative z-10 px-4 md:px-6" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-4 flex flex-col justify-center p-6 lg:sticky lg:top-32 self-start">
<div className="inline-flex items-center gap-3 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-seraluna-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-seraluna-accent"></span>
</span>
<span className="text-xs text-seraluna-accent font-mono tracking-[0.2em] uppercase">Mission</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
                        Built on trust &amp; <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">transparency.</span>
</h2>
<p className="text-seraluna-dim text-base mb-10 leading-relaxed border-l border-white/10 pl-6">
                        Every small business knows they need AI, but knowing where to begin is the hardest part. As AI continues to evolve, so will we, and so will our clients. We make sure you are always ahead of the curve so you can focus entirely on your core business.
                    </p>
<a className="group inline-flex items-center gap-3 text-white text-sm font-medium hover:text-seraluna-accent transition-colors" href="#pricing">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-seraluna-accent group-hover:bg-seraluna-accent/10 transition-all bg-white/5">
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<span className="border-b border-transparent group-hover:border-seraluna-accent/50 transition-all">Explore our guarantees</span>
</a>
</div>

<div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="spotlight-card rounded-[2rem] p-10 flex flex-col justify-between group cursor-none h-full min-h-[400px]">
<div className="absolute right-0 top-0 p-10 opacity-10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
<iconify-icon className="text-[12rem] text-white" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="relative z-10">
<div className="flex items-start gap-1">
<span className="text-5xl font-medium text-white tracking-tighter">Zero Risk</span>
</div>
<div className="text-xl text-white font-medium mt-3 mb-2">Money-Back Guarantee</div>
<p className="text-sm text-seraluna-dim leading-relaxed">No long-term contracts. No lock-ins. We offer a true no-risk guarantee, ensuring we earn your business by delivering measurable results every single month.</p>
</div>
<div className="relative w-full h-1.5 bg-white/5 rounded-full mt-10 overflow-hidden">
<div className="absolute inset-0 bg-seraluna-accent/20"></div>
<div className="h-full bg-seraluna-accent w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[1.5s] ease-expo"></div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="spotlight-card rounded-[2rem] p-10 flex flex-col justify-center group cursor-none min-h-[220px]">
<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10">
<div className="flex items-baseline gap-3 mb-2">
<span className="text-3xl font-medium text-white tracking-tight">Long-Term</span>
</div>
<div className="flex items-center gap-2 mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-seraluna-accent animate-pulse"></span>
<span className="text-xs font-mono text-seraluna-accent uppercase tracking-wider">Partnerships</span>
</div>
<p className="text-sm text-seraluna-dim leading-relaxed">We don't just sell tools. We emphasize a true partnership, building and scaling alongside all our clients.</p>
</div>
</div>

<div className="spotlight-card rounded-[2rem] p-10 flex-1 min-h-[240px] flex flex-col justify-end group cursor-none">
<div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000 flex items-center justify-center">
<svg className="w-full h-full object-cover" preserveaspectratio="xMidYMid slice" viewbox="0 0 400 200">
<path className="group-hover:animate-pulse" d="M50,150 Q150,150 200,100 T350,50" fill="none" stroke="white" stroke-dasharray="4 4" strokeWidth="1"></path>
<circle className="animate-ping" cx="350" cy="50" fill="#4FD1C5" r="4"></circle>
<circle cx="350" cy="50" fill="white" r="2"></circle>
</svg>
</div>
<div className="relative z-10 bg-gradient-to-t from-[#08080A] via-[#08080A]/80 to-transparent pt-10">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 rounded-full bg-white/5 border border-white/10">
<iconify-icon className="text-seraluna-accent text-lg" icon="solar:graph-up-linear"></iconify-icon>
</div>
<span className="text-xl font-medium text-white">Ahead of the Curve</span>
</div>
<p className="text-sm text-seraluna-dim">As the technology advances, we continuously upgrade your ecosystem so you never fall behind.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="h-screen flex items-center justify-center bg-seraluna-bg relative overflow-hidden z-20" id="narrative-section">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,209,197,0.05),transparent_60%)] pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 text-center relative z-10" id="narrative-content">
<p className="text-4xl md:text-6xl lg:text-8xl font-normal leading-tight tracking-tight text-white flex flex-wrap justify-center gap-x-6 gap-y-4" id="scrolly-text">
<span className="highlight-word opacity-20 blur-sm">Most</span>
<span className="highlight-word opacity-20 blur-sm">platforms</span>
<span className="highlight-word opacity-20 blur-sm">sell</span>
<span className="highlight-word opacity-20 blur-sm text-white font-medium">fragmented</span>
<span className="highlight-word opacity-20 blur-sm text-white font-medium">tools.</span>
<span className="highlight-word opacity-20 blur-sm">Seraluna</span>
<span className="highlight-word opacity-20 blur-sm">builds</span>
<span className="highlight-word opacity-20 blur-sm text-seraluna-accent">the whole system.</span>
<span className="highlight-word opacity-20 blur-sm">We</span>
<span className="highlight-word opacity-20 blur-sm">don't</span>
<span className="highlight-word opacity-20 blur-sm">just</span>
<span className="highlight-word opacity-20 blur-sm">automate</span>
<span className="highlight-word opacity-20 blur-sm">tasks;</span>
<span className="highlight-word opacity-20 blur-sm">we</span>
<span className="highlight-word opacity-20 blur-sm">engineer</span>
<span className="highlight-word opacity-20 blur-sm text-seraluna-accent italic font-serif">scalability.</span>
</p>
</div>
</section>

<div className="relative z-30 bg-seraluna-bg" id="services">
<section className="hidden lg:block h-screen relative" id="architecture-pin">
<div className="h-full w-full overflow-hidden bg-seraluna-bg flex flex-col justify-center border-t border-white/5">
<div className="absolute top-12 left-0 w-full px-12 flex justify-between items-end z-20">
<div>
<span className="text-xs text-seraluna-accent font-mono mb-3 block tracking-widest">[ 02 — ARCHITECTURE ]</span>
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
<iconify-icon className="text-4xl text-seraluna-accent" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="text-5xl text-white font-medium mb-6 tracking-tight">AI Voice Receptionist</h3>
<p className="text-lg text-seraluna-dim leading-relaxed">
                                    Never miss a call again. Our AI receptionist answers 24/7, handles inquiries, qualifies callers, and automatically logs every lead.
                                </p>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-4 text-sm text-white/90">
<div className="w-6 h-6 rounded-full bg-seraluna-accent/10 flex items-center justify-center">
<iconify-icon className="text-seraluna-accent" icon="solar:check-circle-linear"></iconify-icon>
</div>
                                    Always-On Call Answering
                                </li>
<li className="flex items-center gap-4 text-sm text-white/90">
<div className="w-6 h-6 rounded-full bg-seraluna-accent/10 flex items-center justify-center">
<iconify-icon className="text-seraluna-accent" icon="solar:check-circle-linear"></iconify-icon>
</div>
                                    Instant Lead Capture
                                </li>
<li className="flex items-center gap-4 text-sm text-white/90">
<div className="w-6 h-6 rounded-full bg-seraluna-accent/10 flex items-center justify-center">
<iconify-icon className="text-seraluna-accent" icon="solar:check-circle-linear"></iconify-icon>
</div>
                                    Zero Missed Opportunities
                                </li>
</ul>
</div>
<div className="w-7/12 absolute right-0 top-0 bottom-0 bg-gradient-to-l from-white/[0.02] to-transparent flex items-center justify-center overflow-hidden card-graphic-wrapper">
<div className="w-80 h-[28rem] border border-white/10 rounded-2xl relative bg-black/40 backdrop-blur-xl rotate-6 translate-x-12 shadow-2xl transition-transform duration-700 hover:rotate-3">
<div className="absolute top-6 left-6 right-6 h-4 bg-white/10 rounded-full"></div>
<div className="absolute top-16 left-6 w-16 h-16 bg-seraluna-accent/20 rounded-full blur-2xl"></div>
<div className="absolute top-16 left-6 w-12 h-12 bg-seraluna-accent rounded-full shadow-[0_0_20px_#4FD1C540]"></div>
<div className="absolute bottom-6 left-6 right-6 h-40 bg-white/5 rounded-xl border border-white/5"></div>
</div>
</div>
</div>

<div className="w-[70vw] max-w-[900px] h-[65vh] spotlight-card rounded-[2.5rem] p-16 shrink-0 relative flex overflow-hidden border border-white/10 bg-[#050507]">
<div className="w-5/12 flex flex-col justify-between relative z-10 h-full">
<div>
<div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-10 shadow-xl backdrop-blur-md">
<iconify-icon className="text-4xl text-seraluna-accent" icon="solar:database-linear"></iconify-icon>
</div>
<h3 className="text-5xl text-white font-medium mb-6 tracking-tight">Speed To Lead</h3>
<p className="text-lg text-seraluna-dim leading-relaxed">
                                    Engage prospects instantly. We automatically qualify leads, book appointments, send confirmations, and launch follow-ups if they go cold.
                                </p>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-4 text-sm text-white/90">
<div className="w-6 h-6 rounded-full bg-seraluna-accent/10 flex items-center justify-center">
<iconify-icon className="text-seraluna-accent" icon="solar:check-circle-linear"></iconify-icon>
</div>
                                    Instant Lead Qualification
                                </li>
<li className="flex items-center gap-4 text-sm text-white/90">
<div className="w-6 h-6 rounded-full bg-seraluna-accent/10 flex items-center justify-center">
<iconify-icon className="text-seraluna-accent" icon="solar:check-circle-linear"></iconify-icon>
</div>
                                    Auto-Books Appointments
                                </li>
<li className="flex items-center gap-4 text-sm text-white/90">
<div className="w-6 h-6 rounded-full bg-seraluna-accent/10 flex items-center justify-center">
<iconify-icon className="text-seraluna-accent" icon="solar:check-circle-linear"></iconify-icon>
</div>
                                    Automated Follow-Up Sequences
                                </li>
</ul>
</div>
<div className="w-7/12 absolute right-0 top-0 bottom-0 bg-gradient-to-l from-white/[0.02] to-transparent flex items-center justify-center overflow-hidden card-graphic-wrapper">
<div className="relative w-full h-full flex items-center justify-center">
<div className="absolute w-64 h-64 border border-seraluna-accent/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute w-96 h-96 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="w-4 h-4 bg-seraluna-accent rounded-full shadow-[0_0_30px_#4FD1C5]"></div>
</div>
</div>
</div>

<div className="w-[70vw] max-w-[900px] h-[65vh] spotlight-card rounded-[2.5rem] p-16 shrink-0 relative flex overflow-hidden border border-white/10 bg-[#050507]">
<div className="w-5/12 flex flex-col justify-between relative z-10 h-full">
<div>
<div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-10 shadow-xl backdrop-blur-md">
<iconify-icon className="text-4xl text-seraluna-accent" icon="solar:user-id-linear"></iconify-icon>
</div>
<h3 className="text-5xl text-white font-medium mb-6 tracking-tight">Command Center CRM</h3>
<p className="text-lg text-seraluna-dim leading-relaxed">
                                    One unified platform to manage your entire business. Track pipelines, sync calendars, and automate campaigns—all from a single, powerful dashboard.
                                </p>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-4 text-sm text-white/90">
<div className="w-6 h-6 rounded-full bg-seraluna-accent/10 flex items-center justify-center">
<iconify-icon className="text-seraluna-accent" icon="solar:check-circle-linear"></iconify-icon>
</div>
                                    Pipeline &amp; Deal Tracking
                                </li>
<li className="flex items-center gap-4 text-sm text-white/90">
<div className="w-6 h-6 rounded-full bg-seraluna-accent/10 flex items-center justify-center">
<iconify-icon className="text-seraluna-accent" icon="solar:check-circle-linear"></iconify-icon>
</div>
                                    Full Automation Built-In
                                </li>
<li className="flex items-center gap-4 text-sm text-white/90">
<div className="w-6 h-6 rounded-full bg-seraluna-accent/10 flex items-center justify-center">
<iconify-icon className="text-seraluna-accent" icon="solar:check-circle-linear"></iconify-icon>
</div>
                                    Email &amp; SMS Campaigns
                                </li>
</ul>
</div>
<div className="w-7/12 absolute right-0 top-0 bottom-0 bg-gradient-to-l from-white/[0.02] to-transparent flex items-center justify-center overflow-hidden card-graphic-wrapper">
<div className="w-64 h-80 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-4 p-6 shadow-2xl backdrop-blur-lg">
<div className="h-3 w-full bg-white/10 rounded-full"></div>
<div className="h-3 w-2/3 bg-white/10 rounded-full"></div>
<div className="mt-auto h-12 w-full bg-seraluna-accent/10 border border-seraluna-accent/20 rounded-xl flex items-center justify-center gap-2 text-xs text-seraluna-accent font-mono tracking-widest">
<iconify-icon className="text-lg" icon="solar:verified-check-linear"></iconify-icon> VERIFIED
                                </div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<section className="block lg:hidden px-6 py-20 space-y-8 bg-seraluna-bg">
<span className="text-xs text-seraluna-accent font-mono mb-2 block tracking-widest">[ 02 — ARCHITECTURE ]</span>
<div className="spotlight-card rounded-3xl p-8 border border-white/10">
<h3 className="text-2xl text-white font-medium mb-2">AI Voice Receptionist</h3>
<p className="text-sm text-seraluna-dim">Seamless workflow execution.</p>
</div>
<div className="spotlight-card rounded-3xl p-8 border border-white/10">
<h3 className="text-2xl text-white font-medium mb-2">Speed To Lead</h3>
<p className="text-sm text-seraluna-dim">Unified source of truth.</p>
</div>
<div className="spotlight-card rounded-3xl p-8 border border-white/10">
<h3 className="text-2xl text-white font-medium mb-2">Command Center CRM</h3>
<p className="text-sm text-seraluna-dim">Frictionless customer interactions.</p>
</div>
</section>

<section className="py-40 bg-seraluna-bg border-t border-white/5 relative z-20" id="maturity">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
<div className="lg:sticky lg:top-32 self-start">
<span className="text-xs text-seraluna-accent font-mono mb-6 block tracking-widest">[ 03 — DIAGNOSIS ]</span>
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-8 leading-[1.1]">
                        Where does your <br/> business stand?
                    </h2>
<p className="text-seraluna-dim text-lg leading-relaxed mb-12">
                        Growth isn't just more leads. It's having the right systems to handle them. Most small businesses are buried in manual work, disconnected tools, and missed follow-ups. Seraluna fixes the foundation so your business can actually scale. <br/><br/> <span className="text-white/80 border-l-2 border-seraluna-accent pl-4 block">Most businesses we onboard are between Level 1 and Level 2.</span>
</p>
<a className="group inline-flex items-center gap-3 text-white text-sm font-medium hover:text-seraluna-accent transition-colors" href="#commercial">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-seraluna-accent group-hover:bg-seraluna-accent/10 transition-all bg-white/5">
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<span className="border-b border-transparent group-hover:border-seraluna-accent/50 transition-all">Explore commercial models</span>
</a>
</div>
<div className="relative pl-12 border-l border-white/10 space-y-16">
<div className="absolute left-[-1.5px] top-0 bottom-0 w-[3px] bg-white/5">
<div className="w-full h-0 bg-seraluna-accent shadow-[0_0_15px_#4FD1C5]" id="maturity-bar" style={{height: '0%'}}></div>
</div>
<div className="group cursor-pointer transition-all hover:translate-x-2">
<div className="text-xs font-mono text-seraluna-dim mb-2 group-hover:text-seraluna-accent transition-colors">LEVEL 0</div>
<h3 className="text-2xl text-white mb-2 font-medium">Fragmented Business</h3>
<p className="text-base text-seraluna-dim/60">Operations are scattered and managed across disconnected tools.</p>
</div>
<div className="group cursor-pointer transition-all hover:translate-x-2">
<div className="text-xs font-mono text-seraluna-dim mb-2 group-hover:text-seraluna-accent transition-colors">LEVEL 1</div>
<h3 className="text-2xl text-white mb-2 font-medium">Digital Business</h3>
<p className="text-base text-seraluna-dim/60">Basic online presence with limited operational integration.</p>
</div>
<div className="group cursor-pointer transition-all hover:translate-x-2">
<div className="text-xs font-mono text-seraluna-dim mb-2 group-hover:text-seraluna-accent transition-colors">LEVEL 2</div>
<h3 className="text-2xl text-white mb-2 font-medium">Connected Business</h3>
<p className="text-base text-seraluna-dim/60">Systems and partners are connected, enabling collaboration and scale.</p>
</div>
<div className="group cursor-pointer transition-all hover:translate-x-2">
<div className="text-xs font-mono text-seraluna-accent mb-2">LEVEL 3</div>
<h3 className="text-2xl text-white mb-2 font-medium flex items-center gap-3">
                            Mature Business
                            <span className="text-[10px] px-2.5 py-1 rounded-full bg-seraluna-accent/10 text-seraluna-accent border border-seraluna-accent/20 font-medium tracking-wide uppercase">Seraluna Standard</span>
</h3>
<p className="text-base text-seraluna-dim">Operations are structured, governed, and designed for predictable growth.</p>
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
<span className="text-xs text-seraluna-accent font-mono mb-4 block tracking-widest reveal-commercial opacity-0 translate-y-4">[ 04 — OUR MODEL ]</span>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.1] reveal-commercial opacity-0 translate-y-4">
                            We build with you.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">We grow with you.</span>
</h2>
</div>
<div className="space-y-8">
<div className="relative pl-8 reveal-commercial opacity-0 translate-y-4 border-l border-white/10">
<h3 className="text-xl text-white font-medium mb-2">1. Foundation Build</h3>
<p className="text-seraluna-dim font-light leading-relaxed">
                                Your AI receptionist, CRM, and Speed-to-Lead system — fully built, connected, and running. We handle the entire setup so you start capturing and closing leads from day one.
                            </p>
</div>
<div className="relative pl-8 reveal-commercial opacity-0 translate-y-4 border-l border-seraluna-accent">
<h3 className="text-xl text-white font-medium mb-2">2. Growth Layer</h3>
<p className="text-seraluna-dim font-light leading-relaxed">
                                Once your foundation is live, we layer in advanced automations, follow-up sequences, and reporting dashboards. As things advance, so will you — every upgrade handled for you, so you stay focused on what you do best with complete peace of mind.
                            </p>
</div>
</div>
<div className="pt-4 reveal-commercial opacity-0 translate-y-4">
<a className="group inline-flex items-center gap-3 text-white text-sm font-medium hover:text-seraluna-accent transition-colors" href="#pricing">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-seraluna-accent group-hover:bg-seraluna-accent/10 transition-all bg-white/5">
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<span className="border-b border-transparent group-hover:border-seraluna-accent/50 transition-all">Learn about pricing</span>
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
<div className="absolute top-1/2 -right-3 w-6 h-6 bg-[#0A0A0C] border border-seraluna-accent rounded-full flex items-center justify-center shadow-[0_0_15px_#4FD1C5]">
<div className="w-2 h-2 bg-seraluna-accent rounded-full"></div>
</div>
</div>

<div className="absolute top-1/4 right-[10%] p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md animate-float">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center"><iconify-icon icon="solar:graph-up-bold"></iconify-icon></div>
<div>
<div className="text-[10px] text-seraluna-dim uppercase tracking-wider">Efficiency</div>
<div className="text-sm font-bold text-white">+124%</div>
</div>
</div>
</div>
<div className="absolute bottom-1/4 left-[10%] p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md animate-float" style={{animationDelay: '-2s'}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-seraluna-accent/20 text-seraluna-accent flex items-center justify-center"><iconify-icon icon="solar:global-bold"></iconify-icon></div>
<div>
<div className="text-[10px] text-seraluna-dim uppercase tracking-wider">Reach</div>
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

<section className="py-40 bg-seraluna-bg border-t border-white/5" id="faq">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-20">
<span className="text-xs text-seraluna-accent font-mono mb-4 block tracking-widest">[ 05 — INQUIRIES ]</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Common Questions</h2>
</div>
<div className="space-y-4">
<div className="faq-item group border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden">
<button className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
<span className="text-lg text-white/90 group-hover:text-white transition-colors font-medium">How does Seraluna connect with our current tools?</span>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/10">
<iconify-icon className="text-white text-xl faq-icon transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="faq-content">
<div className="px-6 pb-8 text-seraluna-dim leading-relaxed max-w-2xl">
                            Seamlessly. We prioritize integration over replacement. Seraluna offers real-time, two-way synchronization with Salesforce, HubSpot, and proprietary internal systems, ensuring your data never sits in a silo.
                        </div>
</div>
</div>
<div className="faq-item group border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden">
<button className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
<span className="text-lg text-white/90 group-hover:text-white transition-colors font-medium">Can we fully white-label the client experience?</span>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/10">
<iconify-icon className="text-white text-xl faq-icon transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="faq-content">
<div className="px-6 pb-8 text-seraluna-dim leading-relaxed max-w-2xl">
                            Absolutely. Your brand comes first. Our 'headless' architecture allows you to use our component library to build a client interface that looks and feels exactly like your business, pixel for pixel.
                        </div>
</div>
</div>
<div className="faq-item group border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden">
<button className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
<span className="text-lg text-white/90 group-hover:text-white transition-colors font-medium">How long does setup take?</span>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/10">
<iconify-icon className="text-white text-xl faq-icon transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="faq-content">
<div className="px-6 pb-8 text-seraluna-dim leading-relaxed max-w-2xl">
                            Most clients are fully operational within 2–3 weeks. We handle the entire build — from onboarding your CRM and configuring your AI receptionist to connecting your existing tools. You don't lift a finger.
                        </div>
</div>
</div>
<div className="faq-item group border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden">
<button className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
<span className="text-lg text-white/90 group-hover:text-white transition-colors font-medium">Do I need to be technical to use this?</span>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/10">
<iconify-icon className="text-white text-xl faq-icon transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="faq-content">
<div className="px-6 pb-8 text-seraluna-dim leading-relaxed max-w-2xl">
                            Not at all. Seraluna is built for business owners, not developers. We handle the setup, integrations, and ongoing maintenance. Your job is to run your business — ours is to make sure the tech works.
                        </div>
</div>
</div>
<div className="faq-item group border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden">
<button className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
<span className="text-lg text-white/90 group-hover:text-white transition-colors font-medium">How is Seraluna different from just using GoHighLevel on my own?</span>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/10">
<iconify-icon className="text-white text-xl faq-icon transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="faq-content">
<div className="px-6 pb-8 text-seraluna-dim leading-relaxed max-w-2xl">
                            GoHighLevel is a powerful tool, but it's just that — a tool. Most businesses that try to run it solo spend months configuring it wrong or not at all. Seraluna builds and manages the entire system for you, so you get results without the learning curve.
                        </div>
</div>
</div>
<div className="faq-item group border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden">
<button className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
<span className="text-lg text-white/90 group-hover:text-white transition-colors font-medium">What happens if I want to cancel or pause?</span>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/10">
<iconify-icon className="text-white text-xl faq-icon transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="faq-content">
<div className="px-6 pb-8 text-seraluna-dim leading-relaxed max-w-2xl">
                            No lock-in, no penalties. If you need to pause or cancel, just let us know. We believe our results speak for themselves — we don't need a contract to keep you.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 flex flex-col items-center justify-center px-6 relative overflow-hidden" id="pricing">
<div className="absolute inset-0 bg-gradient-to-t from-seraluna-accent/5 to-transparent pointer-events-none"></div>
<div className="relative z-10 text-center max-w-5xl w-full">
<h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tightest text-white mb-10 leading-[0.9]">
                Every business runs differently.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 italic font-serif">Let's build your custom plan.</span>
</h2>
<p className="text-lg md:text-2xl text-seraluna-dim max-w-3xl mx-auto leading-relaxed mb-16 font-light">
                We start with a free automation audit — mapping your workflows, identifying bottlenecks, and scoping exactly what you need. No templates. No guesswork.
            </p>
<div className="flex flex-col items-center gap-12">
<div className="flex flex-col sm:flex-row items-center gap-6 justify-center w-full">
<a className="group relative bg-white text-black px-10 py-5 rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105 shadow-[0_0_60px_-15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_80px_-15px_rgba(79,209,197,0.5)] w-full sm:w-auto" href="https://calendly.com/mitch-seraluna/free-audit" target="_blank">
<span className="relative z-10 flex items-center justify-center gap-3">
                            Schedule Your Free Audit
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
<div className="absolute inset-0 bg-seraluna-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo"></div>
</a>
<button className="px-10 py-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all text-white font-medium text-lg hover:border-white/30 hover:shadow-lg w-full sm:w-auto">
                        Talk to an expert
                    </button>
</div>

<div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-8 md:gap-16 pt-8 mt-4 border-t border-white/5 w-full max-w-3xl">
<div className="flex items-center gap-3 text-sm text-seraluna-dim font-medium tracking-wide">
<div className="w-8 h-8 rounded-full bg-seraluna-accent/10 flex items-center justify-center">
<iconify-icon className="text-seraluna-accent text-lg" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
                        Custom Scoped
                    </div>
<div className="flex items-center gap-3 text-sm text-seraluna-dim font-medium tracking-wide">
<div className="w-8 h-8 rounded-full bg-seraluna-accent/10 flex items-center justify-center">
<iconify-icon className="text-seraluna-accent text-lg" icon="solar:document-text-linear"></iconify-icon>
</div>
                        No Lock-In Contracts
                    </div>
<div className="flex items-center gap-3 text-sm text-seraluna-dim font-medium tracking-wide">
<div className="w-8 h-8 rounded-full bg-seraluna-accent/10 flex items-center justify-center">
<iconify-icon className="text-seraluna-accent text-lg" icon="solar:stopwatch-play-linear"></iconify-icon>
</div>
                        Results in 30 Days
                    </div>
</div>
</div>
</div>
</section>


<section className="py-24 px-6 relative" id="about">
<div className="max-w-5xl mx-auto">
<div className="mb-16">
<span className="text-seraluna-accent font-mono text-sm tracking-widest uppercase">[ 05 — ABOUT ]</span>
<h2 className="text-4xl md:text-5xl font-bold text-white mt-4">The story behind<br/><span className="text-seraluna-accent">Seraluna</span></h2>
</div>
<div className="grid md:grid-cols-2 gap-12 items-start">
<div className="space-y-6">
<p className="text-seraluna-dim text-lg leading-relaxed">
              My name is Mitch Turner. For three years, I worked as a software consultant serving IT and cybersecurity professionals — building relationships, solving complex problems, and watching technology change faster than most businesses could keep up with.
            </p>
<p className="text-seraluna-dim text-lg leading-relaxed">
              Then AI arrived as a service. And everything changed.
            </p>
<p className="text-seraluna-dim text-lg leading-relaxed">
              I saw an enormous gap: small businesses had access to some of the most powerful tools in history, but no roadmap for using them. My background in IT consulting gave me a unique lens — I knew how to translate complex technology into real business outcomes.
            </p>
<p className="text-seraluna-dim text-lg leading-relaxed">
              When I started helping businesses implement AI systems, the results were immediate and undeniable. I fell in love with the process — and with watching businesses transform from the inside out.
            </p>
<p className="text-white text-lg font-medium leading-relaxed">
              Seraluna exists because every small business deserves access to the same tools and expertise that enterprise companies take for granted.
            </p>
</div>
<div className="bg-seraluna-card border border-seraluna-border rounded-2xl p-8 space-y-6">
<div className="border-b border-seraluna-border pb-6">
<div className="text-seraluna-accent font-mono text-xs tracking-widest mb-2">FOUNDER</div>
<div className="text-white text-xl font-semibold">Mitch Turner</div>
<div className="text-seraluna-dim text-sm mt-1">Business Automation Consultant</div>
</div>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="w-1.5 h-1.5 bg-seraluna-accent rounded-full mt-2 flex-shrink-0"></div>
<span className="text-seraluna-dim text-sm">3 years IT &amp; Cybersecurity consulting</span>
</div>
<div className="flex items-start gap-3">
<div className="w-1.5 h-1.5 bg-seraluna-accent rounded-full mt-2 flex-shrink-0"></div>
<span className="text-seraluna-dim text-sm">Specialized in AI automation for small business</span>
</div>
<div className="flex items-start gap-3">
<div className="w-1.5 h-1.5 bg-seraluna-accent rounded-full mt-2 flex-shrink-0"></div>
<span className="text-seraluna-dim text-sm">GoHighLevel implementation partner</span>
</div>
<div className="flex items-start gap-3">
<div className="w-1.5 h-1.5 bg-seraluna-accent rounded-full mt-2 flex-shrink-0"></div>
<span className="text-seraluna-dim text-sm">Systems built across multiple industries</span>
</div>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-seraluna-accent text-sm font-medium hover:text-white transition-colors duration-300" href="https://calendly.com/mitch-seraluna/quick-call" target="_blank">
                Talk to Mitch <span>→</span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="vision" style={{background: 'rgba(8,128,138,0.04)'}}>
<div className="max-w-5xl mx-auto">
<div className="mb-16">
<span className="text-seraluna-accent font-mono text-sm tracking-widest uppercase">[ 06 — VISION ]</span>
<h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Our North Star</h2>
</div>
<div className="border border-seraluna-accent/30 rounded-2xl p-10 mb-16" style={{background: 'rgba(79,209,197,0.05)'}}>
<blockquote className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            "Adapt or die."
          </blockquote>
<p className="text-seraluna-dim text-lg leading-relaxed">
            Artificial intelligence isn't a trend — it's a fundamental shift in how the world operates, moving faster than any business transformation in history. The companies that thrive won't be the biggest. They'll be the ones that adapted first. We exist to make sure that's you.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-6 mb-12">
<div className="bg-seraluna-card border border-seraluna-border rounded-xl p-6">
<div className="text-seraluna-accent font-mono text-xs tracking-widest mb-3">PILLAR 01</div>
<h3 className="text-white text-lg font-semibold mb-3">Trust &amp; Transparency</h3>
<p className="text-seraluna-dim text-sm leading-relaxed">No black boxes. No confusing fine print. We show you exactly what we're building, how it works, and what it's doing for your business — every step of the way.</p>
</div>
<div className="bg-seraluna-card border border-seraluna-border rounded-xl p-6">
<div className="text-seraluna-accent font-mono text-xs tracking-widest mb-3">PILLAR 02</div>
<h3 className="text-white text-lg font-semibold mb-3">Long-Term Partnership</h3>
<p className="text-seraluna-dim text-sm leading-relaxed">We don't build and disappear. As AI evolves, your systems evolve with it. We're with you through every upgrade, every shift, every new capability that changes the game.</p>
</div>
<div className="bg-seraluna-card border border-seraluna-border rounded-xl p-6">
<div className="text-seraluna-accent font-mono text-xs tracking-widest mb-3">PILLAR 03</div>
<h3 className="text-white text-lg font-semibold mb-3">Expert Service</h3>
<p className="text-seraluna-dim text-sm leading-relaxed">You bring the business expertise. We bring the technical execution. Together, that's an unfair advantage — and we're committed to keeping it that way.</p>
</div>
</div>
<div className="bg-seraluna-card border border-seraluna-border rounded-2xl p-8">
<h3 className="text-white text-xl font-semibold mb-8">Our Commitment to You</h3>
<div className="grid md:grid-cols-2 gap-8">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{background: 'rgba(79, 209, 197, 0.1)', border: '1px solid rgba(79,209,197,0.3)'}}>
<span className="text-seraluna-accent text-sm font-bold">✓</span>
</div>
<div>
<div className="text-white font-medium mb-1">Money-Back Guarantee</div>
<div className="text-seraluna-dim text-sm">If we don't deliver results, you don't pay. Simple as that.</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{background: 'rgba(79, 209, 197, 0.1)', border: '1px solid rgba(79,209,197,0.3)'}}>
<span className="text-seraluna-accent text-sm font-bold">✓</span>
</div>
<div>
<div className="text-white font-medium mb-1">No Contracts</div>
<div className="text-seraluna-dim text-sm">Month-to-month. Stay because the results speak for themselves.</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{background: 'rgba(79, 209, 197, 0.1)', border: '1px solid rgba(79,209,197,0.3)'}}>
<span className="text-seraluna-accent text-sm font-bold">✓</span>
</div>
<div>
<div className="text-white font-medium mb-1">Cancel Anytime</div>
<div className="text-seraluna-dim text-sm">No penalties, no hard feelings. We earn your business every single month.</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{background: 'rgba(79, 209, 197, 0.1)', border: '1px solid rgba(79,209,197,0.3)'}}>
<span className="text-seraluna-accent text-sm font-bold">✓</span>
</div>
<div>
<div className="text-white font-medium mb-1">Always Evolving With You</div>
<div className="text-seraluna-dim text-sm">As AI advances, so will your systems — handled for you, delivered with zero disruption.</div>
</div>
</div>
</div>
</div>
</div>
</section>
<footer className="relative py-24 px-6 border-t border-white/5 bg-[#020203] overflow-hidden">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-seraluna-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

<div className="absolute bottom-[-5%] left-0 right-0 select-none pointer-events-none flex justify-center opacity-[0.03]">
<h1 className="text-[18vw] font-bold text-white tracking-tighter leading-none">SERALUNA</h1>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-24">

<div>
<h4 className="text-white font-medium mb-8 text-xs uppercase tracking-[0.2em] opacity-80">Company</h4>
<ul className="space-y-5 text-sm text-seraluna-dim font-light">
<li><a className="hover:text-white transition-colors duration-300 flex items-center gap-2 group" href="#about"><span className="w-0 h-[1px] bg-seraluna-accent transition-all duration-300 group-hover:w-3"></span>About Seraluna</a></li>
<li><a className="hover:text-white transition-colors duration-300 flex items-center gap-2 group" href="#vision"><span className="w-0 h-[1px] bg-seraluna-accent transition-all duration-300 group-hover:w-3"></span>Vision &amp; North Star</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-8 text-xs uppercase tracking-[0.2em] opacity-80">Platform</h4>
<ul className="space-y-5 text-sm text-seraluna-dim font-light">
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-8 text-xs uppercase tracking-[0.2em] opacity-80">Resources</h4>
<ul className="space-y-5 text-sm text-seraluna-dim font-light">
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-8 text-xs uppercase tracking-[0.2em] opacity-80">Legal</h4>
<ul className="space-y-5 text-sm text-seraluna-dim font-light">
<li><a className="hover:text-white transition-colors duration-300 flex items-center gap-2 group" href="https://app.termly.io/policy-viewer/policy.html?policyUUID=41e6ae4b-7a26-4e03-8b1d-8baaf8a9a3a0" rel="noopener" target="_blank"><span className="w-0 h-[1px] bg-seraluna-accent transition-all duration-300 group-hover:w-3"></span>Terms of Service</a></li>
<li><a className="hover:text-white transition-colors duration-300 flex items-center gap-2 group" href="https://app.termly.io/policy-viewer/policy.html?policyUUID=2b1317ee-0d11-4cfb-b954-e79663315df0" rel="noopener" target="_blank"><span className="w-0 h-[1px] bg-seraluna-accent transition-all duration-300 group-hover:w-3"></span>Privacy Policy</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-seraluna-dim/60 font-mono tracking-wider gap-4">
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-seraluna-accent animate-pulse"></span>
<span className="uppercase">Seraluna Operating System</span>
</div>
<div>© 2026 Seraluna. All rights reserved.</div>
</div>
</div>
</footer>


    </>
  );
}
