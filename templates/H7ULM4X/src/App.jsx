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
      
(function() {
function disableHashLinks() {
const hashLinks = document.querySelectorAll('a[href="#"], a[href^="#"]:not([href="#"])');
hashLinks.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
e.stopPropagation();
return false;
});
// Add tooltip to indicate link is disabled but keep pointer cursor
link.title = link.title || 'Link disabled in preview mode';
});
}
// Disable hash links on DOM ready
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', disableHashLinks);
} else {
disableHashLinks();
}
// Also disable hash links when the window loads (fallback)
window.addEventListener('load', disableHashLinks);
})();



    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    // Set year
    document.getElementById('year').textContent = new Date().getFullYear();
  
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
      

<div className="fixed inset-0 -z-10 pointer-events-none">
<div className="absolute -top-24 -left-24 h-[480px] w-[480px] rounded-full bg-lime-400/20 blur-[120px]"></div>
<div className="absolute top-1/3 -right-24 h-[520px] w-[520px] rounded-full bg-purple-500/20 blur-[120px]"></div>
<div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-orange-500/20 blur-[120px]"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.04),_transparent_60%)]"></div>
</div>

<div className="max-w-[1800px] mx-auto px-6 md:px-10">

<header className="sticky top-4 z-50">
<nav className="flex items-center justify-between rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] ring-1 ring-white/5 px-4 md:px-6 py-3 md:py-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br from-lime-400/80 to-orange-400/80 flex items-center justify-center ring-1 ring-white/20 shadow-[0_0_40px_rgba(132,204,22,0.35)]">
<span className="text-black font-semibold tracking-tight text-sm">OPM</span>
</div>
<span className="text-slate-100 font-semibold tracking-tight text-lg">OPM Gear</span>
</div>
<ul className="hidden lg:flex items-center gap-2">

<li><a className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition group" href="#"><span className="group-hover:text-lime-300">Home</span></a></li>
<li><a className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition group" href="#catalog"><span className="group-hover:text-orange-300">Catalog</span></a></li>
<li><a className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition group" href="#configure"><span className="group-hover:text-lime-300">Configure</span></a></li>
<li><a className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition group" href="#pricing"><span className="group-hover:text-orange-300">Pricing</span></a></li>
<li><a className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition group" href="#shipping"><span className="group-hover:text-lime-300">Shipping</span></a></li>
<li><a className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition group" href="#about"><span className="group-hover:text-orange-300">About</span></a></li>
<li><a className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition group" href="#mission"><span className="group-hover:text-lime-300">Mission</span></a></li>
<li><a className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition group" href="#contact"><span className="group-hover:text-orange-300">Contact</span></a></li>
</ul>
<div className="flex items-center gap-2">
<a className="hidden md:inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-lime-400 text-black font-medium shadow-[0_10px_40px_-10px_rgba(132,204,22,0.6)] hover:shadow-[0_12px_48px_-10px_rgba(132,204,22,0.8)] hover:-translate-y-0.5 transition will-change-transform" href="#configure">
<i data-lucide="sparkles"></i>
<span className="tracking-tight">Start Customizing</span>
</a>
<button className="inline-flex lg:hidden items-center justify-center rounded-xl px-3 py-2 bg-white/5 border border-white/10 hover:border-lime-300/30 hover:text-lime-300 transition">
<i data-lucide="menu"></i>
</button>
</div>
</nav>
</header>

<section className="relative pt-20 md:pt-28" id="home">

<div className="absolute -z-10 inset-0 pointer-events-none">
<div className="absolute top-16 right-10 h-24 w-24 rounded-full bg-lime-400/30 blur-2xl animate-[floatY_8s_ease-in-out_infinite]"></div>
<div className="absolute bottom-8 left-16 h-28 w-28 rounded-full bg-purple-500/30 blur-2xl animate-[floatY_10s_ease-in-out_infinite]"></div>
<div className="absolute top-1/3 left-1/3 h-16 w-16 rounded-full bg-orange-500/30 blur-2xl animate-[floatY_12s_ease-in-out_infinite]"></div>
</div>
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="reveal" style={{'--delay': '.05s'}}>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white">
            Empowering Identity, Fueling Communities
          </h1>
