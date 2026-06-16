import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
          document.querySelectorAll('#faq [data-accordion-item]').forEach(item => {
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

          document.querySelectorAll('#faq [data-accordion="faq"]').forEach(btn => {
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
              if (window.lucide && typeof lucide.createIcons === 'function') {
                lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
              }
            });
          });

          if (window.lucide && typeof lucide.createIcons === 'function') {
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          }
        });
      


      // Render icons with consistent stroke width
      window.lucide && lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Mobile menu toggle
      const menuBtn = document.getElementById('menuBtn');
      const mobileNav = document.getElementById('mobileNav');
      if (menuBtn && mobileNav) {
        let open = false;
        menuBtn.addEventListener('click', () => {
          open = !open;
          mobileNav.classList.toggle('hidden', !open);
          menuBtn.innerHTML = open
            ? '<i data-lucide="x" class="h-5 w-5 text-white/90"></i>'
            : '<i data-lucide="menu" class="h-5 w-5 text-white/90"></i>';
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="relative">
<div className="absolute inset-0">
<img alt="Runway fashion show backdrop" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/393d30fa-de4a-4439-bae7-d2b7c00e196f_3840w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80"></div>
</div>
<nav className="relative z-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2" href="#">
<span className="uppercase text-lg font-semibold tracking-tighter font-bricolage">ModaIQ</span>
</a>

<div className="hidden md:flex items-center gap-2">
<a className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/15 text-sm font-medium text-white/90 hover:bg-white/10 transition font-geist" href="#">New</a>
<a className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/15 text-sm font-medium text-white/70 hover:text-white/90 hover:bg-white/10 transition font-geist" href="#">Women</a>
<a className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/15 text-sm font-medium text-white/70 hover:text-white/90 hover:bg-white/10 transition font-geist" href="#">Men</a>
<a className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/15 text-sm font-medium text-white/70 hover:text-white/90 hover:bg-white/10 transition font-geist" href="#">Editorial</a>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="text-sm font-medium text-white/80 hover:text-white transition font-geist" href="#">Sign in</a>
<a className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-4 py-2 text-sm font-semibold hover:bg-white/90 transition font-geist" href="#">
                Shop now
              </a>
</div>

<button aria-label="Open menu" className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5 text-white/90" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>

<div className="md:hidden hidden border-t border-white/10 mt-2 pt-2 pb-3" id="mobileNav">
<div className="grid gap-2">
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/90 font-geist" href="#">New</a>
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/80 font-geist" href="#">Women</a>
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/80 font-geist" href="#">Men</a>
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/80 font-geist" href="#">Editorial</a>
<div className="flex items-center justify-between gap-2 pt-2">
<a className="text-sm font-medium text-white/80 font-geist" href="#">Sign in</a>
<a className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-4 py-2 text-sm font-semibold hover:bg-white/90 transition font-geist" href="#">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                  Shop now
                </a>
</div>
</div>
</div>
</div>
</nav>

<section className="relative z-10">
<div className="max-w-5xl sm:px-6 lg:px-8 sm:pt-24 lg:pt-28 lg:pb-40 text-center mr-auto ml-auto pt-16 pr-4 pb-24 pl-4">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20 backdrop-blur">
<svg className="lucide lucide-sparkles h-4 w-4 text-white/80" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-xs font-medium text-white/80 font-geist">Adaptive style curation</span>
</div>
<h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl text-white font-geist font-light tracking-tighter">
            Dress your world, effortlessly.
          </h1>
<p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-white/80 font-geist">
            ModaIQ learns your taste and fit to assemble edits that feel undeniably you—seasonal, versatile, and ready to wear.
          </p>
<div className="flex gap-3 mt-[300px] items-center justify-center">
<a className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-5 py-3 text-sm sm:text-base font-semibold hover:bg-white/90 transition font-geist" href="#">
              Shop the edit
            </a>
<a className="inline-flex items-center gap-2 sm:text-base hover:bg-white/15 ring-1 ring-white/15 transition text-sm font-medium text-white font-geist bg-white/10 rounded-full pt-3 pr-5 pb-3 pl-5 backdrop-blur" href="#">
              See how it fits
            </a>
</div>
<div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-lock h-4 w-4" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="uppercase tracking-wider font-geist">Private by design</span>
</div>
</div>
</section>
</header>

<section className="relative z-10 -mt-12 -top-20 pb-24">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 backdrop-blur">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
<svg className="lucide lucide-palette h-4 w-4 text-white/90" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</span>
<div className="">
<p className="text-sm font-semibold tracking-tight font-geist">AI fit &amp; style</p>
<p className="text-xs text-white/70 font-geist">Edits tailored to your taste and silhouette.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 backdrop-blur">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
<svg className="lucide lucide-trending-up h-4 w-4 text-white/90" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</span>
<div className="">
<p className="text-sm font-semibold tracking-tight font-geist">Live trend pulse</p>
<p className="text-xs text-white/70 font-geist">Drop-aware picks that stay ahead of the curve.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 backdrop-blur">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
<svg className="lucide lucide-wallet h-4 w-4 text-white/90" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</span>
<div className="">
<p className="text-sm font-semibold tracking-tight font-geist">Budget smart</p>
<p className="text-xs text-white/70 font-geist">High-low mixing to maximize value.</p>
</div>
</div>
</div>
<div className="ring-1 ring-white/10 bg-white/5 rounded-2xl p-4 backdrop-blur">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
<svg className="lucide lucide-shield-check h-4 w-4 text-white/90" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</span>
<div className="">
<p className="text-sm font-semibold tracking-tight font-geist">Privacy first</p>
<p className="text-xs text-white/70 font-geist">Your style data stays with you.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:p-8 ring-1 ring-white/10 bg-white/5 rounded-3xl mr-8 ml-8 pt-6 pr-6 pb-6 pl-6 backdrop-blur">
<div className="flex items-center gap-2 text-sm text-white/70">
<span className="font-normal font-geist">Your Wardrobe</span>
</div>
<div className="mt-2">
<h2 className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] font-medium text-white tracking-tighter font-geist">The look comes together.</h2>
<p className="mt-1 text-sm sm:text-base text-white/70 font-normal font-geist">Every great outfit starts with one inspired piece.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">


<article className="sm:p-6 flex flex-col min-h-[420px] ring-1 ring-white/15 group transition-all duration-300 bg-white/10 bg-[url(https://cdn.midjourney.com/8349e121-2f5a-4f6b-8038-f3a61ac3fa80/0_0.png?w=800&amp;q=80)] bg-cover rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur grayscale justify-between" style={{}}>
<div className="absolute inset-0 transition-all duration-300 group-hover:blur-sm bg-[url(https://cdn.midjourney.com/62f25bc3-52b3-449a-b951-d6fe4fb3f4d2/0_0.png?w=800&amp;q=80)] bg-cover rounded-2xl grayscale" style={{zIndex: '-1'}}></div>
<div className="space-y-5 relative z-10">
<div className="flex gap-3 items-center">
<div className="">
<h3 className="text-lg font-semibold text-white tracking-tight font-geist">02. Discover</h3>
<p className="uppercase text-xs text-white/60 tracking-wider font-geist">Style Profile</p>
</div>
</div>
<p className="text-sm text-white/80 font-geist">Tell us your vibe, fits, and colors you live in. ModaIQ learns your essentials and statement pieces.</p>
<div className="flex gap-2 items-center">
<div className="flex -space-x-1">
<div className="h-6 w-6 ring-2 ring-white/20 flex bg-white/20 rounded-full items-center justify-center">
<svg className="lucide lucide-clock lucide-calendar w-[12px] h-[12px]" data-icon-replaced="true" data-lucide="clock" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '12px', height: '12px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
</div>
<span className="text-xs text-white/60 font-geist">2-3 minutes</span>
</div>
</div>
<div className="h-1.5 overflow-hidden relative z-10 bg-white/10 rounded-full mt-4">
<div className="h-full bg-white/40 rounded-full" style={{width: '50%'}}></div>
</div>
</article><article className="sm:p-6 flex flex-col min-h-[420px] ring-1 ring-white/15 group transition-all duration-300 bg-white/10 bg-[url(https://cdn.midjourney.com/8349e121-2f5a-4f6b-8038-f3a61ac3fa80/0_0.png?w=800&amp;q=80)] bg-cover rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur grayscale justify-between" style={{}}>
<div className="absolute inset-0 transition-all duration-300 group-hover:blur-sm bg-[url(https://cdn.midjourney.com/8349e121-2f5a-4f6b-8038-f3a61ac3fa80/0_0.png?w=800&amp;q=80)] bg-cover rounded-2xl grayscale" style={{zIndex: '-1'}}></div>
<div className="space-y-5 relative z-10">
<div className="flex items-center gap-3">
<div className="">
<h3 className="text-lg font-semibold text-white font-geist tracking-tight">02. Curate</h3>
<p className="text-xs text-white/60 font-geist uppercase tracking-wider">AI Edit</p>
</div>
</div>
<p className="text-sm text-white/80 font-geist">Watch your personalized edit form—silhouettes, palettes, and textures that match your life.</p>
<div className="flex items-center gap-2">
<div className="flex -space-x-1">
<div className="h-6 w-6 rounded-full bg-white/20 ring-2 ring-white/20 flex items-center justify-center">
<svg className="lucide lucide-palette h-3 w-3 text-white/70" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
</div>
<span className="text-xs text-white/60 font-geist">Personalized suggestions</span>
</div>
</div>
<div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden relative z-10">
<div className="h-full bg-white/40 rounded-full" style={{width: '50%'}}></div>
</div>
</article>

<article className="sm:p-6 flex flex-col min-h-[420px] ring-1 ring-white/15 group transition-all duration-300 bg-white/10 bg-[url(https://cdn.midjourney.com/8df4d738-0f84-4eb1-aa40-50f8ff6daada/0_0.png?w=800&amp;q=80)] bg-cover rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur grayscale justify-between" style={{}}>
<div className="absolute inset-0 transition-all duration-300 group-hover:blur-sm bg-[url(https://cdn.midjourney.com/3c10d4ea-a2b2-4d56-be3c-6ba9c58c4f8a/0_0.png?w=800&amp;q=80)] bg-cover rounded-2xl grayscale" style={{zIndex: '-1'}}></div>
<div className="space-y-5 relative z-10">
<div className="flex items-center gap-3">
<div className="">
<h3 className="text-lg font-semibold text-white font-geist tracking-tight">03. Try</h3>
<p className="text-xs text-white/60 font-geist uppercase tracking-wider">Try‑On &amp; Build</p>
</div>
</div>
<p className="text-sm text-white/80 font-geist">Live size hints and outfit builder help you style looks—on your terms, in your mirror.</p>
<div className="space-y-2">
<div className="flex items-center gap-2 text-white/60">
<div className="h-2 w-2 rounded-full bg-green-400"></div>
<span className="text-xs font-geist">Live fit hints</span>
</div>
<div className="flex items-center gap-2 text-white/60">
<div className="h-2 w--400"></div>
<span className="text-xs font-geist">Outfit builder</span>
</div>
<div className="flex items-center gap-2 text-white/60">
<div className="h-2 w-2 rounded-full bg-purple-400"></div>
<span className="text-xs font-geist">Seamless checkout</span>
</div>
</div>
</div>
<div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden relative z-10">
<div className="h-full bg-white/40 rounded-full" style={{width: '75%'}}></div>
</div>
</article>

<article className="sm:p-6 flex flex-col min-h-[420px] ring-1 ring-white/15 group transition-all duration-300 bg-white/10 bg-[url(https://cdn.midjourney.com/099d87a2-e479-4416-bcd5-caee73ed997f/0_0.png?w=800&amp;q=80)] bg-cover rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur grayscale justify-between" style={{}}>
<div className="absolute inset-0 transition-all duration-300 group-hover:blur-sm bg-[url(https://cdn.midjourney.com/099d87a2-e479-4416-bcd5-caee73ed997f/0_0.png?w=800&amp;q=80)] bg-cover rounded-2xl grayscale" style={{zIndex: '-1'}}></div>
<div className="space-y-5 relative z-10">
<div className="flex items-center gap-3">
<div className="">
<h3 className="text-lg font-semibold text-white font-geist tracking-tight">04. Refine</h3>
<p className="text-xs text-white/60 font-geist uppercase tracking-wider">Style Learning</p>
</div>
</div>
<p className="text-sm text-white/80 font-geist">Save, rate, and note what worked. ModaIQ fine‑tunes future edits for sharper precision.</p>
<div className="inline-flex gap-2 bg-white/10 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur items-center">
<svg className="lucide lucide-star h-3.5 w-3.5 text-white/70" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs text-white/70 font-geist">Smart learning</span>
</div>
</div>
<div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden relative z-10">
<div className="h-full bg-white/40 rounded-full" style={{width: '100%'}}></div>
</div>
</article>
</div>
<div className="mt-8 text-center">
<button className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-semibold hover:bg-white/90 transition font-geist">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
          Build your edit
        </button>
<p className="mt-2 text-xs text-white/60 font-geist">Create a personalized wardrobe in under 60 seconds</p>
</div>
</section><section className="sm:p-8 ring-1 ring-white/10 bg-white/5 rounded-3xl mt-8 mr-8 ml-8 pt-6 pr-6 pb-6 pl-6 backdrop-blur">
<div className="flex gap-2 text-sm text-white/70 mb-2 items-center">
<span className="font-normal font-geist">Editor's Picks</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
<div className="">
<h2 className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] font-medium text-white tracking-tighter font-geist">This season's essentials.</h2>
<p className="mt-3 text-base text-white/70 font-normal font-geist">Hand-picked pieces that work across occasions—versatile foundations for any wardrobe.</p>
<div className="mt-6 space-y-4">
<div className="flex items-center gap-3">
<div className="h-2 w-2 rounded-full bg-emerald-400"></div>
<span className="text-sm text-white/80 font-geist">Sustainable materials from verified suppliers</span>
</div>
<div className="flex items-center gap-3">
<div className="h-2 w-2 rounded-full bg-blue-400"></div>
<span className="text-sm text-white/80 font-geist">Size-inclusive fits across all categories</span>
</div>
<div className="flex items-center gap-3">
<div className="h-2 w-2 rounded-full bg-purple-400"></div>
<span className="text-sm text-white/80 font-geist">Curated by AI and human stylists</span>
</div>
</div>
<div className="mt-8 flex items-center gap-4">
<button className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-semibold hover:bg-white/90 transition font-geist">
<svg className="lucide lucide-shopping-cart h-4 w-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
          Shop the edit
        </button>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition font-geist" href="#">
          View lookbook
          <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4">
<div className="relative group overflow-hidden ring-1 ring-white/15 aspect-[3/4] bg-white/10 rounded-2xl backdrop-blur">
<img alt="Essential blazer" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://cdn.midjourney.com/23068c2c-3629-4025-af2a-629137790bb1/0_0.png?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="text-white font-semibold text-sm font-geist">Tailored Blazer</h3>
<p className="text-xs text-white/70 font-geist">From $229</p>
</div>
</div>
<div className="relative group overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur aspect-square">
<img alt="Classic denim" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://cdn.midjourney.com/a97909da-1df2-400c-adf2-e3a6c64428d9/0_0.png?w=800&amp;q=80" style={{outline: 'rgb(245, 158, 11) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="text-white font-semibold text-sm font-geist">Perfect Denim</h3>
<p className="text-white/70 text-xs font-geist">From $125</p>
</div>
</div>
</div>
<div className="space-y-4">
<div className="relative group overflow-hidden ring-1 ring-white/15 aspect-square bg-white/10 rounded-2xl backdrop-blur">
<img alt="Silk blouse" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://cdn.midjourney.com/451d0227-f7f5-456d-a595-fb08ce364854/0_0.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="text-white font-semibold text-sm font-geist">Silk Essential</h3>
<p className="text-xs text-white/70 font-geist">From $449</p>
</div>
</div>
<div className="relative group overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur aspect-[3/4]">
<img alt="Statement dress" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://cdn.midjourney.com/3a5159e3-f6ae-4db1-8294-53743054e08c/0_0.png?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="text-white font-semibold text-sm font-geist">Midi Dress</h3>
<p className="text-white/70 text-xs font-geist">From $225</p>
</div>
</div>
</div>
</div>
</div>
<div className="flex mt-8 items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex -space-x-2">
<img alt="Customer" className="h-8 w-8 rounded-full ring-2 ring-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/daf48e37-0de1-4805-9bdf-a256c7d5d35a_320w.jpg" style={{}}/>
<img alt="Customer" className="h-8 w-8 rounded-full ring-2 ring-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c0f45607-be3b-4145-aba4-31e067ee618b_320w.jpg"/>
<img alt="Customer" className="h-8 w-8 rounded-full ring-2 ring-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fc856f12-4738-4299-91f7-4f7be1502a47_320w.jpg" style={{}}/>
<div className="h-8 w-8 ring-2 ring-white/20 flex bg-white/20 rounded-full backdrop-blur-md items-center justify-center">
<span className="text-xs text-white/80 font-semibold font-geist">+2K</span>
</div>
</div>
<p className="text-sm text-white/70 font-geist">Styled by our community</p>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-star h-4 w-4 text-amber-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm text-white/80 font-semibold font-geist">4.9</span>
<span className="text-sm text-white/60 font-geist">(2,847 reviews)</span>
</div>
</div>
</section>

<section className="sm:p-8 ring-1 ring-white/10 bg-white/5 rounded-3xl mt-8 mr-8 ml-8 pt-6 pr-6 pb-6 pl-6 backdrop-blur" id="aura-emfcjacbo">
<div className="flex gap-2 text-sm text-white/70 items-center">
<span className="font-normal font-geist">Style Gallery</span>
</div>
<div className="mt-2">
<h2 className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] font-medium text-white tracking-tighter font-geist">Curated looks.</h2>
<p className="sm:text-base text-sm font-normal text-white/70 font-geist mt-1">Discover how ModaIQ transforms personal style into confident looks across seasons, occasions, and moods.</p>
</div>
<div className="relative h-[400px] sm:h-[400px] flex mt-8 items-center justify-center" id="aura-emfcj9ww0">
<div className="relative w-60 h-full perspective-[1100px]">
<div className="carousel-inner w-full h-full absolute transform-style-preserve-3d transition-transform duration-1000 animate-spin-slow hover:animation-pause">

