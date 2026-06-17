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
},
colors: {
zinc: {
850: '#202022',
950: '#0c0c0e',
}
}
}
}
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="text-lg font-medium tracking-tighter text-zinc-900 group-hover:text-zinc-600 transition-colors">LAXMI MAHAL</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm text-zinc-500 font-medium">
<a className="hover:text-zinc-900 transition-colors" href="#rooms">Rooms</a>
<a className="hover:text-zinc-900 transition-colors" href="#amenities">Amenities</a>
<a className="hover:text-zinc-900 transition-colors" href="#location">Location</a>
<a className="hover:text-zinc-900 transition-colors" href="#reviews">Reviews</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="tel:+919555777688">
<iconify-icon icon="lucide:phone" strokeWidth="1.5"></iconify-icon>
                    +91 95557 77688
                </a>
<a className="bg-zinc-900 text-white text-xs font-medium px-4 py-2 rounded-md hover:bg-zinc-800 transition-colors shadow-sm ring-1 ring-white/10" href="#location">
                    Contact Us
                </a>
</div>
</div>
</nav>

<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Laxmi Mahal Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-900/60 via-zinc-900/40 to-zinc-900/20"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-10">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] tracking-wide uppercase font-medium mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Open 24 Hours
            </div>
<h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-6 drop-shadow-sm">
                Sanctuary in South Delhi.
            </h1>
<p className="text-base md:text-lg text-zinc-200 max-w-xl mx-auto font-light leading-relaxed mb-10">
                A casual, family-friendly retreat in Jasola Vihar. Featuring kitchenettes, premium amenities, and effortless access to the metro and Apollo Hospital.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full animate-fade-in-up">
<a className="h-11 px-8 rounded-full bg-white text-zinc-900 text-sm font-medium hover:bg-zinc-100 transition-all flex items-center gap-2 shadow-xl shadow-black/5" href="#rooms">
                    Explore Rooms
                    <iconify-icon icon="lucide:arrow-down" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="h-11 px-8 rounded-full bg-zinc-900/40 backdrop-blur-md border border-white/20 text-white text-sm font-medium hover:bg-zinc-900/60 transition-all flex items-center gap-2" href="tel:+919555777688">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="16"></iconify-icon>
                    Call for Enquiry
                </a>
</div>
</div>
</section>

<section className="border-b border-zinc-200 bg-white">
<div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap justify-center gap-8 md:gap-16">
<div className="flex items-center gap-3">
<div className="p-2 bg-zinc-50 rounded-full border border-zinc-100 text-zinc-900">
<iconify-icon className="fill-current" icon="lucide:star" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-zinc-900">4.3 Rating</div>
<div className="text-xs text-zinc-500">Google Reviews</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="p-2 bg-zinc-50 rounded-full border border-zinc-100 text-zinc-900">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-zinc-900">South Delhi</div>
<div className="text-xs text-zinc-500">Jasola Vihar</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="p-2 bg-zinc-50 rounded-full border border-zinc-100 text-zinc-900">
<iconify-icon icon="lucide:train" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-zinc-900">6 Min Walk</div>
<div className="text-xs text-zinc-500">To Metro Station</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-6" id="amenities">
<div className="mb-12">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-2">Designed for Comfort</h2>
<p className="text-zinc-500 text-sm max-w-md">Whether you are visiting Apollo Hospital or traveling for business, our amenities ensure a seamless stay.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-2xl bg-white border border-zinc-200 p-8 shadow-sm hover:shadow-md transition-all">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="lucide:chef-hat" strokeWidth="1.5" width="120"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6">
<iconify-icon icon="lucide:chef-hat" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">In-Room Kitchenettes</h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-sm">
                            Many of our rooms feature private kitchenettes, perfect for long stays or families who prefer home-cooked meals. Equipped for your convenience.
                        </p>
</div>
</div>
</div>

<div className="group rounded-2xl bg-white border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-all">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-4 text-zinc-900">
<iconify-icon icon="lucide:wifi" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1">High-Speed Wi-Fi</h3>
<p className="text-xs text-zinc-500">Connectivity across the property.</p>
</div>

<div className="group rounded-2xl bg-white border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-all">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-4 text-zinc-900">
<iconify-icon icon="lucide:clock" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1">24/7 Front Desk</h3>
<p className="text-xs text-zinc-500">Service whenever you need it.</p>
</div>

<div className="md:col-span-2 group rounded-2xl bg-zinc-900 p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-20 text-white">
<iconify-icon icon="lucide:car" strokeWidth="1.5" width="80"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 h-full">
<div>
<div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="lucide:car" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-1">Free Self-Parking</h3>
<p className="text-sm text-zinc-400">Secure parking space available for guests.</p>
</div>
<div className="hidden md:block">
<span className="text-white/20 text-4xl font-thin tracking-tighter">04</span>
</div>
</div>
</div>

