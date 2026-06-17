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
      
  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

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
      <div className="aura-background-component top-0 w-full -z-10 absolute h-[880px]"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="qF3qXhdiOxdUeQYH8wCK"></div>
</div>
<header className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

<nav className="mt-6 flex items-center justify-between">
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center bg-emerald-500 rounded-full">
<svg className="lucide lucide-droplet w-[16px] h-[16px]" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-5-7-13-7-13S5 10 5 15a7 7 0 0 0 7 7z"></path></svg>
</span>
<span className="text-base font-medium tracking-tighter font-quicksand" style={{}}>Veyra Skin</span>
</a>
<div className="hidden gap-1 md:flex bg-white/5 border-white/10 border rounded-xl pt-1 pr-1 pb-1 pl-1 backdrop-blur items-center">
<a className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-quicksand" href="#" style={{}}>About</a>
<a className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-quicksand" href="#" style={{}}>Ingredients</a>
<a className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-quicksand" href="#" style={{}}>Shop</a>
<button className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-quicksand" style={{}}>
              Rituals
              <svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<a className="inline-flex items-center gap-2 text-sm font-medium text-black bg-emerald-500 rounded-lg ml-2 pt-2 pr-3 pb-2 pl-3 font-quicksand" href="#" style={{}}>
              Shop now
            </a>
</div>
<a className="md:hidden inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium backdrop-blur font-quicksand" href="#" style={{}}>
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
            Menu
          </a>
</nav>

<section className="relative z-10 max-w-4xl sm:pt-20 md:pt-28 text-center mr-auto ml-auto pt-14 pb-12">

<div className="mb-6 flex items-center justify-center gap-4">
<div className="flex -space-x-3">
<img alt="Customer 1" className="h-9 w-9 rounded-full ring-2 ring-black/60 object-cover" src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&amp;fit=crop&amp;w=320&amp;q=80" style={{}}/>
<img alt="Customer 2" className="h-9 w-9 rounded-full ring-2 ring-black/60 object-cover" src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&amp;fit=crop&amp;w=320&amp;q=80" style={{}}/>
<img alt="Customer 3" className="h-9 w-9 rounded-full ring-2 ring-black/60 object-cover" src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&amp;fit=crop&amp;w=320&amp;q=80"/>
<img alt="Customer 4" className="h-9 w-9 rounded-full ring-2 ring-black/60 object-cover" src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&amp;fit=crop&amp;w=320&amp;q=80" style={{}}/>
<img alt="Customer 5" className="h-9 w-9 rounded-full ring-2 ring-black/60 object-cover" src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&amp;fit=crop&amp;w=320&amp;q=80" style={{}}/>
</div>
<div className="flex flex-col items-start">
<div className="flex items-center">
<svg className="lucide lucide-star h-4 w-4 fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="mt-1 text-xs font-medium text-white/70 font-quicksand" style={{}}>140k happy customers</p>
</div>
</div>
<h1 className="max-w-5xl sm:text-5xl md:text-7xl text-4xl tracking-tighter mr-auto ml-auto font-playfair" style={{}}>
            Ready to
            <span className="italic text-white tracking-tight font-playfair" style={{fontFamily: '"Playfair Display", serif'}}>elevate</span>
            your glow with clinically proven care?
          </h1>
<p className="max-w-2xl sm:text-lg text-base font-normal text-white/70 mt-6 mr-auto ml-auto font-quicksand" style={{}}>
            We craft dermatologist-formulated routines for healthy, radiant skin. If clean, effective results are your goal, you’re in the right place.
          </p>
<div className="flex flex-col gap-3 sm:flex-row mt-8 items-center justify-center">
<a className="inline-flex items-center gap-2 shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] text-base font-medium text-black bg-emerald-500 rounded-xl pt-3 pr-6 pb-3 pl-6 font-quicksand" href="#" style={{}}>Shop the collection</a>
<a className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white/90 backdrop-blur hover:bg-white/10 font-quicksand" href="#" style={{}}>
              Explore ingredients
            </a>
</div>

</section>
</div>
</header>


<section className="relative overflow-hidden">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="grid items-center gap-10 md:grid-cols-2">
<div className="">
<h2 className="sm:text-4xl md:text-5xl text-3xl tracking-tighter font-playfair" style={{}}>Skincare that cares, formulas that work.</h2>
<p className="text-base text-white/70 font-quicksand mt-4" style={{}}>Gentle botanicals meet clinically proven actives. Transparent ingredients, careful testing, and routines designed for real, visible results.</p>
<div className="mt-6 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white/10 font-quicksand" href="#" style={{}}>
<svg className="lucide lucide-file-text h-4 w-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                See skin stories
              </a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-black bg-emerald-500 rounded-lg pt-2 pr-4 pb-2 pl-4 font-quicksand" href="#" style={{}}>
                Take the skin quiz
              </a>
