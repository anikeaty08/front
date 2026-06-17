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



      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
      });

      window.lenis = lenis;

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);

      const tlLoader = gsap.timeline();
      tlLoader
        .to(".loader-bar", { width: "100%", duration: 1.5, ease: "power2.inOut" })
        .to(".loader", { yPercent: -100, duration: 0.8, ease: "power4.inOut" })
        .from(".hero-img", { scale: 1.2, opacity: 0, duration: 1.5, ease: "power2.out" }, "-=0.4")
        .to(".hero-line span", { y: 0, duration: 1, stagger: 0.1, ease: "power4.out" }, "-=1")
        .to(".hero-subtitle", { opacity: 1, duration: 1, ease: "power2.out" }, "-=0.5");

      const menuBtn = document.querySelector(".menu-btn");
      const menuOverlay = document.querySelector(".menu-overlay");
      const menuLinks = document.querySelectorAll(".menu-link");
      let isMenuOpen = false;

      const menuTl = gsap
        .timeline({ paused: true })
        .to(menuOverlay, {
          visibility: "visible",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 0.8,
          ease: "power4.inOut",
        })
        .to(".menu-link span", { y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }, "-=0.4");

      function toggleMenu() {
        if (!isMenuOpen) {
          menuTl.play();
          menuBtn.textContent = "Close";
          lenis.stop();
        } else {
          menuTl.reverse();
          menuBtn.textContent = "Menu";
          lenis.start();
        }
        isMenuOpen = !isMenuOpen;
      }

      menuBtn.addEventListener("click", toggleMenu);

      menuLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const targetId = link.getAttribute("href");
          const targetSection = document.querySelector(targetId);
          if (isMenuOpen) toggleMenu();
          if (targetSection)
            setTimeout(() => {
              lenis.scrollTo(targetSection);
            }, 500);
        });
      });

      document.querySelectorAll(".smooth-scroll-link").forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const targetId = link.getAttribute("href");
          const targetSection = document.querySelector(targetId);
          if (targetSection) lenis.scrollTo(targetSection);
        });
      });

      const serviceItems = document.querySelectorAll(".service-item");
      serviceItems.forEach((item) => {
        const details = item.querySelector(".service-details");
        const icon = item.querySelector(".service-icon");
        let isOpen = false;

        item.addEventListener("click", () => {
          serviceItems.forEach((otherItem) => {
            if (otherItem !== item && otherItem.classList.contains("open")) {
              const otherDetails = otherItem.querySelector(".service-details");
              const otherIcon = otherItem.querySelector(".service-icon");
              gsap.to(otherDetails, { height: 0, opacity: 0, duration: 0.4, ease: "power2.out" });
              gsap.to(otherIcon, { rotation: 0, duration: 0.4 });
              otherItem.classList.remove("open");
            }
          });

          if (!isOpen) {
            gsap.to(details, { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" });
            gsap.to(icon, { rotation: 45, duration: 0.4 });
            item.classList.add("open");
          } else {
            gsap.to(details, { height: 0, opacity: 0, duration: 0.4, ease: "power2.out" });
            gsap.to(icon, { rotation: 0, duration: 0.4 });
            item.classList.remove("open");
          }
          isOpen = !isOpen;
        });
      });

      gsap.to(".hero-img", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });

      let currentScroll = 0;
      let isScrollingDown = true;
      let tween = gsap.to(".marquee-track", { xPercent: -50, repeat: -1, duration: 10, ease: "linear" }).totalProgress(0.5);

      window.addEventListener("scroll", function () {
        if (window.pageYOffset > currentScroll) {
          isScrollingDown = true;
        } else {
          isScrollingDown = false;
        }
        gsap.to(tween, { timeScale: isScrollingDown ? 1 : -1 });
        currentScroll = window.pageYOffset;
      });

      const revealTexts = document.querySelectorAll(".reveal-text");
      revealTexts.forEach((text) => {
        gsap.fromTo(
          text,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: text, start: "top 85%" },
          }
        );
      });

      gsap.fromTo(".reveal-image-wrapper img", { scale: 1.4 }, {
        scale: 1,
        ease: "none",
        scrollTrigger: { trigger: ".reveal-image-wrapper", start: "top bottom", end: "bottom top", scrub: true },
      });

      const openCsBtns = document.querySelectorAll(".open-cs-btn");
      const closeCsBtn = document.querySelector(".close-cs-btn");
      const closeCsBtnBtm = document.querySelector(".close-cs-btn-btm");
      const csOverlay = document.getElementById("cs-overlay");

      openCsBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          document.getElementById("cs-title").textContent = btn.dataset.title;
          document.getElementById("cs-year").textContent = btn.dataset.year;
          document.getElementById("cs-market").textContent = btn.dataset.market;
          document.getElementById("cs-hero-img").src = btn.dataset.img;

          csOverlay.style.display = "block";
          document.body.classList.add("no-scroll");
          lenis.stop();

          gsap.fromTo(csOverlay, { opacity: 0, y: "100%" }, { opacity: 1, y: "0%", duration: 0.8, ease: "power4.inOut" });
        });
      });

      function closeOverlay() {
        gsap.to(csOverlay, {
          y: "100%",
          duration: 0.6,
          ease: "power4.inOut",
          onComplete: () => {
            csOverlay.style.display = "none";
            document.body.classList.remove("no-scroll");
            lenis.start();
          },
        });
      }

      closeCsBtn.addEventListener("click", closeOverlay);
      closeCsBtnBtm.addEventListener("click", closeOverlay);

      gsap.from(".timeline-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: { trigger: ".timeline-grid", start: "top 85%" },
      });

      gsap.from(".footer-cta span", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: { trigger: "footer", start: "top 80%", toggleActions: "play none none reverse" },
      });

      gsap.from(".footer-col", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: { trigger: ".footer-grid", start: "top 90%" },
      });

      gsap.from(".pricing-col", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: { trigger: ".pricing-grid", start: "top 85%" },
      });

      menuBtn.addEventListener("mousemove", (e) => {
        const rect = menuBtn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(menuBtn, { x: x * 0.3, y: y * 0.3, duration: 0.3 });
      });
      menuBtn.addEventListener("mouseleave", () => {
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
      
<div className="loader">
<div className="loader-text">BRAND SOCIETY</div>
<div className="loader-bar"></div>
</div>
<nav>
<div className="logo">BRAND SOCIETY.</div>
<button className="menu-btn">Menu</button>
</nav>
<div className="menu-overlay">
<div className="menu-links">
<a className="menu-link" href="#hero"><span>Home</span></a>
<a className="menu-link" href="#about"><span>Studio</span></a>
<a className="menu-link" href="#work"><span>Work</span></a>
<a className="menu-link" href="#services"><span>Services</span></a>
<a className="menu-link" href="#pricing"><span>Investment</span></a>
<a className="menu-link" href="#timeline"><span>Timeline</span></a>
</div>
<div className="menu-info">
<p>Toms River, NJ</p>
<p>est. 2026</p>
</div>
</div>
<main id="smooth-wrapper">
<div id="smooth-content">
<section className="hero" id="hero">
<img alt="Brutalist Architecture" className="hero-img" src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>
<h1 className="hero-title">
<span className="hero-line"><span>Designing</span></span>
<span className="hero-line"><span className="serif-italic">The</span> Future</span>
<span className="hero-line"><span>Of Communities</span></span>
</h1>
<div className="scroll-indicator">
<div className="scroll-line"></div>
<span>An Intentional Marketing Company</span>
</div>
</section>
<section className="marquee-section">
<div className="marquee-track">
<span>Strategic Development</span> • <span>Confident Positioning</span> • <span>Resident Focused</span> •
            <span>Launch Ready</span> • <span>Strategic Development</span> • <span>Confident Positioning</span> •
            <span>Resident Focused</span> • <span>Launch Ready</span>
</div>
</section>
<section className="about" id="about">
<div className="about-sticky">
<span className="section-label">Brand Society</span>
<p className="big-text">
              We don't just build brands.<br/>We sculpt a <span className="serif-italic">community experience</span>.
            </p>
</div>
<div>
<p className="about-desc reveal-text">
              Every decision we make shapes how a community is perceived, experienced, and remembered. From strategic
              development to confident positioning and resident-centric thinking, we design brands that feel intentional
              at every touchpoint. The result is communities that connect emotionally, perform commercially, and stand
              apart with clarity and purpose.
            </p>
<p className="about-desc reveal-text">
              This is not decoration. It is direction, translated into experiences people choose to live in and align
              with.
            </p>
<div className="reveal-image-wrapper" style={{marginTop: '4rem', height: '300px', background: '#ccc', overflow: 'hidden'}}>
<img alt="Detail" className="object-cover w-full h-auto" src="https://images.unsplash.com/photo-1578735546632-9ff1f1e7518e?w=2560&amp;q=80" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
</div>
</div>
</section>
<section className="work" id="work">
<div className="work-header">
<span className="section-label">Selected Works</span>
<h2>Case <span className="serif-italic">Studies</span></h2>
</div>
<div className="work-list">
<div className="work-entry">
<div className="work-img-wrapper">
<img alt="Cosmo 440" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2724&amp;auto=format&amp;fit=crop"/>
</div>
<div className="work-details">
<h3 className="work-title">Cosmo 440</h3>
<div className="meta-grid">
<div className="meta-item">
<span className="meta-label">Year</span>
<span className="meta-value">2024</span>
</div>
<div className="meta-item">
<span className="meta-label">Asset Type</span>
<span className="meta-value">Multifamily</span>
</div>
<div className="meta-item">
<span className="meta-label">Market</span>
<span className="meta-value">New York, NY</span>
</div>
</div>
<button className="btn-outline open-cs-btn" data-img="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2724&amp;auto=format&amp;fit=crop" data-market="New York, NY" data-title="Cosmo 440" data-type="Multifamily" data-year="2024">
                  See Case Study <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="work-entry">
<div className="work-img-wrapper">
<img alt="Solaris" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="work-details">
<h3 className="work-title">Solaris</h3>
<div className="meta-grid">
<div className="meta-item">
<span className="meta-label">Year</span>
<span className="meta-value">2025</span>
</div>
<div className="meta-item">
<span className="meta-label">Asset Type</span>
<span className="meta-value">Build to Rent</span>
</div>
<div className="meta-item">
<span className="meta-label">Market</span>
<span className="meta-value">Kissimmee, FL</span>
</div>
</div>
<button className="btn-outline open-cs-btn" data-img="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" data-market="Kissimmee, FL" data-title="Solaris" data-type="Build to Rent" data-year="2025">
                  See Case Study <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="work-entry">
<div className="work-img-wrapper">
<img alt="Reatta Ranch" src="https://images.unsplash.com/photo-1534237710431-e2fc698436d0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="work-details">
<h3 className="work-title">Reatta Ranch</h3>
<div className="meta-grid">
<div className="meta-item">
<span className="meta-label">Year</span>
<span className="meta-value">2023</span>
</div>
<div className="meta-item">
<span className="meta-label">Asset Type</span>
<span className="meta-value">Student Living</span>
</div>
<div className="meta-item">
<span className="meta-label">Market</span>
<span className="meta-value">Austin, TX</span>
</div>
</div>
<button className="btn-outline open-cs-btn" data-img="https://images.unsplash.com/photo-1534237710431-e2fc698436d0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" data-market="Austin, TX" data-title="Reatta Ranch" data-type="Student Living" data-year="2023">
                  See Case Study <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</section>
<div className="case-study-overlay" id="cs-overlay">
<div className="cs-nav">
<button className="close-cs-btn">
              Close Project <iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>
<div className="cs-hero">
<img alt="Project Hero" id="cs-hero-img" src=""/>
</div>
<div className="cs-content">
<div className="cs-header-grid">
<div>
<h1 className="cs-title" id="cs-title">Project Name</h1>
<div className="meta-grid">
<div className="meta-item">
<span className="meta-label">Year</span>
<span className="meta-value" id="cs-year">2024</span>
</div>
<div className="meta-item">
<span className="meta-label">Market</span>
<span className="meta-value" id="cs-market">Location</span>
</div>
</div>
</div>
<div>
<span className="section-label">Overview</span>
<p className="cs-desc">
                  We redefined the market presence for this asset through a comprehensive rebranding strategy. By
                  focusing on the unique architectural elements and the lifestyle needs of the demographic, we created a
                  visual identity that speaks to luxury, comfort, and modernity. The result is a cohesive brand
                  experience that permeates every touchpoint, from digital advertising to on-site signage.
                </p>
<p className="cs-desc" style={{marginTop: '1.5rem'}}>
                  Our approach was holistic, ensuring that the brand story was told consistently across all channels. We
                  developed a custom color palette, typography system, and photography style that sets a new standard
                  for the neighborhood.
                </p>
</div>
</div>
<div className="cs-gallery">
<img alt="Interior" className="cs-img-lg" src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="cs-grid-2">
<img alt="Detail 1" className="cs-img-lg" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
<img alt="Detail 2" className="cs-img-lg" src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<img alt="Exterior" className="cs-img-lg" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2653&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<footer style={{paddingTop: '2rem'}}>
<div className="footer-bottom" style={{borderTop: '1px solid rgba(26,24,24,0.1)', paddingTop: '2rem'}}>
<button className="close-cs-btn-btm" style={{textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em', fontWeight: '700'}}>
                Back to All Projects
              </button>
</div>
</footer>
</div>
<section className="services" id="services">
<span className="section-label">Capabilities</span>
<div className="service-item">
<div className="service-header">
<h3>Property Naming</h3>
<div className="service-icon">+</div>
</div>
<div className="service-details">
<div className="service-text-wrapper">
<p>
                  We create property names that are designed to be found and chosen. SEO is embedded into the naming
                  process from the start, ensuring the name performs in local search, maps, and listing platforms while
                  remaining distinctive and elevated. The outcome is a name that connects with residents emotionally,
                  stands apart in the market, and supports long-term visibility and brand strength.
                </p>
</div>
</div>
</div>
<div className="service-item">
<div className="service-header">
<h3>Brand Development</h3>
<div className="service-icon">+</div>
</div>
<div className="service-details">
<div className="service-text-wrapper">
<p>
                  We define how the community should be understood before anything is designed. This includes
                  positioning, tone, visual direction, and messaging so every asset is aligned. The outcome is a
                  cohesive brand system that guides decisions and eliminates guesswork.
                </p>
</div>
</div>
</div>
<div className="service-item">
<div className="service-header">
<h3>Online Brand Implementation</h3>
<div className="service-icon">+</div>
</div>
<div className="service-details">
<div className="service-text-wrapper">
<p>
                  We translate the brand into a clear, conversion-focused digital presence. This includes website
                  structure, messaging hierarchy, and visual application across key online platforms. The result is a
                  consistent experience that reinforces the brand and supports leasing performance.
                </p>
</div>
</div>
</div>
<div className="service-item">
<div className="service-header">
<h3>Onsite Brand Execution</h3>
<div className="service-icon">+</div>
</div>
<div className="service-details">
<div className="service-text-wrapper">
<p>
                  We ensure the brand shows up correctly in the physical environment. This includes guidance for
                  signage, collateral, and resident-facing touchpoints so the onsite experience matches the promise. The
                  outcome is alignment between what prospects see online and what they experience in person.
                </p>
</div>
</div>
</div>
</section>
<section className="pricing" id="pricing">
<div className="pricing-header">
<span className="section-label">Pricing</span>
<p className="big-text">Curated packages for <br/><span className="serif-italic">every</span> community type.</p>
</div>
<div className="pricing-grid">
<div className="pricing-col">
<span className="tier-name">Launch</span>
<span className="tier-price">$10,200</span>
<div style={{marginBottom: '2rem', opacity: '0.6', lineHeight: '1.5'}}>Essential branding to enter the market with clarity.</div>
<button className="tier-btn">Inquire Now</button>
</div>
<div className="pricing-col">
<span className="tier-name">Elevate</span>
<span className="tier-price">$25,500</span>
<div style={{marginBottom: '2rem', opacity: '0.6', lineHeight: '1.5'}}>
                Comprehensive strategy for competitive distinction.
              </div>
<button className="tier-btn">Inquire Now</button>
</div>
<div className="pricing-col">
<span className="tier-name">Success</span>
<span className="tier-price">$65,000</span>
<div style={{marginBottom: '2rem', opacity: '0.6', lineHeight: '1.5'}}>
                Dominant market positioning and full-scale execution.
              </div>
<button className="tier-btn">Inquire Now</button>
</div>
</div>
<div style={{marginTop: '6rem'}}>
<span className="section-label">Enhancements</span>
<h3 style={{marginBottom: '2rem'}}>Add-ons</h3>
<div className="addons-grid">
<div className="addon-item">
<span className="addon-name">Property Naming</span>
<span className="addon-price">$1,250</span>
</div>
<div className="addon-item">
<span className="addon-name">Website Implementation</span>
<span className="addon-price">$3,500</span>
</div>
<div className="addon-item">
<span className="addon-name">3D Floorplan Renderings</span>
<span className="addon-price">$275 <span style={{fontSize: '0.7em', fontFamily: '\'Manrope\''}}>/ each</span></span>
</div>
<div className="addon-item">
<span className="addon-name">2D / 3D Site Maps</span>
<span className="addon-price">$550 / $950</span>
</div>
</div>
</div>
<div className="comparison-wrapper">
<div className="comp-row comp-header">
<div>Feature</div>
<div style={{color: 'var(--secondary-color)'}}>Launch</div>
<div style={{color: 'var(--secondary-color)'}}>Elevate</div>
<div style={{color: 'var(--secondary-color)'}}>Success</div>
</div>
<div className="comp-row">
<div className="comp-cat">Discovery &amp; Intake</div>
<div className="comp-cell">Intake form review</div>
<div className="comp-cell">Intake + live strategy kickoff</div>
<div className="comp-cell strong">Deep discovery workshops with leadership</div>
</div>
<div className="comp-row">
<div className="comp-cat">Market Research</div>
<div className="comp-cell">Core comp set snapshot</div>
<div className="comp-cell">Full market, comps, pricing, positioning</div>
<div className="comp-cell strong">Portfolio-grade market intelligence + demand modeling</div>
</div>
<div className="comp-row">
<div className="comp-cat">Brand Positioning</div>
<div className="comp-cell">Foundational positioning statement</div>
<div className="comp-cell">Refined brand positioning + messaging hierarchy</div>
<div className="comp-cell strong">Full brand strategy framework</div>
</div>
<div className="comp-row">
<div className="comp-cat">Property Naming</div>
<div className="comp-cell">Available as add on</div>
<div className="comp-cell">Available as add on</div>
<div className="comp-cell strong">Full naming process with legal and market screening</div>
</div>
<div className="comp-row">
<div className="comp-cat">Logo Design</div>
<div className="comp-cell">Single primary logo</div>
<div className="comp-cell">Primary logo + alternates</div>
<div className="comp-cell strong">Complete logo system with submarks</div>
</div>
<div className="comp-row">
<div className="comp-cat">Visual System</div>
<div className="comp-cell">Core colors + typography</div>
<div className="comp-cell">Extended color palette + typography rules</div>
<div className="comp-cell strong">Full visual system including patterns and iconography</div>
</div>
<div className="comp-row">
<div className="comp-cat">Lifestyle Photography</div>
<div className="comp-cell">-</div>
<div className="comp-cell">-</div>
<div className="comp-cell strong">
                Full set of FHA-compliant ready to use referenced lifestyle photography custom curated + LR presets
              </div>
</div>
<div className="comp-row">
<div className="comp-cat">Brand Guidelines</div>
<div className="comp-cell">Full brand guidelines PDF</div>
<div className="comp-cell">Full brand guidelines PDF</div>
<div className="comp-cell strong">Enterprise-level brand book</div>
</div>
<div className="comp-row">
<div className="comp-cat">Website Strategy</div>
<div className="comp-cell">-</div>
<div className="comp-cell">Website wireframe</div>
<div className="comp-cell strong">Conversion-optimized UX architecture</div>
</div>
<div className="comp-row">
<div className="comp-cat">Website Copywriting</div>
<div className="comp-cell">-</div>
<div className="comp-cell">-</div>
<div className="comp-cell strong">Website copy + future content framework</div>
</div>
<div className="comp-row">
<div className="comp-cat">Creative Assets</div>
<div className="comp-cell">Limited launch graphics</div>
<div className="comp-cell">Full launch asset suite</div>
<div className="comp-cell strong">Creative system for scaling</div>
</div>
<div className="comp-row">
<div className="comp-cat">Social Presence</div>
<div className="comp-cell">-</div>
<div className="comp-cell">Launch profile setup</div>
<div className="comp-cell strong">Content strategy + execution framework</div>
</div>
<div className="comp-row">
<div className="comp-cat">Internal Playbooks</div>
<div className="comp-cell">Not included</div>
<div className="comp-cell">Content Pillars</div>
<div className="comp-cell strong">Full leasing and marketing playbooks</div>
</div>
<div className="comp-row" style={{borderBottom: 'none'}}>
<div className="comp-cat">Internal Playbooks</div>
<div className="comp-cell">Available as add on</div>
<div className="comp-cell">Available as add on</div>
<div className="comp-cell strong">Included</div>
</div>
</div>
</section>
<section className="timeline-section" id="timeline">
<span className="section-label">Delivery Timeline</span>
<p className="big-text" style={{marginBottom: '4rem'}}>Efficiency meets <span className="serif-italic">precision</span>.</p>
<div className="timeline-grid">
<div className="timeline-card">
<h3 className="timeline-head">Launch</h3>
<div className="w-full h-px bg-gray-200"></div>
<div className="time-block">
<div className="time-label"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Standard</div>
<div className="time-val">30 Days</div>
</div>
<div className="time-block">
<div className="time-label" style={{color: 'var(--accent-color)'}}>
<iconify-icon icon="solar:bolt-linear"></iconify-icon> Fast Track
                </div>
<div className="time-val fast">10 Days</div>
</div>
</div>
<div className="timeline-card">
<h3 className="timeline-head">Elevate</h3>
<div className="w-full h-px bg-gray-200"></div>
<div className="time-block">
<div className="time-label"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Standard</div>
<div className="time-val">6 Weeks</div>
</div>
<div className="time-block">
<div className="time-label" style={{color: 'var(--accent-color)'}}>
<iconify-icon icon="solar:bolt-linear"></iconify-icon> Fast Track
                </div>
<div className="time-val fast">4-5 Weeks</div>
</div>
</div>
<div className="timeline-card">
<h3 className="timeline-head">Success</h3>
<div className="w-full h-px bg-gray-200"></div>
<div className="time-block">
<div className="time-label"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Standard</div>
<div className="time-val">15 Weeks</div>
</div>
<div className="time-block">
<div className="time-label" style={{color: 'var(--accent-color)'}}>
<iconify-icon icon="solar:bolt-linear"></iconify-icon> Fast Track
                </div>
<div className="time-val fast">10 Weeks</div>
</div>
</div>
</div>
</section>
<footer id="contact">
<div className="footer-top">
<div className="section-label" style={{marginBottom: '1rem'}}>Get Started</div>
<div className="footer-cta">
<span>Let's Brand</span>
<span className="serif-italic" style={{color: 'var(--accent-color)', display: 'block'}}>your community</span>
</div>
</div>
<div className="footer-grid">
<div className="footer-col">
<h4>Headquarters</h4>
<div style={{fontSize: '1.1rem', lineHeight: '1.5', color: 'var(--secondary-color)'}}>Toms River, New Jersey</div>
<div style={{marginTop: '1.5rem'}}>
<a href="mailto:order@intentionalmktg.com" style={{textDecoration: 'underline'}}>order@intentionalmktg.com</a>
</div>
</div>
<div className="footer-col">
<h4>Socials</h4>
<div className="footer-links">
<a href="#">Instagram</a>
<a href="#">LinkedIn</a>
<a href="#">Twitter/X</a>
<a href="#">Behance</a>
</div>
</div>
<div className="footer-col">
<h4>Sitemap</h4>
<div className="footer-links">
<a className="smooth-scroll-link" href="#hero">Home</a>
<a className="smooth-scroll-link" href="#about">Studio</a>
<a className="smooth-scroll-link" href="#work">Work</a>
<a className="smooth-scroll-link" href="#services">Services</a>
<a className="smooth-scroll-link" href="#pricing">Investment</a>
<a className="smooth-scroll-link" href="#timeline">Timeline</a>
</div>
</div>
<div className="footer-col">
<h4>Newsletter</h4>
<p style={{marginBottom: '1.5rem', color: 'var(--secondary-color)', fontSize: '0.9rem'}}>
                Join our community for updates on brands that perform.
              </p>
<form className="newsletter-form" onsubmit="event.preventDefault();">
<input placeholder="Email Address" type="email"/>
<button type="submit">→</button>
</form>
</div>
</div>
<div className="footer-bottom">
<div>© 2026 Brand Society by Intentional Marketing. All Rights Reserved.</div>
<div><a href="#">Privacy Policy</a>   /   <a href="#">Terms</a></div>
<button className="back-to-top" onclick="window.lenis.scrollTo(0)">Back to Top ↑</button>
</div>
</footer>
</div>
</main>





    </>
  );
}
