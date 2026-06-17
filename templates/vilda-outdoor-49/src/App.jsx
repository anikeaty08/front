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



      lucide.createIcons({ strokeWidth: 1.5 });

      // Mobile menu toggle
      const menuBtn = document.getElementById('menuBtn');
      const mobileNav = document.getElementById('mobileNav');
      if (menuBtn && mobileNav) {
          menuBtn.addEventListener('click', () => {
              mobileNav.classList.toggle('hidden');
          });
      }
    
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
      

<header className="relative">
<div className="absolute inset-0">
<img alt="Dawn over distant mountains" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1920&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80"></div>
</div>
<nav className="relative z-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-lg font-semibold text-white tracking-tight">Vilda</span>
</div>
<nav className="hidden md:flex gap-6 text-sm text-white/70 items-center">
<a className="hover:text-white transition-colors font-medium" href="#discover">Discover</a>
<a className="hover:text-white transition-colors font-medium" href="#toolkit">Toolkit</a>
<a className="hover:text-white transition-colors font-medium" href="#journal">Journal</a>
<a className="hover:text-white transition-colors font-medium" href="#library">Library</a>
</nav>
<div className="flex items-center gap-2">
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-white/10 bg-white/10 text-white hover:bg-white/15" id="menuBtn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<a className="group relative inline-flex transition duration-300 ease-out select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 items-center justify-center hover:bg-white/15 text-white bg-white/10 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 hidden md:flex" href="#plan">
<span className="text-sm font-medium">Plan Your Trip</span>
<i className="ml-2 w-4 h-4" data-lucide="arrow-down-right"></i>
</a>
</div>
</div>
<div className="md:hidden border-t border-white/10 mt-2 pt-2 pb-3 hidden" id="mobileNav">
<div className="grid gap-2">
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/90" href="#discover">
                Discover
              </a>
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/80" href="#toolkit">
                Toolkit
              </a>
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/80" href="#journal">
                Journal
              </a>
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/80" href="#library">
                Library
              </a>
<div className="flex items-center justify-between gap-2 pt-2">
<a className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-4 py-2 text-sm font-semibold hover:bg-white/90 transition w-full justify-center" href="#plan">
                  Plan Your Trip
                </a>
</div>
</div>
</div>
</div>
</nav>
<section className="relative z-10">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-28 pb-24 lg:pb-40 text-center">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20 backdrop-blur">
<i className="h-4 w-4 text-white/80" data-lucide="route"></i>
<span className="text-xs font-medium text-white/80">
              Adaptive trip planning
            </span>
</div>
<h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl text-white font-light tracking-tighter">
            Go anywhere, effortlessly.
          </h1>
<p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-white/80">
            NomadIQ learns your rhythm—pace, mood, curiosity—to craft routes
            that feel natural. Every journey is personal, seamless, and
            unmistakably yours.
          </p>
<div className="flex gap-3 mt-[50px] items-center justify-center">
<a className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-5 py-3 text-sm sm:text-base font-semibold hover:bg-white/90 transition" href="#">
              Plan my trip
            </a>
<a className="inline-flex items-center gap-2 sm:text-base hover:bg-white/15 ring-1 ring-white/15 transition text-sm font-medium text-white bg-white/10 rounded-full pt-3 pr-5 pb-3 pl-5 backdrop-blur" href="#">
              See how it works
            </a>
</div>
<div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/60">
<i className="h-3 w-3" data-lucide="lock"></i>
<span className="uppercase tracking-wider">Private by design</span>
</div>
</div>
</section>
</header>

<section className="lg:px-12 md:py-24 bg-stone-100 border-stone-200/50 border-t pt-16 pr-6 pb-16 pl-6">
<div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
<div className="md:col-span-5">
<div className="inline-flex items-center bg-stone-200 text-stone-700 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
<i className="w-3 h-3 mr-2" data-lucide="leaf"></i>
            Leave No Trace Commitment
          </div>
<h2 className="md:text-3xl leading-tight text-2xl text-stone-900 tracking-tighter">
            Reconnecting people with <span className="text-stone-600 tracking-tighter">wilderness</span> through responsible camping and curated experiences
          </h2>
