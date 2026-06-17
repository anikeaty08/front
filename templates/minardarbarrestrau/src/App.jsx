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
      
<div className="scroll-progress" id="scrollProgress"></div>
<div className="coffee-grains-bg"></div>
<div className="jp-vertical">未来のコーヒーラボ</div>

<canvas className="fixed inset-0 pointer-events-none z-0" id="grainsCanvas"></canvas>
<nav className="nav scrolled" id="nav">
<a className="nav__logo text-xs" href="#">MINAR DARBAR</a>
<div className="nav__links" id="navLinks">
<a className="" href="#menu">Menu</a>
<a className="" href="#capabilities">Specs</a>
<a className="" href="#work">Archives</a>
<a className="" href="#contact">Terminal</a>
</div>
<a className="nav__cta" href="#menu">WELCOME</a>
<button aria-label="Menu" className="nav__toggle" id="navToggle"><span className=""></span><span className=""></span></button>
</nav>

<section className="hero section" id="hero">
<div className="hero__content">
<div className="hero__tag">Future Coffee Lab</div>
<h1 className="hero__title" id="heroTitle">
<span className="hero__char" style={{'--i': '0'}}>MINAR</span><span className="hero__char" style={{'--i': '3'}}></span><span className="hero__char font-merriweather" style={{'--i': '1'}}>DARBAR</span>
</h1>
<p className="hero__sub">
                Engineering flavor profiles that transcend conventional sensory boundaries.
                <span className="jp-text">完璧な抽出プロトコルを起動します。</span>
