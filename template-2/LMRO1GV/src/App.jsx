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
      
    // Current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Project Room Modal
    const modal = document.getElementById('projectModal');
    const pmHero = document.getElementById('pmHero');
    const pmTitle = document.getElementById('pmTitle');
    const pmLocation = document.getElementById('pmLocation');
    const pmMaterials = document.getElementById('pmMaterials');
    const pmStory = document.getElementById('pmStory');
    const pmCarousel = document.getElementById('pmCarousel');

    function openModal(fig){
      const imgs = (fig.dataset.images || '').split('|').filter(Boolean);
      pmTitle.textContent = fig.dataset.title || '';
      pmLocation.textContent = fig.dataset.location || '';
      pmMaterials.textContent = fig.dataset.materials || '';
      pmStory.textContent = fig.dataset.story || '';
      pmHero.src = imgs[0] || fig.querySelector('img')?.src || '';
      pmHero.alt = pmTitle.textContent;

      pmCarousel.innerHTML = '';
      imgs.forEach((src, idx) => {
        const t = document.createElement('img');
        t.src = src;
        t.alt = pmTitle.textContent + ' thumbnail ' + (idx+1);
        t.className = 'h-16 w-24 object-cover rounded ring-1 ring-white/20 cursor-pointer hover:ring-[#D4AF37] transition';
        t.addEventListener('click', ()=> { pmHero.src = src; });
        pmCarousel.appendChild(t);
      });

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    document.querySelectorAll('.project-trigger').forEach(fig => {
      fig.addEventListener('click', () => openModal(fig));
    });

    document.getElementById('pmClose').addEventListener('click', () => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });

    // Materials background hover
    const matBg = document.getElementById('materialsBg');
    document.querySelectorAll('#materials button[data-bg]').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        const src = btn.getAttribute('data-bg');
        matBg.style.backgroundImage = `url('${src}')`;
        matBg.style.opacity = '0.5';
      });
      btn.addEventListener('mouseleave', () => {
        matBg.style.opacity = '0.4';
      });
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
      

<div className="fixed top-0 inset-x-0 z-50">
<div className="mx-auto max-w-[1320px] px-6">
<div className="mt-4"></div>
</div>
<nav className="mx-auto max-w-[1320px] px-6 py-4 rounded-md backdrop-blur-md bg-[#0B1A2D]/55 ring-1 ring-white/10">
<div className="flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#top">
<span className="inline-flex items-center justify-center h-9 w-9 rounded-full ring-1 ring-[#D4AF37] text-[#D4AF37] tracking-[0.08em]" style={{fontFamily: `'Cinzel', serif`, fontWeight: `600`, fontSize: `14px`}}>FL</span>
<div className="leading-tight">
<div className="text-[18px] tracking-tight text-white" style={{fontFamily: `'Cinzel', serif`, fontWeight: `600`, letterSpacing: `0.02em`}}>
              Forever Legacy
            </div>
<div className="text-[12px] text-white/70 tracking-[0.12em] uppercase">mausoleums.com</div>
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-[16px] text-white/85 hover:text-white transition" href="#top">Home</a>
<a className="text-[16px] text-white/85 hover:text-white transition" href="#portfolio">Our Mausoleums</a>
<a className="text-[16px] text-white/85 hover:text-white transition" href="#assurance">About</a>
<a className="text-[16px] text-white/85 hover:text-white transition" href="#portfolio">Galleries</a>
<a className="text-[16px] text-white/85 hover:text-white transition" href="#consultation">Contact</a>
</div>

<div className="hidden lg:flex items-center gap-5">
<a className="text-[18px] tracking-wide text-white underline decoration-transparent hover:decoration-[#D4AF37] transition" href="tel:+18005554392" style={{fontWeight: `600`}}>(800) 555‑4392</a>
<a className="px-5 py-3 rounded-md text-[15px] tracking-wide hover:-translate-y-0.5 transition will-change-transform" href="#consultation" style={{border: `1px solid #D4AF37`, color: `#F8F8F6`, fontWeight: `600`}}>Schedule Consultation</a>
</div>
</div>
</nav>
</div>

