import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



{
"@context":"https://schema.org",
"@type":"RealEstateAgent",
"name":"Alex Salazar Realty World Allensworth",
"telephone":"+1-562-980-6173",
"email":"salazaralexrealtor@gmail.com",
"address":{
"@type":"PostalAddress",
"streetAddress":"10803 Lakewood Blvd",
"addressLocality":"Downey",
"addressRegion":"CA",
"postalCode":"90241",
"addressCountry":"US"
},
"areaServed":["Downey","Whittier","Long Beach","Los Angeles County"]
}



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

    // Listings scroll buttons
    const listingSlider = document.getElementById("projects-scroll");
    document.getElementById("slide-prev").addEventListener("click", () => {
      listingSlider.scrollBy({ left: -420, behavior: "smooth" });
    });
    document.getElementById("slide-next").addEventListener("click", () => {
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

    // Select floating label
    const interest = document.getElementById("interest");
    interest.addEventListener("change", () => {
      if (interest.value) interest.classList.add("has-value");
      else interest.classList.remove("has-value");
    });

    // Form UX
    const form = document.getElementById("lead-form");
    const submitBtn = document.getElementById("submit-btn");
    const formStatus = document.getElementById("form-status");
    const phoneInput = document.getElementById("phone");

    function validPhone(phone) {
      const cleaned = phone.replace(/[^\d+]/g, "");
      return cleaned.length >= 10;
    }

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

    // Testimonials slider
    (function () {
      const sliderEl = document.getElementById("testimonial-slider");
      const track = document.getElementById("testimonial-track");
      const prevBtn = document.getElementById("testimonial-prev");
      const nextBtn = document.getElementById("testimonial-next");
      const dots = Array.from(document.querySelectorAll(".testimonial-dot"));

      if (!sliderEl || !track || !prevBtn || !nextBtn || !dots.length) return;

      const total = dots.length;
      let index = 0;
      let autoplayId = null;
      let startX = 0;
      let currentX = 0;
      let isDragging = false;

      function updateSlider() {
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, i) => {
          dot.classList.toggle("bg-neutral-900", i === index);
          dot.classList.toggle("bg-neutral-300", i !== index);
          dot.setAttribute("aria-current", i === index ? "true" : "false");
        });
      }

      function goTo(i) {
        index = (i + total) % total;
        updateSlider();
      }

      function next() { goTo(index + 1); }
      function prev() { goTo(index - 1); }

      function startAutoplay() {
        stopAutoplay();
        autoplayId = setInterval(next, 5000);
      }

      function stopAutoplay() {
        if (autoplayId) clearInterval(autoplayId);
        autoplayId = null;
      }

      nextBtn.addEventListener("click", () => { next(); startAutoplay(); });
      prevBtn.addEventListener("click", () => { prev(); startAutoplay(); });

      dots.forEach((dot, i) => {
        dot.addEventListener("click", () => { goTo(i); startAutoplay(); });
      });

      sliderEl.addEventListener("mouseenter", stopAutoplay);
      sliderEl.addEventListener("mouseleave", startAutoplay);

      sliderEl.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") { next(); startAutoplay(); }
        else if (e.key === "ArrowLeft") { prev(); startAutoplay(); }
      });

      sliderEl.addEventListener("touchstart", (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
        currentX = startX;
        stopAutoplay();
      }, { passive: true });

      sliderEl.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
      }, { passive: true });

      sliderEl.addEventListener("touchend", () => {
        if (!isDragging) return;
        const delta = currentX - startX;
        if (Math.abs(delta) > 50) {
          if (delta < 0) next();
          else prev();
        }
        isDragging = false;
        startAutoplay();
      });

      updateSlider();
      startAutoplay();
    })();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-md transition-all duration-300" id="site-nav">
