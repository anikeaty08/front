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



        // --- 1. Initialization ---
        gsap.registerPlugin(ScrollTrigger);

        // Smooth Scroll Setup
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        // Make lenis global for button access
        window.lenis = lenis;

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Sync ScrollTrigger with Lenis
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        // --- 2. Loading Animation ---
        const tlLoader = gsap.timeline();

        tlLoader.to('.loader-bar', {
            width: '100%',
            duration: 1.5,
            ease: "power2.inOut"
        })
        .to('.loader', {
            yPercent: -100,
            duration: 0.8,
            ease: "power4.inOut"
        })
        .from('.hero-img', {
            scale: 1.2,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out"
        }, "-=0.4")
        .to('.hero-line span', {
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.out"
        }, "-=1");

        // --- 3. Menu Logic (Updated with Link Scroll) ---
        const menuBtn = document.querySelector('.menu-btn');
        const menuOverlay = document.querySelector('.menu-overlay');
        const menuLinks = document.querySelectorAll('.menu-link');
        let isMenuOpen = false;

        const menuTl = gsap.timeline({ paused: true });

        menuTl.to(menuOverlay, {
            visibility: 'visible',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            duration: 0.8,
            ease: 'power4.inOut'
        })
        .to('.menu-link span', {
            y: 0, 
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
        }, "-=0.4");

        function toggleMenu() {
            if(!isMenuOpen) {
                // Open Menu
                menuTl.play();
                menuBtn.textContent = 'Close';
                lenis.stop(); // Stop scrolling
            } else {
                // Close Menu
                menuTl.reverse();
                menuBtn.textContent = 'Menu';
                lenis.start(); // Resume scrolling
            }
            isMenuOpen = !isMenuOpen;
        }

        menuBtn.addEventListener('click', toggleMenu);

        // Handle Anchor Links in Menu
        menuLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default jump
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                // Close menu
                if(isMenuOpen) toggleMenu();

                // Smooth Scroll to target
                if(targetSection) {
                    setTimeout(() => {
                        lenis.scrollTo(targetSection);
                    }, 500);
                }
            });
        });

        // Handle Footer Links
        document.querySelectorAll('.smooth-scroll-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if(targetSection) lenis.scrollTo(targetSection);
            });
        });

        // --- 4. Service Accordion Interaction ---
        const serviceItems = document.querySelectorAll('.service-item');

        serviceItems.forEach(item => {
            const details = item.querySelector('.service-details');
            const icon = item.querySelector('.service-icon');
            let isOpen = false;

            item.addEventListener('click', () => {
                // Close others (Optional: inclusive accordion)
                serviceItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('open')) {
                        const otherDetails = otherItem.querySelector('.service-details');
                        const otherIcon = otherItem.querySelector('.service-icon');
                        gsap.to(otherDetails, { height: 0, opacity: 0, duration: 0.4, ease: "power2.out" });
                        gsap.to(otherIcon, { rotation: 0, duration: 0.4 });
                        otherItem.classList.remove('open');
                    }
                });

                if (!isOpen) {
                    // Open
                    gsap.to(details, { 
                        height: 'auto', 
                        opacity: 1, 
                        duration: 0.5, 
                        ease: "power2.out" 
                    });
                    gsap.to(icon, { rotation: 45, duration: 0.4 });
                    item.classList.add('open');
                } else {
                    // Close
                    gsap.to(details, { 
                        height: 0, 
                        opacity: 0, 
                        duration: 0.4, 
                        ease: "power2.out" 
                    });
                    gsap.to(icon, { rotation: 0, duration: 0.4 });
                    item.classList.remove('open');
                }
                isOpen = !isOpen;
            });
        });

        // --- 5. Scroll Animations ---

        // Parallax Effect for Hero Image
        gsap.to('.hero-img', {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: '.hero',
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        // Marquee Animation
        let currentScroll = 0;
        let isScrollingDown = true;
        
        let tween = gsap.to(".marquee-track", {xPercent: -50, repeat: -1, duration: 10, ease: "linear"}).totalProgress(0.5);

        window.addEventListener("scroll", function(){
            if(window.pageYOffset > currentScroll){
                isScrollingDown = true;
            } else {
                isScrollingDown = false;
            }
            
            gsap.to(tween, {timeScale: isScrollingDown ? 1 : -1});
            
            currentScroll = window.pageYOffset;
        });

        // Reveal Text on Scroll (About Section)
        const revealTexts = document.querySelectorAll('.reveal-text');
        revealTexts.forEach(text => {
            gsap.fromTo(text, 
                { opacity: 0, y: 50 },
                {
                    opacity: 1, 
                    y: 0, 
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: text,
                        start: "top 85%",
                    }
                }
            );
        });

        // Image Reveal in About
        gsap.fromTo('.reveal-image-wrapper img',
            { scale: 1.4 },
            {
                scale: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: '.reveal-image-wrapper',
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            }
        );

        // Horizontal Scroll for Work Section
        // Only on Desktop
        let mm = gsap.matchMedia();

        mm.add("(min-width: 769px)", () => {
            const sections = gsap.utils.toArray(".project-card");
            let scrollTween = gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: ".work",
                    pin: true,
                    scrub: 1,
                    end: "+=3000",
                }
            });
        });

        // Footer Reveal Animation
        gsap.from('.footer-cta span', {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: 'footer',
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
        
        gsap.from('.footer-col', {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.footer-grid',
                start: "top 90%",
            }
        });

        // --- 6. Interactive Magnetic Buttons ---
        menuBtn.addEventListener('mousemove', (e) => {
            const rect = menuBtn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(menuBtn, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3
            });
        });
        
        menuBtn.addEventListener('mouseleave', () => {
            gsap.to(menuBtn, { x: 0, y: 0, duration: 0.3 });
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
      

<div className="loader" style={{visibility: 'hidden'}}>
<div className="loader-text" style={{}}>BRAND SOCIETY</div>
<div className="loader-bar"></div>
</div>

<nav className="">
<div className="logo">BRAND SOCIETY</div>
<button className="menu-btn">Menu</button>
</nav>

<div className="menu-overlay">
<div className="menu-links">

<a className="menu-link" href="#hero"><span>Home</span></a>
<a className="menu-link" href="#work"><span>Work</span></a>
<a className="menu-link" href="#about"><span>Studio</span></a>
<a className="menu-link" href="#contact"><span>Contact</span></a>
</div>
<div className="menu-info">
<p className="">Tokyo, Japan</p>
<p className="">est. 2024</p>
</div>
</div>

<main className="" id="smooth-wrapper">
<div className="" id="smooth-content">

<section className="hero" id="hero" style={{}}>
<img alt="Brutalist Architecture" className="hero-img" src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&amp;w=2068&amp;auto=format&amp;fit=crop" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0%, 18.4863%) translate3d(0px, 571.671px, 0px) scale(1.2, 1.2)'}}/>
<h1 className="hero-title">
<span className="hero-line"><span className="">Designing</span></span>
<span className="hero-line"><span className="serif-italic" style={{}}>The</span> Future</span>
<span className="hero-line"><span className="">OF COMMUNITY</span></span>
</h1>
<div className="scroll-indicator">
<div className="scroll-line"></div>
<span className="" style={{}}>aN iNTENTIONAL mARKETING cOMPANY</span>
</div>
</section>

<section className="marquee-section" style={{}}>
<div className="marquee-track" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(-50%, 0%) translate(-12047.3px, 0px)'}}>
<span className="">STRATEGIC DEVELOPEMNT</span> • <span className="">Confident Positioning</span> • <span className="">Resident Focused</span> • <span>Landscape</span> • <span className="">Sustainable Design</span> • <span>Urban Planning</span> • <span>Interior Architecture</span> • <span>Landscape</span>
</div>
</section>

<section className="about" id="about">
<div className="about-sticky">
<span className="section-label">Manifesto</span>
<p className="big-text">We don't just build structures.<br/>We sculpt <span className="serif-italic">ecosystems</span>.</p>
</div>
<div>
<p className="about-desc reveal-text" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 50px)', opacity: '0'}}>
                        Archetype represents a paradigm shift in spatial dynamics. Merging raw brutalist principles with organic sustainability, we create spaces that breathe. Our work challenges the conventional boundaries between the built environment and the natural world.
                    </p>
<p className="about-desc reveal-text" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 50px)', opacity: '0'}}>
                        Every line drawn, every material selected, serves a dual purpose: aesthetic dominance and ecological harmony. Welcome to the new standard.
                    </p>
