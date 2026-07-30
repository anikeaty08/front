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



    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();

      /* Mobile menu */
      document.getElementById('mobile-menu-btn')
        .addEventListener('click', () => document.getElementById('mobile-menu').classList.toggle('hidden'));

      /* Sequential reveal */
      const revealEls=[...document.querySelectorAll('[data-animate]')];
      const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            const el=entry.target;
            el.classList.add('animate-reveal');
            observer.unobserve(el);
          }
        });
      },{threshold:.2});

      revealEls.forEach((el,i)=>{
        el.style.animationDelay=`${i*0.12}s`;
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
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100/50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">
<div className="flex items-center space-x-3">
<div>
<h1 className="font-header text-xl font-semibold text-gray-900">Serenity Suites</h1>
<p className="text-xs text-gray-500 font-medium">Luxury Redefined</p>
</div>
</div>
<div className="hidden lg:flex items-center space-x-8">
<a className="nav-link text-gray-700 hover:text-blue-800 focus-ring font-medium text-sm" href="#home">Home</a>
<a className="nav-link text-gray-700 hover:text-blue-800 focus-ring font-medium text-sm" href="#rooms">Rooms</a>
<a className="nav-link text-gray-700 hover:text-blue-800 focus-ring font-medium text-sm" href="#amenities">Amenities</a>
<a className="nav-link text-gray-700 hover:text-blue-800 focus-ring font-medium text-sm" href="#dining">Dining</a>
<a className="nav-link text-gray-700 hover:text-blue-800 focus-ring font-medium text-sm" href="#contact">Contact</a>
</div>
<div className="hidden lg:flex items-center space-x-4">
<button className="flex items-center space-x-2 text-gray-600 hover:text-blue-800 transition-colors focus-ring">
<i className="w-4 h-4" data-lucide="phone"></i>
<span className="text-sm font-medium">+1 (555) 123-4567</span>
</button>
<button className="bg-gradient-to-r from-blue-800 to-blue-500 text-white px-6 py-3 rounded-full hover:shadow-xl transform hover:scale-[1.03] transition-all font-medium text-sm focus-ring">
            Reserve Now
          </button>
</div>
<button className="lg:hidden p-2 rounded-lg hover:bg-gray-50 focus-ring" id="mobile-menu-btn">
<i className="w-6 h-6 text-gray-700" data-lucide="menu"></i>
</button>
</div>
</div>
<div className="lg:hidden hidden bg-white/95 backdrop-blur-lg border-t border-gray-100" id="mobile-menu">
<div className="px-6 py-6 space-y-6">
<a className="block nav-link text-gray-700 hover:text-blue-800 font-medium" href="#home">Home</a>
<a className="block nav-link text-gray-700 hover:text-blue-800 font-medium" href="#rooms">Rooms</a>
<a className="block nav-link text-gray-700 hover:text-blue-800 font-medium" href="#amenities">Amenities</a>
<a className="block nav-link text-gray-700 hover:text-blue-800 font-medium" href="#dining">Dining</a>
<a className="block nav-link text-gray-700 hover:text-blue-800 font-medium" href="#contact">Contact</a>
<div className="pt-4 border-t border-gray-100">
<button className="w-full bg-gradient-to-r from-blue-800 to-blue-500 text-white px-6 py-3 rounded-full font-medium focus-ring">Reserve Now</button>
</div>
</div>
</div>
</nav>

<section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden" id="home">
<div className="absolute inset-0">
<img alt="Luxury Hotel Lobby" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1920&q=80" />
<div className="absolute inset-0 gradient-overlay"></div>
</div>
<div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-16">
<h1 className="font-header text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6" data-animate="">
        Where Luxury Meets <span className="bg-gradient-to-r from-sky-300 to-blue-300 bg-clip-text text-transparent">Serenity</span>
</h1>
<p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed" data-animate="">
        Immerse yourself in unparalleled elegance at Serenity Suites, where every moment is crafted to perfection in the heart of Manhattan's most prestigious district.
      </p>

<div className="w-full max-w-5xl mx-auto" data-animate="">
<div className="bg-white/95 rounded-2xl pt-6 pr-6 pb-6 pl-6 drop-shadow backdrop-blur-2xl">
<div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
<div className="space-y-2">
<label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
<i className="w-4 h-4 text-blue-800" data-lucide="calendar"></i><span>Check-in</span>
</label>
<input className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus-ring focus-ring" type="date" />
</div>
<div className="space-y-2">
<label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
<i className="w-4 h-4 text-blue-800" data-lucide="calendar"></i><span>Check-out</span>
</label>
<input className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus-ring" type="date" />
</div>
<div className="space-y-2">
<label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
<i className="w-4 h-4 text-blue-800" data-lucide="user"></i><span>Guests</span>
</label>
<div className="relative">
<select className="appearance-none w-full p-3 pr-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus-ring">
<option>1 Guest</option><option>2 Guests</option><option>3 Guests</option>
<option>4 Guests</option><option>5+ Guests</option>
</select>
<i className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" data-lucide="chevron-down"></i>
</div>
</div>
<div className="space-y-2">
<label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
<i className="w-4 h-4 text-blue-800" data-lucide="bed"></i><span>Room Type</span>
</label>
<div className="relative">
<select className="appearance-none w-full p-3 pr-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus-ring">
<option>Deluxe Suite</option><option>Executive Suite</option>
<option>Presidential Suite</option><option>Penthouse</option>
</select>
<i className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" data-lucide="chevron-down"></i>
</div>
</div>
<button className="self-end h-[48px] hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex font-semibold text-white bg-gradient-to-r from-blue-800 to-blue-500 rounded-lg pr-6 pl-6 items-center justify-center focus-ring">
              Search Suites
            </button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-0 pb-20" id="rooms">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pr-4 pl-4">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100" data-animate="">
<div className="relative">
<img alt="Manhattan Deluxe Suite" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80" />
<div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
<i className="w-3.5 h-3.5" data-lucide="star"></i><span>Most Popular</span>
</div>
</div>
<div className="p-6 pb-24">
<h3 className="font-header text-2xl font-semibold text-gray-900 mb-2">Manhattan Deluxe Suite</h3>
<p className="text-gray-600 mb-4">Spacious 750 sq ft suite with panoramic city views, marble bathroom, and premium amenities.</p>
</div>
<div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
<div>
<div className="text-2xl font-semibold text-blue-800">$450</div>
<div className="text-sm text-gray-500">per night</div>
</div>
<button className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium focus-ring">Book Now</button>
</div>
</div>

<div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100" data-animate="">
<div className="relative">
<img alt="Executive Premium Suite" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80" />
<div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
<i className="w-3.5 h-3.5" data-lucide="crown"></i><span>Luxury</span>
</div>
</div>
<div className="p-6 pb-24">
<h3 className="font-header text-2xl font-semibold text-gray-900 mb-2">Executive Premium Suite</h3>
<p className="text-gray-600 mb-4">Elegantly appointed 900 sq ft suite featuring a private balcony, dedicated workspace, and personalized concierge service.</p>
</div>
<div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
<div>
<div className="text-2xl font-semibold text-blue-800">$620</div>
<div className="text-sm text-gray-500">per night</div>
</div>
<button className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium focus-ring">Book Now</button>
</div>
</div>

<div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100" data-animate="">
<div className="relative">
<img alt="Presidential Penthouse" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" />
<div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
<i className="w-3.5 h-3.5" data-lucide="badge-check"></i><span>Top Choice</span>
</div>
</div>
<div className="p-6 pb-24">
<h3 className="font-header text-2xl font-semibold text-gray-900 mb-2">Presidential Penthouse</h3>
<p className="text-gray-600 mb-4">An opulent 2,000 sq ft penthouse boasting 360° skyline vistas, private terrace, and exclusive butler service.</p>
</div>
<div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
<div>
<div className="text-2xl font-semibold text-blue-800">$2,300</div>
<div className="text-sm text-gray-500">per night</div>
</div>
<button className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium focus-ring">Book Now</button>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