<div className="section-wrap md:px-12 flex pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<a className="flex items-center gap-3" href="#">
<div className="w-10 h-10 bg-neutral-900 text-white flex items-center justify-center font-serif text-xl">A</div>
<div className="flex flex-col">
<span className="font-serif text-lg leading-none font-medium text-neutral-900">Alex Salazar</span>
<span className="text-[0.62rem] uppercase tracking-[0.18em] text-neutral-500 mt-1">Realty World Allensworth</span>
</div>
</a>
<ul className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-neutral-600">
<li><a className="hover:text-neutral-900 transition-colors" href="#properties">Properties</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#about">About</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#neighborhoods">Neighborhoods</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#testimonials">Reviews</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#idx-search">Search</a></li>
</ul>
<div className="hidden lg:flex items-center gap-4">
<a className="text-sm font-medium hover:text-gold transition-colors" href="tel:+15629806173">(562) 980-6173</a>
<a className="px-6 py-3 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors" href="#contact">
          Book Consultation
        </a>
</div>
<button aria-controls="mobile-menu" aria-expanded="false" aria-label="Menu" className="lg:hidden text-neutral-900" id="menu-btn">
<iconify-icon icon="lucide:menu" width="28"></iconify-icon>
</button>
</div>
</nav>

<aside className="fixed inset-0 z-[60] bg-white translate-x-full transition-transform duration-500 border-l border-neutral-200" id="mobile-menu">
<div className="pt-24 px-8 h-full flex flex-col">
<button aria-label="Close menu" className="absolute top-6 right-6 text-neutral-900" id="menu-close">
<iconify-icon icon="lucide:x" width="32"></iconify-icon>
</button>
<nav className="flex flex-col gap-8">
<a className="font-serif text-4xl text-neutral-900" href="#properties">Properties</a>
<a className="font-serif text-4xl text-neutral-900" href="#about">About</a>
<a className="font-serif text-4xl text-neutral-900" href="#services">Services</a>
<a className="font-serif text-4xl text-neutral-900" href="#neighborhoods">Neighborhoods</a>
<a className="font-serif text-4xl text-neutral-900" href="#testimonials">Reviews</a>
<a className="font-serif text-4xl text-neutral-900" href="#idx-search">Search</a>
<a className="font-serif text-4xl text-neutral-900" href="#contact">Contact</a>
</nav>
<div className="mt-auto pb-12">
<p className="text-sm text-neutral-500 mb-4">Get in touch</p>
<a className="block text-xl font-medium mb-2" href="mailto:salazaralexrealtor@gmail.com">salazaralexrealtor@gmail.com</a>
<a className="block text-xl font-medium" href="tel:+15629806173">(562) 980-6173</a>
</div>
</div>
</aside>