<div className="reveal-image-wrapper" style={{marginTop: '4rem', height: '300px', background: '#ccc', overflow: 'hidden'}}>
<img alt="Detail" src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&amp;w=1974&amp;auto=format&amp;fit=crop" style={{width: '100%', height: '100%', objectFit: 'cover', translate: 'none', rotate: 'none', scale: 'none', transform: 'scale(1.4, 1.4)'}}/>
</div>
</div>
</section>

<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: 'auto', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '2065px', height: '4301px', padding: '0px 0px 3000px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '2065px', height: '4301px', padding: '0px 0px 3000px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '2065px', height: '4301px', padding: '0px 0px 3000px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '2065px', height: '4301px', padding: '0px 0px 3000px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '2065px', height: '4301px', padding: '0px 0px 3000px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '2065px', height: '4301px', padding: '0px 0px 3000px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '2065px', height: '4301px', padding: '0px 0px 3000px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '2065px', height: '4301px', padding: '0px 0px 3000px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '-0.25px -640px -276.75px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '2065px', height: '4301px', padding: '0px 0px 3000px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px -640px -277px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '2065px', height: '4301px', padding: '0px 0px 3000px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px -640px -277px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '2065px', height: '4301px', padding: '0px 0px 3000px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px -640px -277px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '2065px', height: '4301px', padding: '0px 0px 3000px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px -640px -277px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '2065px', height: '4301px', padding: '0px 0px 3000px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px -640px -277px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '2065px', height: '4301px', padding: '0px 0px 3000px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px -640px -277px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '2065px', height: '4301px', padding: '0px 0px 3000px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px -640px -277px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '2065px', height: '4301px', padding: '0px 0px 3000px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px -640px -277px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '2065px', height: '4301px', padding: '0px 0px 3000px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px -640px -277px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '2065px', height: '4301px', padding: '0px 0px 3000px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px -640px -277px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '2065px', height: '4301px', padding: '0px 0px 3000px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px -640px -277px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '2065px', height: '4301px', padding: '0px 0px 3000px'}}><section className="work" id="work" style={{translate: 'none', rotate: 'none', scale: 'none', inset: '0px auto auto 0px', margin: '0px', maxWidth: '2065px', width: '2065px', maxHeight: '1301px', height: '1301px', padding: '80px 0px', transform: 'translate(0px, 3000px)', boxSizing: 'border-box', position: 'fixed'}}>
<div className="work-header">
<span className="section-label">Selected Works</span>
<h2>Recent <span className="serif-italic">Monoliths</span></h2>
</div>
<div className="horizontal-container">
<div className="horizontal-wrapper">