<p className="mt-4 text-stone-600 text-base leading-relaxed">
            Every campsite reflects our commitment to environmental stewardship and authentic outdoor connection.
          </p>
</div>
<div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
<div className="text-center group">
<div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-sm mb-4 group-hover:shadow-md transition-shadow">
<i className="w-6 h-6 text-stone-600" data-lucide="map-pin"></i>
</div>
<p className="text-3xl md:text-4xl text-stone-900 mb-2 tracking-tighter">120+</p>
<p className="text-sm text-stone-600 font-medium">Remote Campsites</p>
<p className="text-xs text-stone-500 mt-1">Across wilderness areas</p>
</div>
<div className="text-center group">
<div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-sm mb-4 group-hover:shadow-md transition-shadow">
<i className="w-6 h-6 text-stone-600" data-lucide="users"></i>
</div>
<p className="text-3xl md:text-4xl text-stone-900 mb-2 tracking-tighter">8.5K+</p>
<p className="text-sm text-stone-600 font-medium">Happy Campers</p>
<p className="text-xs text-stone-500 mt-1">Since 2019</p>
</div>
<div className="text-center group">
<div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-sm mb-4 group-hover:shadow-md transition-shadow">
<i className="w-6 h-6 text-stone-600" data-lucide="sparkles"></i>
</div>
<p className="md:text-4xl text-3xl text-stone-900 tracking-tighter mb-2">4.9/5</p>
<p className="text-sm font-medium text-stone-600">Average Rating</p>
<p className="text-xs text-stone-500 mt-1">From 2,300+ reviews</p>
</div>
</div>
</div>

