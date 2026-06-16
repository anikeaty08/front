import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Icons
    if (window.lucide) lucide.createIcons();

    // Mobile menu
    const menuBtn = document.getElementById("menuBtn");
    const mobileNav = document.getElementById("mobileNav");
    if (menuBtn && mobileNav) {
      menuBtn.addEventListener("click", () => {
        mobileNav.classList.toggle("hidden");
      });
      mobileNav.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener("click", () => mobileNav.classList.add("hidden"));
      });
    }

    // Slider
    const slides = Array.from(document.querySelectorAll("[data-slide]"));
    const dots = Array.from(document.querySelectorAll("[data-dot]"));
    const prev = document.getElementById("prevSlide");
    const next = document.getElementById("nextSlide");
    let idx = 0;
    let timer = null;

    function renderSlide(i) {
      idx = (i + slides.length) % slides.length;
      slides.forEach((s, si) => {
        s.classList.toggle("opacity-100", si === idx);
        s.classList.toggle("opacity-0", si !== idx);
      });
      dots.forEach((d, di) => {
        d.classList.toggle("bg-white/70", di === idx);
        d.classList.toggle("bg-white/30", di !== idx);
      });
    }

    function startAuto() {
      stopAuto();
      timer = setInterval(() => renderSlide(idx + 1), 7000);
    }

    function stopAuto() {
      if (timer) clearInterval(timer);
      timer = null;
    }

    if (slides.length) {
      renderSlide(0);
      startAuto();

      if (prev) prev.addEventListener("click", () => { renderSlide(idx - 1); startAuto(); });
      if (next) next.addEventListener("click", () => { renderSlide(idx + 1); startAuto(); });

      dots.forEach((d) => {
        d.addEventListener("click", () => {
          const to = Number(d.getAttribute("data-dot") || "0");
          renderSlide(to);
          startAuto();
        });
      });
    }

    // Date min + open picker (where supported)
    const travelDate = document.getElementById("travelDate");
    const travelDateBtn = document.getElementById("travelDateBtn");
    if (travelDate) {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const dd = String(today.getDate()).padStart(2, "0");
      travelDate.min = `${yyyy}-${mm}-${dd}`;
    }
    if (travelDate && travelDateBtn) {
      travelDateBtn.addEventListener("click", () => {
        travelDate.focus();
        if (typeof travelDate.showPicker === "function") travelDate.showPicker();
      });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <link="preconnect" crossorigin="" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Playfair+Displayght@500;600;700&amp;family=Poppins:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>






<meta content="font-roboto,font-montserrat,font-poppins,font-instrument-serif,font-merriweather,fonticolage,font-jakarta,font-work-sans,font-pt-serif,font-space-mono,font-nunito,font-google-sans-flex,fontwald,font-dm-sans,font-cormorant,font-geist,font-playfair" name="disabled-font-classes"/>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400..800&amp;display=swap" id="all-fonts-link-font-newsreader" rel="stylesheet"/>
<style id="all-fonts-style-font-newsreader">.font-newsreader { font-family: 'Newsreader', serif !important; }</style>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-quicksand" rel="stylesheet"/>
<style id="all-fonts-style-font-quicksand">.font-quicksand { font-family: 'Quicksand', sans-serif !important; }</style>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-manrope" rel="stylesheet"/>
<style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-space-grotesk" rel="stylesheet"/>
<style id="all-fonts-style-font-space-grotesk">.font-space-grotesk { font-family: 'Space Grotesk', sans-serif !important; }</style>
<link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-geist-mono" rel="stylesheet"/>
<style id="all-fonts-style-font-geist-mono">.font-geist-mono { font-family: 'Geist Mono', monospace !important; }</style>

<div className="bg-[#1C2431] text-[#F6F4EF]">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between">
<p className="text-sm sm:text-base font-light font-quicksand">
          Bespoke luxury journeys — curated safaris, islands, and iconic landscapes.
        </p>
<div className="flex items-center gap-4 text-sm sm:text-base font-light font-[Poppins]">
<a className="inline-flex items-center gap-2 hover:text-white transition-colors" href="#book">
<i className="h-4 w-4" data-lucide="phone"></i>
<span className="text-sm sm:text-base font-medium font-quicksand">+254 700 000 000</span>
</a>
<span className="hidden sm:inline text-white/20 font-sans">|</span>
<a className="inline-flex items-center gap-2 hover:text-white transition-colors" href="#book">
<i className="h-4 w-4" data-lucide="mail"></i>
<span className="text-sm sm:text-base font-sans">reservations@attictravel.com</span>
</a>
</div>
</div>
</div>
</div>

<header className="sticky top-0 z-40 border-b border-black/5 bg-orange-950/80 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3" href="#">
<img alt="Attic Tours &amp; Travel Ltd." className="h-10 w-auto object-contain" onerror="this.onerror=null;this.src='https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg';" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b9e468fe-2e06-454b-b0f4-202ac5e5b590_320w.png"/>
</a>
<nav className="hidden lg:flex items-center gap-8 text-sm sm:text-base font-light text-[#1C2431] font-[Poppins]">
<a className="text-sm sm:text-base font-medium text-stone-50 hover:text-[#C9A86A] transition-colors font-sans" href="#about">About</a>
<a className="text-sm sm:text-base font-medium text-stone-50 hover:text-[#C9A86A] transition-colors font-quicksand" href="#tours">Tours</a>
<a className="text-sm sm:text-base font-medium text-stone-50 hover:text-[#C9A86A] transition-colors font-quicksand" href="#why">Why Us</a>
<a className="text-sm sm:text-base font-medium text-stone-50 hover:text-[#C9A86A] transition-colors font-quicksand" href="#testimonials">Testimonials</a>
<a className="text-sm sm:text-base font-medium text-stone-50 hover:text-[#C9A86A] transition-colors font-quicksand" href="#book">Book a Vacation</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#C9A86A] px-5 py-2.5 text-sm sm:text-base font-medium text-[#1C2431] shadow-sm hover:shadow-md hover:brightness-95 transition font-quicksand" href="#book">
            Plan your trip
          </a>
<button aria-label="Open menu" className="lg:hidden inline-flex items-center justify-center rounded border border-black/10 bg-white px-3 py-2.5 text-[#1C2431] shadow-sm hover:shadow-md transition" id="menuBtn">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="lg:hidden hidden pb-4" id="mobileNav">
<div className="rounded-2xl border border-black/10 bg-white shadow-sm">
<div className="flex flex-col p-3 font-[Poppins] text-sm sm:text-base">
<a className="rounded-xl px-3 py-2 hover:bg-[#F6F4EF] transition font-sans" href="#about">About</a>
<a className="rounded-xl px-3 py-2 hover:bg-[#F6F4EF] transition font-sans" href="#tours">Tours</a>
<a className="rounded-xl px-3 py-2 hover:bg-[#F6F4EF] transition font-sans" href="#why">Why Us</a>
<a className="rounded-xl px-3 py-2 hover:bg-[#F6F4EF] transition font-sans" href="#testimonials">Testimonials</a>
<a className="rounded-xl px-3 py-2 hover:bg-[#F6F4EF] transition font-sans" href="#book">Book</a>
<div className="px-3 pt-2">
<a className="inline-flex w-full items-center justify-center rounded-full bg-[#C9A86A] px-5 py-2.5 font-medium text-[#1C2431] shadow-sm hover:shadow-md hover:brightness-95 transition font-sans" href="#book">
                Plan your trip
              </a>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="relative min-h-[70vh] sm:min-h-[78vh] lg:min-h-[84vh]">

<div className="absolute inset-0">
<div className="absolute inset-0 opacity-100 transition-opacity duration-700 ease-out" data-slide="0">
<img alt="Luxury safari at sunset" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&amp;fit=crop&amp;w=2400&amp;q=80"/>
</div>
<div className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-out" data-slide="1">
<img alt="Private beach escape" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&amp;fit=crop&amp;w=2400&amp;q=80"/>
</div>
<div className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-out" data-slide="2">
<img alt="Epic mountain landscape" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&amp;fit=crop&amp;w=2400&amp;q=80"/>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-[#1C2431]/80 via-[#1C2431]/40 to-[#1C2431]/15"></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex min-h-[70vh] sm:min-h-[78vh] lg:min-h-[84vh] items-end pb-12 sm:pb-16 lg:pb-20">
<div className="max-w-3xl space-y-0">
<p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm sm:text-base font-medium text-[#F6F4EF] backdrop-blur font-quicksand mt-10 mb-10">
<span className="h-1.5 w-1.5 rounded-full bg-[#C9A86A]"></span>
              Curated journeys • Private guides • Seamless planning
            </p>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white font-newsreader font-light">
              Travel, elevated — luxury tours designed around you
            </h1>
<p className="mt-4 max-w-2xl text-base sm:text-lg font-light text-white/85 font-sans">
              From iconic safaris to secluded island escapes, we craft premium experiences with high-touch service and unforgettable detail.
            </p>
<div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A86A] px-6 py-3 text-sm sm:text-base font-medium text-[#1C2431] shadow-sm hover:shadow-md hover:brightness-95 transition font-sans" href="#book">
                Start planning
                <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm sm:text-base font-normal text-white ring-1 ring-white/20 hover:bg-white/15 transition backdrop-blur font-sans" href="#tours">
                Explore featured tours
                <i className="h-4 w-4" data-lucide="compass"></i>
</a>
</div>

<div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
<div className="rounded-2xl bg-white/10 px-4 py-3 backdrop-blur ring-1 ring-white/15">
<p className="text-xs sm:text-sm font-light text-white/75 font-sans">Destinations</p>
<p className="mt-1 text-lg sm:text-xl font-medium text-white font-sans">40+</p>
</div>
<div className="rounded-2xl bg-white/10 px-4 py-3 backdrop-blur ring-1 ring-white/15">
<p className="text-xs sm:text-sm font-light text-white/75 font-sans">Private tours</p>
<p className="mt-1 text-lg sm:text-xl font-medium text-white font-sans">Bespoke</p>
</div>
<div className="rounded-2xl bg-white/10 px-4 py-3 backdrop-blur ring-1 ring-white/15">
<p className="text-xs sm:text-sm font-light text-white/75 font-sans">Support</p>
<p className="mt-1 text-lg sm:text-xl font-medium text-white font-sans">24/7</p>
</div>
<div className="rounded-2xl bg-white/10 px-4 py-3 backdrop-blur ring-1 ring-white/15">
<p className="text-xs sm:text-sm font-light text-white/75 font-sans">Rating</p>
<p className="mt-1 text-lg sm:text-xl font-medium text-white font-sans">4.9</p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-5 left-0 right-0">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<button aria-label="Previous slide" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur ring-1 ring-white/15 hover:bg-white/15 transition" id="prevSlide">
<i className="h-5 w-5" data-lucide="chevron-left"></i>
</button>
<button aria-label="Next slide" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur ring-1 ring-white/15 hover:bg-white/15 transition" id="nextSlide">
<i className="h-5 w-5" data-lucide="chevron-right"></i>
</button>
</div>
<div className="flex items-center gap-2">
<button aria-label="Go to slide 1" className="h-2.5 w-8 rounded-full bg-white/70 transition" data-dot="0"></button>
<button aria-label="Go to slide 2" className="h-2.5 w-8 rounded-full bg-white/30 hover:bg-white/45 transition" data-dot="1"></button>
<button aria-label="Go to slide 3" className="h-2.5 w-8 rounded-full bg-white/30 hover:bg-white/45 transition" data-dot="2"></button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F6F4EF]" id="about">
<div className="mx-auto max-w-7xl px-4 pt-16 pb-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
<div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
<div className="lg:col-span-5">
<p className="text-sm sm:text-base font-medium text-[#C9A86A] font-sans">The Attic experience</p>
<h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#1C2431] font-newsreader font-light">
            Luxury travel that feels effortless
          </h2>
<p className="mt-5 text-base sm:text-base font-light text-[#2B2B2B]/80 font-sans">
            We design premium itineraries with handpicked stays, private transfers, and expert guides — all tailored to your pace.
            Expect editorial-level detail, warm hospitality, and seamless logistics from arrival to farewell.
          </p>
<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
<div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F4EF] text-[#1C2431] ring-1 ring-black/5">
<i className="h-5 w-5" data-lucide="sparkles"></i>
</span>
<p className="text-sm sm:text-base font-medium text-[#1C2431] font-sans">Bespoke itineraries</p>
</div>
<p className="mt-3 text-sm sm:text-base font-light text-[#2B2B2B]/75 font-sans">
                Built around your style, comfort, and timing.
              </p>
</div>
<div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F4EF] text-[#1C2431] ring-1 ring-black/5">
<i className="h-5 w-5" data-lucide="shield-check"></i>
</span>
<p className="text-sm sm:text-base font-medium text-[#1C2431] font-sans">Trusted partners</p>
</div>
<p className="mt-3 text-sm sm:text-base font-light text-[#2B2B2B]/75 font-sans">
                Verified operators and premium accommodations.
              </p>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
<div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
<div className="relative">
<img alt="Luxury resort" className="h-64 w-full object-cover sm:h-72" src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-xl sm:text-2xl tracking-tight text-white font-newsreader font-light">Signature stays</p>
<p className="mt-1 text-sm sm:text-base font-light text-white/85 font-sans">Villas, lodges, boutique hotels</p>
</div>
</div>
</div>
<div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
<div className="relative">
<img alt="Adventure experience" className="h-64 w-full object-cover sm:h-72" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa3b81e8-1fe7-45cd-b741-7a72bf135afd_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-xl sm:text-2xl tracking-tight text-white font-newsreader font-light">Immersive moments</p>
<p className="mt-1 text-sm sm:text-base font-light text-white/85 font-sans">Culture, cuisine, and adventure</p>
</div>
</div>
</div>
<div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 sm:col-span-2">
<div className="relative">
<img alt="Sunrise landscape" className="h-72 w-full object-cover sm:h-80" src="https://images.unsplash.com/photo-1590673751381-e0a3c31ef555?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#1C2431]/70 via-[#1C2431]/25 to-transparent"></div>
<div className="absolute inset-0 flex items-end p-6 sm:p-8">
<div className="max-w-xl">
<p className="text-2xl sm:text-3xl tracking-tight text-white font-newsreader font-light">
                      Crafted with taste, guided by expertise
                    </p>
<p className="mt-2 text-sm sm:text-base font-light text-white/85 font-sans">
                      Enjoy personalized pacing, discreet service, and a refined approach to discovery.
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white" id="tours">
<div className="mx-auto max-w-7xl px-4 pt-16 pb-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
<div className="max-w-2xl">
<p className="text-sm sm:text-base font-medium text-[#C9A86A] font-sans">Featured journeys</p>
<h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#1C2431] font-newsreader font-light">
            Destinations made extraordinary
          </h2>
<p className="mt-5 text-base sm:text-base font-light text-[#2B2B2B]/80 font-sans">
            Image-led itineraries built for high-end travelers — with private guides, premium stays, and unforgettable scenery.
          </p>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center rounded-full bg-[#1C2431] px-5 py-2.5 text-sm sm:text-base font-medium text-white shadow-sm hover:shadow-md hover:brightness-110 transition font-sans" href="#book">
            Request a custom itinerary
          </a>
</div>
</div>
<div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

<article className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 hover:shadow-md transition">
<div className="relative">
<img alt="Safari wildlife" className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] sm:h-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/63c126da-8452-4bae-a24b-b844e7527063_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent"></div>
<div className="absolute left-4 top-4">
<span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs sm:text-sm font-light text-white ring-1 ring-white/20 backdrop-blur font-sans">
<i className="h-4 w-4" data-lucide="binoculars"></i>
                Safari
              </span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="text-2xl tracking-tight text-white font-newsreader font-light">Golden Savanna</h3>
<p className="mt-1 text-sm sm:text-base font-light text-white/85 font-sans">Luxury lodge • Private game drives</p>
</div>
</div>
<div className="p-6">
<div className="flex items-center justify-between">
<p className="text-sm sm:text-base font-light text-[#2B2B2B]/70 font-sans">From $500</p>
<p className="text-sm sm:text-base font-medium text-[#1C2431] font-sans">7 nights</p>
</div>
<div className="mt-4 flex items-center justify-between">
<p className="text-base sm:text-lg font-medium text-[#1C2431] font-sans">Bespoke pricing</p>
<a className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#C9A86A] hover:text-[#1C2431] transition font-sans" href="#book">
                Enquire
                <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</article>

<article className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 hover:shadow-md transition">
<div className="relative">
<img alt="Beach at sunset" className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] sm:h-60" src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent"></div>
<div className="absolute left-4 top-4">
<span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs sm:text-sm font-light text-white ring-1 ring-white/20 backdrop-blur font-sans">
<i className="h-4 w-4" data-lucide="palmtree"></i>
                Beach
              </span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="text-2xl tracking-tight text-white font-newsreader font-light">Silk Coast Escape</h3>
