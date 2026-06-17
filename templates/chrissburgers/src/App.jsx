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
sans: ['DM Sans', 'sans-serif'],
display: ['Oswald', 'sans-serif'],
},
colors: {
brand: {
black: '#0f0f0f',
red: '#D01B1B',     /* Vibrant Red from image */
cream: '#F7F4EB',   /* Off-white/Cream from bottom half */
}
},
animation: {
'scroll': 'scroll 15s linear infinite',
'bounce-slow': 'bounce 3s infinite',
},
keyframes: {
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
}
}
}
}
}



      lucide.createIcons();

      // Simple Smooth Scroll
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
              e.preventDefault();
              document.querySelector(this.getAttribute('href')).scrollIntoView({
                  behavior: 'smooth'
              });
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
      

<header className="fixed flex z-50 pt-90 pr-4 pb-90 pl-4 top-4 right-0 left-0 justify-center">
<nav className="flex bg-black w-full max-w-7xl rounded-xl pt-4 pr-6 pb-4 pl-6 shadow-2xl items-center justify-between">
<div className="flex items-center gap-2">
<a className="uppercase text-2xl font-bold text-white tracking-tighter font-display" href="#" style={{}}>
            CHRIS'S
          </a>
</div>
<a className="uppercase hover:bg-brand-red hover:text-white transition-colors text-sm font-bold text-slate-50 font-display bg-red-600 rounded-lg pt-2 pr-5 pb-2 pl-5" href="#menu">
          Menu
        </a>
</nav>
</header>
<main className="sm:pt-32 bg-red-700 pt-28" id="home">

<section className="min-h-[90vh] flex flex-col overflow-hidden text-center bg-red-700 pt-3 pb-3 relative items-center justify-center">

<div className="relative z-10 flex flex-col items-center mb-12">
<span className="font-display font-bold text-white text-lg sm:text-xl tracking-widest uppercase mb-2">
            The
          </span>
<h1 className="text-[6rem] sm:text-[9rem] md:text-[12rem] leading-[0.8] uppercase font-bold text-white tracking-tighter font-display pr-30 pl-30 drop-shadow-xl">
            CHRIS'S BURGERS
          </h1>
<p className="sm:text-lg uppercase text-sm font-medium text-white/90 tracking-widest font-display mt-4" style={{}}>
            STAPLE OF SAM GABRIEL VALLEY
          </p>
</div>

<div className="relative z-10 w-full max-w-2xl mx-auto mb-24 md:mb-12 group">

<div className="relative transition-transform duration-500 hover:scale-105">
<img alt="Burger Joint" className="md:h-[400px] contrast-125 opacity-90 mix-blend-hard-light w-full h-[300px] object-contain drop-shadow-2xl grayscale brightness-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8fa3a97e-9c42-49f7-b243-7228d7117feb_800w.jpg" style={{}}/>
</div>

<div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-20">
<a className="inline-flex items-center gap-2 bg-brand-red text-white border-4 border-white font-display font-bold text-lg uppercase px-8 py-3 rounded-xl hover:bg-white hover:text-brand-red hover:border-brand-red transition-all shadow-xl whitespace-nowrap" href="#locations">
<svg className="lucide lucide-map-pin w-5 h-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
              Find Location
            </a>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full leading-none z-0"></div>
</section>

<div className="overflow-hidden z-10 border-black/5 border-b pt-8 pb-8 relative">
<div className="flex animate-scroll whitespace-nowrap">
<span className="sm:text-6xl text-brand-black uppercase text-4xl font-black tracking-tight font-display pr-8 pl-8" style={{}}>
            QUALITY
          </span>
<span className="sm:text-6xl text-brand-black uppercase text-4xl font-black tracking-tight font-display pr-8 pl-8">
            Get Ready To Crunch
            <span className="text-brand-red px-2">●</span>
</span>
<span className="font-display font-black text-4xl sm:text-6xl text-brand-black uppercase tracking-tight px-8">
            Crave, The Chompo Way
            <span className="text-brand-red px-2">●</span>