<header className="relative w-full min-h-[92vh] bg-black overflow-hidden" id="top">
<div className="absolute inset-0">
<img alt="Client-provided mausoleum exterior — placeholder" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2070&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/35"></div>

<div className="absolute inset-0 pointer-events-none opacity-70" style={{backgroundImage: `repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 140px), repeating-linear-gradient(0deg, rgba(255,255,255,0.045) 0, rgba(255,255,255,0.045) 1px, transparent 1px, transparent 140px)`, mixBlend: `screen`}}></div>
</div>
<div className="relative max-w-[1320px] mx-auto px-6 pt-40 pb-24">
<div className="flex flex-col items-center text-center">

<div className="flex flex-col items-center">
<span className="inline-flex items-center justify-center h-14 w-14 rounded-full ring-1 ring-[#D4AF37] text-[#D4AF37] tracking-[0.12em] mb-4" style={{fontFamily: `'Cinzel', serif`, fontWeight: `600`, fontSize: `16px`}}>FL</span>
<div className="text-white/90 tracking-[0.14em] uppercase" style={{fontFamily: `'Cinzel', serif`, fontWeight: `600`, letterSpacing: `0.18em`}}>
            FOREVER LEGACY
          </div>
<div className="text-white/70 text-sm mt-1 tracking-[0.16em] uppercase">mausoleums.com</div>
</div>

<h1 className="mt-10 text-[56px] lg:text-[72px] leading-[1.05] tracking-tight" style={{fontFamily: `'Playfair Display', serif`, fontWeight: `600`, color: `#D4AF37`}}>
          Bespoke Private Mausoleums
        </h1>
<p className="mt-4 max-w-3xl text-[21px] lg:text-[22px] leading-8 text-white/90">
          Architecture for lineage, precision-built to last centuries.
        </p>

<div className="mt-12 flex flex-wrap items-center justify-center gap-4">
<a className="px-7 py-4 text-lg rounded-md shadow-sm transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:outline focus-visible:outline-2" href="#portfolio" style={{backgroundColor: `#D4AF37`, color: `#0B1A2D`, fontWeight: `600`, letterSpacing: `0.01em`}}>
            View Our Portfolio
          </a>
<a className="px-7 py-4 text-lg rounded-md transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:outline focus-visible:outline-2" href="#consultation" style={{border: `1px solid #D4AF37`, color: `#F8F8F6`, fontWeight: `600`, letterSpacing: `0.01em`, backgroundColor: `transparent`}}>
            Schedule a Consultation
          </a>
</div>
</div>
</div>
</header>

<section className="relative py-24 lg:py-28 bg-black" id="portfolio">
<div className="max-w-[1320px] mx-auto px-6 lg:px-8">
<div className="flex items-end justify-between mb-10">
<h2 className="text-[36px] lg:text-[44px] tracking-tight text-white" style={{fontFamily: `'Playfair Display', serif`, fontWeight: `600`}}>
          Portfolio Preview
        </h2>
<span className="text-white/60 text-[16px]">Selected commissions</span>
</div>

<div className="flex flex-wrap items-center gap-3 mb-8">
<button className="px-4 py-2 rounded-md text-[15px] transition" style={{border: `1px solid #D4AF37`, color: `#F8F8F6`, fontWeight: `600`}}>Classical</button>
<button className="px-4 py-2 rounded-md text-[15px] transition text-white/85 hover:text-white hover:ring-1 hover:ring-white/10">Modern</button>
<button className="px-4 py-2 rounded-md text-[15px] transition text-white/85 hover:text-white hover:ring-1 hover:ring-white/10">Stained Glass</button>
<button className="px-4 py-2 rounded-md text-[15px] transition text-white/85 hover:text-white hover:ring-1 hover:ring-white/10">Doors</button>
<button className="px-4 py-2 rounded-md text-[15px] transition text-white/85 hover:text-white hover:ring-1 hover:ring-white/10">Quarry</button>
</div>

<div className="relative">
<div className="w-full" style={{columnCount: `3`, columnGap: `22px`}}>

