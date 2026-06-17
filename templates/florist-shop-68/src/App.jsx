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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
zinc: {
850: '#202022',
}
},
letterSpacing: {
tightest: '-0.05em',
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Reveal Animation
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1 
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-active');
                        observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal-wrapper');
            revealElements.forEach(el => observer.observe(el));
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
      

<div className="bg-zinc-900 text-white text-xs py-2.5 text-center tracking-wide font-medium relative z-50">
        Same-day delivery in N10 &amp; surrounding areas for orders before 2 PM.
    </div>

<nav className="fixed z-40 transition-all duration-300 bg-white/80 w-full border-zinc-100 border-b top-9 backdrop-blur-md">
<div className="flex max-w-screen-xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">

<a className="text-lg md:text-xl font-sans tracking-tightest font-semibold text-zinc-900 uppercase" href="#">
                The Flower Seller
            </a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#services">Services</a>
<a className="hover:text-zinc-900 transition-colors" href="#shop">Plants</a>
<a className="hover:text-zinc-900 transition-colors" href="#about">About</a>
<a className="hover:text-zinc-900 transition-colors" href="#contact">Visit Us</a>
</div>

<button className="md:hidden text-zinc-800 pt-1">
<svg aria-hidden="true" className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<header className="relative w-full h-[90vh] min-h-[650px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0">
<img alt="The Flower Seller Storefront" className="w-full h-full object-cover grayscale-[10%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7a34be12-72aa-4bce-b260-01d859a25153_3840w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="z-10 reveal-wrapper reveal-active text-center w-full max-w-screen-xl mr-auto ml-auto pt-20 pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                Open today until 6:00 PM
            </div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-5xl font-medium text-white tracking-tight font-serif mb-6 drop-shadow-sm">
                The heart of<br/>Muswell Hill.
            </h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-zinc-200 max-w-lg mr-auto mb-10 ml-auto drop-shadow-sm">
                Your local independent florist. Providing fresh, seasonal blooms and lush plants to the N10 community since 1996.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="hover:bg-zinc-100 transition-all duration-300 min-w-[160px] text-sm font-semibold text-zinc-900 tracking-wide bg-white rounded-md pt-3.5 pr-8 pb-3.5 pl-8" href="#contact">
                    Visit the Shop
                </a>
<a className="hover:bg-white/20 transition-all duration-300 min-w-[160px] text-sm font-semibold text-white tracking-wide bg-white/10 border-white/20 border rounded-md pt-3.5 pr-8 pb-3.5 pl-8 backdrop-blur-md" href="#shop">
                    Order Delivery
                </a>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-6 h-6" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</header>

<section className="bg-white border-zinc-100 border-b pt-20 pb-20">
<div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="flex flex-col items-start gap-4 reveal-wrapper">
<div className="p-3 bg-zinc-50 rounded-lg border border-zinc-100 text-zinc-900">
<svg aria-hidden="true" className="lucide lucide-store w-6 h-6" data-lucide="store" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></svg>
</div>
<div className="">
<h3 className="font-semibold text-zinc-900 mb-2">Local &amp; Independent</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">Located at 1 Fortis Green Rd, we are a trusted, family-run part of the N10 neighborhood.</p>
</div>
</div>
<div className="flex flex-col items-start gap-4 reveal-wrapper delay-100">
<div className="p-3 bg-zinc-50 rounded-lg border border-zinc-100 text-zinc-900">
<svg aria-hidden="true" className="lucide lucide-leaf w-6 h-6" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<div className="">
<h3 className="font-semibold text-zinc-900 mb-2">Seasonal &amp; Eco-friendly</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">We prioritize seasonal stems from local growers and use sustainable, eco-friendly wrapping.</p>
</div>
</div>
<div className="flex flex-col items-start gap-4 reveal-wrapper delay-200">
<div className="p-3 bg-zinc-50 rounded-lg border border-zinc-100 text-zinc-900">
<svg aria-hidden="true" className="lucide lucide-package w-6 h-6" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
<div className="">
<h3 className="font-semibold text-zinc-900 mb-2">Same-Day Delivery</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">Order by 2 PM for reliable delivery to Muswell Hill and surrounding North London postcodes.</p>
</div>
</div>
</div>
</section>

<section className="md:py-32 pt-24 pb-24" id="services">
<div className="max-w-screen-xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-16 max-w-2xl reveal-wrapper">
<h2 className="text-3xl md:text-4xl font-serif text-zinc-900 tracking-tight mb-4">Curated Floral Services</h2>
<p className="text-zinc-500 font-normal text-lg">From daily gestures of affection to life’s most significant moments.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group reveal-wrapper delay-0 cursor-pointer">
<div className="aspect-[3/4] overflow-hidden rounded-sm mb-5 bg-zinc-100 relative">
<img alt="Hand-tied bouquet" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/714c83dd-ac5b-4580-b889-0d2b313134c0_800w.jpg"/>
</div>
<h3 className="text-lg font-serif font-medium text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors">Hand-Tied Bouquets</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">Bespoke arrangements for birthdays, anniversaries, or "just because".</p>
</div>

<div className="group reveal-wrapper delay-100 cursor-pointer">
<div className="aspect-[3/4] overflow-hidden rounded-sm mb-5 bg-zinc-100 relative">
<img alt="Indoor Plants" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d6a44622-55ee-4662-979c-c1e5c34a2260_800w.jpg"/>
</div>
<h3 className="text-lg font-serif font-medium text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors">Plant Shop</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">A curated selection of lush indoor house plants and decorative pots.</p>
</div>

<div className="group reveal-wrapper delay-200 cursor-pointer">
<div className="aspect-[3/4] overflow-hidden rounded-sm mb-5 bg-zinc-100 relative">
<img alt="Wedding Flowers" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fb810756-5f16-4461-ba18-4be0fc56eade_800w.jpg"/>
</div>
<h3 className="text-lg font-serif font-medium text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors">Events &amp; Weddings</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">Custom floral designs tailored to your venue and vision.</p>
</div>

<div className="group reveal-wrapper delay-300 cursor-pointer">
<div className="aspect-[3/4] overflow-hidden rounded-sm mb-5 bg-zinc-100 relative">
<img alt="Sympathy Tributes" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/18ec912b-5f38-4835-8d18-b610da319825_800w.jpg"/>
</div>
<h3 className="text-lg font-serif font-medium text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors">Sympathy Tributes</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">Sensitive, beautiful designs for funerals and tributes.</p>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 pt-24 pb-24">
<div className="max-w-screen-xl mx-auto px-6">
<h2 className="text-3xl font-serif text-zinc-900 tracking-tight mb-16 text-center reveal-wrapper">Loved by Locals</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-10 rounded-sm border border-zinc-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] reveal-wrapper delay-0">
<div className="flex text-zinc-900 mb-6 gap-1">
<svg aria-hidden="true" className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed font-normal text-zinc-600 mb-8">"Good prices, beautiful selection of fresh flowers and great service!"</p>
<p className="uppercase text-xs font-semibold text-zinc-900 tracking-wider opacity-60">— Martine Coppens.</p>
</div>

