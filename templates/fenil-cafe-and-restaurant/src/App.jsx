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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    function openMenuCategory(id, title) {
        document.getElementById('mc-categories').classList.add('hidden');
        document.getElementById('mc-details-container').classList.remove('hidden');
        document.querySelectorAll('.mc-detail-section').forEach(s => s.classList.add('hidden'));
        document.getElementById('mc-detail-' + id).classList.remove('hidden');
        
        document.getElementById('mc-main-title').textContent = title;
        document.getElementById('mc-back-btn').classList.remove('hidden');
        document.getElementById('mc-back-btn').classList.add('flex');
        document.getElementById('mc-view-all-btn').classList.add('hidden');
        document.getElementById('mc-view-all-btn').classList.remove('flex');
        
        document.getElementById('mc-details-container').scrollTop = 0;
    }

    function closeMenuCategory() {
        document.getElementById('mc-categories').classList.remove('hidden');
        document.getElementById('mc-details-container').classList.add('hidden');
        
        document.getElementById('mc-main-title').textContent = 'Curated Menu';
        document.getElementById('mc-back-btn').classList.add('hidden');
        document.getElementById('mc-back-btn').classList.remove('flex');
        document.getElementById('mc-view-all-btn').classList.remove('hidden');
        document.getElementById('mc-view-all-btn').classList.add('flex');
    }
  


    setTimeout(function() {
      const buttons = document.querySelectorAll('button');
      buttons.forEach(function(btn) {
        if (btn.textContent.includes('+91 9016520658')) {
          btn.onclick = function() { window.location.href = 'tel:+919016520658'; };
        } else if (btn.textContent.includes('WhatsApp Us')) {
          btn.onclick = function() { window.open('https://wa.me/919016520658', '_blank'); };
        }
      });
    }, 200);
  


      // Smooth Reveal on Scroll
      document.addEventListener('DOMContentLoaded', () => {
          const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.1
          };

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          const scrollElements = document.querySelectorAll('.reveal');
          scrollElements.forEach(el => observer.observe(el));
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full max-w-[1600px] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-black/5 flex flex-col">

<div className="relative w-full h-[90vh] bg-neutral-950 overflow-hidden shrink-0">

<div className="absolute inset-0 animate-enter duration-1000">
<img alt="Cafe Interior" className="w-full h-full object-cover object-center opacity-70 scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83fa49d8-9835-4cea-8d39-9e6015e75de6_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>

<div className="opacity-[0.03] absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
</div>

<nav className="z-50 flex animate-enter delay-500 md:px-16 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 left-0 items-start justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-orange-400 group-hover:bg-white group-hover:text-orange-500 transition-all duration-300 shadow-lg shadow-black/5">
<iconify-icon height="20" icon="solar:chef-hat-heart-bold-duotone" width="20"></iconify-icon>
</div>
<div className="flex flex-col justify-center">
<span className="leading-tight text-lg font-bold text-white tracking-tight font-sans">Fenil's-Cafe</span>
<span className="text-[10px] uppercase font-medium text-white/70 tracking-widest font-sans">
                n Restaurant
              </span>
</div>
</a>
<div className="hidden md:flex items-center gap-3">
<span className="flex items-center gap-2 -translate-y-12 text-xs font-medium text-neutral-200 tracking-wide font-sans bg-black/20 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur-md">{iconify-icon}  Open until 12:00 PM</span>
</div>
</nav>

<div className="relative w-full h-full flex flex-col justify-end pb-16 md:pb-24 px-8 md:px-16 pointer-events-none">
<div className="pointer-events-auto">

<div className="flex flex-wrap items-center gap-3 mb-8 animate-enter delay-100">
<div className="flex gap-2 hover:scale-105 transition-transform duration-300 text-xs font-semibold text-black font-sans bg-white border-white border rounded-full pt-1.5 pr-4 pb-1.5 pl-4 shadow-xl gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-orange-500" height="16" icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
      4.9
      <span className="font-medium text-neutral-400 font-sans rotate-y-5">(850+ reviews)</span>
</div>
<div className="flex items-center gap-2 glass-panel text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-white/20 transition-colors font-sans">
<iconify-icon height="16" icon="solar:wallet-linear" strokeWidth="1.5" width="16"></iconify-icon>
      Affordable Luxury
    </div>
</div>
<h1 className="leading-[0.95] animate-enter delay-200 md:text-8xl text-5xl font-semibold text-white tracking-tighter font-bricolage max-w-5xl mb-8 drop-shadow-2xl">
    Good Food...
    <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-white to-white font-bricolage font-semibold">
                Good Life.
              </span>
</h1>
<p className="md:text-xl leading-relaxed animate-enter delay-300 text-lg font-light text-neutral-300 font-sans max-w-lg mb-12">
    Experience the perfect blend of cafe culture and dining in
    Sanawad. Providing a "Good Food...Good Life" experience since
    2022.
  </p>
<div className="flex flex-col md:flex-row md:items-center gap-4 animate-enter delay-500 gap-x-4 gap-y-4 items-start">
<button className="flex gap-3 hover:bg-neutral-100 transition-all group shadow-white/10 text-sm font-semibold text-black font-sans bg-white rounded-full pt-2 pr-2 pb-2 pl-6 shadow-lg gap-x-3 gap-y-3 items-center" onclick="document.querySelector('section').scrollIntoView({ behavior: 'smooth', block: 'start' })">
                Explore Menu
                <span className="bg-black text-white p-2 rounded-full transition-transform group-hover:rotate-45 duration-300 flex items-center justify-center">
<iconify-icon className="" height="18" icon="solar:arrow-right-up-linear" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} width="18"></iconify-icon>
</span>
</button>
<button className="flex gap-3 glass-panel hover:bg-white/10 transition-all group text-sm font-medium text-white font-sans rounded-full pt-2 pr-2 pb-2 pl-6 backdrop-blur-md gap-x-3 gap-y-3 items-center" onclick="Array.from(document.querySelectorAll('h3')).find(h =&gt; h.textContent.includes('Opening Hours'))?.closest('section')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) || document.querySelectorAll('section')[2].scrollIntoView({ behavior: 'smooth', block: 'start' })">
                Reserve a Table
                <span className="bg-white/10 text-white p-2 rounded-full border border-white/10 flex items-center justify-center">
