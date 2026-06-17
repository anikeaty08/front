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
      

<nav className="fixed top-0 w-full z-50 border-b border-stone-200/50 bg-[#FAFAF9]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg tracking-tighter font-medium uppercase" href="#">Buvette</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#services">Menu</a>
<a className="hover:text-stone-900 transition-colors" href="#about">About</a>
<a className="hover:text-stone-900 transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-stone-900 transition-colors" href="#faq">FAQ</a>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium border border-stone-200 px-4 py-2 rounded-full hover:bg-stone-100 transition-all" href="#contact">
<span>Find Us</span>
<iconify-icon icon="solar:map-arrow-right-linear"></iconify-icon>
</a>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-medium text-stone-600 mb-6">
<iconify-icon className="text-amber-500" icon="solar:star-linear"></iconify-icon>
<span>4.7/5 Google Reviews</span>
</div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-6 text-stone-950">
                    Small space.<br/>
<span className="text-stone-500">Big flavor.</span>
</h1>
<p className="text-lg text-stone-600 mb-8 leading-relaxed max-w-md">
                    Winnipeg's most intimate culinary experience. Coffee, desserts, and cocktails in a cozy 10-seat setting.
                </p>
<div className="flex items-center gap-6 text-sm text-stone-500 font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear"></iconify-icon>
<span>Opens 9am Tue</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:dollar-linear"></iconify-icon>
<span>$10–20 / person</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm relative z-10">
<div className="mb-6">
<h3 className="text-xl font-medium tracking-tight mb-2">Get in touch</h3>
<p className="text-stone-500 text-sm">Have questions or want to book a private event? Send us a message.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700 ml-1">First Name</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 transition-all placeholder:text-stone-400" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700 ml-1">Last Name</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 transition-all placeholder:text-stone-400" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700 ml-1">Email</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 transition-all placeholder:text-stone-400" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700 ml-1">Message</label>
<textarea className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 transition-all placeholder:text-stone-400 resize-none" placeholder="Tell us what you need..." rows="3"></textarea>
</div>
<button className="w-full bg-stone-900 text-white font-medium text-sm py-3.5 rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center gap-2" type="button">
<span>Send Message</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<div className="flex items-center justify-center pt-2">
<span className="text-xs text-stone-400 flex items-center gap-1">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                            We respect your privacy
                        </span>
</div>
</form>
</div>
</div>

<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-stone-100 to-transparent -z-10 opacity-50"></div>
</header>

<section className="py-24 border-t border-stone-200" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-4">Crafted for Quality</h2>
<p className="text-stone-600 max-w-md">A focused menu of artisanal beverages and comfort food, prepared with care.</p>
</div>
<a className="text-sm font-medium text-stone-900 flex items-center gap-1 hover:text-stone-600 transition-colors" href="#">
                    View Full Menu <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 hover:shadow-md transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center mb-6 text-stone-900">
<iconify-icon icon="solar:cup-hot-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Specialty Coffee</h3>
<p className="text-sm text-stone-600 leading-relaxed">
                        From perfect espressos to creamy lattes. A variety of hot drinks to start your morning right.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 hover:shadow-md transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center mb-6 text-stone-900">
<iconify-icon icon="solar:wine-glass-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Cocktails &amp; Wine</h3>
<p className="text-sm text-stone-600 leading-relaxed">
                        Curated selection of wines and handcrafted cocktails perfect for an intimate evening.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 hover:shadow-md transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center mb-6 text-stone-900">
<iconify-icon icon="solar:donut-bitten-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Desserts &amp; Bites</h3>
<p className="text-sm text-stone-600 leading-relaxed">
                        Sweet treats and savory bites. "Great food" sourced locally and made fresh.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-50" id="about">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div>
<img alt="Cozy Interior" className="rounded-xl grayscale opacity-80 hover:opacity-100 transition-opacity duration-500 w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&amp;w=2047&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="inline-block px-3 py-1 rounded-full border border-stone-700 text-xs font-medium text-stone-400 mb-6">
                    Our Philosophy
                </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 leading-tight">
                    An adorable, quaint place that seats just 10 people.
                </h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-stone-400 text-xl" icon="solar:armchair-2-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-stone-200 mb-1">Unmatched Intimacy</h4>
