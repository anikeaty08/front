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
      

<section className="relative h-[60vh] flex items-center justify-center">
<img alt="Cottage by the pond" className="absolute inset-0 w-full h-full object-cover object-center brightness-75" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80" />
<div className="relative z-10 text-center text-white px-6">
<h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">Pondside Cottage Retreat</h1>
<p className="mt-4 text-lg md:text-2xl font-light drop-shadow-md">Experience serenity & modern luxury in nature’s embrace</p>
<a className="mt-8 inline-block bg-white/90 text-teal-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-teal-600 hover:text-white transition" href="#booking">Book Your Stay</a>
</div>
<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white rounded-3xl shadow-xl px-8 py-6 flex flex-col md:flex-row gap-4 items-center">
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-medium">Lakeview</span>
</div>
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4.5 8-10V5l-8-3-8 3v7c0 5.5 8 10 8 10z"></path></svg>
<span className="font-medium">Private Dock</span>
</div>
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 13V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6"></path><rect height="6" rx="2" width="20" x="2" y="13"></rect></svg>
<span className="font-medium">2 Bedrooms</span>
</div>
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 17v-6a3 3 0 0 1 6 0v6"></path><rect height="4" rx="2" width="18" x="3" y="17"></rect></svg>
<span className="font-medium">Sauna</span>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto mt-32 px-4 md:px-0">
<div className="grid md:grid-cols-2 gap-10 items-center">
<img alt="Cottage Interior" className="rounded-2xl shadow-lg w-full h-72 object-cover object-center" src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80" />
<div>
<h2 className="text-3xl font-bold text-teal-800 mb-4">Unwind in Modern Comfort</h2>
<p className="text-gray-700 text-lg mb-6">Nestled by a tranquil pond, our newly renovated cottage blends contemporary design with rustic charm. Floor-to-ceiling windows invite nature inside, while premium amenities provide the ultimate relaxation.</p>
<ul className="space-y-2 text-gray-600">
<li className="flex items-center"><span className="inline-block w-2 h-2 bg-teal-500 rounded-full mr-3"></span> Smart home controls & high-speed WiFi</li>
<li className="flex items-center"><span className="inline-block w-2 h-2 bg-teal-500 rounded-full mr-3"></span> Kayaks, paddleboards, & fishing gear</li>
<li className="flex items-center"><span className="inline-block w-2 h-2 bg-teal-500 rounded-full mr-3"></span> Outdoor firepit & dining deck</li>
<li className="flex items-center"><span className="inline-block w-2 h-2 bg-teal-500 rounded-full mr-3"></span> EV charging & private parking</li>
</ul>
</div>
</div>
</section>

<section className="mt-20 max-w-5xl mx-auto px-4 md:px-0">
<h3 className="text-2xl font-bold text-teal-700 mb-8 text-center">What's Nearby?</h3>
<div className="md:flex md:gap-12">

<div className="flex-1 space-y-6 mb-12 md:mb-0">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center">
<svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12l2-2 4 4 8-8 2 2-10 10z"></path></svg>
</div>
<div>
<h4 className="font-semibold text-lg text-teal-800">Waterside Restaurant</h4>
<p className="text-gray-600">Local cuisine, 3 min walk</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center">
<svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M15 9.5v2.5a1.5 1.5 0 0 1-3 0V9.5"></path><circle cx="12" cy="16" r="1"></circle></svg>
</div>
<div>
<h4 className="font-semibold text-lg text-teal-800">MiniGolf FunPark</h4>
<p className="text-gray-600">Family fun, 10 min walk</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center">
<svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect height="10" rx="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<div>
<h4 className="font-semibold text-lg text-teal-800">Old Oak Castle</h4>
<p className="text-gray-600">Historic site, 18 min walk</p>
</div>
</div>
</div>

<div className="flex-1 flex justify-center">
<div className="relative w-80 h-80 rounded-2xl shadow-md overflow-hidden">

<iframe className="w-full h-full rounded-2xl" src="https://www.openstreetmap.org/export/embed.html?bbox=14.089%2C46.360%2C14.120%2C46.375&layer=mapnik&marker=46.366%2C14.102" style={{border: `0`}}></iframe>

<div className="absolute left-[58%] top-[58%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
<span className="flex flex-col items-center">
<span className="w-7 h-7 bg-white border-4 border-teal-600 rounded-full flex items-center justify-center shadow-md">
<svg className="w-4 h-4 text-teal-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 11l9-7 9 7"></path><path d="M9 22V12h6v10"></path></svg>
</span>
<span className="text-xs text-teal-700 font-semibold">Cottage</span>
</span>
</div>
<div className="absolute left-[45%] top-[54%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
<span className="flex flex-col items-center">
<span className="w-6 h-6 bg-white border-4 border-orange-400 rounded-full flex items-center justify-center shadow-md">
<svg className="w-3 h-3 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 2v11"></path><path d="M17 2v11"></path><path d="M7 13a5 5 0 0 0 10 0"></path></svg>
</span>
<span className="text-xs text-orange-500">Restaurant</span>
</span>
</div>
<div className="absolute left-[68%] top-[43%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
<span className="flex flex-col items-center">
<span className="w-6 h-6 bg-white border-4 border-green-400 rounded-full flex items-center justify-center shadow-md">
<svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="6"></circle><path d="M12 8v5l3 2"></path></svg>
</span>
<span className="text-xs text-green-600">MiniGolf</span>
</span>
</div>
<div className="absolute left-[80%] top-[25%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
<span className="flex flex-col items-center">
<span className="w-6 h-6 bg-white border-4 border-indigo-400 rounded-full flex items-center justify-center shadow-md">
<svg className="w-3 h-3 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect height="10" rx="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</span>
<span className="text-xs text-indigo-600">Castle</span>
</span>
</div>
</div>
</div>
</div>
</section>

<section className="mt-20 max-w-6xl mx-auto px-4">
<h3 className="text-2xl font-bold text-teal-700 mb-6 text-center">Gallery</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<img alt="Deck View" className="rounded-xl object-cover h-40 w-full shadow-md" src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" />
<img alt="Living Room" className="rounded-xl object-cover h-40 w-full shadow-md" src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80" />
<img alt="Bedroom" className="rounded-xl object-cover h-40 w-full shadow-md" src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80" />
<img alt="Pond" className="rounded-xl object-cover h-40 w-full shadow-md" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" />
</div>
</section>

<section className="mt-24 max-w-lg mx-auto bg-white rounded-2xl shadow-2xl px-8 py-10" id="booking">
<h4 className="text-2xl font-bold text-teal-700 mb-4">Book Your Escape</h4>
<form className="space-y-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="dates">Select Dates</label>
<input className="w-full border border-teal-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400" id="dates" required type="date" />
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="guests">Guests</label>
<select className="w-full border border-teal-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400" id="guests" required>
<option>1-2 Guests</option>
<option>3-4 Guests</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
<input className="w-full border border-teal-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400" id="email" required type="email" />
</div>
<button className="w-full bg-teal-600 text-white font-bold py-3 rounded-xl hover:bg-teal-800 transition" type="submit">Request Booking</button>
</form>
</section>

<footer className="mt-20 py-6 text-center text-gray-500 text-sm">
    © 2025 Pondside Cottage Retreat — Escape to tranquility.
  </footer>

    </>
  );
}