<div className="group rounded-2xl bg-white border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-all">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-4 text-zinc-900">
<iconify-icon icon="lucide:snowflake" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1">Air Conditioning</h3>
<p className="text-xs text-zinc-500">Climate control in every room.</p>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-200" id="rooms">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-2">Accommodation</h2>
<p className="text-zinc-500 text-sm">Choose from our cozy, well-appointed rooms tailored for relaxation.</p>
</div>
<a className="text-sm font-medium text-zinc-900 border-b border-zinc-300 pb-0.5 hover:border-zinc-900 transition-colors inline-flex items-center gap-1" href="#">
                    View all rooms
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] bg-zinc-100 rounded-xl overflow-hidden mb-4 border border-zinc-100">
<img alt="Standard Room with TV" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-zinc-900 mb-1">Deluxe King</h3>
<p className="text-xs text-zinc-500 mb-3">2 Adults • 25m²</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-zinc-50 border border-zinc-200 rounded text-[10px] text-zinc-600 font-medium">Split AC</span>
<span className="px-2 py-1 bg-zinc-50 border border-zinc-200 rounded text-[10px] text-zinc-600 font-medium">LED TV</span>
<span className="px-2 py-1 bg-zinc-50 border border-zinc-200 rounded text-[10px] text-zinc-600 font-medium">Mini Fridge</span>
</div>
</div>
<div className="text-right">
<span className="block text-sm font-medium text-zinc-900">₹2,800</span>
<span className="block text-[10px] text-zinc-400">/ night</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] bg-zinc-100 rounded-xl overflow-hidden mb-4 border border-zinc-100">
<img alt="Suite Room" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-medium text-zinc-900 shadow-sm">
                             Kitchenette Included
                         </div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-zinc-900 mb-1">Executive Suite</h3>
<p className="text-xs text-zinc-500 mb-3">2 Adults • 1 Child • 35m²</p>
<div className="flex gap-2">
<span className="px-2 py-1 bg-zinc-50 border border-zinc-200 rounded text-[10px] text-zinc-600 font-medium">Kitchenette</span>
<span className="px-2 py-1 bg-zinc-50 border border-zinc-200 rounded text-[10px] text-zinc-600 font-medium">Sitting Area</span>
</div>
</div>
<div className="text-right">
<span className="block text-sm font-medium text-zinc-900">₹3,500</span>
<span className="block text-[10px] text-zinc-400">/ night</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-zinc-200 overflow-hidden" id="location">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<span className="text-emerald-400 font-medium text-xs tracking-wider uppercase mb-2 block">Location</span>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-6">Connected to the<br/>Heart of Delhi</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-700">
<iconify-icon className="text-white" icon="lucide:map-pin"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Prime Address</h4>
<p className="text-zinc-400 text-sm mt-1 leading-relaxed">
                                Plot 9, Pocket 2, Jasola Vihar, New Delhi.<br/>
                                A peaceful enclave near the commercial hub.
                            </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-700">
<iconify-icon className="text-white" icon="lucide:navigation"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Nearby Landmarks</h4>
<ul className="text-zinc-400 text-sm mt-1 space-y-1">
<li>• Jasola Vihar Metro (6 min walk)</li>
<li>• Apollo Hospital (15 min walk)</li>
<li>• Lotus Temple (Short drive)</li>
</ul>
</div>
</div>
</div>
<div className="mt-10">
<a className="inline-flex items-center gap-2 text-sm text-white font-medium hover:text-emerald-400 transition-colors" href="https://maps.google.com" target="_blank">
                        Get Directions on Google Maps
                        <iconify-icon icon="lucide:external-link" width="14"></iconify-icon>
</a>
</div>
</div>

<div className="relative h-80 w-full bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700 group">
<img className="w-full h-full object-cover opacity-30 grayscale group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white text-zinc-900 px-4 py-2 rounded-lg shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
<span className="text-xs font-semibold tracking-tight">Laxmi Mahal</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-b border-zinc-200" id="reviews">
<div className="max-w-4xl mx-auto px-6 text-center mb-12">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">Guest Experiences</h2>
</div>
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
<div className="flex text-emerald-500 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed mb-4">
                    "Overall good experience with the hotel. Services are the best part of our stay. Good looking rooms with deep clean laundries."
                </p>
<div className="text-xs font-medium text-zinc-900">- Recent Guest</div>
</div>
<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
<div className="flex text-emerald-500 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed mb-4">
                    "Property location is good... foods are very tasty, services on time."
                </p>
<div className="text-xs font-medium text-zinc-900">- Travel Site Reviewer</div>
</div>
<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex flex-col justify-center items-center text-center">
<div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mb-3">
<iconify-icon className="text-zinc-400" icon="lucide:quote" width="20"></iconify-icon>
</div>
<p className="text-sm text-zinc-500">
                    Rated 4.3/5 based on Google Reviews
                </p>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-xs">
<h3 className="text-lg font-semibold tracking-tighter text-zinc-900 mb-4">LAXMI MAHAL</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        A cozy retreat in New Delhi's Jasola Vihar. Experience comfort, convenience, and warm hospitality.
                    </p>
</div>
<div className="grid grid-cols-2 gap-12 text-sm">
<div>
<h4 className="font-medium text-zinc-900 mb-4">Contact</h4>
<ul className="space-y-3 text-zinc-500">
<li>
<a className="hover:text-zinc-900 transition-colors" href="tel:+919555777688">+91 95557 77688</a>
</li>
<li>
<span className="block text-xs text-zinc-400 uppercase tracking-wider mb-1">Address</span>
                                Plot 9, Pocket 2, Jasola Vihar,<br/>New Delhi, Delhi 110025
                            </li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-4">Menu</h4>
<ul className="space-y-3 text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#rooms">Rooms</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#amenities">Amenities</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#location">Location</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-zinc-400">
                    © 2024 Laxmi Mahal Hotel. All rights reserved.
                </div>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="16"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="lucide:facebook" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