<figure className="mb-6 break-inside-avoid relative inline-block w-full overflow-hidden group cursor-pointer project-trigger" data-images="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1600&q=80|https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1600&q=80|https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1600&q=80" data-location="Greenwich, CT • 2023" data-materials="Vermont granite, bronze doors, leaded glass" data-story="A restrained neoclassical composition set to align with solstice light, engineered for coastal conditions." data-title="Greenwich Family Mausoleum">
<img alt="Client-provided mausoleum — placeholder" className="w-full h-auto object-cover transition duration-700 ease-out group-hover:opacity-90" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<figcaption className="absolute left-0 bottom-0 w-full p-5 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition">
<div className="inline-block text-white text-[17px] relative">
                Greenwich, 2023
                <span className="block mt-1 h-[2px]" style={{backgroundColor: `#D4AF37`}}></span>
</div>
</figcaption>
</figure>

<figure className="mb-6 break-inside-avoid relative inline-block w-full overflow-hidden group cursor-pointer project-trigger" data-images="https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1600&q=80|https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1600&q=80" data-location="Palm Beach, FL • 2019" data-materials="Limestone, bronze grille, carved cornice" data-story="Sun-shaded portico with hand-carved orders and bronze ventilation details." data-title="Palm Garden Pavilion">
<img alt="Client-provided mausoleum — placeholder" className="w-full h-auto object-cover transition duration-700 ease-out group-hover:opacity-90" src="https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=2070&auto=format&fit=crop" />
<figcaption className="absolute left-0 bottom-0 w-full p-5 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition">
<div className="inline-block text-white text-[17px] relative">
                Palm Beach, 2019
                <span className="block mt-1 h-[2px]" style={{backgroundColor: `#D4AF37`}}></span>
</div>
</figcaption>
</figure>

<figure className="mb-6 break-inside-avoid relative inline-block w-full overflow-hidden group cursor-pointer project-trigger" data-images="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1600&q=80|https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1600&q=80" data-location="Scottsdale, AZ • 2022" data-materials="Travertine, bronze threshold, engineered drainage" data-story="Minimalist volumes with thermal performance and ventilated cavity walls." data-title="Desert Stone House">
<img alt="Client-provided mausoleum — placeholder" className="w-full h-auto object-cover transition duration-700 ease-out group-hover:opacity-90" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<figcaption className="absolute left-0 bottom-0 w-full p-5 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition">
<div className="inline-block text-white text-[17px] relative">
                Scottsdale, 2022
                <span className="block mt-1 h-[2px]" style={{backgroundColor: `#D4AF37`}}></span>
</div>
</figcaption>
</figure>

<figure className="mb-6 break-inside-avoid relative inline-block w-full overflow-hidden group cursor-pointer project-trigger" data-images="https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1600&q=80|https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1600&q=80" data-location="Chicago, IL • 2020" data-materials="Limestone, bronze lantern, stained glass" data-story="A familial chapel with filtered light, elevated plinth, and frost-resistant detailing." data-title="Lakeside Reliquary">
<img alt="Client-provided mausoleum — placeholder" className="w-full h-auto object-cover transition duration-700 ease-out group-hover:opacity-90" src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2069&auto=format&fit=crop" />
<figcaption className="absolute left-0 bottom-0 w-full p-5 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition">
<div className="inline-block text-white text-[17px] relative">
                Chicago, 2020
                <span className="block mt-1 h-[2px]" style={{backgroundColor: `#D4AF37`}}></span>
</div>
</figcaption>
</figure>

<figure className="mb-6 break-inside-avoid relative inline-block w-full overflow-hidden group cursor-pointer project-trigger" data-images="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1600&q=80|https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1600&q=80" data-location="New York, NY • 2021" data-materials="Carrara marble, custom bronze door, inlaid crest" data-story="Urban sanctuary with acoustic dampening and precise vein matching." data-title="Marble Courts">
<img alt="Client-provided mausoleum — placeholder" className="w-full h-auto object-cover transition duration-700 ease-out group-hover:opacity-90" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<figcaption className="absolute left-0 bottom-0 w-full p-5 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition">
<div className="inline-block text-white text-[17px] relative">
                New York, 2021
                <span className="block mt-1 h-[2px]" style={{backgroundColor: `#D4AF37`}}></span>