<iconify-icon className="" height="18" icon="solar:calendar-add-linear" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} width="18"></iconify-icon>
</span>
</button>
</div>
</div>
</div>
</div>

<section className="md:px-20 md:py-32 bg-white w-full pt-24 pr-8 pb-24 pl-8">
<div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-20 lg:gap-24">

<div className="lg:col-span-5 flex flex-col gap-8 reveal active">
<div className="">
<span className="inline-flex items-center gap-1.5 text-[10px] uppercase font-semibold text-neutral-500 tracking-widest font-sans bg-neutral-50 border-neutral-200 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3">
<span className="w-1 h-1 bg-neutral-400 rounded-full"></span>
                Since May 3, 2022
              </span>
<h2 className="text-4xl lg:text-5xl tracking-tight leading-[1.1] text-neutral-900 mb-6 font-bricolage font-semibold">
                Where every bite
                <br/>
                tells a story.
              </h2>
<p className="leading-relaxed text-lg font-light text-neutral-500 font-sans mb-8">Fenil's-Cafe n Restaurant is Sanawad's sanctuary for flavor enthusiasts. We blend the warmth of traditional hospitality with the sleekness of modern cafe culture, guided by our motto: Good Food...Good Life.</p>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-100 transition-colors hover:border-neutral-200">
<div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
<iconify-icon height="20" icon="solar:chef-hat-heart-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-semibold text-neutral-900 font-sans">
                      Handcrafted Sweets
                    </h4>