<div className="bg-white p-10 rounded-sm border border-zinc-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] reveal-wrapper delay-100">
<div className="flex text-zinc-900 mb-6 gap-1">
<svg aria-hidden="true" className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed font-normal text-zinc-600 mb-8">"High quality flowers, wonderful arrangements, professional staff."</p>
<p className="uppercase text-xs font-semibold text-zinc-900 tracking-wider opacity-60">— Helen Coulshed</p>
</div>

<div className="bg-white p-10 rounded-sm border border-zinc-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] reveal-wrapper delay-200">
<div className="flex text-zinc-900 mb-6 gap-1">
<svg aria-hidden="true" className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed font-normal text-zinc-600 mb-8">"Probably The most underrated shop in Musswill Hill.  Top notch flowers, lovely staff and overall a great place to be. I keep returning to this shop again and again because you just can't match their quality."</p>
<p className="uppercase text-xs font-semibold text-zinc-900 tracking-wider opacity-60">— Lachlan Clark</p>
</div>
</div>
</div>
</section>

<section className="border-zinc-200 border-t pt-24 pb-24" id="contact">
<div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
<div className="space-y-12 reveal-wrapper">
<div className="">
<h2 className="text-3xl md:text-4xl font-serif text-zinc-900 tracking-tight mb-4">Visit Our Shop</h2>
<p className="text-zinc-500 font-normal">We are located near the Broadway in the heart of Muswell Hill.</p>
</div>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1 text-zinc-400">
<svg aria-hidden="true" className="lucide lucide-map-pin w-5 h-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="space-y-1">
<h4 className="font-semibold text-zinc-900">Address</h4>
<p className="text-sm text-zinc-500 font-normal">
                                1 Fortis Green Rd,<br/>
                                Muswell Hill,<br/>
                                London N10 3HP
                            </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-zinc-400">