</div>
</div>
<div className="relative">
<img alt="Skincare flatlay" className="aspect-[4/3] w-full object-cover border-white/10 border rounded-2xl" src="https://images.unsplash.com/photo-1581182800629-7d90925ad072?w=1600&amp;q=80" style={{}}/>
<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
</div>
</div>
</div>
</section><section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pr-4 pb-20 pl-4">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div className="">
<p className="text-sm font-medium text-white/50 font-quicksand" style={{}}>What you get</p>
<h2 className="sm:text-4xl md:text-5xl text-3xl font-normal tracking-tighter font-playfair" style={{}}>Formulas built for healthy skin</h2>
<p className="mt-3 text-base text-white/70 font-quicksand" style={{}}>From personalized routines to transparent ingredients, everything is designed to help you build a ritual that delivers results.</p>
</div>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:col-span-2 md:row-span-2">
<div className="relative">
<img alt="Skincare ritual" className="aspect-video w-full object-cover" src="https://images.unsplash.com/photo-1581182830442-e8bc7babbf15?w=1600&amp;q=80"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
</div>
<div className="p-5 sm:p-6">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-300 font-quicksand" style={{}}>NEW</span>
<span className="text-xs text-white/60 font-quicksand" style={{}}>Dermatologist‑approved</span>
</div>
<h3 className="mt-3 text-2xl sm:text-3xl font-medium tracking-tight font-playfair" style={{}}>Build your ritual, not guesses</h3>
<p className="mt-2 text-sm sm:text-base text-white/70 font-quicksand" style={{}}>Tell us your skin goals; we’ll recommend a clean, effective routine backed by clinical testing. Gentle, results-driven, and easy to follow.</p>
<div className="mt-5 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10 font-quicksand" href="#" style={{}}>
<svg className="lucide lucide-file-text h-4 w-4" data-lucide="file-text" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
            See routine guides
          </a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-black bg-emerald-500 rounded-lg px-4 py-2 font-quicksand" href="#" style={{}}>
<svg className="lucide lucide-wand-2 h-4 w-4" data-lucide="wand-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 4V2"></path><path d="M15 16v-2"></path><path d="M8 9h2"></path><path d="M20 9h2"></path><path d="M17.8 11.8 19 13"></path><path d="M15 9a3 3 0 0 0-6 0c0 1.657 3 7 3 7s3-5.343 3-7"></path><path d="M2 20l7-7"></path><path d="M3.5 15.5 2 14"></path><path d="M14 2h1"></path></svg>
            Start skin quiz
          </a>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<div className="p-5 sm:p-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight flex items-center gap-2 font-quicksand" style={{}}>
            Personalized routines
          </h3>
<span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-300 font-quicksand" style={{}}>NEW</span>
</div>
<p className="mt-2 text-sm text-white/70 font-quicksand" style={{}}>Answer a few questions and get a routine tailored to your skin type, concerns, and lifestyle—no guesswork.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Routine builder UI" className="aspect-video w-full object-cover" src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<div className="p-5 sm:p-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight flex items-center gap-2 font-quicksand" style={{}}>
            Worry‑free ingredients
          </h3>
<span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-300 font-quicksand" style={{}}>NEW</span>
</div>
<p className="mt-2 text-sm text-white/70 font-quicksand" style={{}}>Clean, vegan, cruelty‑free, and fragrance‑free options. Full transparency—no harsh shortcuts.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Ingredient icons" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2160e854-ebc4-4f49-bbd8-be04913ec405_800w.jpg"/>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<div className="p-5 sm:p-6">
<h3 className="text-lg font-medium tracking-tight flex items-center gap-2 font-quicksand" style={{}}>
          Fast, free shipping
          <span className="ml-2 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-300 font-quicksand" style={{}}>NEW</span>
</h3>
<p className="mt-2 text-sm text-white/70 font-quicksand" style={{}}>Most orders ship in 48–72 hours without compromising freshness.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Shipping dashboard" className="aspect-video w-full object-cover" src="https://images.unsplash.com/photo-1633423411797-9a7317784d2b?w=800&amp;q=80"/>
</div>
</div>
</div>

<div className="relative overflow-hidden bg-white/5 border-white/10 border rounded-2xl">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-medium tracking-tight flex items-center gap-2 font-quicksand" style={{}}>
          Visible results in days
        </h3>