<header className="relative min-h-screen flex items-center pt-24 px-6 md:px-12 lg:px-20 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Modern home exterior in Los Angeles County" className="w-full h-full object-cover" decoding="async" fetchpriority="high" sizes="100vw" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;w=800&amp;q=75" srcset="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;w=800&amp;q=75 800w, https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;w=1200&amp;q=75 1200w, https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;w=1600&amp;q=75 1600w, https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;w=2200&amp;q=75 2200w"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25"></div>
</div>
<div className="section-wrap relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
<div className="text-white">
<div className="flex items-center gap-3 mb-6 opacity-0 animate-[fadeUp_0.8s_ease_0.1s_forwards]">
<div className="w-12 h-[1px] bg-gold"></div>
<span className="uppercase text-gold text-xs font-medium tracking-[0.2em]">Real Estate Consultant</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl leading-[1.08] mb-8 opacity-0 animate-[fadeUp_0.9s_ease_0.2s_forwards]">
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
<iconify-icon className="text-gold" icon="lucide:home" width="18"></iconify-icon>
<span>Realty World Allensworth</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-gold" icon="lucide:map-pin" width="18"></iconify-icon>
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
<h2 className="text-4xl md:text-5xl font-serif text-neutral-900">Featured <span className="italic text-neutral-500">Listings</span></h2>
</div>
<div className="flex gap-4 mt-6 md:mt-0">
<button aria-label="Scroll listings left" className="w-10 h-10 border border-neutral-300 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-colors" id="slide-prev">
<iconify-icon icon="lucide:arrow-left" width="18"></iconify-icon>
</button>
<button aria-label="Scroll listings right" className="w-10 h-10 border border-neutral-300 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-colors" id="slide-next">
<iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="overflow-x-auto no-scrollbar pl-6 md:pl-20 pb-8 cursor-grab active:cursor-grabbing" id="projects-scroll">
<div className="flex gap-8 w-max">
<article className="card w-[320px] md:w-[400px] group cursor-pointer reveal delay-100 overflow-hidden">
<div className="relative aspect-[4/3] bg-neutral-200">
<img alt="10803 Lakewood Blvd property" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;w=800&amp;q=75"/>
<div className="absolute top-4 left-4 bg-neutral-900 text-white text-xs font-medium px-3 py-1 uppercase tracking-wider">For Sale</div>
<div className="absolute bottom-4 right-4 bg-white/90 text-neutral-900 text-sm font-bold px-4 py-2">$1,250,000</div>
</div>
<div className="p-6">
<h3 className="text-xl font-serif text-neutral-900 mb-1 truncate">10803 Lakewood Blvd</h3>
<p className="text-sm text-neutral-500 mb-4">Downey, CA 90241</p>
<div className="flex justify-between border-t border-neutral-200 pt-4 text-sm text-neutral-600">
<div className="flex items-center gap-1"><iconify-icon icon="lucide:bed-double" width="16"></iconify-icon> 4 Beds</div>
<div className="flex items-center gap-1"><iconify-icon icon="lucide:bath" width="16"></iconify-icon> 3 Baths</div>
<div className="flex items-center gap-1"><iconify-icon icon="lucide:ruler" width="16"></iconify-icon> 2,800 sqft</div>
</div>
<button className="w-full mt-6 py-3 border border-neutral-300 text-neutral-900 text-sm font-medium hover:bg-neutral-900 hover:text-white transition-colors">View Details</button>
</div>
</article>
<article className="card w-[320px] md:w-[400px] group cursor-pointer reveal delay-200 overflow-hidden">
<div className="relative aspect-[4/3] bg-neutral-200">
<img alt="Modern downtown condo listing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&amp;fit=crop&amp;w=800&amp;q=75"/>
<div className="absolute top-4 left-4 bg-gold text-white text-xs font-medium px-3 py-1 uppercase tracking-wider">New Listing</div>
<div className="absolute bottom-4 right-4 bg-white/90 text-neutral-900 text-sm font-bold px-4 py-2">$895,000</div>
</div>
<div className="p-6">
<h3 className="text-xl font-serif text-neutral-900 mb-1 truncate">Modern Condo Downtown</h3>
<p className="text-sm text-neutral-500 mb-4">Los Angeles, CA 90015</p>
<div className="flex justify-between border-t border-neutral-200 pt-4 text-sm text-neutral-600">
<div className="flex items-center gap-1"><iconify-icon icon="lucide:bed-double" width="16"></iconify-icon> 2 Beds</div>
<div className="flex items-center gap-1"><iconify-icon icon="lucide:bath" width="16"></iconify-icon> 2 Baths</div>
<div className="flex items-center gap-1"><iconify-icon icon="lucide:ruler" width="16"></iconify-icon> 1,450 sqft</div>
</div>
<button className="w-full mt-6 py-3 border border-neutral-300 text-neutral-900 text-sm font-medium hover:bg-neutral-900 hover:text-white transition-colors">View Details</button>
</div>
</article>
<article className="card w-[320px] md:w-[400px] group cursor-pointer reveal delay-300 overflow-hidden">
<div className="relative aspect-[4/3] bg-neutral-200">
<img alt="Luxury estate listing in Whittier" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&amp;fit=crop&amp;w=800&amp;q=75"/>
<div className="absolute top-4 left-4 bg-neutral-900 text-white text-xs font-medium px-3 py-1 uppercase tracking-wider">Pending</div>
<div className="absolute bottom-4 right-4 bg-white/90 text-neutral-900 text-sm font-bold px-4 py-2">$1,850,000</div>
</div>
<div className="p-6">
<h3 className="text-xl font-serif text-neutral-900 mb-1 truncate">Luxury Estate</h3>
<p className="text-sm text-neutral-500 mb-4">Whittier, CA 90605</p>
<div className="flex justify-between border-t border-neutral-200 pt-4 text-sm text-neutral-600">
<div className="flex items-center gap-1"><iconify-icon icon="lucide:bed-double" width="16"></iconify-icon> 5 Beds</div>
<div className="flex items-center gap-1"><iconify-icon icon="lucide:bath" width="16"></iconify-icon> 4 Baths</div>
<div className="flex items-center gap-1"><iconify-icon icon="lucide:ruler" width="16"></iconify-icon> 4,200 sqft</div>
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
<img alt="Alex Salazar" className="hover:grayscale-0 transition duration-700 [--fx-filter:blur(10px)_liquid-glass(0,10)_saturate(1.1)_noise(0.5,1,0)] mix-blend-normal w-full h-full object-cover grayscale-0" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7184400b-3927-4b74-849d-3af1db0f57f1_3840w.jpg"/>
<div className="absolute bottom-6 left-6 bg-white p-6 shadow-xl max-w-xs">
<p className="font-serif text-2xl text-neutral-900 mb-1">Alex Salazar</p>
<p className="text-xs uppercase tracking-widest text-neutral-500">Realtor® • Lic #01234567</p>
</div>
</div>
</div>
<div className="reveal delay-100">
<span className="text-gold font-serif italic text-lg mb-4 block">About Me</span>
<h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8 text-neutral-900">
          Dedicated to your <br/><span className="italic text-neutral-400">best interests</span> and happiness.
        </h2>
