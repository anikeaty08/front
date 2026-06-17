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



        lucide.createIcons();
    
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
      

<nav className="fixed w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<i className="text-stone-800 w-6 h-6 stroke-[1.5]" data-lucide="coffee"></i>
<span className="text-lg font-semibold tracking-tight text-stone-900 group-hover:text-orange-900 transition-colors">ESPRESSO &amp; CO.</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#menu">Menu</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#visit">Visit</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center justify-center px-4 py-2 text-sm font-medium text-stone-900 bg-transparent border border-stone-200 rounded-full hover:bg-stone-100 transition-all focus:ring-2 focus:ring-stone-200 focus:outline-none">
                    View Menu
                </button>
<button className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-stone-900 rounded-full hover:bg-stone-800 transition-all shadow-sm hover:shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-stone-900 focus:outline-none">
                    Order Online
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-800 text-xs font-medium mb-6 border border-orange-100">
<span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                    Now pouring seasonal Pumpkin Spice
                </div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-stone-900 leading-[1.1] mb-6">
                    Brewed for comfort,<br/>
<span className="text-stone-400">served with heart.</span>
</h1>
<p className="text-lg text-stone-500 mb-8 leading-relaxed max-w-lg">
                    Experience the perfect balance of artisanal roasts and a cozy atmosphere. Your daily ritual, elevated in every cup.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-3.5 rounded-full bg-stone-900 text-white font-medium text-sm hover:bg-stone-800 transition-all shadow-lg shadow-stone-900/10 flex items-center justify-center gap-2 group">
                        Order Coffee
                        <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform stroke-[1.5]" data-lucide="arrow-right"></i>
</button>
<button className="px-8 py-3.5 rounded-full bg-white text-stone-700 border border-stone-200 font-medium text-sm hover:bg-stone-50 hover:border-stone-300 transition-all flex items-center justify-center">
                        View Full Menu
                    </button>
</div>
</div>
<div className="relative lg:h-[600px] h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-stone-900/5">
<img alt="Cozy Coffee Shop Interior" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent"></div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-stone-100" id="about">
<div className="max-w-3xl mx-auto px-6 text-center">
<i className="w-8 h-8 text-orange-700 mx-auto mb-6 stroke-[1.5]" data-lucide="bean"></i>
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-6">More than just caffeine</h2>
<div className="space-y-4 text-stone-500 leading-relaxed text-lg">
<p>
                    Founded in 2014, Espresso &amp; Co. began with a simple mission: to create a space where community and quality coffee intersect. We believe that a coffee shop should be an extension of your living room—a place to pause, reflect, and connect.
                </p>
<p>
                    We source our beans from sustainable farms and roast them locally in small batches to ensure peak freshness. Whether you're here for a quick morning pick-me-up or a long afternoon with a book, we're dedicated to making your day a little warmer.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50" id="menu">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-2">Curated Favorites</h2>
<p className="text-stone-500">Handcrafted beverages and treats loved by locals.</p>
</div>
<a className="text-sm font-medium text-stone-900 hover:text-orange-800 transition-colors flex items-center gap-1 group" href="#">
                    See Full Menu <i className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-white p-6 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow-md hover:border-stone-300 transition-all duration-300">
<div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 bg-stone-100 relative">
<img alt="Latte" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&amp;w=1937&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-semibold text-stone-900 shadow-sm">$5.50</div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-stone-900 text-lg">Velvet Vanilla Latte</h3>
</div>
<p className="text-stone-500 text-sm leading-relaxed">House-made madagascar vanilla syrup, double shot espresso, and silky steamed oat milk.</p>
</div>

<div className="group bg-white p-6 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow-md hover:border-stone-300 transition-all duration-300">
<div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 bg-stone-100 relative">
<img alt="Pastry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-semibold text-stone-900 shadow-sm">$4.25</div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-stone-900 text-lg">Almond Croissant</h3>
</div>
<p className="text-stone-500 text-sm leading-relaxed">Buttery, flaky layers filled with rich almond cream and topped with toasted almonds.</p>
</div>

