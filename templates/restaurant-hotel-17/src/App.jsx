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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-lg font-semibold tracking-tighter text-gray-900" href="#">MG</a>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#dining">Dining</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#rooms">Rooms</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#experiences">Experiences</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors" href="#">Sign In</a>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors shadow-sm" href="#">
                    Book Stay
                </a>
</div>
</div>
</nav>

<main>
<section className="relative pt-24 pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100/50 border border-gray-200/50 text-xs font-medium text-gray-600 mb-8">
<iconify-icon className="text-gray-400" icon="solar:star-linear"></iconify-icon>
                    Now accepting reservations for the season
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
                    Refined dining and <br className="hidden md:block"/> restful stays.
                </h1>
<p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 font-normal">
                    Experience culinary excellence and unparalleled comfort in the heart of the city. MG is your sanctuary for taste and tranquility.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors shadow-sm gap-2" href="#">
                        Reserve a Table
                        <iconify-icon className="text-gray-300" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm" href="#">
                        Explore Rooms
                    </a>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-gray-100 to-transparent rounded-full blur-3xl -z-10 opacity-50 pointer-events-none"></div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
<div className="md:col-span-8 h-96 rounded-2xl overflow-hidden relative group">
<img alt="Restaurant Interior" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<span className="text-xs font-medium uppercase tracking-wider mb-2 block opacity-80">The Restaurant</span>
<h3 className="text-2xl font-semibold tracking-tight">Culinary Mastery</h3>
</div>
</div>
<div className="md:col-span-4 h-96 rounded-2xl overflow-hidden relative group">
<img alt="Hotel Room" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<span className="text-xs font-medium uppercase tracking-wider mb-2 block opacity-80">The Hotel</span>
<h3 className="text-2xl font-semibold tracking-tight">Restful Retreats</h3>
</div>
</div>
</div>
</section>

<section className="bg-white border-t border-gray-100 py-24" id="experiences">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Curated Experiences</h2>
<p className="text-sm text-gray-500 max-w-xl">Every detail at MG is designed to provide a seamless blend of luxury and comfort, ensuring your time with us is unforgettable.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:border-gray-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-gray-900 text-xl" icon="solar:plate-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-2">Signature Dining</h3>
<p className="text-sm text-gray-500 leading-relaxed">Savor seasonal menus crafted by our executive chefs, featuring locally sourced ingredients and innovative techniques.</p>
</div>

<div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:border-gray-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-gray-900 text-xl" icon="solar:bed-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-2">Luxury Suites</h3>
<p className="text-sm text-gray-500 leading-relaxed">Retreat to spacious accommodations featuring premium bedding, smart controls, and panoramic city views.</p>
</div>

<div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:border-gray-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-gray-900 text-xl" icon="solar:cup-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-2">Lounge &amp; Bar</h3>
<p className="text-sm text-gray-500 leading-relaxed">Unwind in our sophisticated lounge with handcrafted cocktails, an extensive wine list, and a relaxed atmosphere.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551882547-ff40c0d129df?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
<div className="max-w-2xl mx-auto px-6 relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Ready to experience MG?</h2>
<p className="text-sm text-gray-400 mb-8 font-normal">Secure your table or book your stay today. We look forward to welcoming you.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-gray-900 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                        Book a Room
                    </button>
<button className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-transparent border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors">
                        Reserve a Table
                    </button>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-semibold tracking-tighter text-gray-900 block mb-4" href="#">MG</a>
<p className="text-xs text-gray-500 leading-relaxed max-w-xs">
                        Elevating hospitality through exceptional food and uncompromising comfort.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-4 tracking-tight">Restaurant</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Menus</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Reservations</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Private Dining</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-4 tracking-tight">Hotel</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Rooms &amp; Suites</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Amenities</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Offers</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-4 tracking-tight">Connect</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-2" href="#"><iconify-icon icon="solar:letter-linear"></iconify-icon> Contact</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-2" href="#"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Location</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-2" href="#"><iconify-icon icon="solar:camera-linear"></iconify-icon> Instagram</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-400">© 2024 MG Restaurant &amp; Hotel. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-xs text-gray-400 hover:text-gray-900 transition-colors" href="#">Privacy</a>
<a className="text-xs text-gray-400 hover:text-gray-900 transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