<div className="space-y-6 text-lg border-l-2 border-gold pl-6 mb-10">
<p className="italic">
            "I take the time to listen carefully to understand my client’s needs, wants, and concerns. My genuine concern for my client’s best interests ensures the job is done right."
          </p>
</div>
<p className="mb-8">
          Based in Downey, CA, I help buyers, sellers, and investors navigate the market with clarity and confidence.
        </p>
<div className="grid grid-cols-2 gap-8 pt-8 border-t border-neutral-100">
<div>
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-gold" icon="lucide:check-circle-2" width="20"></iconify-icon>
<span className="font-semibold text-neutral-900">Expert Guidance</span>
</div>
<p className="text-sm text-neutral-500">Data-driven insights for smarter decisions.</p>
</div>
<div>
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-gold" icon="lucide:heart-handshake" width="20"></iconify-icon>
<span className="font-semibold text-neutral-900">Client First</span>
</div>
<p className="text-sm text-neutral-500">Your goals stay the priority from start to close.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-900 text-white py-24 md:py-28" id="services">
<div className="section-wrap px-6 md:px-12 lg:px-20">
<div className="grid lg:grid-cols-[1fr_2fr] gap-16">
<div className="reveal">
<span className="text-gold font-serif italic text-lg mb-2 block">Services</span>
<h2 className="text-4xl md:text-5xl font-serif mb-6">How I can help <span className="italic text-zinc-50">you</span>.</h2>
<p className="text-neutral-400 mb-8">From valuation to closing, get tailored support for buying, selling, and investing.</p>
<a className="inline-flex items-center gap-2 text-white border-b border-gold pb-1 hover:text-gold transition-colors" href="#contact">
            Start a conversation
            <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 gap-px bg-neutral-800 border border-neutral-800">