<p className="leading-relaxed text-xs text-neutral-500 font-sans mt-1">
                      Signature Modaks made fresh daily with premium saffron and
                      cardamom.
                    </p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-100 transition-colors hover:border-neutral-200">
<div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
<iconify-icon height="20" icon="solar:cup-hot-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-semibold text-neutral-900 font-sans">
                      Artisan Coffee
                    </h4>
<p className="leading-relaxed text-xs text-neutral-500 font-sans mt-1">
                      Single-origin beans roasted to perfection for the ultimate
                      brew.
                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="reveal reveal-delay-200 overflow-hidden md:p-14 bg-neutral-50/50 h-full border-neutral-100 border rounded-[2.5rem] pt-10 pr-10 pb-10 pl-10 relative">

<div className="-mt-10 -mr-10 bg-orange-100 opacity-30 w-64 h-64 rounded-full absolute top-0 right-0 blur-3xl"></div>
<div className="relative z-10 flex justify-between items-end mb-10">
<h3 className="text-2xl tracking-tight text-neutral-900 font-bricolage font-medium transition-all duration-300" id="mc-main-title">
      Curated Menu
    </h3>
<button className="text-xs font-medium border-b border-neutral-300 pb-0.5 hover:text-orange-600 hover:border-orange-600 transition-colors flex items-center gap-1 font-sans" id="mc-view-all-btn">
      View Full Menu
      <iconify-icon height="12" icon="lucide:arrow-right" width="12"></iconify-icon>
</button>
<button className="hidden text-xs font-medium border-b border-orange-300 pb-0.5 text-orange-600 hover:text-orange-700 hover:border-orange-700 transition-colors items-center gap-1 font-sans cursor-pointer" id="mc-back-btn" onclick="closeMenuCategory()">
<iconify-icon height="12" icon="lucide:arrow-left" width="12"></iconify-icon>
      Back to Categories
    </button>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10 transition-all duration-500" id="mc-categories">

<div className="group flex flex-col gap-4 hover-lift cursor-pointer reveal reveal-delay-100 text-center bg-white border-neutral-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm gap-x-4 gap-y-4 items-center" onclick="openMenuCategory('breakfast', 'Breakfast Menu')">
<div className="w-12 h-12 rounded-full bg-neutral-50 group-hover:bg-orange-50 text-neutral-600 group-hover:text-orange-600 transition-colors flex items-center justify-center">
<iconify-icon height="24" icon="lucide:coffee" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm text-neutral-800 font-sans">Breakfast</span>
</div>

<div className="group bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center text-center gap-4 hover-lift cursor-pointer reveal reveal-delay-100" onclick="openMenuCategory('sweets', 'Sweets &amp; Desserts')">
<div className="w-12 h-12 rounded-full bg-neutral-50 group-hover:bg-orange-50 text-neutral-600 group-hover:text-orange-600 transition-colors flex items-center justify-center">
<iconify-icon height="24" icon="lucide:croissant" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm text-neutral-800 font-sans">Sweets</span>
</div>

<div className="group flex flex-col gap-4 hover-lift cursor-pointer reveal reveal-delay-200 text-center bg-white border-neutral-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm gap-x-4 gap-y-4 items-center" onclick="openMenuCategory('bistro', 'Bistro Specials')">
<div className="w-12 h-12 rounded-full bg-neutral-50 group-hover:bg-orange-50 text-neutral-600 group-hover:text-orange-600 transition-colors flex items-center justify-center">
<iconify-icon height="24" icon="lucide:utensils" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm text-neutral-800 font-sans">Bistro</span>
</div>

<div className="group flex flex-col gap-4 hover-lift cursor-pointer reveal reveal-delay-200 text-center bg-white border-neutral-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm gap-x-4 gap-y-4 items-center" onclick="openMenuCategory('beverages', 'Beverages')">
<div className="w-12 h-12 rounded-full bg-neutral-50 group-hover:bg-orange-50 text-neutral-600 group-hover:text-orange-600 transition-colors flex items-center justify-center">
<iconify-icon height="24" icon="lucide:wine" strokeWidth="1.5" style={{color: 'rgb(82, 82, 82)'}} width="24"></iconify-icon>
</div>
<span className="text-sm text-neutral-800 font-sans">Beverages</span>
</div>

