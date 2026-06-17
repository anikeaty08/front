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
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-lg tracking-tighter font-semibold text-neutral-950 uppercase flex items-center gap-2" href="#">
                HOTEL ANGELENO
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#rooms">Rooms &amp; Suites</a>
<a className="hover:text-neutral-900 transition-colors" href="#dining">WEST Dining</a>
<a className="hover:text-neutral-900 transition-colors" href="#amenities">The Culture</a>
<a className="hover:text-neutral-900 transition-colors" href="#events">Meetings</a>
</div>

<div className="flex items-center gap-4">
<button className="md:hidden text-neutral-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
<button className="hidden md:flex items-center gap-2 bg-[#C5A059] hover:bg-[#b08d4b] text-white text-xs font-medium px-5 py-2.5 rounded-full transition-all ring-offset-2 focus:ring-2 ring-[#C5A059]">
                    Book Now
                </button>
</div>
</div>
</nav>

<header className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden bg-neutral-900">

<div className="absolute inset-0 z-0">

<img alt="Hotel Angeleno View" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1534063853610-c0817c180907?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-neutral-900/30"></div>
</div>

<div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in mt-10">
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-white mb-6 leading-[1.1]">
                We Are Not<br/>
<span className="text-[#C5A059]">Square.</span>
</h1>
<p className="text-neutral-200 text-sm md:text-base font-normal max-w-lg mx-auto leading-relaxed mb-10">
                Located at the crossroads of Santa Monica, Beverly Hills and UCLA. Experience the iconic cylindrical hotel with panoramic views and inclusive service.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs font-medium text-white tracking-wide uppercase">
<span className="flex items-center gap-2"><i className="w-4 h-4 text-[#C5A059]" data-lucide="check"></i> No Resort Fees</span>
<span className="flex items-center gap-2"><i className="w-4 h-4 text-[#C5A059]" data-lucide="check"></i> WiFi Included</span>
<span className="flex items-center gap-2"><i className="w-4 h-4 text-[#C5A059]" data-lucide="check"></i> Daily Wine Hour</span>
</div>
</div>

<div className="absolute -bottom-24 md:bottom-12 w-[90%] md:w-auto z-20 shadow-2xl shadow-black/20">
<div className="bg-white p-2 rounded-xl border border-neutral-200 flex flex-col md:flex-row items-center gap-2 md:gap-0">

<div className="relative group w-full md:w-48 px-4 py-2 hover:bg-neutral-50 rounded-lg transition-colors cursor-pointer border-b md:border-b-0 md:border-r border-neutral-100">
<label className="block text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">Check In</label>
<div className="flex items-center justify-between text-neutral-900">
<input className="bg-transparent border-none text-sm font-medium w-full focus:outline-none cursor-pointer font-sans" type="date" value="2023-11-14"/>
</div>
</div>

<div className="relative group w-full md:w-48 px-4 py-2 hover:bg-neutral-50 rounded-lg transition-colors cursor-pointer border-b md:border-b-0 md:border-r border-neutral-100">
<label className="block text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">Check Out</label>
<div className="flex items-center justify-between text-neutral-900">
<input className="bg-transparent border-none text-sm font-medium w-full focus:outline-none cursor-pointer font-sans" type="date" value="2023-11-17"/>
</div>
</div>

<div className="relative group w-full md:w-40 px-4 py-2 hover:bg-neutral-50 rounded-lg transition-colors cursor-pointer">
<label className="block text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">Promo Code</label>
<input className="bg-transparent border-none text-sm font-medium w-full focus:outline-none text-neutral-900 placeholder:text-neutral-300" placeholder="Optional" type="text"/>
</div>

<button className="w-full md:w-auto h-full px-8 py-3 bg-[#C5A059] hover:bg-[#b08d4b] text-white rounded-lg flex items-center justify-center gap-2 transition-all">
<span className="text-sm font-medium">Check Rates</span>
</button>
</div>
</div>
</header>

<section className="pt-32 pb-24 bg-white border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 text-center">
<span className="text-[#C5A059] text-xs font-semibold uppercase tracking-widest mb-3 block">The Angeleno Difference</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-16">Service without boundaries.</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="flex flex-col items-center gap-4 group">
<div className="w-16 h-16 rounded-full bg-neutral-50 flex items-center justify-center group-hover:bg-[#C5A059] transition-colors duration-300">
<i className="w-6 h-6 text-neutral-900 group-hover:text-white transition-colors" data-lucide="ban"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide mb-2">No Resort Fees</h3>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[200px]">What you see is what you pay. We don't believe in hidden charges.</p>
</div>
</div>