<p className="text-stone-400 text-sm leading-relaxed">We focus on quality over quantity. With only 10 seats, every guest receives our full attention.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-stone-400 text-xl" icon="solar:sun-2-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-stone-200 mb-1">Outdoor Seating</h4>
<p className="text-stone-400 text-sm leading-relaxed">When the weather permits, enjoy our extended patio space for a breath of fresh air.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-stone-400 text-xl" icon="solar:heart-angle-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-stone-200 mb-1">Sweet Staff &amp; Service</h4>
<p className="text-stone-400 text-sm leading-relaxed">Rated 4.7 stars for our amazing service and cozy, comfy atmosphere.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-stone-200" id="gallery">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4">A Glimpse Inside</h2>
<p className="text-stone-600">Moments captured at 120 Scott St.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:h-96">
<div className="col-span-2 md:col-span-2 row-span-2 overflow-hidden rounded-xl bg-stone-200">
<img alt="Coffee" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 overflow-hidden rounded-xl bg-stone-200">
<img alt="Cocktail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 overflow-hidden rounded-xl bg-stone-200">
<img alt="Cake" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&amp;w=2696&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-2 overflow-hidden rounded-xl bg-stone-200">
<img alt="Cafe exterior vibes" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group border border-stone-200 rounded-lg bg-stone-50 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-stone-900 select-none">
<span>Do you accept reservations?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-stone-600 text-sm px-5 pb-5 leading-relaxed border-t border-stone-200/50 pt-4">
                        We currently do not accept reservations due to our limited seating capacity (10 seats). We operate on a first-come, first-served basis.
                    </div>
</details>

<details className="group border border-stone-200 rounded-lg bg-stone-50 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-stone-900 select-none">
<span>Where are you located?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-stone-600 text-sm px-5 pb-5 leading-relaxed border-t border-stone-200/50 pt-4">
                        We are located at 120 Scott St Unit 2, Winnipeg, MB R3L 0K9. We are nestled in a quaint spot perfect for a quiet stop.
                    </div>
</details>

<details className="group border border-stone-200 rounded-lg bg-stone-50 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-stone-900 select-none">
<span>What are your hours?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-stone-600 text-sm px-5 pb-5 leading-relaxed border-t border-stone-200/50 pt-4">
                        We open at 9:00 a.m. on Tuesdays. Please check Google Maps for our most up-to-date holiday hours and weekly schedule.
                    </div>
</details>

<details className="group border border-stone-200 rounded-lg bg-stone-50 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-stone-900 select-none">
<span>Can I book the venue for a private event?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-stone-600 text-sm px-5 pb-5 leading-relaxed border-t border-stone-200/50 pt-4">
                        Since our space is intimate, full buyouts for small private gatherings are possible. Please use the contact form above to inquire.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-center px-6">
<div className="max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
                Come for the coffee,<br/>stay for the atmosphere.
            </h2>
<p className="text-stone-400 mb-8">
                Experience the coziest spot in Winnipeg.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 bg-white text-stone-900 rounded-lg font-medium text-sm hover:bg-stone-100 transition-colors flex items-center justify-center gap-2" href="https://maps.google.com/?q=120+Scott+St+Unit+2+Winnipeg" target="_blank">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
                    Get Directions
                </a>
<button className="w-full sm:w-auto px-6 py-3 border border-stone-700 text-white rounded-lg font-medium text-sm hover:bg-stone-800 transition-colors flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
                    Call Us
                </button>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-200 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-medium tracking-tight uppercase">Buvette</span>
<span className="text-stone-300">|</span>
<span className="text-stone-500 text-sm">Winnipeg, MB</span>
</div>
<div className="text-sm text-stone-500 text-center md:text-right">
<p>120 Scott St Unit 2, R3L 0K9</p>
<p className="mt-1">© 2024 Buvette. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
