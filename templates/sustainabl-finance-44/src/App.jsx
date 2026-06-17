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



        // --- Icons ---
        lucide.createIcons();

        // --- Lenis Smooth Scroll ---
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureDirection: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // --- GSAP Setup ---
        gsap.registerPlugin(ScrollTrigger);

        // Loader
        const tlLoader = gsap.timeline();
        tlLoader.to("#loader-bar", {
            width: "100%",
            duration: 1.5,
            ease: "power2.inOut"
        })
        .to("#loader", {
            yPercent: -100,
            duration: 0.8,
            ease: "power4.inOut",
            delay: 0.2
        })
        .from(".hero-line", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out"
        }, "-=0.5")
        .to(".hero-text", {
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        }, "-=0.8")
        .to("#hero-canvas", {
            opacity: 1,
            duration: 2
        }, "-=1")
        .to(".hero-card", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out"
        }, "-=1");

        // Scroll Reveals
        document.querySelectorAll('.reveal-trigger').forEach((el) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            });
        });

        // --- Horizontal Scroll Logic ---
        const initScrollAnimation = () => {
            if (window.innerWidth >= 1024) {
                const section = document.querySelector('[data-element-id="process-scroll"]');
                const track = section?.querySelector('.finance-track');
                const trackWrapper = track?.parentElement;
                
                if (section && track) {
                    const getScrollDistance = () => {
                        const trackWidth = track.scrollWidth;
                        const containerWidth = trackWrapper.offsetWidth;
                        const paddingRight = 96; 
                        return Math.max(0, trackWidth - containerWidth + paddingRight);
                    };

                    const tween = gsap.to(track, {
                        x: () => -getScrollDistance(),
                        ease: "none",
                        scrollTrigger: {
                            trigger: section,
                            start: "top top",
                            end: () => "+=" + (getScrollDistance() + window.innerHeight),
                            pin: true,
                            scrub: 0.5,
                            invalidateOnRefresh: true
                        }
                    });
                }
            }
        };
        window.addEventListener('load', initScrollAnimation);

        // --- Canvas Animation ---
        const canvas = document.getElementById('hero-canvas');
        if (canvas) {
            const ctx = canvas.getContext('2d');
            let width, height;
            let particles = [];

            function resize() {
                width = canvas.width = canvas.parentElement.offsetWidth;
                height = canvas.height = canvas.parentElement.offsetHeight;
            }
            window.addEventListener('resize', resize);
            resize();

            class Particle {
                constructor() {
                    this.angle = Math.random() * Math.PI * 2;
                    this.radius = Math.random() * 200 + 50; 
                    this.size = Math.random() * 2 + 1;
                    this.speed = Math.random() * 0.002 + 0.001;
                    this.y = (Math.random() - 0.5) * height * 0.8;
                    this.color = Math.random() > 0.8 ? '#10B981' : '#cbd5e1'; 
                }

                update() {
                    this.angle += this.speed;
                    this.x = width/2 + Math.cos(this.angle) * this.radius;
                    this.currentY = height/2 + this.y * Math.sin(this.angle * 0.5) + Math.sin(Date.now() * 0.001 + this.radius)*20;
                    this.scale = (Math.sin(this.angle) + 2) / 3; 
                }

                draw() {
                    ctx.fillStyle = this.color;
                    ctx.globalAlpha = this.scale;
                    ctx.beginPath();
                    ctx.arc(this.x, this.currentY, this.size * this.scale, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            for (let i = 0; i < 120; i++) particles.push(new Particle());

            function animate() {
                ctx.clearRect(0, 0, width, height);
                ctx.lineWidth = 0.5;
                for (let i = 0; i < particles.length; i++) {
                    particles[i].update();
                    particles[i].draw();
                    for (let j = i; j < particles.length; j++) {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].currentY - particles[j].currentY;
                        const dist = Math.sqrt(dx*dx + dy*dy);
                        if (dist < 70) {
                            ctx.strokeStyle = `rgba(148, 163, 184, ${0.15 * (1 - dist/70)})`;
                            ctx.beginPath();
                            ctx.moveTo(particles[i].x, particles[i].currentY);
                            ctx.lineTo(particles[j].x, particles[j].currentY);
                            ctx.stroke();
                        }
                    }
                }
                requestAnimationFrame(animate);
            }
            animate();
        }

        // --- Custom Cursor ---
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorCircle = document.querySelector('.cursor-circle');

        if (window.matchMedia("(pointer: fine)").matches) {
            let mouseX = 0, mouseY = 0;
            let cursorX = 0, cursorY = 0;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                gsap.to(cursorDot, { x: mouseX, y: mouseY, duration: 0 });
            });

            gsap.ticker.add(() => {
                cursorX += (mouseX - cursorX) * 0.15;
                cursorY += (mouseY - cursorY) * 0.15;
                cursorCircle.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
            });

            const hoverTargets = document.querySelectorAll('a, button, .group, .cursor-pointer');
            hoverTargets.forEach(el => {
                el.addEventListener('mouseenter', () => document.body.classList.add('hover-active'));
                el.addEventListener('mouseleave', () => document.body.classList.remove('hover-active'));
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
      

<div className="loader" id="loader">
<div className="flex gap-2 mb-4 items-center">
<svg className="lucide lucide-leaf w-6 h-6 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
<div className="font-bold text-4xl tracking-tighter text-slate-900">canapa</div>
</div>
<div className="w-64 h-[2px] rounded-full overflow-hidden bg-slate-100">
<div className="loader-bar" id="loader-bar"></div>
</div>
</div>

<div className="cursor-dot hidden md:block"></div>
<div className="cursor-circle hidden md:block"></div>

<nav className="fixed top-6 left-0 w-full flex justify-center z-50 px-4 pointer-events-none">
<div className="pointer-events-auto glass-panel flex shadow-lg shadow-black/5 transition-transform hover:scale-[1.02] duration-500 ease-out rounded-full p-1.5 items-center">
<a className="flex items-center gap-2 px-5 transition-opacity hover:opacity-70" href="#">
<span className="font-bold text-lg tracking-tight">TDBM</span>
</a>
<div className="hidden md:flex items-center gap-1 bg-slate-50/50 rounded-full p-1">
<a className="uppercase text-slate-500 hover:text-slate-900 hover:bg-white transition-all duration-300 text-[11px] font-semibold tracking-widest rounded-full py-2.5 px-6" href="#process">Who we are</a>
<a className="uppercase text-slate-500 hover:text-slate-900 hover:bg-white transition-all duration-300 text-[11px] font-semibold tracking-widest rounded-full py-2.5 px-6" href="#solutions">Financials</a>
<a className="uppercase text-slate-500 hover:text-slate-900 hover:bg-white transition-all duration-300 text-[11px] font-semibold tracking-widest rounded-full py-2.5 px-6" href="#sustainability">Sustainability</a>
<a className="uppercase hover:text-slate-900 hover:bg-white transition-all duration-300 text-[11px] font-semibold text-slate-500 tracking-widest rounded-full pt-2.5 pr-6 pb-2.5 pl-6" href="#news">Newsroom</a>
</div>
<a className="md:ml-2 group hover:bg-slate-900 uppercase transition-all duration-300 flex items-center gap-2 text-[11px] font-bold text-white tracking-widest bg-blue-600 rounded-full pt-3 pr-6 pb-3 pl-6" href="#contact">
<span className="">Contact</span>
<svg className="lucide lucide-arrow-right w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</nav>

<section className="min-h-screen overflow-hidden w-full relative">
<div className="grid lg:grid-cols-2 min-h-screen w-full h-full">

<div className="flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-32 pb-20 order-2 lg:order-1 bg-white z-10">
<div className="max-w-xl">
<h1 className="font-semibold text-[13vw] lg:text-[6.5vw] leading-[0.9] tracking-tighter text-slate-900 mb-10 text-balance">
<div className="overflow-hidden">
<span className="block hero-line">Mongolia's</span>
</div>
<div className="overflow-hidden">
<span className="block hero-line">Sustainable</span>
</div>
<div className="overflow-hidden">
<span className="block hero-line text-emerald-600">Financial Future</span>
</div>
</h1>
<p className="hero-text text-lg md:text-xl text-slate-500 leading-relaxed font-light opacity-0 max-w-md mb-12">
                        Since 1990, we have served as a key pillar of Mongolia's economy and a bridge to global financial markets.
                    </p>
<div className="hero-text opacity-0 flex gap-6 items-center">
<button className="group overflow-hidden relative bg-blue-600 hover:bg-emerald-600 transition-colors text-white rounded-full py-4 px-10">
<span className="relative z-10 uppercase text-xs font-bold tracking-widest">Start Journey</span>
</button>
</div>
</div>
</div>

<div className="relative h-[50vh] lg:h-full w-full bg-slate-50 order-1 lg:order-2 overflow-hidden flex items-center justify-center border-l border-slate-100">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

<canvas className="relative z-10 w-full h-full opacity-0 transition-opacity duration-1000" id="hero-canvas"></canvas>

<div className="absolute bottom-10 left-10 md:left-auto md:right-10 bg-white/80 backdrop-blur-xl p-6 rounded-3xl border border-white shadow-2xl shadow-slate-200/50 z-20 max-w-xs hero-card opacity-0 translate-y-10">
<div className="flex justify-between items-start mb-4">
<span className="text-4xl font-bold text-slate-900 tracking-tight">99.9<span className="text-emerald-500 text-2xl align-top">%</span></span>
<svg className="lucide lucide-flask-conical text-emerald-500 w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg>
</div>
<p className="text-xs text-slate-500 leading-relaxed font-medium">Purity levels achieved in our latest batch of CBD isolate using cryo-ethanol extraction.</p>
</div>
</div>
</div>
</section>

<section className="md:py-40 overflow-hidden w-full pt-32 pb-32 relative" id="sustainability">

<img alt="Creative team working" className="z-0 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="z-10 backdrop-blur-[2px] bg-slate-950/60 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="relative z-20 container mx-auto px-6 md:px-12 max-w-7xl h-full flex flex-col justify-end md:justify-center">
<div className="max-w-4xl">
<span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/10 text-white text-[10px] uppercase tracking-widest font-bold mb-6 backdrop-blur-sm">Sustainability Report 2024</span>
<h2 className="text-4xl md:text-6xl lg:text-7xl text-white tracking-tighter font-semibold mb-6 drop-shadow-sm">
        Financing a <br/>Sustainable Future
      </h2>
<p className="text-lg md:text-2xl leading-relaxed font-light text-white/80 max-w-2xl mb-10 drop-shadow-sm text-balance">
        We have committed to net-zero operational emissions by 2030 and to significantly increasing our green loan
        portfolio.
      </p>
<div className="flex flex-wrap gap-4 mb-16">
<a className="group inline-flex items-center gap-3 bg-white text-slate-900 rounded-full py-3 px-6 text-sm font-bold tracking-wide transition-all hover:bg-slate-200" href="#showreel">
<div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-white">
<svg className="w-3 h-3 fill-white stroke-none" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3"></polygon>
</svg>
</div>
<span>Watch ESG Report</span>
</a>
<a className="inline-flex items-center gap-2 hover:bg-white/10 text-sm font-medium text-white tracking-wide border border-white/20 rounded-full py-3 px-8 transition-all duration-300" href="#">
<span>Read Documentation</span>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-8">
<div>
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">₮450B</div>
<p className="text-xs md:text-sm text-white/60 font-medium uppercase tracking-wide">Green Loans</p>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">
            12,500<span className="text-lg align-top">tn</span></div>
<p className="text-xs md:text-sm text-white/60 font-medium uppercase tracking-wide">CO2 Reduction</p>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">
            100<span className="text-lg align-top">%</span></div>
<p className="text-xs md:text-sm text-white/60 font-medium uppercase tracking-wide">Digital First</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] w-full pt-32 pb-32 relative" id="sustainability" style={{fontFamily: '\'Google Sans\', sans-serif'}}>

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="container md:px-12 z-10 flex flex-col max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center">

<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight text-center mb-16">
      Upcoming Events
    </h2>

<div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-x-6 gap-y-6 items-start">

<div className="group relative flex flex-col bg-neutral-900/50 border border-white/10 rounded-[2rem] p-8 hover:bg-neutral-900 transition-colors duration-500 w-full">
<div className="mb-auto">
<div className="space-y-2 mb-6">
<p className="uppercase text-xs font-bold text-emerald-500 tracking-widest">Earnings call</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">Q3 Financial Results Presentation</h3>
</div>
<div className="grid grid-cols-3 gap-4 border-y border-white/10 py-5 mb-6 gap-x-4 gap-y-4">
<div className="">
<p className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest mb-1">Date</p>
<p className="text-sm font-medium text-neutral-200">Mar 05</p>
</div>
<div className="">
<p className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest mb-1">Location</p>
<p className="text-sm font-medium text-neutral-200">TDBM</p>
</div>
<div className="">
<p className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest mb-1">Time</p>
<p className="text-sm font-medium text-neutral-200">16:00</p>
</div>
</div>
<p className="leading-relaxed text-sm text-neutral-400 mb-8">Brief details about event and what to present etc.
          </p>
</div>
<div className="">
<button className="w-full group relative bg-blue-600 hover:bg-blue-500 text-white transition-all duration-300 flex items-center justify-center gap-2 text-[11px] font-bold tracking-widest rounded-full py-3 px-6 shadow-md hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-0.5">
<span className="uppercase">View Details</span>
<svg className="lucide lucide-arrow-right w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="group relative flex flex-col bg-neutral-900/50 border border-white/10 rounded-[2rem] p-8 hover:bg-neutral-900 transition-colors duration-500 w-full">
<div className="mb-auto">
<div className="space-y-2 mb-6">
<p className="uppercase text-xs font-bold text-emerald-500 tracking-widest">Earnings call</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">Q3 Financial Results Presentation</h3>
</div>
<div className="grid grid-cols-3 gap-4 border-y border-white/10 py-5 mb-6 gap-x-4 gap-y-4">
<div className="">
<p className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest mb-1">Date</p>
<p className="text-sm font-medium text-neutral-200">Mar 05</p>
</div>
<div className="">
<p className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest mb-1">Location</p>
<p className="text-sm font-medium text-neutral-200">TDBM</p>
</div>
<div className="">
<p className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest mb-1">Time</p>
<p className="text-sm font-medium text-neutral-200">16:00</p>
</div>
</div>
<p className="leading-relaxed text-sm text-neutral-400 mb-8">Brief details about event and what to present etc.
          </p>
</div>
<div className="">
<button className="w-full group relative bg-blue-600 hover:bg-blue-500 text-white transition-all duration-300 flex items-center justify-center gap-2 text-[11px] font-bold tracking-widest rounded-full py-3 px-6 shadow-md hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-0.5">
<span className="uppercase">View Details</span>
<svg className="lucide lucide-arrow-right w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="group relative flex flex-col bg-neutral-900/50 border border-white/10 rounded-[2rem] p-8 hover:bg-neutral-900 transition-colors duration-500 w-full">
<div className="mb-auto">
<div className="space-y-2 mb-6">
<p className="uppercase text-xs font-bold text-emerald-500 tracking-widest">Earnings call</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">Annual General Meeting</h3>
</div>
<div className="grid grid-cols-3 gap-4 border-y border-white/10 py-5 mb-6 gap-x-4 gap-y-4">
<div className="">
<p className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest mb-1">Date</p>
<p className="text-sm font-medium text-neutral-200">Mar 05</p>
</div>
<div className="">
<p className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest mb-1">Location</p>
<p className="text-sm font-medium text-neutral-200">TDBM</p>
</div>
<div className="">
<p className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest mb-1">Time</p>
<p className="text-sm font-medium text-neutral-200">16:00</p>
</div>
</div>
<p className="leading-relaxed text-sm text-neutral-400 mb-8">Brief details about event and what to present etc.
          </p>
</div>
<div className="">
<button className="w-full group relative bg-blue-600 hover:bg-blue-500 text-white transition-all duration-300 flex items-center justify-center gap-2 text-[11px] font-bold tracking-widest rounded-full py-3 px-6 shadow-md hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-0.5">
<span className="uppercase">View Details</span>
<svg className="lucide lucide-arrow-right w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-32 pb-32 relative">

<div className="pointer-events-none absolute inset-0 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="absolute -top-[20%] -left-[10%] h-[800px] w-[800px] rounded-full bg-indigo-50/50 blur-3xl opacity-60">
</div>
<div className="absolute top-[40%] right-[-10%] h-[600px] w-[600px] rounded-full bg-fuchsia-50/50 blur-3xl opacity-60">
</div>
</div>
<div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="reveal-trigger relative group">
<div className="absolute -inset-1 bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-blue-300/20 rounded-[32px] blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-700">
</div>
<div className="relative overflow-hidden rounded-[28px] bg-white ring-1 ring-slate-200 shadow-2xl shadow-slate-200/50">
<img alt="AI workspace" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4209685f-125d-4dc8-b4b6-9a811d4f6e19_1600w.webp"/>
</div>
</div>

<div className="reveal-trigger">
<div className="inline-flex items-center gap-2 mb-6">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
<svg className="w-4 h-4" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
<span className="text-sm font-semibold text-indigo-900 uppercase tracking-widest">About Aura</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
          Intelligent design, <span className="text-slate-400">beautiful results.</span>
</h2>
<p className="text-lg text-slate-600 leading-relaxed font-light mb-8 max-w-lg">
          Aura combines cutting-edge AI technology with thoughtful design principles to help you create stunning
          websites in minutes.
        </p>
<a className="group inline-flex items-center gap-3 text-sm font-bold text-slate-900 bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-lg hover:border-slate-300 rounded-full py-3 px-6 transition-all duration-300" href="#">
          Discover Our Story
          <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</a>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all">
<h3 className="font-semibold text-slate-900 mb-2">Lightning Fast</h3>
<p className="text-sm text-slate-500">Create professional sites in minutes.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all">
<h3 className="font-semibold text-slate-900 mb-2">AI-Powered</h3>
<p className="text-sm text-slate-500">GPT-5 intelligence handles code.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all">
<h3 className="font-semibold text-slate-900 mb-2">Customizable</h3>
<p className="text-sm text-slate-500">Control over every element.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50 border-t border-slate-200" id="solutions">
<div className="container mx-auto px-6 md:px-12 max-w-7xl">

<div className="flex flex-col items-center text-center mb-20 max-w-3xl mx-auto reveal-trigger">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-slate-900 mb-6">Financial Overview</h2>
<p className="text-slate-500 text-lg md:text-xl leading-relaxed font-light mb-10">
        Transparent reporting on our operational efficiency, asset growth, and shareholder value. We believe in
        sustainable growth driven by nature.
      </p>
<button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300">
                    View Full Reports
                </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal-trigger relative h-[480px] rounded-[2rem] overflow-hidden group w-full shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all duration-700">
<img alt="Forest Mist" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500"></div>
<div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-8">
<div className="flex items-baseline gap-2 mb-6">
<span className="text-5xl font-bold tracking-tight">$87.4</span>
<span className="text-lg font-medium opacity-80">million</span>
</div>
<span className="bg-white/20 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Net Profit</span>
</div>
</div>

<div className="reveal-trigger relative h-[480px] md:h-[560px] rounded-[2rem] overflow-hidden group w-full shadow-xl hover:shadow-2xl hover:shadow-emerald-900/20 transition-all duration-700 md:-mt-10 z-10">
<img alt="Green Hills" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500"></div>
<div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-8">
<div className="flex items-baseline gap-2 mb-6">
<span className="text-6xl font-bold tracking-tight">$4.41</span>
<span className="text-xl font-medium opacity-80">billion</span>
</div>
<span className="bg-white text-slate-900 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Total Assets</span>
</div>
</div>

<div className="reveal-trigger relative h-[480px] rounded-[2rem] overflow-hidden group w-full shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all duration-700">
<img alt="Mountain Lake" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500"></div>
<div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-8">
<div className="flex items-baseline gap-1 mb-6">
<span className="text-5xl font-bold tracking-tight">18.5%</span>
</div>
<span className="bg-white/20 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Return on Equity</span>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen py-32 bg-[#050505] text-white relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-16 max-w-2xl text-balance">Why Invest in
      <span className="text-slate-500">TDBM?</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="reveal-trigger lg:row-span-2 group relative bg-neutral-900/50 border border-white/10 rounded-[2rem] p-8 overflow-hidden hover:bg-neutral-900 transition-colors duration-500 flex flex-col">
<div className="mb-auto">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400">
<svg className="lucide lucide-sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z">
</path>
</svg>
</div>
<h3 className="text-2xl font-semibold mb-4">Market Leader</h3>
<p className="text-neutral-400 leading-relaxed text-sm mb-8">Absolute leader in the corporate banking market.
            Major financier of key development projects and programs.</p>
</div>
<div className="mt-8 relative h-[200px] w-full flex items-center justify-center bg-white/5 rounded-xl overflow-hidden border border-white/5 group-hover:border-white/10 transition-colors">

<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
<div className="w-48 bg-[#0F1115] rounded-lg border border-white/10 p-4 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500">
<div className="flex gap-1.5 mb-3">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="space-y-2">
<div className="h-1.5 bg-white/20 rounded-full w-3/4"></div>
<div className="h-1.5 bg-white/10 rounded-full w-1/2"></div>
</div>
</div>
</div>
</div>

<div className="reveal-trigger md:col-span-2 group bg-neutral-900/50 border border-white/10 rounded-[2rem] p-8 hover:bg-neutral-900 transition-colors duration-500 flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-blue-400">
<svg className="lucide lucide-layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
</div>
<h3 className="text-2xl font-semibold mb-4">Global Partnership</h3>
<p className="text-neutral-400 leading-relaxed text-sm mb-6 max-w-md">The primary bridge for foreign trade
            finance, with correspondent relationships with over 300 international banks.</p>
<a className="inline-flex items-center text-sm font-medium text-white hover:text-blue-400 transition-colors" href="#">
            Explore Network <svg className="ml-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="flex-1 w-full h-full min-h-[160px] bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl border border-white/5 relative overflow-hidden group-hover:border-white/10 transition-colors">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-full h-full opacity-30 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]">
</div>
</div>
</div>
</div>

<div className="reveal-trigger group bg-neutral-900/50 border border-white/10 rounded-[2rem] p-8 hover:bg-neutral-900 transition-colors duration-500">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-purple-400">
<svg className="lucide lucide-message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3">Digital Transformation</h3>
<p className="text-neutral-400 leading-relaxed text-sm">Strategic focus on digitizing customer services, reducing
          operational costs and increasing efficiency.</p>
</div>

<div className="reveal-trigger group bg-neutral-900/50 border border-white/10 rounded-[2rem] p-8 hover:bg-neutral-900 transition-colors duration-500">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-orange-400">
<svg className="lucide lucide-shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
<path d="M3 6h18"></path>
<path d="M16 10a4 4 0 0 1-8 0"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3">E-Commerce Solutions</h3>
<p className="text-neutral-400 leading-relaxed text-sm">Comprehensive multichannel strategies for modern retail and
          digital commerce.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white border-b border-slate-100">
<div className="container mx-auto px-6 md:px-12 max-w-7xl">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-between mb-20 reveal-trigger">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-tight max-w-md">
        International Credit Ratings
      </h2>
<div className="max-w-xl">
<p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light mb-6">
          Our credit ratings, assigned by world-leading agencies Moody's and S&amp;P, stand as a testament to our
          financial stability and strength.
        </p>
<a className="inline-flex items-center text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 hover:border-slate-900 transition-colors" href="#">
          View full report <svg className="ml-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="reveal-trigger flex flex-col bg-slate-50 border border-slate-100 rounded-[2rem] p-10 h-[500px] relative overflow-hidden group hover:border-slate-200 transition-colors">
<div className="absolute inset-0 pointer-events-none opacity-[0.03]">
<svg className="w-full h-full stroke-slate-900 fill-none" strokeWidth="0.5" viewbox="0 0 100 100">
<circle cx="50" cy="50" r="20"></circle>
<circle cx="50" cy="50" r="35"></circle>
<circle cx="50" cy="50" r="48"></circle>
</svg>
</div>
<div className="text-center relative z-10 mt-6">
<span className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Long-term Rating</span>
<span className="text-lg font-semibold text-slate-900">Moody's Ratings</span>
</div>
<div className="flex-1 flex items-center justify-center relative z-10">
<div className="flex flex-col items-center">
<div className="text-7xl md:text-8xl font-medium text-slate-900 tracking-tighter mb-2 group-hover:scale-110 transition-transform duration-500">
              B1</div>
<div className="text-sm font-medium text-slate-400 uppercase tracking-widest bg-white px-3 py-1 rounded-full shadow-sm border border-slate-100">
              Stable</div>
</div>
</div>
</div>

<div className="reveal-trigger flex flex-col bg-slate-50 border border-slate-100 rounded-[2rem] p-10 h-[500px] relative overflow-hidden group hover:border-slate-200 transition-colors">
<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2">
</div>
<div className="text-center relative z-10 mt-6">
<span className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Issuer Credit Rating</span>
<span className="text-lg font-semibold text-slate-900">S&amp;P Global</span>
</div>
<div className="flex-1 flex items-center justify-center relative z-10">
<div className="flex flex-col items-center">
<div className="text-7xl md:text-8xl font-medium text-slate-900 tracking-tighter mb-2 group-hover:scale-110 transition-transform duration-500">
              B+</div>
<div className="text-sm font-medium text-slate-400 uppercase tracking-widest bg-white px-3 py-1 rounded-full shadow-sm border border-slate-100">
              Stable</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:h-screen text-white bg-[#050505] w-full h-auto relative">
<div className="w-full h-auto lg:h-full flex flex-col lg:flex-row overflow-hidden">

<div className="lg:w-1/2 lg:h-full flex flex-col md:px-16 lg:px-24 lg:py-0 z-10 bg-[#050505] border-white/5 border-r pt-24 pr-6 pb-24 pl-6 justify-center">
<h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.05] mb-8">
        Mongolia's pioneering commercial bank
      </h2>
<p className="text-lg md:text-xl text-neutral-400 leading-relaxed font-light max-w-lg">
        Founded in 1990, TDBM stands as Mongolia's pioneering commercial bank. We deliver a full spectrum of world-class
        financial solutions.
      </p>
</div>

<div className="w-full lg:w-1/2 h-auto lg:h-full flex items-center lg:overflow-hidden overflow-x-auto no-scrollbar py-12 lg:py-0 bg-[#050505]">
<div className="finance-track flex gap-8 px-6 lg:px-24 w-max">

<div className="group relative w-[85vw] md:w-[400px] h-[520px] bg-neutral-900/40 border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between hover:border-white/20 transition-all">
<div className="relative z-20">
<h3 className="text-3xl font-medium tracking-tight mb-4">Issue physical and virtual cards</h3>
<a className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">
              Learn More <svg className="ml-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
</div>
<div className="mt-auto h-48 w-full bg-gradient-to-br from-neutral-800 to-black rounded-2xl border border-white/5 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
<div className="absolute top-4 right-4 text-white/20 font-bold italic">TDBM</div>
<div className="absolute bottom-4 left-4 text-white/40 font-mono text-xs">•••• 8899</div>
</div>
</div>

<div className="group relative w-[85vw] md:w-[400px] h-[520px] bg-neutral-900/40 border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between hover:border-white/20 transition-all">
<div className="relative z-20">
<h3 className="text-3xl font-medium tracking-tight mb-4">Sync your business tools</h3>
<span className="text-xs font-bold uppercase tracking-widest text-blue-400">API Integration</span>
</div>
<div className="mt-auto h-48 w-full relative flex items-center justify-center">
<div className="w-24 h-24 rounded-full bg-blue-500/20 blur-2xl absolute"></div>
<div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-black rounded-xl border border-white/20 z-10 shadow-2xl transform rotate-12 group-hover:rotate-6 transition-transform">
</div>
<div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-black rounded-xl border border-white/20 z-0 shadow-2xl transform -rotate-12 translate-x-8 -translate-y-4 group-hover:-rotate-6 transition-transform">
</div>
</div>
</div>

<div className="group relative w-[85vw] md:w-[400px] h-[520px] bg-neutral-900/40 border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between hover:border-white/20 transition-all">
<div className="relative z-20">
<h3 className="text-3xl font-medium tracking-tight mb-4">Global currency exchange</h3>
<span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Forex</span>
</div>
<div className="mt-auto h-48 w-full relative flex items-center justify-center">
<div className="w-32 h-32 border border-emerald-500/20 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
<div className="w-2 h-2 bg-emerald-500 rounded-full absolute top-0"></div>
</div>
<div className="w-24 h-24 border border-emerald-500/40 rounded-full absolute flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative border-b border-slate-100" id="news">
<div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
<div className="flex items-end justify-between mb-16 reveal-trigger">
<div>
<span className="inline-block py-1 px-3 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-4">Press &amp; Updates</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">Latest Newsroom</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-900 border-b border-slate-200 pb-1 hover:border-emerald-500 transition-colors" href="#">
                View all articles
                <svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-3 grid md:grid-cols-12 gap-0 bg-slate-50 rounded-[2.5rem] border border-slate-200 overflow-hidden group hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 reveal-trigger cursor-pointer h-auto md:h-[420px]">

<div className="md:col-span-7 lg:col-span-8 relative h-64 md:h-full overflow-hidden">
<img alt="Strategic Meeting" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="md:col-span-5 lg:col-span-4 p-8 md:p-10 flex flex-col justify-between relative bg-white md:bg-white/50 md:backdrop-blur-sm border-t md:border-t-0 md:border-l border-slate-100">
<div>
<div className="flex items-center gap-3 mb-6">
<span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-[10px] uppercase font-bold tracking-widest rounded-full">Featured</span>
<span className="text-xs font-medium text-slate-400">March 01, 2025</span>
</div>
<h3 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight leading-tight mb-4 group-hover:text-emerald-700 transition-colors">
                            Strategic Partnership with Global Green Energy Initiative
                        </h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                            We are proud to announce a landmark collaboration aimed at funding renewable energy projects across the Gobi region.
                        </p>
</div>
<div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:translate-x-2 transition-transform duration-300">
                        Read Story
                        <svg className="w-3 h-3" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="flex flex-col bg-slate-50 border border-slate-200 rounded-[2rem] overflow-hidden group hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 reveal-trigger cursor-pointer h-[380px]">
<div className="h-48 relative overflow-hidden">
<img alt="Financial Results" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 md:p-8 flex flex-col flex-1">
<span className="text-xs font-bold text-slate-400 mb-3">Feb 24, 2025</span>
<h4 className="text-lg font-semibold text-slate-900 tracking-tight leading-snug mb-3 group-hover:text-emerald-700 transition-colors">
                        Q4 Financial Results Exceed Market Expectations
                    </h4>
<div className="mt-auto">
<span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-colors">
                            Financials <svg className="ml-1" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</div>

<div className="flex flex-col bg-slate-50 border border-slate-200 rounded-[2rem] overflow-hidden group hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 reveal-trigger cursor-pointer h-[380px]">
<div className="h-48 relative overflow-hidden">
<img alt="Mobile App" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 md:p-8 flex flex-col flex-1">
<span className="text-xs font-bold text-slate-400 mb-3">Feb 18, 2025</span>
<h4 className="text-lg font-semibold text-slate-900 tracking-tight leading-snug mb-3 group-hover:text-emerald-700 transition-colors">
                        Launching the New Era of Digital Banking Services
                    </h4>
<div className="mt-auto">
<span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-colors">
                            Product <svg className="ml-1" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</div>

<div className="flex flex-col bg-slate-50 border border-slate-200 rounded-[2rem] overflow-hidden group hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 reveal-trigger cursor-pointer h-[380px]">
<div className="h-48 relative overflow-hidden">
<img alt="Community" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 md:p-8 flex flex-col flex-1">
<span className="text-xs font-bold text-slate-400 mb-3">Feb 10, 2025</span>
<h4 className="text-lg font-semibold text-slate-900 tracking-tight leading-snug mb-3 group-hover:text-emerald-700 transition-colors">
                        Community Outreach Program reaches 10k Citizens
                    </h4>
<div className="mt-auto">
<span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-colors">
                            Impact <svg className="ml-1" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-32 pb-32 relative" id="contact">

<div className="pointer-events-none absolute inset-0 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="absolute bottom-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-emerald-50/50 blur-3xl opacity-60">
</div>
<div className="absolute top-[20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-50/50 blur-3xl opacity-60">
</div>
</div>
<div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

<div className="reveal-trigger">
<div className="inline-flex items-center gap-2 mb-6">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
<svg className="lucide lucide-message-square" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</span>
<span className="text-sm font-semibold text-slate-900 uppercase tracking-widest">Contact</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
          Get in touch with <span className="text-slate-400">our team.</span>
</h2>
<p className="text-lg text-slate-600 leading-relaxed font-light mb-12 max-w-lg">
          We value open</p>

<div className="space-y-8">

<div className="flex gap-6 group cursor-pointer">
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300 flex-shrink-0">
<svg className="lucide lucide-phone" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
</path>
</svg>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">Phone
              </h4>
<p className="text-slate-500 text-sm mb-1">+976 11 310 000</p>
<p className="text-slate-400 text-xs">Mon-Fri, 9AM - 6PM PST</p>
</div>
</div>

<div className="flex gap-6 group cursor-pointer">
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300 flex-shrink-0">
<svg className="lucide lucide-mail" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
</svg>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">Email
              </h4>
<p className="text-slate-500 text-sm mb-1">ir@tdbm.mn</p>
<p className="text-slate-400 text-xs">Response within 24 hours</p>
</div>
</div>

<div className="flex gap-6 group cursor-pointer">
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300 flex-shrink-0">
<svg className="lucide lucide-map-pin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">
                Office</h4>
<p className="text-slate-500 text-sm mb-1">Peace Avenue-19, TDBM Building</p>
<p className="text-slate-400 text-xs">Ulaanbaatar, Mongolia</p>
</div>
</div>
</div>
</div>

<div className="reveal-trigger bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-8">Send a message</h3>
<form className="space-y-6">
<div>
<label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Company Name</label>
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all placeholder:text-slate-400 text-sm font-medium" placeholder="Trade &amp; Development Bank" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">First Name</label>
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all placeholder:text-slate-400 text-sm font-medium" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Last Name</label>
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all placeholder:text-slate-400 text-sm font-medium" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Email Address</label>
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all placeholder:text-slate-400 text-sm font-medium" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Message</label>
<textarea className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all placeholder:text-slate-400 text-sm font-medium resize-none" placeholder="How can we help you?" rows="4"></textarea>
</div>
<button className="w-full group bg-slate-900 hover:bg-emerald-600 text-white transition-all duration-300 rounded-full py-4 px-8 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2" type="submit">
<span>Send Message</span>
<svg className="group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<p className="text-xs text-slate-400 text-center mt-4">
            By submitting, you agree to our <a className="underline hover:text-slate-900" href="#">Privacy Policy</a>.
          </p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 border-slate-200 border-t pt-24 pr-6 pb-12 pl-6">
<div className="container mx-auto px-6 md:px-12 max-w-7xl">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1">
<a className="flex items-center gap-2 font-bold text-2xl tracking-tighter text-slate-900 mb-6" href="#">
<svg className="w-5 h-5 text-emerald-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
                        canapa.
                    </a>
<p className="text-slate-500 text-sm leading-relaxed">Turin, Italy<br/>Denver, CO<br/>Berlin, DE</p>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Capabilities</span>
<a className="text-slate-600 hover:text-emerald-600 text-sm transition-colors" href="#">Extraction</a>
<a className="text-slate-600 hover:text-emerald-600 text-sm transition-colors" href="#">Distillation</a>
<a className="text-slate-600 hover:text-emerald-600 text-sm transition-colors" href="#">Formulation</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Company</span>
<a className="text-slate-600 hover:text-emerald-600 text-sm transition-colors" href="#">About</a>
<a className="text-slate-600 hover:text-emerald-600 text-sm transition-colors" href="#">Sustainability</a>
<a className="text-slate-600 hover:text-emerald-600 text-sm transition-colors" href="#">Investors</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Social</span>
<a className="text-slate-600 hover:text-emerald-600 text-sm transition-colors" href="#">LinkedIn</a>
<a className="text-slate-600 hover:text-emerald-600 text-sm transition-colors" href="#">Instagram</a>
<a className="text-slate-600 hover:text-emerald-600 text-sm transition-colors" href="#">X / Twitter</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200">
<p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">© 2025 Canapa Labs. All Rights Reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