<p className="mt-5 text-slate-300 text-base md:text-lg max-w-2xl">
            OPM Gear lets schools, teams, and creators design &amp; sell custom caps while fundraising. Built for quality, scale, and impact.
          </p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-2xl bg-lime-400 text-black font-medium px-6 py-3 shadow-[0_20px_60px_-15px_rgba(132,204,22,0.65)] hover:shadow-[0_24px_70px_-12px_rgba(132,204,22,0.85)] hover:-translate-y-0.5 transition" href="#configure">
<i data-lucide="wand-2"></i>
<span className="tracking-tight">Start Customizing</span>
</a>
<a className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-white/5 border border-white/10 text-white hover:border-orange-400/40 hover:text-orange-300 backdrop-blur-xl transition" href="#catalog">
<i data-lucide="gallery-vertical-end"></i>
<span className="tracking-tight">View Catalog</span>
</a>
</div>

<div className="mt-10 grid grid-cols-3 max-w-md gap-4">
<div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-xl reveal" style={{'--delay': '.15s'}}>
<div className="text-2xl font-semibold text-white">250+</div>
<div className="text-xs text-slate-400">Programs Funded</div>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-xl reveal" style={{'--delay': '.25s'}}>
<div className="text-2xl font-semibold text-white">100k+</div>
<div className="text-xs text-slate-400">Caps Delivered</div>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-xl reveal" style={{'--delay': '.35s'}}>
<div className="text-2xl font-semibold text-white">$1.2M</div>
<div className="text-xs text-slate-400">Raised for Youth</div>
</div>
</div>
</div>

<div className="relative reveal-right" style={{'--delay': '.2s'}}>
<div className="relative rounded-3xl bg-white/5 border border-white/10 p-2 md:p-3 backdrop-blur-2xl overflow-hidden">
<div className="aspect-[5/4] rounded-2xl overflow-hidden bg-black/30 ring-1 ring-white/10 relative">
<img alt="Custom cap" className="h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-lime-400/90 flex items-center justify-center ring-1 ring-black10">
<i className="text-black" data-lucide="badge-check"></i>
</div>
<div>
<div className="text-white font-medium leading-tight">Premium Embroidery</div>
<div className="text-xs text-slate-300/80">3D puff, applique, metallic threads</div>
</div>
</div>
<div className="hidden md:flex items-center gap-2 rounded-xl bg-white/10 border border-white/10 px-3 py-2 backdrop-blur-xl hover:border-lime-400/50 hover:text-lime-300 transition">
<i data-lucide="scan-line"></i>
<span className="text-sm">360° Preview</span>
</div>
</div>
</div>
</div>

<div className="absolute -right-3 -bottom-6 w-40 md:w-48 rounded-2xl bg-white/5 border border-white/10 p-3 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(124,58,237,0.5)] animate-[floatY_9s_ease-in-out_infinite]">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-purple-500/30 ring-1 ring-purple-400/40 flex items-center justify-center">
<i data-lucide="palette"></i>
</div>
<div className="text-sm font-medium">Fabrics &amp; Colors</div>
</div>
<div className="mt-2 text-xs text-slate-400">Wool blends, performance mesh, eco cotton.</div>
</div>
</div>
</div>
</section>

<section className="mt-24" id="mission">
<div className="reveal" style={{'--delay': '.05s'}}>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Mission, Vision &amp; Impact</h2>
<p className="mt-2 text-slate-300 max-w-2xl">We craft custom headwear that amplifies identity and powers community causes.</p>
</div>

<div className="mt-6">
<div className="flex gap-2 flex-wrap">
<input checked="" className="peer/mis hidden" id="tab-mission" name="mvi" type="radio"/>
<label className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-lime-300 hover:border-lime-400/40 transition cursor-pointer peer-checked/mis:bg-lime-400 peer-checked/mis:text-black peer-checked/mis:border-lime-300" htmlFor="tab-mission">Mission</label>
<input className="peer/vis hidden" id="tab-vision" name="mvi" type="radio"/>
<label className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-orange-300 hover:border-orange-400/40 transition cursor-pointer peer-checked/vis:bg-orange-400 peer-checked/vis:text-black peer-checked/vis:border-orange-300" htmlFor="tab-vision">Vision</label>
<input className="peer/imp hidden" id="tab-impact" name="mvi" type="radio"/>
<label className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-purple-300 hover:border-purple-400/40 transition cursor-pointer peer-checked/imp:bg-purple-500 peer-checked/imp:text-white peer-checked/imp:border-purple-300" htmlFor="tab-impact">Impact</label>
</div>
<div className="mt-6 grid md:grid-cols-3 gap-4">