</div>
</figcaption>
</figure>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-[60]" id="projectModal">
<div className="absolute inset-0 bg-black/70"></div>
<div className="relative mx-auto max-w-[1100px] h-[86vh] mt-10 rounded-md overflow-hidden bg-[#0B1A2D] ring-1 ring-[#D4AF37]/30">
<div className="grid grid-cols-12 h-full">

<div className="col-span-7 relative bg-black">
<img alt="" className="absolute inset-0 w-full h-full object-cover" id="pmHero" src="" />
<div className="absolute inset-0 ring-1 ring-white/10 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-black/40">
<div className="flex gap-3 overflow-x-auto" id="pmCarousel">

</div>
</div>
</div>

<div className="col-span-5 bg-gradient-to-b from-[#0B1A2D] to-black text-white p-8 flex flex-col">
<h3 className="text-[30px] tracking-tight mb-2" id="pmTitle" style={{fontFamily: `'Playfair Display', serif`, fontWeight: `600`, color: `#D4AF37`}}>Project Title</h3>
<div className="text-white/80 text-[16px] mb-6" id="pmLocation">Location • Year</div>
<div className="h-px w-14 mb-6" style={{backgroundColor: `#D4AF37`}}></div>
<div>
<div className="text-[17px] leading-7 text-white/90 mb-6" id="pmStory">
                Project story goes here.
              </div>
<div className="text-[16px] text-white/80">
<div className="mb-2">Materials</div>
<div className="text-white" id="pmMaterials">Stone, Bronze, Glass</div>
</div>
</div>
<div className="mt-auto pt-8">
<div className="flex items-center gap-3">
<button className="px-5 py-3 rounded-md text-[15px] transition" id="pmClose" style={{border: `1px solid #D4AF37`, color: `#F8F8F6`, fontWeight: `600`}}>Close</button>
<a className="px-5 py-3 rounded-md text-[15px] transition" href="#consultation" style={{backgroundColor: `#D4AF37`, color: `#0B1A2D`, fontWeight: `600`}}>Schedule Consultation</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 lg:py-28" id="assurance">
<div className="absolute inset-0">
<div className="absolute inset-0 bg-gradient-to-b from-[#0B1A2D] to-black"></div>
<div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage: `url('https://images.unsplash.com/photo-1540638349517-3abd5afc584c?q=80&w=2069&auto=format&fit=crop')`, backgroundSize: `cover`, backgroundPosition: `center`}}></div>
</div>
<div className="relative max-w-[1320px] mx-auto px-6 lg:px-8">
<div className="grid grid-cols-12 gap-10 items-center">
<div className="col-span-12 lg:col-span-6">
<div className="relative aspect-[4/3] rounded-md overflow-hidden bg-[#DADADA] ring-1 ring-white/10">
<img alt="Client-provided stone detail — placeholder" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1600&q=80" />
</div>
</div>
<div className="col-span-12 lg:col-span-6">
<h3 className="text-[36px] lg:text-[44px] tracking-tight" style={{fontFamily: `'Playfair Display', serif`, fontWeight: `600`, color: `#D4AF37`}}>
            The Legacy Assurance
          </h3>
<div className="h-px w-16 my-6" style={{backgroundColor: `#D4AF37`}}></div>
<p className="text-[19px] leading-8 text-[#F8F8F6]">
            Every Forever Legacy mausoleum is more than stone and craftsmanship — it is a promise. From the quarry to the final inscription, every detail is considered to endure centuries. Our artisans work with materials proven by history, our engineers design for permanence, and our custodial program ensures your family’s memorial remains as flawless as the day it was dedicated. This is not just a structure. It is a safeguard for your family’s legacy.
          </p>
</div>
</div>
</div>
</section>

<section className="relative py-24 lg:py-28 bg-[#F8F8F6]">
<div className="max-w-[1320px] mx-auto px-6 lg:px-8">
<h3 className="text-[36px] lg:text-[44px] tracking-tight mb-8" style={{fontFamily: `'Playfair Display', serif`, fontWeight: `600`, color: `#0B1A2D`}}>
        The Process
      </h3>
<div className="relative overflow-x-auto snap-x snap-mandatory flex gap-6 pb-2">