<div className="mt-16 pt-16 border-t border-stone-200">
<div className="grid md:grid-cols-3 gap-6">
<div className="hover:shadow-md transition-shadow group cursor-pointer bg-white border-stone-200/50 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
<div className="flex items-center justify-between mb-4">
<i className="w-8 h-8 text-stone-600 group-hover:text-stone-800 transition-colors" data-lucide="tent"></i>
<i className="w-5 h-5 text-stone-400 group-hover:text-stone-600 transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h3 className="font-semibold text-stone-900 mb-2">Backcountry Camping</h3>
<p className="text-sm text-stone-600 leading-relaxed">Remote wilderness sites accessible only by hiking, where solitude and nature take center stage.</p>
</div>
<div className="hover:shadow-md transition-shadow group cursor-pointer bg-white border-stone-200/50 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
<div className="flex mb-4 items-center justify-between">
<i className="w-8 h-8 text-stone-600 group-hover:text-stone-800 transition-colors" data-lucide="compass"></i>
<i className="w-5 h-5 text-stone-400 group-hover:text-stone-600 transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h3 className="font-semibold text-stone-900 mb-2">Guided Experiences</h3>
<p className="text-sm text-stone-600 leading-relaxed">Expert-led camping trips with navigation support, wilderness skills, and local knowledge.</p>
</div>
<div className="hover:shadow-md transition-shadow group cursor-pointer bg-white border-stone-200/50 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
<div className="flex items-center justify-between mb-4">
<i className="w-8 h-8 text-stone-600 group-hover:text-stone-800 transition-colors" data-lucide="backpack"></i>
<i className="w-5 h-5 text-stone-400 group-hover:text-stone-600 transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h3 className="font-semibold text-stone-900 mb-2">Gear Rental</h3>
<p className="text-sm text-stone-600 leading-relaxed">Premium camping equipment packages delivered to your trailhead, so you travel light.</p>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 bg-gray-50">
<div className="mx-auto max-w-6xl overflow-hidden" style={{maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to top, transparent, black 15%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to top, transparent, black 15%)', maskComposite: 'intersect', WebkitMaskComposite: 'destination-in'}}>
<div className="flex w-max" style={{animation: 'marquee-left 80s linear infinite', willChange: 'transform'}}>
<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-4 flex-shrink-0 pr-2 sm:pr-4">
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&amp;q=80"/>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-4 flex-shrink-0 pr-2 sm:pr-4">
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&amp;q=80"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Nature scene" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gray-50">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl mb-12 md:mb-16 border-l border-gray-200 pl-5">
<p className="text-sm text-gray-500 mb-3 font-medium tracking-wide uppercase">
            Explore, Reflect, Repeat
          </p>
<h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
            What Camping Looks Like
          </h2>
<p className="text-lg text-gray-600 font-light leading-relaxed">
            A closer look at the quiet moments, slow mornings, and nature
            places.
          </p>
</div>
<div className="grid gap-6 md:gap-8 md:grid-cols-3">
<article className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Remote camping" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1200&amp;q=80"/>
<div className="absolute top-4 left-4">
<span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-xs font-medium text-gray-900 rounded-full shadow-sm">
                  Color Therapy
                </span>
</div>
</div>
<div className="p-5 md:p-6 flex flex-col gap-3 flex-1">
<h3 className="text-lg md:text-xl font-semibold tracking-tight">
                Camp Where Cars Can't Go
              </h3>
<p className="text-gray-600 font-light leading-relaxed">
                Explore hidden locations where nature takes the lead, and settle
                into places that feel calm, open, and far from the rush.
              </p>
<div className="pt-1">
<a className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-orange-600 transition-colors" href="#">
                  Learn More
                  <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</article>
<article className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Coffee and campfire" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?w=1200&amp;q=80"/>
<div className="absolute top-4 right-4">
<span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-xs font-medium text-gray-900 rounded-full shadow-sm">
                  Sustainability
                </span>
</div>
</div>
<div className="p-5 md:p-6 flex flex-col gap-3 flex-1">
<h3 className="text-lg md:text-xl font-semibold tracking-tight">
                Coffee, Fire &amp; Silence
              </h3>
<p className="text-gray-600 font-light leading-relaxed">
                This is what camping looks like when you take your time. Brew
                something hot, care for the fire, and let the day move at its
                own pace.
              </p>
<div className="pt-1">
<a className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-orange-600 transition-colors" href="#">
                  Learn More
                  <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</article>
<article className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Mountain view" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&amp;q=80"/>
<div className="absolute top-4 right-4">
<span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-xs font-medium text-gray-900 rounded-full shadow-sm">
                  Guide
                </span>
</div>
</div>
<div className="p-5 md:p-6 flex flex-col gap-3 flex-1">
<h3 className="text-lg md:text-xl font-semibold tracking-tight">
                The View Does the Talking
              </h3>
<p className="text-gray-600 font-light leading-relaxed">
                You don't need much when the landscape speaks for itself. Big
                skies and water will remind you what matters out here.
              </p>
<div className="pt-1">
<a className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-orange-600 transition-colors" href="#">
                  Learn More
                  <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</article>
</div>
</div>
</section>

<footer className="py-16 px-6 bg-white border-t border-gray-200">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<h4 className="text-xl font-semibold tracking-tight mb-4">Vilda</h4>
<p className="text-sm text-gray-600 font-light leading-relaxed">
              Reconnect with nature through curated camping experiences.
            </p>
</div>
<div>
<h5 className="text-sm font-semibold text-gray-900 mb-4 tracking-tight">
              Explore
            </h5>
<ul className="space-y-3">
<li>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">
                  Campsites
                </a>
</li>
<li>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">
                  Journal
                </a>
</li>
<li>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">
                  Community
                </a>
</li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold text-gray-900 mb-4 tracking-tight">
              Support
            </h5>
<ul className="space-y-3">
<li>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">
                  Help Center
                </a>
</li>
<li>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">
                  Contact Us
                </a>
</li>
<li>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">
                  Safety
                </a>
</li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold text-gray-900 mb-4 tracking-tight">
              Legal
            </h5>
<ul className="space-y-3">
<li>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">
                  Privacy
                </a>
</li>
<li>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">
                  Terms
                </a>
</li>
<li>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">
                  Cookie Policy
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-gray-500 font-light">
            © 2024 Vilda. All rights reserved.
          </p>
<div className="flex items-center gap-6">
<a className="text-gray-500 hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="text-gray-500 hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="text-gray-500 hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
