import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Initialize icons with 1.5 stroke width
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    });

    // Mobile menu toggle
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    menuButton?.addEventListener('click', () => {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!expanded));
      mobileMenu.classList.toggle('hidden');
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    });

    // Close mobile menu on link click
    mobileMenu?.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });

    // Lightbox Gallery
    const galleryImages = [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505253213345-5a8d2d2d3fbe?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3b2c77?auto=format&fit=crop&w=1600&q=80"
    ];

    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');

    let currentIndex = 0;

    function openLightbox(index = 0) {
      currentIndex = index;
      lightboxImage.src = galleryImages[currentIndex];
      lightbox.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }

    function closeLightbox() {
      lightbox.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }

    function showPrev() {
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      lightboxImage.src = galleryImages[currentIndex];
    }

    function showNext() {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      lightboxImage.src = galleryImages[currentIndex];
    }

    document.querySelectorAll('[data-gallery="project"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index')) || 0;
        openLightbox(i);
      });
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPrev);
    lightboxNext.addEventListener('click', showNext);

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target === lightbox.querySelector('.absolute.inset-0.bg-black\\/80')) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (lightbox.classList.contains('hidden')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 backdrop-blur supports-backdrop-blur:bg-white/80 bg-white/70 border-b border-neutral-200" id="site-header">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a aria-label="STC — The Strait of Tangier Company Home" className="flex items-center gap-3 group" href="#">
</a><a className="inline-flex items-center justify-center bg-center w-[140px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5dfb36e1-2179-4d23-9083-0f1e15319067_320w.png)] bg-cover rounded" href="#"></a>
<div className="flex flex-col leading-none">
</div>

<nav className="hidden md:flex items-center gap-8 text-[14.5px]">
<a className="text-neutral-600 hover:text-neutral-900 transition-colors" href="#about">About</a>
<a className="text-neutral-600 hover:text-neutral-900 transition-colors" href="#projects">Projects</a>
<a className="text-neutral-600 hover:text-neutral-900 transition-colors" href="#lifestyle">Lifestyle</a>
<a className="text-neutral-600 hover:text-neutral-900 transition-colors" href="#investment">Investment</a>
<a className="text-neutral-600 hover:text-neutral-900 transition-colors" href="#whats-next">What's Next</a>
<a className="text-neutral-600 hover:text-neutral-900 transition-colors" href="#contact">Contact</a>
</nav>

<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-50 hover:border-neutral-400 transition-colors" href="#projects">
<svg className="lucide lucide-building-2 w-4 h-4 text-neutral-700" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
            Explore
          </a>
<a className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800 transition-colors" href="#investment">
<svg className="lucide lucide-line-chart w-4 h-4 text-white" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
            Investors
          </a>
</div>

<button aria-expanded="false" aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 transition-colors" id="menu-button">
<svg className="lucide lucide-menu w-5 h-5 text-neutral-800" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-neutral-200 bg-white" id="mobile-menu">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
<nav className="grid gap-2 text-[15px]">
<a className="flex items-center justify-between py-2 text-neutral-700 hover:text-neutral-900" href="#about">About <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></a>
<a className="flex items-center justify-between py-2 text-neutral-700 hover:text-neutral-900" href="#projects">Projects <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></a>
<a className="flex items-center justify-between py-2 text-neutral-700 hover:text-neutral-900" href="#lifestyle">Lifestyle <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></a>
<a className="flex items-center justify-between py-2 text-neutral-700 hover:text-neutral-900" href="#investment">Investment <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></a>
<a className="flex items-center justify-between py-2 text-neutral-700 hover:text-neutral-900" href="#whats-next">What's Next <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></a>
<a className="flex items-center justify-between py-2 text-neutral-700 hover:text-neutral-900" href="#contact">Contact <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></a>
</nav>
<div className="mt-4 flex items-center gap-2">
<a className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-50 transition-colors" href="#projects">
<svg className="lucide lucide-building-2 w-4 h-4" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
            Explore
          </a>
<a className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800 transition-colors" href="#investment">
<svg className="lucide lucide-line-chart w-4 h-4" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
            Investors
          </a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0">
<img alt="Cinematic render of luxury residences" className="object-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/717a5869-6871-4a84-940a-7bfc00164e30_3840w.png"/>
<div className="bg-gradient-to-t from-black/70 via-black/50 to-black/30 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-32 pr-4 pb-32 pl-4 relative">
<div className="max-w-3xl">
<span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/90 backdrop-blur px-3 py-1.5 text-xs text-neutral-800 shadow-lg">
<svg className="lucide lucide-map-pin w-3.5 h-3.5 text-[#B08D57]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
          Tangier, Morocco
        </span>
<h1 className="sm:text-6xl lg:text-7xl text-5xl font-semibold text-white tracking-tight mt-6 drop-shadow-2xl" style={{textShadow: '0 4px 20px rgba(0,0,0,0.5)'}}>
          Building Tangier's Future in Luxury Living
        </h1>
<p className="mt-6 text-white/95 text-[17px] leading-7 drop-shadow-lg font-medium">
          British–Moroccan real estate developer delivering trust, transparency, and lifestyle-forward homes.
        </p>
<p className="text-[16px] leading-7 text-white/85 mt-4 drop-shadow-lg">
          STC (The Strait of Tangier Company) is pioneering a new era of property development in Tangier. With UK-grade governance, smart-luxury design, and a long-term vision, we are creating communities that set the benchmark for aspirational living.
        </p>
<div className="mt-10 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-6 py-3.5 text-sm font-medium hover:bg-neutral-50 transition-all shadow-xl hover:shadow-2xl" href="#projects">
<svg className="lucide lucide-compass w-4.5 h-4.5" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
            Explore The Club Residences
          </a>
<a className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 text-white px-6 py-3.5 text-sm font-medium hover:bg-white/10 hover:border-white/60 transition-all backdrop-blur shadow-xl" href="#investment">
<svg className="lucide lucide-coins w-4.5 h-4.5" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
            Investor Opportunities
          </a>
</div>
</div>
</div>
</section>

<section className="relative bg-neutral-950">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
<div className="text-center mb-8">
<span className="inline-flex items-center gap-2 rounded-full border border-[#B08D57]/30 bg-[#B08D57]/10 px-3 py-1 text-xs text-[#B08D57]">
<svg className="lucide lucide-play-circle w-3.5 h-3.5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
          Experience The Vision
        </span>
<h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-white">Discover Tangier's Future</h2>
<p className="mt-3 text-neutral-400 max-w-2xl mx-auto">Immerse yourself in the architectural elegance and lifestyle excellence that defines The Strait of Tangier Company.</p>
</div>
<div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
<div className="aspect-video w-full">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/0eg53WToF2M?autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=0eg53WToF2M&amp;controls=1&amp;modestbranding=1&amp;rel=0" title="STC Tangier Development Video">
</iframe>
</div>
</div>
<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
<a className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-5 py-2.5 text-sm font-medium hover:bg-neutral-100 transition-colors" href="#projects">
<svg className="lucide lucide-building-2 w-4 h-4" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
          View All Projects
        </a>
<a className="inline-flex items-center gap-2 rounded-full border border-neutral-700 text-white px-5 py-2.5 text-sm hover:bg-neutral-900 transition-colors" href="#contact">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
          Request Information
        </a>
</div>
</div>
</section>

<section className="scroll-mt-24 border-t border-neutral-200" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight">Who We Are</h2>
<p className="mt-4 text-neutral-600 text-[15px] leading-7">
          The Strait of Tangier Company (STC) is a British–Moroccan real estate platform created to redefine Tangier's skyline. We exist to deliver trust, transparency, and lifestyle-forward homes.
        </p>
</div>
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="rounded-xl border border-neutral-200 p-5">
<div className="flex items-center gap-2 text-neutral-900">
<svg className="lucide lucide-shield-check w-5 h-5 text-[#B08D57]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm font-medium">Trust &amp; Transparency</span>
</div>
<p className="mt-2 text-sm text-neutral-600 leading-6">Live updates, clear contracts, investor dashboards.</p>
</div>
<div className="rounded-xl border border-neutral-200 p-5">
<div className="flex items-center gap-2 text-neutral-900">
<svg className="lucide lucide-sparkles w-5 h-5 text-[#B08D57]" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-sm font-medium">Smart-Luxury Living</span>
</div>
<p className="mt-2 text-sm text-neutral-600 leading-6">Light-filled homes with concierge services and modern amenities.</p>
</div>
<div className="rounded-xl border border-neutral-200 p-5">
<div className="flex items-center gap-2 text-neutral-900">
<svg className="lucide lucide-cpu w-5 h-5 text-[#B08D57]" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="text-sm font-medium">AI-Enhanced Delivery</span>
</div>
<p className="mt-2 text-sm text-neutral-600 leading-6">Faster, more precise development supported by advanced technology.</p>
</div>
<div className="rounded-xl border border-neutral-200 p-5">
<div className="flex items-center gap-2 text-neutral-900">
<svg className="lucide lucide-globe-2 w-5 h-5 text-[#B08D57]" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm font-medium">Global–Local Bridge</span>
</div>
<p className="mt-2 text-sm text-neutral-600 leading-6">Connecting Moroccan professionals with safe, structured ownership.</p>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 border-t border-neutral-200 bg-neutral-50" id="projects">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">The Club Residences</h2>
<p className="mt-3 text-neutral-600 text-[15px] leading-7">
          Located in the prestigious Golf Boubana district, The Club Residences sets a new benchmark for modern Tangier living.
        </p>
</div>
<div className="mt-10 grid lg:grid-cols-2 gap-8">
<div className="overflow-hidden border-neutral-200 border rounded-2xl relative">
<img alt="The Club Residences hero facade" className="w-full h-[440px] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f68145a6-b4ce-4a72-b9b1-f88a2147c120_1600w.png"/>
<div className="bg-gradient-to-t from-black/30 via-black/10 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute right-4 bottom-4 left-4">
</div>
</div>
<div className="space-y-6">
<div className="grid sm:grid-cols-2 gap-4">
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="flex items-center gap-2 text-neutral-900">
<svg className="lucide lucide-rows w-5 h-5 text-[#B08D57]" data-lucide="rows" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 12h18"></path></svg>
<span className="text-sm font-medium" style={{}}>R+7 Apartments</span>
</div>
<p className="mt-1 text-sm text-neutral-600">Floor-to-ceiling glazing.</p>
</div>
<div className="bg-white border-neutral-200 border rounded-xl pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-2 text-neutral-900">
<svg className="lucide lucide-waves w-5 h-5 text-[#B08D57]" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
<span className="text-sm font-medium">Rooftop Infinity Pool</span>
</div>
<p className="mt-1 text-sm text-neutral-600">With solar-panel pergola.</p>
</div><div className="bg-white border-neutral-200 border rounded-xl pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-2 text-neutral-900">
<svg className="lucide lucide-waves w-5 h-5 text-[#B08D57]" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
<span className="text-sm font-medium" style={{}}>Ground-floor Retail</span>
</div>
<p className="text-sm text-neutral-600 mt-1" style={{}}>Frontage and dedicated basements.</p>
</div><div className="bg-white border-neutral-200 border rounded-xl pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-2 text-neutral-900">
<svg className="lucide lucide-waves w-5 h-5 text-[#B08D57]" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
<span className="text-sm font-medium" style={{}}>Designed for Professionals</span>
</div>
<p className="text-sm text-neutral-600 mt-1" style={{}}>And aspirational families.</p>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-6">
<h3 className="text-lg font-medium tracking-tight text-neutral-900">Future Pipeline</h3>
<div className="mt-4 space-y-3">
<div className="flex items-start gap-3">
<svg className="lucide lucide-calendar w-4 h-4 text-[#B08D57] mt-0.5 flex-shrink-0" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<div className="">
<p className="text-sm font-medium text-neutral-900">Phase 2 (2026)</p>
<p className="text-sm text-neutral-600">Boutique development delivering 7–14 premium units.</p>
</div>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-trending-up w-4 h-4 text-[#B08D57] mt-0.5 flex-shrink-0" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<div className="">
<p className="text-sm font-medium text-neutral-900">Phase 3 (2027+)</p>
<p className="text-sm text-neutral-600">Expansion to 10–20 projects per year.</p>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-2.5 text-sm hover:bg-neutral-800" href="#contact">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
              Register Interest
            </a>
<a className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-sm hover:bg-white text-neutral-800" href="#contact">
<svg className="lucide lucide-file-down w-4 h-4 text-[#B08D57]" data-lucide="file-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg>
              Download Brochure
            </a>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 border-neutral-200 border-t" id="lifestyle">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Lifestyle &amp; Amenities</h2>
<p className="mt-3 text-neutral-600 text-[15px] leading-7">
          Living in an STC development means more than owning an apartment — it means access to a lifestyle.
        </p>
</div>
<div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="rounded-2xl border border-neutral-200 overflow-hidden bg-white">
<img alt="Concierge-style lobby" className="w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f808dd7c-80e7-415f-9d4a-7f7ad15316fc_800w.png"/>
<div className="p-5">
<div className="flex items-center gap-2 text-neutral-900">
<svg className="lucide lucide-concierge-bell w-5 h-5 text-[#B08D57]" data-lucide="concierge-bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z"></path><path d="M20 16a8 8 0 1 0-16 0"></path><path d="M12 4v4"></path><path d="M10 4h4"></path></svg>
<h3 className="font-medium tracking-tight">Concierge-Style Lobbies</h3>
</div>
<p className="mt-2 text-sm text-neutral-600 leading-6">Hospitality-led arrivals with attentive service.</p>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 overflow-hidden bg-white">
<img alt="Rooftop leisure deck" className="w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2cbb00f8-1c67-4b70-bac1-8a963f7a2032_800w.png"/>
<div className="p-5">
<div className="flex items-center gap-2 text-neutral-900">
<svg className="lucide lucide-sun w-5 h-5 text-[#B08D57]" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<h3 className="font-medium tracking-tight">Rooftop Leisure Decks</h3>
</div>
<p className="mt-2 text-sm text-neutral-600 leading-6">Infinity pools, sun decks, and landscaped social zones.</p>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 overflow-hidden bg-white">
<img alt="Fitness and wellness" className="w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0ab20302-3c70-41ee-ade5-9d6b8220f8c9_800w.png"/>
<div className="p-5">
<div className="flex items-center gap-2 text-neutral-900">
<svg className="lucide lucide-dumbbell w-5 h-5 text-[#B08D57]" data-lucide="dumbbell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"></path><path d="m2.5 21.5 1.4-1.4"></path><path d="m20.1 3.9 1.4-1.4"></path><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"></path><path d="m9.6 14.4 4.8-4.8"></path></svg>
<h3 className="font-medium tracking-tight">Fitness &amp; Wellness</h3>
</div>
<p className="mt-2 text-sm text-neutral-600 leading-6">Spaces designed for performance, recovery, and connection.</p>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 border-t border-neutral-200 bg-neutral-50" id="investment">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Investment Opportunities</h2>
<p className="mt-3 text-neutral-600 text-[15px] leading-7">
          Be part of Phases 2 &amp; 3 — our upcoming projects launching from 2026. The Strait of Tangier Company offers a transparent, structured way to invest in Tangier real estate.
        </p>
</div>
<div className="mt-10 grid lg:grid-cols-2 gap-6">
<div className="rounded-2xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-[#B08D57]/10 grid place-items-center ring-1 ring-[#B08D57]/30">
<svg className="lucide lucide-layers w-5 h-5 text-[#B08D57]" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900">Phase 2</h3>
<p className="text-sm text-neutral-600">Boutique development — 7–14 premium units</p>
</div>
</div>
<p className="mt-4 text-sm text-neutral-700 leading-6">Thoughtful unit mix with lifestyle amenities and transparent reporting via investor dashboards.</p>
<div className="mt-5 flex flex-wrap gap-2">
<a className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800" href="#contact">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
              Request Term Sheet
            </a>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-[#B08D57]/10 grid place-items-center ring-1 ring-[#B08D57]/30">
<svg className="lucide lucide-boxes w-5 h-5 text-[#B08D57]" data-lucide="boxes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path><path d="m7 16.5-4.74-2.85"></path><path d="m7 16.5 5-3"></path><path d="M7 16.5v5.17"></path><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path><path d="m17 16.5-5-3"></path><path d="m17 16.5 4.74-2.85"></path><path d="M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path><path d="M12 8 7.26 5.15"></path><path d="m12 8 4.74-2.85"></path><path d="M12 13.5V8"></path></svg>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900">Phase 3</h3>
<p className="text-sm text-neutral-600">Scaling to 10–20 projects per year</p>
</div>
</div>
<p className="mt-4 text-sm text-neutral-700 leading-6">Expansion-focused pipeline across prime districts with structured partnerships and potential JV models.</p>
<div className="mt-5 flex flex-wrap gap-2">
<a className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800" href="#contact">
<svg className="lucide lucide-user-plus w-4 h-4" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
              Join Interest List
            </a>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 border-t border-neutral-200" id="whats-next">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">What's Next</h2>
<p className="mt-3 text-neutral-600 text-[15px] leading-7">A glimpse into our pipeline — thoughtfully expanding Tangier's skyline.</p>
</div>
<div className="mt-10 grid md:grid-cols-2 gap-6">
<div className="relative rounded-2xl overflow-hidden border border-neutral-200">
<img alt="Marina Quarters concept" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=1600&amp;q=80"/>
<div className="bg-gradient-to-t from-black/40 via-black/10 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
<div className="text-white">
<div className="text-xs uppercase tracking-widest text-white/80">Coming Soon</div>
<div className="text-xl font-semibold tracking-tight">Marina Quarters</div>
</div>
</div>
</div>
<div className="relative rounded-2xl overflow-hidden border border-neutral-200">
<img alt="Skyline Lofts concept" className="h-64 w-full object-cover" src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="bg-gradient-to-t from-black/40 via-black/10 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
<div className="text-white">
<div className="text-xs uppercase tracking-widest text-white/80">Coming Soon</div>
<div className="text-xl font-semibold tracking-tight">Skyline Lofts</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 bg-neutral-50 border-neutral-200 border-t" id="contact">
<div className="sm:px-6 lg:px-8 lg:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="grid lg:grid-cols-2 gap-12">
<div className="">
<h2 className="sm:text-4xl text-3xl font-semibold text-neutral-900 tracking-tight">Get in Touch</h2>
<p className="mt-3 text-neutral-600 text-[15px] leading-7">Whether you are looking for your new home or exploring investment opportunities, our team is ready to assist.</p>
<form className="mt-8 space-y-4">
<div className="">
<label className="text-sm text-neutral-700">Name</label>
<input className="text-[15px] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#B08D57]/40 focus:border-transparent bg-white w-full border-neutral-300 border rounded-lg mt-1 pt-2.5 pr-4 pb-2.5 pl-4" placeholder="Your full name" type="text"/>
</div>
<div className="">
<label className="text-sm text-neutral-700">Email</label>
<input className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-[15px] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#B08D57]/40 focus:border-transparent" placeholder="you@example.com" type="email"/>
</div>
<div className="">
<label className="text-sm text-neutral-700">Message</label>
<textarea className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-[15px] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#B08D57]/40 focus:border-transparent" placeholder="Tell us what you're looking for…" rows="4"></textarea>
</div>
<button className="inline-flex gap-2 hover:bg-neutral-800 text-sm text-white bg-neutral-900 rounded-full pt-2.5 pr-6 pb-2.5 pl-6 gap-x-2 gap-y-2 items-center" type="submit">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
              Send Inquiry
            </button>
</form>
</div>
<div className="space-y-6">
<div className="bg-white border-neutral-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-2">
<svg className="lucide lucide-map-pin w-5 h-5 text-[#B08D57]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<h3 className="font-medium text-neutral-900 tracking-tight" style={{}}>Contact Us</h3>
</div>
<p className="text-sm text-neutral-600 mt-2" style={{}}></p>
<div className="mt-5 space-y-3">
<a className="flex items-center gap-3 hover:text-neutral-900 text-sm text-neutral-700" href="tel:+212600000000">+212 675-363962</a>
<a className="flex items-center gap-3 hover:text-neutral-900 text-sm text-neutral-700" href="/mailto:info@straitoftangier.com">info@straitoftangier.com</a>
</div>
</div>
<div className="bg-white border-neutral-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<h3 className="font-medium tracking-tight text-neutral-900 mb-4">Connect With Us</h3>
<div className="flex gap-3 gap-x-2 gap-y-2 items-center">
<a className="inline-flex items-center gap-2 hover:bg-neutral-50 text-sm border-neutral-300 border rounded-full pt-2 pr-4 pb-2 pl-4" href="https://www.youtube.com/@straitoftangier">YouTube<svg className="lucide lucide-youtube" data-icon-replaced="true" data-icon-set="lucide" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(38, 38, 38)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-neutral-900 grid place-items-center ring-1 ring-black/10">
<span className="text-white text-sm tracking-tight" style={{letterSpacing: '-0.02em'}}>STC</span>
</div>
<div>
<div className="text-sm font-medium text-neutral-900 tracking-tight">The Strait of Tangier Company</div>
<div className="text-xs text-neutral-500">© 2025. All rights reserved.</div>
</div>
</div>
<div className="text-xs text-neutral-500">
          All visuals are artistic impressions. Investment content is informational only.
        </div>
</div>
</div>
</footer>

<div className="fixed inset-0 hidden z-[60]" id="lightbox">
<div className="absolute inset-0 bg-black/80"></div>
<div className="relative h-full w-full flex items-center justify-center p-4">
<img alt="Gallery image" className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl border border-white/10 object-contain" id="lightbox-image" src=""/>
<button aria-label="Close gallery" className="absolute top-4 right-4 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20" id="lightbox-close">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<button aria-label="Previous image" className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20" id="lightbox-prev">
<svg className="lucide lucide-chevron-left w-5 h-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button aria-label="Next image" className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20" id="lightbox-next">
<svg className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>


    </>
  );
}