<div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl reveal-left peer-checked/mis:block peer-checked/vis:opacity-50 peer-checked/imp:opacity-50" style={{'--delay': '.05s'}}>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-lime-400/30 ring-1 ring-lime-300/40 flex items-center justify-center">
<i data-lucide="flag"></i>
</div>
<div className="font-medium text-white">Mission</div>
</div>
<p className="mt-3 text-slate-300 text-sm leading-relaxed">
              Empower teams, schools, and creators with premium headwear that funds their goals and unites their community.
            </p>
</div>

<div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl reveal peer-checked/vis:block peer-checked/mis:opacity-50 peer-checked/imp:opacity-50" style={{'--delay': '.15s'}}>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-orange-400/30 ring-1 ring-orange-300/40 flex items-center justify-center">
<i data-lucide="radar"></i>
</div>
<div className="font-medium text-white">Vision</div>
</div>
<p className="mt-3 text-slate-300 text-sm leading-relaxed">
              A world where every cap tells a story—and every story funds opportunity for the next generation.
            </p>
</div>

<div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl reveal-right peer-checked/imp:block peer-checked/mis:opacity-50 peer-checked/vis:opacity-50" style={{'--delay': '.25s'}}>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-purple-500/30 ring-1 ring-purple-400/40 flex items-center justify-center">
<i data-lucide="heart-handshake"></i>
</div>
<div className="font-medium text-white">Impact</div>
</div>
<p className="mt-3 text-slate-300 text-sm leading-relaxed">
              Every order fuels youth programs—equipment, travel, scholarships—measured and reported transparently.
            </p>
</div>
</div>
</div>
</section>

<section className="mt-24" id="catalog">
<div className="reveal" style={{'--delay': '.05s'}}>
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Product Showcase</h2>
<p className="mt-2 text-slate-300">Explore premium silhouettes, fabrics, and finishes. Smooth auto-scroll, hover to pause.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm rounded-xl bg-white/5 border border-white/10 px-3 py-2 hover:border-lime-400/40 hover:text-lime-300 transition" href="#catalog">
<i data-lucide="grid-2x2-check"></i> Full Catalog
          </a>
</div>
</div>
<div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl relative">
<div className="carousel-track group">

<div className="flex gap-4 px-4 py-6">

<div className="w-[260px] md:w-[320px] shrink-0 rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-xl hover:border-lime-400/50 hover:shadow-[0_20px_60px_-20px_rgba(132,204,22,0.6)] transition will-change-transform group/item">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Cap 1" className="h-full w-full object-cover group-hover/item:scale-[1.06] transition duration-500" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<p className="text-white font-medium">Classic Snapback</p>
<span className="text-xs text-lime-300">New</span>
</div>
<p className="text-xs text-slate-400 mt-1">Flat brim, 6-panel, puff embroidery.</p>
</div>
</div>

<div className="w-[260px] md:w-[320px] shrink-0 rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-xl hover:border-orange-400/50 hover:shadow-[0_20px_60px_-20px_rgba(251,146,60,0.6)] transition group/item">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Cap 2" className="h-full w-full object-cover group-hover/item:scale-[1.06] transition duration-500" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<p className="text-white font-medium">Vintage Dad Hat</p>
<span className="text-xs text-orange-300">Hot</span>
</div>
<p className="text-xs text-slate-400 mt-1">Washed cotton, low profile.</p>
</div>
</div>

<div className="w-[260px] md:w-[320px] shrink-0 rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-xl hover:border-purple-400/50 hover:shadow-[0_20px_60px_-20px_rgba(168,85,247,0.6)] transition group/item">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Cap 3" className="h-full w-full object-cover group-hover/item:scale-[1.06] transition duration-500" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<p className="text-white font-medium">Performance Trucker</p>
<span className="text-xs text-purple-300">Pro</span>
</div>
<p className="text-xs text-slate-400 mt-1">Moisture-wicking mesh, curved brim.</p>
</div>
</div>