<div className="flex flex-col items-center gap-4 group">
<div className="w-16 h-16 rounded-full bg-neutral-50 flex items-center justify-center group-hover:bg-[#C5A059] transition-colors duration-300">
<i className="w-6 h-6 text-neutral-900 group-hover:text-white transition-colors" data-lucide="wifi"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide mb-2">WiFi Included</h3>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[200px]">Stay connected with complimentary high-speed internet access.</p>
</div>
</div>

<div className="flex flex-col items-center gap-4 group">
<div className="w-16 h-16 rounded-full bg-neutral-50 flex items-center justify-center group-hover:bg-[#C5A059] transition-colors duration-300">
<i className="w-6 h-6 text-neutral-900 group-hover:text-white transition-colors" data-lucide="wine"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide mb-2">Wine Hour</h3>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[200px]">Join us daily in the lobby for our complimentary wine hour.</p>
</div>
</div>

<div className="flex flex-col items-center gap-4 group">
<div className="w-16 h-16 rounded-full bg-neutral-50 flex items-center justify-center group-hover:bg-[#C5A059] transition-colors duration-300">
<i className="w-6 h-6 text-neutral-900 group-hover:text-white transition-colors" data-lucide="car-front"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide mb-2">Valet Parking</h3>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[200px]">Curbside valet service with in-and-out privileges for guests.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50" id="rooms">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-3">Accommodations</h2>
<p className="text-neutral-500 max-w-md text-sm leading-relaxed">Every room features a private balcony and views of the Los Angeles skyline, Getty Center, or Santa Monica coast.</p>
</div>
<a className="group flex items-center gap-2 text-sm font-medium text-[#C5A059] hover:text-[#b08d4b] transition-colors" href="#">
                    View all rooms <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden bg-neutral-200 relative">
<img alt="Essential King" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900">Essential King</h3>
</div>
<p className="text-neutral-500 text-sm mb-4 line-clamp-2">Modern comfort with a private balcony, plush king bed, and city views.</p>
<div className="flex items-center gap-4 text-xs text-neutral-400 mb-6">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="users"></i> 2 Guests</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="sun"></i> Balcony</span>
</div>
<button className="w-full py-2.5 rounded-lg border border-neutral-200 text-neutral-900 text-sm font-medium hover:bg-neutral-50 transition-colors">
                            Book Room
                        </button>
</div>
</div>

<div className="group bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden bg-neutral-200 relative">
<img alt="Double Queen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900">Deluxe Double Queen</h3>
</div>
<p className="text-neutral-500 text-sm mb-4 line-clamp-2">Ideal for sharing. Two queen beds, private balcony, and Bluetooth media hub.</p>
<div className="flex items-center gap-4 text-xs text-neutral-400 mb-6">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="users"></i> 4 Guests</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="sun"></i> Balcony</span>
</div>
<button className="w-full py-2.5 rounded-lg border border-neutral-200 text-neutral-900 text-sm font-medium hover:bg-neutral-50 transition-colors">
                            Book Room
                        </button>
</div>
</div>

<div className="group bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden bg-neutral-200 relative">
<img alt="One Bedroom Suite" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900">One Bedroom Suite</h3>
</div>
<p className="text-neutral-500 text-sm mb-4 line-clamp-2">Expansive living area separate from the bedroom. Panoramic sunset views.</p>
<div className="flex items-center gap-4 text-xs text-neutral-400 mb-6">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="users"></i> 3 Guests</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="maximize"></i> Living Room</span>
</div>
<button className="w-full py-2.5 rounded-lg border border-neutral-200 text-neutral-900 text-sm font-medium hover:bg-neutral-50 transition-colors">
                            Book Room
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white relative overflow-hidden" id="dining">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C5A059]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div>
<span className="text-[#C5A059] text-xs font-medium uppercase tracking-widest mb-2 block">17th Floor Rooftop</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6">WEST Restaurant<br/>&amp; Lounge</h2>
<p className="text-neutral-400 text-sm leading-relaxed mb-10 max-w-md">
                        Elevate your dining experience. Enjoy live music, craft cocktails, and California coastal cuisine with 360-degree views of the Los Angeles skyline.
                    </p>

<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
<h3 className="text-lg font-medium mb-6 flex items-center gap-2">
<i className="w-4 h-4 text-[#C5A059]" data-lucide="utensils"></i> Make a Reservation
                        </h3>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">Date</label>
