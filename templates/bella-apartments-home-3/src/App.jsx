import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener("DOMContentLoaded", function () {
        const cards = document.querySelectorAll(".js-observe");

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.remove("opacity-0", "translate-y-4", "scale-[0.98]");
                entry.target.classList.add("opacity-100", "translate-y-0", "scale-100");
                observer.unobserve(entry.target);
              }
            });
          },
          {
            threshold: 0.15,
          }
        );

        cards.forEach((card, index) => {
          card.style.transitionDelay = `${index * 40}ms`;
          observer.observe(card);
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex flex-col">

<header className="border-b border-slate-200 bg-white/80 backdrop-blur">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<div className="flex items-center gap-3">
<img alt="Bella Apartments logo" className="h-[2.72rem] w-auto" src="https://ik.imagekit.io/jnwpkntpm/bella-logo-final.png"/>
<div className="hidden sm:flex flex-col">
<span className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                  Modern • Urban • Bonita
                </span>
</div>
</div>

<nav className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.18em] uppercase">
<a className="text-slate-500 hover:text-slate-900" href="/">
                Home
              </a>
<a className="text-slate-500 hover:text-slate-900 cursor-pointer">
                About
              </a>
<a className="text-slate-900 hover:text-slate-900" href="/floorplans">
                Apartments
              </a>
<a className="text-slate-500 hover:text-slate-900 cursor-pointer">
                Amenities
              </a>
<a className="text-slate-500 hover:text-slate-900 cursor-pointer">
                Bonita Springs
              </a>
<button className="ml-4 inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-[11px] font-medium tracking-[0.2em] hover:bg-slate-800 transition-colors">
                Book a Showing
              </button>
</nav>

<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-300 p-2 text-slate-700 bg-white">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="7" y2="7"></line>
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="17" y2="17"></line>
</svg>
</button>
</div>
</div>
</header>

<main className="flex-1 bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100">

<section className="border-b border-slate-200">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
<div className="max-w-3xl">
<p className="text-[11px] uppercase font-medium text-slate-500 tracking-[0.22em]">
                  Floorplans
                </p>
<h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900">
                  Light-filled homes, thoughtfully sized.
                </h1>

<p className="mt-2 text-sm text-slate-700">
                  1BR starting at $2,250 – 2BR starting at $2,350
                </p>
<p className="mt-4 text-sm text-slate-600 max-w-xl">
                  Browse all sixteen residences at Bella—from efficient studios
                  to expanded two-bedrooms with balconies. Every layout is
                  optimized for natural light, storage, and everyday luxury
                  living.
                </p>
</div>
<div className="w-full max-w-sm lg:w-auto flex flex-col gap-3 text-xs text-slate-600">
<div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
<div className="flex flex-col">
<span className="text-[11px] font-medium tracking-[0.16em] uppercase text-slate-500">Current Availability</span>
<span className="text-sm text-slate-900">
                      Studios – 2 BR + Den
                    </span>
</div>
<span className="text-[11px] text-slate-500">
                    Updated daily
                  </span>
</div>
<p className="text-xs text-slate-500">
                  Availability changes frequently. Share your ideal move-in date
                  and we’ll tailored options within minutes.
                </p>
<div className="flex flex-wrap gap-3">
<button className="inline-flex flex-1 items-center justify-center rounded-full bg-slate-900 text-white px-4 py-2 text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-slate-800 transition-colors">
                    Book a Showing
                  </button>
<button className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-[11px] font-medium tracking-[0.2em] uppercase text-slate-700 hover:border-slate-400 hover:text-slate-900 bg-white transition-colors">
                    Download Brochure
                  </button>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

<div className="flex flex-wrap gap-2 sm:gap-3 text-[11px]">
<button className="px-3 py-1.5 rounded-full bg-slate-900 text-white font-medium tracking-[0.18em]">
                  All Homes (16)
                </button>
<button className="px-3 py-1.5 rounded-full border border-slate-300 bg-white text-slate-700 font-medium tracking-[0.18em] hover:border-slate-400 hover:text-slate-900 transition-colors">
                  1 Bedroom
                </button>
<button className="px-3 py-1.5 rounded-full border border-slate-300 bg-white text-slate-700 font-medium tracking-[0.18em] hover:border-slate-400 hover:text-slate-900 transition-colors">
                  2 Bedroom
                </button>
</div>

<div className="flex flex-wrap gap-3 items-center text-[11px] text-slate-500">
<div className="flex items-center gap-2">
<span className="uppercase tracking-[0.18em]">
                    Approx. Sq Ft
                  </span>
<span className="px-3 py-1 rounded-full border border-slate-300 bg-white text-slate-700">
                    900 – 1,100
                  </span>
</div>
<div className="hidden sm:inline-flex items-center gap-2">
<span className="h-1 w-1 rounded-full bg-slate-400"></span>
<span>Pet-friendly • Parking available</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 sm:py-12">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid gap-6 sm:gap-7 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr">

<article className="js-observe group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.10)] flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(15,23,42,0.16)] opacity-0 translate-y-4 scale-[0.98]">
<div className="h-[2px] w-full bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900/60 opacity-80"></div>
<div className="relative bg-slate-50/80">
<img alt="Residence 201 floorplan with balcony and 2nd floor key plan" className="w-full h-auto object-contain rounded-t-[22px]" src="https://ik.imagekit.io/jnwpkntpm/201.png?updatedAt=1763831821823"/>
</div>

<div className="px-5 sm:px-6 pb-4 sm:pb-5 relative">
<div className="absolute inset-x-5 sm:inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="flex items-start justify-between gap-2 text-xs text-slate-700 pt-2">
<div className="flex flex-col gap-1">
<span className="text-[11px] tracking-[0.18em] uppercase text-slate-900">
                        201
                      </span>
<span className="text-[11px] text-slate-500">
                        2 Bed • 2 Bath • Approx. 1,100 sq ft • Outdoor balcony
                      </span>
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 text-[10px] tracking-[0.16em] uppercase">
                        2nd floor
                      </span>
</div>
</div>
<p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    Experience modern urban living in this spacious 1,100 square
                    foot two-bedroom, two-bathroom apartment on the 2nd
                    floor. This thoughtfully designed layout features an
                    open-concept living and dining area with large windows that
                    fill the home with natural light. The split-bedroom design
                    ensures privacy, with a primary suite offering a generous
                    walk-in closet and en-suite bathroom. Enjoy your morning
                    coffee on the private outdoor balcony, and take advantage of
                    the in-unit washer/dryer, custom closet systems, and modern
                    kitchen with quartz countertops and stainless steel
                    appliances. Covered secured parking garage included.
                  </p>
</div>
</article>

<article className="js-observe group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.10)] flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(15,23,42,0.16)] opacity-0 translate-y-4 scale-[0.98]">
<div className="h-[2px] w-full bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900/60 opacity-80"></div>
<div className="relative bg-slate-50/80">
<img alt="Residence 202 floorplan with balcony and 2nd floor key plan" className="w-full h-auto object-contain rounded-t-[22px]" src="https://ik.imagekit.io/jnwpkntpm/202.png?updatedAt=1763831822370"/>
</div>
<div className="px-5 sm:px-6 pb-4 sm:pb-5 relative">
<div className="absolute inset-x-5 sm:inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="flex items-start justify-between gap-2 text-xs text-slate-700 pt-2">
<div className="flex flex-col gap-1">
<span className="text-[11px] tracking-[0.18em] uppercase text-slate-900">
                        202
                      </span>
<span className="text-[11px] text-slate-500">
                        2 Bed • 2 Bath • Approx. 950 sq ft • Outdoor balcony •
                        ADA accessible
                      </span>
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 text-[10px] tracking-[0.16em] uppercase">
                        2nd floor
                      </span>
</div>
</div>
<p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    This ADA-accessible two-bedroom, two-bathroom apartment
                    offers 950 square feet of barrier-free living on the 2nd
                    floor. Designed with accessibility and comfort in mind, this
                    home features an open floor plan with wide doorways, a
                    spacious living room, and an outdoor balcony perfect for
                    relaxing. Both bedrooms include ample closet space, and the
                    residence includes in-unit washer/dryer, modern cabinetry,
                    quartz countertops, stainless steel appliances, and
                    high-efficiency air conditioning. Enjoy convenient access to
                    the building elevator, pool, outdoor patio, and workout
                    room.
                  </p>
</div>
</article>

<article className="js-observe group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.10)] flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(15,23,42,0.16)] opacity-0 translate-y-4 scale-[0.98]">
<div className="h-[2px] w-full bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900/60 opacity-80"></div>
<div className="relative bg-slate-50/80">
<img alt="Residence 203 floorplan" className="w-full h-auto object-contain rounded-t-[22px]" src="https://ik.imagekit.io/jnwpkntpm/203.png?updatedAt=1763831822017"/>
</div>
<div className="px-5 sm:px-6 pb-4 sm:pb-5 relative">
<div className="absolute inset-x-5 sm:inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="flex items-start justify-between gap-2 text-xs text-slate-700 pt-2">
<div className="flex flex-col gap-1">
<span className="text-[11px] tracking-[0.18em] uppercase text-slate-900">
                        203
                      </span>
<span className="text-[11px] text-slate-500">
                        2 Bed • 2 Bath • Approx. 980 sq ft • Outdoor balcony
                      </span>
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 text-[10px] tracking-[0.16em] uppercase">
                        2nd floor
                      </span>
</div>
</div>
<p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    Discover refined living in this 980 square foot two-bedroom,
                    two-bathroom residence on the 2nd floor. The
                    open-concept design seamlessly connects the living room and
                    kitchen, creating an ideal space for entertaining. Large
                    windows and sliding doors lead to a private balcony, while
                    the split-bedroom layout provides privacy for residents and
                    guests. The primary bedroom features a luxurious en-suite
                    bathroom with dual vanities, and the generous walk-in closet
                    offers abundant storage. Modern finishes include quartz
                    countertops, stainless steel appliances, custom closet
                    systems, and in-unit laundry.
                  </p>
</div>
</article>

<article className="js-observe group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.10)] flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(15,23,42,0.16)] opacity-0 translate-y-4 scale-[0.98]">
<div className="h-[2px] w-full bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900/60 opacity-80"></div>
<div className="relative bg-slate-50/80">
<img alt="Residence 204 floorplan" className="w-full h-auto object-contain rounded-t-[22px]" src="https://ik.imagekit.io/jnwpkntpm/204.png?updatedAt=1763831822455"/>
</div>
<div className="px-5 sm:px-6 pb-4 sm:pb-5 relative">
<div className="absolute inset-x-5 sm:inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="flex items-start justify-between gap-2 text-xs text-slate-700 pt-2">
<div className="flex flex-col gap-1">
<span className="text-[11px] tracking-[0.18em] uppercase text-slate-900">
                        204
                      </span>
<span className="text-[11px] text-slate-500">
                        2 Bed • 2 Bath • Approx. 1,100 sq ft • Outdoor balcony
                      </span>
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 text-[10px] tracking-[0.16em] uppercase">
                        2nd floor
                      </span>
</div>
</div>
<p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    This elegant 1,100 square foot two-bedroom, two-bathroom
                    apartment on the 2nd floor combines style and
                    functionality. The spacious living area flows effortlessly
                    into the dining space and modern kitchen, perfect for
                    everyday living and entertaining. Enjoy the convenience of
                    two full bathrooms, generous closet space, and a private
                    outdoor balcony. Premium features include in-unit
                    washer/dryer, custom closet systems, quartz countertops,
                    modern cabinetry, and large windows that bring in abundant
                    natural light. Residents also enjoy access to a pool,
                    outdoor patio, workout room/gym, and covered secured
                    parking.
                  </p>
</div>
</article>

<article className="js-observe group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.10)] flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(15,23,42,0.16)] opacity-0 translate-y-4 scale-[0.98]">
<div className="h-[2px] w-full bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900/60 opacity-80"></div>
<div className="relative bg-slate-50/80">

<img alt="Residence 205 floorplan" className="w-full h-auto object-contain rounded-t-[22px]" src="https://ik.imagekit.io/jnwpkntpm/205,206,207.png?updatedAt=1763831822433"/>
</div>
<div className="px-5 sm:px-6 pb-4 sm:pb-5 relative">
<div className="absolute inset-x-5 sm:inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="flex items-start justify-between gap-2 text-xs text-slate-700 pt-2">
<div className="flex flex-col gap-1">
<span className="text-[11px] tracking-[0.18em] uppercase text-slate-900">
                        205
                      </span>
<span className="text-[11px] text-slate-500">
                        2 Bed • 2 Bath • Approx. 1,000 sq ft • Outdoor balcony
                      </span>
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 text-[10px] tracking-[0.16em] uppercase">
                        2nd floor
                      </span>
</div>
</div>
<p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    These beautifully appointed 1,000 square foot two-bedroom,
                    two-bathroom apartments on the 2nd floor offer the
                    perfect blend of comfort and modern design. The open floor
                    plan creates a seamless flow between the living room, dining
                    area, and kitchen, while the private balcony extends your
                    living space outdoors. Both bedrooms feature generous closet
                    space, with the primary suite boasting a walk-in closet and
                    en-suite bathroom. Enjoy contemporary finishes including
                    quartz countertops, stainless steel appliances, modern
                    cabinetry, and in-unit washer/dryer. Building amenities
                    include elevator access, pool, outdoor patio, and a
                    state-of-the-art workout room.
                  </p>
</div>
</article>

<article className="js-observe group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.10)] flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(15,23,42,0.16)] opacity-0 translate-y-4 scale-[0.98]">
<div className="h-[2px] w-full bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900/60 opacity-80"></div>
<div className="relative bg-slate-50/80">

<img alt="Residence 206 floorplan" className="w-full h-auto object-contain rounded-t-[22px]" src="https://ik.imagekit.io/jnwpkntpm/205,206,207.png?updatedAt=1763831822433"/>
</div>
<div className="px-5 sm:px-6 pb-4 sm:pb-5 relative">
<div className="absolute inset-x-5 sm:inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="flex items-start justify-between gap-2 text-xs text-slate-700 pt-2">
<div className="flex flex-col gap-1">

<span className="text-[11px] tracking-[0.18em] uppercase text-slate-900">
                        206
                      </span>
<span className="text-[11px] text-slate-500">
                        2 Bed • 2 Bath • Approx. 1,000 sq ft • Outdoor balcony
                      </span>
</div>
<div className="text-right flex flex-col items-end gap-1">

<span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 text-[10px] tracking-[0.16em] uppercase">
                        2nd floor
                      </span>
</div>
</div>
<p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    These beautifully appointed 1,000 square foot two-bedroom,
                    two-bathroom apartments on the 2nd floor offer the
                    perfect blend of comfort and modern design. The open floor
                    plan creates a seamless flow between the living room, dining
                    area, and kitchen, while the private balcony extends your
                    living space outdoors. Both bedrooms feature generous closet
                    space, with the primary suite boasting a walk-in closet and
                    en-suite bathroom. Enjoy contemporary finishes including
                    quartz countertops, stainless steel appliances, modern
                    cabinetry, and in-unit washer/dryer. Building amenities
                    include elevator access, pool, outdoor patio, and a
                    state-of-the-art workout room.
                  </p>
</div>
</article>

<article className="js-observe group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.10)] flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(15,23,42,0.16)] opacity-0 translate-y-4 scale-[0.98]">
<div className="h-[2px] w-full bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900/60 opacity-80"></div>
<div className="relative bg-slate-50/80">

<img alt="Residence 207 floorplan" className="w-full h-auto object-contain rounded-t-[22px]" src="https://ik.imagekit.io/jnwpkntpm/205,206,207.png?updatedAt=1763831822433"/>
</div>
<div className="px-5 sm:px-6 pb-4 sm:pb-5 relative">
<div className="absolute inset-x-5 sm:inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="flex items-start justify-between gap-2 text-xs text-slate-700 pt-2">
<div className="flex flex-col gap-1">
<span className="text-[11px] tracking-[0.18em] uppercase text-slate-900">
                        207
                      </span>
<span className="text-[11px] text-slate-500">
                        2 Bed • 2 Bath • Approx. 1,000 sq ft • Outdoor balcony
                      </span>
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 text-[10px] tracking-[0.16em] uppercase">
                        2nd floor
                      </span>
</div>
</div>
<p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    These beautifully appointed 1,000 square foot two-bedroom,
                    two-bathroom apartments on the 2nd floor offer the
                    perfect blend of comfort and modern design. The open floor
                    plan creates a seamless flow between the living room, dining
                    area, and kitchen, while the private balcony extends your
                    living space outdoors. Both bedrooms feature generous closet
                    space, with the primary suite boasting a walk-in closet and
                    en-suite bathroom. Enjoy contemporary finishes including
                    quartz countertops, stainless steel appliances, modern
                    cabinetry, and in-unit washer/dryer. Building amenities
                    include elevator access, pool, outdoor patio, and a
                    state-of-the-art workout room.
                  </p>
</div>
</article>

<article className="js-observe group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.10)] flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(15,23,42,0.16)] opacity-0 translate-y-4 scale-[0.98]">
<div className="h-[2px] w-full bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900/60 opacity-80"></div>
<div className="relative bg-slate-50/80">
<img alt="Residence 301 floorplan" className="w-full h-auto object-contain rounded-t-[22px]" src="https://ik.imagekit.io/jnwpkntpm/301.png?updatedAt=1763831821852"/>
</div>

<div className="px-5 sm:px-6 pb-4 sm:pb-5 relative">
<div className="absolute inset-x-5 sm:inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="flex items-start justify-between gap-2 text-xs text-slate-700 pt-2">
<div className="flex flex-col gap-1">
<span className="text-[11px] tracking-[0.18em] uppercase text-slate-900">
                        301
                      </span>
<span className="text-[11px] text-slate-500">
                        2 Bed • 2 Bath • Approx. 1,100 sq ft • Outdoor balcony
                      </span>
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="inline-flex items-center rounded-full bg-sky-50 text-sky-700 border border-sky-100 px-2 py-0.5 text-[10px] tracking-[0.16em] uppercase">
                        3rd floor
                      </span>
</div>
</div>
<p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    Elevate your lifestyle in this stunning 1,100 square foot
                    two-bedroom, two-bathroom apartment on the 3rd floor. This
                    sophisticated residence features an open-concept living and
                    dining area with expansive windows and a private balcony
                    offering elevated views. The split-bedroom design ensures
                    privacy, with the primary bedroom featuring a luxurious
                    walk-in closet and spa-like en-suite bathroom. Modern
                    amenities include in-unit washer/dryer, custom closet
                    systems, quartz countertops, stainless steel appliances, and
                    high-efficiency air conditioning. Enjoy convenient elevator
                    access and proximity to the pool, outdoor patio, and workout
                    room.
                  </p>
</div>
</article>

<article className="js-observe group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.10)] flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(15,23,42,0.16)] opacity-0 translate-y-4 scale-[0.98]">

<div className="h-[2px] w-full bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900/60 opacity-80"></div>
<div className="relative bg-slate-50/80">
<img alt="Residence 302 floorplan" className="w-full h-auto object-contain rounded-t-[22px]" src="https://ik.imagekit.io/jnwpkntpm/302.png?updatedAt=1763831822015"/>
</div>
<div className="px-5 sm:px-6 pb-4 sm:pb-5 relative">
<div className="absolute inset-x-5 sm:inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="flex items-start justify-between gap-2 text-xs text-slate-700 pt-2">
<div className="flex flex-col gap-1">
<span className="text-[11px] tracking-[0.18em] uppercase text-slate-900">
                        302
                      </span>
<span className="text-[11px] text-slate-500">
                        2 Bed • 2 Bath • Approx. 1,000 sq ft • Outdoor balcony •
                        ADA accessible
                      </span>
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="inline-flex items-center rounded-full bg-sky-50 text-sky-700 border border-sky-100 px-2 py-0.5 text-[10px] tracking-[0.16em] uppercase">
                        3rd floor
                      </span>
</div>
</div>
<p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    This thoughtfully designed ADA-accessible two-bedroom,
                    two-bathroom apartment offers 1,000 square feet of
                    comfortable, barrier-free living on the 3rd floor. The
                    open floor plan maximizes space and accessibility, with wide
                    doorways and an accessible bathroom design. Enjoy the
                    private balcony, spacious living area, and modern kitchen
                    with quartz countertops and stainless steel appliances. Both
                    bedrooms offer generous closet space, and the home includes
                    in-unit washer/dryer and custom closet systems. Elevator
                    access connects you to all floors and amenities, including
                    the pool, outdoor patio, and workout room/gym.
                  </p>
</div>
</article>

<article className="js-observe group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.10)] flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(15,23,42,0.16)] opacity-0 translate-y-4 scale-[0.98]">
<div className="h-[2px] w-full bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900/60 opacity-80"></div>
<div className="relative bg-slate-50/80">
<img alt="Residence 303 floorplan" className="w-full h-auto object-contain rounded-t-[22px]" src="https://ik.imagekit.io/jnwpkntpm/303.png?updatedAt=1763831822007"/>
</div>

<div className="px-5 sm:px-6 pb-4 sm:pb-5 relative">
<div className="absolute inset-x-5 sm:inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="flex items-start justify-between gap-2 text-xs text-slate-700 pt-2">
<div className="flex flex-col gap-1">
<span className="text-[11px] tracking-[0.18em] uppercase text-slate-900">
                        303
                      </span>
<span className="text-[11px] text-slate-500">
                        2 Bed • 2 Bath • Approx. 1,000 sq ft • Outdoor balcony
                      </span>
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="inline-flex items-center rounded-full bg-sky-50 text-sky-700 border border-sky-100 px-2 py-0.5 text-[10px] tracking-[0.16em] uppercase">
                        3rd floor
                      </span>
</div>
</div>

<p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    This contemporary 1,000 square foot two-bedroom,
                    two-bathroom apartment on the 3rd floor offers modern
                    living at its finest. The open-concept layout creates a
                    bright and airy atmosphere, with large windows and sliding
                    doors leading to a private balcony. The split-bedroom design
                    provides privacy, with the primary suite featuring a walk-in
                    closet and en-suite bathroom with dual vanities. Enjoy
                    premium finishes including quartz countertops, modern
                    cabinetry, stainless steel appliances, custom closet
                    systems, and in-unit washer/dryer. Building amenities
                    include elevator access, pool, outdoor patio, and a fully
                    equipped workout room.
                  </p>
</div>
</article>

<article className="js-observe group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.10)] flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(15,23,42,0.16)] opacity-0 translate-y-4 scale-[0.98]">

<div className="h-[2px] w-full bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900/60 opacity-80"></div>
<div className="relative bg-slate-50/80">
<img alt="Residence 304 floorplan" className="w-full h-auto object-contain rounded-t-[22px]" src="https://ik.imagekit.io/jnwpkntpm/304.png?updatedAt=1763831822054"/>
</div>
<div className="px-5 sm:px-6 pb-4 sm:pb-5 relative">
<div className="absolute inset-x-5 sm:inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="flex items-start justify-between gap-2 text-xs text-slate-700 pt-2">
<div className="flex flex-col gap-1">
<span className="text-[11px] tracking-[0.18em] uppercase text-slate-900">
                        304
                      </span>
<span className="text-[11px] text-slate-500">
                        2 Bed • 2 Bath • Approx. 1,100 sq ft • Outdoor balcony
                      </span>
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="inline-flex items-center rounded-full bg-sky-50 text-sky-700 border border-sky-100 px-2 py-0.5 text-[10px] tracking-[0.16em] uppercase">
                        3rd floor
                      </span>
</div>
</div>
<p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    Experience elevated living in this spacious 1,100 square
                    foot two-bedroom, two-bathroom apartment on the 3rd floor.
                    This beautifully designed residence features an open floor
                    plan with a generous living area, dining space, and modern
                    kitchen. The private outdoor balcony offers a perfect
                    retreat, while the split-bedroom layout ensures privacy for
                    all residents. Both bathrooms are well-appointed, and the
                    primary bedroom includes a luxurious walk-in closet. Modern
                    amenities include in-unit washer/dryer, custom closet
                    systems, quartz countertops, stainless steel appliances, and
                    large windows with sliding doors. Covered secured parking
                    and elevator access are included.
                  </p>
</div>
</article>

<article className="js-observe group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.10)] flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(15,23,42,0.16)] opacity-0 translate-y-4 scale-[0.98]">
<div className="h-[2px] w-full bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900/60 opacity-80"></div>
<div className="relative bg-slate-50/80">

<img alt="Residence 305 floorplan" className="w-full h-auto object-contain rounded-t-[22px]" src="https://ik.imagekit.io/jnwpkntpm/305,306,307.png?updatedAt=1763831822459"/>
</div>
<div className="px-5 sm:px-6 pb-4 sm:pb-5 relative">
<div className="absolute inset-x-5 sm:inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="flex items-start justify-between gap-2 text-xs text-slate-700 pt-2">
<div className="flex flex-col gap-1">
<span className="text-[11px] tracking-[0.18em] uppercase text-slate-900">
                        305
                      </span>
<span className="text-[11px] text-slate-500">
                        2 Bed • 2 Bath • Approx. 1,000 sq ft • Outdoor balcony
                      </span>
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="inline-flex items-center rounded-full bg-sky-50 text-sky-700 border border-sky-100 px-2 py-0.5 text-[10px] tracking-[0.16em] uppercase">
                        3rd floor
                      </span>
</div>
</div>
<p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    These sophisticated 1,000 square foot two-bedroom,
                    two-bathroom apartments on the 3rd floor offer modern
                    comfort and style. The open-concept design seamlessly
                    integrates the living room, dining area, and kitchen,
                    creating an inviting space for daily living and
                    entertaining. Step out onto the private balcony to enjoy
                    fresh air and views. The split-bedroom layout provides
                    privacy, with the primary suite featuring a walk-in closet
                    and en-suite bathroom. Contemporary finishes include quartz
                    countertops, stainless steel appliances, modern cabinetry,
                    custom closet systems, and in-unit washer/dryer. Elevator
                    access connects directly to the pool, outdoor patio, and
                    workout room/gym.
                  </p>
</div>
</article>

<article className="js-observe group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.10)] flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(15,23,42,0.16)] opacity-0 translate-y-4 scale-[0.98]">
<div className="h-[2px] w-full bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900/60 opacity-80"></div>
<div className="relative bg-slate-50/80">

<img alt="Residence 306 floorplan" className="w-full h-auto object-contain rounded-t-[22px]" src="https://ik.imagekit.io/jnwpkntpm/305,306,307.png?updatedAt=1763831822459"/>
</div>
<div className="px-5 sm:px-6 pb-4 sm:pb-5 relative">
<div className="absolute inset-x-5 sm:inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="flex items-start justify-between gap-2 text-xs text-slate-700 pt-2">
<div className="flex flex-col gap-1">
<span className="text-[11px] tracking-[0.18em] uppercase text-slate-900">
                        306
                      </span>
<span className="text-[11px] text-slate-500">
                        2 Bed • 2 Bath • Approx. 1,000 sq ft • Outdoor balcony
                      </span>
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="inline-flex items-center rounded-full bg-sky-50 text-sky-700 border border-sky-100 px-2 py-0.5 text-[10px] tracking-[0.16em] uppercase">
                        3rd floor
                      </span>
</div>
</div>
<p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    These sophisticated 1,000 square foot two-bedroom,
                    two-bathroom apartments on the 3rd floor offer modern
                    comfort and style. The open-concept design seamlessly
                    integrates the living room, dining area, and kitchen,
                    creating an inviting space for daily living and
                    entertaining. Step out onto the private balcony to enjoy
                    fresh air and views. The split-bedroom layout provides
                    privacy, with the primary suite featuring a walk-in closet
                    and en-suite bathroom. Contemporary finishes include quartz
                    countertops, stainless steel appliances, modern cabinetry,
                    custom closet systems, and in-unit washer/dryer. Elevator
                    access connects directly to the pool, outdoor patio, and
                    workout room/gym.
                  </p>
</div>
</article>

<article className="js-observe group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.10)] flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(15,23,42,0.16)] opacity-0 translate-y-4 scale-[0.98]">
<div className="h-[2px] w-full bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900/60 opacity-80"></div>
<div className="relative bg-slate-50/80">

<img alt="Residence 307 floorplan" className="w-full h-auto object-contain rounded-t-[22px]" src="https://ik.imagekit.io/jnwpkntpm/305,306,307.png?updatedAt=1763831822459"/>
</div>
<div className="px-5 sm:px-6 pb-4 sm:pb-5 relative">
<div className="absolute inset-x-5 sm:inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="flex items-start justify-between gap-2 text-xs text-slate-700 pt-2">
<div className="flex flex-col gap-1">
<span className="text-[11px] tracking-[0.18em] uppercase text-slate-900">
                        307
                      </span>
<span className="text-[11px] text-slate-500">
                        2 Bed • 2 Bath • Approx. 1,000 sq ft • Outdoor balcony
                      </span>
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="inline-flex items-center rounded-full bg-sky-50 text-sky-700 border border-sky-100 px-2 py-0.5 text-[10px] tracking-[0.16em] uppercase">
                        3rd floor
                      </span>
</div>
</div>
<p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    These sophisticated 1,000 square foot two-bedroom,
                    two-bathroom apartments on the 3rd floor offer modern
                    comfort and style. The open-concept design seamlessly
                    integrates the living room, dining area, and kitchen,
                    creating an inviting space for daily living and
                    entertaining. Step out onto the private balcony to enjoy
                    fresh air and views. The split-bedroom layout provides
                    privacy, with the primary suite featuring a walk-in closet
                    and en-suite bathroom. Contemporary finishes include quartz
                    countertops, stainless steel appliances, modern cabinetry,
                    custom closet systems, and in-unit washer/dryer. Elevator
                    access connects directly to the pool, outdoor patio, and
                    workout room/gym.
                  </p>
</div>
</article>


<article className="js-observe group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.10)] flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(15,23,42,0.16)] opacity-0 translate-y-4 scale-[0.98]">
<div className="h-[2px] w-full bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900/60 opacity-80"></div>
<div className="relative bg-slate-50/80">
<img alt="Residence 401 floorplan" className="w-full h-auto object-contain rounded-t-[22px]" src="https://ik.imagekit.io/jnwpkntpm/201.png?updatedAt=1763831821823"/>
</div>
<div className="px-5 sm:px-6 pb-4 sm:pb-5 relative">
<div className="absolute inset-x-5 sm:inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="flex items-start justify-between gap-2 text-xs text-slate-700 pt-2">
<div className="flex flex-col gap-1">
<span className="text-[11px] tracking-[0.18em] uppercase text-slate-900">
                        401
                      </span>
<span className="text-[11px] text-slate-500">
                        2 Bed • 2 Bath • Approx. 1,100 sq ft • Outdoor balcony
                      </span>
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 px-2 py-0.5 text-[10px] tracking-[0.16em] uppercase">
                        4th floor
                      </span>
</div>
</div>
<p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    Top-floor version of this bright 1,100 square foot two-bedroom,
                    two-bathroom layout. Enjoy the same generous living and dining
                    spaces, private balcony, and split-bedroom design as 201 and
                    301—now with elevated 4th-floor views. The primary suite
                    features a walk-in closet and en-suite bath, complemented by
                    quartz countertops, stainless steel appliances, custom closet
                    systems, and in-unit washer/dryer.
                  </p>
</div>
</article>

<article className="js-observe group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.10)] flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(15,23,42,0.16)] opacity-0 translate-y-4 scale-[0.98]">
<div className="h-[2px] w-full bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900/60 opacity-80"></div>
<div className="relative bg-slate-50/80">
<img alt="Residence 402 floorplan" className="w-full h-auto object-contain rounded-t-[22px]" src="https://ik.imagekit.io/jnwpkntpm/202.png?updatedAt=1763831822370"/>
</div>
<div className="px-5 sm:px-6 pb-4 sm:pb-5 relative">
<div className="absolute inset-x-5 sm:inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="flex items-start justify-between gap-2 text-xs text-slate-700 pt-2">
<div className="flex flex-col gap-1">
<span className="text-[11px] tracking-[0.18em] uppercase text-slate-900">
                        402
                      </span>
<span className="text-[11px] text-slate-500">
                        2 Bed • 2 Bath • Approx. 950 sq ft • Outdoor balcony • ADA accessible
                      </span>
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 px-2 py-0.5 text-[10px] tracking-[0.16em] uppercase">
                        4th floor
                      </span>
</div>
</div>
<p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    4th-floor ADA-accessible counterpart to residences 202 and
                    302. This 950 square foot home features wide clearances,
                    accessible bathroom design, and an open living area that leads
                    to a private balcony. Both bedrooms offer generous storage,
                    with finishes that match lower floors: quartz countertops,
                    stainless steel appliances, in-unit laundry, and efficient air
                    conditioning.
                  </p>
</div>
</article>

<article className="js-observe group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.10)] flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(15,23,42,0.16)] opacity-0 translate-y-4 scale-[0.98]">
<div className="h-[2px] w-full bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900/60 opacity-80"></div>
<div className="relative bg-slate-50/80">
<img alt="Residence 403 floorplan" className="w-full h-auto object-contain rounded-t-[22px]" src="https://ik.imagekit.io/jnwpkntpm/203.png?updatedAt=1763831822017"/>
</div>
<div className="px-5 sm:px-6 pb-4 sm:pb-5 relative">
<div className="absolute inset-x-5 sm:inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="flex items-start justify-between gap-2 text-xs text-slate-700 pt-2">
<div className="flex flex-col gap-1">
<span className="text-[11px] tracking-[0.18em] uppercase text-slate-900">
                        403
                      </span>
<span className="text-[11px] text-slate-500">
                        2 Bed • 2 Bath • Approx. 980 sq ft • Outdoor balcony
                      </span>
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 px-2 py-0.5 text-[10px] tracking-[0.16em] uppercase">
                        4th floor
                      </span>
</div>
</div>
<p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    Completing the vertical stack above 203 and 303, this
                    980 square foot two-bedroom, two-bathroom home pairs an
                    efficient footprint with 4th-floor outlooks. The
                    open-concept living and kitchen area connects to a private
                    balcony, while the split-bedroom layout and primary suite
                    with walk-in closet mirror the popular lower-floor plans.
                  </p>
</div>
</article>

<article className="js-observe group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.10)] flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(15,23,42,0.16)] opacity-0 translate-y-4 scale-[0.98]">
<div className="h-[2px] w-full bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900/60 opacity-80"></div>
<div className="relative bg-slate-50/80">
<img alt="Residence 404 floorplan" className="w-full h-auto object-contain rounded-t-[22px]" src="https://ik.imagekit.io/jnwpkntpm/204.png?updatedAt=1763831822455"/>
</div>
<div className="px-5 sm:px-6 pb-4 sm:pb-5 relative">
<div className="absolute inset-x-5 sm:inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="flex items-start justify-between gap-2 text-xs text-slate-700 pt-2">
<div className="flex flex-col gap-1">
<span className="text-[11px] tracking-[0.18em] uppercase text-slate-900">
                        404
                      </span>
<span className="text-[11px] text-slate-500">
                        2 Bed • 2 Bath • Approx. 1,100 sq ft • Outdoor balcony
                      </span>
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 px-2 py-0.5 text-[10px] tracking-[0.16em] uppercase">
                        4th floor
                      </span>
</div>
</div>
<p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    Largest of the stack above 204 and 304, this 1,100 square
                    foot 4th-floor residence offers a generous living area,
                    two full baths, and a spacious balcony. The primary suite
                    includes a walk-in closet and en-suite, while the secondary
                    bedroom is ideal for guests, a home office, or both.
                  </p>
</div>
</article>

<article className="js-observe group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.10)] flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(15,23,42,0.16)] opacity-0 translate-y-4 scale-[0.98]">
<div className="h-[2px] w-full bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900/60 opacity-80"></div>
<div className="relative bg-slate-50/80">
<img alt="Residence 405 floorplan" className="w-full h-auto object-contain rounded-t-[22px]" src="https://ik.imagekit.io/jnwpkntpm/205,206,207.png?updatedAt=1763831822433"/>
</div>
<div className="px-5 sm:px-6 pb-4 sm:pb-5 relative">
<div className="absolute inset-x-5 sm:inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="flex items-start justify-between gap-2 text-xs text-slate-700 pt-2">
<div className="flex flex-col gap-1">
<span className="text-[11px] tracking-[0.18em] uppercase text-slate-900">
                        405
                      </span>
<span className="text-[11px] text-slate-500">
                        2 Bed • 2 Bath • Approx. 1,000 sq ft • Outdoor balcony
                      </span>
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 px-2 py-0.5 text-[10px] tracking-[0.16em] uppercase">
                        4th floor
                      </span>
</div>
</div>
<p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    4th-floor continuation of the 205 and 305 layout, this
                    1,000 square foot residence balances efficient bedrooms with
                    a comfortable central living space. The balcony, open
                    kitchen, and split-bedroom arrangement make it equally suited
                    to roommates or those who host overnight guests.
                  </p>
</div>
</article>

<article className="js-observe group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.10)] flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(15,23,42,0.16)] opacity-0 translate-y-4 scale-[0.98]">
<div className="h-[2px] w-full bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900/60 opacity-80"></div>
<div className="relative bg-slate-50/80">
<img alt="Residence 406 floorplan" className="w-full h-auto object-contain rounded-t-[22px]" src="https://ik.imagekit.io/jnwpkntpm/205,206,207.png?updatedAt=1763831822433"/>
</div>
<div className="px-5 sm:px-6 pb-4 sm:pb-5 relative">
<div className="absolute inset-x-5 sm:inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="flex items-start justify-between gap-2 text-xs text-slate-700 pt-2">
<div className="flex flex-col gap-1">
<span className="text-[11px] tracking-[0.18em] uppercase text-slate-900">
                        406
                      </span>
<span className="text-[11px] text-slate-500">
                        2 Bed • 2 Bath • Approx. 1,000 sq ft • Outdoor balcony
                      </span>
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 px-2 py-0.5 text-[10px] tracking-[0.16em] uppercase">
                        4th floor
                      </span>
</div>
</div>
<p className="mt-3 text-xs text-slate-600 leading-relaxed">
                   ical in footprint to residences 206 and 306, this
                    4th-floor home adds extra light and views while retaining
                    the same two-bedroom, two-bathroom configuration. An
                    open-plan kitchen and living area connects directly to the
                    balcony, making the most of the building’s upper level.
                  </p>
</div>
</article>

<article className="js-observe group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.10)] flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(15,23,42,0.16)] opacity-0 translate-y-4 scale-[0.98]">
<div className="h-[2px] w-full bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900/60 opacity-80"></div>
<div className="relative bg-slate-50/80">
<img alt="Residence 407 floorplan" className="w-full h-auto object-contain rounded-t-[22px]" src="https://ik.imagekit.io/jnwpkntpm/205,206,207.png?updatedAt=1763831822433"/>
</div>
<div className="px-5 sm:px-6 pb-4 sm:pb-5 relative">
<div className="absolute inset-x-5 sm:inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="flex items-start justify-between gap-2 text-xs text-slate-700 pt-2">
<div className="flex flex-col gap-1">
<span className="text-[11px] tracking-[0.18em] uppercase text-slate-900">
                        407
                      </span>
<span className="text-[11px] text-slate-500">
                        2 Bed • 2 Bath • Approx. 1,000 sq ft • Outdoor balcony
                      </span>
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 px-2 py-0.5 text-[10px] tracking-[0.16em] uppercase">
                        4th floor
                      </span>
</div>
</div>
<p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    Final home in this vertical stack, mirroring the proven
                    207 and 307 layout with a 4th-floor perspective. Two
                    well-separated bedrooms, two full bathrooms, in-unit
                    laundry, a private balcony, and modern finishes complete a
                    flexible, easy-to-furnish plan.
                  </p>
</div>
</article>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
<div className="flex flex-col gap-8">

<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">

<div className="max-w-sm">
<div className="flex items-center gap-3">
<img alt="Bella Apartments logo" className="h-7 w-auto" src="https://ik.imagekit.io/jnwpkntpm/bella-logo-final.png"/>
</div>
<p className="mt-4 text-sm text-slate-600">
                  Bella is a modern, boutique apartment community in Bonita Springs,
                  designed for residents who value light, space, and thoughtful details
                  in every room.
                </p>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-slate-600">
<div className="space-y-3">
<p className="text-[11px] font-medium tracking-[0.18em] uppercase text-slate-500">
                    Community
                  </p>
<ul className="space-y-1.5">
<li><a className="hover:text-slate-900" href="/">Home</a></li>
<li><a className="hover:text-slate-900" href="/floorplans">Apartments</a></li>
<li><a className="hover:text-slate-900" href="#">Amenities</a></li>
<li><a className="hover:text-slate-900" href="#">Bonita Springs</a></li>
</ul>
</div>
<div className="space-y-3">
<p className="text-[11px] font-medium tracking-[0.18em] uppercase text-slate-500">
                    Visit
                  </p>
<ul className="space-y-1.5">
<li>Bonita Springs, FL</li>
<li><a className="hover:text-slate-900" href="#">Schedule a tour</a></li>
<li><a className="hover:text-slate-900" href="#">Get directions</a></li>
</ul>
</div>
<div className="space-y-3">
<p className="text-[11px] font-medium tracking-[0.18em] uppercase text-slate-500">
                    Contact
                  </p>
<ul className="space-y-1.5">
<li><a className="hover:text-slate-900" href="tel:+1">Call leasing</a></li>
<li><a className="hover:text-slate-900" href="mailto:">Email us</a></li>
<li><a className="hover:text-slate-900" href="#">Resident portal</a></li>
</ul>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-slate-100">
<p className="text-xs text-slate-500">
                © <span className="whitespace-nowrap">Bella Apartments</span>. All rights reserved.
              </p>
<div className="flex flex-wrap gap-4 text-xs text-slate-500">
<a className="hover:text-slate-900" href="#">Privacy</a>
<a className="hover:text-slate-900" href="#">Terms</a>
<a className="hover:text-slate-900" href="#">Accessibility</a>
</div>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
