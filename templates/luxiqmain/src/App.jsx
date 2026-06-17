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



{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "LuxIQ",
"url": "https://luxiq.io",
"email": "info@luxiq.io",
"image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop",
"logo": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='80'><rect width='100%' height='100%' fill='%230b0c0f'/><text x='20' y='55' fill='%23bfa36a' font-family='Inter, Arial, sans-serif' font-size='40' letter-spacing='-1'>LuxIQ</text></svg>",
"address": {
"@type": "PostalAddress",
"addressCountry": "US"
},
"areaServed": "Global",
"description": "LuxIQ helps hotels and resorts increase bookings through high-end photography, 3D tours, and performance-based digital marketing — pay only when we deliver.",
"sameAs": [
"https://www.linkedin.com/company/luxiq"
]
}



{
"@context": "https://schema.org",
"@type": "Service",
"name": "Hospitality Media & Marketing",
"provider": {
"@type": "Organization",
"name": "LuxIQ",
"url": "https://luxiq.io"
},
"serviceType": "Photography, 3D Walkthroughs, Dynamic Websites, Commission-Based Marketing",
"areaServed": "Global",
"offers": {
"@type": "Offer",
"priceSpecification": {
"@type": "PriceSpecification",
"priceCurrency": "USD",
"price": "0",
"description": "Marketing is commission-based; photography packages are custom."
}
}
}



      // Initialize icons with 1.5 stroke width
      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      // Mobile menu toggle
      const mobileBtn = document.getElementById('mobileMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
        mobileMenu.querySelectorAll('a').forEach(a => {
          a.addEventListener('click', () => mobileMenu.classList.add('hidden'));
        });
      }

      // Gallery Lightbox
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightboxImg');
      const lightboxClose = document.getElementById('lightboxClose');
      document.querySelectorAll('#work button[data-full]').forEach(btn => {
        btn.addEventListener('click', () => {
          const src = btn.getAttribute('data-full');
          lightboxImg.src = src;
          lightbox.classList.remove('hidden');
          document.body.style.overflow = 'hidden';
        });
      });
      const closeLightbox = () => {
        lightbox.classList.add('hidden');
        lightboxImg.src = '';
        document.body.style.overflow = '';
      };
      lightboxClose.addEventListener('click', closeLightbox);
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) closeLightbox();
      });

      // Footer year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Contact form handler (mailto fallback)
      const form = document.getElementById('contactForm');
      const resultBox = document.getElementById('formResult');
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const data = new FormData(form);
          const name = data.get('name') || '';
          const email = data.get('email') || '';
          const property = data.get('property') || '';
          const message = data.get('message') || '';
          const subject = encodeURIComponent('LuxIQ Consultation Request');
          const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nProperty: ${property}\n\nMessage:\n${message}`
          );
          // Open default email client
          window.location.href = `mailto:info@luxiq.io?subject=${subject}&body=${body}`;
          // UI feedback
          resultBox.classList.remove('hidden');
          resultBox.textContent = 'Thanks for reaching out — your email client should open shortly. If it doesn’t, email us directly at info@luxiq.io.';
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
      

<header className="fixed top-0 inset-x-0 z-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<nav className="mt-4 mb-3 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/40 px-4 py-3">
<a className="flex items-center gap-2" href="#top">
<div className="flex items-center justify-center h-8 w-8 rounded-md border border-[#bfa36a]/30 text-[#bfa36a]">
<span className="text-sm tracking-[-0.04em] font-semibold">LQ</span>
</div>
<span className="hidden sm:inline text-sm font-medium tracking-[-0.02em] text-white/80">LuxIQ</span>
</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#process">Process</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-[#bfa36a]/30 bg-[#bfa36a]/10 px-3.5 py-2 text-sm font-medium text-[#e8dcc0] hover:bg-[#bfa36a]/20 hover:border-[#bfa36a]/50 transition-colors" href="#contact">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              Consult
            </a>
<button aria-label="Open menu" className="md:hidden rounded-lg border border-white/15 p-2 text-white/80 hover:text-white hover:border-white/30 transition-colors" id="mobileMenuBtn">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>
</div>

<div className="md:hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 hidden" id="mobileMenu">
<div className="rounded-xl border border-white/10 bg-black/60 backdrop-blur px-4 py-3 mb-4">
<div className="flex flex-col divide-y divide-white/10">
<a className="py-3 text-sm text-white/80 hover:text-white" href="#about">About</a>
<a className="py-3 text-sm text-white/80 hover:text-white" href="#services">Services</a>
<a className="py-3 text-sm text-white/80 hover:text-white" href="#work">Work</a>
<a className="py-3 text-sm text-white/80 hover:text-white" href="#process">Process</a>
<a className="py-3 text-sm text-white/80 hover:text-white" href="#pricing">Pricing</a>
<a className="py-3 text-sm text-white/80 hover:text-white" href="#contact">Contact</a>
</div>
</div>
</div>
</header>
<main className="relative" id="top">

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(191,163,106,0.15),transparent)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_20%,rgba(255,255,255,0.06),transparent)]"></div>
</div>

<section className="relative min-h-[96vh] flex items-stretch pt-24">
<div className="overflow-hidden rounded-none absolute top-0 right-0 bottom-0 left-0">
<img alt="Luxury resort exterior at dusk" className="w-full h-full object-cover" decoding="async" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-[#0b0c0f] via-[#0b0c0f]/70 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 sm:px-6 lg:px-8 flex w-full max-w-7xl mr-auto ml-auto pr-4 pl-4 relative items-end">
<div className="w-full pb-20">
<div className="max-w-3xl">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
                Transform Your Hotel’s Image and Revenue.
              </h1>
<p className="mt-5 text-base sm:text-lg text-white/80 max-w-2xl">
                LuxIQ combines high-end photography, immersive 3D experiences, and performance-based marketing to help your property stand out — and sell out.
              </p>
<div className="mt-8 flex flex-wrap items-center gap-4">
<a className="inline-flex items-center gap-2 rounded-xl border border-[#bfa36a]/40 bg-[#bfa36a]/20 px-5 py-3 text-sm font-medium text-[#f1e7cd] hover:bg-[#bfa36a]/30 hover:border-[#bfa36a]/60 transition-colors" href="#contact">
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                  Request a Consultation
                </a>
<a className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-medium text-white/80 hover:text-white hover:border-white/30 transition-colors" href="#work">
<svg className="lucide lucide-images h-4 w-4" data-lucide="images" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"></path><path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"></path><circle cx="13" cy="7" fill="currentColor" r="1"></circle><rect height="14" rx="2" width="14" x="8" y="2"></rect></svg>
                  View Work
                </a>
</div>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<section className="relative py-20 sm:py-28" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">The Art and Science of Hospitality Marketing.</h2>
<p className="mt-5 text-white/80">
                At LuxIQ, we specialize in capturing the essence of your property and turning it into measurable success. Our team blends world-class photography, cutting-edge 3D walkthroughs, and intelligent marketing strategies — all built to drive real bookings for your hotel, resort, or event space.
              </p>
<p className="mt-4 text-white/80">
                Every project is designed around one goal: helping your property look its best and perform even better.
              </p>
<div className="mt-8 flex items-center gap-4">
<div className="flex items-center gap-2 text-[#e7d7ab]">
<svg className="lucide lucide-sparkles h-5 w-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-sm font-medium">Luxury Visuals</span>
</div>
<div className="flex items-center gap-2 text-[#e7d7ab]">
<svg className="lucide lucide-cpu h-5 w-5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="text-sm font-medium">Intelligent Marketing</span>
</div>
<div className="flex items-center gap-2 text-[#e7d7ab]">
<svg className="lucide lucide-line-chart h-5 w-5" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<span className="text-sm font-medium">Measurable Results</span>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
<img alt="Elegant hotel interior" className="w-full h-full object-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<section className="py-20 sm:py-28" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Our Complete Visual &amp; Marketing Suite.</h2>
<p className="mt-3 text-white/70">A unified approach to showcasing and booking your property.</p>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/[0.08] transition-colors">
<div className="flex items-center justify-between">
<div className="h-11 w-11 rounded-xl border border-[#bfa36a]/30 bg-[#bfa36a]/10 flex items-center justify-center text-[#e8dcc0]">
<svg className="lucide lucide-camera h-5 w-5" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<svg className="lucide lucide-arrow-up-right h-4 w-4 text-white/40 group-hover:text-white/70" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-white">Photography &amp; Aerials</h3>
<p className="mt-2 text-sm text-white/70">
                We create stunning DSLR and drone photography that highlights every angle of your property — from sweeping exterior shots to intimate interior details.
              </p>
</div>

<div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/[0.08] transition-colors">
<div className="flex items-center justify-between">
<div className="h-11 w-11 rounded-xl border border-[#bfa36a]/30 bg-[#bfa36a]/10 flex items-center justify-center text-[#e8dcc0]">
<i className="h-5 w-5" data-lucide="cube"></i>
</div>
<svg className="lucide lucide-arrow-up-right h-4 w-4 text-white/40 group-hover:text-white/70" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-white">3D Walkthroughs</h3>
<p className="mt-2 text-sm text-white/70">
                Let guests explore your property before they arrive. Our 3D virtual tours bring your spaces to life, increasing engagement and confidence in bookings.
              </p>
</div>

<div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/[0.08] transition-colors">
<div className="flex items-center justify-between">
<div className="h-11 w-11 rounded-xl border border-[#bfa36a]/30 bg-[#bfa36a]/10 flex items-center justify-center text-[#e8dcc0]">
<svg className="lucide lucide-monitor h-5 w-5" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</div>
<svg className="lucide lucide-arrow-up-right h-4 w-4 text-white/40 group-hover:text-white/70" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-white">Dynamic Websites</h3>
<p className="mt-2 text-sm text-white/70">
                We build sleek, responsive websites that showcase your visuals beautifully — designed to convert visitors into guests.
              </p>
</div>

<div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/[0.08] transition-colors">
<div className="flex items-center justify-between">
<div className="h-11 w-11 rounded-xl border border-[#bfa36a]/30 bg-[#bfa36a]/10 flex items-center justify-center text-[#e8dcc0]">
<svg className="lucide lucide-target h-5 w-5" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<svg className="lucide lucide-arrow-up-right h-4 w-4 text-white/40 group-hover:text-white/70" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-white">Commission-Based Marketing</h3>
<p className="mt-2 text-sm text-white/70">
                Our marketing model is simple: you only pay when we deliver. We promote your event spaces and rooms to a wider audience, driving incremental bookings with no upfront cost.
              </p>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<section className="py-20 sm:py-28" id="work">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">See the Difference.</h2>
<p className="mt-3 text-white/70">Photography that transforms perception — and performance.</p>
<p className="mt-3 text-white/70">
              Explore a sample of our recent work. Each image is a story of how thoughtful visuals and smart marketing help our partners attract, engage, and convert.
            </p>
</div>
<div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

<button className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#bfa36a]/50" data-full="https://images.unsplash.com/photo-1501117716987-c8e00216d927?q=80&amp;w=2400&amp;auto=format&amp;fit=crop">
<img alt="Resort pool at sunset" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-2 right-2 rounded-md bg-black/40 px-2 py-1 text-xs text-white/80">View</div>
</button>
<button className="group relative aspect-[3/4] md:row-span-2 overflow-hidden rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#bfa36a]/50" data-full="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80&amp;w=2400&amp;auto=format&amp;fit=crop">
<img alt="Suite interior design" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</button>
<button className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#bfa36a]/50" data-full="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&amp;w=2400&amp;auto=format&amp;fit=crop">
<img alt="Hotel lobby" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</button>
<button className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#bfa36a]/50" data-full="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&amp;w=2400&amp;auto=format&amp;fit=crop">
<img alt="Aerial of coastal resort" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</button>
<button className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#bfa36a]/50" data-full="https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&amp;w=2400&amp;auto=format&amp;fit=crop">
<img alt="Gourmet restaurant table" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&amp;w=800auto=format&amp;fit=crop"/>
</button>
<button className="group relative aspect-[3/4] md:row-span-2 overflow-hidden rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#bfa36a]/50" data-full="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=2400&amp;auto=format&amp;fit=crop">
<img alt="Exterior grand entrance" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</button>
<button className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#bfa36a]/50" data-full="https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&amp;w=2400&amp;auto=format&amp;fit=crop">
<img alt="Modern lounge" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</button>
<button className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#bfa36a]/50" data-full="https://images.unsplash.com/photo-1501117491128-23e87e2b6ca4?q=80&amp;w=2400&amp;auto=format&amp;fit=crop">
<img alt="Event ballroom" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</button>
</div>
</div>

<div className="fixed inset-0 z-[60] hidden items-center justify-center bg-black/80 p-4" id="lightbox">
<button className="absolute top-6 right-6 rounded-lg border border-white/20 bg-white/10 p-2 text-white/80 hover:text-white hover:border-white/40" id="lightboxClose">
<svg className="lucide lucide-x h-5 w-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="max-w-6xl w-full">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black">
<img alt="Expanded gallery image" className="w-full h-auto object-contain" id="lightboxImg" src=""/>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<section className="py-20 sm:py-28" id="process">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Our Process.</h2>
<p className="mt-3 text-white/70">Simple. Streamlined. Results-driven.</p>
</div>
<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg border border-[#bfa36a]/30 bg-[#bfa36a]/10 flex items-center justify-center text-[#e8dcc0]">
<svg className="lucide lucide-aperture h-5 w-5" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
</div>
<span className="text-xs uppercase tracking-widest text-white/60">Step 1</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-white">Capture</h3>
<p className="mt-2 text-sm text-white/70">
                We photograph and film your property using DSLR, aerial, and 3D technology.
              </p>
</div>

<div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg border border-[#bfa36a]/30 bg-[#bfa36a]/10 flex items-center justify-center text-[#e8dcc0]">
<svg className="lucide lucide-layers h-5 w-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<span className="text-xs uppercase tracking-widest text-white/60">Step 2</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-white">Create</h3>
<p className="mt-2 text-sm text-white/70">
                Our designers craft a stunning web presence tailored to your brand.
              </p>
</div>

<div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg border border-[#bfa36a]/30 bg-[#bfa36a]/10 flex items-center justify-center text-[#e8dcc0]">
<svg className="lucide lucide-rocket h-5 w-5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<span className="text-xs uppercase tracking-widest text-white/60">Step 3</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-white">Convert</h3>
<p className="mt-2 text-sm text-white/70">
                We market your event spaces and rooms on commission — driving real, measurable results.
              </p>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<section className="py-20 sm:py-28" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Only Pay When You See Results.</h2>
<p className="mt-5 text-white/80">Our pricing is designed for alignment — not risk.</p>
<ul className="mt-4 space-y-3">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check h-5 w-5 text-[#e7d7ab] mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-white/80">Photography packages are customized based on your property’s scope and number of spaces.</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check h-5 w-5 text-[#e7d7ab] mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-white/80">Our marketing services are entirely commission-based: you pay nothing until we generate confirmed bookings.</span>
</li>
</ul>
<a className="mt-8 inline-flex items-center gap-2 rounded-xl border border-[#bfa36a]/40 bg-[#bfa36a]/20 px-5 py-3 text-sm font-medium text-[#f1e7cd] hover:bg-[#bfa36a]/30 hover:border-[#bfa36a]/60 transition-colors" href="#contact">
<svg className="lucide lucide-message-circle h-4 w-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                Let’s Talk About Your Property
              </a>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg border border-[#bfa36a]/30 bg-[#bfa36a]/10 flex items-center justify-center text-[#e8dcc0]">
<svg className="lucide lucide-badge-dollar-sign h-5 w-5" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
</div>
<div>
<p className="text-sm text-white/60">Alignment-first model</p>
<h3 className="text-lg font-semibold tracking-tight text-white">Commission-Based Growth</h3>
</div>
</div>
<p className="mt-3 text-sm text-white/70">
                We plug into your sales pipeline to promote your rooms and event spaces. No retainers, no surprises — we win when you win.
              </p>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="rounded-lg border border-white/10 p-4">
<p className="text-xs uppercase tracking-widest text-white/50">Good for</p>
<p className="mt-1 text-white/80">Hotels, Resorts, Event Venues</p>
</div>
<div className="rounded-lg border border-white/10 p-4">
<p className="text-xs uppercase tracking-widest text-white/50">What’s included</p>
<p className="mt-1 text-white/80">Strategy, Ad Ops, Landing Pages, Reporting</p>
</div>
</div>
<p className="mt-4 text-xs text-white/50">Ask about territory exclusivity and seasonal campaigns.</p>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<section className="py-20 sm:py-28" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Let’s Elevate Your Property.</h2>
<p className="mt-3 text-white/70">Ready to capture your property at its best and drive more bookings?</p>
</div>
<div className="mt-10 grid lg:grid-cols-3 gap-8">
<form className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6" id="contactForm">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex flex-col gap-2">
<label className="text-sm text-white/70" htmlFor="name">Name</label>
<input className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-[#bfa36a]/50" id="name" name="name" placeholder="Your name" required="" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm text-white/70" htmlFor="email">Email</label>
<input className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-[#bfa36a]/50" id="email" name="email" placeholder="you@company.com" required="" type="email"/>
</div>
<div className="sm:col-span-2 flex flex-col gap-2">
<label className="text-sm text-white/70" htmlFor="property">Property Name</label>
<input className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-[#bfa36a]/50" id="property" name="property" placeholder="Hotel / Resort / Venue" type="text"/>
</div>
<div className="sm:col-span-2 flex flex-col gap-2">
<label className="text-sm text-white/70" htmlFor="message">Message</label>
<textarea className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-[#bfa36a]/50" id="message" name="message" placeholder="Tell us about your goals, timeline, and spaces." required="" rows="5"></textarea>
</div>
</div>
<div className="mt-6 flex items-center justify-between gap-4">
<button className="inline-flex items-center gap-2 rounded-xl border border-[#bfa36a]/40 bg-[#bfa36a]/20 px-5 py-3 text-sm font-medium text-[#f1e7cd] hover:bg-[#bfa36a]/30 hover:border-[#bfa36a]/60 transition-colors" type="submit">
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                  Send Message
                </button>
<p className="text-sm text-white/60">Or email us: <a className="text-[#e8dcc0] hover:underline" href="mailto:info@luxiq.io">info@luxiq.io</a></p>
</div>
<div className="mt-4 hidden rounded-lg border border-white/10 bg-white/[0.06] p-3 text-sm" id="formResult"></div>

<div className="hidden" data-crm="pending" id="crmHook"></div>
</form>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg border border-[#bfa36a]/30 bg-[#bfa36a]/10 flex items-center justify-center text-[#e8dcc0]">
<svg className="lucide lucide-hotel h-5 w-5" data-lucide="hotel" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 22v-6.57"></path><path d="M12 11h.01"></path><path d="M12 7h.01"></path><path d="M14 15.43V22"></path><path d="M15 16a5 5 0 0 0-6 0"></path><path d="M16 11h.01"></path><path d="M16 7h.01"></path><path d="M8 11h.01"></path><path d="M8 7h.01"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect></svg>
</div>
<div>
<p className="text-sm text-white/60">Brand Tagline</p>
<h3 className="text-lg font-semibold tracking-tight text-white">Luxury Visuals. Intelligent Marketing. Measurable Results.</h3>
</div>
</div>
<div className="mt-4 grid gap-3">
<div className="flex items-center gap-3 rounded-lg border border-white/10 p-3">
<svg className="lucide lucide-clock h-5 w-5 text-white/60" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<p className="text-sm text-white/70">Mon–Fri, 9am–6pm (local)</p>
</div>
<div className="flex items-center gap-3 rounded-lg border border-white/10 p-3">
<svg className="lucide lucide-globe h-5 w-5 text-white/60" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<p className="text-sm text-white/70">Serving hotels, resorts, venues worldwide</p>
</div>
<div className="flex items-center gap-3 rounded-lg border border-white/10 p-3">
<svg className="lucide lucide-shield-check h-5 w-5 text-white/60" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<p className="text-sm text-white/70">Privacy-first. CRM-ready.</p>
</div>
</div>
<div className="mt-4 text-xs text-white/50">
                Your information is used only to respond to your inquiry.
              </div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="flex items-center justify-center h-7 w-7 rounded-md border border-[#bfa36a]/30 text-[#bfa36a]">
<span className="text-xs tracking-[-0.04em] font-semibold">LQ</span>
</div>
<p className="text-sm text-white/50">© <span id="year">2025</span> LuxIQ</p>
</div>
<nav className="flex items-center gap-5">
<a className="text-sm text-white/60 hover:text-white transition-colors" href="#top">Top</a>
<a className="text-sm text-white/60 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm text-white/60 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm text-white/60 hover:text-white transition-colors" href="#contact">Contact</a>
</nav>
</div>
</div>
</footer>




    </>
  );
}