<div className="group bg-white p-6 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow-md hover:border-stone-300 transition-all duration-300">
<div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 bg-stone-100 relative">
<img alt="Cold Brew" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-semibold text-stone-900 shadow-sm">$4.75</div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-stone-900 text-lg">Maple Cold Brew</h3>
</div>
<p className="text-stone-500 text-sm leading-relaxed">Slow-steeped for 18 hours, infused with pure maple and a splash of cream.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-stone-100">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-4">Why we're your daily ritual</h2>
<p className="text-stone-500">We obsess over the details so you can simply enjoy the moment.</p>
</div>
<div className="grid md:grid-cols-4 gap-8">
<div className="flex flex-col items-center text-center p-4">
<div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 text-orange-700">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="flame"></i>
</div>
<h3 className="font-medium text-stone-900 mb-2">Freshly Roasted</h3>
<p className="text-sm text-stone-500 leading-relaxed">Small batch roasting ensures every bean captures its full flavor profile.</p>
</div>
<div className="flex flex-col items-center text-center p-4">
<div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 text-emerald-700">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="award"></i>
</div>
<h3 className="font-medium text-stone-900 mb-2">Skilled Baristas</h3>
<p className="text-sm text-stone-500 leading-relaxed">Our team is trained in the art of extraction and latte pouring techniques.</p>
</div>
<div className="flex flex-col items-center text-center p-4">
<div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4 text-amber-700">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="armchair"></i>
</div>
<h3 className="font-medium text-stone-900 mb-2">Cozy Atmosphere</h3>
<p className="text-sm text-stone-500 leading-relaxed">Warm lighting, soft seating, and lo-fi beats for productivity or relaxation.</p>
</div>
<div className="flex flex-col items-center text-center p-4">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-blue-700">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="map-pin"></i>
</div>
<h3 className="font-medium text-stone-900 mb-2">Locally Sourced</h3>
<p className="text-sm text-stone-500 leading-relaxed">We partner with local dairies and bakeries to support our community.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50" id="gallery">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-12 text-center">Moments at Espresso &amp; Co.</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px]">

<div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
<img alt="Cafe Vibe" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&amp;w=2047&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
</div>

<div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
<img alt="Coffee Cup" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
<img alt="Barista" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
<img alt="Coffee Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>

<div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
<img alt="Beans" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-stone-100" id="visit">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">
<div className="flex flex-col justify-center">
<div className="mb-8">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-6">Come say hello</h2>
<p className="text-stone-500 text-lg leading-relaxed mb-8">
                        Whether you need a quiet corner to work or a place to catch up with friends, our doors are always open.
                    </p>
</div>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-stone-700 stroke-[1.5]" data-lucide="map-pin"></i>
</div>
<div>
<h3 className="font-medium text-stone-900 mb-1">Address</h3>
<p className="text-stone-500 text-sm">124 Artisanal Avenue,<br/>Brewster District, CA 90210</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-stone-700 stroke-[1.5]" data-lucide="clock"></i>
</div>
<div>
<h3 className="font-medium text-stone-900 mb-1">Opening Hours</h3>
<p className="text-stone-500 text-sm">Mon-Fri: 7:00 AM – 8:00 PM</p>
<p className="text-stone-500 text-sm">Sat-Sun: 8:00 AM – 9:00 PM</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-stone-700 stroke-[1.5]" data-lucide="phone"></i>
</div>
<div>
<h3 className="font-medium text-stone-900 mb-1">Contact</h3>
<p className="text-stone-500 text-sm">(555) 123-4567</p>
<p className="text-stone-500 text-sm">hello@espressoandco.com</p>
</div>
</div>
</div>
<div className="mt-10">
<button className="px-6 py-3 rounded-full bg-stone-100 text-stone-900 text-sm font-medium hover:bg-stone-200 transition-colors flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="navigation"></i>
                        Get Directions
                    </button>
</div>
</div>
<div className="h-[400px] lg:h-auto bg-stone-200 rounded-3xl overflow-hidden relative">

<iframe allowfullscreen="" frameborder="0" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.063683347913!2d-122.41941548468165!3d37.77492927975979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter+HQ!5e0!3m2!1sen!2sus!4v1531256087965" style={{border: '0', filter: 'grayscale(1) contrast(1.2) opacity(0.8)'}} width="100%"></iframe>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col items-center md:items-start gap-2">
<div className="flex items-center gap-2 text-stone-50">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="coffee"></i>
<span className="text-lg font-semibold tracking-tight">ESPRESSO &amp; CO.</span>
</div>
<p className="text-sm">Brewed with care, served with heart.</p>
</div>
<div className="flex gap-6">
<a className="p-2 hover:bg-stone-800 rounded-full transition-colors text-stone-400 hover:text-stone-200" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="instagram"></i>
</a>
<a className="p-2 hover:bg-stone-800 rounded-full transition-colors text-stone-400 hover:text-stone-200" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="twitter"></i>
</a>
<a className="p-2 hover:bg-stone-800 rounded-full transition-colors text-stone-400 hover:text-stone-200" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="facebook"></i>
</a>
</div>
<div className="text-sm text-stone-500">
                © 2024 Espresso &amp; Co. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