<div className="group flex flex-col gap-4 hover-lift cursor-pointer reveal reveal-delay-300 text-center bg-white border-neutral-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm gap-x-4 gap-y-4 items-center" onclick="openMenuCategory('specials', 'Signature Specials')">
<div className="w-12 h-12 rounded-full bg-neutral-50 group-hover:bg-orange-50 text-neutral-600 group-hover:text-orange-600 transition-colors flex items-center justify-center">
<iconify-icon height="24" icon="lucide:flame" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm text-neutral-800 font-sans">Specials</span>
</div>

<div className="group flex flex-col gap-4 hover-lift cursor-pointer reveal reveal-delay-300 text-center bg-white border-neutral-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm gap-x-4 gap-y-4 items-center" onclick="openMenuCategory('vegan', 'Vegan Bistro')">
<div className="w-12 h-12 rounded-full bg-neutral-50 group-hover:bg-orange-50 text-neutral-600 group-hover:text-orange-600 transition-colors flex items-center justify-center">
<iconify-icon height="24" icon="lucide:leaf" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm text-neutral-800 font-sans">Vegan</span>
</div>
</div>

<div className="hidden relative z-10 max-h-[60vh] overflow-y-auto pr-4 transition-all duration-500 animate-enter" id="mc-details-container" style={{scrollbarWidth: 'thin', scrollbarColor: 'rgba(251, 146, 60, 0.4) transparent'}}>

<div className="mc-detail-section hidden flex-col" id="mc-detail-breakfast">
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Classic Veg Breakfast</h4>
<p className="text-xs text-neutral-500 font-sans mt-0.5">Toast, Butter, Jam, Tea/Coffee</p>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Masala Omelette with Toast</h4>
<p className="text-xs text-neutral-500 font-sans mt-0.5">Optional egg section</p>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Avocado Toast</h4>
<p className="text-xs text-neutral-500 font-sans mt-0.5">Vegan option available</p>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Pancakes with Maple Syrup</h4>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Poha / Upma</h4>
<p className="text-xs text-neutral-500 font-sans mt-0.5">Indian Style</p>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Breakfast Sandwich</h4>
<p className="text-xs text-neutral-500 font-sans mt-0.5">Cheese / Veg Loaded</p>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Smoothie Bowl</h4>
<p className="text-xs text-neutral-500 font-sans mt-0.5">Fruits + Granola</p>
</div>
</div>

<div className="mc-detail-section hidden flex-col" id="mc-detail-sweets">
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Chocolate Brownie</h4>
<p className="text-xs text-neutral-500 font-sans mt-0.5">Hot / With Ice Cream</p>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Cheesecake</h4>
<p className="text-xs text-neutral-500 font-sans mt-0.5">Strawberry / Blueberry</p>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Croissant</h4>
<p className="text-xs text-neutral-500 font-sans mt-0.5">Butter / Chocolate</p>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Muffins</h4>
<p className="text-xs text-neutral-500 font-sans mt-0.5">Choco Chip / Banana</p>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Waffles with Honey &amp; Fruits</h4>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Donuts</h4>
<p className="text-xs text-neutral-500 font-sans mt-0.5">Assorted Flavors</p>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Ice Cream Sundae</h4>
</div>
</div>

<div className="mc-detail-section hidden flex-col" id="mc-detail-vegan">
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Vegan Buddha Bowl</h4>
<p className="text-xs text-neutral-500 font-sans mt-0.5">Quinoa + Veggies</p>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Vegan Burger</h4>
<p className="text-xs text-neutral-500 font-sans mt-0.5">Plant-Based Patty</p>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Grilled Veggie Wrap</h4>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Vegan Pasta</h4>
<p className="text-xs text-neutral-500 font-sans mt-0.5">Red Sauce / White Sauce</p>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Hummus &amp; Pita Platter</h4>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Vegan Smoothies</h4>
<p className="text-xs text-neutral-500 font-sans mt-0.5">Almond / Soy Milk</p>
</div>
</div>

