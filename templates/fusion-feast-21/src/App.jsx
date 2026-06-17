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



    // Set current year in footer
    document.addEventListener("DOMContentLoaded", function () {
      var y = document.getElementById("yearSpan");
      if (y) y.textContent = new Date().getFullYear();
      if (window.lucide) {
        window.lucide.createIcons();
      }
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
      

<div className="flex-1 flex flex-col">

<button className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber-400 text-neutral-950 text-sm font-semibold tracking-tight shadow-lg shadow-amber-500/40 hover:bg-amber-300 hover:shadow-amber-400/40 border border-amber-300/70 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 transition">
<span>Order Now</span>
<span className="inline-flex items-center justify-center">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 11.917 10.724 17 19 7"></path>
</svg>
</span>
</button>

<header className="sticky top-0 z-30 border-b border-neutral-800/80 bg-neutral-950/85 backdrop-blur">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-amber-400 flex items-center justify-center text-neutral-950 text-xs font-semibold tracking-tight border border-amber-300/80 shadow shadow-amber-400/40">
            FFC
          </div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-neutral-50">Fusion Feast Café</span>
<span className="text-[11px] text-neutral-400 hidden sm:inline">
              Modern plates, traditional soul
            </span>
</div>
</div>

<nav className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-300">
<a className="hover:text-amber-300 transition" href="#hero">Home</a>
<a className="hover:text-amber-300 transition" href="#about">About</a>
<a className="hover:text-amber-300 transition" href="#menu">Menu</a>
<a className="hover:text-amber-300 transition" href="#gallery">Gallery</a>
<a className="hover:text-amber-300 transition" href="#highlights">Highlights</a>
<a className="hover:text-amber-300 transition" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full border border-neutral-700 text-xs font-medium text-neutral-200 hover:border-amber-300/70 hover:text-amber-200 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 transition">
            Book a Table
          </button>
<button className="inline-flex items-center px-3 py-1.5 rounded-full bg-amber-400 text-neutral-950 text-xs font-semibold tracking-tight hover:bg-amber-300 border border-amber-300/70 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 transition">
            View Menu
          </button>
</div>
</div>
</header>

<section className="relative isolate overflow-hidden" id="hero">

<div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&amp;fit=crop&amp;w=1600&amp;q=80')] bg-cover bg-center">
</div>
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-neutral-950/95 to-neutral-950"></div>
<div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-transparent to-black/60"></div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

<div className="w-full lg:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/40 bg-neutral-900/70 backdrop-blur text-[11px] text-amber-200 mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
<span>Now serving in Nani Daman · Wood oven pizza speciality</span>
</div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-50">
            Fusion Feast Café
          </h1>
<p className="mt-3 text-sm sm:text-base text-neutral-200 max-w-xl">
            Modern plates, traditional soul – serving the best of both worlds. Endless sips, bites, and conversations — only at Fusion Feast Café.
          </p>
<div className="mt-6 flex flex-wrap gap-3">
<button className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-amber-400 text-neutral-950 text-xs sm:text-sm font-semibold tracking-tight hover:bg-amber-300 border border-amber-300/70 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 transition">
              View Menu
            </button>
<button className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-neutral-700 text-xs sm:text-sm font-medium text-neutral-50 hover:border-amber-300/70 hover:text-amber-200 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 transition">
              Book a Table
            </button>
<button className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-neutral-700 text-xs sm:text-sm font-medium text-neutral-50/90 hover:border-emerald-300/70 hover:text-emerald-200 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 transition">
              Order Now
            </button>
</div>
<div className="mt-8 grid grid-cols-3 gap-4 text-[11px] sm:text-xs text-neutral-200">
<div className="border border-neutral-800/80 rounded-xl bg-black/20 backdrop-blur px-3 py-2.5">
<div className="text-amber-300 font-semibold tracking-tight text-sm">Wood Oven Pizza</div>
<div className="text-neutral-400 mt-0.5">Signature hand-tossed pies</div>
</div>
<div className="border border-neutral-800/80 rounded-xl bg-black/20 backdrop-blur px-3 py-2.5">
<div className="text-emerald-300 font-semibold tracking-tight text-sm">Nature Friendly</div>
<div className="text-neutral-400 mt-0.5">Rustic wood &amp; green corners</div>
</div>
<div className="border border-neutral-800/80 rounded-xl bg-black/20 backdrop-blur px-3 py-2.5">
<div className="text-sky-300 font-semibold tracking-tight text-sm">Everyday Café</div>
<div className="text-neutral-400 mt-0.5">Coffee, bites &amp; conversations</div>
</div>
</div>
</div>

<div className="w-full lg:w-5/12">
<div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 backdrop-blur shadow-xl shadow-black/60">
<div className="border-b border-neutral-800 px-5 py-4 flex items-center justify-between">
<div>
<p className="text-xs uppercase tracking-[0.16em] text-neutral-400">Reserve</p>
<p className="text-sm font-semibold tracking-tight text-neutral-50">Book a Table</p>
</div>
<div className="h-9 w-9 rounded-full bg-amber-400/10 border border-amber-300/50 flex items-center justify-center text-amber-300">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
</div>
</div>
<form className="px-5 py-4 space-y-3">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="flex flex-col gap-1">
<label className="text-[11px] font-medium text-neutral-300">Name</label>
<input className="w-full rounded-lg bg-neutral-900/60 border border-neutral-800 px-3 py-2 text-xs text-neutral-50 placeholder:text-neutral-500 focus:outline-none focus:border-amber-300/80 focus:ring-1 focus:ring-amber-300/80 transition" placeholder="Full Name" type="text"/>
</div>
<div className="flex flex-col gap-1">
<label className="text-[11px] font-medium text-neutral-300">Phone</label>
<input className="w-full rounded-lg bg-neutral-900/60 border border-neutral-800 px-3 py-2 text-xs text-neutral-50 placeholder:text-neutral-500 focus:outline-none focus:border-amber-300/80 focus:ring-1 focus:ring-amber-300/80 transition" placeholder="+91-XXXXXXXXXX" type="tel"/>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="flex flex-col gap-1">
<label className="text-[11px] font-medium text-neutral-300">Date</label>
<input className="w-full rounded-lg bg-neutral-900/60 border border-neutral-800 px-3 py-2 text-xs text-neutral-50 placeholder:text-neutral-500 focus:outline-none focus:border-amber-300/80 focus:ring-1 focus:ring-amber-300/80 transition" type="date"/>
</div>
<div className="flex flex-col gap-1">
<label className="text-[11px] font-medium text-neutral-300">Time</label>
<input className="w-full rounded-lg bg-neutral-900/60 border border-neutral-800 px-3 py-2 text-xs text-neutral-50 placeholder:text-neutral-500 focus:outline-none focus:border-amber-300/80 focus:ring-1 focus:ring-amber-300/80 transition" type="time"/>
</div>
</div>
<div className="flex flex-col gap-1">
<label className="text-[11px] font-medium text-neutral-300">Guests</label>
<select className="w-full rounded-lg bg-neutral-900/60 border border-neutral-800 px-3 py-2 text-xs text-neutral-50 focus:outline-none focus:border-amber-300/80 focus:ring-1 focus:ring-amber-300/80 transition">
<option className="bg-neutral-900">2 Guests</option>
<option className="bg-neutral-900">1 Guest</option>
<option className="bg-neutral-900">3 Guests</option>
<option className="bg-neutral-900">4 Guests</option>
<option className="bg-neutral-900">5+ Guests</option>
</select>
</div>
<button className="w-full mt-1 inline-flex justify-center items-center gap-2 rounded-full bg-amber-400 text-neutral-950 text-xs font-semibold tracking-tight px-4 py-2.5 hover:bg-amber-300 border border-amber-300/80 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 transition" type="submit">
                Confirm Reservation
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<p className="text-[11px] text-neutral-500">
                House no 991/3, Opposite Government Daman College, Nani Daman, Daman, India – 396210
              </p>
</form>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900 bg-neutral-950" id="about">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
<div className="grid lg:grid-cols-[1.15fr,0.85fr] gap-10 lg:gap-16 items-center">

<div>
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-amber-300 mb-2">
              About Fusion Feast Café
            </p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-50">
              Rustic, nature-friendly, and unmistakably modern.
            </h2>
<p className="mt-4 text-sm sm:text-base text-neutral-300 max-w-xl">
              “Modern plates, traditional soul – serving the best of both worlds.
              Endless sips, bites, and conversations — only at Fusion Feast Café.”
            </p>
<p className="mt-4 text-sm text-neutral-400 max-w-xl">
              From hand-crafted wood oven pizzas to slow-brewed coffees, every plate is designed
              to bring comfort and curiosity together. Our space blends warm wooden textures,
              indoor plants, and ambient lighting to create a café that feels like an escape
              in the heart of Nani Daman.
            </p>
<div className="mt-6 grid grid-cols-3 gap-4 text-[11px] sm:text-xs text-neutral-200">
<div className="border border-neutral-800 rounded-xl bg-neutral-900/40 px-3 py-2.5">
<div className="text-neutral-50 font-semibold tracking-tight text-sm">Wood &amp; Warmth</div>
<div className="text-neutral-400 mt-0.5">Rustic wood textures, cozy seating.</div>
</div>
<div className="border border-neutral-800 rounded-xl bg-neutral-900/40 px-3 py-2.5">
<div className="text-neutral-50 font-semibold tracking-tight text-sm">Green Corners</div>
<div className="text-neutral-400 mt-0.5">Indoor plants &amp; nature-inspired décor.</div>
</div>
<div className="border border-neutral-800 rounded-xl bg-neutral-900/40 px-3 py-2.5">
<div className="text-neutral-50 font-semibold tracking-tight text-sm">Ambient Evenings</div>
<div className="text-neutral-400 mt-0.5">Soft lights, music &amp; conversations.</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3 sm:gap-4">
<div className="space-y-3 sm:space-y-4">
<div className="relative h-40 sm:h-44 lg:h-52 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
<img alt="Rustic café wooden interior" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
</div>
<div className="relative h-32 sm:h-36 lg:h-40 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
<img alt="Warm café entrance lighting" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"></div>
</div>
</div>
<div className="space-y-3 sm:space-y-4 pt-6">
<div className="relative h-32 sm:h-36 lg:h-40 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
<img alt="Indoor plants and nature friendly seating" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"></div>
</div>
<div className="relative h-40 sm:h-44 lg:h-52 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
<img alt="Cozy table with coffee and dessert" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438109491414-7198515b166b?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900 bg-neutral-950" id="menu">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8">
<div>
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-amber-300 mb-2">
              Smart Menu
            </p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-50">
              Crafted plates for every mood.
            </h2>
<p className="mt-2 text-sm text-neutral-300 max-w-md">
              Explore our wood oven pizzas, pastas, sandwiches, coffees, and desserts —
              all designed to pair with long conversations.
            </p>
</div>
<div className="flex flex-wrap gap-2 text-[11px] text-neutral-300">
<div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-neutral-800 bg-neutral-900/60">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
<span>Wood oven specialty</span>
</div>
<div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-neutral-800 bg-neutral-900/60">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
<span>Vegetarian friendly</span>
</div>
</div>
</div>

<div className="inline-flex flex-wrap gap-2 text-xs font-medium rounded-full border border-neutral-800 bg-neutral-900/80 p-1 mb-8">
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400 text-neutral-950 border border-amber-300/80 shadow-sm shadow-amber-400/40">
<span>🔥</span>
<span>Wood Oven Pizza</span>
</button>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-neutral-200 hover:bg-neutral-800 hover:border-neutral-700 border border-transparent transition">
<span>🍝</span>
<span>Pastas</span>
</button>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-neutral-200 hover:bg-neutral-800 hover:border-neutral-700 border border-transparent transition">
<span>🥪</span>
<span>Sandwiches</span>
</button>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-neutral-200 hover:bg-neutral-800 hover:border-neutral-700 border border-transparent transition">
<span>☕</span>
<span>Coffees &amp; Beverages</span>
</button>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-neutral-200 hover:bg-neutral-800 hover:border-neutral-700 border border-transparent transition">
<span>🍰</span>
<span>Desserts</span>
</button>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

<article className="group rounded-2xl border border-neutral-800 bg-neutral-900/70 overflow-hidden flex flex-col hover:border-amber-300/70 hover:shadow-lg hover:shadow-amber-500/15 transition">
<div className="relative h-36">
<img alt="Smoky wood oven Margherita pizza" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1548369937-47519962c11a?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
<div className="absolute top-2 left-2 inline-flex items-center px-2 py-0.5 rounded-full bg-amber-400/90 text-[10px] font-semibold tracking-tight text-neutral-950">
                Signature
              </div>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-sm font-semibold tracking-tight text-neutral-50">
                    Smoky Margherita Wood Oven Pizza
                  </h3>
<p className="mt-1 text-[11px] text-neutral-400">
                    Classic San Marzano tomatoes, basil, buffalo mozzarella with a charred wood-fired crust.
                  </p>
</div>
<p className="text-sm font-semibold tracking-tight text-amber-300 whitespace-nowrap">
                  ₹399
                </p>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-[10px] text-neutral-400">
<span className="inline-flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Veg
                  </span>
<span className="inline-flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    12"
                  </span>
</div>
<button className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-neutral-50 text-neutral-950 text-[11px] font-medium hover:bg-amber-300 hover:text-neutral-950 border border-neutral-300 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 transition">
                  Add to Cart
                </button>
</div>
</div>
</article>

<article className="group rounded-2xl border border-neutral-800 bg-neutral-900/70 overflow-hidden flex flex-col hover:border-amber-300/70 hover:shadow-lg hover:shadow-amber-500/15 transition">
<div className="relative h-36">
<img alt="Truffle mushroom pizza" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-sm font-semibold tracking-tight text-neutral-50">
                    Truffle Forest Pizza
                  </h3>
<p className="mt-1 text-[11px] text-neutral-400">
                    Earthy mushrooms, caramelized onions, mozzarella &amp; drizzle of truffle oil.
                  </p>
</div>
<p className="text-sm font-semibold tracking-tight text-amber-300 whitespace-nowrap">
                  ₹459
                </p>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-[10px] text-neutral-400">
<span className="inline-flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Veg
                  </span>
</div>
<button className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-neutral-50 text-neutral-950 text-[11px] font-medium hover:bg-amber-300 hover:text-neutral-950 border border-neutral-300 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 transition">
                  Order Now
                </button>
</div>
</div>
</article>

<article className="group rounded-2xl border border-neutral-800 bg-neutral-900/70 overflow-hidden flex flex-col hover:border-amber-300/70 hover:shadow-lg hover:shadow-amber-500/15 transition">
<div className="relative h-36">
<img alt="Creamy Alfredo pasta" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
<div className="absolute top-2 left-2 inline-flex items-center px-2 py-0.5 rounded-full bg-neutral-950/80 text-[10px] text-neutral-100 border border-neutral-700">
                🍝 Pastas
              </div>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-sm font-semibold tracking-tight text-neutral-50">
                    Café-Style Alfredo Penne
                  </h3>
<p className="mt-1 text-[11px] text-neutral-400">
                    Silky parmesan cream sauce, roasted garlic, herbs &amp; toasted crumbs.
                  </p>
</div>
<p className="text-sm font-semibold tracking-tight text-amber-300 whitespace-nowrap">
                  ₹349
                </p>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-[10px] text-neutral-400">
<span className="inline-flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Veg
                  </span>
</div>
<button className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-neutral-50 text-neutral-950 text-[11px] font-medium hover:bg-amber-300 hover:text-neutral-950 border border-neutral-300 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 transition">
                  Add to Cart
                </button>
</div>
</div>
</article>

<article className="group rounded-2xl border border-neutral-800 bg-neutral-900/70 overflow-hidden flex flex-col hover:border-amber-300/70 hover:shadow-lg hover:shadow-amber-500/15 transition">
<div className="relative h-36">
<img alt="Grilled pesto sandwich" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
<div className="absolute top-2 left-2 inline-flex items-center px-2 py-0.5 rounded-full bg-neutral-950/80 text-[10px] text-neutral-100 border border-neutral-700">
                🥪 Sandwiches
              </div>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-sm font-semibold tracking-tight text-neutral-50">
                    Grilled Pesto Veggie Sandwich
                  </h3>
<p className="mt-1 text-[11px] text-neutral-400">
                    Charred veggies, basil pesto, cheddar &amp; house bread, grilled golden.
                  </p>
</div>
<p className="text-sm font-semibold tracking-tight text-amber-300 whitespace-nowrap">
                  ₹259
                </p>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-[10px] text-neutral-400">
<span className="inline-flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Veg
                  </span>
</div>
<button className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-neutral-50 text-neutral-950 text-[11px] font-medium hover:bg-amber-300 hover:text-neutral-950 border border-neutral-300 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 transition">
                  Order Now
                </button>
</div>
</div>
</article>

<article className="group rounded-2xl border border-neutral-800 bg-neutral-900/70 overflow-hidden flex flex-col hover:border-amber-300/70 hover:shadow-lg hover:shadow-amber-500/15 transition">
<div className="relative h-36">
<img alt="Artisanal latte coffee" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
<div className="absolute top-2 left-2 inline-flex items-center px-2 py-0.5 rounded-full bg-neutral-950/80 text-[10px] text-neutral-100 border border-neutral-700">
                ☕ Coffees
              </div>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-sm font-semibold tracking-tight text-neutral-50">
                    Fusion Feast Latte
                  </h3>
<p className="mt-1 text-[11px] text-neutral-400">
                    Signature espresso blend with velvety microfoam &amp; a hint of vanilla.
                  </p>
</div>
<p className="text-sm font-semibold tracking-tight text-amber-300 whitespace-nowrap">
                  ₹199
                </p>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-[10px] text-neutral-400">
<span>Hot / Iced</span>
</div>
<button className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-neutral-50 text-neutral-950 text-[11px] font-medium hover:bg-amber-300 hover:text-neutral-950 border border-neutral-300 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 transition">
                  Add to Cart
                </button>
</div>
</div>
</article>

<article className="group rounded-2xl border border-neutral-800 bg-neutral-900/70 overflow-hidden flex flex-col hover:border-amber-300/70 hover:shadow-lg hover:shadow-amber-500/15 transition">
<div className="relative h-36">
<img alt="Dessert slice with berries" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
<div className="absolute top-2 left-2 inline-flex items-center px-2 py-0.5 rounded-full bg-neutral-950/80 text-[10px] text-neutral-100 border border-neutral-700">
                🍰 Desserts
              </div>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-sm font-semibold tracking-tight text-neutral-50">
                    Baked Cheesecake Slice
                  </h3>
<p className="mt-1 text-[11px] text-neutral-400">
                    Creamy baked cheesecake with berry compote &amp; biscuit crust.
                  </p>
</div>
<p className="text-sm font-semibold tracking-tight text-amber-300 whitespace-nowrap">
                  ₹229
                </p>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-[10px] text-neutral-400">
<span>Limited batch</span>
</div>
<button className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-neutral-50 text-neutral-950 text-[11px] font-medium hover:bg-amber-300 hover:text-neutral-950 border border-neutral-300 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 transition">
                  Order Now
                </button>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="border-t border-neutral-900 bg-neutral-950" id="gallery">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8">
<div>
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-amber-300 mb-2">
              Gallery
            </p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-50">
              A café woven with stories &amp; details.
            </h2>
<p className="mt-2 text-sm text-neutral-300 max-w-md">
              From nature-kissed corners to our iconic signboard, explore the mood of Fusion Feast Café.
            </p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">

<div className="relative group rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 col-span-2 md:col-span-2">
<img alt="Peacock in garden area" className="w-full h-48 sm:h-60 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition"></div>
<div className="absolute bottom-3 left-3 text-[11px] text-neutral-100">
<p className="font-medium tracking-tight">Peacock Garden Corner</p>
<p className="text-neutral-400">Nature vibes for slow mornings.</p>
</div>
</div>

<div className="relative group rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
<img alt="Woman near café entrance" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition"></div>
<div className="absolute bottom-3 left-3 text-[11px] text-neutral-100">
<p className="font-medium tracking-tight">Entrance Vibes</p>
</div>
</div>

<div className="relative group rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
<img alt="Pasta plate" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition"></div>
<div className="absolute bottom-3 left-3 text-[11px] text-neutral-100">
<p className="font-medium tracking-tight">Pasta Plates</p>
</div>
</div>

<div className="relative group rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 col-span-2 md:col-span-2">
<img alt="Wooden interiors" className="w-full h-48 sm:h-60 object-cover" src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition"></div>
<div className="absolute bottom-3 left-3 text-[11px] text-neutral-100">
<p className="font-medium tracking-tight">Wooden Interiors</p>
<p className="text-neutral-400">Warm lighting &amp; textured wood panels.</p>
</div>
</div>

<div className="relative group rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
<img alt="Café signboard" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition"></div>
<div className="absolute bottom-3 left-3 text-[11px] text-neutral-100">
<p className="font-medium tracking-tight">Café Signboard</p>
</div>
</div>

<div className="relative group rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
<div className="w-full h-48 flex flex-col items-center justify-center bg-neutral-950/60">
<div className="h-16 w-16 rounded-full bg-amber-400 flex items-center justify-center text-neutral-950 text-sm font-semibold tracking-tight border border-amber-300/80 shadow shadow-amber-400/40 mb-2">
                FFC
              </div>
<p className="text-xs font-semibold tracking-tight text-neutral-50">Fusion Feast Café</p>
<p className="text-[11px] text-neutral-400 mt-1">Logo Banner</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900 bg-neutral-950" id="highlights">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-6">
<div>
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-amber-300 mb-2">
              Highlights
            </p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-50">
              Stories from Fusion Feast Café.
            </h2>
<p className="mt-2 text-sm text-neutral-300 max-w-md">
              ThunderStrokes, café vibes, special dishes, events, and customer moments.
            </p>
</div>
</div>

<div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">

<div className="min-w-[230px] max-w-[260px] rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4 flex flex-col gap-3 hover:border-amber-300/70 hover:shadow-md hover:shadow-amber-500/15 transition">
<div className="flex items-center justify-between">
<div className="text-xs font-semibold tracking-tight text-neutral-50">
                ThunderStrokes / ThunderStory
              </div>
<span className="text-[11px] text-amber-300">Stories</span>
</div>
<p className="text-[11px] text-neutral-300">
              Late-night sketching sessions and creative jams, powered by pizza and endless coffee.
            </p>
</div>

<div className="min-w-[230px] max-w-[260px] rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4 flex flex-col gap-3 hover:border-amber-300/70 hover:shadow-md hover:shadow-amber-500/15 transition">
<div className="flex items-center justify-between">
<div className="text-xs font-semibold tracking-tight text-neutral-50">
                Cafe Vibes
              </div>
<span className="text-[11px] text-emerald-300">Ambience</span>
</div>
<p className="text-[11px] text-neutral-300">
              Golden hour light, wooden tables, soft music, and the hum of conversations.
            </p>
</div>

<div className="min-w-[230px] max-w-[260px] rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4 flex flex-col gap-3 hover:border-amber-300/70 hover:shadow-md hover:shadow-amber-500/15 transition">
<div className="flex items-center justify-between">
<div className="text-xs font-semibold tracking-tight text-neutral-50">
                Special Dishes
              </div>
<span className="text-[11px] text-sky-300">Seasonal</span>
</div>
<p className="text-[11px] text-neutral-300">
              Rotating chef specials that blend local flavours with global techniques.
            </p>
</div>

<div className="min-w-[230px] max-w-[260px] rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4 flex flex-col gap-3 hover:border-amber-300/70 hover:shadow-md hover:shadow-amber-500/15 transition">
<div className="flex items-center justify-between">
<div className="text-xs font-semibold tracking-tight text-neutral-50">
                Events
              </div>
<span className="text-[11px] text-rose-300">Happenings</span>
</div>
<p className="text-[11px] text-neutral-300">
              Stand-up nights, acoustic sets, and small gatherings under warm lights.
            </p>
</div>

<div className="min-w-[230px] max-w-[260px] rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4 flex flex-col gap-3 hover:border-amber-300/70 hover:shadow-md hover:shadow-amber-500/15 transition">
<div className="flex items-center justify-between">
<div className="text-xs font-semibold tracking-tight text-neutral-50">
                Customer Moments
              </div>
<span className="text-[11px] text-violet-300">Memories</span>
</div>
<p className="text-[11px] text-neutral-300">
              Celebrations, first dates, work marathons, and everything in between.
            </p>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900 bg-neutral-950" id="contact">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
<div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 lg:gap-16 items-start">

<div>
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-amber-300 mb-2">
              Visit &amp; Connect
            </p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-50">
              Find us in the heart of Nani Daman.
            </h2>
<p className="mt-2 text-sm text-neutral-300 max-w-md">
              House no 991/3, Opposite Government Daman College, Nani Daman, Daman, India – 396210
            </p>
<div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 text-xs">
<button className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-100 hover:border-amber-300/70 hover:text-amber-200 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 transition">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l2.27-1.27a2 2 0 0 1 2.11-.11 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
                Call
              </button>
<button className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-100 hover:border-emerald-300/70 hover:text-emerald-200 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 transition">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3.6 5.8 10 12l-2 4 4-2 6.2 3.6a1 1 0 0 0 1.4-1.1L18 4.7A2 2 0 0 0 15.6 3L4.7 4.6a1 1 0 0 0-1.1 1.2Z"></path>
</svg>
                WhatsApp
              </button>
<button className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-100 hover:border-sky-300/70 hover:text-sky-200 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 transition">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
                Message
              </button>
<button className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-100 hover:border-pink-300/70 hover:text-pink-200 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300 transition">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"></path>
<path d="M17.5 6.5h.01"></path>
</svg>
                Follow
              </button>
</div>

<div className="mt-8 rounded-2xl border border-neutral-800 overflow-hidden bg-neutral-900">
<div className="aspect-[16/10]">
<iframe allowfullscreen="" className="w-full h-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.617725035433!2d72.839!3d20.414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sin!4v1700000000000" style={{border: '0'}}></iframe>
</div>
</div>
</div>

<div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-5 sm:p-6">
<h3 className="text-sm font-semibold tracking-tight text-neutral-50">
              Quick Table Booking
            </h3>
<p className="mt-1 text-[11px] text-neutral-400">
              Share your details and preferred time. We’ll confirm your reservation shortly.
            </p>
<form className="mt-4 space-y-3 text-xs">
<div className="flex flex-col gap-1">
<label className="text-[11px] font-medium text-neutral-300">Name</label>
<input className="w-full rounded-lg bg-neutral-950/70 border border-neutral-800 px-3 py-2 text-xs text-neutral-50 placeholder:text-neutral-500 focus:outline-none focus:border-amber-300/80 focus:ring-1 focus:ring-amber-300/80 transition" placeholder="Full Name" type="text"/>
</div>
<div className="flex flex-col gap-1">
<label className="text-[11px] font-medium text-neutral-300">Phone</label>
<input className="w-full rounded-lg bg-neutral-950/70 border border-neutral-800 px-3 py-2 text-xs text-neutral-50 placeholder:text-neutral-500 focus:outline-none focus:border-amber-300/80 focus:ring-1 focus:ring-amber-300/80 transition" placeholder="+91-XXXXXXXXXX" type="tel"/>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="flex flex-col gap-1">
<label className="text-[11px] font-medium text-neutral-300">Date</label>
<input className="w-full rounded-lg bg-neutral-950/70 border border-neutral-800 px-3 py-2 text-xs text-neutral-50 placeholder:text-neutral-500 focus:outline-none focus:border-amber-300/80 focus:ring-1 focus:ring-amber-300/80 transition" type="date"/>
</div>
<div className="flex flex-col gap-1">
<label className="text-[11px] font-medium text-neutral-300">Time</label>
<input className="w-full rounded-lg bg-neutral-950/70 border border-neutral-800 px-3 py-2 text-xs text-neutral-50 placeholder:text-neutral-500 focus:outline-none focus:border-amber-300/80 focus:ring-1 focus:ring-amber-300/80 transition" type="time"/>
</div>
</div>
<div className="flex flex-col gap-1">
<label className="text-[11px] font-medium text-neutral-300">Guests</label>
<select className="w-full rounded-lg bg-neutral-950/70 border border-neutral-800 px-3 py-2 text-xs text-neutral-50 focus:outline-none focus:border-amber-300/80 focus:ring-1 focus:ring-amber-300/80 transition">
<option className="bg-neutral-900">2 Guests</option>
<option className="bg-neutral-900">1 Guest</option>
<option className="bg-neutral-900">3 Guests</option>
<option className="bg-neutral-900">4 Guests</option>
<option className="bg-neutral-900">5+ Guests</option>
</select>
</div>
<div className="flex flex-col gap-1">
<label className="text-[11px] font-medium text-neutral-300">Notes (optional)</label>
<textarea className="w-full rounded-lg bg-neutral-950/70 border border-neutral-800 px-3 py-2 text-xs text-neutral-50 placeholder:text-neutral-500 focus:outline-none focus:border-amber-300/80 focus:ring-1 focus:ring-amber-300/80 transition" placeholder="Occasion, preferences, special requests…" rows="3"></textarea>
</div>
<button className="w-full mt-2 inline-flex justify-center items-center gap-2 rounded-full bg-amber-400 text-neutral-950 text-xs font-semibold tracking-tight px-4 py-2.5 hover:bg-amber-300 border border-amber-300/80 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 transition" type="submit">
                Book Table
              </button>
<p className="text-[10px] text-neutral-500 mt-1">
                We respect your time — a team member will reach out to confirm.
              </p>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-900 bg-neutral-950">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 text-xs text-neutral-300">
<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">

<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-amber-400 flex items-center justify-center text-neutral-950 text-[11px] font-semibold tracking-tight border border-amber-300/80 shadow shadow-amber-400/40">
                FFC
              </div>
<div>
<p className="text-sm font-semibold tracking-tight text-neutral-50">Fusion Feast Café</p>
<p className="text-[11px] text-neutral-400">
                  Modern plates, traditional soul.
                </p>
</div>
</div>
<div>
<p className="text-[11px] font-medium text-neutral-300">Opening Hours</p>
<p className="text-[11px] text-neutral-400 mt-1">
                Monday – Sunday: 11:00 AM – 11:00 PM
              </p>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
<div>
<p className="text-[11px] font-medium text-neutral-300 mb-2">Quick Links</p>
<ul className="space-y-1 text-[11px] text-neutral-400">
<li><a className="hover:text-amber-300 transition" href="#menu">Menu</a></li>
<li><a className="hover:text-amber-300 transition" href="#about">About</a></li>
<li><a className="hover:text-amber-300 transition" href="#gallery">Gallery</a></li>
<li><a className="hover:text-amber-300 transition" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<p className="text-[11px] font-medium text-neutral-300 mb-2">Contact</p>
<ul className="space-y-1 text-[11px] text-neutral-400">
<li>Nani Daman, Daman, India</li>
<li>Opp. Government Daman College</li>
</ul>
</div>
<div>
<p className="text-[11px] font-medium text-neutral-300 mb-2">Social</p>
<div className="flex gap-2">
<button className="inline-flex items-center justify-center h-7 w-7 rounded-full border border-neutral-800 text-neutral-300 hover:border-amber-300/70 hover:text-amber-200 transition">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z"></path>
</svg>
</button>
<button className="inline-flex items-center justify-center h-7 w-7 rounded-full border border-neutral-800 text-neutral-300 hover:border-pink-300/70 hover:text-pink-200 transition">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"></path>
<path d="M17.5 6.5h.01"></path>
</svg>
</button>
<button className="inline-flex items-center justify-center h-7 w-7 rounded-full border border-neutral-800 text-neutral-300 hover:border-sky-300/70 hover:text-sky-200 transition">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 2-7 20-4-9-9-4Z"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-neutral-900 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-[10px] text-neutral-500">
<p>© <span id="yearSpan">2024</span> Fusion Feast Café. All rights reserved.</p>
<p>Modern plates, traditional soul – serving the best of both worlds.</p>
</div>
</div>
</footer>
</div>


    </>
  );
}
