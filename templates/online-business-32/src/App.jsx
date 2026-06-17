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



    // Simple Router Logic for SPA
    function handleRouting() {
      const hash = window.location.hash || '#/';
      const views = document.querySelectorAll('.page-view');
      
      let targetViewId = 'view-home';

      if (hash.startsWith('#/')) {
        const route = hash.split('?')[0]; 
        if (route !== '#/' && route !== '#') {
           targetViewId = 'view-' + route.substring(2);
        }
      }

      const targetEl = document.getElementById(targetViewId);
      
      if(targetEl) {
        views.forEach(view => {
          if (view.id === targetViewId) {
            view.classList.remove('hidden');
            view.classList.add('block');
          } else {
            view.classList.remove('block');
            view.classList.add('hidden');
          }
        });
      }

      // Handle scrolling
      if (hash.startsWith('#/')) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash.length > 1) {
        // It's a scroll anchor for home
        document.getElementById('view-home').classList.remove('hidden');
        document.getElementById('view-home').classList.add('block');
        setTimeout(() => {
          const anchor = document.querySelector(hash);
          if (anchor) anchor.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
      
      closeMenu(); // Ensure mobile menu closes on route
    }

    window.addEventListener('hashchange', handleRouting);
    document.addEventListener('DOMContentLoaded', handleRouting);

    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("active");
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

    // Nav shadow on scroll
    const siteNav = document.getElementById("site-nav");
    function updateNavShadow() {
      if (window.scrollY > 10) siteNav.classList.add("nav-scrolled");
      else siteNav.classList.remove("nav-scrolled");
    }
    updateNavShadow();
    window.addEventListener("scroll", updateNavShadow, { passive: true });

    // Mobile menu
    const mobileMenu = document.getElementById("mobile-menu");
    const menuBtn = document.getElementById("menu-btn");
    const menuClose = document.getElementById("menu-close");

    function openMenu() {
      mobileMenu.classList.remove("translate-x-full");
      document.body.classList.add("overflow-hidden");
      menuBtn.setAttribute("aria-expanded", "true");
    }

    function closeMenu() {
      mobileMenu.classList.add("translate-x-full");
      document.body.classList.remove("overflow-hidden");
      menuBtn.setAttribute("aria-expanded", "false");
    }

    menuBtn.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("translate-x-full");
      isOpen ? closeMenu() : openMenu();
    });
    menuClose.addEventListener("click", closeMenu);
    document.querySelectorAll("#mobile-menu a").forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

    // Listings scroll buttons (Home)
    const listingSlider = document.getElementById("projects-scroll");
    if(listingSlider) {
      document.getElementById("slide-prev")?.addEventListener("click", () => {
        listingSlider.scrollBy({ left: -420, behavior: "smooth" });
      });
      document.getElementById("slide-next")?.addEventListener("click", () => {
        listingSlider.scrollBy({ left: 420, behavior: "smooth" });
      });

      // Drag scroll for listings
      let isDown = false;
      let startX = 0;
      let scrollLeft = 0;

      listingSlider.addEventListener("mousedown", (e) => {
        isDown = true;
        listingSlider.classList.add("cursor-grabbing");
        listingSlider.classList.remove("cursor-grab");
        startX = e.pageX - listingSlider.offsetLeft;
        scrollLeft = listingSlider.scrollLeft;
      });

      ["mouseleave", "mouseup"].forEach(evt => {
        listingSlider.addEventListener(evt, () => {
          isDown = false;
          listingSlider.classList.remove("cursor-grabbing");
          listingSlider.classList.add("cursor-grab");
        });
      });

      listingSlider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - listingSlider.offsetLeft;
        const walk = (x - startX) * 2;
        listingSlider.scrollLeft = scrollLeft - walk;
      });
    }

    // Select floating label
    const interest = document.getElementById("model");
    if(interest) {
      interest.addEventListener("change", () => {
        if (interest.value) interest.classList.add("has-value");
        else interest.classList.remove("has-value");
      });
    }

    // Form UX
    const form = document.getElementById("lead-form");
    const submitBtn = document.getElementById("submit-btn");
    const formStatus = document.getElementById("form-status");

    if(form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        submitBtn.disabled = true;
        submitBtn.classList.add("opacity-80", "cursor-not-allowed");
        submitBtn.innerHTML = "Sending Request...";
        formStatus.textContent = "Submitting your application...";
        
        // Mock success
        setTimeout(() => {
          submitBtn.innerHTML = "Application Sent";
          formStatus.textContent = "We will review your business and contact you shortly.";
        }, 1500);
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
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-md transition-all duration-300" id="site-nav">
<div className="section-wrap md:px-12 flex pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<a className="flex items-center gap-3" href="#/">
<div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center font-serif text-xl tracking-tight">O</div>
<div className="flex flex-col">
<span className="font-serif text-lg leading-none font-medium text-slate-900 tracking-tight">OnlineBusiness.com</span>
<span className="text-[0.62rem] uppercase tracking-[0.18em] text-neutral-500 mt-1">Marketplace &amp; Education</span>
</div>
</a>
<ul className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-neutral-600">
<li><a className="hover:text-slate-900 transition-colors" href="#listings">Buy a Business</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#contact">Sell a Business</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#learn">Learn</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#/about">About</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#/blog">Journal</a></li>
</ul>
<div className="hidden lg:flex items-center gap-4">
<a className="text-sm font-medium hover:text-accent transition-colors" href="#login">Sign In</a>
<a className="px-6 py-3 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors" href="#listings">
          Browse Listings
        </a>
</div>
<button aria-controls="mobile-menu" aria-expanded="false" aria-label="Menu" className="lg:hidden text-slate-900" id="menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<aside className="fixed inset-0 z-[60] bg-white translate-x-full transition-transform duration-500 border-l border-neutral-200" id="mobile-menu">
<div className="pt-24 px-8 h-full flex flex-col overflow-y-auto">
<button aria-label="Close menu" className="absolute top-6 right-6 text-slate-900" id="menu-close">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<nav className="flex flex-col gap-8">
<a className="font-serif text-4xl text-slate-900 tracking-tight" href="#listings">Buy a Business</a>
<a className="font-serif text-4xl text-slate-900 tracking-tight" href="#contact">Sell a Business</a>
<a className="font-serif text-4xl text-slate-900 tracking-tight" href="#learn">Learn</a>
<a className="font-serif text-4xl text-slate-900 tracking-tight" href="#/about">About</a>
<a className="font-serif text-4xl text-slate-900 tracking-tight" href="#/blog">Journal</a>
</nav>
<div className="mt-auto pb-12 pt-12">
<p className="text-sm text-neutral-500 mb-4">Start your journey</p>
<a className="block text-xl font-medium mb-2 tracking-tight" href="#listings">Browse Listings</a>
<a className="block text-xl font-medium tracking-tight" href="#contact">Apply to Sell</a>
</div>
</div>
</aside>

<div id="app-content">

<main className="page-view block" id="view-home">

<header className="relative min-h-screen flex items-center pt-24 px-6 md:px-12 lg:px-20 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Marketplace Dashboard" className="w-full h-full object-cover" decoding="async" fetchpriority="high" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;w=2200&amp;q=75"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40"></div>
</div>
<div className="section-wrap relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
<div className="text-white">
<div className="flex items-center gap-3 mb-6 opacity-0 animate-[fadeUp_0.8s_ease_0.1s_forwards]">
<div className="w-12 h-[1px] bg-accent"></div>
<span className="uppercase text-accent text-xs font-medium tracking-[0.2em]">Curated Marketplace</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl leading-[1.08] mb-8 opacity-0 animate-[fadeUp_0.9s_ease_0.2s_forwards] tracking-tight">
              Buy or Sell an Online Business Built for <span className="italic text-accent">Trust</span>.
            </h1>
<p className="text-lg md:text-xl text-neutral-200 max-w-xl leading-relaxed mb-10 opacity-0 animate-[fadeUp_0.9s_ease_0.35s_forwards]">
              A curated marketplace for serious buyers and credible sellers. Our exclusive listings go through a real vetting process, and every curated opportunity is clearly labeled. No noise. No junk.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto opacity-0 animate-[fadeUp_0.9s_ease_0.5s_forwards]">
<a className="px-8 py-4 bg-accent text-white text-sm font-semibold tracking-wide hover:bg-white hover:text-slate-900 transition-colors text-center" href="#listings">
                Browse Listings
              </a>
<a className="px-8 py-4 border border-white text-white text-sm font-semibold tracking-wide hover:bg-white hover:text-slate-900 transition-colors text-center" href="#contact">
                Sell Your Business
              </a>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full bg-slate-900/85 backdrop-blur-sm border-t border-white/10 py-5 z-20 hidden md:block">
<div className="section-wrap px-6 md:px-12 flex items-center justify-between text-white/80 text-sm">
<div className="flex gap-10">
<div className="flex items-center gap-2">
<iconify-icon className="text-accent" icon="solar:shield-check-linear" width="18"></iconify-icon>
<span>Vetted Exclusive Listings</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-accent" icon="solar:verified-check-linear" width="18"></iconify-icon>
<span>Clearly Labeled Curated Deals</span>
</div>
</div>
<span className="tracking-wide">BUILT BY AN ENTREPRENEUR SINCE 1998</span>
</div>
</div>
</header>

<section className="md:py-28 border-y bg-neutral-50 border-neutral-200 pt-24 pb-24" id="listings">
<div className="section-wrap px-6 md:px-12 lg:px-20 mb-12 flex flex-col md:flex-row justify-between items-end reveal">
<div>
<span className="text-neutral-500 font-serif italic text-lg mb-2 block">Premium Opportunities</span>
<h2 className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tight">Explore Businesses <span className="italic text-neutral-500">For Sale</span></h2>
</div>
<div className="flex gap-4 mt-6 md:mt-0">
<button aria-label="Scroll listings left" className="w-10 h-10 border border-neutral-300 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors" id="slide-prev">
<iconify-icon icon="solar:arrow-left-linear" width="18"></iconify-icon>
</button>
<button aria-label="Scroll listings right" className="w-10 h-10 border border-neutral-300 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors" id="slide-next">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="overflow-x-auto no-scrollbar pl-6 md:pl-20 pb-8 cursor-grab active:cursor-grabbing" id="projects-scroll">
<div className="flex gap-8 w-max">

<article className="card w-[320px] md:w-[400px] group cursor-pointer reveal delay-100 overflow-hidden">
<div className="relative aspect-[4/3] bg-neutral-200">
<img alt="SaaS Dashboard" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;w=800&amp;q=75"/>
<div className="absolute top-4 left-4 bg-slate-900 text-white text-xs font-medium px-3 py-1 uppercase tracking-wider">Exclusive Listing</div>
<div className="absolute bottom-4 right-4 bg-white/90 text-slate-900 text-sm font-semibold px-4 py-2">$1,250,000</div>
</div>
<div className="p-6">
<h3 className="text-xl font-serif text-slate-900 mb-1 truncate tracking-tight">B2B SaaS for Field Teams</h3>
<p className="text-sm text-neutral-500 mb-4">SaaS • B2B Software</p>
<div className="flex justify-between border-t border-neutral-200 pt-4 text-sm text-neutral-600">
<div className="flex items-center gap-1"><iconify-icon icon="solar:chart-square-linear" width="16"></iconify-icon> $2.4M ARR</div>
<div className="flex items-center gap-1"><iconify-icon icon="solar:wallet-linear" width="16"></iconify-icon> $450K Profit</div>
<div className="flex items-center gap-1"><iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon> 4 Yrs Old</div>
</div>
<button className="w-full mt-6 py-3 border border-neutral-300 text-slate-900 text-sm font-medium hover:bg-slate-900 hover:text-white transition-colors">View Details</button>
</div>
</article>

<article className="card w-[320px] md:w-[400px] group cursor-pointer reveal delay-200 overflow-hidden">
<div className="relative aspect-[4/3] bg-neutral-200">
<img alt="E-commerce Products" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&amp;fit=crop&amp;w=800&amp;q=75"/>
<div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-3 py-1 uppercase tracking-wider">Curated Listing</div>
<div className="absolute bottom-4 right-4 bg-white/90 text-slate-900 text-sm font-semibold px-4 py-2">$895,000</div>
</div>
<div className="p-6">
<h3 className="text-xl font-serif text-slate-900 mb-1 truncate tracking-tight">DTC Beauty E-commerce Brand</h3>
<p className="text-sm text-neutral-500 mb-4">E-commerce • Health &amp; Beauty</p>
<div className="flex justify-between border-t border-neutral-200 pt-4 text-sm text-neutral-600">
<div className="flex items-center gap-1"><iconify-icon icon="solar:cart-large-minimalistic-linear" width="16"></iconify-icon> $1.8M Rev</div>
<div className="flex items-center gap-1"><iconify-icon icon="solar:wallet-linear" width="16"></iconify-icon> $210K Profit</div>
<div className="flex items-center gap-1"><iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon> 2 Yrs Old</div>
</div>
<button className="w-full mt-6 py-3 border border-neutral-300 text-slate-900 text-sm font-medium hover:bg-slate-900 hover:text-white transition-colors">View Details</button>
</div>
</article>

<article className="card w-[320px] md:w-[400px] group cursor-pointer reveal delay-300 overflow-hidden">
<div className="relative aspect-[4/3] bg-neutral-200">
<img alt="Content Site" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&amp;fit=crop&amp;w=800&amp;q=75"/>
<div className="absolute top-4 left-4 bg-slate-900 text-white text-xs font-medium px-3 py-1 uppercase tracking-wider">Exclusive Listing</div>
<div className="absolute bottom-4 right-4 bg-white/90 text-slate-900 text-sm font-semibold px-4 py-2">$150,000</div>
</div>
<div className="p-6">
<h3 className="text-xl font-serif text-slate-900 mb-1 truncate tracking-tight">Profitable Niche Content Site</h3>
<p className="text-sm text-neutral-500 mb-4">Content • Lifestyle</p>
<div className="flex justify-between border-t border-neutral-200 pt-4 text-sm text-neutral-600">
<div className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear" width="16"></iconify-icon> 150k /mo</div>
<div className="flex items-center gap-1"><iconify-icon icon="solar:wallet-linear" width="16"></iconify-icon> $4.5k /mo</div>
<div className="flex items-center gap-1"><iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon> 6 Yrs Old</div>
</div>
<button className="w-full mt-6 py-3 border border-neutral-300 text-slate-900 text-sm font-medium hover:bg-slate-900 hover:text-white transition-colors">View Details</button>
</div>
</article>
<div className="w-1 md:w-20 shrink-0"></div>
</div>
</div>
</section>

<section className="md:py-28 md:px-12 lg:px-20 bg-white pt-24 pr-6 pb-24 pl-6" id="about">
<div className="section-wrap grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="relative reveal">
<div className="w-full aspect-[4/5] bg-neutral-100 relative overflow-hidden rounded-xl">
<img alt="Professional workspace" className="hover:grayscale-0 transition duration-700 [--fx-filter:blur(10px)_liquid-glass(0,10)_saturate(1.1)_noise(0.5,1,0)] mix-blend-normal w-full h-full object-cover grayscale-0" loading="lazy" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-6 left-6 bg-white p-6 shadow-xl max-w-xs border-l-4 border-accent">
<p className="font-serif text-2xl text-slate-900 mb-1 tracking-tight">Built on Trust</p>
<p className="text-xs uppercase tracking-widest text-neutral-500">Not Volume</p>
</div>
</div>
</div>
<div className="reveal delay-100">
<span className="text-accent font-serif italic text-lg mb-4 block">A Better Way</span>
<h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8 text-slate-900 tracking-tight">
              Most marketplaces are built around volume. We’re building around <span className="italic text-neutral-400">trust</span>.
            </h2>
<div className="space-y-6 text-lg border-l-2 border-accent pl-6 mb-10">
<p className="italic">"We are not trying to list everything. We are trying to feature what deserves attention."</p>
</div>
<p className="mb-8">OnlineBusiness.com is designed for people who want better opportunities, better presentation, and better context. That means stricter screening for exclusive listings, clearer labeling for curated ones, and useful content for people who are still learning the game.</p>
<ul className="space-y-3 mb-8 text-neutral-600">
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> Serious screening for exclusive listings</li>
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> Clear separation between exclusive and curated</li>
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> Educational content for smarter decisions</li>
</ul>
<a className="inline-flex items-center gap-2 text-slate-900 border-b border-slate-900 pb-1 hover:text-accent hover:border-accent transition-colors font-medium" href="#/about">
              Read Our Story
              <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-slate-900 text-white py-24 md:py-28" id="services">
<div className="section-wrap px-6 md:px-12 lg:px-20">
<div className="grid lg:grid-cols-[1fr_2fr] gap-16">
<div className="reveal">
<span className="text-accent font-serif italic text-lg mb-2 block">Clarity &amp; Trust</span>
<h2 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight">Every listing is <span className="italic text-zinc-50">clearly labeled</span>.</h2>
<p className="text-neutral-400 mb-8">We believe clarity builds trust. You should always know exactly what you’re looking at before making a decision.</p>
<a className="inline-flex items-center gap-2 text-white border-b border-accent pb-1 hover:text-accent transition-colors font-medium" href="#/about">
                Learn About Vetting
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 gap-px bg-slate-800 border border-slate-800">
<div className="block bg-slate-900 p-10 hover:bg-slate-800 transition-colors group reveal delay-100 cursor-default">
<iconify-icon className="text-accent mb-6" icon="solar:star-circle-linear" width="32"></iconify-icon>
<h3 className="text-xl font-serif mb-3 tracking-tight">Exclusive Listing</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">A business listed directly on OnlineBusiness.com and accepted through our rigorous vetting process.</p>
<span className="text-xs uppercase tracking-widest text-neutral-500">Highest Trust</span>
</div>
<div className="block bg-slate-900 p-10 hover:bg-slate-800 transition-colors group reveal delay-200 cursor-default">
<iconify-icon className="text-blue-500 mb-6" icon="solar:verified-check-linear" width="32"></iconify-icon>
<h3 className="text-xl font-serif mb-3 tracking-tight">Curated Listing</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">A selected business sourced from a broker, marketplace, or partner and reviewed before being featured here.</p>
<span className="text-xs uppercase tracking-widest text-neutral-500">Verified Origin</span>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6 md:py-28 md:px-12 lg:px-20 bg-white" id="learn">
<div className="section-wrap flex flex-col items-center text-center mb-14 reveal">
<span className="text-neutral-500 font-serif italic text-lg mb-2 block">Education</span>
<h2 className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tight mb-6">Learn the business of <span className="italic text-accent">online business</span></h2>
<a className="inline-flex items-center gap-2 text-slate-900 border-b border-slate-900 pb-1 hover:text-accent hover:border-accent transition-colors font-medium" href="#/blog">
            Explore the Learning Hub
            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="section-wrap grid md:grid-cols-3 gap-8">
<a className="group relative aspect-[3/4] overflow-hidden reveal delay-100" href="#/blog">
<img alt="Start and Grow" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
<div className="absolute bottom-0 left-0 p-8 text-white">
<h3 className="text-2xl font-serif mb-2 tracking-tight">Start &amp; Grow</h3>
<p className="text-sm text-slate-50 opacity-90">How to choose a model, validate demand, and build with intention.</p>
</div>
</a>
<a className="group relative aspect-[3/4] overflow-hidden reveal delay-200" href="#/blog">
<img alt="Buy a Business" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
<div className="absolute bottom-0 left-0 p-8 text-white">
<h3 className="text-2xl font-serif mb-2 tracking-tight">Buy</h3>
<p className="text-sm text-slate-50 opacity-90">What to look for, what to avoid, and how to evaluate a digital asset.</p>
</div>
</a>
<a className="group relative aspect-[3/4] overflow-hidden reveal delay-300" href="#/blog">
<img alt="Sell a Business" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
<div className="absolute bottom-0 left-0 p-8 text-white">
<h3 className="text-2xl font-serif mb-2 tracking-tight">Sell</h3>
<p className="text-sm text-slate-50 opacity-90">How to prepare, position, and improve your business before an exit.</p>
</div>
</a>
</div>
</section>

<section className="py-24 md:py-32 bg-neutral-50 border-y border-neutral-200" id="trust">
<div className="section-wrap px-6 md:px-12 lg:px-20 reveal">
<div className="text-center mb-16">
<span className="text-neutral-500 font-serif italic text-lg mb-2 block">Marketplace Standards</span>
<h2 className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tight">What serious buyers and sellers <span className="italic text-accent">care about</span></h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<article className="bg-white p-8 md:p-10 border border-neutral-200 shadow-sm relative group hover:-translate-y-2 transition-transform duration-300">
<iconify-icon className="text-neutral-100 absolute top-6 right-8 transition-colors duration-300 group-hover:text-accent/10" icon="solar:shield-check-bold" width="60"></iconify-icon>
<div className="flex gap-1 mb-6 relative z-10">
<iconify-icon className="text-accent" icon="solar:check-circle-bold" width="24"></iconify-icon>
</div>
<p className="text-lg md:text-xl font-serif leading-relaxed text-slate-800 mb-8 relative z-10">
                “Better listings, not more listings. We focus on quality over sheer volume, ensuring you spend time reviewing actual opportunities, not filtering through noise.”
              </p>
<div className="flex items-center gap-4 border-t border-neutral-100 pt-6">
<div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center font-serif text-accent text-xl"><iconify-icon icon="solar:target-linear"></iconify-icon></div>
<div>
<span className="font-semibold text-slate-900 tracking-wide text-sm block">Curation First</span>
<span className="text-xs text-neutral-500 mt-0.5 block">Higher Quality Opportunities</span>
</div>
</div>
</article>
<article className="bg-white p-8 md:p-10 border border-neutral-200 shadow-sm relative group hover:-translate-y-2 transition-transform duration-300">
<iconify-icon className="text-neutral-100 absolute top-6 right-8 transition-colors duration-300 group-hover:text-accent/10" icon="solar:tag-bold" width="60"></iconify-icon>
<div className="flex gap-1 mb-6 relative z-10">
<iconify-icon className="text-accent" icon="solar:check-circle-bold" width="24"></iconify-icon>
</div>
<p className="text-lg md:text-xl font-serif leading-relaxed text-slate-800 mb-8 relative z-10">
                “Clearer labels, less confusion. You will always know if a listing is an exclusive vetted opportunity or a curated deal from a trusted partner.”
              </p>
<div className="flex items-center gap-4 border-t border-neutral-100 pt-6">
<div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center font-serif text-accent text-xl"><iconify-icon icon="solar:eye-linear"></iconify-icon></div>
<div>
<span className="font-semibold text-slate-900 tracking-wide text-sm block">Absolute Transparency</span>
<span className="text-xs text-neutral-500 mt-0.5 block">No Hidden Agendas</span>
</div>
</div>
</article>
<article className="bg-white p-8 md:p-10 border border-neutral-200 shadow-sm relative group hover:-translate-y-2 transition-transform duration-300">
<iconify-icon className="text-neutral-100 absolute top-6 right-8 transition-colors duration-300 group-hover:text-accent/10" icon="solar:graph-up-bold" width="60"></iconify-icon>
<div className="flex gap-1 mb-6 relative z-10">
<iconify-icon className="text-accent" icon="solar:check-circle-bold" width="24"></iconify-icon>
</div>
<p className="text-lg md:text-xl font-serif leading-relaxed text-slate-800 mb-8 relative z-10">
                “Stronger trust from the first click. Better presentation and comprehensive metrics give buyers the exact context they need for smarter decisions.”
              </p>
<div className="flex items-center gap-4 border-t border-neutral-100 pt-6">
<div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center font-serif text-accent text-xl"><iconify-icon icon="solar:chart-square-linear"></iconify-icon></div>
<div>
<span className="font-semibold text-slate-900 tracking-wide text-sm block">Better Context</span>
<span className="text-xs text-neutral-500 mt-0.5 block">Smarter Acquisitions</span>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white border-b border-neutral-200" id="blog-home">
<div className="section-wrap reveal">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<span className="text-neutral-500 font-serif italic text-lg mb-2 block">Insights</span>
<h2 className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tight">Online Business <span className="italic text-accent">Journal</span></h2>
</div>
<a className="hidden md:flex items-center gap-2 text-slate-900 hover:text-accent transition-colors font-medium border-b border-transparent hover:border-accent pb-1" href="#/blog">
              Read All Articles <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">
<a className="group block" href="#/blog-single">
<div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden mb-6 rounded-md">
<img alt="Blog post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;w=800&amp;q=75"/>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mb-3 uppercase tracking-wider font-semibold">
<span>Start</span>
<span className="w-1 h-1 rounded-full bg-accent"></span>
<span>Evaluation</span>
</div>
<h3 className="font-serif text-2xl text-slate-900 mb-3 group-hover:text-accent transition-colors tracking-tight">How to Evaluate an Online Business Before You Buy</h3>
<p className="text-sm text-neutral-600 line-clamp-2">Discover the critical metrics and red flags you need to check before acquiring any digital asset.</p>
</a>
<a className="group block" href="#/blog-single">
<div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden mb-6 rounded-md">
<img alt="Blog post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;w=800&amp;q=75"/>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mb-3 uppercase tracking-wider font-semibold">
<span>Marketplace</span>
<span className="w-1 h-1 rounded-full bg-accent"></span>
<span>Trust</span>
</div>
<h3 className="font-serif text-2xl text-slate-900 mb-3 group-hover:text-accent transition-colors tracking-tight">Exclusive vs Curated Listings: What the Labels Mean</h3>
<p className="text-sm text-neutral-600 line-clamp-2">An in-depth look at our vetting process and why clarity is the most important feature of a marketplace.</p>
</a>
<a className="group block" href="#/blog-single">
<div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden mb-6 rounded-md">
<img alt="Blog post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;w=800&amp;q=75"/>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mb-3 uppercase tracking-wider font-semibold">
<span>Sell</span>
<span className="w-1 h-1 rounded-full bg-accent"></span>
<span>Preparation</span>
</div>
<h3 className="font-serif text-2xl text-slate-900 mb-3 group-hover:text-accent transition-colors tracking-tight">How to Prepare Your Online Business for a Better Exit</h3>
<p className="text-sm text-neutral-600 line-clamp-2">Demystifying the final steps of your business sale so you know exactly how to maximize your valuation.</p>
</a>
</div>
<div className="mt-10 md:hidden text-center">
<a className="inline-flex items-center gap-2 text-slate-900 font-medium border-b border-slate-900 pb-1" href="#/blog">
              Read All Articles <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-28 px-6 md:px-12 lg:px-20 bg-neutral-50 border-b border-neutral-200" id="vetted-process">
<div className="section-wrap reveal">
<div className="mb-8">
<span className="text-neutral-500 font-serif italic text-lg mb-2 block">Trust &amp; Safety</span>
<h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4 tracking-tight">What “vetted” <span className="italic text-accent">actually means</span></h2>
<p className="copy-max">For exclusive listings, we review the seller, the business, and the story behind the numbers before anything goes live.</p>
</div>
<div className="relative">
<div className="idx-frame flex flex-col md:flex-row overflow-hidden shadow-sm">
<div className="md:w-1/2 bg-slate-900 p-10 md:p-16 text-white flex flex-col justify-center relative overflow-hidden">
<div className="absolute inset-0 opacity-10">
<iconify-icon className="absolute -right-20 -bottom-20" height="100%" icon="solar:shield-check-bold" width="100%"></iconify-icon>
</div>
<h3 className="font-serif text-3xl md:text-4xl mb-6 tracking-tight relative z-10">The Standard for <br/><span className="italic text-accent">Exclusive Listings</span></h3>
<p className="text-neutral-300 relative z-10 text-lg">Curated listings are also reviewed before being featured, but they are always clearly marked as curated rather than exclusive.</p>
<a className="inline-flex items-center gap-2 text-white border-b border-accent pb-1 hover:text-accent transition-colors font-medium mt-8 w-max relative z-10" href="#/about">
                  Learn More About Vetting
                  <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="md:w-1/2 bg-white p-10 md:p-16 flex flex-col justify-center">
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 text-accent"><iconify-icon icon="solar:user-id-linear"></iconify-icon></div>
<div>
<h4 className="font-medium text-slate-900">Seller Identity Verification</h4>
<p className="text-sm text-neutral-500">Confirming real ownership and operational history.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 text-accent"><iconify-icon icon="solar:document-text-linear"></iconify-icon></div>
<div>
<h4 className="font-medium text-slate-900">Business Model Clarity</h4>
<p className="text-sm text-neutral-500">Ensuring the monetization strategy is transparent and sustainable.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 text-accent"><iconify-icon icon="solar:chart-square-linear"></iconify-icon></div>
<div>
<h4 className="font-medium text-slate-900">Traffic &amp; Revenue Documentation</h4>
<p className="text-sm text-neutral-500">Cross-referencing analytics with stated financials.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 text-accent"><iconify-icon icon="solar:danger-triangle-linear"></iconify-icon></div>
<div>
<h4 className="font-medium text-slate-900">Key Risk Assessment</h4>
<p className="text-sm text-neutral-500">Identifying platform dependencies, algo risks, or single points of failure.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white" id="contact">
<div className="section-wrap grid lg:grid-cols-2 gap-16 lg:gap-24">
<div className="reveal">
<span className="text-accent font-serif italic text-lg mb-2 block">For Owners</span>
<h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tight">Selling an online business? <br/><span className="italic text-neutral-400">Start with credibility</span>.</h2>
<p className="text-lg text-neutral-600 mb-12 max-w-md">If you own a real online business and want a more credible way to present it, OnlineBusiness.com is built for that.</p>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-900" icon="solar:pen-linear" width="20"></iconify-icon>
</div>
<div>
<span className="text-xs uppercase tracking-widest text-neutral-400 block mb-1 font-semibold">Step 1</span>
<span className="text-lg font-medium text-slate-900">Apply</span>
<p className="text-neutral-600 text-sm mt-1">Submit your business metrics and story for initial review.</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-900" icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<div>
<span className="text-xs uppercase tracking-widest text-neutral-400 block mb-1 font-semibold">Step 2</span>
<span className="text-lg font-medium text-slate-900">Get Reviewed</span>
<p className="text-neutral-600 text-sm mt-1">We review the seller, the business, and the financials to ensure quality.</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-900" icon="solar:rocket-linear" width="20"></iconify-icon>
</div>
<div>
<span className="text-xs uppercase tracking-widest text-neutral-400 block mb-1 font-semibold">Step 3</span>
<span className="text-lg font-medium text-slate-900">Get Listed</span>
<p className="text-neutral-600 text-sm mt-1">If approved, your business is published as an Exclusive Listing to serious buyers.</p>
</div>
</div>
</div>
</div>
<div className="bg-neutral-50 p-8 md:p-12 rounded-2xl border border-neutral-200 shadow-sm reveal delay-200">
<h3 className="font-serif text-2xl text-slate-900 mb-6 tracking-tight">Apply to Sell Your Business</h3>
<form action="#" className="space-y-6" id="lead-form" method="POST" novalidate="">
<div className="grid md:grid-cols-2 gap-6">
<div className="input-group relative">
<input className="w-full bg-white border border-neutral-200 px-4 py-3 rounded text-slate-900 focus:outline-none focus:border-accent placeholder-transparent" id="name" name="name" placeholder="Name" required="" type="text"/>
<label className="absolute left-3 top-3.5 text-neutral-500 pointer-events-none text-sm" htmlFor="name">Full Name</label>
</div>
<div className="input-group relative">
<input className="w-full bg-white border border-neutral-200 px-4 py-3 rounded text-slate-900 focus:outline-none focus:border-accent placeholder-transparent" id="email" name="email" placeholder="Email" required="" type="email"/>
<label className="absolute left-3 top-3.5 text-neutral-500 pointer-events-none text-sm" htmlFor="email">Email Address</label>
</div>
</div>
<div className="input-group relative">
<input className="w-full bg-white border border-neutral-200 px-4 py-3 rounded text-slate-900 focus:outline-none focus:border-accent placeholder-transparent" id="business_url" name="business_url" placeholder="Website URL" required="" type="url"/>
<label className="absolute left-3 top-3.5 text-neutral-500 pointer-events-none text-sm" htmlFor="business_url">Business URL</label>
</div>
<div className="input-group relative">
<select className="w-full bg-white border border-neutral-200 px-4 py-3 rounded text-slate-900 focus:outline-none focus:border-accent appearance-none" id="model" name="model" required="">
<option disabled="" selected="" value=""></option>
<option value="saas">SaaS</option>
<option value="ecommerce">E-commerce</option>
<option value="content">Content / Media</option>
<option value="agency">Agency / Services</option>
<option value="other">Other</option>
</select>
<label className="absolute left-3 top-3.5 text-neutral-500 pointer-events-none text-sm" htmlFor="model">Business Model</label>
<iconify-icon className="absolute right-4 top-4 text-neutral-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
<div className="input-group relative">
<textarea className="w-full bg-white border border-neutral-200 px-4 py-3 rounded text-slate-900 focus:outline-none focus:border-accent placeholder-transparent resize-none" id="message" name="message" placeholder="Revenue details" rows="4"></textarea>
<label className="absolute left-3 top-3.5 text-neutral-500 pointer-events-none text-sm" htmlFor="message">Briefly describe your revenue and profit</label>
</div>
<button className="w-full py-4 bg-slate-900 text-white font-medium hover:bg-accent transition-colors duration-300 flex items-center justify-center gap-2 group" id="submit-btn" type="submit">
                Apply to Sell
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<p aria-live="polite" className="text-xs text-center text-neutral-500 min-h-[1.25rem]" id="form-status">Not every business gets accepted. That's the point.</p>
</form>
</div>
</div>
</section>
</main>

<main className="page-view hidden pt-20" id="view-about">
<div className="bg-neutral-50 py-24 px-6 text-center border-b border-neutral-200">
<div className="section-wrap">
<span className="text-accent font-serif italic text-lg mb-2 block">Our Story</span>
<h1 className="text-5xl md:text-6xl font-serif text-slate-900 tracking-tight">Built by Experience</h1>
</div>
</div>
<div className="section-wrap py-24 px-6 md:px-12 lg:px-20 grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
<div>
<img alt="Michael Santiago" className="w-full aspect-[4/5] object-cover rounded-xl mb-8" loading="lazy" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="space-y-4 text-sm text-neutral-600">
<p><strong className="text-slate-900 block">Founder</strong> Michael Santiago</p>
<p><strong className="text-slate-900 block">Operating Since</strong> 1998</p>
<p><strong className="text-slate-900 block">Mission</strong> Bring trust and clarity to the business acquisition space.</p>
</div>
</div>
<div className="prose prose-neutral text-lg text-neutral-600 space-y-8">
<p className="text-2xl font-serif text-slate-900 leading-relaxed">"OnlineBusiness.com is being built by someone who has spent decades starting, growing, operating, and selling online businesses."</p>
<p>This is not theory. It comes from real experience, real pattern recognition, and a real belief that this space needs more trust, better standards, and better education.</p>
<p>Most business marketplaces are built around volume. They want to list as many businesses as possible, leaving buyers to filter through the noise. We’re building around trust. We want to list the right businesses, clearly label their origins, and provide the educational framework required to make smart decisions.</p>
<h3 className="text-2xl font-serif text-slate-900 mt-12 mb-4 tracking-tight">The Goal</h3>
<p>If you’re buying, the goal is to help you find better opportunities. If you’re selling, the goal is to help you present your business the right way to serious buyers.</p>
<div className="bg-neutral-50 p-8 border-l-4 border-accent italic text-base mt-8">
            When you use OnlineBusiness.com, you are accessing a marketplace engineered for clarity, backed by decades of actual operational experience.
          </div>
</div>
</div>
</main>

<main className="page-view hidden pt-20" id="view-blog">
<div className="bg-neutral-50 py-24 px-6 text-center border-b border-neutral-200">
<div className="section-wrap">
<span className="text-accent font-serif italic text-lg mb-2 block">Learning Hub</span>
<h1 className="text-5xl md:text-6xl font-serif text-slate-900 tracking-tight">The Business of Online Business</h1>
<p className="text-neutral-500 mt-6 max-w-xl mx-auto text-lg">Explore high-quality content built for operators, buyers, sellers, and anyone serious about digital assets.</p>
</div>
</div>
<div className="section-wrap py-24 px-6 md:px-12 lg:px-20">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">

<a className="group block" href="#/blog-single">
<div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden mb-6 rounded-md">
<img alt="Blog post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;w=800&amp;q=75"/>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mb-3 uppercase tracking-wider font-semibold">
<span>Start</span><span className="w-1 h-1 rounded-full bg-accent"></span><span>Evaluation</span>
</div>
<h3 className="font-serif text-2xl text-slate-900 mb-3 group-hover:text-accent transition-colors tracking-tight">How to Evaluate an Online Business Before You Buy</h3>
<p className="text-sm text-neutral-600 line-clamp-2">Discover the critical metrics and red flags you need to check before acquiring any digital asset.</p>
</a>

<a className="group block" href="#/blog-single">
<div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden mb-6 rounded-md">
<img alt="Blog post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;w=800&amp;q=75"/>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mb-3 uppercase tracking-wider font-semibold">
<span>Marketplace</span><span className="w-1 h-1 rounded-full bg-accent"></span><span>Trust</span>
</div>
<h3 className="font-serif text-2xl text-slate-900 mb-3 group-hover:text-accent transition-colors tracking-tight">Exclusive vs Curated Listings: What the Labels Mean</h3>
<p className="text-sm text-neutral-600 line-clamp-2">An in-depth look at our vetting process and why clarity is the most important feature of a marketplace.</p>
</a>

<a className="group block" href="#/blog-single">
<div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden mb-6 rounded-md">
<img alt="Blog post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;w=800&amp;q=75"/>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mb-3 uppercase tracking-wider font-semibold">
<span>Sell</span><span className="w-1 h-1 rounded-full bg-accent"></span><span>Preparation</span>
</div>
<h3 className="font-serif text-2xl text-slate-900 mb-3 group-hover:text-accent transition-colors tracking-tight">How to Prepare Your Online Business for a Better Exit</h3>
<p className="text-sm text-neutral-600 line-clamp-2">Demystifying the final steps of your business sale so you know exactly how to maximize your valuation.</p>
</a>

<a className="group block" href="#/blog-single">
<div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden mb-6 rounded-md">
<img alt="Blog post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&amp;fit=crop&amp;w=800&amp;q=75"/>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mb-3 uppercase tracking-wider font-semibold">
<span>Grow</span><span className="w-1 h-1 rounded-full bg-accent"></span><span>Leverage</span>
</div>
<h3 className="font-serif text-2xl text-slate-900 mb-3 group-hover:text-accent transition-colors tracking-tight">How to Start an Online Business With More Leverage</h3>
<p className="text-sm text-neutral-600 line-clamp-2">Understanding traffic, systems, and monetization positioning to scale without burning out.</p>
</a>
</div>

<div className="mt-20 flex justify-center gap-2">
<button className="w-10 h-10 flex items-center justify-center border border-neutral-300 text-neutral-400 cursor-not-allowed" disabled=""><iconify-icon icon="solar:arrow-left-linear"></iconify-icon></button>
<button className="w-10 h-10 flex items-center justify-center bg-slate-900 text-white font-medium">1</button>
<button className="w-10 h-10 flex items-center justify-center border border-neutral-300 text-slate-900 hover:bg-neutral-50 transition-colors font-medium">2</button>
<button className="w-10 h-10 flex items-center justify-center border border-neutral-300 text-slate-900 hover:bg-neutral-50 transition-colors"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
</main>

<main className="page-view hidden pt-20" id="view-blog-single">
<div className="max-w-4xl mx-auto px-6 py-20">
<a className="inline-flex items-center gap-2 text-neutral-500 hover:text-accent transition-colors text-sm font-semibold tracking-widest uppercase mb-10" href="#/blog">
<iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon> Back to Learning Hub
        </a>
<div className="flex items-center gap-3 text-sm text-accent mb-6 uppercase tracking-wider font-semibold">
<span>Marketplace Trust</span>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span className="text-neutral-400">Published</span>
</div>
<h1 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tight mb-10 leading-tight">Exclusive vs Curated Listings: What the Labels Mean</h1>
<img alt="Dashboard" className="w-full aspect-video object-cover rounded-xl mb-16" loading="lazy" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="max-w-3xl mx-auto prose prose-neutral prose-lg text-neutral-600 space-y-8">
<p className="text-xl leading-relaxed text-slate-800 font-medium">Most business marketplaces are built around volume. They want to list as many businesses as possible, leaving buyers to filter through the noise.</p>
<p>We’re building around trust. We believe clarity builds trust, and you should always know exactly what you’re looking at before making a decision to inquire about a digital asset.</p>
<h2 className="text-3xl font-serif text-slate-900 mt-12 mb-6 tracking-tight">The Exclusive Listing Standard</h2>
<p>An Exclusive Listing is a business listed directly on OnlineBusiness.com and accepted through our rigorous vetting process. For exclusive listings, we review the seller, the business, and the story behind the numbers before anything goes live.</p>
<h2 className="text-3xl font-serif text-slate-900 mt-12 mb-6 tracking-tight">The Curated Difference</h2>
<p>A Curated Listing is a selected business sourced from a broker, marketplace, or partner and reviewed before being featured here. While we still review curated listings for quality and credibility, they originate elsewhere, and we clearly label them as such so you know the origin of the deal.</p>
<blockquote className="border-l-4 border-accent pl-6 py-2 my-10 text-2xl font-serif text-slate-900 italic">
            "Better listings, not more listings. We focus on quality over sheer volume, ensuring you spend time reviewing actual opportunities."
          </blockquote>
<div className="mt-16 pt-8 border-t border-neutral-200 flex items-center gap-6">
<div className="w-16 h-16 rounded-full bg-neutral-200 overflow-hidden shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div>
<span className="block font-serif text-xl text-slate-900">Michael Santiago</span>
<span className="block text-sm text-neutral-500 mt-1">Founder, OnlineBusiness.com</span>
</div>
</div>
</div>
</div>
</main>
</div> 

<footer className="text-white bg-slate-900 border-slate-800 border-t pt-20 pb-10">
<div className="section-wrap px-6 md:px-12 lg:px-20">
<div className="mb-16 border-b border-slate-800 pb-16 flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<h3 className="text-3xl font-serif tracking-tight mb-2">Whether you want to buy, sell, or learn, start here.</h3>
<p className="text-neutral-400">OnlineBusiness.com is built to make the space more credible and useful for serious people.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 shrink-0">
<a className="px-8 py-4 bg-accent text-white text-sm font-semibold tracking-wide hover:bg-white hover:text-slate-900 transition-colors text-center" href="#listings">Browse Listings</a>
<a className="px-8 py-4 border border-white text-white text-sm font-semibold tracking-wide hover:bg-white hover:text-slate-900 transition-colors text-center" href="#contact">Sell Your Business</a>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
<div className="lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-white text-slate-900 flex items-center justify-center font-serif font-bold tracking-tight">O</div>
<span className="font-serif text-xl tracking-tight">OnlineBusiness.com</span>
</div>
<p className="text-neutral-400 text-sm mb-6 leading-relaxed max-w-sm">A curated marketplace for serious buyers and credible sellers, built by an entrepreneur since 1998.</p>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-widest mb-6">Marketplace</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#listings">Browse Listings</a></li>
<li><a className="hover:text-white transition-colors" href="#listings">Exclusive Listings</a></li>
<li><a className="hover:text-white transition-colors" href="#listings">Curated Listings</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-widest mb-6">Sellers</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#contact">Sell Your Business</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Seller Criteria</a></li>
<li><a className="hover:text-white transition-colors" href="#vetted-process">Vetting Process</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-widest mb-6">Learn</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#/blog">Start &amp; Grow</a></li>
<li><a className="hover:text-white transition-colors" href="#/blog">Buy &amp; Sell</a></li>
<li><a className="hover:text-white transition-colors" href="#/blog">Articles</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
<div className="flex flex-col md:flex-row items-center gap-4">
<p>© 2024 OnlineBusiness.com. All rights reserved.</p>
<span className="hidden md:inline">•</span>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<span className="hidden md:inline">•</span>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
<span>Marketplace Trust Standard</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