<div className="mc-detail-section hidden flex-col" id="mc-detail-bistro">
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Margherita Pizza</h4>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Farmhouse Pizza</h4>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">White Sauce Pasta</h4>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Red Sauce Pasta</h4>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Garlic Bread with Cheese</h4>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Loaded Nachos</h4>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Club Sandwich</h4>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">French Fries</h4>
<p className="text-xs text-neutral-500 font-sans mt-0.5">Classic / Peri-Peri</p>
</div>
</div>

<div className="mc-detail-section hidden flex-col" id="mc-detail-beverages">
<h5 className="text-[10px] font-medium text-neutral-400 uppercase tracking-widest mt-4 mb-1 font-sans">Hot Drinks</h5>
<div className="group flex flex-col py-3 border-b border-neutral-200/60">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Espresso</h4>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Cappuccino</h4>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Latte</h4>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Americano</h4>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Masala Chai</h4>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Hot Chocolate</h4>
</div>
<h5 className="text-[10px] font-medium text-neutral-400 uppercase tracking-widest mt-8 mb-1 font-sans">Cold Drinks</h5>
<div className="group flex flex-col py-3 border-b border-neutral-200/60">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Iced Coffee</h4>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Cold Coffee</h4>
<p className="text-xs text-neutral-500 font-sans mt-0.5">With Ice Cream</p>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Iced Latte</h4>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Fresh Lime Soda</h4>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Mojito</h4>
<p className="text-xs text-neutral-500 font-sans mt-0.5">Mint / Lemon</p>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Milkshakes</h4>
<p className="text-xs text-neutral-500 font-sans mt-0.5">Chocolate / Strawberry / Oreo</p>
</div>
<h5 className="text-[10px] font-medium text-neutral-400 uppercase tracking-widest mt-8 mb-1 font-sans">Fresh Juices</h5>
<div className="group flex flex-col py-3 border-b border-neutral-200/60">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Orange Juice</h4>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Watermelon Juice</h4>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Pineapple Juice</h4>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Mixed Fruit Juice</h4>
</div>
</div>

<div className="mc-detail-section hidden flex-col" id="mc-detail-specials">
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Cafe Special Cold Coffee</h4>
<p className="text-xs text-neutral-500 font-sans mt-0.5">Secret Recipe 😎</p>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Chocolate Lava Pancakes</h4>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Signature Veg Loaded Pizza</h4>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Premium Brownie Blast</h4>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Detox Green Juice</h4>
</div>
<div className="group flex flex-col py-3 border-b border-neutral-200/60 last:border-0">
<h4 className="text-neutral-900 font-sans text-sm md:text-base group-hover:text-orange-600 transition-colors">Chef’s Special Pasta</h4>
</div>
</div>

<div className="mt-8 p-4 bg-orange-50/50 rounded-2xl border border-orange-100/50">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-orange-500" height="16" icon="lucide:plus-circle" width="16"></iconify-icon>
<h5 className="text-xs font-medium text-orange-900 uppercase tracking-widest font-sans">Optional Add-ons</h5>
</div>
<p className="text-xs text-orange-800/80 font-sans leading-relaxed">Extra Cheese • Extra Toppings • Ice Cream Scoop • Almond / Soy Milk</p>
</div>
</div>

</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] w-full text-white px-8 md:px-20 py-24 md:py-32">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 reveal">
<div className="max-w-2xl">
<h2 className="lg:text-5xl leading-[1.1] text-4xl font-semibold tracking-tight font-bricolage mb-6">
              Designed for
              <span className="font-semibold text-neutral-500 font-bricolage">Connection.</span>
