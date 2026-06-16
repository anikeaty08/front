import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



[
  {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "name": "HAMMIES BARBERSHOP - Observatory",
    "image": "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1600&auto=format&fit=crop",
    "url": "https://hammiesbarbershop.co.za/",
    "telephone": "+27210000000",
    "priceRange": "$$$",
    "description": "Premium Barber Cape Town. Grooming Services in Observatory.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "142 Main Road",
      "addressLocality": "Observatory, Cape Town",
      "postalCode": "7925",
      "addressCountry": "ZA"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "218"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "name": "HAMMIES BARBERSHOP - De Waterkant",
    "image": "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1600&auto=format&fit=crop",
    "url": "https://hammiesbarbershop.co.za/",
    "telephone": "+27210000001",
    "priceRange": "$$$",
    "description": "Premium Barber Cape Town. Grooming Services in De Waterkant.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10 Napier Street",
      "addressLocality": "De Waterkant, Cape Town",
      "postalCode": "8001",
      "addressCountry": "ZA"
    }
  }
]



  // Initialize Lucide Icons
  document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons({ strokeWidth: 1.5 });
  });

  // Set Footer Year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Sidebar Menu Toggle Logic
  function toggleMenu(open) {
    const menu = document.getElementById('side-menu');
    const overlay = document.getElementById('menu-overlay');
    if (!menu || !overlay) return;
    
    if (open) {
      menu.classList.remove('translate-x-full', 'pointer-events-none');
      overlay.classList.remove('opacity-0', 'pointer-events-none');
      overlay.classList.add('opacity-100');
      menu.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    } else {
      menu.classList.add('translate-x-full');
      overlay.classList.remove('opacity-100');
      overlay.classList.add('opacity-0');
      menu.setAttribute('aria-hidden', 'true');
      
      setTimeout(() => {
        menu.classList.add('pointer-events-none');
        overlay.classList.add('pointer-events-none');
        document.body.style.overflow = '';
      }, 500);
    }
  }

  // Smooth Scroll Helper
  function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  // Scroll Reveal Animations
  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  });

  // Reviews Carousel Logic
  (function initReviews() {
    const reviews = [
      { name: "Julian M.", stars: 5, text: "The definitive barbershop in Cape Town. Flawless fade, immaculate environment. The executive package is worth every cent." },
      { name: "David K.", stars: 5, text: "Finally a place that understands precision. Clean lines, professional atmosphere, and you never feel rushed." },
      { name: "Marcus T.", stars: 5, text: "Switched to Hammies a year ago and haven't looked back. Consistent quality every single time. 10/10." },
      { name: "Evan R.", stars: 5, text: "Always arriving on time and leaving looking sharp. Incredible luxury experience right in my city." },
      { name: "Simon B.", stars: 5, text: "Top tier service. The hot towel finish and the attention to detail on the beard trim are unmatched." }
    ];

    const stage = document.getElementById('reviews-stage');
    const prevBtn = document.getElementById('reviews-prev');
    const nextBtn = document.getElementById('reviews-next');
    if (!stage || !prevBtn || !nextBtn) return;

    let startIdx = 0;
    
    function getItemsPerView() {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }

    function render() {
      const perView = getItemsPerView();
      let maxStart = reviews.length - perView;
      if (maxStart < 0) maxStart = 0;
      if (startIdx > maxStart) startIdx = maxStart;
      if (startIdx < 0) startIdx = 0;

      const visible = reviews.slice(startIdx, startIdx + perView);
      
      stage.innerHTML = visible.map(r => `
        <div class="bg-[#050505] border border-white/5 p-8 relative">
          <div class="flex items-center gap-1 text-[#c5aa65] mb-4">
            ${Array(r.stars).fill('<i data-lucide="star" class="w-3.5 h-3.5 fill-[#c5aa65] text-[#c5aa65]"></i>').join('')}
          </div>
          <p class="text-white/60 text-base font-light leading-relaxed mb-6">"${r.text}"</p>
          <p class="text-white font-normal text-sm tracking-widest uppercase">— ${r.name}</p>
        </div>
      `).join('');

      prevBtn.style.opacity = startIdx === 0 ? '0.3' : '1';
      prevBtn.style.pointerEvents = startIdx === 0 ? 'none' : 'auto';
      
      nextBtn.style.opacity = startIdx === maxStart ? '0.3' : '1';
      nextBtn.style.pointerEvents = startIdx === maxStart ? 'none' : 'auto';

      if(window.lucide) {
        lucide.createIcons({ strokeWidth: 1.5 });
      }
    }

    prevBtn.addEventListener('click', () => { startIdx--; render(); });
    nextBtn.addEventListener('click', () => { startIdx++; render(); });
    window.addEventListener('resize', render);
    
    render();
  })();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      &lt;&gt;
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>HAMMIES BARBERSHOP | Premium Grooming Cape Town</title>
<meta content="Cape Town’s premier grooming experience across two premium studios. Master barbers, luxury atmosphere, and precision grooming for the modern gentleman." name="description"/>
<link href="https://hammiesbarbershop.co.za/" rel="canonical"/>
<meta content="HAMMIES BARBERSHOP | Precision. Presence. Power." property="og:title"/>
<meta content="Cape Town’s premier grooming experience. Master barber expertise in Observatory and De Waterkant." property="og:description"/>
<meta content="website" property="og:type"/>
<meta content="https://hammiesbarbershop.co.za/" property="og:url"/>
<meta content="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" property="og:image"/>

