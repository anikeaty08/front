import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
      
      views.forEach(view => {
        if (view.id === targetViewId) {
          view.classList.remove('hidden');
          view.classList.add('block');
        } else {
          view.classList.remove('block');
          view.classList.add('hidden');
        }
      });

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
    const interest = document.getElementById("interest");
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
    const phoneInput = document.getElementById("phone");

    function validPhone(phone) {
      const cleaned = phone.replace(/[^\d+]/g, "");
      return cleaned.length >= 10;
    }

    if(form) {
      form.addEventListener("submit", (e) => {
        formStatus.textContent = "";
        const phoneVal = phoneInput.value.trim();

        if (!validPhone(phoneVal)) {
          e.preventDefault();
          formStatus.textContent = "Please enter a valid phone number.";
          phoneInput.focus();
          return;
        }

        submitBtn.disabled = true;
        submitBtn.classList.add("opacity-80", "cursor-not-allowed");
        submitBtn.innerHTML = "Sending Request...";
        formStatus.textContent = "Submitting your request...";
      });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-md transition-all duration-300" id="site-nav">
<div className="section-wrap md:px-12 flex pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<a className="flex items-center gap-3" href="#/">
<div className="w-10 h-10 bg-neutral-900 text-white flex items-center justify-center font-serif text-xl tracking-tight">A</div>
<div className="flex flex-col">
<span className="font-serif text-lg leading-none font-medium text-neutral-900 tracking-tight">Alex Salazar</span>
<span className="text-[0.62rem] uppercase tracking-[0.18em] text-neutral-500 mt-1">Realty World Allensworth</span>
</div>
</a>
<ul className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-neutral-600">
<li><a className="hover:text-neutral-900 transition-colors" href="#properties">Properties</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#/about">About</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#/services">Services</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#/neighborhoods">Neighborhoods</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#testimonials">Reviews</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#/blog">Blog</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#idx-search">Search</a></li>
</ul>
<div className="hidden lg:flex items-center gap-4">
<a className="text-sm font-medium hover:text-gold transition-colors" href="tel:+15629806173">(562) 980-6173</a>
<a className="px-6 py-3 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors" href="#contact">
          Book Consultation
        </a>
</div>
<button aria-controls="mobile-menu" aria-expanded="false" aria-label="Menu" className="lg:hidden text-neutral-900" id="menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<aside className="fixed inset-0 z-[60] bg-white translate-x-full transition-transform duration-500 border-l border-neutral-200" id="mobile-menu">
<div className="pt-24 px-8 h-full flex flex-col overflow-y-auto">
<button aria-label="Close menu" className="absolute top-6 right-6 text-neutral-900" id="menu-close">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<nav className="flex flex-col gap-8">
<a className="font-serif text-4xl text-neutral-900 tracking-tight" href="#properties">Properties</a>
<a className="font-serif text-4xl text-neutral-900 tracking-tight" href="#/about">About</a>
<a className="font-serif text-4xl text-neutral-900 tracking-tight" href="#/services">Services</a>
<a className="font-serif text-4xl text-neutral-900 tracking-tight" href="#/neighborhoods">Neighborhoods</a>
<a className="font-serif text-4xl text-neutral-900 tracking-tight" href="#testimonials">Reviews</a>
<a className="font-serif text-4xl text-neutral-900 tracking-tight" href="#/blog">Blog</a>
<a className="font-serif text-4xl text-neutral-900 tracking-tight" href="#contact">Contact</a>
</nav>
<div className="mt-auto pb-12 pt-12">
<p className="text-sm text-neutral-500 mb-4">Get in touch</p>
<a className="block text-xl font-medium mb-2 tracking-tight" href="mailto:salazaralexrealtor@gmail.com">salazaralexrealtor@gmail.com</a>
<a className="block text-xl font-medium tracking-tight" href="tel:+15629806173">(562) 980-6173</a>
</div>
</div>
</aside>

<div id="app-content">

<main className="page-view block" id="view-home">

<header className="relative min-h-screen flex items-center pt-24 px-6 md:px-12 lg:px-20 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Modern home exterior" className="w-full h-full object-cover" decoding="async" fetchpriority="high" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;w=2200&amp;q=75"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25"></div>
</div>
<div className="section-wrap relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
<div className="text-white">
<div className="flex items-center gap-3 mb-6 opacity-0 animate-[fadeUp_0.8s_ease_0.1s_forwards]">
<div className="w-12 h-[1px] bg-gold"></div>
<span className="uppercase text-gold text-xs font-medium tracking-[0.2em]">Real Estate Consultant</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl leading-[1.08] mb-8 opacity-0 animate-[fadeUp_0.9s_ease_0.2s_forwards] tracking-tight">
              Find Your Dream <br/>Home With <span className="italic text-gold">Confidence</span>.
            </h1>
<p className="text-lg md:text-xl text-neutral-200 max-w-xl leading-relaxed mb-10 opacity-0 animate-[fadeUp_0.9s_ease_0.35s_forwards]">
              Expert local guidance for buying, selling, and investing in real estate. A dedicated partner who puts your goals first.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto opacity-0 animate-[fadeUp_0.9s_ease_0.5s_forwards]">
<a className="px-8 py-4 bg-gold text-white text-sm font-semibold tracking-wide hover:bg-white hover:text-neutral-900 transition-colors text-center" href="#properties">
                View Listings
              </a>
<a className="px-8 py-4 border border-white text-white text-sm font-semibold tracking-wide hover:bg-white hover:text-neutral-900 transition-colors text-center" href="#contact">
                Book Consultation
              </a>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full bg-neutral-900/85 backdrop-blur-sm border-t border-white/10 py-5 z-20 hidden md:block">
<div className="section-wrap px-6 md:px-12 flex items-center justify-between text-white/80 text-sm">
<div className="flex gap-10">
<div className="flex items-center gap-2">
<iconify-icon className="text-gold" icon="solar:home-2-linear" width="18"></iconify-icon>
<span>Realty World Allensworth</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-gold" icon="solar:map-point-linear" width="18"></iconify-icon>
<span>Downey, CA 90241</span>
</div>
</div>
<span className="tracking-wide">TRUSTED BY 100+ FAMILIES</span>
</div>
</div>
</header>

<section className="md:py-28 border-y bg-neutral-50 border-neutral-200 pt-24 pb-24" id="properties">
<div className="section-wrap px-6 md:px-12 lg:px-20 mb-12 flex flex-col md:flex-row justify-between items-end reveal">
<div>
<span className="text-neutral-500 font-serif italic text-lg mb-2 block">Exclusive Opportunities</span>
<h2 className="text-4xl md:text-5xl font-serif text-neutral-900 tracking-tight">Featured <span className="italic text-neutral-500">Listings</span></h2>
</div>
<div className="flex gap-4 mt-6 md:mt-0">
<button aria-label="Scroll listings left" className="w-10 h-10 border border-neutral-300 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-colors" id="slide-prev">
<iconify-icon icon="solar:arrow-left-linear" width="18"></iconify-icon>
</button>
<button aria-label="Scroll listings right" className="w-10 h-10 border border-neutral-300 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-colors" id="slide-next">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="overflow-x-auto no-scrollbar pl-6 md:pl-20 pb-8 cursor-grab active:cursor-grabbing" id="projects-scroll">
<div className="flex gap-8 w-max">

<article className="card w-[320px] md:w-[400px] group cursor-pointer reveal delay-100 overflow-hidden">
<div className="relative aspect-[4/3] bg-neutral-200">
<img alt="Property" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;w=800&amp;q=75"/>
<div className="absolute top-4 left-4 bg-neutral-900 text-white text-xs font-medium px-3 py-1 uppercase tracking-wider">For Sale</div>
<div className="absolute bottom-4 right-4 bg-white/90 text-neutral-900 text-sm font-semibold px-4 py-2">$1,250,000</div>
</div>
<div className="p-6">
<h3 className="text-xl font-serif text-neutral-900 mb-1 truncate tracking-tight">10803 Lakewood Blvd</h3>
<p className="text-sm text-neutral-500 mb-4">Downey, CA 90241</p>
<div className="flex justify-between border-t border-neutral-200 pt-4 text-sm text-neutral-600">
<div className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear" width="16"></iconify-icon> 4 Beds</div>
<div className="flex items-center gap-1"><iconify-icon icon="solar:bath-linear" width="16"></iconify-icon> 3 Baths</div>
<div className="flex items-center gap-1"><iconify-icon icon="solar:ruler-linear" width="16"></iconify-icon> 2,800 sqft</div>
</div>
<button className="w-full mt-6 py-3 border border-neutral-300 text-neutral-900 text-sm font-medium hover:bg-neutral-900 hover:text-white transition-colors">View Details</button>
</div>
</article>

<article className="card w-[320px] md:w-[400px] group cursor-pointer reveal delay-200 overflow-hidden">
<div className="relative aspect-[4/3] bg-neutral-200">
<img alt="Property" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&amp;fit=crop&amp;w=800&amp;q=75"/>
<div className="absolute top-4 left-4 bg-gold text-white text-xs font-medium px-3 py-1 uppercase tracking-wider">New</div>
<div className="absolute bottom-4 right-4 bg-white/90 text-neutral-900 text-sm font-semibold px-4 py-2">$895,000</div>
</div>
<div className="p-6">
<h3 className="text-xl font-serif text-neutral-900 mb-1 truncate tracking-tight">Modern Condo Downtown</h3>
<p className="text-sm text-neutral-500 mb-4">Los Angeles, CA 90015</p>
<div className="flex justify-between border-t border-neutral-200 pt-4 text-sm text-neutral-600">
<div className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear" width="16"></iconify-icon> 2 Beds</div>
<div className="flex items-center gap-1"><iconify-icon icon="solar:bath-linear" width="16"></iconify-icon> 2 Baths</div>
<div className="flex items-center gap-1"><iconify-icon icon="solar:ruler-linear" width="16"></iconify-icon> 1,450 sqft</div>
</div>
<button className="w-full mt-6 py-3 border border-neutral-300 text-neutral-900 text-sm font-medium hover:bg-neutral-900 hover:text-white transition-colors">View Details</button>
</div>
</article>

<article className="card w-[320px] md:w-[400px] group cursor-pointer reveal delay-300 overflow-hidden">
<div className="relative aspect-[4/3] bg-neutral-200">
<img alt="Property" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&amp;fit=crop&amp;w=800&amp;q=75"/>
<div className="absolute top-4 left-4 bg-neutral-900 text-white text-xs font-medium px-3 py-1 uppercase tracking-wider">Pending</div>
<div className="absolute bottom-4 right-4 bg-white/90 text-neutral-900 text-sm font-semibold px-4 py-2">$1,850,000</div>
</div>
<div className="p-6">
<h3 className="text-xl font-serif text-neutral-900 mb-1 truncate tracking-tight">Luxury Estate</h3>
<p className="text-sm text-neutral-500 mb-4">Whittier, CA 90605</p>
<div className="flex justify-between border-t border-neutral-200 pt-4 text-sm text-neutral-600">
<div className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear" width="16"></iconify-icon> 5 Beds</div>
<div className="flex items-center gap-1"><iconify-icon icon="solar:bath-linear" width="16"></iconify-icon> 4 Baths</div>
<div className="flex items-center gap-1"><iconify-icon icon="solar:ruler-linear" width="16"></iconify-icon> 4,200 sqft</div>
</div>
<button className="w-full mt-6 py-3 border border-neutral-300 text-neutral-900 text-sm font-medium hover:bg-neutral-900 hover:text-white transition-colors">View Details</button>
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
<img alt="Alex Salazar" className="hover:grayscale-0 transition duration-700 [--fx-filter:blur(10px)_liquid-glass(0,10)_saturate(1.1)_noise(0.5,1,0)] mix-blend-normal w-full h-full object-cover grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7184400b-3927-4b74-849d-3af1db0f57f1_3840w.jpg"/>
<div className="absolute bottom-6 left-6 bg-white p-6 shadow-xl max-w-xs">
<p className="font-serif text-2xl text-neutral-900 mb-1 tracking-tight">Alex Salazar</p>
<p className="text-xs uppercase tracking-widest text-neutral-500">Realtor® • Lic #01234567</p>
</div>
</div>
</div>
<div className="reveal delay-100">
<span className="text-gold font-serif italic text-lg mb-4 block">About Me</span>
<h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8 text-neutral-900 tracking-tight">
              Dedicated to your <br/><span className="italic text-neutral-400">best interests</span> and happiness.
            </h2>
<div className="space-y-6 text-lg border-l-2 border-gold pl-6 mb-10">
<p className="italic">"I take the time to listen carefully to understand my client’s needs, wants, and concerns. My genuine concern for my client’s best interests ensures the job is done right."</p>
</div>
<p className="mb-8">Based in Downey, CA, I help buyers, sellers, and investors navigate the market with clarity and confidence.</p>
<a className="inline-flex items-center gap-2 text-neutral-900 border-b border-neutral-900 pb-1 hover:text-gold hover:border-gold transition-colors font-medium" href="#/about">
              Read Full Bio
              <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-neutral-900 text-white py-24 md:py-28" id="services">
<div className="section-wrap px-6 md:px-12 lg:px-20">
<div className="grid lg:grid-cols-[1fr_2fr] gap-16">
<div className="reveal">
<span className="text-gold font-serif italic text-lg mb-2 block">Services</span>
<h2 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight">How I can help <span className="italic text-zinc-50">you</span>.</h2>
<p className="text-neutral-400 mb-8">From valuation to closing, get tailored support for buying, selling, and investing.</p>
<a className="inline-flex items-center gap-2 text-white border-b border-gold pb-1 hover:text-gold transition-colors font-medium" href="#/services">
                View All Services
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 gap-px bg-neutral-800 border border-neutral-800">
<a className="block bg-neutral-900 p-10 hover:bg-neutral-800 transition-colors group reveal delay-100" href="#/service-single">
<iconify-icon className="text-gold mb-6" icon="solar:home-2-linear" width="32"></iconify-icon>
<h3 className="text-xl font-serif mb-3 tracking-tight">Buying a Home</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">Access strong listings and negotiation expertise to secure the right home.</p>
<span className="text-xs uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">Learn More</span>
</a>
<a className="block bg-neutral-900 p-10 hover:bg-neutral-800 transition-colors group reveal delay-200" href="#/service-single">
<iconify-icon className="text-gold mb-6" icon="solar:graph-up-linear" width="32"></iconify-icon>
<h3 className="text-xl font-serif mb-3 tracking-tight">Selling Property</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">Strategic pricing, premium presentation, and marketing to maximize value.</p>
<span className="text-xs uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">Learn More</span>
</a>
</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6 md:py-28 md:px-12 lg:px-20 bg-white" id="neighborhoods">
<div className="section-wrap flex flex-col items-center text-center mb-14 reveal">
<span className="text-neutral-500 font-serif italic text-lg mb-2 block">Local Expertise</span>
<h2 className="text-4xl md:text-5xl font-serif text-neutral-900 tracking-tight mb-6">Neighborhood <span className="italic text-gold">Guides</span></h2>
<a className="inline-flex items-center gap-2 text-neutral-900 border-b border-neutral-900 pb-1 hover:text-gold hover:border-gold transition-colors font-medium" href="#/neighborhoods">
            Explore All Areas
            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="section-wrap grid md:grid-cols-3 gap-8">
<a className="group relative aspect-[3/4] overflow-hidden reveal delay-100" href="#/neighborhood-single">
<img alt="Downey neighborhood" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://imagescdn.homes.com/i2/GVjjMf49F_HYQ76NoP0I9ypKJSo80AfjYh3rgOu3t7U/117/downey-ca.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
<div className="absolute bottom-0 left-0 p-8 text-white">
<h3 className="text-2xl font-serif mb-2 tracking-tight">Downey</h3>
<p className="text-sm text-slate-50 opacity-90">View details &amp; listings</p>
</div>
</a>

<a className="group relative aspect-[3/4] overflow-hidden reveal delay-200" href="#/neighborhood-single">
<img alt="Whittier neighborhood" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://u.realgeeks.media/themanjarrez%20group/zac-gudakov-Ia4vLxgS1LQ-unsplash.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
<div className="absolute bottom-0 left-0 p-8 text-white">
<h3 className="text-2xl font-serif mb-2 tracking-tight">Whittier</h3>
<p className="text-sm text-slate-50 opacity-90">View details &amp; listings</p>
</div>
</a>
<a className="group relative aspect-[3/4] overflow-hidden reveal delay-300" href="#/neighborhood-single">
<img alt="Long Beach neighborhood" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://www.redwagonteam.com/wp-content/uploads/2022/11/Naples-Island-Homes-Estates-1024x577.webp?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
<div className="absolute bottom-0 left-0 p-8 text-white">
<h3 className="text-2xl font-serif mb-2 tracking-tight">Long Beach</h3>
<p className="text-sm text-slate-50 opacity-90">View details &amp; listings</p>
</div>
</a>
</div>
</section>

<section className="py-24 md:py-32 bg-neutral-50 border-y border-neutral-200" id="testimonials">
<div className="section-wrap px-6 md:px-12 lg:px-20 reveal">
<div className="text-center mb-16">
<span className="text-neutral-500 font-serif italic text-lg mb-2 block">Client Reviews</span>
<h2 className="text-4xl md:text-5xl font-serif text-neutral-900 tracking-tight">What clients <span className="italic text-gold">say</span></h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<article className="bg-white p-8 md:p-10 border border-neutral-200 shadow-sm relative group hover:-translate-y-2 transition-transform duration-300">
<iconify-icon className="text-neutral-100 absolute top-6 right-8 transition-colors duration-300 group-hover:text-gold/10" icon="solar:quote-right-bold" width="60"></iconify-icon>
<div className="flex gap-1 mb-6 relative z-10">
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-lg md:text-xl font-serif leading-relaxed text-neutral-800 mb-8 relative z-10">
                “Alex found us our dream home in Downey under budget and made every step easy to understand. We couldn't be happier.”
              </p>
<div className="flex items-center gap-4 border-t border-neutral-100 pt-6">
<div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center font-serif font-medium text-neutral-900 text-lg">M</div>
<div>
<span className="font-semibold text-neutral-900 tracking-wide text-sm block">The Martinez Family</span>
<span className="text-xs text-neutral-500 mt-0.5 block">Bought in Downey, CA</span>
</div>
</div>
</article>
<article className="bg-white p-8 md:p-10 border border-neutral-200 shadow-sm relative group hover:-translate-y-2 transition-transform duration-300">
<iconify-icon className="text-neutral-100 absolute top-6 right-8 transition-colors duration-300 group-hover:text-gold/10" icon="solar:quote-right-bold" width="60"></iconify-icon>
<div className="flex gap-1 mb-6 relative z-10">
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-lg md:text-xl font-serif leading-relaxed text-neutral-800 mb-8 relative z-10">
                “We sold above asking price. Alex’s marketing and negotiation strategy was excellent, managing everything flawlessly.”
              </p>
<div className="flex items-center gap-4 border-t border-neutral-100 pt-6">
<div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center font-serif font-medium text-neutral-900 text-lg">J</div>
<div>
<span className="font-semibold text-neutral-900 tracking-wide text-sm block">J. Hernandez</span>
<span className="text-xs text-neutral-500 mt-0.5 block">Sold in Whittier, CA</span>
</div>
</div>
</article>
<article className="bg-white p-8 md:p-10 border border-neutral-200 shadow-sm relative group hover:-translate-y-2 transition-transform duration-300">
<iconify-icon className="text-neutral-100 absolute top-6 right-8 transition-colors duration-300 group-hover:text-gold/10" icon="solar:quote-right-bold" width="60"></iconify-icon>
<div className="flex gap-1 mb-6 relative z-10">
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-gold" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-lg md:text-xl font-serif leading-relaxed text-neutral-800 mb-8 relative z-10">
                “As first-time buyers we had lots of questions. Alex was patient, highly responsive, and always honest with us.”
              </p>
<div className="flex items-center gap-4 border-t border-neutral-100 pt-6">
<div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center font-serif font-medium text-neutral-900 text-lg">N</div>
<div>
<span className="font-semibold text-neutral-900 tracking-wide text-sm block">N. &amp; P. Lopez</span>
<span className="text-xs text-neutral-500 mt-0.5 block">Bought in Long Beach, CA</span>
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
<span className="text-neutral-500 font-serif italic text-lg mb-2 block">Latest Insights</span>
<h2 className="text-4xl md:text-5xl font-serif text-neutral-900 tracking-tight">Real Estate <span className="italic text-gold">Journal</span></h2>
</div>
<a className="hidden md:flex items-center gap-2 text-neutral-900 hover:text-gold transition-colors font-medium border-b border-transparent hover:border-gold pb-1" href="#/blog">
              Read All Articles <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">
<a className="group block" href="#/blog-single">
<div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden mb-6 rounded-md">
<img alt="Blog post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&amp;fit=crop&amp;w=800&amp;q=75"/>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mb-3 uppercase tracking-wider font-semibold">
<span>Oct 12, 2023</span>
<span className="w-1 h-1 rounded-full bg-gold"></span>
<span>Market Trends</span>
</div>
<h3 className="font-serif text-2xl text-neutral-900 mb-3 group-hover:text-gold transition-colors tracking-tight">How to Prepare Your Home for a Fall Sale</h3>
<p className="text-sm text-neutral-600 line-clamp-2">Discover the top 5 things you need to do before listing your property this season to attract premium buyers.</p>
</a>
<a className="group block" href="#/blog-single">
<div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden mb-6 rounded-md">
<img alt="Blog post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&amp;fit=crop&amp;w=800&amp;q=75"/>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mb-3 uppercase tracking-wider font-semibold">
<span>Sep 28, 2023</span>
<span className="w-1 h-1 rounded-full bg-gold"></span>
<span>Investing</span>
</div>
<h3 className="font-serif text-2xl text-neutral-900 mb-3 group-hover:text-gold transition-colors tracking-tight">Understanding Downey's Growing Market</h3>
<p className="text-sm text-neutral-600 line-clamp-2">An in-depth look at why investors are turning their eyes toward Downey and surrounding neighborhoods.</p>
</a>
<a className="group block" href="#/blog-single">
<div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden mb-6 rounded-md">
<img alt="Blog post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&amp;fit=crop&amp;w=800&amp;q=75"/>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mb-3 uppercase tracking-wider font-semibold">
<span>Sep 15, 2023</span>
<span className="w-1 h-1 rounded-full bg-gold"></span>
<span>Home Buying</span>
</div>
<h3 className="font-serif text-2xl text-neutral-900 mb-3 group-hover:text-gold transition-colors tracking-tight">First-Time Buyer Guide: Closing Costs</h3>
<p className="text-sm text-neutral-600 line-clamp-2">Demystifying the final steps of your home purchase so you know exactly what to expect at the closing table.</p>
</a>
</div>
<div className="mt-10 md:hidden text-center">
<a className="inline-flex items-center gap-2 text-neutral-900 font-medium border-b border-neutral-900 pb-1" href="#/blog">
              Read All Articles <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-28 px-6 md:px-12 lg:px-20 bg-neutral-50 border-b border-neutral-200" id="idx-search">
<div className="section-wrap reveal">
<div className="mb-8">
<span className="text-neutral-500 font-serif italic text-lg mb-2 block">Live MLS Search</span>
<h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-4 tracking-tight">Search the <span className="italic text-gold">latest listings</span></h2>
<p className="copy-max">Browse active MLS listings directly on this page.</p>
</div>
<div className="relative">
<iframe className="idx-frame" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" src="https://alexsalazarrealtor.com/search_idx/" title="MLS Search"></iframe>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white" id="contact">
<div className="section-wrap grid lg:grid-cols-2 gap-16 lg:gap-24">
<div className="reveal">
<span className="text-gold font-serif italic text-lg mb-2 block">Contact</span>
<h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tight">Let's find your <br/><span className="italic text-neutral-400">place</span>.</h2>
<p className="text-lg text-neutral-600 mb-12 max-w-md">Ready to buy, sell, or invest? Schedule a free consultation to discuss your goals.</p>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-neutral-900" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<span className="text-xs uppercase tracking-widest text-neutral-400 block mb-1 font-semibold">Office</span>
<span className="text-lg font-medium text-neutral-900">Realty World Allensworth</span>
<p className="text-neutral-600">10803 Lakewood Blvd.<br/>Downey, CA 90241</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-neutral-900" icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<span className="text-xs uppercase tracking-widest text-neutral-400 block mb-1 font-semibold">Phone</span>
<a className="text-lg font-medium text-neutral-900 hover:text-gold transition-colors" href="tel:+15629806173">(562) 980-6173</a>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-neutral-900" icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<span className="text-xs uppercase tracking-widest text-neutral-400 block mb-1 font-semibold">Email</span>
<a className="hover:text-gold transition-colors text-lg font-medium text-neutral-900" href="mailto:mattlex21@gmail.com">mattlex21@gmail.com</a>
</div>
</div>
</div>
</div>
<div className="bg-neutral-50 p-8 md:p-12 rounded-2xl border border-neutral-200 shadow-sm reveal delay-200">
<h3 className="font-serif text-2xl text-neutral-900 mb-6 tracking-tight">Book a Consultation</h3>
<form action="https://api.web3forms.com/submit" className="space-y-6" id="lead-form" method="POST" novalidate="">
<input name="access_key" type="hidden" value="YOUR_WEB3FORMS_ACCESS_KEY"/>
<input name="subject" type="hidden" value="New Lead - Alex Salazar"/>
<input className="hidden" name="botcheck" style={{display: 'none'}} type="checkbox"/>
<div className="grid md:grid-cols-2 gap-6">
<div className="input-group relative">
<input className="w-full bg-white border border-neutral-200 px-4 py-3 rounded text-neutral-900 focus:outline-none focus:border-gold placeholder-transparent" id="name" name="name" placeholder="Name" required="" type="text"/>
<label className="absolute left-3 top-3.5 text-neutral-500 pointer-events-none text-sm" htmlFor="name">Full Name</label>
</div>
<div className="input-group relative">
<input className="w-full bg-white border border-neutral-200 px-4 py-3 rounded text-neutral-900 focus:outline-none focus:border-gold placeholder-transparent" id="phone" name="phone" placeholder="Phone" required="" type="tel"/>
<label className="absolute left-3 top-3.5 text-neutral-500 pointer-events-none text-sm" htmlFor="phone">Phone Number</label>
</div>
</div>
<div className="input-group relative">
<input className="w-full bg-white border border-neutral-200 px-4 py-3 rounded text-neutral-900 focus:outline-none focus:border-gold placeholder-transparent" id="email" name="email" placeholder="Email" required="" type="email"/>
<label className="absolute left-3 top-3.5 text-neutral-500 pointer-events-none text-sm" htmlFor="email">Email Address</label>
</div>
<div className="input-group relative">
<select className="w-full bg-white border border-neutral-200 px-4 py-3 rounded text-neutral-900 focus:outline-none focus:border-gold appearance-none" id="interest" name="interest" required="">
<option disabled="" selected="" value=""></option>
<option value="buy">I want to Buy</option>
<option value="sell">I want to Sell</option>
<option value="invest">I want to Invest</option>
</select>
<label className="absolute left-3 top-3.5 text-neutral-500 pointer-events-none text-sm" htmlFor="interest">I am interested in...</label>
<iconify-icon className="absolute right-4 top-4 text-neutral-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
<div className="input-group relative">
<textarea className="w-full bg-white border border-neutral-200 px-4 py-3 rounded text-neutral-900 focus:outline-none focus:border-gold placeholder-transparent resize-none" id="message" name="message" placeholder="Message" rows="4"></textarea>
<label className="absolute left-3 top-3.5 text-neutral-500 pointer-events-none text-sm" htmlFor="message">Tell me about your goals</label>
</div>
<button className="w-full py-4 bg-neutral-900 text-white font-medium hover:bg-gold transition-colors duration-300 flex items-center justify-center gap-2 group" id="submit-btn" type="submit">
                Submit Request
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<p aria-live="polite" className="text-xs text-center text-neutral-500 min-h-[1.25rem]" id="form-status"></p>
</form>
</div>
</div>
</section>
</main>

<main className="page-view hidden pt-20" id="view-about">
<div className="bg-neutral-50 py-24 px-6 text-center border-b border-neutral-200">
<div className="section-wrap">
<span className="text-gold font-serif italic text-lg mb-2 block">My Story</span>
<h1 className="text-5xl md:text-6xl font-serif text-neutral-900 tracking-tight">Meet Alex Salazar</h1>
</div>
</div>
<div className="section-wrap py-24 px-6 md:px-12 lg:px-20 grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
<div>
<img alt="Alex Salazar" className="w-full aspect-[4/5] object-cover rounded-xl mb-8" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7184400b-3927-4b74-849d-3af1db0f57f1_3840w.jpg"/>
<div className="space-y-4 text-sm text-neutral-600">
<p><strong className="text-neutral-900 block">License</strong> #01234567</p>
<p><strong className="text-neutral-900 block">Brokerage</strong> Realty World Allensworth</p>
<p><strong className="text-neutral-900 block">Areas Served</strong> Downey, Whittier, Long Beach, LA County</p>
<p><strong className="text-neutral-900 block">Specialties</strong> Residential Buying &amp; Selling, Investment Properties</p>
</div>
</div>
<div className="prose prose-neutral text-lg text-neutral-600 space-y-8">
<p className="text-2xl font-serif text-neutral-900 leading-relaxed">"Real estate is more than transactions; it's about helping families build wealth, create memories, and find their place in the world."</p>
<p>I am a dedicated Real Estate Professional based in Downey, CA, committed to providing my clients with an unparalleled experience. My approach is rooted in honesty, thorough market analysis, and a relentless drive to achieve your goals.</p>
<p>Over the years, I have navigated a rapidly changing market, helping first-time buyers find their starter homes, assisting growing families in upgrading, and guiding investors to lucrative opportunities.</p>
<h3 className="text-2xl font-serif text-neutral-900 mt-12 mb-4 tracking-tight">My Philosophy</h3>
<p>I take the time to listen carefully to understand my client’s needs, wants, and concerns. My genuine concern for my client’s best interests ensures the job is done right. No two transactions are the same, and I adapt my strategies to fit your unique timeline and financial objectives.</p>
<div className="bg-neutral-50 p-8 border-l-4 border-gold italic text-base mt-8">
            When you work with me, you are not just getting an agent—you are getting a dedicated partner who will advocate for you from the first showing to the closing table.
          </div>
</div>
</div>
</main>

<main className="page-view hidden pt-20" id="view-services">
<div className="bg-neutral-900 py-24 px-6 text-center border-b border-neutral-800 text-white">
<div className="section-wrap">
<span className="text-gold font-serif italic text-lg mb-2 block">Expertise</span>
<h1 className="text-5xl md:text-6xl font-serif tracking-tight">Tailored Real Estate Services</h1>
<p className="text-neutral-400 mt-6 max-w-2xl mx-auto text-lg">Comprehensive support for every stage of your real estate journey.</p>
</div>
</div>
<div className="section-wrap py-24 px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-8">
<a className="block border border-neutral-200 p-10 hover:border-gold hover:shadow-lg transition-all group bg-white" href="#/service-single">
<iconify-icon className="text-gold mb-6" icon="solar:home-2-linear" width="40"></iconify-icon>
<h3 className="text-2xl font-serif mb-4 text-neutral-900 tracking-tight">Buying a Home</h3>
<p className="text-neutral-600 mb-8 leading-relaxed">From identifying the perfect neighborhood to negotiating the best price, I make the buying process smooth and transparent.</p>
<span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-neutral-900 group-hover:text-gold transition-colors">
            Explore Service <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</a>
<a className="block border border-neutral-200 p-10 hover:border-gold hover:shadow-lg transition-all group bg-white" href="#/service-single">
<iconify-icon className="text-gold mb-6" icon="solar:graph-up-linear" width="40"></iconify-icon>
<h3 className="text-2xl font-serif mb-4 text-neutral-900 tracking-tight">Selling Your Property</h3>
<p className="text-neutral-600 mb-8 leading-relaxed">Maximize your return with strategic pricing, professional staging advice, and aggressive multi-channel marketing.</p>
<span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-neutral-900 group-hover:text-gold transition-colors">
            Explore Service <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</a>
<a className="block border border-neutral-200 p-10 hover:border-gold hover:shadow-lg transition-all group bg-white" href="#/service-single">
<iconify-icon className="text-gold mb-6" icon="solar:buildings-linear" width="40"></iconify-icon>
<h3 className="text-2xl font-serif mb-4 text-neutral-900 tracking-tight">Investment Properties</h3>
<p className="text-neutral-600 mb-8 leading-relaxed">Build wealth through real estate. Get data-driven insights to find properties with strong cap rates and appreciation potential.</p>
<span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-neutral-900 group-hover:text-gold transition-colors">
            Explore Service <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</a>
<a className="block border border-neutral-200 p-10 hover:border-gold hover:shadow-lg transition-all group bg-white" href="#/service-single">
<iconify-icon className="text-gold mb-6" icon="solar:map-linear" width="40"></iconify-icon>
<h3 className="text-2xl font-serif mb-4 text-neutral-900 tracking-tight">Relocation Support</h3>
<p className="text-neutral-600 mb-8 leading-relaxed">Moving to Southern California? I handle the logistics, neighborhood tours, and remote video walkthroughs to make it seamless.</p>
<span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-neutral-900 group-hover:text-gold transition-colors">
            Explore Service <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</a>
</div>
</main>

<main className="page-view hidden pt-20" id="view-service-single">
<div className="relative py-32 px-6 flex items-center justify-center text-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Buying a home" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-neutral-900/70"></div>
</div>
<div className="relative z-10 text-white max-w-3xl">
<a className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors text-sm font-semibold tracking-widest uppercase mb-6" href="#/services">
<iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon> All Services
          </a>
<h1 className="text-5xl md:text-6xl font-serif tracking-tight mb-6">Buying a Home</h1>
<p className="text-xl text-neutral-300">A seamless, strategic approach to finding and securing your perfect property.</p>
</div>
</div>
<div className="section-wrap py-24 px-6 md:px-12 lg:px-20 grid lg:grid-cols-[1fr_300px] gap-16">
<div className="space-y-12">
<div className="prose prose-neutral text-lg text-neutral-600">
<p>Purchasing a home is one of the most significant financial decisions you will ever make. My goal is to equip you with the knowledge, resources, and strategy needed to buy with absolute confidence.</p>
<p>From our initial consultation to the moment I hand you the keys, I act as your dedicated advisor. I monitor off-market opportunities, leverage my network to find hidden gems, and craft compelling offers that stand out in competitive markets.</p>
</div>
<div>
<h3 className="text-3xl font-serif text-neutral-900 mb-8 tracking-tight">The Buying Process</h3>
<div className="space-y-8">
<div className="flex gap-6">
<div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center font-serif text-xl shrink-0">1</div>
<div>
<h4 className="text-xl font-semibold text-neutral-900 mb-2">Discovery Consultation</h4>
<p className="text-neutral-600">We sit down to discuss your lifestyle needs, budget, preferred neighborhoods, and long-term goals.</p>
</div>
</div>
<div className="flex gap-6">
<div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center font-serif text-xl shrink-0">2</div>
<div>
<h4 className="text-xl font-semibold text-neutral-900 mb-2">Financing &amp; Pre-Approval</h4>
<p className="text-neutral-600">I connect you with trusted local lenders to secure your pre-approval, ensuring you are ready to act quickly.</p>
</div>
</div>
<div className="flex gap-6">
<div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center font-serif text-xl shrink-0">3</div>
<div>
<h4 className="text-xl font-semibold text-neutral-900 mb-2">Curated Tours</h4>
<p className="text-neutral-600">We tour properties that match your exact criteria. I provide objective insights on property conditions and value.</p>
</div>
</div>
<div className="flex gap-6">
<div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center font-serif text-xl shrink-0">4</div>
<div>
<h4 className="text-xl font-semibold text-neutral-900 mb-2">Negotiation &amp; Closing</h4>
<p className="text-neutral-600">I negotiate aggressively on your behalf, manage inspections, and guide you smoothly through the escrow process.</p>
</div>
</div>
</div>
</div>
</div>
<div className="space-y-8">
<div className="bg-neutral-50 p-8 border border-neutral-200">
<h4 className="font-serif text-2xl text-neutral-900 mb-4 tracking-tight">Ready to begin?</h4>
<p className="text-sm text-neutral-600 mb-6">Let's schedule a time to discuss your home buying goals.</p>
<a className="block w-full py-4 bg-neutral-900 text-white font-medium hover:bg-gold transition-colors text-center" href="#contact">
              Book Consultation
            </a>
</div>
</div>
</div>
</main>

<main className="page-view hidden pt-20" id="view-blog">
<div className="bg-neutral-50 py-24 px-6 text-center border-b border-neutral-200">
<div className="section-wrap">
<span className="text-gold font-serif italic text-lg mb-2 block">Journal</span>
<h1 className="text-5xl md:text-6xl font-serif text-neutral-900 tracking-tight">Real Estate Insights</h1>
<p className="text-neutral-500 mt-6 max-w-xl mx-auto text-lg">Market updates, buying guides, and seller tips for Southern California.</p>
</div>
</div>
<div className="section-wrap py-24 px-6 md:px-12 lg:px-20">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">

<a className="group block" href="#/blog-single">
<div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden mb-6 rounded-md">
<img alt="Blog post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&amp;fit=crop&amp;w=800&amp;q=75"/>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mb-3 uppercase tracking-wider font-semibold">
<span>Oct 12, 2023</span><span className="w-1 h-1 rounded-full bg-gold"></span><span>Market Trends</span>
</div>
<h3 className="font-serif text-2xl text-neutral-900 mb-3 group-hover:text-gold transition-colors tracking-tight">How to Prepare Your Home for a Fall Sale</h3>
<p className="text-sm text-neutral-600 line-clamp-2">Discover the top 5 things you need to do before listing your property this season to attract premium buyers.</p>
</a>

<a className="group block" href="#/blog-single">
<div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden mb-6 rounded-md">
<img alt="Blog post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&amp;fit=crop&amp;w=800&amp;q=75"/>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mb-3 uppercase tracking-wider font-semibold">
<span>Sep 28, 2023</span><span className="w-1 h-1 rounded-full bg-gold"></span><span>Investing</span>
</div>
<h3 className="font-serif text-2xl text-neutral-900 mb-3 group-hover:text-gold transition-colors tracking-tight">Understanding Downey's Growing Market</h3>
<p className="text-sm text-neutral-600 line-clamp-2">An in-depth look at why investors are turning their eyes toward Downey and surrounding neighborhoods.</p>
</a>

<a className="group block" href="#/blog-single">
<div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden mb-6 rounded-md">
<img alt="Blog post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&amp;fit=crop&amp;w=800&amp;q=75"/>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mb-3 uppercase tracking-wider font-semibold">
<span>Sep 15, 2023</span><span className="w-1 h-1 rounded-full bg-gold"></span><span>Home Buying</span>
</div>
<h3 className="font-serif text-2xl text-neutral-900 mb-3 group-hover:text-gold transition-colors tracking-tight">First-Time Buyer Guide: Closing Costs</h3>
<p className="text-sm text-neutral-600 line-clamp-2">Demystifying the final steps of your home purchase so you know exactly what to expect at the closing table.</p>
</a>

<a className="group block" href="#/blog-single">
<div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden mb-6 rounded-md">
<img alt="Blog post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&amp;fit=crop&amp;w=800&amp;q=75"/>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mb-3 uppercase tracking-wider font-semibold">
<span>Aug 30, 2023</span><span className="w-1 h-1 rounded-full bg-gold"></span><span>Selling</span>
</div>
<h3 className="font-serif text-2xl text-neutral-900 mb-3 group-hover:text-gold transition-colors tracking-tight">Staging Tips That Actually Increase Value</h3>
<p className="text-sm text-neutral-600 line-clamp-2">Simple, cost-effective staging methods that have been proven to increase offers and decrease days on market.</p>
</a>
</div>

<div className="mt-20 flex justify-center gap-2">
<button className="w-10 h-10 flex items-center justify-center border border-neutral-300 text-neutral-400 cursor-not-allowed" disabled=""><iconify-icon icon="solar:arrow-left-linear"></iconify-icon></button>
<button className="w-10 h-10 flex items-center justify-center bg-neutral-900 text-white font-medium">1</button>
<button className="w-10 h-10 flex items-center justify-center border border-neutral-300 text-neutral-900 hover:bg-neutral-50 transition-colors font-medium">2</button>
<button className="w-10 h-10 flex items-center justify-center border border-neutral-300 text-neutral-900 hover:bg-neutral-50 transition-colors"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
</main>

<main className="page-view hidden pt-20" id="view-blog-single">
<div className="max-w-4xl mx-auto px-6 py-20">
<a className="inline-flex items-center gap-2 text-neutral-500 hover:text-gold transition-colors text-sm font-semibold tracking-widest uppercase mb-10" href="#/blog">
<iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon> Back to Journal
        </a>
<div className="flex items-center gap-3 text-sm text-gold mb-6 uppercase tracking-wider font-semibold">
<span>Market Trends</span>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span className="text-neutral-400">Oct 12, 2023</span>
</div>
<h1 className="text-4xl md:text-6xl font-serif text-neutral-900 tracking-tight mb-10 leading-tight">How to Prepare Your Home for a Fall Sale</h1>
<img alt="Fall Home" className="w-full aspect-video object-cover rounded-xl mb-16" loading="lazy" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="max-w-3xl mx-auto prose prose-neutral prose-lg text-neutral-600 space-y-8">
<p className="text-xl leading-relaxed text-neutral-800 font-medium">Selling your home during the autumn months offers a unique set of opportunities. The weather is cooling down, the leaves are turning, and buyers are highly motivated to settle in before the winter holidays.</p>
<p>However, listing in the fall requires a different approach than the bustling spring market. Here are the essential steps you need to take to ensure your home stands out and commands top dollar this season.</p>
<h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6 tracking-tight">1. Maximize Natural Light</h2>
<p>As the days get shorter, natural light becomes a precious commodity. Before every showing, ensure all blinds and curtains are wide open. Clean your windows inside and out to let in as much sunshine as possible. Consider updating old light bulbs to warmer, brighter LEDs to ensure every room feels inviting even on cloudy afternoons.</p>
<h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6 tracking-tight">2. Keep Up with Curb Appeal</h2>
<p>Fall foliage is beautiful, but a yard full of dead leaves signals neglect to potential buyers. Stay on top of raking, clear your gutters, and ensure walkways are swept clean. Consider adding subtle autumn touches to your porch—a tasteful wreath or a few potted chrysanthemums can make a wonderful first impression without looking cluttered.</p>
<blockquote className="border-l-4 border-gold pl-6 py-2 my-10 text-2xl font-serif text-neutral-900 italic">
            "Buyers in the fall are often on a strict timeline. Presenting a meticulously maintained home signals that it's move-in ready."
          </blockquote>
<h2 className="text-3xl font-serif text-neutral-900 mt-12 mb-6 tracking-tight">3. Service the HVAC System</h2>
<p>Buyers will absolutely be checking the heating system during a fall home tour. Have your furnace or heat pump professionally serviced and change the filters before listing. Having the receipt on the counter during an open house provides peace of mind to buyers that the major systems are well cared for.</p>
<div className="mt-16 pt-8 border-t border-neutral-200 flex items-center gap-6">
<div className="w-16 h-16 rounded-full bg-neutral-200 overflow-hidden shrink-0">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7184400b-3927-4b74-849d-3af1db0f57f1_3840w.jpg"/>
</div>
<div>
<span className="block font-serif text-xl text-neutral-900">Alex Salazar</span>
<span className="block text-sm text-neutral-500 mt-1">Realtor® in Downey, CA</span>
</div>
</div>
</div>
</div>
</main>

<main className="page-view hidden pt-20" id="view-neighborhoods">
<div className="bg-neutral-900 py-24 px-6 text-center border-b border-neutral-800 text-white">
<div className="section-wrap">
<span className="text-gold font-serif italic text-lg mb-2 block">Locations</span>
<h1 className="text-5xl md:text-6xl font-serif tracking-tight">Explore Los Angeles County</h1>
<p className="text-neutral-400 mt-6 max-w-2xl mx-auto text-lg">In-depth guides to the communities I serve. Find the perfect area for your lifestyle.</p>
</div>
</div>
<div className="section-wrap py-24 px-6 md:px-12 lg:px-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<a className="group relative aspect-square overflow-hidden bg-neutral-900" href="#/neighborhood-single">
<img alt="Downey" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" loading="lazy" src="https://imagescdn.homes.com/i2/GVjjMf49F_HYQ76NoP0I9ypKJSo80AfjYh3rgOu3t7U/117/downey-ca.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 text-white w-full">
<h3 className="text-3xl font-serif mb-2 tracking-tight group-hover:text-gold transition-colors">Downey</h3>
<div className="flex items-center justify-between">
<p className="text-sm text-slate-200">View Guide</p>
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</a>
<a className="group relative aspect-square overflow-hidden bg-neutral-900" href="#/neighborhood-single">
<img alt="Whittier" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" loading="lazy" src="https://u.realgeeks.media/themanjarrez%20group/zac-gudakov-Ia4vLxgS1LQ-unsplash.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 text-white w-full">
<h3 className="text-3xl font-serif mb-2 tracking-tight group-hover:text-gold transition-colors">Whittier</h3>
<div className="flex items-center justify-between">
<p className="text-sm text-slate-200">View Guide</p>
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</a>
<a className="group relative aspect-square overflow-hidden bg-neutral-900" href="#/neighborhood-single">
<img alt="Long Beach" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" loading="lazy" src="https://www.redwagonteam.com/wp-content/uploads/2022/11/Naples-Island-Homes-Estates-1024x577.webp?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 text-white w-full">
<h3 className="text-3xl font-serif mb-2 tracking-tight group-hover:text-gold transition-colors">Long Beach</h3>
<div className="flex items-center justify-between">
<p className="text-sm text-slate-200">View Guide</p>
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</a>
</div>
</main>

<main className="page-view hidden pt-20" id="view-neighborhood-single">
<div className="relative py-32 md:py-48 px-6 flex items-end overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Downey" className="w-full h-full object-cover" loading="lazy" src="https://imagescdn.homes.com/i2/GVjjMf49F_HYQ76NoP0I9ypKJSo80AfjYh3rgOu3t7U/117/downey-ca.jpg?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
</div>
<div className="section-wrap relative z-10 text-white w-full">
<a className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-semibold tracking-widest uppercase mb-6" href="#/neighborhoods">
<iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon> All Neighborhoods
          </a>
<h1 className="text-6xl md:text-8xl font-serif tracking-tight mb-4">Downey, CA</h1>
<p className="text-xl text-neutral-200 max-w-2xl">A vibrant, historically rich community perfectly situated in the heart of Southern California.</p>
</div>
</div>
<div className="bg-neutral-900 py-8 border-b border-neutral-800 text-white">
<div className="section-wrap px-6 md:px-12 lg:px-20 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-neutral-800">
<div className="pl-0">
<span className="block text-xs uppercase tracking-widest text-neutral-400 mb-1">Avg Home Price</span>
<span className="text-3xl font-serif">$825,000</span>
</div>
<div className="pl-8">
<span className="block text-xs uppercase tracking-widest text-neutral-400 mb-1">Population</span>
<span className="text-3xl font-serif">111k</span>
</div>
<div className="pl-8">
<span className="block text-xs uppercase tracking-widest text-neutral-400 mb-1">School Rating</span>
<span className="text-3xl font-serif">Excellent</span>
</div>
<div className="pl-8">
<span className="block text-xs uppercase tracking-widest text-neutral-400 mb-1">Commute to LA</span>
<span className="text-3xl font-serif">25 min</span>
</div>
</div>
</div>
<div className="section-wrap py-24 px-6 md:px-12 lg:px-20 grid lg:grid-cols-[2fr_1fr] gap-16">
<div className="prose prose-neutral prose-lg text-neutral-600 space-y-8">
<h2 className="text-3xl font-serif text-neutral-900 tracking-tight">Living in Downey</h2>
<p>Downey is famously known as the birthplace of the Apollo space program, but today it is recognized as a thriving, family-friendly suburb of Los Angeles. With its strong local economy, excellent school district, and deeply rooted community feel, Downey offers a balanced lifestyle that is hard to find elsewhere in LA County.</p>
<p>The city features a mix of mid-century classic homes, modern townhouses, and expansive estates, providing options for every type of buyer. Residents enjoy a bustling downtown area, numerous parks, and proximity to major freeways that make commuting a breeze.</p>
<h3 className="text-2xl font-serif text-neutral-900 mt-10 tracking-tight">Why Buyers Love It</h3>
<ul>
<li><strong>Central Location:</strong> Situated right between LA and Orange County.</li>
<li><strong>Community Events:</strong> A robust calendar of local festivals, farmers markets, and civic events.</li>
<li><strong>Dining &amp; Shopping:</strong> The Downey Promenade offers extensive retail and dining options.</li>
</ul>
</div>
<div>
<div className="bg-neutral-50 p-8 border border-neutral-200 sticky top-32">
<h4 className="font-serif text-2xl text-neutral-900 mb-4 tracking-tight">Interested in Downey?</h4>
<p className="text-sm text-neutral-600 mb-6">Let's find the perfect property in this neighborhood.</p>
<a className="block w-full py-4 bg-neutral-900 text-white font-medium hover:bg-gold transition-colors text-center mb-4" href="#contact">
              View Available Homes
            </a>
</div>
</div>
</div>
</main>
</div> 

<footer className="text-white bg-neutral-900 border-neutral-800 border-t pt-20 pb-10">
<div className="section-wrap px-6 md:px-12 lg:px-20">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-white text-neutral-900 flex items-center justify-center font-serif font-bold tracking-tight">A</div>
<span className="font-serif text-xl tracking-tight">Alex Salazar</span>
</div>
<p className="text-neutral-400 text-sm mb-6 leading-relaxed">Helping you find your way home. Professional real estate services in Downey and Los Angeles County.</p>
<div className="flex gap-4">
<a aria-label="Instagram" className="text-white hover:text-gold transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a aria-label="LinkedIn" className="text-white hover:text-gold transition-colors" href="#"><iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-widest mb-6">Quick Links</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#properties">Properties</a></li>
<li><a className="hover:text-white transition-colors" href="#/about">About</a></li>
<li><a className="hover:text-white transition-colors" href="#/services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#/blog">Journal</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-widest mb-6">Services</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#/service-single">Buy a Home</a></li>
<li><a className="hover:text-white transition-colors" href="#/service-single">Sell Your Home</a></li>
<li><a className="hover:text-white transition-colors" href="#/service-single">Investment Properties</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-widest mb-6">Contact</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li className="flex items-start gap-3">
<iconify-icon className="shrink-0 mt-1" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>10803 Lakewood Blvd.<br/>Downey, CA 90241</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
<span>(562) 980-6173</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
<span>mattlex21@gmail.com</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
<div className="flex flex-col md:flex-row items-center gap-4">
<p>© 2026 Alex Salazar. All rights reserved.</p>
<span className="hidden md:inline">•</span>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<span className="hidden md:inline">•</span>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
<span>Equal Housing Opportunity</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