</span>
<span className="font-display font-black text-4xl sm:text-6xl text-brand-black uppercase tracking-tight px-8">
            Get Ready To Crunch
            <span className="text-brand-red px-2">●</span>
</span>
<span className="font-display font-black text-4xl sm:text-6xl text-brand-black uppercase tracking-tight px-8">
            Crave, The Chompo Way
            <span className="text-brand-red px-2">●</span>
</span>
<span className="font-display font-black text-4xl sm:text-6xl text-brand-black uppercase tracking-tight px-8">
            Get Ready To Crunch
            <span className="text-brand-red px-2">●</span>
</span>
</div>
</div>

<section className="bg-brand-cream py-20 px-4 md:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-lg border-2 border-transparent hover:border-black transition-all">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6bb34ea1-e777-443f-b8c0-b07306ae87b2_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
</div>

<div className="aspect-square flex flex-col group hover:scale-[1.02] transition-transform text-center rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative shadow-lg items-center justify-center">
<h3 className="md:text-4xl uppercase text-brand-red leading-tight text-3xl font-bold font-display" style={{}}>
                taste the impact
              </h3>
<div className="mt-6 w-12 h-1 bg-brand-red rounded-full group-hover:w-24 transition-all"></div>
</div>

<div className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-lg border-2 border-transparent hover:border-black transition-all">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/da027444-b615-4fae-ae44-ac8c2578f881_800w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
</div>

<div className="relative aspect-square rounded-[2rem] bg-brand-red p-8 flex flex-col justify-center items-center text-center shadow-lg group hover:scale-[1.02] transition-transform">
<div className="absolute top-6 right-6 text-white/20">
<svg className="" fill="none" height="40" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="40">
<path className="" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
</div>
<h3 className="md:text-4xl uppercase leading-tight text-3xl font-bold text-white font-display" style={{}}>
                Enjoy a real peice of california
              </h3>
<a className="inline-flex items-center gap-2 text-brand-red uppercase hover:bg-black hover:text-white transition-colors text-xs font-bold bg-white rounded-full mt-6 pt-2 pr-4 pb-2 pl-4" href="#">
                Order Now
                <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</section>

<section className="bg-brand-black py-20 px-6 border-t border-white/10" id="location">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
<div className="">
<h2 className="uppercase text-4xl font-bold text-white font-display mb-2" style={{}}>
              chris's Burgers
            </h2>
<p className="text-sm text-white/50" style={{}}>
              © 2024 Chris's Burgers. All rights reserved.
            </p>
</div>
<div className="flex gap-6">
<a className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-red transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-red transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-red transition-colors" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
</div>
</div>
</section>
</main>

<section className="min-h-screen bg-brand-cream pt-28 sm:pt-32 px-4 md:px-8" id="menu">
<div className="max-w-7xl mx-auto">
<div className="flex items-start justify-between gap-6">
<div>
<p className="uppercase text-xs sm:text-sm tracking-widest text-black/70 font-display">
              Menu
            </p>
<h2 className="mt-2 uppercase text-4xl sm:text-5xl md:text-6xl leading-[0.9] font-display font-semibold tracking-tight text-brand-black">
              CHRIS'S BURGERS
            </h2>
<p className="mt-4 text-sm sm:text-base text-black/70 max-w-2xl">
              Classic California staples—built fast, served hot. Pick a burger,
              add fries, and make it yours.
            </p>
</div>
<a className="shrink-0 inline-flex items-center gap-2 bg-black text-white font-display font-semibold text-sm uppercase px-5 py-3 rounded-xl hover:bg-brand-red transition-colors shadow-lg" href="#home">
<svg className="lucide lucide-arrow-left w-4 h-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19-7-7 7-7"></path>
<path d="M19 12H5"></path>
</svg>
            Back
          </a>