<div className="w-[260px] md:w-[320px] shrink-0 rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-xl hover:border-lime-400/50 hover:shadow-[0_20px_60px_-20px_rgba(132,204,22,0.6)] transition group/item">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Cap 4" className="h-full w-full object-cover group-hover/item:scale-[1.06] transition duration-500" src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<p className="text-white font-medium">Wool Flat Cap</p>
<span className="text-xs text-lime-300">Eco</span>
</div>
<p className="text-xs text-slate-400 mt-1">Recycled blend options.</p>
</div>
</div>

<div className="w-[260px] md:w-[320px] shrink-0 rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-xl hover:border-orange-400/50 hover:shadow-[0_20px_60px_-20px_rgba(251,146,60,0.6)] transition group/item">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Cap 5" className="h-full w-full object-cover group-hover/item:scale-[1.06] transition duration-500" src="https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<p className="text-white font-medium">5-Panel Camper</p>
<span className="text-xs text-orange-300">Fresh</span>
</div>
<p className="text-xs text-slate-400 mt-1">Lightweight nylon, reflective label.</p>
</div>
</div>
</div>

<div className="flex gap-4 px-4 py-6">

<div className="w-[260px] md:w-[320px] shrink-0 rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-xl hover:border-lime-400/50 transition group/item">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Cap 1" className="h-full w-full object-cover group-hover/item:scale-[1.06] transition duration-500" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="p-4"><p className="text-white font-medium">Classic Snapback</p><p className="text-xs text-slate-400 mt-1">Flat brim, 6-panel, puff embroidery.</p></div>
</div>
<div className="w-[260px] md:w-[320px] shrink-0 rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-xl hover:border-orange-400/50 transition group/item">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Cap 2" className="h-full w-full object-cover group-hover/item:scale-[1.06] transition duration-500" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="p-4"><p className="text-white font-medium">Vintage Dad Hat</p><p className="text-xs text-slate-400 mt-1">Washed cotton, low profile.</p></div>
</div>
<div className="w-[260px] md:w-[320px] shrink-0 rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-xl hover:border-purple-400/50 transition group/item">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Cap 3" className="h-full w-full object-cover group-hover/item:scale-[1.06] transition duration-500" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="p-4"><p className="text-white font-medium">Performance Trucker</p><p className="text-xs text-slate-400 mt-1">Moisture-wicking mesh, curved brim.</p></div>
</div>
<div className="w-[260px] md:w-[320px] shrink-0 rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-xl hover:border-lime-400/50 transition group/item">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Cap 4" className="h-full w-full object-cover group-hover/item:scale-[1.06] transition duration-500" src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4"><p className="text-white font-medium">Wool Flat Cap</p><p className="text-xs text-slate-400 mt-1">Recycled blend options.</p></div>
</div>
<div className="w-[260px] md:w-[320px] shrink-0 rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-xl hover:border-orange-400/50 transition group/item">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Cap 5" className="h-full w-full object-cover group-hover/item:scale-[1.06] transition duration-500" src="https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4"><p className="text-white font-medium">5-Panel Camper</p><p className="text-xs text-slate-400 mt-1">Lightweight nylon, reflective label.</p></div>
</div>
</div>
</div>

<div className="absolute inset-0 group hover:[&amp;_.carousel-track]:!animation-play-state-paused"></div>
</div>
</section>

<section className="mt-24" id="configure">
<div className="reveal" style={{'--delay': '.05s'}}>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Customization Features</h2>
<p className="mt-2 text-slate-300 max-w-2xl">Choose embroidery styles, patches, fabrics, closures, and accessories to make it yours.</p>
</div>
<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">

<div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl hover:-translate-y-1 hover:border-lime-400/50 hover:shadow-[0_20px_60px_-20px_rgba(132,204,22,0.6)] transition reveal" style={{'--delay': '.05s'}}>
<div className="h-10 w-10 rounded-lg bg-lime-400/30 ring-1 ring-lime-300/40 flex items-center justify-center">
<i data-lucide="needle"></i>
</div>
<div className="mt-4 font-medium text-white">Embroidery</div>
<p className="text-sm text-slate-300 mt-1">Flat, 3D puff, metallic, applique.</p>
</div>