<div className="relative">
<input className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2.5 text-sm text-white focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all outline-none appearance-none" placeholder="Select Date" type="date"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">Time</label>
<div className="relative">
<select className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2.5 text-sm text-white focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all outline-none appearance-none">
<option>7:00 PM</option>
<option>7:30 PM</option>
<option>8:00 PM</option>
</select>
<i className="absolute right-3 top-3 w-4 h-4 text-neutral-500 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<button className="w-full bg-[#C5A059] hover:bg-[#b08d4b] text-white font-medium text-sm py-3 rounded-lg transition-colors mt-2" type="button">
                                Find a Table
                            </button>
</form>
</div>
</div>

<div className="relative h-[550px] w-full rounded-2xl overflow-hidden border border-white/10 group">
<img alt="WEST Restaurant View" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1578474843222-276104868e32?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 text-white bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#C5A059]" data-lucide="music"></i>
<span className="text-xs font-medium tracking-wide">Live Jazz Nightly</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 h-[400px] bg-neutral-100 rounded-2xl overflow-hidden relative">

<img alt="Map Location" className="w-full h-full object-cover grayscale opacity-60" src="https://images.unsplash.com/photo-1589407355263-c64c185a6a69?q=80&amp;w=2168&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="w-4 h-4 bg-[#C5A059] rounded-full ring-4 ring-white shadow-lg animate-pulse"></div>
</div>
</div>
<div className="order-1 md:order-2">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-6">Ideally Located.</h2>
<p className="text-neutral-500 text-sm leading-relaxed mb-6">
                        Hotel Angeleno places you at the center of Los Angeles culture. Minutes from UCLA, the Getty Center, Skirball Center, and the beaches of Santa Monica.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-700">
<i className="w-4 h-4 text-[#C5A059]" data-lucide="map-pin"></i>
<span>The Getty Center <span className="text-neutral-400 ml-1">(5 min)</span></span>
</li>
<li className="flex items-center gap-3 text-sm text-neutral-700">
<i className="w-4 h-4 text-[#C5A059]" data-lucide="map-pin"></i>
<span>UCLA Campus <span className="text-neutral-400 ml-1">(5 min)</span></span>
</li>
<li className="flex items-center gap-3 text-sm text-neutral-700">
<i className="w-4 h-4 text-[#C5A059]" data-lucide="map-pin"></i>
<span>Santa Monica Pier <span className="text-neutral-400 ml-1">(15 min)</span></span>
</li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-neutral-900 border-b border-neutral-900 pb-0.5 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors" href="#">
                        Get Directions
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-50 border-t border-neutral-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-base tracking-tighter font-semibold text-neutral-900 uppercase mb-4 inline-block" href="#">
                        HOTEL ANGELENO
                    </a>
<p className="text-xs text-neutral-500 leading-relaxed">
                        170 N. Church Lane<br/>
                        Los Angeles, CA 90049<br/>
                        Reservations: (866) 264-3536
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-4">Stay</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-[#C5A059] transition-colors" href="#">Accommodations</a></li>
<li><a className="hover:text-[#C5A059] transition-colors" href="#">Special Offers</a></li>
<li><a className="hover:text-[#C5A059] transition-colors" href="#">Accessible Rooms</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-4">Experience</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-[#C5A059] transition-colors" href="#">WEST Restaurant</a></li>
<li><a className="hover:text-[#C5A059] transition-colors" href="#">Meetings &amp; Events</a></li>
<li><a className="hover:text-[#C5A059] transition-colors" href="#">The Culture</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-4">Stay in the Loop</h4>
<p className="text-xs text-neutral-500 mb-4">Join our list for exclusive offers.</p>
<div className="flex gap-2">
<input className="bg-white border border-neutral-200 rounded-md px-3 py-2 text-xs w-full focus:outline-none focus:ring-1 focus:ring-[#C5A059]" placeholder="Email address" type="email"/>
<button className="bg-neutral-900 text-white rounded-md px-3 py-2 hover:bg-[#C5A059] transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-neutral-200 pt-8 gap-4">
<p className="text-[10px] text-neutral-400 uppercase tracking-wide">© 2023 Hotel Angeleno. All rights reserved.</p>
<div className="flex gap-6 text-neutral-400">
<i className="w-4 h-4 hover:text-[#C5A059] cursor-pointer transition-colors" data-lucide="instagram"></i>
<i className="w-4 h-4 hover:text-[#C5A059] cursor-pointer transition-colors" data-lucide="facebook"></i>
<i className="w-4 h-4 hover:text-[#C5A059] cursor-pointer transition-colors" data-lucide="linkedin"></i>
</div>
</div>
</div>
</footer>


    </>
  );
}