<div className="bg-neutral-900 p-10 hover:bg-neutral-800 transition-colors group reveal delay-100">
<iconify-icon className="text-gold mb-6" icon="lucide:home" width="32"></iconify-icon>
<h3 className="text-xl font-serif mb-3">Buying a Home</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">Access strong listings and negotiation expertise to secure the right home.</p>
<a className="text-xs uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors" href="#contact">Learn More</a>
</div>
<div className="bg-neutral-900 p-10 hover:bg-neutral-800 transition-colors group reveal delay-200">
<iconify-icon className="text-gold mb-6" icon="lucide:trending-up" width="32"></iconify-icon>
<h3 className="text-xl font-serif mb-3">Selling Property</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">Strategic pricing, premium presentation, and marketing to maximize value.</p>
<a className="text-xs uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors" href="#contact">Request Valuation</a>
</div>
<div className="bg-neutral-900 p-10 hover:bg-neutral-800 transition-colors group reveal delay-300">
<iconify-icon className="text-gold mb-6" icon="lucide:building-2" width="32"></iconify-icon>
<h3 className="text-xl font-serif mb-3">Real Estate Investing</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">Use local trends and market data to find strong long-term opportunities.</p>
<a className="text-xs uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors" href="#contact">View ROI Guide</a>
</div>
<div className="bg-neutral-900 p-10 hover:bg-neutral-800 transition-colors group reveal delay-400">
<iconify-icon className="text-gold mb-6" icon="lucide:map" width="32"></iconify-icon>
<h3 className="text-xl font-serif mb-3">Relocation</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">Moving in or out of Downey, get local guidance and smooth logistics.</p>
<a className="text-xs uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors" href="#contact">Get Help Moving</a>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6 md:py-28 md:px-12 lg:px-20 bg-white" id="neighborhoods">
<div className="section-wrap text-center mb-14 reveal">
<span className="text-neutral-500 font-serif italic text-lg mb-2 block">Local Expertise</span>
<h2 className="text-4xl md:text-5xl font-serif text-neutral-900">Neighborhood <span className="italic text-gold">Guides</span></h2>
</div>
<div className="section-wrap grid md:grid-cols-3 gap-8">
<a className="group relative aspect-[3/4] overflow-hidden reveal delay-100" href="#contact">
<img alt="Downey neighborhood" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" decoding="async" loading="lazy" src="https://imagescdn.homes.com/i2/GVjjMf49F_HYQ76NoP0I9ypKJSo80AfjYh3rgOu3t7U/117/downey-ca.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
<div className="absolute bottom-0 left-0 p-8 text-white">
<h3 className="text-2xl font-serif mb-2">Downey</h3>
<p className="text-sm text-slate-50 opacity-90">View available listings</p>
</div>
</a>
<a className="group relative aspect-[3/4] overflow-hidden reveal delay-200" href="#contact">
<img alt="Whittier neighborhood" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" decoding="async" loading="lazy" src="https://u.realgeeks.media/themanjarrez%20group/zac-gudakov-Ia4vLxgS1LQ-unsplash.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
<div className="absolute bottom-0 left-0 p-8 text-white">
<h3 className="text-2xl font-serif mb-2">Whittier</h3>
<p className="text-sm text-slate-50 opacity-90">View available listings</p>
</div>
</a>
<a className="group relative aspect-[3/4] overflow-hidden reveal delay-300" href="#contact">
<img alt="Long Beach neighborhood" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" decoding="async" loading="lazy" src="https://www.redwagonteam.com/wp-content/uploads/2022/11/Naples-Island-Homes-Estates-1024x577.webp?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
<div className="absolute bottom-0 left-0 p-8 text-white">
<h3 className="text-2xl font-serif mb-2">Long Beach</h3>
<p className="text-sm text-slate-50 opacity-90">View available listings</p>
</div>
</a>
</div>
</section>

