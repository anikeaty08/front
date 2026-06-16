import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Initialize Lucide icons with 1.5 stroke width
    window.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) {
        window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }
      // Dynamic year
      const y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();
    });

    // Mobile Menu
    const openBtn = document.getElementById('mobileOpen');
    const closeBtn = document.getElementById('mobileClose');
    const panel = document.getElementById('mobilePanel');
    const overlay = document.getElementById('mobileOverlay');

    function openMenu() {
      panel.classList.remove('translate-x-full');
      overlay.classList.remove('hidden');
      if (openBtn) openBtn.setAttribute('aria-expanded', 'true');
    }
    function closeMenu() {
      panel.classList.add('translate-x-full');
      overlay.classList.add('hidden');
      if (openBtn) openBtn.setAttribute('aria-expanded', 'false');
    }
    openBtn && openBtn.addEventListener('click', openMenu);
    closeBtn && closeBtn.addEventListener('click', closeMenu);
    overlay && overlay.addEventListener('click', closeMenu);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

    // Lightbox
    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightboxImg');
    const lbClose = document.getElementById('lightboxClose');
    const lbOverlay = document.getElementById('lightboxOverlay');

    function openLightbox(src, alt) {
      if (!lb || !lbImg) return;
      lbImg.src = src;
      lbImg.alt = alt || '';
      lb.classList.remove('hidden');
      lb.setAttribute('aria-hidden', 'false');
      lbClose && lbClose.focus();
    }
    function closeLightbox() {
      if (!lb || !lbImg) return;
      lb.classList.add('hidden');
      lb.setAttribute('aria-hidden', 'true');
      lbImg.src = '';
      lbImg.alt = '';
    }
    lbClose && lbClose.addEventListener('click', closeLightbox);
    lbOverlay && lbOverlay.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

    document.querySelectorAll('[data-lightbox-src]').forEach((el) => {
      el.addEventListener('click', () => {
        const src = el.getAttribute('data-lightbox-src');
        const alt = el.getAttribute('aria-label') || '';
        openLightbox(src, alt);
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="hidden md:flex items-center justify-center gap-2 px-6 py-2 text-[13px] tracking-wide bg-[#121314] text-neutral-300 border-b border-white/5">
<span className="inline-flex items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300 px-2.5 py-0.5 text-[11px] uppercase">New</span>
<span>Seasonal Tasting Menu at La Marée — Reserve a table today.</span>
</div>

<header className="relative z-50">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-center justify-between py-5">

<a className="inline-flex items-center gap-3 group" href="#">
<div className="h-9 w-9 rounded-md bg-[#c5a46d]/15 ring-1 ring-[#c5a46d]/30 flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm">
<i className="h-[18px] w-[18px] text-[#c5a46d]" data-lucide="crown"></i>
</div>
<div className="flex flex-col leading-none">
<span className="text-[18px] font-semibold tracking-tight text-white" style={{fontFamily: '\'Oswald\', Arial, sans-serif'}}>AURELIA</span>
<span className="text-[11px] text-neutral-400 -mt-0.5 tracking-wide">Hotel &amp; Resort</span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#rooms">Rooms</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#amenities">Amenities</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#dining">Dining</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#gallery">Gallery</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#contact">Contact</a>
</nav>

<div className="hidden lg:flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-xl bg-[#c5a46d] px-4 py-2.5 text-sm text-black font-medium shadow-[0_10px_20px_rgba(197,164,109,0.25)] ring-1 ring-black/10 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(197,164,109,0.30)] transition-all" href="#booking">
<i className="h-4 w-4" data-lucide="calendar-days"></i>
            Book Now
          </a>
</div>

<button aria-controls="mobilePanel" aria-expanded="false" aria-label="Open Menu" className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-all shadow-[0_10px_25px_rgba(0,0,0,0.35)]" id="mobileOpen">
<i className="h-5 w-5 text-neutral-200" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm hidden" id="mobileOverlay"></div>
<div aria-label="Menu" aria-modal="true" className="fixed right-0 top-0 h-full w-[88%] max-w-sm bg-[#0f1011] border-l border-white/10 translate-x-full transition-transform duration-300 ease-out z-50" id="mobilePanel" role="dialog">
<div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
<span className="text-[18px] font-semibold tracking-tight text-white" style={{fontFamily: '\'Oswald\', Arial, sans-serif'}}>AURELIA</span>
<button aria-label="Close Menu" className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" id="mobileClose">
<i className="h-5 w-5 text-neutral-300" data-lucide="x"></i>
</button>
</div>
<nav className="flex flex-col px-6 py-6">
<a className="py-3 text-[15px] text-neutral-200 hover:text-white border-b border-white/5" href="#about">About</a>
<a className="py-3 text-[15px] text-neutral-200 hover:text-white border-b border-white/5" href="#rooms">Rooms &amp; Suites</a>
<a className="py-3 text-[15px] text-neutral-200 hover:text-white border-b border-white/5" href="#amenities">Amenities</a>
<a className="py-3 text-[15px] text-neutral-200 hover:text-white border-b border-white/5" href="#dining">Dining</a>
<a className="py-3 text-[15px] text-neutral-200 hover:text-white border-b border-white/5" href="#gallery">Gallery</a>
<a className="py-3 text-[15px] text-neutral-200 hover:text-white" href="#contact">Contact &amp; Booking</a>
</nav>
<div className="px-6 pt-2">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#c5a46d] px-4 py-3 text-sm text-black font-medium shadow-[0_10px_20px_rgba(197,164,109,0.25)] ring-1 ring-black/10 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(197,164,109,0.30)] transition-all" href="#booking">
<i className="h-4 w-4" data-lucide="calendar-plus"></i>
          Book Now
        </a>
</div>
</div>
</header>

<section className="relative isolate">
<div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1502920917128-1aa500764b43?q=80&amp;w=1974&amp;auto=format&amp;fit=crop')] bg-cover bg-center bg-no-repeat bg-fixed"></div>
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-[#0b0c0c]/70 to-[#0b0c0c]"></div>
<div className="mx-auto max-w-7xl px-6 pt-28 pb-24 md:pt-40 md:pb-40">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
<i className="h-4 w-4 text-[#c5a46d]" data-lucide="sparkles"></i>
<span className="text-xs text-neutral-300">Oceanfront Retreat • Since 1927</span>
</div>
<h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Oswald\', Arial, sans-serif'}}>
          Experience Timeless Luxury
        </h1>
<p className="mt-5 text-lg md:text-xl text-neutral-300 leading-relaxed">
          Where modern comfort meets vintage charm. Immerse yourself in curated suites, cinematic sunsets, and bespoke experiences crafted for the discerning traveler.
        </p>
<div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-2xl bg-[#c5a46d] px-6 py-3.5 text-base text-black font-medium shadow-[0_15px_35px_rgba(197,164,109,0.35)] ring-1 ring-black/10 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(197,164,109,0.40)] transition-all" href="#booking">
<i className="h-5 w-5" data-lucide="key-round"></i>
            Book Your Stay
          </a>
<a className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-6 py-3.5 text-base text-white font-medium shadow-[0_12px_28px_rgba(0,0,0,0.35)] ring-1 ring-white/10 hover:bg-white/10 hover:-translate-y-0.5 transition-all" href="#rooms">
<i className="h-5 w-5" data-lucide="door-open"></i>
            Explore Suites
          </a>
</div>
</div>
</div>
</section>

<section className="relative" id="about">
<div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
<div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
<div className="relative group">
<div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[#c5a46d]/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
<div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
<img alt="Historic seaside facade of Aurelia Resort" className="h-80 md:h-[26rem] w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0c] via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<div className="inline-flex items-center gap-2 rounded-full bg-black/40 ring-1 ring-white/15 px-3 py-1.5 backdrop-blur">
<i className="h-4 w-4 text-[#c5a46d]" data-lucide="clock-5"></i>
<span className="text-xs text-neutral-200">A legacy since 1927</span>
</div>
</div>
</div>
</div>
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Oswald\', Arial, sans-serif'}}>
            A storied haven by the sea
          </h2>
<p className="mt-4 text-neutral-300 leading-relaxed">
            Born of the golden age of travel, Aurelia blends the romance of yesteryear with contemporary finesse. From hand-polished brass to bespoke linens, every touchpoint is designed to ground you in comfort and elevate your senses.
          </p>
<p className="mt-4 text-neutral-300 leading-relaxed">
            Our heritage spaces echo with live jazz and ocean murmurs, while modern amenities ensure an effortlessly seamless stay.
          </p>
<div className="mt-6 flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-[#c5a46d]/15 ring-1 ring-[#c5a46d]/30 flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
<i className="h-[18px] w-[18px] text-[#c5a46d]" data-lucide="feather"></i>
</div>
<span className="text-sm text-neutral-300">Handcrafted details, warm hospitality, understated glamour.</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="rooms">
<div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
<div className="flex items-end justify-between gap-6 mb-8">
<div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Oswald\', Arial, sans-serif'}}>Rooms &amp; Suites</h3>
<p className="mt-2 text-neutral-300">Elegant sanctuaries with ocean, garden, and skyline views.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm text-white font-medium ring-1 ring-white/10 hover:bg-white/10 transition shadow-[0_10px_25px_rgba(0,0,0,0.35)]" href="#booking">
<i className="h-4 w-4 text-[#c5a46d]" data-lucide="calendar"></i>
          Check Availability
        </a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
<div className="relative">
<img alt="Luxury Suite with panoramic ocean views" className="h-56 w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
</div>
<div className="p-5">
<h4 className="text-xl font-semibold tracking-tight" style={{fontFamily: '\'Oswald\', Arial, sans-serif'}}>Luxury Suite</h4>
<p className="mt-1 text-sm text-neutral-300">Private balcony, marble bath, curated minibar.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-[#c5a46d] font-medium">$520/night</span>
<button className="inline-flex items-center gap-1.5 rounded-lg bg-[#c5a46d]/90 px-3 py-2 text-xs text-black font-medium ring-1 ring-black/10 shadow-[0_12px_24px_rgba(197,164,109,0.30)] group-hover:-translate-y-0.5 transition-all">
<i className="h-4 w-4" data-lucide="eye"></i>
                View Details
              </button>
</div>
</div>
</article>
<article className="group relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
<div className="relative">
<img alt="Ocean View Suite with terrace" className="h-56 w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
</div>
<div className="p-5">
<h4 className="text-xl font-semibold tracking-tight" style={{fontFamily: '\'Oswald\', Arial, sans-serif'}}>Ocean View Suite</h4>
<p className="mt-1 text-sm text-neutral-300">Sunlit lounge, terrace seating, horizon vistas.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-[#c5a46d] font-medium">$610/night</span>
<button className="inline-flex items-center gap-1.5 rounded-lg bg-[#c5a46d]/90 px-3 py-2 text-xs text-black font-medium ring-1 ring-black/10 shadow-[0_12px_24px_rgba(197,164,109,0.30)] group-hover:-translate-y-0.5 transition-all">
<i className="h-4 w-4" data-lucide="eye"></i>
                View Details
              </button>
</div>
</div>
</article>
<article className="group relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
<div className="relative">
<img alt="Garden Villa with private plunge pool" className="h-56 w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
</div>
<div className="p-5">
<h4 className="text-xl font-semibold tracking-tight" style={{fontFamily: '\'Oswald\', Arial, sans-serif'}}>Garden Villa</h4>
<p className="mt-1 text-sm text-neutral-300">Private courtyard, plunge pool, butler service.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-[#c5a46d] font-medium">$780/night</span>
<button className="inline-flex items-center gap-1.5 rounded-lg bg-[#c5a46d]/90 px-3 py-2 text-xs text-black font-medium ring-1 ring-black/10 shadow-[0_12px_24px_rgba(197,164,109,0.30)] group-hover:-translate-y-0.5 transition-all">
<i className="h-4 w-4" data-lucide="eye"></i>
                View Details
              </button>
</div>
</div>
</article>
<article className="group relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
<div className="relative">
<img alt="Penthouse Suite with skyline and ocean view" className="h-56 w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1552793494-111afe03d0ca?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
</div>
<div className="p-5">
<h4 className="text-xl font-semibold tracking-tight" style={{fontFamily: '\'Oswald\', Arial, sans-serif'}}>Penthouse</h4>
<p className="mt-1 text-sm text-neutral-300">Wraparound terrace, private bar, concierge.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-[#c5a46d] font-medium">$1,250/night</span>
<button className="inline-flex items-center gap-1.5 rounded-lg bg-[#c5a46d]/90 px-3 py-2 text-xs text-black font-medium ring-1 ring-black/10 shadow-[0_12px_24px_rgba(197,164,109,0.30)] group-hover:-translate-y-0.5 transition-all">
<i className="h-4 w-4" data-lucide="eye"></i>
                View Details
              </button>
</div>
</div>
</article>
<article className="group relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
<div className="relative">
<img alt="Heritage Room with classic vintage decor" className="h-56 w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&amp;w=1956&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
</div>
<div className="p-5">
<h4 className="text-xl font-semibold tracking-tight" style={{fontFamily: '\'Oswald\', Arial, sans-serif'}}>Heritage Room</h4>
<p className="mt-1 text-sm text-neutral-300">Vintage accents, plush bedding, intimate lighting.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-[#c5a46d] font-medium">$420/night</span>
<button className="inline-flex items-center gap-1.5 rounded-lg bg-[#c5a46d]/90 px-3 py-2 text-xs text-black font-medium ring-1 ring-black/10 shadow-[0_12px_24px_rgba(197,164,109,0.30)] group-hover:-translate-y-0.5 transition-all">
<i className="h-4 w-4" data-lucide="eye"></i>
                View Details
              </button>
</div>
</div>
</article>
<article className="group relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
<div className="relative">
<img alt="Private bungalow by the beach" className="h-56 w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
</div>
<div className="p-5">
<h4 className="text-xl font-semibold tracking-tight" style={{fontFamily: '\'Oswald\', Arial, sans-serif'}}>Private Bungalow</h4>
<p className="mt-1 text-sm text-neutral-300">Beachfront, outdoor shower, hammock terrace.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-[#c5a46d] font-medium">$690/night</span>
<button className="inline-flex items-center gap-1.5 rounded-lg bg-[#c5a46d]/90 px-3 py-2 text-xs text-black font-medium ring-1 ring-black/10 shadow-[0_12px_24px_rgba(197,164,109,0.30)] group-hover:-translate-y-0.5 transition-all">
<i className="h-4 w-4" data-lucide="eye"></i>
                View Details
              </button>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="relative" id="amenities">
<div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Oswald\', Arial, sans-serif'}}>Amenities &amp; Experiences</h3>
<p className="mt-2 text-neutral-300">Signature offerings curated to restore and inspire.</p>
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">

<div className="group rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition shadow-[0_18px_40px_rgba(0,0,0,0.50)]">
<div className="relative h-40">
<img alt="World-class spa at Aurelia" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
</div>
<div className="p-4">
<div className="inline-flex items-center gap-2 rounded-lg bg-[#c5a46d]/15 ring-1 ring-[#c5a46d]/30 px-2.5 py-1 mb-2">
<i className="h-4 w-4 text-[#c5a46d]" data-lucide="lotus"></i>
<span className="text-xs text-neutral-200">Spa</span>
</div>
<p className="text-sm text-neutral-300">Botanical therapies, hammam rituals, and private suites.</p>
</div>
</div>

<div className="group rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition shadow-[0_18px_40px_rgba(0,0,0,0.50)]">
<div className="relative h-40">
<img alt="Fine dining with ocean views" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
</div>
<div className="p-4">
<div className="inline-flex items-center gap-2 rounded-lg bg-[#c5a46d]/15 ring-1 ring-[#c5a46d]/30 px-2.5 py-1 mb-2">
<i className="h-4 w-4 text-[#c5a46d]" data-lucide="utensils"></i>
<span className="text-xs text-neutral-200">Fine Dining</span>
</div>
<p className="text-sm text-neutral-300">Tasting menus, cellar pairings, and ocean terrace seating.</p>
</div>
</div>

<div className="group rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition shadow-[0_18px_40px_rgba(0,0,0,0.50)]">
<div className="relative h-40">
<img alt="Private beach cabanas" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
</div>
<div className="p-4">
<div className="inline-flex items-center gap-2 rounded-lg bg-[#c5a46d]/15 ring-1 ring-[#c5a46d]/30 px-2.5 py-1 mb-2">
<i className="h-4 w-4 text-[#c5a46d]" data-lucide="waves"></i>
<span className="text-xs text-neutral-200">Private Beach</span>
</div>
<p className="text-sm text-neutral-300">Cabanas, attentive service, and sunset cruises.</p>
</div>
</div>

<div className="group rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition shadow-[0_18px_40px_rgba(0,0,0,0.50)]">
<div className="relative h-40">
<img alt="Infinity pool at dusk" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
</div>
<div className="p-4">
<div className="inline-flex items-center gap-2 rounded-lg bg-[#c5a46d]/15 ring-1 ring-[#c5a46d]/30 px-2.5 py-1 mb-2">
<i className="h-4 w-4 text-[#c5a46d]" data-lucide="glass-water"></i>
<span className="text-xs text-neutral-200">Infinity Pool</span>
</div>
<p className="text-sm text-neutral-300">Heated edge, poolside mixology, and daybeds.</p>
</div>
</div>

<div className="group rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition shadow-[0_18px_40px_rgba(0,0,0,0.50)]">
<div className="relative h-40">
<img alt="Modern fitness studio" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
</div>
<div className="p-4">
<div className="inline-flex items-center gap-2 rounded-lg bg-[#c5a46d]/15 ring-1 ring-[#c5a46d]/30 px-2.5 py-1 mb-2">
<i className="h-4 w-4 text-[#c5a46d]" data-lucide="dumbbell"></i>
<span className="text-xs text-neutral-200">Fitness Studio</span>
</div>
<p className="text-sm text-neutral-300">Personal training, sunrise yoga, and pilates.</p>
</div>
</div>
</div>
</div>
</section>

<div className="relative h-52 md:h-64 lg:h-72">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1974&amp;auto=format&amp;fit=crop')] bg-cover bg-center bg-fixed"></div>
<div className="absolute inset-0 bg-[#0b0c0c]/70"></div>
<div className="relative h-full flex items-center justify-center">
<div className="inline-flex items-center gap-3 rounded-full bg-white/5 ring-1 ring-white/10 px-4 py-2 shadow-[0_12px_30px_rgba(0,0,0,0.45)]">
<i className="h-[18px] w-[18px] text-[#c5a46d]" data-lucide="map-pin"></i>
<span className="text-sm text-neutral-200">Ocean Promenade • Private Boardwalk Access</span>
</div>
</div>
</div>

<section className="relative" id="gallery">
<div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
<div className="flex items-end justify-between gap-6 mb-8">
<div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Oswald\', Arial, sans-serif'}}>Gallery</h3>
<p className="mt-2 text-neutral-300">A blend of cinematic nostalgia and modern warmth.</p>
</div>
<div className="hidden sm:flex items-center gap-2 text-sm text-neutral-400">
<i className="h-4 w-4 text-[#c5a46d]" data-lucide="panels-top-left"></i>
          Tap an image to enlarge
        </div>
</div>

<div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">

<figure aria-label="Suite interior" className="mb-4 break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.50)] cursor-pointer group" data-lightbox-src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&amp;w=1974&amp;auto=format&amp;fit=crop">
<img alt="Suite interior—sunlit lounge with vintage accents" className="w-full object-cover group-hover:scale-[1.02] transition duration-300" loading="lazy" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</figure>
<figure aria-label="Black and white lobby" className="mb-4 break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.50)] cursor-pointer group" data-lightbox-src="https://images.unsplash.com/photo-1519710884001-0e9d7c7b5e16?q=80&amp;w=1974&amp;auto=format&amp;fit=crop">
<img alt="Black &amp; white photograph of the grand lobby" className="w-full object-cover grayscale group-hover:grayscale-0 transition duration-300" loading="lazy" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</figure>
<figure aria-label="Infinity pool at sunset" className="mb-4 break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.50)] cursor-pointer group" data-lightbox-src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&amp;w=1974&amp;auto=format&amp;fit=crop">
<img alt="Infinity pool reflecting a warm sunset" className="w-full object-cover saturate-[1.05] group-hover:saturate-125 transition duration-300" loading="lazy" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</figure>
<figure aria-label="Gourmet dining" className="mb-4 break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.50)] cursor-pointer group" data-lightbox-src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&amp;w=1974&amp;auto=format&amp;fit=crop">
<img alt="Gourmet dining—chef plated tasting menu dish" className="w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</figure>
<figure aria-label="Classic bar" className="mb-4 break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.50)] cursor-pointer group" data-lightbox-src="https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&amp;w=1974&amp;auto=format&amp;fit=crop">
<img alt="Classic bar with brass details and amber lights" className="w-full object-cover sepia group-hover:sepia-0 transition duration-300" loading="lazy" src="https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</figure>
<figure aria-label="Breakfast served" className="mb-4 break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.50)] cursor-pointer group" data-lightbox-src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&amp;w=1974&amp;auto=format&amp;fit=crop">
<img alt="Breakfast in bed, silver tray with croissants" className="w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</figure>
</div>
</div>

<div aria-hidden="true" aria-modal="true" className="fixed inset-0 z-[60] hidden" id="lightbox" role="dialog">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm" id="lightboxOverlay"></div>
<button aria-label="Close image" className="absolute top-4 right-4 inline-flex items-center justify-center h-11 w-11 rounded-xl bg-white/10 ring-1 ring-white/20 hover:bg-white/20 transition" id="lightboxClose">
<i className="h-5 w-5 text-neutral-200" data-lucide="x"></i>
</button>
<div className="relative h-full w-full flex items-center justify-center p-4">
<img alt="" className="max-h-[85vh] max-w-[92vw] rounded-2xl ring-1 ring-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.60)] object-contain" id="lightboxImg" />
</img></div>
</div>
</section>

<section className="relative overflow-hidden" id="dining">
<div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&amp;w=1974&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
<div className="absolute inset-0 -z-10 bg-[#0b0c0c]/70"></div>
<div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
<div className="max-w-3xl">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Oswald\', Arial, sans-serif'}}>Dining</h3>
<p className="mt-3 text-neutral-200">Savor coastal terroir and vintage-inspired cocktails across three distinct venues—each a stage for culinary artistry.</p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">
<div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.04] shadow-[0_18px_40px_rgba(0,0,0,0.50)]">
<img alt="Chef plating—La Marée" className="h-44 w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<h4 className="text-xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Oswald\', Arial, sans-serif'}}>La Marée</h4>
<p className="mt-1 text-sm text-neutral-300">Seasonal tasting menu, ocean pairings, candlelit ambiance.</p>
</div>
</div>
<div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.04] shadow-[0_18px_40px_rgba(0,0,0,0.50)]">
<img alt="Sunset terrace—Aurora Terrace" className="h-44 w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<h4 className="text-xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Oswald\', Arial, sans-serif'}}>Aurora Terrace</h4>
<p className="mt-1 text-sm text-neutral-300">Sunset tapas, champagne service, live jazz on weekends.</p>
</div>
</div>
<div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.04] shadow-[0_18px_40px_rgba(0,0,0,0.50)]">
<img alt="Classic cocktail bar—The Gilded Room" className="h-44 w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="p-5">
<h4 className="text-xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Oswald\', Arial, sans-serif'}}>The Gilded Room</h4>
<p className="mt-1 text-sm text-neutral-300">Vintage cocktails, brass bar, vinyl nights.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="contact">
<div className="mx-auto max-w-7xl px-6 py-20 md:py-28" id="booking">
<div className="grid lg:grid-cols-2 gap-10">