<div className="project-card" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(-2582.21px, 0px)'}}>
<img alt="House 1" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2724&amp;auto=format&amp;fit=crop"/>
<div className="project-info">
<span>The Void House</span>
<span className="project-num">01</span>
</div>
</div>

<div className="project-card" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(-2582.21px, 0px)'}}>
<img alt="House 2" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="project-info">
<span>Kyoto Silence</span>
<span className="project-num">02</span>
</div>
</div>

<div className="project-card" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(-2582.21px, 0px)'}}>
<img alt="House 3" src="https://images.unsplash.com/photo-1534237710431-e2fc698436d0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="project-info">
<span>Concrete Peak</span>
<span className="project-num">03</span>
</div>
</div>

<div className="project-card" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(-2582.21px, 0px)'}}>
<img alt="House 4" src="https://images.unsplash.com/photo-1522050212171-61b01dd24579?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
<div className="project-info">
<span>Nordic Light</span>
<span className="project-num">04</span>
</div>
</div>
</div>
</div>
</section></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>

<section className="services" id="services">
<span className="section-label">Capabilities</span>
<div className="service-item">
<div className="service-header">
<h3>Residential</h3>
<div className="service-icon">+</div>
</div>
<div className="service-details">
<div className="service-text-wrapper">
<p>Crafting intimate sanctuaries that balance privacy with openness. We focus on natural light, thermal comfort, and material honesty to create homes that age gracefully and connect inhabitants to their surroundings.</p>
</div>
</div>
</div>
<div className="service-item">
<div className="service-header">
<h3>Commercial</h3>
<div className="service-icon">+</div>
</div>
<div className="service-details">
<div className="service-text-wrapper">
<p>Redefining workspaces and retail environments. We design for flow, productivity, and brand identity, using structural expression to create memorable client experiences that stand out in the urban jungle.</p>
</div>
</div>
</div>
<div className="service-item">
<div className="service-header">
<h3>Renovation</h3>
<div className="service-icon">+</div>
</div>
<div className="service-details">
<div className="service-text-wrapper">
<p>Breathing new life into existing bones. We respect historical context while injecting modern utility, creating a dialogue between the past and the future through adaptive reuse and sustainable retrofitting.</p>
</div>
</div>
</div>
<div className="service-item">
<div className="service-header">
<h3>Urban Planning</h3>
<div className="service-icon">+</div>
</div>
<div className="service-details">
<div className="service-text-wrapper">
<p>Macro-scale thinking for micro-scale living. We analyze traffic patterns, sunlight data, and community needs to design resilient urban pockets that foster social interaction and ecological diversity.</p>
</div>
</div>
</div>
</section>