<section className="py-24 md:py-28 bg-neutral-50 border-y border-neutral-200" id="testimonials">
<div className="max-w-5xl mx-auto px-6 reveal">
<div className="text-center mb-12">
<span className="text-neutral-500 font-serif italic text-lg mb-2 block">Client Reviews</span>
<h2 className="text-4xl md:text-5xl font-serif text-neutral-900">What clients <span className="italic text-gold">say</span></h2>
</div>
<div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm" id="testimonial-slider" tabindex="0">
<div className="flex transition-transform duration-500 ease-out" id="testimonial-track">
<article className="min-w-full p-8 md:p-12 text-center">
<div className="flex justify-center gap-1 mb-6">
<iconify-icon className="text-gold" icon="mdi:star" width="20"></iconify-icon>
<iconify-icon className="text-gold" icon="mdi:star" width="20"></iconify-icon>
<iconify-icon className="text-gold" icon="mdi:star" width="20"></iconify-icon>
<iconify-icon className="text-gold" icon="mdi:star" width="20"></iconify-icon>
<iconify-icon className="text-gold" icon="mdi:star" width="20"></iconify-icon>
</div>
<p className="text-2xl md:text-4xl font-serif leading-tight text-neutral-900 mb-8">“Alex found us our dream home in Downey under budget and made every step easy to understand.”</p>
<div className="flex flex-col items-center">
<span className="font-bold text-neutral-900 tracking-wide uppercase text-sm">The Martinez Family</span>
<span className="text-xs text-neutral-500 mt-1">Bought in Downey, CA</span>
</div>
</article>
<article className="min-w-full p-8 md:p-12 text-center">
<div className="flex justify-center gap-1 mb-6">
<iconify-icon className="text-gold" icon="mdi:star" width="20"></iconify-icon>
<iconify-icon className="text-gold" icon="mdi:star" width="20"></iconify-icon>
<iconify-icon className="text-gold" icon="mdi:star" width="20"></iconify-icon>
<iconify-icon className="text-gold" icon="mdi:star" width="20"></iconify-icon>
<iconify-icon className="text-gold" icon="mdi:star" width="20"></iconify-icon>
</div>
<p className="text-2xl md:text-4xl font-serif leading-tight text-neutral-900 mb-8">“We sold above asking price. Alex’s marketing and negotiation strategy was excellent.”</p>
<div className="flex flex-col items-center">
<span className="font-bold text-neutral-900 tracking-wide uppercase text-sm">J. Hernandez</span>
<span className="text-xs text-neutral-500 mt-1">Sold in Whittier, CA</span>
</div>
</article>
<article className="min-w-full p-8 md:p-12 text-center">
<div className="flex justify-center gap-1 mb-6">
<iconify-icon className="text-gold" icon="mdi:star" width="20"></iconify-icon>
<iconify-icon className="text-gold" icon="mdi:star" width="20"></iconify-icon>
<iconify-icon className="text-gold" icon="mdi:star" width="20"></iconify-icon>
<iconify-icon className="text-gold" icon="mdi:star" width="20"></iconify-icon>
<iconify-icon className="text-gold" icon="mdi:star" width="20"></iconify-icon>
</div>
<p className="text-2xl md:text-4xl font-serif leading-tight text-neutral-900 mb-8">“As first-time buyers we had lots of questions. Alex was patient, responsive, and always honest.”</p>
<div className="flex flex-col items-center">
<span className="font-bold text-neutral-900 tracking-wide uppercase text-sm">N. &amp; P. Lopez</span>
<span className="text-xs text-neutral-500 mt-1">Bought in Long Beach, CA</span>
</div>
</article>
<article className="min-w-full p-8 md:p-12 text-center">
<div className="flex justify-center gap-1 mb-6">
<iconify-icon className="text-gold" icon="mdi:star" width="20"></iconify-icon>
<iconify-icon className="text-gold" icon="mdi:star" width="20"></iconify-icon>
<iconify-icon className="text-gold" icon="mdi:star" width="20"></iconify-icon>
<iconify-icon className="text-gold" icon="mdi:star" width="20"></iconify-icon>
<iconify-icon className="text-gold" icon="mdi:star" width="20"></iconify-icon>
</div>
<p className="text-2xl md:text-4xl font-serif leading-tight text-neutral-900 mb-8">“Great investor guidance. We found a strong rental property and closed smoothly.”</p>
<div className="flex flex-col items-center">
<span className="font-bold text-neutral-900 tracking-wide uppercase text-sm">R. Kim</span>
<span className="text-xs text-neutral-500 mt-1">Investor Client, Los Angeles County</span>
</div>
</article>
</div>
<button aria-label="Previous testimonial" className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors flex items-center justify-center" id="testimonial-prev">
<iconify-icon icon="lucide:chevron-left" width="18"></iconify-icon>
</button>
<button aria-label="Next testimonial" className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors flex items-center justify-center" id="testimonial-next">
<iconify-icon icon="lucide:chevron-right" width="18"></iconify-icon>
</button>
</div>
<div className="flex items-center justify-center gap-2 mt-6" id="testimonial-dots">
<button aria-current="true" aria-label="Go to testimonial 1" className="testimonial-dot w-2.5 h-2.5 rounded-full bg-neutral-900"></button>
<button aria-current="false" aria-label="Go to testimonial 2" className="testimonial-dot w-2.5 h-2.5 rounded-full bg-neutral-300"></button>
<button aria-current="false" aria-label="Go to testimonial 3" className="testimonial-dot w-2.5 h-2.5 rounded-full bg-neutral-300"></button>
<button aria-current="false" aria-label="Go to testimonial 4" className="testimonial-dot w-2.5 h-2.5 rounded-full bg-neutral-300"></button>
</div>
</div>
</section>