<div className="absolute w-[200px] h-[400px] overflow-hidden transform-origin-center border-white/20 border-2 rounded-lg shadow-xl" style={{transform: 'rotateY(0deg) translateZ(288px)'}}>
<img alt="Elegant evening wear" className="w-full h-full object-cover" src="https://cdn.midjourney.com/8593dac1-2010-4cc5-b48b-27a0b969ecae/0_0.png?w=800&amp;q=80"/>
</div>
<div className="absolute w-[200px] h-[400px] overflow-hidden transform-origin-center border-white/20 border-2 rounded-lg shadow-xl" style={{transform: 'rotateY(40deg) translateZ(288px)'}}>
<img alt="Casual street style" className="w-full h-full object-cover" src="https://cdn.midjourney.com/f6d64e4b-7eed-436b-892e-ebc8abd84fdc/0_0.png?w=800&amp;q=80"/>
</div>
<div className="absolute w-[200px] h-[400px] overflow-hidden transform-origin-center border-white/20 border-2 rounded-lg shadow-xl" style={{transform: 'rotateY(80deg) translateZ(288px)'}}>
<img alt="Professional business attire" className="w-full h-full object-cover" src="https://cdn.midjourney.com/d5130d3c-b7b1-4b4b-b105-8e49c036105b/0_0.png?w=800&amp;q=80"/>
</div>
<div className="absolute w-[200px] h-[400px] overflow-hidden transform-origin-center border-white/20 border-2 rounded-lg shadow-xl" style={{transform: 'rotateY(120deg) translateZ(288px)'}}>
<img alt="Weekend casual look" className="w-full h-full object-cover" src="https://cdn.midjourney.com/4645c5c4-f24c-41c8-a9ed-5520f8f7e556/0_0.png?w=800&amp;q=80"/>
</div>
<div className="absolute w-[200px] h-[400px] overflow-hidden transform-origin-center border-white/20 border-2 rounded-lg shadow-xl" style={{transform: 'rotateY(160deg) translateZ(288px)'}}>
<img alt="Modern minimalist style" className="w-full h-full object-cover" src="https://cdn.midjourney.com/5f5ce1d4-5c13-412d-922f-c44de909f12b/0_0.png?w=800&amp;q=80"/>
</div>
<div className="absolute w-[200px] h-[400px] overflow-hidden transform-origin-center border-white/20 border-2 rounded-lg shadow-xl" style={{transform: 'rotateY(200deg) translateZ(288px)'}}>
<img alt="Seasonal fashion trends" className="w-full h-full object-cover" src="https://cdn.midjourney.com/7c6cec63-33b6-4ad9-8f1b-391fcc8a72e8/0_0.png?w=800&amp;q=80"/>
</div>
<div className="absolute w-[200px] h-[400px] overflow-hidden transform-origin-center border-white/20 border-2 rounded-lg shadow-xl" style={{transform: 'rotateY(240deg) translateZ(288px)'}}>
<img alt="Designer collections" className="w-full h-full object-cover" src="https://cdn.midjourney.com/b3ac5d5f-1e8a-4454-a1d0-e16d2a1a7ea3/0_0.png?w=800&amp;q=80"/>
</div>
<div className="absolute w-[200px] h-[400px] overflow-hidden transform-origin-center border-white/20 border-2 rounded-lg shadow-xl" style={{transform: 'rotateY(280deg) translateZ(288px)'}}>
<img alt="Vintage inspired looks" className="w-full h-full object-cover" src="https://cdn.midjourney.com/68101711-ea35-438c-98c5-41479bcd70da/0_0.png?w=800&amp;q=80"/>
</div>
<div className="absolute w-[200px] h-[400px] overflow-hidden transform-origin-center border-white/20 border-2 rounded-lg shadow-xl" style={{transform: 'rotateY(320deg) translateZ(288px)'}}>
<img alt="Sustainable fashion" className="w-full h-full object-cover" src="https://cdn.midjourney.com/1738b901-9ae6-4b85-a55e-41e4569facb2/0_0.png?w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
<div className="text-center">
<div className="sm:text-3xl text-2xl font-semibold text-white tracking-tight font-geist">2K+</div>
<p className="text-sm text-white/70 font-geist">Curated looks</p>
</div>
<div className="text-center">
<div className="sm:text-3xl text-2xl font-semibold text-white tracking-tight font-geist">50+</div>
<p className="text-sm text-white/70 font-geist">Style categories</p>
</div>
<div className="text-center">
<div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight font-geist">95%</div>
<p className="text-sm text-white/70 font-geist">Satisfaction rate</p>
</div>
</div><div className="mt-8 text-center">
<a className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-6 py-3 text-sm font-semibold hover:bg-white/90 transition font-geist" href="#">
<svg className="lucide lucide-eye h-4 w-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
          Explore full gallery
        </a>
