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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Stop observing once revealed
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach((el) => {
                observer.observe(el);
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
      

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-orange-50/50 rounded-full blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/3"></div>
<div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-stone-100/50 rounded-full blur-[100px] opacity-60 -translate-x-1/3 translate-y-1/3"></div>
</div>

<a className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-stone-900 text-white px-6 py-3.5 rounded-full text-sm font-medium tracking-tight shadow-[0_8px_30px_rgba(0,0,0,0.3)] backdrop-blur-md border border-stone-800 animate-pulse-glow active:scale-95 transition-transform" href="#reservation">
<span>Reserve Table</span>
<iconify-icon className="text-white/80" height="18" icon="solar:calendar-linear" width="18"></iconify-icon>
</a>

<div className="sm:p-5 lg:p-8 max-w-[1600px] mr-auto ml-auto pt-3 pr-3 pb-3 pl-3">

<header className="relative w-full h-[92vh] min-h-[650px] rounded-3xl overflow-hidden bg-stone-900 shadow-2xl reveal active">

<img alt="Cafe Interior and Food" className="absolute inset-0 w-full h-full object-cover opacity-70 scale-105 transform origin-center transition-transform duration-[10s] hover:scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cc54d896-37cc-467a-b91c-8aaee392ee33_3840w.webp"/>

<div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-transparent to-stone-900/80 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent"></div>

<div className="hidden lg:block absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 animate-float shadow-2xl"></div>
<div className="hidden lg:block absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 animate-float shadow-2xl" style={{animationDelay: '-3s'}}></div>

<nav className="relative z-20 flex items-center justify-between px-6 py-6 sm:px-10">

<div className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
<div className="bg-white/10 backdrop-blur-xl p-2.5 rounded-xl border border-white/10 shadow-lg">
<iconify-icon className="text-white" height="22" icon="solar:cup-linear" width="22"></iconify-icon>
</div>
<span className="text-white text-xl font-normal tracking-tight">Estetico.</span>
</div>

<div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
<a className="px-5 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all tracking-tight font-light" href="#about">About</a>
<a className="px-5 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all tracking-tight font-light" href="#menu">Menu</a>
<a className="px-5 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all tracking-tight font-light" href="#gallery">Gallery</a>
<a className="px-5 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all tracking-tight font-light" href="#reservation">Reservations</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/15 transition-all" href="#location">
<iconify-icon height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
</a>
<a className="group flex items-center gap-3 bg-white pl-6 pr-1.5 py-1.5 rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all" href="#reservation">
<span className="text-sm font-normal text-stone-900 tracking-tight">Reserve Table</span>
<span className="w-9 h-9 bg-stone-900 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
<iconify-icon className="text-white" height="18" icon="solar:calendar-linear" width="18"></iconify-icon>
</span>
</a>
</div>
</nav>

<div className="absolute bottom-0 left-0 w-full px-6 py-12 sm:px-12 sm:py-20 z-10 flex flex-col items-center justify-center text-center">
<div className="max-w-4xl mx-auto">
<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal tracking-tighter leading-[1.05] mb-8 reveal delay-200" style={{textShadow: '0 10px 30px rgba(0,0,0,0.5)'}}>
                        Fresh Food,<br/><span className="text-white/80">Warm Moments.</span>
</h1>
<p className="text-base sm:text-lg text-white/70 font-light leading-relaxed mb-12 max-w-xl mx-auto tracking-tight reveal delay-300">
                        A place to enjoy great food and good company. Experience culinary craftsmanship in a serene, modern atmosphere.
                    </p>
<a className="group inline-flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white pl-8 pr-2 py-2 rounded-full hover:bg-white hover:text-stone-900 transition-all duration-500 reveal delay-500" href="#menu">
<span className="text-sm font-medium tracking-tight">Explore Menu</span>
<span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-stone-100 transition-colors duration-500">
<iconify-icon className="text-white group-hover:text-stone-900" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</a>
</div>
</div>
</header>

<section className="mt-24 sm:mt-32 px-4 sm:px-6 max-w-7xl mx-auto reveal" id="about">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="order-2 lg:order-1 relative group perspective-1000">
<div className="relative h-[450px] sm:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:rotate-y-[-2deg] hover:rotate-x-[2deg]">
<img alt="Coffee Pouring" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6586e163-951e-453e-abaa-5e04803575da_1600w.webp"/>
<div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-700"></div>

<div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 transform translate-y-4 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-500">
<div className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl border border-white/40 shadow-xl inline-flex items-center gap-5">
<div className="w-12 h-12 rounded-xl bg-stone-900 flex items-center justify-center text-white shadow-inner">
<iconify-icon height="24" icon="solar:chef-hat-linear" width="24"></iconify-icon>
</div>
<div>
<span className="text-xs font-normal text-stone-500 uppercase tracking-widest block mb-1">Head Chef</span>
<p className="text-stone-900 font-medium text-sm tracking-tight">Signature Creations</p>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="flex items-center gap-3 text-stone-400 font-medium uppercase text-xs tracking-widest mb-6">
<span className="w-8 h-[1px] bg-stone-300"></span> Our Story
                    </span>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-900 mb-8 leading-tight">
                        Crafting daily delights<br/>with precision.
                    </h2>
<p className="text-stone-500 text-base sm:text-lg leading-relaxed mb-6 font-light tracking-tight">
                        We believe that the best meals are simple, fresh, and shared. Our kitchen prepares handcrafted dishes using locally sourced ingredients, ensuring every bite is a celebration of flavor.
                    </p>
<p className="text-stone-500 text-base sm:text-lg leading-relaxed mb-10 font-light tracking-tight">
                        From our morning artisanal coffee blends to our dinner specialties, we are dedicated to providing a warm, welcoming space.
                    </p>
<div className="flex gap-10 border-t border-stone-200/60 pt-8">
<div>
<span className="block text-3xl font-medium text-stone-900 tracking-tighter mb-1">100%</span>
<span className="text-xs text-stone-500 font-medium uppercase tracking-wider">Organic Coffee</span>
</div>
<div>
<span className="block text-3xl font-medium text-stone-900 tracking-tighter mb-1">Daily</span>
<span className="text-xs text-stone-500 font-medium uppercase tracking-wider">Fresh Bakery</span>
</div>
</div>
</div>
</div>
</section>

<section className="mt-32 px-4 sm:px-6 max-w-7xl mx-auto reveal" id="menu">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 sm:mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-900 mb-4">Menu Highlights</h2>
<p className="text-stone-500 font-light text-base sm:text-lg tracking-tight">Explore our most loved categories, curated for every time of day.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 card-3d-wrapper">

<div className="card-3d group relative bg-white p-3 rounded-[2rem] border border-stone-100 cursor-pointer">
<div className="h-64 rounded-[1.5rem] overflow-hidden mb-5 relative">
<img alt="Signature Dish" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover rounded-[1.5rem]" src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&amp;w=2510&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium tracking-tight shadow-sm">Bestseller</div>
</div>
<div className="px-3 pb-4">
<h3 className="text-xl font-medium text-stone-900 mb-2 tracking-tight">Signature Dishes</h3>
<p className="text-stone-500 text-sm mb-6 font-light leading-relaxed">From Avocado Toast to Truffle Pasta, enjoy our chef's specials.</p>
<div className="flex items-center justify-between pt-4 border-t border-stone-100">
<span className="text-xs font-medium text-stone-400 uppercase tracking-widest">Main Course</span>
<div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
<svg className="" data-icon-set="solar" data-solar="arrow-right-up-linear" height="18" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6m0 0H9m9 0v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
</div>
</div>
</div>

<div className="card-3d group relative bg-white p-3 rounded-[2rem] border border-stone-100 cursor-pointer">
<div className="h-64 rounded-[1.5rem] overflow-hidden mb-5 relative">
<img alt="Coffee" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-3 pb-4">
<h3 className="text-xl font-medium text-stone-900 mb-2 tracking-tight">Coffee &amp; Beverages</h3>
<p className="text-stone-500 text-sm mb-6 font-light leading-relaxed">Single-origin beans, handcrafted matcha, and refreshing mocktails.</p>
<div className="flex items-center justify-between pt-4 border-t border-stone-100">
<span className="text-xs font-medium text-stone-400 uppercase tracking-widest">Drinks</span>
<div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
<svg className="w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="solar" data-solar="arrow-right-up-linear" height="18" strokeWidth="2" style={{width: '18px', height: '18px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6m0 0H9m9 0v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
</div>
</div>
</div>

<div className="card-3d group relative bg-white p-3 rounded-[2rem] border border-stone-100 cursor-pointer">
<div className="h-64 rounded-[1.5rem] overflow-hidden mb-5 relative">
<img alt="Dessert" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5fe49f96-1c36-4800-8d69-bcddec308154_1600w.webp"/>
</div>
<div className="px-3 pb-4">
<h3 className="text-xl font-medium text-stone-900 mb-2 tracking-tight">Desserts</h3>
<p className="text-stone-500 text-sm mb-6 font-light leading-relaxed">Sweet endings made in-house, from cheesecakes to artisanal pastries.</p>
<div className="flex items-center justify-between pt-4 border-t border-stone-100">
<span className="text-xs font-medium text-stone-400 uppercase tracking-widest">Bakery</span>
<div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
<iconify-icon height="18" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-32 bg-stone-900 text-white rounded-[2.5rem] overflow-hidden relative py-24 px-6 sm:px-12 shadow-2xl reveal">

<div className="absolute inset-0 opacity-20">
<img alt="Cafe Texture" className="w-full h-full object-cover scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bbd5f95a-c6f8-4fdc-b784-5bc8291b4621_3840w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/80 to-stone-900/40"></div>
<div className="relative z-10 max-w-4xl mx-auto text-center mb-20">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight mb-6">Experience the difference</h2>
<p className="text-stone-400 text-lg font-light tracking-tight">We don't just serve food; we curate an environment.</p>
</div>
<div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">

<div className="group bg-white/5 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-colors duration-500 card-3d">
<div className="w-16 h-16 rounded-2xl bg-white text-stone-900 flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
<iconify-icon height="30" icon="solar:leaf-linear" width="30"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight text-white/90">Fresh Ingredients</h3>
<p className="text-stone-400 font-light text-sm leading-relaxed">Farm-to-table produce delivered daily to ensure the highest quality taste.</p>
</div>

<div className="group bg-white/5 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-colors duration-500 card-3d">
<div className="w-16 h-16 rounded-2xl bg-white text-stone-900 flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
<iconify-icon height="30" icon="solar:sofa-linear" width="30"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight text-white/90">Cozy Atmosphere</h3>
<p className="text-stone-400 font-light text-sm leading-relaxed">Minimalist design, warm lighting, and comfortable seating for relaxation.</p>
</div>

<div className="group bg-white/5 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-colors duration-500 card-3d">
<div className="w-16 h-16 rounded-2xl bg-white text-stone-900 flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
<iconify-icon height="30" icon="solar:smile-circle-linear" width="30"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight text-white/90">Friendly Service</h3>
<p className="text-stone-400 font-light text-sm leading-relaxed">Our staff treats you like family, ensuring a memorable dining experience.</p>
</div>
</div>
</section>

<section className="mt-32 px-4 sm:px-6 max-w-7xl mx-auto reveal" id="gallery">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-900 mb-12 text-center">A Visual Taste</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px] sm:h-[700px]">
<div className="col-span-2 md:col-span-2 row-span-2 rounded-[2rem] overflow-hidden relative group">
<img alt="Cocktails" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0acbf0ca-a573-48bb-8153-e1d57e4604ce_1600w.webp"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="col-span-1 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden relative group">
<img alt="Coffee Art" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/41a7086c-63e9-428d-975e-179c8863bfd5_800w.webp"/>
</div>
<div className="col-span-1 row-span-2 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden relative group">
<img alt="Interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce305672-6da8-4c81-80b5-c3853afd35d1_800w.jpg"/>
</div>
<div className="col-span-1 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden relative group">
<img alt="Breakfast" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f951c57b-e8fe-4421-8181-b1d3d87f210e_800w.webp"/>
</div>
</div>
</section>

<section className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 reveal">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-white border border-stone-200 rounded-[2.5rem] p-10 sm:p-16 relative overflow-hidden shadow-sm">
<div className="absolute top-0 right-0 w-64 h-64 bg-orange-100/50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4"></div>
<div className="relative z-10">
<div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center mb-8 border border-stone-100 shadow-sm">
<iconify-icon className="text-stone-900" height="28" icon="solar:clock-circle-linear" width="28"></iconify-icon>
</div>
<h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900 mb-10">Opening Hours</h2>
<div className="space-y-6">
<div className="flex items-end justify-between border-b border-stone-100 pb-4">
<span className="text-sm text-stone-500 font-medium uppercase tracking-widest">Mon - Fri</span>
<span className="text-xl font-medium text-stone-900 tracking-tight">07:00 - 22:00</span>
</div>
<div className="flex items-end justify-between border-b border-stone-100 pb-4">
<span className="text-sm text-stone-500 font-medium uppercase tracking-widest">Sat - Sun</span>
<span className="text-xl font-medium text-stone-900 tracking-tight">08:00 - 23:00</span>
</div>
</div>
<p className="mt-10 text-stone-500 font-light text-sm flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-orange-400"></span>
                            Happy Hour daily from 16:00 to 18:00
                        </p>
</div>
</div>

<div className="overflow-hidden lg:h-full group h-[450px] border-stone-200 border rounded-[2.5rem] relative shadow-sm" id="location">
<img alt="Map" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce305672-6da8-4c81-80b5-c3853afd35d1_3840w.jpg"/>
<div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-sm card-3d-wrapper z-10">
<div className="bg-white/95 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl text-center border border-white/50 card-3d">
<div className="w-14 h-14 bg-stone-900 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-inner">
<iconify-icon height="28" icon="solar:map-point-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-stone-900 mb-3 tracking-tight">Find Us</h3>
<p className="text-stone-500 text-sm mb-8 font-light leading-relaxed">123 Culinary Avenue, Downtown District<br/>New York, NY 10012</p>
<a className="inline-flex items-center gap-2 text-xs font-medium text-stone-900 uppercase tracking-widest border-b border-stone-900 pb-1 hover:text-stone-500 hover:border-stone-500 transition-colors" href="#">
                Get Directions
                <iconify-icon height="14" icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="mt-32 mb-20 px-4 sm:px-6 max-w-7xl mx-auto reveal" id="reservation">
<div className="bg-white rounded-[3rem] p-6 sm:p-12 lg:p-20 shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-stone-100 flex flex-col lg:flex-row gap-16 lg:gap-24 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-stone-200 to-transparent"></div>
<div className="lg:w-5/12 z-10">
<span className="text-stone-400 font-medium uppercase text-xs tracking-widest mb-4 block">Secure your spot</span>
<h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 mb-6 leading-tight">Book a Table</h2>
<p className="text-stone-500 text-base sm:text-lg font-light mb-12 leading-relaxed">Reserve your spot in advance for the best experience. We look forward to hosting you in our space.</p>
<div className="space-y-8">
<div className="flex items-center gap-5 group cursor-pointer">
<div className="w-14 h-14 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all duration-300 group-hover:scale-105 shadow-sm">
<iconify-icon height="24" icon="solar:phone-linear" width="24"></iconify-icon>
</div>
<div>
<span className="block text-xs font-medium text-stone-400 uppercase tracking-widest mb-1">Phone</span>
<a className="text-lg font-medium text-stone-900 tracking-tight group-hover:text-stone-600 transition-colors" href="tel:+1234567890">+1 (234) 567-890</a>
</div>
</div>
<div className="flex items-center gap-5 group cursor-pointer">
<div className="w-14 h-14 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all duration-300 group-hover:scale-105 shadow-sm">
<iconify-icon height="24" icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<span className="block text-xs font-medium text-stone-400 uppercase tracking-widest mb-1">Email</span>
<a className="text-lg font-medium text-stone-900 tracking-tight group-hover:text-stone-600 transition-colors" href="mailto:hello@estetico.cafe">hello@estetico.cafe</a>
</div>
</div>
</div>
</div>
<div className="lg:w-7/12 z-10">
<div className="bg-stone-50/50 rounded-[2rem] p-8 sm:p-10 border border-stone-100/80 shadow-inner">
<form action="#" className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-stone-500 uppercase tracking-widest ml-1">Date</label>
<input className="w-full bg-white border border-stone-200 rounded-2xl px-5 py-4 text-sm text-stone-900 focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900 focus:outline-none transition-all shadow-sm" type="date"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-stone-500 uppercase tracking-widest ml-1">Guests</label>
<div className="relative">
<select className="w-full bg-white border border-stone-200 rounded-2xl px-5 py-4 text-sm text-stone-900 appearance-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900 focus:outline-none transition-all shadow-sm cursor-pointer">
<option>2 People</option>
<option>3 People</option>
<option>4 People</option>
<option>5+ People</option>
</select>
<div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
<iconify-icon height="18" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-stone-500 uppercase tracking-widest ml-1">Full Name</label>
<input className="w-full bg-white border border-stone-200 rounded-2xl px-5 py-4 text-sm text-stone-900 placeholder-stone-400 focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900 focus:outline-none transition-all shadow-sm" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-stone-500 uppercase tracking-widest ml-1">Phone Number</label>
<input className="w-full bg-white border border-stone-200 rounded-2xl px-5 py-4 text-sm text-stone-900 placeholder-stone-400 focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900 focus:outline-none transition-all shadow-sm" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<button className="btn-3d w-full bg-stone-900 text-white font-medium text-sm py-4 rounded-2xl mt-4 hover:bg-stone-800 flex items-center justify-center gap-2 group tracking-wide" type="button">
                                Confirm Reservation
                                <iconify-icon className="text-white/80 group-hover:text-white" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 sm:px-10 flex flex-col md:flex-row items-start justify-between border-t border-stone-200 gap-12 max-w-7xl mx-auto">
<div className="space-y-5">
<div className="flex items-center gap-3">
<div className="bg-stone-900 p-2 rounded-xl shadow-md">
<iconify-icon className="text-white" height="20" icon="solar:cup-linear" width="20"></iconify-icon>
</div>
<span className="text-stone-900 text-xl font-normal tracking-tight">Estetico.</span>
</div>
<p className="text-sm text-stone-500 font-light max-w-xs leading-relaxed">Fresh food, warm moments, and unforgettable coffee. Come visit us today.</p>
</div>
<div className="flex flex-wrap sm:flex-nowrap gap-12 sm:gap-20 text-sm">
<div>
<h4 className="font-medium text-stone-900 mb-4 tracking-tight">Explore</h4>
<ul className="space-y-3 text-stone-500 font-light">
<li><a className="hover:text-stone-900 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#menu">Our Menu</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#gallery">Gallery</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4 tracking-tight">Visit</h4>
<ul className="space-y-3 text-stone-500 font-light">
<li><a className="hover:text-stone-900 transition-colors" href="#location">Location</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#reservation">Reservations</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4 tracking-tight">Follow</h4>
<div className="flex gap-3">
<a className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center hover:bg-stone-900 hover:text-white transition-colors text-stone-600" href="#">
<iconify-icon height="20" icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center hover:bg-stone-900 hover:text-white transition-colors text-stone-600" href="#">
<iconify-icon height="20" icon="solar:global-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>
<div className="text-center pb-10 text-xs text-stone-400 font-light tracking-wide">
            © 2024 Estetico Café. All rights reserved.
        </div>
</div>



    </>
  );
}