</h2>
<p className="text-lg font-light text-neutral-400 font-sans max-w-lg">
              Whether you need a quiet corner to work or a large table for
              celebration, our space adapts to your needs.
            </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-6 grid-rows-[auto_auto] gap-8">

<div className="md:col-span-2 md:row-span-2 transition-all hover:border-white/10 flex flex-col min-h-[360px] reveal group bg-neutral-900 border-white/5 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="w-12 h-12 glass-panel-dark rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:bell-bing-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-2xl tracking-tight mb-6 font-bricolage font-semibold">
                Premium Services
              </h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-neutral-400 text-sm hover:text-white transition-colors font-sans">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="16"></iconify-icon>
                  Table Service
                </li>
<li className="flex items-center gap-3 text-neutral-400 text-sm hover:text-white transition-colors font-sans">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="16"></iconify-icon>
                  Curbside Pickup
                </li>
<li className="flex items-center gap-3 text-neutral-400 text-sm hover:text-white transition-colors font-sans">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="16"></iconify-icon>
                  Event Catering
                </li>
<li className="flex items-center gap-3 text-neutral-400 text-sm hover:text-white transition-colors font-sans">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="16"></iconify-icon>
                  Private Booking
                </li>
</ul>
</div>
</div>

<div className="md:col-span-4 relative bg-neutral-900 rounded-[2rem] overflow-hidden p-10 group border border-white/5 min-h-[300px] reveal reveal-delay-200">
<img alt="Cafe Vibes" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-1000" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-end">
<span className="px-3 py-1 rounded-full bg-white/10 text-[10px] tracking-wider uppercase font-semibold backdrop-blur-md border border-white/10 font-sans">
                  Ambience
                </span>
</div>
<div>
<h3 className="text-3xl tracking-tight mb-2 font-bricolage font-semibold">
                  Modern Comfort
                </h3>
<p className="text-white/70 text-sm max-w-sm font-sans">
                  Aesthetic interiors meeting cozy functionality.
                </p>
</div>
</div>
</div>

<div className="md:col-span-2 bg-neutral-800/40 rounded-[2rem] p-8 border border-white/5 flex flex-col justify-between reveal reveal-delay-300 hover:bg-neutral-800/60 transition-colors">
<div className="flex justify-between items-start">
<iconify-icon className="text-white" height="32" icon="solar:wi-fi-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs text-neutral-500 font-sans">Free</span>
</div>
<div>
<h4 className="text-lg font-medium mt-4 font-sans">
                High-Speed WiFi
              </h4>
<p className="text-xs text-neutral-400 mt-1 font-sans">
                Perfect for remote work.
              </p>
</div>
</div>

<div className="md:col-span-2 bg-neutral-800/40 rounded-[2rem] p-8 border border-white/5 flex flex-col justify-between reveal reveal-delay-300 hover:bg-neutral-800/60 transition-colors">
<div className="flex justify-between items-start">
<iconify-icon className="text-white" height="32" icon="solar:wheelchair-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs text-neutral-500 font-sans">100%</span>
</div>
<div>
<h4 className="text-lg font-medium mt-4 font-sans">Accessible</h4>
<p className="text-xs text-neutral-400 mt-1 font-sans">
                Ramps and facilities.
              </p>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50 w-full relative overflow-hidden px-8 md:px-20 py-24 md:py-32">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-10 relative gap-x-6 gap-y-6">

<div className="bg-white rounded-[2rem] p-10 border border-neutral-200/60 shadow-sm flex flex-col justify-between h-full min-h-[320px] reveal hover:shadow-md transition-shadow">
<div className="">
<div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-8 text-neutral-800">
<iconify-icon className="" height="24" icon="solar:globus-outline" strokeWidth="1.5" style={{color: 'rgb(38, 38, 38)'}} width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-neutral-900 mb-3 tracking-tight font-bricolage font-semibold">
                Visit Us
              </h3>