<svg aria-hidden="true" className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div className="space-y-1">
<h4 className="font-semibold text-zinc-900">Contact</h4>
<p className="text-sm font-normal text-zinc-500">02083652473<br/> hello@flowerseller.co.uk</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-zinc-400">
<svg aria-hidden="true" className="lucide lucide-clock w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle className="" cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="space-y-1">
<h4 className="font-semibold text-zinc-900">Opening Hours</h4>
<p className="text-sm font-normal text-zinc-500">Tue – Sat: 09:00 – 17:30<br/> Sun: 10:00 - 15:30 Mon: 10:00 - 16:00</p>
</div>
</div>
</div>

<div className="w-full h-56 bg-zinc-100 rounded-sm relative overflow-hidden group border border-zinc-200">
<iframe allowfullscreen="" className="w-full h-full grayscale opacity-70 hover:opacity-100 transition-opacity duration-700" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.5447604509825!2d-0.1449859234151759!3d51.5906110056346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761bdc70624f1b%3A0x994808381283733!2sMuswell%20Hill%2C%20London%20N10!5e0!3m2!1sen!2suk!4v1716383672000!5m2!1sen!2suk" style={{border: '0'}}></iframe>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span className="bg-white/90 backdrop-blur-sm px-5 py-2.5 text-xs font-semibold text-zinc-900 rounded-full shadow-sm">View on Map</span>
</div>
</div>
</div>

<div className="md:p-12 reveal-wrapper delay-200 bg-zinc-50 border-zinc-100 border rounded-sm pt-8 pr-8 pb-8 pl-8">
<h3 className="text-xl font-serif text-zinc-900 mb-8">Send an Inquiry</h3>

<form action="mailto:hello@flowerseller.co.uk" className="space-y-6" enctype="text/plain" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1.5">
<label className="text-xs font-semibold uppercase text-zinc-500 tracking-wider">Name</label>
<input className="w-full bg-white border border-zinc-200 rounded-sm py-2.5 px-3 text-sm text-zinc-900 focus:outline-none focus:border-zinc-400 focus:ring-0 transition-colors custom-input" name="name" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold uppercase text-zinc-500 tracking-wider">Phone</label>
<input className="w-full bg-white border border-zinc-200 rounded-sm py-2.5 px-3 text-sm text-zinc-900 focus:outline-none focus:border-zinc-400 focus:ring-0 transition-colors custom-input" name="phone" required="" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold uppercase text-zinc-500 tracking-wider">Inquiry Type</label>
<div className="relative">
<select className="focus:outline-none focus:border-zinc-400 focus:ring-0 transition-colors appearance-none custom-input text-sm text-zinc-900 bg-white w-full border-zinc-200 border rounded-sm pt-2.5 pr-3 pb-2.5 pl-3" name="inquiry_type">
<option>General Inquiry</option>
<option>Wedding Consultation</option>
<option>Delivery Order</option>
<option>Sympathy Tribute</option>
</select>
<div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold uppercase text-zinc-500 tracking-wider">Message</label>
<textarea className="w-full bg-white border border-zinc-200 rounded-sm py-2.5 px-3 text-sm text-zinc-900 focus:outline-none focus:border-zinc-400 focus:ring-0 transition-colors custom-input" name="message" required="" rows="4"></textarea>
</div>
<button className="w-full bg-zinc-900 text-white py-3.5 rounded-sm text-sm font-semibold tracking-wide hover:bg-zinc-800 transition-colors flex justify-center items-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed" type="submit">
<span id="btn-text">Send Message</span>
<svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" id="btn-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 pt-20 pb-10">
<div className="max-w-screen-xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-1">
<a className="text-lg font-sans tracking-tightest font-semibold text-zinc-900 uppercase block mb-6" href="#">
                        The Flower Seller
                    </a>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">
                        Bringing nature’s beauty to Muswell Hill with passion and expertise.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-6">Shop</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-normal">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Bouquets</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Plants</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Vases &amp; Pots</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Gifts</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-6">Services</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-normal">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Weddings</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Sympathy</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Corporate</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Delivery Area</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-6">Social</h4>
<div className="flex gap-4 text-zinc-400">
<a className="hover:text-zinc-900 transition-colors" href="#">
<svg aria-hidden="true" className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="hover:text-zinc-900 transition-colors" href="#">
<svg aria-hidden="true" className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400 font-normal">
<p>© 2024 The Flower Seller. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-900" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