<p className="mt-1 text-sm sm:text-base font-light text-white/85 font-sans">Private villa • Oceanfront dining</p>
</div>
</div>
<div className="p-6">
<div className="flex items-center justify-between">
<p className="text-sm sm:text-base font-light text-[#2B2B2B]/70 font-sans">From $550</p>
<p className="text-sm sm:text-base font-medium text-[#1C2431] font-sans">5 nights</p>
</div>
<div className="mt-4 flex items-center justify-between">
<p className="text-base sm:text-lg font-medium text-[#1C2431] font-sans">Bespoke pricing</p>
<a className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#C9A86A] hover:text-[#1C2431] transition font-sans" href="#book">
                Enquire
                <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</article>

<article className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 hover:shadow-md transition">
<div className="relative">
<img alt="Landscape adventure" className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] sm:h-60" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent"></div>
<div className="absolute left-4 top-4">
<span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs sm:text-sm font-light text-white ring-1 ring-white/20 backdrop-blur font-sans">
<i className="h-4 w-4" data-lucide="mountain"></i>
                Adventure
              </span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="text-2xl tracking-tight text-white font-newsreader font-light">Highlands &amp; Horizons</h3>
<p className="mt-1 text-sm sm:text-base font-light text-white/85 font-sans">Helicopter views • Scenic trails</p>
</div>
</div>
<div className="p-6">
<div className="flex items-center justify-between">
<p className="text-sm sm:text-base font-light text-[#2B2B2B]/70 font-sans">From $600</p>
<p className="text-sm sm:text-base font-medium text-[#1C2431] font-sans">9 nights</p>
</div>
<div className="mt-4 flex items-center justify-between">
<p className="text-base sm:text-lg font-medium text-[#1C2431] font-sans">Bespoke pricing</p>
<a className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#C9A86A] hover:text-[#1C2431] transition font-sans" href="#book">
                Enquire
                <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</article>