<section className="py-24 md:py-28 px-6 md:px-12 lg:px-20 bg-white border-b border-neutral-200" id="idx-search">
<div className="section-wrap reveal">
<div className="mb-8">
<span className="text-neutral-500 font-serif italic text-lg mb-2 block">Live MLS Search</span>
<h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-4">Search the <span className="italic text-gold">latest listings</span></h2>
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
<h2 className="text-4xl md:text-6xl font-serif mb-8">Let's find your <br/><span className="italic text-neutral-400">place</span>.</h2>
<p className="text-lg text-neutral-600 mb-12 max-w-md">Ready to buy, sell, or invest? Schedule a free consultation to discuss your goals.</p>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-neutral-900" icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<div>
<span className="text-xs uppercase tracking-widest text-neutral-400 block mb-1">Office</span>
<span className="text-lg font-medium text-neutral-900">Realty World Allensworth</span>
<p className="text-neutral-600">10803 Lakewood Blvd.<br/>Downey, CA 90241</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-neutral-900" icon="lucide:phone" width="20"></iconify-icon>
</div>
<div>
<span className="text-xs uppercase tracking-widest text-neutral-400 block mb-1">Phone</span>
<a className="text-lg font-medium text-neutral-900 hover:text-gold transition-colors" href="tel:+15629806173">(562) 980-6173</a>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-neutral-900" icon="lucide:mail" width="20"></iconify-icon>
</div>
<div>
<span className="text-xs uppercase tracking-widest text-neutral-400 block mb-1">Email</span>
<a className="hover:text-gold transition-colors text-lg font-medium text-neutral-900" href="mailto:mattlex21@gmail.com">mattlex21@gmail.com</a>
</div>
</div>
</div>
</div>
<div className="bg-neutral-50 p-8 md:p-12 rounded-2xl border border-neutral-200 shadow-sm reveal delay-200">
<h3 className="font-serif text-2xl text-neutral-900 mb-6">Book a Consultation</h3>
<form action="https://api.web3forms.com/submit" className="space-y-6" id="lead-form" method="POST" novalidate="">
<input name="access_key" type="hidden" value="YOUR_WEB3FORMS_ACCESS_KEY"/>
<input name="subject" type="hidden" value="New Lead - Alex Salazar Realty World Allensworth"/>
<input name="from_name" type="hidden" value="Website Lead Form"/>
<input className="hidden" name="botcheck" style={{display: 'none'}} type="checkbox"/>
<div className="grid md:grid-cols-2 gap-6">
<div className="input-group relative">
<input autocomplete="name" className="w-full bg-white border border-neutral-200 px-4 py-3 rounded text-neutral-900 focus:outline-none focus:border-gold placeholder-transparent" id="name" name="name" placeholder="Name" required="" type="text"/>
<label className="absolute left-3 top-3.5 text-neutral-500 pointer-events-none text-sm" htmlFor="name">Full Name</label>
</div>
<div className="input-group relative">
<input autocomplete="tel" className="w-full bg-white border border-neutral-200 px-4 py-3 rounded text-neutral-900 focus:outline-none focus:border-gold placeholder-transparent" id="phone" name="phone" placeholder="Phone" required="" type="tel"/>
<label className="absolute left-3 top-3.5 text-neutral-500 pointer-events-none text-sm" htmlFor="phone">Phone Number</label>
</div>
</div>
<div className="input-group relative">
<input autocomplete="email" className="w-full bg-white border border-neutral-200 px-4 py-3 rounded text-neutral-900 focus:outline-none focus:border-gold placeholder-transparent" id="email" name="email" placeholder="Email" required="" type="email"/>
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
<iconify-icon className="absolute right-4 top-4 text-neutral-400 pointer-events-none" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
<div className="input-group relative">
<textarea className="w-full bg-white border border-neutral-200 px-4 py-3 rounded text-neutral-900 focus:outline-none focus:border-gold placeholder-transparent resize-none" id="message" name="message" placeholder="Message" rows="4"></textarea>
<label className="absolute left-3 top-3.5 text-neutral-500 pointer-events-none text-sm" htmlFor="message">Tell me about your goals</label>
</div>
<button className="w-full py-4 bg-neutral-900 text-white font-medium hover:bg-gold transition-colors duration-300 flex items-center justify-center gap-2 group" id="submit-btn" type="submit">
            Submit Request
            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