<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&amp;family=Geist:wght@300;400;500&amp;display=swap" rel="stylesheet"/>




<style>
  html, body { height: 100%; }
  .font-playfair { font-family: 'Playfair Display', serif !important; }
  .font-geist { font-family: 'Geist', sans-serif !important; }
  
  .no-scroll { overflow: hidden !important; }
  
  .reveal {
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 800ms cubic-bezier(0.22,1,0.36,1), transform 800ms cubic-bezier(0.22,1,0.36,1);
    will-change: opacity, transform;
  }
  .reveal.is-in { opacity: 1; transform: translateY(0); }
  @media (prefers-reduced-motion: reduce) {
    .reveal, .reveal.is-in { transition: none !important; transform: none !important; opacity: 1 !important; }
  }
  
  .luxury-card {
    transition: transform 300ms cubic-bezier(0.22,1,0.36,1), box-shadow 300ms cubic-bezier(0.22,1,0.36,1), border-color 300ms cubic-bezier(0.22,1,0.36,1);
    will-change: transform;
  }
  @media (hover: hover) and (pointer: fine) {
    .luxury-card:hover {
      transform: translateY(-8px);
      border-color: rgba(197,170,101,0.5);
      box-shadow: 0 20px 40px rgba(0,0,0,0.8);
    }
  }

  /* Smooth gradient overlays */
  .vignette {
    background: radial-gradient(circle at center, transparent 0%, #050505 150%);
  }
</style>

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&amp;display=swap" id="all-fonts-link-font-playfair" rel="stylesheet"/><style id="all-fonts-style-font-playfair">.font-playfair { font-family: 'Playfair Display', serif !important; }</style>

<header className="fixed z-[80] bg-[#050505]/60 w-full border-white/5 border-b top-0 backdrop-blur-xl transition-all duration-300">
<div className="h-20 max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between reveal is-in">

<a aria-label="Home" className="flex items-center" href="#hero">
<img alt="Hammies Barbershop" className="object-repeat w-auto h-20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dfec72cc-cd5f-4bb4-b63d-ff2bfcc67c6f_3840w.webp?w=800&amp;q=80"/>
</a>

<button aria-label="Open Menu" className="flex items-center gap-3 text-white/80 hover:text-[#c5aa65] transition-colors uppercase tracking-widest text-sm font-medium" onclick="toggleMenu(true)">
<span className="hidden md:block">Menu</span>
<i className="w-7 h-7" data-lucide="menu"></i>
</button>
</div>
</header>

<div aria-hidden="true" className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[85] opacity-0 pointer-events-none transition-opacity duration-500" id="menu-overlay" onclick="toggleMenu(false)"></div>

<div aria-hidden="true" className="fixed top-0 right-0 bottom-0 w-full md:w-[450px] z-[90] translate-x-full pointer-events-none transition-transform duration-500 bg-[#050505] border-l border-white/5 flex flex-col shadow-2xl" id="side-menu">

<div className="h-20 px-8 flex items-center justify-end border-b border-white/5 bg-[#050505]">
<button className="text-white/80 hover:text-[#c5aa65] transition-colors flex items-center gap-3 uppercase tracking-widest text-sm font-medium" onclick="toggleMenu(false)">
<span>Close</span>
<i className="w-7 h-7" data-lucide="x"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto py-12 px-8 flex flex-col justify-between">
<nav className="flex flex-col gap-8 text-right uppercase tracking-widest text-lg md:text-xl font-normal">
<a className="hover:text-[#c5aa65] transition-colors" href="#about" onclick="toggleMenu(false)">Our Story</a>
<a className="hover:text-[#c5aa65] transition-colors" href="#services" onclick="toggleMenu(false)">Services</a>
<a className="hover:text-[#c5aa65] transition-colors" href="#gallery" onclick="toggleMenu(false)">Gallery</a>
<a className="hover:text-[#c5aa65] transition-colors" href="#reviews" onclick="toggleMenu(false)">Reputation</a>
<a className="hover:text-[#c5aa65] transition-colors" href="#terms" onclick="toggleMenu(false)">Policies &amp; Terms</a>
</nav>

<div className="mt-12 pt-12 border-t border-white/10 flex flex-col gap-8">
<button className="w-full py-4 border border-[#c5aa65]/50 text-[#c5aa65] hover:bg-[#c5aa65] hover:text-black transition-all uppercase tracking-widest text-sm font-medium text-center" onclick="toggleMenu(false); scrollToId('booking');">
        Book Appointment
      </button>
<div className="flex justify-end gap-6 text-sm font-normal tracking-widest uppercase">
<a className="text-white/50 hover:text-[#c5aa65] transition-colors" href="https://instagram.com" target="_blank">Instagram</a>
<a className="text-white/50 hover:text-[#c5aa65] transition-colors" href="https://wa.me/27210000000" target="_blank">WhatsApp</a>
</div>
</div>
</div>
</div>

<section className="relative h-[100dvh] flex flex-col justify-center md:justify-end pb-24 md:pb-32 overflow-hidden" id="hero">
<div className="absolute inset-0 z-0">
<img alt="Luxury Barbershop" className="bg-zinc-200 opacity-100 w-full h-full object-cover scale-105" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c97954e6-ef1d-4ce1-b4cd-c236723837b9_3840w.png"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/40 to-transparent"></div>
<div className="vignette absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="z-10 md:px-10 w-full max-w-7xl mr-auto ml-auto pt-20 pr-6 pl-6 relative">
<div className="max-w-2xl text-left reveal is-in">

<div className="flex items-center gap-3 mb-8">
<div className="flex items-center gap-1">
<i className="w-4 h-4 fill-[#c5aa65] text-[#c5aa65]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#c5aa65] text-[#c5aa65]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#c5aa65] text-[#c5aa65]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#c5aa65] text-[#c5aa65]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#c5aa65] text-[#c5aa65]" data-lucide="star-half"></i>
</div>
<span className="text-white/80 text-sm font-medium tracking-widest uppercase mt-0.5">4.5/5 Google Reviews</span>
</div>

<h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-light tracking-tight text-white mb-6 uppercase">
        Freshest Cuts <br/>In Cape Town.
      </h1>

<p className="text-white/70 text-lg md:text-xl font-light mb-10 leading-relaxed max-w-xl">
        Step into absolute refinement. We blend master barber craftsmanship with an elite, private atmosphere to engineer unshakeable confidence and presence.
      </p>

<button className="uppercase hover:bg-white transition-colors duration-300 text-sm font-medium text-black tracking-widest bg-[#c5aa65] pt-4 pr-8 pb-4 pl-8 cursor-pointer" onclick="scrollToId('booking');" role="button">
        Book Your Seat
      </button>
<button className="uppercase hover:bg-white transition-colors duration-300 text-sm font-medium text-black tracking-widest bg-slate-50 pt-4 pr-8 pb-4 pl-8 translate-x-4" onclick="scrollToId('services')">
        VIEW OUR SERVICES
      </button>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#050505] reveal" id="about">
<div className="max-w-7xl mx-auto px-6 md:px-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative aspect-[3/4] overflow-hidden rounded-none reveal">
<img alt="Master Barber" className="grayscale-[30%] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/156892c0-a603-4a0e-8e22-94890e35048a_1600w.webp?w=800&amp;q=80"/>
<div className="absolute inset-0 border border-white/10 m-4 pointer-events-none"></div>
</div>

<div className="reveal">
<p className="text-[#c5aa65] uppercase tracking-widest text-sm font-normal mb-4">The Brand</p>
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-white font-playfair font-light leading-tight mb-8">
          A Grooming Authority.
        </h2>
<p className="text-white/60 text-base md:text-lg font-light leading-relaxed mb-6">
          With over 20 years of mastery, Hammies Barbershop stands as Cape Town’s definitive destination for men's grooming. We don't just cut hair; we engineer confidence. 
        </p>
<p className="text-white/60 text-base md:text-lg font-light leading-relaxed mb-10">
          Trusted by professionals, creatives, and athletes, our Cape Town studios offer a sanctuary where traditional craftsmanship meets modern sophistication.
        </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-[#c5aa65] shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<div>
<p className="text-white font-normal text-base tracking-wide uppercase">Master Barber Expertise</p>
<p className="text-white/50 text-sm font-light mt-1">Decades of refined technique and style architecture.</p>
</div>
</li>
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-[#c5aa65] shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<div>
<p className="text-white font-normal text-base tracking-wide uppercase">Uncompromising Quality</p>
<p className="text-white/50 text-sm font-light mt-1">Premium products and meticulous attention to detail.</p>
</div>
</li>
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-[#c5aa65] shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<div className="">
<p className="text-white font-normal text-base tracking-wide uppercase">Private Atmosphere</p>
<p className="text-white/50 text-sm font-light mt-1">A structured, masculine environment designed for relaxation.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#0a0a0a] border-y border-white/5 reveal" id="services">
<div className="max-w-7xl mx-auto px-6 md:px-10 text-center reveal">
<p className="text-[#c5aa65] uppercase tracking-widest text-sm font-normal mb-4">Services</p>
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-white font-playfair font-light mb-6">
      Precision Executed.
    </h2>
<p className="max-w-2xl mx-auto text-white/50 text-base md:text-lg font-light mb-16">
      Select from our curated menu of premium grooming services. Each appointment includes a consultation and hot towel finish.
    </p>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left reveal">

<div className="luxury-card bg-[#050505] p-8 border border-white/5 relative">
<div className="flex justify-between items-start mb-4">
<h3 className="text-white font-normal text-xl tracking-tight uppercase tracking-wide">Signature Cut</h3>
<span className="text-[#c5aa65] font-normal">R 350</span>
</div>
<div className="flex items-center gap-2 text-white/40 text-sm uppercase tracking-widest mb-4">
<i className="w-3.5 h-3.5" data-lucide="clock"></i> 45 MIN
        </div>
<p className="text-white/50 text-base font-light leading-relaxed">
          Tailored haircut with precision fading or scissor work. Includes wash, style, and hot towel neck shave.
        </p>
</div>

<div className="luxury-card bg-[#050505] p-8 border border-white/5 relative">
<div className="flex justify-between items-start mb-4">
<h3 className="text-white font-normal text-xl tracking-tight uppercase tracking-wide">Beard Sculpting</h3>
<span className="text-[#c5aa65] font-normal">R 250</span>
</div>
<div className="flex items-center gap-2 text-white/40 text-sm uppercase tracking-widest mb-4">
<i className="w-3.5 h-3.5" data-lucide="clock"></i> 30 MIN
        </div>
<p className="text-white/50 text-base font-light leading-relaxed">
          Complete beard reshaping and lineup. Finished with premium oils and a relaxing hot towel treatment.
        </p>
</div>

<div className="luxury-card bg-[#050505] p-8 border border-white/5 relative">
<div className="flex justify-between items-start mb-4">
<h3 className="text-white font-normal text-xl tracking-tight uppercase tracking-wide">Colour &amp; Camo</h3>
<span className="text-[#c5aa65] font-normal">R 600</span>
</div>
<div className="flex items-center gap-2 text-white/40 text-sm uppercase tracking-widest mb-4">
<i className="w-3.5 h-3.5" data-lucide="clock"></i> 60 MIN
        </div>
<p className="text-white/50 text-base font-light leading-relaxed">
          Subtle grey blending or full color application for hair and beard. Natural, distinguished results.
        </p>
</div>

<div className="luxury-card md:col-span-2 lg:col-span-3 bg-gradient-to-br from-[#12100b] to-[#050505] p-8 md:p-10 border border-[#c5aa65]/30 relative overflow-hidden group">

<div className="absolute -top-20 -right-20 w-64 h-64 bg-[#c5aa65]/10 blur-[80px] rounded-full group-hover:bg-[#c5aa65]/20 transition-colors duration-700"></div>
<div className="absolute top-0 right-0 bg-[#c5aa65] text-black text-xs uppercase font-semibold tracking-[0.2em] px-4 py-1.5">
          Most Popular
        </div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
<div className="max-w-xl">
<h3 className="text-white font-playfair text-2xl md:text-3xl tracking-tight mb-2">The Executive Package</h3>
<div className="flex items-center gap-2 text-[#c5aa65] text-sm uppercase tracking-widest mb-4">
<i className="w-3.5 h-3.5" data-lucide="clock"></i> 90 MIN
            </div>
<p className="text-white/60 text-base font-light leading-relaxed mb-6">
              The ultimate grooming experience. Includes the Signature Cut, Beard Sculpting, and a deep-cleansing Charcoal Facial Treatment. Look impeccable for your most important engagements.
            </p>
<div className="flex gap-4">
<span className="text-white/40 text-base line-through mt-1">R 1,000</span>
<span className="text-[#c5aa65] text-xl font-normal">R 800</span>
</div>
</div>
<button className="shrink-0 text-sm font-medium uppercase tracking-widest px-8 py-4 border border-[#c5aa65] text-[#c5aa65] hover:bg-[#c5aa65] hover:text-black transition-colors duration-300" onclick="scrollToId('booking')">
            Book Package
          </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#050505] reveal" id="gallery">
<div className="max-w-7xl mx-auto px-6 md:px-10 text-center reveal">
<p className="text-[#c5aa65] uppercase tracking-widest text-sm font-normal mb-4">Portfolio</p>
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-white font-playfair font-light mb-16">
      The Standard.
    </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4">
<div className="aspect-[4/5] overflow-hidden group relative bg-[#0a0a0a]">
<img alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[4/5] overflow-hidden group relative bg-[#0a0a0a]">
<img alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="aspect-[4/5] overflow-hidden group relative bg-[#0a0a0a]">
<img alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[4/5] overflow-hidden group relative bg-[#0a0a0a]">
<img alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#0a0a0a] border-y border-white/5 reveal" id="reviews">
<div className="max-w-5xl mx-auto px-6 md:px-10 text-center reveal">
<i className="w-8 h-8 text-[#c5aa65] mb-6 mx-auto" data-lucide="message-circle"></i>
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-white font-playfair font-light mb-16">
      Client Reputation.
    </h2>
<div className="relative">
<div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left" id="reviews-stage">

</div>
<div className="flex items-center justify-center gap-6 mt-12">
<button aria-label="Previous" className="w-12 h-12 flex items-center justify-center border border-white/20 text-white/50 hover:text-[#c5aa65] hover:border-[#c5aa65] transition-colors rounded-full" id="reviews-prev" style={{pointerEvents: 'none'}}>
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button aria-label="Next" className="w-12 h-12 flex items-center justify-center border border-white/20 text-white/50 hover:text-[#c5aa65] hover:border-[#c5aa65] transition-colors rounded-full" id="reviews-next" style={{pointerEvents: 'auto'}}>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#050505] reveal" id="terms">
<div className="max-w-5xl mx-auto px-6 md:px-10">
<div className="text-center mb-16">
<p className="text-[#c5aa65] uppercase tracking-widest text-sm font-normal mb-4">Important Information</p>
<h2 className="text-4xl md:text-5xl tracking-tight text-white font-playfair font-light">
        Terms &amp; Conditions.
      </h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-[#0a0a0a] border border-white/5 p-8">
<i className="w-6 h-6 text-[#c5aa65] mb-6" data-lucide="calendar"></i>
<h4 className="text-white font-normal text-base tracking-wide uppercase mb-4">Bookings &amp; Cancellations</h4>
<p className="text-white/50 text-sm font-light leading-relaxed mb-4">
          All appointments require a minimum of 12 hours notice for cancellations or rescheduling.
        </p>
<p className="text-white/50 text-sm font-light leading-relaxed">
          Failure to cancel within this timeframe or "no-shows" will result in a 50% cancellation fee applied to your next visit.
        </p>
</div>

<div className="bg-[#0a0a0a] border border-white/5 p-8">
<i className="w-6 h-6 text-[#c5aa65] mb-6" data-lucide="clock"></i>
<h4 className="text-white font-normal text-base tracking-wide uppercase mb-4">Late Arrivals</h4>
<p className="text-white/50 text-sm font-light leading-relaxed mb-4">
          Please arrive 5 minutes prior to your scheduled time. 
        </p>
<p className="text-white/50 text-sm font-light leading-relaxed">
          If you are more than 15 minutes late, we may need to shorten your service or reschedule entirely to avoid delaying the next client.
        </p>
</div>

<div className="bg-[#0a0a0a] border border-white/5 p-8">
<i className="w-6 h-6 text-[#c5aa65] mb-6" data-lucide="wallet"></i>
<h4 className="text-white font-normal text-base tracking-wide uppercase mb-4">Payments &amp; Deposits</h4>
<p className="text-white/50 text-sm font-light leading-relaxed mb-4">
          We accept cash, cards, and digital payments in-store. 
        </p>
<p className="text-white/50 text-sm font-light leading-relaxed">
          For extensive services or executive packages, a 50% deposit may be required at the time of online booking to secure your slot.
        </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0a0a0a] border-t border-white/5 reveal" id="booking">
<div className="max-w-5xl mx-auto px-6 text-center reveal">
<h2 className="text-5xl md:text-7xl font-playfair font-light tracking-tight text-white mb-6">Secure Your Spot.</h2>
<p className="text-white/50 text-lg md:text-xl font-light mb-4">Experience uncompromising quality. Appointments are highly recommended.</p>
<p className="text-[#c5aa65] text-sm font-semibold uppercase tracking-[0.2em] mb-12">Select your preferred studio.</p>
<div className="grid md:grid-cols-2 gap-6 items-stretch">

<div className="p-8 md:p-10 border border-white/10 bg-[#050505] text-left flex flex-col hover:border-[#c5aa65]/50 transition-colors duration-500 group">
<h4 className="text-white font-normal text-xl tracking-tight uppercase tracking-wide mb-2">Observatory Studio</h4>
<p className="text-white/50 text-base font-light mb-8 flex-grow">142 Main Road, Observatory<br/>Cape Town, 7925</p>
<div className="space-y-1 mb-8">
<p className="text-white/50 text-sm font-light"><span className="text-white font-medium">Mon - Fri:</span> 09:00 - 18:00</p>
<p className="text-white/50 text-sm font-light"><span className="text-white font-medium">Sat - Sun:</span> 09:00 - 15:00</p>
</div>
<button className="uppercase hover:bg-white transition-colors duration-300 text-sm font-medium text-black tracking-widest bg-[#c5aa65] w-full pt-4 pb-4 mt-auto cursor-pointer" onclick="window.location.href='https://api.leadconnectorhq.com/widget/groups/barbershopservicesandmore-a941621d-1e54-4b83-9f70-b552b495de1b'" role="button">
          Book Observatory
        </button>
</div>

<div className="p-8 md:p-10 border border-white/10 bg-[#050505] text-left flex flex-col hover:border-[#c5aa65]/50 transition-colors duration-500 group">
<h4 className="text-white font-normal text-xl tracking-tight uppercase tracking-wide mb-2">De Waterkant Studio</h4>
<p className="text-white/50 text-base font-light mb-8 flex-grow">10 Napier Street, De Waterkant<br/>Cape Town, 8001</p>
<div className="space-y-1 mb-8">
<p className="text-white/50 text-sm font-light"><span className="text-white font-medium">Mon - Fri:</span> 09:00 - 18:00</p>
<p className="text-white/50 text-sm font-light"><span className="text-white font-medium">Sat - Sun:</span> 09:00 - 15:00</p>
</div>
<button className="uppercase hover:bg-white transition-colors duration-300 text-sm font-medium text-black tracking-widest bg-[#c5aa65] w-full pt-4 pb-4 mt-auto cursor-pointer" onclick="window.location.href='https://api.leadconnectorhq.com/widget/groups/barbershopservicesandmore-a941621d-1e54-4b83-9f70-b552b495de1b'" role="button">
          Book De Waterkant
        </button>
</div>
</div>
<p className="text-center text-white/30 text-xs uppercase tracking-widest mt-8">All bookings require a 50% deposit</p>
</div>
</section>

<footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 md:px-10">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<a className="block w-max mb-6" href="#hero">
<img alt="Hammies Barbershop" className="h-14 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dfec72cc-cd5f-4bb4-b63d-ff2bfcc67c6f_3840w.webp?w=800&amp;q=80"/>
</a>
<p className="text-white/50 text-base font-light max-w-sm leading-relaxed mb-8">
          Cape Town's definitive destination for men's grooming. Precision execution, luxury atmosphere, and absolute professionalism across our premium locations.
        </p>

<form className="flex max-w-sm border border-white/20 p-1 bg-transparent">
<input className="bg-transparent text-base text-white px-4 py-2 w-full outline-none placeholder:text-white/30 font-light" placeholder="Join our exclusive mailing list" required="" type="email"/>
<button className="bg-[#c5aa65] text-black px-4 py-2 text-sm font-medium uppercase tracking-widest hover:bg-white transition-colors" type="submit">
            Join
          </button>
</form>
</div>
<div className="">
<h5 className="text-white text-sm uppercase tracking-widest font-normal mb-6">Explore</h5>
<ul className="space-y-4 text-base text-white/50 font-light">
<li className=""><a className="hover:text-[#c5aa65] transition-colors" href="#about">Our Story</a></li>
<li><a className="hover:text-[#c5aa65] transition-colors" href="#services">Services &amp; Pricing</a></li>
<li><a className="hover:text-[#c5aa65] transition-colors" href="#gallery">Gallery</a></li>
</ul>
</div>
<div>
<h5 className="text-white text-sm uppercase tracking-widest font-normal mb-6">Studios</h5>
<ul className="space-y-4 text-base text-white/50 font-light">
<li>
<span className="text-white block text-sm uppercase tracking-widest mb-1">Observatory</span>
<a className="hover:text-[#c5aa65] transition-colors block" href="tel:+27210000000">+27 21 000 0000</a>
</li>
<li className="pt-2">
<span className="text-white block text-sm uppercase tracking-widest mb-1">De Waterkant</span>
<a className="hover:text-[#c5aa65] transition-colors block" href="tel:+27210000001">+27 21 000 0001</a>
</li>
<li className="pt-4 flex gap-4">
<a className="text-white/50 hover:text-[#c5aa65] transition-colors" href="#">IG</a>
<a className="text-white/50 hover:text-[#c5aa65] transition-colors" href="#">WA</a>
<a className="text-white/50 hover:text-[#c5aa65] transition-colors" href="mailto:bookings@hammies.co.za">EMAIL</a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/10 pt-8 text-xs text-white/30 uppercase tracking-widest">
<p>© <span id="year">2026</span> HAMMIES BARBERSHOP. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="hover:text-[#c5aa65] transition-colors" href="#terms">Privacy Policy</a>
<a className="hover:text-[#c5aa65] transition-colors" href="#terms">Terms of Service</a>
</div>
</div>
</div>
</footer>

<a aria-label="WhatsApp" className="fixed bottom-6 right-6 z-[90] w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:scale-110 hover:bg-[#c5aa65] transition-all duration-300" href="https://wa.me/27210000000" target="_blank">
<i className="w-7 h-7" data-lucide="message-circle"></i>
</a>



    </>
  );
}