<div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl hover:-translate-y-1 hover:border-orange-400/50 hover:shadow-[0_20px_60px_-20px_rgba(251,146,60,0.6)] transition reveal" style={{'--delay': '.1s'}}>
<div className="h-10 w-10 rounded-lg bg-orange-400/30 ring-1 ring-orange-300/40 flex items-center justify-center">
<i data-lucide="badge"></i>
</div>
<div className="mt-4 font-medium text-white">Patches</div>
<p className="text-sm text-slate-300 mt-1">Woven, leather, PVC, chenille.</p>
</div>

<div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-[0_20px_60px_-20px_rgba(168,85,247,0.6)] transition reveal" style={{'--delay': '.15s'}}>
<div className="h-10 w-10 rounded-lg bg-purple-500/30 ring-1 ring-purple-400/40 flex items-center justify-center">
<i data-lucide="layers"></i>
</div>
<div className="mt-4 font-medium text-white">Fabrics</div>
<p className="text-sm text-slate-300 mt-1">Twill, wool, nylon, eco cotton.</p>
</div>

<div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl hover:-translate-y-1 hover:border-lime-400/50 hover:shadow-[0_20px_60px_-20px_rgba(132,204,22,0.6)] transition reveal" style={{'--delay': '.2s'}}>
<div className="h-10 w-10 rounded-lg bg-lime-400/30 ring-1 ring-lime-300/40 flex items-center justify-center">
<i data-lucide="link"></i>
</div>
<div className="mt-4 font-medium text-white">Closures</div>
<p className="text-sm text-slate-300 mt-1">Snapback, strapback, flex-fit.</p>
</div>

<div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl hover:-translate-y-1 hover:border-orange-400/50 hover:shadow-[0_20px_60px_-20px_rgba(251,146,60,0.6)] transition reveal" style={{'--delay': '.25s'}}>
<div className="h-10 w-10 rounded-lg bg-orange-400/30 ring-1 ring-orange-300/40 flex items-center justify-center">
<i data-lucide="sparkle"></i>
</div>
<div className="mt-4 font-medium text-white">Accessories</div>
<p className="text-sm text-slate-300 mt-1">Brim ropes, contrast stitching, labels.</p>
</div>
</div>
</section>

<section className="mt-24" id="pricing">
<div className="reveal" style={{'--delay': '.05s'}}>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Pricing &amp; Volume Discounts</h2>
<p className="mt-2 text-slate-300 max-w-2xl">Per-unit cost drops as you scale. Transparent, no surprises.</p>
</div>
<div className="mt-6 grid md:grid-cols-3 gap-4">

<div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl hover:-translate-y-1 hover:border-lime-400/50 hover:shadow-[0_20px_60px_-20px_rgba(132,204,22,0.6)] transition reveal" style={{'--delay': '.05s'}}>
<div className="flex items-center justify-between">
<div className="font-medium text-white">Starter</div>
<span className="text-xs px-2 py-1 rounded-lg bg-lime-400/20 text-lime-300 border border-lime-300/40">Save 10%</span>
</div>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-slate-400 line-through">$28</span>
<span className="text-3xl font-semibold text-white">$25</span>
<span className="text-slate-400 text-xs">per unit</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex items-center gap-2"><i className="text-lime-300" data-lucide="check-circle-2"></i> 24–99 units</li>
<li className="flex items-center gap-2"><i className="text-lime-300" data-lucide="check-circle-2"></i> 1 logo position</li>
<li className="flex items-center gap-2"><i className="text-lime-300" data-lucide="truck"></i> Standard shipping</li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 rounded-xl bg-lime-400 text-black px-4 py-2 font-medium hover:-translate-y-0.5 transition" href="#configure">
<i data-lucide="shopping-bag"></i> Select
          </a>
</div>

<div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl hover:-translate-y-1 hover:border-orange-400/50 hover:shadow-[0_20px_60px_-20px_rgba(251,146,60,0.6)] transition reveal" style={{'--delay': '.15s'}}>
<div className="flex items-center justify-between">
<div className="font-medium text-white">Growth</div>
<span className="text-xs px-2 py-1 rounded-lg bg-orange-400/20 text-orange-300 border border-orange-300/40">Save 18%</span>
</div>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-slate-400 line-through">$26</span>
<span className="text-3xl font-semibold text-white">$21.50</span>
<span className="text-slate-400 text-xs">per unit</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex items-center gap-2"><i className="text-orange-300" data-lucide="check-circle-2"></i> 100–249 units</li>
<li className="flex items-center gap-2"><i className="text-orange-300" data-lucide="check-circle-2"></i> 2 logo positions</li>
<li className="flex items-center gap-2"><i className="text-orange-300" data-lucide="zap"></i> Priority production</li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 text-white px-4 py-2 font-medium hover:border-orange-400/40 hover:text-orange-300 transition" href="#configure">
<i data-lucide="shopping-bag"></i> Select
          </a>