</p>
<div className="hero__actions">
<a className="hero__btn hero__btn--primary" data-magnetic="" href="#menu">
                    Access Menu
                    <svg className="" data-icon-set="solar" data-solar="arrow-right-linear" height="18" style={{color: 'rgb(4, 4, 5)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</a>
<a className="hero__btn hero__btn--ghost" data-magnetic="" href="#contact">
                    Locate Terminal
                </a>
</div>
</div>
</section>

<section className="menu section" id="menu">
<div className="container">
<div className="ui-cross ui-cross--tl"></div><div className="ui-cross ui-cross--tr"></div>
<div className="section-tag"></div>
<h2 className=""></h2>
<div className="menu__grid">

<div className="menu__col">
<h3 className="menu__cat lg:text-green-300 text-3xl bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/10 to-white/0 rotate-x-10"> SPECIAL DISHES <span className="jp-text">ブラック</span></h3>
<div className="menu__list">

<div className="flex flex-col sm:flex-row sm:items-center gap-4 group -mx-3 transition-all hover:bg-white/5 hover:border-white/5 border-transparent border rounded-xl mt-item mr-item mb-item ml-item pt-3 pr-3 pb-3 pl-3 relative gap-x-4 gap-y-4 items-start">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 border border-white/10 shadow-lg">
<img alt="Neon Genesis Pour" className="transition duration-700 group-hover:grayscale-0 group-hover:scale-110 object-auto w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/933e7936-8630-43ef-93e4-81aac22e2686_800w.jpg"/>
</div>
<div className="flex-grow w-full">
<div className="m-item__header">
<span className="text-base font-extrabold mt-item__name mr-item__name mb-item__name ml-item__name">CHICKEN TIKKA</span>
<span className="m-item__dots"></span>
<span className="mt-item__price mr-item__price mb-item__price ml-item__price">360₹</span>
</div>
<p className="sm:max-w-[85%] text-sm font-serif mt-item__desc mr-item__desc mb-item__desc ml-item__desc">Smoky grilled chicken marinated in rich spices and yogurt. Juicy, tender, and full of bold flavor</p>
</div>
<button className="w-full sm:w-auto mt-3 sm:mt-0 flex-shrink-0 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 hover:text-rose-200 border border-rose-500/30 hover:border-rose-400/50 backdrop-blur-md px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-md transition-all duration-300 flex items-center justify-center gap-2">
                                Order
                                <iconify-icon height="16" icon="solar:cart-linear" width="16"></iconify-icon>
</button>
</div>

<div className="m-item flex flex-col sm:flex-row items-start sm:items-center gap-4 relative group p-3 -mx-3 rounded-xl transition-all hover:bg-white/5 border border-transparent hover:border-white/5">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 border border-white/10 shadow-lg">
<img alt="Dark Matter Drip" className="transition duration-700 group-hover:grayscale-0 group-hover:scale-110 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4285ec2b-d3ee-42e8-8367-802ead52d22a_320w.jpg"/>
</div>
<div className="flex-grow w-full">
<div className="m-item__header">
<span className="text-base font-bold font-montserrat mt-item__name mr-item__name mb-item__name ml-item__name">BUTTER CHICKEN</span>
<span className="m-item__dots"></span>
<span className="m-item__price">400</span>
</div>
<p className="sm:max-w-[85%] text-sm font-serif mt-item__desc mr-item__desc mb-item__desc ml-item__desc">Creamy tomato gravy with tender chicken pieces. Rich, buttery, and full of flavor</p>
</div>
<button className="w-full sm:w-auto mt-3 sm:mt-0 flex-shrink-0 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 hover:text-rose-200 border border-rose-500/30 hover:border-rose-400/50 backdrop-blur-md px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-md transition-all duration-300 flex items-center justify-center gap-2">
                                Order
                                <iconify-icon className="" height="16" icon="solar:cart-linear" width="16"></iconify-icon>
</button>
</div>

<div className="m-item flex flex-col sm:flex-row items-start sm:items-center gap-4 relative group p-3 -mx-3 rounded-xl transition-all hover:bg-white/5 border border-transparent hover:border-white/5">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 border border-white/10 shadow-lg">
<img alt="Akira Red Eye" className="transition duration-700 group-hover:grayscale-0 group-hover:scale-110 text-center w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39de87cb-114a-4927-b274-77aad449fbf8_320w.jpg"/>
</div>
<div className="flex-grow w-full">
<div className="m-item__header">
<span className="text-base font-extrabold mt-item__name mr-item__name mb-item__name ml-item__name">CHICKEN FRY</span>
<span className="m-item__dots"></span>
<span className="mt-item__price mr-item__price mb-item__price ml-item__price">650</span>
</div>
<p className="sm:max-w-[85%] text-sm mx-item__desc my-item__desc">Crispy fried chicken with bold spices. Crunchy outside, juicy inside</p>
</div>
<button className="w-full sm:w-auto mt-3 sm:mt-0 flex-shrink-0 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 hover:text-rose-200 border border-rose-500/30 hover:border-rose-400/50 backdrop-blur-md px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-md transition-all duration-300 flex items-center justify-center gap-2">
                                Order
                                <iconify-icon height="16" icon="solar:cart-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="menu__col">
<h3 className="menu__cat"></h3>
<div className="menu__list">

<div className="flex flex-col sm:flex-row sm:items-center gap-4 group -mx-3 transition-all hover:bg-white/5 hover:border-white/5 border-transparent border rounded-xl mt-item mr-item mb-item ml-item pt-3 pr-3 pb-3 pl-3 relative gap-x-4 gap-y-4 items-start">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 border border-white/10 shadow-lg">
</div>
<div className="flex-grow w-full">
<div className="m-item__header">
<span className="m-item__dots"></span>
<span className="mt-item__price mr-item__price mb-item__price ml-item__price"></span>
</div>
<p className="sm:max-w-[85%] mt-item__desc mr-item__desc mb-item__desc ml-item__desc"></p>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-4 group -mx-3 transition-all hover:bg-white/5 hover:border-white/5 border-transparent border rounded-xl mt-item mr-item mb-item ml-item pt-3 pr-3 pb-3 pl-3 relative gap-x-4 gap-y-4 items-start">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 border border-white/10 shadow-lg">
</div>
<div className="flex-grow w-full">
<div className="m-item__header">
<span className="m-item__dots"></span>
</div>
<p className="sm:max-w-[85%] mt-item__desc mr-item__desc mb-item__desc ml-item__desc"></p>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-4 group -mx-3 transition-all hover:bg-white/5 hover:border-white/5 border-transparent border rounded-xl mt-item mr-item mb-item ml-item pt-3 pr-3 pb-3 pl-3 relative gap-x-4 gap-y-4 items-start">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 border border-white/10 shadow-lg">
</div>
<div className="flex-grow w-full">
<p className="sm:max-w-[85%] mt-item__desc mr-item__desc mb-item__desc ml-item__desc"></p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="capabilities section" id="capabilities">
<div className="container">
<h2 className=""><span className="heading-reveal"><span className="heading-reveal__inner uppercase block text-4xl font-semibold text-white tracking-tight font-display">MENU </span></span></h2>
<div className="cap__grid">
<div className="cap-card" data-scramble="">
<div className="cap-card__num">TYPE-01 <span className="">焙煎</span></div>
<iconify-icon className="cap-card__icon" height="32" icon="solar:arrow-left-down-outline" style={{color: 'rgb(0, 255, 102)'}} width="386"></iconify-icon>
<h3 className="cap-card__title" data-scramble-text="">Thermal Roasting</h3>
<p className="cap-card__desc">Algorithm-driven temperature curves to unlock the precise molecular structure of every micro-lot bean.</p>
</div>
<div className="cap-card" data-scramble="">
<div className="cap-card__num">TYPE-02 <span>抽出</span></div>
<iconify-icon className="cap-card__icon" icon="solar:droplets-linear"></iconify-icon>
<h3 className="cap-card__title" data-scramble-text="">Nitro Infusion</h3>
<p className="cap-card__desc">Cold-steeped concentrates injected with microscopic nitrogen bubbles for an impossible velvet texture.</p>
</div>
</div>
</div>
</section>

<section className="work section" id="work">
<div className="container">
<h2 className=""><span className="heading-reveal"></span></h2>
<div className="work__grid">
<a className="work__item work__item--tall" href="#">
<img alt="Espresso" className="work__img bg-center w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fb595bc6-83da-4bab-a8f3-70d64d61198e_1600w.jpg"/>
</a>
<a className="work__item" href="#">
<img alt="Matcha" className="work__img w-full h-full object-cover bg-center absolute top-0 right-0 bottom-0 left-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e7af6c65-1905-4f04-90ae-d68edc9a5bd1_800w.jpg"/>
</a>
<a className="work__item" href="#" style={{maskImage: 'linear-gradient(280deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(280deg, transparent, black 0%, black 100%, transparent)'}}>
<img alt="Cold Brew" className="work__img object-cover w-full h-full absolute inset-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<article className="overflow-hidden sm:rounded-3xl col-span-2 md:col-span-3 lg:col-span-4 min-h-[220px] sm:min-h-[280px] md:min-h-[500px] flex flex-col bg-zinc-50 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/244a907f-51a9-4860-aa44-db684c8e8dcd_800w.jpg)] max-w-lg bg-cover border-zinc-100 border rounded-2xl pt-5 pr-5 pb-5 pl-5 relative">
<div className="flex items-center justify-between text-zinc-700">
<svg className="lucide lucide-arrow-down w-4 h-4" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg></div></article></a></div></div></section>
    </>
  );
}