<footer className="" id="contact">
<div className="footer-top">
<div className="section-label" style={{marginBottom: '1rem'}}>Let's Talk</div>
<div className="footer-cta">
<span style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 100px)'}}>Let's Build</span>
<span className="serif-italic" style={{color: 'var(--accent-color)', display: 'block', translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 100px)'}}>Legacies</span>
</div>
</div>
<div className="footer-grid">
<div className="footer-col" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 50px)'}}>
<h4>Headquarters</h4>
<div style={{fontSize: '1.1rem', lineHeight: '1.5', color: 'var(--secondary-color)'}}>
                            Minato City, Akasaka<br/>
                            Tokyo 107-0052<br/>
                            Japan
                        </div>
<div style={{marginTop: '1.5rem'}}>
<a href="mailto:hello@archetype.com" style={{textDecoration: 'underline'}}>hello@archetype.com</a>
</div>
</div>
<div className="footer-col" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 50px)'}}>
<h4>Socials</h4>
<div className="footer-links">
<a href="#">Instagram</a>
<a href="#">LinkedIn</a>
<a href="#">Twitter/X</a>
<a href="#">Behance</a>
</div>
</div>
<div className="footer-col" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 50px)'}}>
<h4>Sitemap</h4>
<div className="footer-links">
<a className="smooth-scroll-link" href="#hero">Home</a>
<a className="smooth-scroll-link" href="#about">Studio</a>
<a className="smooth-scroll-link" href="#work">Work</a>
<a className="smooth-scroll-link" href="#services">Services</a>
</div>
</div>
<div className="footer-col" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 50px)'}}>
<h4>Newsletter</h4>
<p style={{marginBottom: '1.5rem', color: 'var(--secondary-color)', fontSize: '0.9rem'}}>Join our community for updates on sustainable architecture.</p>
<form className="newsletter-form" onsubmit="event.preventDefault();">
<input placeholder="Email Address" type="email"/>
<button type="submit">→</button>
</form>
</div>
</div>
<div className="footer-bottom">
<div>
                        © 2024 Archetype Inc. All Rights Reserved.
                    </div>
<div>
<a href="#">Privacy Policy</a>   /   <a href="#">Terms</a>
</div>
<button className="back-to-top" onclick="window.lenis.scrollTo(0)">
                        Back to Top ↑
                    </button>
</div>
</footer>
</div>
</main>








    </>
  );
}