</div>

<div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-[0_20px_60px_-20px_rgba(168,85,247,0.6)] transition reveal" style={{'--delay': '.25s'}}>
<div className="flex items-center justify-between">
<div className="font-medium text-white">Scale</div>
<span className="text-xs px-2 py-1 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-300/40">Save 25%</span>
</div>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-slate-400 line-through">$24</span>
<span className="text-3xl font-semibold text-white">$18</span>
<span className="text-slate-400 text-xs">per unit</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex items-center gap-2"><i className="text-purple-300" data-lucide="check-circle-2"></i> 250+ units</li>
<li className="flex items-center gap-2"><i className="text-purple-300" data-lucide="check-circle-2"></i> 3 logo positions</li>
<li className="flex items-center gap-2"><i className="text-purple-300" data-lucide="rocket"></i> Rush options</li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 text-white px-4 py-2 font-medium hover:border-purple-400/40 hover:text-purple-300 transition" href="#configure">
<i data-lucide="shopping-bag"></i> Select
          </a>
</div>
</div>
</section>

<section className="mt-24">
<div className="reveal" style={{'--delay': '.05s'}}>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">How It Works</h2>
<p className="mt-2 text-slate-300 max-w-2xl">From idea to delivery in four streamlined steps.</p>
</div>
<div className="mt-8 grid lg:grid-cols-4 gap-4 items-center">

<div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl reveal-left hover:-translate-y-1 hover:border-lime-400/50 transition" style={{'--delay': '.05s'}}>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-lime-400/30 ring-1 ring-lime-300/40 flex items-center justify-center">
<i data-lucide="pencil-ruler"></i>
</div>
<div className="font-medium text-white">Design</div>
</div>
<p className="mt-2 text-sm text-slate-300">Upload art or co-create with our team.</p>
</div>

<div className="hidden lg:flex items-center justify-center">
<div className="h-[2px] w-10 bg-gradient-to-r from-transparent via-lime-400/60 to-transparent"></div>
<i className="text-lime-300" data-lucide="chevron-right"></i>
</div>

<div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl reveal hover:-translate-y-1 hover:border-orange-400/50 transition" style={{'--delay': '.15s'}}>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-orange-400/30 ring-1 ring-orange-300/40 flex items-center justify-center">
<i data-lucide="factory"></i>
</div>
<div className="font-medium text-white">Production</div>
</div>
<p className="mt-2 text-sm text-slate-300">Premium materials, strict QA, fast turns.</p>
</div>

<div className="hidden lg:flex items-center justify-center">
<div className="h-[2px] w-10 bg-gradient-to-r from-transparent via-orange-400/60 to-transparent"></div>
<i className="text-orange-300" data-lucide="chevron-right"></i>
</div>

<div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl reveal hover:-translate-y-1 hover:border-purple-400/50 transition" style={{'--delay': '.25s'}}>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-purple-500/30 ring-1 ring-purple-400/40 flex items-center justify-center">
<i data-lucide="shopping-cart"></i>
</div>
<div className="font-medium text-white">Launch</div>
</div>
<p className="mt-2 text-sm text-slate-300">Sell directly or fundraise via campaigns.</p>
</div>

<div className="hidden lg:flex items-center justify-center">
<div className="h-[2px] w-10 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"></div>
<i className="text-purple-300" data-lucide="chevron-right"></i>
</div>

<div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl reveal-right hover:-translate-y-1 hover:border-lime-400/50 transition" style={{'--delay': '.35s'}}>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-lime-400/30 ring-1 ring-lime-300/40 flex items-center justify-center">
<i data-lucide="gift"></i>
</div>
<div className="font-medium text-white">Deliver</div>
</div>
<p className="mt-2 text-sm text-slate-300">Ship to you or directly to supporters.</p>
</div>
</div>
</section>

