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



        // Initialize Lenis for smooth scrolling
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        })

        lenis.on('scroll', ScrollTrigger.update)

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000)
        })

        gsap.ticker.lagSmoothing(0)

        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Navbar Color Change on Scroll
        const navbar = document.getElementById('navbar');
        const logo = document.getElementById('nav-logo');
        
        ScrollTrigger.create({
            start: "top -100",
            onUpdate: (self) => {
                if(self.direction === 1) {
                    // Scrolling down - hide or change bg
                    navbar.classList.remove('glass-nav-dark');
                    navbar.classList.add('glass-nav', 'text-[#002373]');
                    logo.classList.remove('text-white');
                    logo.classList.add('text-[#002373]');
                } else {
                    // Scrolling up
                    navbar.classList.remove('glass-nav', 'text-[#002373]');
                    navbar.classList.add('glass-nav-dark');
                    logo.classList.remove('text-[#002373]');
                    logo.classList.add('text-white');
                }
            }
        });

        // Hero Animations
        const heroTl = gsap.timeline();
        heroTl.to("#hero-badge", { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 })
              .from("#hero-title", { y: 50, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.4")
              .from("#hero-desc", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");

        // Reveal Animations for generic text elements
        const revealElements = document.querySelectorAll('.gs-reveal');
        revealElements.forEach((el) => {
            gsap.fromTo(el, 
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Parallax Floating Images
        const parallaxImages = document.querySelectorAll('.parallax-img');
        parallaxImages.forEach(img => {
            const speed = img.getAttribute('data-speed');
            gsap.to(img, {
                yPercent: -30 * speed,
                rotation: () => Math.random() * 10 - 5, // slight rotation change
                ease: "none",
                scrollTrigger: {
                    trigger: img.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        });

        // Services List Stagger
        gsap.from(".gs-list-item", {
            y: 30,
            opacity: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".gs-list-item",
                start: "top 80%",
            }
        });

        // Horizontal Scroll for Labs Section
        const horizontalSection = document.getElementById("labs-section");
        const horizontalContainer = document.getElementById("horizontal-container");
        const horizontalWrap = document.getElementById("horizontal-wrap");

        if (horizontalSection && horizontalWrap) {
            // Calculate how far to scroll based on content width vs window width
            // Add padding offset to allow the last card to settle nicely
            let getScrollAmount = () => -(horizontalWrap.scrollWidth - window.innerWidth + window.innerWidth * 0.1);

            const tween = gsap.to(horizontalWrap, {
                x: getScrollAmount,
                ease: "none",
                scrollTrigger: {
                    trigger: horizontalSection,
                    start: "top top",
                    end: () => `+=${horizontalWrap.scrollWidth - window.innerWidth}`,
                    pin: true,
                    animation: tween,
                    scrub: 1,
                    invalidateOnRefresh: true
                }
            });
        }

        // Infinite Marquee
        const marqueeContent = document.querySelector('.marquee-content');
        if (marqueeContent) {
            // Clone content once handled via HTML, just animate
            gsap.to(marqueeContent, {
                xPercent: -50,
                ease: "none",
                duration: 20,
                repeat: -1
            });
        }

        // Projects Grid Stagger
        gsap.from(".gs-project", {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".gs-project",
                start: "top 80%",
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
      

<header className="fixed top-0 left-0 w-full z-50 transition-colors duration-500 glass-nav-dark" id="navbar">
<div className="container mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
<a className="text-xl tracking-tighter lowercase text-white transition-colors duration-300 font-bold" href="/" id="nav-logo">
                ecolabor8
            </a>
<button className="group flex items-center gap-2 bg-white text-[#0F46C5] px-6 py-3 rounded-full hover:bg-[#C9FF00] hover:text-[#002373] transition-all duration-300 ease-out">
<span className="text-sm font-normal">Initiate Experiment</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="1.2rem"></iconify-icon>
</button>
</div>
</header>
<main className="">

<section className="relative w-full min-h-screen bg-[#0F46C5] flex flex-col justify-center overflow-hidden pt-24" id="hero">

<div className="blur-blob bg-[#C9FF00] w-[50vw] h-[50vw] -top-[20vw] -left-[10vw] opacity-40 mix-blend-screen"></div>
<div className="blur-blob bg-[#002373] w-[60vw] h-[60vw] top-[10vw] right-[5vw] opacity-80 mix-blend-multiply"></div>
<div className="blur-blob bg-[#F9FFF5] w-[40vw] h-[40vw] bottom-0 left-[20vw] opacity-10 mix-blend-overlay"></div>
<div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-12 transform translate-y-8 opacity-0" id="hero-badge">
<iconify-icon className="text-[#C9FF00]" icon="solar:star-fall-linear"></iconify-icon>
<span className="text-xs text-white uppercase tracking-widest font-normal">Welcome to the future</span>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl text-white tracking-tight max-w-5xl mb-8 font-bold" id="hero-title">
                    Your Innovation &amp; <br/>
<span className="text-[#C9FF00] relative inline-block font-bold">
                        Sustainability Lab
                        <svg className="absolute -bottom-2 left-0 w-full h-4 text-[#C9FF00]/40" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</span>
</h1>
<p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed font-bold" id="hero-desc">
                    A collaborative ecosystem for innovation and sustainability, connecting brands to people's journeys with clarity and purpose.
                </p>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
<span className="text-xs text-white uppercase tracking-widest font-normal">[ Scroll to explore ]</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
</div>
</section>

<section className="relative w-full py-32 md:py-48 bg-[#F9FFF5] overflow-hidden">
<div className="container mx-auto px-6 lg:px-12 relative z-10">
<h2 className="text-3xl md:text-5xl lg:text-6xl text-[#002373] tracking-tight text-center max-w-5xl mx-auto leading-tight gs-reveal font-bold">
                    Brands often separate innovation, sustainability, and execution, leading to fragmented experiences and wasted resources.
                </h2>
<div className="mt-20 text-center max-w-3xl mx-auto gs-reveal">
<p className="text-lg md:text-xl text-[#002373]/70 leading-relaxed font-bold">
                        ECOLABOR8 connects design, technology, and circular practices across teams, partners, and markets, so brands move with clarity, waste less, and stay relevant in people's journeys.
                    </p>
</div>
</div>

<img alt="Material" className="absolute top-[10%] left-[5%] w-48 md:w-64 aspect-[4/5] object-cover rounded-2xl shadow-2xl -rotate-6 opacity-80 parallax-img" data-speed="0.8" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="Abstract" className="absolute bottom-[10%] right-[5%] w-56 md:w-72 aspect-square object-cover rounded-2xl shadow-2xl rotate-3 opacity-90 parallax-img" data-speed="1.2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</section>

<section className="w-full py-24 md:py-32 bg-[#F9FFF5] border-t border-[#002373]/10 relative">
<div className="container mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">

<div className="lg:col-span-6 flex flex-col justify-center">
<div className="mb-16">
<span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#C9FF00] text-[#002373] mb-6">
<iconify-icon icon="solar:layers-linear" width="1.5rem"></iconify-icon>
</span>
<h2 className="text-4xl md:text-6xl text-[#002373] tracking-tight mb-4 font-bold">What we're really good at</h2>
</div>
<div className="flex flex-col border-t border-[#002373]/20">

<div className="group flex flex-col md:flex-row md:items-center py-8 border-b border-[#002373]/20 cursor-pointer gs-list-item">
<span className="text-xl md:text-2xl text-[#0F46C5] w-24 mb-2 md:mb-0 transition-colors group-hover:text-[#C9FF00] font-bold">01</span>
<h3 className="text-2xl md:text-4xl text-[#002373] tracking-tight group-hover:translate-x-2 transition-transform duration-300 font-bold">Concept and design</h3>
</div>

<div className="group flex flex-col md:flex-row md:items-center py-8 border-b border-[#002373]/20 cursor-pointer gs-list-item">
<span className="text-xl md:text-2xl text-[#002373]/40 w-24 mb-2 md:mb-0 transition-colors group-hover:text-[#C9FF00] font-bold">02</span>
<h3 className="text-2xl md:text-4xl text-[#002373]/50 tracking-tight group-hover:translate-x-2 transition-all duration-300 group-hover:text-[#002373] font-bold">Technology integration</h3>
</div>

<div className="group flex flex-col md:flex-row md:items-center py-8 border-b border-[#002373]/20 cursor-pointer gs-list-item">
<span className="text-xl md:text-2xl text-[#002373]/40 w-24 mb-2 md:mb-0 transition-colors group-hover:text-[#C9FF00] font-bold">03</span>
<h3 className="text-2xl md:text-4xl text-[#002373]/50 tracking-tight group-hover:translate-x-2 transition-all duration-300 group-hover:text-[#002373] font-bold">Production and deployment</h3>
</div>

<div className="group flex flex-col md:flex-row md:items-center py-8 border-b border-[#002373]/20 cursor-pointer gs-list-item">
<span className="text-xl md:text-2xl text-[#002373]/40 w-24 mb-2 md:mb-0 transition-colors group-hover:text-[#C9FF00] font-bold">04</span>
<h3 className="text-2xl md:text-4xl text-[#002373]/50 tracking-tight group-hover:translate-x-2 transition-all duration-300 group-hover:text-[#002373] font-bold">Sustainability implementation</h3>
</div>

<div className="group flex flex-col md:flex-row md:items-center py-8 border-b border-[#002373]/20 cursor-pointer gs-list-item">
<span className="text-xl md:text-2xl text-[#002373]/40 w-24 mb-2 md:mb-0 transition-colors group-hover:text-[#C9FF00] font-bold">05</span>
<h3 className="text-2xl md:text-4xl text-[#002373]/50 tracking-tight group-hover:translate-x-2 transition-all duration-300 group-hover:text-[#002373] font-bold">Continuous improvement</h3>
</div>
</div>
</div>

<div className="hidden lg:block lg:col-span-6 relative">
<div className="sticky top-32 w-full aspect-[4/5] rounded-2xl overflow-hidden">
<img alt="Process" className="w-full h-full object-cover" id="sticky-process-img" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-[#0F46C5]/10 mix-blend-multiply"></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full bg-[#0F46C5] text-white" id="labs-section">

<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9FF00]/50 to-transparent"></div>
<div className="container mx-auto px-6 lg:px-12 pt-32 pb-16">
<h2 className="text-4xl md:text-6xl tracking-tight max-w-3xl leading-tight font-bold">
                    We're the perfect partner if you need use our three labs
                </h2>
</div>

<div className="h-screen flex items-center overflow-hidden" id="horizontal-container">
<div className="flex gap-8 px-6 lg:px-12 pb-32 w-max" id="horizontal-wrap">

<div className="w-[85vw] md:w-[60vw] lg:w-[45vw] h-[60vh] shrink-0 bg-[#F9FFF5] rounded-2xl overflow-hidden flex flex-col group relative">
<div className="h-1/2 w-full relative overflow-hidden">
<img alt="Design Lab" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute top-6 right-6 bg-[#002373] text-white text-xs px-3 py-1 rounded-full font-normal">1/3</div>
</div>
<div className="h-1/2 w-full p-8 md:p-12 flex flex-col justify-between bg-white text-[#002373]">
<div>
<div className="flex items-center justify-between mb-6">
<h3 className="text-3xl tracking-tight font-bold">Design Lab</h3>
<span className="bg-[#C9FF00] text-[#002373] px-4 py-1 rounded-full text-xs font-medium uppercase tracking-wider">Concept</span>
</div>
<p className="text-base text-[#002373]/70 mb-8 max-w-lg">
                                    Engineered from concept to end-of-cycle, creating spaces and products that resonate with modern journeys.
                                </p>
</div>
<div className="flex flex-wrap gap-2">
<span className="border border-[#002373]/20 px-4 py-1.5 rounded-full text-sm">Creative Concept</span>
<span className="border border-[#002373]/20 px-4 py-1.5 rounded-full text-sm">Space Saving Design</span>
<span className="border border-[#002373]/20 px-4 py-1.5 rounded-full text-sm">Eco-Design Thinking</span>
</div>
</div>
</div>

<div className="w-[85vw] md:w-[60vw] lg:w-[45vw] h-[60vh] shrink-0 bg-[#F9FFF5] rounded-2xl overflow-hidden flex flex-col group relative">
<div className="h-1/2 w-full relative overflow-hidden">
<img alt="Newlyfe Lab" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute top-6 right-6 bg-[#002373] text-white text-xs px-3 py-1 rounded-full font-normal">2/3</div>
</div>
<div className="h-1/2 w-full p-8 md:p-12 flex flex-col justify-between bg-white text-[#002373]">
<div>
<div className="flex items-center justify-between mb-6">
<h3 className="text-3xl tracking-tight font-bold">Newlyfe Lab</h3>
<span className="bg-[#0F46C5] text-white px-4 py-1 rounded-full text-xs font-medium uppercase tracking-wider">Circular</span>
</div>
<p className="text-base text-[#002373]/70 mb-8 max-w-lg">
                                    Transforming waste into value through advanced recovery programs and sustainable supply chains.
                                </p>
</div>
<div className="flex flex-wrap gap-2">
<span className="border border-[#002373]/20 px-4 py-1.5 rounded-full text-sm">Recovery Programs</span>
<span className="border border-[#002373]/20 px-4 py-1.5 rounded-full text-sm">Waste-to-value</span>
<span className="border border-[#002373]/20 px-4 py-1.5 rounded-full text-sm">Carbon Impact</span>
</div>
</div>
</div>

<div className="w-[85vw] md:w-[60vw] lg:w-[45vw] h-[60vh] shrink-0 bg-[#F9FFF5] rounded-2xl overflow-hidden flex flex-col group relative">
<div className="h-1/2 w-full relative overflow-hidden">
<img alt="Phygital Lab" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute top-6 right-6 bg-[#002373] text-white text-xs px-3 py-1 rounded-full font-normal">3/3</div>
</div>
<div className="h-1/2 w-full p-8 md:p-12 flex flex-col justify-between bg-white text-[#002373]">
<div>
<div className="flex items-center justify-between mb-6">
<h3 className="text-3xl tracking-tight font-bold">Phygital Lab</h3>
<span className="bg-[#002373] text-white px-4 py-1 rounded-full text-xs font-medium uppercase tracking-wider">Tech</span>
</div>
<p className="text-base text-[#002373]/70 mb-8 max-w-lg">
                                    Bridging physical and digital worlds for immersive brand activations and smart retail experiences.
                                </p>
</div>
<div className="flex flex-wrap gap-2">
<span className="border border-[#002373]/20 px-4 py-1.5 rounded-full text-sm">AR Specialist</span>
<span className="border border-[#002373]/20 px-4 py-1.5 rounded-full text-sm">Smart Retail</span>
<span className="border border-[#002373]/20 px-4 py-1.5 rounded-full text-sm">Digital Integration</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-32 bg-[#F9FFF5] text-[#002373]">
<div className="container mx-auto px-6 lg:px-12 text-center mb-20">
<h2 className="text-5xl md:text-7xl tracking-tight mb-8 font-bold">Our Impact</h2>
<p className="text-lg md:text-xl text-[#002373]/70 max-w-3xl mx-auto font-bold">
                    Transforming ideas into tangible results. We partner with forward-thinking brands to build experiences that last.
                </p>
</div>

<div className="w-full border-y border-[#002373]/10 py-12 mb-32 relative bg-white/50">
<div className="absolute top-4 left-6 text-xs font-medium uppercase tracking-widest text-[#002373]/40">Brand Trust Us</div>
<div className="marquee-container w-full mt-4">
<div className="marquee-content gap-16 md:gap-32 pr-16 md:pr-32">

<span className="text-2xl tracking-tight text-[#002373]/40 font-bold">ACME CORP</span>
<span className="text-2xl tracking-tight text-[#002373]/40 font-bold">GLOBAL IND</span>
<span className="text-2xl tracking-tight text-[#002373]/40 font-bold">TECH LABS</span>
<span className="text-2xl tracking-tight text-[#002373]/40 font-bold">NEXUS</span>
<span className="text-2xl tracking-tight text-[#002373]/40 font-bold">HORIZON</span>
<span className="text-2xl tracking-tight text-[#002373]/40 font-bold">STELLAR</span>

<span className="text-2xl tracking-tight text-[#002373]/40 font-bold">ACME CORP</span>
<span className="text-2xl tracking-tight text-[#002373]/40 font-bold">GLOBAL IND</span>
<span className="text-2xl tracking-tight text-[#002373]/40 font-bold">TECH LABS</span>
<span className="text-2xl tracking-tight text-[#002373]/40 font-bold">NEXUS</span>
<span className="text-2xl tracking-tight text-[#002373]/40 font-bold">HORIZON</span>
<span className="text-2xl tracking-tight text-[#002373]/40 font-bold">STELLAR</span>
</div>
</div>
</div>

<div className="container mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">

<div className="group cursor-pointer gs-project">
<div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-gray-200">
<img alt="Project A" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h3 className="text-2xl tracking-tight mb-2 group-hover:text-[#0F46C5] transition-colors font-bold">Project A</h3>
<p className="text-sm font-light text-[#002373]/60 leading-relaxed max-w-md">
                            A complete redesign of retail presence focusing on modular, recyclable materials and energy-efficient lighting.
                        </p>
</div>

<div className="group cursor-pointer gs-project md:mt-24">
<div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-gray-200">
<img alt="Project B" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h3 className="text-2xl tracking-tight mb-2 group-hover:text-[#0F46C5] transition-colors font-bold">Project B</h3>
<p className="text-sm font-light text-[#002373]/60 leading-relaxed max-w-md">
                            Integrating AR experiences into physical packaging, reducing print waste while increasing engagement.
                        </p>
</div>

<div className="group cursor-pointer gs-project">
<div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-gray-200">
<img alt="Project C" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h3 className="text-2xl tracking-tight mb-2 group-hover:text-[#0F46C5] transition-colors font-bold">Project C</h3>
<p className="text-sm font-light text-[#002373]/60 leading-relaxed max-w-md">
                            Closed-loop POSM development system ensuring 100% material recovery post-campaign.
                        </p>
</div>

<div className="group cursor-pointer gs-project md:mt-24">
<div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-gray-200">
<img alt="Project D" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h3 className="text-2xl tracking-tight mb-2 group-hover:text-[#0F46C5] transition-colors font-bold">Project D</h3>
<p className="text-sm font-light text-[#002373]/60 leading-relaxed max-w-md">
                            Smart retail sensors tracking carbon impact in real-time, displaying metrics to conscious consumers.
                        </p>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#0F46C5] text-white pt-32 pb-16 relative overflow-hidden">
<div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#C9FF00] rounded-full filter blur-[150px] opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
<div className="container mx-auto px-6 lg:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">

<div className="flex flex-col justify-between">
<div>
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-8 font-bold">
                                Every work you see here started with curiosity
                            </h2>
<p className="text-lg font-light text-white/70 max-w-md leading-relaxed">
                                Have an idea, a challenge, or a direction you want to explore? You don't need all the answers yet. A focused conversation is often enough to uncover the right path. Reach out and let's see what we can build together.
                            </p>
</div>
<div className="hidden lg:block mt-24">
<p className="text-xs font-medium tracking-widest text-white/40 mb-4">FIND US</p>
<p className="text-lg font-normal max-w-xs leading-relaxed">
                                Pakuwon Tower Jakarta Unit 9D<br/>
                                Jl. Menteng Atas Sel. Gg. 2<br/>
                                South Jakarta 12870
                            </p>
</div>
</div>

<div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12">
<div className="mb-12">
<span className="text-2xl tracking-tighter lowercase font-bold">ecolabor8</span>
<h3 className="text-3xl md:text-4xl tracking-tight mt-6 font-bold">Let's Create Something That Lasts</h3>
</div>
<form className="flex flex-col gap-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="flex flex-col gap-2">
<label className="text-xs font-medium tracking-widest text-white/60">YOUR NAME</label>
<input className="w-full pb-2 text-base" placeholder="Full Name" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium tracking-widest text-white/60">YOUR EMAIL</label>
<input className="w-full pb-2 text-base" placeholder="Email Address" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="flex flex-col gap-2">
<label className="text-xs font-medium tracking-widest text-white/60">COMPANY NAME</label>
<input className="w-full pb-2 text-base" placeholder="Fill your company name" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium tracking-widest text-white/60">PHONE NUMBER</label>
<div className="flex items-end gap-2 border-b border-white/20 pb-2 focus-within:border-white transition-colors">
<span className="text-white/60 pb-0.5">+62</span>
<input className="w-full border-none pb-0 !border-b-0 bg-transparent text-base" placeholder="Phone number" type="tel"/>
</div>
</div>
</div>
<div className="flex flex-col gap-2 mt-4">
<label className="text-xs font-medium tracking-widest text-white/60">YOUR MESSAGE</label>
<textarea className="w-full pb-2 text-base resize-none" placeholder="Tell us about your project" rows="3"></textarea>
</div>
<div className="mt-8">
<button className="group flex items-center gap-4 bg-white text-[#0F46C5] px-8 py-4 rounded-full hover:bg-[#C9FF00] hover:text-[#002373] transition-colors duration-300" type="button">
<span className="text-lg font-medium">Send Message</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="1.5rem"></iconify-icon>
</button>
</div>
</form>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
<p className="text-sm font-light text-white/60 mb-4 md:mb-0">Copyright © 2026 ECOLABOR8. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-sm font-light text-white/60 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-sm font-light text-white/60 hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="text-sm font-light text-white/60 hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