</div>
<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="rounded-[2rem] border-2 border-black/10 bg-white shadow-lg p-7 hover:border-black transition-colors">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="uppercase font-display font-semibold tracking-tight text-2xl">
                    Classic Burger
                  </h3>
<p className="mt-2 text-sm text-black/70">
                    Two patties, cheese, house sauce, pickles, onion.
                  </p>
</div>
<div className="text-right">
<p className="font-display font-semibold tracking-tight text-2xl">
                    $9
                  </p>
</div>
</div>
<div className="mt-6 flex flex-wrap gap-2">
<span className="uppercase text-[11px] tracking-widest bg-brand-cream border border-black/10 px-3 py-1 rounded-full">
                  Signature
                </span>
<span className="uppercase text-[11px] tracking-widest bg-brand-cream border border-black/10 px-3 py-1 rounded-full">
                  Best Seller
                </span>
</div>
</div>
<div className="rounded-[2rem] border-2 border-black/10 bg-white shadow-lg p-7 hover:border-black transition-colors">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="uppercase font-display font-semibold tracking-tight text-2xl">
                    Crispy Chicken
                  </h3>
<p className="mt-2 text-sm text-black/70">
                    Crispy chicken, slaw, pickles, spicy mayo.
                  </p>
</div>
<div className="text-right">
<p className="font-display font-semibold tracking-tight text-2xl">
                    $10
                  </p>
</div>
</div>
<div className="mt-6 flex flex-wrap gap-2">
<span className="uppercase text-[11px] tracking-widest bg-brand-cream border border-black/10 px-3 py-1 rounded-full">
                  Crunchy
                </span>
</div>
</div>
<div className="rounded-[2rem] border-2 border-black/10 bg-white shadow-lg p-7 hover:border-black transition-colors">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="uppercase font-display font-semibold tracking-tight text-2xl">
                    Fries
                  </h3>
<p className="mt-2 text-sm text-black/70">
                    Golden fries, lightly salted.
                  </p>
</div>
<div className="text-right">
<p className="font-display font-semibold tracking-tight text-2xl">
                    $4
                  </p>
</div>
</div>
<div className="mt-6 flex flex-wrap gap-2">
<span className="uppercase text-[11px] tracking-widest bg-brand-cream border border-black/10 px-3 py-1 rounded-full">
                  Side
                </span>
</div>
</div>
<div className="rounded-[2rem] border-2 border-black/10 bg-white shadow-lg p-7 hover:border-black transition-colors">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="uppercase font-display font-semibold tracking-tight text-2xl">
                    Shake
                  </h3>
<p className="mt-2 text-sm text-black/70">
                    Vanilla, chocolate, or strawberry.
                  </p>
</div>
<div className="text-right">
<p className="font-display font-semibold tracking-tight text-2xl">
                    $5
                  </p>
</div>
</div>
<div className="mt-6 flex flex-wrap gap-2">
<span className="uppercase text-[11px] tracking-widest bg-brand-cream border border-black/10 px-3 py-1 rounded-full">
                  Sweet
                </span>
</div>
</div>
</div>
<div className="rounded-[2rem] bg-brand-red text-white shadow-lg p-8 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<h3 className="uppercase font-display font-semibold tracking-tight text-2xl">
                  Order
                </h3>
<div className="text-white/25">
<svg className="lucide lucide-shopping-bag w-6 h-6" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a4 4 0 0 1-8 0"></path>
<path d="M3 6h18l-1.5 14h-15L3 6Z"></path>
</svg>
</div>
</div>
<p className="mt-3 text-sm text-white/85">
                Ready when you are. Head back to the home page and tap Find
                Location for store info.
              </p>
</div>
<div className="mt-8 flex flex-col gap-3">
<a className="inline-flex items-center justify-center gap-2 bg-white text-brand-red uppercase font-display font-semibold text-sm px-6 py-3 rounded-xl hover:bg-black hover:text-white transition-colors" href="#locations">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
                Find Location
              </a>