<section className="mt-24">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-purple-500/20 via-orange-400/20 to-lime-400/20 p-[1px]">
<div className="relative rounded-[calc(1.5rem-1px)] bg-[#0a1029]/70 backdrop-blur-xl px-8 py-12 text-center">
<div className="absolute -inset-40 bg-[radial-gradient(circle,_rgba(132,204,22,0.25),_transparent_60%)] blur-3xl"></div>
<h3 className="relative text-2xl md:text-3xl font-semibold tracking-tight text-white">Every Cap Sold Supports Youth Sports</h3>
<p className="relative mt-3 text-slate-300 max-w-3xl mx-auto">A portion of every order funds equipment, travel, and access for the next generation of athletes.</p>
<div className="relative mt-6 flex items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 text-white px-4 py-2 font-medium hover:border-lime-400/40 hover:text-lime-300 transition" href="#about">
<i data-lucide="chart-no-axes-combined"></i> See Our Impact
            </a>
</div>
</div>
</div>
</section>

<section className="mt-24">
<div className="reveal" style={{'--delay': '.05s'}}>
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Community Voices</h2>
<p className="mt-2 text-slate-300">Trusted by programs and creators nationwide.</p>
</div>
<div className="hidden md:flex items-center gap-2 text-sm text-slate-400">
<i data-lucide="refresh-cw"></i> Rotating quotes
          </div>
</div>
</div>
<div className="mt-6 grid lg:grid-cols-3 gap-4">

<div className="relative col-span-2 min-h-[220px] rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl overflow-hidden">
<div className="testimonial-rotator">

<div className="flex flex-col justify-between h-full">
<div className="flex items-start gap-4">
<img alt="User 1" className="h-12 w-12 rounded-xl object-cover ring-2 ring-lime-300/50" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80" />
<div>
<div className="font-medium text-white">Coach Ramirez</div>
<div className="text-xs text-slate-400">Horizon HS Baseball</div>
</div>
</img></div>
<p className="mt-4 text-slate-200 text-base">The quality blew us away—and the fundraiser covered all our travel costs this season.</p>
</div>

<div className="flex flex-col justify-between h-full">
<div className="flex items-start gap-4">
<img alt="User 2" className="h-12 w-12 rounded-xl object-cover ring-2 ring-orange-300/50" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=400&amp;auto=format&amp;fit=crop" />
<div>
<div className="font-medium text-white">Maya Chen</div>
<div className="text-xs text-slate-400">Creator, Studio M</div>
</div>
</img></div>
<p className="mt-4 text-slate-200 text-base">Our limited drop sold out in 48 hours. Smooth process, fantastic finish.</p>
</div>

<div className="flex flex-col justify-between h-full">
<div className="flex items-start gap-4">
<img alt="User 3" className="h-12 w-12 rounded-xl object-cover ring-2 ring-purple-300/50" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=400&amp;auto=format&amp;fit=crop" />
<div>
<div className="font-medium text-white">Jalen Scott</div>
<div className="text-xs text-slate-400">AAU Program Director</div>
</div>
</img></div>
<p className="mt-4 text-slate-200 text-base">OPM turned our ideas into a brand kids are proud to wear—funding included.</p>
</div>

<div className="flex flex-col justify-between h-full">
<div className="flex items-start gap-4">
<img alt="User 4" className="h-12 w-12 rounded-xl object-cover ring-2 ring-lime-300/50" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=400&amp;auto=format&amp;fit=crop" />
<div>
<div className="font-medium text-white">Ava Patel</div>
<div className="text-xs text-slate-400">Booster Club Lead</div>
</div>
</img></div>
<p className="mt-4 text-slate-200 text-base">Transparent updates and on-time delivery. We’re planning the next run already.</p>
</div>
</div>
</div>

<div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl reveal-right hover:-translate-y-1 transition" style={{'--delay': '.15s'}}>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-lime-400/30 ring-1 ring-lime-300/40 flex items-center justify-center">
<i data-lucide="users"></i>
</div>
<div className="font-medium text-white">Join the Community</div>
</div>
<p className="mt-3 text-sm text-slate-300">Get tips, templates, and early access drops.</p>
<form className="mt-4 flex gap-2">
<input className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-lime-400/50" placeholder="you@school.org" type="email"/>
<button className="rounded-xl bg-lime-400 text-black px-4 py-2 font-medium hover:-translate-y-0.5 transition">Join</button>
</form>
</div>
</div>
</section>

