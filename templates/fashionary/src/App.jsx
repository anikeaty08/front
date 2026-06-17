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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        document.addEventListener('DOMContentLoaded', () => {
          document.querySelectorAll('#care [data-accordion-item]').forEach(item => {
            const open = item.hasAttribute('data-open');
            const btn = item.querySelector('[data-accordion="faq"]');
            const a = item.querySelector('[data-qa="a"]');
            const plus = item.querySelector('[data-icon="plus"]');
            const minus = item.querySelector('[data-icon="minus"]');
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
            a.classList.toggle('hidden', !open);
            plus.classList.toggle('hidden', open);
            minus.classList.toggle('hidden', !open);
          });

          document.querySelectorAll('#care [data-accordion="faq"]').forEach(btn => {
            btn.addEventListener('click', () => {
              const item = btn.closest('[data-accordion-item]');
              const content = item.querySelector('[data-qa="a"]');
              const plus = item.querySelector('[data-icon="plus"]');
              const minus = item.querySelector('[data-icon="minus"]');
              const expanded = btn.getAttribute('aria-expanded') === 'true';
              btn.setAttribute('aria-expanded', String(!expanded));
              content.classList.toggle('hidden');
              plus.classList.toggle('hidden');
              minus.classList.toggle('hidden');
            });
          });
        });
      


      // Mobile menu toggle
      const menuBtn = document.getElementById('menuBtn');
      const mobileNav = document.getElementById('mobileNav');
      if (menuBtn && mobileNav) {
        let open = false;
        menuBtn.addEventListener('click', () => {
          open = !open;
          mobileNav.classList.toggle('hidden', !open);
          menuBtn.innerHTML = open
            ? '<iconify-icon icon="solar:close-linear" width="24" height="24" class="text-white/90"></iconify-icon>'
            : '<iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24" class="text-white/90"></iconify-icon>';
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
      
<header className="relative">
<div className="absolute inset-0">
<img alt="Runway fashion show backdrop" className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/28b043c2-5f3a-41a2-aa7c-8cd6457090bb_3840w.webp?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0B0F12]"></div>
</div>
<nav className="z-10 relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<a className="flex items-center gap-2" href="#">
<span className="uppercase text-2xl font-semibold tracking-[0.2em] font-bricolage">FASHIONARY</span>
</a>

<div className="hidden md:flex items-center gap-6">
<a className="text-xs uppercase tracking-widest font-medium text-white/70 hover:text-white transition font-geist" href="#">Collections</a>
<a className="text-xs uppercase tracking-widest font-medium text-white/70 hover:text-white transition font-geist" href="#">Maison</a>
<a className="text-xs uppercase tracking-widest font-medium text-white/70 hover:text-white transition font-geist" href="#">Sustainability</a>
<a className="text-xs uppercase tracking-widest font-medium text-white/70 hover:text-white transition font-geist" href="#">Journal</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="text-white/80 hover:text-white transition" href="#">
<iconify-icon height="20" icon="solar:user-linear" width="20"></iconify-icon>
</a>
<a className="text-white/80 hover:text-white transition" href="#">
<iconify-icon height="20" icon="solar:bag-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 rounded-none bg-white text-gray-900 px-5 py-2 text-xs uppercase tracking-widest font-bold hover:bg-white/90 transition font-geist" href="#">
                Book Appt
              </a>
</div>

<button aria-label="Open menu" className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-none hover:bg-white/10 transition" id="menuBtn">
<iconify-icon className="text-white/90" height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="md:hidden hidden border-t border-white/10 mt-2 pt-4 pb-6 bg-black/90 backdrop-blur-xl absolute left-0 right-0 px-4" id="mobileNav">
<div className="grid gap-4">
<a className="text-sm uppercase tracking-widest font-medium text-white/90 font-geist" href="#">Collections</a>
<a className="text-sm uppercase tracking-widest font-medium text-white/80 font-geist" href="#">Maison</a>
<a className="text-sm uppercase tracking-widest font-medium text-white/80 font-geist" href="#">Sustainability</a>
<a className="text-sm uppercase tracking-widest font-medium text-white/80 font-geist" href="#">Journal</a>
<div className="flex items-center justify-between gap-2 pt-4 border-t border-white/10">
<a className="text-sm font-medium text-white/80 font-geist" href="#">Account</a>
<a className="inline-flex items-center gap-2 rounded-none bg-white text-gray-900 px-4 py-2 text-xs uppercase tracking-widest font-bold hover:bg-white/90 transition font-geist" href="#">
                  Cart (0)
                </a>
</div>
</div>
</div>
</div>
</nav>

<section className="z-10 relative">
<div className="sm:px-6 sm:pt-24 lg:px-8 lg:pb-40 lg:pt-28 text-center max-w-5xl mr-auto ml-auto pt-16 pr-4 pb-24 pl-4">
<div className="inline-flex items-center gap-3 mb-6">
<div className="h-[1px] w-8 bg-white/40"></div>
<span className="text-xs uppercase tracking-[0.2em] font-medium text-white/80 font-geist">Fall / Winter 2024</span>
<div className="h-[1px] w-8 bg-white/40"></div>
</div>
<h1 className="text-5xl sm:text-7xl lg:text-8xl text-white font-bricolage font-light tracking-tighter leading-tight">
            Elegance <br/><span className="italic font-[Playfair_Display]">Redefined.</span>
</h1>
<p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-white/70 font-geist font-light">
            A curation of timeless silhouettes and avant-garde craftsmanship. Designed in Milan, worn globally. Experience the new definition of luxury.
          </p>
<div className="flex gap-4 mt-12 items-center justify-center">
<a className="inline-flex items-center gap-2 rounded-none bg-white text-gray-900 px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-white/90 transition font-geist" href="#">
              Shop Collection
            </a>
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:bg-white/10 ring-1 ring-white/30 transition font-bold text-white font-geist rounded-none pt-3 pr-8 pb-3 pl-8 backdrop-blur" href="#">
              View Lookbook
            </a>
</div>
</div>
</section>
</header>

<section className="relative z-10 -mt-20 sm:-mt-24 pb-12">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-8">
<p className="text-[10px] font-medium text-white/40 uppercase tracking-[0.3em] font-geist">Available in Boutiques</p>
</div>
<div className="flex flex-wrap justify-center items-center gap-8 sm:gap-20 opacity-60">
<span className="text-xl font-serif italic text-white">Paris</span>
<span className="text-xl font-serif italic text-white">Milan</span>
<span className="text-xl font-serif italic text-white">New York</span>
<span className="text-xl font-serif italic text-white">Tokyo</span>
<span className="text-xl font-serif italic text-white">London</span>
</div>
</div>
</section>

<section className="z-10 pt-12 pb-24 relative">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
<div className="rounded-none border border-white/10 p-6 backdrop-blur hover:bg-white/5 transition duration-500">
<div className="flex flex-col gap-4 items-start">
<span className="text-white/90">
<iconify-icon height="24" icon="solar:leaf-linear" width="24"></iconify-icon>
</span>
<div className="">
<p className="text-sm font-semibold tracking-wide uppercase font-geist">Sustainable</p>
<p className="text-xs text-white/50 font-geist mt-1">Ethically sourced materials.</p>
</div>
</div>
</div>
<div className="rounded-none border border-white/10 p-6 backdrop-blur hover:bg-white/5 transition duration-500">
<div className="flex flex-col gap-4 items-start">
<span className="text-white/90">
<iconify-icon height="24" icon="solar:hanger-2-linear" width="24"></iconify-icon>
</span>
<div className="">
<p className="text-sm font-semibold tracking-wide uppercase font-geist">Made to Last</p>
<p className="text-xs text-white/50 font-geist mt-1">Heritage craftsmanship.</p>
</div>
</div>
</div>
<div className="rounded-none border border-white/10 p-6 backdrop-blur hover:bg-white/5 transition duration-500">
<div className="flex flex-col gap-4 items-start">
<span className="text-white/90">
<iconify-icon height="24" icon="solar:box-linear" width="24"></iconify-icon>
</span>
<div className="">
<p className="text-sm font-semibold tracking-wide uppercase font-geist">Global Shipping</p>
<p className="text-xs text-white/50 font-geist mt-1">Next day delivery available.</p>
</div>
</div>
</div>
<div className="rounded-none border border-white/10 p-6 backdrop-blur hover:bg-white/5 transition duration-500">
<div className="flex flex-col gap-4 items-start">
<span className="text-white/90">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</span>
<div className="">
<p className="text-sm font-semibold tracking-wide uppercase font-geist">Lifetime Warranty</p>
<p className="text-xs text-white/50 font-geist mt-1">Complimentary repairs.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:p-8 border border-white/10 bg-white/[0.02] rounded-none mr-4 ml-4 sm:mr-8 sm:ml-8 pt-6 pr-6 pb-6 pl-6 backdrop-blur">
<div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/50">
<span className="font-normal font-geist">Curated Selection</span>
</div>
<div className="mt-4 mb-8">
<h2 className="text-4xl sm:text-6xl lg:text-7xl leading-[0.9] font-light text-white tracking-tighter font-bricolage">The Edit.</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">

<article className="sm:p-0 flex flex-col min-h-[500px] border border-white/10 group transition-all duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/136460e5-53c2-460a-9c8c-dfa00177dbba_1600w.webp)]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col justify-end h-full p-6">
<div className="space-y-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="">
<h3 className="text-2xl font-light text-white font-bricolage">Ready-to-Wear</h3>
<p className="text-[10px] uppercase tracking-widest text-white/70 font-geist mt-1">The Essentials</p>
</div>
<p className="text-xs text-white/60 font-geist leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-[200px]">
          Everyday luxury defined by impeccable tailoring and premium fabrics.
        </p>
<div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
<span className="text-xs border-b border-white text-white font-geist pb-0.5">Shop Category</span>
</div>
</div>
</div>
</article>

<article className="sm:p-0 flex flex-col min-h-[500px] border border-white/10 group transition-all duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&amp;w=800&amp;auto=format&amp;fit=crop)] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col justify-end h-full p-6">
<div className="space-y-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div>
<h3 className="text-2xl font-light text-white font-bricolage">Evening Wear</h3>
<p className="text-[10px] uppercase tracking-widest text-white/70 font-geist mt-1">Black Tie</p>
</div>
<p className="text-xs text-white/60 font-geist leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-[200px]">
          Sophisticated silhouettes for the night. Silk, velvet, and structured drapes.
        </p>
<div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
<span className="text-xs border-b border-white text-white font-geist pb-0.5">Shop Category</span>
</div>
</div>
</div>
</article>

<article className="sm:p-0 flex flex-col min-h-[500px] border border-white/10 group transition-all duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&amp;w=800&amp;auto=format&amp;fit=crop)] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col justify-end h-full p-6">
<div className="space-y-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div>
<h3 className="text-2xl font-light text-white font-bricolage">Leather Goods</h3>
<p className="text-[10px] uppercase tracking-widest text-white/70 font-geist mt-1">Handbags &amp; Accessories</p>
</div>
<p className="text-xs text-white/60 font-geist leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-[200px]">
          Italian craftsmanship meets modern utility. Vegetable tanned leather that ages beautifully.
        </p>
<div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
<span className="text-xs border-b border-white text-white font-geist pb-0.5">Shop Category</span>
</div>
</div>
</div>
</article>

<article className="sm:p-0 flex flex-col min-h-[500px] border border-white/10 group transition-all duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&amp;w=800&amp;auto=format&amp;fit=crop)] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col justify-end h-full p-6">
<div className="space-y-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div>
<h3 className="text-2xl font-light text-white font-bricolage">Footwear</h3>
<p className="text-[10px] uppercase tracking-widest text-white/70 font-geist mt-1">Boots &amp; Heels</p>
</div>
<p className="text-xs text-white/60 font-geist leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-[200px]">
          From the atelier to the street. Iconic designs constructed for comfort and impact.
        </p>
<div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
<span className="text-xs border-b border-white text-white font-geist pb-0.5">Shop Category</span>
</div>
</div>
</div>
</article>
</div>
<div className="mt-12 text-center">
<button className="inline-flex items-center gap-2 rounded-none bg-white text-neutral-900 px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-white/90 transition font-geist">
          View All Collections
        </button>
</div>
</section>

<section className="sm:p-8 border border-white/10 bg-white/[0.02] rounded-none mt-12 mr-4 ml-4 sm:mr-8 sm:ml-8 pt-6 pr-6 pb-6 pl-6 backdrop-blur">
<div className="flex gap-2 text-xs uppercase tracking-widest text-white/50 mb-2 items-center">
<span className="font-normal font-geist">The Atelier</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-5xl sm:text-6xl lg:text-7xl leading-[0.9] font-light text-white tracking-tighter font-bricolage">Artisan <br/> <span className="italic font-serif">Process.</span></h2>
<p className="mt-6 text-sm sm:text-base text-white/70 font-normal font-geist leading-relaxed">
        We believe luxury lies in the details. Every garment passes through the hands of twenty specialized artisans in our Milan atelier before it reaches you.
      </p>
<div className="mt-8 space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 h-1.5 w-1.5 rounded-full bg-white"></div>
<div>
<span className="block text-sm text-white font-medium font-geist uppercase tracking-wide">Material Sourcing</span>
<span className="block text-xs text-white/50 font-geist mt-1">Raw silks from Como and ethical wools from New Zealand.</span>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 h-1.5 w-1.5 rounded-full bg-white"></div>
<div>
<span className="block text-sm text-white font-medium font-geist uppercase tracking-wide">Pattern Making</span>
<span className="block text-xs text-white/50 font-geist mt-1">Hand-draped on the mannequin to ensure the perfect fall.</span>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 h-1.5 w-1.5 rounded-full bg-white"></div>
<div>
<span className="block text-sm text-white font-medium font-geist uppercase tracking-wide">Quality Control</span>
<span className="block text-xs text-white/50 font-geist mt-1">Rigorous inspection of every stitch and seam.</span>
</div>
</div>
</div>
<div className="mt-12 flex items-center gap-6">
<button className="inline-flex items-center gap-2 rounded-none border border-white text-white px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-black transition font-geist">
          Read Our Story
        </button>
</div>
</div>

<div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
<div className="space-y-4 mt-8">
<div className="relative group overflow-hidden border border-white/10 aspect-[3/4] bg-white/5 rounded-none backdrop-blur">
<img alt="Fabric Texture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="text-white font-medium text-xs uppercase tracking-widest font-geist">Textiles</h3>
</div>
</div>
<div className="relative group overflow-hidden rounded-none bg-white/5 border border-white/10 backdrop-blur aspect-square">
<img alt="Sketching" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale" src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&amp;q=80"/>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="text-white font-medium text-xs uppercase tracking-widest font-geist">Design</h3>
</div>
</div>
</div>
<div className="space-y-4">
<div className="relative group overflow-hidden border border-white/10 aspect-square bg-white/5 rounded-none backdrop-blur">
<img alt="Sewing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale" src="https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=800&amp;q=80"/>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="text-white font-medium text-xs uppercase tracking-widest font-geist">Stitch</h3>
</div>
</div>
<div className="relative group overflow-hidden rounded-none bg-white/5 border border-white/10 backdrop-blur aspect-[3/4]">
<img alt="Finished Garment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale" src="https://images.unsplash.com/photo-1483181957632-8bda974cbc91?w=1600&amp;q=80" style={{}}/>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="text-white font-medium text-xs uppercase tracking-widest font-geist">Final Fit</h3>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:p-8 border border-white/10 bg-white/[0.02] rounded-none mt-12 mr-4 ml-4 sm:mr-8 sm:ml-8 pt-6 pr-6 pb-6 pl-6 backdrop-blur" id="lookbook">

<div className="flex flex-col sm:flex-row gap-6 items-end justify-between mb-12">
<div>
<div className="flex gap-2 text-xs uppercase tracking-widest text-white/50 items-center mb-4">
<span className="w-2 h-[1px] bg-white/50"></span>
<span className="font-normal font-geist">The Gallery</span>
</div>
<h2 className="text-4xl sm:text-6xl font-light text-white tracking-tighter font-bricolage">Runway <span className="italic font-serif text-white/50">Moments</span></h2>
</div>
<div className="flex gap-4">
<button className="w-10 h-10 flex items-center justify-center border border-white/10 bg-white/5 text-white hover:bg-white hover:text-black transition-all duration-300">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</button>
<button className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/40 hover:text-white transition-all duration-300">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v18h-6M10 17 3 3v18"></path></svg>
</button>
</div>
</div>

<div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

<article className="break-inside-avoid relative group cursor-pointer" data-tags="runway haute-couture">
<div className="relative overflow-hidden border border-white/10 bg-black">
<img alt="Look 01" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition duration-700 ease-in-out scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500 ease-out">
<div className="flex items-center justify-between border-t border-white/20 pt-4">
<div>
<h4 className="text-white font-geist text-sm uppercase tracking-widest">Look 01</h4>
<p className="text-white/50 text-[10px] font-geist uppercase tracking-wider mt-1">Opening Sequence</p>
</div>
<button className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>
</article>

<article className="break-inside-avoid relative group cursor-pointer" data-tags="backstage">
<div className="relative overflow-hidden border border-white/10 bg-black">
<img alt="Backstage Detail" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition duration-700 ease-in-out scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1448376561459-dbe8868fa34c?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500 ease-out">
<div className="flex items-center justify-between border-t border-white/20 pt-4">
<div>
<h4 className="text-white font-geist text-sm uppercase tracking-widest">Atmosphere</h4>
<p className="text-white/50 text-[10px] font-geist uppercase tracking-wider mt-1">Set Design</p>
</div>
<button className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition">
<svg none"="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg="><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>
</article>

<article className="break-inside-avoid relative group cursor-pointer" data-tags="runway">
<div className="relative overflow-hidden border border-white/10 bg-black">
<img alt="Look 07" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition duration-700 ease-in-out scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1562592282-9dd0ca7d71ac?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500 ease-out">
<div className="flex items-center justify-between border-t border-white/20 pt-4">
<div>
<h4 className="text-white font-geist text-sm uppercase tracking-widest">Look 07</h4>
<p className="text-white/50 text-[10px] font-geist uppercase tracking-wider mt-1">Evening Wear</p>
</div>
<button className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>
</article>

<article className="break-inside-avoid relative group cursor-pointer" data-tags="detail">
<div className="relative overflow-hidden border border-white/10 bg-black">
<img alt="Fabric Detail" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition duration-700 ease-in-out scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1630750796085-5fa9d4dd2818?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500 ease-out">
<div className="flex items-center justify-between border-t border-white/20 pt-4">
<div>
<h4 className="text-white font-geist text-sm uppercase tracking-widest">Texture</h4>
<p className="text-white/50 text-[10px] font-geist uppercase tracking-wider mt-1">Materiality</p>
</div>
<button className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>
</article>

<article className="break-inside-avoid relative group cursor-pointer" data-tags="runway">
<div className="relative overflow-hidden border border-white/10 bg-black">
<img alt="Look 12" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition duration-700 ease-in-out scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500 ease-out">
<div className="flex items-center justify-between border-t border-white/20 pt-4">
<div>
<h4 className="text-white font-geist text-sm uppercase tracking-widest">Look 12</h4>
<p 30="" border="" border-white="" className="text-white/50 text-[10px] font class=" flex="" h-8="" hover:bg-white="" hover:text-black="" items-center="" justify-center="" rounded-full="" text-white="" transition"="" w-8="">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</p></div>
</div>
</div>
</div></article>

<article className="break-inside-avoid relative group cursor-pointer" data-tags="runway">
<div className="relative overflow-hidden border border-white/10 bg-black">
<img alt="Look 04" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition duration-700 ease-in-out scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500 ease-out">
<div className="flex items-center justify-between border-t border-white/20 pt-4">
<div>
<h4 className="text-white font-geist text-sm uppercase tracking-widest">Look 04</h4>
<p className="text-white/50 text-[10px] font-geist uppercase tracking-wider mt-1">Summer Collection</p>
</div>
<button className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition">
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" xmlns="http://www.w3.org/2024"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>
</article>

<article className="break-inside-avoid relative group cursor-pointer" data-tags="editorial">
<div className="relative overflow-hidden border border-white/10 bg-black">
<img alt="Editorial" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition duration-700 ease-in-out scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500 ease-out">
<div className="flex items-center justify-between border-t border-white/20 pt-4">
<div>
<h4 className="text-white font-geist text-sm uppercase tracking-widest">Editorial</h4>
<p className="text-white/50 text-[10px] font-geist uppercase tracking-wider mt-1">Vogue Italia</p>
</div>
<button className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>
</article>
</div>
<div className="mt-12 text-center border-t border-white/10 pt-8">
<button className="inline-flex items-center gap-2 rounded-none bg-transparent border border-white/20 text-white hover:border-white px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all duration-300 font-geist">
          View All Looks
        </button>
</div>
</section>

<section className="max-w-7xl sm:px-6 sm:mt-20 mr-auto mb-24 ml-auto pr-4 pl-4" id="care">
<div className="relative overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur">
<div className="relative sm:p-12 pt-8 pr-6 pb-8 pl-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

<div className="md:col-span-5">
<h2 className="text-4xl sm:text-6xl leading-none font-light text-white tracking-tighter font-bricolage">Client Services.</h2>
<p className="mt-4 text-sm text-white/70 font-geist">
                Exceptional service is the hallmark of FASHIONARY. Our team is available 24/7 to assist with your inquiries.
              </p>
</div>

<div className="md:col-span-7">
<div className="space-y-0 divide-y divide-white/10">

<div className="bg-transparent" data-accordion-item="" data-open="true">
<button aria-expanded="true" className="w-full flex items-center justify-between gap-4 py-5 text-left" data-accordion="faq" type="button">
<span className="text-sm uppercase tracking-widest font-medium text-white font-geist">Shipping &amp; Delivery</span>
<span className="shrink-0">
<iconify-icon className="text-white/70 hidden" data-icon="plus" height="20" icon="solar:add-linear" width="20"></iconify-icon>
<iconify-icon className="text-white/70" data-icon="minus" height="20" icon="solar:minus-linear" width="20"></iconify-icon>
</span>
</button>
<div className="pb-5 text-sm text-white/60 font-geist leading-relaxed" data-qa="a">
                    We offer complimentary express global shipping on all orders. Deliveries to Europe and North America typically arrive within 1-2 business days.
                  </div>
</div>

<div className="bg-transparent" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 py-5 text-left" data-accordion="faq" type="button">
<span className="text-sm uppercase tracking-widest font-medium text-white font-geist">Returns &amp; Exchanges</span>
<span className="shrink-0">
<iconify-icon className="text-white/70" data-icon="plus" height="20" icon="solar:add-linear" width="20"></iconify-icon>
<iconify-icon className="text-white/70 hidden" data-icon="minus" height="20" icon="solar:minus-linear" width="20"></iconify-icon>
</span>
</button>
<div className="pb-5 text-sm text-white/60 font-geist leading-relaxed hidden" data-qa="a">
                    Returns are accepted within 30 days of purchase. Items must be unworn, unwashed, and in their original packaging with all tags attached.
                  </div>
</div>

<div className="bg-transparent" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 py-5 text-left" data-accordion="faq" type="button">
<span className="text-sm uppercase tracking-widest font-medium text-white font-geist">Private Appointments</span>
<span className="shrink-0">
<iconify-icon className="text-white/70" data-icon="plus" height="20" icon="solar:add-linear" width="20"></iconify-icon>
<iconify-icon className="text-white/70 hidden" data-icon="minus" height="20" icon="solar:minus-linear" width="20"></iconify-icon>
</span>
</button>
<div className="pb-5 text-sm text-white/60 font-geist leading-relaxed hidden" data-qa="a">
                    We offer private styling appointments in our Paris, Milan, and New York boutiques. Please contact the concierge to book a slot.
                  </div>
</div>

<div className="bg-transparent" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 py-5 text-left" data-accordion="faq" type="button">
<span className="text-sm uppercase tracking-widest font-medium text-white font-geist">Sustainability</span>
<span className="shrink-0">
<iconify-icon className="text-white/70" data-icon="plus" height="20" icon="solar:add-linear" width="20"></iconify-icon>
<iconify-icon className="text-white/70 hidden" data-icon="minus" height="20" icon="solar:minus-linear" width="20"></iconify-icon>
</span>
</button>
<div className="pb-5 text-sm text-white/60 font-geist leading-relaxed hidden" data-qa="a">
                    FASHIONARY is committed to 100% sustainable sourcing by 2025. Currently, 85% of our fabrics are organic or recycled.
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>

</section>
<style>
@keyframes spin-slow {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(-360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 24s linear infinite;
}

.animate-spin-slow:hover {
  animation-play-state: paused;
}

.perspective-1100 {
  perspective: 1100px;
}

.transform-style-preserve-3d {
  transform-style: preserve-3d;
}

.transform-origin-center {
  transform-origin: 50% 50%;
}

.animation-pause:hover {
  animation-play-state: paused;
}
</style>

<section className="w-full mr-auto mb-8 ml-auto">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="relative overflow-hidden border border-white/10 bg-white/[0.02] rounded-none backdrop-blur">
<div className="relative z-10 md:p-12 lg:p-16 pt-8 pr-8 pb-8 pl-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-5">
<div className="bg-white p-8 shadow-xl" id="concierge">
<div className="flex items-center justify-between">
<div className="">
<p className="text-[10px] text-neutral-500 font-geist uppercase tracking-[0.2em]">VIP Access</p>
<h3 className="mt-2 text-2xl font-light tracking-tight text-neutral-900 font-bricolage">
                        Digital Concierge
                      </h3>
</div>
</div>
<form action="#" className="mt-8 space-y-5" method="POST">
<div className="">
<label className="block text-[10px] uppercase tracking-wider text-neutral-500 font-geist" htmlFor="ct-name">Name</label>
<input className="mt-1 w-full border-b border-neutral-300 py-2 text-sm text-neutral-900 placeholder:text-neutral-300 focus:border-black focus:outline-none bg-transparent font-geist" id="ct-name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="">
<label className="block text-[10px] uppercase tracking-wider text-neutral-500 font-geist" htmlFor="ct-email">Email</label>
<input className="mt-1 w-full border-b border-neutral-300 py-2 text-sm text-neutral-900 placeholder:text-neutral-300 focus:border-black focus:outline-none bg-transparent font-geist" id="ct-email" name="email" placeholder="you@example.com" required="" type="email"/>
</div>
<div className="">
<label className="block text-[10px] uppercase tracking-wider text-neutral-500 font-geist" htmlFor="ct-msg">Request</label>
<textarea className="mt-1 w-full border-b border-neutral-300 py-2 text-sm text-neutral-900 placeholder:text-neutral-300 resize-none focus:border-black focus:outline-none bg-transparent font-geist" id="ct-msg" name="message" placeholder="I would like to book a fitting..." rows="3"></textarea>
</div>
<button className="w-full mt-4 inline-flex items-center justify-center bg-black text-white px-6 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-neutral-800 transition-colors font-geist" type="submit">
                      Send Request
                    </button>
</form>
</div>
</div>

<div className="lg:col-span-7 pt-4">
<h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1] font-light text-white tracking-tighter font-bricolage">Join the Guestlist.</h2>
<p className="text-sm sm:text-base max-w-xl text-white/70 mt-6 font-geist font-light leading-relaxed">
                  Subscribers receive early access to new collections, invitations to private runway shows, and exclusive seasonal previews.
                </p>
<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="flex items-start gap-4">
<div className="h-10 w-10 flex items-center justify-center text-white/90 border border-white/20">
<iconify-icon height="20" icon="solar:crown-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-white font-medium text-xs uppercase tracking-widest font-geist">First Access</p>
<p className="text-white/60 text-xs font-geist mt-1">Shop 48 hours before public release.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="h-10 w-10 flex items-center justify-center text-white/90 border border-white/20">
<iconify-icon height="20" icon="solar:wineglass-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-white font-medium text-xs uppercase tracking-widest font-geist">Events</p>
<p className="text-white/60 text-xs font-geist mt-1">Invitations to fashion week parties.</p>
</div>
</div>
</div>

<div className="mt-12 pt-12 border-t border-white/10">
<p className="text-xs uppercase tracking-widest text-white/40 font-geist mb-2">Press Inquiries</p>
<a className="text-xl text-white hover:text-white/80 transition font-serif italic" href="mailto:press@fashionary.com">press@fashionary.com</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="max-w-7xl mr-auto ml-auto pr-6 pb-12 pl-6">
<div className="p-12 lg:p-16 border-t border-white/10">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
<div className="lg:col-span-1">
<div className="flex items-center mb-6">
<span className="uppercase text-2xl font-semibold tracking-[0.2em] font-bricolage text-white">FASHIONARY</span>
</div>
<p className="text-xs text-white/50 leading-relaxed mb-8 font-geist uppercase tracking-widest">
              Milan — Paris — New York
            </p>
<div className="flex items-center gap-4">
<a aria-label="Instagram" className="w-10 h-10 flex items-center justify-center border border-white/10 hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-white" href="#">
<iconify-icon height="20" icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a aria-label="TikTok" className="w-10 h-10 flex items-center justify-center border border-white/10 hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-white" href="#">
<iconify-icon height="20" icon="solar:videocamera-record-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="">
<h4 className="text-xs font-bold text-white mb-6 uppercase tracking-[0.2em] font-geist">Shop</h4>
<ul className="space-y-4">
<li className=""><a className="text-xs text-white/60 hover:text-white transition-colors duration-300 font-geist uppercase tracking-wide" href="#">New Arrivals</a></li>
<li className=""><a className="text-xs text-white/60 hover:text-white transition-colors duration-300 font-geist uppercase tracking-wide" href="#">Ready-to-Wear</a></li>
<li className=""><a className="text-xs text-white/60 hover:text-white transition-colors duration-300 font-geist uppercase tracking-wide" href="#">Accessories</a></li>
<li className=""><a className="text-xs text-white/60 hover:text-white transition-colors duration-300 font-geist uppercase tracking-wide" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold text-white mb-6 uppercase tracking-[0.2em] font-geist">Maison</h4>
<ul className="space-y-4">
<li><a className="text-xs text-white/60 hover:text-white transition-colors duration-300 font-geist uppercase tracking-wide" href="#">Our Story</a></li>
<li><a className="text-xs text-white/60 hover:text-white transition-colors duration-300 font-geist uppercase tracking-wide" href="#">Sustainability</a></li>
<li><a className="text-xs text-white/60 hover:text-white transition-colors duration-300 font-geist uppercase tracking-wide" href="#">Careers</a></li>
<li><a className="text-xs text-white/60 hover:text-white transition-colors duration-300 font-geist uppercase tracking-wide" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold text-white mb-6 uppercase tracking-[0.2em] font-geist">Legal</h4>
<ul className="space-y-4">
<li><a className="text-xs text-white/60 hover:text-white transition-colors duration-300 font-geist uppercase tracking-wide" href="#">Privacy Policy</a></li>
<li><a className="text-xs text-white/60 hover:text-white transition-colors duration-300 font-geist uppercase tracking-wide" href="#">Terms of Use</a></li>
<li><a className="text-xs text-white/60 hover:text-white transition-colors duration-300 font-geist uppercase tracking-wide" href="#">Cookie Settings</a></li>
</ul>
</div>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5">
<div className="flex flex-wrap items-center gap-6 text-[10px] text-white/30 uppercase tracking-widest font-geist">
<span>© 2024 FASHIONARY Maison.</span>
</div>
</div>
</footer>


    </>
  );
}