<a className="inline-flex items-center justify-center gap-2 bg-black/20 text-white uppercase font-display font-semibold text-sm px-6 py-3 rounded-xl hover:bg-black/30 transition-colors" href="#home">
                Back to Home
              </a>
</div>
</div>
</div>
</div>
</section>
<section className="min-h-screen bg-brand-black pt-28 sm:pt-32 px-6 border-t border-white/10" id="locations">
<div className="max-w-7xl mx-auto">
<div className="flex items-start justify-between gap-6">
<div>
<p className="uppercase text-xs sm:text-sm tracking-widest text-white/60 font-display">
              Find Location
            </p>
<h2 className="mt-2 uppercase text-4xl sm:text-5xl md:text-6xl leading-[0.9] font-display font-semibold tracking-tight text-white">
              VISIT CHRIS'S
            </h2>
<p className="mt-4 text-sm sm:text-base text-white/70 max-w-2xl">
              Stop by for the real thing. Tap back to return to the home page.
            </p>
</div>
<a className="shrink-0 inline-flex items-center gap-2 bg-white/10 text-white font-display font-semibold text-sm uppercase px-5 py-3 rounded-xl hover:bg-brand-red transition-colors shadow-lg" href="#home">
<svg className="lucide lucide-arrow-left w-4 h-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19-7-7 7-7"></path>
<path d="M19 12H5"></path>
</svg>
            Back
          </a>
</div>
<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-[2rem] bg-white/5 border border-white/10 p-8 shadow-lg">
<h3 className="uppercase font-display font-semibold tracking-tight text-2xl text-white">
              Sam Gabriel Valley
            </h3>
<p className="mt-3 text-sm text-white/70">
              123 Main St, San Gabriel, CA
            </p>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="rounded-2xl bg-black/30 border border-white/10 p-6">
<p className="uppercase text-[11px] tracking-widest text-white/60 font-display">
                  Hours
                </p>
<p className="mt-2 text-sm text-white/80">Mon–Sun: 11am–9pm</p>
</div>
<div className="rounded-2xl bg-black/30 border border-white/10 p-6">
<p className="uppercase text-[11px] tracking-widest text-white/60 font-display">
                  Phone
                </p>
<p className="mt-2 text-sm text-white/80">(000) 000-0000</p>
</div>
</div>
<div className="mt-8 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 bg-brand-red text-white uppercase font-display font-semibold text-sm px-6 py-3 rounded-xl hover:bg-white hover:text-brand-red transition-colors" href="#">
<svg className="lucide lucide-navigation w-4 h-4" data-lucide="navigation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m3 11 19-9-9 19-2-8-8-2Z"></path>
</svg>
                Get Directions
              </a>
<a className="inline-flex items-center gap-2 bg-white/10 text-white uppercase font-display font-semibold text-sm px-6 py-3 rounded-xl hover:bg-white/15 transition-colors" href="#home">
                Back to Home
              </a>
</div>
</div>
<div className="rounded-[2rem] bg-brand-red text-white shadow-lg p-8 flex flex-col justify-between">
<div>
<h3 className="uppercase font-display font-semibold tracking-tight text-2xl">
                Quick Links
              </h3>
<p className="mt-3 text-sm text-white/85">
                Jump straight to what you need.
              </p>
</div>
<div className="mt-8 flex flex-col gap-3">
<a className="inline-flex items-center justify-center gap-2 bg-white text-brand-red uppercase font-display font-semibold text-sm px-6 py-3 rounded-xl hover:bg-black hover:text-white transition-colors" href="#menu">
<svg className="lucide lucide-menu w-4 h-4" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16"></path>
<path d="M4 6h16"></path>
<path d="M4 18h16"></path>
</svg>
                View Menu
              </a>
<a className="inline-flex items-center justify-center gap-2 bg-black/20 text-white uppercase font-display font-semibold text-sm px-6 py-3 rounded-xl hover:bg-black/30 transition-colors" href="#home">
                Back to Home
              </a>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