<section className="mt-24" id="shipping">
<div className="grid md:grid-cols-2 gap-4">
<div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl hover:border-lime-400/50 transition reveal-left" style={{'--delay': '.05s'}}>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-lime-400/30 ring-1 ring-lime-300/40 flex items-center justify-center">
<i data-lucide="truck"></i>
</div>
<div className="font-medium text-white">Shipping &amp; Turnaround</div>
</div>
<p className="mt-2 text-sm text-slate-300">Standard in 3–4 weeks, rush options available. Global delivery with tracking.</p>
<a className="mt-3 inline-flex items-center gap-2 text-sm text-lime-300 hover:underline" href="#contact"><i data-lucide="message-square"></i> Ask about rush</a>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl hover:border-orange-400/50 transition reveal-right" id="about" style={{'--delay': '.15s'}}>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-orange-400/30 ring-1 ring-orange-300/40 flex items-center justify-center">
<i data-lucide="info"></i>
</div>
<div className="font-medium text-white">About OPM Gear</div>
</div>
<p className="mt-2 text-sm text-slate-300">Built by designers and coaches. We blend craftsmanship with operational excellence to deliver at scale.</p>
<a className="mt-3 inline-flex items-center gap-2 text-sm text-orange-300 hover:underline" href="#mission"><i data-lucide="arrow-right"></i> Our mission</a>
</div>
</div>
</section>

<footer className="mt-24 mb-10" id="contact">
<div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8">
<div className="grid md:grid-cols-5 gap-8">
<div className="col-span-2">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br from-lime-400/80 to-orange-400/80 flex items-center justify-center ring-1 ring-white/20">
<span className="text-black font-semibold tracking-tight text-sm">OPM</span>
</div>
<span className="text-slate-100 font-semibold tracking-tight text-lg">OPM Gear</span>
</div>
<p className="mt-4 text-sm text-slate-300 max-w-md">Custom caps that elevate identity and give back. Let’s build your next drop together.</p>
<div className="mt-4 flex gap-2">
<a aria-label="Twitter" className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 border border-white/10 hover:border-lime-400/50 hover:text-lime-300 transition" href="#">
<i data-lucide="twitter"></i>
</a>
<a aria-label="Instagram" className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 border border-white/10 hover:border-orange-400/50 hover:text-orange-300 transition" href="#">
<i data-lucide="instagram"></i>
</a>
<a aria-label="LinkedIn" className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/50 hover:text-purple-300 transition" href="#">
<i data-lucide="linkedin"></i>
</a>
</div>
</div>
<div>
<div className="text-white font-medium">Product</div>
<ul className="mt-3 space-y-2 text-sm text-slate-300">
<li><a className="hover:text-lime-300 transition" href="#catalog">Catalog</a></li>
<li><a className="hover:text-lime-300 transition" href="#configure">Configurator</a></li>
<li><a className="hover:text-lime-300 transition" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<div className="text-white font-medium">Company</div>
<ul className="mt-3 space-y-2 text-sm text-slate-300">
<li><a className="hover:text-orange-300 transition" href="#about">About</a></li>
<li><a className="hover:text-orange-300 transition" href="#mission">Mission</a></li>
<li><a className="hover:text-orange-300 transition" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<div className="text-white font-medium">Resources</div>
<ul className="mt-3 space-y-2 text-sm text-slate-300">
<li><a className="hover:text-purple-300 transition" href="#">Templates</a></li>
<li><a className="hover:text-purple-300 transition" href="#">Brand Guide</a></li>
<li><a className="hover:text-purple-300 transition" href="#">FAQ</a></li>
</ul>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
<p className="text-xs text-slate-400">© <span id="year">2025</span> OPM Gear. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-slate-400">
<a className="hover:text-lime-300 transition" href="#">Privacy</a>
<a className="hover:text-lime-300 transition" href="#">Terms</a>
<a className="hover:text-lime-300 transition" href="#">Accessibility</a>
</div>
</div>
</div>
</footer>
</div>




    </>
  );
}