<article className="snap-start shrink-0 w-[88vw] md:w-[58vw] lg:w-[38vw] xl:w-[28vw] rounded-md overflow-hidden" style={{backgroundColor: `#ffffff`, border: `1px solid #D4AF37`}}>
<div className="p-7">
<h4 className="text-[26px] tracking-tight" style={{fontFamily: `'Playfair Display', serif`, fontWeight: `600`, color: `#0B1A2D`}}>Design</h4>
<p className="mt-3 text-[18px] leading-8 text-[#1A1A1A]/85">An intimate study of heritage, site, and proportion to establish a timeless concept.</p>
</div>
</article>
<article className="snap-start shrink-0 w-[88vw] md:w-[58vw] lg:w-[38vw] xl:w-[28vw] rounded-md overflow-hidden" style={{backgroundColor: `#ffffff`, border: `1px solid #D4AF37`}}>
<div className="p-7">
<h4 className="text-[26px]" style={{fontFamily: `'Playfair Display', serif`, fontWeight: `600`, color: `#0B1A2D`}}>Selection</h4>
<p className="mt-3 text-[18px] leading-8 text-[#1A1A1A]/85">Curated stone from historic quarries, vetted for vein continuity and longevity.</p>
</div>
</article>
<article className="snap-start shrink-0 w-[88vw] md:w-[58vw] lg:w-[38vw] xl:w-[28vw] rounded-md overflow-hidden" style={{backgroundColor: `#ffffff`, border: `1px solid #D4AF37`}}>
<div className="p-7">
<h4 className="text-[26px]" style={{fontFamily: `'Playfair Display', serif`, fontWeight: `600`, color: `#0B1A2D`}}>Crafting</h4>
<p className="mt-3 text-[18px] leading-8 text-[#1A1A1A]/85">Master stonecutters and bronze ateliers execute to museum standards.</p>
</div>
</article>
<article className="snap-start shrink-0 w-[88vw] md:w-[58vw] lg:w-[38vw] xl:w-[28vw] rounded-md overflow-hidden" style={{backgroundColor: `#ffffff`, border: `1px solid #D4AF37`}}>
<div className="p-7">
<h4 className="text-[26px]" style={{fontFamily: `'Playfair Display', serif`, fontWeight: `600`, color: `#0B1A2D`}}>Installation</h4>
<p className="mt-3 text-[18px] leading-8 text-[#1A1A1A]/85">White-glove logistics with structural, drainage, and sealing integrity.</p>
</div>
</article>
<article className="snap-start shrink-0 w-[88vw] md:w-[58vw] lg:w-[38vw] xl:w-[28vw] rounded-md overflow-hidden" style={{backgroundColor: `#ffffff`, border: `1px solid #D4AF37`}}>
<div className="p-7">
<h4 className="text-[26px]" style={{fontFamily: `'Playfair Display', serif`, fontWeight: `600`, color: `#0B1A2D`}}>Dedication</h4>
<p className="mt-3 text-[18px] leading-8 text-[#1A1A1A]/85">A quiet unveiling and custodial guidance for generations to come.</p>
</div>
</article>
</div>
</div>
</section>

<section className="relative py-14 bg-[#F8F8F6]" id="materials">
<div className="absolute inset-0 transition-opacity duration-500 opacity-40 pointer-events-none" id="materialsBg" style={{backgroundImage: `url('https://images.unsplash.com/photo-1582582429416-57049e1f5fb5?w=1600&q=80')`, backgroundSize: `cover`, backgroundPosition: `center`}}></div>
<div className="relative max-w-[1320px] mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between mb-6">
<h3 className="text-[28px] lg:text-[32px] tracking-tight" style={{fontFamily: `'Playfair Display', serif`, fontWeight: `600`, color: `#0B1A2D`}}>Material Expertise</h3>
<div className="h-px w-16" style={{backgroundColor: `#D4AF37`}}></div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">