<p className="mt-2 text-xs text-white/60 font-geist">Hover to pause • Click to explore styles</p>
</div>
</section><section className="max-w-7xl sm:px-6 sm:mt-20 mr-auto mb-24 ml-auto pr-4 pl-4" id="faq">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5 backdrop-blur">
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

<div className="md:col-span-5">
<h2 className="text-[56px] sm:text-[80px] leading-none font-semibold text-white tracking-tighter font-geist">Questions.</h2>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">
                Answers about ModaIQ, AI curation, fit guidance, and how we help you build a confident wardrobe.
              </p>
<a className="mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium tracking-tight text-white/90 bg-white/10 hover:bg-white/15 ring-1 ring-white/15 backdrop-blur" href="#contact">
<span className="font-geist">Get in touch</span>
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>
</div>

<div className="md:col-span-7">
<div className="space-y-3">

<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur" data-accordion-item="" data-open="true">
<button aria-expanded="true" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white font-geist">How does ModaIQ learn my style?</span>
<span className="shrink-0">
<svg className="lucide lucide-plus w-5 h-5 text-white/70 hidden" data-icon="plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-5 h-5 text-white/70" data-icon="minus" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70 font-geist" data-qa="a">
                    Start with a quick style profile—fits, silhouettes, and colors. ModaIQ refines with your saves, ratings, and returns to improve every edit.
                  </div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white font-geist">Can I shop for a group or partner?</span>