</div>

<div className="mt-12 rounded-3xl bg-[#F6F4EF] p-6 sm:p-8 lg:p-10 ring-1 ring-black/5">
<div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
<div className="lg:col-span-7">
<h3 className="text-2xl sm:text-3xl tracking-tight text-[#1C2431] font-newsreader font-light">
              Every itinerary is refined like a private editorial.
            </h3>
<p className="mt-3 text-base sm:text-base font-light text-[#2B2B2B]/80 font-sans">
              We balance iconic highlights with quiet luxuries — the hidden dinner reservation, the best room in the lodge, the timing that turns a view into a memory.
            </p>
</div>
<div className="lg:col-span-5">
<div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
<div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
<p className="text-xs sm:text-sm font-light text-[#2B2B2B]/70 font-sans">Planning</p>
<p className="mt-1 text-base sm:text-lg font-medium text-[#1C2431] font-sans">Concierge-led</p>
</div>
<div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
<p className="text-xs sm:text-sm font-light text-[#2B2B2B]/70 font-sans">Style</p>
<p className="mt-1 text-base sm:text-lg font-medium text-[#1C2431] font-sans">Premium</p>
</div>
<div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
<p className="text-xs sm:text-sm font-light text-[#2B2B2B]/70 font-sans">Pace</p>
<p className="mt-1 text-base sm:text-lg font-medium text-[#1C2431] font-sans">Your rhythm</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white" id="book">
<div className="mx-auto max-w-7xl px-4 pt-16 pb-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
<div className="relative overflow-hidden rounded-3xl bg-[#1C2431] shadow-sm ring-1 ring-black/10">
<div className="absolute inset-0 opacity-30">
<img alt="Travel storytelling background" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&amp;fit=crop&amp;w=2400&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-[#1C2431] via-[#1C2431]/80 to-[#1C2431]/60"></div>
<div className="relative p-8 sm:p-10 lg:p-12">
<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
<div className="lg:col-span-6">
<p className="text-sm sm:text-base font-medium text-[#C9A86A] font-sans">Booking request</p>
<h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white font-newsreader font-light">
                Ready to travel to your next journey?
              </h2>
<p className="mt-5 text-base sm:text-base font-light text-white/80 font-sans">
                Tell us what you’re dreaming of — we’ll respond with curated options, timelines, and premium recommendations.
              </p>
<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
<div className="rounded-2xl bg-white/10 p-5 backdrop-blur ring-1 ring-white/15">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-[#C9A86A]" data-lucide="clock"></i>
<p className="text-sm sm:text-base font-medium text-white font-sans">Fast response</p>
</div>
<p className="mt-2 text-sm sm:text-base font-light text-white/75 font-sans">Typically within 24 hours</p>
</div>
<div className="rounded-2xl bg-white/10 p-5 backdrop-blur ring-1 ring-white/15">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-[#C9A86A]" data-lucide="lock"></i>
<p className="text-sm sm:text-base font-medium text-white font-sans">Private &amp; discreet</p>
</div>
<p className="mt-2 text-sm sm:text-base font-light text-white/75 font-sans">Your details stay confidential</p>
</div>
</div>
</div>
<div className="lg:col-span-6">
<form className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-black/10">
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
<div>
<label className="block text-sm sm:text-base font-medium text-[#1C2431] font-sans">Full name</label>
<div className="relative mt-2">
<i className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#1C2431]/50" data-lucide="user"></i>
<input className="w-full rounded-2xl border border-black/10 bg-white py-3 pl-12 pr-4 text-sm sm:text-base font-light font-[Poppins] text-[#1C2431] placeholder:text-[#2B2B2B]/45 shadow-sm transition focus:border-[#C9A86A]/40 focus:outline-none focus:ring-2 focus:ring-[#C9A86A]/40" placeholder="Your name" type="text"/>
</div>
</div>
<div>
<label className="block text-sm sm:text-base font-medium text-[#1C2431] font-sans">Email</label>
<div className="relative mt-2">
<i className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#1C2431]/50" data-lucide="mail"></i>
<input className="w-full rounded-2xl border border-black/10 bg-white py-3 pl-12 pr-4 text-sm sm:text-base font-light font-[Poppins] text-[#1C2431] placeholder:text-[#2B2B2B]/45 shadow-sm transition focus:border-[#C9A86A]/40 focus:outline-none focus:ring-2 focus:ring-[#C9A86A]/40" placeholder="you@example.com" type="email"/>
</div>
</div>
<div>
<label className="block text-sm sm:text-base font-medium text-[#1C2431] font-sans">Preferred destination</label>
<div className="relative mt-2">
<i className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#1C2431]/50" data-lucide="map-pin"></i>
<input className="w-full rounded-2xl border border-black/10 bg-white py-3 pl-12 pr-4 text-sm sm:text-base font-light font-[Poppins] text-[#1C2431] placeholder:text-[#2B2B2B]/45 shadow-sm transition focus:border-[#C9A86A]/40 focus:outline-none focus:ring-2 focus:ring-[#C9A86A]/40" placeholder="Safari, islands, mountains..." type="text"/>
</div>
</div>
<div>
<label className="block text-sm sm:text-base font-medium text-[#1C2431] font-sans">Travel window</label>
<div className="relative mt-2">
<i className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#1C2431]/50" data-lucide="calendar"></i>
<input className="w-full rounded-2xl border border-black/10 bg-white py-3 pl-12 pr-12 text-sm sm:text-base font-light font-[Poppins] text-[#1C2431] shadow-sm transition focus:border-[#C9A86A]/40 focus:outline-none focus:ring-2 focus:ring-[#C9A86A]/40" id="travelDate" type="date"/>
<button aria-label="Open calendar" className="absolute right-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl hover:bg-[#F6F4EF] transition" id="travelDateBtn" type="button">
<iconify-icon className="text-[#1C2431]/70" icon="solar:calendar-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
</div>
<p className="mt-2 text-xs sm:text-sm font-light text-[#2B2B2B]/70 font-sans">Select a date from today onward.</p>
</div>
<div className="sm:col-span-2">
<label className="block text-sm sm:text-base font-medium text-[#1C2431] font-sans">Tell us your style</label>
<div className="relative mt-2">
<i className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-[#1C2431]/50" data-lucide="pen-line"></i>
<textarea className="w-full rounded-2xl border border-black/10 bg-white py-3 pl-12 pr-4 text-sm sm:text-base font-light font-[Poppins] text-[#1C2431] placeholder:text-[#2B2B2B]/45 shadow-sm transition focus:border-[#C9A86A]/40 focus:outline-none focus:ring-2 focus:ring-[#C9A86A]/40" placeholder="Private guides, room preferences, celebrations, must-see moments..." rows="4"></textarea>
</div>
</div>
<div className="sm:col-span-2 pt-1">
<button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C9A86A] px-6 py-3 text-sm sm:text-base font-medium text-[#1C2431] shadow-sm hover:shadow-md hover:brightness-95 transition font-sans" type="submit">
                      Send request
                      <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
<p className="mt-3 text-xs sm:text-sm font-light text-[#2B2B2B]/70 font-sans">
                      By submitting, you agree to be contacted about your itinerary request.
                    </p>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</section>

</link="preconnect">
    </>
  );
}
