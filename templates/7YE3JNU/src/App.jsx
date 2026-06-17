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
      
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({strokeWidth:1.5});
      // Animate on load (staggered)
      [...document.querySelectorAll('.animate-fadeInUp')].forEach((el, i) => {
        setTimeout(()=>{el.style.opacity=1;el.style.animationPlayState='running';}, i*70+100);
      });

      // Category toggle
      document.querySelectorAll('[data-category]').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('[data-category]').forEach(b => {
            b.classList.remove('bg-lime-300','text-black','font-semibold','shadow-sm','border-transparent');
            b.classList.add('border','border-gray-200','text-gray-700');
          });
          btn.classList.remove('border','border-gray-200','text-gray-700');
          btn.classList.add('bg-lime-300','text-black','font-semibold','shadow-sm','border-transparent');
        });
      });
      // Bottom nav active state
      document.querySelectorAll('[data-nav]').forEach(icon => {
        icon.addEventListener('click', () => {
          document.querySelectorAll('[data-nav]').forEach(i => i.classList.add('text-gray-400'));
          icon.classList.remove('text-gray-400');
          icon.classList.add('text-black');
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
      

<div className="w-full max-w-sm flex flex-col items-center pt-8 pb-36 px-2 sm:px-0">

<section className="w-full">
<div className="bg-white rounded-3xl shadow px-5 sm:px-6 py-6 animate-fadeInUp" style={{animationDelay: '0.1s'}}>
<h1 className="text-[1.55rem] sm:text-2xl font-medium tracking-tight leading-tight mb-7 animate-fadeInUp" style={{animationDelay: '0.15s'}}>
          Find Your <span className="font-semibold">Dream Stay</span>
</h1>

<button className="group w-full flex items-center justify-between bg-gray-100 hover:bg-gray-200 outline-none focus-visible:ring-2 focus-visible:ring-lime-300 rounded-full px-5 py-3 mb-4 transition animate-fadeInUp" style={{animationDelay: '0.22s'}}>
<span className="flex items-center gap-3 text-gray-500 group-hover:text-gray-700 transition">
<i className="w-5 h-5" data-lucide="map-pin"></i>
<span className="text-sm sm:text-base">Add your location</span>
</span>
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down"></i>
</button>

<button className="group w-full flex items-center justify-between bg-gray-100 hover:bg-gray-200 outline-none focus-visible:ring-2 focus-visible:ring-lime-300 rounded-full px-5 py-3 mb-4 transition animate-fadeInUp" style={{animationDelay: '0.27s'}}>
<span className="flex items-center gap-3 text-gray-500 group-hover:text-gray-700 transition">
<i className="w-5 h-5" data-lucide="calendar"></i>
<span className="text-sm sm:text-base">Check In - Check Out</span>
</span>
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down"></i>
</button>

<div className="flex gap-2 mb-6 animate-fadeInUp" style={{animationDelay: '0.32s'}}>
<button className="group flex-1 flex items-center justify-between bg-gray-100 hover:bg-gray-200 outline-none focus-visible:ring-2 focus-visible:ring-lime-300 rounded-full px-5 py-3 transition">
<span className="flex items-center gap-3 text-gray-500 group-hover:text-gray-700 transition">
<i className="w-5 h-5" data-lucide="users"></i>
<span className="text-sm sm:text-base">Guest</span>
</span>
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down"></i>
</button>
<button className="group flex-1 flex items-center justify-between bg-gray-100 hover:bg-gray-200 outline-none focus-visible:ring-2 focus-visible:ring-lime-300 rounded-full px-5 py-3 transition">
<span className="flex items-center gap-3 text-gray-500 group-hover:text-gray-700 transition">
<i className="w-5 h-5" data-lucide="wallet"></i>
<span className="text-sm sm:text-base">Price</span>
</span>
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down"></i>
</button>
</div>

<div className="flex flex-wrap gap-2 mb-8 animate-fadeInUp" style={{animationDelay: '0.37s'}}>
<button className="bg-lime-300 text-black font-semibold rounded-full px-4 py-2 text-sm shadow-sm transition border border-transparent hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300" data-category="">Villa</button>
<button className="border border-gray-200 text-gray-700 rounded-full px-4 py-2 text-sm transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300" data-category="">Hotel</button>
<button className="border border-gray-200 text-gray-700 rounded-full px-4 py-2 text-sm transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300" data-category="">Apartment</button>
<button className="border border-gray-200 text-gray-700 rounded-full px-4 py-2 text-sm transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300" data-category="">Resport</button>
<button className="border border-gray-200 text-gray-700 rounded-full px-4 py-2 text-sm transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300" data-category="">Eco-Lodge</button>
<button className="border border-gray-200 text-gray-700 rounded-full px-4 py-2 text-sm transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300" data-category="">Campsite</button>
</div>

<button className="w-full bg-lime-400 hover:bg-lime-500 active:bg-lime-600 text-black font-semibold rounded-full py-3 text-lg transition shadow-md animate-fadeInUp" style={{animationDelay: '0.42s'}}>
          Search
        </button>
</div>

<div className="mt-10 animate-fadeInUp" style={{animationDelay: '0.55s'}}>
<h2 className="text-lg sm:text-xl font-medium tracking-tight mb-4">Today’s Special Offer 🎉</h2>
<div className="relative rounded-3xl overflow-hidden shadow-md group">
<img alt="Special offer" className="w-full h-56 object-cover scale-100 group-hover:scale-105 transition duration-300" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<button className="absolute top-3 right-3 bg-white/80 backdrop-blur-md rounded-full p-2 hover:bg-lime-100 transition outline-none focus-visible:ring-2 focus-visible:ring-lime-300 border border-white shadow">
<i className="w-5 h-5 text-gray-700" data-lucide="heart"></i>
</button>
</div>
</div>
</section>
</div>

<nav className="fixed bottom-0 inset-x-0 bg-white shadow-[0_-2px_16px_rgba(0,0,0,0.05)] flex items-center justify-between px-5 py-4 sm:px-10 rounded-t-3xl max-w-sm mx-auto border-t border-gray-100 z-20 animate-fadeInUp" style={{animationDelay: '0.7s'}}>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300" data-nav="">
<i className="w-6 h-6" data-lucide="home"></i>
</button>
<button className="flex items-center gap-2 bg-black text-white px-7 py-3 rounded-full shadow-lg hover:bg-gray-900 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300">
<i className="w-5 h-5" data-lucide="search"></i>
<span className="font-medium">Search</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300" data-nav="">
<i className="w-6 h-6" data-lucide="heart"></i>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300" data-nav="">
<i className="w-6 h-6" data-lucide="user"></i>
</button>
</nav>



    </>
  );
}