<div className="rounded-3xl ring-1 ring-white/10 bg-white/[0.03] shadow-[0_24px_60px_rgba(0,0,0,0.55)] p-6 md:p-8">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-[#c5a46d]/15 ring-1 ring-[#c5a46d]/30 flex items-center justify-center">
<i className="h-5 w-5 text-[#c5a46d]" data-lucide="calendar-range"></i>
</div>
<div>
<h4 className="text-2xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Oswald\', Arial, sans-serif'}}>Book Your Stay</h4>
<p className="text-sm text-neutral-300">We’ll hold your selection for 10 minutes.</p>
</div>
</div>
<form aria-label="Booking form" className="mt-6 grid sm:grid-cols-2 gap-4">
<div className="sm:col-span-1">
<label className="text-sm text-neutral-300" htmlFor="checkin">Check-in</label>
<input className="mt-1 w-full rounded-xl bg-white/5 text-neutral-100 placeholder-neutral-400 ring-1 ring-white/10 focus:ring-2 focus:ring-[#c5a46d]/60 outline-none px-4 py-3 transition shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_10px_24px_rgba(0,0,0,0.35)]" id="checkin" type="date"/>
</div>
<div className="sm:col-span-1">
<label className="text-sm text-neutral-300" htmlFor="checkout">Check-out</label>
<input className="mt-1 w-full rounded-xl bg-white/5 text-neutral-100 placeholder-neutral-400 ring-1 ring-white/10 focus:ring-2 focus:ring-[#c5a46d]/60 outline-none px-4 py-3 transition shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_10px_24px_rgba(0,0,0,0.35)]" id="checkout" type="date"/>
</div>
<div className="sm:col-span-1">
<label className="text-sm text-neutral-300" htmlFor="guests">Guests</label>
<select className="mt-1 w-full rounded-xl bg-white/5 text-neutral-100 ring-1 ring-white/10 focus:ring-2 focus:ring-[#c5a46d]/60 outline-none px-4 py-3 transition shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_10px_24px_rgba(0,0,0,0.35)]" id="guests">
<option className="bg-[#0b0c0c]">1 Adult</option>
<option className="bg-[#0b0c0c]">2 Adults</option>
<option className="bg-[#0b0c0c]">3 Adults</option>
<option className="bg-[#0b0c0c]">Family (4+)</option>
</select>
</div>
<div className="sm:col-span-1">
<label className="text-sm text-neutral-300" htmlFor="roomtype">Room Type</label>
<select className="mt-1 w-full rounded-xl bg-white/5 text-neutral-100 ring-1 ring-white/10 focus:ring-2 focus:ring-[#c5a46d]/60 outline-none px-4 py-3 transition shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_10px_24px_rgba(0,0,0,0.35)]" id="roomtype">
<option className="bg-[#0b0c0c]">Luxury Suite</option>
<option className="bg-[#0b0c0c]">Ocean View Suite</option>
<option className="bg-[#0b0c0c]">Garden Villa</option>
<option className="bg-[#0b0c0c]">Penthouse</option>
<option className="bg-[#0b0c0c]">Heritage Room</option>
<option className="bg-[#0b0c0c]">Private Bungalow</option>
</select>
</div>
<div className="sm:col-span-2">
<label className="text-sm text-neutral-300" htmlFor="notes">Special Requests</label>
<textarea className="mt-1 w-full rounded-xl bg-white/5 text-neutral-100 placeholder-neutral-400 ring-1 ring-white/10 focus:ring-2 focus:ring-[#c5a46d]/60 outline-none px-4 py-3 transition shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_10px_24px_rgba(0,0,0,0.35)]" id="notes" placeholder="Allergies, late arrival, celebrations…" rows="3"></textarea>
</div>
<div className="sm:col-span-2 flex flex-col md:flex-row items-stretch md:items-center gap-3 mt-2">
<button className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#c5a46d] px-6 py-3.5 text-base text-black font-medium ring-1 ring-black/10 hover:-translate-y-0.5 transition-all shadow-[0_18px_40px_rgba(197,164,109,0.40)] hover:shadow-[0_24px_55px_rgba(197,164,109,0.45)]" type="submit">
<i className="h-5 w-5" data-lucide="badge-check"></i>
                Reserve Now
              </button>
<p className="text-xs text-neutral-400 md:ml-2">By reserving, you agree to our terms &amp; cancellation policy.</p>
</div>
</form>
</div>

<div className="space-y-6">
<div className="rounded-3xl ring-1 ring-white/10 bg-white/[0.03] shadow-[0_24px_60px_rgba(0,0,0,0.55)] p-6 md:p-8">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-[#c5a46d]/15 ring-1 ring-[#c5a46d]/30 flex items-center justify-center">
<i className="h-5 w-5 text-[#c5a46d]" data-lucide="phone"></i>
</div>
<div>
<h4 className="text-2xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Oswald\', Arial, sans-serif'}}>Contact</h4>
<p className="text-sm text-neutral-300">We’re here 24/7</p>
</div>
</div>
<div className="mt-4 grid sm:grid-cols-2 gap-4 text-sm">
<div className="flex items-start gap-3">
<i className="h-[18px] w-[18px] text-[#c5a46d] mt-0.5" data-lucide="map-pin"></i>
<p className="text-neutral-300">1 Promenade Way, Côte d’Or</p>
</div>
<div className="flex items-start gap-3">
<i className="h-[18px] w-[18px] text-[#c5a46d] mt-0.5" data-lucide="mail"></i>
<a className="text-neutral-200 hover:text-white transition" href="mailto:concierge@aurelia.co">concierge@aurelia.co</a>
</div>
<div className="flex items-start gap-3">
<i className="h-[18px] w-[18px] text-[#c5a46d] mt-0.5" data-lucide="phone"></i>
<a className="text-neutral-200 hover:text-white transition" href="tel:+18001234567">+1 (800) 123-4567</a>
</div>
<div className="flex items-start gap-3">
<i className="h-[18px] w-[18px] text-[#c5a46d] mt-0.5" data-lucide="clock"></i>
<p className="text-neutral-300">Check-in 3pm • Check-out 12pm</p>
</div>
</div>
<div className="mt-6 flex items-center gap-3">
<a aria-label="Instagram" className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<i className="h-5 w-5 text-neutral-200" data-lucide="instagram"></i>
</a>
<a aria-label="Facebook" className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<i className="h-5 w-5 text-neutral-200" data-lucide="facebook"></i>
</a>
<a aria-label="Twitter" className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<i className="h-5 w-5 text-neutral-200" data-lucide="twitter"></i>
</a>
</div>
</div>
<div className="rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
<iframe className="w-full h-72 grayscale contrast-125 brightness-90" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31587.58881642509!2d55.434227!3d-4.6795748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x22e0315e3b2d1d0f%3A0x4a2c8e2dbd2a7593!2sBeau%20Vallon%20Beach!5e0!3m2!1sen!2s!4v1688989234567" title="Resort Location Map"></iframe>
</div>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-white/10">
<div className="mx-auto max-w-7xl px-6 py-12">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-[#c5a46d]/15 ring-1 ring-[#c5a46d]/30 flex items-center justify-center">
<i className="h-[18px] w-[18px] text-[#c5a46d]" data-lucide="crown"></i>
</div>
<div className="leading-none">
<div className="text-[18px] font-semibold tracking-tight text-white" style={{fontFamily: '\'Oswald\', Arial, sans-serif'}}>AURELIA</div>
<div className="text-[11px] text-neutral-400 -mt-0.5 tracking-wide">Hotel &amp; Resort</div>
</div>
</div>
<nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-neutral-300">
<a className="hover:text-white transition" href="#about">About</a>
<a className="hover:text-white transition" href="#rooms">Rooms</a>
<a className="hover:text-white transition" href="#amenities">Amenities</a>
<a className="hover:text-white transition" href="#dining">Dining</a>
<a className="hover:text-white transition" href="#gallery">Gallery</a>
<a className="hover:text-white transition" href="#contact">Contact</a>
</nav>
</div>
<div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/10 pt-6">
<p className="text-xs text-neutral-400">© <span id="year"></span> Aurelia Hospitality Group. All rights reserved.</p>
<div className="flex items-center gap-6 text-xs text-neutral-400">
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Terms</a>
<a className="hover:text-white transition" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