<p className="mt-2 text-sm text-white/70 font-quicksand" style={{}}>Hydration and glow you can feel in a week—full transformation with consistent use.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Before and after" className="aspect-video w-full object-cover" src="https://images.unsplash.com/photo-1599817878414-43ef36677cf0?w=800&amp;q=80"/>
</div>
</div>
</div>
<div className="relative overflow-hidden bg-white/5 border-white/10 border rounded-2xl">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-medium tracking-tight flex items-center gap-2 font-quicksand" style={{}}>
          Sustainable packaging
        </h3>
<p className="mt-2 text-sm text-white/70 font-quicksand" style={{}}>Recyclable materials and refill systems built to reduce waste.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Eco packaging" className="aspect-video w-full object-cover" src="https://images.unsplash.com/photo-1740842028123-56fd319de33a?w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</section><section className="relative overflow-hidden">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">

<div className="max-w-4xl mx-auto text-center">
<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur font-quicksand" style={{}}>Customer Love</span>
<h2 className="sm:text-4xl md:text-5xl text-3xl tracking-tighter mt-4 font-playfair" style={{}}>What our customers say about their skin.</h2>
<p className="mt-4 text-base text-white/70 font-quicksand" style={{}}>Real routines, real results. See how FluxSkin helped people achieve healthier, brighter skin.</p>

<div className="mt-8">
<a className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white/90 backdrop-blur hover:bg-white/10 font-quicksand" href="#" style={{}}>
        View all skin stories
      </a>
</div>
</div>

<div className="mt-10 relative">

<div className="overflow-hidden">
<div className="flex transition-transform duration-500 ease-out" id="testimonialCarousel" style={{transform: 'translateX(0%)'}}>

<div className="w-full flex-shrink-0">
<div className="grid gap-6 md:grid-cols-3">

<div className="relative overflow-hidden sm:p-6 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-xl"><div className="flex items-center gap-3">
<img alt="Jessica avatar" className="h-9 w-9 ring-2 ring-black/60 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/44a363ff-a90a-4404-9439-cd5fb9f91c5d_320w.jpg"/>
</div><div className="mt-3 flex items-center gap-1 text-white">
<svg className="lucide lucide-star fill-white w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></div><p className="sm:text-base text-sm text-white/80 mt-3 font-quicksand" style={{}}>"Within two weeks my texture was smoother and the dullness was gone. Gentle, effective, and my skin finally is radiant."</p><div className="mt-5 pt-3 border-t border-white/10">
<p className="text-sm font-semibold tracking-tight font-quicksand" style={{}}>Maria M. • Verified Buyer</p>
<p className="text-xs text-white/60 mt-1 font-quicksand" style={{}}>Radiance Renewal Trio</p>
</div></div>

<div className="relative overflow-hidden sm:p-6 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-xl">
<div className="flex items-center gap-3">
<img alt="Marcus avatar" className="h-9 w-9 ring-2 ring-black/60 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71fe71cd-cd57-472e-82c9-53d663c51c9b_320w.jpg"/>
</div>
<div className="flex gap-1 text-white mt-3 items-center">
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-white w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="sm:text-base text-sm text-white/80 mt-3 font-quicksand" style={{}}>"My skin barrier feels repaired. No irritation, just steady improvement and long‑lasting hydration. It makes a huge difference."</p>
<div className="mt-5 pt-3 border-t border-white/10">
<p className="text-sm font-semibold tracking-tight font-quicksand" style={{}}>Marcus R. • Verified Buyer</p>
<p className="text-xs text-white/60 mt-1 font-quicksand" style={{}}>Barrier Repair Duo</p>
</div>
</div>

<div className="relative overflow-hidden sm:p-6 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-xl"><div className="flex items-center gap-3">
<img alt="Jessica avatar" className="h-9 w-9 ring-2 ring-black/60 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ae65266e-7508-4549-a134-cec94e06768b_320w.jpg"/>
</div>
<div className="flex gap-1 text-white mt-3 items-center">
<svg className="lucide lucide-star h-4 w-4 fill-white" data-icon-replaced="true" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-white w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-white w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-white w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="mt-3 text-sm sm:text-base text-white/80 font-ge font-quicksand" style={{}}>"Within two weeks my skin felt calmer and brighter. The serum absorbs fast, no pilling, and my makeup sits so much."</p>
<div className="mt-5 pt-3 border-t border-white/10">
<p className="text-sm font-semibold tracking-tight font-quicksand" style={{}}>Jessica M. • Verified Buyer</p>
<p className="text-xs text-white/60 mt-1 font-quicksand" style={{}}>Radiance Renewal Serum</p>
</div></div></div></div></div></div></div></div></section>
    </>
  );
}