<p aria-live="polite" className="text-xs text-center text-neutral-500 min-h-[1.25rem]" id="form-status"></p>
<p className="text-[10px] text-center text-neutral-400">By submitting this form, you agree to our Privacy Policy.</p>
</form>
</div>
</div>
</section>

<footer className="text-white bg-neutral-900 border-neutral-800 border-t pt-20 pb-10">
<div className="section-wrap px-6 md:px-12 lg:px-20">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-white text-neutral-900 flex items-center justify-center font-serif font-bold">A</div>
<span className="font-serif text-xl">Alex Salazar</span>
</div>
<p className="text-neutral-400 text-sm mb-6">Helping you find your way home. Professional real estate services in Downey and Los Angeles County.</p>
<div className="flex gap-4">
<a aria-label="Instagram" className="text-white hover:text-gold transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a aria-label="Facebook" className="text-white hover:text-gold transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
<a aria-label="LinkedIn" className="text-white hover:text-gold transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-bold uppercase tracking-widest mb-6">Quick Links</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#properties">Properties</a></li>
<li><a className="hover:text-white transition-colors" href="#about">About</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#idx-search">MLS Search</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-bold uppercase tracking-widest mb-6">Services</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#contact">Buy a Home</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Sell Your Home</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Home Valuation</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Relocation</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-bold uppercase tracking-widest mb-6">Contact</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li className="flex items-start gap-3">
<iconify-icon className="shrink-0 mt-1" icon="lucide:map-pin" width="16"></iconify-icon>
<span>10803 Lakewood Blvd.<br/>Downey, CA 90241</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon icon="lucide:phone" width="16"></iconify-icon>
<span>(562) 980-6173</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon icon="lucide:mail" width="16"></iconify-icon>
<span>mattlex21@gmail.com</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
<div className="flex flex-col md:flex-row items-center gap-4">
<p>© 2026 Alex Salazar. All rights reserved.</p>
<span className="hidden md:inline">•</span>
<a className="hover:text-white" href="#">Privacy Policy</a>
<span className="hidden md:inline">•</span>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:shield-check" width="14"></iconify-icon>
<span>Equal Housing Opportunity</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
