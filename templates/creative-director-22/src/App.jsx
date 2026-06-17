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



        // Initialize GSAP & Lenis
        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: false,
        });

        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => { lenis.raf(time * 1000) });
        gsap.ticker.lagSmoothing(0);

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 60) {
                nav.classList.add('bg-[#0a0a0a]/90', 'backdrop-blur-md', 'border-b', 'border-[#1f1f1f]', 'py-4', 'text-[#F5F5F5]');
                nav.classList.remove('py-6', 'text-[#0A0A0A]');
            } else {
                nav.classList.remove('bg-[#0a0a0a]/90', 'backdrop-blur-md', 'border-b', 'border-[#1f1f1f]', 'py-4', 'text-[#F5F5F5]');
                nav.classList.add('py-6', 'text-[#0A0A0A]');
            }
        });
        
        // Navbar Entrance
        gsap.from("nav", { y: -80, opacity: 0, duration: 1.2, ease: "power4.out", delay: 0.2 });

        // Hero Text Scramble Effect
        const chars = "!<>-_\/[]{}—=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        function scrambleText(element) {
            const originalText = element.innerText;
            let frame = 0;
            const duration = 40; // frames
            
            const interval = setInterval(() => {
                element.innerText = originalText.split("").map((c, i) => {
                    if (c === " ") return " ";
                    if (i < frame / (duration / originalText.length)) return originalText[i];
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join("");
                
                frame++;
                if (frame > duration) {
                    clearInterval(interval);
                    element.innerText = originalText;
                }
            }, 30);
        }

        // Hero Entrance Timeline
        const heroTl = gsap.timeline();
        heroTl.from(".hero-eyebrow", { y: 40, opacity: 0, duration: 0.7, delay: 0.5 })
              .from(".hero-h1 .line .block", { yPercent: 100, stagger: 0.15, duration: 1, ease: "power4.out" }, "-=0.3")
              .call(() => { scrambleText(document.querySelector('.scramble-text .block')); }, null, "-=0.5")
              .from(".hero-body", { y: 30, opacity: 0, duration: 0.8 }, "-=0.4")
              .from(".hero-ctas", { y: 20, opacity: 0, duration: 0.7, stagger: 0.1 }, "-=0.3")
              .from(".hero-image", { scale: 0.95, opacity: 0, duration: 1.5, ease: "power3.out" }, "-=1")
              .from(".hero-3d-float", { x: 60, scale: 0.5, opacity: 0, duration: 1, ease: "back.out(1.7)" }, "-=0.6");

        // Spotlight Cursor
        const spotlight = document.getElementById('spotlight');
        document.addEventListener('mousemove', (e) => {
            gsap.to(spotlight, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "none"
            });
        });

        // Image Parallax
        gsap.utils.toArray(".parallax-img").forEach(img => {
            gsap.to(img, {
                yPercent: 15,
                ease: "none",
                scrollTrigger: {
                    trigger: img.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        });

        // Stats Counter
        gsap.utils.toArray(".stat-number").forEach(el => {
            const target = parseInt(el.getAttribute('data-target'));
            ScrollTrigger.create({
                trigger: el,
                start: "top 85%",
                onEnter: () => {
                    gsap.fromTo(el, { innerText: 0 }, {
                        innerText: target,
                        duration: 2,
                        ease: "power2.out",
                        snap: { innerText: 1 }
                    });
                },
                once: true
            });
        });

        // About Reveal
        gsap.from(".about-heading .word", {
            scrollTrigger: { trigger: ".about-section", start: "top 75%" },
            y: 100, opacity: 0, stagger: 0.1, duration: 1, ease: "power4.out"
        });
        gsap.from(".about-images img", {
            scrollTrigger: { trigger: ".about-section", start: "top 70%" },
            scale: 0.9, opacity: 0, stagger: 0.2, duration: 1.2, ease: "power3.out"
        });

        // Horizontal Scroll - Film Reel
        const reelSection = document.querySelector(".filmreel-section");
        const reelTrack = document.querySelector(".filmreel-track");
        const scrollProgress = document.getElementById("scroll-progress");

        if (window.innerWidth >= 768) {
            let reelScroll = gsap.to(reelTrack, {
                x: () => -(reelTrack.scrollWidth - window.innerWidth) + "px",
                ease: "none",
                scrollTrigger: {
                    trigger: reelSection,
                    start: "top top",
                    end: () => "+=" + reelTrack.scrollWidth,
                    scrub: true, // Switched from 1 to true to remove stutter conflicts with Lenis
                    pin: true,
                    onUpdate: (self) => {
                        // Update progress bar
                        gsap.set(scrollProgress, { scaleX: self.progress });
                    }
                }
            });

            // Clean up progress bar when leaving section
            ScrollTrigger.create({
                trigger: reelSection,
                start: "top top",
                end: () => "+=" + reelTrack.scrollWidth,
                onLeave: () => gsap.to(scrollProgress, { autoAlpha: 0, duration: 0.3 }),
                onEnterBack: () => gsap.to(scrollProgress, { autoAlpha: 1, duration: 0.3 }),
                onEnter: () => gsap.to(scrollProgress, { autoAlpha: 1, duration: 0.3 }),
                onLeaveBack: () => gsap.to(scrollProgress, { autoAlpha: 0, duration: 0.3 })
            });
        }

        // Services Reveal
        gsap.from(".service-row", {
            scrollTrigger: { trigger: ".services-section", start: "top 70%" },
            x: -60, opacity: 0, stagger: 0.15, duration: 0.9, ease: "power3.out"
        });

        // Infinite Marquee
        gsap.to(".marquee-left", {
            xPercent: -50,
            ease: "none",
            duration: 25,
            repeat: -1
        });
        gsap.to(".marquee-right", {
            xPercent: 50,
            ease: "none",
            duration: 25,
            repeat: -1,
            modifiers: {
                xPercent: gsap.utils.wrap(-50, 0)
            }
        });
        // initial setup for right marquee
        gsap.set(".marquee-right", { xPercent: -50 });

        // Section Clip Reveal (General)
        gsap.utils.toArray(".section-reveal").forEach(sec => {
            gsap.from(sec, {
                scrollTrigger: { trigger: sec, start: "top 85%" },
                opacity: 0,
                y: 50,
                duration: 1.2, 
                ease: "power3.out"
            });
        });

        // 3D Card Tilt Effect on Hover
        const cards = document.querySelectorAll('.project-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;
                
                gsap.to(card, {
                    rotationX: rotateX,
                    rotationY: rotateY,
                    transformPerspective: 1000,
                    ease: "power1.out",
                    duration: 0.4
                });
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    rotationX: 0,
                    rotationY: 0,
                    ease: "power3.out",
                    duration: 0.6
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
      
<div className="hidden md:block" id="spotlight"></div>

<div className="fixed top-0 left-0 w-full h-1 bg-[#00FF57] z-[60]" id="scroll-progress"></div>

<nav className="fixed top-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-12 flex justify-between items-center text-[#0A0A0A]" id="navbar">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#00FF57]"></span>
<span className="font-display text-3xl tracking-widest leading-none mt-1">SUBRAT RAO</span>
</div>
<div className="hidden md:flex gap-8 font-medium text-lg">
<a className="hover:text-[#00FF57] transition-colors" href="#work">Work</a>
<a className="hover:text-[#00FF57] transition-colors" href="#about">About</a>
<a className="hover:text-[#00FF57] transition-colors" href="#contact">Contact</a>
</div>
<button className="bg-[#00FF57] text-[#0A0A0A] px-6 py-3 rounded-full font-medium text-lg flex items-center gap-2 hover:bg-[#00CC45] transition-colors border border-transparent">
            Let's Roll <iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</nav>

<section className="min-h-screen bg-[#F5F5F5] text-[#0A0A0A] pt-32 pb-20 px-6 md:px-12 flex items-center overflow-hidden relative relative-z-10">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
<div className="flex flex-col items-start z-10">
<div className="hero-eyebrow bg-[#00FF57]/20 text-[#00CC45] px-4 py-2 rounded-full text-base font-medium flex items-center gap-2 mb-8 border border-[#00FF57]/30">
<span>🎬</span> Designer · Actor · Gamer · All-Rounder
                </div>
<h1 className="hero-h1 font-display text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.85] mb-8 uppercase flex flex-col">
<span className="line overflow-hidden"><span className="block">The Show Doesn't</span></span>
<span className="line overflow-hidden"><span className="block">Start Until I</span></span>
<span className="line overflow-hidden text-[#00FF57] drop-shadow-sm scramble-text"><span className="block">Enter the Frame.</span></span>
</h1>
<p className="hero-body text-xl md:text-2xl text-[#555555] max-w-xl mb-10 leading-relaxed font-medium">
                    From web development to UX design — and occasionally, dramatic entrances on screen — I deliver creative strategies that elevate your brand. Lights on. Let's create something unforgettable.
                </p>
<div className="hero-ctas flex flex-wrap items-center gap-6">
<button className="bg-[#00FF57] text-[#0A0A0A] px-8 py-4 rounded-full font-medium text-lg flex items-center gap-2 hover:scale-105 transition-transform">
                        Start Your Project <iconify-icon height="24" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="px-8 py-4 rounded-full font-medium text-lg border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#F5F5F5] transition-colors">
                        Let's Collaborate
                    </button>
</div>
</div>
<div className="relative hero-image flex justify-end">
<div className="relative w-full max-w-md aspect-[4/5] rounded-[32px] rounded-tr-none overflow-hidden border border-[#E0E0E0] shadow-2xl bg-[#E0E0E0]">
<img alt="Subrat Rao" className="w-full h-full object-cover parallax-img grayscale hover:grayscale-0 transition-all duration-700" src="https://placehold.co/800x1000/E0E0E0/A0A0A0?text=Hero+Image"/>
<div className="absolute inset-0 ring-1 ring-inset ring-[#00FF57]/30 rounded-[32px] rounded-tr-none pointer-events-none"></div>
</div>

<div className="hero-3d-float absolute -bottom-10 -right-10 w-48 h-48 bg-[#111111] rounded-2xl border border-[#1F1F1F] flex items-center justify-center shadow-[0_0_40px_rgba(0,255,87,0.2)] animate-float rotate-12 backdrop-blur-sm">
<iconify-icon className="text-[#00FF57]" height="80" icon="solar:gamepad-linear" strokeWidth="1.5" width="80"></iconify-icon>
</div>
<div className="absolute top-10 -left-16 bg-[#111111] text-white p-4 rounded-2xl shadow-xl border border-[#1F1F1F] hero-ctas animate-float" style={{animationDelay: '1s'}}>
<div className="flex gap-1 text-[#00FF57] mb-1">
<iconify-icon height="20" icon="solar:star-linear" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-linear" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-linear" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-linear" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<p className="font-medium text-base">6+ Projects Delivered</p>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] border-y border-[#1F1F1F] py-12 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#1F1F1F]">
<div className="flex flex-col items-center justify-center text-center px-4">
<span className="font-display text-5xl md:text-7xl text-[#00FF57] tracking-tight mb-2"><span className="stat-number" data-target="2000">0</span>+</span>
<span className="text-[#888888] text-base font-medium">Clients Entertained</span>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<span className="font-display text-5xl md:text-7xl text-[#00FF57] tracking-tight mb-2"><span className="stat-number" data-target="10">0</span>+</span>
<span className="text-[#888888] text-base font-medium">Years Exp (In Game)</span>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<span className="font-display text-5xl md:text-7xl text-[#00FF57] tracking-tight mb-2"><span className="stat-number" data-target="800">0</span>+</span>
<span className="text-[#888888] text-base font-medium">Hours Designing</span>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<span className="font-display text-5xl md:text-7xl text-[#00FF57] tracking-tight mb-2"><span className="stat-number" data-target="150">0</span>M+</span>
<span className="text-[#888888] text-base font-medium">Pixels Pushed</span>
</div>
</div>
</section>

<section className="about-section bg-[#0A0A0A] text-white py-32 px-6 md:px-12 relative overflow-hidden" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-6 flex flex-col items-start z-10">
<div className="bg-[#111111] text-[#00FF57] px-5 py-2 rounded-full text-base font-medium border border-[#1F1F1F] mb-8">
                    Turning Ideas Into Masterpieces
                </div>
<h2 className="about-heading font-display text-6xl md:text-7xl tracking-tight leading-[0.9] mb-8 uppercase flex flex-wrap gap-x-4">
<span className="word">The</span> <span className="word">Origin</span> <span className="word text-[#00FF57]">Story</span>
</h2>
<p className="text-xl text-[#888888] leading-relaxed font-medium mb-10 max-w-lg">
                    Picture this: a kid who grew up debugging his own computer, arguing about cricket strategies, replaying the same RPG 7 times just to find every easter egg — and somehow ended up designing digital experiences for real brands. I'm Subrat Rao. UX/UI designer, aspiring Bollywood actor, gaming addict, and the kind of guy who reads patch notes for fun. My superpower? Making complex things feel simple. And making simple things look extraordinary.
                </p>
<div className="text-sm font-display tracking-[0.2em] text-[#555555]">
                    [ A CREATIVE DESIGN STUDENT ]
                </div>
</div>
<div className="lg:col-span-6 relative h-[600px] about-images w-full">

<img alt="Working" className="absolute top-0 right-0 w-[70%] h-[80%] object-cover rounded-2xl grayscale border border-[#1F1F1F] z-10 parallax-img" src="https://placehold.co/600x800/111111/444444?text=Portrait"/>

<img alt="Gaming" className="absolute bottom-0 left-0 w-[60%] h-[50%] object-cover rounded-2xl grayscale border border-[#1F1F1F] z-20 shadow-2xl parallax-img" src="https://placehold.co/800x600/111111/444444?text=Landscape"/>

<div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-32 h-32 bg-[#00FF57]/10 backdrop-blur-md rounded-xl border border-[#00FF57]/30 flex items-center justify-center z-30 animate-float shadow-[0_0_30px_rgba(0,255,87,0.15)]">
<iconify-icon className="text-[#00FF57]" height="64" icon="solar:laptop-linear" strokeWidth="1.5" width="64"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] pt-32 pb-10 px-6 md:px-12 text-center relative border-t border-[#1F1F1F]" id="work">
<h2 className="font-display text-7xl md:text-9xl uppercase tracking-tight text-white mb-4">The Filmography</h2>
<p className="text-[#888888] text-xl font-medium flex items-center justify-center gap-2">
            Scroll to roll the reel <iconify-icon className="animate-bounce" height="20" icon="solar:arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</p>
</section>

<section className="filmreel-section h-screen bg-[#0A0A0A] overflow-hidden relative flex flex-col justify-between">

<div className="h-8 w-full film-perforations border-y border-[#1F1F1F]"></div>

<div className="filmreel-track flex h-full items-center px-[5vw] gap-12 w-max py-10">

<div className="project-card w-[85vw] md:w-[480px] h-[75vh] shrink-0 bg-[#111111] rounded-2xl border border-[#1F1F1F] overflow-hidden relative group flex flex-col">
<div className="absolute top-4 right-4 z-20 bg-[#00FF57] text-[#0A0A0A] px-3 py-1 rounded-full text-sm font-medium">UX DESIGN · TRAVEL</div>
<div className="h-[55%] relative overflow-hidden bg-black">
<img alt="Project 1" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://placehold.co/800x600/111111/444444?text=Project+1"/>
</div>
<div className="p-8 flex-grow flex flex-col justify-end relative">
<div className="absolute bottom-4 right-4 font-display text-9xl text-white/5 pointer-events-none leading-none">01</div>
<h3 className="font-display text-5xl uppercase tracking-tight mb-2">Uttarakhand Platform</h3>
<p className="text-[#888888] text-base font-medium mb-4">Connecting tourists to local guides across the mountains. No GPS needed — just good UX.</p>
<div className="flex gap-2 mb-6">
<span className="text-xs border border-[#333] px-2 py-1 rounded text-[#AAA]">Figma</span>
<span className="text-xs border border-[#333] px-2 py-1 rounded text-[#AAA]">Research</span>
</div>
<a className="text-[#00FF57] text-lg font-medium flex items-center gap-2 group-hover:gap-3 transition-all" href="#">View Case Study <iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon></a>
</div>
</div>

<div className="project-card w-[85vw] md:w-[480px] h-[75vh] shrink-0 bg-[#F5F5F5] text-[#0A0A0A] rounded-2xl border border-[#E0E0E0] overflow-hidden relative group flex flex-col">
<div className="absolute top-4 right-4 z-20 bg-[#0A0A0A] text-[#00FF57] px-3 py-1 rounded-full text-sm font-medium">UX RESEARCH</div>
<div className="h-[55%] relative overflow-hidden bg-[#E0E0E0]">
<img alt="Project 2" className="w-full h-full object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" src="https://placehold.co/800x600/E0E0E0/A0A0A0?text=Project+2"/>
</div>
<div className="p-8 flex-grow flex flex-col justify-end relative">
<div className="absolute bottom-4 right-4 font-display text-9xl text-black/5 pointer-events-none leading-none">02</div>
<h3 className="font-display text-5xl uppercase tracking-tight mb-2">Hospital Redesign</h3>
<p className="text-[#555555] text-base font-medium mb-4">Because standing in hospital queues is a horror film nobody asked for. We fixed it.</p>
<div className="flex gap-2 mb-6">
<span className="text-xs border border-[#CCC] px-2 py-1 rounded text-[#555]">Figma</span>
<span className="text-xs border border-[#CCC] px-2 py-1 rounded text-[#555]">Journey Mapping</span>
</div>
<a className="text-[#0A0A0A] text-lg font-medium flex items-center gap-2 group-hover:gap-3 transition-all" href="#">View Case Study <iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon></a>
</div>
</div>

<div className="project-card w-[85vw] md:w-[480px] h-[75vh] shrink-0 bg-[#111111] rounded-2xl border border-[#1F1F1F] overflow-hidden relative group flex flex-col">
<div className="absolute top-4 right-4 z-20 bg-[#00FF57] text-[#0A0A0A] px-3 py-1 rounded-full text-sm font-medium">GAME UX</div>
<div className="h-[55%] relative overflow-hidden bg-black">
<img alt="Project 3" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://placehold.co/800x600/111111/444444?text=Project+3"/>
</div>
<div className="p-8 flex-grow flex flex-col justify-end relative">
<div className="absolute bottom-4 right-4 font-display text-9xl text-white/5 pointer-events-none leading-none">03</div>
<h3 className="font-display text-5xl uppercase tracking-tight mb-2">Mind Maze Game</h3>
<p className="text-[#888888] text-base font-medium mb-4">Memory. Bluffing. Strategy. Built for people who think three moves ahead.</p>
<div className="flex gap-2 mb-6">
<span className="text-xs border border-[#333] px-2 py-1 rounded text-[#AAA]">Visual Design</span>
<span className="text-xs border border-[#333] px-2 py-1 rounded text-[#AAA]">Interaction</span>
</div>
<a className="text-[#00FF57] text-lg font-medium flex items-center gap-2 group-hover:gap-3 transition-all" href="#">View Case Study <iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon></a>
</div>
</div>

<div className="project-card w-[85vw] md:w-[480px] h-[75vh] shrink-0 bg-[#F5F5F5] text-[#0A0A0A] rounded-2xl border border-[#E0E0E0] overflow-hidden relative group flex flex-col">
<div className="absolute top-4 right-4 z-20 bg-[#0A0A0A] text-[#00FF57] px-3 py-1 rounded-full text-sm font-medium">BRANDING</div>
<div className="h-[55%] relative overflow-hidden bg-[#E0E0E0]">
<img alt="Project 4" className="w-full h-full object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" src="https://placehold.co/800x600/E0E0E0/A0A0A0?text=Project+4"/>
</div>
<div className="p-8 flex-grow flex flex-col justify-end relative">
<div className="absolute bottom-4 right-4 font-display text-9xl text-black/5 pointer-events-none leading-none">04</div>
<h3 className="font-display text-5xl uppercase tracking-tight mb-2">Expressway Cabs</h3>
<p className="text-[#555555] text-base font-medium mb-4">Gave a cab service a brand identity it can actually be proud of. Zero turbulence.</p>
<div className="flex gap-2 mb-6">
<span className="text-xs border border-[#CCC] px-2 py-1 rounded text-[#555]">Illustrator</span>
<span className="text-xs border border-[#CCC] px-2 py-1 rounded text-[#555]">Identity</span>
</div>
<a className="text-[#0A0A0A] text-lg font-medium flex items-center gap-2 group-hover:gap-3 transition-all" href="#">View Case Study <iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon></a>
</div>
</div>
</div>

<div className="h-8 w-full film-perforations border-y border-[#1F1F1F]"></div>
</section>

<section className="services-section bg-[#F5F5F5] text-[#0A0A0A] py-32 px-6 md:px-12">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
<div className="flex flex-col">
<div className="bg-[#111111] text-white px-5 py-2 rounded-full text-base font-medium w-max mb-12">
                    Our Services
                </div>
<div className="flex flex-col border-t border-[#E0E0E0]">

<div className="service-row group flex items-center justify-between py-8 border-b border-[#E0E0E0] cursor-pointer transition-colors duration-300 hover:bg-[#00FF57] px-6 -mx-6 rounded-xl">
<div className="flex items-center gap-8">
<span className="font-display text-2xl text-[#888888] group-hover:text-[#0A0A0A]">Q 01</span>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight">UI/UX Design</h3>
</div>
<iconify-icon className="text-[#555555] group-hover:text-[#0A0A0A] group-hover:-rotate-45 transition-transform" height="32" icon="solar:arrow-right-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>

<div className="service-row group flex items-center justify-between py-8 border-b border-[#E0E0E0] cursor-pointer transition-colors duration-300 hover:bg-[#00FF57] px-6 -mx-6 rounded-xl">
<div className="flex items-center gap-8">
<span className="font-display text-2xl text-[#888888] group-hover:text-[#0A0A0A]">Q 02</span>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight">Brand Identity</h3>
</div>
<iconify-icon className="text-[#555555] group-hover:text-[#0A0A0A] group-hover:-rotate-45 transition-transform" height="32" icon="solar:arrow-right-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>

<div className="service-row group flex items-center justify-between py-8 border-b border-[#E0E0E0] cursor-pointer transition-colors duration-300 hover:bg-[#00FF57] px-6 -mx-6 rounded-xl">
<div className="flex items-center gap-8">
<span className="font-display text-2xl text-[#888888] group-hover:text-[#0A0A0A]">Q 03</span>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight">Motion &amp; Video</h3>
</div>
<iconify-icon className="text-[#555555] group-hover:text-[#0A0A0A] group-hover:-rotate-45 transition-transform" height="32" icon="solar:arrow-right-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>

<div className="service-row group flex items-center justify-between py-8 border-b border-[#E0E0E0] cursor-pointer transition-colors duration-300 hover:bg-[#00FF57] px-6 -mx-6 rounded-xl">
<div className="flex items-center gap-8">
<span className="font-display text-2xl text-[#888888] group-hover:text-[#0A0A0A]">Q 04</span>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight">Creative Direction</h3>
</div>
<iconify-icon className="text-[#555555] group-hover:text-[#0A0A0A] group-hover:-rotate-45 transition-transform" height="32" icon="solar:arrow-right-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
</div>
</div>
<div className="relative h-[600px] flex justify-end items-center">
<img alt="Professional" className="w-[80%] h-full object-cover rounded-[32px] grayscale" src="https://placehold.co/800x1200/E0E0E0/A0A0A0?text=Services"/>

<div className="absolute top-20 -left-10 bg-[#111111] text-white p-6 rounded-2xl max-w-[240px] shadow-2xl animate-float">
<p className="text-lg font-medium mb-4">Ever wondered how design magic happens?</p>
<a className="bg-[#00FF57] text-[#0A0A0A] px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2 hover:bg-[#00CC45]" href="#">See how we work <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="2" width="16"></iconify-icon></a>
</div>

<div className="absolute bottom-20 -left-4 bg-[#111111] text-[#00FF57] p-6 rounded-2xl max-w-[280px] shadow-2xl animate-float border border-[#00FF57]/30" style={{animationDelay: '2s'}}>
<p className="text-base font-medium text-white mb-2">Looking for a design obsessive?</p>
<p className="text-2xl font-display tracking-tight">MEET YOUR EXPERT.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] py-16 overflow-hidden flex flex-col gap-4 border-y border-[#1F1F1F]">

<div className="flex whitespace-nowrap opacity-90 marquee-left">
<div className="flex gap-8 items-center font-display text-7xl md:text-8xl tracking-tight uppercase text-white shrink-0 px-4">
                ACTION <span className="text-[#00FF57]">·</span> UX DESIGN <span className="text-[#00FF57]">·</span> CODE <span className="text-[#00FF57]">·</span> GAMING <span className="text-[#00FF57]">·</span> LIGHTS <span className="text-[#00FF57]">·</span> BRAND IDENTITY <span className="text-[#00FF57]">·</span> CAMERA <span className="text-[#00FF57]">·</span> FIGMA <span className="text-[#00FF57]">·</span> CINEMA <span className="text-[#00FF57]">·</span>
</div>
<div className="flex gap-8 items-center font-display text-7xl md:text-8xl tracking-tight uppercase text-white shrink-0 px-4">
                ACTION <span className="text-[#00FF57]">·</span> UX DESIGN <span className="text-[#00FF57]">·</span> CODE <span className="text-[#00FF57]">·</span> GAMING <span className="text-[#00FF57]">·</span> LIGHTS <span className="text-[#00FF57]">·</span> BRAND IDENTITY <span className="text-[#00FF57]">·</span> CAMERA <span className="text-[#00FF57]">·</span> FIGMA <span className="text-[#00FF57]">·</span> CINEMA <span className="text-[#00FF57]">·</span>
</div>
</div>

<div className="flex whitespace-nowrap opacity-50 marquee-right">
<div className="flex gap-8 items-center font-display text-7xl md:text-8xl tracking-tight uppercase text-white shrink-0 px-4">
                FIGMA <span className="text-[#00FF57]">·</span> CINEMA <span className="text-[#00FF57]">·</span> ACTION <span className="text-[#00FF57]">·</span> UX DESIGN <span className="text-[#00FF57]">·</span> CODE <span className="text-[#00FF57]">·</span> GAMING <span className="text-[#00FF57]">·</span> LIGHTS <span className="text-[#00FF57]">·</span> BRAND IDENTITY <span className="text-[#00FF57]">·</span> CAMERA <span className="text-[#00FF57]">·</span>
</div>
<div className="flex gap-8 items-center font-display text-7xl md:text-8xl tracking-tight uppercase text-white shrink-0 px-4">
                FIGMA <span className="text-[#00FF57]">·</span> CINEMA <span className="text-[#00FF57]">·</span> ACTION <span className="text-[#00FF57]">·</span> UX DESIGN <span className="text-[#00FF57]">·</span> CODE <span className="text-[#00FF57]">·</span> GAMING <span className="text-[#00FF57]">·</span> LIGHTS <span className="text-[#00FF57]">·</span> BRAND IDENTITY <span className="text-[#00FF57]">·</span> CAMERA <span className="text-[#00FF57]">·</span>
</div>
</div>
</section>

<section className="bg-[#F5F5F5] text-[#0A0A0A] py-32 px-6 md:px-12 relative overflow-hidden">
<div className="max-w-7xl mx-auto flex flex-col gap-16">
<div className="flex items-center gap-6 relative z-10">
<h2 className="font-display text-6xl md:text-7xl tracking-tight uppercase">My Weapons of Choice</h2>
<div className="w-16 h-16 bg-[#111111] rounded-xl flex items-center justify-center animate-float hidden md:flex shadow-[0_0_20px_rgba(0,255,87,0.3)]">
<iconify-icon className="text-[#00FF57]" height="32" icon="solar:monitor-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

<div>
<h3 className="font-medium text-2xl mb-8 text-[#555555] tracking-tight">Software Arsenal</h3>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
<div className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-[#E0E0E0] shadow-sm hover:border-[#00FF57] transition-colors">
<iconify-icon height="32" icon="solar:pen-new-round-linear" strokeWidth="1.5" width="32"></iconify-icon> <span className="text-base font-medium">Figma</span>
</div>
<div className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-[#E0E0E0] shadow-sm hover:border-[#00FF57] transition-colors">
<iconify-icon height="32" icon="solar:gallery-edit-linear" strokeWidth="1.5" width="32"></iconify-icon> <span className="text-base font-medium">Illustrator</span>
</div>
<div className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-[#E0E0E0] shadow-sm hover:border-[#00FF57] transition-colors">
<iconify-icon height="32" icon="solar:gallery-wide-linear" strokeWidth="1.5" width="32"></iconify-icon> <span className="text-base font-medium">Photoshop</span>
</div>
<div className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-[#E0E0E0] shadow-sm hover:border-[#00FF57] transition-colors">
<iconify-icon height="32" icon="solar:video-frame-linear" strokeWidth="1.5" width="32"></iconify-icon> <span className="text-base font-medium">Premiere</span>
</div>
<div className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-[#E0E0E0] shadow-sm hover:border-[#00FF57] transition-colors">
<iconify-icon height="32" icon="solar:layers-linear" strokeWidth="1.5" width="32"></iconify-icon> <span className="text-base font-medium">Webflow</span>
</div>
<div className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-[#E0E0E0] shadow-sm hover:border-[#00FF57] transition-colors">
<iconify-icon height="32" icon="solar:code-linear" strokeWidth="1.5" width="32"></iconify-icon> <span className="text-base font-medium">VS Code</span>
</div>
<div className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-[#E0E0E0] shadow-sm hover:border-[#00FF57] transition-colors">
<iconify-icon height="32" icon="solar:scissors-linear" strokeWidth="1.5" width="32"></iconify-icon> <span className="text-base font-medium">CapCut</span>
</div>
<div className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-[#E0E0E0] shadow-sm hover:border-[#00FF57] transition-colors">
<iconify-icon height="32" icon="solar:document-text-linear" strokeWidth="1.5" width="32"></iconify-icon> <span className="text-base font-medium">Notion</span>
</div>
</div>
</div>

<div>
<h3 className="font-medium text-2xl mb-8 text-[#555555] tracking-tight">Skill Tree Unlocks</h3>
<div className="flex flex-wrap gap-3">
<span className="bg-[#111111] text-white px-5 py-3 rounded-full text-lg font-medium hover:text-[#00FF57] transition-colors cursor-default">UX Research</span>
<span className="bg-[#111111] text-white px-5 py-3 rounded-full text-lg font-medium hover:text-[#00FF57] transition-colors cursor-default">Wireframing</span>
<span className="bg-[#111111] text-white px-5 py-3 rounded-full text-lg font-medium hover:text-[#00FF57] transition-colors cursor-default">Prototyping</span>
<span className="bg-[#111111] text-white px-5 py-3 rounded-full text-lg font-medium hover:text-[#00FF57] transition-colors cursor-default">Interaction Design</span>
<span className="bg-[#111111] text-white px-5 py-3 rounded-full text-lg font-medium hover:text-[#00FF57] transition-colors cursor-default">Journey Mapping</span>
<span className="bg-[#111111] text-white px-5 py-3 rounded-full text-lg font-medium hover:text-[#00FF57] transition-colors cursor-default">Visual Design</span>
<span className="bg-[#111111] text-white px-5 py-3 rounded-full text-lg font-medium hover:text-[#00FF57] transition-colors cursor-default">Brand Identity</span>
<span className="bg-[#111111] text-white px-5 py-3 rounded-full text-lg font-medium hover:text-[#00FF57] transition-colors cursor-default">Motion Graphics</span>
<span className="bg-[#111111] text-white px-5 py-3 rounded-full text-lg font-medium hover:text-[#00FF57] transition-colors cursor-default">Game UX</span>
<span className="bg-[#111111] text-white px-5 py-3 rounded-full text-lg font-medium hover:text-[#00FF57] transition-colors cursor-default">Video Editing</span>
<span className="bg-[#111111] text-white px-5 py-3 rounded-full text-lg font-medium hover:text-[#00FF57] transition-colors cursor-default">Creative Direction</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] text-white py-32 px-6 md:px-12 section-reveal">
<div className="max-w-4xl mx-auto">
<h2 className="font-display text-6xl md:text-8xl tracking-tight uppercase mb-16 text-center">Credits &amp; Filmography</h2>
<div className="relative border-l border-[#333] ml-4 md:ml-8 flex flex-col gap-12">

<div className="relative pl-10">
<div className="absolute w-4 h-4 bg-[#00FF57] rounded-full -left-[8.5px] top-1.5 shadow-[0_0_10px_#00FF57]"></div>
<div className="text-[#00FF57] font-display text-2xl tracking-widest mb-2">2023 – PRESENT</div>
<h3 className="text-3xl font-medium tracking-tight mb-3">B.Des UX/UI — DIT University</h3>
<p className="text-xl text-[#888888] italic">"Where I learned to make things pretty and functional. Mostly pretty."</p>
</div>

<div className="relative pl-10">
<div className="absolute w-4 h-4 bg-[#333] rounded-full -left-[8.5px] top-1.5"></div>
<div className="text-[#888888] font-display text-2xl tracking-widest mb-2">2022 – PRESENT</div>
<h3 className="text-3xl font-medium tracking-tight mb-3">Creative Director — Freelance</h3>
<p className="text-xl text-[#888888] italic">"Branding, UX, video, social media for 6+ clients. Occasionally did 3 things at once. Survived."</p>
</div>

<div className="relative pl-10">
<div className="absolute w-4 h-4 bg-[#333] rounded-full -left-[8.5px] top-1.5"></div>
<div className="text-[#888888] font-display text-2xl tracking-widest mb-2">2024</div>
<h3 className="text-3xl font-medium tracking-tight mb-3">Google UX Design Certificate</h3>
<p className="text-xl text-[#888888] italic">"Official proof that I know what I'm talking about."</p>
</div>

<div className="relative pl-10">
<div className="absolute w-4 h-4 bg-[#333] rounded-full -left-[8.5px] top-1.5"></div>
<div className="text-[#888888] font-display text-2xl tracking-widest mb-2">2024</div>
<h3 className="text-3xl font-medium tracking-tight mb-3">Design Lead — Uni Fest</h3>
<p className="text-xl text-[#888888] italic">"Ran the whole visual show. Nobody noticed the invisible design. That meant it worked."</p>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] text-white pt-32 pb-10 px-6 md:px-12 border-t border-[#1F1F1F]" id="contact">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
<div className="flex flex-col justify-center relative z-10">
<h2 className="font-display text-7xl md:text-8xl uppercase tracking-tight leading-[0.9] mb-8">
                    Ready For Your <br/><span className="text-[#00FF57]">Close-Up?</span>
</h2>
<p className="text-xl text-[#888888] font-medium mb-12 max-w-md">
                    Whether it's a design project, a brand collab, a film audition tip, or just someone to debate cricket with — my DMs are open. No spam. Probably.
                </p>
<form className="flex flex-col sm:flex-row gap-4 mb-12">
<input className="bg-[#111111] border border-[#333] text-white px-6 py-4 rounded-full w-full max-w-sm focus:outline-none focus:border-[#00FF57] transition-colors text-lg" placeholder="Enter your email" type="email"/>
<button className="bg-[#00FF57] text-[#0A0A0A] px-8 py-4 rounded-full font-medium text-lg whitespace-nowrap hover:bg-[#00CC45] transition-colors" type="button">
                        Get in Touch Today!
                    </button>
</form>
<div className="flex gap-6 items-center">
<a className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center hover:bg-[#00FF57] hover:text-[#0A0A0A] hover:border-[#00FF57] transition-all" href="#"><iconify-icon height="20" icon="solar:link-linear" strokeWidth="1.5" width="20"></iconify-icon></a>
<a className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center hover:bg-[#00FF57] hover:text-[#0A0A0A] hover:border-[#00FF57] transition-all" href="#"><iconify-icon height="20" icon="solar:camera-linear" strokeWidth="1.5" width="20"></iconify-icon></a>
<a className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center hover:bg-[#00FF57] hover:text-[#0A0A0A] hover:border-[#00FF57] transition-all" href="#"><iconify-icon height="20" icon="solar:gallery-linear" strokeWidth="1.5" width="20"></iconify-icon></a>
<a className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center hover:bg-[#00FF57] hover:text-[#0A0A0A] hover:border-[#00FF57] transition-all" href="#"><iconify-icon height="20" icon="solar:code-square-linear" strokeWidth="1.5" width="20"></iconify-icon></a>
</div>
</div>
<div className="relative flex justify-end">
<div className="w-[80%] aspect-square rounded-[40px] overflow-hidden border border-[#1F1F1F] bg-[#111111]">
<img alt="Subrat Confident" className="w-full h-full object-cover grayscale parallax-img" src="https://placehold.co/800x800/111111/444444?text=Profile"/>
</div>

<div className="absolute -left-10 bottom-20 w-32 h-32 bg-[#111111] rounded-xl border border-[#333] flex items-center justify-center shadow-[0_0_30px_rgba(0,255,87,0.15)] animate-float -rotate-12">
<iconify-icon className="text-[#00FF57]" height="64" icon="solar:video-frame-linear" strokeWidth="1.5" width="64"></iconify-icon>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-[#1F1F1F] pt-8 flex flex-col md:flex-row justify-between items-center text-[#555555] font-medium text-base gap-4">
<p>© 2026 Subrat Rao</p>
<p>Designed with sarcasm and a lot of chai.</p>
</div>
</section>



    </>
  );
}