<span className="shrink-0">
<svg className="lucide lucide-plus w-5 h-5 text-white/70" data-icon="plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-5 h-5 text-white/70 hidden" data-icon="minus" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70 font-geist hidden" data-qa="a">
                    Yes—create multiple profiles to balance different tastes and sizes. Share edits, vote on looks, and checkout together.
                  </div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white font-geist">What if a size or item is sold out?</span>
<span className="shrink-0">
<svg className="lucide lucide-plus w-5 h-5 text-white/70" data-icon="plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-5 h-5 text-white/70 hidden" data-icon="minus" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70 font-geist hidden" data-qa="a">
                    We surface in‑stock alternatives with similar fit, alert you on restocks, and recommend styling swaps that keep your look intact.
                  </div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white font-geist">Do I need connection for fit guidance?</span>
<span className="shrink-0">
<svg className="lucide lucide-plus w-5 h-5 text-white/70" data-icon="plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-5 h-5 text-white/70 hidden" data-icon="minus" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70 font-geist hidden" data-qa="a">
                    Core recommendations work offline after saving your edit. Live trend updates and restock alerts need a connection.
                  </div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white font-geist">How does pricing optimization work?</span>
<span className="shrink-0">
<svg className="lucide lucide-plus w-5 h-5 text-white/70" data-icon="plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-5 h-5 text-white/70 hidden" data-icon="minus" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70 font-geist hidden" data-qa="a">
                    Set a range and ModaIQ blends wardrobe staples with statement pieces, tracks seasonal price drops, and suggests the best timing to buy.
                  </div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white font-geist">What makes ModaIQ different?</span>