<p className="leading-relaxed text-lg text-neutral-500 font-sans max-w-xs">Fenil's-Cafe n Restaurant, <br/> punagam, <br/> surat</p>
</div>
<div className="mt-8 pt-8 border-t border-neutral-100">
<div className="flex gap-2 uppercase text-xs font-medium text-neutral-500 tracking-wide font-sans gap-x-2 gap-y-2 items-center">Valet Parking not Available</div>
</div>
</div>

<div className="bg-neutral-900 text-white rounded-[2rem] p-10 border border-neutral-800 shadow-2xl flex flex-col justify-between h-full min-h-[320px] relative overflow-hidden reveal reveal-delay-200">

<div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-bl-full blur-2xl pointer-events-none"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-8 backdrop-blur-md border border-white/10">
<iconify-icon height="24" icon="solar:history-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl mb-2 tracking-tight font-bricolage font-semibold">
                Opening Hours
              </h3>
<p className="text-white/50 text-xs mb-8 font-sans">
                *Kitchen closes 30m before closing
              </p>
<div className="space-y-4 font-geist text-sm">
<div className="flex justify-between items-center border-b border-white/5 pb-3">
<span className="text-white/70 font-sans">Mon - Thu</span>
<span className="text-white font-medium font-sans">8:00 AM - 9:00 PM</span>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-3">
<span className="text-white/70 font-sans">Fri - Sat</span>
<span className="text-white font-medium font-sans">8:00 AM - 11:00 PM</span>
</div>
<div className="flex border-white/5 border-b pb-3 items-center justify-between">
<span className="text-white/70 font-sans">Sunday</span>
<span className="text-white font-medium font-sans">9:00 AM - 9:00 PM</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-20 md:py-32 bg-white w-full border-neutral-100 border-t pt-24 pr-8 pb-24 pl-8">
<div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden reveal shadow-2xl">

<div className="opacity-10 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}>

</div>
<div className="relative z-10 max-w-3xl mx-auto">
<h2 className="text-4xl md:text-6xl text-white mb-6 tracking-tight font-bricolage font-semibold">
              Craving something sweet?
            </h2>
<p className="text-lg font-light text-neutral-400 font-sans mb-12">
              Book a table for the weekend or order our signature Modak boxes
              for your next event.
            </p>
<div className="flex flex-col md:flex-row gap-x-3 gap-y-3 items-center justify-center">
<button className="md:w-auto hover:bg-neutral-200 transition flex gap-3 font-semibold text-black font-sans bg-white w-full rounded-full pt-4 pr-8 pb-4 pl-8 gap-x-3 gap-y-3 items-center justify-center">+91 9016220856</button>
<button className="md:w-auto hover:bg-green-700 transition flex shadow-green-900/30 font-semibold text-white font-sans bg-green-600 w-full border-green-500/50 border rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg gap-x-3 gap-y-3 items-center justify-center">
<iconify-icon className="" height="20" icon="solar:chat-round-dots-linear" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
                WhatsApp Us
              </button>
</div>
</div>

<div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-6 text-neutral-500 text-xs font-geist uppercase tracking-widest">
<span className="text-neutral-600 font-sans">Secure Payment Options</span>
<div className="flex gap-6 text-neutral-400">
<iconify-icon height="20" icon="solar:card-linear" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:wallet-money-linear" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:smartphone-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400 font-geist">
<p className="font-sans">© 2024 Fenil's-Cafe n Restaurant. All rights reserved.</p>
<div className="flex gap-6 gap-x-6 gap-y-6">
<a className="hover:text-neutral-900 transition-colors font-sans translate-y-1" href="#">
              Privacy
            </a>
<a className="hover:text-neutral-900 transition-colors font-sans translate-y-1" href="#">
              Terms
            </a><a className="hover:text-neutral-900 transition-colors -translate-y-4 font-sans translate-y-1" href="https://www.instagram.com/sarthu___.07?igsh=ZzljZjdweDBueDVk">
              Instagram
            </a>
</div>
</div>
</section>
</div>


    </>
  );
}