<button className="group relative overflow-hidden rounded-md p-4 text-left ring-1 ring-black/5 hover:ring-[#D4AF37] transition" data-bg="https://images.unsplash.com/photo-1582582429416-57049e1f5fb5?w=1600&q=80">
<div className="h-16 w-full rounded mb-3" style={{background: `#e6e6e6`}}></div>
<div className="text-[16px] font-medium text-[#1A1A1A]">Carrara</div>
</button>
<button className="group relative overflow-hidden rounded-md p-4 text-left ring-1 ring-black/5 hover:ring-[#D4AF37] transition" data-bg="https://images.unsplash.com/photo-1544989164-31dc3c645987?w=1600&q=80">
<div className="h-16 w-full rounded mb-3" style={{background: `#c9c9c9`}}></div>
<div className="text-[16px] font-medium text-[#1A1A1A]">Vermont Granite</div>
</button>
<button className="group relative overflow-hidden rounded-md p-4 text-left ring-1 ring-black/5 hover:ring-[#D4AF37] transition" data-bg="https://images.unsplash.com/photo-1582582429416-57049e1f5fb5?w=1600&q=80">
<div className="h-16 w-full rounded mb-3" style={{background: `#d9c6ac`}}></div>
<div className="text-[16px] font-medium text-[#1A1A1A]">Travertine</div>
</button>
<button className="group relative overflow-hidden rounded-md p-4 text-left ring-1 ring-black/5 hover:ring-[#D4AF37] transition" data-bg="https://images.unsplash.com/photo-1611667816700-9fe6146031db?w=1600&q=80">
<div className="h-16 w-full rounded mb-3" style={{background: `#b08d57`}}></div>
<div className="text-[16px] font-medium text-[#1A1A1A]">Bronze</div>
</button>
<button className="group relative overflow-hidden rounded-md p-4 text-left ring-1 ring-black/5 hover:ring-[#D4AF37] transition" data-bg="https://images.unsplash.com/photo-1540638349517-3abd5afc584c?w=1600&q=80">
<div className="h-16 w-full rounded mb-3" style={{background: `#a69f94`}}></div>
<div className="text-[16px] font-medium text-[#1A1A1A]">Limestone</div>
</button>
<button className="group relative overflow-hidden rounded-md p-4 text-left ring-1 ring-black/5 hover:ring-[#D4AF37] transition" data-bg="https://images.unsplash.com/photo-1600093463592-8e89fefb2f68?w=1600&q=80">
<div className="h-16 w-full rounded mb-3" style={{background: `#8b8f98`}}></div>
<div className="text-[16px] font-medium text-[#1A1A1A]">Leaded Glass</div>
</button>
</div>
</div>
</section>

<section className="relative py-24 lg:py-28 bg-[#F8F8F6]">
<div className="max-w-[1000px] mx-auto px-6 lg:px-8 text-center">
<h3 className="text-[32px] lg:text-[40px] tracking-tight mb-10" style={{fontFamily: `'Playfair Display', serif`, fontWeight: `600`, color: `#0B1A2D`}}>Testimonials</h3>
<div className="space-y-14">
<blockquote className="mx-auto max-w-3xl">
<p className="text-[26px] lg:text-[30px] leading-[1.4] text-[#1A1A1A]" style={{fontFamily: `'Playfair Display', serif`, fontWeight: `600`}}>
            “From the first sketch to the dedication, every detail reflected restraint and permanence. It will stand for our grandchildren and theirs.”
          </p>
<footer className="mt-4 text-[16px] text-[#1A1A1A]/70">— A.M., Palm Beach</footer>
</blockquote>
<blockquote className="mx-auto max-w-3xl">
<p className="text-[26px] lg:text-[30px] leading-[1.4] text-[#1A1A1A]" style={{fontFamily: `'Playfair Display', serif`, fontWeight: `600`}}>
            “Precision stonework and quiet elegance. The team guided us with dignity and care at every step.”
          </p>
<footer className="mt-4 text-[16px] text-[#1A1A1A]/70">— R.K., Greenwich</footer>
</blockquote>
<blockquote className="mx-auto max-w-3xl">
<p className="text-[26px] lg:text-[30px] leading-[1.4] text-[#1A1A1A]" style={{fontFamily: `'Playfair Display', serif`, fontWeight: `600`}}>
            “It feels timeless without excess. The craftsmanship is extraordinary.”
          </p>