<span className="shrink-0">
<svg className="lucide lucide-plus w-5 h-5 text-white/70" data-icon="plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-5 h-5 text-white/70 hidden" data-icon="minus" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70 font-geist hidden" data-qa="a">
                    Most stores list products. ModaIQ curates looks that fit your life—taste, context, and privacy-first personalization, on your device.
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>

</section><style>
@keyframes spin-slow {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(-360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
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
<div className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl backdrop-blur">
<div className="relative z-10 md:p-12 lg:p-16 pt-8 pr-8 pb-8 pl-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-5">
<div className="rounded-2xl bg-white/95 backdrop-blur ring-1 ring-white/20 shadow-lg p-6" id="contact">
<div className="flex items-center justify-between">
<div className="">
<p className="text-[11px] text-neutral-500 font-geist uppercase tracking-wider">ModaIQ Support</p>
<h3 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 font-geist">
                        Need styling help?
                      </h3>
</div>
<div className="h-9 w-9 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
<svg className="lucide lucide-message-square h-4 w-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
</div>
<form action="#" className="mt-6 space-y-4" method="POST">
<div className="">
<label className="block text-xs text-neutral-600 font-geist" htmlFor="ct-name">Your name<span className="text-neutral-400"> *</span></label>
<input className="mt-1 w-full pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400 font-geist" id="ct-name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="">
<label className="block text-xs text-neutral-600 font-geist" htmlFor="ct-email">Email<span className="text-neutral-400"> *</span></label>
<div className="relative mt-1">
<svg className="lucide lucide-mail h-4 w-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400 font-geist" id="ct-email" name="email" placeholder="you@example.com" required="" type="email"/>
</div>
</div>
<div className="">
<label className="block text-xs text-neutral-600 font-geist" htmlFor="ct-msg">Message</label>
<textarea className="mt-1 w-full resize-y pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400 font-geist" id="ct-msg" name="message" placeholder="Tell us what you’re looking for—sizes, occasions, or vibe." rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white px-4 py-3 text-sm font-semibold hover:bg-neutral-800 transition-colors font-geist" type="submit">
                      Send message
                      <svg className="lucide lucide-arrow-right h-4 w-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<p className="text-[11px] text-neutral-500 font-geist">By submitting, you agree to our Terms and Privacy Policy.</p>
</form>
</div>
</div>

<div className="lg:col-span-7">
<h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] font-semibold text-white tracking-tight font-geist">Let’s style it.</h2>
<p className="text-base sm:text-lg max-w-2xl text-white/80 mt-4 font-geist">
                  Personal styling, wholesale, or partnerships—tell us what you need. We reply within one business day.
                </p>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center text-white/90">
<svg className="lucide lucide-clock-3 h-4 w-4" data-lucide="clock-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6h4"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<p className="text-white font-semibold text-sm font-geist">Quick response</p>
<p className="text-white/70 text-xs font-geist">Most messages receive a reply in under 24h.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center text-white/90">
<svg className="lucide lucide-shopping-bag h-4 w-4" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</div>
<div>
<p className="text-white font-semibold text-sm font-geist">Clear next steps</p>
<p className="text-white/70 text-xs font-geist">We’ll follow up with a concise plan and timeline.</p>
</div>
</div>
</div>

<div className="mt-8">
<div className="inline-flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur ring-1 ring-white/20 shadow-lg p-3">
<img alt="Styling lead" className="h-12 w-12 rounded-xl object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9e675575-668c-4087-8408-fa06dd33c5f0_800w.jpg" style={{}}/>
<div className="min-w-0">
<p className="text-[11px] text-neutral-500 leading-none font-geist uppercase tracking-wider">Styling Lead</p>
<p className="text-neutral-900 font-semibold tracking-tight truncate font-geist">Ava Kim</p>
</div>
<a className="ml-1 inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white px-3 py-2 text-xs font-semibold hover:bg-neutral-800 transition-colors font-geist" href="mailto:hello@modaiq.com">
                      Ask directly
                      <svg className="lucide lucide-message-circle h-3.5 w-3.5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="max-w-7xl mr-auto ml-auto pr-6 pb-12 pl-6">
<div className="p-12 lg:p-16 border border-white/10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
<div className="lg:col-span-1">
<div className="flex items-center mb-6">
<span className="ml-2 uppercase text-lg font-semibold tracking-tighter font-bricolage text-white">ModaIQ</span>
</div>
<p className="text-sm text-white/60 leading-relaxed mb-8 font-geist">
              Adaptive curation that learns your style rhythm. Dress your world, effortlessly.
            </p>
<div className="flex items-center gap-4">
<a aria-label="Twitter" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 bg-white/[0.03]" href="#">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a aria-label="LinkedIn" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 bg-white/[0.03]" href="#">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a aria-label="Instagram" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 bg-white/[0.03]" href="#">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
</div>
</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide font-geist">Shop</h4>
<ul className="space-y-4">
<li className=""><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#">New Arrivals</a></li>
<li className=""><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#">Best Sellers</a></li>
<li className=""><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#">Essentials</a></li>
<li className=""><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#">Outlet</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide font-geist">Collections</h4>
<ul className="space-y-4">
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#">Capsule Wardrobe</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#">Work &amp; Weekends</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#">Occasionwear</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#">Sustainable Edit</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide font-geist">Help</h4>
<ul className="space-y-4">
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#">Size Guide</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#">Shipping &amp; Returns</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#">Support</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#">Careers</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-12 mb-12">
<div className="max-w-2xl mx-auto text-center">
<h4 className="text-lg font-medium text-white mb-4 font-geist">Stay styled</h4>
<p className="text-sm text-white/60 mb-6 font-geist">Get drops, size tips, and editor picks in your inbox.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<input className="flex-1 max-w-md px-4 py-3 rounded-xl text-sm text-white placeholder-white/40 border border-white/10 focus:border-blue-500/30 focus:outline-none transition-all duration-300 bg-white/5 font-geist" placeholder="Enter your email address" type="email"/>
<button className="px-8 py-3 rounded-xl text-sm font-medium text-white border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 bg-blue-500/15 font-geist">Subscribe</button>
</div>
</div>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-wrap items-center gap-6 text-xs text-white/40">
<span className="font-geist">© 2024 ModaIQ. All rights reserved.</span>
<a className="hover:text-white/60 transition-colors duration-300 font-geist" href="#">Privacy Policy</a>
<a className="hover:text-white/60 transition-colors duration-300 font-geist" href="#">Terms of Service</a>
</div>
<div className="flex items-center gap-4 text-xs text-white/40">
<span className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-lock h-3 w-3 text-white/70" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            Private by design
          </span>
<span className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check-circle-2 h-3 w-3 text-green-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
            100% Adaptive
          </span>
</div>
</div>
</footer>



    </>
  );
}