<footer className="mt-4 text-[16px] text-[#1A1A1A]/70">— J.S., Scottsdale</footer>
</blockquote>
</div>
</div>
</section>

<section className="relative" id="consultation">
<div className="relative w-full h-[520px] lg:h-[580px]">
<img alt="Client-provided mausoleum at sunset — placeholder" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1600&q=80" />
<div className="absolute inset-0" style={{background: `linear-gradient(180deg, rgba(11,26,45,0.66), rgba(0,0,0,0.66))`}}></div>
<div className="relative max-w-[1000px] mx-auto px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
<h4 className="tracking-tight text-[36px] lg:text-[46px]" style={{fontFamily: `'Playfair Display', serif`, fontWeight: `600`, color: `#D4AF37`}}>
          Begin the Conversation.
        </h4>
<p className="mt-4 text-[#F8F8F6] text-[18px] lg:text-[20px] max-w-2xl">
          Your legacy, in enduring stone.
        </p>
<div className="mt-8 flex items-center gap-4">
<a className="px-7 py-4 text-lg rounded-md shadow-sm transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:outline focus-visible:outline-2" href="mailto:inquiries@mausoleums.com" style={{backgroundColor: `#D4AF37`, color: `#0B1A2D`, fontWeight: `600`, letterSpacing: `0.01em`}}>
            Schedule a Private Consultation
          </a>
<a className="text-white/90 text-xl underline decoration-transparent hover:decoration-[#D4AF37] transition" href="tel:+18005554392" style={{fontWeight: `600`}}>
            (800) 555‑4392
          </a>
</div>
</div>
</div>
</section>

<footer className="relative">
<div className="relative bg-[#0B1A2D]">
<div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage: `url('https://images.unsplash.com/photo-1540638349517-3abd5afc584c?q=80&w=2069&auto=format&fit=crop')`, backgroundSize: `cover`, backgroundPosition: `center`}}></div>
<div className="relative max-w-[1320px] mx-auto px-6 lg:px-8 py-14">
<div className="grid grid-cols-12 gap-10">
<div className="col-span-12 lg:col-span-6">
<div className="tracking-tight text-white" style={{fontFamily: `'Cinzel', serif`}}>
<div className="text-[26px]" style={{fontWeight: `600`}}>Forever Legacy</div>
<div className="mt-1 text-white/70 text-[14px]" style={{letterSpacing: `0.08em`}}>mausoleums.com</div>
</div>
<p className="mt-6 text-white/70 max-w-md text-[16px] leading-7">
              Premier builder of private mausoleums across the United States. Bespoke architecture, enduring materials, discreet service.
            </p>
</div>
<div className="col-span-12 lg:col-span-6">
<div className="flex flex-col items-start lg:items-end h-full">
<div className="text-white text-[16px] leading-7">
<div className="flex gap-6">
<a className="text-white/80 hover:text-white transition" href="#top">Home</a>
<a className="text-white/80 hover:text-white transition" href="#portfolio">Our Mausoleums</a>
<a className="text-white/80 hover:text-white transition" href="#assurance">About</a>
<a className="text-white/80 hover:text-white transition" href="#portfolio">Galleries</a>
<a className="text-white/80 hover:text-white transition" href="#consultation">Contact</a>
</div>
<div className="mt-4"><span className="text-white/60">E:</span> <a className="underline decoration-transparent hover:decoration-[#D4AF37] transition" href="mailto:inquiries@mausoleums.com">inquiries@mausoleums.com</a></div>
<div className="mt-1"><span className="text-white/60">T:</span> <a className="underline decoration-transparent hover:decoration-[#D4AF37] transition" href="tel:+18005554392">(800) 555‑4392</a></div>
<div className="mt-1"><span className="text-white/60">Offices:</span> New York • Palm Beach • Los Angeles</div>
</div>
</div>
</div>
</div>
<div className="mt-10 h-px" style={{backgroundColor: `#D4AF37`}}></div>
<div className="pt-5 text-white/60 text-[14px]">
          © <span id="year"></span> Forever Legacy. All Rights Reserved.
        </div>
</div>
</div>
</footer>



    </>
  );
}
